"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1396],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22977:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const o={},i="Error Handling",c={unversionedId:"advanced-query/error-handling",id:"version-0.11.x/advanced-query/error-handling",title:"Error Handling",description:"All runtime errors in SeaORM is represented by DbErr.",source:"@site/versioned_docs/version-0.11.x/08-advanced-query/09-error-handling.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/error-handling",permalink:"/SeaORM/docs/advanced-query/error-handling",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/08-advanced-query/09-error-handling.md",tags:[],version:"0.11.x",lastUpdatedBy:"Miles Spoor",lastUpdatedAt:1681958769,formattedLastUpdatedAt:"Apr 20, 2023",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Active Model",permalink:"/SeaORM/docs/advanced-query/custom-active-model"},next:{title:"Create Table",permalink:"/SeaORM/docs/schema-statement/create-table"}},s={},d=[{value:"Parsing database specific errors",id:"parsing-database-specific-errors",level:2}],l={toc:d};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"All runtime errors in SeaORM is represented by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/error/enum.DbErr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DbErr")),"."),(0,a.kt)("h2",{id:"parsing-database-specific-errors"},"Parsing database specific errors"),(0,a.kt)("p",null,"You can retrieve the database specific error code from any of ",(0,a.kt)("inlineCode",{parentName:"p"},"DbErr::Conn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DbErr::Exec")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DbErr::Query"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let mud_cake = cake::ActiveModel {\n    id: Set(1),\n    name: Set("Moldy Cake".to_owned()),\n    price: Set(dec!(10.25)),\n    gluten_free: Set(false),\n    serial: Set(Uuid::new_v4()),\n    bakery_id: Set(None),\n};\n\n// Insert a new cake with its primary key (`id` column) set to 1.\nlet cake = mud_cake.save(db).await.expect("could not insert cake");\n\n// Insert the same row again and it failed\n// because primary key of each row should be unique.\nlet error: DbErr = cake\n    .into_active_model()\n    .insert(db)\n    .await\n    .expect_err("inserting should fail due to duplicate primary key");\n\nmatch error {\n    DbErr::Exec(RuntimeErr::SqlxError(error)) => match error {\n        Error::Database(e) => {\n            // We check the error code thrown by the database (MySQL in this case),\n            // `23000` means `ER_DUP_KEY`: we have a duplicate key in the table.\n            assert_eq!(e.code().unwrap(), "23000");\n        }\n        _ => panic!("Unexpected sqlx-error kind"),\n    },\n    _ => panic!("Unexpected Error kind"),\n}\n')))}p.isMDXComponent=!0}}]);