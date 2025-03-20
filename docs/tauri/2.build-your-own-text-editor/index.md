---
sidebar_position: 2
---

# Build your own text editor

_"Are you excited?😄"_

## Task 1: Core Functionalities

---

### **1. Project Setup**

- Create Tauri project using `vanilla-ts` template

### **2. Frontend Structure**

- Create HTML with:
  - `<textarea>` for text editing
  - Two buttons (`Open`/`Save`)
- Add CSS for basic layout (optional)

### **3. Backend Functions (Rust)**

- Use **`std::fs`** (built-in Rust module, no external crate needed):
  - `read_file(path: String) -> Result<String>`
  - `write_file(path: String, contents: String) -> Result<()>`
- Expose these as **Tauri commands** using `#[tauri::command]` and add in `.invoke_handler`

### **4. Frontend Interaction (TypeScript)**

- Use Tauri APIs:
  - **`@tauri-apps/api/dialog`** for file picker (`open()`, `save()`)
  - **`@tauri-apps/api`** `invoke()` to call Rust commands
- Link button clicks to:
  - Get file path via dialog, (hint: `open()`)
  - Pass path/content between frontend ↔ backend (hint: `invoke()`)

### **5. Security Configuration**

- In `tauri.conf.json`:
  - Allow **`fs`** access to specific directories
  - Enable **`dialog`** API

---

### **Key Technical Requirements**

| Component          | Technology/Package | Purpose                          |
| ------------------ | ------------------ | -------------------------------- |
| **Frontend**       | Tauri Dialog API   | File path selection              |
| **Bridge**         | `invoke()`         | TS ↔ Rust communication          |
| **Backend**        | Rust `std::fs`     | Read/write files                 |
| **Error Handling** | Rust `Result` type | Propagate I/O errors to frontend |

---

### Conclusion Task 1

- Great job! You have done it, now you have a text editor with the core functionalities!
- _"First, make it work. Then make it work harder..."_ — Engineers’ Mantra

---

## Task 2: File Explorer Sidebar

**Build a VS Code-style file hierarchy viewer**

---

### **1. Frontend Structure Expansion**

- Add a sidebar `<div>` next to the textarea
- Create nested HTML lists (`<ul>`, `<li>`) to represent folders/files
- Add folder (📁) and file (📄) icons with CSS

### **2. Backend Command**

- Add a new Rust function:
  ```rust
  #[tauri::command]
  fn get_child_paths(path: String) -> Result<Vec<(String, bool)>, String>
  ```
  - Uses `std::fs::read_dir` to list directory contents
  - Returns tuples: `(path, is_directory)`
  - Sorts folders first, then files

### **3. Dynamic Hierarchy Rendering**

- Modify "Open File" workflow:
  1. Get file path via `dialog.open()`
  2. Extract parent directory path
  3. Call `get_child_paths` to fetch siblings
  4. Render initial file tree in sidebar

### **4. Interactive Features**

- Add click handlers for:
  - **Folders**: Expand/collapse with ▶/▼ arrows
  - **Files**: Load content into textarea
- Recursive directory loading (fetch children on expand)

### **5. Security & Error Handling**

- Update `tauri.conf.json` to allow directory traversal:
  ```json
  "fs": { "scope": ["$HOME/**"] }
  ```
- Handle `Result` errors from Rust in TypeScript

---

### **Key Technical Requirements**

| Component        | Technology/Package    | Purpose                        |
| ---------------- | --------------------- | ------------------------------ |
| **Hierarchy UI** | Recursive DOM updates | Dynamic folder expansion       |
| **Backend**      | `std::fs::read_dir`   | Directory content listing      |
| **State**        | Event delegation      | Handle nested element clicks   |
| **Performance**  | On-demand loading     | Only fetch visible directories |

---

### Conclusion Task 2

You've transformed the basic editor into a file-centric IDE!  
**"Complexity is just simplicity with layers of intention."**  
_— Next: Add a create new file button!_ 🚀

---

## **Task 3: Add "Create File" Functionality**

**Extend your editor with file creation capabilities**

---

### **Core Implementation Roadmap**

1. **Backend Command**

   - Add a Rust function `create_file(path: String)` using `std::fs::File::create`
   - Expose via Tauri command

2. **Frontend UI**

   - Add a "📄 New File" button to the toolbar
   - Link it to Tauri’s `save()` dialog for path selection

3. **File Explorer Sync**

   - After creation, refresh the parent directory in the sidebar
   - Reuse `get_child_paths` from Task 2

4. **Security**
   - Allow file creation in permitted directories via `tauri.conf.json`

---

### **Final Conclusion**

You’ve achieved to create a text editor with foundational file management capabilities!  
**"To create is to breathe life into the inert. Now your editor pulses with possibility."**  
_— Next: It seams that you have completed all the challenges for today, [What is next?](/docs/tauri/3.next-challenges.md)!_ 🛠️
