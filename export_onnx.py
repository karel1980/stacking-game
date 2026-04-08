"""Export PylosNet checkpoint to ONNX for use in the web app."""

import argparse
import torch
from pylos_rl.network import PylosNet
from pylos_env.env import OBS_DIM, TOTAL_ACTIONS


def main():
    p = argparse.ArgumentParser()
    p.add_argument("checkpoint", help="Path to .pt checkpoint")
    p.add_argument("-o", "--output", default="pylos-web/public/pylos.onnx")
    args = p.parse_args()

    model = PylosNet()
    ckpt = torch.load(args.checkpoint, map_location="cpu", weights_only=False)
    model.load_state_dict(ckpt["model_state"])
    model.eval()

    obs = torch.randn(1, OBS_DIM)
    mask = torch.ones(1, TOTAL_ACTIONS)

    torch.onnx.export(
        model,
        (obs, mask),
        args.output,
        input_names=["obs", "action_mask"],
        output_names=["log_probs", "value"],
        dynamic_axes={"obs": {0: "batch"}, "action_mask": {0: "batch"},
                      "log_probs": {0: "batch"}, "value": {0: "batch"}},
        opset_version=17,
    )
    print(f"Exported to {args.output}")


if __name__ == "__main__":
    main()
