(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"90a3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("q-header",{class:t.getHeaderColorBrand},[e("q-toolbar",[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"eva-arrow-back"}}),e("q-toolbar-title",[t._v("\n       Tambah Post\n      ")])],1)],1),e("form",{staticClass:"q-gutter-y-md",on:{submit:function(e){return e.preventDefault(),t.submitPost.apply(null,arguments)}}},[e("q-input",{attrs:{filled:"",label:"Title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),e("q-input",{attrs:{filled:"",label:"Kategori"},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}}),e("q-list",[e("q-item",{staticClass:"q-px-xs"},[e("q-item-section",{attrs:{side:""}},[e("q-item-label",[e("q-toggle",{model:{value:t.form.is_promote,callback:function(e){t.$set(t.form,"is_promote",e)},expression:"form.is_promote"}},[t._v("Tampil Diberanda")])],1)],1),e("q-item-section",[e("q-item-label",[e("q-toggle",{model:{value:t.form.is_listing,callback:function(e){t.$set(t.form,"is_listing",e)},expression:"form.is_listing"}},[t._v("Tampil Dihalaman")])],1)],1)],1)],1),e("div",[e("div",{staticClass:"label-text"},[t._v("\n        Konten\n      ")]),e("ContentEditor",{attrs:{content:t.form.body},on:{update:function(e){return t.form.body=e}}})],1),e("div",{staticStyle:{"min-height":"100px"}},[e("q-btn",{staticClass:"mt-2 mr-2",attrs:{label:"Upload Gambar",size:"sm",color:"primary",icon:"eva-upload",type:"button"},on:{click:function(e){return e.preventDefault(),t.selectNewImage.apply(null,arguments)}}}),t.imagePreview?e("q-list",{staticClass:"q-py-md"},[e("q-item",[e("q-item-section",[e("img",{staticClass:"shadow-4 q-pa-xs bg-white",staticStyle:{width:"100px",height:"70px","object-fit":"cover"},attrs:{src:t.imagePreview}})]),e("q-space"),e("q-item-section",{attrs:{side:""}},[e("q-btn",{attrs:{size:"sm",color:"red",glossy:"",round:"",icon:"eva-trash-2"},on:{click:t.removeImage}})],1)],1)],1):t._e()],1),e("q-footer",{staticClass:"bg-white q-pa-md"},[e("q-btn",{staticClass:"full-width",attrs:{loading:t.loading,label:"Simpan Data",type:"submit",color:"primary"}})],1)],1),e("input",{ref:"image",staticClass:"hidden",attrs:{type:"file"},on:{change:t.updateImagePreview}})],1)},s=[],o=a("ded3"),r=a.n(o),n=a("2f62"),l=a("9738"),m={name:"PostCreate",components:{ContentEditor:l["a"]},data:function(){return{form:{title:"",tags:"",body:"",image:"",is_listing:!0,is_promote:!0},imagePreview:""}},computed:{loading:function(){return this.$store.state.loading}},methods:r()(r()({},Object(n["b"])("post",["addPost"])),{},{submitPost:function(){this.$store.commit("SET_LOADING",!0),this.addPost(this.form)},updateImagePreview:function(){var t=this;if(this.form.image=this.$refs.image.files[0],this.form.image){var e=new FileReader;e.onload=function(e){t.imagePreview=e.target.result},e.readAsDataURL(this.$refs.image.files[0])}},selectNewImage:function(){this.$refs.image.click()},removeImage:function(){this.imagePreview="",this.form.image=""}})},c=m,d=a("2877"),f=a("9989"),u=a("e359"),g=a("65c6"),p=a("9c40"),b=a("6ac5"),v=a("27f9"),h=a("1c1c"),q=a("66e5"),w=a("4074"),_=a("0170"),y=a("9564"),P=a("2c91"),k=a("7ff0"),C=a("2eeb"),Q=a("eebe"),x=a.n(Q),I=Object(d["a"])(c,i,s,!1,null,null,null);e["default"]=I.exports;x()(I,"components",{QPage:f["a"],QHeader:u["a"],QToolbar:g["a"],QBtn:p["a"],QToolbarTitle:b["a"],QInput:v["a"],QList:h["a"],QItem:q["a"],QItemSection:w["a"],QItemLabel:_["a"],QToggle:y["a"],QSpace:P["a"],QFooter:k["a"]}),x()(I,"directives",{GoBack:C["a"]})}}]);