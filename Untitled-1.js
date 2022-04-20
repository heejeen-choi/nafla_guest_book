
<!DOCTYPE html>

<html lang="en">
<head>
  <title>Dribbble - Discover the World’s Top Designers &amp; Creative Professionals</title>
  <meta name="description" content="Dribbble is where designers gain inspiration, feedback, community, and jobs and is your best resource to discover and connect with designers worldwide." />
  <meta charset="utf-8" />
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","errorBeacon":"bam-cell.nr-data.net","licenseKey":"7840d0c136","applicationID":"2909452","transactionName":"Jg1bREUOClsARUpHABcHUF5ECQlDFhgDXQ8RB0dDGAgIUwBP","queueTime":0,"applicationTime":18,"agent":""}</script>
<script type="text/javascript">(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam-cell.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={xpid:"VQEAWVVACgoAXVVXBQ==",licenseKey:"7840d0c136",applicationID:"2909452"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var i,o=t("ee"),a=t(28),s={};try{i=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,i.indexOf("dev")!==-1&&(s.dev=!0),i.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&o.on("internal-error",function(t){r(t.stack)}),s.dev&&o.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{p?p-=1:i(s||new UncaughtException(t,e,n),!0)}catch(f){try{o("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function i(t,e){var n=e?null:c.now();o("err",[t,n])}var o=t("handle"),a=t(29),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,l="nr@seenError";if(!c.disabled){var p=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(10),t(9),"addEventListener"in window&&t(6),c.xhrWrappable&&t(11),d=!0)}s.on("fn-start",function(t,e,n){d&&(p+=1)}),s.on("fn-err",function(t,e,n){d&&!n[l]&&(f(n,l,function(){return!0}),this.thrown=!0,i(n))}),s.on("fn-end",function(){d&&!this.thrown&&p>0&&(p-=1)}),s.on("internal-error",function(t){o("ierr",[t,c.now(),!0])})}},{}],3:[function(t,e,n){var r=t("loader");r.disabled||(r.features.ins=!0)},{}],4:[function(t,e,n){function r(){var t=new PerformanceObserver(function(t,e){var n=t.getEntries();s(v,[n])});try{t.observe({entryTypes:["resource"]})}catch(e){}}function i(t){if(s(v,[window.performance.getEntriesByType(w)]),window.performance["c"+l])try{window.performance[h](m,i,!1)}catch(t){}else try{window.performance[h]("webkit"+m,i,!1)}catch(t){}}function o(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var a=t("ee"),s=t("handle"),c=t(10),f=t(9),u=t(5),d=t(19),l="learResourceTimings",p="addEventListener",h="removeEventListener",m="resourcetimingbufferfull",v="bstResource",w="resource",g="-start",y="-end",x="fn"+g,b="fn"+y,E="bstTimer",R="pushState",S=t("loader");if(!S.disabled){S.features.stn=!0,t(8),"addEventListener"in window&&t(6);var O=NREUM.o.EV;a.on(x,function(t,e){var n=t[0];n instanceof O&&(this.bstStart=S.now())}),a.on(b,function(t,e){var n=t[0];n instanceof O&&s("bst",[n,e,this.bstStart,S.now()])}),c.on(x,function(t,e,n){this.bstStart=S.now(),this.bstType=n}),c.on(b,function(t,e){s(E,[e,this.bstStart,S.now(),this.bstType])}),f.on(x,function(){this.bstStart=S.now()}),f.on(b,function(t,e){s(E,[e,this.bstStart,S.now(),"requestAnimationFrame"])}),a.on(R+g,function(t){this.time=S.now(),this.startPath=location.pathname+location.hash}),a.on(R+y,function(t){s("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),u()?(s(v,[window.performance.getEntriesByType("resource")]),r()):p in window.performance&&(window.performance["c"+l]?window.performance[p](m,i,d(!1)):window.performance[p]("webkit"+m,i,d(!1))),document[p]("scroll",o,d(!1)),document[p]("keypress",o,d(!1)),document[p]("click",o,d(!1))}}},{}],5:[function(t,e,n){e.exports=function(){return"PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&i(e)}function i(t){s.inPlace(t,[u,d],"-",o)}function o(t,e){return t[1]}var a=t("ee").get("events"),s=t("wrap-function")(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(i(window),i(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=o(arguments),e={};i.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var s=r.apply(this,t);return i.emit(n+"start",[t,a],s),s.then(function(t){return i.emit(n+"end",[null,t],s),t},function(t){throw i.emit(n+"end",[t],s),t})})}var i=t("ee").get("fetch"),o=t(29),a=t(28);e.exports=i;var s=window,c="fetch-",f=c+"body-",u=["arrayBuffer","blob","json","text","formData"],d=s.Request,l=s.Response,p=s.fetch,h="prototype",m="nr@context";d&&l&&p&&(a(u,function(t,e){r(d[h],e,f),r(l[h],e,f)}),r(s,"fetch",c),i.on(c+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),i.emit(c+"done",[null,e],n)}else i.emit(c+"done",[t],n)}))},{}],8:[function(t,e,n){var r=t("ee").get("history"),i=t("wrap-function")(r);e.exports=r;var o=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;o&&o.pushState&&o.replaceState&&(a=o),i.inPlace(a,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){var r=t("ee").get("raf"),i=t("wrap-function")(r),o="equestAnimationFrame";e.exports=r,i.inPlace(window,["r"+o,"mozR"+o,"webkitR"+o,"msR"+o],"raf-"),r.on("raf-start",function(t){t[0]=i(t[0],"fn-")})},{}],10:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function i(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var o=t("ee").get("timer"),a=t("wrap-function")(o),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=o,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),o.on(c+u,r),o.on(s+u,i)},{}],11:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function i(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function o(t){x.push(t),m&&(E?E.then(a):w?w(a):(R=-R,S.data=R))}function a(){for(var t=0;t<x.length;t++)r([],x[t]);x.length&&(x=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(6);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),l=t(19),p=NREUM.o,h=p.XHR,m=p.MO,v=p.PR,w=p.SI,g="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],x=[];e.exports=u;var b=window.XMLHttpRequest=function(t){var e=new h(t);try{u.emit("new-xhr",[e],e),e.addEventListener(g,i,l(!1))}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(h,b),b.prototype=h.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),o(e)}),u.on("open-xhr-start",r),m){var E=v&&v.resolve();if(!w&&!v){var R=1,S=document.createTextNode(R);new m(a).observe(S,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===g||a()})},{}],12:[function(t,e,n){function r(t){if(!s(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,f=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=p.generateSpanId(),m=p.generateTraceId(),v=Date.now(),w={spanId:h,traceId:m,timestamp:v};return(t.sameOrigin||c(t)&&l())&&(w.traceContextParentHeader=i(h,m),w.traceContextStateHeader=o(h,v,n,r,f)),(t.sameOrigin&&!u()||!t.sameOrigin&&c(t)&&d())&&(w.newrelicHeader=a(h,m,v,n,r,f)),w}function i(t,e){return"00-"+e+"-"+t+"-01"}function o(t,e,n,r,i){var o=0,a="",s=1,c="",f="";return i+"@nr="+o+"-"+s+"-"+n+"-"+r+"-"+t+"-"+a+"-"+c+"-"+f+"-"+e}function a(t,e,n,r,i,o){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var s={v:[0,1],d:{ty:"Browser",ac:r,ap:i,id:t,tr:e,ti:n}};return o&&r!==o&&(s.d.tk=o),btoa(JSON.stringify(s))}function s(t){return f()&&c(t)}function c(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var i=h(n.allowed_origins[r]);if(t.hostname===i.hostname&&t.protocol===i.protocol&&t.port===i.port){e=!0;break}}return e}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function l(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var p=t(25),h=t(14);e.exports={generateTracePayload:r,shouldGenerateTrace:s}},{}],13:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<l;r++)t.removeEventListener(d[r],this.listener,!1);return e.protocol&&"data"===e.protocol?void g("Ajax/DataUrl/Excluded"):void(e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):o(this,t),n.cbTime=this.cbTime,s("xhr",[e,n,this.startTime,this.endTime,"xhr"],this)))}}function i(t,e){var n=c(e),r=t.params;r.hostname=n.hostname,r.port=n.port,r.protocol=n.protocol,r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=n,t.sameOrigin=n.sameOrigin}function o(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable&&!a.disabled){var s=t("handle"),c=t(14),f=t(12).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],l=d.length,p=t("id"),h=t(20),m=t(18),v=t(15),w=t(19),g=t(21).recordSupportability,y=NREUM.o.REQ,x=window.XMLHttpRequest;a.features.xhr=!0,t(11),t(7),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,e.params=this.params||{},e.metrics=this.metrics||{},t.addEventListener("load",function(n){o(e,t)},w(!1)),h&&(h>34||h<10)||t.addEventListener("progress",function(t){e.lastSize=t.loaded},w(!1))}),u.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],i=this;if(n&&r){var o=m(r);o&&(n.txSize=o)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||i.loadCaptureCalled||(i.params.aborted=!0),("load"!==t.type||i.called===i.totalCbs&&(i.onloadCalled||"function"!=typeof e.onload))&&i.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<l;s++)e.addEventListener(d[s],this.listener,w(!1))}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("xhr-resolved",function(){this.endTime=a.now()}),u.on("addEventListener-end",function(t,e){e instanceof x&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof x&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof x&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=c(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var i=f(this.parsedOrigin);if(i&&(i.newrelicHeader||i.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var o={};for(var a in r)o[a]=r[a];o.headers=new Headers(r.headers||{}),e(o.headers,i)&&(this.dt=i),t.length>1?t[1]=o:t.push(o)}else t[0]&&t[0].headers&&e(t[0].headers,i)&&(this.dt=i)}),u.on("fetch-start",function(t,e){this.params={},this.metrics={},this.startTime=a.now(),this.dt=e,t.length>=1&&(this.target=t[0]),t.length>=2&&(this.opts=t[1]);var n,r=this.opts||{},o=this.target;if("string"==typeof o?n=o:"object"==typeof o&&o instanceof y?n=o.url:window.URL&&"object"==typeof o&&o instanceof URL&&(n=o.href),i(this,n),"data"!==this.params.protocol){var s=(""+(o&&o instanceof y&&o.method||r.method||"GET")).toUpperCase();this.params.method=s,this.txSize=m(r.body)||0}}),u.on("fetch-done",function(t,e){if(this.endTime=a.now(),this.params||(this.params={}),"data"===this.params.protocol)return void g("Ajax/DataUrl/Excluded");this.params.status=e?e.status:0;var n;"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var r={txSize:this.txSize,rxSize:n,duration:a.now()-this.startTime};s("xhr",[this.params,r,this.startTime,this.endTime,"fetch"],this)})}},{}],14:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];if(0===(t||"").indexOf("data:"))return{protocol:"data"};var e=document.createElement("a"),n=window.location,i={};e.href=t,i.port=e.port;var o=e.href.split("://");!i.port&&o[1]&&(i.port=o[1].split("/")[0].split("@").pop().split(":")[1]),i.port&&"0"!==i.port||(i.port="https"===o[0]?"443":"80"),i.hostname=e.hostname||n.hostname,i.pathname=e.pathname,i.protocol=o[0],"/"!==i.pathname.charAt(0)&&(i.pathname="/"+i.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,s=e.hostname===document.domain&&e.port===n.port;return i.sameOrigin=a&&(!e.hostname||s),"/"===i.pathname&&(r[t]=i),i}},{}],15:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?i(t.response):"text"===n||""===n||void 0===n?i(t.responseText):void 0}var i=t(18);e.exports=r},{}],16:[function(t,e,n){function r(){}function i(t,e,n,r){return function(){return u.recordSupportability("API/"+e+"/called"),o(t+e,[f.now()].concat(s(arguments)),n?null:this,r),n?void 0:this}}var o=t("handle"),a=t(28),s=t(29),c=t("ee").get("tracer"),f=t("loader"),u=t(21),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var l=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",h=p+"ixn-";a(l,function(t,e){d[e]=i(p,e,!0,"api")}),d.addPageAction=i(p,"addPageAction",!0),d.setCurrentRouteName=i(p,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(h+"tracer",[f.now(),t,n],r),function(){if(c.emit((i?"":"no-")+"fn-start",[f.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(h,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),u.recordSupportability("API/noticeError/called"),o("err",[t,f.now(),!1,e])}},{}],17:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],18:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],19:[function(t,e,n){var r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}catch(o){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],20:[function(t,e,n){var r=0,i=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);i&&(r=+i[1]),e.exports=r},{}],21:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return o("storeMetric",n,null,"api"),n}function i(t,e){var n=[s,t,{name:t},e];return o("storeEventMetrics",n,null,"api"),n}var o=t("handle"),a="sm",s="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:s},recordSupportability:r,recordCustom:i}},{}],22:[function(t,e,n){function r(){return s.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,s=t(30);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],23:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],24:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?p("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&p("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(f&&f<r.startTime)return;var i=[r],o=a({});o&&i.push(o),p("lcp",i)}}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||p("cls",[t])})}function a(t){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e)return e.type&&(t["net-type"]=e.type),e.effectiveType&&(t["net-etype"]=e.effectiveType),e.rtt&&(t["net-rtt"]=e.rtt),e.downlink&&(t["net-dlink"]=e.downlink),t}function s(t){if(t instanceof w&&!y){var e=Math.round(t.timeStamp),n={type:t.type};a(n),e<=h.now()?n.fid=h.now()-e:e>h.offset&&e<=Date.now()?(e-=h.offset,n.fid=h.now()-e):e=h.now(),y=!0,p("timing",["fi",e,n])}}function c(t){"hidden"===t&&(f=h.now(),p("pageHide",[f]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,d,l,p=t("handle"),h=t("loader"),m=t(27),v=t(19),w=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){u=new PerformanceObserver(r);try{u.observe({entryTypes:["paint"]})}catch(g){}d=new PerformanceObserver(i);try{d.observe({entryTypes:["largest-contentful-paint"]})}catch(g){}l=new PerformanceObserver(o);try{l.observe({type:"layout-shift",buffered:!0})}catch(g){}}if("addEventListener"in document){var y=!1,x=["click","keydown","mousedown","pointerdown","touchstart"];x.forEach(function(t){document.addEventListener(t,s,v(!1))})}m(c)}},{}],25:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var i,o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<o.length;s++)i=o[s],"x"===i?a+=t().toString(16):"y"===i?(i=3&t()|8,a+=i.toString(16)):a+=i;return a}function i(){return a(16)}function o(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,i=window.crypto||window.msCrypto;i&&i.getRandomValues&&Uint8Array&&(n=i.getRandomValues(new Uint8Array(31)));for(var o=[],a=0;a<t;a++)o.push(e().toString(16));return o.join("")}e.exports={generateUuid:r,generateSpanId:i,generateTraceId:o}},{}],26:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],27:[function(t,e,n){function r(t){function e(){t(s&&document[s]?document[s]:document[o]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,i(!1))}var i=t(19);e.exports=r;var o,a,s;"undefined"!=typeof document.hidden?(o="hidden",a="visibilitychange",s="visibilityState"):"undefined"!=typeof document.msHidden?(o="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o="webkitHidden",a="webkitvisibilitychange",s="webkitVisibilityState")},{}],28:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],29:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],30:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?f(t,c,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!p.aborted||o){t&&a&&t(n,r,i);for(var s=e(i),c=m(n),f=c.length,u=0;u<f;u++)c[u].apply(s,r);var l=d[y[n]];return l&&l.push([x,n,r,s]),s}}function o(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return l[t]=l[t]||i(n)}function w(t,e){p.aborted||u(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:o,addEventListener:o,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:s,aborted:!1};return x}function o(t){return f(t,c,a)}function a(){return new r}function s(){(d.api||d.feature)&&(p.aborted=!0,d=p.backlog={})}var c="nr@context",f=t("gos"),u=t(28),d={},l={},p=e.exports=i();e.exports.getOrSetContext=o,p.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!T++){var t=O.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();c(R,function(e,n){t[e]||(t[e]=n)});var n=a();s("mark",["onload",n+O.offset],null,"api"),s("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=h+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===v.readyState&&o()}function o(){s("mark",["domContent",a()+O.offset],null,"api")}var a=t(22),s=t("handle"),c=t(28),f=t("ee"),u=t(26),d=t(23),l=t(17),p=t(19),h=l.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,w="addEventListener",g="attachEvent",y=m.XMLHttpRequest,x=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var E=""+location,R={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1215.min.js"},S=y&&x&&x[w]&&!/CriOS/.test(navigator.userAgent),O=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:S,userAgent:u,disabled:b};if(!b){t(16),t(24),v[w]?(v[w]("DOMContentLoaded",o,p(!1)),m[w]("load",r,p(!1))):(v[g]("onreadystatechange",i),m[g]("onload",r)),s("mark",["firstbyte",a.getLastTimestamp()],null,"api");var T=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,f){function nrWrapper(){var o,a,u,l;try{a=this,o=d(arguments),u="function"==typeof r?r(o,a):r||{}}catch(p){i([p,"",[o,a,c],u],t)}s(n+"start",[o,a,c],u,f);try{return l=e.apply(a,o)}catch(h){throw s(n+"err",[o,a,h],u,f),h}finally{s(n+"end",[o,a,l],u,f)}}return a(e)?e:(n||(n=""),nrWrapper[l]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var s,c,f,u="-"===r.charAt(0);for(f=0;f<e.length;f++)c=e[f],s=t[c],a(s)||(t[c]=n(s,u?c+r:r,i,c,o))}function s(n,r,o,a){if(!h||e){var s=h;h=!0;try{t.emit(n,r,o,e,a)}catch(c){i([c,n,r,o],t)}h=s}}return t||(t=u),n.inPlace=r,n.flag=l,n}function i(t,e){e||(e=u);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)p.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[l])}function s(t,e){var n=e(t);return n[l]=t,o(t,n,u),n}function c(t,e,n){var r=t[e];t[e]=s(r,n)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var u=t("ee"),d=t(29),l="nr@original",p=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=s,e.exports.wrapInPlace=c,e.exports.argsToArray=f},{}]},{},["loader",2,13,4,3]);</script>
  <meta name="theme-color" content="#FFFFFF">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
    <meta name="referrer" content="origin-when-cross-origin">
  <meta name="facebook-domain-verification" content="14yui0t6bj9n8uz4d48a2snpt3cvnz" />

  <link rel="preload" href="https://cdn.dribbble.com/assets/neue-haas-grotesk/NeueHaasGrotTextRound-55Roman-Web-9e7322596eec47d8e79e2453d75a77fb58045ae944ec818e4fc1ba05559121a4.woff2" as="font" crossorigin="anonymous">
  <link rel="preload" href="https://cdn.dribbble.com/assets/neue-haas-grotesk/NeueHaasGrotTextRound-65Medium-Web-741c8c70e5c90808119c701483ca7362baff5ae482c823718406bbb1e31d9143.woff2" as="font" crossorigin="anonymous">
  <link rel="preload" href="https://cdn.dribbble.com/assets/neue-haas-grotesk/NeueHaasGrotTextRound-75Bold-Web-f2ff2f34217e3fdab82c30ef689f5be3fb86a8e4218a1906a9399d0354a95d45.woff2" as="font" crossorigin="anonymous">

  <!--[if gte IE 7]><!-->
        <link rel="stylesheet" href="https://cdn.dribbble.com/assets/mini-master-async-8912b62d0bdfaf3bbbb3e3b8f675e0cd0f556aedd41e8f559e228f5ff637d7f1.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://cdn.dribbble.com/assets/mini-master-async-8912b62d0bdfaf3bbbb3e3b8f675e0cd0f556aedd41e8f559e228f5ff637d7f1.css"></noscript>



  <link rel="stylesheet" media="screen" href="https://cdn.dribbble.com/assets/infinite-shots-pages/index-20e041c1d2aee223eb814fb3845787d3e6564bbde0be04e743fa0962f76311a7.css" />

  <!-- <![endif]-->
  <link href="https://cdn.dribbble.com/assets/dribbble-vector-ball-f320a6ba48a4ccf416ef6e396e204c899874565b694593834b6c23f978394498.svg" rel="mask-icon" color="#ea4c89" />
<link href="https://cdn.dribbble.com/assets/apple-touch-icon-precomposed-1c6d9b0a173f5b2d5c392ea101bb206ee9a2a39bef19eb21513b857eeb3624d2.png" rel="apple-touch-icon-precomposed" />
<link href="https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" rel="icon" />
<link href="https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png" sizes="192x192" rel="icon" />

  
  <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="qvMf4QydW5m/etRuizQKwIaY8YSsGjy+779yX3g/LN8qz0pCZzw6Wg0GhDpoXWcbBp/ss1aqS2AbKuSEG8fCWg==" />
    <link
    rel="preload"
    as="image"
    imagesrcset="https://cdn.dribbble.com/assets/art-banners/romainbriaux-320w-ec9254ca29977e8be37b1ecb152090a962faa94bd923dc6cdff16ada6f428a27.webp 320w, image_path('art-banners/romainbriaux-400w.webp') %> 400w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-e0859557ff1168e088a1d80e2de552aec85ed8c1343bb61656f87512127b3c4a.webp 510w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-640w-d7dfe8be8b5c732e3a41b5f6e13542a88783b03c63b684a892d4756e565bcab7.webp 640w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-800w-f8927e677f2ab85c8d454f14cc277f300d3c72e89889e38c1ae1d18e8e3fd667.webp 800w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-1100w-caa2685efe993759bd7534384871c89939a864b91d14521e2b8b710fe638f18d.webp 1100w"
    imagesizes="(max-width: 500px) 320px, (max-width: 1200px) 400px, 510px"
  >


  <meta property="fb:app_id" content="811749452338490">

  <script>
    if (location.hash.match(/^#\./) && window.history) {
      window.history.replaceState({}, window.title, location.origin + location.pathname + location.search)
    }
  </script>
  <noscript>
    <style>ol.dribbbles { display: block !important }</style>
  </noscript>
  <meta name="itly-controller" content="screenshots/filters" />
<meta name="itly-action" content="index" />


    <script src="https://accounts.google.com/gsi/client" async defer></script>
</head>

<body id="shots" class="logged-out not-pro not-player not-self not-team not-on-team  ">


<div class="js-site-nav site-nav lazyloading-hidden">
  <div class="site-nav-container">
    
<nav class="site-nav-desktop-only align-center" aria-label="primary">
  <div data-site-nav-category="Top Nav">
    <a href="/" data-site-nav-element="Logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="30" viewBox="0 0 76 19" fill="none" class="site-nav-desktop-logo fill-current">
<title>Dribbble: the community for graphic design</title>
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.8822 14.657C72.7063 20.0415 67.6766 18.4791 66.166 17.2558C65.5231 17.692 64.3958 18.6481 62.8926 18.5377C59.6913 18.3027 58.5449 13.7279 58.5449 13.7279C58.5679 13.7462 57.5913 14.0649 57.0635 14.0592C57.0567 15.4008 55.897 18.6056 52.7672 18.5646C49.2551 18.5188 48.5411 13.2864 48.5411 13.2864C48.5411 13.2864 48.1916 13.7717 46.8627 14.2551C46.9296 13.2244 46.8807 18.4077 42.6713 18.4839C39.3435 18.5442 38.4452 13.2057 38.4452 13.2057C38.4452 13.2057 37.8679 13.8054 36.7491 14.0134C36.8202 12.9659 36.7046 18.5015 32.4947 18.4839C29.6497 18.4721 28.6775 15.1954 28.7531 14.7406C28.8496 14.161 27.7916 18.5654 25.0281 18.4968C23.8877 18.4633 23.0375 17.6376 22.504 16.5368C21.7898 17.354 20.7529 18.4968 19.5897 18.4968C17.5017 18.4968 16.5812 16.7504 16.7371 11.7624C16.7504 11.1708 16.7077 10.9381 16.1196 10.8496C15.7666 10.7907 15.4051 10.6792 15.0226 10.6204C14.9 11.0295 13.8602 18.3637 10.2847 18.5029C9.08519 18.5496 8.4293 17.5105 7.89066 16.7393C7.06497 17.8316 5.97501 18.5377 4.42227 18.5377C1.79205 18.5377 0 16.4114 0 13.7885C0 11.1655 1.79205 9.03942 4.42227 9.03942C4.88732 9.03942 5.01787 9.10608 5.44272 9.23004C4.569 1.27504 6.63238 0.0317866 8.43739 0.0317866C10.1703 0.0317866 13.1308 4.05384 8.96512 14.2559C9.88998 17.2989 11.8838 17.1268 12.8419 10.8626C13.0369 9.58927 12.5155 7.87099 13.3265 7.63117C14.809 7.19289 14.9663 8.50787 15.6614 8.72697C16.3964 8.95853 16.8254 8.93592 17.531 9.08327C18.7367 9.31873 19.2072 9.96643 19.0603 11.409C18.8839 13.2343 18.5753 15.891 19.5162 16.2148C20.1947 16.45 21.4335 15.0429 21.6509 14.273C21.8682 13.5031 21.9136 13.2396 21.9329 12.6749C21.9623 11.468 21.9992 10.5833 22.205 9.67055C22.2931 9.31736 22.3935 9.08347 22.7931 9.06748C23.1219 9.0591 23.7232 8.96009 23.9879 9.16611C24.3407 9.43119 24.2966 9.70017 24.2561 10.4081C23.8458 20.5015 27.0038 15.4628 27.9454 11.4283C27.6101 6.86623 27.8403 0.115326 30.6991 0.00210112C32.1859 -0.0567822 32.8432 1.13431 32.9155 2.02335C33.12 4.53433 31.9745 8.69372 30.468 11.4909C29.607 17.1984 34.2325 18.3269 34.9722 13.7712C33.762 13.1958 32.4541 10.8668 33.5184 9.73181C34.1156 9.09483 36.6015 10.0099 36.6422 12.0057C37.8616 11.6796 38.0244 10.9911 38.0413 11.1052C37.7061 6.54312 38.017 0.115385 40.876 0.00215941C42.3626 -0.0567239 43.0198 1.13437 43.0921 2.02341C43.2966 4.53438 42.1511 8.69378 40.6448 11.491C39.7837 17.1984 44.4093 18.327 45.1488 13.7713C44.2528 13.5984 42.3614 11.1212 43.4527 9.73187C44.0359 8.98944 46.5127 10.5334 46.79 12.0718C47.9614 11.7403 48.1205 11.0737 48.1373 11.1859C47.802 6.62397 48.1129 0.196235 50.9719 0.0830097C52.4585 0.0241264 53.1157 1.21522 53.188 2.10426C53.3925 4.61523 52.247 8.77471 50.7405 11.5719C49.8796 17.2794 54.5051 18.4077 55.2448 13.852C54.0135 13.647 52.2636 11.0314 53.672 9.69333C54.2347 9.15869 56.3848 10.5465 56.8881 12.1298C57.5874 12.1029 58.0227 11.8617 58.116 11.8374C56.9996 6.4818 57.8307 0.0558781 60.9062 0.00223793C62.5685 -0.0267262 64.1936 0.900905 63.4803 5.99604C62.7994 10.8574 60.3519 12.8975 60.3576 12.9287C60.5 13.5111 61.7559 18.3851 64.9185 15.8134C64.7548 15.4427 64.5909 15.064 64.4993 14.6052C63.9751 11.9327 65.0047 8.91409 67.8032 8.42622C69.4066 8.14671 70.917 8.92734 71.1558 10.6872C71.5487 13.5669 68.9484 15.6524 67.9596 16.1048C67.5167 15.8532 71.9742 18.712 74.6196 12.9829C74.773 12.6558 74.9579 12.6835 75.1975 12.8521C75.3667 12.9712 76.3305 13.8842 75.8822 14.657ZM6.33552 13.0809C6.20092 12.6785 5.92469 11.7918 5.82701 11.4076C5.28905 10.9398 4.90507 10.8638 4.21455 10.8638C2.68 10.8638 1.77679 12.2826 1.77679 13.8125C1.77679 15.3423 2.76077 16.7613 4.29533 16.7613C5.6252 16.7613 6.63735 15.8571 6.94615 14.5771C6.73001 14.0781 6.5156 13.6195 6.33552 13.0809ZM8.39979 2.13753C7.32153 2.13753 6.95576 4.70973 7.02674 6.90406C7.08953 8.84411 7.63164 10.5521 7.91286 11.3174C7.98426 11.4133 7.971 11.3509 8.03474 11.4526C9.90694 7.35053 9.13041 2.13753 8.39979 2.13753ZM30.8531 2.21833C29.4595 2.0585 29.4685 7.86389 29.6415 9.16611C30.3653 8.00823 31.6226 2.53009 30.8531 2.21833ZM41.0297 2.21833C39.6361 2.0585 39.6451 7.86389 39.8182 9.16611C40.5419 8.00823 41.7993 2.53009 41.0297 2.21833ZM51.1257 2.2991C49.732 2.13927 49.741 7.94469 49.9141 9.247C50.6378 8.08902 51.8952 2.61084 51.1257 2.2991ZM61.06 1.87849C58.8887 2.31451 59.3943 9.55399 59.7241 10.8237C62.2817 7.31085 62.3344 1.74654 61.06 1.87849ZM69.1975 10.9254C69.0871 10.4638 68.5351 10.2171 68.1541 10.2779C67.0639 10.4268 66.0065 11.7846 66.4158 13.8518C66.5069 14.3122 66.7349 14.736 66.7312 14.7219C69.1711 13.085 69.3785 11.7951 69.1975 10.9254ZM23.2205 7.46958C22.9089 7.46964 22.6043 7.37729 22.3452 7.20422C22.0861 7.03114 21.8841 6.78512 21.7648 6.49725C21.6455 6.20939 21.6143 5.89261 21.6751 5.587C21.7358 5.28138 21.8859 5.00065 22.1062 4.7803C22.3265 4.55995 22.6072 4.40989 22.9128 4.34909C23.2184 4.28829 23.5352 4.31948 23.8231 4.43873C24.111 4.55797 24.357 4.75991 24.5301 5.019C24.7032 5.27809 24.7956 5.5827 24.7956 5.89429C24.7956 6.10115 24.7549 6.30599 24.6757 6.4971C24.5966 6.68822 24.4806 6.86187 24.3343 7.00815C24.188 7.15443 24.0144 7.27047 23.8233 7.34964C23.6322 7.42882 23.4274 7.46957 23.2205 7.46958Z" fill="#0D0C22"></path>
</svg>

      <span class="accessibility-text">Back to home page</span>
    </a>
  </div>
  <ul class="site-nav-desktop-nav">
    <li class="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
      <a data-site-nav-element="Inspiration" href="/shots">Inspiration</a>
      <div class="site-nav-hover-menu">
        <ul class="site-nav-dropdown-list site-nav-dropdown-white-bg">
          <div data-site-nav-category="Inspiration">
            <li class="site-nav-dropdown-item purple">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Explore Design Work" href="/shots/popular">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<path d="M2.5 0.75H6.5C7.4665 0.75 8.25 1.5335 8.25 2.5V6.5C8.25 7.4665 7.4665 8.25 6.5 8.25H2.5C1.5335 8.25 0.75 7.4665 0.75 6.5V2.5C0.75 1.5335 1.5335 0.75 2.5 0.75ZM13.5 0.75H17.5C18.4665 0.75 19.25 1.5335 19.25 2.5V6.5C19.25 7.4665 18.4665 8.25 17.5 8.25H13.5C12.5335 8.25 11.75 7.4665 11.75 6.5V2.5C11.75 1.5335 12.5335 0.75 13.5 0.75ZM13.5 11.75H17.5C18.4665 11.75 19.25 12.5335 19.25 13.5V17.5C19.25 18.4665 18.4665 19.25 17.5 19.25H13.5C12.5335 19.25 11.75 18.4665 11.75 17.5V13.5C11.75 12.5335 12.5335 11.75 13.5 11.75ZM2.5 11.75H6.5C7.4665 11.75 8.25 12.5335 8.25 13.5V17.5C8.25 18.4665 7.4665 19.25 6.5 19.25H2.5C1.5335 19.25 0.75 18.4665 0.75 17.5V13.5C0.75 12.5335 1.5335 11.75 2.5 11.75Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Explore Design Work
                  </div>
                  <p class="site-nav-dropdown-item-desc">Trending designs to inspire you</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item red">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="New &amp; Noteworthy" href="/shots/recent">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="currentColor" class="site-nav-dropdown-icon">
<path d="M13.4842 15.5185C11.8769 16.8972 10.4552 17.9485 10 18.279C9.54459 17.9483 8.12304 16.897 6.51599 15.5185C4.62061 13.8926 2.5424 11.8742 1.4452 10.0758L1.44176 10.07L1.43651 10.0611C0.987839 9.31334 0.75 8.45358 0.75 7.57322C0.75 4.91104 2.90591 2.75 5.54681 2.75C7.07683 2.75 8.49854 3.48017 9.39693 4.69529L10 5.51098L10.6031 4.69529C11.5014 3.48018 12.9234 2.75 14.4532 2.75C17.0941 2.75 19.25 4.91104 19.25 7.57322C19.25 8.45358 19.0122 9.31334 18.5635 10.0611L18.5581 10.0701L18.556 10.0738C17.4592 11.8727 15.3803 13.892 13.4842 15.5185Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    New & Noteworthy
                  </div>
                  <p class="site-nav-dropdown-item-desc">Up-and-coming designers</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item green">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Playoffs" href="/shots?list=playoffs">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<rect x="0.75" y="4.75" width="14.5" height="14.5" rx="3.25" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></rect>
<path d="M16 1.5H8C7.40168 1.5 6.85156 1.70993 6.42022 2.062H4.5C5.18236 0.832288 6.49399 0 8 0H16C18.2091 0 20 1.79086 20 4V12C20 13.4806 19.1956 14.7733 18 15.4649V13.5002C18.314 13.0824 18.5 12.5629 18.5 12V4C18.5 2.61929 17.3807 1.5 16 1.5Z" fill="currentColor"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Playoffs
                  </div>
                  <p class="site-nav-dropdown-item-desc">Work designers are riffing on</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item yellow">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Blog" href="/stories">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></rect>
<path d="M4.16667 5.08331C4.16667 4.6691 4.50246 4.33331 4.91667 4.33331H14.25C14.6642 4.33331 15 4.6691 15 5.08331C15 5.49753 14.6642 5.83331 14.25 5.83331L4.91667 5.83331C4.50246 5.83331 4.16667 5.49753 4.16667 5.08331Z" fill="currentColor"></path>
<path d="M4.16667 9.25C4.16667 8.83579 4.50246 8.5 4.91667 8.5L12.5833 8.5C12.9976 8.5 13.3333 8.83579 13.3333 9.25C13.3333 9.66422 12.9976 10 12.5833 10L4.91667 10C4.50246 10 4.16667 9.66421 4.16667 9.25Z" fill="currentColor"></path>
<path d="M4.91667 12.6666C4.50246 12.6666 4.16667 13.0024 4.16667 13.4166C4.16667 13.8308 4.50246 14.1666 4.91667 14.1666H9.25001C9.66422 14.1666 10 13.8308 10 13.4166C10 13.0024 9.66422 12.6666 9.25001 12.6666H4.91667Z" fill="currentColor"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Blog
                  </div>
                  <p class="site-nav-dropdown-item-desc">Interviews, tutorials, and more</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
              <li class="site-nav-dropdown-item purple">
                <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Weekly Warm-up" href="/shots/17433584-Design-a-Valentine-without-using-red-or-pink">
                  <div class="site-nav-dropdown-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" class="site-nav-dropdown-icon">
<rect x="0.75" y="2.58331" width="18.5" height="16.8333" rx="3.25" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></rect>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V5C5.75 5.41421 5.41421 5.75 5 5.75C4.58579 5.75 4.25 5.41421 4.25 5V1C4.25 0.585786 4.58579 0.25 5 0.25ZM15 0.25C15.4142 0.25 15.75 0.585786 15.75 1V5C15.75 5.41421 15.4142 5.75 15 5.75C14.5858 5.75 14.25 5.41421 14.25 5V1C14.25 0.585786 14.5858 0.25 15 0.25ZM12.8333 12.5H13.8333C14.1095 12.5 14.3333 12.7239 14.3333 13V14C14.3333 14.2761 14.1095 14.5 13.8333 14.5H12.8333C12.5572 14.5 12.3333 14.2761 12.3333 14V13C12.3333 12.7239 12.5572 12.5 12.8333 12.5ZM10.8333 13C10.8333 11.8954 11.7288 11 12.8333 11H13.8333C14.9379 11 15.8333 11.8954 15.8333 13V14C15.8333 15.1046 14.9379 16 13.8333 16H12.8333C11.7288 16 10.8333 15.1046 10.8333 14V13Z" fill="currentColor"></path>
</svg>

                  </div>
                  <div class="site-nav-dropdown-item-text">
                    <div class="site-nav-dropdown-item-title">
                      Weekly Warm-up
                    </div>
                    <p class="site-nav-dropdown-item-desc">Prompt to flex your design skills</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>              </li>
          </div>
        </ul>
        <ul class="site-nav-dropdown-list site-nav-dropdown-grey-bg" data-site-nav-category="Inspiration">
          <p class="site-nav-dropdown-item site-nav-dropdown-category-padding site-nav-dropdown-item-title">Browse Categories</p>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Animation" href="/shots/popular/animation">Animation</a>
            </li>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Branding" href="/shots/popular/branding">Branding</a>
            </li>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Illustration" href="/shots/popular/illustration">Illustration</a>
            </li>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Mobile" href="/shots/popular/mobile">Mobile</a>
            </li>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Print" href="/shots/popular/print">Print</a>
            </li>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Product Design" href="/shots/popular/product-design">Product Design</a>
            </li>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Typography" href="/shots/popular/typography">Typography</a>
            </li>
            <li>
              <a class="site-nav-dropdown-category-padding" data-site-nav-element="Web Design" href="/shots/popular/web-design">Web Design</a>
            </li>
        </ul>
      </div>
    </li>

    <li class="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
      <a data-site-nav-element="Find Work" href="/jobs">Find Work</a>
      <div class="site-nav-hover-menu">
        <ul class="site-nav-dropdown-list">
          <div data-site-nav-category="Find Work">
            <li class="site-nav-dropdown-item purple">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Job Board" href="/jobs">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<path d="M0.75 2.5C0.75 1.5335 1.5335 0.75 2.5 0.75H8.5C9.4665 0.75 10.25 1.5335 10.25 2.5V8.5C10.25 9.4665 9.4665 10.25 8.5 10.25H2.5C1.5335 10.25 0.75 9.4665 0.75 8.5V2.5ZM13.75 2.5C13.75 1.5335 14.5335 0.75 15.5 0.75H17.5C18.4665 0.75 19.25 1.5335 19.25 2.5V8.5C19.25 9.4665 18.4665 10.25 17.5 10.25H15.5C14.5335 10.25 13.75 9.4665 13.75 8.5V2.5ZM9.75 15.5C9.75 14.5335 10.5335 13.75 11.5 13.75H17.5C18.4665 13.75 19.25 14.5335 19.25 15.5V17.5C19.25 18.4665 18.4665 19.25 17.5 19.25H11.5C10.5335 19.25 9.75 18.4665 9.75 17.5V15.5ZM0.75 15.5C0.75 14.5335 1.5335 13.75 2.5 13.75H4.5C5.4665 13.75 6.25 14.5335 6.25 15.5V17.5C6.25 18.4665 5.4665 19.25 4.5 19.25H2.5C1.5335 19.25 0.75 18.4665 0.75 17.5V15.5Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Job Board
                  </div>
                  <p class="site-nav-dropdown-item-desc">Find your dream design job</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item red">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Freelance Projects" href="/freelance-jobs">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<path d="M1.25 8.5C1.25 7.5335 2.0335 6.75 3 6.75H14C14.9665 6.75 15.75 7.5335 15.75 8.5V14C15.75 16.8995 13.3995 19.25 10.5 19.25H6.5C3.60051 19.25 1.25 16.8995 1.25 14V8.5Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
<path d="M6.25 0.833313C6.25 0.419099 5.91421 0.083313 5.5 0.083313C5.08579 0.083313 4.75 0.419099 4.75 0.833313V3.33331C4.75 3.74753 5.08579 4.08331 5.5 4.08331C5.91421 4.08331 6.25 3.74753 6.25 3.33331V0.833313Z" fill="currentColor"></path>
<path d="M9.58331 0.833313C9.58331 0.419099 9.24753 0.083313 8.83331 0.083313C8.4191 0.083313 8.08331 0.419099 8.08331 0.833313V3.33331C8.08331 3.74753 8.4191 4.08331 8.83331 4.08331C9.24753 4.08331 9.58331 3.74753 9.58331 3.33331V0.833313Z" fill="currentColor"></path>
<path d="M12.1667 0.083313C12.5809 0.083313 12.9167 0.419099 12.9167 0.833313V3.33331C12.9167 3.74753 12.5809 4.08331 12.1667 4.08331C11.7525 4.08331 11.4167 3.74753 11.4167 3.33331V0.833313C11.4167 0.419099 11.7525 0.083313 12.1667 0.083313Z" fill="currentColor"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16.1693 16 16.3362 15.9895 16.5 15.9691C18.4732 15.723 20 14.0398 20 12C20 9.96019 18.4732 8.277 16.5 8.03095C16.3362 8.01052 16.1693 8 16 8H15V16H16ZM18.5 12C18.5 10.7905 17.6411 9.78164 16.5 9.55001V14.45C17.6411 14.2184 18.5 13.2095 18.5 12Z" fill="currentColor"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Freelance Projects
                    <div class="pro-flag margin-l-8">Pro+</div>
                  </div>
                  <p class="site-nav-dropdown-item-desc">An exclusive list for contract work</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            </li>
            <li class="padding-h-32">
              <hr />
            </li>
            <li class="site-nav-dropdown-item green">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Design Leads" href="/projects">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<rect x="0.75" y="1.75" width="18.5" height="16.5" rx="3.25" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></rect>
<path d="M19 4L10 11L1 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Want freelance design projects?
                  </div>
                  <p class="site-nav-dropdown-item-desc">Get new leads in your inbox every day</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item yellow">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Pitch" href="/pro/pitch">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<rect x="4.25" y="0.75" width="11.5" height="18.5" rx="2.25" stroke="currentColor" stroke-width="1.5"></rect>
<path d="M4.25 17C4.25 14.6528 6.15279 12.75 8.5 12.75H11.5C13.8472 12.75 15.75 14.6528 15.75 17C15.75 18.2426 14.7426 19.25 13.5 19.25H6.5C5.25736 19.25 4.25 18.2426 4.25 17Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
<circle cx="10" cy="7" r="3.25" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></circle>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Personalize your profile with video
                  </div>
                  <p class="site-nav-dropdown-item-desc">Introduce yourself to new clients with Pitch</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
          </div>
        </ul>
      </div>
    </li>

    <li class="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
      <a data-site-nav-element="Learn Design" href="/learn">
        <span>Learn Design</span>
</a>      <div class="site-nav-hover-menu">
        <ul class="site-nav-dropdown-list">
          <div data-site-nav-category="Learn Design">
          <li class="site-nav-dropdown-item purple">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Product Design Course" href="/courses/product-design?utm_campaign=february-25-off">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none" class="site-nav-dropdown-icon">
<path d="M4.375 20.375C3.71196 20.375 3.07607 20.1116 2.60723 19.6427C2.13839 19.1739 1.875 18.538 1.875 17.875V6.44165C1.87606 6.05378 1.96736 5.67148 2.14167 5.32498L3.80833 1.99165C3.86038 1.88819 3.94014 1.80123 4.03873 1.74046C4.13732 1.6797 4.25086 1.64752 4.36667 1.64752C4.48248 1.64752 4.59601 1.6797 4.6946 1.74046C4.79319 1.80123 4.87295 1.88819 4.925 1.99165L6.59167 5.32498C6.76598 5.67148 6.85727 6.05378 6.85833 6.44165V17.875C6.85835 18.5351 6.59724 19.1685 6.132 19.6369C5.66676 20.1052 5.03515 20.3706 4.375 20.375Z" fill="none" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
<path d="M1.875 6.41669H6.875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M1.875 16.4167H6.875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M16.875 1.625H11.875C11.1846 1.625 10.625 2.18464 10.625 2.875V19.125C10.625 19.8154 11.1846 20.375 11.875 20.375H16.875C17.5654 20.375 18.125 19.8154 18.125 19.125V2.875C18.125 2.18464 17.5654 1.625 16.875 1.625Z" fill="none" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
<path d="M10.625 5.375H13.5417" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M10.625 9.125H13.5417" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M10.625 12.875H13.5417" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M10.625 16.625H13.5417" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Certified Product Design Course
                  </div>
                  <p class="site-nav-dropdown-item-desc">Learn product design in just 12 weeks...</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item yellow">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Live Workshops" href="/learn">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<path d="M15 7.50915L12.5 8.34249V7.50915C12.5 7.17763 12.3683 6.85969 12.1339 6.62527C11.8995 6.39085 11.5815 6.25916 11.25 6.25916H6.25C5.91848 6.25916 5.60054 6.39085 5.36612 6.62527C5.1317 6.85969 5 7.17763 5 7.50915V12.5092C5 12.8407 5.1317 13.1586 5.36612 13.393C5.60054 13.6275 5.91848 13.7592 6.25 13.7592H11.25C11.5815 13.7592 11.8995 13.6275 12.1339 13.393C12.3683 13.1586 12.5 12.8407 12.5 12.5092V11.6758L15 12.5092V7.50915Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M5 2.00916H15C16.6569 2.00916 18 3.3523 18 5.00915V15.0092C18 16.666 16.6569 18.0092 15 18.0092H5C3.34315 18.0092 2 16.666 2 15.0092V5.00915C2 3.3523 3.34315 2.00916 5 2.00916Z" fill="none" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Live Workshops
                  </div>
                  <p class="site-nav-dropdown-item-desc">Level up your skills with our interactive workshops…</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
          </div>
        </ul>
      </div>
    </li>

      <li class="site-nav-desktop-item" data-site-nav-category="Top Nav">
        <a data-site-nav-element="Go Pro" href="/pro">Go Pro</a>
      </li>

    <li class="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
      <a data-site-nav-element="Marketplace" href="/marketplace">Marketplace</a>
      <div class="site-nav-hover-menu">
        <ul class="site-nav-dropdown-list">
          <div data-site-nav-category="Marketplace">
          <li class="site-nav-dropdown-item purple">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Discover" href="/marketplace">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="currentColor" class="site-nav-dropdown-icon">
    <path d="M14.6161 1.44455C15.1043 0.956391 15.8957 0.956391 16.3839 1.44455L19.5659 4.62653C20.054 5.11468 20.054 5.90614 19.5659 6.39429L16.3839 9.57627C15.8957 10.0644 15.1043 10.0644 14.6161 9.57627L11.4341 6.39429C10.946 5.90614 10.946 5.11468 11.4341 4.62653L14.6161 1.44455L14.0963 0.924774L14.6161 1.44455ZM0.75 3C0.75 2.30965 1.30964 1.75 2 1.75H7C7.69036 1.75 8.25 2.30965 8.25 3V8C8.25 8.69036 7.69036 9.25 7 9.25H2C1.30964 9.25 0.75 8.69036 0.75 8V3ZM0.75 14C0.75 13.3096 1.30964 12.75 2 12.75H7C7.69036 12.75 8.25 13.3096 8.25 14V19C8.25 19.6904 7.69036 20.25 7 20.25H2C1.30964 20.25 0.75 19.6904 0.75 19V14ZM11.75 14C11.75 13.3096 12.3096 12.75 13 12.75H18C18.6904 12.75 19.25 13.3096 19.25 14V19C19.25 19.6904 18.6904 20.25 18 20.25H13C12.3096 20.25 11.75 19.6904 11.75 19V14Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Discover
                  </div>
                  <p class="site-nav-dropdown-item-desc">A marketplace of digital assets…</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>

            
              <li class="site-nav-dropdown-item red">
                <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Graphics" href="/marketplace/graphics">

                  <div class="site-nav-dropdown-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none" class="site-nav-dropdown-icon">
<path d="M11.25 6C11.25 8.8995 8.8995 11.25 6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6ZM14.5762 12.2955L17.5713 17.3641C18.0636 18.1974 17.463 19.25 16.4951 19.25H10.5049C9.53702 19.25 8.93635 18.1974 9.42874 17.3641L12.4238 12.2954C12.9077 11.4767 14.0923 11.4767 14.5762 12.2955Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
</svg>

                  </div>

                  <div class="site-nav-dropdown-item-text">
                    <div class="site-nav-dropdown-item-title">
                      Graphics
                    </div>

                    <p class="site-nav-dropdown-item-desc">Icons, Illustrations, Patterns, Textures…</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>              </li>
              <li class="site-nav-dropdown-item green">
                <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Fonts" href="/marketplace/fonts">

                  <div class="site-nav-dropdown-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" class="site-nav-dropdown-icon">
<path d="M0.760205 8.3167C0.692108 8.72528 0.968123 9.1117 1.3767 9.1798C1.78528 9.24789 2.1717 8.97188 2.2398 8.5633L0.760205 8.3167ZM6.46 4.1L6.35393 3.35754L6.35393 3.35754L6.46 4.1ZM17.636 1.3975C17.8555 1.04625 17.7488 0.583534 17.3975 0.364001C17.0462 0.144469 16.5835 0.251248 16.364 0.602501L17.636 1.3975ZM2.6002 13.3786L3.26145 13.7325L3.26145 13.7325L2.6002 13.3786ZM10.8001 11.05C11.2143 11.05 11.5501 10.7142 11.5501 10.3C11.5501 9.88579 11.2143 9.55 10.8001 9.55V11.05ZM1.5 8.44C2.2398 8.5633 2.23973 8.56369 2.23967 8.56406C2.23965 8.56416 2.23959 8.56452 2.23955 8.56474C2.23948 8.56516 2.23942 8.56553 2.23937 8.56584C2.23926 8.56647 2.23919 8.56689 2.23915 8.56708C2.23908 8.56748 2.23916 8.56702 2.2394 8.56574C2.23988 8.56316 2.24099 8.55727 2.24283 8.54828C2.24651 8.53028 2.25307 8.49993 2.26323 8.45883C2.28357 8.3765 2.31809 8.25191 2.37228 8.09768C2.48109 7.78799 2.66639 7.36673 2.96914 6.92941C3.56332 6.07115 4.62831 5.11928 6.56607 4.84246L6.35393 3.35754C3.95169 3.70072 2.53668 4.91885 1.73586 6.07559C1.34111 6.64577 1.10016 7.19326 0.957092 7.60045C0.885345 7.80465 0.837528 7.97553 0.807009 8.09906C0.791733 8.16089 0.78074 8.21107 0.773218 8.24786C0.769456 8.26627 0.766558 8.28135 0.764423 8.29288C0.763356 8.29865 0.762479 8.30354 0.76178 8.30752C0.761431 8.30951 0.761126 8.31127 0.760864 8.3128C0.760733 8.31357 0.760612 8.31427 0.760503 8.31492C0.760448 8.31525 0.760373 8.31569 0.760346 8.31586C0.760274 8.31629 0.760205 8.3167 1.5 8.44ZM6.56607 4.84246C7.57053 4.69897 8.51421 4.73293 9.44844 4.79966C10.3572 4.86457 11.3189 4.9681 12.2291 4.92673C13.1673 4.88408 14.1111 4.68878 15.0403 4.1335C15.9638 3.58169 16.817 2.70787 17.636 1.3975L16.364 0.602501C15.633 1.77213 14.9362 2.44831 14.2709 2.84588C13.6114 3.23997 12.9277 3.39342 12.1609 3.42827C11.3661 3.4644 10.5453 3.37418 9.55531 3.30347C8.59079 3.23457 7.51947 3.19103 6.35393 3.35754L6.56607 4.84246ZM5.14106 4.37183C5.73972 5.91126 6.30914 8.38787 6.44475 10.6859L7.94214 10.5975C7.79793 8.15371 7.19797 5.5225 6.53906 3.82817L5.14106 4.37183ZM6.44475 10.6859C6.53354 12.1906 6.43052 13.5336 6.08761 14.4692C5.9185 14.9307 5.70693 15.2489 5.47375 15.4482C5.25397 15.636 4.97943 15.75 4.60006 15.75V17.25C5.3231 17.25 5.94669 17.0172 6.44832 16.5885C6.93653 16.1712 7.26962 15.6031 7.496 14.9854C7.94408 13.7629 8.03533 12.1768 7.94214 10.5975L6.44475 10.6859ZM4.60006 15.75C3.58083 15.75 3.25531 15.368 3.13436 15.0743C2.97657 14.6911 3.03884 14.1484 3.26145 13.7325L1.93896 13.0247C1.56135 13.7302 1.37795 14.7483 1.74734 15.6454C2.15357 16.632 3.1281 17.25 4.60006 17.25V15.75ZM3.26145 13.7325C3.78686 12.7509 5.11165 11.845 7.3475 11.3757L7.03939 9.90771C4.61144 10.4173 2.76728 11.4771 1.93896 13.0247L3.26145 13.7325ZM7.3475 11.3757C8.34386 11.1666 9.49864 11.05 10.8001 11.05V9.55C9.41122 9.55 8.15172 9.67425 7.03939 9.90771L7.3475 11.3757Z"></path>
</svg>

                  </div>

                  <div class="site-nav-dropdown-item-text">
                    <div class="site-nav-dropdown-item-title">
                      Fonts
                    </div>

                    <p class="site-nav-dropdown-item-desc">Display, Script, Sans Serif, Serif…</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>              </li>
              <li class="site-nav-dropdown-item yellow">
                <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Templates" href="/marketplace/templates">

                  <div class="site-nav-dropdown-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></rect>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7H19V5.5H1V7H7V19H8.5V7Z" fill="currentColor"></path>
</svg>

                  </div>

                  <div class="site-nav-dropdown-item-text">
                    <div class="site-nav-dropdown-item-title">
                      Templates
                    </div>

                    <p class="site-nav-dropdown-item-desc">Mock Ups, Social Media, Presentations…</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>              </li>
              <li class="site-nav-dropdown-item purple">
                <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="3D" href="/marketplace/3d">

                  <div class="site-nav-dropdown-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.62528 0.682372C9.34091 0.361573 10.1595 0.361573 10.8751 0.682372L19.0409 4.34292C19.1081 4.37121 19.1704 4.40901 19.2259 4.45464C19.2615 4.48385 19.2942 4.51615 19.3236 4.55105C19.4354 4.68376 19.5002 4.85399 19.5002 5.0345V14.9484C19.5036 15.0995 19.4609 15.2477 19.3798 15.3732C19.3222 15.4624 19.2452 15.54 19.1516 15.5992C19.1167 15.6213 19.0798 15.6407 19.0414 15.6569L10.8751 19.3176C10.1595 19.6384 9.34091 19.6384 8.62528 19.3176L0.459072 15.6569C0.420262 15.6406 0.383117 15.621 0.347962 15.5987C0.255151 15.5399 0.178767 15.4629 0.121449 15.3746C0.0397873 15.2488 -0.00317647 15.1001 0.000183103 14.9486V5.0345C0.000183103 4.80088 0.106999 4.59219 0.274458 4.45464C0.330003 4.40902 0.392221 4.37122 0.459426 4.34293L8.62528 0.682372ZM10.2615 2.05114C9.93622 1.90532 9.56415 1.90532 9.23886 2.05114L2.58367 5.0345L9.75018 8.24707L16.9167 5.0345L10.2615 2.05114ZM9.00018 17.8419L1.50018 14.4798V6.19261L9.00018 9.55468V17.8419ZM10.5002 17.8419L18.0002 14.4798V6.19261L10.5002 9.55468V17.8419Z" fill="currentColor"></path>
<path d="M1 4.80823L1.03864 4.8254L9.18189 1.17498C9.70235 0.941673 10.2977 0.941673 10.8181 1.17498L18.9614 4.8254L19 4.80823V14.8082L10 18.3082L1 14.8082V4.80823Z" fill="currentColor" fill-opacity="0.2"></path>
</svg>

                  </div>

                  <div class="site-nav-dropdown-item-text">
                    <div class="site-nav-dropdown-item-title">
                      3D
                    </div>

                    <p class="site-nav-dropdown-item-desc">Characters, Objects, Textures…</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>              </li>
              <li class="site-nav-dropdown-item red">
                <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Themes" href="/marketplace/themes">

                  <div class="site-nav-dropdown-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></rect>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5ZM0 6.25V7.75H20V6.25H0ZM8 4C8 4.55228 7.55228 5 7 5C6.44772 5 6 4.55228 6 4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4ZM10 5C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3C9.44771 3 9 3.44772 9 4C9 4.55228 9.44771 5 10 5Z" fill="currentColor"></path>
</svg>

                  </div>

                  <div class="site-nav-dropdown-item-text">
                    <div class="site-nav-dropdown-item-title">
                      Themes
                    </div>

                    <p class="site-nav-dropdown-item-desc">WordPress, Shopify, Bootstrap, HTML5…</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>              </li>
              <li class="site-nav-dropdown-item green">
                <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Add Ons" href="/marketplace/add-ons">

                  <div class="site-nav-dropdown-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<path d="M0.75 2C0.75 1.30964 1.30964 0.75 2 0.75H7C7.69036 0.75 8.25 1.30964 8.25 2V7C8.25 7.69036 7.69036 8.25 7 8.25H2C1.30964 8.25 0.75 7.69036 0.75 7V2ZM0.75 13C0.75 12.3096 1.30964 11.75 2 11.75H7C7.69036 11.75 8.25 12.3096 8.25 13V18C8.25 18.6904 7.69036 19.25 7 19.25H2C1.30964 19.25 0.75 18.6904 0.75 18V13ZM11.75 13C11.75 12.3096 12.3096 11.75 13 11.75H18C18.6904 11.75 19.25 12.3096 19.25 13V18C19.25 18.6904 18.6904 19.25 18 19.25H13C12.3096 19.25 11.75 18.6904 11.75 18V13Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
<path d="M16.25 1C16.25 0.585786 15.9142 0.25 15.5 0.25C15.0858 0.25 14.75 0.585786 14.75 1V3.75H12C11.5858 3.75 11.25 4.08579 11.25 4.5C11.25 4.91421 11.5858 5.25 12 5.25H14.75V8C14.75 8.41421 15.0858 8.75 15.5 8.75C15.9142 8.75 16.25 8.41421 16.25 8V5.25H19C19.4142 5.25 19.75 4.91421 19.75 4.5C19.75 4.08579 19.4142 3.75 19 3.75H16.25V1Z" fill="currentColor"></path>
</svg>

                  </div>

                  <div class="site-nav-dropdown-item-text">
                    <div class="site-nav-dropdown-item-title">
                      Add Ons
                    </div>

                    <p class="site-nav-dropdown-item-desc">Procreate, Affinity, Photoshop, InDesign…</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>              </li>

            <li class="padding-h-32">
              <hr />
            </li>

            <li class="site-nav-dropdown-item green">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Open a Shop" target="_blank" href="https://creativemarket.com/sell?u=dribbble&amp;utm_source=Dribbble&amp;utm_medium=navigation&amp;utm_campaign=marketplace&amp;uid=dabb31ff-c1cd-46cf-9d25-6826e2cf841f">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="site-nav-dropdown-icon">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 12.3625L11.6066 23.6762C11.9971 24.0667 12.6303 24.0667 13.0208 23.6762L23.6762 13.0208C23.8707 12.8263 23.9765 12.5602 23.9687 12.2851L24 1.28571C23.9849 0.755822 23.2132 0.0151391 22.6834 0L11.6839 0.000408484C11.4089 -0.00744935 11.1428 0.098349 10.9483 0.292893L0.292893 10.9483C-0.0976312 11.3388 -0.0976309 11.9719 0.292893 12.3625ZM20.0919 3.87719C20.4824 4.26771 20.4824 4.90088 20.0919 5.2914C19.7014 5.68192 19.0682 5.68192 18.6777 5.2914C18.2871 4.90087 18.2871 4.26771 18.6777 3.87719C19.0682 3.48666 19.7014 3.48666 20.0919 3.87719ZM12.3249 6.74473C11.547 9.28963 9.79622 10.8869 7.32482 11.6549C9.79627 12.4223 11.547 14.0203 12.3249 16.5654C13.1027 14.0203 14.8534 12.4223 17.3248 11.6549C14.8534 10.8869 13.1027 9.28961 12.3249 6.74473Z"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Open a Shop
                  </div>
                  <p class="site-nav-dropdown-item-desc">Earn money doing what you love</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M12.9498 2.05017C13.5021 2.05017 13.9498 2.49789 13.9498 3.05017V11.7168C13.9498 12.2691 13.5021 12.7168 12.9498 12.7168C12.3975 12.7168 11.9498 12.2691 11.9498 11.7168V5.46438L3.7574 13.6568C3.36688 14.0473 2.73371 14.0473 2.34319 13.6568C1.95266 13.2662 1.95266 12.6331 2.34319 12.2426L10.5356 4.05017H4.28312C3.73084 4.05017 3.28312 3.60246 3.28312 3.05017C3.28312 2.49789 3.73084 2.05017 4.28312 2.05017L12.9498 2.05017Z"></path>
</svg>

</a>            </li>
          </div>
        </ul>
      </div>
    </li>

    <li class="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
      <a data-site-nav-element="Hire Designers" href="/hiring">Hire Designers</a>
      <div class="site-nav-hover-menu">
        <ul class="site-nav-dropdown-list">
          <div data-site-nav-category="Hire Designers">
            <li class="site-nav-dropdown-item purple">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Designer Search" href="/designers">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="site-nav-dropdown-icon">
<path d="M14.25 10C14.25 12.3472 12.3472 14.25 10 14.25C7.65279 14.25 5.75 12.3472 5.75 10C5.75 7.65279 7.65279 5.75 10 5.75C12.3472 5.75 14.25 7.65279 14.25 10ZM5.25 17C5.25 18.2426 4.24264 19.25 3 19.25C1.75736 19.25 0.75 18.2426 0.75 17C0.75 15.7574 1.75736 14.75 3 14.75C4.24264 14.75 5.25 15.7574 5.25 17ZM5.25 3C5.25 4.24264 4.24264 5.25 3 5.25C1.75736 5.25 0.75 4.24264 0.75 3C0.75 1.75736 1.75736 0.75 3 0.75C4.24264 0.75 5.25 1.75736 5.25 3ZM19.25 17C19.25 18.2426 18.2426 19.25 17 19.25C15.7574 19.25 14.75 18.2426 14.75 17C14.75 15.7574 15.7574 14.75 17 14.75C18.2426 14.75 19.25 15.7574 19.25 17ZM19.25 3C19.25 4.24264 18.2426 5.25 17 5.25C15.7574 5.25 14.75 4.24264 14.75 3C14.75 1.75736 15.7574 0.75 17 0.75C18.2426 0.75 19.25 1.75736 19.25 3Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Designer Search
                  </div>
                  <p class="site-nav-dropdown-item-desc">Find, contact, and hire designers</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item red">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="List my Job Opening" href="/jobs/new">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="site-nav-dropdown-icon small-icon">
<path d="M7 0.75L7 13.25M13.25 7L0.75 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    List my Job Opening
                  </div>
                  <p class="site-nav-dropdown-item-desc">The #1 job board for creatives</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
            <li class="site-nav-dropdown-item green">
              <a class="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Post a Freelance Project" href="/freelance-jobs">
                <div class="site-nav-dropdown-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="site-nav-dropdown-icon small-icon">
<path d="M7 0.75L7 13.25M13.25 7L0.75 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
</svg>

                </div>
                <div class="site-nav-dropdown-item-text">
                  <div class="site-nav-dropdown-item-title">
                    Post a Freelance Project
                  </div>
                  <p class="site-nav-dropdown-item-desc">Board for freelance & contract work</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" class="site-nav-dropdown-arrow icon-12 fill-current">
<path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
</svg>

</a>            </li>
          </div>
        </ul>
      </div>
    </li>
  </ul>
</nav>


    <div class="site-nav-mobile-only align-center site-nav-mobile-menu-toggle" aria-label="Toggle Navigation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" fill="none" role="img" class="icon js-site-nav-mobile-menu-open site-nav-mobile-menu-open icon-18 fill-current">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 1.37868 0.50368 0.875 1.125 0.875H16.875C17.4963 0.875 18 1.37868 18 2C18 2.62132 17.4963 3.125 16.875 3.125H1.125C0.50368 3.125 0 2.62132 0 2ZM0 8C0 7.37868 0.50368 6.875 1.125 6.875H16.875C17.4963 6.875 18 7.37868 18 8C18 8.62132 17.4963 9.125 16.875 9.125H1.125C0.50368 9.125 0 8.62132 0 8ZM1.125 12.875C0.50368 12.875 0 13.3787 0 14C0 14.6213 0.50368 15.125 1.125 15.125H16.875C17.4963 15.125 18 14.6213 18 14C18 13.3787 17.4963 12.875 16.875 12.875H1.125Z"></path>
</svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" role="img" class="icon js-site-nav-mobile-menu-close site-nav-mobile-menu-close icon-24 fill-current">
<path d="M7.22876 5.81455C6.83824 5.42403 6.20507 5.42403 5.81455 5.81455C5.42402 6.20507 5.42402 6.83824 5.81455 7.22876L9.58578 11L5.81455 14.7712C5.42402 15.1618 5.42402 15.7949 5.81455 16.1854C6.20507 16.576 6.83824 16.576 7.22876 16.1854L11 12.4142L14.7712 16.1854C15.1618 16.576 15.7949 16.576 16.1854 16.1854C16.576 15.7949 16.576 15.1618 16.1854 14.7712L12.4142 11L16.1854 7.22876C16.576 6.83824 16.576 6.20507 16.1854 5.81455C15.7949 5.42403 15.1618 5.42403 14.7712 5.81455L11 9.58579L7.22876 5.81455Z"></path>
</svg>

    </div>

    <div class="site-nav-mobile-only site-nav-mobile-logo" data-site-nav-category="Top Nav">
      <a href="/" data-site-nav-element="Logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="30" viewBox="0 0 76 19" fill="none" class="site-nav-logo fill-current">
<title>Dribbble: the community for graphic design</title>
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.8822 14.657C72.7063 20.0415 67.6766 18.4791 66.166 17.2558C65.5231 17.692 64.3958 18.6481 62.8926 18.5377C59.6913 18.3027 58.5449 13.7279 58.5449 13.7279C58.5679 13.7462 57.5913 14.0649 57.0635 14.0592C57.0567 15.4008 55.897 18.6056 52.7672 18.5646C49.2551 18.5188 48.5411 13.2864 48.5411 13.2864C48.5411 13.2864 48.1916 13.7717 46.8627 14.2551C46.9296 13.2244 46.8807 18.4077 42.6713 18.4839C39.3435 18.5442 38.4452 13.2057 38.4452 13.2057C38.4452 13.2057 37.8679 13.8054 36.7491 14.0134C36.8202 12.9659 36.7046 18.5015 32.4947 18.4839C29.6497 18.4721 28.6775 15.1954 28.7531 14.7406C28.8496 14.161 27.7916 18.5654 25.0281 18.4968C23.8877 18.4633 23.0375 17.6376 22.504 16.5368C21.7898 17.354 20.7529 18.4968 19.5897 18.4968C17.5017 18.4968 16.5812 16.7504 16.7371 11.7624C16.7504 11.1708 16.7077 10.9381 16.1196 10.8496C15.7666 10.7907 15.4051 10.6792 15.0226 10.6204C14.9 11.0295 13.8602 18.3637 10.2847 18.5029C9.08519 18.5496 8.4293 17.5105 7.89066 16.7393C7.06497 17.8316 5.97501 18.5377 4.42227 18.5377C1.79205 18.5377 0 16.4114 0 13.7885C0 11.1655 1.79205 9.03942 4.42227 9.03942C4.88732 9.03942 5.01787 9.10608 5.44272 9.23004C4.569 1.27504 6.63238 0.0317866 8.43739 0.0317866C10.1703 0.0317866 13.1308 4.05384 8.96512 14.2559C9.88998 17.2989 11.8838 17.1268 12.8419 10.8626C13.0369 9.58927 12.5155 7.87099 13.3265 7.63117C14.809 7.19289 14.9663 8.50787 15.6614 8.72697C16.3964 8.95853 16.8254 8.93592 17.531 9.08327C18.7367 9.31873 19.2072 9.96643 19.0603 11.409C18.8839 13.2343 18.5753 15.891 19.5162 16.2148C20.1947 16.45 21.4335 15.0429 21.6509 14.273C21.8682 13.5031 21.9136 13.2396 21.9329 12.6749C21.9623 11.468 21.9992 10.5833 22.205 9.67055C22.2931 9.31736 22.3935 9.08347 22.7931 9.06748C23.1219 9.0591 23.7232 8.96009 23.9879 9.16611C24.3407 9.43119 24.2966 9.70017 24.2561 10.4081C23.8458 20.5015 27.0038 15.4628 27.9454 11.4283C27.6101 6.86623 27.8403 0.115326 30.6991 0.00210112C32.1859 -0.0567822 32.8432 1.13431 32.9155 2.02335C33.12 4.53433 31.9745 8.69372 30.468 11.4909C29.607 17.1984 34.2325 18.3269 34.9722 13.7712C33.762 13.1958 32.4541 10.8668 33.5184 9.73181C34.1156 9.09483 36.6015 10.0099 36.6422 12.0057C37.8616 11.6796 38.0244 10.9911 38.0413 11.1052C37.7061 6.54312 38.017 0.115385 40.876 0.00215941C42.3626 -0.0567239 43.0198 1.13437 43.0921 2.02341C43.2966 4.53438 42.1511 8.69378 40.6448 11.491C39.7837 17.1984 44.4093 18.327 45.1488 13.7713C44.2528 13.5984 42.3614 11.1212 43.4527 9.73187C44.0359 8.98944 46.5127 10.5334 46.79 12.0718C47.9614 11.7403 48.1205 11.0737 48.1373 11.1859C47.802 6.62397 48.1129 0.196235 50.9719 0.0830097C52.4585 0.0241264 53.1157 1.21522 53.188 2.10426C53.3925 4.61523 52.247 8.77471 50.7405 11.5719C49.8796 17.2794 54.5051 18.4077 55.2448 13.852C54.0135 13.647 52.2636 11.0314 53.672 9.69333C54.2347 9.15869 56.3848 10.5465 56.8881 12.1298C57.5874 12.1029 58.0227 11.8617 58.116 11.8374C56.9996 6.4818 57.8307 0.0558781 60.9062 0.00223793C62.5685 -0.0267262 64.1936 0.900905 63.4803 5.99604C62.7994 10.8574 60.3519 12.8975 60.3576 12.9287C60.5 13.5111 61.7559 18.3851 64.9185 15.8134C64.7548 15.4427 64.5909 15.064 64.4993 14.6052C63.9751 11.9327 65.0047 8.91409 67.8032 8.42622C69.4066 8.14671 70.917 8.92734 71.1558 10.6872C71.5487 13.5669 68.9484 15.6524 67.9596 16.1048C67.5167 15.8532 71.9742 18.712 74.6196 12.9829C74.773 12.6558 74.9579 12.6835 75.1975 12.8521C75.3667 12.9712 76.3305 13.8842 75.8822 14.657ZM6.33552 13.0809C6.20092 12.6785 5.92469 11.7918 5.82701 11.4076C5.28905 10.9398 4.90507 10.8638 4.21455 10.8638C2.68 10.8638 1.77679 12.2826 1.77679 13.8125C1.77679 15.3423 2.76077 16.7613 4.29533 16.7613C5.6252 16.7613 6.63735 15.8571 6.94615 14.5771C6.73001 14.0781 6.5156 13.6195 6.33552 13.0809ZM8.39979 2.13753C7.32153 2.13753 6.95576 4.70973 7.02674 6.90406C7.08953 8.84411 7.63164 10.5521 7.91286 11.3174C7.98426 11.4133 7.971 11.3509 8.03474 11.4526C9.90694 7.35053 9.13041 2.13753 8.39979 2.13753ZM30.8531 2.21833C29.4595 2.0585 29.4685 7.86389 29.6415 9.16611C30.3653 8.00823 31.6226 2.53009 30.8531 2.21833ZM41.0297 2.21833C39.6361 2.0585 39.6451 7.86389 39.8182 9.16611C40.5419 8.00823 41.7993 2.53009 41.0297 2.21833ZM51.1257 2.2991C49.732 2.13927 49.741 7.94469 49.9141 9.247C50.6378 8.08902 51.8952 2.61084 51.1257 2.2991ZM61.06 1.87849C58.8887 2.31451 59.3943 9.55399 59.7241 10.8237C62.2817 7.31085 62.3344 1.74654 61.06 1.87849ZM69.1975 10.9254C69.0871 10.4638 68.5351 10.2171 68.1541 10.2779C67.0639 10.4268 66.0065 11.7846 66.4158 13.8518C66.5069 14.3122 66.7349 14.736 66.7312 14.7219C69.1711 13.085 69.3785 11.7951 69.1975 10.9254ZM23.2205 7.46958C22.9089 7.46964 22.6043 7.37729 22.3452 7.20422C22.0861 7.03114 21.8841 6.78512 21.7648 6.49725C21.6455 6.20939 21.6143 5.89261 21.6751 5.587C21.7358 5.28138 21.8859 5.00065 22.1062 4.7803C22.3265 4.55995 22.6072 4.40989 22.9128 4.34909C23.2184 4.28829 23.5352 4.31948 23.8231 4.43873C24.111 4.55797 24.357 4.75991 24.5301 5.019C24.7032 5.27809 24.7956 5.5827 24.7956 5.89429C24.7956 6.10115 24.7549 6.30599 24.6757 6.4971C24.5966 6.68822 24.4806 6.86187 24.3343 7.00815C24.188 7.15443 24.0144 7.27047 23.8233 7.34964C23.6322 7.42882 23.4274 7.46957 23.2205 7.46958Z" fill="#0D0C22"></path>
</svg>

        <span class="accessibility-text">Back to home page</span>
      </a>
    </div>

    
<ul class="site-nav-actions" data-site-nav-category="Top Nav">


  <li class="js-site-nav-search site-nav-actions-item site-nav-desktop-only">
    <a class="" data-site-nav-element="Search" href="/search">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon icon-18 fill-current">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
</svg>

      <span class="accessibility-text">Search</span>
</a>  </li>

      <li class="js-site-nav-sign-in site-nav-actions-item less-margin font-body-small">
        <a data-site-nav-element="Sign in" href="/session/new">Sign in</a>
      </li>
      <li class="display-flex align-center site-nav-desktop-only color-deep-blue-sea-light-40">/</li>
      <li class="js-site-nav-sign-up site-nav-actions-item less-margin site-nav-desktop-only font-body-small">
        <a data-site-nav-element="Sign Up" href="/signup/new">Sign up</a>
      </li>
      <li class="site-nav-actions-item show-medium-only">
        <a class="form-sub" data-site-nav-element="Post a Freelance Project" href="/freelance-jobs">Start a project</a>
      </li>
      <li class="site-nav-actions-item show-desktop-only">
        <a class="form-sub" data-site-nav-element="Post a Freelance Project" href="/freelance-jobs">Start a free project</a>
      </li>
</ul>

  </div>

  
<div class="site-nav-mobile-menu js-site-nav-mobile-menu">
  <nav aria-label="primary">
    <ul>
      <li>
        <form class="site-nav-mobile-menu-search" action="/search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon site-nav-mobile-search-icon fill-current icon-16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
</svg>

          <input class="site-nav-mobile-search-input" type="search" name="q" placeholder="Search" autocomplete="off" value="" />
          
        </form>
      </li>

      <li class="site-nav-mobile-dropdown">
        <input type="checkbox" name="dropdown" id="inspiration">
        <label for="inspiration" class="site-nav-mobile-list-item">
          Inspiration
        </label>
        <ul class="site-nav-mobile-dropdown-list">
          <div class="site-nav-mobile-dropdown-list-container" data-site-nav-category="Inspiration">
            <li><a data-site-nav-element="Explore Design Work" href="/shots/popular">Explore Design Work</a></li>
            <li>
              <a class="flex align-center" data-site-nav-element="New &amp; Noteworthy" href="/shots/recent">
                New & Noteworthy
</a>            </li>
            <li><a data-site-nav-element="Playoffs" href="/shots?list=playoffs">Playoffs</a></li>
            <li><a data-site-nav-element="Blog" href="/stories">Blog</a></li>
              <li><a data-site-nav-element="Weekly Warmup" href="/shots/17433584-Design-a-Valentine-without-using-red-or-pink">Weekly Warmup</a></li>
          </div>
        </ul>
      </li>
       <li class="site-nav-mobile-dropdown">
        <input type="checkbox" name="dropdown" id="find-work">
        <label for="find-work" class="site-nav-mobile-list-item">
          Find Work
        </label>
        <ul class="site-nav-mobile-dropdown-list">
          <div class="site-nav-mobile-dropdown-list-container" data-site-nav-category="Find Work">
            <li><a data-site-nav-element="Job Board" href="/jobs">Job Board</a></li>
            <li>
              <a class="flex align-center" data-site-nav-element="Freelance Projects" href="/freelance-jobs">
                Freelance Projects
                <span class="pro-flag margin-l-8">Pro+</span>
</a>            </li>
            <li>
              <a class="flex align-center" data-site-nav-element="Projects" href="/projects">
                Want freelance design projects?
</a>            </li>
            <li>
              <a class="flex align-center" data-site-nav-element="Pitch" href="/pro/pitch">
                Personalize your profile with video
</a>            </li>
          </div>
        </ul>
      </li>

      <li class="site-nav-mobile-dropdown">
        <input type="checkbox" name="dropdown" id="learn-design">
        <label for="learn-design" class="site-nav-mobile-list-item">
          Learn Design
        </label>
        <ul class="site-nav-mobile-dropdown-list" data-site-nav-category="Learn Design">
          <div class="site-nav-mobile-dropdown-list-container">
            <li><a data-site-nav-element="Product Design Course" href="/courses/product-design?utm_campaign=february-25-off">Certified Product Design Course</a></li>
            <li><a data-site-nav-element="Live Workshops" href="/learn">Live Workshops</a></li>
          </div>
        </ul>
      </li>

        <li data-site-nav-category="Top Nav">
          <a class="site-nav-mobile-list-item" data-site-nav-element="Go Pro" href="/pro">Go Pro</a>
        </li>

      <li class="site-nav-mobile-dropdown">
        <input type="checkbox" name="dropdown" id="marketplace">
        <label for="marketplace" class="site-nav-mobile-list-item">
          Marketplace
        </label>
        <ul class="site-nav-mobile-dropdown-list" data-site-nav-category="Marketplace">
          <div class="site-nav-mobile-dropdown-list-container">
            <li><a data-site-nav-element="Discover" href="/marketplace">Discover</a></li>
            <li><a data-site-nav-element="Graphics" target="_blank" href="/marketplace/graphics">Graphics</a></li>
            <li><a data-site-nav-element="Fonts" target="_blank" href="/marketplace/fonts">Fonts</a></li>
            <li><a data-site-nav-element="3D" target="_blank" href="/marketplace/3d">3D</a></li>
            <li><a data-site-nav-element="Templates" target="_blank" href="/marketplace/templates">Templates</a></li>
            <li><a data-site-nav-element="Add-Ons" target="_blank" href="/marketplace/add-ons">Add-Ons</a></li>
            <li><a data-site-nav-element="Web Themes" target="_blank" href="/marketplace/themes">Web Themes</a></li>
            <li><a data-site-nav-element="Open a Shop" target="_blank" href="https://creativemarket.com/sell?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=header">Open a Shop</a></li>
          </div>
        </ul>
      </li>

      <li class="site-nav-mobile-dropdown">
        <input type="checkbox" name="dropdown" id="hire-designers">
        <label for="hire-designers" class="site-nav-mobile-list-item">
          Hire Designers
        </label>
        <ul class="site-nav-mobile-dropdown-list">
          <div class="site-nav-mobile-dropdown-list-container" data-site-nav-category="Hire Designers">
            <li><a data-site-nav-element="About Dribbble Hiring" href="/hiring">About Dribbble Hiring</a></li>
            <li>
              <a class="flex align-center" data-site-nav-element="Designer Search" href="/designers">
                Designer Search
</a>            </li>
            <li><a data-billing-interval="quarterly" data-site-nav-element="List my job opening" href="/jobs/new">List my Job Opening</a></li>
            <li><a data-site-nav-element="Post a Freelance Project" href="/freelance-jobs">Post a Freelance Project</a></li>
          </div>
        </ul>
      </li>


    </ul>
  </nav>

</div>

</div>


<div class="ajax notice hide">
  <h2></h2>
</div>




<div class="notice-alert">
  <h3><!-- message goes here --></h3>
  <div class="close" aria-label="close">
    <img
      class="lazyload"
      data-src="https://cdn.dribbble.com/assets/icon-shot-x-light-f3676a5f3f6b7d0902be702c858a78e3de991957bbb7cec07daef7150e284fd8.png"
      width="16"
      height="16"
      alt="close"
    >
  </div>
</div>

  <div
    id="g_id_onload"
    data-client_id="32073492121-s6ur8ti01mh34gq2bpbufb8ujdfrpn4v.apps.googleusercontent.com"
    data-login_uri="https://dribbble.com/auth/google_one_tap/callback"
    
    data-ux_mode="redirect"
  ></div>


<div id="wrap">
  
      
<style>.signed-out-masthead{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-top:40px;padding-bottom:40px}@media (min-width: 768px){.signed-out-masthead{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;height:480px;padding-top:0;padding-bottom:0}}.signed-out-masthead .text-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;max-width:624px;margin-top:20px;text-align:center}@media (min-width: 768px){.signed-out-masthead .text-content{-ms-flex-align:start;align-items:flex-start;margin-top:0;text-align:left}}@media (min-width: 1600px){.signed-out-masthead .text-content{margin-left:100px}}.signed-out-masthead .text-content h1{font-family:&quot;Haas Grot Text R Web&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size:24px;font-weight:700;line-height:29px}@media (min-width: 768px){.signed-out-masthead .text-content h1{font-family:&quot;Haas Grot Text R Web&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size:32px;font-weight:700;line-height:38px}}@media (min-width: 1200px){.signed-out-masthead .text-content h1{font-family:&quot;Haas Grot Text R Web&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size:48px;font-weight:700;line-height:56px}}.signed-out-masthead .text-content p{margin:16px 0}.signed-out-masthead .shot-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;width:100%;color:#9e9ea7;font-family:&quot;Haas Grot Text R Web&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:20px}@media (min-width: 768px){.signed-out-masthead .shot-content{-ms-flex-align:end;align-items:flex-end;width:auto}}.signed-out-masthead .shot-content .signed-out-masthead-image{width:100%;height:300px;-o-object-fit:contain;object-fit:contain}@media (min-width: 768px){.signed-out-masthead .shot-content .signed-out-masthead-image{width:400px;height:266px}}@media (min-width: 1200px){.signed-out-masthead .shot-content .signed-out-masthead-image{width:510px;height:360px}}.signed-out-masthead .shot-content .user-credit{margin-top:20px}.signed-out-masthead .shot-content .user-credit-link{color:#9e9ea7;text-decoration:underline}
</style>

<div style="background: #F9F8FD">
  <div class="container-large signed-out-masthead">
    <div class="text-content">
      <h1>Discover the world’s top designers & creatives</h1>
      <p>Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
      <a class="form-sub sign-up" href="/signup/new">Sign up</a>
    </div>
    <div class="shot-content">
      
<picture>
    <source type="image/webp" sizes="(max-width: 500px) 320px, (max-width: 1200px) 400px, 510px" srcset="https://cdn.dribbble.com/assets/art-banners/romainbriaux-320w-ec9254ca29977e8be37b1ecb152090a962faa94bd923dc6cdff16ada6f428a27.webp 320w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-400w-d58af42123a3626a5213873b5e73c806298b6b830abd44fff93a6c203abb3fc0.webp 400w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-e0859557ff1168e088a1d80e2de552aec85ed8c1343bb61656f87512127b3c4a.webp 510w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-640w-d7dfe8be8b5c732e3a41b5f6e13542a88783b03c63b684a892d4756e565bcab7.webp 640w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-800w-f8927e677f2ab85c8d454f14cc277f300d3c72e89889e38c1ae1d18e8e3fd667.webp 800w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-1100w-caa2685efe993759bd7534384871c89939a864b91d14521e2b8b710fe638f18d.webp 1100w">
    <source type="image/png" sizes="(max-width: 500px) 320px, (max-width: 1200px) 400px, 510px" srcset="https://cdn.dribbble.com/assets/art-banners/romainbriaux-320w-512098320c8b3a46ee443f90530bc1cbc7942cc36cec7c388d4573654c435fcf.png 320w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-400w-22288560d9ec75955d374595de6df9271a1cd2e187e8712ff4bcccbb848d365f.png 400w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-4f2dbdb739cfcc67d5adede6bcc1095f41ad559af391f762194d1c35c318303a.png 510w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-640w-3d5fb491eda05cd00617371bf1630411d0f9120e2ab390222be8dbaa8a948a14.png 640w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-800w-a1667718b23f7d0ea370a97b57c3f7143b7978d40566f065f9b2ba8b296b9eed.png 800w, https://cdn.dribbble.com/assets/art-banners/romainbriaux-1100w-97eea970d8685aac38834f53a651aa5d484e2a62ad796f4279462d54ded65ca7.png 1100w">
  <img width="335" height="300" alt="Dribbble is the leading destination to find &amp; showcase creative work and home to the world&#39;s best design professionals." class="signed-out-masthead-image " src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-4f2dbdb739cfcc67d5adede6bcc1095f41ad559af391f762194d1c35c318303a.png" />
</picture>

      <span class="user-credit">Art by <a class="user-credit-link" href="/romainbriaux">Romain Briaux</a></span>
    </div>
  </div>
</div>

    <script src="https://cdn.dribbble.com/assets/packs/js/toasty-sign-up-initializer-a31573d458b48bc0924f.js"></script>

<div class="js-toasty-sign-up-container"></div>


  <div class="filter-subnav container-fluid">
  <div class="filter-subnav-inner flex flex-row items-center justify-between">
    <div class="filter-views js-shot-views">
      <span class="btn-dropdown btn-dropdown-neue">
        <a class="form-btn outlined btn-dropdown-link" data-track-sub-nav href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon btn-dropdown-caret">
<path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
</svg>

          <span>Popular</span>
        </a>
        <div class="btn-dropdown-options">
          <ul>
            <li class="popular active" id="popular-btn">
              <a data-track-view="Popular" href="/shots/popular">Popular</a>
            </li>
            <li class="" id="recent-btn">
              <a data-track-view="New &amp; Noteworthy" href="/shots/recent">New &amp; Noteworthy</a>
            </li>
            <li class="rule"></li>

            <li class="">
              <a data-track-view="Goods for Sale" href="/shots/goods">Goods for Sale</a>
            </li>
          </ul>
        </div>
      </span>
    </div>

      <div class="filter-categories js-filter-categories js-shot-categories">
        <span class="scroll scroll-backward"><a class="d-none" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon ">
<path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
</svg>
</a></span>
        <span class="scroll scroll-forward"><a class="d-none" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon ">
<path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
</svg>
</a></span>
        <ul>
            <li class="category sets-path active">
              <a title="All" data-param="category" data-track-sub-nav="true" href="/shots/popular/">All</a>
            </li>
            <li class="category sets-path ">
              <a title="Animation" data-param="category" data-value="animation" data-track-sub-nav="true" href="/shots/popular/animation">Animation</a>
            </li>
            <li class="category sets-path ">
              <a title="Branding" data-param="category" data-value="branding" data-track-sub-nav="true" href="/shots/popular/branding">Branding</a>
            </li>
            <li class="category sets-path ">
              <a title="Illustration" data-param="category" data-value="illustration" data-track-sub-nav="true" href="/shots/popular/illustration">Illustration</a>
            </li>
            <li class="category sets-path ">
              <a title="Mobile" data-param="category" data-value="mobile" data-track-sub-nav="true" href="/shots/popular/mobile">Mobile</a>
            </li>
            <li class="category sets-path ">
              <a title="Print" data-param="category" data-value="print" data-track-sub-nav="true" href="/shots/popular/print">Print</a>
            </li>
            <li class="category sets-path ">
              <a title="Product Design" data-param="category" data-value="product-design" data-track-sub-nav="true" href="/shots/popular/product-design">Product Design</a>
            </li>
            <li class="category sets-path ">
              <a title="Typography" data-param="category" data-value="typography" data-track-sub-nav="true" href="/shots/popular/typography">Typography</a>
            </li>
            <li class="category sets-path ">
              <a title="Web Design" data-param="category" data-value="web-design" data-track-sub-nav="true" href="/shots/popular/web-design">Web Design</a>
            </li>
        </ul>
      </div>

    <div class="filter-settings js-shot-settings">
      <a class="form-btn outlined filters-toggle-btn " data-name="Filters" data-track-sub-nav="true" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon filter-icon icon-14">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"></path>
</svg>

        <span class="meatball"></span>
        <span class="label" title="Filters">Filters</span>
</a>    </div>
  </div>

  
<div class="shot-filters    ">
  <form class="gen-form with-messages shot-filters-form goods-search flex-ns" action="/" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
    <fieldset class="find-shots-tag">
      <a class="clear-filter d-none" data-param="tag" href="/shots/filters">Clear</a>
      <label>Tags</label>
      <div class="input-with-icon">
        <input type="search" name="tag" id="tag" value="" data-name="Tag" data-track-filter="true" />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
</svg>

      </div>
    </fieldset>

    <fieldset class="find-shots-color lazyload " data-include="css:https://cdn.dribbble.com/assets/color-browse-f705a99ba7e40ded6cd866a85efd99cb656eb11aa51eacf9434bd0bdb0d1cc6a.css">
      <a class="clear-filter d-none" data-param="color" href="/shots/filters">Clear</a>
      <label>Color</label>
      <div class="input-with-icon">
        <input type="search" name="color" id="color" placeholder="Enter hex or select" autocomplete="off" maxlength="7" pattern="[a-fA-F\d]+" data-name="Color" data-track-filter="true" />
        <div class="color-swatch"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" role="img" class="icon ">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
<circle cx="10" cy="10.5" r="10" fill="#C4C4C4"></circle>
</mask>
<g mask="url(#mask0)">
<rect x="10" y="0.5" width="10" height="20" fill="#3A8BBB"></rect>
<path d="M20 4.5L10 -2.5V10.5L20 4.5Z" fill="#00B6E3"></path>
<path d="M20 16.5L10 24.5V10.5L20 16.5Z" fill="#C142A0"></path>
<path d="M0 0.5H10V10.5L0 16.5V0.5Z" fill="#FCC870"></path>
<path d="M-7 0.5H10V10.5L-7 0.5Z" fill="#EF875B"></path>
<path d="M0 16.5L10 24.5V10.5L0 16.5Z" fill="#FF5555"></path>
</g>
<circle cx="10" cy="10.5" r="3" fill="#F5F6F7"></circle>
</svg>

      </div>
      <div class="btn-dropdown-options">
        <ul class="color-chips group">
            <li class="color ">
              <a id="color-faddd1" style="background-color: #faddd1; border-radius: 0px;" href="?color=faddd1">#faddd1</a>
            </li>
            <li class="color ">
              <a id="color-fad3d1" style="background-color: #fad3d1; border-radius: 0px;" href="?color=fad3d1">#fad3d1</a>
            </li>
            <li class="color ">
              <a id="color-fad1e6" style="background-color: #fad1e6; border-radius: 0px;" href="?color=fad1e6">#fad1e6</a>
            </li>
            <li class="color ">
              <a id="color-e5d1fa" style="background-color: #e5d1fa; border-radius: 0px;" href="?color=e5d1fa">#e5d1fa</a>
            </li>
            <li class="color ">
              <a id="color-d4d1fa" style="background-color: #d4d1fa; border-radius: 0px;" href="?color=d4d1fa">#d4d1fa</a>
            </li>
            <li class="color ">
              <a id="color-d1e3fa" style="background-color: #d1e3fa; border-radius: 0px;" href="?color=d1e3fa">#d1e3fa</a>
            </li>
            <li class="color ">
              <a id="color-d1f3fa" style="background-color: #d1f3fa; border-radius: 0px;" href="?color=d1f3fa">#d1f3fa</a>
            </li>
            <li class="color ">
              <a id="color-d1faf0" style="background-color: #d1faf0; border-radius: 0px;" href="?color=d1faf0">#d1faf0</a>
            </li>
            <li class="color ">
              <a id="color-d1fad7" style="background-color: #d1fad7; border-radius: 0px;" href="?color=d1fad7">#d1fad7</a>
            </li>
            <li class="color ">
              <a id="color-ebfad1" style="background-color: #ebfad1; border-radius: 0px;" href="?color=ebfad1">#ebfad1</a>
            </li>
            <li class="color ">
              <a id="color-faf9d1" style="background-color: #faf9d1; border-radius: 0px;" href="?color=faf9d1">#faf9d1</a>
            </li>
            <li class="color ">
              <a id="color-faefd1" style="background-color: #faefd1; border-radius: 0px;" href="?color=faefd1">#faefd1</a>
            </li>
            <li class="color ">
              <a id="color-fae6d1" style="background-color: #fae6d1; border-radius: 0px;" href="?color=fae6d1">#fae6d1</a>
            </li>
            <li class="color ">
              <a id="color-f2e2d9" style="background-color: #f2e2d9; border-radius: 0px;" href="?color=f2e2d9">#f2e2d9</a>
            </li>
            <li class="color ">
              <a id="color-ffffff" style="background-color: #ffffff; border-radius: 0px;" href="?color=ffffff">#ffffff</a>
            </li>
            <li class="color ">
              <a id="color-f4b69c" style="background-color: #f4b69c; border-radius: 0px;" href="?color=f4b69c">#f4b69c</a>
            </li>
            <li class="color ">
              <a id="color-f4a09c" style="background-color: #f4a09c; border-radius: 0px;" href="?color=f4a09c">#f4a09c</a>
            </li>
            <li class="color ">
              <a id="color-f49cc8" style="background-color: #f49cc8; border-radius: 0px;" href="?color=f49cc8">#f49cc8</a>
            </li>
            <li class="color ">
              <a id="color-c69cf4" style="background-color: #c69cf4; border-radius: 0px;" href="?color=c69cf4">#c69cf4</a>
            </li>
            <li class="color ">
              <a id="color-a39cf4" style="background-color: #a39cf4; border-radius: 0px;" href="?color=a39cf4">#a39cf4</a>
            </li>
            <li class="color ">
              <a id="color-9cc2f4" style="background-color: #9cc2f4; border-radius: 0px;" href="?color=9cc2f4">#9cc2f4</a>
            </li>
            <li class="color ">
              <a id="color-9ce5f4" style="background-color: #9ce5f4; border-radius: 0px;" href="?color=9ce5f4">#9ce5f4</a>
            </li>
            <li class="color ">
              <a id="color-9cf4df" style="background-color: #9cf4df; border-radius: 0px;" href="?color=9cf4df">#9cf4df</a>
            </li>
            <li class="color ">
              <a id="color-9cf4a7" style="background-color: #9cf4a7; border-radius: 0px;" href="?color=9cf4a7">#9cf4a7</a>
            </li>
            <li class="color ">
              <a id="color-d4f49c" style="background-color: #d4f49c; border-radius: 0px;" href="?color=d4f49c">#d4f49c</a>
            </li>
            <li class="color ">
              <a id="color-f4f19c" style="background-color: #f4f19c; border-radius: 0px;" href="?color=f4f19c">#f4f19c</a>
            </li>
            <li class="color ">
              <a id="color-f4dc9c" style="background-color: #f4dc9c; border-radius: 0px;" href="?color=f4dc9c">#f4dc9c</a>
            </li>
            <li class="color ">
              <a id="color-f4c89c" style="background-color: #f4c89c; border-radius: 0px;" href="?color=f4c89c">#f4c89c</a>
            </li>
            <li class="color ">
              <a id="color-e3c0ac" style="background-color: #e3c0ac; border-radius: 0px;" href="?color=e3c0ac">#e3c0ac</a>
            </li>
            <li class="color ">
              <a id="color-e4e4e4" style="background-color: #e4e4e4; border-radius: 0px;" href="?color=e4e4e4">#e4e4e4</a>
            </li>
            <li class="color ">
              <a id="color-ee8f66" style="background-color: #ee8f66; border-radius: 0px;" href="?color=ee8f66">#ee8f66</a>
            </li>
            <li class="color ">
              <a id="color-ee6d66" style="background-color: #ee6d66; border-radius: 0px;" href="?color=ee6d66">#ee6d66</a>
            </li>
            <li class="color ">
              <a id="color-ee66aa" style="background-color: #ee66aa; border-radius: 0px;" href="?color=ee66aa">#ee66aa</a>
            </li>
            <li class="color ">
              <a id="color-a866ee" style="background-color: #a866ee; border-radius: 0px;" href="?color=a866ee">#a866ee</a>
            </li>
            <li class="color ">
              <a id="color-7166ee" style="background-color: #7166ee; border-radius: 0px;" href="?color=7166ee">#7166ee</a>
            </li>
            <li class="color ">
              <a id="color-66a1ee" style="background-color: #66a1ee; border-radius: 0px;" href="?color=66a1ee">#66a1ee</a>
            </li>
            <li class="color ">
              <a id="color-66d7ee" style="background-color: #66d7ee; border-radius: 0px;" href="?color=66d7ee">#66d7ee</a>
            </li>
            <li class="color ">
              <a id="color-66eece" style="background-color: #66eece; border-radius: 0px;" href="?color=66eece">#66eece</a>
            </li>
            <li class="color ">
              <a id="color-66ee78" style="background-color: #66ee78; border-radius: 0px;" href="?color=66ee78">#66ee78</a>
            </li>
            <li class="color ">
              <a id="color-bcee66" style="background-color: #bcee66; border-radius: 0px;" href="?color=bcee66">#bcee66</a>
            </li>
            <li class="color ">
              <a id="color-eee966" style="background-color: #eee966; border-radius: 0px;" href="?color=eee966">#eee966</a>
            </li>
            <li class="color ">
              <a id="color-eeca66" style="background-color: #eeca66; border-radius: 0px;" href="?color=eeca66">#eeca66</a>
            </li>
            <li class="color ">
              <a id="color-eeaa66" style="background-color: #eeaa66; border-radius: 0px;" href="?color=eeaa66">#eeaa66</a>
            </li>
            <li class="color ">
              <a id="color-d59f80" style="background-color: #d59f80; border-radius: 0px;" href="?color=d59f80">#d59f80</a>
            </li>
            <li class="color ">
              <a id="color-b4b4b4" style="background-color: #b4b4b4; border-radius: 0px;" href="?color=b4b4b4">#b4b4b4</a>
            </li>
            <li class="color ">
              <a id="color-e86830" style="background-color: #e86830; border-radius: 0px;" href="?color=e86830">#e86830</a>
            </li>
            <li class="color ">
              <a id="color-e83a30" style="background-color: #e83a30; border-radius: 0px;" href="?color=e83a30">#e83a30</a>
            </li>
            <li class="color ">
              <a id="color-e8308c" style="background-color: #e8308c; border-radius: 0px;" href="?color=e8308c">#e8308c</a>
            </li>
            <li class="color ">
              <a id="color-8930e8" style="background-color: #8930e8; border-radius: 0px;" href="?color=8930e8">#8930e8</a>
            </li>
            <li class="color ">
              <a id="color-4030e8" style="background-color: #4030e8; border-radius: 0px;" href="?color=4030e8">#4030e8</a>
            </li>
            <li class="color ">
              <a id="color-3080e8" style="background-color: #3080e8; border-radius: 0px;" href="?color=3080e8">#3080e8</a>
            </li>
            <li class="color ">
              <a id="color-30c9e8" style="background-color: #30c9e8; border-radius: 0px;" href="?color=30c9e8">#30c9e8</a>
            </li>
            <li class="color ">
              <a id="color-30e8bd" style="background-color: #30e8bd; border-radius: 0px;" href="?color=30e8bd">#30e8bd</a>
            </li>
            <li class="color ">
              <a id="color-30e849" style="background-color: #30e849; border-radius: 0px;" href="?color=30e849">#30e849</a>
            </li>
            <li class="color ">
              <a id="color-a5e830" style="background-color: #a5e830; border-radius: 0px;" href="?color=a5e830">#a5e830</a>
            </li>
            <li class="color ">
              <a id="color-e8e230" style="background-color: #e8e230; border-radius: 0px;" href="?color=e8e230">#e8e230</a>
            </li>
            <li class="color ">
              <a id="color-e8b730" style="background-color: #e8b730; border-radius: 0px;" href="?color=e8b730">#e8b730</a>
            </li>
            <li class="color ">
              <a id="color-e88c30" style="background-color: #e88c30; border-radius: 0px;" href="?color=e88c30">#e88c30</a>
            </li>
            <li class="color ">
              <a id="color-c67d53" style="background-color: #c67d53; border-radius: 0px;" href="?color=c67d53">#c67d53</a>
            </li>
            <li class="color ">
              <a id="color-848484" style="background-color: #848484; border-radius: 0px;" href="?color=848484">#848484</a>
            </li>
            <li class="color ">
              <a id="color-c74b16" style="background-color: #c74b16; border-radius: 0px;" href="?color=c74b16">#c74b16</a>
            </li>
            <li class="color ">
              <a id="color-c71f16" style="background-color: #c71f16; border-radius: 0px;" href="?color=c71f16">#c71f16</a>
            </li>
            <li class="color ">
              <a id="color-c7166f" style="background-color: #c7166f; border-radius: 0px;" href="?color=c7166f">#c7166f</a>
            </li>
            <li class="color ">
              <a id="color-6c16c7" style="background-color: #6c16c7; border-radius: 0px;" href="?color=6c16c7">#6c16c7</a>
            </li>
            <li class="color ">
              <a id="color-2516c7" style="background-color: #2516c7; border-radius: 0px;" href="?color=2516c7">#2516c7</a>
            </li>
            <li class="color ">
              <a id="color-1663c7" style="background-color: #1663c7; border-radius: 0px;" href="?color=1663c7">#1663c7</a>
            </li>
            <li class="color ">
              <a id="color-16a9c7" style="background-color: #16a9c7; border-radius: 0px;" href="?color=16a9c7">#16a9c7</a>
            </li>
            <li class="color ">
              <a id="color-16c79e" style="background-color: #16c79e; border-radius: 0px;" href="?color=16c79e">#16c79e</a>
            </li>
            <li class="color ">
              <a id="color-16c72e" style="background-color: #16c72e; border-radius: 0px;" href="?color=16c72e">#16c72e</a>
            </li>
            <li class="color ">
              <a id="color-86c716" style="background-color: #86c716; border-radius: 0px;" href="?color=86c716">#86c716</a>
            </li>
            <li class="color ">
              <a id="color-c7c116" style="background-color: #c7c116; border-radius: 0px;" href="?color=c7c116">#c7c116</a>
            </li>
            <li class="color ">
              <a id="color-c79816" style="background-color: #c79816; border-radius: 0px;" href="?color=c79816">#c79816</a>
            </li>
            <li class="color ">
              <a id="color-c76f16" style="background-color: #c76f16; border-radius: 0px;" href="?color=c76f16">#c76f16</a>
            </li>
            <li class="color ">
              <a id="color-a66037" style="background-color: #a66037; border-radius: 0px;" href="?color=a66037">#a66037</a>
            </li>
            <li class="color ">
              <a id="color-545454" style="background-color: #545454; border-radius: 0px;" href="?color=545454">#545454</a>
            </li>
            <li class="color ">
              <a id="color-913710" style="background-color: #913710; border-radius: 0px;" href="?color=913710">#913710</a>
            </li>
            <li class="color ">
              <a id="color-911710" style="background-color: #911710; border-radius: 0px;" href="?color=911710">#911710</a>
            </li>
            <li class="color ">
              <a id="color-911051" style="background-color: #911051; border-radius: 0px;" href="?color=911051">#911051</a>
            </li>
            <li class="color ">
              <a id="color-4f1091" style="background-color: #4f1091; border-radius: 0px;" href="?color=4f1091">#4f1091</a>
            </li>
            <li class="color ">
              <a id="color-1b1091" style="background-color: #1b1091; border-radius: 0px;" href="?color=1b1091">#1b1091</a>
            </li>
            <li class="color ">
              <a id="color-104891" style="background-color: #104891; border-radius: 0px;" href="?color=104891">#104891</a>
            </li>
            <li class="color ">
              <a id="color-107c91" style="background-color: #107c91; border-radius: 0px;" href="?color=107c91">#107c91</a>
            </li>
            <li class="color ">
              <a id="color-109173" style="background-color: #109173; border-radius: 0px;" href="?color=109173">#109173</a>
            </li>
            <li class="color ">
              <a id="color-109121" style="background-color: #109121; border-radius: 0px;" href="?color=109121">#109121</a>
            </li>
            <li class="color ">
              <a id="color-629110" style="background-color: #629110; border-radius: 0px;" href="?color=629110">#629110</a>
            </li>
            <li class="color ">
              <a id="color-918d10" style="background-color: #918d10; border-radius: 0px;" href="?color=918d10">#918d10</a>
            </li>
            <li class="color ">
              <a id="color-916f10" style="background-color: #916f10; border-radius: 0px;" href="?color=916f10">#916f10</a>
            </li>
            <li class="color ">
              <a id="color-915110" style="background-color: #915110; border-radius: 0px;" href="?color=915110">#915110</a>
            </li>
            <li class="color ">
              <a id="color-794628" style="background-color: #794628; border-radius: 0px;" href="?color=794628">#794628</a>
            </li>
            <li class="color ">
              <a id="color-242424" style="background-color: #242424; border-radius: 0px;" href="?color=242424">#242424</a>
            </li>
            <li class="color ">
              <a id="color-5c230a" style="background-color: #5c230a; border-radius: 0px;" href="?color=5c230a">#5c230a</a>
            </li>
            <li class="color ">
              <a id="color-5c0e0a" style="background-color: #5c0e0a; border-radius: 0px;" href="?color=5c0e0a">#5c0e0a</a>
            </li>
            <li class="color ">
              <a id="color-5c0a33" style="background-color: #5c0a33; border-radius: 0px;" href="?color=5c0a33">#5c0a33</a>
            </li>
            <li class="color ">
              <a id="color-320a5c" style="background-color: #320a5c; border-radius: 0px;" href="?color=320a5c">#320a5c</a>
            </li>
            <li class="color ">
              <a id="color-110a5c" style="background-color: #110a5c; border-radius: 0px;" href="?color=110a5c">#110a5c</a>
            </li>
            <li class="color ">
              <a id="color-0a2e5c" style="background-color: #0a2e5c; border-radius: 0px;" href="?color=0a2e5c">#0a2e5c</a>
            </li>
            <li class="color ">
              <a id="color-0a4e5c" style="background-color: #0a4e5c; border-radius: 0px;" href="?color=0a4e5c">#0a4e5c</a>
            </li>
            <li class="color ">
              <a id="color-0a5c49" style="background-color: #0a5c49; border-radius: 0px;" href="?color=0a5c49">#0a5c49</a>
            </li>
            <li class="color ">
              <a id="color-0a5c15" style="background-color: #0a5c15; border-radius: 0px;" href="?color=0a5c15">#0a5c15</a>
            </li>
            <li class="color ">
              <a id="color-3e5c0a" style="background-color: #3e5c0a; border-radius: 0px;" href="?color=3e5c0a">#3e5c0a</a>
            </li>
            <li class="color ">
              <a id="color-5c590a" style="background-color: #5c590a; border-radius: 0px;" href="?color=5c590a">#5c590a</a>
            </li>
            <li class="color ">
              <a id="color-5c460a" style="background-color: #5c460a; border-radius: 0px;" href="?color=5c460a">#5c460a</a>
            </li>
            <li class="color ">
              <a id="color-5c330a" style="background-color: #5c330a; border-radius: 0px;" href="?color=5c330a">#5c330a</a>
            </li>
            <li class="color ">
              <a id="color-4d2c19" style="background-color: #4d2c19; border-radius: 0px;" href="?color=4d2c19">#4d2c19</a>
            </li>
            <li class="color ">
              <a id="color-000000" style="background-color: #000000; border-radius: 0px;" href="?color=000000">#000000</a>
            </li>
        </ul>
      </div>
    </fieldset>

      <fieldset class="find-shots-timeframe">
        <input type="hidden" name="timeframe" id="timeframe" value="" class="filter-timeframe" />
        <a class="clear-filter d-none" data-param="timeframe" href="/shots/filters">Clear</a>
        <label>Timeframe</label>
        <span class="btn-dropdown btn-dropdown-neue">
          <a class="form-btn outlined btn-dropdown-link" href="#" data-name="Timeframe" data-track-filter>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon btn-dropdown-caret">
<path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
</svg>

            <span data-prompt="Now" data-fade-default="true">
              Now
            </span>
          </a>
          <div class="btn-dropdown-options sets-querystring">
            <ul>
              <li class="default-filter-option active">
                <a href="?timeframe=">
                  Now
</a>              </li>
              <li data-value="week" class="timeframe-week "><a href="?timeframe=week">This Past Week</a></li>
              <li data-value="month" class="timeframe-month "><a href="?timeframe=month">This Past Month</a></li>
              <li data-value="year" class="timeframe-year "><a href="?timeframe=year">This Past Year</a></li>
              <li data-value="ever" class="timeframe-all-time "><a href="?timeframe=ever">All Time</a></li>
              <li data-value="now" class="d-none timeframe-now "><a href="?timeframe=now">Now</a></li>
            </ul>
          </div>
        </span>
      </fieldset>

    <fieldset class="find-shots-made-with">
      <a class="clear-filter d-none" data-param="madeWith" href="/shots/filters">Clear</a>
      <label>Made With</label>
      <span class="btn-dropdown btn-dropdown-neue">
        <a class="form-btn outlined btn-dropdown-link" href="#" data-name="Made With" data-track-filter>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon btn-dropdown-caret">
<path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
</svg>

          <span data-prompt="All Apps" data-fade-default="true">
            All Apps
          </span>
        </a>
        <div class="btn-dropdown-options sets-path">
          <ul>
            <li class="default-filter-option active">
              <a class="" data-param="madeWith" href="/shots/filters">All Apps</a>
            </li>
            <li data-value="adobe-xd" class="">
              <a data-param="madeWith" data-value="adobe-xd" href="/shots/made_with/adobe-xd">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16" viewBox="0 0 16 16" width="16" role="img" class="icon btn-dropdown-option"><rect fill="#260318" height="16" rx="3" width="16"></rect><path d="m6.33957 7.70668 1.86667 3.58662c.03333.0534.01333.1067-.04.1067h-1.16c-.07333 0-.10667-.02-.14-.0867-.42667-.88-.86-1.75995-1.30667-2.70662h-.01333c-.4.89333-.84 1.83332-1.26667 2.71332-.03333.0533-.06666.0733-.12.0733h-1.1c-.06666 0-.07333-.0533-.04-.0933l1.82667-3.47999-1.76667-3.52c-.04-.05333 0-.09333.04-.09333h1.14667c.06667 0 .09333.01333.12.07333.42.88.84667 1.78667 1.24667 2.67334h.01333c.38667-.88.81333-1.79334 1.22667-2.66667.03333-.05333.05333-.08667.12-.08667h1.07333c.05333 0 .07333.04.04.09334zm2.19334 1.08667c0-1.55334 1.03333-2.76667 2.67329-2.76667.14 0 .2134 0 .3467.01333v-1.76666c0-.04.0333-.06667.0667-.06667h1.0533c.0533 0 .0667.02.0667.05333v6.11999c0 .18 0 .4067.0333.6533 0 .04-.0133.0534-.0533.0734-.56.2666-1.1467.3866-1.7067.3866-1.44666.0067-2.47999-.8866-2.47999-2.69995zm3.01999-1.70667c-.0933-.04-.2267-.06667-.3867-.06667-.84 0-1.42663.64667-1.42663 1.72 0 1.22667.60003 1.71999 1.35333 1.71999.16 0 .3333-.02.46-.0733z" fill="#eb45b9"></path></svg>
 Adobe XD
</a>            </li>
            <li data-value="figma" class="">
              <a data-param="madeWith" data-value="figma" href="/shots/made_with/figma">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon btn-dropdown-option">
<rect width="16" height="16" rx="3" fill="#2B2B31"></rect>
<g clip-path="url(#clip_figma)">
<path d="M6.66764 13C7.58764 13 8.33431 12.2533 8.33431 11.3333V9.66666H6.66764C5.74764 9.66666 5.00098 10.4133 5.00098 11.3333C5.00098 12.2533 5.74764 13 6.66764 13Z" fill="#5ECB89"></path>
<path d="M5.00098 7.99997C5.00098 7.07997 5.74764 6.33331 6.66764 6.33331H8.33431V9.66662H6.66764C5.74764 9.66662 5.00098 8.91996 5.00098 7.99997Z" fill="#9763F6"></path>
<path d="M5.00098 4.66673C5.00098 3.74673 5.74764 3.00006 6.66764 3.00006H8.33431V6.33339H6.66764C5.74764 6.33339 5.00098 5.58673 5.00098 4.66673Z" fill="#E05A32"></path>
<path d="M8.33398 3H10.0007C10.9207 3 11.6673 3.74667 11.6673 4.66667C11.6673 5.58667 10.9207 6.33333 10.0007 6.33333H8.33398V3Z" fill="#EE7A69"></path>
<path d="M11.6673 7.99997C11.6673 8.91996 10.9207 9.66662 10.0007 9.66662C9.08066 9.66662 8.33398 8.91996 8.33398 7.99997C8.33398 7.07997 9.08066 6.33331 10.0007 6.33331C10.9207 6.33331 11.6673 7.07997 11.6673 7.99997Z" fill="#55BBF8"></path>
</g>
<defs>
<clipPath id="clip_figma">
<rect width="6.668" height="10" fill="white" transform="translate(5 3)"></rect>
</clipPath>
</defs>
</svg>
 Figma
</a>            </li>
            <li data-value="sketch" class="">
              <a data-param="madeWith" data-value="sketch" href="/shots/made_with/sketch">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon btn-dropdown-option">
<g clip-path="url(#clip_sketch)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.4777L0 6.18219L3.46559 1.48583L8 1L12.5344 1.48583L16 6.18219L8 15.4777Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.4777L0 6.18219L16 6.18219L8 15.4777Z" fill="#EC6C00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00059 15.4777L3.23945 6.18219L12.7617 6.18219L8.00059 15.4777Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00059 1L3.23945 6.18219L12.7617 6.18219L8.00059 1Z" fill="#FFEFB4"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46582 1.48582L1.68444 3.85019L0.000233173 6.18217L3.27149 6.18217L3.46582 1.48582Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5342 1.48582L14.3156 3.85019L15.9998 6.18217L12.7285 6.18217L12.5342 1.48582Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46559 1.48583L3.23887 6.18219L8 1L3.46559 1.48583Z" fill="#FED305"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5344 1.48583L12.7611 6.18219L8 1L12.5344 1.48583Z" fill="#FED305"></path>
</g>
<defs>
<clipPath id="clip_sketch">
<rect width="16" height="14.4777" fill="white" transform="translate(0 1)"></rect>
</clipPath>
</defs>
</svg>
 Sketch
</a>            </li>
            <li data-value="unsplash" class="">
              <a data-param="madeWith" data-value="unsplash" href="/shots/made_with/unsplash">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" role="img" class="icon btn-dropdown-option">
<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" fill="black"></path>
</svg>
 Unsplash
</a>            </li>
          </ul>
        </div>
      </span>
    </fieldset>

    <fieldset class="find-shots-source-files">
      <input type="hidden" name="source_file" id="source_file" value="" class="filter-source_file" />
      <a class="clear-filter d-none" data-param="source_file" href="/shots/filters">Clear</a>
      <label>Downloads</label>
      <span class="btn-dropdown btn-dropdown-neue">
        <a class="form-btn outlined btn-dropdown-link" href="#" data-name="Downloads" data-track-filter>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon btn-dropdown-caret">
<path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
</svg>

          <span data-prompt="All Shots" data-fade-default="true">
            
            All Shots
          </span>
        </a>
        <div class="btn-dropdown-options sets-querystring">
          <ul>
            <li class="default-filter-option active">
              <a href="?source_file=">
                All Shots
</a>            </li>
            <li data-value=".ai" class="">
              <a href="?source_file=.ai">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16" viewBox="0 0 16 16" width="16" role="img" class="icon btn-dropdown-option"><rect fill="#1e0c02" height="16" rx="3" width="16"></rect><path d="m10.4672 6.192c0-.0544.0192-.08.08-.08h1.0464c.0544 0 .08.0192.08.08v5.2544c0 .0544-.0128.08-.08.08h-1.0336c-.0672 0-.0864-.032-.0864-.0864v-5.248zm-.0736-1.5136c0-.4256.3008-.6784.6784-.6784.4064 0 .6784.272.6784.6784 0 .4384-.2848.6784-.6912.6784-.384.0032-.6656-.2368-.6656-.6784zm-2.99515 3.7024c-.1856-.7392-.6272-2.3488-.7936-3.1296h-.0128c-.1408.7776-.4928 2.096-.7712 3.1296zm-1.8496 1.0784-.5248 1.9968c-.0128.0544-.032.0672-.0992.0672h-.9792c-.0672 0-.08-.0192-.0672-.0992l1.8912-6.6176c.032-.1184.0544-.2272.0672-.5536 0-.048.0192-.0672.0544-.0672h1.3984c.048 0 .0672.0128.08.0672l2.1184 7.184c.0128.0544 0 .0864-.0544.0864h-1.104c-.0544 0-.0864-.0128-.0992-.0608l-.5472-2.0032z" fill="#ef8332"></path></svg>
 Adobe Illustrator
</a>            </li>
            <li data-value=".psd" class="">
              <a href="?source_file=.psd">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16" viewBox="0 0 16 16" width="16" role="img" class="icon btn-dropdown-option"><rect fill="#071d25" height="16" rx="3" width="16"></rect><path d="m3.86621 4.11333c0-.04666.09333-.08.14667-.08.42666-.02 1.06-.03333 1.72-.03333 1.84666 0 2.56666 1.01333 2.56666 2.31333 0 1.69334-1.22666 2.42-2.73333 2.42-.25333 0-.34-.01333-.52-.01333v2.56c0 .0533-.02.08-.08.08h-1.02c-.05333 0-.08-.02-.08-.08zm1.18667 3.54c.15333.01334.27333.01334.54.01334.78 0 1.51333-.27334 1.51333-1.33334 0-.84666-.52667-1.27333-1.41333-1.27333-.26667 0-.52.01333-.64.02zm5.73332-.79333c-.5267 0-.7067.26667-.7067.48667 0 .24.12.40666.8267.77333 1.0467.50667 1.3733.99333 1.3733 1.70667 0 1.06663-.8133 1.64003-1.9133 1.64003-.57999 0-1.07999-.12-1.36666-.2867-.04666-.02-.05333-.0533-.05333-.1067v-.98c0-.0666.03333-.0866.08-.0533.42.2733.9.3933 1.33999.3933.5267 0 .7467-.22.7467-.51997 0-.24-.1534-.45333-.8267-.8-.94665-.45333-1.33999-.91333-1.33999-1.68 0-.86.67333-1.57333 1.83999-1.57333.5733 0 .9733.08667 1.1933.18667.0534.03333.0667.08666.0667.13333v.91333c0 .05334-.0333.08667-.1.06667-.2933-.18667-.7267-.3-1.16-.3z" fill="#57c6fa"></path></svg>
 Adobe Photoshop
</a>            </li>
            <li data-value=".xd" class="">
              <a href="?source_file=.xd">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16" viewBox="0 0 16 16" width="16" role="img" class="icon btn-dropdown-option"><rect fill="#260318" height="16" rx="3" width="16"></rect><path d="m6.33957 7.70668 1.86667 3.58662c.03333.0534.01333.1067-.04.1067h-1.16c-.07333 0-.10667-.02-.14-.0867-.42667-.88-.86-1.75995-1.30667-2.70662h-.01333c-.4.89333-.84 1.83332-1.26667 2.71332-.03333.0533-.06666.0733-.12.0733h-1.1c-.06666 0-.07333-.0533-.04-.0933l1.82667-3.47999-1.76667-3.52c-.04-.05333 0-.09333.04-.09333h1.14667c.06667 0 .09333.01333.12.07333.42.88.84667 1.78667 1.24667 2.67334h.01333c.38667-.88.81333-1.79334 1.22667-2.66667.03333-.05333.05333-.08667.12-.08667h1.07333c.05333 0 .07333.04.04.09334zm2.19334 1.08667c0-1.55334 1.03333-2.76667 2.67329-2.76667.14 0 .2134 0 .3467.01333v-1.76666c0-.04.0333-.06667.0667-.06667h1.0533c.0533 0 .0667.02.0667.05333v6.11999c0 .18 0 .4067.0333.6533 0 .04-.0133.0534-.0533.0734-.56.2666-1.1467.3866-1.7067.3866-1.44666.0067-2.47999-.8866-2.47999-2.69995zm3.01999-1.70667c-.0933-.04-.2267-.06667-.3867-.06667-.84 0-1.42663.64667-1.42663 1.72 0 1.22667.60003 1.71999 1.35333 1.71999.16 0 .3333-.02.46-.0733z" fill="#eb45b9"></path></svg>
 Adobe XD
</a>            </li>
            <li data-value=".fig" class="">
              <a href="?source_file=.fig">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon btn-dropdown-option">
<rect width="16" height="16" rx="3" fill="#2B2B31"></rect>
<g clip-path="url(#clip_figma)">
<path d="M6.66764 13C7.58764 13 8.33431 12.2533 8.33431 11.3333V9.66666H6.66764C5.74764 9.66666 5.00098 10.4133 5.00098 11.3333C5.00098 12.2533 5.74764 13 6.66764 13Z" fill="#5ECB89"></path>
<path d="M5.00098 7.99997C5.00098 7.07997 5.74764 6.33331 6.66764 6.33331H8.33431V9.66662H6.66764C5.74764 9.66662 5.00098 8.91996 5.00098 7.99997Z" fill="#9763F6"></path>
<path d="M5.00098 4.66673C5.00098 3.74673 5.74764 3.00006 6.66764 3.00006H8.33431V6.33339H6.66764C5.74764 6.33339 5.00098 5.58673 5.00098 4.66673Z" fill="#E05A32"></path>
<path d="M8.33398 3H10.0007C10.9207 3 11.6673 3.74667 11.6673 4.66667C11.6673 5.58667 10.9207 6.33333 10.0007 6.33333H8.33398V3Z" fill="#EE7A69"></path>
<path d="M11.6673 7.99997C11.6673 8.91996 10.9207 9.66662 10.0007 9.66662C9.08066 9.66662 8.33398 8.91996 8.33398 7.99997C8.33398 7.07997 9.08066 6.33331 10.0007 6.33331C10.9207 6.33331 11.6673 7.07997 11.6673 7.99997Z" fill="#55BBF8"></path>
</g>
<defs>
<clipPath id="clip_figma">
<rect width="6.668" height="10" fill="white" transform="translate(5 3)"></rect>
</clipPath>
</defs>
</svg>
 Figma
</a>            </li>
            <li data-value=".studio" class="">
              <a href="?source_file=.studio">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16" viewBox="0 0 16 16" width="16" role="img" class="icon btn-dropdown-option"><path d="m0 0h16v16h-16z" fill="#e74969"></path><path d="m12.4025 12.3774h1.2343v1.2343h-1.2343zm-1.945-.4604c0-1.409-3.22302-.3013-3.22302-2.61466 0-.92034.77933-1.71068 2.062-1.71068 1.35562 0 2.07032.83101 2.09462 1.91435h-.966c-.008-.57034-.3896-1.02634-1.12829-1.02634-.67366 0-1.08766.285-1.08766.79834 0 1.27069 3.24735.285 3.24735 2.59839 0 1.0506-.9094 1.735-2.28935 1.735-1.53434 0-2.127-.9774-2.15934-1.9224h.97434c.04066.6194.45466 1.0347 1.234 1.0347.78665 0 1.24135-.2853 1.24135-.8067z" fill="#fff"></path></svg>
 Invision Studio
</a>            </li>
            <li data-value=".sketch" class="">
              <a href="?source_file=.sketch">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon btn-dropdown-option">
<g clip-path="url(#clip_sketch)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.4777L0 6.18219L3.46559 1.48583L8 1L12.5344 1.48583L16 6.18219L8 15.4777Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.4777L0 6.18219L16 6.18219L8 15.4777Z" fill="#EC6C00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00059 15.4777L3.23945 6.18219L12.7617 6.18219L8.00059 15.4777Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00059 1L3.23945 6.18219L12.7617 6.18219L8.00059 1Z" fill="#FFEFB4"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46582 1.48582L1.68444 3.85019L0.000233173 6.18217L3.27149 6.18217L3.46582 1.48582Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5342 1.48582L14.3156 3.85019L15.9998 6.18217L12.7285 6.18217L12.5342 1.48582Z" fill="#FFAE00"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46559 1.48583L3.23887 6.18219L8 1L3.46559 1.48583Z" fill="#FED305"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5344 1.48583L12.7611 6.18219L8 1L12.5344 1.48583Z" fill="#FED305"></path>
</g>
<defs>
<clipPath id="clip_sketch">
<rect width="16" height="14.4777" fill="white" transform="translate(0 1)"></rect>
</clipPath>
</defs>
</svg>
 Sketch
</a>            </li>
          </ul>
        </div>
      </span>
    </fieldset>

    <fieldset class="find-shots-goods-price lazyload" data-include="css:https://cdn.dribbble.com/assets/nouislider-4eeb37d87057dd2e11e3cb92b891cc82a4f0fcd3ff086e22e3c957fb13572784.css">
      <input type="hidden" name="price_floor" id="price_floor" />
      <input type="hidden" name="price_ceiling" id="price_ceiling" />
      <a class="clear-filter d-none" data-param="price_floor,price_ceiling" href="/shots/filters">Clear</a>
      <span id="price-range" class="price-range"></span>
      <label>Price</label>

      <div>
        <div id="price-slider" class="price-slider"></div>
      </div>
    </fieldset>
</form></div>

</div>


  

  <div id="wrap-inner" class="flushed">
    <div id="content" role="main">
      




<div id="main" class="main-full">
    

<ol class="js-thumbnail-grid shots-grid group dribbbles  container-fluid">
  <script>if (!document.querySelector(".js-thumbnail-grid")){ window.location.reload(); }</script>





<li
  id="screenshot-17459562" data-thumbnail-id="17459562"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #F2EAD1"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=400x300" alt="macindows_is_back.idc 00s 90s computer funny gradient icons illustration macindows macintosh retro ui ux vintage windows">
  </noscript>
  <img alt="macindows_is_back.idc 00s 90s computer funny gradient icons illustration macindows macintosh retro ui ux vintage windows" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/60266/screenshots/17459562/media/3809e34920626e4a6ed717bee9491367.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
          <div class="is-rebound shot-thumbnail-extras-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM8.16504 6.24902V5.06161C8.16585 4.89576 8.09142 4.73031 7.94336 4.60411C7.64766 4.35128 7.16872 4.35128 6.87302 4.60411L3.31087 7.6505L6.87302 10.6969C7.02107 10.8231 7.21443 10.8866 7.40819 10.8866C7.60195 10.8866 7.79531 10.8235 7.94336 10.6969C8.09142 10.5707 8.16585 10.4048 8.16504 10.2394V8.98145C10.8239 9.1121 12.2102 10.7855 12.2102 10.7855C12.2102 8.0174 10.5161 6.43227 8.16504 6.24902Z" fill="white"></path>
</svg>

          </div>
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459562-macindows-is-back-idc">
        <span class="accessibility-text">View macindows_is_back.idc</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">macindows_is_back.idc</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459562   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459562, {
          likes_count: 155,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/zamax">
            <img class="photo lazyload" alt="Gustavo Zambelli" width="24" height="24" data-src="https://cdn.dribbble.com/users/60266/avatars/mini/64826d925db1d4178258d17d8826842b.png?1549028805" src="" />
            <span class="display-name">Gustavo Zambelli</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459562  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459562, {
          likes_count: 155,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        155
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      19.4k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17408159" data-thumbnail-id="17408159"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  multi-shot"
>
      <figure
    style="background-color: #D6DBB7"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=400x300" alt="Triangle - Drinking Giraffe 50s color illustration retro simple texture vintage wood">
  </noscript>
  <img alt="Triangle - Drinking Giraffe 50s color illustration retro simple texture vintage wood" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/9964/screenshots/17408159/media/2a182ab87b4a6bc428cbaadc817aa7a8.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17408159-Triangle-Drinking-Giraffe">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17408159-Triangle-Drinking-Giraffe">
        <span class="accessibility-text">View Triangle - Drinking Giraffe</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Triangle - Drinking Giraffe</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17408159   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17408159, {
          likes_count: 115,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/jamesGraves">
            <img class="photo lazyload" alt="Visual Jams" width="24" height="24" data-src="https://cdn.dribbble.com/users/9964/avatars/mini/c527426f553781523b10fcf2ba9f223a.png?1518125537" src="" />
            <span class="display-name">Visual Jams</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17408159  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17408159, {
          likes_count: 115,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        115
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      15.8k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459719" data-thumbnail-id="17459719"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #031009"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=400x300" alt="Parkly font highcontrast simplebits type typedesign vintage">
  </noscript>
  <img alt="Parkly font highcontrast simplebits type typedesign vintage" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/1/screenshots/17459719/media/e636b700f17e46e1f6b0855c43d00365.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459719-Parkly">
        <span class="accessibility-text">View Parkly</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Parkly</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459719   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459719, {
          likes_count: 78,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/simplebits">
            <img class="photo lazyload" alt="Dan Cederholm" width="24" height="24" data-src="https://cdn.dribbble.com/users/1/avatars/mini/f887ea7ef0450f5bcd30ac1c680a25a5.png?1639507167" src="" />
            <span class="display-name">Dan Cederholm</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459719  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459719, {
          likes_count: 78,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        78
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      12.8k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459253" data-thumbnail-id="17459253"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #020203"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=400x300" alt="Atomic Rebrand Illustrations brand identity branding character color colors design identity illustration">
  </noscript>
  <img alt="Atomic Rebrand Illustrations brand identity branding character color colors design identity illustration" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=800x600 800w" data-src="https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/1738394/screenshots/17459253/media/8eb3d1bcc8d7a84cf3aa11ab3fd82f79.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459253-Atomic-Rebrand-Illustrations">
        <span class="accessibility-text">View Atomic Rebrand Illustrations</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Atomic Rebrand Illustrations</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459253   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459253, {
          likes_count: 91,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/spencergabor">
            <img class="photo lazyload" alt="Spencer Gabor" width="24" height="24" data-src="https://cdn.dribbble.com/users/1738394/avatars/mini/2c007a7692990a4f1ec1d2542453b778.png?1536613412" src="" />
            <span class="display-name">Spencer Gabor</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459253  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459253, {
          likes_count: 91,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        91
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      12.8k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17458368" data-thumbnail-id="17458368"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #FFFFFE"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=400x300" alt="Monday.com / Logo proposal branding design illustration letter letter m logo logo proposal logotype m logo mark monday monogram overlay symbol typography">
  </noscript>
  <img alt="Monday.com / Logo proposal branding design illustration letter letter m logo logo proposal logotype m logo mark monday monogram overlay symbol typography" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/230124/screenshots/17458368/media/dbdc0987d23865a76d1b191c285866e1.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17458368-Monday-com-Logo-proposal">
        <span class="accessibility-text">View Monday.com / Logo proposal</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Monday.com / Logo proposal</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17458368   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458368, {
          likes_count: 148,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/Kakhadzen">
            <img class="photo lazyload" alt="Kakha Kakhadzen" width="24" height="24" data-src="https://cdn.dribbble.com/users/230124/avatars/mini/999ed09dc97f840f7aef7347217b1147.jpg?1483316271" src="" />
            <span class="display-name">Kakha Kakhadzen</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17458368  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458368, {
          likes_count: 148,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        148
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      22.3k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459006" data-thumbnail-id="17459006"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video "
    data-video-teaser-small="https://cdn.dribbble.com/users/1776236/videos/272123/synchronized_spacelab_small_preview.mp4"
    data-video-teaser-large="https://cdn.dribbble.com/users/1776236/videos/272123/synchronized_spacelab_large_preview.mp4"
    data-video-teaser-xlarge="https://cdn.dribbble.com/users/1776236/videos/272123/synchronized_spacelab_xlarge_preview.mp4"
>
      <figure
    style="background-color: #FEFEFE"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=400x300" alt="Spacelab Architecture Design Studio grid ui ux video web website">
  </noscript>
  <img alt="Spacelab Architecture Design Studio grid ui ux video web website" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/1776236/screenshots/17459006/synchronized_spacelab.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17459006-Spacelab-Architecture-Design-Studio">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459006-Spacelab-Architecture-Design-Studio">
        <span class="accessibility-text">View Spacelab Architecture Design Studio</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Spacelab Architecture Design Studio</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459006   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459006, {
          likes_count: 131,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/Synchronized">
            <img class="photo lazyload" alt="Synchronized" width="24" height="24" data-src="https://cdn.dribbble.com/users/1776236/avatars/mini/060a79c36e7dde78e4a0b65b8b4dd275.jpg?1497709423" src="" />
            <span class="display-name">Synchronized</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-team">Team</span>
</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459006  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459006, {
          likes_count: 131,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        131
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      12.6k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17455370" data-thumbnail-id="17455370"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #FAF4E5"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=400x300" alt="Bees animal bee bees branding brandmark cute geometric honey illustration insect logo logo options logotype mascot modern logo nature options vector wing wings">
  </noscript>
  <img alt="Bees animal bee bees branding brandmark cute geometric honey illustration insect logo logo options logotype mascot modern logo nature options vector wing wings" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/1940055/screenshots/17455370/media/80104edc0b92efd0af346b63fdfbea43.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17455370-Bees">
        <span class="accessibility-text">View Bees</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Bees</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17455370   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17455370, {
          likes_count: 114,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/stay_heavy">
            <img class="photo lazyload" alt="Konstantin Reshetnikov" width="24" height="24" data-src="https://cdn.dribbble.com/users/1940055/avatars/mini/a804f37da3bf254602ee1167b162f846.jpg?1510316907" src="" />
            <span class="display-name">Konstantin Reshetnikov</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17455370  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17455370, {
          likes_count: 114,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        114
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      14.9k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459537" data-thumbnail-id="17459537"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  multi-shot"
>
      <figure
    style="background-color: #FFFFFF"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=400x300" alt="Tecnologías Gallo Rojo animal logo bird chicken creative it logo negative space red rooster security simple tech technology">
  </noscript>
  <img alt="Tecnologías Gallo Rojo animal logo bird chicken creative it logo negative space red rooster security simple tech technology" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/559871/screenshots/17459537/media/723bc1f0c1c2ff9e70747524fb9fc573.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17459537-Tecnolog-as-Gallo-Rojo">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459537-Tecnolog-as-Gallo-Rojo">
        <span class="accessibility-text">View Tecnologías Gallo Rojo</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Tecnologías Gallo Rojo</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459537   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459537, {
          likes_count: 84,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/KreaTank">
            <img class="photo lazyload" alt="Daniel Bodea / Kreatank" width="24" height="24" data-src="https://cdn.dribbble.com/users/559871/avatars/mini/045e58def38407ce9b6c6cc5a84d5810.png?1642525867" src="" />
            <span class="display-name">Daniel Bodea / Kreatank</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459537  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459537, {
          likes_count: 84,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        84
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      9.9k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17456494" data-thumbnail-id="17456494"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video "
    data-video-teaser-small="https://cdn.dribbble.com/users/10046452/videos/271955/go_trade_1600x1200_small_preview.mp4"
    data-video-teaser-large="https://cdn.dribbble.com/users/10046452/videos/271955/go_trade_1600x1200_large_preview.mp4"
    data-video-teaser-xlarge="https://cdn.dribbble.com/users/10046452/videos/271955/go_trade_1600x1200_xlarge_preview.mp4"
>
      <figure
    style="background-color: #05070D"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=400x300" alt="Go Trade - Live Project on Webflow animation css design development front-end halo lab interface nocode product scroll service ui ux web">
  </noscript>
  <img alt="Go Trade - Live Project on Webflow animation css design development front-end halo lab interface nocode product scroll service ui ux web" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/10046452/screenshots/17456494/go_trade_1600x1200.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17456494-Go-Trade-Live-Project-on-Webflow">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17456494-Go-Trade-Live-Project-on-Webflow">
        <span class="accessibility-text">View Go Trade - Live Project on Webflow</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Go Trade - Live Project on Webflow</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17456494   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17456494, {
          likes_count: 81,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/halolab">
            <img class="photo lazyload" alt="Halo Lab ✨" width="24" height="24" data-src="https://cdn.dribbble.com/users/466659/avatars/mini/3cee655a77f74aa632b14ee24e645f4f.png?1587039671" src="" />
            <span class="display-name">Halo Lab ✨</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-team">Team</span>
</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17456494  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17456494, {
          likes_count: 81,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        81
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      5.7k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459154" data-thumbnail-id="17459154"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #FFF8E9"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=400x300" alt="Wave Logo abstract blue brand branding clean color drop gradient graphic identity logo logos minimalist ocean sea water wave">
  </noscript>
  <img alt="Wave Logo abstract blue brand branding clean color drop gradient graphic identity logo logos minimalist ocean sea water wave" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/60166/screenshots/17459154/media/8c38e117315b2b6c251aa0201f863e70.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459154-Wave-Logo">
        <span class="accessibility-text">View Wave Logo</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Wave Logo</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459154   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459154, {
          likes_count: 106,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/yoga">
            <img class="photo lazyload" alt="Yoga Perdana - Logo Designer" width="24" height="24" data-src="https://cdn.dribbble.com/users/60166/avatars/mini/411f676c38eea48e0c6382e6d250c9e3.jpg?1534485559" src="" />
            <span class="display-name">Yoga Perdana - Logo Designer</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459154  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459154, {
          likes_count: 106,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        106
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      10.3k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459099" data-thumbnail-id="17459099"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #060705"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=400x300" alt="Riften Seal badge blades custom type dagger elder scrolls eyes gaming guild icon illustration logo medieval riften seal skyrim swords symbol thieves thieves guild type">
  </noscript>
  <img alt="Riften Seal badge blades custom type dagger elder scrolls eyes gaming guild icon illustration logo medieval riften seal skyrim swords symbol thieves thieves guild type" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/544452/screenshots/17459099/media/a5c70700be5248d0743f7c53484c79bc.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459099-Riften-Seal">
        <span class="accessibility-text">View Riften Seal</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Riften Seal</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459099   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459099, {
          likes_count: 81,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/ethnfndr">
            <img class="photo lazyload" alt="Ethan Fender" width="24" height="24" data-src="https://cdn.dribbble.com/users/544452/avatars/mini/3df7169ebff401dfcca2e09e179ccda6.png?1633368151" src="" />
            <span class="display-name">Ethan Fender</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459099  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459099, {
          likes_count: 81,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        81
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      10.4k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17450894" data-thumbnail-id="17450894"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #0B0F0B"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=400x300" alt="Naples, Florida agrib buildings city illustration florida geometric illustration green homes house illustration landscape design landscapes minimal minimal illustration naples negative space orange oranges palm trees sunny warm weather">
  </noscript>
  <img alt="Naples, Florida agrib buildings city illustration florida geometric illustration green homes house illustration landscape design landscapes minimal minimal illustration naples negative space orange oranges palm trees sunny warm weather" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/1207383/screenshots/17450894/media/6927cda6c95cce6f5322f246fd8b7c20.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17450894-Naples-Florida">
        <span class="accessibility-text">View Naples, Florida</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Naples, Florida</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17450894   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17450894, {
          likes_count: 77,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/agrib">
            <img class="photo lazyload" alt="Anthony Gribben" width="24" height="24" data-src="https://cdn.dribbble.com/users/1207383/avatars/mini/90665c4abc00690146fe0fceda660727.png?1631199006" src="" />
            <span class="display-name">Anthony Gribben</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17450894  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17450894, {
          likes_count: 77,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        77
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      7.5k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17458635" data-thumbnail-id="17458635"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video "
    data-video-teaser-small="https://cdn.dribbble.com/users/22691/videos/272115/crezco_payments_branding_design_tubik_small_preview.mp4"
    data-video-teaser-large="https://cdn.dribbble.com/users/22691/videos/272115/crezco_payments_branding_design_tubik_large_preview.mp4"
    data-video-teaser-xlarge="https://cdn.dribbble.com/users/22691/videos/272115/crezco_payments_branding_design_tubik_xlarge_preview.mp4"
>
      <figure
    style="background-color: #110D0A"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=400x300" alt="Crezco Brand Design advertising animation billboard brand brand identity branding design finance financial graphic design identity design interface logo logo design marketing payment ui ux video web design">
  </noscript>
  <img alt="Crezco Brand Design advertising animation billboard brand brand identity branding design finance financial graphic design identity design interface logo logo design marketing payment ui ux video web design" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/22691/screenshots/17458635/crezco_payments_branding_design_tubik.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
          <div class="is-rebound shot-thumbnail-extras-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM8.16504 6.24902V5.06161C8.16585 4.89576 8.09142 4.73031 7.94336 4.60411C7.64766 4.35128 7.16872 4.35128 6.87302 4.60411L3.31087 7.6505L6.87302 10.6969C7.02107 10.8231 7.21443 10.8866 7.40819 10.8866C7.60195 10.8866 7.79531 10.8235 7.94336 10.6969C8.09142 10.5707 8.16585 10.4048 8.16504 10.2394V8.98145C10.8239 9.1121 12.2102 10.7855 12.2102 10.7855C12.2102 8.0174 10.5161 6.43227 8.16504 6.24902Z" fill="white"></path>
</svg>

          </div>
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17458635-Crezco-Brand-Design">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17458635-Crezco-Brand-Design">
        <span class="accessibility-text">View Crezco Brand Design</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Crezco Brand Design</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17458635   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458635, {
          likes_count: 77,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/Tubik">
            <img class="photo lazyload" alt="tubik" width="24" height="24" data-src="https://cdn.dribbble.com/users/418188/avatars/mini/427ef1baf4b90c9ccdd2a25fa272fe73.jpg?1635929741" src="" />
            <span class="display-name">tubik</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-team">Team</span>
</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17458635  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458635, {
          likes_count: 77,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        77
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      13.1k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17457462" data-thumbnail-id="17457462"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #13190E"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=400x300" alt="Clutter #2 branding furniture home illustration storage">
  </noscript>
  <img alt="Clutter #2 branding furniture home illustration storage" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/19849/screenshots/17457462/media/f64ca70c6ee70f2a795b433d01625e06.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17457462-Clutter-2">
        <span class="accessibility-text">View Clutter #2</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Clutter #2</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17457462   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17457462, {
          likes_count: 90,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/JulianBurford">
            <img class="photo lazyload" alt="Julian Burford" width="24" height="24" data-src="https://cdn.dribbble.com/users/19849/avatars/mini/75cb2854fcb9a1b959750bf5d7e9c00b.png?1606949656" src="" />
            <span class="display-name">Julian Burford</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17457462  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17457462, {
          likes_count: 90,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        90
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      22.7k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17461318" data-thumbnail-id="17461318"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #6F1503"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=400x300" alt="Poncho&#39;s Tee familia illustration lettering restaurant t-shirt tee tshirt type">
  </noscript>
  <img alt="Poncho&#39;s Tee familia illustration lettering restaurant t-shirt tee tshirt type" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/334782/screenshots/17461318/media/08e68982bd231ff7d7f6b297675792ae.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17461318-Poncho-s-Tee">
        <span class="accessibility-text">View Poncho&#39;s Tee</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Poncho&#39;s Tee</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17461318   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17461318, {
          likes_count: 9,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/youbringfire">
            <img class="photo lazyload" alt="Scott Biersack" width="24" height="24" data-src="https://cdn.dribbble.com/users/334782/avatars/mini/8c1d974b2b4ba49cf0cf7354927e6928.jpg?1628783167" src="" />
            <span class="display-name">Scott Biersack</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17461318  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17461318, {
          likes_count: 9,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        9
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      332
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17458031" data-thumbnail-id="17458031"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  multi-shot"
>
      <figure
    style="background-color: #DEDEEF"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=400x300" alt="Syntropy Logo Design brand identity branding crypto logo logo design">
  </noscript>
  <img alt="Syntropy Logo Design brand identity branding crypto logo logo design" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/49803/screenshots/17458031/media/df7ea46a7552fd1bd64d2bae9ef8d501.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17458031-Syntropy-Logo-Design">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17458031-Syntropy-Logo-Design">
        <span class="accessibility-text">View Syntropy Logo Design</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Syntropy Logo Design</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17458031   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458031, {
          likes_count: 88,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/kairevicius">
            <img class="photo lazyload" alt="Paulius Kairevicius" width="24" height="24" data-src="https://cdn.dribbble.com/users/49803/avatars/mini/8c977e884476618a1eb3fa0aeae138ef.png?1537012811" src="" />
            <span class="display-name">Paulius Kairevicius</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17458031  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458031, {
          likes_count: 88,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        88
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      11.5k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17452474" data-thumbnail-id="17452474"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video multi-shot"
    data-video-teaser-small="https://cdn.dribbble.com/users/288004/videos/271356/shot_1a_small_preview.mp4"
    data-video-teaser-large="https://cdn.dribbble.com/users/288004/videos/271356/shot_1a_large_preview.mp4"
    data-video-teaser-xlarge="https://cdn.dribbble.com/users/288004/videos/271356/shot_1a_xlarge_preview.mp4"
>
      <figure
    style="background-color: #060606"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=400x300" alt="Upstox: Indian trading platform design fintech india stocks ui ux">
  </noscript>
  <img alt="Upstox: Indian trading platform design fintech india stocks ui ux" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/288004/screenshots/17452474/shot_1a.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17452474-Upstox-Indian-trading-platform">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17452474-Upstox-Indian-trading-platform">
        <span class="accessibility-text">View Upstox: Indian trading platform</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Upstox: Indian trading platform</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17452474   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17452474, {
          likes_count: 66,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/metalab">
            <img class="photo lazyload" alt="MetaLab " width="24" height="24" data-src="https://cdn.dribbble.com/users/123550/avatars/mini/f025e8fbea91e6e2d7777938f98ae855.png?1587489166" src="" />
            <span class="display-name">MetaLab </span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-team">Team</span>
</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17452474  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17452474, {
          likes_count: 66,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        66
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      9.5k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459551" data-thumbnail-id="17459551"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video "
    data-video-teaser-small="https://cdn.dribbble.com/users/7842027/videos/272149/bubblez_stuff_anima_color_corrected_iii_small_preview.mp4"
    data-video-teaser-large="https://cdn.dribbble.com/users/7842027/videos/272149/bubblez_stuff_anima_color_corrected_iii_large_preview.mp4"
    data-video-teaser-xlarge="https://cdn.dribbble.com/users/7842027/videos/272149/bubblez_stuff_anima_color_corrected_iii_xlarge_preview.mp4"
>
      <figure
    style="background-color: #02050A"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=400x300" alt="3D Animation Homepage For A Creativity Workshop Promo 3d after effects animation brain activity bubble cinema 4d creativity workshop design event offline homepage imagination inspiration landing page uiux wave warp web design wiggle paths zajno">
  </noscript>
  <img alt="3D Animation Homepage For A Creativity Workshop Promo 3d after effects animation brain activity bubble cinema 4d creativity workshop design event offline homepage imagination inspiration landing page uiux wave warp web design wiggle paths zajno" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=800x600 800w" data-src="https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/7842027/screenshots/17459551/bubblez_stuff_anima_color_corrected_iii.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
          <div class="is-rebound shot-thumbnail-extras-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM8.16504 6.24902V5.06161C8.16585 4.89576 8.09142 4.73031 7.94336 4.60411C7.64766 4.35128 7.16872 4.35128 6.87302 4.60411L3.31087 7.6505L6.87302 10.6969C7.02107 10.8231 7.21443 10.8866 7.40819 10.8866C7.60195 10.8866 7.79531 10.8235 7.94336 10.6969C8.09142 10.5707 8.16585 10.4048 8.16504 10.2394V8.98145C10.8239 9.1121 12.2102 10.7855 12.2102 10.7855C12.2102 8.0174 10.5161 6.43227 8.16504 6.24902Z" fill="white"></path>
</svg>

          </div>
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17459551-3D-Animation-Homepage-For-A-Creativity-Workshop-Promo">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459551-3D-Animation-Homepage-For-A-Creativity-Workshop-Promo">
        <span class="accessibility-text">View 3D Animation Homepage For A Creativity Workshop Promo</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">3D Animation Homepage For A Creativity Workshop Promo</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459551   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459551, {
          likes_count: 75,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/zajno">
            <img class="photo lazyload" alt="Zajno Crew" width="24" height="24" data-src="https://cdn.dribbble.com/users/845499/avatars/mini/466762084bf3466293fba47c63ba55f7.jpg?1452183579" src="" />
            <span class="display-name">Zajno Crew</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-team">Team</span>
</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459551  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459551, {
          likes_count: 75,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        75
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      6.1k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17459093" data-thumbnail-id="17459093"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #060003"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=400x300" alt="Flamingo art bird circleart flamingo illustration impressionism inspire landscape nature negative proart prok-art prokopenko relax scene sky stars trend">
  </noscript>
  <img alt="Flamingo art bird circleart flamingo illustration impressionism inspire landscape nature negative proart prok-art prokopenko relax scene sky stars trend" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=800x600 800w" data-src="https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/518045/screenshots/17459093/media/16184104a4110bb083afa0665652fd60.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17459093-Flamingo">
        <span class="accessibility-text">View Flamingo</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Flamingo</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17459093   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459093, {
          likes_count: 63,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/Pro_Art">
            <img class="photo lazyload" alt="Andrey Prokopenko" width="24" height="24" data-src="https://cdn.dribbble.com/users/518045/avatars/mini/f5bdbfa0a8623f5706df681f34236816.jpg?1410441049" src="" />
            <span class="display-name">Andrey Prokopenko</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17459093  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17459093, {
          likes_count: 63,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        63
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      5.9k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17457892" data-thumbnail-id="17457892"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #001F54"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=400x300" alt="Gallery Owner artist digital folioart gallery illustration mercedes debellard portrait realist woman">
  </noscript>
  <img alt="Gallery Owner artist digital folioart gallery illustration mercedes debellard portrait realist woman" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=800x600 800w" data-src="https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/730703/screenshots/17457892/media/86726fa64fbc883332277273e7dd416f.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17457892-Gallery-Owner">
        <span class="accessibility-text">View Gallery Owner</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Gallery Owner</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17457892   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17457892, {
          likes_count: 76,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/Folio">
            <img class="photo lazyload" alt="Folio Illustration Agency" width="24" height="24" data-src="https://cdn.dribbble.com/users/730703/avatars/mini/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934" src="" />
            <span class="display-name">Folio Illustration Agency</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17457892  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17457892, {
          likes_count: 76,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        76
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      7.8k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17457215" data-thumbnail-id="17457215"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #090A0C"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=400x300" alt="Rebaid – Dashboard affiliate audience campaign discount influencers marketing promotion rebaid redemptions report shoppers">
  </noscript>
  <img alt="Rebaid – Dashboard affiliate audience campaign discount influencers marketing promotion rebaid redemptions report shoppers" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/279993/screenshots/17457215/media/9e9c32c02ee038b8abe10381358c9afe.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17457215-Rebaid-Dashboard">
        <span class="accessibility-text">View Rebaid – Dashboard</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Rebaid – Dashboard</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17457215   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17457215, {
          likes_count: 159,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/avilov">
            <img class="photo lazyload" alt="Anton Avilov" width="24" height="24" data-src="https://cdn.dribbble.com/users/279993/avatars/mini/7dd7d1ddd0e2f2ae4f2add6e12a201f0.jpg?1551022867" src="" />
            <span class="display-name">Anton Avilov</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17457215  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17457215, {
          likes_count: 159,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        159
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      15.4k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17460038" data-thumbnail-id="17460038"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #89B7FD"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=400x300" alt="A winter’s tale ❄️ art crane illustration redcrownedcrane snow vector winter">
  </noscript>
  <img alt="A winter’s tale ❄️ art crane illustration redcrownedcrane snow vector winter" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/1391772/screenshots/17460038/media/ccadc3463a043a347e9584af9be44789.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17460038-A-winter-s-tale">
        <span class="accessibility-text">View A winter’s tale ❄️</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">A winter’s tale ❄️</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17460038   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17460038, {
          likes_count: 14,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/ksenishok">
            <img class="photo lazyload" alt="Ksenia Shokorova" width="24" height="24" data-src="https://cdn.dribbble.com/users/1391772/avatars/mini/7cf91fa66142b267489b1736ba48b726.jpg?1614048033" src="" />
            <span class="display-name">Ksenia Shokorova</span>
</a>          
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17460038  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17460038, {
          likes_count: 14,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        14
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      870
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17458338" data-thumbnail-id="17458338"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  multi-shot"
>
      <figure
    style="background-color: #FBFAFA"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=400x300" alt="Pocket Chef - Light &amp; Dark Theme food mobile protopie prototype recipe ui ux">
  </noscript>
  <img alt="Pocket Chef - Light &amp; Dark Theme food mobile protopie prototype recipe ui ux" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/641372/screenshots/17458338/media/176cbe27eb67e56b9240ead86b90ca94.png?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
        <div class="loading-indicator shot-thumbnail-extras-icon"></div>
    <a class="animated-target" href="/shots/17458338-Pocket-Chef-Light-Dark-Theme">
      <span class="accessibility-text">Shot Link</span>
</a>
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17458338-Pocket-Chef-Light-Dark-Theme">
        <span class="accessibility-text">View Pocket Chef - Light &amp; Dark Theme</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Pocket Chef - Light &amp; Dark Theme</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17458338   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458338, {
          likes_count: 97,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/unfold">
            <img class="photo lazyload" alt="unfold " width="24" height="24" data-src="https://cdn.dribbble.com/users/414979/avatars/mini/1305d804ae3e46b11fd1389fac65cccf.png?1566958767" src="" />
            <span class="display-name">unfold </span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-team">Team</span>
</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17458338  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17458338, {
          likes_count: 97,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        97
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      9.4k
    </span>
  </div>
</div>

    </div>



</li>


<li
  id="screenshot-17453550" data-thumbnail-id="17453550"
  class="shot-thumbnail js-thumbnail shot-thumbnail-container      "
  data-ad-data=""
  data-boost-id=""
  data-is-boost-fallback=""
>
  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  "
>
      <figure
    style="background-color: #A44E05"
  class="js-thumbnail-placeholder shot-thumbnail-placeholder"
>
  <noscript>
    <img src="https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=400x300" alt="Year of the Tiger animal animals bigcat cat china chinese chinese new year cny design distress flat icon illustration logo lunar tiger tigers type typography vector">
  </noscript>
  <img alt="Year of the Tiger animal animals bigcat cat china chinese chinese new year cny design distress flat icon illustration logo lunar tiger tigers type typography vector" width="330" height="247" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=140x105 140w, https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=200x150 200w, https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=300x225 300w, https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=400x300 400w, https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=600x450 600w, https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=800x600 800w, https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=1000x750 1000w, https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=1200x900 1200w" data-src="https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=400x300" data-sizes="auto" class=" lazyload" src="https://cdn.dribbble.com/users/2034498/screenshots/17453550/media/31ec88273ce6f25f913bd6967ec7aa7e.jpg?compress=1&amp;resize=400x300" />
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

      <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/17453550-Year-of-the-Tiger">
        <span class="accessibility-text">View Year of the Tiger</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">Year of the Tiger</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-17453550   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17453550, {
          likes_count: 53,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>


    <div class="shot-details-container js-shot-details-container">
        <div class="user-information">
          <a class="hoverable url" rel="contact" href="/georgepwilson">
            <img class="photo lazyload" alt="George P. Wilson" width="24" height="24" data-src="https://cdn.dribbble.com/users/2034498/avatars/mini/a6702290b9a62712369bca7fcbf37b91.png?1573255640" src="" />
            <span class="display-name">George P. Wilson</span>
</a>          <a class="badge-link" href="/pro">
  <span class="badge badge-pro">Pro</span>

</a>
        </div>
        <div class="shot-statistics-container js-shot-statistics">

    <div class="shot-statistic js-shot-likes-container">
        

  <div class="like-action-17453550  compact-true shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(17453550, {
          likes_count: 53,
          liked: false
      });
      }
    </script>
      <a class=" tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="true" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

      <span class="js-shot-likes-count color-deep-blue-sea-light-20 font-weight-500">
        53
      </span>
    </div>
  <div class="shot-statistic js-shot-views-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon fill-current shot-tools-icon">
<path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path>
</svg>

    <span class="js-shot-views-count color-deep-blue-sea-light-20 font-weight-500">
      3.3k
    </span>
  </div>
</div>

    </div>



</li>


<script>
var newestShots = [{
    id: 17459562,
    title: "macindows_is_back.idc",
    path: "/shots/17459562-macindows-is-back-idc",
    published_at: 'about 9 hours ago',
    is_rebound: true,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '19.7k',
    comments_count: '2',
    likes_count: '156',
    liked: false,
    ga: [["zamax","UA-91354301-1"]]
  },{
    id: 17408159,
    title: "Triangle - Drinking Giraffe",
    path: "/shots/17408159-Triangle-Drinking-Giraffe",
    published_at: 'about 10 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '17.9k',
    comments_count: '4',
    likes_count: '121',
    liked: false,
    ga: []
  },{
    id: 17459719,
    title: "Parkly",
    path: "/shots/17459719-Parkly",
    published_at: 'about 10 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '14.9k',
    comments_count: '2',
    likes_count: '83',
    liked: false,
    ga: []
  },{
    id: 17459253,
    title: "Atomic Rebrand Illustrations",
    path: "/shots/17459253-Atomic-Rebrand-Illustrations",
    published_at: 'about 11 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '13.3k',
    comments_count: '3',
    likes_count: '93',
    liked: false,
    ga: []
  },{
    id: 17458368,
    title: "Monday.com / Logo proposal",
    path: "/shots/17458368-Monday-com-Logo-proposal",
    published_at: 'about 13 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '27.1k',
    comments_count: '8',
    likes_count: '160',
    liked: false,
    ga: []
  },{
    id: 17459006,
    title: "Spacelab Architecture Design Studio",
    path: "/shots/17459006-Spacelab-Architecture-Design-Studio",
    published_at: 'about 12 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '15.7k',
    comments_count: '11',
    likes_count: '141',
    liked: false,
    ga: [["Synchronized","UA-101192899-1"],["Synchronized","UA-101192899-1"]]
  },{
    id: 17455370,
    title: "Bees",
    path: "/shots/17455370-Bees",
    published_at: 'about 12 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '17.9k',
    comments_count: '7',
    likes_count: '118',
    liked: false,
    ga: []
  },{
    id: 17459537,
    title: "Tecnologías Gallo Rojo",
    path: "/shots/17459537-Tecnolog-as-Gallo-Rojo",
    published_at: 'about 10 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '9.9k',
    comments_count: '2',
    likes_count: '84',
    liked: false,
    ga: []
  },{
    id: 17456494,
    title: "Go Trade - Live Project on Webflow",
    path: "/shots/17456494-Go-Trade-Live-Project-on-Webflow",
    published_at: 'about 8 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '5.7k',
    comments_count: '2',
    likes_count: '82',
    liked: false,
    ga: [["halolab","UA-42885094-2"],["halocode","UA-42885094-9"]]
  },{
    id: 17459154,
    title: "Wave Logo",
    path: "/shots/17459154-Wave-Logo",
    published_at: 'about 11 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '11.6k',
    comments_count: '6',
    likes_count: '111',
    liked: false,
    ga: [["yoga","UA-54316933-3"]]
  },{
    id: 17459099,
    title: "Riften Seal",
    path: "/shots/17459099-Riften-Seal",
    published_at: 'about 11 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '11.4k',
    comments_count: '6',
    likes_count: '84',
    liked: false,
    ga: []
  },{
    id: 17450894,
    title: "Naples, Florida",
    path: "/shots/17450894-Naples-Florida",
    published_at: 'about 12 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '9k',
    comments_count: '2',
    likes_count: '80',
    liked: false,
    ga: []
  },{
    id: 17458635,
    title: "Crezco Brand Design",
    path: "/shots/17458635-Crezco-Brand-Design",
    published_at: 'about 12 hours ago',
    is_rebound: true,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '13.4k',
    comments_count: '2',
    likes_count: '78',
    liked: false,
    ga: [["Tubik","UA-57384682-1"],["tubik_ux","UA-59915233-2"]]
  },{
    id: 17457462,
    title: "Clutter #2",
    path: "/shots/17457462-Clutter-2",
    published_at: 'about 15 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '24.4k',
    comments_count: '3',
    likes_count: '92',
    liked: false,
    ga: []
  },{
    id: 17461318,
    title: "Poncho's Tee",
    path: "/shots/17461318-Poncho-s-Tee",
    published_at: 'about 5 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '1.8k',
    comments_count: '2',
    likes_count: '20',
    liked: false,
    ga: []
  },{
    id: 17458031,
    title: "Syntropy Logo Design",
    path: "/shots/17458031-Syntropy-Logo-Design",
    published_at: 'about 13 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '14.1k',
    comments_count: '6',
    likes_count: '93',
    liked: false,
    ga: [["kairevicius","UA-54342144-2"]]
  },{
    id: 17452474,
    title: "Upstox: Indian trading platform",
    path: "/shots/17452474-Upstox-Indian-trading-platform",
    published_at: 'about 13 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '9.6k',
    comments_count: '4',
    likes_count: '67',
    liked: false,
    ga: [["metalab","UA-134258-4"]]
  },{
    id: 17459551,
    title: "3D Animation Homepage For A Creativity Workshop Promo",
    path: "/shots/17459551-3D-Animation-Homepage-For-A-Creativity-Workshop-Promo",
    published_at: 'about 10 hours ago',
    is_rebound: true,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '8k',
    comments_count: '11',
    likes_count: '80',
    liked: false,
    ga: [["zajno","UA-61786737-2"]]
  },{
    id: 17459093,
    title: "Flamingo",
    path: "/shots/17459093-Flamingo",
    published_at: 'about 11 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '6.7k',
    comments_count: '2',
    likes_count: '65',
    liked: false,
    ga: [["Pro_Art","UA-114254418-1"]]
  },{
    id: 17457892,
    title: "Gallery Owner",
    path: "/shots/17457892-Gallery-Owner",
    published_at: 'about 14 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '10.6k',
    comments_count: '1',
    likes_count: '85',
    liked: false,
    ga: []
  },{
    id: 17457215,
    title: "Rebaid – Dashboard",
    path: "/shots/17457215-Rebaid-Dashboard",
    published_at: 'about 15 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '16.1k',
    comments_count: '6',
    likes_count: '164',
    liked: false,
    ga: []
  },{
    id: 17460038,
    title: "A winter’s tale ❄️",
    path: "/shots/17460038-A-winter-s-tale",
    published_at: 'about 9 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '3.5k',
    comments_count: '1',
    likes_count: '28',
    liked: false,
    ga: []
  },{
    id: 17458338,
    title: "Pocket Chef - Light \u0026 Dark Theme",
    path: "/shots/17458338-Pocket-Chef-Light-Dark-Theme",
    published_at: 'about 12 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '10.1k',
    comments_count: '6',
    likes_count: '98',
    liked: false,
    ga: [["unfold","UA-163502301-1"],["jbento","UA-83644380-2"]]
  },{
    id: 17453550,
    title: "Year of the Tiger",
    path: "/shots/17453550-Year-of-the-Tiger",
    published_at: 'about 11 hours ago',
    is_rebound: false,
    rebounds_count: 0,
    attachments_count: 0,
    view_count: '3.5k',
    comments_count: '4',
    likes_count: '53',
    liked: false,
    ga: []
  }];

if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
  Dribbble.Shots.add(newestShots);
  Dribbble.TeaserStats.init(newestShots);

    Dribbble.Thumbnails.cursor = '1644320698.169763';
}
else {
  if (typeof newShots === "undefined") {
    var newShots = [];
  }
  newShots = newShots.concat(newestShots);
}

</script>


</ol>

  <div id="boosted-shots-app"></div>

  <div class="page">
  <div role="navigation" aria-label="Pagination" class="pagination"><span class="previous_page disabled" aria-disabled="true">&larr; Prev</span> <a class="next_page" rel="next" href="/shots?page=2">Next &rarr;</a></div>
</div>


<div class="infinite shot-grid-width container-fluid infinite-login-actions">
      <a class="form-sub sign-up-to-continue" data-signup-trigger="true" data-href="/signup/new" data-context="homepage-load-more" href="/signup/new">Sign up to continue</a>
<a href="/session/new">or sign in</a>

</div>

<div class="loading-more">
  <span class="processing">Loading more…</span>
</div>

<div class="back-to-top" style="display: none">
  <a href="#">
    <img
      width="50"
      height="50"
      class="lazyloading-hidden lazyload"
      data-src="https://cdn.dribbble.com/assets/icon-backtotop-d9d209c36a169637612a8fe4a1f15ab9e5763a20dbe5b7706df4e23aadf6052e.png"
      alt="Back to top"
    />
  </a>
</div>






</div>




    </div>
  </div>
</div>

<hr />

<div id="footer" class="site-footer js-site-footer" role="contentinfo">
  <div class="container-large">
      <div class="footer-main-content">
        <div>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 24" role="img" aria-labelledby="anacjvpw0rwawlxzgvjjsn98le85gij2" class="icon dribbble-wordmark">
<title id="anacjvpw0rwawlxzgvjjsn98le85gij2">Dribbble: the community for graphic design</title>
<path fill-rule="evenodd" clip-rule="evenodd" d="M95.8512 18.5141C91.8395 25.3156 85.4862 23.342 83.5781 21.7968C82.7661 22.3478 81.342 23.5554 79.4433 23.4161C75.3996 23.1192 73.9514 17.3405 73.9514 17.3405C73.9804 17.3636 72.747 17.7662 72.0802 17.759C72.0716 19.4536 70.6067 23.5018 66.6533 23.4501C62.217 23.3922 61.3151 16.7828 61.3151 16.7828C61.3151 16.7828 60.8736 17.3959 59.195 18.0064C59.2795 16.7045 59.2177 23.2519 53.9006 23.3481C49.6971 23.4242 48.5623 16.6809 48.5623 16.6809C48.5623 16.6809 47.8331 17.4385 46.4199 17.7012C46.5097 16.378 46.3637 23.3703 41.0459 23.3481C37.4523 23.3331 36.2242 19.1941 36.3197 18.6197C36.4416 17.8875 35.1052 23.4511 31.6145 23.3644C30.1739 23.322 29.1 22.2791 28.4261 20.8885C27.524 21.9209 26.2142 23.3644 24.7448 23.3644C22.1075 23.3644 20.9446 21.1584 21.1416 14.8577C21.1583 14.1105 21.1044 13.8165 20.3616 13.7047C19.9157 13.6304 19.459 13.4895 18.976 13.4152C18.8211 13.932 17.5076 23.1962 12.9912 23.372C11.476 23.4311 10.6475 22.1186 9.96715 21.1443C8.92417 22.5241 7.54738 23.4161 5.58603 23.4161C2.26365 23.4161 0 20.7302 0 17.417C0 14.1038 2.26365 11.4182 5.58603 11.4182C6.17345 11.4182 6.33836 11.5024 6.87502 11.659C5.77137 1.61058 8.37774 0.0401515 10.6578 0.0401515C12.8467 0.0401515 16.5863 5.12064 11.3244 18.0074C12.4926 21.8512 15.0111 21.6338 16.2214 13.7212C16.4676 12.1128 15.809 9.9423 16.8335 9.63937C18.7061 9.08575 18.9048 10.7468 19.7828 11.0235C20.7112 11.316 21.2531 11.2875 22.1444 11.4736C23.6674 11.771 24.2618 12.5892 24.0761 14.4113C23.8533 16.7171 23.4636 20.0729 24.652 20.4818C25.5091 20.779 27.0739 19.0016 27.3485 18.0291C27.623 17.0566 27.6803 16.7237 27.7047 16.0105C27.7419 14.4859 27.7884 13.3684 28.0484 12.2154C28.1597 11.7693 28.2865 11.4739 28.7912 11.4537C29.2066 11.4431 29.9661 11.318 30.3005 11.5782C30.7461 11.9131 30.6905 12.2529 30.6393 13.1471C30.121 25.8966 34.11 19.5319 35.2994 14.4357C34.876 8.67313 35.1667 0.145675 38.7779 0.00265405C40.6559 -0.0717249 41.4861 1.43282 41.5775 2.55581C41.8357 5.72757 40.3888 10.9815 38.4859 14.5148C37.3984 21.7242 43.2411 23.1498 44.1754 17.3952C42.6467 16.6684 40.9947 13.7265 42.339 12.2928C43.0934 11.4882 46.2335 12.6441 46.2849 15.1651C47.8252 14.7531 48.0308 13.8835 48.0522 14.0276C47.6287 8.265 48.0214 0.145749 51.6328 0.00272768C53.5106 -0.0716513 54.3408 1.43289 54.4321 2.55589C54.6904 5.72764 53.2435 10.9816 51.3408 14.5149C50.253 21.7243 56.096 23.1498 57.0301 17.3953C55.8983 17.1769 53.5091 14.0478 54.8876 12.2929C55.6243 11.3551 58.7528 13.3053 59.1032 15.2486C60.5829 14.8298 60.7838 13.9878 60.805 14.1296C60.3815 8.36712 60.7742 0.247876 64.3855 0.104854C66.2634 0.0304754 67.0936 1.53502 67.1849 2.65802C67.4432 5.82977 65.9962 11.0838 64.0933 14.6171C63.0058 21.8266 68.8485 23.2519 69.7829 17.4973C68.2276 17.2383 66.0171 13.9344 67.7962 12.2442C68.507 11.5689 71.2229 13.3219 71.8586 15.3218C72.742 15.2878 73.2918 14.9833 73.4097 14.9525C71.9995 8.18754 73.0493 0.0705829 76.9342 0.00282686C79.0338 -0.0337594 81.0867 1.13799 80.1856 7.57394C79.3256 13.7146 76.234 16.2916 76.2411 16.331C76.4211 17.0667 78.0074 23.2233 82.0023 19.9749C81.7955 19.5066 81.5885 19.0282 81.4728 18.4486C80.8107 15.0729 82.1112 11.2599 85.6462 10.6436C87.6715 10.2906 89.5793 11.2766 89.881 13.4996C90.3773 17.1371 87.0927 19.7715 85.8437 20.3429C85.2843 20.0251 90.9148 23.6362 94.2563 16.3995C94.45 15.9863 94.6837 16.0213 94.9863 16.2343C95.2 16.3847 96.4175 17.5379 95.8512 18.5141ZM8.00277 16.5233C7.83274 16.0149 7.48381 14.8949 7.36044 14.4096C6.68091 13.8187 6.19588 13.7227 5.32365 13.7227C3.38526 13.7227 2.24437 15.5148 2.24437 17.4473C2.24437 19.3798 3.48729 21.1722 5.42567 21.1722C7.10552 21.1722 8.38402 20.03 8.77408 18.4132C8.50106 17.7829 8.23024 17.2036 8.00277 16.5233ZM10.6103 2.70004C9.24825 2.70004 8.78622 5.94913 8.87589 8.72092C8.95519 11.1715 9.63996 13.329 9.99519 14.2956C10.0854 14.4168 10.0686 14.338 10.1491 14.4665C12.514 9.28488 11.5331 2.70004 10.6103 2.70004ZM38.9724 2.80209C37.212 2.60021 37.2233 9.93334 37.4419 11.5782C38.3561 10.1157 39.9444 3.1959 38.9724 2.80209V2.80209ZM51.827 2.80209C50.0667 2.60021 50.078 9.93334 50.2966 11.5782C51.2108 10.1157 52.7991 3.1959 51.827 2.80209ZM64.5798 2.90412C62.8194 2.70223 62.8307 10.0354 63.0494 11.6804C63.9635 10.2177 65.5518 3.2979 64.5798 2.90412V2.90412ZM77.1284 2.37283C74.3857 2.9236 75.0244 12.0682 75.4409 13.672C78.6717 9.23475 78.7381 2.20615 77.1284 2.37283V2.37283ZM87.4073 13.8005C87.268 13.2175 86.5707 12.9058 86.0894 12.9826C84.7123 13.1707 83.3767 14.8858 83.8937 17.497C84.0087 18.0786 84.2967 18.6138 84.2921 18.5961C87.3741 16.5285 87.636 14.8991 87.4073 13.8005ZM29.3312 9.43526C28.9376 9.43534 28.5528 9.31869 28.2255 9.10007C27.8982 8.88145 27.6431 8.57067 27.4924 8.20705C27.3417 7.84344 27.3023 7.4433 27.379 7.05726C27.4558 6.67122 27.6453 6.31661 27.9236 6.03827C28.2019 5.75994 28.5565 5.57039 28.9425 5.49359C29.3285 5.41679 29.7287 5.45619 30.0923 5.60681C30.456 5.75744 30.7668 6.01252 30.9854 6.33979C31.2041 6.66706 31.3208 7.05183 31.3208 7.44542C31.3208 7.70672 31.2693 7.96546 31.1693 8.20686C31.0694 8.44827 30.9228 8.66763 30.7381 8.8524C30.5533 9.03718 30.334 9.18375 30.0926 9.28376C29.8512 9.38377 29.5925 9.43525 29.3312 9.43526V9.43526Z"></path>
</svg>

            <span class="accessibility-text">Back to home page</span>
          </a>
          <div class="tagline">
            Dribbble is the world’s leading community for creatives to share, grow, and get hired.
          </div>
          <div class="social-links-container">
            <a href="/dribbble">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" role="img" class="icon fill-current">
<rect width="32" height="32" fill="black" fill-opacity="0"></rect>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"></path>
</svg>

              <span class="accessibility-text">Back to home page</span>
            </a>
            <a href="http://twitter.com/dribbble">
              <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="ao1hben7dtfjh3qldk1ydf8zjy19jh25" role="img" viewBox="0 0 24 24" class="icon fill-current"><title id="ao1hben7dtfjh3qldk1ydf8zjy19jh25">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>

              <span class="accessibility-text">Twitter</span>
            </a>
            <a href="http://facebook.com/dribbble">
            <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="a9rd7gov1v2rsgjag0jbtgegdis38fk" role="img" viewBox="0 0 24 24" class="icon fill-current"><title id="a9rd7gov1v2rsgjag0jbtgegdis38fk">Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>

            <span class="accessibility-text">Facebook</span>
            </a>
            <a href="http://instagram.com/dribbble">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" role="img" class="icon fill-current"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"></path></svg>

            <span class="accessibility-text">Instagram</span>
            </a>
            <a href="http://www.pinterest.com/Pinner13145726/">
            <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="agng56dfcho19mkw5g5vevs09baqud90" role="img" viewBox="0 0 24 24" class="icon fill-current"><title id="agng56dfcho19mkw5g5vevs09baqud90">Pinterest icon</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path></svg>

            <span class="accessibility-text">Pinterest</span>
            </a>
          </div>
        </div>
        <div class="links-container">
            <div class="links-column">
                <div class="link-heading">For designers</div>
                    <a class="link" href="/pro">Go Pro!</a>
                    <a class="link" href="/shots">Explore design work</a>
                    <a class="link" href="/stories">Design blog</a>
                    <a class="link" href="/overtime">Overtime podcast</a>
                    <a class="link" href="/meetups">Dribbble meetups</a>
                    <a class="link" href="/shots?list=playoffs">Playoffs</a>
                    <a class="link" href="/shots/17433584-Design-a-Valentine-without-using-red-or-pink">Weekly Warm-Up</a>
                    <a class="link" href="/guidelines">Code of conduct</a>
            </div>
            <div class="links-column">
                <div class="link-heading">Hire designers</div>
                    <a class="link" href="/jobs/new">Post a job opening</a>
                    <a class="link" href="/freelance-jobs">Post a freelance project</a>
                    <a class="link" href="/designers">Search for designers</a>
                <div class="link-heading">Brands</div>
                    <a class="link" href="/advertise">Advertise with us</a>
            </div>
            <div class="links-column">
                <div class="link-heading">Company</div>
                    <a class="link" href="/about">About</a>
                    <a class="link" href="/careers">Careers</a>
                    <a class="link" href="/contact">Support</a>
                    <a class="link" href="/branding">Media kit</a>
                    <a class="link" href="/testimonials">Testimonials</a>
                    <a class="link" href="https://developer.dribbble.com">API</a>
                    <a class="link" href="/terms">Terms of service</a>
                    <a class="link" href="/privacy">Privacy policy</a>
            </div>
            <div class="links-column">
                <div class="link-heading">Directories</div>
                    <a class="link" href="/directories/jobs">Design jobs</a>
                    <a class="link" href="/directories/designers">Designers for hire</a>
                    <a class="link" href="/directories/freelance-designers">Freelance designers for hire</a>
                    <a class="link" href="/tags">Tags</a>
                    <a class="link" href="/places">Places</a>
                <div class="link-heading">Design assets</div>
                    <a target="_blank" rel="noopener" class="link" href="https://creativemarket.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Creative Market</a>
                    <a target="_blank" rel="noopener" class="link" href="https://fontspring.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Fontspring</a>
                    <a target="_blank" rel="noopener" class="link" href="https://fontsquirrel.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Font Squirrel</a>
            </div>
            <div class="links-column">
                <div class="link-heading">Design Resources</div>
                    <a rel="noopener" class="link" href="/resources/freelance">Freelancing</a>
                    <a rel="noopener" class="link" href="/resources/design-hiring">Design Hiring</a>
                    <a rel="noopener" class="link" href="/resources/design-portfolio">Design Portfolio</a>
                    <a rel="noopener" class="link" href="/resources/education">Design Education</a>
                    <a rel="noopener" class="link" href="/resources/creative-process">Creative Process</a>
                    <a rel="noopener" class="link" href="https://www.industry-trends.dribbble.com">Design Industry Trends</a>
            </div>
        </div>
      </div>
    <div class="footer-lower-content">
      <div>&copy; 2022 Dribbble. All rights reserved.</div>
      <div class="total-shots-container">
        <div>
          <span class="shots-count">17,462,010</span>
          shots dribbbled
        </div>
        <img
          class="dribbble-ball lazyload"
          data-src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg"
          width="24px"
          height="24px"
          alt="Dribbble ball icon"
        >
      </div>
    </div>
  </div>
</div>





  

    <div class="shot-overlay js-shot-overlay lazyloading-hidden-container" tabindex="-1" data-include="css:https://cdn.dribbble.com/assets/components/media-overlay-modal-54786fa45e29af6e1d697507f551a7de57ddb0e8647f3650cedbc081436dfdc2.css">
  <div class="overlay-content js-overlay-content"></div>
    <div class="shot-nav-prev">
      <div class="shot-nav-button-container">
        <a href="#">
          <div class="shot-nav-button">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current"><path d="m13.532 4.585-7.532 7.415 7.532 7.415c.792.779 2.081.779 2.873 0s.792-2.049 0-2.829l-4.659-4.586 4.659-4.587c.384-.378.595-.88.595-1.414s-.211-1.036-.595-1.414c-.792-.78-2.082-.78-2.873 0z"></path></svg>

          </div>
        </a>
        <span>Previous</span>
      </div>
    </div>
    <div class="shot-nav-next">
      <div class="shot-nav-button-container">
        <a href="#">
          <div class="shot-nav-button">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current"><path d="m10.468 19.415 7.532-7.415-7.532-7.415c-.792-.779-2.081-.779-2.873 0s-.792 2.049 0 2.829l4.659 4.586-4.659 4.587c-.384.378-.595.88-.595 1.414s.211 1.036.595 1.414c.792.78 2.082.78 2.873 0z"></path></svg>

          </div>
        </a>
        <span>Next</span>
      </div>
    </div>
  <a href="#" class="js-close-overlay close-overlay" aria-label="close">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" role="img" class="icon fill-current">
<path d="M8.28596 6.51819C7.7978 6.03003 7.00634 6.03003 6.51819 6.51819C6.03003 7.00634 6.03003 7.7978 6.51819 8.28596L11.2322 13L6.51819 17.714C6.03003 18.2022 6.03003 18.9937 6.51819 19.4818C7.00634 19.97 7.7978 19.97 8.28596 19.4818L13 14.7678L17.714 19.4818C18.2022 19.97 18.9937 19.97 19.4818 19.4818C19.97 18.9937 19.97 18.2022 19.4818 17.714L14.7678 13L19.4818 8.28596C19.97 7.7978 19.97 7.00634 19.4818 6.51819C18.9937 6.03003 18.2022 6.03003 17.714 6.51819L13 11.2322L8.28596 6.51819Z" fill="currentColor"></path>
</svg>

  </a>
</div>

<div id="shot-modals-app"></div>
<div id="good-modals-app"></div>


  <div class="attachment-overlay fill-screen lazyloading-hidden lazyload" style="display:none;" tabindex="-1" data-include="css:https://cdn.dribbble.com/assets/attachment-overlay-d331bf7ef824f4e1f1dca744b77052b5fa3bd4388b9725bfddf1f5d4703f934e.css">
  </div>

<div id="signup-overlay" class="overlay ">
  <div class="lightbox">
    <a href="#" class="close" aria-label="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" role="img" class="icon icon-24 lazyload">
<rect x="3" y="5" width="18" height="16" fill="white"></rect>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5051 0.135254C14.9528 0.135152 17.3455 0.860879 19.3807 2.22066C21.416 3.58044 23.0022 5.51321 23.939 7.77453C24.8757 10.0359 25.1209 12.5242 24.6434 14.9248C24.166 17.3255 22.9873 19.5306 21.2566 21.2614C19.5259 22.9922 17.3207 24.1709 14.9201 24.6485C12.5195 25.126 10.0311 24.881 7.76979 23.9443C5.50843 23.0076 3.57561 21.4214 2.21576 19.3862C0.855913 17.3511 0.130107 14.9583 0.130127 12.5107C0.130141 9.22858 1.43392 6.08092 3.75467 3.76009C6.07542 1.43926 9.22304 0.135377 12.5051 0.135254V0.135254ZM7.13525 16.4156C6.9463 16.6101 6.84148 16.8711 6.84346 17.1423C6.84544 17.4135 6.95406 17.6729 7.14583 17.8647C7.3376 18.0564 7.59711 18.1649 7.86827 18.1668C8.13943 18.1687 8.40044 18.0638 8.59488 17.8748L12.4997 13.9699L16.4103 17.8805C16.6047 18.0698 16.8659 18.1749 17.1372 18.1731C17.4085 18.1712 17.6682 18.0626 17.8601 17.8707C18.0519 17.6788 18.1605 17.4191 18.1623 17.1478C18.164 16.8765 18.0589 16.6153 17.8695 16.421L13.9592 12.5106L17.8847 8.58516C18.072 8.39039 18.1754 8.12994 18.1727 7.85976C18.1701 7.58958 18.0616 7.33122 17.8705 7.14017C17.6795 6.94911 17.4211 6.8406 17.1509 6.83794C16.8808 6.83529 16.6203 6.93869 16.4255 7.12594L12.4997 11.051L8.57998 7.13125C8.38644 6.93769 8.12393 6.82894 7.8502 6.82892C7.57647 6.82891 7.31394 6.93763 7.12038 7.13118C6.92681 7.32472 6.81806 7.58724 6.81804 7.86097C6.81803 8.13469 6.92675 8.39722 7.1203 8.59078L11.0402 12.5106L7.13525 16.4156Z" fill="#979797"></path>
</svg>

    </a>
    <div class="display">
        <div class="processing">Loading…</div>
    </div>
  </div>
</div>
  <div id="work-availability-modal-app"></div>
<div id="introductions-upload-modal-app"></div>

<div id="site-notifications"></div>

<div id="designer-application-modal-app"></div>


<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- jquery failover -->
<script>
  if (typeof jQuery == 'undefined') {
    document.write(unescape('%3Cscript src="https://cdn.dribbble.com/assets/jquery-3.2.1.min-fe436dfd579c3153d6ecfe2c7e893127c27ff1fe44f276d9f149535ba5e6f2c0.js">%3C/script>'))
  }
</script>




<script>
  // ensure namespace is available
  Dribbble = window.Dribbble || {};
  Dribbble.JsConfig = window.Dribbble.JsConfig || {};
  Dribbble.isHistorySupported = () => (window.history && 'pushState' in window.history);

  // add global constants
  DEVICE_WIDTH_BREAKPOINT = '800px';
  HIDPI_BREAKPOINT = '(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-device-pixel-ratio: 1.5),(min-resolution: 1.5dppx)';

  User = {
    loggedIn: function() {
      return !!document.querySelector('body.logged-in')
    },
    loggedOut: function() {
      return !this.loggedIn()
    },
  };
</script>

<script src="https://cdn.dribbble.com/assets/global-26b50a26c452064408ed7429e24178bd487e9623ce3ec2ddd4cb1df04213e283.js"></script>

<script>
  var config = Dribbble.JsConfig || {}
  // the assign is so this partial can be called in other partials, e.g. modals
  // without overriding parent instantiations of JsConfig
  Dribbble.JsConfig = Object.assign(config, {
      user: {"isLoggedIn":false,"reCaptchaSiteKey":"6LdmBTIUAAAAAM4NIokaWu8p3BBuYEw3CxuDdyg_","canPurchasePro":true},
      hiringProfile: {},
      features: {"applePay":true,"braintreeHiring":false,"braintreePaymentButtons":true,"proSale2021":true,"courses50DiscountLink":true,"caseStudies":false,"proDiscountToasty":false,"caseStudiesAlpha":false,"marketplaceUploads":false,"directBillingCheckout":false,"clientSidePaymentMethods":false},
      isRobot: null,
      remoteIp: "103.105.33.80",
      isProduction: true,
      permissions: {"userPermissions":["canSeeThirdPartyPaymentMethods"],"marketplacePermissions":[]},
      screenshot_boost: {"buttonText":[{"label":"Buy Now","value":"buy-now"},{"label":"Download","value":"download"},{"label":"Learn More","value":"learn-more"},{"label":"Shop Now","value":"shop-now"},{"label":"Apply Now","value":"apply-now"},{"label":"Try Now","value":"try-now"},{"label":"Get Offer","value":"get-offer"},{"label":"Contact Us","value":"contact-us"}],"tiers":{"lowTier":{"daysToServe":7,"range":{"lowerLimit":0,"upperLimit":10000}},"midTier":{"daysToServe":14,"range":{"lowerLimit":10001,"upperLimit":100000}},"highTier":{"daysToServe":28,"range":{"lowerLimit":100001,"upperLimit":null}}},"pricePerImpression":"0.006","purchase":{"stripePublicKey":"pk_live_9EfFSEE6iTCgHghKqBqnixxR","savedCreditCardInformation":null},"discount":null,"minimumImpressions":2000,"targetPlacements":{"following":"Following Feed","popular":"Popular Feed","search":"Search Feed","goods":"Goods Feed","recent":"New \u0026 Noteworthy Feed","shot_modal":"Shot Modal","similar_work":"Similar Work","tags":"Tag Feed","popular_first":"Popular Feed First"},"priorities":["self_serve","sales","remnant","sales_priority"]},
  })
</script>

<script src="https://cdn.dribbble.com/assets/packs/js/application-e640bcb936e05e5bbe52.js"></script>
<script src="https://cdn.dribbble.com/assets/shot-filtering-manifest-44002b508ce2fe9586607c7ef1c352e8f9d8bea986f7290da8b2cc5acc1c2015.js"></script>  <script>
    Dribbble.ShotFiltersToggler.initialize();
    Dribbble.CategoryList.initialize();
    Dribbble.ShotColorFilters.initialize();
    Dribbble.ShotFilters.initialize({
      state: {"tag":null,"color":null,"timeframe":null,"source_file":null,"price_floor":null,"price_ceiling":null,"prefix":"/shots","category":null,"view":"popular","madeWith":null},
      pathMatcher:  /^\/(shots|search\/shots)\/(following|popular|goods|recent|animation|branding|illustration|mobile|print|product-design|typography|web-design)[\/?]?/,
      onFilterSuccess: function() { Dribbble.MadeWithHeader.initialize() },
      tagAutocompleteUrl: 'https://dribbble.com/autocompletes/tags'
    });
    Goods.initialize();
  </script>
<script src="https://cdn.dribbble.com/assets/shots-manifest-e53f0c44cd60acbf73553d6ef694573770437ecc3d0afe92e1c2252a253318c8.js"></script>  <script>
    $(function() {

      Dribbble.Thumbnails.initialize({"page_limit":1,"enable_shot_overlay":true,"cursor":false,"deferredContent":null,"staticParams":null,"showBoostedAds":true,"showSimilarShots":true,"boostedAdPlacement":"Popular Feed","boostedAdParams":{"popular":true,"controller":"screenshots/filters","action":"index"},"numberOfAdsOnFirstPage":2,"numberOfAdsOnSubsequentPages":2,"boostedAdGroupPositions":[1,6]});


      if(Dribbble.Bucket){
        new Dribbble.Bucket({ target: "a[data-bucket-add]" });
      }


      $(document).on(
        'click',
        'a[data-fav-toggle=shot]',
        Screenshot.Like.Shot.toggle
      )
    });
  </script>
  <!-- Global site tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-24041469-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

    gtag('config', "UA-24041469-1"); // google analytics

    gtag('config', "AW-787470371"); // google ads
</script>

<script>
  Dribbble.Analytics.googleAnalyticsKey = "UA-24041469-1"
  if (window.location.pathname == "/") {
    Dribbble.Analytics.namedRoot = "/shots";
    Dribbble.Analytics.logDribbbleGAPageView("/")
  } else {
    Dribbble.Analytics.logDribbbleGAPageView("/")
  }

  Dribbble.Itly.pageViewed({ controller: "screenshots/filters", action: "index"})
</script>




</body></html>
