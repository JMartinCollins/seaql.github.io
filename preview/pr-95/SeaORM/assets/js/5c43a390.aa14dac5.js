"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7422],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={},i="Aggregate Functions",c={unversionedId:"advanced-query/aggregate-function",id:"advanced-query/aggregate-function",title:"Aggregate Functions",description:"You can group results selected from SeaORM find with the group_by method. If you wish to further restrict the grouped result set, the having method can help you achieve that.",source:"@site/docs/08-advanced-query/03-aggregate-function.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/aggregate-function",permalink:"/preview/pr-95/SeaORM/docs/next/advanced-query/aggregate-function",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/08-advanced-query/03-aggregate-function.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1677825549,formattedLastUpdatedAt:"Mar 3, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conditional Expressions",permalink:"/preview/pr-95/SeaORM/docs/next/advanced-query/conditional-expression"},next:{title:"Custom Joins",permalink:"/preview/pr-95/SeaORM/docs/next/advanced-query/custom-joins"}},u={},s=[{value:"Group By",id:"group-by",level:2},{value:"Having",id:"having",level:2}],l={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aggregate-functions"},"Aggregate Functions"),(0,r.kt)("p",null,"You can group results selected from SeaORM find with the ",(0,r.kt)("inlineCode",{parentName:"p"},"group_by")," method. If you wish to further restrict the grouped result set, the ",(0,r.kt)("inlineCode",{parentName:"p"},"having")," method can help you achieve that."),(0,r.kt)("h2",{id:"group-by"},"Group By"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"group_by")," method can take a column of the entity or a complex ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .group_by(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name""#\n);\n\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column_as(cake::Column::Id.count(), "count")\n        .column_as(cake::Column::Id.sum(), "sum_of_id")\n        .group_by(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT COUNT("cake"."id") AS "count", SUM("cake"."id") AS "sum_of_id" FROM "cake" GROUP BY "cake"."name""#\n);\n')),(0,r.kt)("h2",{id:"having"},"Having"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"having")," method can take any conditional expressions introduced in the previous section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .having(cake::Column::Id.eq(4))\n        .having(cake::Column::Id.eq(5))\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT `cake`.`id`, `cake`.`name` FROM `cake` HAVING `cake`.`id` = 4 AND `cake`.`id` = 5"\n);\n\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column_as(cake::Column::Id.count(), "count")\n        .column_as(cake::Column::Id.sum(), "sum_of_id")\n        .group_by(cake::Column::Name)\n        .having(cake::Column::Id.gt(6))\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT COUNT(`cake`.`id`) AS `count`, SUM(`cake`.`id`) AS `sum_of_id` FROM `cake` GROUP BY `cake`.`name` HAVING `cake`.`id` > 6"\n);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Aggregation functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," are available in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ColumnTrait.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnTrait")),".")))}d.isMDXComponent=!0}}]);