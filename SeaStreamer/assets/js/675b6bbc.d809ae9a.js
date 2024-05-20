"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6237],{8859:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||l[u]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=r(1308),n=(r(6687),r(8859));const o={},i="Index",p={unversionedId:"index",id:"version-0.2.x/index",title:"Index",description:"1. Introduction",source:"@site/versioned_docs/version-0.2.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaStreamer/docs/0.2.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.2.x/01-index.md",tags:[],version:"0.2.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1716194275,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Intro to Stream Processing",permalink:"/SeaStreamer/docs/0.2.x/introduction/intro-to-streams"}},s={},m=[],c={toc:m};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Introduction"),(0,n.kt)("p",{parentName:"li"},"1.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/introduction/intro-to-streams"},"Intro to Stream Processing")),(0,n.kt)("p",{parentName:"li"},"1.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/introduction/async-programming"},"Async Programming in Rust")),(0,n.kt)("p",{parentName:"li"},"1.3. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/introduction/sea-streamer"},"SeaStreamer Concepts"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Getting Started"),(0,n.kt)("p",{parentName:"li"},"2.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/getting-started/configuration"},"Configuring Features")),(0,n.kt)("p",{parentName:"li"},"2.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/getting-started/architecture"},"SeaStreamer Architecture")),(0,n.kt)("p",{parentName:"li"},"2.3. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/getting-started/examples"},"Example Processors"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SeaStreamer Semantics"),(0,n.kt)("p",{parentName:"li"},"3.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/streamer/streamer"},"Streamer")),(0,n.kt)("p",{parentName:"li"},"3.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/streamer/producer"},"Producer")),(0,n.kt)("p",{parentName:"li"},"3.3. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/streamer/consumer"},"Consumer"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connecting Stream Processors"),(0,n.kt)("p",{parentName:"li"},"4.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/processors/inter-process"},"Inter Process")),(0,n.kt)("p",{parentName:"li"},"4.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/processors/intra-process"},"Intra Process"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What's Next?"),(0,n.kt)("p",{parentName:"li"},"5.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/whats-next/roadmap"},"The Roadmap")),(0,n.kt)("p",{parentName:"li"},"5.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/0.2.x/whats-next/vision"},"The Vision")))))}l.isMDXComponent=!0}}]);