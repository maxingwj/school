webpackJsonp([15],{663:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t(2),a=(t(0),t(58),t(77),function(){function n(n,l,t,u,a,e,o,i){this.navCtrl=n,this.navParams=l,this.storage=t,this.native=u,this.update=a,this.globalData=e,this.actionSheetCtrl=o,this.platform=i}return n.prototype.ionViewDidLoad=function(){this.user=this.storage.read("user")},n.prototype.logout=function(){var n=this;this.actionSheetCtrl.create({title:"",buttons:[{text:"退出当前账号",cssClass:"school-action-sheet-button",handler:function(){n.doLogout()}},{text:"关闭智慧校园",cssClass:"school-action-sheet-button",handler:function(){n.platform.exitApp()}},{text:"取消",role:"cancel",cssClass:"school-action-sheet-button",handler:function(){}}]}).present()},n.prototype.doLogout=function(){this.storage.remove("user"),this.storage.remove("school"),this.globalData.user=null,this.user=null,this.navCtrl.pop()},n.prototype.clearTalkRecords=function(){this.native.showToast("聊天记录清除成功")},n.prototype.updateVersion=function(){var n=this;this.update.checkUpgrade().then(function(l){l?n.native.doUpdateVersion(l.url):n.native.showToast("这已经是最新版本")})},n}()),e=(t(695),function(){return function(){}}()),o=t(352),i=t(353),s=t(354),r=t(355),c=t(356),h=t(357),p=t(358),_=t(359),f=t(360),d=t(182),b=t(25),m=t(22),g=t(3),v=t(54),y=t(79),k=t(111),Y=t(7),j=t(361),L=t(36),Z=t(12),z=t(28),C=t(362),w=t(78),P=t(53),R=t(363),x=t(30),V=t(6),E=t(13),I=t(33),S=t(59),D=t(10),N=t(691),T=t(113),A=t(19),M=t(16),O=t(114),U=t(55),q=t(194),F=t(120),W=u.X({encapsulation:2,styles:[],data:{}});function J(n){return u._22(0,[(n()(),u.Z(0,0,null,null,6,"ion-item",[["class","item item-block"],["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;"click"===l&&(u=!1!==n.component.logout()&&u);return u},d.b,d.a)),u.Y(1,1097728,null,3,b.a,[m.a,g.a,u.j,u.z,[2,v.a]],null,null),u._18(335544320,13,{contentLabel:0}),u._18(603979776,14,{_buttons:1}),u._18(603979776,15,{_icons:1}),u.Y(5,16384,null,0,y.a,[],null,null),(n()(),u._20(-1,2,["\n            退出\n        "]))],null,null)}function X(n){return u._22(0,[(n()(),u._20(-1,null,["\n"])),(n()(),u.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),u.Y(2,16384,null,0,k.a,[g.a,u.j,u.z,[2,Y.a]],null,null),(n()(),u._20(-1,null,["\n\n    "])),(n()(),u.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),u.Y(5,49152,null,0,L.a,[Z.a,[2,Y.a],[2,z.a],g.a,u.j,u.z],null,null),(n()(),u._20(-1,3,["\n        "])),(n()(),u.Z(7,0,null,3,2,"ion-title",[],null,null,null,C.b,C.a)),u.Y(8,49152,null,0,w.a,[g.a,u.j,u.z,[2,P.a],[2,L.a]],null,null),(n()(),u._20(-1,0,["设置"])),(n()(),u._20(-1,3,["\n    "])),(n()(),u._20(-1,null,["\n\n"])),(n()(),u._20(-1,null,["\n\n\n"])),(n()(),u.Z(13,0,null,null,51,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,R.b,R.a)),u.Y(14,4374528,null,0,x.a,[g.a,V.a,E.a,u.j,u.z,Z.a,I.a,u.u,[2,Y.a],[2,z.a]],null,null),(n()(),u._20(-1,1,["\n    "])),(n()(),u.Z(16,0,null,1,11,"ion-list",[["class","mtop"]],null,null,null,null,null)),u.Y(17,16384,null,0,S.a,[g.a,u.j,u.z,V.a,D.l,E.a],null,null),(n()(),u._20(-1,null,["\n        "])),(n()(),u.Z(19,0,null,null,7,"ion-item",[["auth","true"],["class","item item-block"],["link","my/shortcut"],["tappable",""]],null,null,null,d.b,d.a)),u.Y(20,81920,null,0,N.a,[u.j,z.a,T.a],{url:[0,"url"],auth:[1,"auth"]},null),u.Y(21,1097728,null,3,b.a,[m.a,g.a,u.j,u.z,[2,v.a]],null,null),u._18(335544320,1,{contentLabel:0}),u._18(603979776,2,{_buttons:1}),u._18(603979776,3,{_icons:1}),u.Y(25,16384,null,0,y.a,[],null,null),(n()(),u._20(-1,2,["\n            快捷操作\n        "])),(n()(),u._20(-1,null,["\n    "])),(n()(),u._20(-1,1,["\n\n    "])),(n()(),u.Z(29,0,null,1,10,"ion-list",[],null,null,null,null,null)),u.Y(30,16384,null,0,S.a,[g.a,u.j,u.z,V.a,D.l,E.a],null,null),(n()(),u._20(-1,null,["\n        "])),(n()(),u.Z(32,0,null,null,6,"ion-item",[["class","item item-block"],["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;"click"===l&&(u=!1!==n.component.clearTalkRecords()&&u);return u},d.b,d.a)),u.Y(33,1097728,null,3,b.a,[m.a,g.a,u.j,u.z,[2,v.a]],null,null),u._18(335544320,4,{contentLabel:0}),u._18(603979776,5,{_buttons:1}),u._18(603979776,6,{_icons:1}),u.Y(37,16384,null,0,y.a,[],null,null),(n()(),u._20(-1,2,["\n            清空聊天记录\n        "])),(n()(),u._20(-1,null,["\n    "])),(n()(),u._20(-1,1,["\n\n    "])),(n()(),u.Z(41,0,null,1,22,"ion-list",[],null,null,null,null,null)),u.Y(42,16384,null,0,S.a,[g.a,u.j,u.z,V.a,D.l,E.a],null,null),(n()(),u._20(-1,null,["\n        "])),(n()(),u.Z(44,0,null,null,7,"ion-item",[["class","item item-block"],["link","my/about"],["tappable",""]],null,null,null,d.b,d.a)),u.Y(45,81920,null,0,N.a,[u.j,z.a,T.a],{url:[0,"url"]},null),u.Y(46,1097728,null,3,b.a,[m.a,g.a,u.j,u.z,[2,v.a]],null,null),u._18(335544320,7,{contentLabel:0}),u._18(603979776,8,{_buttons:1}),u._18(603979776,9,{_icons:1}),u.Y(50,16384,null,0,y.a,[],null,null),(n()(),u._20(-1,2,["\n            关于\n        "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u.Z(53,0,null,null,6,"ion-item",[["class","item item-block"],["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;"click"===l&&(u=!1!==n.component.updateVersion()&&u);return u},d.b,d.a)),u.Y(54,1097728,null,3,b.a,[m.a,g.a,u.j,u.z,[2,v.a]],null,null),u._18(335544320,10,{contentLabel:0}),u._18(603979776,11,{_buttons:1}),u._18(603979776,12,{_icons:1}),u.Y(58,16384,null,0,y.a,[],null,null),(n()(),u._20(-1,2,["\n            版本更新\n        "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u.U(16777216,null,null,1,null,J)),u.Y(62,16384,null,0,A.i,[u.I,u.F],{ngIf:[0,"ngIf"]},null),(n()(),u._20(-1,null,["\n    "])),(n()(),u._20(-1,1,["\n\n"]))],function(n,l){var t=l.component;n(l,20,0,"my/shortcut","true");n(l,45,0,"my/about"),n(l,62,0,t.user)},function(n,l){n(l,4,0,u._13(l,5)._hidden,u._13(l,5)._sbPadding),n(l,13,0,u._13(l,14).statusbarPadding,u._13(l,14)._hasRefresher)})}var B=u.V("page-settings",a,function(n){return u._22(0,[(n()(),u.Z(0,0,null,null,1,"page-settings",[],null,null,null,X,W)),u.Y(1,49152,null,0,a,[z.a,M.a,O.a,U.a,q.a,T.a,F.a,V.a],null,null)],null,null)},{},{},[]),G=t(27),H=t(690),K=t(181),Q=t(52);t.d(l,"SettingsModuleNgFactory",function(){return $});var $=u.W(e,[],function(n){return u._10([u._11(512,u.i,u.S,[[8,[o.a,i.a,s.a,r.a,c.a,h.a,p.a,_.a,f.a,B]],[3,u.i],u.s]),u._11(4608,A.k,A.j,[u.r,[2,A.s]]),u._11(4608,G.t,G.t,[]),u._11(4608,G.d,G.d,[]),u._11(512,H.a,H.a,[]),u._11(512,A.b,A.b,[]),u._11(512,G.r,G.r,[]),u._11(512,G.g,G.g,[]),u._11(512,G.o,G.o,[]),u._11(512,K.a,K.a,[]),u._11(512,K.b,K.b,[]),u._11(512,e,e,[]),u._11(256,Q.a,a,[])])})},690:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0),t(691);var u=function(){return function(){}}()},691:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0),t(58),t(77);var u=function(){function n(n,l,t){this.elm=n,this.navCtrl=l,this.globalData=t}return n.prototype.ngOnInit=function(){this.elm.nativeElement.addEventListener("click",this.gotoPage.bind(this))},n.prototype.gotoPage=function(){this.url&&(this.auth&&!this.globalData.token?this.navCtrl.push("login",this.params||{},{animate:!0}):this.url.startsWith("http")||this.navCtrl.push(this.url,this.params||{},{animate:!0,duration:200}))},n}()},692:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0),t(693),t(694);var u=function(){return function(){}}()},693:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0);var u=function(){function n(n){this.elm=n}return n.prototype.ngAfterViewInit=function(){},n.prototype.onMaskClick=function(){this.hideRoleList()},n.prototype.onRoleClick=function(){this.hideRoleList()},n.prototype.hideRoleList=function(){var n=this.elm.nativeElement.querySelector(".role-list-box");n&&(n.style.display="none")},n}()},694:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0);var u=function(){function n(n){this.elm=n}return n.prototype.ngAfterViewInit=function(){},n.prototype.showRoleList=function(){var n=this.getParentEl();if(n){var l=n.querySelector(".role-list-box");l&&(l.style.display="block")}},n.prototype.getParentEl=function(){for(var n=this.elm.nativeElement;-1==n.className.indexOf("user-wrap")&&n.parentNode&&n.parentNode!=document;)n=n.parentNode;return n},n}()},695:function(n,l,t){"use strict";t(692),t(690)}});