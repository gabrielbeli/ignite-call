const __vite__fileDeps=["assets/axe-dH3XyQ3P.js","assets/_commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as S}from"./iframe-o5UiKGPo.js";import"../sb-preview/runtime.js";const{global:f}=__STORYBOOK_MODULE_GLOBAL__,{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__;var o="storybook/a11y",y=`${o}/result`,L=`${o}/request`,d=`${o}/running`,A=`${o}/error`,T=`${o}/manual`,r={RESULT:y,REQUEST:L,RUNNING:d,ERROR:A,MANUAL:T},{document:g}=f,a=U.getChannel(),_=!1,l,R={config:{},options:{}},v=async(n,e=R)=>{e!=null&&e.manual||await i(n,e)},i=async(n,e=R)=>{l=n;try{if(!_){_=!0,a.emit(r.RUNNING);let t=(await S(()=>import("./axe-dH3XyQ3P.js").then(N=>N.a),__vite__mapDeps([0,1]))).default,{element:O="#storybook-root",config:s,options:c={}}=e,E=g.querySelector(O);if(!E)return;t.reset(),s&&t.configure(s);let m=await t.run(E,c),u=JSON.parse(JSON.stringify(m));l===n?a.emit(r.RESULT,u):(_=!1,i(l))}}catch(t){a.emit(r.ERROR,t)}finally{_=!1}};a.on(r.REQUEST,v);a.on(r.MANUAL,i);
