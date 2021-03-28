(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{524:function(t,e,r){(function(e){const n=r(182);class o extends Error{constructor(t){super(t),this.name="InvalidStartError",this.code="INVALID_START"}}class c extends Error{constructor(t){super(t),this.name="InvalidLengthError",this.code="INVALID_LENGTH"}}t.exports={fromVPriv:function(input){if(!input instanceof String)throw TypeError("Except: String");if("vpriv"!==input.slice(0,5))throw new o("A VOKEN Private Key should start with `vpriv`");if(52!==(input=input.slice(5)).length)throw new c("The length of a VOKEN Private Key should be `57`");let t=e.from(n.decode(input));for(;t.length<32;)t=e.concat([e.from("00","hex"),t]);return t},toVPriv:function(input){if(32!==input.length)throw new c("The length of a Private Key should be `32`");return"vpriv"+n.encode(input)},InvalidStartError:o,InvalidLengthError:c}}).call(this,r(9).Buffer)},539:function(t,e,r){"use strict";(function(t){var n,o=r(1),c=(r(15),r(16),r(55),r(56),r(524)),d=r.n(c),l=r(128),f=r.n(l),v=r(71),h=r.n(v),m=r(532),w=r.n(m),_=r(186),y=r.n(_),x=r(182),C=r.n(x),E=r(533),S=r.n(E);e.a={name:"sign",layout:"indigoWaveClear",head:function(){return{title:this.$t("nav.Messenger")}},data:function(){return{vpriv:"",vprivError:"",passwordSet:"",passwordRepeat:"",bufPrivateKey:t.from(""),bufPrivateKeyEncrypted:t.from(""),password:"",bufTestEncrypted:t.from(""),message:""}},watch:{vpriv:function(){try{var t=d.a.fromVPriv(this.vpriv),e=f.a.fromPrivateKey(t);h.a.fromPublicKey(e);this.vprivError=""}catch(t){this.vprivError=t.message}}},computed:{passwordSame:function(){return this.passwordSet===this.passwordRepeat},passwordConfirmed:function(){return this.passwordSet&&this.passwordSame},cached:function(){return 32===this.bufPrivateKeyEncrypted.length&&this.bufTestEncrypted.length>0},bufPassword:function(){return t.from(this.password)},passwordMatched:function(){return"VOKEN Message Helper"===w.a.decrypt(this.bufTestEncrypted,this.bufPassword).toString()},bufPublicKey:function(){return this.$store.state.bufPublicKey},address:function(){return this.$store.state.address},ready:function(){return 32===this.bufPrivateKey.length&&33===this.bufPublicKey.length&&this.address},bufMessage:function(){return this.message&&this.ready?t.from(this.message):t.from("")},bufMessageAESKey:function(){return this.bufMessage.length>0?y.a.sha1(this.bufMessage):t.from("")},bufMessageSig:function(){return this.bufMessageAESKey.length>0?S.a.sign(this.bufMessageAESKey,this.bufPrivateKey):t.from("")},strMessageSig:function(){return this.bufMessageSig.length>0?C.a.encode(this.bufMessageSig):t.from("")},bufMessageSigLength:function(){return this.bufMessageSig.length>0?t.from([this.bufMessageSig.length]):t.from("")},bufBodyAESEncrypted:function(){return this.bufMessageSigLength.length>0?w.a.encrypt(t.concat([this.bufMessageSigLength,this.bufMessageSig,this.bufPublicKey,this.bufMessage]),this.bufMessageAESKey):t.from("")},strBodyEncoded:function(){if(this.bufBodyAESEncrypted.length>0){var body=t.concat([this.bufMessageAESKey,this.bufBodyAESEncrypted]);return C.a.encode(body)}return""}},mounted:(n=Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=this.getCache("bufPrivateKeyEncrypted"))&&(this.bufPrivateKeyEncrypted=t.from(r.data)),(n=this.getCache("bufTestEncrypted"))&&(this.bufTestEncrypted=t.from(n.data));case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),methods:{start:function(){if(this.vpriv){if(!this.vprivError){if(this.passwordSet){if(this.passwordSet===this.passwordRepeat){this.bufPrivateKey=d.a.fromVPriv(this.vpriv);var e=w.a.encrypt(this.bufPrivateKey,t.from(this.passwordSet));this.setCache("bufPrivateKeyEncrypted",e);var r=f.a.fromPrivateKey(this.bufPrivateKey);this.$store.dispatch("SET_PUBLIC_KEY",r);var n=w.a.encrypt(t.from("VOKEN Message Helper"),t.from(this.passwordSet));return void this.setCache("bufTestEncrypted",n)}return void this.$toast.error("Please confirm the `Password`...")}return void this.$toast.error("`Password` is empty...")}this.$toast.error("Invalid `Private Key`...")}else this.$toast.error("`Private Key` could not be empty...")},unlock:function(){if(this.passwordMatched){this.bufPrivateKey=w.a.decrypt(this.bufPrivateKeyEncrypted,this.bufPassword);var t=f.a.fromPrivateKey(this.bufPrivateKey);this.$store.dispatch("SET_PUBLIC_KEY",t)}else this.$toast.error("The `Password` does not work")},reset:function(){this.vpriv="",this.vprivError="",this.passwordSet="",this.passwordRepeat="",this.bufPrivateKey=t.from(""),this.bufPrivateKeyEncrypted=t.from(""),this.password="",this.bufTestEncrypted=t.from(""),this.removeCache("bufPrivateKeyEncrypted"),this.removeCache("bufTestEncrypted")},copyEncodedData:function(){this.$refs["encoded-message"].select(),document.execCommand("copy")?this.$toast.info("Copied"):this.$toast.info("Copy failed")},setCache:function(e,r){var n=y.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.setLocalStorage(n,r)},getCache:function(e){var r=y.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.getLocalStorage(r)},removeCache:function(e){var r=y.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.removeLocalStorage(r)}}}}).call(this,r(9).Buffer)},556:function(t,e,r){var content=r(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("0d97276a",content,!0,{sourceMap:!1})},584:function(t,e,r){"use strict";r(556)},585:function(t,e,r){var n=r(22)((function(i){return i[1]}));n.push([t.i,'.initialize[data-v-4f9938fa]{\n  max-width:36rem;\n  width:100%;\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#fdf2f2;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 242, 242, 0));\n  --tw-gradient-to:#fcd9bd;\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.initialize label[data-v-4f9938fa]{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.initialize input[data-v-4f9938fa]{\n  font-family:Hack, monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n.initialize .btn[data-v-4f9938fa]{\n  font-weight:700;\n  font-size:1.125rem;\n  line-height:1.75rem\n}\n.sign[data-v-4f9938fa]{\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#fdf2f2;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 242, 242, 0));\n  --tw-gradient-to:#f8b4d9;\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}',""]),t.exports=n},647:function(t,e,r){"use strict";r.r(e);var n=r(539).a,o=(r(584),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"resp-wide pb-12"},[r("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[r("h1",[t._v("\n      "+t._s(t.$t("nav.Messenger_Sign"))+"\n    ")]),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("messenger.You_can_sign_and_encode__"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"my-6 border-t"}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.cached&&!t.ready,expression:"!cached && !ready"}],staticClass:"initialize py-4 px-2 sm:px-4"},[r("div",{staticClass:"font-bold text-gray-800 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Set_your_Private_Key_to_start"))+"...\n    ")]),t._v(" "),r("div",{staticClass:"mt-6 space-y-3"},[r("div",{class:{success:t.vpriv&&!t.vprivError,error:t.vpriv&&t.vprivError}},[r("label",{attrs:{for:"vpriv"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!t.vpriv||!t.vprivError,expression:"!vpriv || !vprivError"}]},[t._v("\n            "+t._s(t.$t("messenger.Set_your_Private_Key"))+"\n          ")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.vpriv&&t.vprivError,expression:"vpriv && vprivError"}]},[t._v("\n            "+t._s(t.vprivError)+"\n          ")])]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.vpriv,expression:"vpriv"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"text",id:"vpriv",placeholder:"vpriv..."},domProps:{value:t.vpriv},on:{input:function(e){e.target.composing||(t.vpriv=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),r("div",{class:{success:t.passwordConfirmed}},[r("label",{attrs:{for:"password_set"}},[t._v("\n          "+t._s(t.$t("messenger.Set_a_password"))+"\n        ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordSet,expression:"passwordSet"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password_set"},domProps:{value:t.passwordSet},on:{input:function(e){e.target.composing||(t.passwordSet=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),r("div",{class:{success:t.passwordConfirmed,error:t.passwordRepeat&&!t.passwordSame}},[r("label",{attrs:{for:"password_repeat"}},[t._v("\n          "+t._s(t.$t("messenger.Confirm_the_password"))+"\n        ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordRepeat,expression:"passwordRepeat"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password_repeat"},domProps:{value:t.passwordRepeat},on:{input:function(e){e.target.composing||(t.passwordRepeat=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])])]),t._v(" "),r("div",{staticClass:"mt-4 space-y-2 md:flex md:space-y-0 md:space-x-4"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.start}},[t._v("\n        "+t._s(t.$t("messenger.Start"))+"\n      ")]),t._v(" "),r("a",{staticClass:"w-full btn justify-center py-3",attrs:{target:"_blank",href:t.localePath("/wallet/generator")}},[t._v("\n        "+t._s(t.$t("messenger.Visit_Generator"))+"\n      ")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.cached&&!t.ready,expression:"cached && !ready"}],staticClass:"initialize py-4 px-2 sm:px-4 space-y-4"},[r("div",{staticClass:"font-bold text-gray-800 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Your_Private_Key_is_encrypted__"))+"\n    ")]),t._v(" "),r("div",{class:{success:t.passwordMatched}},[r("label",{attrs:{for:"password"}},[t._v("\n        "+t._s(t.$t("messenger.Input_the_password_to_unlock"))+"\n      ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)]),t._v(" "),r("div",{staticClass:"mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.unlock}},[t._v("\n          "+t._s(t.$t("messenger.Unlock"))+"\n        ")]),t._v(" "),r("button",{staticClass:"w-full btn btn-gray justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.reset}},[t._v("\n          "+t._s(t.$t("messenger.Reset"))+"\n        ")])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"sign mt-4 md:mt-6 lg:mt-8 xl:mt-10 py-6 lg:py-10 px-2 sm:px-4"},[r("h2",{staticClass:"font-bold text-2xl text-gray-700 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Sign__Encode_A_Message"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-8 w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0"},[r("div",{staticClass:"w-full"},[r("label",{staticClass:"text-sm",attrs:{for:"message"}},[t._v("\n          "+t._s(t.$t("messenger.Text_Message"))+"\n        ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none",attrs:{id:"message",rows:"10",placeholder:t.$t("messenger.Input_the_original_message_here_")},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-full"},[r("label",{staticClass:"text-sm",attrs:{for:"encoded_message"}},[t._v("\n          "+t._s(t.$t("messenger.Encoded_data__with__"))+"\n        ")]),t._v(" "),r("textarea",{ref:"encoded-message",staticClass:"textarea-indigo w-full mt-1 py-3 px-4 bg-indigo-100 font-mono text-sm lg:text-base text-indigo-600 resize-none",attrs:{id:"encoded_message",rows:"10",readonly:""},domProps:{value:t.strBodyEncoded}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.bufMessageSig.length>0,expression:"bufMessageSig.length > 0"}],staticClass:"my-10 lg:my-4 px-4 flex text-green-600 space-x-4 font-mono"},[r("fa",{staticClass:"text-3xl",attrs:{icon:["fas","signature"]}}),t._v(" "),r("div",[r("div",[t._v("\n          "+t._s(t.$t("messenger.Your_Signature_"))+"\n        ")]),t._v(" "),r("div",{staticClass:"mt-1 text-xs md:text-sm break-all"},[t._v("\n          "+t._s(t.strMessageSig)+"\n        ")])])],1),t._v(" "),r("div",{staticClass:"mt-2 sm:flex sm:justify-end"},[r("div",{staticClass:"w-full sm:max-w-md"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 font-bold",attrs:{type:"button"},on:{click:t.copyEncodedData}},[t._v("\n          "+t._s(t.$t("messenger.Copy_the_encoded_data"))+"\n        ")])])])])])}),[],!1,null,"4f9938fa",null);e.default=component.exports}}]);