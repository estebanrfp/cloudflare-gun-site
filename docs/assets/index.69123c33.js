import{v as e,m as t,l as n,b as o}from"./vendor.bdb3f120.js";let r;const c={};function a(e){return e.toLowerCase().trim().replace(/(&amp;| & )/g,"-and-").replace(/&(.+?);/g,"").replace(/[\s\W-]+/g,"-")}function s(e,t){return e.length&&(e+="\n"),e+=t}function i(e,t){return new RegExp("::: {"+e+"} :::",t)}function l(e,t,o){const{codePen:r,options:c}=function(e,t){let n="",o="",r=!1,c=0,a=0;const l=e.split("\n");for(const u in l)if(l[u].indexOf("::: {")>=0&&l[u].indexOf("} :::")>=0){var d=l[u].match(i("(.*?)","i"));d&&d.length>1&&(d[1].indexOf("codepen: 'link'")>=0&&(t.showCodepenIcon=!0),d[1].indexOf("hide: 'start'")>=0&&(r=!0,c=a),d[1].indexOf("hide: 'end'")>=0&&(r=!1,t.hides.push({start:c,end:a-1})))}else o=s(o,l[u]),r||(n=s(n,l[u])),a++;return{codeClean:n,codePen:o,editorName:"",options:t}}(e,{showCodepenIcon:!1,tabs:[{tp:"code",title:"Code"}],hides:[]}),a=n.highlightAuto(r).value,l=r.replace(/"/g,"").replace(/'/g,"");return c.showCodepenIcon?`<div class="interactive-module-wrapper">\n            <div class="editor">\n              <span class="options">\n                <form title="Edit on Codepen" action="https://codepen.io/pen/define" method="POST" target="_blank">\n                  <input type="hidden" name="data" value='{"title": "New Pen!", "html": "${l}"}'>\n                  <button class="zmdi zmdi-codepen" type="submit" style="border: 0; background: none;"></button>\n                </form>\n              </span>\n              <code contentEditable="true" class="hljs contentEditor">${a}</code>\n            </div>\n            <iframe class="preview" qqqscrolling="no" frameborder="0"></iframe>\n          </div>`:`<span><a title="Copy to Clipboard" class="zmdi zmdi-copy cp"></a>\n    <pre><code class="hljs ${t}">${a}</code></pre><span>`}function d(e){n.configure({languages:["Markdown","html","CSS","JavaScript","JSON","Bash"]});const o=new t.Renderer;return t.setOptions({renderer:o}),o.heading=(e,t)=>`<h${t} id="${a(e)}" class="uk-h${t>1?t+1:t} tm-heading-fragment">${e} <a href="#${a(e)}">#</a></h${t}>`,o.code=(e,t,n)=>l(e,t),function(e,n){const o=[{name:"",content:"",nextCompare:"",nextconditionsmet:0}];let r=!1;const c=e.split("\n");for(const t in c){let e=!0;const n=c[t].match(i("(.*?)","i"));if(n&&n.length>1){const a=decodeURIComponent(c[t]).match(new RegExp("step: '(.*)'","m"));a&&a.length>1&&(o.push({name:a[1],content:"",nextCompare:"",nextconditionsmet:0}),e=!1),n[1].indexOf("nextstepcompare: 'start'")>=0&&(r=!0,e=!1),n[1].indexOf("nextstepcompare: 'end'")>=0&&(r=!1,e=!1),n[1].indexOf("nextstepcompare: 'none'")>=0&&(o[o.length-1].nextCompare="_NONE_",e=!1)}e&&(r?0!==c[t].indexOf("```")&&(o[o.length-1].nextCompare=s(o[o.length-1].nextCompare,c[t])):o[o.length-1].content=s(o[o.length-1].content,c[t]))}for(const a in o)t(o[a].content,{renderer:n},((e,t)=>{o[a].content=t}));return o}(e=function(e){const t={},n=e.split("\n");for(let r=0;r<n.length;r++){const e=n[r].match(i("(.*?)","i"));if(e&&e.length>1){let c=decodeURIComponent(e[1]).match(new RegExp(".*startblock: '(.*)'.*","m"));if(c&&c.length>1&&(t[c[1]]={active:!0,content:[]},n.splice(r--,1)),c=decodeURIComponent(e[1]).match(new RegExp(".*endblock: '(.*)'.*","m")),c&&c.length>1){try{t[c[1]].active=!1}catch(o){console&&console.error(`!!! Error parsing block: ${c[1]}!!!`,o)}n.splice(r--,1)}c=decodeURIComponent(e[1]).match(new RegExp(".*insertblock: '(.*)'.*","m")),c&&c.length>1&&n.splice(r--,1,...t[c[1]].content)}else for(const o in t)t[o].active&&t[o].content.push(n[r])}return n.join("\n")}(e),o)}function u(e){const t=document.querySelector(".spinner");"load"===e?t.classList.add("fadeout"):"show"===e?t.classList.remove("fadeout"):"hide"===e&&t.classList.add("fadeout")}function p(e,t){for(var n=[],o=t||"html",r=document.querySelector(o);t&&e.parentNode!==r||!t&&e!==r;)e=e.parentNode,n.push(e);return n}async function m(){const e=document.querySelectorAll("#menu li>a");e.forEach((t=>{t.onclick=async n=>{n.preventDefault(),t.parentNode.classList.toggle("open"),e.forEach((e=>e.classList.remove("active"))),t.classList.add("active");const o=n.target.parentNode;let r;o.getElementsByTagName("ul").length>=1?(o.querySelector("ul").classList.toggle("open"),r=o.querySelector("ul a").getAttribute("href"),document.querySelector(".Layout").scrollTop=0):(o.classList.toggle("open"),r=o.querySelector("a").getAttribute("href")),document.querySelectorAll(`#menu a[href="${r}"]`),window.history.pushState("","",r),window.getData()}}))}function h(e,t){const n=document.createElement("ul");for(var o of e){const e=document.createElement("li"),t=document.createElement("a");t.textContent=Object.entries(o)[0][0],t.href=Object.entries(o)[0][1],e.appendChild(t),o.pages&&h(Object.entries(o)[1][1],e),n.appendChild(e)}t.appendChild(n)}navigator.serviceWorker?navigator.serviceWorker.ready.then((e=>e.update())):window.applicationCache&&window.applicationCache.update(),(()=>{const e={},t=document.querySelector("body"),n=document.querySelector(".app-container"),a=document.querySelector("#show-menu-button"),s=JSON.parse(window.localStorage.getItem("theme"))||null,i=Math.random();((e,t)=>{let n;e.constructor===String?(n=document.createElement("div"),n.innerHTML=e):n=e;const o=t||{};if(function e(t,n){const o=t.children;for(const r of o){if(r.getAttribute("var")){const e=r.getAttribute("var").split(".");let t=n;for(;e.length>0;){const n=e.shift();0===e.length?t[n]=r:(t.hasOwnProperty.call(n)||(t[n]={}),t=t[n])}}e(r,n)}}(n,o),e.constructor!==String)return e;if(1===n.childNodes.length)return t||(n.childNodes[0].nodes=o),n.childNodes[0];const r=document.createDocumentFragment(),c=n.childNodes;for(;c.length>0;)r.append?r.append(c[0]):r.appendChild(c[0]);r.nodes=o})(t,e),async function(e){const t=window.localStorage.getItem("ln")||"en";var n=document.querySelector("#menu");const o=await fetch(`https://raw.githubusercontent.com/gundb/gun-site/master/langs/menu-json-${t}.json?nc=${Math.random()}`),r=await o.json();e.ln.innerHTML=t,e.menu.innerHTML="",await h(r.navigation,n),document.querySelector("#ln").addEventListener("click",(async t=>{t.target.innerHTML="en"===t.target.innerHTML?"es":"en",window.localStorage.setItem("ln",t.target.innerHTML),e.ln.innerHTML=t.target.innerHTML;const o=await fetch(`https://raw.githubusercontent.com/gundb/gun-site/master/langs/menu-json-${t.target.innerHTML}.json?nc=${Math.random()}`),r=await o.json();e.menu.innerHTML="",await h(r.navigation,n),m(),window.getData()}));const c=[16,16.8,16.4];document.querySelector("#fz").addEventListener("click",(e=>{c.unshift(c.pop()),document.documentElement.style.setProperty("--font-size",`${c[0]}px`)})),m(),window.getData();const a=`${document.location.pathname+document.location.hash}`,s=document.querySelector(`#menu a[href="${a}"]`);s&&(p(s,"#menu").forEach((e=>e.classList.add("open"))),s.classList.add("active"),s.parentNode.querySelector("ul")&&s.parentNode.querySelector("ul").classList.add("open"))}(e),function(){let e=[];const t=document.getElementById("searchinput");!function(e,t,n){let o;const r=800||1500;document.querySelector(e).onkeyup=()=>{clearTimeout(o),o=setTimeout(t,r)}}("#searchinput",(async()=>{const n=t.value.toUpperCase();document.querySelectorAll("#menu ul").forEach((e=>e.classList.remove("open"))),document.querySelectorAll("#menu ul ul li>a").forEach((o=>{const r=o.textContent;""!==t.value&&0===r.toUpperCase().indexOf(n)&&(e.push(o),setTimeout((()=>{o.classList.add("active"),o.parentNode.querySelector("ul")&&o.parentNode.querySelector("ul").classList.add("open")}),100),p(o.parentNode,"#menu ul").forEach((e=>{e.classList.add("open")})))})),e.length>0&&(e[0].click(),e[0].scrollIntoView({behavior:"smooth"})),e=[],t.value=""}))}(),window.getData=async t=>{let n=window.location.pathname.replace("/docs/","")||"Introduction";const r=window.location.hash;"/"===n&&(n="Todo-Dapp"),u("show");const c=await fetch(`${function(){let e="https://raw.githubusercontent.com/wiki/amark/gun/";switch(window.localStorage.getItem("ln")||"en"){case"en":e="https://raw.githubusercontent.com/wiki/amark/gun/";break;case"es":e="https://raw.githubusercontent.com/wiki/estebanrfp/gun.eco/";break;default:e="https://raw.githubusercontent.com/wiki/amark/gun/"}return e}()+n}.md?nc=${i}`),a=await c.text();if(c.ok){d(a).length>1?(e.layout.innerHTML='\n          <div class="slider">\n            <ul class="stepwizard"></ul>\n            <div class="slides"></div>\n            <div class="controls">\n              <button class="goToPrev"><</button>\n              <button class="goToNext">></button>\n            </div>\n          </div> \n        ',d(a).forEach((e=>{document.querySelector(".slides").innerHTML+=`<div class="slide"><h2 id="${e.name.replace(/\s/g,"")}">${e.name}</h2>${e.content}</div>`,document.querySelector(".stepwizard").innerHTML+='<li class="stepwizard-step">'})),function(){const e=document.querySelectorAll(".slides .slide"),t=document.querySelectorAll(".stepwizard .stepwizard-step"),n=document.querySelector(".goToPrev"),o=document.querySelector(".goToNext");let r=0;function c(c){e[r].className="slide prev",c===e.length-1?(o.classList.add("opacity"),o.disabled=!0):(o.classList.remove("opacity"),o.disabled=!1),0===c?(n.classList.add("opacity"),n.disabled=!0):(n.classList.remove("opacity"),n.disabled=!1),r=c,t[r].classList.add("active"),e[r].className="slide current"}n.addEventListener("click",(()=>c(r-1))),o.addEventListener("click",(()=>c(r+1))),c(0)}()):e.layout.innerHTML=`<h2 id="${d(a)[0].name.replace(/\s/g,"")}">${d(a)[0].name}</h2>${d(a)[0].content}`,document.querySelectorAll(".Layout .interactive-module-wrapper").forEach((e=>{const t=o.edit(e.querySelector(".contentEditor")),n=e.querySelector(".preview");function r(){n.contentWindow.document.open("text/htmlreplace"),n.contentWindow.document.write(`<style>\n          body {color: #fff}\n          * { border: 0; outline: none;}\n          button, input[type=button], input[type=submit]  { cursor: pointer; }\n          button:hover, input[type=button]:hover, input[type=submit]:hover { opacity: 0.9; } \n          input, button { border-left: 8px solid #afafaf87; margin: 4px; line-height: 24px; padding-left: .5rem; }\n          </style>${t.getValue()}`),n.contentWindow.document.close()}t.getSession().setMode("ace/mode/html"),t.$blockScrolling=1/0,t.on("input",(()=>r())),r()})),r&&document.querySelector(".Layout").querySelector(r)&&(document.querySelector(".Layout").querySelector(r).classList.add("blink_me"),setTimeout((()=>{document.querySelector(".Layout").querySelector(r).scrollIntoView({behavior:"smooth"})}),10));const t=document.querySelectorAll(`#menu a[href="${document.location.pathname}"]`);t.length>0?document.querySelector(".title").innerHTML=t[0].innerText:document.querySelector(".title").innerHTML=document.location.pathname,document.querySelectorAll(".cp").forEach((e=>e.addEventListener("click",(e=>{const t=e.target.parentNode,n=t.querySelector("code").innerText,o=t.querySelector("code").parentNode;return navigator.clipboard.writeText(n).then((()=>{o.classList.add("blink_copy"),setTimeout((()=>o.classList.remove("blink_copy")),600)}),(()=>console.log("Copy permissions denied."))),!1})))),document.querySelectorAll(".Layout a").forEach((e=>e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href")||e.target.parentNode.getAttribute("href")||"";""!==t&&(-1!==t.indexOf("http")?window.open(t,"_blank"):(window.history.pushState({tpl:t},"",t),window.getData()))}))))}else e.layout.innerHTML="the translation will be available soon ...";u("hide")},function(e,t){const n=e;let o,r,c,a,s,i,l,d;const u=t;n.addEventListener("touchstart",(e=>{const t=e.changedTouches[0];o="none",r="none",c=t.pageX,a=t.pageY,d=(new Date).getTime(),u(e,"none","start",r,0)}),{passive:!0}),n.addEventListener("touchmove",(e=>{const t=e.changedTouches[0];s=t.pageX-c,i=t.pageY-a,Math.abs(s)>Math.abs(i)?(o=s<0?"left":"right",u(e,o,"move",r,s)):(o=i<0?"up":"down",u(e,o,"move",r,i))}),{passive:!0}),n.addEventListener("touchend",(e=>{l=(new Date).getTime()-d,l<=500&&(Math.abs(s)>=150&&Math.abs(i)<=100||Math.abs(i)>=150&&Math.abs(s)<=100)&&(r=o),u(e,o,"end",r,"left"===o||"right"===o?s:i)}),{passive:!0})}(document,((e,t,o,r,c)=>{"move"===o&&"left"===t&&(a.checked=!1,n.classList.remove("show-nav-left")),"right"===t&&(a.checked=!0,n.classList.add("show-nav-left"))})),document.querySelector("#show-menu-button").addEventListener("change",(()=>{n.classList.toggle("show-nav-left")})),document.querySelector("#col").addEventListener("click",(async()=>{await function(e,t){if(!t)return e();if(void 0===r){const e=document.createElement("link").relList;r=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in c)return;c[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":r,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Themes.e4476f94.js")),void 0).then((e=>e.default()))})),s&&(document.documentElement.style.setProperty("--background-color",s.background),document.documentElement.style.setProperty("--highlight-color",s.highlight),document.documentElement.style.setProperty("--text-color",s.text),document.documentElement.style.setProperty("--menu-width",s.menuWidth))})(),function(t={}){const{immediate:n=!1,onNeedRefresh:o,onOfflineReady:r}=t;let c;"serviceWorker"in navigator&&(c=new e("/sw.js",{scope:"/"}),c.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==r||r()})),c.register({immediate:n}).then((e=>e)))}({onNeedRefresh(){console.log("New content available, click on reload button to update."),window.location.reload()},onOfflineReady(){console.log("show a ready to work offline to user")}});
