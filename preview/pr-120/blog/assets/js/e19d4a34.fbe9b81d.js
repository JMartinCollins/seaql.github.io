"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[3821],{9680:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(1308),r=(a(6687),a(9680));const i={slug:"2022-12-30-whats-new-in-seaquery-0.28.0",title:"What's new in SeaQuery 0.28.0",author:"SeaQL Team",author_title:"Ivan Krivosheev",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},l=void 0,s={permalink:"/preview/pr-120/blog/2022-12-30-whats-new-in-seaquery-0.28.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-12-30-whats-new-in-seaquery-0.28.0.md",source:"@site/blog/2022-12-30-whats-new-in-seaquery-0.28.0.md",title:"What's new in SeaQuery 0.28.0",description:"\ud83c\udf89 We are pleased to release SeaQuery 0.28.0! Here are some feature highlights \ud83c\udf1f:",date:"2022-12-30T00:00:00.000Z",formattedDate:"December 30, 2022",tags:[{label:"news",permalink:"/preview/pr-120/blog/tags/news"}],readingTime:3.965,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Ivan Krivosheev",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-12-30-whats-new-in-seaquery-0.28.0",title:"What's new in SeaQuery 0.28.0",author:"SeaQL Team",author_title:"Ivan Krivosheev",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Call for Contributors and Reviewers \ud83d\udce2",permalink:"/preview/pr-120/blog/2023-01-01-call-for-contributors-n-reviewers"},nextItem:{title:"What's new in Seaography 0.3.0",permalink:"/preview/pr-120/blog/2022-12-02-whats-new-in-seaography-0.3.0"}},o={authorsImageUrls:[void 0]},p=[{value:"New <code>IdenStatic</code> trait for static identifier",id:"new-idenstatic-trait-for-static-identifier",level:2},{value:"New <code>PgExpr</code> and <code>SqliteExpr</code> traits for backend specific expressions",id:"new-pgexpr-and-sqliteexpr-traits-for-backend-specific-expressions",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"API Additions",id:"api-additions",level:2},{value:"Miscellaneous Enhancements",id:"miscellaneous-enhancements",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Community",id:"community",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaQuery ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/releases/tag/0.28.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.28.0")),"! Here are some feature highlights \ud83c\udf1f:"),(0,r.kt)("h2",{id:"new-idenstatic-trait-for-static-identifier"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"IdenStatic")," trait for static identifier"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/508"},"#508"),"] Representing a identifier with ",(0,r.kt)("inlineCode",{parentName:"p"},"&'static str"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"IdenStatic")," trait looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait IdenStatic: Iden + Copy + 'static {\n    fn as_str(&self) -> &'static str;\n}\n")),(0,r.kt)("p",null,"You can derive it easily for your existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Iden"),". Just changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive(Iden)]")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive(IdenStatic)]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(IdenStatic)]\nenum User {\n    Table,\n    Id,\n    FirstName,\n    LastName,\n    #[iden = "_email"]\n    Email,\n}\n\nassert_eq!(User::Email.as_str(), "_email");\n')),(0,r.kt)("h2",{id:"new-pgexpr-and-sqliteexpr-traits-for-backend-specific-expressions"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"PgExpr")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"SqliteExpr")," traits for backend specific expressions"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/519"},"#519"),"] Postgres specific and SQLite specific expressions are being moved into its corresponding trait. You need to import the trait into scope before construct the expression with those backend specific methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Importing `PgExpr` trait before constructing Postgres expression\nuse sea_query::{extension::postgres::PgExpr, tests_cfg::*, *};\n\nlet query = Query::select()\n    .columns([Font::Name, Font::Variant, Font::Language])\n    .from(Font::Table)\n    .and_where(Expr::val("a").concatenate("b").concat("c").concat("d"))\n    .to_owned();\n\nassert_eq!(\n    query.to_string(PostgresQueryBuilder),\n    r#"SELECT "name", "variant", "language" FROM "font" WHERE \'a\' || \'b\' || \'c\' || \'d\'"#\n);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Importing `SqliteExpr` trait before constructing SQLite expression\n use sea_query::{extension::sqlite::SqliteExpr, tests_cfg::*, *};\n\n let query = Query::select()\n    .column(Font::Name)\n    .from(Font::Table)\n    .and_where(Expr::col(Font::Name).matches("a"))\n    .to_owned();\n\n assert_eq!(\n    query.to_string(SqliteQueryBuilder),\n    r#"SELECT "name" FROM "font" WHERE "name" MATCH \'a\'"#\n );\n')),(0,r.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wrap unions into parenthesis ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/498"},"https://github.com/SeaQL/sea-query/pull/498")),(0,r.kt)("li",{parentName:"ul"},"Syntax error on empty condition ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/505"},"https://github.com/SeaQL/sea-query/pull/505"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// given\nlet (statement, values) = sea_query::Query::select()\n    .column(Glyph::Id)\n    .from(Glyph::Table)\n    .cond_where(Cond::any()\n        .add(Cond::all()) // empty all() => TRUE\n        .add(Cond::any()) // empty any() => FALSE\n    )\n    .build(sea_query::MysqlQueryBuilder);\n\n// old behavior\nassert_eq!(statement, r#"SELECT `id` FROM `glyph`"#);\n\n// new behavior\nassert_eq!(\n    statement,\n    r#"SELECT `id` FROM `glyph` WHERE (TRUE) OR (FALSE)"#\n);\n\n// a complex example\nlet (statement, values) = Query::select()\n    .column(Glyph::Id)\n    .from(Glyph::Table)\n    .cond_where(\n        Cond::all()\n            .add(Cond::all().not())\n            .add(Cond::any().not())\n            .not(),\n    )\n    .build(MysqlQueryBuilder);\n\nassert_eq!(\n    statement,\n    r#"SELECT `id` FROM `glyph` WHERE NOT ((NOT TRUE) AND (NOT FALSE))"#\n);\n')),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/535"},"#535"),"] MSRV is up to 1.62")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Make sure you're running SeaQuery with Rust 1.62+ \ud83e\udd80\n$ rustup update\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/492"},"#492"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType::Array")," definition changed from ",(0,r.kt)("inlineCode",{parentName:"li"},"Array(SeaRc<Box<ColumnType>>)")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Array(SeaRc<ColumnType>)")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/475"},"#475"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"Func::*")," now returns ",(0,r.kt)("inlineCode",{parentName:"li"},"FunctionCall")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/475"},"#475"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"Func::coalesce")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoIterator<Item = SimpleExpr>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoIterator<Item = Into<SimpleExpr>")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/475"},"#475"),"] Removed ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::arg")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::args")," - these functions are no longer needed"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/507"},"#507"),"] Moved all Postgres specific operators to ",(0,r.kt)("inlineCode",{parentName:"li"},"PgBinOper")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/476"},"#476"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr")," methods used to accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<Value>")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<SimpleExpr>")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/476"},"#476"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::is_in"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::is_not_in")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<SimpleExpr>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<Value>")," and convert it to ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr::Tuple")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr::Values")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/475"},"#475"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::expr")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<SimpleExpr>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/519"},"#519"),"] Moved Postgres specific ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr")," methods to new trait ",(0,r.kt)("inlineCode",{parentName:"li"},"PgExpr")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/528"},"#528"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::equals")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"C: IntoColumnRef")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"T: IntoIden, C: IntoIden"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'use sea_query::{*, tests_cfg::*};\n\nlet query = Query::select()\n    .columns([Char::Character, Char::SizeW, Char::SizeH])\n    .from(Char::Table)\n    .and_where(\n        Expr::col((Char::Table, Char::FontId))\n-           .equals(Font::Table, Font::Id)\n+           .equals((Font::Table, Font::Id))\n    )\n    .to_owned();\n\nassert_eq!(\n    query.to_string(MysqlQueryBuilder),\n    r#"SELECT `character`, `size_w`, `size_h` FROM `character` WHERE `character`.`font_id` = `font`.`id`"#\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/525"},"#525"),"] Removed integer and date time column types' display length / precision option")),(0,r.kt)("h2",{id:"api-additions"},"API Additions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/475"},"#475"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"SelectStatement::from_function"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{tests_cfg::*, *};\n\nlet query = Query::select()\n    .column(ColumnRef::Asterisk)\n    .from_function(Func::random(), Alias::new("func"))\n    .to_owned();\n\nassert_eq!(\n    query.to_string(MysqlQueryBuilder),\n    r#"SELECT * FROM RAND() AS `func`"#\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/486"},"#486"),"] Added binary operators from the Postgres ",(0,r.kt)("inlineCode",{parentName:"li"},"pg_trgm")," extension")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::extension::postgres::PgBinOper;\n\nassert_eq!(\n    Query::select()\n        .expr(Expr::col(Font::Name).binary(PgBinOper::WordSimilarity, Expr::value("serif")))\n        .from(Font::Table)\n        .to_string(PostgresQueryBuilder),\n    r#"SELECT "name" <% \'serif\' FROM "font""#\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/473"},"#473"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"ILIKE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NOT ILIKE")," operators"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/510"},"#510"),"] Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"mul")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," methods for ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/513"},"#513"),"] Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"MATCH"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"->")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"->>")," operators for SQLite")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::extension::sqlite::SqliteBinOper;\n\nassert_eq!(\n    Query::select()\n        .column(Char::Character)\n        .from(Char::Table)\n        .and_where(Expr::col(Char::Character).binary(SqliteBinOper::Match, Expr::val("test")))\n        .build(SqliteQueryBuilder),\n    (\n        r#"SELECT "character" FROM "character" WHERE "character" MATCH ?"#.to_owned(),\n        Values(vec!["test".into()])\n    )\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/497"},"#497"),"] Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"FULL OUTER JOIN")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/530"},"#530"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"PgFunc::get_random_uuid")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/528"},"#528"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr::eq"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr::ne"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::not_equals")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/529"},"#529"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"PgFunc::starts_with")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/535"},"#535"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::custom_keyword")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr::not"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::*;\n\nlet query = Query::select()\n    .expr(Expr::custom_keyword(Alias::new("test")))\n    .to_owned();\n\nassert_eq!(query.to_string(MysqlQueryBuilder), r#"SELECT test"#);\nassert_eq!(query.to_string(PostgresQueryBuilder), r#"SELECT test"#);\nassert_eq!(query.to_string(SqliteQueryBuilder), r#"SELECT test"#);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/539"},"#539"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr::like"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleExpr::not_like")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::cast_as")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/532"},"#532"),"] Added support for ",(0,r.kt)("inlineCode",{parentName:"li"},"NULLS NOT DISTINCT")," clause for Postgres"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/531"},"#531"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::cust_with_expr")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::cust_with_exprs"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{tests_cfg::*, *};\n\nlet query = Query::select()\n    .expr(Expr::cust_with_expr("data @? ($1::JSONPATH)", "hello"))\n    .to_owned();\n\nassert_eq!(\n    query.to_string(PostgresQueryBuilder),\n    r#"SELECT data @? (\'hello\'::JSONPATH)"#\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/538"},"#538"),"] Added support for converting ",(0,r.kt)("inlineCode",{parentName:"li"},"&String")," to Value")),(0,r.kt)("h2",{id:"miscellaneous-enhancements"},"Miscellaneous Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/475"},"#475"),"] New struct ",(0,r.kt)("inlineCode",{parentName:"li"},"FunctionCall")," which hold function and arguments"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/503"},"#503"),"] Support ",(0,r.kt)("inlineCode",{parentName:"li"},"BigDecimal"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"IpNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"MacAddress")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"sea-query-postgres")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/511"},"#511"),"] Made ",(0,r.kt)("inlineCode",{parentName:"li"},"value::with_array")," module public and therefore making ",(0,r.kt)("inlineCode",{parentName:"li"},"NotU8")," trait public"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/524"},"#524"),"] Drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"Sized")," requirement on implementers of ",(0,r.kt)("inlineCode",{parentName:"li"},"SchemaBuilders"))),(0,r.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,r.kt)("p",null,"SeaQuery plays well with the other crates in the rust ecosystem. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/postgres"},"Postgres Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/rusqlite"},"Rusqlite Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_any"},"SQLx Any Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_postgres"},"SQLx Postgres Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_mysql"},"SQLx MySql Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_sqlite"},"SQLx Sqlite Example"))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."))}m.isMDXComponent=!0}}]);