(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(e,t,n){"use strict";n.r(t);n(180);var a=n(0),r=n(172),c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);for(var i=[],l=0;l<256;++l)i[l]=(l+256).toString(16).substr(1);var s,u,m=function(e,t){var n=t||0,a=i;return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")},d=0,f=0;var p=function(e,t,n){var a=t&&n||0,r=t||[],i=(e=e||{}).node||s,l=void 0!==e.clockseq?e.clockseq:u;if(null==i||null==l){var p=e.random||(e.rng||function(){if(!c)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(o)})();null==i&&(i=s=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==l&&(l=u=16383&(p[6]<<8|p[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:f+1,y=v-d+(g-f)/1e4;if(y<0&&void 0===e.clockseq&&(l=l+1&16383),(y<0||v>d)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=v,f=g,u=l;var E=(1e4*(268435455&(v+=122192928e5))+g)%4294967296;r[a++]=E>>>24&255,r[a++]=E>>>16&255,r[a++]=E>>>8&255,r[a++]=255&E;var h=v/4294967296*1e4&268435455;r[a++]=h>>>8&255,r[a++]=255&h,r[a++]=h>>>24&15|16,r[a++]=h>>>16&255,r[a++]=l>>>8|128,r[a++]=255&l;for(var N=0;N<6;++N)r[a+N]=i[N];return t||m(r)},v=n(168),g=n.n(v),y=function(e){var t=e.links,n=t.map(function(e){return a.createElement("li",{className:e.current?g.a.currentLi:""},a.createElement(r.a,{to:e.to,key:p()},e.name))});return t.length>0?a.createElement("ul",{className:g.a.list},a.createElement("nav",{className:g.a.navigation},n)):null},E=n(174),h=n.n(E),N=n(169),w=n.n(N),k=function(e){var t=e.name,n=e.linkTo,c=e.imgSrc,o=e.className;return a.createElement(r.a,{to:n,className:h()(w.a.projectCard,o)},a.createElement("img",{src:c,className:w.a.projectImg,alt:t+" Project"}),a.createElement("span",{className:w.a.projectName},t))},C=n(177),b=n(170),q=n.n(b);n.d(t,"query",function(){return j});t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return{name:e.node.frontmatter.title,slug:e.node.fields.slug,imgUrl:e.node.frontmatter.mainImgUrl}}).map(function(e){return a.createElement(k,{linkTo:e.slug,name:e.name,imgSrc:e.imgUrl,className:q.a.projectCard})});return a.createElement(C.a,{leftContent:a.createElement("div",{className:q.a.navContainer},a.createElement(y,{links:[{name:"projectos",to:"/",current:!0},{name:"contacto",to:"/"},{name:"about",to:"/"}]}))},t)};var j="834155410"},172:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(40),l=n.n(i);n.d(t,"a",function(){return l.a});n(173);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,c=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&c(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,a=e.render,c=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:a||c,staticQueryData:e})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},173:function(e,t,n){var a;e.exports=(a=n(175))&&a.default||a},175:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(64),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},176:function(e){e.exports={data:{site:{siteMetadata:{title:"Felipe González",description:"Portfolio de "}}}}},177:function(e,t,n){"use strict";var a=n(176),r=n(172),c=n(0),o=n(178),i=n.n(o),l=(n(179),n(161)),s=n.n(l),u=function(e){var t=e.title;return c.createElement("div",{className:s.a.title},c.createElement(r.a,{to:"/",className:s.a.link},t.toLowerCase()))},m=n(162),d=n.n(m),f=function(e){var t=e.children,n=e.title;return c.createElement("div",{className:d.a.container},c.createElement(u,{title:n}),t)},p=n(174),v=n.n(p),g=n(163),y=n.n(g),E=function(e){var t=e.children,n=e.className;return c.createElement("div",{className:v()(n,y.a.container)},t)},h=n(164),N=n.n(h),w=function(e){var t=e.children,n=e.className;return c.createElement("div",{className:v()(n,N.a.container)},t)};t.a=function(e){var t=e.leftContent,n=e.children;return c.createElement(r.b,{query:"3478412519",render:function(e){return c.createElement(w,null,c.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),c.createElement(f,{title:e.site.siteMetadata.title},t||null),c.createElement(E,null,n))},data:a})}},180:function(e,t,n){var a=n(12).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fa7c172ff145bbfa7276.js.map