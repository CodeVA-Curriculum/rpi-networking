import{S as Xe,i as Ze,s as et,D as De,x as F,y as M,z as Y,A as tt,B as ot,r as j,p as D,C,L as Qe,e as h,t as m,k as $,c,a as w,h as u,d as t,m as g,g as i,K as l,n as ke}from"../../chunks/index-96b0a37c.js";import{M as at,t as ye,i as rt,a as st}from"../../chunks/MdLayout-7cab2e82.js";import"../../chunks/paths-396f020f.js";import"../../chunks/Nav-da18ce70.js";function lt(v){let o,p,s,f;return{c(){o=h("h3"),p=m("Raspberry Pi"),s=h("p"),f=m("This is a tiny computer! It runs a Linux operating system and can do all the cool things your laptop can do, just slower.")},l(a){o=c(a,"H3",{});var n=w(o);p=u(n,"Raspberry Pi"),n.forEach(t),s=c(a,"P",{});var _=w(s);f=u(_,"This is a tiny computer! It runs a Linux operating system and can do all the cool things your laptop can do, just slower."),_.forEach(t)},m(a,n){i(a,o,n),l(o,p),i(a,s,n),l(s,f)},p:ke,d(a){a&&t(o),a&&t(s)}}}function it(v){let o,p,s,f,a,n,_;return{c(){o=h("h3"),p=m("Switch"),s=h("p"),f=m("This is a device that connects computers together to form a "),a=h("em"),n=m("network"),_=m(", allowing the computers to communicate with one another.")},l(d){o=c(d,"H3",{});var y=w(o);p=u(y,"Switch"),y.forEach(t),s=c(d,"P",{});var b=w(s);f=u(b,"This is a device that connects computers together to form a "),a=c(b,"EM",{});var R=w(a);n=u(R,"network"),R.forEach(t),_=u(b,", allowing the computers to communicate with one another."),b.forEach(t)},m(d,y){i(d,o,y),l(o,p),i(d,s,y),l(s,f),l(s,a),l(a,n),l(s,_)},p:ke,d(d){d&&t(o),d&&t(s)}}}function nt(v){let o,p,s,f;return{c(){o=h("h3"),p=m("Ethernet Cables"),s=h("p"),f=m("These cables connect the computers and the switch(es) together. Very important!")},l(a){o=c(a,"H3",{});var n=w(o);p=u(n,"Ethernet Cables"),n.forEach(t),s=c(a,"P",{});var _=w(s);f=u(_,"These cables connect the computers and the switch(es) together. Very important!"),_.forEach(t)},m(a,n){i(a,o,n),l(o,p),i(a,s,n),l(s,f)},p:ke,d(a){a&&t(o),a&&t(s)}}}function pt(v){let o,p,s,f;return{c(){o=h("h3"),p=m("USB-Ethernet Adapter"),s=h("p"),f=m("This adapter will allow you to connect your personal laptop to the lab network for the activities that will follow")},l(a){o=c(a,"H3",{});var n=w(o);p=u(n,"USB-Ethernet Adapter"),n.forEach(t),s=c(a,"P",{});var _=w(s);f=u(_,"This adapter will allow you to connect your personal laptop to the lab network for the activities that will follow"),_.forEach(t)},m(a,n){i(a,o,n),l(o,p),i(a,s,n),l(s,f)},p:ke,d(a){a&&t(o),a&&t(s)}}}function ft(v){let o;return{c(){o=m("Terminal Mapping")},l(p){o=u(p,"Terminal Mapping")},m(p,s){i(p,o,s)},d(p){p&&t(o)}}}function mt(v){let o,p,s,f,a,n,_,d,y,b,R,ae,E,K,be,Ee,J,xe,re,B,Pe,se,A,Le,le,x,ie,P,ne,L,pe,T,fe,W,Te,me,z,He,ue,H,Q,Ue,Ie,X,Ne,he,O,N,ce,G,Se,we,V,Fe,_e,q,Me,$e,U,Ye,Z,I,je,ge;return x=new ye({props:{src:"/images/pi-and-power.png",classList:"box",$$slots:{default:[lt]},$$scope:{ctx:v}}}),P=new ye({props:{src:"/images/switch-and-power.png",classList:"box",$$slots:{default:[it]},$$scope:{ctx:v}}}),L=new ye({props:{src:"/images/ethernet-cables.jpg",classList:"box",$$slots:{default:[nt]},$$scope:{ctx:v}}}),T=new ye({props:{src:"/images/usb-ethernet.jpg",classList:"box",$$slots:{default:[pt]},$$scope:{ctx:v}}}),N=new rt({props:{src:"/images/topology.png",alt:"A diagram of a local area network"}}),I=new st({props:{href:"/terminal-basics",$$slots:{default:[ft]},$$scope:{ctx:v}}}),{c(){o=h("h1"),p=m("Unplugged Network Mapping"),s=$(),f=h("p"),a=m("In this activity, you\u2019ll create a "),n=h("strong"),_=m("network diagram"),d=m(" that you can use as a reference during this workshop. Then, you\u2019ll hook up all the hardware for your group\u2019s lab network and get ready to test things out! The main "),y=h("strong"),b=m("learning objectives"),R=m(" for this activity are the following:"),ae=$(),E=h("ul"),K=h("li"),be=m("Familiarize yourself with the terminology associated with networking hardware"),Ee=$(),J=h("li"),xe=m("Diagram and set up a simple network with Raspberry Pi computers"),re=$(),B=h("p"),Pe=m("Follow the steps below to complete the activity!"),se=$(),A=h("h2"),Le=m("1. What Do You Have in Front of You?"),le=$(),F(x.$$.fragment),ie=$(),F(P.$$.fragment),ne=$(),F(L.$$.fragment),pe=$(),F(T.$$.fragment),fe=$(),W=h("h2"),Te=m("2. Diagram Your \u201CLab\u201D Network"),me=$(),z=h("p"),He=m("Before we start digging in with the hardware and doing some networking, create a paper diagram of what your network will look like. You will be adding to this diagram as you learn more about the devices on the network, so be sure to create the paper version carefully!"),ue=$(),H=h("ol"),Q=h("li"),Ue=m("Use a sticky note to represent each device in the network. Write the name of the device (e.g., Pi, switch) on the sticky note."),Ie=$(),X=h("li"),Ne=m("Connect the sticky notes using twine and clips to represent the cables that will create the network"),he=$(),O=h("p"),F(N.$$.fragment),ce=$(),G=h("h2"),Se=m("3. Setting Up the Hardware"),we=$(),V=h("p"),Fe=m("Now, plug everything in! Use the diagram above as a guide, and feel free to ask for help if you\u2019re unsure of something!"),_e=$(),q=h("h2"),Me=m("\u201CPlugging In\u201D"),$e=$(),U=h("p"),Ye=m("Now that everything is hooked up, you need to test your connections and make sure everything is working properly! For that, head over to the next activity, "),Z=h("em"),F(I.$$.fragment),je=m(".")},l(e){o=c(e,"H1",{});var r=w(o);p=u(r,"Unplugged Network Mapping"),r.forEach(t),s=g(e),f=c(e,"P",{});var k=w(f);a=u(k,"In this activity, you\u2019ll create a "),n=c(k,"STRONG",{});var ee=w(n);_=u(ee,"network diagram"),ee.forEach(t),d=u(k," that you can use as a reference during this workshop. Then, you\u2019ll hook up all the hardware for your group\u2019s lab network and get ready to test things out! The main "),y=c(k,"STRONG",{});var te=w(y);b=u(te,"learning objectives"),te.forEach(t),R=u(k," for this activity are the following:"),k.forEach(t),ae=g(e),E=c(e,"UL",{});var S=w(E);K=c(S,"LI",{});var oe=w(K);be=u(oe,"Familiarize yourself with the terminology associated with networking hardware"),oe.forEach(t),Ee=g(S),J=c(S,"LI",{});var Ce=w(J);xe=u(Ce,"Diagram and set up a simple network with Raspberry Pi computers"),Ce.forEach(t),S.forEach(t),re=g(e),B=c(e,"P",{});var Re=w(B);Pe=u(Re,"Follow the steps below to complete the activity!"),Re.forEach(t),se=g(e),A=c(e,"H2",{});var Be=w(A);Le=u(Be,"1. What Do You Have in Front of You?"),Be.forEach(t),le=g(e),M(x.$$.fragment,e),ie=g(e),M(P.$$.fragment,e),ne=g(e),M(L.$$.fragment,e),pe=g(e),M(T.$$.fragment,e),fe=g(e),W=c(e,"H2",{});var Ae=w(W);Te=u(Ae,"2. Diagram Your \u201CLab\u201D Network"),Ae.forEach(t),me=g(e),z=c(e,"P",{});var We=w(z);He=u(We,"Before we start digging in with the hardware and doing some networking, create a paper diagram of what your network will look like. You will be adding to this diagram as you learn more about the devices on the network, so be sure to create the paper version carefully!"),We.forEach(t),ue=g(e),H=c(e,"OL",{});var ve=w(H);Q=c(ve,"LI",{});var ze=w(Q);Ue=u(ze,"Use a sticky note to represent each device in the network. Write the name of the device (e.g., Pi, switch) on the sticky note."),ze.forEach(t),Ie=g(ve),X=c(ve,"LI",{});var Oe=w(X);Ne=u(Oe,"Connect the sticky notes using twine and clips to represent the cables that will create the network"),Oe.forEach(t),ve.forEach(t),he=g(e),O=c(e,"P",{});var Ge=w(O);M(N.$$.fragment,Ge),Ge.forEach(t),ce=g(e),G=c(e,"H2",{});var Ve=w(G);Se=u(Ve,"3. Setting Up the Hardware"),Ve.forEach(t),we=g(e),V=c(e,"P",{});var qe=w(V);Fe=u(qe,"Now, plug everything in! Use the diagram above as a guide, and feel free to ask for help if you\u2019re unsure of something!"),qe.forEach(t),_e=g(e),q=c(e,"H2",{});var Ke=w(q);Me=u(Ke,"\u201CPlugging In\u201D"),Ke.forEach(t),$e=g(e),U=c(e,"P",{});var de=w(U);Ye=u(de,"Now that everything is hooked up, you need to test your connections and make sure everything is working properly! For that, head over to the next activity, "),Z=c(de,"EM",{});var Je=w(Z);M(I.$$.fragment,Je),Je.forEach(t),je=u(de,"."),de.forEach(t)},m(e,r){i(e,o,r),l(o,p),i(e,s,r),i(e,f,r),l(f,a),l(f,n),l(n,_),l(f,d),l(f,y),l(y,b),l(f,R),i(e,ae,r),i(e,E,r),l(E,K),l(K,be),l(E,Ee),l(E,J),l(J,xe),i(e,re,r),i(e,B,r),l(B,Pe),i(e,se,r),i(e,A,r),l(A,Le),i(e,le,r),Y(x,e,r),i(e,ie,r),Y(P,e,r),i(e,ne,r),Y(L,e,r),i(e,pe,r),Y(T,e,r),i(e,fe,r),i(e,W,r),l(W,Te),i(e,me,r),i(e,z,r),l(z,He),i(e,ue,r),i(e,H,r),l(H,Q),l(Q,Ue),l(H,Ie),l(H,X),l(X,Ne),i(e,he,r),i(e,O,r),Y(N,O,null),i(e,ce,r),i(e,G,r),l(G,Se),i(e,we,r),i(e,V,r),l(V,Fe),i(e,_e,r),i(e,q,r),l(q,Me),i(e,$e,r),i(e,U,r),l(U,Ye),l(U,Z),Y(I,Z,null),l(U,je),ge=!0},p(e,r){const k={};r&2&&(k.$$scope={dirty:r,ctx:e}),x.$set(k);const ee={};r&2&&(ee.$$scope={dirty:r,ctx:e}),P.$set(ee);const te={};r&2&&(te.$$scope={dirty:r,ctx:e}),L.$set(te);const S={};r&2&&(S.$$scope={dirty:r,ctx:e}),T.$set(S);const oe={};r&2&&(oe.$$scope={dirty:r,ctx:e}),I.$set(oe)},i(e){ge||(j(x.$$.fragment,e),j(P.$$.fragment,e),j(L.$$.fragment,e),j(T.$$.fragment,e),j(N.$$.fragment,e),j(I.$$.fragment,e),ge=!0)},o(e){D(x.$$.fragment,e),D(P.$$.fragment,e),D(L.$$.fragment,e),D(T.$$.fragment,e),D(N.$$.fragment,e),D(I.$$.fragment,e),ge=!1},d(e){e&&t(o),e&&t(s),e&&t(f),e&&t(ae),e&&t(E),e&&t(re),e&&t(B),e&&t(se),e&&t(A),e&&t(le),C(x,e),e&&t(ie),C(P,e),e&&t(ne),C(L,e),e&&t(pe),C(T,e),e&&t(fe),e&&t(W),e&&t(me),e&&t(z),e&&t(ue),e&&t(H),e&&t(he),e&&t(O),C(N),e&&t(ce),e&&t(G),e&&t(we),e&&t(V),e&&t(_e),e&&t(q),e&&t($e),e&&t(U),C(I)}}}function ut(v){let o,p;const s=[v[0]];let f={$$slots:{default:[mt]},$$scope:{ctx:v}};for(let a=0;a<s.length;a+=1)f=De(f,s[a]);return o=new at({props:f}),{c(){F(o.$$.fragment)},l(a){M(o.$$.fragment,a)},m(a,n){Y(o,a,n),p=!0},p(a,[n]){const _=n&1?tt(s,[ot(a[0])]):{};n&2&&(_.$$scope={dirty:n,ctx:a}),o.$set(_)},i(a){p||(j(o.$$.fragment,a),p=!0)},o(a){D(o.$$.fragment,a),p=!1},d(a){C(o,a)}}}function ht(v,o,p){return v.$$set=s=>{p(0,o=De(De({},o),Qe(s)))},o=Qe(o),[o]}class gt extends Xe{constructor(o){super(),Ze(this,o,ht,ut,et,{})}}export{gt as default};
