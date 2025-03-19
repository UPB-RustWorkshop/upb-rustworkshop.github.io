---
sidebar_position: 2
title: Tauri Desktop Applications
---

# **What is Tauri?**

---

Tauri is an **open-source framework** for building **small, fast, and secure desktop applications** using web technologies (HTML, CSS, JavaScript/TypeScript). Unlike traditional solutions like Electron, Tauri uses your operating system's native webview (e.g., WebKit on macOS, WebView2 on Windows) instead of bundling a full browser engine.

---

### **Key Features & Benefits**

1. **Lightweight & Efficient**:

   - Apps are **10–100x smaller** than Electron (e.g., a simple app can be as small as **2MB** vs. Electron’s 100MB+).
   - Minimal memory usage and faster startup times.

2. **Cross-Platform**:

   - Build for **Windows, macOS, and Linux** from a single codebase.
   - Native system integrations (tray icons, file system access, notifications, etc.).

3. **Security-First**:

   - Built with **Rust** (memory-safe language) for the backend.
   - Secure IPC (inter-process communication) between frontend and backend.
   - Reduced attack surface compared to Chromium-based frameworks.

4. **Modern Web Tech**:

   - Use any frontend framework (React, Vue, Svelte, etc.) or vanilla HTML/CSS/JS.
   - Access **system APIs** via JavaScript (e.g., file system, clipboard, hardware).

5. **Native Performance**:

   - Rust backend handles heavy computations, while the webview focuses on UI.
   - Direct access to OS features without performance bottlenecks.

6. **Extensible**:
   - Plugin system for adding native functionality (e.g., SQLite, biometric auth).
   - Integrates with tools like Vite, Webpack, or Rollup.

---

### **Why Choose Tauri Over Electron?**

| **Aspect**       | **Tauri**                         | **Electron**                     |
| ---------------- | --------------------------------- | -------------------------------- |
| **App Size**     | 2–20 MB                           | 100–300 MB                       |
| **Memory Usage** | Minimal (uses system webview)     | High (bundles Chromium)          |
| **Security**     | Rust backend + secure IPC         | Larger attack surface (Chromium) |
| **Performance**  | Native-speed Rust integration     | JavaScript-only backend          |
| **Flexibility**  | Modern tooling (Vite, Deno, etc.) | Limited to Node.js ecosystem     |

---

### **Use Cases**

Tauri is ideal for:

- **Lightweight apps** where bundle size matters (e.g., utilities, tools).
- **Privacy-focused apps** (password managers, note-taking apps).
- **Cross-platform apps** needing native OS integrations.
- Projects prioritizing **performance** and **security**.

---

### **Who Uses Tauri?**

Companies like Microsoft, Discord, and Logseq leverage Tauri for its efficiency and security. The framework is **open-source** (MIT/Apache 2.0) and backed by a growing community.

---

### **Getting Started**

```bash
npm create tauri-app@latest
```

**Learn more**: [Tauri’s Official Website](https://tauri.app) | [GitHub](https://github.com/tauri-apps/tauri)

---

In short, Tauri combines **web flexibility** with **native performance**, making it a top choice for modern desktop app development. 🚀
