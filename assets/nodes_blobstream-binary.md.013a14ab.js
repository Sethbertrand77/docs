import{c as s}from"./chunks/constants.d0f43632.js";import{_ as d,o as n,c as i,t as o,k as e,a,l as r,H as _,Q as t}from"./chunks/framework.51d6c45b.js";const b={name:"orchRelayerVersion",data(){return{orchrelayVersion:s.orchrelayVersion}}},u=["href"];function m(c,p,h,H,l,J){return n(),i("a",{href:`https://github.com/celestiaorg/orchestrator-relayer/releases/tag/${l.orchrelayVersion}`,target:"_blank",rel:"noopener noreferrer"},o(l.orchrelayVersion),9,u)}const y=d(b,[["render",m]]),g=t('<h1 id="blobstream-for-validators" tabindex="-1">Blobstream for validators <a class="header-anchor" href="#blobstream-for-validators" aria-label="Permalink to &quot;Blobstream for validators&quot;">​</a></h1><p><a href="https://blog.celestia.org/introducing-blobstream/" target="_blank" rel="noreferrer">Blobstream</a> allows Ethereum developers to build high-throughput L2s using Celestia, the first data availability layer with data availability sampling.</p><p>This page and following tutorials will go over Blobstream and how validators on Celestia can run it.</p><p>If you&#39;re looking to learn more, you can view <a href="https://github.com/celestiaorg/orchestrator-relayer" target="_blank" rel="noreferrer">the <code>orchestrator-relayer</code> repository</a> or <a href="./../developers/blobstream#overview">read more about how Blobstream works</a>.</p><h2 id="install-the-blobstream-binary" tabindex="-1">Install the Blobstream binary <a class="header-anchor" href="#install-the-blobstream-binary" aria-label="Permalink to &quot;Install the Blobstream binary&quot;">​</a></h2><p>The <a href="./blobstream-orchestrator">orchestrator</a> is the software that signs the Blobstream attestations, and the <a href="./blobstream-relayer">relayer</a> is the software that relays them to the target EVM chain.</p><p>The following sections in this category presume you have the following setup:</p><ul><li>A celestia-app <a href="./consensus-node#optional-setting-up-a-validator">validator node</a> running</li><li>The following hardware minimum requirements for running the orchestrator: <ul><li>Memory: <strong>2 GB RAM</strong></li><li>CPU: <strong>1 core</strong></li><li>Disk: <strong>10 GB SSD Storage</strong></li></ul></li></ul><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h3>',9),f=e("a",{href:"https://go.dev/doc/install",target:"_blank",rel:"noreferrer"},"Install Go",-1),k=e("p",null,[a("Clone the "),e("code",null,"https://github.com/celestiaorg/orchestrator-relayer"),a(" repository:")],-1),E={class:"language-bash vp-adaptive-theme"},T=e("button",{title:"Copy Code",class:"copy"},null,-1),v=e("span",{class:"lang"},"bash",-1),B={class:"shiki github-dark vp-code-dark"},C=t('<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/orchestrator-relayer.git</span></span>',1),F=e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"cd"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"orchestrator-relayer")],-1),w={class:"line"},P=e("span",{style:{color:"#B392F0"}},"git",-1),V=e("span",{style:{color:"#E1E4E8"}}," ",-1),I=e("span",{style:{color:"#9ECBFF"}},"checkout",-1),S=e("span",{style:{color:"#E1E4E8"}}," ",-1),A={style:{color:"#9ECBFF"}},x={class:"shiki github-light vp-code-light"},q=t('<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/orchestrator-relayer.git</span></span>',1),D=e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"cd"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"orchestrator-relayer")],-1),N={class:"line"},R=e("span",{style:{color:"#6F42C1"}},"git",-1),U=e("span",{style:{color:"#24292E"}}," ",-1),O=e("span",{style:{color:"#032F62"}},"checkout",-1),$=e("span",{style:{color:"#24292E"}}," ",-1),L={style:{color:"#032F62"}},M=t('<li><p>Install the Blobstream CLI</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></li>',1),G=t(`<h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Print help</span></span>
<span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Print help</span></span>
<span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div><h3 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h3><ol><li>If you are a Celestia validator, all you need to do is run the orchestrator. Check out <a href="./blobstream-orchestrator">the Blobstream orchestrator page</a> for more details.</li><li><a href="./blobstream-keys">Learn about key management</a></li><li>Optional: If you want to post commitments on an EVM chain, you will need to deploy a new Blobstream contract and run a relayer, or run a relayer for an already deployed Blobstream contract. Check out <a href="./blobstream-relayer">the Blobstream relayer page</a> for relayer docs and <a href="./blobstream-deploy">the Blobstream deployment page</a> for how to deploy a new Blobstream contract.</li><li>Optional: <a href="./blobstream-bootstrapper">Learn how to run a Blobstream bootstrapper node</a></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The Blobstream P2P network is a separate network than the consensus or the data availability one. Thus, you will need its specific bootstrappers to be able to connect to it.</p></div><h3 id="useful-links" tabindex="-1">Useful links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful links&quot;">​</a></h3><p>The smart contract implementation is in <a href="https://github.com/celestiaorg/blobstream-contracts/" target="_blank" rel="noreferrer">blobstream-contracts</a>.</p><p>The state machine implementation is in <a href="https://github.com/celestiaorg/celestia-app/tree/main/x/blobstream" target="_blank" rel="noreferrer">x/blobstream</a>.</p><p>Blobstream ADRs are in <a href="https://github.com/celestiaorg/celestia-app/tree/main/docs/architecture" target="_blank" rel="noreferrer">the docs</a>.</p><p>Blobstream design explained in <a href="https://blog.celestia.org/celestiums/" target="_blank" rel="noreferrer">this blog post on layer 2s</a>.</p>`,10),K=JSON.parse('{"title":"Blobstream for validators","description":"This guide shows you how to install the Blobstream binary.","frontmatter":{"description":"This guide shows you how to install the Blobstream binary.","head":[["meta",{"name":"og:title","content":"Blobstream for validators | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-binary.md","filePath":"nodes/blobstream-binary.md","lastUpdated":1700697657000}'),j={name:"nodes/blobstream-binary.md"},W=Object.assign(j,{setup(c){return(p,h)=>(n(),i("div",null,[g,e("ol",null,[e("li",null,[e("p",null,[f,a(" "+o(r(s).golangBlobstream),1)])]),e("li",null,[k,e("div",E,[T,v,e("pre",B,[e("code",null,[C,a(`
`),F,a(`
`),e("span",w,[P,V,I,S,e("span",A,o(r(s).orchrelayVersion),1)])])]),e("pre",x,[e("code",null,[q,a(`
`),D,a(`
`),e("span",N,[R,U,O,$,e("span",L,o(r(s).orchrelayVersion),1)])])])]),e("p",null,[a("These commands check you out to: "),_(y),a(" of @celestiaorg/orchestrator-relayer")])]),M]),G]))}});export{K as __pageData,W as default};
