var w=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var j=(e,s,a)=>s in e?w(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,g=(e,s)=>{for(var a in s||(s={}))I.call(s,a)&&j(e,a,s[a]);if(b)for(var a of b(s))M.call(s,a)&&j(e,a,s[a]);return e};import{j as t,r}from"./index-1.0.6.js";import{d as R,e as k,c as _,_ as C}from"./bi-910-9.js";import{a as Z,h as F,s as A,c as z}from"./bi-40-17.js";import{Z as E,I as L}from"./bi-592-18.js";import P from"./bi-630-11.js";import"./bi-251-16.js";function T({step:e,active:s,className:a}){return t.jsx("div",{className:`d-in-b ${a}`,children:t.jsxs("div",{className:"flx flx-center",children:[Array(s).fill(0).map((m,o)=>t.jsxs(r.Fragment,{children:[t.jsx("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:o+1}),s-1!==o&&t.jsx("div",{className:"btcd-stp-line stp-line-a"})]},`stp-${o+21}`)),e-s!==0&&t.jsx("div",{className:"btcd-stp-line"}),Array(e-s).fill(0).map((m,o)=>t.jsxs(r.Fragment,{children:[t.jsx("div",{className:"btcd-stp flx flx-center txt-center",children:o+s+1}),e-s-1!==o&&t.jsx("div",{className:"btcd-stp-line "})]},`stp-${o+23}`))]})})}function K({formFields:e,setFlow:s,flow:a,allIntegURL:m}){const o=R(),{formID:p}=k(),[f,l]=r.useState(!1),[c,h]=r.useState(1),[v,i]=r.useState({show:!1}),[u,y]=r.useState(0),[n,d]=r.useState({name:"Zoho CRM",type:"Zoho CRM",clientId:"",clientSecret:"",module:"",layout:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}});r.useEffect(()=>{window.opener&&Z("zohoCRM")},[]);const N=()=>{A({flow:a,setFlow:s,allIntegURL:m,conf:n,history:o,setIsLoading:l,setSnackbar:i})},S=x=>{if(!z(n)){i({show:!0,msg:C("Please map mandatory fields","bit-integrations")});return}n.module&&n.layout&&n.field_map.length>0&&h(x)};return document.querySelector(".btcd-s-wrp").scrollTop=0,t.jsxs("div",{children:[t.jsx(_,{snack:v,setSnackbar:i}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(T,{step:3,active:c})}),t.jsx(P,{formID:p,crmConf:n,setCrmConf:d,step:c,setstep:h,isLoading:f,setIsLoading:l,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:g({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(E,{tab:u,settab:y,formID:p,formFields:e,handleInput:x=>F(x,u,n,d,p,l,i),crmConf:n,setCrmConf:d,isLoading:f,setIsLoading:l,setSnackbar:i}),t.jsxs("button",{onClick:()=>S(3),disabled:n.module===""||n.layout===""||n.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[C("Next","bit-integrations")," "," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(L,{step:c,saveConfig:()=>N(),isLoading:f,dataConf:n,setDataConf:d,formFields:e})]})}export{K as default};