(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{d35d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("q-page",{class:{"flex flex-center":!t.categories.available}},[e("q-header",{class:t.getHeaderColorBrand},[e("q-toolbar",[e("q-btn",{attrs:{to:{name:"Settings"},flat:"",round:"",dense:"",icon:"eva-arrow-back"}}),e("q-toolbar-title",[t._v("\n       List Kategori\n      ")]),e("q-btn",{staticClass:"gt-xs",attrs:{color:"white","text-color":"grey-8",size:"13px",label:"Tambah Kategori","no-caps":"",icon:"eva-plus-circle",to:{name:"CategoryForm"}}})],1)],1),t.categories.available?[e("div",{},[e("q-list",{attrs:{separator:""}},[e("q-item",{staticClass:"item-header"},[e("q-item-section",{attrs:{avatar:""}},[t._v("\n          #\n        ")]),e("q-item-section",{staticStyle:{width:"65px"},attrs:{side:""}},[t._v("\n         Ikon\n        ")]),e("q-item-section",[t._v("\n          Label\n        ")]),e("q-item-section",[t._v("\n          Urutan\n        ")]),e("q-item-section",[t._v("\n          Listing\n        ")]),e("q-item-section",{attrs:{side:""}},[t._v("\n          Aksi\n        ")])],1),t._l(t.categories.data,(function(a){return e("q-expansion-item",{key:a.id,attrs:{"expand-separator":"",group:"menu-category","switch-toggle-side":""},scopedSlots:t._u([{key:"header",fn:function(){return[e("q-item-section",{attrs:{avatar:""}},[e("q-img",{staticClass:"img-thumbnail img-avatar",attrs:{src:a.src,ratio:"1"}})],1),e("q-item-section",[t._v("\n          "+t._s(a.title)+"\n        ")]),e("q-item-section",[e("div",{staticClass:"q-pa-md"},[t._v(t._s(a.weight))])]),e("q-item-section",[e("div",[e("q-chip",{attrs:{size:"sm",color:a.is_front?"positive":"grey","text-color":"white",icon:"eva-checkmark-circle-2"}},[t._v("\n              "+t._s(a.is_front?"Yes":"No")+"\n            ")])],1)]),e("q-item-section",{attrs:{side:""}},[e("div",{staticClass:"row items-center q-gutter-x-sm"},[e("q-btn",{attrs:{round:"",color:"red",dense:"",size:"11px",unelevated:"",icon:"eva-trash-2"},on:{click:function(e){return t.remove(a.id)}}}),e("q-btn",{attrs:{round:"",color:"blue",dense:"",size:"11px",to:{name:"CategoryFormEdit",params:{category_id:a.id}},unelevated:"",icon:"eva-edit-2"}})],1)])]},proxy:!0}],null,!0)},[e("q-list",{staticClass:"bg-grey-1",attrs:{separator:""}},[t._l(a.childs,(function(a){return e("q-item",{key:a.id},[e("q-item-section",[e("q-icon",{attrs:{name:"subdirectory_arrow_right",size:"19px"}})],1),e("q-item-section",[e("q-item-label",[t._v(t._s(a.title))])],1),e("q-item-section",{attrs:{side:""}},[e("div",{staticClass:"text-grey-8 q-gutter-x-sm"},[e("q-btn",{attrs:{unelevated:"",round:"",color:"red",dense:"",size:"11px",icon:"eva-trash-2"},on:{click:function(e){return t.remove(a.id)}}}),e("q-btn",{attrs:{unelevated:"",round:"",color:"blue",dense:"",size:"11px",to:{name:"CategoryFormEdit",params:{category_id:a.id}},icon:"eva-edit-2"}})],1)])],1)})),a.childs.length?t._e():e("div",{staticClass:"q-py-lg text-center"},[t._v("Tidak ada subkategori")])],2)],1)}))],2)],1)]:[e("div",[t._v("Tidak ada data")])],e("q-inner-loading",{attrs:{showing:!t.categories.ready}}),e("q-page-sticky",{staticClass:"lt-sm",attrs:{position:"bottom-right",offset:[12,12]}},[e("q-btn",{attrs:{glossy:"",fab:"",icon:"add",color:"primary",to:{name:"CategoryForm"}}})],1)],2)},s=[],n=a("ded3"),o=a.n(n),r=a("2f62"),c={data:function(){return{modal:!1,removeId:null}},computed:o()({},Object(r["d"])({categories:function(t){return t.category.categories}})),methods:o()(o()({},Object(r["b"])("category",["getCategoriesWithChilds","categoryDelete"])),{},{remove:function(t){var e=this;this.removeId=t,this.$q.dialog({title:"Konfirmasi Penghapusan Item",message:"Yakin akan menghapus data?",ok:{label:"Hapus",flat:!0,"no-caps":!0},cancel:{label:"Batal",flat:!0,"no-caps":!0}}).onOk((function(){e.categoryDelete(e.removeId)}))}}),created:function(){this.categories.data.length||this.getCategoriesWithChilds()}},l=c,d=a("2877"),m=a("9989"),g=a("e359"),u=a("65c6"),v=a("9c40"),p=a("6ac5"),q=a("1c1c"),b=a("66e5"),h=a("4074"),f=a("3b73"),_=a("068f"),y=a("b047"),k=a("0016"),x=a("0170"),C=a("74f7"),w=a("de5e"),Q=a("eebe"),I=a.n(Q),z=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=z.exports;I()(z,"components",{QPage:m["a"],QHeader:g["a"],QToolbar:u["a"],QBtn:v["a"],QToolbarTitle:p["a"],QList:q["a"],QItem:b["a"],QItemSection:h["a"],QExpansionItem:f["a"],QImg:_["a"],QChip:y["a"],QIcon:k["a"],QItemLabel:x["a"],QInnerLoading:C["a"],QPageSticky:w["a"]})}}]);