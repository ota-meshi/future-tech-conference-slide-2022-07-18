const Mf=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}};Mf();function Nr(t,n){const s=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const Tf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",If=Nr(Tf);function ji(t){return!!t||t===""}function Ke(t){if(se(t)){const n={};for(let s=0;s<t.length;s++){const o=t[s],l=Ie(o)?Lf(o):Ke(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(Ie(t))return t;if(Ne(t))return t}}const Rf=/;(?![^(]*\))/g,Vf=/:(.+)/;function Lf(t){const n={};return t.split(Rf).forEach(s=>{if(s){const o=s.split(Vf);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Te(t){let n="";if(Ie(t))n=t;else if(se(t))for(let s=0;s<t.length;s++){const o=Te(t[s]);o&&(n+=o+" ")}else if(Ne(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function Oe(t){if(!t)return null;let{class:n,style:s}=t;return n&&!Ie(n)&&(t.class=Te(n)),s&&(t.style=Ke(s)),t}const Pn=t=>Ie(t)?t:t==null?"":se(t)||Ne(t)&&(t.toString===zi||!ce(t.toString))?JSON.stringify(t,Ni,2):String(t),Ni=(t,n)=>n&&n.__v_isRef?Ni(t,n.value):Gn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Ui(n)?{[`Set(${n.size})`]:[...n.values()]}:Ne(n)&&!se(n)&&!qi(n)?String(n):n,Fe={},Zn=[],wt=()=>{},jf=()=>!1,Nf=/^on[^a-z]/,el=t=>Nf.test(t),Ur=t=>t.startsWith("onUpdate:"),nt=Object.assign,Hr=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},Uf=Object.prototype.hasOwnProperty,he=(t,n)=>Uf.call(t,n),se=Array.isArray,Gn=t=>tl(t)==="[object Map]",Ui=t=>tl(t)==="[object Set]",ce=t=>typeof t=="function",Ie=t=>typeof t=="string",zr=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Hi=t=>Ne(t)&&ce(t.then)&&ce(t.catch),zi=Object.prototype.toString,tl=t=>zi.call(t),Hf=t=>tl(t).slice(8,-1),qi=t=>tl(t)==="[object Object]",qr=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,So=Nr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},zf=/-(\w)/g,Lt=nl(t=>t.replace(zf,(n,s)=>s?s.toUpperCase():"")),qf=/\B([A-Z])/g,$n=nl(t=>t.replace(qf,"-$1").toLowerCase()),sl=nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),bl=nl(t=>t?`on${sl(t)}`:""),Ks=(t,n)=>!Object.is(t,n),Jn=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},Vo=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},Gl=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Ia;const Wf=()=>Ia||(Ia=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let it;class Wi{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&it&&(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(n){if(this.active){const s=it;try{return it=this,n()}finally{it=s}}}on(){it=this}off(){it=this.parent}stop(n){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function Yf(t){return new Wi(t)}function Kf(t,n=it){n&&n.active&&n.effects.push(t)}function Zf(){return it}function Gf(t){it&&it.cleanups.push(t)}const Wr=t=>{const n=new Set(t);return n.w=0,n.n=0,n},Yi=t=>(t.w&un)>0,Ki=t=>(t.n&un)>0,Jf=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=un},Qf=t=>{const{deps:n}=t;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];Yi(l)&&!Ki(l)?l.delete(t):n[s++]=l,l.w&=~un,l.n&=~un}n.length=s}},Jl=new WeakMap;let ks=0,un=1;const Ql=30;let Dt;const wn=Symbol(""),Xl=Symbol("");class Yr{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Kf(this,o)}run(){if(!this.active)return this.fn();let n=Dt,s=on;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Dt,Dt=this,on=!0,un=1<<++ks,ks<=Ql?Jf(this):Ra(this),this.fn()}finally{ks<=Ql&&Qf(this),un=1<<--ks,Dt=this.parent,on=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let on=!0;const Zi=[];function is(){Zi.push(on),on=!1}function ps(){const t=Zi.pop();on=t===void 0?!0:t}function ht(t,n,s){if(on&&Dt){let o=Jl.get(t);o||Jl.set(t,o=new Map);let l=o.get(s);l||o.set(s,l=Wr()),Gi(l)}}function Gi(t,n){let s=!1;ks<=Ql?Ki(t)||(t.n|=un,s=!Yi(t)):s=!t.has(Dt),s&&(t.add(Dt),Dt.deps.push(t))}function qt(t,n,s,o,l,r){const a=Jl.get(t);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&se(t))a.forEach((p,u)=>{(u==="length"||u>=o)&&i.push(p)});else switch(s!==void 0&&i.push(a.get(s)),n){case"add":se(t)?qr(s)&&i.push(a.get("length")):(i.push(a.get(wn)),Gn(t)&&i.push(a.get(Xl)));break;case"delete":se(t)||(i.push(a.get(wn)),Gn(t)&&i.push(a.get(Xl)));break;case"set":Gn(t)&&i.push(a.get(wn));break}if(i.length===1)i[0]&&er(i[0]);else{const p=[];for(const u of i)u&&p.push(...u);er(Wr(p))}}function er(t,n){const s=se(t)?t:[...t];for(const o of s)o.computed&&Va(o);for(const o of s)o.computed||Va(o)}function Va(t,n){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Xf=Nr("__proto__,__v_isRef,__isVue"),Ji=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zr)),ed=Kr(),td=Kr(!1,!0),nd=Kr(!0),La=sd();function sd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const o=Ae(this);for(let r=0,a=this.length;r<a;r++)ht(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(Ae)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){is();const o=Ae(this)[n].apply(this,s);return ps(),o}}),t}function Kr(t=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(t?n?Bd:np:n?tp:ep).get(o))return o;const a=se(o);if(!t&&a&&he(La,l))return Reflect.get(La,l,r);const i=Reflect.get(o,l,r);return(zr(l)?Ji.has(l):Xf(l))||(t||ht(o,"get",l),n)?i:Ce(i)?a&&qr(l)?i:i.value:Ne(i)?t?Yn(i):Me(i):i}}const od=Qi(),ld=Qi(!0);function Qi(t=!1){return function(s,o,l,r){let a=s[o];if(Zs(a)&&Ce(a)&&!Ce(l))return!1;if(!t&&!Zs(l)&&(tr(l)||(l=Ae(l),a=Ae(a)),!se(s)&&Ce(a)&&!Ce(l)))return a.value=l,!0;const i=se(s)&&qr(o)?Number(o)<s.length:he(s,o),p=Reflect.set(s,o,l,r);return s===Ae(r)&&(i?Ks(l,a)&&qt(s,"set",o,l):qt(s,"add",o,l)),p}}function rd(t,n){const s=he(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&qt(t,"delete",n,void 0),o}function ad(t,n){const s=Reflect.has(t,n);return(!zr(n)||!Ji.has(n))&&ht(t,"has",n),s}function cd(t){return ht(t,"iterate",se(t)?"length":wn),Reflect.ownKeys(t)}const Xi={get:ed,set:od,deleteProperty:rd,has:ad,ownKeys:cd},id={get:nd,set(t,n){return!0},deleteProperty(t,n){return!0}},pd=nt({},Xi,{get:td,set:ld}),Zr=t=>t,ol=t=>Reflect.getPrototypeOf(t);function Bo(t,n,s=!1,o=!1){t=t.__v_raw;const l=Ae(t),r=Ae(n);s||(n!==r&&ht(l,"get",n),ht(l,"get",r));const{has:a}=ol(l),i=o?Zr:s?Qr:Gs;if(a.call(l,n))return i(t.get(n));if(a.call(l,r))return i(t.get(r));t!==l&&t.get(n)}function Ao(t,n=!1){const s=this.__v_raw,o=Ae(s),l=Ae(t);return n||(t!==l&&ht(o,"has",t),ht(o,"has",l)),t===l?s.has(t):s.has(t)||s.has(l)}function _o(t,n=!1){return t=t.__v_raw,!n&&ht(Ae(t),"iterate",wn),Reflect.get(t,"size",t)}function ja(t){t=Ae(t);const n=Ae(this);return ol(n).has.call(n,t)||(n.add(t),qt(n,"add",t,t)),this}function Na(t,n){n=Ae(n);const s=Ae(this),{has:o,get:l}=ol(s);let r=o.call(s,t);r||(t=Ae(t),r=o.call(s,t));const a=l.call(s,t);return s.set(t,n),r?Ks(n,a)&&qt(s,"set",t,n):qt(s,"add",t,n),this}function Ua(t){const n=Ae(this),{has:s,get:o}=ol(n);let l=s.call(n,t);l||(t=Ae(t),l=s.call(n,t)),o&&o.call(n,t);const r=n.delete(t);return l&&qt(n,"delete",t,void 0),r}function Ha(){const t=Ae(this),n=t.size!==0,s=t.clear();return n&&qt(t,"clear",void 0,void 0),s}function Co(t,n){return function(o,l){const r=this,a=r.__v_raw,i=Ae(a),p=n?Zr:t?Qr:Gs;return!t&&ht(i,"iterate",wn),a.forEach((u,f)=>o.call(l,p(u),p(f),r))}}function bo(t,n,s){return function(...o){const l=this.__v_raw,r=Ae(l),a=Gn(r),i=t==="entries"||t===Symbol.iterator&&a,p=t==="keys"&&a,u=l[t](...o),f=s?Zr:n?Qr:Gs;return!n&&ht(r,"iterate",p?Xl:wn),{next(){const{value:y,done:d}=u.next();return d?{value:y,done:d}:{value:i?[f(y[0]),f(y[1])]:f(y),done:d}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...n){return t==="delete"?!1:this}}function ud(){const t={get(r){return Bo(this,r)},get size(){return _o(this)},has:Ao,add:ja,set:Na,delete:Ua,clear:Ha,forEach:Co(!1,!1)},n={get(r){return Bo(this,r,!1,!0)},get size(){return _o(this)},has:Ao,add:ja,set:Na,delete:Ua,clear:Ha,forEach:Co(!1,!0)},s={get(r){return Bo(this,r,!0)},get size(){return _o(this,!0)},has(r){return Ao.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Co(!0,!1)},o={get(r){return Bo(this,r,!0,!0)},get size(){return _o(this,!0)},has(r){return Ao.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=bo(r,!1,!1),s[r]=bo(r,!0,!1),n[r]=bo(r,!1,!0),o[r]=bo(r,!0,!0)}),[t,s,n,o]}const[fd,dd,yd,hd]=ud();function Gr(t,n){const s=n?t?hd:yd:t?dd:fd;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(he(s,l)&&l in o?s:o,l,r)}const md={get:Gr(!1,!1)},vd={get:Gr(!1,!0)},gd={get:Gr(!0,!1)},ep=new WeakMap,tp=new WeakMap,np=new WeakMap,Bd=new WeakMap;function Ad(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _d(t){return t.__v_skip||!Object.isExtensible(t)?0:Ad(Hf(t))}function Me(t){return Zs(t)?t:Jr(t,!1,Xi,md,ep)}function Cd(t){return Jr(t,!1,pd,vd,tp)}function Yn(t){return Jr(t,!0,id,gd,np)}function Jr(t,n,s,o,l){if(!Ne(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const a=_d(t);if(a===0)return t;const i=new Proxy(t,a===2?o:s);return l.set(t,i),i}function Qn(t){return Zs(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Zs(t){return!!(t&&t.__v_isReadonly)}function tr(t){return!!(t&&t.__v_isShallow)}function sp(t){return Qn(t)||Zs(t)}function Ae(t){const n=t&&t.__v_raw;return n?Ae(n):t}function ll(t){return Vo(t,"__v_skip",!0),t}const Gs=t=>Ne(t)?Me(t):t,Qr=t=>Ne(t)?Yn(t):t;function Xr(t){on&&Dt&&(t=Ae(t),Gi(t.dep||(t.dep=Wr())))}function ea(t,n){t=Ae(t),t.dep&&er(t.dep)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function N(t){return op(t,!1)}function jt(t){return op(t,!0)}function op(t,n){return Ce(t)?t:new bd(t,n)}class bd{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:Ae(n),this._value=s?n:Gs(n)}get value(){return Xr(this),this._value}set value(n){n=this.__v_isShallow?n:Ae(n),Ks(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Gs(n),ea(this))}}function B(t){return Ce(t)?t.value:t}const Ed={get:(t,n,s)=>B(Reflect.get(t,n,s)),set:(t,n,s,o)=>{const l=t[n];return Ce(l)&&!Ce(s)?(l.value=s,!0):Reflect.set(t,n,s,o)}};function lp(t){return Qn(t)?t:new Proxy(t,Ed)}class Dd{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Xr(this),()=>ea(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function xd(t){return new Dd(t)}function wd(t){const n=se(t)?new Array(t.length):{};for(const s in t)n[s]=kd(t,s);return n}class Fd{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function kd(t,n,s){const o=t[n];return Ce(o)?o:new Fd(t,n,s)}class Sd{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Yr(n,()=>{this._dirty||(this._dirty=!0,ea(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=Ae(this);return Xr(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Pd(t,n,s=!1){let o,l;const r=ce(t);return r?(o=t,l=wt):(o=t.get,l=t.set),new Sd(o,l,r||!l,s)}function ln(t,n,s,o){let l;try{l=o?t(...o):t()}catch(r){rl(r,n,s)}return l}function Ft(t,n,s,o){if(ce(t)){const r=ln(t,n,s,o);return r&&Hi(r)&&r.catch(a=>{rl(a,n,s)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Ft(t[r],n,s,o));return l}function rl(t,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=s;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,a,i)===!1)return}r=r.parent}const p=n.appContext.config.errorHandler;if(p){ln(p,null,10,[t,a,i]);return}}Od(t,s,l,o)}function Od(t,n,s,o=!0){console.error(t)}let Lo=!1,nr=!1;const ft=[];let Ht=0;const $s=[];let Ss=null,Hn=0;const Ms=[];let en=null,zn=0;const rp=Promise.resolve();let ta=null,sr=null;function ze(t){const n=ta||rp;return t?n.then(this?t.bind(this):t):n}function $d(t){let n=Ht+1,s=ft.length;for(;n<s;){const o=n+s>>>1;Js(ft[o])<t?n=o+1:s=o}return n}function ap(t){(!ft.length||!ft.includes(t,Lo&&t.allowRecurse?Ht+1:Ht))&&t!==sr&&(t.id==null?ft.push(t):ft.splice($d(t.id),0,t),cp())}function cp(){!Lo&&!nr&&(nr=!0,ta=rp.then(up))}function Md(t){const n=ft.indexOf(t);n>Ht&&ft.splice(n,1)}function ip(t,n,s,o){se(t)?s.push(...t):(!n||!n.includes(t,t.allowRecurse?o+1:o))&&s.push(t),cp()}function Td(t){ip(t,Ss,$s,Hn)}function Id(t){ip(t,en,Ms,zn)}function al(t,n=null){if($s.length){for(sr=n,Ss=[...new Set($s)],$s.length=0,Hn=0;Hn<Ss.length;Hn++)Ss[Hn]();Ss=null,Hn=0,sr=null,al(t,n)}}function pp(t){if(al(),Ms.length){const n=[...new Set(Ms)];if(Ms.length=0,en){en.push(...n);return}for(en=n,en.sort((s,o)=>Js(s)-Js(o)),zn=0;zn<en.length;zn++)en[zn]();en=null,zn=0}}const Js=t=>t.id==null?1/0:t.id;function up(t){nr=!1,Lo=!0,al(t),ft.sort((s,o)=>Js(s)-Js(o));const n=wt;try{for(Ht=0;Ht<ft.length;Ht++){const s=ft[Ht];s&&s.active!==!1&&ln(s,null,14)}}finally{Ht=0,ft.length=0,pp(),Lo=!1,ta=null,(ft.length||$s.length||Ms.length)&&up(t)}}function Rd(t,n,...s){if(t.isUnmounted)return;const o=t.vnode.props||Fe;let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:y,trim:d}=o[f]||Fe;d&&(l=s.map(h=>h.trim())),y&&(l=s.map(Gl))}let i,p=o[i=bl(n)]||o[i=bl(Lt(n))];!p&&r&&(p=o[i=bl($n(n))]),p&&Ft(p,t,6,l);const u=o[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Ft(u,t,6,l)}}function fp(t,n,s=!1){const o=n.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let a={},i=!1;if(!ce(t)){const p=u=>{const f=fp(u,n,!0);f&&(i=!0,nt(a,f))};!s&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}return!r&&!i?(o.set(t,null),null):(se(r)?r.forEach(p=>a[p]=null):nt(a,r),o.set(t,a),a)}function cl(t,n){return!t||!el(n)?!1:(n=n.slice(2).replace(/Once$/,""),he(t,n[0].toLowerCase()+n.slice(1))||he(t,$n(n))||he(t,n))}let We=null,il=null;function jo(t){const n=We;return We=t,il=t&&t.type.__scopeId||null,n}function Mn(t){il=t}function Tn(){il=null}function H(t,n=We,s){if(!n||t._n)return t;const o=(...l)=>{o._d&&ec(-1);const r=jo(n),a=t(...l);return jo(r),o._d&&ec(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function El(t){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:p,emit:u,render:f,renderCache:y,data:d,setupState:h,ctx:v,inheritAttrs:C}=t;let A,x;const E=jo(t);try{if(s.shapeFlag&4){const F=l||o;A=Tt(f.call(F,F,y,r,h,d,v)),x=p}else{const F=n;A=Tt(F.length>1?F(r,{attrs:p,slots:i,emit:u}):F(r,null)),x=n.props?p:Vd(p)}}catch(F){Is.length=0,rl(F,t,1),A=Y(fn)}let D=A;if(x&&C!==!1){const F=Object.keys(x),{shapeFlag:V}=D;F.length&&V&7&&(a&&F.some(Ur)&&(x=Ld(x,a)),D=On(D,x))}return s.dirs&&(D=On(D),D.dirs=D.dirs?D.dirs.concat(s.dirs):s.dirs),s.transition&&(D.transition=s.transition),A=D,jo(E),A}const Vd=t=>{let n;for(const s in t)(s==="class"||s==="style"||el(s))&&((n||(n={}))[s]=t[s]);return n},Ld=(t,n)=>{const s={};for(const o in t)(!Ur(o)||!(o.slice(9)in n))&&(s[o]=t[o]);return s};function jd(t,n,s){const{props:o,children:l,component:r}=t,{props:a,children:i,patchFlag:p}=n,u=r.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&p>=0){if(p&1024)return!0;if(p&16)return o?za(o,a,u):!!a;if(p&8){const f=n.dynamicProps;for(let y=0;y<f.length;y++){const d=f[y];if(a[d]!==o[d]&&!cl(u,d))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?za(o,a,u):!0:!!a;return!1}function za(t,n,s){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==t[r]&&!cl(s,r))return!0}return!1}function Nd({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const dp=t=>t.__isSuspense;function Ud(t,n){n&&n.pendingBranch?se(t)?n.effects.push(...t):n.effects.push(t):Id(t)}function ut(t,n){if(Ue){let s=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===s&&(s=Ue.provides=Object.create(o)),s[t]=n}}function z(t,n,s=!1){const o=Ue||We;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&t in l)return l[t];if(arguments.length>1)return s&&ce(n)?n.call(o.proxy):n}}function po(t,n){return na(t,null,n)}const qa={};function pe(t,n,s){return na(t,n,s)}function na(t,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Fe){const i=Ue;let p,u=!1,f=!1;if(Ce(t)?(p=()=>t.value,u=tr(t)):Qn(t)?(p=()=>t,o=!0):se(t)?(f=!0,u=t.some(x=>Qn(x)||tr(x)),p=()=>t.map(x=>{if(Ce(x))return x.value;if(Qn(x))return bn(x);if(ce(x))return ln(x,i,2)})):ce(t)?n?p=()=>ln(t,i,2):p=()=>{if(!(i&&i.isUnmounted))return y&&y(),Ft(t,i,3,[d])}:p=wt,n&&o){const x=p;p=()=>bn(x())}let y,d=x=>{y=A.onStop=()=>{ln(x,i,4)}};if(eo)return d=wt,n?s&&Ft(n,i,3,[p(),f?[]:void 0,d]):p(),wt;let h=f?[]:qa;const v=()=>{if(!!A.active)if(n){const x=A.run();(o||u||(f?x.some((E,D)=>Ks(E,h[D])):Ks(x,h)))&&(y&&y(),Ft(n,i,3,[x,h===qa?void 0:h,d]),h=x)}else A.run()};v.allowRecurse=!!n;let C;l==="sync"?C=v:l==="post"?C=()=>He(v,i&&i.suspense):C=()=>Td(v);const A=new Yr(p,C);return n?s?v():h=A.run():l==="post"?He(A.run.bind(A),i&&i.suspense):A.run(),()=>{A.stop(),i&&i.scope&&Hr(i.scope.effects,A)}}function Hd(t,n,s){const o=this.proxy,l=Ie(t)?t.includes(".")?yp(o,t):()=>o[t]:t.bind(o,o);let r;ce(n)?r=n:(r=n.handler,s=n);const a=Ue;ls(this);const i=na(l,r.bind(o),s);return a?ls(a):Fn(),i}function yp(t,n){const s=n.split(".");return()=>{let o=t;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function bn(t,n){if(!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),Ce(t))bn(t.value,n);else if(se(t))for(let s=0;s<t.length;s++)bn(t[s],n);else if(Ui(t)||Gn(t))t.forEach(s=>{bn(s,n)});else if(qi(t))for(const s in t)bn(t[s],n);return t}function hp(t,n){t.shapeFlag&6&&t.component?hp(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function Be(t){return ce(t)?{setup:t,name:t.name}:t}const Xn=t=>!!t.type.__asyncLoader,mp=t=>t.type.__isKeepAlive,zd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=In(),o=s.ctx;if(!o.renderer)return()=>{const E=n.default&&n.default();return E&&E.length===1?E[0]:E};const l=new Map,r=new Set;let a=null;const i=s.suspense,{renderer:{p,m:u,um:f,o:{createElement:y}}}=o,d=y("div");o.activate=(E,D,F,V,O)=>{const q=E.component;u(E,D,F,0,i),p(q.vnode,E,D,F,q,i,V,E.slotScopeIds,O),He(()=>{q.isDeactivated=!1,q.a&&Jn(q.a);const re=E.props&&E.props.onVnodeMounted;re&&vt(re,q.parent,E)},i)},o.deactivate=E=>{const D=E.component;u(E,d,null,1,i),He(()=>{D.da&&Jn(D.da);const F=E.props&&E.props.onVnodeUnmounted;F&&vt(F,D.parent,E),D.isDeactivated=!0},i)};function h(E){Dl(E),f(E,s,i,!0)}function v(E){l.forEach((D,F)=>{const V=pr(D.type);V&&(!E||!E(V))&&C(F)})}function C(E){const D=l.get(E);!a||D.type!==a.type?h(D):a&&Dl(a),l.delete(E),r.delete(E)}pe(()=>[t.include,t.exclude],([E,D])=>{E&&v(F=>Ps(E,F)),D&&v(F=>!Ps(D,F))},{flush:"post",deep:!0});let A=null;const x=()=>{A!=null&&l.set(A,xl(s.subTree))};return us(x),Ap(x),ul(()=>{l.forEach(E=>{const{subTree:D,suspense:F}=s,V=xl(D);if(E.type===V.type){Dl(V);const O=V.component.da;O&&He(O,F);return}h(E)})}),()=>{if(A=null,!n.default)return null;const E=n.default(),D=E[0];if(E.length>1)return a=null,E;if(!os(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return a=null,D;let F=xl(D);const V=F.type,O=pr(Xn(F)?F.type.__asyncResolved||{}:V),{include:q,exclude:re,max:ue}=t;if(q&&(!O||!Ps(q,O))||re&&O&&Ps(re,O))return a=F,D;const de=F.key==null?V:F.key,me=l.get(de);return F.el&&(F=On(F),D.shapeFlag&128&&(D.ssContent=F)),A=de,me?(F.el=me.el,F.component=me.component,F.transition&&hp(F,F.transition),F.shapeFlag|=512,r.delete(de),r.add(de)):(r.add(de),ue&&r.size>parseInt(ue,10)&&C(r.values().next().value)),F.shapeFlag|=256,a=F,dp(D.type)?D:F}}},vp=zd;function Ps(t,n){return se(t)?t.some(s=>Ps(s,n)):Ie(t)?t.split(",").includes(n):t.test?t.test(n):!1}function qd(t,n){gp(t,"a",n)}function Wd(t,n){gp(t,"da",n)}function gp(t,n,s=Ue){const o=t.__wdc||(t.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(pl(n,o,s),s){let l=s.parent;for(;l&&l.parent;)mp(l.parent.vnode)&&Yd(o,n,s,l),l=l.parent}}function Yd(t,n,s,o){const l=pl(n,t,o,!0);fl(()=>{Hr(o[n],l)},s)}function Dl(t){let n=t.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),t.shapeFlag=n}function xl(t){return t.shapeFlag&128?t.ssContent:t}function pl(t,n,s=Ue,o=!1){if(s){const l=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;is(),ls(s);const i=Ft(n,s,t,a);return Fn(),ps(),i});return o?l.unshift(r):l.push(r),r}}const Yt=t=>(n,s=Ue)=>(!eo||t==="sp")&&pl(t,n,s),Bp=Yt("bm"),us=Yt("m"),Kd=Yt("bu"),Ap=Yt("u"),ul=Yt("bum"),fl=Yt("um"),Zd=Yt("sp"),Gd=Yt("rtg"),Jd=Yt("rtc");function Qd(t,n=Ue){pl("ec",t,n)}function sa(t,n){const s=We;if(s===null)return t;const o=yl(s)||s.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,p,u=Fe]=n[r];ce(a)&&(a={mounted:a,updated:a}),a.deep&&bn(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:p,modifiers:u})}return t}function yn(t,n,s,o){const l=t.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let p=i.dir[o];p&&(is(),Ft(p,s,8,[t.el,i,t,n]),ps())}}const _p="components";function Qs(t,n){return ey(_p,t,!0,n)||t}const Xd=Symbol();function ey(t,n,s=!0,o=!1){const l=We||Ue;if(l){const r=l.type;if(t===_p){const i=pr(r,!1);if(i&&(i===n||i===Lt(n)||i===sl(Lt(n))))return r}const a=Wa(l[t]||r[t],n)||Wa(l.appContext[t],n);return!a&&o?r:a}}function Wa(t,n){return t&&(t[n]||t[Lt(n)]||t[sl(Lt(n))])}function fs(t,n,s,o){let l;const r=s&&s[o];if(se(t)||Ie(t)){l=new Array(t.length);for(let a=0,i=t.length;a<i;a++)l[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){l=new Array(t);for(let a=0;a<t;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if(Ne(t))if(t[Symbol.iterator])l=Array.from(t,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);l=new Array(a.length);for(let i=0,p=a.length;i<p;i++){const u=a[i];l[i]=n(t[u],u,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function et(t,n,s={},o,l){if(We.isCE||We.parent&&Xn(We.parent)&&We.parent.isCE)return Y("slot",n==="default"?null:{name:n},o&&o());let r=t[n];r&&r._c&&(r._d=!1),_();const a=r&&Cp(r(s)),i=Q(G,{key:s.key||`_${n}`},a||(o?o():[]),a&&t._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Cp(t){return t.some(n=>os(n)?!(n.type===fn||n.type===G&&!Cp(n.children)):!0)?t:null}const or=t=>t?$p(t)?yl(t)||t.proxy:or(t.parent):null,No=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>or(t.parent),$root:t=>or(t.root),$emit:t=>t.emit,$options:t=>Ep(t),$forceUpdate:t=>t.f||(t.f=()=>ap(t.update)),$nextTick:t=>t.n||(t.n=ze.bind(t.proxy)),$watch:t=>Hd.bind(t)}),ty={get({_:t},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:p}=t;let u;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(o!==Fe&&he(o,n))return a[n]=1,o[n];if(l!==Fe&&he(l,n))return a[n]=2,l[n];if((u=t.propsOptions[0])&&he(u,n))return a[n]=3,r[n];if(s!==Fe&&he(s,n))return a[n]=4,s[n];lr&&(a[n]=0)}}const f=No[n];let y,d;if(f)return n==="$attrs"&&ht(t,"get",n),f(t);if((y=i.__cssModules)&&(y=y[n]))return y;if(s!==Fe&&he(s,n))return a[n]=4,s[n];if(d=p.config.globalProperties,he(d,n))return d[n]},set({_:t},n,s){const{data:o,setupState:l,ctx:r}=t;return l!==Fe&&he(l,n)?(l[n]=s,!0):o!==Fe&&he(o,n)?(o[n]=s,!0):he(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||t!==Fe&&he(t,a)||n!==Fe&&he(n,a)||(i=r[0])&&he(i,a)||he(o,a)||he(No,a)||he(l.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:he(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};let lr=!0;function ny(t){const n=Ep(t),s=t.proxy,o=t.ctx;lr=!1,n.beforeCreate&&Ya(n.beforeCreate,t,"bc");const{data:l,computed:r,methods:a,watch:i,provide:p,inject:u,created:f,beforeMount:y,mounted:d,beforeUpdate:h,updated:v,activated:C,deactivated:A,beforeDestroy:x,beforeUnmount:E,destroyed:D,unmounted:F,render:V,renderTracked:O,renderTriggered:q,errorCaptured:re,serverPrefetch:ue,expose:de,inheritAttrs:me,components:$e,directives:Re,filters:qe}=n;if(u&&sy(u,o,null,t.appContext.config.unwrapInjectedRef),a)for(const oe in a){const te=a[oe];ce(te)&&(o[oe]=te.bind(s))}if(l){const oe=l.call(s,s);Ne(oe)&&(t.data=Me(oe))}if(lr=!0,r)for(const oe in r){const te=r[oe],ye=ce(te)?te.bind(s,s):ce(te.get)?te.get.bind(s,s):wt,$t=!ce(te)&&ce(te.set)?te.set.bind(s):wt,Ge=k({get:ye,set:$t});Object.defineProperty(o,oe,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:mt=>Ge.value=mt})}if(i)for(const oe in i)bp(i[oe],o,s,oe);if(p){const oe=ce(p)?p.call(s):p;Reflect.ownKeys(oe).forEach(te=>{ut(te,oe[te])})}f&&Ya(f,t,"c");function ne(oe,te){se(te)?te.forEach(ye=>oe(ye.bind(s))):te&&oe(te.bind(s))}if(ne(Bp,y),ne(us,d),ne(Kd,h),ne(Ap,v),ne(qd,C),ne(Wd,A),ne(Qd,re),ne(Jd,O),ne(Gd,q),ne(ul,E),ne(fl,F),ne(Zd,ue),se(de))if(de.length){const oe=t.exposed||(t.exposed={});de.forEach(te=>{Object.defineProperty(oe,te,{get:()=>s[te],set:ye=>s[te]=ye})})}else t.exposed||(t.exposed={});V&&t.render===wt&&(t.render=V),me!=null&&(t.inheritAttrs=me),$e&&(t.components=$e),Re&&(t.directives=Re)}function sy(t,n,s=wt,o=!1){se(t)&&(t=rr(t));for(const l in t){const r=t[l];let a;Ne(r)?"default"in r?a=z(r.from||l,r.default,!0):a=z(r.from||l):a=z(r),Ce(a)&&o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[l]=a}}function Ya(t,n,s){Ft(se(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,s)}function bp(t,n,s,o){const l=o.includes(".")?yp(s,o):()=>s[o];if(Ie(t)){const r=n[t];ce(r)&&pe(l,r)}else if(ce(t))pe(l,t.bind(s));else if(Ne(t))if(se(t))t.forEach(r=>bp(r,n,s,o));else{const r=ce(t.handler)?t.handler.bind(s):n[t.handler];ce(r)&&pe(l,r,t)}}function Ep(t){const n=t.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(n);let p;return i?p=i:!l.length&&!s&&!o?p=n:(p={},l.length&&l.forEach(u=>Uo(p,u,a,!0)),Uo(p,n,a)),r.set(n,p),p}function Uo(t,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Uo(t,r,s,!0),l&&l.forEach(a=>Uo(t,a,s,!0));for(const a in n)if(!(o&&a==="expose")){const i=oy[a]||s&&s[a];t[a]=i?i(t[a],n[a]):n[a]}return t}const oy={data:Ka,props:gn,emits:gn,methods:gn,computed:gn,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:gn,directives:gn,watch:ry,provide:Ka,inject:ly};function Ka(t,n){return n?t?function(){return nt(ce(t)?t.call(this,this):t,ce(n)?n.call(this,this):n)}:n:t}function ly(t,n){return gn(rr(t),rr(n))}function rr(t){if(se(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function Je(t,n){return t?[...new Set([].concat(t,n))]:n}function gn(t,n){return t?nt(nt(Object.create(null),t),n):n}function ry(t,n){if(!t)return n;if(!n)return t;const s=nt(Object.create(null),t);for(const o in n)s[o]=Je(t[o],n[o]);return s}function ay(t,n,s,o=!1){const l={},r={};Vo(r,dl,1),t.propsDefaults=Object.create(null),Dp(t,n,l,r);for(const a in t.propsOptions[0])a in l||(l[a]=void 0);s?t.props=o?l:Cd(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function cy(t,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=t,i=Ae(l),[p]=t.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let y=0;y<f.length;y++){let d=f[y];if(cl(t.emitsOptions,d))continue;const h=n[d];if(p)if(he(r,d))h!==r[d]&&(r[d]=h,u=!0);else{const v=Lt(d);l[v]=ar(p,i,v,h,t,!1)}else h!==r[d]&&(r[d]=h,u=!0)}}}else{Dp(t,n,l,r)&&(u=!0);let f;for(const y in i)(!n||!he(n,y)&&((f=$n(y))===y||!he(n,f)))&&(p?s&&(s[y]!==void 0||s[f]!==void 0)&&(l[y]=ar(p,i,y,void 0,t,!0)):delete l[y]);if(r!==i)for(const y in r)(!n||!he(n,y)&&!0)&&(delete r[y],u=!0)}u&&qt(t,"set","$attrs")}function Dp(t,n,s,o){const[l,r]=t.propsOptions;let a=!1,i;if(n)for(let p in n){if(So(p))continue;const u=n[p];let f;l&&he(l,f=Lt(p))?!r||!r.includes(f)?s[f]=u:(i||(i={}))[f]=u:cl(t.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,a=!0)}if(r){const p=Ae(s),u=i||Fe;for(let f=0;f<r.length;f++){const y=r[f];s[y]=ar(l,p,y,u[y],t,!he(u,y))}}return a}function ar(t,n,s,o,l,r){const a=t[s];if(a!=null){const i=he(a,"default");if(i&&o===void 0){const p=a.default;if(a.type!==Function&&ce(p)){const{propsDefaults:u}=l;s in u?o=u[s]:(ls(l),o=u[s]=p.call(null,n),Fn())}else o=p}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===$n(s))&&(o=!0))}return o}function xp(t,n,s=!1){const o=n.propsCache,l=o.get(t);if(l)return l;const r=t.props,a={},i=[];let p=!1;if(!ce(t)){const f=y=>{p=!0;const[d,h]=xp(y,n,!0);nt(a,d),h&&i.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!p)return o.set(t,Zn),Zn;if(se(r))for(let f=0;f<r.length;f++){const y=Lt(r[f]);Za(y)&&(a[y]=Fe)}else if(r)for(const f in r){const y=Lt(f);if(Za(y)){const d=r[f],h=a[y]=se(d)||ce(d)?{type:d}:d;if(h){const v=Qa(Boolean,h.type),C=Qa(String,h.type);h[0]=v>-1,h[1]=C<0||v<C,(v>-1||he(h,"default"))&&i.push(y)}}}const u=[a,i];return o.set(t,u),u}function Za(t){return t[0]!=="$"}function Ga(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function Ja(t,n){return Ga(t)===Ga(n)}function Qa(t,n){return se(n)?n.findIndex(s=>Ja(s,t)):ce(n)&&Ja(n,t)?0:-1}const wp=t=>t[0]==="_"||t==="$stable",oa=t=>se(t)?t.map(Tt):[Tt(t)],iy=(t,n,s)=>{if(n._n)return n;const o=H((...l)=>oa(n(...l)),s);return o._c=!1,o},Fp=(t,n,s)=>{const o=t._ctx;for(const l in t){if(wp(l))continue;const r=t[l];if(ce(r))n[l]=iy(l,r,o);else if(r!=null){const a=oa(r);n[l]=()=>a}}},kp=(t,n)=>{const s=oa(n);t.slots.default=()=>s},py=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=Ae(n),Vo(n,"_",s)):Fp(n,t.slots={})}else t.slots={},n&&kp(t,n);Vo(t.slots,dl,1)},uy=(t,n,s)=>{const{vnode:o,slots:l}=t;let r=!0,a=Fe;if(o.shapeFlag&32){const i=n._;i?s&&i===1?r=!1:(nt(l,n),!s&&i===1&&delete l._):(r=!n.$stable,Fp(n,l)),a=n}else n&&(kp(t,n),a={default:1});if(r)for(const i in l)!wp(i)&&!(i in a)&&delete l[i]};function Sp(){return{app:null,config:{isNativeTag:jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fy=0;function dy(t,n){return function(o,l=null){ce(o)||(o=Object.assign({},o)),l!=null&&!Ne(l)&&(l=null);const r=Sp(),a=new Set;let i=!1;const p=r.app={_uid:fy++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Py,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&ce(u.install)?(a.add(u),u.install(p,...f)):ce(u)&&(a.add(u),u(p,...f))),p},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),p},component(u,f){return f?(r.components[u]=f,p):r.components[u]},directive(u,f){return f?(r.directives[u]=f,p):r.directives[u]},mount(u,f,y){if(!i){const d=Y(o,l);return d.appContext=r,f&&n?n(d,u):t(d,u,y),i=!0,p._container=u,u.__vue_app__=p,yl(d.component)||d.component.proxy}},unmount(){i&&(t(null,p._container),delete p._container.__vue_app__)},provide(u,f){return r.provides[u]=f,p}};return p}}function cr(t,n,s,o,l=!1){if(se(t)){t.forEach((d,h)=>cr(d,n&&(se(n)?n[h]:n),s,o,l));return}if(Xn(o)&&!l)return;const r=o.shapeFlag&4?yl(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:p}=t,u=n&&n.r,f=i.refs===Fe?i.refs={}:i.refs,y=i.setupState;if(u!=null&&u!==p&&(Ie(u)?(f[u]=null,he(y,u)&&(y[u]=null)):Ce(u)&&(u.value=null)),ce(p))ln(p,i,12,[a,f]);else{const d=Ie(p),h=Ce(p);if(d||h){const v=()=>{if(t.f){const C=d?f[p]:p.value;l?se(C)&&Hr(C,r):se(C)?C.includes(r)||C.push(r):d?(f[p]=[r],he(y,p)&&(y[p]=f[p])):(p.value=[r],t.k&&(f[t.k]=p.value))}else d?(f[p]=a,he(y,p)&&(y[p]=a)):h&&(p.value=a,t.k&&(f[t.k]=a))};a?(v.id=-1,He(v,s)):v()}}}const He=Ud;function yy(t){return hy(t)}function hy(t,n){const s=Wf();s.__VUE__=!0;const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:p,setText:u,setElementText:f,parentNode:y,nextSibling:d,setScopeId:h=wt,cloneNode:v,insertStaticContent:C}=t,A=(m,g,b,$=null,P=null,R=null,j=!1,I=null,L=!!g.dynamicChildren)=>{if(m===g)return;m&&!_s(m,g)&&($=K(m),st(m,P,R,!0),m=null),g.patchFlag===-2&&(L=!1,g.dynamicChildren=null);const{type:M,ref:X,shapeFlag:Z}=g;switch(M){case ra:x(m,g,b,$);break;case fn:E(m,g,b,$);break;case wl:m==null&&D(g,b,$,j);break;case G:Re(m,g,b,$,P,R,j,I,L);break;default:Z&1?O(m,g,b,$,P,R,j,I,L):Z&6?qe(m,g,b,$,P,R,j,I,L):(Z&64||Z&128)&&M.process(m,g,b,$,P,R,j,I,L,ke)}X!=null&&P&&cr(X,m&&m.ref,R,g||m,!g)},x=(m,g,b,$)=>{if(m==null)o(g.el=i(g.children),b,$);else{const P=g.el=m.el;g.children!==m.children&&u(P,g.children)}},E=(m,g,b,$)=>{m==null?o(g.el=p(g.children||""),b,$):g.el=m.el},D=(m,g,b,$)=>{[m.el,m.anchor]=C(m.children,g,b,$,m.el,m.anchor)},F=({el:m,anchor:g},b,$)=>{let P;for(;m&&m!==g;)P=d(m),o(m,b,$),m=P;o(g,b,$)},V=({el:m,anchor:g})=>{let b;for(;m&&m!==g;)b=d(m),l(m),m=b;l(g)},O=(m,g,b,$,P,R,j,I,L)=>{j=j||g.type==="svg",m==null?q(g,b,$,P,R,j,I,L):de(m,g,P,R,j,I,L)},q=(m,g,b,$,P,R,j,I)=>{let L,M;const{type:X,props:Z,shapeFlag:ee,transition:le,patchFlag:ve,dirs:De}=m;if(m.el&&v!==void 0&&ve===-1)L=m.el=v(m.el);else{if(L=m.el=a(m.type,R,Z&&Z.is,Z),ee&8?f(L,m.children):ee&16&&ue(m.children,L,null,$,P,R&&X!=="foreignObject",j,I),De&&yn(m,null,$,"created"),Z){for(const Pe in Z)Pe!=="value"&&!So(Pe)&&r(L,Pe,null,Z[Pe],R,m.children,$,P,T);"value"in Z&&r(L,"value",null,Z.value),(M=Z.onVnodeBeforeMount)&&vt(M,$,m)}re(L,m,m.scopeId,j,$)}De&&yn(m,null,$,"beforeMount");const xe=(!P||P&&!P.pendingBranch)&&le&&!le.persisted;xe&&le.beforeEnter(L),o(L,g,b),((M=Z&&Z.onVnodeMounted)||xe||De)&&He(()=>{M&&vt(M,$,m),xe&&le.enter(L),De&&yn(m,null,$,"mounted")},P)},re=(m,g,b,$,P)=>{if(b&&h(m,b),$)for(let R=0;R<$.length;R++)h(m,$[R]);if(P){let R=P.subTree;if(g===R){const j=P.vnode;re(m,j,j.scopeId,j.slotScopeIds,P.parent)}}},ue=(m,g,b,$,P,R,j,I,L=0)=>{for(let M=L;M<m.length;M++){const X=m[M]=I?tn(m[M]):Tt(m[M]);A(null,X,g,b,$,P,R,j,I)}},de=(m,g,b,$,P,R,j)=>{const I=g.el=m.el;let{patchFlag:L,dynamicChildren:M,dirs:X}=g;L|=m.patchFlag&16;const Z=m.props||Fe,ee=g.props||Fe;let le;b&&hn(b,!1),(le=ee.onVnodeBeforeUpdate)&&vt(le,b,g,m),X&&yn(g,m,b,"beforeUpdate"),b&&hn(b,!0);const ve=P&&g.type!=="foreignObject";if(M?me(m.dynamicChildren,M,I,b,$,ve,R):j||ye(m,g,I,null,b,$,ve,R,!1),L>0){if(L&16)$e(I,g,Z,ee,b,$,P);else if(L&2&&Z.class!==ee.class&&r(I,"class",null,ee.class,P),L&4&&r(I,"style",Z.style,ee.style,P),L&8){const De=g.dynamicProps;for(let xe=0;xe<De.length;xe++){const Pe=De[xe],Ct=Z[Pe],Ln=ee[Pe];(Ln!==Ct||Pe==="value")&&r(I,Pe,Ct,Ln,P,m.children,b,$,T)}}L&1&&m.children!==g.children&&f(I,g.children)}else!j&&M==null&&$e(I,g,Z,ee,b,$,P);((le=ee.onVnodeUpdated)||X)&&He(()=>{le&&vt(le,b,g,m),X&&yn(g,m,b,"updated")},$)},me=(m,g,b,$,P,R,j)=>{for(let I=0;I<g.length;I++){const L=m[I],M=g[I],X=L.el&&(L.type===G||!_s(L,M)||L.shapeFlag&70)?y(L.el):b;A(L,M,X,null,$,P,R,j,!0)}},$e=(m,g,b,$,P,R,j)=>{if(b!==$){for(const I in $){if(So(I))continue;const L=$[I],M=b[I];L!==M&&I!=="value"&&r(m,I,M,L,j,g.children,P,R,T)}if(b!==Fe)for(const I in b)!So(I)&&!(I in $)&&r(m,I,b[I],null,j,g.children,P,R,T);"value"in $&&r(m,"value",b.value,$.value)}},Re=(m,g,b,$,P,R,j,I,L)=>{const M=g.el=m?m.el:i(""),X=g.anchor=m?m.anchor:i("");let{patchFlag:Z,dynamicChildren:ee,slotScopeIds:le}=g;le&&(I=I?I.concat(le):le),m==null?(o(M,b,$),o(X,b,$),ue(g.children,b,X,P,R,j,I,L)):Z>0&&Z&64&&ee&&m.dynamicChildren?(me(m.dynamicChildren,ee,b,P,R,j,I),(g.key!=null||P&&g===P.subTree)&&la(m,g,!0)):ye(m,g,b,X,P,R,j,I,L)},qe=(m,g,b,$,P,R,j,I,L)=>{g.slotScopeIds=I,m==null?g.shapeFlag&512?P.ctx.activate(g,b,$,j,L):Ee(g,b,$,P,R,j,L):ne(m,g,L)},Ee=(m,g,b,$,P,R,j)=>{const I=m.component=Dy(m,$,P);if(mp(m)&&(I.ctx.renderer=ke),xy(I),I.asyncDep){if(P&&P.registerDep(I,oe),!m.el){const L=I.subTree=Y(fn);E(null,L,g,b)}return}oe(I,m,g,b,P,R,j)},ne=(m,g,b)=>{const $=g.component=m.component;if(jd(m,g,b))if($.asyncDep&&!$.asyncResolved){te($,g,b);return}else $.next=g,Md($.update),$.update();else g.el=m.el,$.vnode=g},oe=(m,g,b,$,P,R,j)=>{const I=()=>{if(m.isMounted){let{next:X,bu:Z,u:ee,parent:le,vnode:ve}=m,De=X,xe;hn(m,!1),X?(X.el=ve.el,te(m,X,j)):X=ve,Z&&Jn(Z),(xe=X.props&&X.props.onVnodeBeforeUpdate)&&vt(xe,le,X,ve),hn(m,!0);const Pe=El(m),Ct=m.subTree;m.subTree=Pe,A(Ct,Pe,y(Ct.el),K(Ct),m,P,R),X.el=Pe.el,De===null&&Nd(m,Pe.el),ee&&He(ee,P),(xe=X.props&&X.props.onVnodeUpdated)&&He(()=>vt(xe,le,X,ve),P)}else{let X;const{el:Z,props:ee}=g,{bm:le,m:ve,parent:De}=m,xe=Xn(g);if(hn(m,!1),le&&Jn(le),!xe&&(X=ee&&ee.onVnodeBeforeMount)&&vt(X,De,g),hn(m,!0),Z&&ie){const Pe=()=>{m.subTree=El(m),ie(Z,m.subTree,m,P,null)};xe?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Pe()):Pe()}else{const Pe=m.subTree=El(m);A(null,Pe,b,$,m,P,R),g.el=Pe.el}if(ve&&He(ve,P),!xe&&(X=ee&&ee.onVnodeMounted)){const Pe=g;He(()=>vt(X,De,Pe),P)}(g.shapeFlag&256||De&&Xn(De.vnode)&&De.vnode.shapeFlag&256)&&m.a&&He(m.a,P),m.isMounted=!0,g=b=$=null}},L=m.effect=new Yr(I,()=>ap(M),m.scope),M=m.update=()=>L.run();M.id=m.uid,hn(m,!0),M()},te=(m,g,b)=>{g.component=m;const $=m.vnode.props;m.vnode=g,m.next=null,cy(m,g.props,$,b),uy(m,g.children,b),is(),al(void 0,m.update),ps()},ye=(m,g,b,$,P,R,j,I,L=!1)=>{const M=m&&m.children,X=m?m.shapeFlag:0,Z=g.children,{patchFlag:ee,shapeFlag:le}=g;if(ee>0){if(ee&128){Ge(M,Z,b,$,P,R,j,I,L);return}else if(ee&256){$t(M,Z,b,$,P,R,j,I,L);return}}le&8?(X&16&&T(M,P,R),Z!==M&&f(b,Z)):X&16?le&16?Ge(M,Z,b,$,P,R,j,I,L):T(M,P,R,!0):(X&8&&f(b,""),le&16&&ue(Z,b,$,P,R,j,I,L))},$t=(m,g,b,$,P,R,j,I,L)=>{m=m||Zn,g=g||Zn;const M=m.length,X=g.length,Z=Math.min(M,X);let ee;for(ee=0;ee<Z;ee++){const le=g[ee]=L?tn(g[ee]):Tt(g[ee]);A(m[ee],le,b,null,P,R,j,I,L)}M>X?T(m,P,R,!0,!1,Z):ue(g,b,$,P,R,j,I,L,Z)},Ge=(m,g,b,$,P,R,j,I,L)=>{let M=0;const X=g.length;let Z=m.length-1,ee=X-1;for(;M<=Z&&M<=ee;){const le=m[M],ve=g[M]=L?tn(g[M]):Tt(g[M]);if(_s(le,ve))A(le,ve,b,null,P,R,j,I,L);else break;M++}for(;M<=Z&&M<=ee;){const le=m[Z],ve=g[ee]=L?tn(g[ee]):Tt(g[ee]);if(_s(le,ve))A(le,ve,b,null,P,R,j,I,L);else break;Z--,ee--}if(M>Z){if(M<=ee){const le=ee+1,ve=le<X?g[le].el:$;for(;M<=ee;)A(null,g[M]=L?tn(g[M]):Tt(g[M]),b,ve,P,R,j,I,L),M++}}else if(M>ee)for(;M<=Z;)st(m[M],P,R,!0),M++;else{const le=M,ve=M,De=new Map;for(M=ve;M<=ee;M++){const rt=g[M]=L?tn(g[M]):Tt(g[M]);rt.key!=null&&De.set(rt.key,M)}let xe,Pe=0;const Ct=ee-ve+1;let Ln=!1,$a=0;const As=new Array(Ct);for(M=0;M<Ct;M++)As[M]=0;for(M=le;M<=Z;M++){const rt=m[M];if(Pe>=Ct){st(rt,P,R,!0);continue}let Mt;if(rt.key!=null)Mt=De.get(rt.key);else for(xe=ve;xe<=ee;xe++)if(As[xe-ve]===0&&_s(rt,g[xe])){Mt=xe;break}Mt===void 0?st(rt,P,R,!0):(As[Mt-ve]=M+1,Mt>=$a?$a=Mt:Ln=!0,A(rt,g[Mt],b,null,P,R,j,I,L),Pe++)}const Ma=Ln?my(As):Zn;for(xe=Ma.length-1,M=Ct-1;M>=0;M--){const rt=ve+M,Mt=g[rt],Ta=rt+1<X?g[rt+1].el:$;As[M]===0?A(null,Mt,b,Ta,P,R,j,I,L):Ln&&(xe<0||M!==Ma[xe]?mt(Mt,b,Ta,2):xe--)}}},mt=(m,g,b,$,P=null)=>{const{el:R,type:j,transition:I,children:L,shapeFlag:M}=m;if(M&6){mt(m.component.subTree,g,b,$);return}if(M&128){m.suspense.move(g,b,$);return}if(M&64){j.move(m,g,b,ke);return}if(j===G){o(R,g,b);for(let Z=0;Z<L.length;Z++)mt(L[Z],g,b,$);o(m.anchor,g,b);return}if(j===wl){F(m,g,b);return}if($!==2&&M&1&&I)if($===0)I.beforeEnter(R),o(R,g,b),He(()=>I.enter(R),P);else{const{leave:Z,delayLeave:ee,afterLeave:le}=I,ve=()=>o(R,g,b),De=()=>{Z(R,()=>{ve(),le&&le()})};ee?ee(R,ve,De):De()}else o(R,g,b)},st=(m,g,b,$=!1,P=!1)=>{const{type:R,props:j,ref:I,children:L,dynamicChildren:M,shapeFlag:X,patchFlag:Z,dirs:ee}=m;if(I!=null&&cr(I,null,b,m,!0),X&256){g.ctx.deactivate(m);return}const le=X&1&&ee,ve=!Xn(m);let De;if(ve&&(De=j&&j.onVnodeBeforeUnmount)&&vt(De,g,m),X&6)W(m.component,b,$);else{if(X&128){m.suspense.unmount(b,$);return}le&&yn(m,null,g,"beforeUnmount"),X&64?m.type.remove(m,g,b,P,ke,$):M&&(R!==G||Z>0&&Z&64)?T(M,g,b,!1,!0):(R===G&&Z&384||!P&&X&16)&&T(L,g,b),$&&Gt(m)}(ve&&(De=j&&j.onVnodeUnmounted)||le)&&He(()=>{De&&vt(De,g,m),le&&yn(m,null,g,"unmounted")},b)},Gt=m=>{const{type:g,el:b,anchor:$,transition:P}=m;if(g===G){S(b,$);return}if(g===wl){V(m);return}const R=()=>{l(b),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(m.shapeFlag&1&&P&&!P.persisted){const{leave:j,delayLeave:I}=P,L=()=>j(b,R);I?I(m.el,R,L):L()}else R()},S=(m,g)=>{let b;for(;m!==g;)b=d(m),l(m),m=b;l(g)},W=(m,g,b)=>{const{bum:$,scope:P,update:R,subTree:j,um:I}=m;$&&Jn($),P.stop(),R&&(R.active=!1,st(j,m,g,b)),I&&He(I,g),He(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},T=(m,g,b,$=!1,P=!1,R=0)=>{for(let j=R;j<m.length;j++)st(m[j],g,b,$,P)},K=m=>m.shapeFlag&6?K(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),ge=(m,g,b)=>{m==null?g._vnode&&st(g._vnode,null,null,!0):A(g._vnode||null,m,g,null,null,null,b),pp(),g._vnode=m},ke={p:A,um:st,m:mt,r:Gt,mt:Ee,mc:ue,pc:ye,pbc:me,n:K,o:t};let fe,ie;return n&&([fe,ie]=n(ke)),{render:ge,hydrate:fe,createApp:dy(ge,fe)}}function hn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function la(t,n,s=!1){const o=t.children,l=n.children;if(se(o)&&se(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=tn(l[r]),i.el=a.el),s||la(a,i))}}function my(t){const n=t.slice(),s=[0];let o,l,r,a,i;const p=t.length;for(o=0;o<p;o++){const u=t[o];if(u!==0){if(l=s[s.length-1],t[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,t[s[i]]<u?r=i+1:a=i;u<t[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const vy=t=>t.__isTeleport,Ts=t=>t&&(t.disabled||t.disabled===""),Xa=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,ir=(t,n)=>{const s=t&&t.to;return Ie(s)?n?n(s):null:s},gy={__isTeleport:!0,process(t,n,s,o,l,r,a,i,p,u){const{mc:f,pc:y,pbc:d,o:{insert:h,querySelector:v,createText:C,createComment:A}}=u,x=Ts(n.props);let{shapeFlag:E,children:D,dynamicChildren:F}=n;if(t==null){const V=n.el=C(""),O=n.anchor=C("");h(V,s,o),h(O,s,o);const q=n.target=ir(n.props,v),re=n.targetAnchor=C("");q&&(h(re,q),a=a||Xa(q));const ue=(de,me)=>{E&16&&f(D,de,me,l,r,a,i,p)};x?ue(s,O):q&&ue(q,re)}else{n.el=t.el;const V=n.anchor=t.anchor,O=n.target=t.target,q=n.targetAnchor=t.targetAnchor,re=Ts(t.props),ue=re?s:O,de=re?V:q;if(a=a||Xa(O),F?(d(t.dynamicChildren,F,ue,l,r,a,i),la(t,n,!0)):p||y(t,n,ue,de,l,r,a,i,!1),x)re||Eo(n,s,V,u,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const me=n.target=ir(n.props,v);me&&Eo(n,me,null,u,0)}else re&&Eo(n,O,q,u,1)}},remove(t,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:p,anchor:u,targetAnchor:f,target:y,props:d}=t;if(y&&r(f),(a||!Ts(d))&&(r(u),i&16))for(let h=0;h<p.length;h++){const v=p[h];l(v,n,s,!0,!!v.dynamicChildren)}},move:Eo,hydrate:By};function Eo(t,n,s,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:p,children:u,props:f}=t,y=r===2;if(y&&o(a,n,s),(!y||Ts(f))&&p&16)for(let d=0;d<u.length;d++)l(u[d],n,s,2);y&&o(i,n,s)}function By(t,n,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:p}},u){const f=n.target=ir(n.props,p);if(f){const y=f._lpa||f.firstChild;if(n.shapeFlag&16)if(Ts(n.props))n.anchor=u(a(t),n,i(t),s,o,l,r),n.targetAnchor=y;else{n.anchor=a(t);let d=y;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){n.targetAnchor=d,f._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(y,n,f,s,o,l,r)}}return n.anchor&&a(n.anchor)}const Ay=gy,G=Symbol(void 0),ra=Symbol(void 0),fn=Symbol(void 0),wl=Symbol(void 0),Is=[];let xt=null;function _(t=!1){Is.push(xt=t?null:[])}function _y(){Is.pop(),xt=Is[Is.length-1]||null}let Xs=1;function ec(t){Xs+=t}function Pp(t){return t.dynamicChildren=Xs>0?xt||Zn:null,_y(),Xs>0&&xt&&xt.push(t),t}function w(t,n,s,o,l,r){return Pp(e(t,n,s,o,l,r,!0))}function Q(t,n,s,o,l){return Pp(Y(t,n,s,o,l,!0))}function os(t){return t?t.__v_isVNode===!0:!1}function _s(t,n){return t.type===n.type&&t.key===n.key}const dl="__vInternal",Op=({key:t})=>t!=null?t:null,Po=({ref:t,ref_key:n,ref_for:s})=>t!=null?Ie(t)||Ce(t)||ce(t)?{i:We,r:t,k:n,f:!!s}:t:null;function e(t,n=null,s=null,o=0,l=null,r=t===G?0:1,a=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Op(n),ref:n&&Po(n),scopeId:il,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null};return i?(aa(p,s),r&128&&t.normalize(p)):s&&(p.shapeFlag|=Ie(s)?8:16),Xs>0&&!a&&xt&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&xt.push(p),p}const Y=Cy;function Cy(t,n=null,s=null,o=0,l=null,r=!1){if((!t||t===Xd)&&(t=fn),os(t)){const i=On(t,n,!0);return s&&aa(i,s),Xs>0&&!r&&xt&&(i.shapeFlag&6?xt[xt.indexOf(t)]=i:xt.push(i)),i.patchFlag|=-2,i}if(Sy(t)&&(t=t.__vccOpts),n){n=Se(n);let{class:i,style:p}=n;i&&!Ie(i)&&(n.class=Te(i)),Ne(p)&&(sp(p)&&!se(p)&&(p=nt({},p)),n.style=Ke(p))}const a=Ie(t)?1:dp(t)?128:vy(t)?64:Ne(t)?4:ce(t)?2:0;return e(t,n,s,o,l,a,r,!0)}function Se(t){return t?sp(t)||dl in t?nt({},t):t:null}function On(t,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=t,i=n?Wt(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Op(i),ref:n&&n.ref?s&&l?se(l)?l.concat(Po(n)):[l,Po(n)]:Po(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==G?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor}}function c(t=" ",n=0){return Y(ra,null,t,n)}function U(t="",n=!1){return n?(_(),Q(fn,null,t)):Y(fn,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Y(fn):se(t)?Y(G,null,t.slice()):typeof t=="object"?tn(t):Y(ra,null,String(t))}function tn(t){return t.el===null||t.memo?t:On(t)}function aa(t,n){let s=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(se(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),aa(t,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(dl in n)?n._ctx=We:l===3&&We&&(We.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else ce(n)?(n={default:n,_ctx:We},s=32):(n=String(n),o&64?(s=16,n=[c(n)]):s=8);t.children=n,t.shapeFlag|=s}function Wt(...t){const n={};for(let s=0;s<t.length;s++){const o=t[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=Te([n.class,o.class]));else if(l==="style")n.style=Ke([n.style,o.style]);else if(el(l)){const r=n[l],a=o[l];a&&r!==a&&!(se(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function vt(t,n,s,o=null){Ft(t,n,7,[s,o])}const by=Sp();let Ey=0;function Dy(t,n,s){const o=t.type,l=(n?n.appContext:t.appContext)||by,r={uid:Ey++,vnode:t,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xp(o,l),emitsOptions:fp(o,l),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:o.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Rd.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const In=()=>Ue||We,ls=t=>{Ue=t,t.scope.on()},Fn=()=>{Ue&&Ue.scope.off(),Ue=null};function $p(t){return t.vnode.shapeFlag&4}let eo=!1;function xy(t,n=!1){eo=n;const{props:s,children:o}=t.vnode,l=$p(t);ay(t,s,l,n),py(t,o);const r=l?wy(t,n):void 0;return eo=!1,r}function wy(t,n){const s=t.type;t.accessCache=Object.create(null),t.proxy=ll(new Proxy(t.ctx,ty));const{setup:o}=s;if(o){const l=t.setupContext=o.length>1?ky(t):null;ls(t),is();const r=ln(o,t,0,[t.props,l]);if(ps(),Fn(),Hi(r)){if(r.then(Fn,Fn),n)return r.then(a=>{tc(t,a,n)}).catch(a=>{rl(a,t,0)});t.asyncDep=r}else tc(t,r,n)}else Mp(t,n)}function tc(t,n,s){ce(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Ne(n)&&(t.setupState=lp(n)),Mp(t,s)}let nc;function Mp(t,n,s){const o=t.type;if(!t.render){if(!n&&nc&&!o.render){const l=o.template;if(l){const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:p}=o,u=nt(nt({isCustomElement:r,delimiters:i},a),p);o.render=nc(l,u)}}t.render=o.render||wt}ls(t),is(),ny(t),ps(),Fn()}function Fy(t){return new Proxy(t.attrs,{get(n,s){return ht(t,"get","$attrs"),n[s]}})}function ky(t){const n=o=>{t.exposed=o||{}};let s;return{get attrs(){return s||(s=Fy(t))},slots:t.slots,emit:t.emit,expose:n}}function yl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lp(ll(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in No)return No[s](t)}}))}function pr(t,n=!0){return ce(t)?t.displayName||t.name:t.name||n&&t.__name}function Sy(t){return ce(t)&&"__vccOpts"in t}const k=(t,n)=>Pd(t,n,eo);function kt(t,n,s){const o=arguments.length;return o===2?Ne(n)&&!se(n)?os(n)?Y(t,null,[n]):Y(t,n):Y(t,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&os(s)&&(s=[s]),Y(t,n,s))}const Py="3.2.37",Oy="http://www.w3.org/2000/svg",An=typeof document!="undefined"?document:null,sc=An&&An.createElement("template"),$y={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,o)=>{const l=n?An.createElementNS(Oy,t):An.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},cloneNode(t){const n=t.cloneNode(!0);return"_value"in t&&(n._value=t._value),n},insertStaticContent(t,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{sc.innerHTML=o?`<svg>${t}</svg>`:t;const i=sc.content;if(o){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function My(t,n,s){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function Ty(t,n,s){const o=t.style,l=Ie(s);if(s&&!l){for(const r in s)ur(o,r,s[r]);if(n&&!Ie(n))for(const r in n)s[r]==null&&ur(o,r,"")}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const oc=/\s*!important$/;function ur(t,n,s){if(se(s))s.forEach(o=>ur(t,n,o));else if(s==null&&(s=""),n.startsWith("--"))t.setProperty(n,s);else{const o=Iy(t,n);oc.test(s)?t.setProperty($n(o),s.replace(oc,""),"important"):t[o]=s}}const lc=["Webkit","Moz","ms"],Fl={};function Iy(t,n){const s=Fl[n];if(s)return s;let o=Lt(n);if(o!=="filter"&&o in t)return Fl[n]=o;o=sl(o);for(let l=0;l<lc.length;l++){const r=lc[l]+o;if(r in t)return Fl[n]=r}return n}const rc="http://www.w3.org/1999/xlink";function Ry(t,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(rc,n.slice(6,n.length)):t.setAttributeNS(rc,n,s);else{const r=If(n);s==null||r&&!ji(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function Vy(t,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),t[n]=s==null?"":s;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const p=s==null?"":s;(t.value!==p||t.tagName==="OPTION")&&(t.value=p),s==null&&t.removeAttribute(n);return}let i=!1;if(s===""||s==null){const p=typeof t[n];p==="boolean"?s=ji(s):s==null&&p==="string"?(s="",i=!0):p==="number"&&(s=0,i=!0)}try{t[n]=s}catch{}i&&t.removeAttribute(n)}const[Tp,Ly]=(()=>{let t=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(s&&Number(s[1])<=53)}return[t,n]})();let fr=0;const jy=Promise.resolve(),Ny=()=>{fr=0},Uy=()=>fr||(jy.then(Ny),fr=Tp());function qn(t,n,s,o){t.addEventListener(n,s,o)}function Hy(t,n,s,o){t.removeEventListener(n,s,o)}function zy(t,n,s,o,l=null){const r=t._vei||(t._vei={}),a=r[n];if(o&&a)a.value=o;else{const[i,p]=qy(n);if(o){const u=r[n]=Wy(o,l);qn(t,i,u,p)}else a&&(Hy(t,i,a,p),r[n]=void 0)}}const ac=/(?:Once|Passive|Capture)$/;function qy(t){let n;if(ac.test(t)){n={};let s;for(;s=t.match(ac);)t=t.slice(0,t.length-s[0].length),n[s[0].toLowerCase()]=!0}return[$n(t.slice(2)),n]}function Wy(t,n){const s=o=>{const l=o.timeStamp||Tp();(Ly||l>=s.attached-1)&&Ft(Yy(o,s.value),n,5,[o])};return s.value=t,s.attached=Uy(),s}function Yy(t,n){if(se(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const cc=/^on[a-z]/,Ky=(t,n,s,o,l=!1,r,a,i,p)=>{n==="class"?My(t,o,l):n==="style"?Ty(t,s,o):el(n)?Ur(n)||zy(t,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Zy(t,n,o,l))?Vy(t,n,o,r,a,i,p):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),Ry(t,n,o,l))};function Zy(t,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&cc.test(n)&&ce(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||cc.test(n)&&Ie(s)?!1:n in t}const ic=t=>{const n=t.props["onUpdate:modelValue"]||!1;return se(n)?s=>Jn(n,s):n};function Gy(t){t.target.composing=!0}function pc(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Jy={created(t,{modifiers:{lazy:n,trim:s,number:o}},l){t._assign=ic(l);const r=o||l.props&&l.props.type==="number";qn(t,n?"change":"input",a=>{if(a.target.composing)return;let i=t.value;s&&(i=i.trim()),r&&(i=Gl(i)),t._assign(i)}),s&&qn(t,"change",()=>{t.value=t.value.trim()}),n||(qn(t,"compositionstart",Gy),qn(t,"compositionend",pc),qn(t,"change",pc))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:s,trim:o,number:l}},r){if(t._assign=ic(r),t.composing||document.activeElement===t&&t.type!=="range"&&(s||o&&t.value.trim()===n||(l||t.type==="number")&&Gl(t.value)===n))return;const a=n==null?"":n;t.value!==a&&(t.value=a)}},Qy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},uc=(t,n)=>s=>{if(!("key"in s))return;const o=$n(s.key);if(n.some(l=>l===o||Qy[l]===o))return t(s)},Ip={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):Cs(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(t),Cs(t,!0),o.enter(t)):o.leave(t,()=>{Cs(t,!1)}):Cs(t,n))},beforeUnmount(t,{value:n}){Cs(t,n)}};function Cs(t,n){t.style.display=n?t._vod:"none"}const Xy=nt({patchProp:Ky},$y);let fc;function e8(){return fc||(fc=yy(Xy))}const t8=(...t)=>{const n=e8().createApp(...t),{mount:s}=n;return n.mount=o=>{const l=n8(o);if(!l)return;const r=n._component;!ce(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function n8(t){return Ie(t)?document.querySelector(t):t}var s8=Object.defineProperty,dc=Object.getOwnPropertySymbols,o8=Object.prototype.hasOwnProperty,l8=Object.prototype.propertyIsEnumerable,yc=(t,n,s)=>n in t?s8(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,r8=(t,n)=>{for(var s in n||(n={}))o8.call(n,s)&&yc(t,s,n[s]);if(dc)for(var s of dc(n))l8.call(n,s)&&yc(t,s,n[s]);return t},Rp="usehead",hc="head:count",kl="data-head-attrs",a8=(t,n,s)=>{const o=s.createElement(t);for(const l of Object.keys(n)){let r=n[l];l==="key"||r===!1||(l==="children"?o.textContent=r:o.setAttribute(l,r))}return o};function c8(t,n){if(t instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!t.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===t.nonce&&t.isEqualNode(o)}}return t.isEqualNode(n)}var i8=t=>{const n=["key","id","name","property"];for(const s of n){const o=typeof t.getAttribute=="function"?t.hasAttribute(s)?t.getAttribute(s):void 0:t[s];if(o!==void 0)return{name:s,value:o}}},p8=()=>{const t=z(Rp);if(!t)throw new Error("You may forget to apply app.use(head)");return t},u8=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],f8=t=>{const n=[];for(const s of Object.keys(t))if(t[s]!=null){if(s==="title")n.push({tag:s,props:{children:t[s]}});else if(s==="base")n.push({tag:s,props:r8({key:"default"},t[s])});else if(u8.includes(s)){const o=t[s];Array.isArray(o)?o.forEach(l=>{n.push({tag:s,props:l})}):o&&n.push({tag:s,props:o})}}return n},mc=(t,n)=>{const s=t.getAttribute(kl);if(s)for(const l of s.split(","))l in n||t.removeAttribute(l);const o=[];for(const l in n){const r=n[l];r!=null&&(r===!1?t.removeAttribute(l):t.setAttribute(l,r),o.push(l))}o.length?t.setAttribute(kl,o.join(",")):t.removeAttribute(kl)},d8=(t=window.document,n,s)=>{var o;const l=t.head;let r=l.querySelector(`meta[name="${hc}"]`);const a=r?Number(r.getAttribute("content")):0,i=[];if(r)for(let u=0,f=r.previousElementSibling;u<a;u++,f=(f==null?void 0:f.previousElementSibling)||null)((o=f==null?void 0:f.tagName)==null?void 0:o.toLowerCase())===n&&i.push(f);else r=t.createElement("meta"),r.setAttribute("name",hc),r.setAttribute("content","0"),l.append(r);let p=s.map(u=>a8(u.tag,u.props,t));p=p.filter(u=>{for(let f=0;f<i.length;f++){const y=i[f];if(c8(y,u))return i.splice(f,1),!1}return!0}),i.forEach(u=>{var f;return(f=u.parentNode)==null?void 0:f.removeChild(u)}),p.forEach(u=>{l.insertBefore(u,r)}),r.setAttribute("content",""+(a-i.length+p.length))},y8=()=>{let t=[],n=new Set;const s={install(o){o.config.globalProperties.$head=s,o.provide(Rp,s)},get headTags(){const o=[];return t.forEach(l=>{f8(l.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const i=i8(a.props);if(i){let p=-1;for(let u=0;u<o.length;u++){const f=o[u],y=f.props[i.name],d=a.props[i.name];if(f.tag===a.tag&&y===d){p=u;break}}p!==-1&&o.splice(p,1)}}o.push(a)})}),o},addHeadObjs(o){t.push(o)},removeHeadObjs(o){t=t.filter(l=>l!==o)},updateDOM(o=window.document){let l,r={},a={};const i={};for(const u of s.headTags){if(u.tag==="title"){l=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(r,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(a,u.props);continue}i[u.tag]=i[u.tag]||[],i[u.tag].push(u)}l!==void 0&&(o.title=l),mc(o.documentElement,r),mc(o.body,a);const p=new Set([...Object.keys(i),...n]);for(const u of p)d8(o,u,i[u]||[]);n.clear(),Object.keys(i).forEach(u=>n.add(u))}};return s},h8=typeof window!="undefined",m8=t=>{const n=N(t),s=p8();s.addHeadObjs(n),h8&&(po(()=>{s.updateDOM()}),ul(()=>{s.removeHeadObjs(n),s.updateDOM()}))};const Rs=Symbol("v-click-clicks"),_n=Symbol("v-click-clicks-elements"),dr=Symbol("v-click-clicks-order-map"),Vs=Symbol("v-click-clicks-disabled"),Vp=Symbol("slidev-slide-scale"),J=Symbol("slidev-slidev-context"),v8=Symbol("slidev-route"),g8=Symbol("slidev-slide-context"),Bn="slidev-vclick-target",Sl="slidev-vclick-hidden",B8="slidev-vclick-fade",Pl="slidev-vclick-hidden-explicitly",bs="slidev-vclick-current",Do="slidev-vclick-prior";function A8(t){return t=t||[],Array.isArray(t)?t:[t]}function yr(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function _8(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function C8(t){return t!=null}function b8(t,n){return Object.fromEntries(Object.entries(t).map(([s,o])=>n(s,o)).filter(C8))}var En={theme:"default",title:"Vue3 \u6700\u65B0\u69CB\u6587 <script setup> \u306E\u7D39\u4ECB",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",background:"./future02.jpeg",class:"text-center",hideInToc:!0};const _e=En;var Vi;const rn=(Vi=_e.aspectRatio)!=null?Vi:16/9;var Li;const kn=(Li=_e.canvasWidth)!=null?Li:980,Lp=Math.round(kn/rn),jp=k(()=>b8(_e.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function _t(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const Rn=Me({page:0,clicks:0});let E8=[],D8=[];_t(Rn,"$syncUp",!0);_t(Rn,"$syncDown",!0);_t(Rn,"$paused",!1);_t(Rn,"$onSet",t=>E8.push(t));_t(Rn,"$onPatch",t=>D8.push(t));_t(Rn,"$patch",async()=>!1);function Np(t,n,s=!1){const o=[];let l=!1,r=!1,a,i;const p=Me(n);function u(h){o.push(h)}function f(h,v){clearTimeout(a),l=!0,p[h]=v,a=setTimeout(()=>l=!1,0)}function y(h){l||(clearTimeout(i),r=!0,Object.entries(h).forEach(([v,C])=>{p[v]=C}),i=setTimeout(()=>r=!1,0))}function d(h){let v;s?s&&window.addEventListener("storage",A=>{A&&A.key===h&&A.newValue&&y(JSON.parse(A.newValue))}):(v=new BroadcastChannel(h),v.addEventListener("message",A=>y(A.data)));function C(){!s&&v&&!r?v.postMessage(Ae(p)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(p)),l||o.forEach(A=>A(p))}if(pe(p,C,{deep:!0}),s){const A=window.localStorage.getItem(h);A&&y(JSON.parse(A))}}return{init:d,onPatch:u,patch:f,state:p}}const{init:x8,onPatch:w8,patch:vc,state:Ol}=Np(Rn,{page:1,clicks:0}),Vn=Me({});let F8=[],k8=[];_t(Vn,"$syncUp",!0);_t(Vn,"$syncDown",!0);_t(Vn,"$paused",!1);_t(Vn,"$onSet",t=>F8.push(t));_t(Vn,"$onPatch",t=>k8.push(t));_t(Vn,"$patch",async()=>!1);const{init:S8,onPatch:P8,patch:Up,state:Ho}=Np(Vn,{},!1),O8="modulepreload",gc={},$8="/future-tech-conference-slide-2022-07-18/",ds=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${$8}${o}`,o in gc)return;gc[o]=!0;const l=o.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":O8,l||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),l)return new Promise((i,p)=>{a.addEventListener("load",i),a.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};function ot(t,n,s){return Array.isArray(t)?(t.length=Math.max(t.length,n),t.splice(n,1,s),s):(t[n]=s,s)}function M8(t,n){if(Array.isArray(t)){t.splice(n,1);return}delete t[n]}var Bc;const At=typeof window!="undefined",T8=t=>typeof t!="undefined",I8=Object.prototype.toString,R8=t=>typeof t=="number",Hp=t=>typeof t=="string",zo=t=>I8.call(t)==="[object Object]",hr=()=>+Date.now(),an=()=>{};At&&((Bc=window==null?void 0:window.navigator)==null?void 0:Bc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function V8(t,n){function s(...o){t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return s}const zp=t=>t();function L8(t=zp){const n=N(!0);function s(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:s,resume:o,eventFilter:(...r)=>{n.value&&t(...r)}}}function j8(t,n){var s;if(typeof t=="number")return t+n;const o=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=t.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?t:r+l}function dn(t){return Zf()?(Gf(t),!0):!1}function Ve(...t){return k(()=>t.every(n=>B(n)))}function ct(t){return k(()=>!B(t))}function N8(t){if(!Ce(t))return Me(t);const n=new Proxy({},{get(s,o,l){return B(Reflect.get(t.value,o,l))},set(s,o,l){return Ce(t.value[o])&&!Ce(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(t.value,o)},has(s,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Me(n)}var U8=Object.defineProperty,H8=Object.defineProperties,z8=Object.getOwnPropertyDescriptors,Ac=Object.getOwnPropertySymbols,q8=Object.prototype.hasOwnProperty,W8=Object.prototype.propertyIsEnumerable,_c=(t,n,s)=>n in t?U8(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Y8=(t,n)=>{for(var s in n||(n={}))q8.call(n,s)&&_c(t,s,n[s]);if(Ac)for(var s of Ac(n))W8.call(n,s)&&_c(t,s,n[s]);return t},K8=(t,n)=>H8(t,z8(n));function Z8(t){if(!Ce(t))return wd(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=xd(()=>({get(){return t.value[s]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[s]=o,t.value=l}else{const l=K8(Y8({},t.value),{[s]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return n}function G8(t,n=!0){In()?Bp(t):n?t():ze(t)}function J8(t,n=!0){In()?us(t):n?t():ze(t)}function ca(t){In()&&fl(t)}function Q8(t,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=N(!1);function i(){r&&(clearInterval(r),r=null)}function p(){a.value=!1,i()}function u(){B(n)<=0||(a.value=!0,l&&t(),i(),r=setInterval(t,B(n)))}if(o&&At&&u(),Ce(n)){const f=pe(n,()=>{a.value&&At&&u()});dn(f)}return dn(p),{isActive:a,pause:p,resume:u}}function qp(t=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=Ce(t),r=N(t);function a(i){return arguments.length?(r.value=i,r.value):(r.value=r.value===B(s)?B(o):B(s),r.value)}return l?a:[r,a]}var Cc=Object.getOwnPropertySymbols,X8=Object.prototype.hasOwnProperty,eh=Object.prototype.propertyIsEnumerable,th=(t,n)=>{var s={};for(var o in t)X8.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Cc)for(var o of Cc(t))n.indexOf(o)<0&&eh.call(t,o)&&(s[o]=t[o]);return s};function nh(t,n,s={}){const o=s,{eventFilter:l=zp}=o,r=th(o,["eventFilter"]);return pe(t,V8(l,n),r)}function sh(t,n,s){const o=pe(t,(...l)=>(ze(()=>o()),n(...l)),s)}var oh=Object.defineProperty,lh=Object.defineProperties,rh=Object.getOwnPropertyDescriptors,qo=Object.getOwnPropertySymbols,Wp=Object.prototype.hasOwnProperty,Yp=Object.prototype.propertyIsEnumerable,bc=(t,n,s)=>n in t?oh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ah=(t,n)=>{for(var s in n||(n={}))Wp.call(n,s)&&bc(t,s,n[s]);if(qo)for(var s of qo(n))Yp.call(n,s)&&bc(t,s,n[s]);return t},ch=(t,n)=>lh(t,rh(n)),ih=(t,n)=>{var s={};for(var o in t)Wp.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&qo)for(var o of qo(t))n.indexOf(o)<0&&Yp.call(t,o)&&(s[o]=t[o]);return s};function ph(t,n,s={}){const o=s,{eventFilter:l}=o,r=ih(o,["eventFilter"]),{eventFilter:a,pause:i,resume:p,isActive:u}=L8(l);return{stop:nh(t,n,ch(ah({},r),{eventFilter:a})),pause:i,resume:p,isActive:u}}function Xe(t){var n;const s=B(t);return(n=s==null?void 0:s.$el)!=null?n:s}const Ze=At?window:void 0,uh=At?window.document:void 0;function be(...t){let n,s,o,l;if(Hp(t[0])?([s,o,l]=t,n=Ze):[n,s,o,l]=t,!n)return an;let r=an;const a=pe(()=>Xe(n),p=>{r(),p&&(p.addEventListener(s,o,l),r=()=>{p.removeEventListener(s,o,l),r=an})},{immediate:!0,flush:"post"}),i=()=>{a(),r()};return dn(i),i}function fh(t,n,s={}){const{window:o=Ze,ignore:l,capture:r=!0,detectIframe:a=!1}=s;if(!o)return;const i=N(!0);let p;const u=d=>{o.clearTimeout(p);const h=Xe(t),v=d.composedPath();!h||h===d.target||v.includes(h)||!i.value||l&&l.length>0&&l.some(C=>{const A=Xe(C);return A&&(d.target===A||v.includes(A))})||n(d)},f=[be(o,"click",u,{passive:!0,capture:r}),be(o,"pointerdown",d=>{const h=Xe(t);i.value=!!h&&!d.composedPath().includes(h)},{passive:!0}),be(o,"pointerup",d=>{if(d.button===0){const h=d.composedPath();d.composedPath=()=>h,p=o.setTimeout(()=>u(d),50)}},{passive:!0}),a&&be(o,"blur",d=>{var h;const v=Xe(t);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(v!=null&&v.contains(document.activeElement))&&n(d)})].filter(Boolean);return()=>f.forEach(d=>d())}const dh=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):t?()=>!0:()=>!1;function yh(t,n,s={}){const{target:o=Ze,eventName:l="keydown",passive:r=!1}=s,a=dh(t);return be(o,l,p=>{a(p)&&n(p)},r)}function hh(t={}){const{window:n=Ze}=t,s=N(0);return n&&(be(n,"blur",()=>s.value+=1,!0),be(n,"focus",()=>s.value+=1,!0)),k(()=>(s.value,n==null?void 0:n.document.activeElement))}function Oo(t,n={}){const{window:s=Ze}=n,o=Boolean(s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=N(!1),a=()=>{!o||(l||(l=s.matchMedia(t)),r.value=l.matches)};return G8(()=>{a(),l&&("addEventListener"in l?l.addEventListener("change",a):l.addListener(a),dn(()=>{"removeEventListener"in l?l.removeEventListener("change",a):l.removeListener(a)}))}),r}const mh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var vh=Object.defineProperty,Ec=Object.getOwnPropertySymbols,gh=Object.prototype.hasOwnProperty,Bh=Object.prototype.propertyIsEnumerable,Dc=(t,n,s)=>n in t?vh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Ah=(t,n)=>{for(var s in n||(n={}))gh.call(n,s)&&Dc(t,s,n[s]);if(Ec)for(var s of Ec(n))Bh.call(n,s)&&Dc(t,s,n[s]);return t};function _h(t,n={}){function s(i,p){let u=t[i];return p!=null&&(u=j8(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Ze}=n;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>Oo(`(min-width: ${s(i)})`,n),a=Object.keys(t).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>r(p),enumerable:!0,configurable:!0}),i),{});return Ah({greater:r,smaller(i){return Oo(`(max-width: ${s(i,-.1)})`,n)},between(i,p){return Oo(`(min-width: ${s(i)}) and (max-width: ${s(p,-.1)})`,n)},isGreater(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isInBetween(i,p){return l(`(min-width: ${s(i)}) and (max-width: ${s(p,-.1)})`)}},a)}const mr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},vr="__vueuse_ssr_handlers__";mr[vr]=mr[vr]||{};const Ch=mr[vr];function bh(t,n){return Ch[t]||n}function Eh(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const Dh={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function Ot(t,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,shallow:u,window:f=Ze,eventFilter:y,onError:d=O=>{console.error(O)}}=o,h=(u?jt:N)(n);if(!s)try{s=bh("getDefaultStorage",()=>{var O;return(O=Ze)==null?void 0:O.localStorage})()}catch(O){d(O)}if(!s)return h;const v=B(n),C=Eh(v),A=(l=o.serializer)!=null?l:Dh[C],{pause:x,resume:E}=ph(h,()=>D(h.value),{flush:r,deep:a,eventFilter:y});return f&&i&&be(f,"storage",V),V(),h;function D(O){try{O==null?s.removeItem(t):s.setItem(t,A.write(O))}catch(q){d(q)}}function F(O){if(!(O&&O.key!==t)){x();try{const q=O?O.newValue:s.getItem(t);return q==null?(p&&v!==null&&s.setItem(t,A.write(v)),v):typeof q!="string"?q:A.read(q)}catch(q){d(q)}finally{E()}}}function V(O){O&&O.key!==t||(h.value=F(O))}}function xh(t){return Oo("(prefers-color-scheme: dark)",t)}var wh=Object.defineProperty,Fh=Object.defineProperties,kh=Object.getOwnPropertyDescriptors,xc=Object.getOwnPropertySymbols,Sh=Object.prototype.hasOwnProperty,Ph=Object.prototype.propertyIsEnumerable,wc=(t,n,s)=>n in t?wh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Oh=(t,n)=>{for(var s in n||(n={}))Sh.call(n,s)&&wc(t,s,n[s]);if(xc)for(var s of xc(n))Ph.call(n,s)&&wc(t,s,n[s]);return t},$h=(t,n)=>Fh(t,kh(n));function Db(t,n={}){var s,o;const l=(s=n.draggingElement)!=null?s:Ze,r=N((o=n.initialValue)!=null?o:{x:0,y:0}),a=N(),i=d=>n.pointerTypes?n.pointerTypes.includes(d.pointerType):!0,p=d=>{B(n.preventDefault)&&d.preventDefault(),B(n.stopPropagation)&&d.stopPropagation()},u=d=>{var h;if(!i(d)||B(n.exact)&&d.target!==B(t))return;const v=B(t).getBoundingClientRect(),C={x:d.pageX-v.left,y:d.pageY-v.top};((h=n.onStart)==null?void 0:h.call(n,C,d))!==!1&&(a.value=C,p(d))},f=d=>{var h;!i(d)||!a.value||(r.value={x:d.pageX-a.value.x,y:d.pageY-a.value.y},(h=n.onMove)==null||h.call(n,r.value,d),p(d))},y=d=>{var h;!i(d)||!a.value||(a.value=void 0,(h=n.onEnd)==null||h.call(n,r.value,d),p(d))};return At&&(be(t,"pointerdown",u,!0),be(l,"pointermove",f,!0),be(l,"pointerup",y,!0)),$h(Oh({},Z8(r)),{position:r,isDragging:k(()=>!!a.value),style:k(()=>`left:${r.value.x}px;top:${r.value.y}px;`)})}var Fc=Object.getOwnPropertySymbols,Mh=Object.prototype.hasOwnProperty,Th=Object.prototype.propertyIsEnumerable,Ih=(t,n)=>{var s={};for(var o in t)Mh.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Fc)for(var o of Fc(t))n.indexOf(o)<0&&Th.call(t,o)&&(s[o]=t[o]);return s};function Rh(t,n,s={}){const o=s,{window:l=Ze}=o,r=Ih(o,["window"]);let a;const i=l&&"ResizeObserver"in l,p=()=>{a&&(a.disconnect(),a=void 0)},u=pe(()=>Xe(t),y=>{p(),i&&l&&y&&(a=new ResizeObserver(n),a.observe(y,r))},{immediate:!0,flush:"post"}),f=()=>{p(),u()};return dn(f),{isSupported:i,stop:f}}function Kp(t,n={}){const{immediate:s=!0,window:o=Ze}=n,l=N(!1);let r=null;function a(){!l.value||!o||(t(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),dn(p),{isActive:l,pause:p,resume:i}}function Vh(t,n={width:0,height:0},s={}){const o=N(n.width),l=N(n.height);return Rh(t,([r])=>{o.value=r.contentRect.width,l.value=r.contentRect.height},s),pe(()=>Xe(t),r=>{o.value=r?n.width:0,l.value=r?n.height:0}),{width:o,height:l}}const kc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Lh(t,n={}){const{document:s=uh,autoExit:o=!1}=n,l=t||(s==null?void 0:s.querySelector("html")),r=N(!1);let a=!1,i=kc[0];if(!s)a=!1;else for(const C of kc)if(C[1]in s){i=C,a=!0;break}const[p,u,f,,y]=i;async function d(){!a||(s!=null&&s[f]&&await s[u](),r.value=!1)}async function h(){if(!a)return;await d();const C=Xe(l);C&&(await C[p](),r.value=!0)}async function v(){r.value?await d():await h()}return s&&be(s,y,()=>{r.value=!!(s!=null&&s[f])},!1),o&&dn(d),{isSupported:a,isFullscreen:r,enter:h,exit:d,toggle:v}}function jh(t,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=Ze}=s,i=a&&"IntersectionObserver"in a;let p=an;const u=i?pe(()=>({el:Xe(t),root:Xe(o)}),({el:y,root:d})=>{if(p(),!y)return;const h=new IntersectionObserver(n,{root:d,rootMargin:l,threshold:r});h.observe(y),p=()=>{h.disconnect(),p=an}},{immediate:!0,flush:"post"}):an,f=()=>{p(),u()};return dn(f),{isSupported:i,stop:f}}const Nh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Uh(t={}){const{reactive:n=!1,target:s=Ze,aliasMap:o=Nh,passive:l=!0,onEventFired:r=an}=t,a=Me(new Set),i={toJSON(){return{}},current:a},p=n?Me(i):i,u=new Set,f=new Set;function y(C,A){C in p&&(n?p[C]=A:p[C].value=A)}function d(){for(const C of f)y(C,!1)}function h(C,A){var x,E;const D=(x=C.key)==null?void 0:x.toLowerCase(),F=(E=C.code)==null?void 0:E.toLowerCase(),V=[F,D].filter(Boolean);F&&(A?a.add(C.code):a.delete(C.code));for(const O of V)f.add(O),y(O,A);D==="meta"&&!A?(u.forEach(O=>{a.delete(O),y(O,!1)}),u.clear()):typeof C.getModifierState=="function"&&C.getModifierState("Meta")&&A&&[...a,...V].forEach(O=>u.add(O))}s&&(be(s,"keydown",C=>(h(C,!0),r(C)),{passive:l}),be(s,"keyup",C=>(h(C,!1),r(C)),{passive:l}),be("blur",d,{passive:!0}),be("focus",d,{passive:!0}));const v=new Proxy(p,{get(C,A,x){if(typeof A!="string")return Reflect.get(C,A,x);if(A=A.toLowerCase(),A in o&&(A=o[A]),!(A in p))if(/[+_-]/.test(A)){const D=A.split(/[+_-]/g).map(F=>F.trim());p[A]=k(()=>D.every(F=>B(v[F])))}else p[A]=N(!1);const E=Reflect.get(C,A,x);return n?B(E):E}});return v}function xb(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=Ze,eventFilter:a}=t,i=N(l.x),p=N(l.y),u=N(null),f=C=>{n==="page"?(i.value=C.pageX,p.value=C.pageY):n==="client"&&(i.value=C.clientX,p.value=C.clientY),u.value="mouse"},y=()=>{i.value=l.x,p.value=l.y},d=C=>{if(C.touches.length>0){const A=C.touches[0];n==="page"?(i.value=A.pageX,p.value=A.pageY):n==="client"&&(i.value=A.clientX,p.value=A.clientY),u.value="touch"}},h=C=>a===void 0?f(C):a(()=>f(C),{}),v=C=>a===void 0?d(C):a(()=>d(C),{});return r&&(be(r,"mousemove",h,{passive:!0}),be(r,"dragover",h,{passive:!0}),s&&(be(r,"touchstart",v,{passive:!0}),be(r,"touchmove",v,{passive:!0}),o&&be(r,"touchend",y,{passive:!0}))),{x:i,y:p,sourceType:u}}var zt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(zt||(zt={}));function Hh(t,n={}){const s=N(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,i=Me({x:0,y:0}),p=(O,q)=>{i.x=O,i.y=q},u=Me({x:0,y:0}),f=(O,q)=>{u.x=O,u.y=q},y=k(()=>i.x-u.x),d=k(()=>i.y-u.y),{max:h,abs:v}=Math,C=k(()=>h(v(y.value),v(d.value))>=o),A=N(!1),x=N(!1),E=k(()=>C.value?v(y.value)>v(d.value)?y.value>0?zt.LEFT:zt.RIGHT:d.value>0?zt.UP:zt.DOWN:zt.NONE),D=O=>n.pointerTypes?n.pointerTypes.includes(O.pointerType):!0,F=[be(t,"pointerdown",O=>{var q,re;if(!D(O))return;x.value=!0,(re=(q=s.value)==null?void 0:q.style)==null||re.setProperty("touch-action","none");const ue=O.target;ue==null||ue.setPointerCapture(O.pointerId);const{clientX:de,clientY:me}=O;p(de,me),f(de,me),a==null||a(O)}),be(t,"pointermove",O=>{if(!D(O)||!x.value)return;const{clientX:q,clientY:re}=O;f(q,re),!A.value&&C.value&&(A.value=!0),A.value&&(l==null||l(O))}),be(t,"pointerup",O=>{var q,re;!D(O)||(A.value&&(r==null||r(O,E.value)),x.value=!1,A.value=!1,(re=(q=s.value)==null?void 0:q.style)==null||re.setProperty("touch-action","initial"))})],V=()=>F.forEach(O=>O());return{isSwiping:Yn(A),direction:Yn(E),posStart:Yn(i),posEnd:Yn(u),distanceX:y,distanceY:d,stop:V}}var zh=Object.defineProperty,Sc=Object.getOwnPropertySymbols,qh=Object.prototype.hasOwnProperty,Wh=Object.prototype.propertyIsEnumerable,Pc=(t,n,s)=>n in t?zh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Yh=(t,n)=>{for(var s in n||(n={}))qh.call(n,s)&&Pc(t,s,n[s]);if(Sc)for(var s of Sc(n))Wh.call(n,s)&&Pc(t,s,n[s]);return t};function wb(t={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame"}=t,r=N(hr()+s),a=()=>r.value=hr()+s,i=l==="requestAnimationFrame"?Kp(a,{immediate:o}):Q8(a,l,{immediate:o});return n?Yh({timestamp:r},i):r}function Rt(t,n,s,o={}){var l,r,a;const{passive:i=!1,eventName:p,deep:u=!1,defaultValue:f}=o,y=In(),d=s||(y==null?void 0:y.emit)||((l=y==null?void 0:y.$emit)==null?void 0:l.bind(y))||((a=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let h=p;n||(n="modelValue"),h=p||h||`update:${n.toString()}`;const v=()=>T8(t[n])?t[n]:f;if(i){const C=N(v());return pe(()=>t[n],A=>C.value=A),pe(C,A=>{(A!==t[n]||u)&&d(h,A)},{deep:u}),C}else return k({get(){return v()},set(C){d(h,C)}})}function Fb({window:t=Ze}={}){if(!t)return N(!1);const n=N(t.document.hasFocus());return be(t,"blur",()=>{n.value=!1}),be(t,"focus",()=>{n.value=!0}),n}function Kh(t={}){const{window:n=Ze,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0}=t,r=N(s),a=N(o),i=()=>{n&&(r.value=n.innerWidth,a.value=n.innerHeight)};return i(),J8(i),be("resize",i,{passive:!0}),l&&be("orientationchange",i,{passive:!0}),{width:r,height:a}}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wn=typeof window!="undefined";function Zh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function $l(t,n){const s={};for(const o in n){const l=n[o];s[o]=Pt(l)?l.map(t):t(l)}return s}const Ls=()=>{},Pt=Array.isArray,Gh=/\/$/,Jh=t=>t.replace(Gh,"");function Ml(t,n,s="/"){let o,l={},r="",a="";const i=n.indexOf("#");let p=n.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(o=n.slice(0,p),r=n.slice(p+1,i>-1?i:n.length),l=t(r)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=tm(o!=null?o:n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function Qh(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Oc(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Xh(t,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&rs(n.matched[o],s.matched[l])&&Zp(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function rs(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Zp(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!em(t[s],n[s]))return!1;return!0}function em(t,n){return Pt(t)?$c(t,n):Pt(n)?$c(n,t):t===n}function $c(t,n){return Pt(n)?t.length===n.length&&t.every((s,o)=>s===n[o]):t.length===1&&t[0]===n}function tm(t,n){if(t.startsWith("/"))return t;if(!t)return n;const s=n.split("/"),o=t.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var to;(function(t){t.pop="pop",t.push="push"})(to||(to={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function nm(t){if(!t)if(Wn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jh(t)}const sm=/^[^#]+#/;function om(t,n){return t.replace(sm,"#")+n}function lm(t,n){const s=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const hl=()=>({left:window.pageXOffset,top:window.pageYOffset});function rm(t){let n;if("el"in t){const s=t.el,o=typeof s=="string"&&s.startsWith("#"),l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l)return;n=lm(l,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Mc(t,n){return(history.state?history.state.position-n:-1)+t}const gr=new Map;function am(t,n){gr.set(t,n)}function cm(t){const n=gr.get(t);return gr.delete(t),n}let im=()=>location.protocol+"//"+location.host;function Gp(t,n){const{pathname:s,search:o,hash:l}=n,r=t.indexOf("#");if(r>-1){let i=l.includes(t.slice(r))?t.slice(r).length:1,p=l.slice(i);return p[0]!=="/"&&(p="/"+p),Oc(p,"")}return Oc(s,t)+o+l}function pm(t,n,s,o){let l=[],r=[],a=null;const i=({state:d})=>{const h=Gp(t,location),v=s.value,C=n.value;let A=0;if(d){if(s.value=h,n.value=d,a&&a===v){a=null;return}A=C?d.position-C.position:0}else o(h);l.forEach(x=>{x(s.value,v,{delta:A,type:to.pop,direction:A?A>0?js.forward:js.back:js.unknown})})};function p(){a=s.value}function u(d){l.push(d);const h=()=>{const v=l.indexOf(d);v>-1&&l.splice(v,1)};return r.push(h),h}function f(){const{history:d}=window;!d.state||d.replaceState(we({},d.state,{scroll:hl()}),"")}function y(){for(const d of r)d();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:p,listen:u,destroy:y}}function Tc(t,n,s,o=!1,l=!1){return{back:t,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?hl():null}}function um(t){const{history:n,location:s}=window,o={value:Gp(t,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(p,u,f){const y=t.indexOf("#"),d=y>-1?(s.host&&document.querySelector("base")?t:t.slice(y))+p:im()+t+p;try{n[f?"replaceState":"pushState"](u,"",d),l.value=u}catch(h){console.error(h),s[f?"replace":"assign"](d)}}function a(p,u){const f=we({},n.state,Tc(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});r(p,f,!0),o.value=p}function i(p,u){const f=we({},l.value,n.state,{forward:p,scroll:hl()});r(f.current,f,!0);const y=we({},Tc(o.value,p,null),{position:f.position+1},u);r(p,y,!1),o.value=p}return{location:o,state:l,push:i,replace:a}}function fm(t){t=nm(t);const n=um(t),s=pm(t,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=we({location:"",base:t,go:o,createHref:om.bind(null,t)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function dm(t){return typeof t=="string"||t&&typeof t=="object"}function Jp(t){return typeof t=="string"||typeof t=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qp=Symbol("");var Ic;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ic||(Ic={}));function as(t,n){return we(new Error,{type:t,[Qp]:!0},n)}function Xt(t,n){return t instanceof Error&&Qp in t&&(n==null||!!(t.type&n))}const Rc="[^/]+?",ym={sensitive:!1,strict:!1,start:!0,end:!0},hm=/[.+*?^${}()[\]/\\]/g;function mm(t,n){const s=we({},ym,n),o=[];let l=s.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let y=0;y<u.length;y++){const d=u[y];let h=40+(s.sensitive?.25:0);if(d.type===0)y||(l+="/"),l+=d.value.replace(hm,"\\$&"),h+=40;else if(d.type===1){const{value:v,repeatable:C,optional:A,regexp:x}=d;r.push({name:v,repeatable:C,optional:A});const E=x||Rc;if(E!==Rc){h+=10;try{new RegExp(`(${E})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+F.message)}}let D=C?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;y||(D=A&&u.length<2?`(?:/${D})`:"/"+D),A&&(D+="?"),l+=D,h+=20,A&&(h+=-8),C&&(h+=-20),E===".*"&&(h+=-50)}f.push(h)}o.push(f)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(u){const f=u.match(a),y={};if(!f)return null;for(let d=1;d<f.length;d++){const h=f[d]||"",v=r[d-1];y[v.name]=h&&v.repeatable?h.split("/"):h}return y}function p(u){let f="",y=!1;for(const d of t){(!y||!f.endsWith("/"))&&(f+="/"),y=!1;for(const h of d)if(h.type===0)f+=h.value;else if(h.type===1){const{value:v,repeatable:C,optional:A}=h,x=v in u?u[v]:"";if(Pt(x)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=Pt(x)?x.join("/"):x;if(!E)if(A)d.length<2&&t.length>1&&(f.endsWith("/")?f=f.slice(0,-1):y=!0);else throw new Error(`Missing required param "${v}"`);f+=E}}return f}return{re:a,score:o,keys:r,parse:i,stringify:p}}function vm(t,n){let s=0;for(;s<t.length&&s<n.length;){const o=n[s]-t[s];if(o)return o;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function gm(t,n){let s=0;const o=t.score,l=n.score;for(;s<o.length&&s<l.length;){const r=vm(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(Vc(o))return 1;if(Vc(l))return-1}return l.length-o.length}function Vc(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const Bm={type:0,value:""},Am=/[a-zA-Z0-9_]/;function _m(t){if(!t)return[[]];if(t==="/")return[[Bm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,p,u="",f="";function y(){!u||(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),u="")}function d(){u+=p}for(;i<t.length;){if(p=t[i++],p==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:p==="/"?(u&&y(),a()):p===":"?(y(),s=1):d();break;case 4:d(),s=o;break;case 1:p==="("?s=2:Am.test(p)?d():(y(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+p:s=3:f+=p;break;case 3:y(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,f="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),y(),a(),l}function Cm(t,n,s){const o=mm(_m(t.path),s),l=we(o,{record:t,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function bm(t,n){const s=[],o=new Map;n=jc({strict:!1,end:!0,sensitive:!1},n);function l(f){return o.get(f)}function r(f,y,d){const h=!d,v=Dm(f);v.aliasOf=d&&d.record;const C=jc(n,f),A=[v];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of D)A.push(we({},v,{components:d?d.record.components:v.components,path:F,aliasOf:d?d.record:v}))}let x,E;for(const D of A){const{path:F}=D;if(y&&F[0]!=="/"){const V=y.record.path,O=V[V.length-1]==="/"?"":"/";D.path=y.record.path+(F&&O+F)}if(x=Cm(D,y,C),d?d.alias.push(x):(E=E||x,E!==x&&E.alias.push(x),h&&f.name&&!Lc(x)&&a(f.name)),v.children){const V=v.children;for(let O=0;O<V.length;O++)r(V[O],x,d&&d.children[O])}d=d||x,p(x)}return E?()=>{a(E)}:Ls}function a(f){if(Jp(f)){const y=o.get(f);y&&(o.delete(f),s.splice(s.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=s.indexOf(f);y>-1&&(s.splice(y,1),f.record.name&&o.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function i(){return s}function p(f){let y=0;for(;y<s.length&&gm(f,s[y])>=0&&(f.record.path!==s[y].record.path||!Xp(f,s[y]));)y++;s.splice(y,0,f),f.record.name&&!Lc(f)&&o.set(f.record.name,f)}function u(f,y){let d,h={},v,C;if("name"in f&&f.name){if(d=o.get(f.name),!d)throw as(1,{location:f});C=d.record.name,h=we(Em(y.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),f.params),v=d.stringify(h)}else if("path"in f)v=f.path,d=s.find(E=>E.re.test(v)),d&&(h=d.parse(v),C=d.record.name);else{if(d=y.name?o.get(y.name):s.find(E=>E.re.test(y.path)),!d)throw as(1,{location:f,currentLocation:y});C=d.record.name,h=we({},y.params,f.params),v=d.stringify(h)}const A=[];let x=d;for(;x;)A.unshift(x.record),x=x.parent;return{name:C,path:v,params:h,matched:A,meta:wm(A)}}return t.forEach(f=>r(f)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function Em(t,n){const s={};for(const o of n)o in t&&(s[o]=t[o]);return s}function Dm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function xm(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const o in t.components)n[o]=typeof s=="boolean"?s:s[o];return n}function Lc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wm(t){return t.reduce((n,s)=>we(n,s.meta),{})}function jc(t,n){const s={};for(const o in t)s[o]=o in n?n[o]:t[o];return s}function Xp(t,n){return n.children.some(s=>s===t||Xp(t,s))}const eu=/#/g,Fm=/&/g,km=/\//g,Sm=/=/g,Pm=/\?/g,tu=/\+/g,Om=/%5B/g,$m=/%5D/g,nu=/%5E/g,Mm=/%60/g,su=/%7B/g,Tm=/%7C/g,ou=/%7D/g,Im=/%20/g;function ia(t){return encodeURI(""+t).replace(Tm,"|").replace(Om,"[").replace($m,"]")}function Rm(t){return ia(t).replace(su,"{").replace(ou,"}").replace(nu,"^")}function Br(t){return ia(t).replace(tu,"%2B").replace(Im,"+").replace(eu,"%23").replace(Fm,"%26").replace(Mm,"`").replace(su,"{").replace(ou,"}").replace(nu,"^")}function Vm(t){return Br(t).replace(Sm,"%3D")}function Lm(t){return ia(t).replace(eu,"%23").replace(Pm,"%3F")}function jm(t){return t==null?"":Lm(t).replace(km,"%2F")}function Wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Nm(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(tu," "),a=r.indexOf("="),i=Wo(a<0?r:r.slice(0,a)),p=a<0?null:Wo(r.slice(a+1));if(i in n){let u=n[i];Pt(u)||(u=n[i]=[u]),u.push(p)}else n[i]=p}return n}function Nc(t){let n="";for(let s in t){const o=t[s];if(s=Vm(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Pt(o)?o.map(r=>r&&Br(r)):[o&&Br(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function Um(t){const n={};for(const s in t){const o=t[s];o!==void 0&&(n[s]=Pt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const Hm=Symbol(""),Uc=Symbol(""),pa=Symbol(""),lu=Symbol(""),Ar=Symbol("");function Es(){let t=[];function n(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function nn(t,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const p=y=>{y===!1?i(as(4,{from:s,to:n})):y instanceof Error?i(y):dm(y)?i(as(2,{from:n,to:y})):(r&&o.enterCallbacks[l]===r&&typeof y=="function"&&r.push(y),a())},u=t.call(o&&o.instances[l],n,s,p);let f=Promise.resolve(u);t.length<3&&(f=f.then(p)),f.catch(y=>i(y))})}function Tl(t,n,s,o){const l=[];for(const r of t)for(const a in r.components){let i=r.components[a];if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(zm(i)){const u=(i.__vccOpts||i)[n];u&&l.push(nn(u,s,o,r,a))}else{let p=i();l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const f=Zh(u)?u.default:u;r.components[a]=f;const d=(f.__vccOpts||f)[n];return d&&nn(d,s,o,r,a)()}))}}return l}function zm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hc(t){const n=z(pa),s=z(lu),o=k(()=>n.resolve(B(t.to))),l=k(()=>{const{matched:p}=o.value,{length:u}=p,f=p[u-1],y=s.matched;if(!f||!y.length)return-1;const d=y.findIndex(rs.bind(null,f));if(d>-1)return d;const h=zc(p[u-2]);return u>1&&zc(f)===h&&y[y.length-1].path!==h?y.findIndex(rs.bind(null,p[u-2])):d}),r=k(()=>l.value>-1&&Km(s.params,o.value.params)),a=k(()=>l.value>-1&&l.value===s.matched.length-1&&Zp(s.params,o.value.params));function i(p={}){return Ym(p)?n[B(t.replace)?"replace":"push"](B(t.to)).catch(Ls):Promise.resolve()}return{route:o,href:k(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const qm=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hc,setup(t,{slots:n}){const s=Me(Hc(t)),{options:o}=z(pa),l=k(()=>({[qc(t.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[qc(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:kt("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),Wm=qm;function Ym(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function Km(t,n){for(const s in n){const o=n[s],l=t[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Pt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function zc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qc=(t,n,s)=>t!=null?t:n!=null?n:s,Zm=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){const o=z(Ar),l=k(()=>t.route||o.value),r=z(Uc,0),a=k(()=>{let u=B(r);const{matched:f}=l.value;let y;for(;(y=f[u])&&!y.components;)u++;return u}),i=k(()=>l.value.matched[a.value]);ut(Uc,k(()=>a.value+1)),ut(Hm,i),ut(Ar,l);const p=N();return pe(()=>[p.value,i.value,t.name],([u,f,y],[d,h,v])=>{f&&(f.instances[y]=u,h&&h!==f&&u&&u===d&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),u&&f&&(!h||!rs(f,h)||!d)&&(f.enterCallbacks[y]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=l.value,f=i.value,y=f&&f.components[t.name],d=t.name;if(!y)return Wc(s.default,{Component:y,route:u});const h=f.props[t.name],v=h?h===!0?u.params:typeof h=="function"?h(u):h:null,A=kt(y,we({},v,n,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:p}));return Wc(s.default,{Component:A,route:u})||A}}});function Wc(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const Gm=Zm;function Jm(t){const n=bm(t.routes,t),s=t.parseQuery||Nm,o=t.stringifyQuery||Nc,l=t.history,r=Es(),a=Es(),i=Es(),p=jt(Qt);let u=Qt;Wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=$l.bind(null,S=>""+S),y=$l.bind(null,jm),d=$l.bind(null,Wo);function h(S,W){let T,K;return Jp(S)?(T=n.getRecordMatcher(S),K=W):K=S,n.addRoute(K,T)}function v(S){const W=n.getRecordMatcher(S);W&&n.removeRoute(W)}function C(){return n.getRoutes().map(S=>S.record)}function A(S){return!!n.getRecordMatcher(S)}function x(S,W){if(W=we({},W||p.value),typeof S=="string"){const ie=Ml(s,S,W.path),m=n.resolve({path:ie.path},W),g=l.createHref(ie.fullPath);return we(ie,m,{params:d(m.params),hash:Wo(ie.hash),redirectedFrom:void 0,href:g})}let T;if("path"in S)T=we({},S,{path:Ml(s,S.path,W.path).path});else{const ie=we({},S.params);for(const m in ie)ie[m]==null&&delete ie[m];T=we({},S,{params:y(S.params)}),W.params=y(W.params)}const K=n.resolve(T,W),ge=S.hash||"";K.params=f(d(K.params));const ke=Qh(o,we({},S,{hash:Rm(ge),path:K.path})),fe=l.createHref(ke);return we({fullPath:ke,hash:ge,query:o===Nc?Um(S.query):S.query||{}},K,{redirectedFrom:void 0,href:fe})}function E(S){return typeof S=="string"?Ml(s,S,p.value.path):we({},S)}function D(S,W){if(u!==S)return as(8,{from:W,to:S})}function F(S){return q(S)}function V(S){return F(we(E(S),{replace:!0}))}function O(S){const W=S.matched[S.matched.length-1];if(W&&W.redirect){const{redirect:T}=W;let K=typeof T=="function"?T(S):T;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=E(K):{path:K},K.params={}),we({query:S.query,hash:S.hash,params:"path"in K?{}:S.params},K)}}function q(S,W){const T=u=x(S),K=p.value,ge=S.state,ke=S.force,fe=S.replace===!0,ie=O(T);if(ie)return q(we(E(ie),{state:ge,force:ke,replace:fe}),W||T);const m=T;m.redirectedFrom=W;let g;return!ke&&Xh(o,K,T)&&(g=as(16,{to:m,from:K}),$t(K,K,!0,!1)),(g?Promise.resolve(g):ue(m,K)).catch(b=>Xt(b)?Xt(b,2)?b:ye(b):oe(b,m,K)).then(b=>{if(b){if(Xt(b,2))return q(we(E(b.to),{state:ge,force:ke,replace:fe}),W||m)}else b=me(m,K,!0,fe,ge);return de(m,K,b),b})}function re(S,W){const T=D(S,W);return T?Promise.reject(T):Promise.resolve()}function ue(S,W){let T;const[K,ge,ke]=Qm(S,W);T=Tl(K.reverse(),"beforeRouteLeave",S,W);for(const ie of K)ie.leaveGuards.forEach(m=>{T.push(nn(m,S,W))});const fe=re.bind(null,S,W);return T.push(fe),jn(T).then(()=>{T=[];for(const ie of r.list())T.push(nn(ie,S,W));return T.push(fe),jn(T)}).then(()=>{T=Tl(ge,"beforeRouteUpdate",S,W);for(const ie of ge)ie.updateGuards.forEach(m=>{T.push(nn(m,S,W))});return T.push(fe),jn(T)}).then(()=>{T=[];for(const ie of S.matched)if(ie.beforeEnter&&!W.matched.includes(ie))if(Pt(ie.beforeEnter))for(const m of ie.beforeEnter)T.push(nn(m,S,W));else T.push(nn(ie.beforeEnter,S,W));return T.push(fe),jn(T)}).then(()=>(S.matched.forEach(ie=>ie.enterCallbacks={}),T=Tl(ke,"beforeRouteEnter",S,W),T.push(fe),jn(T))).then(()=>{T=[];for(const ie of a.list())T.push(nn(ie,S,W));return T.push(fe),jn(T)}).catch(ie=>Xt(ie,8)?ie:Promise.reject(ie))}function de(S,W,T){for(const K of i.list())K(S,W,T)}function me(S,W,T,K,ge){const ke=D(S,W);if(ke)return ke;const fe=W===Qt,ie=Wn?history.state:{};T&&(K||fe?l.replace(S.fullPath,we({scroll:fe&&ie&&ie.scroll},ge)):l.push(S.fullPath,ge)),p.value=S,$t(S,W,T,fe),ye()}let $e;function Re(){$e||($e=l.listen((S,W,T)=>{if(!Gt.listening)return;const K=x(S),ge=O(K);if(ge){q(we(ge,{replace:!0}),K).catch(Ls);return}u=K;const ke=p.value;Wn&&am(Mc(ke.fullPath,T.delta),hl()),ue(K,ke).catch(fe=>Xt(fe,12)?fe:Xt(fe,2)?(q(fe.to,K).then(ie=>{Xt(ie,20)&&!T.delta&&T.type===to.pop&&l.go(-1,!1)}).catch(Ls),Promise.reject()):(T.delta&&l.go(-T.delta,!1),oe(fe,K,ke))).then(fe=>{fe=fe||me(K,ke,!1),fe&&(T.delta?l.go(-T.delta,!1):T.type===to.pop&&Xt(fe,20)&&l.go(-1,!1)),de(K,ke,fe)}).catch(Ls)}))}let qe=Es(),Ee=Es(),ne;function oe(S,W,T){ye(S);const K=Ee.list();return K.length?K.forEach(ge=>ge(S,W,T)):console.error(S),Promise.reject(S)}function te(){return ne&&p.value!==Qt?Promise.resolve():new Promise((S,W)=>{qe.add([S,W])})}function ye(S){return ne||(ne=!S,Re(),qe.list().forEach(([W,T])=>S?T(S):W()),qe.reset()),S}function $t(S,W,T,K){const{scrollBehavior:ge}=t;if(!Wn||!ge)return Promise.resolve();const ke=!T&&cm(Mc(S.fullPath,0))||(K||!T)&&history.state&&history.state.scroll||null;return ze().then(()=>ge(S,W,ke)).then(fe=>fe&&rm(fe)).catch(fe=>oe(fe,S,W))}const Ge=S=>l.go(S);let mt;const st=new Set,Gt={currentRoute:p,listening:!0,addRoute:h,removeRoute:v,hasRoute:A,getRoutes:C,resolve:x,options:t,push:F,replace:V,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Ee.add,isReady:te,install(S){const W=this;S.component("RouterLink",Wm),S.component("RouterView",Gm),S.config.globalProperties.$router=W,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>B(p)}),Wn&&!mt&&p.value===Qt&&(mt=!0,F(l.location).catch(ge=>{}));const T={};for(const ge in Qt)T[ge]=k(()=>p.value[ge]);S.provide(pa,W),S.provide(lu,Me(T)),S.provide(Ar,p);const K=S.unmount;st.add(S),S.unmount=function(){st.delete(S),st.size<1&&(u=Qt,$e&&$e(),$e=null,p.value=Qt,mt=!1,ne=!1),K()}}};return Gt}function jn(t){return t.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function Qm(t,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(t.matched.find(u=>rs(u,i))?o.push(i):s.push(i));const p=t.matched[a];p&&(n.matched.find(u=>rs(u,p))||l.push(p))}return[s,o,l]}const Il=N(!1),Ns=N(!1),Kn=N(!1),Xm=N(!0),_r=_h({xs:460,...mh}),Sn=Kh(),ru=Uh(),e5=k(()=>Sn.height.value-Sn.width.value/rn>180),au=Lh(At?document.body:null),es=hh(),t5=k(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=es.value)==null?void 0:t.tagName)||"")||((n=es.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),n5=k(()=>{var t;return["BUTTON","A"].includes(((t=es.value)==null?void 0:t.tagName)||"")});Ot("slidev-camera","default");Ot("slidev-mic","default");const $o=Ot("slidev-scale",0),Qe=Ot("slidev-show-overview",!1),Rl=Ot("slidev-presenter-cursor",!0),Yc=Ot("slidev-show-editor",!1);Ot("slidev-editor-width",At?window.innerWidth*.4:100);const cu=qp(Qe);function Kc(t,n,s,o=l=>l){return t*o(.5-n*(.5-s))}function s5(t){return[-t[0],-t[1]]}function Et(t,n){return[t[0]+n[0],t[1]+n[1]]}function Bt(t,n){return[t[0]-n[0],t[1]-n[1]]}function bt(t,n){return[t[0]*n,t[1]*n]}function o5(t,n){return[t[0]/n,t[1]/n]}function Ds(t){return[t[1],-t[0]]}function l5(t,n){return t[0]*n[0]+t[1]*n[1]}function r5(t,n){return t[0]===n[0]&&t[1]===n[1]}function a5(t){return Math.hypot(t[0],t[1])}function c5(t){return t[0]*t[0]+t[1]*t[1]}function Zc(t,n){return c5(Bt(t,n))}function iu(t){return o5(t,a5(t))}function i5(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function xs(t,n,s){let o=Math.sin(s),l=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],i=r*l-a*o,p=r*o+a*l;return[i+n[0],p+n[1]]}function Cr(t,n,s){return Et(t,bt(Bt(n,t),s))}function Gc(t,n,s){return Et(t,bt(n,s))}var{min:Nn,PI:p5}=Math,Jc=.275,ws=p5+1e-4;function u5(t,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=ne=>ne,start:i={},end:p={},last:u=!1}=n,{cap:f=!0,easing:y=ne=>ne*(2-ne)}=i,{cap:d=!0,easing:h=ne=>--ne*ne*ne+1}=p;if(t.length===0||s<=0)return[];let v=t[t.length-1].runningLength,C=i.taper===!1?0:i.taper===!0?Math.max(s,v):i.taper,A=p.taper===!1?0:p.taper===!0?Math.max(s,v):p.taper,x=Math.pow(s*o,2),E=[],D=[],F=t.slice(0,10).reduce((ne,oe)=>{let te=oe.pressure;if(r){let ye=Nn(1,oe.distance/s),$t=Nn(1,1-ye);te=Nn(1,ne+($t-ne)*(ye*Jc))}return(ne+te)/2},t[0].pressure),V=Kc(s,l,t[t.length-1].pressure,a),O,q=t[0].vector,re=t[0].point,ue=re,de=re,me=ue;for(let ne=0;ne<t.length;ne++){let{pressure:oe}=t[ne],{point:te,vector:ye,distance:$t,runningLength:Ge}=t[ne];if(ne<t.length-1&&v-Ge<3)continue;if(l){if(r){let T=Nn(1,$t/s),K=Nn(1,1-T);oe=Nn(1,F+(K-F)*(T*Jc))}V=Kc(s,l,oe,a)}else V=s/2;O===void 0&&(O=V);let mt=Ge<C?y(Ge/C):1,st=v-Ge<A?h((v-Ge)/A):1;if(V=Math.max(.01,V*Math.min(mt,st)),ne===t.length-1){let T=bt(Ds(ye),V);E.push(Bt(te,T)),D.push(Et(te,T));continue}let Gt=t[ne+1].vector,S=l5(ye,Gt);if(S<0){let T=bt(Ds(q),V);for(let K=1/13,ge=0;ge<=1;ge+=K)de=xs(Bt(te,T),te,ws*ge),E.push(de),me=xs(Et(te,T),te,ws*-ge),D.push(me);re=de,ue=me;continue}let W=bt(Ds(Cr(Gt,ye,S)),V);de=Bt(te,W),(ne<=1||Zc(re,de)>x)&&(E.push(de),re=de),me=Et(te,W),(ne<=1||Zc(ue,me)>x)&&(D.push(me),ue=me),F=oe,q=ye}let $e=t[0].point.slice(0,2),Re=t.length>1?t[t.length-1].point.slice(0,2):Et(t[0].point,[1,1]),qe=[],Ee=[];if(t.length===1){if(!(C||A)||u){let ne=Gc($e,iu(Ds(Bt($e,Re))),-(O||V)),oe=[];for(let te=1/13,ye=te;ye<=1;ye+=te)oe.push(xs(ne,$e,ws*2*ye));return oe}}else{if(!(C||A&&t.length===1))if(f)for(let oe=1/13,te=oe;te<=1;te+=oe){let ye=xs(D[0],$e,ws*te);qe.push(ye)}else{let oe=Bt(E[0],D[0]),te=bt(oe,.5),ye=bt(oe,.51);qe.push(Bt($e,te),Bt($e,ye),Et($e,ye),Et($e,te))}let ne=Ds(s5(t[t.length-1].vector));if(A||C&&t.length===1)Ee.push(Re);else if(d){let oe=Gc(Re,ne,V);for(let te=1/29,ye=te;ye<1;ye+=te)Ee.push(xs(oe,Re,ws*3*ye))}else Ee.push(Et(Re,bt(ne,V)),Et(Re,bt(ne,V*.99)),Bt(Re,bt(ne,V*.99)),Bt(Re,bt(ne,V)))}return E.concat(Ee,D.reverse(),qe)}function f5(t,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(t[0])?t:t.map(({x:h,y:v,pressure:C=.5})=>[h,v,C]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let v=1;v<5;v++)i.push(Cr(i[0],h,v/4))}i.length===1&&(i=[...i,[...Et(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,f=0,y=p[0],d=i.length-1;for(let h=1;h<i.length;h++){let v=r&&h===d?i[h].slice(0,2):Cr(y.point,i[h],a);if(r5(y.point,v))continue;let C=i5(v,y.point);if(f+=C,h<d&&!u){if(f<l)continue;u=!0}y={point:v,pressure:i[h][2]>=0?i[h][2]:.5,vector:iu(Bt(y.point,v)),distance:C,runningLength:f},p.push(y)}return p[0].vector=((s=p[1])==null?void 0:s.vector)||[0,0],p}function d5(t,n={}){return u5(f5(t,n),n)}var y5=d5,h5=Object.defineProperty,Qc=Object.getOwnPropertySymbols,m5=Object.prototype.hasOwnProperty,v5=Object.prototype.propertyIsEnumerable,Xc=(t,n,s)=>n in t?h5(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,br=(t,n)=>{for(var s in n||(n={}))m5.call(n,s)&&Xc(t,s,n[s]);if(Qc)for(var s of Qc(n))v5.call(n,s)&&Xc(t,s,n[s]);return t},g5=()=>({events:{},emit(t,...n){(this.events[t]||[]).forEach(s=>s(...n))},on(t,n){return(this.events[t]=this.events[t]||[]).push(n),()=>this.events[t]=(this.events[t]||[]).filter(s=>s!==n)}});function Yo(t,n){return t-n}function B5(t){return t<0?-1:1}function Ko(t){return[Math.abs(t),B5(t)]}function pu(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var A5=2,Ut=A5,ys=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n,s;const o=this.drauu.el,l=(n=this.drauu.options.coordinateScale)!=null?n:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*l,y:(t.pageY-r.top)*l,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const a=r.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:a.x*l,y:a.y*l,pressure:t.pressure}}}createElement(t,n){var s;const o=document.createElementNS("http://www.w3.org/2000/svg",t),l=n?br(br({},this.brush),n):this.brush;return o.setAttribute("fill",(s=l.fill)!=null?s:"transparent"),o.setAttribute("stroke",l.color),o.setAttribute("stroke-width",l.size.toString()),o.setAttribute("stroke-linecap","round"),l.dasharray&&o.setAttribute("stroke-dasharray",l.dasharray),o}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(Ut))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},_5=class extends ys{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=y5(t,br({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!n.length)return"";const s=n.reduce((o,[l,r],a,i)=>{const[p,u]=i[(a+1)%i.length];return o.push(l,r,(l+p)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},C5=class extends ys{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Ko(t.x-this.start.x),[o,l]=Ko(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Yo),[i,p]=[this.start.y,this.start.y+o*l].sort(Yo);this.attr("cx",(r+a)/2),this.attr("cy",(i+p)/2),this.attr("rx",(a-r)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function uu(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var b5=class extends ys{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=pu(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(uu(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},E5=class extends ys{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Ko(t.x-this.start.x),[o,l]=Ko(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Yo),[i,p]=[this.start.y,this.start.y+o*l].sort(Yo);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",p-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function D5(t,n){const s=t.x-n.x,o=t.y-n.y;return s*s+o*o}function x5(t,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((t.x-o)*r+(t.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=t.x-o,a=t.y-l,r*r+a*a}function w5(t,n){let s=t[0];const o=[s];let l;for(let r=1,a=t.length;r<a;r++)l=t[r],D5(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Er(t,n,s,o,l){let r=o,a=0;for(let i=n+1;i<s;i++){const p=x5(t[i],t[n],t[s]);p>r&&(a=i,r=p)}r>o&&(a-n>1&&Er(t,n,a,o,l),l.push(t[a]),s-a>1&&Er(t,a,s,o,l))}function F5(t,n){const s=t.length-1,o=[t[0]];return Er(t,0,s,n,o),o.push(t[s]),o}function ei(t,n,s=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=s?t:w5(t,o),t=F5(t,o),t}var k5=class extends ys{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=pu();const n=uu(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=ei(this.points,1,!0),this.count=0),this.attr("d",ni(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",ni(ei(this.points,1,!0))),!t.getTotalLength()))}};function S5(t,n){const s=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),angle:Math.atan2(o,s)}}function ti(t,n,s,o){const l=n||t,r=s||t,a=.2,i=S5(l,r),p=i.angle+(o?Math.PI:0),u=i.length*a,f=t.x+Math.cos(p)*u,y=t.y+Math.sin(p)*u;return{x:f,y}}function P5(t,n,s){const o=ti(s[n-1],s[n-2],t),l=ti(t,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(Ut)},${o.y.toFixed(Ut)} ${l.x.toFixed(Ut)},${l.y.toFixed(Ut)} ${t.x.toFixed(Ut)},${t.y.toFixed(Ut)}`}function ni(t){return t.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(Ut)},${s.y.toFixed(Ut)}`:`${n} ${P5(s,o,l)}`,"")}var O5=class extends ys{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:i,element:o||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,o=t.x2,l=n.x1,r=n.x2,a=t.y1,i=t.y2,p=n.y1,u=n.y2,f=(s-o)*(p-u)-(a-i)*(l-r),y=(s*i-a*o)*(l-r)-(s-o)*(l*u-p*r),d=(s*i-a*o)*(p-u)-(a-i)*(l*u-p*r),h=(v,C,A)=>v>=C&&v<=A?!0:v>=A&&v<=C;if(f===0)return!1;{const v={x:y/f,y:d/f};return h(v.x,s,o)&&h(v.y,a,i)&&h(v.x,l,r)&&h(v.y,p,u)}}};function $5(t){return{draw:new k5(t),stylus:new _5(t),line:new b5(t),rectangle:new E5(t),ellipse:new C5(t),eraseLine:new O5(t)}}var M5=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=g5(),this._models=$5(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){!this.acceptsInput(t)||(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function T5(t){return new M5(t)}const Dr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Vt=Ot("slidev-drawing-enabled",!1),kb=Ot("slidev-drawing-pinned",!1),I5=N(!1),R5=N(!1),V5=N(!1),no=N(!1),Dn=N8(Ot("slidev-drawing-brush",{color:Dr[0],size:4,mode:"stylus"})),si=N("stylus"),fu=k(()=>_e.drawings.syncAll||It.value);let so=!1;const Fs=k({get(){return si.value},set(t){si.value=t,t==="arrow"?(Dn.mode="line",Dn.arrowEnd=!0):(Dn.mode=t,Dn.arrowEnd=!1)}}),L5=Me({brush:Dn,acceptsInputTypes:k(()=>Vt.value?void 0:["pen"]),coordinateTransform:!1}),tt=ll(T5(L5));function j5(){tt.clear(),fu.value&&Up(je.value,"")}function du(){var t;R5.value=tt.canRedo(),I5.value=tt.canUndo(),V5.value=!!((t=tt.el)!=null&&t.children.length)}function N5(t){so=!0;const n=Ho[t||je.value];n!=null?tt.load(n):tt.clear(),so=!1}tt.on("changed",()=>{if(du(),!so){const t=tt.dump(),n=je.value;(Ho[n]||"")!==t&&fu.value&&Up(n,tt.dump())}});P8(t=>{so=!0,t[je.value]!=null&&tt.load(t[je.value]||""),so=!1,du()});ze(()=>{pe(je,()=>{!tt.mounted||N5()},{immediate:!0})});tt.on("start",()=>no.value=!0);tt.on("end",()=>no.value=!1);window.addEventListener("keydown",t=>{if(!Vt.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?tt.redo():tt.undo():t.code==="Escape"?Vt.value=!1:t.code==="KeyL"&&n?Fs.value="line":t.code==="KeyA"&&n?Fs.value="arrow":t.code==="KeyS"&&n?Fs.value="stylus":t.code==="KeyR"&&n?Fs.value="rectangle":t.code==="KeyE"&&n?Fs.value="ellipse":t.code==="KeyC"&&n?j5():t.code.startsWith("Digit")&&n&&+t.code[5]<=Dr.length?Dn.color=Dr[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);const oi=xh(),Vl=Ot("slidev-color-schema","auto"),xr=k(()=>_e.colorSchema!=="auto"),ua=k({get(){return xr.value?_e.colorSchema==="dark":Vl.value==="auto"?oi.value:Vl.value==="dark"},set(t){xr.value||(Vl.value=t===oi.value?"auto":t?"dark":"light")}}),yu=qp(ua);At&&pe(ua,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});function U5(){return[]}const Mo=N(1),To=k(()=>Le.length-1),dt=N(0),fa=N(0);function H5(){dt.value>Mo.value&&(dt.value-=1)}function z5(){dt.value<To.value&&(dt.value+=1)}function q5(){if(dt.value>Mo.value){let t=dt.value-fa.value;t<Mo.value&&(t=Mo.value),dt.value=t}}function W5(){if(dt.value<To.value){let t=dt.value+fa.value;t>To.value&&(t=To.value),dt.value=t}}const hu=Ve(ct(t5),ct(n5),Xm);function Y5(t,n,s=!1){typeof t=="string"&&(t=ru[t]);const o=Ve(t,hu);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return pe(o,a,{flush:"sync"})}function K5(t,n){return yh(t,s=>{!hu.value||s.repeat||n()})}function Z5(){const t=U5(),{escape:n,space:s,shift:o,left:l,right:r,up:a,down:i,enter:p,d:u,g:f,o:y}=ru;new Map([{key:Ve(s,ct(o)),fn:cn,autoRepeat:!0},{key:Ve(s,o),fn:pn,autoRepeat:!0},{key:Ve(r,ct(o),ct(Qe)),fn:cn,autoRepeat:!0},{key:Ve(l,ct(o),ct(Qe)),fn:pn,autoRepeat:!0},{key:"pageDown",fn:cn,autoRepeat:!0},{key:"pageUp",fn:pn,autoRepeat:!0},{key:Ve(a,ct(Qe)),fn:()=>ro(!1),autoRepeat:!0},{key:Ve(i,ct(Qe)),fn:lo,autoRepeat:!0},{key:Ve(l,o),fn:()=>ro(!1),autoRepeat:!0},{key:Ve(r,o),fn:lo,autoRepeat:!0},{key:Ve(u,ct(Vt)),fn:yu},{key:Ve(y,ct(Vt)),fn:cu},{key:Ve(n,ct(Vt)),fn:()=>Qe.value=!1},{key:Ve(f,ct(Vt)),fn:()=>Kn.value=!Kn.value},{key:Ve(l,Qe),fn:H5},{key:Ve(r,Qe),fn:z5},{key:Ve(a,Qe),fn:q5},{key:Ve(i,Qe),fn:W5},{key:Ve(p,Qe),fn:()=>{cs(dt.value),Qe.value=!1}},...t].map(h=>[h.key,h])).forEach(h=>{h.fn&&Y5(h.key,h.fn,h.autoRepeat)}),K5("f",()=>au.toggle())}const G5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},J5=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Q5=[J5];function X5(t,n){return _(),w("svg",G5,Q5)}var ev={name:"carbon-close",render:X5};function da(t){var s,o;const n=(o=(s=t==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const mu=Be({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;z(J);const s=N(),o=Vh(s),l=k(()=>n.width?n.width:o.width.value),r=k(()=>n.width?n.width/rn:o.height.value);n.width&&po(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=k(()=>l.value/r.value),i=k(()=>n.scale?n.scale:a.value<rn?l.value/kn:r.value*rn/kn),p=k(()=>({height:`${Lp}px`,width:`${kn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=k(()=>({"select-none":!_e.selectable,"slidev-code-line-numbers":_e.lineNumbers}));return ut(Vp,i),(f,y)=>(_(),w("div",{id:"slide-container",ref_key:"root",ref:s,class:Te(B(u))},[e("div",{id:"slide-content",style:Ke(B(p))},[et(f.$slots,"default")],4),et(f.$slots,"controls")],2))}});var ya=Be({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=Rt(t,"clicks",n),o=Rt(t,"clicksElements",n),l=Rt(t,"clicksDisabled",n),r=Rt(t,"clicksOrderMap",n);o.value.length=0,ut(v8,t.route),ut(g8,t.context),ut(Rs,s),ut(Vs,l),ut(_n,o),ut(dr,r)},render(){var t,n;return this.$props.is?kt(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}});const tv=["innerHTML"],vu=Be({__name:"DrawingPreview",props:{page:null},setup(t){return z(J),(n,s)=>B(Ho)[t.page]?(_(),w("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:B(Ho)[t.page]},null,8,tv)):U("v-if",!0)}});var nv=Object.freeze(Object.defineProperty({__proto__:null,default:vu},Symbol.toStringTag,{value:"Module"}));const sv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},ov=["onClick"],lv=Be({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(t,{emit:n}){const s=t;z(J);const o=Rt(s,"modelValue",n);function l(){o.value=!1}function r(h){cs(h),l()}function a(h){return h===dt.value}const i=_r.smaller("xs"),p=_r.smaller("sm"),u=4*16*2,f=2*16,y=k(()=>i.value?Sn.width.value-u:p.value?(Sn.width.value-u-f)/2:300),d=k(()=>Math.floor((Sn.width.value-u)/(y.value+f)));return po(()=>{dt.value=je.value,fa.value=d.value}),(h,v)=>{const C=ev;return _(),w(G,null,[sa(e("div",sv,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ke(`grid-template-columns: repeat(auto-fit,minmax(${B(y)}px,1fr))`)},[(_(!0),w(G,null,fs(B(Le).slice(0,-1),(A,x)=>(_(),w("div",{key:A.path,class:"relative"},[e("div",{class:Te(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(x+1)}]),onClick:E=>r(+A.path)},[(_(),Q(mu,{key:A.path,width:B(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:H(()=>[Y(B(ya),{is:A==null?void 0:A.component,"clicks-disabled":!0,class:Te(B(da)(A)),route:A,context:"overview"},null,8,["is","class","route"]),Y(vu,{page:+A.path},null,8,["page"])]),_:2},1032,["width"]))],10,ov),e("div",{class:"absolute top-0 opacity-50",style:Ke(`left: ${B(y)+5}px`)},Pn(x+1),5)]))),128))],4)],512),[[Ip,B(o)]]),B(o)?(_(),w("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[Y(C)])):U("v-if",!0)],64)}}});var rv="/future-tech-conference-slide-2022-07-18/assets/logo.b72bde5d.png";const av={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},cv=Be({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;z(J);const o=Rt(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(_(),Q(vp,null,[B(o)?(_(),w("div",av,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),e("div",{class:Te(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[et(r.$slots,"default")],2)])):U("v-if",!0)],1024))}});const iv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},pv=["innerHTML"],uv=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:rv,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),c("dev ")])])],-1),fv=Be({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;z(J);const o=Rt(s,"modelValue",n),l=k(()=>typeof _e.info=="string");return(r,a)=>(_(),Q(cv,{modelValue:B(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Ce(o)?o.value=i:null),class:"px-6 py-4"},{default:H(()=>[e("div",iv,[B(l)?(_(),w("div",{key:0,class:"mb-4",innerHTML:B(_e).info},null,8,pv)):U("v-if",!0),uv])]),_:1},8,["modelValue"]))}}),dv=["disabled","onKeydown"],yv=Be({__name:"Goto",setup(t){z(J);const n=N(),s=N(""),o=k(()=>{if(s.value.startsWith("/"))return!!Le.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Ou.value}});function l(){o.value&&(s.value.startsWith("/")?cs(s.value.substring(1)):cs(+s.value)),r()}function r(){Kn.value=!1}return pe(Kn,async a=>{var i,p;a?(await ze(),s.value="",(i=n.value)==null||i.focus()):(p=n.value)==null||p.blur()}),pe(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(_(),w("div",{id:"slidev-goto-dialog",class:Te(["fixed right-5 bg-main transform transition-all",B(Kn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[sa(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=p=>s.value=p),type:"text",disabled:!B(Kn),class:Te(["outline-none bg-transparent",{"text-red-400":!B(o)&&s.value}]),placeholder:"Goto...",onKeydown:[uc(l,["enter"]),uc(r,["escape"])],onBlur:r},null,42,dv),[[Jy,s.value]])],2))}}),hv=Be({__name:"Controls",setup(t){z(J);const n=jt(),s=jt();return(o,l)=>(_(),w(G,null,[Y(lv,{modelValue:B(Qe),"onUpdate:modelValue":l[0]||(l[0]=r=>Ce(Qe)?Qe.value=r:null)},null,8,["modelValue"]),Y(yv),B(n)?(_(),Q(B(n),{key:0})):U("v-if",!0),B(s)?(_(),Q(B(s),{key:1,modelValue:B(Il),"onUpdate:modelValue":l[1]||(l[1]=r=>Ce(Il)?Il.value=r:null)},null,8,["modelValue"])):U("v-if",!0),B(_e).info?(_(),Q(fv,{key:2,modelValue:B(Ns),"onUpdate:modelValue":l[2]||(l[2]=r=>Ce(Ns)?Ns.value=r:null)},null,8,["modelValue"])):U("v-if",!0)],64))}}),mv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vv=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),gv=[vv];function Bv(t,n){return _(),w("svg",mv,gv)}var Av={name:"carbon-settings-adjust",render:Bv};const _v={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),bv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ev=[Cv,bv];function Dv(t,n){return _(),w("svg",_v,Ev)}var xv={name:"carbon-information",render:Dv};const wv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),kv=[Fv];function Sv(t,n){return _(),w("svg",wv,kv)}var Pv={name:"carbon-download",render:Sv};const Ov={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$v=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Mv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Tv=[$v,Mv];function Iv(t,n){return _(),w("svg",Ov,Tv)}var Rv={name:"carbon-user-speaker",render:Iv};const Vv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),jv=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Nv=[Lv,jv];function Uv(t,n){return _(),w("svg",Vv,Nv)}var Hv={name:"carbon-presentation-file",render:Uv};const zv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qv=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Wv=[qv];function Yv(t,n){return _(),w("svg",zv,Wv)}var Kv={name:"carbon-pen",render:Yv};const Zv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Gv=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Jv=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Qv=[Gv,Jv];function Xv(t,n){return _(),w("svg",Zv,Qv)}var eg={name:"ph-cursor-duotone",render:Xv};const tg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ng=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),sg=[ng];function og(t,n){return _(),w("svg",tg,sg)}var gu={name:"ph-cursor-fill",render:og};const lg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rg=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ag=[rg];function cg(t,n){return _(),w("svg",lg,ag)}var ig={name:"carbon-sun",render:cg};const pg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ug=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),fg=[ug];function dg(t,n){return _(),w("svg",pg,fg)}var yg={name:"carbon-moon",render:dg};const hg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mg=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),vg=[mg];function gg(t,n){return _(),w("svg",hg,vg)}var Bg={name:"carbon-apps",render:gg};const Ag={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_g=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Cg=[_g];function bg(t,n){return _(),w("svg",Ag,Cg)}var Bu={name:"carbon-arrow-right",render:bg};const Eg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dg=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),xg=[Dg];function wg(t,n){return _(),w("svg",Eg,xg)}var Fg={name:"carbon-arrow-left",render:wg};const kg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sg=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Pg=[Sg];function Og(t,n){return _(),w("svg",kg,Pg)}var $g={name:"carbon-maximize",render:Og};const Mg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tg=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Ig=[Tg];function Rg(t,n){return _(),w("svg",Mg,Ig)}var Vg={name:"carbon-minimize",render:Rg};const Lg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jg=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Ng=[jg];function Ug(t,n){return _(),w("svg",Lg,Ng)}var Hg={name:"carbon-checkmark",render:Ug};var Kt=(t,n)=>{const s=t.__vccOpts||t;for(const[o,l]of n)s[o]=l;return s};const zg={class:"select-list"},qg={class:"title"},Wg={class:"items"},Yg=["onClick"],Kg=Be({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;z(J);const o=Rt(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=Hg;return _(),w("div",zg,[e("div",qg,Pn(t.title),1),e("div",Wg,[(_(!0),w(G,null,fs(t.items,i=>(_(),w("div",{key:i.value,class:Te(["item",{active:B(o)===i.value}]),onClick:()=>{var p;o.value=i.value,(p=i.onClick)==null||p.call(i)}},[Y(a,{class:Te(["text-green-500",{"opacity-0":B(o)!==i.value}])},null,8,["class"]),c(" "+Pn(i.display||i.value),1)],10,Yg))),128))])])}}});var Zg=Kt(Kg,[["__scopeId","data-v-427604ef"]]);const Gg={class:"text-sm"},Jg=Be({__name:"Settings",setup(t){z(J);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(_(),w("div",Gg,[Y(Zg,{modelValue:B($o),"onUpdate:modelValue":o[0]||(o[0]=l=>Ce($o)?$o.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Qg={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Xg=Be({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;z(J);const o=Rt(s,"modelValue",n,{passive:!0}),l=N();return fh(l,()=>{o.value=!1}),(r,a)=>(_(),w("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Te({disabled:t.disabled}),onClick:a[0]||(a[0]=i=>o.value=!B(o))},[et(r.$slots,"button",{class:Te({disabled:t.disabled})})],2),(_(),Q(vp,null,[B(o)?(_(),w("div",Qg,[et(r.$slots,"menu")])):U("v-if",!0)],1024))],512))}}),e0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},xo={__name:"VerticalDivider",setup(t){return z(J),(n,s)=>(_(),w("div",e0))}};var t0={render(){return[]}};const n0={class:"icon-btn"},s0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},o0={class:"my-auto"},l0={class:"opacity-50"},r0=Be({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;z(J);const s=_r.smaller("md"),{isFullscreen:o,toggle:l}=au,r=k(()=>Fr.value?`?password=${Fr.value}`:""),a=k(()=>`/presenter/${je.value}${r.value}`),i=k(()=>`/${je.value}${r.value}`),p=N(),u=()=>{p.value&&es.value&&p.value.contains(es.value)&&es.value.blur()},f=k(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=jt(),d=jt();return ds(()=>import("./DrawingControls.48ca23f5.js"),[]).then(h=>d.value=h.default),(h,v)=>{const C=Vg,A=$g,x=Fg,E=Bu,D=Bg,F=yg,V=ig,O=gu,q=eg,re=Kv,ue=Hv,de=Qs("RouterLink"),me=Rv,$e=Pv,Re=xv,qe=Av;return _(),w("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Te(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",B(f)]),onMouseleave:u},[B(Nt)?U("v-if",!0):(_(),w("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...Ee)=>B(l)&&B(l)(...Ee))},[B(o)?(_(),Q(C,{key:0})):(_(),Q(A,{key:1}))])),e("button",{class:Te(["icon-btn",{disabled:!B(H2)}]),onClick:v[1]||(v[1]=(...Ee)=>B(pn)&&B(pn)(...Ee))},[Y(x)],2),e("button",{class:Te(["icon-btn",{disabled:!B(U2)}]),title:"Next",onClick:v[2]||(v[2]=(...Ee)=>B(cn)&&B(cn)(...Ee))},[Y(E)],2),B(Nt)?U("v-if",!0):(_(),w("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=Ee=>B(cu)())},[Y(D)])),B(xr)?U("v-if",!0):(_(),w("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=Ee=>B(yu)())},[B(ua)?(_(),Q(F,{key:0})):(_(),Q(V,{key:1}))])),Y(xo),B(Nt)?U("v-if",!0):(_(),w(G,{key:3},[!B(It)&&!B(s)&&B(y)?(_(),w(G,{key:0},[Y(B(y)),Y(xo)],64)):U("v-if",!0),B(It)?(_(),w("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=Ee=>Rl.value=!B(Rl))},[B(Rl)?(_(),Q(O,{key:0})):(_(),Q(q,{key:1,class:"opacity-50"}))])):U("v-if",!0)],64)),!B(_e).drawings.presenterOnly&&!B(Nt)?(_(),w(G,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=Ee=>Vt.value=!B(Vt))},[Y(re),B(Vt)?(_(),w("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ke({background:B(Dn).color})},null,4)):U("v-if",!0)]),Y(xo)],64)):U("v-if",!0),B(Nt)?U("v-if",!0):(_(),w(G,{key:5},[B(It)?(_(),Q(de,{key:0,to:B(i),class:"icon-btn",title:"Play Mode"},{default:H(()=>[Y(ue)]),_:1},8,["to"])):U("v-if",!0),B(L2)?(_(),Q(de,{key:1,to:B(a),class:"icon-btn",title:"Presenter Mode"},{default:H(()=>[Y(me)]),_:1},8,["to"])):U("v-if",!0),U("v-if",!0)],64)),(_(),w(G,{key:6},[B(_e).download?(_(),w("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...Ee)=>B(kr)&&B(kr)(...Ee))},[Y($e)])):U("v-if",!0)],64)),!B(It)&&B(_e).info&&!B(Nt)?(_(),w("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=Ee=>Ns.value=!B(Ns))},[Y(Re)])):U("v-if",!0),!B(It)&&!B(Nt)?(_(),Q(Xg,{key:8},{button:H(()=>[e("button",n0,[Y(qe)])]),menu:H(()=>[Y(Jg)]),_:1})):U("v-if",!0),B(Nt)?U("v-if",!0):(_(),Q(xo,{key:9})),e("div",s0,[e("div",o0,[c(Pn(B(je))+" ",1),e("span",l0,"/ "+Pn(B(Ou)),1)])]),Y(B(t0))],34)],512)}}});var Au={render(){return[]}},_u={render(){return[]}};const a0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},c0=Be({__name:"PresenterMouse",setup(t){return z(J),(n,s)=>{const o=gu;return B(Ol).cursor?(_(),w("div",a0,[Y(o,{class:"absolute",style:Ke({left:`${B(Ol).cursor.x}%`,top:`${B(Ol).cursor.y}%`})},null,8,["style"])])):U("v-if",!0)}}}),i0=Be({__name:"SlidesShow",props:{context:null},setup(t){z(J),pe(pt,()=>{var s,o;((s=pt.value)==null?void 0:s.meta)&&pt.value.meta.preload!==!1&&(pt.value.meta.__preloaded=!0),((o=Ll.value)==null?void 0:o.meta)&&Ll.value.meta.preload!==!1&&(Ll.value.meta.__preloaded=!0)},{immediate:!0});const n=jt();return ds(()=>import("./DrawingLayer.dab37c72.js"),[]).then(s=>n.value=s.default),(s,o)=>(_(),w(G,null,[U(" Global Bottom "),Y(B(_u)),U(" Slides "),(_(!0),w(G,null,fs(B(Le),l=>{var r,a;return _(),w(G,{key:l.path},[((r=l.meta)==null?void 0:r.__preloaded)||l===B(pt)?sa((_(),Q(B(ya),{key:0,is:l==null?void 0:l.component,clicks:l===B(pt)?B(St):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Te(B(da)(l)),route:l,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ip,l===B(pt)]]):U("v-if",!0)],64)}),128)),U(" Global Top "),Y(B(Au)),B(n)?(_(),Q(B(n),{key:0})):U("v-if",!0),B(It)?U("v-if",!0):(_(),Q(c0,{key:1}))],64))}}),p0=Be({__name:"Play",setup(t){z(J),Z5();const n=N();function s(r){var a;Yc.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?cn():pn())}W2(n);const o=k(()=>e5.value||Yc.value);jt();const l=jt();return ds(()=>import("./DrawingControls.48ca23f5.js"),[]).then(r=>l.value=r.default),(r,a)=>(_(),w(G,null,[e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr,max-content]",style:Ke(B(jp))},[Y(mu,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:B(ts)?B(Sn).width.value:void 0,scale:B($o),onPointerdown:s},{default:H(()=>[Y(i0,{context:"slide"})]),controls:H(()=>[e("div",{class:Te(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[B(o)?"opacity-100 right-0":"opacity-0 p-2",B(no)?"pointer-events-none":""]])},[Y(r0,{class:"m-auto",persist:B(o)},null,8,["persist"])],2),!B(_e).drawings.presenterOnly&&!B(Nt)&&B(l)?(_(),Q(B(l),{key:0,class:"ml-0"})):U("v-if",!0)]),_:1},8,["style","width","scale"]),U("v-if",!0)],4),Y(hv)],64))}});function Cu(t){const n=k(()=>t.value.path),s=k(()=>Le.length-1),o=k(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=k(()=>vl(o.value)),r=k(()=>Le.find(d=>d.path===`${o.value}`)),a=k(()=>{var d,h,v;return(v=(h=(d=r.value)==null?void 0:d.meta)==null?void 0:h.slide)==null?void 0:v.id}),i=k(()=>{var d,h;return(h=(d=r.value)==null?void 0:d.meta)==null?void 0:h.layout}),p=k(()=>Le.find(d=>d.path===`${Math.min(Le.length,o.value+1)}`)),u=k(()=>Le.filter(d=>{var h,v;return(v=(h=d.meta)==null?void 0:h.slide)==null?void 0:v.title}).reduce((d,h)=>(va(d,h),d),[])),f=k(()=>ga(u.value,r.value)),y=k(()=>Ba(f.value));return{route:t,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:p,rawTree:u,treeWithActiveStatuses:f,tree:y}}function bu(t,n,s){const o=N(0);ze(()=>{yt.afterEach(async()=>{await ze(),o.value+=1})});const l=k(()=>{var p,u;return o.value,((u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=k(()=>{var p,u,f;return+((f=(u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.clicks)!=null?f:l.value.length)}),a=k(()=>s.value<Le.length-1||t.value<r.value),i=k(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const u0=["id"],li=Be({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,o=Rt(s,"clicksElements",n),l=k(()=>({height:`${Lp}px`,width:`${kn}px`})),r=jt();ds(()=>Promise.resolve().then(function(){return nv}),void 0).then(u=>r.value=u.default);const a=k(()=>s.clicks),i=bu(a,s.nav.currentRoute,s.nav.currentPage),p=k(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ut(J,Me({nav:{...s.nav,...i},configs:_e,themeConfigs:k(()=>_e.themeConfig)})),(u,f)=>{var y;return _(),w("div",{id:B(p),class:"slide-container",style:Ke(B(l))},[Y(B(_u)),Y(B(ya),{is:(y=t.route)==null?void 0:y.component,"clicks-elements":B(o),"onUpdate:clicks-elements":f[0]||(f[0]=d=>Ce(o)?o.value=d:null),clicks:B(a),"clicks-disabled":!1,class:Te(B(da)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),B(r)?(_(),Q(B(r),{key:0,page:+t.route.path},null,8,["page"])):U("v-if",!0),Y(B(Au))],12,u0)}}}),f0=Be({__name:"PrintSlide",props:{route:null},setup(t){var r;const n=t;z(J);const s=Me(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=k(()=>n.route),l=Cu(o);return(a,i)=>(_(),w(G,null,[Y(li,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=p=>Ce(s)?s.value=p:null),clicks:0,nav:B(l),route:B(o)},null,8,["clicks-elements","nav","route"]),B(Us)?U("v-if",!0):(_(!0),w(G,{key:0},fs(s.length,p=>(_(),Q(li,{key:p,clicks:p,nav:B(l),route:B(o)},null,8,["clicks","nav","route"]))),128))],64))}});const d0={id:"print-content"},y0=Be({__name:"PrintContainer",props:{width:null},setup(t){const n=t;z(J);const s=k(()=>n.width),o=k(()=>n.width/rn),l=k(()=>s.value/o.value),r=k(()=>l.value<rn?s.value/kn:o.value*rn/kn),a=Le.slice(0,-1),i=k(()=>({"select-none":!_e.selectable,"slidev-code-line-numbers":_e.lineNumbers}));return ut(Vp,r),(p,u)=>(_(),w("div",{id:"print-container",class:Te(B(i))},[e("div",d0,[(_(!0),w(G,null,fs(B(a),f=>(_(),Q(f0,{key:f.path,route:f},null,8,["route"]))),128))]),et(p.$slots,"controls")],2))}});const h0=Be({__name:"Print",setup(t){z(J);const n=En.canvasWidth,s=Math.round(n/En.aspectRatio)+1;function o(l,{slots:r}){if(r.default)return kt("style",r.default())}return po(()=>{ts?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,r)=>(_(),w(G,null,[Y(o,null,{default:H(()=>[c(" @page { size: "+Pn(B(n))+"px "+Pn(s)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:Ke(B(jp))},[Y(y0,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:B(Sn).width.value},null,8,["style","width"])],4)],64))}});const m0={class:"slidev-layout end"},v0={__name:"end",setup(t){return z(J),(n,s)=>(_(),w("div",m0," END "))}};var g0=Kt(v0,[["__scopeId","data-v-024c70b4"]]);const B0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A0=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),_0=[A0];function C0(t,n){return _(),w("svg",B0,_0)}var b0={name:"carbon-logo-github",render:C0};function ri(t){return t.startsWith("/")?"/future-tech-conference-slide-2022-07-18/"+t.slice(1):t}function E0(t,n=!1){const s=t&&["#","rgb","hsl"].some(l=>t.indexOf(l)===0),o={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${ri(t)})`:`url("${ri(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const D0={class:"my-auto w-full"},x0=Be({__name:"cover",props:{background:{default:""}},setup(t){const n=t;z(J);const s=k(()=>E0(n.background,!0));return(o,l)=>(_(),w("div",{class:"slidev-layout cover",style:Ke(B(s))},[e("div",D0,[et(o.$slots,"default")])],4))}});const Eu=t=>(Mn("data-v-9a97c840"),t=t(),Tn(),t),w0=Eu(()=>e("h1",null,[c("Vue3 \u6700\u65B0\u69CB\u6587"),e("br"),c(" <script setup> \u306E\u7D39\u4ECB")],-1)),F0=Eu(()=>e("div",{class:"event-name-wrapper"},[e("div",{class:"event-name"},[e("a",{href:"https://future.connpass.com/event/254304/",target:"_blank",rel:"noopener"},"FUTURE CON 2022 - Jul 18th")])],-1)),k0={class:"pt-12"},S0=c(" Press Space for next page "),P0={class:"abs-br m-6 flex gap-2"},O0={href:"https://github.com/ota-meshi/future-tech-conference-slide-2022-07-18",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},$0={__name:"1",setup(t){const n={theme:"default",background:"./future02.jpeg",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},hideInToc:!0,download:!0},s=z(J);return(o,l)=>{const r=Bu,a=b0;return _(),Q(x0,Oe(Se(n)),{default:H(()=>[w0,F0,e("div",k0,[e("span",{onClick:l[0]||(l[0]=(...i)=>B(s).nav.next&&B(s).nav.next(...i)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[S0,Y(r,{class:"inline"})])]),e("div",P0,[U(` <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button> `),e("a",O0,[Y(a)])]),U(`
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
`)]),_:1},16)}}};var M0=Kt($0,[["__scopeId","data-v-9a97c840"]]);const T0={class:"slidev-layout default"},ml={__name:"default",setup(t){return z(J),(n,s)=>(_(),w("div",T0,[et(n.$slots,"default")]))}};const Du=t=>(Mn("data-v-653395e0"),t=t(),Tn(),t),I0=Du(()=>e("h1",null,"\u81EA\u5DF1\u7D39\u4ECB",-1)),R0=Du(()=>e("div",{grid:"~ gap-4",class:"profile"},[e("div",{class:"avatars"},[e("img",{class:"avatar",src:"https://github.com/ota-meshi.png",alt:"ota-meshi"}),e("div",{class:"org-avatars"},[e("img",{src:"https://github.com/future-architect.png",alt:"Future Corp"}),e("img",{src:"https://github.com/vuejs.png",alt:"Vue.js"}),e("img",{src:"https://github.com/stylelint.png",alt:"Stylelint"}),e("img",{src:"https://github.com/intlify.png",alt:"Intlify"}),e("img",{src:"https://github.com/stylus.png",alt:"Stylus"})])]),e("div",{class:"profile-contents"},[e("h3",null,"\u592A\u7530 \u6D0B\u4ECB"),e("ul",null,[e("li",null,"\u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C"),e("li",null,[c("GitHub: "),e("a",{href:"https://github.com/ota-meshi",target:"_blank",rel:"noopener"},"@ota-meshi"),c(),e("a",{class:"sponsor",href:"https://github.com/sponsors/ota-meshi",target:"_blank",rel:"noopener"},"\u2661 Sponsor"),c(" , npm: "),e("a",{href:"https://www.npmjs.com/~ota-meshi",target:"_blank",rel:"noopener"},"ota-meshi"),c(", Twitter: "),e("a",{href:"https://twitter.com/omoteota",target:"_blank",rel:"noopener"},"@omoteota"),c(","),e("br"),c(" Qiita: "),e("a",{href:"https://qiita.com/ota-meshi",target:"_blank",rel:"noopener"},"@ota-meshi")]),e("li",null,[c("\u6240\u5C5E: "),e("ul",null,[e("li",null,[e("a",{href:"https://www.future.co.jp/",target:"_blank",rel:"noopener"},"\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E"),c(" \u793E\u54E1 "),e("span",{class:"since"},"(2015/06 - )")]),e("li",null,[e("a",{href:"https://vuejs.org/about/team.html",target:"_blank",rel:"noopener"},"Vue.js"),c(" eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC "),e("span",{class:"since"},"(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )")]),e("li",null,[e("a",{href:"https://github.com/stylelint",target:"_blank",rel:"noopener"},"Stylelint"),c(" Owners \u30C1\u30FC\u30E0 "),e("span",{class:"since"},"(2020/09 - )")]),e("li",null,[e("a",{href:"https://github.com/intlify",target:"_blank",rel:"noopener"},"Intlify"),c(" eslint-plugin-vue-i18n \u62C5\u5F53 "),e("span",{class:"since"},"(2020/07 - )")]),e("li",null,[e("a",{href:"https://github.com/stylus",target:"_blank",rel:"noopener"},"Stylus"),c(" \u30C1\u30FC\u30E0 "),e("span",{class:"since"},"(2022/06 - )")])])]),e("li",null,[e("a",{href:"https://gihyo.jp/magazine/wdpress/archive/2021/vol120",target:"_blank",rel:"noopener"},"WEB+DB PRESS Vol.120"),c(" \u300C\u6700\u65B0Vue.js 3\u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 "),e("span",{class:"since"},"(2020/12/24)")]),e("li",null,[e("a",{href:"https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/",target:"_blank",rel:"noopener"},"Google Open Source Peer Bonus 2022"),c(" \u53D7\u8CDE")])])])],-1)),V0={__name:"2",setup(t){const n={hideInToc:!0,srcSequence:"./src/00-intro.md"};return z(J),(s,o)=>(_(),Q(ml,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),I0,R0]),_:1},16))}};var L0=Kt(V0,[["__scopeId","data-v-653395e0"]]);const j0=["href","innerHTML"],N0=["href"],U0=Be({__name:"Link",props:{to:null,title:null},setup(t){return z(J),(n,s)=>{const o=Qs("RouterLink");return!B(ts)&&t.title?(_(),Q(o,{key:0,to:String(t.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!B(ts)&&!t.title?(_(),Q(o,{key:1,to:String(t.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:H(()=>[et(n.$slots,"default")]),_:3},8,["to"])):B(ts)&&t.title?(_(),w("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,j0)):(_(),w("a",{key:3,href:`#${t.to}`},[et(n.$slots,"default")],8,N0))}}}),H0=c("Vue3 \u6700\u65B0\u69CB\u6587"),z0=e("br",null,null,-1),q0=c(" <script setup> \u306E\u7D39\u4ECB"),W0=c("\u81EA\u5DF1\u7D39\u4ECB"),Y0=c("\u30A2\u30B8\u30A7\u30F3\u30C0"),K0=c("What is <script setup>?"),Z0=c("What is <script setup>\uFF1F"),G0=c("<script setup>\u306E\u66F8\u304D\u65B9"),J0=c("\u57FA\u672C"),Q0=c("<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09"),X0=c("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"),e1=c("<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09"),t1=c("\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F"),n1=c("<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09"),s1=c("Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8"),o1=c("<script setup>\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09"),l1=c("Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript"),r1=c("<script setup>\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09"),a1=c("\u305D\u306E\u4ED6"),c1=c("Reactivity Transform"),i1=c("What is Reactivity Transform\uFF1F"),p1=c("What is Reactivity Transform\uFF1F"),u1=c("What is Reactivity Transform\uFF1F"),f1=c("\u307E\u3068\u3081"),d1=c("\u307E\u3068\u3081"),y1=c("Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}"),h1=c("Thank you for your attention"),m1=Be({__name:"titles",props:{no:null},setup(t){return(n,s)=>(_(),w("div",null,[+t.no==1?(_(),w(G,{key:0},[H0,z0,q0],64)):+t.no==2?(_(),w(G,{key:1},[W0],64)):+t.no==3?(_(),w(G,{key:2},[Y0],64)):+t.no==4?(_(),w(G,{key:3},[K0],64)):+t.no==5?(_(),w(G,{key:4},[Z0],64)):+t.no==6?(_(),w(G,{key:5},[G0],64)):+t.no==7?(_(),w(G,{key:6},[J0],64)):+t.no==8?(_(),w(G,{key:7},[Q0],64)):+t.no==9?(_(),w(G,{key:8},[X0],64)):+t.no==10?(_(),w(G,{key:9},[e1],64)):+t.no==11?(_(),w(G,{key:10},[t1],64)):+t.no==12?(_(),w(G,{key:11},[n1],64)):+t.no==13?(_(),w(G,{key:12},[s1],64)):+t.no==14?(_(),w(G,{key:13},[o1],64)):+t.no==15?(_(),w(G,{key:14},[l1],64)):+t.no==16?(_(),w(G,{key:15},[r1],64)):+t.no==17?(_(),w(G,{key:16},[a1],64)):+t.no==18?(_(),w(G,{key:17},[c1],64)):+t.no==19?(_(),w(G,{key:18},[i1],64)):+t.no==20?(_(),w(G,{key:19},[p1],64)):+t.no==21?(_(),w(G,{key:20},[u1],64)):+t.no==22?(_(),w(G,{key:21},[f1],64)):+t.no==23?(_(),w(G,{key:22},[d1],64)):+t.no==24?(_(),w(G,{key:23},[y1],64)):+t.no==25?(_(),w(G,{key:24},[h1],64)):U("v-if",!0)]))}}),v1=Be({__name:"TocList",props:{level:{default:1},list:null,listClass:null},setup(t){const n=t;z(J);const s=k(()=>[...A8(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]);return(o,l)=>{const r=U0,a=Qs("TocList",!0);return t.list&&t.list.length>0?(_(),w("ol",{key:0,class:Te(B(s))},[(_(!0),w(G,null,fs(t.list,i=>(_(),w("li",{key:i.path,class:Te(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[Y(r,{to:i.path},{default:H(()=>[Y(B(m1),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(_(),Q(a,{key:0,level:t.level+1,list:i.children,"list-class":t.listClass},null,8,["level","list","list-class"])):U("v-if",!0)],2))),128))],2)):U("v-if",!0)}}}),g1=Be({__name:"Toc",props:{columns:{default:1},listClass:{default:""},maxDepth:{default:1/0},minDepth:{default:1},mode:{default:"all"}},setup(t){const n=t,s=z(J);function o(i,p=1){if(p>Number(n.maxDepth))return[];if(p<Number(n.minDepth)){const u=i.find(f=>f.active||f.activeParent);return u?o(u.children,p+1):[]}return i.map(u=>({...u,children:o(u.children,p+1)}))}function l(i){return i.filter(p=>p.active||p.activeParent||p.hasActiveParent).map(p=>({...p,children:l(p.children)}))}function r(i){const p=i.some(u=>u.active||u.activeParent||u.hasActiveParent);return i.filter(()=>p).map(u=>({...u,children:r(u.children)}))}const a=k(()=>{const i=s==null?void 0:s.nav.tree;if(!i)return[];let p=o(i);return n.mode==="onlyCurrentTree"?p=l(p):n.mode==="onlySiblings"&&(p=r(p)),p});return(i,p)=>{const u=v1;return _(),w("div",{class:"slidev-toc",style:Ke(`column-count:${t.columns}`)},[Y(u,{level:1,list:B(a),"list-class":t.listClass},null,8,["list","list-class"])],4)}}}),B1=e("h1",null,"\u30A2\u30B8\u30A7\u30F3\u30C0",-1),A1={__name:"3",setup(t){const n={hideInToc:!0,srcSequence:"./src/00-intro.md"};return z(J),(s,o)=>{const l=g1;return _(),Q(ml,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),B1,Y(l,{maxDepth:"2"})]),_:1},16)}}},_1={class:"slidev-layout center h-full grid place-content-center"},C1={class:"my-auto"},hs={__name:"center",setup(t){return z(J),(n,s)=>(_(),w("div",_1,[e("div",C1,[et(n.$slots,"default")])]))}},b1=e("h1",null,"What is <script setup>\uFF1F\u{1F914}",-1),E1={__name:"4",setup(t){const n={layout:"center",class:"text-center big-title",srcSequence:"./src/01-script-setup.md"};return z(J),(s,o)=>(_(),Q(hs,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),b1]),_:1},16))}},D1={class:"slidev-layout default sub-two-cols"},x1={grid:"~ cols-2 gap-4"},w1={class:"sub-two-cols__left"},F1={class:"sub-two-cols__right"},lt={__name:"sub-two-cols",setup(t){return z(J),(n,s)=>(_(),w("div",D1,[et(n.$slots,"default"),e("div",x1,[e("div",w1,[et(n.$slots,"left")]),e("div",F1,[et(n.$slots,"right")])])]))}},k1=e("h2",null,"What is <script setup>\uFF1F",-1),S1=e("ul",null,[e("li",null,[e("p",null,[c("Vue3.2 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165\u3055\u308C\u305F SFC \u7528\u306E\u65B0\u69CB\u6587"),e("br"),e("strong",null,"7/1\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\u3002")]),e("ul",null,[e("li",null,[e("strong",null,"\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B")]),e("li",null,[e("strong",null,"\u5B9F\u884C\u6642\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A"),e("br"),c(" \uFF08\u4ED6\u306E\u8A18\u8FF0\u65B9\u6CD5\u304B\u3089\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u306F\u5FC5\u8981\u3060\u3063\u305F\u4E2D\u9593\u51E6\u7406\u3092\u30D0\u30A4\u30D1\u30B9\uFF09")]),e("li",null,[e("strong",null,"TypeScript \u3068\u306E\u89AA\u548C\u6027\u5411\u4E0A"),e("br"),c(" \uFF08\u578B\u60C5\u5831\u306B\u3088\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5B9A\u7FA9\u306E\u751F\u6210\u3002IDE \u306E\u30B5\u30DD\u30FC\u30C8\uFF09")])])])],-1),P1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ref"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"MyComponent"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./MyComponent.vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ref"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"MyComponent"),e("span",{style:{color:"#858585"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ref"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"MyComponent"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./MyComponent.vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"MyComponent"),e("span",{style:{color:"#8E8F8B"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),O1={__name:"5",setup(t){const n={layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/01-script-setup.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[S1]),right:H(l=>[P1]),default:H(()=>[k1]),_:1},16))}},$1=e("h1",null,"<script setup>\u306E\u66F8\u304D\u65B9",-1),M1={__name:"6",setup(t){const n={layout:"center",class:"text-center big-title",srcSequence:"./src/02-syntaxes.md"};return z(J),(s,o)=>(_(),Q(hs,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),$1]),_:1},16))}};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function xu(t){return typeof t=="undefined"||t===null}function T1(t){return typeof t=="object"&&t!==null}function I1(t){return Array.isArray(t)?t:xu(t)?[]:[t]}function R1(t,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],t[l]=n[l];return t}function V1(t,n){var s="",o;for(o=0;o<n;o+=1)s+=t;return s}function L1(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var j1=xu,N1=T1,U1=I1,H1=V1,z1=L1,q1=R1,ha={isNothing:j1,isObject:N1,toArray:U1,repeat:H1,isNegativeZero:z1,extend:q1};function wu(t,n){var s="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),o+" "+s):o}function oo(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=wu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}oo.prototype=Object.create(Error.prototype);oo.prototype.constructor=oo;oo.prototype.toString=function(n){return this.name+": "+wu(this,n)};var Cn=oo,W1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Y1=["scalar","sequence","mapping"];function K1(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(o){n[String(o)]=s})}),n}function Z1(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(W1.indexOf(s)===-1)throw new Cn('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=K1(n.styleAliases||null),Y1.indexOf(this.kind)===-1)throw new Cn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var Ye=Z1;function ai(t,n){var s=[];return t[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function G1(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return t}function wr(t){return this.extend(t)}wr.prototype.extend=function(n){var s=[],o=[];if(n instanceof Ye)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new Cn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof Ye))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Cn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Cn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof Ye))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(wr.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=ai(l,"implicit"),l.compiledExplicit=ai(l,"explicit"),l.compiledTypeMap=G1(l.compiledImplicit,l.compiledExplicit),l};var J1=wr,Q1=new Ye("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),X1=new Ye("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),e3=new Ye("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),t3=new J1({explicit:[Q1,X1,e3]});function n3(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function s3(){return null}function o3(t){return t===null}var l3=new Ye("tag:yaml.org,2002:null",{kind:"scalar",resolve:n3,construct:s3,predicate:o3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function r3(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function a3(t){return t==="true"||t==="True"||t==="TRUE"}function c3(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var i3=new Ye("tag:yaml.org,2002:bool",{kind:"scalar",resolve:r3,construct:a3,predicate:c3,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function p3(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function u3(t){return 48<=t&&t<=55}function f3(t){return 48<=t&&t<=57}function d3(t){if(t===null)return!1;var n=t.length,s=0,o=!1,l;if(!n)return!1;if(l=t[s],(l==="-"||l==="+")&&(l=t[++s]),l==="0"){if(s+1===n)return!0;if(l=t[++s],l==="b"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!p3(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!u3(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=t[s],l!=="_"){if(!f3(t.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function y3(t){var n=t,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function h3(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!ha.isNegativeZero(t)}var m3=new Ye("tag:yaml.org,2002:int",{kind:"scalar",resolve:d3,construct:y3,predicate:h3,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),v3=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function g3(t){return!(t===null||!v3.test(t)||t[t.length-1]==="_")}function B3(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var A3=/^[-+]?[0-9]+e/;function _3(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ha.isNegativeZero(t))return"-0.0";return s=t.toString(10),A3.test(s)?s.replace("e",".e"):s}function C3(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||ha.isNegativeZero(t))}var b3=new Ye("tag:yaml.org,2002:float",{kind:"scalar",resolve:g3,construct:B3,predicate:C3,represent:_3,defaultStyle:"lowercase"}),E3=t3.extend({implicit:[l3,i3,m3,b3]}),D3=E3,Fu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ku=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function x3(t){return t===null?!1:Fu.exec(t)!==null||ku.exec(t)!==null}function w3(t){var n,s,o,l,r,a,i,p=0,u=null,f,y,d;if(n=Fu.exec(t),n===null&&(n=ku.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(f=+n[10],y=+(n[11]||0),u=(f*60+y)*6e4,n[9]==="-"&&(u=-u)),d=new Date(Date.UTC(s,o,l,r,a,i,p)),u&&d.setTime(d.getTime()-u),d}function F3(t){return t.toISOString()}var k3=new Ye("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:x3,construct:w3,instanceOf:Date,represent:F3});function S3(t){return t==="<<"||t===null}var P3=new Ye("tag:yaml.org,2002:merge",{kind:"scalar",resolve:S3}),ma=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function O3(t){if(t===null)return!1;var n,s,o=0,l=t.length,r=ma;for(s=0;s<l;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function $3(t){var n,s,o=t.replace(/[\r\n=]/g,""),l=o.length,r=ma,a=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function M3(t){var n="",s=0,o,l,r=t.length,a=ma;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function T3(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var I3=new Ye("tag:yaml.org,2002:binary",{kind:"scalar",resolve:O3,construct:$3,predicate:T3,represent:M3}),R3=Object.prototype.hasOwnProperty,V3=Object.prototype.toString;function L3(t){if(t===null)return!0;var n=[],s,o,l,r,a,i=t;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,V3.call(l)!=="[object Object]")return!1;for(r in l)if(R3.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function j3(t){return t!==null?t:[]}var N3=new Ye("tag:yaml.org,2002:omap",{kind:"sequence",resolve:L3,construct:j3}),U3=Object.prototype.toString;function H3(t){if(t===null)return!0;var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],U3.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function z3(t){if(t===null)return[];var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var q3=new Ye("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:H3,construct:z3}),W3=Object.prototype.hasOwnProperty;function Y3(t){if(t===null)return!0;var n,s=t;for(n in s)if(W3.call(s,n)&&s[n]!==null)return!1;return!0}function K3(t){return t!==null?t:{}}var Z3=new Ye("tag:yaml.org,2002:set",{kind:"mapping",resolve:Y3,construct:K3});D3.extend({implicit:[k3,P3],explicit:[I3,N3,q3,Z3]});function ci(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}var G3=new Array(256),J3=new Array(256);for(var Un=0;Un<256;Un++)G3[Un]=ci(Un)?1:0,J3[Un]=ci(Un);function Q3(t){return Array.from(new Set(t))}function ii(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function X3(t,n){if(!n||n==="all"||n==="*")return ii(1,t+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...ii(+l,r?+r+1:t+1))}return Q3(s).filter(o=>o<=t).sort((o,l)=>o-l)}const uo=Be({__name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(t){const n=t;z(J);const s=z(Rs),o=z(_n),l=z(Vs);function r(p=5){const u=[],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=f.length;for(let d=0;d<p;d++)u.push(f.charAt(Math.floor(Math.random()*y)));return u.join("")}const a=N(),i=In();return us(()=>{const p=n.at==null?o==null?void 0:o.value.length:n.at,u=k(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(p||0)),n.ranges.length-1)),f=k(()=>n.ranges[u.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const y=r(),d=_8(n.ranges.length-1).map(h=>y+h);o!=null&&o.value&&(o.value.push(...d),fl(()=>d.forEach(h=>yr(o.value,h)),i))}po(()=>{if(!a.value)return;const d=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const h of d){const v=Array.from(h.querySelectorAll(".line")),C=X3(v.length,f.value);v.forEach((A,x)=>{const E=C.includes(x+1);A.classList.toggle(Bn,!0),A.classList.toggle("highlighted",E),A.classList.toggle("dishonored",!E)})}})}),(p,u)=>(_(),w("div",{ref_key:"el",ref:a},[et(p.$slots,"default")],512))}}),eB=e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09",-1),tB=e("ul",null,[e("li",null,"<script setup> \u3068\u8A18\u8FF0\u3057\u307E\u3059"),e("li",null,"\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059")],-1),nB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"msg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello!"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"msg"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"msg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"msg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello!"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"msg"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"msg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),sB={key:0},oB=e("p",null,[e("a",{href:"https://sfc.vuejs.org/#eNpNkMFOwzAMhl/F+LRJrLmXDoG48BC+dCEbHYkTxS4cqr47bjtNyym/7f/L70z4XkrzOwZssRNfh6IgQcfySuwzi0KSCxyB8DPEmJ8IX4iJzyN7HTLDd89fMXzEwf/s9jARA/QxVN2ZbW+jM3HnNq4RTWhIJfYaTAF0p1E1WxnsvPmFciR8YBKucwDTtAaZjWc2t/ms17k7EJ9xSCVXPaS+NFfJbDutiejWEMJ2y7jUbOlF23uqRVrn5OyXn7hKk+vF2a2pI+uQQhMkHU41/0moBiZcEJZkxvkfPmpuLQ==",target:"_blank",rel:"noopener"},"DEMO")],-1),lB=[oB],rB={key:1},aB=e("p",null,[e("code",null,"<script>"),c(" \u30D6\u30ED\u30C3\u30AF\u306B "),e("code",null,"setup"),c(" \u5C5E\u6027\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002")],-1),cB=[aB],iB={key:2},pB=e("p",null,"\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002",-1),uB=[pB],fB={__name:"7",setup(t){const n={layout:"sub-two-cols",level:2,srcSequence:"./src/02-syntaxes.md"},s=z(J);return(o,l)=>{const r=uo;return _(),Q(lt,Oe(Se(n)),{left:H(a=>[tB]),right:H(a=>[U(" prettier-ignore-start "),Y(r,Wt({},{ranges:["all","1","2,4,11-12"]}),{default:H(()=>[nB]),_:1},16),U(" prettier-ignore-end "),B(s).nav.clicks===0?(_(),w("div",sB,lB)):U("v-if",!0),B(s).nav.clicks===1?(_(),w("div",rB,cB)):U("v-if",!0),B(s).nav.clicks===2?(_(),w("div",iB,uB)):U("v-if",!0)]),default:H(()=>[eB]),_:1},16)}}},dB=e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09",-1),yB=e("p",null,"\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002",-1),hB=e("h3",null,"Composition API",-1),mB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"setup"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"msg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello!"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"msg"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"msg"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"msg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"setup"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"msg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello!"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"msg"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"msg"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"msg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),vB=e("h3",null,"Options API",-1),gB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"data"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#E0A569"}},"msg"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello!"'),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"methods"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"msg"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"msg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"data"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B58451"}},"msg"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello!"'),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"methods"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"msg"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"msg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),BB={__name:"8",setup(t){const n={layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[hB,mB]),right:H(l=>[vB,gB]),default:H(()=>[dB,yB]),_:1},16))}},AB=e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09",-1),_B=e("ul",null,[e("li",null,[c("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F"),e("a",{href:"https://vuejs.org/api/reactivity-core.html",target:"_blank",rel:"noopener"},"Reactivity API"),c("\u3092\u4F7F\u7528\u3057\u307E\u3059")]),e("li",null,[c("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F"),e("code",null,"import"),c("\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059"),e("br"),c(" \uFF08\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u3068\u540C\u3058\u6271\u3044\u3067\u3059\uFF09")])],-1),CB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ref"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"MyButton"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./MyButton.vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ref"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"MyButton"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#E0A569"}},"MyButton"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ref"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"MyButton"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./MyButton.vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#B58451"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),bB={key:0},EB=e("p",null,[e("a",{href:"https://sfc.vuejs.org/#eNqNUttO3DAQ/ZWR+0BWbBKqogq5AfWiPvYP/JK1J4shsS3b2YKi/HvHTlgtFAEPljy343PmeGI/nKsOIzLOmiC9dhECxtHdCKMHZ32ECTx2MEPn7QCCUa9g347VP48/xxiteSpX9VMmoeZOYaQ1IYK0o4lwneCKi00udKORUdP0bWtUj796Le+LDUzCwNJeHdp+xPNz6p6FaeqFIpGjIOLg+jYiRQDNkch3mVCuBTvBFCw3AUzTSmMmOJo6sqV6Ux8R2ZYt+sqhddVdsIb2k1mJtRAE4wvPlMtSOV1uY3SB13XoZNJ/Fyrr9zXdKk+v6gErDEO58/ZvQE/Agm1PMGpKHtCXHo1Cj/4tzBet/+EmWNI4k5RTR176DH1r9rSsJCjvaPEKB52sUthpg78pCM0EBXI4y9s923A4WK1gvik2eS10XjUTVzchQxbr+BYwj73j6e4DjjahtxHqZaBeJp6bmYFDfOwRgrQOVe5dsVdyu1be7z39DFVK21vP4dPVTn65bOnj5br1tGYOF8/i0rdKj4HDpXtYC65VSps9hyv3AJ+/rvlFZ6JAb7P5H+rELoY=",target:"_blank",rel:"noopener"},"DEMO")],-1),DB=[EB],xB={key:1},wB=e("p",null,[c("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F"),e("a",{href:"https://vuejs.org/api/reactivity-core.html",target:"_blank",rel:"noopener"},"Reactivity API"),c("\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002")],-1),FB=[wB],kB={key:2},SB=e("p",null,[c("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F"),e("code",null,"import"),c("\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002")],-1),PB=[SB],OB={__name:"9",setup(t){const n={layout:"sub-two-cols",level:2,srcSequence:"./src/02-syntaxes.md"},s=z(J);return(o,l)=>{const r=uo;return _(),Q(lt,Oe(Se(n)),{left:H(a=>[_B]),right:H(a=>[Y(r,Wt({},{ranges:["all","2,5,8","3,13"]}),{default:H(()=>[CB]),_:1},16),B(s).nav.clicks===0?(_(),w("div",bB,DB)):U("v-if",!0),B(s).nav.clicks===1?(_(),w("div",xB,FB)):U("v-if",!0),B(s).nav.clicks===2?(_(),w("div",kB,PB)):U("v-if",!0)]),default:H(()=>[AB]),_:1},16)}}};const ms=t=>(Mn("data-v-46d25b81"),t=t(),Tn(),t),$B=ms(()=>e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09",-1)),MB=ms(()=>e("p",null,"\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002",-1)),TB=ms(()=>e("h3",null,"Composition API",-1)),IB=ms(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ref"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"MyButton"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./MyButton.vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"components"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"MyButton"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"setup"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ref"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"MyButton"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#E0A569"}},"MyButton"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ref"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"MyButton"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./MyButton.vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"components"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"setup"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#B58451"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),RB=ms(()=>e("h3",null,"Options API",-1)),VB=ms(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"MyButton"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./MyButton.vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"components"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"MyButton"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"data"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#E0A569"}},"count"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"methods"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"MyButton"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#E0A569"}},"MyButton"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"MyButton"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./MyButton.vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"components"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"data"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B58451"}},"count"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"methods"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#B58451"}},"MyButton"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),LB={__name:"10",setup(t){const n={layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[TB,IB]),right:H(l=>[RB,VB]),default:H(()=>[$B,MB]),_:1},16))}};var jB=Kt(LB,[["__scopeId","data-v-46d25b81"]]);const NB=e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09",-1),UB=e("ul",null,[e("li",null,[c("\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F"),e("code",null,"v"),c("\u3067\u59CB\u307E\u308B\u5909\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059")]),e("li",null,[c("\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB"),e("code",null,"await"),c(" \u3082\u4F7F\u7528\u3067\u304D\u307E\u3059"),e("br"),e("span",{style:{opacity:"0.7"}},"(Vue2\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093)")])],-1),HB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"vMyDirective"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./my-directive.js"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"post"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"fetch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`/api/post/1`"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},"then"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"json"),e("span",{style:{color:"#858585"}},"());")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"v-my-directive"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"post"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"vMyDirective"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./my-directive.js"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"post"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"fetch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"`/api/post/1`"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#6C7834"}},"then"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"json"),e("span",{style:{color:"#8E8F8B"}},"());")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"v-my-directive"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"post"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),zB={key:0},qB=e("p",null,[c("\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001"),e("code",null,"v"),c("\u3067\u59CB\u307E\u308B\u5909\u6570\u540D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002")],-1),WB=[qB],YB={key:1},KB=e("p",null,[c("\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB"),e("code",null,"await"),c(" \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002")],-1),ZB=[KB],GB={__name:"11",setup(t){const n={layout:"sub-two-cols",level:2,srcSequence:"./src/02-syntaxes.md"},s=z(J);return(o,l)=>{const r=uo;return _(),Q(lt,Oe(Se(n)),{left:H(a=>[UB]),right:H(a=>[Y(r,Wt({},{ranges:["all","2,7","3"]}),{default:H(()=>[HB]),_:1},16),B(s).nav.clicks===1?(_(),w("div",zB,WB)):U("v-if",!0),B(s).nav.clicks===2?(_(),w("div",YB,ZB)):U("v-if",!0)]),default:H(()=>[NB]),_:1},16)}}},JB=e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09",-1),QB=e("p",null,"\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002",-1),XB=e("h3",null,"Composition API",-1),eA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"vMyDirective"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./my-directive.js"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"directives"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"my-directive"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"vMyDirective"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"setup"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"post"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"fetch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`/api/post/1`"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},"then"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"json"),e("span",{style:{color:"#858585"}},"());")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"post"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"v-my-directive"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"post"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"vMyDirective"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./my-directive.js"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"directives"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"my-directive"'),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"vMyDirective"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"setup"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"post"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"fetch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"`/api/post/1`"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#6C7834"}},"then"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"json"),e("span",{style:{color:"#8E8F8B"}},"());")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"post"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"v-my-directive"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"post"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),tA=e("h3",null,"Options API",-1),nA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"vMyDirective"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./my-directive.js"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"directives"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"my-directive"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"vMyDirective"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"data"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#E0A569"}},"post"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'""'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// \u975E\u540C\u671F\u306F\u30B9\u30DE\u30FC\u30C8\u306A\u66F8\u304D\u65B9\u304C\u3067\u304D\u306A\u3044")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mounted"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"post"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"fetch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`/api/post/1`"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},"then"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"json"),e("span",{style:{color:"#858585"}},"());")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"v-my-directive"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"post"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"vMyDirective"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./my-directive.js"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"directives"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"my-directive"'),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"vMyDirective"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"data"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B58451"}},"post"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'""'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// \u975E\u540C\u671F\u306F\u30B9\u30DE\u30FC\u30C8\u306A\u66F8\u304D\u65B9\u304C\u3067\u304D\u306A\u3044")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mounted"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"post"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"fetch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"`/api/post/1`"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#6C7834"}},"then"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"json"),e("span",{style:{color:"#8E8F8B"}},"());")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"v-my-directive"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"post"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),sA={__name:"12",setup(t){const n={layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[XB,eA]),right:H(l=>[tA,nA]),default:H(()=>[JB,QB]),_:1},16))}};const vs=t=>(Mn("data-v-31afbbf1"),t=t(),Tn(),t),oA=vs(()=>e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09",-1)),lA=vs(()=>e("ul",null,[e("li",null,[c("Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F "),e("code",null,"defineProps"),c(" \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059")]),e("li",null,[c("\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F "),e("code",null,"defineEmits"),c(" \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059")])],-1)),rA=vs(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ref"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"props"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"defineProps"),e("span",{style:{color:"#858585"}},"({")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"modelValue"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"emit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"defineEmits"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"send"'),e("span",{style:{color:"#858585"}},"]);")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"inputRef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ref"),e("span",{style:{color:"#858585"}},"();")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleInput"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"emit"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"inputRef"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"emit"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"send"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"modelValue"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"input"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"ref"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"inputRef"'),e("span",{style:{color:"#858585"}}," :"),e("span",{style:{color:"#E0A569"}},"value"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"modelValue"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"input"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleInput"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"send"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ref"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"props"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"defineProps"),e("span",{style:{color:"#8E8F8B"}},"({")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"modelValue"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"emit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"defineEmits"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"send"'),e("span",{style:{color:"#8E8F8B"}},"]);")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"inputRef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"();")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleInput"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"emit"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"inputRef"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"emit"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"send"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"modelValue"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"input"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"inputRef"'),e("span",{style:{color:"#8E8F8B"}}," :"),e("span",{style:{color:"#B58451"}},"value"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"modelValue"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"input"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleInput"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"send"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),aA={key:0},cA=vs(()=>e("p",null,[e("a",{href:"https://sfc.vuejs.org/#eNqVUsFu2zAM/RVClzhYYt+9tMhQ7LDDgGEFdpl2cG26VWdLgiSnKAz/e0kpdtIULdCLLVHk4+PjG8U3a/PDgKIUO187ZQN4DIO9llr11rgAIzhsYYLWmR6koFwpvi6vP59vDJ006jBn5MVZkLFjPoDUtdE+QG8a7OCKYbPVai211O2g66CMhodKNx3eom6yQ9UNuIaRS6sOXUgR+AIreKo80SR0Lp+k3hWJO7GmS8DedlVAugHszhketrH5lRTxLwXsCaah+6mxFEUqvHOv/uMYa6bYbmkhNiIpse0rmz96o0nJyFkeH7wUZZqCY1GOkg4PIVhfFoVva9bo0efG3Rd0yt2gg+oxR99v75x58ugIWIrNGUZBwQO6rSPC6NB9hHmR+gaXYWmoiUa5WNynTZEWbJ2xnhbcYKs0/uJbFgWIAv7hLZZwG5zS9zTTtF4KsVdhqftOF5/9lWKwDSldnopJCurJi5Pi36laaTuE30QrWYsf3jjrB+dkR1dxu+wd/Bksj6ZLX0YkoS4gbzpV/7+ATNw2SYn8hHxE+MiusTEPQKacSZBPy8hgNu6RJuxjxmLfOB2FZwMPIRDNfc0Ml6TIV4pr5rgrUg7ln3t6egGz7nCT",target:"_blank",rel:"noopener"},"DEMO")],-1)),iA=[cA],pA={key:1},uA=vs(()=>e("p",null,[c("Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F "),e("code",null,"defineProps"),c(" \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002")],-1)),fA=[uA],dA={key:2},yA=vs(()=>e("p",null,[c("\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F "),e("code",null,"defineEmits"),c(" \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002")],-1)),hA=[yA],mA={__name:"13",setup(t){const n={layout:"sub-two-cols",level:2,srcSequence:"./src/02-syntaxes.md"},s=z(J);return(o,l)=>{const r=uo;return _(),Q(lt,Oe(Se(n)),{left:H(a=>[lA]),right:H(a=>[Y(r,Wt({},{ranges:["all","3-5,13,18","6,10,13"]}),{default:H(()=>[rA]),_:1},16),B(s).nav.clicks===0?(_(),w("div",aA,iA)):U("v-if",!0),B(s).nav.clicks===1?(_(),w("div",pA,fA)):U("v-if",!0),B(s).nav.clicks===2?(_(),w("div",dA,hA)):U("v-if",!0)]),default:H(()=>[oA]),_:1},16)}}};var vA=Kt(mA,[["__scopeId","data-v-31afbbf1"]]);const gs=t=>(Mn("data-v-273e1a4d"),t=t(),Tn(),t),gA=gs(()=>e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09",-1)),BA=gs(()=>e("p",null,"\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002",-1)),AA=gs(()=>e("h3",null,"Composition API",-1)),_A=gs(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ref"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"props"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"modelValue"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"emits"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"send"'),e("span",{style:{color:"#858585"}},"],")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"setup"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"emit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"inputRef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ref"),e("span",{style:{color:"#858585"}},"();")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleInput"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"emit"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"inputRef"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"emit"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"send"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"modelValue"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"inputRef"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"handleInput"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"input"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"ref"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"inputRef"'),e("span",{style:{color:"#858585"}}," :"),e("span",{style:{color:"#E0A569"}},"value"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"modelValue"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"input"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleInput"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"send"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ref"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"props"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"modelValue"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"emits"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"send"'),e("span",{style:{color:"#8E8F8B"}},"],")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"setup"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"emit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"inputRef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"();")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleInput"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"emit"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"inputRef"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"emit"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"send"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"modelValue"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"inputRef"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"handleInput"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"input"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"inputRef"'),e("span",{style:{color:"#8E8F8B"}}," :"),e("span",{style:{color:"#B58451"}},"value"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"modelValue"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"input"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleInput"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"send"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),CA=gs(()=>e("h3",null,"Options API",-1)),bA=gs(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"props"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"modelValue"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"emits"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"send"'),e("span",{style:{color:"#858585"}},"],")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"methods"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"handleInput"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"$emit"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"$refs"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"inputRef"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"$emit"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"send"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"modelValue"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"input"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"ref"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"inputRef"'),e("span",{style:{color:"#858585"}}," :"),e("span",{style:{color:"#E0A569"}},"value"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"modelValue"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"input"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleInput"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"send"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"props"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"modelValue"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"emits"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"send"'),e("span",{style:{color:"#8E8F8B"}},"],")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"methods"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"handleInput"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"$emit"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"$refs"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"inputRef"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"$emit"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"send"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"modelValue"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"input"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"inputRef"'),e("span",{style:{color:"#8E8F8B"}}," :"),e("span",{style:{color:"#B58451"}},"value"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"modelValue"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"input"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleInput"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"send"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),EA={__name:"14",setup(t){const n={layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[AA,_A]),right:H(l=>[CA,bA]),default:H(()=>[gA,BA]),_:1},16))}};var DA=Kt(EA,[["__scopeId","data-v-273e1a4d"]]);const xA=e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09",-1),wA=e("ul",null,[e("li",null,[e("code",null,"defineProps"),c("\u3068"),e("code",null,"defineEmits"),c("\u306F TypeScript \u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u578B\u306E\u307F\u306E\u5B9A\u7FA9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059 "),e("ul",null,[e("li",null,[e("code",null,"defineProps"),c("\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059 "),e("ul",null,[e("li",null,[c("\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306B\u306F "),e("code",null,"withDefaults"),c(" \u3092\u4F75\u7528\u3057\u307E\u3059")])])]),e("li",null,[e("code",null,"defineEmits"),c("\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059")])])])],-1),FA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#DBD7CA"}},"="),e("span",{style:{color:"#C98A7D"}},'"ts"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"props"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"withDefaults"),e("span",{style:{color:"#858585"}},"(")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"defineProps"),e("span",{style:{color:"#858585"}},"<{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"modelValue"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"string"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello!"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Goodby!"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}>(),")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"message"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello!"'),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"emit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"defineEmits"),e("span",{style:{color:"#858585"}},"<{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"e"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"newValue"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"void"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"e"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"send"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sendValue"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"void"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}>();")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#393A34"}},"="),e("span",{style:{color:"#B56959"}},'"ts"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"props"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"withDefaults"),e("span",{style:{color:"#8E8F8B"}},"(")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"defineProps"),e("span",{style:{color:"#8E8F8B"}},"<{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"modelValue"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"string"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"message"),e("span",{style:{color:"#AB5959"}},"?:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello!"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Goodby!"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}>(),")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"message"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello!"'),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"emit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"defineEmits"),e("span",{style:{color:"#8E8F8B"}},"<{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"e"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"newValue"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"void"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"e"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"send"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sendValue"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"void"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}>();")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),kA={key:0},SA=e("p",null,[e("a",{href:"https://sfc.vuejs.org/#eNqFU01v2zAM/SucLnGwxr57aZehG7YdBgwbsJMujk0n7mxJkOQERer/XlKy81W0zSEWpcenR1LvIL4Yk+56FLlYutI2xoND35s7qZrOaOvhABZrGKC2ugMpCCvFp+Ppr8d7TSuFyk+INDvbZO6AB5Cq1Mp56HSFLdwybTKbzaWSqu5V6RutYFuoqsW/qKpkV7Q9zuHAqUWL1scd+Agz2BeOZBI7pw9SLbOonVRT4LEzbeGRIoDlucLdIlx+K0X4SgEroqkoPl0sRRYT1/bieziEnCFcd7xC3IjYiUVXmPTBaUWdDJrleOCkyGMVvBfakdNi671xeZa5uuQePbhU201Gq9T2yjcdpui6xdrqvUNLxFLcnHFktLlDu7AkGC3atzivoC94mZaKGqiUq8FdPwpoC7WhZnFN7z4QqbIMFuOPwzh9Y7VxNP1947dfsS761ruEJVRYNwp/8/FybFdo+D+eeg7O20ZtwkOiA3Su2OBnLvoHtq3+QKN8ouC71tX6kaIAHO6SeejaxBfTzrPCMVU/p4QoELvGk74o5xsFo5wk5PWmorHnJ2VEAQr3FyrnOex0UwUNMY1fGSP5+wqUxY4+uWjcyTiNMr3/Q72O3mH0C+v8ZEwy2oZLSV7RPJGlwVXxnxmpF1eU921T/r+inOoJ00xPzCPDG34kG8UpDMPRYUEL10Rva9JFA82DqMmso3JYBcTRsqFg2p5M23tPylcliz6CQgn0Zln2MosYwp/5WCoxPAOdsbxn",target:"_blank",rel:"noopener"},"DEMO")],-1),PA=[SA],OA={key:1},$A=e("p",null,[e("code",null,"defineProps"),c("\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002")],-1),MA=[$A],TA={key:2},IA=e("p",null,[c("\u5FC5\u9808\u30FB\u4EFB\u610F\u306F\u578B("),e("code",null,"?:"),c(")\u3067\u793A\u3057\u307E\u3059\u3002")],-1),RA=[IA],VA={key:3},LA=e("p",null,[c("\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F "),e("code",null,"defineProps"),c("\u306B\u52A0\u3048\u3066"),e("code",null,"withDefaults"),c(" \u3092\u4F75\u7528\u3057\u307E\u3059\u3002")],-1),jA=[LA],NA={key:4},UA=e("p",null,[e("code",null,"defineEmits"),c("\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002")],-1),HA=[UA],zA={__name:"15",setup(t){const n={layout:"sub-two-cols",level:2,srcSequence:"./src/02-syntaxes.md"},s=z(J);return(o,l)=>{const r=uo;return _(),Q(lt,Oe(Se(n)),{left:H(a=>[wA]),right:H(a=>[Y(r,Wt({},{ranges:["all","4-7","6","3,8-10","12-15"]}),{default:H(()=>[FA]),_:1},16),B(s).nav.clicks===0?(_(),w("div",kA,PA)):U("v-if",!0),B(s).nav.clicks===1?(_(),w("div",OA,MA)):U("v-if",!0),B(s).nav.clicks===2?(_(),w("div",TA,RA)):U("v-if",!0),B(s).nav.clicks===3?(_(),w("div",VA,jA)):U("v-if",!0),B(s).nav.clicks===4?(_(),w("div",NA,HA)):U("v-if",!0)]),default:H(()=>[xA]),_:1},16)}}},qA=e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09",-1),WA=e("p",null,"\u578B\u306E\u307F\u5B9A\u7FA9\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002",-1),YA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#DBD7CA"}},"="),e("span",{style:{color:"#C98A7D"}},'"ts"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"props"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"defineProps"),e("span",{style:{color:"#858585"}},"({")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"modelValue"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"required"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"message"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// \u30E6\u30CB\u30AA\u30F3\u578B\u306B\u306F\u3067\u304D\u307E\u305B\u3093\u3002")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello!"'),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"emit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"defineEmits"),e("span",{style:{color:"#858585"}},"({")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"newValue"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"send"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"sendValue"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#393A34"}},"="),e("span",{style:{color:"#B56959"}},'"ts"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"props"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"defineProps"),e("span",{style:{color:"#8E8F8B"}},"({")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"modelValue"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"required"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"message"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// \u30E6\u30CB\u30AA\u30F3\u578B\u306B\u306F\u3067\u304D\u307E\u305B\u3093\u3002")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello!"'),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"emit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"defineEmits"),e("span",{style:{color:"#8E8F8B"}},"({")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"update:modelValue"'),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"newValue"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"send"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"sendValue"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),KA={__name:"16",setup(t){const n={layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),qA,WA,YA]),_:1},16))}};const fo=t=>(Mn("data-v-d2c7bd8c"),t=t(),Tn(),t),ZA=fo(()=>e("h2",null,"<script setup>\u306E\u66F8\u304D\u65B9\uFF08\u305D\u306E\u4ED6\uFF09",-1)),GA=fo(()=>e("ul",null,[e("li",null,[e("a",{href:"https://vuejs.org/api/sfc-script-setup.html#defineexpose",target:"_blank",rel:"noopener"},[e("code",null,"defineExpose")]),c("\u3092\u4F7F\u7528\u3057\u3066\u5916\u90E8\u304B\u3089\u53C2\u7167\u3067\u304D\u308B\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5B9A\u7FA9\u3057\u307E\u3059")]),e("li",null,[e("a",{href:"https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs",target:"_blank",rel:"noopener"},[e("code",null,"useSlots"),c("\u3068"),e("code",null,"useAttrs")]),c("\u3092\u4F7F\u7528\u3057\u3066"),e("code",null,"$slots"),c("\u3084"),e("code",null,"$attrs"),c("\u306E\u3088\u3046\u306A\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059")]),e("li",null,[e("code",null,"<script setup>"),c("\u3068\u306F\u5225\u306B"),e("a",{href:"https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script",target:"_blank",rel:"noopener"},[e("code",null,"<script>"),c("\u30D6\u30ED\u30C3\u30AF")]),c("\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059 "),e("ul",null,[e("li",null,[e("code",null,"export default {}"),c("\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3067\u3001"),e("code",null,"inheritAttrs"),c("\u306A\u3069\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059")]),e("li",null,[e("code",null,".vue"),c("\u304C"),e("code",null,"export"),c("\u3059\u308B\u60C5\u5831\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059")]),e("li",null,"module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059")])])],-1)),JA=fo(()=>e("br",null,null,-1)),QA=fo(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useSlots"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useAttrs"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"slots"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"useSlots"),e("span",{style:{color:"#858585"}},"();")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"attrs"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"useAttrs"),e("span",{style:{color:"#858585"}},"();")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useSlots"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useAttrs"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"slots"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"useSlots"),e("span",{style:{color:"#8E8F8B"}},"();")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"attrs"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"useAttrs"),e("span",{style:{color:"#8E8F8B"}},"();")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),XA=fo(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"runSideEffectOnce"),e("span",{style:{color:"#858585"}},"();")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"inheritAttrs"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"runSideEffectOnce"),e("span",{style:{color:"#8E8F8B"}},"();")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"inheritAttrs"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),e2={__name:"17",setup(t){const n={layout:"sub-two-cols",level:2,srcSequence:"./src/02-syntaxes.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[QA]),right:H(l=>[XA]),default:H(()=>[ZA,GA,JA]),_:1},16))}};var t2=Kt(e2,[["__scopeId","data-v-d2c7bd8c"]]);const n2=e("h1",null,"Reactivity Transform",-1),s2={__name:"18",setup(t){const n={layout:"center",class:"text-center big-title",srcSequence:"./src/03-reactive-transform.md"};return z(J),(s,o)=>(_(),Q(hs,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),n2]),_:1},16))}},o2=e("h2",null,"What is Reactivity Transform\uFF1F",-1),l2=e("ul",null,[e("li",null,[e("p",null,[c("Vue3.3 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165"),e("strong",null,"\u4E88\u5B9A"),c("\u306E\u65B0\u69CB\u6587"),e("br"),c(" \uFF08Vue3.2 \u3067\u3082\u5B9F\u9A13\u7684\u6A5F\u80FD\u3068\u3057\u3066\u4F7F\u7528\u53EF\u80FD\uFF09")]),e("ul",null,[e("li",null,[e("strong",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6 API \u5468\u308A\u306E\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B")]),e("li",null,[c("SFC \u4EE5\u5916\uFF08JavaScript\u30FBTypeScript\uFF09\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059"),e("br"),c(" (Vite \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408)")])])])],-1),r2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"MyComponent"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./MyComponent.vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"$ref"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}}," @"),e("span",{style:{color:"#E0A569"}},"click"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"MyComponent"),e("span",{style:{color:"#858585"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"MyComponent"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"./MyComponent.vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"$ref"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}}," @"),e("span",{style:{color:"#B58451"}},"click"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"MyComponent"),e("span",{style:{color:"#8E8F8B"}}," />")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),a2={__name:"19",setup(t){const n={layout:"sub-two-cols",srcSequence:"./src/03-reactive-transform.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[l2]),right:H(l=>[r2]),default:H(()=>[o2]),_:1},16))}},c2=e("h2",null,"What is Reactivity Transform\uFF1F",-1),i2=e("p",null,[c("Ref \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E"),e("code",null,".value"),c("\u3092\u6D88\u3057\u53BB\u308C\u307E\u3059\u3002")],-1),p2=e("p",null,"\u4EE5\u524D\uFF1A",-1),u2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ref"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"toRefs"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"computed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"vue"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useMouse"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@vueuse/core"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ref"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"x"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"toRefs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"useMouse"),e("span",{style:{color:"#858585"}},"());")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"mousePosition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"computed"),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`x: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},"value"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},", y: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"y"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},"value"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ref"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"toRefs"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"computed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"vue"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useMouse"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"@vueuse/core"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ref"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"x"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"toRefs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"useMouse"),e("span",{style:{color:"#8E8F8B"}},"());")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"mousePosition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"computed"),e("span",{style:{color:"#8E8F8B"}},"(()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"`x: "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B56959"}},"value"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},", y: "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"y"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B56959"}},"value"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},"`"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),f2=e("p",null,"Reactivity Transform \u4F7F\u7528\uFF1A",-1),d2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"setup"),e("span",{style:{color:"#858585"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useMouse"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@vueuse/core"'),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"$ref"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"useMouse"),e("span",{style:{color:"#858585"}},"());")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"mousePosition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"$computed"),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`x: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},", y: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"y"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"setup"),e("span",{style:{color:"#8E8F8B"}},">")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useMouse"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"@vueuse/core"'),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"$ref"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"useMouse"),e("span",{style:{color:"#8E8F8B"}},"());")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"mousePosition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"$computed"),e("span",{style:{color:"#8E8F8B"}},"(()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"`x: "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},", y: "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"y"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},"`"),e("span",{style:{color:"#8E8F8B"}},");")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),y2=e("p",null,[e("a",{href:"https://sfc.vuejs.org/#eNqFks9uwjAMxl/FinYoGjSTdmNlYtp50h4gByA1EGj+KEkZqOq7z21gKhNsl8pxPv/8OW7D3pzLDzWyKSuC9MpFCBhr9yqM0s76CA3UAT8sfaCFtbcaBJtTBSW4tB4FexFGmAojSFubCDN48LjOnkZ9fl0bGZU1sF2assL3Ssl9NoJGGEj6x0fStRdEA8cxnKgTUbJL42yUWNKaEEF3qU8bVI8lnbTa1RHLjLizV1gcp/DQHFvidMGpXXTVBU/j0WB0iKhdtYxIJ4CiVIc+oHBVx0jUuex8zgQbuBbsLAJomvOsLRnv63gqPCt61xeL005+bTqVFTw1LviPHTZm6dkneunyXbCGFtO/lThfBMEImNoIRnvozuQzRhemnIe17Na5C7n1G05R7smn0phj0JOVt18BPYEFGw8YnJIH9BOPpkSP/i/mL+l97vVPMgTWxu03Oa2NDzVcEfGY65uQsF16LP/DJNVNECkmJWp1D3G555Va8cPzkNEhaGEta78BftUW3w==",target:"_blank",rel:"noopener"},"DEMO")],-1),h2={__name:"20",setup(t){const n={layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/03-reactive-transform.md"};return z(J),(s,o)=>(_(),Q(lt,Oe(Se(n)),{left:H(l=>[p2,u2]),right:H(l=>[f2,d2,y2]),default:H(()=>[c2,i2]),_:1},16))}},m2=e("h2",null,"What is Reactivity Transform\uFF1F",-1),v2=e("p",null,[c("\u8A73\u7D30\u306F "),e("a",{href:"https://vuejs.org/guide/extras/reactivity-transform.html",target:"_blank",rel:"noopener"},"Reactivity Transform"),c(" \u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),e("br"),e("a",{href:"https://vuejs.org/guide/extras/reactivity-transform.html",target:"_blank",rel:"noopener"},"https://vuejs.org/guide/extras/reactivity-transform.html")],-1),g2=e("p",null,[c("\u73FE\u5728\u3001\u5B9F\u9A13\u7684\u6A5F\u80FD\u3067\u3042\u308B\u305F\u3081\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u8A73\u7D30\u306F\u5272\u611B\u3057\u307E\u3059\u3002"),e("br"),c(" \u307E\u305F\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u306B\u8F09\u305B\u305F\u8A18\u8FF0\u65B9\u6CD5\u3084\u6A5F\u80FD\u306F\u5909\u66F4\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002")],-1),B2={__name:"21",setup(t){const n={hideInToc:!0,srcSequence:"./src/03-reactive-transform.md"};return z(J),(s,o)=>(_(),Q(ml,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),m2,v2,g2]),_:1},16))}},A2=e("h1",null,"\u307E\u3068\u3081",-1),_2={__name:"22",setup(t){const n={layout:"center",class:"text-center big-title",srcSequence:"./src/04-conclusion.md"};return z(J),(s,o)=>(_(),Q(hs,Oe(Se(n)),{default:H(()=>[A2]),_:1},16))}},C2=e("h2",null,"\u307E\u3068\u3081",-1),b2=e("ul",null,[e("li",null,[c("Vue3.2 \u3067 <script setup> \u304C\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F"),e("br"),c(" \uFF08Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\uFF09")]),e("li",null,"Vue3.3 \u3067\u306F Reactivity Transform \u304C\u5C0E\u5165\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059")],-1),E2=e("br",null,null,-1),D2=e("br",null,null,-1),x2=e("br",null,null,-1),w2=e("div",{class:"text-center text-3xl"},[e("strong",null,"\u5197\u9577\u3060\u3063\u305F\u8A18\u8FF0\u304C\u304B\u306A\u308A\u5C11\u306A\u304F\u306A\u308A"),e("br"),e("strong",null,"\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u307E\u3059"),c("\u3002 ")],-1),F2={__name:"23",setup(t){const n={hideInToc:!0,srcSequence:"./src/04-conclusion.md"};return z(J),(s,o)=>(_(),Q(ml,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),C2,b2,E2,D2,x2,w2]),_:1},16))}},k2=e("h2",null,"Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}",-1),S2={__name:"24",setup(t){const n={layout:"center",class:"text-center",hideInToc:!0,srcSequence:"./src/04-conclusion.md"};return z(J),(s,o)=>(_(),Q(hs,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),k2]),_:1},16))}};const Su=t=>(Mn("data-v-4a967b1f"),t=t(),Tn(),t),P2=Su(()=>e("h1",null,"Thank you for your attention",-1)),O2=Su(()=>e("div",{class:"ribbon"},[e("p",null,[e("a",{href:"https://github.com/sponsors/ota-meshi",target:"_blank",rel:"noopener"},"Support me \u2764"),c(" or follow me!!"),e("br"),c(" GitHub: "),e("a",{href:"https://github.com/ota-meshi",target:"_blank",rel:"noopener"},"https://github.com/ota-meshi"),e("br"),c(" Twitter: "),e("a",{href:"https://twitter.com/omoteota",target:"_blank",rel:"noopener"},"https://twitter.com/omoteota"),e("br"),c(" Qiita: "),e("a",{href:"https://qiita.com/ota-meshi",target:"_blank",rel:"noopener"},"https://qiita.com/ota-meshi")])],-1)),$2={__name:"25",setup(t){const n={layout:"center",class:"text-center big-title",hideInToc:!0};return z(J),(s,o)=>(_(),Q(hs,Oe(Se(n)),{default:H(()=>[U(" prettier-ignore-end "),P2,O2]),_:1},16))}};var M2=Kt($2,[["__scopeId","data-v-4a967b1f"]]),T2=[{path:"1",name:"page-1",component:M0,meta:{theme:"default",background:"./future02.jpeg",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Vue3 \u6700\u65B0\u69CB\u6587<br> &lt;script setup&gt; \u306E\u7D39\u4ECB",hideInToc:!0,download:!0,slide:{raw:`---
theme: default
background: ./future02.jpeg
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: Vue3 \u6700\u65B0\u69CB\u6587<br> &lt;script setup&gt; \u306E\u7D39\u4ECB
hideInToc: true
download: true
---

# Vue3 \u6700\u65B0\u69CB\u6587<br> &lt;script setup&gt; \u306E\u7D39\u4ECB

<div class="event-name-wrapper">
  <div class="event-name">
    <a href="https://future.connpass.com/event/254304/" target="_blank" rel="noopener">FUTURE CON 2022 - Jul 18th</a>
  </div>
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <!-- <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button> -->
  <a href="https://github.com/ota-meshi/future-tech-conference-slide-2022-07-18" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1, a {
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
h1 {
  font-weight: 700;
}
.event-name-wrapper {
  display: flex;
  justify-content: center;
}
.event-name {
  width: fit-content;
  background-color: #fffd;
  padding: 16px;
  font-weight: 700;
}
.event-name:hover {
  width: fit-content;
  background-color: #fff;
  padding: 16px;
  font-weight: 700;
}
</style>

<!-- prettier-ignore-start -->
`,title:"Vue3 \u6700\u65B0\u69CB\u6587<br> &lt;script setup&gt; \u306E\u7D39\u4ECB",level:1,content:`# Vue3 \u6700\u65B0\u69CB\u6587<br> &lt;script setup&gt; \u306E\u7D39\u4ECB

<div class="event-name-wrapper">
  <div class="event-name">
    <a href="https://future.connpass.com/event/254304/" target="_blank" rel="noopener">FUTURE CON 2022 - Jul 18th</a>
  </div>
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <!-- <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button> -->
  <a href="https://github.com/ota-meshi/future-tech-conference-slide-2022-07-18" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1, a {
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
h1 {
  font-weight: 700;
}
.event-name-wrapper {
  display: flex;
  justify-content: center;
}
.event-name {
  width: fit-content;
  background-color: #fffd;
  padding: 16px;
  font-weight: 700;
}
.event-name:hover {
  width: fit-content;
  background-color: #fff;
  padding: 16px;
  font-weight: 700;
}
</style>`,frontmatter:{theme:"default",background:"./future02.jpeg",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Vue3 \u6700\u65B0\u69CB\u6587<br> &lt;script setup&gt; \u306E\u7D39\u4ECB",hideInToc:!0,download:!0},note:"prettier-ignore-start",index:0,start:0,end:79,notesHTML:`<p>prettier-ignore-start</p>
`,filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:L0,meta:{hideInToc:!0,title:"\u81EA\u5DF1\u7D39\u4ECB",srcSequence:"./src/00-intro.md",slide:{raw:null,title:"\u81EA\u5DF1\u7D39\u4ECB",level:1,content:`<!-- prettier-ignore-end -->

# \u81EA\u5DF1\u7D39\u4ECB

<div grid="~ gap-4" class="profile">

<div class="avatars">
  <img class="avatar" src="https://github.com/ota-meshi.png" alt="ota-meshi">
  <div class="org-avatars">
    <img src="https://github.com/future-architect.png" alt="Future Corp">
    <img src="https://github.com/vuejs.png" alt="Vue.js">
    <img src="https://github.com/stylelint.png" alt="Stylelint">
    <img src="https://github.com/intlify.png" alt="Intlify">
    <img src="https://github.com/stylus.png" alt="Stylus">
  </div>
</div>

<div class="profile-contents">

### \u592A\u7530 \u6D0B\u4ECB

- \u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C  
- GitHub: [@ota-meshi](https://github.com/ota-meshi) <a class="sponsor" href="https://github.com/sponsors/ota-meshi" target="_blank" rel="noopener">\u2661 Sponsor</a> ,
  npm: [ota-meshi](https://www.npmjs.com/~ota-meshi),
  Twitter: [@omoteota](https://twitter.com/omoteota),  
  Qiita: [@ota-meshi](https://qiita.com/ota-meshi)
- \u6240\u5C5E:
  - [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E](https://www.future.co.jp/) \u793E\u54E1 <span class="since">(2015/06 - )</span>
  - [Vue.js](https://vuejs.org/about/team.html) eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )</span>
  - [Stylelint](https://github.com/stylelint) Owners \u30C1\u30FC\u30E0 <span class="since">(2020/09 - )</span>
  - [Intlify](https://github.com/intlify) eslint-plugin-vue-i18n \u62C5\u5F53 <span class="since">(2020/07 - )</span>
  - [Stylus](https://github.com/stylus) \u30C1\u30FC\u30E0 <span class="since">(2022/06 - )</span>
- [WEB+DB PRESS Vol.120] \u300C\u6700\u65B0Vue.js 3\u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 <span class="since">(2020/12/24)</span>
- [Google Open Source Peer Bonus 2022] \u53D7\u8CDE

[WEB+DB PRESS Vol.120]: https://gihyo.jp/magazine/wdpress/archive/2021/vol120
[Google Open Source Peer Bonus 2022]: https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/

</div>
</div>

<style>
.profile {
  grid-template-columns: 0.5fr 1.3fr;
}
.avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
.org-avatars {
  padding: 32px 16px;
  display: flex;
  width: calc(60px * 3 + 8px * 2 + 16px);
  box-sizing: content-box;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.org-avatars img {
  border-radius: 16px;
  border: 0.5px solid #aaa;
  overflow: hidden;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
}
.profile-contents .since {
  font-size: 0.8rem;
}
.sponsor {
  margin-left: 8px;
  border: 1px solid #fd1d7c;
  border-radius: 4px;
  padding: 2px 4px 1px;
  font-size: 11px;
  font-weight: 500;
  vertical-align: bottom;
  color: #fd1d7c;
}
.sponsor:hover {
  color: #fff;
  background-color: #fd1d7c;
}
</style>`,frontmatter:{hideInToc:!0,title:"\u81EA\u5DF1\u7D39\u4ECB",srcSequence:"./src/00-intro.md"},note:"prettier-ignore-start",index:1,start:0,end:100,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/00-intro.md",raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

# \u81EA\u5DF1\u7D39\u4ECB

<div grid="~ gap-4" class="profile">

<div class="avatars">
  <img class="avatar" src="https://github.com/ota-meshi.png" alt="ota-meshi">
  <div class="org-avatars">
    <img src="https://github.com/future-architect.png" alt="Future Corp">
    <img src="https://github.com/vuejs.png" alt="Vue.js">
    <img src="https://github.com/stylelint.png" alt="Stylelint">
    <img src="https://github.com/intlify.png" alt="Intlify">
    <img src="https://github.com/stylus.png" alt="Stylus">
  </div>
</div>

<div class="profile-contents">

### \u592A\u7530 \u6D0B\u4ECB

- \u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C  
- GitHub: [@ota-meshi](https://github.com/ota-meshi) <a class="sponsor" href="https://github.com/sponsors/ota-meshi" target="_blank" rel="noopener">\u2661 Sponsor</a> ,
  npm: [ota-meshi](https://www.npmjs.com/~ota-meshi),
  Twitter: [@omoteota](https://twitter.com/omoteota),  
  Qiita: [@ota-meshi](https://qiita.com/ota-meshi)
- \u6240\u5C5E:
  - [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E](https://www.future.co.jp/) \u793E\u54E1 <span class="since">(2015/06 - )</span>
  - [Vue.js](https://vuejs.org/about/team.html) eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )</span>
  - [Stylelint](https://github.com/stylelint) Owners \u30C1\u30FC\u30E0 <span class="since">(2020/09 - )</span>
  - [Intlify](https://github.com/intlify) eslint-plugin-vue-i18n \u62C5\u5F53 <span class="since">(2020/07 - )</span>
  - [Stylus](https://github.com/stylus) \u30C1\u30FC\u30E0 <span class="since">(2022/06 - )</span>
- [WEB+DB PRESS Vol.120] \u300C\u6700\u65B0Vue.js 3\u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 <span class="since">(2020/12/24)</span>
- [Google Open Source Peer Bonus 2022] \u53D7\u8CDE

[WEB+DB PRESS Vol.120]: https://gihyo.jp/magazine/wdpress/archive/2021/vol120
[Google Open Source Peer Bonus 2022]: https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/

</div>
</div>

<style>
.profile {
  grid-template-columns: 0.5fr 1.3fr;
}
.avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
.org-avatars {
  padding: 32px 16px;
  display: flex;
  width: calc(60px * 3 + 8px * 2 + 16px);
  box-sizing: content-box;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.org-avatars img {
  border-radius: 16px;
  border: 0.5px solid #aaa;
  overflow: hidden;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
}
.profile-contents .since {
  font-size: 0.8rem;
}
.sponsor {
  margin-left: 8px;
  border: 1px solid #fd1d7c;
  border-radius: 4px;
  padding: 2px 4px 1px;
  font-size: 11px;
  font-weight: 500;
  vertical-align: bottom;
  color: #fd1d7c;
}
.sponsor:hover {
  color: #fff;
  background-color: #fd1d7c;
}
</style>

<!-- prettier-ignore-start -->
`,title:"\u81EA\u5DF1\u7D39\u4ECB",level:1,content:`<!-- prettier-ignore-end -->

# \u81EA\u5DF1\u7D39\u4ECB

<div grid="~ gap-4" class="profile">

<div class="avatars">
  <img class="avatar" src="https://github.com/ota-meshi.png" alt="ota-meshi">
  <div class="org-avatars">
    <img src="https://github.com/future-architect.png" alt="Future Corp">
    <img src="https://github.com/vuejs.png" alt="Vue.js">
    <img src="https://github.com/stylelint.png" alt="Stylelint">
    <img src="https://github.com/intlify.png" alt="Intlify">
    <img src="https://github.com/stylus.png" alt="Stylus">
  </div>
</div>

<div class="profile-contents">

### \u592A\u7530 \u6D0B\u4ECB

- \u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C  
- GitHub: [@ota-meshi](https://github.com/ota-meshi) <a class="sponsor" href="https://github.com/sponsors/ota-meshi" target="_blank" rel="noopener">\u2661 Sponsor</a> ,
  npm: [ota-meshi](https://www.npmjs.com/~ota-meshi),
  Twitter: [@omoteota](https://twitter.com/omoteota),  
  Qiita: [@ota-meshi](https://qiita.com/ota-meshi)
- \u6240\u5C5E:
  - [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E](https://www.future.co.jp/) \u793E\u54E1 <span class="since">(2015/06 - )</span>
  - [Vue.js](https://vuejs.org/about/team.html) eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )</span>
  - [Stylelint](https://github.com/stylelint) Owners \u30C1\u30FC\u30E0 <span class="since">(2020/09 - )</span>
  - [Intlify](https://github.com/intlify) eslint-plugin-vue-i18n \u62C5\u5F53 <span class="since">(2020/07 - )</span>
  - [Stylus](https://github.com/stylus) \u30C1\u30FC\u30E0 <span class="since">(2022/06 - )</span>
- [WEB+DB PRESS Vol.120] \u300C\u6700\u65B0Vue.js 3\u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 <span class="since">(2020/12/24)</span>
- [Google Open Source Peer Bonus 2022] \u53D7\u8CDE

[WEB+DB PRESS Vol.120]: https://gihyo.jp/magazine/wdpress/archive/2021/vol120
[Google Open Source Peer Bonus 2022]: https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/

</div>
</div>

<style>
.profile {
  grid-template-columns: 0.5fr 1.3fr;
}
.avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
.org-avatars {
  padding: 32px 16px;
  display: flex;
  width: calc(60px * 3 + 8px * 2 + 16px);
  box-sizing: content-box;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.org-avatars img {
  border-radius: 16px;
  border: 0.5px solid #aaa;
  overflow: hidden;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
}
.profile-contents .since {
  font-size: 0.8rem;
}
.sponsor {
  margin-left: 8px;
  border: 1px solid #fd1d7c;
  border-radius: 4px;
  padding: 2px 4px 1px;
  font-size: 11px;
  font-weight: 500;
  vertical-align: bottom;
  color: #fd1d7c;
}
.sponsor:hover {
  color: #fff;
  background-color: #fd1d7c;
}
</style>`,frontmatter:{hideInToc:!0,title:"\u81EA\u5DF1\u7D39\u4ECB"},note:"prettier-ignore-start",index:0,start:0,end:100},inline:{raw:`---
src: ./src/00-intro.md
---
`,content:"",frontmatter:{},index:1,start:79,end:83},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/00-intro.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:A1,meta:{hideInToc:!0,srcSequence:"./src/00-intro.md",slide:{raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />
`,title:"\u30A2\u30B8\u30A7\u30F3\u30C0",level:1,content:`<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />`,frontmatter:{hideInToc:!0,srcSequence:"./src/00-intro.md"},index:2,start:100,end:110,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/00-intro.md",raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />
`,title:"\u30A2\u30B8\u30A7\u30F3\u30C0",level:1,content:`<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />`,frontmatter:{hideInToc:!0},index:1,start:100,end:110},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/00-intro.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:E1,meta:{layout:"center",class:"text-center big-title",title:"What is &lt;script setup&gt;?",srcSequence:"./src/01-script-setup.md",slide:{raw:null,title:"What is &lt;script setup&gt;?",level:1,content:`<!-- prettier-ignore-end -->

# What is &lt;script setup&gt;\uFF1F\u{1F914}`,frontmatter:{layout:"center",class:"text-center big-title",title:"What is &lt;script setup&gt;?",srcSequence:"./src/01-script-setup.md"},note:"prettier-ignore-start",index:3,start:0,end:12,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/01-script-setup.md",raw:`---
layout: center
class: text-center big-title
title: "What is &lt;script setup&gt;?"
---

<!-- prettier-ignore-end -->

# What is &lt;script setup&gt;\uFF1F\u{1F914}

<!-- prettier-ignore-start -->
`,title:"What is &lt;script setup&gt;?",level:1,content:`<!-- prettier-ignore-end -->

# What is &lt;script setup&gt;\uFF1F\u{1F914}`,frontmatter:{layout:"center",class:"text-center big-title",title:"What is &lt;script setup&gt;?"},note:"prettier-ignore-start",index:0,start:0,end:12},inline:{raw:`---
src: ./src/01-script-setup.md
---
`,content:"",frontmatter:{},index:2,start:83,end:87},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/01-script-setup.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:O1,meta:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/01-script-setup.md",slide:{raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is &lt;script setup&gt;\uFF1F

::left::

- Vue3.2 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165\u3055\u308C\u305F SFC \u7528\u306E\u65B0\u69CB\u6587  
  **7/1\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\u3002**

  - **\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - **\u5B9F\u884C\u6642\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A**  
    \uFF08\u4ED6\u306E\u8A18\u8FF0\u65B9\u6CD5\u304B\u3089\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u306F\u5FC5\u8981\u3060\u3063\u305F\u4E2D\u9593\u51E6\u7406\u3092\u30D0\u30A4\u30D1\u30B9\uFF09
  - **TypeScript \u3068\u306E\u89AA\u548C\u6027\u5411\u4E0A**  
     \uFF08\u578B\u60C5\u5831\u306B\u3088\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5B9A\u7FA9\u306E\u751F\u6210\u3002IDE \u306E\u30B5\u30DD\u30FC\u30C8\uFF09

::right::

\`\`\`vue
<script setup>
import { ref } from "vue";
import MyComponent from "./MyComponent.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\`
`,title:"What is &lt;script setup&gt;\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is &lt;script setup&gt;\uFF1F

::left::

- Vue3.2 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165\u3055\u308C\u305F SFC \u7528\u306E\u65B0\u69CB\u6587  
  **7/1\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\u3002**

  - **\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - **\u5B9F\u884C\u6642\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A**  
    \uFF08\u4ED6\u306E\u8A18\u8FF0\u65B9\u6CD5\u304B\u3089\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u306F\u5FC5\u8981\u3060\u3063\u305F\u4E2D\u9593\u51E6\u7406\u3092\u30D0\u30A4\u30D1\u30B9\uFF09
  - **TypeScript \u3068\u306E\u89AA\u548C\u6027\u5411\u4E0A**  
     \uFF08\u578B\u60C5\u5831\u306B\u3088\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5B9A\u7FA9\u306E\u751F\u6210\u3002IDE \u306E\u30B5\u30DD\u30FC\u30C8\uFF09

::right::

\`\`\`vue
<script setup>
import { ref } from "vue";
import MyComponent from "./MyComponent.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/01-script-setup.md"},index:4,start:12,end:55,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/01-script-setup.md",raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is &lt;script setup&gt;\uFF1F

::left::

- Vue3.2 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165\u3055\u308C\u305F SFC \u7528\u306E\u65B0\u69CB\u6587  
  **7/1\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\u3002**

  - **\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - **\u5B9F\u884C\u6642\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A**  
    \uFF08\u4ED6\u306E\u8A18\u8FF0\u65B9\u6CD5\u304B\u3089\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u306F\u5FC5\u8981\u3060\u3063\u305F\u4E2D\u9593\u51E6\u7406\u3092\u30D0\u30A4\u30D1\u30B9\uFF09
  - **TypeScript \u3068\u306E\u89AA\u548C\u6027\u5411\u4E0A**  
     \uFF08\u578B\u60C5\u5831\u306B\u3088\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5B9A\u7FA9\u306E\u751F\u6210\u3002IDE \u306E\u30B5\u30DD\u30FC\u30C8\uFF09

::right::

\`\`\`vue
<script setup>
import { ref } from "vue";
import MyComponent from "./MyComponent.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\`
`,title:"What is &lt;script setup&gt;\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is &lt;script setup&gt;\uFF1F

::left::

- Vue3.2 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165\u3055\u308C\u305F SFC \u7528\u306E\u65B0\u69CB\u6587  
  **7/1\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\u3002**

  - **\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - **\u5B9F\u884C\u6642\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A**  
    \uFF08\u4ED6\u306E\u8A18\u8FF0\u65B9\u6CD5\u304B\u3089\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u306F\u5FC5\u8981\u3060\u3063\u305F\u4E2D\u9593\u51E6\u7406\u3092\u30D0\u30A4\u30D1\u30B9\uFF09
  - **TypeScript \u3068\u306E\u89AA\u548C\u6027\u5411\u4E0A**  
     \uFF08\u578B\u60C5\u5831\u306B\u3088\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5B9A\u7FA9\u306E\u751F\u6210\u3002IDE \u306E\u30B5\u30DD\u30FC\u30C8\uFF09

::right::

\`\`\`vue
<script setup>
import { ref } from "vue";
import MyComponent from "./MyComponent.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0},index:1,start:12,end:55},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/01-script-setup.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:M1,meta:{layout:"center",class:"text-center big-title",title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9",srcSequence:"./src/02-syntaxes.md",slide:{raw:null,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9",level:1,content:`<!-- prettier-ignore-end -->

# &lt;script setup&gt;\u306E\u66F8\u304D\u65B9`,frontmatter:{layout:"center",class:"text-center big-title",title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9",srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:5,start:0,end:11,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: center
class: text-center big-title
---

<!-- prettier-ignore-end -->

# &lt;script setup&gt;\u306E\u66F8\u304D\u65B9

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9",level:1,content:`<!-- prettier-ignore-end -->

# &lt;script setup&gt;\u306E\u66F8\u304D\u65B9`,frontmatter:{layout:"center",class:"text-center big-title",title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9"},note:"prettier-ignore-start",index:0,start:0,end:11},inline:{raw:`---
src: ./src/02-syntaxes.md
---
`,content:"",frontmatter:{},index:3,start:87,end:91},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:fB,meta:{layout:"sub-two-cols",title:"\u57FA\u672C",level:2,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
title: \u57FA\u672C
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

::left::

- &lt;script setup&gt; \u3068\u8A18\u8FF0\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059

::right::

<!-- prettier-ignore-start -->

\`\`\`vue {all|1|2,4,11-12}
<script setup>
const msg = "Hello!";

function handleClick() {
  alert(msg);
}
<\/script>

<template>
  <button
    @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

<!-- prettier-ignore-end -->

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNpNkMFOwzAMhl/F+LRJrLmXDoG48BC+dCEbHYkTxS4cqr47bjtNyym/7f/L70z4XkrzOwZssRNfh6IgQcfySuwzi0KSCxyB8DPEmJ8IX4iJzyN7HTLDd89fMXzEwf/s9jARA/QxVN2ZbW+jM3HnNq4RTWhIJfYaTAF0p1E1WxnsvPmFciR8YBKucwDTtAaZjWc2t/ms17k7EJ9xSCVXPaS+NFfJbDutiejWEMJ2y7jUbOlF23uqRVrn5OyXn7hKk+vF2a2pI+uQQhMkHU41/0moBiZcEJZkxvkfPmpuLQ==)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`<script>\` \u30D6\u30ED\u30C3\u30AF\u306B \`setup\` \u5C5E\u6027\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"\u57FA\u672C",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

::left::

- &lt;script setup&gt; \u3068\u8A18\u8FF0\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059

::right::

<!-- prettier-ignore-start -->

\`\`\`vue {all|1|2,4,11-12}
<script setup>
const msg = "Hello!";

function handleClick() {
  alert(msg);
}
<\/script>

<template>
  <button
    @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

<!-- prettier-ignore-end -->

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNpNkMFOwzAMhl/F+LRJrLmXDoG48BC+dCEbHYkTxS4cqr47bjtNyym/7f/L70z4XkrzOwZssRNfh6IgQcfySuwzi0KSCxyB8DPEmJ8IX4iJzyN7HTLDd89fMXzEwf/s9jARA/QxVN2ZbW+jM3HnNq4RTWhIJfYaTAF0p1E1WxnsvPmFciR8YBKucwDTtAaZjWc2t/ms17k7EJ9xSCVXPaS+NFfJbDutiejWEMJ2y7jUbOlF23uqRVrn5OyXn7hKk+vF2a2pI+uQQhMkHU41/0moBiZcEJZkxvkfPmpuLQ==)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`<script>\` \u30D6\u30ED\u30C3\u30AF\u306B \`setup\` \u5C5E\u6027\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"\u57FA\u672C",level:2,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:6,start:11,end:67,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
title: \u57FA\u672C
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

::left::

- &lt;script setup&gt; \u3068\u8A18\u8FF0\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059

::right::

<!-- prettier-ignore-start -->

\`\`\`vue {all|1|2,4,11-12}
<script setup>
const msg = "Hello!";

function handleClick() {
  alert(msg);
}
<\/script>

<template>
  <button
    @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

<!-- prettier-ignore-end -->

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNpNkMFOwzAMhl/F+LRJrLmXDoG48BC+dCEbHYkTxS4cqr47bjtNyym/7f/L70z4XkrzOwZssRNfh6IgQcfySuwzi0KSCxyB8DPEmJ8IX4iJzyN7HTLDd89fMXzEwf/s9jARA/QxVN2ZbW+jM3HnNq4RTWhIJfYaTAF0p1E1WxnsvPmFciR8YBKucwDTtAaZjWc2t/ms17k7EJ9xSCVXPaS+NFfJbDutiejWEMJ2y7jUbOlF23uqRVrn5OyXn7hKk+vF2a2pI+uQQhMkHU41/0moBiZcEJZkxvkfPmpuLQ==)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`<script>\` \u30D6\u30ED\u30C3\u30AF\u306B \`setup\` \u5C5E\u6027\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"\u57FA\u672C",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

::left::

- &lt;script setup&gt; \u3068\u8A18\u8FF0\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059

::right::

<!-- prettier-ignore-start -->

\`\`\`vue {all|1|2,4,11-12}
<script setup>
const msg = "Hello!";

function handleClick() {
  alert(msg);
}
<\/script>

<template>
  <button
    @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

<!-- prettier-ignore-end -->

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNpNkMFOwzAMhl/F+LRJrLmXDoG48BC+dCEbHYkTxS4cqr47bjtNyym/7f/L70z4XkrzOwZssRNfh6IgQcfySuwzi0KSCxyB8DPEmJ8IX4iJzyN7HTLDd89fMXzEwf/s9jARA/QxVN2ZbW+jM3HnNq4RTWhIJfYaTAF0p1E1WxnsvPmFciR8YBKucwDTtAaZjWc2t/ms17k7EJ9xSCVXPaS+NFfJbDutiejWEMJ2y7jUbOlF23uqRVrn5OyXn7hKk+vF2a2pI+uQQhMkHU41/0moBiZcEJZkxvkfPmpuLQ==)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`<script>\` \u30D6\u30ED\u30C3\u30AF\u306B \`setup\` \u5C5E\u6027\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"\u57FA\u672C",level:2},note:"prettier-ignore-start",index:1,start:11,end:67},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:BB,meta:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
export default {
  setup() {
    const msg = "Hello!";
    function handleClick() {
      alert(msg);
    }
    return {
      msg,
      handleClick,
    };
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  data() {
    return {
      msg: "Hello!",
    };
  },
  methods: {
    handleClick() {
      alert(this.msg);
    },
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
export default {
  setup() {
    const msg = "Hello!";
    function handleClick() {
      alert(msg);
    }
    return {
      msg,
      handleClick,
    };
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  data() {
    return {
      msg: "Hello!",
    };
  },
  methods: {
    handleClick() {
      alert(this.msg);
    },
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:7,start:67,end:134,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
export default {
  setup() {
    const msg = "Hello!";
    function handleClick() {
      alert(msg);
    }
    return {
      msg,
      handleClick,
    };
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  data() {
    return {
      msg: "Hello!",
    };
  },
  methods: {
    handleClick() {
      alert(this.msg);
    },
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u57FA\u672C\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
export default {
  setup() {
    const msg = "Hello!";
    function handleClick() {
      alert(msg);
    }
    return {
      msg,
      handleClick,
    };
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  data() {
    return {
      msg: "Hello!",
    };
  },
  methods: {
    handleClick() {
      alert(this.msg);
    },
  },
};
<\/script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0},note:"prettier-ignore-start",index:2,start:67,end:134},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:OB,meta:{layout:"sub-two-cols",title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:2,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
title: \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

::left::

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059  
  \uFF08\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u3068\u540C\u3058\u6271\u3044\u3067\u3059\uFF09

::right::

\`\`\`vue {all|2,5,8|3,13}
<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqNUttO3DAQ/ZWR+0BWbBKqogq5AfWiPvYP/JK1J4shsS3b2YKi/HvHTlgtFAEPljy343PmeGI/nKsOIzLOmiC9dhECxtHdCKMHZ32ECTx2MEPn7QCCUa9g347VP48/xxiteSpX9VMmoeZOYaQ1IYK0o4lwneCKi00udKORUdP0bWtUj796Le+LDUzCwNJeHdp+xPNz6p6FaeqFIpGjIOLg+jYiRQDNkch3mVCuBTvBFCw3AUzTSmMmOJo6sqV6Ux8R2ZYt+sqhddVdsIb2k1mJtRAE4wvPlMtSOV1uY3SB13XoZNJ/Fyrr9zXdKk+v6gErDEO58/ZvQE/Agm1PMGpKHtCXHo1Cj/4tzBet/+EmWNI4k5RTR176DH1r9rSsJCjvaPEKB52sUthpg78pCM0EBXI4y9s923A4WK1gvik2eS10XjUTVzchQxbr+BYwj73j6e4DjjahtxHqZaBeJp6bmYFDfOwRgrQOVe5dsVdyu1be7z39DFVK21vP4dPVTn65bOnj5br1tGYOF8/i0rdKj4HDpXtYC65VSps9hyv3AJ+/rvlFZ6JAb7P5H+rELoY=)

</div>
<div v-if="$slidev.nav.clicks === 1">

\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

::left::

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059  
  \uFF08\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u3068\u540C\u3058\u6271\u3044\u3067\u3059\uFF09

::right::

\`\`\`vue {all|2,5,8|3,13}
<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqNUttO3DAQ/ZWR+0BWbBKqogq5AfWiPvYP/JK1J4shsS3b2YKi/HvHTlgtFAEPljy343PmeGI/nKsOIzLOmiC9dhECxtHdCKMHZ32ECTx2MEPn7QCCUa9g347VP48/xxiteSpX9VMmoeZOYaQ1IYK0o4lwneCKi00udKORUdP0bWtUj796Le+LDUzCwNJeHdp+xPNz6p6FaeqFIpGjIOLg+jYiRQDNkch3mVCuBTvBFCw3AUzTSmMmOJo6sqV6Ux8R2ZYt+sqhddVdsIb2k1mJtRAE4wvPlMtSOV1uY3SB13XoZNJ/Fyrr9zXdKk+v6gErDEO58/ZvQE/Agm1PMGpKHtCXHo1Cj/4tzBet/+EmWNI4k5RTR176DH1r9rSsJCjvaPEKB52sUthpg78pCM0EBXI4y9s923A4WK1gvik2eS10XjUTVzchQxbr+BYwj73j6e4DjjahtxHqZaBeJp6bmYFDfOwRgrQOVe5dsVdyu1be7z39DFVK21vP4dPVTn65bOnj5br1tGYOF8/i0rdKj4HDpXtYC65VSps9hyv3AJ+/rvlFZ6JAb7P5H+rELoY=)

</div>
<div v-if="$slidev.nav.clicks === 1">

\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:2,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:8,start:134,end:189,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
title: \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

::left::

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059  
  \uFF08\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u3068\u540C\u3058\u6271\u3044\u3067\u3059\uFF09

::right::

\`\`\`vue {all|2,5,8|3,13}
<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqNUttO3DAQ/ZWR+0BWbBKqogq5AfWiPvYP/JK1J4shsS3b2YKi/HvHTlgtFAEPljy343PmeGI/nKsOIzLOmiC9dhECxtHdCKMHZ32ECTx2MEPn7QCCUa9g347VP48/xxiteSpX9VMmoeZOYaQ1IYK0o4lwneCKi00udKORUdP0bWtUj796Le+LDUzCwNJeHdp+xPNz6p6FaeqFIpGjIOLg+jYiRQDNkch3mVCuBTvBFCw3AUzTSmMmOJo6sqV6Ux8R2ZYt+sqhddVdsIb2k1mJtRAE4wvPlMtSOV1uY3SB13XoZNJ/Fyrr9zXdKk+v6gErDEO58/ZvQE/Agm1PMGpKHtCXHo1Cj/4tzBet/+EmWNI4k5RTR176DH1r9rSsJCjvaPEKB52sUthpg78pCM0EBXI4y9s923A4WK1gvik2eS10XjUTVzchQxbr+BYwj73j6e4DjjahtxHqZaBeJp6bmYFDfOwRgrQOVe5dsVdyu1be7z39DFVK21vP4dPVTn65bOnj5br1tGYOF8/i0rdKj4HDpXtYC65VSps9hyv3AJ+/rvlFZ6JAb7P5H+rELoY=)

</div>
<div v-if="$slidev.nav.clicks === 1">

\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

::left::

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059  
  \uFF08\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u5909\u6570\u3068\u540C\u3058\u6271\u3044\u3067\u3059\uFF09

::right::

\`\`\`vue {all|2,5,8|3,13}
<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqNUttO3DAQ/ZWR+0BWbBKqogq5AfWiPvYP/JK1J4shsS3b2YKi/HvHTlgtFAEPljy343PmeGI/nKsOIzLOmiC9dhECxtHdCKMHZ32ECTx2MEPn7QCCUa9g347VP48/xxiteSpX9VMmoeZOYaQ1IYK0o4lwneCKi00udKORUdP0bWtUj796Le+LDUzCwNJeHdp+xPNz6p6FaeqFIpGjIOLg+jYiRQDNkch3mVCuBTvBFCw3AUzTSmMmOJo6sqV6Ux8R2ZYt+sqhddVdsIb2k1mJtRAE4wvPlMtSOV1uY3SB13XoZNJ/Fyrr9zXdKk+v6gErDEO58/ZvQE/Agm1PMGpKHtCXHo1Cj/4tzBet/+EmWNI4k5RTR176DH1r9rSsJCjvaPEKB52sUthpg78pCM0EBXI4y9s923A4WK1gvik2eS10XjUTVzchQxbr+BYwj73j6e4DjjahtxHqZaBeJp6bmYFDfOwRgrQOVe5dsVdyu1be7z39DFVK21vP4dPVTn65bOnj5br1tGYOF8/i0rdKj4HDpXtYC65VSps9hyv3AJ+/rvlFZ6JAb7P5H+rELoY=)

</div>
<div v-if="$slidev.nav.clicks === 1">

\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F[Reactivity API](https://vuejs.org/api/reactivity-core.html)\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\`import\`\u3059\u308B\u3060\u3051\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:2},note:"prettier-ignore-start",index:3,start:134,end:189},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:jB,meta:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  setup() {
    const count = ref(0);
    function handleClick() {
      count.value++;
    }
    return {
      count,
      handleClick,
    };
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  setup() {
    const count = ref(0);
    function handleClick() {
      count.value++;
    }
    return {
      count,
      handleClick,
    };
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:9,start:189,end:272,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  setup() {
    const count = ref(0);
    function handleClick() {
      count.value++;
    }
    return {
      count,
      handleClick,
    };
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  setup() {
    const count = ref(0);
    function handleClick() {
      count.value++;
    }
    return {
      count,
      handleClick,
    };
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
};
<\/script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",hideInToc:!0},note:"prettier-ignore-start",index:4,start:189,end:272},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:GB,meta:{layout:"sub-two-cols",title:"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F",level:2,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
title: \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

::left::

- \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
  <span style="opacity: 0.7">(Vue2\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093)</span>

::right::

\`\`\`vue {all|2,7|3}
<script setup>
import vMyDirective from "./my-directive.js";
const post = await fetch(\`/api/post/1\`).then((r) => r.json());
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 1">

\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u540D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

::left::

- \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
  <span style="opacity: 0.7">(Vue2\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093)</span>

::right::

\`\`\`vue {all|2,7|3}
<script setup>
import vMyDirective from "./my-directive.js";
const post = await fetch(\`/api/post/1\`).then((r) => r.json());
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 1">

\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u540D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F",level:2,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:10,start:272,end:316,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
title: \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

::left::

- \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
  <span style="opacity: 0.7">(Vue2\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093)</span>

::right::

\`\`\`vue {all|2,7|3}
<script setup>
import vMyDirective from "./my-directive.js";
const post = await fetch(\`/api/post/1\`).then((r) => r.json());
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 1">

\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u540D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

::left::

- \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
  <span style="opacity: 0.7">(Vue2\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093)</span>

::right::

\`\`\`vue {all|2,7|3}
<script setup>
import vMyDirective from "./my-directive.js";
const post = await fetch(\`/api/post/1\`).then((r) => r.json());
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 1">

\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\`v\`\u3067\u59CB\u307E\u308B\u5909\u6570\u540D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\`await\` \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F",level:2},note:"prettier-ignore-start",index:5,start:272,end:316},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:sA,meta:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  async setup() {
    const post = await fetch(\`/api/post/1\`).then((r) => r.json());
    return {
      post,
    };
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  data() {
    return {
      post: "", // \u975E\u540C\u671F\u306F\u30B9\u30DE\u30FC\u30C8\u306A\u66F8\u304D\u65B9\u304C\u3067\u304D\u306A\u3044
    };
  },
  async mounted() {
    this.post = await fetch(\`/api/post/1\`).then((r) => r.json());
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  async setup() {
    const post = await fetch(\`/api/post/1\`).then((r) => r.json());
    return {
      post,
    };
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  data() {
    return {
      post: "", // \u975E\u540C\u671F\u306F\u30B9\u30DE\u30FC\u30C8\u306A\u66F8\u304D\u65B9\u304C\u3067\u304D\u306A\u3044
    };
  },
  async mounted() {
    this.post = await fetch(\`/api/post/1\`).then((r) => r.json());
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:11,start:316,end:385,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  async setup() {
    const post = await fetch(\`/api/post/1\`).then((r) => r.json());
    return {
      post,
    };
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  data() {
    return {
      post: "", // \u975E\u540C\u671F\u306F\u30B9\u30DE\u30FC\u30C8\u306A\u66F8\u304D\u65B9\u304C\u3067\u304D\u306A\u3044
    };
  },
  async mounted() {
    this.post = await fetch(\`/api/post/1\`).then((r) => r.json());
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u30FB\u975E\u540C\u671F\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  async setup() {
    const post = await fetch(\`/api/post/1\`).then((r) => r.json());
    return {
      post,
    };
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  data() {
    return {
      post: "", // \u975E\u540C\u671F\u306F\u30B9\u30DE\u30FC\u30C8\u306A\u66F8\u304D\u65B9\u304C\u3067\u304D\u306A\u3044
    };
  },
  async mounted() {
    this.post = await fetch(\`/api/post/1\`).then((r) => r.json());
  },
};
<\/script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0},note:"prettier-ignore-start",index:6,start:316,end:385},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:vA,meta:{layout:"sub-two-cols",title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8",level:2,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
title: Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

::left::

- Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059

::right::

\`\`\`vue {all|3-5,13,18|6,10,13}
<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue", "send"]);
const inputRef = ref();

function handleInput() {
  emit("update:modelValue", inputRef.value.value);
}
function handleClick() {
  emit("send", props.modelValue);
}
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqVUsFu2zAM/RVClzhYYt+9tMhQ7LDDgGEFdpl2cG26VWdLgiSnKAz/e0kpdtIULdCLLVHk4+PjG8U3a/PDgKIUO187ZQN4DIO9llr11rgAIzhsYYLWmR6koFwpvi6vP59vDJ006jBn5MVZkLFjPoDUtdE+QG8a7OCKYbPVai211O2g66CMhodKNx3eom6yQ9UNuIaRS6sOXUgR+AIreKo80SR0Lp+k3hWJO7GmS8DedlVAugHszhketrH5lRTxLwXsCaah+6mxFEUqvHOv/uMYa6bYbmkhNiIpse0rmz96o0nJyFkeH7wUZZqCY1GOkg4PIVhfFoVva9bo0efG3Rd0yt2gg+oxR99v75x58ugIWIrNGUZBwQO6rSPC6NB9hHmR+gaXYWmoiUa5WNynTZEWbJ2xnhbcYKs0/uJbFgWIAv7hLZZwG5zS9zTTtF4KsVdhqftOF5/9lWKwDSldnopJCurJi5Pi36laaTuE30QrWYsf3jjrB+dkR1dxu+wd/Bksj6ZLX0YkoS4gbzpV/7+ATNw2SYn8hHxE+MiusTEPQKacSZBPy8hgNu6RJuxjxmLfOB2FZwMPIRDNfc0Ml6TIV4pr5rgrUg7ln3t6egGz7nCT)

</div>
<div v-if="$slidev.nav.clicks === 1">

Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>

<style>
  .sub-two-cols :deep(.sub-two-cols__right) {
    transform: scale(0.95);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->
`,title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

::left::

- Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059

::right::

\`\`\`vue {all|3-5,13,18|6,10,13}
<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue", "send"]);
const inputRef = ref();

function handleInput() {
  emit("update:modelValue", inputRef.value.value);
}
function handleClick() {
  emit("send", props.modelValue);
}
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqVUsFu2zAM/RVClzhYYt+9tMhQ7LDDgGEFdpl2cG26VWdLgiSnKAz/e0kpdtIULdCLLVHk4+PjG8U3a/PDgKIUO187ZQN4DIO9llr11rgAIzhsYYLWmR6koFwpvi6vP59vDJ006jBn5MVZkLFjPoDUtdE+QG8a7OCKYbPVai211O2g66CMhodKNx3eom6yQ9UNuIaRS6sOXUgR+AIreKo80SR0Lp+k3hWJO7GmS8DedlVAugHszhketrH5lRTxLwXsCaah+6mxFEUqvHOv/uMYa6bYbmkhNiIpse0rmz96o0nJyFkeH7wUZZqCY1GOkg4PIVhfFoVva9bo0efG3Rd0yt2gg+oxR99v75x58ugIWIrNGUZBwQO6rSPC6NB9hHmR+gaXYWmoiUa5WNynTZEWbJ2xnhbcYKs0/uJbFgWIAv7hLZZwG5zS9zTTtF4KsVdhqftOF5/9lWKwDSldnopJCurJi5Pi36laaTuE30QrWYsf3jjrB+dkR1dxu+wd/Bksj6ZLX0YkoS4gbzpV/7+ATNw2SYn8hHxE+MiusTEPQKacSZBPy8hgNu6RJuxjxmLfOB2FZwMPIRDNfc0Ml6TIV4pr5rgrUg7ln3t6egGz7nCT)

</div>
<div v-if="$slidev.nav.clicks === 1">

Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>

<style>
  .sub-two-cols :deep(.sub-two-cols__right) {
    transform: scale(0.95);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8",level:2,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:12,start:385,end:450,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
title: Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

::left::

- Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059

::right::

\`\`\`vue {all|3-5,13,18|6,10,13}
<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue", "send"]);
const inputRef = ref();

function handleInput() {
  emit("update:modelValue", inputRef.value.value);
}
function handleClick() {
  emit("send", props.modelValue);
}
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqVUsFu2zAM/RVClzhYYt+9tMhQ7LDDgGEFdpl2cG26VWdLgiSnKAz/e0kpdtIULdCLLVHk4+PjG8U3a/PDgKIUO187ZQN4DIO9llr11rgAIzhsYYLWmR6koFwpvi6vP59vDJ006jBn5MVZkLFjPoDUtdE+QG8a7OCKYbPVai211O2g66CMhodKNx3eom6yQ9UNuIaRS6sOXUgR+AIreKo80SR0Lp+k3hWJO7GmS8DedlVAugHszhketrH5lRTxLwXsCaah+6mxFEUqvHOv/uMYa6bYbmkhNiIpse0rmz96o0nJyFkeH7wUZZqCY1GOkg4PIVhfFoVva9bo0efG3Rd0yt2gg+oxR99v75x58ugIWIrNGUZBwQO6rSPC6NB9hHmR+gaXYWmoiUa5WNynTZEWbJ2xnhbcYKs0/uJbFgWIAv7hLZZwG5zS9zTTtF4KsVdhqftOF5/9lWKwDSldnopJCurJi5Pi36laaTuE30QrWYsf3jjrB+dkR1dxu+wd/Bksj6ZLX0YkoS4gbzpV/7+ATNw2SYn8hHxE+MiusTEPQKacSZBPy8hgNu6RJuxjxmLfOB2FZwMPIRDNfc0Ml6TIV4pr5rgrUg7ln3t6egGz7nCT)

</div>
<div v-if="$slidev.nav.clicks === 1">

Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>

<style>
  .sub-two-cols :deep(.sub-two-cols__right) {
    transform: scale(0.95);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->
`,title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

::left::

- Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059
- \u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059

::right::

\`\`\`vue {all|3-5,13,18|6,10,13}
<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue", "send"]);
const inputRef = ref();

function handleInput() {
  emit("update:modelValue", inputRef.value.value);
}
function handleClick() {
  emit("send", props.modelValue);
}
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqVUsFu2zAM/RVClzhYYt+9tMhQ7LDDgGEFdpl2cG26VWdLgiSnKAz/e0kpdtIULdCLLVHk4+PjG8U3a/PDgKIUO187ZQN4DIO9llr11rgAIzhsYYLWmR6koFwpvi6vP59vDJ006jBn5MVZkLFjPoDUtdE+QG8a7OCKYbPVai211O2g66CMhodKNx3eom6yQ9UNuIaRS6sOXUgR+AIreKo80SR0Lp+k3hWJO7GmS8DedlVAugHszhketrH5lRTxLwXsCaah+6mxFEUqvHOv/uMYa6bYbmkhNiIpse0rmz96o0nJyFkeH7wUZZqCY1GOkg4PIVhfFoVva9bo0efG3Rd0yt2gg+oxR99v75x58ugIWIrNGUZBwQO6rSPC6NB9hHmR+gaXYWmoiUa5WNynTZEWbJ2xnhbcYKs0/uJbFgWIAv7hLZZwG5zS9zTTtF4KsVdhqftOF5/9lWKwDSldnopJCurJi5Pi36laaTuE30QrWYsf3jjrB+dkR1dxu+wd/Bksj6ZLX0YkoS4gbzpV/7+ATNw2SYn8hHxE+MiusTEPQKacSZBPy8hgNu6RJuxjxmLfOB2FZwMPIRDNfc0Ml6TIV4pr5rgrUg7ln3t6egGz7nCT)

</div>
<div v-if="$slidev.nav.clicks === 1">

Props \u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineProps\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5B9A\u7FA9\u30FB\u4F7F\u7528\u3059\u308B\u306B\u306F \`defineEmits\` \u3068\u3044\u3046\u30B3\u30F3\u30D1\u30A4\u30E9\u30DE\u30AF\u30ED\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

</div>

<style>
  .sub-two-cols :deep(.sub-two-cols__right) {
    transform: scale(0.95);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8",level:2},note:"prettier-ignore-start",index:7,start:385,end:450},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:DA,meta:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";

export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  setup(props, { emit }) {
    const inputRef = ref();

    function handleInput() {
      emit("update:modelValue", inputRef.value.value);
    }
    function handleClick() {
      emit("send", props.modelValue);
    }
    return {
      inputRef,
      handleInput,
      handleClick,
    };
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  methods: {
    handleInput() {
      this.$emit("update:modelValue", this.$refs.inputRef.value);
    },
    handleClick() {
      this.$emit("send", this.modelValue);
    },
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.7);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";

export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  setup(props, { emit }) {
    const inputRef = ref();

    function handleInput() {
      emit("update:modelValue", inputRef.value.value);
    }
    function handleClick() {
      emit("send", props.modelValue);
    }
    return {
      inputRef,
      handleInput,
      handleClick,
    };
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  methods: {
    handleInput() {
      this.$emit("update:modelValue", this.$refs.inputRef.value);
    },
    handleClick() {
      this.$emit("send", this.modelValue);
    },
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.7);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:13,start:450,end:535,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";

export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  setup(props, { emit }) {
    const inputRef = ref();

    function handleInput() {
      emit("update:modelValue", inputRef.value.value);
    }
    function handleClick() {
      emit("send", props.modelValue);
    }
    return {
      inputRef,
      handleInput,
      handleClick,
    };
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  methods: {
    handleInput() {
      this.$emit("update:modelValue", this.$refs.inputRef.value);
    },
    handleClick() {
      this.$emit("send", this.modelValue);
    },
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.7);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8\uFF09

\u5225\u306E\u65B9\u6CD5\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

::left::

### Composition API

\`\`\`vue
<script>
import { ref } from "vue";

export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  setup(props, { emit }) {
    const inputRef = ref();

    function handleInput() {
      emit("update:modelValue", inputRef.value.value);
    }
    function handleClick() {
      emit("send", props.modelValue);
    }
    return {
      inputRef,
      handleInput,
      handleClick,
    };
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

::right::

### Options API

\`\`\`vue
<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  methods: {
    handleInput() {
      this.$emit("update:modelValue", this.$refs.inputRef.value);
    },
    handleClick() {
      this.$emit("send", this.modelValue);
    },
  },
};
<\/script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.7);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",hideInToc:!0},note:"prettier-ignore-start",index:8,start:450,end:535},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:zA,meta:{layout:"sub-two-cols",title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript",level:2,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
title: Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

::left::

- \`defineProps\`\u3068\`defineEmits\`\u306F TypeScript \u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u578B\u306E\u307F\u306E\u5B9A\u7FA9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059
  - \`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059
    - \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306B\u306F \`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059
  - \`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059

::right::

\`\`\`vue {all|4-7|6|3,8-10|12-15}
<script setup lang="ts">
// ...
const props = withDefaults(
  defineProps<{
    modelValue: string;
    message?: "Hello!" | "Goodby!";
  }>(),
  {
    message: "Hello!",
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", newValue: string): void;
  (e: "send", sendValue: string): void;
}>();
// ...
<\/script>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqFU01v2zAM/SucLnGwxr57aZehG7YdBgwbsJMujk0n7mxJkOQERer/XlKy81W0zSEWpcenR1LvIL4Yk+56FLlYutI2xoND35s7qZrOaOvhABZrGKC2ugMpCCvFp+Ppr8d7TSuFyk+INDvbZO6AB5Cq1Mp56HSFLdwybTKbzaWSqu5V6RutYFuoqsW/qKpkV7Q9zuHAqUWL1scd+Agz2BeOZBI7pw9SLbOonVRT4LEzbeGRIoDlucLdIlx+K0X4SgEroqkoPl0sRRYT1/bieziEnCFcd7xC3IjYiUVXmPTBaUWdDJrleOCkyGMVvBfakdNi671xeZa5uuQePbhU201Gq9T2yjcdpui6xdrqvUNLxFLcnHFktLlDu7AkGC3atzivoC94mZaKGqiUq8FdPwpoC7WhZnFN7z4QqbIMFuOPwzh9Y7VxNP1947dfsS761ruEJVRYNwp/8/FybFdo+D+eeg7O20ZtwkOiA3Su2OBnLvoHtq3+QKN8ouC71tX6kaIAHO6SeejaxBfTzrPCMVU/p4QoELvGk74o5xsFo5wk5PWmorHnJ2VEAQr3FyrnOex0UwUNMY1fGSP5+wqUxY4+uWjcyTiNMr3/Q72O3mH0C+v8ZEwy2oZLSV7RPJGlwVXxnxmpF1eU921T/r+inOoJ00xPzCPDG34kG8UpDMPRYUEL10Rva9JFA82DqMmso3JYBcTRsqFg2p5M23tPylcliz6CQgn0Zln2MosYwp/5WCoxPAOdsbxn)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u5FC5\u9808\u30FB\u4EFB\u610F\u306F\u578B(\`?:\`)\u3067\u793A\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 3">

\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F \`defineProps\`\u306B\u52A0\u3048\u3066\`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 4">

\`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

::left::

- \`defineProps\`\u3068\`defineEmits\`\u306F TypeScript \u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u578B\u306E\u307F\u306E\u5B9A\u7FA9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059
  - \`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059
    - \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306B\u306F \`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059
  - \`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059

::right::

\`\`\`vue {all|4-7|6|3,8-10|12-15}
<script setup lang="ts">
// ...
const props = withDefaults(
  defineProps<{
    modelValue: string;
    message?: "Hello!" | "Goodby!";
  }>(),
  {
    message: "Hello!",
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", newValue: string): void;
  (e: "send", sendValue: string): void;
}>();
// ...
<\/script>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqFU01v2zAM/SucLnGwxr57aZehG7YdBgwbsJMujk0n7mxJkOQERer/XlKy81W0zSEWpcenR1LvIL4Yk+56FLlYutI2xoND35s7qZrOaOvhABZrGKC2ugMpCCvFp+Ppr8d7TSuFyk+INDvbZO6AB5Cq1Mp56HSFLdwybTKbzaWSqu5V6RutYFuoqsW/qKpkV7Q9zuHAqUWL1scd+Agz2BeOZBI7pw9SLbOonVRT4LEzbeGRIoDlucLdIlx+K0X4SgEroqkoPl0sRRYT1/bieziEnCFcd7xC3IjYiUVXmPTBaUWdDJrleOCkyGMVvBfakdNi671xeZa5uuQePbhU201Gq9T2yjcdpui6xdrqvUNLxFLcnHFktLlDu7AkGC3atzivoC94mZaKGqiUq8FdPwpoC7WhZnFN7z4QqbIMFuOPwzh9Y7VxNP1947dfsS761ruEJVRYNwp/8/FybFdo+D+eeg7O20ZtwkOiA3Su2OBnLvoHtq3+QKN8ouC71tX6kaIAHO6SeejaxBfTzrPCMVU/p4QoELvGk74o5xsFo5wk5PWmorHnJ2VEAQr3FyrnOex0UwUNMY1fGSP5+wqUxY4+uWjcyTiNMr3/Q72O3mH0C+v8ZEwy2oZLSV7RPJGlwVXxnxmpF1eU921T/r+inOoJ00xPzCPDG34kG8UpDMPRYUEL10Rva9JFA82DqMmso3JYBcTRsqFg2p5M23tPylcliz6CQgn0Zln2MosYwp/5WCoxPAOdsbxn)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u5FC5\u9808\u30FB\u4EFB\u610F\u306F\u578B(\`?:\`)\u3067\u793A\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 3">

\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F \`defineProps\`\u306B\u52A0\u3048\u3066\`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 4">

\`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript",level:2,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:14,start:535,end:602,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
title: Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

::left::

- \`defineProps\`\u3068\`defineEmits\`\u306F TypeScript \u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u578B\u306E\u307F\u306E\u5B9A\u7FA9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059
  - \`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059
    - \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306B\u306F \`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059
  - \`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059

::right::

\`\`\`vue {all|4-7|6|3,8-10|12-15}
<script setup lang="ts">
// ...
const props = withDefaults(
  defineProps<{
    modelValue: string;
    message?: "Hello!" | "Goodby!";
  }>(),
  {
    message: "Hello!",
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", newValue: string): void;
  (e: "send", sendValue: string): void;
}>();
// ...
<\/script>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqFU01v2zAM/SucLnGwxr57aZehG7YdBgwbsJMujk0n7mxJkOQERer/XlKy81W0zSEWpcenR1LvIL4Yk+56FLlYutI2xoND35s7qZrOaOvhABZrGKC2ugMpCCvFp+Ppr8d7TSuFyk+INDvbZO6AB5Cq1Mp56HSFLdwybTKbzaWSqu5V6RutYFuoqsW/qKpkV7Q9zuHAqUWL1scd+Agz2BeOZBI7pw9SLbOonVRT4LEzbeGRIoDlucLdIlx+K0X4SgEroqkoPl0sRRYT1/bieziEnCFcd7xC3IjYiUVXmPTBaUWdDJrleOCkyGMVvBfakdNi671xeZa5uuQePbhU201Gq9T2yjcdpui6xdrqvUNLxFLcnHFktLlDu7AkGC3atzivoC94mZaKGqiUq8FdPwpoC7WhZnFN7z4QqbIMFuOPwzh9Y7VxNP1947dfsS761ruEJVRYNwp/8/FybFdo+D+eeg7O20ZtwkOiA3Su2OBnLvoHtq3+QKN8ouC71tX6kaIAHO6SeejaxBfTzrPCMVU/p4QoELvGk74o5xsFo5wk5PWmorHnJ2VEAQr3FyrnOex0UwUNMY1fGSP5+wqUxY4+uWjcyTiNMr3/Q72O3mH0C+v8ZEwy2oZLSV7RPJGlwVXxnxmpF1eU921T/r+inOoJ00xPzCPDG34kG8UpDMPRYUEL10Rva9JFA82DqMmso3JYBcTRsqFg2p5M23tPylcliz6CQgn0Zln2MosYwp/5WCoxPAOdsbxn)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u5FC5\u9808\u30FB\u4EFB\u610F\u306F\u578B(\`?:\`)\u3067\u793A\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 3">

\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F \`defineProps\`\u306B\u52A0\u3048\u3066\`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 4">

\`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>

<!-- prettier-ignore-start -->
`,title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

::left::

- \`defineProps\`\u3068\`defineEmits\`\u306F TypeScript \u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u578B\u306E\u307F\u306E\u5B9A\u7FA9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059
  - \`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059
    - \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306B\u306F \`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059
  - \`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059

::right::

\`\`\`vue {all|4-7|6|3,8-10|12-15}
<script setup lang="ts">
// ...
const props = withDefaults(
  defineProps<{
    modelValue: string;
    message?: "Hello!" | "Goodby!";
  }>(),
  {
    message: "Hello!",
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", newValue: string): void;
  (e: "send", sendValue: string): void;
}>();
// ...
<\/script>
\`\`\`

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqFU01v2zAM/SucLnGwxr57aZehG7YdBgwbsJMujk0n7mxJkOQERer/XlKy81W0zSEWpcenR1LvIL4Yk+56FLlYutI2xoND35s7qZrOaOvhABZrGKC2ugMpCCvFp+Ppr8d7TSuFyk+INDvbZO6AB5Cq1Mp56HSFLdwybTKbzaWSqu5V6RutYFuoqsW/qKpkV7Q9zuHAqUWL1scd+Agz2BeOZBI7pw9SLbOonVRT4LEzbeGRIoDlucLdIlx+K0X4SgEroqkoPl0sRRYT1/bieziEnCFcd7xC3IjYiUVXmPTBaUWdDJrleOCkyGMVvBfakdNi671xeZa5uuQePbhU201Gq9T2yjcdpui6xdrqvUNLxFLcnHFktLlDu7AkGC3atzivoC94mZaKGqiUq8FdPwpoC7WhZnFN7z4QqbIMFuOPwzh9Y7VxNP1947dfsS761ruEJVRYNwp/8/FybFdo+D+eeg7O20ZtwkOiA3Su2OBnLvoHtq3+QKN8ouC71tX6kaIAHO6SeejaxBfTzrPCMVU/p4QoELvGk74o5xsFo5wk5PWmorHnJ2VEAQr3FyrnOex0UwUNMY1fGSP5+wqUxY4+uWjcyTiNMr3/Q72O3mH0C+v8ZEwy2oZLSV7RPJGlwVXxnxmpF1eU921T/r+inOoJ00xPzCPDG34kG8UpDMPRYUEL10Rva9JFA82DqMmso3JYBcTRsqFg2p5M23tPylcliz6CQgn0Zln2MosYwp/5WCoxPAOdsbxn)

</div>
<div v-if="$slidev.nav.clicks === 1">

\`defineProps\`\u3067\u306F Prop \u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 2">

\u5FC5\u9808\u30FB\u4EFB\u610F\u306F\u578B(\`?:\`)\u3067\u793A\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 3">

\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F \`defineProps\`\u306B\u52A0\u3048\u3066\`withDefaults\` \u3092\u4F75\u7528\u3057\u307E\u3059\u3002

</div>
<div v-if="$slidev.nav.clicks === 4">

\`defineEmits\`\u3067\u306F\u95A2\u6570\u306E\u578B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002

</div>`,frontmatter:{layout:"sub-two-cols",title:"Prop\u30FB\u30AB\u30B9\u30BF\u30E0\u30A4\u30D9\u30F3\u30C8 with TypeScript",level:2},note:"prettier-ignore-start",index:9,start:535,end:602},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:KA,meta:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

\u578B\u306E\u307F\u5B9A\u7FA9\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

\`\`\`vue
<script setup lang="ts">
// ...
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  message: {
    type: String, // \u30E6\u30CB\u30AA\u30F3\u578B\u306B\u306F\u3067\u304D\u307E\u305B\u3093\u3002
    default: "Hello!",
  },
});
const emit = defineEmits({
  "update:modelValue": (newValue: string) => true,
  send: (sendValue: string) => true,
});
// ...
<\/script>
\`\`\`

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

\u578B\u306E\u307F\u5B9A\u7FA9\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

\`\`\`vue
<script setup lang="ts">
// ...
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  message: {
    type: String, // \u30E6\u30CB\u30AA\u30F3\u578B\u306B\u306F\u3067\u304D\u307E\u305B\u3093\u3002
    default: "Hello!",
  },
});
const emit = defineEmits({
  "update:modelValue": (newValue: string) => true,
  send: (sendValue: string) => true,
});
// ...
<\/script>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/02-syntaxes.md"},note:"prettier-ignore-start",index:15,start:602,end:636,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

\u578B\u306E\u307F\u5B9A\u7FA9\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

\`\`\`vue
<script setup lang="ts">
// ...
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  message: {
    type: String, // \u30E6\u30CB\u30AA\u30F3\u578B\u306B\u306F\u3067\u304D\u307E\u305B\u3093\u3002
    default: "Hello!",
  },
});
const emit = defineEmits({
  "update:modelValue": (newValue: string) => true,
  send: (sendValue: string) => true,
});
// ...
<\/script>
\`\`\`

<!-- prettier-ignore-start -->
`,title:"&lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08with TypeScript\uFF09

\u578B\u306E\u307F\u5B9A\u7FA9\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3044\u307E\u3057\u305F\u3002

\`\`\`vue
<script setup lang="ts">
// ...
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  message: {
    type: String, // \u30E6\u30CB\u30AA\u30F3\u578B\u306B\u306F\u3067\u304D\u307E\u305B\u3093\u3002
    default: "Hello!",
  },
});
const emit = defineEmits({
  "update:modelValue": (newValue: string) => true,
  send: (sendValue: string) => true,
});
// ...
<\/script>
\`\`\``,frontmatter:{layout:"sub-two-cols",hideInToc:!0},note:"prettier-ignore-start",index:10,start:602,end:636},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:t2,meta:{layout:"sub-two-cols",title:"\u305D\u306E\u4ED6",level:2,srcSequence:"./src/02-syntaxes.md",slide:{raw:`---
layout: sub-two-cols
title: \u305D\u306E\u4ED6
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u305D\u306E\u4ED6\uFF09

- [\`defineExpose\`](https://vuejs.org/api/sfc-script-setup.html#defineexpose)\u3092\u4F7F\u7528\u3057\u3066\u5916\u90E8\u304B\u3089\u53C2\u7167\u3067\u304D\u308B\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5B9A\u7FA9\u3057\u307E\u3059
- [\`useSlots\`\u3068\`useAttrs\`](https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs)\u3092\u4F7F\u7528\u3057\u3066\`$slots\`\u3084\`$attrs\`\u306E\u3088\u3046\u306A\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059
- \`<script setup>\`\u3068\u306F\u5225\u306B[\`<script>\`\u30D6\u30ED\u30C3\u30AF](https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script)\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`export default {}\`\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3067\u3001\`inheritAttrs\`\u306A\u3069\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`.vue\`\u304C\`export\`\u3059\u308B\u60C5\u5831\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059

<br />

::left::

\`\`\`vue
<script setup>
import { useSlots, useAttrs } from "vue";

const slots = useSlots();
const attrs = useAttrs();
// ...
<\/script>
\`\`\`

::right::

\`\`\`vue
<script>
// module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B
runSideEffectOnce();

// \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9
export default {
  inheritAttrs: false,
};
<\/script>

<script setup>
// ...
<\/script>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>
`,title:"\u305D\u306E\u4ED6",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u305D\u306E\u4ED6\uFF09

- [\`defineExpose\`](https://vuejs.org/api/sfc-script-setup.html#defineexpose)\u3092\u4F7F\u7528\u3057\u3066\u5916\u90E8\u304B\u3089\u53C2\u7167\u3067\u304D\u308B\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5B9A\u7FA9\u3057\u307E\u3059
- [\`useSlots\`\u3068\`useAttrs\`](https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs)\u3092\u4F7F\u7528\u3057\u3066\`$slots\`\u3084\`$attrs\`\u306E\u3088\u3046\u306A\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059
- \`<script setup>\`\u3068\u306F\u5225\u306B[\`<script>\`\u30D6\u30ED\u30C3\u30AF](https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script)\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`export default {}\`\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3067\u3001\`inheritAttrs\`\u306A\u3069\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`.vue\`\u304C\`export\`\u3059\u308B\u60C5\u5831\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059

<br />

::left::

\`\`\`vue
<script setup>
import { useSlots, useAttrs } from "vue";

const slots = useSlots();
const attrs = useAttrs();
// ...
<\/script>
\`\`\`

::right::

\`\`\`vue
<script>
// module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B
runSideEffectOnce();

// \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9
export default {
  inheritAttrs: false,
};
<\/script>

<script setup>
// ...
<\/script>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",title:"\u305D\u306E\u4ED6",level:2,srcSequence:"./src/02-syntaxes.md"},index:16,start:636,end:692,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",raw:`---
layout: sub-two-cols
title: \u305D\u306E\u4ED6
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u305D\u306E\u4ED6\uFF09

- [\`defineExpose\`](https://vuejs.org/api/sfc-script-setup.html#defineexpose)\u3092\u4F7F\u7528\u3057\u3066\u5916\u90E8\u304B\u3089\u53C2\u7167\u3067\u304D\u308B\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5B9A\u7FA9\u3057\u307E\u3059
- [\`useSlots\`\u3068\`useAttrs\`](https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs)\u3092\u4F7F\u7528\u3057\u3066\`$slots\`\u3084\`$attrs\`\u306E\u3088\u3046\u306A\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059
- \`<script setup>\`\u3068\u306F\u5225\u306B[\`<script>\`\u30D6\u30ED\u30C3\u30AF](https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script)\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`export default {}\`\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3067\u3001\`inheritAttrs\`\u306A\u3069\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`.vue\`\u304C\`export\`\u3059\u308B\u60C5\u5831\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059

<br />

::left::

\`\`\`vue
<script setup>
import { useSlots, useAttrs } from "vue";

const slots = useSlots();
const attrs = useAttrs();
// ...
<\/script>
\`\`\`

::right::

\`\`\`vue
<script>
// module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B
runSideEffectOnce();

// \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9
export default {
  inheritAttrs: false,
};
<\/script>

<script setup>
// ...
<\/script>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>
`,title:"\u305D\u306E\u4ED6",level:2,content:`<!-- prettier-ignore-end -->

## &lt;script setup&gt;\u306E\u66F8\u304D\u65B9\uFF08\u305D\u306E\u4ED6\uFF09

- [\`defineExpose\`](https://vuejs.org/api/sfc-script-setup.html#defineexpose)\u3092\u4F7F\u7528\u3057\u3066\u5916\u90E8\u304B\u3089\u53C2\u7167\u3067\u304D\u308B\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5B9A\u7FA9\u3057\u307E\u3059
- [\`useSlots\`\u3068\`useAttrs\`](https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs)\u3092\u4F7F\u7528\u3057\u3066\`$slots\`\u3084\`$attrs\`\u306E\u3088\u3046\u306A\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059
- \`<script setup>\`\u3068\u306F\u5225\u306B[\`<script>\`\u30D6\u30ED\u30C3\u30AF](https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script)\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`export default {}\`\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3067\u3001\`inheritAttrs\`\u306A\u3069\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - \`.vue\`\u304C\`export\`\u3059\u308B\u60C5\u5831\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059
  - module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059

<br />

::left::

\`\`\`vue
<script setup>
import { useSlots, useAttrs } from "vue";

const slots = useSlots();
const attrs = useAttrs();
// ...
<\/script>
\`\`\`

::right::

\`\`\`vue
<script>
// module \u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u4E00\u5EA6\u3060\u3051\u5B9F\u884C\u3055\u308C\u308B
runSideEffectOnce();

// \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9
export default {
  inheritAttrs: false,
};
<\/script>

<script setup>
// ...
<\/script>
\`\`\`

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>`,frontmatter:{layout:"sub-two-cols",title:"\u305D\u306E\u4ED6",level:2},index:11,start:636,end:692},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/02-syntaxes.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:s2,meta:{layout:"center",class:"text-center big-title",title:"Reactivity Transform",srcSequence:"./src/03-reactive-transform.md",slide:{raw:null,title:"Reactivity Transform",level:1,content:`<!-- prettier-ignore-end -->

# Reactivity Transform`,frontmatter:{layout:"center",class:"text-center big-title",title:"Reactivity Transform",srcSequence:"./src/03-reactive-transform.md"},note:"prettier-ignore-start",index:17,start:0,end:11,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",raw:`---
layout: center
class: text-center big-title
---

<!-- prettier-ignore-end -->

# Reactivity Transform

<!-- prettier-ignore-start -->
`,title:"Reactivity Transform",level:1,content:`<!-- prettier-ignore-end -->

# Reactivity Transform`,frontmatter:{layout:"center",class:"text-center big-title",title:"Reactivity Transform"},note:"prettier-ignore-start",index:0,start:0,end:11},inline:{raw:`---
src: ./src/03-reactive-transform.md
---
`,content:"",frontmatter:{},index:4,start:91,end:95},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:a2,meta:{layout:"sub-two-cols",srcSequence:"./src/03-reactive-transform.md",slide:{raw:`---
layout: sub-two-cols
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

::left::

- Vue3.3 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165**\u4E88\u5B9A**\u306E\u65B0\u69CB\u6587  
  \uFF08Vue3.2 \u3067\u3082\u5B9F\u9A13\u7684\u6A5F\u80FD\u3068\u3057\u3066\u4F7F\u7528\u53EF\u80FD\uFF09

  - **\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6 API \u5468\u308A\u306E\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - SFC \u4EE5\u5916\uFF08JavaScript\u30FBTypeScript\uFF09\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
    (Vite \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408)

::right::

\`\`\`vue
<script setup>
import MyComponent from "./MyComponent.vue";

const count = $ref(0);

function handleClick() {
  count++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\`

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html

<!-- prettier-ignore-start -->
`,title:"What is Reactivity Transform\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

::left::

- Vue3.3 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165**\u4E88\u5B9A**\u306E\u65B0\u69CB\u6587  
  \uFF08Vue3.2 \u3067\u3082\u5B9F\u9A13\u7684\u6A5F\u80FD\u3068\u3057\u3066\u4F7F\u7528\u53EF\u80FD\uFF09

  - **\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6 API \u5468\u308A\u306E\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - SFC \u4EE5\u5916\uFF08JavaScript\u30FBTypeScript\uFF09\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
    (Vite \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408)

::right::

\`\`\`vue
<script setup>
import MyComponent from "./MyComponent.vue";

const count = $ref(0);

function handleClick() {
  count++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\`

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html`,frontmatter:{layout:"sub-two-cols",srcSequence:"./src/03-reactive-transform.md"},note:"prettier-ignore-start",index:18,start:11,end:54,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",raw:`---
layout: sub-two-cols
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

::left::

- Vue3.3 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165**\u4E88\u5B9A**\u306E\u65B0\u69CB\u6587  
  \uFF08Vue3.2 \u3067\u3082\u5B9F\u9A13\u7684\u6A5F\u80FD\u3068\u3057\u3066\u4F7F\u7528\u53EF\u80FD\uFF09

  - **\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6 API \u5468\u308A\u306E\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - SFC \u4EE5\u5916\uFF08JavaScript\u30FBTypeScript\uFF09\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
    (Vite \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408)

::right::

\`\`\`vue
<script setup>
import MyComponent from "./MyComponent.vue";

const count = $ref(0);

function handleClick() {
  count++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\`

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html

<!-- prettier-ignore-start -->
`,title:"What is Reactivity Transform\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

::left::

- Vue3.3 \u3067\u6B63\u5F0F\u306B\u5C0E\u5165**\u4E88\u5B9A**\u306E\u65B0\u69CB\u6587  
  \uFF08Vue3.2 \u3067\u3082\u5B9F\u9A13\u7684\u6A5F\u80FD\u3068\u3057\u3066\u4F7F\u7528\u53EF\u80FD\uFF09

  - **\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6 API \u5468\u308A\u306E\u5197\u9577\u306A\u8A18\u8FF0\u3092\u5C11\u306A\u304F\u3057\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u308B**
  - SFC \u4EE5\u5916\uFF08JavaScript\u30FBTypeScript\uFF09\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059  
    (Vite \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408)

::right::

\`\`\`vue
<script setup>
import MyComponent from "./MyComponent.vue";

const count = $ref(0);

function handleClick() {
  count++;
}
<\/script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
\`\`\`

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html`,frontmatter:{layout:"sub-two-cols"},note:"prettier-ignore-start",index:1,start:11,end:54},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:h2,meta:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/03-reactive-transform.md",slide:{raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

Ref \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\`.value\`\u3092\u6D88\u3057\u53BB\u308C\u307E\u3059\u3002

::left::

\u4EE5\u524D\uFF1A

\`\`\`vue
<script setup>
import { ref, toRefs, computed } from "vue";
import { useMouse } from "@vueuse/core";

const count = ref(0);

function handleClick() {
  count.value++;
}

const { x, y } = toRefs(useMouse());

const mousePosition = computed(() => \`x: \${x.value}, y: \${y.value}\`);
<\/script>
\`\`\`

::right::

Reactivity Transform \u4F7F\u7528\uFF1A

\`\`\`vue
<script setup>
import { useMouse } from "@vueuse/core";

let count = $ref(0);

function handleClick() {
  count++;
}

let { x, y } = $(useMouse());

const mousePosition = $computed(() => \`x: \${x}, y: \${y}\`);
<\/script>
\`\`\`

[DEMO](https://sfc.vuejs.org/#eNqFks9uwjAMxl/FinYoGjSTdmNlYtp50h4gByA1EGj+KEkZqOq7z21gKhNsl8pxPv/8OW7D3pzLDzWyKSuC9MpFCBhr9yqM0s76CA3UAT8sfaCFtbcaBJtTBSW4tB4FexFGmAojSFubCDN48LjOnkZ9fl0bGZU1sF2assL3Ssl9NoJGGEj6x0fStRdEA8cxnKgTUbJL42yUWNKaEEF3qU8bVI8lnbTa1RHLjLizV1gcp/DQHFvidMGpXXTVBU/j0WB0iKhdtYxIJ4CiVIc+oHBVx0jUuex8zgQbuBbsLAJomvOsLRnv63gqPCt61xeL005+bTqVFTw1LviPHTZm6dkneunyXbCGFtO/lThfBMEImNoIRnvozuQzRhemnIe17Na5C7n1G05R7smn0phj0JOVt18BPYEFGw8YnJIH9BOPpkSP/i/mL+l97vVPMgTWxu03Oa2NDzVcEfGY65uQsF16LP/DJNVNECkmJWp1D3G555Va8cPzkNEhaGEta78BftUW3w==)

<!-- prettier-ignore-start -->
`,title:"What is Reactivity Transform\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

Ref \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\`.value\`\u3092\u6D88\u3057\u53BB\u308C\u307E\u3059\u3002

::left::

\u4EE5\u524D\uFF1A

\`\`\`vue
<script setup>
import { ref, toRefs, computed } from "vue";
import { useMouse } from "@vueuse/core";

const count = ref(0);

function handleClick() {
  count.value++;
}

const { x, y } = toRefs(useMouse());

const mousePosition = computed(() => \`x: \${x.value}, y: \${y.value}\`);
<\/script>
\`\`\`

::right::

Reactivity Transform \u4F7F\u7528\uFF1A

\`\`\`vue
<script setup>
import { useMouse } from "@vueuse/core";

let count = $ref(0);

function handleClick() {
  count++;
}

let { x, y } = $(useMouse());

const mousePosition = $computed(() => \`x: \${x}, y: \${y}\`);
<\/script>
\`\`\`

[DEMO](https://sfc.vuejs.org/#eNqFks9uwjAMxl/FinYoGjSTdmNlYtp50h4gByA1EGj+KEkZqOq7z21gKhNsl8pxPv/8OW7D3pzLDzWyKSuC9MpFCBhr9yqM0s76CA3UAT8sfaCFtbcaBJtTBSW4tB4FexFGmAojSFubCDN48LjOnkZ9fl0bGZU1sF2assL3Ssl9NoJGGEj6x0fStRdEA8cxnKgTUbJL42yUWNKaEEF3qU8bVI8lnbTa1RHLjLizV1gcp/DQHFvidMGpXXTVBU/j0WB0iKhdtYxIJ4CiVIc+oHBVx0jUuex8zgQbuBbsLAJomvOsLRnv63gqPCt61xeL005+bTqVFTw1LviPHTZm6dkneunyXbCGFtO/lThfBMEImNoIRnvozuQzRhemnIe17Na5C7n1G05R7smn0phj0JOVt18BPYEFGw8YnJIH9BOPpkSP/i/mL+l97vVPMgTWxu03Oa2NDzVcEfGY65uQsF16LP/DJNVNECkmJWp1D3G555Va8cPzkNEhaGEta78BftUW3w==)`,frontmatter:{layout:"sub-two-cols",hideInToc:!0,srcSequence:"./src/03-reactive-transform.md"},note:"prettier-ignore-start",index:19,start:54,end:110,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",raw:`---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

Ref \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\`.value\`\u3092\u6D88\u3057\u53BB\u308C\u307E\u3059\u3002

::left::

\u4EE5\u524D\uFF1A

\`\`\`vue
<script setup>
import { ref, toRefs, computed } from "vue";
import { useMouse } from "@vueuse/core";

const count = ref(0);

function handleClick() {
  count.value++;
}

const { x, y } = toRefs(useMouse());

const mousePosition = computed(() => \`x: \${x.value}, y: \${y.value}\`);
<\/script>
\`\`\`

::right::

Reactivity Transform \u4F7F\u7528\uFF1A

\`\`\`vue
<script setup>
import { useMouse } from "@vueuse/core";

let count = $ref(0);

function handleClick() {
  count++;
}

let { x, y } = $(useMouse());

const mousePosition = $computed(() => \`x: \${x}, y: \${y}\`);
<\/script>
\`\`\`

[DEMO](https://sfc.vuejs.org/#eNqFks9uwjAMxl/FinYoGjSTdmNlYtp50h4gByA1EGj+KEkZqOq7z21gKhNsl8pxPv/8OW7D3pzLDzWyKSuC9MpFCBhr9yqM0s76CA3UAT8sfaCFtbcaBJtTBSW4tB4FexFGmAojSFubCDN48LjOnkZ9fl0bGZU1sF2assL3Ssl9NoJGGEj6x0fStRdEA8cxnKgTUbJL42yUWNKaEEF3qU8bVI8lnbTa1RHLjLizV1gcp/DQHFvidMGpXXTVBU/j0WB0iKhdtYxIJ4CiVIc+oHBVx0jUuex8zgQbuBbsLAJomvOsLRnv63gqPCt61xeL005+bTqVFTw1LviPHTZm6dkneunyXbCGFtO/lThfBMEImNoIRnvozuQzRhemnIe17Na5C7n1G05R7smn0phj0JOVt18BPYEFGw8YnJIH9BOPpkSP/i/mL+l97vVPMgTWxu03Oa2NDzVcEfGY65uQsF16LP/DJNVNECkmJWp1D3G555Va8cPzkNEhaGEta78BftUW3w==)

<!-- prettier-ignore-start -->
`,title:"What is Reactivity Transform\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

Ref \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\`.value\`\u3092\u6D88\u3057\u53BB\u308C\u307E\u3059\u3002

::left::

\u4EE5\u524D\uFF1A

\`\`\`vue
<script setup>
import { ref, toRefs, computed } from "vue";
import { useMouse } from "@vueuse/core";

const count = ref(0);

function handleClick() {
  count.value++;
}

const { x, y } = toRefs(useMouse());

const mousePosition = computed(() => \`x: \${x.value}, y: \${y.value}\`);
<\/script>
\`\`\`

::right::

Reactivity Transform \u4F7F\u7528\uFF1A

\`\`\`vue
<script setup>
import { useMouse } from "@vueuse/core";

let count = $ref(0);

function handleClick() {
  count++;
}

let { x, y } = $(useMouse());

const mousePosition = $computed(() => \`x: \${x}, y: \${y}\`);
<\/script>
\`\`\`

[DEMO](https://sfc.vuejs.org/#eNqFks9uwjAMxl/FinYoGjSTdmNlYtp50h4gByA1EGj+KEkZqOq7z21gKhNsl8pxPv/8OW7D3pzLDzWyKSuC9MpFCBhr9yqM0s76CA3UAT8sfaCFtbcaBJtTBSW4tB4FexFGmAojSFubCDN48LjOnkZ9fl0bGZU1sF2assL3Ssl9NoJGGEj6x0fStRdEA8cxnKgTUbJL42yUWNKaEEF3qU8bVI8lnbTa1RHLjLizV1gcp/DQHFvidMGpXXTVBU/j0WB0iKhdtYxIJ4CiVIc+oHBVx0jUuex8zgQbuBbsLAJomvOsLRnv63gqPCt61xeL005+bTqVFTw1LviPHTZm6dkneunyXbCGFtO/lThfBMEImNoIRnvozuQzRhemnIe17Na5C7n1G05R7smn0phj0JOVt18BPYEFGw8YnJIH9BOPpkSP/i/mL+l97vVPMgTWxu03Oa2NDzVcEfGY65uQsF16LP/DJNVNECkmJWp1D3G555Va8cPzkNEhaGEta78BftUW3w==)`,frontmatter:{layout:"sub-two-cols",hideInToc:!0},note:"prettier-ignore-start",index:2,start:54,end:110},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:B2,meta:{hideInToc:!0,srcSequence:"./src/03-reactive-transform.md",slide:{raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

\u8A73\u7D30\u306F [Reactivity Transform] \u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002  
[https://vuejs.org/guide/extras/reactivity-transform.html](https://vuejs.org/guide/extras/reactivity-transform.html)

\u73FE\u5728\u3001\u5B9F\u9A13\u7684\u6A5F\u80FD\u3067\u3042\u308B\u305F\u3081\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u8A73\u7D30\u306F\u5272\u611B\u3057\u307E\u3059\u3002  
\u307E\u305F\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u306B\u8F09\u305B\u305F\u8A18\u8FF0\u65B9\u6CD5\u3084\u6A5F\u80FD\u306F\u5909\u66F4\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html
`,title:"What is Reactivity Transform\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

\u8A73\u7D30\u306F [Reactivity Transform] \u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002  
[https://vuejs.org/guide/extras/reactivity-transform.html](https://vuejs.org/guide/extras/reactivity-transform.html)

\u73FE\u5728\u3001\u5B9F\u9A13\u7684\u6A5F\u80FD\u3067\u3042\u308B\u305F\u3081\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u8A73\u7D30\u306F\u5272\u611B\u3057\u307E\u3059\u3002  
\u307E\u305F\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u306B\u8F09\u305B\u305F\u8A18\u8FF0\u65B9\u6CD5\u3084\u6A5F\u80FD\u306F\u5909\u66F4\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html`,frontmatter:{hideInToc:!0,srcSequence:"./src/03-reactive-transform.md"},index:20,start:110,end:126,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

\u8A73\u7D30\u306F [Reactivity Transform] \u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002  
[https://vuejs.org/guide/extras/reactivity-transform.html](https://vuejs.org/guide/extras/reactivity-transform.html)

\u73FE\u5728\u3001\u5B9F\u9A13\u7684\u6A5F\u80FD\u3067\u3042\u308B\u305F\u3081\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u8A73\u7D30\u306F\u5272\u611B\u3057\u307E\u3059\u3002  
\u307E\u305F\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u306B\u8F09\u305B\u305F\u8A18\u8FF0\u65B9\u6CD5\u3084\u6A5F\u80FD\u306F\u5909\u66F4\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html
`,title:"What is Reactivity Transform\uFF1F",level:2,content:`<!-- prettier-ignore-end -->

## What is Reactivity Transform\uFF1F

\u8A73\u7D30\u306F [Reactivity Transform] \u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002  
[https://vuejs.org/guide/extras/reactivity-transform.html](https://vuejs.org/guide/extras/reactivity-transform.html)

\u73FE\u5728\u3001\u5B9F\u9A13\u7684\u6A5F\u80FD\u3067\u3042\u308B\u305F\u3081\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u8A73\u7D30\u306F\u5272\u611B\u3057\u307E\u3059\u3002  
\u307E\u305F\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u306B\u8F09\u305B\u305F\u8A18\u8FF0\u65B9\u6CD5\u3084\u6A5F\u80FD\u306F\u5909\u66F4\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html`,frontmatter:{hideInToc:!0},index:3,start:110,end:126},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/03-reactive-transform.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:_2,meta:{layout:"center",class:"text-center big-title",title:"\u307E\u3068\u3081",srcSequence:"./src/04-conclusion.md",slide:{raw:null,title:"\u307E\u3068\u3081",level:1,content:"# \u307E\u3068\u3081",frontmatter:{layout:"center",class:"text-center big-title",title:"\u307E\u3068\u3081",srcSequence:"./src/04-conclusion.md"},note:"prettier-ignore-start",index:21,start:0,end:9,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/04-conclusion.md",raw:`---
layout: center
class: text-center big-title
---

# \u307E\u3068\u3081

<!-- prettier-ignore-start -->
`,title:"\u307E\u3068\u3081",level:1,content:"# \u307E\u3068\u3081",frontmatter:{layout:"center",class:"text-center big-title",title:"\u307E\u3068\u3081"},note:"prettier-ignore-start",index:0,start:0,end:9},inline:{raw:`---
src: ./src/04-conclusion.md
---

<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
`,content:"<!-- prettier-ignore-end -->",frontmatter:{},note:"prettier-ignore-start",index:5,start:95,end:103},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/04-conclusion.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:F2,meta:{hideInToc:!0,srcSequence:"./src/04-conclusion.md",slide:{raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

## \u307E\u3068\u3081

- Vue3.2 \u3067 &lt;script setup&gt; \u304C\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F  
  \uFF08Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\uFF09
- Vue3.3 \u3067\u306F Reactivity Transform \u304C\u5C0E\u5165\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059

<br>
<br>
<br>

<div class="text-center text-3xl">
<strong>\u5197\u9577\u3060\u3063\u305F\u8A18\u8FF0\u304C\u304B\u306A\u308A\u5C11\u306A\u304F\u306A\u308A</strong><br>
<strong>\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u307E\u3059</strong>\u3002
</div>

<!-- prettier-ignore-start -->
`,title:"\u307E\u3068\u3081",level:2,content:`<!-- prettier-ignore-end -->

## \u307E\u3068\u3081

- Vue3.2 \u3067 &lt;script setup&gt; \u304C\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F  
  \uFF08Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\uFF09
- Vue3.3 \u3067\u306F Reactivity Transform \u304C\u5C0E\u5165\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059

<br>
<br>
<br>

<div class="text-center text-3xl">
<strong>\u5197\u9577\u3060\u3063\u305F\u8A18\u8FF0\u304C\u304B\u306A\u308A\u5C11\u306A\u304F\u306A\u308A</strong><br>
<strong>\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u307E\u3059</strong>\u3002
</div>`,frontmatter:{hideInToc:!0,srcSequence:"./src/04-conclusion.md"},note:"prettier-ignore-start",index:22,start:9,end:32,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/04-conclusion.md",raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

## \u307E\u3068\u3081

- Vue3.2 \u3067 &lt;script setup&gt; \u304C\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F  
  \uFF08Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\uFF09
- Vue3.3 \u3067\u306F Reactivity Transform \u304C\u5C0E\u5165\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059

<br>
<br>
<br>

<div class="text-center text-3xl">
<strong>\u5197\u9577\u3060\u3063\u305F\u8A18\u8FF0\u304C\u304B\u306A\u308A\u5C11\u306A\u304F\u306A\u308A</strong><br>
<strong>\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u307E\u3059</strong>\u3002
</div>

<!-- prettier-ignore-start -->
`,title:"\u307E\u3068\u3081",level:2,content:`<!-- prettier-ignore-end -->

## \u307E\u3068\u3081

- Vue3.2 \u3067 &lt;script setup&gt; \u304C\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F  
  \uFF08Vue2.7 \u306B\u3082\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\uFF09
- Vue3.3 \u3067\u306F Reactivity Transform \u304C\u5C0E\u5165\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059

<br>
<br>
<br>

<div class="text-center text-3xl">
<strong>\u5197\u9577\u3060\u3063\u305F\u8A18\u8FF0\u304C\u304B\u306A\u308A\u5C11\u306A\u304F\u306A\u308A</strong><br>
<strong>\u30B7\u30F3\u30D7\u30EB\u306B\u8A18\u8FF0\u3067\u304D\u307E\u3059</strong>\u3002
</div>`,frontmatter:{hideInToc:!0},note:"prettier-ignore-start",index:1,start:9,end:32},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/04-conclusion.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:S2,meta:{layout:"center",class:"text-center",hideInToc:!0,srcSequence:"./src/04-conclusion.md",slide:{raw:`---
layout: center
class: text-center
hideInToc: true
---

<!-- prettier-ignore-end -->

## Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}

<!-- prettier-ignore-start -->
`,title:"Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}",level:2,content:`<!-- prettier-ignore-end -->

## Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}`,frontmatter:{layout:"center",class:"text-center",hideInToc:!0,srcSequence:"./src/04-conclusion.md"},note:"prettier-ignore-start",index:23,start:32,end:44,source:{filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/04-conclusion.md",raw:`---
layout: center
class: text-center
hideInToc: true
---

<!-- prettier-ignore-end -->

## Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}

<!-- prettier-ignore-start -->
`,title:"Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}",level:2,content:`<!-- prettier-ignore-end -->

## Vue3.3 \u304C\u697D\u3057\u307F\u3067\u3059\u306D \u{1F929}`,frontmatter:{layout:"center",class:"text-center",hideInToc:!0},note:"prettier-ignore-start",index:2,start:32,end:44},filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/src/04-conclusion.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:M2,meta:{layout:"center",class:"text-center big-title",hideInToc:!0,slide:{raw:`---
layout: center
class: text-center big-title
hideInToc: true
---

<!-- prettier-ignore-end -->

# Thank you for your attention

<div class="ribbon">

[Support me \u2764](https://github.com/sponsors/ota-meshi) or follow me!!  
GitHub: https://github.com/ota-meshi  
Twitter: https://twitter.com/omoteota  
Qiita: https://qiita.com/ota-meshi

</div>

<style>
  h1,
  a {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  .ribbon {
    position: absolute;
    bottom: 32px;
    right: -347px;
    transform: rotate(-25deg);
    background-color: #ddd5;
    width: 100%;
    font-size: 1rem;
  }
</style>
`,title:"Thank you for your attention",level:1,content:`<!-- prettier-ignore-end -->

# Thank you for your attention

<div class="ribbon">

[Support me \u2764](https://github.com/sponsors/ota-meshi) or follow me!!  
GitHub: https://github.com/ota-meshi  
Twitter: https://twitter.com/omoteota  
Qiita: https://qiita.com/ota-meshi

</div>

<style>
  h1,
  a {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  .ribbon {
    position: absolute;
    bottom: 32px;
    right: -347px;
    transform: rotate(-25deg);
    background-color: #ddd5;
    width: 100%;
    font-size: 1rem;
  }
</style>`,frontmatter:{layout:"center",class:"text-center big-title",hideInToc:!0},index:24,start:103,end:145,notesHTML:"",filepath:"/Users/runner/work/future-tech-conference-slide-2022-07-18/future-tech-conference-slide-2022-07-18/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",component:g0,meta:{layout:"end"}}];const Le=T2,I2=[{name:"play",path:"/",component:p0,children:[...Le]},{name:"print",path:"/print",component:h0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ds(()=>import("./Presenter.3a867f8f.js"),["assets/Presenter.3a867f8f.js","assets/Presenter.55f76449.css","assets/DrawingControls.48ca23f5.js"]),beforeEnter:t=>{if(!En.remote||En.remote===t.query.password)return!0;if(En.remote&&t.query.password===void 0){const n=prompt("Enter password");if(En.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],yt=Jm({history:fm("/future-tech-conference-slide-2022-07-18/"),routes:I2});function R2(t,n,{mode:s="replace"}={}){return k({get(){const o=yt.currentRoute.value.query[t];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){ze(()=>{yt[B(s)]({query:{...yt.currentRoute.value.query,[t]:o}})})}})}const Pu=N(0);ze(()=>{yt.afterEach(async()=>{await ze(),Pu.value+=1})});const Zt=k(()=>yt.currentRoute.value),ts=k(()=>Zt.value.query.print!==void 0),V2=k(()=>Zt.value.query.print==="clicks"),Nt=k(()=>Zt.value.query.embedded!==void 0),It=k(()=>Zt.value.path.startsWith("/presenter")),Us=k(()=>ts.value&&!V2.value),Fr=k(()=>Zt.value.query.password),L2=k(()=>!It.value&&(!_e.remote||Fr.value===_e.remote)),pi=R2("clicks","0"),Ou=k(()=>Le.length-1),j2=k(()=>Zt.value.path),je=k(()=>parseInt(j2.value.split(/\//g).slice(-1)[0])||1);k(()=>vl(je.value));const pt=k(()=>Le.find(t=>t.path===`${je.value}`));k(()=>{var t,n,s;return(s=(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});k(()=>{var t,n;return(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.layout});const Ll=k(()=>Le.find(t=>t.path===`${Math.min(Le.length,je.value+1)}`)),N2=k(()=>{var t,n;return Pu.value,((n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),St=k({get(){if(Us.value)return 99999;let t=+(pi.value||0);return isNaN(t)&&(t=0),t},set(t){pi.value=t.toString()}}),Zo=k(()=>{var t,n,s;return+((s=(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.clicks)!=null?s:N2.value.length)}),U2=k(()=>je.value<Le.length-1||St.value<Zo.value),H2=k(()=>je.value>1||St.value>0),z2=k(()=>Le.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(va(t,n),t),[])),q2=k(()=>ga(z2.value,pt.value));k(()=>Ba(q2.value));function cn(){Zo.value<=St.value?lo():St.value+=1}async function pn(){St.value<=0?await ro():St.value-=1}function vl(t){return It.value?`/presenter/${t}`:`/${t}`}function lo(){const t=Math.min(Le.length,je.value+1);return cs(t)}async function ro(t=!0){const n=Math.max(1,je.value-1);await cs(n),t&&Zo.value&&yt.replace({query:{...Zt.value.query,clicks:Zo.value}})}function cs(t,n){return yt.push({path:vl(t),query:{...Zt.value.query,clicks:n}})}function W2(t){const n=N(0),{direction:s,distanceX:o,distanceY:l}=Hh(t,{onSwipeStart(r){r.pointerType==="touch"&&(no.value||(n.value=hr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||no.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===zt.LEFT?cn():pn():(i/window.innerHeight>.4||i>200)&&(s.value===zt.DOWN?ro():lo())}})}async function kr(){const{saveAs:t}=await ds(()=>import("./FileSaver.min.4f92ed14.js").then(function(n){return n.F}),[]);t(Hp(_e.download)?_e.download:_e.exportFilename?`${_e.exportFilename}.pdf`:"/future-tech-conference-slide-2022-07-18/slidev-exported.pdf",`${_e.title}.pdf`)}async function Y2(t){var n,s;if(t==null){const o=(s=(n=pt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function va(t,n,s=1){var l,r,a,i,p;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&t.length>0?va(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(p=(i=n.meta)==null?void 0:i.slide)==null?void 0:p.title})}function ga(t,n,s=!1,o){return t.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=ga(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Ba(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:Ba(s.children,n+1)}))}function K2(){const t=_e.titleTemplate.replace("%s",_e.title||"Slidev");m8({title:t}),x8(`${t} - shared`),S8(`${t} - drawings`);function n(){It.value&&(vc("page",+je.value),vc("clicks",St.value))}yt.afterEach(n),pe(St,n),w8(s=>{(+s.page!=+je.value||St.value!==s.clicks)&&yt.replace({path:vl(s.page),query:{...yt.currentRoute.value.query,clicks:s.clicks||0}})})}const Z2=Be({__name:"App",setup(t){return z(J),K2(),(n,s)=>{const o=Qs("RouterView"),l=Qs("StarportCarrier");return _(),w(G,null,[Y(o),Y(l)],64)}}});function jl(t){return t!==null&&typeof t=="object"}function Sr(t,n,s=".",o){if(!jl(n))return Sr(t,{},s,o);const l=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=a.concat(l[r]):jl(a)&&jl(l[r])?l[r]=Sr(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function G2(t){return(...n)=>n.reduce((s,o)=>Sr(s,o,"",t),{})}const J2=G2(),$u=1/60*1e3,Q2=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Mu=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Q2()),$u);function X2(t){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(p,u=!1,f=!1)=>{const y=f&&l,d=y?n:s;return u&&a.add(p),d.indexOf(p)===-1&&(d.push(p),y&&l&&(o=n.length)),p},cancel:p=>{const u=s.indexOf(p);u!==-1&&s.splice(u,1),a.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const f=n[u];f(p),a.has(f)&&(i.schedule(f),t())}l=!1,r&&(r=!1,i.process(p))}};return i}const e_=40;let Pr=!0,ao=!1,Or=!1;const ns={delta:0,timestamp:0},yo=["read","update","preRender","render","postRender"],gl=yo.reduce((t,n)=>(t[n]=X2(()=>ao=!0),t),{}),ui=yo.reduce((t,n)=>{const s=gl[n];return t[n]=(o,l=!1,r=!1)=>(ao||n_(),s.schedule(o,l,r)),t},{});yo.reduce((t,n)=>(t[n]=gl[n].cancel,t),{});yo.reduce((t,n)=>(t[n]=()=>gl[n].process(ns),t),{});const t_=t=>gl[t].process(ns),Tu=t=>{ao=!1,ns.delta=Pr?$u:Math.max(Math.min(t-ns.timestamp,e_),1),ns.timestamp=t,Or=!0,yo.forEach(t_),Or=!1,ao&&(Pr=!1,Mu(Tu))},n_=()=>{ao=!0,Pr=!0,Or||Mu(Tu)},s_=()=>ns;function Iu(t,n){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(s[o[l]]=t[o[l]]);return s}var o_=function(){},fi=function(){};const $r=(t,n,s)=>Math.min(Math.max(s,t),n),Nl=.001,l_=.01,di=10,r_=.05,a_=1;function c_({duration:t=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;o_(t<=di*1e3);let a=1-n;a=$r(r_,a_,a),t=$r(l_,di,t/1e3),a<1?(l=u=>{const f=u*a,y=f*t,d=f-s,h=Mr(u,a),v=Math.exp(-y);return Nl-d/h*v},r=u=>{const y=u*a*t,d=y*s+s,h=Math.pow(a,2)*Math.pow(u,2)*t,v=Math.exp(-y),C=Mr(Math.pow(u,2),a);return(-l(u)+Nl>0?-1:1)*((d-h)*v)/C}):(l=u=>{const f=Math.exp(-u*t),y=(u-s)*t+1;return-Nl+f*y},r=u=>{const f=Math.exp(-u*t),y=(s-u)*(t*t);return f*y});const i=5/t,p=p_(l,r,i);if(t=t*1e3,isNaN(p))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:t}}}const i_=12;function p_(t,n,s){let o=s;for(let l=1;l<i_;l++)o=o-t(o)/n(o);return o}function Mr(t,n){return t*Math.sqrt(1-n*n)}const u_=["duration","bounce"],f_=["stiffness","damping","mass"];function yi(t,n){return n.some(s=>t[s]!==void 0)}function d_(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!yi(t,f_)&&yi(t,u_)){const s=c_(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Aa(t){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=t,r=Iu(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:p,mass:u,velocity:f,duration:y,isResolvedFromDuration:d}=d_(r),h=hi,v=hi;function C(){const A=f?-(f/1e3):0,x=s-n,E=p/(2*Math.sqrt(i*u)),D=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),E<1){const F=Mr(D,E);h=V=>{const O=Math.exp(-E*D*V);return s-O*((A+E*D*x)/F*Math.sin(F*V)+x*Math.cos(F*V))},v=V=>{const O=Math.exp(-E*D*V);return E*D*O*(Math.sin(F*V)*(A+E*D*x)/F+x*Math.cos(F*V))-O*(Math.cos(F*V)*(A+E*D*x)-F*x*Math.sin(F*V))}}else if(E===1)h=F=>s-Math.exp(-D*F)*(x+(A+D*x)*F);else{const F=D*Math.sqrt(E*E-1);h=V=>{const O=Math.exp(-E*D*V),q=Math.min(F*V,300);return s-O*((A+E*D*x)*Math.sinh(q)+F*x*Math.cosh(q))/F}}}return C(),{next:A=>{const x=h(A);if(d)a.done=A>=y;else{const E=v(A)*1e3,D=Math.abs(E)<=o,F=Math.abs(s-x)<=l;a.done=D&&F}return a.value=a.done?s:x,a},flipTarget:()=>{f=-f,[n,s]=[s,n],C()}}}Aa.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const hi=t=>0,Ru=(t,n,s)=>{const o=n-t;return o===0?1:(s-t)/o},_a=(t,n,s)=>-s*t+s*n+t,Vu=(t,n)=>s=>Math.max(Math.min(s,n),t),Hs=t=>t%1?Number(t.toFixed(5)):t,Go=/(-)?([\d]*\.?[\d])+/g,Tr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,y_=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ho(t){return typeof t=="string"}const Bl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Lu=Object.assign(Object.assign({},Bl),{transform:Vu(0,1)});Object.assign(Object.assign({},Bl),{default:1});const h_=t=>({test:n=>ho(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),zs=h_("%");Object.assign(Object.assign({},zs),{parse:t=>zs.parse(t)/100,transform:t=>zs.transform(t*100)});const Ca=(t,n)=>s=>Boolean(ho(s)&&y_.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),ju=(t,n,s)=>o=>{if(!ho(o))return o;const[l,r,a,i]=o.match(Go);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},xn={test:Ca("hsl","hue"),parse:ju("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+zs.transform(Hs(n))+", "+zs.transform(Hs(s))+", "+Hs(Lu.transform(o))+")"},m_=Vu(0,255),Ul=Object.assign(Object.assign({},Bl),{transform:t=>Math.round(m_(t))}),sn={test:Ca("rgb","red"),parse:ju("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+Ul.transform(t)+", "+Ul.transform(n)+", "+Ul.transform(s)+", "+Hs(Lu.transform(o))+")"};function v_(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ir={test:Ca("#"),parse:v_,transform:sn.transform},Al={test:t=>sn.test(t)||Ir.test(t)||xn.test(t),parse:t=>sn.test(t)?sn.parse(t):xn.test(t)?xn.parse(t):Ir.parse(t),transform:t=>ho(t)?t:t.hasOwnProperty("red")?sn.transform(t):xn.transform(t)},Nu="${c}",Uu="${n}";function g_(t){var n,s,o,l;return isNaN(t)&&ho(t)&&((s=(n=t.match(Go))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Tr))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Hu(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Tr);o&&(s=o.length,t=t.replace(Tr,Nu),n.push(...o.map(Al.parse)));const l=t.match(Go);return l&&(t=t.replace(Go,Uu),n.push(...l.map(Bl.parse))),{values:n,numColors:s,tokenised:t}}function zu(t){return Hu(t).values}function qu(t){const{values:n,numColors:s,tokenised:o}=Hu(t),l=n.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?Nu:Uu,i<s?Al.transform(r[i]):Hs(r[i]));return a}}const B_=t=>typeof t=="number"?0:t;function A_(t){const n=zu(t);return qu(t)(n.map(B_))}const Wu={test:g_,parse:zu,createTransformer:qu,getAnimatableNone:A_};function Hl(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function mi({hue:t,saturation:n,lightness:s,alpha:o}){t/=360,n/=100,s/=100;let l=0,r=0,a=0;if(!n)l=r=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,p=2*s-i;l=Hl(p,i,t+1/3),r=Hl(p,i,t),a=Hl(p,i,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const __=(t,n,s)=>{const o=t*t,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},C_=[Ir,sn,xn],vi=t=>C_.find(n=>n.test(t)),Yu=(t,n)=>{let s=vi(t),o=vi(n),l=s.parse(t),r=o.parse(n);s===xn&&(l=mi(l),s=sn),o===xn&&(r=mi(r),o=sn);const a=Object.assign({},l);return i=>{for(const p in a)p!=="alpha"&&(a[p]=__(l[p],r[p],i));return a.alpha=_a(l.alpha,r.alpha,i),s.transform(a)}},b_=t=>typeof t=="number",E_=(t,n)=>s=>n(t(s)),Ku=(...t)=>t.reduce(E_);function Zu(t,n){return b_(t)?s=>_a(t,n,s):Al.test(t)?Yu(t,n):Ju(t,n)}const Gu=(t,n)=>{const s=[...t],o=s.length,l=t.map((r,a)=>Zu(r,n[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},D_=(t,n)=>{const s=Object.assign(Object.assign({},t),n),o={};for(const l in s)t[l]!==void 0&&n[l]!==void 0&&(o[l]=Zu(t[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function gi(t){const n=Wu.parse(t),s=n.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const Ju=(t,n)=>{const s=Wu.createTransformer(n),o=gi(t),l=gi(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Ku(Gu(o.parsed,l.parsed),s):a=>`${a>0?n:t}`},x_=(t,n)=>s=>_a(t,n,s);function w_(t){if(typeof t=="number")return x_;if(typeof t=="string")return Al.test(t)?Yu:Ju;if(Array.isArray(t))return Gu;if(typeof t=="object")return D_}function F_(t,n,s){const o=[],l=s||w_(t[0]),r=t.length-1;for(let a=0;a<r;a++){let i=l(t[a],t[a+1]);if(n){const p=Array.isArray(n)?n[a]:n;i=Ku(p,i)}o.push(i)}return o}function k_([t,n],[s]){return o=>s(Ru(t,n,o))}function S_(t,n){const s=t.length,o=s-1;return l=>{let r=0,a=!1;if(l<=t[0]?a=!0:l>=t[o]&&(r=o-1,a=!0),!a){let p=1;for(;p<s&&!(t[p]>l||p===o);p++);r=p-1}const i=Ru(t[r],t[r+1],l);return n[r](i)}}function Qu(t,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=t.length;fi(r===n.length),fi(!o||!Array.isArray(o)||o.length===r-1),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=F_(n,o,l),i=r===2?k_(t,a):S_(t,a);return s?p=>i($r(t[0],t[r-1],p)):i}const _l=t=>n=>1-t(1-n),ba=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,P_=t=>n=>Math.pow(n,t),Xu=t=>n=>n*n*((t+1)*n-t),O_=t=>{const n=Xu(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},ef=1.525,$_=4/11,M_=8/11,T_=9/10,tf=t=>t,Ea=P_(2),I_=_l(Ea),nf=ba(Ea),sf=t=>1-Math.sin(Math.acos(t)),of=_l(sf),R_=ba(of),Da=Xu(ef),V_=_l(Da),L_=ba(Da),j_=O_(ef),N_=4356/361,U_=35442/1805,H_=16061/1805,Jo=t=>{if(t===1||t===0)return t;const n=t*t;return t<$_?7.5625*n:t<M_?9.075*n-9.9*t+3.4:t<T_?N_*n-U_*t+H_:10.8*t*t-20.52*t+10.72},z_=_l(Jo),q_=t=>t<.5?.5*(1-Jo(1-t*2)):.5*Jo(t*2-1)+.5;function W_(t,n){return t.map(()=>n||nf).splice(0,t.length-1)}function Y_(t){const n=t.length;return t.map((s,o)=>o!==0?o/(n-1):0)}function K_(t,n){return t.map(s=>s*n)}function Io({from:t=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:t},a=Array.isArray(n)?n:[t,n],i=K_(o&&o.length===a.length?o:Y_(a),l);function p(){return Qu(i,a,{ease:Array.isArray(s)?s:W_(a,s)})}let u=p();return{next:f=>(r.value=u(f),r.done=f>=l,r),flipTarget:()=>{a.reverse(),u=p()}}}function Z_({velocity:t=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:n};let i=s*t;const p=n+i,u=r===void 0?p:r(p);return u!==p&&(i=u-n),{next:f=>{const y=-i*Math.exp(-f/o);return a.done=!(y>l||y<-l),a.value=a.done?u:u+y,a},flipTarget:()=>{}}}const Bi={keyframes:Io,spring:Aa,decay:Z_};function G_(t){if(Array.isArray(t.to))return Io;if(Bi[t.type])return Bi[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Io:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Aa:Io}const lf=1/60*1e3,J_=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),rf=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(J_()),lf);function Q_(t){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(p,u=!1,f=!1)=>{const y=f&&l,d=y?n:s;return u&&a.add(p),d.indexOf(p)===-1&&(d.push(p),y&&l&&(o=n.length)),p},cancel:p=>{const u=s.indexOf(p);u!==-1&&s.splice(u,1),a.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const f=n[u];f(p),a.has(f)&&(i.schedule(f),t())}l=!1,r&&(r=!1,i.process(p))}};return i}const X_=40;let Rr=!0,co=!1,Vr=!1;const ss={delta:0,timestamp:0},mo=["read","update","preRender","render","postRender"],Cl=mo.reduce((t,n)=>(t[n]=Q_(()=>co=!0),t),{}),e9=mo.reduce((t,n)=>{const s=Cl[n];return t[n]=(o,l=!1,r=!1)=>(co||s9(),s.schedule(o,l,r)),t},{}),t9=mo.reduce((t,n)=>(t[n]=Cl[n].cancel,t),{});mo.reduce((t,n)=>(t[n]=()=>Cl[n].process(ss),t),{});const n9=t=>Cl[t].process(ss),af=t=>{co=!1,ss.delta=Rr?lf:Math.max(Math.min(t-ss.timestamp,X_),1),ss.timestamp=t,Vr=!0,mo.forEach(n9),Vr=!1,co&&(Rr=!1,rf(af))},s9=()=>{co=!0,Rr=!0,Vr||rf(af)},o9=()=>ss;function cf(t,n,s=0){return t-n-s}function l9(t,n,s=0,o=!0){return o?cf(n+-t,n,s):n-(t-n)+s}function r9(t,n,s,o){return o?t>=n+s:t<=-s}const a9=t=>{const n=({delta:s})=>t(s);return{start:()=>e9.update(n,!0),stop:()=>t9.update(n)}};function pf(t){var n,s,{from:o,autoplay:l=!0,driver:r=a9,elapsed:a=0,repeat:i=0,repeatType:p="loop",repeatDelay:u=0,onPlay:f,onStop:y,onComplete:d,onRepeat:h,onUpdate:v}=t,C=Iu(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=C,x,E=0,D=C.duration,F,V=!1,O=!0,q;const re=G_(C);!((s=(n=re).needsInterpolation)===null||s===void 0)&&s.call(n,o,A)&&(q=Qu([0,100],[o,A],{clamp:!1}),o=0,A=100);const ue=re(Object.assign(Object.assign({},C),{from:o,to:A}));function de(){E++,p==="reverse"?(O=E%2===0,a=l9(a,D,u,O)):(a=cf(a,D,u),p==="mirror"&&ue.flipTarget()),V=!1,h&&h()}function me(){x.stop(),d&&d()}function $e(qe){if(O||(qe=-qe),a+=qe,!V){const Ee=ue.next(Math.max(0,a));F=Ee.value,q&&(F=q(F)),V=O?Ee.done:a<=0}v==null||v(F),V&&(E===0&&(D!=null||(D=a)),E<i?r9(a,D,u,O)&&de():me())}function Re(){f==null||f(),x=r($e),x.start()}return l&&Re(),{stop:()=>{y==null||y(),x.stop()}}}function uf(t,n){return n?t*(1e3/n):0}function c9({from:t=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:u,driver:f,onUpdate:y,onComplete:d,onStop:h}){let v;function C(D){return s!==void 0&&D<s||o!==void 0&&D>o}function A(D){return s===void 0?o:o===void 0||Math.abs(s-D)<Math.abs(o-D)?s:o}function x(D){v==null||v.stop(),v=pf(Object.assign(Object.assign({},D),{driver:f,onUpdate:F=>{var V;y==null||y(F),(V=D.onUpdate)===null||V===void 0||V.call(D,F)},onComplete:d,onStop:h}))}function E(D){x(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:p},D))}if(C(t))E({from:t,velocity:n,to:A(t)});else{let D=l*n+t;typeof u!="undefined"&&(D=u(D));const F=A(D),V=F===s?-1:1;let O,q;const re=ue=>{O=q,q=ue,n=uf(ue-O,o9().delta),(V===1&&ue>F||V===-1&&ue<F)&&E({from:ue,to:F,velocity:n})};x({type:"decay",from:t,velocity:n,timeConstant:r,power:l,restDelta:p,modifyTarget:u,onUpdate:C(D)?re:void 0})}return{stop:()=>v==null?void 0:v.stop()}}const ff=(t,n)=>1-3*n+3*t,df=(t,n)=>3*n-6*t,yf=t=>3*t,Qo=(t,n,s)=>((ff(n,s)*t+df(n,s))*t+yf(n))*t,hf=(t,n,s)=>3*ff(n,s)*t*t+2*df(n,s)*t+yf(n),i9=1e-7,p9=10;function u9(t,n,s,o,l){let r,a,i=0;do a=n+(s-n)/2,r=Qo(a,o,l)-t,r>0?s=a:n=a;while(Math.abs(r)>i9&&++i<p9);return a}const f9=8,d9=.001;function y9(t,n,s,o){for(let l=0;l<f9;++l){const r=hf(n,s,o);if(r===0)return n;n-=(Qo(n,s,o)-t)/r}return n}const Ro=11,wo=1/(Ro-1);function h9(t,n,s,o){if(t===n&&s===o)return tf;const l=new Float32Array(Ro);for(let a=0;a<Ro;++a)l[a]=Qo(a*wo,t,s);function r(a){let i=0,p=1;const u=Ro-1;for(;p!==u&&l[p]<=a;++p)i+=wo;--p;const f=(a-l[p])/(l[p+1]-l[p]),y=i+f*wo,d=hf(y,t,s);return d>=d9?y9(a,y,t,s):d===0?y:u9(a,i,i+wo,t,s)}return a=>a===0||a===1?a:Qo(r(a),n,o)}const mf=(t,n)=>s=>Math.max(Math.min(s,n),t),qs=t=>t%1?Number(t.toFixed(5)):t,io=/(-)?([\d]*\.?[\d])+/g,Lr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,m9=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function vo(t){return typeof t=="string"}const go={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ws=Object.assign(Object.assign({},go),{transform:mf(0,1)}),Fo=Object.assign(Object.assign({},go),{default:1}),xa=t=>({test:n=>vo(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),mn=xa("deg"),Ys=xa("%"),ae=xa("px"),Ai=Object.assign(Object.assign({},Ys),{parse:t=>Ys.parse(t)/100,transform:t=>Ys.transform(t*100)}),wa=(t,n)=>s=>Boolean(vo(s)&&m9.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),vf=(t,n,s)=>o=>{if(!vo(o))return o;const[l,r,a,i]=o.match(io);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},ko={test:wa("hsl","hue"),parse:vf("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+Ys.transform(qs(n))+", "+Ys.transform(qs(s))+", "+qs(Ws.transform(o))+")"},v9=mf(0,255),zl=Object.assign(Object.assign({},go),{transform:t=>Math.round(v9(t))}),Os={test:wa("rgb","red"),parse:vf("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+zl.transform(t)+", "+zl.transform(n)+", "+zl.transform(s)+", "+qs(Ws.transform(o))+")"};function g9(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const _i={test:wa("#"),parse:g9,transform:Os.transform},gt={test:t=>Os.test(t)||_i.test(t)||ko.test(t),parse:t=>Os.test(t)?Os.parse(t):ko.test(t)?ko.parse(t):_i.parse(t),transform:t=>vo(t)?t:t.hasOwnProperty("red")?Os.transform(t):ko.transform(t)},gf="${c}",Bf="${n}";function B9(t){var n,s,o,l;return isNaN(t)&&vo(t)&&((s=(n=t.match(io))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Lr))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Af(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Lr);o&&(s=o.length,t=t.replace(Lr,gf),n.push(...o.map(gt.parse)));const l=t.match(io);return l&&(t=t.replace(io,Bf),n.push(...l.map(go.parse))),{values:n,numColors:s,tokenised:t}}function _f(t){return Af(t).values}function Cf(t){const{values:n,numColors:s,tokenised:o}=Af(t),l=n.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?gf:Bf,i<s?gt.transform(r[i]):qs(r[i]));return a}}const A9=t=>typeof t=="number"?0:t;function _9(t){const n=_f(t);return Cf(t)(n.map(A9))}const Fa={test:B9,parse:_f,createTransformer:Cf,getAnimatableNone:_9},C9=new Set(["brightness","contrast","saturate","opacity"]);function b9(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[o]=s.match(io)||[];if(!o)return t;const l=s.replace(o,"");let r=C9.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const E9=/([a-z-]*)\(.*?\)/g,jr=Object.assign(Object.assign({},Fa),{getAnimatableNone:t=>{const n=t.match(E9);return n?n.map(b9).join(" "):t}}),ql={};class D9{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}const Ci=t=>!isNaN(parseFloat(t));class x9{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new D9,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=s_();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),ui.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ui.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Ci(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Ci(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?uf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function w9(t){return new x9(t)}const{isArray:F9}=Array;function k9(){const t=N({}),n=o=>{const l=r=>{!t.value[r]||(t.value[r].stop(),t.value[r].destroy(),M8(t.value,r))};o?F9(o)?o.forEach(l):l(o):Object.keys(t.value).forEach(l)},s=(o,l,r)=>{if(t.value[o])return t.value[o];const a=w9(l);return a.onChange(i=>{ot(r,o,i)}),ot(t.value,o,a),a};return ca(n),{motionValues:t,get:s,stop:n}}const S9=t=>Array.isArray(t),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Wl=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),P9=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Yl=()=>({type:"keyframes",ease:"linear",duration:300}),O9=t=>({type:"keyframes",duration:800,values:t}),bi={default:P9,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:Wl,scaleY:Wl,scale:Wl,backgroundColor:Yl,color:Yl,opacity:Yl},bf=(t,n)=>{let s;return S9(n)?s=O9:s=bi[t]||bi.default,{to:n,...s(n)}},Ei={...go,transform:Math.round},Ef={color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scale:Fo,scaleX:Fo,scaleY:Fo,scaleZ:Fo,skew:mn,skewX:mn,skewY:mn,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Ws,originX:Ai,originY:Ai,originZ:ae,zIndex:Ei,filter:jr,WebkitFilter:jr,fillOpacity:Ws,strokeOpacity:Ws,numOctaves:Ei},ka=t=>Ef[t],Df=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function $9(t,n){let s=ka(t);return s!==jr&&(s=Fa),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const M9={linear:tf,easeIn:Ea,easeInOut:nf,easeOut:I_,circIn:sf,circInOut:R_,circOut:of,backIn:Da,backInOut:L_,backOut:V_,anticipate:j_,bounceIn:z_,bounceInOut:q_,bounceOut:Jo},Di=t=>{if(Array.isArray(t)){const[n,s,o,l]=t;return h9(n,s,o,l)}else if(typeof t=="string")return M9[t];return t},T9=t=>Array.isArray(t)&&typeof t[0]!="number",xi=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Fa.test(n)&&!n.startsWith("url("));function I9(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function R9({ease:t,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),t&&(l.ease=T9(t)?t.map(Di):Di(t)),s&&(l.elapsed=-s),l}function V9(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),I9(n),L9(t)||(t={...t,...bf(s,n.to)}),{...n,...R9(t)}}function L9({delay:t,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function j9(t,n){return t[n]||t.default||t}function N9(t,n,s,o,l){const r=j9(o,t);let a=r.from===null||r.from===void 0?n.get():r.from;const i=xi(t,s);a==="none"&&i&&typeof s=="string"&&(a=$9(t,s));const p=xi(t,a);function u(y){const d={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?c9({...d,...r}):pf({...V9(r,d,t),onUpdate:h=>{d.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),y&&y()}})}function f(y){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),y&&y(),{stop:()=>{}}}return!p||!i||r.type===!1?f:u}function U9(){const{motionValues:t,stop:n,get:s}=k9();return{motionValues:t,stop:n,push:(l,r,a,i={},p)=>{const u=a[l],f=s(l,u,a);if(i&&i.immediate){f.set(r);return}const y=N9(l,f,r,i,p);f.start(y)}}}function H9(t,n={},{motionValues:s,push:o,stop:l}=U9()){const r=B(n),a=N(!1),i=pe(s,d=>{a.value=Object.values(d).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),p=d=>{if(!r||!r[d])throw new Error(`The variant ${d} does not exist.`);return r[d]},u=d=>(typeof d=="string"&&(d=p(d)),Promise.all(Object.entries(d).map(([h,v])=>{if(h!=="transition")return new Promise(C=>{o(h,v,t,d.transition||bf(h,d[h]),C)})}).filter(Boolean)));return{isAnimating:a,apply:u,set:d=>{const h=zo(d)?d:p(d);Object.entries(h).forEach(([v,C])=>{v!=="transition"&&o(v,C,t,{immediate:!0})})},stopTransitions:()=>{i(),l()},leave:async d=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){d();return}await u(h),d()}}}const Sa=typeof window!="undefined",z9=()=>Sa&&window.onpointerdown===null,q9=()=>Sa&&window.ontouchstart===null,W9=()=>Sa&&window.onmousedown===null;function Y9({target:t,state:n,variants:s,apply:o}){const l=B(s),r=[],a=(...v)=>{const C=be.apply(null,v);return r.push(C),C},i=N(!1),p=N(!1),u=N(!1),f=k(()=>{let v=[];return l&&(l.hovered&&(v=[...v,...Object.keys(l.hovered)]),l.tapped&&(v=[...v,...Object.keys(l.tapped)]),l.focused&&(v=[...v,...Object.keys(l.focused)])),v}),y=k(()=>{const v={};Object.assign(v,n.value),i.value&&l.hovered&&Object.assign(v,l.hovered),p.value&&l.tapped&&Object.assign(v,l.tapped),u.value&&l.focused&&Object.assign(v,l.focused);for(const C in v)f.value.includes(C)||delete v[C];return v});l.hovered&&(a(t,"mouseenter",()=>{i.value=!0}),a(t,"mouseleave",()=>{i.value=!1,p.value=!1}),a(t,"mouseout",()=>{i.value=!1,p.value=!1})),l.tapped&&(W9()&&(a(t,"mousedown",()=>{p.value=!0}),a(t,"mouseup",()=>{p.value=!1})),z9()&&(a(t,"pointerdown",()=>{p.value=!0}),a(t,"pointerup",()=>{p.value=!1})),q9()&&(a(t,"touchstart",()=>{p.value=!0}),a(t,"touchend",()=>{p.value=!1}))),l.focused&&(a(t,"focus",()=>{u.value=!0}),a(t,"blur",()=>{u.value=!1}));const d=pe(y,o);return{stop:()=>{r.forEach(v=>v()),d()}}}function K9({set:t,target:n,variants:s,variant:o}){const l=B(s);return{stop:pe(()=>n,()=>{!l||(l.initial&&t("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function Z9({state:t,apply:n}){return{stop:pe(t,o=>{o&&n(o)},{immediate:!0})}}function G9({target:t,variants:n,variant:s}){const o=B(n);let l=an;if(o&&(o.visible||o.visibleOnce)){const{stop:r}=jh(t,([{isIntersecting:a}])=>{o.visible?a?s.value="visible":s.value="initial":o.visibleOnce&&(a?s.value!=="visibleOnce"&&(s.value="visibleOnce"):s.value||(s.value="initial"))});l=r}return{stop:l}}function J9(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const s=N([]);if(n.lifeCycleHooks){const{stop:l}=K9(t);s.value.push(l)}if(n.syncVariants){const{stop:l}=Z9(t);s.value.push(l)}if(n.visibilityHooks){const{stop:l}=G9(t);s.value.push(l)}if(n.eventListeners){const{stop:l}=Y9(t);s.value.push(l)}const o=()=>s.value.forEach(l=>l());return ca(o),{stop:o}}function xf(t={}){const n=Me({...t}),s=N({});return pe(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const a=ka(l),i=Df(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}const Q9=["","X","Y","Z"],X9=["perspective","translate","scale","rotate","skew"],wf=["transformPerspective","x","y","z"];X9.forEach(t=>{Q9.forEach(n=>{const s=t+n;wf.push(s)})});const eC=new Set(wf);function Pa(t){return eC.has(t)}const tC=new Set(["originX","originY","originZ"]);function Ff(t){return tC.has(t)}function nC(t){const n={},s={};return Object.entries(t).forEach(([o,l])=>{Pa(o)||Ff(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function sC(t,n){let s,o;const{state:l,style:r}=xf(),a=pe(()=>Xe(t),u=>{if(!!u){o=u;for(const f of Object.keys(Ef))u.style[f]===null||u.style[f]===""||Pa(f)||Ff(f)||ot(l,f,u.style[f]);s&&Object.entries(s).forEach(([f,y])=>ot(u.style,f,y)),n&&n(l)}},{immediate:!0}),i=pe(r,u=>{if(!o){s=u;return}for(const f in u)ot(o.style,f,u[f])},{immediate:!0});return{style:l,stop:()=>{o=void 0,s=void 0,a(),i()}}}const oC={x:"translateX",y:"translateY",z:"translateZ"};function kf(t={},n=!0){const s=Me({...t}),o=N("");return pe(s,l=>{let r="",a=!1;n&&(l.x||l.y||l.z)&&(r+=`translate3d(${[l.x||0,l.y||0,l.z||0].map(ae.transform).join(",")}) `,a=!0);for(const[i,p]of Object.entries(l)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=ka(i),f=Df(p,u);r+=`${oC[i]||i}(${f}) `}n&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}function lC(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),p=a.split(",").map(f=>s(f.endsWith(")")?f.replace(")",""):f.trim())),u=p.length===1?p[0]:p;return{...o,[r]:u}},{})}function rC(t,n){Object.entries(lC(n)).forEach(([s,o])=>{o=parseFloat(o);const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>{ot(t,r,0)});return}o.forEach((r,a)=>{ot(t,l[a],r)});return}if(s==="translateX"){ot(t,"x",o);return}if(s==="translateY"){ot(t,"y",o);return}if(s==="translateZ"){ot(t,"z",o);return}ot(t,s,o)})}function aC(t,n){let s,o;const{state:l,transform:r}=kf(),a=pe(()=>Xe(t),u=>{!u||(o=u,u.style.transform&&rC(l,u.style.transform),s&&(u.style.transform=s),n&&n(l))},{immediate:!0}),i=pe(r,u=>{if(!o){s=u;return}o.style.transform=u},{immediate:!0});return{transform:l,stop:()=>{s=void 0,o=void 0,a(),i()}}}function cC(t,n){const s=Me({}),o=y=>{Object.entries(y).forEach(([d,h])=>{ot(s,d,h)})},{style:l,stop:r}=sC(t,o),{transform:a,stop:i}=aC(t,o),p=pe(s,y=>{Object.entries(y).forEach(([d,h])=>{const v=Pa(d)?a:l;v[d]&&v[d]===h||ot(v,d,h)})},{immediate:!0,deep:!0}),u=pe(()=>Xe(t),y=>{!y||n&&o(n)},{immediate:!0});return{motionProperties:s,style:l,transform:a,stop:()=>{r(),i(),p(),u()}}}function iC(t={}){const n=B(t),s=N();return{state:k(()=>{if(!!s.value)return n[s.value]}),variant:s}}function pC(t,n={},s){const{motionProperties:o,stop:l}=cC(t),{variant:r,state:a}=iC(n),i=H9(o,n),p={target:t,variant:r,variants:n,state:a,motionProperties:o,...i,stop:(f=!1)=>{}},{stop:u}=J9(p,s);return p.stop=(f=!1)=>{const y=()=>{p.stopTransitions(),l(),u()};if(!f&&n.value&&n.value.leave){const d=pe(p.isAnimating,h=>{h||(d(),y())})}else y()},ca(()=>p.stop()),sh(()=>Xe(t),f=>{!f||f!=null&&f.motionInstance&&(p.stop(),Object.assign(p,f.motionInstance))}),p}const uC=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],fC=(t,n)=>{const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&zo(s.variants)&&(n.value={...n.value,...s.variants}),uC.forEach(o=>{if(o==="delay"){if(s&&s[o]&&R8(s[o])){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={...n.value.enter.transition,delay:l}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={...n.value.visible.transition,delay:l}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={...n.value.visibleOnce.transition,delay:l}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&zo(s[o])&&(n.value[o]=s[o])}))},Kl=t=>{const n=(o,l,r)=>{const a=l.value&&typeof l.value=="string"?l.value:r.key;a&&ql[a]&&ql[a].stop();const i=N(t||{});typeof l.value=="object"&&(i.value=l.value),fC(r,i);const p=pC(o,i);o.motionInstance=p,a&&ot(ql,a,p)},s=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:n,unmounted:s,bind:n,unbind:s,getSSRProps(o,l){const{initial:r}=o.value||l&&l.props||{},a=J2((t==null?void 0:t.initial)||{},r||{});if(!a||Object.keys(a).length===0)return;const{transform:i,style:p}=nC(a),{transform:u}=kf(i),{style:f}=xf(p);return u.value&&(f.value.transform=u.value),{style:f.value}}}},dC={initial:{opacity:0},enter:{opacity:1}},yC={initial:{opacity:0},visible:{opacity:1}},hC={initial:{opacity:0},visibleOnce:{opacity:1}},mC={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},vC={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},gC={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},BC={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},AC={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},_C={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},CC={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},bC={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},EC={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},DC={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},xC={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},wC={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},FC={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},kC={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},SC={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},PC={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},OC={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},$C={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},MC={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},TC={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},IC={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},RC={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},VC={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},LC={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},jC={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},NC={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},UC={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},wi={__proto__:null,fade:dC,fadeVisible:yC,fadeVisibleOnce:hC,pop:mC,popVisible:vC,popVisibleOnce:gC,rollBottom:FC,rollLeft:BC,rollRight:CC,rollTop:DC,rollVisibleBottom:kC,rollVisibleLeft:AC,rollVisibleRight:bC,rollVisibleTop:xC,rollVisibleOnceBottom:SC,rollVisibleOnceLeft:_C,rollVisibleOnceRight:EC,rollVisibleOnceTop:wC,slideBottom:jC,slideLeft:PC,slideRight:MC,slideTop:RC,slideVisibleBottom:NC,slideVisibleLeft:OC,slideVisibleRight:TC,slideVisibleTop:VC,slideVisibleOnceBottom:UC,slideVisibleOnceLeft:$C,slideVisibleOnceRight:IC,slideVisibleOnceTop:LC};function HC(t){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const zC={install(t,n){if(t.directive("motion",Kl()),!n||n&&!n.excludePresets)for(const s in wi){const o=wi[s];t.directive(`motion-${HC(s)}`,Kl(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,t.directive(`motion-${s}`,Kl(o))}}},Oa="vue-starport-injection",Sf="vue-starport-options",qC={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Pf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var WC=Object.defineProperty,Xo=Object.getOwnPropertySymbols,Of=Object.prototype.hasOwnProperty,$f=Object.prototype.propertyIsEnumerable,Fi=(t,n,s)=>n in t?WC(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,YC=(t,n)=>{for(var s in n||(n={}))Of.call(n,s)&&Fi(t,s,n[s]);if(Xo)for(var s of Xo(n))$f.call(n,s)&&Fi(t,s,n[s]);return t},ki=(t,n)=>{var s={};for(var o in t)Of.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Xo)for(var o of Xo(t))n.indexOf(o)<0&&$f.call(t,o)&&(s[o]=t[o]);return s};const KC=Be({name:"StarportProxy",props:YC({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Pf),setup(t,n){const s=z(Oa),o=k(()=>s.getInstance(t.port,t.component)),l=N(),r=o.value.generateId(),a=N(!1);return o.value.isVisible||(o.value.land(),a.value=!0),us(async()=>{o.value.el||(o.value.el=l.value,await ze(),a.value=!0,o.value.rect.update())}),ul(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await ze(),await ze(),!o.value.el&&s.dispose(o.value.port))}),pe(()=>t,async()=>{o.value.props&&await ze();const i=t,{props:p}=i,u=ki(i,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:p,mountedProps:u}=i,f=ki(i,["initialProps","mountedProps"]),y=Wt(f,(a.value?u:p)||{});return kt("div",Wt(y,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?kt(n.slots.default):void 0)}}});var ZC=Object.defineProperty,GC=Object.defineProperties,JC=Object.getOwnPropertyDescriptors,Si=Object.getOwnPropertySymbols,QC=Object.prototype.hasOwnProperty,XC=Object.prototype.propertyIsEnumerable,Pi=(t,n,s)=>n in t?ZC(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,eb=(t,n)=>{for(var s in n||(n={}))QC.call(n,s)&&Pi(t,s,n[s]);if(Si)for(var s of Si(n))XC.call(n,s)&&Pi(t,s,n[s]);return t},tb=(t,n)=>GC(t,JC(n));const nb=Be({name:"Starport",inheritAttrs:!0,props:Pf,setup(t,n){const s=N(!1);return us(()=>{s.value=!0}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!zo(r)||os(r))&&(r={render(){return o}}),kt(KC,tb(eb({},t),{key:t.port,component:ll(r),props:l.props}))}}});function sb(t){const n=Me({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=At?document.documentElement||document.body:void 0;function o(){if(!At)return;const i=Xe(t);if(!i)return;const{height:p,width:u,left:f,top:y}=i.getBoundingClientRect(),d=window.getComputedStyle(i),h=d.margin,v=d.padding;Object.assign(n,{height:p,width:u,left:f,top:s.scrollTop+y,margin:h,padding:v})}const l=Kp(o,{immediate:!1});function r(){!At||(o(),l.resume())}function a(){l.pause()}return n}let ob=(t,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=t[Math.random()*t.length|0];return o};const Oi=ob("abcdefghijklmnopqrstuvwxyz",5);function $i(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function lb(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var rb=Object.defineProperty,Mi=Object.getOwnPropertySymbols,ab=Object.prototype.hasOwnProperty,cb=Object.prototype.propertyIsEnumerable,Ti=(t,n,s)=>n in t?rb(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Zl=(t,n)=>{for(var s in n||(n={}))ab.call(n,s)&&Ti(t,s,n[s]);if(Mi)for(var s of Mi(n))cb.call(n,s)&&Ti(t,s,n[s]);return t};function ib(t,n,s={}){const o=lb(n),l=$i(o)||Oi(),r=N(),a=N(null),i=N(!1),p=N(!1),u=Yf(!0),f=N({}),y=k(()=>Zl(Zl(Zl({},qC),s),f.value)),d=N(0);let h;u.run(()=>{h=sb(r),pe(r,async x=>{x&&(p.value=!0),await ze(),r.value||(p.value=!1)})});const v=$i(t);function C(){return`starport-${l}-${v}-${Oi()}`}const A=C();return Me({el:r,id:A,port:t,props:a,rect:h,scope:u,isLanded:i,isVisible:p,options:y,liftOffTime:d,component:n,componentName:o,componentId:l,generateId:C,setLocalOptions(x={}){f.value=JSON.parse(JSON.stringify(x))},elRef(){return r},liftOff(){!i.value||(i.value=!1,d.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function pb(t){const n=Me(new Map);function s(l,r){let a=n.get(l);return a||(a=ib(l,r,t),n.set(l,a)),a.component=r,a}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var ub=Object.defineProperty,fb=Object.defineProperties,db=Object.getOwnPropertyDescriptors,Ii=Object.getOwnPropertySymbols,yb=Object.prototype.hasOwnProperty,hb=Object.prototype.propertyIsEnumerable,Ri=(t,n,s)=>n in t?ub(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,mb=(t,n)=>{for(var s in n||(n={}))yb.call(n,s)&&Ri(t,s,n[s]);if(Ii)for(var s of Ii(n))hb.call(n,s)&&Ri(t,s,n[s]);return t},vb=(t,n)=>fb(t,db(n));const gb=Be({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=z(Oa);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=k(()=>n.getInstance(t.port,t.component)),o=k(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=k(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),p=s.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!s.value.isVisible||!s.value.el?vb(mb({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={};return()=>{const a=!!(s.value.isLanded&&s.value.el);return kt("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},kt(Ay,{to:a?`#${o.value}`:"body",disabled:!a},kt(s.value.component,Wt(r,s.value.props))))}}}),Bb=Be({name:"StarportCarrier",setup(t,{slots:n}){const s=pb(z(Sf,{}));return In().appContext.app.provide(Oa,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>kt(gb,{key:r,port:r,component:a}))]}}});function Ab(t={}){return{install(n){n.provide(Sf,t),n.component("Starport",nb),n.component("StarportCarrier",Bb)}}}function _b(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(zC),t.app.use(Ab({keepAlive:!0}))}function at(t,n,s){var o,l;return(l=((o=t.instance)==null?void 0:o.$).provides[n])!=null?l:s}function Cb(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var f,y,d,h;if(Us.value||((f=at(s,Vs))==null?void 0:f.value))return;const o=at(s,_n),l=at(s,Rs),r=at(s,dr),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,p=((y=o==null?void 0:o.value)==null?void 0:y.length)||0,u=i?B8:Sl;if(o&&!((d=o==null?void 0:o.value)!=null&&d.includes(n))&&o.value.push(n),s.value===null&&(s.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((h=r==null?void 0:r.value.get(s.value))!=null&&h.includes(n))){const v=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(v))}n==null||n.classList.toggle(Bn,!0),l&&pe(l,()=>{var x;const v=(x=l==null?void 0:l.value)!=null?x:0,C=s.value!=null?v>=s.value:v>p;n.classList.contains(Pl)||n.classList.toggle(u,!C),a!==!1&&a!==void 0&&n.classList.toggle(u,C),n.classList.toggle(bs,!1);const A=r==null?void 0:r.value.get(v);A==null||A.forEach((E,D)=>{E.classList.toggle(Do,!1),D===A.length-1?E.classList.toggle(bs,!0):E.classList.toggle(Do,!0)}),n.classList.contains(bs)||n.classList.toggle(Do,C)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Bn,!1);const o=at(s,_n);o!=null&&o.value&&yr(o.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var i,p;if(Us.value||((i=at(s,Vs))==null?void 0:i.value))return;const o=at(s,_n),l=at(s,Rs),r=at(s,dr),a=o==null?void 0:o.value.length;s.value===void 0&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(p=r==null?void 0:r.value.get(s.value))==null||p.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(Bn,!0),l&&pe(l,()=>{var f,y,d;const u=((f=l.value)!=null?f:0)>=((d=(y=s.value)!=null?y:a)!=null?d:0);n.classList.contains(Pl)||n.classList.toggle(Sl,!u),n.classList.toggle(bs,!1),n.classList.contains(bs)||n.classList.toggle(Do,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(Bn,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,p;if(Us.value||((a=at(s,Vs))==null?void 0:a.value))return;const o=at(s,_n),l=at(s,Rs),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(n))&&o.value.push(n),n==null||n.classList.toggle(Bn,!0),l&&pe(l,()=>{var y;const u=(y=l==null?void 0:l.value)!=null?y:0,f=s.value!=null?u>=s.value:u>r;n.classList.toggle(Sl,f),n.classList.toggle(Pl,f)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Bn,!1);const o=at(s,_n);o!=null&&o.value&&yr(o.value,n)}})}}}function bb(t,n){const s=Cu(t),o=bu(n,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:kr,next:cn,nextSlide:lo,openInEditor:Y2,prev:pn,prevSlide:ro},configs:_e,themeConfigs:k(()=>_e.themeConfig)}}function Eb(){return{install(t){const n=bb(Zt,St);t.provide(J,Me(n))}}}const Bs=t8(Z2);Bs.use(yt);Bs.use(y8());Bs.use(Cb());Bs.use(Eb());_b({app:Bs,router:yt});Bs.mount("#app");export{Fs as $,mu as A,U as B,Ce as C,Qe as D,lv as E,G as F,St as G,Zo as H,U2 as I,Ll as J,Ol as K,no as L,Rl as M,jp as N,i0 as O,da as P,r0 as Q,je as R,ya as S,Ou as T,yv as U,Mn as V,Tn as W,Ot as X,Db as Y,et as Z,Kt as _,e as a,xo as a0,fs as a1,Dr as a2,I5 as a3,R5 as a4,V5 as a5,j5 as a6,sa as a7,Ip as a8,kb as a9,Vt as aa,tt as ab,Kv as ac,Dn as ad,Vp as ae,N5 as af,ul as ag,k as b,w as c,Be as d,J as e,pt as f,Q as g,B as h,z as i,Z5 as j,W2 as k,_e as l,m8 as m,Te as n,_ as o,us as p,Me as q,N as r,xb as s,Pn as t,wb as u,Fb as v,pe as w,Y as x,Ke as y,H as z};
