---
sidebar_position: 2
---

# Build a system monitor

Welcome to the workshop on building a system monitor with **Axum**! In this session, we'll explore how to create a high-performance HTTP server that exposes real-time and on-demand metrics about the system it’s running on—perfect for monitoring resource usage, debugging, or integrating with observability tools.

## What You’ll Build

Your system monitor server will expose four key endpoints:

1. GET `/healthcheck`: A simple endpoint to verify the server is running.
2. GET `/metrics`: Retrieve a comprehensive summary of system metrics.
3. GET `/metrics/{kind}`: Fetch specific metrics (e.g., system, process, memory, cpu, or disk) to drill down into performance data.
4. GET `/realtime`: Stream live metric updates using Server-Sent Events (SSE), providing a real-time dashboard experience.

## Why This Project?

By building this server, you’ll gain practical experience with:

- **Rust’s async ecosystem**: Using Axum and Tokio to handle concurrent HTTP requests.

- **System programming**: Interacting with low-level OS APIs to collect metrics like CPU usage, memory allocation, and disk I/O.

- **Real-time communication**: Implementing SSE to push updates to clients without polling.

- **API design**: Structuring clean, maintainable endpoints for extensibility.

Whether you’re new to systems programming or looking to deepen your Rust expertise, this project bridges the gap between theory and real-world applications. Let’s dive in and build a tool that’s as educational as it is practical! 🚀

### **Skill Progression**

1. **Task 1**: Organize the project structure and set up the `/healthcheck`
2. **Task 2**: Implement the `/metrics` and `/metrics/{kind}` endpoints
3. **Task 3**: Add the `/realtime` endpoint to server realtime metrics.
