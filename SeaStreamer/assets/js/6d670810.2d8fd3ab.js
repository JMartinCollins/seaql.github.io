"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8197],{8859:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(1308),a=(r(6687),r(8859));const o={},i="Producer",s={unversionedId:"streamer/producer",id:"streamer/producer",title:"Producer",description:"The Producer trait defines the common interface of stream producers. Producer implements Clone, so you can use it like an mpsc::Sender.",source:"@site/docs/03-streamer/02-producer.md",sourceDirName:"03-streamer",slug:"/streamer/producer",permalink:"/SeaStreamer/docs/next/streamer/producer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/03-streamer/02-producer.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1716194275,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streamer",permalink:"/SeaStreamer/docs/next/streamer/streamer"},next:{title:"Consumer",permalink:"/SeaStreamer/docs/next/streamer/consumer"}},d={},l=[{value:"<code>ProducerOptions</code>",id:"produceroptions",level:2},{value:"<code>send</code>",id:"send",level:2},{value:"<code>Receipt</code>",id:"receipt",level:3},{value:"<code>send_to</code>",id:"send_to",level:2},{value:"<code>flush</code>",id:"flush",level:2},{value:"<code>end</code>",id:"end",level:2},{value:"<code>anchor</code>",id:"anchor",level:2},{value:"<code>anchored</code>",id:"anchored",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"producer"},"Producer"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/*/sea_streamer/trait.Producer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Producer"))," trait defines the common interface of stream producers. ",(0,a.kt)("inlineCode",{parentName:"p"},"Producer")," implements ",(0,a.kt)("inlineCode",{parentName:"p"},"Clone"),", so you can use it like an ",(0,a.kt)("inlineCode",{parentName:"p"},"mpsc::Sender"),"."),(0,a.kt)("p",null,"Implemented by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaProducer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"KafkaProducer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisProducer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"RedisProducer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioProducer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"StdioProducer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-file/*/sea_streamer_file/struct.FileProducer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"FileProducer")))),(0,a.kt)("h2",{id:"produceroptions"},(0,a.kt)("inlineCode",{parentName:"h2"},"ProducerOptions")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h4",{parentName:"admonition",id:"redis-semantics"},"Redis semantics"),(0,a.kt)("p",{parentName:"admonition"},"You can assign custom sharders to Producers. Sharding simply means splitting a stream into multiple keys, in the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"STREAM_KEY:SHARD_ID"),".")),(0,a.kt)("h2",{id:"send"},(0,a.kt)("inlineCode",{parentName:"h2"},"send")),(0,a.kt)("p",null,"Send a message to the already anchored stream. This function is non-blocking. You don\u2019t have to ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," the future if you are not interested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receipt"),"."),(0,a.kt)("p",null,"If the producer is not anchored, this will return ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamErr::NotAnchored")," error."),(0,a.kt)("h3",{id:"receipt"},(0,a.kt)("inlineCode",{parentName:"h3"},"Receipt")),(0,a.kt)("p",null,"If you await the future, you will get a receipt composed of (StreamKey, ShardId, SeqNo, Timestamp). This usually means that the message has been ",(0,a.kt)("em",{parentName:"p"},"received by")," the server, but may not guarantee that the message is already ",(0,a.kt)("em",{parentName:"p"},"persisted"),"."),(0,a.kt)("h2",{id:"send_to"},(0,a.kt)("inlineCode",{parentName:"h2"},"send_to")),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"send"),", but to the specified stream key."),(0,a.kt)("h2",{id:"flush"},(0,a.kt)("inlineCode",{parentName:"h2"},"flush")),(0,a.kt)("p",null,"Flush all pending messages."),(0,a.kt)("h2",{id:"end"},(0,a.kt)("inlineCode",{parentName:"h2"},"end")),(0,a.kt)("p",null,"End this producer, only after flushing all it's pending messages."),(0,a.kt)("h2",{id:"anchor"},(0,a.kt)("inlineCode",{parentName:"h2"},"anchor")),(0,a.kt)("p",null,"Lock this producer to a particular stream. This function can only be called once. Subsequent calls should return ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamErr::AlreadyAnchored")," error."),(0,a.kt)("h2",{id:"anchored"},(0,a.kt)("inlineCode",{parentName:"h2"},"anchored")),(0,a.kt)("p",null,"If the producer is already anchored, return a reference to the StreamKey. If the producer is not anchored, this will return ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamErr::NotAnchored")," error."))}p.isMDXComponent=!0}}]);