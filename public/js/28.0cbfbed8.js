(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"841d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"bg-white",attrs:{padding:""}},[e("q-header",{staticClass:"text-grey-9 bg-white box-shadow"},[e("q-toolbar",[e("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"eva-arrow-back"},on:{click:t.handleBackButton}}),e("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v(t._s(t.title))])],1)],1),t.carts&&t.carts.length?e("div",{ref:"top",staticClass:"q-pb-md",attrs:{id:"checkout"}},[e("q-stepper",{attrs:{"keep-alive":"",flat:"",color:"primary","alternative-labels":"",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[e("q-step",{staticClass:"q-pa-none",attrs:{name:1,title:"Pengiriman",done:t.step>1,icon:"local_shipping","active-icon":"local_shipping","done-icon":"local_shipping"}},[e("shipping-address",{attrs:{canEmail:""},on:{removePayment:t.removePayment}})],1),e("q-step",{attrs:{name:2,title:"Pembayaran",done:t.step>2,icon:"payments","active-icon":"payments","done-icon":"payments"}},[e("payment-list",{ref:"paymentList",attrs:{isCod:t.isCod,paymentSelected:t.paymentSelected,payments:t.paymentChanels},on:{onSelectPayment:t.onSelectPayment}})],1),e("q-step",{attrs:{name:3,title:"Review",done:t.step>3,icon:"playlist_add_check","active-icon":"playlist_add_check","done-icon":"playlist_add_check"}},[e("review-order",{attrs:{payment:t.paymentSelected,noPayment:t.isCantPaymentStep}})],1)],1)],1):t._e(),e("q-inner-loading",{attrs:{showing:t.loading}}),e("div",{staticClass:"bg-white q-py-md q-gutter-y-sm column",class:{"sticky-bottom":t.isStickyBottom}},[3!=t.step?e("q-btn",{attrs:{"no-caps":"",unelevated:"",label:"Langkah Selanjutnya",color:"primary"},on:{click:t.next}}):t._e(),3==t.step?e("q-btn",{attrs:{disable:t.loading,"no-caps":"",unelevated:"",label:"Proses Pesanan",color:"primary"},on:{click:t.submitOrder}}):t._e()],1)],1)},n=[],i=s("ded3"),r=s.n(i),o=(s("ac1f"),s("1276"),s("a15b"),s("159b"),s("99af"),s("b0c0"),s("5319"),s("2ca0"),s("caad"),s("b64b"),s("758b")),c=s("2f62"),m=s("54df"),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"q-gutter-y-lg"},[t.payments.localbanks.length||t.isCod?e("div",[e("fieldset",[e("legend",{staticClass:"q-px-sm"},[t._v(t._s(t.isCod&&t.config.is_cod_payment?"Bank Transfer / Bayar Ditempat":"Bank Transfer"))]),e("div",{staticClass:"row q-gutter-sm payment-container"},[t.isCod&&t.config.is_cod_payment?e("div",{staticClass:"box-shadow1 cursor-pointer payment-list column justify-center",class:{"is-selected text-primary":t.isSelectedCod},on:{click:t.selectCodPayment}},[e("div",{staticClass:"text-md text-weight-bold"},[t._v("COD")]),e("div",{staticClass:"text-center name"},[t._v("Bayar Ditempat")])]):t._e(),t._l(t.payments.localbanks,(function(s,a){return e("div",{key:a,staticClass:"box-shadow1 cursor-pointer payment-list column justify-center",class:{"is-selected text-primary":t.isSelectedBank(s.id)},on:{click:function(e){return t.selectPaymentBank(s)}}},[e("div",[e("div",{staticClass:"text-center text-weight-bold text-md"},[t._v(t._s(s.bank_name))]),e("div",{staticClass:"text-center text-weight-medium",staticStyle:{"font-size":"12px"}},[t._v("Kcp "+t._s(s.bank_office))]),e("div",{staticClass:"text-center text-weight-medium",staticStyle:{"font-size":"12px"}},[t._v("Bank Transfer")])])])}))],2),e("div",{staticClass:"q-px-sm text-caption"},[t._v("*Verifikasi manual")])])]):t._e(),t.virtualAccounts.length?e("div",[e("fieldset",[e("legend",{staticClass:"q-px-sm"},[t._v("Virtual Account")]),e("div",{staticClass:"row q-gutter-sm payment-container"},t._l(t.virtualAccounts,(function(s,a){return e("div",{key:a},[e("div",{staticClass:"box-shadow1 cursor-pointer payment-list",class:{"is-selected text-primary":t.isSelected(s.code)},on:{click:function(e){return t.selectPayment(s)}}},[e("div",{staticClass:"image"},[s.icon_url?e("img",{attrs:{src:s.icon_url}}):e("img",{attrs:{src:"/static/no-image.png"}})]),e("div",{staticClass:"text-center name"},[t._v(t._s(s.name))])]),t.isFeeCustomer(s.fee_customer)?e("div",{staticClass:"text-grey-7 text-xs q-pa-xs text-center"},[t._v("Fee "+t._s(t.moneyIDR(t.calculateFee(s.fee_customer))))]):t._e()])})),0)])]):t._e(),t.convenienceStore.length?e("div",[e("fieldset",[e("legend",{staticClass:"q-px-sm"},[t._v("Convenience Store")]),e("div",{staticClass:"row q-gutter-sm payment-container"},t._l(t.convenienceStore,(function(s,a){return e("div",{key:a},[e("div",{staticClass:"box-shadow1 cursor-pointer payment-list",class:{"is-selected text-primary":t.isSelected(s.code)},on:{click:function(e){return t.selectPayment(s)}}},[e("div",{staticClass:"image"},[s.icon_url?e("img",{attrs:{src:s.icon_url}}):e("img",{attrs:{src:"/static/no-image.png"}})]),e("div",{staticClass:"text-center name"},[t._v(t._s(s.name))])]),t.isFeeCustomer(s.fee_customer)?e("div",{staticClass:"text-grey-7 text-xs q-pa-xs text-center"},[t._v("Fee "+t._s(t.moneyIDR(t.calculateFee(s.fee_customer))))]):t._e()])})),0)])]):t._e(),t.ewalet.length?e("div",[e("fieldset",[e("legend",{staticClass:"q-px-sm"},[t._v("E-Walet")]),e("div",{staticClass:"row q-gutter-sm payment-container"},t._l(t.ewalet,(function(s,a){return e("div",{key:a},[e("div",{staticClass:"box-shadow1 cursor-pointer payment-list",class:{"is-selected text-primary":t.isSelected(s.code)},on:{click:function(e){return t.selectPayment(s)}}},[e("div",{staticClass:"image"},[s.icon_url?e("img",{attrs:{src:s.icon_url}}):e("img",{attrs:{src:"/static/no-image.png"}})]),e("div",{staticClass:"text-center name"},[t._v(t._s(s.name))])]),t.isFeeCustomer(s.fee_customer)?e("div",{staticClass:"text-grey-7 text-xs q-pa-xs text-center"},[t._v("Fee "+t._s(t.moneyIDR(t.calculateFee(s.fee_customer))))]):t._e()])})),0)])]):t._e()])},d=[],u=(s("4de4"),s("0481"),{props:{payments:Object,paymentSelected:Object,isCod:Boolean},data:function(){return{selected:null}},computed:{config:function(){return this.$store.state.config},formOrder:function(){return this.$store.getters["order/getFormOrder"]},virtualAccounts:function(){return this.payments&&this.payments.paymentGateway.length?this.payments.paymentGateway.filter((function(t){return"Virtual Account"==t.group&&1==t.active})):[]},convenienceStore:function(){return this.payments&&this.payments.paymentGateway.length?this.payments.paymentGateway.filter((function(t){return"Convenience Store"==t.group&&1==t.active})):[]},ewalet:function(){return this.payments&&this.payments.paymentGateway.length?this.payments.paymentGateway.filter((function(t){return"E-Wallet"==t.group&&1==t.active})):[]},isSelectedCod:function(){return"COD"==this.formOrder.payment_type}},methods:{isFeeCustomer:function(t){return!!(t&&t.flat>0||t.percent>0)},calculateFee:function(t){var e=parseInt(t.flat);if(t.percent>0){var s=parseInt(this.formOrder.total)*parseFloat(t.percent)/100;t.flat>0?e+=s:e=s}return parseInt(Math.ceil(e))},isSelected:function(t){return!!this.paymentSelected&&this.paymentSelected.code==t},isSelectedBank:function(t){return!!this.paymentSelected&&this.paymentSelected.id==t},commitFormOrder:function(t,e){this.$store.commit("order/SET_FORM_ORDER",{key:t,value:e})},selectCodPayment:function(){this.commitFormOrder("payment_name","Cash On Delivery"),this.commitFormOrder("payment_code",""),this.commitFormOrder("payment_fee",0),this.commitFormOrder("payment_method","COD"),this.commitFormOrder("payment_type","COD"),this.$emit("onSelectPayment",{payment_name:"COD",payment_type:"COD",payment_code:""})},selectPayment:function(t){this.commitFormOrder("payment_name",t.name),this.commitFormOrder("payment_code",""),this.commitFormOrder("payment_method",t.code),this.commitFormOrder("payment_type","PAYMENT_GATEWAY"),this.commitFormOrder("payment_fee",this.calculateFee(t.fee_customer)),this.$emit("onSelectPayment",t)},selectPaymentBank:function(t){var e=t.bank_name+" - "+t.bank_office+" a/n "+t.account_name;this.commitFormOrder("payment_name",e),this.commitFormOrder("payment_code",t.account_number),this.commitFormOrder("payment_method","BANK_TRANSFER"),this.commitFormOrder("payment_type","BANK_TRANSFER"),this.commitFormOrder("payment_fee",0),this.$emit("onSelectPayment",t)}}}),p=u,h=s("2877"),_=Object(h["a"])(p,l,d,!1,null,null,null),f=_.exports,y=function(){var t=this,e=t._self._c;return e("div",["OVO"==t.formOrder.payment_method?e("div",{staticClass:"q-mb-md"},[t._m(0)]):t._e(),e("fieldset",[e("legend",{staticClass:"q-pa-sm"},[t._v("Info Pengiriman")]),e("table",{staticClass:"table dense"},[e("tr",[e("th",{attrs:{align:"left"}},[t._v("Penerima")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.formOrder.customer_name))])]),e("tr",[e("th",{attrs:{align:"left"}},[t._v("Ponsel")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.formOrder.customer_phone))])]),e("tr",[e("th",{attrs:{align:"left"}},[t._v("Alamat")]),e("td",[t._v(":")]),e("td",[e("div",{domProps:{innerHTML:t._s(t.formOrder.customer_address)}})])]),e("tr",[e("th",{attrs:{align:"left"}},[t._v("Kurir")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.formOrder.shipping_courier_name))])]),t.formOrder.shipping_courier_service?e("tr",[e("th",{attrs:{align:"left"}},[t._v("Servis")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.formOrder.shipping_courier_service))])]):t._e()])]),e("fieldset",{staticClass:"q-mt-lg"},[e("legend",{staticClass:"q-pa-sm"},[t._v("Pembayaran")]),e("div",{staticClass:"row q-gutter-sm"},["COD"==t.formOrder.payment_type?[t._m(1)]:[e("div",{staticClass:"box-shadow payment-list is-selected"},[t.payment.icon_url?e("div",{staticClass:"image"},[e("img",{attrs:{src:t.payment.icon_url}})]):t._e(),"BANK_TRANSFER"==t.formOrder.payment_type?e("div",{staticStyle:{margin:"auto"}},[e("div",[e("div",{staticClass:"text-center text-weight-bold text-md"},[t._v(t._s(t.payment.bank_name))]),e("div",{staticClass:"text-center text-weight-medium",staticStyle:{"font-size":"12px"}},[t._v("Kcp "+t._s(t.payment.bank_office))]),e("div",{staticClass:"text-center text-weight-medium",staticStyle:{"font-size":"12px"}},[t._v("Bank Transfer")])])]):e("div",{staticClass:"text-center name"},[t._v("\n              "+t._s(t.payment.name)+"\n            ")])])]],2)]),e("fieldset",{staticClass:"q-mt-lg"},[e("legend",{staticClass:"q-pa-sm"},[t._v("Ringkasan Order")]),t.formOrder.items.length?e("div",{staticClass:"q-mb-md"},[e("q-separator"),e("q-list",{attrs:{separator:""}},[e("q-item",{staticClass:"bg-grey-1",attrs:{dense:""}},[e("q-item-section",[e("q-item-label",[t._v("Produk")])],1),e("q-item-section",{attrs:{side:""}},[e("q-item-label",[t._v("Subtotal")])],1)],1),t._l(t.formOrder.items,(function(s){return e("q-item",{key:s.id},[e("q-item-section",{attrs:{avatar:"",top:""}},[e("q-img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:s.image_url}})],1),e("q-item-section",[e("div",{staticClass:"col"},[e("div",{staticClass:"text-weight-medium"},[t._v(t._s(s.name))]),e("div",{staticClass:"text-caption text-grey-7"},[t._v(t._s(s.note))]),e("div",{staticClass:"text-grey-7"},[t._v(t._s(s.quantity+"X "+t.moneyIDR(s.price)))])])]),e("q-item-section",{attrs:{side:"",top:""}},[e("q-item-label",[t._v(t._s(t.moneyIDR(s.price*s.quantity)))])],1)],1)}))],2)],1):t._e(),e("q-separator"),e("div",{staticClass:"flex justify-end q-py-sm"},[e("table",{staticClass:"dense"},[e("tr",[e("td",{attrs:{align:"right"}},[t._v("Jumlah")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("td",[t._v("Rp")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.$money(t.formOrder.subtotal)))])]),e("tr",[e("td",{attrs:{align:"right"}},[t._v("Ongkos Kirim")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("td",[t._v("Rp")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.formOrder.shipping_cost?t.$money(t.formOrder.shipping_cost):0))])]),this.formOrder.service_fee>0?e("tr",[e("td",{attrs:{align:"right"}},[t._v(t._s(t.config.service_fee_label))]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("td",[t._v("Rp")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.formOrder.service_fee?t.$money(t.formOrder.service_fee):0))])]):t._e(),t.formOrder.payment_fee?e("tr",[e("td",{staticClass:"text-xs",attrs:{align:"right"}},[t._v("Payment Fee [ "+t._s(t.formOrder.payment_name)+" ]")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("td",[t._v("Rp")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.$money(t.formOrder.payment_fee)))])]):t._e(),t.formOrder.unique_code?e("tr",[e("td",{staticClass:"text-xs",attrs:{align:"right"}},[t._v("Kode Unik")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("td",[t._v("Rp")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.formOrder.unique_code))])]):t._e(),e("tr",[e("th",{attrs:{align:"right"}},[t._v("Total Bayar")]),e("th",{attrs:{align:"right"}},[t._v(":")]),e("td",[t._v("Rp")]),e("th",{attrs:{align:"right"}},[t._v(t._s(t.$money(t.formOrder.total+t.formOrder.payment_fee)))])])])])],1)])},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-yellow-2 text-grey-7 q-pa-sm"},[e("div",{staticClass:"text-weight-bold"},[t._v("Note:")]),e("div",[t._v("\n        Anda memilih metode pembayaran OVO, "),e("br"),t._v("Pastikan nomor ponsel dan email yang anda inputkan sama dengan yang terdaftar di OVO milik anda.\n      ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"box-shadow payment-list is-selected text-primary justify-center"},[e("div",{staticClass:"text-weight-bold text-lg text-center"},[t._v("COD")]),e("div",{staticClass:"text-center name"},[t._v("Bayar Ditempat")])])}],v={name:"ReviewOrder",props:{payment:Object,noPayment:Boolean},computed:{formOrder:function(){return this.$store.getters["order/getFormOrder"]},config:function(){return this.$store.state.config}},methods:{money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}},O=v,C=s("eb85"),b=s("1c1c"),x=s("66e5"),k=s("4074"),q=s("0170"),w=s("068f"),S=s("eebe"),P=s.n(S),R=Object(h["a"])(O,y,g,!1,null,null,null),F=R.exports;P()(R,"components",{QSeparator:C["a"],QList:b["a"],QItem:x["a"],QItemSection:k["a"],QItemLabel:q["a"],QImg:w["a"]});var I={components:{ShippingAddress:m["a"],PaymentList:f,ReviewOrder:F},name:"CheckoutPage",data:function(){return{step:1,formLoading:!1,paymentSelected:null,paymentChanels:{localbanks:[],paymentGateway:[]}}},watch:{step:function(){var t=this;setTimeout((function(){t.jumpTo("checkout")}),300)}},computed:{formOrder:function(){return this.$store.getters["order/getFormOrder"]},isOVO:function(){return"OVO"==this.formOrder.payment_method},isCod:function(){return"COD"==this.formOrder.shipping_courier_name},carts:function(){return this.$store.state.cart.carts},shop:function(){return this.$store.state.shop},config:function(){return this.$store.state.config},loading:function(){return this.$store.state.loading},isCodPayment:function(){return"COD"==this.formOrder.payment_method},isCantPaymentStep:function(){return"COD"==this.formOrder.shipping_courier_name||!this.config.is_payment_gateway},title:function(){return 1==this.step?"Pengiriman":2==this.step?"Pembayaran":3==this.step?"Review Order":"Checkout"},isStickyBottom:function(){return!!this.$q.platform.is.desktop||(!(2!=this.step||!this.paymentSelected)||3==this.step)},session_id:function(){return this.$store.state.session_id},errors:function(){return this.$store.state.errors}},mounted:function(){this.carts.length||this.$router.push({name:"Cart"}),this.config&&this.config.is_payment_gateway&&!this.paymentChanels.paymentGateway.length&&this.getPaymentChanel(),this.paymentChanels.localbanks.length||this.getLocalBanks(),this.collectOrder()},methods:r()(r()({},Object(c["b"])("order",["storeOrder"])),{},{commitFormOrder:function(t,e){this.$store.commit("order/SET_FORM_ORDER",{key:t,value:e})},removePayment:function(){this.paymentSelected=null},onSelectPayment:function(t){this.paymentSelected=t},collectOrder:function(){this.commitFormOrder("items",this.carts),this.commitFormOrder("subtotal",this.sumSubtotal()),this.commitFormOrder("quantity",this.sumQty()),this.commitFormOrder("weight",this.sumWeight()),this.config.is_service_fee&&this.commitFormOrder("service_fee",this.config.service_fee)},handleBackButton:function(){this.step>1?this.step-=1:this.$router.push({name:"Cart"})},getLocalBanks:function(){var t=this;Object(o["a"])().get("getBanks").then((function(e){200==e.status&&(t.paymentChanels.localbanks=e.data.results)}))},getPaymentChanel:function(){var t=this;Object(o["a"])().get("tripay/payment-chanel").then((function(e){200==e.status&&e.data.success&&(t.paymentChanels.paymentGateway=e.data.data)}))},submitOrder:function(){var t=this;this.$store.commit("SET_LOADING",!0),this.storeOrder(this.formOrder).then((function(e){t.$store.commit("SET_LOADING",!1),200==e.status&&(setTimeout((function(){t.$store.dispatch("cart/clearCart",t.session_id)}),2e4),t.$router.push({name:"UserInvoice",params:{order_ref:e.data.results.order_ref},query:{pay:!0}}),t.sendMessageNotification(e.data.results.id))})).catch((function(){t.ready=!1,t.$store.commit("SET_LOADING",!1)}))},sendMessageNotification:function(t){setTimeout((function(){Object(o["a"])().post("notify-order",{order_id:t})}),12e3)},formatAddressCod:function(t){var e=t.split("<br>");return e.join("\n")},directChekout:function(t){var e=this,s="https://api.whatsapp.com";this.$q.platform.is.desktop&&(s="https://web.whatsapp.com");var a=this.formatPhoneNumber(this.shop.phone),n="Halo kak, saya mau order:\n\n",i=t.items,r=1;i.forEach((function(t){n+="*".concat(r,". ").concat(t.name,"*\n"),t.note&&(n+="[".concat(t.note,"]\n")),n+="Jumlah: ".concat(t.quantity,"\nHarga (@): ").concat(e.moneyIDR(t.price),"\nHarga Total: ").concat(e.moneyIDR(t.quantity*t.price),"\n\n"),r++})),n+="Subtotal: *".concat(this.moneyIDR(t.order_subtotal),"*\nOngkir: *").concat(this.moneyIDR(t.shipping_cost),"\nTotal: *").concat(this.moneyIDR(t.order_total),"*\n------------------------\n\n*Nama:*\n ").concat(t.customer_name," (").concat(t.customer_whatsapp,")\n\n*Alamat:*\n").concat(this.formatAddressCod(t.shipping_address),"\n\n"),n+="Metode Pembayaran: ".concat(t.transaction.payment_name,"\n\n"),n+="Referensi Order:\n".concat(this.getRoutePath(t.order_ref));var o=s+"/send?phone="+a+"&text="+encodeURI(n);window.open(o,"_blank")},formatPhoneNumber:function(t){var e=t.replace(/\D/g,"");return e.startsWith("0")&&(e="62"+e.substr(1)),e},getRoutePath:function(t){var e=this.$router.resolve({name:"UserInvoice",params:{order_ref:t}});return location.origin+e.href},next:function(){this.$store.commit("CLEAR_ERRORS");var t=["customer_name","customer_phone","customer_email","customer_address"],e=["shipping_destination","shipping_courier_name","shipping_courier_service"],s=["payment_method"];if(1==this.step)for(var a in this.formOrder)(t.includes(a)||e.includes(a))&&(this.formOrder[a]&&""!=this.formOrder[a]||this.$store.commit("PUSH_ERRORS",{key:a,value:!0}));if(2==this.step)for(var n in this.formOrder)s.includes(n)&&(this.formOrder[n]&&""!=this.formOrder[n]||this.$store.commit("PUSH_ERRORS",{key:n,value:!0}));if(Object.keys(this.errors).length>0)for(var i in this.errors){if("shipping_destination"==i)return this.jumpTo("shipping_destination"),void this.$q.notify({type:"negative",message:"Tujuan pengiriman belum diisi"});if("shipping_courier_service"==i)return this.jumpTo("courier"),void this.$q.notify({type:"negative",message:"Kurir belum dipilih"});if(t.includes(i))return this.jumpTo("customer"),void this.$q.notify({type:"negative",message:"Data penerima belum lengkap"});if("payment_method"==i)return void this.$q.notify({type:"negative",message:"Metode pembayaran belum dipilih"})}else this.step+=1},prev:function(){this.step-=1},sumQty:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(e){t.push(parseInt(e.quantity))})),t.reduce((function(t,e){return t+e}))}return parseInt(this.carts[0].quantity)},sumSubtotal:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(e){t.push(parseInt(e.quantity)*parseInt(e.price))})),t.reduce((function(t,e){return t+e}))}return parseInt(this.carts[0].quantity)*parseInt(this.carts[0].price)},sumGrandTotal:function(){return this.sumSubtotal()+parseInt(this.formOrder.shipping_cost)},sumWeight:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(e){t.push(parseInt(e.weight)*parseInt(e.quantity))})),t.reduce((function(t,e){return t+e}))}return parseInt(this.carts[0].quantity)*parseInt(this.carts[0].weight)}}),meta:function(){return{title:"Checkout"}}},$=I,D=s("9989"),T=s("e359"),B=s("65c6"),A=s("9c40"),E=s("6ac5"),j=s("f531"),N=s("87fe"),Q=s("74f7"),G=Object(h["a"])($,a,n,!1,null,null,null);e["default"]=G.exports;P()(G,"components",{QPage:D["a"],QHeader:T["a"],QToolbar:B["a"],QBtn:A["a"],QToolbarTitle:E["a"],QStepper:j["a"],QStep:N["a"],QInnerLoading:Q["a"]})}}]);