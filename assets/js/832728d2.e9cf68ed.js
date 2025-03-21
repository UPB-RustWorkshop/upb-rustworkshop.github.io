"use strict";(self.webpackChunkupb_rustworkshop_github_io=self.webpackChunkupb_rustworkshop_github_io||[]).push([[9161],{614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"web_server/build-a-system-monitor/task-2","title":"Task 2 - Implement the `/metrics` endpoints","description":"For checking the system metrics, we\'ll need to a little design before. So, we want to get all the metrics at once, and we also want to get specific metrics. For this, we\'ll have two endpoints:","source":"@site/docs/web_server/2.build-a-system-monitor/2.task-2.md","sourceDirName":"web_server/2.build-a-system-monitor","slug":"/web_server/build-a-system-monitor/task-2","permalink":"/docs/web_server/build-a-system-monitor/task-2","draft":false,"unlisted":false,"editUrl":"https://github.com/UPB-RustWorkshop/upb-rustworkshop.github.io/edit/main/docs/web_server/2.build-a-system-monitor/2.task-2.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Task 2 - Implement the `/metrics` endpoints"},"sidebar":"tutorialSidebar","previous":{"title":"Task 1 - Add `/healthcheck` endpoint","permalink":"/docs/web_server/build-a-system-monitor/task-1"},"next":{"title":"Task 3 - Make metrics realtime","permalink":"/docs/web_server/build-a-system-monitor/task-3"}}');var r=t(4848),i=t(8453);const o={title:"Task 2 - Implement the `/metrics` endpoints"},c="Task 2: Implement the /metrics and /metrics/{kind} endpoints",d={},l=[{value:"What is serde?",id:"what-is-serde",level:3},{value:"Your task",id:"your-task",level:2},{value:"Conclusion",id:"conclusion",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"task-2-implement-the-metrics-and-metricskind-endpoints",children:["Task 2: Implement the ",(0,r.jsx)(n.code,{children:"/metrics"})," and ",(0,r.jsx)(n.code,{children:"/metrics/{kind}"})," endpoints"]})}),"\n",(0,r.jsx)(n.p,{children:"For checking the system metrics, we'll need to a little design before. So, we want to get all the metrics at once, and we also want to get specific metrics. For this, we'll have two endpoints:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET /metrics"}),": Retrieve a comprehensive summary of system metrics."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET /metrics/{kind}"}),": Fetch specific metrics (e.g., system, process, memory, cpu, or disk) to drill down into performance data."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To register the new endpoints, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["create a new module ",(0,r.jsx)(n.code,{children:"src/routes/metrics.rs"})," and add the following code:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="src/routes/metrics.rs"',children:'\nuse axum::{Router, extract::Path, http::StatusCode, response::IntoResponse, routing::get};\n\npub fn register() -> Router {\n  Router::new()\n      .route("/", get(get_metrics))\n      .route("/{kind}", get(get_metric))\n}\n\nasync fn get_metrics() -> impl IntoResponse {\n  todo!("Implement the get_metrics endpoint")\n}\n\nasync fn get_metric(kind: /* TODO */) -> impl IntoResponse {\n  todo!("Implement the get_metric endpoint")\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Update ",(0,r.jsx)(n.code,{children:"src/routes/mod.rs"})," to include the new module:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="src/routes/mod.rs"',children:'use axum::Router;\n\nmod healthcheck;\nmod metrics;\n\npub fn app() -> Router {\n    Router::new()\n      .nest("/healthcheck", healthcheck::register())\n      .nest("/metrics", metrics::register())\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Also, we should restrict the values that ",(0,r.jsx)(n.code,{children:"kind"})," can take. To do so, we will represent them within the type system as an enum, like such:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a new module ",(0,r.jsx)(n.code,{children:"src/metrics.rs"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Add the following code to the new file:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="src/metrics.rs"',children:"pub enum Kind {\n    System,\n    Process,\n    Memory,\n    Cpu,\n    Disk,\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Add the following line to ",(0,r.jsx)(n.code,{children:"main.rs"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="src/main.rs"',children:"mod metrics;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Finally, we'll update the ",(0,r.jsx)(n.code,{children:"get_metric"})," handler to take a ",(0,r.jsx)(n.code,{children:"Kind"})," parameter:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="src/routes/metrics.rs"',children:'// ...\n\nuse crate::metrics;\n\nasync fn get_metric(Path(kind): Path<metrics::Kind>) -> impl IntoResponse {\n  todo!("Implement the get_metric endpoint")\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Path is a type provided by Axum that allows you to extract a part of the request path. In this case, we're using it to extract the ",(0,r.jsx)(n.code,{children:"kind"})," parameter from the request path."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Ok so we designed the request format and the endpoints, now, let's implement the logic to get the metrics."}),"\n",(0,r.jsxs)(n.p,{children:["I've created some helper functions in ",(0,r.jsx)(n.code,{children:"src/metrics.rs"})," to get the system metrics. You can use them to implement the ",(0,r.jsx)(n.code,{children:"/metrics"})," and ",(0,r.jsx)(n.code,{children:"/metrics/{kind}"})," endpoints."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="src/metrics.rs"',children:'use sysinfo;\n\npub async fn init() -> sysinfo::System {\n    let mut sys = sysinfo::System::new_all();\n    sys.refresh_all();\n\n    tokio::time::sleep(sysinfo::MINIMUM_CPU_UPDATE_INTERVAL).await;\n    sys.refresh_cpu_all();\n\n    sys\n}\n\npub enum Kind {\n    System,\n    Process,\n    Memory,\n    Cpu,\n    Disk,\n}\n\npub struct System {\n    name: String,\n    kernel_version: String,\n    os_version: String,\n    host_name: String,\n    uptime: u64,\n}\n\nimpl System {\n    pub fn generate() -> Self {\n        todo!("Implement the System::generate method")\n    }\n}\n\npub struct Process {\n    pid: u32,\n    name: String,\n    memory: u64,\n    cpu_usage: f32,\n    run_time: u64,\n}\n\nimpl Process {\n    pub fn generate(sys: &mut sysinfo::System) -> Vec<Self> {\n        todo!("Implement the Process::generate method")\n    }\n}\n\n#[derive(serde::Serialize, serde::Deserialize)]\npub struct Memory {\n    used: u64,\n    total: u64,\n}\n\nimpl Memory {\n    pub fn generate(sys: &mut sysinfo::System) -> Self {\n        todo!("Implement the Memory::generate method")\n    }\n}\n\n#[derive(serde::Serialize, serde::Deserialize)]\npub struct CoreMetrics {\n    name: String,\n    brand: String,\n    usage: f32,\n    frequency: u64,\n}\n\n#[derive(serde::Serialize, serde::Deserialize)]\npub struct Cpu {\n    cpu_usage: f32,\n    cores: Vec<CoreMetrics>,\n}\n\nimpl Cpu {\n    pub fn generate(sys: &mut sysinfo::System) -> Self {\n        todo!("Implement the Cpu::generate method")\n    }\n}\n\n#[derive(serde::Serialize, serde::Deserialize)]\npub struct Disk {\n    name: String,\n    available_space: u64,\n    total_space: u64,\n    is_removable: bool,\n}\n\nimpl Disk {\n    pub fn generate() -> Vec<Self> {\n        todo!("Implement the Disk::generate method")\n    }\n}\n\n#[derive(serde::Serialize, serde::Deserialize)]\npub struct Summary {\n    system: System,\n    process: Vec<Process>,\n    memory: Memory,\n    cpu: Cpu,\n    disk: Vec<Disk>,\n}\n\nimpl Summary {\n    pub fn generate(sys: &mut sysinfo::System) -> Self {\n        todo!("Implement the Summary::generate method")\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["To get the system metrics, we're using the ",(0,r.jsx)(n.code,{children:"sysinfo"})," crate. It provides a simple interface to get system information like CPU usage, memory usage, disk space, etc. You can find more information about the crate ",(0,r.jsx)(n.a,{href:"https://crates.io/crates/sysinfo",children:"here"}),". Install the crate similar to how you installed Axum and Tokio."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"what-is-serde",children:"What is serde?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"serde"})," is a popular Rust library for serializing and deserializing data. It provides a simple way to convert Rust data structures into JSON, XML, or other formats. In this project, we're using ",(0,r.jsx)(n.code,{children:"serde"})," to serialize our metrics into JSON format."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The name ",(0,r.jsx)(n.code,{children:"serde"}),' comes from "serialization" and "deserialization."']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Because our HTTP server uses JSON as the default format for responses, we need to implement the ",(0,r.jsx)(n.code,{children:"serde::Serialize"})," trait for our metric structs. This trait allows us to convert our structs into JSON objects that can be sent over the network."]}),"\n",(0,r.jsx)(n.p,{children:"To add serde to our project, run the following commands in a terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo add serde --features derive\ncargo add serde_json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To convert a struct into JSON, you can use the ",(0,r.jsx)(n.code,{children:"serde_json::to_string"})," function. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"serde_json::to_string(&my_struct).unwrap()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"your-task",children:"Your task"}),"\n",(0,r.jsxs)(n.p,{children:["As task, implement the ",(0,r.jsx)(n.code,{children:"get_metrics"})," and ",(0,r.jsx)(n.code,{children:"get_metric"})," functions to return a ",(0,r.jsx)(n.code,{children:"200 OK"})," status code with the system metrics. The ",(0,r.jsx)(n.code,{children:"get_metrics"})," function should return a summary of all the metrics, while the ",(0,r.jsx)(n.code,{children:"get_metric"})," function should return the specific metric based on the ",(0,r.jsx)(n.code,{children:"kind"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["Also, implement the ",(0,r.jsx)(n.code,{children:"generate"})," methods for the ",(0,r.jsx)(n.code,{children:"System"}),", ",(0,r.jsx)(n.code,{children:"Process"}),", ",(0,r.jsx)(n.code,{children:"Memory"}),", ",(0,r.jsx)(n.code,{children:"Cpu"}),", ",(0,r.jsx)(n.code,{children:"Disk"}),", and ",(0,r.jsx)(n.code,{children:"Summary"})," structs to generate the metrics."]}),"\n",(0,r.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["In this task, we've designed the ",(0,r.jsx)(n.code,{children:"/metrics"})," and ",(0,r.jsx)(n.code,{children:"/metrics/{kind}"})," endpoints and implemented the logic to get the system metrics. By following the steps above, you've learned how to structure your project, define routes, and handle requests in Axum. Next, we'll add the ",(0,r.jsx)(n.code,{children:"/realtime"})," endpoint to stream live metric updates using Server-Sent Events (SSE). Let's continue building our system monitor server! \ud83d\ude80"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);