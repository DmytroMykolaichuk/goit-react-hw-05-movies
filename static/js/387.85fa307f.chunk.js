"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,c,u=t(861),s=t(439),p=t(757),o=t.n(p),d=t(75),f=t(791),l=t(168),h=t(444),g=h.ZP.ul(r||(r=(0,l.Z)(["\n  padding: 30px 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n"]))),x=(h.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),h.ZP.p(i||(i=(0,l.Z)(["\n  text-align: center;\n  padding: 5px 0;\n  margin: 0;\n"])))),v=h.ZP.div(c||(c=(0,l.Z)(["\n  width: 200px;\n"]))),m=t(537),k=t(184),w=t(87).useParams,y=function(){var n=w().movieId,e=(0,f.useState)(null),t=(0,s.Z)(e,2),r=t[0],a=t[1],i=(0,f.useState)("idle"),c=(0,s.Z)(i,2),p=c[0],l=c[1];return(0,f.useEffect)((function(){function e(){return e=(0,u.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l("pending"),n.next=4,(0,d.Me)(e);case 4:t=n.sent,a(t),l("responded"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),l("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(n)}),[n]),(0,k.jsxs)(k.Fragment,{children:["responded"===p&&(0,k.jsx)(g,{children:r.map((function(n){var e=n.character,t=n.name,r=n.profile_path,a=n.cast_id;return(0,k.jsx)("li",{children:(0,k.jsxs)("div",{children:[(0,k.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"https://kartinkin.net/uploads/posts/2022-03/1647018833_14-kartinkin-net-p-anonim-kartinki-20.jpg",width:"200",alt:t}),(0,k.jsxs)(v,{children:[(0,k.jsxs)(x,{children:[t," "]}),(0,k.jsxs)(x,{children:[" ",e]})]})]})},a)}))}),"pending"===p&&(0,k.jsx)(m.a,{}),"rejected"===p&&(0,k.jsx)("h2",{children:"Sorry we didn't find this page"})]})}},75:function(n,e,t){t.d(e,{L_:function(){return x},Me:function(){return h},_k:function(){return s},jC:function(){return f},pg:function(){return o}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="352708f90836dd2b75b209ae082e91df";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US&external_source=imdb_id"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.85fa307f.chunk.js.map