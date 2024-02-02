"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[65038],{48859:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,y=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(31308),a=(r(76687),r(48859));const o={},i="Bakery Schema",c={unversionedId:"relation/bakery-schema",id:"version-0.6.x/relation/bakery-schema",title:"Bakery Schema",description:"Bakery Schema ERD",source:"@site/versioned_docs/version-0.6.x/07-relation/06-bakery-schema.md",sourceDirName:"07-relation",slug:"/relation/bakery-schema",permalink:"/SeaORM/docs/0.6.x/relation/bakery-schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/07-relation/06-bakery-schema.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1706862035,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Self Referencing",permalink:"/SeaORM/docs/0.6.x/relation/self-referencing"},next:{title:"Robust & Correct",permalink:"/SeaORM/docs/0.6.x/write-test/testing"}},s={},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bakery-schema"},"Bakery Schema"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/SeaQL/sea-orm/master/tests/common/bakery_chain/bakery_chain_erd.svg",alt:"Bakery Schema ERD"})),(0,a.kt)("p",null,"For an example of a complete schema with different data types and relations, you can reference the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/tests/common/bakery_chain"},"Bakery Schema")," of SeaORM's test suite."))}m.isMDXComponent=!0}}]);