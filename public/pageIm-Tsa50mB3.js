import{a as o,e as t,g as r,_ as a,l as s}from"./index-EQVHBBL0.js";import{P as l}from"./page-7016me0d.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-xz3LHoOQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-GsYXQx88.js"),__vite__mapDeps([]),import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-Tsa50mB3.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./appDialogsManager-xz3LHoOQ.js","./avatar-j09Zs95g.js","./button-j8L009OU.js","./index-EQVHBBL0.js","./index-vY0wPNU8.css","./page-7016me0d.js","./wrapEmojiText-_vBJTx38.js","./scrollable-t0JXXMy2.js","./putPreloader-hQLmC2EE.js","./htmlToSpan-fjw_6xG4.js","./countryInputField-1XxcN7Eo.js","./textToSvgURL-Z4O-nL1S.js","./codeInputField-F5F9ma-Y.js","./appDialogsManager-6QNcK96s.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}