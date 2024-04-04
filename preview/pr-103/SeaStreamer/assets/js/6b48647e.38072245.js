"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Async Programming in Rust",s={unversionedId:"introduction/async-programming",id:"introduction/async-programming",title:"Async Programming in Rust",description:"Async programming in Rust is a recent development, only having been stabilized in Rust 1.39. The async ecosystem is rapidly evolving, and SeaStreamer is an async-only library.",source:"@site/docs/01-introduction/02-async-programming.md",sourceDirName:"01-introduction",slug:"/introduction/async-programming",permalink:"/preview/pr-103/SeaStreamer/docs/next/introduction/async-programming",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/01-introduction/02-async-programming.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691157016,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro to Stream Processing",permalink:"/preview/pr-103/SeaStreamer/docs/next/introduction/intro-to-streams"},next:{title:"SeaStreamer Concepts",permalink:"/preview/pr-103/SeaStreamer/docs/next/introduction/sea-streamer"}},p={},c=[],l={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"async-programming-in-rust"},"Async Programming in Rust"),(0,a.kt)("p",null,"Async programming in Rust is a recent development, only having been stabilized in Rust ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/releases/tag/1.39.0"},(0,a.kt)("inlineCode",{parentName:"a"},"1.39")),". The async ecosystem is rapidly evolving, and SeaStreamer is an async-only library."),(0,a.kt)("p",null,"The first concept to learn is the ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/02_execution/02_future.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Future"))," trait. ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," allows us to achieve concurrency with little programming effort, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/futures/latest/futures/future/fn.join_all.html"},(0,a.kt)("inlineCode",{parentName:"a"},"future::join_all"))," to execute multiple tasks in parallel."),(0,a.kt)("p",null,"The second concept to learn is the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/futures-core/latest/futures_core/stream/trait.Stream.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Stream"))," trait. It's like ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/iter/trait.Iterator.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Iterator")),", but async. It is very powerful, and allows us to manipulate streams ergonomically by composing ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Fold"),"."),(0,a.kt)("p",null,"Third, there are multiple async runtimes in Rust. ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,a.kt)("inlineCode",{parentName:"a"},"async-std"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tokio"},(0,a.kt)("inlineCode",{parentName:"a"},"tokio"))," are the two most widely used in production, and SeaStreamer supports both of them. These async runtimes are multi-threaded, meaning that a Future may be moved between threads, but it can only happen at ",(0,a.kt)("inlineCode",{parentName:"p"},".await")," points. There is true parallelism - so race condition and contention can and do happen."),(0,a.kt)("p",null,"Understanding these concepts is essential to get your hands on real-time async programming in Rust."))}m.isMDXComponent=!0}}]);