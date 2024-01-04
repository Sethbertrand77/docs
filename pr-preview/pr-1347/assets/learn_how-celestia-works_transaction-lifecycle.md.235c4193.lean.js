import{_ as i}from"./chunks/tx-lifecycle.bf88d299.js";import{_ as n,o as a,c as o,k as e,a as t,Q as s}from"./chunks/framework.5f374f01.js";const l="/pr-preview/pr-1347/img/learn/consensus-da.png",K=JSON.parse('{"title":"The lifecycle of a celestia-app transaction","description":"Learn what is the lifecycle of a celestia-app transaction.","frontmatter":{"description":"Learn what is the lifecycle of a celestia-app transaction.","head":[["meta",{"name":"og:title","content":"The lifecycle of a celestia-app transaction | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/how-celestia-works/transaction-lifecycle.md","filePath":"learn/how-celestia-works/transaction-lifecycle.md","lastUpdated":1704393405000}'),r={name:"learn/how-celestia-works/transaction-lifecycle.md"},c=s("",5),h=e("a",{href:"./data-availability-layer"},`described in the "Celestia's data availability layer" page`,-1),d={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},Q=s("",1),p=[Q],m=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"4"),e("mi",null,"k")])],-1),u=e("li",null,"It splits the executable transactions and the namespaced data into shares. Every share consists of some bytes prefixed by a namespace. To this end, the executable transactions are associated with a reserved namespace.",-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.123ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 2264.4 705","aria-hidden":"true"},f=s("",1),x=[f],w=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k"),e("mo",null,"×"),e("mi",null,"k")])],-1),b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.386ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 3264.4 705","aria-hidden":"true"},y=s("",1),v=[y],L=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"2"),e("mi",null,"k"),e("mo",null,"×"),e("mn",null,"2"),e("mi",null,"k")])],-1),H=e("li",null,"It computes a commitment for every row and column of the extended matrix using the NMTs described above.",-1),V=e("p",null,"Thus, the commitment of the block data is the root of a Merkle tree with the leaves the roots of a forest of Namespaced Merkle subtrees, one for every row and column of the extended matrix.",-1),M=e("h2",{id:"checking-data-availability",tabindex:"-1"},[t("Checking data availability "),e("a",{class:"header-anchor",href:"#checking-data-availability","aria-label":'Permalink to "Checking data availability"'},"​")],-1),A=e("p",null,[e("img",{src:l,alt:"DA network"})],-1),C=e("p",null,[t("To enhance connectivity, the celestia-node augments the celestia-app with a separate libp2p network, "),e("em",null,"i.e."),t(", the so-called "),e("em",null,"DA network"),t(", that serves DAS requests.")],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},I=s("",1),P=[I],N=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"4"),e("mi",null,"k")])],-1),j=e("p",null,[t("Note that although it is recommended, performing DAS is optional -- light nodes could just trust that the data corresponding to the commitments in the block headers was indeed made available by the Celestia DA layer. In addition, light nodes can also submit transactions to the celestia-app, i.e., "),e("code",null,"PayForBlobs"),t(" transactions.")],-1),B=e("p",null,"While performing DAS for a block header, every light node queries Celestia Nodes for a number of random data chunks from the extended matrix and the corresponding Merkle proofs. If all the queries are successful, then the light node accepts the block header as valid (from a DA perspective).",-1),Z=e("p",null,"If at least one of the queries fails (i.e., either the data chunk is not received or the Merkle proof is invalid), then the light node rejects the block header and tries again later. The retrial is necessary to deal with false negatives, i.e., block headers being rejected although the block data is available. This may happen due to network congestion for example.",-1),q=e("p",null,[t("Alternatively, light nodes may accept a block header although the data is not available, i.e., a "),e("em",null,"false positive"),t(". This is possible since the soundness property (i.e., if an honest light node accepts a block as available, then at least one honest full node will eventually have the entire block data) is probabilistically guaranteed (for more details, take a look at the "),e("a",{href:"https://arxiv.org/abs/1809.09044",target:"_blank",rel:"noreferrer"},"original paper"),t(").")],-1),E=e("p",null,"By fine tuning Celestia's parameters (e.g., the number of data chunks sampled by each light node) the likelihood of false positives can be sufficiently reduced such that block producers have no incentive to withhold the block data.",-1);function z(R,J,F,G,$,U){return a(),o("div",null,[c,e("p",null,[t("Next, the block producer adds to the block header a commitment of the block data. As "),h,t(", the commitment is the Merkle root of the "),e("mjx-container",d,[(a(),o("svg",T,p)),m]),t(" intermediate Merkle roots (i.e., one for each row and column of the extended matrix). To compute this commitment, the block producer performs the following operations:")]),e("ul",null,[u,e("li",null,[t("It arranges these shares into a square matrix (row-wise). Note that the shares are padded to the next power of two. The outcome square of size "),e("mjx-container",_,[(a(),o("svg",g,x)),w]),t(" is referred to as the original data.")]),e("li",null,[t("It extends the original data to a "),e("mjx-container",b,[(a(),o("svg",k,v)),L]),t(" square matrix using the 2-dimensional Reed-Solomon encoding scheme described above. The extended shares (i.e., containing erasure data) are associated with another reserved namespace.")]),H]),V,M,A,C,e("p",null,[t("Light nodes connect to a celestia-node in the DA network, listen to extended block headers (i.e., the block headers together with the relevant DA metadata, such as the "),e("mjx-container",D,[(a(),o("svg",S,P)),N]),t(" intermediate Merkle roots), and perform DAS on the received headers (i.e., ask for random data chunks).")]),j,B,Z,q,E])}const X=n(r,[["render",z]]);export{K as __pageData,X as default};
