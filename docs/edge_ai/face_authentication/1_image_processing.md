# Exercise 01. Image Processing and Normalization

## Overview

This exercise teaches you how to properly preprocess images for computer vision models, specifically focusing on ImageNet normalization. You'll implement the `image_with_std_mean` function that transforms raw images into model-ready tensors.

## Understanding Tensors and Image Processing

### What is a Tensor?

A **tensor** is a multi-dimensional array that serves as the fundamental data structure in machine learning. Think of it as:

- **1D tensor**: A vector (like `[1, 2, 3, 4]`)
- **2D tensor**: A matrix (like a spreadsheet with rows and columns)
- **3D tensor**: A cube of data (like our image with height × width × channels)
- **4D tensor**: A batch of 3D tensors (multiple images)

For images, we use **3D tensors** with dimensions:
- **Channels**: Color information (3 for RGB: Red, Green, Blue)
- **Height**: Number of pixel rows
- **Width**: Number of pixel columns

ConvNeXt expects tensors in **"channels-first"** format: `(channels, height, width)` rather than `(height, width, channels)`.

### What is Normalization?

**Normalization** transforms data to have consistent statistical properties. For images, we perform two types:

1. **Scale Normalization**: Convert pixel values from `[0-255]` to `[0-1]` by dividing by 255
2. **Statistical Normalization**: Transform to have zero mean and unit variance using: `(value - mean) / standard_deviation`

### Why Use Mean and Standard Deviation?

The **ImageNet mean and standard deviation** values aren't arbitrary - they're computed from millions of natural images:

- **Mean `[0.485, 0.456, 0.406]`**: Average pixel values across Red, Green, Blue channels
- **Std `[0.229, 0.224, 0.225]`**: Standard deviation for each channel

**Why these specific values matter for ConvNeXt:**

1. **Distribution Matching**: ConvNeXt was trained on ImageNet data with these exact statistics. Using different values would be like speaking a different language to the model.

2. **Zero-Centered Data**: Subtracting the mean centers pixel values around zero, which helps neural networks learn faster and more stably.

3. **Unit Variance**: Dividing by standard deviation ensures all channels contribute equally to learning, preventing one color channel from dominating.

4. **Gradient Flow**: Normalized inputs lead to better gradient flow during training, preventing vanishing or exploding gradients.

## Why ImageNet Normalization is Critical for ConvNeXt

**ImageNet normalization is essential for four key reasons:**

1. **Neural Network Stability**: Raw pixel values (0-255) are too large and cause training instability. Normalizing to smaller ranges helps gradients flow properly during backpropagation.

2. **Pre-trained Model Compatibility**: ConvNeXt models are trained on ImageNet-normalized data. Using the same normalization ensures your input matches what the model expects - like using the same units of measurement.

3. **Feature Standardization**: Different color channels have different statistical distributions in natural images. Per-channel normalization gives equal importance to all color information.

4. **Mathematical Optimization**: The normalization formula `(pixel/255 - mean) / std` transforms arbitrary pixel values into a standardized range that neural networks can process efficiently.

**Without proper normalization, ConvNeXt will produce poor results** because the input distribution doesn't match its training data - imagine trying to use a thermometer calibrated in Celsius to read Fahrenheit temperatures!

## Your Task

Implement the `image_with_std_mean` function that:

1. **Resizes** the input image to the specified resolution using Triangle filtering
2. **Converts** to RGB8 format to ensure consistent color channels
3. **Creates** a tensor with shape `(3, height, width)` - channels first format
4. **Normalizes** pixel values from [0-255] to [0-1] range
5. **Applies** ImageNet standardization: `(pixel/255 - mean) / std`

## Implementation Steps

```rust
pub fn image_with_std_mean(
    img: &DynamicImage,
    res: usize,
    mean: &[f32; 3],
    std: &[f32; 3],
) -> Result<Tensor>
```

### Implementation Approach:

1. **Resize Image**: Use appropriate image resizing methods
2. **Convert Format**: Ensure consistent color channel format
3. **Extract Data**: Get raw pixel data from the image
4. **Create Tensor**: Build tensor with correct shape and dimensions
5. **Normalize**: Apply scaling and ImageNet standardization

### Key Operations Needed:
- Image resizing and format conversion
- Tensor creation from raw data
- Dimension reordering (channels-first format)
- Mathematical operations for normalization
- Broadcasting for per-channel operations

**Hint**: Check the CHEATSHEET.md for specific API calls and tensor operations.

## Testing

The test verifies that:
- Tensor values are in the expected normalized range (approximately [-2.5, 2.5])
- Values are actually normalized (not just zeros or ones)
- The transformation follows ImageNet standards

Run the test with:
```bash
cargo test
```

## Expected Output Format

- **Input**: DynamicImage of any size
- **Output**: Tensor with shape `(3, 224, 224)` and ImageNet-normalized values
- **Value Range**: Approximately [-2.12, 2.64] based on ImageNet constants

This preprocessing step is crucial for the face authentication pipeline, as it ensures images are in the exact format expected by the ConvNeXt model in the next exercise.
