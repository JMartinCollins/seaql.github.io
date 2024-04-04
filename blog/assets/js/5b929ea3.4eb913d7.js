"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[3215],{9680:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(1308),r=(n(6687),n(9680));const i={slug:"2023-11-22-async-runtime-generic",title:"Writing Async Runtime Generic Library",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},o=void 0,s={permalink:"/blog/2023-11-22-async-runtime-generic",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-11-22-async-runtime-generic.md",source:"@site/blog/2023-11-22-async-runtime-generic.md",title:"Writing Async Runtime Generic Library",description:"If you are writing an async application in Rust, at some point you'd want to separate the code into several crates. There are some benefits:",date:"2023-11-22T00:00:00.000Z",formattedDate:"November 22, 2023",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:3.49,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2023-11-22-async-runtime-generic",title:"Writing Async Runtime Generic Library",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},prevItem:{title:"OpenUK Award 2023 \ud83c\udfc6",permalink:"/blog/2023-11-25-openuk-award"},nextItem:{title:"What's new in SeaStreamer 0.3",permalink:"/blog/2023-09-06-whats-new-in-sea-streamer-0.3"}},l={authorsImageUrls:[void 0]},u=[{value:"Approach 1: Defining your own <code>AsyncRuntime</code> trait",id:"approach-1-defining-your-own-asyncruntime-trait",level:3},{value:"Approach 2: Abstract the async runtimes internally and expose feature flags",id:"approach-2-abstract-the-async-runtimes-internally-and-expose-feature-flags",level:3},{value:"Approach 3: Maintain an async runtime abstraction crate",id:"approach-3-maintain-an-async-runtime-abstraction-crate",level:3},{value:"Conclusion",id:"conclusion",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you are writing an async application in Rust, at some point you'd want to separate the code into several crates. There are some benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Better encapsulation. Having a crate boundary between sub-systems can lead to cleaner code and a more well-defined API. No more ",(0,r.kt)("inlineCode",{parentName:"li"},"pub(crate)"),"!"),(0,r.kt)("li",{parentName:"ol"},"Faster compilation. By breaking down a big crate into several independent small crates, they can be compiled concurrently.")),(0,r.kt)("p",null,"But the question is, if you are using only one async runtime anyway, what are the benefits of writing async-runtime-generic libraries?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Portability. You can easily switch to a different async runtime, or wasm."),(0,r.kt)("li",{parentName:"ol"},"Correctness. Testing a library against both ",(0,r.kt)("inlineCode",{parentName:"li"},"tokio")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"async-std"),' can uncover more bugs, including concurrency bugs (due to fuzzy task execution orders) and "undefined behaviour" either due to misunderstanding or async-runtime implementation details')),(0,r.kt)("p",null,"So now you've decided to write async-runtime-generic libraries! Here I want to share 3 strategies along with examples found in the Rust ecosystem."),(0,r.kt)("h3",{id:"approach-1-defining-your-own-asyncruntime-trait"},"Approach 1: Defining your own ",(0,r.kt)("inlineCode",{parentName:"h3"},"AsyncRuntime")," trait"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/futures/latest/futures/"},(0,r.kt)("inlineCode",{parentName:"a"},"futures"))," crate you can write very generic library code, but there is one missing piece: ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," - to ",(0,r.kt)("inlineCode",{parentName:"p"},"sleep")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout"),", you have to rely on an async runtime. If that's all you need, you can define your own ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncRuntime")," trait and requires downstream to implement it. This is the approach used by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/rdkafka/latest/rdkafka/"},"rdkafka"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait AsyncRuntime: Send + Sync + 'static {\n    type Delay: Future<Output = ()> + Send;\n\n    /// It basically means the return value must be a `Future`\n    fn sleep(duration: Duration) -> Self::Delay;\n}\n")),(0,r.kt)("p",null,"Here is how it's implemented:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl AsyncRuntime for TokioRuntime {\n    type Delay = tokio::time::Sleep;\n\n    fn sleep(duration: Duration) -> Self::Delay {\n        tokio::time::sleep(duration)\n    }\n}\n")),(0,r.kt)("p",null,"Library code to use the above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"async fn operation<R: AsyncRuntime>() {\n    R::sleep(Duration::from_millis(1)).await;\n}\n")),(0,r.kt)("h3",{id:"approach-2-abstract-the-async-runtimes-internally-and-expose-feature-flags"},"Approach 2: Abstract the async runtimes internally and expose feature flags"),(0,r.kt)("p",null,"This is the approach used by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/redis/latest/redis/"},"redis-rs"),"."),(0,r.kt)("p",null,"To work with network connections or file handle, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncRead")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncWrite")," traits:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait]\npub(crate) trait AsyncRuntime: Send + Sync + 'static {\n    type Connection: AsyncRead + AsyncWrite + Send + Sync + 'static;\n\n    async fn connect(addr: SocketAddr) -> std::io::Result<Self::Connection>;\n}\n")),(0,r.kt)("p",null,"Then you'll define a module for each async runtime:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(feature = "runtime-async-std")]\nmod async_std_impl;\n#[cfg(feature = "runtime-async-std")]\nuse async_std_impl::*;\n\n#[cfg(feature = "runtime-tokio")]\nmod tokio_impl;\n#[cfg(feature = "runtime-tokio")]\nuse tokio_impl::*;\n')),(0,r.kt)("p",null,"Where each module would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="tokio_impl.rs"',title:'"tokio_impl.rs"'},"#[async_trait]\nimpl AsyncRuntime for TokioRuntime {\n    type Connection = tokio::net::TcpStream;\n\n    async fn connect(addr: SocketAddr) -> std::io::Result<Self::Connection> {\n        tokio::net::TcpStream::connect(addr).await\n    }\n}\n")),(0,r.kt)("p",null,"Library code to use the above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'async fn operation<R: AsyncRuntime>(conn: R::Connection) {\n    conn.write(b"some bytes").await;\n}\n')),(0,r.kt)("h3",{id:"approach-3-maintain-an-async-runtime-abstraction-crate"},"Approach 3: Maintain an async runtime abstraction crate"),(0,r.kt)("p",null,"This is the approach used by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/crate/sqlx-rt"},"SQLx")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-runtime/latest/sea_streamer_runtime/"},"SeaStreamer"),"."),(0,r.kt)("p",null,"Basically, aggregate all async runtime APIs you'd use and write a wrapper library. This may be tedious, but this also has the benefit of specifying ",(0,r.kt)("em",{parentName:"p"},"all interactions")," with the async runtime ",(0,r.kt)("em",{parentName:"p"},"in one place")," for ",(0,r.kt)("em",{parentName:"p"},"your")," project, which could be handy for debugging or tracing."),(0,r.kt)("p",null,"For example, async ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," handling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="common-async-runtime/tokio_task.rs"',title:'"common-async-runtime/tokio_task.rs"'},"pub use tokio::task::{JoinHandle as TaskHandle};\n\npub fn spawn_task<F, T>(future: F) -> TaskHandle<T>\nwhere\n    F: Future<Output = T> + Send + 'static,\n    T: Send + 'static,\n{\n    tokio::task::spawn(future)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"async-std"),"'s task API is slightly different (in ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio")," the output is ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, JoinError>"),"), which requires some boilerplate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="common-async-runtime/async_std_task.rs"',title:'"common-async-runtime/async_std_task.rs"'},"/// A shim to match tokio's API\npub struct TaskHandle<T>(async_std::task::JoinHandle<T>);\n\npub fn spawn_task<F, T>(future: F) -> TaskHandle<T>\nwhere\n    F: Future<Output = T> + Send + 'static,\n    T: Send + 'static,\n{\n    TaskHandle(async_std::task::spawn(future))\n}\n\n#[derive(Debug)]\npub struct JoinError;\n\nimpl std::error::Error for JoinError {}\n\n// This is basically how you wrap a `Future`\nimpl<T> Future for TaskHandle<T> {\n    type Output = Result<T, JoinError>;\n\n    fn poll(\n        mut self: std::pin::Pin<&mut Self>,\n        cx: &mut std::task::Context<'_>,\n    ) -> std::task::Poll<Self::Output> {\n        match self.0.poll_unpin(cx) {\n            std::task::Poll::Ready(res) => std::task::Poll::Ready(Ok(res)),\n            std::task::Poll::Pending => std::task::Poll::Pending,\n        }\n    }\n}\n")),(0,r.kt)("p",null,"In the library's ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),", you can simply include ",(0,r.kt)("inlineCode",{parentName:"p"},"common-async-runtime")," as dependency. This makes your library code 'pure', because now selecting an async runtime is controlled by downstream. Similar to approach 1, this crate can be compiled ",(0,r.kt)("em",{parentName:"p"},"without any")," async runtime, which is neat!"),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Happy hacking! Welcome to share your experience with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/discussions"},"community"),"."))}p.isMDXComponent=!0}}]);