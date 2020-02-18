(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{38:function(e,t,a){e.exports=a(68)},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),l=a(2),s=a(3),i=a(5),m=a(4),u=a(6),p=a(7),d=a.n(p),h=a(13),b=a(11),f=a.n(b),v=a(37),E=a(19),y=a(14),g=a.n(y),C=r.a.createContext(),j=function(e,t){switch(t.type){case"DeleteContact":return Object(E.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"AddContact":return Object(E.a)({},e,{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"EditContact":return Object(E.a)({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?t.payload:e}))});default:return e}},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState((function(t){return j(t,e)}))}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}},{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),k=C.Consumer,O=a(15),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onClickDelete=function(){var e=Object(h.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({payload:t,type:"DeleteContact"});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.onClickToggle=function(e){a.setState({showContactInfo:!a.state.showContactInfo})},a.PropTypes={name:f.a.string.isRequired,email:f.a.string.isRequired,phone:f.a.string.isRequired},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone;return r.a.createElement(k,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{sytle:{cursor:"pointer"},onClick:e.onClickToggle,className:"fas fa-angle-down ml-2"}),r.a.createElement("i",{sytle:{cursor:"pointer",float:"right"},onClick:e.onClickDelete.bind(e,a,l),className:"fas fa-trash-alt float-right"}),r.a.createElement(O.b,{to:"/edit/".concat(a),sytle:{cursor:"pointer",float:"right"},className:"fas fa-pencil-alt float-right mr-3 ml-3"})),e.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"display-4 mb-3"},r.a.createElement("span",{className:"text-danger"},"Contact "),"List"),t.map((function(e){return r.a.createElement(w,{key:e.id,contact:e})})))}))}}]),t}(n.Component),S=a(18),A=a(36),q=a.n(A),P=function(e){var t=e.name,a=e.label,n=e.onChange,c=e.type,o=e.placeholder,l=e.value,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},a," "),r.a.createElement("input",{type:c,name:t,className:q()("form-control form-control-lg",{"is-invalid":s}),value:l,placeholder:o,onChange:n}),r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var D=P,T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",phone:"",email:"",showAddContact:!0,errors:{}},a.onClickToggle=function(){a.setState({showAddContact:!a.state.showAddContact})},a.onChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r,c,o,l,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=9;break}return a.setState({errors:{email:"email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"phone is required"}}),e.abrupt("return");case 12:return s={name:c,email:o,phone:l},e.next=15,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 15:i=e.sent,t({type:"AddContact",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact",r.a.createElement("b",{sytle:{cursor:"pointer"},onClick:e.onClickToggle,className:"fas fa-angle-down ml-3"})),e.state.showAddContact?r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{name:"name",value:a,placeholder:"Name..",onChange:e.onChange,label:"Name",error:o.name}),r.a.createElement(D,{name:"email",value:n,placeholder:"Email..",onChange:e.onChange,label:"Email",type:"email",error:o.email}),r.a.createElement(D,{name:"phone",value:c,placeholder:"Phone..",onChange:e.onChange,label:"Phone",error:o.phone}),r.a.createElement("input",{type:"submit",value:"AddContact",className:"btn btn-light btn-block"}))):null)}))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",phone:"",email:"",showAddContact:!0,errors:{}},a.onClickToggle=function(){a.setState({showAddContact:!a.state.showAddContact})},a.onChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r,c,o,l,s,i,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=9;break}return a.setState({errors:{email:"email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"phone is required"}}),e.abrupt("return");case 12:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=16,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 16:m=e.sent,t({type:"EditContact",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 20:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:return e.next=5,e.sent.data;case 5:a=e.sent,this.setState({name:a.name,email:a.email,phone:a.phone});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact",r.a.createElement("b",{sytle:{cursor:"pointer"},onClick:e.onClickToggle,className:"fas fa-angle-down ml-3"})),e.state.showAddContact?r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{name:"name",value:a,placeholder:"Name..",onChange:e.onChange,label:"Name",error:o.name}),r.a.createElement(D,{name:"email",value:n,placeholder:"Email..",onChange:e.onChange,label:"Email",type:"email",error:o.email}),r.a.createElement(D,{name:"phone",value:c,placeholder:"Phone..",onChange:e.onChange,label:"Phone",error:o.phone}),r.a.createElement("input",{type:"submit",value:"UpdateContact",className:"btn btn-light btn-block"}))):null)}))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},t),r.a.createElement("h4",null,a))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}}]),t}(n.Component),R=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.b,{to:"/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," AddContact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};R.defaultProps={branding:"Branding Logo"},R.prototype={branding:f.a.string.isRequired};var B=R;function F(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"text-secondary"},"Go back to inside your home kid "),r.a.createElement("p",{className:"text-secondary"},"version 0.1.0.0"))}function G(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist ."),r.a.createElement("p",{className:"text-secondary"},"Go back inside your home kid"))}a(66),a(67);var J=a(16),L=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(O.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(B,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(J.c,null,r.a.createElement(J.a,{exact:!0,path:"/",component:x}),r.a.createElement(J.a,{exact:!0,path:"/add",component:T}),r.a.createElement(J.a,{exact:!0,path:"/edit/:id",component:I}),r.a.createElement(J.a,{exact:!0,path:"/about",component:F}),r.a.createElement(J.a,{exact:!0,path:"/Test",component:M}),r.a.createElement(J.a,{exact:!0,component:G}))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b05cc717.chunk.js.map