(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{5785:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e._self._c;return a("q-page",{staticClass:"q-pb-xl"},[a("q-header",{class:e.getHeaderColorBrand},[a("q-toolbar",[a("q-toolbar-title",[e._v("\n        Dashboard\n      ")]),a("q-btn",{attrs:{to:{name:"Home",query:{load:"true"}},flat:"","icon-right":"eva-arrow-forward",label:"Lihat Toko","no-caps":""}})],1)],1),a("div",{staticClass:"overflow-x-hidden relative"},[a("q-list",{attrs:{separator:""}},[e._l(e.menus,(function(t,o){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:o,attrs:{clickable:"",to:{name:t.path}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:e.colors[o],"text-color":"white",icon:t.icon,size:"md"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v(e._s(t.caption))])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"eva-chevron-right"}})],1)],1)})),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(a){return a.preventDefault(),e.logout.apply(null,arguments)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:"red","text-color":"white",icon:"logout",size:"md"}})],1),a("q-item-section",[a("q-item-label",[e._v("Logout")]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("Keluar Sesi")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"eva-chevron-right"}})],1)],1)],2)],1)],1)},n=[],r={data:function(){return{isShowen:!1,colors:["green","purple","blue","deep-orange","teal","amber-7","green","purple","blue","deep-orange","teal","amber-7","green","purple","blue","deep-orange","teal","amber-7"],menus:[{label:"Akun",caption:"Pengaturan Akun",path:"Account",icon:"person",color:"green"},{label:"Toko",caption:"Pengaturan Tampilan toko",path:"Shop",icon:"store",color:"blue"},{label:"Order",caption:"Kelola pesanan",path:"OrderIndex",icon:"receipt",color:"green"},{label:"Produk",caption:"Tambah, edit dan hapus produk",path:"AdminProductIndex",icon:"inventory_2",color:"deep-orange"},{label:"Promo",caption:"Kelola produk promo",path:"PromoIndex",icon:"local_offer",color:"blue-7"},{label:"Kategori",caption:"Kelola kategori produk",path:"CategoryIndex",icon:"category",color:"amber-7"},{label:"Slider",caption:"Kelola slideshow",path:"Slider",icon:"view_carousel",color:"teal"},{label:"Block",caption:"Kelola banner, partner dan featured",path:"AdminBlockIndex",icon:"space_dashboard",color:"amber-7"},{label:"Artikel",caption:"Kelola Artikel / blog",path:"AdminPostIndex",icon:"article",color:"deep-orange"},{label:"Akun Bank",caption:"Kelola Akun Bank",path:"BankIndex",icon:"account_balance",color:"purple"},{label:"Manage User",caption:"kelola user",path:"UserList",icon:"group",color:"teal"},{label:"Produk Reviews",caption:"Manage Reviews Produk",path:"ReviewsIndex",icon:"comment",color:"purple"},{label:"Pengaturan",caption:"Pengaturan Website dan pengiriman",path:"Config",icon:"settings",color:"blue"}]}},computed:{shop:function(){return this.$store.state.shop}},methods:{getYear:function(){var e=new Date;return e.getFullYear()},go:function(){window.open("https://nextshop.my.id","_blank")},logout:function(){this.$store.dispatch("user/logout")},exitApp:function(){this.$store.dispatch("user/exitApp",navigator)}}},l=r,i=t("2877"),c=t("9989"),p=t("e359"),s=t("65c6"),u=t("6ac5"),d=t("9c40"),b=t("1c1c"),m=t("66e5"),h=t("4074"),g=t("cb32"),v=t("0170"),k=t("0016"),q=t("7ff0"),f=t("714f"),w=t("eebe"),x=t.n(w),_=Object(i["a"])(l,o,n,!1,null,null,null);a["default"]=_.exports;x()(_,"components",{QPage:c["a"],QHeader:p["a"],QToolbar:s["a"],QToolbarTitle:u["a"],QBtn:d["a"],QList:b["a"],QItem:m["a"],QItemSection:h["a"],QAvatar:g["a"],QItemLabel:v["a"],QIcon:k["a"],QFooter:q["a"]}),x()(_,"directives",{Ripple:f["a"]})}}]);