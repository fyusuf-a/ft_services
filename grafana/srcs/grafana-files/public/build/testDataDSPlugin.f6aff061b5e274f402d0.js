(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{RQDA:function(e,t,n){"use strict";n.r(t);var a=n("Obii"),r=n("D1y2"),o=n.n(r),l=n("t8hP");function i(e){return 0===e.indexOf("value")?[{name:e,children:[]}]:function e(t,n,a){if(a>=n.length)return t;if("*"===n[a])return t;var r=n[a],o=[],l=[r];r.startsWith("{")&&(l=r.replace(/\{|\}/g,"").split(","));var i=!0,u=!1,c=void 0;try{for(var s,d=t[Symbol.iterator]();!(i=(s=d.next()).done);i=!0){var f=s.value,p=!0,m=!1,v=void 0;try{for(var b,y=l[Symbol.iterator]();!(p=(b=y.next()).done);p=!0){var h=b.value;if(-1!==h.indexOf("*")){var g=h.replace("*","");new RegExp("^".concat(g,".*"),"gi").test(f.name)&&(o=o.concat(e([f],n,a+1)))}else f.name===h&&(o=o.concat(e(f.children,n,a+1)))}}catch(e){m=!0,v=e}finally{try{p||null==y.return||y.return()}finally{if(m)throw v}}}}catch(e){u=!0,c=e}finally{try{i||null==d.return||d.return()}finally{if(u)throw c}}return o}(function e(t,n){var a=[];if(n>5)return[];for(var r=0,o=["A","B","C"];r<o.length;r++){var l=o[r],i="".concat(t).concat(l);a.push({name:i,children:e(i,n+1)})}return a}("",0),e.split("."),0)}var u=n("p0ib"),c=n("6blF"),s=n("F/XL"),d=n("0/uQ"),f=n("67Y/"),p=n("LvDl"),m=0;function v(){return m=(m+Math.floor(5*Math.random()))%b.length,b[m]}var b=["At","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti","quos","dolores","et","quas","molestias","excepturi","sint","occaecati","cupiditate","non","provident","similique","sunt","in","culpa","qui","officia","deserunt","mollitia","animi","id","est","laborum","et","dolorum","fuga","Et","harum","quidem","rerum","facilis","est","et","expedita","distinctio","Nam","libero","tempore","cum","soluta","nobis","est","eligendi","optio","cumque","nihil","impedit","quo","minus","id","quod","maxime","placeat","facere","possimus","omnis","voluptas","assumenda","est","omnis","dolor","repellendus","Temporibus","autem","quibusdam","et","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet","ut","et","voluptates","repudiandae","sint","et","molestiae","non","recusandae","Itaque","earum","rerum","hic","tenetur","a","sapiente","delectus","ut","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat"],y={type:"signal",speed:250,spread:3.5,noise:2.2,bands:1};function h(e,t){var n=Object(p.defaults)(e.stream,y);if("signal"===n.type)return function(e,t,n){return new c.a((function(r){var o="signal-".concat(n.panelId,"-").concat(e.refId),l=n.maxDataPoints||1e3,i=new a.CircularDataFrame({append:"tail",capacity:l});i.refId=e.refId,i.name=e.alias||"Signal "+e.refId,i.addField({name:"time",type:a.FieldType.time}),i.addField({name:"value",type:a.FieldType.number});for(var u=t.spread,c=t.speed,s=t.bands,d=void 0===s?0:s,f=t.noise,p=0;p<d;p++){var m=d>1?" ".concat(p+1):"";i.addField({name:"Min"+m,type:a.FieldType.number}),i.addField({name:"Max"+m,type:a.FieldType.number})}for(var v=100*Math.random(),b=null,y=function(e){v+=(Math.random()-.5)*u;var t=0;i.fields[t++].values.add(e),i.fields[t++].values.add(v);for(var n=v,a=v,r=0;r<d;r++)n-=Math.random()*f,a+=Math.random()*f,i.fields[t++].values.add(n),i.fields[t++].values.add(a)},h=Date.now()-l*c,g=0;g<l;g++)y(h),h+=c;return setTimeout((function e(){y(Date.now()),r.next({data:[i],key:o}),b=setTimeout(e,c)}),5),function(){console.log("unsubscribing to stream "+o),clearTimeout(b)}}))}(e,n,t);if("logs"===n.type)return function(e,t,n){return new c.a((function(r){var o="logs-".concat(n.panelId,"-").concat(e.refId),l=n.maxDataPoints||1e3,i=new a.CircularDataFrame({append:"tail",capacity:l});i.refId=e.refId,i.name=e.alias||"Logs "+e.refId,i.addField({name:"line",type:a.FieldType.string}),i.addField({name:"time",type:a.FieldType.time}),i.meta={preferredVisualisationType:"logs"};var u=t.speed,c=null;return setTimeout((function e(){i.values.time.add(Date.now()),i.values.line.add(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=v();t.length<e;)t+=" "+v();return t}()),r.next({data:[i],key:o}),c=setTimeout(e,u)}),5),function(){console.log("unsubscribing to stream "+o),clearTimeout(c)}}))}(e,n,t);if("fetch"===n.type)return function(e,t,n){return new c.a((function(r){var o,l="fetch-".concat(n.panelId,"-").concat(e.refId),i=n.maxDataPoints||1e3,u=new a.CircularDataFrame({append:"tail",capacity:i});u.refId=e.refId,u.name=e.alias||"Fetch "+e.refId;var c=new a.CSVReader({callback:{onHeader:function(t){u.fields.length&&((u=new a.CircularDataFrame({append:"tail",capacity:i})).refId=e.refId,u.name="Fetch "+e.refId);var n=!0,r=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var s=l.value;u.addField(s)}}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}},onRow:function(e){u.add(e)}}}),s=function e(t){if(t.value){var n=(new TextDecoder).decode(t.value);c.readCSV(n)}return r.next({data:[u],key:l,state:t.done?a.LoadingState.Done:a.LoadingState.Streaming}),t.done?(console.log("Finished stream"),void r.complete()):o.read().then(e)};if(!t.url)throw new Error("query.url is not defined");return fetch(new Request(t.url)).then((function(e){e.body&&(o=e.body.getReader()).read().then(s)})),function(){console.log("unsubscribing to stream "+l)}}))}(e,n,t);throw new Error("Unknown Stream Type: ".concat(n.type))}var g=n("+JjO");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(l.getTemplateSrv)();return S(this,t),(n=P(this,C(t).call(this,e))).templateSrv=a,n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),n=t,(r=[{key:"query",value:function(e){var t=this,n=[],a=[],r=!0,o=!1,i=void 0;try{for(var c,s=e.targets[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var d=c.value;if(!d.hide)switch(d.scenarioId){case"live":a.push(_(d,e));break;case"streaming_client":a.push(h(d,e));break;case"grafana_api":a.push(D(d,e));break;case"arrow":a.push(T(d,e));break;case"annotations":a.push(this.annotationDataTopicTest(d,e));break;default:n.push(I({},d,{intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:this.id,alias:this.templateSrv.replace(d.alias||"",e.scopedVars)}))}}}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}if(n.length){var p=Object(l.getBackendSrv)().fetch({method:"POST",url:"/api/tsdb/query",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:n}}).pipe(Object(f.a)((function(e){return t.processQueryResult(n,e)})));a.push(p)}return u.a.apply(void 0,a)}},{key:"processQueryResult",value:function(e,t){var n=[],a=void 0,r=!0,l=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=u.value,d=t.data.results[s.refId],f=!0,p=!1,m=void 0;try{for(var v,b=(d.tables||[])[Symbol.iterator]();!(f=(v=b.next()).done);f=!0){var y=v.value;y.refId=s.refId,y.name=s.alias,"logs"===s.scenarioId&&o()(y,"meta.preferredVisualisationType","logs"),n.push(y)}}catch(e){p=!0,m=e}finally{try{f||null==b.return||b.return()}finally{if(p)throw m}}var h=!0,g=!1,w=void 0;try{for(var O,I=(d.series||[])[Symbol.iterator]();!(h=(O=I.next()).done);h=!0){var E=O.value;n.push({target:E.name,datapoints:E.points,refId:s.refId,tags:E.tags})}}catch(e){g=!0,w=e}finally{try{h||null==I.return||I.return()}finally{if(g)throw w}}d.error&&(a={message:d.error})}}catch(e){l=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw i}}return{data:n,error:a}}},{key:"annotationDataTopicTest",value:function(e,t){var n=this;return new c.a((function(r){var o=n.buildFakeAnnotationEvents(t.range,10),l=new a.ArrayDataFrame(o);l.meta={dataTopic:a.DataTopic.Annotations},r.next({key:e.refId,data:[l]})}))}},{key:"buildFakeAnnotationEvents",value:function(e,t){for(var n=e.from.valueOf(),a=[],r=(e.to.valueOf()-n)/t,o=0;o<t;o++)a.push({time:n,text:'This is the text, <a href="https://grafana.com">Grafana.com</a>',tags:["text","server"]}),n+=r;return a}},{key:"annotationQuery",value:function(e){return Promise.resolve(this.buildFakeAnnotationEvents(e.range,10))}},{key:"getQueryDisplayText",value:function(e){return e.alias?e.scenarioId+" as "+e.alias:e.scenarioId}},{key:"testDatasource",value:function(){return Promise.resolve({status:"success",message:"Data source is working"})}},{key:"getScenarios",value:function(){return Object(l.getBackendSrv)().get("/api/tsdb/testdata/scenarios")}},{key:"metricFindQuery",value:function(e,t){var n=this;return new Promise((function(a,r){setTimeout((function(){var r=i(n.templateSrv.replace(e,Object(g.d)({query:e,wildcardChar:"*",options:t}))).map((function(e){return{value:e.name,text:e.name}}));a(r)}),100)}))}}])&&j(n.prototype,r),s&&j(n,s),t}(a.DataSourceApi);function T(e,t){var n=[];if(e.stringInput&&e.stringInput.length>10)try{var r=Object(a.base64StringToArrowTable)(e.stringInput),o=Object(a.arrowTableToDataFrame)(r);o.refId=e.refId,n=[o]}catch(t){console.warn("Error reading saved arrow",t);var i=Object(l.toDataQueryError)(t);return i.refId=e.refId,Object(s.a)({state:a.LoadingState.Error,error:i,data:n})}return Object(s.a)({state:a.LoadingState.Done,data:n,key:t.requestId+e.refId})}function D(e,t){var n="/api/".concat(e.stringInput);return Object(d.a)(Object(l.getBackendSrv)().get(n).then((function(e){var t=new a.ArrayDataFrame(e);return{state:a.LoadingState.Done,data:[t]}})))}var x=1e3;function _(e,t){if(!e.channel)throw new Error("Missing channel config");return Object(l.getLiveMeasurementsObserver)({scope:a.LiveChannelScope.Grafana,namespace:"testdata",path:e.channel},"testStream.".concat(x++))}var q=n("q1tI"),R=n.n(q);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,M(t).call(this,e))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return R.a.createElement("div",null,"See github for more information about setting up a reproducible test environment.",R.a.createElement("br",null),R.a.createElement("br",null),R.a.createElement("a",{className:"btn btn-inverse",href:"https://github.com/grafana/grafana/tree/master/devenv",target:"_blank",rel:"noopener"},"GitHub"),R.a.createElement("br",null))}}])&&V(n.prototype,a),r&&V(n,r),t}(q.PureComponent);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function H(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){return B(this,t),H(this,G(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return R.a.createElement("div",null)}}])&&Y(n.prototype,a),r&&Y(n,r),t}(q.PureComponent),X=n("Y8YH"),z=n("Csm0"),K=n("kDLi"),Z=[{label:"Speed (ms)",id:"speed",placeholder:"value",min:10,step:10},{label:"Spread",id:"spread",placeholder:"value",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"value",min:0,step:.1},{label:"Bands",id:"bands",placeholder:"bands",min:0,step:1}],$=[{value:"signal",label:"Signal"},{value:"logs",label:"Logs"},{value:"fetch",label:"Fetch"}],ee=function(e){var t,n,a,r=e.onChange,o=e.query,l=function(e){var t=e.target,n=t.name,a=t.value;r({target:{name:n,value:Number(a)}})};return R.a.createElement(K.InlineFieldRow,null,R.a.createElement(K.InlineField,{label:"Type",labelWidth:14},R.a.createElement(K.Select,{width:32,onChange:function(e){var t=e.value;r({target:{name:"type",value:t}})},defaultValue:$[0],options:$})),"signal"===(null==o?void 0:null===(t=o.stream)||void 0===t?void 0:t.type)&&Z.map((function(e){var t,n=e.label,a=e.id,r=e.min,i=e.step,u=e.placeholder;return R.a.createElement(K.InlineField,{label:n,labelWidth:14,key:a},R.a.createElement(K.Input,{width:32,type:"number",id:"stream.".concat(a,"-").concat(o.refId),name:a,min:r,step:i,value:null===(t=o.stream)||void 0===t?void 0:t[a],placeholder:u,onChange:l}))})),"fetch"===(null==o?void 0:null===(n=o.stream)||void 0===n?void 0:n.type)&&R.a.createElement(K.InlineField,{label:"URL",labelWidth:14,grow:!0},R.a.createElement(K.Input,{type:"text",name:"url",id:"stream.url-".concat(o.refId),value:null==o?void 0:null===(a=o.stream)||void 0===a?void 0:a.url,placeholder:"Fetch URL",onChange:r})))};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var oe=function(e){var t=e.onChange,n=e.query,r=e.onRunQuery,o=n.points.map((function(e,t){return{label:Object(a.dateTime)(e[1]).format("MMMM Do YYYY, H:mm:ss")+" : "+e[0],value:t}}));return R.a.createElement(K.Form,{onSubmit:function(e){var o=a.dateMath.parse(e.newPointTime),l=[].concat(re(n.points),[[Number(e.newPointValue),o.valueOf()]]).sort((function(e,t){return e[1]-t[1]}));t(ne({},n,{points:l})),r()},maxWidth:"none"},(function(e){var l=e.register,i=e.control,u=(0,e.watch)("selectedPoint");return R.a.createElement(K.InlineFieldRow,null,R.a.createElement(K.InlineField,{label:"New value",labelWidth:14},R.a.createElement(K.Input,{width:32,type:"number",placeholder:"value",id:"newPointValue-".concat(n.refId),name:"newPointValue",ref:l})),R.a.createElement(K.InlineField,{label:"Time",labelWidth:14},R.a.createElement(K.Input,{width:32,id:"newPointTime-".concat(n.refId),placeholder:"time",name:"newPointTime",ref:l,defaultValue:Object(a.dateTime)().format()})),R.a.createElement(K.InlineField,null,R.a.createElement(K.Button,{variant:"secondary"},"Add")),R.a.createElement(K.InlineField,{label:"All values"},R.a.createElement(K.InputControl,{control:i,as:K.Select,options:o,width:32,name:"selectedPoint",onChange:function(e){return e[0]},placeholder:"Select point"})),void 0!==(null==u?void 0:u.value)&&R.a.createElement(K.InlineField,null,R.a.createElement(K.Button,{type:"button",variant:"destructive",onClick:function(){i.setValue("selectedPoint",[{value:void 0,label:"Select value"}]),function(e){var a=n.points.filter((function(t,n){return n!==e.value}));t(ne({},n,{points:a})),r()}(u)}},"Delete")))}))},le=[{label:"Series count",id:"seriesCount",placeholder:"1",min:1,step:1},{label:"Start value",id:"startValue",placeholder:"auto",step:1},{label:"Spread",id:"spread",placeholder:"1",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"0",min:0,step:.1},{label:"Min",id:"min",placeholder:"none",step:.1},{label:"Max",id:"max",placeholder:"none",step:.1}],ie=z.selectors.components.DataSource.TestData.QueryTab,ue=function(e){var t=e.onChange,n=e.query;return R.a.createElement(K.InlineFieldRow,null,le.map((function(e){var a=e.label,r=e.id,o=e.min,l=e.step,i=e.placeholder,u=null==ie?void 0:ie[r];return R.a.createElement(K.InlineField,{label:a,labelWidth:14,key:r,"aria-label":u},R.a.createElement(K.Input,{width:32,name:r,type:"number",id:"randomWalk-".concat(r,"-").concat(n.refId),min:o,step:l,value:n[r]||i,placeholder:i,onChange:t}))})))},ce=[{label:"Step",id:"timeStep",placeholder:"60",tooltip:"The number of seconds between datapoints."},{label:"On Count",id:"onCount",placeholder:"3",tooltip:"The number of values within a cycle, at the start of the cycle, that should have the onValue."},{label:"Off Count",id:"offCount",placeholder:"6",tooltip:"The number of offValues within the cycle."},{label:"On Value",id:"onValue",placeholder:"1",tooltip:'The value for "on values", may be an int, float, or null.'},{label:"Off Value",id:"offValue",placeholder:"1",tooltip:'The value for "off values", may be a int, float, or null.'}],se=function(e){var t=e.onChange,n=e.query,a=function(e){var n=e.target,a=n.name,r=n.value;t({target:{name:a,value:Number(r)}})};return R.a.createElement(K.InlineFieldRow,null,ce.map((function(e){var t,r=e.label,o=e.id,l=e.placeholder,i=e.tooltip;return R.a.createElement(K.InlineField,{label:r,labelWidth:14,key:o,tooltip:i},R.a.createElement(K.Input,{width:32,type:"number",name:o,id:"pulseWave.".concat(o,"-").concat(n.refId),value:null===(t=n.pulseWave)||void 0===t?void 0:t[o],placeholder:l,onChange:a}))})))},de=[{label:"Step",type:"number",id:"timeStep",placeholder:"60",tooltip:"The number of seconds between datapoints."},{label:"CSV Values",type:"text",id:"valuesCSV",placeholder:"1,2,3,4",tooltip:"Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed."}],fe=function(e){var t=e.onChange,n=e.query;return R.a.createElement(K.InlineFieldRow,null,de.map((function(e,a){var r,o=e.label,l=e.id,i=e.type,u=e.placeholder,c=e.tooltip,s=a===de.length-1;return R.a.createElement(K.InlineField,{label:o,labelWidth:14,key:l,tooltip:c,grow:s},R.a.createElement(K.Input,{width:s?void 0:32,type:i,name:l,id:"csvWave.".concat(l,"-").concat(n.refId),value:null===(r=n.csvWave)||void 0===r?void 0:r[l],placeholder:u,onChange:t}))})))},pe={points:[],stream:y,pulseWave:{timeStep:60,onCount:3,onValue:2,offCount:3,offValue:1},csvWave:{timeStep:60,valuesCSV:"0,0,2,2,1,1"},stringInput:"",scenarioId:"random_walk",lines:10,refId:"",alias:""};function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=[{label:"random-2s-stream",value:"random-2s-stream",description:"Random stream with points every 2s"},{label:"random-flakey-stream",value:"random-flakey-stream",description:"Stream that returns data in random intervals"}],ye=function(e){var t=e.onChange,n=e.query;return R.a.createElement(K.InlineFieldRow,null,R.a.createElement(K.InlineField,{label:"Channel",labelWidth:14},R.a.createElement(K.Select,{width:32,onChange:function(e){var a=e.value;t(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{channel:a}))},placeholder:"Select channel",options:be,value:be.find((function(e){return e.value===n.channel}))})))};function he(e,t,n,a,r,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(a,r)}function ge(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function l(e){he(o,a,r,l,i,"next",e)}function i(e){he(o,a,r,l,i,"throw",e)}l(void 0)}))}}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){Ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ee=["random_walk","predictable_pulse","predictable_csv_wave"],Se=[{value:"datasources",label:"Data Sources"},{value:"search",label:"Search"},{value:"annotations",label:"Annotations"}],je=["lines","seriesCount","timeStep"],Pe=z.selectors.components.DataSource.TestData.QueryTab;n.d(t,"plugin",(function(){return ke}));var Ce=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};Ce.template="<h2>Annotation scenario</h2>";var ke=new a.DataSourcePlugin(F).setConfigEditor(U).setQueryEditor((function(e){var t,n=e.query,a=e.datasource,r=e.onChange,o=e.onRunQuery;n=Oe({},pe,{},n);var l=Object(X.a)(ge(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.getScenarios());case 1:case"end":return e.stop()}}),e)}))),[]),i=l.loading,u=l.value,c=function(e){r(e),o()};Object(q.useEffect)((function(){c(n)}),[]);var s=Object(q.useMemo)((function(){return null==u?void 0:u.find((function(e){return e.id===n.scenarioId}))}),[u,n]),d=null==s?void 0:s.id,f=function(e){var t=e.target,a=t.name,r=t.value,o=Ie({},a,r);"levelColumn"===a?o={levelColumn:e.target.checked}:je.includes(a)&&(o=Ie({},a,Number(r))),c(Oe({},n,{},o))},p=function(e){return function(t){var a=t.target,r=a.name,o=a.value,l=je.includes(r)?Number(o):o;c(Oe({},n,Ie({},e,Oe({},n[e],Ie({},r,l)))))}},m=p("stream"),v=p("pulseWave"),b=p("csvWave"),y=Object(q.useMemo)((function(){return(u||[]).map((function(e){return{label:e.name,value:e.id}})).sort((function(e,t){return e.label.localeCompare(t.label)}))}),[u]),h=Object(q.useMemo)((function(){return Ee.includes(n.scenarioId)}),[n]);return i?null:R.a.createElement(R.a.Fragment,null,R.a.createElement(K.InlineFieldRow,{"aria-label":Pe.scenarioSelectContainer},R.a.createElement(K.InlineField,{labelWidth:14,label:"Scenario"},R.a.createElement(K.Select,{options:y,value:y.find((function(e){return e.value===n.scenarioId})),onChange:function(e){var t=null==u?void 0:u.find((function(t){return t.id===e.value}));if(t){var a=Oe({},n,{scenarioId:e.value});t.stringInput&&(a.stringInput=t.stringInput),"grafana_api"===t.id?a.stringInput="datasources":"streaming_client"===t.id?a.stringInput="":"live"===t.id&&(a.channel||(a.channel="random-2s-stream")),c(a)}},width:32})),(null==s?void 0:s.stringInput)&&R.a.createElement(K.InlineField,{label:"String Input"},R.a.createElement(K.Input,{width:32,id:"stringInput-".concat(n.refId),name:"stringInput",placeholder:n.stringInput,value:n.stringInput,onChange:f})),R.a.createElement(K.InlineField,{label:"Alias",labelWidth:14},R.a.createElement(K.Input,{width:32,id:"alias-".concat(n.refId),type:"text",placeholder:"optional",pattern:'[^<>&\\\\"]+',name:"alias",value:n.alias,onChange:f})),h&&R.a.createElement(K.InlineField,{label:"Labels",labelWidth:14,tooltip:R.a.createElement(R.a.Fragment,null,"Set labels using a key=value syntax:",R.a.createElement("br",null),'{ key = "value", key2 = "value" }',R.a.createElement("br",null),'key="value", key2="value"',R.a.createElement("br",null),"key=value, key2=value",R.a.createElement("br",null))},R.a.createElement(K.Input,{width:32,id:"labels-".concat(n.refId),name:"labels",onChange:f,value:null===(t=n)||void 0===t?void 0:t.labels,placeholder:"key=value, key2=value2"}))),"manual_entry"===d&&R.a.createElement(oe,{onChange:c,query:n,onRunQuery:o}),"random_walk"===d&&R.a.createElement(ue,{onChange:f,query:n}),"streaming_client"===d&&R.a.createElement(ee,{onChange:m,query:n}),"live"===d&&R.a.createElement(ye,{onChange:c,query:n}),"logs"===d&&R.a.createElement(K.InlineFieldRow,null,R.a.createElement(K.InlineField,{label:"Lines",labelWidth:14},R.a.createElement(K.Input,{type:"number",name:"lines",value:n.lines,width:32,onChange:f,placeholder:"10"})),R.a.createElement(K.InlineField,{label:"Level",labelWidth:14},R.a.createElement(K.Switch,{onChange:f,name:"levelColumn",value:!!n.levelColumn}))),"grafana_api"===d&&R.a.createElement(K.InlineField,{labelWidth:14,label:"Endpoint"},R.a.createElement(K.Select,{options:Se,onChange:function(e){var t=e.value;c(Oe({},n,{stringInput:t}))},width:32,value:Se.find((function(e){return e.value===n.stringInput}))})),"arrow"===d&&R.a.createElement(K.InlineField,{grow:!0},R.a.createElement(K.TextArea,{name:"stringInput",value:n.stringInput,rows:10,placeholder:"Copy base64 text data from query result",onChange:f})),"predictable_pulse"===d&&R.a.createElement(se,{onChange:v,query:n}),"predictable_csv_wave"===d&&R.a.createElement(fe,{onChange:b,query:n}))})).setAnnotationQueryCtrl(Ce).addConfigPage({title:"Setup",icon:"list-ul",body:Q,id:"setup"})}}]);
//# sourceMappingURL=testDataDSPlugin.f6aff061b5e274f402d0.js.map