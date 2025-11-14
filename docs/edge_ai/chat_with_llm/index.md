---
position: 3
---
# Chat With LLM
The Chat with LLM workshop will guide you through four essential techniques used for interacting with LLMs:
* Simple chat request
* RAG
* Structured outputs
* Tool calling

The application runs in the CLI and expects a user prompt. The user then selects one of the available techniques to interact with the LLM. The model will respond. The messages inside the conversation are stored in memory. The application will keep running until the user types "exit".

## Slides

<iframe src="/pdf/edgeai/2_llm_rustworkshop.pdf" loading="lazy" width="700" height="400">
    Not able to display the slides
</iframe>

<a href="/pdf/edgeai/2_llm_rustworkshop.pdf" target="_blank">download the slides</a>.

## Quick Start

### Prerequisites
The following are already installed on the Raspberry Pi:
* [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)
* [Llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md#cpu-build)

### Deploying the models
```bash
llama-server --embeddings --hf-repo second-state/All-MiniLM-L6-v2-Embedding-GGUF --hf-file  all-MiniLM-L6-v2-ggml-model-f16.gguf --port 8081 # embeddings model available on localhost:8081
llama-server --jinja --hf-repo MaziyarPanahi/gemma-3-1b-it-GGUF --hf-file gemma-3-1b-it.Q5_K_M.gguf # llm available on localhost:8080
```

## Repository

Please clone the repository.

```bash
git clone https://github.com/Wyliodrin/edge-ai-chat-with-llm.git
cd edge-ai-chat-with-llm
```

## Workshop
You will be working inside the `workshop.rs` file. The full implementation is available in the `full_demo.rs` file, in case you get stuck.
In order to run the workshop, execute:
```bash
RUST_LOG=info cargo run --bin workshop
```