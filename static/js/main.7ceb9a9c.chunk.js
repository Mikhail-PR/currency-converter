(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{13:function(e,t,n){e.exports={gridItem:"ExchangeHistory_gridItem__2db4o",wrapper:"ExchangeHistory_wrapper__396ot",content:"ExchangeHistory_content__1FqmU",list:"ExchangeHistory_list__3tHaE",btn:"ExchangeHistory_btn__2IgNZ",img:"ExchangeHistory_img__3bKWL"}},15:function(e,t,n){e.exports={select:"ConvertItem_select__3QLtX",input:"ConvertItem_input__1mpTf"}},18:function(e,t,n){e.exports={gridItem:"Header_gridItem__3ABj8",wrapper:"Header_wrapper__1rVS4",header:"Header_header__3xxdR",title:"Header_title__Dfbxb"}},19:function(e,t,n){e.exports={item:"ExchangeItem_item__63RmR",exchange:"ExchangeItem_exchange__1oQy_"}},22:function(e,t,n){e.exports={card:"Card_card__24A9V",title:"Card_title__cc3Fz",darck:"Card_darck__3NOkK"}},23:function(e,t,n){e.exports={gridItem:"ExchangeRates_gridItem__jeOzr",items:"ExchangeRates_items__3MvOV",status:"ExchangeRates_status__33_qw"}},24:function(e,t,n){e.exports={item:"RateItem_item__Ch4xi",title:"RateItem_title__22_gf",value:"RateItem_value__Ff44S"}},29:function(e,t,n){e.exports={gridItem:"CurrencyConverter_gridItem__SUuR_",content:"CurrencyConverter_content__1ub3W"}},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r,a=n(20),c=n.n(a),i=n(12),s=n(3),o=n(18),u=n.n(o),l=n.p+"static/media/logo.f54884f8.svg",d=n(1),b=function(){return Object(d.jsx)("div",{className:u.a.wrapper+" "+u.a.gridItem,children:Object(d.jsx)("div",{className:u.a.header,children:Object(d.jsxs)(i.b,{to:"/currency-converter/",children:[Object(d.jsx)("img",{src:l,alt:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(d.jsx)("h1",{className:u.a.title,children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"})]})})})},j=n(22),v=n.n(j),_=function(e){var t=e.title,n=e.isDarck,r=e.children,a=e.styleClass;return Object(d.jsxs)("div",{className:"".concat(v.a.card," ").concat(a||""," ").concat(n?v.a.darck:""),children:[Object(d.jsx)("h2",{className:v.a.title,children:t}),r]})},O=n(0),f=n.n(O),m=n(10),E=m.c,p=n(23),x=n.n(p),h=n(24),y=n.n(h),R=function(e){var t=e.name,n=e.abbreviation,r=e.rate;return Object(d.jsxs)("div",{className:y.a.item,children:[Object(d.jsxs)("h3",{className:y.a.title,children:[t,", ",n]}),Object(d.jsx)("div",{className:y.a.value,children:r})]})},g=n(38),S=n.n(g);!function(e){e.GET_RATES_STARTED="GET_RATES_STARTED",e.GET_RATES_SUCCESS="GET_RATES_SUCCESS",e.GET_RATES_ERROR="GET_RATES_ERROR"}(r||(r={}));var T,C=function(){return function(e){e({type:r.GET_RATES_STARTED});var t=["USD","EUR","GBP"];S.a.get("https://www.cbr-xml-daily.ru/daily_json.js").then((function(n){for(var a in n.data.Valute){var c=t.indexOf(a);-1!==c&&(t[c]={abbreviation:a,rate:n.data.Valute[a].Value,name:n.data.Valute[a].Name.slice(0,15)})}e({type:r.GET_RATES_SUCCESS,payload:[].concat(t)})})).catch((function(){e({type:r.GET_RATES_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0443\u0440\u0441\u043e\u0432"})}))}},I=function(){var e=Object(m.b)(),t=E((function(e){return e.rates})),n=t.currencies,r=t.isLoaded;return f.a.useEffect((function(){r||e(C())}),[]),Object(d.jsx)(_,{title:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442 \u0426\u0411 \u0420\u0424",styleClass:x.a.gridItem,children:r?Object(d.jsx)("div",{className:x.a.items,children:n.map((function(e,t){var n=e.name,r=e.abbreviation,a=e.rate;if("RUB"!==r)return Object(d.jsx)(R,{name:n,abbreviation:r,rate:a},t)}))}):Object(d.jsx)("div",{className:x.a.status,children:"\u041d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e"})})},N=n(13),A=n.n(N),H=n(19),U=n.n(H),G=function(e){var t=e.valuts;return Object(d.jsx)("div",{className:U.a.item,children:t&&t.map((function(e,n){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:U.a.exchange,children:[Object(d.jsx)("div",{className:U.a.value,children:parseFloat(e.value)}),Object(d.jsx)("div",{className:U.a.currency,children:e.currency})]},n),n!==t.length-1&&Object(d.jsx)("div",{children:"="})]})}))})},L=n.p+"static/media/exchange-history-img.67921b77.png",w=function(e,t){return{type:"CHANGE_CURRENCY",payload:{id:e,currency:t}}},V=function(e){return{type:"FILTER_UNSELECTED_ITEMS",payload:e}},F=function(e,t){return{type:"CHANGE_VALUE",payload:{id:e,newValue:t}}},D=function(e){return{type:"CONVERT",payload:{id:e}}},Y=function(e,t){return{type:"SET_HISTORY",payload:{convertableId:e,calculatedId:t}}},k=function(){var e=Object(m.b)(),t=E((function(e){return e.converts.history}));return f.a.useEffect((function(){0===t.length&&e({type:"GET_HISTORY"})}),[]),Object(d.jsx)(_,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438",styleClass:A.a.gridItem,isDarck:!0,children:Object(d.jsxs)("div",{className:A.a.wrapper,children:[Object(d.jsxs)("div",{className:A.a.content,children:[0!==t.length?Object(d.jsx)("ul",{className:A.a.list,children:t.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)(G,{valuts:e})},t)}))}):Object(d.jsx)("div",{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430"}),Object(d.jsx)(i.b,{to:"/currency-converter/converter",children:Object(d.jsx)("div",{className:A.a.btn,children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u043e\u0440 \u0432\u0430\u043b\u044e\u0442"})})]}),Object(d.jsx)("img",{className:A.a.img,src:L})]})})},B=n(29),M=n.n(B),J=n(15),q=n.n(J),z=function(e){var t=e.value,n=e.options,r=e.onSelect;return Object(d.jsxs)("select",{value:t.value,onChange:function(e){return r(e)},className:q.a.select,children:[Object(d.jsx)("option",{className:q.a.item,value:t.value,children:t.text}),n&&n.map((function(e,t){return Object(d.jsx)("option",{className:q.a.item,value:e.value,children:e.text},t)}))]})},K=function(e){var t=e.value,n=e.onInput;return Object(d.jsx)("input",{className:q.a.input,onChange:function(e){return n(e)},type:"number",value:t})},Q=function(e){var t=e.value,n=e.onInput,r=e.currency,a=e.options,c=e.onSelect;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(K,{value:t,onInput:n}),Object(d.jsx)(z,{value:{value:r.abbreviation,text:"".concat(r.name,", ").concat(r.abbreviation)},options:a.map((function(e){return{value:e.abbreviation,text:"".concat(e.name,", ").concat(e.abbreviation)}})),onSelect:c})]})},W=n(16),P=n(39),X=n(11),Z=n(4),$={currencies:[{abbreviation:"RUB",rate:1,name:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c"}],isLoaded:!1,error:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===r.GET_RATES_SUCCESS?Object(Z.a)(Object(Z.a)({},e),{},{currencies:[].concat(Object(X.a)(e.currencies),Object(X.a)(t.payload)),isLoaded:!0}):t.type===r.GET_RATES_ERROR?Object(Z.a)(Object(Z.a)({},e),{},{error:t.payload}):e};!function(e){e.CHANGE_CURRENCY="CHANGE_CURRENCY",e.FILTER_UNSELECTED_ITEMS="FILTER_UNSELECTED_ITEMS",e.CHANGE_VALUE="CHANGE_VALUE",e.CONVERT="CONVERT",e.SET_HISTORY="SET_HISTORY",e.GET_HISTORY="GET_HISTORY"}(T||(T={}));var te={items:[{value:0,currency:{abbreviation:"RUB",rate:0},isConvertable:!1},{value:0,currency:{abbreviation:"USD",rate:0},isConvertable:!1},{value:0,currency:{abbreviation:"EUR",rate:0},isConvertable:!1}],unselectedItems:[],history:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;if(t.type===T.CHANGE_CURRENCY){var n=Object(X.a)(e.items);return n[t.payload.id].currency=t.payload.currency,Object(Z.a)(Object(Z.a)({},e),{},{items:n})}if(t.type===T.FILTER_UNSELECTED_ITEMS){var r=e.items,a=t.payload;return Object(Z.a)(Object(Z.a)({},e),{},{unselectedItems:a.filter((function(e){var t=e.abbreviation;return!r.find((function(e){return e.currency.abbreviation===t}))}))})}if(t.type===T.CHANGE_VALUE){var c=Object(X.a)(e.items);return c[t.payload.id].value=t.payload.newValue,c.forEach((function(e){return e.isConvertable=!1})),c[t.payload.id].isConvertable=!0,Object(Z.a)(Object(Z.a)({},e),{},{items:c})}if(t.type===T.CONVERT){var i=Object(X.a)(e.items),s=i.find((function(e){return!0===e.isConvertable})),o=i[t.payload.id];if(!s)return e;var u=s.value,l=s.currency.rate;return o.value="RUB"===s.currency.abbreviation?+(u/o.currency.rate).toFixed(2):+(u*l/o.currency.rate).toFixed(2),Object(Z.a)(Object(Z.a)({},e),{},{items:i})}if(t.type===T.SET_HISTORY){for(var d=Object(X.a)(e.items),b=t.payload.convertableId,j=t.payload.calculatedId,v=[[{currency:d[b].currency.abbreviation,value:d[b].value},{currency:d[j].currency.abbreviation,value:d[j].value}]].concat(Object(X.a)(e.history));v.length>10;)v.pop();return window.sessionStorage.setItem("history",JSON.stringify(v)),Object(Z.a)(Object(Z.a)({},e),{},{history:v})}if(t.type===T.GET_HISTORY){var _=JSON.parse(window.sessionStorage.getItem("history")||"[]");return Object(Z.a)(Object(Z.a)({},e),{},{history:_})}return e},re=Object(W.b)({rates:ee,converts:ne}),ae=Object(W.c)(Object(W.a)(P.a)),ce=Object(W.d)(re,ae),ie=function(){var e=E((function(e){return e.converts.items})),t=E((function(e){return e.rates})),n=t.currencies,r=t.isLoaded,a=E((function(e){return e.converts.unselectedItems})),c=Object(m.b)(),i=function(e){e.forEach((function(t,n){n<e.length-1&&c(w(n,t))})),c(V(e))};f.a.useEffect((function(){if(r)i(n);else{var e;c(C());var t=ce.subscribe((function(){var n=e;e=ce.getState().rates.isLoaded;var r=ce.getState().rates.currencies;n!==e&&i(r),t()}))}}),[]);var s=function(t,n){e.forEach((function(e,r){r!==t&&(c(D(r)),c(Y(t,r)),n&&n.push(r))}))};return Object(d.jsx)(_,{title:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442",styleClass:M.a.gridItem,children:Object(d.jsx)("div",{className:M.a.content,children:e.map((function(t,r){return Object(d.jsx)(Q,{value:t.value,onInput:function(n){if(c(F(r,+n.target.value)),+n.target.value){var a=[];s(r,a),c(Y(a[0],a[1]))}else e.forEach((function(e,n){e!==t&&c(F(n,0))}))},currency:t.currency,options:a,onSelect:function(a){var i=n.find((function(e){return e.abbreviation===a.target.value}));if(c(w(r,i)),c(V(n)),t.value)if(t.isConvertable)s(r);else{var o=e.findIndex((function(e){return e.isConvertable}));c(D(r)),c(Y(o,r))}}})}))})})},se=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(I,{}),Object(d.jsx)(k,{})]})},oe=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(ie,{})]})},ue=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{path:"/currency-converter/",render:function(){return Object(d.jsx)(se,{})},exact:!0}),Object(d.jsx)(s.a,{path:"/currency-converter/converter",render:function(){return Object(d.jsx)(oe,{})},exact:!0})]})};n(68),n(69);c.a.render(Object(d.jsx)(m.a,{store:ce,children:Object(d.jsx)(i.a,{children:Object(d.jsx)(ue,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7ceb9a9c.chunk.js.map