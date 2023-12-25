(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(667),d=n.n(c),s=new URL(n(120),n.b),l=new URL(n(647),n.b),p=i()(r()),u=d()(s),m=d()(l);p.push([e.id,`@font-face {\n  font-family: "Fancy";\n  src: url(${u});\n}\n\n@font-face {\n  font-family: "Ubuntu";\n  src: url(${m});\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: "Ubuntu", sans-serif;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n::backdrop {\n  backdrop-filter: blur(4px);\n}\n\n.selected {\n  background-color: #CCC;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 100px 1fr;\n  height: inherit;\n}\n\n.sidebar, \n.main,\n.tasks, \n.projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  padding-left: 50px;\n  font-size: 2.8rem;\n  font-weight: bold;\n  font-family: "Fancy", sans-serif;\n  color: white;\n  background-color: #1992d4;\n}\n\n.sidebar {\n  gap: 15px;\n  background-color: #ddd;\n  padding: 20px;\n}\n\n.main {\n  gap: 15px;\n}\n\n.tasks {\n  gap: 12px;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\n.projects {\n  gap: 5px;\n}\n\n.app-item {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 30px 100px;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n}\n\n.project-item {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 30px 150px 1fr;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n}\n\n.project-item > img:last-child {\n  justify-self: end;\n  visibility: hidden;\n}\n\n.app-item:hover,\n.project-item:hover {\n  border-radius: 5px;\n  background-color: #ccc;\n}\n\nimg[src$="svg"] {\n  width: 25px;\n  height: 25px;\n}\n\n.add-project-input {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.add-project-input-field {\n  padding: 0 10px;\n  font-size: 1.1rem;\n  border: 0;\n  border-radius: 5px;\n  grid-column: 1 / 3;\n  height: 40px;\n}\n\n.add-project-input-field:valid {\n  border: 2px solid rgb(2, 174, 2);\n}\n\nbutton {\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n  border: 0;\n  font-size: 1.1rem;\n  font-family: inherit;\n}\n\nbutton:active {\n  transform: translateY(4px);\n}\n\n.add-btn, .cancel-btn {\n  justify-self: center;\n}\n\n.add-btn {\n  background-color: rgb(0, 179, 255);\n}\n\n.cancel-btn, .remove-btn {\n  background-color: rgb(243, 59, 90);\n}\n\n.edit-btn, .save-btn {\n  background-color: rgb(6, 149, 27);\n}\n\n.main {\n  background-color: beige;\n  padding: 30px 100px;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  width: 600px;\n}\n\n#todo-form label {\n  font-size: 1.3rem;\n}\n\n#todo-form input, \n#todo-form textarea,\n#todo-form select {\n  border: 1px solid rgb(221, 221, 221);\n  font-size: 1rem;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-family: inherit;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n  box-shadow: 4px 4px 5px rgb(220, 220, 220);\n}\n\ntextarea {\n  resize: none;\n}\n\n#todo-form select {\n  background-color: #fff;\n}\n\n.task-title,\n.dscrp,\n.due-date,\n.priority {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n} \n\n.form-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.tasks > div {\n  display: grid;\n  grid-template-columns: 20px repeat(5, 150px);\n  justify-items: center;\n  align-items: center;\n}\n\ndialog {\n  border-radius: 15px;\n  padding: 32px;\n  border: 0;\n}`,""]);const f=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},120:(e,t,n)=>{e.exports=n.p+"6191473aa8f63e3a62f7.woff2"},647:(e,t,n)=>{e.exports=n.p+"2f02effe392a63dc07a5.woff2"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),d=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=n.p+"365f3e7f182c9f913994.svg",v=n.p+"3cffe9a515498593b872.svg",h=n.p+"451d9800367e5585087a.svg",x=n.p+"30ef74febcd1798d958d.svg",b=class{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}},y=class{constructor(e,t,n=[],o=!1){this.name=e,this.index=t,this.toDos=n,this.selected=o}#e(){localStorage.setItem(this.name,JSON.stringify(this))}createToDo(e){const t=new b(e.get("title"),e.get("dscrp"),e.get("due-date"),e.get("priority"));this.toDos.push(t),this.#e()}editToDo(e,t){this.toDos[e].title=t.get("title"),this.toDos[e].description=t.get("dscrp"),this.toDos[e].dueDate=t.get("due-date"),this.toDos[e].priority=t.get("priority"),this.#e()}removeToDo(e){this.toDos.splice(e,1),this.#e()}},E=function(){const e=[];return{projects:e,initializeApp:function(){const t=new y("Default Project",0);t.selected=!0,localStorage.setItem(t.name,JSON.stringify(t)),e.push(t)},createProject:function(t,n){const o=new y(t.value,n);localStorage.setItem(t.value,JSON.stringify(o)),e.push(o)},removeProject:function(t){localStorage.removeItem(e[t].name),e.splice(t,1)}}}();(()=>{function e(){E.projects.forEach(((n,o)=>function(n,o){const r=document.createElement("div"),a=new Image,i=document.createElement("div"),c=new Image;a.src=g,a.alt="Project Icon",i.textContent=n.name,c.src=h,c.alt="Remove Icon",r.classList.add("project-item"),r.dataset.index=`${o}`,r.append(a,i,c),f.appendChild(r),r.addEventListener("click",t),c.addEventListener("click",(t=>{t.stopPropagation(),function(t,n){t.selected&&(j.textContent="",k.textContent="",w.textContent=""),E.removeProject(n),f.textContent="",e()}(n,o)})),r.addEventListener("mouseover",(()=>c.style.visibility="visible")),r.addEventListener("mouseout",(()=>c.style.visibility="hidden")),c.addEventListener("mouseover",(()=>c.src=x)),c.addEventListener("mouseout",(()=>c.src=h))}(n,o)))}function t(e){w.hasChildNodes()||w.append(S,D);const t=E.projects[e.currentTarget.dataset.index];E.projects.forEach((e=>{e.selected=!1,localStorage.setItem(e.name,JSON.stringify(e))})),t.selected=!0,localStorage.setItem(t.name,JSON.stringify(t)),j.textContent=t.name,k.textContent="",n(t)}function n(e){e.toDos.forEach(((e,t)=>function(e,t){const o=document.createElement("div"),c=document.createElement("input"),d=document.createElement("label"),l=document.createElement("div"),p=document.createElement("div"),u=document.createElement("button"),m=document.createElement("button");a(c,{name:"task",type:"checkbox",id:`task-${t}`}),d.setAttribute("for",`task-${t}`),d.textContent=e.title,l.textContent=e.dueDate,p.textContent=e.priority,u.textContent="Remove",m.textContent="Edit",u.classList.add("remove-btn"),m.classList.add("edit-btn"),o.append(c,d,l,p,u,m),k.append(o),u.addEventListener("click",(()=>function(e){let t;E.projects.forEach((n=>{n.selected&&(n.removeToDo(e),t=n)})),k.textContent="",n(t)}(t))),m.addEventListener("click",(()=>function(e,t){s.textContent="",r(s,"save",t,e.title,e.description,e.dueDate,e.priority),i(s)}(e,t)))}(e,t)))}function o(){p.removeChild(p.lastChild),p.append(b)}function r(e,t,o=null,r="",i="",c="",d=""){const s=document.createElement("form"),l=document.createElement("div"),p=document.createElement("label"),u=document.createElement("input"),m=document.createElement("div"),f=document.createElement("label"),g=document.createElement("textarea"),v=document.createElement("div"),h=document.createElement("label"),x=document.createElement("input"),b=document.createElement("div"),y=document.createElement("label"),C=document.createElement("select"),L=document.createElement("div"),j=document.createElement("button");if(p.textContent="Title*:",f.textContent="Description*:",h.textContent="Due date*:",y.textContent="Priority*:",j.textContent="Cancel",["--Please select task's priority--","low","medium","urgent"].forEach(((e,t)=>{const n=document.createElement("option");n.textContent=e,0===t&&(n.value=""),C.append(n)})),s.id="todo-form",p.setAttribute("for","title"),a(u,{type:"text",name:"title",id:"title",placeholder:"Grocery",required:"",value:`${r}`}),f.setAttribute("for","dscrp"),a(g,{name:"dscrp",id:"dscrp",placeholder:"Buy bread, etc.",rows:"5",required:""}),g.value=i,h.setAttribute("for","due-date"),a(x,{type:"date",name:"due-date",id:"due-date",required:"",value:`${c}`}),y.setAttribute("for","priority"),a(C,{name:"priority",id:"priority",required:""}),C.value=d,j.setAttribute("type","button"),l.classList.add("task-title"),m.classList.add("dscrp"),v.classList.add("due-date"),b.classList.add("priority"),L.classList.add("form-buttons"),j.classList.add("cancel-btn"),l.append(p,u),m.append(f,g),v.append(h,x),b.append(y,C),L.append(j),s.append(l,m,v,b,L),e.append(s),"add"===t){const t=document.createElement("button");t.textContent="Add",t.classList.add("add-btn"),L.insertBefore(t,j),t.addEventListener("click",(t=>{s.checkValidity()&&(t.preventDefault(),function(e){let t;E.projects.forEach((n=>{n.selected&&(n.createToDo(e),t=n)})),k.textContent="",n(t)}(new FormData(s)),s.reset(),e.close())}))}else{const t=document.createElement("button");t.textContent="Save",t.classList.add("save-btn"),L.insertBefore(t,j),t.addEventListener("click",(t=>{if(s.checkValidity()){let r;t.preventDefault();const a=new FormData(s);E.projects.forEach((e=>{e.selected&&(e.editToDo(o,a),r=e)})),s.reset(),e.close(),k.textContent="",n(r)}}))}j.addEventListener("click",(()=>{s.reset(),function(e){e.close()}(e)}))}function a(e,t){Object.keys(t).forEach((n=>{e.setAttribute(n,t[n])}))}function i(e){e.showModal()}const c=document.getElementById("content"),d=document.createElement("dialog"),s=document.createElement("dialog"),l=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),f=document.createElement("div"),b=document.createElement("div"),C=new Image;C.src=v,C.alt="Add Project Icon";const L=document.createElement("div"),j=document.createElement("div"),k=document.createElement("div"),w=document.createElement("div"),S=new Image;S.src=v,S.alt="Add Task icon";const D=document.createElement("div");r(d,"add"),l.classList.add("header"),p.classList.add("sidebar"),u.classList.add("main"),m.classList.add("title"),f.classList.add("projects"),b.classList.add("app-item"),j.classList.add("title"),k.classList.add("tasks"),w.classList.add("app-item"),l.textContent="ToDo List",m.textContent="Projects",L.textContent="Add Project",D.textContent="Add Task",j.textContent="Default Project",b.append(C,L),w.append(S,D),p.append(m,f),c.append(d,s,l,p,u),p.append(b),u.append(j,k,w),b.addEventListener("click",(function(){p.removeChild(b);const t=document.createElement("div"),n=document.createElement("input"),r=document.createElement("button"),a=document.createElement("button");t.classList.add("add-project-input"),n.classList.add("add-project-input-field"),n.required=!0,r.classList.add("add-btn"),a.classList.add("cancel-btn"),r.textContent="Add",a.textContent="Cancel",t.append(n,r,a),p.append(t),r.addEventListener("click",(()=>{var t;n.checkValidity()&&(t=n,f.contains(f.lastChild)?E.createProject(t,+f.lastChild.dataset.index+1):E.createProject(t,0),f.textContent="",e(),o())})),a.addEventListener("click",o)})),w.addEventListener("click",(()=>i(d))),0==localStorage.length?(E.initializeApp(),e()):function(){let t;Object.keys(localStorage).forEach((e=>{const t=JSON.parse(localStorage.getItem(e)),n=new y(t.name,t.index,t.toDos,t.selected);E.projects.push(n)})),E.projects.sort(((e,t)=>e.index-t.index)),E.projects.forEach((e=>{e.selected&&(t=e)})),void 0===t&&(E.projects[0].selected=!0,t=E.projects[0]),e(),j.textContent=t.name,n(t)}()})()})()})();