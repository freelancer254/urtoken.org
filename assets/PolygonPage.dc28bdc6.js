import{u as Q,a as I,b as N,Q as F,c as W,d as M,e as T,f as $,g as j,h as A,i as v,j as L}from"./news.ea1f3dc2.js";import{aa as O,av as Y,o as H,a9 as R,r as x,a8 as G,ab as X,ac as r,ad as h,ae as e,ag as d,aw as b,af as t,ai as p,O as u,ax as c,Q as z,ay as B,az as m,aA as w,aB as C,aC as k,ah as _,aj as s,ak as i,aD as f,a0 as q,aE as P,aF as D,aG as K}from"./index.a07f3af5.js";import{u as J,Q as E,a as U,C as Z}from"./urstore.fe2d528f.js";var ee=[{id:"usdc",name:"USDC",decimals:6,erc20Address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",urTokenAddress:"0x62fF748Bd67C303c44cbeD24401603A1ca66a9C3"},{id:"usdt",name:"USDT",decimals:6,erc20Address:"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",urTokenAddress:"0x76b403eEBb604c7e2194aFaF3439fD0873A96616"},{id:"dai",name:"DAI",decimals:18,erc20Address:"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",urTokenAddress:"0x638D9c02C8e0518704dd3Cc0a4f5B7F58594c4EE"},{id:"busd",name:"BUSD",decimals:18,erc20Address:"0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39",urTokenAddress:"0x6a77d224e76aB4625151578906E3A3aC0f4f587f"},{id:"weth",name:"WETH",decimals:18,erc20Address:"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",urTokenAddress:"0x020202747A4BdFe128f1bc9eB368735D9f306Dd8"},{id:"wmatic",name:"WMATIC",decimals:18,erc20Address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",urTokenAddress:"0x71658A23d9c7F1593C8B0805B40d07240ed947Ee"}];const te=[{name:"Deposit",inputs:[{name:"erc20",type:"address",indexed:!0},{name:"urltoken",type:"address",indexed:!0},{name:"value",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"Withdraw",inputs:[{name:"erc20",type:"address",indexed:!0},{name:"urltoken",type:"address",indexed:!0},{name:"value",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{stateMutability:"nonpayable",type:"constructor",inputs:[],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"addSupportedContracts",inputs:[{name:"erc20",type:"address[]"},{name:"urtoken",type:"address[]"}],outputs:[{name:"",type:"bool"}]},{stateMutability:"payable",type:"fallback"},{stateMutability:"nonpayable",type:"function",name:"deposit",inputs:[{name:"erc20",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{stateMutability:"nonpayable",type:"function",name:"withdraw",inputs:[{name:"erc20",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{stateMutability:"view",type:"function",name:"supportedContracts",inputs:[{name:"arg0",type:"address"}],outputs:[{name:"",type:"address"}]},{stateMutability:"view",type:"function",name:"admin",inputs:[],outputs:[{name:"",type:"address"}]}],oe="0xc4bb6295094f989d1aebb0316fe66e774e805845";var ae={abi:te,address:oe},se=[[{id:"usdt",name:"USDT",logo:"usdt.svg",style:"background: radial-gradient(circle, #34e89e 10%, #0f3443 100%);"},{id:"weth",name:"WETH",logo:"weth.svg",style:"background: radial-gradient(circle, #bdc3c7 10%, #2c3e50 100%)"},{id:"wmatic",name:"WMATIC",logo:"wmatic.svg",style:"background: radial-gradient(circle, #6441a5 10%, #2a0845 100%)"}]],le=[{id:"usdt",name:"USDT",logo:"usdt.svg",style:"background: radial-gradient(circle, #34e89e 10%, #0f3443 100%);"},{id:"dai",name:"DAI",logo:"dai.svg",style:"background: radial-gradient(circle, #ba8b02 10%, #181818 100%)"},{id:"usdc",name:"USDC",logo:"usdc.svg",style:"background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"},{id:"busd",name:"BUSD",logo:"busd.svg",style:"background: radial-gradient(circle, #ba8b02 10%, #181818 100%)"}],ne=[{id:"weth",name:"WETH",logo:"weth.svg",style:"background: radial-gradient(circle, #bdc3c7 10%, #2c3e50 100%)"},{id:"usdc",name:"USDC",logo:"usdc.svg",style:"background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}],de=[{id:"weth",name:"WETH",logo:"weth.svg",style:"background: radial-gradient(circle, #bdc3c7 10%, #2c3e50 100%)"},{id:"wmatic",name:"WMATIC",logo:"wmatic.svg",style:"background: radial-gradient(circle, #6441a5 10%, #2a0845 100%)"}];const ie=Y({name:"PolygonPage",setup(){const o=J(),l="0x040bD72A1628222eb5E4575E78C3d4F2Cdfbf481";return H(async()=>{o.connected=!1,o.showSpinner=!1,o.network="POLYGON",o.allSupportedTokens=ee,o.controllerContract=ae,o.urTokenABI=Q,o.erc20ABI=I}),R(()=>{o.stopListener()}),{urStore:o,adminAddress:l,stablecoins:x("stablecoins"),natives:x("natives"),others:x("others"),autoplay:x(!0),donateSlide:x(1),donateDialog:x(!1),donateAmount:x("10"),paginationControl:x(1),amount:G({}),setMax:function(g){this.amount[g]=o.tokenBalances[g]},deposit:async function(g,S){await o.deposit(g,S),this.amount[g]=""},withdraw:async function(g,S){await o.withdraw(g,S),this.amount["ur"+g]=""},topTokens:se,news:N,stablecoinTokens:le,nativeTokens:de,otherTokens:ne}}}),re={class:"q-pa-xs row justify-center"},ue={key:0,class:"q-gutter-md row"},ce={class:"q-pa-xs row justify-center"},pe={key:0,class:"q-pt-sm col-12 col-md-9 text-center text-white"},he=s(" You are not connected to the POLYGON Network. Kindly Switch Network to POLYGON or Add POLYGON Network "),me={class:"q-pa-xs row justify-center"},fe={class:"col-12 col-md-7 text-center text-white"},we=d("strong",null,"ERC20/BEP20",-1),be=d("strong",null,"urTOKEN",-1),ye=s(' Secure your "smart" ERC20/BEP20 tokens by converting them to "primitive" urTokens '),ge=s(" The ERC20 standard greatly improved the user experience when interacting with Dapps. Dapp users can permit, approve and allow other users or contracts to transact on their behalf. When a user gives this access to a malicious contract or user, their funds are at a risk of being drained... "),xe=s(" Donate "),_e=s(" Read More "),ve={key:0,class:"q-pa-xs row justify-center"},Ce={class:"col-12 col-md-6 text-center text-white"},ke={class:"q-pa-xs row justify-center"},Ae={class:"col-12 col-md-3 text-white q-pa-md"},Se=s(" MAX "),Ve=["src"],Te=s(" MAX "),ze={class:"q-pa-xs row justify-center"},De={class:"col-12 col-md-4 q-pa-sm"},Ue={class:"text-white"},Be=s(" MAX "),Ee=["src"],Me=s(" MAX "),$e={class:"col-12 col-md-4 q-pa-sm"},qe={class:"text-white"},Pe=s(" MAX "),Qe=["src"],Ie=s(" MAX "),Ne={class:"col-12 col-md-4 q-pa-sm"},Fe={class:"text-white"},We=s(" MAX "),je=["src"],Le=s(" MAX "),Oe={key:1,class:"q-pa-xs row justify-center"},Ye={class:"col-12 col-md-7 text-center text-white q-pa-md"},He={class:"text-h5 text-bold"},Re=s(" News and Announcements "),Ge={key:0,class:"text-white"},Xe={class:"col-12 col-md-4 text-center text-white q-pa-md"},Ke={class:"text-h5 text-bold"},Je=s(" Socials "),Ze={class:"text-white"},et={class:"q-pa-xs row justify-center"},tt={class:"col-12 col-md-9 text-center text-white"},ot=s(" urToken.io is a free and open source project. We need your support to keep the project going. "),at={class:"q-pa-xs row justify-center"},st=d("div",{class:"col-12 col-md-12 text-center text-white q-pa-md"},"FAQS",-1),lt={class:"col-12 col-md-11 section-1 text-white q-pa-md"},nt=s(" urToken aims to secure your ERC20/BEP20 tokens by 'converting' them to primitive urTokens. For example, USDC will be 'converted' to urUSDC. urUSDC will not allow other users or contracts to spend your tokens. The functionality of urToken is very limited. As a user, you can only transfer them to other users. This means that no user or contract has approval to spend urtokens. You can swap back and forth. For example, 1 USDC will be converted to 1 urUSDC and vice versa. There are no fees for using the service except the usual gas fees. "),dt=s(" urTokens are as safe as your wallet. If your wallet private key is stolen, all your assets can be stolen. UrToken reduces the attack vectors of ERC20/BEP20 tokens. There have been numerous cases of people waking up to drained wallets just because of interacting with malicious contracts. "),it=d("a",{href:"https://twitter.com/korpi87/status/1560416631678910464",target:"_blank",class:"text-orange",style:{"text-decoration":"none"}}," Here is one such case.",-1),rt=s(" urToken contracts are all verified on the block explorer for easier verification and interaction with the contracts. The source code is also available on Github. "),ut=s(" You can add any urToken to your wallet by importing it. To import a token, you need the contract address. The contract address can be found on the block explorer after converting to urToken. HOWEVER, urTokens not appearing in your wallet is a good thing. In the event of a wallet compromise or private key leak, the attacker might not notice the urTokens. The hacker is likely to steal all visible tokens first and likely to miss the urTokens. If you need to see your balances, simply connect your wallet. "),ct=s(" Sometimes you need funds in your hot wallet, could be for a trade or a mint or any kind of usage. You might be however not aware of token approvals for that particular wallet. There are tools such as revoke.cash which can help in revoking approvals to spend your tokens. However, this doesn't prevent your signature being used to permit token approval or you being requested for token approval by a malicious user or contract. Your tokens being in a cold hardware wallet does not secure them from being drained if tokens are approved or permitted. To have peace of mind, you can convert your ERC20/BEP20 token to urToken. If you notice unauthorised transactions on your ERC20/BEP20 tokens, you can safely transfer your urToken to a safe uncompromised wallet. "),pt=s(" You can read more about urtokens "),ht=d("a",{href:"https://github.com/freelancer254/freelancer254.github.io",target:"_blank",class:"text-orange",style:{"text-decoration":"none"}}," Here",-1),mt=s(" or connect with us via "),ft=d("a",{href:"https://twitter.com/urtoken_org",target:"_blank",class:"text-orange",style:{"text-decoration":"none"}}," Twitter",-1),wt={class:"row q-pa-md q-gutter-sm"},bt=d("img",{src:"/donate/eth.svg",alt:"Logo"},null,-1),yt={class:"section-1 q-mt-md text-center"},gt=s(" Copy "),xt=d("div",{class:"absolute-bottom custom-caption"},[d("div",{class:"text-subtitle1 text-center text-white"}," Polygon (MATIC) ")],-1),_t=d("img",{src:"/donate/eth.svg",alt:"Logo"},null,-1),vt={class:"section-1 q-mt-md text-center"},Ct=s(" Copy "),kt=d("div",{class:"absolute-bottom custom-caption"},[d("div",{class:"text-subtitle1 text-center text-white"}," Binance Smart Chain (BSC) ")],-1),At=d("img",{src:"/donate/eth.svg",alt:"Logo"},null,-1),St={class:"section-1 q-mt-md text-center"},Vt=s(" Copy "),Tt=d("div",{class:"absolute-bottom custom-caption"},[d("div",{class:"text-subtitle1 text-center text-white"}," Ethereum (ETH) ")],-1),zt={class:"row q-pa-md q-gutter-sm"},Dt={class:"q-mt-md text-center"},Ut={class:"text-white"},Bt={key:0},Et={key:1},Mt=s(" View on etherscan ");function $t(o,l,g,S,qt,Pt){const V=X("center");return r(),h(F,{key:o.urStore.network},{default:e(()=>[d("div",re,[o.urStore.showSpinner?(r(),b("div",ue,[t(W,{color:"teal",size:"5em"})])):p("",!0)]),d("div",ce,[o.urStore.showBanner?(r(),b("div",pe,[t(M,{rounded:"",class:"bg-red text-white"},{action:e(()=>[t(u,{flat:"",color:"white",label:"Switch to POLYGON",onClick:l[0]||(l[0]=a=>o.urStore.switchNetwork({chainId:"0x89",chainName:"Polygon",rpcUrl:"https://polygon-rpc.com/",name:"MATIC",symbol:"MATIC",blockExplorerUrl:"https://polygonscan.com/"}))})]),default:e(()=>[he]),_:1})])):p("",!0)]),d("div",me,[d("div",fe,[t(w,{class:"section-1",flat:""},{default:e(()=>[t(c,null,{default:e(()=>[t(c,null,{default:e(()=>[we,t(z,{name:"swap_horiz",size:"30px"}),be,t(B),ye]),_:1}),t(c,null,{default:e(()=>[ge]),_:1})]),_:1}),t(B),t(m,{align:"center"},{default:e(()=>[t(u,{flat:"",onClick:l[1]||(l[1]=a=>o.donateDialog=!0)},{default:e(()=>[xe]),_:1}),t(u,{flat:"",tag:"a",href:"https://github.com/freelancer254/freelancer254.github.io",target:"blank"},{default:e(()=>[_e]),_:1})]),_:1})]),_:1})])]),o.urStore.connected?p("",!0):(r(),b("div",ve,[d("div",Ce,[t(u,{icon:"account_balance_wallet",size:"25px",push:"",class:"glossy",rounded:"",color:"cyan",label:"Connect Wallet",onClick:o.urStore.connectProvider},null,8,["onClick"])])])),(r(!0),b(k,null,C(o.topTokens,a=>(r(),b("div",{key:a},[d("div",ke,[(r(!0),b(k,null,C(a,n=>(r(),b("div",{key:n.id},[d("div",Ae,[t(w,{style:D([`${n.style}`,{"max-width":"350px"}]),dense:""},{default:e(()=>[o.urStore.connected?p("",!0):(r(),h(c,{key:0,class:"text-bold text-h5"},{default:e(()=>[s(" 0 "+i(n.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[2]||(l[2]=y=>o.text=y),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to ur"+i(n.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:1,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances[n.id])+" "+i(n.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount[n.id],"onUpdate:modelValue":y=>o.amount[n.id]=y,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",clearable:""},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:y=>o.setMax(n.id)},{default:e(()=>[Se]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:y=>o.deposit(n.id,o.amount[n.id])},{default:e(()=>[s(" Convert to ur"+i(n.name),1)]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0),t(V,null,{default:e(()=>[t(_,{size:"80px"},{default:e(()=>[d("img",{src:`/logos/${n.logo}`,alt:"Logo"},null,8,Ve)]),_:2},1024)]),_:2},1024),o.urStore.connected?p("",!0):(r(),h(c,{key:2,class:"text-bold text-h5"},{default:e(()=>[s(" 0 ur"+i(n.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[3]||(l[3]=y=>o.text=y),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to "+i(n.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:3,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances["ur"+n.id])+" ur"+i(n.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount["ur"+n.id],"onUpdate:modelValue":y=>o.amount["ur"+n.id]=y,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:y=>o.setMax("ur"+n.id)},{default:e(()=>[Te]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:y=>o.withdraw(n.id,o.amount["ur"+n.id])},{default:e(()=>[s(" Convert to "+i(n.name),1)]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0)]),_:2},1032,["style"])])]))),128))])]))),128)),d("div",ze,[d("div",De,[t(T,{modelValue:o.stablecoins,"onUpdate:modelValue":l[6]||(l[6]=a=>o.stablecoins=a),"transition-prev":"slide-left","transition-next":"slide-right","prev-icon":"arrow_left","next-icon":"arrow_right",swipeable:"",animated:"","control-type":"push","control-color":"dark",arrows:"",padding:"",class:"section-1 rounded-borders",autoplay:o.autoplay,onMouseenter:l[7]||(l[7]=a=>o.autoplay=!1)},{default:e(()=>[(r(!0),b(k,null,C(o.stablecoinTokens,a=>(r(),h(v,{key:a,name:`${a.id}`,class:"column no-wrap flex-center"},{default:e(()=>[d("div",Ue,[t(w,{style:D([`${a.style}`,{"max-width":"350px"}]),class:"text-bold text-h6",dense:""},{default:e(()=>[o.urStore.connected?p("",!0):(r(),h(c,{key:0,class:"text-bold text-h5"},{default:e(()=>[s(" 0 "+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[4]||(l[4]=n=>o.text=n),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to ur"+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:1,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances[a.id])+" "+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount[a.id],"onUpdate:modelValue":n=>o.amount[a.id]=n,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:n=>o.setMax(a.id)},{default:e(()=>[Be]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:n=>o.deposit(a.id,o.amount[a.id])},{default:e(()=>[s(" Convert to ur"+i(a.name),1)]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0),t(V,null,{default:e(()=>[t(_,{size:"80px"},{default:e(()=>[d("img",{src:`/logos/${a.logo}`,alt:"Logo"},null,8,Ee)]),_:2},1024)]),_:2},1024),o.urStore.connected?p("",!0):(r(),h(c,{key:2,class:"text-bold text-h5"},{default:e(()=>[s(" 0 ur"+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[5]||(l[5]=n=>o.text=n),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to "+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:3,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances["ur"+a.id])+" ur"+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount["ur"+a.id],"onUpdate:modelValue":n=>o.amount["ur"+a.id]=n,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:n=>o.setMax("ur"+a.id)},{default:e(()=>[Me]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:n=>o.withdraw(a.id,o.amount["ur"+a.id])},{default:e(()=>[s(" Convert to "+i(a.name),1)]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0)]),_:2},1032,["style"])])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])]),d("div",$e,[t(T,{modelValue:o.natives,"onUpdate:modelValue":l[10]||(l[10]=a=>o.natives=a),"transition-prev":"slide-left","transition-next":"slide-right","prev-icon":"arrow_left","next-icon":"arrow_right",swipeable:"",animated:"","control-type":"push","control-color":"dark",arrows:"",padding:"",class:"section-1 rounded-borders",autoplay:o.autoplay,onMouseenter:l[11]||(l[11]=a=>o.autoplay=!1)},{default:e(()=>[(r(!0),b(k,null,C(o.nativeTokens,a=>(r(),h(v,{key:a,name:`${a.id}`,class:"column no-wrap flex-center"},{default:e(()=>[d("div",qe,[t(w,{style:D([`${a.style}`,{"max-width":"350px"}]),class:"text-bold text-h6",dense:""},{default:e(()=>[o.urStore.connected?p("",!0):(r(),h(c,{key:0,class:"text-bold text-h5"},{default:e(()=>[s(" 0 "+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[8]||(l[8]=n=>o.text=n),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to ur"+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:1,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances[a.id])+" "+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount[a.id],"onUpdate:modelValue":n=>o.amount[a.id]=n,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:n=>o.setMax(a.id)},{default:e(()=>[Pe]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:""},{default:e(()=>[s(" Convert to ur"+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0),t(V,null,{default:e(()=>[t(_,{size:"80px"},{default:e(()=>[d("img",{src:`/logos/${a.logo}`,alt:"Logo"},null,8,Qe)]),_:2},1024)]),_:2},1024),o.urStore.connected?p("",!0):(r(),h(c,{key:2,class:"text-bold text-h5"},{default:e(()=>[s(" 0 ur"+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[9]||(l[9]=n=>o.text=n),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to "+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:3,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances["ur"+a.id])+" ur"+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount["ur"+a.id],"onUpdate:modelValue":n=>o.amount["ur"+a.id]=n,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:n=>o.setMax("ur"+a.id)},{default:e(()=>[Ie]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:""},{default:e(()=>[s(" Convert to "+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0)]),_:2},1032,["style"])])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])]),d("div",Ne,[t(T,{modelValue:o.others,"onUpdate:modelValue":l[14]||(l[14]=a=>o.others=a),"transition-prev":"slide-left","transition-next":"slide-right","prev-icon":"arrow_left","next-icon":"arrow_right",swipeable:"",animated:"","control-type":"push","control-color":"dark",arrows:"",padding:"",class:"section-1 rounded-borders",autoplay:o.autoplay,onMouseenter:l[15]||(l[15]=a=>o.autoplay=!1)},{default:e(()=>[(r(!0),b(k,null,C(o.otherTokens,a=>(r(),h(v,{key:a,name:`${a.id}`,class:"column no-wrap flex-center"},{default:e(()=>[d("div",Fe,[t(w,{style:D([`${a.style}`,{"max-width":"350px"}]),class:"text-bold text-h6",dense:""},{default:e(()=>[o.urStore.connected?p("",!0):(r(),h(c,{key:0,class:"text-bold text-h5"},{default:e(()=>[s(" 0 "+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[12]||(l[12]=n=>o.text=n),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to ur"+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:1,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances[a.id])+" "+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount[a.id],"onUpdate:modelValue":n=>o.amount[a.id]=n,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:n=>o.setMax(a.id)},{default:e(()=>[We]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:""},{default:e(()=>[s(" Convert to ur"+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0),t(V,null,{default:e(()=>[t(_,{size:"80px"},{default:e(()=>[d("img",{src:`/logos/${a.logo}`,alt:"Logo"},null,8,je)]),_:2},1024)]),_:2},1024),o.urStore.connected?p("",!0):(r(),h(c,{key:2,class:"text-bold text-h5"},{default:e(()=>[s(" 0 ur"+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.text,"onUpdate:modelValue":l[13]||(l[13]=n=>o.text=n),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6",disable:""},{append:e(()=>[t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",disable:""},{default:e(()=>[s(" Convert to "+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)),o.urStore.connected?(r(),h(c,{key:3,class:"text-bold text-h5"},{default:e(()=>[s(i(o.urStore.tokenBalances["ur"+a.id])+" ur"+i(a.name)+" ",1),t(m,null,{default:e(()=>[t(f,{color:"white",modelValue:o.amount["ur"+a.id],"onUpdate:modelValue":n=>o.amount["ur"+a.id]=n,label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[t(u,{size:"10px",flat:"","no-caps":"",class:"text-white",onClick:n=>o.setMax("ur"+a.id)},{default:e(()=>[Le]),_:2},1032,["onClick"]),t(u,{icon:"swap_horiz",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:""},{default:e(()=>[s(" Convert to "+i(a.name),1)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):p("",!0)]),_:2},1032,["style"])])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])])]),o.stablecoinTokens.length?(r(),b("div",Oe,[d("div",Ye,[t(w,{class:"section-1",push:"",bordered:""},{default:e(()=>[t(c,{horizontal:""},{default:e(()=>[t(c,{class:"q-pt-xs"},{default:e(()=>[d("div",He,[t(z,{name:"campaign",size:"45px"}),Re]),o.news.length?(r(),b("div",Ge,[(r(!0),b(k,null,C(o.news[o.paginationControl-1],a=>(r(),h(E,{key:a.id},{default:e(()=>[q((r(),h(U,{tag:"a",target:"_blank",href:a.link,clickable:""},{default:e(()=>[s("["+i(a.date)+"] | "+i(a.title),1)]),_:2},1032,["href"])),[[K]])]),_:2},1024))),128))])):p("",!0)]),_:1}),t(c,{class:"col-5 gt-sm flex flex-center"},{default:e(()=>[t($,{class:"rounded-borders",src:"/illustrations/news.svg"})]),_:1})]),_:1}),t(B),t(m,null,{default:e(()=>[t(j,{modelValue:o.paginationControl,"onUpdate:modelValue":l[16]||(l[16]=a=>o.paginationControl=a),max:`${o.news.length}`,"max-pages":5,"direction-links":"","active-color":"dark","boundary-links":"",push:"",color:"white","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])]),_:1})]),_:1})]),d("div",Xe,[t(w,{class:"section-1",push:"",bordered:""},{default:e(()=>[t(c,{horizontal:""},{default:e(()=>[t(c,{class:"q-pt-xs"},{default:e(()=>[d("div",Ke,[t(z,{name:"alternate_email",size:"30px"}),Je]),d("div",Ze,[t(E,null,{default:e(()=>[t(U,null,{default:e(()=>[t(u,{tag:"a",icon:"rss_feed",flat:"",color:"white",label:"Twitter",href:"https://twitter.com/urtoken_org",target:"blank"})]),_:1}),t(U,null,{default:e(()=>[t(u,{tag:"a",icon:"code",flat:"",color:"white",label:"Github",href:"https://github.com/freelancer254/freelancer254.github.io",target:"blank"})]),_:1}),t(U,null,{default:e(()=>[t(u,{icon:"payments",flat:"",color:"white",label:"Donate",onClick:l[17]||(l[17]=a=>o.donateDialog=!0)})]),_:1})]),_:1})])]),_:1}),t(c,{class:"col-7 gt-sm flex flex-center"},{default:e(()=>[t($,{class:"rounded-borders",src:"/illustrations/socialmedia.svg"})]),_:1})]),_:1})]),_:1})])])):p("",!0),d("div",et,[d("div",tt,[t(M,{rounded:"",class:"section-2 text-white"},{action:e(()=>[t(u,{tag:"a",href:"https://www.buymeacoffee.com/freelancer254",target:"blank",flat:"",color:"white",label:"Buy Me A Coffee"}),t(u,{flat:"",color:"white",label:"Donate",onClick:l[18]||(l[18]=a=>o.donateDialog=!0)})]),default:e(()=>[ot]),_:1})])]),d("div",at,[st,d("div",lt,[t(E,{bordered:"",class:"rounded-borders"},{default:e(()=>[t(A,{"expand-separator":"",label:"What is urToken?","expand-icon-class":"text-white"},{default:e(()=>[t(w,{class:"section-1 text-white"},{default:e(()=>[t(c,null,{default:e(()=>[nt]),_:1})]),_:1})]),_:1}),t(A,{"expand-separator":"",label:"How safe are urTokens?","expand-icon-class":"text-white"},{default:e(()=>[t(w,{class:"section-1 text-white"},{default:e(()=>[t(c,null,{default:e(()=>[dt,it,rt]),_:1})]),_:1})]),_:1}),t(A,{"expand-separator":"",label:"My urToken is not showing in my wallet","expand-icon-class":"text-white"},{default:e(()=>[t(w,{class:"section-1 text-white"},{default:e(()=>[t(c,null,{default:e(()=>[ut]),_:1})]),_:1})]),_:1}),t(A,{label:"Why would I need urTokens?","expand-icon-class":"text-white"},{default:e(()=>[t(w,{class:"section-1 text-white"},{default:e(()=>[t(c,null,{default:e(()=>[ct]),_:1})]),_:1})]),_:1}),t(A,{label:"More Information","expand-icon-class":"text-white"},{default:e(()=>[t(w,{class:"section-1 text-white"},{default:e(()=>[t(c,null,{default:e(()=>[pt,ht,mt,ft]),_:1})]),_:1})]),_:1})]),_:1})])]),d("div",wt,[t(P,{modelValue:o.donateDialog,"onUpdate:modelValue":l[25]||(l[25]=a=>o.donateDialog=a)},{default:e(()=>[t(T,{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",modelValue:o.donateSlide,"onUpdate:modelValue":l[24]||(l[24]=a=>o.donateSlide=a),"control-color":"white","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",class:"q-page shadow-1 rounded-borders"},{default:e(()=>[t(v,{name:1,class:"column no-wrap flex-center"},{default:e(()=>[t(_,{rounded:"",size:"150px"},{default:e(()=>[bt]),_:1}),d("div",yt,[t(w,{class:"section-1 text-white",flat:""},{default:e(()=>[t(c,null,{default:e(()=>[s(" Send MATIC to the following address "+i(o.adminAddress)+" ",1),t(u,{icon:"content_copy",size:"10px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:l[19]||(l[19]=a=>o.urStore.copyAddress(o.adminAddress))},{default:e(()=>[gt]),_:1})]),_:1}),t(m,{class:"q-ml-xl q-pl-xl text-center"},{default:e(()=>[t(f,{color:"white",modelValue:o.donateAmount,"onUpdate:modelValue":l[21]||(l[21]=a=>o.donateAmount=a),label:"Amount","label-color":"white","input-class":"text-white text-bold text-h6"},{append:e(()=>[o.urStore.connected?q((r(),h(u,{key:0,icon:"payments",size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",label:" Donate MATIC ",onClick:l[20]||(l[20]=a=>o.urStore.donate(o.adminAddress,o.donateAmount))},null,512)),[[Z]]):p("",!0),o.urStore.connected?p("",!0):(r(),h(u,{key:1,icon:"account_balance_wallet",onClick:o.urStore.connectProvider,size:"12px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",label:" Connect Wallet "},null,8,["onClick"]))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),xt]),_:1}),t(v,{name:2,class:"column no-wrap flex-center"},{default:e(()=>[t(_,{rounded:"",size:"150px"},{default:e(()=>[_t]),_:1}),d("div",vt,[t(w,{class:"section-1 text-white",flat:""},{default:e(()=>[t(c,null,{default:e(()=>[s(" Send BNB/BEP20 to the following address "+i(o.adminAddress)+" ",1),t(u,{icon:"content_copy",size:"10px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:l[22]||(l[22]=a=>o.urStore.copyAddress(o.adminAddress))},{default:e(()=>[Ct]),_:1})]),_:1})]),_:1})]),kt]),_:1}),t(v,{name:3,class:"column no-wrap flex-center"},{default:e(()=>[t(_,{rounded:"",size:"150px"},{default:e(()=>[At]),_:1}),d("div",St,[t(w,{class:"section-1 text-white",flat:""},{default:e(()=>[t(c,null,{default:e(()=>[s(" Send ETH/ERC20 to the following address "+i(o.adminAddress)+" ",1),t(u,{icon:"content_copy",size:"10px",push:"","no-caps":"",rounded:"",class:"text-white",glossy:"",onClick:l[23]||(l[23]=a=>o.urStore.copyAddress(o.adminAddress))},{default:e(()=>[Vt]),_:1})]),_:1})]),_:1})]),Tt]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),d("div",zt,[t(P,{modelValue:o.urStore.txDialog,"onUpdate:modelValue":l[26]||(l[26]=a=>o.urStore.txDialog=a)},{default:e(()=>[d("div",Dt,[t(w,{class:"bg-dark text-white",flat:""},{default:e(()=>[t(c,null,{default:e(()=>[o.urStore.tx_status?p("",!0):(r(),h(L,{key:0,color:"teal",size:"4em"})),o.urStore.tx_status?(r(),h(z,{key:1,name:"task_alt",color:"green",size:"4em"})):p("",!0)]),_:1}),t(c,null,{default:e(()=>[d("div",Ut,[o.urStore.tx_status?p("",!0):(r(),b("p",Bt," Your transaction is being processed... ")),o.urStore.tx_status?(r(),b("p",Et," Your transaction has been completed. ")):p("",!0),d("p",null,"Tx hash: "+i(o.urStore.tx_hash),1)]),t(u,{tag:"a",href:`https://ropsten.etherscan.io/tx/${o.urStore.tx_hash}`,target:"blank",icon:"link",size:"12px",flat:"","no-caps":"",rounded:"",class:"text-white"},{default:e(()=>[Mt]),_:1},8,["href"])]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),_:1})}var Ft=O(ie,[["render",$t]]);export{Ft as default};
