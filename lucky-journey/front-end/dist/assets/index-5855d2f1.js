import{r as i,o as r,a as l,b as a,c as n,w as u,h as d,_,i as v}from"./index-0c93d47c.js";const f={__name:"index",setup(h){const e=i([]),s=t=>{e.value.length-t<=3&&o()},o=()=>{d().then(({data:t})=>{t.state&&(e.value=e.value.concat(t.data))})};return r(()=>{o()}),(t,m)=>{const c=l("v-card");return a(),n(c,{style:{height:"100%"},elevation:"2",color:"background"},{default:u(()=>[e.value.length>0?(a(),n(_,{key:0,"video-list":e.value,"hide-close":!0,"next-video":s},null,8,["video-list"])):v("",!0)]),_:1})}}};export{f as default};
