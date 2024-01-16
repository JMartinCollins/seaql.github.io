"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[195],{9205:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(7294),r=a(7676),s=a(9960),o=a(2263);const l="heroBanner_qdFl",c="buttons_AeoN",i="homepageBanner_mBTI",m="homepageLogo_ewR0";var u=a(7462),p=a(6010);const d="features_xdhU";var g=a(8307);const f=[{title:"Async",icon:n.createElement(g.V5G,{size:26}),description:n.createElement(n.Fragment,null,"SeaStreamer provides an async API, and it supports both 'tokio' and 'async-std'. In tandem with other async Rust libraries, you can build highly concurrent stream processors.")},{title:"Generic",icon:n.createElement(g.Ktg,{size:26}),description:n.createElement(n.Fragment,null,"We provide integration for Kafka / Redpanda behind a generic trait interface, so your program can be backend-agnostic. Support for Redis Stream is being planned.")},{title:"Testable",icon:n.createElement(g.ZSR,{size:26}),description:n.createElement(n.Fragment,null,"SeaStreamer also provides a set of tools to work with streams via unix pipes, so it is testable without setting up a cluster, and extremely handy when working locally.")},{title:"Micro-service Oriented",icon:n.createElement(g.x_i,{size:26}),description:n.createElement(n.Fragment,null,"Let's build real-time (multi-threaded, no GC), self-contained (aka easy to deploy), low-resource-usage, long-running stream processors in Rust!")}];function h(e){let{icon:t,title:a,description:r}=e;return n.createElement("div",{className:(0,p.Z)("col col--6")},n.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px"}},n.createElement("div",{style:{display:"flex"}},n.createElement("div",{style:{paddingRight:"22px"}},t),n.createElement("h3",{style:{fontSize:"20px",color:"var(--ifm-color-primary)"}},a)),n.createElement("p",null,r)))}function E(){return n.createElement("section",{className:(0,p.Z)("home-section","home-section-alt",d)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--11 col--offset-1"},n.createElement("div",{className:"row"},f.map(((e,t)=>n.createElement(h,(0,u.Z)({key:t},e)))))))))}var k=a(4866),b=a(5162);const S="features_SiWs";var _=a(3746),w=a(2949),v=a(7410);(void 0!==a.g?a.g:window).Prism=v.Z,a(767);const y=[{title:"Consumer",full_example:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/consumer.rs",code:'#[tokio::main]\nasync fn main() -> Result<()> {\n    env_logger::init();\n\n    let Args { stream } = Args::from_args();\n\n    let streamer = SeaStreamer::connect(stream.streamer(), Default::default()).await?;\n\n    let mut options = SeaConsumerOptions::new(ConsumerMode::RealTime);\n    options.set_kafka_consumer_options(|options| {\n        options.set_auto_offset_reset(AutoOffsetReset::Earliest);\n    });\n    let consumer: SeaConsumer = streamer\n        .create_consumer(stream.stream_keys(), options)\n        .await?;\n\n    loop {\n        let mess: SeaMessage = consumer.next().await?;\n        println!("[{}] {}", mess.timestamp(), mess.message().as_str()?);\n    }\n}'},{title:"Producer",full_example:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/producer.rs",code:'#[tokio::main]\nasync fn main() -> Result<()> {\n    env_logger::init();\n\n    let Args { stream } = Args::from_args();\n\n    let streamer = SeaStreamer::connect(stream.streamer(), Default::default()).await?;\n\n    let producer: SeaProducer = streamer\n        .create_producer(stream.stream_key()?, Default::default())\n        .await?;\n\n    for tick in 0..100 {\n        let message = format!(r#""tick {tick}""#);\n        eprintln!("{message}");\n        producer.send(message)?;\n        tokio::time::sleep(Duration::from_secs(1)).await;\n    }\n\n    producer.flush(Duration::from_secs(10)).await?;\n\n    Ok(())\n}'},{title:"Processor",full_example:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/processor.rs",code:'#[tokio::main]\nasync fn main() -> Result<()> {\n    env_logger::init();\n\n    let Args { input, output } = Args::from_args();\n\n    let streamer = SeaStreamer::connect(input.streamer(), Default::default()).await?;\n    let options = SeaConsumerOptions::new(ConsumerMode::RealTime);\n    let consumer: SeaConsumer = streamer\n        .create_consumer(input.stream_keys(), options)\n        .await?;\n\n    let streamer = SeaStreamer::connect(output.streamer(), Default::default()).await?;\n    let producer: SeaProducer = streamer\n        .create_producer(output.stream_key()?, Default::default())\n        .await?;\n\n    loop {\n        let message: SeaMessage = consumer.next().await?;\n        let message = process(message).await?;\n        eprintln!("{message}");\n        producer.send(message)?; // send is non-blocking\n    }\n}'},{title:"Running with Kafka",code:"# Produce some input\ncargo run --bin producer -- --stream kafka://localhost:9092/hello1 &\n# Start the processor, producing some output\ncargo run --bin processor -- --input kafka://localhost:9092/hello1 --output kafka://localhost:9092/hello2 &\n# Replay the output\ncargo run --bin consumer -- --stream kafka://localhost:9092/hello2\n# Remember to stop the processes\nkill %1 %2"},{title:"Running with Stdio",code:"# Pipe the producer to the processor\ncargo run --bin producer -- --stream stdio:///hello1 | cargo run --bin processor -- --input stdio:///hello1 --output stdio:///hello2"}];function N(){const{siteConfig:{themeConfig:{prism:e={}}}}=(0,o.Z)(),[t,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>{a(!0)}),[]);const{colorMode:r}=(0,w.I)(),s=e.theme,l=e.darkTheme||s,c="dark"===r?l:s;return n.createElement("section",{className:(0,p.Z)("home-section",S)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,p.Z)("col col--12")},n.createElement("div",{className:"padding-horiz--md"},n.createElement("h2",{className:"text--center"},"A quick taste of SeaStreamer"),n.createElement(k.Z,{className:(0,p.Z)("aa"),defaultValue:y[0].title,values:y.map((e=>{let{title:t,code:a}=e;return{label:t,value:t}}))},y.map(((e,a)=>{let{title:r,code:s,full_example:o}=e;return n.createElement(b.Z,{key:a,value:r},o&&n.createElement("p",null,"Here is a basic stream ",r.toLowerCase(),", ",n.createElement("a",{href:o},"full example"),":"),n.createElement(_.ZP,(0,u.Z)({},_.lG,{code:s,key:t,theme:c,language:o?"rust":"shell"}),(e=>{let{className:t,tokens:a,getLineProps:r,getTokenProps:s}=e;return n.createElement("pre",{className:`${t}`,style:{backgroundColor:"#292d3e"}},a.map(((e,t)=>n.createElement("div",r({line:e,key:t}),e.map(((e,t)=>n.createElement("span",s({token:e,key:t}))))))))})))}))))))))}const x="features_nemC",R="mascot_Rqr3";function Z(){return n.createElement("section",{className:(0,p.Z)("home-section","home-section-alt",x)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,p.Z)("col col--12")},n.createElement("h2",{className:"text--center"},"Meet Terres, our official mascot"),n.createElement("p",{className:"text--center"},"A friend of ",n.createElement("a",{href:"https://www.rustacean.net/"},"Ferris"),", Terres the hermit crab is a member of the Rustacean family."),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("img",{className:R,src:"/SeaStreamer/img/Terres.png"}))))))}function C(){const{siteConfig:e}=(0,o.Z)();return n.createElement("header",{className:l},n.createElement("div",{className:"container"},n.createElement("img",{className:m,width:"90%",src:"/SeaStreamer/img/SeaStreamer logo.png"}),n.createElement("img",{className:i,width:"90%",src:"/SeaStreamer/img/SeaStreamer banner.png"}),n.createElement("br",null),n.createElement("br",null),n.createElement("h2",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:c},n.createElement(s.Z,{className:"button button--primary button--lg",to:"/docs/index"},"Getting Started"))))}function A(){const{siteConfig:e}=(0,o.Z)();return n.createElement(r.Z,{description:e.tagline},n.createElement(C,null),n.createElement("main",null,n.createElement(E,null),n.createElement(N,null),n.createElement(Z,null)))}}}]);