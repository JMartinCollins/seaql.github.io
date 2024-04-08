"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[85769],{48859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(31308),a=(n(76687),n(48859));const i={},o="Update",u={unversionedId:"basic-crud/update",id:"version-0.12.x/basic-crud/update",title:"Update",description:"Update One",source:"@site/versioned_docs/version-0.12.x/05-basic-crud/04-update.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/update",permalink:"/SeaORM/docs/basic-crud/update",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/05-basic-crud/04-update.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712559617,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Insert",permalink:"/SeaORM/docs/basic-crud/insert"},next:{title:"Save",permalink:"/SeaORM/docs/basic-crud/save"}},l={},p=[{value:"Update One",id:"update-one",level:2},{value:"Update Many",id:"update-many",level:2},{value:"Update with returning (Postgres only)",id:"update-with-returning-postgres-only",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update"},"Update"),(0,a.kt)("h2",{id:"update-one"},"Update One"),(0,a.kt)("p",null,"You will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," from find result. If you want to save the model back into the database, you need to convert it into an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," ",(0,a.kt)("em",{parentName:"p"},"first"),". The generated query will only include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," attributes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;\n\n// Into ActiveModel\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\n// Update name attribute\npear.name = Set("Sweet pear".to_owned());\n\n// SQL: `UPDATE "fruit" SET "name" = \'Sweet pear\' WHERE "id" = 28`\nlet pear: fruit::Model = pear.update(db).await?;\n')),(0,a.kt)("p",null,"To update all attributes, you can convert ",(0,a.kt)("inlineCode",{parentName:"p"},"Unchanged")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Into ActiveModel\nlet mut pear: fruit::ActiveModel = pear.into();\n\n// Update name attribute\npear.name = Set("Sweet pear".to_owned());\n\n// Set a specific attribute as "dirty" (force update)\npear.reset(fruit::Column::CakeId);\n// Or, set all attributes as "dirty" (force update)\npear.reset_all();\n\n// SQL: `UPDATE "fruit" SET "name" = \'Sweet pear\', "cake_id" = 10 WHERE "id" = 28`\nlet pear: fruit::Model = pear.update(db).await?;\n')),(0,a.kt)("h2",{id:"update-many"},"Update Many"),(0,a.kt)("p",null,"You can also update multiple rows in the database without finding each ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// Bulk set attributes using ActiveModel\nlet update_result: UpdateResult = Fruit::update_many()\n    .set(pear)\n    .filter(fruit::Column::Id.eq(1))\n    .exec(db)\n    .await?;\n\n// UPDATE `fruit` SET `cake_id` = 1 WHERE `fruit`.`name` LIKE '%Apple%'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(1))\n    .filter(fruit::Column::Name.contains(\"Apple\"))\n    .exec(db)\n    .await?;\n")),(0,a.kt)("h3",{id:"update-with-returning-postgres-only"},"Update with returning (Postgres only)"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"exec_with_returning")," to return models that were modified:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let fruits: Vec<fruit::Model> = Fruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(1))\n    .filter(fruit::Column::Name.contains("Apple"))\n    .exec_with_returning(db)\n    .await?;\n')))}c.isMDXComponent=!0}}]);