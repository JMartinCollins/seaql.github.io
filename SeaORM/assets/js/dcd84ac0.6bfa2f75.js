"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[63714],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),m=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=m(t),u=a,c=f["".concat(p,".").concat(u)]||f[u]||d[u]||l;return t?i.createElement(c,r(r({ref:n},s),{},{components:t})):i.createElement(c,r({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=t(87462),a=(t(67294),t(3905));const l={},r="Many to Many",o={unversionedId:"relation/many-to-many",id:"version-0.7.x/relation/many-to-many",title:"Many to Many",description:"A many-to-many relation is formed by three tables, where two tables are related via a junction table. As an example, a Cake has many Filling and Filling are shared by many Cake via an intermediate entity CakeFilling.",source:"@site/versioned_docs/version-0.7.x/07-relation/03-many-to-many.md",sourceDirName:"07-relation",slug:"/relation/many-to-many",permalink:"/SeaORM/docs/0.7.x/relation/many-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/07-relation/03-many-to-many.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690464550,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"One to Many",permalink:"/SeaORM/docs/0.7.x/relation/one-to-many"},next:{title:"Chained Relations",permalink:"/SeaORM/docs/0.7.x/relation/chained-relations"}},p={},m=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],s={toc:m};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"many-to-many"},"Many to Many"),(0,a.kt)("p",null,"A many-to-many relation is formed by three tables, where two tables are related via a junction table. As an example, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," has many ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," are shared by many ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," via an intermediate entity ",(0,a.kt)("inlineCode",{parentName:"p"},"CakeFilling"),"."),(0,a.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Related<filling::Entity>")," trait. First, join with intermediate table ",(0,a.kt)("inlineCode",{parentName:"p"},"via")," the inverse of ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," relation, then join ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," entity  with ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," relation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{4,10} title="entity/cake.rs"',"{4,10}":!0,title:'"entity/cake.rs"'},"impl Related<super::filling::Entity> for Entity {\n    // The final relation is Cake -> CakeFilling -> Filling\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        // The original relation is CakeFilling -> Cake,\n        // after `rev` it becomes Cake -> CakeFilling\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")),(0,a.kt)("p",null,"Similarly, on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," entity, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Related<cake::Entity>")," trait. First, join with intermediate table ",(0,a.kt)("inlineCode",{parentName:"p"},"via")," the inverse of ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," relation, then join ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity  with ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," relation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{3,7} title="entity/filling.rs"',"{3,7}":!0,title:'"entity/filling.rs"'},"impl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Cake.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Filling.def().rev())\n    }\n}\n")),(0,a.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"CakeFilling")," entity, its ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_id")," attribute is referencing the primary key of ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity, and its ",(0,a.kt)("inlineCode",{parentName:"p"},"filling_id")," attribute is referencing the primary key of ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," entity."),(0,a.kt)("p",null,"To define the inverse relation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add two new variants ",(0,a.kt)("inlineCode",{parentName:"li"},"Cake")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Filling")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Relation")," enum."),(0,a.kt)("li",{parentName:"ol"},"Define both relations with ",(0,a.kt)("inlineCode",{parentName:"li"},"Entity::belongs_to()"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/cake_filling.rs"',title:'"entity/cake_filling.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n    Filling,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n            Self::Filling => Entity::belongs_to(super::filling::Entity)\n                .from(Column::FillingId)\n                .to(super::filling::Column::Id)\n                .into(),\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n    #[sea_orm(\n        belongs_to = "super::filling::Entity",\n        from = "Column::FillingId",\n        to = "super::filling::Column::Id"\n    )]\n    Filling,\n}\n')))}d.isMDXComponent=!0}}]);