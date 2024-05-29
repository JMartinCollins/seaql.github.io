"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2367],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(31308),r=(n(76687),n(48859));const i={},o="Raw SQL",l={unversionedId:"basic-crud/raw-sql",id:"version-0.8.x/basic-crud/raw-sql",title:"Raw SQL",description:"Query by raw SQL",source:"@site/versioned_docs/version-0.8.x/05-basic-crud/07-raw-sql.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/raw-sql",permalink:"/SeaORM/docs/0.8.x/basic-crud/raw-sql",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/05-basic-crud/07-raw-sql.md",tags:[],version:"0.8.x",lastUpdatedBy:"lanouyang-fdtech",lastUpdatedAt:1715782037,formattedLastUpdatedAt:"May 15, 2024",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/SeaORM/docs/0.8.x/basic-crud/json"},next:{title:"Setting Up Migration",permalink:"/SeaORM/docs/0.8.x/migration/setting-up-migration"}},s={},c=[{value:"Query by raw SQL",id:"query-by-raw-sql",level:2},{value:"Get raw SQL query",id:"get-raw-sql-query",level:2},{value:"Use Raw Query &amp; Execute Interface",id:"use-raw-query--execute-interface",level:2},{value:"Get Custom Result using <code>query_one</code> and <code>query_all</code> methods",id:"get-custom-result-using-query_one-and-query_all-methods",level:3},{value:"Execute Query using <code>execute</code> method",id:"execute-query-using-execute-method",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"raw-sql"},"Raw SQL"),(0,r.kt)("h2",{id:"query-by-raw-sql"},"Query by raw SQL"),(0,r.kt)("p",null,"You can select ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," from raw query, with appropriate syntax for binding parameters, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," for MySQL and SQLite, and ",(0,r.kt)("inlineCode",{parentName:"p"},"$N")," for PostgreSQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        vec![1.into()],\n    ))\n    .one(&db)\n    .await?;\n')),(0,r.kt)("p",null,"You can also select a custom model. Here, we select all unique names from cake."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, FromQueryResult)]\npub struct UniqueCake {\n    name: String,\n}\n\nlet unique: Vec<UniqueCake> = UniqueCake::find_by_statement(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name"#,\n        vec![],\n    ))\n    .all(&db)\n    .await?;\n')),(0,r.kt)("p",null,"You can paginate ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/struct.SelectorRaw.html"},(0,r.kt)("inlineCode",{parentName:"a"},"SelectorRaw"))," and fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," in batch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut cake_pages = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        vec![1.into()],\n    ))\n    .paginate(db, 50);\n \nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // Do something on cakes: Vec<cake::Model>\n}\n')),(0,r.kt)("h2",{id:"get-raw-sql-query"},"Get raw SQL query"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"to_string")," methods on any CRUD operations to get the database-specific raw SQL for debugging purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::DatabaseBackend;\n\nassert_eq!(\n    cake_filling::Entity::find_by_id((6, 8))\n        .build(DatabaseBackend::MySql)\n        .to_string(),\n    vec![\n        "SELECT `cake_filling`.`cake_id`, `cake_filling`.`filling_id` FROM `cake_filling`",\n        "WHERE `cake_filling`.`cake_id` = 6 AND `cake_filling`.`filling_id` = 8",\n    ].join(" ")\n);\n')),(0,r.kt)("h2",{id:"use-raw-query--execute-interface"},"Use Raw Query & Execute Interface"),(0,r.kt)("p",null,"You can build SQL statements using ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-query")," and query / execute it directly on the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseConnection")," interface inside SeaORM."),(0,r.kt)("h3",{id:"get-custom-result-using-query_one-and-query_all-methods"},"Get Custom Result using ",(0,r.kt)("inlineCode",{parentName:"h3"},"query_one")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"query_all")," methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let query_res: Option<QueryResult> = db\n    .query_one(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;".to_owned(),\n    ))\n    .await?;\nlet query_res = query_res.unwrap();\nlet id: i32 = query_res.try_get("", "id")?;\n\nlet query_res_vec: Vec<QueryResult> = db\n    .query_all(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;".to_owned(),\n    ))\n    .await?;\n')),(0,r.kt)("h3",{id:"execute-query-using-execute-method"},"Execute Query using ",(0,r.kt)("inlineCode",{parentName:"h3"},"execute")," method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let exec_res: ExecResult = db\n    .execute(Statement::from_string(\n        DatabaseBackend::MySql,\n        "DROP DATABASE IF EXISTS `sea`;".to_owned(),\n    ))\n    .await?;\nassert_eq!(exec_res.rows_affected(), 1);\n')))}d.isMDXComponent=!0}}]);