(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{abda:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("841c");var r=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"romance bg-light main-page"},[e("q-header",{staticClass:"bg-white box-shadow",class:{"auto-padding-side":t.$q.platform.is.desktop},attrs:{reveal:"","reveal-offset":10}},[e("q-toolbar",{staticClass:"q-py-sm"},[t.shop?e("img",{staticClass:"logo",attrs:{src:t.shop.logo?t.shop.logo:"/icon/icon-192x192.png",alt:"Logo"}}):t._e(),e("div",{staticClass:"col q-ml-sm row items-center"},[e("div",{staticClass:"col"},[e("q-input",{ref:"input",staticClass:"input-search text-xs bg-grey-1",attrs:{borderless:"",color:"grey-4",dense:"",placeholder:"cari produk..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchNow.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"eva-search"},on:{click:t.searchNow}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("div",{staticClass:"q-pl-sm"},[e("shopping-cart")],1)])])],1),t.loading?t._e():[e("Slider"),e("FeaturedCarousel"),e("CategoryCarousel"),t.product_promo.length?e("div",{attrs:{id:"product-promo"}},[e("ProductPromo",{attrs:{product_promo:t.product_promo}})],1):t._e(),t.banner1?e("div",{staticClass:"banner auto-padding-side block-container"},[e("img",{attrs:{src:t.banner1.image_url,alt:"banner"},on:{click:function(e){return t.goToPost(t.banner1)}}})]):t._e(),e("ProductSectionObserver"),t.banner2?e("div",{staticClass:"banner auto-padding-side block-container"},[e("img",{attrs:{src:t.banner2.image_url,alt:"banner"},on:{click:function(e){return t.goToPost(t.banner2)}}})]):t._e(),e("PostBlock"),t.banner3?e("div",{staticClass:"banner auto-padding block-container"},[e("img",{attrs:{src:t.banner3.image_url,alt:"banner"},on:{click:function(e){return t.goToPost(t.banner3)}}})]):t._e(),e("InstallApp"),e("FooterBock")],e("q-inner-loading",{attrs:{showing:t.loading,label:"Please wait..."}},[e("q-spinner-facebook",{attrs:{size:"50px",color:"brand"}})],1)],2)},o=[],a=n("ded3"),s=n.n(a),i=(n("e260"),n("d3b7"),n("e6cf"),n("3ca3"),n("ddb0"),n("7db0"),n("2f62")),c=n("c6c8"),l=function(){var t=this,e=t._self._c;return t.sliders.ready&&t.sliders.available?e("div",{staticClass:"overflow-hidden header-romance"},[e("vue-glide",{attrs:{options:t.glideOptions}},t._l(t.sliders.data,(function(t,n){return e("vue-glide-slide",{key:n},[e("img",{staticClass:"img-slider",attrs:{alt:"Slider",src:t.src}})])})),1)],1):t._e()},u=[],d={name:"FrontSlider",data:function(){return{glideOptions:{type:"carousel",gap:10,perView:1,animationDuration:1e3,autoplay:6e3,bullet:!0}}},computed:{sliders:function(){return this.$store.state.front.sliders},sliderCount:function(){return this.$store.getters["front/getSliderCount"]},page_width:function(){return this.$store.state.page_width},sliderHeight:function(){return this.page_width<768?"".concat(this.page_width/2.2,"px"):"".concat(768/2.2,"px")}},watch:{sliderCount:function(t){t>0&&!this.sliders.ready&&this.$store.dispatch("front/getSliders")}}},p=d,g=n("2877"),h=Object(g["a"])(p,l,u,!1,null,null,null),b=h.exports,f=n("3990"),m=function(){var t=this,e=t._self._c;return e("div",[t.categories.ready&&t.categories.data.length>1?e("div",{staticClass:"auto-padding block-container",attrs:{id:"categories"}},[t._m(0),e("div",{staticClass:"block-content q-pb-sm"},[e("div",{staticClass:"overflow-hidden"},[e("vue-glide",{attrs:{options:t.glideOptions}},t._l(t.categories.data,(function(n){return e("vue-glide-slide",{key:n.id},[e("div",{staticClass:"column full-height relative bg-white"},[n.src?e("q-img",{staticClass:"cursor-pointer rounded-borders",attrs:{src:n.src,ratio:"1"},on:{click:function(e){return t.openCategory(n.id)}}}):t._e()],1),e("div",{staticClass:"text-category-auto text-center q-mt-xs"},[t._v(t._s(n.title))])])})),1)],1)])]):t._e()])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-heading"},[e("div",{staticClass:"block-title"},[e("h2",[t._v("Kategori")])])])}],C={name:"CategoryCarousel",data:function(){return{glideOptions:{rewind:!1,perView:5,gap:16,bound:!0,breakpoints:{600:{perView:4,gap:12},360:{perView:3,gap:8}}}}},computed:{categories:function(){return this.$store.state.front.categories}},mounted:function(){this.setGlideOptions()},methods:{setGlideOptions:function(){4==this.categories.length&&(this.glideOptions.perView=4)},openCategory:function(t){t&&this.$router.push({name:"ProductCategory",params:{id:t}})}}},_=C,k=n("068f"),w=n("eebe"),y=n.n(w),q=Object(g["a"])(_,m,v,!1,null,null,null),x=q.exports;y()(q,"components",{QImg:k["a"]});var P=n("955b"),O=n("567b"),S={name:"RomanceTheme",components:{ShoppingCart:c["a"],Slider:b,FeaturedCarousel:f["a"],CategoryCarousel:x,ProductPromo:P["a"],ProductSectionObserver:O["a"],PostBlock:function(){return Promise.all([n.e(1),n.e(4)]).then(n.bind(null,"8581"))},FooterBock:function(){return n.e(3).then(n.bind(null,"bae6"))},InstallApp:function(){return n.e(2).then(n.bind(null,"30b4"))}},data:function(){return{search:"",showLoading:!0}},computed:s()(s()({},Object(i["d"])({loading:function(t){return t.loading},banners:function(t){return t.front.blocks.banner},shop:function(t){return t.shop},product_promo:function(t){return t.front.product_promo}})),{},{banner1:function(){return this.banners.find((function(t){return 1==t.weight}))},banner2:function(){return this.banners.find((function(t){return 2==t.weight}))},banner3:function(){return this.banners.find((function(t){return 3==t.weight}))}}),methods:{searchNow:function(){this.search&&""!=this.search&&this.$router.push({name:"ProductSearch",query:{q:this.search}})}}},Q=S,$=n("9989"),F=n("e359"),I=n("65c6"),T=n("27f9"),V=n("0016"),j=n("74f7"),B=n("e669"),L=Object(g["a"])(Q,r,o,!1,null,null,null);e["default"]=L.exports;y()(L,"components",{QPage:$["a"],QHeader:F["a"],QToolbar:I["a"],QInput:T["a"],QIcon:V["a"],QInnerLoading:j["a"],QSpinnerFacebook:B["a"]})}}]);