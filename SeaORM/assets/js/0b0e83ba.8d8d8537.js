"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[27564],{48859:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(31308),a=(n(76687),n(48859));const o={},i="Debug Log",l={unversionedId:"install-and-config/debug-log",id:"version-0.12.x/install-and-config/debug-log",title:"Debug Log",description:"SeaORM logs debug messages via the tracing crate.",source:"@site/versioned_docs/version-0.12.x/02-install-and-config/03-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/SeaORM/docs/install-and-config/debug-log",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/02-install-and-config/03-debug-log.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1709192672,formattedLastUpdatedAt:"Feb 29, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Connection",permalink:"/SeaORM/docs/install-and-config/connection"},next:{title:"Setting Up Migration",permalink:"/SeaORM/docs/migration/setting-up-migration"}},s={},c=[{value:"SQLx Logging",id:"sqlx-logging",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-log"},"Debug Log"),(0,a.kt)("p",null,"SeaORM logs debug messages via the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},(0,a.kt)("inlineCode",{parentName:"a"},"tracing"))," crate."),(0,a.kt)("p",null,"You can enable SeaORM's logging with the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug-print")," feature flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies.sea-orm]\nversion = "0.12"\nfeatures = ["debug-print"]\n')),(0,a.kt)("p",null,"You need to setup ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,a.kt)("inlineCode",{parentName:"a"},"tracing-subscriber"))," to capture and view the debug log. See the snippet below and a complete example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,a.kt)("p",null,"SeaORM's debug print injects parameters into the SQL string, which makes it easier to read. Instead of seeing ",(0,a.kt)("inlineCode",{parentName:"p"},'SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = $1'),", you will see ",(0,a.kt)("inlineCode",{parentName:"p"},'SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = 100'),"."),(0,a.kt)("h2",{id:"sqlx-logging"},"SQLx Logging"),(0,a.kt)("p",null,"SQLx also logs by default. If you turned on SeaORM's ",(0,a.kt)("inlineCode",{parentName:"p"},"debug-print"),", you can disable SQLx's log by passing ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," to ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt\n    .sqlx_logging(false) // Disable SQLx log\n    .sqlx_logging_level(log::LevelFilter::Info); // Or set SQLx log level\n\nlet db = Database::connect(opt).await?;\n')))}g.isMDXComponent=!0}}]);