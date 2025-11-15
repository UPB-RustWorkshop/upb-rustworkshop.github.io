# Third-Party Libraries Cheatsheet for Face Auth Workshop

This cheatsheet covers the essential parts of **candle_***, **image**, and **serde** libraries used across exercises 01-05.

---

## 🔥 Candle Framework


### Basic Tensor Operations

#### Creating Tensors
```rust
// From vector with shape
let data: Vec<u8> = image_data;
let tensor = Tensor::from_vec(data, (height, width, channels), &Device::Cpu)?;

// From array/slice
let mean = [0.485, 0.456, 0.406];
let mean_tensor = Tensor::new(&mean, &Device::Cpu)?;

// Reshape tensor
let reshaped = tensor.reshape((3, 1, 1))?;
```

#### Tensor Shape Manipulation
```rust
// Permute dimensions (e.g., HWC to CHW)
let tensor = tensor.permute((2, 0, 1))?;

// Add batch dimension
let batched = tensor.unsqueeze(0)?;

// Remove singleton dimensions
let squeezed = tensor.squeeze(0)?.squeeze(0)?;
```

#### Data Type Conversions
```rust
// Convert to different data types
let float_tensor = tensor.to_dtype(DType::F32)?;

// Scale values (e.g., 0-255 to 0-1)
let normalized = tensor.to_dtype(DType::F32)? / 255.0;
```

#### Mathematical Operations

**Broadcasting Operations**: These automatically expand tensors to compatible shapes for element-wise operations.

```rust
// Broadcasting rules: smaller tensors are "stretched" to match larger ones
// Example: (3, 224, 224) + (3, 1, 1) = (3, 224, 224)
// The (3, 1, 1) tensor gets repeated across all 224x224 pixels

let result = tensor1.broadcast_add(&tensor2)?;     // Addition
let result = tensor1.broadcast_sub(&tensor2)?;     // Subtraction
let result = tensor1.broadcast_mul(&tensor2)?;     // Multiplication
let result = tensor1.broadcast_div(&tensor2)?;     // Division

// Matrix multiplication (no broadcasting - strict dimension requirements)
let result = tensor_a.matmul(&tensor_b)?;

// Transpose swaps two dimensions
let transposed = tensor.transpose(0, 1)?;  // Swap dims 0 and 1
```

**How Broadcasting Works**:
- Dimensions are aligned from the right (trailing dimensions first)
- Missing dimensions are treated as size 1
- Dimensions of size 1 are stretched to match the other tensor
- Example: `(256,)` + `(3, 224, 224)` becomes `(1, 1, 256)` + `(3, 224, 224)` → `(3, 224, 224)`

#### Reduction Operations

**What `keepdim` means**: Maintains the original number of dimensions by keeping reduced dims as size 1.

```rust
// sum_keepdim example:
// Input:  (2, 3, 4) tensor
// .sum(1) → (2, 4)        # dimension 1 disappears
// .sum_keepdim(1) → (2, 1, 4)  # dimension 1 becomes size 1

let sum = tensor.sum_keepdim(1)?;  // Sum along dim 1, keep dim structure

// Element-wise operations
let sqrt_tensor = tensor.sqrt()?;   // √x for each element
let squared = tensor.sqr()?;        // x² for each element
```

**Why keepdim matters**: Preserves tensor shape for broadcasting operations. Without it, you can't broadcast the result back to the original tensor shape.

#### Extracting Values
```rust
// Single scalar value
let scalar: f32 = tensor.to_vec0()?;

// 1D vector
let values: Vec<f32> = tensor.to_vec1()?;

// Flatten all dimensions and get vector
let flattened: Vec<f32> = tensor.flatten_all()?.to_vec1()?;
```

### L2 Normalization (Essential for Embeddings)

**What it does**: Scales vectors to unit length while preserving direction. Essential for cosine similarity.

**Mathematical Formula**: `normalized_vector = vector / ||vector||₂`

**Building Blocks**:
```rust
// Step by step operations you'll need:
// 1. Square each element
let squared = tensor.sqr()?;

// 2. Sum along dimension (keeping dimensions for broadcasting)
let sum_squared = tensor.sum_keepdim(1)?;

// 3. Take square root to get L2 norm
let norm = sum_squared.sqrt()?;

// 4. Divide original by norm (broadcasting)
let normalized = tensor.broadcast_div(&norm)?;
```

**Why use it**: After L2 normalization, `||v||₂ = 1`, which means:
- Cosine similarity becomes just a dot product
- Removes magnitude bias - focuses only on direction
- Essential for fair comparison of embeddings

### Cosine Similarity Building Blocks

**Mathematical Formula**: `cosine_similarity = (A · B) / (||A|| × ||B||)`

**Key Operations**:
```rust
// Matrix multiplication for dot product
let dot_product = tensor_a.matmul(&tensor_b.transpose(0, 1)?)?;

// Transpose for proper matrix multiplication
let transposed = tensor.transpose(0, 1)?;

// Extract scalar from tensor
let scalar_value = tensor.squeeze(0)?.squeeze(0)?.to_vec0::<f32>()?;

// For Vec<f32> similarity (alternative approach):
let dot: f32 = vec_a.iter().zip(vec_b.iter()).map(|(x, y)| x * y).sum();
let mag_a: f32 = vec_a.iter().map(|x| x * x).sum::<f32>().sqrt();
let mag_b: f32 = vec_b.iter().map(|x| x * x).sum::<f32>().sqrt();
```

### Model Loading & Usage

**Core Concepts**: Loading pre-trained models and running inference.

**Hugging Face Hub API Building Blocks**:
```rust
// Download model from Hugging Face Hub
let api = hf_hub::api::sync::Api::new()?;
let api = api.model("model-name-here".to_string());
let model_file = api.get("model.safetensors")?;

// Create VarBuilder from downloaded weights
let vb = unsafe {
    VarBuilder::from_mmaped_safetensors(&[model_file], DType::F32, &device)?
};

// Load specific model architectures (examples):
// ConvNeXt: convnext::convnext_no_final_layer(&config, vb)?
// Other models have similar patterns
```

**Inference Building Blocks**:
```rust
// Handle batch dimensions
let batched_input = if input.dim(0)? == 3 {  // Single image (C,H,W)
    input.unsqueeze(0)?  // Add batch: (1,C,H,W)
} else {
    input.clone()  // Already batched (N,C,H,W)
};

// Forward pass through model
let output = model.forward(&batched_input)?;

// Common model interfaces:
// - Module::forward() for neural networks
// - Func::forward() for functional models
```

**Key Points**:
- `VarBuilder`: Loads pre-trained weights from `.safetensors` files
- `Module::forward()`: Standard interface for neural network inference
- **Batch Dimension**: Most models expect `(batch_size, channels, height, width)`
- **Device Management**: Ensure model and input tensors are on same device

---

## 🖼️ Image Processing

### Dependencies
```toml
[dependencies]
image = "0.25.6"
```

### Essential Imports
```rust
use image::{ImageReader, ImageFormat};
```

### Loading and Processing Images
```rust
// Load image from file path
let img = image::ImageReader::open(path)?
    .decode()?;

// Resize image (multiple resize methods)
let img = img.resize_to_fill(
    224,   // width
    224,   // height
    image::imageops::FilterType::Triangle,  // filter type
);

// Convert to RGB8 format
let img = img.to_rgb8();

// Extract raw pixel data
let data: Vec<u8> = img.into_raw();  // Returns Vec<u8> with RGB values
```

### Filter Types
```rust
// Available filter types for resizing
image::imageops::FilterType::Triangle    // Good general purpose
image::imageops::FilterType::Lanczos3   // High quality
image::imageops::FilterType::Nearest    // Fastest, pixelated
image::imageops::FilterType::CatmullRom  // Sharp results
```


**Key Concept**: The `reshape((3, 1, 1))` creates tensors that broadcast across all pixels:
- Original image: `(3, 224, 224)` - 3 channels, 224×224 pixels
- Mean/Std: `(3, 1, 1)` - 3 values, broadcasted to each pixel
- Result: Each of the 224×224 pixels gets normalized using its channel's specific mean/std

---

## 📦 Serde (Serialization/Deserialization)


### Defining Serializable Structs
```rust
// Required derives for JSON serialization
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct YourStruct {
    // Common field types:
    pub id: String,                                    // String fields
    pub name: String,
    pub data: Vec<f32>,                               // Vector fields
    pub timestamp: chrono::DateTime<chrono::Utc>,     // DateTime fields
    pub metadata: HashMap<String, String>,            // HashMap fields
}
```

### JSON Serialization
```rust
// Serialize to JSON string (pretty printed)
let json_string = serde_json::to_string_pretty(&records)?;

// Serialize to JSON string (compact)
let json_string = serde_json::to_string(&records)?;

// Write to file
std::fs::write("data.json", json_string)?;
```

### JSON Deserialization
```rust
// Read from file
let content = std::fs::read_to_string("data.json")?;

// Handle empty files
if content.trim().is_empty() {
    return Ok(Vec::new());
}

// Deserialize from JSON string
let records: Vec<EmbeddingRecord> = serde_json::from_str(&content)?;
```

### Working with DateTime
```rust
// Create current timestamp
let timestamp = chrono::Utc::now();

// DateTime automatically serializes to ISO 8601 string in JSON
```

### Working with UUIDs
```rust
// Generate new UUID
let id = uuid::Uuid::new_v4().to_string();
```


## 🚀 Performance Tips

1. **Tensor Operations**: Use broadcast operations instead of loops when possible
2. **Memory Management**: Reuse tensors when possible, avoid unnecessary clones
3. **Model Loading**: Cache loaded models, don't reload for each inference
4. **Image Processing**: Consider batch processing multiple images at once
5. **Serialization**: Use `serde_json::to_string_pretty` for debugging, regular `to_string` for production

---

## ⚠️ Common Pitfalls

1. **Tensor Shapes**: Always check tensor dimensions before operations
2. **Data Types**: Be consistent with DType (F16 vs F32)
3. **Error Handling**: Use `?` operator and proper Result types
4. **Empty Files**: Always handle empty JSON files in deserialization
5. **Path Handling**: Use proper path validation for file operations
