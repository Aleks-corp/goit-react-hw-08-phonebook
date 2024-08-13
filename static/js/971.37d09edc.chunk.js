"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[971],{3935:(e,t,n)=>{n.d(t,{mc:()=>d,i6:()=>p,wn:()=>u});var r=n(221),o=n(7872),i=n(579);function l(e){let{children:t}=e;return(0,i.jsx)(o.A,{disableGutters:!0,maxWidth:"460px",sx:{display:"flex",flexDirection:"column",position:"relative",mb:3,py:6,px:9,border:"1px solid #DEDBDB",borderRadius:"30px",boxShadow:"10px 10px 16px -8px rgba(0, 0, 0, 0.25)",maxWidth:"460px",bgcolor:"#ffffff",alignItems:"center"},children:t})}function a(e){let{children:t}=e;return(0,i.jsx)(o.A,{disableGutters:!0,maxWidth:"650px",sx:{display:"flex",flexDirection:"column",position:"relative",mx:"auto",py:5,pl:"40px",pr:"15px",border:"1px solid #DEDBDB",borderRadius:"30px",boxShadow:"10px 10px 16px -8px rgba(0, 0, 0, 0.25)",maxWidth:"600px",bgcolor:"#ffffff"},children:t})}const s=r.Ay.h2`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -1.4px;
  text-align: start;
  margin-bottom: 25px;
`,c=r.Ay.span`
  color: #265dba;
`,d=e=>{let{title:t,accent:n,children:r}=e;return(0,i.jsxs)(l,{children:[t&&(0,i.jsxs)(s,{children:[n&&(0,i.jsx)(c,{children:`${n} `}),t]}),r]})},p=e=>{let{title:t,children:n}=e;return(0,i.jsxs)(a,{children:[t&&(0,i.jsx)(s,{children:t}),n]})},u=r.Ay.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1440px;
  font-size: 24px;
  color: #010101;
`},2406:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(9798),o=n(579);const i=()=>(0,o.jsx)(r._5,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{justifyContent:"center",alignItems:"center",marginTop:"20px"},wrapperClass:"",visible:!0})},8971:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var r=n(3935),o=n(5043),i=n(9456),l=n(6977);const a=e=>e.contacts.contactsList,s=e=>e.contacts.isLoadingFetch,c=e=>e.contacts.isLoadingAdd,d=e=>e.contacts.contactDelId,p=e=>e.contacts.error,u=e=>e.filter.value,h=e=>{let{contacts:t,filter:n}=e;return n.value.trim()?t.contactsList.filter((e=>e.name.toLowerCase().includes(n.value.toLowerCase().trim()))):t.contactsList};var x=n(9529),m=n(3193),f=n(9190),v=n(9139),g=n(3768),A=n(221);A.Ay.form`
  display: block;
  max-width: 320px;
  padding: 15px;
  border: 1px solid #010101;
  margin-bottom: 20px;
`,A.Ay.label`
  font-size: 20px;
  font-weight: 500;
`,A.Ay.input`
  min-width: 240px;

  margin-bottom: 20px;
  margin-right: 20px;
`,A.Ay.button`
  display: block;
  font-size: 16px;
`;const b=A.Ay.div`
  width: 250px;
  margin: 0 auto;
  margin-top: 20px;
`;var y=n(579);function w(){const e=(0,i.d4)(a),t=(0,i.d4)(c),n=(0,i.wA)(),[r,s]=(0,o.useState)(""),[d,p]=(0,o.useState)(""),[u,h]=(0,o.useState)(""),A=e=>{const{name:t,value:n}=e.target;switch(t){case"name":s(n);break;case"email":h(n);break;case"phone":p(n);break;default:return}},w=()=>{s(""),p(""),h("")};return(0,y.jsxs)("form",{onSubmit:t=>(t=>{t.preventDefault(),e.some((e=>e.name.toLowerCase().trim()===r.toLowerCase().trim()))?g.oR.error(`${r} is already in contacts.`):(n((0,l.IP)({name:r,phone:d,email:u})),w())})(t),children:[(0,y.jsxs)(m.A,{fullWidth:!0,required:!0,size:"small",color:"primary",children:[(0,y.jsx)(f.A,{htmlFor:"name",children:"Name"}),(0,y.jsx)(v.A,{id:"name",label:"Name",name:"name",type:"text",variant:"outlined",inputProps:{pattern:"[^0-9]*"},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:r,onChange:A})]}),(0,y.jsxs)(m.A,{fullWidth:!0,required:!0,size:"small",color:"primary",sx:{mt:"20px"},children:[(0,y.jsx)(f.A,{htmlFor:"phone",children:"Phone"}),(0,y.jsx)(v.A,{id:"phone",label:"Phone",name:"phone",type:"tel",variant:"outlined",inputProps:{pattern:"[^a-zA-Z\u0430-\u044f\u0410-\u042f]*"},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:d,onChange:A})]}),(0,y.jsxs)(m.A,{fullWidth:!0,required:!0,size:"small",color:"primary",sx:{mt:"20px"},children:[(0,y.jsx)(f.A,{htmlFor:"email",children:"Email"}),(0,y.jsx)(v.A,{id:"email",label:"Email",name:"email",type:"email",variant:"outlined",inputProps:{pattern:"^[\\w]+@+[a-z]+.+[a-z]$"},title:"Please set email correctly",value:u,onChange:A})]}),(0,y.jsx)(b,{children:(0,y.jsx)(x.A,{size:"small",variant:"contained",type:"submit",loading:t,loadingIndicator:"Loading\u2026",sx:{m:"0 auto",width:"220px",fontSize:"16px",fontWeight:600,letterSpacing:"1px"},children:"Add contacts"})})]})}const j=A.Ay.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 210px;
`,S=A.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;const z=(0,n(9662).A)((0,y.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");var C=n(6719);const k=e=>{let{id:t,name:n,phone:r,email:o}=e;const a=(0,i.d4)(d),s=(0,i.wA)();return(0,y.jsxs)(S,{children:[(0,y.jsxs)(j,{children:[(0,y.jsx)(C.A,{color:"primary",sx:{mr:"30px"}}),n]}),(0,y.jsx)(j,{children:r}),(0,y.jsx)(j,{children:o}),(0,y.jsx)(x.A,{type:"button",loading:a===t,variant:"contained",onClick:()=>s((0,l.MO)(t)),sx:{p:0,m:0,minWidth:"35px",height:"35px",borderRadius:"10px",border:"1px solid #CDCDCD)",boxShadow:"2px 2px 8px 0px rgba(0, 0, 0, 0.25)"},children:(0,y.jsx)(z,{})})]})},I=A.Ay.li`
  margin-bottom: 8px;
  width: 470px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #dedbdb;
  background: #fff;
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
`,L=A.Ay.ul`
  display: block;

  margin-top: 20px;
  height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: hsl(0 0% 50%);
`;var D=n(2406);const P=()=>{const e=(0,i.d4)(h),t=(0,i.d4)(s),n=(0,i.d4)(p),r=(0,i.wA)();return(0,o.useEffect)((()=>{r((0,l.oe)())}),[r]),(0,y.jsxs)(y.Fragment,{children:[n&&(0,y.jsxs)("p",{children:[n,". Please try again or reload page."]}),t&&(0,y.jsx)(D.A,{}),0===e.length&&!t&&!n&&(0,y.jsx)("h2",{children:"Your PhoneBook is empty"}),0!==e.length&&!t&&!n&&(0,y.jsx)(L,{children:e.map((e=>(0,y.jsx)(I,{children:(0,y.jsx)(k,{id:e._id,name:e.name,phone:e.phone,email:e.email})},e._id)))})]})};var _=n(8877),R=n(7291);const F=()=>{const e=(0,i.d4)(u),t=(0,i.wA)();return(0,y.jsxs)("div",{children:[(0,y.jsxs)(m.A,{size:"small",color:"primary",children:[(0,y.jsx)(f.A,{htmlFor:"filter",children:"Find contacts by name"}),(0,y.jsx)(v.A,{size:"small",id:"filter",label:"filter",name:"filter",type:"text",variant:"outlined",title:"Enter contact Name or Lastname",value:e,onChange:e=>t((0,_.U2)(e.target.value)),sx:{width:"300px",mb:1,mr:2}})]}),(0,y.jsx)(R.A,{size:"small",variant:"contained",sx:{p:1},type:"reset",onClick:()=>t((0,_.VT)()),children:"Clear filter"})]})};function B(){return(0,y.jsxs)(r.wn,{children:[(0,y.jsx)(r.mc,{title:"Add new contact",children:(0,y.jsx)(w,{})}),(0,y.jsxs)(r.i6,{title:"Contacts list",children:[(0,y.jsx)(F,{}),(0,y.jsx)(P,{})]})]})}},6719:(e,t,n)=>{var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1z"}),"AssignmentIndRounded")},39:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(5367)},9662:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(8168),o=n(5043),i=n(8587),l=n(8387),a=n(8610),s=n(6803),c=n(6431),d=n(4535),p=n(2532),u=n(2372);function h(e){return(0,u.Ay)("MuiSvgIcon",e)}(0,p.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var x=n(579);const m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],f=(0,d.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,s.A)(n.color)}`],t[`fontSize${(0,s.A)(n.fontSize)}`]]}})((e=>{let{theme:t,ownerState:n}=e;var r,o,i,l,a,s,c,d,p,u,h,x,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(o=r.create)?void 0:o.call(r,"fill",{duration:null==(i=t.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(l=t.typography)||null==(a=l.pxToRem)?void 0:a.call(l,20))||"1.25rem",medium:(null==(s=t.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(d=t.typography)||null==(p=d.pxToRem)?void 0:p.call(d,35))||"2.1875rem"}[n.fontSize],color:null!=(u=null==(h=(t.vars||t).palette)||null==(h=h[n.color])?void 0:h.main)?u:{action:null==(x=(t.vars||t).palette)||null==(x=x.action)?void 0:x.active,disabled:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[n.color]}})),v=o.forwardRef((function(e,t){const n=(0,c.b)({props:e,name:"MuiSvgIcon"}),{children:d,className:p,color:u="inherit",component:v="svg",fontSize:g="medium",htmlColor:A,inheritViewBox:b=!1,titleAccess:y,viewBox:w="0 0 24 24"}=n,j=(0,i.A)(n,m),S=o.isValidElement(d)&&"svg"===d.type,z=(0,r.A)({},n,{color:u,component:v,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:w,hasSvgAsChild:S}),C={};b||(C.viewBox=w);const k=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,s.A)(t)}`,`fontSize${(0,s.A)(n)}`]};return(0,a.A)(o,h,r)})(z);return(0,x.jsxs)(f,(0,r.A)({as:v,className:(0,l.A)(k.root,p),focusable:"false",color:A,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},C,j,S&&d.props,{ownerState:z,children:[S?d.props.children:d,y?(0,x.jsx)("title",{children:y}):null]}))}));v.muiName="SvgIcon";const g=v;function A(e,t){function n(n,o){return(0,x.jsx)(g,(0,r.A)({"data-testid":`${t}Icon`,ref:o},n,{children:e}))}return n.muiName=g.muiName,o.memo(o.forwardRef(n))}},5367:(e,t,n)=>{n.r(t),n.d(t,{capitalize:()=>o.A,createChainedFunction:()=>i,createSvgIcon:()=>l.A,debounce:()=>a,deprecatedPropType:()=>s,isMuiElement:()=>c.A,ownerDocument:()=>d,ownerWindow:()=>p,requirePropFactory:()=>u,setRef:()=>h,unstable_ClassNameGenerator:()=>w,unstable_useEnhancedEffect:()=>x.A,unstable_useId:()=>m.A,unsupportedProp:()=>f,useControlled:()=>g,useEventCallback:()=>A.A,useForkRef:()=>b.A,useIsFocusVisible:()=>y.A});var r=n(9386),o=n(6803);const i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}),(()=>{}))};var l=n(9662);const a=n(3468).A;const s=function(e,t){return()=>null};var c=n(7328);const d=n(1668).A;const p=n(3940).A;n(8168);const u=function(e,t){return()=>null};const h=n(6564).A;var x=n(5013),m=n(9488);const f=function(e,t,n,r,o){return null};var v=n(5043);const g=function(e){let{controlled:t,default:n,name:r,state:o="value"}=e;const{current:i}=v.useRef(void 0!==t),[l,a]=v.useState(n);return[i?t:l,v.useCallback((e=>{i||a(e)}),[])]};var A=n(3110),b=n(5849),y=n(3574);const w={configure:e=>{r.A.configure(e)}}}}]);
//# sourceMappingURL=971.37d09edc.chunk.js.map