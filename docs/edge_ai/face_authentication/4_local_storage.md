# Exercise 04: Local File Storage for Face Embeddings

## Overview

This exercise teaches you how to build a persistent storage system for face embeddings using local JSON files. You'll implement a complete storage solution that can save, retrieve, and manage embedding records - essential for any face authentication system that needs to remember users between sessions.

## Why Storage Matters

Face authentication systems need persistent storage to:
- **Remember Users**: Store embeddings from registration for future login attempts
- **Enable Comparison**: Retrieve stored embeddings to compare against live captures
- **Manage Identities**: Track multiple embeddings per user for better accuracy
- **Persist Data**: Maintain user data across application restarts

## Architecture Overview

The storage system uses a trait-based design for flexibility:

```rust
// Data structure for each stored embedding
pub struct EmbeddingRecord {
    pub id: String,                                    // Unique identifier
    pub name: String,                                  // User name
    pub embedding: Vec<f32>,                          // Face embedding vector
    pub created_at: chrono::DateTime<chrono::Utc>,    // Timestamp
    pub metadata: HashMap<String, String>,            // Additional data
}

// Storage interface (trait)
pub trait EmbeddingStorage {
    fn store_embedding(&mut self, record: EmbeddingRecord) -> Result<()>;
    fn get_embedding(&self, id: &str) -> Result<Option<EmbeddingRecord>>;
    fn get_all_embeddings(&self) -> Result<Vec<EmbeddingRecord>>;
    fn delete_embedding(&mut self, id: &str) -> Result<bool>;
}

// Local file implementation
pub struct LocalFileStorage {
    file_path: String,
    data: Mutex<HashMap<String, EmbeddingRecord>>,
}
```

## Your Tasks

### Task 1: Implement `LocalFileStorage::new()`

```rust
pub fn new(file_path: String) -> Result<Self>
```

This constructor should:
1. **Create Storage Instance**: Initialize the struct with the file path
2. **Set Up In-Memory Cache**: Create a Mutex-protected HashMap for fast access
3. **Load Existing Data**: Call `load_data()` to read any existing records

#### Implementation Approach:
- Initialize the struct fields with appropriate values
- Set up thread-safe data structures for concurrent access
- Load any existing data from the file system

**Hint**: Check the CHEATSHEET.md for HashMap and Mutex patterns.

### Task 2: Implement `load_data()`

```rust
fn load_data(&self) -> Result<()>
```

This method should:
1. **Check File Existence**: Return early if file doesn't exist
2. **Handle Empty Files**: Deal gracefully with zero-byte files
3. **Parse JSON**: Deserialize the file content into a HashMap
4. **Update Cache**: Store the loaded data in the in-memory HashMap

#### Implementation Approach:
- Use file system operations to check existence and size
- Handle JSON deserialization with proper error handling
- Update the in-memory cache with loaded data
- Use proper mutex locking for thread safety

**Hint**: Check the CHEATSHEET.md for JSON deserialization patterns.

### Task 3: Implement `save_data()`

```rust
fn save_data(&self) -> Result<()>
```

This method should:
1. **Create Directory**: Ensure the parent directory exists
2. **Open File**: Create or truncate the target file
3. **Serialize Data**: Convert the HashMap to JSON format
4. **Write File**: Save the JSON to disk

#### Implementation Approach:
- Handle directory creation for the file path
- Use appropriate file opening options for writing
- Serialize the in-memory data to JSON format
- Ensure thread-safe access to the data

**Hint**: Check the CHEATSHEET.md for JSON serialization and file operations.

### Task 4: Implement `EmbeddingStorage` Trait

#### `store_embedding()`
```rust
fn store_embedding(&mut self, record: EmbeddingRecord) -> Result<()>
```
- Add the record to in-memory storage and persist to disk

#### `get_embedding()`
```rust
fn get_embedding(&self, id: &str) -> Result<Option<EmbeddingRecord>>
```
- Search for and return a record by its ID

#### `get_all_embeddings()`
```rust
fn get_all_embeddings(&self) -> Result<Vec<EmbeddingRecord>>
```
- Return all stored embedding records

#### `delete_embedding()`
```rust
fn delete_embedding(&mut self, id: &str) -> Result<bool>
```
- Remove a record by ID and return whether deletion was successful

**Implementation Approach**: Use HashMap operations with proper mutex locking and persistence.

### Task 5: Implement `open_temp_storage()`

```rust
pub fn open_temp_storage() -> Result<(Box<dyn EmbeddingStorage>, String)>
```

This helper function should:
1. **Generate Unique Path**: Create a temporary filename using UUID
2. **Create Storage**: Initialize a LocalFileStorage instance
3. **Return Boxed Trait**: Return as a trait object for flexibility

#### Implementation Approach:
- Generate a unique filename using UUID
- Create a new storage instance with that path
- Return both the storage and path for cleanup

**Hint**: Use `Uuid::new_v4()` for unique identifiers.

## Technical Details

### JSON File Format:
The storage saves data as a JSON object where keys are record IDs:
```json
{
  "uuid-1": {
    "id": "uuid-1",
    "name": "Alice",
    "embedding": [0.1, 0.2, ...],
    "created_at": "2024-01-01T12:00:00Z",
    "metadata": {}
  },
  "uuid-2": { ... }
}
```

### Concurrency Handling:
- Uses `Mutex<HashMap>` for thread-safe access to in-memory data
- Locks are held briefly during read/write operations
- File I/O is synchronized through the mutex

### Error Handling:
- Gracefully handles missing files (starts with empty storage)
- Deals with corrupted JSON (logs warning, starts fresh)
- Proper error propagation using `Result<T>`

## Testing

The provided tests verify:
- **Basic Storage**: Can store and retrieve records
- **Sorting**: Results are returned in correct order
- **Limits**: Respects k-parameter for top-k queries
- **Empty Storage**: Handles empty storage gracefully

Run tests with:
```bash
cargo test
```

## File Management

The storage system:
- **Auto-creates** directories as needed
- **Handles** missing files gracefully
- **Overwrites** files completely on each save (simple but safe)
- **Uses** pretty-printed JSON for human readability

## Production Considerations

This simple file-based approach works well for:
- **Development and Testing**: Easy to inspect and debug
- **Small Datasets**: Hundreds to thousands of embeddings
- **Single-User Applications**: No concurrent access needed

For production systems, consider:
- **Database Storage**: PostgreSQL with pgvector extension
- **Vector Databases**: Qdrant, Pinecone, Weaviate
- **Concurrent Access**: Proper locking mechanisms
- **Backup Strategies**: Regular data backups

## Next Steps

After completing this exercise, you'll be ready to:
- Implement similarity search and retrieval (Exercise 05)

This storage foundation is crucial for the face authentication system's ability to persist and retrieve user embeddings efficiently.
