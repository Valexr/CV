function x(){}function ot(e){return e()}function H(){return Object.create(null)}function F(e){e.forEach(ot)}function J(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t}function $t(e){return Object.keys(e).length===0}var it=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var Q=class e{_listeners="WeakMap"in it?new WeakMap:void 0;_observer=void 0;options;constructor(t){this.options=t}observe(t,n){return this._listeners.set(t,n),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(t=>{for(let n of t)e.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};Q.entries="WeakMap"in it?new WeakMap:void 0;var gt=!1;function bt(){gt=!0}function yt(){gt=!1}function p(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function Pt(e){return document.createTextNode(e)}function w(){return Pt(" ")}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function wt(e){return Array.from(e.childNodes)}function vt(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}var L;function k(e){L=e}var j=[];var kt=[],I=[],Et=[],Ut=Promise.resolve(),ct=!1;function St(){ct||(ct=!0,Ut.then(X))}function W(e){I.push(e)}var st=new Set,N=0;function X(){if(N!==0)return;let e=L;do{try{for(;N<j.length;){let t=j[N];N++,k(t),Ht(t.$$)}}catch(t){throw j.length=0,N=0,t}for(k(null),j.length=0,N=0;kt.length;)kt.pop()();for(let t=0;t<I.length;t+=1){let n=I[t];st.has(n)||(st.add(n),n())}I.length=0}while(j.length);for(;Et.length;)Et.pop()();ct=!1,st.clear(),k(e)}function Ht(e){if(e.fragment!==null){e.update(),F(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function Ot(e){let t=[],n=[];I.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),I=t}var Z=new Set,Jt;function A(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(Z.has(e))return;Z.add(e),Jt.c.push(()=>{Z.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function v(e){return e?.length!==void 0?e:Array.from(e)}var Vt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Qt=new Set([...Vt]);function Mt(e){e&&e.c()}function ut(e,t,n){let{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),W(()=>{let l=e.$$.on_mount.map(ot).filter(J);e.$$.on_destroy?e.$$.on_destroy.push(...l):F(l),e.$$.on_mount=[]}),o.forEach(W)}function at(e,t){let n=e.$$;n.fragment!==null&&(Ot(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Zt(e,t){e.$$.dirty[0]===-1&&(j.push(e),St(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,r,o,l,a=null,$=[-1]){let u=L;k(e);let s=e.$$={fragment:null,ctx:[],props:l,update:x,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:H(),dirty:$,skip_bound:!1,root:t.target||u.$$.root};a&&a(s.root);let b=!1;if(s.ctx=n?n(e,t.props||{},(c,g,...D)=>{let P=D.length?D[0]:g;return s.ctx&&o(s.ctx[c],s.ctx[c]=P)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](P),b&&Zt(e,c)),g}):[],s.update(),b=!0,F(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){bt();let c=wt(t.target);s.fragment&&s.fragment.l(c),c.forEach(_)}else s.fragment&&s.fragment.c();t.intro&&A(e.$$.fragment),ut(e,t.target,t.anchor),yt(),X()}k(u)}var Kt;typeof HTMLElement=="function"&&(Kt=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let l;return{c:function(){l=f("slot"),o!=="default"&&S(l,"name",o)},m:function(u,s){h(u,l,s)},d:function(u){u&&_(l)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},n=vt(this);for(let o of this.$$s)o in n&&(t[o]=[e(o)]);for(let o of this.attributes){let l=this.$$g_p(o.name);l in this.$$d||(this.$$d[l]=lt(l,o.value,this.$$p_d,"toProp"))}for(let o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});let r=()=>{this.$$r=!0;for(let o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){let l=lt(o,this.$$d[o],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,l)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(let o in this.$$l)for(let l of this.$$l[o]){let a=this.$$c.$on(o,l);this.$$l_u.set(l,a)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=lt(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function lt(e,t,n,r){let o=n[e]?.type;if(t=o==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(o){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}var T=class{$$=void 0;$$set=void 0;$destroy(){at(this,1),this.$destroy=x}$on(t,n){if(!J(n))return x;let r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!$t(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var Ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ct);function jt(e,t,n){let r=e.slice();return r[1]=t[n],r}function At(e,t,n){let r=e.slice();return r[4]=t[n],r}function Tt(e){let t,n=e[4]+"";return{c(){t=f("li")},m(r,o){h(r,t,o),t.innerHTML=n},p(r,o){o&1&&n!==(n=r[4]+"")&&(t.innerHTML=n)},d(r){r&&_(t)}}}function Dt(e){let t,n=e[1]+"";return{c(){t=f("li")},m(r,o){h(r,t,o),t.innerHTML=n},p(r,o){o&1&&n!==(n=r[1]+"")&&(t.innerHTML=n)},d(r){r&&_(t)}}}function Yt(e){let t,n,r,o,l=v(e[0].head),a=[];for(let s=0;s<l.length;s+=1)a[s]=Tt(At(e,l,s));let $=v(e[0].list),u=[];for(let s=0;s<$.length;s+=1)u[s]=Dt(jt(e,$,s));return{c(){t=f("article"),n=f("ul");for(let s=0;s<a.length;s+=1)a[s].c();r=w(),o=f("ul");for(let s=0;s<u.length;s+=1)u[s].c();S(n,"class","inline"),S(t,"class","svelte-1c7qbwe")},m(s,b){h(s,t,b),p(t,n);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(n,null);p(t,r),p(t,o);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(o,null)},p(s,[b]){if(b&1){l=v(s[0].head);let c;for(c=0;c<l.length;c+=1){let g=At(s,l,c);a[c]?a[c].p(g,b):(a[c]=Tt(g),a[c].c(),a[c].m(n,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=l.length}if(b&1){$=v(s[0].list);let c;for(c=0;c<$.length;c+=1){let g=jt(s,$,c);u[c]?u[c].p(g,b):(u[c]=Dt(g),u[c].c(),u[c].m(o,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=$.length}},i:x,o:x,d(s){s&&_(t),E(a,s),E(u,s)}}}function te(e,t,n){let{skill:r}=t;return e.$$set=o=>{"skill"in o&&n(0,r=o.skill)},[r]}var ft=class extends T{constructor(t){super(),K(this,t,te,Yt,V,{skill:0})}},Lt=ft;var R={bio:[' \u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434, \u0420\u043E\u0441\u0441\u0438\u044F<br /><a href="mailto: valext@gmail.com">valexr@gmail.com</a>',"<h1>\u0412\u043E\u043B\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440</h1>",'<a href="https://github.com/Valexr">github.com/Valexr</a>'],job:"Fullstack Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A.",skills:[{head:["Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A <br />(Senior)",`<strong><a href="https://knightsoftheeditingtable.com/">KnightsOfTheEditingTable</a></strong>
                <br />\u041F\u043B\u0430\u0433\u0438\u043D\u044B \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 Adobe. <br /> \u0420\u043E\u0441\u0441\u0438\u044F.`,"\u0438\u044E\u043D\u044C 2023 <br> \u2014 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"],list:["\u041F\u043B\u0430\u0433\u0438\u043D\u044B \u0434\u043B\u044F \u0410\u0434\u043E\u0431 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0442\u0435\u043A\u0435 + Adobe ExtendScript","\u0421\u043E\u0431\u0440\u0430\u043B \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B \u0441 \u043D\u0443\u043B\u044F \u0432\u0441\u0451 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043A\u0430\u043A devops \u043D\u0430 esbuild+nodejs+svelte \u0441 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u043C\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430\u043C\u0438. \u0412 \u0438\u0442\u043E\u0433\u0435 \u0447\u0442\u043E\u0431 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 - \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0431\u044B\u043B\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u043F\u0430\u043F\u043A\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 1 \u043F\u0430\u043A\u0435\u0442 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C setup"]},{head:["Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A <br />(Middle)",`<strong><a href="https://p2pcloud.io">P2PCloud</a></strong>
                <br />\u0414\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0445\u043E\u0441\u0442\u0438\u043D\u0433.<br />\u041A\u0430\u043B\u0438\u0444\u043E\u0440\u043D\u0438\u044F.`,"2021 \u2014 2023"],list:["\u0421\u043E\u0431\u0440\u0430\u043B \u043F\u0440\u043E\u043C\u043E-\u0441\u0430\u0439\u0442","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B GUI \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u0434\u0440\u0443\u0436\u0438\u043B \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u043C (\u0431\u044D\u043A\u0435\u043D\u0434)","\u041D\u0430\u043F\u0438\u0441\u0430\u043B \u0438 \u043F\u043E\u043A\u0440\u044B\u043B \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u043D\u0430 Solidity \u0434\u043B\u044F Etherium"]},{head:["Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A <br />(Middle)",`<strong><a href="https://github.com/basf/metis-gui">Metis</a></strong>
                <br />\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F BASF.<br />\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F.`,"2019 \u2014 2021"],list:['\u0421\u043E\u0431\u0440\u0430\u043B <a href="https://kit.metis.science/">UIKit</a> \u043D\u0430 \u0431\u0430\u0437\u0435 CSS \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 spectre.css \u0438 js-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 Svelte','\u0421\u043E\u0431\u0440\u0430\u043B <a href="https://github.com/basf/metis-gui">GUI</a> \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438',"\u0421\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u0439\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043D\u0430 SvelteKit"]}],docs:["\u0421\u0430\u043C\u043E\u0443\u0447\u043A\u0430","2001 \u2014 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"],tech:["\u042F\u0437\u044B\u043A\u0438: HTML, CSS, JS/TS, Go, Solidity","\u0424\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438: Svelte, React, Solid, Vue","\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: NodeJS, Docker, Git","\u0411\u0430\u0437\u044B: MySQL, Postgres, Mongo, Redis","\u0414\u0440\u0443\u0433\u043E\u0435: \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B Etherium \u043D\u0430 Solidity"]};function ee(e,t,n){let r=e.slice();return r[1]=t[n],r}function ne(e,t,n){let r=e.slice();return r[4]=t[n],r}function re(e,t,n){let r=e.slice();return r[7]=t[n],r}function oe(e,t,n){let r=e.slice();return r[10]=t[n],r}function ie(e){let t;return{c(){t=f("p")},m(n,r){h(n,t,r),t.innerHTML=e[10]},p:x,d(n){n&&_(t)}}}function se(e){let t,n;return t=new Lt({props:{skill:e[7]}}),{c(){Mt(t.$$.fragment)},m(r,o){ut(t,r,o),n=!0},p:x,i(r){n||(A(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){at(t,r)}}}function ce(e){let t;return{c(){t=f("li"),t.textContent=`${e[4]}`},m(n,r){h(n,t,r)},p:x,d(n){n&&_(t)}}}function le(e){let t;return{c(){t=f("li"),t.textContent=`${e[1]}`},m(n,r){h(n,t,r)},p:x,d(n){n&&_(t)}}}function ue(e){let t,n,r,o,l,a,$,u,s,b,c,g,D,P,G,dt,B,Y,_t,tt,et,U,nt,z;document.title=t=e[0];let ht=v(R.bio),O=[];for(let i=0;i<ht.length;i+=1)O[i]=ie(oe(e,ht,i));let rt=v(R.skills),y=[];for(let i=0;i<rt.length;i+=1)y[i]=se(re(e,rt,i));let mt=v(R.docs),M=[];for(let i=0;i<mt.length;i+=1)M[i]=ce(ne(e,mt,i));let xt=v(R.tech),C=[];for(let i=0;i<xt.length;i+=1)C[i]=le(ee(e,xt,i));return{c(){n=w(),r=f("header");for(let i=0;i<O.length;i+=1)O[i].c();o=w(),l=f("main"),a=f("p"),a.textContent=`${R.job}`,$=w(),u=f("section"),s=f("h2"),s.textContent="\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",b=w();for(let i=0;i<y.length;i+=1)y[i].c();c=w(),g=f("section"),D=f("h2"),D.textContent="\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",P=w(),G=f("ul");for(let i=0;i<M.length;i+=1)M[i].c();dt=w(),B=f("section"),Y=f("h2"),Y.textContent="\u042F\u0437\u044B\u043A\u0438 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",_t=w(),tt=f("ul");for(let i=0;i<C.length;i+=1)C[i].c();et=w(),U=f("footer"),nt=f("p"),nt.textContent=`\xA9 ${new Date().getFullYear()}`,S(G,"class","inline")},m(i,m){h(i,n,m),h(i,r,m);for(let d=0;d<O.length;d+=1)O[d]&&O[d].m(r,null);h(i,o,m),h(i,l,m),p(l,a),p(l,$),p(l,u),p(u,s),p(u,b);for(let d=0;d<y.length;d+=1)y[d]&&y[d].m(u,null);p(l,c),p(l,g),p(g,D),p(g,P),p(g,G);for(let d=0;d<M.length;d+=1)M[d]&&M[d].m(G,null);p(l,dt),p(l,B),p(B,Y),p(B,_t),p(B,tt);for(let d=0;d<C.length;d+=1)C[d]&&C[d].m(tt,null);h(i,et,m),h(i,U,m),p(U,nt),z=!0},p(i,[m]){(!z||m&1)&&t!==(t=i[0])&&(document.title=t)},i(i){if(!z){for(let m=0;m<rt.length;m+=1)A(y[m]);z=!0}},o(i){y=y.filter(Boolean);for(let m=0;m<y.length;m+=1)q(y[m]);z=!1},d(i){i&&(_(n),_(r),_(o),_(l),_(et),_(U)),E(O,i),E(y,i),E(M,i),E(C,i)}}}function ae(e,t,n){let{name:r}=t;return e.$$set=o=>{"name"in o&&n(0,r=o.name)},[r]}var pt=class extends T{constructor(t){super(),K(this,t,ae,ue,V,{name:0})}},Nt=pt;var fr=new Nt({target:document.body,props:{name:"\u0412\u043E\u043B\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440"}});export{fr as default};