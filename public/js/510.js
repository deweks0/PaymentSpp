(self.webpackChunk=self.webpackChunk||[]).push([[510],{2740:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(5166),n={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},s={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};const c={render:function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)("div",null,[(0,o.renderSlot)(e.$slots,"logo")]),(0,o.createVNode)("div",s,[(0,o.renderSlot)(e.$slots,"default")])])}},a=c},3027:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(5166),n=(0,o.createVNode)("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),(0,o.createVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1);const s={render:function(e,t){var r=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)(r,{href:"/"},{default:(0,o.withCtx)((function(){return[n]})),_:1})}},c=s},8764:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(5166);const n={props:{class:{type:String,default:"rounded-md"},bg:{type:String,default:"bg-blue-600 hover:bg-blue-700"},type:{type:String,default:"submit"}},render:function(e,t,r,n,s,c){return(0,o.openBlock)(),(0,o.createBlock)("button",{type:r.type,class:[this.bg,this.class,"  shadow-lg inline-flex items-center px-4 py-2  border border-transparent  font-semibold text-xs text-white uppercase tracking-widest  active:bg-blue-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"]},[(0,o.renderSlot)(e.$slots,"default")],10,["type"])}},s=n},344:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(5166);const n={emits:["update:checked"],props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get:function(){return this.checked},set:function(e){this.$emit("update:checked",e)}}},render:function(e,t,r,n,s,c){return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)("input",{type:"checkbox",value:r.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.proxyChecked=e}),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,["value"])),[[o.vModelCheckbox,c.proxyChecked]])}},s=n},6824:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(5166);const n={props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}},render:function(e,t,r,n,s,c){return(0,o.openBlock)(),(0,o.createBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:r.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,["value"])}},s=n},3845:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(5166),n={class:"block font-medium text-sm text-gray-700"},s={key:0},c={key:1};const a={props:["value"],render:function(e,t,r,a,l,i){return(0,o.openBlock)(),(0,o.createBlock)("label",n,[r.value?((0,o.openBlock)(),(0,o.createBlock)("span",s,(0,o.toDisplayString)(r.value),1)):((0,o.openBlock)(),(0,o.createBlock)("span",c,[(0,o.renderSlot)(e.$slots,"default")]))])}},l=a},3186:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(5166),n={key:0},s=(0,o.createVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),c={class:"mt-3 list-disc list-inside text-sm text-red-600"};const a={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}},render:function(e,t,r,a,l,i){return i.hasErrors?((0,o.openBlock)(),(0,o.createBlock)("div",n,[s,(0,o.createVNode)("ul",c,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(i.errors,(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("li",{key:t},(0,o.toDisplayString)(e),1)})),128))])])):(0,o.createCommentVNode)("",!0)}},l=a},510:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var o=r(5166),n={key:0,class:"mb-4 font-medium text-sm text-green-600"},s={class:"mt-4"},c={class:"block mt-4"},a={class:"flex justify-between items-center"},l=(0,o.createVNode)("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),i=(0,o.createTextVNode)(" Forgot your password? "),u={class:"flex items-center justify-end mt-4"},d=(0,o.createTextVNode)(" i dont have an account "),m=(0,o.createTextVNode)(" Log in ");var p=r(2740),f=r(3027),b=r(8764),h=r(6824),g=r(344),v=r(3845),k=r(3186);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const V={components:{JetAuthenticationCard:p.Z,JetAuthenticationCardLogo:f.Z,JetButton:b.Z,JetInput:h.Z,JetCheckbox:g.Z,JetLabel:v.Z,JetValidationErrors:k.Z},props:{canResetPassword:Boolean,status:String},data:function(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit:function(){var e=this;this.form.transform((function(t){return w(w({},t),{},{remember:e.form.remember?"on":""})})).post(this.route("login"),{onFinish:function(){return e.form.reset("password")}})}},render:function(e,t,r,p,f,b){var h=(0,o.resolveComponent)("jet-authentication-card-logo"),g=(0,o.resolveComponent)("jet-validation-errors"),v=(0,o.resolveComponent)("jet-label"),k=(0,o.resolveComponent)("jet-input"),y=(0,o.resolveComponent)("jet-checkbox"),w=(0,o.resolveComponent)("inertia-link"),x=(0,o.resolveComponent)("jet-button"),V=(0,o.resolveComponent)("jet-authentication-card");return(0,o.openBlock)(),(0,o.createBlock)(V,null,{logo:(0,o.withCtx)((function(){return[(0,o.createVNode)(h)]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(g,{class:"mb-4"}),r.status?((0,o.openBlock)(),(0,o.createBlock)("div",n,(0,o.toDisplayString)(r.status),1)):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("form",{onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return b.submit&&b.submit.apply(b,arguments)}),["prevent"]))},[(0,o.createVNode)("div",null,[(0,o.createVNode)(v,{for:"email",value:"Email"}),(0,o.createVNode)(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:f.form.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.form.email=e}),required:"",autofocus:""},null,8,["modelValue"])]),(0,o.createVNode)("div",s,[(0,o.createVNode)(v,{for:"password",value:"Password"}),(0,o.createVNode)(k,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:f.form.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.form.password=e}),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),(0,o.createVNode)("div",c,[(0,o.createVNode)("label",a,[(0,o.createVNode)("div",null,[(0,o.createVNode)(y,{name:"remember",checked:f.form.remember,"onUpdate:checked":t[3]||(t[3]=function(e){return f.form.remember=e})},null,8,["checked"]),l]),r.canResetPassword?((0,o.openBlock)(),(0,o.createBlock)(w,{key:0,href:e.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:(0,o.withCtx)((function(){return[i]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)("div",u,[(0,o.createVNode)(w,{href:e.route("register"),class:"ml-4 text-sm text-gray-500 underline italic"},{default:(0,o.withCtx)((function(){return[d]})),_:1},8,["href"]),(0,o.createVNode)(x,{class:["ml-4 rounded-md bg-blue-500 hover:bg-blue-700",{"opacity-25":f.form.processing}],disabled:f.form.processing},{default:(0,o.withCtx)((function(){return[m]})),_:1},8,["class","disabled"])])],32)]})),_:1})}},B=V}}]);