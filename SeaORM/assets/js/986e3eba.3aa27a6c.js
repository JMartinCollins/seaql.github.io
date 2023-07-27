"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[80988],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},i="SeaORM Concepts",p={unversionedId:"introduction/sea-orm",id:"version-0.8.x/introduction/sea-orm",title:"SeaORM Concepts",description:"In SeaORM, a database with a collection of tables is called a Schema.",source:"@site/versioned_docs/version-0.8.x/01-introduction/03-sea-orm.md",sourceDirName:"01-introduction",slug:"/introduction/sea-orm",permalink:"/SeaORM/docs/0.8.x/introduction/sea-orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/01-introduction/03-sea-orm.md",tags:[],version:"0.8.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690464550,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Programming",permalink:"/SeaORM/docs/0.8.x/introduction/async"},next:{title:"Tutorial & Examples",permalink:"/SeaORM/docs/0.8.x/introduction/tutorial"}},s={},l=[],c={toc:l};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seaorm-concepts"},"SeaORM Concepts"),(0,n.kt)("p",null,"In SeaORM, a database with a collection of tables is called a ",(0,n.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,n.kt)("p",null,"Each table corresponds to an ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/entity-structure#entity"},(0,n.kt)("inlineCode",{parentName:"a"},"Entity"))," in SeaORM, which helps you perform ",(0,n.kt)("inlineCode",{parentName:"p"},"CRUD")," (Create, Read, Update, and Delete) operations on relevant tables."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Entity")," trait provides an API for you to inspect its properties (",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/entity-structure#column"},(0,n.kt)("inlineCode",{parentName:"a"},"Column")),", ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/entity-structure#relation"},(0,n.kt)("inlineCode",{parentName:"a"},"Relation"))," and ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/entity-structure#primary-key"},(0,n.kt)("inlineCode",{parentName:"a"},"PrimaryKey")),") at runtime."),(0,n.kt)("p",null,"Each table has multiple columns, which are referred to as ",(0,n.kt)("inlineCode",{parentName:"p"},"attribute"),"."),(0,n.kt)("p",null,"These attributes and their values are grouped in a Rust struct (a ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/expanded-entity-structure#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),") so that you can manipulate them."),(0,n.kt)("p",null,"However, ",(0,n.kt)("inlineCode",{parentName:"p"},"Model")," is for read operations only. To perform insert, update, or delete, you need to use ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/expanded-entity-structure#active-model"},(0,n.kt)("inlineCode",{parentName:"a"},"ActiveModel"))," which attaches meta-data on each attribute."),(0,n.kt)("p",null,"Finally, there is no singleton (global context) in SeaORM. Application code is responsible for managing the ownership of the ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/install-and-config/connection"},(0,n.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),". We do provide integration examples for web frameworks including ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"axum")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"poem")," to help you get started quickly."))}m.isMDXComponent=!0}}]);