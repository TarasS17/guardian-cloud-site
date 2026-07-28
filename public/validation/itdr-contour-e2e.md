# ITDR Contour — End-to-End on Live GPU Models

**Date:** 2026-06-13 · **Verdict:** PASS (detection + officer on real models)

## Goal

Run the **full ITDR contour on real GPU models** (not mocks): alert → 3 detection
shields → officer reasoning → final verdict. Confirm the flagship contour works
end-to-end.

## Environment

| Stage | Model | Status |
|---|---|---|
| Detection shields | 3× Qwen3-4B-Instruct-2507 + LoRA (root / credential / privilege) | running |
| ITDR Officer | Gemma-4-26B-A4B FP8 (MoE 128 experts / 8 active) | running |
| Doctrine (RAG) | Qwen3-VL-8B embeddings + reranker | running |

## Test case

`POST /itdr/analyze` — an SSH brute-force with a successful root login:
severity 8, root-activity + credential-abuse signals, raw logs showing
`Failed ×N → Accepted root`.

## Result

| Stage | Outcome |
|---|---|
| 3 shields | responded in **726–952 ms**; high severity detected (3/3), officer invoked |
| Officer (Gemma-4) | reasoned for **~17–21 s** (real reasoning) |
| **Final verdict** | **severity 8 · classification `confirmed_threat`** |
| Doctrine consult | incident briefing retrieved and attached |
| Persistence | response saved (severity constraint satisfied) |

The officer's verdict is correct: SSH brute-force → successful root login is a
`confirmed_threat` at severity 8.

## Note on retaliation

Retaliation **execution was intentionally not fired** in this run — the test
source IP belongs to a reserved test range, and a real strike would have reported
a noise IP to public threat-intel networks. The ROE gate and the strike proposal
are unit-tested in the orchestrator; a real strike is only ever run against a
genuine attacker, under doctrine and with approval.

## Verdict

**PASS.** The ITDR detection + officer contour works end-to-end on real GPU
models: shields detect → officer (Gemma-4) reasons → correct `confirmed_threat / 8`
verdict, with doctrine consult and the debrief loop functional.
