# Exercise 05: Vector Retrieval and Similarity Search

## Overview

This exercise teaches you how to implement vector similarity search - the core functionality that enables face recognition systems to find matching faces. You'll build a `top_k` function that searches through stored embeddings to find the most similar faces to a query.

## What is Vector Similarity Search?

Vector similarity search is the process of:
1. **Taking a query vector** (e.g., embedding of a face to identify)
2. **Comparing it against a database** of stored vectors (known face embeddings)
3. **Ranking results by similarity** (most similar faces first)
4. **Returning the top matches** (k most similar faces)

This is exactly how face authentication works:
- **Registration**: Store face embeddings in the database
- **Login**: Capture new face, find most similar stored embedding
- **Decision**: If similarity > threshold, grant access

## Your Task

Implement the `top_k` function that performs similarity search:

```rust
pub fn top_k(storage: &dyn EmbeddingStorage, query: &[f32], k: usize) -> Result<Vec<(EmbeddingRecord, f32)>>
```

### Algorithm Steps:

1. **Retrieve All Embeddings**: Get all stored embeddings from storage
2. **Calculate Similarities**: Compute cosine similarity between query and each stored embedding
3. **Sort by Similarity**: Order results from highest to lowest similarity
4. **Return Top-K**: Take only the k most similar results

### Implementation Approach:

The algorithm follows these conceptual steps:
1. **Retrieve All Embeddings**: Get stored embeddings from storage
2. **Calculate Similarities**: Compute similarity between query and each stored embedding
3. **Sort Results**: Order by similarity (highest first)
4. **Return Top-K**: Take only the k most similar results

### Key Operations Needed:
- Storage retrieval operations
- Vector similarity computation (cosine similarity)
- Sorting and ranking algorithms
- Result limiting and formatting

**Hint**: You'll need a vector-based cosine similarity function. Check the CHEATSHEET.md for similarity computation building blocks.

## Key Implementation Details

### Edge Cases to Handle:
- **Empty Storage**: Return empty vector if no embeddings stored
- **k = 0**: Return empty vector
- **k > stored count**: Return all available embeddings
- **Division by Zero**: Handle zero-magnitude vectors gracefully

### Performance Characteristics:
- **Time Complexity**: O(n × d + n log n) where n = number of stored embeddings, d = embedding dimension
- **Space Complexity**: O(n) for storing similarity scores
- **Scalability**: Linear scan works for thousands of embeddings, but not millions

### Sorting Considerations:
- Use **descending order** (highest similarity first)
- Handle **NaN values** with `partial_cmp()` and `unwrap_or()`
- **Stable sort** ensures consistent ordering for equal similarities

## Testing

The tests verify that your implementation:

1. **Returns Best Match First**: Most similar embedding appears first in results
2. **Sorts Correctly**: Results are in descending similarity order
3. **Respects K Limit**: Returns exactly k results (or fewer if less data available)
4. **Handles Empty Storage**: Works correctly with no stored embeddings

Run tests with:
```bash
cargo test
```

## Example Usage

```rust
// Create storage and add some face embeddings
let (mut storage, _path) = open_temp_storage()?;
add_record(storage.as_mut(), "Alice", vec![1.0, 0.0, 0.0])?;
add_record(storage.as_mut(), "Bob", vec![0.0, 1.0, 0.0])?;
add_record(storage.as_mut(), "Charlie", vec![0.8, 0.2, 0.0])?;

// Search for faces similar to query
let query = vec![0.9, 0.1, 0.0];  // Similar to Alice and Charlie
let results = top_k(storage.as_ref(), &query, 2)?;

// Results will be:
// 1. Alice (similarity ≈ 0.95)
// 2. Charlie (similarity ≈ 0.85)
```

## Production Vector Databases

While this exercise teaches the fundamentals, production systems use specialized vector databases for better performance:

### Why Specialized Vector DBs?

- **Approximate Nearest Neighbor (ANN)**: Sub-linear search time using indexing
- **Horizontal Scaling**: Handle millions/billions of vectors
- **Real-time Updates**: Add/remove vectors without rebuilding indices
- **Advanced Filtering**: Combine similarity search with metadata filters
- **Optimized Storage**: Compressed vectors and efficient memory usage

### Recommended Options:

#### Qdrant (Rust-Native) ⭐
- **Homepage**: [https://qdrant.tech/](https://qdrant.tech/)
- **Why Choose**: Written in Rust, excellent Rust client, HNSW indexing
- **Use Case**: Perfect for Rust applications requiring high performance

#### pgvector (PostgreSQL Extension)
- **Homepage**: [https://github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)
- **Why Choose**: SQL-based, ACID transactions, familiar ecosystem
- **Use Case**: When you already use PostgreSQL and want vector search

#### Pinecone
- **Homepage**: [https://www.pinecone.io/](https://www.pinecone.io/)
- **Why Choose**: Fully managed, serverless, auto-scaling
- **Use Case**: When you want zero infrastructure management

## Real-World Applications

Vector similarity search powers:

- **Face Recognition**: Find matching faces in databases
- **Recommendation Systems**: Find similar products/content
- **Semantic Search**: Find documents by meaning, not keywords
- **Duplicate Detection**: Identify similar images/documents
- **Anomaly Detection**: Find outliers in high-dimensional data

## Performance Optimization

For production systems:

1. **Indexing**: Use HNSW, IVF, or LSH for faster search
2. **Quantization**: Reduce vector precision to save memory
3. **Caching**: Cache frequently accessed embeddings
4. **Batching**: Process multiple queries together
5. **Filtering**: Pre-filter by metadata before similarity search

## Next Steps

After completing this exercise, you'll understand:
- How face recognition systems find matching faces
- The trade-offs between accuracy and performance in vector search
- Why production systems need specialized vector databases
- How to implement and optimize similarity search algorithms

This completes the face authentication workshop! You now have all the building blocks to create a complete face recognition system.
