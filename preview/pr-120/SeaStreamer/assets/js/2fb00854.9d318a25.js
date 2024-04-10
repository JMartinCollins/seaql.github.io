"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1113],{8859:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(1308),a=(r(6687),r(8859));const o={},i="Configuring Features",c={unversionedId:"configuration/configuration",id:"version-0.1.x/configuration/configuration",title:"Configuring Features",description:"Cargo",source:"@site/versioned_docs/version-0.1.x/02-configuration/01-configuration.md",sourceDirName:"02-configuration",slug:"/configuration/configuration",permalink:"/preview/pr-120/SeaStreamer/docs/0.1.x/configuration/configuration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.1.x/02-configuration/01-configuration.md",tags:[],version:"0.1.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712738576,formattedLastUpdatedAt:"Apr 10, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example Processors",permalink:"/preview/pr-120/SeaStreamer/docs/0.1.x/introduction/examples"},next:{title:"SeaStreamer Architecture",permalink:"/preview/pr-120/SeaStreamer/docs/0.1.x/configuration/architecture"}},s={},p=[{value:"Cargo",id:"cargo",level:2},{value:"BACKEND: <code>kafka</code>, <code>stdio</code> &amp; <code>socket</code>",id:"backend-kafka-stdio--socket",level:2},{value:"ASYNC_RUNTIME: <code>runtime-async-std</code> &amp; <code>runtime-tokio</code>",id:"async_runtime-runtime-async-std--runtime-tokio",level:2}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-features"},"Configuring Features"),(0,a.kt)("h2",{id:"cargo"},"Cargo"),(0,a.kt)("p",null,"First of all, please star our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer"},"GitHub repo"),"! Your support is vital to the continued development of SeaStreamer."),(0,a.kt)("p",null,"Then, add ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-streamer = { version = "0.1", features = [ <BACKEND>, <ASYNC_RUNTIME> ] }\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer")," is a facade crate. If you don't enable any features, it will only export the types from ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer-types"),",\nwhich allows you to develop ",(0,a.kt)("em",{parentName:"p"},"pure crates")," using those traits and types, without pulling in any backend crates to the dependency tree."),(0,a.kt)("h2",{id:"backend-kafka-stdio--socket"},"BACKEND: ",(0,a.kt)("inlineCode",{parentName:"h2"},"kafka"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"stdio")," & ",(0,a.kt)("inlineCode",{parentName:"h2"},"socket")),(0,a.kt)("p",null,"SeaStreamer currently supports two backends, Kafka and Stdio.\nEach has their own support crate, and they all implement the same set of abstract traits.\nIt's easy to distinguish the symbols between the crates, because they all start with ",(0,a.kt)("inlineCode",{parentName:"p"},"Kafka*")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Stdio*"),"."),(0,a.kt)("p",null,"However, those abstractions are static: you have to designate the concrete ",(0,a.kt)("inlineCode",{parentName:"p"},"Streamer")," type compile-time.\nTo achieve ",(0,a.kt)("em",{parentName:"p"},"runtime-abstraction"),", you can enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"socket")," flag and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sea*")," types."),(0,a.kt)("p",null,"Here is a summary of the type names:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Trait"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Kafka"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Stdio"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Socket"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Streamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaStreamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioStreamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaStreamer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Producer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaProducer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioProducer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaProducer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Consumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaConsumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioConsumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaConsumer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Message"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaMessage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaConnectOptions")))),(0,a.kt)("h2",{id:"async_runtime-runtime-async-std--runtime-tokio"},"ASYNC_RUNTIME: ",(0,a.kt)("inlineCode",{parentName:"h2"},"runtime-async-std")," & ",(0,a.kt)("inlineCode",{parentName:"h2"},"runtime-tokio")),(0,a.kt)("p",null,"SeaStreamer currently supports two async runtimes, async-std & Tokio. Enable the one you need.\nThere are also some runtime-generic functions to help you build applications supporting both runtimes."))}m.isMDXComponent=!0}}]);