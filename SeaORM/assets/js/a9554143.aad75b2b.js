"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l="Using sea-orm-cli",o={unversionedId:"generate-entity/sea-orm-cli",id:"version-0.4.x/generate-entity/sea-orm-cli",title:"Using sea-orm-cli",description:"First, install sea-orm-cli with cargo.",source:"@site/versioned_docs/version-0.4.x/03-generate-entity/01-sea-orm-cli.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/sea-orm-cli",permalink:"/SeaORM/docs/0.4.x/generate-entity/sea-orm-cli",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/03-generate-entity/01-sea-orm-cli.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1681380284,formattedLastUpdatedAt:"Apr 13, 2023",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Debug Log",permalink:"/SeaORM/docs/0.4.x/install-and-config/debug-log"},next:{title:"Entity Structure",permalink:"/SeaORM/docs/0.4.x/generate-entity/entity-structure"}},s={},c=[{value:"Configure Environment",id:"configure-environment",level:2},{value:"Getting Help",id:"getting-help",level:2},{value:"Generating Entity Files",id:"generating-entity-files",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-sea-orm-cli"},"Using ",(0,r.kt)("inlineCode",{parentName:"h1"},"sea-orm-cli")),(0,r.kt)("p",null,"First, install ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo install sea-orm-cli\n")),(0,r.kt)("h2",{id:"configure-environment"},"Configure Environment"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, or create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in your project root. Specify your database connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"DATABASE_URL=protocol://username:password@localhost/database\n")),(0,r.kt)("h2",{id:"getting-help"},"Getting Help"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," flag on any CLI command or subcommand for help."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# List all available commands\n$ sea-orm-cli -h\n\n# List all subcommands available in `generate` command\n$ sea-orm-cli generate -h\n\n# Show how to use `generate entity` subcommand\n$ sea-orm-cli generate entity -h\n")),(0,r.kt)("h2",{id:"generating-entity-files"},"Generating Entity Files"),(0,r.kt)("p",null,"Discover all tables in a database and generate a corresponding SeaORM entity file for each table."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Generating Entity files from SQLite is not yet supported. You can write the entity files by hand, and then use the Entity to ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.4.x/write-test/sqlite#setup-database-schema"},"initialize a database"),".")),(0,r.kt)("p",null,"Command line options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--database-url"),": database URL (default: DATABASE_URL specified in ENV)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--database-schema"),": database schema (default: DATABASE_SCHEMA specified in ENV)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For MySQL, this argument is ignored"),(0,r.kt)("li",{parentName:"ul"},"For PostgreSQL, this argument is optional with default value 'public'"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--output-dir"),": entity file output directory (default: current directory)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose"),": print debug messages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--include-hidden-tables"),": generate entity files from hidden tables (table names starting with an underscore are ignored by default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--compact-format"),": Generate entity file of ",(0,r.kt)("a",{parentName:"li",href:"/SeaORM/docs/0.4.x/generate-entity/entity-structure"},"compact format")," (default: true)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--expanded-format"),": Generate entity file of ",(0,r.kt)("a",{parentName:"li",href:"/SeaORM/docs/0.4.x/generate-entity/expanded-entity-structure"},"expanded format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--with-serde"),": Automatically derive serde Serialize / Deserialize traits for the entity (none, serialize, deserialize, both) (default: none)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Generate entity files of database `bakery` to `src/entity`\n$ sea-orm-cli generate entity \\\n    -u sql://sea:sea@localhost/bakery \\\n    -o src/entity\n")))}u.isMDXComponent=!0}}]);