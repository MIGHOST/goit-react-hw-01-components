(window["webpackJsonpgoit-react-hw-01-components"]=window["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3B54o",description:"Profile_description__1ZOIe",avatar:"Profile_avatar__3ILwA",name:"Profile_name__1Eycm",tag:"Profile_tag__3lDTN",location:"Profile_location__2uPoc",stats:"Profile_stats__2S55v",label:"Profile_label__21-Sk",quantity:"Profile_quantity__2B8JO"}},function(e,a,t){e.exports={pricingItem:"PricingItem_pricingItem__12uxS",icon:"PricingItem_icon__2T7Vd",label:"PricingItem_label__YGfYU",capacity:"PricingItem_capacity__2go9Q",description:"PricingItem_description__1iv4E",price:"PricingItem_price__2bF1X",button:"PricingItem_button__2avBt"}},function(e,a,t){e.exports={statsSection:"Stats_statsSection__Ztlji",title:"Stats_title__1OhRe",statList:"Stats_statList__1aClm",item:"Stats_item__1Rfss",label:"Stats_label__l1FXl",percentage:"Stats_percentage__TCSRo"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1qn8-",head:"TransactionHistory_head__1MM3P",row:"TransactionHistory_row__1K1EF"}},,,,function(e,a,t){e.exports={pricingPlan:"PricingPlan_pricingPlan__37x9k",item:"PricingPlan_item__11q_b"}},,,function(e){e.exports=JSON.parse('[{"label":"Bronze","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png","capacity":"2TB","price":39,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{"label":"Silver","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png","capacity":"20TB","price":99,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{"label":"Gold","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png","capacity":"400TB","price":499,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,function(e,a,t){e.exports=t(29)},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(10),r=t.n(i),l=t(11),s=t(12),o=t(1),m=t.n(o),u=function(e){var a=e.user;return c.a.createElement("div",{className:m.a.profile},c.a.createElement("div",{className:m.a.description},c.a.createElement("img",{src:a.avatar,alt:"user avatar",className:m.a.avatar}),c.a.createElement("p",{className:m.a.name},a.name),c.a.createElement("p",{className:m.a.tag},a.tag),c.a.createElement("p",{className:m.a.location},a.location)),c.a.createElement("ul",{className:m.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:m.a.label},"Followers"),c.a.createElement("span",{className:m.a.quantity},a.stats.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:m.a.label},"Views"),c.a.createElement("span",{className:m.a.quantity},a.stats.views)),c.a.createElement("li",null,c.a.createElement("span",{className:m.a.label},"Likes"),c.a.createElement("span",{className:m.a.quantity},a.stats.likes))))},d=t(3),p=t.n(d),b=function(e){var a=e.title,t=e.stats,n=function(){for(var e="#",a=0;a<6;a+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e};return c.a.createElement("section",{className:p.a.statsSection},a&&c.a.createElement("h2",{className:p.a.title},a),c.a.createElement("ul",{className:p.a.statList},t.map(function(e){return c.a.createElement("li",{className:p.a.item,key:e.id,style:{backgroundColor:n()}},c.a.createElement("span",{className:p.a.label},e.label),c.a.createElement("span",{className:p.a.percentage},e.percentage,"%"))})))};b.defaultProps={title:null};var _=b,f=t(13),y=t(14),g=t(2),E=t.n(g);function h(){var e=Object(f.a)(["\n  :before {\n    content: url(",");\n  }\n  height: 174px;\n"]);return h=function(){return e},e}var w=y.a.i(h(),function(e){return e.icon}),v=function(e){var a=e.label,t=e.icon,n=e.capacity,i=e.price,r=e.description;return c.a.createElement("div",{className:E.a.pricingItem},c.a.createElement(w,{className:E.a.icon,icon:t}),c.a.createElement("h2",{className:E.a.label},a),c.a.createElement("p",{className:E.a.capacity},n," Storage"),c.a.createElement("p",{className:E.a.description},r),c.a.createElement("p",{className:E.a.price},"$",i,"/MO"),c.a.createElement("button",{className:E.a.button,type:"button"},"Get Started"))},N=t(8),P=t.n(N),S=function(e){var a=e.items;return c.a.createElement("ul",{className:P.a.pricingPlan},a.map(function(e){return c.a.createElement("li",{className:P.a.item,key:e.label},c.a.createElement(v,{label:e.label,icon:e.icon,capacity:e.capacity,price:e.price,description:e.description}))}))},k=t(4),I=t.n(k),U=function(e){var a=e.items;return c.a.createElement("table",{className:I.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",{className:I.a.head},c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map(function(e){return c.a.createElement("tr",{key:e.id,className:I.a.row},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))})))},T=function(){return c.a.createElement("div",null,c.a.createElement(u,{user:{name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",stats:{followers:5603,views:4827,likes:1308}}}),c.a.createElement(_,{title:"Upload stats",stats:[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}]}),c.a.createElement(S,{items:l}),c.a.createElement(U,{items:s}))};r.a.render(c.a.createElement(T,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.eb30d496.chunk.js.map