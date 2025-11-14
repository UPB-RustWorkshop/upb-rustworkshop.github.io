---
sidebar_position: 0
---
# Overview
A face authentication system built with Rust.

Face Authentication is a modular face authentication system consisting of three main components:

1. **App** - A Rust-based face authentication engine that handles face embedding generation, storage, and user authentication
2. **Camera Server** - A Python FastAPI server that provides camera streaming capabilities with support for multiple camera sources
3. **Workshop** - Educational exercises for learning face recognition concepts and implementation techniques

## Slides

<iframe src="/pdf/edgeai/1_computer_vision_rustworkshop.pdf" loading="lazy" width="700" height="400">
    Not able to display the slides
</iframe>

<a href="/pdf/edgeai/1_computer_vision_rustworkshop.pdf" target="_blank">download the slides</a>.

## Features

- 🎯 **Real-time Face Authentication** - Fast face recognition using ConvNeXt models
- 📹 **Multiple Camera Sources** - Support for OpenCV, libcamera, and custom video streams
- 💾 **Local File Storage** - Simple JSON-based storage for face embeddings
- 🌐 **Web API** - RESTful camera streaming API with dynamic camera switching
- 🔧 **Easy Configuration** - YAML-based configuration for all components
- 🚀 **Cross-platform** - Works on Windows, Linux, and Raspberry Pi
- 📚 **Educational Workshop** - Step-by-step exercises for learning face recognition

## Architecture

```
┌─────────────────┐    HTTP Stream    ┌──────────────────┐
│   Camera Server │ ◄─────────────── │   Face Auth App  │
│   (Python)      │                  │   (Rust)         │
│                 │                  │                  │
│ • FastAPI       │                  │
│ • OpenCV        │                  │ • Embedding Gen  │
│ • libcamera     │                  │ • Authentication │
└─────────────────┘                  └──────────────────┘
         │                                      │
         ▼                                      ▼
┌─────────────────┐                  ┌──────────────────┐
│   USB Camera    │                  │   Local Storage  │
│   Raspberry Pi  │                  │ • JSON Files     │
│   Webcam        │                  │ • Face Embeddings│
└─────────────────┘                  └──────────────────┘
```

## Quick Start

```bash
git clone https://github.com/Wyliodrin/edge-ai-face-auth.git
cd edge-ai-face-auth
cd workshop
cargo build
```
### 1. Setup Camera Server

```bash
cd ~/WORKSHOP/camera_server
source venv/bin/activate

# Start the camera server
uvicorn camera_stream_api:app --host 0.0.0.0 --port 8000
```

### 2. Setup Face Auth App

```bash
cd app

# Build the application
cargo build

# Run the application
cargo run
```

### 3. Usage

1. **Register a new user:**
   - Run the app and type `register`
   - Enter a username
   - Look at the camera while the system captures face samples

2. **Authenticate:**
   - Type `login`
   - Enter your username
   - Look at the camera for authentication

## Components

### Face Auth App (Rust)

The core authentication engine built with Rust for performance and safety.

**Key Features:**
- ConvNeXt-based face embedding generation
- Local file storage for face embeddings
- Real-time face capture and processing
- High-performance face matching algorithms

**Dependencies:**
- `candle-core` & `candle-nn` - Neural network framework
- `reqwest` - HTTP client for video streaming
- `image` & `minifb` - Image processing and display

**Configuration:**
```yaml
# config.yaml
storage:
  type: "local_file"
  local_file:
    path: "embeddings.json"

stream:
  url: "http://localhost:8000/video_feed"
  num_images: 5
  interval_millis: 10

model:
  name: "timm/convnext_atto.d2_in1k"
```

### Camera Server (Python)

A FastAPI-based streaming server that provides camera access with multiple source support.

**Key Features:**
- FastAPI web server with real-time streaming
- OpenCV and libcamera support
- Dynamic camera source switching
- Comprehensive error handling and logging
- Health check and diagnostic endpoints

**Dependencies:**
- `fastapi` & `uvicorn` - Web framework and server
- `opencv-python` - Computer vision library
- `picamera2` - Raspberry Pi camera support (optional)

**API Endpoints:**
- `GET /` - Server status and camera info
- `GET /health` - Health check
- `GET /video_feed` - Video stream
- `GET /camera_info` - Detailed camera configuration
- `GET /switch_camera?source={opencv|libcamera}` - Switch camera source

### Workshop

A collection of progressive exercises designed to teach face recognition concepts and implementation.

**Exercises:**
- **Exercise 01** - Image Processing - Loading and normalizing images for neural networks
- **Exercise 02** - Embeddings - Computing face embeddings using ConvNeXt models
- **Exercise 03** - Similarity - Implementing cosine similarity for face matching
- **Exercise 04** - Storage - Building local file storage for face embeddings
- **Exercise 05** - Retrieval - Implementing k-nearest neighbor search

**Structure:**
- Each exercise includes skeleton code with TODO comments
- Solutions provided for reference and verification
- Documentation and explanations
- Progressive difficulty building core concepts

## Running tests
```bash
cd ex0x..
cargo test
```

### Storage

Face embeddings are stored locally in JSON format (`embeddings.json` by default).

**Benefits:**
- Simple setup with no external dependencies
- Works offline and is easy to backup
- Human-readable format for debugging
- Suitable for development, testing, and small-scale deployments


### Project Structure

```
Face Auth/
├── app/                    # Rust face authentication engine
│   ├── src/
│   │   ├── main.rs        # Application entry point
│   │   ├── config.rs      # Configuration management
│   │   ├── embeddings/    # Face embedding generation
│   │   ├── storage/       # Storage implementations
│   │   └── image_utils/   # Image processing utilities
│   ├── config.yaml        # App configuration
│   └── Cargo.toml         # Rust dependencies
├── camera_server/          # Python camera streaming server
│   ├── camera_stream_api.py # FastAPI application
│   ├── requirements.txt    # Python dependencies
│   └── config.env         # Environment configuration
└── workshop/              # Workshop exercises
    ├── ex01_image_processing/ # Exercise 1: Image loading and normalization
    ├── ex02_embeddings/       # Exercise 2: Face embedding generation
    ├── ex03_similarity/       # Exercise 3: Cosine similarity computation
    ├── ex04_storage_local/    # Exercise 4: Local file storage implementation
    ├── ex05_retrieval/        # Exercise 5: k-NN search and retrieval
    └── solution/              # Reference solutions for all exercises
```


### Authentication Issues

1. **Poor recognition accuracy:**
   - Ensure good lighting conditions
   - Capture multiple face samples during registration
   - Keep face centered and looking at camera


2. **Video stream errors:**
   - Verify camera server is running on correct port
   - Check network connectivity between components

### Performance Optimization

1. **Faster inference:**
   - Use release build: `cargo run --release`
   - Adjust capture interval in config

2. **Memory usage:**
   - Limit number of face samples during capture


## License

This project is licensed under the MIT License - see the individual component READMEs for details.

## Acknowledgments

- Uses [Candle](https://github.com/huggingface/candle) framework for neural network inference
- Camera streaming powered by [FastAPI](https://fastapi.tiangolo.com/)
- Image processing with [OpenCV](https://opencv.org/) and Rust [image](https://crates.io/crates/image) crate

## Support

For issues and questions:
<!--- Check the [Troubleshooting](#troubleshooting) section-->
- Review component-specific READMEs in `app/` and `camera_server/`
- Open an issue in the repository

---

**Face Auth** - Secure, fast, and reliable face authentication for modern applications.
