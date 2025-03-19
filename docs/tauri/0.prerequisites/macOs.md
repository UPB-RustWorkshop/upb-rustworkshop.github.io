---
sidebar_position: 3
title: MacOs
---

# **Tauri Setup Guide for macOS**

---

## **Step 1: Install Required Software**

#### **1.1 Install Xcode Command Line Tools**

1. Open the **Terminal** (press `Cmd + Space`, type `Terminal`, and press Enter).
2. Run the following command:
   ```bash
   xcode-select --install
   ```
3. Follow the prompts to install the Xcode Command Line Tools.

---

#### **1.2 Install Homebrew (Package Manager)**

1. Open the **Terminal**.
2. Run the following command:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Follow the prompts to complete the installation.

---

#### **1.3 Install Deno**

1. Open the **Terminal**.
2. Run the following command:
   ```bash
   brew install deno
   ```

---

#### **1.4 Install Rust**

1. Open the **Terminal**.
2. Run the following command:
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```
3. Follow the prompts to complete the installation.
4. Restart your terminal after installation.

---

## **Troubleshooting**

### **1. Xcode Command Line Tools Issues**

- If `xcode-select --install` fails, download Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835).

### **2. Rust/Cargo Errors**

- Update Rust:
  ```bash
  rustup update
  ```

### **3. Deno Permissions**

- If Deno throws permission errors, use the `-A` flag to allow all permissions:
  ```bash
  deno run -A npm:create-tauri-app@latest
  ```

---

## **Final Notes**

- **Deno Documentation**: [https://deno.land/manual](https://deno.land/manual)
- **Tauri Documentation**: [https://tauri.app/v1/guides/](https://tauri.app/v1/guides/)
- **Vite Documentation**: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
