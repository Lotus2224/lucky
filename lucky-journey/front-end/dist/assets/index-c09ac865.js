import{r as d,u as $,l as G,a as o,b as i,c as p,w as t,f as n,g as l,z as b,A as T,F as x,i as z,t as m,e as A,P as D,K as E,n as K,Q as M,R as O}from"./index-0c93d47c.js";const P=A("div",{class:"float-none"},null,-1),q={__name:"index",setup(Q){const c=d("fans"),v=d([]),s=d({show:!1,text:""}),r=d({page:1,pages:0}),V=$(),_=()=>{v.value=[],D(c.value,V.lookId,r.value.page).then(({data:u})=>{u.state&&(v.value=u.data.records)})},h=u=>{O(u).then(({data:a})=>{s.value={text:a.message,show:!0},a.state&&_()})};return G(()=>r.value.page,()=>{_()},{immediate:!0}),(u,a)=>{const w=o("v-card-title"),f=o("v-tab"),C=o("v-tabs"),g=o("v-divider"),y=o("v-icon"),L=o("v-avatar"),k=o("v-btn"),N=o("v-list-item"),B=o("v-list"),F=o("VCard"),I=o("v-pagination"),U=o("v-snackbar"),S=o("v-card");return i(),p(S,null,{default:t(()=>[n(w,{inset:"",class:"float-left"},{default:t(()=>[l("粉丝")]),_:1}),P,n(C,{modelValue:c.value,"onUpdate:modelValue":[a[0]||(a[0]=e=>c.value=e),_],"align-tabs":"end"},{default:t(()=>[n(f,{value:"follows"},{default:t(()=>[l("关注")]),_:1}),n(f,{value:"fans"},{default:t(()=>[l("粉丝")]),_:1})]),_:1},8,["modelValue"]),n(g),n(B,{lines:"two"},{default:t(()=>[(i(!0),b(x,null,T(v.value,e=>(i(),b(x,null,[n(N,{to:`/user?lookId=${e.id}`,title:e.nickName,subtitle:e.description||"这个人很懒，没有任何描述"},{prepend:t(()=>[n(L,{image:e.avatar?E(K)(e.avatar):"/logo.png",color:e.sex?"blue":"pink"},{default:t(()=>[n(y,{color:"white"},{default:t(()=>[l(m(e.sex?"mdi-human-male":"mdi-human-female"),1)]),_:2},1024)]),_:2},1032,["image","color"])]),append:t(()=>[n(k,{onClick:[a[1]||(a[1]=M(()=>{},["stop"])),R=>h(e.id)],color:"grey-lighten-1",variant:"text"},{default:t(()=>[l(m(c.value=="fans"?e.each?"取消互关":"互相关注":"取消关注"),1)]),_:2},1032,["onClick"])]),_:2},1032,["to","title","subtitle"]),n(g)],64))),256))]),_:1}),v.value.length==0?(i(),p(F,{key:0,height:"300px",class:"ma-4",variant:"tonal",style:{"text-align":"center","line-height":"300px"}},{default:t(()=>[l(" 好像没有什么内容呢 ")]),_:1})):r.value.pages>1?(i(),p(I,{key:1,modelValue:r.value.page,"onUpdate:modelValue":a[2]||(a[2]=e=>r.value.page=e),length:r.value.pages},null,8,["modelValue","length"])):z("",!0),n(U,{modelValue:s.value.show,"onUpdate:modelValue":a[4]||(a[4]=e=>s.value.show=e),color:s.value.color},{actions:t(()=>[n(k,{color:"blue",variant:"text",onClick:a[3]||(a[3]=e=>s.value.show=!1)},{default:t(()=>[l(" 了解 ")]),_:1})]),default:t(()=>[l(m(s.value.text)+" ",1)]),_:1},8,["modelValue","color"])]),_:1})}}};export{q as default};