(this["webpackJsonpphoto-album"]=this["webpackJsonpphoto-album"]||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/create.478887b3.svg"},14:function(e,a,t){e.exports=t.p+"static/media/upload.04dcba43.svg"},15:function(e,a,t){e.exports=t.p+"static/media/search.a87eca9e.svg"},16:function(e,a,t){e.exports=t.p+"static/media/album-icon.d1218363.svg"},17:function(e,a,t){e.exports=t.p+"static/media/photo-icon.c195fcb7.svg"},18:function(e,a,t){e.exports=t.p+"static/media/share-icon.0060a704.svg"},21:function(e,a,t){e.exports=t(45)},26:function(e,a,t){},27:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(11),r=t.n(s),l=(t(26),t(27),t(19)),i=t(20),o=t(12),m=t.n(o);var u=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],s=a[1];return Object(n.useEffect)((function(){m.a.get("https://api.unsplash.com/photos/random?count=30&client_id=eabab3af0950e1039a56eac39d421af54bf8c9156b61333cbe93c7160c768d6d").then((function(e){e.data.map((function(e){s((function(a){return[].concat(Object(l.a)(a),[e])})),s((function(e){return e.sort((function(e,a){return new Date(e.created_at)-new Date(a.created_at)}))}))}))}))}),[]),c.a.createElement("div",{className:"image-container"},t.length?t.map((function(e){return c.a.createElement("img",{key:e.id,className:"image-view",src:e.urls.small,alt:e.alt_description})})):null)},p=t(13),d=t.n(p),h=t(14),E=t.n(h),f=t(15),b=t.n(f);var g=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("span",{className:"input-container"},c.a.createElement("span",null,c.a.createElement("img",{src:b.a,className:"search-icon",alt:"Search"})),c.a.createElement("input",{type:"text",placeholder:"Search your photos",className:"input-box"})),c.a.createElement("span",null,c.a.createElement("img",{src:d.a,className:"header-icons",alt:"create"})),c.a.createElement("span",{className:"header__icon-name"},"Create"),c.a.createElement("span",null,c.a.createElement("img",{src:E.a,className:"header-icons",alt:"upload"})),c.a.createElement("span",{className:"header__icon-name"},"Upload"))},v=t(16),N=t.n(v),_=t(17),w=t.n(_),x=t(18),k=t.n(x);var y=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement("span",null,c.a.createElement("img",{src:w.a,className:"sidebar-icons",alt:"click"})),c.a.createElement("span",{className:"sidebar__icon-name"},"Photos"),c.a.createElement("span",null,c.a.createElement("img",{src:N.a,className:"sidebar-icons",alt:"album"})),c.a.createElement("span",{className:"sidebar__icon-name"},"Albums"),c.a.createElement("span",null,c.a.createElement("img",{src:k.a,className:"sidebar-icons",alt:"share"})),c.a.createElement("span",{className:"sidebar__icon-name"},"Share"))};var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(u,null),c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a563477e.chunk.js.map