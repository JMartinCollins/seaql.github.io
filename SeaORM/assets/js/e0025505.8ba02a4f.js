"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[23045],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(31308),a=(n(76687),n(48859));const i={},o="Async Programming",s={unversionedId:"introduction/async",id:"version-0.12.x/introduction/async",title:"Async Programming",description:"Async programming in Rust is a recent development, only having been stabilized in Rust 1.39. The async ecosystem is rapidly evolving, and SeaORM is one of the first crates built from the ground up with async support in mind.",source:"@site/versioned_docs/version-0.12.x/01-introduction/02-async.md",sourceDirName:"01-introduction",slug:"/introduction/async",permalink:"/SeaORM/docs/introduction/async",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/01-introduction/02-async.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1716194275,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is an ORM",permalink:"/SeaORM/docs/introduction/orm"},next:{title:"SeaORM Concepts",permalink:"/SeaORM/docs/introduction/sea-orm"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"async-programming"},"Async Programming"),(0,a.kt)("p",null,"Async programming in Rust is a recent development, only having been stabilized in Rust ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/releases/tag/1.39.0"},(0,a.kt)("inlineCode",{parentName:"a"},"1.39")),". The async ecosystem is rapidly evolving, and SeaORM is one of the first crates built from the ground up with async support in mind."),(0,a.kt)("p",null,"The first thing to learn is the ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/02_execution/02_future.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Future"))," trait. It's a placeholder for a function that will compute and return some value in the future. It's lazy, meaning ",(0,a.kt)("inlineCode",{parentName:"p"},".await")," must be called for any actual work to be done. ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," allows us to achieve concurrency with little programming effort, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/futures/latest/futures/future/fn.join_all.html"},(0,a.kt)("inlineCode",{parentName:"a"},"future::join_all"))," to execute multiple queries in parallel."),(0,a.kt)("p",null,"Second, ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," in Rust is ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/03_async_await/01_chapter.html"},"multi-threaded programming")," with syntactic sugar. A ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," may move between threads, so any variables used in async bodies must be able to travel between threads, i.e. ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/nomicon/send-and-sync.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Send")),"."),(0,a.kt)("p",null,"Third, there are multiple async runtimes in Rust. ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,a.kt)("inlineCode",{parentName:"a"},"async-std"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tokio"},(0,a.kt)("inlineCode",{parentName:"a"},"tokio"))," are the two most widely used. SeaORM's underlying driver, ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},(0,a.kt)("inlineCode",{parentName:"a"},"SQLx")),", supports both."),(0,a.kt)("p",null,"Knowing these concepts is essential to get you up and running in async Rust."))}p.isMDXComponent=!0}}]);