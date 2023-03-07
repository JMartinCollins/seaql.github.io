"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),v=r,m=u["".concat(l,".").concat(v)]||u[v]||p[v]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="Save",s={unversionedId:"basic-crud/save",id:"version-0.5.x/basic-crud/save",title:"Save",description:"This is a helper method to save (insert / update) ActiveModel into the database.",source:"@site/versioned_docs/version-0.5.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/SeaORM/docs/0.5.x/basic-crud/save",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/05-basic-crud/04-save.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1678171053,formattedLastUpdatedAt:"Mar 7, 2023",sidebarPosition:4,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Update",permalink:"/SeaORM/docs/0.5.x/basic-crud/update"},next:{title:"Delete",permalink:"/SeaORM/docs/0.5.x/basic-crud/delete"}},l={},c=[{value:"Save Behaviour",id:"save-behaviour",level:2},{value:"Usage",id:"usage",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"save"},"Save"),(0,r.kt)("p",null,"This is a helper method to save (insert / update) ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," into the database."),(0,r.kt)("h2",{id:"save-behaviour"},"Save Behaviour"),(0,r.kt)("p",null,"When saving an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel"),", it will perform either insert or update depending on the primary key attribute:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert if primary key is ",(0,r.kt)("inlineCode",{parentName:"li"},"NotSet")),(0,r.kt)("li",{parentName:"ul"},"Update if primary key is ",(0,r.kt)("inlineCode",{parentName:"li"},"Set")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Unchanged"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," to insert or update an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\nlet banana = fruit::ActiveModel {\n    id: NotSet, // primary key is NotSet\n    name: Set("Banana".to_owned()),\n    ..Default::default() // all other attributes are `NotSet`\n};\n\n// Insert, because primary key `id` is `NotSet`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// Update, because primary key `id` is `Unchanged`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n')))}p.isMDXComponent=!0}}]);