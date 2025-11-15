# Exercise 02: Retrieval-Augmented Generation (RAG)

In this section, we will implement a RAG system that combines the language model with a document retrieval system.

The embeddings model is also deployed using llama.cpp and exposes a slightly different API on port 8081.

A RAG system is implemented as follows:
1. Calculate embeddings on documents inside the knowledge base.
2. Calculate the embedding of the user query.
3. Store the document embeddings in a vector database (for simplicity, we will use an in-memory vector store).
4. Get the most similar documents from the knowledge base using the query embedding, with a metric such as cosine similarity.
5. Pass the retrieved documents as context to the language model and generate a response.

Here are some examples that you can add to the database and ask questions about them:

1. The secret code to access the project is 'quantum_leap_42'.
2. Alice is the lead engineer for the new 'Orion' feature.
3. The project deadline has been moved to next Friday.


For this exercise, solve TODO 2 to implement the document retrieval logic.