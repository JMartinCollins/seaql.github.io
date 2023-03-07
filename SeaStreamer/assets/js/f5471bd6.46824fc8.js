"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(c,".").concat(u)]||d[u]||l[u]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i="Index",p={unversionedId:"index",id:"index",title:"Index",description:"1. Introduction",source:"@site/docs/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaStreamer/docs/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/01-index.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1678171053,formattedLastUpdatedAt:"Mar 7, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Intro to Stream Processing",permalink:"/SeaStreamer/docs/introduction/intro-to-streams"}},c={},s=[],m={toc:s};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Introduction"),(0,n.kt)("p",{parentName:"li"},"1.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/introduction/intro-to-streams"},"Intro to Stream Processing")),(0,n.kt)("p",{parentName:"li"},"1.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/introduction/async-programming"},"Async Programming in Rust")),(0,n.kt)("p",{parentName:"li"},"1.3. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/introduction/sea-streamer"},"SeaStreamer Concepts")),(0,n.kt)("p",{parentName:"li"},"1.4. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/introduction/examples"},"Example Processors"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configuration"),(0,n.kt)("p",{parentName:"li"},"2.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/configuration/configuration"},"Configuring Features")),(0,n.kt)("p",{parentName:"li"},"2.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/configuration/architecture"},"SeaStreamer Architecture"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SeaStreamer Semantics"),(0,n.kt)("p",{parentName:"li"},"3.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/streamer/streamer"},"Streamer")),(0,n.kt)("p",{parentName:"li"},"3.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/streamer/producer"},"Producer")),(0,n.kt)("p",{parentName:"li"},"3.3. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/streamer/consumer"},"Consumer"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connecting Stream Processors"),(0,n.kt)("p",{parentName:"li"},"4.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/processors/inter-process"},"Inter Process")),(0,n.kt)("p",{parentName:"li"},"4.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/processors/intra-process"},"Intra Process"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What's next?"),(0,n.kt)("p",{parentName:"li"},"5.1. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/next/roadmap"},"The Roadmap")),(0,n.kt)("p",{parentName:"li"},"5.2. ",(0,n.kt)("a",{parentName:"p",href:"/SeaStreamer/docs/next/vision"},"The Vision")))))}l.isMDXComponent=!0}}]);