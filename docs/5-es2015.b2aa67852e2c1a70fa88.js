(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{A8V6:function(n,l,u){"use strict";u.r(l);var t=u("kZht");class r{}var e=u("C9Ky");class o{constructor(){this.xr=!1,this.xrPresent=new t.m}ngOnInit(){}onEnterAR(){this.xrPresent.next(!0)}onNoXRDevice(){this.xrPresent.next(!1)}}var s=t.qb({encapsulation:0,styles:[[""]],data:{}});function a(n){return t.Ib(0,[(n()(),t.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" ar-button works!\n"])),(n()(),t.sb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.onEnterAR()&&t),t},null,null)),(n()(),t.Hb(-1,null,["Enter Augmented Reality"]))],null,null)}class c{constructor(){this.info="No session yet!"}ngOnInit(){}onSessionStarted(n){this.info="Session started!"}onXRFrame(n,l){}}var i=t.qb({encapsulation:0,styles:[[""]],data:{}});function b(n){return t.Ib(0,[(n()(),t.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Hb(1,null,[" "," "])),(n()(),t.sb(2,0,null,null,1,"xr-ar-button",[],null,[[null,"xrPresent"]],function(n,l,u){var t=!0;return"xrPresent"===l&&(t=!1!==n.component.onSessionStarted(u)&&t),t},a,s)),t.rb(3,114688,null,0,o,[],null,{xrPresent:"xrPresent"}),(n()(),t.sb(4,0,[["canvas",1]],null,0,"canvas",[],null,null,null,null,null))],function(n,l){n(l,3,0)},function(n,l){n(l,1,0,l.component.info)})}function f(n){return t.Ib(0,[(n()(),t.sb(0,0,null,null,1,"ay-geo-ar",[],null,null,null,b,i)),t.rb(1,114688,null,0,c,[],null,null)],function(n,l){n(l,1,0)},null)}var p=t.ob("ay-geo-ar",c,f,{},{},[]),v=u("An66"),x=u("1VvW");class h{}u.d(l,"FeatureXrModuleNgFactory",function(){return d});var d=t.pb(r,[],function(n){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[e.a,p]],[3,t.j],t.x]),t.Bb(4608,v.k,v.j,[t.t,[2,v.r]]),t.Bb(1073742336,v.b,v.b,[]),t.Bb(1073742336,x.q,x.q,[[2,x.w],[2,x.o]]),t.Bb(1073742336,h,h,[]),t.Bb(1073742336,r,r,[]),t.Bb(1024,x.m,function(){return[[{path:"",pathMatch:"full",component:c}]]},[])])})}}]);