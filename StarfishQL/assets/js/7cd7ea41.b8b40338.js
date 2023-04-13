"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},l="Mutate Operations",i={unversionedId:"architecture-of-graph-query-engine/mutate-operations",id:"architecture-of-graph-query-engine/mutate-operations",title:"Mutate Operations",description:"StarfishQL supports the following mutate operations:",source:"@site/docs/02-architecture-of-graph-query-engine/04-mutate-operations.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/mutate-operations",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/mutate-operations",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/04-mutate-operations.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1681380284,formattedLastUpdatedAt:"Apr 13, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Storage",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/data-storage"},next:{title:"Calculating Node Connectivity",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/calculating-node-connectivity"}},s={},p=[{value:"Insert",id:"insert",level:2},{value:"Body format",id:"body-format",level:3},{value:"Usage example",id:"usage-example",level:3},{value:"Upsert",id:"upsert",level:3},{value:"Update",id:"update",level:2},{value:"Body format",id:"body-format-1",level:3},{value:"Usage example",id:"usage-example-1",level:3},{value:"Delete",id:"delete",level:2},{value:"Body format",id:"body-format-2",level:3},{value:"Usage examples",id:"usage-examples",level:3}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mutate-operations"},"Mutate Operations"),(0,r.kt)("p",null,"StarfishQL supports the following mutate operations:"),(0,r.kt)("h2",{id:"insert"},"Insert"),(0,r.kt)("h3",{id:"body-format"},"Body format"),(0,r.kt)("p",null,"Inserting a set of nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Body of a POST request to be sent to `/mutate`\n{\n    insert: {\n        node: {\n            of: string, // `name` of entity\n            nodes: [\n                {\n                    name: string,\n                    attributes: {\n                        attr_name: attr_value, // Unspecified attributes become `null`\n                        ...\n                    }\n                }\n            ]\n        }\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that if nodes with the same names already exist, an error will be thrown and the request will fail.")),(0,r.kt)("p",null,"Inserting a set of edges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Body of a POST request to be sent to `/mutate`\n{\n    insert: {\n        edge: {\n            of: string, // `name` of relation\n            edges: [\n                {\n                    from_node: string, // `name` of node\n                    to_node: string // `name` of node\n                }\n            ]\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"usage-example"},"Usage example"),(0,r.kt)("p",null,"First, insert the nodes ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"serde"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "insert": {\n        "node": {\n            "of": "crate",\n            "nodes": [\n                {\n                    "name": "sea-orm",\n                    "attributes": {\n                        "version": "0.6.0"\n                    }\n                },\n                {\n                    "name": "serde",\n                    "attributes": {\n                        "version": "1.0.136"\n                    }\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("p",null,'Then, an edge "',(0,r.kt)("em",{parentName:"p"},"sea-orm depends on serde"),'" can be inserted.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "insert": {\n        "edge": {\n            "of": "depends",\n            "edges": [\n                {\n                    "from_node": "sea-orm",\n                    "to_node": "serde"\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"upsert"},"Upsert"),(0,r.kt)("p",null,"You can perform an upsert operation (i.e. insert nonexistent nodes, update existent ones) by ",(0,r.kt)("strong",{parentName:"p"},"setting ",(0,r.kt)("inlineCode",{parentName:"strong"},"upsert=true")," as a query parameter"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Body of a POST request to be sent to `/mutate?upsert=true`\n{\n    insert: {\n        node: {\n            of: string, // `name` of entity\n            nodes: [\n                {\n                    name: string,\n                    attributes: {\n                        attr_name: attr_value, // Unspecified attributes become `null`\n                        ...\n                    }\n                }\n            ]\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("h3",{id:"body-format-1"},"Body format"),(0,r.kt)("p",null,"The key logic behind an update body is to select existing data with ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," and update them according to ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),"."),(0,r.kt)("p",null,"Updating the ",(0,r.kt)("strong",{parentName:"p"},"attributes")," of nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Body of a POST request to be sent to `/mutate`\n{\n    update: {\n        node: {\n            selector: {\n                of: string, // `name` of entity\n                name: string, // `name` of node, optional\n                attributes: { // Optional\n                    attr_name: attr_value,\n                    ...\n                }\n            },\n            content: {\n                attr_name: attr_value,\n                ...\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Note that if both ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," are absent in ",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),", all nodes in the specified entity will be selected and updated."),(0,r.kt)("p",null,"Updating edges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Body of a POST request to be sent to `/mutate`\n{\n    update: {\n        edge: {\n            selector: {\n                of: string, // `name` of relation\n                from_node: string, // `name` of node, optional\n                to_node: string, // `name` of node, optional\n            },\n            content: {\n                from_node: string, // `name` of node, optional\n                to_node: string, // `name` of node, optional\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Note that although a validation check is not implemented yet, the behaviour is only well-defined in the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"selector: { of, from_node }, content: { from_node } <- To update the ",(0,r.kt)("inlineCode",{parentName:"li"},"from_node")," of many edges"),(0,r.kt)("li",{parentName:"ul"},"selector: { of, to_node }, content: { to_node } <- To update the ",(0,r.kt)("inlineCode",{parentName:"li"},"to_node")," of many edges"),(0,r.kt)("li",{parentName:"ul"},"selector: { of, from_node, to_node }, content: { * } <- To update exactly one edge")),(0,r.kt)("h3",{id:"usage-example-1"},"Usage example"),(0,r.kt)("p",null,"Select all crates with ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," equals ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0")," and update their ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"3.14"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "update": {\n        "node": {\n            "selector": {\n                "of": "crate",\n                "attributes": {\n                    "version": "2.0"\n                }\n            },\n            "content": {\n                "version": "3.14"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Select all ",(0,r.kt)("inlineCode",{parentName:"p"},"depends")," edges to ",(0,r.kt)("inlineCode",{parentName:"p"},"serde")," and update them to ",(0,r.kt)("inlineCode",{parentName:"p"},"<from> -> rand"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "update": {\n        "edge": {\n            "selector": {\n                "of": "depends",\n                "to_node": "serde"\n            },\n            "content": {\n                "to_node": "rand"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"delete"},"Delete"),(0,r.kt)("h3",{id:"body-format-2"},"Body format"),(0,r.kt)("p",null,"The key logic behind a delete body is similar to update, except that it only needs to select data to delete."),(0,r.kt)("p",null,"Deleting nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Body of a POST request to be sent to `/mutate`\n{\n    delete: {\n        node: {\n            of: string, // `name` of entity\n            name: string, // `name` of node, optional\n            attributes: { // Optional\n                attr_name: attr_value,\n                ...\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Note that if both ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," are absent, all nodes in the specified entity will be selected and deleted."),(0,r.kt)("p",null,"Deleting edges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Body of a POST request to be sent to `/mutate`\n{\n    delete: {\n        edge: {\n            of: string, // `name` of relation\n            from_node: string, // `name` of node, optional\n            to_node: string, // `name` of node, optional\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"usage-examples"},"Usage examples"),(0,r.kt)("p",null,"Delete the crate ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "delete": {\n        "node": {\n            "of": "crate",\n            "name": "sea-orm"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Delete all ",(0,r.kt)("inlineCode",{parentName:"p"},"depends")," edges that point to ",(0,r.kt)("inlineCode",{parentName:"p"},"serde")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "delete": {\n        "edge": {\n            "of": "depends",\n            "to_node": "serde"\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);