"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[68041],{48859:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(76687);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?t.createElement(y,i(i({ref:r},l),{},{components:n})):t.createElement(y,i({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38761:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(31308),a=(n(76687),n(48859));const o={},i="Error Handling",c={unversionedId:"advanced-query/error-handling",id:"version-0.10.x/advanced-query/error-handling",title:"Error Handling",description:"All runtime errors in SeaORM is represented by DbErr.",source:"@site/versioned_docs/version-0.10.x/08-advanced-query/09-error-handling.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/error-handling",permalink:"/SeaORM/docs/0.10.x/advanced-query/error-handling",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/08-advanced-query/09-error-handling.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1716194275,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Active Model",permalink:"/SeaORM/docs/0.10.x/advanced-query/custom-active-model"},next:{title:"Create Table",permalink:"/SeaORM/docs/0.10.x/generate-sea-query-statement/create-table"}},s={},d=[{value:"Parsing database specific errors",id:"parsing-database-specific-errors",level:2}],l={toc:d};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"All runtime errors in SeaORM is represented by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/error/enum.DbErr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DbErr")),"."),(0,a.kt)("h2",{id:"parsing-database-specific-errors"},"Parsing database specific errors"),(0,a.kt)("p",null,"You can retrieve the database specific error code from any of ",(0,a.kt)("inlineCode",{parentName:"p"},"DbErr::Conn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DbErr::Exec")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DbErr::Query"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let mud_cake = cake::ActiveModel {\n    id: Set(1),\n    name: Set("Moldy Cake".to_owned()),\n    price: Set(dec!(10.25)),\n    gluten_free: Set(false),\n    serial: Set(Uuid::new_v4()),\n    bakery_id: Set(None),\n};\n\n// Insert a new cake with its primary key (`id` column) set to 1.\nlet cake = mud_cake.save(db).await.expect("could not insert cake");\n\n// Insert the same row again and it failed\n// because primary key of each row should be unique.\nlet error: DbErr = cake\n    .into_active_model()\n    .insert(db)\n    .await\n    .expect_err("inserting should fail due to duplicate primary key");\n\nmatch error {\n    DbErr::Exec(RuntimeErr::SqlxError(error)) => match error {\n        Error::Database(e) => {\n            // We check the error code thrown by the database (MySQL in this case),\n            // `23000` means `ER_DUP_KEY`: we have a duplicate key in the table.\n            assert_eq!(e.code().unwrap(), "23000");\n        }\n        _ => panic!("Unexpected sqlx-error kind"),\n    },\n    _ => panic!("Unexpected Error kind"),\n}\n')))}p.isMDXComponent=!0}}]);