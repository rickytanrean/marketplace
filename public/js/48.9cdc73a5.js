(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"826c":function(a,e,t){"use strict";t.r(e);t("a4d3"),t("e01a");var i=function(){var a=this,e=a._self._c;return e("q-page",{staticClass:"q-pb-md"},[e("q-header",{class:a.getHeaderColorBrand},[e("q-toolbar",[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"eva-arrow-back"}}),e("q-toolbar-title",[a._v("\n       Tambah Produk\n      ")])],1)],1),e("form",{on:{submit:function(e){return e.preventDefault(),a.submit.apply(null,arguments)}}},[e("div",{staticClass:"q-pa-md q-gutter-y-md"},[e("q-input",{attrs:{type:"text",label:"Title Produk",required:""},model:{value:a.form.title,callback:function(e){a.$set(a.form,"title",e)},expression:"form.title"}}),e("CategoryBlock",{attrs:{category_id:a.form.category_id},on:{onUpdate:function(e){return a.form.category_id=e}}}),e("div",{staticClass:"q-mt-md q-mb-sm"},[e("label",{staticClass:"text-grey-7 q-pb-sm block",attrs:{for:"description"}},[a._v("Deskripsi")]),e("ContentEditor",{attrs:{content:a.form.description},on:{update:function(e){return a.form.description=e}}}),a.errors.description?e("div",{staticClass:"text-xs text-red"},[a._v(" "+a._s(a.errors.description[0]))]):a._e()],1)],1),e("q-card",{staticClass:"q-pa-xs",attrs:{square:"",flat:""}},[e("q-card-section",[e("div",{staticClass:"text-weight-medium text-md q-mb-sm text-grey-9"},[a._v("Gambar Produk")]),e("div",{staticClass:"q-py-md"},[e("div",{},[e("div",{staticClass:"row q-gutter-md"},[e("div",{staticClass:"box-image bordered cursor-pointer flex justify-center items-center",on:{click:a.selectNewImage}},[e("q-icon",{attrs:{name:"add_a_photo",size:"lg",color:"grey"}})],1),a._l(a.imagePreview,(function(t,i){return e("div",{key:i,staticClass:"box-image relative cursor-pointer",class:{"feature-image-selected":a.form.featured_index==i}},[e("img",{staticClass:"bg-white",attrs:{src:t},on:{click:function(e){return a.changeFeaturedImage(i)}}}),e("div",{staticClass:"absolute-top-right"},[e("q-btn",{attrs:{dense:"",size:"10px",unelevated:"",icon:"close",color:"red",padding:"1px"},on:{click:function(e){return e.preventDefault(),a.removeImage(i)}}})],1)])}))],2),a.imagePreview.length?e("div",{staticClass:"text-xs text-grey q-mt-md"},[a._v("Untuk memilih featured image klik pada gambar")]):a._e()])]),e("input",{ref:"image",staticClass:"hidden",attrs:{type:"file",multiple:""},on:{change:a.updateImagePreview}})])],1),e("q-card",{staticStyle:{"min-height":"300px"},attrs:{square:"",flat:""}},[e("q-card-section",[e("q-radio",{staticClass:"text-weight-medium text-md",attrs:{val:!0,label:"Simple Produk"},model:{value:a.form.simple_product,callback:function(e){a.$set(a.form,"simple_product",e)},expression:"form.simple_product"}}),e("q-radio",{staticClass:"text-weight-medium text-md",attrs:{val:!1,label:"Produk Dengan Varian"},model:{value:a.form.simple_product,callback:function(e){a.$set(a.form,"simple_product",e)},expression:"form.simple_product"}})],1),e("q-separator"),a.form.simple_product?e("q-card-section",{staticClass:"q-pb-xl q-px-lg",staticStyle:{"min-height":"200px"}},[e("h5",{staticClass:"q-py-md"},[a._v("Simple Produk")]),e("div",{staticClass:"row items-center q-gutter-x-sm"},[e("div",{staticClass:"col"},[e("money-formatter",{attrs:{required:"",outlined:"",prefix:"Rp"},model:{value:a.form.price,callback:function(e){a.$set(a.form,"price",e)},expression:"form.price"}})],1),e("div",{staticClass:"col"},[e("money-formatter",{attrs:{required:"",outlined:"",label:"Stok"},model:{value:a.form.stock,callback:function(e){a.$set(a.form,"stock",e)},expression:"form.stock"}})],1),e("div",{staticClass:"col"},[e("money-formatter",{attrs:{required:"",outlined:"",label:"Berat",suffix:"Gram"},model:{value:a.form.weight,callback:function(e){a.$set(a.form,"weight",e)},expression:"form.weight"}})],1)])]):a._e(),a.form.simple_product?a._e():e("q-card-section",{},[e("div",{staticStyle:{"min-height":"200px"},attrs:{id:"variants"}},[e("div",{staticClass:"row items-center q-gutter-sm q-py-md q-mb-md"},[e("h5",{staticClass:"q-mb-none text-grey-9"},[a._v("Produk Varian")]),a.canAddVarian?e("q-btn",{attrs:{outline:"",icon:"add","no-caps":"",label:"Tambah Varian",color:"primary",unelevated:"",size:"12px"},on:{click:function(e){a.varianModal=!0}}}):a._e()],1),a.form.varians.length?e("div",[a.form.varians[0].has_subvarian?e("div",a._l(a.form.varians,(function(t,i){return e("q-card",{key:i,staticClass:"q-mb-lg bg-grey-1",attrs:{flat:"",bordered:""}},[e("q-card-section",{staticClass:"q-px-sm"},[e("div",{staticClass:"row items-center justify-between q-mb-sm q-px-sm"},[e("div",{staticClass:"text-weight-bold text-md"},[a._v(a._s(a.form.varians[i].label)+" "+a._s(a.form.varians[i].value))]),e("q-btn-dropdown",{attrs:{flat:"","dropdown-icon":"more_vert",unelevated:"","auto-close":"","fab-mini":"","no-icon-animation":"",padding:"xs"}},[e("q-list",{attrs:{separator:"",bordered:""}},[e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return a.handleEditLabel(i)}}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"eva-edit",color:"blue"}})],1),e("q-item-section",[e("q-item-label",[a._v("Edit Label")])],1)],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return a.pushSubVarian(i)}}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"eva-plus-circle",color:"teal"}})],1),e("q-item-section",[e("q-item-label",[a._v("Tambah Item")])],1)],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return a.duplicateVarian(t,i,"main-var-")}}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"eva-copy",color:"purple"}})],1),e("q-item-section",[e("q-item-label",[a._v("Duplikat Varian")])],1)],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return a.deleteVarian(i)}}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"eva-close",color:"red"}})],1),e("q-item-section",[e("q-item-label",[a._v("Hapus Varian")])],1)],1)],1)],1)],1),a.form.varians[i].subvarian.length?e("q-list",{},a._l(a.form.varians[i].subvarian,(function(t,r){return e("q-item",{key:r,staticClass:"bg-white q-mb-sm box-shadow"},[e("q-item-section",[e("q-item-label",{staticClass:"q-mb-xs"},[e("q-input",{staticClass:"multi-varian",class:"main-var-"+i,attrs:{"stack-label":"",required:"",label:a.form.varians[i].subvarian[r].label},model:{value:a.form.varians[i].subvarian[r].value,callback:function(e){a.$set(a.form.varians[i].subvarian[r],"value",e)},expression:"form.varians[varIndex].subvarian[subIndex].value"}})],1),e("q-item-label",[e("money-formatter",{attrs:{"stack-label":"",required:"",prefix:"Rp",label:"Harga Jual"},model:{value:a.form.varians[i].subvarian[r].price,callback:function(e){a.$set(a.form.varians[i].subvarian[r],"price",e)},expression:"form.varians[varIndex].subvarian[subIndex].price"}})],1)],1),e("q-item-section",[e("q-item-label",{staticClass:"q-mb-xs"},[e("money-formatter",{attrs:{"stack-label":"",required:"",label:"Berat",suffix:"Gram"},model:{value:a.form.varians[i].subvarian[r].weight,callback:function(e){a.$set(a.form.varians[i].subvarian[r],"weight",e)},expression:"form.varians[varIndex].subvarian[subIndex].weight"}})],1),e("q-item-label",[e("money-formatter",{attrs:{"stack-label":"",required:"",label:"Stok"},model:{value:a.form.varians[i].subvarian[r].stock,callback:function(e){a.$set(a.form.varians[i].subvarian[r],"stock",e)},expression:"form.varians[varIndex].subvarian[subIndex].stock"}})],1)],1),e("q-item-section",{attrs:{side:""}},[e("q-btn",{attrs:{round:"",unelevated:"",padding:"2px",icon:"eva-close",size:"13px",color:"red"},on:{click:function(e){return a.deleteSubvarian(i,r)}}})],1)],1)})),1):a._e()],1)],1)})),1):e("q-card",{staticClass:"q-mb-lg bg-grey-1",attrs:{flat:""}},[e("q-card-section",{staticClass:"q-px-sm"},[e("div",{staticClass:"row items-center q-gutter-sm q-mb-md q-px-sm"},[e("div",{staticClass:"text-weight-bold text-lg"},[a._v(a._s(a.form.varians[0].label)+" ")]),e("div",[e("q-btn",{attrs:{unelevated:"",size:"10px",color:"teal"},on:{click:a.pushVarian}},[a._v("Tambah Item")])],1)]),e("q-list",a._l(a.form.varians,(function(t,i){return e("q-item",{key:i,staticClass:"bg-white q-mb-sm box-shadow"},[e("q-item-section",[e("q-item-label",{staticClass:"q-mb-xs"},[e("q-input",{staticClass:"single-varian",class:"input-var-"+i,attrs:{"stack-label":"",square:"",required:"",label:a.form.varians[i].label},model:{value:a.form.varians[i].value,callback:function(e){a.$set(a.form.varians[i],"value",e)},expression:"form.varians[vIndex].value"}})],1),e("q-item-label",[e("money-formatter",{attrs:{"stack-label":"",required:"",prefix:"Rp",label:"Harga Jual"},model:{value:a.form.varians[i].price,callback:function(e){a.$set(a.form.varians[i],"price",e)},expression:"form.varians[vIndex].price"}})],1)],1),e("q-item-section",[e("q-item-label",{staticClass:"q-mb-xs"},[e("money-formatter",{attrs:{"stack-label":"",required:"",label:"Berat",suffix:"Gram"},model:{value:a.form.varians[i].weight,callback:function(e){a.$set(a.form.varians[i],"weight",e)},expression:"form.varians[vIndex].weight"}})],1),e("q-item-label",[e("money-formatter",{attrs:{"stack-label":"",required:"",label:"Stok"},model:{value:a.form.varians[i].stock,callback:function(e){a.$set(a.form.varians[i],"stock",e)},expression:"form.varians[vIndex].stock"}})],1)],1),e("q-item-section",{attrs:{side:""}},[e("q-btn",{attrs:{unelevated:"",padding:"2px",icon:"eva-close",size:"13px",color:"red"},on:{click:function(e){return a.deleteVarian(i)}}}),e("q-btn",{staticClass:"q-mt-sm",attrs:{unelevated:"",padding:"2px",icon:"eva-copy",size:"13px",color:"blue"},on:{click:function(e){return a.duplicateVarian(t,i,"input-var-")}}})],1)],1)})),1)],1)],1)],1):a._e()])])],1),e("q-footer",{staticClass:"bg-white q-pa-md"},[e("q-btn",{staticClass:"full-width",attrs:{color:"primary",type:"submit",loading:a.loading,label:"Simpan Data"}},[e("q-tooltip",{staticClass:"bg-accent"},[a._v("Simpan Data")])],1)],1)],1),e("q-dialog",{model:{value:a.varianModal,callback:function(e){a.varianModal=e},expression:"varianModal"}},[e("q-dialog",{attrs:{persistent:""},model:{value:a.varianModal,callback:function(e){a.varianModal=e},expression:"varianModal"}},[e("VarianModal",{attrs:{mustHaveSubvarian:a.mustHaveSubvarian,canToggleSubvarian:a.canToggleSubvarian,has_subvarian:a.form.has_subvarian},on:{changeSubvarian:function(e){return a.form.has_subvarian=e},addVarian:a.addVarianProduk}})],1)],1),e("q-dialog",{attrs:{persistent:""},model:{value:a.editLabelModal,callback:function(e){a.editLabelModal=e},expression:"editLabelModal"}},[a.form.varians.length?e("q-card",{staticClass:"card-md"},[e("form",{on:{submit:function(e){return e.preventDefault(),a.submitEditLabel.apply(null,arguments)}}},[e("q-card-section",[e("q-input",{attrs:{required:"",label:"Varian Label"},model:{value:a.form.varians[a.editLabelIndex].label,callback:function(e){a.$set(a.form.varians[a.editLabelIndex],"label",e)},expression:"form.varians[editLabelIndex].label"}}),e("q-input",{attrs:{required:"",label:"Label"},model:{value:a.form.varians[a.editLabelIndex].value,callback:function(e){a.$set(a.form.varians[a.editLabelIndex],"value",e)},expression:"form.varians[editLabelIndex].value"}})],1),e("q-card-actions",{staticClass:"q-pa-md"},[e("q-btn",{attrs:{color:"primary",unelevated:"",label:"Simpan",type:"submit"}})],1)],1)]):a._e()],1)],1)},r=[],s=t("448a"),n=t.n(s),o=t("ded3"),l=t.n(o),c=(t("a434"),t("159b"),t("99af"),t("2ca0"),t("2f62")),m=t("9f05"),u=t("9738"),d=t("94f5"),v={components:{VarianModal:m["a"],ContentEditor:u["a"],CategoryBlock:d["a"]},name:"ProductFormCreate",data:function(){return{varianModal:!1,editLabelModal:!1,editLabelIndex:0,form:{title:"",price:0,weight:0,stock:0,description:"",category_id:"",varians:[],images:[],has_subvarian:!1,featured_index:0,simple_product:!0},imagePreview:[]}},computed:{errors:function(){return this.$store.state.errors},loading:function(){return this.$store.state.loading},categories:function(){return this.$store.getters["category/getValueOptions"]},mustHaveSubvarian:function(){return!(!this.form.varians.length||!this.form.varians[0].has_subvarian)||!!this.form.has_subvarian},canAddVarian:function(){return!(this.form.varians.length&&!this.form.varians[0].has_subvarian)},canToggleSubvarian:function(){return!this.form.varians.length||!this.form.varians[0].has_subvarian}},methods:l()(l()(l()({},Object(c["b"])("product",["productStore"])),Object(c["b"])("customerService",["getCustomerServices"])),{},{handleEditLabel:function(a){this.editLabelIndex=a,this.editLabelModal=!0},onUpdateCategory:function(a){this.form.category_id=a},submitEditLabel:function(){this.editLabelModal=!1},changeFeaturedImage:function(a){this.form.featured_index=a},deleteVarian:function(a){var e=this;this.$q.dialog({title:"Konfirmasi",message:"Yakin akan menghapus varian",cancel:!0}).onOk((function(){e.form.varians.splice(a,1)}))},deleteSubvarian:function(a,e){this.form.varians[a].subvarian.splice(e,1),this.form.varians[a].subvarian.length||this.form.varians.splice(a,1)},pushSubVarian:function(a){var e,t,i=this,r=this.form.varians[a],s={label:r.subvarian[0].label,value:"",stock:0,price:null!==(e=r.price)&&void 0!==e?e:0,weight:null!==(t=r.weight)&&void 0!==t?t:0};this.form.varians[a].subvarian.push(s),setTimeout((function(){var e=".main-var-".concat(a),t=document.querySelectorAll(e),r=n()(t),s=r[r.length-1];i.jumpToInputClass(s)}),500)},pushVarian:function(){var a,e,t=this;this.form.varians.push({has_subvarian:!1,label:this.form.varians[0].label,value:"",stock:0,price:null!==(a=this.form.price)&&void 0!==a?a:0,weight:null!==(e=this.form.weight)&&void 0!==e?e:0}),setTimeout((function(){var a=document.querySelectorAll(".single-varian"),e=n()(a),i=e[e.length-1];t.jumpToInputClass(i)}),500)},addVarianProduk:function(a){var e,t,i,r=this,s=null!==(e=this.form.price)&&void 0!==e?e:0,n=null!==(t=this.form.weight)&&void 0!==t?t:0,o=null!==(i=this.form.stock)&&void 0!==i?i:0;this.form.has_subvarian?a.tempVarian.value.forEach((function(e){var t={has_subvarian:!0,label:a.tempVarian.label,value:e,subvarian:[]};a.tempSubvarian.value.forEach((function(e){var i={label:a.tempSubvarian.label,value:e,stock:o,price:s,weight:n};t.subvarian.push(i)})),r.form.varians.push(t)})):a.tempVarian.value.forEach((function(e){r.form.varians.push({has_subvarian:!1,label:a.tempVarian.label,value:e,stock:o,price:s,weight:n})})),this.varianModal=!1},duplicateVarian:function(a,e,t){var i=this,r=null;a.has_subvarian?(r={has_subvarian:!0,label:a.label,value:a.value,subvarian:[]},a.subvarian.forEach((function(a){var e={label:a.label,value:"",stock:a.stock,price:a.price,weight:a.weight};r.subvarian.push(e)}))):r={has_subvarian:!1,label:a.label,value:"",stock:a.stock,price:a.price,weight:a.weight},this.form.varians.splice(e+1,0,r);var s=".".concat(t).concat(e+1);setTimeout((function(){var a=document.querySelector(s);i.jumpToInputClass(a)}),500),t.startsWith("main")&&setTimeout((function(){i.handleEditLabel(e+1)}),1e3)},jumpToInputClass:function(a){a.querySelector("INPUT").focus(),a.scrollIntoView({behavior:"smooth",block:"center"})},submit:function(){if(this.form.description)if(this.form.images.length)if(this.form.simple_product||this.form.varians.length){var a=new FormData;a.append("simple_product",this.form.simple_product),a.append("title",this.form.title),a.append("price",this.form.price),a.append("weight",this.form.weight),a.append("has_subvarian",this.form.has_subvarian),a.append("stock",this.form.stock),a.append("description",this.form.description),a.append("featured_index",this.form.featured_index),this.form.category_id&&a.append("category_id",this.form.category_id),this.form.varians.length>0&&a.append("varians",JSON.stringify(this.form.varians));for(var e=0;e<this.form.images.length;e++){var t=this.form.images[e];a.append("images["+e+"]",t)}this.productStore(a)}else this.$q.notify({type:"negative",message:"produk varian tidak boleh kosong"});else this.$q.notify({type:"negative",message:"Gambar tidak boleh kosong"});else this.$q.notify({type:"negative",message:"Deskripsi tidak boleh kosong"})},selectNewImage:function(){this.$refs.image.click()},updateImagePreview:function(){for(var a=this,e=this.$refs.image.files,t=0;t<e.length;t++){this.form.images.push(e[t]);var i=new FileReader;i.onload=function(e){a.imagePreview.push(e.target.result)},i.readAsDataURL(e[t])}},removeImage:function(a){this.form.featured_index==a&&(0!=a?this.form.featured_index--:this.form.featured_index=0),this.imagePreview.splice(a,1),this.form.images.splice(a,1)}})},p=v,f=t("2877"),b=t("9989"),h=t("e359"),g=t("65c6"),q=t("9c40"),k=t("6ac5"),x=t("27f9"),_=t("f09f"),w=t("a370"),y=t("0016"),C=t("3786"),I=t("eb85"),S=t("f20b"),V=t("1c1c"),L=t("66e5"),$=t("4074"),T=t("0170"),P=t("7ff0"),Q=t("05c0"),M=t("24e8"),D=t("4b7e"),E=t("2eeb"),j=t("7f67"),B=t("eebe"),N=t.n(B),H=Object(f["a"])(p,i,r,!1,null,null,null);e["default"]=H.exports;N()(H,"components",{QPage:b["a"],QHeader:h["a"],QToolbar:g["a"],QBtn:q["a"],QToolbarTitle:k["a"],QInput:x["a"],QCard:_["a"],QCardSection:w["a"],QIcon:y["a"],QRadio:C["a"],QSeparator:I["a"],QBtnDropdown:S["a"],QList:V["a"],QItem:L["a"],QItemSection:$["a"],QItemLabel:T["a"],QFooter:P["a"],QTooltip:Q["a"],QDialog:M["a"],QCardActions:D["a"]}),N()(H,"directives",{GoBack:E["a"],ClosePopup:j["a"]})}}]);