(this.webpackJsonpex_2_19=this.webpackJsonpex_2_19||[]).push([[0],{19:function(e,n,t){e.exports=t(42)},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),c=t.n(o),l=t(4),u=t(6),i=t(7),m=t(8),s=function(e){var n=e.person,t=e.remove;return r.a.createElement("li",null,"Name: ",n.name," Number: ",n.number," ",r.a.createElement("button",{name:n.id,onClick:t},"remove"))},f=function(e){var n=e.filterWith,t=e.persons,a=e.remove,o=n.length,c=n.toUpperCase();return r.a.createElement("div",null,r.a.createElement("ul",null,t.filter((function(e){return e.name.substring(0,o).toUpperCase()===c})).map((function(e){return r.a.createElement(s,{key:e.name,person:e,remove:a})}))))},d=function(e){var n=e.state,t=e.change,a=e.submit;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null," Name: ",r.a.createElement("input",{name:"name",value:n.name,onChange:t})," "),r.a.createElement("div",null," Number: ",r.a.createElement("input",{name:"number",value:n.number,onChange:t})," "),r.a.createElement("button",{type:"submit"},"add")))},b=function(e){var n=e.text,t=e.change;return r.a.createElement("div",null,r.a.createElement("p",null,"Filter show with"),r.a.createElement("form",null,r.a.createElement("input",{value:n,onChange:t})))},g=t(3),p=t.n(g),v="/api/persons",h=function(){return p.a.get(v).then((function(e){return e.data}))},E=function(e){return p.a.post(v,e).then((function(e){return e.data}))},w=function(e){return p.a.delete("".concat(v,"/").concat(e))},j=function(e,n){return p.a.put("".concat(v,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){var n=e.state;if(null===n.type)return null;console.log("ErrorMsg",n);var t="error"===n.type?"msg-base msg-error":"msg-base msg-info";return r.a.createElement("div",{className:t},n.message)},C=function(){var e=Object(a.useState)([]),n=Object(m.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)({name:"",number:""}),s=Object(a.useState)(""),g=Object(a.useState)({type:null,message:""}),p=Object(m.a)(g,2),v=p[0],C=p[1],x=function(e,n){C({type:e,message:n})};Object(a.useEffect)((function(){console.log("effect"),h().then((function(e){console.log("got data",e),o(e)})).catch((function(e){x("error","Cannot connect")}))}),[]),console.log("render",t.length,"persons");return r.a.createElement("div",null,r.a.createElement(O,{state:v}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(b,{text:s[0],change:function(e){var n=e.target.value;s[1](n),console.log("filter",n)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(d,{state:c[0],submit:function(e){e.preventDefault(),console.log("Submit new",c[0]);var n=c[0].name.toUpperCase(),a=t.findIndex((function(e){return e.name.toUpperCase()===n}));console.log("found",a);var r=Object(u.a)({},c[0]),l=function(e,n){c[1]({name:"",number:""}),o(e),x("info",n)};if(a>=0)return!1===window.confirm("Person "+n+" exists! Replace with new?")?void console.log("bail out!"):void j(t[a].id,r).then((function(e){var n=Object(i.a)(t);n[a]=e,l(n,"Modified "+e.name)})).catch((function(e){x("error","Information "+t[a].name+" has been deleted before!")}));E(r).then((function(e){l(t.concat(e),"Added "+e.name)})).catch((function(e){x("error","Unable to create!")}))},change:function(e){var n=e.target.name,t=e.target.value,a=Object(u.a)(Object(u.a)({},c[0]),{},Object(l.a)({},n,t));console.log("new person",a),c[1](a)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(f,{filterWith:s[0],persons:t,remove:function(e){var n=parseInt(e.target.name);console.log("delete",n),console.log(t);var a=t.findIndex((function(e){return e.id===n}));console.log("Remove index",a),a<0||!1!==window.confirm("Really delete "+t[a].name+"?")&&(console.log("Confirmation ok"),w(n).then((function(e){var n=Object(i.a)(t);n.splice(a,1),console.log(n),o(n),x("info","Information "+t[a].name+" was deleted!")})).catch((function(e){x("error","Information "+t[a].name+" has been deleted before!")})))}}))};t(41);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.dffa33a4.chunk.js.map