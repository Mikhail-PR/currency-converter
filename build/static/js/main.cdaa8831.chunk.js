(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{11:function(e,t,r){e.exports={selectWrapper:"ConvertItem_selectWrapper__r2Kpr",selectList:"ConvertItem_selectList__p-o8a",value:"ConvertItem_value__2IGPJ"}},12:function(e,t,r){e.exports={gridItem:"ExchangeHistory_gridItem__2db4o",wrapper:"ExchangeHistory_wrapper__396ot",content:"ExchangeHistory_content__1FqmU",list:"ExchangeHistory_list__3tHaE",btn:"ExchangeHistory_btn__2IgNZ",img:"ExchangeHistory_img__3bKWL"}},18:function(e,t,r){e.exports={gridItem:"Header_gridItem__3ABj8",headerWrapper:"Header_headerWrapper__nT88O",header:"Header_header__3xxdR",title:"Header_title__Dfbxb"}},19:function(e,t,r){e.exports={item:"ExchangeItem_item__63RmR",exchange:"ExchangeItem_exchange__1oQy_"}},22:function(e,t,r){e.exports={card:"Card_card__24A9V",title:"Card_title__cc3Fz",darck:"Card_darck__3NOkK"}},23:function(e,t,r){e.exports={gridItem:"ExchangeRates_gridItem__jeOzr",items:"ExchangeRates_items__3MvOV",status:"ExchangeRates_status__33_qw"}},24:function(e,t,r){e.exports={item:"RateItem_item__Ch4xi",title:"RateItem_title__22_gf",value:"RateItem_value__Ff44S"}},29:function(e,t,r){e.exports={gridItem:"CurrencyConverter_gridItem__SUuR_",content:"CurrencyConverter_content__1ub3W"}},68:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var n,a=r(20),c=r.n(a),i=r(13),s=r(3),u=r(18),o=r.n(u),l=r.p+"static/media/logo.f54884f8.svg",b=r(1),v=function(){return Object(b.jsx)("div",{className:o.a.headerWrapper+" "+o.a.gridItem,children:Object(b.jsx)("div",{className:o.a.header,children:Object(b.jsxs)(i.b,{to:"/currency-converter/",children:[Object(b.jsx)("img",{src:l,alt:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(b.jsx)("h1",{className:o.a.title,children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"})]})})})},d=r(22),j=r.n(d),_=function(e){var t=e.title,r=e.isDarck,n=e.children,a=e.styleClass;return Object(b.jsxs)("div",{className:"".concat(j.a.card," ").concat(a||""," ").concat(r?j.a.darck:""),children:[Object(b.jsx)("h2",{className:j.a.title,children:t}),n]})},m=r(0),O=r.n(m),E=r(10),f=E.c,h=r(23),x=r.n(h),p=r(24),y=r.n(p),R=function(e){var t=e.name,r=e.abbreviation,n=e.rate;return Object(b.jsxs)("div",{className:y.a.item,children:[Object(b.jsxs)("h3",{className:y.a.title,children:[t,", ",r]}),Object(b.jsx)("div",{className:y.a.value,children:n})]})},g=r(38),T=r.n(g);!function(e){e.GET_RATES_STARTED="GET_RATES_STARTED",e.GET_RATES_SUCCESS="GET_RATES_SUCCESS",e.GET_RATES_ERROR="GET_RATES_ERROR"}(n||(n={}));var S,C=function(){return function(e){e({type:n.GET_RATES_STARTED});var t=["USD","EUR","GBP"];T.a.get("https://www.cbr-xml-daily.ru/daily_json.js").then((function(r){for(var a in r.data.Valute){var c=t.indexOf(a);-1!==c&&(t[c]={abbreviation:a,rate:r.data.Valute[a].Value,name:r.data.Valute[a].Name.slice(0,15)})}e({type:n.GET_RATES_SUCCESS,payload:[].concat(t)})})).catch((function(){e({type:n.GET_RATES_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0443\u0440\u0441\u043e\u0432"})}))}},N=function(){var e=Object(E.b)(),t=f((function(e){return e.rates})),r=t.currencies,n=t.isLoaded;return O.a.useEffect((function(){n||e(C())}),[]),Object(b.jsx)(_,{title:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442 \u0426\u0411 \u0420\u0424",styleClass:x.a.gridItem,children:n?Object(b.jsx)("div",{className:x.a.items,children:r.map((function(e,t){var r=e.name,n=e.abbreviation,a=e.rate;if("RUB"!==n)return Object(b.jsx)("div",{children:Object(b.jsx)(R,{name:r,abbreviation:n,rate:a})},t)}))}):Object(b.jsx)("div",{className:x.a.status,children:"\u041d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e"})})},I=r(12),A=r.n(I),H=r(19),U=r.n(H),G=function(e){var t=e.valuts;return Object(b.jsx)("div",{className:U.a.item,children:t&&t.map((function(e,r){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:U.a.exchange,children:[Object(b.jsx)("div",{className:U.a.value,children:parseFloat(e.value)}),Object(b.jsx)("div",{className:U.a.currency,children:e.currency})]},r),r!==t.length-1&&Object(b.jsx)("div",{children:"="})]})}))})},L=r.p+"static/media/exchange-history-img.67921b77.png",V=function(e,t){return{type:"CHANGE_CURRENCY",payload:{id:e,currency:t}}},w=function(e){return{type:"FILTER_UNSELECTED_ITEMS",payload:e}},F=function(e,t){return{type:"CHANGE_VALUE",payload:{id:e,newValue:t}}},Y=function(){var e=Object(E.b)();O.a.useEffect((function(){0===t.length&&e({type:"GET_HISTORY"})}),[]);var t=f((function(e){return e.converts.history}));return console.log(A.a.gridItem),Object(b.jsx)(_,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438",styleClass:A.a.gridItem,isDarck:!0,children:Object(b.jsxs)("div",{className:A.a.wrapper,children:[Object(b.jsxs)("div",{className:A.a.content,children:[0!==t.length?Object(b.jsx)("ul",{className:A.a.list,children:t.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(G,{valuts:e})},t)}))}):Object(b.jsx)("div",{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430"}),Object(b.jsx)("div",{className:A.a.btn,children:Object(b.jsx)(i.b,{to:"/currency-converter/converter",children:Object(b.jsx)("div",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u043e\u0440 \u0432\u0430\u043b\u044e\u0442"})})})]}),Object(b.jsx)("img",{className:A.a.img,src:L})]})})},D=r(29),k=r.n(D),W=r(11),B=r.n(W),J=function(e){var t=e.value,r=e.options,n=e.onSelect;return Object(b.jsxs)("select",{value:t.value,onChange:function(e){return n(e)},className:B.a.selectList,children:[Object(b.jsx)("option",{className:B.a.item,value:t.value,children:t.text}),r&&r.map((function(e,t){return Object(b.jsx)("option",{className:B.a.item,value:e.value,children:e.text},t)}))]})},M=function(e){var t=e.value,r=e.onInput;return Object(b.jsx)("input",{className:B.a.value,onChange:function(e){return r(e)},type:"number",value:t})},K=function(e){var t=e.value,r=e.onInput,n=e.currency,a=e.options,c=e.onSelect;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(M,{value:t,onInput:r}),Object(b.jsx)("div",{className:B.a.selectWrapper,children:Object(b.jsx)(J,{value:{value:n.abbreviation,text:"".concat(n.name,", ").concat(n.abbreviation)},options:a.map((function(e){return{value:e.abbreviation,text:"".concat(e.name,", ").concat(e.abbreviation)}})),onSelect:c})})]})},q=r(16),z=r(39),P=r(14),Q=r(4),Z={currencies:[{abbreviation:"RUB",rate:1,name:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c"}],isLoaded:!1,error:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===n.GET_RATES_SUCCESS?Object(Q.a)(Object(Q.a)({},e),{},{currencies:[].concat(Object(P.a)(e.currencies),Object(P.a)(t.payload)),isLoaded:!0}):t.type===n.GET_RATES_ERROR?Object(Q.a)(Object(Q.a)({},e),{},{error:t.payload}):e};!function(e){e.CHANGE_CURRENCY="CHANGE_CURRENCY",e.FILTER_UNSELECTED_ITEMS="FILTER_UNSELECTED_ITEMS",e.CHANGE_VALUE="CHANGE_VALUE",e.CONVERT="CONVERT",e.SET_HISTORY="SET_HISTORY",e.GET_HISTORY="GET_HISTORY"}(S||(S={}));var $={items:[{value:0,currency:{abbreviation:"RUB",rate:0},isConvertable:!1},{value:0,currency:{abbreviation:"USD",rate:0},isConvertable:!1},{value:0,currency:{abbreviation:"EUR",rate:0},isConvertable:!1}],unselectedItems:[],history:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;if(t.type===S.CHANGE_CURRENCY){var r=Object(P.a)(e.items);return r[t.payload.id].currency=t.payload.currency,Object(Q.a)(Object(Q.a)({},e),{},{items:r})}if(t.type===S.FILTER_UNSELECTED_ITEMS){var n=e.items,a=t.payload;return Object(Q.a)(Object(Q.a)({},e),{},{unselectedItems:a.filter((function(e){var t=e.abbreviation;return!n.find((function(e){return e.currency.abbreviation===t}))}))})}if(t.type===S.CHANGE_VALUE){var c=Object(P.a)(e.items);return c[t.payload.id].value=t.payload.newValue,c.forEach((function(e){return e.isConvertable=!1})),c[t.payload.id].isConvertable=!0,Object(Q.a)(Object(Q.a)({},e),{},{items:c})}if(t.type===S.CONVERT){var i=e.items,s=i.find((function(e){return!0===e.isConvertable}));if(!s)return e;var u=s.value,o=s.currency.rate,l=i.map((function(e){return e.isConvertable?e:Object(Q.a)(Object(Q.a)({},e),{},{value:"RUB"===s.currency.abbreviation?+(u/e.currency.rate).toFixed(2):+(u*o/e.currency.rate).toFixed(2)})}));return Object(Q.a)(Object(Q.a)({},e),{},{items:l})}if(t.type===S.SET_HISTORY){for(var b=[[{currency:e.items[0].currency.abbreviation,value:e.items[0].value},{currency:e.items[1].currency.abbreviation,value:e.items[1].value}],[{currency:e.items[0].currency.abbreviation,value:e.items[0].value},{currency:e.items[2].currency.abbreviation,value:e.items[2].value}],[{currency:e.items[1].currency.abbreviation,value:e.items[1].value},{currency:e.items[2].currency.abbreviation,value:e.items[2].value}]].concat(Object(P.a)(e.history));b.length>10;)b.pop();return window.sessionStorage.setItem("history",JSON.stringify(b)),Object(Q.a)(Object(Q.a)({},e),{},{history:b})}if(t.type===S.GET_HISTORY){var v=JSON.parse(window.sessionStorage.getItem("history")||"[]");return Object(Q.a)(Object(Q.a)({},e),{},{history:v})}return e},te=Object(q.b)({rates:X,converts:ee}),re=Object(q.c)(Object(q.a)(z.a)),ne=Object(q.d)(te,re),ae=function(){var e=f((function(e){return e.converts.items})),t=f((function(e){return e.rates})),r=t.currencies,n=t.isLoaded,a=f((function(e){return e.converts.unselectedItems})),c=Object(E.b)(),i=function(e){e.forEach((function(t,r){r<e.length-1&&c(V(r,t))})),c(w(e))};return O.a.useEffect((function(){if(n)i(r);else{var e;c(C());var t=ne.subscribe((function(){var r=e;e=ne.getState().rates.isLoaded;var n=ne.getState().rates.currencies;r!==e&&i(n),t()}))}}),[]),Object(b.jsx)(_,{title:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442",styleClass:k.a.gridItem,children:Object(b.jsx)("div",{className:k.a.content,children:e.map((function(t,n){return Object(b.jsx)(K,{value:t.value,onInput:function(r){c(F(n,+r.target.value)),+r.target.value?(c({type:"CONVERT"}),c({type:"SET_HISTORY"})):e.forEach((function(e,r){e!==t&&c(F(r,0))}))},currency:t.currency,options:a,onSelect:function(e){var a=r.find((function(t){return t.abbreviation===e.target.value}));c(V(n,a)),c(w(r)),t.value&&(c({type:"CONVERT"}),c({type:"SET_HISTORY"}))}})}))})})},ce=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)(N,{}),Object(b.jsx)(Y,{})]})},ie=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)(ae,{})]})},se=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{path:"/currency-converter/",render:function(){return Object(b.jsx)(ce,{})},exact:!0}),Object(b.jsx)(s.a,{path:"/currency-converter/converter",render:function(){return Object(b.jsx)(ie,{})},exact:!0})]})};r(68),r(69);c.a.render(Object(b.jsx)(E.a,{store:ne,children:Object(b.jsx)(i.a,{children:Object(b.jsx)(se,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.cdaa8831.chunk.js.map