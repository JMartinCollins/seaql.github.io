"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[3858],{9680:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(1308),r=(n(6687),n(9680));const o={slug:"2022-05-14-faq-01",title:"SeaORM FAQ.01",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},i=void 0,l={permalink:"/preview/pr-119/blog/2022-05-14-faq-01",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-05-14-faq-01.md",source:"@site/blog/2022-05-14-faq-01.md",title:"SeaORM FAQ.01",description:"FAQ.01 Why SeaORM does not nest objects for parent-child relation?",date:"2022-05-14T00:00:00.000Z",formattedDate:"May 14, 2022",tags:[{label:"news",permalink:"/preview/pr-119/blog/tags/news"}],readingTime:1.605,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2022-05-14-faq-01",title:"SeaORM FAQ.01",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.8.0",permalink:"/preview/pr-119/blog/2022-05-15-whats-new-in-0.8.0"},nextItem:{title:"Introducing StarfishQL",permalink:"/preview/pr-119/blog/2022-04-04-introducing-starfish-ql"}},s={authorsImageUrls:[void 0]},u=[{value:"FAQ.01 Why SeaORM does not nest objects for parent-child relation?",id:"faq01-why-seaorm-does-not-nest-objects-for-parent-child-relation",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"faq01-why-seaorm-does-not-nest-objects-for-parent-child-relation"},"FAQ.01 Why SeaORM does not nest objects for parent-child relation?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> =\n    Cake::find().find_with_related(Fruit).all(db).await?;\n")),(0,r.kt)("p",null,"Consider the above API, ",(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit")," are two separate models."),(0,r.kt)("p",null,"If you come from a dynamic language, you'd probably used to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Cake {\n    id: u64,\n    fruit: Fruit,\n    ..\n}\n")),(0,r.kt)("p",null,"It's so convenient that you can simply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let cake = Cake::find().one(db).await?;\nprintln!("Fruit = {}", cake.fruit.name);\n')),(0,r.kt)("p",null,"Sweet right? Okay so, the problem with this pattern is that it does not fit well with Rust."),(0,r.kt)("p",null,"Let's look at this playground: ",(0,r.kt)("a",{parentName:"p",href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=6fb0a981189ace081fbb2aa04f50146b"},"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=6fb0a981189ace081fbb2aa04f50146b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Parent {\n    a: u64,\n    child: Option<Child>,\n}\n\nstruct ParentWithBox {\n    a: u64,\n    child: Option<Box<Child>>,\n}\n\nstruct Child {\n    a: u64,\n    b: u64,\n    c: u64,\n    d: u64,\n}\n\nfn main() {\n    dbg!(std::mem::size_of::<Parent>());\n    dbg!(std::mem::size_of::<ParentWithBox>());\n    dbg!(std::mem::size_of::<Child>());\n}\n")),(0,r.kt)("p",null,"What's the output you guess?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"[src/main.rs:21] std::mem::size_of::<Parent>() = 48\n[src/main.rs:22] std::mem::size_of::<ParentWithBox>() = 16\n[src/main.rs:23] std::mem::size_of::<Child>() = 32\n")),(0,r.kt)("p",null,"In dynamic languages, objects are always held by pointers, and that maps to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," in Rust. In Rust, we don't put objects in ",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),"es by default, because it forces the object to be allocated on the heap. And that is an extra cost! Because objects are always first constructed on the stack and then being copied over to the heap."),(0,r.kt)("p",null,"Ref:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://users.rust-lang.org/t/how-to-create-large-objects-directly-in-heap/26405"},"https://users.rust-lang.org/t/how-to-create-large-objects-directly-in-heap/26405")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PoignardAzur/placement-by-return/blob/placement-by-return/text/0000-placement-by-return.md"},"https://github.com/PoignardAzur/placement-by-return/blob/placement-by-return/text/0000-placement-by-return.md"))),(0,r.kt)("p",null,"We face the dilemma where we either put the object on the stack and waste some space (it takes up 48 bytes no matter ",(0,r.kt)("inlineCode",{parentName:"p"},"child")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," or not) or put the object in a box and waste some cycles."),(0,r.kt)("p",null,"If you are new to Rust, all these might be unfamiliar, but a Rust programmer has to consciously make decisions over memory management, and we don't want to make decisions on behalf of our users."),(0,r.kt)("p",null,"That said, there were proposals to add API with this style to SeaORM, and we might implement that in the future. Hopefully this would shed some light on the matter meanwhile."))}c.isMDXComponent=!0}}]);