"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[77253],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,y=m["".concat(s,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(31308),a=(n(76687),n(48859));const l={},o="Custom Select",i={unversionedId:"advanced-query/custom-select",id:"version-0.6.x/advanced-query/custom-select",title:"Custom Select",description:"By default, SeaORM will select all columns defined in the Column enum. You can override the defaults if you wish to select certain columns only.",source:"@site/versioned_docs/version-0.6.x/09-advanced-query/01-custom-select.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/custom-select",permalink:"/SeaORM/docs/0.6.x/advanced-query/custom-select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/09-advanced-query/01-custom-select.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712242946,formattedLastUpdatedAt:"Apr 4, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using SQLite",permalink:"/SeaORM/docs/0.6.x/write-test/sqlite"},next:{title:"Conditional Expressions",permalink:"/SeaORM/docs/0.6.x/advanced-query/conditional-expression"}},s={},c=[{value:"Clear Default Selection",id:"clear-default-selection",level:2},{value:"Select Some Attributes Only",id:"select-some-attributes-only",level:2},{value:"Select Custom Expressions",id:"select-custom-expressions",level:2},{value:"Handling Custom Selects",id:"handling-custom-selects",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-select"},"Custom Select"),(0,a.kt)("p",null,"By default, SeaORM will select all columns defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Column")," enum. You can override the defaults if you wish to select certain columns only."),(0,a.kt)("h2",{id:"clear-default-selection"},"Clear Default Selection"),(0,a.kt)("p",null,"Clear the default selection by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"select_only")," method if needed. Then, you can select some of the attributes or even custom expressions after it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting all columns\nassert_eq!(\n    cake::Entity::find()\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"select-some-attributes-only"},"Select Some Attributes Only"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"select_only")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"column")," methods together to select only the attributes you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting the name column only\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"select-custom-expressions"},"Select Custom Expressions"),(0,a.kt)("p",null,"Select any custom expression with ",(0,a.kt)("inlineCode",{parentName:"p"},"column_as")," method, it takes any ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," and an alias. Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::Expr"))," helper to build ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleExpr"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{Alias, Expr};\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")\n        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"handling-custom-selects"},"Handling Custom Selects"),(0,a.kt)("p",null,"You can use a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,a.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of a complex query. It is especially useful when dealing with custom columns or multiple joins which cannot directly be converted into models. It may be used to receive the result of any query, even raw SQL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{FromQueryResult, JoinType, RelationTrait};\nuse sea_query::Expr;\n\n#[derive(FromQueryResult)]\nstruct CakeAndFillingCount {\n    id: i32,\n    name: String,\n    count: i32,\n}\n\nlet cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()\n    .column_as(filling::Column::Id.count(), "count")\n    .join_rev(\n        // construct `RelationDef` on the fly\n        JoinType::InnerJoin,\n        cake_filling::Entity::belongs_to(cake::Entity)\n            .from(cake_filling::Column::CakeId)\n            .to(cake::Column::Id)\n            .into()\n    )\n    // reuse a `Relation` from existing Entity\n    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n    .group_by(cake::Column::Id)\n    .into_model::<CakeAndFillingCount>()\n    .all(db)\n    .await?;\n')))}d.isMDXComponent=!0}}]);