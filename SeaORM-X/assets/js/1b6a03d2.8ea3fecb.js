"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[961],{5641:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(1308),a=(r(6687),r(5641));const i={},o="Insert",c={unversionedId:"basic-crud/insert",id:"basic-crud/insert",title:"Insert",description:"Identity Insert",source:"@site/docs/05-basic-crud/01-insert.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/insert",permalink:"/SeaORM-X/docs/basic-crud/insert",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/05-basic-crud/01-insert.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1714359929,formattedLastUpdatedAt:"Apr 29, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Structure",permalink:"/SeaORM-X/docs/generate-entity/entity-structure"}},s={},l=[{value:"Identity Insert",id:"identity-insert",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"insert"},"Insert"),(0,a.kt)("h2",{id:"identity-insert"},"Identity Insert"),(0,a.kt)("p",null,"Insert an active model with a specific primary key value. For MSSQL, SeaORM X will automatically enable ",(0,a.kt)("inlineCode",{parentName:"p"},"IDENTITY INSERT")," when inserting a row with primary key value and disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"IDENTITY INSERT")," once the insert finished."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    id: Set(1),\n    name: Set("Pear".to_owned()),\n    cake_id: NotSet,\n};\n\n// `IDENTITY INSERT` behind the hood\nlet pear: fruit::Model = pear.insert(db).await?;\n')))}p.isMDXComponent=!0}}]);