(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,n,e){t.exports=e(224)},224:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(25),i=e.n(o),l=e(8),c=e(7),u=e(92),s=e.n(u);function p(){var t=Object(l.a)(["\n\t@import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR:400,700');\n\t\n\t","\n\n\t// dl, ul, ol, menu, li {\n  //   \tlist-style: none;\n\t// }\n"]);return p=function(){return t},t}var m=Object(c.createGlobalStyle)(p(),s.a),d=e(58),f=e(226),g=e(33),b=new g.a({uri:"https://valued-night-238101.appspot.com"}),h=e(26),v=e(63),x=e.n(v),E=e(98),k=e(48),y=e(99),w=e(57),j=e(100),O=e.n(j),_=e(65),$=e.n(_),D=e(101),S=e.n(D),z=e(102),C=e.n(z),N=e(66),M=e.n(N),I=e(47),F=e.n(I),G=e(103),R=e.n(G),T=e(104),B=e.n(T),P=e(64),W=function(t){return{layout:Object(P.a)({width:"auto",marginLeft:3*t.spacing.unit,marginRight:3*t.spacing.unit},t.breakpoints.up(1100+3*t.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),toolbarMain:{borderBottom:"1px solid ".concat(t.palette.grey[300])},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between"},mainFeaturedPost:{backgroundColor:t.palette.grey[800],color:t.palette.common.white,marginBottom:4*t.spacing.unit},mainFeaturedPostContent:Object(P.a)({padding:"".concat(6*t.spacing.unit,"px")},t.breakpoints.up("md"),{paddingRight:0}),mainGrid:{marginTop:3*t.spacing.unit},card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160},markdown:{padding:"".concat(3*t.spacing.unit,"px 0")},sidebarAboutBox:{padding:2*t.spacing.unit,backgroundColor:t.palette.grey[200]},sidebarSection:{marginTop:3*t.spacing.unit},footer:{backgroundColor:t.palette.background.paper,marginTop:8*t.spacing.unit,padding:"".concat(6*t.spacing.unit,"px 0")}}},q={"\uc804\uccb4":["kr"],"\uc77c\uc0c1":["life","kr-life","kr-daily"],"\ub3c4\uc11c":["book","kr-book","booksteem"],"\uae00\uc4f0\uae30":["kr-pen","kr-writing","pen","writing"],"\uc6b4\ub3d9":["actifit"],"\uc774\ubca4\ud2b8":["event","kr-event"],"\uac8c\uc784":["game","kr-game","steemmonsters","nextcolony"],"\ub9db\uc9d1/\uc74c\uc2dd":["tasteem","tasteem-kr","muksteem","food","kr-food"],"\uc5ec\ud589":["tripsteem","travel","kr-travel"],"\ucf54\ub529/\uac1c\ubc1c":["kr-dev","dev"],"\uc608\uc220/\ub514\uc790\uc778":["art","kr-art","ntopaz"],"\uc0ac\uc9c4":["photo","kr-photo"],"\uac00\uc988\uc544":["kr-gazua"]};function L(){var t=Object(l.a)(["\n  query GetPosts(\n\t\t$tags: [String!]!\n\t\t$limit: Int\n\t\t$skip: Int\n\t\t$startDate: Float\n\t\t$endDate: Float\n\t\t$order: Order\n\t) {\n\t\tgetPosts(\n\t\t\ttags: $tags\n\t\t\tlimit: $limit\n\t\t\tskip: $skip\n\t\t\torder: $order\n\t\t\tstartDate: $startDate\n\t\t\tendDate: $endDate\n\t\t) {\n      post_id\n\t\t\tauthor\n\t\t\tpermlink\n\t\t\ttitle\n\t\t\tauthor_reputation\n\t\t\tsummary\n\t\t\ttags\n\t\t\timage\n\t\t\tcreated\n\t\t\ttotal_payout_value\n\t\t\tcurator_payout_value\n\t\t\tpending_payout_value\n\t\t\tvote_count\n\t\t\tcomment_count\n\t\t}\n}"]);return L=function(){return t},t}var A=Object(g.b)(L());function J(){var t=Object(l.a)(["\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n  font-size: 12px;\n  font-family: Georgia;\n  font-style: italic;\n  color: #bfbfbf;\n  }\n"]);return J=function(){return t},t}function K(){var t=Object(l.a)(["\n  float: left;\n  user-select: text !important;\n  font-size: 12px;\n  color: #959595;\n"]);return K=function(){return t},t}function H(){var t=Object(l.a)(["\n  float: left;\n  display: inline-block;\n  width: 2px;\n  height: 2px;\n  margin: 4.5px 6px 0;\n  background-color: #aaa;\n  vertical-align: top;\n"]);return H=function(){return t},t}function Q(){var t=Object(l.a)(["\n  display: block;\n  overflow: hidden;\n  padding-top: 20px;\n  font-size: 12px;\n  color: #959595;\n"]);return Q=function(){return t},t}function U(){var t=Object(l.a)(["\n  object-fit: cover;\n  width: 120px;\n  height: 120px;\n  object-position: center;\n  image-rendering: auto;\n"]);return U=function(){return t},t}function V(){var t=Object(l.a)(["\n  overflow: hidden;\n  position: absolute;\n  top: 30px;\n  right: 20px;\n  width: 120px;\n  float: right;\n}\n"]);return V=function(){return t},t}function X(){var t=Object(l.a)(["\n  display: -webkit-box;\n  max-height: 46px;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  padding-top: 6px;\n  color: #666;\n  font-size: 14px;\n  line-height: 21px;\n"]);return X=function(){return t},t}function Y(){var t=Object(l.a)(["\n  font-weight: 400;\n  font-size: 20px;\n  letter-spacing: -1px;\n  white-space: nowrap;\n  line-height: 28px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return Y=function(){return t},t}function Z(){var t=Object(l.a)(["\n  float: left;\n  width: 100%;\n  &.has_image {\n    width: 520px;\n  }\n"]);return Z=function(){return t},t}function tt(){var t=Object(l.a)(["\n  display: block;\n  clear: both;\n  overflow: hidden;\n"]);return tt=function(){return t},t}function nt(){var t=Object(l.a)(['\n  min-height: 180px;\n  padding: 30px 20px;\n  border-bottom: 1px solid #eee;\n  position: relative;\n  background-color: #fff;\n  box-sizing: border-box;\n  font-family: \'Noto Serif KR\', "Noto Sans Light", "Malgun Gothic", sans-serif, serif;\n']);return nt=function(){return t},t}var et=c.default.li(nt()),at=c.default.a(tt()),rt=c.default.div(Z()),ot=c.default.strong(Y()),it=c.default.div(X()),lt=c.default.div(V()),ct=c.default.img(U()),ut=c.default.div(Q()),st=c.default.span(H()),pt=c.default.span(K()),mt=c.default.span(J()),dt=function(t){var n=t.data,e=n.curator_payout_value+n.pending_payout_value+n.total_payout_value,a=Boolean(n.image);return r.a.createElement(et,null,r.a.createElement(at,null,r.a.createElement(rt,{className:a&&"has_image"},r.a.createElement(ot,null,n.title),r.a.createElement(it,null,n.summary),r.a.createElement(ut,null,r.a.createElement(pt,null,"\uc88b\uc544\uc694",n.vote_count),r.a.createElement(st,null),r.a.createElement(pt,null,"\ub313\uae00",n.comment_count),r.a.createElement(st,null),r.a.createElement(pt,null,"\ubcf4\uc0c1$",e),r.a.createElement(st,null),r.a.createElement(pt,null,function(t){if("string"!==typeof t&&(t=String(t)),t.length<14)return t;var n=new Date,e=t.substring(0,4),a=t.substring(4,6)-1,r=t.substring(6,8),o=t.substring(8,10),i=t.substring(10,12),l=t.substring(12,14),c=new Date(e,a,r,o,i,l),u=parseInt((n-c)/1e3,10),s="";return s=u>86400?parseInt(u/86400,10)+"\uc77c \uc804":u>3600?s+parseInt(u/3600,10)+"\uc2dc\uac04 \uc804":u>60?s+parseInt(u/60,10)+"\ubd84 \uc804":u+"\ucd08 \uc804"}(n.created)),r.a.createElement(st,null),r.a.createElement(mt,null,"by"),r.a.createElement(pt,null,n.author,"(",function(t,n){var e=Math.max(Math.log10(Math.abs(t))-9,0)*(t>=0?1:-1)*9+25;return"number"===typeof n&&(e=e.toFixed(n)),e}(n.author_reputation,0),")"))),a&&r.a.createElement(lt,null,r.a.createElement(ct,{src:"https://cdn.steemitimages.com/640x0/".concat(n.image)}))))};function ft(){var t=Object(l.a)(["\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tbackface-visibility: hidden;\n"]);return ft=function(){return t},t}function gt(){var t=Object(l.a)(["\n\tfloat: right;\n\twidth: 220px;\n\tpadding: 20px 20px 24px;\n\tbackground-color: #fff;\n\tbox-sizing: border-box;\n"]);return gt=function(){return t},t}var bt=c.default.div(gt()),ht=c.default.ul(ft()),vt=Object(w.withStyles)(W)(function(t){var n=Object(f.b)(),e=Object(a.useState)(!1),o=Object(k.a)(e,2),i=(o[0],o[1]),l=Object(a.useState)([]),c=Object(k.a)(l,2),u=c[0],s=c[1],p=function(){var t=Object(E.a)(x.a.mark(function t(e){var a,r,o;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.tags,t.next=3,i(!0);case 3:return t.next=5,n.query({query:A,variables:{tags:a,limit:20,skip:0,order:"CREATED",startDate:0x944a9dca5b7,endDate:30190512235959}});case 5:r=t.sent,o=r.data,console.log(o),i(!1),s(o.getPosts);case 10:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),m=t.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.Helmet,null,r.a.createElement("title",null,"Main | Whan Community")),r.a.createElement(O.a,null),r.a.createElement("div",{className:m.layout},r.a.createElement($.a,{className:m.toolbarMain},r.a.createElement(M.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:m.toolbarTitle},"Whan Community"),r.a.createElement(S.a,null,r.a.createElement(C.a,null))),r.a.createElement($.a,{variant:"dense",className:m.toolbarSecondary},Object.entries(q).map(function(t){var n=Object(k.a)(t,2),e=n[0],a=n[1];return r.a.createElement(M.a,{color:"inherit",noWrap:!0,key:e},r.a.createElement(R.a,{size:"small",onClick:function(){return p({tags:a})}},e))})),r.a.createElement(B.a,null),r.a.createElement("main",null,r.a.createElement(F.a,{container:!0,spacing:0,className:m.mainGrid},r.a.createElement(F.a,{item:!0,xs:12,md:8},r.a.createElement(ht,null,u.map(function(t){return r.a.createElement(dt,{key:t.post_id,data:t})}))),r.a.createElement(F.a,{item:!0,xs:12,md:4},r.a.createElement(bt,null,r.a.createElement("strong",null,"\ucd94\ucc9c\uc791\uac00")))))))}),xt=function(){return r.a.createElement(h.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:vt}))};var Et=function(){return r.a.createElement(f.a,{client:b},r.a.createElement(m,null),r.a.createElement(d.a,null,r.a.createElement(xt,null)))};i.a.render(r.a.createElement(Et,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.c1e9b79c.chunk.js.map