(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(7),i=t.n(r),c=(t(12),t(2)),a=t(3),s=t(5),l=t(4),h=t(0),d=function(e){var n=e.id,t=e.name,o=e.email;return Object(h.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),Object(h.jsx)("h1",{children:t}),Object(h.jsx)("p",{children:o})]})},u=function(e){var n=e.robots;return Object(h.jsx)("div",{children:n.map((function(e,t){return Object(h.jsx)(d,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},f=function(e){e.searchfield;var n=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},b=(t(14),function(e){return Object(h.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"500px"},children:e.children})}),j=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(a.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),t}(o.Component),v=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return console.log(o),n.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f2",children:"Robofriends"}),Object(h.jsx)(f,{searchChange:this.onSearchChange}),Object(h.jsx)(b,{children:Object(h.jsx)(j,{children:Object(h.jsx)(u,{robots:o})})})]}):Object(h.jsx)("h1",{children:"Loading"})}}]),t}(o.Component),g=(t(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.fa5f0969.chunk.js.map