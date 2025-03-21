"use strict";(self.webpackChunkupb_rustworkshop_github_io=self.webpackChunkupb_rustworkshop_github_io||[]).push([[8807],{4618:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"web_server/index","title":"Axum Web Servers","description":"Welcome to the workshop on building web servers with Axum! In this session, we\'ll explore why Rust and Axum are a powerful combination for modern web development. Let\u2019s dive in!","source":"@site/docs/web_server/index.md","sourceDirName":"web_server","slug":"/web_server/","permalink":"/docs/web_server/","draft":false,"unlisted":false,"editUrl":"https://github.com/UPB-RustWorkshop/upb-rustworkshop.github.io/edit/main/docs/web_server/index.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Axum Web Servers"},"sidebar":"tutorialSidebar","previous":{"title":"Slint Desktop Applications","permalink":"/docs/slint/"},"next":{"title":"Prerequisites","permalink":"/docs/web_server/prerequisites"}}');var i=n(4848),t=n(8453);const o={sidebar_position:4,title:"Axum Web Servers"},l="Introduction to Axum: Building Web Servers in Rust",a={},c=[{value:"What is Axum?",id:"what-is-axum",level:2},{value:"Key Features and benefits",id:"key-features-and-benefits",level:2},{value:"Why Rust for Web servers?",id:"why-rust-for-web-servers",level:2},{value:"\ud83d\ude80 Performance",id:"-performance",level:3},{value:"\ud83e\uddba Safety",id:"-safety",level:3},{value:"\u26a1 Concurrency Without Fear",id:"-concurrency-without-fear",level:3},{value:"\ud83c\udf31 Growing Ecosystem",id:"-growing-ecosystem",level:3},{value:"\ud83d\udce6 Cross-Platform Support",id:"-cross-platform-support",level:3},{value:"Why Axum over other frameworks?",id:"why-axum-over-other-frameworks",level:2},{value:"Use cases",id:"use-cases",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"introduction-to-axum-building-web-servers-in-rust",children:"Introduction to Axum: Building Web Servers in Rust"})}),"\n",(0,i.jsxs)(s.p,{children:["Welcome to the workshop on building web servers with ",(0,i.jsx)(s.strong,{children:"Axum"}),"! In this session, we'll explore why Rust and Axum are a powerful combination for modern web development. Let\u2019s dive in!"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"what-is-axum",children:"What is Axum?"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Axum"})," is a fast, ergonomic, and type-safe web framework for Rust, built on top of the ",(0,i.jsx)(s.a,{href:"https://tokio.rs/",children:(0,i.jsx)(s.code,{children:"tokio"})})," async runtime and ",(0,i.jsx)(s.a,{href:"https://hyper.rs/",children:(0,i.jsx)(s.code,{children:"hyper"})})," HTTP library. Developed by the Tokio team, Axum leverages Rust\u2019s strengths to provide a robust foundation for building scalable and reliable web services."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"key-features-and-benefits",children:"Key Features and benefits"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Declarative routing"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"define routes and handlers using a clean, intuitive API"}),"\n",(0,i.jsx)(s.li,{children:"Supports RESTful patterns, path parameters, and query extraction"}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Middleware and composability"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Integrates seamlessly with ",(0,i.jsx)(s.code,{children:"tower"})," middleware (e.g., logging, CORS, rate limiting, observability)."]}),"\n",(0,i.jsx)(s.li,{children:"Middleware can be applied globally, per route, or per scope."}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Async-first"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Built on top of ",(0,i.jsx)(s.code,{children:"tokio"}),", Axum is designed for high-performance, non-blocking I/O."]}),"\n",(0,i.jsxs)(s.li,{children:["Write handlers using ",(0,i.jsx)(s.code,{children:"async/await"})," for efficient request processing."]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"JSON and Form handling"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Effortless serialization/deserialization using ",(0,i.jsx)(s.code,{children:"serde"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Extract and validate data with types like ",(0,i.jsx)(s.code,{children:"Json<T>"})," or ",(0,i.jsx)(s.code,{children:"Form<T>"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"why-rust-for-web-servers",children:"Why Rust for Web servers?"}),"\n",(0,i.jsx)(s.h3,{id:"-performance",children:"\ud83d\ude80 Performance"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Rust compiles to native code, offering C-level speed with no garbage collector overhead."}),"\n",(0,i.jsx)(s.li,{children:"Ideal for high-throughput, low-latency applications."}),"\n",(0,i.jsx)(s.li,{children:"No runtime overhead thanks to Rust\u2019s zero-cost abstractions."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"-safety",children:"\ud83e\uddba Safety"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Rust\u2019s type system ensures correctness at compile time (e.g., path parameters, request bodies)."}),"\n",(0,i.jsx)(s.li,{children:"Rust\u2019s ownership model eliminates entire classes of bugs (e.g., null pointers, data races)."}),"\n",(0,i.jsx)(s.li,{children:"Critical for security in networked services."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"-concurrency-without-fear",children:"\u26a1 Concurrency Without Fear"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Async/await syntax simplifies writing safe, concurrent code."}),"\n",(0,i.jsx)(s.li,{children:"Avoid callback hell or runtime magic seen in other languages."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"-growing-ecosystem",children:"\ud83c\udf31 Growing Ecosystem"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"A vibrant community with libraries for HTTP, databases, auth, and more."}),"\n",(0,i.jsxs)(s.li,{children:["Tools like ",(0,i.jsx)(s.code,{children:"cargo"})," make dependency management painless."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"-cross-platform-support",children:"\ud83d\udce6 Cross-Platform Support"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Compile to Linux, Windows, macOS, or even embedded systems."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"why-axum-over-other-frameworks",children:"Why Axum over other frameworks?"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Batteries-included, but unopinionated"}),":\nAxum provides essential tools without forcing a specific project structure."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Production ready"}),": Backed by ",(0,i.jsx)(s.code,{children:"tokio"})," and ",(0,i.jsx)(s.code,{children:"hyper"}),", it powers high-traffic services in production."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Future-proof"}),": Rust\u2019s stability guarantees ensure long-term maintainability."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Learning Curve Pays Off"}),": While Rust has a steeper initial learning curve, the long-term benefits in reliability and performance are unmatched."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Building microservices or REST/GraphQL APIs."}),"\n",(0,i.jsx)(s.li,{children:"High-performance proxies or gateways."}),"\n",(0,i.jsx)(s.li,{children:"Applications where safety and correctness are critical (e.g., fintech, healthcare)."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(6540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);