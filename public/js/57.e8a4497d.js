(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"1e8f":function(t,e,n){"use strict";n.r(e);n("b0c0");var r=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"bg-grey-1 default main-page"},[e("q-header",{staticClass:"bg-white text-dark box-shadow",class:{"auto-padding-side":t.$q.platform.is.desktop}},[e("q-toolbar",{staticClass:"items-center sans"},[t.shop?e("img",{staticClass:"logo",attrs:{src:t.shop.logo?t.shop.logo:"/icon/icon-192x192.png",alt:"Logo"}}):t._e(),t.shop&&t.shop.name?e("q-toolbar-title",{staticClass:"text-weight-bold text-brand"},[t._v(t._s(t.shop.name))]):t._e(),e("shopping-cart")],1)],1),t.loading?t._e():[e("Slider"),e("FeaturedCarousel"),e("CategoryCarousel"),t.product_promo.length?e("div",{attrs:{id:"product-promo"}},[e("ProductPromo",{attrs:{product_promo:t.product_promo}})],1):t._e(),t.banner1?e("div",{staticClass:"banner auto-padding-side block-container"},[e("img",{attrs:{src:t.banner1.image_url,alt:"banner"},on:{click:function(e){return t.goToPost(t.banner1)}}})]):t._e(),e("ProductSectionObserver"),t.banner2?e("div",{staticClass:"banner auto-padding-side block-container"},[e("img",{attrs:{src:t.banner2.image_url,alt:"banner"},on:{click:function(e){return t.goToPost(t.banner2)}}})]):t._e(),e("PostBlock"),t.banner3?e("div",{staticClass:"banner auto-padding block-container"},[e("img",{attrs:{src:t.banner3.image_url,alt:"banner"},on:{click:function(e){return t.goToPost(t.banner3)}}})]):t._e(),e("InstallApp"),e("FooterBock")],e("q-inner-loading",{attrs:{showing:t.loading,label:"Please wait..."}},[e("q-spinner-facebook",{attrs:{size:"50px",color:"brand"}})],1)],2)},a=[],i=n("ded3"),o=n.n(i),s=(n("e260"),n("d3b7"),n("e6cf"),n("3ca3"),n("ddb0"),n("7db0"),n("2f62")),c=n("c6c8"),l=function(){var t=this,e=t._self._c;return t.sliders.ready&&t.sliders.available?e("div",{staticClass:"overflow-hidden"},[e("vue-glide",{attrs:{options:t.glideOptions}},t._l(t.sliders.data,(function(t,n){return e("vue-glide-slide",{key:n},[e("div",{staticClass:"slider-padding"},[e("img",{staticClass:"img-slider",staticStyle:{"border-radius":"6px"},attrs:{alt:"Slider",src:t.src}})])])})),1)],1):t._e()},d=[],u={name:"FrontSlider",data:function(){return{glideOptions:{type:"carousel",gap:10,perView:1,animationDuration:1e3,autoplay:6e3,bullet:!0}}},computed:{sliders:function(){return this.$store.state.front.sliders},page_width:function(){return this.$store.state.page_width},sliderHeight:function(){return this.page_width<768?"".concat(this.page_width/2.2,"px"):"".concat(768/2.2,"px")}},watch:{sliderCount:function(t){t>0&&!this.sliders.ready&&this.$store.dispatch("front/getSliders")}}},p=u,g=n("2877"),b=Object(g["a"])(p,l,d,!1,null,null,null),f=b.exports,h=n("3990"),m=function(){var t=this,e=t._self._c;return e("div",[t.categories.ready&&t.categories.data.length>1?e("div",{staticClass:"auto-padding block-container",attrs:{id:"categories"}},[t._m(0),e("div",{staticClass:"block-content q-pb-sm"},[e("div",{staticClass:"overflow-hidden"},[e("vue-glide",{attrs:{options:t.glideOptions}},t._l(t.categories.data,(function(n){return e("vue-glide-slide",{key:n.id},[e("div",{staticClass:"column full-height text-center"},[n.src?e("q-img",{staticClass:"cursor-pointer rounded-borders bg-white",attrs:{src:n.src,ratio:"1"},on:{click:function(e){return t.openCategory(n.id)}}}):t._e(),e("div",{staticClass:"text-category-auto text-center q-mt-xs"},[t._v(t._s(n.title))])],1)])})),1)],1)])]):t._e()])},_=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-heading"},[e("div",{staticClass:"block-title"},[e("h2",[t._v("Kategori")])])])}],v={name:"CategoryCarousel",data:function(){return{glideOptions:{rewind:!1,perView:5,gap:16,bound:!0,breakpoints:{600:{perView:4,gap:12},360:{perView:3,gap:8}}}}},created:function(){this.setGlideOptions()},computed:{categories:function(){return this.$store.state.front.categories}},methods:{setGlideOptions:function(){4==this.categories.length&&(this.glideOptions.perView=4)},openCategory:function(t){t&&this.$router.push({name:"ProductCategory",params:{id:t}})}}},C=v,w=n("068f"),k=n("eebe"),x=n.n(k),y=Object(g["a"])(C,m,_,!1,null,null,null),P=y.exports;x()(y,"components",{QImg:w["a"]});var O=n("955b"),q=n("567b"),S={name:"DefaultTheme",components:{ShoppingCart:c["a"],Slider:f,FeaturedCarousel:h["a"],CategoryCarousel:P,ProductPromo:O["a"],ProductSectionObserver:q["a"],PostBlock:function(){return Promise.all([n.e(1),n.e(4)]).then(n.bind(null,"8581"))},FooterBock:function(){return n.e(3).then(n.bind(null,"bae6"))},InstallApp:function(){return n.e(2).then(n.bind(null,"30b4"))}},computed:o()(o()({},Object(s["d"])({loading:function(t){return t.loading},initial_data:function(t){return t.initial_data},banners:function(t){return t.front.blocks.banner},shop:function(t){return t.shop},config:function(t){return t.config},product_promo:function(t){return t.front.product_promo}})),{},{banner1:function(){return this.banners.find((function(t){return 1==t.weight}))},banner2:function(){return this.banners.find((function(t){return 2==t.weight}))},banner3:function(){return this.banners.find((function(t){return 3==t.weight}))}})},Q=S,T=n("9989"),F=n("e359"),$=n("65c6"),V=n("6ac5"),j=n("74f7"),B=n("e669"),I=Object(g["a"])(Q,r,a,!1,null,null,null);e["default"]=I.exports;x()(I,"components",{QPage:T["a"],QHeader:F["a"],QToolbar:$["a"],QToolbarTitle:V["a"],QInnerLoading:j["a"],QSpinnerFacebook:B["a"]})}}]);