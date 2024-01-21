import{a as o,e as t,g as r,_ as a,l as s}from"./index-P6suT5LD.js";import{P as l}from"./page-3hrcq0Yp.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-4utuHjUh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-GsYXQx88.js"),__vite__mapDeps([]),import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-7qwOfug9.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./appDialogsManager-4utuHjUh.js","./avatar-VlT83oNZ.js","./button-08SAFY4v.js","./index-P6suT5LD.js","./index-b_Qt3CmC.css","./page-3hrcq0Yp.js","./wrapEmojiText-rnadWngQ.js","./scrollable-LQrI-uc2.js","./putPreloader-En8W3Uiz.js","./htmlToSpan-b4707hTg.js","./countryInputField-ExH_tjDh.js","./textToSvgURL-Z4O-nL1S.js","./codeInputField-ib5GQ6-t.js","./appDialogsManager-6QNcK96s.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}