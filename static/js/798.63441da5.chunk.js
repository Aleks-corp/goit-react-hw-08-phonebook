"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[798],{9798:(t,e,a)=>{a.d(e,{_5:()=>h});var r=a(5043),i=a(221);const n=function(t,e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof a[t])return a[t];if(t&&t.indexOf(".")>0){for(var r=t.split("."),i=r.length,n=a[r[0]],o=1;null!=n&&o<i;)n=n[r[o]],o+=1;if("undefined"!==typeof n)return n}return e}};const o=t=>({display:t?"flex":"none"}),s="#4fa94d",c={"aria-busy":!0,role:"status"};var h=t=>{let{height:e=80,width:a=80,color:i=s,ariaLabel:n="circles-loading",wrapperStyle:h,wrapperClass:d,visible:l=!0}=t;return r.createElement("div",{style:{...o(l),...h},className:d,"aria-label":n,"data-testid":"circles-loading",...c},r.createElement("svg",{width:a,height:e,viewBox:"0 0 135 135",xmlns:"http://www.w3.org/2000/svg",fill:i,"data-testid":"circles-svg"},r.createElement("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})),r.createElement("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"}))))};const d=242.776657104492,l=i.i7`
  12.5% {
    stroke-dasharray: ${33.98873199462888}px, ${d}px;
    stroke-dashoffset: -${26.70543228149412}px;
  }
  43.75% {
    stroke-dasharray: ${84.97182998657219}px, ${d}px;
    stroke-dashoffset: -${84.97182998657219}px;
  }
  100% {
    stroke-dasharray: ${2.42776657104492}px, ${d}px;
    stroke-dashoffset: -${240.34889053344708}px;
  }
`;i.Ay.path`
  stroke-dasharray: ${2.42776657104492}px, ${d};
  stroke-dashoffset: 0;
  animation: ${l} ${1.6}s linear infinite;
`;const p=i.i7`
 to {
    transform: rotate(360deg);
  }
`;i.Ay.svg`
  animation: ${p} 0.75s steps(12, end) infinite;
  animation-duration: ${n("speed","0.75")}s;
`,i.Ay.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const f=i.i7`
 to {
    stroke-dashoffset: 136;
  }
`;i.Ay.polygon`
  stroke-dasharray: 17;
  animation: ${f} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,i.Ay.svg`
  transform-origin: 50% 65%;
`}}]);
//# sourceMappingURL=798.63441da5.chunk.js.map