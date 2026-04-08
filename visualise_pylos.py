"""3D Pylos board visualisation using Panda3D + simplepbr.

Coordinate system:
  - Balls have radius 1, so diameter = 2.
  - Level 0 (4×4): centers at z=1, x/y in {-3, -1, 1, 3}
  - Level k: x/y shifted inward by 1 per level, z = 1 + k*sqrt(2)
  - Reserve balls: two rows of 15, placed on either side of the board.
"""

import math
import random

from direct.showbase.ShowBase import ShowBase
from direct.gui.DirectGui import DirectButton, DirectFrame, DirectLabel
from direct.interval.LerpInterval import LerpPosInterval
from direct.interval.IntervalGlobal import Sequence, Func
from panda3d.core import (
    AmbientLight, DirectionalLight, PointLight, LVector3, LVector4,
    WindowProperties, AntialiasAttrib, Point3, Vec4, Vec3,
    Material, GeomNode, Geom, GeomTriangles, GeomVertexFormat,
    GeomVertexData, GeomVertexWriter, loadPrcFileData,
)
import simplepbr

# High-quality window config — must be set before ShowBase init
loadPrcFileData("", "framebuffer-multisample 1")
loadPrcFileData("", "multisamples 4")
loadPrcFileData("", "win-size 1400 900")
loadPrcFileData("", "window-title Pylos 3D")

SQRT2 = math.sqrt(2.0)
BALL_RADIUS = 1.0
BALL_SPACING = 2.0

# --- Position tables ---

def board_positions():
    sizes = [4, 3, 2, 1]
    pos = {}
    idx = 0
    for level, s in enumerate(sizes):
        z = BALL_RADIUS + level * SQRT2
        half = (s - 1)
        for r in range(s):
            for c in range(s):
                x = -half + c * BALL_SPACING
                y = -half + r * BALL_SPACING
                pos[idx] = (x, y, z)
                idx += 1
    return pos

BOARD_POS = board_positions()

def reserve_positions(side):
    y_base = side * 8.0
    positions = []
    for i in range(15):
        row = i // 8
        col = i % 8
        x = -7.0 + col * BALL_SPACING
        y = y_base + side * row * BALL_SPACING
        positions.append((x, y, BALL_RADIUS))
    return positions

RESERVE_P0 = reserve_positions(-1)
RESERVE_P1 = reserve_positions(1)


def make_uv_sphere(rings=32, sectors=64):
    """Generate a high-poly UV sphere GeomNode with normals."""
    fmt = GeomVertexFormat.getV3n3()
    vdata = GeomVertexData("sphere", fmt, Geom.UHStatic)
    vertex = GeomVertexWriter(vdata, "vertex")
    normal = GeomVertexWriter(vdata, "normal")

    for i in range(rings + 1):
        phi = math.pi * i / rings
        for j in range(sectors + 1):
            theta = 2.0 * math.pi * j / sectors
            x = math.sin(phi) * math.cos(theta)
            y = math.sin(phi) * math.sin(theta)
            z = math.cos(phi)
            vertex.addData3(x, y, z)
            normal.addData3(x, y, z)

    tris = GeomTriangles(Geom.UHStatic)
    for i in range(rings):
        for j in range(sectors):
            a = i * (sectors + 1) + j
            b = a + sectors + 1
            tris.addVertices(a, b, a + 1)
            tris.addVertices(a + 1, b, b + 1)

    geom = Geom(vdata)
    geom.addPrimitive(tris)
    node = GeomNode("sphere_hq")
    node.addGeom(geom)
    return node


def make_material(r, g, b, roughness=0.35, metallic=0.0):
    mat = Material()
    mat.setBaseColor(Vec4(r, g, b, 1))
    mat.setRoughness(roughness)
    mat.setMetallic(metallic)
    return mat


# Materials
MAT_LIGHT = make_material(0.92, 0.87, 0.75, roughness=0.3)   # warm ivory
MAT_DARK = make_material(0.18, 0.10, 0.06, roughness=0.25)    # dark wood
MAT_GROUND = make_material(0.20, 0.18, 0.16, roughness=0.8)
MAT_MARKER = make_material(0.30, 0.28, 0.25, roughness=0.6)


class PylosVis(ShowBase):
    def __init__(self):
        super().__init__()

        # PBR pipeline with shadows
        simplepbr.init(
            msaa_samples=4,
            enable_shadows=True,
        )

        self.setBackgroundColor(0.12, 0.12, 0.15, 1)
        self.render.setAntialias(AntialiasAttrib.MAuto)
        self.disableMouse()

        # Pre-build the sphere geom once
        self._sphere_geom = make_uv_sphere()

        self._setup_lights()
        self._make_ground()
        self._make_board_markers()

        self.balls = {}
        self.ball_player = {}
        self._next_id = 0

        self.reserve_p0 = []
        self.reserve_p1 = []
        for p in RESERVE_P0:
            self.reserve_p0.append(self._spawn_ball(p, MAT_LIGHT))
        for p in RESERVE_P1:
            self.reserve_p1.append(self._spawn_ball(p, MAT_DARK))

        self.board_slots = {i: None for i in range(30)}

        # Camera
        self._cam_heading = 30.0
        self._cam_pitch = 30.0
        self._cam_dist = 28.0
        self._update_camera()

        # Input
        for key, fn, arg in [
            ("arrow_left", self._cam_rotate, -3), ("arrow_right", self._cam_rotate, 3),
            ("arrow_up", self._cam_tilt, 3), ("arrow_down", self._cam_tilt, -3),
            ("wheel_up", self._cam_zoom, -1), ("wheel_down", self._cam_zoom, 1),
            ("+", self._cam_zoom, -1), ("-", self._cam_zoom, 1),
        ]:
            self.accept(key, fn, [arg])
            self.accept(key + "-repeat", fn, [arg])

        self._build_gui()

    def _setup_lights(self):
        # Key light — directional with shadows
        dlight = DirectionalLight("key")
        dlight.setColor(LVector4(1.2, 1.15, 1.05, 1))
        dlight.setShadowCaster(True, 2048, 2048)
        dlight.getLens().setFilmSize(30, 30)
        dlight.getLens().setNearFar(1, 60)
        dlnp = self.render.attachNewNode(dlight)
        dlnp.setPos(15, -15, 25)
        dlnp.lookAt(0, 0, 2)
        self.render.setLight(dlnp)

        # Fill light
        dlight2 = DirectionalLight("fill")
        dlight2.setColor(LVector4(0.35, 0.35, 0.4, 1))
        dlnp2 = self.render.attachNewNode(dlight2)
        dlnp2.setHpr(-135, -25, 0)
        self.render.setLight(dlnp2)

        # Rim / back light
        dlight3 = DirectionalLight("rim")
        dlight3.setColor(LVector4(0.25, 0.25, 0.3, 1))
        dlnp3 = self.render.attachNewNode(dlight3)
        dlnp3.setHpr(10, -70, 0)
        self.render.setLight(dlnp3)

        # Ambient
        alight = AmbientLight("ambient")
        alight.setColor(LVector4(0.15, 0.15, 0.17, 1))
        self.render.setLight(self.render.attachNewNode(alight))

    def _make_ground(self):
        from panda3d.core import CardMaker
        cm = CardMaker("ground")
        cm.setFrame(-25, 25, -25, 25)
        gnd = self.render.attachNewNode(cm.generate())
        gnd.setP(-90)
        gnd.setZ(0)
        gnd.setMaterial(MAT_GROUND, 1)

    def _make_board_markers(self):
        from panda3d.core import CardMaker
        cm = CardMaker("marker")
        s = 0.45
        cm.setFrame(-s, s, -s, s)
        for idx, (x, y, z) in BOARD_POS.items():
            m = self.render.attachNewNode(cm.generate())
            m.setPos(x, y, 0.02)
            m.setP(-90)
            m.setMaterial(MAT_MARKER, 1)

    def _spawn_ball(self, pos, material):
        np = self.render.attachNewNode(GeomNode("ball"))
        np.node().addGeom(self._sphere_geom.getGeom(0).makeCopy())
        np.setScale(BALL_RADIUS)
        np.setPos(*pos)
        np.setMaterial(material, 1)
        bid = self._next_id
        self._next_id += 1
        self.balls[bid] = np
        return bid

    def _animate_ball(self, bid, target, duration=0.8, callback=None):
        np = self.balls[bid]
        start = np.getPos()
        tx, ty, tz = target
        mid_x = (start.x + tx) / 2
        mid_y = (start.y + ty) / 2
        mid_z = max(start.z, tz) + 4.0
        half = duration / 2
        seq = Sequence(
            LerpPosInterval(np, half, Point3(mid_x, mid_y, mid_z), blendType="easeInOut"),
            LerpPosInterval(np, half, Point3(tx, ty, tz), blendType="easeInOut"),
        )
        if callback:
            seq.append(Func(callback))
        seq.start()

    # --- Camera ---

    def _update_camera(self):
        rad_h = math.radians(self._cam_heading)
        rad_p = math.radians(self._cam_pitch)
        cos_p = math.cos(rad_p)
        x = self._cam_dist * cos_p * math.sin(rad_h)
        y = -self._cam_dist * cos_p * math.cos(rad_h)
        z = self._cam_dist * math.sin(rad_p)
        self.camera.setPos(x, y, z)
        self.camera.lookAt(0, 0, 2)

    def _cam_rotate(self, delta):
        self._cam_heading = (self._cam_heading + delta) % 360
        self._update_camera()

    def _cam_tilt(self, delta):
        self._cam_pitch = max(5, min(85, self._cam_pitch + delta))
        self._update_camera()

    def _cam_zoom(self, delta):
        self._cam_dist = max(10, min(60, self._cam_dist + delta))
        self._update_camera()

    # --- Developer test GUI ---

    def _build_gui(self):
        frame = DirectFrame(
            frameColor=(0.1, 0.1, 0.1, 0.85),
            frameSize=(-0.52, 0.52, -0.62, 0.52),
            pos=(-0.95, 0, -0.3),
        )
        DirectLabel(
            text="Dev Controls", scale=0.055, pos=(0, 0, 0.44),
            parent=frame, text_fg=(1, 1, 1, 1), frameColor=(0, 0, 0, 0),
        )
        buttons = [
            ("Reserve P0 > Board", self._test_reserve_to_board_p0),
            ("Reserve P1 > Board", self._test_reserve_to_board_p1),
            ("Board > Reserve P0", self._test_board_to_reserve_p0),
            ("Board > Reserve P1", self._test_board_to_reserve_p1),
            ("Raise (board>board)", self._test_raise),
            ("Reset All", self._test_reset),
        ]
        for i, (label, cmd) in enumerate(buttons):
            DirectButton(
                text=label, scale=0.045, pos=(0, 0, 0.32 - i * 0.12),
                parent=frame, command=cmd,
                frameSize=(-4.8, 4.8, -0.8, 1.2),
                text_fg=(1, 1, 1, 1),
                frameColor=(0.3, 0.3, 0.35, 1),
            )
        self._status = DirectLabel(
            text="Ready", scale=0.04, pos=(0, 0, -0.52),
            parent=frame, text_fg=(0.7, 1, 0.7, 1), frameColor=(0, 0, 0, 0),
        )

    def _set_status(self, msg):
        self._status["text"] = msg

    def _find_empty_board_slot(self):
        empty = [i for i in range(30) if self.board_slots[i] is None]
        supported = []
        for i in empty:
            if i < 16:
                supported.append(i)
            else:
                from pylos_env.game import SUPPORT_MAP
                if all(self.board_slots[s] is not None for s in SUPPORT_MAP[i]):
                    supported.append(i)
        return random.choice(supported) if supported else None

    def _find_occupied_board_slot(self, player):
        occupied = [i for i, bid in self.board_slots.items()
                    if bid is not None and self.ball_player.get(bid) == player]
        if not occupied:
            return None
        from pylos_env.game import RESTING_ON
        uncovered = [i for i in occupied
                     if all(self.board_slots[u] is None for u in RESTING_ON[i])]
        return random.choice(uncovered) if uncovered else None

    def _test_reserve_to_board_p0(self):
        self._do_reserve_to_board(0)

    def _test_reserve_to_board_p1(self):
        self._do_reserve_to_board(1)

    def _do_reserve_to_board(self, player):
        reserve = self.reserve_p0 if player == 0 else self.reserve_p1
        if not reserve:
            self._set_status(f"P{player} reserve empty")
            return
        slot = self._find_empty_board_slot()
        if slot is None:
            self._set_status("No empty board slot")
            return
        bid = reserve.pop()
        self.board_slots[slot] = bid
        self.ball_player[bid] = player
        self._set_status(f"P{player} reserve > cell {slot}")
        self._animate_ball(bid, BOARD_POS[slot])

    def _test_board_to_reserve_p0(self):
        self._do_board_to_reserve(0)

    def _test_board_to_reserve_p1(self):
        self._do_board_to_reserve(1)

    def _do_board_to_reserve(self, player):
        slot = self._find_occupied_board_slot(player)
        if slot is None:
            self._set_status(f"No P{player} ball on board")
            return
        reserve = self.reserve_p0 if player == 0 else self.reserve_p1
        rpos = RESERVE_P0 if player == 0 else RESERVE_P1
        bid = self.board_slots[slot]
        self.board_slots[slot] = None
        reserve.append(bid)
        idx = min(len(reserve) - 1, len(rpos) - 1)
        self._set_status(f"P{player} cell {slot} > reserve")
        self._animate_ball(bid, rpos[idx])

    def _test_raise(self):
        for player in [0, 1]:
            src = self._find_occupied_board_slot(player)
            if src is None:
                continue
            from pylos_env.game import cell_level, SUPPORT_MAP
            src_level = cell_level(src)
            bid = self.board_slots[src]
            self.board_slots[src] = None
            candidates = [i for i in range(30)
                          if self.board_slots[i] is None and cell_level(i) > src_level]
            random.shuffle(candidates)
            dst = None
            for c in candidates:
                if c < 16 or all(self.board_slots[s] is not None for s in SUPPORT_MAP[c]):
                    dst = c
                    break
            if dst is None:
                self.board_slots[src] = bid
                continue
            self.board_slots[dst] = bid
            self._set_status(f"Raise cell {src} > cell {dst}")
            self._animate_ball(bid, BOARD_POS[dst])
            return
        self._set_status("No raise possible")

    def _test_reset(self):
        for slot, bid in list(self.board_slots.items()):
            if bid is None:
                continue
            player = self.ball_player.get(bid, 0)
            reserve = self.reserve_p0 if player == 0 else self.reserve_p1
            rpos = RESERVE_P0 if player == 0 else RESERVE_P1
            self.board_slots[slot] = None
            reserve.append(bid)
            idx = min(len(reserve) - 1, len(rpos) - 1)
            self._animate_ball(bid, rpos[idx], duration=0.5)
        self._set_status("Reset")


if __name__ == "__main__":
    app = PylosVis()
    app.run()
