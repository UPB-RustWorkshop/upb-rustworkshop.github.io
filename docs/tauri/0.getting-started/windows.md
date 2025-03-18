---
sidebar_position: 1
---

# Windows

---

## **Step 1: Install Required Software**

### 1. Install Deno (JavaScript/TypeScript Runtime)

- **Website**: [https://deno.land/](https://deno.land/)
- **Steps**:
  1. Open PowerShell
  2. Run the following command:
  ```powershell
  irm https://deno.land/install.ps1 | iex
  ```

---

### 2. Install Rust (Tauri Backend)

- **Website**: [https://www.rust-lang.org/](https://www.rust-lang.org/)
- **Steps**:
  1. Go to the Rust website.
  2. Click the **"Get Started"** button.
  3. Click the **"Other Installation Methods"** hyperlink
  4. Click on `rustup-init.exe` to get the installer.
  5. Run the installer and follow the prompts.
     - When prompted, choose **"Proceed with installation"**.
  6. Restart your computer after installation.

---

### 3. Install WebView2 (Windows WebView Runtime)

- **Website**: [https://developer.microsoft.com/en-us/microsoft-edge/webview2/](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
- **Steps**:
  1. Go to the WebView2 website.
  2. Download the **Evergreen Standalone Installer**.
  3. Run the installer and follow the prompts.

---

### 4. Install Visual Studio Build Tools (Required for Rust)

- **Website**: [https://visualstudio.microsoft.com/visual-cpp-build-tools/](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- **Steps**:
  1. Go to the Visual Studio Build Tools website.
  2. Download the installer.
  3. Run the installer and:
     - Select **"Desktop development with C++"** workload.
     - Click **"Install"**.

---

## **Step 2: Create a Tauri Project**

### 1. Open VS Code

- If you don’t have VS Code, download it from [https://code.visualstudio.com/](https://code.visualstudio.com/).

### 2. Open the Terminal in VS Code

- Press **Ctrl + `** (backtick) to open the terminal.

### 3. Run the Tauri Project Generator

- In the terminal, run this command:

  ```powershell
  deno run -A npm:create-tauri-app@latest
  ```

- **Follow the prompts**:
  1. **Project name**: Enter a name (e.g., `tauri-deno-app`).
  2. **Package manager**: Choose **Deno**.
  3. **UI template**: Choose **Vite**.
  4. **UI variant**: Choose **TypeScript** (recommended).

---

## **Step 3: Configure the Project**

### 1. Open the Project in VS Code

- Click **File → Open Folder** and select the folder created by the Tauri generator (e.g., `tauri-deno-app`).

### 2. Install Tauri API for Deno

- In the terminal, run:

  ```powershell
  deno add @tauri-apps/api
  ```

---

## **Step 4: Run the Development Server**

### 1. Start the Frontend

- In the terminal, run:

  ```powershell
  deno task dev
  ```

  This will start the Vite development server.

### 2. Start the Tauri Backend

- Open a **new terminal** in VS Code (Ctrl + Shift + `).
- Run:

  ```powershell
  deno task tauri
  ```

  This will open a desktop window with your app running.

---

## **Step 5: Build the App**

### 1. Build the Production Version

- In the terminal, run:

  ```powershell
  deno task build
  ```

### 2. Find the Installer

- The installer will be located in:
  ```
  src-tauri/target/release/bundle/msi/tauri-deno-app_0.1.0_x64_en-US.msi
  ```

---

## **Troubleshooting**

### 1. WebView2 Issues

- Ensure WebView2 is installed by visiting [https://developer.microsoft.com/en-us/microsoft-edge/webview2/](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).

### 2. Rust/Cargo Errors

- Visit [https://www.rust-lang.org/](https://www.rust-lang.org/) and reinstall Rust if needed.

### 3. Deno Permissions

- If Deno throws permission errors, use the `-A` flag to allow all permissions:
  ```powershell
  deno run -A npm:create-tauri-app@latest
  ```

---

## **Final Notes**

- **Deno Documentation**: [https://deno.land/manual](https://deno.land/manual)
- **Tauri Documentation**: [https://tauri.app/v1/guides/](https://tauri.app/v1/guides/)
- **Vite Documentation**: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
