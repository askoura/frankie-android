System.register(["./index-legacy-BpzfoBKi.js","./Android-legacy-z5Tq9XsV.js","./TextField-legacy-md4lPJP4.js"],(function(e,t){"use strict";var n,o,i,a,l,d,r,u;return{setters:[e=>{n=e.j},e=>{o=e.i,i=e.w,a=e.x,l=e.y,d=e.z,r=e.E},e=>{u=e.T}],execute:function(){var t=document.createElement("style");t.textContent="._questionItem_169qj_1{margin-bottom:15px;width:50%}._questionItem_169qj_1:last-child{margin-bottom:0}@media (max-width: 767px){._questionItem_169qj_1{width:100%}}\n",document.head.appendChild(t),e("default",(function(e){var t,m;const c=o(),v=i((t=>{let n=t.runState.values[e.component.qualifiedCode],o=t.runState.values.Survey.show_errors,i=t.templateState[e.component.qualifiedCode],a=null==n?void 0:n.validity,l=(o||i)&&!1===a;return{value:(null==n?void 0:n.value)||"",invalid:l}}),a),x=l();return n.jsx("div",{className:s.questionItem,children:n.jsx(u,{variant:"standard",required:!(null===(t=e.component.validation)||void 0===t||null===(t=t.validation_required)||void 0===t||!t.isActive),id:e.component.qualifiedCode,name:e.component.qualifiedCode,label:(null===(m=e.component.content)||void 0===m?void 0:m.hint)||"",onChange:e=>{x(d({componentCode:e.target.name,value:e.target.value}))},onBlur:e=>{x(r(e.target.name))},inputProps:{type:"email",maxLength:e.component.maxChars||void 0},value:v.value,error:v.invalid,InputProps:{sx:{fontFamily:c.textStyles.text.font,color:c.textStyles.text.color,fontSize:c.textStyles.text.size}}})})}));const s={questionItem:"_questionItem_169qj_1"}}}}));