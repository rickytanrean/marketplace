(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"3b36":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("q-layout",{staticClass:"bg-white",attrs:{view:"hHh lpR fFf"}},[e("q-page-container",[e("router-view")],1)],1)},s=[],i=n("ded3"),r=n.n(i),u=n("2f62"),c=n("515f"),a={name:"AdminLayout",computed:r()({},Object(u["d"])({isCheckLogin:function(t){return t.user.isCheckLogin},shop:function(t){return t.shop},user:function(t){return t.user.user},config:function(t){return t.config}})),created:function(){this.shop||this.$store.dispatch("getShop"),c["a"].get("__token")&&(this.user||this.$store.dispatch("user/getUser")),this.config&&this.$store.commit("SET_THEME_COLOR",this.config.theme_color)},methods:{LogOut:function(){this.$store.dispatch("user/logout")}}},h=a,f=n("2877"),p=n("4d5a"),d=n("09e3"),g=n("eebe"),l=n.n(g),w=Object(f["a"])(h,o,s,!1,null,null,null);e["default"]=w.exports;l()(w,"components",{QLayout:p["a"],QPageContainer:d["a"]})}}]);