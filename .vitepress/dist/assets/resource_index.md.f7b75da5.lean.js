import{_ as e,h as a,o as t,c as r,a as i,t as o,p as s,i as n,j as l,w as c,u,k as p,F as d,l as g,n as f,m as h,q as v,s as m,v as y,f as w}from"./app.f8e2066b.js";const j={class:"PartnerHero"},b={class:"title"},_=(e=>(s("data-v-3a74273c"),e=e(),n(),e))((()=>i("p",{class:"lead"}," 一些常用的资源 ",-1)));var k=e(a({props:{title:{default:"外部资源"}},setup:e=>(a,s)=>(t(),r("div",j,[i("h1",b,o(e.title),1),_]))}),[["__scopeId","data-v-3a74273c"]]),L=JSON.parse('[{"name":"vuejs","logo":"","flipLogo":true,"intro":"渐进式 JavaScript 框架，易用、灵活、高效","description":[],"proficiencies":["Vue"],"region":[],"location":[],"website":{"text":"v3.cn.vuejs.org","url":"https://v3.cn.vuejs.org/"},"contact":"","hiring":"","platinum":true},{"name":"layui","logo":"","flipLogo":true,"intro":"开源模块化前端 UI 组件库， 基于浏览器端原生态模式，面向全层次的前后端开发者，易上手且开源免费的 Web 界面组件库","description":[],"proficiencies":["layui"],"region":[],"location":[],"website":{"text":"www.layuion.com","url":"https://www.layuion.com/"},"contact":"","hiring":"","platinum":true},{"name":"jquery","logo":"","flipLogo":true,"intro":"jQuery是一个快速、简洁的JavaScript框架","description":[],"proficiencies":["jquery"],"region":[],"location":[],"website":{"text":"jquery.cuishifeng.cn","url":"https://jquery.cuishifeng.cn/"},"contact":"","hiring":"","platinum":true},{"name":"uniapp","logo":"","flipLogo":true,"intro":"uni-app 是一个使用 Vue.js (opens new window)开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。","description":[],"proficiencies":["uniapp"],"region":[],"location":[],"website":{"text":"uniapp.dcloud.io","url":"https://uniapp.dcloud.io/"},"contact":"","hiring":"","platinum":true}]');function x(e){return`/images/resource/${function(e){return e.toLowerCase().replace(/\s+/g,"")}(e)}-hero.jpg`}function I(e,a){return a&&(e=e.replace(/(\.\w+$)/,"-dark$1")),`/images/resource/${e}`}const P={class:"info"},q=["src"],S=["src"],$={key:2},J={key:3},O={key:4},Q={class:"proficiency"},B=["src","alt"];var M=e(a({props:{data:null,hero:{type:Boolean},page:{type:Boolean}},setup(e){const{name:a,intro:s,region:n,logo:v,proficiencies:m,flipLogo:y,website:w}=e.data;return(n,j)=>(t(),l(h(e.page?"div":"a"),{class:f(["partner-card",{hero:e.hero,page:e.page,flipLogo:u(y)}]),href:u(w).url,target:"_blank"},{default:c((()=>[i("div",P,[e.hero&&u(y)?(t(),r("img",{key:0,class:"logo dark",src:u(I)(u(v),u(y))},null,8,q)):p("",!0),e.hero?(t(),r("img",{key:1,class:"logo",src:u(I)(u(v))},null,8,S)):(t(),r("h3",$,o(u(a)),1)),i("p",null,o(u(s)),1),e.hero?(t(),r("h4",J,"Proficiencies")):p("",!0),e.hero?(t(),r("p",O,[(t(!0),r(d,null,g(u(m),(e=>(t(),r("span",Q,o(e),1)))),256))])):p("",!0)]),i("img",{class:"big",src:u(x)(u(a)),alt:u(a)+" hero"},null,8,B)])),_:1},8,["class","href"]))}}),[["__scopeId","data-v-040c9e47"]]);const V={class:"PartnerList"};var W=e(a({props:{filter:null},setup(e){const a=v((()=>e.filter?L.filter(e.filter):L));return(e,i)=>(t(),r("div",V,[(t(!0),r(d,null,g(u(a),(e=>(t(),l(M,{key:e.name,data:e},null,8,["data"])))),128))]))}}),[["__scopeId","data-v-012eb111"]]);const A={class:"join-container"};var C=e({},[["render",function(e,a){return t(),r("div",A)}],["__scopeId","data-v-d9b75876"]]);const F={class:"PartnerPage"},H={class:"featured"};var N=e(a({setup(e){let a=m(null);return y((()=>{const e=L.filter((e=>e.platinum));a.value=e[Math.floor(Math.random()*e.length)]})),(e,a)=>(t(),r("div",F,[w(k),i("div",H,[w(W,{filter:e=>e.platinum},null,8,["filter"])]),w(C)]))}}),[["__scopeId","data-v-a614d572"]]);const U='{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"resource/index.md"}',z={},D=Object.assign(z,{setup:e=>(e,a)=>(t(),r("div",null,[w(N)]))});export{U as __pageData,D as default};