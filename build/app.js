function m(){}function rt(e){return e()}function U(){return Object.create(null)}function F(e){e.forEach(rt)}function H(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t}function mt(e){return Object.keys(e).length===0}var ot=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var J=class e{_listeners="WeakMap"in ot?new WeakMap:void 0;_observer=void 0;options;constructor(t){this.options=t}observe(t,n){return this._listeners.set(t,n),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(t=>{for(let n of t)e.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};J.entries="WeakMap"in ot?new WeakMap:void 0;var xt=!1;function gt(){xt=!0}function $t(){xt=!1}function p(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function It(e){return document.createTextNode(e)}function v(){return It(" ")}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function bt(e){return Array.from(e.childNodes)}function yt(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}var L;function k(e){L=e}var T=[];var vt=[],I=[],Ft=[],zt=Promise.resolve(),st=!1;function kt(){st||(st=!0,zt.then(Q))}function W(e){I.push(e)}var it=new Set,N=0;function Q(){if(N!==0)return;let e=L;do{try{for(;N<T.length;){let t=T[N];N++,k(t),Gt(t.$$)}}catch(t){throw T.length=0,N=0,t}for(k(null),T.length=0,N=0;vt.length;)vt.pop()();for(let t=0;t<I.length;t+=1){let n=I[t];it.has(n)||(it.add(n),n())}I.length=0}while(T.length);for(;Ft.length;)Ft.pop()();st=!1,it.clear(),k(e)}function Gt(e){if(e.fragment!==null){e.update(),F(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function Et(e){let t=[],n=[];I.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),I=t}var X=new Set,Ut;function j(e,t){e&&e.i&&(X.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(X.has(e))return;X.add(e),Ut.c.push(()=>{X.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function y(e){return e?.length!==void 0?e:Array.from(e)}var Ht=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Vt=new Set([...Ht]);function St(e){e&&e.c()}function ct(e,t,n){let{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),W(()=>{let c=e.$$.on_mount.map(rt).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...c):F(c),e.$$.on_mount=[]}),o.forEach(W)}function ut(e,t){let n=e.$$;n.fragment!==null&&(Et(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(e,t){e.$$.dirty[0]===-1&&(T.push(e),kt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,r,o,c,u=null,x=[-1]){let a=L;k(e);let i=e.$$={fragment:null,ctx:[],props:c,update:m,not_equal:o,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:U(),dirty:x,skip_bound:!1,root:t.target||a.$$.root};u&&u(i.root);let g=!1;if(i.ctx=n?n(e,t.props||{},(l,w,...M)=>{let R=M.length?M[0]:w;return i.ctx&&o(i.ctx[l],i.ctx[l]=R)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](R),g&&Qt(e,l)),w}):[],i.update(),g=!0,F(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){gt();let l=bt(t.target);i.fragment&&i.fragment.l(l),l.forEach(_)}else i.fragment&&i.fragment.c();t.intro&&j(e.$$.fragment),ct(e,t.target,t.anchor),$t(),Q()}k(a)}var Xt;typeof HTMLElement=="function"&&(Xt=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let c;return{c:function(){c=f("slot"),o!=="default"&&S(c,"name",o)},m:function(a,i){h(a,c,i)},d:function(a){a&&_(c)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},n=yt(this);for(let o of this.$$s)o in n&&(t[o]=[e(o)]);for(let o of this.attributes){let c=this.$$g_p(o.name);c in this.$$d||(this.$$d[c]=lt(c,o.value,this.$$p_d,"toProp"))}for(let o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});let r=()=>{this.$$r=!0;for(let o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){let c=lt(o,this.$$d[o],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,c)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(let o in this.$$l)for(let c of this.$$l[o]){let u=this.$$c.$on(o,c);this.$$l_u.set(c,u)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=lt(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function lt(e,t,n,r){let o=n[e]?.type;if(t=o==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(o){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}var D=class{$$=void 0;$$set=void 0;$destroy(){ut(this,1),this.$destroy=m}$on(t,n){if(!H(n))return m;let r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!mt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var Mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Mt);function Ot(e,t,n){let r=e.slice();return r[1]=t[n],r}function Ct(e,t,n){let r=e.slice();return r[4]=t[n],r}function At(e){let t,n=e[4]+"";return{c(){t=f("li")},m(r,o){h(r,t,o),t.innerHTML=n},p(r,o){o&1&&n!==(n=r[4]+"")&&(t.innerHTML=n)},d(r){r&&_(t)}}}function Tt(e){let t,n=e[1]+"";return{c(){t=f("li")},m(r,o){h(r,t,o),t.innerHTML=n},p(r,o){o&1&&n!==(n=r[1]+"")&&(t.innerHTML=n)},d(r){r&&_(t)}}}function Zt(e){let t,n,r,o,c=y(e[0].head),u=[];for(let i=0;i<c.length;i+=1)u[i]=At(Ct(e,c,i));let x=y(e[0].list),a=[];for(let i=0;i<x.length;i+=1)a[i]=Tt(Ot(e,x,i));return{c(){t=f("article"),n=f("ul");for(let i=0;i<u.length;i+=1)u[i].c();r=v(),o=f("ul");for(let i=0;i<a.length;i+=1)a[i].c();S(n,"class","inline"),S(t,"class","svelte-1c7qbwe")},m(i,g){h(i,t,g),p(t,n);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(n,null);p(t,r),p(t,o);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(o,null)},p(i,[g]){if(g&1){c=y(i[0].head);let l;for(l=0;l<c.length;l+=1){let w=Ct(i,c,l);u[l]?u[l].p(w,g):(u[l]=At(w),u[l].c(),u[l].m(n,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=c.length}if(g&1){x=y(i[0].list);let l;for(l=0;l<x.length;l+=1){let w=Ot(i,x,l);a[l]?a[l].p(w,g):(a[l]=Tt(w),a[l].c(),a[l].m(o,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=x.length}},i:m,o:m,d(i){i&&_(t),E(u,i),E(a,i)}}}function Kt(e,t,n){let{skill:r}=t;return e.$$set=o=>{"skill"in o&&n(0,r=o.skill)},[r]}var at=class extends D{constructor(t){super(),Z(this,t,Kt,Zt,V,{skill:0})}},jt=at;var P={name:"\u0412\u043E\u043B\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",bio:['\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434, \u0420\u043E\u0441\u0441\u0438\u044F<br /><a href="mailto: valext@gmail.com">valexr@gmail.com</a>',"<h1>\u0412\u043E\u043B\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440</h1><small>Fullstack Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u043C \u0431\u044D\u043A\u0433\u0440\u0430\u0443\u043D\u0434\u043E\u043C</small>",'<a href="https://github.com/Valexr">github.com/Valexr</a><br /><a href="https://t.me/Valexr">@Valexr</a>'],skills:[{head:["<strong>Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A <br />(Senior)</strong>",`<strong><a href="https://knightsoftheeditingtable.com/">KnightsOfTheEditingTable</a></strong><br />
                <small>\u041F\u043B\u0430\u0433\u0438\u043D\u044B \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 Adobe. \u0420\u043E\u0441\u0441\u0438\u044F.</small>`,"<strong>\u0438\u044E\u043D\u044C 2023 <br> \u2014 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</strong>"],list:["\u0421\u043E\u0431\u0440\u0430\u043B \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B \u0441 \u043D\u0443\u043B\u044F \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043A\u0430\u043A DevOps \u043D\u0430 Esbuild + nodeJS + Svelte \u0441 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u043C\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430\u043C\u0438. \u0412 \u0438\u0442\u043E\u0433\u0435 \u0447\u0442\u043E\u0431 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 - \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0431\u044B\u043B\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u043F\u0430\u043F\u043A\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 1 \u043F\u0430\u043A\u0435\u0442 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C setup","\u0421\u043E\u0437\u0434\u0430\u043B 3 \u043D\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0442\u0435\u043A\u0435 + Adobe ExtendScript + Svelte","\u041C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u043B 7 \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432"]},{head:["<strong>Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A <br />(Middle)</strong>",`<strong><a href="https://p2pcloud.io">P2PCloud</a></strong><br />
                <small>\u0414\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0445\u043E\u0441\u0442\u0438\u043D\u0433. \u041A\u0430\u043B\u0438\u0444\u043E\u0440\u043D\u0438\u044F.</small>`,"<strong>2021 \u2014 2023</strong>"],list:["\u0421\u043E\u0431\u0440\u0430\u043B \u043F\u0440\u043E\u043C\u043E-\u0441\u0430\u0439\u0442","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B GUI \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F","\u041D\u0430\u043F\u0438\u0441\u0430\u043B BFF \u0430\u043F\u0438-\u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043B\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0442\u0438\u044F GUI \u0441 Etherium-\u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u043C (\u0431\u044D\u043A\u0435\u043D\u0434)","\u041D\u0430\u043F\u0438\u0441\u0430\u043B \u0438 \u043F\u043E\u043A\u0440\u044B\u043B \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u043D\u0430 Solidity \u0434\u043B\u044F Etherium"]},{head:["<strong>Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A<br />(Middle)</strong>",`<strong><a href="https://github.com/basf/metis-gui">Metis</a></strong><br />
                <small>\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F BASF. \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F.</small>`,"<strong>2019 \u2014 2021</strong>"],list:['\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B <a href="https://kit.metis.science/">UIKit</a> \u043D\u0430 \u0431\u0430\u0437\u0435 CSS \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 spectre.css \u0438 js-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 Svelte','\u0421\u043E\u0431\u0440\u0430\u043B <a href="https://github.com/basf/metis-gui">GUI</a> \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438',"\u0421\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u0439\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043D\u0430 SvelteKit + MarkDown"]},{head:["<strong>\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440. Web-dev.<br />(Freelance)</strong>","<small>\u0421\u0430\u043C\u043E\u0437\u0430\u043D\u044F\u0442\u044B\u0439. \u0420\u043E\u0441\u0441\u0438\u044F.</small>","<strong>2015 \u2014 2019</strong>"],list:["\u0421\u043E\u0431\u0440\u0430\u043B \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043B 12 \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0435 \u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E/\u043C\u0430\u043B\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430","\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u043B \u0438 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043B 15 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u0432","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B 5 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439"]},{head:["<strong>\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440. Web-dev.</strong>",`<strong><a href="https://aquario.ru/">Aquario</a></strong><br />
                <small>\u0421\u0438\u0442\u0435\u043C\u044B \u0432\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F. \u0420\u043E\u0441\u0441\u0438\u044F.</small>`,"<strong>2014 \u2014 2015</strong>"],list:["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0438 \u0441\u043E\u0431\u0440\u0430\u043B \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0441\u043E\u0431\u0440\u0430\u043B \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043D\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438","\u041E\u0442\u0441\u043D\u044F\u043B \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u0444\u043E\u0442\u043E\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0434\u043B\u044F \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430"]}],docs:["<strong>\u0421\u0430\u043C\u043E\u0443\u0447\u043A\u0430</strong>","<strong>2001 \u2014 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</strong>"],tech:["\u042F\u0437\u044B\u043A\u0438: HTML, CSS, JS/TS, PHP, Go, Solidity","\u0424\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438: Svelte, React, Solid, Vue","\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: NPM, NodeJS, Docker, Git","\u0411\u0430\u0437\u044B: MySQL, Postgres, Mongo, Redis","\u0414\u0440\u0443\u0433\u043E\u0435: \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B Etherium \u043D\u0430 Solidity"]};function Yt(e,t,n){let r=e.slice();return r[0]=t[n],r}function te(e,t,n){let r=e.slice();return r[3]=t[n],r}function ee(e,t,n){let r=e.slice();return r[6]=t[n],r}function ne(e,t,n){let r=e.slice();return r[9]=t[n],r}function re(e){let t;return{c(){t=f("p")},m(n,r){h(n,t,r),t.innerHTML=e[9]},p:m,d(n){n&&_(t)}}}function oe(e){let t,n;return t=new jt({props:{skill:e[6]}}),{c(){St(t.$$.fragment)},m(r,o){ct(t,r,o),n=!0},p:m,i(r){n||(j(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){ut(t,r)}}}function ie(e){let t;return{c(){t=f("li")},m(n,r){h(n,t,r),t.innerHTML=e[3]},p:m,d(n){n&&_(t)}}}function se(e){let t;return{c(){t=f("li"),t.textContent=`${e[0]}`},m(n,r){h(n,t,r)},p:m,d(n){n&&_(t)}}}function le(e){let t,n,r,o,c,u,x,a,i,g,l,w,M,R,B,K,pt,Y,tt,z,et,G;document.title=t=P.name;let dt=y(P.bio),O=[];for(let s=0;s<dt.length;s+=1)O[s]=re(ne(e,dt,s));let nt=y(P.skills),b=[];for(let s=0;s<nt.length;s+=1)b[s]=oe(ee(e,nt,s));let _t=y(P.docs),C=[];for(let s=0;s<_t.length;s+=1)C[s]=ie(te(e,_t,s));let ht=y(P.tech),A=[];for(let s=0;s<ht.length;s+=1)A[s]=se(Yt(e,ht,s));return{c(){n=v(),r=f("header");for(let s=0;s<O.length;s+=1)O[s].c();o=v(),c=f("main"),u=f("section"),x=f("h2"),x.textContent="\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",a=v();for(let s=0;s<b.length;s+=1)b[s].c();i=v(),g=f("section"),l=f("h2"),l.textContent="\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",w=v(),M=f("ul");for(let s=0;s<C.length;s+=1)C[s].c();R=v(),B=f("section"),K=f("h2"),K.textContent="\u042F\u0437\u044B\u043A\u0438 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",pt=v(),Y=f("ul");for(let s=0;s<A.length;s+=1)A[s].c();tt=v(),z=f("footer"),et=f("p"),et.textContent=`\xA9 ${new Date().getFullYear()}`,S(M,"class","inline")},m(s,$){h(s,n,$),h(s,r,$);for(let d=0;d<O.length;d+=1)O[d]&&O[d].m(r,null);h(s,o,$),h(s,c,$),p(c,u),p(u,x),p(u,a);for(let d=0;d<b.length;d+=1)b[d]&&b[d].m(u,null);p(c,i),p(c,g),p(g,l),p(g,w),p(g,M);for(let d=0;d<C.length;d+=1)C[d]&&C[d].m(M,null);p(c,R),p(c,B),p(B,K),p(B,pt),p(B,Y);for(let d=0;d<A.length;d+=1)A[d]&&A[d].m(Y,null);h(s,tt,$),h(s,z,$),p(z,et),G=!0},p:m,i(s){if(!G){for(let $=0;$<nt.length;$+=1)j(b[$]);G=!0}},o(s){b=b.filter(Boolean);for(let $=0;$<b.length;$+=1)q(b[$]);G=!1},d(s){s&&(_(n),_(r),_(o),_(c),_(tt),_(z)),E(O,s),E(b,s),E(C,s),E(A,s)}}}function ce(e){"use strict";return[]}var ft=class extends D{constructor(t){super(),Z(this,t,ce,le,V,{})}},Dt=ft;var ur=new Dt({target:document.body});export{ur as default};
