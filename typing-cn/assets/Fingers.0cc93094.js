var te=Object.defineProperty;var H=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var V=(s,i,c)=>i in s?te(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c,I=(s,i)=>{for(var c in i||(i={}))re.call(i,c)&&V(s,c,i[c]);if(H)for(var c of H(i))ne.call(i,c)&&V(s,c,i[c]);return s};import{r as n,j as t,R as $,e as a,C as l,B as K,v as se,o as oe,P as ce,w as ie,x as le,y as U,z as ue,D as ae}from"./vendor.d82eab52.js";import{s as de}from"./index.dce2a926.js";import{w as k}from"./wordTool.a5d54c1e.js";const{Countdown:he}=ae,{Panel:me}=U,O=s=>{const i=Math.floor(s/60),c=s%60;return`${i}:${c<10?"0":""}${c}`},fe=s=>{const[i,c]=n.exports.useState(!0),[z,q]=n.exports.useState(0),[u,F]=n.exports.useState(0),[W,N]=n.exports.useState([]),[f,S]=n.exports.useState(""),[x,B]=n.exports.useState(!1),R=n.exports.useRef(k.getWords(s.$state.root.wordsMode,s.$state.root.customerWords)),g=n.exports.useRef(null),j=n.exports.useRef(null),p=n.exports.useRef(0),v=n.exports.useRef(!1),D=n.exports.useRef(0),A=n.exports.useRef(0),C=n.exports.useRef(!1),T=n.exports.useRef(53),b=n.exports.useRef(0),w=n.exports.useRef(parseInt(s.$state.root.countdownTime,10)),[G,J]=n.exports.useState(O(w.current)),[L,Q]=n.exports.useState(!1),d=n.exports.useRef({wpm:0,correct:0,wrong:0,inputWordArr:[]}),X=()=>{const e=w.current;q(Date.now()+e*1e3)},E=e=>{N(o=>{const r=[...R.current];return e?(p.current=0,[I({isCorrect:null},r[p.current])]):(p.current+=1,p.current>=r.length&&(p.current=0),o.concat(I({isCorrect:null},r[p.current])))})},M=(e,o)=>{let r=!0;return e.forEach((h,m)=>{o.charAt(m)!==h&&(r=!1)}),r},Y=e=>{e&&/^\d+$/g.test(String(e))&&(w.current=Number(e),J(O(Number(e))))},Z=()=>{if(C.current){const e=d.current.inputWordArr,o=e.filter(r=>r.isCorrect===!0).length;d.current={wpm:Math.round(o/(w.current/60)),correct:o,wrong:e.filter(r=>r.isCorrect===!1).length,inputWordArr:e},B(!0),console.log(W)}},y=n.exports.useCallback(()=>{v.current=!1,A.current=0,C.current=!1,b.current=0,B(!1),S(""),F(0),R.current=k.shuffle(R.current),E(!0),setTimeout(()=>{j.current.focus(),d.current={wpm:0,correct:0,wrong:0,inputWordArr:[]}},10)},[]),_=e=>{e.keyCode===13&&y(),!x&&(b.current+=1)};return n.exports.useEffect(()=>{if(g){const e=g.current.lastElementChild;if(!e||!e.lastElementChild)return;const o=g.current.scrollTop;Array.from(e.children).forEach((r,h)=>{T.current=r.offsetHeight;const m=r.offsetTop-e.offsetTop,P=T.current+o,ee=P-5<m&&m<P+5;!v.current&&ee&&(D.current=h,v.current=!0)}),e.lastElementChild.offsetTop-e.offsetTop-o<T.current*3+1&&E()}},[W.length]),n.exports.useEffect(()=>{if(x)return;if(f===""){N(o=>{const r=[...o];return r[u]&&(r[u].isCorrect=null),r});return}C.current||X(),C.current=!0;const e=Array.from(f.trim());if(f[f.length-1]===" "){if(S(""),e.length===0)return;N(o=>{let r=[...o];const h=r[u],m=M(e,h.text);return r[u].isCorrect=m&&e.length===h.text.length,d.current.inputWordArr.push(Object.assign({input:e.join("")},r[u])),r}),F(u+1),u+1===D.current&&(A.current+=1,g.current.scrollTop=T.current*A.current,v.current=!1,E())}else N(o=>{const r=[...o],h=r[u],m=M(e,h.text);return r[u].isCorrect=m===!1?!1:null,r})},[u,x,f]),n.exports.useEffect(()=>{R.current=k.getWords(s.$state.root.wordsMode,s.$state.root.customerWords),setTimeout(()=>{y(),c(!1)},1e3)},[s.$state.root.wordsMode,s.$state.root.customerWords,y]),t("div",{className:"home",children:t($,{justify:"center",align:"middle",children:a(l,{flex:"450px",className:`home-scale-box-${s.$state.root.uiScale}`,children:[t("div",{className:"hide-control",children:a(K,{tabIndex:-1,type:"link",onClick:()=>Q(e=>!e),children:[L?"\u663E\u793A":"\u9690\u85CF","\u62FC\u97F3"]})}),a("div",{className:"home-show-main",children:[x&&t("div",{className:"type-end"}),t(se,{spinning:i,delay:50,wrapperClassName:"loading-wrapper",children:t("div",{className:"home-show-main-window",ref:g,children:t($,{gutter:12,children:W.map((e,o)=>a(l,{className:`home-show-main-window-item ${e.isCorrect===!0?"correct":""} ${e.isCorrect===!1?"incorrect":""}`,children:[t("div",{className:`home-show-main-window--label ${u===o?"acting":""}`,children:e.label}),t("div",{className:`home-show-main-window--text ${L?"hide":""}`,children:e.text})]},o))})})})]}),a($,{justify:"space-between",align:"middle",gutter:0,children:[t(l,{flex:"285px",children:t(oe,{className:"home-input",ref:j,value:f,onChange:e=>{S(e.target.value)},onKeyUp:_})}),t(l,{flex:"90px",children:t(ce,{content:a("div",{children:[t(ie,{defaultValue:w.current,onChange:Y}),t("span",{children:"\u79D2"})]}),onVisibleChange:()=>s.$dispatch("setCountdownTime",String(w.current)),overlayClassName:"home-countdown-popover",placement:"bottom",title:"",trigger:"click",children:a("div",{className:"home-countdown",children:[t(he,{className:"home-countdown-main",value:z,format:"m:ss",onFinish:Z}),t("div",{className:`home-countdown-placeholder ${C.current?"time-run":""}`,children:G})]})})}),t(l,{flex:"50px",children:t(K,{className:"home-reload-btn",onClick:y,type:"primary",icon:t(le,{})})})]}),t("div",{className:"home-type-result-container",children:x&&a($,{className:"home-type-result",children:[t(l,{span:24,children:a("div",{className:"result-wpm",children:[d.current.wpm,"WPM"]})}),t(l,{span:12,children:t("div",{className:"result-title",children:"\u6B63\u786E"})}),t(l,{span:12,children:t("div",{className:"result-numbers correct",children:d.current.correct})}),t(l,{span:12,children:t("div",{className:"result-title",children:"\u9519\u8BEF"})}),t(l,{span:12,children:t("div",{className:"result-numbers wrong",children:d.current.wrong})}),t(l,{span:12,children:t("div",{className:"result-title",children:"\u6309\u952E\u603B\u6570"})}),t(l,{span:12,children:t("div",{className:"result-numbers",children:b.current})}),t(l,{span:24,children:t(U,{ghost:!0,className:"type-resule-collapse",children:t(me,{header:"\u5C55\u5F00\u6B64\u6B21\u8F93\u5165",children:d.current.inputWordArr.map((e,o)=>a(ue,{color:e.isCorrect?"success":"error",children:[t("div",{children:e.label}),t("div",{children:e.input})]},o))},"1")})})]})})]})})})};var Ce=de(fe);export{Ce as default};
