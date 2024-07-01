import{s as pe,f as I,g as P,h as M,d as $,j,i as k,a as B,l as x,c as U,m as ee,K as F,p as te,M as ue,o as Fe,e as be,I as ze,n as Ae}from"../chunks/scheduler.7a274a43.js";import{S as _e,i as he,b as y,d as V,m as L,a as p,t as d,e as q,g as le,c as re}from"../chunks/index.28409b7f.js";import{U as Me,g as me,e as Y}from"../chunks/UIcon.30f76e51.js";import{t as Ne,i as ke}from"../chunks/projects.f4b6fb8d.js";import{i as Re}from"../chunks/skills.10202fcd.js";import{C as ge}from"../chunks/Chip.52ead758.js";import{b as Te,g as Ye,a as we}from"../chunks/app.950c8fad.js";import{C as Ke}from"../chunks/Card.9d7b764b.js";import{C as Ge,a as He}from"../chunks/ChipIcon.cedd8ece.js";import{C as Ce}from"../chunks/CardDivider.09b854d8.js";import{b as je}from"../chunks/paths.fc459c08.js";import{S as Je}from"../chunks/SkillLogo.ca1ab678.js";import{S as Oe}from"../chunks/SearchPage.ef597d43.js";function Qe(o){let t,r,e;return r=new Me({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=I("a"),y(r.$$.fragment),this.h()},l(l){t=P(l,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=M(t);V(r.$$.fragment,a),a.forEach($),this.h()},h(){j(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),j(t,"href",o[1]),j(t,"title",o[0]),j(t,"target","_blank"),j(t,"rel","noreferrer"),j(t,"data-help",o[0])},m(l,a){k(l,t,a),L(r,t,null),e=!0},p(l,[a]){(!e||a&2)&&j(t,"href",l[1]),(!e||a&1)&&j(t,"title",l[0]),(!e||a&1)&&j(t,"data-help",l[0])},i(l){e||(p(r.$$.fragment,l),e=!0)},o(l){d(r.$$.fragment,l),e=!1},d(l){l&&$(t),q(r)}}}function We(o,t,r){let{label:e}=t,{to:l}=t;return o.$$set=a=>{"label"in a&&r(0,e=a.label),"to"in a&&r(1,l=a.to)},[e,l]}class Xe extends _e{constructor(t){super(),he(this,t,We,Qe,pe,{label:0,to:1})}}function Se(o,t,r){const e=o.slice();return e[5]=t[r],e}function De(o,t,r){const e=o.slice();return e[8]=t[r],e}function Ee(o){let t,r;return t=new Xe({props:{label:o[8].label??"",to:o[8].to}}),{c(){y(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.label=e[8].label??""),l&1&&(a.to=e[8].to),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function Ze(o){let t;return{c(){t=x(o[2])},l(r){t=ee(r,o[2])},m(r,e){k(r,t,e)},p(r,e){e&4&&te(t,r[2])},d(r){r&&$(t)}}}function Ie(o){let t,r;return t=new ge({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){y(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&2050&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function xe(o){let t;return{c(){t=x(o[1])},l(r){t=ee(r,o[1])},m(r,e){k(r,t,e)},p(r,e){e&2&&te(t,r[1])},d(r){r&&$(t)}}}function Pe(o){let t,r;return t=new He({props:{logo:me(o[5].logo),name:o[5].name}}),{c(){y(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.logo=me(e[5].logo)),l&1&&(a.name=e[5].name),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function et(o){let t,r,e,l,a,i,c,s,z,h,g,E=o[0].type+"",u,_,S,w,K,G,Z,ne=o[0].shortDescription+"",se,ae,A,N,$e,ie,H,fe,R,J;t=new Je({props:{alt:o[0].name,src:me(o[0].logo),size:40,radius:"0"}}),l=new Ge({props:{title:o[0].name}});let O=Y(o[0].links),v=[];for(let n=0;n<O.length;n+=1)v[n]=Ee(De(o,O,n));const Be=n=>d(v[n],1,1,()=>{v[n]=null});s=new Ce({}),N=new ge({props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}});let C=o[2]!==o[1]&&Ie(o);H=new Ce({});let Q=Y(o[0].skills),b=[];for(let n=0;n<Q.length;n+=1)b[n]=Pe(Se(o,Q,n));const Ue=n=>d(b[n],1,1,()=>{b[n]=null});return{c(){y(t.$$.fragment),r=B(),e=I("div"),y(l.$$.fragment),a=B(),i=I("div");for(let n=0;n<v.length;n+=1)v[n].c();c=B(),y(s.$$.fragment),z=B(),h=I("div"),g=I("p"),u=x(E),_=B(),S=I("p"),w=x(o[3]),K=B(),G=I("div"),Z=I("p"),se=x(ne),ae=B(),A=I("div"),y(N.$$.fragment),$e=B(),C&&C.c(),ie=B(),y(H.$$.fragment),fe=B(),R=I("div");for(let n=0;n<b.length;n+=1)b[n].c();this.h()},l(n){V(t.$$.fragment,n),r=U(n),e=P(n,"DIV",{class:!0});var f=M(e);V(l.$$.fragment,f),a=U(f),i=P(f,"DIV",{class:!0});var D=M(i);for(let X=0;X<v.length;X+=1)v[X].l(D);D.forEach($),f.forEach($),c=U(n),V(s.$$.fragment,n),z=U(n),h=P(n,"DIV",{class:!0});var W=M(h);g=P(W,"P",{});var oe=M(g);u=ee(oe,E),oe.forEach($),_=U(W),S=P(W,"P",{});var m=M(S);w=ee(m,o[3]),m.forEach($),W.forEach($),K=U(n),G=P(n,"DIV",{class:!0});var T=M(G);Z=P(T,"P",{class:!0});var de=M(Z);se=ee(de,ne),de.forEach($),T.forEach($),ae=U(n),A=P(n,"DIV",{class:!0});var ce=M(A);V(N.$$.fragment,ce),$e=U(ce),C&&C.l(ce),ce.forEach($),ie=U(n),V(H.$$.fragment,n),fe=U(n),R=P(n,"DIV",{class:!0});var ve=M(R);for(let X=0;X<b.length;X+=1)b[X].l(ve);ve.forEach($),this.h()},h(){j(i,"class","row"),j(e,"class","m-t-20px row justify-between items-center"),j(h,"class","row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"),j(Z,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-20px flex-1 line-clamp-3"),j(G,"class","col sm:h-100px md:h-80px"),j(A,"class","row justify-between text-0.8em font-400"),j(R,"class","row flex-wrap")},m(n,f){L(t,n,f),k(n,r,f),k(n,e,f),L(l,e,null),F(e,a),F(e,i);for(let D=0;D<v.length;D+=1)v[D]&&v[D].m(i,null);k(n,c,f),L(s,n,f),k(n,z,f),k(n,h,f),F(h,g),F(g,u),F(h,_),F(h,S),F(S,w),k(n,K,f),k(n,G,f),F(G,Z),F(Z,se),k(n,ae,f),k(n,A,f),L(N,A,null),F(A,$e),C&&C.m(A,null),k(n,ie,f),L(H,n,f),k(n,fe,f),k(n,R,f);for(let D=0;D<b.length;D+=1)b[D]&&b[D].m(R,null);J=!0},p(n,f){const D={};f&1&&(D.alt=n[0].name),f&1&&(D.src=me(n[0].logo)),t.$set(D);const W={};if(f&1&&(W.title=n[0].name),l.$set(W),f&1){O=Y(n[0].links);let m;for(m=0;m<O.length;m+=1){const T=De(n,O,m);v[m]?(v[m].p(T,f),p(v[m],1)):(v[m]=Ee(T),v[m].c(),p(v[m],1),v[m].m(i,null))}for(le(),m=O.length;m<v.length;m+=1)Be(m);re()}(!J||f&1)&&E!==(E=n[0].type+"")&&te(u,E),(!J||f&8)&&te(w,n[3]),(!J||f&1)&&ne!==(ne=n[0].shortDescription+"")&&te(se,ne);const oe={};if(f&2052&&(oe.$$scope={dirty:f,ctx:n}),N.$set(oe),n[2]!==n[1]?C?(C.p(n,f),f&6&&p(C,1)):(C=Ie(n),C.c(),p(C,1),C.m(A,null)):C&&(le(),d(C,1,1,()=>{C=null}),re()),f&1){Q=Y(n[0].skills);let m;for(m=0;m<Q.length;m+=1){const T=Se(n,Q,m);b[m]?(b[m].p(T,f),p(b[m],1)):(b[m]=Pe(T),b[m].c(),p(b[m],1),b[m].m(R,null))}for(le(),m=Q.length;m<b.length;m+=1)Ue(m);re()}},i(n){if(!J){p(t.$$.fragment,n),p(l.$$.fragment,n);for(let f=0;f<O.length;f+=1)p(v[f]);p(s.$$.fragment,n),p(N.$$.fragment,n),p(C),p(H.$$.fragment,n);for(let f=0;f<Q.length;f+=1)p(b[f]);J=!0}},o(n){d(t.$$.fragment,n),d(l.$$.fragment,n),v=v.filter(Boolean);for(let f=0;f<v.length;f+=1)d(v[f]);d(s.$$.fragment,n),d(N.$$.fragment,n),d(C),d(H.$$.fragment,n),b=b.filter(Boolean);for(let f=0;f<b.length;f+=1)d(b[f]);J=!1},d(n){n&&($(r),$(e),$(c),$(z),$(h),$(K),$(G),$(ae),$(A),$(ie),$(fe),$(R)),q(t,n),q(l),ue(v,n),q(s,n),q(N),C&&C.d(),q(H,n),ue(b,n)}}}function tt(o){let t,r;return t=new Ke({props:{color:o[0].color,href:`${je}/projects/${o[0].slug}`,$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){y(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,[l]){const a={};l&1&&(a.color=e[0].color),l&1&&(a.href=`${je}/projects/${e[0].slug}`),l&2063&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function lt(o,t,r){let e,l,a,{project:i}=t;return o.$$set=c=>{"project"in c&&r(0,i=c.project)},o.$$.update=()=>{o.$$.dirty&1&&Te(i.period.from,i.period.to),o.$$.dirty&1&&r(3,e=`${Ye(i.period.from,i.period.to??new Date(Date.now()+1e3*60*60*24))}`),o.$$.dirty&1&&r(2,l=`${we(i.period.from.getMonth())} ${i.period.from.getFullYear()}`),o.$$.dirty&1&&r(1,a=i.period.to?`${we(i.period.to.getMonth())} ${i.period.to.getFullYear()}`:"now")},[i,a,l,e]}class rt extends _e{constructor(t){super(),he(this,t,lt,tt,pe,{project:0})}}function ye(o,t,r){const e=o.slice();return e[7]=t[r],e}function Ve(o,t,r){const e=o.slice();return e[10]=t[r],e}function nt(o){let t=o[10].name+"",r;return{c(){r=x(t)},l(e){r=ee(e,t)},m(e,l){k(e,r,l)},p(e,l){l&1&&t!==(t=e[10].name+"")&&te(r,t)},d(e){e&&$(r)}}}function Le(o){let t,r;function e(){return o[5](o[10])}return t=new ge({props:{active:o[10].isSelected,classes:"text-0.8em",$$slots:{default:[nt]},$$scope:{ctx:o}}}),t.$on("click",e),{c(){y(t.$$.fragment)},l(l){V(t.$$.fragment,l)},m(l,a){L(t,l,a),r=!0},p(l,a){o=l;const i={};a&1&&(i.active=o[10].isSelected),a&8193&&(i.$$scope={dirty:a,ctx:o}),t.$set(i)},i(l){r||(p(t.$$.fragment,l),r=!0)},o(l){d(t.$$.fragment,l),r=!1},d(l){q(t,l)}}}function ot(o){let t,r,e=Y(o[1]),l=[];for(let i=0;i<e.length;i+=1)l[i]=qe(ye(o,e,i));const a=i=>d(l[i],1,1,()=>{l[i]=null});return{c(){t=I("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=P(i,"DIV",{class:!0});var c=M(t);for(let s=0;s<l.length;s+=1)l[s].l(c);c.forEach($),this.h()},h(){j(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,c){k(i,t,c);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);r=!0},p(i,c){if(c&2){e=Y(i[1]);let s;for(s=0;s<e.length;s+=1){const z=ye(i,e,s);l[s]?(l[s].p(z,c),p(l[s],1)):(l[s]=qe(z),l[s].c(),p(l[s],1),l[s].m(t,null))}for(le(),s=e.length;s<l.length;s+=1)a(s);re()}},i(i){if(!r){for(let c=0;c<e.length;c+=1)p(l[c]);r=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)d(l[c]);r=!1},d(i){i&&$(t),ue(l,i)}}}function st(o){let t,r,e,l,a="Could not find anything...",i;return r=new Me({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=I("div"),y(r.$$.fragment),e=B(),l=I("p"),l.textContent=a,this.h()},l(c){t=P(c,"DIV",{class:!0});var s=M(t);V(r.$$.fragment,s),e=U(s),l=P(s,"P",{class:!0,["data-svelte-h"]:!0}),ze(l)!=="svelte-1jyyf6v"&&(l.textContent=a),s.forEach($),this.h()},h(){j(l,"class","font-300"),j(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,s){k(c,t,s),L(r,t,null),F(t,e),F(t,l),i=!0},p:Ae,i(c){i||(p(r.$$.fragment,c),i=!0)},o(c){d(r.$$.fragment,c),i=!1},d(c){c&&$(t),q(r)}}}function qe(o){let t,r;return t=new rt({props:{project:o[7]}}),{c(){y(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&2&&(a.project=e[7]),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function at(o){let t,r,e,l,a,i,c=Y(o[0]),s=[];for(let u=0;u<c.length;u+=1)s[u]=Le(Ve(o,c,u));const z=u=>d(s[u],1,1,()=>{s[u]=null}),h=[st,ot],g=[];function E(u,_){return u[1].length===0?0:1}return e=E(o),l=g[e]=h[e](o),{c(){t=I("div");for(let u=0;u<s.length;u+=1)s[u].c();r=B(),l.c(),a=be(),this.h()},l(u){t=P(u,"DIV",{class:!0});var _=M(t);for(let S=0;S<s.length;S+=1)s[S].l(_);_.forEach($),r=U(u),l.l(u),a=be(),this.h()},h(){j(t,"class","projects-filters")},m(u,_){k(u,t,_);for(let S=0;S<s.length;S+=1)s[S]&&s[S].m(t,null);k(u,r,_),g[e].m(u,_),k(u,a,_),i=!0},p(u,_){if(_&5){c=Y(u[0]);let w;for(w=0;w<c.length;w+=1){const K=Ve(u,c,w);s[w]?(s[w].p(K,_),p(s[w],1)):(s[w]=Le(K),s[w].c(),p(s[w],1),s[w].m(t,null))}for(le(),w=c.length;w<s.length;w+=1)z(w);re()}let S=e;e=E(u),e===S?g[e].p(u,_):(le(),d(g[S],1,1,()=>{g[S]=null}),re(),l=g[e],l?l.p(u,_):(l=g[e]=h[e](u),l.c()),p(l,1),l.m(a.parentNode,a))},i(u){if(!i){for(let _=0;_<c.length;_+=1)p(s[_]);p(l),i=!0}},o(u){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)d(s[_]);d(l),i=!1},d(u){u&&($(t),$(r),$(a)),ue(s,u),g[e].d(u)}}}function it(o){let t,r;return t=new Oe({props:{title:Ne,$$slots:{default:[at]},$$scope:{ctx:o}}}),t.$on("search",o[3]),{c(){y(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,[l]){const a={};l&8195&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function ft(o,t,r){let e=Re.filter(h=>ke.some(g=>g.skills.some(E=>E.slug===h.slug))),l="",a=[];const i=h=>e.some(g=>g.slug===h&&g.isSelected),c=h=>{r(0,e=e.map(g=>(g.slug===h&&(g.isSelected=!i(h)),g)))},s=h=>{r(4,l=h.detail.search)};Fe(()=>{if(location.search){const E=new URLSearchParams(location.search).get("item");E&&r(4,l=E)}});const z=h=>c(h.slug);return o.$$.update=()=>{o.$$.dirty&17&&r(1,a=ke.filter(h=>{const g=e.every(u=>!u.isSelected)||h.skills.some(u=>e.some(_=>_.isSelected&&_.slug===u.slug)),E=l.trim().length===0||h.name.trim().toLowerCase().includes(l.trim().toLowerCase());return g&&E}))},[e,a,c,s,l,z]}class Ct extends _e{constructor(t){super(),he(this,t,ft,it,pe,{})}}export{Ct as component};
