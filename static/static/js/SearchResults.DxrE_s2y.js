import{d as s,r as e,z as t,q as a,c as r,b as l,s as o,t as i,F as c,j as u,o as n}from"./vendor.C8p9HwzL.js";import{p as d,_ as p}from"./index.BOTQRBFr.js";const v={class:"search-results-container"},g={class:"results-count"},h={class:"product-grid"},m=["onClick"],f=["src","alt"],y={class:"product-info"},C={class:"price"},_={class:"intro"},k={class:"category"},q={key:0,class:"no-results"},w=p(s({__name:"SearchResults",setup(s){var p;const w=t(),L=e((null==(p=w.query.q)?void 0:p.toString())||""),j=a((()=>{if(!L.value)return[];const s=L.value.toLowerCase();return d.filter((e=>e.title.toLowerCase().includes(s)||e.intro.toLowerCase().includes(s)||e.category.toLowerCase().includes(s)))}));return(s,e)=>(n(),r("div",v,[l("h2",null,'搜索结果："'+i(L.value)+'"',1),l("div",g,"找到 "+i(j.value.length)+" 个相关商品",1),l("div",h,[(n(!0),r(c,null,u(j.value,(e=>(n(),r("div",{key:e.id,class:"product-item",onClick:t=>s.$router.push({path:"/product",query:{id:e.id.toString()}})},[l("img",{src:e.image,alt:e.title},null,8,f),l("div",y,[l("h3",null,i(e.title),1),l("p",C,"¥"+i(e.price.toFixed(2)),1),l("p",_,i(e.intro),1),l("p",k,"分类："+i(e.category),1)])],8,m)))),128))]),0===j.value.length?(n(),r("div",q,e[0]||(e[0]=[l("p",null,"没有找到相关商品，请尝试其他关键词",-1)]))):o("",!0)]))}}),[["__scopeId","data-v-a7f68005"]]);export{w as default};
