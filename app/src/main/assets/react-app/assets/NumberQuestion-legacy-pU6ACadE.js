System.register(["./index-legacy-BpzfoBKi.js","./Android-legacy-z5Tq9XsV.js","./TextField-legacy-md4lPJP4.js"],(function(e,t){"use strict";var n,o,a,i,l,r,d,u;return{setters:[e=>{n=e.j},e=>{o=e.i,a=e.w,i=e.x,l=e.y,r=e.z,d=e.E},e=>{u=e.T}],execute:function(){var t=document.createElement("style");t.textContent="._questionItem_7ep8w_1{margin-bottom:15px;width:50%}._questionItem_7ep8w_1:last-child{margin-bottom:0}@media screen and (max-width: 767px){._questionItem_7ep8w_1{width:100%}}\n",document.head.appendChild(t),e("default",(function(e){var t,c;const m=o(),p=a((t=>{let n=t.runState.values[e.component.qualifiedCode],o=t.runState.values.Survey.show_errors,a=t.templateState[e.component.qualifiedCode],i=null==n?void 0:n.validity,l=(o||a)&&!1===i;return{value:null==n?void 0:n.value,invalid:l}}),i),v=l(),x=(t,n)=>{const o="."==e.component.decimal_separator?/^[0-9]+\.?[0-9]*$/:","==e.component.decimal_separator?/^[0-9]+,?[0-9]*$/:/^[0-9]*$/;if(""!=n){if(o.test(n)){let e=_(n);return isNaN(+e)?t:e}return t}},_=t=>","!=e.component.decimal_separator?t:t.toString().replace(",",".");return n.jsx("div",{className:s.questionItem,children:n.jsx(u,{variant:"standard",required:!(null===(t=e.component.validation)||void 0===t||null===(t=t.validation_required)||void 0===t||!t.isActive),id:e.component.qualifiedCode,name:e.component.qualifiedCode,label:(null===(c=e.component.content)||void 0===c?void 0:c.hint)||"",onChange:e=>{v(r({componentCode:e.target.name,value:x(p.value,e.target.value)}))},onBlur:t=>{v(d(t.target.name));let n=+p.value;isNaN(n)||v(r({componentCode:e.component.qualifiedCode,value:n}))},inputProps:{maxLength:e.component.maxChars||void 0},value:(f=p.value,void 0===f?"":","==e.component.decimal_separator?f.toString().replace(".",","):f),error:p.invalid,InputProps:{sx:{fontFamily:m.textStyles.text.font,color:m.textStyles.text.color,fontSize:m.textStyles.text.size}}})});var f}));const s={questionItem:"_questionItem_7ep8w_1"}}}}));