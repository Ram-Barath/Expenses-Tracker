(this["webpackJsonpexpenses-tracker"]=this["webpackJsonpexpenses-tracker"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),function(){return r.a.createElement("h2",null,"Expense Tracker")}),o=n(2),i=n(7),m=n(3),s=function(e,t){switch(t.type){case"Delete_Transaction":return Object(m.a)(Object(m.a)({},e),{},{transaction:e.transaction.filter((function(e){return e.id!==t.payload}))});case"Create_Transaction":return Object(m.a)(Object(m.a)({},e),{},{transaction:[t.payload].concat(Object(i.a)(e.transaction))});default:return e}},d={transaction:[]},E=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(s,d),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(E.Provider,{value:{transaction:l.transaction,deleteTransaction:function(e){u({type:"Delete_Transaction",payload:e})},createTransaction:function(e){u({type:"Create_Transaction",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(E).transaction.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},"\u20b9",e))},b=function(){var e=Object(a.useContext)(E).transaction.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"\u20b9",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"\u20b9",n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(E).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.item," ",r.a.createElement("span",null,c,"\u20b9",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:"delete-btn"},"x"))},h=function(){var e=Object(a.useContext)(E).transaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},x=function(){var e=Object(a.useContext)(E).createTransaction,t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(0),i=Object(o.a)(u,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={id:Math.floor(1e8*Math.random()),item:c,amount:+m};e(n)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",id:"text",value:c,onChange:function(e){return l(e.target.value)},placeholder:"Enter item...",autoComplete:"off"})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",id:"amount",value:m,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount...",autoComplete:"off"})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var j=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(x,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.eb0cc990.chunk.js.map