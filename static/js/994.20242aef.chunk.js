"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[994],{994:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var i,s,t,a,l=r(861),c=r(439),d=r(757),o=r.n(d),p=r(924),h=r(386),x=r(791),u=r(689),f=r(168),j=r(444),v=r(87),g=(0,j.ZP)(v.Link)(i||(i=(0,f.Z)(["\n  color: black;\n  font-size: 20px;\n  text-decoration: none;\n  padding: 10px;\n  border: 1px dashed orange;\n  color: black;\n"]))),b=j.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  font-size: 24px;\n"]))),m=j.ZP.ul(t||(t=(0,f.Z)(["\n  display: flex;\n  gap: 22px;\n  list-style: none;\n  padding: 20px 0;\n  margin: 0;\n"]))),w=j.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n"]))),Z=r(243),_=r(184),k=function(){var e,n,r=(0,u.UO)().movieId,i=(0,x.useState)({}),s=(0,c.Z)(i,2),t=s[0],a=s[1],d=(0,x.useState)("idle"),f=(0,c.Z)(d,2),j=f[0],v=f[1];function k(){return k=(0,l.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v("pending"),e.next=4,p.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=352708f90836dd2b75b209ae082e91df&language=en-US&external_source=imdb_id"));case 4:r=e.sent,a(r.data),v("responded"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),v("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),k.apply(this,arguments)}(0,x.useEffect)((function(){!function(e){k.apply(this,arguments)}(r)}),[r]);var y=(0,u.TH)(),S=(0,x.useRef)(null!==(e=null===(n=y.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),P=t.title,C=t.overview,z=t.genres,L=t.poster_path,U=t.release_date,F=t.vote_average;return(0,_.jsxs)(_.Fragment,{children:["responded"===j&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(b,{children:[(0,_.jsx)(g,{to:S.current,children:"<== Back"}),(0,_.jsx)("img",{src:L&&"https://image.tmdb.org/t/p/w400".concat(L),alt:P}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("h1",{children:[P,"(",Number.parseInt(U),")"]}),(0,_.jsxs)("p",{children:["User score: ",F]}),(0,_.jsx)("b",{children:"Overview"}),(0,_.jsx)("p",{children:C}),(0,_.jsx)("b",{children:"Ganres"}),(0,_.jsx)("p",{children:z&&z.map((function(e){return e.name})).join(", ")})]})]}),(0,_.jsxs)(w,{children:[(0,_.jsx)("h2",{children:"Additional information"}),(0,_.jsxs)(m,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(h.ZP,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(h.ZP,{to:"reviews",children:"Reviews"})})]})]})]}),"pending"===j&&(0,_.jsx)(Z.p2,{height:"80",width:"80",color:"#f8a100",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),"rejected"===j&&(0,_.jsx)("h2",{children:"Sorry we didn't find this page"}),(0,_.jsx)(x.Suspense,{fallback:(0,_.jsx)(Z.p2,{height:"80",width:"80",color:"#f8a100",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),children:(0,_.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=994.20242aef.chunk.js.map