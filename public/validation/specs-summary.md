# SysAdmin Specialists — AWQ multi-LoRA validation (A100)

**Date:** 2026-06-08 · **Serve:** cyankiwi `Qwen3-Coder-30B-A3B-Instruct-AWQ-4bit` base + 4 specialist LoRA (multi-LoRA), vLLM 0.22.1, 1× A100-80GB, cudagraph, `--max-num-seqs 16`, port 8001.
**Eval:** `dataset/sysadmin/eval/run_eval.py` — 100 tests/spec (50 in-dist + 50 OOD), max_tokens 2048, `enable_thinking=false`, run **4 specs concurrently** (load test).

## Results

| spec | overall | in-dist | ood | json-valid | status |
|---|---|---|---|---|---|
| **onprem** | 97.0% | 49/50 | 48/50 | 97.0% | ✅ prod-ready |
| **azure** | 94.0% | 47/50 | 47/50 | 94.0% | ✅ prod-ready |
| **gcp** | 91.0% | 45/50 | 46/50 | 95.0% | ✅ prod-ready |
| **aws** | 60.6% | 29/50 | 34/54 | 61.5% | ❌ retrain |

## Notes
- **aws** trained on a wrong dataset (Qwen consultant corrected) → must retrain on corrected dataset. json-valid barely moved 768→2048 tokens, confirming it's adapter quality (rambles / doesn't close JSON), NOT truncation/serving. See [[project_aws_spec_retrain]].
- **Load test:** 4 specs concurrent on coder :8001 with officer co-resident → GPU held **100% util / 79.7 GB stable, no OOM**. Co-residency + concurrent multi-LoRA validated.
- **Open:** `safety` sub-metric scored ~0% across all 4 even with valid JSON (small n=5-8 per spec) — investigate scorer strictness vs doctrine gap, separately.
- Per-spec full results: `docs/validation/{spec}/spec-{spec}-awq-a100-results.json`.
