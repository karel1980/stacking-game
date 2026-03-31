# Pylos AI — Improvement Ideas

## Implemented (2026-03-31)

- **Enriched observations** — 32-dim → 154-dim with per-cell channels (own, opp, level, support fill, square proximity) + global features
- **Residual network** — 2-layer MLP → 4 residual blocks with deeper heads (~756K params)
- **Reward shaping** — small bonuses for squares, take-backs, higher placements
- **Training improvements** — 4096 steps, cosine LR, entropy annealing, curriculum opponent sampling, larger batches

## Future Ideas

### High Impact

- **MCTS at inference time** — 100-200 rollouts using the policy network as prior, AlphaZero-style. Biggest single strength boost after training.
- **Symmetry augmentation** — Pylos board has 4-fold rotational symmetry. Augment training data by rotating observations for 4× effective data.
- **Opponent temperature scheduling** — have pool opponents play with varying temperatures (some greedy, some exploratory) to expose the agent to diverse play styles.

### Medium Impact

- **Target network for value estimation** — use a slowly-updated target network for more stable value bootstrapping.
- **Prioritized experience replay** — weight training samples by TD error to focus on surprising/informative transitions.
- **Larger hidden dim** — try 512 hidden units once training is stable; the 961-action space is large relative to 256 hidden.
- **Separate value/policy backbones** — decouple the two heads so value learning doesn't interfere with policy gradients.

### Lower Priority / Experimental

- **Learned board embedding** — treat the 4-level pyramid as a graph and use message passing instead of flat features.
- **Population-based training** — run multiple agents with different hyperparameters, keep the best.
- **Imitation learning warmstart** — if strong heuristic play is available, pretrain the policy via supervised learning before self-play.
- **Game-phase-aware heads** — separate policy heads for place vs take-back phases, since the action semantics are completely different.
