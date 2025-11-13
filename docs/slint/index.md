---
sidebar_position: 3
---
# Slint Desktop Applications

## Course Support
<iframe src="/pdf/introduction_to_slint.pdf" loading="lazy" width="700" height="480">
    Cannot display pdf, you can
    <a href="/pdf/introduction_to_slint.pdf">download the course</a>.
</iframe>
<a href="/pdf/introduction_to_slint.pdf">Download the course</a>.

## To-Do List App with Slint and Rust

This is a simple to-do list app using the **Slint** GUI framework and **Rust**. It demonstrates how to manage UI elements, define interactive events, and manage state using the `Rc` (reference-counted) type for shared ownership.

### Prerequisites

Before getting started, make sure you have the following installed:

- **Rust**: You can install it from the official Rust website [here](https://www.rust-lang.org/tools/install).
- **Slint**: Install Slint using Rust's package manager by adding it to your `Cargo.toml` or by using `cargo add slint`.

```toml
[dependencies]
slint = "0.1"
```

### Project Structure:
* `src/main.rs`: List backend logic (implemented in Rust).
* `ui/start_window.slint`: User interface (created with Slint).
### Code Breakdown

#### Step 1: Create the UI and Initialize the Model
In the main.rs file, we initialize the AppWindow and set up the necessary data structures to hold the to-do list items.
```
fn main() -> Result<(), Box<dyn Error>> {
    let ui = AppWindow::new()?;
```
Here, we initialize the AppWindow, which represents the UI. AppWindow::new() returns a result that we unwrap using ?.

#### Step 2: Create the Todo Model
We use `Rc<VecModel>` to hold the to-do items. Rc is a reference-counted pointer that allows multiple parts of the code to share ownership of the to-do model.

    let todo_model = Rc::new(VecModel::from(vec![]));
    ui.set_todo_model(todo_model.clone().into());
We start with an empty to-do list (Vec::new()), which will later be updated with user input. We pass this model to the UI via ui.set_todo_model().

#### Step 3: Implement add_item Callback
The first interactive feature is adding a to-do item. We define the callback for adding items to the model that takes as parameters the text from the input field.

    let todo_model_adding = todo_model.clone();
This callback will be executed when the Add Item button is clicked. It simply adds a new to-do item to the model.

#### Step 4: Implement clear_all Callback
Next, we have to define a callback to clear all to-do items from the list:

    let todo_model_clearing = todo_model.clone();
    
Create a callback that is tied to the `Clear All` button. When clicked, it clears the entire list of to-do items.

#### Step 5: Run the UI
Finally, we run the application:

    ui.run()?;
    Ok(())
}
This will start the event loop and display the UI, waiting for user interactions.

### Running the application 

Run the following command: 
```
cargo run
```
