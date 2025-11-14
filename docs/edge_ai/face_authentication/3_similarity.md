# Exercise 03: Cosine Similarity for Face Authentication

## Overview

This exercise teaches you how to compute cosine similarity between face embeddings - the core mathematical operation that enables face recognition. You'll implement L2 normalization and cosine similarity functions that determine whether two faces belong to the same person.

## Why Cosine Similarity for Face Recognition?

Cosine similarity is the gold standard for comparing face embeddings because it:

- **Measures Direction, Not Magnitude**: Focuses on the "shape" of the embedding vector, not its size
- **Handles Lighting Variations**: Less sensitive to brightness changes that might scale embedding values
- **Provides Intuitive Scores**: Returns values between -1 and 1, where 1 means identical faces
- **Industry Standard**: Used by most production face recognition systems

## Mathematical Foundation

### L2 Normalization
**Formula**: `normalized_vector = vector / ||vector||₂`

L2 normalization ensures all embeddings have unit length (magnitude = 1), which:
- **Standardizes Comparisons**: All vectors have the same magnitude
- **Improves Robustness**: Reduces sensitivity to lighting and scale variations
- **Enables Fair Comparison**: Focuses on directional relationships
- **Optimizes Similarity**: Makes cosine similarity equivalent to dot product

### Cosine Similarity
**Formula**: `cosine_similarity = (A · B) / (||A|| × ||B||)`

For normalized vectors, this simplifies to just the dot product: `A · B`

**Key Properties**:
- **Range**: [-1, 1] where 1 = identical, 0 = orthogonal, -1 = opposite
- **Magnitude Invariant**: Only considers the angle between vectors
- **Symmetric**: similarity(A, B) = similarity(B, A)

## Your Tasks

### Task 1: Implement `normalize_l2()`

```rust
fn normalize_l2(v: &Tensor) -> Result<Tensor>
```

This helper function should:
1. **Calculate L2 Norm**: Compute the magnitude of the vector
2. **Normalize**: Divide the vector by its norm to get unit length

#### Implementation Approach:
- Use tensor operations to compute the L2 norm (square, sum, square root)
- Apply broadcasting division to normalize the vector
- Ensure dimensions are handled correctly for broadcasting

**Hint**: Check the CHEATSHEET.md for L2 normalization building blocks.

### Task 2: Implement `cosine_similarity()`

```rust
pub fn cosine_similarity(emb_a: &Tensor, emb_b: &Tensor) -> Result<f32>
```

This function should:
1. **Normalize Both Embeddings**: Apply L2 normalization to both inputs
2. **Compute Dot Product**: Calculate the similarity using matrix operations
3. **Extract Scalar**: Convert the result tensor to a single f32 value

#### Implementation Approach:
- Use your `normalize_l2` function on both input embeddings
- Perform matrix multiplication to compute the dot product
- Handle tensor dimensions and extract the final scalar value

**Hint**: Check the CHEATSHEET.md for cosine similarity building blocks and tensor operations.

## Technical Details

### Tensor Shapes:
- **Input Embeddings**: `[1, 768]` (batch size 1, 768 dimensions)
- **After Normalization**: `[1, 768]` (same shape, unit length)
- **After Matrix Multiply**: `[1, 1]` (scalar in tensor form)
- **Final Output**: `f32` scalar value

### Key Candle Operations:
- `.sqr()` - Element-wise square
- `.sum_keepdim(1)` - Sum along dimension 1, keep the dimension
- `.sqrt()` - Element-wise square root
- `.broadcast_div()` - Element-wise division with broadcasting
- `.matmul()` - Matrix multiplication
- `.transpose(0, 1)` - Swap dimensions 0 and 1
- `.squeeze()` - Remove dimensions of size 1
- `.to_vec0::<f32>()` - Convert 0D tensor to scalar

## Testing

The test verifies that:
- Same person (brad1.png vs brad2.png) has higher similarity than different people
- The similarity computation works with real face embeddings
- Values are in the expected range

Run the test with:
```bash
cargo test
```

## Understanding the Results

### Typical Similarity Ranges:
- **Same Person**: 0.7 - 0.95 (high similarity)
- **Different People**: 0.2 - 0.6 (lower similarity)
- **Identical Images**: ~1.0 (perfect similarity)

### Authentication Thresholds:
- **High Security**: 0.85+ (few false positives, some false negatives)
- **Balanced**: 0.75+ (good balance of security and usability)
- **High Accessibility**: 0.65+ (fewer false negatives, more false positives)

## Real-World Considerations

### Factors Affecting Similarity:
- **Lighting Conditions**: Dramatic lighting can reduce similarity
- **Facial Expressions**: Extreme expressions may lower scores
- **Image Quality**: Blurry or low-resolution images affect accuracy
- **Pose Variations**: Profile vs frontal views impact similarity

## Next Steps

After completing this exercise, you'll be ready to:
- Build storage systems for face embeddings (Exercise 04)
- Implement similarity search and retrieval (Exercise 05)

## References

- **Cosine Similarity**: [Wikipedia - Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)
- **Face Recognition Survey**: [Deep Face Recognition: A Survey](https://arxiv.org/abs/1804.06655)
- **L2 Normalization**: [Unit Vector Normalization](https://en.wikipedia.org/wiki/Unit_vector)
