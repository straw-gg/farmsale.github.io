import{d as s,r as e,z as a,q as t,c as l,b as r,s as o,t as i,F as c,j as n,o as u}from"./vendor-CJcujQ9O.js";import{p as d,_ as v}from"./index-BxrMXL9Q.js";const p={class:"search-results-container"},g={class:"results-count"},m={class:"product-grid"},f=["src","alt"],h={class:"product-info"},y={class:"price"},_={class:"intro"},w={class:"category"},C={key:0,class:"no-results"},L=v(s({__name:"SearchResults",setup(s){var v;const L=a(),j=e((null==(v=L.query.q)?void 0:v.toString())||""),q=t((()=>{if(!j.value)return[];const s=j.value.toLowerCase();return d.filter((e=>e.title.toLowerCase().includes(s)||e.intro.toLowerCase().includes(s)||e.category.toLowerCase().includes(s)))}));return(s,e)=>(u(),l("div",p,[r("h2",null,'搜索结果："'+i(j.value)+'"',1),r("div",g,"找到 "+i(q.value.length)+" 个相关商品",1),r("div",m,[(u(!0),l(c,null,n(q.value,(s=>(u(),l("div",{key:s.id,class:"product-item"},[r("img",{src:s.image,alt:s.title},null,8,f),r("div",h,[r("h3",null,i(s.title),1),r("p",y,"¥"+i(s.price.toFixed(2)),1),r("p",_,i(s.intro),1),r("p",w,"分类："+i(s.category),1)])])))),128))]),0===q.value.length?(u(),l("div",C,e[0]||(e[0]=[r("p",null,"没有找到相关商品，请尝试其他关键词",-1)]))):o("",!0)]))}}),[["__scopeId","data-v-458da790"]]);export{L as default};
