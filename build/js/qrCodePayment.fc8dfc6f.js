(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["qrCodePayment"],{"264c":function(A,e,t){"use strict";t("2dfc")},"2dfc":function(A,e,t){},"3b28":function(A,e,t){},"776c":function(A,e,t){"use strict";t("fc48")},"78f2":function(A,e,t){"use strict";t("7bb2")},"7bb2":function(A,e,t){},"7e8c":function(A,e,t){"use strict";t("3b28")},"7ea0":function(A,e,t){"use strict";var c=t("7a23");const a=["disabled"],s={key:1,class:"button__preloader"},i=Object(c["k"])('<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><mask id="path-1-inside-1_199_21" fill="white"><path d="M22.4046 15.701C23.3604 15.9744 24.3714 15.4208 24.499 14.4349C24.775 12.3019 24.4738 10.1218 23.6105 8.1278C22.5076 5.58003 20.5553 3.49351 18.0865 2.22376C15.6176 0.954008 12.7848 0.57959 10.0708 1.1643C7.35682 1.74901 4.92953 3.25667 3.20253 5.4304C1.47552 7.60413 0.555648 10.3094 0.59965 13.0853C0.643652 15.8612 1.6488 18.536 3.44384 20.6539C5.23887 22.7718 7.71273 24.2018 10.4439 24.7002C12.5815 25.0903 14.7731 24.8908 16.7886 24.1397C17.7201 23.7926 18.0308 22.6826 17.5484 21.8134C17.0659 20.9442 15.9716 20.652 15.0197 20.9385C13.7538 21.3196 12.4073 21.399 11.0902 21.1587C9.17835 20.8098 7.44666 19.8088 6.19013 18.3263C4.93361 16.8438 4.23 14.9714 4.1992 13.0283C4.1684 11.0851 4.81231 9.19143 6.02121 7.66982C7.23012 6.14821 8.92922 5.09285 10.829 4.68355C12.7288 4.27426 14.7117 4.53635 16.44 5.42517C18.1682 6.314 19.5347 7.77456 20.3068 9.558C20.8387 10.7867 21.0658 12.1163 20.9807 13.4356C20.9168 14.4277 21.4489 15.4275 22.4046 15.701Z"></path></mask><path d="M22.4046 15.701C23.3604 15.9744 24.3714 15.4208 24.499 14.4349C24.775 12.3019 24.4738 10.1218 23.6105 8.1278C22.5076 5.58003 20.5553 3.49351 18.0865 2.22376C15.6176 0.954008 12.7848 0.57959 10.0708 1.1643C7.35682 1.74901 4.92953 3.25667 3.20253 5.4304C1.47552 7.60413 0.555648 10.3094 0.59965 13.0853C0.643652 15.8612 1.6488 18.536 3.44384 20.6539C5.23887 22.7718 7.71273 24.2018 10.4439 24.7002C12.5815 25.0903 14.7731 24.8908 16.7886 24.1397C17.7201 23.7926 18.0308 22.6826 17.5484 21.8134C17.0659 20.9442 15.9716 20.652 15.0197 20.9385C13.7538 21.3196 12.4073 21.399 11.0902 21.1587C9.17835 20.8098 7.44666 19.8088 6.19013 18.3263C4.93361 16.8438 4.23 14.9714 4.1992 13.0283C4.1684 11.0851 4.81231 9.19143 6.02121 7.66982C7.23012 6.14821 8.92922 5.09285 10.829 4.68355C12.7288 4.27426 14.7117 4.53635 16.44 5.42517C18.1682 6.314 19.5347 7.77456 20.3068 9.558C20.8387 10.7867 21.0658 12.1163 20.9807 13.4356C20.9168 14.4277 21.4489 15.4275 22.4046 15.701Z" stroke="#454446" stroke-width="6" mask="url(#path-1-inside-1_199_21)"></path></g></svg>',1),l=[i];var o={__name:"Button",props:{handler:{type:Function,default:()=>({})},params:{type:Object},isPreloader:{type:Boolean,default:!1}},setup(A){const e=A,t=Object(c["F"])(!1),i=Object(c["F"])(!1),o=async()=>{e.isPreloader&&(i.value=!0),t.value=!0,await e.handler(),console.log("button is enabled"),t.value=!1,e.isPreloader&&(i.value=!1)};return(A,e)=>(Object(c["A"])(),Object(c["h"])("button",{onClick:o,class:"button",disabled:t.value},[i.value?(Object(c["A"])(),Object(c["h"])("div",s,l)):Object(c["H"])(A.$slots,"default",{key:0})],8,a))}};t("776c");const b=o;e["a"]=b},"7eb3":function(A,e,t){"use strict";var c=t("7ea0");e["a"]=c["a"]},afcf:function(A,e,t){"use strict";t.r(e);var c=t("7a23"),a=t("7eb3"),s=t("6605");const i=A=>(Object(c["D"])("data-v-5078c906"),A=A(),Object(c["B"])(),A),l={class:"qr-code-payment-features"},o={class:"qr-code-payment-features__wrapper"},b=i(()=>Object(c["i"])("h2",{class:"qr-code-payment-features__title"},"QR-код для оплаты",-1)),n=i(()=>Object(c["i"])("p",{class:"qr-code-payment-features__description"},"Оплата с комиссией через мобильное приложение банка",-1)),w=i(()=>Object(c["i"])("div",{class:"qr-code-payment-features__code"},[Object(c["i"])("div",{class:"qr-code-payment-features__img"})],-1));var g={__name:"QrCodePaymentFeatures",setup(A){return(A,e)=>(Object(c["A"])(),Object(c["h"])("div",l,[Object(c["i"])("div",o,[b,n,w,Object(c["m"])(Object(c["N"])(a["a"]),{class:"qr-code-payment-features__btn-save"},{default:Object(c["U"])(()=>[Object(c["l"])("Сохранить")]),_:1})])]))}},C=(t("264c"),t("d959")),r=t.n(C);const d=r()(g,[["__scopeId","data-v-5078c906"]]);var j=d,O=j,v=t("e50f");const B=A=>(Object(c["D"])("data-v-ae85bfcc"),A=A(),Object(c["B"])(),A),Q={key:0,class:"qr-code-faq"},f=B(()=>Object(c["i"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[Object(c["i"])("mask",{id:"mask0_759_1925",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20"},[Object(c["i"])("rect",{x:"20",width:"20",height:"20",transform:"rotate(90 20 0)",fill:"url(#pattern0)"})]),Object(c["i"])("g",{mask:"url(#mask0_759_1925)"},[Object(c["i"])("rect",{x:"21.25",width:"20",height:"21.25",transform:"rotate(90 21.25 0)",fill:"#878787"})]),Object(c["i"])("defs",null,[Object(c["i"])("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},[Object(c["i"])("use",{"xlink:href":"#image0_759_1925",transform:"scale(0.00195312)"})]),Object(c["i"])("image",{id:"image0_759_1925",width:"512",height:"512","xlink:href":"data:image/png;base64,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"})])],-1)),k=B(()=>Object(c["i"])("div",{class:"qr-code-faq__description"},"Обратите внимание! Поступление платежей происходит до 5 дней",-1)),D=B(()=>Object(c["i"])("div",{class:"qr-code-faq__modal-header"},[Object(c["i"])("div",{class:"qr-code-faq__modal-title"},"Как оплачивать по QR-коду"),Object(c["i"])("div",{class:"qr-code-faq__modal-description"},"Обратите внимание! Поступление платежей происходит до 5 дней")],-1)),m=B(()=>Object(c["i"])("ul",{class:"qr-code-faq__modal-body"},[Object(c["i"])("li",{class:"qr-code-faq__modal-li"},[Object(c["l"])("1. Откройте приложение "),Object(c["i"])("strong",null,"«Сбербанк Онлайн»"),Object(c["l"])(" на своём мобильном телефоне.")]),Object(c["i"])("li",{class:"qr-code-faq__modal-li"},[Object(c["l"])("2. В разделе «Платежи» выберите "),Object(c["i"])("strong",null,"«Оплата по QR или штрихкоду».")]),Object(c["i"])("li",{class:"qr-code-faq__modal-li"},[Object(c["l"])("3. Наведите камеру мобильного телефона на "),Object(c["i"])("strong",null,"QR-код.")]),Object(c["i"])("li",{class:"qr-code-faq__modal-li"},"4. Укажите данные для оплаты и подтвердите платеж.")],-1));var y={__name:"QrCodeFaq",setup(A){const e=Object(c["F"])(!1),t=Object(c["F"])(!0);return(A,s)=>(Object(c["A"])(),Object(c["h"])(c["a"],null,[t.value?(Object(c["A"])(),Object(c["h"])("div",Q,[Object(c["i"])("div",{class:"qr-code-faq__title",onClick:s[0]||(s[0]=A=>e.value=!0),id:"show-modal"},[Object(c["l"])(" Как оплачивать по QR-коду "),f]),k,Object(c["m"])(Object(c["N"])(a["a"]),{class:"qr-code-faq__btn",onClick:s[1]||(s[1]=A=>t.value=!1)},{default:Object(c["U"])(()=>[Object(c["l"])("Понятно")]),_:1})])):Object(c["g"])("",!0),(Object(c["A"])(),Object(c["f"])(c["b"],{to:"body"},[Object(c["m"])(Object(c["N"])(v["a"]),{show:e.value,onClose:s[2]||(s[2]=A=>e.value=!1)},{header:Object(c["U"])(()=>[D]),body:Object(c["U"])(()=>[m]),_:1},8,["show"])]))],64))}};t("78f2");const u=r()(y,[["__scopeId","data-v-ae85bfcc"]]);var p=u,h=p;const J=A=>(Object(c["D"])("data-v-2175f074"),A=A(),Object(c["B"])(),A),P={class:"qr-code-payment-widget"},S=J(()=>Object(c["i"])("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Object(c["i"])("mask",{id:"mask0_126_4444",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20"},[Object(c["i"])("rect",{x:"20",y:"20",width:"20",height:"20",transform:"rotate(-180 20 20)",fill:"url(#pattern0)"})]),Object(c["i"])("g",{mask:"url(#mask0_126_4444)"},[Object(c["i"])("rect",{x:"20",y:"21.25",width:"20",height:"21.25",transform:"rotate(-180 20 21.25)",fill:"#808080"})]),Object(c["i"])("defs",null,[Object(c["i"])("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},[Object(c["i"])("use",{"xlink:href":"#image0_126_4444",transform:"scale(0.00195312)"})]),Object(c["i"])("image",{id:"image0_126_4444",width:"512",height:"512","xlink:href":"data:image/png;base64,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"})])],-1));var I={__name:"QrCodePaymentWidgets",setup(A){const e=Object(s["d"])();return(A,t)=>(Object(c["A"])(),Object(c["h"])("div",P,[Object(c["m"])(Object(c["N"])(a["a"]),{class:"qr-code-payment-widget__btn-back",onClick:t[0]||(t[0]=A=>Object(c["N"])(e).back())},{default:Object(c["U"])(()=>[S,Object(c["l"])(" Вернуться назад ")]),_:1}),Object(c["m"])(Object(c["N"])(O)),Object(c["m"])(Object(c["N"])(h))]))}};t("e23d");const G=r()(I,[["__scopeId","data-v-2175f074"]]);var M=G,K=M;const N={class:"container"};var U={__name:"QrCodePayment",setup(A){return(A,e)=>(Object(c["A"])(),Object(c["h"])("div",N,[Object(c["m"])(Object(c["N"])(K))]))}};const H=U;var q=H;e["default"]=q},e23d:function(A,e,t){"use strict";t("ef02")},e50f:function(A,e,t){"use strict";var c=t("7a23");const a={key:0,class:"modal__mask"},s={class:"modal__container"},i={class:"modal__header"},l={class:"modal__icon"},o={class:"modal__content"},b={class:"modal__body"},n={class:"modal__footer"};var w={__name:"Modal",props:{show:Boolean},setup(A){return(e,t)=>(Object(c["A"])(),Object(c["f"])(c["c"],{name:"modal"},{default:Object(c["U"])(()=>[A.show?(Object(c["A"])(),Object(c["h"])("div",a,[Object(c["i"])("div",s,[Object(c["i"])("div",i,[Object(c["H"])(e.$slots,"header"),Object(c["i"])("button",{class:"modal__btn-close",onClick:t[0]||(t[0]=A=>e.$emit("close"))})]),Object(c["i"])("div",l,[Object(c["H"])(e.$slots,"icon")]),Object(c["i"])("div",o,[Object(c["i"])("div",b,[Object(c["H"])(e.$slots,"body")]),Object(c["i"])("div",n,[Object(c["H"])(e.$slots,"footer")])])])])):Object(c["g"])("",!0)]),_:3}))}},g=(t("7e8c"),t("d959")),C=t.n(g);const r=C()(w,[["__scopeId","data-v-a54d93cc"]]);var d=r;e["a"]=d},ef02:function(A,e,t){},fc48:function(A,e,t){}}]);
//# sourceMappingURL=qrCodePayment.fc8dfc6f.js.map