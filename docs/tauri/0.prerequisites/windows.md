---
sidebar_position: 1
title: Windows
---

# **Tauri Setup Guide for Windows**

---

## **Step 1: Install Required Software**

### If you do not have a packate manager & JS/TS runtime (node, npm)
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
