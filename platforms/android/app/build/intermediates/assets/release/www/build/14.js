webpackJsonp([14],{662:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t(2),o=(t(0),t(58),t(77),function(){function n(n,l,t){this.navCtrl=n,this.navParams=l,this.http=t,this.shortcutBtn="编辑",this.canEditable=!1,this.shortcutFuns=[],this.allFuns=[]}return n.prototype.ionViewDidLoad=function(){var n=this;this.http.get("app/function/loadAll.do").subscribe(function(l){l.funs&&(n.allFuns=l.funs),l.userFuns&&(n.shortcutFuns=l.userFuns)})},n.prototype.doSetShortcut=function(){var n=this;if("完成"==this.shortcutBtn){this.canEditable=!1,this.shortcutBtn="编辑";for(var l=[],t=0;t<this.allFuns.length;t++)this.allFuns[t].isCheck&&!this.allFuns[t].recommend&&l.push(this.allFuns[t].id);this.http.postFormData("app/shutcut/save.do",{funs:l.join(",")}).subscribe(function(l){for(var t=0;t<n.allFuns.length;t++)n.allFuns[t].cls="";for(t=0;t<n.shortcutFuns.length;t++)n.shortcutFuns[t].cls=""})}else{this.canEditable=!0,this.shortcutBtn="完成";for(t=0;t<this.shortcutFuns.length;t++)this.shortcutFuns[t].recommend||(this.shortcutFuns[t].cls="del-icon");for(t=0;t<this.allFuns.length;t++)this.allFuns[t].cls=this.allFuns[t].isCheck?"has-add-icon":"no-add-icon"}},n.prototype.delShortcut=function(n){if("完成"==this.shortcutBtn&&!n.recommend){for(var l=0;l<this.allFuns.length;l++)this.allFuns[l].name==n.name&&(this.allFuns[l].isCheck=!1,this.allFuns[l].cls="no-add-icon");var t=-1;for(l=0;l<this.shortcutFuns.length;l++)if(this.shortcutFuns[l].name==n.name){t=l;break}t>-1&&this.shortcutFuns.splice(t,1)}},n.prototype.addShortcut=function(n){"完成"==this.shortcutBtn&&"has-add-icon"!=n.cls&&(n.cls="has-add-icon",n.isCheck=!0,this.shortcutFuns.push({id:n.id,name:n.name,logo:n.logo,recommend:n.recommend,isCheck:!0,cls:"del-icon"}))},n}()),i=(t(695),function(){return function(){}}()),s=t(352),a=t(353),e=t(354),r=t(355),c=t(356),h=t(357),f=t(358),d=t(359),p=t(360),_=t(111),m=t(3),b=t(7),g=t(361),v=t(36),F=t(12),y=t(28),k=t(362),Z=t(78),x=t(53),S=t(119),j=t(47),C=t(29),E=t(363),P=t(30),Y=t(6),w=t(13),$=t(33),B=t(19),N=t(16),O=t(112),z=u.X({encapsulation:2,styles:[],data:{}});function L(n){return u._22(0,[(n()(),u.Z(0,0,null,null,9,"li",[],null,null,null,null,null)),(n()(),u._20(-1,null,["\n            "])),(n()(),u.Z(2,0,null,null,6,"a",[["href","javascript:;"]],[[8,"className",0]],[[null,"click"]],function(n,l,t){var u=!0;"click"===l&&(u=!1!==n.component.delShortcut(n.context.$implicit)&&u);return u},null,null)),(n()(),u._20(-1,null,["\n                "])),(n()(),u.Z(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),u._20(-1,null,["\n                "])),(n()(),u.Z(6,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u._20(7,null,["",""])),(n()(),u._20(-1,null,["\n            "])),(n()(),u._20(-1,null,["\n        "]))],null,function(n,l){n(l,2,0,u._2(1,"tool-icon ",l.context.$implicit.cls,"")),n(l,4,0,u._2(1,"",l.context.$implicit.logo,"")),n(l,7,0,l.context.$implicit.name)})}function R(n){return u._22(0,[(n()(),u.Z(0,0,null,null,9,"li",[],null,null,null,null,null)),(n()(),u._20(-1,null,["\n            "])),(n()(),u.Z(2,0,null,null,6,"a",[["href","javascript:;"]],[[8,"className",0]],[[null,"click"]],function(n,l,t){var u=!0;"click"===l&&(u=!1!==n.component.addShortcut(n.context.$implicit)&&u);return u},null,null)),(n()(),u._20(-1,null,["\n                "])),(n()(),u.Z(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),u._20(-1,null,["\n                "])),(n()(),u.Z(6,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u._20(7,null,["",""])),(n()(),u._20(-1,null,["\n            "])),(n()(),u._20(-1,null,["\n        "]))],null,function(n,l){n(l,2,0,u._2(1,"tool-icon ",l.context.$implicit.cls,"")),n(l,4,0,u._2(1,"",l.context.$implicit.logo,"")),n(l,7,0,l.context.$implicit.name)})}function I(n){return u._22(0,[(n()(),u._20(-1,null,["\n"])),(n()(),u.Z(1,0,null,null,19,"ion-header",[],null,null,null,null,null)),u.Y(2,16384,null,0,_.a,[m.a,u.j,u.z,[2,b.a]],null,null),(n()(),u._20(-1,null,["\n\n    "])),(n()(),u.Z(4,0,null,null,15,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,g.b,g.a)),u.Y(5,49152,null,0,v.a,[F.a,[2,b.a],[2,y.a],m.a,u.j,u.z],null,null),(n()(),u._20(-1,3,["\n        "])),(n()(),u.Z(7,0,null,3,2,"ion-title",[],null,null,null,k.b,k.a)),u.Y(8,49152,null,0,Z.a,[m.a,u.j,u.z,[2,x.a],[2,v.a]],null,null),(n()(),u._20(-1,0,["快捷操作"])),(n()(),u._20(-1,3,["\n        "])),(n()(),u.Z(11,0,null,2,7,"ion-buttons",[["end",""]],null,null,null,null,null)),u.Y(12,16384,null,1,S.a,[m.a,u.j,u.z,[2,x.a],[2,v.a]],null,null),u._18(603979776,1,{_buttons:1}),(n()(),u._20(-1,null,["\n            "])),(n()(),u.Z(15,0,null,null,2,"button",[["ion-button",""],["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;"click"===l&&(u=!1!==n.component.doSetShortcut()&&u);return u},j.b,j.a)),u.Y(16,1097728,[[1,4]],0,C.a,[[8,""],m.a,u.j,u.z],null,null),(n()(),u._20(17,0,["\n                ","\n            "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u._20(-1,3,["\n    "])),(n()(),u._20(-1,null,["\n\n"])),(n()(),u._20(-1,null,["\n\n\n"])),(n()(),u.Z(22,0,null,null,20,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,E.b,E.a)),u.Y(23,4374528,null,0,P.a,[m.a,Y.a,w.a,u.j,u.z,F.a,$.a,u.u,[2,b.a],[2,y.a]],null,null),(n()(),u._20(-1,1,["\n\n    "])),(n()(),u.Z(25,0,null,1,1,"div",[["class","tool-box-label"]],null,null,null,null,null)),(n()(),u._20(-1,null,["快捷操作"])),(n()(),u._20(-1,1,["\n    "])),(n()(),u.Z(28,0,null,1,4,"ul",[["class","tool-box white-bg"]],null,null,null,null,null)),(n()(),u._20(-1,null,["\n        "])),(n()(),u.U(16777216,null,null,1,null,L)),u.Y(31,802816,null,0,B.h,[u.I,u.F,u.p],{ngForOf:[0,"ngForOf"]},null),(n()(),u._20(-1,null,["\n    "])),(n()(),u._20(-1,1,["\n\n    "])),(n()(),u.Z(34,0,null,1,1,"div",[["class","tool-box-label"]],null,null,null,null,null)),(n()(),u._20(-1,null,["全部应用"])),(n()(),u._20(-1,1,["\n    "])),(n()(),u.Z(37,0,null,1,4,"ul",[["class","tool-box white-bg"]],null,null,null,null,null)),(n()(),u._20(-1,null,["\n        "])),(n()(),u.U(16777216,null,null,1,null,R)),u.Y(40,802816,null,0,B.h,[u.I,u.F,u.p],{ngForOf:[0,"ngForOf"]},null),(n()(),u._20(-1,null,["\n    "])),(n()(),u._20(-1,1,["\n\n"]))],function(n,l){var t=l.component;n(l,31,0,t.shortcutFuns),n(l,40,0,t.allFuns)},function(n,l){var t=l.component;n(l,4,0,u._13(l,5)._hidden,u._13(l,5)._sbPadding),n(l,17,0,t.shortcutBtn),n(l,22,0,u._13(l,23).statusbarPadding,u._13(l,23)._hasRefresher)})}var D=u.V("page-shortcut",o,function(n){return u._22(0,[(n()(),u.Z(0,0,null,null,1,"page-shortcut",[],null,null,null,I,z)),u.Y(1,49152,null,0,o,[y.a,N.a,O.a],null,null)],null,null)},{},{},[]),V=t(27),A=t(690),M=t(181),q=t(52);t.d(l,"ShortcutPageModuleNgFactory",function(){return U});var U=u.W(i,[],function(n){return u._10([u._11(512,u.i,u.S,[[8,[s.a,a.a,e.a,r.a,c.a,h.a,f.a,d.a,p.a,D]],[3,u.i],u.s]),u._11(4608,B.k,B.j,[u.r,[2,B.s]]),u._11(4608,V.t,V.t,[]),u._11(4608,V.d,V.d,[]),u._11(512,A.a,A.a,[]),u._11(512,B.b,B.b,[]),u._11(512,V.r,V.r,[]),u._11(512,V.g,V.g,[]),u._11(512,V.o,V.o,[]),u._11(512,M.a,M.a,[]),u._11(512,M.b,M.b,[]),u._11(512,i,i,[]),u._11(256,q.a,o,[])])})},690:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0),t(691);var u=function(){return function(){}}()},691:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0),t(58),t(77);var u=function(){function n(n,l,t){this.elm=n,this.navCtrl=l,this.globalData=t}return n.prototype.ngOnInit=function(){this.elm.nativeElement.addEventListener("click",this.gotoPage.bind(this))},n.prototype.gotoPage=function(){this.url&&(this.auth&&!this.globalData.token?this.navCtrl.push("login",this.params||{},{animate:!0}):this.url.startsWith("http")||this.navCtrl.push(this.url,this.params||{},{animate:!0,duration:200}))},n}()},692:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0),t(693),t(694);var u=function(){return function(){}}()},693:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0);var u=function(){function n(n){this.elm=n}return n.prototype.ngAfterViewInit=function(){},n.prototype.onMaskClick=function(){this.hideRoleList()},n.prototype.onRoleClick=function(){this.hideRoleList()},n.prototype.hideRoleList=function(){var n=this.elm.nativeElement.querySelector(".role-list-box");n&&(n.style.display="none")},n}()},694:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(0);var u=function(){function n(n){this.elm=n}return n.prototype.ngAfterViewInit=function(){},n.prototype.showRoleList=function(){var n=this.getParentEl();if(n){var l=n.querySelector(".role-list-box");l&&(l.style.display="block")}},n.prototype.getParentEl=function(){for(var n=this.elm.nativeElement;-1==n.className.indexOf("user-wrap")&&n.parentNode&&n.parentNode!=document;)n=n.parentNode;return n},n}()},695:function(n,l,t){"use strict";t(692),t(690)}});