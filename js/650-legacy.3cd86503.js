(self["webpackChunkfood_store_patrick"]=self["webpackChunkfood_store_patrick"]||[]).push([[650],{6650:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.getUser?e._e():t("div",{attrs:{id:"noUserLoggedOrders"}},[t("div",[t("h4",[e._v("Para ver tus pedidos, debes estar loggeado")]),t("router-link",{attrs:{to:"/"}},[e._v("Volver a la home")])],1)]),e.getUser?t("div",{attrs:{id:"userOrdersContainer"}},[t("router-link",{attrs:{to:"/"}},[e._v("Volver a la home")]),t("h4",[e._v(" "+e._s(e.userOrders.length>0?"Hola, "+e.getUser.username+"! Esta es tu lista de pedidos":"Aun no tienes pedidos hechos!")+" ")]),e._l(e.userOrders,(function(e,r){return t("div",{key:r},[t("UserOrderComponent",{attrs:{order:e}})],1)}))],2):e._e()])},s=[],o=t(3019),a=t(6198),i=(t(8975),t(9653),t(4120)),d=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"userOrderContainer"}},[t("h4",{attrs:{id:"orderDate"}},[e._v("Fecha de la orden: "+e._s(e.order.date))]),t("div",{attrs:{id:"ordersTable"}},[t("table",[t("thead",[t("tr",e._l(e.dataTitles,(function(r,n){return t("th",{key:n,staticClass:"tableTitles"},[e._v(" "+e._s(r)+" ")])})),0)]),t("tbody",e._l(e.order.cart.products,(function(r,n){return t("tr",{key:n},[t("td",[t("img",{attrs:{src:r.imgSrc,alt:"product image",width:"40",height:"40"}}),t("div",[e._v(e._s(r.productName))])]),t("td",[e._v(e._s(r.price))]),t("td",[e._v(e._s(r.quantity))])])})),0)])]),t("h4",{attrs:{id:"orderTotalPrice"}},[e._v(" Precio total de la orden: $ "+e._s(parseInt(e.order.cart.totalCartPrice))+" ")])])},u=[],c={data:function(){return{dataTitles:["Productos","Precio","Cantidad"]}},props:{order:{type:Object,required:!0}}},l=c,p=t(1001),f=(0,p.Z)(l,d,u,!1,null,"18ea9aac",null),v=f.exports,O=t(4665),h={name:"UserOrders",components:{UserOrderComponent:v},created:function(){this.getOrders()},data:function(){return{userOrders:[]}},props:{userId:{type:Number,required:!0}},methods:{getOrders:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.Z.getUserOrders(e.$route.params.userId);case 2:e.userOrders=r.sent,e.userOrders.reverse();case 4:case"end":return r.stop()}}),r)})))()}},computed:(0,o.Z)({},(0,O.Se)("user",["getUser"]))},_=h,g=(0,p.Z)(_,n,s,!1,null,"566d2862",null),b=g.exports},9337:function(e,r,t){var n=t(2109),s=t(9781),o=t(3887),a=t(5656),i=t(1236),d=t(6135);n({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var r,t,n=a(e),s=i.f,u=o(n),c={},l=0;while(u.length>l)t=s(n,r=u[l++]),void 0!==t&&d(c,r,t);return c}})},3019:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});t(7941),t(2526),t(7327),t(1539),t(5003),t(4747),t(9337);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}}}]);
//# sourceMappingURL=650-legacy.3cd86503.js.map