(this.webpackJsonpex_2_19=this.webpackJsonpex_2_19||[]).push([[0],{19:function(e,n,t){e.exports=t(42)},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(18),c=t.n(r),l=t(4),u=t(6),i=t(7),m=t(8),s=function(e){var n=e.person,t=e.remove;return o.a.createElement("li",null,"Name: ",n.name," Number: ",n.number," ",o.a.createElement("button",{name:n.id,onClick:t},"remove"))},f=function(e){var n=e.filterWith,t=e.persons,a=e.remove,r=n.length,c=n.toUpperCase();return o.a.createElement("div",null,o.a.createElement("ul",null,t.filter((function(e){return e.name.substring(0,r).toUpperCase()===c})).map((function(e){return o.a.createElement(s,{key:e.name,person:e,remove:a})}))))},d=function(e){var n=e.state,t=e.change,a=e.submit;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:a},o.a.createElement("div",null," Name: ",o.a.createElement("input",{name:"name",value:n.name,onChange:t})," "),o.a.createElement("div",null," Number: ",o.a.createElement("input",{name:"number",value:n.number,onChange:t})," "),o.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.text,t=e.change;return o.a.createElement("div",null,o.a.createElement("p",null,"Filter show with"),o.a.createElement("form",null,o.a.createElement("input",{value:n,onChange:t})))},p=t(3),b=t.n(p),v="/api/persons",h=function(){return b.a.get(v).then((function(e){return e.data}))},E=function(e){return b.a.post(v,e).then((function(e){return e.data}))},w=function(e){return b.a.delete("".concat(v,"/").concat(e))},j=function(e,n){return b.a.put("".concat(v,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){var n=e.state;if(null===n.type)return null;console.log("ErrorMsg",n);var t="error"===n.type?"msg-base msg-error":"msg-base msg-info";return o.a.createElement("div",{className:t},n.message)},x=function(){var e=Object(a.useState)([]),n=Object(m.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)({name:"",number:""}),s=Object(a.useState)(""),p=Object(a.useState)({type:null,message:""}),b=Object(m.a)(p,2),v=b[0],x=b[1],y=function(e,n){x({type:e,message:n})},C=function(e,n){x({type:"error",message:e+": "+n.response.data.error})};Object(a.useEffect)((function(){console.log("effect"),h().then((function(e){console.log("got data",e),r(e)})).catch((function(e){C("Unable to connect",e)}))}),[]),console.log("render",t.length,"persons");return o.a.createElement("div",null,o.a.createElement(O,{state:v}),o.a.createElement("h2",null,"Phonebook"),o.a.createElement(g,{text:s[0],change:function(e){var n=e.target.value;s[1](n),console.log("filter",n)}}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(d,{state:c[0],submit:function(e){e.preventDefault(),console.log("Submit new",c[0]);var n=c[0].name.toUpperCase(),a=t.findIndex((function(e){return e.name.toUpperCase()===n}));console.log("found",a);var o=Object(u.a)({},c[0]),l=function(e,n){c[1]({name:"",number:""}),r(e),y("info",n)};if(a>=0)return!1===window.confirm("Person "+n+" exists! Replace with new?")?void console.log("bail out!"):void j(t[a].id,o).then((function(e){var n=Object(i.a)(t);n[a]=e,l(n,"Modified "+e.name)})).catch((function(e){C("Unable to update",e)}));E(o).then((function(e){l(t.concat(e),"Added "+e.name)})).catch((function(e){C("Unable to create",e)}))},change:function(e){var n=e.target.name,t=e.target.value,a=Object(u.a)(Object(u.a)({},c[0]),{},Object(l.a)({},n,t));console.log("new person",a),c[1](a)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(f,{filterWith:s[0],persons:t,remove:function(e){var n=e.target.name;console.log("delete",n),console.log(t);var a=t.findIndex((function(e){return e.id===n}));console.log("Remove index",a),a<0||!1!==window.confirm("Really delete "+t[a].name+"?")&&(console.log("Confirmation ok"),w(n).then((function(e){var n=Object(i.a)(t);n.splice(a,1),console.log(n),r(n),y("info","Information "+t[a].name+" was deleted!")})).catch((function(e){C("Unable to delete",e)})))}}))};t(41);c.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5288fd85.chunk.js.map