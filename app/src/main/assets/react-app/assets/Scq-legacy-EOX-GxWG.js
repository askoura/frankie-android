System.register(["./index-legacy-BpzfoBKi.js","./Android-legacy-z5Tq9XsV.js","./index-legacy-Pe4eUzkH.js","./RadioGroup-legacy-BOBb3Iiv.js","./Radio-legacy-TzXlSAqw.js","./TextField-legacy-md4lPJP4.js","./index-legacy-4IMd6hDJ.js","./RadioGroupContext-legacy-_VCOOLCC.js","./SwitchBase-legacy-vTmAEuWM.js"],(function(e,t){"use strict";var l,o,n,a,i,d,u,c,r,s,v,x,C,f,h;return{setters:[e=>{l=e.j,o=e.r},e=>{n=e.w,a=e.x,i=e.y,d=e.A,u=e.i,c=e.z,r=e.C,s=e.E},e=>{v=e.default},e=>{x=e.F,C=e.a},e=>{f=e.R},e=>{h=e.T},null,null,null],execute:function(){function t(e){const t=u(),o=()=>{var o;return l.jsx(C,{control:l.jsx(f,{}),label:l.jsx(r,{sx:{fontFamily:t.textStyles.text.font,color:t.textStyles.text.color,fontSize:t.textStyles.text.size},children:null===(o=e.Choice.content)||void 0===o?void 0:o.label}),value:e.Choice.code},e.Choice.qualifiedCode)};return o?o():""}function j(e){const t=u(),d=e.Choice.answers[0],r=n((t=>{let l=t.runState.values[e.Choice.qualifiedCode],o=t.runState.values[d.qualifiedCode],n=t.runState.values.Survey.show_errors,a=t.templateState[d.qualifiedCode];return{showChoice:void 0===(null==l?void 0:l.relevance)||l.relevance,childInvalid:(n||a)&&!0===(null==o?void 0:o.relevance)&&!1===(null==o?void 0:o.validity),value:(null==o?void 0:o.value)||""}}),a),x=i(),j=e=>{x(c({componentCode:e.target.name,value:e.target.value}))},m=t=>{x(c({componentCode:e.parentCode,value:e.Choice.code}))},y=e=>{x(s(e.target.name))},p=o.useRef(),g=e=>{e.target.checked&&p.current.focus()};return r.showChoice?l.jsxs("div",{className:"text-left d-flex",children:[l.jsx(C,{control:l.jsx(f,{}),label:l.jsx("div",{className:"w-100",children:l.jsx(h,{variant:"standard",required:(null===(S=r.textChild)||void 0===S?void 0:S.relevance)&&(null===(q=d.validation)||void 0===q?void 0:q.required),inputRef:p,id:d.qualifiedCode,name:d.qualifiedCode,label:null===(w=e.Choice.content)||void 0===w?void 0:w.label,onChange:j,onFocus:m,onBlur:y,value:r.value,InputProps:{sx:{fontFamily:t.textStyles.text.font,color:t.textStyles.text.color,fontSize:t.textStyles.text.size}},helperText:r.childInvalid?l.jsx(v,{component:d,limit:1}):""})}),onChange:g,value:e.Choice.code},e.Choice.qualifiedCode),l.jsx("p",{})]}):"";var S,q,w}e("default",(function(e){const o=n((t=>{let l=t.runState.values[e.component.qualifiedCode];return{value:(null==l?void 0:l.value)||""}}),a),u=i();return l.jsx(d,{component:"fieldset",children:l.jsx(x,{name:e.component.qualifiedCode,value:o.value,onChange:e=>{u(c({componentCode:e.target.name,value:e.target.value}))},children:e.component.answers.map((o=>"other"===o.type?l.jsx(j,{parentCode:e.component.qualifiedCode,Choice:o},o.qualifiedCode):l.jsx(t,{Choice:o},o.qualifiedCode)))})})}))}}}));