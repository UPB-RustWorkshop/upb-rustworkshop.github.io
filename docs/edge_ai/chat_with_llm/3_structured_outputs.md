# Exercise 03: Structured Outputs

Structured outputs are a way to format the model's responses, such that they can be parsed by other systems. Information extraction is a common use case for structured outputs, where the model is asked to extract specific information from a given text.

Structured outputs are defined by a JSON Schema that describes the structure of the expected output.

The schema is passed in the API request in the `response_format` field. An example schema for extracting the city from a given text looks like this:

```json
{
    "type": "json_schema",
    "json_schema": {
        "name": "example_schema",
        "schema": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                }
            }
        }
    }
}
```

In the background, llama.cpp parses this schema and creates a GBNF grammar that guides the model's response generation. More information in the [llama.cpp documentation](https://github.com/ggml-org/llama.cpp/tree/master/grammars).

Keep in mind that using structured outputs can degrade the performance of LLMs, as shown by [Tam et al.](https://arxiv.org/abs/2408.02442)

For this exercise, solve TODO 3 in order to extract the name, city and age of user from a given text.

Here's an example prompt you can use to test your implementation:
```John is a 25 years old software engineer living in New York.```