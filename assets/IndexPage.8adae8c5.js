import{u as R,a as H,Q as N,b as j,c as U,d as M,e as W,f as b,g as Y,h as E,i as F}from"./erc20ABI.59684b4d.js";import{aa as L,av as G,r as w,o as O,a9 as K,a8 as X,ab as J,ac as d,ad as f,ae as t,ag as a,aw as _,af as e,ai as h,O as u,ax as i,Q as x,ay as A,az as y,aA as m,aB as V,aC as z,ah as v,aj as n,ak as c,aD as g,a0 as $,aE as I,aF as Z,aG as ee}from"./index.35e64558.js";import{u as te,Q as q,a as k,C as oe}from"./urstore.4a06c0a2.js";import{a as B,b as P}from"./axios.9cd49c37.js";const ae=[{name:"Deposit",inputs:[{name:"erc20",type:"address",indexed:!0},{name:"urltoken",type:"address",indexed:!0},{name:"value",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"Withdraw",inputs:[{name:"erc20",type:"address",indexed:!0},{name:"urltoken",type:"address",indexed:!0},{name:"value",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{stateMutability:"nonpayable",type:"constructor",inputs:[],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"addSupportedContracts",inputs:[{name:"erc20",type:"address[]"},{name:"urtoken",type:"address[]"}],outputs:[{name:"",type:"bool"}]},{stateMutability:"payable",type:"fallback"},{stateMutability:"nonpayable",type:"function",name:"deposit",inputs:[{name:"erc20",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{stateMutability:"nonpayable",type:"function",name:"withdraw",inputs:[{name:"erc20",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{stateMutability:"view",type:"function",name:"supportedContracts",inputs:[{name:"arg0",type:"address"}],outputs:[{name:"",type:"address"}]},{stateMutability:"view",type:"function",name:"admin",inputs:[],outputs:[{name:"",type:"address"}]}],se="0x09d6bd033ca67422512e6b7399c58dfa530f7d61";var ne={abi:ae,address:se};const le=G({name:"IndexPage",setup(){const o=te(),l="0x040bD72A1628222eb5E4575E78C3d4F2Cdfbf481",C=w([]),S=w([]),D=B.get("alltokens/1/"),Q=B.get("toptokens/1/"),T=B.get("news/"),r=function(){P.all([D,Q,T]).then(P.spread((...s)=>{o.allSupportedTokens=s[0].data,S.value=s[1].data,C.value=s[2].data}))};return O(async()=>{o.connected=!1,o.showSpinner=!1,o.showBanner=!1,o.network="ETHEREUM",o.controllerContract=ne,o.urTokenABI=R,o.erc20ABI=H,r()}),K(()=>{o.stopListener()}),{urStore:o,adminAddress:l,stablecoins:w("stablecoins"),natives:w("natives"),others:w("others"),autoplay:w(!0),donateSlide:w(1),donateDialog:w(!1),donateAmount:w("0.01"),paginationControl:w(1),amount:X({}),setMax:function(s){this.amount[s]=o.tokenBalances[s]},deposit:async function(s,p){await o.deposit(s,p),this.amount[s]=""},withdraw:async function(s,p){await o.withdraw(s,p),this.amount["ur"+s]=""},topTokens:S,news:C}}}),re={class:"q-pa-xs row justify-center"},ie={key:0,class:"q-gutter-md row"},de={class:"q-pa-xs row justify-center"},ue={key:0,class:"q-pt-sm col-12 col-md-9 text-center text-white"},ce=n(" You are not connected to the ETHEREUM Network. Kindly Switch Network to Ethereum or Add Ethereum Network "),pe={class:"q-pa-xs row justify-center"},he={class:"col-12 col-md-7 text-center text-white"},me=a("strong",null,"ERC20/BEP20",-1),fe=a("strong",null,"urTOKEN",-1),_e=n(' Secure your "smart" ERC20/BEP20 tokens by converting them to "primitive" urTokens '),we=n(" The ERC20 standard greatly improved the user experience when interacting with Dapps. Dapp users can permit, approve and allow other users or contracts to transact on their behalf. When a user gives this access to a malicious contract or user, their funds are at a risk of being drained... "),ye=n(" Donate "),be=n(" Read More "),ge={key:0,class:"q-pa-xs row justify-center"},xe={class:"col-12 col-md-6 text-center text-white"},ve={class:"q-pa-xs row justify-center"},ke={class:"col-12 col-md-3 text-white q-pa-md"},Ce=n(" MAX "),Se=["src"],Te=n(" MAX "),Ee={class:"q-pa-xs row justify-center"},Ae={class:"col-12 col-md-7 text-center text-white q-pa-md"},Ve={class:"text-h5 text-bold"},ze=n(" News and Announcements "),qe={key:0,class:"text-white"},Be={class:"col-12 col-md-4 text-center text-white q-pa-md"},De={class:"text-h5 text-bold"},Qe=n(" Socials "),Ue={class:"text-white"},Me={class:"q-pa-xs row justify-center"},$e={class:"col-12 col-md-9 text-center text-white"},Ie=n(" urToken.org is a free and open source project. We need your support to keep the project going. "),Pe={class:"q-pa-xs row justify-center"},Re=a("div",{class:"col-12 col-md-12 text-center text-white q-pa-md"},"FAQS",-1),He={class:"col-12 col-md-11 section-1 text-white q-pa-md"},Ne=n(" urToken aims to secure your ERC20/BEP20 tokens by 'converting' them to primitive urTokens. For example, USDC will be 'converted' to urUSDC. urUSDC will not allow other users or contracts to spend your tokens. The functionality of urToken is very limited. As a user, you can only transfer them to other users. This means that no user or contract has approval to spend urtokens. You can swap back and forth. For example, 1 USDC will be converted to 1 urUSDC and vice versa. There are no fees for using the service except the usual gas fees. "),je=n(" urTokens are as safe as your wallet. If your wallet private key is stolen, all your assets can be stolen. UrToken reduces the attack vectors of ERC20/BEP20 tokens. There have been numerous cases of people waking up to drained wallets just because of interacting with malicious contracts. "),We=a("a",{href:"https://twitter.com/korpi87/status/1560416631678910464",target:"_blank",class:"text-orange",style:{"text-decoration":"none"}}," Here is one such case.",-1),Ye=n(" urToken contracts are all verified on the block explorer for easier verification and interaction with the contracts. The source code is also available on Github. "),Fe=n(" You can add any urToken to your wallet by importing it. To import a token, you need the contract address. The contract address can be found on the block explorer after converting to urToken. HOWEVER, urTokens not appearing in your wallet is a good thing. In the event of a wallet compromise or private key leak, the attacker might not notice the urTokens. The hacker is likely to steal all visible tokens first and likely to miss the urTokens. If you need to see your balances, simply connect your wallet. "),Le=n(" Sometimes you need funds in your hot wallet, could be for a trade or a mint or any kind of usage. You might be however not aware of token approvals for that particular wallet. There are tools such as revoke.cash which can help in revoking approvals to spend your tokens. However, this doesn't prevent your signature being used to permit token approval or you being requested for token approval by a malicious user or contract. Your tokens being in a cold hardware wallet does not secure them from being drained if tokens are approved or permitted. To have peace of mind, you can convert your ERC20/BEP20 token to urToken. If you notice unauthorised transactions on your ERC20/BEP20 tokens, you can safely transfer your urToken to a safe uncompromised wallet. "),Ge=n(" You can read more about urtokens "),Oe=a("a",{href:"https://github.com/freelancer254/urtoken.org",target:"_blank",class:"text-orange",style:{"text-decoration":"none"}}," Here",-1),Ke=n(" or connect with us via "),Xe=a("a",{href:"https://twitter.com/urtoken_org",target:"_blank",class:"text-orange",style:{"text-decoration":"none"}}," Twitter",-1),Je={class:"row q-pa-md q-gutter-sm"},Ze=a("img",{src:"/donate/eth.svg",alt:"Logo"},null,-1),et={class:"section-1 q-mt-md text-center"},tt=a("p",null,"Send ETH to the following address",-1),ot=n(" Copy "),at=a("div",{class:"absolute-bottom custom-caption"},[a("div",{class:"text-subtitle1 text-center text-white"}," Ethereum (ETH) ")],-1),st=a("img",{src:"/donate/eth.svg",alt:"Logo"},null,-1),nt={class:"section-1 q-mt-md text-center"},lt=a("p",{class:""},"Send BNB to the following address",-1),rt=n(" Copy "),it=a("div",{class:"absolute-bottom custom-caption"},[a("div",{class:"text-subtitle1 text-center text-white"}," Binance Smart Chain (BSC) ")],-1),dt=a("img",{src:"/donate/eth.svg",alt:"Logo"},null,-1),ut={class:"section-1 q-mt-md text-center"},ct=a("p",null,"Send MATIC to the following address",-1),pt=n(" Copy "),ht=a("div",{class:"absolute-bottom custom-caption"},[a("div",{class:"text-subtitle1 text-center text-white"}," Polygon (MATIC) ")],-1),mt={class:"row q-pa-md q-gutter-sm"},ft={class:"q-mt-md text-center"},_t={class:"text-white"},wt={key:0},yt={key:1},bt=n(" View on etherscan ");function gt(o,l,C,S,D,Q){const T=J("center");return d(),f(N,{key:o.urStore.network},{default:t(()=>[a("div",re,[o.urStore.showSpinner?(d(),_("div",ie,[e(j,{color:"teal",size:"5em"})])):h("",!0)]),a("div",de,[o.urStore.showBanner?(d(),_("div",ue,[e(U,{rounded:"",class:"bg-red text-white"},{action:t(()=>[e(u,{flat:"",color:"white",label:"Switch to ETHEREUM",onClick:l[0]||(l[0]=r=>o.urStore.switchNetwork({chainId:"0x1",chainName:"Ethereum Mainnet",rpcUrl:"https://mainnet.infura.io/v3/",name:"ETHER",symbol:"ETH",blockExplorerUrl:"https://etherscan.io/"}))})]),default:t(()=>[ce]),_:1})])):h("",!0)]),a("div",pe,[a("div",he,[e(m,{class:"section-1",flat:""},{default:t(()=>[e(i,null,{default:t(()=>[e(i,null,{default:t(()=>[me,e(x,{name:"swap_horiz",size:"30px"}),fe,e(A),_e]),_:1}),e(i,null,{default:t(()=>[we]),_:1})]),_:1}),e(A),e(y,{align:"center"},{default:t(()=>[e(u,{flat:"",onClick:l[1]||(l[1]=r=>o.donateDialog=!0)},{default:t(()=>[ye]),_:1}),e(u,{flat:"",tag:"a",href:"https://github.com/freelancer254/urtoken.org",target:"blank"},{default:t(()=>[be]),_:1})]),_:1})]),_:1})])]),o.urStore.connected?h("",!0):(d(),_("div",ge,[a("div",xe,[e(u,{icon:"account_balance_wallet",size:"25px",push:"",class:"glossy",rounded:"",color:"cyan",label:"Connect Wallet",onClick:o.urStore.connectProvider},null,8,["onClick"])])])),(d(!0),_(z,null,V(o.topTokens,r=>(d(),_("div",{key:r},[a("div",ve,[(d(!0),_(z,null,V(r,s=>(d(),_("div",{key:s.id},[a("div",ke,[e(m,{style:Z([`${s.style}`,{"max-width":"350px"}]),dense:""},{default:t(()=>[o.urStore.connected?h("",!0):(d(),f(i,{key:0,class:"text-bold text-h5"},{default:t(()=>[n(" 0 "+c(s.name)+" ",1),e(y,null,{default:t(()=>[e(g,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[2]||(l[2]=p=>o.text=p),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:t(()=>[e(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:t(()=>[n(" Convert to ur"+c(s.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(d(),f(i,{key:1,class:"text-bold text-h5"},{default:t(()=>[n(c(o.urStore.tokenBalances[s.id])+" "+c(s.name)+" ",1),e(y,null,{default:t(()=>[e(g,{color:"white",modelValue:o.amount[s.id],"onUpdate:modelValue":p=>o.amount[s.id]=p,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",clearable:""},{append:t(()=>[e(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:p=>o.setMax(s.id)},{default:t(()=>[Ce]),_:2},1032,["onClick"]),e(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:p=>o.deposit(s.id,o.amount[s.id])},{default:t(()=>[n(" Convert to ur"+c(s.name),1)]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):h("",!0),e(T,null,{default:t(()=>[e(v,{size:"80px"},{default:t(()=>[a("img",{src:`/logos/${s.logo}`,alt:"Logo"},null,8,Se)]),_:2},1024)]),_:2},1024),o.urStore.connected?h("",!0):(d(),f(i,{key:2,class:"text-bold text-h5"},{default:t(()=>[n(" 0 ur"+c(s.name)+" ",1),e(y,null,{default:t(()=>[e(g,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[3]||(l[3]=p=>o.text=p),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:t(()=>[e(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:t(()=>[n(" Convert to "+c(s.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(d(),f(i,{key:3,class:"text-bold text-h5"},{default:t(()=>[n(c(o.urStore.tokenBalances["ur"+s.id])+" ur"+c(s.name)+" ",1),e(y,null,{default:t(()=>[e(g,{color:"white",modelValue:o.amount["ur"+s.id],"onUpdate:modelValue":p=>o.amount["ur"+s.id]=p,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:t(()=>[e(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:p=>o.setMax("ur"+s.id)},{default:t(()=>[Te]),_:2},1032,["onClick"]),e(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:p=>o.withdraw(s.id,o.amount["ur"+s.id])},{default:t(()=>[n(" Convert to "+c(s.name),1)]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):h("",!0)]),_:2},1032,["style"])])]))),128))])]))),128)),a("div",Ee,[a("div",Ae,[e(m,{class:"section-1",push:"",bordered:""},{default:t(()=>[e(i,{horizontal:""},{default:t(()=>[e(i,{class:"q-pt-xs"},{default:t(()=>[a("div",Ve,[e(x,{name:"campaign",size:"45px"}),ze]),o.news.length?(d(),_("div",qe,[(d(!0),_(z,null,V(o.news[o.paginationControl-1],r=>(d(),f(q,{key:r.id},{default:t(()=>[$((d(),f(k,{tag:"a",target:"_blank",href:r.link,clickable:""},{default:t(()=>[n("["+c(r.date)+"] | "+c(r.title),1)]),_:2},1032,["href"])),[[ee]])]),_:2},1024))),128))])):h("",!0)]),_:1}),e(i,{class:"col-5 gt-sm flex flex-center"},{default:t(()=>[e(M,{class:"rounded-borders",src:"/illustrations/news.svg"})]),_:1})]),_:1}),e(A),e(y,null,{default:t(()=>[e(W,{modelValue:o.paginationControl,"onUpdate:modelValue":l[4]||(l[4]=r=>o.paginationControl=r),max:`${o.news.length}`,"max-pages":5,"direction-links":"","active-color":"dark","boundary-links":"",push:"",color:"white","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])]),_:1})]),_:1})]),a("div",Be,[e(m,{class:"section-1",push:"",bordered:""},{default:t(()=>[e(i,{horizontal:""},{default:t(()=>[e(i,{class:"q-pt-xs"},{default:t(()=>[a("div",De,[e(x,{name:"alternate_email",size:"30px"}),Qe]),a("div",Ue,[e(q,null,{default:t(()=>[e(k,null,{default:t(()=>[e(u,{tag:"a",icon:"rss_feed",flat:"",color:"white",label:"Twitter",href:"https://twitter.com/urtoken_org",target:"blank"})]),_:1}),e(k,null,{default:t(()=>[e(u,{tag:"a",icon:"code",flat:"",color:"white",label:"Github",href:"https://github.com/freelancer254/urtoken.org",target:"blank"})]),_:1}),e(k,null,{default:t(()=>[e(u,{icon:"payments",flat:"",color:"white",label:"Donate",onClick:l[5]||(l[5]=r=>o.donateDialog=!0)})]),_:1})]),_:1})])]),_:1}),e(i,{class:"col-7 gt-sm flex flex-center"},{default:t(()=>[e(M,{class:"rounded-borders",src:"/illustrations/socialmedia.svg"})]),_:1})]),_:1})]),_:1})])]),a("div",Me,[a("div",$e,[e(U,{rounded:"",class:"section-2 text-white"},{action:t(()=>[e(u,{tag:"a",href:"https://www.buymeacoffee.com/freelancer254",target:"blank",flat:"",color:"white",label:"Buy Me A Coffee"}),e(u,{flat:"",color:"white",label:"Donate",onClick:l[6]||(l[6]=r=>o.donateDialog=!0)})]),default:t(()=>[Ie]),_:1})])]),a("div",Pe,[Re,a("div",He,[e(q,{bordered:"",class:"rounded-borders"},{default:t(()=>[e(b,{"expand-separator":"",label:"What is urToken?","expand-icon-class":"text-white"},{default:t(()=>[e(m,{class:"section-1 text-white"},{default:t(()=>[e(i,null,{default:t(()=>[Ne]),_:1})]),_:1})]),_:1}),e(b,{"expand-separator":"",label:"How safe are urTokens?","expand-icon-class":"text-white"},{default:t(()=>[e(m,{class:"section-1 text-white"},{default:t(()=>[e(i,null,{default:t(()=>[je,We,Ye]),_:1})]),_:1})]),_:1}),e(b,{"expand-separator":"",label:"My urToken is not showing in my wallet","expand-icon-class":"text-white"},{default:t(()=>[e(m,{class:"section-1 text-white"},{default:t(()=>[e(i,null,{default:t(()=>[Fe]),_:1})]),_:1})]),_:1}),e(b,{label:"Why would I need urTokens?","expand-icon-class":"text-white"},{default:t(()=>[e(m,{class:"section-1 text-white"},{default:t(()=>[e(i,null,{default:t(()=>[Le]),_:1})]),_:1})]),_:1}),e(b,{label:"More Information","expand-icon-class":"text-white"},{default:t(()=>[e(m,{class:"section-1 text-white"},{default:t(()=>[e(i,null,{default:t(()=>[Ge,Oe,Ke,Xe]),_:1})]),_:1})]),_:1})]),_:1})])]),a("div",Je,[e(I,{modelValue:o.donateDialog,"onUpdate:modelValue":l[13]||(l[13]=r=>o.donateDialog=r)},{default:t(()=>[e(Y,{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",modelValue:o.donateSlide,"onUpdate:modelValue":l[12]||(l[12]=r=>o.donateSlide=r),"control-color":"white","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",class:"q-page shadow-1 rounded-borders"},{default:t(()=>[e(E,{name:1,class:"column no-wrap flex-center"},{default:t(()=>[e(v,{rounded:"",size:"150px"},{default:t(()=>[Ze]),_:1}),a("div",et,[e(m,{class:"section-1 text-white",flat:""},{default:t(()=>[e(i,{class:"address-section"},{default:t(()=>[tt,n(" "+c(o.adminAddress)+" ",1),e(u,{icon:"content_copy",size:"10px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:l[7]||(l[7]=r=>o.urStore.copyAddress(o.adminAddress))},{default:t(()=>[ot]),_:1})]),_:1}),e(y,{class:"q-ml-xl q-pl-xl gt-xs text-center"},{default:t(()=>[e(g,{color:"white",modelValue:o.donateAmount,"onUpdate:modelValue":l[9]||(l[9]=r=>o.donateAmount=r),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:t(()=>[o.urStore.connected?$((d(),f(u,{key:0,icon:"payments",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",label:" Donate ETH ",onClick:l[8]||(l[8]=r=>o.urStore.donate(o.adminAddress,o.donateAmount))},null,512)),[[oe]]):h("",!0),o.urStore.connected?h("",!0):(d(),f(u,{key:1,icon:"account_balance_wallet",onClick:o.urStore.connectProvider,size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",label:" Connect Wallet "},null,8,["onClick"]))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),at]),_:1}),e(E,{name:2,class:"column no-wrap flex-center"},{default:t(()=>[e(v,{rounded:"",size:"150px"},{default:t(()=>[st]),_:1}),a("div",nt,[e(m,{class:"section-1 text-white",flat:""},{default:t(()=>[e(i,{class:"address-section"},{default:t(()=>[lt,n(" "+c(o.adminAddress)+" ",1),e(u,{icon:"content_copy",size:"10px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:l[10]||(l[10]=r=>o.urStore.copyAddress(o.adminAddress))},{default:t(()=>[rt]),_:1})]),_:1})]),_:1})]),it]),_:1}),e(E,{name:3,class:"column no-wrap flex-center"},{default:t(()=>[e(v,{rounded:"",size:"150px"},{default:t(()=>[dt]),_:1}),a("div",ut,[e(m,{class:"section-1 text-white",flat:""},{default:t(()=>[e(i,{class:"address-section"},{default:t(()=>[ct,n(" "+c(o.adminAddress)+" ",1),e(u,{icon:"content_copy",size:"10px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:l[11]||(l[11]=r=>o.urStore.copyAddress(o.adminAddress))},{default:t(()=>[pt]),_:1})]),_:1})]),_:1})]),ht]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),a("div",mt,[e(I,{modelValue:o.urStore.txDialog,"onUpdate:modelValue":l[14]||(l[14]=r=>o.urStore.txDialog=r)},{default:t(()=>[a("div",ft,[e(m,{class:"bg-dark text-white",flat:""},{default:t(()=>[e(i,null,{default:t(()=>[o.urStore.tx_status?h("",!0):(d(),f(F,{key:0,color:"teal",size:"4em"})),o.urStore.tx_status?(d(),f(x,{key:1,name:"task_alt",color:"green",size:"4em"})):h("",!0)]),_:1}),e(i,{class:"address-section"},{default:t(()=>[a("div",_t,[o.urStore.tx_status?h("",!0):(d(),_("p",wt," Your transaction is being processed... ")),o.urStore.tx_status?(d(),_("p",yt," Your transaction has been completed. ")):h("",!0),a("p",null,"Tx hash: "+c(o.urStore.tx_hash),1)]),e(u,{tag:"a",href:`https://etherscan.io/tx/${o.urStore.tx_hash}`,target:"blank",icon:"link",size:"12px",flat:"","no-caps":"",rounded:"",class:"text-white"},{default:t(()=>[bt]),_:1},8,["href"])]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),_:1})}var St=L(le,[["render",gt]]);export{St as default};
