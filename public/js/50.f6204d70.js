(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"178c":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c");var i=function(){var t=this,e=t._self._c;return e("q-page",[e("q-header",{class:t.getHeaderColorBrand},[e("q-toolbar",[e("q-btn",{attrs:{to:{name:"Settings"},flat:"",round:"",dense:"",icon:"eva-arrow-back"}}),e("q-toolbar-title",[t._v("\n       List Produk\n      ")]),e("q-btn",{staticClass:"gt-xs",attrs:{color:"white","text-color":"grey-8",size:"13px","no-caps":"",icon:"eva-plus-circle",to:{name:"ProductCreate"},label:"Tambah Produk"}})],1)],1),e("div",{staticClass:"q-pa-md row item-center q-gutter-x-sm"},[e("div",{staticClass:"col"},[e("q-input",{ref:"input",attrs:{loading:t.loading,outlined:"",dense:"",color:"grey-2",placeholder:"ketik nama produk"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchProduct.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("q-btn",{attrs:{unelevated:"",label:"Cari",color:"primary"},on:{click:t.searchProduct}}),e("q-btn",{attrs:{outline:"",label:"Reset",color:"primary"},on:{click:t.getAdminProducts}})],1),e("div",{staticClass:"q-pt-sm q-pb-xl"},[e("q-list",{attrs:{separator:""}},[e("q-item",{staticClass:"item-header"},[e("q-item-section",[t._v("Produk")])],1),t._l(t.products.data,(function(a){return e("q-item",{key:a.id},[e("q-item-section",{staticClass:"q-pr-md",attrs:{avatar:"",top:""}},[a.featured_image?e("q-img",{staticClass:"bg-white img-product-admin img-thumbnail",attrs:{src:a.featured_image.src,ratio:"1",width:"55px"}}):t._e()],1),e("q-item-section",{attrs:{top:""}},[e("div",[e("q-item-label",{staticClass:"text-15 text-weight-medium text-grey-9",attrs:{lines:"2"}},[t._v(t._s(a.title))]),a.varian_items_count>0?[e("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.renderVarianPrice(a)))]),e("q-item-label",{attrs:{caption:""}},[t._v("Total Stok : "+t._s(a.varian_items_sum_stock)+" ( "+t._s(a.varian_items_count)+" varian )")])]:[e("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.moneyIDR(a.price)))]),e("q-item-label",{attrs:{caption:""}},[t._v("Stok : "+t._s(a.stock))])]],2)]),e("q-item-section",{attrs:{side:"",top:""}},[t.isDesktop?t._e():e("div",[e("q-fab",{attrs:{color:"primary",icon:"eva-chevron-left",direction:"left",glossy:"",padding:"sm",unelevated:""}},[e("q-fab-action",{attrs:{unelevated:"",round:"",icon:"eva-trash-2",glossy:"",color:"red"},on:{click:function(e){return t.remove(a.id)}}}),e("q-fab-action",{attrs:{unelevated:"",to:{name:"ProductEdit",params:{id:a.id}},round:"",glossy:"",color:"blue",icon:"eva-edit-2"}}),e("q-fab-action",{attrs:{unelevated:"",to:{name:"ProductShow",params:{slug:a.slug}},round:"",glossy:"",color:"teal",icon:"eva-external-link-outline"}}),a.varian_items_count>0?e("q-fab-action",{attrs:{unelevated:"",round:"",icon:"eva-pantone",glossy:"",color:"accent"},on:{click:function(e){return t.getDetailVarian(a)}}}):t._e()],1)],1),t.isDesktop?e("div",{staticClass:"row q-gutter-xs"},[a.varian_items_count>0?e("q-btn",{attrs:{size:"sm",round:"",icon:"eva-pantone",color:"accent"},on:{click:function(e){return t.getDetailVarian(a)}}},[e("q-tooltip",{attrs:{"content-class":"bg-dark"}},[t._v("Detil Varian")])],1):t._e(),e("q-btn",{attrs:{size:"sm",round:"",icon:"eva-trash-2",color:"red"},on:{click:function(e){return t.remove(a.id)}}},[e("q-tooltip",{attrs:{"content-class":"bg-dark"}},[t._v("Hapus")])],1),e("q-btn",{attrs:{size:"sm",to:{name:"ProductEdit",params:{id:a.id}},round:"",color:"blue",icon:"eva-edit-2"}},[e("q-tooltip",{attrs:{"content-class":"bg-dark"}},[t._v("Edit")])],1),e("q-btn",{attrs:{size:"sm",to:{name:"ProductShow",params:{slug:a.slug}},round:"",color:"teal",icon:"eva-external-link-outline"}},[e("q-tooltip",{attrs:{"content-class":"bg-dark"}},[t._v("Lihat")])],1)],1):t._e()])],1)}))],2),t.products.next_page_url?e("div",{staticClass:"q-my-md q-gutter-sm text-center"},[e("q-btn",{attrs:{loading:t.isLoadmore,"no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.paginate(t.products.next_page_url)}}},[e("span",[t._v("Loadmore...")])])],1):t._e()],1),t.products.available?t._e():[e("div",{staticClass:"text-center q-pt-xl"},[t._v("Tdak ada data")])],e("q-page-sticky",{staticClass:"lt-sm",attrs:{position:"bottom-left",offset:[12,12]}},[e("q-btn",{attrs:{fab:"",icon:"add",color:"primary",to:{name:"ProductCreate"},glossy:""}})],1),e("q-dialog",{attrs:{persistent:"",position:"bottom"},model:{value:t.varianViewModal,callback:function(e){t.varianViewModal=e},expression:"varianViewModal"}},[t.productSelected?e("q-card",{staticClass:"max-width q-pb-lg",staticStyle:{"min-height":"400px"}},[e("q-list",[e("q-item",[e("q-item-section",[e("q-item-label",{staticClass:"text-weight-medium",attrs:{lines:"1"}},[e("div",[t._v(t._s(t.productSelected.title))])])],1),e("q-item-section",{attrs:{side:""}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"eva-close",flat:"",padding:"xs",round:""}})],1)],1)],1),e("q-separator"),e("div",[e("q-list",{attrs:{dense:"",separator:""}},t._l(t.varian_items,(function(a){return e("q-item",{key:a.id},[e("q-item-section",[e("q-item-label",{staticClass:"q-gutter-x-xs"},[a.attribute_value?[e("span",[t._v(t._s(a.attribute_label)+" "+t._s(a.attribute_value))]),e("span",[t._v("/")]),e("span",[t._v(t._s(a.value))])]:e("span",[t._v(t._s(a.label)+" "+t._s(a.value))])],2)],1),e("q-item-section",[t._v("Stok : "+t._s(a.stock))]),e("q-item-section",[t._v("Harga : "+t._s(t.moneyIDR(parseInt(a.price))))])],1)})),1)],1),e("q-inner-loading",{attrs:{showing:t.is_loading_varian}})],1):t._e()],1)],2)},n=[],s=a("ded3"),o=a.n(s),r=(a("99af"),a("d3b7"),a("e6cf"),a("a79d"),a("2f62")),c=a("758b"),l={name:"AdminProductList",data:function(){return{productSelected:null,varianViewModal:!1,pageNumber:1,search:"",productSearch:[],showListId:null,isLoadmore:!1,is_loading_varian:!1,varian_items:[]}},computed:o()(o()({},Object(r["d"])({products:function(t){return t.product.admin_products},loading:function(t){return t.loading}})),{},{isDesktop:function(){return window.innerWidth>600}}),methods:o()(o()({},Object(r["b"])("product",["getAdminProducts","productDelete","searchAdminProducts"])),{},{selectVarian:function(t){this.varianViewModal=!0,this.productSelected=t},renderVarianPrice:function(t){if(t.min_price&&t.max_price){var e=parseInt(t.min_price.price),a=parseInt(t.max_price.price);return e<a?"".concat(this.moneyIDR(e)," - ").concat(this.moneyIDR(a)):"@ ".concat(this.moneyIDR(e))}return""},searchProduct:function(){var t=this;this.$store.commit("SET_LOADING",!0),this.$refs.input.blur(),this.searchAdminProducts(this.search).then((function(e){200==e.status&&t.$store.commit("product/SET_ADMIN_PRODUCTS",e.data.results)})).finally((function(){t.$store.commit("SET_LOADING",!1)}))},showList:function(t){this.showListId==t?this.showListId=null:this.showListId=t},remove:function(t){var e=this;this.$q.dialog({title:"Konfirmasi Penghapusan Item",message:"Yakin akan menghapus data?",ok:{label:"Hapus",flat:!0,"no-caps":!0},cancel:{label:"Batal",flat:!0,"no-caps":!0}}).onOk((function(){e.productDelete(t)}))},getMargin:function(t){return t.buy_price&&t.price?t.price-t.buy_price:0},paginate:function(t){var e=this;this.isLoadmore=!0,Object(c["a"])().get(t).then((function(t){200==t.status&&e.$store.commit("product/PAGINATE_ADMIN_PRODUCTS",t.data.results)})).finally((function(){return e.isLoadmore=!1}))},getDetailVarian:function(t){var e=this;this.varianViewModal=!0,this.productSelected&&this.productSelected.id==t.id||(this.varian_items=[],this.is_loading_varian=!0,this.productSelected=t,Object(c["a"])().get("products/varians/"+t.id).then((function(t){200==t.status&&(e.varian_items=t.data.results)})).finally((function(){return e.is_loading_varian=!1})))}}),created:function(){this.products.data.length<=this.products.per_page&&this.getAdminProducts()}},d=l,u=a("2877"),p=a("9989"),m=a("e359"),_=a("65c6"),v=a("9c40"),g=a("6ac5"),b=a("27f9"),h=a("1c1c"),f=a("66e5"),q=a("4074"),k=a("068f"),y=a("0170"),w=a("c294"),x=a("72db"),P=a("05c0"),C=a("de5e"),I=a("24e8"),S=a("f09f"),D=a("eb85"),Q=a("74f7"),L=a("7f67"),A=a("eebe"),T=a.n(A),V=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=V.exports;T()(V,"components",{QPage:p["a"],QHeader:m["a"],QToolbar:_["a"],QBtn:v["a"],QToolbarTitle:g["a"],QInput:b["a"],QList:h["a"],QItem:f["a"],QItemSection:q["a"],QImg:k["a"],QItemLabel:y["a"],QFab:w["a"],QFabAction:x["a"],QTooltip:P["a"],QPageSticky:C["a"],QDialog:I["a"],QCard:S["a"],QSeparator:D["a"],QInnerLoading:Q["a"]}),T()(V,"directives",{ClosePopup:L["a"]})}}]);