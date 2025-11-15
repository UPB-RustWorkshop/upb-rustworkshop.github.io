# Exercise 04: Tool Calling

LLMs are very good at generating text, but they are not very good at performing tasks that require letter-perfect accuracy, such as calculations. Try asking the model to calculate the sum of two numbers over 10000, and you will see that it often makes mistakes.
These weaknesses can be mitigated by using tools, which are functions that can be called by the model to perform specific tasks.

Tool calling is a technique that builds on structured outputs. It allows the user to define functions that can be called by the language model and executed during the conversation.

Tool calling also uses structured outputs under the hood, as defining a tool is done using a JSON Schema.

A tool for calculating the sum of two numbers might look like this:

```json
[
    {
        "type": "function",
        "function": {
            "name": "add",
            "description": "Add two numbers.",
            "parameters": {
                "type": "object",
                "properties": {
                    "num1": {
                        "type": "integer",
                        "description": "The first number."
                    },
                    "num2": {
                        "type": "integer",
                        "description": "The second number."
                    },
                },
                "required": [
                    "num1",
                    "num2",
                ]
            }
        }
    }
]
```

In this exercise, solve TODO 4 to implement a tool that calculates mathematical operations (add, subtract, multiply, divide) between two numbers.


### 5. Extra
Congratulations, you implemented a basic agent! If you want to extend it, you can try these other options:
1. Replace the in-memory RAG implementation with a proper vector database (e.g. Qdrant).
2. Add more tools for the agent to use - e.g. a web search tool, a bash file finding tool, etc.
3. Try to extract data from other types of documents (e.g. logs) or use other data types of [JSON Schema](https://json-schema.org/understanding-json-schema/reference/type) (e.g. arrays, enums).