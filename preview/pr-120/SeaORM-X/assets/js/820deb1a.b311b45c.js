"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[591],{5641:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(6687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,d=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(1308),a=(t(6687),t(5641));const o={},i="Running Migration",l={unversionedId:"migration/running-migration",id:"migration/running-migration",title:"Running Migration",description:"Running Migration on Any MSSQL Schema",source:"@site/docs/03-migration/03-running-migration.md",sourceDirName:"03-migration",slug:"/migration/running-migration",permalink:"/preview/pr-120/SeaORM-X/docs/migration/running-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/03-migration/03-running-migration.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712738576,formattedLastUpdatedAt:"Apr 10, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Migration",permalink:"/preview/pr-120/SeaORM-X/docs/migration/setting-up-migration"},next:{title:"Using sea-orm-cli",permalink:"/preview/pr-120/SeaORM-X/docs/generate-entity/sea-orm-cli"}},c={},s=[{value:"Running Migration on Any MSSQL Schema",id:"running-migration-on-any-mssql-schema",level:2}],m={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-migration"},"Running Migration"),(0,a.kt)("h2",{id:"running-migration-on-any-mssql-schema"},"Running Migration on Any MSSQL Schema"),(0,a.kt)("p",null,"By default migration will be run on the ",(0,a.kt)("inlineCode",{parentName:"p"},"dbo")," schema, you can now override it when running migration on the CLI or programmatically."),(0,a.kt)("p",null,"For CLI, you can specify the target schema with ",(0,a.kt)("inlineCode",{parentName:"p"},"-s")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"--database_schema")," option:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"via sea-orm-cli: ",(0,a.kt)("inlineCode",{parentName:"li"},"sea-orm-cli migrate -u mssql://root:root@localhost/database -s my_schema")),(0,a.kt)("li",{parentName:"ul"},"via SeaORM migrator: ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo run -- -u mssql://root:root@localhost/database -s my_schema"))),(0,a.kt)("p",null,"You can also run the migration on the target schema programmatically:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// With the default `dbo` schema\nlet connect_options = ConnectOptions::new("mssql://root:root@localhost/database");\n// Or, override the default schema\nlet connect_options = ConnectOptions::new("mssql://root:root@localhost/database?currentSchema=my_schema");\n\nlet db = Database::connect(connect_options).await?\n\nmigration::Migrator::up(&db, None).await?;\n')))}p.isMDXComponent=!0}}]);