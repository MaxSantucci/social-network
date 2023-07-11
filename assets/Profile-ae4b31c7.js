import{G as m,b as o,e as b,f as z,a as e,j as t,T as y,g as p,h as F,r as n,i as k,k as w,l as j,B as L,m as I,n as B,A as E,I as D,o as H,p as O,q as R,t as T,R as C,v as W,c as _,w as $,d as G,x as J,y as V,z as q,C as U,D as Y,E as Z,F as K,H as Q}from"./index-e5df6940.js";import{R as X}from"./index.esm-b7051886.js";function ee(s){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}}]})(s)}function te(s){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(s)}const se=({closeModal:s})=>{o(b);const{register:a,handleSubmit:l}=z();return e("div",{children:t("div",{className:"z-50 bg-gray-100 w-700 max-w-full rounded-lg",children:[t("div",{className:"flex justify-between items-center pt-3 mb-3",children:[e("span",{className:"text-black mx-auto text-xl font-normal",children:"Edit profile"}),e("div",{className:"flex items-center",children:e("button",{className:"flex justify-center bg-gray-200 rounded-full items-center w-8 h-8 mr-3 hover:bg-gray-300",onClick:s,children:e(te,{className:"w-6 h-6 text-black"})})})]}),e("hr",{className:"w-700 border-gray-300 mb-4"}),t("div",{className:"flex",children:[t("div",{children:[e("div",{className:"h-40 pt-2 pl-2",children:"Full name:"}),e("div",{className:"h-40 pt-2 pl-2",children:"Actively looking for jobs:"}),e("div",{className:"h-40 pt-2 pl-2",children:"My professional skills:"})]}),t("form",{className:"ml-2",onSubmit:l(c=>{console.log(c)}),children:[e(y,{className:"w-300 h-40 rounded-lg p-2 resize-none pr-8",placeholder:"Write your full name",...a("message")}),e("div",{className:"h-30 text-sm text-black",children:e("input",{className:"w-6 h-6",type:"checkbox",...a("lookingForAJob")})}),e(y,{className:"w-300 h-40 rounded-lg p-2 resize-none pr-8",placeholder:"Write your skills",...a("message")}),e("button",{type:"submit",children:"Save"})]})]})]})})},ae=()=>{const s=p(),a=o(F)||"",l=o(b),r=o(d=>{var x;return(x=d.auth.data)==null?void 0:x.id}),[c,i]=n.useState(!1),[h,u]=n.useState(!1),[f,g]=n.useState(a);n.useEffect(()=>{g(a)},[a]),n.useEffect(()=>{r&&(s(k({userId:r.toString()})),s(w({userId:r.toString()})))},[r,s]);const v=()=>{i(!0)},N=()=>{i(!1),s(I(f))},M=d=>{g(d.currentTarget.value)},A=d=>{d.target.files&&d.target.files.length&&s(B(d.target.files[0]))},S=()=>{u(!0)},P=()=>{u(!1)};return t("div",{className:"p-2.5 flex",children:[t("div",{className:"relative inline-block group",children:[e("img",{className:"w-160 h-160 rounded-full",src:l.photos.large?l.photos.large:j,alt:"avatar"}),e("label",{htmlFor:"file-upload",className:"custom-file-upload cursor-pointer absolute right-2 top-3/4",children:e("div",{className:"flex justify-center bg-gray-200 rounded-full items-center w-8 h-8 hover:bg-gray-300",children:e(ee,{className:"w-6 h-6"})})}),e("input",{id:"file-upload",type:"file",className:"hidden",onChange:A})]}),t("div",{className:"ml-4 relative",children:[e("div",{className:"text-2xl text-black",children:l.fullName}),e("div",{children:c?e("div",{children:e("input",{value:f,onChange:M,onBlur:N,type:"text","data-testid":"status-input"})}):e("div",{children:e("span",{className:"text-black text-1xl",onDoubleClick:v,children:a?" "+a:" -"})})}),t("div",{className:"text-sm text-black mt-2",children:["Actively looking for jobs: ",l.lookingForAJob?"yes":"no"]}),l.lookingForAJob&&t("div",{className:"text-sm text-black",children:["My professional skills: ",l.lookingForAJobDescription]}),t("div",{className:"text-sm text-black mt-2 mb-1",children:["About me: ",l.aboutMe]}),t("div",{className:"w-120 bg-gray-200 rounded-lg flex items-center hover:bg-gray-300",children:[e(L,{className:"text-black ml-2"}),e("button",{className:"text-black ml-1",onClick:S,children:"Edit profile"})]}),h&&e("div",{className:"fixed w-full h-full top-0 left-0 bg-opacity-50 bg-black z-50 flex justify-center overflow-y-auto",children:e("div",{className:"mt-36",children:e(se,{closeModal:P})})})]})]})};function le(s){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(s)}function re(s){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"}}]})(s)}function ce(s){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z"}}]})(s)}const ie=s=>{const a=o(b),[l,r]=n.useState(0),[c,i]=n.useState(!1),[h,u]=n.useState(!1),f=p(),g=()=>{r(l===0?1:l-1),i(!c)},v=()=>{u(!h)},N=()=>{f(T(s.id))};return t("div",{className:"w-400 pt-5",children:[e("div",{className:"w-400 pt-5",children:t("div",{className:"flex justify-between",children:[t("div",{className:"flex items-center mb-1",children:[e(X,{className:"w-7 h-7 mr-1"}),e("div",{children:a.fullName})]}),t("div",{className:"relative",children:[e("button",{className:"flex items-center",onClick:v,children:e(le,{})}),h&&t("div",{className:"w-100 bg-gray-100 absolute top-0 right-0 p-4 rounded-lg shadow",children:[t("button",{className:"flex items-center",onClick:N,children:[e("div",{className:"mr-1",children:e(E,{})}),e("p",{children:"Delete"})]}),t("button",{className:"flex items-center",onClick:v,children:[e("div",{className:"mr-1",children:e(D,{})}),"Close"]})]})]})]})}),e("hr",{className:"w-400 border-gray-300 mb-1"}),s.message,e("hr",{className:"w-400 border-gray-300 mt-1 mb-2"}),t("div",{className:"grid grid-cols-4",children:[t("button",{onClick:g,className:"h-30 flex items-center justify-center hover:bg-gray-300 hover:rounded-lg",children:[e("div",{className:"mr-1",children:c?e(H,{}):e(O,{})}),e("div",{className:"mr-1",children:"Like"}),s.likesCount+l]}),t("button",{className:"flex items-center justify-center hover:bg-gray-300 hover:rounded-lg",children:[e("div",{className:"mr-1",children:e(re,{})}),e("div",{children:"Comment"})]}),t("button",{className:"flex items-center justify-center hover:bg-gray-300 hover:rounded-lg",children:[e("div",{className:"mr-1",children:e(R,{})}),e("div",{children:"Repost"})]}),t("button",{className:"flex items-center justify-center hover:bg-gray-300 hover:rounded-lg",children:[e("div",{className:"mr-1",children:e(ce,{})}),e("div",{children:"Send"})]})]})]})},ne=C.memo(()=>{const s=p(),a=o(W),l=o(_);let r=a.map(i=>e(ie,{id:i.id,message:i.message,likesCount:i.likesCount},i.id));const c=n.useCallback(i=>{s($(i))},[]);return l?t("div",{className:"col-span-2",children:[e("div",{className:"w-400 p-2.5 flex justify-center",children:e(J,{addPostHandler:c,textButton:"Add post",placeholder:"What's on your mind?"})}),e("div",{className:"mt-2.5 flex",children:e("div",{className:"",children:r})})]}):e(G,{to:"/login"})}),oe=()=>{const s=o(r=>{var c;return(c=r.auth.data)==null?void 0:c.id});console.log(s);const a=o(b),l=p();return n.useEffect(()=>{l(k({userId:s})),l(w({userId:s}))},[l,s]),t("div",{className:"col-span-1",children:[t("div",{className:"mt-5 flex items-center",children:[e("div",{className:"mr-1",children:e(V,{})}),"Contact info:"]}),t("div",{className:"ml-2 flex",children:[t("div",{className:"mr-2",children:[t("div",{className:"text-gray-900 flex items-center",children:[e(q,{className:"mr-1"})," Facebook:"]}),t("div",{className:"text-gray-900 flex items-center",children:[e(U,{className:"mr-1"})," Website:"]}),t("div",{className:"text-gray-900 flex items-center",children:[e(Y,{className:"mr-1"})," Twitter:"]}),t("div",{className:"text-gray-900 flex items-center",children:[e(Z,{className:"mr-1"})," Instagram:"]}),t("div",{className:"text-gray-900 flex items-center",children:[e(K,{className:"mr-1"})," Youtube:"]}),t("div",{className:"text-gray-900 flex items-center",children:[e(Q,{className:"mr-1"})," Github:"]})]}),t("div",{className:"flex flex-col",children:[e("a",{href:`https://${a.contacts.facebook}`,target:"_blank",rel:"noopener noreferrer",children:a.contacts.facebook}),e("a",{href:`https://${a.contacts.website}`,target:"_blank",rel:"noopener noreferrer",children:a.contacts.website}),e("a",{href:`https://${a.contacts.twitter}`,target:"_blank",rel:"noopener noreferrer",children:a.contacts.twitter}),e("a",{href:`https://${a.contacts.instagram}`,target:"_blank",rel:"noopener noreferrer",children:a.contacts.instagram}),e("a",{href:`https://${a.contacts.youtube}`,target:"_blank",rel:"noopener noreferrer",children:a.contacts.youtube}),e("a",{href:`https://${a.contacts.github}`,target:"_blank",rel:"noopener noreferrer",children:a.contacts.github})]})]})]})},de=()=>t("div",{className:"grid grid-cols-3 p-5f",children:[e(oe,{}),e(ne,{})]}),ue=C.memo(()=>t("div",{className:"bg-gray-100 text-custom",style:{gridArea:"c"},children:[e(ae,{}),e(de,{})]}));export{ue as Profile};