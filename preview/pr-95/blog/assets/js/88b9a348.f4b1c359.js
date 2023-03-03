"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[2661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,g=m["".concat(l,".").concat(c)]||m[c]||h[c]||o;return a?r.createElement(g,n(n({ref:t},u),{},{components:a})):r.createElement(g,n({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var p=2;p<o;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const o={slug:"2022-09-17-introducing-seaography",title:"Introducing Seaography \ud83e\udded",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},n=void 0,s={permalink:"/preview/pr-95/blog/2022-09-17-introducing-seaography",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-09-17-introducing-seaography.md",source:"@site/blog/2022-09-17-introducing-seaography.md",title:"Introducing Seaography \ud83e\udded",description:"What a fruitful Summer of Code! Today, we are excited to introduce Seaography to the SeaQL community. Seaography is a GraphQL framework for building GraphQL resolvers using SeaORM. It ships with a CLI tool that can generate ready-to-compile Rust projects from existing MySQL, Postgres and SQLite databases.",date:"2022-09-17T00:00:00.000Z",formattedDate:"September 17, 2022",tags:[{label:"news",permalink:"/preview/pr-95/blog/tags/news"}],readingTime:3.525,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-09-17-introducing-seaography",title:"Introducing Seaography \ud83e\udded",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Getting Started with Seaography",permalink:"/preview/pr-95/blog/2022-09-27-getting-started-with-seaography"},nextItem:{title:"Celebrating 3,000+ GitHub Stars \ud83c\udf89",permalink:"/preview/pr-95/blog/2022-08-12-3k-github-stars"}},l={authorsImageUrls:[void 0]},p=[{value:"Motivation",id:"motivation",level:2},{value:"Design",id:"design",level:2},{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"People",id:"people",level:2}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"What a fruitful Summer of Code! Today, we are excited to introduce ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"Seaography")," to the SeaQL community. Seaography is a GraphQL framework for building GraphQL resolvers using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM"),". It ships with a CLI tool that can generate ready-to-compile Rust projects from existing MySQL, Postgres and SQLite databases."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"We observed that other ecosystems have similar tools such as PostGraphile and Hasura allowing users to query a database via GraphQL with minimal effort upfront. We decided to bring that seamless experience to the Rust ecosystem."),(0,i.kt)("p",null,"For existing SeaORM users, adding a GraphQL API is straight forward. Start by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"seaography")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"async-graphql")," dependencies to your crate. Then, deriving a few extra derive macros to the SeaORM entities. Finally, spin up a GraphQL server to serve queries!"),(0,i.kt)("p",null,"If you are new to SeaORM, no worries, we have your back. You only need to provide a database connection, and ",(0,i.kt)("inlineCode",{parentName:"p"},"seaography-cli")," will generate the SeaORM entities together with a complete Rust project!"),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"We considered two approaches in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/discussions/12"},"initial discussion"),": 1) blackbox query engine 2) code generator. The drawback with a blackbox query engine is it's difficult to customize or extend its behaviour, making it difficult to develop and operate in the long run. We opted the code generator approach, giving users full control and endless possibilities with the versatile async Rust ecosystem."),(0,i.kt)("p",null,"This project is separated into the following crates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},(0,i.kt)("inlineCode",{parentName:"a"},"seaography")),": The facade crate; exporting macros, structures and helper functions to turn SeaORM entities into GraphQL nodes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/tree/main/cli"},(0,i.kt)("inlineCode",{parentName:"a"},"seaography-cli")),": The CLI tool; it generates SeaORM entities along with a full Rust project based on a user-provided database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/tree/main/discoverer"},(0,i.kt)("inlineCode",{parentName:"a"},"seaography-discoverer")),": A helper crate used by the CLI tool to discover the database schema and transform into a generic format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/tree/main/generator"},(0,i.kt)("inlineCode",{parentName:"a"},"seaography-generator")),": A helper crate used by the CLI tool to consume the database schema and generate a full Rust project.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/tree/main/derive"},(0,i.kt)("inlineCode",{parentName:"a"},"seaography-derive")),": A set of procedural macros to derive types and trait implementations on SeaORM entities, turning them into GraphQL nodes."))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Relational query (1-to-1, 1-to-N)"),(0,i.kt)("li",{parentName:"ul"},"Pagination on query's root entity"),(0,i.kt)("li",{parentName:"ul"},"Filter with operators (e.g. gt, lt, eq)"),(0,i.kt)("li",{parentName:"ul"},"Order by any column")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"To quick start, we have the following examples for you, alongside with the SQL scripts to initialize the database."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/mysql"},"MySQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/postgres"},"PostgreSQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/sqlite"},"SQLite"))),(0,i.kt)("p",null,"All examples provide a web-based GraphQL playground when running, so you can inspect the GraphQL schema and make queries. We also hosted a ",(0,i.kt)("a",{parentName:"p",href:"https://playground.sea-ql.org/seaography"},"demo GraphQL playground")," in case you can't wait to play with it."),(0,i.kt)("p",null,"For more documentation, visit ",(0,i.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/Seaography/"},"www.sea-ql.org/Seaography"),"."),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"This project passed the first milestone shipping the essential features, but it still has a long way to go. The next milestone would be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Query enhancements",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Filter related queries"),(0,i.kt)("li",{parentName:"ul"},"Filter based on related queries properties"),(0,i.kt)("li",{parentName:"ul"},"Paginate related queries"),(0,i.kt)("li",{parentName:"ul"},"Order by related queries"))),(0,i.kt)("li",{parentName:"ul"},"Cursor based pagination"),(0,i.kt)("li",{parentName:"ul"},"Single entity query"),(0,i.kt)("li",{parentName:"ul"},"Mutations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Insert single entity"),(0,i.kt)("li",{parentName:"ul"},"Insert batch entities"),(0,i.kt)("li",{parentName:"ul"},"Update single entity"),(0,i.kt)("li",{parentName:"ul"},"Update batch entities using filter"),(0,i.kt)("li",{parentName:"ul"},"Delete single entity"),(0,i.kt)("li",{parentName:"ul"},"Delete batch entities")))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Seaography is an ergonomic library that turns SeaORM entities into GraphQL nodes. It provides a set of utilities and combined with a code generator makes GraphQL API building a breeze."),(0,i.kt)("p",null,"However, Seaography is still a new-born. Like all other open-source projects developed by passionate Rust developers, you can contribute to it if you also find the concept interesting. With its addition to the SeaQL ecosystem, we are one step closer to the vision of Rust being the best tool for data engineering."),(0,i.kt)("h2",{id:"people"},"People"),(0,i.kt)("p",null,"Seaography is created by:"),(0,i.kt)("div",{className:"container"},(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--12 margin-bottom--md"},(0,i.kt)("div",{className:"avatar"},(0,i.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/karatakis"},(0,i.kt)("img",{src:"https://avatars.githubusercontent.com/u/7329022?v=4"})),(0,i.kt)("div",{className:"avatar__intro"},(0,i.kt)("div",{className:"avatar__name"},"Panagiotis Karatakis"),"Summer of Code Contributor; developer of Seaography"))),(0,i.kt)("div",{className:"col col--12 margin-bottom--md"},(0,i.kt)("div",{className:"avatar"},(0,i.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,i.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,i.kt)("div",{className:"avatar__intro"},(0,i.kt)("div",{className:"avatar__name"},"Chris Tsang"),"Summer of Code Mentor; lead developer of SeaQL"))),(0,i.kt)("div",{className:"col col--12 margin-bottom--md"},(0,i.kt)("div",{className:"avatar"},(0,i.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,i.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,i.kt)("div",{className:"avatar__intro"},(0,i.kt)("div",{className:"avatar__name"},"Billy Chan"),"Summer of Code Mentor; core member of SeaQL"))))))}h.isMDXComponent=!0}}]);