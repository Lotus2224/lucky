import{r as i,k as S,l as I,o as $,a,b as c,c as _,w as e,M as G,N as U,f as t,g as u,O as q,q as z,z as A,A as D,F as E,i as O,x as P,t as T}from"./index-0c93d47c.js";const K={__name:"index",setup(j){const l=i([]),d=i([]),n=i([0]),r=S(()=>n.value>-1?l.value[n.value]:null),m=()=>{G().then(({data:o})=>{if(l.value=o.data,l.value.length==0){n.value=[];return}n.value>-1&&n.value<l.value.length||l.value.length>0&&(n.value=[0])})},p=()=>{r.value!=null&&U(r.value.id).then(({data:o})=>{d.value=o.data})},x=i(!1),f=i(null),k=o=>{f.value=l.value[o],x.value=!0};return m(),I(r,()=>{p()}),$(()=>{p()}),(o,h)=>{const w=a("v-list-subheader"),g=a("v-icon"),b=a("v-btn"),y=a("v-divider"),F=a("v-list-item-title"),V=a("v-list-item"),C=a("VListSubheader"),L=a("v-list"),B=a("v-navigation-drawer"),M=a("v-main"),N=a("VLayout");return c(),_(N,null,{default:e(()=>[t(B,{permanent:"",width:200},{default:e(()=>[t(L,{mandatory:"",lines:!1,nav:"",selected:n.value,"onUpdate:selected":h[0]||(h[0]=s=>n.value=s)},{default:e(()=>[t(w,{class:"text-subtitle-1"},{default:e(()=>[u("我的收藏夹")]),_:1}),t(q,{"edit-data":f.value,"close-event":m},{default:e(({props:s})=>[t(b,z(s,{block:"",class:"mb-2",color:"white",variant:"outlined"}),{default:e(()=>[t(g,null,{default:e(()=>[u("mdi-plus")]),_:1}),u(" 添加收藏夹")]),_:2},1040)]),_:1},8,["edit-data"]),t(y),(c(!0),A(E,null,D(l.value,(s,v)=>(c(),_(V,{variant:"tonal",active:n.value==v,key:v,value:v,color:"primary"},{append:e(()=>[t(b,{variant:"plain",icon:"",density:"compact",onClick:H=>k(v)},{default:e(()=>[t(g,null,{default:e(()=>[u("mdi-pen")]),_:1})]),_:2},1032,["onClick"])]),default:e(()=>[t(F,{textContent:T(s.name)},null,8,["textContent"])]),_:2},1032,["active","value"]))),128)),l.value.length==0?(c(),_(C,{key:0},{default:e(()=>[u("您没有收藏夹")]),_:1})):O("",!0)]),_:1},8,["selected"])]),_:1}),t(M,{class:"ml-1"},{default:e(()=>[t(P,{"video-list":d.value},null,8,["video-list"])]),_:1})]),_:1})}}};export{K as default};