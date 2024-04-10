"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[18183],{48859:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(31308),r=(n(76687),n(48859));const o={},i="Schema Management",s={unversionedId:"install-and-config/schema",id:"version-0.6.x/install-and-config/schema",title:"Schema Management",description:"If you already have a database with tables and data, you can skip this section and move on to generating SeaORM entities.",source:"@site/versioned_docs/version-0.6.x/02-install-and-config/02-schema.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/schema",permalink:"/preview/pr-120/SeaORM/docs/0.6.x/install-and-config/schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/02-install-and-config/02-schema.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712738576,formattedLastUpdatedAt:"Apr 10, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database & Async Runtime",permalink:"/preview/pr-120/SeaORM/docs/0.6.x/install-and-config/database-and-async-runtime"},next:{title:"Connection Pool",permalink:"/preview/pr-120/SeaORM/docs/0.6.x/install-and-config/connection"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schema-management"},"Schema Management"),(0,r.kt)("p",null,"If you already have a database with tables and data, you can skip this section and move on to ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-120/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"},"generating SeaORM entities"),"."),(0,r.kt)("p",null,"If you are starting from a fresh database, it's actually better to version control your database schema with a migration tool. Follow the steps in ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-120/SeaORM/docs/0.6.x/migration/setting-up-migration"},"migration docs")," to write the migration and run it to create tables in the database. Then, read on ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-120/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"},"generating SeaORM entities"),"."))}d.isMDXComponent=!0}}]);