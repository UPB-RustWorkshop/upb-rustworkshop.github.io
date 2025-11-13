---
sidebar_position: 2
---

# Command Line Applications

# Workshop: Building a Weather CLI App in Rust using Ratatui and OpenWeather API

## Introduction
In this workshop, we will build a Command Line Interface (CLI) weather application in Rust using [Ratatui](https://github.com/ratatui-org/ratatui) and the [OpenWeather API](https://openweathermap.org/api). The application will fetch weather information for a set of cities and display it in a structured UI using Ratatui.

By the end of the workshop, participants will:
- Understand how to use Ratatui to create CLI applications with UI components.
- Learn how to interact with the OpenWeather API to fetch weather data.
- Implement a simple weather application and extend it with creative features.

---

## Understanding Ratatui

Ratatui is a library for building text-based user interfaces in Rust. It provides a variety of widgets that allow you to create interactive CLI applications.

### Useful Links
- [Ratatui Webpage](https://ratatui.rs/)
- [Ratatui Documentation](https://docs.rs/ratatui/latest/ratatui/)
- [Ratatui Examples](https://github.com/ratatui/ratatui/tree/main/examples)

### Key Features
- **Layout System**: Splits terminal space into multiple sections.
- **Widgets**: Predefined UI components like lists, tables, graphs, and gauges.
- **Event Handling**: Supports keyboard and mouse interactions.

#### Example: Creating a Simple Ratatui Application
```rust
use ratatui::backend::CrosstermBackend;
use ratatui::Terminal;
use std::io;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let backend = CrosstermBackend::new(io::stdout());
    let mut terminal = Terminal::new(backend)?;
    terminal.clear()?;
    terminal.draw(|frame| {
        let size = frame.size();
        // Render widgets here
    })?;
    Ok(())
}
```

---

## Getting an OpenWeather API Key
To fetch weather data, we need an API key from OpenWeather.

### Steps to Get an API Key
1. Go to [OpenWeather API](https://openweathermap.org/api) and sign up.
2. Log in and navigate to "API Keys" in your profile.
3. Generate a new API key.
4. Use this key in your requests to the OpenWeather API.

### Example API Request
To fetch the weather for a city (e.g., "Bucharest"):
```bash
$ curl "http://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=YOUR_API_KEY&units=metric"
```

### Example Rust Request using Reqwest
```rust
use reqwest;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let city = "Bucharest";
    let api_key = "YOUR_API_KEY";
    let url = format!("http://api.openweathermap.org/data/2.5/weather?q={}&appid={}&units=metric", city, api_key);

    let response = reqwest::get(&url).await?.text().await?;
    let weather_data: Value = serde_json::from_str(&response)?;
    println!("Weather Data: {:?}", weather_data);

    Ok(())
}
```

### Example API Response
```json
{
    "coord": {"lon": 26.1063, "lat": 44.4328},
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "main": {
        "temp": 12.34,
        "feels_like": 10.78,
        "pressure": 1013,
        "humidity": 56
    },
    "wind": {"speed": 3.6, "deg": 270},
    "name": "Bucharest"
}
```

---

## Understanding the Starter Code

### Starter assignment

Check this [link](https://classroom.github.com/a/whQbhBHX) and accept the assignment to get the starter code for your project.

### Project Structure
```
weather-cli/
├── src/
│   ├── main.rs
│   ├── lib.rs
│   ├── app.rs
│   ├── connection.rs
│   ├── event.rs
│   ├── handler.rs
│   ├── tui.rs
│   ├── ui.rs
│
├── Cargo.toml
```

### `main.rs`
Responsible for initializing the terminal and starting the event loop.


### `connection.rs`
Handles API calls to OpenWeather.


### `ui.rs`
Responsible for rendering UI elements.

### `handler.rs`
Handles keyboard input events and updates the application's state.
```rust
use crate::app::{App, AppResult};
use crossterm::event::KeyEvent;

/// Handles the key events and updates the state of [`App`].
pub fn handle_key_events(key_event: KeyEvent, app: &mut App) -> AppResult<()> {
    match key_event.code {
        crossterm::event::KeyCode::Char('q') => {
            app.running = false; // Quit the application when 'q' is pressed
        }
        crossterm::event::KeyCode::Up => {
            // Move up in the list of cities
        }
        crossterm::event::KeyCode::Down => {
            // Move down in the list of cities
        }
        _ => {}
    }
    Ok(())
}
```
---

:::tip

For a better overview of the TODO's in the starter code, install **TODO tree** extenstion in VSCode

:::

## What to do

Follow the TODOs in the application in order to create a weather app. The application should show a list of
cities, and information about each of them. When selecting each city, the app will show the current temperature, wind speed and any other useful information
you may find (eg: charts, graphs...)

## Final Touch: Enhancing the App
Once the basic structure is in place, you can:
- Add **city selection** functionality.
- Display additional weather details like **humidity, wind speed, and pressure**.
- Use **charts** to visualize temperature trends.
- Extend UI with more widgets.
- Cache API responses to reduce requests.
- Add configuration settings for preferred units (Celsius/Fahrenheit).
- Use your imagination to create an unique weather app

### Example UI Layout
```
+----------------------------------+
|        Weather CLI App          |
+----------------------------------+
| Cities:                         |
| [ ] Bucharest                   |
| [ ] London                      |
| [X] New York                    |
+----------------------------------+
| Weather Details:                 |
| Temp: 12°C                       |
| Humidity: 85%                    |
| Wind Speed: 5 m/s                |
+----------------------------------+
```
