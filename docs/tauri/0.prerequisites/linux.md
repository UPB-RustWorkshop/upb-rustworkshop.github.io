---
sidebar_position: 2
title: Linux
---

# **Tauri Setup Guide for Linux**

---

## **Step 1: Install Required Software**

#### **Linux (Debian/Ubuntu)**

1. **Install Deno**:

   - Open a terminal and run:
     ```bash
     curl -fsSL https://deno.land/x/install/install.sh | sh
     ```

2. **Install Rust**:

   - Open a terminal and run:
     ```bash
     curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
     ```
   - Restart your terminal after installation.

3. **Install System Dependencies**:
   - Open a terminal and run:
     ```bash
     sudo apt update
     sudo apt install -y libwebkit2gtk-4.0-dev \
       build-essential \
       curl \
       wget \
       libssl-dev \
       libgtk-3-dev \
       libayatana-appindicator3-dev
     ```

---

## **Troubleshooting**

- **Missing Dependencies**:
  - Run:
    ```bash
    sudo apt update
    sudo apt install -y libwebkit2gtk-4.0-dev build-essential curl wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev
    ```
- **Deno Permissions**:
  - Use the `-A` flag to allow all permissions:
    ```bash
    deno run -A npm:create-tauri-app@latest
    ```

---

## **Final Notes**

- **Deno Documentation**: [https://deno.land/manual](https://deno.land/manual)
- **Tauri Documentation**: [https://tauri.app/v1/guides/](https://tauri.app/v1/guides/)
- **Vite Documentation**: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
