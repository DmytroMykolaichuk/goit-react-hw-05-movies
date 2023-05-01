"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[37],{130:function(n,e,t){t.d(e,{O:function(){return c}});var r=t(87),a=t(689),u=t(184),c=function(n){var e=n.movies,t=(0,a.TH)();return(0,u.jsx)("ul",{children:e.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(r.Link,{to:"/movies/".concat(n.id),state:{from:t},children:n.title||n.name})},n.id)}))})}},37:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,u=t(861),c=t(439),i=t(757),s=t.n(i),o=t(75),p=t(791),f=t(87),d=t(168),l=t(444),h=l.ZP.input(r||(r=(0,d.Z)(["\n  width: 320px;\n  font-size: 24px;\n  margin: 0 40px;\n  border: thick double orange;\n  padding-left: 20px;\n"]))),v=l.ZP.button(a||(a=(0,d.Z)(["\n  font-size: 24px;\n  padding: 0 10px;\n  background-color: transparent;\n  border: thick double orange;\n  cursor: pointer;\n  transition: transform 250ms linear;\n  outline: none;\n  :hover {\n    transform: scale(1.1);\n  }\n"]))),g=t(537),m=t(130),x=t(184),y=function(){var n=(0,p.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)("idle"),i=(0,c.Z)(a,2),d=i[0],l=i[1],y=(0,f.useSearchParams)({}),b=(0,c.Z)(y,2),k=b[0],w=b[1];function Z(){return(Z=(0,u.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l("pending"),n.next=4,(0,o.pg)(e);case 4:t=n.sent,r(t),l("responded"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),l("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}return(0,p.useEffect)((function(){var n=k.get("query");n&&function(n){Z.apply(this,arguments)}(n)}),[k]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.query.value,t=e.trim()?{query:e}:{};w(t)},children:[(0,x.jsx)(h,{type:"text",name:"query",placeholder:"Search..."}),(0,x.jsx)(v,{type:"submit",children:"Go"})]}),"responded"===d&&(0,x.jsx)(m.O,{movies:t}),"pending"===d&&(0,x.jsx)(g.a,{}),"rejected"===d&&(0,x.jsx)("h2",{children:"Sorry we didn't find this page"})]})}},75:function(n,e,t){t.d(e,{L_:function(){return g},Me:function(){return h},_k:function(){return s},jC:function(){return d},pg:function(){return p}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="352708f90836dd2b75b209ae082e91df";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US&external_source=imdb_id"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=37.6b8d9306.chunk.js.map