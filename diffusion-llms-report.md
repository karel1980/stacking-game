# Diffusion LLMs: A New Paradigm for Language Generation

## Executive Summary

Diffusion large language models (dLLMs) represent a fundamental architectural shift in how AI generates text. Instead of predicting tokens one at a time (autoregressive), dLLMs generate entire blocks of text in parallel by iteratively refining noise — the same technique that powers image generators like Stable Diffusion and Midjourney, now applied to language. The leading commercial implementations are **Mercury** by Inception Labs and **Gemini Diffusion** by Google DeepMind. Both demonstrate dramatically higher throughput (5–10x) than autoregressive models while maintaining competitive quality on standard benchmarks.

---

## 1. What Are Diffusion LLMs?

### How Autoregressive Models Work
Traditional LLMs (GPT, Claude, Llama, etc.) generate text sequentially — each token depends on all previous tokens. This creates a hard speed ceiling: no matter how powerful the hardware, generation is fundamentally serial.

### How Diffusion LLMs Work
Diffusion LLMs start with random noise and iteratively "denoise" it into coherent text across multiple parallel steps. The output begins as a rough sketch and converges on the final answer through refinement passes. Multiple tokens are produced per forward pass, and the model can revisit and correct earlier tokens — something autoregressive models cannot do.

Key advantages:
- **Parallel generation**: Multiple tokens per forward pass, better GPU utilization
- **Error correction**: The model can revise earlier tokens during refinement
- **Speed**: Dramatically higher throughput on standard hardware
- **Tunable quality/speed tradeoff**: Developers can adjust the number of diffusion steps

Key challenges:
- **Newer paradigm**: Less battle-tested than autoregressive models
- **Quality gap on complex reasoning**: Trails frontier AR models by 5–15% on the hardest benchmarks
- **Long context scaling**: Current dLLMs struggle to scale effectively to very long contexts

---

## 2. Inception Labs

### Company Background
Inception Labs is a Palo Alto-based startup founded by three professors:
- **Stefano Ermon** (Stanford) — co-inventor of core diffusion model techniques
- **Aditya Grover** (UCLA)
- **Volodymyr Kuleshov** (Cornell)

The company emerged from stealth in February 2025 and raised $50 million in seed funding led by Menlo Ventures, with participation from Mayfield and others. Their thesis: the same diffusion approach that won in image and video generation will also win in language.

### Mercury Model Family

Inception Labs has released several Mercury models:

| Model | Type | Throughput (H100) | Context | Released |
|-------|------|-------------------|---------|----------|
| Mercury Coder Mini | Code | 1,109 tok/s | 32K–128K | Feb 2025 |
| Mercury Coder Small | Code | 737 tok/s | 32K–128K | Feb 2025 |
| Mercury (General Chat) | Chat | 708 tok/s | 128K | ~Mid 2025 |
| Mercury 2 | Reasoning | 1,009 tok/s | 128K | Feb 2026 |

### Mercury 2 — First Reasoning Diffusion LLM
Mercury 2, launched February 24, 2026, is the first production-ready reasoning diffusion LLM. It combines the speed of diffusion with chain-of-thought reasoning capabilities.

Pricing: $0.25/M input tokens, $0.75/M output tokens — significantly cheaper than frontier AR models.

The API is OpenAI-compatible, supporting JSON mode, function calling, and tunable reasoning depth (number of diffusion steps).

---

## 3. Benchmark Comparisons

### Speed Benchmarks

| Model | Type | Throughput (tok/s) | Source |
|-------|------|--------------------|--------|
| Mercury Coder Mini | dLLM | 1,109 | Artificial Analysis |
| Mercury 2 | dLLM | 1,009 | Artificial Analysis |
| Gemini Diffusion | dLLM | 1,479 | Google DeepMind |
| Mercury (Chat) | dLLM | 708 | Artificial Analysis |
| Gemini 2.5 Flash | AR | 329 | Artificial Analysis |
| Amazon Nova Lite | AR | 277 | Artificial Analysis |
| Mistral Small 3.1 | AR | 136 | Artificial Analysis |
| GPT-4.1 Nano | AR | 96 | Artificial Analysis |
| Claude 3.5 Haiku | AR | 67 | Artificial Analysis |
| Qwen 3 32B | AR | 63 | Artificial Analysis |

Diffusion models are consistently 5–10x faster than comparable autoregressive models on standard NVIDIA hardware.

### Quality Benchmarks — Mercury (General Chat) vs. Speed-Optimized AR Models

Data from Inception Labs blog, benchmarked by Artificial Analysis:

| Benchmark | Mercury | GPT-4.1 Nano | Claude 3.5 Haiku | Gemini 2.5 Flash |
|-----------|---------|--------------|------------------|------------------|
| MMLU-Pro (%) | 69 | 66 | 63 | 78 |
| GPQA Diamond (%) | 51 | 51 | 41 | 59 |
| HumanEval (%) | 85 | 88 | 86 | 89 |
| MATH-500 (%) | 83 | 85 | 72 | 93 |
| AIME 2024 (%) | 30 | 24 | 3 | 43 |
| LiveCodeBench (%) | 23 | 33 | 31 | 41 |

Mercury matches or exceeds GPT-4.1 Nano and Claude 3.5 Haiku on most benchmarks while running 7x+ faster. It trails Gemini 2.5 Flash on quality but is 2x faster.

### Quality Benchmarks — Mercury Coder (Code-Specific)

From the Mercury technical report (arXiv):

| Benchmark | Mercury Coder Small | Mercury Coder Mini | Claude 3.5 Haiku | GPT-4o Mini |
|-----------|--------------------|--------------------|------------------|-------------|
| HumanEval (%) | 90.0 | 85.4 | 85.0 | 85.0 |
| MBPP (%) | 76.6 | 72.0 | 72.0 | 70.0 |
| EvalPlus (%) | 80.4 | 75.0 | — | — |
| MultiPL-E avg (%) | 76.2 | 68.0 | — | — |
| FIM avg (%) | 84.8 | 82.2 | — | — |

### Quality Benchmarks — Mercury 2 (Reasoning)

| Metric | Mercury 2 | Notes |
|--------|-----------|-------|
| IFBench | 70% | Outperforms several GPT-5 variants |
| Terminal-Bench Hard | Matches Claude 4.5 Haiku | Agentic coding & terminal use |
| HumanEval | 85.4% | Competitive with frontier speed models |
| Speed | 3x+ faster | Than next fastest model in class |

### Gemini Diffusion Benchmarks

Google DeepMind's experimental diffusion model (announced May 2025 at I/O):

| Benchmark | Gemini Diffusion | Gemini 2.0 Flash-Lite |
|-----------|------------------|-----------------------|
| LiveCodeBench v6 (%) | 30.9 | 28.5 |
| BigCodeBench (%) | 45.4 | 45.8 |
| HumanEval (%) | 89.6 | 90.2 |
| MBPP (%) | 76.0 | 75.8 |
| GPQA Diamond (%) | 40.4 | 56.5 |
| AIME 2025 (%) | 23.3 | 20.0 |
| Global MMLU Lite (%) | 69.1 | 79.0 |
| Speed (tok/s) | 1,479 | — |

Gemini Diffusion matches Flash-Lite on code benchmarks but trails on knowledge-heavy tasks (GPQA, MMLU). Its speed of 1,479 tok/s is the fastest reported for any diffusion LLM.

---

## 4. LLM Arena & Human Evaluation

### Copilot Arena (Code)
Mercury Coder Mini was evaluated on Copilot Arena, a platform where developers compare code completions from different models:

| Model | Latency | Latency Rank | Elo Score | Elo Rank |
|-------|---------|--------------|-----------|----------|
| DeepSeek V2.5 (FIM) | 2.07s | 11 | 1025 | 1 |
| Claude 3.5 Sonnet | 1.46s | 8 | 1003 | 1 |
| **Mercury Coder Mini** | **0.25s** | **1** | **993** | **2** |
| Codestral | 0.31s | 2 | 992 | 2 |
| GPT-4o | 0.76s | 5 | 980 | 3 |

Mercury Coder Mini ranks **1st in speed** (0.25s latency, ~6x faster than GPT-4o) and **tied for 2nd in quality** on Copilot Arena, behind only DeepSeek V2.5 and Claude 3.5 Sonnet.

### Chatbot Arena (General)
As of March 2026, the main Chatbot Arena (lmarena.ai) leaderboard is dominated by autoregressive frontier models. Mercury models do not appear in the top rankings for general text or code on the main Arena leaderboard, which is expected given they target the speed-optimized tier rather than the frontier quality tier.

Top Arena rankings (for context):
- Text: Claude Opus 4.6, Grok 4.20, Gemini 3.1 Pro, GPT-5.4
- Code: Claude Opus 4.6, Claude Sonnet 4.6, Claude Opus 4.5

---

## 5. The Speed vs. Quality Tradeoff

The core finding across all benchmarks:

| Dimension | Diffusion LLMs | Autoregressive LLMs |
|-----------|----------------|---------------------|
| Throughput | 700–1,500 tok/s | 50–330 tok/s |
| Frontier quality | 85–95% of best AR models | State-of-the-art |
| Code generation | Competitive (tied 2nd on Copilot Arena) | Slightly ahead on hardest benchmarks |
| Complex reasoning | Trails by 5–15% | Best available |
| Cost | 5–10x cheaper per token | Higher |
| Latency | Sub-second | 1–5 seconds typical |

Diffusion LLMs are not yet replacing frontier AR models for the hardest reasoning tasks. But for latency-sensitive production workloads — coding assistants, voice agents, real-time search, agentic loops — the speed advantage is transformative.

---

## 6. Other Players & Research

### Google DeepMind — Gemini Diffusion
Announced at Google I/O 2025. Experimental, available to trusted testers. Achieves 1,479 tok/s. Comparable to Gemini 2.0 Flash-Lite on code, weaker on knowledge benchmarks. Signals that Google sees diffusion as a serious direction for language models.

### Academic Research
Several academic papers explore the dLLM space:
- **MDLM** (Sahoo et al., 2024) — Simple masked diffusion language models
- **Fast LLMs via Self-Distillation Through Time** — Shows diffusion models can be up to 8x faster than AR models with KV-caching at 1.3B scale
- **AUP** (Hao AI Lab) — Explores accuracy-parallelism tradeoffs in dLLMs
- Multiple papers on accelerating dLLM inference via KV caching and adaptive parallel decoding

### The "Paradox" of Open-Source dLLMs
A critical examination (arXiv:2510.18480) notes that many open-source dLLMs are actually *slower* than AR counterparts of similar scale. The speed advantage of Mercury and Gemini Diffusion comes from proprietary inference engines and custom kernels, not just the architecture itself. This suggests that the engineering around dLLMs matters as much as the architecture.

---

## 7. Conclusions

1. **Diffusion LLMs are real and production-ready.** Mercury models are commercially available, OpenAI API-compatible, and used in production by enterprises.

2. **Speed is the killer feature.** 5–10x throughput improvement on standard NVIDIA hardware fundamentally changes what's possible for real-time AI applications.

3. **Quality is competitive but not frontier.** dLLMs match speed-optimized AR models (Haiku, GPT-4.1 Nano) but trail frontier reasoning models (GPT-5, Claude Opus, Gemini Pro) by a meaningful margin.

4. **The gap is closing.** Mercury 2 added reasoning capabilities. Gemini Diffusion shows Google is investing heavily. The trajectory suggests dLLMs will continue to improve.

5. **Best use cases today:** Coding assistants, voice agents, real-time search, agentic workflows, and any application where latency matters more than peak reasoning quality.

6. **Not yet best for:** Complex multi-step reasoning, frontier-quality creative writing, or tasks requiring the absolute best quality regardless of speed.

---

*Report generated March 20, 2026. Data sourced from Inception Labs, Google DeepMind, Artificial Analysis, Copilot Arena, Chatbot Arena (lmarena.ai), arXiv, and technology publications.*
