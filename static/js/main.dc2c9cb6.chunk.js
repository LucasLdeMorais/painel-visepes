(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{127:function(e,a,n){e.exports=n(143)},132:function(e,a,n){},142:function(e,a,n){},143:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(29),c=n.n(l),i=n(16),o=(n(132),n(67)),u=n(15),m=n(68),s=n(187),p=n(194),E=n(206),f=n(66),d=n(199),b=n(188),h=n(202),y=n(197),x=n(189),k=n(203),v=n(191),C=n(192),w=n(176),P=n(178),O=n(179),g=n(180),j=n(181),S=n(182),z=n(183),G=n(184),M=n(190),F=Object(u.f)(function(e){var a=e.history,n={principal:[{text:"Principal",icon:r.a.createElement(w.a,null),onClick:function(){return a.push("/")}},{text:"Universidades",icon:r.a.createElement(P.a,null),onClick:function(){return a.push("/Universidades")}},{text:"Painel Comparativo",icon:r.a.createElement(O.a,null),onClick:function(){return a.push("/PainelComparativo")}},{text:"Parlamentares",icon:r.a.createElement(g.a,null),onClick:function(){return a.push("/Parlamentares")}}],saberMais:[{text:"Entendendo as Emendas",icon:r.a.createElement(j.a,null),onClick:function(){return a.push("/SaberMais")}}],infoAdicionais:[{text:"Como usar as Ferramentas",icon:r.a.createElement(S.a,null),onClick:function(){return a.push("/Sobre")}},{text:"Fonte das Informa\xe7\xf5es",icon:r.a.createElement(z.a,null),onClick:function(){return a.push("/FonteDasInformacoes")}},{text:"C\xf3digo-fonte",icon:r.a.createElement(G.a,null),onClick:function(){return window.open("https://github.com/LucasLdeMorais/lucas-lopes-tcc","_blank").focus()}}]};return r.a.createElement(d.a,{open:e.aberto,variant:"temporary",className:"drawer",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:"250px"}}},r.a.createElement(s.a,null,r.a.createElement(b.a,{onClickAway:function(a){e.fechaGaveta(a)}},r.a.createElement(h.a,null,r.a.createElement(y.a,{key:"fecharGaveta"},r.a.createElement(x.a,null,r.a.createElement(k.a,{onClick:function(a){e.fechaGaveta(a)}},r.a.createElement(M.a,null))),r.a.createElement(v.a,{primary:"Fechar"})),r.a.createElement(y.a,{key:"principal"},r.a.createElement(v.a,{primary:"Pain\xe9is"})),n.principal.map(function(e,a){var n=e.text,t=e.icon,l=e.onClick;return r.a.createElement(y.a,{button:!0,key:n,onClick:l},t&&r.a.createElement(x.a,null,t),r.a.createElement(v.a,{secondary:n}))}),r.a.createElement(C.a,null),r.a.createElement(y.a,{key:"paraSaberMais"},r.a.createElement(v.a,{primary:"Para saber mais"})),n.saberMais.map(function(e,a){var n=e.text,t=e.icon,l=e.onClick;return r.a.createElement(y.a,{button:!0,key:n,onClick:l},t&&r.a.createElement(x.a,null,t),r.a.createElement(v.a,{secondary:n}))}),r.a.createElement(C.a,null),r.a.createElement(y.a,{key:"infoAdicionais"},r.a.createElement(v.a,{primary:"Informa\xe7\xf5es adicionais"})),n.infoAdicionais.map(function(e,a){var n=e.text,t=e.icon,l=e.onClick;return r.a.createElement(y.a,{button:!0,key:n,onClick:l},t&&r.a.createElement(x.a,null,t),r.a.createElement(v.a,{secondary:n}))})))))}),D=(n(142),n(193)),I=n(204),A=n(205),L=function(e){return r.a.createElement(I.a,{position:"fixed",open:e.aberto},r.a.createElement(A.a,{sx:{pr:"24px"}},r.a.createElement(k.a,{onClick:function(a){return e.abreGaveta(a)}},r.a.createElement(D.a,{style:{color:"white"}})),r.a.createElement(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},style:{marginLeft:"10px"}},"Painel VisEPES")))},N=Object(t.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(7)]).then(n.bind(null,367))}),U=Object(t.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(6)]).then(n.bind(null,361))}),B=Object(t.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,362))}),J=Object(t.lazy)(function(){return n.e(9).then(n.bind(null,355))}),Q=Object(t.lazy)(function(){return Promise.all([n.e(10),n.e(12)]).then(n.bind(null,356))}),W=Object(t.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,360))});var q=function(){var e=Object(t.useState)(!1),a=Object(i.a)(e,2),n=a[0],l=a[1],c=new m.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});return r.a.createElement(m.QueryClientProvider,{client:c},r.a.createElement(o.a,null,r.a.createElement(s.a,{sx:{display:"flex"}},r.a.createElement(L,{aberto:n,abreGaveta:function(e){e.preventDefault(),l(!0)}}),r.a.createElement(F,{aberto:n,fechaGaveta:function(e){e.preventDefault(),l(!1)}}),r.a.createElement(p.a,{component:"div",sx:{flexGrow:1,p:3},className:"container-application",style:{marginTop:"20px"}},r.a.createElement(u.c,null,r.a.createElement(t.Suspense,{fallback:r.a.createElement(s.a,{className:"carregando-pagina-app"},r.a.createElement(E.a,{color:"inherit",size:40,style:{marginBottom:"20px"}}),r.a.createElement(f.a,{component:"h5",variant:"h6",style:{}},"Carregando..."))},r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(W,null)),r.a.createElement(u.a,{path:"/Universidades"},r.a.createElement(N,null)),r.a.createElement(u.a,{path:"/PainelComparativo"},r.a.createElement(U,null)),r.a.createElement(u.a,{path:"/Parlamentares"},r.a.createElement(B,null)),r.a.createElement(u.a,{path:"/SaberMais"},r.a.createElement(J,null)),r.a.createElement(u.a,{path:"/FonteDasInformacoes"},r.a.createElement(Q,null))))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[127,4,5]]]);
//# sourceMappingURL=main.dc2c9cb6.chunk.js.map