(this.webpackJsonpsnapshot=this.webpackJsonpsnapshot||[]).push([[0],{35:function(n,e,t){},36:function(n,e,t){},59:function(n,e,t){"use strict";t.r(e);var r,i,a,c,o,s,d,p,x,h,j=t(1),u=t.n(j),b=t(23),l=t.n(b),f=(t(35),t(36),t(10)),g=t.n(f),O=t(24),m=t(6),w=t(25),v=t.n(w),y=t(3),S=t(4),z=t(2),F=S.a.div(r||(r=Object(y.a)(["\nmargin:5px;\nbox-sizing: border-box;\n\n"]))),k=S.a.img(i||(i=Object(y.a)(["\nwidth:400px;\nheight:350px;\nborder-radius: 20px;\nfilter: blur(5px);\n\n&:hover{\n  filter: blur(0);\n  box-sizing: border-box;\n}\n\n@media screen and (max-width:468px){\n    width:150px;\n    height:150px;\n    filter: brightness(1);\n}\n\n;\n\n"]))),L=function(n){var e=n.previewURL,t=n.pageURL;return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(F,{children:Object(z.jsx)(k,{onClick:function(){return window.location.replace(t)},src:e})})})},U=S.a.div(a||(a=Object(y.a)(["\nmargin-top:100px;\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\npadding:20px;\nbox-sizing: border-box;\nflex-direction: row;\nflex-wrap:wrap;\njustify-content:space-around;\n\n"]))),I=function(n){var e=n.ImageData;return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(U,{children:e?e.map((function(n){return Object(z.jsx)(L,{previewURL:n.largeImageURL,pageURL:n.pageURL},n.id)})):""})})},C=t(30),Q=t(29),R=S.a.nav(c||(c=Object(y.a)(["\nposition: sticky;\nwidth: 100%;\npadding-top:20px;\nheight:80px;\nmargin-top:-80px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 1rem;\nz-index:1;\nbox-sizing: border-box;\ntop: 0;\nbackground:#000;\n\n"]))),D=S.a.div(o||(o=Object(y.a)(["\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nmargin: 5px 250px;\n"]))),N=S.a.div(s||(s=Object(y.a)(["\n\nposition:relative;\nwidth:250px;\ndisplay: grid;\njustify-content:center;\nfont-size:35px;\ncolor:#fff;\ntop:-8px;\nfont-weight:600;\n\n\n@media screen and (max-width:468px){\n   position:absolute;\n   justify-content: start;\n   left:1rem;\n   font-size:25px;\n   top:20px ;\n}\n\n"]))),B=S.a.div(d||(d=Object(y.a)(["\nposition: relative;\ndisplay: flex;\nheight:4rem;\n\n\n@media screen and (max-width:468px){\n    right:-5rem;\n}\n\n"]))),J=S.a.i(p||(p=Object(y.a)(["\nposition: absolute;\ntop:35%;\nright: 1rem;\ntransform: translateY(-50%);\nfont-size:1.3rem;\ncolor: #888;\ntransition: all 0.35s;\n\n"]))),P=S.a.input(x||(x=Object(y.a)(["\nheight: inherit;\nwidth: 16rem ;\nheight:2.6rem;\nborder: 2px solid #888;\nborder-radius: 0.5rem;\noutline: none;\nbackground: transparent;\ncolor:#f7f7f7;\nfont-size: 1rem ;\ntext-indent:1rem;\ntransition: all 0.35s;\n\n/* &:focus+ span{\n  display: none;\n} */\n\n\n@media screen and (max-width:468px){\n    width: 10rem;\n}\n\n\n\n"]))),T=function(n){var e=n.SearchQuery,t=n.UpdateSearchQuery,r=n.NullSearchQuery,i=Object(j.useState)(!1),a=Object(m.a)(i,2),c=a[0],o=a[1];return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(R,{children:Object(z.jsxs)(D,{children:[Object(z.jsx)(N,{children:"ImageHub"}),Object(z.jsxs)(B,{children:[Object(z.jsx)(P,{onInput:function(){o(!0)},placeholder:"Search",value:e,onChange:t}),Object(z.jsx)(J,{children:c?Object(z.jsx)(Q.a,{onClick:function(){o(!1),r()}}):Object(z.jsx)(C.a,{})})]})]})})})},q=S.a.div(h||(h=Object(y.a)(["\ntext-align: center;\nwidth:100%;\nheight:100%;\ncolor: #111;\nfont-size: 30px;\n"]))),E=function(n){var e=n.text;return Object(z.jsx)(z.Fragment,{children:e?Object(z.jsx)(q,{children:"NotFound"}):" "})},H=function(){var n=Object(j.useState)([]),e=Object(m.a)(n,2),t=e[0],r=e[1],i=Object(j.useState)(""),a=Object(m.a)(i,2),c=a[0],o=a[1],s=Object(j.useState)(!1),d=Object(m.a)(s,2),p=d[0],x=d[1],h=function(){var n=Object(O.a)(g.a.mark((function n(){var e;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v()("https://pixabay.com/api/?key=".concat("24330918-cdfda0593b13da36a224add5b","&q=").concat(c,"&image_type=photo&pretty=true"));case 2:(e=n.sent)?r(e.data.hits):console.log("error");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(T,{SearchQuery:c,UpdateSearchQuery:function(n){o(n.target.value),h(),0==t&&(console.log(t.length),x(!p))},NullSearchQuery:function(){x(!1),o("")}}),Object(z.jsx)(I,{ImageData:t}),Object(z.jsx)(E,{text:p})]})};var M=function(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(H,{})})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),a(n),c(n)}))};l.a.render(Object(z.jsx)(u.a.StrictMode,{children:Object(z.jsx)(M,{})}),document.getElementById("root")),Y()}},[[59,1,2]]]);
//# sourceMappingURL=main.ce6a6439.chunk.js.map