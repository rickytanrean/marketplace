(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"3bf2":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-page",{staticClass:"flex flex-center relative"},[a("q-header",{staticClass:"text-primary bg-white box-shadow"},[a("q-toolbar",{attrs:{dense:""}},[a("q-btn",{attrs:{to:{name:"Login"},flat:"",round:"",dense:"",icon:"eva-arrow-back"}}),a("q-toolbar-title",{staticClass:"text-weight-medium"},[t._v("Lupa Password")])],1)],1),a("div",{staticClass:"q-pa-sm",staticStyle:{"max-width":"420px",width:"100%"}},[a("div",{staticClass:"flex justify-center"},[t.shop&&t.shop.logo_path?a("img",{staticStyle:{width:"auto",height:"75px","object-fit":"contain","max-width":"150px"},attrs:{src:t.shop.logo}}):a("img",{staticStyle:{width:"auto",height:"75px","object-fit":"contain","max-width":"150px"},attrs:{src:"/icon/icon-192x192.png"}})]),t.errors.email?a("div",{staticClass:"text-red q-pb-sm text-center"},[t._v(t._s(t.errors.email[0]))]):t._e(),a("q-card",{staticClass:"q-pt-sm",staticStyle:{background:"rgb(255 255 255 / 71%)"},attrs:{flat:""}},[a("q-card-section",[t.isHasRequest?t._e():a("div",{staticClass:"text-grey-7 q-pa-sm"},[t._v("\n         Lupa kata sandi? Silahkan masukan email yang terdaftar di situs ini, sistem akan mengirimkan kode token ke alamat email anda. \n          ")]),t.isHasRequest?a("div",{staticClass:"text-grey-7 q-pa-sm"},[t._v("\n            Anda sudah membuat permintaan reset password, silahkan buka email anda.\n            "),a("router-link",{staticClass:"text-primary",attrs:{"no-caps":"",flat:"",to:{name:"ResetPassword"}}},[t._v("Klik disini untuk memasukan kode token")])],1):t._e(),a("form",{staticClass:"q-gutter-y-md q-pa-sm",on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[a("q-input",{attrs:{label:"Email / Ponsel",color:"grey-6",dense:"",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"eva-email-outline"}})]},proxy:!0}]),model:{value:t.form.email,callback:function(a){t.$set(t.form,"email",a)},expression:"form.email"}}),a("div",{staticClass:"column"},[a("q-btn",{attrs:{loading:t.isLoading,type:"submit",color:"primary",padding:"sm lg"}},[t._v("Kirim")])],1)],1),a("div",{staticClass:"text-center q-mt-sm"},[a("q-btn",{attrs:{disable:t.isLoading,"no-caps":"",flat:"",color:"primary",to:{name:"Login"}}},[t._v("Kembali ke halaman login")])],1)])],1)],1)],1)},i=[],n=e("ded3"),o=e.n(n),r=(e("d3b7"),e("e6cf"),e("a79d"),e("2f62")),l=e("2a19"),m={name:"pageForgotPassword",data:function(){return{isPwd:!0,teks:"",newTeks:"",form:{email:"",token:"",password:"",passwod_confirmation:""}}},computed:{errors:function(){return this.$store.state.errors},isLoading:function(){return this.$store.state.loading},isHasRequest:function(){return!!localStorage.getItem("is_reqpwd")},shop:function(){return this.$store.state.shop}},methods:o()(o()({},Object(r["b"])("user",["requestPasswordToken"])),{},{submit:function(){var t=this;this.$store.commit("SET_LOADING",!0),this.requestPasswordToken(this.form).then((function(a){200==a.status&&(a.data.success?(localStorage.setItem("is_reqpwd",!0),t.form.email="",t.$store.commit("SET_FORGOT_PASSWORD",{key:"hide_email",value:a.data.email}),l["a"].create({type:"positive",message:a.data.message}),t.$router.push({name:"ResetPassword"})):t.$q.notify({type:"negative",message:a.data.message}))})).finally((function(){t.$store.commit("SET_LOADING",!1)}))}})},c=m,d=e("2877"),u=e("9989"),p=e("e359"),f=e("65c6"),g=e("9c40"),h=e("6ac5"),b=e("f09f"),k=e("a370"),w=e("27f9"),q=e("0016"),v=e("eebe"),x=e.n(v),y=Object(d["a"])(c,s,i,!1,null,null,null);a["default"]=y.exports;x()(y,"components",{QPage:u["a"],QHeader:p["a"],QToolbar:f["a"],QBtn:g["a"],QToolbarTitle:h["a"],QCard:b["a"],QCardSection:k["a"],QInput:w["a"],QIcon:q["a"]})}}]);