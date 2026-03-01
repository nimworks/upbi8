import{dz as A,d7 as M,d4 as N,eW as k,dF as E,es as b,et as C,d6 as t,dv as z,dr as u,ci as I,cf as O,eX as F}from"./app.Dbs6V_q1.js";import{r as o}from"./index.Crn7-fJZ.js";import{p as P}from"./CopyToClipboard-BGTSFnT3.DJJyG0Dp.js";import{a as $}from"./Layouts-BlFm53ED.DNAcEX9b.js";import{a as q,i as V}from"./JsonTree-aPaJmPx7.BOS6sB7r.js";import{n as H}from"./ScreenLayout-C2Le_YIv.CCTYs10k.js";import{c as J}from"./createLucideIcon.RSj0tFkk.js";import"./copy-Bx2Jwc5_.DotTa6qt.js";import"./ModalHeader-CSfzkWxZ.KQF0IT9H.js";import"./Screen-5StC6JLQ.BNbtfsff.js";import"./index-Dq_xe9dz.CYFAvuPJ.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],K=J("square-pen",W),Q=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let X=e=>{if(!I(e))return e;try{let a=O(e);return a.includes("�")?e:a}catch{return e}},B=e=>{try{let a=F.decode(e),s=new TextDecoder().decode(a);return s.includes("�")?e:s}catch{return e}},G=e=>{let{types:a,primaryType:s,...l}=e.typedData;return t.jsxs(t.Fragment,{children:[t.jsx(te,{data:l}),t.jsx(P,{text:(n=e.typedData,JSON.stringify(n,null,2)),itemName:"full payload to clipboard"})," "]});var n};const Y=({method:e,messageData:a,copy:s,iconUrl:l,isLoading:n,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>t.jsx(H,{title:s.title,subtitle:s.description,showClose:!0,onClose:p,icon:K,iconVariant:"subtle",helpText:x?t.jsx(ee,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:n||g||m,loading:n},secondaryCta:d?{label:"Not now",onClick:y,disabled:n||g||m}:void 0,watermark:!0,children:t.jsxs($,{children:[l?t.jsx(Q,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,t.jsxs(Z,{children:[e==="personal_sign"&&t.jsx(v,{children:X(a)}),e==="eth_signTypedData_v4"&&t.jsx(G,{typedData:a}),e==="solana_signMessage"&&t.jsx(v,{children:B(a)})]})]})}),ge={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:a,closePrivyModal:s}=M(),{navigate:l,data:n,onUserCloseViaDialogOrKeybindRef:g}=N(),[m,x]=o.useState(!0),[d,c]=o.useState(""),[y,p]=o.useState(),[f,T]=o.useState(null),[w,S]=o.useState(!1);o.useEffect((()=>{e||l("LandingScreen")}),[e]),o.useEffect((()=>{a(k).then((i=>{x(!1),i||(c("An error has occurred, please try again."),p(new E(new b(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:R,data:_,confirmAndSign:j,onSuccess:D,onFailure:L,uiOptions:r}=n.signMessage,U={title:r?.title||"Sign message",description:r?.description||"Signing this message will not cost you any fees.",buttonText:r?.buttonText||"Sign and continue"},h=i=>{i?D(i):L(y||new E(new b("The user rejected the request.",C.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{T(null),c(""),p(void 0)}),200)};return g.current=()=>{h(f)},t.jsx(Y,{method:R,messageData:_,copy:U,iconUrl:r?.iconUrl&&typeof r.iconUrl=="string"?r.iconUrl:void 0,isLoading:w,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:r?.isCancellable,onSign:async()=>{S(!0),c("");try{let i=await j();T(i),S(!1),setTimeout((()=>{h(i)}),z)}catch(i){console.error(i),c("An error has occurred, please try again."),p(new E(new b(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Z=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=u.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=u(q)`
  margin-top: 0;
`,v=u(V)`
  margin-top: 0;
`;export{ge as SignRequestScreen,Y as SignRequestView,ge as default};
