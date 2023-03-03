"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,y=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"2023-02-05-faq-02",title:"SeaORM FAQ.02",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},o=void 0,l={permalink:"/preview/pr-95/blog/2023-02-05-faq-02",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-02-05-faq-02.md",source:"@site/blog/2023-02-05-faq-02.md",title:"SeaORM FAQ.02",description:"FAQ.02 Why the empty enum Relation {} is needed even if an Entity has no relations?",date:"2023-02-05T00:00:00.000Z",formattedDate:"February 5, 2023",tags:[{label:"news",permalink:"/preview/pr-95/blog/tags/news"}],readingTime:1.225,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2023-02-05-faq-02",title:"SeaORM FAQ.02",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.11.0",permalink:"/preview/pr-95/blog/2023-02-08-whats-new-in-seaorm-0.11.0"},nextItem:{title:"Internship @ SeaQL",permalink:"/preview/pr-95/blog/2023-01-28-internship-at-seaql"}},s={authorsImageUrls:[void 0]},p=[{value:"FAQ.02 Why the empty enum <code>Relation {}</code> is needed even if an Entity has no relations?",id:"faq02-why-the-empty-enum-relation--is-needed-even-if-an-entity-has-no-relations",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"faq02-why-the-empty-enum-relation--is-needed-even-if-an-entity-has-no-relations"},"FAQ.02 Why the empty enum ",(0,r.kt)("inlineCode",{parentName:"h2"},"Relation {}")," is needed even if an Entity has no relations?"),(0,r.kt)("p",null,"Consider the following example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/entity/src/post.rs"},"Post")," Entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "posts")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub title: String,\n    pub text: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,r.kt)("p",null,"The two lines for defining ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation")," is quite unnecessary right?"),(0,r.kt)("p",null,"To explain the problem, let's dive slightly deeper into the macro-expanded entity:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro simply implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            _ => unreachable!()\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Which in turn is needed by ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityTrait")," as an associated type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl EntityTrait for Entity {\n    type Relation = Relation;\n    ...\n}\n")),(0,r.kt)("p",null,"It would be ideal if, when the user does not specify this associated type, the library automatically fills in a stub to satisfy the type system?"),(0,r.kt)("p",null,"Turns out, there is such a feature in Rust! It is an unstable feature called ",(0,r.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rfcs/2532-associated-type-defaults.html"},(0,r.kt)("inlineCode",{parentName:"a"},"associated_type_defaults")),"."),(0,r.kt)("p",null,"Basically, it allows trait definitions to specify a default associated type, allowing it to be elided:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// only compiles in nightly\ntrait EntityTrait {\n    type Relation: Relation = EmptyRelation;\n}\n")),(0,r.kt)("p",null,"Due to our commitment to stable Rust, this may not land in SeaORM very soon. When it is stabilized, do remind us to implement this feature to get rid of those two lines!"))}m.isMDXComponent=!0}}]);