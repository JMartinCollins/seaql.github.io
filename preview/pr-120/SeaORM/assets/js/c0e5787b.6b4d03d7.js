"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[49047],{48859:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),v=a,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(31308),a=(n(76687),n(48859));const i={},o="Save",s={unversionedId:"basic-crud/save",id:"version-0.4.x/basic-crud/save",title:"Save",description:"This is a helper method to save (insert / update) ActiveModel into the database.",source:"@site/versioned_docs/version-0.4.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/preview/pr-120/SeaORM/docs/0.4.x/basic-crud/save",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/05-basic-crud/04-save.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712738576,formattedLastUpdatedAt:"Apr 10, 2024",sidebarPosition:4,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Update",permalink:"/preview/pr-120/SeaORM/docs/0.4.x/basic-crud/update"},next:{title:"Delete",permalink:"/preview/pr-120/SeaORM/docs/0.4.x/basic-crud/delete"}},l={},p=[{value:"Save Behaviour",id:"save-behaviour",level:2},{value:"Usage",id:"usage",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"save"},"Save"),(0,a.kt)("p",null,"This is a helper method to save (insert / update) ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," into the database."),(0,a.kt)("h2",{id:"save-behaviour"},"Save Behaviour"),(0,a.kt)("p",null,"When saving an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel"),", it will perform either insert or update depending on the primary key attribute:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert if primary key is ",(0,a.kt)("inlineCode",{parentName:"li"},"Unset")),(0,a.kt)("li",{parentName:"ul"},"Update if primary key is ",(0,a.kt)("inlineCode",{parentName:"li"},"Set")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Unchanged"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," to insert or update an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let banana = fruit::ActiveModel {\n    id: Unset(None), // unset primary key explicitly\n    name: Set("Banana".to_owned()),\n    ..Default::default() // all other attributes are `Unset`\n};\n\n// Insert, because primary key `id` is `Unset`\nlet mut banana = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// Update, because primary key `id` is `Set`\nlet banana = banana.save(db).await?;\n')))}d.isMDXComponent=!0}}]);