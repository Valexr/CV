var le=Array.isArray,ft=Array.from,Gt=Object.keys,W=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Tt=Object.getOwnPropertyDescriptors,Dr=Object.prototype,Dn=Array.prototype,$e=Object.getPrototypeOf;function Or(e){return e()}function ze(e){for(var t=0;t<e.length;t++)e[t]()}var he=Symbol("$state"),Lr=Symbol("$state metadata"),zt=Symbol("legacy props"),Mr=Symbol("");function St(e){return e===this.v}function jt(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function At(e){return!jt(e,this.v)}function Fr(){if(!1){let e=new Error(`derived_references_self
A derived value cannot reference itself recursively`);throw e.name="Svelte error",e}else throw new Error("derived_references_self")}function Pr(e){if(!1){let t=new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function`);throw t.name="Svelte error",t}else throw new Error("effect_in_teardown")}function Br(){if(!1){let e=new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect");throw e.name="Svelte error",e}else throw new Error("effect_in_unowned_derived")}function qr(e){if(!1){let t=new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)`);throw t.name="Svelte error",t}else throw new Error("effect_orphan")}function Jt(){if(!1){let e=new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops`);throw e.name="Svelte error",e}else throw new Error("effect_update_depth_exceeded")}function Yr(){if(!1){let e=new Error(`hydration_failed
Failed to hydrate the application`);throw e.name="Svelte error",e}else throw new Error("hydration_failed")}function Ur(e){if(!1){let t=new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files`);throw t.name="Svelte error",t}else throw new Error("rune_outside_svelte")}function Hr(){if(!1){let e=new Error("state_unsafe_local_read\nReading state that was created inside the same derived is forbidden. Consider using `untrack` to read locally created state");throw e.name="Svelte error",e}else throw new Error("state_unsafe_local_read")}function Vr(){if(!1){let e=new Error("state_unsafe_mutation\nUpdating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state`");throw e.name="Svelte error",e}else throw new Error("state_unsafe_mutation")}var Te=!1;function Wr(){Te=!0}var Ie=new Set;function Kt(e){Ie=e}function ie(e){return{f:0,v:e,reactions:null,equals:St,version:0}}function Ce(e,t=!1){let r=ie(e);return t||(r.equals=At),Te&&g!==null&&g.l!==null&&(g.l.s??=[]).push(r),r}function ge(e,t){return b!==null&&De()&&b.f&18&&(Se===null||!Se.includes(e))&&Vr(),lt(e,t)}function lt(e,t){if(!e.equals(t)&&(e.v=t,e.version=kt(),Gr(e,1024),De()&&d!==null&&d.f&512&&!(d.f&32)&&(L!==null&&L.includes(e)?(P(d,1024),Qe(d)):xe===null?zr([e]):xe.push(e)),!1)){let n=Array.from(Ie);var r=be;je(!0);try{for(let i of n)i.f&512&&P(i,2048),Ae(i)&&Oe(i)}finally{je(r)}Ie.clear()}return t}function Gr(e,t){var r=e.reactions;if(r!==null)for(var n=De(),i=r.length,o=0;o<i;o++){var s=r[o],a=s.f;if(!(a&1024)&&!(!n&&s===d)){if(!1){Ie.add(s);continue}P(s,t),a&640&&(a&2?Gr(s,2048):Qe(s))}}}var Le="[",Ke="[!",Me="]",ye={};var Zt=Symbol(),z=Symbol("filename"),jr=Symbol("hmr");var ct="font-weight: bold",ut="font-weight: normal";function Jr(e,t,r){console.warn("hydration_attribute_changed")}function Qr(e){console.warn("hydration_html_changed")}function Fe(e){console.warn("hydration_mismatch")}function Kr(){console.warn("lifecycle_double_unmount")}function Nt(e){console.warn("state_proxy_equality_mismatch")}var m=!1;function B(e){m=e}var h;function N(e){if(e===null)throw Fe(),ye;return h=e}function M(){return N(C(h))}function A(e){if(m){if(C(h)!==null)throw Fe(),ye;h=e}}function Rt(){for(var e=0,t=h;;){if(t.nodeType===8){var r=t.data;if(r===Me){if(e===0)return t;e-=1}else(r===Le||r===Ke)&&(e+=1)}var n=C(t);t.remove(),t=n}}var On=Symbol("ADD_OWNER");function Pe(e){return e!==null&&typeof e=="object"&&he in e?e[he]:e}function Zr(){let e=Array.prototype,t=Array.__svelte_cleanup;t&&t();let{indexOf:r,lastIndexOf:n,includes:i}=e;e.indexOf=function(o,s){let a=r.call(this,o,s);return a===-1&&r.call(Pe(this),Pe(o),s)!==-1&&Nt("array.indexOf(...)"),a},e.lastIndexOf=function(o,s){let a=n.call(this,o,s??this.length-1);return a===-1&&n.call(Pe(this),Pe(o),s??this.length-1)!==-1&&Nt("array.lastIndexOf(...)"),a},e.includes=function(o,s){let a=i.call(this,o,s);return a||i.call(Pe(this),Pe(o),s)&&Nt("array.includes(...)"),a},Array.__svelte_cleanup=()=>{e.indexOf=r,e.lastIndexOf=n,e.includes=i}}var Xt,It,Xr,en;function Ct(){if(Xt===void 0){Xt=window,It=document;var e=Element.prototype,t=Node.prototype;Xr=Ee(t,"firstChild").get,en=Ee(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0,!1}}function ee(e=""){return document.createTextNode(e)}function R(e){return Xr.call(e)}function C(e){return en.call(e)}function D(e,t){if(!m)return R(e);var r=R(h);if(r===null)r=h.appendChild(ee());else if(t&&r.nodeType!==3){var n=ee();return r?.before(n),N(n),n}return N(r),r}function er(e,t){if(!m){var r=R(e);return r instanceof Comment&&r.data===""?C(r):r}if(t&&h?.nodeType!==3){var n=ee();return h?.before(n),N(n),n}return h}function J(e,t=1,r=!1){let n=m?h:e;for(;t--;)n=C(n);if(!m)return n;var i=n.nodeType;if(r&&i!==3){var o=ee();return n?.before(o),N(o),o}return N(n),n}function _t(e){e.textContent=""}function Ot(e){var t=1026;d===null?t|=128:d.f|=524288;let r={children:null,ctx:g,deps:null,equals:St,f:t,fn:e,reactions:null,v:null,version:0,parent:d};if(b!==null&&b.f&2){var n=b;(n.children??=[]).push(r)}return r}function rr(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&2?pt(n):U(n)}}}var tr=[];function or(e){var t,r=d;if(Y(e.parent),!1){let n=Ie;Kt(new Set);try{tr.includes(e)&&Fr(),tr.push(e),rr(e),t=Dt(e)}finally{Y(r),Kt(n),tr.pop()}}else try{rr(e),t=Dt(e)}finally{Y(r)}return t}function ir(e){var t=or(e),r=(ke||e.f&128)&&e.deps!==null?2048:512;P(e,r),e.equals(t)||(e.v=t,e.version=kt())}function pt(e){rr(e),qe(e,0),P(e,8192),e.v=e.children=e.deps=e.ctx=e.reactions=null}function lr(e){d===null&&b===null&&qr(e),b!==null&&b.f&128&&Br(),Mt&&Pr(e)}function Ln(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function mt(e,t,r,n=!0){var i=(e&64)!==0,o=d;if(!1)for(;o!==null&&o.f&131072;)o=o.parent;var s={ctx:g,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|1024,first:null,fn:t,last:null,next:null,parent:i?null:o,prev:null,teardown:null,transitions:null,version:0};if(!1,r){var a=be;try{je(!0),Oe(s),s.f|=16384}catch(_){throw U(s),_}finally{je(a)}}else t!==null&&Qe(s);var u=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&524288)===0;if(!u&&!i&&n&&(o!==null&&Ln(s,o),b!==null&&b.f&2)){var c=b;(c.children??=[]).push(s)}return s}function vt(e){lr("$effect");var t=d!==null&&(d.f&32)!==0&&g!==null&&!g.m;if(!1,t){var r=g;(r.e??=[]).push({fn:e,effect:d,reaction:b})}else{var n=ae(e);return n}}function Ze(e){return lr("$effect.pre"),!1,j(e)}function ht(e){let t=mt(64,e,!0);return()=>{U(t)}}function ae(e){return mt(4,e,!1)}function j(e){return mt(8,e,!0)}function et(e){return!1,H(e)}function H(e,t=0){return mt(24|t,e,!0)}function V(e,t=!0){return mt(40,e,!0,t)}function cr(e){var t=e.teardown;if(t!==null){let r=Mt,n=b;sr(!0),re(null);try{t.call(null)}finally{sr(r),re(n)}}}function ur(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)pt(t[r])}}function _r(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;U(r,t),r=n}}function rn(e){for(var t=e.first;t!==null;){var r=t.next;t.f&32||U(t),t=r}}function U(e,t=!0){var r=!1;if((t||e.f&262144)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var o=n===i?null:C(n);n.remove(),n=o}r=!0}_r(e,t&&!r),ur(e),qe(e,0),P(e,8192);var s=e.transitions;if(s!==null)for(let u of s)u.stop();cr(e);var a=e.parent;a!==null&&a.first!==null&&pr(e),!1,e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function pr(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ye(e,t){var r=[];Lt(e,r,!0),dr(r,()=>{U(e),t&&t()})}function dr(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n)}else t()}function Lt(e,t,r){if(!(e.f&4096)){if(e.f^=4096,e.transitions!==null)for(let s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var i=n.next,o=(n.f&32768)!==0||(n.f&32)!==0;Lt(n,t,o?r:!1),n=i}}}function tt(e){nn(e,!0)}function nn(e,t){if(e.f&4096){Ae(e)&&Oe(e),e.f^=4096;for(var r=e.first;r!==null;){var n=r.next,i=(r.f&32768)!==0||(r.f&32)!==0;nn(r,i?t:!1),r=n}if(e.transitions!==null)for(let o of e.transitions)(o.is_global||t)&&o.in()}}var Ft=!1,sn=!1,mr=[],on=[];function an(){Ft=!1;let e=mr.slice();mr=[],ze(e)}function Mn(){sn=!1;let e=on.slice();on=[],ze(e)}function _e(e){Ft||(Ft=!0,queueMicrotask(an)),mr.push(e)}function fn(){Ft&&an(),sn&&Mn()}var un=0,Yn=1,ln=new WeakSet,Pt=un,xt=!1,be=!1,Mt=!1;function je(e){be=e}function sr(e){Mt=e}var Ue=[],rt=0,gt=[],b=null;function re(e){b=e}var d=null;function Y(e){d=e}var Se=null;var L=null,Q=0,xe=null;function zr(e){xe=e}var _n=0,ke=!1,vr=null,g=null;var q=null;function kt(){return++_n}function De(){return!Te||g!==null&&g.l===null}function Ae(e){var t=e.f;if(t&1024)return!0;if(t&2048){var r=e.deps,n=(t&128)!==0;if(r!==null){var i;if(t&256){for(i=0;i<r.length;i++)(r[i].reactions??=[]).push(e);e.f^=256}for(i=0;i<r.length;i++){var o=r[i];if(Ae(o)&&ir(o),n&&d!==null&&!ke&&!o?.reactions?.includes(e)&&(o.reactions??=[]).push(e),o.version>e.version)return!0}}n||P(e,512)}return!1}function Un(e,t,r){if(!!1||ln.has(e)||r===null)throw e;let n=[],i=t.fn?.name;i&&n.push(i);let o=r;for(;o!==null;){if(!1){var s=o.function?.[z];if(s){let c=s.split("/").pop();n.push(c)}}o=o.p}let a=/Firefox/.test(navigator.userAgent)?"  ":"	";W(e,"message",{value:e.message+`
${n.map(c=>`
${a}in ${c}`).join("")}
`});let u=e.stack;if(u){let c=u.split(`
`),_=[];for(let p=0;p<c.length;p++){let f=c[p];f.includes("svelte/src/internal")||_.push(f)}W(e,"stack",{value:e.stack+_.join(`
`)})}throw ln.add(e),e}function Dt(e){var t=L,r=Q,n=xe,i=b,o=ke,s=Se,a=g,u=e.f;L=null,Q=0,xe=null,b=u&96?null:e,ke=!be&&(u&128)!==0,Se=null,g=e.ctx;try{var c=(0,e.fn)(),_=e.deps;if(L!==null){var p;if(qe(e,Q),_!==null&&Q>0)for(_.length=Q+L.length,p=0;p<L.length;p++)_[Q+p]=L[p];else e.deps=_=L;if(!ke)for(p=Q;p<_.length;p++)(_[p].reactions??=[]).push(e)}else _!==null&&Q<_.length&&(qe(e,Q),_.length=Q);return c}finally{L=t,Q=r,xe=n,b=i,ke=o,Se=s,g=a}}function Hn(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}r===null&&t.f&2&&(L===null||!L.includes(t))&&(P(t,2048),t.f&384||(t.f^=256),qe(t,0))}function qe(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Hn(e,r[n])}function Oe(e){var t=e.f;if(!(t&8192)){P(e,512);var r=d,n=g;if(d=e,!1){var i=q;q=e.component_function}try{t&16?rn(e):_r(e),ur(e),cr(e);var o=Dt(e);e.teardown=typeof o=="function"?o:null,e.version=_n,!1}catch(s){Un(s,e,n)}finally{d=r,!1}}}function pn(){if(rt>1e3)if(rt=0,!1)try{Jt()}catch(e){throw W(e,"stack",{value:""}),console.error("Last ten effects were: ",gt.slice(-10).map(t=>t.fn)),gt=[],e}else Jt();rt++}function dn(e){var t=e.length;if(t!==0){pn();var r=be;be=!0;try{for(var n=0;n<t;n++){var i=e[n];i.f&512||(i.f^=512);var o=[];mn(i,o),Vn(o)}}finally{be=r}}}function Vn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];!(n.f&12288)&&Ae(n)&&(Oe(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?pr(n):n.fn=null))}}function Wn(){if(xt=!1,rt>1001)return;let e=Ue;Ue=[],dn(e),xt||(rt=0,!1)}function Qe(e){Pt===un&&(xt||(xt=!0,queueMicrotask(Wn)));for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&96){if(!(r&512))return;t.f^=512}}Ue.push(t)}function mn(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,o=(i&32)!==0,s=o&&(i&512)!==0;if(!s&&!(i&4096))if(i&8){o?r.f^=512:Ae(r)&&Oe(r);var a=r.first;if(a!==null){r=a;continue}}else i&4&&n.push(r);var u=r.next;if(u===null){let p=r.parent;for(;p!==null;){if(e===p)break e;var c=p.next;if(c!==null){r=c;continue e}p=p.parent}}r=u}for(var _=0;_<n.length;_++)a=n[_],t.push(a),mn(a,t)}function nt(e){var t=Pt,r=Ue;try{pn();let i=[];Pt=Yn,Ue=i,xt=!1,dn(r);var n=e?.();return fn(),(Ue.length>0||i.length>0)&&nt(),rt=0,!1,n}finally{Pt=t,Ue=r}}function S(e){var t=e.f,r=(t&2)!==0;if(r&&t&8192){var n=or(e);return pt(e),n}if(vr!==null&&vr.add(e),b!==null){Se!==null&&Se.includes(e)&&Hr();var i=b.deps;L===null&&i!==null&&i[Q]===e?Q++:L===null?L=[e]:L.push(e),xe!==null&&d!==null&&d.f&512&&!(d.f&32)&&xe.includes(e)&&(P(d,1024),Qe(d))}else if(r&&e.deps===null){var o=e,s=o.parent;s!==null&&!s.deriveds?.includes(o)&&(s.deriveds??=[]).push(o)}return r&&(o=e,Ae(o)&&ir(o)),e.v}function F(e){let t=b;try{return b=null,e()}finally{b=t}}var Gn=-3585;function P(e,t){e.f=e.f&Gn|t}function He(e,t=!1,r){g={p:g,c:null,e:null,m:!1,s:e,x:null,l:null},Te&&!t&&(g.l={s:null,u:null,r1:[],r2:ie(!1)}),!1}function Ve(e){let t=g;if(t!==null){e!==void 0&&(t.x=e);let s=t.e;if(s!==null){var r=d,n=b;t.e=null;try{for(var i=0;i<s.length;i++){var o=s[i];Y(o.effect),re(o.reaction),ae(o.fn)}}finally{Y(r),re(n)}}g=t.p,!1,t.m=!0}return e||{}}function Yt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(he in e)qt(e);else if(!Array.isArray(e))for(let t in e){let r=e[t];typeof r=="object"&&r&&he in r&&qt(r)}}}function qt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{qt(e[n],t)}catch{}let r=$e(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){let n=Tt(r);for(let i in n){let o=n[i].get;if(o)try{o.call(e)}catch{}}}}}if(!1){let e=function(t){if(!(t in globalThis)){let r;Object.defineProperty(globalThis,t,{configurable:!0,get:()=>{if(r!==void 0)return r;Ur(t)},set:n=>{r=n}})}};e("$state"),e("$effect"),e("$derived"),e("$inspect"),e("$props"),e("$bindable")}var vn=new Set,hr=new Set;function bt(e){var t=this,r=t.ownerDocument,n=e.type,i=e.composedPath?.()||[],o=i[0]||e.target,s=0,a=e.__root;if(a){var u=i.indexOf(a);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var c=i.indexOf(t);if(c===-1)return;u<=c&&(s=u)}if(o=i[s]||e.target,o!==t){W(e,"currentTarget",{configurable:!0,get(){return o||r}});var _=b,p=d;re(null),Y(null);try{for(var f,x=[];o!==null;){var v=o.assignedSlot||o.parentNode||o.host||null;try{var I=o["__"+n];if(I!==void 0&&!o.disabled)if(le(I)){var[E,...$]=I;E.apply(o,[e,...$])}else I.call(o,e)}catch(y){f?x.push(y):f=y}if(e.cancelBubble||v===t||v===null)break;o=v}if(f){for(let y of x)queueMicrotask(()=>{throw y});throw f}}finally{e.__root=t,delete e.currentTarget,re(_),Y(p)}}}var ne;function hn(){ne=void 0}function xr(e){let t=null,r=m;var n;if(m){for(t=h,ne===void 0&&(ne=R(document.head));ne!==null&&(ne.nodeType!==8||ne.data!==Le);)ne=C(ne);ne===null?B(!1):ne=N(C(ne))}m||(n=document.head.appendChild(ee()));try{H(()=>e(n),262144)}finally{r&&(B(!0),ne=h,N(t))}}function yt(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function de(e,t){var r=d;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function fe(e,t){var r=(t&1)!==0,n=(t&2)!==0,i,o=!e.startsWith("<!>");return()=>{if(m)return de(h,null),h;i===void 0&&(i=yt(o?e:"<!>"+e),r||(i=R(i)));var s=n?document.importNode(i,!0):i.cloneNode(!0);if(r){var a=R(s),u=s.lastChild;de(a,u)}else de(s,s);return s}}function K(e,t){if(m){d.nodes_end=h,M();return}e!==null&&e.before(t)}var Kn=/\r/g;function xn(e){e=e.replace(Kn,"");let t=5381,r=e.length;for(;r--;)t=(t<<5)-t^e.charCodeAt(r);return(t>>>0).toString(36)}var Zn=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","webkitdirectory"];var Qs=[...Zn,"formNoValidate","isMap","noModule","playsInline","readOnly","value","inert","volume"];var Xn=["touchstart","touchmove"];function gn(e){return Xn.includes(e)}var gr=!0;function wt(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function it(e,t){return bn(e,t)}function yr(e,t){Ct(),t.intro=t.intro??!1;let r=t.target,n=m,i=h;try{for(var o=R(r);o&&(o.nodeType!==8||o.data!==Le);)o=C(o);if(!o)throw ye;B(!0),N(o),M();let s=bn(e,{...t,anchor:o});if(h===null||h.nodeType!==8||h.data!==Me)throw Fe(),ye;return B(!1),s}catch(s){if(s===ye)return t.recover===!1&&Yr(),Ct(),_t(r),B(!1),it(e,t);throw s}finally{B(n),N(i),hn()}}var ot=new Map;function bn(e,{target:t,anchor:r,props:n={},events:i,context:o,intro:s=!0}){Ct();var a=new Set,u=p=>{for(var f=0;f<p.length;f++){var x=p[f];if(!a.has(x)){a.add(x);var v=gn(x);t.addEventListener(x,bt,{passive:v});var I=ot.get(x);I===void 0?(document.addEventListener(x,bt,{passive:v}),ot.set(x,1)):ot.set(x,I+1)}}};u(ft(vn)),hr.add(u);var c=void 0,_=ht(()=>{var p=r??t.appendChild(ee());return V(()=>{if(o){He({});var f=g;f.c=o}i&&(n.$$events=i),m&&de(p,null),gr=s,c=e(p,n)||{},gr=!0,m&&(d.nodes_end=h),o&&Ve()}),()=>{for(var f of a){t.removeEventListener(f,bt);var x=ot.get(f);--x===0?(document.removeEventListener(f,bt),ot.delete(f)):ot.set(f,x)}hr.delete(u),br.delete(c),p!==r&&p.parentNode?.removeChild(p)}});return br.set(c,_),c}var br=new WeakMap;function wr(e){let t=br.get(e);t?t():!1}var Et=null;function me(e,t){return t}function oo(e,t,r,n){for(var i=[],o=t.length,s=0;s<o;s++)Lt(t[s].e,i,!0);var a=o>0&&i.length===0&&r!==null;if(a){var u=r.parentNode;_t(u),u.append(r),n.clear(),Re(e,t[0].prev,t[o-1].next)}dr(i,()=>{for(var c=0;c<o;c++){var _=t[c];a||(n.delete(_.k),Re(e,_.prev,_.next)),U(_.e,!a)}})}function ve(e,t,r,n,i,o=null){var s=e,a={flags:t,items:new Map,first:null},u=(t&4)!==0;if(u){var c=e;s=m?N(R(c)):c.appendChild(ee())}m&&M();var _=null,p=!1;H(()=>{var f=r(),x=le(f)?f:f==null?[]:ft(f),v=x.length;if(p&&v===0)return;p=v===0;let I=!1;if(m){var E=s.data===Ke;E!==(v===0)&&(s=Rt(),N(s),B(!1),I=!0)}if(m){for(var $=null,y,k=0;k<v;k++){if(h.nodeType===8&&h.data===Me){s=h,I=!0,B(!1);break}var w=x[k],T=n(w,k);y=Tn(h,a,$,null,w,T,k,i,t),a.items.set(T,y),$=y}v>0&&N(Rt())}if(!m){var Ht=b;io(x,a,s,i,t,(Ht.f&4096)!==0,n)}o!==null&&(v===0?_?tt(_):_=V(()=>o(s)):_!==null&&Ye(_,()=>{_=null})),I&&B(!0),r()}),m&&(s=h)}function io(e,t,r,n,i,o,s){var a=(i&8)!==0,u=(i&3)!==0,c=e.length,_=t.items,p=t.first,f=p,x,v=null,I,E=[],$=[],y,k,w,T;if(a)for(T=0;T<c;T+=1)y=e[T],k=s(y,T),w=_.get(k),w!==void 0&&(w.a?.measure(),(I??=new Set).add(w));for(T=0;T<c;T+=1){if(y=e[T],k=s(y,T),w=_.get(k),w===void 0){var Ht=f?f.e.nodes_start:r;v=Tn(Ht,t,v,v===null?t.first:v.next,y,k,T,n,i),_.set(k,v),E=[],$=[],f=v.next;continue}if(u&&so(w,y,T,i),w.e.f&4096&&(tt(w.e),a&&(w.a?.unfix(),(I??=new Set).delete(w))),w!==f){if(x!==void 0&&x.has(w)){if(E.length<$.length){var $t=$[0],we;v=$t.prev;var Cr=E[0],Vt=E[E.length-1];for(we=0;we<E.length;we+=1)En(E[we],$t,r);for(we=0;we<$.length;we+=1)x.delete($[we]);Re(t,Cr.prev,Vt.next),Re(t,v,Cr),Re(t,Vt,$t),f=$t,v=Vt,T-=1,E=[],$=[]}else x.delete(w),En(w,f,r),Re(t,w.prev,w.next),Re(t,w,v===null?t.first:v.next),Re(t,v,w),v=w;continue}for(E=[],$=[];f!==null&&f.k!==k;)(o||!(f.e.f&4096))&&(x??=new Set).add(f),$.push(f),f=f.next;if(f===null)continue;w=f}E.push(w),v=w,f=w.next}if(f!==null||x!==void 0){for(var at=x===void 0?[]:ft(x);f!==null;)(o||!(f.e.f&4096))&&at.push(f),f=f.next;var Wt=at.length;if(Wt>0){var Cn=i&4&&c===0?r:null;if(a){for(T=0;T<Wt;T+=1)at[T].a?.measure();for(T=0;T<Wt;T+=1)at[T].a?.fix()}oo(t,at,Cn,_)}}a&&_e(()=>{if(I!==void 0)for(w of I)w.a?.apply()}),d.first=t.first&&t.first.e,d.last=v&&v.e}function so(e,t,r,n){n&1&&lt(e.v,t),n&2?lt(e.i,r):e.i=r}function Tn(e,t,r,n,i,o,s,a,u){var c=Et,_=(u&1)!==0,p=(u&16)===0,f=_?p?Ce(i):ie(i):i,x=u&2?ie(s):s,v={i:x,v:f,k:o,a:null,e:null,prev:r,next:n};Et=v;try{return v.e=V(()=>a(e,f,x),m),v.e.prev=r&&r.e,v.e.next=n&&n.e,r===null?t.first=v:(r.next=v,r.e.next=v.e),n!==null&&(n.prev=v,n.e.prev=v.e),v}finally{Et=c}}function En(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==n;){var s=C(o);i.before(o),o=s}}function Re(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ao(e,t,r){if(!t||t===xn(String(r??"")))return;let n,i=e.__svelte_meta?.loc;i?n=`near ${i.file}:${i.line}:${i.column}`:q?.[z]&&(n=`in ${q[z]}`),Qr(n?.replace(/\//g,"/\u200B"))}function We(e,t,r,n,i){var o=e,s="",a;H(()=>{if(s===(s=t()??"")){m&&M();return}a!==void 0&&(U(a),a=void 0),s!==""&&(a=V(()=>{if(m){for(var u=h.data,c=M(),_=c;c!==null&&(c.nodeType!==8||c.data!=="");)_=c,c=C(c);if(c===null)throw Fe(),ye;!1,de(h,_),o=N(c);return}var p=s+"";r?p=`<svg>${p}</svg>`:n&&(p=`<math>${p}</math>`);var f=yt(p);if((r||n)&&(f=R(f)),de(R(f),f.lastChild),r||n)for(;R(f);)o.before(R(f));else o.before(f)}))})}function Sr(e,t,r,n){var i=e.__attributes??={};if(m&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")){n||_o(e,t,r??"");return}i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Mr]=r),r==null?e.removeAttribute(t):typeof r!="string"&&uo(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Sn=new Map;function uo(e){var t=Sn.get(e.nodeName);if(t)return t;Sn.set(e.nodeName,t=[]);for(var r,n=$e(e),i=Element.prototype;i!==n;){r=Tt(n);for(var o in r)r[o].set&&t.push(o);n=$e(n)}return t}function _o(e,t,r){!1}function Tr(e,t){return e===t?!0:new URL(e,document.baseURI).href===new URL(t,document.baseURI).href}function An(e){return e.split(",").map(t=>t.trim().split(" ").filter(Boolean))}function po(e,t){var r=An(e.srcset),n=An(t);return n.length===r.length&&n.every(([i,o],s)=>o===r[s][1]&&(Tr(r[s][0],i)||Tr(i,r[s][0])))}function Ar(e=!1){let t=g,r=t.l.u;if(!r)return;let n=()=>Yt(t.s);if(e){let i=0,o={},s=Ot(()=>{let a=!1,u=t.s;for(let c in u)u[c]!==o[c]&&(o[c]=u[c],a=!0);return a&&i++,i});n=()=>S(s)}r.b.length&&Ze(()=>{kn(t,n),ze(r.b)}),vt(()=>{let i=F(()=>r.m.map(Or));return()=>{for(let o of i)typeof o=="function"&&o()}}),r.a.length&&vt(()=>{kn(t,n),ze(r.a)})}function kn(e,t){if(e.l.s)for(let r of e.l.s)S(r);t()}function Nn(e){return new kr(e)}var kr=class{#t;#e;constructor(t){var r=new Map,n=(o,s)=>{var a=Ce(s);return r.set(o,a),a};let i=new Proxy({...t.props||{},$$events:{}},{get(o,s){return S(r.get(s)??n(s,Reflect.get(o,s)))},has(o,s){return s===zt?!0:(S(r.get(s)??n(s,Reflect.get(o,s))),Reflect.has(o,s))},set(o,s,a){return ge(r.get(s)??n(s,a),a),Reflect.set(o,s,a)}});this.#e=(t.hydrate?yr:it)(t.component,{target:t.target,anchor:t.anchor,props:i,context:t.context,intro:t.intro??!1,recover:t.recover}),(!t?.props?.$$host||t.sync===!1)&&nt(),this.#t=i.$$events;for(let o of Object.keys(this.#e))o==="$set"||o==="$destroy"||o==="$on"||W(this,o,{get(){return this.#e[o]},set(s){this.#e[o]=s},enumerable:!0});this.#e.$set=o=>{Object.assign(i,o)},this.#e.$destroy=()=>{wr(this.#e)}}$set(t){this.#e.$set(t)}$on(t,r){this.#t[t]=this.#t[t]||[];let n=(...i)=>r.call(this,...i);return this.#t[t].push(n),()=>{this.#t[t]=this.#t[t].filter(i=>i!==n)}}$destroy(){this.#e.$destroy()}};var No;typeof HTMLElement=="function"&&(No=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(e,t,r){super(),this.$$ctor=e,this.$$s=t,r&&this.attachShadow({mode:"open"})}addEventListener(e,t,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,r)}removeEventListener(e,t,r){if(super.removeEventListener(e,t,r),this.$$c){let n=this.$$l_u.get(t);n&&(n(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(n){return i=>{let o=document.createElement("slot");n!=="default"&&(o.name=n),K(i,o)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},r=Ro(this);for(let n of this.$$s)n in r&&(n==="default"&&!this.$$d.children?(this.$$d.children=e(n),t.default=!0):t[n]=e(n));for(let n of this.attributes){let i=this.$$g_p(n.name);i in this.$$d||(this.$$d[i]=Nr(i,n.value,this.$$p_d,"toProp"))}for(let n in this.$$p_d)!(n in this.$$d)&&this[n]!==void 0&&(this.$$d[n]=this[n],delete this[n]);this.$$c=Nn({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=ht(()=>{j(()=>{this.$$r=!0;for(let n of Gt(this.$$c)){if(!this.$$p_d[n]?.reflect)continue;this.$$d[n]=this.$$c[n];let i=Nr(n,this.$$d[n],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[n].attribute||n):this.setAttribute(this.$$p_d[n].attribute||n,i)}this.$$r=!1})});for(let n in this.$$l)for(let i of this.$$l[n]){let o=this.$$c.$on(n,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(e,t,r){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Nr(e,r,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Gt(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Nr(e,t,r,n){let i=r[e]?.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Ro(e){let t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}var In="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(In);Wr();var Ge={name:"\u0412\u043E\u043B\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",bio:['\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434, \u0420\u043E\u0441\u0441\u0438\u044F<br /><a href="mailto: valext@gmail.com">valexr@gmail.com</a>',"<h1>\u0412\u043E\u043B\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440</h1><small>FullStack WebDev with Design background</small>",'<a href="https://github.com/Valexr">github.com</a><br /><a href="https://t.me/Valexr">t.me</a>'],skills:[{head:["<strong>Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A <br />(Senior)</strong>",`<strong><a href="https://knightsoftheeditingtable.com/">KnightsOfTheEditingTable</a></strong><br />
                <small>\u041F\u043B\u0430\u0433\u0438\u043D\u044B \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 Adobe. \u0420\u043E\u0441\u0441\u0438\u044F.</small>`,"<strong>2023 \u2014 2024</strong>"],list:["\u0421\u043E\u0431\u0440\u0430\u043B \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043A\u0430\u043A DevOps \u043D\u0430 Esbuild + nodeJS + Svelte \u0441 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u043C\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430\u043C\u0438. \u0412 \u0438\u0442\u043E\u0433\u0435 \u0447\u0442\u043E\u0431 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 - \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 1 \u043F\u0430\u043A\u0435\u0442 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C setup","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043D\u043E\u0432\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u0438 \u043C\u043E\u0434\u0435\u043B\u044C \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432","\u0421\u043E\u0437\u0434\u0430\u043B UIKIT \u0438 \u043D\u0430\u0431\u043E\u0440 \u0445\u0435\u043B\u043F\u0435\u0440\u043E\u0432 \u0438 \u0443\u0442\u0438\u043B\u0438\u0442","\u0421\u043E\u0437\u0434\u0430\u043B 3 \u043D\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0442\u0435\u043A\u0435 + Adobe ExtendScript + Svelte","\u041C\u0438\u0433\u0440\u0438\u0440\u043E\u0432\u0430\u043B 7 \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432 \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u043B \u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B"]},{head:["<strong>Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A <br />(Middle)</strong>",`<strong><a href="https://p2pcloud.io">P2PCloud</a></strong><br />
                <small>\u0414\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0445\u043E\u0441\u0442\u0438\u043D\u0433. \u041A\u0430\u043B\u0438\u0444\u043E\u0440\u043D\u0438\u044F.</small>`,"<strong>2021 \u2014 2023</strong>"],list:["\u0421\u043E\u0431\u0440\u0430\u043B \u043F\u0440\u043E\u043C\u043E-\u0441\u0430\u0439\u0442","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B GUI \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F","\u041D\u0430\u043F\u0438\u0441\u0430\u043B BFF \u0430\u043F\u0438-\u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043B\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0442\u0438\u044F GUI \u0441 Etherium-\u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u043C (\u0431\u044D\u043A\u0435\u043D\u0434)","\u041D\u0430\u043F\u0438\u0441\u0430\u043B \u0438 \u043F\u043E\u043A\u0440\u044B\u043B \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u043D\u0430 Solidity \u0434\u043B\u044F Etherium"]},{head:["<strong>Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A<br />(Middle)</strong>",`<strong><a href="https://github.com/basf/metis-gui">Metis</a></strong><br />
                <small>\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F BASF. \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F.</small>`,"<strong>2019 \u2014 2021</strong>"],list:['\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B <a href="https://kit.metis.science/">UIKit</a> \u043D\u0430 \u0431\u0430\u0437\u0435 CSS \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 spectre.css \u0438 js-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 Svelte','\u0421\u043E\u0431\u0440\u0430\u043B <a href="https://github.com/basf/metis-gui">GUI</a> \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438',"\u0421\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u0439\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043D\u0430 SvelteKit + MarkDown"]},{head:["<strong>\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440. Web-dev.<br />(Freelance)</strong>","<small>\u0421\u0430\u043C\u043E\u0437\u0430\u043D\u044F\u0442\u044B\u0439. \u0420\u043E\u0441\u0441\u0438\u044F.</small>","<strong>2015 \u2014 2019</strong>"],list:["\u0421\u043E\u0431\u0440\u0430\u043B \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043B 12 \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0435 \u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E/\u043C\u0430\u043B\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430","\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u043B \u0438 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043B 15 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u0432","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B 5 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439"]},{head:["<strong>\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440. Web-dev.</strong>",`<strong><a href="https://aquario.ru/">Aquario</a></strong><br />
                <small>\u0421\u0438\u0442\u0435\u043C\u044B \u0432\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F. \u0420\u043E\u0441\u0441\u0438\u044F.</small>`,"<strong>2014 \u2014 2015</strong>"],list:["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0438 \u0441\u043E\u0431\u0440\u0430\u043B \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0441\u043E\u0431\u0440\u0430\u043B \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043D\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438","\u041E\u0442\u0441\u043D\u044F\u043B \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u0444\u043E\u0442\u043E\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0434\u043B\u044F \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430"]}],docs:["<strong>\u0421\u0430\u043C\u043E\u0443\u0447\u043A\u0430</strong>","<strong>2001 \u2014 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</strong>"],tech:["\u042F\u0437\u044B\u043A\u0438: HTML, CSS, JS/TS, PHP, Go, Solidity","\u0424\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438: Svelte, React, Solid, Vue","\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: NPM, NodeJS, Docker, Git","\u0411\u0430\u0437\u044B: MySQL, Postgres, Mongo, Redis","\u0414\u0440\u0443\u0433\u043E\u0435: \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B Etherium \u043D\u0430 Solidity"],porto:["https://valexr.github.io/Tetrix","https://valexr.github.io/Snaky","https://valexr.github.io/Tagy","https://valexr.github.io/Notty","https://valexr.github.io/county"]};var Po=fe("<li><!></li>"),Bo=fe("<li><!></li>"),qo=fe('<article class="svelte-1c7qbwe"><ul class="inline"></ul> <ul></ul></article>');function Rr(e,t){He(t,!0);var r=qo(),n=D(r);ve(n,21,()=>t.skill.head,me,(o,s)=>{var a=Po(),u=D(a);We(u,()=>S(s),!1,!1),A(a),K(o,a)}),A(n);var i=J(n,2);ve(i,21,()=>t.skill.list,me,(o,s)=>{var a=Bo(),u=D(a);We(u,()=>S(s),!1,!1),A(a),K(o,a)}),A(i),A(r),K(e,r),Ve()}var Yo=fe("<p><!></p>"),Uo=fe("<li><!></li>"),Ho=fe("<li> </li>"),Vo=fe("<li><a> </a></li>"),Wo=fe('<header></header> <main><section><h2>\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B</h2> <!></section> <section><h2>\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B</h2> <ul class="inline"></ul></section> <section><h2>\u042F\u0437\u044B\u043A\u0438 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438</h2> <ul></ul></section> <section><h2>\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</h2> <ul></ul></section></main> <footer><p> </p></footer>',1);function Ir(e,t){He(t,!1),Ar(!0);var r=Wo();xr(E=>{et(()=>It.title=Ge.name)});var n=er(r);ve(n,5,()=>Ge.bio,me,(E,$)=>{var y=Yo(),k=D(y);We(k,()=>S($),!1,!1),A(y),K(E,y)}),A(n);var i=J(n,2),o=D(i),s=J(D(o),2);ve(s,1,()=>Ge.skills,me,(E,$)=>{Rr(E,{get skill(){return S($)}})}),A(o);var a=J(o,2),u=J(D(a),2);ve(u,5,()=>Ge.docs,me,(E,$)=>{var y=Uo(),k=D(y);We(k,()=>S($),!1,!1),A(y),K(E,y)}),A(u),A(a);var c=J(a,2),_=J(D(c),2);ve(_,5,()=>Ge.tech,me,(E,$)=>{var y=Ho(),k=D(y,!0);A(y),et(()=>wt(k,S($))),K(E,y)}),A(_),A(c);var p=J(c,2),f=J(D(p),2);ve(f,5,()=>Ge.porto,me,(E,$)=>{var y=Vo(),k=D(y),w=D(k,!0);A(k),A(y),et(()=>{Sr(k,"href",S($)),wt(w,S($))}),K(E,y)}),A(f),A(p),A(i);var x=J(i,2),v=D(x),I=D(v);et(()=>wt(I,`\xA9 ${new Date().getFullYear()??""}`)),A(v),A(x),K(e,r),Ve()}var cv=it(Ir,{target:document.body});export{cv as default};
