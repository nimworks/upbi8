import{dz as T,d7 as I,d4 as _,d6 as e,eh as E,ei as F,dT as U,dr as h,d$ as W}from"./app.Dbs6V_q1.js";import{F as N}from"./ShieldCheckIcon.C49qVTY6.js";import{r as a}from"./index.Crn7-fJZ.js";import{m as O}from"./ModalHeader-CSfzkWxZ.KQF0IT9H.js";import{l as V}from"./Layouts-BlFm53ED.DNAcEX9b.js";import{g as z,h as H,u as M,b as D,k as B}from"./shared-CQ6jg1BO.YFvMzRPg.js";import{w as s}from"./Screen-5StC6JLQ.BNbtfsff.js";import"./index-Dq_xe9dz.CYFAvuPJ.js";const te={component:()=>{let[o,u]=a.useState(!0),{authenticated:p,user:b}=T(),{walletProxy:m,closePrivyModal:y,createAnalyticsEvent:v,client:g}=I(),{navigate:j,data:k,onUserCloseViaDialogOrKeybindRef:A}=_(),[n,C]=a.useState(void 0),[x,l]=a.useState(""),[d,f]=a.useState(!1),{entropyId:c,entropyIdVerifier:$,onCompleteNavigateTo:w,onSuccess:P,onFailure:S}=k.recoverWallet,i=(r="User exited before their wallet could be recovered")=>{y({shouldCallAuthOnSuccess:!1}),S(typeof r=="string"?new U(r):r)};return A.current=i,a.useEffect((()=>{if(!p)return i("User must be authenticated and have a Privy wallet before it can be recovered")}),[p]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:N,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:i}),e.jsx(s.Body,{children:e.jsx(K,{children:e.jsxs("div",{children:[e.jsxs(z,{children:[e.jsx(H,{type:o?"password":"text",onChange:r=>(t=>{t&&C(t)})(r.target.value),disabled:d,style:{paddingRight:"2.3rem"}}),e.jsx(M,{style:{right:"0.75rem"},children:o?e.jsx(D,{onClick:()=>u(!1)}):e.jsx(B,{onClick:()=>u(!0)})})]}),!!x&&e.jsx(Y,{children:x})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(V,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(q,{loading:d||!m,disabled:!n,onClick:async()=>{f(!0);let r=await g.getAccessToken(),t=E(b,c);if(!r||!t||n===null)return i("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await m?.recover({accessToken:r,entropyId:c,entropyIdVerifier:$,recoveryPassword:n}),l(""),w?j(w):y({shouldCallAuthOnSuccess:!1}),P?.(t),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){F(R)?l("Invalid recovery password, please try again."):l("An error has occurred, please try again.")}finally{f(!1)}},$hideAnimations:!c&&d,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let K=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Y=h.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,q=h(O)`
  ${({$hideAnimations:o})=>o&&W`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`;export{te as PasswordRecoveryScreen,te as default};
