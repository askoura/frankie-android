System.register(["./index-legacy-BpzfoBKi.js","./Android-legacy-z5Tq9XsV.js","./Grid-legacy-q9Tnt2Yc.js","./Checkbox-legacy-v6x8JBCX.js","./SwitchBase-legacy-vTmAEuWM.js"],(function(e,o){"use strict";var t,n,i,a,c,r,s,l,d,u,p,m;return{setters:[e=>{t=e.j,n=e.X},e=>{i=e.w,a=e.x,c=e.y,r=e.Q,s=e.Z,l=e.C,d=e.z,u=e.E},e=>{p=e.G},e=>{m=e.C},null],execute:function(){var o=document.createElement("style");o.textContent="._imageGrid_htjsk_1{margin-top:16px}._imageContainer_htjsk_5{position:relative;background-size:contain;background-position:center;background-repeat:no-repeat}._selection_htjsk_12{position:absolute;top:0;border-radius:0!important;background-color:rgba(255,255,255,.8)!important}\n",document.head.appendChild(o),e("default",(function(e){return i((e=>e.runState.values.Survey.lang)),t.jsx(p,{spacing:e.component.spacing,container:!0,className:g.imageGrid,children:e.component.answers.map((o=>t.jsx(x,{option:o,aspectRatio:e.component.imageAspectRatio,columns:e.component.columns,hideText:e.component.hideText,parentCode:e.component.qualifiedCode},o.qualifiedCode)))})}));const g={imageGrid:"_imageGrid_htjsk_1",imageContainer:"_imageContainer_htjsk_5",selection:"_selection_htjsk_12"};function x(e){var o,x,h;console.log(e);const k=n(),v=i((o=>{let t=o.runState.values[e.option.qualifiedCode];return{showAnswer:void 0===(null==t?void 0:t.relevance)||t.relevance,checked:(null==t?void 0:t.value)||!1}}),a),C=c(),j=(o,t)=>{C(d({componentCode:o,value:t})),C(u(o)),C(u(e.parentCode))},_=null!==(o=e.option.resources)&&void 0!==o&&o.image?`url('${r(null===(x=e.option.resources)||void 0===x?void 0:x.image)}')`:"0";return t.jsxs(p,{item:!0,xs:12/e.columns,children:[t.jsx(s,{className:g.imageContainer,onClick:()=>j(e.option.qualifiedCode,!v.checked),style:{paddingTop:100/e.aspectRatio+"%",backgroundImage:_,backgroundColor:k.palette.background.default,border:v.checked?`2px solid ${k.palette.primary.main}`:"2px solid transparent"},children:t.jsx("div",{className:g.selection,children:t.jsx(m,{onChange:o=>j(e.option.qualifiedCode,!v.checked),checked:v.checked})})}),!e.hideText&&t.jsx(l,{sx:{fontFamily:k.textStyles.text.font,color:k.textStyles.text.color,fontSize:k.textStyles.text.size},children:null===(h=e.option.content)||void 0===h?void 0:h.label})]},e.option.code)}}}}));