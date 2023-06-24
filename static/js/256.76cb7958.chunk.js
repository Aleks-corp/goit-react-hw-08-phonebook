"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[256],{1256:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var r,a,i,o,s,c,l=e(168),u=e(7691),d=u.ZP.section(r||(r=(0,l.Z)(["\n  padding: 15px 20px;\n  max-width: 480px;\n  min-width: 400px;\n  background-color: #fff;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  background-color: #7fb3b9;\n"]))),p=e(184),x=function(n){var t=n.title,e=n.children;return(0,p.jsxs)(d,{children:[(0,p.jsx)("h2",{children:t}),e]})},h=e(9439),m=e(2791),f=u.ZP.form(a||(a=(0,l.Z)(["\n  display: block;\n  max-width: 320px;\n  padding: 15px;\n  border: 1px solid #010101;\n  margin-bottom: 20px;\n"]))),g=u.ZP.label(i||(i=(0,l.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),b=u.ZP.input(o||(o=(0,l.Z)(["\n  min-width: 240px;\n\n  margin-bottom: 20px;\n  margin-right: 20px;\n"]))),j=(u.ZP.button(s||(s=(0,l.Z)(["\n  display: block;\n  font-size: 16px;\n"]))),e(9434)),v=e(3634),Z=function(n){return n.contacts.contactsList},w=function(n){return n.contacts.isLoadingFetch},y=function(n){return n.contacts.isLoadingAdd},k=function(n){return n.contacts.contactDelId},C=function(n){return n.contacts.error},P=function(n){return n.filter.value},L=function(n){var t=n.contacts,e=n.filter;return e.value.trim()?t.contactsList.filter((function(n){return n.name.toLowerCase().includes(e.value.toLowerCase().trim())})):t.contactsList},z=e(6463);function A(){var n=(0,j.v9)(Z),t=(0,j.v9)(y),e=(0,j.I0)(),r=(0,m.useState)(""),a=(0,h.Z)(r,2),i=a[0],o=a[1],s=(0,m.useState)(""),c=(0,h.Z)(s,2),l=c[0],u=c[1],d=function(n){var t=n.target,e=t.name,r=t.value;switch(e){case"name":o(r);break;case"number":u(r);break;default:return}},x=function(){o(""),u("")};return(0,p.jsxs)(f,{onSubmit:function(t){t.preventDefault(),n.some((function(n){return n.name.toLowerCase().trim()===i.toLowerCase().trim()}))?alert("".concat(i," is already in contacts.")):(e((0,v.uK)({name:i,number:l})),x())},children:[(0,p.jsxs)(g,{children:["Name",(0,p.jsx)(b,{type:"text",name:"name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),(0,p.jsxs)(g,{children:["Number",(0,p.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l,onChange:d})]}),(0,p.jsx)(z.Z,{size:"small",variant:"contained",type:"submit",loading:t,loadingIndicator:"Loading\u2026",children:"Add contacts"})]})}var _,I,F,S,K=u.ZP.span(c||(c=(0,l.Z)(["\n  margin-right: 20px;\n"]))),N=e(9496),q=function(n){var t=n.id,e=n.name,r=n.number,a=(0,j.v9)(k),i=(0,j.I0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(K,{children:[e,": ",r]}),(0,p.jsx)(z.Z,{size:"small",type:"button",loading:a===t,variant:"contained",onClick:function(){return i((0,v.GK)(t))},children:(0,p.jsx)(N.Z,{})})]})},B=u.ZP.li(_||(_=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),D=u.ZP.ul(I||(I=(0,l.Z)(["\n  display: block;\n  margin-top: 20px;\n  height: 250px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: hsl(0 0% 50%);\n"]))),J=e(5243),E=function(){return(0,p.jsx)(J.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{justifyContent:"center",alignItems:"center",marginTop:"20px"},wrapperClass:"",visible:!0})},G=function(){var n=(0,j.v9)(L),t=(0,j.v9)(w),e=(0,j.v9)(C),r=(0,j.I0)();return(0,m.useEffect)((function(){r((0,v.yF)())}),[r]),(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsxs)("p",{children:[e,". Please try again or reload page."]}),t&&(0,p.jsx)(E,{}),0===n.length&&!t&&!e&&(0,p.jsx)("h2",{children:"Your PhoneBook is empty"}),0!==n.length&&!t&&!e&&(0,p.jsx)(D,{children:n.map((function(n){return(0,p.jsx)(B,{children:(0,p.jsx)(q,{id:n.id,name:n.name,number:n.number})},n.id)}))})]})},M=u.ZP.label(F||(F=(0,l.Z)(["\n  margin-right: 30px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),T=e(6895),Y=function(){var n=(0,j.v9)(P),t=(0,j.I0)();return(0,p.jsxs)("div",{children:[(0,p.jsxs)(M,{children:["Find contacts by name",(0,p.jsx)(b,{type:"text",name:"filter",value:n,onChange:function(n){return t((0,T.KJ)(n.target.value))}})]}),(0,p.jsx)("button",{type:"reset",onClick:function(){return t((0,T.ku)())},children:"Clear filter"})]})},$=u.ZP.div(S||(S=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n  font-size: 24px;\n  color: #010101;\n"])));function H(){return(0,p.jsxs)($,{children:[(0,p.jsx)(x,{title:"Add new contact",children:(0,p.jsx)(A,{})}),(0,p.jsxs)(x,{title:"Contacts list",children:[(0,p.jsx)(Y,{}),(0,p.jsx)(G,{})]})]})}}}]);
//# sourceMappingURL=256.76cb7958.chunk.js.map