(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||c()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),c=r("8OQS");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),p=r("7ljp").mdx,s=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,["scope","children"]),l=s(t),f=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:p},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(f,i({},a))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function a(t,r,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},a.apply(null,arguments)}e.exports=a},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return f}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),c=r("A2+M"),l=r("IP2g"),i=r("wHSu"),u=r("6Gk8"),p=r("Bl7J"),s=r("vrFN");t.default=function(e){var t,r=e.data,n=e.location,f=r.mdx,m=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=r.previous,b=r.next;return o.a.createElement(p.a,{location:n,title:m},o.a.createElement(s.a,{title:f.frontmatter.title,description:f.frontmatter.description||f.excerpt}),o.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",null,o.a.createElement("h1",{itemProp:"headline"},f.frontmatter.title),o.a.createElement("div",{className:"blog-post-dates"},o.a.createElement("span",null,f.frontmatter.published_on)," • ",o.a.createElement(l.a,{icon:i.b})," ",f.fields.readingTime.text," ",o.a.createElement("br",null),f.frontmatter.updated_on&&o.a.createElement("span",{className:"updated-on"},"Last updated: ",f.frontmatter.updated_on))),o.a.createElement(c.MDXRenderer,null,f.body),o.a.createElement("hr",null),o.a.createElement("footer",null,o.a.createElement(u.a,null))),o.a.createElement("nav",{className:"blog-post-nav"},o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,d&&o.a.createElement(a.a,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),o.a.createElement("li",null,b&&o.a.createElement(a.a,{to:b.fields.slug,rel:"next"},b.frontmatter.title," →")))))};var f="2129675141"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-03062e135f360ede8792.js.map