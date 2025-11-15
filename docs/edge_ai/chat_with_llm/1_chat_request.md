# Exercise 01: Simple Chat Request

During the workshop, we will be using Gemma 3 1B as our language model. The models are deployed using llama.cpp, which exposes an OpenAI-compatible API on port 8080.

We have defined the necessary structs to interact with the model API.

A chat request consists of the model name, an array of messages and optionally tools and response format.

A message consists of the role (user, assistant, system) and the content.

Complete the TODO 1 to implement the chat interaction logic.
