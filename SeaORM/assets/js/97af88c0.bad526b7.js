"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6316],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i="Seeding Data",s={unversionedId:"migration/seeding-data",id:"version-0.10.x/migration/seeding-data",title:"Seeding Data",description:"You can retrieve a DbConn from SchemaManager and perform data operations as needed, for example, to seed data.",source:"@site/versioned_docs/version-0.10.x/03-migration/04-seeding-data.md",sourceDirName:"03-migration",slug:"/migration/seeding-data",permalink:"/SeaORM/docs/0.10.x/migration/seeding-data",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/03-migration/04-seeding-data.md",tags:[],version:"0.10.x",lastUpdatedBy:"Miles Spoor",lastUpdatedAt:1681958769,formattedLastUpdatedAt:"Apr 20, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Migration",permalink:"/SeaORM/docs/0.10.x/migration/running-migration"},next:{title:"Using sea-orm-cli",permalink:"/SeaORM/docs/0.10.x/generate-entity/sea-orm-cli"}},c={},l=[],d={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seeding-data"},"Seeding Data"),(0,a.kt)("p",null,"You can retrieve a ",(0,a.kt)("inlineCode",{parentName:"p"},"DbConn")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaManager")," and perform data operations as needed, for example, to seed data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::sea_orm::{entity::*, query::*};\n\n// ...\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let db = manager.get_connection();\n\n        cake::ActiveModel {\n            name: Set("Cheesecake".to_owned()),\n            ..Default::default()\n        }\n        .insert(db)\n        .await?;\n\n        Ok(())\n    }\n}\n')),(0,a.kt)("p",null,"You could also write SeaQuery statement to seed the table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::sea_orm::{entity::*, query::*};\n\n// ...\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let insert = Query::insert()\n            .into_table(Cake::Table)\n            .columns([Cake::Name])\n            .values_panic(["Tiramisu".into()])\n            .to_owned();\n\n        manager.exec_stmt(insert).await?;\n\n        Ok(())\n    }\n}\n\n/// Learn more at https://docs.rs/sea-query#iden\n#[derive(Iden)]\npub enum Cake {\n    Table,\n    Id,\n    Name,\n}\n')))}p.isMDXComponent=!0}}]);