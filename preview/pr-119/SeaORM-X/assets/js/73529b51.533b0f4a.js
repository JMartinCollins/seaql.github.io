"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[3443],{5641:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,k=u["".concat(p,".").concat(s)]||u[s]||c[s]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(1308),r=(a(6687),a(5641));const i={},l="Derive Macros",o={unversionedId:"internal-design/derive-macro",id:"internal-design/derive-macro",title:"Derive Macros",description:"EntityModel",source:"@site/docs/11-internal-design/02-derive-macro.md",sourceDirName:"11-internal-design",slug:"/internal-design/derive-macro",permalink:"/preview/pr-119/SeaORM-X/docs/internal-design/derive-macro",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/11-internal-design/02-derive-macro.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712043008,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Traits and Types",permalink:"/preview/pr-119/SeaORM-X/docs/internal-design/trait-and-type"},next:{title:"Compare with Diesel",permalink:"/preview/pr-119/SeaORM-X/docs/internal-design/diesel"}},p={},m=[{value:"EntityModel",id:"entitymodel",level:2},{value:"Entity",id:"entity",level:2},{value:"Column",id:"column",level:2},{value:"Primary Key",id:"primary-key",level:2},{value:"Model",id:"model",level:2},{value:"Active Model",id:"active-model",level:2},{value:"Partial Model",id:"partial-model",level:2},{value:"Active Enum",id:"active-enum",level:2},{value:"Relation",id:"relation",level:2},{value:"RelatedEntity",id:"relatedentity",level:2},{value:"Iterable",id:"iterable",level:2},{value:"Value Type",id:"value-type",level:2},{value:"Display",id:"display",level:2}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"derive-macros"},"Derive Macros"),(0,r.kt)("h2",{id:"entitymodel"},"EntityModel"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityModel"))," derive macro is the 'almighty' macro which automatically generates ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," from a given ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveEntity"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," and it assumes ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation")," exist in the current scope. It also provides implementation of ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iden"))," and ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveColumn"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Columns"),". It defines the identifier of each column by implementing ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iden"))," and ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic")),". The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EnumIter"))," is also derived, allowing iteration over all enum variants."),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DerivePrimaryKey"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyToColumn"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," which defines tedious mappings between primary keys and columns. The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EnumIter"))," is also derived, allowing iteration over all enum variants."),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveModel"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),", which provides setters and getters for all attributes in the model. It also implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"FromQueryResult"))," to convert a query result into the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,r.kt)("h2",{id:"active-model"},"Active Model"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveActiveModel"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModelTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," which provides setters and getters for all active values in the active model."),(0,r.kt)("h2",{id:"partial-model"},"Partial Model"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DerivePartialModel"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PartialModelTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,r.kt)("h2",{id:"active-enum"},"Active Enum"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," for any enums."),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveRelation"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation"),"."),(0,r.kt)("h2",{id:"relatedentity"},"RelatedEntity"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveRelatedEntity"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"seaography::RelationBuilder"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"RelatedEntity")," enumeration when the ",(0,r.kt)("inlineCode",{parentName:"p"},"seaography")," feature is enabled"),(0,r.kt)("h2",{id:"iterable"},"Iterable"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EnumIter"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," to allow iteration over all enum variants."),(0,r.kt)("h2",{id:"value-type"},"Value Type"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveValueType"))," derive macro will implement ",(0,r.kt)("inlineCode",{parentName:"p"},"From<T> for Value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sea_orm::TryGetable for T")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sea_query::ValueType for T")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,r.kt)("h2",{id:"display"},"Display"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveDisplay"))," derive macro will implement ",(0,r.kt)("inlineCode",{parentName:"p"},"std::fmt::Display")," for enums."))}c.isMDXComponent=!0}}]);