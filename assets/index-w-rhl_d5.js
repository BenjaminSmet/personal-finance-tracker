(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var ec={};/**
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
 */const yl=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},Ih=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const r=n[e++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[e++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[e++],a=n[e++],l=n[e++],u=((r&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return t.join("")},vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,l=a?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,f=s>>2,b=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;u||(A=64,a||(m=64)),i.push(e[f],e[b],e[m],e[A])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(yl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ih(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=e[n.charAt(r++)],l=r<n.length?e[n.charAt(r)]:0;++r;const h=r<n.length?e[n.charAt(r)]:64;++r;const b=r<n.length?e[n.charAt(r)]:64;if(++r,s==null||l==null||h==null||b==null)throw new Th;const m=s<<2|l>>4;if(i.push(m),h!==64){const A=l<<4&240|h>>2;if(i.push(A),b!==64){const R=h<<6&192|b;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Th extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ah=function(n){const t=yl(n);return vl.encodeByteArray(t,!0)},cr=function(n){return Ah(n).replace(/\./g,"")},wl=function(n){try{return vl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rh=()=>xh().__FIREBASE_DEFAULTS__,Sh=()=>{if(typeof process>"u"||typeof ec>"u")return;const n=ec.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ch=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&wl(n[1]);return t&&JSON.parse(t)},xr=()=>{try{return Rh()||Sh()||Ch()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bl=n=>{var t,e;return(e=(t=xr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ph=n=>{const t=bl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},El=()=>{var n;return(n=xr())===null||n===void 0?void 0:n.config},Il=n=>{var t;return(t=xr())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class kh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Dh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cr(JSON.stringify(e)),cr(JSON.stringify(a)),""].join(".")}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Nh(){var n;const t=(n=xr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $h(){const n=Ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fh(){return!Nh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uh(){try{return typeof indexedDB=="object"}catch{return!1}}function Bh(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const zh="FirebaseError";class pe extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=zh,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],a=s?jh(s,i):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new pe(r,l,i)}}function jh(n,t){return n.replace(qh,(e,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const qh=/\{\$([^}]+)}/g;function Wh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function lr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const r of e){if(!i.includes(r))return!1;const s=n[r],a=t[r];if(nc(s)&&nc(a)){if(!lr(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!e.includes(r))return!1;return!0}function nc(n){return n!==null&&typeof n=="object"}/**
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
 */function mi(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Hh(n,t){const e=new Gh(n,t);return e.subscribe.bind(e)}class Gh{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let r;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Kh(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:i},r.next===void 0&&(r.next=Es),r.error===void 0&&(r.error=Es),r.complete===void 0&&(r.complete=Es);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kh(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Es(){}/**
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
 */function ft(n){return n&&n._delegate?n._delegate:n}class ze{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Le="[DEFAULT]";/**
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
 */class Qh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new kh;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jh(t))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Le){return this.instances.has(t)}getOptions(t=Le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(r)}return r}onInit(t,e){var i;const r=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const r of i)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Yh(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Le){return this.component?this.component.multipleInstances?t:Le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yh(n){return n===Le?void 0:n}function Jh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Zh={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},tp=K.INFO,ep={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},np=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),r=ep[t];if(r)console[r](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ro{constructor(t){this.name=t,this._logLevel=tp,this._logHandler=np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const ip=(n,t)=>t.some(e=>n instanceof e);let ic,rc;function rp(){return ic||(ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sp(){return rc||(rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tl=new WeakMap,Ns=new WeakMap,Al=new WeakMap,Is=new WeakMap,so=new WeakMap;function op(n){const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(Ie(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Tl.set(e,n)}).catch(()=>{}),so.set(t,n),t}function ap(n){if(Ns.has(n))return;const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ns.set(n,t)}let Os={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ns.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Al.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function cp(n){Os=n(Os)}function lp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Ts(this),t,...e);return Al.set(i,t.sort?t.sort():[t]),Ie(i)}:sp().includes(n)?function(...t){return n.apply(Ts(this),t),Ie(Tl.get(this))}:function(...t){return Ie(n.apply(Ts(this),t))}}function up(n){return typeof n=="function"?lp(n):(n instanceof IDBTransaction&&ap(n),ip(n,rp())?new Proxy(n,Os):n)}function Ie(n){if(n instanceof IDBRequest)return op(n);if(Is.has(n))return Is.get(n);const t=up(n);return t!==n&&(Is.set(n,t),so.set(t,n)),t}const Ts=n=>so.get(n);function dp(n,t,{blocked:e,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,t),l=Ie(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Ie(a.result),u.oldVersion,u.newVersion,Ie(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hp=["get","getKey","getAll","getAllKeys","count"],pp=["put","add","delete","clear"],As=new Map;function sc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(As.get(t))return As.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,r=pp.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(r||hp.includes(e)))return;const s=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),r&&u.done]))[0]};return As.set(t,s),s}cp(n=>({...n,get:(t,e,i)=>sc(t,e)||n.get(t,e,i),has:(t,e)=>!!sc(t,e)||n.has(t,e)}));/**
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
 */class fp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(mp(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function mp(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ms="@firebase/app",oc="0.10.13";/**
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
 */const le=new ro("@firebase/app"),gp="@firebase/app-compat",_p="@firebase/analytics-compat",yp="@firebase/analytics",vp="@firebase/app-check-compat",wp="@firebase/app-check",bp="@firebase/auth",Ep="@firebase/auth-compat",Ip="@firebase/database",Tp="@firebase/data-connect",Ap="@firebase/database-compat",xp="@firebase/functions",Rp="@firebase/functions-compat",Sp="@firebase/installations",Cp="@firebase/installations-compat",Pp="@firebase/messaging",kp="@firebase/messaging-compat",Dp="@firebase/performance",Vp="@firebase/performance-compat",Np="@firebase/remote-config",Op="@firebase/remote-config-compat",Mp="@firebase/storage",Lp="@firebase/storage-compat",$p="@firebase/firestore",Fp="@firebase/vertexai-preview",Up="@firebase/firestore-compat",Bp="firebase",zp="10.14.1";/**
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
 */const Ls="[DEFAULT]",jp={[Ms]:"fire-core",[gp]:"fire-core-compat",[yp]:"fire-analytics",[_p]:"fire-analytics-compat",[wp]:"fire-app-check",[vp]:"fire-app-check-compat",[bp]:"fire-auth",[Ep]:"fire-auth-compat",[Ip]:"fire-rtdb",[Tp]:"fire-data-connect",[Ap]:"fire-rtdb-compat",[xp]:"fire-fn",[Rp]:"fire-fn-compat",[Sp]:"fire-iid",[Cp]:"fire-iid-compat",[Pp]:"fire-fcm",[kp]:"fire-fcm-compat",[Dp]:"fire-perf",[Vp]:"fire-perf-compat",[Np]:"fire-rc",[Op]:"fire-rc-compat",[Mp]:"fire-gcs",[Lp]:"fire-gcs-compat",[$p]:"fire-fst",[Up]:"fire-fst-compat",[Fp]:"fire-vertex","fire-js":"fire-js",[Bp]:"fire-js-all"};/**
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
 */const ur=new Map,qp=new Map,$s=new Map;function ac(n,t){try{n.container.addComponent(t)}catch(e){le.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function dn(n){const t=n.name;if($s.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;$s.set(t,n);for(const e of ur.values())ac(e,n);for(const e of qp.values())ac(e,n);return!0}function oo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ie(n){return n.settings!==void 0}/**
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
 */const Wp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new fi("app","Firebase",Wp);/**
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
 */class Hp{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
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
 */const bn=zp;function xl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Ls,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Te.create("bad-app-name",{appName:String(r)});if(e||(e=El()),!e)throw Te.create("no-options");const s=ur.get(r);if(s){if(lr(e,s.options)&&lr(i,s.config))return s;throw Te.create("duplicate-app",{appName:r})}const a=new Xh(r);for(const u of $s.values())a.addComponent(u);const l=new Hp(e,i,a);return ur.set(r,l),l}function Rl(n=Ls){const t=ur.get(n);if(!t&&n===Ls&&El())return xl();if(!t)throw Te.create("no-app",{appName:n});return t}function Ae(n,t,e){var i;let r=(i=jp[n])!==null&&i!==void 0?i:n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${r}" with version "${t}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),le.warn(l.join(" "));return}dn(new ze(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Gp="firebase-heartbeat-database",Kp=1,ri="firebase-heartbeat-store";let xs=null;function Sl(){return xs||(xs=dp(Gp,Kp,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ri)}catch(e){console.warn(e)}}}}).catch(n=>{throw Te.create("idb-open",{originalErrorMessage:n.message})})),xs}async function Qp(n){try{const e=(await Sl()).transaction(ri),i=await e.objectStore(ri).get(Cl(n));return await e.done,i}catch(t){if(t instanceof pe)le.warn(t.message);else{const e=Te.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});le.warn(e.message)}}}async function cc(n,t){try{const i=(await Sl()).transaction(ri,"readwrite");await i.objectStore(ri).put(t,Cl(n)),await i.done}catch(e){if(e instanceof pe)le.warn(e.message);else{const i=Te.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});le.warn(i.message)}}}function Cl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yp=1024,Jp=30*24*60*60*1e3;class Xp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new tf(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Jp}),this._storage.overwrite(this._heartbeatsCache))}catch(i){le.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lc(),{heartbeatsToSend:i,unsentEntries:r}=Zp(this._heartbeatsCache.heartbeats),s=cr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return le.warn(e),""}}}function lc(){return new Date().toISOString().substring(0,10)}function Zp(n,t=Yp){const e=[];let i=n.slice();for(const r of n){const s=e.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),uc(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),uc(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class tf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uh()?Bh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Qp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return cc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return cc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function uc(n){return cr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ef(n){dn(new ze("platform-logger",t=>new fp(t),"PRIVATE")),dn(new ze("heartbeat",t=>new Xp(t),"PRIVATE")),Ae(Ms,oc,n),Ae(Ms,oc,"esm2017"),Ae("fire-js","")}ef("");function ao(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]]);return e}function Pl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nf=Pl,kl=new fi("auth","Firebase",Pl());/**
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
 */const dr=new ro("@firebase/auth");function rf(n,...t){dr.logLevel<=K.WARN&&dr.warn(`Auth (${bn}): ${n}`,...t)}function Zi(n,...t){dr.logLevel<=K.ERROR&&dr.error(`Auth (${bn}): ${n}`,...t)}/**
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
 */function Jt(n,...t){throw lo(n,...t)}function jt(n,...t){return lo(n,...t)}function co(n,t,e){const i=Object.assign(Object.assign({},nf()),{[t]:e});return new fi("auth","Firebase",i).create(t,{appName:n.name})}function Ue(n){return co(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sf(n,t,e){const i=e;if(!(t instanceof i))throw i.name!==t.constructor.name&&Jt(n,"argument-error"),co(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lo(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return kl.create(n,...t)}function z(n,t,...e){if(!n)throw lo(t,...e)}function re(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Zi(t),new Error(t)}function ue(n,t){n||re(t)}/**
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
 */function Fs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function of(){return dc()==="http:"||dc()==="https:"}function dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function af(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(of()||Mh()||"connection"in navigator)?navigator.onLine:!0}function cf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class gi{constructor(t,e){this.shortDelay=t,this.longDelay=e,ue(e>t,"Short delay should be less than long delay!"),this.isMobile=Vh()||Lh()}get(){return af()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uo(n,t){ue(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Dl{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uf=new gi(3e4,6e4);function ho(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function En(n,t,e,i,r={}){return Vl(n,r,async()=>{let s={},a={};i&&(t==="GET"?a=i:s={body:JSON.stringify(i)});const l=mi(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:t,headers:u},s);return Oh()||(h.referrerPolicy="no-referrer"),Dl.fetch()(Nl(n,n.config.apiHost,e,l),h)})}async function Vl(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},lf),t);try{const r=new hf(n),s=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ki(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ki(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ki(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ki(n,"user-disabled",a);const f=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw co(n,f,h);Jt(n,f)}}catch(r){if(r instanceof pe)throw r;Jt(n,"network-request-failed",{message:String(r)})}}async function df(n,t,e,i,r={}){const s=await En(n,t,e,i,r);return"mfaPendingCredential"in s&&Jt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Nl(n,t,e,i){const r=`${t}${e}?${i}`;return n.config.emulator?uo(n.config,r):`${n.config.apiScheme}://${r}`}class hf{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(jt(this.auth,"network-request-failed")),uf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ki(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const r=jt(n,t,i);return r.customData._tokenResponse=e,r}/**
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
 */async function pf(n,t){return En(n,"POST","/v1/accounts:delete",t)}async function Ol(n,t){return En(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Zn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ff(n,t=!1){const e=ft(n),i=await e.getIdToken(t),r=po(i);z(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Zn(Rs(r.auth_time)),issuedAtTime:Zn(Rs(r.iat)),expirationTime:Zn(Rs(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rs(n){return Number(n)*1e3}function po(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const r=wl(e);return r?JSON.parse(r):(Zi("Failed to decode base64 JWT payload"),null)}catch(r){return Zi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function hc(n){const t=po(n);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function si(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof pe&&mf(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function mf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class gf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Us{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zn(this.lastLoginAt),this.creationTime=Zn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hr(n){var t;const e=n.auth,i=await n.getIdToken(),r=await si(n,Ol(e,{idToken:i}));z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Ml(s.providerUserInfo):[],l=yf(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,b={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Us(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,b)}async function _f(n){const t=ft(n);await hr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yf(n,t){return[...n.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function Ml(n){return n.map(t=>{var{providerId:e}=t,i=ao(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function vf(n,t){const e=await Vl(n,{},async()=>{const i=mi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,a=Nl(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dl.fetch()(a,{method:"POST",headers:l,body:i})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function wf(n,t){return En(n,"POST","/v2/accounts:revokeToken",ho(n,t))}/**
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
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){z(t.length!==0,"internal-error");const e=hc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:r,expiresIn:s}=await vf(t,e);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:r,expirationTime:s}=e,a=new an;return i&&(z(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),r&&(z(typeof r=="string","internal-error",{appName:t}),a.accessToken=r),s&&(z(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return re("not implemented")}}/**
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
 */function ye(n,t){z(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class se{constructor(t){var{uid:e,auth:i,stsTokenManager:r}=t,s=ao(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Us(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await si(this,this.stsTokenManager.getToken(this.auth,t));return z(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return ff(this,t)}reload(){return _f(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new se(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await hr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(Ue(this.auth));const t=await this.getIdToken();return await si(this,pf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,r,s,a,l,u,h,f;const b=(i=e.displayName)!==null&&i!==void 0?i:void 0,m=(r=e.email)!==null&&r!==void 0?r:void 0,A=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=e.photoURL)!==null&&a!==void 0?a:void 0,D=(l=e.tenantId)!==null&&l!==void 0?l:void 0,k=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,L=(h=e.createdAt)!==null&&h!==void 0?h:void 0,U=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:C,emailVerified:B,isAnonymous:tt,providerData:H,stsTokenManager:I}=e;z(C&&I,t,"internal-error");const g=an.fromJSON(this.name,I);z(typeof C=="string",t,"internal-error"),ye(b,t.name),ye(m,t.name),z(typeof B=="boolean",t,"internal-error"),z(typeof tt=="boolean",t,"internal-error"),ye(A,t.name),ye(R,t.name),ye(D,t.name),ye(k,t.name),ye(L,t.name),ye(U,t.name);const v=new se({uid:C,auth:t,email:m,emailVerified:B,displayName:b,isAnonymous:tt,photoURL:R,phoneNumber:A,tenantId:D,stsTokenManager:g,createdAt:L,lastLoginAt:U});return H&&Array.isArray(H)&&(v.providerData=H.map(E=>Object.assign({},E))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(t,e,i=!1){const r=new an;r.updateFromServerResponse(e);const s=new se({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await hr(s),s}static async _fromGetAccountInfoResponse(t,e,i){const r=e.users[0];z(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Ml(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),l=new an;l.updateFromIdToken(i);const u=new se({uid:r.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Us(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const pc=new Map;function oe(n){ue(n instanceof Function,"Expected a class definition");let t=pc.get(n);return t?(ue(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,pc.set(n,t),t)}/**
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
 */class Ll{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ll.type="NONE";const fc=Ll;/**
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
 */function tr(n,t,e){return`firebase:${n}:${t}:${e}`}class cn{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=tr(this.userKey,r.apiKey,s),this.fullPersistenceKey=tr("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?se._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new cn(oe(fc),t,i);const r=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=r[0]||oe(fc);const a=tr(i,t.config.apiKey,t.name);let l=null;for(const h of e)try{const f=await h._get(a);if(f){const b=se._fromJSON(t,f);h!==s&&(l=b),s=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new cn(s,t,i):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(e.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new cn(s,t,i))}}/**
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
 */function mc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($l(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jl(t))return"Blackberry";if(ql(t))return"Webos";if(Fl(t))return"Safari";if((t.includes("chrome/")||Ul(t))&&!t.includes("edge/"))return"Chrome";if(zl(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $l(n=Ct()){return/firefox\//i.test(n)}function Fl(n=Ct()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ul(n=Ct()){return/crios\//i.test(n)}function Bl(n=Ct()){return/iemobile/i.test(n)}function zl(n=Ct()){return/android/i.test(n)}function jl(n=Ct()){return/blackberry/i.test(n)}function ql(n=Ct()){return/webos/i.test(n)}function fo(n=Ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bf(n=Ct()){var t;return fo(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ef(){return $h()&&document.documentMode===10}function Wl(n=Ct()){return fo(n)||zl(n)||ql(n)||jl(n)||/windows phone/i.test(n)||Bl(n)}/**
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
 */function Hl(n,t=[]){let e;switch(n){case"Browser":e=mc(Ct());break;case"Worker":e=`${mc(Ct())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${bn}/${i}`}/**
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
 */class If{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});i.onAbort=e,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Tf(n,t={}){return En(n,"GET","/v2/passwordPolicy",ho(n,t))}/**
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
 */const Af=6;class xf{constructor(t){var e,i,r,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Af,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,r,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Rf{constructor(t,e,i,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gc(this),this.idTokenSubscription=new gc(this),this.beforeStateQueue=new If(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=oe(e)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await cn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ol(this,{idToken:t}),i=await se._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(ie(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await hr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=cf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ie(this.app))return Promise.reject(Ue(this));const e=t?ft(t):null;return e&&z(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(Ue(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ie(this.app)?Promise.reject(Ue(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Tf(this),e=new xf(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new fi("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await wf(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&oe(t)||this._popupRedirectResolver;z(e,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[oe(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,r){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,i,r);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Hl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&rf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rr(n){return ft(n)}class gc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Hh(e=>this.observer=e)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sf(n){mo=n}function Cf(n){return mo.loadJS(n)}function Pf(){return mo.gapiScript}function kf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Df(n,t){const e=oo(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),s=e.getOptions();if(lr(s,t??{}))return r;Jt(r,"already-initialized")}return e.initialize({options:t})}function Vf(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(oe);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function Nf(n,t,e){const i=Rr(n);z(i._canInitEmulator,i,"emulator-config-failed"),z(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!1,s=Gl(t),{host:a,port:l}=Of(t),u=l===null?"":`:${l}`;i.config.emulator={url:`${s}//${a}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),Mf()}function Gl(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Of(n){const t=Gl(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:_c(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:_c(a)}}}function _c(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Mf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Kl{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return re("not implemented")}_getIdTokenResponse(t){return re("not implemented")}_linkToIdToken(t,e){return re("not implemented")}_getReauthenticationResolver(t){return re("not implemented")}}/**
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
 */async function ln(n,t){return df(n,"POST","/v1/accounts:signInWithIdp",ho(n,t))}/**
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
 */const Lf="http://localhost";class je extends Kl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new je(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Jt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=e,s=ao(e,["providerId","signInMethod"]);if(!i||!r)return null;const a=new je(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return ln(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,ln(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ln(t,e)}buildRequest(){const t={requestUri:Lf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=mi(e)}return t}}/**
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
 */class go{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _i extends go{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ve extends _i{constructor(){super("facebook.com")}static credential(t){return je._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ve.credential(t.oauthAccessToken)}catch{return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";ve.PROVIDER_ID="facebook.com";/**
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
 */class ne extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return je._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return ne.credential(e,i)}catch{return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com";ne.PROVIDER_ID="google.com";/**
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
 */class we extends _i{constructor(){super("github.com")}static credential(t){return je._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return we.credential(t.oauthAccessToken)}catch{return null}}}we.GITHUB_SIGN_IN_METHOD="github.com";we.PROVIDER_ID="github.com";/**
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
 */class be extends _i{constructor(){super("twitter.com")}static credential(t,e){return je._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return be.credential(e,i)}catch{return null}}}be.TWITTER_SIGN_IN_METHOD="twitter.com";be.PROVIDER_ID="twitter.com";/**
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
 */class hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,r=!1){const s=await se._fromIdTokenResponse(t,i,r),a=yc(i);return new hn({user:s,providerId:a,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const r=yc(i);return new hn({user:t,providerId:r,_tokenResponse:i,operationType:e})}}function yc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class pr extends pe{constructor(t,e,i,r){var s;super(e.code,e.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,r){return new pr(t,e,i,r)}}function Ql(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(n,s,t,i):s})}async function $f(n,t,e=!1){const i=await si(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return hn._forOperation(n,"link",i)}/**
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
 */async function Ff(n,t,e=!1){const{auth:i}=n;if(ie(i.app))return Promise.reject(Ue(i));const r="reauthenticate";try{const s=await si(n,Ql(i,r,t,n),e);z(s.idToken,i,"internal-error");const a=po(s.idToken);z(a,i,"internal-error");const{sub:l}=a;return z(n.uid===l,i,"user-mismatch"),hn._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(i,"user-mismatch"),s}}/**
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
 */async function Uf(n,t,e=!1){if(ie(n.app))return Promise.reject(Ue(n));const i="signIn",r=await Ql(n,i,t),s=await hn._fromIdTokenResponse(n,i,r);return e||await n._updateCurrentUser(s.user),s}function Bf(n,t,e,i){return ft(n).onIdTokenChanged(t,e,i)}function zf(n,t,e){return ft(n).beforeAuthStateChanged(t,e)}function jf(n,t,e,i){return ft(n).onAuthStateChanged(t,e,i)}function qf(n){return ft(n).signOut()}const fr="__sak";/**
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
 */class Yl{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(fr,"1"),this.storage.removeItem(fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Wf=1e3,Hf=10;class Jl extends Yl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),r=this.localCache[e];i!==r&&t(e,r,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!e&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);Ef()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Hf):r()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},Wf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jl.type="LOCAL";const Gf=Jl;/**
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
 */class Xl extends Yl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Xl.type="SESSION";const Zl=Xl;/**
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
 */function Kf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Sr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const i=new Sr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:r,data:s}=e.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(a).map(async h=>h(e.origin,s)),u=await Kf(l);e.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sr.receivers=[];/**
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
 */function _o(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Qf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=_o("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(b){const m=b;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Gt(){return window}function Yf(n){Gt().location.href=n}/**
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
 */function tu(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function Jf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zf(){return tu()?self:null}/**
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
 */const eu="firebaseLocalStorageDb",tm=1,mr="firebaseLocalStorage",nu="fbase_key";class yi{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Cr(n,t){return n.transaction([mr],t?"readwrite":"readonly").objectStore(mr)}function em(){const n=indexedDB.deleteDatabase(eu);return new yi(n).toPromise()}function Bs(){const n=indexedDB.open(eu,tm);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(mr,{keyPath:nu})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(mr)?t(i):(i.close(),await em(),t(await Bs()))})})}async function vc(n,t,e){const i=Cr(n,!0).put({[nu]:t,value:e});return new yi(i).toPromise()}async function nm(n,t){const e=Cr(n,!1).get(t),i=await new yi(e).toPromise();return i===void 0?null:i.value}function wc(n,t){const e=Cr(n,!0).delete(t);return new yi(e).toPromise()}const im=800,rm=3;class iu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bs(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>rm)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sr._getInstance(Zf()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Jf(),!this.activeServiceWorker)return;this.sender=new Qf(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Xf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bs();return await vc(t,fr,"1"),await wc(t,fr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>vc(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>nm(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>wc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Cr(r,!1).getAll();return new yi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),im)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iu.type="LOCAL";const sm=iu;new gi(3e4,6e4);/**
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
 */function ru(n,t){return t?oe(t):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yo extends Kl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ln(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ln(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ln(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function om(n){return Uf(n.auth,new yo(n),n.bypassAuthState)}function am(n){const{auth:t,user:e}=n;return z(e,t,"internal-error"),Ff(e,new yo(n),n.bypassAuthState)}async function cm(n){const{auth:t,user:e}=n;return z(e,t,"internal-error"),$f(e,new yo(n),n.bypassAuthState)}/**
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
 */class su{constructor(t,e,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:r,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return om;case"linkViaPopup":case"linkViaRedirect":return cm;case"reauthViaPopup":case"reauthViaRedirect":return am;default:Jt(this.auth,"internal-error")}}resolve(t){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lm=new gi(2e3,1e4);async function um(n,t,e){if(ie(n.app))return Promise.reject(jt(n,"operation-not-supported-in-this-environment"));const i=Rr(n);sf(n,t,go);const r=ru(i,e);return new $e(i,"signInViaPopup",t,r).executeNotNull()}class $e extends su{constructor(t,e,i,r,s){super(t,e,r,s),this.provider=i,this.authWindow=null,this.pollId=null,$e.currentPopupAction&&$e.currentPopupAction.cancel(),$e.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){ue(this.filter.length===1,"Popup operations only handle one event");const t=_o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$e.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lm.get())};t()}}$e.currentPopupAction=null;/**
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
 */const dm="pendingRedirect",er=new Map;class hm extends su{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=er.get(this.auth._key());if(!t){try{const i=await pm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}er.set(this.auth._key(),t)}return this.bypassAuthState||er.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pm(n,t){const e=gm(t),i=mm(n);if(!await i._isAvailable())return!1;const r=await i._get(e)==="true";return await i._remove(e),r}function fm(n,t){er.set(n._key(),t)}function mm(n){return oe(n._redirectPersistence)}function gm(n){return tr(dm,n.config.apiKey,n.name)}async function _m(n,t,e=!1){if(ie(n.app))return Promise.reject(Ue(n));const i=Rr(n),r=ru(i,t),a=await new hm(i,r,e).execute();return a&&!e&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
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
 */const ym=10*60*1e3;class vm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wm(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!ou(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(jt(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ym&&this.cachedEventUids.clear(),this.cachedEventUids.has(bc(t))}saveEventToCache(t){this.cachedEventUids.add(bc(t)),this.lastProcessedEventTime=Date.now()}}function bc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function ou({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ou(n);default:return!1}}/**
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
 */async function bm(n,t={}){return En(n,"GET","/v1/projects",t)}/**
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
 */const Em=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Im=/^https?/;async function Tm(n){if(n.config.emulator)return;const{authorizedDomains:t}=await bm(n);for(const e of t)try{if(Am(e))return}catch{}Jt(n,"unauthorized-domain")}function Am(n){const t=Fs(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===i}if(!Im.test(e))return!1;if(Em.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const xm=new gi(3e4,6e4);function Ec(){const n=Gt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Rm(n){return new Promise((t,e)=>{var i,r,s;function a(){Ec(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ec(),e(jt(n,"network-request-failed"))},timeout:xm.get()})}if(!((r=(i=Gt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)a();else{const l=kf("iframefcb");return Gt()[l]=()=>{gapi.load?a():e(jt(n,"network-request-failed"))},Cf(`${Pf()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw nr=null,t})}let nr=null;function Sm(n){return nr=nr||Rm(n),nr}/**
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
 */const Cm=new gi(5e3,15e3),Pm="__/auth/iframe",km="emulator/auth/iframe",Dm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nm(n){const t=n.config;z(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?uo(t,km):`https://${n.config.authDomain}/${Pm}`,i={apiKey:t.apiKey,appName:n.name,v:bn},r=Vm.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${e}?${mi(i).slice(1)}`}async function Om(n){const t=await Sm(n),e=Gt().gapi;return z(e,n,"internal-error"),t.open({where:document.body,url:Nm(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dm,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=jt(n,"network-request-failed"),l=Gt().setTimeout(()=>{s(a)},Cm.get());function u(){Gt().clearTimeout(l),r(i)}i.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const Mm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lm=500,$m=600,Fm="_blank",Um="http://localhost";class Ic{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bm(n,t,e,i=Lm,r=$m){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Mm),{width:i.toString(),height:r.toString(),top:s,left:a}),h=Ct().toLowerCase();e&&(l=Ul(h)?Fm:e),$l(h)&&(t=t||Um,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[A,R])=>`${m}${A}=${R},`,"");if(bf(h)&&l!=="_self")return zm(t||"",l),new Ic(null);const b=window.open(t||"",l,f);z(b,n,"popup-blocked");try{b.focus()}catch{}return new Ic(b)}function zm(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const jm="__/auth/handler",qm="emulator/auth/handler",Wm=encodeURIComponent("fac");async function Tc(n,t,e,i,r,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:bn,eventId:r};if(t instanceof go){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Wh(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,b]of Object.entries({}))a[f]=b}if(t instanceof _i){const f=t.getScopes().filter(b=>b!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Wm}=${encodeURIComponent(u)}`:"";return`${Hm(n)}?${mi(l).slice(1)}${h}`}function Hm({config:n}){return n.emulator?uo(n,qm):`https://${n.authDomain}/${jm}`}/**
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
 */const Ss="webStorageSupport";class Gm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zl,this._completeRedirectFn=_m,this._overrideRedirectResult=fm}async _openPopup(t,e,i,r){var s;ue((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Tc(t,e,i,Fs(),r);return Bm(t,a,_o())}async _openRedirect(t,e,i,r){await this._originValidation(t);const s=await Tc(t,e,i,Fs(),r);return Yf(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:s}=this.eventManagers[e];return r?Promise.resolve(r):(ue(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await Om(t),i=new vm(t);return e.register("authEvent",r=>(z(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ss,{type:Ss},r=>{var s;const a=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ss];a!==void 0&&e(!!a),Jt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Tm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Wl()||Fl()||fo()}}const Km=Gm;var Ac="@firebase/auth",xc="1.7.9";/**
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
 */class Qm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ym(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jm(n){dn(new ze("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hl(n)},h=new Rf(i,r,s,u);return Vf(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),dn(new ze("auth-internal",t=>{const e=Rr(t.getProvider("auth").getImmediate());return(i=>new Qm(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(Ac,xc,Ym(n)),Ae(Ac,xc,"esm2017")}/**
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
 */const Xm=5*60,Zm=Il("authIdTokenMaxAge")||Xm;let Rc=null;const tg=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>Zm)return;const r=e==null?void 0:e.token;Rc!==r&&(Rc=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function eg(n=Rl()){const t=oo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Df(n,{popupRedirectResolver:Km,persistence:[sm,Gf,Zl]}),i=Il("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=tg(s.toString());zf(e,a,()=>a(e.currentUser)),Bf(e,l=>a(l))}}const r=bl("auth");return r&&Nf(e,`http://${r}`),e}function ng(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Sf({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=r=>{const s=jt("internal-error");s.customData=r,e(s)},i.type="text/javascript",i.charset="UTF-8",ng().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jm("Browser");var ig="firebase",rg="10.14.1";/**
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
 */Ae(ig,rg,"app");var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Be,au;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function v(){}v.prototype=g.prototype,I.D=g.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(E,y,w){for(var _=Array(arguments.length-2),J=2;J<arguments.length;J++)_[J-2]=arguments[J];return g.prototype[y].apply(E,_)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var y=0;16>y;++y)E[y]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(y=0;16>y;++y)E[y]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=I.g[0],v=I.g[1],y=I.g[2];var w=I.g[3],_=g+(w^v&(y^w))+E[0]+3614090360&4294967295;g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+E[1]+3905402710&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+E[2]+606105819&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+E[3]+3250441966&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(w^v&(y^w))+E[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+E[5]+1200080426&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+E[6]+2821735955&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+E[7]+4249261313&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(w^v&(y^w))+E[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+E[9]+2336552879&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+E[10]+4294925233&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+E[11]+2304563134&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(w^v&(y^w))+E[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+E[13]+4254626195&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+E[14]+2792965006&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+E[15]+1236535329&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(y^w&(v^y))+E[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+E[6]+3225465664&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+E[11]+643717713&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+E[0]+3921069994&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(y^w&(v^y))+E[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+E[10]+38016083&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+E[15]+3634488961&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+E[4]+3889429448&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(y^w&(v^y))+E[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+E[14]+3275163606&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+E[3]+4107603335&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+E[8]+1163531501&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(y^w&(v^y))+E[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+E[2]+4243563512&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+E[7]+1735328473&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+E[12]+2368359562&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(v^y^w)+E[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+E[8]+2272392833&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+E[11]+1839030562&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+E[14]+4259657740&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(v^y^w)+E[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+E[4]+1272893353&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+E[7]+4139469664&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+E[10]+3200236656&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(v^y^w)+E[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+E[0]+3936430074&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+E[3]+3572445317&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+E[6]+76029189&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(v^y^w)+E[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+E[12]+3873151461&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+E[15]+530742520&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+E[2]+3299628645&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(y^(v|~w))+E[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+E[7]+1126891415&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+E[14]+2878612391&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+E[5]+4237533241&4294967295,v=y+(_<<21&4294967295|_>>>11),_=g+(y^(v|~w))+E[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+E[3]+2399980690&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+E[10]+4293915773&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+E[1]+2240044497&4294967295,v=y+(_<<21&4294967295|_>>>11),_=g+(y^(v|~w))+E[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+E[15]+4264355552&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+E[6]+2734768916&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+E[13]+1309151649&4294967295,v=y+(_<<21&4294967295|_>>>11),_=g+(y^(v|~w))+E[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+E[11]+3174756917&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+E[2]+718787259&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(y+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+y&4294967295,I.g[3]=I.g[3]+w&4294967295}i.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var v=g-this.blockSize,E=this.B,y=this.h,w=0;w<g;){if(y==0)for(;w<=v;)r(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<g;)if(E[y++]=I.charCodeAt(w++),y==this.blockSize){r(this,E),y=0;break}}else for(;w<g;)if(E[y++]=I[w++],y==this.blockSize){r(this,E),y=0;break}}this.h=y,this.o+=g},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var v=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=v&255,v/=256;for(this.u(I),I=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)I[v++]=this.g[g]>>>E&255;return I};function s(I,g){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=g(I)}function a(I,g){this.h=g;for(var v=[],E=!0,y=I.length-1;0<=y;y--){var w=I[y]|0;E&&w==g||(v[y]=w,E=!1)}this.g=v}var l={};function u(I){return-128<=I&&128>I?s(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return b;if(0>I)return k(h(-I));for(var g=[],v=1,E=0;I>=v;E++)g[E]=I/v|0,v*=4294967296;return new a(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return k(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),E=b,y=0;y<I.length;y+=8){var w=Math.min(8,I.length-y),_=parseInt(I.substring(y,y+w),g);8>w?(w=h(Math.pow(g,w)),E=E.j(w).add(h(_))):(E=E.j(v),E=E.add(h(_)))}return E}var b=u(0),m=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();for(var I=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(D(this))return"-"+k(this).toString(I);for(var g=h(Math.pow(I,6)),v=this,E="";;){var y=B(v,g).g;v=L(v,y.j(g));var w=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=y,R(v))return w+E;for(;6>w.length;)w="0"+w;E=w+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=L(this,I),D(I)?-1:R(I)?0:1};function k(I){for(var g=I.g.length,v=[],E=0;E<g;E++)v[E]=~I.g[E];return new a(v,~I.h).add(m)}n.abs=function(){return D(this)?k(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0,y=0;y<=g;y++){var w=E+(this.i(y)&65535)+(I.i(y)&65535),_=(w>>>16)+(this.i(y)>>>16)+(I.i(y)>>>16);E=_>>>16,w&=65535,_&=65535,v[y]=_<<16|w}return new a(v,v[v.length-1]&-2147483648?-1:0)};function L(I,g){return I.add(k(g))}n.j=function(I){if(R(this)||R(I))return b;if(D(this))return D(I)?k(this).j(k(I)):k(k(this).j(I));if(D(I))return k(this.j(k(I)));if(0>this.l(A)&&0>I.l(A))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var y=0;y<I.g.length;y++){var w=this.i(E)>>>16,_=this.i(E)&65535,J=I.i(y)>>>16,$t=I.i(y)&65535;v[2*E+2*y]+=_*$t,U(v,2*E+2*y),v[2*E+2*y+1]+=w*$t,U(v,2*E+2*y+1),v[2*E+2*y+1]+=_*J,U(v,2*E+2*y+1),v[2*E+2*y+2]+=w*J,U(v,2*E+2*y+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function U(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function C(I,g){this.g=I,this.h=g}function B(I,g){if(R(g))throw Error("division by zero");if(R(I))return new C(b,b);if(D(I))return g=B(k(I),g),new C(k(g.g),k(g.h));if(D(g))return g=B(I,k(g)),new C(k(g.g),g.h);if(30<I.g.length){if(D(I)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=g;0>=E.l(I);)v=tt(v),E=tt(E);var y=H(v,1),w=H(E,1);for(E=H(E,2),v=H(v,2);!R(E);){var _=w.add(E);0>=_.l(I)&&(y=y.add(v),w=_),E=H(E,1),v=H(v,1)}return g=L(I,y.j(g)),new C(y,g)}for(y=b;0<=I.l(g);){for(v=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),w=h(v),_=w.j(g);D(_)||0<_.l(I);)v-=E,w=h(v),_=w.j(g);R(w)&&(w=m),y=y.add(w),I=L(I,_)}return new C(y,I)}n.A=function(I){return B(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&I.i(E);return new a(v,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|I.i(E);return new a(v,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^I.i(E);return new a(v,this.h^I.h)};function tt(I){for(var g=I.g.length+1,v=[],E=0;E<g;E++)v[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(v,I.h)}function H(I,g){var v=g>>5;g%=32;for(var E=I.g.length-v,y=[],w=0;w<E;w++)y[w]=0<g?I.i(w+v)>>>g|I.i(w+v+1)<<32-g:I.i(w+v);return new a(y,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,au=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Be=a}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cu,Qn,lu,ir,zs,uu,du,hu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qi=="object"&&Qi];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=e(this);function r(o,c){if(c)t:{var d=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in d))break t;d=d[T]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&t(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,T={next:function(){if(!p&&d<o.length){var x=d++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}r("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function b(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),o.apply(c,T)}}return function(){return o.apply(c,arguments)}}function m(o,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:b,m.apply(null,arguments)}function A(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,T,x){for(var V=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)V[nt-2]=arguments[nt];return c.prototype[T].apply(p,V)}}function D(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function k(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const T=o.length||0,x=p.length||0;o.length=T+x;for(let V=0;V<x;V++)o[T+V]=p[V]}else o.push(p)}}class L{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){return/^[\s\xa0]*$/.test(o)}function C(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var tt=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function H(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function I(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)o[d]=p[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function y(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function w(o){l.setTimeout(()=>{throw o},0)}function _(){var o=Xr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class J{constructor(){this.h=this.g=null}add(c,d){const p=$t.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var $t=new L(()=>new Zt,o=>o.reset());class Zt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Pn,kn=!1,Xr=new J,ea=()=>{const o=l.Promise.resolve(void 0);Pn=()=>{o.then(jd)}};var jd=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(d){w(d)}var c=$t;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}kn=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function bt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var qd=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Dn(o,c){if(bt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(tt){t:{try{B(c.nodeName);var T=!0;break t}catch{}T=!1}T||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Wd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Dn.aa.h.call(this)}}R(Dn,bt);var Wd={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ci="closure_listenable_"+(1e6*Math.random()|0),Hd=0;function Gd(o,c,d,p,T){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=T,this.key=++Hd,this.da=this.fa=!1}function Pi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ki(o){this.src=o,this.g={},this.h=0}ki.prototype.add=function(o,c,d,p,T){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var V=ts(o,c,p,T);return-1<V?(c=o[V],d||(c.fa=!1)):(c=new Gd(c,this.src,x,!!p,T),c.fa=d,o.push(c)),c};function Zr(o,c){var d=c.type;if(d in o.g){var p=o.g[d],T=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=T)&&Array.prototype.splice.call(p,T,1),x&&(Pi(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ts(o,c,d,p){for(var T=0;T<o.length;++T){var x=o[T];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return T}return-1}var es="closure_lm_"+(1e6*Math.random()|0),ns={};function na(o,c,d,p,T){if(Array.isArray(c)){for(var x=0;x<c.length;x++)na(o,c[x],d,p,T);return null}return d=sa(d),o&&o[Ci]?o.K(c,d,h(p)?!!p.capture:!1,T):Kd(o,c,d,!1,p,T)}function Kd(o,c,d,p,T,x){if(!c)throw Error("Invalid event type");var V=h(T)?!!T.capture:!!T,nt=rs(o);if(nt||(o[es]=nt=new ki(o)),d=nt.add(c,d,p,V,x),d.proxy)return d;if(p=Qd(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)qd||(T=V),T===void 0&&(T=!1),o.addEventListener(c.toString(),p,T);else if(o.attachEvent)o.attachEvent(ra(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Qd(){function o(d){return c.call(o.src,o.listener,d)}const c=Yd;return o}function ia(o,c,d,p,T){if(Array.isArray(c))for(var x=0;x<c.length;x++)ia(o,c[x],d,p,T);else p=h(p)?!!p.capture:!!p,d=sa(d),o&&o[Ci]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],d=ts(x,d,p,T),-1<d&&(Pi(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=rs(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ts(c,d,p,T)),(d=-1<o?c[o]:null)&&is(d))}function is(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ci])Zr(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(ra(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=rs(c))?(Zr(d,o),d.h==0&&(d.src=null,c[es]=null)):Pi(o)}}}function ra(o){return o in ns?ns[o]:ns[o]="on"+o}function Yd(o,c){if(o.da)o=!0;else{c=new Dn(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&is(o),o=d.call(p,c)}return o}function rs(o){return o=o[es],o instanceof ki?o:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function sa(o){return typeof o=="function"?o:(o[ss]||(o[ss]=function(c){return o.handleEvent(c)}),o[ss])}function Et(){fe.call(this),this.i=new ki(this),this.M=this,this.F=null}R(Et,fe),Et.prototype[Ci]=!0,Et.prototype.removeEventListener=function(o,c,d,p){ia(this,o,c,d,p)};function kt(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new bt(c,o);else if(c instanceof bt)c.target=c.target||o;else{var T=c;c=new bt(p,o),E(c,T)}if(T=!0,d)for(var x=d.length-1;0<=x;x--){var V=c.g=d[x];T=Di(V,p,!0,c)&&T}if(V=c.g=o,T=Di(V,p,!0,c)&&T,T=Di(V,p,!1,c)&&T,d)for(x=0;x<d.length;x++)V=c.g=d[x],T=Di(V,p,!1,c)&&T}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Pi(d[p]);delete o.g[c],o.h--}}this.F=null},Et.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},Et.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Di(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,x=0;x<c.length;++x){var V=c[x];if(V&&!V.da&&V.capture==d){var nt=V.listener,gt=V.ha||V.src;V.fa&&Zr(o.i,V),T=nt.call(gt,p)!==!1&&T}}return T&&!p.defaultPrevented}function oa(o,c,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function aa(o){o.g=oa(()=>{o.g=null,o.i&&(o.i=!1,aa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Jd extends fe{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:aa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(o){fe.call(this),this.h=o,this.g={}}R(Vn,fe);var ca=[];function la(o){H(o.g,function(c,d){this.g.hasOwnProperty(d)&&is(c)},o),o.g={}}Vn.prototype.N=function(){Vn.aa.N.call(this),la(this)},Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var os=l.JSON.stringify,Xd=l.JSON.parse,Zd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function as(){}as.prototype.h=null;function ua(o){return o.h||(o.h=o.i())}function da(){}var Nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cs(){bt.call(this,"d")}R(cs,bt);function ls(){bt.call(this,"c")}R(ls,bt);var De={},ha=null;function Vi(){return ha=ha||new Et}De.La="serverreachability";function pa(o){bt.call(this,De.La,o)}R(pa,bt);function On(o){const c=Vi();kt(c,new pa(c))}De.STAT_EVENT="statevent";function fa(o,c){bt.call(this,De.STAT_EVENT,o),this.stat=c}R(fa,bt);function Dt(o){const c=Vi();kt(c,new fa(c,o))}De.Ma="timingevent";function ma(o,c){bt.call(this,De.Ma,o),this.size=c}R(ma,bt);function Mn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function th(o,c,d,p,T,x){o.info(function(){if(o.g)if(x)for(var V="",nt=x.split("&"),gt=0;gt<nt.length;gt++){var X=nt[gt].split("=");if(1<X.length){var It=X[0];X=X[1];var Tt=It.split("_");V=2<=Tt.length&&Tt[1]=="type"?V+(It+"="+X+"&"):V+(It+"=redacted&")}}else V=null;else V=x;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+c+`
`+d+`
`+V})}function eh(o,c,d,p,T,x,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+c+`
`+d+`
`+x+" "+V})}function Ze(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+ih(o,d)+(p?" "+p:"")})}function nh(o,c){o.info(function(){return"TIMEOUT: "+c})}Ln.prototype.info=function(){};function ih(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var x=T[0];if(x!="noop"&&x!="stop"&&x!="close")for(var V=1;V<T.length;V++)T[V]=""}}}}return os(d)}catch{return c}}var Ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ga={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},us;function Oi(){}R(Oi,as),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},us=new Oi;function me(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _a}function _a(){this.i=null,this.g="",this.h=!1}var ya={},ds={};function hs(o,c,d){o.L=1,o.v=Fi(te(c)),o.m=d,o.P=!0,va(o,null)}function va(o,c){o.F=Date.now(),Mi(o),o.A=te(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Va(d.i,"t",p),o.C=0,d=o.j.J,o.h=new _a,o.g=Ja(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Jd(m(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(ca[0]=T.toString()),T=ca);for(var x=0;x<T.length;x++){var V=na(d,T[x],p||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),On(),th(o.i,o.u,o.A,o.l,o.R,o.m)}me.prototype.ca=function(o){o=o.target;const c=this.M;c&&ee(o)==3?c.j():this.Y(o)},me.prototype.Y=function(o){try{if(o==this.g)t:{const Tt=ee(this.g);var c=this.g.Ba();const nn=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Ua(this.g)))){this.J||Tt!=4||c==7||(c==8||0>=nn?On(3):On(2)),ps(this);var d=this.g.Z();this.X=d;e:if(wa(this)){var p=Ua(this.g);o="";var T=p.length,x=ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ve(this),$n(this);var V="";break e}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==T-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,eh(this.i,this.u,this.A,this.l,this.R,Tt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var nt,gt=this.g;if((nt=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(nt)){var X=nt;break e}}X=null}if(d=X)Ze(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fs(this,d);else{this.o=!1,this.s=3,Dt(12),Ve(this),$n(this);break t}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<V.length;)if(Bt=rh(this,V),Bt==ds){Tt==4&&(this.s=4,Dt(14),d=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==ya){this.s=4,Dt(15),Ze(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else Ze(this.i,this.l,Bt,null),fs(this,Bt);if(wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||V.length!=0||this.h.h||(this.s=1,Dt(16),d=!1),this.o=this.o&&d,!d)Ze(this.i,this.l,V,"[Invalid Chunked Response]"),Ve(this),$n(this);else if(0<V.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),ws(It),It.M=!0,Dt(11))}}else Ze(this.i,this.l,V,null),fs(this,V);Tt==4&&Ve(this),this.o&&!this.J&&(Tt==4?Ga(this.j,this):(this.o=!1,Mi(this)))}else bh(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Ve(this),$n(this)}}}catch{}finally{}};function wa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function rh(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?ds:(d=Number(c.substring(d,p)),isNaN(d)?ya:(p+=1,p+d>c.length?ds:(c=c.slice(p,p+d),o.C=p+d,c)))}me.prototype.cancel=function(){this.J=!0,Ve(this)};function Mi(o){o.S=Date.now()+o.I,ba(o,o.I)}function ba(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Mn(m(o.ba,o),c)}function ps(o){o.B&&(l.clearTimeout(o.B),o.B=null)}me.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(nh(this.i,this.A),this.L!=2&&(On(),Dt(17)),Ve(this),this.s=2,$n(this)):ba(this,this.S-o)};function $n(o){o.j.G==0||o.J||Ga(o.j,o)}function Ve(o){ps(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,la(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function fs(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||ms(d.h,o))){if(!o.K&&ms(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Wi(d),ji(d);else break t;vs(d),Dt(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=Mn(m(d.Za,d),6e3));if(1>=Ta(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Oe(d,11)}else if((o.K||d.g==o)&&Wi(d),!U(c))for(T=d.Da.g.parse(c),c=0;c<T.length;c++){let X=T[c];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const It=X[3];It!=null&&(d.la=It,d.j.info("VER="+d.la));const Tt=X[4];Tt!=null&&(d.Aa=Tt,d.j.info("SVER="+d.Aa));const nn=X[5];nn!=null&&typeof nn=="number"&&0<nn&&(p=1.5*nn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Bt=o.g;if(Bt){const Gi=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var x=p.h;x.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(gs(x,x.h),x.h=null))}if(p.D){const bs=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;bs&&(p.ya=bs,it(p.I,p.D,bs))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var V=o;if(p.qa=Ya(p,p.J?p.ia:null,p.W),V.K){Aa(p.h,V);var nt=V,gt=p.L;gt&&(nt.I=gt),nt.B&&(ps(nt),Mi(nt)),p.g=V}else Wa(p);0<d.i.length&&qi(d)}else X[0]!="stop"&&X[0]!="close"||Oe(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Oe(d,7):ys(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}On(4)}catch{}}var sh=class{constructor(o,c){this.g=o,this.map=c}};function Ea(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ia(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ta(o){return o.h?1:o.g?o.g.size:0}function ms(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function gs(o,c){o.g?o.g.add(c):o.h=c}function Aa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ea.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return D(o.i)}function oh(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function ah(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Ra(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=ah(o),p=oh(o),T=p.length,x=0;x<T;x++)c.call(void 0,p[x],d&&d[x],o)}var Sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ch(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),T=null;if(0<=p){var x=o[d].substring(0,p);T=o[d].substring(p+1)}else x=o[d];c(x,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Ne(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ne){this.h=o.h,Li(this,o.j),this.o=o.o,this.g=o.g,$i(this,o.s),this.l=o.l;var c=o.i,d=new Bn;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Ca(this,d),this.m=o.m}else o&&(c=String(o).match(Sa))?(this.h=!1,Li(this,c[1]||"",!0),this.o=Fn(c[2]||""),this.g=Fn(c[3]||"",!0),$i(this,c[4]),this.l=Fn(c[5]||"",!0),Ca(this,c[6]||"",!0),this.m=Fn(c[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}Ne.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Un(c,Pa,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Un(c,Pa,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Un(d,d.charAt(0)=="/"?dh:uh,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Un(d,ph)),o.join("")};function te(o){return new Ne(o)}function Li(o,c,d){o.j=d?Fn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function $i(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ca(o,c,d){c instanceof Bn?(o.i=c,fh(o.i,o.h)):(d||(c=Un(c,hh)),o.i=new Bn(c,o.h))}function it(o,c,d){o.i.set(c,d)}function Fi(o){return it(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Fn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Un(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,lh),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Pa=/[#\/\?@]/g,uh=/[#\?:]/g,dh=/[#\?]/g,hh=/[#\?@]/g,ph=/#/g;function Bn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ge(o){o.g||(o.g=new Map,o.h=0,o.i&&ch(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Bn.prototype,n.add=function(o,c){ge(this),this.i=null,o=tn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function ka(o,c){ge(o),c=tn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Da(o,c){return ge(o),c=tn(o,c),o.g.has(c)}n.forEach=function(o,c){ge(this),this.g.forEach(function(d,p){d.forEach(function(T){o.call(c,T,p,this)},this)},this)},n.na=function(){ge(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const T=o[p];for(let x=0;x<T.length;x++)d.push(c[p])}return d},n.V=function(o){ge(this);let c=[];if(typeof o=="string")Da(this,o)&&(c=c.concat(this.g.get(tn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return ge(this),this.i=null,o=tn(this,o),Da(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Va(o,c,d){ka(o,c),0<d.length&&(o.i=null,o.g.set(tn(o,c),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var T=x;V[p]!==""&&(T+="="+encodeURIComponent(String(V[p]))),o.push(T)}}return this.i=o.join("&")};function tn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function fh(o,c){c&&!o.j&&(ge(o),o.i=null,o.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(ka(this,p),Va(this,T,d))},o)),o.j=c}function mh(o,c){const d=new Ln;if(l.Image){const p=new Image;p.onload=A(_e,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(_e,d,"TestLoadImage: error",!1,c,p),p.onabort=A(_e,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(_e,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function gh(o,c){const d=new Ln,p=new AbortController,T=setTimeout(()=>{p.abort(),_e(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(T),x.ok?_e(d,"TestPingServer: ok",!0,c):_e(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),_e(d,"TestPingServer: error",!1,c)})}function _e(o,c,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function _h(){this.g=new Zd}function yh(o,c,d){const p=d||"";try{Ra(o,function(T,x){let V=T;h(T)&&(V=os(T)),c.push(p+x+"="+encodeURIComponent(V))})}catch(T){throw c.push(p+"type="+encodeURIComponent("_badmap")),T}}function Ui(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Ui,as),Ui.prototype.g=function(){return new Bi(this.l,this.j)},Ui.prototype.i=function(o){return function(){return o}}({});function Bi(o,c){Et.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Bi,Et),n=Bi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,jn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Na(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Na(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?zn(this):jn(this),this.readyState==3&&Na(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,zn(this))},n.Qa=function(o){this.g&&(this.response=o,zn(this))},n.ga=function(){this.g&&zn(this)};function zn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,jn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function jn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Oa(o){let c="";return H(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function _s(o,c,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=Oa(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):it(o,c,d))}function at(o){Et.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(at,Et);var vh=/^https?$/i,wh=["POST","PUT"];n=at.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():us.g(),this.v=this.o?ua(this.o):ua(us),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){Ma(this,x);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),T=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(wh,c,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,V]of d)this.g.setRequestHeader(x,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fa(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Ma(this,x)}};function Ma(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,La(o),zi(o)}function La(o){o.A||(o.A=!0,kt(o,"complete"),kt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,kt(this,"complete"),kt(this,"abort"),zi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$a(this):this.bb())},n.bb=function(){$a(this)};function $a(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ee(o)!=4||o.Z()!=2)){if(o.u&&ee(o)==4)oa(o.Ea,0,o);else if(kt(o,"readystatechange"),ee(o)==4){o.h=!1;try{const V=o.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var p;if(p=V===0){var T=String(o.D).match(Sa)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),p=!vh.test(T?T.toLowerCase():"")}d=p}if(d)kt(o,"complete"),kt(o,"success");else{o.m=6;try{var x=2<ee(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",La(o)}}finally{zi(o)}}}}function zi(o,c){if(o.g){Fa(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||kt(o,"ready");try{d.onreadystatechange=p}catch{}}}function Fa(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ee(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ee(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Xd(c)}};function Ua(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bh(o){const c={};o=(o.g&&2<=ee(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(U(o[p]))continue;var d=y(o[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[T]||[];c[T]=x,x.push(d)}I(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Ba(o){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,o),this.cb=qn("retryDelaySeedMs",1e4,o),this.Wa=qn("forwardChannelMaxRetries",2,o),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ea(o&&o.concurrentRequestLimit),this.Da=new _h,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ba.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Dt(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ya(this,null,this.W),qi(this)};function ys(o){if(za(o),o.G==3){var c=o.U++,d=te(o.I);if(it(d,"SID",o.K),it(d,"RID",c),it(d,"TYPE","terminate"),Wn(o,d),c=new me(o,o.j,c),c.L=2,c.v=Fi(te(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ja(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Mi(c)}Qa(o)}function ji(o){o.g&&(ws(o),o.g.cancel(),o.g=null)}function za(o){ji(o),o.u&&(l.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function qi(o){if(!Ia(o.h)&&!o.s){o.s=!0;var c=o.Ga;Pn||ea(),kn||(Pn(),kn=!0),Xr.add(c,o),o.B=0}}function Eh(o,c){return Ta(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Mn(m(o.Ga,o,c),Ka(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new me(this,this.j,o);let x=this.o;if(this.S&&(x?(x=g(x),E(x,this.S)):x=this.S),this.m!==null||this.O||(T.H=x,x=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=qa(this,T,c),d=te(this.I),it(d,"RID",o),it(d,"CVER",22),this.D&&it(d,"X-HTTP-Session-Id",this.D),Wn(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(Oa(x)))+"&"+c:this.m&&_s(d,this.m,x)),gs(this.h,T),this.Ua&&it(d,"TYPE","init"),this.P?(it(d,"$req",c),it(d,"SID","null"),T.T=!0,hs(T,d,null)):hs(T,d,c),this.G=2}}else this.G==3&&(o?ja(this,o):this.i.length==0||Ia(this.h)||ja(this))};function ja(o,c){var d;c?d=c.l:d=o.U++;const p=te(o.I);it(p,"SID",o.K),it(p,"RID",d),it(p,"AID",o.T),Wn(o,p),o.m&&o.o&&_s(p,o.m,o.o),d=new me(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=qa(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),gs(o.h,d),hs(d,p,c)}function Wn(o,c){o.H&&H(o.H,function(d,p){it(c,p,d)}),o.l&&Ra({},function(d,p){it(c,p,d)})}function qa(o,c,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;t:{var T=o.i;let x=-1;for(;;){const V=["count="+d];x==-1?0<d?(x=T[0].g,V.push("ofs="+x)):x=0:V.push("ofs="+x);let nt=!0;for(let gt=0;gt<d;gt++){let X=T[gt].g;const It=T[gt].map;if(X-=x,0>X)x=Math.max(0,T[gt].g-100),nt=!1;else try{yh(It,V,"req"+X+"_")}catch{p&&p(It)}}if(nt){p=V.join("&");break t}}}return o=o.i.splice(0,d),c.D=o,p}function Wa(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Pn||ea(),kn||(Pn(),kn=!0),Xr.add(c,o),o.v=0}}function vs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Mn(m(o.Fa,o),Ka(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Mn(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),ji(this),Ha(this))};function ws(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ha(o){o.g=new me(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=te(o.qa);it(c,"RID","rpc"),it(c,"SID",o.K),it(c,"AID",o.T),it(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&it(c,"TO",o.ja),it(c,"TYPE","xmlhttp"),Wn(o,c),o.m&&o.o&&_s(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Fi(te(c)),d.m=null,d.P=!0,va(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ji(this),vs(this),Dt(19))};function Wi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ga(o,c){var d=null;if(o.g==c){Wi(o),ws(o),o.g=null;var p=2}else if(ms(o.h,c))d=c.D,Aa(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var T=o.B;p=Vi(),kt(p,new ma(p,d)),qi(o)}else Wa(o);else if(T=c.s,T==3||T==0&&0<c.X||!(p==1&&Eh(o,c)||p==2&&vs(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),T){case 1:Oe(o,5);break;case 4:Oe(o,10);break;case 3:Oe(o,6);break;default:Oe(o,2)}}}function Ka(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Oe(o,c){if(o.j.info("Error code "+c),c==2){var d=m(o.fb,o),p=o.Xa;const T=!p;p=new Ne(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Li(p,"https"),Fi(p),T?mh(p.toString(),d):gh(p.toString(),d)}else Dt(2);o.G=0,o.l&&o.l.sa(c),Qa(o),za(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Qa(o){if(o.G=0,o.ka=[],o.l){const c=xa(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ka,c),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Ya(o,c,d){var p=d instanceof Ne?te(d):new Ne(d);if(p.g!="")c&&(p.g=c+"."+p.g),$i(p,p.s);else{var T=l.location;p=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var x=new Ne(null);p&&Li(x,p),c&&(x.g=c),T&&$i(x,T),d&&(x.l=d),p=x}return d=o.D,c=o.ya,d&&c&&it(p,d,c),it(p,"VER",o.la),Wn(o,p),p}function Ja(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new at(new Ui({eb:d})):new at(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xa(){}n=Xa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hi(){}Hi.prototype.g=function(o,c){return new Mt(o,c)};function Mt(o,c){Et.call(this),this.g=new Ba(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!U(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new en(this)}R(Mt,Et),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){ys(this.g)},Mt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=os(o),o=d);c.i.push(new sh(c.Ya++,o)),c.G==3&&qi(c)},Mt.prototype.N=function(){this.g.l=null,delete this.j,ys(this.g),delete this.g,Mt.aa.N.call(this)};function Za(o){cs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const d in c){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}R(Za,cs);function tc(){ls.call(this),this.status=1}R(tc,ls);function en(o){this.g=o}R(en,Xa),en.prototype.ua=function(){kt(this.g,"a")},en.prototype.ta=function(o){kt(this.g,new Za(o))},en.prototype.sa=function(o){kt(this.g,new tc)},en.prototype.ra=function(){kt(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,hu=function(){return new Hi},du=function(){return Vi()},uu=De,zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,ir=Ni,ga.COMPLETE="complete",lu=ga,da.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Qn=da,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,cu=at}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});const Cc="@firebase/firestore";/**
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
 */class xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */let In="10.14.0";/**
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
 */const qe=new ro("@firebase/firestore");function Hn(){return qe.logLevel}function O(n,...t){if(qe.logLevel<=K.DEBUG){const e=t.map(vo);qe.debug(`Firestore (${In}): ${n}`,...e)}}function de(n,...t){if(qe.logLevel<=K.ERROR){const e=t.map(vo);qe.error(`Firestore (${In}): ${n}`,...e)}}function pn(n,...t){if(qe.logLevel<=K.WARN){const e=t.map(vo);qe.warn(`Firestore (${In}): ${n}`,...e)}}function vo(n){if(typeof n=="string")return n;try{/**
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
 */function j(n="Unexpected state"){const t=`FIRESTORE (${In}) INTERNAL ASSERTION FAILED: `+n;throw de(t),new Error(t)}function et(n,t){n||j()}function W(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends pe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ae{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class pu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(xt.UNAUTHENTICATED))}shutdown(){}}class og{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ag{constructor(t){this.t=t,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){et(this.o===void 0);let i=this.i;const r=u=>this.i!==i?(i=this.i,e(u)):Promise.resolve();let s=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ae,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ae)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(et(typeof i.accessToken=="string"),new pu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new xt(t)}}class cg{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lg{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new cg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ug{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){et(this.o===void 0);const i=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new ug(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class fu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=hg(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<e&&(i+=t.charAt(r[s]%t.length))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function fn(n,t,e){return n.length===t.length&&n.every((i,r)=>e(i,t[r]))}/**
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
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new dt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new dt(0,0))}static max(){return new q(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oi{constructor(t,e,i){e===void 0?e=0:e>t.length&&j(),i===void 0?i=t.length-e:i>t.length-e&&j(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let r=0;r<i;r++){const s=t.get(r),a=e.get(r);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class rt extends oi{construct(t,e,i){return new rt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(r=>r.length>0))}return new rt(e)}static emptyPath(){return new rt([])}}const pg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends oi{construct(t,e,i){return new yt(t,e,i)}static isValidIdentifier(t){return pg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let i="",r=0;const s=()=>{if(i.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(i+=l,r++):(s(),r++)}if(s(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(rt.fromString(t))}static fromName(t){return new F(rt.fromString(t).popFirst(5))}static empty(){return new F(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return rt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new rt(t.slice()))}}function fg(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=q.fromTimestamp(i===1e9?new dt(e+1,0):new dt(e,i));return new Re(r,F.empty(),t)}function mg(n){return new Re(n.readTime,n.key,-1)}class Re{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Re(q.min(),F.empty(),-1)}static max(){return new Re(q.max(),F.empty(),-1)}}function gg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
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
 */const _g="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function vi(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==_g)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,i)=>{e(t)})}static reject(t){return new P((e,i)=>{i(t)})}static waitFor(t){return new P((e,i)=>{let r=0,s=0,a=!1;t.forEach(l=>{++r,l.next(()=>{++s,a&&s===r&&e()},u=>i(u))}),a=!0,s===r&&e()})}static or(t){let e=P.resolve(!1);for(const i of t)e=e.next(r=>r?P.resolve(r):i());return e}static forEach(t,e){const i=[];return t.forEach((r,s)=>{i.push(e.call(this,r,s))}),this.waitFor(i)}static mapArray(t,e){return new P((i,r)=>{const s=t.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(f=>{a[h]=f,++l,l===s&&i(a)},f=>r(f))}})}static doWhile(t,e){return new P((i,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):i()};s()})}}function vg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function wi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}wo.oe=-1;function Pr(n){return n==null}function gr(n){return n===0&&1/n==-1/0}function wg(n){return typeof n=="number"&&Number.isInteger(n)&&!gr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ge(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function mu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class ot{constructor(t,e){this.comparator=t,this.root=e||_t.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return e+i.left.size;r<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yi(this.root,t,this.comparator,!0)}}class Yi{constructor(t,e,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,e,i,r,s){this.key=t,this.value=e,this.color=i??_t.RED,this.left=r??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,r,s){return new _t(t??this.key,e??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,i),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return _t.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,i,r,s){return this}insert(t,e,i){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new kc(this.data.getIterator())}getIteratorFrom(t){return new kc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new vt(this.comparator);return e.data=t,e}}class kc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new vt(yt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class gu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gu("Invalid base64 string: "+s):s}}(t);return new wt(e)}static fromUint8Array(t){const e=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const bg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Se(n){if(et(!!n),typeof n=="string"){let t=0;const e=bg.exec(n);if(et(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function We(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
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
 */function bo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Eo(n){const t=n.mapValue.fields.__previous_value__;return bo(t)?Eo(t):t}function ai(n){const t=Se(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
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
 */class Eg{constructor(t,e,i,r,s,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ci{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ci&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ji={mapValue:{}};function He(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bo(n)?4:Tg(n)?9007199254740991:Ig(n)?10:11:j()}function Xt(n,t){if(n===t)return!0;const e=He(n);if(e!==He(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ai(n).isEqual(ai(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=Se(r.timestampValue),l=Se(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return We(r.bytesValue).isEqual(We(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return ct(r.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(r.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ct(r.integerValue)===ct(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=ct(r.doubleValue),l=ct(s.doubleValue);return a===l?gr(a)===gr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return fn(n.arrayValue.values||[],t.arrayValue.values||[],Xt);case 10:case 11:return function(r,s){const a=r.mapValue.fields||{},l=s.mapValue.fields||{};if(Pc(a)!==Pc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Xt(a[u],l[u])))return!1;return!0}(n,t);default:return j()}}function li(n,t){return(n.values||[]).find(e=>Xt(e,t))!==void 0}function mn(n,t){if(n===t)return 0;const e=He(n),i=He(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=ct(s.integerValue||s.doubleValue),u=ct(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return Dc(n.timestampValue,t.timestampValue);case 4:return Dc(ai(n),ai(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(s,a){const l=We(s),u=We(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Z(l[h],u[h]);if(f!==0)return f}return Z(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=Z(ct(s.latitude),ct(a.latitude));return l!==0?l:Z(ct(s.longitude),ct(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Vc(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,u,h,f;const b=s.fields||{},m=a.fields||{},A=(l=b.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,D=Z(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Vc(A,R)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===Ji.mapValue&&a===Ji.mapValue)return 0;if(s===Ji.mapValue)return 1;if(a===Ji.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let b=0;b<u.length&&b<f.length;++b){const m=Z(u[b],f[b]);if(m!==0)return m;const A=mn(l[u[b]],h[f[b]]);if(A!==0)return A}return Z(u.length,f.length)}(n.mapValue,t.mapValue);default:throw j()}}function Dc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=Se(n),i=Se(t),r=Z(e.seconds,i.seconds);return r!==0?r:Z(e.nanos,i.nanos)}function Vc(n,t){const e=n.values||[],i=t.values||[];for(let r=0;r<e.length&&r<i.length;++r){const s=mn(e[r],i[r]);if(s)return s}return Z(e.length,i.length)}function gn(n){return js(n)}function js(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Se(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return We(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",r=!0;for(const s of e.values||[])r?r=!1:i+=",",i+=js(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${js(e.fields[a])}`;return r+"}"}(n.mapValue):j()}function Nc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function qs(n){return!!n&&"integerValue"in n}function Io(n){return!!n&&"arrayValue"in n}function Oc(n){return!!n&&"nullValue"in n}function Mc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rr(n){return!!n&&"mapValue"in n}function Ig(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function ti(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ge(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=ti(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ti(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Tg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ti(e)}setAll(t){let e=yt.emptyPath(),i={},r=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,i,r),i={},r=[],e=l.popLast()}a?i[l.lastSegment()]=ti(a):r.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,r)}delete(t){const e=this.field(t.popLast());rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=e.mapValue.fields[t.get(i)];rr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,i){Ge(e,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new Nt(ti(this.value))}}function _u(n){const t=[];return Ge(n.fields,(e,i)=>{const r=new yt([e]);if(rr(i)){const s=_u(i.mapValue).fields;if(s.length===0)t.push(r);else for(const a of s)t.push(r.child(a))}else t.push(r)}),new Lt(t)}/**
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
 */class Rt{constructor(t,e,i,r,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Rt(t,0,q.min(),q.min(),q.min(),Nt.empty(),0)}static newFoundDocument(t,e,i,r){return new Rt(t,1,e,q.min(),i,r,0)}static newNoDocument(t,e){return new Rt(t,2,e,q.min(),q.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,q.min(),q.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _r{constructor(t,e){this.position=t,this.inclusive=e}}function Lc(n,t,e){let i=0;for(let r=0;r<n.position.length;r++){const s=t[r],a=n.position[r];if(s.field.isKeyField()?i=F.comparator(F.fromName(a.referenceValue),e.key):i=mn(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function $c(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Xt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ui{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ag(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class yu{}class ut extends yu{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Rg(t,e,i):e==="array-contains"?new Pg(t,i):e==="in"?new kg(t,i):e==="not-in"?new Dg(t,i):e==="array-contains-any"?new Vg(t,i):new ut(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Sg(t,i):new Cg(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(mn(e,this.value)):e!==null&&He(this.value)===He(e)&&this.matchesComparison(mn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends yu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new qt(t,e)}matches(t){return vu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vu(n){return n.op==="and"}function wu(n){return xg(n)&&vu(n)}function xg(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function Ws(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+gn(n.value);if(wu(n))return n.filters.map(t=>Ws(t)).join(",");{const t=n.filters.map(e=>Ws(e)).join(",");return`${n.op}(${t})`}}function bu(n,t){return n instanceof ut?function(i,r){return r instanceof ut&&i.op===r.op&&i.field.isEqual(r.field)&&Xt(i.value,r.value)}(n,t):n instanceof qt?function(i,r){return r instanceof qt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,l)=>s&&bu(a,r.filters[l]),!0):!1}(n,t):void j()}function Eu(n){return n instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${gn(e.value)}`}(n):n instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Eu).join(" ,")+"}"}(n):"Filter"}class Rg extends ut{constructor(t,e,i){super(t,e,i),this.key=F.fromName(i.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sg extends ut{constructor(t,e){super(t,"in",e),this.keys=Iu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Cg extends ut{constructor(t,e){super(t,"not-in",e),this.keys=Iu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Iu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>F.fromName(i.referenceValue))}class Pg extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Io(e)&&li(e.arrayValue,this.value)}}class kg extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&li(this.value.arrayValue,e)}}class Dg extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!li(this.value.arrayValue,e)}}class Vg extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Io(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>li(this.value.arrayValue,i))}}/**
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
 */class Ng{constructor(t,e=null,i=[],r=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Fc(n,t=null,e=[],i=[],r=null,s=null,a=null){return new Ng(n,t,e,i,r,s,a)}function To(n){const t=W(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Ws(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>gn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>gn(i)).join(",")),t.ue=e}return t.ue}function Ao(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ag(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!bu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$c(n.startAt,t.startAt)&&$c(n.endAt,t.endAt)}function Hs(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Tn{constructor(t,e=null,i=[],r=[],s=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Og(n,t,e,i,r,s,a,l){return new Tn(n,t,e,i,r,s,a,l)}function xo(n){return new Tn(n)}function Uc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Tu(n){return n.collectionGroup!==null}function ei(n){const t=W(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new vt(yt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new ui(s,i))}),e.has(yt.keyField().canonicalString())||t.ce.push(new ui(yt.keyField(),i))}return t.ce}function Kt(n){const t=W(n);return t.le||(t.le=Mg(t,ei(n))),t.le}function Mg(n,t){if(n.limitType==="F")return Fc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new ui(r.field,s)});const e=n.endAt?new _r(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new _r(n.startAt.position,n.startAt.inclusive):null;return Fc(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Gs(n,t){const e=n.filters.concat([t]);return new Tn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ks(n,t,e){return new Tn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function kr(n,t){return Ao(Kt(n),Kt(t))&&n.limitType===t.limitType}function Au(n){return`${To(Kt(n))}|lt:${n.limitType}`}function rn(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(r=>Eu(r)).join(", ")}]`),Pr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(r=>gn(r)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(r=>gn(r)).join(",")),`Target(${i})`}(Kt(n))}; limitType=${n.limitType})`}function Dr(n,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):F.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,r){for(const s of ei(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,t)&&function(i,r){return!(i.startAt&&!function(a,l,u){const h=Lc(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,ei(i),r)||i.endAt&&!function(a,l,u){const h=Lc(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,ei(i),r))}(n,t)}function Lg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xu(n){return(t,e)=>{let i=!1;for(const r of ei(n)){const s=$g(r,t,e);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function $g(n,t,e){const i=n.field.isKeyField()?F.comparator(t.key,e.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?mn(u,h):j()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return j()}}/**
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
 */class An{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[e]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ge(this.inner,(e,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return mu(this.inner)}size(){return this.innerSize}}/**
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
 */const Fg=new ot(F.comparator);function he(){return Fg}const Ru=new ot(F.comparator);function Yn(...n){let t=Ru;for(const e of n)t=t.insert(e.key,e);return t}function Su(n){let t=Ru;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Fe(){return ni()}function Cu(){return ni()}function ni(){return new An(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ug=new ot(F.comparator),Bg=new vt(F.comparator);function G(...n){let t=Bg;for(const e of n)t=t.add(e);return t}const zg=new vt(Z);function jg(){return zg}/**
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
 */function Ro(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gr(t)?"-0":t}}function Pu(n){return{integerValue:""+n}}function qg(n,t){return wg(t)?Pu(t):Ro(n,t)}/**
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
 */class Vr{constructor(){this._=void 0}}function Wg(n,t,e){return n instanceof yr?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&bo(s)&&(s=Eo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof di?Du(n,t):n instanceof hi?Vu(n,t):function(r,s){const a=ku(r,s),l=Bc(a)+Bc(r.Pe);return qs(a)&&qs(r.Pe)?Pu(l):Ro(r.serializer,l)}(n,t)}function Hg(n,t,e){return n instanceof di?Du(n,t):n instanceof hi?Vu(n,t):e}function ku(n,t){return n instanceof vr?function(i){return qs(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class yr extends Vr{}class di extends Vr{constructor(t){super(),this.elements=t}}function Du(n,t){const e=Nu(t);for(const i of n.elements)e.some(r=>Xt(r,i))||e.push(i);return{arrayValue:{values:e}}}class hi extends Vr{constructor(t){super(),this.elements=t}}function Vu(n,t){let e=Nu(t);for(const i of n.elements)e=e.filter(r=>!Xt(r,i));return{arrayValue:{values:e}}}class vr extends Vr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Bc(n){return ct(n.integerValue||n.doubleValue)}function Nu(n){return Io(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Gg(n,t){return n.field.isEqual(t.field)&&function(i,r){return i instanceof di&&r instanceof di||i instanceof hi&&r instanceof hi?fn(i.elements,r.elements,Xt):i instanceof vr&&r instanceof vr?Xt(i.Pe,r.Pe):i instanceof yr&&r instanceof yr}(n.transform,t.transform)}class Kg{constructor(t,e){this.version=t,this.transformResults=e}}class Ot{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Nr{}function Ou(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Or(n.key,Ot.none()):new bi(n.key,n.data,Ot.none());{const e=n.data,i=Nt.empty();let r=new vt(yt.comparator);for(let s of t.fields)if(!r.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new Pe(n.key,i,new Lt(r.toArray()),Ot.none())}}function Qg(n,t,e){n instanceof bi?function(r,s,a){const l=r.value.clone(),u=jc(r.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Pe?function(r,s,a){if(!sr(r.precondition,s))return void s.convertToUnknownDocument(a.version);const l=jc(r.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Mu(r)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function ii(n,t,e,i){return n instanceof bi?function(s,a,l,u){if(!sr(s.precondition,a))return l;const h=s.value.clone(),f=qc(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,i):n instanceof Pe?function(s,a,l,u){if(!sr(s.precondition,a))return l;const h=qc(s.fieldTransforms,u,a),f=a.data;return f.setAll(Mu(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(b=>b.field))}(n,t,e,i):function(s,a,l){return sr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Yg(n,t){let e=null;for(const i of n.fieldTransforms){const r=t.data.field(i.field),s=ku(i.transform,r||null);s!=null&&(e===null&&(e=Nt.empty()),e.set(i.field,s))}return e||null}function zc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&fn(i,r,(s,a)=>Gg(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class bi extends Nr{constructor(t,e,i,r=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Pe extends Nr{constructor(t,e,i,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function jc(n,t,e){const i=new Map;et(n.length===e.length);for(let r=0;r<e.length;r++){const s=n[r],a=s.transform,l=t.data.field(s.field);i.set(s.field,Hg(a,l,e[r]))}return i}function qc(n,t,e){const i=new Map;for(const r of n){const s=r.transform,a=e.data.field(r.field);i.set(r.field,Wg(s,a,t))}return i}class Or extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jg extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xg{constructor(t,e,i,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&Qg(s,t,i[r])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ii(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ii(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Cu();return this.mutations.forEach(r=>{const s=t.get(r.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(r.key)?null:l;const u=Ou(a,l);u!==null&&i.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&fn(this.mutations,t.mutations,(e,i)=>zc(e,i))&&fn(this.baseMutations,t.baseMutations,(e,i)=>zc(e,i))}}class So{constructor(t,e,i,r){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=r}static from(t,e,i){et(t.mutations.length===i.length);let r=function(){return Ug}();const s=t.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new So(t,e,i,r)}}/**
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
 */class Zg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class t_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var lt,Q;function e_(n){switch(n){default:return j();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Lu(n){if(n===void 0)return de("GRPC error has no .code"),S.UNKNOWN;switch(n){case lt.OK:return S.OK;case lt.CANCELLED:return S.CANCELLED;case lt.UNKNOWN:return S.UNKNOWN;case lt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case lt.INTERNAL:return S.INTERNAL;case lt.UNAVAILABLE:return S.UNAVAILABLE;case lt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case lt.NOT_FOUND:return S.NOT_FOUND;case lt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case lt.ABORTED:return S.ABORTED;case lt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case lt.DATA_LOSS:return S.DATA_LOSS;default:return j()}}(Q=lt||(lt={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function n_(){return new TextEncoder}/**
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
 */const i_=new Be([4294967295,4294967295],0);function Wc(n){const t=n_().encode(n),e=new au;return e.update(t),new Uint8Array(e.digest())}function Hc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Be([e,i],0),new Be([r,s],0)]}class Co{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Jn(`Invalid padding: ${e}`);if(i<0)throw new Jn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Jn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Jn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Be.fromNumber(this.Ie)}Ee(t,e,i){let r=t.add(e.multiply(Be.fromNumber(i)));return r.compare(i_)===1&&(r=new Be([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wc(t),[i,r]=Hc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Co(s,r,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Wc(t),[i,r]=Hc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mr{constructor(t,e,i,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const r=new Map;return r.set(t,Ei.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Mr(q.min(),r,new ot(Z),he(),G())}}class Ei{constructor(t,e,i,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Ei(i,e,G(),G(),G())}}/**
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
 */class or{constructor(t,e,i,r){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=r}}class $u{constructor(t,e){this.targetId=t,this.me=e}}class Fu{constructor(t,e,i=wt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=r}}class Gc{constructor(){this.fe=0,this.ge=Qc(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=G(),e=G(),i=G();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:i=i.add(r);break;default:j()}}),new Ei(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Qc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class r_{constructor(t){this.Le=t,this.Be=new Map,this.ke=he(),this.qe=Kc(),this.Qe=new ot(Z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:j()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,i=t.me.count,r=this.Je(e);if(r){const s=r.target;if(Hs(s))if(i===0){const a=new F(s.path);this.Ue(e,a,Rt.newNoDocument(a,q.min()))}else et(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=e;let a,l;try{a=We(i).toUint8Array()}catch(u){if(u instanceof gu)return pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Co(a,r,s)}catch(u){return pn(u instanceof Jn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Hs(l.target)){const u=new F(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Rt.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=G();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const r=new Mr(t,e,this.Qe,this.ke,i);return this.ke=he(),this.qe=Kc(),this.Qe=new ot(Z),r}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Gc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new vt(Z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Gc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Kc(){return new ot(F.comparator)}function Qc(){return new ot(F.comparator)}const s_={asc:"ASCENDING",desc:"DESCENDING"},o_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a_={and:"AND",or:"OR"};class c_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qs(n,t){return n.useProto3Json||Pr(t)?t:{value:t}}function wr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Uu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function l_(n,t){return wr(n,t.toTimestamp())}function Qt(n){return et(!!n),q.fromTimestamp(function(e){const i=Se(e);return new dt(i.seconds,i.nanos)}(n))}function Po(n,t){return Ys(n,t).canonicalString()}function Ys(n,t){const e=function(r){return new rt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Bu(n){const t=rt.fromString(n);return et(Hu(t)),t}function Js(n,t){return Po(n.databaseId,t.path)}function Cs(n,t){const e=Bu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(ju(e))}function zu(n,t){return Po(n.databaseId,t)}function u_(n){const t=Bu(n);return t.length===4?rt.emptyPath():ju(t)}function Xs(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ju(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yc(n,t,e){return{name:Js(n,t),fields:e.value.mapValue.fields}}function d_(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:j()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(et(f===void 0||typeof f=="string"),wt.fromBase64String(f||"")):(et(f===void 0||f instanceof Buffer||f instanceof Uint8Array),wt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?S.UNKNOWN:Lu(h.code);return new N(f,h.message||"")}(a);e=new Fu(i,r,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Cs(n,i.document.name),s=Qt(i.document.updateTime),a=i.document.createTime?Qt(i.document.createTime):q.min(),l=new Nt({mapValue:{fields:i.document.fields}}),u=Rt.newFoundDocument(r,s,a,l),h=i.targetIds||[],f=i.removedTargetIds||[];e=new or(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Cs(n,i.document),s=i.readTime?Qt(i.readTime):q.min(),a=Rt.newNoDocument(r,s),l=i.removedTargetIds||[];e=new or([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Cs(n,i.document),s=i.removedTargetIds||[];e=new or([],s,r,null)}else{if(!("filter"in t))return j();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new t_(r,s),l=i.targetId;e=new $u(l,a)}}return e}function h_(n,t){let e;if(t instanceof bi)e={update:Yc(n,t.key,t.value)};else if(t instanceof Or)e={delete:Js(n,t.key)};else if(t instanceof Pe)e={update:Yc(n,t.key,t.data),updateMask:b_(t.fieldMask)};else{if(!(t instanceof Jg))return j();e={verify:Js(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof yr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof di)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof hi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw j()}(0,i))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:l_(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(n,t.precondition)),e}function p_(n,t){return n&&n.length>0?(et(t!==void 0),n.map(e=>function(r,s){let a=r.updateTime?Qt(r.updateTime):Qt(s);return a.isEqual(q.min())&&(a=Qt(s)),new Kg(a,r.transformResults||[])}(e,t))):[]}function f_(n,t){return{documents:[zu(n,t.path)]}}function m_(n,t){const e={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=zu(n,r);const s=function(h){if(h.length!==0)return Wu(qt.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:sn(m.field),direction:y_(m.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Qs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:r}}function g_(n){let t=u_(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let r=null;if(i>0){et(i===1);const f=e.from[0];f.allDescendants?r=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(b){const m=qu(b);return m instanceof qt&&wu(m)?m.getFilters():[m]}(e.where));let a=[];e.orderBy&&(a=function(b){return b.map(m=>function(R){return new ui(on(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(e.orderBy));let l=null;e.limit&&(l=function(b){let m;return m=typeof b=="object"?b.value:b,Pr(m)?null:m}(e.limit));let u=null;e.startAt&&(u=function(b){const m=!!b.before,A=b.values||[];return new _r(A,m)}(e.startAt));let h=null;return e.endAt&&(h=function(b){const m=!b.before,A=b.values||[];return new _r(A,m)}(e.endAt)),Og(t,r,a,s,l,"F",u,h)}function __(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function qu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=on(e.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=on(e.unaryFilter.field);return ut.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=on(e.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(e){return ut.create(on(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(i=>qu(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(n):j()}function y_(n){return s_[n]}function v_(n){return o_[n]}function w_(n){return a_[n]}function sn(n){return{fieldPath:n.canonicalString()}}function on(n){return yt.fromServerFormat(n.fieldPath)}function Wu(n){return n instanceof ut?function(e){if(e.op==="=="){if(Mc(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NAN"}};if(Oc(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mc(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NAN"}};if(Oc(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sn(e.field),op:v_(e.op),value:e.value}}}(n):n instanceof qt?function(e){const i=e.getFilters().map(r=>Wu(r));return i.length===1?i[0]:{compositeFilter:{op:w_(e.op),filters:i}}}(n):j()}function b_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Hu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ee{constructor(t,e,i,r,s=q.min(),a=q.min(),l=wt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class E_{constructor(t){this.ct=t}}function I_(n){const t=g_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ks(t,t.limit,"L"):t}/**
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
 */class T_{constructor(){this.un=new A_}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Re.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Re.min())}updateCollectionGroup(t,e,i){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class A_{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e]||new vt(rt.comparator),s=!r.has(i);return this.index[e]=r.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e];return r&&r.has(i)}getEntries(t){return(this.index[t]||new vt(rt.comparator)).toArray()}}/**
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
 */class _n{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new _n(0)}static kn(){return new _n(-1)}}/**
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
 */class x_{constructor(){this.changes=new An(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?P.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class R_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class S_{constructor(t,e,i,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(i!==null&&ii(i.mutation,r,Lt.empty(),dt.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,G()).next(()=>i))}getLocalViewOfDocuments(t,e,i=G()){const r=Fe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,i).next(s=>{let a=Yn();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=Fe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,G()))}populateOverlays(t,e,i){const r=[];return i.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,r){let s=he();const a=ni(),l=function(){return ni()}();return e.forEach((u,h)=>{const f=i.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof Pe)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ii(f.mutation,h,f.mutation.getFieldMask(),dt.now())):a.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var b;return l.set(h,new R_(f,(b=a.get(h))!==null&&b!==void 0?b:null))}),l))}recalculateAndSaveOverlays(t,e){const i=ni();let r=new ot((a,l)=>a-l),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=i.get(u)||Lt.empty();f=l.applyToLocalView(h,f),i.set(u,f);const b=(r.get(l.batchId)||G()).add(u);r=r.insert(l.batchId,b)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,b=Cu();f.forEach(m=>{if(!s.has(m)){const A=Ou(e.get(m),i.get(m));A!==null&&b.set(m,A),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,b))}return P.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,r){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Tu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,r):this.getDocumentsMatchingCollectionQuery(t,e,i,r)}getNextDocuments(t,e,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,r-s.size):P.resolve(Fe());let l=-1,u=s;return a.next(h=>P.forEach(h,(f,b)=>(l<b.largestBatchId&&(l=b.largestBatchId),s.get(f)?P.resolve():this.remoteDocumentCache.getEntry(t,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,G())).next(f=>({batchId:l,changes:Su(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(i=>{let r=Yn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,i,r){const s=e.collectionGroup;let a=Yn();return this.indexManager.getCollectionParents(t,s).next(l=>P.forEach(l,u=>{const h=function(b,m){return new Tn(m,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,i,r).next(f=>{f.forEach((b,m)=>{a=a.insert(b,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,r))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Rt.newInvalidDocument(f)))});let l=Yn();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ii(f.mutation,h,Lt.empty(),dt.now()),Dr(e,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class C_{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Qt(r.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:I_(r.bundledQuery),readTime:Qt(r.readTime)}}(e)),P.resolve()}}/**
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
 */class P_{constructor(){this.overlays=new ot(F.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Fe();return P.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((r,s)=>{this.ht(t,e,s)}),P.resolve()}removeOverlaysForBatchId(t,e,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),P.resolve()}getOverlaysForCollection(t,e,i){const r=Fe(),s=e.length+1,a=new F(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return P.resolve(r)}getOverlaysForCollectionGroup(t,e,i,r){let s=new ot((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>i){let f=s.get(h.largestBatchId);f===null&&(f=Fe(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Fe(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=r)););return P.resolve(l)}ht(t,e,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Zg(e,i));let s=this.Ir.get(e);s===void 0&&(s=G(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class k_{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class ko{constructor(){this.Tr=new vt(mt.Er),this.dr=new vt(mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new mt(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new mt(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new F(new rt([])),i=new mt(e,t),r=new mt(e,t+1),s=[];return this.dr.forEachInRange([i,r],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new F(new rt([])),i=new mt(e,t),r=new mt(e,t+1);let s=G();return this.dr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new mt(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class mt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return F.comparator(t.key,e.key)||Z(t.wr,e.wr)}static Ar(t,e){return Z(t.wr,e.wr)||F.comparator(t.key,e.key)}}/**
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
 */class D_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new vt(mt.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xg(s,e,i,r);this.mutationQueue.push(a);for(const l of r)this.br=this.br.add(new mt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,r=this.vr(i),s=r<0?0:r;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new mt(e,0),r=new mt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],a=>{const l=this.Dr(a.wr);s.push(l)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new vt(Z);return e.forEach(r=>{const s=new mt(r,0),a=new mt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),P.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,r=i.length+1;let s=i;F.isDocumentKey(s)||(s=s.child(""));const a=new mt(new F(s),0);let l=new vt(Z);return this.br.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===r&&(l=l.add(u.wr)),!0)},a),P.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){et(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return P.forEach(e.mutations,r=>{const s=new mt(r.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new mt(e,0),r=this.br.firstAfterOrEqual(i);return P.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class V_{constructor(t){this.Mr=t,this.docs=function(){return new ot(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,r=this.docs.get(i),s=r?r.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return P.resolve(i?i.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let i=he();return e.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Rt.newInvalidDocument(r))}),P.resolve(i)}getDocumentsMatchingQuery(t,e,i,r){let s=he();const a=e.path,l=new F(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gg(mg(f),i)<=0||(r.has(f.key)||Dr(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(t,e,i,r){j()}Or(t,e){return P.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new N_(this)}getSize(t){return P.resolve(this.size)}}class N_ extends x_{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class O_{constructor(t){this.persistence=t,this.Nr=new An(e=>To(e),Ao),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ko,this.targetCount=0,this.kr=_n.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,r)=>e(r)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new _n(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,i){let r=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),P.waitFor(s).next(()=>r)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return P.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),P.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(a=>{s.push(r.markPotentiallyOrphaned(t,a))}),P.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return P.resolve(i)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
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
 */class M_{constructor(t,e){this.qr={},this.overlays={},this.Qr=new wo(0),this.Kr=!1,this.Kr=!0,this.$r=new k_,this.referenceDelegate=t(this),this.Ur=new O_(this),this.indexManager=new T_,this.remoteDocumentCache=function(r){return new V_(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new E_(e),this.Gr=new C_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new P_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new D_(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){O("MemoryPersistence","Starting transaction:",t);const r=new L_(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,e){return P.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class L_ extends yg{constructor(t){super(),this.currentSequenceNumber=t}}class Do{constructor(t){this.persistence=t,this.Jr=new ko,this.Yr=null}static Zr(t){return new Do(t)}get Xr(){if(this.Yr)return this.Yr;throw j()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),P.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,i=>{const r=F.fromPath(i);return this.ei(t,r).next(s=>{s||e.removeEntry(r,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Vo{constructor(t,e,i,r){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=r}static Wi(t,e){let i=G(),r=G();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Vo(t,e.fromCache,i,r)}}/**
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
 */class $_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class F_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Fh()?8:vg(Ct())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,r){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new $_;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,r){return i.documentReadCount<this.ji?(Hn()<=K.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",rn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Hn()<=K.DEBUG&&O("QueryEngine","Query:",rn(e),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(Hn()<=K.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",rn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(e))):P.resolve())}Yi(t,e){if(Uc(e))return P.resolve(null);let i=Kt(e);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Ks(e,null,"F"),i=Kt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=G(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.ts(e,l);return this.ns(e,h,a,u.readTime)?this.Yi(t,Ks(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,i,r){return Uc(e)||r.isEqual(q.min())?P.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,r)?P.resolve(null):(Hn()<=K.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),rn(e)),this.rs(t,a,e,fg(r,-1)).next(l=>l))})}ts(t,e){let i=new vt(xu(t));return e.forEach((r,s)=>{Dr(t,s)&&(i=i.add(s))}),i}ns(t,e,i,r){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,i){return Hn()<=K.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",rn(e)),this.Ji.getDocumentsMatchingQuery(t,e,Re.min(),i)}rs(t,e,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class U_{constructor(t,e,i,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new ot(Z),this._s=new An(s=>To(s),Ao),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new S_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function B_(n,t,e,i){return new U_(n,t,e,i)}async function Gu(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let r;return e.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let u=G();for(const h of r){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(i,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function z_(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const b=h.batch,m=b.keys();let A=P.resolve();return m.forEach(R=>{A=A.next(()=>f.getEntry(u,R)).next(D=>{const k=h.docVersions.get(R);et(k!==null),D.version.compareTo(k)<0&&(b.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,b))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=G();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(i,r))})}function Ku(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function j_(n,t){const e=W(n),i=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const l=[];t.targetChanges.forEach((f,b)=>{const m=r.get(b);if(!m)return;l.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,b).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,b)));let A=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(b)!==null?A=A.withResumeToken(wt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,i)),r=r.insert(b,A),function(D,k,L){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,A,f)&&l.push(e.Ur.updateTargetData(s,A))});let u=he(),h=G();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(q_(s,a,t.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!i.isEqual(q.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(b=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(f)}return P.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.os=r,s))}function q_(n,t,e){let i=G(),r=G();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=he();return e.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(q.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:r}})}function W_(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function H_(n,t){const e=W(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return e.Ur.getTargetData(i,t).next(s=>s?(r=s,P.resolve(r)):e.Ur.allocateTargetId(i).next(a=>(r=new Ee(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=e.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function Zs(n,t,e){const i=W(n),r=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!wi(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function Jc(n,t,e){const i=W(n);let r=q.min(),s=G();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const b=W(u),m=b._s.get(f);return m!==void 0?P.resolve(b.os.get(m)):b.Ur.getTargetData(h,f)}(i,a,Kt(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?r:q.min(),e?s:G())).next(l=>(G_(i,Lg(t),l),{documents:l,Ts:s})))}function G_(n,t,e){let i=n.us.get(t)||q.min();e.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class Xc{constructor(){this.activeTargetIds=jg()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class K_{constructor(){this.so=new Xc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Xc,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Q_{_o(t){}shutdown(){}}/**
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
 */class Zc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xi=null;function Ps(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
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
 */const Y_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class J_{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const At="WebChannelConnection";class X_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(e,i,r,s,a){const l=Ps(),u=this.xo(e,i.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${l}:`,u,r);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(e,u,h,r).then(f=>(O("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw pn("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",r),f})}Lo(e,i,r,s,a,l){return this.Mo(e,i,r,s,a)}Oo(e,i,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+In}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),r&&r.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const r=Y_[e];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,r){const s=Ps();return new Promise((a,l)=>{const u=new cu;u.setWithCredentials(!0),u.listenOnce(lu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ir.NO_ERROR:const f=u.getResponseJson();O(At,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case ir.TIMEOUT:O(At,`RPC '${t}' ${s} timed out`),l(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const b=u.getStatus();if(O(At,`RPC '${t}' ${s} failed with status:`,b,"response text:",u.getResponseText()),b>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const R=function(k){const L=k.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(L)>=0?L:S.UNKNOWN}(A.status);l(new N(R,A.message))}else l(new N(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new N(S.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{O(At,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(r);O(At,`RPC '${t}' ${s} sending request:`,r),u.send(e,"POST",h,i,15)})}Bo(t,e,i){const r=Ps(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=hu(),l=du(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,i),u.encodeInitMessageHeaders=!0;const f=s.join("");O(At,`Creating RPC '${t}' stream ${r}: ${f}`,u);const b=a.createWebChannel(f,u);let m=!1,A=!1;const R=new J_({Io:k=>{A?O(At,`Not sending because RPC '${t}' stream ${r} is closed:`,k):(m||(O(At,`Opening RPC '${t}' stream ${r} transport.`),b.open(),m=!0),O(At,`RPC '${t}' stream ${r} sending:`,k),b.send(k))},To:()=>b.close()}),D=(k,L,U)=>{k.listen(L,C=>{try{U(C)}catch(B){setTimeout(()=>{throw B},0)}})};return D(b,Qn.EventType.OPEN,()=>{A||(O(At,`RPC '${t}' stream ${r} transport opened.`),R.yo())}),D(b,Qn.EventType.CLOSE,()=>{A||(A=!0,O(At,`RPC '${t}' stream ${r} transport closed`),R.So())}),D(b,Qn.EventType.ERROR,k=>{A||(A=!0,pn(At,`RPC '${t}' stream ${r} transport errored:`,k),R.So(new N(S.UNAVAILABLE,"The operation could not be completed")))}),D(b,Qn.EventType.MESSAGE,k=>{var L;if(!A){const U=k.data[0];et(!!U);const C=U,B=C.error||((L=C[0])===null||L===void 0?void 0:L.error);if(B){O(At,`RPC '${t}' stream ${r} received error:`,B);const tt=B.status;let H=function(v){const E=lt[v];if(E!==void 0)return Lu(E)}(tt),I=B.message;H===void 0&&(H=S.INTERNAL,I="Unknown error status: "+tt+" with message "+B.message),A=!0,R.So(new N(H,I)),b.close()}else O(At,`RPC '${t}' stream ${r} received:`,U),R.bo(U)}}),D(l,uu.STAT_EVENT,k=>{k.stat===zs.PROXY?O(At,`RPC '${t}' stream ${r} detected buffering proxy`):k.stat===zs.NOPROXY&&O(At,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function ks(){return typeof document<"u"?document:null}/**
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
 */function Lr(n){return new c_(n,!0)}/**
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
 */class Qu{constructor(t,e,i=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-i);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Yu{constructor(t,e,i,r,s,a,l,u){this.ui=t,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Qu(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(de(e.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===e&&this.P_(i,r)},i=>{t(()=>{const r=new N(S.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z_ extends Yu{constructor(t,e,i,r,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=d_(this.serializer,t),i=function(s){if(!("targetChange"in s))return q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Qt(a.readTime):q.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=Xs(this.serializer),e.addTarget=function(s,a){let l;const u=a.target;if(l=Hs(u)?{documents:f_(s,u)}:{query:m_(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Uu(s,a.resumeToken);const h=Qs(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){l.readTime=wr(s,a.snapshotVersion.toTimestamp());const h=Qs(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=__(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=Xs(this.serializer),e.removeTarget=t,this.a_(e)}}class ty extends Yu{constructor(t,e,i,r,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return et(!!t.streamToken),this.lastStreamToken=t.streamToken,et(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=p_(t.writeResults,t.commitTime),i=Qt(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Xs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>h_(this.serializer,i))};this.a_(e)}}/**
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
 */class ey extends class{}{constructor(t,e,i,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,Ys(e,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(S.UNKNOWN,s.toString())})}Lo(t,e,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,Ys(e,i),r,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ny{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(de(e),this.D_=!1):O("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class iy{constructor(t,e,i,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{Ke(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=W(u);h.L_.add(4),await Ii(h),h.q_.set("Unknown"),h.L_.delete(4),await $r(h)}(this))})}),this.q_=new ny(i,r)}}async function $r(n){if(Ke(n))for(const t of n.B_)await t(!0)}async function Ii(n){for(const t of n.B_)await t(!1)}function Ju(n,t){const e=W(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Lo(e)?Mo(e):xn(e).r_()&&Oo(e,t))}function No(n,t){const e=W(n),i=xn(e);e.N_.delete(t),i.r_()&&Xu(e,t),e.N_.size===0&&(i.r_()?i.o_():Ke(e)&&e.q_.set("Unknown"))}function Oo(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xn(n).A_(t)}function Xu(n,t){n.Q_.xe(t),xn(n).R_(t)}function Mo(n){n.Q_=new r_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),xn(n).start(),n.q_.v_()}function Lo(n){return Ke(n)&&!xn(n).n_()&&n.N_.size>0}function Ke(n){return W(n).L_.size===0}function Zu(n){n.Q_=void 0}async function ry(n){n.q_.set("Online")}async function sy(n){n.N_.forEach((t,e)=>{Oo(n,t)})}async function oy(n,t){Zu(n),Lo(n)?(n.q_.M_(t),Mo(n)):n.q_.set("Unknown")}async function ay(n,t,e){if(n.q_.set("Online"),t instanceof Fu&&t.state===2&&t.cause)try{await async function(r,s){const a=s.cause;for(const l of s.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.N_.delete(l),r.Q_.removeTarget(l))}(n,t)}catch(i){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await br(n,i)}else if(t instanceof or?n.Q_.Ke(t):t instanceof $u?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const i=await Ku(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),Xu(s,u);const b=new Ee(f.target,u,h,f.sequenceNumber);Oo(s,b)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){O("RemoteStore","Failed to raise snapshot:",i),await br(n,i)}}async function br(n,t,e){if(!wi(t))throw t;n.L_.add(1),await Ii(n),n.q_.set("Offline"),e||(e=()=>Ku(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await $r(n)})}function td(n,t){return t().catch(e=>br(n,e,t))}async function Fr(n){const t=W(n),e=Ce(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;cy(t);)try{const r=await W_(t.localStore,i);if(r===null){t.O_.length===0&&e.o_();break}i=r.batchId,ly(t,r)}catch(r){await br(t,r)}ed(t)&&nd(t)}function cy(n){return Ke(n)&&n.O_.length<10}function ly(n,t){n.O_.push(t);const e=Ce(n);e.r_()&&e.V_&&e.m_(t.mutations)}function ed(n){return Ke(n)&&!Ce(n).n_()&&n.O_.length>0}function nd(n){Ce(n).start()}async function uy(n){Ce(n).p_()}async function dy(n){const t=Ce(n);for(const e of n.O_)t.m_(e.mutations)}async function hy(n,t,e){const i=n.O_.shift(),r=So.from(i,t,e);await td(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Fr(n)}async function py(n,t){t&&Ce(n).V_&&await async function(i,r){if(function(a){return e_(a)&&a!==S.ABORTED}(r.code)){const s=i.O_.shift();Ce(i).s_(),await td(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fr(i)}}(n,t),ed(n)&&nd(n)}async function tl(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=Ke(e);e.L_.add(3),await Ii(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await $r(e)}async function fy(n,t){const e=W(n);t?(e.L_.delete(2),await $r(e)):t||(e.L_.add(2),await Ii(e),e.q_.set("Unknown"))}function xn(n){return n.K_||(n.K_=function(e,i,r){const s=W(e);return s.w_(),new Z_(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:ry.bind(null,n),Ro:sy.bind(null,n),mo:oy.bind(null,n),d_:ay.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Lo(n)?Mo(n):n.q_.set("Unknown")):(await n.K_.stop(),Zu(n))})),n.K_}function Ce(n){return n.U_||(n.U_=function(e,i,r){const s=W(e);return s.w_(),new ty(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:uy.bind(null,n),mo:py.bind(null,n),f_:dy.bind(null,n),g_:hy.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Fr(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class $o{constructor(t,e,i,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,r,s){const a=Date.now()+i,l=new $o(t,e,a,r,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(n,t){if(de("AsyncQueue",`${t}: ${n}`),wi(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class un{constructor(t){this.comparator=t?(e,i)=>t(e,i)||F.comparator(e.key,i.key):(e,i)=>F.comparator(e.key,i.key),this.keyedMap=Yn(),this.sortedSet=new ot(this.comparator)}static emptySet(t){return new un(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof un)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new un;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
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
 */class el{constructor(){this.W_=new ot(F.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):j():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class yn{constructor(t,e,i,r,s,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,i,r,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new yn(t,e,un.emptySet(e),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==i[r].type||!e[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class my{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class gy{constructor(){this.queries=nl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const r=W(e),s=r.queries;r.queries=nl(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(i)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function nl(){return new An(n=>Au(n),kr)}async function id(n,t){const e=W(n);let i=3;const r=t.query;let s=e.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new my,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(r,!0);break;case 1:s.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(a){const l=Fo(a,`Initialization of query '${rn(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Uo(e)}async function rd(n,t){const e=W(n),i=t.query;let r=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function _y(n,t){const e=W(n);let i=!1;for(const r of t){const s=r.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(r)&&(i=!0);a.z_=r}}i&&Uo(e)}function yy(n,t,e){const i=W(n),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(e);i.queries.delete(t)}function Uo(n){n.Y_.forEach(t=>{t.next()})}var to,il;(il=to||(to={})).ea="default",il.Cache="cache";class sd{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new yn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=yn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==to.Cache}}/**
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
 */class od{constructor(t){this.key=t}}class ad{constructor(t){this.key=t}}class vy{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=G(),this.mutatedKeys=G(),this.Aa=xu(t),this.Ra=new un(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new el,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((f,b)=>{const m=r.get(f),A=Dr(this.query,b)?b:null,R=!!m&&this.mutatedKeys.has(m.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let k=!1;m&&A?m.data.isEqual(A.data)?R!==D&&(i.track({type:3,doc:A}),k=!0):this.ga(m,A)||(i.track({type:2,doc:A}),k=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!m&&A?(i.track({type:0,doc:A}),k=!0):m&&!A&&(i.track({type:1,doc:m}),k=!0,(u||h)&&(l=!0)),k&&(A?(a=a.add(A),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),i.track({type:1,doc:f})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,b)=>function(A,R){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return D(A)-D(R)}(f.type,b.type)||this.Aa(f.doc,b.doc)),this.pa(i),r=r!=null&&r;const l=e&&!r?this.ya():[],u=this.da.size===0&&this.current&&!r?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new yn(this.query,t.Ra,s,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new el,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=G(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new ad(i))}),this.da.forEach(i=>{t.has(i)||e.push(new od(i))}),e}ba(t){this.Ta=t.Ts,this.da=G();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return yn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wy{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class by{constructor(t){this.key=t,this.va=!1}}class Ey{constructor(t,e,i,r,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new An(l=>Au(l),kr),this.Ma=new Map,this.xa=new Set,this.Oa=new ot(F.comparator),this.Na=new Map,this.La=new ko,this.Ba={},this.ka=new Map,this.qa=_n.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Iy(n,t,e=!0){const i=pd(n);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await cd(i,t,e,!0),r}async function Ty(n,t){const e=pd(n);await cd(e,t,!0,!1)}async function cd(n,t,e,i){const r=await H_(n.localStore,Kt(t)),s=r.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await Ay(n,t,s,a==="current",r.resumeToken)),n.isPrimaryClient&&e&&Ju(n.remoteStore,r),l}async function Ay(n,t,e,i,r){n.Ka=(b,m,A)=>async function(D,k,L,U){let C=k.view.ma(L);C.ns&&(C=await Jc(D.localStore,k.query,!1).then(({documents:I})=>k.view.ma(I,C)));const B=U&&U.targetChanges.get(k.targetId),tt=U&&U.targetMismatches.get(k.targetId)!=null,H=k.view.applyChanges(C,D.isPrimaryClient,B,tt);return sl(D,k.targetId,H.wa),H.snapshot}(n,b,m,A);const s=await Jc(n.localStore,t,!0),a=new vy(t,s.Ts),l=a.ma(s.documents),u=Ei.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",r),h=a.applyChanges(l,n.isPrimaryClient,u);sl(n,e,h.wa);const f=new wy(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function xy(n,t,e){const i=W(n),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(a=>!kr(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Zs(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),e&&No(i.remoteStore,r.targetId),eo(i,r.targetId)}).catch(vi)):(eo(i,r.targetId),await Zs(i.localStore,r.targetId,!0))}async function Ry(n,t){const e=W(n),i=e.Fa.get(t),r=e.Ma.get(i.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),No(e.remoteStore,i.targetId))}async function Sy(n,t,e){const i=Oy(n);try{const r=await function(a,l){const u=W(a),h=dt.now(),f=l.reduce((A,R)=>A.add(R.key),G());let b,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=he(),D=G();return u.cs.getEntries(A,f).next(k=>{R=k,R.forEach((L,U)=>{U.isValidDocument()||(D=D.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(k=>{b=k;const L=[];for(const U of l){const C=Yg(U,b.get(U.key).overlayedDocument);C!=null&&L.push(new Pe(U.key,C,_u(C.value.mapValue),Ot.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,L,l)}).next(k=>{m=k;const L=k.applyToLocalDocumentSet(b,D);return u.documentOverlayCache.saveOverlays(A,k.batchId,L)})}).then(()=>({batchId:m.batchId,changes:Su(b)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new ot(Z)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(i,r.batchId,e),await Ti(i,r.changes),await Fr(i.remoteStore)}catch(r){const s=Fo(r,"Failed to persist write");e.reject(s)}}async function ld(n,t){const e=W(n);try{const i=await j_(e.localStore,t);t.targetChanges.forEach((r,s)=>{const a=e.Na.get(s);a&&(et(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?et(a.va):r.removedDocuments.size>0&&(et(a.va),a.va=!1))}),await Ti(e,i,t)}catch(i){await vi(i)}}function rl(n,t,e){const i=W(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const r=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&r.push(l.snapshot)}),function(a,l){const u=W(a);u.onlineState=l;let h=!1;u.queries.forEach((f,b)=>{for(const m of b.j_)m.Z_(l)&&(h=!0)}),h&&Uo(u)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Cy(n,t,e){const i=W(n);i.sharedClientState.updateQueryState(t,"rejected",e);const r=i.Na.get(t),s=r&&r.key;if(s){let a=new ot(F.comparator);a=a.insert(s,Rt.newNoDocument(s,q.min()));const l=G().add(s),u=new Mr(q.min(),new Map,new ot(Z),a,l);await ld(i,u),i.Oa=i.Oa.remove(s),i.Na.delete(t),Bo(i)}else await Zs(i.localStore,t,!1).then(()=>eo(i,t,e)).catch(vi)}async function Py(n,t){const e=W(n),i=t.batch.batchId;try{const r=await z_(e.localStore,t);dd(e,i,null),ud(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Ti(e,r)}catch(r){await vi(r)}}async function ky(n,t,e){const i=W(n);try{const r=await function(a,l){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(b=>(et(b!==null),f=b.keys(),u.mutationQueue.removeMutationBatch(h,b))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(i.localStore,t);dd(i,t,e),ud(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Ti(i,r)}catch(r){await vi(r)}}function ud(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function dd(n,t,e){const i=W(n);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function eo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||hd(n,i)})}function hd(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(No(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Bo(n))}function sl(n,t,e){for(const i of e)i instanceof od?(n.La.addReference(i.key,t),Dy(n,i)):i instanceof ad?(O("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||hd(n,i.key)):j()}function Dy(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(O("SyncEngine","New document in limbo: "+e),n.xa.add(i),Bo(n))}function Bo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new F(rt.fromString(t)),i=n.qa.next();n.Na.set(i,new by(e)),n.Oa=n.Oa.insert(e,i),Ju(n.remoteStore,new Ee(Kt(xo(e.path)),i,"TargetPurposeLimboResolution",wo.oe))}}async function Ti(n,t,e){const i=W(n),r=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,u)=>{a.push(i.Ka(u,t,e).then(h=>{var f;if((h||e)&&i.isPrimaryClient){const b=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(u.targetId,b?"current":"not-current")}if(h){r.push(h);const b=Vo.Wi(u.targetId,h);s.push(b)}}))}),await Promise.all(a),i.Ca.d_(r),await async function(u,h){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>P.forEach(h,m=>P.forEach(m.$i,A=>f.persistence.referenceDelegate.addReference(b,m.targetId,A)).next(()=>P.forEach(m.Ui,A=>f.persistence.referenceDelegate.removeReference(b,m.targetId,A)))))}catch(b){if(!wi(b))throw b;O("LocalStore","Failed to update sequence numbers: "+b)}for(const b of h){const m=b.targetId;if(!b.fromCache){const A=f.os.get(m),R=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,D)}}}(i.localStore,s))}async function Vy(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const i=await Gu(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new N(S.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Ti(e,i.hs)}}function Ny(n,t){const e=W(n),i=e.Na.get(t);if(i&&i.va)return G().add(i.key);{let r=G();const s=e.Ma.get(t);if(!s)return r;for(const a of s){const l=e.Fa.get(a);r=r.unionWith(l.view.Va)}return r}}function pd(n){const t=W(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ld.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ny.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cy.bind(null,t),t.Ca.d_=_y.bind(null,t.eventManager),t.Ca.$a=yy.bind(null,t.eventManager),t}function Oy(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Py.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ky.bind(null,t),t}class Er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Lr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return B_(this.persistence,new F_,t.initialUser,this.serializer)}Ga(t){return new M_(Do.Zr,this.serializer)}Wa(t){return new K_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Er.provider={build:()=>new Er};class no{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>rl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vy.bind(null,this.syncEngine),await fy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new gy}()}createDatastore(t){const e=Lr(t.databaseInfo.databaseId),i=function(s){return new X_(s)}(t.databaseInfo);return function(s,a,l,u){return new ey(s,a,l,u)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,r,s,a,l){return new iy(i,r,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>rl(this.syncEngine,e,0),function(){return Zc.D()?new Zc:new Q_}())}createSyncEngine(t,e){return function(r,s,a,l,u,h,f){const b=new Ey(r,s,a,l,u,h);return f&&(b.Qa=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=W(r);O("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ii(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}no.provider={build:()=>new no};/**
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
 */class fd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):de("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class My{constructor(t,e,i,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=r,this.user=xt.UNAUTHENTICATED,this.clientId=fu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Fo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ds(n,t){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Gu(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ol(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ly(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>tl(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>tl(t.remoteStore,r)),n._onlineComponents=t}async function Ly(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ds(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===S.FAILED_PRECONDITION||r.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;pn("Error using user provided cache. Falling back to memory cache: "+e),await Ds(n,new Er)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Ds(n,new Er);return n._offlineComponents}async function md(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await ol(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await ol(n,new no))),n._onlineComponents}function $y(n){return md(n).then(t=>t.syncEngine)}async function gd(n){const t=await md(n),e=t.eventManager;return e.onListen=Iy.bind(null,t.syncEngine),e.onUnlisten=xy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ty.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ry.bind(null,t.syncEngine),e}function Fy(n,t,e={}){const i=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new fd({next:m=>{f.Za(),a.enqueueAndForget(()=>rd(s,b));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),b=new sd(xo(l.path),f,{includeMetadataChanges:!0,_a:!0});return id(s,b)}(await gd(n),n.asyncQueue,t,e,i)),i.promise}function Uy(n,t,e={}){const i=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new fd({next:m=>{f.Za(),a.enqueueAndForget(()=>rd(s,b)),m.fromCache&&u.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),b=new sd(l,f,{includeMetadataChanges:!0,_a:!0});return id(s,b)}(await gd(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function _d(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const al=new Map;/**
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
 */function yd(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function By(n,t,e,i){if(t===!0&&i===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function cl(n){if(!F.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ll(n){if(F.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ur(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j()}function Wt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ur(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ul{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}By("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_d((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Br{constructor(t,e,i,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ul({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ul(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new sg;switch(i.type){case"firstParty":return new lg(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=al.get(e);i&&(O("ComponentProvider","Removing Datastore"),al.delete(e),i.terminate())}(this),Promise.resolve()}}function zy(n,t,e,i={}){var r;const s=(n=Wt(n,Br))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,u;if(typeof i.mockUserToken=="string")l=i.mockUserToken,u=xt.MOCK_USER;else{l=Dh(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new xt(h)}n._authCredentials=new og(new pu(l,u))}}/**
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
 */class Qe{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Qe(this.firestore,t,this._query)}}class Vt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Vt(this.firestore,t,this._key)}}class xe extends Qe{constructor(t,e,i){super(t,e,xo(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Vt(this.firestore,null,new F(t))}withConverter(t){return new xe(this.firestore,t,this._path)}}function jy(n,t,...e){if(n=ft(n),yd("collection","path",t),n instanceof Br){const i=rt.fromString(t,...e);return ll(i),new xe(n,null,i)}{if(!(n instanceof Vt||n instanceof xe))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(t,...e));return ll(i),new xe(n.firestore,null,i)}}function vd(n,t,...e){if(n=ft(n),arguments.length===1&&(t=fu.newId()),yd("doc","path",t),n instanceof Br){const i=rt.fromString(t,...e);return cl(i),new Vt(n,null,new F(i))}{if(!(n instanceof Vt||n instanceof xe))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(t,...e));return cl(i),new Vt(n.firestore,n instanceof xe?n.converter:null,new F(i))}}/**
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
 */class dl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Qu(this,"async_queue_retry"),this.Vu=()=>{const i=ks();i&&O("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=ks();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ks();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ae;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!wi(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const r=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw de("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=$o.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&j()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ye extends Br{constructor(t,e,i,r){super(t,e,i,r),this.type="firestore",this._queue=new dl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new dl(t),this._firestoreClient=void 0,await t}}}function qy(n,t){const e=typeof n=="object"?n:Rl(),i=typeof n=="string"?n:"(default)",r=oo(e,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Ph("firestore");s&&zy(r,...s)}return r}function zr(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wy(n),n._firestoreClient}function Wy(n){var t,e,i;const r=n._freezeSettings(),s=function(l,u,h,f){return new Eg(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,_d(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new My(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class vn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vn(wt.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new vn(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ai{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zo{constructor(t){this._methodName=t}}/**
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
 */class jo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
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
 */class qo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const Hy=/^__.*__$/;class Gy{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new bi(t,this.data,e,this.fieldTransforms)}}class wd{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function bd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Wo{constructor(t,e,i,r,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Wo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.Ou(t),r}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ir(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(bd(this.Cu)&&Hy.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Ky{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Lr(t)}Qu(t,e,i,r=!1){return new Wo({Cu:t,methodName:e,qu:i,path:yt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jr(n){const t=n._freezeSettings(),e=Lr(n._databaseId);return new Ky(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ed(n,t,e,i,r,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,r);Ho("Data must be an object, but it was:",a,i);const l=Ad(i,a);let u,h;if(s.merge)u=new Lt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const b of s.mergeFields){const m=io(t,b,e);if(!a.contains(m))throw new N(S.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Rd(f,m)||f.push(m)}u=new Lt(f),h=a.fieldTransforms.filter(b=>u.covers(b.field))}else u=null,h=a.fieldTransforms;return new Gy(new Nt(l),u,h)}class qr extends zo{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qr}}function Id(n,t,e,i){const r=n.Qu(1,t,e);Ho("Data must be an object, but it was:",r,i);const s=[],a=Nt.empty();Ge(i,(u,h)=>{const f=Go(t,u,e);h=ft(h);const b=r.Nu(f);if(h instanceof qr)s.push(f);else{const m=xi(h,b);m!=null&&(s.push(f),a.set(f,m))}});const l=new Lt(s);return new wd(a,l,r.fieldTransforms)}function Td(n,t,e,i,r,s){const a=n.Qu(1,t,e),l=[io(t,i,e)],u=[r];if(s.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(io(t,s[m])),u.push(s[m+1]);const h=[],f=Nt.empty();for(let m=l.length-1;m>=0;--m)if(!Rd(h,l[m])){const A=l[m];let R=u[m];R=ft(R);const D=a.Nu(A);if(R instanceof qr)h.push(A);else{const k=xi(R,D);k!=null&&(h.push(A),f.set(A,k))}}const b=new Lt(h);return new wd(f,b,a.fieldTransforms)}function Qy(n,t,e,i=!1){return xi(e,n.Qu(i?4:3,t))}function xi(n,t){if(xd(n=ft(n)))return Ho("Unsupported field value:",t,n),Ad(n,t);if(n instanceof zo)return function(i,r){if(!bd(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const l of i){let u=xi(l,r.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,r){if((i=ft(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return qg(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=dt.fromDate(i);return{timestampValue:wr(r.serializer,s)}}if(i instanceof dt){const s=new dt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wr(r.serializer,s)}}if(i instanceof jo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof vn)return{bytesValue:Uu(r.serializer,i._byteString)};if(i instanceof Vt){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Po(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof qo)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ro(l.serializer,u)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${Ur(i)}`)}(n,t)}function Ad(n,t){const e={};return mu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ge(n,(i,r)=>{const s=xi(r,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function xd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof jo||n instanceof vn||n instanceof Vt||n instanceof zo||n instanceof qo)}function Ho(n,t,e){if(!xd(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const i=Ur(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function io(n,t,e){if((t=ft(t))instanceof Ai)return t._internalPath;if(typeof t=="string")return Go(n,t);throw Ir("Field path arguments must be of type string or ",n,!1,void 0,e)}const Yy=new RegExp("[~\\*/\\[\\]]");function Go(n,t,e){if(t.search(Yy)>=0)throw Ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ai(...t.split("."))._internalPath}catch{throw Ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ir(n,t,e,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${i}`),a&&(u+=` in document ${r}`),u+=")"),new N(S.INVALID_ARGUMENT,l+n+u)}function Rd(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Sd{constructor(t,e,i,r,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Jy extends Sd{data(){return super.data()}}function Wr(n,t){return typeof t=="string"?Go(n,t):t instanceof Ai?t._internalPath:t._delegate._internalPath}/**
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
 */function Xy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ko{}class Cd extends Ko{}function pi(n,t,...e){let i=[];t instanceof Ko&&i.push(t),i=i.concat(e),function(s){const a=s.filter(u=>u instanceof Qo).length,l=s.filter(u=>u instanceof Hr).length;if(a>1||a>0&&l>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class Hr extends Cd{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new Hr(t,e,i)}_apply(t){const e=this._parse(t);return Pd(t._query,e),new Qe(t.firestore,t.converter,Gs(t._query,e))}_parse(t){const e=jr(t.firestore);return function(s,a,l,u,h,f,b){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fl(b,f);const A=[];for(const R of b)A.push(pl(u,s,R));m={arrayValue:{values:A}}}else m=pl(u,s,b)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fl(b,f),m=Qy(l,a,b,f==="in"||f==="not-in");return ut.create(h,f,m)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Tr(n,t,e){const i=t,r=Wr("where",n);return Hr._create(r,i,e)}class Qo extends Ko{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qo(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:qt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,s){let a=r;const l=s.getFlattenedFilters();for(const u of l)Pd(a,u),a=Gs(a,u)}(t._query,e),new Qe(t.firestore,t.converter,Gs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yo extends Cd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Yo(t,e)}_apply(t){const e=function(r,s,a){if(r.startAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ui(s,a)}(t._query,this._field,this._direction);return new Qe(t.firestore,t.converter,function(r,s){const a=r.explicitOrderBy.concat([s]);return new Tn(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function hl(n,t="asc"){const e=t,i=Wr("orderBy",n);return Yo._create(i,e)}function pl(n,t,e){if(typeof(e=ft(e))=="string"){if(e==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tu(t)&&e.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(rt.fromString(e));if(!F.isDocumentKey(i))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Nc(n,new F(i))}if(e instanceof Vt)return Nc(n,e._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ur(e)}.`)}function fl(n,t){if(!Array.isArray(n)||n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Pd(n,t){const e=function(r,s){for(const a of r)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Zy{convertValue(t,e="none"){switch(He(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(We(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Ge(t,(r,s)=>{i[r]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,r;const s=(r=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>ct(a.doubleValue));return new qo(s)}convertGeoPoint(t){return new jo(ct(t.latitude),ct(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Eo(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(ai(t));default:return null}}convertTimestamp(t){const e=Se(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=rt.fromString(t);et(Hu(i));const r=new ci(i.get(1),i.get(3)),s=new F(i.popFirst(5));return r.isEqual(e)||de(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function kd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}/**
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
 */class Xn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Dd extends Sd{constructor(t,e,i,r,s,a){super(t,e,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Wr("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class ar extends Dd{data(t={}){return super.data(t)}}class tv{constructor(t,e,i,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Xn(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new ar(this._firestore,this._userDataWriter,i.key,i,new Xn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const u=new ar(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Xn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ar(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Xn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:ev(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ev(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function Je(n){n=Wt(n,Vt);const t=Wt(n.firestore,Ye);return Fy(zr(t),n._key).then(e=>nv(t,n,e))}class Vd extends Zy{constructor(t){super(),this.firestore=t}convertBytes(t){return new vn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Vt(this.firestore,null,e)}}function pt(n){n=Wt(n,Qe);const t=Wt(n.firestore,Ye),e=zr(t),i=new Vd(t);return Xy(n._query),Uy(e,n._query).then(r=>new tv(t,i,n,r))}function Ri(n,t,e){n=Wt(n,Vt);const i=Wt(n.firestore,Ye),r=kd(n.converter,t,e);return Kr(i,[Ed(jr(i),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,Ot.none())])}function Rn(n,t,e,...i){n=Wt(n,Vt);const r=Wt(n.firestore,Ye),s=jr(r);let a;return a=typeof(t=ft(t))=="string"||t instanceof Ai?Td(s,"updateDoc",n._key,t,e,i):Id(s,"updateDoc",n._key,t),Kr(r,[a.toMutation(n._key,Ot.exists(!0))])}function Gr(n){return Kr(Wt(n.firestore,Ye),[new Or(n._key,Ot.none())])}function Kr(n,t){return function(i,r){const s=new ae;return i.asyncQueue.enqueueAndForget(async()=>Sy(await $y(i),r,s)),s.promise}(zr(n),t)}function nv(n,t,e){const i=e.docs.get(t._key),r=new Vd(n);return new Dd(n,r,t._key,i,new Xn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class iv{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=jr(t)}set(t,e,i){this._verifyNotCommitted();const r=Vs(t,this._firestore),s=kd(r.converter,e,i),a=Ed(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,Ot.none())),this}update(t,e,i,...r){this._verifyNotCommitted();const s=Vs(t,this._firestore);let a;return a=typeof(e=ft(e))=="string"||e instanceof Ai?Td(this._dataReader,"WriteBatch.update",s._key,e,i,r):Id(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,Ot.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Vs(t,this._firestore);return this._mutations=this._mutations.concat(new Or(e._key,Ot.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vs(n,t){if((n=ft(n)).firestore!==t)throw new N(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Ar(n){return zr(n=Wt(n,Ye)),new iv(n,t=>Kr(n,t))}(function(t,e=!0){(function(r){In=r})(bn),dn(new ze("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new Ye(new ag(i.getProvider("auth-internal")),new dg(i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,f)}(a,r),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ae(Cc,"4.7.3",t),Ae(Cc,"4.7.3","esm2017")})();const rv={apiKey:"AIzaSyCCic8Y8C2l_3byucPz8misLhbLN9kxdv8",authDomain:"personal-finance-tracker-d9f8e.firebaseapp.com",projectId:"personal-finance-tracker-d9f8e",storageBucket:"personal-finance-tracker-d9f8e.firebasestorage.app",messagingSenderId:"226167347334",appId:"1:226167347334:web:6553dd455e6452a7669907",measurementId:"G-E093GW6L3Q"},Nd=xl(rv),Qr=eg(Nd),wn=qy(Nd),sv=new ne;function Od(){const n=Qr.currentUser;if(!n)throw new Error("Not authenticated");return n.uid}function ht(n){return jy(wn,"users",Od(),n)}function st(n,t){return vd(wn,"users",Od(),n,t)}function Sn(){return vd(ht("_")).id}function Xe(n){return n.exists()?{id:n.id,...n.data()}:null}function St(n){return n.docs.map(t=>({id:t.id,...t.data()}))}function Ht(n){if(!n)return n;const t={};for(const[e,i]of Object.entries(n))i instanceof dt?t[e]=i.toDate().toISOString().split("T")[0]:t[e]=i;return t}async function Ft(){const n=await pt(pi(ht("accounts"),hl("sort_order"),hl("created_at"))),t=St(n).map(Ht),e=await pt(ht("transactions")),i=St(e);return t.map(r=>({...r,balance:Jo(r,i)}))}async function ov(n){const t=new Date().toISOString().split("T")[0],e=Sn(),i={name:n.name,type:n.type,currency:"EUR",opening_balance:parseFloat(n.balance)||0,balance_date:n.balance_date||t,balance:parseFloat(n.balance)||0,credit_limit:n.credit_limit||null,goal_amount:n.goal_amount||null,goal_name:n.goal_name||null,goal_deadline:n.goal_deadline||null,color:n.color||"#007AFF",icon:n.icon||"wallet",sort_order:n.sort_order||0,iban:n.iban?n.iban.replace(/\s/g,"").toUpperCase():null,is_active:!0,created_at:new Date().toISOString()};return await Ri(st("accounts",e),i),{id:e,...i}}async function Md(n,t){const e=["name","color","icon","goal_amount","goal_name","goal_deadline","credit_limit","sort_order","is_active","balance_date","iban","opening_balance"],i={updated_at:new Date().toISOString()};for(const r of e)t[r]!==void 0&&(i[r]=r==="iban"&&t[r]?t[r].replace(/\s/g,"").toUpperCase():t[r]);return t.balance!==void 0&&(i.opening_balance=parseFloat(t.balance),t.balance_date&&(i.balance_date=t.balance_date)),await Rn(st("accounts",n),i),await av(n)}async function av(n){const t=await Je(st("accounts",n)),e=Ht(Xe(t)),i=await pt(pi(ht("transactions"),Tr("account_id","==",n))),r=await pt(pi(ht("transactions"),Tr("to_account_id","==",n))),s=[...St(i),...St(r)];return{...e,balance:Jo(e,s)}}function Jo(n,t){const e=n.balance_date||"1970-01-01",i=n.opening_balance||0,r=n.id;let s=0;for(const a of t)a.date<e||(a.account_id===r&&(a.type==="income"?s+=a.amount:(a.type==="expense"||a.type==="savings"||a.type==="transfer")&&(s-=a.amount)),a.to_account_id===r&&a.type==="transfer"&&(s+=a.amount));return Math.round((i+s)*100)/100}async function Yt(n){const t=await Je(st("accounts",n));if(!t.exists())return;const e=Ht(Xe(t)),[i,r]=await Promise.all([pt(pi(ht("transactions"),Tr("account_id","==",n))),pt(pi(ht("transactions"),Tr("to_account_id","==",n)))]),s=[...St(i),...St(r)],a=Jo(e,s);return await Rn(st("accounts",n),{balance:a,updated_at:new Date().toISOString()}),a}async function Ld({account_id:n,type:t,month:e,search:i,limit:r=50,offset:s=0}={}){let a=ht("transactions");const l=await pt(a);let u=St(l).map(Ht);n&&(u=u.filter(R=>R.account_id===n||R.to_account_id===n)),t&&(u=u.filter(R=>R.type===t)),e&&(u=u.filter(R=>{var D;return(D=R.date)==null?void 0:D.startsWith(e)})),i&&(u=u.filter(R=>(R.description||"").toLowerCase().includes(i.toLowerCase())||(R.note||"").toLowerCase().includes(i.toLowerCase()))),u.sort((R,D)=>D.date>R.date?1:D.date<R.date?-1:0);const h=u.length;u=u.slice(s,s+r);const[f,b]=await Promise.all([pt(ht("accounts")),pt(ht("categories"))]),m=Object.fromEntries(St(f).map(R=>[R.id,R])),A=Object.fromEntries(St(b).map(R=>[R.id,R]));return u=u.map(R=>{var D,k,L,U,C;return{...R,account_name:((D=m[R.account_id])==null?void 0:D.name)||"",to_account_name:R.to_account_id?((k=m[R.to_account_id])==null?void 0:k.name)||"":null,category_name:R.category_id?((L=A[R.category_id])==null?void 0:L.name)||"":null,category_icon:R.category_id?((U=A[R.category_id])==null?void 0:U.icon)||"":null,category_color:R.category_id?((C=A[R.category_id])==null?void 0:C.color)||"":null}}),{total:h,rows:u,limit:r,offset:s}}async function cv(n){const t=Sn(),e={account_id:n.account_id,to_account_id:n.to_account_id||null,amount:Math.abs(parseFloat(n.amount)),type:n.type,category_id:n.category_id||null,description:n.description||null,note:n.note||null,date:n.date,import_id:n.import_id||null,fixed_cost_id:n.fixed_cost_id||null,created_at:new Date().toISOString(),updated_at:new Date().toISOString()};return await Ri(st("transactions",t),e),await Yt(n.account_id),n.to_account_id&&await Yt(n.to_account_id),{id:t,...e}}async function lv(n,t){const e=await Je(st("transactions",n));if(!e.exists())throw new Error("Transaction not found");const i=Xe(e),r={updated_at:new Date().toISOString()};return t.amount!==void 0&&(r.amount=Math.abs(parseFloat(t.amount))),t.type!==void 0&&(r.type=t.type),t.category_id!==void 0&&(r.category_id=t.category_id),t.description!==void 0&&(r.description=t.description),t.note!==void 0&&(r.note=t.note),t.date!==void 0&&(r.date=t.date),t.to_account_id!==void 0&&(r.to_account_id=t.to_account_id),await Rn(st("transactions",n),r),await Yt(i.account_id),i.to_account_id&&await Yt(i.to_account_id),r.to_account_id&&await Yt(r.to_account_id),Ht({id:n,...i,...r})}async function $d(n){const t=await Je(st("transactions",n));if(!t.exists())return;const e=Xe(t);await Gr(st("transactions",n)),await Yt(e.account_id),e.to_account_id&&await Yt(e.to_account_id)}async function uv(n){const t=await pt(ht("categories"));let e=St(t);return n&&(e=e.filter(i=>i.type===n)),e}async function ce(n){const t=await uv(n),e=t.filter(r=>!r.parent_id).sort((r,s)=>(r.sort_order||0)-(s.sort_order||0)),i=t.filter(r=>r.parent_id);return e.map(r=>({...r,children:i.filter(s=>s.parent_id===r.id).sort((s,a)=>(s.sort_order||0)-(a.sort_order||0))}))}async function dv(n){const t=Sn(),e={name:n.name,icon:n.icon||"📦",color:n.color||"#6366f1",type:n.type,parent_id:n.parent_id||null,is_default:!1,sort_order:n.sort_order||0,created_at:new Date().toISOString()};return await Ri(st("categories",t),e),{id:t,...e}}async function hv(n){await Gr(st("categories",n))}async function Xo(){const n=await pt(ht("fixed_costs"));return St(n).map(Ht)}async function pv(n){const t=Sn(),e={name:n.name,amount:parseFloat(n.amount),type:n.type,frequency:n.frequency||"monthly",day_of_month:n.day_of_month||null,month_of_year:n.month_of_year||null,account_id:n.account_id||null,to_account_id:n.to_account_id||null,category_id:n.category_id||null,start_date:n.start_date||null,end_date:n.end_date||null,is_active:!0,created_at:new Date().toISOString()};return await Ri(st("fixed_costs",t),e),{id:t,...e}}async function fv(n,t){return await Rn(st("fixed_costs",n),{...t,updated_at:new Date().toISOString()}),Ht(Xe(await Je(st("fixed_costs",n))))}async function mv(n){await Gr(st("fixed_costs",n))}async function Fd(){const n=await pt(ht("wishlist"));return St(n).map(Ht).sort((t,e)=>(t.priority||2)-(e.priority||2))}async function gv(n){const t=Sn(),e={name:n.name,price:parseFloat(n.price)||null,url:n.url||null,notes:n.notes||null,priority:n.priority||2,status:n.status||"wanted",icon:n.icon||"🛍️",track_account_id:n.track_account_id||null,created_at:new Date().toISOString(),updated_at:new Date().toISOString()};return await Ri(st("wishlist",t),e),{id:t,...e}}async function Ud(n,t){return await Rn(st("wishlist",n),{...t,updated_at:new Date().toISOString()}),Ht(Xe(await Je(st("wishlist",n))))}async function _v(n){await Gr(st("wishlist",n))}async function yv(n){const[t,e,i]=await Promise.all([Ft(),pt(ht("transactions")),pt(ht("categories"))]),r=St(e).map(Ht),s=St(i),a=Object.fromEntries(s.map(y=>[y.id,y])),l=Object.fromEntries(t.map(y=>[y.id,y])),u=new Date().getFullYear().toString(),h=r.filter(y=>{var w;return(w=y.date)==null?void 0:w.startsWith(n)}),[f,b]=n.split("-").map(Number),m=new Date(f,b-2,1),A=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}`,R=r.filter(y=>{var w;return(w=y.date)==null?void 0:w.startsWith(A)}),D=r.filter(y=>{var w;return(w=y.date)==null?void 0:w.startsWith(u)});function k(y){return{income:y.filter(w=>w.type==="income").reduce((w,_)=>w+_.amount,0),expenses:y.filter(w=>w.type==="expense").reduce((w,_)=>w+_.amount,0),savings:y.filter(w=>w.type==="savings").reduce((w,_)=>w+_.amount,0),tx_count:y.length}}const L=[];for(let y=5;y>=0;y--){const w=new Date(f,b-1-y,1),_=`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}`,J=k(r.filter($t=>{var Zt;return(Zt=$t.date)==null?void 0:Zt.startsWith(_)}));L.push({month:_,...J})}const U=h.filter(y=>y.type==="expense"),C={};for(const y of U){const w=a[y.category_id],_=y.category_id||"uncategorized";C[_]||(C[_]={name:(w==null?void 0:w.name)||"Other",icon:(w==null?void 0:w.icon)||"📦",color:(w==null?void 0:w.color)||"#94a3b8",total:0}),C[_].total+=y.amount}const B=Object.values(C).sort((y,w)=>w.total-y.total).slice(0,5),tt=h.filter(y=>y.type==="income"),H={};for(const y of tt){const w=a[y.category_id],_=y.category_id||"uncategorized";H[_]||(H[_]={name:(w==null?void 0:w.name)||"Other",icon:(w==null?void 0:w.icon)||"💰",color:(w==null?void 0:w.color)||"#34C759",total:0}),H[_].total+=y.amount}const I=Object.values(H).sort((y,w)=>w.total-y.total).slice(0,5),g=h.sort((y,w)=>w.date>y.date?1:-1).slice(0,10).map(y=>{var w,_,J,$t,Zt;return{...y,account_name:((w=l[y.account_id])==null?void 0:w.name)||"",to_account_name:y.to_account_id?((_=l[y.to_account_id])==null?void 0:_.name)||"":null,category_name:((J=a[y.category_id])==null?void 0:J.name)||null,category_icon:(($t=a[y.category_id])==null?void 0:$t.icon)||null,category_color:((Zt=a[y.category_id])==null?void 0:Zt.color)||null}}),v=t.filter(y=>y.is_active&&y.type!=="credit_card").reduce((y,w)=>y+w.balance,0),E=t.filter(y=>y.goal_amount&&y.is_active);return{this_month:k(h),prev_month:k(R),ytd:{...k(D),tx_count:D.length},last6months:L,accounts:t.filter(y=>y.is_active),recent_transactions:g,category_breakdown:B,income_breakdown:I,savings_goals:E,net_worth:v,this_year:u}}async function vv(n,t){var L,U;const e="imp_"+Date.now();let i=0,r=0;const s=[],a=[],l=await pt(ht("accounts")),u=St(l),h={};for(const C of u)C.iban&&(h[C.iban.replace(/\s/g,"").toUpperCase()]=C.id);const f=u.find(C=>C.id===n),b=((L=f==null?void 0:f.iban)==null?void 0:L.replace(/\s/g,"").toUpperCase())||"",m=/\b[A-Z]{2}\d{2}[A-Z0-9]{4,30}\b/g,A=await pt(ht("transactions")),R=St(A).map(Ht),D=Ar(wn),k=[];for(const C of t)try{if(!C.date||!C.amount||C.amount===0){r++;continue}let B=C.type||"expense",tt=C.to_account_id||null,H=null;const I=[C.description,C.note].filter(Boolean).join(" "),g=[...new Set((I.match(m)||[]).map(J=>J.replace(/\s/g,"").toUpperCase()))];for(const J of g)if(J!==b)if(h[J]){tt=h[J],B="transfer";break}else H=J;const v=Sn(),E={account_id:n,to_account_id:tt,amount:Math.abs(C.amount),type:B,description:C.description||null,note:C.note||null,date:C.date,import_id:e,category_id:null,created_at:new Date().toISOString(),updated_at:new Date().toISOString()},y=st("transactions",v);D.set(y,E),k.push({id:v,...E}),H&&!tt&&s.push({tx_id:v,date:C.date,amount:C.amount,type:B,description:C.description,unknown_iban:H});const w=new Date(C.date).getTime(),_=R.filter(J=>J.import_id!==e&&J.account_id!==n&&Math.abs(J.amount-Math.abs(C.amount))<.01&&Math.abs(new Date(J.date).getTime()-w)<=2*864e5);for(const J of _){const $t=((U=u.find(Zt=>Zt.id===J.account_id))==null?void 0:U.name)||"?";a.push({imported_tx:{id:v,date:C.date,amount:Math.abs(C.amount),type:B,description:C.description},existing_tx:{id:J.id,date:J.date,amount:J.amount,type:J.type,description:J.description,account_name:$t}})}i++}catch{r++}return await D.commit(),await Yt(n),{session_id:e,imported:i,skipped:r,pending_review:s,possible_duplicates:a}}async function wv(n,t){await Rn(st("transactions",n),{type:"transfer",to_account_id:t||null,updated_at:new Date().toISOString()});const e=await Je(st("transactions",n)),i=Xe(e);await Yt(i.account_id),i.to_account_id&&await Yt(i.to_account_id)}async function bv(){const n=["accounts","transactions","fixed_costs","wishlist","import_sessions"];for(const i of n){const r=await pt(ht(i)),s=Ar(wn);r.docs.forEach(a=>s.delete(a.ref)),await s.commit()}const t=await pt(ht("categories")),e=Ar(wn);t.docs.filter(i=>!i.data().is_default).forEach(i=>e.delete(i.ref)),await e.commit()}async function Ev(){if((await pt(ht("categories"))).size>0)return;const t=Ar(wn),e=[{id:"cat_p_housing",name:"Housing",icon:"🏠",color:"#ef4444",type:"expense",sort_order:1},{id:"cat_p_transport",name:"Transport",icon:"🚗",color:"#f97316",type:"expense",sort_order:2},{id:"cat_p_food",name:"Food & Drink",icon:"🍽️",color:"#eab308",type:"expense",sort_order:3},{id:"cat_p_health",name:"Health",icon:"💊",color:"#10b981",type:"expense",sort_order:4},{id:"cat_p_personal",name:"Personal",icon:"👤",color:"#ec4899",type:"expense",sort_order:5},{id:"cat_p_leisure",name:"Leisure",icon:"🎬",color:"#6366f1",type:"expense",sort_order:6},{id:"cat_p_finance",name:"Finance",icon:"🏦",color:"#64748b",type:"expense",sort_order:7},{id:"cat_p_other_exp",name:"Other",icon:"📦",color:"#94a3b8",type:"expense",sort_order:8},{id:"cat_p_work",name:"Work",icon:"💼",color:"#22c55e",type:"income",sort_order:1},{id:"cat_p_returns",name:"Returns",icon:"📈",color:"#10b981",type:"income",sort_order:2},{id:"cat_p_other_inc",name:"Other Income",icon:"🎁",color:"#34d399",type:"income",sort_order:3},{id:"cat_p_savings",name:"Savings",icon:"🔒",color:"#8b5cf6",type:"savings",sort_order:1}],i=[{id:"cat_rent",name:"Rent / Mortgage",icon:"🏠",color:"#ef4444",type:"expense",parent_id:"cat_p_housing",sort_order:1},{id:"cat_utilities",name:"Utilities",icon:"⚡",color:"#ef4444",type:"expense",parent_id:"cat_p_housing",sort_order:2},{id:"cat_internet",name:"Internet & Phone",icon:"📡",color:"#ef4444",type:"expense",parent_id:"cat_p_housing",sort_order:3},{id:"cat_fuel",name:"Fuel",icon:"⛽",color:"#f97316",type:"expense",parent_id:"cat_p_transport",sort_order:1},{id:"cat_publictx",name:"Public Transport",icon:"🚌",color:"#f97316",type:"expense",parent_id:"cat_p_transport",sort_order:2},{id:"cat_groceries",name:"Groceries",icon:"🛒",color:"#eab308",type:"expense",parent_id:"cat_p_food",sort_order:1},{id:"cat_dining",name:"Dining Out",icon:"🍔",color:"#eab308",type:"expense",parent_id:"cat_p_food",sort_order:2},{id:"cat_coffee",name:"Coffee & Drinks",icon:"☕",color:"#eab308",type:"expense",parent_id:"cat_p_food",sort_order:3},{id:"cat_doctor",name:"Doctor / Pharmacy",icon:"💊",color:"#10b981",type:"expense",parent_id:"cat_p_health",sort_order:1},{id:"cat_clothing",name:"Clothing",icon:"👕",color:"#ec4899",type:"expense",parent_id:"cat_p_personal",sort_order:1},{id:"cat_haircut",name:"Personal Care",icon:"✂️",color:"#ec4899",type:"expense",parent_id:"cat_p_personal",sort_order:2},{id:"cat_entertain",name:"Entertainment",icon:"🎬",color:"#6366f1",type:"expense",parent_id:"cat_p_leisure",sort_order:1},{id:"cat_sport",name:"Sport & Fitness",icon:"🏋️",color:"#6366f1",type:"expense",parent_id:"cat_p_leisure",sort_order:2},{id:"cat_travel",name:"Travel",icon:"✈️",color:"#6366f1",type:"expense",parent_id:"cat_p_leisure",sort_order:3},{id:"cat_subscript",name:"Subscriptions",icon:"📱",color:"#64748b",type:"expense",parent_id:"cat_p_finance",sort_order:1},{id:"cat_salary",name:"Salary",icon:"💼",color:"#22c55e",type:"income",parent_id:"cat_p_work",sort_order:1},{id:"cat_freelance",name:"Freelance",icon:"💻",color:"#22c55e",type:"income",parent_id:"cat_p_work",sort_order:2},{id:"cat_sav_emerg",name:"Emergency Fund",icon:"🛡️",color:"#8b5cf6",type:"savings",parent_id:"cat_p_savings",sort_order:1},{id:"cat_sav_invest",name:"Investments",icon:"📈",color:"#8b5cf6",type:"savings",parent_id:"cat_p_savings",sort_order:2}];for(const r of e)t.set(st("categories",r.id),{...r,parent_id:null,is_default:!0,created_at:new Date().toISOString()});for(const r of i)t.set(st("categories",r.id),{...r,is_default:!0,created_at:new Date().toISOString()});await t.commit()}const M={accounts:[],currentPage:"dashboard",dashMonth:new Date().toISOString().slice(0,7),dashView:"month",categoryTree:{expense:[],income:[],savings:[]}},zt={account_id:"",type:"",month:new Date().toISOString().slice(0,7),search:"",offset:0};async function Iv(){M.accounts=await Ft(),Yr("dashboard")}const $={currency(n,t=!1){if(n==null)return"€0,00";const i=Math.abs(n).toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2});return t?(n>=0?"+":"-")+"€"+i:"€"+i},dateShort(n){if(!n)return"";const[t,e,i]=n.split("-");return`${i}/${e}/${t}`}},Tv={dashboard:"Overview",accounts:"Accounts",transactions:"Transactions","fixed-costs":"Fixed Costs",more:"More","savings-goals":"Goals & Wishlist",projection:"Future Balance",categories:"Categories",import:"Import CSV",calculator:"Calculator"},Av=new Set(["savings-goals","projection","categories","import","calculator"]);async function Yr(n){M.currentPage=n,document.getElementById("page-title").textContent=Tv[n]||n,document.getElementById("header-actions").innerHTML="";const t=Av.has(n)?"more":n;document.querySelectorAll(".tab-item").forEach(i=>{i.classList.toggle("active",i.dataset.page===t)}),Bd();const e=document.getElementById("content-area");switch(e.innerHTML='<div style="padding:40px 0;text-align:center;color:var(--text-tertiary)">Loading…</div>',M.accounts=await Ft(),n){case"dashboard":await ke();break;case"accounts":await Zo();break;case"transactions":await Rv();break;case"fixed-costs":await Jr();break;case"more":await Sv();break;case"savings-goals":await Cn();break;case"projection":await Cv();break;case"categories":await ta();break;case"import":await Pv();break;case"calculator":kv();break}document.getElementById("scroll-area").scrollTo({top:0,behavior:"instant"})}window.navigate=Yr;function Bd(){const n=document.getElementById("tab-pill"),t=document.querySelector(".tab-item.active");if(!t||!n)return;const i=document.getElementById("tab-bar").getBoundingClientRect(),r=t.getBoundingClientRect();n.style.left=r.left-i.left+6+"px",n.style.width=r.width-12+"px"}window.addEventListener("resize",Bd);function Y(n,t="info"){const e=document.createElement("div");e.className=`toast ${t}`,e.textContent=n,document.getElementById("toast-container").appendChild(e),setTimeout(()=>e.remove(),3e3)}window.toast=Y;function Ut(n,t,e=""){const i="modal_"+Date.now(),r=e.replace(/__MODAL_ID__/g,i),s=document.createElement("div");return s.className="modal-backdrop",s.id=i,s.innerHTML=`
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <div class="modal-title">${n}</div>
      ${t}
      ${r?`<div class="modal-actions">${r}</div>`:""}
    </div>`,s.addEventListener("click",a=>{a.target===s&&Pt(i)}),document.body.appendChild(s),i}function Pt(n){var t;(t=document.getElementById(n))==null||t.remove()}window.showModal=Ut;window.closeModal=Pt;async function ke(){const n=await yv(M.dashMonth),t=n.this_month,e=n.prev_month,i=n.ytd,r=(t.income||0)-(t.expenses||0);(e.income||0)-(e.expenses||0);const s=t.income>0?Math.round(t.savings/t.income*100):0;function a(m,A){if(!A)return"";const R=Math.round((m-A)/A*100);return`<div style="font-size:11px;font-weight:600;color:${R>=0?"var(--tint-green)":"var(--tint-red)"};margin-top:2px">${R>=0?"▲":"▼"} ${Math.abs(R)}% vs last month</div>`}function l(m,A,R){const D=m.map(L=>L[A]||0),k=Math.max(...D,1);return`<svg viewBox="0 0 60 20" style="width:60px;height:20px;display:block">
      ${D.map((L,U)=>{const C=U/(D.length-1)*54+3,B=18-L/k*15;return U===0?`M ${C} ${B}`:`L ${C} ${B}`}).join(" ")}
      <path d="${D.map((L,U)=>{const C=U/(D.length-1)*54+3,B=18-L/k*15;return U===0?`M ${C} ${B}`:`L ${C} ${B}`}).join(" ")}" fill="none" stroke="${R}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}const[u,h]=M.dashMonth.split("-").map(Number),f=M.dashMonth===new Date().toISOString().slice(0,7),b=new Date(u,h-1).toLocaleString("nl-BE",{month:"long",year:"numeric"});document.getElementById("content-area").innerHTML=`

    <!-- MONTH NAV + HERO -->
    <div class="glass-card hero-card" style="margin-bottom:16px">
      <div class="flex-row" style="margin-bottom:14px;gap:8px">
        <button class="btn btn-glass" style="padding:6px 12px;font-size:13px" onclick="shiftDashMonth(-1)">‹</button>
        <div style="flex:1;text-align:center;font-size:13px;font-weight:600;color:var(--text-secondary)">${b}</div>
        <button class="btn btn-glass" style="padding:6px 12px;font-size:13px" ${f?'disabled style="opacity:0.3;padding:6px 12px;font-size:13px"':'onclick="shiftDashMonth(1)"'}>›</button>
        <div class="segment-control">
          <button class="segment-btn ${M.dashView==="month"?"active":""}" onclick="setDashView('month')">Month</button>
          <button class="segment-btn ${M.dashView==="ytd"?"active":""}"  onclick="setDashView('ytd')">YTD</button>
        </div>
      </div>
      <div class="flex-row" style="gap:16px">
        <div style="flex:1">
          <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Net Worth</div>
          <div style="font-size:30px;font-weight:700;letter-spacing:-1px">${$.currency(n.net_worth)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Month balance</div>
          <div style="font-size:22px;font-weight:700;color:${r>=0?"var(--tint-green)":"var(--tint-red)"}">${$.currency(r,!0)}</div>
        </div>
      </div>
    </div>

    <!-- STATS PILLS -->
    <div class="glass-card" style="margin-bottom:16px">
      ${M.dashView==="ytd"?`
        <div style="font-size:11px;color:var(--text-secondary);margin-bottom:10px;text-align:center;font-weight:500">
          Jan – ${new Date().toLocaleString("nl-BE",{month:"short"})} ${n.this_year}
        </div>
        <div class="grid-3" style="gap:10px">
          <div style="background:rgba(52,199,89,0.15);border:1px solid rgba(52,199,89,0.25);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-green);margin-bottom:6px">Income YTD</div>
            <div style="font-size:17px;font-weight:700">${$.currency(i.income||0)}</div>
          </div>
          <div style="background:rgba(255,59,48,0.12);border:1px solid rgba(255,59,48,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-red);margin-bottom:6px">Expenses YTD</div>
            <div style="font-size:17px;font-weight:700">${$.currency(i.expenses||0)}</div>
          </div>
          <div style="background:rgba(175,82,222,0.12);border:1px solid rgba(175,82,222,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-purple);margin-bottom:6px">Savings YTD</div>
            <div style="font-size:17px;font-weight:700">${$.currency(i.savings||0)}</div>
          </div>
        </div>
        <div style="margin-top:10px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08)">
          <div class="flex-row">
            <div style="font-size:12px;color:var(--text-secondary)">Net YTD <span style="color:var(--text-tertiary)">(excl. savings)</span></div>
            <div style="font-size:16px;font-weight:700;margin-left:auto;color:${(i.income||0)-(i.expenses||0)>=0?"var(--tint-green)":"var(--tint-red)"}">
              ${$.currency((i.income||0)-(i.expenses||0),!0)}
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
            <div style="font-size:17px;font-weight:700">${$.currency(t.income||0)}</div>
            ${a(t.income||0,e.income||0)||""}
            <div style="margin-top:8px">${l(n.last6months,"income","var(--tint-green)")}</div>
          </div>
          <div style="background:rgba(255,59,48,0.12);border:1px solid rgba(255,59,48,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-red);margin-bottom:6px">Expenses</div>
            <div style="font-size:17px;font-weight:700">${$.currency(t.expenses||0)}</div>
            ${a(t.expenses||0,e.expenses||0)||""}
            <div style="margin-top:8px">${l(n.last6months,"expenses","var(--tint-red)")}</div>
          </div>
          <div style="background:rgba(175,82,222,0.12);border:1px solid rgba(175,82,222,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-purple);margin-bottom:6px">Saved</div>
            <div style="font-size:17px;font-weight:700">${$.currency(t.savings||0)}</div>
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
      ${n.accounts.map(m=>xv(m)).join("")}
    </div>

    <!-- RECENT TRANSACTIONS + BREAKDOWN -->
    <div class="grid-2" style="gap:16px;margin-bottom:16px">
      <div class="glass-card">
        <div class="flex-row" style="margin-bottom:14px">
          <div class="title-sm">Transactions</div>
          <button class="btn btn-glass" style="margin-left:auto;padding:5px 12px;font-size:12px" onclick="navigate('transactions')">All →</button>
        </div>
        ${n.recent_transactions.length===0?'<div class="empty-state" style="padding:28px 0"><div class="empty-icon">💸</div><h3>No transactions</h3><p>None recorded for this month</p></div>':n.recent_transactions.map(m=>zd(m)).join("")}
      </div>
      <div style="display:flex;flex-direction:column;gap:16px">
        ${n.category_breakdown.length>0?`
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Expenses</div>
            ${ml(n.category_breakdown)}
          </div>`:""}
        ${n.income_breakdown.length>0?`
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Income Sources</div>
            ${ml(n.income_breakdown,"income")}
          </div>`:""}
        ${n.savings_goals.length>0?`
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Savings Goals</div>
            ${n.savings_goals.map(m=>{const A=Math.min(100,Math.round(m.balance/m.goal_amount*100));return`<div style="margin-bottom:12px">
                <div class="flex-row" style="margin-bottom:5px">
                  <div style="font-size:13px;font-weight:500">${m.goal_name||m.name}</div>
                  <div style="font-size:12px;font-weight:700;margin-left:auto;color:var(--tint-blue)">${A}%</div>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:${A}%"></div></div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:3px">${$.currency(m.balance)} of ${$.currency(m.goal_amount)}</div>
              </div>`}).join("")}
          </div>`:""}
      </div>
    </div>
  `}window.shiftDashMonth=n=>{const[t,e]=M.dashMonth.split("-").map(Number),i=new Date(t,e-1+n,1);M.dashMonth=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`,ke()};window.setDashView=n=>{M.dashView=n,ke()};function xv(n){const t=n.color||"#007AFF";return`
    <div class="glass-card glass-card-sm" style="border-color:${t}30;cursor:pointer" onclick="openEditAccount('${n.id}')">
      <div style="font-size:20px;margin-bottom:6px">${n.type==="credit_card"?"💳":n.type==="savings"?"🏦":n.type==="investment"?"📈":"🏦"}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
      <div style="font-size:16px;font-weight:700;color:${t}">${$.currency(n.balance)}</div>
      ${n.goal_amount?`
        <div style="margin-top:8px">
          <div class="progress-track" style="height:3px">
            <div class="progress-fill" style="width:${Math.min(100,n.balance/n.goal_amount*100)}%;background:${t}"></div>
          </div>
        </div>`:""}
    </div>`}function ml(n,t="expense"){const e=n.reduce((i,r)=>i+r.total,0);return n.map(i=>{const r=e>0?Math.round(i.total/e*100):0,s=t==="income"?"var(--tint-green)":"var(--tint-red)";return`<div class="flex-row" style="gap:12px;margin-bottom:10px">
      <div style="font-size:16px;width:24px;text-align:center">${i.icon||"📦"}</div>
      <div style="flex:1;min-width:0">
        <div class="flex-row" style="margin-bottom:4px">
          <div style="font-size:13px;font-weight:500">${i.name||"Other"}</div>
          <div style="margin-left:auto;font-size:13px;font-weight:600;color:${s}">${$.currency(i.total)}</div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${r}%;background:${i.color||s}"></div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--text-tertiary);width:30px;text-align:right">${r}%</div>
    </div>`}).join("")}function zd(n,t){const e=n.type==="transfer"||n.type==="savings",i=e&&n.to_account_id===t,r=n.type==="income"||i,s=n.type==="savings"&&!i,a=n.category_color?n.category_color+"30":e?"rgba(94,92,230,0.18)":"rgba(255,255,255,0.08)",l=r?"+":e?"→":"-",u=r?"var(--tint-green)":s||e?"var(--tint-purple)":"var(--tint-red)",h=e?"🔄":n.category_icon||"💸";let f=n.account_name||"";return e&&n.to_account_name&&(f=i?`← ${n.account_name}`:`→ ${n.to_account_name}`),`
    <div class="tx-row" onclick="openEditTransaction('${n.id}')">
      <div class="tx-icon" style="background:${a}">${h}</div>
      <div class="tx-info">
        <div class="tx-desc">${n.description||n.category_name||(e?"Transfer":"Transaction")}</div>
        <div class="tx-meta">${f} · ${$.dateShort(n.date)}</div>
      </div>
      <div class="tx-amount" style="color:${u}">${l}${$.currency(n.amount)}</div>
    </div>`}async function Zo(){var i;document.getElementById("header-actions").innerHTML='<button class="btn btn-primary" onclick="openAddAccount()">+ Add Account</button>';const n={current:[],savings:[],credit_card:[],investment:[]};for(const r of M.accounts.filter(s=>s.is_active))(i=n[r.type])==null||i.push(r);const t={current:"Current Accounts",savings:"Savings Accounts",credit_card:"Credit Cards",investment:"Investments"};let e="";for(const[r,s]of Object.entries(n))if(s.length){e+=`<div style="font-size:12px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.6px;margin:16px 0 8px">${t[r]}</div>`;for(const a of s){const l=a.color||"#007AFF",u=a.type==="credit_card"&&a.credit_limit?Math.min(100,Math.round(Math.abs(a.balance)/a.credit_limit*100)):null;e+=`
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
              <div style="font-size:18px;font-weight:700;color:${l}">${$.currency(a.balance)}</div>
              ${u!==null?`<div style="font-size:11px;color:var(--text-tertiary)">${u}% of ${$.currency(a.credit_limit)}</div>`:""}
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
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:3px">${$.currency(a.balance)} of ${$.currency(a.goal_amount)}</div>
            </div>`:""}
        </div>`}}e||(e='<div class="empty-state"><div class="empty-icon">💳</div><h3>No accounts yet</h3><p>Add your first account</p><br><button class="btn btn-primary" onclick="openAddAccount()">+ Add Account</button></div>'),document.getElementById("content-area").innerHTML=e}async function Rv(){document.getElementById("header-actions").innerHTML='<button class="btn btn-primary" onclick="openAddTransaction()">+ Add</button>',zt.month||(zt.month=new Date().toISOString().slice(0,7)),await Si()}async function Si(){const n=await Ld({account_id:zt.account_id,type:zt.type,month:zt.month,search:zt.search,limit:50,offset:0}),t=n.rows;document.getElementById("content-area").innerHTML=`
    <div class="glass-card glass-card-sm" style="margin-bottom:16px">
      <div class="flex-row" style="flex-wrap:wrap;gap:10px">
        <select class="select" style="width:auto;flex:1;min-width:150px" onchange="txFilters.account_id=this.value;txFilters.offset=0;renderTxList()">
          <option value="">All Accounts</option>
          ${M.accounts.map(e=>`<option value="${e.id}" ${zt.account_id===e.id?"selected":""}>${e.name}</option>`).join("")}
        </select>
        <select class="select" style="width:auto;flex:1;min-width:130px" onchange="txFilters.type=this.value;txFilters.offset=0;renderTxList()">
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="savings">Savings</option>
          <option value="transfer">Transfer</option>
        </select>
        <input type="month" class="input" style="width:auto;flex:1;min-width:150px" value="${zt.month}" onchange="txFilters.month=this.value;txFilters.offset=0;renderTxList()" />
        <input type="search" class="input" style="width:auto;flex:2;min-width:180px" placeholder="Search…" value="" oninput="txFilters.search=this.value;txFilters.offset=0;renderTxList()" />
      </div>
    </div>
    <div class="glass-card">
      <div class="flex-row" style="margin-bottom:16px">
        <div class="title-sm">${n.total} Transactions</div>
      </div>
      ${t.length===0?'<div class="empty-state"><div class="empty-icon">🔍</div><h3>No transactions</h3><p>Try adjusting filters</p></div>':t.map(e=>zd(e,zt.account_id)).join("")}
      ${n.total>50?`
        <div class="flex-row" style="margin-top:16px;justify-content:center;gap:10px">
          
          <span class="text-secondary text-sm">${Math.floor(zt.offset/50)+1} / ${Math.ceil(n.total/50)}</span>
          ${zt.offset+50<n.total?'<button class="btn btn-glass" onclick="txFilters.offset+=50;renderTxList()">Next →</button>':""}
        </div>`:""}
    </div>`}window.renderTxList=Si;async function Jr(){const n=await Xo(),t=n.filter(f=>f.type==="income"&&f.is_active),e=n.filter(f=>f.type==="expense"&&f.is_active),i=n.filter(f=>f.type==="savings"&&f.is_active);function r(f){return f.reduce((b,m)=>m.frequency==="monthly"?b+m.amount:m.frequency==="yearly"?b+m.amount/12:m.frequency==="weekly"?b+m.amount*4.33:b,0)}const s=r(t),a=r(e),l=r(i),u=s-a;function h(f,b,m){return b.length?b.map(A=>{var k;const R=f==="income"?"var(--tint-green)":f==="savings"?"var(--tint-purple)":"var(--tint-red)",D=A.frequency==="monthly"?"/mo":A.frequency==="yearly"?"/yr":"/wk";return`<div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
        <div style="flex:1">
          <div style="font-size:14px;font-weight:500">${A.name}</div>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">${A.frequency}${A.account_id?` · ${((k=M.accounts.find(L=>L.id===A.account_id))==null?void 0:k.name)||""}`:""}</div>
        </div>
        <div style="font-size:14px;font-weight:700;color:${R};margin-right:10px">${$.currency(A.amount)}${D}</div>
        <button class="btn btn-glass" style="font-size:11px;padding:4px 10px" onclick="openEditFixedCost('${A.id}')">Edit</button>
      </div>`}).join(""):`<div style="font-size:13px;color:var(--text-tertiary);padding:8px 0">${m}</div>`}document.getElementById("content-area").innerHTML=`
    <div class="glass-card glass-card-sm" style="margin-bottom:14px">
      <div class="flex-row" style="gap:16px;flex-wrap:wrap">
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Income</div><div style="font-size:16px;font-weight:700;color:var(--tint-green)">${$.currency(s)}</div></div>
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Expenses</div><div style="font-size:16px;font-weight:700;color:var(--tint-red)">${$.currency(a)}</div></div>
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Fixed Savings</div><div style="font-size:16px;font-weight:700;color:var(--tint-purple)">${$.currency(l)}</div></div>
        <div style="margin-left:auto">
          <div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Net</div>
          <div style="font-size:20px;font-weight:700;color:${u>=0?"var(--tint-green)":"var(--tint-red)"}">${$.currency(u,!0)}</div>
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
    </div>`}async function Cn(){document.getElementById("header-actions").innerHTML='<button class="btn btn-primary" onclick="openAddWishItem()">+ Wish</button>';const n=await Fd(),t=M.accounts.filter(m=>m.goal_amount&&m.is_active),e=M.accounts.filter(m=>!m.goal_amount&&m.type!=="credit_card"&&m.is_active),i=M.accounts.filter(m=>m.type!=="credit_card"&&m.is_active).reduce((m,A)=>m+A.balance,0),r={1:"🔥 High",2:"⭐ Medium",3:"💤 Low"},s={1:"var(--tint-red)",2:"var(--tint-yellow)",3:"var(--text-tertiary)"},a={wanted:"🛍️ Wanted",saving:"💰 Saving",bought:"✅ Bought"},l={wanted:"rgba(255,255,255,0.08)",saving:"rgba(0,122,255,0.12)",bought:"rgba(52,199,89,0.12)"};function u(m){if(!m.price)return"";let A,R;if(m.track_account_id){const C=M.accounts.find(B=>B.id===m.track_account_id);A=C?C.balance:0,R=C?C.name:"Account"}else A=i,R="Total balance";const D=Math.min(100,Math.max(0,Math.round(A/m.price*100))),k=A>=m.price,L=A-m.price,U=k?"var(--tint-green)":D>=66?"var(--tint-blue)":D>=33?"var(--tint-orange)":"var(--tint-red)";return`
      <div style="margin-top:10px">
        <div class="flex-row" style="margin-bottom:5px">
          <div style="font-size:11px;color:var(--text-tertiary)">${R}: ${$.currency(A)}</div>
          <div style="font-size:11px;font-weight:700;color:${U};margin-left:auto">${D}% ${k?"— ready! 🎉":`— ${$.currency(m.price-A)} to go`}</div>
        </div>
        <div class="progress-track" style="height:6px">
          <div class="progress-fill" style="width:${D}%;background:${U}"></div>
        </div>
        <div style="font-size:11px;color:${L>=0?"var(--tint-green)":"var(--tint-red)"};margin-top:5px;font-weight:600">
          After purchase: ${$.currency(L,!0)}
        </div>
      </div>`}let h="";if(t.length>0){h+=`<div class="flex-row" style="margin-bottom:12px"><div class="title-sm">Savings Goals</div></div>
      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px">`;for(const m of t){const A=Math.min(100,Math.round(m.balance/m.goal_amount*100)),R=m.goal_amount-m.balance,D=m.color||"#007AFF";h+=`<div class="glass-card">
        <div class="flex-row" style="margin-bottom:14px">
          <div>
            <div style="font-size:16px;font-weight:600">${m.goal_name||m.name}</div>
            <div style="font-size:12px;color:var(--text-tertiary)">${m.name}${m.goal_deadline?` · by ${$.dateShort(m.goal_deadline)}`:""}</div>
          </div>
          <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openEditAccount('${m.id}')">Edit</button>
        </div>
        <div class="flex-row" style="margin-bottom:10px;gap:12px">
          <div><div style="font-size:11px;color:var(--text-tertiary)">Saved</div><div style="font-size:15px;font-weight:700;color:${D}">${$.currency(m.balance)}</div></div>
          <div><div style="font-size:11px;color:var(--text-tertiary)">Goal</div><div style="font-size:15px;font-weight:700">${$.currency(m.goal_amount)}</div></div>
          <div><div style="font-size:11px;color:var(--text-tertiary)">Remaining</div><div style="font-size:15px;font-weight:700;color:var(--tint-orange)">${$.currency(R)}</div></div>
          <div style="margin-left:auto;font-size:22px;font-weight:700;color:${D}">${A}%</div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${A}%;background:${D}"></div></div>
      </div>`}h+="</div>"}e.length>0&&(h+=`<div class="glass-card glass-card-sm" style="margin-bottom:20px">
      <div style="font-size:13px;font-weight:600;margin-bottom:10px;color:var(--text-secondary)">Set a Goal</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${e.map(m=>`<button class="btn btn-glass" style="font-size:12px" onclick="openSetGoal('${m.id}')">${m.name}</button>`).join("")}
      </div>
    </div>`);const f=n.filter(m=>m.status!=="bought"),b=n.filter(m=>m.status==="bought");if(h+=`<div class="flex-row" style="margin-bottom:12px">
    <div class="title-sm">Wish List</div>
    <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 12px" onclick="openAddWishItem()">+ Add</button>
  </div>`,!f.length&&!b.length)h+='<div class="glass-card"><div class="empty-state" style="padding:32px 0"><div class="empty-icon">🛍️</div><h3>Your wish list is empty</h3><p>Add things you want to save up for</p></div></div>';else{if(f.length){h+='<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">';for(const m of f)h+=`<div class="glass-card glass-card-sm" style="background:${l[m.status]}">
          <div class="flex-row">
            <div style="font-size:24px;width:38px;text-align:center;flex-shrink:0">${m.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:15px;font-weight:600">${m.name}</div>
              <div class="flex-row" style="margin-top:3px;gap:8px">
                ${m.price?`<div style="font-size:13px;font-weight:700;color:var(--tint-blue)">${$.currency(m.price)}</div>`:""}
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
        </div>`;h+="</div>"}if(b.length){h+=`<div style="font-size:12px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:8px">Already Got ✅</div>
        <div style="display:flex;flex-direction:column;gap:8px">`;for(const m of b)h+=`<div class="glass-card glass-card-xs flex-row" style="background:rgba(52,199,89,0.08);opacity:0.7">
          <div style="font-size:18px;width:30px;text-align:center">${m.icon}</div>
          <div style="flex:1;font-size:13px;font-weight:500;text-decoration:line-through;color:var(--text-secondary)">${m.name}</div>
          ${m.price?`<div style="font-size:13px;font-weight:600;color:var(--tint-green)">${$.currency(m.price)}</div>`:""}
          <button class="btn btn-glass" style="font-size:11px;padding:3px 8px;margin-left:8px" onclick="doDeleteWishItem('${m.id}')">✕</button>
        </div>`;h+="</div>"}}document.getElementById("content-area").innerHTML=h}async function Sv(){document.getElementById("header-actions").innerHTML="";function n(t,e,i,r,s){return`<div class="list-row" onclick="navigate('${s}')">
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
    </div>`}async function Cv(){const t=(await Xo()).filter(h=>h.is_active),e=new Date,i=M.accounts.filter(h=>h.type!=="credit_card"&&h.is_active).reduce((h,f)=>h+f.balance,0);function r(h){return h.frequency==="monthly"?h.type==="income"?h.amount:-h.amount:h.frequency==="yearly"?h.type==="income"?h.amount/12:-h.amount/12:h.frequency==="weekly"?h.type==="income"?h.amount*4.33:-h.amount*4.33:0}const s=t.reduce((h,f)=>h+r(f),0),a=[];let l=i;for(let h=1;h<=12;h++){const b=new Date(e.getFullYear(),e.getMonth()+h,1).toLocaleString("nl-BE",{month:"short",year:"numeric"});l+=s,a.push({label:b,balance:l,delta:s})}const u=Math.max(...a.map(h=>Math.abs(h.balance)),1);document.getElementById("content-area").innerHTML=`
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:4px">Starting Balance</div>
      <div style="font-size:28px;font-weight:700">${$.currency(i)}</div>
      <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">Monthly fixed net: <strong style="color:${s>=0?"var(--tint-green)":"var(--tint-red)"}">${$.currency(s,!0)}</strong></div>
    </div>
    <div class="glass-card" style="margin-bottom:16px">
      <div style="display:flex;align-items:flex-end;gap:4px;height:100px;margin-bottom:8px">
        ${a.map(h=>{const f=Math.max(4,Math.round(Math.abs(h.balance)/u*90)),b=h.balance>=0?"var(--tint-blue)":"var(--tint-red)";return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px">
            <div style="width:100%;height:${f}px;background:${b};border-radius:4px 4px 0 0;opacity:0.8"></div>
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
          <div style="font-size:12px;color:${h.delta>=0?"var(--tint-green)":"var(--tint-red)"};margin-right:12px">${$.currency(h.delta,!0)}</div>
          <div style="font-size:14px;font-weight:700;color:${h.balance>=0?"var(--tint-blue)":"var(--tint-red)"}">${$.currency(h.balance)}</div>
        </div>`).join("")}
    </div>`}async function ta(){const[n,t,e]=await Promise.all([ce("expense"),ce("income"),ce("savings")]);M.categoryTree={expense:n,income:t,savings:e};function i(r,s){return r.length?r.map(a=>`
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
    </div>`}window.toggleCatChildren=(n,t)=>{const e=document.getElementById(n);if(!e)return;const i=e.style.display==="none";e.style.display=i?"flex":"none";const r=document.getElementById(t);r&&(r.style.transform=i?"rotate(0deg)":"rotate(-90deg)")};async function Pv(){document.getElementById("header-actions").innerHTML="",document.getElementById("content-area").innerHTML=`
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:14px">📥 Import CSV</div>
      <div class="input-group">
        <label class="input-label">Account</label>
        <select class="select" id="imp-account">
          ${M.accounts.filter(n=>n.is_active).map(n=>`<option value="${n.id}">${n.name}</option>`).join("")}
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
    <div id="imp-preview" style="display:none"></div>`}window.parseImportCSV=async()=>{const n=document.getElementById("imp-file").files[0];if(!n){Y("Select a CSV file","warning");return}const t=await n.text();let e=",";for(const u of[";",",","	","|"])if(t.split(`
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
    </div>`};window.executeImport=async()=>{var L,U;const{text:n,delimiter:t,accountId:e}=window._importState,i=document.getElementById("map-date").value,r=document.getElementById("map-amount").value,s=document.getElementById("map-description").value,a=document.getElementById("map-note").value,l=document.getElementById("imp-date-fmt2").value;if(!i||!r){Y("Date and Amount columns required","warning");return}function u(C){if(!C)return null;if(l==="DD/MM/YYYY"){const[B,tt,H]=C.split(/[\/\-\.]/);return`${H}-${tt==null?void 0:tt.padStart(2,"0")}-${B==null?void 0:B.padStart(2,"0")}`}if(l==="MM/DD/YYYY"){const[B,tt,H]=C.split(/[\/\-\.]/);return`${H}-${B==null?void 0:B.padStart(2,"0")}-${tt==null?void 0:tt.padStart(2,"0")}`}return C}const h=n.trim().split(`
`),f=h[0].split(t).map(C=>C.trim().replace(/^"|"$/g,"")),b=[];for(const C of h.slice(1)){if(!C.trim())continue;const B=C.split(t).map(v=>v.trim().replace(/^"|"$/g,"")),tt=Object.fromEntries(f.map((v,E)=>[v,B[E]||""])),H=u(tt[i]);if(!H||isNaN(new Date(H).getTime()))continue;const I=(tt[r]||"0").replace(/\s/g,"").replace(/[^\d\-\+\.,]/g,"").replace(",","."),g=parseFloat(I);isNaN(g)||b.push({date:H,amount:Math.abs(g),type:g>=0?"income":"expense",description:s?tt[s]:null,note:a?tt[a]:null})}if(!b.length){Y("No valid rows found","warning");return}Y(`Importing ${b.length} rows…`,"info");const m=await vv(e,b);M.accounts=await Ft();const A=((L=m.possible_duplicates)==null?void 0:L.length)>0,R=((U=m.pending_review)==null?void 0:U.length)>0;if(!A&&!R){Y(`✅ Imported ${m.imported} transactions`,"success"),Yr("transactions");return}Y(`Imported ${m.imported} — review needed`,"info");const D=M.accounts.filter(C=>C.id!==e).map(C=>`<option value="${C.id}">${C.name}</option>`).join("");let k=`<div style="font-size:15px;font-weight:600;margin-bottom:16px">✅ ${m.imported} imported · ${m.skipped} skipped</div>`;R&&(k+=`<div class="title-sm" style="margin-bottom:10px">🔗 Unknown IBANs</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      ${m.pending_review.map(C=>`
        <div class="glass-card glass-card-sm" style="background:rgba(255,149,0,0.10);border-color:rgba(255,149,0,0.25)" id="pr_${C.tx_id}">
          <div class="flex-row" style="margin-bottom:8px">
            <div><div style="font-size:14px;font-weight:600">${C.description||"Transaction"}</div>
            <div style="font-size:12px;color:var(--text-tertiary)">${$.dateShort(C.date)} · ${$.currency(C.amount)} · <code style="font-size:11px">${C.unknown_iban}</code></div></div>
          </div>
          <div class="flex-row" style="gap:8px">
            <select class="select" id="resolve-acc-${C.tx_id}" style="flex:1">
              <option value="">Keep as-is</option>${D}
            </select>
            <button class="btn btn-primary" style="font-size:12px" onclick="doResolveTransfer('${C.tx_id}')">Link</button>
          </div>
        </div>`).join("")}
      </div>`),A&&(k+=`<div class="title-sm" style="margin-bottom:10px">⚠️ Possible Duplicates</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      ${m.possible_duplicates.map(C=>`
        <div class="glass-card glass-card-sm" style="background:rgba(255,59,48,0.08);border-color:rgba(255,59,48,0.2)">
          <div class="flex-row" style="gap:10px">
            <div style="flex:1;padding:8px;border-radius:10px;background:rgba(255,255,255,0.05)">
              <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:3px">New</div>
              <div style="font-size:13px;font-weight:600">${C.imported_tx.description||"—"}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${$.dateShort(C.imported_tx.date)} · ${$.currency(C.imported_tx.amount)}</div>
              <button class="btn btn-danger" style="font-size:11px;width:100%;justify-content:center;margin-top:6px" onclick="doDeleteDuplicate('${C.imported_tx.id}',this)">Delete new</button>
            </div>
            <div style="font-size:18px;align-self:center;color:var(--text-tertiary)">↔</div>
            <div style="flex:1;padding:8px;border-radius:10px;background:rgba(255,255,255,0.05)">
              <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:3px">Existing · ${C.existing_tx.account_name}</div>
              <div style="font-size:13px;font-weight:600">${C.existing_tx.description||"—"}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${$.dateShort(C.existing_tx.date)} · ${$.currency(C.existing_tx.amount)}</div>
              <button class="btn btn-danger" style="font-size:11px;width:100%;justify-content:center;margin-top:6px" onclick="doDeleteDuplicate('${C.existing_tx.id}',this)">Delete existing</button>
            </div>
          </div>
        </div>`).join("")}
      </div>`),k+=`<button class="btn btn-primary" style="width:100%;justify-content:center" onclick="navigate('transactions')">Done →</button>`,document.getElementById("content-area").innerHTML=k};window.doResolveTransfer=async n=>{var e,i;const t=(e=document.getElementById("resolve-acc-"+n))==null?void 0:e.value;await wv(n,t||null),(i=document.getElementById("pr_"+n))==null||i.remove(),M.accounts=await Ft(),Y("Transfer linked","success")};window.doDeleteDuplicate=async(n,t)=>{var e;await $d(n),(e=t.closest(".glass-card"))==null||e.remove(),M.accounts=await Ft(),Y("Deleted","info")};let Me=[],Gn="";function kv(){document.getElementById("header-actions").innerHTML="";const n=M.accounts.filter(r=>r.type!=="credit_card"&&r.is_active),t=n.reduce((r,s)=>r+s.balance,0);function e(){var r;return Gn?((r=n.find(s=>s.id===Gn))==null?void 0:r.balance)||0:t}function i(){const r=e(),s=Me.reduce((A,R)=>R.type==="income"?A+R.amount:A-R.amount,r),a=s-r,l=s>=0?"var(--tint-green)":"var(--tint-red)",u=a>=0?"var(--tint-green)":"var(--tint-red)",h=document.getElementById("calc-result"),f=document.getElementById("calc-diff"),b=document.getElementById("calc-base");h&&(h.textContent=$.currency(s),h.style.color=l),f&&(f.textContent=$.currency(a,!0),f.style.color=u),b&&(b.textContent=$.currency(r));const m=document.getElementById("calc-items");m&&(m.innerHTML=Me.length===0?'<div style="text-align:center;padding:24px 0;color:var(--text-tertiary);font-size:13px">Add expenses or income below</div>':Me.map(A=>`
          <div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
            <div style="width:26px;height:26px;border-radius:8px;background:${A.type==="income"?"rgba(52,199,89,0.18)":"rgba(255,59,48,0.15)"};display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">${A.type==="income"?"＋":"－"}</div>
            <div style="flex:1;font-size:14px;font-weight:500;padding:0 10px">${A.label}</div>
            <div style="font-size:14px;font-weight:700;color:${A.type==="income"?"var(--tint-green)":"var(--tint-red)"}">${A.type==="income"?"+":"-"}${$.currency(A.amount)}</div>
            <button onclick="calcRemove('${A.id}')" style="background:none;border:none;color:var(--text-tertiary);font-size:17px;cursor:pointer;padding:0 0 0 10px">×</button>
          </div>`).join(""))}document.getElementById("content-area").innerHTML=`
    <div class="glass-card hero-card" style="margin-bottom:16px;text-align:center;padding:24px">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:var(--text-secondary);margin-bottom:6px">Resulting Balance</div>
      <div id="calc-result" style="font-size:44px;font-weight:700;letter-spacing:-1.5px;line-height:1">${$.currency(e())}</div>
      <div style="margin-top:8px;display:flex;align-items:center;justify-content:center;gap:12px">
        <div style="font-size:13px;color:var(--text-secondary)">Starting: <span id="calc-base">${$.currency(e())}</span></div>
        <div style="font-size:13px;font-weight:700" id="calc-diff">+€0,00</div>
      </div>
    </div>
    <div class="glass-card glass-card-sm" style="margin-bottom:14px">
      <div class="input-group">
        <label class="input-label">Starting from</label>
        <select class="select" id="calc-account-sel" onchange="calcSetAccount(this.value)">
          <option value="">📊 Total balance — ${$.currency(t)}</option>
          ${n.map(r=>`<option value="${r.id}" ${Gn===r.id?"selected":""}>${r.name} (${$.currency(r.balance)})</option>`).join("")}
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
    <button class="btn btn-glass" onclick="calcClear()" style="width:100%;justify-content:center;color:var(--tint-red)">🗑 Clear all</button>`,window._calcType="expense",i(),window.calcSetAccount=r=>{Gn=r,i()},window.calcRemove=r=>{Me=Me.filter(s=>s.id!==r),i()},window.calcClear=()=>{Me=[],Gn="",document.getElementById("calc-account-sel").value="",i()},window.calcSetType=r=>{window._calcType=r,document.getElementById("calc-type-exp").classList.toggle("active",r==="expense"),document.getElementById("calc-type-inc").classList.toggle("active",r==="income")},window.calcAdd=()=>{const r=document.getElementById("calc-label").value.trim(),s=parseFloat(document.getElementById("calc-amount").value);if(!s||isNaN(s)||s<=0){Y("Enter an amount","warning");return}Me.push({id:"c"+Date.now(),label:r||(window._calcType==="income"?"Income":"Expense"),amount:s,type:window._calcType||"expense"}),document.getElementById("calc-label").value="",document.getElementById("calc-amount").value="",i()}}function Dv(){Ut("New Account",`
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
    <button class="btn btn-primary" onclick="submitAccount('__MODAL_ID__')">Add Account</button>`),document.getElementById("acc-type").addEventListener("change",function(){document.getElementById("credit-limit-group").style.display=this.value==="credit_card"?"block":"none"})}window.openAddAccount=Dv;window.selectColor=(n,t)=>{document.querySelectorAll("[data-color]").forEach(i=>i.style.border="2px solid transparent"),t.style.border="2px solid white";const e=document.getElementById("acc-color");e&&(e.value=n)};window.submitAccount=async n=>{var e,i,r;const t=document.getElementById("acc-name").value.trim();if(!t){Y("Name required","warning");return}await ov({name:t,type:document.getElementById("acc-type").value,balance:parseFloat(document.getElementById("acc-balance").value)||0,balance_date:document.getElementById("acc-balance-date").value,color:document.getElementById("acc-color").value,credit_limit:((e=document.getElementById("acc-credit-limit"))==null?void 0:e.value)||null,iban:((r=(i=document.getElementById("acc-iban"))==null?void 0:i.value)==null?void 0:r.trim())||null}),Y("Account created","success"),Pt(n),M.accounts=await Ft(),M.currentPage==="accounts"?await Zo():await ke()};function Vv(n){const t=M.accounts.find(e=>e.id===n);t&&Ut("Edit Account",`
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
      <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Current computed balance: <strong style="color:var(--text-primary)">${$.currency(t.balance)}</strong></div>
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
    <button class="btn btn-primary" onclick="submitEditAccount('${n}','__MODAL_ID__')">Save</button>`)}window.openEditAccount=Vv;window.submitEditAccount=async(n,t)=>{var a,l;const e={name:document.getElementById("edit-acc-name").value,iban:((l=(a=document.getElementById("edit-acc-iban"))==null?void 0:a.value)==null?void 0:l.trim())||null},i=document.getElementById("edit-acc-balance"),r=document.getElementById("edit-acc-balance-date"),s=document.getElementById("edit-acc-limit");(i==null?void 0:i.value)!==""&&(e.balance=parseFloat(i.value)),r!=null&&r.value&&(e.balance_date=r.value),(s==null?void 0:s.value)!==""&&(e.credit_limit=parseFloat(s.value)),await Md(n,e),Y("Account updated","success"),Pt(t),M.accounts=await Ft(),M.currentPage==="accounts"?await Zo():await ke()};async function Nv(n={}){const t=new Date().toISOString().split("T")[0],e=M.categoryTree.expense.length?M.categoryTree.expense:await ce("expense"),i=M.categoryTree.income.length?M.categoryTree.income:await ce("income"),r=M.categoryTree.savings.length?M.categoryTree.savings:await ce("savings");M.categoryTree={expense:e,income:i,savings:r};function s(a){return a.map(l=>`
      <optgroup label="${l.icon} ${l.name}">
        ${l.children.map(u=>`<option value="${u.id}">${u.icon} ${u.name}</option>`).join("")}
      </optgroup>`).join("")}Ut("Add Transaction",`
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
          ${M.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}" ${n.account_id===a.id?"selected":""}>${a.name}</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="input-group" id="tx-to-account-group" style="display:none">
      <label class="input-label">To Account</label>
      <select class="select" id="tx-to-account">
        ${M.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}">${a.name}</option>`).join("")}
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
    <button class="btn btn-primary" onclick="submitAddTransaction('__MODAL_ID__')">Add</button>`),window.onTxTypeChange=a=>{const l=document.getElementById("tx-to-account-group"),u=document.getElementById("tx-cat");if(l&&(l.style.display=["savings","transfer"].includes(a)?"block":"none"),u){u.innerHTML='<option value="">— none —</option>';const h=a==="savings"?r:a==="income"?i:a==="expense"?e:[];u.innerHTML+=s(h)}},onTxTypeChange(n.type||"expense")}window.openAddTransaction=Nv;window.submitAddTransaction=async n=>{const t=document.getElementById("tx-type").value,e=parseFloat(document.getElementById("tx-amount").value),i=document.getElementById("tx-date").value,r=document.getElementById("tx-account").value;if(!e||!i||!r){Y("Amount, date and account required","warning");return}await cv({account_id:r,to_account_id:["savings","transfer"].includes(t)?document.getElementById("tx-to-account").value:null,amount:e,type:t,date:i,category_id:document.getElementById("tx-cat").value||null,description:document.getElementById("tx-desc").value||null}),Y("Transaction added","success"),Pt(n),M.accounts=await Ft(),M.currentPage==="transactions"?await Si():await ke()};async function Ov(n){const t=M.categoryTree.expense.length?M.categoryTree.expense:await ce("expense"),e=M.categoryTree.income.length?M.categoryTree.income:await ce("income"),i=M.categoryTree.savings.length?M.categoryTree.savings:await ce("savings"),s=(await Ld({})).rows.find(u=>u.id===n);if(!s){Y("Transaction not found","warning");return}function a(u,h){return u.map(f=>`
      <optgroup label="${f.icon} ${f.name}">
        ${f.children.map(b=>`<option value="${b.id}" ${b.id===h?"selected":""}>${b.icon} ${b.name}</option>`).join("")}
      </optgroup>`).join("")}function l(u,h){return`<option value="">— none —</option>${a(u==="savings"?i:u==="income"?e:t,h)}`}Ut("Edit Transaction",`
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
        ${M.accounts.filter(u=>u.is_active).map(u=>`<option value="${u.id}" ${u.id===s.to_account_id?"selected":""}>${u.name}</option>`).join("")}
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
    <button class="btn btn-primary" onclick="submitEditTransaction('${n}','__MODAL_ID__')">Save</button>`),window.onEditTxTypeChange=u=>{const h=document.getElementById("edit-tx-to-account-group"),f=document.getElementById("edit-tx-cat");h&&(h.style.display=["savings","transfer"].includes(u)?"block":"none"),f&&(f.innerHTML=l(u,null))}}window.openEditTransaction=Ov;window.submitEditTransaction=async(n,t)=>{const e=document.getElementById("edit-tx-type").value;await lv(n,{type:e,amount:parseFloat(document.getElementById("edit-tx-amount").value),date:document.getElementById("edit-tx-date").value,category_id:document.getElementById("edit-tx-cat").value||null,description:document.getElementById("edit-tx-desc").value||null,to_account_id:["savings","transfer"].includes(e)?document.getElementById("edit-tx-to-account").value:null}),Y("Saved","success"),Pt(t),M.accounts=await Ft(),M.currentPage==="transactions"?await Si():await ke()};window.doDeleteTransaction=async(n,t)=>{await $d(n),Y("Deleted","info"),Pt(t),M.accounts=await Ft(),M.currentPage==="transactions"?await Si():await ke()};function Mv(n="expense"){Ut("New Fixed Cost",`
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
        ${M.accounts.filter(t=>t.is_active).map(t=>`<option value="${t.id}">${t.name}</option>`).join("")}
      </select>
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddFixedCost('__MODAL_ID__')">Add</button>`)}window.openAddFixedCost=Mv;window.submitAddFixedCost=async n=>{const t=document.getElementById("fc-name").value.trim(),e=parseFloat(document.getElementById("fc-amount").value);if(!t||!e){Y("Name and amount required","warning");return}await pv({name:t,amount:e,type:document.getElementById("fc-type").value,frequency:document.getElementById("fc-freq").value,account_id:document.getElementById("fc-account").value||null}),Y("Fixed cost added","success"),Pt(n),await Jr()};async function Lv(n){const e=(await Xo()).find(i=>i.id===n);e&&Ut("Edit Fixed Cost",`
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
    <button class="btn btn-primary" onclick="submitEditFixedCost('${n}','__MODAL_ID__')">Save</button>`)}window.openEditFixedCost=Lv;window.submitEditFixedCost=async(n,t)=>{await fv(n,{name:document.getElementById("efc-name").value,type:document.getElementById("efc-type").value,amount:parseFloat(document.getElementById("efc-amount").value),frequency:document.getElementById("efc-freq").value}),Y("Saved","success"),Pt(t),await Jr()};window.doDeleteFixedCost=async(n,t)=>{await mv(n),Y("Deleted","info"),Pt(t),await Jr()};function $v(){const n=["🛍️","📱","💻","🎮","👟","🎧","📷","🚗","✈️","🏠","📚","⌚","🎸","🏋️","🍕"],t=M.accounts.filter(e=>e.type!=="credit_card"&&e.is_active).map(e=>`<option value="${e.id}">${e.name} (${$.currency(e.balance)})</option>`).join("");Ut("Add to Wish List",`
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
    <button class="btn btn-primary" onclick="submitAddWishItem('__MODAL_ID__')">Add</button>`)}window.openAddWishItem=$v;window.submitAddWishItem=async n=>{const t=document.getElementById("wish-name").value.trim();if(!t){Y("Name required","warning");return}await gv({name:t,icon:document.getElementById("wish-icon").value,price:parseFloat(document.getElementById("wish-price").value)||null,priority:parseInt(document.getElementById("wish-priority").value),notes:document.getElementById("wish-notes").value||null,track_account_id:document.getElementById("wish-track").value||null}),Y("Added to wish list","success"),Pt(n),await Cn()};async function Fv(n){const e=(await Fd()).find(s=>s.id===n);if(!e)return;const i=["🛍️","📱","💻","🎮","👟","🎧","📷","🚗","✈️","🏠","📚","⌚","🎸","🏋️","🍕"],r=M.accounts.filter(s=>s.type!=="credit_card"&&s.is_active).map(s=>`<option value="${s.id}" ${e.track_account_id===s.id?"selected":""}>${s.name} (${$.currency(s.balance)})</option>`).join("");Ut("Edit Wish Item",`
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
    <button class="btn btn-primary" onclick="submitEditWishItem('${n}','__MODAL_ID__')">Save</button>`)}window.openEditWishItem=Fv;window.submitEditWishItem=async(n,t)=>{await Ud(n,{name:document.getElementById("wish-name-e").value,icon:document.getElementById("wish-icon-e").value,price:parseFloat(document.getElementById("wish-price-e").value)||null,priority:parseInt(document.getElementById("wish-priority-e").value),status:document.getElementById("wish-status-e").value,notes:document.getElementById("wish-notes-e").value||null,track_account_id:document.getElementById("wish-track-e").value||null}),Y("Saved","success"),Pt(t),await Cn()};window.doDeleteWishItem=async(n,t)=>{await _v(n),t&&Pt(t),Y("Deleted","info"),await Cn()};window.markWishBought=async n=>{await Ud(n,{status:"bought"}),Y("🎉 Marked as bought!","success"),await Cn()};function Uv(n,t=null){Ut("New Category",`
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
    <button class="btn btn-primary" onclick="submitAddCategory('${t||""}','__MODAL_ID__')">Add</button>`)}window.openAddCategory=Uv;window.submitAddCategory=async(n,t)=>{const e=document.getElementById("newcat-name").value.trim();if(!e){Y("Name required","warning");return}await dv({name:e,type:document.getElementById("newcat-type").value,icon:document.getElementById("newcat-icon").value||"📦",parent_id:n||null}),Y("Category added","success"),Pt(t),await ta()};window.doDeleteCategory=async n=>{confirm("Delete this category?")&&(await hv(n),Y("Deleted","info"),await ta())};function Bv(n){const t=M.accounts.find(e=>e.id===n);Ut(`Set Goal — ${t.name}`,`
    <div class="input-group"><label class="input-label">Goal Name</label><input type="text" class="input" id="goal-name" placeholder="e.g. Emergency Fund…" /></div>
    <div class="input-group">
      <label class="input-label">Target Amount (€) *</label>
      <div class="amount-input-wrap"><span class="amount-prefix">€</span><input type="number" class="input" id="goal-amount" step="0.01" placeholder="e.g. 10000" /></div>
    </div>
    <div class="input-group"><label class="input-label">Deadline (optional)</label><input type="date" class="input" id="goal-deadline" /></div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitGoal('${n}','__MODAL_ID__')">Set Goal</button>`)}window.openSetGoal=Bv;window.submitGoal=async(n,t)=>{const e=parseFloat(document.getElementById("goal-amount").value);if(!e){Y("Target amount required","warning");return}await Md(n,{goal_amount:e,goal_name:document.getElementById("goal-name").value||null,goal_deadline:document.getElementById("goal-deadline").value||null}),Y("Goal set!","success"),Pt(t),M.accounts=await Ft(),await Cn()};function zv(){Ut("⚠️ Reset All Data",`
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
    <button class="btn btn-danger" onclick="submitReset('__MODAL_ID__')">Wipe Everything</button>`)}window.openResetConfirm=zv;window.submitReset=async n=>{if(document.getElementById("reset-confirm-input").value.trim()!=="RESET"){Y("Type RESET to confirm","warning");return}await bv(),Y("All data wiped","info"),Pt(n),M.accounts=[],Yr("dashboard")};const gl=document.getElementById("auth-screen"),_l=document.getElementById("app"),Kn=document.getElementById("google-signin-btn");Kn.addEventListener("click",async()=>{Kn.disabled=!0,Kn.innerHTML="⏳ Signing in…";try{await um(Qr,sv)}catch(n){Kn.disabled=!1,Kn.innerHTML="<span>🔐</span> Sign in with Google",console.error("Sign in error:",n),alert("Sign in failed: "+n.message)}});jf(Qr,async n=>{if(n){gl.style.display="none",_l.classList.add("visible"),document.getElementById("content-area").innerHTML='<div style="padding:60px 0;text-align:center;color:var(--text-tertiary)">⏳ Setting up…</div>';try{await Ev(),await Iv()}catch(t){console.error("App init error:",t),document.getElementById("content-area").innerHTML=`
        <div style="padding:40px 20px;text-align:center">
          <div style="font-size:40px;margin-bottom:12px">⚠️</div>
          <div style="font-size:16px;font-weight:600;margin-bottom:8px">Failed to load</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">${t.message}</div>
          <div style="font-size:12px;color:var(--text-tertiary)">Check Firestore rules and your .env config</div>
          <button onclick="location.reload()" style="margin-top:20px;padding:10px 20px;border-radius:999px;background:var(--tint-blue);color:#fff;border:none;cursor:pointer;font-size:14px">Retry</button>
        </div>`}}else gl.style.display="flex",_l.classList.remove("visible")});window.signOut=()=>qf(Qr);
