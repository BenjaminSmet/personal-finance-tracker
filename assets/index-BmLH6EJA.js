(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var Za={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},wh=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const r=n[e++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[e++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[e++],a=n[e++],l=n[e++],u=((r&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return t.join("")},gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,l=a?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,f=s>>2,v=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,I=h&63;u||(I=64,a||(m=64)),i.push(e[f],e[v],e[m],e[I])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ml(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=e[n.charAt(r++)],l=r<n.length?e[n.charAt(r)]:0;++r;const h=r<n.length?e[n.charAt(r)]:64;++r;const v=r<n.length?e[n.charAt(r)]:64;if(++r,s==null||l==null||h==null||v==null)throw new bh;const m=s<<2|l>>4;if(i.push(m),h!==64){const I=l<<4&240|h>>2;if(i.push(I),v!==64){const S=h<<6&192|v;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eh=function(n){const t=ml(n);return gl.encodeByteArray(t,!0)},sr=function(n){return Eh(n).replace(/\./g,"")},_l=function(n){try{return gl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=()=>Ih().__FIREBASE_DEFAULTS__,Ah=()=>{if(typeof process>"u"||typeof Za>"u")return;const n=Za.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&_l(n[1]);return t&&JSON.parse(t)},Ar=()=>{try{return Th()||Ah()||xh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yl=n=>{var t,e;return(e=(t=Ar())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Rh=n=>{const t=yl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},vl=()=>{var n;return(n=Ar())===null||n===void 0?void 0:n.config},wl=n=>{var t;return(t=Ar())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sr(JSON.stringify(e)),sr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function kh(){var n;const t=(n=Ar())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oh(){const n=St();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mh(){return!kh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lh(){try{return typeof indexedDB=="object"}catch{return!1}}function $h(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="FirebaseError";class de extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Fh,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],a=s?Uh(s,i):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new de(r,l,i)}}function Uh(n,t){return n.replace(Bh,(e,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Bh=/\{\$([^}]+)}/g;function zh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function or(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const r of e){if(!i.includes(r))return!1;const s=n[r],a=t[r];if(tc(s)&&tc(a)){if(!or(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!e.includes(r))return!1;return!0}function tc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function jh(n,t){const e=new qh(n,t);return e.subscribe.bind(e)}class qh{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let r;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Wh(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:i},r.next===void 0&&(r.next=ws),r.error===void 0&&(r.error=ws),r.complete===void 0&&(r.complete=ws);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wh(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ws(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Sh;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kh(t))try{this.getOrInitializeService({instanceIdentifier:Oe})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Oe){return this.instances.has(t)}getOptions(t=Oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(r)}return r}onInit(t,e){var i;const r=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const r of i)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Gh(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Oe){return this.component?this.component.multipleInstances?t:Oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gh(n){return n===Oe?void 0:n}function Kh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Hh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Yh={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Jh=Q.INFO,Xh={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Zh=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),r=Xh[t];if(r)console[r](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class no{constructor(t){this.name=t,this._logLevel=Jh,this._logHandler=Zh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const tp=(n,t)=>t.some(e=>n instanceof e);let ec,nc;function ep(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function np(){return nc||(nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,Ds=new WeakMap,El=new WeakMap,bs=new WeakMap,io=new WeakMap;function ip(n){const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(be(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&bl.set(e,n)}).catch(()=>{}),io.set(t,n),t}function rp(n){if(Ds.has(n))return;const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ds.set(n,t)}let Vs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ds.get(n);if(t==="objectStoreNames")return n.objectStoreNames||El.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return be(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function sp(n){Vs=n(Vs)}function op(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Es(this),t,...e);return El.set(i,t.sort?t.sort():[t]),be(i)}:np().includes(n)?function(...t){return n.apply(Es(this),t),be(bl.get(this))}:function(...t){return be(n.apply(Es(this),t))}}function ap(n){return typeof n=="function"?op(n):(n instanceof IDBTransaction&&rp(n),tp(n,ep())?new Proxy(n,Vs):n)}function be(n){if(n instanceof IDBRequest)return ip(n);if(bs.has(n))return bs.get(n);const t=ap(n);return t!==n&&(bs.set(n,t),io.set(t,n)),t}const Es=n=>io.get(n);function cp(n,t,{blocked:e,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,t),l=be(a);return i&&a.addEventListener("upgradeneeded",u=>{i(be(a.result),u.oldVersion,u.newVersion,be(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const lp=["get","getKey","getAll","getAllKeys","count"],up=["put","add","delete","clear"],Is=new Map;function ic(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Is.get(t))return Is.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,r=up.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(r||lp.includes(e)))return;const s=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),r&&u.done]))[0]};return Is.set(t,s),s}sp(n=>({...n,get:(t,e,i)=>ic(t,e)||n.get(t,e,i),has:(t,e)=>!!ic(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(hp(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function hp(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ns="@firebase/app",rc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new no("@firebase/app"),pp="@firebase/app-compat",fp="@firebase/analytics-compat",mp="@firebase/analytics",gp="@firebase/app-check-compat",_p="@firebase/app-check",yp="@firebase/auth",vp="@firebase/auth-compat",wp="@firebase/database",bp="@firebase/data-connect",Ep="@firebase/database-compat",Ip="@firebase/functions",Tp="@firebase/functions-compat",Ap="@firebase/installations",xp="@firebase/installations-compat",Rp="@firebase/messaging",Sp="@firebase/messaging-compat",Cp="@firebase/performance",Pp="@firebase/performance-compat",kp="@firebase/remote-config",Dp="@firebase/remote-config-compat",Vp="@firebase/storage",Np="@firebase/storage-compat",Op="@firebase/firestore",Mp="@firebase/vertexai-preview",Lp="@firebase/firestore-compat",$p="firebase",Fp="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="[DEFAULT]",Up={[Ns]:"fire-core",[pp]:"fire-core-compat",[mp]:"fire-analytics",[fp]:"fire-analytics-compat",[_p]:"fire-app-check",[gp]:"fire-app-check-compat",[yp]:"fire-auth",[vp]:"fire-auth-compat",[wp]:"fire-rtdb",[bp]:"fire-data-connect",[Ep]:"fire-rtdb-compat",[Ip]:"fire-fn",[Tp]:"fire-fn-compat",[Ap]:"fire-iid",[xp]:"fire-iid-compat",[Rp]:"fire-fcm",[Sp]:"fire-fcm-compat",[Cp]:"fire-perf",[Pp]:"fire-perf-compat",[kp]:"fire-rc",[Dp]:"fire-rc-compat",[Vp]:"fire-gcs",[Np]:"fire-gcs-compat",[Op]:"fire-fst",[Lp]:"fire-fst-compat",[Mp]:"fire-vertex","fire-js":"fire-js",[$p]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Map,Bp=new Map,Ms=new Map;function sc(n,t){try{n.container.addComponent(t)}catch(e){ae.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cn(n){const t=n.name;if(Ms.has(t))return ae.debug(`There were multiple attempts to register component ${t}.`),!1;Ms.set(t,n);for(const e of ar.values())sc(e,n);for(const e of Bp.values())sc(e,n);return!0}function ro(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ee(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new ui("app","Firebase",zp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=Fp;function Il(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Os,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Ee.create("bad-app-name",{appName:String(r)});if(e||(e=vl()),!e)throw Ee.create("no-options");const s=ar.get(r);if(s){if(or(e,s.options)&&or(i,s.config))return s;throw Ee.create("duplicate-app",{appName:r})}const a=new Qh(r);for(const u of Ms.values())a.addComponent(u);const l=new jp(e,i,a);return ar.set(r,l),l}function Tl(n=Os){const t=ar.get(n);if(!t&&n===Os&&vl())return Il();if(!t)throw Ee.create("no-app",{appName:n});return t}function Ie(n,t,e){var i;let r=(i=Up[n])!==null&&i!==void 0?i:n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${r}" with version "${t}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ae.warn(l.join(" "));return}cn(new Ue(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="firebase-heartbeat-database",Wp=1,ni="firebase-heartbeat-store";let Ts=null;function Al(){return Ts||(Ts=cp(qp,Wp,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ni)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),Ts}async function Hp(n){try{const e=(await Al()).transaction(ni),i=await e.objectStore(ni).get(xl(n));return await e.done,i}catch(t){if(t instanceof de)ae.warn(t.message);else{const e=Ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ae.warn(e.message)}}}async function oc(n,t){try{const i=(await Al()).transaction(ni,"readwrite");await i.objectStore(ni).put(t,xl(n)),await i.done}catch(e){if(e instanceof de)ae.warn(e.message);else{const i=Ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ae.warn(i.message)}}}function xl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=1024,Kp=30*24*60*60*1e3;class Qp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jp(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ac();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Kp}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ae.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ac(),{heartbeatsToSend:i,unsentEntries:r}=Yp(this._heartbeatsCache.heartbeats),s=sr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ae.warn(e),""}}}function ac(){return new Date().toISOString().substring(0,10)}function Yp(n,t=Gp){const e=[];let i=n.slice();for(const r of n){const s=e.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),cc(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),cc(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Jp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lh()?$h().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Hp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return oc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return oc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function cc(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){cn(new Ue("platform-logger",t=>new dp(t),"PRIVATE")),cn(new Ue("heartbeat",t=>new Qp(t),"PRIVATE")),Ie(Ns,rc,n),Ie(Ns,rc,"esm2017"),Ie("fire-js","")}Xp("");function so(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]]);return e}function Rl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zp=Rl,Sl=new ui("auth","Firebase",Rl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new no("@firebase/auth");function tf(n,...t){cr.logLevel<=Q.WARN&&cr.warn(`Auth (${yn}): ${n}`,...t)}function Yi(n,...t){cr.logLevel<=Q.ERROR&&cr.error(`Auth (${yn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n,...t){throw ao(n,...t)}function Bt(n,...t){return ao(n,...t)}function oo(n,t,e){const i=Object.assign(Object.assign({},Zp()),{[t]:e});return new ui("auth","Firebase",i).create(t,{appName:n.name})}function $e(n){return oo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(n,t,e){const i=e;if(!(t instanceof i))throw i.name!==t.constructor.name&&Qt(n,"argument-error"),oo(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ao(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return Sl.create(n,...t)}function j(n,t,...e){if(!n)throw ao(t,...e)}function ne(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Yi(t),new Error(t)}function ce(n,t){n||ne(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function nf(){return lc()==="http:"||lc()==="https:"}function lc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nf()||Vh()||"connection"in navigator)?navigator.onLine:!0}function sf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.shortDelay=t,this.longDelay=e,ce(e>t,"Short delay should be less than long delay!"),this.isMobile=Ph()||Nh()}get(){return rf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,t){ce(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new hi(3e4,6e4);function lo(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function vn(n,t,e,i,r={}){return Pl(n,r,async()=>{let s={},a={};i&&(t==="GET"?a=i:s={body:JSON.stringify(i)});const l=di(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:t,headers:u},s);return Dh()||(h.referrerPolicy="no-referrer"),Cl.fetch()(kl(n,n.config.apiHost,e,l),h)})}async function Pl(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},of),t);try{const r=new lf(n),s=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Wi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Wi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Wi(n,"user-disabled",a);const f=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw oo(n,f,h);Qt(n,f)}}catch(r){if(r instanceof de)throw r;Qt(n,"network-request-failed",{message:String(r)})}}async function cf(n,t,e,i,r={}){const s=await vn(n,t,e,i,r);return"mfaPendingCredential"in s&&Qt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function kl(n,t,e,i){const r=`${t}${e}?${i}`;return n.config.emulator?co(n.config,r):`${n.config.apiScheme}://${r}`}class lf{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(Bt(this.auth,"network-request-failed")),af.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wi(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const r=Bt(n,t,i);return r.customData._tokenResponse=e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uf(n,t){return vn(n,"POST","/v1/accounts:delete",t)}async function Dl(n,t){return vn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function df(n,t=!1){const e=pt(n),i=await e.getIdToken(t),r=uo(i);j(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Jn(As(r.auth_time)),issuedAtTime:Jn(As(r.iat)),expirationTime:Jn(As(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function As(n){return Number(n)*1e3}function uo(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const r=_l(e);return r?JSON.parse(r):(Yi("Failed to decode base64 JWT payload"),null)}catch(r){return Yi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function uc(n){const t=uo(n);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof de&&hf(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function hf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(n){var t;const e=n.auth,i=await n.getIdToken(),r=await ii(n,Dl(e,{idToken:i}));j(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Vl(s.providerUserInfo):[],l=mf(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $s(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,v)}async function ff(n){const t=pt(n);await lr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mf(n,t){return[...n.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function Vl(n){return n.map(t=>{var{providerId:e}=t,i=so(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(n,t){const e=await Pl(n,{},async()=>{const i=di({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,a=kl(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cl.fetch()(a,{method:"POST",headers:l,body:i})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function _f(n,t){return vn(n,"POST","/v2/accounts:revokeToken",lo(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){j(t.length!==0,"internal-error");const e=uc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:r,expiresIn:s}=await gf(t,e);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:r,expirationTime:s}=e,a=new rn;return i&&(j(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),r&&(j(typeof r=="string","internal-error",{appName:t}),a.accessToken=r),s&&(j(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,t){j(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ie{constructor(t){var{uid:e,auth:i,stsTokenManager:r}=t,s=so(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $s(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await ii(this,this.stsTokenManager.getToken(this.auth,t));return j(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return df(this,t)}reload(){return ff(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ie(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await lr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ee(this.auth.app))return Promise.reject($e(this.auth));const t=await this.getIdToken();return await ii(this,uf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,r,s,a,l,u,h,f;const v=(i=e.displayName)!==null&&i!==void 0?i:void 0,m=(r=e.email)!==null&&r!==void 0?r:void 0,I=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=e.photoURL)!==null&&a!==void 0?a:void 0,D=(l=e.tenantId)!==null&&l!==void 0?l:void 0,P=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,U=(h=e.createdAt)!==null&&h!==void 0?h:void 0,M=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:W,isAnonymous:N,providerData:k,stsTokenManager:w}=e;j(V&&w,t,"internal-error");const g=rn.fromJSON(this.name,w);j(typeof V=="string",t,"internal-error"),ge(v,t.name),ge(m,t.name),j(typeof W=="boolean",t,"internal-error"),j(typeof N=="boolean",t,"internal-error"),ge(I,t.name),ge(S,t.name),ge(D,t.name),ge(P,t.name),ge(U,t.name),ge(M,t.name);const _=new ie({uid:V,auth:t,email:m,emailVerified:W,displayName:v,isAnonymous:N,photoURL:S,phoneNumber:I,tenantId:D,stsTokenManager:g,createdAt:U,lastLoginAt:M});return k&&Array.isArray(k)&&(_.providerData=k.map(b=>Object.assign({},b))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(t,e,i=!1){const r=new rn;r.updateFromServerResponse(e);const s=new ie({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await lr(s),s}static async _fromGetAccountInfoResponse(t,e,i){const r=e.users[0];j(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Vl(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),l=new rn;l.updateFromIdToken(i);const u=new ie({uid:r.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new $s(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map;function re(n){ce(n instanceof Function,"Expected a class definition");let t=dc.get(n);return t?(ce(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,dc.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Nl.type="NONE";const hc=Nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,t,e){return`firebase:${n}:${t}:${e}`}class sn{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ji(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ji("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ie._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new sn(re(hc),t,i);const r=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=r[0]||re(hc);const a=Ji(i,t.config.apiKey,t.name);let l=null;for(const h of e)try{const f=await h._get(a);if(f){const v=ie._fromJSON(t,f);h!==s&&(l=v),s=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new sn(s,t,i):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(e.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new sn(s,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($l(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ol(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ul(t))return"Blackberry";if(Bl(t))return"Webos";if(Ml(t))return"Safari";if((t.includes("chrome/")||Ll(t))&&!t.includes("edge/"))return"Chrome";if(Fl(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ol(n=St()){return/firefox\//i.test(n)}function Ml(n=St()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ll(n=St()){return/crios\//i.test(n)}function $l(n=St()){return/iemobile/i.test(n)}function Fl(n=St()){return/android/i.test(n)}function Ul(n=St()){return/blackberry/i.test(n)}function Bl(n=St()){return/webos/i.test(n)}function ho(n=St()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yf(n=St()){var t;return ho(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function vf(){return Oh()&&document.documentMode===10}function zl(n=St()){return ho(n)||Fl(n)||Bl(n)||Ul(n)||/windows phone/i.test(n)||$l(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n,t=[]){let e;switch(n){case"Browser":e=pc(St());break;case"Worker":e=`${pc(St())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${yn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});i.onAbort=e,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(n,t={}){return vn(n,"GET","/v2/passwordPolicy",lo(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=6;class If{constructor(t){var e,i,r,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Ef,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,r,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e,i,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new wf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=re(e)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await sn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Dl(this,{idToken:t}),i=await ie._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(ee(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await lr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ee(this.app))return Promise.reject($e(this));const e=t?pt(t):null;return e&&j(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ee(this.app)?Promise.reject($e(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ee(this.app)?Promise.reject($e(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(re(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bf(this),e=new If(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ui("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await _f(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&re(t)||this._popupRedirectResolver;j(e,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[re(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,r){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,i,r);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=jl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&tf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function xr(n){return pt(n)}class fc{constructor(t){this.auth=t,this.observer=null,this.addObserver=jh(e=>this.observer=e)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Af(n){po=n}function xf(n){return po.loadJS(n)}function Rf(){return po.gapiScript}function Sf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n,t){const e=ro(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),s=e.getOptions();if(or(s,t??{}))return r;Qt(r,"already-initialized")}return e.initialize({options:t})}function Pf(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(re);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function kf(n,t,e){const i=xr(n);j(i._canInitEmulator,i,"emulator-config-failed"),j(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!1,s=ql(t),{host:a,port:l}=Df(t),u=l===null?"":`:${l}`;i.config.emulator={url:`${s}//${a}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),Vf()}function ql(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Df(n){const t=ql(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:mc(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:mc(a)}}}function mc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Vf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ne("not implemented")}_getIdTokenResponse(t){return ne("not implemented")}_linkToIdToken(t,e){return ne("not implemented")}_getReauthenticationResolver(t){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n,t){return cf(n,"POST","/v1/accounts:signInWithIdp",lo(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="http://localhost";class Be extends Wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Be(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Qt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=e,s=so(e,["providerId","signInMethod"]);if(!i||!r)return null;const a=new Be(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return on(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,on(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,on(t,e)}buildRequest(){const t={requestUri:Nf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=di(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends fo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends pi{constructor(){super("facebook.com")}static credential(t){return Be._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _e.credential(t.oauthAccessToken)}catch{return null}}}_e.FACEBOOK_SIGN_IN_METHOD="facebook.com";_e.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Be._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return te.credential(e,i)}catch{return null}}}te.GOOGLE_SIGN_IN_METHOD="google.com";te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends pi{constructor(){super("github.com")}static credential(t){return Be._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ye.credential(t.oauthAccessToken)}catch{return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com";ye.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends pi{constructor(){super("twitter.com")}static credential(t,e){return Be._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return ve.credential(e,i)}catch{return null}}}ve.TWITTER_SIGN_IN_METHOD="twitter.com";ve.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,r=!1){const s=await ie._fromIdTokenResponse(t,i,r),a=gc(i);return new ln({user:s,providerId:a,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const r=gc(i);return new ln({user:t,providerId:r,_tokenResponse:i,operationType:e})}}function gc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends de{constructor(t,e,i,r){var s;super(e.code,e.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ur.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,r){return new ur(t,e,i,r)}}function Hl(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ur._fromErrorAndOperation(n,s,t,i):s})}async function Of(n,t,e=!1){const i=await ii(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return ln._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(n,t,e=!1){const{auth:i}=n;if(ee(i.app))return Promise.reject($e(i));const r="reauthenticate";try{const s=await ii(n,Hl(i,r,t,n),e);j(s.idToken,i,"internal-error");const a=uo(s.idToken);j(a,i,"internal-error");const{sub:l}=a;return j(n.uid===l,i,"user-mismatch"),ln._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(n,t,e=!1){if(ee(n.app))return Promise.reject($e(n));const i="signIn",r=await Hl(n,i,t),s=await ln._fromIdTokenResponse(n,i,r);return e||await n._updateCurrentUser(s.user),s}function $f(n,t,e,i){return pt(n).onIdTokenChanged(t,e,i)}function Ff(n,t,e){return pt(n).beforeAuthStateChanged(t,e)}function Uf(n,t,e,i){return pt(n).onAuthStateChanged(t,e,i)}function Bf(n){return pt(n).signOut()}const dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=1e3,jf=10;class Kl extends Gl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),r=this.localCache[e];i!==r&&t(e,r,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!e&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);vf()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,jf):r()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},zf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Kl.type="LOCAL";const qf=Kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Gl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ql.type="SESSION";const Yl=Ql;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const i=new Rr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:r,data:s}=e.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(a).map(async h=>h(e.origin,s)),u=await Wf(l);e.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=mo("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(v){const m=v;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function Gf(n){Wt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function Kf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Yf(){return Jl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="firebaseLocalStorageDb",Jf=1,hr="firebaseLocalStorage",Zl="fbase_key";class fi{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Sr(n,t){return n.transaction([hr],t?"readwrite":"readonly").objectStore(hr)}function Xf(){const n=indexedDB.deleteDatabase(Xl);return new fi(n).toPromise()}function Fs(){const n=indexedDB.open(Xl,Jf);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(hr,{keyPath:Zl})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(hr)?t(i):(i.close(),await Xf(),t(await Fs()))})})}async function _c(n,t,e){const i=Sr(n,!0).put({[Zl]:t,value:e});return new fi(i).toPromise()}async function Zf(n,t){const e=Sr(n,!1).get(t),i=await new fi(e).toPromise();return i===void 0?null:i.value}function yc(n,t){const e=Sr(n,!0).delete(t);return new fi(e).toPromise()}const tm=800,em=3;class tu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fs(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>em)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rr._getInstance(Yf()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Kf(),!this.activeServiceWorker)return;this.sender=new Hf(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Qf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fs();return await _c(t,dr,"1"),await yc(t,dr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>_c(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>Zf(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>yc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Sr(r,!1).getAll();return new fi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tu.type="LOCAL";const nm=tu;new hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,t){return t?re(t):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Wl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return on(t,this._buildIdpRequest())}_linkToIdToken(t,e){return on(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return on(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function im(n){return Lf(n.auth,new go(n),n.bypassAuthState)}function rm(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),Mf(e,new go(n),n.bypassAuthState)}async function sm(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),Of(e,new go(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:r,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return im;case"linkViaPopup":case"linkViaRedirect":return sm;case"reauthViaPopup":case"reauthViaRedirect":return rm;default:Qt(this.auth,"internal-error")}}resolve(t){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new hi(2e3,1e4);async function am(n,t,e){if(ee(n.app))return Promise.reject(Bt(n,"operation-not-supported-in-this-environment"));const i=xr(n);ef(n,t,fo);const r=eu(i,e);return new Me(i,"signInViaPopup",t,r).executeNotNull()}class Me extends nu{constructor(t,e,i,r,s){super(t,e,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Me.currentPopupAction&&Me.currentPopupAction.cancel(),Me.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){ce(this.filter.length===1,"Popup operations only handle one event");const t=mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Me.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,om.get())};t()}}Me.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="pendingRedirect",Xi=new Map;class lm extends nu{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Xi.get(this.auth._key());if(!t){try{const i=await um(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}Xi.set(this.auth._key(),t)}return this.bypassAuthState||Xi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function um(n,t){const e=pm(t),i=hm(n);if(!await i._isAvailable())return!1;const r=await i._get(e)==="true";return await i._remove(e),r}function dm(n,t){Xi.set(n._key(),t)}function hm(n){return re(n._redirectPersistence)}function pm(n){return Ji(cm,n.config.apiKey,n.name)}async function fm(n,t,e=!1){if(ee(n.app))return Promise.reject($e(n));const i=xr(n),r=eu(i,t),a=await new lm(i,r,e).execute();return a&&!e&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=10*60*1e3;class gm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_m(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!iu(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(Bt(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mm&&this.cachedEventUids.clear(),this.cachedEventUids.has(vc(t))}saveEventToCache(t){this.cachedEventUids.add(vc(t)),this.lastProcessedEventTime=Date.now()}}function vc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function iu({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function _m(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(n,t={}){return vn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wm=/^https?/;async function bm(n){if(n.config.emulator)return;const{authorizedDomains:t}=await ym(n);for(const e of t)try{if(Em(e))return}catch{}Qt(n,"unauthorized-domain")}function Em(n){const t=Ls(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===i}if(!wm.test(e))return!1;if(vm.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new hi(3e4,6e4);function wc(){const n=Wt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Tm(n){return new Promise((t,e)=>{var i,r,s;function a(){wc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wc(),e(Bt(n,"network-request-failed"))},timeout:Im.get()})}if(!((r=(i=Wt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)a();else{const l=Sf("iframefcb");return Wt()[l]=()=>{gapi.load?a():e(Bt(n,"network-request-failed"))},xf(`${Rf()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw Zi=null,t})}let Zi=null;function Am(n){return Zi=Zi||Tm(n),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new hi(5e3,15e3),Rm="__/auth/iframe",Sm="emulator/auth/iframe",Cm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function km(n){const t=n.config;j(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?co(t,Sm):`https://${n.config.authDomain}/${Rm}`,i={apiKey:t.apiKey,appName:n.name,v:yn},r=Pm.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${e}?${di(i).slice(1)}`}async function Dm(n){const t=await Am(n),e=Wt().gapi;return j(e,n,"internal-error"),t.open({where:document.body,url:km(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cm,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=Bt(n,"network-request-failed"),l=Wt().setTimeout(()=>{s(a)},xm.get());function u(){Wt().clearTimeout(l),r(i)}i.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nm=500,Om=600,Mm="_blank",Lm="http://localhost";class bc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $m(n,t,e,i=Nm,r=Om){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Vm),{width:i.toString(),height:r.toString(),top:s,left:a}),h=St().toLowerCase();e&&(l=Ll(h)?Mm:e),Ol(h)&&(t=t||Lm,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[I,S])=>`${m}${I}=${S},`,"");if(yf(h)&&l!=="_self")return Fm(t||"",l),new bc(null);const v=window.open(t||"",l,f);j(v,n,"popup-blocked");try{v.focus()}catch{}return new bc(v)}function Fm(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="__/auth/handler",Bm="emulator/auth/handler",zm=encodeURIComponent("fac");async function Ec(n,t,e,i,r,s){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:yn,eventId:r};if(t instanceof fo){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",zh(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,v]of Object.entries({}))a[f]=v}if(t instanceof pi){const f=t.getScopes().filter(v=>v!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${zm}=${encodeURIComponent(u)}`:"";return`${jm(n)}?${di(l).slice(1)}${h}`}function jm({config:n}){return n.emulator?co(n,Bm):`https://${n.authDomain}/${Um}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="webStorageSupport";class qm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yl,this._completeRedirectFn=fm,this._overrideRedirectResult=dm}async _openPopup(t,e,i,r){var s;ce((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Ec(t,e,i,Ls(),r);return $m(t,a,mo())}async _openRedirect(t,e,i,r){await this._originValidation(t);const s=await Ec(t,e,i,Ls(),r);return Gf(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:s}=this.eventManagers[e];return r?Promise.resolve(r):(ce(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await Dm(t),i=new gm(t);return e.register("authEvent",r=>(j(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(xs,{type:xs},r=>{var s;const a=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[xs];a!==void 0&&e(!!a),Qt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=bm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return zl()||Ml()||ho()}}const Wm=qm;var Ic="@firebase/auth",Tc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Km(n){cn(new Ue("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jl(n)},h=new Tf(i,r,s,u);return Pf(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),cn(new Ue("auth-internal",t=>{const e=xr(t.getProvider("auth").getImmediate());return(i=>new Hm(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(Ic,Tc,Gm(n)),Ie(Ic,Tc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=5*60,Ym=wl("authIdTokenMaxAge")||Qm;let Ac=null;const Jm=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>Ym)return;const r=e==null?void 0:e.token;Ac!==r&&(Ac=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Xm(n=Tl()){const t=ro(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Cf(n,{popupRedirectResolver:Wm,persistence:[nm,qf,Yl]}),i=wl("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=Jm(s.toString());Ff(e,a,()=>a(e.currentUser)),$f(e,l=>a(l))}}const r=yl("auth");return r&&kf(e,`http://${r}`),e}function Zm(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Af({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=r=>{const s=Bt("internal-error");s.customData=r,e(s)},i.type="text/javascript",i.charset="UTF-8",Zm().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Km("Browser");var tg="firebase",eg="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(tg,eg,"app");var xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fe,ru;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,g){function _(){}_.prototype=g.prototype,w.D=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(b,E,A){for(var y=Array(arguments.length-2),Jt=2;Jt<arguments.length;Jt++)y[Jt-2]=arguments[Jt];return g.prototype[E].apply(b,y)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,g,_){_||(_=0);var b=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)b[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)b[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],E=w.g[2];var A=w.g[3],y=g+(A^_&(E^A))+b[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+b[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+b[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+b[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+b[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+b[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+b[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+b[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+b[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+b[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+b[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+b[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+b[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+b[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+b[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+b[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^A&(_^E))+b[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+b[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+b[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+b[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+b[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+b[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+b[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+b[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+b[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+b[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+b[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+b[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+b[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+b[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+b[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+b[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^A)+b[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+b[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+b[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+b[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+b[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+b[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+b[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+b[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+b[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+b[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+b[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+b[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+b[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+b[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+b[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+b[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~A))+b[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+b[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+b[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+b[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+b[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+b[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+b[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+b[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+b[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+b[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+b[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+b[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+b[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+b[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+b[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+A&4294967295}i.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var _=g-this.blockSize,b=this.B,E=this.h,A=0;A<g;){if(E==0)for(;A<=_;)r(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<g;)if(b[E++]=w.charCodeAt(A++),E==this.blockSize){r(this,b),E=0;break}}else for(;A<g;)if(b[E++]=w[A++],E==this.blockSize){r(this,b),E=0;break}}this.h=E,this.o+=g},i.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var _=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=_&255,_/=256;for(this.u(w),w=Array(16),g=_=0;4>g;++g)for(var b=0;32>b;b+=8)w[_++]=this.g[g]>>>b&255;return w};function s(w,g){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function a(w,g){this.h=g;for(var _=[],b=!0,E=w.length-1;0<=E;E--){var A=w[E]|0;b&&A==g||(_[E]=A,b=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return P(h(-w));for(var g=[],_=1,b=0;w>=_;b++)g[b]=w/_|0,_*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return P(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),b=v,E=0;E<w.length;E+=8){var A=Math.min(8,w.length-E),y=parseInt(w.substring(E,E+A),g);8>A?(A=h(Math.pow(g,A)),b=b.j(A).add(h(y))):(b=b.j(_),b=b.add(h(y)))}return b}var v=u(0),m=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();for(var w=0,g=1,_=0;_<this.g.length;_++){var b=this.i(_);w+=(0<=b?b:4294967296+b)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(D(this))return"-"+P(this).toString(w);for(var g=h(Math.pow(w,6)),_=this,b="";;){var E=W(_,g).g;_=U(_,E.j(g));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=E,S(_))return A+b;for(;6>A.length;)A="0"+A;b=A+b}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=U(this,w),D(w)?-1:S(w)?0:1};function P(w){for(var g=w.g.length,_=[],b=0;b<g;b++)_[b]=~w.g[b];return new a(_,~w.h).add(m)}n.abs=function(){return D(this)?P(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0,E=0;E<=g;E++){var A=b+(this.i(E)&65535)+(w.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);b=y>>>16,A&=65535,y&=65535,_[E]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(w,g){return w.add(P(g))}n.j=function(w){if(S(this)||S(w))return v;if(D(this))return D(w)?P(this).j(P(w)):P(P(this).j(w));if(D(w))return P(this.j(P(w)));if(0>this.l(I)&&0>w.l(I))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,_=[],b=0;b<2*g;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var E=0;E<w.g.length;E++){var A=this.i(b)>>>16,y=this.i(b)&65535,Jt=w.i(E)>>>16,Rn=w.i(E)&65535;_[2*b+2*E]+=y*Rn,M(_,2*b+2*E),_[2*b+2*E+1]+=A*Rn,M(_,2*b+2*E+1),_[2*b+2*E+1]+=y*Jt,M(_,2*b+2*E+1),_[2*b+2*E+2]+=A*Jt,M(_,2*b+2*E+2)}for(b=0;b<g;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=g;b<2*g;b++)_[b]=0;return new a(_,0)};function M(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function V(w,g){this.g=w,this.h=g}function W(w,g){if(S(g))throw Error("division by zero");if(S(w))return new V(v,v);if(D(w))return g=W(P(w),g),new V(P(g.g),P(g.h));if(D(g))return g=W(w,P(g)),new V(P(g.g),g.h);if(30<w.g.length){if(D(w)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var _=m,b=g;0>=b.l(w);)_=N(_),b=N(b);var E=k(_,1),A=k(b,1);for(b=k(b,2),_=k(_,2);!S(b);){var y=A.add(b);0>=y.l(w)&&(E=E.add(_),A=y),b=k(b,1),_=k(_,1)}return g=U(w,E.j(g)),new V(E,g)}for(E=v;0<=w.l(g);){for(_=Math.max(1,Math.floor(w.m()/g.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),A=h(_),y=A.j(g);D(y)||0<y.l(w);)_-=b,A=h(_),y=A.j(g);S(A)&&(A=m),E=E.add(A),w=U(w,y)}return new V(E,w)}n.A=function(w){return W(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)&w.i(b);return new a(_,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)|w.i(b);return new a(_,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)^w.i(b);return new a(_,this.h^w.h)};function N(w){for(var g=w.g.length+1,_=[],b=0;b<g;b++)_[b]=w.i(b)<<1|w.i(b-1)>>>31;return new a(_,w.h)}function k(w,g){var _=g>>5;g%=32;for(var b=w.g.length-_,E=[],A=0;A<b;A++)E[A]=0<g?w.i(A+_)>>>g|w.i(A+_+1)<<32-g:w.i(A+_);return new a(E,w.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,ru=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Fe=a}).apply(typeof xc<"u"?xc:typeof self<"u"?self:typeof window<"u"?window:{});var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var su,Gn,ou,tr,Us,au,cu,lu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hi=="object"&&Hi];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=e(this);function r(o,c){if(c)t:{var d=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in d))break t;d=d[T]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&t(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,T={next:function(){if(!p&&d<o.length){var x=d++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}r("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function v(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),o.apply(c,T)}}return function(){return o.apply(c,arguments)}}function m(o,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:v,m.apply(null,arguments)}function I(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,T,x){for(var O=Array(arguments.length-2),et=2;et<arguments.length;et++)O[et-2]=arguments[et];return c.prototype[T].apply(p,O)}}function D(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function P(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const T=o.length||0,x=p.length||0;o.length=T+x;for(let O=0;O<x;O++)o[T+O]=p[O]}else o.push(p)}}class U{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var N=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function k(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function w(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,c){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)o[d]=p[d];for(let x=0;x<_.length;x++)d=_[x],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function E(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Yr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Jt{constructor(){this.h=this.g=null}add(c,d){const p=Rn.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Rn=new U(()=>new Fd,o=>o.reset());class Fd{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Sn,Cn=!1,Yr=new Jt,Zo=()=>{const o=l.Promise.resolve(void 0);Sn=()=>{o.then(Ud)}};var Ud=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var c=Rn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Cn=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function wt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var Bd=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Pn(o,c){if(wt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(N){t:{try{W(c.nodeName);var T=!0;break t}catch{}T=!1}T||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:zd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Pn.aa.h.call(this)}}S(Pn,wt);var zd={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var xi="closure_listenable_"+(1e6*Math.random()|0),jd=0;function qd(o,c,d,p,T){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=T,this.key=++jd,this.da=this.fa=!1}function Ri(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Si(o){this.src=o,this.g={},this.h=0}Si.prototype.add=function(o,c,d,p,T){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var O=Xr(o,c,p,T);return-1<O?(c=o[O],d||(c.fa=!1)):(c=new qd(c,this.src,x,!!p,T),c.fa=d,o.push(c)),c};function Jr(o,c){var d=c.type;if(d in o.g){var p=o.g[d],T=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=T)&&Array.prototype.splice.call(p,T,1),x&&(Ri(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Xr(o,c,d,p){for(var T=0;T<o.length;++T){var x=o[T];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return T}return-1}var Zr="closure_lm_"+(1e6*Math.random()|0),ts={};function ta(o,c,d,p,T){if(Array.isArray(c)){for(var x=0;x<c.length;x++)ta(o,c[x],d,p,T);return null}return d=ia(d),o&&o[xi]?o.K(c,d,h(p)?!!p.capture:!1,T):Wd(o,c,d,!1,p,T)}function Wd(o,c,d,p,T,x){if(!c)throw Error("Invalid event type");var O=h(T)?!!T.capture:!!T,et=ns(o);if(et||(o[Zr]=et=new Si(o)),d=et.add(c,d,p,O,x),d.proxy)return d;if(p=Hd(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Bd||(T=O),T===void 0&&(T=!1),o.addEventListener(c.toString(),p,T);else if(o.attachEvent)o.attachEvent(na(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Hd(){function o(d){return c.call(o.src,o.listener,d)}const c=Gd;return o}function ea(o,c,d,p,T){if(Array.isArray(c))for(var x=0;x<c.length;x++)ea(o,c[x],d,p,T);else p=h(p)?!!p.capture:!!p,d=ia(d),o&&o[xi]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],d=Xr(x,d,p,T),-1<d&&(Ri(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=ns(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Xr(c,d,p,T)),(d=-1<o?c[o]:null)&&es(d))}function es(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[xi])Jr(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(na(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=ns(c))?(Jr(d,o),d.h==0&&(d.src=null,c[Zr]=null)):Ri(o)}}}function na(o){return o in ts?ts[o]:ts[o]="on"+o}function Gd(o,c){if(o.da)o=!0;else{c=new Pn(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&es(o),o=d.call(p,c)}return o}function ns(o){return o=o[Zr],o instanceof Si?o:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(o){return typeof o=="function"?o:(o[is]||(o[is]=function(c){return o.handleEvent(c)}),o[is])}function bt(){he.call(this),this.i=new Si(this),this.M=this,this.F=null}S(bt,he),bt.prototype[xi]=!0,bt.prototype.removeEventListener=function(o,c,d,p){ea(this,o,c,d,p)};function Pt(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new wt(c,o);else if(c instanceof wt)c.target=c.target||o;else{var T=c;c=new wt(p,o),b(c,T)}if(T=!0,d)for(var x=d.length-1;0<=x;x--){var O=c.g=d[x];T=Ci(O,p,!0,c)&&T}if(O=c.g=o,T=Ci(O,p,!0,c)&&T,T=Ci(O,p,!1,c)&&T,d)for(x=0;x<d.length;x++)O=c.g=d[x],T=Ci(O,p,!1,c)&&T}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Ri(d[p]);delete o.g[c],o.h--}}this.F=null},bt.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},bt.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Ci(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,x=0;x<c.length;++x){var O=c[x];if(O&&!O.da&&O.capture==d){var et=O.listener,mt=O.ha||O.src;O.fa&&Jr(o.i,O),T=et.call(mt,p)!==!1&&T}}return T&&!p.defaultPrevented}function ra(o,c,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function sa(o){o.g=ra(()=>{o.g=null,o.i&&(o.i=!1,sa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Kd extends he{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:sa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kn(o){he.call(this),this.h=o,this.g={}}S(kn,he);var oa=[];function aa(o){k(o.g,function(c,d){this.g.hasOwnProperty(d)&&es(c)},o),o.g={}}kn.prototype.N=function(){kn.aa.N.call(this),aa(this)},kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rs=l.JSON.stringify,Qd=l.JSON.parse,Yd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ss(){}ss.prototype.h=null;function ca(o){return o.h||(o.h=o.i())}function la(){}var Dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function os(){wt.call(this,"d")}S(os,wt);function as(){wt.call(this,"c")}S(as,wt);var Pe={},ua=null;function Pi(){return ua=ua||new bt}Pe.La="serverreachability";function da(o){wt.call(this,Pe.La,o)}S(da,wt);function Vn(o){const c=Pi();Pt(c,new da(c))}Pe.STAT_EVENT="statevent";function ha(o,c){wt.call(this,Pe.STAT_EVENT,o),this.stat=c}S(ha,wt);function kt(o){const c=Pi();Pt(c,new ha(c,o))}Pe.Ma="timingevent";function pa(o,c){wt.call(this,Pe.Ma,o),this.size=c}S(pa,wt);function Nn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function On(){this.g=!0}On.prototype.xa=function(){this.g=!1};function Jd(o,c,d,p,T,x){o.info(function(){if(o.g)if(x)for(var O="",et=x.split("&"),mt=0;mt<et.length;mt++){var X=et[mt].split("=");if(1<X.length){var Et=X[0];X=X[1];var It=Et.split("_");O=2<=It.length&&It[1]=="type"?O+(Et+"="+X+"&"):O+(Et+"=redacted&")}}else O=null;else O=x;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+c+`
`+d+`
`+O})}function Xd(o,c,d,p,T,x,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+c+`
`+d+`
`+x+" "+O})}function Ye(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+th(o,d)+(p?" "+p:"")})}function Zd(o,c){o.info(function(){return"TIMEOUT: "+c})}On.prototype.info=function(){};function th(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var x=T[0];if(x!="noop"&&x!="stop"&&x!="close")for(var O=1;O<T.length;O++)T[O]=""}}}}return rs(d)}catch{return c}}var ki={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cs;function Di(){}S(Di,ss),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},cs=new Di;function pe(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ma}function ma(){this.i=null,this.g="",this.h=!1}var ga={},ls={};function us(o,c,d){o.L=1,o.v=Mi(Xt(c)),o.m=d,o.P=!0,_a(o,null)}function _a(o,c){o.F=Date.now(),Vi(o),o.A=Xt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ka(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ma,o.g=Qa(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Kd(m(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(oa[0]=T.toString()),T=oa);for(var x=0;x<T.length;x++){var O=ta(d,T[x],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Vn(),Jd(o.i,o.u,o.A,o.l,o.R,o.m)}pe.prototype.ca=function(o){o=o.target;const c=this.M;c&&Zt(o)==3?c.j():this.Y(o)},pe.prototype.Y=function(o){try{if(o==this.g)t:{const It=Zt(this.g);var c=this.g.Ba();const Ze=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||$a(this.g)))){this.J||It!=4||c==7||(c==8||0>=Ze?Vn(3):Vn(2)),ds(this);var d=this.g.Z();this.X=d;e:if(ya(this)){var p=$a(this.g);o="";var T=p.length,x=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Mn(this);var O="";break e}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==T-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Xd(this.i,this.u,this.A,this.l,this.R,It,d),this.o){if(this.T&&!this.K){e:{if(this.g){var et,mt=this.g;if((et=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(et)){var X=et;break e}}X=null}if(d=X)Ye(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hs(this,d);else{this.o=!1,this.s=3,kt(12),ke(this),Mn(this);break t}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<O.length;)if(Ft=eh(this,O),Ft==ls){It==4&&(this.s=4,kt(14),d=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==ga){this.s=4,kt(15),Ye(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Ye(this.i,this.l,Ft,null),hs(this,Ft);if(ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||O.length!=0||this.h.h||(this.s=1,kt(16),d=!1),this.o=this.o&&d,!d)Ye(this.i,this.l,O,"[Invalid Chunked Response]"),ke(this),Mn(this);else if(0<O.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),ys(Et),Et.M=!0,kt(11))}}else Ye(this.i,this.l,O,null),hs(this,O);It==4&&ke(this),this.o&&!this.J&&(It==4?Wa(this.j,this):(this.o=!1,Vi(this)))}else yh(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),ke(this),Mn(this)}}}catch{}finally{}};function ya(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function eh(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?ls:(d=Number(c.substring(d,p)),isNaN(d)?ga:(p+=1,p+d>c.length?ls:(c=c.slice(p,p+d),o.C=p+d,c)))}pe.prototype.cancel=function(){this.J=!0,ke(this)};function Vi(o){o.S=Date.now()+o.I,va(o,o.I)}function va(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Nn(m(o.ba,o),c)}function ds(o){o.B&&(l.clearTimeout(o.B),o.B=null)}pe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Zd(this.i,this.A),this.L!=2&&(Vn(),kt(17)),ke(this),this.s=2,Mn(this)):va(this,this.S-o)};function Mn(o){o.j.G==0||o.J||Wa(o.j,o)}function ke(o){ds(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,aa(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function hs(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||ps(d.h,o))){if(!o.K&&ps(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)zi(d),Ui(d);else break t;_s(d),kt(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=Nn(m(d.Za,d),6e3));if(1>=Ea(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ve(d,11)}else if((o.K||d.g==o)&&zi(d),!M(c))for(T=d.Da.g.parse(c),c=0;c<T.length;c++){let X=T[c];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const Et=X[3];Et!=null&&(d.la=Et,d.j.info("VER="+d.la));const It=X[4];It!=null&&(d.Aa=It,d.j.info("SVER="+d.Aa));const Ze=X[5];Ze!=null&&typeof Ze=="number"&&0<Ze&&(p=1.5*Ze,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ft=o.g;if(Ft){const qi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var x=p.h;x.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(fs(x,x.h),x.h=null))}if(p.D){const vs=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;vs&&(p.ya=vs,nt(p.I,p.D,vs))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Ka(p,p.J?p.ia:null,p.W),O.K){Ia(p.h,O);var et=O,mt=p.L;mt&&(et.I=mt),et.B&&(ds(et),Vi(et)),p.g=O}else ja(p);0<d.i.length&&Bi(d)}else X[0]!="stop"&&X[0]!="close"||Ve(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ve(d,7):gs(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Vn(4)}catch{}}var nh=class{constructor(o,c){this.g=o,this.map=c}};function wa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ba(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ea(o){return o.h?1:o.g?o.g.size:0}function ps(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function fs(o,c){o.g?o.g.add(c):o.h=c}function Ia(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}wa.prototype.cancel=function(){if(this.i=Ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ta(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return D(o.i)}function ih(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function rh(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Aa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=rh(o),p=ih(o),T=p.length,x=0;x<T;x++)c.call(void 0,p[x],d&&d[x],o)}var xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sh(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),T=null;if(0<=p){var x=o[d].substring(0,p);T=o[d].substring(p+1)}else x=o[d];c(x,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function De(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof De){this.h=o.h,Ni(this,o.j),this.o=o.o,this.g=o.g,Oi(this,o.s),this.l=o.l;var c=o.i,d=new Fn;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Ra(this,d),this.m=o.m}else o&&(c=String(o).match(xa))?(this.h=!1,Ni(this,c[1]||"",!0),this.o=Ln(c[2]||""),this.g=Ln(c[3]||"",!0),Oi(this,c[4]),this.l=Ln(c[5]||"",!0),Ra(this,c[6]||"",!0),this.m=Ln(c[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}De.prototype.toString=function(){var o=[],c=this.j;c&&o.push($n(c,Sa,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push($n(c,Sa,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push($n(d,d.charAt(0)=="/"?ch:ah,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",$n(d,uh)),o.join("")};function Xt(o){return new De(o)}function Ni(o,c,d){o.j=d?Ln(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Oi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ra(o,c,d){c instanceof Fn?(o.i=c,dh(o.i,o.h)):(d||(c=$n(c,lh)),o.i=new Fn(c,o.h))}function nt(o,c,d){o.i.set(c,d)}function Mi(o){return nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ln(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $n(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,oh),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function oh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Sa=/[#\/\?@]/g,ah=/[#\?:]/g,ch=/[#\?]/g,lh=/[#\?@]/g,uh=/#/g;function Fn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function fe(o){o.g||(o.g=new Map,o.h=0,o.i&&sh(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Fn.prototype,n.add=function(o,c){fe(this),this.i=null,o=Je(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Ca(o,c){fe(o),c=Je(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Pa(o,c){return fe(o),c=Je(o,c),o.g.has(c)}n.forEach=function(o,c){fe(this),this.g.forEach(function(d,p){d.forEach(function(T){o.call(c,T,p,this)},this)},this)},n.na=function(){fe(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const T=o[p];for(let x=0;x<T.length;x++)d.push(c[p])}return d},n.V=function(o){fe(this);let c=[];if(typeof o=="string")Pa(this,o)&&(c=c.concat(this.g.get(Je(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return fe(this),this.i=null,o=Je(this,o),Pa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ka(o,c,d){Ca(o,c),0<d.length&&(o.i=null,o.g.set(Je(o,c),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var T=x;O[p]!==""&&(T+="="+encodeURIComponent(String(O[p]))),o.push(T)}}return this.i=o.join("&")};function Je(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function dh(o,c){c&&!o.j&&(fe(o),o.i=null,o.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(Ca(this,p),ka(this,T,d))},o)),o.j=c}function hh(o,c){const d=new On;if(l.Image){const p=new Image;p.onload=I(me,d,"TestLoadImage: loaded",!0,c,p),p.onerror=I(me,d,"TestLoadImage: error",!1,c,p),p.onabort=I(me,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(me,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function ph(o,c){const d=new On,p=new AbortController,T=setTimeout(()=>{p.abort(),me(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(T),x.ok?me(d,"TestPingServer: ok",!0,c):me(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),me(d,"TestPingServer: error",!1,c)})}function me(o,c,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function fh(){this.g=new Yd}function mh(o,c,d){const p=d||"";try{Aa(o,function(T,x){let O=T;h(T)&&(O=rs(T)),c.push(p+x+"="+encodeURIComponent(O))})}catch(T){throw c.push(p+"type="+encodeURIComponent("_badmap")),T}}function Li(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Li,ss),Li.prototype.g=function(){return new $i(this.l,this.j)},Li.prototype.i=function(o){return function(){return o}}({});function $i(o,c){bt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S($i,bt),n=$i.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Bn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Da(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Da(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Un(this):Bn(this),this.readyState==3&&Da(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Un(this))},n.Qa=function(o){this.g&&(this.response=o,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Bn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Bn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Va(o){let c="";return k(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function ms(o,c,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=Va(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):nt(o,c,d))}function ot(o){bt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ot,bt);var gh=/^https?$/i,_h=["POST","PUT"];n=ot.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cs.g(),this.v=this.o?ca(this.o):ca(cs),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){Na(this,x);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),T=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(_h,c,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,O]of d)this.g.setRequestHeader(x,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{La(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Na(this,x)}};function Na(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Oa(o),Fi(o)}function Oa(o){o.A||(o.A=!0,Pt(o,"complete"),Pt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pt(this,"complete"),Pt(this,"abort"),Fi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ma(this):this.bb())},n.bb=function(){Ma(this)};function Ma(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)ra(o.Ea,0,o);else if(Pt(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const O=o.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var p;if(p=O===0){var T=String(o.D).match(xa)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),p=!gh.test(T?T.toLowerCase():"")}d=p}if(d)Pt(o,"complete"),Pt(o,"success");else{o.m=6;try{var x=2<Zt(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Oa(o)}}finally{Fi(o)}}}}function Fi(o,c){if(o.g){La(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Pt(o,"ready");try{d.onreadystatechange=p}catch{}}}function La(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Qd(c)}};function $a(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function yh(o){const c={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=E(o[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[T]||[];c[T]=x,x.push(d)}w(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Fa(o){this.Aa=0,this.i=[],this.j=new On,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,o),this.cb=zn("retryDelaySeedMs",1e4,o),this.Wa=zn("forwardChannelMaxRetries",2,o),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new wa(o&&o.concurrentRequestLimit),this.Da=new fh,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fa.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){kt(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ka(this,null,this.W),Bi(this)};function gs(o){if(Ua(o),o.G==3){var c=o.U++,d=Xt(o.I);if(nt(d,"SID",o.K),nt(d,"RID",c),nt(d,"TYPE","terminate"),jn(o,d),c=new pe(o,o.j,c),c.L=2,c.v=Mi(Xt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Qa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vi(c)}Ga(o)}function Ui(o){o.g&&(ys(o),o.g.cancel(),o.g=null)}function Ua(o){Ui(o),o.u&&(l.clearTimeout(o.u),o.u=null),zi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Bi(o){if(!ba(o.h)&&!o.s){o.s=!0;var c=o.Ga;Sn||Zo(),Cn||(Sn(),Cn=!0),Yr.add(c,o),o.B=0}}function vh(o,c){return Ea(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Nn(m(o.Ga,o,c),Ha(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new pe(this,this.j,o);let x=this.o;if(this.S&&(x?(x=g(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(T.H=x,x=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=za(this,T,c),d=Xt(this.I),nt(d,"RID",o),nt(d,"CVER",22),this.D&&nt(d,"X-HTTP-Session-Id",this.D),jn(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(Va(x)))+"&"+c:this.m&&ms(d,this.m,x)),fs(this.h,T),this.Ua&&nt(d,"TYPE","init"),this.P?(nt(d,"$req",c),nt(d,"SID","null"),T.T=!0,us(T,d,null)):us(T,d,c),this.G=2}}else this.G==3&&(o?Ba(this,o):this.i.length==0||ba(this.h)||Ba(this))};function Ba(o,c){var d;c?d=c.l:d=o.U++;const p=Xt(o.I);nt(p,"SID",o.K),nt(p,"RID",d),nt(p,"AID",o.T),jn(o,p),o.m&&o.o&&ms(p,o.m,o.o),d=new pe(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=za(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),fs(o.h,d),us(d,p,c)}function jn(o,c){o.H&&k(o.H,function(d,p){nt(c,p,d)}),o.l&&Aa({},function(d,p){nt(c,p,d)})}function za(o,c,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;t:{var T=o.i;let x=-1;for(;;){const O=["count="+d];x==-1?0<d?(x=T[0].g,O.push("ofs="+x)):x=0:O.push("ofs="+x);let et=!0;for(let mt=0;mt<d;mt++){let X=T[mt].g;const Et=T[mt].map;if(X-=x,0>X)x=Math.max(0,T[mt].g-100),et=!1;else try{mh(Et,O,"req"+X+"_")}catch{p&&p(Et)}}if(et){p=O.join("&");break t}}}return o=o.i.splice(0,d),c.D=o,p}function ja(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Sn||Zo(),Cn||(Sn(),Cn=!0),Yr.add(c,o),o.v=0}}function _s(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Nn(m(o.Fa,o),Ha(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,qa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Nn(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Ui(this),qa(this))};function ys(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function qa(o){o.g=new pe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Xt(o.qa);nt(c,"RID","rpc"),nt(c,"SID",o.K),nt(c,"AID",o.T),nt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&nt(c,"TO",o.ja),nt(c,"TYPE","xmlhttp"),jn(o,c),o.m&&o.o&&ms(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Mi(Xt(c)),d.m=null,d.P=!0,_a(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ui(this),_s(this),kt(19))};function zi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Wa(o,c){var d=null;if(o.g==c){zi(o),ys(o),o.g=null;var p=2}else if(ps(o.h,c))d=c.D,Ia(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var T=o.B;p=Pi(),Pt(p,new pa(p,d)),Bi(o)}else ja(o);else if(T=c.s,T==3||T==0&&0<c.X||!(p==1&&vh(o,c)||p==2&&_s(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),T){case 1:Ve(o,5);break;case 4:Ve(o,10);break;case 3:Ve(o,6);break;default:Ve(o,2)}}}function Ha(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Ve(o,c){if(o.j.info("Error code "+c),c==2){var d=m(o.fb,o),p=o.Xa;const T=!p;p=new De(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ni(p,"https"),Mi(p),T?hh(p.toString(),d):ph(p.toString(),d)}else kt(2);o.G=0,o.l&&o.l.sa(c),Ga(o),Ua(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Ga(o){if(o.G=0,o.ka=[],o.l){const c=Ta(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Ka(o,c,d){var p=d instanceof De?Xt(d):new De(d);if(p.g!="")c&&(p.g=c+"."+p.g),Oi(p,p.s);else{var T=l.location;p=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var x=new De(null);p&&Ni(x,p),c&&(x.g=c),T&&Oi(x,T),d&&(x.l=d),p=x}return d=o.D,c=o.ya,d&&c&&nt(p,d,c),nt(p,"VER",o.la),jn(o,p),p}function Qa(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ot(new Li({eb:d})):new ot(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ya(){}n=Ya.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ji(){}ji.prototype.g=function(o,c){return new Ot(o,c)};function Ot(o,c){bt.call(this),this.g=new Fa(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Xe(this)}S(Ot,bt),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){gs(this.g)},Ot.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=rs(o),o=d);c.i.push(new nh(c.Ya++,o)),c.G==3&&Bi(c)},Ot.prototype.N=function(){this.g.l=null,delete this.j,gs(this.g),delete this.g,Ot.aa.N.call(this)};function Ja(o){os.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const d in c){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(Ja,os);function Xa(){as.call(this),this.status=1}S(Xa,as);function Xe(o){this.g=o}S(Xe,Ya),Xe.prototype.ua=function(){Pt(this.g,"a")},Xe.prototype.ta=function(o){Pt(this.g,new Ja(o))},Xe.prototype.sa=function(o){Pt(this.g,new Xa)},Xe.prototype.ra=function(){Pt(this.g,"b")},ji.prototype.createWebChannel=ji.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,lu=function(){return new ji},cu=function(){return Pi()},au=Pe,Us={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ki.NO_ERROR=0,ki.TIMEOUT=8,ki.HTTP_ERROR=6,tr=ki,fa.COMPLETE="complete",ou=fa,la.EventType=Dn,Dn.OPEN="a",Dn.CLOSE="b",Dn.ERROR="c",Dn.MESSAGE="d",bt.prototype.listen=bt.prototype.K,Gn=la,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,su=ot}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});const Rc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new no("@firebase/firestore");function qn(){return ze.logLevel}function $(n,...t){if(ze.logLevel<=Q.DEBUG){const e=t.map(_o);ze.debug(`Firestore (${wn}): ${n}`,...e)}}function le(n,...t){if(ze.logLevel<=Q.ERROR){const e=t.map(_o);ze.error(`Firestore (${wn}): ${n}`,...e)}}function un(n,...t){if(ze.logLevel<=Q.WARN){const e=t.map(_o);ze.warn(`Firestore (${wn}): ${n}`,...e)}}function _o(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n="Unexpected state"){const t=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: `+n;throw le(t),new Error(t)}function tt(n,t){n||q()}function G(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends de{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(At.UNAUTHENTICATED))}shutdown(){}}class ig{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rg{constructor(t){this.t=t,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){tt(this.o===void 0);let i=this.i;const r=u=>this.i!==i?(i=this.i,e(u)):Promise.resolve();let s=new se;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new se,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new se)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string"),new uu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new At(t)}}class sg{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class og{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new sg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ag{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){tt(this.o===void 0);const i=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new ag(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=lg(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<e&&(i+=t.charAt(r[s]%t.length))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function dn(n,t,e){return n.length===t.length&&n.every((i,r)=>e(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ut.fromMillis(Date.now())}static fromDate(t){return ut.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new ut(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new ut(0,0))}static max(){return new H(new ut(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,i){e===void 0?e=0:e>t.length&&q(),i===void 0?i=t.length-e:i>t.length-e&&q(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return ri.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ri?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let r=0;r<i;r++){const s=t.get(r),a=e.get(r);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class it extends ri{construct(t,e,i){return new it(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new L(R.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(r=>r.length>0))}return new it(e)}static emptyPath(){return new it([])}}const ug=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends ri{construct(t,e,i){return new _t(t,e,i)}static isValidIdentifier(t){return ug.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(t){const e=[];let i="",r=0;const s=()=>{if(i.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new L(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(i+=l,r++):(s(),r++)}if(s(),a)throw new L(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(it.fromString(t))}static fromName(t){return new z(it.fromString(t).popFirst(5))}static empty(){return new z(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&it.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return it.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new it(t.slice()))}}function dg(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(i===1e9?new ut(e+1,0):new ut(e,i));return new Ae(r,z.empty(),t)}function hg(n){return new Ae(n.readTime,n.key,-1)}class Ae{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ae(H.min(),z.empty(),-1)}static max(){return new Ae(H.max(),z.empty(),-1)}}function pg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=z.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==fg)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,i)=>{e(t)})}static reject(t){return new C((e,i)=>{i(t)})}static waitFor(t){return new C((e,i)=>{let r=0,s=0,a=!1;t.forEach(l=>{++r,l.next(()=>{++s,a&&s===r&&e()},u=>i(u))}),a=!0,s===r&&e()})}static or(t){let e=C.resolve(!1);for(const i of t)e=e.next(r=>r?C.resolve(r):i());return e}static forEach(t,e){const i=[];return t.forEach((r,s)=>{i.push(e.call(this,r,s))}),this.waitFor(i)}static mapArray(t,e){return new C((i,r)=>{const s=t.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(f=>{a[h]=f,++l,l===s&&i(a)},f=>r(f))}})}static doWhile(t,e){return new C((i,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):i()};s()})}}function gg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function gi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}yo.oe=-1;function Cr(n){return n==null}function pr(n){return n===0&&1/n==-1/0}function _g(n){return typeof n=="number"&&Number.isInteger(n)&&!pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function We(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function hu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return e+i.left.size;r<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gi(this.root,t,this.comparator,!0)}}class Gi{constructor(t,e,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,i,r,s){this.key=t,this.value=e,this.color=i??gt.RED,this.left=r??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,r,s){return new gt(t??this.key,e??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,i),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return gt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,i,r,s){return this}insert(t,e,i){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Cc(this.data.getIterator())}getIteratorFrom(t){return new Cc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof yt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new yt(this.comparator);return e.data=t,e}}class Cc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new yt(_t.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return dn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pu("Invalid base64 string: "+s):s}}(t);return new vt(e)}static fromUint8Array(t){const e=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(t);return new vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const yg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xe(n){if(tt(!!n),typeof n=="string"){let t=0;const e=yg.exec(n);if(tt(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function je(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function wo(n){const t=n.mapValue.fields.__previous_value__;return vo(t)?wo(t):t}function si(n){const t=xe(n.mapValue.fields.__local_write_time__.timestampValue);return new ut(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e,i,r,s,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class oi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof oi&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={mapValue:{}};function qe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vo(n)?4:bg(n)?9007199254740991:wg(n)?10:11:q()}function Yt(n,t){if(n===t)return!0;const e=qe(n);if(e!==qe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return si(n).isEqual(si(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=xe(r.timestampValue),l=xe(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return je(r.bytesValue).isEqual(je(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return at(r.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(r.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return at(r.integerValue)===at(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=at(r.doubleValue),l=at(s.doubleValue);return a===l?pr(a)===pr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return dn(n.arrayValue.values||[],t.arrayValue.values||[],Yt);case 10:case 11:return function(r,s){const a=r.mapValue.fields||{},l=s.mapValue.fields||{};if(Sc(a)!==Sc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Yt(a[u],l[u])))return!1;return!0}(n,t);default:return q()}}function ai(n,t){return(n.values||[]).find(e=>Yt(e,t))!==void 0}function hn(n,t){if(n===t)return 0;const e=qe(n),i=qe(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=at(s.integerValue||s.doubleValue),u=at(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return Pc(n.timestampValue,t.timestampValue);case 4:return Pc(si(n),si(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(s,a){const l=je(s),u=je(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Z(l[h],u[h]);if(f!==0)return f}return Z(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=Z(at(s.latitude),at(a.latitude));return l!==0?l:Z(at(s.longitude),at(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return kc(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,u,h,f;const v=s.fields||{},m=a.fields||{},I=(l=v.value)===null||l===void 0?void 0:l.arrayValue,S=(u=m.value)===null||u===void 0?void 0:u.arrayValue,D=Z(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:kc(I,S)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===Ki.mapValue&&a===Ki.mapValue)return 0;if(s===Ki.mapValue)return 1;if(a===Ki.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let v=0;v<u.length&&v<f.length;++v){const m=Z(u[v],f[v]);if(m!==0)return m;const I=hn(l[u[v]],h[f[v]]);if(I!==0)return I}return Z(u.length,f.length)}(n.mapValue,t.mapValue);default:throw q()}}function Pc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=xe(n),i=xe(t),r=Z(e.seconds,i.seconds);return r!==0?r:Z(e.nanos,i.nanos)}function kc(n,t){const e=n.values||[],i=t.values||[];for(let r=0;r<e.length&&r<i.length;++r){const s=hn(e[r],i[r]);if(s)return s}return Z(e.length,i.length)}function pn(n){return Bs(n)}function Bs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=xe(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return je(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return z.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",r=!0;for(const s of e.values||[])r?r=!1:i+=",",i+=Bs(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${Bs(e.fields[a])}`;return r+"}"}(n.mapValue):q()}function Dc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function zs(n){return!!n&&"integerValue"in n}function bo(n){return!!n&&"arrayValue"in n}function Vc(n){return!!n&&"nullValue"in n}function Nc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function er(n){return!!n&&"mapValue"in n}function wg(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Xn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return We(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Xn(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Xn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function bg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!er(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xn(e)}setAll(t){let e=_t.emptyPath(),i={},r=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,i,r),i={},r=[],e=l.popLast()}a?i[l.lastSegment()]=Xn(a):r.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,r)}delete(t){const e=this.field(t.popLast());er(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Yt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=e.mapValue.fields[t.get(i)];er(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,i){We(e,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new Vt(Xn(this.value))}}function fu(n){const t=[];return We(n.fields,(e,i)=>{const r=new _t([e]);if(er(i)){const s=fu(i.mapValue).fields;if(s.length===0)t.push(r);else for(const a of s)t.push(r.child(a))}else t.push(r)}),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e,i,r,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new xt(t,0,H.min(),H.min(),H.min(),Vt.empty(),0)}static newFoundDocument(t,e,i,r){return new xt(t,1,e,H.min(),i,r,0)}static newNoDocument(t,e){return new xt(t,2,e,H.min(),H.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,H.min(),H.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e){this.position=t,this.inclusive=e}}function Oc(n,t,e){let i=0;for(let r=0;r<n.position.length;r++){const s=t[r],a=n.position[r];if(s.field.isKeyField()?i=z.comparator(z.fromName(a.referenceValue),e.key):i=hn(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Mc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Yt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Eg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{}class lt extends mu{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Tg(t,e,i):e==="array-contains"?new Rg(t,i):e==="in"?new Sg(t,i):e==="not-in"?new Cg(t,i):e==="array-contains-any"?new Pg(t,i):new lt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Ag(t,i):new xg(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(hn(e,this.value)):e!==null&&qe(this.value)===qe(e)&&this.matchesComparison(hn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends mu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new zt(t,e)}matches(t){return gu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gu(n){return n.op==="and"}function _u(n){return Ig(n)&&gu(n)}function Ig(n){for(const t of n.filters)if(t instanceof zt)return!1;return!0}function js(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+pn(n.value);if(_u(n))return n.filters.map(t=>js(t)).join(",");{const t=n.filters.map(e=>js(e)).join(",");return`${n.op}(${t})`}}function yu(n,t){return n instanceof lt?function(i,r){return r instanceof lt&&i.op===r.op&&i.field.isEqual(r.field)&&Yt(i.value,r.value)}(n,t):n instanceof zt?function(i,r){return r instanceof zt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,l)=>s&&yu(a,r.filters[l]),!0):!1}(n,t):void q()}function vu(n){return n instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${pn(e.value)}`}(n):n instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(vu).join(" ,")+"}"}(n):"Filter"}class Tg extends lt{constructor(t,e,i){super(t,e,i),this.key=z.fromName(i.referenceValue)}matches(t){const e=z.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ag extends lt{constructor(t,e){super(t,"in",e),this.keys=wu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xg extends lt{constructor(t,e){super(t,"not-in",e),this.keys=wu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function wu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>z.fromName(i.referenceValue))}class Rg extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bo(e)&&ai(e.arrayValue,this.value)}}class Sg extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ai(this.value.arrayValue,e)}}class Cg extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ai(this.value.arrayValue,e)}}class Pg extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>ai(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t,e=null,i=[],r=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Lc(n,t=null,e=[],i=[],r=null,s=null,a=null){return new kg(n,t,e,i,r,s,a)}function Eo(n){const t=G(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>js(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>pn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>pn(i)).join(",")),t.ue=e}return t.ue}function Io(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Eg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!yu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Mc(n.startAt,t.startAt)&&Mc(n.endAt,t.endAt)}function qs(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e=null,i=[],r=[],s=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dg(n,t,e,i,r,s,a,l){return new _i(n,t,e,i,r,s,a,l)}function To(n){return new _i(n)}function $c(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bu(n){return n.collectionGroup!==null}function Zn(n){const t=G(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new yt(_t.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new mr(s,i))}),e.has(_t.keyField().canonicalString())||t.ce.push(new mr(_t.keyField(),i))}return t.ce}function Ht(n){const t=G(n);return t.le||(t.le=Vg(t,Zn(n))),t.le}function Vg(n,t){if(n.limitType==="F")return Lc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new mr(r.field,s)});const e=n.endAt?new fr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new fr(n.startAt.position,n.startAt.inclusive):null;return Lc(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Ws(n,t){const e=n.filters.concat([t]);return new _i(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Hs(n,t,e){return new _i(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pr(n,t){return Io(Ht(n),Ht(t))&&n.limitType===t.limitType}function Eu(n){return`${Eo(Ht(n))}|lt:${n.limitType}`}function tn(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(r=>vu(r)).join(", ")}]`),Cr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(r=>pn(r)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(r=>pn(r)).join(",")),`Target(${i})`}(Ht(n))}; limitType=${n.limitType})`}function kr(n,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):z.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,r){for(const s of Zn(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,t)&&function(i,r){return!(i.startAt&&!function(a,l,u){const h=Oc(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,Zn(i),r)||i.endAt&&!function(a,l,u){const h=Oc(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,Zn(i),r))}(n,t)}function Ng(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Iu(n){return(t,e)=>{let i=!1;for(const r of Zn(n)){const s=Og(r,t,e);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Og(n,t,e){const i=n.field.isKeyField()?z.comparator(t.key,e.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?hn(u,h):q()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[e]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){We(this.inner,(e,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return hu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new st(z.comparator);function ue(){return Mg}const Tu=new st(z.comparator);function Kn(...n){let t=Tu;for(const e of n)t=t.insert(e.key,e);return t}function Au(n){let t=Tu;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Le(){return ti()}function xu(){return ti()}function ti(){return new bn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Lg=new st(z.comparator),$g=new yt(z.comparator);function K(...n){let t=$g;for(const e of n)t=t.add(e);return t}const Fg=new yt(Z);function Ug(){return Fg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(t)?"-0":t}}function Ru(n){return{integerValue:""+n}}function Bg(n,t){return _g(t)?Ru(t):Ao(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this._=void 0}}function zg(n,t,e){return n instanceof gr?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&vo(s)&&(s=wo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof ci?Cu(n,t):n instanceof li?Pu(n,t):function(r,s){const a=Su(r,s),l=Fc(a)+Fc(r.Pe);return zs(a)&&zs(r.Pe)?Ru(l):Ao(r.serializer,l)}(n,t)}function jg(n,t,e){return n instanceof ci?Cu(n,t):n instanceof li?Pu(n,t):e}function Su(n,t){return n instanceof _r?function(i){return zs(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class gr extends Dr{}class ci extends Dr{constructor(t){super(),this.elements=t}}function Cu(n,t){const e=ku(t);for(const i of n.elements)e.some(r=>Yt(r,i))||e.push(i);return{arrayValue:{values:e}}}class li extends Dr{constructor(t){super(),this.elements=t}}function Pu(n,t){let e=ku(t);for(const i of n.elements)e=e.filter(r=>!Yt(r,i));return{arrayValue:{values:e}}}class _r extends Dr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Fc(n){return at(n.integerValue||n.doubleValue)}function ku(n){return bo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function qg(n,t){return n.field.isEqual(t.field)&&function(i,r){return i instanceof ci&&r instanceof ci||i instanceof li&&r instanceof li?dn(i.elements,r.elements,Yt):i instanceof _r&&r instanceof _r?Yt(i.Pe,r.Pe):i instanceof gr&&r instanceof gr}(n.transform,t.transform)}class Wg{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Vr{}function Du(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Nr(n.key,Nt.none()):new yi(n.key,n.data,Nt.none());{const e=n.data,i=Vt.empty();let r=new yt(_t.comparator);for(let s of t.fields)if(!r.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new Se(n.key,i,new Mt(r.toArray()),Nt.none())}}function Hg(n,t,e){n instanceof yi?function(r,s,a){const l=r.value.clone(),u=Bc(r.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Se?function(r,s,a){if(!nr(r.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Bc(r.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Vu(r)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function ei(n,t,e,i){return n instanceof yi?function(s,a,l,u){if(!nr(s.precondition,a))return l;const h=s.value.clone(),f=zc(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,i):n instanceof Se?function(s,a,l,u){if(!nr(s.precondition,a))return l;const h=zc(s.fieldTransforms,u,a),f=a.data;return f.setAll(Vu(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(n,t,e,i):function(s,a,l){return nr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Gg(n,t){let e=null;for(const i of n.fieldTransforms){const r=t.data.field(i.field),s=Su(i.transform,r||null);s!=null&&(e===null&&(e=Vt.empty()),e.set(i.field,s))}return e||null}function Uc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&dn(i,r,(s,a)=>qg(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yi extends Vr{constructor(t,e,i,r=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Se extends Vr{constructor(t,e,i,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Bc(n,t,e){const i=new Map;tt(n.length===e.length);for(let r=0;r<e.length;r++){const s=n[r],a=s.transform,l=t.data.field(s.field);i.set(s.field,jg(a,l,e[r]))}return i}function zc(n,t,e){const i=new Map;for(const r of n){const s=r.transform,a=e.data.field(r.field);i.set(r.field,zg(s,a,t))}return i}class Nr extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kg extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t,e,i,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&Hg(s,t,i[r])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ei(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ei(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=xu();return this.mutations.forEach(r=>{const s=t.get(r.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(r.key)?null:l;const u=Du(a,l);u!==null&&i.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),K())}isEqual(t){return this.batchId===t.batchId&&dn(this.mutations,t.mutations,(e,i)=>Uc(e,i))&&dn(this.baseMutations,t.baseMutations,(e,i)=>Uc(e,i))}}class xo{constructor(t,e,i,r){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=r}static from(t,e,i){tt(t.mutations.length===i.length);let r=function(){return Lg}();const s=t.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new xo(t,e,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Y;function Xg(n){switch(n){default:return q();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Nu(n){if(n===void 0)return le("GRPC error has no .code"),R.UNKNOWN;switch(n){case ct.OK:return R.OK;case ct.CANCELLED:return R.CANCELLED;case ct.UNKNOWN:return R.UNKNOWN;case ct.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ct.INTERNAL:return R.INTERNAL;case ct.UNAVAILABLE:return R.UNAVAILABLE;case ct.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ct.NOT_FOUND:return R.NOT_FOUND;case ct.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ct.ABORTED:return R.ABORTED;case ct.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ct.DATA_LOSS:return R.DATA_LOSS;default:return q()}}(Y=ct||(ct={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Fe([4294967295,4294967295],0);function jc(n){const t=Zg().encode(n),e=new ru;return e.update(t),new Uint8Array(e.digest())}function qc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Fe([e,i],0),new Fe([r,s],0)]}class Ro{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Qn(`Invalid padding: ${e}`);if(i<0)throw new Qn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Qn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Qn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Fe.fromNumber(this.Ie)}Ee(t,e,i){let r=t.add(e.multiply(Fe.fromNumber(i)));return r.compare(t_)===1&&(r=new Fe([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=jc(t),[i,r]=qc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Ro(s,r,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=jc(t),[i,r]=qc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e,i,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const r=new Map;return r.set(t,vi.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Or(H.min(),r,new st(Z),ue(),K())}}class vi{constructor(t,e,i,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new vi(i,e,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,i,r){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=r}}class Ou{constructor(t,e){this.targetId=t,this.me=e}}class Mu{constructor(t,e,i=vt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=r}}class Wc{constructor(){this.fe=0,this.ge=Gc(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=K(),e=K(),i=K();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:i=i.add(r);break;default:q()}}),new vi(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Gc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class e_{constructor(t){this.Le=t,this.Be=new Map,this.ke=ue(),this.qe=Hc(),this.Qe=new st(Z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,i=t.me.count,r=this.Je(e);if(r){const s=r.target;if(qs(s))if(i===0){const a=new z(s.path);this.Ue(e,a,xt.newNoDocument(a,H.min()))}else tt(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=e;let a,l;try{a=je(i).toUint8Array()}catch(u){if(u instanceof pu)return un("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ro(a,r,s)}catch(u){return un(u instanceof Qn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&qs(l.target)){const u=new z(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,xt.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=K();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const r=new Or(t,e,this.Qe,this.ke,i);return this.ke=ue(),this.qe=Hc(),this.Qe=new st(Z),r}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Wc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new yt(Z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Wc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Hc(){return new st(z.comparator)}function Gc(){return new st(z.comparator)}const n_={asc:"ASCENDING",desc:"DESCENDING"},i_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r_={and:"AND",or:"OR"};class s_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gs(n,t){return n.useProto3Json||Cr(t)?t:{value:t}}function yr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function o_(n,t){return yr(n,t.toTimestamp())}function Gt(n){return tt(!!n),H.fromTimestamp(function(e){const i=xe(e);return new ut(i.seconds,i.nanos)}(n))}function So(n,t){return Ks(n,t).canonicalString()}function Ks(n,t){const e=function(r){return new it(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function $u(n){const t=it.fromString(n);return tt(ju(t)),t}function Qs(n,t){return So(n.databaseId,t.path)}function Rs(n,t){const e=$u(t);if(e.get(1)!==n.databaseId.projectId)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new z(Uu(e))}function Fu(n,t){return So(n.databaseId,t)}function a_(n){const t=$u(n);return t.length===4?it.emptyPath():Uu(t)}function Ys(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Uu(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Kc(n,t,e){return{name:Qs(n,t),fields:e.value.mapValue.fields}}function c_(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(tt(f===void 0||typeof f=="string"),vt.fromBase64String(f||"")):(tt(f===void 0||f instanceof Buffer||f instanceof Uint8Array),vt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?R.UNKNOWN:Nu(h.code);return new L(f,h.message||"")}(a);e=new Mu(i,r,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Rs(n,i.document.name),s=Gt(i.document.updateTime),a=i.document.createTime?Gt(i.document.createTime):H.min(),l=new Vt({mapValue:{fields:i.document.fields}}),u=xt.newFoundDocument(r,s,a,l),h=i.targetIds||[],f=i.removedTargetIds||[];e=new ir(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Rs(n,i.document),s=i.readTime?Gt(i.readTime):H.min(),a=xt.newNoDocument(r,s),l=i.removedTargetIds||[];e=new ir([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Rs(n,i.document),s=i.removedTargetIds||[];e=new ir([],s,r,null)}else{if(!("filter"in t))return q();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new Jg(r,s),l=i.targetId;e=new Ou(l,a)}}return e}function l_(n,t){let e;if(t instanceof yi)e={update:Kc(n,t.key,t.value)};else if(t instanceof Nr)e={delete:Qs(n,t.key)};else if(t instanceof Se)e={update:Kc(n,t.key,t.data),updateMask:y_(t.fieldMask)};else{if(!(t instanceof Kg))return q();e={verify:Qs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof gr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ci)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof li)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _r)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,i))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:o_(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,t.precondition)),e}function u_(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(r,s){let a=r.updateTime?Gt(r.updateTime):Gt(s);return a.isEqual(H.min())&&(a=Gt(s)),new Wg(a,r.transformResults||[])}(e,t))):[]}function d_(n,t){return{documents:[Fu(n,t.path)]}}function h_(n,t){const e={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Fu(n,r);const s=function(h){if(h.length!==0)return zu(zt.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:en(m.field),direction:m_(m.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Gs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:r}}function p_(n){let t=a_(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let r=null;if(i>0){tt(i===1);const f=e.from[0];f.allDescendants?r=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(v){const m=Bu(v);return m instanceof zt&&_u(m)?m.getFilters():[m]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(m=>function(S){return new mr(nn(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(e.orderBy));let l=null;e.limit&&(l=function(v){let m;return m=typeof v=="object"?v.value:v,Cr(m)?null:m}(e.limit));let u=null;e.startAt&&(u=function(v){const m=!!v.before,I=v.values||[];return new fr(I,m)}(e.startAt));let h=null;return e.endAt&&(h=function(v){const m=!v.before,I=v.values||[];return new fr(I,m)}(e.endAt)),Dg(t,r,a,s,l,"F",u,h)}function f_(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Bu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=nn(e.unaryFilter.field);return lt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=nn(e.unaryFilter.field);return lt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=nn(e.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=nn(e.unaryFilter.field);return lt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return lt.create(nn(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(i=>Bu(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function m_(n){return n_[n]}function g_(n){return i_[n]}function __(n){return r_[n]}function en(n){return{fieldPath:n.canonicalString()}}function nn(n){return _t.fromServerFormat(n.fieldPath)}function zu(n){return n instanceof lt?function(e){if(e.op==="=="){if(Nc(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NAN"}};if(Vc(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Nc(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NOT_NAN"}};if(Vc(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:en(e.field),op:g_(e.op),value:e.value}}}(n):n instanceof zt?function(e){const i=e.getFilters().map(r=>zu(r));return i.length===1?i[0]:{compositeFilter:{op:__(e.op),filters:i}}}(n):q()}function y_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,i,r,s=H.min(),a=H.min(),l=vt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new we(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t){this.ct=t}}function w_(n){const t=p_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.un=new E_}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Ae.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Ae.min())}updateCollectionGroup(t,e,i){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class E_{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e]||new yt(it.comparator),s=!r.has(i);return this.index[e]=r.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e];return r&&r.has(i)}getEntries(t){return(this.index[t]||new yt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new fn(0)}static kn(){return new fn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.changes=new bn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?C.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e,i,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(i!==null&&ei(i.mutation,r,Mt.empty(),ut.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,K()).next(()=>i))}getLocalViewOfDocuments(t,e,i=K()){const r=Le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,i).next(s=>{let a=Kn();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=Le();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,K()))}populateOverlays(t,e,i){const r=[];return i.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,r){let s=ue();const a=ti(),l=function(){return ti()}();return e.forEach((u,h)=>{const f=i.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof Se)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ei(f.mutation,h,f.mutation.getFieldMask(),ut.now())):a.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var v;return l.set(h,new T_(f,(v=a.get(h))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(t,e){const i=ti();let r=new st((a,l)=>a-l),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=i.get(u)||Mt.empty();f=l.applyToLocalView(h,f),i.set(u,f);const v=(r.get(l.batchId)||K()).add(u);r=r.insert(l.batchId,v)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,v=xu();f.forEach(m=>{if(!s.has(m)){const I=Du(e.get(m),i.get(m));I!==null&&v.set(m,I),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,v))}return C.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,r){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,r):this.getDocumentsMatchingCollectionQuery(t,e,i,r)}getNextDocuments(t,e,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,r-s.size):C.resolve(Le());let l=-1,u=s;return a.next(h=>C.forEach(h,(f,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),s.get(f)?C.resolve():this.remoteDocumentCache.getEntry(t,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,K())).next(f=>({batchId:l,changes:Au(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new z(e)).next(i=>{let r=Kn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,i,r){const s=e.collectionGroup;let a=Kn();return this.indexManager.getCollectionParents(t,s).next(l=>C.forEach(l,u=>{const h=function(v,m){return new _i(m,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,i,r).next(f=>{f.forEach((v,m)=>{a=a.insert(v,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,r))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,xt.newInvalidDocument(f)))});let l=Kn();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ei(f.mutation,h,Mt.empty(),ut.now()),kr(e,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Gt(r.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:w_(r.bundledQuery),readTime:Gt(r.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.overlays=new st(z.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Le();return C.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((r,s)=>{this.ht(t,e,s)}),C.resolve()}removeOverlaysForBatchId(t,e,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),C.resolve()}getOverlaysForCollection(t,e,i){const r=Le(),s=e.length+1,a=new z(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return C.resolve(r)}getOverlaysForCollectionGroup(t,e,i,r){let s=new st((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>i){let f=s.get(h.largestBatchId);f===null&&(f=Le(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Le(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=r)););return C.resolve(l)}ht(t,e,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Yg(e,i));let s=this.Ir.get(e);s===void 0&&(s=K(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.Tr=new yt(ft.Er),this.dr=new yt(ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new ft(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new ft(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new z(new it([])),i=new ft(e,t),r=new ft(e,t+1),s=[];return this.dr.forEachInRange([i,r],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new z(new it([])),i=new ft(e,t),r=new ft(e,t+1);let s=K();return this.dr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new ft(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class ft{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return z.comparator(t.key,e.key)||Z(t.wr,e.wr)}static Ar(t,e){return Z(t.wr,e.wr)||z.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new yt(ft.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qg(s,e,i,r);this.mutationQueue.push(a);for(const l of r)this.br=this.br.add(new ft(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,r=this.vr(i),s=r<0?0:r;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new ft(e,0),r=new ft(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],a=>{const l=this.Dr(a.wr);s.push(l)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new yt(Z);return e.forEach(r=>{const s=new ft(r,0),a=new ft(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),C.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,r=i.length+1;let s=i;z.isDocumentKey(s)||(s=s.child(""));const a=new ft(new z(s),0);let l=new yt(Z);return this.br.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===r&&(l=l.add(u.wr)),!0)},a),C.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return C.forEach(e.mutations,r=>{const s=new ft(r.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new ft(e,0),r=this.br.firstAfterOrEqual(i);return C.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t){this.Mr=t,this.docs=function(){return new st(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,r=this.docs.get(i),s=r?r.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return C.resolve(i?i.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let i=ue();return e.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():xt.newInvalidDocument(r))}),C.resolve(i)}getDocumentsMatchingQuery(t,e,i,r){let s=ue();const a=e.path,l=new z(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||pg(hg(f),i)<=0||(r.has(f.key)||kr(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(t,e,i,r){q()}Or(t,e){return C.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new k_(this)}getSize(t){return C.resolve(this.size)}}class k_ extends I_{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t){this.persistence=t,this.Nr=new bn(e=>Eo(e),Io),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Co,this.targetCount=0,this.kr=fn.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,r)=>e(r)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new fn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,i){let r=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),C.waitFor(s).next(()=>r)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return C.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),C.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(a=>{s.push(r.markPotentiallyOrphaned(t,a))}),C.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return C.resolve(i)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t,e){this.qr={},this.overlays={},this.Qr=new yo(0),this.Kr=!1,this.Kr=!0,this.$r=new S_,this.referenceDelegate=t(this),this.Ur=new D_(this),this.indexManager=new b_,this.remoteDocumentCache=function(r){return new P_(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new v_(e),this.Gr=new x_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new R_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new C_(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){$("MemoryPersistence","Starting transaction:",t);const r=new N_(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,e){return C.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class N_ extends mg{constructor(t){super(),this.currentSequenceNumber=t}}class Po{constructor(t){this.persistence=t,this.Jr=new Co,this.Yr=null}static Zr(t){return new Po(t)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),C.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,i=>{const r=z.fromPath(i);return this.ei(t,r).next(s=>{s||e.removeEntry(r,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e,i,r){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=r}static Wi(t,e){let i=K(),r=K();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ko(t,e.fromCache,i,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Mh()?8:gg(St())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,r){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new O_;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,r){return i.documentReadCount<this.ji?(qn()<=Q.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",tn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(qn()<=Q.DEBUG&&$("QueryEngine","Query:",tn(e),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(qn()<=Q.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",tn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ht(e))):C.resolve())}Yi(t,e){if($c(e))return C.resolve(null);let i=Ht(e);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Hs(e,null,"F"),i=Ht(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=K(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.ts(e,l);return this.ns(e,h,a,u.readTime)?this.Yi(t,Hs(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,i,r){return $c(e)||r.isEqual(H.min())?C.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,r)?C.resolve(null):(qn()<=Q.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tn(e)),this.rs(t,a,e,dg(r,-1)).next(l=>l))})}ts(t,e){let i=new yt(Iu(t));return e.forEach((r,s)=>{kr(t,s)&&(i=i.add(s))}),i}ns(t,e,i,r){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,i){return qn()<=Q.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",tn(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ae.min(),i)}rs(t,e,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,e,i,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new st(Z),this._s=new bn(s=>Eo(s),Io),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new A_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function $_(n,t,e,i){return new L_(n,t,e,i)}async function qu(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let r;return e.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let u=K();for(const h of r){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(i,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function F_(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const v=h.batch,m=v.keys();let I=C.resolve();return m.forEach(S=>{I=I.next(()=>f.getEntry(u,S)).next(D=>{const P=h.docVersions.get(S);tt(P!==null),D.version.compareTo(P)<0&&(v.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,v))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=K();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(i,r))})}function Wu(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function U_(n,t){const e=G(n),i=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const l=[];t.targetChanges.forEach((f,v)=>{const m=r.get(v);if(!m)return;l.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,v).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,v)));let I=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(v)!==null?I=I.withResumeToken(vt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,i)),r=r.insert(v,I),function(D,P,U){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(m,I,f)&&l.push(e.Ur.updateTargetData(s,I))});let u=ue(),h=K();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(B_(s,a,t.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!i.isEqual(H.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(v=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(f)}return C.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.os=r,s))}function B_(n,t,e){let i=K(),r=K();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=ue();return e.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(H.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:r}})}function z_(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function j_(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return e.Ur.getTargetData(i,t).next(s=>s?(r=s,C.resolve(r)):e.Ur.allocateTargetId(i).next(a=>(r=new we(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=e.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function Js(n,t,e){const i=G(n),r=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!gi(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function Qc(n,t,e){const i=G(n);let r=H.min(),s=K();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const v=G(u),m=v._s.get(f);return m!==void 0?C.resolve(v.os.get(m)):v.Ur.getTargetData(h,f)}(i,a,Ht(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?r:H.min(),e?s:K())).next(l=>(q_(i,Ng(t),l),{documents:l,Ts:s})))}function q_(n,t,e){let i=n.us.get(t)||H.min();e.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class Yc{constructor(){this.activeTargetIds=Ug()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class W_{constructor(){this.so=new Yc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Yc,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=null;function Ss(){return Qi===null?Qi=function(){return 268435456+Math.round(2147483648*Math.random())}():Qi++,"0x"+Qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class Q_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(e,i,r,s,a){const l=Ss(),u=this.xo(e,i.toUriEncodedString());$("RestConnection",`Sending RPC '${e}' ${l}:`,u,r);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(e,u,h,r).then(f=>($("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw un("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",r),f})}Lo(e,i,r,s,a,l){return this.Mo(e,i,r,s,a)}Oo(e,i,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),r&&r.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const r=G_[e];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,r){const s=Ss();return new Promise((a,l)=>{const u=new su;u.setWithCredentials(!0),u.listenOnce(ou.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case tr.NO_ERROR:const f=u.getResponseJson();$(Tt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case tr.TIMEOUT:$(Tt,`RPC '${t}' ${s} timed out`),l(new L(R.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const v=u.getStatus();if($(Tt,`RPC '${t}' ${s} failed with status:`,v,"response text:",u.getResponseText()),v>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const S=function(P){const U=P.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(U)>=0?U:R.UNKNOWN}(I.status);l(new L(S,I.message))}else l(new L(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(R.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{$(Tt,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(r);$(Tt,`RPC '${t}' ${s} sending request:`,r),u.send(e,"POST",h,i,15)})}Bo(t,e,i){const r=Ss(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=lu(),l=cu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,i),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Tt,`Creating RPC '${t}' stream ${r}: ${f}`,u);const v=a.createWebChannel(f,u);let m=!1,I=!1;const S=new K_({Io:P=>{I?$(Tt,`Not sending because RPC '${t}' stream ${r} is closed:`,P):(m||($(Tt,`Opening RPC '${t}' stream ${r} transport.`),v.open(),m=!0),$(Tt,`RPC '${t}' stream ${r} sending:`,P),v.send(P))},To:()=>v.close()}),D=(P,U,M)=>{P.listen(U,V=>{try{M(V)}catch(W){setTimeout(()=>{throw W},0)}})};return D(v,Gn.EventType.OPEN,()=>{I||($(Tt,`RPC '${t}' stream ${r} transport opened.`),S.yo())}),D(v,Gn.EventType.CLOSE,()=>{I||(I=!0,$(Tt,`RPC '${t}' stream ${r} transport closed`),S.So())}),D(v,Gn.EventType.ERROR,P=>{I||(I=!0,un(Tt,`RPC '${t}' stream ${r} transport errored:`,P),S.So(new L(R.UNAVAILABLE,"The operation could not be completed")))}),D(v,Gn.EventType.MESSAGE,P=>{var U;if(!I){const M=P.data[0];tt(!!M);const V=M,W=V.error||((U=V[0])===null||U===void 0?void 0:U.error);if(W){$(Tt,`RPC '${t}' stream ${r} received error:`,W);const N=W.status;let k=function(_){const b=ct[_];if(b!==void 0)return Nu(b)}(N),w=W.message;k===void 0&&(k=R.INTERNAL,w="Unknown error status: "+N+" with message "+W.message),I=!0,S.So(new L(k,w)),v.close()}else $(Tt,`RPC '${t}' stream ${r} received:`,M),S.bo(M)}}),D(l,au.STAT_EVENT,P=>{P.stat===Us.PROXY?$(Tt,`RPC '${t}' stream ${r} detected buffering proxy`):P.stat===Us.NOPROXY&&$(Tt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Cs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return new s_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e,i=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-i);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,e,i,r,s,a,l,u){this.ui=t,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hu(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(le(e.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===e&&this.P_(i,r)},i=>{t(()=>{const r=new L(R.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y_ extends Gu{constructor(t,e,i,r,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=c_(this.serializer,t),i=function(s){if(!("targetChange"in s))return H.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Gt(a.readTime):H.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=Ys(this.serializer),e.addTarget=function(s,a){let l;const u=a.target;if(l=qs(u)?{documents:d_(s,u)}:{query:h_(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Lu(s,a.resumeToken);const h=Gs(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=yr(s,a.snapshotVersion.toTimestamp());const h=Gs(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=f_(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=Ys(this.serializer),e.removeTarget=t,this.a_(e)}}class J_ extends Gu{constructor(t,e,i,r,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return tt(!!t.streamToken),this.lastStreamToken=t.streamToken,tt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=u_(t.writeResults,t.commitTime),i=Gt(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Ys(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>l_(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends class{}{constructor(t,e,i,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,Ks(e,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(R.UNKNOWN,s.toString())})}Lo(t,e,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,Ks(e,i),r,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Z_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(le(e),this.D_=!1):$("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t,e,i,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{He(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=G(u);h.L_.add(4),await wi(h),h.q_.set("Unknown"),h.L_.delete(4),await Lr(h)}(this))})}),this.q_=new Z_(i,r)}}async function Lr(n){if(He(n))for(const t of n.B_)await t(!0)}async function wi(n){for(const t of n.B_)await t(!1)}function Ku(n,t){const e=G(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Oo(e)?No(e):En(e).r_()&&Vo(e,t))}function Do(n,t){const e=G(n),i=En(e);e.N_.delete(t),i.r_()&&Qu(e,t),e.N_.size===0&&(i.r_()?i.o_():He(e)&&e.q_.set("Unknown"))}function Vo(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}En(n).A_(t)}function Qu(n,t){n.Q_.xe(t),En(n).R_(t)}function No(n){n.Q_=new e_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),En(n).start(),n.q_.v_()}function Oo(n){return He(n)&&!En(n).n_()&&n.N_.size>0}function He(n){return G(n).L_.size===0}function Yu(n){n.Q_=void 0}async function ey(n){n.q_.set("Online")}async function ny(n){n.N_.forEach((t,e)=>{Vo(n,t)})}async function iy(n,t){Yu(n),Oo(n)?(n.q_.M_(t),No(n)):n.q_.set("Unknown")}async function ry(n,t,e){if(n.q_.set("Online"),t instanceof Mu&&t.state===2&&t.cause)try{await async function(r,s){const a=s.cause;for(const l of s.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.N_.delete(l),r.Q_.removeTarget(l))}(n,t)}catch(i){$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await vr(n,i)}else if(t instanceof ir?n.Q_.Ke(t):t instanceof Ou?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const i=await Wu(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(vt.EMPTY_BYTE_STRING,f.snapshotVersion)),Qu(s,u);const v=new we(f.target,u,h,f.sequenceNumber);Vo(s,v)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){$("RemoteStore","Failed to raise snapshot:",i),await vr(n,i)}}async function vr(n,t,e){if(!gi(t))throw t;n.L_.add(1),await wi(n),n.q_.set("Offline"),e||(e=()=>Wu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Lr(n)})}function Ju(n,t){return t().catch(e=>vr(n,e,t))}async function $r(n){const t=G(n),e=Re(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;sy(t);)try{const r=await z_(t.localStore,i);if(r===null){t.O_.length===0&&e.o_();break}i=r.batchId,oy(t,r)}catch(r){await vr(t,r)}Xu(t)&&Zu(t)}function sy(n){return He(n)&&n.O_.length<10}function oy(n,t){n.O_.push(t);const e=Re(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Xu(n){return He(n)&&!Re(n).n_()&&n.O_.length>0}function Zu(n){Re(n).start()}async function ay(n){Re(n).p_()}async function cy(n){const t=Re(n);for(const e of n.O_)t.m_(e.mutations)}async function ly(n,t,e){const i=n.O_.shift(),r=xo.from(i,t,e);await Ju(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await $r(n)}async function uy(n,t){t&&Re(n).V_&&await async function(i,r){if(function(a){return Xg(a)&&a!==R.ABORTED}(r.code)){const s=i.O_.shift();Re(i).s_(),await Ju(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $r(i)}}(n,t),Xu(n)&&Zu(n)}async function Xc(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const i=He(e);e.L_.add(3),await wi(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Lr(e)}async function dy(n,t){const e=G(n);t?(e.L_.delete(2),await Lr(e)):t||(e.L_.add(2),await wi(e),e.q_.set("Unknown"))}function En(n){return n.K_||(n.K_=function(e,i,r){const s=G(e);return s.w_(),new Y_(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:ey.bind(null,n),Ro:ny.bind(null,n),mo:iy.bind(null,n),d_:ry.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Oo(n)?No(n):n.q_.set("Unknown")):(await n.K_.stop(),Yu(n))})),n.K_}function Re(n){return n.U_||(n.U_=function(e,i,r){const s=G(e);return s.w_(),new J_(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ay.bind(null,n),mo:uy.bind(null,n),f_:cy.bind(null,n),g_:ly.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await $r(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e,i,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,r,s){const a=Date.now()+i,l=new Mo(t,e,a,r,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(n,t){if(le("AsyncQueue",`${t}: ${n}`),gi(n))return new L(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.comparator=t?(e,i)=>t(e,i)||z.comparator(e.key,i.key):(e,i)=>z.comparator(e.key,i.key),this.keyedMap=Kn(),this.sortedSet=new st(this.comparator)}static emptySet(t){return new an(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof an)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new an;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.W_=new st(z.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class mn{constructor(t,e,i,r,s,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,i,r,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new mn(t,e,an.emptySet(e),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==i[r].type||!e[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class py{constructor(){this.queries=tl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const r=G(e),s=r.queries;r.queries=tl(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(i)})})(this,new L(R.ABORTED,"Firestore shutting down"))}}function tl(){return new bn(n=>Eu(n),Pr)}async function td(n,t){const e=G(n);let i=3;const r=t.query;let s=e.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new hy,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(r,!0);break;case 1:s.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(a){const l=Lo(a,`Initialization of query '${tn(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&$o(e)}async function ed(n,t){const e=G(n),i=t.query;let r=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function fy(n,t){const e=G(n);let i=!1;for(const r of t){const s=r.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(r)&&(i=!0);a.z_=r}}i&&$o(e)}function my(n,t,e){const i=G(n),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(e);i.queries.delete(t)}function $o(n){n.Y_.forEach(t=>{t.next()})}var Xs,el;(el=Xs||(Xs={})).ea="default",el.Cache="cache";class nd{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new mn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=mn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Xs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t){this.key=t}}class rd{constructor(t){this.key=t}}class gy{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=Iu(t),this.Ra=new an(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new Zc,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((f,v)=>{const m=r.get(f),I=kr(this.query,v)?v:null,S=!!m&&this.mutatedKeys.has(m.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;m&&I?m.data.isEqual(I.data)?S!==D&&(i.track({type:3,doc:I}),P=!0):this.ga(m,I)||(i.track({type:2,doc:I}),P=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!m&&I?(i.track({type:0,doc:I}),P=!0):m&&!I&&(i.track({type:1,doc:m}),P=!0,(u||h)&&(l=!0)),P&&(I?(a=a.add(I),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),i.track({type:1,doc:f})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,v)=>function(I,S){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return D(I)-D(S)}(f.type,v.type)||this.Aa(f.doc,v.doc)),this.pa(i),r=r!=null&&r;const l=e&&!r?this.ya():[],u=this.da.size===0&&this.current&&!r?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new mn(this.query,t.Ra,s,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=K(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new rd(i))}),this.da.forEach(i=>{t.has(i)||e.push(new id(i))}),e}ba(t){this.Ta=t.Ts,this.da=K();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return mn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _y{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class yy{constructor(t){this.key=t,this.va=!1}}class vy{constructor(t,e,i,r,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new bn(l=>Eu(l),Pr),this.Ma=new Map,this.xa=new Set,this.Oa=new st(z.comparator),this.Na=new Map,this.La=new Co,this.Ba={},this.ka=new Map,this.qa=fn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wy(n,t,e=!0){const i=ud(n);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await sd(i,t,e,!0),r}async function by(n,t){const e=ud(n);await sd(e,t,!0,!1)}async function sd(n,t,e,i){const r=await j_(n.localStore,Ht(t)),s=r.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await Ey(n,t,s,a==="current",r.resumeToken)),n.isPrimaryClient&&e&&Ku(n.remoteStore,r),l}async function Ey(n,t,e,i,r){n.Ka=(v,m,I)=>async function(D,P,U,M){let V=P.view.ma(U);V.ns&&(V=await Qc(D.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,V)));const W=M&&M.targetChanges.get(P.targetId),N=M&&M.targetMismatches.get(P.targetId)!=null,k=P.view.applyChanges(V,D.isPrimaryClient,W,N);return il(D,P.targetId,k.wa),k.snapshot}(n,v,m,I);const s=await Qc(n.localStore,t,!0),a=new gy(t,s.Ts),l=a.ma(s.documents),u=vi.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",r),h=a.applyChanges(l,n.isPrimaryClient,u);il(n,e,h.wa);const f=new _y(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function Iy(n,t,e){const i=G(n),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(a=>!Pr(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Js(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),e&&Do(i.remoteStore,r.targetId),Zs(i,r.targetId)}).catch(mi)):(Zs(i,r.targetId),await Js(i.localStore,r.targetId,!0))}async function Ty(n,t){const e=G(n),i=e.Fa.get(t),r=e.Ma.get(i.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Do(e.remoteStore,i.targetId))}async function Ay(n,t,e){const i=Dy(n);try{const r=await function(a,l){const u=G(a),h=ut.now(),f=l.reduce((I,S)=>I.add(S.key),K());let v,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=ue(),D=K();return u.cs.getEntries(I,f).next(P=>{S=P,S.forEach((U,M)=>{M.isValidDocument()||(D=D.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,S)).next(P=>{v=P;const U=[];for(const M of l){const V=Gg(M,v.get(M.key).overlayedDocument);V!=null&&U.push(new Se(M.key,V,fu(V.value.mapValue),Nt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,U,l)}).next(P=>{m=P;const U=P.applyToLocalDocumentSet(v,D);return u.documentOverlayCache.saveOverlays(I,P.batchId,U)})}).then(()=>({batchId:m.batchId,changes:Au(v)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new st(Z)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(i,r.batchId,e),await bi(i,r.changes),await $r(i.remoteStore)}catch(r){const s=Lo(r,"Failed to persist write");e.reject(s)}}async function od(n,t){const e=G(n);try{const i=await U_(e.localStore,t);t.targetChanges.forEach((r,s)=>{const a=e.Na.get(s);a&&(tt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?tt(a.va):r.removedDocuments.size>0&&(tt(a.va),a.va=!1))}),await bi(e,i,t)}catch(i){await mi(i)}}function nl(n,t,e){const i=G(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const r=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&r.push(l.snapshot)}),function(a,l){const u=G(a);u.onlineState=l;let h=!1;u.queries.forEach((f,v)=>{for(const m of v.j_)m.Z_(l)&&(h=!0)}),h&&$o(u)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function xy(n,t,e){const i=G(n);i.sharedClientState.updateQueryState(t,"rejected",e);const r=i.Na.get(t),s=r&&r.key;if(s){let a=new st(z.comparator);a=a.insert(s,xt.newNoDocument(s,H.min()));const l=K().add(s),u=new Or(H.min(),new Map,new st(Z),a,l);await od(i,u),i.Oa=i.Oa.remove(s),i.Na.delete(t),Fo(i)}else await Js(i.localStore,t,!1).then(()=>Zs(i,t,e)).catch(mi)}async function Ry(n,t){const e=G(n),i=t.batch.batchId;try{const r=await F_(e.localStore,t);cd(e,i,null),ad(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await bi(e,r)}catch(r){await mi(r)}}async function Sy(n,t,e){const i=G(n);try{const r=await function(a,l){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(v=>(tt(v!==null),f=v.keys(),u.mutationQueue.removeMutationBatch(h,v))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(i.localStore,t);cd(i,t,e),ad(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await bi(i,r)}catch(r){await mi(r)}}function ad(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function cd(n,t,e){const i=G(n);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function Zs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||ld(n,i)})}function ld(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Do(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Fo(n))}function il(n,t,e){for(const i of e)i instanceof id?(n.La.addReference(i.key,t),Cy(n,i)):i instanceof rd?($("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||ld(n,i.key)):q()}function Cy(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||($("SyncEngine","New document in limbo: "+e),n.xa.add(i),Fo(n))}function Fo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new z(it.fromString(t)),i=n.qa.next();n.Na.set(i,new yy(e)),n.Oa=n.Oa.insert(e,i),Ku(n.remoteStore,new we(Ht(To(e.path)),i,"TargetPurposeLimboResolution",yo.oe))}}async function bi(n,t,e){const i=G(n),r=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,u)=>{a.push(i.Ka(u,t,e).then(h=>{var f;if((h||e)&&i.isPrimaryClient){const v=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(h){r.push(h);const v=ko.Wi(u.targetId,h);s.push(v)}}))}),await Promise.all(a),i.Ca.d_(r),await async function(u,h){const f=G(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(h,m=>C.forEach(m.$i,I=>f.persistence.referenceDelegate.addReference(v,m.targetId,I)).next(()=>C.forEach(m.Ui,I=>f.persistence.referenceDelegate.removeReference(v,m.targetId,I)))))}catch(v){if(!gi(v))throw v;$("LocalStore","Failed to update sequence numbers: "+v)}for(const v of h){const m=v.targetId;if(!v.fromCache){const I=f.os.get(m),S=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,D)}}}(i.localStore,s))}async function Py(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const i=await qu(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new L(R.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await bi(e,i.hs)}}function ky(n,t){const e=G(n),i=e.Na.get(t);if(i&&i.va)return K().add(i.key);{let r=K();const s=e.Ma.get(t);if(!s)return r;for(const a of s){const l=e.Fa.get(a);r=r.unionWith(l.view.Va)}return r}}function ud(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ky.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xy.bind(null,t),t.Ca.d_=fy.bind(null,t.eventManager),t.Ca.$a=my.bind(null,t.eventManager),t}function Dy(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ry.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Sy.bind(null,t),t}class wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return $_(this.persistence,new M_,t.initialUser,this.serializer)}Ga(t){return new V_(Po.Zr,this.serializer)}Wa(t){return new W_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wr.provider={build:()=>new wr};class to{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Py.bind(null,this.syncEngine),await dy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new py}()}createDatastore(t){const e=Mr(t.databaseInfo.databaseId),i=function(s){return new Q_(s)}(t.databaseInfo);return function(s,a,l,u){return new X_(s,a,l,u)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,r,s,a,l){return new ty(i,r,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>nl(this.syncEngine,e,0),function(){return Jc.D()?new Jc:new H_}())}createSyncEngine(t,e){return function(r,s,a,l,u,h,f){const v=new vy(r,s,a,l,u,h);return f&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=G(r);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await wi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}to.provider={build:()=>new to};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):le("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t,e,i,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=r,this.user=At.UNAUTHENTICATED,this.clientId=du.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Lo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ps(n,t){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await qu(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function rl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ny(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Xc(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Xc(t.remoteStore,r)),n._onlineComponents=t}async function Ny(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ps(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===R.FAILED_PRECONDITION||r.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;un("Error using user provided cache. Falling back to memory cache: "+e),await Ps(n,new wr)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Ps(n,new wr);return n._offlineComponents}async function hd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await rl(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await rl(n,new to))),n._onlineComponents}function Oy(n){return hd(n).then(t=>t.syncEngine)}async function pd(n){const t=await hd(n),e=t.eventManager;return e.onListen=wy.bind(null,t.syncEngine),e.onUnlisten=Iy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=by.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ty.bind(null,t.syncEngine),e}function My(n,t,e={}){const i=new se;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new dd({next:m=>{f.Za(),a.enqueueAndForget(()=>ed(s,v));const I=m.docs.has(l);!I&&m.fromCache?h.reject(new L(R.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?h.reject(new L(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),v=new nd(To(l.path),f,{includeMetadataChanges:!0,_a:!0});return td(s,v)}(await pd(n),n.asyncQueue,t,e,i)),i.promise}function Ly(n,t,e={}){const i=new se;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new dd({next:m=>{f.Za(),a.enqueueAndForget(()=>ed(s,v)),m.fromCache&&u.source==="server"?h.reject(new L(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),v=new nd(l,f,{includeMetadataChanges:!0,_a:!0});return td(s,v)}(await pd(n),n.asyncQueue,t,e,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,t,e){if(!e)throw new L(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function $y(n,t,e,i){if(t===!0&&i===!0)throw new L(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ol(n){if(!z.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function al(n){if(z.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function jt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fr(n);throw new L(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new L(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$y("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fd((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ur{constructor(t,e,i,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cl(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ng;switch(i.type){case"firstParty":return new og(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new L(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=sl.get(e);i&&($("ComponentProvider","Removing Datastore"),sl.delete(e),i.terminate())}(this),Promise.resolve()}}function Fy(n,t,e,i={}){var r;const s=(n=jt(n,Ur))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,u;if(typeof i.mockUserToken=="string")l=i.mockUserToken,u=At.MOCK_USER;else{l=Ch(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new L(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new At(h)}n._authCredentials=new ig(new uu(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new In(this.firestore,t,this._query)}}class Dt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class Te extends In{constructor(t,e,i){super(t,e,To(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new z(t))}withConverter(t){return new Te(this.firestore,t,this._path)}}function Uy(n,t,...e){if(n=pt(n),md("collection","path",t),n instanceof Ur){const i=it.fromString(t,...e);return al(i),new Te(n,null,i)}{if(!(n instanceof Dt||n instanceof Te))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(t,...e));return al(i),new Te(n.firestore,null,i)}}function gd(n,t,...e){if(n=pt(n),arguments.length===1&&(t=du.newId()),md("doc","path",t),n instanceof Ur){const i=it.fromString(t,...e);return ol(i),new Dt(n,null,new z(i))}{if(!(n instanceof Dt||n instanceof Te))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(t,...e));return ol(i),new Dt(n.firestore,n instanceof Te?n.converter:null,new z(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hu(this,"async_queue_retry"),this.Vu=()=>{const i=Cs();i&&$("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Cs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Cs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new se;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!gi(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const r=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw le("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Mo.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ge extends Ur{constructor(t,e,i,r){super(t,e,i,r),this.type="firestore",this._queue=new ll,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ll(t),this._firestoreClient=void 0,await t}}}function By(n,t){const e=typeof n=="object"?n:Tl(),i=typeof n=="string"?n:"(default)",r=ro(e,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Rh("firestore");s&&Fy(r,...s)}return r}function Br(n){if(n._terminated)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zy(n),n._firestoreClient}function zy(n){var t,e,i;const r=n._freezeSettings(),s=function(l,u,h,f){return new vg(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,fd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new Vy(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gn(vt.fromBase64String(t))}catch(e){throw new L(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new gn(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=/^__.*__$/;class qy{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new yi(t,this.data,e,this.fieldTransforms)}}class _d{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class jo{constructor(t,e,i,r,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new jo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.Ou(t),r}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return br(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(yd(this.Cu)&&jy.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Wy{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Mr(t)}Qu(t,e,i,r=!1){return new jo({Cu:t,methodName:e,qu:i,path:_t.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zr(n){const t=n._freezeSettings(),e=Mr(n._databaseId);return new Wy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function vd(n,t,e,i,r,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,r);qo("Data must be an object, but it was:",a,i);const l=Ed(i,a);let u,h;if(s.merge)u=new Mt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const v of s.mergeFields){const m=eo(t,v,e);if(!a.contains(m))throw new L(R.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Td(f,m)||f.push(m)}u=new Mt(f),h=a.fieldTransforms.filter(v=>u.covers(v.field))}else u=null,h=a.fieldTransforms;return new qy(new Vt(l),u,h)}class jr extends Uo{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jr}}function wd(n,t,e,i){const r=n.Qu(1,t,e);qo("Data must be an object, but it was:",r,i);const s=[],a=Vt.empty();We(i,(u,h)=>{const f=Wo(t,u,e);h=pt(h);const v=r.Nu(f);if(h instanceof jr)s.push(f);else{const m=Ii(h,v);m!=null&&(s.push(f),a.set(f,m))}});const l=new Mt(s);return new _d(a,l,r.fieldTransforms)}function bd(n,t,e,i,r,s){const a=n.Qu(1,t,e),l=[eo(t,i,e)],u=[r];if(s.length%2!=0)throw new L(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(eo(t,s[m])),u.push(s[m+1]);const h=[],f=Vt.empty();for(let m=l.length-1;m>=0;--m)if(!Td(h,l[m])){const I=l[m];let S=u[m];S=pt(S);const D=a.Nu(I);if(S instanceof jr)h.push(I);else{const P=Ii(S,D);P!=null&&(h.push(I),f.set(I,P))}}const v=new Mt(h);return new _d(f,v,a.fieldTransforms)}function Hy(n,t,e,i=!1){return Ii(e,n.Qu(i?4:3,t))}function Ii(n,t){if(Id(n=pt(n)))return qo("Unsupported field value:",t,n),Ed(n,t);if(n instanceof Uo)return function(i,r){if(!yd(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const l of i){let u=Ii(l,r.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,r){if((i=pt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Bg(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=ut.fromDate(i);return{timestampValue:yr(r.serializer,s)}}if(i instanceof ut){const s=new ut(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:yr(r.serializer,s)}}if(i instanceof Bo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof gn)return{bytesValue:Lu(r.serializer,i._byteString)};if(i instanceof Dt){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:So(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof zo)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ao(l.serializer,u)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${Fr(i)}`)}(n,t)}function Ed(n,t){const e={};return hu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):We(n,(i,r)=>{const s=Ii(r,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function Id(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof Bo||n instanceof gn||n instanceof Dt||n instanceof Uo||n instanceof zo)}function qo(n,t,e){if(!Id(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const i=Fr(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function eo(n,t,e){if((t=pt(t))instanceof Ei)return t._internalPath;if(typeof t=="string")return Wo(n,t);throw br("Field path arguments must be of type string or ",n,!1,void 0,e)}const Gy=new RegExp("[~\\*/\\[\\]]");function Wo(n,t,e){if(t.search(Gy)>=0)throw br(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ei(...t.split("."))._internalPath}catch{throw br(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function br(n,t,e,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${i}`),a&&(u+=` in document ${r}`),u+=")"),new L(R.INVALID_ARGUMENT,l+n+u)}function Td(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e,i,r,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ky(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ho("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ky extends Ad{data(){return super.data()}}function Ho(n,t){return typeof t=="string"?Wo(n,t):t instanceof Ei?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Go{}class Yy extends Go{}function Er(n,t,...e){let i=[];t instanceof Go&&i.push(t),i=i.concat(e),function(s){const a=s.filter(u=>u instanceof Ko).length,l=s.filter(u=>u instanceof qr).length;if(a>1||a>0&&l>0)throw new L(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class qr extends Yy{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new qr(t,e,i)}_apply(t){const e=this._parse(t);return xd(t._query,e),new In(t.firestore,t.converter,Ws(t._query,e))}_parse(t){const e=zr(t.firestore);return function(s,a,l,u,h,f,v){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){dl(v,f);const I=[];for(const S of v)I.push(ul(u,s,S));m={arrayValue:{values:I}}}else m=ul(u,s,v)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||dl(v,f),m=Hy(l,a,v,f==="in"||f==="not-in");return lt.create(h,f,m)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ir(n,t,e){const i=t,r=Ho("where",n);return qr._create(r,i,e)}class Ko extends Go{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ko(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:zt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,s){let a=r;const l=s.getFlattenedFilters();for(const u of l)xd(a,u),a=Ws(a,u)}(t._query,e),new In(t.firestore,t.converter,Ws(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ul(n,t,e){if(typeof(e=pt(e))=="string"){if(e==="")throw new L(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bu(t)&&e.indexOf("/")!==-1)throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(it.fromString(e));if(!z.isDocumentKey(i))throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Dc(n,new z(i))}if(e instanceof Dt)return Dc(n,e._key);throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(e)}.`)}function dl(n,t){if(!Array.isArray(n)||n.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xd(n,t){const e=function(r,s){for(const a of r)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Jy{convertValue(t,e="none"){switch(qe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(je(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return We(t,(r,s)=>{i[r]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,r;const s=(r=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>at(a.doubleValue));return new zo(s)}convertGeoPoint(t){return new Bo(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=wo(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(si(t));default:return null}}convertTimestamp(t){const e=xe(t);return new ut(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=it.fromString(t);tt(ju(i));const r=new oi(i.get(1),i.get(3)),s=new z(i.popFirst(5));return r.isEqual(e)||le(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sd extends Ad{constructor(t,e,i,r,s,a){super(t,e,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Ho("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class rr extends Sd{data(t={}){return super.data(t)}}class Xy{constructor(t,e,i,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Yn(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new rr(this._firestore,this._userDataWriter,i.key,i,new Yn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const u=new rr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Yn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new rr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Yn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Zy(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n){n=jt(n,Dt);const t=jt(n.firestore,Ge);return My(Br(t),n._key).then(e=>tv(t,n,e))}class Cd extends Jy{constructor(t){super(),this.firestore=t}convertBytes(t){return new gn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dt(this.firestore,null,e)}}function ht(n){n=jt(n,In);const t=jt(n.firestore,Ge),e=Br(t),i=new Cd(t);return Qy(n._query),Ly(e,n._query).then(r=>new Xy(t,i,n,r))}function Ti(n,t,e){n=jt(n,Dt);const i=jt(n.firestore,Ge),r=Rd(n.converter,t,e);return Hr(i,[vd(zr(i),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,Nt.none())])}function Tn(n,t,e,...i){n=jt(n,Dt);const r=jt(n.firestore,Ge),s=zr(r);let a;return a=typeof(t=pt(t))=="string"||t instanceof Ei?bd(s,"updateDoc",n._key,t,e,i):wd(s,"updateDoc",n._key,t),Hr(r,[a.toMutation(n._key,Nt.exists(!0))])}function Wr(n){return Hr(jt(n.firestore,Ge),[new Nr(n._key,Nt.none())])}function Hr(n,t){return function(i,r){const s=new se;return i.asyncQueue.enqueueAndForget(async()=>Ay(await Oy(i),r,s)),s.promise}(Br(n),t)}function tv(n,t,e){const i=e.docs.get(t._key),r=new Cd(n);return new Sd(n,r,t._key,i,new Yn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=zr(t)}set(t,e,i){this._verifyNotCommitted();const r=ks(t,this._firestore),s=Rd(r.converter,e,i),a=vd(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,Nt.none())),this}update(t,e,i,...r){this._verifyNotCommitted();const s=ks(t,this._firestore);let a;return a=typeof(e=pt(e))=="string"||e instanceof Ei?bd(this._dataReader,"WriteBatch.update",s._key,e,i,r):wd(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,Nt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ks(t,this._firestore);return this._mutations=this._mutations.concat(new Nr(e._key,Nt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ks(n,t){if((n=pt(n)).firestore!==t)throw new L(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){return Br(n=jt(n,Ge)),new ev(n,t=>Hr(n,t))}(function(t,e=!0){(function(r){wn=r})(yn),cn(new Ue("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new Ge(new rg(i.getProvider("auth-internal")),new cg(i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(h.options.projectId,f)}(a,r),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ie(Rc,"4.7.3",t),Ie(Rc,"4.7.3","esm2017")})();const nv={apiKey:"AIzaSyCCic8Y8C2l_3byucPz8misLhbLN9kxdv8",authDomain:"personal-finance-tracker-d9f8e.firebaseapp.com",projectId:"personal-finance-tracker-d9f8e",storageBucket:"personal-finance-tracker-d9f8e.firebasestorage.app",messagingSenderId:"226167347334",appId:"1:226167347334:web:6553dd455e6452a7669907",measurementId:"G-E093GW6L3Q"},Pd=Il(nv),Gr=Xm(Pd),_n=By(Pd),iv=new te;function kd(){const n=Gr.currentUser;if(!n)throw new Error("Not authenticated");return n.uid}function dt(n){return Uy(_n,"users",kd(),n)}function rt(n,t){return gd(_n,"users",kd(),n,t)}function An(){return gd(dt("_")).id}function Qe(n){return n.exists()?{id:n.id,...n.data()}:null}function Rt(n){return n.docs.map(t=>({id:t.id,...t.data()}))}function qt(n){if(!n)return n;const t={};for(const[e,i]of Object.entries(n))i instanceof ut?t[e]=i.toDate().toISOString().split("T")[0]:t[e]=i;return t}async function Lt(){const n=await ht(dt("accounts")),t=Rt(n).map(qt).filter(r=>r.is_active!==!1).sort((r,s)=>(r.sort_order||0)-(s.sort_order||0)||(r.created_at||"").localeCompare(s.created_at||"")),e=await ht(dt("transactions")),i=Rt(e);return t.map(r=>({...r,balance:Qo(r,i)}))}async function rv(n){const t=new Date().toISOString().split("T")[0],e=An(),i={name:n.name,type:n.type,currency:"EUR",opening_balance:parseFloat(n.balance)||0,balance_date:n.balance_date||t,balance:parseFloat(n.balance)||0,credit_limit:n.credit_limit||null,goal_amount:n.goal_amount||null,goal_name:n.goal_name||null,goal_deadline:n.goal_deadline||null,color:n.color||"#007AFF",icon:n.icon||"wallet",sort_order:n.sort_order||0,iban:n.iban?n.iban.replace(/\s/g,"").toUpperCase():null,is_active:!0,created_at:new Date().toISOString()};return await Ti(rt("accounts",e),i),{id:e,...i}}async function Dd(n,t){const e=["name","color","icon","goal_amount","goal_name","goal_deadline","credit_limit","sort_order","is_active","balance_date","iban","opening_balance"],i={updated_at:new Date().toISOString()};for(const r of e)t[r]!==void 0&&(i[r]=r==="iban"&&t[r]?t[r].replace(/\s/g,"").toUpperCase():t[r]);return t.balance!==void 0&&(i.opening_balance=parseFloat(t.balance),t.balance_date&&(i.balance_date=t.balance_date)),await Tn(rt("accounts",n),i),await sv(n)}async function sv(n){const t=await Ke(rt("accounts",n)),e=qt(Qe(t)),[i,r]=await Promise.all([ht(Er(dt("transactions"),Ir("account_id","==",n))),ht(Er(dt("transactions"),Ir("to_account_id","==",n)))]),s=[...Rt(i),...Rt(r)];return{...e,balance:Qo(e,s)}}function Qo(n,t){const e=n.balance_date||"1970-01-01",i=n.opening_balance||0,r=n.id;let s=0;for(const a of t)a.date<e||(a.account_id===r&&(a.type==="income"?s+=a.amount:(a.type==="expense"||a.type==="savings"||a.type==="transfer")&&(s-=a.amount)),a.to_account_id===r&&a.type==="transfer"&&(s+=a.amount));return Math.round((i+s)*100)/100}async function Kt(n){const t=await Ke(rt("accounts",n));if(!t.exists())return;const e=qt(Qe(t)),[i,r]=await Promise.all([ht(Er(dt("transactions"),Ir("account_id","==",n))),ht(Er(dt("transactions"),Ir("to_account_id","==",n)))]),s=[...Rt(i),...Rt(r)],a=Qo(e,s);return await Tn(rt("accounts",n),{balance:a,updated_at:new Date().toISOString()}),a}async function Vd({account_id:n,type:t,month:e,search:i,limit:r=50,offset:s=0}={}){const a=await ht(dt("transactions"));let l=Rt(a).map(qt);n&&(l=l.filter(I=>I.account_id===n||I.to_account_id===n)),t&&(l=l.filter(I=>I.type===t)),e&&(l=l.filter(I=>{var S;return(S=I.date)==null?void 0:S.startsWith(e)})),i&&(l=l.filter(I=>(I.description||"").toLowerCase().includes(i.toLowerCase())||(I.note||"").toLowerCase().includes(i.toLowerCase()))),l.sort((I,S)=>S.date>I.date?1:S.date<I.date?-1:0);const u=l.length;l=l.slice(s,s+r);const[h,f]=await Promise.all([ht(dt("accounts")),ht(dt("categories"))]),v=Object.fromEntries(Rt(h).map(I=>[I.id,I])),m=Object.fromEntries(Rt(f).map(I=>[I.id,I]));return l=l.map(I=>{var S,D,P,U,M;return{...I,account_name:((S=v[I.account_id])==null?void 0:S.name)||"",to_account_name:I.to_account_id?((D=v[I.to_account_id])==null?void 0:D.name)||"":null,category_name:I.category_id?((P=m[I.category_id])==null?void 0:P.name)||"":null,category_icon:I.category_id?((U=m[I.category_id])==null?void 0:U.icon)||"":null,category_color:I.category_id?((M=m[I.category_id])==null?void 0:M.color)||"":null}}),{total:u,rows:l,limit:r,offset:s}}async function ov(n){const t=An(),e={account_id:n.account_id,to_account_id:n.to_account_id||null,amount:Math.abs(parseFloat(n.amount)),type:n.type,category_id:n.category_id||null,description:n.description||null,note:n.note||null,date:n.date,import_id:n.import_id||null,fixed_cost_id:n.fixed_cost_id||null,created_at:new Date().toISOString(),updated_at:new Date().toISOString()};return await Ti(rt("transactions",t),e),await Kt(n.account_id),n.to_account_id&&await Kt(n.to_account_id),{id:t,...e}}async function av(n,t){const e=await Ke(rt("transactions",n));if(!e.exists())throw new Error("Transaction not found");const i=Qe(e),r={updated_at:new Date().toISOString()};return t.amount!==void 0&&(r.amount=Math.abs(parseFloat(t.amount))),t.type!==void 0&&(r.type=t.type),t.category_id!==void 0&&(r.category_id=t.category_id),t.description!==void 0&&(r.description=t.description),t.note!==void 0&&(r.note=t.note),t.date!==void 0&&(r.date=t.date),t.to_account_id!==void 0&&(r.to_account_id=t.to_account_id),await Tn(rt("transactions",n),r),await Kt(i.account_id),i.to_account_id&&await Kt(i.to_account_id),r.to_account_id&&await Kt(r.to_account_id),qt({id:n,...i,...r})}async function Nd(n){const t=await Ke(rt("transactions",n));if(!t.exists())return;const e=Qe(t);await Wr(rt("transactions",n)),await Kt(e.account_id),e.to_account_id&&await Kt(e.to_account_id)}async function cv(n){const t=await ht(dt("categories"));let e=Rt(t);return n&&(e=e.filter(i=>i.type===n)),e}async function oe(n){const t=await cv(n),e=t.filter(r=>!r.parent_id).sort((r,s)=>(r.sort_order||0)-(s.sort_order||0)),i=t.filter(r=>r.parent_id);return e.map(r=>({...r,children:i.filter(s=>s.parent_id===r.id).sort((s,a)=>(s.sort_order||0)-(a.sort_order||0))}))}async function lv(n){const t=An(),e={name:n.name,icon:n.icon||"📦",color:n.color||"#6366f1",type:n.type,parent_id:n.parent_id||null,is_default:!1,sort_order:n.sort_order||0,created_at:new Date().toISOString()};return await Ti(rt("categories",t),e),{id:t,...e}}async function uv(n){await Wr(rt("categories",n))}async function Yo(){const n=await ht(dt("fixed_costs"));return Rt(n).map(qt).sort((t,e)=>(t.created_at||"").localeCompare(e.created_at||""))}async function dv(n){const t=An(),e={name:n.name,amount:parseFloat(n.amount),type:n.type,frequency:n.frequency||"monthly",day_of_month:n.day_of_month||null,month_of_year:n.month_of_year||null,account_id:n.account_id||null,to_account_id:n.to_account_id||null,category_id:n.category_id||null,start_date:n.start_date||null,end_date:n.end_date||null,is_active:!0,created_at:new Date().toISOString()};return await Ti(rt("fixed_costs",t),e),{id:t,...e}}async function hv(n,t){return await Tn(rt("fixed_costs",n),{...t,updated_at:new Date().toISOString()}),qt(Qe(await Ke(rt("fixed_costs",n))))}async function pv(n){await Wr(rt("fixed_costs",n))}async function Od(){const n=await ht(dt("wishlist"));return Rt(n).map(qt).sort((t,e)=>(t.priority||2)-(e.priority||2))}async function fv(n){const t=An(),e={name:n.name,price:parseFloat(n.price)||null,url:n.url||null,notes:n.notes||null,priority:n.priority||2,status:n.status||"wanted",icon:n.icon||"🛍️",track_account_id:n.track_account_id||null,created_at:new Date().toISOString(),updated_at:new Date().toISOString()};return await Ti(rt("wishlist",t),e),{id:t,...e}}async function Md(n,t){return await Tn(rt("wishlist",n),{...t,updated_at:new Date().toISOString()}),qt(Qe(await Ke(rt("wishlist",n))))}async function mv(n){await Wr(rt("wishlist",n))}async function gv(n){const[t,e,i]=await Promise.all([Lt(),ht(dt("transactions")),ht(dt("categories"))]),r=Rt(e).map(qt),s=Rt(i),a=Object.fromEntries(s.map(N=>[N.id,N])),l=Object.fromEntries(t.map(N=>[N.id,N])),u=new Date().getFullYear().toString(),h=r.filter(N=>{var k;return(k=N.date)==null?void 0:k.startsWith(n)}),[f,v]=n.split("-").map(Number),m=new Date(f,v-2,1),I=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}`,S=r.filter(N=>{var k;return(k=N.date)==null?void 0:k.startsWith(I)}),D=r.filter(N=>{var k;return(k=N.date)==null?void 0:k.startsWith(u)});function P(N){return{income:N.filter(k=>k.type==="income").reduce((k,w)=>k+w.amount,0),expenses:N.filter(k=>k.type==="expense").reduce((k,w)=>k+w.amount,0),savings:N.filter(k=>k.type==="savings").reduce((k,w)=>k+w.amount,0),tx_count:N.length}}const U=[];for(let N=5;N>=0;N--){const k=new Date(f,v-1-N,1),w=`${k.getFullYear()}-${String(k.getMonth()+1).padStart(2,"0")}`;U.push({month:w,...P(r.filter(g=>{var _;return(_=g.date)==null?void 0:_.startsWith(w)}))})}const M={};for(const N of h.filter(k=>k.type==="expense")){const k=a[N.category_id],w=N.category_id||"uncategorized";M[w]||(M[w]={name:(k==null?void 0:k.name)||"Other",icon:(k==null?void 0:k.icon)||"📦",color:(k==null?void 0:k.color)||"#94a3b8",total:0}),M[w].total+=N.amount}const V={};for(const N of h.filter(k=>k.type==="income")){const k=a[N.category_id],w=N.category_id||"uncategorized";V[w]||(V[w]={name:(k==null?void 0:k.name)||"Other",icon:(k==null?void 0:k.icon)||"💰",color:(k==null?void 0:k.color)||"#34C759",total:0}),V[w].total+=N.amount}const W=h.sort((N,k)=>k.date>N.date?1:-1).slice(0,10).map(N=>{var k,w,g,_,b;return{...N,account_name:((k=l[N.account_id])==null?void 0:k.name)||"",to_account_name:N.to_account_id?((w=l[N.to_account_id])==null?void 0:w.name)||"":null,category_name:((g=a[N.category_id])==null?void 0:g.name)||null,category_icon:((_=a[N.category_id])==null?void 0:_.icon)||null,category_color:((b=a[N.category_id])==null?void 0:b.color)||null}});return{this_month:P(h),prev_month:P(S),ytd:{...P(D),tx_count:D.length},last6months:U,accounts:t.filter(N=>N.is_active!==!1),recent_transactions:W,category_breakdown:Object.values(M).sort((N,k)=>k.total-N.total).slice(0,5),income_breakdown:Object.values(V).sort((N,k)=>k.total-N.total).slice(0,5),savings_goals:t.filter(N=>N.goal_amount&&N.is_active!==!1),net_worth:t.filter(N=>N.is_active!==!1&&N.type!=="credit_card").reduce((N,k)=>N+k.balance,0),this_year:u}}async function _v(n,t){var P,U;const e="imp_"+Date.now();let i=0,r=0;const s=[],a=[],l=await ht(dt("accounts")),u=Rt(l),h={};for(const M of u)M.iban&&(h[M.iban.replace(/\s/g,"").toUpperCase()]=M.id);const f=u.find(M=>M.id===n),v=((P=f==null?void 0:f.iban)==null?void 0:P.replace(/\s/g,"").toUpperCase())||"",m=/\b[A-Z]{2}\d{2}[A-Z0-9]{4,30}\b/g,I=await ht(dt("transactions")),S=Rt(I).map(qt),D=Tr(_n);for(const M of t)try{if(!M.date||!M.amount||M.amount===0){r++;continue}let V=M.type||"expense",W=null,N=null;const k=[M.description,M.note].filter(Boolean).join(" "),w=[...new Set((k.match(m)||[]).map(E=>E.replace(/\s/g,"").toUpperCase()))];for(const E of w)if(E!==v)if(h[E]){W=h[E],V="transfer";break}else N=E;const g=An(),_={account_id:n,to_account_id:W,amount:Math.abs(M.amount),type:V,description:M.description||null,note:M.note||null,date:M.date,import_id:e,category_id:null,created_at:new Date().toISOString(),updated_at:new Date().toISOString()};D.set(rt("transactions",g),_),N&&!W&&s.push({tx_id:g,date:M.date,amount:M.amount,type:V,description:M.description,unknown_iban:N});const b=new Date(M.date).getTime();for(const E of S)E.import_id===e||E.account_id===n||Math.abs(E.amount-Math.abs(M.amount))<.01&&Math.abs(new Date(E.date).getTime()-b)<=2*864e5&&a.push({imported_tx:{id:g,date:M.date,amount:Math.abs(M.amount),type:V,description:M.description},existing_tx:{id:E.id,date:E.date,amount:E.amount,type:E.type,description:E.description,account_name:((U=u.find(A=>A.id===E.account_id))==null?void 0:U.name)||"?"}});i++}catch{r++}return await D.commit(),await Kt(n),{session_id:e,imported:i,skipped:r,pending_review:s,possible_duplicates:a}}async function yv(n,t){await Tn(rt("transactions",n),{type:"transfer",to_account_id:t||null,updated_at:new Date().toISOString()});const e=await Ke(rt("transactions",n)),i=Qe(e);await Kt(i.account_id),i.to_account_id&&await Kt(i.to_account_id)}async function vv(){for(const e of["accounts","transactions","fixed_costs","wishlist","import_sessions"]){const i=await ht(dt(e)),r=Tr(_n);i.docs.forEach(s=>r.delete(s.ref)),await r.commit()}const n=await ht(dt("categories")),t=Tr(_n);n.docs.filter(e=>!e.data().is_default).forEach(e=>t.delete(e.ref)),await t.commit()}async function wv(){if((await ht(dt("categories"))).size>0)return;const t=Tr(_n),e=[{id:"cat_p_housing",name:"Housing",icon:"🏠",color:"#ef4444",type:"expense",sort_order:1},{id:"cat_p_transport",name:"Transport",icon:"🚗",color:"#f97316",type:"expense",sort_order:2},{id:"cat_p_food",name:"Food & Drink",icon:"🍽️",color:"#eab308",type:"expense",sort_order:3},{id:"cat_p_health",name:"Health",icon:"💊",color:"#10b981",type:"expense",sort_order:4},{id:"cat_p_personal",name:"Personal",icon:"👤",color:"#ec4899",type:"expense",sort_order:5},{id:"cat_p_leisure",name:"Leisure",icon:"🎬",color:"#6366f1",type:"expense",sort_order:6},{id:"cat_p_finance",name:"Finance",icon:"🏦",color:"#64748b",type:"expense",sort_order:7},{id:"cat_p_other_exp",name:"Other",icon:"📦",color:"#94a3b8",type:"expense",sort_order:8},{id:"cat_p_work",name:"Work",icon:"💼",color:"#22c55e",type:"income",sort_order:1},{id:"cat_p_returns",name:"Returns",icon:"📈",color:"#10b981",type:"income",sort_order:2},{id:"cat_p_other_inc",name:"Other Income",icon:"🎁",color:"#34d399",type:"income",sort_order:3},{id:"cat_p_savings",name:"Savings",icon:"🔒",color:"#8b5cf6",type:"savings",sort_order:1}],i=[{id:"cat_rent",name:"Rent / Mortgage",icon:"🏠",color:"#ef4444",type:"expense",parent_id:"cat_p_housing",sort_order:1},{id:"cat_utilities",name:"Utilities",icon:"⚡",color:"#ef4444",type:"expense",parent_id:"cat_p_housing",sort_order:2},{id:"cat_internet",name:"Internet & Phone",icon:"📡",color:"#ef4444",type:"expense",parent_id:"cat_p_housing",sort_order:3},{id:"cat_fuel",name:"Fuel",icon:"⛽",color:"#f97316",type:"expense",parent_id:"cat_p_transport",sort_order:1},{id:"cat_publictx",name:"Public Transport",icon:"🚌",color:"#f97316",type:"expense",parent_id:"cat_p_transport",sort_order:2},{id:"cat_groceries",name:"Groceries",icon:"🛒",color:"#eab308",type:"expense",parent_id:"cat_p_food",sort_order:1},{id:"cat_dining",name:"Dining Out",icon:"🍔",color:"#eab308",type:"expense",parent_id:"cat_p_food",sort_order:2},{id:"cat_coffee",name:"Coffee & Drinks",icon:"☕",color:"#eab308",type:"expense",parent_id:"cat_p_food",sort_order:3},{id:"cat_doctor",name:"Doctor / Pharmacy",icon:"💊",color:"#10b981",type:"expense",parent_id:"cat_p_health",sort_order:1},{id:"cat_clothing",name:"Clothing",icon:"👕",color:"#ec4899",type:"expense",parent_id:"cat_p_personal",sort_order:1},{id:"cat_haircut",name:"Personal Care",icon:"✂️",color:"#ec4899",type:"expense",parent_id:"cat_p_personal",sort_order:2},{id:"cat_entertain",name:"Entertainment",icon:"🎬",color:"#6366f1",type:"expense",parent_id:"cat_p_leisure",sort_order:1},{id:"cat_sport",name:"Sport & Fitness",icon:"🏋️",color:"#6366f1",type:"expense",parent_id:"cat_p_leisure",sort_order:2},{id:"cat_travel",name:"Travel",icon:"✈️",color:"#6366f1",type:"expense",parent_id:"cat_p_leisure",sort_order:3},{id:"cat_subscript",name:"Subscriptions",icon:"📱",color:"#64748b",type:"expense",parent_id:"cat_p_finance",sort_order:1},{id:"cat_salary",name:"Salary",icon:"💼",color:"#22c55e",type:"income",parent_id:"cat_p_work",sort_order:1},{id:"cat_freelance",name:"Freelance",icon:"💻",color:"#22c55e",type:"income",parent_id:"cat_p_work",sort_order:2},{id:"cat_sav_emerg",name:"Emergency Fund",icon:"🛡️",color:"#8b5cf6",type:"savings",parent_id:"cat_p_savings",sort_order:1},{id:"cat_sav_inv",name:"Investments",icon:"📈",color:"#8b5cf6",type:"savings",parent_id:"cat_p_savings",sort_order:2}];for(const r of e)t.set(rt("categories",r.id),{...r,parent_id:null,is_default:!0,created_at:new Date().toISOString()});for(const r of i)t.set(rt("categories",r.id),{...r,is_default:!0,created_at:new Date().toISOString()});await t.commit()}const F={accounts:[],currentPage:"dashboard",dashMonth:new Date().toISOString().slice(0,7),dashView:"month",categoryTree:{expense:[],income:[],savings:[]}},Ut={account_id:"",type:"",month:new Date().toISOString().slice(0,7),search:"",offset:0};async function bv(){F.accounts=await Lt(),Kr("dashboard")}const B={currency(n,t=!1){if(n==null)return"€0,00";const i=Math.abs(n).toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2});return t?(n>=0?"+":"-")+"€"+i:"€"+i},dateShort(n){if(!n)return"";const[t,e,i]=n.split("-");return`${i}/${e}/${t}`}},Ev={dashboard:"Overview",accounts:"Accounts",transactions:"Transactions","fixed-costs":"Fixed Costs",more:"More","savings-goals":"Goals & Wishlist",projection:"Future Balance",categories:"Categories",import:"Import CSV",calculator:"Calculator"},Iv=new Set(["savings-goals","projection","categories","import","calculator"]);async function Kr(n){F.currentPage=n,document.getElementById("page-title").textContent=Ev[n]||n,document.getElementById("header-actions").innerHTML="";const t=Iv.has(n)?"more":n;document.querySelectorAll(".tab-item").forEach(i=>{i.classList.toggle("active",i.dataset.page===t)}),Ld();const e=document.getElementById("content-area");switch(e.innerHTML='<div style="padding:40px 0;text-align:center;color:var(--text-tertiary)">Loading…</div>',F.accounts=await Lt(),n){case"dashboard":await Ce();break;case"accounts":await Jo();break;case"transactions":await Av();break;case"fixed-costs":await Qr();break;case"more":await xv();break;case"savings-goals":await xn();break;case"projection":await Rv();break;case"categories":await Xo();break;case"import":await Sv();break;case"calculator":Cv();break}document.getElementById("scroll-area").scrollTo({top:0,behavior:"instant"})}window.navigate=Kr;function Ld(){const n=document.getElementById("tab-pill"),t=document.querySelector(".tab-item.active");if(!t||!n)return;const i=document.getElementById("tab-bar").getBoundingClientRect(),r=t.getBoundingClientRect();n.style.left=r.left-i.left+6+"px",n.style.width=r.width-12+"px"}window.addEventListener("resize",Ld);function J(n,t="info"){const e=document.createElement("div");e.className=`toast ${t}`,e.textContent=n,document.getElementById("toast-container").appendChild(e),setTimeout(()=>e.remove(),3e3)}window.toast=J;function $t(n,t,e=""){const i="modal_"+Date.now(),r=e.replace(/__MODAL_ID__/g,i),s=document.createElement("div");return s.className="modal-backdrop",s.id=i,s.innerHTML=`
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <div class="modal-title">${n}</div>
      ${t}
      ${r?`<div class="modal-actions">${r}</div>`:""}
    </div>`,s.addEventListener("click",a=>{a.target===s&&Ct(i)}),document.body.appendChild(s),i}function Ct(n){var t;(t=document.getElementById(n))==null||t.remove()}window.showModal=$t;window.closeModal=Ct;async function Ce(){const n=await gv(F.dashMonth),t=n.this_month,e=n.prev_month,i=n.ytd,r=(t.income||0)-(t.expenses||0);(e.income||0)-(e.expenses||0);const s=t.income>0?Math.round(t.savings/t.income*100):0;function a(m,I){if(!I)return"";const S=Math.round((m-I)/I*100);return`<div style="font-size:11px;font-weight:600;color:${S>=0?"var(--tint-green)":"var(--tint-red)"};margin-top:2px">${S>=0?"▲":"▼"} ${Math.abs(S)}% vs last month</div>`}function l(m,I,S){const D=m.map(U=>U[I]||0),P=Math.max(...D,1);return`<svg viewBox="0 0 60 20" style="width:60px;height:20px;display:block">
      ${D.map((U,M)=>{const V=M/(D.length-1)*54+3,W=18-U/P*15;return M===0?`M ${V} ${W}`:`L ${V} ${W}`}).join(" ")}
      <path d="${D.map((U,M)=>{const V=M/(D.length-1)*54+3,W=18-U/P*15;return M===0?`M ${V} ${W}`:`L ${V} ${W}`}).join(" ")}" fill="none" stroke="${S}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}const[u,h]=F.dashMonth.split("-").map(Number),f=F.dashMonth===new Date().toISOString().slice(0,7),v=new Date(u,h-1).toLocaleString("nl-BE",{month:"long",year:"numeric"});document.getElementById("content-area").innerHTML=`

    <!-- MONTH NAV + HERO -->
    <div class="glass-card hero-card" style="margin-bottom:16px">
      <div class="flex-row" style="margin-bottom:14px;gap:8px">
        <button class="btn btn-glass" style="padding:6px 12px;font-size:13px" onclick="shiftDashMonth(-1)">‹</button>
        <div style="flex:1;text-align:center;font-size:13px;font-weight:600;color:var(--text-secondary)">${v}</div>
        <button class="btn btn-glass" style="padding:6px 12px;font-size:13px" ${f?'disabled style="opacity:0.3;padding:6px 12px;font-size:13px"':'onclick="shiftDashMonth(1)"'}>›</button>
        <div class="segment-control">
          <button class="segment-btn ${F.dashView==="month"?"active":""}" onclick="setDashView('month')">Month</button>
          <button class="segment-btn ${F.dashView==="ytd"?"active":""}"  onclick="setDashView('ytd')">YTD</button>
        </div>
      </div>
      <div class="flex-row" style="gap:16px">
        <div style="flex:1">
          <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Net Worth</div>
          <div style="font-size:30px;font-weight:700;letter-spacing:-1px">${B.currency(n.net_worth)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Month balance</div>
          <div style="font-size:22px;font-weight:700;color:${r>=0?"var(--tint-green)":"var(--tint-red)"}">${B.currency(r,!0)}</div>
        </div>
      </div>
    </div>

    <!-- STATS PILLS -->
    <div class="glass-card" style="margin-bottom:16px">
      ${F.dashView==="ytd"?`
        <div style="font-size:11px;color:var(--text-secondary);margin-bottom:10px;text-align:center;font-weight:500">
          Jan – ${new Date().toLocaleString("nl-BE",{month:"short"})} ${n.this_year}
        </div>
        <div class="grid-3" style="gap:10px">
          <div style="background:rgba(52,199,89,0.15);border:1px solid rgba(52,199,89,0.25);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-green);margin-bottom:6px">Income YTD</div>
            <div style="font-size:17px;font-weight:700">${B.currency(i.income||0)}</div>
          </div>
          <div style="background:rgba(255,59,48,0.12);border:1px solid rgba(255,59,48,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-red);margin-bottom:6px">Expenses YTD</div>
            <div style="font-size:17px;font-weight:700">${B.currency(i.expenses||0)}</div>
          </div>
          <div style="background:rgba(175,82,222,0.12);border:1px solid rgba(175,82,222,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-purple);margin-bottom:6px">Savings YTD</div>
            <div style="font-size:17px;font-weight:700">${B.currency(i.savings||0)}</div>
          </div>
        </div>
        <div style="margin-top:10px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08)">
          <div class="flex-row">
            <div style="font-size:12px;color:var(--text-secondary)">Net YTD <span style="color:var(--text-tertiary)">(excl. savings)</span></div>
            <div style="font-size:16px;font-weight:700;margin-left:auto;color:${(i.income||0)-(i.expenses||0)>=0?"var(--tint-green)":"var(--tint-red)"}">
              ${B.currency((i.income||0)-(i.expenses||0),!0)}
            </div>
          </div>
          <div class="flex-row" style="margin-top:6px">
            <div style="font-size:12px;color:var(--text-secondary)">Savings rate</div>
            ${(()=>{const m=i.income>0?Math.round(i.savings/i.income*100):0;return`<div style="font-size:13px;font-weight:700;margin-left:auto;color:${m>=20?"var(--tint-green)":m>=10?"var(--tint-orange)":"var(--tint-red)"}">${m}% of income</div>`})()}
            <div style="font-size:12px;color:var(--text-tertiary);margin-left:8px">${i.tx_count||0} tx</div>
          </div>
        </div>
      `:`
        <div class="grid-2" style="gap:10px">
          <div style="background:rgba(52,199,89,0.15);border:1px solid rgba(52,199,89,0.25);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-green);margin-bottom:6px">Income</div>
            <div style="font-size:17px;font-weight:700">${B.currency(t.income||0)}</div>
            ${a(t.income||0,e.income||0)||""}
            <div style="margin-top:8px">${l(n.last6months,"income","var(--tint-green)")}</div>
          </div>
          <div style="background:rgba(255,59,48,0.12);border:1px solid rgba(255,59,48,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-red);margin-bottom:6px">Expenses</div>
            <div style="font-size:17px;font-weight:700">${B.currency(t.expenses||0)}</div>
            ${a(t.expenses||0,e.expenses||0)||""}
            <div style="margin-top:8px">${l(n.last6months,"expenses","var(--tint-red)")}</div>
          </div>
          <div style="background:rgba(175,82,222,0.12);border:1px solid rgba(175,82,222,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-purple);margin-bottom:6px">Saved</div>
            <div style="font-size:17px;font-weight:700">${B.currency(t.savings||0)}</div>
            ${a(t.savings||0,e.savings||0)||""}
            <div style="margin-top:8px">${l(n.last6months,"savings","var(--tint-purple)")}</div>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--text-secondary);margin-bottom:6px">Savings Rate</div>
            <div style="font-size:17px;font-weight:700;color:${s>=20?"var(--tint-green)":s>=10?"var(--tint-orange)":"var(--text-primary)"}">${s}%</div>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:4px">of income</div>
            <div style="margin-top:8px">
              <div class="progress-track" style="height:4px">
                <div style="height:100%;border-radius:100px;width:${Math.min(100,s)}%;background:${s>=20?"var(--tint-green)":s>=10?"var(--tint-orange)":"var(--tint-red)"}"></div>
              </div>
            </div>
          </div>
        </div>
      `}
    </div>

    <!-- ACCOUNTS GRID -->
    <div class="flex-row" style="margin-bottom:12px">
      <div class="title-sm">Accounts</div>
      <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 12px" onclick="openAddAccount()">+ Add</button>
    </div>
    <div class="grid-3" style="margin-bottom:20px;gap:12px">
      ${n.accounts.map(m=>Tv(m)).join("")}
    </div>

    <!-- RECENT TRANSACTIONS + BREAKDOWN -->
    <div class="grid-2" style="gap:16px;margin-bottom:16px">
      <div class="glass-card">
        <div class="flex-row" style="margin-bottom:14px">
          <div class="title-sm">Transactions</div>
          <button class="btn btn-glass" style="margin-left:auto;padding:5px 12px;font-size:12px" onclick="navigate('transactions')">All →</button>
        </div>
        ${n.recent_transactions.length===0?'<div class="empty-state" style="padding:28px 0"><div class="empty-icon">💸</div><h3>No transactions</h3><p>None recorded for this month</p></div>':n.recent_transactions.map(m=>$d(m)).join("")}
      </div>
      <div style="display:flex;flex-direction:column;gap:16px">
        ${n.category_breakdown.length>0?`
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Expenses</div>
            ${hl(n.category_breakdown)}
          </div>`:""}
        ${n.income_breakdown.length>0?`
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Income Sources</div>
            ${hl(n.income_breakdown,"income")}
          </div>`:""}
        ${n.savings_goals.length>0?`
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Savings Goals</div>
            ${n.savings_goals.map(m=>{const I=Math.min(100,Math.round(m.balance/m.goal_amount*100));return`<div style="margin-bottom:12px">
                <div class="flex-row" style="margin-bottom:5px">
                  <div style="font-size:13px;font-weight:500">${m.goal_name||m.name}</div>
                  <div style="font-size:12px;font-weight:700;margin-left:auto;color:var(--tint-blue)">${I}%</div>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:${I}%"></div></div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:3px">${B.currency(m.balance)} of ${B.currency(m.goal_amount)}</div>
              </div>`}).join("")}
          </div>`:""}
      </div>
    </div>
  `}window.shiftDashMonth=n=>{const[t,e]=F.dashMonth.split("-").map(Number),i=new Date(t,e-1+n,1);F.dashMonth=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`,Ce()};window.setDashView=n=>{F.dashView=n,Ce()};function Tv(n){const t=n.color||"#007AFF";return`
    <div class="glass-card glass-card-sm" style="border-color:${t}30;cursor:pointer" onclick="openEditAccount('${n.id}')">
      <div style="font-size:20px;margin-bottom:6px">${n.type==="credit_card"?"💳":n.type==="savings"?"🏦":n.type==="investment"?"📈":"🏦"}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
      <div style="font-size:16px;font-weight:700;color:${t}">${B.currency(n.balance)}</div>
      ${n.goal_amount?`
        <div style="margin-top:8px">
          <div class="progress-track" style="height:3px">
            <div class="progress-fill" style="width:${Math.min(100,n.balance/n.goal_amount*100)}%;background:${t}"></div>
          </div>
        </div>`:""}
    </div>`}function hl(n,t="expense"){const e=n.reduce((i,r)=>i+r.total,0);return n.map(i=>{const r=e>0?Math.round(i.total/e*100):0,s=t==="income"?"var(--tint-green)":"var(--tint-red)";return`<div class="flex-row" style="gap:12px;margin-bottom:10px">
      <div style="font-size:16px;width:24px;text-align:center">${i.icon||"📦"}</div>
      <div style="flex:1;min-width:0">
        <div class="flex-row" style="margin-bottom:4px">
          <div style="font-size:13px;font-weight:500">${i.name||"Other"}</div>
          <div style="margin-left:auto;font-size:13px;font-weight:600;color:${s}">${B.currency(i.total)}</div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${r}%;background:${i.color||s}"></div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--text-tertiary);width:30px;text-align:right">${r}%</div>
    </div>`}).join("")}function $d(n,t){const e=n.type==="transfer"||n.type==="savings",i=e&&n.to_account_id===t,r=n.type==="income"||i,s=n.type==="savings"&&!i,a=n.category_color?n.category_color+"30":e?"rgba(94,92,230,0.18)":"rgba(255,255,255,0.08)",l=r?"+":e?"→":"-",u=r?"var(--tint-green)":s||e?"var(--tint-purple)":"var(--tint-red)",h=e?"🔄":n.category_icon||"💸";let f=n.account_name||"";return e&&n.to_account_name&&(f=i?`← ${n.account_name}`:`→ ${n.to_account_name}`),`
    <div class="tx-row" onclick="openEditTransaction('${n.id}')">
      <div class="tx-icon" style="background:${a}">${h}</div>
      <div class="tx-info">
        <div class="tx-desc">${n.description||n.category_name||(e?"Transfer":"Transaction")}</div>
        <div class="tx-meta">${f} · ${B.dateShort(n.date)}</div>
      </div>
      <div class="tx-amount" style="color:${u}">${l}${B.currency(n.amount)}</div>
    </div>`}async function Jo(){var i;document.getElementById("header-actions").innerHTML='<button class="btn btn-primary" onclick="openAddAccount()">+ Add Account</button>';const n={current:[],savings:[],credit_card:[],investment:[]};for(const r of F.accounts.filter(s=>s.is_active))(i=n[r.type])==null||i.push(r);const t={current:"Current Accounts",savings:"Savings Accounts",credit_card:"Credit Cards",investment:"Investments"};let e="";for(const[r,s]of Object.entries(n))if(s.length){e+=`<div style="font-size:12px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.6px;margin:16px 0 8px">${t[r]}</div>`;for(const a of s){const l=a.color||"#007AFF",u=a.type==="credit_card"&&a.credit_limit?Math.min(100,Math.round(Math.abs(a.balance)/a.credit_limit*100)):null;e+=`
        <div class="glass-card" style="margin-bottom:12px;border-color:${l}25">
          <div class="flex-row" style="margin-bottom:${a.goal_amount||u!==null?"12":"0"}px">
            <div style="width:38px;height:38px;border-radius:12px;background:${l}25;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">
              ${a.type==="credit_card"?"💳":a.type==="savings"?"🏦":a.type==="investment"?"📈":"🏦"}
            </div>
            <div style="flex:1;padding:0 12px">
              <div style="font-size:15px;font-weight:600">${a.name}</div>
              <div style="font-size:12px;color:var(--text-tertiary)">${a.iban||""}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:18px;font-weight:700;color:${l}">${B.currency(a.balance)}</div>
              ${u!==null?`<div style="font-size:11px;color:var(--text-tertiary)">${u}% of ${B.currency(a.credit_limit)}</div>`:""}
            </div>
            <button class="btn btn-glass" style="padding:7px 12px;font-size:12px;margin-left:10px" onclick="openEditAccount('${a.id}')">Edit</button>
          </div>
          ${a.goal_amount?`
            <div>
              <div class="flex-row" style="margin-bottom:5px">
                <div style="font-size:12px;color:var(--text-secondary)">${a.goal_name||"Goal"}</div>
                <div style="font-size:12px;font-weight:700;margin-left:auto;color:${l}">${Math.min(100,Math.round(a.balance/a.goal_amount*100))}%</div>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,a.balance/a.goal_amount*100)}%;background:${l}"></div></div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:3px">${B.currency(a.balance)} of ${B.currency(a.goal_amount)}</div>
            </div>`:""}
        </div>`}}e||(e='<div class="empty-state"><div class="empty-icon">💳</div><h3>No accounts yet</h3><p>Add your first account</p><br><button class="btn btn-primary" onclick="openAddAccount()">+ Add Account</button></div>'),document.getElementById("content-area").innerHTML=e}async function Av(){document.getElementById("header-actions").innerHTML='<button class="btn btn-primary" onclick="openAddTransaction()">+ Add</button>',Ut.month||(Ut.month=new Date().toISOString().slice(0,7)),await Ai()}async function Ai(){const n=await Vd({account_id:Ut.account_id,type:Ut.type,month:Ut.month,search:Ut.search,limit:50,offset:0}),t=n.rows;document.getElementById("content-area").innerHTML=`
    <div class="glass-card glass-card-sm" style="margin-bottom:16px">
      <div class="flex-row" style="flex-wrap:wrap;gap:10px">
        <select class="select" style="width:auto;flex:1;min-width:150px" onchange="txFilters.account_id=this.value;txFilters.offset=0;renderTxList()">
          <option value="">All Accounts</option>
          ${F.accounts.map(e=>`<option value="${e.id}" ${Ut.account_id===e.id?"selected":""}>${e.name}</option>`).join("")}
        </select>
        <select class="select" style="width:auto;flex:1;min-width:130px" onchange="txFilters.type=this.value;txFilters.offset=0;renderTxList()">
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="savings">Savings</option>
          <option value="transfer">Transfer</option>
        </select>
        <input type="month" class="input" style="width:auto;flex:1;min-width:150px" value="${Ut.month}" onchange="txFilters.month=this.value;txFilters.offset=0;renderTxList()" />
        <input type="search" class="input" style="width:auto;flex:2;min-width:180px" placeholder="Search…" value="" oninput="txFilters.search=this.value;txFilters.offset=0;renderTxList()" />
      </div>
    </div>
    <div class="glass-card">
      <div class="flex-row" style="margin-bottom:16px">
        <div class="title-sm">${n.total} Transactions</div>
      </div>
      ${t.length===0?'<div class="empty-state"><div class="empty-icon">🔍</div><h3>No transactions</h3><p>Try adjusting filters</p></div>':t.map(e=>$d(e,Ut.account_id)).join("")}
      ${n.total>50?`
        <div class="flex-row" style="margin-top:16px;justify-content:center;gap:10px">
          
          <span class="text-secondary text-sm">${Math.floor(Ut.offset/50)+1} / ${Math.ceil(n.total/50)}</span>
          ${Ut.offset+50<n.total?'<button class="btn btn-glass" onclick="txFilters.offset+=50;renderTxList()">Next →</button>':""}
        </div>`:""}
    </div>`}window.renderTxList=Ai;async function Qr(){const n=await Yo(),t=n.filter(f=>f.type==="income"&&f.is_active),e=n.filter(f=>f.type==="expense"&&f.is_active),i=n.filter(f=>f.type==="savings"&&f.is_active);function r(f){return f.reduce((v,m)=>m.frequency==="monthly"?v+m.amount:m.frequency==="yearly"?v+m.amount/12:m.frequency==="weekly"?v+m.amount*4.33:v,0)}const s=r(t),a=r(e),l=r(i),u=s-a;function h(f,v,m){return v.length?v.map(I=>{var P;const S=f==="income"?"var(--tint-green)":f==="savings"?"var(--tint-purple)":"var(--tint-red)",D=I.frequency==="monthly"?"/mo":I.frequency==="yearly"?"/yr":"/wk";return`<div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
        <div style="flex:1">
          <div style="font-size:14px;font-weight:500">${I.name}</div>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">${I.frequency}${I.account_id?` · ${((P=F.accounts.find(U=>U.id===I.account_id))==null?void 0:P.name)||""}`:""}</div>
        </div>
        <div style="font-size:14px;font-weight:700;color:${S};margin-right:10px">${B.currency(I.amount)}${D}</div>
        <button class="btn btn-glass" style="font-size:11px;padding:4px 10px" onclick="openEditFixedCost('${I.id}')">Edit</button>
      </div>`}).join(""):`<div style="font-size:13px;color:var(--text-tertiary);padding:8px 0">${m}</div>`}document.getElementById("content-area").innerHTML=`
    <div class="glass-card glass-card-sm" style="margin-bottom:14px">
      <div class="flex-row" style="gap:16px;flex-wrap:wrap">
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Income</div><div style="font-size:16px;font-weight:700;color:var(--tint-green)">${B.currency(s)}</div></div>
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Expenses</div><div style="font-size:16px;font-weight:700;color:var(--tint-red)">${B.currency(a)}</div></div>
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Fixed Savings</div><div style="font-size:16px;font-weight:700;color:var(--tint-purple)">${B.currency(l)}</div></div>
        <div style="margin-left:auto">
          <div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Net</div>
          <div style="font-size:20px;font-weight:700;color:${u>=0?"var(--tint-green)":"var(--tint-red)"}">${B.currency(u,!0)}</div>
          <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px">excl. savings</div>
        </div>
      </div>
    </div>

    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-green)">💰 Fixed Income</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openAddFixedCost('income')">+ Add</button>
      </div>
      ${h("income",t,"No fixed income yet.")}
    </div>
    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-red)">💸 Fixed Expenses</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openAddFixedCost('expense')">+ Add</button>
      </div>
      ${h("expense",e,"No fixed expenses yet.")}
    </div>
    <div class="glass-card">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-purple)">🔒 Fixed Savings</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openAddFixedCost('savings')">+ Add</button>
      </div>
      ${h("savings",i,"No fixed savings yet.")}
    </div>`}async function xn(){document.getElementById("header-actions").innerHTML='<button class="btn btn-primary" onclick="openAddWishItem()">+ Wish</button>';const n=await Od(),t=F.accounts.filter(m=>m.goal_amount&&m.is_active),e=F.accounts.filter(m=>!m.goal_amount&&m.type!=="credit_card"&&m.is_active),i=F.accounts.filter(m=>m.type!=="credit_card"&&m.is_active).reduce((m,I)=>m+I.balance,0),r={1:"🔥 High",2:"⭐ Medium",3:"💤 Low"},s={1:"var(--tint-red)",2:"var(--tint-yellow)",3:"var(--text-tertiary)"},a={wanted:"🛍️ Wanted",saving:"💰 Saving",bought:"✅ Bought"},l={wanted:"rgba(255,255,255,0.08)",saving:"rgba(0,122,255,0.12)",bought:"rgba(52,199,89,0.12)"};function u(m){if(!m.price)return"";let I,S;if(m.track_account_id){const V=F.accounts.find(W=>W.id===m.track_account_id);I=V?V.balance:0,S=V?V.name:"Account"}else I=i,S="Total balance";const D=Math.min(100,Math.max(0,Math.round(I/m.price*100))),P=I>=m.price,U=I-m.price,M=P?"var(--tint-green)":D>=66?"var(--tint-blue)":D>=33?"var(--tint-orange)":"var(--tint-red)";return`
      <div style="margin-top:10px">
        <div class="flex-row" style="margin-bottom:5px">
          <div style="font-size:11px;color:var(--text-tertiary)">${S}: ${B.currency(I)}</div>
          <div style="font-size:11px;font-weight:700;color:${M};margin-left:auto">${D}% ${P?"— ready! 🎉":`— ${B.currency(m.price-I)} to go`}</div>
        </div>
        <div class="progress-track" style="height:6px">
          <div class="progress-fill" style="width:${D}%;background:${M}"></div>
        </div>
        <div style="font-size:11px;color:${U>=0?"var(--tint-green)":"var(--tint-red)"};margin-top:5px;font-weight:600">
          After purchase: ${B.currency(U,!0)}
        </div>
      </div>`}let h="";if(t.length>0){h+=`<div class="flex-row" style="margin-bottom:12px"><div class="title-sm">Savings Goals</div></div>
      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px">`;for(const m of t){const I=Math.min(100,Math.round(m.balance/m.goal_amount*100)),S=m.goal_amount-m.balance,D=m.color||"#007AFF";h+=`<div class="glass-card">
        <div class="flex-row" style="margin-bottom:14px">
          <div>
            <div style="font-size:16px;font-weight:600">${m.goal_name||m.name}</div>
            <div style="font-size:12px;color:var(--text-tertiary)">${m.name}${m.goal_deadline?` · by ${B.dateShort(m.goal_deadline)}`:""}</div>
          </div>
          <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openEditAccount('${m.id}')">Edit</button>
        </div>
        <div class="flex-row" style="margin-bottom:10px;gap:12px">
          <div><div style="font-size:11px;color:var(--text-tertiary)">Saved</div><div style="font-size:15px;font-weight:700;color:${D}">${B.currency(m.balance)}</div></div>
          <div><div style="font-size:11px;color:var(--text-tertiary)">Goal</div><div style="font-size:15px;font-weight:700">${B.currency(m.goal_amount)}</div></div>
          <div><div style="font-size:11px;color:var(--text-tertiary)">Remaining</div><div style="font-size:15px;font-weight:700;color:var(--tint-orange)">${B.currency(S)}</div></div>
          <div style="margin-left:auto;font-size:22px;font-weight:700;color:${D}">${I}%</div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${I}%;background:${D}"></div></div>
      </div>`}h+="</div>"}e.length>0&&(h+=`<div class="glass-card glass-card-sm" style="margin-bottom:20px">
      <div style="font-size:13px;font-weight:600;margin-bottom:10px;color:var(--text-secondary)">Set a Goal</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${e.map(m=>`<button class="btn btn-glass" style="font-size:12px" onclick="openSetGoal('${m.id}')">${m.name}</button>`).join("")}
      </div>
    </div>`);const f=n.filter(m=>m.status!=="bought"),v=n.filter(m=>m.status==="bought");if(h+=`<div class="flex-row" style="margin-bottom:12px">
    <div class="title-sm">Wish List</div>
    <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 12px" onclick="openAddWishItem()">+ Add</button>
  </div>`,!f.length&&!v.length)h+='<div class="glass-card"><div class="empty-state" style="padding:32px 0"><div class="empty-icon">🛍️</div><h3>Your wish list is empty</h3><p>Add things you want to save up for</p></div></div>';else{if(f.length){h+='<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">';for(const m of f)h+=`<div class="glass-card glass-card-sm" style="background:${l[m.status]}">
          <div class="flex-row">
            <div style="font-size:24px;width:38px;text-align:center;flex-shrink:0">${m.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:15px;font-weight:600">${m.name}</div>
              <div class="flex-row" style="margin-top:3px;gap:8px">
                ${m.price?`<div style="font-size:13px;font-weight:700;color:var(--tint-blue)">${B.currency(m.price)}</div>`:""}
                <div style="font-size:11px;font-weight:600;color:${s[m.priority]}">${r[m.priority]}</div>
                <div style="font-size:11px;color:var(--text-tertiary)">${a[m.status]}</div>
              </div>
              ${m.notes?`<div style="font-size:12px;color:var(--text-secondary);margin-top:3px">${m.notes}</div>`:""}
              ${u(m)}
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex-shrink:0;margin-left:10px">
              <button class="btn btn-glass" style="font-size:11px;padding:4px 10px" onclick="markWishBought('${m.id}')">✅ Got it</button>
              <button class="btn btn-glass" style="font-size:11px;padding:4px 10px" onclick="openEditWishItem('${m.id}')">Edit</button>
            </div>
          </div>
        </div>`;h+="</div>"}if(v.length){h+=`<div style="font-size:12px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:8px">Already Got ✅</div>
        <div style="display:flex;flex-direction:column;gap:8px">`;for(const m of v)h+=`<div class="glass-card glass-card-xs flex-row" style="background:rgba(52,199,89,0.08);opacity:0.7">
          <div style="font-size:18px;width:30px;text-align:center">${m.icon}</div>
          <div style="flex:1;font-size:13px;font-weight:500;text-decoration:line-through;color:var(--text-secondary)">${m.name}</div>
          ${m.price?`<div style="font-size:13px;font-weight:600;color:var(--tint-green)">${B.currency(m.price)}</div>`:""}
          <button class="btn btn-glass" style="font-size:11px;padding:3px 8px;margin-left:8px" onclick="doDeleteWishItem('${m.id}')">✕</button>
        </div>`;h+="</div>"}}document.getElementById("content-area").innerHTML=h}async function xv(){document.getElementById("header-actions").innerHTML="";function n(t,e,i,r,s){return`<div class="list-row" onclick="navigate('${s}')">
      <div style="width:34px;height:34px;border-radius:10px;background:${e};display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">${t}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:500">${i}</div>
        ${r?`<div style="font-size:12px;color:var(--text-tertiary);margin-top:1px">${r}</div>`:""}
      </div>
      <div style="color:var(--text-tertiary);font-size:16px;font-weight:300">›</div>
    </div>`}document.getElementById("content-area").innerHTML=`
    <div class="list-section" style="margin-bottom:16px">
      <div class="list-section-header">Goals & Future</div>
      ${n("🎯","rgba(255,204,0,0.18)","Savings Goals","Track your savings targets","savings-goals")}
      ${n("🔮","rgba(94,92,230,0.18)","Future Balance","12-month projection","projection")}
      ${n("🧮","rgba(0,199,140,0.18)","Quick Calculator","What-if balance scenarios","calculator")}
    </div>
    <div class="list-section" style="margin-bottom:16px">
      <div class="list-section-header">Manage</div>
      ${n("🏷️","rgba(255,149,0,0.18)","Categories","Organise your transactions","categories")}
      ${n("📥","rgba(52,199,89,0.18)","Import CSV","Bulk import from your bank","import")}
    </div>
    <div class="list-section">
      <div class="list-section-header">About</div>
      <div class="list-row" style="cursor:default">
        <div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,rgba(0,122,255,0.35),rgba(175,82,222,0.35));display:flex;align-items:center;justify-content:center;font-size:17px">💰</div>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:500">Finance</div>
          <div style="font-size:12px;color:var(--text-tertiary)">Personal tracker · v2.0 Firebase</div>
        </div>
        <button class="btn btn-glass" style="font-size:12px;padding:6px 12px" onclick="window.signOut()">Sign out</button>
      </div>
      <div class="list-row" onclick="openResetConfirm()" style="color:var(--tint-red)">
        <div style="width:34px;height:34px;border-radius:10px;background:rgba(255,59,48,0.15);display:flex;align-items:center;justify-content:center;font-size:17px">🗑️</div>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:500;color:var(--tint-red)">Reset All Data</div>
          <div style="font-size:12px;color:var(--text-tertiary)">Wipe everything and start fresh</div>
        </div>
        <div style="color:var(--text-tertiary);font-size:16px;font-weight:300">›</div>
      </div>
    </div>`}async function Rv(){const t=(await Yo()).filter(h=>h.is_active),e=new Date,i=F.accounts.filter(h=>h.type!=="credit_card"&&h.is_active).reduce((h,f)=>h+f.balance,0);function r(h){return h.frequency==="monthly"?h.type==="income"?h.amount:-h.amount:h.frequency==="yearly"?h.type==="income"?h.amount/12:-h.amount/12:h.frequency==="weekly"?h.type==="income"?h.amount*4.33:-h.amount*4.33:0}const s=t.reduce((h,f)=>h+r(f),0),a=[];let l=i;for(let h=1;h<=12;h++){const v=new Date(e.getFullYear(),e.getMonth()+h,1).toLocaleString("nl-BE",{month:"short",year:"numeric"});l+=s,a.push({label:v,balance:l,delta:s})}const u=Math.max(...a.map(h=>Math.abs(h.balance)),1);document.getElementById("content-area").innerHTML=`
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:4px">Starting Balance</div>
      <div style="font-size:28px;font-weight:700">${B.currency(i)}</div>
      <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">Monthly fixed net: <strong style="color:${s>=0?"var(--tint-green)":"var(--tint-red)"}">${B.currency(s,!0)}</strong></div>
    </div>
    <div class="glass-card" style="margin-bottom:16px">
      <div style="display:flex;align-items:flex-end;gap:4px;height:100px;margin-bottom:8px">
        ${a.map(h=>{const f=Math.max(4,Math.round(Math.abs(h.balance)/u*90)),v=h.balance>=0?"var(--tint-blue)":"var(--tint-red)";return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px">
            <div style="width:100%;height:${f}px;background:${v};border-radius:4px 4px 0 0;opacity:0.8"></div>
          </div>`}).join("")}
      </div>
      <div style="display:flex;gap:4px">
        ${a.map(h=>`<div style="flex:1;font-size:8px;color:var(--text-tertiary);text-align:center;writing-mode:vertical-rl;transform:rotate(180deg)">${h.label}</div>`).join("")}
      </div>
    </div>
    <div class="glass-card">
      ${a.map(h=>`
        <div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
          <div style="font-size:13px;font-weight:500;flex:1">${h.label}</div>
          <div style="font-size:12px;color:${h.delta>=0?"var(--tint-green)":"var(--tint-red)"};margin-right:12px">${B.currency(h.delta,!0)}</div>
          <div style="font-size:14px;font-weight:700;color:${h.balance>=0?"var(--tint-blue)":"var(--tint-red)"}">${B.currency(h.balance)}</div>
        </div>`).join("")}
    </div>`}async function Xo(){const[n,t,e]=await Promise.all([oe("expense"),oe("income"),oe("savings")]);F.categoryTree={expense:n,income:t,savings:e};function i(r,s){return r.length?r.map(a=>`
      <div style="margin-bottom:8px">
        <div class="flex-row" style="padding:8px 0;cursor:pointer" onclick="toggleCatChildren('cc_${a.id}','chevron_${a.id}')">
          <div style="font-size:16px;width:26px">${a.icon||"📦"}</div>
          <div style="font-size:14px;font-weight:600;flex:1">${a.name}</div>
          <div id="chevron_${a.id}" style="color:var(--text-tertiary);font-size:13px;transform:rotate(-90deg);transition:transform 0.2s">▾</div>
        </div>
        <div id="cc_${a.id}" style="display:none;flex-direction:column;padding-left:26px">
          ${a.children.map(l=>`
            <div class="flex-row" style="padding:6px 0;border-top:1px solid var(--glass-border-sub)">
              <div style="font-size:14px;width:24px">${l.icon||"·"}</div>
              <div style="font-size:13px;flex:1;color:var(--text-secondary)">${l.name}</div>
              <button class="btn btn-glass" style="font-size:10px;padding:3px 8px;color:var(--tint-red)" onclick="doDeleteCategory('${l.id}')">✕</button>
            </div>`).join("")}
          <button class="btn btn-glass" style="font-size:11px;padding:5px 10px;margin:6px 0" onclick="openAddCategory('${s}','${a.id}')">+ Sub</button>
        </div>
      </div>`).join(""):'<div style="font-size:13px;color:var(--text-tertiary);padding:8px 0">No categories yet.</div>'}document.getElementById("content-area").innerHTML=`
    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-red)">🔴 Expense Categories</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 10px" onclick="openAddCategory('expense')">+ Parent</button>
      </div>
      ${i(n,"expense")}
    </div>
    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-green)">🟢 Income Categories</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 10px" onclick="openAddCategory('income')">+ Parent</button>
      </div>
      ${i(t,"income")}
    </div>
    <div class="glass-card">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-purple)">🟣 Savings Categories</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 10px" onclick="openAddCategory('savings')">+ Parent</button>
      </div>
      ${i(e,"savings")}
    </div>`}window.toggleCatChildren=(n,t)=>{const e=document.getElementById(n);if(!e)return;const i=e.style.display==="none";e.style.display=i?"flex":"none";const r=document.getElementById(t);r&&(r.style.transform=i?"rotate(0deg)":"rotate(-90deg)")};async function Sv(){document.getElementById("header-actions").innerHTML="",document.getElementById("content-area").innerHTML=`
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:14px">📥 Import CSV</div>
      <div class="input-group">
        <label class="input-label">Account</label>
        <select class="select" id="imp-account">
          ${F.accounts.filter(n=>n.is_active).map(n=>`<option value="${n.id}">${n.name}</option>`).join("")}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">CSV File</label>
        <input type="file" class="input" id="imp-file" accept=".csv" />
      </div>
      <div class="input-group">
        <label class="input-label">Date Format</label>
        <select class="select" id="imp-date-fmt">
          <option value="DD/MM/YYYY">DD/MM/YYYY (Belgian)</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY (US)</option>
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Amount Format</label>
        <select class="select" id="imp-amount-type">
          <option value="signed">Single column (negative = expense)</option>
          <option value="separate">Separate debit/credit columns</option>
        </select>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px" onclick="parseImportCSV()">Preview CSV →</button>
    </div>
    <div id="imp-mapping" style="display:none"></div>
    <div id="imp-preview" style="display:none"></div>`}window.parseImportCSV=async()=>{const n=document.getElementById("imp-file").files[0];if(!n){J("Select a CSV file","warning");return}const t=await n.text();let e=",";for(const u of[";",",","	","|"])if(t.split(`
`)[0].split(u).length>2){e=u;break}const i=t.trim().split(`
`),r=i[0].split(e).map(u=>u.trim().replace(/^"|"$/g,"")),s=i.slice(1,6).map(u=>u.split(e).map(h=>h.trim().replace(/^"|"$/g,""))),a=r.map(u=>u.toLowerCase()),l={date:r[a.findIndex(u=>u.includes("date")||u.includes("datum"))]||r[0],amount:r[a.findIndex(u=>u.includes("amount")||u.includes("bedrag")||u.includes("montant"))]||"",description:r[a.findIndex(u=>u.includes("desc")||u.includes("omschrijving")||u.includes("naam")||u.includes("name"))]||"",note:r[a.findIndex(u=>u.includes("note")||u.includes("mededeling")||u.includes("comment"))]||""};window._importState={text:t,delimiter:e,headers:r,accountId:document.getElementById("imp-account").value},document.getElementById("imp-mapping").style.display="block",document.getElementById("imp-mapping").innerHTML=`
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:14px">Map Columns</div>
      <div class="grid-2">
        ${["date","amount","description","note"].map(u=>`
          <div class="input-group">
            <label class="input-label">${u.charAt(0).toUpperCase()+u.slice(1)}</label>
            <select class="select" id="map-${u}">
              <option value="">— skip —</option>
              ${r.map(h=>`<option value="${h}" ${l[u]===h?"selected":""}>${h}</option>`).join("")}
            </select>
          </div>`).join("")}
      </div>
      <div class="input-group">
        <label class="input-label">Date Format</label>
        <select class="select" id="imp-date-fmt2">
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
        </select>
      </div>
      <div style="overflow-x:auto;margin-top:12px">
        <table style="width:100%;font-size:11px;border-collapse:collapse">
          <thead><tr>${r.map(u=>`<th style="text-align:left;padding:4px 8px;color:var(--text-tertiary);border-bottom:1px solid var(--glass-border)">${u}</th>`).join("")}</tr></thead>
          <tbody>${s.map(u=>`<tr>${u.map(h=>`<td style="padding:4px 8px;border-bottom:1px solid var(--glass-border-sub)">${h}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:14px" onclick="executeImport()">Import →</button>
    </div>`};window.executeImport=async()=>{var U,M;const{text:n,delimiter:t,accountId:e}=window._importState,i=document.getElementById("map-date").value,r=document.getElementById("map-amount").value,s=document.getElementById("map-description").value,a=document.getElementById("map-note").value,l=document.getElementById("imp-date-fmt2").value;if(!i||!r){J("Date and Amount columns required","warning");return}function u(V){if(!V)return null;if(l==="DD/MM/YYYY"){const[W,N,k]=V.split(/[\/\-\.]/);return`${k}-${N==null?void 0:N.padStart(2,"0")}-${W==null?void 0:W.padStart(2,"0")}`}if(l==="MM/DD/YYYY"){const[W,N,k]=V.split(/[\/\-\.]/);return`${k}-${W==null?void 0:W.padStart(2,"0")}-${N==null?void 0:N.padStart(2,"0")}`}return V}const h=n.trim().split(`
`),f=h[0].split(t).map(V=>V.trim().replace(/^"|"$/g,"")),v=[];for(const V of h.slice(1)){if(!V.trim())continue;const W=V.split(t).map(_=>_.trim().replace(/^"|"$/g,"")),N=Object.fromEntries(f.map((_,b)=>[_,W[b]||""])),k=u(N[i]);if(!k||isNaN(new Date(k).getTime()))continue;const w=(N[r]||"0").replace(/\s/g,"").replace(/[^\d\-\+\.,]/g,"").replace(",","."),g=parseFloat(w);isNaN(g)||v.push({date:k,amount:Math.abs(g),type:g>=0?"income":"expense",description:s?N[s]:null,note:a?N[a]:null})}if(!v.length){J("No valid rows found","warning");return}J(`Importing ${v.length} rows…`,"info");const m=await _v(e,v);F.accounts=await Lt();const I=((U=m.possible_duplicates)==null?void 0:U.length)>0,S=((M=m.pending_review)==null?void 0:M.length)>0;if(!I&&!S){J(`✅ Imported ${m.imported} transactions`,"success"),Kr("transactions");return}J(`Imported ${m.imported} — review needed`,"info");const D=F.accounts.filter(V=>V.id!==e).map(V=>`<option value="${V.id}">${V.name}</option>`).join("");let P=`<div style="font-size:15px;font-weight:600;margin-bottom:16px">✅ ${m.imported} imported · ${m.skipped} skipped</div>`;S&&(P+=`<div class="title-sm" style="margin-bottom:10px">🔗 Unknown IBANs</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      ${m.pending_review.map(V=>`
        <div class="glass-card glass-card-sm" style="background:rgba(255,149,0,0.10);border-color:rgba(255,149,0,0.25)" id="pr_${V.tx_id}">
          <div class="flex-row" style="margin-bottom:8px">
            <div><div style="font-size:14px;font-weight:600">${V.description||"Transaction"}</div>
            <div style="font-size:12px;color:var(--text-tertiary)">${B.dateShort(V.date)} · ${B.currency(V.amount)} · <code style="font-size:11px">${V.unknown_iban}</code></div></div>
          </div>
          <div class="flex-row" style="gap:8px">
            <select class="select" id="resolve-acc-${V.tx_id}" style="flex:1">
              <option value="">Keep as-is</option>${D}
            </select>
            <button class="btn btn-primary" style="font-size:12px" onclick="doResolveTransfer('${V.tx_id}')">Link</button>
          </div>
        </div>`).join("")}
      </div>`),I&&(P+=`<div class="title-sm" style="margin-bottom:10px">⚠️ Possible Duplicates</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      ${m.possible_duplicates.map(V=>`
        <div class="glass-card glass-card-sm" style="background:rgba(255,59,48,0.08);border-color:rgba(255,59,48,0.2)">
          <div class="flex-row" style="gap:10px">
            <div style="flex:1;padding:8px;border-radius:10px;background:rgba(255,255,255,0.05)">
              <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:3px">New</div>
              <div style="font-size:13px;font-weight:600">${V.imported_tx.description||"—"}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${B.dateShort(V.imported_tx.date)} · ${B.currency(V.imported_tx.amount)}</div>
              <button class="btn btn-danger" style="font-size:11px;width:100%;justify-content:center;margin-top:6px" onclick="doDeleteDuplicate('${V.imported_tx.id}',this)">Delete new</button>
            </div>
            <div style="font-size:18px;align-self:center;color:var(--text-tertiary)">↔</div>
            <div style="flex:1;padding:8px;border-radius:10px;background:rgba(255,255,255,0.05)">
              <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:3px">Existing · ${V.existing_tx.account_name}</div>
              <div style="font-size:13px;font-weight:600">${V.existing_tx.description||"—"}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${B.dateShort(V.existing_tx.date)} · ${B.currency(V.existing_tx.amount)}</div>
              <button class="btn btn-danger" style="font-size:11px;width:100%;justify-content:center;margin-top:6px" onclick="doDeleteDuplicate('${V.existing_tx.id}',this)">Delete existing</button>
            </div>
          </div>
        </div>`).join("")}
      </div>`),P+=`<button class="btn btn-primary" style="width:100%;justify-content:center" onclick="navigate('transactions')">Done →</button>`,document.getElementById("content-area").innerHTML=P};window.doResolveTransfer=async n=>{var e,i;const t=(e=document.getElementById("resolve-acc-"+n))==null?void 0:e.value;await yv(n,t||null),(i=document.getElementById("pr_"+n))==null||i.remove(),F.accounts=await Lt(),J("Transfer linked","success")};window.doDeleteDuplicate=async(n,t)=>{var e;await Nd(n),(e=t.closest(".glass-card"))==null||e.remove(),F.accounts=await Lt(),J("Deleted","info")};let Ne=[],Wn="";function Cv(){document.getElementById("header-actions").innerHTML="";const n=F.accounts.filter(r=>r.type!=="credit_card"&&r.is_active),t=n.reduce((r,s)=>r+s.balance,0);function e(){var r;return Wn?((r=n.find(s=>s.id===Wn))==null?void 0:r.balance)||0:t}function i(){const r=e(),s=Ne.reduce((I,S)=>S.type==="income"?I+S.amount:I-S.amount,r),a=s-r,l=s>=0?"var(--tint-green)":"var(--tint-red)",u=a>=0?"var(--tint-green)":"var(--tint-red)",h=document.getElementById("calc-result"),f=document.getElementById("calc-diff"),v=document.getElementById("calc-base");h&&(h.textContent=B.currency(s),h.style.color=l),f&&(f.textContent=B.currency(a,!0),f.style.color=u),v&&(v.textContent=B.currency(r));const m=document.getElementById("calc-items");m&&(m.innerHTML=Ne.length===0?'<div style="text-align:center;padding:24px 0;color:var(--text-tertiary);font-size:13px">Add expenses or income below</div>':Ne.map(I=>`
          <div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
            <div style="width:26px;height:26px;border-radius:8px;background:${I.type==="income"?"rgba(52,199,89,0.18)":"rgba(255,59,48,0.15)"};display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">${I.type==="income"?"＋":"－"}</div>
            <div style="flex:1;font-size:14px;font-weight:500;padding:0 10px">${I.label}</div>
            <div style="font-size:14px;font-weight:700;color:${I.type==="income"?"var(--tint-green)":"var(--tint-red)"}">${I.type==="income"?"+":"-"}${B.currency(I.amount)}</div>
            <button onclick="calcRemove('${I.id}')" style="background:none;border:none;color:var(--text-tertiary);font-size:17px;cursor:pointer;padding:0 0 0 10px">×</button>
          </div>`).join(""))}document.getElementById("content-area").innerHTML=`
    <div class="glass-card hero-card" style="margin-bottom:16px;text-align:center;padding:24px">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:var(--text-secondary);margin-bottom:6px">Resulting Balance</div>
      <div id="calc-result" style="font-size:44px;font-weight:700;letter-spacing:-1.5px;line-height:1">${B.currency(e())}</div>
      <div style="margin-top:8px;display:flex;align-items:center;justify-content:center;gap:12px">
        <div style="font-size:13px;color:var(--text-secondary)">Starting: <span id="calc-base">${B.currency(e())}</span></div>
        <div style="font-size:13px;font-weight:700" id="calc-diff">+€0,00</div>
      </div>
    </div>
    <div class="glass-card glass-card-sm" style="margin-bottom:14px">
      <div class="input-group">
        <label class="input-label">Starting from</label>
        <select class="select" id="calc-account-sel" onchange="calcSetAccount(this.value)">
          <option value="">📊 Total balance — ${B.currency(t)}</option>
          ${n.map(r=>`<option value="${r.id}" ${Wn===r.id?"selected":""}>${r.name} (${B.currency(r.balance)})</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="glass-card" style="margin-bottom:14px">
      <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--text-tertiary);margin-bottom:10px">What-ifs</div>
      <div id="calc-items"><div style="text-align:center;padding:24px 0;color:var(--text-tertiary);font-size:13px">Add expenses or income below</div></div>
    </div>
    <div class="glass-card glass-card-sm" style="margin-bottom:10px">
      <div class="flex-row" style="gap:8px;margin-bottom:8px">
        <div class="segment-control" style="flex-shrink:0">
          <button class="segment-btn active" id="calc-type-exp" onclick="calcSetType('expense')">− Expense</button>
          <button class="segment-btn" id="calc-type-inc" onclick="calcSetType('income')">+ Income</button>
        </div>
      </div>
      <div class="flex-row" style="gap:8px">
        <input type="text" class="input" id="calc-label" placeholder="Label (e.g. Trip to Rome)" style="flex:2" />
        <div class="amount-input-wrap" style="flex:1">
          <span class="amount-prefix">€</span>
          <input type="number" class="input" id="calc-amount" placeholder="0.00" step="0.01" style="padding-left:28px" onkeydown="if(event.key==='Enter')calcAdd()" />
        </div>
        <button class="btn btn-primary" onclick="calcAdd()" style="flex-shrink:0;padding:10px 16px;font-size:18px;line-height:1">+</button>
      </div>
    </div>
    <button class="btn btn-glass" onclick="calcClear()" style="width:100%;justify-content:center;color:var(--tint-red)">🗑 Clear all</button>`,window._calcType="expense",i(),window.calcSetAccount=r=>{Wn=r,i()},window.calcRemove=r=>{Ne=Ne.filter(s=>s.id!==r),i()},window.calcClear=()=>{Ne=[],Wn="",document.getElementById("calc-account-sel").value="",i()},window.calcSetType=r=>{window._calcType=r,document.getElementById("calc-type-exp").classList.toggle("active",r==="expense"),document.getElementById("calc-type-inc").classList.toggle("active",r==="income")},window.calcAdd=()=>{const r=document.getElementById("calc-label").value.trim(),s=parseFloat(document.getElementById("calc-amount").value);if(!s||isNaN(s)||s<=0){J("Enter an amount","warning");return}Ne.push({id:"c"+Date.now(),label:r||(window._calcType==="income"?"Income":"Expense"),amount:s,type:window._calcType||"expense"}),document.getElementById("calc-label").value="",document.getElementById("calc-amount").value="",i()}}function Pv(){$t("New Account",`
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Name *</label>
        <input type="text" class="input" id="acc-name" placeholder="e.g. Main Current" />
      </div>
      <div class="input-group">
        <label class="input-label">Type *</label>
        <select class="select" id="acc-type">
          <option value="current">Current Account</option>
          <option value="savings">Savings Account</option>
          <option value="credit_card">Credit Card</option>
          <option value="investment">Investment</option>
        </select>
      </div>
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Starting Balance (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="acc-balance" step="0.01" placeholder="0.00" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Balance Date</label>
        <input type="date" class="input" id="acc-balance-date" value="${new Date().toISOString().split("T")[0]}" />
      </div>
    </div>
    <div class="input-group" id="credit-limit-group" style="display:none">
      <label class="input-label">Credit Limit (€)</label>
      <div class="amount-input-wrap"><span class="amount-prefix">€</span>
      <input type="number" class="input" id="acc-credit-limit" step="0.01" placeholder="e.g. 2000" /></div>
    </div>
    <div class="input-group">
      <label class="input-label">IBAN <span style="color:var(--text-tertiary);font-weight:400">(optional)</span></label>
      <input type="text" class="input" id="acc-iban" placeholder="BE68 5390 0754 7034" style="font-family:monospace" />
    </div>
    <div class="input-group">
      <label class="input-label">Color</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${["#007AFF","#34C759","#FF9500","#FF3B30","#AF52DE","#5AC8FA","#FF2D55","#FFCC00"].map(n=>`
          <div style="width:28px;height:28px;border-radius:50%;background:${n};cursor:pointer;border:2px solid transparent" 
               onclick="selectColor('${n}',this)" data-color="${n}"></div>`).join("")}
      </div>
      <input type="hidden" id="acc-color" value="#007AFF" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAccount('__MODAL_ID__')">Add Account</button>`),document.getElementById("acc-type").addEventListener("change",function(){document.getElementById("credit-limit-group").style.display=this.value==="credit_card"?"block":"none"})}window.openAddAccount=Pv;window.selectColor=(n,t)=>{document.querySelectorAll("[data-color]").forEach(i=>i.style.border="2px solid transparent"),t.style.border="2px solid white";const e=document.getElementById("acc-color");e&&(e.value=n)};window.submitAccount=async n=>{var e,i,r;const t=document.getElementById("acc-name").value.trim();if(!t){J("Name required","warning");return}await rv({name:t,type:document.getElementById("acc-type").value,balance:parseFloat(document.getElementById("acc-balance").value)||0,balance_date:document.getElementById("acc-balance-date").value,color:document.getElementById("acc-color").value,credit_limit:((e=document.getElementById("acc-credit-limit"))==null?void 0:e.value)||null,iban:((r=(i=document.getElementById("acc-iban"))==null?void 0:i.value)==null?void 0:r.trim())||null}),J("Account created","success"),Ct(n),F.accounts=await Lt(),F.currentPage==="accounts"?await Jo():await Ce()};function kv(n){const t=F.accounts.find(e=>e.id===n);t&&$t("Edit Account",`
    <div class="input-group">
      <label class="input-label">Name</label>
      <input type="text" class="input" id="edit-acc-name" value="${t.name}" />
    </div>
    <div class="glass-card glass-card-xs" style="background:rgba(0,122,255,0.08);border-color:rgba(0,122,255,0.20);margin-bottom:12px">
      <div style="font-size:12px;font-weight:600;color:var(--tint-blue);margin-bottom:6px">📍 Starting Point</div>
      <div class="grid-2" style="gap:10px">
        <div class="input-group">
          <label class="input-label">Opening Balance (€)</label>
          <div class="amount-input-wrap"><span class="amount-prefix">€</span>
          <input type="number" class="input" id="edit-acc-balance" step="0.01" value="${t.opening_balance??t.balance}" /></div>
        </div>
        <div class="input-group">
          <label class="input-label">Balance Date</label>
          <input type="date" class="input" id="edit-acc-balance-date" value="${t.balance_date||new Date().toISOString().split("T")[0]}" />
        </div>
      </div>
      <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Current computed balance: <strong style="color:var(--text-primary)">${B.currency(t.balance)}</strong></div>
    </div>
    <div class="input-group">
      <label class="input-label">IBAN</label>
      <input type="text" class="input" id="edit-acc-iban" value="${t.iban||""}" placeholder="BE68 5390 0754 7034" style="font-family:monospace" />
    </div>
    ${t.type==="credit_card"?`
      <div class="input-group">
        <label class="input-label">Credit Limit (€)</label>
        <input type="number" class="input" id="edit-acc-limit" value="${t.credit_limit||""}" step="0.01" />
      </div>`:""}
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditAccount('${n}','__MODAL_ID__')">Save</button>`)}window.openEditAccount=kv;window.submitEditAccount=async(n,t)=>{var a,l;const e={name:document.getElementById("edit-acc-name").value,iban:((l=(a=document.getElementById("edit-acc-iban"))==null?void 0:a.value)==null?void 0:l.trim())||null},i=document.getElementById("edit-acc-balance"),r=document.getElementById("edit-acc-balance-date"),s=document.getElementById("edit-acc-limit");(i==null?void 0:i.value)!==""&&(e.balance=parseFloat(i.value)),r!=null&&r.value&&(e.balance_date=r.value),(s==null?void 0:s.value)!==""&&(e.credit_limit=parseFloat(s.value)),await Dd(n,e),J("Account updated","success"),Ct(t),F.accounts=await Lt(),F.currentPage==="accounts"?await Jo():await Ce()};async function Dv(n={}){const t=new Date().toISOString().split("T")[0],e=F.categoryTree.expense.length?F.categoryTree.expense:await oe("expense"),i=F.categoryTree.income.length?F.categoryTree.income:await oe("income"),r=F.categoryTree.savings.length?F.categoryTree.savings:await oe("savings");F.categoryTree={expense:e,income:i,savings:r};function s(a){return a.map(l=>`
      <optgroup label="${l.icon} ${l.name}">
        ${l.children.map(u=>`<option value="${u.id}">${u.icon} ${u.name}</option>`).join("")}
      </optgroup>`).join("")}$t("Add Transaction",`
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="tx-type" onchange="onTxTypeChange(this.value)">
          ${["expense","income","savings","transfer"].map(a=>`<option value="${a}" ${n.type===a?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("")}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Account</label>
        <select class="select" id="tx-account">
          ${F.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}" ${n.account_id===a.id?"selected":""}>${a.name}</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="input-group" id="tx-to-account-group" style="display:none">
      <label class="input-label">To Account</label>
      <select class="select" id="tx-to-account">
        ${F.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}">${a.name}</option>`).join("")}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Amount (€)</label>
      <div class="amount-input-wrap"><span class="amount-prefix">€</span>
      <input type="number" class="input" id="tx-amount" step="0.01" placeholder="0.00" value="${n.amount||""}" /></div>
    </div>
    <div class="input-group">
      <label class="input-label">Date</label>
      <input type="date" class="input" id="tx-date" value="${n.date||t}" />
    </div>
    <div class="input-group" id="tx-cat-group">
      <label class="input-label">Category</label>
      <select class="select" id="tx-cat">
        <option value="">— none —</option>
        ${s(e)}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Description</label>
      <input type="text" class="input" id="tx-desc" placeholder="Optional description" value="${n.description||""}" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddTransaction('__MODAL_ID__')">Add</button>`),window.onTxTypeChange=a=>{const l=document.getElementById("tx-to-account-group"),u=document.getElementById("tx-cat");if(l&&(l.style.display=["savings","transfer"].includes(a)?"block":"none"),u){u.innerHTML='<option value="">— none —</option>';const h=a==="savings"?r:a==="income"?i:a==="expense"?e:[];u.innerHTML+=s(h)}},onTxTypeChange(n.type||"expense")}window.openAddTransaction=Dv;window.submitAddTransaction=async n=>{const t=document.getElementById("tx-type").value,e=parseFloat(document.getElementById("tx-amount").value),i=document.getElementById("tx-date").value,r=document.getElementById("tx-account").value;if(!e||!i||!r){J("Amount, date and account required","warning");return}await ov({account_id:r,to_account_id:["savings","transfer"].includes(t)?document.getElementById("tx-to-account").value:null,amount:e,type:t,date:i,category_id:document.getElementById("tx-cat").value||null,description:document.getElementById("tx-desc").value||null}),J("Transaction added","success"),Ct(n),F.accounts=await Lt(),F.currentPage==="transactions"?await Ai():await Ce()};async function Vv(n){const t=F.categoryTree.expense.length?F.categoryTree.expense:await oe("expense"),e=F.categoryTree.income.length?F.categoryTree.income:await oe("income"),i=F.categoryTree.savings.length?F.categoryTree.savings:await oe("savings"),s=(await Vd({})).rows.find(u=>u.id===n);if(!s){J("Transaction not found","warning");return}function a(u,h){return u.map(f=>`
      <optgroup label="${f.icon} ${f.name}">
        ${f.children.map(v=>`<option value="${v.id}" ${v.id===h?"selected":""}>${v.icon} ${v.name}</option>`).join("")}
      </optgroup>`).join("")}function l(u,h){return`<option value="">— none —</option>${a(u==="savings"?i:u==="income"?e:t,h)}`}$t("Edit Transaction",`
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="edit-tx-type" onchange="onEditTxTypeChange(this.value)">
          ${["expense","income","savings","transfer"].map(u=>`<option value="${u}" ${s.type===u?"selected":""}>${u.charAt(0).toUpperCase()+u.slice(1)}</option>`).join("")}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Amount (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="edit-tx-amount" step="0.01" value="${s.amount}" /></div>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Date</label>
      <input type="date" class="input" id="edit-tx-date" value="${s.date}" />
    </div>
    <div class="input-group" id="edit-tx-to-account-group" style="display:${["savings","transfer"].includes(s.type)?"block":"none"}">
      <label class="input-label">To Account</label>
      <select class="select" id="edit-tx-to-account">
        ${F.accounts.filter(u=>u.is_active).map(u=>`<option value="${u.id}" ${u.id===s.to_account_id?"selected":""}>${u.name}</option>`).join("")}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Category</label>
      <select class="select" id="edit-tx-cat">${l(s.type,s.category_id)}</select>
    </div>
    <div class="input-group">
      <label class="input-label">Description</label>
      <input type="text" class="input" id="edit-tx-desc" value="${s.description||""}" />
    </div>
  `,`
    <button class="btn btn-danger" onclick="doDeleteTransaction('${n}','__MODAL_ID__')">Delete</button>
    <button class="btn btn-glass"  onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditTransaction('${n}','__MODAL_ID__')">Save</button>`),window.onEditTxTypeChange=u=>{const h=document.getElementById("edit-tx-to-account-group"),f=document.getElementById("edit-tx-cat");h&&(h.style.display=["savings","transfer"].includes(u)?"block":"none"),f&&(f.innerHTML=l(u,null))}}window.openEditTransaction=Vv;window.submitEditTransaction=async(n,t)=>{const e=document.getElementById("edit-tx-type").value;await av(n,{type:e,amount:parseFloat(document.getElementById("edit-tx-amount").value),date:document.getElementById("edit-tx-date").value,category_id:document.getElementById("edit-tx-cat").value||null,description:document.getElementById("edit-tx-desc").value||null,to_account_id:["savings","transfer"].includes(e)?document.getElementById("edit-tx-to-account").value:null}),J("Saved","success"),Ct(t),F.accounts=await Lt(),F.currentPage==="transactions"?await Ai():await Ce()};window.doDeleteTransaction=async(n,t)=>{await Nd(n),J("Deleted","info"),Ct(t),F.accounts=await Lt(),F.currentPage==="transactions"?await Ai():await Ce()};function Nv(n="expense"){$t("New Fixed Cost",`
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Name *</label>
        <input type="text" class="input" id="fc-name" placeholder="e.g. Rent, Salary…" />
      </div>
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="fc-type">
          ${["expense","income","savings"].map(t=>`<option value="${t}" ${t===n?"selected":""}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Amount (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="fc-amount" step="0.01" placeholder="0.00" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Frequency</label>
        <select class="select" id="fc-freq">
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Account</label>
      <select class="select" id="fc-account">
        <option value="">— any —</option>
        ${F.accounts.filter(t=>t.is_active).map(t=>`<option value="${t.id}">${t.name}</option>`).join("")}
      </select>
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddFixedCost('__MODAL_ID__')">Add</button>`)}window.openAddFixedCost=Nv;window.submitAddFixedCost=async n=>{const t=document.getElementById("fc-name").value.trim(),e=parseFloat(document.getElementById("fc-amount").value);if(!t||!e){J("Name and amount required","warning");return}await dv({name:t,amount:e,type:document.getElementById("fc-type").value,frequency:document.getElementById("fc-freq").value,account_id:document.getElementById("fc-account").value||null}),J("Fixed cost added","success"),Ct(n),await Qr()};async function Ov(n){const e=(await Yo()).find(i=>i.id===n);e&&$t("Edit Fixed Cost",`
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Name</label>
        <input type="text" class="input" id="efc-name" value="${e.name}" />
      </div>
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="efc-type">
          ${["expense","income","savings"].map(i=>`<option value="${i}" ${i===e.type?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Amount (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="efc-amount" step="0.01" value="${e.amount}" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Frequency</label>
        <select class="select" id="efc-freq">
          ${["monthly","yearly","weekly"].map(i=>`<option value="${i}" ${i===e.frequency?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join("")}
        </select>
      </div>
    </div>
  `,`
    <button class="btn btn-danger" onclick="doDeleteFixedCost('${n}','__MODAL_ID__')">Delete</button>
    <button class="btn btn-glass"  onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditFixedCost('${n}','__MODAL_ID__')">Save</button>`)}window.openEditFixedCost=Ov;window.submitEditFixedCost=async(n,t)=>{await hv(n,{name:document.getElementById("efc-name").value,type:document.getElementById("efc-type").value,amount:parseFloat(document.getElementById("efc-amount").value),frequency:document.getElementById("efc-freq").value}),J("Saved","success"),Ct(t),await Qr()};window.doDeleteFixedCost=async(n,t)=>{await pv(n),J("Deleted","info"),Ct(t),await Qr()};function Mv(){const n=["🛍️","📱","💻","🎮","👟","🎧","📷","🚗","✈️","🏠","📚","⌚","🎸","🏋️","🍕"],t=F.accounts.filter(e=>e.type!=="credit_card"&&e.is_active).map(e=>`<option value="${e.id}">${e.name} (${B.currency(e.balance)})</option>`).join("");$t("Add to Wish List",`
    <div class="flex-row" style="flex-wrap:wrap;gap:8px;margin-bottom:4px">
      ${n.map(e=>`<div onclick="document.getElementById('wish-icon').value='${e}';document.querySelectorAll('.wib').forEach(e=>e.style.background='transparent');this.style.background='rgba(255,255,255,0.15)'" class="wib" style="width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer">${e}</div>`).join("")}
    </div>
    <input type="hidden" id="wish-icon" value="🛍️" />
    <div class="input-group">
      <label class="input-label">Name *</label>
      <input type="text" class="input" id="wish-name" placeholder="e.g. New iPhone…" />
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Price (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="wish-price" step="0.01" placeholder="0.00" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Priority</label>
        <select class="select" id="wish-priority">
          <option value="1">🔥 High</option>
          <option value="2" selected>⭐ Medium</option>
          <option value="3">💤 Low</option>
        </select>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Track progress with</label>
      <select class="select" id="wish-track">
        <option value="">📊 Total balance</option>
        ${t}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Notes</label>
      <input type="text" class="input" id="wish-notes" placeholder="Optional notes…" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddWishItem('__MODAL_ID__')">Add</button>`)}window.openAddWishItem=Mv;window.submitAddWishItem=async n=>{const t=document.getElementById("wish-name").value.trim();if(!t){J("Name required","warning");return}await fv({name:t,icon:document.getElementById("wish-icon").value,price:parseFloat(document.getElementById("wish-price").value)||null,priority:parseInt(document.getElementById("wish-priority").value),notes:document.getElementById("wish-notes").value||null,track_account_id:document.getElementById("wish-track").value||null}),J("Added to wish list","success"),Ct(n),await xn()};async function Lv(n){const e=(await Od()).find(s=>s.id===n);if(!e)return;const i=["🛍️","📱","💻","🎮","👟","🎧","📷","🚗","✈️","🏠","📚","⌚","🎸","🏋️","🍕"],r=F.accounts.filter(s=>s.type!=="credit_card"&&s.is_active).map(s=>`<option value="${s.id}" ${e.track_account_id===s.id?"selected":""}>${s.name} (${B.currency(s.balance)})</option>`).join("");$t("Edit Wish Item",`
    <div class="flex-row" style="flex-wrap:wrap;gap:8px;margin-bottom:4px">
      ${i.map(s=>`<div onclick="document.getElementById('wish-icon-e').value='${s}';document.querySelectorAll('.wibe').forEach(e=>e.style.background='transparent');this.style.background='rgba(255,255,255,0.15)'" class="wibe" style="width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;${e.icon===s?"background:rgba(255,255,255,0.15)":""}">${s}</div>`).join("")}
    </div>
    <input type="hidden" id="wish-icon-e" value="${e.icon}" />
    <div class="input-group"><label class="input-label">Name</label><input type="text" class="input" id="wish-name-e" value="${e.name}" /></div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Price (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span><input type="number" class="input" id="wish-price-e" step="0.01" value="${e.price||""}" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Priority</label>
        <select class="select" id="wish-priority-e">
          <option value="1" ${e.priority==1?"selected":""}>🔥 High</option>
          <option value="2" ${e.priority==2?"selected":""}>⭐ Medium</option>
          <option value="3" ${e.priority==3?"selected":""}>💤 Low</option>
        </select>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Track with</label>
      <select class="select" id="wish-track-e">
        <option value="" ${e.track_account_id?"":"selected"}>📊 Total balance</option>
        ${r}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Status</label>
      <select class="select" id="wish-status-e">
        <option value="wanted" ${e.status==="wanted"?"selected":""}>🛍️ Wanted</option>
        <option value="saving" ${e.status==="saving"?"selected":""}>💰 Saving for it</option>
        <option value="bought" ${e.status==="bought"?"selected":""}>✅ Bought</option>
      </select>
    </div>
    <div class="input-group"><label class="input-label">Notes</label><input type="text" class="input" id="wish-notes-e" value="${e.notes||""}" /></div>
  `,`
    <button class="btn btn-danger" onclick="doDeleteWishItem('${n}','__MODAL_ID__')">Delete</button>
    <button class="btn btn-glass"  onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditWishItem('${n}','__MODAL_ID__')">Save</button>`)}window.openEditWishItem=Lv;window.submitEditWishItem=async(n,t)=>{await Md(n,{name:document.getElementById("wish-name-e").value,icon:document.getElementById("wish-icon-e").value,price:parseFloat(document.getElementById("wish-price-e").value)||null,priority:parseInt(document.getElementById("wish-priority-e").value),status:document.getElementById("wish-status-e").value,notes:document.getElementById("wish-notes-e").value||null,track_account_id:document.getElementById("wish-track-e").value||null}),J("Saved","success"),Ct(t),await xn()};window.doDeleteWishItem=async(n,t)=>{await mv(n),t&&Ct(t),J("Deleted","info"),await xn()};window.markWishBought=async n=>{await Md(n,{status:"bought"}),J("🎉 Marked as bought!","success"),await xn()};function $v(n,t=null){$t("New Category",`
    <div class="input-group">
      <label class="input-label">Name *</label>
      <input type="text" class="input" id="newcat-name" placeholder="e.g. Groceries…" />
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="newcat-type">
          ${["expense","income","savings"].map(e=>`<option value="${e}" ${e===n?"selected":""}>${e.charAt(0).toUpperCase()+e.slice(1)}</option>`).join("")}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Icon</label>
        <input type="text" class="input" id="newcat-icon" placeholder="📦" maxlength="2" value="📦" />
      </div>
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddCategory('${t||""}','__MODAL_ID__')">Add</button>`)}window.openAddCategory=$v;window.submitAddCategory=async(n,t)=>{const e=document.getElementById("newcat-name").value.trim();if(!e){J("Name required","warning");return}await lv({name:e,type:document.getElementById("newcat-type").value,icon:document.getElementById("newcat-icon").value||"📦",parent_id:n||null}),J("Category added","success"),Ct(t),await Xo()};window.doDeleteCategory=async n=>{confirm("Delete this category?")&&(await uv(n),J("Deleted","info"),await Xo())};function Fv(n){const t=F.accounts.find(e=>e.id===n);$t(`Set Goal — ${t.name}`,`
    <div class="input-group"><label class="input-label">Goal Name</label><input type="text" class="input" id="goal-name" placeholder="e.g. Emergency Fund…" /></div>
    <div class="input-group">
      <label class="input-label">Target Amount (€) *</label>
      <div class="amount-input-wrap"><span class="amount-prefix">€</span><input type="number" class="input" id="goal-amount" step="0.01" placeholder="e.g. 10000" /></div>
    </div>
    <div class="input-group"><label class="input-label">Deadline (optional)</label><input type="date" class="input" id="goal-deadline" /></div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitGoal('${n}','__MODAL_ID__')">Set Goal</button>`)}window.openSetGoal=Fv;window.submitGoal=async(n,t)=>{const e=parseFloat(document.getElementById("goal-amount").value);if(!e){J("Target amount required","warning");return}await Dd(n,{goal_amount:e,goal_name:document.getElementById("goal-name").value||null,goal_deadline:document.getElementById("goal-deadline").value||null}),J("Goal set!","success"),Ct(t),F.accounts=await Lt(),await xn()};function Uv(){$t("⚠️ Reset All Data",`
    <div style="text-align:center;padding:8px 0 16px">
      <div style="font-size:48px;margin-bottom:12px">🗑️</div>
      <div style="font-size:15px;font-weight:600;margin-bottom:8px">This will permanently delete:</div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.8">All accounts &amp; balances<br>All transactions &amp; imports<br>All fixed costs<br>All wishlist items<br>All custom categories</div>
      <div style="margin-top:16px;padding:12px;border-radius:12px;background:rgba(255,59,48,0.10);border:1px solid rgba(255,59,48,0.25);font-size:13px;color:var(--tint-red);font-weight:500">This cannot be undone.</div>
    </div>
    <div class="input-group">
      <label class="input-label">Type <strong>RESET</strong> to confirm</label>
      <input type="text" class="input" id="reset-confirm-input" placeholder="RESET" autocomplete="off" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-danger" onclick="submitReset('__MODAL_ID__')">Wipe Everything</button>`)}window.openResetConfirm=Uv;window.submitReset=async n=>{if(document.getElementById("reset-confirm-input").value.trim()!=="RESET"){J("Type RESET to confirm","warning");return}await vv(),J("All data wiped","info"),Ct(n),F.accounts=[],Kr("dashboard")};const pl=document.getElementById("auth-screen"),fl=document.getElementById("app"),Hn=document.getElementById("google-signin-btn");Hn.addEventListener("click",async()=>{Hn.disabled=!0,Hn.innerHTML="⏳ Signing in…";try{await am(Gr,iv)}catch(n){Hn.disabled=!1,Hn.innerHTML="<span>🔐</span> Sign in with Google",console.error("Sign in error:",n),alert("Sign in failed: "+n.message)}});Uf(Gr,async n=>{if(n){pl.style.display="none",fl.classList.add("visible"),document.getElementById("content-area").innerHTML='<div style="padding:60px 0;text-align:center;color:var(--text-tertiary)">⏳ Setting up…</div>';try{await wv(),await bv()}catch(t){console.error("App init error:",t),document.getElementById("content-area").innerHTML=`
        <div style="padding:40px 20px;text-align:center">
          <div style="font-size:40px;margin-bottom:12px">⚠️</div>
          <div style="font-size:16px;font-weight:600;margin-bottom:8px">Failed to load</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">${t.message}</div>
          <div style="font-size:12px;color:var(--text-tertiary)">Check Firestore rules and your .env config</div>
          <button onclick="location.reload()" style="margin-top:20px;padding:10px 20px;border-radius:999px;background:var(--tint-blue);color:#fff;border:none;cursor:pointer;font-size:14px">Retry</button>
        </div>`}}else pl.style.display="flex",fl.classList.remove("visible")});window.signOut=()=>Bf(Gr);
