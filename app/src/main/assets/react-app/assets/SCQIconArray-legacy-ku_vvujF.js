System.register(["./index-legacy-BpzfoBKi.js","./Android-legacy-z5Tq9XsV.js","./index-legacy-Pe4eUzkH.js","./TableRow-legacy-ED5mZpdJ.js","./index-legacy-4IMd6hDJ.js"],(function(e,n){"use strict";var i,t,d,o,a,r,s,l,c,u,_,x;return{setters:[e=>{i=e.j,t=e.z,d=e.X},e=>{o=e.w,a=e.y,r=e.z},e=>{s=e.default},e=>{l=e.a,c=e.b,u=e.e,_=e.c,x=e.d},null],execute:function(){var n=document.createElement("style");n.textContent="._noPadding_1ii70_1{padding:0}._addRow_1ii70_5{margin-top:16px}._addColumn_1ii70_9{text-align:right}._addIcon_1ii70_13{width:64px;height:64px}._addIcon_1ii70_13>svg{width:100%;height:100%}._svgContainer_1ii70_23{text-align:center}._svgContainer_1ii70_23>svg{width:100%;height:100%}._addButton_1ii70_31._addButton_1ii70_31{text-transform:none;color:#16205b;font-weight:bolder;background-color:#e0e2ef;border-radius:9999px;padding:.5rem 1rem}\n",document.head.appendChild(n),e("default",(function(e){let n=e.component.answers.filter((e=>"column"==e.type)),d=e.component.answers.filter((e=>"row"==e.type));return i.jsx(l,{children:i.jsx(c,{children:i.jsx(u,{children:d.map((e=>i.jsx(t.Fragment,{children:i.jsx(h,{answer:e,choices:n},e.qualifiedCode)},e.qualifiedCode)))})})})}));const g={noPadding:"_noPadding_1ii70_1",addRow:"_addRow_1ii70_5",addColumn:"_addColumn_1ii70_9",addIcon:"_addIcon_1ii70_13",svgContainer:"_svgContainer_1ii70_23",addButton:"_addButton_1ii70_31"};function h(e){var n;const l=d(),c=o((n=>{var i;return null===(i=n.templateState[e.answer.qualifiedCode])||void 0===i?void 0:i.isDirty})),u=o((e=>e.runState.values.Survey.show_errors)),h=o((n=>n.runState.values[e.answer.qualifiedCode])),m=t.useMemo((()=>null==h?void 0:h.validity),[h]),p=t.useMemo((()=>null==h?void 0:h.value),[h]),v=t.useMemo((()=>null==h?void 0:h.relevance),[h]),w=a(),y=(u||c)&&!1===m;return void 0===v||v?i.jsxs(t.Fragment,{children:[i.jsxs(_,{children:[i.jsx(x,{sx:{fontFamily:l.textStyles.text.font,color:l.textStyles.text.color,fontSize:l.textStyles.text.size,borderBottom:y?"0":"",padding:"8px"},children:null===(n=e.answer.content)||void 0===n?void 0:n.label}),e.choices.map((n=>i.jsx(x,{component:"th",scope:"row",sx:{borderBottom:y?"0":"",padding:"8px"},children:i.jsx("div",{onClick:()=>{return i=n.code,void w(r({componentCode:e.answer.qualifiedCode,value:i}));var i},style:{opacity:p==n.code?1:.2,height:"64px",width:"px",borderRadius:"8px"},className:g.svgContainer,dangerouslySetInnerHTML:{__html:n.icon||""}})},n.code)))]},e.answer.code),y?i.jsx(_,{children:i.jsx(x,{sx:{padding:"8px"},colSpan:e.choices?e.choices.length+1:1,children:i.jsx(s,{component:e.answer})})}):""]}):""}}}}));