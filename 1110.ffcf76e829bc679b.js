"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1110],{1110:(y,l,c)=>{c.r(l),c.d(l,{PopoverPageModule:()=>Z});var a=c(4755),m=c(5030),t=c(7002),u=c(1350),v=c(5861),o=c(3020);function P(e,r){if(1&e){const n=o.EpF();o.TgZ(0,"ion-item",1),o.NdJ("click",function(){const i=o.CHM(n).index,C=o.oxw();return o.KtG(C.onClick(i+1))}),o.TgZ(1,"ion-label"),o._uU(2),o.qZA()()}if(2&e){const n=r.index;o.xp6(2),o.hij("Item: ",n+1,"")}}let d=(()=>{class e{constructor(n){this.popoverCtrl=n,this.items=Array(7)}ngOnInit(){}onClick(n){this.popoverCtrl.dismiss({item:n})}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(t.Dh))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-popover-info"]],decls:2,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(n,p){1&n&&(o.TgZ(0,"ion-list"),o.YNc(1,P,3,1,"ion-item",0),o.qZA()),2&n&&(o.xp6(1),o.Q6J("ngForOf",p.items))},dependencies:[a.sg,t.Ie,t.Q$,t.q_]}),e})();const f=[{path:"",component:(()=>{class e{constructor(n){this.popoverCtrl=n}ngOnInit(){}presentPopover(n){var p=this;return(0,v.Z)(function*(){const s=yield p.popoverCtrl.create({component:d,event:n,translucent:!0,backdropDismiss:!1});yield s.present();const{data:i}=yield s.onWillDismiss();console.log(i)})()}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(t.Dh))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-popover"]],decls:19,vars:0,consts:[["slot","start"],["defaultHref","/","color","primary"],["color","primary"],["slot","end"],["color","primary",3,"click"],["slot","icon-only","name","person-outline"],[1,"ion-padding"],["expand","block",3,"click"]],template:function(n,p){1&n&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o._UZ(3,"ion-back-button",1),o.qZA(),o.TgZ(4,"ion-title",2),o._uU(5,"Popover"),o.qZA(),o.TgZ(6,"ion-buttons",3)(7,"ion-button",4),o.NdJ("click",function(i){return p.presentPopover(i)}),o._UZ(8,"ion-icon",5),o.qZA()()()(),o.TgZ(9,"ion-content",6)(10,"ion-button",7),o.NdJ("click",function(i){return p.presentPopover(i)}),o._uU(11," Click me "),o.qZA()(),o.TgZ(12,"ion-footer")(13,"ion-toolbar")(14,"ion-buttons",0)(15,"ion-button",4),o.NdJ("click",function(i){return p.presentPopover(i)}),o._UZ(16,"ion-icon",5),o.qZA()(),o.TgZ(17,"ion-title"),o._uU(18,"Footer"),o.qZA()()())},dependencies:[t.oU,t.YG,t.Sm,t.W2,t.fr,t.Gu,t.gu,t.wd,t.sr,t.cs]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.Bz.forChild(f),u.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.ez,m.u5,t.Pc,g]}),e})()}}]);