!function(){var n,e,t;!function(r){function i(n,e){return x.call(n,e)}function o(n,e){var t,r,i,o,u,c,f,l,a,s,p,d,m=e&&e.split("/"),g=y.map,h=g&&g["*"]||{};if(n){for(n=n.split("/"),u=n.length-1,y.nodeIdCompat&&E.test(n[u])&&(n[u]=n[u].replace(E,"")),"."===n[0].charAt(0)&&m&&(d=m.slice(0,m.length-1),n=d.concat(n)),a=0;a<n.length;a++)if(p=n[a],"."===p)n.splice(a,1),a-=1;else if(".."===p){if(0===a||1===a&&".."===n[2]||".."===n[a-1])continue;a>0&&(n.splice(a-1,2),a-=2)}n=n.join("/")}if((m||h)&&g){for(t=n.split("/"),a=t.length;a>0;a-=1){if(r=t.slice(0,a).join("/"),m)for(s=m.length;s>0;s-=1)if(i=g[m.slice(0,s).join("/")],i&&(i=i[r])){o=i,c=a;break}if(o)break;!f&&h&&h[r]&&(f=h[r],l=a)}!o&&f&&(o=f,c=l),o&&(t.splice(0,c,o),n=t.join("/"))}return n}function u(n,e){return function(){var t=w.call(arguments,0);return"string"!=typeof t[0]&&1===t.length&&t.push(null),d.apply(r,t.concat([n,e]))}}function c(n){return function(e){return o(e,n)}}function f(n){return function(e){h[n]=e}}function l(n){if(i(v,n)){var e=v[n];delete v[n],b[n]=!0,p.apply(r,e)}if(!i(h,n)&&!i(b,n))throw new Error("No "+n);return h[n]}function a(n){var e,t=n?n.indexOf("!"):-1;return t>-1&&(e=n.substring(0,t),n=n.substring(t+1,n.length)),[e,n]}function s(n){return function(){return y&&y.config&&y.config[n]||{}}}var p,d,m,g,h={},v={},y={},b={},x=Object.prototype.hasOwnProperty,w=[].slice,E=/\.js$/;m=function(n,e){var t,r=a(n),i=r[0];return n=r[1],i&&(i=o(i,e),t=l(i)),i?n=t&&t.normalize?t.normalize(n,c(e)):o(n,e):(n=o(n,e),r=a(n),i=r[0],n=r[1],i&&(t=l(i))),{f:i?i+"!"+n:n,n:n,pr:i,p:t}},g={require:function(n){return u(n)},exports:function(n){var e=h[n];return"undefined"!=typeof e?e:h[n]={}},module:function(n){return{id:n,uri:"",exports:h[n],config:s(n)}}},p=function(n,e,t,o){var c,a,s,p,d,y,x=[],w=typeof t;if(o=o||n,"undefined"===w||"function"===w){for(e=!e.length&&t.length?["require","exports","module"]:e,d=0;d<e.length;d+=1)if(p=m(e[d],o),a=p.f,"require"===a)x[d]=g.require(n);else if("exports"===a)x[d]=g.exports(n),y=!0;else if("module"===a)c=x[d]=g.module(n);else if(i(h,a)||i(v,a)||i(b,a))x[d]=l(a);else{if(!p.p)throw new Error(n+" missing "+a);p.p.load(p.n,u(o,!0),f(a),{}),x[d]=h[a]}s=t?t.apply(h[n],x):void 0,n&&(c&&c.exports!==r&&c.exports!==h[n]?h[n]=c.exports:s===r&&y||(h[n]=s))}else n&&(h[n]=t)},n=e=d=function(n,e,t,i,o){if("string"==typeof n)return g[n]?g[n](e):l(m(n,e).f);if(!n.splice){if(y=n,y.deps&&d(y.deps,y.callback),!e)return;e.splice?(n=e,e=t,t=null):n=r}return e=e||function(){},"function"==typeof t&&(t=i,i=o),i?p(r,n,e,t):setTimeout(function(){p(r,n,e,t)},4),d},d.config=function(n){return d(n)},n._defined=h,t=function(n,e,t){if("string"!=typeof n)throw new Error("See almond README: incorrect module build, no module name");e.splice||(t=e,e=[]),i(h,n)||i(v,n)||(v[n]=[n,e,t])},t.amd={jQuery:!0}}(),t("../app/bower_components/almond/almond",function(){}),function(){t("extra",[],function(){return"another script"})}.call(this),function(){t("main",["extra"],function(n){var e;return console.log("Thiss Main and: "+n),e=skrollr.init(),function(){var n,t,r,i,o,u,c,f,l,a,s,p,d,m,g;return n=document.body,i=document.querySelector(".content-wrap"),s=document.getElementById("open-button"),r=document.getElementById("close-button"),t=$(".content"),m=$(".cd-nav-trigger"),l=!1,a=document.getElementById("morph-shape"),e=Snap(a.querySelector("svg")),p=e.select("path"),c=p.attr("d"),d=a.getAttribute("data-morph-open"),f=!1,o=function(){return u()},u=function(){return s.addEventListener("click",g),r&&r.addEventListener("click",g),t.on("click",function(n){var e;if(e=n.target,l&&e!==s)return g()})},g=function(){return!f&&(f=!0,l?(s.className="cd-nav-trigger",n.className="",setTimeout(function(){p.attr("d",c),f=!1},300)):(n.className+="show-menu",s.className+=" nav-is-visible",p.animate({path:d},400,mina.easeinout,function(){f=!1})),l=!l)},o()}()})}.call(this),e(["main"])}();