(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Eo="channel-surfer-mute";function nu(){const i=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let t=null,e=null,n=null,r=null,s=null,a=!1,o=!1;try{o=localStorage.getItem(Eo)==="1"}catch(p){o=!1}function l(){if(!i)return null;if(!t){t=new i,e=t.createGain(),e.gain.value=o?0:.85,n=t.createBiquadFilter(),n.type="lowpass",n.frequency.value=16e3,n.connect(e),e.connect(t.destination);const p=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=p.getChannelData(0);for(let T=0;T<f.length;T++)f[T]=Math.random()*2-1;const g=t.createBufferSource();g.buffer=p,g.loop=!0;const v=t.createBiquadFilter();v.type="highpass",v.frequency.value=1200,r=t.createGain(),r.gain.value=0,g.connect(v),v.connect(r),r.connect(n),g.start(),s=t.createGain(),s.gain.value=.018;const m=t.createOscillator(),h=t.createOscillator();m.type="sine",h.type="triangle",m.frequency.value=55,h.frequency.value=82.4,m.connect(s),h.connect(s),s.connect(n),m.start(),h.start()}return t.state==="suspended"&&t.resume(),a=!0,t}function c(p,f){const g=t.createGain(),v=t.currentTime;return g.gain.setValueAtTime(1e-4,v),g.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),v+.012),g.gain.exponentialRampToValueAtTime(1e-4,v+Math.max(.03,p)),g.connect(n),g}function u(p,f,g,v,m){if(!a||!t||o)return;const h=t.createOscillator();h.type=g;const T=t.currentTime;h.frequency.setValueAtTime(p,T),m&&h.frequency.exponentialRampToValueAtTime(Math.max(30,m),T+f),h.connect(c(f,v)),h.start(),h.stop(T+f+.03)}function d(p,f,g){if(!a||!t||o)return;const v=Math.max(1,Math.floor(t.sampleRate*p)),m=t.createBuffer(1,v,t.sampleRate),h=m.getChannelData(0);for(let N=0;N<v;N++)h[N]=Math.random()*2-1;const T=t.createBufferSource();T.buffer=m;const w=t.createBiquadFilter();w.type="bandpass",w.frequency.value=g,w.Q.value=.7;const E=c(p,f);T.connect(w),w.connect(E),T.start()}return{ensure:l,get muted(){return o},toggle(){o=!o,e&&(e.gain.value=o?0:.85);try{localStorage.setItem(Eo,o?"1":"0")}catch(p){}return o},setChannel(p){if(!a||!t)return;const f=t.currentTime,g=p==="DEAD_AIR"?380:p==="STATIC"?3800:15e3;n.frequency.linearRampToValueAtTime(g,f+.07),r.gain.linearRampToValueAtTime(p==="STATIC"?.02:0,f+.08),s.gain.linearRampToValueAtTime(p==="DEAD_AIR"?.028:.016,f+.1)},play(p){if(!(!a||o))switch(p){case"live":d(.045,.14,2400),u(940,.08,"square",.045,360);break;case"static":d(.13,.22,640);break;case"deny":u(86,.09,"sine",.07,48);break;case"switch-live":u(523,.11,"square",.04),u(784,.13,"square",.03);break;case"switch-static":d(.08,.1,500),u(190,.12,"sawtooth",.03);break;case"switch-dead":u(74,.18,"sine",.07,42);break;case"hit":u(1500,.05,"square",.04,480);break;case"hurt":d(.11,.16,220),u(120,.16,"sawtooth",.05,60);break;case"death":d(.26,.18,280),u(210,.32,"triangle",.06,48);break;case"pickup":u(660,.08,"sine",.05),u(990,.12,"sine",.04);break;case"ui":u(480,.05,"square",.03);break;case"bolt":u(300,.09,"square",.03,130);break;case"nosignal":d(.16,.12,180);break;case"hijack":d(.18,.2,1800),u(680,.16,"sawtooth",.05,1400),u(220,.22,"square",.04,90);break;case"rite":u(196,.28,"sine",.05),u(247,.32,"sine",.035),u(392,.22,"triangle",.03);break;case"rite-break":d(.08,.16,1400),u(880,.12,"square",.05,420),u(1320,.16,"triangle",.04,700);break;case"rite-fail":u(98,.22,"sawtooth",.06,50),d(.14,.12,200);break;case"door":u(140,.18,"square",.04,70),u(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const so="170",iu=0,To=1,ru=2,Ql=1,tc=2,Rn=3,Kn=0,He=1,nn=2,qn=0,Vi=1,_s=2,bo=3,wo=4,su=5,ui=100,au=101,ou=102,lu=103,cu=104,uu=200,hu=201,fu=202,du=203,pa=204,ma=205,pu=206,mu=207,gu=208,_u=209,vu=210,xu=211,Mu=212,yu=213,Su=214,ga=0,_a=1,va=2,Yi=3,xa=4,Ma=5,ya=6,Sa=7,ec=0,Eu=1,Tu=2,Yn=0,bu=1,wu=2,Au=3,nc=4,Ru=5,Cu=6,Pu=7,ic=300,Zi=301,Ki=302,Ea=303,Ta=304,bs=306,di=1e3,fi=1001,ba=1002,fn=1003,Iu=1004,Ir=1005,sn=1006,Ps=1007,Pn=1008,Un=1009,rc=1010,sc=1011,Er=1012,ao=1013,pi=1014,In=1015,wr=1016,oo=1017,lo=1018,$i=1020,ac=35902,oc=1021,lc=1022,hn=1023,cc=1024,uc=1025,Wi=1026,ji=1027,hc=1028,co=1029,fc=1030,uo=1031,ho=1033,hs=33776,fs=33777,ds=33778,ps=33779,wa=35840,Aa=35841,Ra=35842,Ca=35843,Pa=36196,Ia=37492,Da=37496,La=37808,Ua=37809,Na=37810,Fa=37811,Oa=37812,Ba=37813,za=37814,ka=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,qa=37821,ms=36492,Ya=36494,Za=36495,dc=36283,Ka=36284,$a=36285,ja=36286,Du=3200,Lu=3201,pc=0,Uu=1,Cn="",Ce="srgb",Qi="srgb-linear",ws="linear",ae="srgb",xi=7680,Ao=519,Nu=512,Fu=513,Ou=514,mc=515,Bu=516,zu=517,ku=518,Hu=519,Ja=35044,Ro="300 es",Dn=2e3,vs=2001;class tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Is=Math.PI/180,Qa=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Gu(i,t){return(i%t+t)%t}function Ds(i,t,e){return(1-e)*i+e*t}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],f=n[5],g=n[8],v=r[0],m=r[3],h=r[6],T=r[1],w=r[4],E=r[7],N=r[2],P=r[5],I=r[8];return s[0]=a*v+o*T+l*N,s[3]=a*m+o*w+l*P,s[6]=a*h+o*E+l*I,s[1]=c*v+u*T+d*N,s[4]=c*m+u*w+d*P,s[7]=c*h+u*E+d*I,s[2]=p*v+f*T+g*N,s[5]=p*m+f*w+g*P,s[8]=p*h+f*E+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,p=o*l-u*s,f=c*s-a*l,g=e*d+n*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(r*c-u*n)*v,t[2]=(o*n-r*a)*v,t[3]=p*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Ht;function gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){const i=xs("canvas");return i.style.display="block",i}const Co={};function gr(i){i in Co||(Co[i]=!0,console.warn(i))}function Wu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Xu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?ws:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Po=[.64,.33,.3,.6,.15,.06],Io=[.2126,.7152,.0722],Do=[.3127,.329],Lo=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uo=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Qi]:{primaries:Po,whitePoint:Do,transfer:ws,toXYZ:Lo,fromXYZ:Uo,luminanceCoefficients:Io,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Po,whitePoint:Do,transfer:ae,toXYZ:Lo,fromXYZ:Uo,luminanceCoefficients:Io,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});let Mi;class Yu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=xs("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zu=0;class _c{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Us(r[a].image)):s.push(Us(r[a]))}else s=Us(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class Ge extends tr{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=fi,r=fi,s=sn,a=Pn,o=hn,l=Un,c=Ge.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Zn(),this.name="",this.source=new _c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=ic;Ge.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,E=(f+1)/2,N=(h+1)/2,P=(u+p)/4,I=(d+v)/4,D=(g+m)/4;return w>E&&w>N?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=P/n,s=I/n):E>N?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=D/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=I/s,r=D/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(p-u)/T,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ge(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _c(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends $u{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vc extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ju extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const p=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==p||c!==f||u!==g){let m=1-o;const h=l*p+c*f+u*g+d*v,T=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const N=Math.sqrt(w),P=Math.atan2(N,h*T);m=Math.sin(m*P)/N,o=Math.sin(o*P)/N}const E=o*T;if(l=l*m+p*E,c=c*m+f*E,u=u*m+g*E,d=d*m+v*E,m===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=N,c*=N,u*=N,d*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*d+l*f-c*p,t[e+1]=l*g+u*p+c*d-o*f,t[e+2]=c*g+u*f+o*p-l*d,t[e+3]=u*g-o*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),p=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"YZX":this._x=p*u*d+c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d-p*f*g;break;case"XZY":this._x=p*u*d-c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(No.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(No.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new z,No=new Ar;class Rr{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Lr.subVectors(this.max,rr),yi.subVectors(t.a,rr),Si.subVectors(t.b,rr),Ei.subVectors(t.c,rr),On.subVectors(Si,yi),Bn.subVectors(Ei,Si),ti.subVectors(yi,Ei);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!Fs(e,yi,Si,Ei,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,yi,Si,Ei,Lr))?!1:(Ur.crossVectors(On,Bn),e=[Ur.x,Ur.y,Ur.z],Fs(e,yi,Si,Ei,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new z,new z,new z,new z,new z,new z,new z,new z],ln=new z,Dr=new Rr,yi=new z,Si=new z,Ei=new z,On=new z,Bn=new z,ti=new z,rr=new z,Lr=new z,Ur=new z,ei=new z;function Fs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ei.fromArray(i,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ju=new Rr,sr=new z,Os=new z;class Cr{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(sr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Os.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Os)),this.expandByPoint(sr.copy(t.center).sub(Os))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new z,Bs=new z,Nr=new z,zn=new z,zs=new z,Fr=new z,ks=new z;class fo{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Bs.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Bs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=zn.dot(this.direction),l=-zn.dot(Nr),c=zn.lengthSq(),u=Math.abs(1-a*a);let d,p,f,g;if(u>0)if(d=a*l-o,p=a*o-l,g=s*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Bs).addScaledVector(Nr,p),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,r,s){zs.subVectors(e,t),Fr.subVectors(n,t),ks.crossVectors(zs,Fr);let a=this.direction.dot(ks),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);const l=o*this.direction.dot(Fr.crossVectors(zn,Fr));if(l<0)return null;const c=o*this.direction.dot(zs.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(ks);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,r,s,a,o,l,c,u,d,p,f,g,v,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,d,p,f,g,v,m)}set(t,e,n,r,s,a,o,l,c,u,d,p,f,g,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=p-v*c,e[9]=-o*l,e[2]=v-p*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,f=l*d,g=c*u,v=c*d;e[0]=p+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,f=l*d,g=c*u,v=c*d;e[0]=p-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-p*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=p-v*d}else if(t.order==="XZY"){const p=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+v,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qu,t,th)}lookAt(t,e,n){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),kn.crossVectors(n,Ye),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),kn.crossVectors(n,Ye)),kn.normalize(),Or.crossVectors(Ye,kn),r[0]=kn.x,r[4]=Or.x,r[8]=Ye.x,r[1]=kn.y,r[5]=Or.y,r[9]=Ye.y,r[2]=kn.z,r[6]=Or.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],f=n[13],g=n[2],v=n[6],m=n[10],h=n[14],T=n[3],w=n[7],E=n[11],N=n[15],P=r[0],I=r[4],D=r[8],S=r[12],y=r[1],A=r[5],X=r[9],H=r[13],V=r[2],x=r[6],R=r[10],L=r[14],C=r[3],Z=r[7],nt=r[11],ht=r[15];return s[0]=a*P+o*y+l*V+c*C,s[4]=a*I+o*A+l*x+c*Z,s[8]=a*D+o*X+l*R+c*nt,s[12]=a*S+o*H+l*L+c*ht,s[1]=u*P+d*y+p*V+f*C,s[5]=u*I+d*A+p*x+f*Z,s[9]=u*D+d*X+p*R+f*nt,s[13]=u*S+d*H+p*L+f*ht,s[2]=g*P+v*y+m*V+h*C,s[6]=g*I+v*A+m*x+h*Z,s[10]=g*D+v*X+m*R+h*nt,s[14]=g*S+v*H+m*L+h*ht,s[3]=T*P+w*y+E*V+N*C,s[7]=T*I+w*A+E*x+N*Z,s[11]=T*D+w*X+E*R+N*nt,s[15]=T*S+w*H+E*L+N*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],f=t[14],g=t[3],v=t[7],m=t[11],h=t[15];return g*(+s*l*d-r*c*d-s*o*p+n*c*p+r*o*f-n*l*f)+v*(+e*l*f-e*c*p+s*a*p-r*a*f+r*c*u-s*l*u)+m*(+e*c*d-e*o*f-s*a*d+n*a*f+s*o*u-n*c*u)+h*(-r*o*u-e*l*d+e*o*p+r*a*d-n*a*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],f=t[11],g=t[12],v=t[13],m=t[14],h=t[15],T=d*m*c-v*p*c+v*l*f-o*m*f-d*l*h+o*p*h,w=g*p*c-u*m*c-g*l*f+a*m*f+u*l*h-a*p*h,E=u*v*c-g*d*c+g*o*f-a*v*f-u*o*h+a*d*h,N=g*d*l-u*v*l-g*o*p+a*v*p+u*o*m-a*d*m,P=e*T+n*w+r*E+s*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=T*I,t[1]=(v*p*s-d*m*s-v*r*f+n*m*f+d*r*h-n*p*h)*I,t[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*h+n*l*h)*I,t[3]=(d*l*s-o*p*s-d*r*c+n*p*c+o*r*f-n*l*f)*I,t[4]=w*I,t[5]=(u*m*s-g*p*s+g*r*f-e*m*f-u*r*h+e*p*h)*I,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*h-e*l*h)*I,t[7]=(a*p*s-u*l*s+u*r*c-e*p*c-a*r*f+e*l*f)*I,t[8]=E*I,t[9]=(g*d*s-u*v*s-g*n*f+e*v*f+u*n*h-e*d*h)*I,t[10]=(a*v*s-g*o*s+g*n*c-e*v*c-a*n*h+e*o*h)*I,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*f-e*o*f)*I,t[12]=N*I,t[13]=(u*v*r-g*d*r+g*n*p-e*v*p-u*n*m+e*d*m)*I,t[14]=(g*o*r-a*v*r-g*n*l+e*v*l+a*n*m-e*o*m)*I,t[15]=(a*d*r-u*o*r+u*n*l-e*d*l-a*n*p+e*o*p)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,p=s*c,f=s*u,g=s*d,v=a*u,m=a*d,h=o*d,T=l*c,w=l*u,E=l*d,N=n.x,P=n.y,I=n.z;return r[0]=(1-(v+h))*N,r[1]=(f+E)*N,r[2]=(g-w)*N,r[3]=0,r[4]=(f-E)*P,r[5]=(1-(p+h))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(g+w)*I,r[9]=(m-T)*I,r[10]=(1-(p+v))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const c=1/s,u=1/a,d=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Dn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let f,g;if(o===Dn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===vs)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Dn){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(a-s),p=(e+t)*c,f=(n+r)*u;let g,v;if(o===Dn)g=(a+s)*d,v=-2*d;else if(o===vs)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new z,cn=new ue,Qu=new z(0,0,0),th=new z(1,1,1),kn=new z,Or=new z,Ye=new z,Fo=new ue,Oo=new Ar;class xn{constructor(t=0,e=0,n=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eh=0;const Bo=new z,bi=new Ar,bn=new ue,Br=new z,ar=new z,nh=new z,ih=new Ar,zo=new z(1,0,0),ko=new z(0,1,0),Ho=new z(0,0,1),Go={type:"added"},rh={type:"removed"},wi={type:"childadded",child:null},Hs={type:"childremoved",child:null};class ve extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new z,e=new xn,n=new Ar,r=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ht}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(zo,t)}rotateY(t){return this.rotateOnAxis(ko,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,e){return Bo.copy(t).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zo,t)}translateY(t){return this.translateOnAxis(ko,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ar,Br,this.up):bn.lookAt(Br,ar,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(bn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Go),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rh),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Go),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ve.DEFAULT_UP=new z(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new z,wn=new z,Gs=new z,An=new z,Ai=new z,Ri=new z,Vo=new z,Vs=new z,Ws=new z,Xs=new z,qs=new le,Ys=new le,Zs=new le;class rn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){un.subVectors(r,e),wn.subVectors(n,e),Gs.subVectors(t,e);const a=un.dot(un),o=un.dot(wn),l=un.dot(Gs),c=wn.dot(wn),u=wn.dot(Gs),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(c*l-o*u)*p,g=(a*u-o*l)*p;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return qs.setScalar(0),Ys.setScalar(0),Zs.setScalar(0),qs.fromBufferAttribute(t,e),Ys.fromBufferAttribute(t,n),Zs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(qs,s.x),a.addScaledVector(Ys,s.y),a.addScaledVector(Zs,s.z),a}static isFrontFacing(t,e,n,r){return un.subVectors(n,e),wn.subVectors(t,e),un.cross(wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),un.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,n),Ri.subVectors(s,n),Vs.subVectors(t,n);const l=Ai.dot(Vs),c=Ri.dot(Vs);if(l<=0&&c<=0)return e.copy(n);Ws.subVectors(t,r);const u=Ai.dot(Ws),d=Ri.dot(Ws);if(u>=0&&d<=u)return e.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ai,a);Xs.subVectors(t,s);const f=Ai.dot(Xs),g=Ri.dot(Xs);if(g>=0&&f<=g)return e.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ri,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Vo.subVectors(s,r),o=(d-u)/(d-u+(f-g)),e.copy(r).addScaledVector(Vo,o);const h=1/(m+v+p);return a=v*h,o=p*h,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Ks(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=Gu(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ks(a,s,t+1/3),this.g=Ks(a,s,t),this.b=Ks(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Jt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ue(Le.r*255,0,255))*65536+Math.round(Ue(Le.g*255,0,255))*256+Math.round(Ue(Le.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,r=Le.g,s=Le.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ce){Jt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,r=Le.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(zr);const n=Ds(Hn.h,zr.h,e),r=Ds(Hn.s,zr.s,e),s=Ds(Hn.l,zr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new zt;zt.NAMES=Mc;let sh=0;class jn extends tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Zn(),this.name="",this.blending=Vi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Re extends jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new z,kr=new Tt;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class yc extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sc extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ah=0;const en=new ue,$s=new ve,Ci=new z,Ze=new Rr,or=new Rr,Te=new z;class ye extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gc(t)?Sc:yc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return $s.lookAt(t),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ze.min,or.min),Ze.expandByPoint(Te),Te.addVectors(Ze.max,or.max),Ze.expandByPoint(Te)):(Ze.expandByPoint(or.min),Ze.expandByPoint(or.max))}Ze.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Te.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(t,c),Te.add(Ci)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new z,l[D]=new z;const c=new z,u=new z,d=new z,p=new Tt,f=new Tt,g=new Tt,v=new z,m=new z;function h(D,S,y){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),p.fromBufferAttribute(s,D),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),f.sub(p),g.sub(p);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),o[D].add(v),o[S].add(v),o[y].add(v),l[D].add(m),l[S].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,S=T.length;D<S;++D){const y=T[D],A=y.start,X=y.count;for(let H=A,V=A+X;H<V;H+=3)h(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const w=new z,E=new z,N=new z,P=new z;function I(D){N.fromBufferAttribute(r,D),P.copy(N);const S=o[D];w.copy(S),w.sub(N.multiplyScalar(N.dot(S))).normalize(),E.crossVectors(P,S);const A=E.dot(l[D])<0?-1:1;a.setXYZW(D,w.x,w.y,w.z,A)}for(let D=0,S=T.length;D<S;++D){const y=T[D],A=y.start,X=y.count;for(let H=A,V=A+X;H<V;H+=3)I(t.getX(H+0)),I(t.getX(H+1)),I(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let h=0;h<u;h++)p[g++]=c[f++]}return new Ne(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new ue,ni=new fo,Hr=new Cr,Xo=new z,Gr=new z,Vr=new z,Wr=new z,js=new z,Xr=new z,qo=new z,qr=new z;class dt extends ve{constructor(t=new ye,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(js.fromBufferAttribute(d,t),a?Xr.addScaledVector(js,u):Xr.addScaledVector(js.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),ni.copy(t.ray).recast(t.near),!(Hr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Hr,Xo)===null||ni.origin.distanceToSquared(Xo)>(t.far-t.near)**2))&&(Wo.copy(s).invert(),ni.copy(t.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],h=a[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,N=w;E<N;E+=3){const P=o.getX(E),I=o.getX(E+1),D=o.getX(E+2);r=Yr(this,h,t,n,c,u,d,P,I,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const T=o.getX(m),w=o.getX(m+1),E=o.getX(m+2);r=Yr(this,a,t,n,c,u,d,T,w,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],h=a[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,N=w;E<N;E+=3){const P=E,I=E+1,D=E+2;r=Yr(this,h,t,n,c,u,d,P,I,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const T=m,w=m+1,E=m+2;r=Yr(this,a,t,n,c,u,d,T,w,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function oh(i,t,e,n,r,s,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Kn,o),l===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:i}}function Yr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Gr),i.getVertexPosition(l,Vr),i.getVertexPosition(c,Wr);const u=oh(i,t,e,n,Gr,Vr,Wr,qo);if(u){const d=new z;rn.getBarycoord(qo,Gr,Vr,Wr,d),r&&(u.uv=rn.getInterpolatedAttribute(r,o,l,c,d,new Tt)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,l,c,d,new Tt)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new z,materialIndex:0};rn.getNormal(Gr,Vr,Wr,p.normal),u.face=p,u.barycoord=d}return u}class Wt extends ye{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function g(v,m,h,T,w,E,N,P,I,D,S){const y=E/I,A=N/D,X=E/2,H=N/2,V=P/2,x=I+1,R=D+1;let L=0,C=0;const Z=new z;for(let nt=0;nt<R;nt++){const ht=nt*A-H;for(let Rt=0;Rt<x;Rt++){const Gt=Rt*y-X;Z[v]=Gt*T,Z[m]=ht*w,Z[h]=V,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[h]=P>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(Rt/I),d.push(1-nt/D),L+=1}}for(let nt=0;nt<D;nt++)for(let ht=0;ht<I;ht++){const Rt=p+ht+x*nt,Gt=p+ht+x*(nt+1),J=p+(ht+1)+x*(nt+1),st=p+(ht+1)+x*nt;l.push(Rt,Gt,st),l.push(Gt,J,st),C+=6}o.addGroup(f,C,S),f+=C,p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const r in n)t[r]=n[r]}return t}function lh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const ch={clone:Ji,merge:ze};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=lh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new z,Yo=new Tt,Zo=new Tt;class Ke extends Tc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Yo,Zo),e.subVectors(Zo,Yo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Ii=1;class fh extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(Pi,Ii,t,e);r.layers=this.layers,this.add(r);const s=new Ke(Pi,Ii,t,e);s.layers=this.layers,this.add(s);const a=new Ke(Pi,Ii,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Pi,Ii,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Pi,Ii,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Pi,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bc extends Ge{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dh extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new bc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wt(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:qn});s.uniforms.tEquirect.value=e;const a=new dt(r,s),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=sn),new fh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Js=new z,ph=new z,mh=new Ht;class li{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Js.subVectors(n,e).cross(ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mh.getNormalMatrix(t),r=this.coplanarPoint(Js).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Cr,Zr=new z;class po{constructor(t=new li,e=new li,n=new li,r=new li,s=new li,a=new li){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],f=r[8],g=r[9],v=r[10],m=r[11],h=r[12],T=r[13],w=r[14],E=r[15];if(n[0].setComponents(l-s,p-c,m-f,E-h).normalize(),n[1].setComponents(l+s,p+c,m+f,E+h).normalize(),n[2].setComponents(l+a,p+u,m+g,E+T).normalize(),n[3].setComponents(l-a,p-u,m-g,E-T).normalize(),n[4].setComponents(l-o,p-d,m-v,E-w).normalize(),e===Dn)n[5].setComponents(l+o,p+d,m+v,E+w).normalize();else if(e===vs)n[5].setComponents(o,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zr.x=r.normal.x>0?t.max.x:t.min.x,Zr.y=r.normal.y>0?t.max.y:t.min.y,Zr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function gh(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class $e extends ye{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=t/o,p=e/l,f=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const T=h*p-a;for(let w=0;w<c;w++){const E=w*d-s;g.push(E,-T,0),v.push(0,0,1),m.push(w/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const w=T+c*h,E=T+c*(h+1),N=T+1+c*(h+1),P=T+1+c*h;f.push(w,E,P),f.push(E,N,P)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_f=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Af=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,If=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ud=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Td=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:Mh,alphatest_fragment:yh,alphatest_pars_fragment:Sh,aomap_fragment:Eh,aomap_pars_fragment:Th,batching_pars_vertex:bh,batching_vertex:wh,begin_vertex:Ah,beginnormal_vertex:Rh,bsdfs:Ch,iridescence_fragment:Ph,bumpmap_pars_fragment:Ih,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:Bh,color_vertex:zh,common:kh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:Kh,envmap_common_pars_fragment:$h,envmap_pars_fragment:jh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:uf,envmap_vertex:Qh,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:rf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:lf,lights_pars_begin:cf,lights_toon_fragment:hf,lights_toon_pars_fragment:ff,lights_phong_fragment:df,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:_f,lights_fragment_maps:vf,lights_fragment_end:xf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:Ef,map_fragment:Tf,map_pars_fragment:bf,map_particle_fragment:wf,map_particle_pars_fragment:Af,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Pf,morphcolor_vertex:If,morphnormal_vertex:Df,morphtarget_pars_vertex:Lf,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Ff,normal_pars_fragment:Of,normal_pars_vertex:Bf,normal_vertex:zf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Vf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:Zf,dithering_fragment:Kf,dithering_pars_fragment:$f,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:td,shadowmap_vertex:ed,shadowmask_pars_fragment:nd,skinbase_vertex:id,skinning_pars_vertex:rd,skinning_vertex:sd,skinnormal_vertex:ad,specularmap_fragment:od,specularmap_pars_fragment:ld,tonemapping_fragment:cd,tonemapping_pars_fragment:ud,transmission_fragment:hd,transmission_pars_fragment:fd,uv_pars_fragment:dd,uv_pars_vertex:pd,uv_vertex:md,worldpos_vertex:gd,background_vert:_d,background_frag:vd,backgroundCube_vert:xd,backgroundCube_frag:Md,cube_vert:yd,cube_frag:Sd,depth_vert:Ed,depth_frag:Td,distanceRGBA_vert:bd,distanceRGBA_frag:wd,equirect_vert:Ad,equirect_frag:Rd,linedashed_vert:Cd,linedashed_frag:Pd,meshbasic_vert:Id,meshbasic_frag:Dd,meshlambert_vert:Ld,meshlambert_frag:Ud,meshmatcap_vert:Nd,meshmatcap_frag:Fd,meshnormal_vert:Od,meshnormal_frag:Bd,meshphong_vert:zd,meshphong_frag:kd,meshphysical_vert:Hd,meshphysical_frag:Gd,meshtoon_vert:Vd,meshtoon_frag:Wd,points_vert:Xd,points_frag:qd,shadow_vert:Yd,shadow_frag:Zd,sprite_vert:Kd,sprite_frag:$d},ft={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},gn={basic:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ze([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ze([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ze([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ze([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ze([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ze([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ze([ft.common,ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ze([ft.lights,ft.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};gn.physical={uniforms:ze([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Kr={r:0,b:0,g:0},ri=new xn,jd=new ue;function Jd(i,t,e,n,r,s,a){const o=new zt(0);let l=s===!0?0:1,c,u,d=null,p=0,f=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function v(T){let w=!1;const E=g(T);E===null?h(o,l):E&&E.isColor&&(h(E,1),w=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,w){const E=g(w);E&&(E.isCubeTexture||E.mapping===bs)?(u===void 0&&(u=new dt(new Wt(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ji(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ri.copy(w.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jd.makeRotationFromEuler(ri)),u.material.toneMapped=Jt.getTransfer(E.colorSpace)!==ae,(d!==E||p!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,p=E.version,f=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new dt(new $e(2,2),new $n({name:"BackgroundMaterial",uniforms:Ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(E.colorSpace)!==ae,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,p=E.version,f=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,w){T.getRGB(Kr,Ec(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),l=w,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:v,addToRenderList:m}}function Qd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(y,A,X,H,V){let x=!1;const R=d(H,X,A);s!==R&&(s=R,c(s.object)),x=f(y,H,X,V),x&&g(y,H,X,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(x||a)&&(a=!1,E(y,A,X,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,A,X){const H=X.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let x=V[A.id];x===void 0&&(x={},V[A.id]=x);let R=x[H];return R===void 0&&(R=p(l()),x[H]=R),R}function p(y){const A=[],X=[],H=[];for(let V=0;V<e;V++)A[V]=0,X[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:X,attributeDivisors:H,object:y,attributes:{},index:null}}function f(y,A,X,H){const V=s.attributes,x=A.attributes;let R=0;const L=X.getAttributes();for(const C in L)if(L[C].location>=0){const nt=V[C];let ht=x[C];if(ht===void 0&&(C==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),C==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),nt===void 0||nt.attribute!==ht||ht&&nt.data!==ht.data)return!0;R++}return s.attributesNum!==R||s.index!==H}function g(y,A,X,H){const V={},x=A.attributes;let R=0;const L=X.getAttributes();for(const C in L)if(L[C].location>=0){let nt=x[C];nt===void 0&&(C==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),C==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor));const ht={};ht.attribute=nt,nt&&nt.data&&(ht.data=nt.data),V[C]=ht,R++}s.attributes=V,s.attributesNum=R,s.index=H}function v(){const y=s.newAttributes;for(let A=0,X=y.length;A<X;A++)y[A]=0}function m(y){h(y,0)}function h(y,A){const X=s.newAttributes,H=s.enabledAttributes,V=s.attributeDivisors;X[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),V[y]!==A&&(i.vertexAttribDivisor(y,A),V[y]=A)}function T(){const y=s.newAttributes,A=s.enabledAttributes;for(let X=0,H=A.length;X<H;X++)A[X]!==y[X]&&(i.disableVertexAttribArray(X),A[X]=0)}function w(y,A,X,H,V,x,R){R===!0?i.vertexAttribIPointer(y,A,X,V,x):i.vertexAttribPointer(y,A,X,H,V,x)}function E(y,A,X,H){v();const V=H.attributes,x=X.getAttributes(),R=A.defaultAttributeValues;for(const L in x){const C=x[L];if(C.location>=0){let Z=V[L];if(Z===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const nt=Z.normalized,ht=Z.itemSize,Rt=t.get(Z);if(Rt===void 0)continue;const Gt=Rt.buffer,J=Rt.type,st=Rt.bytesPerElement,ct=J===i.INT||J===i.UNSIGNED_INT||Z.gpuType===ao;if(Z.isInterleavedBufferAttribute){const $=Z.data,Ct=$.stride,vt=Z.offset;if($.isInstancedInterleavedBuffer){for(let Lt=0;Lt<C.locationSize;Lt++)h(C.location+Lt,$.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Lt=0;Lt<C.locationSize;Lt++)m(C.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Lt=0;Lt<C.locationSize;Lt++)w(C.location+Lt,ht/C.locationSize,J,nt,Ct*st,(vt+ht/C.locationSize*Lt)*st,ct)}else{if(Z.isInstancedBufferAttribute){for(let $=0;$<C.locationSize;$++)h(C.location+$,Z.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<C.locationSize;$++)m(C.location+$);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let $=0;$<C.locationSize;$++)w(C.location+$,ht/C.locationSize,J,nt,ht*st,ht/C.locationSize*$*st,ct)}}else if(R!==void 0){const nt=R[L];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(C.location,nt);break;case 3:i.vertexAttrib3fv(C.location,nt);break;case 4:i.vertexAttrib4fv(C.location,nt);break;default:i.vertexAttrib1fv(C.location,nt)}}}}T()}function N(){D();for(const y in n){const A=n[y];for(const X in A){const H=A[X];for(const V in H)u(H[V].object),delete H[V];delete A[X]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const X in A){const H=A[X];for(const V in H)u(H[V].object),delete H[V];delete A[X]}delete n[y.id]}function I(y){for(const A in n){const X=n[A];if(X[y.id]===void 0)continue;const H=X[y.id];for(const V in H)u(H[V].object),delete H[V];delete X[y.id]}}function D(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function tp(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function l(c,u,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*p[v];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ep(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const D=I===wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:N,maxSamples:P}}function np(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new li,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||r;return r=p,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,w=T*4;let E=h.clippingState||null;l.value=E,E=u(g,p,w,f);for(let N=0;N!==w;++N)E[N]=e[N];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=f+v*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,E=f;w!==v;++w,E+=4)a.copy(d[w]).applyMatrix4(T,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ip(i){let t=new WeakMap;function e(a,o){return o===Ea?a.mapping=Zi:o===Ta&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ea||o===Ta)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ac extends Tc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,Ko=[.125,.215,.35,.446,.526,.582],hi=20,Qs=new Ac,$o=new zt;let ta=null,ea=0,na=0,ia=!1;const ci=(1+Math.sqrt(5))/2,Di=1/ci,jo=[new z(-ci,Di,0),new z(ci,Di,0),new z(-Di,0,ci),new z(Di,0,ci),new z(0,ci,-Di),new z(0,ci,Di),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class to{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:wr,format:hn,colorSpace:Qi,depthBuffer:!1},r=Jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rp(s)),this._blurMaterial=sp(s,t,e)}return r}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,r){const o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor($o),u.toneMapping=Yn,u.autoClear=!1;const f=new Re({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new dt(new Wt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy($o),v=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const w=this._cubeSize;$r(r,T*w,h>2?w:0,w,w),u.setRenderTarget(r),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Zi||t.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;$r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jo[(r-s-1)%jo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new dt(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const h=[];let T=0;for(let I=0;I<hi;++I){const D=I/v,S=Math.exp(-D*D/2);h.push(S),I===0?T+=S:I<m&&(T+=2*S)}for(let I=0;I<h.length;I++)h[I]=h[I]/T;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-n;const E=this._sizeLods[r],N=3*E*(r>w-Hi?r-w+Hi:0),P=4*(this._cubeSize-E);$r(e,N,P,3*E,2*E),l.setRenderTarget(e),l.render(d,Qs)}}function rp(i){const t=[],e=[],n=[];let r=i;const s=i-Hi+1+Ko.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Hi?l=Ko[a-i+Hi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,h=1,T=new Float32Array(v*g*f),w=new Float32Array(m*g*f),E=new Float32Array(h*g*f);for(let P=0;P<f;P++){const I=P%3*2/3-1,D=P>2?0:-1,S=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];T.set(S,v*g*P),w.set(p,m*g*P);const y=[P,P,P,P,P,P];E.set(y,h*g*P)}const N=new ye;N.setAttribute("position",new Ne(T,v)),N.setAttribute("uv",new Ne(w,m)),N.setAttribute("faceIndex",new Ne(E,h)),t.push(N),r>Hi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jo(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function sp(i,t,e){const n=new Float32Array(hi),r=new z(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qo(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function tl(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ap(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ea||l===Ta,u=l===Zi||l===Ki;if(c||u){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new to(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new to(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function op(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lp(i,t,e,n){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)t.remove(v[m])}p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,h=v.length;m<h;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let w=0,E=T.length;w<E;w+=3){const N=T[w+0],P=T[w+1],I=T[w+2];p.push(N,P,P,I,I,N)}}else if(g!==void 0){const T=g.array;v=g.version;for(let w=0,E=T.length/3-1;w<E;w+=3){const N=w+0,P=w+1,I=w+2;p.push(N,P,P,I,I,N)}}else return;const m=new(gc(p)?Sc:yc)(p,1);m.version=v;const h=s.get(d);h&&t.remove(h),s.set(d,m)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function cp(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*a),e.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,p*a,g),e.update(f,n,g))}function u(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let m=0;for(let h=0;h<g;h++)m+=f[h];e.update(m,n,1)}function d(p,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/a,f[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,v,0,g);let h=0;for(let T=0;T<g;T++)h+=f[T]*v[T];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function up(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function hp(i,t,e){const n=new WeakMap,r=new le;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let N=o.attributes.position.count*E,P=1;N>t.maxTextureSize&&(P=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const I=new Float32Array(N*P*4*d),D=new vc(I,N,P,d);D.type=In,D.needsUpdate=!0;const S=E*4;for(let A=0;A<d;A++){const X=h[A],H=T[A],V=w[A],x=N*P*4*A;for(let R=0;R<X.count;R++){const L=R*S;g===!0&&(r.fromBufferAttribute(X,R),I[x+L+0]=r.x,I[x+L+1]=r.y,I[x+L+2]=r.z,I[x+L+3]=0),v===!0&&(r.fromBufferAttribute(H,R),I[x+L+4]=r.x,I[x+L+5]=r.y,I[x+L+6]=r.z,I[x+L+7]=0),m===!0&&(r.fromBufferAttribute(V,R),I[x+L+8]=r.x,I[x+L+9]=r.y,I[x+L+10]=r.z,I[x+L+11]=V.itemSize===4?r.w:1)}}p={count:d,texture:D,size:new Tt(N,P)},n.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function fp(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Rc extends Ge{constructor(t,e,n,r,s,a,o,l,c,u=Wi){if(u!==Wi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wi&&(n=pi),n===void 0&&u===ji&&(n=$i),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cc=new Ge,el=new Rc(1,1),Pc=new vc,Ic=new ju,Dc=new bc,nl=[],il=[],rl=new Float32Array(16),sl=new Float32Array(9),al=new Float32Array(4);function er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=nl[r];if(s===void 0&&(s=new Float32Array(r),nl[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function As(i,t){let e=il[t];e===void 0&&(e=new Int32Array(t),il[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;al.set(n),i.uniformMatrix2fv(this.addr,!1,al),Ee(e,n)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),Ee(e,n)}}function xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;rl.set(n),i.uniformMatrix4fv(this.addr,!1,rl),Ee(e,n)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Rp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(el.compareFunction=mc,s=el):s=Cc,e.setTexture2D(t||s,r)}function Cp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ic,r)}function Pp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Dc,r)}function Ip(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Pc,r)}function Dp(i){switch(i){case 5126:return dp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ep;case 5125:return Tp;case 36294:return bp;case 36295:return wp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Lp(i,t){i.uniform1fv(this.addr,t)}function Up(i,t){const e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function Np(i,t){const e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function Fp(i,t){const e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Op(i,t){const e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bp(i,t){const e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zp(i,t){const e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kp(i,t){i.uniform1iv(this.addr,t)}function Hp(i,t){i.uniform2iv(this.addr,t)}function Gp(i,t){i.uniform3iv(this.addr,t)}function Vp(i,t){i.uniform4iv(this.addr,t)}function Wp(i,t){i.uniform1uiv(this.addr,t)}function Xp(i,t){i.uniform2uiv(this.addr,t)}function qp(i,t){i.uniform3uiv(this.addr,t)}function Yp(i,t){i.uniform4uiv(this.addr,t)}function Zp(i,t,e){const n=this.cache,r=t.length,s=As(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Cc,s[a])}function Kp(i,t,e){const n=this.cache,r=t.length,s=As(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ic,s[a])}function $p(i,t,e){const n=this.cache,r=t.length,s=As(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Dc,s[a])}function jp(i,t,e){const n=this.cache,r=t.length,s=As(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Pc,s[a])}function Jp(i){switch(i){case 5126:return Lp;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return kp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return jp}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jp(e.type)}}class em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function ol(i,t){i.seq.push(t),i.map[t.id]=t}function nm(i,t,e){const n=i.name,r=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),a=ra.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ol(e,c===void 0?new Qp(o,i,t):new tm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new em(o),ol(e,d)),e=d}}}class gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);nm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const im=37297;let rm=0;function sm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const cl=new Ht;function am(i){Jt._getMatrix(cl,Jt.workingColorSpace,i);const t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case ws:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ul(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+sm(i.getShaderSource(t),a)}else return r}function om(i,t){const e=am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lm(i,t){let e;switch(t){case bu:e="Linear";break;case wu:e="Reinhard";break;case Au:e="Cineon";break;case nc:e="ACESFilmic";break;case Cu:e="AgX";break;case Pu:e="Neutral";break;case Ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new z;function cm(){Jt.getLuminanceCoefficients(jr);const i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function hm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _r(i){return i!==""}function hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(dm,mm)}const pm=new Map;function mm(i,t){let e=Vt[t];if(e===void 0){const n=pm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eo(e)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(i){return i.replace(gm,_m)}function _m(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ec:t="ENVMAP_BLENDING_MULTIPLY";break;case Eu:t="ENVMAP_BLENDING_MIX";break;case Tu:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Em(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vm(e),c=xm(e),u=Mm(e),d=ym(e),p=Sm(e),f=um(e),g=hm(s),v=r.createProgram();let m,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),h.length>0&&(h+=`
`)):(m=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),h=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=eo(a),a=hl(a,e),a=fl(a,e),o=eo(o),o=hl(o,e),o=fl(o,e),a=dl(a),o=dl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=T+m+a,E=T+h+o,N=ll(r,r.VERTEX_SHADER,w),P=ll(r,r.FRAGMENT_SHADER,E);r.attachShader(v,N),r.attachShader(v,P),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(A){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(N).trim(),V=r.getShaderInfoLog(P).trim();let x=!0,R=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(x=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,N,P);else{const L=ul(r,N,"vertex"),C=ul(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+X+`
`+L+`
`+C)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||V==="")&&(R=!1);R&&(A.diagnostics={runnable:x,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(N),r.deleteShader(P),D=new gs(r,v),S=fm(r,v)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,im)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=P,this}let Tm=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wm(t),e.set(t,n)),n}}class wm{constructor(t){this.id=Tm++,this.code=t,this.usedTimes=0}}function Am(i,t,e,n,r,s,a){const o=new xc,l=new bm,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,A,X,H){const V=X.fog,x=H.geometry,R=S.isMeshStandardMaterial?X.environment:null,L=(S.isMeshStandardMaterial?e:t).get(S.envMap||R),C=L&&L.mapping===bs?L.image.height:null,Z=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const nt=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,ht=nt!==void 0?nt.length:0;let Rt=0;x.morphAttributes.position!==void 0&&(Rt=1),x.morphAttributes.normal!==void 0&&(Rt=2),x.morphAttributes.color!==void 0&&(Rt=3);let Gt,J,st,ct;if(Z){const Yt=gn[Z];Gt=Yt.vertexShader,J=Yt.fragmentShader}else Gt=S.vertexShader,J=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),ct=l.getFragmentShaderID(S);const $=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),vt=H.isInstancedMesh===!0,Lt=H.isBatchedMesh===!0,jt=!!S.map,Ot=!!S.matcap,Qt=!!L,O=!!S.aoMap,$t=!!S.lightMap,Bt=!!S.bumpMap,j=!!S.normalMap,rt=!!S.displacementMap,Et=!!S.emissiveMap,pt=!!S.metalnessMap,b=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,et=S.dispersion>0,it=S.iridescence>0,tt=S.sheen>0,mt=S.transmission>0,ut=M&&!!S.anisotropyMap,xt=G&&!!S.clearcoatMap,Xt=G&&!!S.clearcoatNormalMap,ot=G&&!!S.clearcoatRoughnessMap,yt=it&&!!S.iridescenceMap,It=it&&!!S.iridescenceThicknessMap,Dt=tt&&!!S.sheenColorMap,St=tt&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,Nt=!!S.specularColorMap,se=!!S.specularIntensityMap,B=mt&&!!S.transmissionMap,gt=mt&&!!S.thicknessMap,Q=!!S.gradientMap,F=!!S.alphaMap,Y=S.alphaTest>0,K=!!S.alphaHash,at=!!S.extensions;let Mt=Yn;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const ne={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:J,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&H._colorsTexture!==null,instancing:vt,instancingColor:vt&&H.instanceColor!==null,instancingMorph:vt&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:jt,matcap:Ot,envMap:Qt,envMapMode:Qt&&L.mapping,envMapCubeUVHeight:C,aoMap:O,lightMap:$t,bumpMap:Bt,normalMap:j,displacementMap:p&&rt,emissiveMap:Et,normalMapObjectSpace:j&&S.normalMapType===Uu,normalMapTangentSpace:j&&S.normalMapType===pc,metalnessMap:pt,roughnessMap:b,anisotropy:M,anisotropyMap:ut,clearcoat:G,clearcoatMap:xt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ot,dispersion:et,iridescence:it,iridescenceMap:yt,iridescenceThicknessMap:It,sheen:tt,sheenColorMap:Dt,sheenRoughnessMap:St,specularMap:Kt,specularColorMap:Nt,specularIntensityMap:se,transmission:mt,transmissionMap:B,thicknessMap:gt,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Vi&&S.alphaToCoverage===!1,alphaMap:F,alphaTest:Y,alphaHash:K,combine:S.combine,mapUv:jt&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:$t&&v(S.lightMap.channel),bumpMapUv:Bt&&v(S.bumpMap.channel),normalMapUv:j&&v(S.normalMap.channel),displacementMapUv:rt&&v(S.displacementMap.channel),emissiveMapUv:Et&&v(S.emissiveMap.channel),metalnessMapUv:pt&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:ut&&v(S.anisotropyMap.channel),clearcoatMapUv:xt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(S.sheenRoughnessMap.channel),specularMapUv:Kt&&v(S.specularMap.channel),specularColorMapUv:Nt&&v(S.specularColorMap.channel),specularIntensityMapUv:se&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:gt&&v(S.thicknessMap.channel),alphaMapUv:F&&v(S.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(j||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!x.attributes.uv&&(jt||F),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:H.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:jt&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:Et&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===He,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:at&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&S.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function h(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)y.push(A),y.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(T(y,S),w(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const y=g[S.type];let A;if(y){const X=gn[y];A=ch.clone(X.uniforms)}else A=S.uniforms;return A}function N(S,y){let A;for(let X=0,H=u.length;X<H;X++){const V=u[X];if(V.cacheKey===y){A=V,++A.usedTimes;break}}return A===void 0&&(A=new Em(i,y,S,s),u.push(A)),A}function P(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function I(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:N,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:D}}function Rm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ml(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,p,f,g,v,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=m),t++,h}function o(d,p,f,g,v,m){const h=a(d,p,f,g,v,m);f.transmission>0?n.push(h):f.transparent===!0?r.push(h):e.push(h)}function l(d,p,f,g,v,m){const h=a(d,p,f,g,v,m);f.transmission>0?n.unshift(h):f.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,p){e.length>1&&e.sort(d||Cm),n.length>1&&n.sort(p||ml),r.length>1&&r.sort(p||ml)}function u(){for(let d=t,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Pm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new gl,i.set(n,[a])):r>=s.length?(a=new gl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Im(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new zt};break;case"SpotLight":e={position:new z,direction:new z,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lm=0;function Um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nm(i){const t=new Im,e=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new ue,a=new ue;function o(c){let u=0,d=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,h=0,T=0,w=0,E=0,N=0,P=0,I=0;c.sort(Um);for(let S=0,y=c.length;S<y;S++){const A=c[S],X=A.color,H=A.intensity,V=A.distance,x=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=X.r*H,d+=X.g*H,p+=X.b*H;else if(A.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(A.sh.coefficients[R],H);I++}else if(A.isDirectionalLight){const R=t.get(A);if(R.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const L=A.shadow,C=e.get(A);C.shadowIntensity=L.intensity,C.shadowBias=L.bias,C.shadowNormalBias=L.normalBias,C.shadowRadius=L.radius,C.shadowMapSize=L.mapSize,n.directionalShadow[f]=C,n.directionalShadowMap[f]=x,n.directionalShadowMatrix[f]=A.shadow.matrix,T++}n.directional[f]=R,f++}else if(A.isSpotLight){const R=t.get(A);R.position.setFromMatrixPosition(A.matrixWorld),R.color.copy(X).multiplyScalar(H),R.distance=V,R.coneCos=Math.cos(A.angle),R.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),R.decay=A.decay,n.spot[v]=R;const L=A.shadow;if(A.map&&(n.spotLightMap[N]=A.map,N++,L.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[v]=L.matrix,A.castShadow){const C=e.get(A);C.shadowIntensity=L.intensity,C.shadowBias=L.bias,C.shadowNormalBias=L.normalBias,C.shadowRadius=L.radius,C.shadowMapSize=L.mapSize,n.spotShadow[v]=C,n.spotShadowMap[v]=x,E++}v++}else if(A.isRectAreaLight){const R=t.get(A);R.color.copy(X).multiplyScalar(H),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=R,m++}else if(A.isPointLight){const R=t.get(A);if(R.color.copy(A.color).multiplyScalar(A.intensity),R.distance=A.distance,R.decay=A.decay,A.castShadow){const L=A.shadow,C=e.get(A);C.shadowIntensity=L.intensity,C.shadowBias=L.bias,C.shadowNormalBias=L.normalBias,C.shadowRadius=L.radius,C.shadowMapSize=L.mapSize,C.shadowCameraNear=L.camera.near,C.shadowCameraFar=L.camera.far,n.pointShadow[g]=C,n.pointShadowMap[g]=x,n.pointShadowMatrix[g]=A.shadow.matrix,w++}n.point[g]=R,g++}else if(A.isHemisphereLight){const R=t.get(A);R.skyColor.copy(A.color).multiplyScalar(H),R.groundColor.copy(A.groundColor).multiplyScalar(H),n.hemi[h]=R,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==E||D.numSpotMaps!==N||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+N-P,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=E,D.numSpotMaps=N,D.numLightProbes=I,n.version=Lm++)}function l(c,u){let d=0,p=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const w=c[h];if(w.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(w.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function _l(i){const t=new Nm(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Fm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new _l(i),t.set(r,[o])):s>=a.length?(o=new _l(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Om extends jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bm extends jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hm(i,t,e){let n=new po;const r=new Tt,s=new Tt,a=new le,o=new Om({depthPacking:Lu}),l=new Bm,c={},u=e.maxTextureSize,d={[Kn]:He,[He]:Kn,[nn]:nn},p=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:zm,fragmentShader:km}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let h=this.type;this.render=function(P,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),X=i.state;X.setBlending(qn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=h!==Rn&&this.type===Rn,V=h===Rn&&this.type!==Rn;for(let x=0,R=P.length;x<R;x++){const L=P[x],C=L.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const Z=C.getFrameExtents();if(r.multiply(Z),s.copy(C.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,C.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,C.mapSize.y=s.y)),C.map===null||H===!0||V===!0){const ht=this.type!==Rn?{minFilter:fn,magFilter:fn}:{};C.map!==null&&C.map.dispose(),C.map=new mi(r.x,r.y,ht),C.map.texture.name=L.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();const nt=C.getViewportCount();for(let ht=0;ht<nt;ht++){const Rt=C.getViewport(ht);a.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),X.viewport(a),C.updateMatrices(L,ht),n=C.getFrustum(),E(I,D,C.camera,L,this.type)}C.isPointLightShadow!==!0&&this.type===Rn&&T(C,D),C.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,A)};function T(P,I){const D=t.update(v);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new mi(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,D,p,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,D,f,v,null)}function w(P,I,D,S){let y=null;const A=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)y=A;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const X=y.uuid,H=I.uuid;let V=c[X];V===void 0&&(V={},c[X]=V);let x=V[H];x===void 0&&(x=y.clone(),V[H]=x,I.addEventListener("dispose",N)),y=x}if(y.visible=I.visible,y.wireframe=I.wireframe,S===Rn?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:d[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=i.properties.get(y);X.light=D}return y}function E(P,I,D,S,y){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Rn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const H=t.update(P),V=P.material;if(Array.isArray(V)){const x=H.groups;for(let R=0,L=x.length;R<L;R++){const C=x[R],Z=V[C.materialIndex];if(Z&&Z.visible){const nt=w(P,Z,S,y);P.onBeforeShadow(i,P,I,D,H,nt,C),i.renderBufferDirect(D,null,H,nt,P,C),P.onAfterShadow(i,P,I,D,H,nt,C)}}}else if(V.visible){const x=w(P,V,S,y);P.onBeforeShadow(i,P,I,D,H,x,null),i.renderBufferDirect(D,null,H,x,P,null),P.onAfterShadow(i,P,I,D,H,x,null)}}const X=P.children;for(let H=0,V=X.length;H<V;H++)E(X[H],I,D,S,y)}function N(P){P.target.removeEventListener("dispose",N);for(const D in c){const S=c[D],y=P.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Gm={[ga]:_a,[va]:ya,[xa]:Sa,[Yi]:Ma,[_a]:ga,[ya]:va,[Sa]:xa,[Ma]:Yi};function Vm(i,t){function e(){let B=!1;const gt=new le;let Q=null;const F=new le(0,0,0,0);return{setMask:function(Y){Q!==Y&&!B&&(i.colorMask(Y,Y,Y,Y),Q=Y)},setLocked:function(Y){B=Y},setClear:function(Y,K,at,Mt,ne){ne===!0&&(Y*=Mt,K*=Mt,at*=Mt),gt.set(Y,K,at,Mt),F.equals(gt)===!1&&(i.clearColor(Y,K,at,Mt),F.copy(gt))},reset:function(){B=!1,Q=null,F.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,Q=null,F=null,Y=null;return{setReversed:function(K){if(gt!==K){const at=t.get("EXT_clip_control");gt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Y;Y=null,this.setClear(Mt)}gt=K},getReversed:function(){return gt},setTest:function(K){K?$(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(K){Q!==K&&!B&&(i.depthMask(K),Q=K)},setFunc:function(K){if(gt&&(K=Gm[K]),F!==K){switch(K){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=K}},setLocked:function(K){B=K},setClear:function(K){Y!==K&&(gt&&(K=1-K),i.clearDepth(K),Y=K)},reset:function(){B=!1,Q=null,F=null,Y=null,gt=!1}}}function r(){let B=!1,gt=null,Q=null,F=null,Y=null,K=null,at=null,Mt=null,ne=null;return{setTest:function(Yt){B||(Yt?$(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Yt){gt!==Yt&&!B&&(i.stencilMask(Yt),gt=Yt)},setFunc:function(Yt,ge,Fe){(Q!==Yt||F!==ge||Y!==Fe)&&(i.stencilFunc(Yt,ge,Fe),Q=Yt,F=ge,Y=Fe)},setOp:function(Yt,ge,Fe){(K!==Yt||at!==ge||Mt!==Fe)&&(i.stencilOp(Yt,ge,Fe),K=Yt,at=ge,Mt=Fe)},setLocked:function(Yt){B=Yt},setClear:function(Yt){ne!==Yt&&(i.clearStencil(Yt),ne=Yt)},reset:function(){B=!1,gt=null,Q=null,F=null,Y=null,K=null,at=null,Mt=null,ne=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,h=null,T=null,w=null,E=null,N=null,P=null,I=new zt(0,0,0),D=0,S=!1,y=null,A=null,X=null,H=null,V=null;const x=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,L=0;const C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(C)[1]),R=L>=1):C.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),R=L>=2);let Z=null,nt={};const ht=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Gt=new le().fromArray(ht),J=new le().fromArray(Rt);function st(B,gt,Q,F){const Y=new Uint8Array(4),K=i.createTexture();i.bindTexture(B,K),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<Q;at++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,F,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(gt+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return K}const ct={};ct[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Yi),Bt(!1),j(To),$(i.CULL_FACE),O(qn);function $(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Ct(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function vt(B,gt){return d[B]!==gt?(i.bindFramebuffer(B,gt),d[B]=gt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Lt(B,gt){let Q=f,F=!1;if(B){Q=p.get(gt),Q===void 0&&(Q=[],p.set(gt,Q));const Y=B.textures;if(Q.length!==Y.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let K=0,at=Y.length;K<at;K++)Q[K]=i.COLOR_ATTACHMENT0+K;Q.length=Y.length,F=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,F=!0);F&&i.drawBuffers(Q)}function jt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const Ot={[ui]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};Ot[lu]=i.MIN,Ot[cu]=i.MAX;const Qt={[uu]:i.ZERO,[hu]:i.ONE,[fu]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[gu]:i.DST_COLOR,[pu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[_u]:i.ONE_MINUS_DST_COLOR,[mu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function O(B,gt,Q,F,Y,K,at,Mt,ne,Yt){if(B===qn){v===!0&&(Ct(i.BLEND),v=!1);return}if(v===!1&&($(i.BLEND),v=!0),B!==su){if(B!==m||Yt!==S){if((h!==ui||E!==ui)&&(i.blendEquation(i.FUNC_ADD),h=ui,E=ui),Yt)switch(B){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.ONE,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,w=null,N=null,P=null,I.set(0,0,0),D=0,m=B,S=Yt}return}Y=Y||gt,K=K||Q,at=at||F,(gt!==h||Y!==E)&&(i.blendEquationSeparate(Ot[gt],Ot[Y]),h=gt,E=Y),(Q!==T||F!==w||K!==N||at!==P)&&(i.blendFuncSeparate(Qt[Q],Qt[F],Qt[K],Qt[at]),T=Q,w=F,N=K,P=at),(Mt.equals(I)===!1||ne!==D)&&(i.blendColor(Mt.r,Mt.g,Mt.b,ne),I.copy(Mt),D=ne),m=B,S=!1}function $t(B,gt){B.side===nn?Ct(i.CULL_FACE):$(i.CULL_FACE);let Q=B.side===He;gt&&(Q=!Q),Bt(Q),B.blending===Vi&&B.transparent===!1?O(qn):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const F=B.stencilWrite;o.setTest(F),F&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Et(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function j(B){B!==iu?($(i.CULL_FACE),B!==A&&(B===To?i.cullFace(i.BACK):B===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),A=B}function rt(B){B!==X&&(R&&i.lineWidth(B),X=B)}function Et(B,gt,Q){B?($(i.POLYGON_OFFSET_FILL),(H!==gt||V!==Q)&&(i.polygonOffset(gt,Q),H=gt,V=Q)):Ct(i.POLYGON_OFFSET_FILL)}function pt(B){B?$(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function b(B){B===void 0&&(B=i.TEXTURE0+x-1),Z!==B&&(i.activeTexture(B),Z=B)}function M(B,gt,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+x-1:Q=Z);let F=nt[Q];F===void 0&&(F={type:void 0,texture:void 0},nt[Q]=F),(F.type!==B||F.texture!==gt)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(B,gt||ct[B]),F.type=B,F.texture=gt)}function G(){const B=nt[Z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(B){Gt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Gt.copy(B))}function St(B){J.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function Kt(B,gt){let Q=c.get(gt);Q===void 0&&(Q=new WeakMap,c.set(gt,Q));let F=Q.get(B);F===void 0&&(F=i.getUniformBlockIndex(gt,B.name),Q.set(B,F))}function Nt(B,gt){const F=c.get(gt).get(B);l.get(gt)!==F&&(i.uniformBlockBinding(gt,F,B.__bindingPointIndex),l.set(gt,F))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,nt={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,h=null,T=null,w=null,E=null,N=null,P=null,I=new zt(0,0,0),D=0,S=!1,y=null,A=null,X=null,H=null,V=null,Gt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:Ct,bindFramebuffer:vt,drawBuffers:Lt,useProgram:jt,setBlending:O,setMaterial:$t,setFlipSided:Bt,setCullFace:j,setLineWidth:rt,setPolygonOffset:Et,setScissorTest:pt,activeTexture:b,bindTexture:M,unbindTexture:G,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:yt,texImage3D:It,updateUBOMapping:Kt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:ot,texSubImage2D:tt,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:xt,scissor:Dt,viewport:St,reset:se}}function vl(i,t,e,n){const r=Wm(n);switch(e){case oc:return i*t;case cc:return i*t;case uc:return i*t*2;case hc:return i*t/r.components*r.byteLength;case co:return i*t/r.components*r.byteLength;case fc:return i*t*2/r.components*r.byteLength;case uo:return i*t*2/r.components*r.byteLength;case lc:return i*t*3/r.components*r.byteLength;case hn:return i*t*4/r.components*r.byteLength;case ho:return i*t*4/r.components*r.byteLength;case hs:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ds:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Ra:return Math.max(i,8)*Math.max(t,8)/2;case Pa:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ms:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dc:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(i){switch(i){case Un:case rc:return{byteLength:1,components:1};case Er:case sc:case wr:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case pi:case ao:case In:return{byteLength:4,components:1};case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,M){return f?new OffscreenCanvas(b,M):xs("canvas")}function v(b,M,G){let et=1;const it=pt(b);if((it.width>G||it.height>G)&&(et=G/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){const tt=Math.floor(et*it.width),mt=Math.floor(et*it.height);d===void 0&&(d=g(tt,mt));const ut=M?g(tt,mt):d;return ut.width=tt,ut.height=mt,ut.getContext("2d").drawImage(b,0,0,tt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+mt+")."),ut}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,M,G,et,it=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=M;if(M===i.RED&&(G===i.FLOAT&&(tt=i.R32F),G===i.HALF_FLOAT&&(tt=i.R16F),G===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.R8UI),G===i.UNSIGNED_SHORT&&(tt=i.R16UI),G===i.UNSIGNED_INT&&(tt=i.R32UI),G===i.BYTE&&(tt=i.R8I),G===i.SHORT&&(tt=i.R16I),G===i.INT&&(tt=i.R32I)),M===i.RG&&(G===i.FLOAT&&(tt=i.RG32F),G===i.HALF_FLOAT&&(tt=i.RG16F),G===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RG8UI),G===i.UNSIGNED_SHORT&&(tt=i.RG16UI),G===i.UNSIGNED_INT&&(tt=i.RG32UI),G===i.BYTE&&(tt=i.RG8I),G===i.SHORT&&(tt=i.RG16I),G===i.INT&&(tt=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),G===i.UNSIGNED_INT&&(tt=i.RGB32UI),G===i.BYTE&&(tt=i.RGB8I),G===i.SHORT&&(tt=i.RGB16I),G===i.INT&&(tt=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),G===i.UNSIGNED_INT&&(tt=i.RGBA32UI),G===i.BYTE&&(tt=i.RGBA8I),G===i.SHORT&&(tt=i.RGBA16I),G===i.INT&&(tt=i.RGBA32I)),M===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),M===i.RGBA){const mt=it?ws:Jt.getTransfer(et);G===i.FLOAT&&(tt=i.RGBA32F),G===i.HALF_FLOAT&&(tt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(tt=mt===ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function E(b,M){let G;return b?M===null||M===pi||M===$i?G=i.DEPTH24_STENCIL8:M===In?G=i.DEPTH32F_STENCIL8:M===Er&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===$i?G=i.DEPTH_COMPONENT24:M===In?G=i.DEPTH_COMPONENT32F:M===Er&&(G=i.DEPTH_COMPONENT16),G}function N(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==fn&&b.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function P(b){const M=b.target;M.removeEventListener("dispose",P),D(M),M.isVideoTexture&&u.delete(M)}function I(b){const M=b.target;M.removeEventListener("dispose",I),y(M)}function D(b){const M=n.get(b);if(M.__webglInit===void 0)return;const G=b.source,et=p.get(G);if(et){const it=et[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(b),Object.keys(et).length===0&&p.delete(G)}n.remove(b)}function S(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const G=b.source,et=p.get(G);delete et[M.__cacheKey],a.memory.textures--}function y(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let it=0;it<M.__webglFramebuffer[et].length;it++)i.deleteFramebuffer(M.__webglFramebuffer[et][it]);else i.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)i.deleteFramebuffer(M.__webglFramebuffer[et]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=b.textures;for(let et=0,it=G.length;et<it;et++){const tt=n.get(G[et]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(G[et])}n.remove(b)}let A=0;function X(){A=0}function H(){const b=A;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),A+=1,b}function V(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function x(b,M){const G=n.get(b);if(b.isVideoTexture&&rt(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const et=b.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,b,M);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function R(b,M){const G=n.get(b);if(b.version>0&&G.__version!==b.version){J(G,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function L(b,M){const G=n.get(b);if(b.version>0&&G.__version!==b.version){J(G,b,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function C(b,M){const G=n.get(b);if(b.version>0&&G.__version!==b.version){st(G,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const Z={[di]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},nt={[fn]:i.NEAREST,[Iu]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Ps]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},ht={[Nu]:i.NEVER,[Hu]:i.ALWAYS,[Fu]:i.LESS,[mc]:i.LEQUAL,[Ou]:i.EQUAL,[ku]:i.GEQUAL,[Bu]:i.GREATER,[zu]:i.NOTEQUAL};function Rt(b,M){if(M.type===In&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Ps||M.magFilter===Ir||M.magFilter===Pn||M.minFilter===sn||M.minFilter===Ps||M.minFilter===Ir||M.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Z[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Z[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Z[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,nt[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,nt[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==Ir&&M.minFilter!==Pn||M.type===In&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Gt(b,M){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",P));const et=M.source;let it=p.get(et);it===void 0&&(it={},p.set(et,it));const tt=V(M);if(tt!==b.__cacheKey){it[tt]===void 0&&(it[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[tt].usedTimes++;const mt=it[b.__cacheKey];mt!==void 0&&(it[b.__cacheKey].usedTimes--,mt.usedTimes===0&&S(M)),b.__cacheKey=tt,b.__webglTexture=it[tt].texture}return G}function J(b,M,G){let et=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=i.TEXTURE_3D);const it=Gt(b,M),tt=M.source;e.bindTexture(et,b.__webglTexture,i.TEXTURE0+G);const mt=n.get(tt);if(tt.version!==mt.__version||it===!0){e.activeTexture(i.TEXTURE0+G);const ut=Jt.getPrimaries(Jt.workingColorSpace),xt=M.colorSpace===Cn?null:Jt.getPrimaries(M.colorSpace),Xt=M.colorSpace===Cn||ut===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ot=v(M.image,!1,r.maxTextureSize);ot=Et(M,ot);const yt=s.convert(M.format,M.colorSpace),It=s.convert(M.type);let Dt=w(M.internalFormat,yt,It,M.colorSpace,M.isVideoTexture);Rt(et,M);let St;const Kt=M.mipmaps,Nt=M.isVideoTexture!==!0,se=mt.__version===void 0||it===!0,B=tt.dataReady,gt=N(M,ot);if(M.isDepthTexture)Dt=E(M.format===ji,M.type),se&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,yt,It,null));else if(M.isDataTexture)if(Kt.length>0){Nt&&se&&e.texStorage2D(i.TEXTURE_2D,gt,Dt,Kt[0].width,Kt[0].height);for(let Q=0,F=Kt.length;Q<F;Q++)St=Kt[Q],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,St.width,St.height,yt,It,St.data):e.texImage2D(i.TEXTURE_2D,Q,Dt,St.width,St.height,0,yt,It,St.data);M.generateMipmaps=!1}else Nt?(se&&e.texStorage2D(i.TEXTURE_2D,gt,Dt,ot.width,ot.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,yt,It,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,yt,It,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Dt,Kt[0].width,Kt[0].height,ot.depth);for(let Q=0,F=Kt.length;Q<F;Q++)if(St=Kt[Q],M.format!==hn)if(yt!==null)if(Nt){if(B)if(M.layerUpdates.size>0){const Y=vl(St.width,St.height,M.format,M.type);for(const K of M.layerUpdates){const at=St.data.subarray(K*Y/St.data.BYTES_PER_ELEMENT,(K+1)*Y/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,K,St.width,St.height,1,yt,at)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,St.width,St.height,ot.depth,yt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Dt,St.width,St.height,ot.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,St.width,St.height,ot.depth,yt,It,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Dt,St.width,St.height,ot.depth,0,yt,It,St.data)}else{Nt&&se&&e.texStorage2D(i.TEXTURE_2D,gt,Dt,Kt[0].width,Kt[0].height);for(let Q=0,F=Kt.length;Q<F;Q++)St=Kt[Q],M.format!==hn?yt!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Dt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?B&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,St.width,St.height,yt,It,St.data):e.texImage2D(i.TEXTURE_2D,Q,Dt,St.width,St.height,0,yt,It,St.data)}else if(M.isDataArrayTexture)if(Nt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Dt,ot.width,ot.height,ot.depth),B)if(M.layerUpdates.size>0){const Q=vl(ot.width,ot.height,M.format,M.type);for(const F of M.layerUpdates){const Y=ot.data.subarray(F*Q/ot.data.BYTES_PER_ELEMENT,(F+1)*Q/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,F,ot.width,ot.height,1,yt,It,Y)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,It,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,yt,It,ot.data);else if(M.isData3DTexture)Nt?(se&&e.texStorage3D(i.TEXTURE_3D,gt,Dt,ot.width,ot.height,ot.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,It,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,yt,It,ot.data);else if(M.isFramebufferTexture){if(se)if(Nt)e.texStorage2D(i.TEXTURE_2D,gt,Dt,ot.width,ot.height);else{let Q=ot.width,F=ot.height;for(let Y=0;Y<gt;Y++)e.texImage2D(i.TEXTURE_2D,Y,Dt,Q,F,0,yt,It,null),Q>>=1,F>>=1}}else if(Kt.length>0){if(Nt&&se){const Q=pt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Dt,Q.width,Q.height)}for(let Q=0,F=Kt.length;Q<F;Q++)St=Kt[Q],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,yt,It,St):e.texImage2D(i.TEXTURE_2D,Q,Dt,yt,It,St);M.generateMipmaps=!1}else if(Nt){if(se){const Q=pt(ot);e.texStorage2D(i.TEXTURE_2D,gt,Dt,Q.width,Q.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,It,ot)}else e.texImage2D(i.TEXTURE_2D,0,Dt,yt,It,ot);m(M)&&h(et),mt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function st(b,M,G){if(M.image.length!==6)return;const et=Gt(b,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const tt=n.get(it);if(it.version!==tt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const mt=Jt.getPrimaries(Jt.workingColorSpace),ut=M.colorSpace===Cn?null:Jt.getPrimaries(M.colorSpace),xt=M.colorSpace===Cn||mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Xt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let F=0;F<6;F++)!Xt&&!ot?yt[F]=v(M.image[F],!0,r.maxCubemapSize):yt[F]=ot?M.image[F].image:M.image[F],yt[F]=Et(M,yt[F]);const It=yt[0],Dt=s.convert(M.format,M.colorSpace),St=s.convert(M.type),Kt=w(M.internalFormat,Dt,St,M.colorSpace),Nt=M.isVideoTexture!==!0,se=tt.__version===void 0||et===!0,B=it.dataReady;let gt=N(M,It);Rt(i.TEXTURE_CUBE_MAP,M);let Q;if(Xt){Nt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,It.width,It.height);for(let F=0;F<6;F++){Q=yt[F].mipmaps;for(let Y=0;Y<Q.length;Y++){const K=Q[Y];M.format!==hn?Dt!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,0,0,K.width,K.height,Dt,K.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,Kt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,0,0,K.width,K.height,Dt,St,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,Kt,K.width,K.height,0,Dt,St,K.data)}}}else{if(Q=M.mipmaps,Nt&&se){Q.length>0&&gt++;const F=pt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,F.width,F.height)}for(let F=0;F<6;F++)if(ot){Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,yt[F].width,yt[F].height,Dt,St,yt[F].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Kt,yt[F].width,yt[F].height,0,Dt,St,yt[F].data);for(let Y=0;Y<Q.length;Y++){const at=Q[Y].image[F].image;Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,0,0,at.width,at.height,Dt,St,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,Kt,at.width,at.height,0,Dt,St,at.data)}}else{Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Dt,St,yt[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Kt,Dt,St,yt[F]);for(let Y=0;Y<Q.length;Y++){const K=Q[Y];Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,0,0,Dt,St,K.image[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,Kt,Dt,St,K.image[F])}}}m(M)&&h(i.TEXTURE_CUBE_MAP),tt.__version=it.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ct(b,M,G,et,it,tt){const mt=s.convert(G.format,G.colorSpace),ut=s.convert(G.type),xt=w(G.internalFormat,mt,ut,G.colorSpace),Xt=n.get(M),ot=n.get(G);if(ot.__renderTarget=M,!Xt.__hasExternalTextures){const yt=Math.max(1,M.width>>tt),It=Math.max(1,M.height>>tt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,xt,yt,It,M.depth,0,mt,ut,null):e.texImage2D(it,tt,xt,yt,It,0,mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),j(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,it,ot.__webglTexture,0,Bt(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,it,ot.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(b,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const et=M.depthTexture,it=et&&et.isDepthTexture?et.type:null,tt=E(M.stencilBuffer,it),mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Bt(M);j(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,tt,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,tt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,tt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,b)}else{const et=M.textures;for(let it=0;it<et.length;it++){const tt=et[it],mt=s.convert(tt.format,tt.colorSpace),ut=s.convert(tt.type),xt=w(tt.internalFormat,mt,ut,tt.colorSpace),Xt=Bt(M);G&&j(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,xt,M.width,M.height):j(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,xt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(M.depthTexture);et.__renderTarget=M,(!et.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),x(M.depthTexture,0);const it=et.__webglTexture,tt=Bt(M);if(M.depthTexture.format===Wi)j(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(M.depthTexture.format===ji)j(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function vt(b){const M=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const et=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){const it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=et}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ct(M.__webglFramebuffer,b)}else if(G){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=i.createRenderbuffer(),$(M.__webglDepthbuffer[et],b,!1);else{const it=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),$(M.__webglDepthbuffer,b,!1);else{const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(b,M,G){const et=n.get(b);M!==void 0&&ct(et.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&vt(b)}function jt(b){const M=b.texture,G=n.get(b),et=n.get(M);b.addEventListener("dispose",I);const it=b.textures,tt=b.isWebGLCubeRenderTarget===!0,mt=it.length>1;if(mt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=M.version,a.memory.textures++),tt){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let xt=0;xt<M.mipmaps.length;xt++)G.__webglFramebuffer[ut][xt]=i.createFramebuffer()}else G.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)G.__webglFramebuffer[ut]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(mt)for(let ut=0,xt=it.length;ut<xt;ut++){const Xt=n.get(it[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&j(b)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const xt=it[ut];G.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const Xt=s.convert(xt.format,xt.colorSpace),ot=s.convert(xt.type),yt=w(xt.internalFormat,Xt,ot,xt.colorSpace,b.isXRRenderTarget===!0),It=Bt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,yt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),$(G.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)ct(G.__webglFramebuffer[ut][xt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else ct(G.__webglFramebuffer[ut],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ut=0,xt=it.length;ut<xt;ut++){const Xt=it[ut],ot=n.get(Xt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Rt(i.TEXTURE_2D,Xt),ct(G.__webglFramebuffer,b,Xt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Xt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ut=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,et.__webglTexture),Rt(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)ct(G.__webglFramebuffer[xt],b,M,i.COLOR_ATTACHMENT0,ut,xt);else ct(G.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,ut,0);m(M)&&h(ut),e.unbindTexture()}b.depthBuffer&&vt(b)}function Ot(b){const M=b.textures;for(let G=0,et=M.length;G<et;G++){const it=M[G];if(m(it)){const tt=T(b),mt=n.get(it).__webglTexture;e.bindTexture(tt,mt),h(tt),e.unbindTexture()}}}const Qt=[],O=[];function $t(b){if(b.samples>0){if(j(b)===!1){const M=b.textures,G=b.width,et=b.height;let it=i.COLOR_BUFFER_BIT;const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(b),ut=M.length>1;if(ut)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);const Xt=n.get(M[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,G,et,0,0,G,et,it,i.NEAREST),l===!0&&(Qt.length=0,O.length=0,Qt.push(i.COLOR_ATTACHMENT0+xt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Qt.push(tt),O.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);const Xt=n.get(M[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Bt(b){return Math.min(r.maxSamples,b.samples)}function j(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function rt(b){const M=a.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Et(b,M){const G=b.colorSpace,et=b.format,it=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==Qi&&G!==Cn&&(Jt.getTransfer(G)===ae?(et!==hn||it!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function pt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.setTexture2D=x,this.setTexture2DArray=R,this.setTexture3D=L,this.setTextureCube=C,this.rebindTextures=Lt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=j}function qm(i,t){function e(n,r=Cn){let s;const a=Jt.getTransfer(r);if(n===Un)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rc)return i.BYTE;if(n===sc)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===ao)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===wr)return i.HALF_FLOAT;if(n===oc)return i.ALPHA;if(n===lc)return i.RGB;if(n===hn)return i.RGBA;if(n===cc)return i.LUMINANCE;if(n===uc)return i.LUMINANCE_ALPHA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===co)return i.RED_INTEGER;if(n===fc)return i.RG;if(n===uo)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===hs||n===fs||n===ds||n===ps)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Aa||n===Ra||n===Ca)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===Ia||n===Da)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pa||n===Ia)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Da)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===La)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ms||n===Ya||n===Za)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ms)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===Ka||n===$a||n===ja)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ms)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ym extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pe extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ge,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:Km,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends tr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,g=null;const v=new jm,m=e.getContextAttributes();let h=null,T=null;const w=[],E=[],N=new Tt;let P=null;const I=new Ke;I.viewport=new le;const D=new Ke;D.viewport=new le;const S=[I,D],y=new Ym;let A=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=w[J];return st===void 0&&(st=new sa,w[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=w[J];return st===void 0&&(st=new sa,w[J]=st),st.getGripSpace()},this.getHand=function(J){let st=w[J];return st===void 0&&(st=new sa,w[J]=st),st.getHandSpace()};function H(J){const st=E.indexOf(J.inputSource);if(st===-1)return;const ct=w[st];ct!==void 0&&(ct.update(J.inputSource,J.frame,c||a),ct.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",x);for(let J=0;J<w.length;J++){const st=E[J];st!==null&&(E[J]=null,w[J].disconnect(st))}A=null,X=null,v.reset(),t.setRenderTarget(h),f=null,p=null,d=null,r=null,T=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",V),r.addEventListener("inputsourceschange",x),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new mi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,ct=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ji:Wi,ct=m.stencil?$i:pi);const Ct={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(Ct),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new mi(p.textureWidth,p.textureHeight,{format:hn,type:Un,depthTexture:new Rc(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Gt.setContext(r),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function x(J){for(let st=0;st<J.removed.length;st++){const ct=J.removed[st],$=E.indexOf(ct);$>=0&&(E[$]=null,w[$].disconnect(ct))}for(let st=0;st<J.added.length;st++){const ct=J.added[st];let $=E.indexOf(ct);if($===-1){for(let vt=0;vt<w.length;vt++)if(vt>=E.length){E.push(ct),$=vt;break}else if(E[vt]===null){E[vt]=ct,$=vt;break}if($===-1)break}const Ct=w[$];Ct&&Ct.connect(ct)}}const R=new z,L=new z;function C(J,st,ct){R.setFromMatrixPosition(st.matrixWorld),L.setFromMatrixPosition(ct.matrixWorld);const $=R.distanceTo(L),Ct=st.projectionMatrix.elements,vt=ct.projectionMatrix.elements,Lt=Ct[14]/(Ct[10]-1),jt=Ct[14]/(Ct[10]+1),Ot=(Ct[9]+1)/Ct[5],Qt=(Ct[9]-1)/Ct[5],O=(Ct[8]-1)/Ct[0],$t=(vt[8]+1)/vt[0],Bt=Lt*O,j=Lt*$t,rt=$/(-O+$t),Et=rt*-O;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Et),J.translateZ(rt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const pt=Lt+rt,b=jt+rt,M=Bt-Et,G=j+($-Et),et=Ot*jt/b*pt,it=Qt*jt/b*pt;J.projectionMatrix.makePerspective(M,G,et,it,pt,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Z(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let st=J.near,ct=J.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(ct=v.depthFar)),y.near=D.near=I.near=st,y.far=D.far=I.far=ct,(A!==y.near||X!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,X=y.far),I.layers.mask=J.layers.mask|2,D.layers.mask=J.layers.mask|4,y.layers.mask=I.layers.mask|D.layers.mask;const $=J.parent,Ct=y.cameras;Z(y,$);for(let vt=0;vt<Ct.length;vt++)Z(Ct[vt],$);Ct.length===2?C(y,I,D):y.projectionMatrix.copy(I.projectionMatrix),nt(J,y,$)};function nt(J,st,ct){ct===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(ct.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ht=null;function Rt(J,st){if(u=st.getViewerPose(c||a),g=st,u!==null){const ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let $=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,$=!0);for(let vt=0;vt<ct.length;vt++){const Lt=ct[vt];let jt=null;if(f!==null)jt=f.getViewport(Lt);else{const Qt=d.getViewSubImage(p,Lt);jt=Qt.viewport,vt===0&&(t.setRenderTargetTextures(T,Qt.colorTexture,p.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(T))}let Ot=S[vt];Ot===void 0&&(Ot=new Ke,Ot.layers.enable(vt),Ot.viewport=new le,S[vt]=Ot),Ot.matrix.fromArray(Lt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Lt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(jt.x,jt.y,jt.width,jt.height),vt===0&&(y.matrix.copy(Ot.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),$===!0&&y.cameras.push(Ot)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const vt=d.getDepthInformation(ct[0]);vt&&vt.isValid&&vt.texture&&v.init(t,vt,r.renderState)}}for(let ct=0;ct<w.length;ct++){const $=E[ct],Ct=w[ct];$!==null&&Ct!==void 0&&Ct.update($,st,c||a)}ht&&ht(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Gt=new wc;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(J){ht=J},this.dispose=function(){}}}const si=new xn,Qm=new ue;function t0(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Ec(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,T,w,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,T,w):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===He&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===He&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=t.get(h),w=T.envMap,E=T.envMapRotation;w&&(m.envMap.value=w,si.copy(E),si.x*=-1,si.y*=-1,si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(si)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,T,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=w*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===He&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const T=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const E=w.program;n.uniformBlockBinding(T,E)}function c(T,w){let E=r[T.id];E===void 0&&(g(T),E=u(T),r[T.id]=E,T.addEventListener("dispose",m));const N=w.program;n.updateUBOMapping(T,N);const P=t.render.frame;s[T.id]!==P&&(p(T),s[T.id]=P)}function u(T){const w=d();T.__bindingPointIndex=w;const E=i.createBuffer(),N=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const w=r[T.id],E=T.uniforms,N=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,I=E.length;P<I;P++){const D=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,y=D.length;S<y;S++){const A=D[S];if(f(A,P,S,N)===!0){const X=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let x=0;x<H.length;x++){const R=H[x],L=v(R);typeof R=="number"||typeof R=="boolean"?(A.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,X+V,A.__data)):R.isMatrix3?(A.__data[0]=R.elements[0],A.__data[1]=R.elements[1],A.__data[2]=R.elements[2],A.__data[3]=0,A.__data[4]=R.elements[3],A.__data[5]=R.elements[4],A.__data[6]=R.elements[5],A.__data[7]=0,A.__data[8]=R.elements[6],A.__data[9]=R.elements[7],A.__data[10]=R.elements[8],A.__data[11]=0):(R.toArray(A.__data,V),V+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,w,E,N){const P=T.value,I=w+"_"+E;if(N[I]===void 0)return typeof P=="number"||typeof P=="boolean"?N[I]=P:N[I]=P.clone(),!0;{const D=N[I];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return N[I]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(T){const w=T.uniforms;let E=0;const N=16;for(let I=0,D=w.length;I<D;I++){const S=Array.isArray(w[I])?w[I]:[w[I]];for(let y=0,A=S.length;y<A;y++){const X=S[y],H=Array.isArray(X.value)?X.value:[X.value];for(let V=0,x=H.length;V<x;V++){const R=H[V],L=v(R),C=E%N,Z=C%L.boundary,nt=C+Z;E+=Z,nt!==0&&N-nt<L.storage&&(E+=N-nt),X.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=L.storage}}}const P=E%N;return P>0&&(E+=N-P),T.__size=E,T.__cache={},this}function v(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class n0{constructor(t={}){const{canvas:e=Vu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Yn,this.toneMappingExposure=1;const E=this;let N=!1,P=0,I=0,D=null,S=-1,y=null;const A=new le,X=new le;let H=null;const V=new zt(0);let x=0,R=e.width,L=e.height,C=1,Z=null,nt=null;const ht=new le(0,0,R,L),Rt=new le(0,0,R,L);let Gt=!1;const J=new po;let st=!1,ct=!1;const $=new ue,Ct=new ue,vt=new z,Lt=new le,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Qt(){return D===null?C:1}let O=n;function $t(_,U){return e.getContext(_,U)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${so}`),e.addEventListener("webglcontextlost",F,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",K,!1),O===null){const U="webgl2";if(O=$t(U,_),O===null)throw $t(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Bt,j,rt,Et,pt,b,M,G,et,it,tt,mt,ut,xt,Xt,ot,yt,It,Dt,St,Kt,Nt,se,B;function gt(){Bt=new op(O),Bt.init(),Nt=new qm(O,Bt),j=new ep(O,Bt,t,Nt),rt=new Vm(O,Bt),j.reverseDepthBuffer&&p&&rt.buffers.depth.setReversed(!0),Et=new up(O),pt=new Rm,b=new Xm(O,Bt,rt,pt,j,Nt,Et),M=new ip(E),G=new ap(E),et=new gh(O),se=new Qd(O,et),it=new lp(O,et,Et,se),tt=new fp(O,it,et,Et),Dt=new hp(O,j,b),ot=new np(pt),mt=new Am(E,M,G,Bt,j,se,ot),ut=new t0(E,pt),xt=new Pm,Xt=new Fm(Bt),It=new Jd(E,M,G,rt,tt,f,l),yt=new Hm(E,tt,j),B=new e0(O,Et,j,rt),St=new tp(O,Bt,Et),Kt=new cp(O,Bt,Et),Et.programs=mt.programs,E.capabilities=j,E.extensions=Bt,E.properties=pt,E.renderLists=xt,E.shadowMap=yt,E.state=rt,E.info=Et}gt();const Q=new Jm(E,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const _=Bt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Bt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(_){_!==void 0&&(C=_,this.setSize(R,L,!1))},this.getSize=function(_){return _.set(R,L)},this.setSize=function(_,U,W=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=_,L=U,e.width=Math.floor(_*C),e.height=Math.floor(U*C),W===!0&&(e.style.width=_+"px",e.style.height=U+"px"),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(R*C,L*C).floor()},this.setDrawingBufferSize=function(_,U,W){R=_,L=U,C=W,e.width=Math.floor(_*W),e.height=Math.floor(U*W),this.setViewport(0,0,_,U)},this.getCurrentViewport=function(_){return _.copy(A)},this.getViewport=function(_){return _.copy(ht)},this.setViewport=function(_,U,W,q){_.isVector4?ht.set(_.x,_.y,_.z,_.w):ht.set(_,U,W,q),rt.viewport(A.copy(ht).multiplyScalar(C).round())},this.getScissor=function(_){return _.copy(Rt)},this.setScissor=function(_,U,W,q){_.isVector4?Rt.set(_.x,_.y,_.z,_.w):Rt.set(_,U,W,q),rt.scissor(X.copy(Rt).multiplyScalar(C).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(_){rt.setScissorTest(Gt=_)},this.setOpaqueSort=function(_){Z=_},this.setTransparentSort=function(_){nt=_},this.getClearColor=function(_){return _.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(_=!0,U=!0,W=!0){let q=0;if(_){let k=!1;if(D!==null){const lt=D.texture.format;k=lt===ho||lt===uo||lt===co}if(k){const lt=D.texture.type,_t=lt===Un||lt===pi||lt===Er||lt===$i||lt===oo||lt===lo,bt=It.getClearColor(),wt=It.getClearAlpha(),Ut=bt.r,kt=bt.g,At=bt.b;_t?(g[0]=Ut,g[1]=kt,g[2]=At,g[3]=wt,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Ut,v[1]=kt,v[2]=At,v[3]=wt,O.clearBufferiv(O.COLOR,0,v))}else q|=O.COLOR_BUFFER_BIT}U&&(q|=O.DEPTH_BUFFER_BIT),W&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",F,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",K,!1),xt.dispose(),Xt.dispose(),pt.dispose(),M.dispose(),G.dispose(),tt.dispose(),se.dispose(),B.dispose(),mt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Jn),Q.removeEventListener("sessionend",Mn),We.stop()};function F(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const _=Et.autoReset,U=yt.enabled,W=yt.autoUpdate,q=yt.needsUpdate,k=yt.type;gt(),Et.autoReset=_,yt.enabled=U,yt.autoUpdate=W,yt.needsUpdate=q,yt.type=k}function K(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function at(_){const U=_.target;U.removeEventListener("dispose",at),Mt(U)}function Mt(_){ne(_),pt.remove(_)}function ne(_){const U=pt.get(_).programs;U!==void 0&&(U.forEach(function(W){mt.releaseProgram(W)}),_.isShaderMaterial&&mt.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,W,q,k,lt){U===null&&(U=jt);const _t=k.isMesh&&k.matrixWorld.determinant()<0,bt=Qn(_,U,W,q,k);rt.setMaterial(q,_t);let wt=W.index,Ut=1;if(q.wireframe===!0){if(wt=it.getWireframeAttribute(W),wt===void 0)return;Ut=2}const kt=W.drawRange,At=W.attributes.position;let te=kt.start*Ut,ce=(kt.start+kt.count)*Ut;lt!==null&&(te=Math.max(te,lt.start*Ut),ce=Math.min(ce,(lt.start+lt.count)*Ut)),wt!==null?(te=Math.max(te,0),ce=Math.min(ce,wt.count)):At!=null&&(te=Math.max(te,0),ce=Math.min(ce,At.count));const fe=ce-te;if(fe<0||fe===1/0)return;se.setup(k,q,bt,W,wt);let Ve,ie=St;if(wt!==null&&(Ve=et.get(wt),ie=Kt,ie.setIndex(Ve)),k.isMesh)q.wireframe===!0?(rt.setLineWidth(q.wireframeLinewidth*Qt()),ie.setMode(O.LINES)):ie.setMode(O.TRIANGLES);else if(k.isLine){let Pt=q.linewidth;Pt===void 0&&(Pt=1),rt.setLineWidth(Pt*Qt()),k.isLineSegments?ie.setMode(O.LINES):k.isLineLoop?ie.setMode(O.LINE_LOOP):ie.setMode(O.LINE_STRIP)}else k.isPoints?ie.setMode(O.POINTS):k.isSprite&&ie.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ie.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pt=k._multiDrawStarts,Sn=k._multiDrawCounts,re=k._multiDrawCount,on=wt?et.get(wt).bytesPerElement:1,vi=pt.get(q).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)vi.setValue(O,"_gl_DrawID",qe),ie.render(Pt[qe]/on,Sn[qe])}else if(k.isInstancedMesh)ie.renderInstances(te,fe,k.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Sn=Math.min(W.instanceCount,Pt);ie.renderInstances(te,fe,Sn)}else ie.render(te,fe)};function Yt(_,U,W){_.transparent===!0&&_.side===nn&&_.forceSinglePass===!1?(_.side=He,_.needsUpdate=!0,we(_,U,W),_.side=Kn,_.needsUpdate=!0,we(_,U,W),_.side=nn):we(_,U,W)}this.compile=function(_,U,W=null){W===null&&(W=_),h=Xt.get(W),h.init(U),w.push(h),W.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),_!==W&&_.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights();const q=new Set;return _.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const lt=k.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const bt=lt[_t];Yt(bt,W,k),q.add(bt)}else Yt(lt,W,k),q.add(lt)}),w.pop(),h=null,q},this.compileAsync=function(_,U,W=null){const q=this.compile(_,U,W);return new Promise(k=>{function lt(){if(q.forEach(function(_t){pt.get(_t).currentProgram.isReady()&&q.delete(_t)}),q.size===0){k(_);return}setTimeout(lt,10)}Bt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ge=null;function Fe(_){ge&&ge(_)}function Jn(){We.stop()}function Mn(){We.start()}const We=new wc;We.setAnimationLoop(Fe),typeof self!="undefined"&&We.setContext(self),this.setAnimationLoop=function(_){ge=_,Q.setAnimationLoop(_),_===null?We.stop():We.start()},Q.addEventListener("sessionstart",Jn),Q.addEventListener("sessionend",Mn),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,U,D),h=Xt.get(_,w.length),h.init(U),w.push(h),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(Ct),ct=this.localClippingEnabled,st=ot.init(this.clippingPlanes,ct),m=xt.get(_,T.length),m.init(),T.push(m),Q.enabled===!0&&Q.isPresenting===!0){const lt=E.xr.getDepthSensingMesh();lt!==null&&Je(lt,U,-1/0,E.sortObjects)}Je(_,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(Z,nt),Ot=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ot&&It.addToRenderList(m,_),this.info.render.frame++,st===!0&&ot.beginShadows();const W=h.state.shadowsArray;yt.render(W,_,U),st===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(h.setupLights(),U.isArrayCamera){const lt=U.cameras;if(k.length>0)for(let _t=0,bt=lt.length;_t<bt;_t++){const wt=lt[_t];Oe(q,k,_,wt)}Ot&&It.render(_);for(let _t=0,bt=lt.length;_t<bt;_t++){const wt=lt[_t];pe(m,_,wt,wt.viewport)}}else k.length>0&&Oe(q,k,_,U),Ot&&It.render(_),pe(m,_,U);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),_.isScene===!0&&_.onAfterRender(E,_,U),se.resetDefaultState(),S=-1,y=null,w.pop(),w.length>0?(h=w[w.length-1],st===!0&&ot.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Je(_,U,W,q){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)W=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||J.intersectsSprite(_)){q&&Lt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ct);const _t=tt.update(_),bt=_.material;bt.visible&&m.push(_,_t,bt,W,Lt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||J.intersectsObject(_))){const _t=tt.update(_),bt=_.material;if(q&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Lt.copy(_.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Lt.copy(_t.boundingSphere.center)),Lt.applyMatrix4(_.matrixWorld).applyMatrix4(Ct)),Array.isArray(bt)){const wt=_t.groups;for(let Ut=0,kt=wt.length;Ut<kt;Ut++){const At=wt[Ut],te=bt[At.materialIndex];te&&te.visible&&m.push(_,_t,te,W,Lt.z,At)}}else bt.visible&&m.push(_,_t,bt,W,Lt.z,null)}}const lt=_.children;for(let _t=0,bt=lt.length;_t<bt;_t++)Je(lt[_t],U,W,q)}function pe(_,U,W,q){const k=_.opaque,lt=_.transmissive,_t=_.transparent;h.setupLightsView(W),st===!0&&ot.setGlobalState(E.clippingPlanes,W),q&&rt.viewport(A.copy(q)),k.length>0&&pn(k,U,W),lt.length>0&&pn(lt,U,W),_t.length>0&&pn(_t,U,W),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Oe(_,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[q.id]===void 0&&(h.state.transmissionRenderTarget[q.id]=new mi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?wr:Un,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const lt=h.state.transmissionRenderTarget[q.id],_t=q.viewport||A;lt.setSize(_t.z,_t.w);const bt=E.getRenderTarget();E.setRenderTarget(lt),E.getClearColor(V),x=E.getClearAlpha(),x<1&&E.setClearColor(16777215,.5),E.clear(),Ot&&It.render(W);const wt=E.toneMapping;E.toneMapping=Yn;const Ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),h.setupLightsView(q),st===!0&&ot.setGlobalState(E.clippingPlanes,q),pn(_,W,q),b.updateMultisampleRenderTarget(lt),b.updateRenderTargetMipmap(lt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let At=0,te=U.length;At<te;At++){const ce=U[At],fe=ce.object,Ve=ce.geometry,ie=ce.material,Pt=ce.group;if(ie.side===nn&&fe.layers.test(q.layers)){const Sn=ie.side;ie.side=He,ie.needsUpdate=!0,Qe(fe,W,q,Ve,ie,Pt),ie.side=Sn,ie.needsUpdate=!0,kt=!0}}kt===!0&&(b.updateMultisampleRenderTarget(lt),b.updateRenderTargetMipmap(lt))}E.setRenderTarget(bt),E.setClearColor(V,x),Ut!==void 0&&(q.viewport=Ut),E.toneMapping=wt}function pn(_,U,W){const q=U.isScene===!0?U.overrideMaterial:null;for(let k=0,lt=_.length;k<lt;k++){const _t=_[k],bt=_t.object,wt=_t.geometry,Ut=q===null?_t.material:q,kt=_t.group;bt.layers.test(W.layers)&&Qe(bt,U,W,wt,Ut,kt)}}function Qe(_,U,W,q,k,lt){_.onBeforeRender(E,U,W,q,k,lt),_.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),k.onBeforeRender(E,U,W,q,_,lt),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,E.renderBufferDirect(W,U,q,k,_,lt),k.side=Kn,k.needsUpdate=!0,E.renderBufferDirect(W,U,q,k,_,lt),k.side=nn):E.renderBufferDirect(W,U,q,k,_,lt),_.onAfterRender(E,U,W,q,k,lt)}function we(_,U,W){U.isScene!==!0&&(U=jt);const q=pt.get(_),k=h.state.lights,lt=h.state.shadowsArray,_t=k.state.version,bt=mt.getParameters(_,k.state,lt,U,W),wt=mt.getProgramCacheKey(bt);let Ut=q.programs;q.environment=_.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(_.isMeshStandardMaterial?G:M).get(_.envMap||q.environment),q.envMapRotation=q.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Ut===void 0&&(_.addEventListener("dispose",at),Ut=new Map,q.programs=Ut);let kt=Ut.get(wt);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===_t)return an(_,bt),kt}else bt.uniforms=mt.getUniforms(_),_.onBeforeCompile(bt,E),kt=mt.acquireProgram(bt,wt),Ut.set(wt,kt),q.uniforms=bt.uniforms;const At=q.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(At.clippingPlanes=ot.uniform),an(_,bt),q.needsLights=yn(_),q.lightsStateVersion=_t,q.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMap.value=k.state.directionalShadowMap,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotShadowMap.value=k.state.spotShadowMap,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMap.value=k.state.pointShadowMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function Xe(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=gs.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function an(_,U){const W=pt.get(_);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Qn(_,U,W,q,k){U.isScene!==!0&&(U=jt),b.resetTextureUnits();const lt=U.fog,_t=q.isMeshStandardMaterial?U.environment:null,bt=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qi,wt=(q.isMeshStandardMaterial?G:M).get(q.envMap||_t),Ut=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!W.morphAttributes.position,te=!!W.morphAttributes.normal,ce=!!W.morphAttributes.color;let fe=Yn;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(fe=E.toneMapping);const Ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=Ve!==void 0?Ve.length:0,Pt=pt.get(q),Sn=h.state.lights;if(st===!0&&(ct===!0||_!==y)){const tn=_===y&&q.id===S;ot.setState(q,_,tn)}let re=!1;q.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Sn.state.version||Pt.outputColorSpace!==bt||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==wt||q.fog===!0&&Pt.fog!==lt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ot.numPlanes||Pt.numIntersection!==ot.numIntersection)||Pt.vertexAlphas!==Ut||Pt.vertexTangents!==kt||Pt.morphTargets!==At||Pt.morphNormals!==te||Pt.morphColors!==ce||Pt.toneMapping!==fe||Pt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Pt.__version=q.version);let on=Pt.currentProgram;re===!0&&(on=we(q,U,k));let vi=!1,qe=!1,nr=!1;const de=on.getUniforms(),mn=Pt.uniforms;if(rt.useProgram(on.program)&&(vi=!0,qe=!0,nr=!0),q.id!==S&&(S=q.id,qe=!0),vi||y!==_){rt.buffers.depth.getReversed()?($.copy(_.projectionMatrix),Xu($),qu($),de.setValue(O,"projectionMatrix",$)):de.setValue(O,"projectionMatrix",_.projectionMatrix),de.setValue(O,"viewMatrix",_.matrixWorldInverse);const Nn=de.map.cameraPosition;Nn!==void 0&&Nn.setValue(O,vt.setFromMatrixPosition(_.matrixWorld)),j.logarithmicDepthBuffer&&de.setValue(O,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&de.setValue(O,"isOrthographic",_.isOrthographicCamera===!0),y!==_&&(y=_,qe=!0,nr=!0)}if(k.isSkinnedMesh){de.setOptional(O,k,"bindMatrix"),de.setOptional(O,k,"bindMatrixInverse");const tn=k.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),de.setValue(O,"boneTexture",tn.boneTexture,b))}k.isBatchedMesh&&(de.setOptional(O,k,"batchingTexture"),de.setValue(O,"batchingTexture",k._matricesTexture,b),de.setOptional(O,k,"batchingIdTexture"),de.setValue(O,"batchingIdTexture",k._indirectTexture,b),de.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&de.setValue(O,"batchingColorTexture",k._colorsTexture,b));const ir=W.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&Dt.update(k,W,on),(qe||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,de.setValue(O,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mn.envMap.value=wt,mn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),qe&&(de.setValue(O,"toneMappingExposure",E.toneMappingExposure),Pt.needsLights&&_i(mn,nr),lt&&q.fog===!0&&ut.refreshFogUniforms(mn,lt),ut.refreshMaterialUniforms(mn,q,C,L,h.state.transmissionRenderTarget[_.id]),gs.upload(O,Xe(Pt),mn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(gs.upload(O,Xe(Pt),mn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&de.setValue(O,"center",k.center),de.setValue(O,"modelViewMatrix",k.modelViewMatrix),de.setValue(O,"normalMatrix",k.normalMatrix),de.setValue(O,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let Nn=0,Fn=tn.length;Nn<Fn;Nn++){const So=tn[Nn];B.update(So,on),B.bind(So,on)}}return on}function _i(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function yn(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,U,W){pt.get(_.texture).__webglTexture=U,pt.get(_.depthTexture).__webglTexture=W;const q=pt.get(_);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,U){const W=pt.get(_);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(_,U=0,W=0){D=_,P=U,I=W;let q=!0,k=null,lt=!1,_t=!1;if(_){const wt=pt.get(_);if(wt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)b.setupRenderTarget(_);else if(wt.__hasExternalTextures)b.rebindTextures(_,pt.get(_.texture).__webglTexture,pt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const At=_.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&pt.has(At)&&(_.width!==At.image.width||_.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(_)}}const Ut=_.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);const kt=pt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?k=kt[U][W]:k=kt[U],lt=!0):_.samples>0&&b.useMultisampledRTT(_)===!1?k=pt.get(_).__webglMultisampledFramebuffer:Array.isArray(kt)?k=kt[W]:k=kt,A.copy(_.viewport),X.copy(_.scissor),H=_.scissorTest}else A.copy(ht).multiplyScalar(C).floor(),X.copy(Rt).multiplyScalar(C).floor(),H=Gt;if(rt.bindFramebuffer(O.FRAMEBUFFER,k)&&q&&rt.drawBuffers(_,k),rt.viewport(A),rt.scissor(X),rt.setScissorTest(H),lt){const wt=pt.get(_.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,W)}else if(_t){const wt=pt.get(_.texture),Ut=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Ut)}S=-1},this.readRenderTargetPixels=function(_,U,W,q,k,lt,_t){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=pt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){rt.bindFramebuffer(O.FRAMEBUFFER,bt);try{const wt=_.texture,Ut=wt.format,kt=wt.type;if(!j.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-q&&W>=0&&W<=_.height-k&&O.readPixels(U,W,q,k,Nt.convert(Ut),Nt.convert(kt),lt)}finally{const wt=D!==null?pt.get(D).__webglFramebuffer:null;rt.bindFramebuffer(O.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(_,U,W,q,k,lt,_t){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=pt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){const wt=_.texture,Ut=wt.format,kt=wt.type;if(!j.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=_.width-q&&W>=0&&W<=_.height-k){rt.bindFramebuffer(O.FRAMEBUFFER,bt);const At=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,At),O.bufferData(O.PIXEL_PACK_BUFFER,lt.byteLength,O.STREAM_READ),O.readPixels(U,W,q,k,Nt.convert(Ut),Nt.convert(kt),0);const te=D!==null?pt.get(D).__webglFramebuffer:null;rt.bindFramebuffer(O.FRAMEBUFFER,te);const ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Wu(O,ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,At),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,lt),O.deleteBuffer(At),O.deleteSync(ce),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,U=null,W=0){_.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,_=arguments[1]);const q=Math.pow(2,-W),k=Math.floor(_.image.width*q),lt=Math.floor(_.image.height*q),_t=U!==null?U.x:0,bt=U!==null?U.y:0;b.setTexture2D(_,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,_t,bt,k,lt),rt.unbindTexture()},this.copyTextureToTexture=function(_,U,W=null,q=null,k=0){_.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,_=arguments[1],U=arguments[2],k=arguments[3]||0,W=null);let lt,_t,bt,wt,Ut,kt,At,te,ce;const fe=_.isCompressedTexture?_.mipmaps[k]:_.image;W!==null?(lt=W.max.x-W.min.x,_t=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Ut=W.min.y,kt=W.isBox3?W.min.z:0):(lt=fe.width,_t=fe.height,bt=fe.depth||1,wt=0,Ut=0,kt=0),q!==null?(At=q.x,te=q.y,ce=q.z):(At=0,te=0,ce=0);const Ve=Nt.convert(U.format),ie=Nt.convert(U.type);let Pt;U.isData3DTexture?(b.setTexture3D(U,0),Pt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Pt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Pt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const Sn=O.getParameter(O.UNPACK_ROW_LENGTH),re=O.getParameter(O.UNPACK_IMAGE_HEIGHT),on=O.getParameter(O.UNPACK_SKIP_PIXELS),vi=O.getParameter(O.UNPACK_SKIP_ROWS),qe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,kt);const nr=_.isDataArrayTexture||_.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){const mn=pt.get(_),ir=pt.get(U),tn=pt.get(mn.__renderTarget),Nn=pt.get(ir.__renderTarget);rt.bindFramebuffer(O.READ_FRAMEBUFFER,tn.__webglFramebuffer),rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<bt;Fn++)nr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pt.get(_).__webglTexture,k,kt+Fn),_.isDepthTexture?(de&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pt.get(U).__webglTexture,k,ce+Fn),O.blitFramebuffer(wt,Ut,lt,_t,At,te,lt,_t,O.DEPTH_BUFFER_BIT,O.NEAREST)):de?O.copyTexSubImage3D(Pt,k,At,te,ce+Fn,wt,Ut,lt,_t):O.copyTexSubImage2D(Pt,k,At,te,ce+Fn,wt,Ut,lt,_t);rt.bindFramebuffer(O.READ_FRAMEBUFFER,null),rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else de?_.isDataTexture||_.isData3DTexture?O.texSubImage3D(Pt,k,At,te,ce,lt,_t,bt,Ve,ie,fe.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Pt,k,At,te,ce,lt,_t,bt,Ve,fe.data):O.texSubImage3D(Pt,k,At,te,ce,lt,_t,bt,Ve,ie,fe):_.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,At,te,lt,_t,Ve,ie,fe.data):_.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,At,te,fe.width,fe.height,Ve,fe.data):O.texSubImage2D(O.TEXTURE_2D,k,At,te,lt,_t,Ve,ie,fe);O.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),O.pixelStorei(O.UNPACK_SKIP_PIXELS,on),O.pixelStorei(O.UNPACK_SKIP_ROWS,vi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe),k===0&&U.generateMipmaps&&O.generateMipmap(Pt),rt.unbindTexture()},this.copyTextureToTexture3D=function(_,U,W=null,q=null,k=0){return _.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,_=arguments[2],U=arguments[3],k=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,U,W,q,k)},this.initRenderTarget=function(_){pt.get(_).__webglFramebuffer===void 0&&b.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?b.setTextureCube(_,0):_.isData3DTexture?b.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?b.setTexture2DArray(_,0):b.setTexture2D(_,0),rt.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,rt.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class go{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lc extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class i0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new z;class Ms{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ms(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uc extends jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const lr=new z,Ui=new z,Ni=new z,Fi=new Tt,cr=new Tt,Nc=new ue,Jr=new z,ur=new z,Qr=new z,xl=new Tt,aa=new Tt,Ml=new Tt;class r0 extends ve{constructor(t=new Uc){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new i0(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Ms(n,3,0,!1)),Li.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new Tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ui.setFromMatrixScale(this.matrixWorld),Nc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ui.multiplyScalar(-Ni.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;ts(Jr.set(-.5,-.5,0),Ni,a,Ui,r,s),ts(ur.set(.5,-.5,0),Ni,a,Ui,r,s),ts(Qr.set(.5,.5,0),Ni,a,Ui,r,s),xl.set(0,0),aa.set(1,0),Ml.set(1,1);let o=t.ray.intersectTriangle(Jr,ur,Qr,!1,lr);if(o===null&&(ts(ur.set(-.5,.5,0),Ni,a,Ui,r,s),aa.set(0,1),o=t.ray.intersectTriangle(Jr,Qr,ur,!1,lr),o===null))return;const l=t.ray.origin.distanceTo(lr);l<t.near||l>t.far||e.push({distance:l,point:lr.clone(),uv:rn.getInterpolation(lr,Jr,ur,Qr,xl,aa,Ml,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ts(i,t,e,n,r,s){Fi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(cr.x=s*Fi.x-r*Fi.y,cr.y=r*Fi.x+s*Fi.y):cr.copy(Fi),i.copy(t),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4(Nc)}class Fc extends jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ys=new z,Ss=new z,yl=new ue,hr=new fo,es=new Cr,oa=new z,Sl=new z;class s0 extends ve{constructor(t=new ye,e=new Fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ys.fromBufferAttribute(e,r-1),Ss.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ys.distanceTo(Ss);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),es.radius+=s,t.ray.intersectsSphere(es)===!1)return;yl.copy(r).invert(),hr.copy(t.ray).applyMatrix4(yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const h=u.getX(v),T=u.getX(v+1),w=ns(this,t,hr,l,h,T);w&&e.push(w)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),h=ns(this,t,hr,l,v,m);h&&e.push(h)}}else{const f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const h=ns(this,t,hr,l,v,v+1);h&&e.push(h)}if(this.isLineLoop){const v=ns(this,t,hr,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ns(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(ys.fromBufferAttribute(a,r),Ss.fromBufferAttribute(a,s),e.distanceSqToSegment(ys,Ss,oa,Sl)>n)return;oa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(oa);if(!(l<t.near||l>t.far))return{distance:l,point:Sl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const El=new z,Tl=new z;class a0 extends s0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)El.fromBufferAttribute(e,r),Tl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+El.distanceTo(Tl);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oc extends jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bl=new ue,no=new fo,is=new Cr,rs=new z;class o0 extends ve{constructor(t=new ye,e=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),is.radius+=s,t.ray.intersectsSphere(is)===!1)return;bl.copy(r).invert(),no.copy(t.ray).applyMatrix4(bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=p,v=f;g<v;g++){const m=c.getX(g);rs.fromBufferAttribute(d,m),wl(rs,m,l,r,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=p,v=f;g<v;g++)rs.fromBufferAttribute(d,g),wl(rs,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wl(i,t,e,n,r,s,a){const o=no.distanceSqToPoint(i);if(o<e){const l=new z;no.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Pr extends Ge{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi extends ye{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Ue(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/e,d=new z,p=new Tt,f=new z,g=new z,v=new z;let m=0,h=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,h=t[T+1].y-t[T].y,f.x=h*1,f.y=-m,f.z=h*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[T+1].x-t[T].x,h=t[T+1].y-t[T].y,f.x=h*1,f.y=-m,f.z=h*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let T=0;T<=e;T++){const w=n+T*u*r,E=Math.sin(w),N=Math.cos(w);for(let P=0;P<=t.length-1;P++){d.x=t[P].x*E,d.y=t[P].y,d.z=t[P].x*N,a.push(d.x,d.y,d.z),p.x=T/e,p.y=P/(t.length-1),o.push(p.x,p.y);const I=l[3*P+0]*E,D=l[3*P+1],S=l[3*P+0]*N;c.push(I,D,S)}}for(let T=0;T<e;T++)for(let w=0;w<t.length-1;w++){const E=w+T*t.length,N=E,P=E+t.length,I=E+t.length+1,D=E+1;s.push(N,P,D),s.push(I,D,P)}this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.points,t.segments,t.phiStart,t.phiLength)}}class Rs extends ye{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new z,u=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*r;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Me extends ye{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],p=[],f=[];let g=0;const v=[],m=n/2;let h=0;T(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(p,3)),this.setAttribute("uv",new he(f,2));function T(){const E=new z,N=new z;let P=0;const I=(e-t)/n;for(let D=0;D<=s;D++){const S=[],y=D/s,A=y*(e-t)+t;for(let X=0;X<=r;X++){const H=X/r,V=H*l+o,x=Math.sin(V),R=Math.cos(V);N.x=A*x,N.y=-y*n+m,N.z=A*R,d.push(N.x,N.y,N.z),E.set(x,I,R).normalize(),p.push(E.x,E.y,E.z),f.push(H,1-y),S.push(g++)}v.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const y=v[S][D],A=v[S+1][D],X=v[S+1][D+1],H=v[S][D+1];(t>0||S!==0)&&(u.push(y,A,H),P+=3),(e>0||S!==s-1)&&(u.push(A,X,H),P+=3)}c.addGroup(h,P,0),h+=P}function w(E){const N=g,P=new Tt,I=new z;let D=0;const S=E===!0?t:e,y=E===!0?1:-1;for(let X=1;X<=r;X++)d.push(0,m*y,0),p.push(0,y,0),f.push(.5,.5),g++;const A=g;for(let X=0;X<=r;X++){const V=X/r*l+o,x=Math.cos(V),R=Math.sin(V);I.x=S*R,I.y=m*y,I.z=S*x,d.push(I.x,I.y,I.z),p.push(0,y,0),P.x=x*.5+.5,P.y=R*.5*y+.5,f.push(P.x,P.y),g++}for(let X=0;X<r;X++){const H=N+X,V=A+X;E===!0?u.push(V,V+1,H):u.push(V+1,V,H),D+=3}c.addGroup(h,D,E===!0?1:2),h+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends ye{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new z,p=new z,f=[],g=[],v=[],m=[];for(let h=0;h<=n;h++){const T=[],w=h/n;let E=0;h===0&&a===0?E=.5/e:h===n&&l===Math.PI&&(E=-.5/e);for(let N=0;N<=e;N++){const P=N/e;d.x=-t*Math.cos(r+P*s)*Math.sin(a+w*o),d.y=t*Math.cos(a+w*o),d.z=t*Math.sin(r+P*s)*Math.sin(a+w*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),m.push(P+E,1-w),T.push(c++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<e;T++){const w=u[h][T+1],E=u[h][T],N=u[h+1][T],P=u[h+1][T+1];(h!==0||a>0)&&f.push(w,E,P),(h!==n-1||l<Math.PI)&&f.push(E,N,P)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _n extends ye{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new z,d=new z,p=new z;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const v=g/r*s,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const v=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,h=(r+1)*(f-1)+g,T=(r+1)*f+g;a.push(v,m,T),a.push(m,h,T)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ke extends jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Al extends ke{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class _o extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class l0 extends _o{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const la=new ue,Rl=new z,Cl=new z;class Bc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pl=new ue,fr=new z,ca=new z;class c0 extends Bc{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(fr),ca.copy(n.position),ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ca),n.updateMatrixWorld(),r.makeTranslation(-fr.x,-fr.y,-fr.z),Pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl)}}class Tr extends _o{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new c0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class u0 extends Bc{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Il extends _o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new u0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);class h0 extends Lc{constructor(){super();const t=new Wt;t.deleteAttribute("uv");const e=new ke({side:He}),n=new ke,r=new Tr(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new dt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new dt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new dt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new dt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new dt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new dt(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new dt(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const p=new dt(t,Oi(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const f=new dt(t,Oi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new dt(t,Oi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new dt(t,Oi(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new dt(t,Oi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const h=new dt(t,Oi(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Oi(i){const t=new Re;return t.color.setScalar(i),t}const f0={minX:-15.55,maxX:15.55,minZ:-28.15,maxZ:13.55},d0={x:0,y:1.58,z:10.55,yaw:0},p0={x:0,y:1.58,z:-16.35,yaw:0},yr=-24.2,m0=yr-.35,Sr={x:0,y:0,z:-26.55},zc=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35}],g0=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],_0=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],io=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1}],ua={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},v0={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":ua,"choir-r":ua,"choir-ghost":ua};function Ft(i,t,e,n,r,s,a,o,l={}){return{id:i,mat:t,x:e,y:n,z:r,w:s,h:a,d:o,...l}}const be=7.2,kc=[Ft("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),Ft("ceiling","ceiling",0,7.35,0,34,.3,30),Ft("wall-n-l","wall",-9.23,be/2,-14.3,14.74,be,.6),Ft("wall-n-r","wall",9.23,be/2,-14.3,14.74,be,.6),Ft("chapel-door","trim",0,be/2,-14.3,3.76,be,.66,{door:!0}),Ft("wall-s","wall",0,be/2,14.3,33.2,be,.6),Ft("wall-w","wall",-16.3,be/2,0,.6,be,29.2),Ft("wall-e","wall",16.3,be/2,0,.6,be,29.2),Ft("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),Ft("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),Ft("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),Ft("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),Ft("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),Ft("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),Ft("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),Ft("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),Ft("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),Ft("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),Ft("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),Ft("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),Ft("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),Ft("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),Ft("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),Ft("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),Ft("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),Ft("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),Ft("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),Ft("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),Ft("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),Ft("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),Ft("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),Ft("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),Ft("chapel-w","wall",-8.35,be/2,-21.75,.5,be,14.9),Ft("chapel-e","wall",8.35,be/2,-21.75,.5,be,14.9),Ft("chapel-n","wall",0,be/2,-29.05,17.2,be,.5),Ft("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),Ft("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),Ft("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),Ft("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),Ft("altar-l","trim",-4.85,1.8,yr,6.5,3.6,.48),Ft("altar-r","trim",4.85,1.8,yr,6.5,3.6,.48),Ft("rite-veil","trim",0,1.8,yr,3.36,3.6,.42,{phaseGate:!0,veil:!0}),Ft("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function x0(i){return{id:i.id,minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2,phaseGate:!!i.phaseGate,floor:!!i.floor}}function Hc({doorOpen:i=!1,veilUp:t=!1}={}){return kc.filter(e=>!(e.door&&i||e.veil&&!t)).map(x0)}function Gc(i,t,e){return{id:i.id,x:i.x,y:0,z:i.z,yaw:0,hp:i.hp,maxHp:i.hp,alive:!0,cloaked:!!i.cloak,reveal:0,visible:!i.cloak,exposed:!1,hittable:!i.cloak,hits:0,lastHitAt:null,aggro:e==="court"&&!i.cloak,cooldown:e==="chapel"?1.35+t%3*.25:.95+t%4*.28,windup:0,strafeSign:t%2===0?1:-1,strafeT:.8+t%3*.25,hurt:0,stun:0,room:e,dormant:e!=="court"}}function Vc(){return g0.map((i,t)=>Gc(i,t,"court"))}function Es(){return _0.map((i,t)=>Gc(i,t,"chapel"))}function M0(){return io.map(i=>({...i,taken:!1}))}const vr=["LIVE","STATIC","DEAD_AIR"],ee={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6}};function dn(i,t,e){return Math.max(t,Math.min(e,i))}function Dl(){return{channel:"LIVE",signal:ee.signalMax,health:ee.healthMax,fireCooldown:0,hurtTimer:0}}function y0(i){return i==="Digit1"||i==="Numpad1"?"LIVE":i==="Digit2"||i==="Numpad2"?"STATIC":i==="Digit3"||i==="Numpad3"?"DEAD_AIR":null}function S0(i,t){const e=Math.max(0,vr.indexOf(i)),n=t>=0?1:-1;return vr[(e+n+vr.length)%vr.length]}function E0(i,t){return t==="LIVE"?!0:i.signal>=ee.minDrainSignal}function T0(i,t){return vr.includes(t)?i.channel===t?{state:i,result:"same"}:E0(i,t)?{state:{...i,channel:t},result:"ok"}:{state:i,result:"denied"}:{state:i,result:"invalid"}}function b0(i,t){let{channel:e,signal:n,fireCooldown:r,hurtTimer:s}=i,a=!1;if(r=Math.max(0,r-t),s=Math.max(0,s-t),e==="LIVE")n=Math.min(ee.signalMax,n+ee.liveRegen*t);else{const o=e==="STATIC"?ee.staticDrain:ee.deadDrain;n-=o*t,n<=0&&(n=0,e="LIVE",a=!0)}return{state:{...i,channel:e,signal:n,fireCooldown:r,hurtTimer:s},forced:a}}function Wc(i){var t;return(t=ee.speed[i])!=null?t:ee.speed.LIVE}function w0(i){return i.channel!=="DEAD_AIR"&&i.fireCooldown<=0&&i.health>0}function Ll(i){return i==="LIVE"?{kind:"hitscan",pellets:1,spread:0,damage:ee.liveDamage,range:ee.liveRange,falloff:ee.liveFalloff,cooldown:ee.liveCooldown}:i==="STATIC"?{kind:"spread",pellets:ee.staticPellets,spread:ee.staticSpread,damage:ee.staticPellet,range:ee.staticRange,falloff:ee.staticFalloff,cooldown:ee.staticCooldown}:{kind:"none",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0}}function A0(i){const t=Ll(i.channel);return!w0(i)||t.kind==="none"?{state:i,profile:Ll("DEAD_AIR"),fired:!1}:{state:{...i,fireCooldown:t.cooldown},profile:t,fired:!0}}function Ul(i,t,e,n){if(!(t>=0)||t>e||e<=0)return 0;const r=t/e;return i*(1-n*r*r)}function vo(i,t){return{...i,signal:dn(i.signal+t,0,ee.signalMax)}}function R0(i,t){return{...i,health:dn(i.health+t,0,ee.healthMax)}}function C0(i,{distance:t,channel:e,burst:n}){const r=e==="STATIC"||t<=ee.aggressiveRange||!!n,s=r?ee.aggressiveKillSignal:ee.cleanKillSignal;return{state:vo(i,s),amount:s,aggressive:r}}function Nl(i,t){if(i.hurtTimer>0||i.health<=0)return{state:i,hit:!1,dead:i.health<=0};const e=Math.max(0,i.health-t);return{state:{...i,health:e,hurtTimer:ee.hurtIframes},hit:!0,dead:e<=0}}function P0(i,t){return!(!i||i.floor||i.maxY!=null&&i.maxY<.3||i.minY!=null&&i.minY>1.65||i.phaseGate&&t==="DEAD_AIR")}function ro(i,t,e,n,r){for(const s of n){if(!P0(s,r))continue;const a=dn(i,s.minX,s.maxX),o=dn(t,s.minZ,s.maxZ),l=i-a,c=t-o;if(l*l+c*c<e*e)return s}return null}function I0(i,t,e,n,r,s,a){let o=i+e;ro(o,t,r,s,a)&&(o=i);const l=t+n;return ro(o,l,r,s,a)?{x:o,z:t}:{x:o,z:l}}function D0(i,t,e,n,r){let s=i,a=t;for(let o=0;o<4;o++){const l=ro(s,a,e,n,r);if(!l)break;const c=dn(s,l.minX,l.maxX),u=dn(a,l.minZ,l.maxZ);let d=s-c,p=a-u;const f=Math.hypot(d,p);if(f<1e-5){const g=s-l.minX,v=l.maxX-s,m=a-l.minZ,h=l.maxZ-a,T=Math.min(g,v,m,h);T===g?s=l.minX-e-.01:T===v?s=l.maxX+e+.01:T===m?a=l.minZ-e-.01:a=l.maxZ+e+.01}else{const g=e-f+.01;s+=d/f*g,a+=p/f*g}}return{x:s,z:a}}function Xc(i,t,e,n,r,s,a,o){const l=Math.hypot(e,n),c=Math.max(1,Math.ceil(l/.25));let u=i,d=t;for(let f=0;f<c;f++){const g=I0(u,d,e/c,n/c,r,s,a);u=g.x,d=g.z}const p=D0(u,d,r,s,a);return o?{x:dn(p.x,o.minX,o.maxX),z:dn(p.z,o.minZ,o.maxZ)}:p}function qc(i,t,e,n,r,s,a,o,l,c){const u=a-i,d=o-t,p=l-e,f=u*n+d*r+p*s,g=u*u+d*d+p*p-f*f,v=c*c;if(g>v)return null;const m=Math.sqrt(Math.max(0,v-g)),h=f-m,T=f+m;return h>=0?h:T>=0?T:null}function L0(i,t,e,n,r,s,a,o){let l=0,c=o;const u=[[i,n,a.minX,a.maxX],[t,r,a.minY,a.maxY],[e,s,a.minZ,a.maxZ]];for(const[p,f,g,v]of u){if(Math.abs(f)<1e-8){if(p<g||p>v)return null;continue}let m=(g-p)/f,h=(v-p)/f;if(m>h){const T=m;m=h,h=T}if(m>l&&(l=m),h<c&&(c=h),c<l)return null}const d=l>=0?l:c;return d<0||d>o?null:d}function xo(i,t,e,n,r,s,a,o){let l=null,c=a;for(const u of o){if(u.noShoot)continue;const d=L0(i,t,e,n,r,s,u,c);d!=null&&d<c&&(c=d,l={t:d,collider:u,x:i+n*d,y:t+r*d,z:e+s*d})}return l}function Fl(i,t){if(!i.alive)return{...i,visible:!0,exposed:!1,hittable:!1};if(!i.cloaked)return{...i,visible:!0,exposed:t==="STATIC",hittable:!0};const e=t==="STATIC"||i.reveal>0;return{...i,visible:e,exposed:e,hittable:e}}function Ol(i,t,e){if(!i.cloaked||!i.alive)return Fl(i,e);let n=i.reveal||0;return e==="STATIC"?n=ee.revealDuration:n=Math.max(0,n-t),Fl({...i,reveal:n},e)}function U0(i,t,e,n,r){let s=e,a=null;for(const l of n){if(!l.alive||!l.hittable)continue;const c=[{y:(l.y||0)+1.62,r:.26,weak:!0},{y:(l.y||0)+.98,r:.46,weak:!1}];for(const u of c){const d=qc(i.x,i.y,i.z,t.x,t.y,t.z,l.x,u.y,l.z,u.r);d!=null&&d>.02&&d<s&&(s=d,a={kind:"enemy",id:l.id,t:d,weak:u.weak,x:i.x+t.x*d,y:i.y+t.y*d,z:i.z+t.z*d})}}const o=xo(i.x,i.y,i.z,t.x,t.y,t.z,s,r);return o&&o.t<s?{kind:"world",t:o.t,x:o.x,y:o.y,z:o.z,id:o.collider.id}:a}function N0(i,t){const e=i.lastHitAt!=null&&t-i.lastHitAt<=ee.burstWindow;return{enemy:{...i,lastHitAt:t},burst:e}}function F0(i,{weak:t,damage:e}){if(!i.alive||!i.hittable||e<=0)return{enemy:i,dealt:0,killed:!1};let n=e;t&&i.exposed&&(n*=ee.weakMult);const r=i.hp-n,s=r<=0;return{enemy:{...i,hp:s?0:r,hits:(i.hits||0)+1,alive:!s,hittable:!s&&i.hittable},dealt:n,killed:s}}function O0(i,t,e,n,r,s){const a=[],o=Math.max(0,n|0);for(let l=0;l<o;l++){const c=o===1&&r===0?0:(s()*2-1)*r,u=o===1&&r===0?0:(s()*2-1)*r,d=i.x+t.x*c+e.x*u,p=i.y+t.y*c+e.y*u,f=i.z+t.z*c+e.z*u,g=Math.hypot(d,p,f)||1;a.push({x:d/g,y:p/g,z:f/g})}return a}function Yc(i,t,e,n,r,s,a){const o=n-i,l=r-t,c=s-e,u=Math.hypot(o,l,c);return u<.001?!0:xo(i,t,e,o/u,l/u,c/u,Math.max(0,u-.25),a)==null}function B0(i,t){return!t||t.taken?{state:i,pickup:t,took:!1}:t.kind==="signal"?{state:vo(i,t.amount),pickup:{...t,taken:!0},took:!0}:t.kind==="health"?i.health>=ee.healthMax?{state:i,pickup:t,took:!1}:{state:R0(i,t.amount),pickup:{...t,taken:!0},took:!0}:{state:i,pickup:t,took:!1}}function z0(i,t){return!i||i.taken?!1:i.cloaked?t==="STATIC":!0}function k0(i,t){const e=Math.hypot(i,t);return e<1e-6?{x:0,z:0}:{x:i/e,z:t/e}}function H0(i,t,e){var I;if(!i.alive)return{enemy:i,shot:null};if(i.dormant)return{enemy:{...i,hurt:Math.max(0,(i.hurt||0)-t)},shot:null};let n=Ol(i,t,e.channel);if(!n.alive)return{enemy:n,shot:null};const r=e.player.x-n.x,s=e.player.z-n.z,a=Math.hypot(r,s);if((a<18||e.player.forceAggro)&&(n.aggro=!0),n.cloaked&&a<3.05&&(n.reveal=Math.max(n.reveal||0,1.25)),n=Ol(n,0,e.channel),(n.stun||0)>0)return n.stun-=t,n.windup=0,n.hurt=Math.max(0,(n.hurt||0)-t),a>.001&&n.aggro&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:null};const o=n.cloaked&&!n.visible;if(!n.aggro||o)return n.hurt=Math.max(0,(n.hurt||0)-t),{enemy:n,shot:null};const c=a<17&&Yc(n.x,1.45,n.z,e.player.x,(I=e.player.y)!=null?I:1.2,e.player.z,e.colliders);n.hurt=Math.max(0,(n.hurt||0)-t),n.cooldown=(n.cooldown||0)-t;let u=null;if(n.windup>0?(n.windup-=t,n.windup<=0&&(n.windup=0,c&&(u=G0(n,e,a)))):c&&n.cooldown<=0&&(n.windup=.28,n.cooldown=1.28+e.rng()*.45),n.windup>0)return a>.001&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:u};const d=a>.001?{x:r/a,z:s/a}:{x:0,z:1},p={x:-d.z,z:d.x};n.strafeT=(n.strafeT||0)-t,n.strafeT<=0&&(n.strafeSign=(n.strafeSign||1)*-1,n.strafeT=.75+e.rng()*1.05);let f=p.x*n.strafeSign*.9,g=p.z*n.strafeSign*.9;if(a>10.2?(f+=d.x,g+=d.z):a<5.2&&(f-=d.x*.85,g-=d.z*.85),e.allies)for(const D of e.allies){if(!D.alive||D.id===n.id)continue;const S=n.x-D.x,y=n.z-D.z,A=Math.hypot(S,y);A<1.15&&A>.001&&(f+=S/A*1.4,g+=y/A*1.4)}const v=k0(f,g),m=Wc("STATIC")*.62*(n.hurt>0?.25:1);let h=v.x*m*t,T=v.z*m*t;const w=Xc(n.x,n.z,h,T,.42,e.colliders,"LIVE",null);let E=w.x,N=w.z;const P=v0[n.id];return P&&(E<P.minX||E>P.maxX||N<P.minZ||N>P.maxZ)&&(E=n.x,N=n.z),n.x=E,n.z=N,a>.001&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:u}}function G0(i,t,e){var d;const n=i.x,r=1.32,s=i.z,a=t.player.x-n+(t.rng()-.5)*.35,o=((d=t.player.y)!=null?d:1.15)-r+(t.rng()-.5)*.12,l=t.player.z-s+(t.rng()-.5)*.35,c=Math.hypot(a,o,l)||1,u=14.5;return{x:n,y:r,z:s,vx:a/c*u,vy:o/c*u,vz:l/c*u,damage:ee.boltDamage,life:2.1,dist:e}}function Zc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new ye;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const d=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(d)}for(const u in s){const d=Bl(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<d;++p){const f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][p]);const g=Bl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Bl(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Ne(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let p=0,f=u.count;p<f;p++)for(let g=0;g<e;g++){const v=u.getComponent(p,g);o.setComponent(p+d,g,v)}}else a.set(u.array,l);l+=u.count*e}return r!==void 0&&(o.gpuType=r),o}function Bi(i,t,e,n,r){const s=-r/2,a=r/2,o=[[-i/2,s,t/2],[i/2,s,t/2],[i/2,s,-t/2],[-i/2,s,-t/2],[-e/2,a,n/2],[e/2,a,n/2],[e/2,a,-n/2],[-e/2,a,-n/2]],l=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],c=[],u=[];for(const p of l){const[f,g,v,m]=p.map(h=>o[h]);c.push(...f,...g,...v,...f,...v,...m),u.push(0,0,1,0,1,1,0,0,1,1,0,1)}const d=new ye;return d.setAttribute("position",new he(c,3)),d.setAttribute("uv",new he(u,2)),d.computeVertexNormals(),d}function ha(i,t=24){const e=i.map(([r,s])=>new Tt(r,s)),n=new gi(e,t);return n.computeVertexNormals(),n}function qt(i,t,e=0,n=0,r=0){const s=new dt(i,t);return s.position.set(e,n,r),s.castShadow=!0,s.receiveShadow=!0,s}function zl(i){return Zc(i,!1)}const V0=[[.015,.19],[.08,.175],[.135,.12],[.158,.04],[.155,-.02],[.132,-.09],[.09,-.14],[.055,-.16]],W0=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],X0=[[.46,.06],[.5,.28],[.44,.62],[.36,1],[.32,1.28],[.24,1.55],[.16,1.66]];let dr=null;function Mo(){if(dr)return dr;const i=[],t=new Ie(.04,10,8);t.scale(1.15,.7,1.35),t.translate(0,-.6,.02),i.push(t);for(let o=0;o<4;o++){const l=new Me(.008,.01,.055,6);l.translate(-.022+o*.015,-.66,.04),i.push(l)}const e=new Me(.009,.011,.04,6);e.translate(.042,-.6,.03),e.rotateZ(.8),i.push(e);const n=[],r=new Wt(.05,.055,.16);r.translate(0,-.56,.1),n.push(r);const s=new Wt(.03,.03,.07);s.translate(0,-.545,.16),n.push(s);const a=new Wt(.038,.07,.04);a.translate(0,-.61,.04),n.push(a),dr={helmet:ha(V0,36),torso:ha(W0,32),robe:ha(X0,36),visor:new Ie(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:Bi(.34,.2,.48,.26,.4),abdomen:Bi(.3,.18,.34,.2,.18),pelvis:Bi(.32,.2,.28,.18,.14),pec:Bi(.15,.1,.17,.12,.2),shoulder:Bi(.1,.1,.14,.12,.08),thigh:new Me(.055,.072,.34,12),shin:new Me(.04,.055,.32,12),foot:new Wt(.1,.05,.18),upper:new Me(.04,.05,.26,12),forearm:new Me(.03,.04,.22,12),hand:zl(i),gun:zl(n),collar:new Me(.07,.09,.08,8),joint:new Ie(1,16,12),skirt:Bi(.34,.16,.5,.22,.62),tabard:new Wt(.22,.58,.045),stole:new Wt(.09,.5,.04),muzzle:new Wt(.028,.028,.04),seam:new Wt(.2,.028,.02)};for(const o of Object.values(dr))if(!(!(o!=null&&o.index)||o.attributes.tangent||!o.attributes.uv||!o.attributes.normal))try{o.computeTangents()}catch(l){}return dr}let fa=null;function Kc(i){if(!fa){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),r=n.createRadialGradient(32,32,2,32,32,31);r.addColorStop(0,"rgba(0,0,0,0.48)"),r.addColorStop(.5,"rgba(0,0,0,0.2)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,64,64);const s=new Pr(e);s.colorSpace=Ce,fa=new Re({map:s,transparent:!0,depthWrite:!1})}const t=new dt(new Rs(i,24),fa);return t.rotation.x=-Math.PI/2,t.position.y=.025,t.castShadow=!1,t.receiveShadow=!1,t}function zi(i,t=0,e=0){return i.userData.rest=t,i.userData.restI=e,i.emissive=new zt(t),i.emissiveIntensity=e,i}function $c(i){const t=zi(new ke({map:i.pearl,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:1,metalness:.14,envMapIntensity:.55}));t.normalScale.set(.55,.55);const e=zi(new ke({map:i.pearlWorn,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:1,metalness:.08,envMapIntensity:.4}));e.normalScale.set(.7,.7);const n=zi(new ke({map:i.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),r=zi(new Al({color:460812,roughness:.08,metalness:.58,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:.8,reflectivity:.7}));r.polygonOffset=!0,r.polygonOffsetFactor=-2,r.polygonOffsetUnits=-2;const s=zi(new Al({map:i.cloth,normalMap:i.clothNormal,roughnessMap:i.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new zt(16183784),envMapIntensity:.32}));s.normalScale.set(.4,.4);const a=zi(new ke({map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);a.normalScale.set(.35,.35);const o=new Re({color:16757066});return{pearl:t,worn:e,joint:n,visor:r,cloth:s,gold:a,amber:o}}function ss(i,t,e,n,r){const s=qt(Mo().joint,i,e,n,r);return s.scale.setScalar(t),s}function Vn(i,t,e=16774894){for(const n of i)t>.02?(n.emissive.setHex(e),n.emissiveIntensity=t):(n.emissive.setHex(n.userData.rest||0),n.emissiveIntensity=n.userData.restI||0)}function q0(i,t={}){const e=new Pe,n=Mo(),r=$c(i),s=[],a=qt(n.torso,r.pearl),o=qt(new Me(.188,.188,.048,18),r.joint,0,1.02,0),l=qt(n.collar,r.joint,0,1.5,0),c=new Pe;c.position.set(0,1.66,0);const u=qt(n.helmet,r.pearl);u.scale.set(1.06,.96,1.08);const d=qt(new Ie(.162,40,28),r.visor,0,-.02,.138);d.scale.set(1.08,.76,.58);const p=qt(new Ie(.026,12,8),r.pearl,0,.12,.155);p.scale.set(1,.65,.5);const f=qt(n.seam,r.amber,0,-.02,.185);f.visible=!1,f.castShadow=!1,c.add(u,d,p,f),s.push(a,o,l,c);function g(P,I){const D=new Pe;if(I){D.add(ss(r.joint,.055,0,0,0)),D.add(qt(n.upper,r.pearl,0,-.16,0)),D.add(ss(r.joint,.042,0,-.3,0)),D.add(qt(n.forearm,r.joint,0,-.42,0)),D.add(qt(n.hand,r.joint,0,.08,0));const S=qt(n.joint,r.pearl,P*.02,.02,.01);S.scale.set(.09,.055,.078),D.add(S)}else{D.add(ss(r.joint,.058,0,0,0)),D.add(qt(n.thigh,r.pearl,0,-.2,0)),D.add(ss(r.joint,.048,0,-.38,0)),D.add(qt(n.shin,r.worn,0,-.56,0));const S=qt(n.foot,r.worn,0,-.76,.03);D.add(S)}return D}const v=g(-1,!1);v.position.set(-.12,.8,0),v.rotation.z=.08;const m=g(1,!1);m.position.set(.12,.8,0),m.rotation.z=-.08;const h=g(-1,!0);h.position.set(-.32,1.4,0),h.rotation.z=.42;const T=g(1,!0);T.position.set(.32,1.4,0),T.rotation.z=-.36;const w=qt(n.gun,r.joint,.045,.02,.02),E=qt(n.muzzle,r.amber,.045,-.525,.22);E.castShadow=!1,T.add(w,E);const N=Kc(.48);if(e.add(...s,v,m,h,T,N),t.vestment){const P=qt(n.tabard,r.cloth,0,.78,.16),I=qt(new Wt(.28,.42,.04),r.cloth,0,.95,-.14),D=qt(n.stole,r.gold,0,1.16,.18),S=qt(new gi([new Tt(.18,0),new Tt(.32,.04),new Tt(.24,.1)],24),r.cloth,0,1.4,0);e.add(P,I,D,S)}return jc(e),{group:e,weak:f,lLeg:v,rLeg:m,lArm:h,rArm:T,muzzle:E,shadow:N,flashMats:[r.pearl,r.worn,r.joint,r.visor,r.cloth,r.gold],flash:0}}function Y0(i){const t=new Pe,e=$c(i),n=Mo(),r=qt(n.robe,e.cloth),s=qt(new gi([new Tt(.22,0),new Tt(.5,.06),new Tt(.42,.16),new Tt(.2,.22)],28),e.cloth,0,1.46,0),a=qt(new gi([new Tt(.12,0),new Tt(.22,.06),new Tt(.16,.16)],24),e.cloth,0,1.68,0),o=qt(new _n(.48,.018,8,32),e.gold,0,.12,0);o.rotation.x=Math.PI/2;const l=qt(new _n(.35,.02,8,28),e.gold,0,1.12,0);l.rotation.x=Math.PI/2;const c=qt(new Wt(.14,1.05,.04),e.gold,0,1.02,.22),u=qt(new Ie(.045,12,10),e.gold,0,.7,.26),d=new Pe;d.position.set(0,2.05,0),d.scale.setScalar(1.18);const p=qt(n.helmet,e.pearl),f=qt(new Ie(.028,12,8),e.pearl,0,.125,.15);f.scale.set(1,.62,.48);const g=qt(new Ie(.162,40,28),e.visor,0,-.015,.142);g.scale.set(1.12,.82,.6);const v=qt(new Wt(.22,.03,.018),e.amber,0,-.02,.175);v.visible=!1,v.castShadow=!1,d.add(p,f,g,v);const m=new ke({color:15123818,map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),h=new dt(new _n(.58,.04,12,48),m);h.position.set(0,2.22,-.16);const T=new dt(new _n(.4,.016,8,36),m);h.add(T);const w=qt(new Ie(.032,10,8),e.gold,.58,0,0);h.add(w);function E(D){const S=new Pe,y=qt(new Me(.075,.13,.52,14),e.cloth,0,.26,0),A=qt(new _n(.078,.016,8,16),e.gold,0,.5,0);A.rotation.x=Math.PI/2;const X=qt(n.hand,e.pearl,0,-.06,.02);X.rotation.z=Math.PI;const H=qt(new Wt(.06,.045,.018),e.amber,0,.62,.08);return H.castShadow=!1,S.add(y,A,X,H),S.position.set(D*.42,1.48,.02),{pivot:S,hand:H}}const N=E(-1),P=E(1);for(const D of[1.4,1.2,1]){const S=qt(new _n(.2,.01,8,22,Math.PI*.9),e.gold,0,D,.08);S.rotation.x=Math.PI/2,t.add(S)}const I=Kc(.9);return t.add(r,s,a,o,l,c,u,d,h,N.pivot,P.pivot,I),t.position.set(Sr.x,0,Sr.z),jc(t),{group:t,halo:h,haloMat:m,seam:v,shadow:I,lArm:N.pivot,rArm:P.pivot,lHand:N.hand,rHand:P.hand,flashMats:[e.pearl,e.cloth,e.visor,e.gold],flash:0}}function jc(i){i.traverse(t=>{var n;const e=t.geometry;if(!(!t.isMesh||!((n=t.material)!=null&&n.normalMap)||!(e!=null&&e.index)||e.attributes.tangent)&&!(!e.attributes.uv||!e.attributes.normal))try{e.computeTangents()}catch(r){}})}function Z0(i,t){const e=new Map,n=new Set(Es().map(l=>l.id));for(const l of[...Vc(),...Es()]){const c=q0(t,{vestment:n.has(l.id)});c.group.position.set(l.x,0,l.z),c.group.visible=l.visible,c.death=0,c.died=!1,c.phase=Math.random()*Math.PI*2,c.prevX=l.x,c.prevZ=l.z,i.add(c.group),e.set(l.id,c)}const r=Y0(t);r.died=!1,r.death=0,r.pose=0,i.add(r.group);const s=new Ie(.08,7,5),a=new Re({color:16756768}),o=[];for(let l=0;l<16;l++){const c=new dt(s,a);c.visible=!1,c.frustumCulled=!1,i.add(c),o.push(c)}return{reset(l){for(const c of l){const u=e.get(c.id);if(u){if(u.prevX=c.x,u.prevZ=c.z,u.group.position.set(c.x,0,c.z),u.group.rotation.set(0,0,0),u.group.scale.setScalar(1),u.flash=0,Vn(u.flashMats,0),u.weak.visible=!1,!c.alive){u.died=!0,u.death=0,u.group.visible=!1;continue}u.death=0,u.died=!1,u.group.visible=c.visible}}},resetPriest(l){r.died=!1,r.death=0,r.pose=0,r.flash=0,r.group.visible=!0,r.group.rotation.set(0,0,0),r.group.position.set(l.x,0,l.z),r.halo.scale.setScalar(1),Vn(r.flashMats,0),r.seam.visible=!1},syncPriest(l,c,u,d){if(!l.alive){r.died||(r.died=!0,r.death=1.05),r.death-=c;const N=1-Math.max(r.death,0)/1.05;r.group.visible=r.death>0,r.group.rotation.x=N*1.25,r.group.position.set(l.x,-N*.55,l.z),r.shadow.visible=!1,r.halo.scale.setScalar(Math.max(0,1-N)),r.seam.visible=!1,r.lArm.rotation.x=.9,r.rArm.rotation.x=.7,Vn(r.flashMats,N<.45?(1-N/.45)*2.4:0);return}r.died=!1,r.death=0,r.group.visible=!0,r.group.rotation.set(0,l.yaw||0,Math.sin(u*.8)*.008);const p=Math.sin(u*1.15)*.015;r.group.position.set(l.x,p,l.z),r.shadow.visible=!0,r.shadow.position.y=.025-p,r.halo.rotation.z=u*.15;const f=l.phase==="rite",g=f?1.05:l.windup>0?.35:.72,v=l.windup>0?-.85:f?-.2:-.05;r.lArm.rotation.set(v,0,g),r.rArm.rotation.set(v,0,-g);const m=!!l.haloVisible,h=m&&d==="STATIC";r.halo.visible=!0;const T=m?1+Math.sin(u*7)*.06:1;r.halo.scale.setScalar(T),r.haloMat.opacity=h?1:m?.96:.9,r.haloMat.emissiveIntensity=h?2.4:m?1.55:.85,r.seam.visible=!!l.exposed;const w=l.windup>0||l.phase==="rite";r.lHand.visible=w,r.rHand.visible=w;const E=w?1.45:1;r.lHand.scale.setScalar(E),r.rHand.scale.setScalar(E),l.hurt>0&&(r.flash=.2),r.flash=Math.max(0,r.flash-c),Vn(r.flashMats,r.flash>0?r.flash/.2*2.6:0)},sync(l,c,u,d){for(const p of l){const f=e.get(p.id);if(!p.alive){f.died||(f.died=!0,f.death=.85),f.death-=c;const h=1-Math.max(f.death,0)/.85;f.group.visible=f.death>0,f.group.rotation.x=h*1.35,f.group.position.set(p.x,-h*.4,p.z),f.shadow.visible=!1,f.group.scale.setScalar(1),f.lArm.rotation.x=.5+h*.6,f.rArm.rotation.x=.3+h*.9,f.lLeg.rotation.x=-.25*h,f.rLeg.rotation.x=.4*h,f.weak.visible=!1,Vn(f.flashMats,h<.4?(1-h/.4)*2.4:0);continue}f.died=!1,f.death=0,f.group.visible=!!p.visible;const g=Math.hypot(p.x-f.prevX,p.z-f.prevZ);f.prevX=p.x,f.prevZ=p.z;const v=Math.sin(u*1.4+f.phase)*(g>.004?.02:.012);f.group.rotation.set(0,p.yaw||0,Math.sin(u*1.1+f.phase)*.012),f.group.position.set(p.x,v,p.z),f.shadow.visible=!0,f.shadow.position.y=.025-v;const m=g>.004?Math.sin(u*8+f.phase):Math.sin(u*1.6+f.phase)*.15;if(f.lLeg.rotation.x=m*.7,f.rLeg.rotation.x=-m*.7,f.lArm.rotation.x=-m*.45,f.rArm.rotation.x=m*.25+(p.windup>0?-.95:-.06),f.weak.visible=!!p.exposed,p.hurt>0&&(f.flash=.16),f.flash=Math.max(0,f.flash-c),f.flash>0)Vn(f.flashMats,f.flash/.16*2.8),f.group.scale.setScalar(1.035);else if(p.cloaked&&p.visible){const h=.22+Math.sin(u*9)*.1;Vn(f.flashMats,h,16766888),f.group.scale.setScalar(1)}else Vn(f.flashMats,0),f.group.scale.setScalar(1);f.muzzle.scale.setScalar(p.windup>0?1.8:1),p.cloaked&&p.visible&&d!=="STATIC"&&p.reveal<.5&&(f.group.visible=Math.sin(u*46)>-.2)}},syncBolts(l){for(let c=0;c<o.length;c++){const u=o[c],d=l[c];if(!d){u.visible=!1;continue}u.visible=!0,u.position.set(d.x,d.y,d.z)}}}}const kl=["seam","choir","veil"],je={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},K0=2.05,$0=1.2,j0=2.62;function Hl(i){return i==="seam"?"LIVE · THE SEAM":i==="choir"?"STATIC · THE HALO":i==="veil"?"DEAD AIR · THE VEIL":""}function Gl(){return{id:"visor-priest",boss:!0,x:Sr.x,y:Sr.y,z:Sr.z,yaw:0,hp:je.hp,maxHp:je.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:je.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function J0(i,t){const e=kl[i.riteIndex%kl.length];i.phase="rite",i.rite=e,i.timer=je.riteWindow,i.exposed=e==="seam",i.haloVisible=e==="choir",i.veilUp=e==="veil",i.windup=0,t.push({type:"announce",rite:e})}function Jc(i){i.phase="recover",i.rite=null,i.exposed=!1,i.haloVisible=!1,i.veilUp=!1,i.windup=0,i.timer=je.recover,i.riteIndex+=1}function Q0(i,t,e){if(!i.alive||!i.active)return{priest:i,events:[]};const n=[],r={...i,hurt:Math.max(0,(i.hurt||0)-t),stun:Math.max(0,(i.stun||0)-t)};if(e&&e.player){const s=e.player.x-r.x,a=e.player.z-r.z;Math.hypot(s,a)>.05&&(r.yaw=Math.atan2(s,a))}return r.phase==="idle"?(r.timer-=t,r.timer<=0?J0(r,n):r.stun>0?r.windup=0:r.windup>0?(r.windup-=t,r.windup<=0&&(r.windup=0,r.shotCooldown=je.shotGap,n.push({type:"shot"}))):(r.shotCooldown-=t,r.shotCooldown<=0&&(r.windup=je.shotWindup))):r.phase==="rite"?(r.windup=0,r.timer-=t,r.timer<=0&&(n.push({type:"fail",rite:r.rite,damage:je.failDamage}),Jc(r))):r.phase==="recover"&&(r.windup=0,r.timer-=t,r.timer<=0&&(r.phase="idle",r.timer=je.idle)),{priest:r,events:n}}function tg(i){return i>0?i*je.armor:0}function eg(i,t){const e=tg(t);if(!i||!i.alive||e<=0)return{priest:i,dealt:0,killed:!1};const n=i.hp-e,r=n<=0;return{priest:{...i,hp:r?0:n,alive:!r,hurt:.22,phase:r?"dead":i.phase,veilUp:r?!1:i.veilUp,haloVisible:r?!1:i.haloVisible,exposed:r?!1:i.exposed,rite:r?null:i.rite},dealt:e,killed:r}}function Vl(i,t){if(!i.alive||i.phase!=="rite")return{priest:i,broken:!1,dealt:0,killed:!1};if(!(i.rite==="seam"&&t.channel==="LIVE"&&t.weak&&!t.halo||i.rite==="choir"&&t.channel==="STATIC"&&t.halo||i.rite==="veil"&&t.channel==="DEAD_AIR"&&t.crossed))return{priest:i,broken:!1,dealt:0,killed:!1};const n=je.breakDamage,r=i.hp-n;if(r<=0)return{priest:{...i,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:n,killed:!0};const a={...i,hp:r,hurt:.28,broken:(i.broken||0)+1};return Jc(a),{priest:a,broken:!0,dealt:n,killed:!1}}function ng(i,t,e,n,r){if(!n||!n.alive||!n.hittable)return null;const s=[{y:$0,r:.62,weak:!1,halo:!1},{y:K0,r:.3,weak:!0,halo:!1}];n.haloVisible&&r==="STATIC"&&s.push({y:j0,r:.42,weak:!1,halo:!0});let a=null,o=e;for(const l of s){const c=qc(i.x,i.y,i.z,t.x,t.y,t.z,n.x,(n.y||0)+l.y,n.z,l.r);c==null||c<=.02||c>=o||(o=c,a={kind:"priest",id:n.id,t:c,weak:l.weak,halo:l.halo,x:i.x+t.x*c,y:i.y+t.y*c,z:i.z+t.z*c})}return a}const Xn={maxDist:16,cone:.3,stun:4.5,cooldown:16,retune:4.5,retuneMult:1.45,radius:16};function ig({origin:i,dir:t,point:e,maxDist:n,cone:r,blocked:s}){const a=e.x-i.x,o=e.y-i.y,l=e.z-i.z,c=Math.hypot(a,o,l);if(!(c>.05)||c>n||s)return{aimed:!1,dist:c};const u=(a*t.x+o*t.y+l*t.z)/c;return{aimed:u>=Math.cos(r),dist:c,dot:u}}function rg(i,t){const e=i.cooldownUntil||0;return e>t?{ok:!1,reason:"cooldown",cooldownUntil:e}:{ok:!0,cooldownUntil:t+Xn.cooldown}}function sg(i,t,e,n){return i.map(r=>!r.alive||r.room!=="chapel"||Math.hypot(r.x-t.x,r.z-t.z)>e?r:{...r,stun:Math.max(r.stun||0,n),windup:0})}function ag(i,t){const e=new Pe;e.position.set(.18,-.28,-.48),i.add(e);const n=new ke({map:t.leather,normalMap:t.leatherNormal,roughnessMap:t.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});n.normalScale.set(.7,.7);const r=new ke({map:t.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),s=new ke({map:t.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new ke({map:t.wood,normalMap:t.woodNormal,roughnessMap:t.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new ke({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),l=new ke({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),c=new Re({color:6813439}),u=new dt(new Wt(.16,.055,.38),a);u.position.set(.02,-.02,.02);const d=new dt(new Wt(.11,.02,.3),o);d.position.set(.02,.012,.03);const p=new dt(new Wt(.07,.03,.04),s);p.position.set(.02,-.005,-.16),e.add(u,d,p);for(let V=0;V<2;V++)for(let x=0;x<4;x++){const R=new dt(new Wt(.028,.012,.03),l);R.position.set(-.012+V*.064,.026,.1-x*.055),e.add(R)}const f=new dt(new Wt(.055,.028,.02),c);f.position.set(.02,-.004,-.2),e.add(f);const g=new dt(new Me(.006,.006,.22,5),s);g.position.set(.07,.02,-.12),g.rotation.z=-.4,g.rotation.x=.5;const v=new dt(new Ie(.012,6,4),s);v.position.set(.11,.1,-.2),e.add(g,v);const m=new Re({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:_s,side:nn}),h=new Pe;h.position.set(.02,-.004,-.24);const T=new dt(new $e(.22,.05),m),w=new dt(new $e(.22,.05),m);w.rotation.z=Math.PI/2;const E=new dt(new $e(.08,.08),m);h.add(T,w,E),h.visible=!1,e.add(h);const N=new Tr(6813439,2.4,1.8,2);N.position.copy(f.position),e.add(N);function P(V,x,R){const L=new Pe,C=new Ie(.046,14,10);C.scale(1.05,.48,1.35);const Z=new dt(C,n),nt=new dt(new Wt(.11,.07,.16),r);nt.position.set(0,.01,.12);const ht=new dt(new Ie(.02,8,6),n);ht.scale.set(2.1,.7,.8),ht.position.set(0,.02,-.04),L.add(Z,nt,ht);for(let Gt=0;Gt<4;Gt++){const J=new dt(new Me(.008,.01,.05,8),n);J.rotation.x=Math.PI/2,J.position.set(-.03+Gt*.02,.012,-.078),L.add(J)}const Rt=new dt(new Me(.009,.011,.042,8),n);Rt.rotation.z=R>0?-.9:.9,Rt.position.set(R>0?.05:-.05,.02,-.01),L.add(Rt),L.position.set(V,-.05,x),L.rotation.y=R,L.rotation.z=R>0?.22:-.18,e.add(L)}P(-.07,.06,.5),P(.12,.08,-.62),e.traverse(V=>{var R;V.castShadow=!1,V.receiveShadow=!1,V.frustumCulled=!1;const x=V.geometry;!V.isMesh||!((R=V.material)!=null&&R.normalMap)||!(x!=null&&x.index)||x.attributes.tangent||x.attributes.uv&&x.attributes.normal&&x.computeTangents()});let I=0,D=0,S=0,y=0,A="LIVE",X=!1;const H={x:.18,y:-.28,z:-.48};return{setChannel(V){X&&V!==A&&(D=.09),X=!0,A=V,V==="LIVE"?(c.color.setHex(6813439),N.color.setHex(6813439),N.intensity=2.6):V==="STATIC"?(c.color.setHex(15921906),N.color.setHex(16777215),N.intensity=.8):(c.color.setHex(2761758),N.intensity=0)},fire(V){I=V==="spread"?.12:.055,S=V==="none"?0:.045,m.color.set(V==="spread"?16053492:13040639),h.scale.setScalar(V==="spread"?1.35:1)},setVisible(V){e.visible=V},update(V,x,R={}){const L=x>.35;y+=V*(L?7.2+Math.min(x,9)*.28:1.5);const C=L?.004+Math.min(x,9)*.00115:.0016,Z=R.strafe||0;if(I+=(0-I)*(1-Math.exp(-12*V)),D+=(0-D)*(1-Math.exp(-14*V)),S-=V,h.visible=S>0,h.visible&&(h.rotation.z=S*18),A==="STATIC"){const nt=.45+Math.random()*.55;c.color.setRGB(nt,nt,nt)}e.position.x=H.x+Math.cos(y)*C*.7-Z*.01,e.position.y=H.y+Math.sin(y*2)*C+(L?0:Math.sin(y)*.003),e.position.z=H.z+I*.62,e.rotation.x=I*1.7+D*1.5+Math.sin(y*2)*C*2.2,e.rotation.y=.06-I*.25,e.rotation.z=-Z*.035+Math.sin(y)*C*1.4}}}function Ae(i,t,e,n=1,r=1){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const a=new Pr(s);return a.colorSpace=Ce,a.wrapS=di,a.wrapT=di,a.repeat.set(n,r),a.anisotropy=8,a.magFilter=sn,a.minFilter=Pn,a}function pr(i,t,e,n,r,s){i.fillStyle=r;for(let a=0;a<n;a++){const o=a*97%t,l=a*53%e;i.fillRect(o,l,s,s)}}function og(i,t=1,e=1){const n=new Pr(i);return n.colorSpace=Cn,n.wrapS=di,n.wrapT=di,n.repeat.set(t,e),n.anisotropy=4,n.magFilter=sn,n.minFilter=Pn,n}function Qc(i,t,e,n=1,r=1){const s=document.createElement("canvas");s.width=i,s.height=t;const a=s.getContext("2d"),o=a.createImageData(i,t);for(let l=0;l<t;l++)for(let c=0;c<i;c++){const[u,d,p]=e(c,l,i,t),f=(l*i+c)*4;o.data[f]=u,o.data[f+1]=d,o.data[f+2]=p,o.data[f+3]=255}return a.putImageData(o,0,0),og(s,n,r)}function ai(i,t,e,n,r=1,s=1){const a=new Float32Array(i*t);for(let o=0;o<t;o++)for(let l=0;l<i;l++)a[o*i+l]=e(l,o,i,t);return Qc(i,t,(o,l)=>{const c=a[l*i+(o+i-1)%i],u=a[l*i+(o+1)%i],d=a[(l+t-1)%t*i+o],p=a[(l+1)%t*i+o];let f=(c-u)*n,g=(d-p)*n;const v=1,m=Math.hypot(f,g,v)||1;return[f/m*127.5+127.5,g/m*127.5+127.5,v/m*127.5+127.5]},r,s)}function oi(i,t,e,n=1,r=1){return Qc(i,t,(s,a)=>{const o=Math.max(0,Math.min(1,e(s,a,i,t)))*255;return[o,o,o]},n,r)}function lg(){const i=Ae(256,256,(x,R,L)=>{x.fillStyle="#5c564c",x.fillRect(0,0,R,L);const C=64;for(let Z=0;Z<L;Z+=C)for(let nt=0;nt<R;nt+=C){const ht=(nt*3+Z*7)%17/17,Rt=ht>.66?"#6a6358":ht>.33?"#574f46":"#4e4840";x.fillStyle=Rt,x.fillRect(nt+2,Z+2,C-4,C-4),x.fillStyle="rgba(20,16,12,0.35)",x.fillRect(nt,Z,C,2),x.fillRect(nt,Z,2,C)}x.fillStyle="rgba(30,22,14,0.28)",x.beginPath(),x.ellipse(48,180,28,10,.4,0,Math.PI*2),x.fill(),x.beginPath(),x.ellipse(190,60,22,8,-.5,0,Math.PI*2),x.fill(),x.fillStyle="rgba(90,70,40,0.18)",x.fillRect(8,8,18,6)},8,6),t=Ae(256,256,(x,R,L)=>{x.fillStyle="#c8bfb2",x.fillRect(0,0,R,L),x.fillStyle="#b3a898";for(let C=0;C<R;C+=64)x.fillRect(C,0,3,L);x.fillStyle="#9c9184",x.fillRect(0,168,R,10),x.fillStyle="#6e655c",x.fillRect(0,214,R,42),x.fillStyle="#8a8176",x.fillRect(0,210,R,6),x.fillStyle="rgba(70,50,30,0.12)";for(let C=0;C<20;C++)x.fillRect(C*41%R,20+C*17%120,16,5);pr(x,R,L,30,"rgba(255,255,255,0.04)",2)},3,2),e=Ae(128,128,(x,R,L)=>{x.fillStyle="#8d8478",x.fillRect(0,0,R,L),x.fillStyle="#756c62";for(let C=0;C<R;C+=16)x.fillRect(C,0,2,L);x.fillStyle="rgba(40,30,20,0.2)",x.fillRect(0,L-18,R,18),x.fillStyle="#a39888",x.fillRect(0,8,R,4)},2,2),n=Ae(128,128,(x,R,L)=>{x.fillStyle="#b7b1a6",x.fillRect(0,0,R,L),x.strokeStyle="#8e877c",x.lineWidth=3,x.strokeRect(1,1,R-2,L-2),x.fillStyle="#c9c3b6",x.fillRect(8,8,R-16,L-16),x.fillStyle="rgba(80,70,50,0.15)",x.fillRect(18,40,30,8),x.fillRect(70,80,22,6)},6,6),r=Ae(128,128,(x,R,L)=>{x.fillStyle="#5c3a22",x.fillRect(0,0,R,L);for(let C=0;C<L;C+=3){const Z=70+C*17%50;x.strokeStyle=`rgb(${Z+36}, ${Z-4}, ${Z-32})`,x.beginPath(),x.moveTo(0,C),x.quadraticCurveTo(R*.5,C+(C%9-4),R,C),x.stroke()}x.fillStyle="rgba(30,16,6,0.35)",x.fillRect(18,0,4,L),x.fillRect(78,0,3,L),x.beginPath(),x.ellipse(46,40,8,14,.2,0,Math.PI*2),x.fill(),x.beginPath(),x.ellipse(96,90,6,10,-.3,0,Math.PI*2),x.fill()}),s=Ae(128,128,(x,R,L)=>{x.fillStyle="#16130f",x.fillRect(0,0,R,L),x.fillStyle="#e2a23a";const C=18;for(let Z=-8;Z<16;Z++)x.beginPath(),x.moveTo(Z*C,0),x.lineTo(Z*C+C*.55,0),x.lineTo(Z*C+C*.55-L,L),x.lineTo(Z*C-L,L),x.fill()}),a=Ae(128,64,(x,R,L)=>{for(let C=0;C<L;C++)for(let Z=0;Z<R;Z++){const ht=140+(Z*17+C*13)%40*2;x.fillStyle=`rgb(${ht},${ht},${ht-10})`,x.fillRect(Z,C,1,1)}x.fillStyle="rgba(0,0,0,0.45)";for(let C=0;C<L;C+=3)x.fillRect(0,C,R,1)}),o=Ae(128,128,(x,R,L)=>{x.fillStyle="#efe8de",x.fillRect(0,0,R,L),x.fillStyle="#fbf7f1",x.fillRect(10,10,R-20,L-20),x.strokeStyle="rgba(40,34,28,0.45)",x.lineWidth=3,x.strokeRect(8,8,R-16,L-16),x.strokeStyle="rgba(40,34,28,0.28)",x.beginPath(),x.moveTo(18,L/2),x.lineTo(R-18,L/2),x.moveTo(R/2,18),x.lineTo(R/2,L-18),x.stroke(),pr(x,R,L,24,"rgba(60,48,30,0.16)",2)}),l=Ae(128,128,(x,R,L)=>{x.fillStyle="#d5cec3",x.fillRect(0,0,R,L),x.fillStyle="#c4b6a2",x.fillRect(0,L*.55,R,L*.45),x.fillStyle="rgba(90,70,46,0.35)",x.fillRect(0,L-16,R,16),pr(x,R,L,40,"rgba(70,54,32,0.28)",2),x.strokeStyle="rgba(40,34,28,0.4)",x.strokeRect(6,6,R-12,L-12)}),c=Ae(64,64,(x,R,L)=>{x.fillStyle="#141414",x.fillRect(0,0,R,L),x.fillStyle="#2a2a2a";for(let C=-8;C<16;C++)x.fillRect(C*8,0,2,L);x.fillStyle="#3a3a3a",x.fillRect(0,4,R,3),x.fillStyle="#0a0a0a",x.fillRect(0,L-8,R,8)}),u=Ae(64,64,(x,R,L)=>{x.fillStyle="#c6a15a",x.fillRect(0,0,R,L),x.fillStyle="#e6c97a",x.fillRect(0,2,R,6),x.fillStyle="#8a6a32",x.fillRect(0,L-8,R,8),x.strokeStyle="rgba(60,40,10,0.45)",x.beginPath(),x.moveTo(8,0),x.lineTo(18,L),x.moveTo(40,0),x.lineTo(30,L),x.stroke()}),d=Ae(128,128,(x,R,L)=>{x.fillStyle="#f3efe6",x.fillRect(0,0,R,L);for(let C=8;C<R;C+=14)x.strokeStyle=C%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",x.beginPath(),x.moveTo(C,0),x.quadraticCurveTo(C+4,L/2,C-2,L),x.stroke();x.fillStyle="rgba(90,70,40,0.08)",x.fillRect(0,L-20,R,20)}),p=Ae(128,128,(x,R,L)=>{x.fillStyle="#3a2418",x.fillRect(0,0,R,L),pr(x,R,L,80,"rgba(20,10,6,0.45)",2),pr(x,R,L,40,"rgba(120,80,50,0.2)",1),x.strokeStyle="rgba(10,6,4,0.7)",x.lineWidth=3,x.beginPath(),x.moveTo(0,20),x.lineTo(R,28),x.stroke()}),f=Ae(128,128,(x,R,L)=>{x.fillStyle="#241810",x.fillRect(0,0,R,L),x.fillStyle="#1a110c";for(let C=0;C<R;C+=10)x.fillRect(C,0,3,L);x.fillStyle="rgba(80,50,30,0.15)",x.fillRect(0,0,R,8)}),g=Ae(256,256,(x,R,L)=>{x.fillStyle="#3e3832",x.fillRect(0,0,R,L);const C=64;for(let Z=0;Z<L;Z+=C)for(let nt=0;nt<R;nt+=C)x.fillStyle=(nt+Z)%128===0?"#4a433b":"#35302b",x.fillRect(nt+3,Z+3,C-6,C-6);x.strokeStyle="rgba(166,132,70,0.35)",x.lineWidth=2;for(let Z=0;Z<=R;Z+=C)x.beginPath(),x.moveTo(Z,0),x.lineTo(Z,L),x.stroke(),x.beginPath(),x.moveTo(0,Z),x.lineTo(R,Z),x.stroke()},4,4),v=Ae(64,64,(x,R,L)=>{x.fillStyle="#8d9298",x.fillRect(0,0,R,L),x.fillStyle="rgba(255,255,255,0.18)";for(let C=0;C<L;C+=3)x.fillRect(0,C,R,1);x.fillStyle="#5e646a",x.fillRect(0,0,R,4)}),m=ai(128,128,(x,R,L,C)=>{const Z=x/L,nt=R/C,ht=Math.min(Z,1-Z,nt,1-nt),Rt=Math.min(1,ht*10),Gt=Math.abs(Z-.5)<.012||Math.abs(nt-.5)<.012?.2:1;return Rt*Gt},3.2),h=oi(128,128,(x,R,L,C)=>{const Z=x/L,nt=R/C,ht=Math.min(Z,1-Z,nt,1-nt);return .18+(1-Math.min(1,ht*7))*.34}),T=ai(64,64,(x,R,L,C)=>{const Z=Math.sin(x*.85+R*.2)*.08,nt=R<5?.25:R>C-6?-.2:0;return .55+Z+nt},2.4),w=oi(64,64,(x,R)=>.22+(Math.sin(x*.7)*.5+.5)*.12+(R%9===0?.08:0)),E=ai(128,128,(x,R)=>{const L=Math.sin(x*.85)*.05+Math.sin(R*1.15)*.04,C=x%8===0?-.06:0;return .5+L+C},2.2),N=oi(128,128,(x,R,L,C)=>.78+R/C*.1+(x%8===0?.06:0)),P=ai(256,256,(x,R)=>{const C=x%64,Z=R%64;return Math.min(C,Z,63-C,63-Z)<3?.05:.72+Math.sin(x*.17)*Math.sin(R*.13)*.06},4.5,8,6),I=oi(256,256,(x,R)=>Math.min(x%64,R%64,63-x%64,63-R%64)<3?.95:.78,8,6),D=ai(256,256,(x,R)=>Math.min(x%64,R%64,63-x%64,63-R%64)<4?0:.66,5,4,4),S=oi(256,256,(x,R)=>Math.min(x%64,R%64)<4?.96:.84,4,4),y=ai(128,128,(x,R)=>{const L=Math.sin(R*.42+Math.sin(x*.07)*2.4)*.14,C=x%22===0?-.08:0;return .5+L+C},3.1),A=oi(128,128,(x,R,L,C)=>.48+(Math.sin(R*.35)*.5+.5)*.22+R/C*.08),X=ai(128,128,(x,R,L,C)=>{const Z=Math.sin(x*1.6)*Math.sin(R*1.25)*.05,nt=Math.abs(R/C-.22)<.018?-.22:0;return .55+Z+nt},2.6),H=oi(128,128,(x,R,L,C)=>.62+(Math.sin(x*.4+R*.2)*.5+.5)*.2+R/C*.08),V=Ae(256,64,(x,R,L)=>{x.fillStyle="#3c362e",x.fillRect(0,0,R,L),x.fillStyle="#2e2924";for(let C=0;C<R;C+=32)x.fillRect(C,0,2,L);x.strokeStyle="#e6c56a",x.lineWidth=3,x.strokeRect(6,8,R-12,L-16),x.lineWidth=2,x.beginPath(),x.ellipse(R/2,L/2,30,18,0,0,Math.PI*2),x.stroke(),x.beginPath(),x.ellipse(R/2,L/2,16,9,0,0,Math.PI*2),x.stroke(),x.fillStyle="#f0d48a",x.beginPath(),x.arc(R/2,L/2,3.5,0,Math.PI*2),x.fill()});return{floor:i,wall:t,ceiling:n,wood:r,hazard:s,snow:a,pearl:o,pearlWorn:l,joint:c,gold:u,cloth:d,leather:p,trench:f,nave:g,trim:e,brushed:v,pearlNormal:m,pearlRough:h,goldNormal:T,goldRough:w,clothNormal:E,clothRough:N,floorNormal:P,floorRough:I,naveNormal:D,naveRough:S,woodNormal:y,woodRough:A,leatherNormal:X,leatherRough:H,seal:V}}function Wl(i,t,e="#16130f",n="#f4efe6"){const r=document.createElement("canvas");r.width=512,r.height=t?160:128;const s=r.getContext("2d");s.fillStyle=e,s.fillRect(0,0,r.width,r.height),s.strokeStyle="#e2a23a",s.lineWidth=8,s.strokeRect(8,8,r.width-16,r.height-16),s.fillStyle=n,s.textAlign="center",s.textBaseline="middle",s.font="700 58px Trebuchet MS, sans-serif",s.fillText(i,r.width/2,t?68:r.height/2+2),t&&(s.font="600 28px Trebuchet MS, sans-serif",s.fillStyle="#e2a23a",s.fillText(t,r.width/2,118));const a=new Pr(r);return a.colorSpace=Ce,a.anisotropy=4,a}function me(i){return new ke({envMapIntensity:.32,...i})}function Wn(i){var t,e;return i!=null&&i.index&&((t=i.attributes)!=null&&t.uv)&&((e=i.attributes)!=null&&e.normal)&&!i.attributes.tangent&&i.computeTangents(),i}function ki(i,t,e){const n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n}function cg(i){const t=lg(),e={floor:me({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.03}),wall:me({map:t.wall,roughness:.88,metalness:.03}),ceiling:me({map:t.ceiling,roughness:.96,metalness:0}),trim:me({map:t.trim,roughness:.74,metalness:.08}),metal:me({color:7172984,roughness:.38,metalness:.62}),wood:me({map:ki(t.wood,2,2),normalMap:ki(t.woodNormal,2,2),roughnessMap:ki(t.woodRough,2,2),roughness:1,metalness:.04}),runner:me({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:me({color:1315344,roughness:.9}),brass:me({map:ki(t.gold,2,2),normalMap:ki(t.goldNormal,2,2),roughnessMap:ki(t.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:me({color:5065016,roughness:.92}),glass:me({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:me({map:t.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};e.hazard.side=nn,e.floor.normalScale.set(.7,.7),e.wood.normalScale.set(.85,.85),e.brass.normalScale.set(.4,.4);const n=new Map;function r(j,rt,Et,pt,b,M,G){const et=new Wt(b,M,G);et.translate(rt,Et,pt),n.has(j)||n.set(j,[]),n.get(j).push(et)}const s=[];let a=null;const o=3.6;let l=null;const c=me({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});c.side=nn;for(const j of kc){if(j.veil){l=new dt(new Wt(j.w,j.h,j.d),c),l.position.set(j.x,j.y,j.z),l.visible=!1,i.add(l);continue}if(j.door){a=new Pe;const rt=new dt(new Wt(j.w*.92,j.h*.98,j.d*.62),me({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),Et=me({color:14012098,roughness:.66,metalness:.05});for(const G of[-j.h*.18,j.h*.16]){const et=new dt(new Wt(j.w*.62,j.h*.28,.045),Et);et.position.set(0,G,j.d*.36),et.castShadow=!0,a.add(et)}const pt=new dt(Wn(new Wt(j.w,.16,j.d*.8)),e.brass);pt.position.y=j.h*.42;const b=new dt(Wn(new Wt(.14,j.h*.72,j.d*.78)),e.brass),M=new dt(new $e(1.7,.5),new Re({map:Wl("RADIO","WING","#1c140c","#f0d48a")}));M.position.set(0,.35,j.d*.42),a.add(rt,pt,b,M),a.position.set(j.x,j.y,j.z),i.add(a);continue}if(j.phaseGate){const rt=new dt(new Wt(j.w,j.h,j.d),e.hazard);rt.position.set(j.x,j.y,j.z),rt.castShadow=!0,rt.receiveShadow=!0,i.add(rt),s.push(rt);continue}r(j.mat,j.x,j.y,j.z,j.w,j.h,j.d)}r("runner",0,.02,-1.2,2.6,.02,18),r("dark",-7.4,1.3,-13.15,6.4,2.6,.4),r("dark",-5.2,1.3,-13.15,2.4,2.6,.4),r("dark",5.4,1.3,-13.15,2.4,2.6,.4),r("dark",8.6,1.3,-13.15,6.4,2.6,.4),r("runner",0,.025,-21.4,1.5,.02,12),r("brass",0,2.55,-2.15,.12,3.5,.12),r("brass",0,4.15,-2.15,1.35,.08,1.35),r("plant",-3.3,.28,-2.5,.7,.45,.7),r("plant",3.35,.28,1.4,.7,.45,.7),r("plant",-3.2,.55,2.4,.45,.7,.45),r("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const j of[-12,-4,4,12])for(const rt of[-8,0,8])r("metal",j,6.85,rt,1.6,.08,.28);for(let j=-14;j<=14;j+=2.2)r("metal",j,4.55,-10.45,.06,.7,.06);r("metal",0,4.55,-10.45,28,.05,.05);for(const[j,rt]of n){const Et=rt.length===1?rt[0]:Zc(rt);e[j].normalMap&&Wn(Et);const pt=new dt(Et,e[j]);pt.castShadow=j!=="floor"&&j!=="ceiling"&&j!=="runner",pt.receiveShadow=!0,i.add(pt)}const u=new dt(new Me(1.35,1.35,.06,24),me({color:4078132,roughness:.9,metalness:.08}));u.position.set(0,.04,-.05),u.receiveShadow=!0,i.add(u);const d=new dt(new gi([new Tt(.35,.02),new Tt(1.2,.05),new Tt(1.42,.2),new Tt(1.22,.28)],28),me({map:t.trim,roughness:.62,metalness:.16,envMapIntensity:.4}));d.position.set(0,.02,-.05),d.castShadow=!0,d.receiveShadow=!0,i.add(d);const p=new dt(new Rs(1.12,24),me({color:2371635,roughness:.12,metalness:.55,envMapIntensity:.8}));p.rotation.x=-Math.PI/2,p.position.set(0,.1,-.05),p.receiveShadow=!0,i.add(p);const f=new dt(new Me(.55,.7,.12,12),e.brass);f.position.set(0,4.28,-2.15),f.rotation.x=.55,f.castShadow=!0,i.add(f);const g=new dt(new $e(1.15,.7),new Re({color:16757066}));g.position.set(10.7,1.85,-5.1),g.rotation.y=-Math.PI/2,i.add(g);const v=new dt(new $e(1.7,1.7),me({map:t.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));v.rotation.x=-Math.PI/2,v.position.set(9.45,.03,0),v.receiveShadow=!0,i.add(v);const m=new dt(new Wt(5.4,2.2,.06),e.glass);m.position.set(9.4,1.8,8.7),i.add(m);const h=new dt(new Wt(.7,.45,.06),new Re({map:t.snow}));h.position.set(9.2,1.25,8.72),i.add(h);const T=h.clone();T.position.x=10.15,i.add(T);const w=new dt(new Wt(.08,.08,.08),new Re({color:16757066}));w.position.set(10.55,1.55,8.7),i.add(w);function E(j,rt,Et,pt,b,M,G,et,it,tt){const mt=new dt(new $e(M,G),new Re({map:Wl(j,rt,it,tt),transparent:!1}));return mt.position.set(Et,pt,b),mt.rotation.y=et,i.add(mt),mt}E("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),E("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),E("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),E("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),E("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),E("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),E("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),E("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),E("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),E("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),E("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),E("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),E("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a");const N=new dt(new $e(3.15,.34),me({map:t.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));N.receiveShadow=!0,N.rotation.x=-Math.PI/2,N.position.set(0,.045,yr),i.add(N);const P=zc[0],I=me({map:t.gold,normalMap:t.goldNormal,roughnessMap:t.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),D=new Pe,S=new dt(Wn(new Me(.08,.34,.62,16)),I);S.rotation.z=Math.PI/2,S.castShadow=!0;const y=new dt(Wn(new Me(.06,.06,.45,10)),e.brass);y.rotation.z=Math.PI/2,y.position.x=-.42;const A=new dt(Wn(new Wt(.08,.32,.24)),e.brass);A.position.set(-.66,0,0),A.castShadow=!0;const X=new dt(new Ie(.07,12,10),new Re({color:16757066}));X.position.x=.28;const H=new dt(new _n(.55,.03,8,24),new Re({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));H.rotation.y=Math.PI/2,D.add(S,y,A,X,H);for(const[j,rt]of[[-.08,.16],[.08,.24],[.2,.3]]){const Et=new dt(new _n(rt,.012,6,16),e.brass);Et.rotation.y=Math.PI/2,Et.position.x=j,Et.castShadow=!0,D.add(Et)}D.position.set(P.x,P.y,P.z),i.add(D);const V=new Tr(16757082,7,5.5,2);V.position.set(P.x+.4,P.y,P.z),i.add(V);function x(j,rt){const Et=new dt(new Me(.035,.05,.46,6),e.brass);Et.position.set(j,.28,rt);const pt=new dt(new Ie(.045,6,6),new Re({color:16757066}));pt.position.set(j,.54,rt),i.add(Et,pt)}x(-4.9,-18.2),x(4.9,-18.2),x(-4.9,-20.45),x(4.9,-20.45),x(-1.35,-27.15),x(1.35,-27.15);const R=new dt(new $e(15.2,13.2),me({map:t.nave,normalMap:t.naveNormal,roughnessMap:t.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));R.material.normalScale.set(.8,.8),Wn(R.geometry),R.rotation.x=-Math.PI/2,R.position.set(0,.018,-21.55),R.receiveShadow=!0,i.add(R);for(const[j,rt]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]]){const Et=new dt(Wn(new Wt(2.85,.62,.08)),e.wood);Et.position.set(j,.62,rt+.22),Et.castShadow=!0,Et.receiveShadow=!0,i.add(Et)}const L=io.find(j=>j.kind==="signal"),C=io.find(j=>j.kind==="health"),Z=new Pe,nt=new dt(new Wt(.38,.28,.38),e.brass),ht=new dt(new Wt(.16,.16,.16),new Re({color:16757066}));ht.position.y=.22,Z.add(nt,ht),Z.position.set(L.x,.35,L.z),i.add(Z);const Rt=new Pe,Gt=new dt(new Wt(.36,.22,.26),me({color:15196888,roughness:.6})),J=new dt(new Wt(.22,.04,.28),me({color:9255466,roughness:.5}));J.position.y=.08,Rt.add(Gt,J),Rt.position.set(C.x,.2,C.z),i.add(Rt);const st=new l0(15261908,3813928,.74);i.add(st);const ct=new Il(16773596,2.35);ct.position.set(8,18,10),ct.castShadow=!0,ct.shadow.mapSize.set(2048,2048),ct.shadow.camera.near=1,ct.shadow.camera.far=70,ct.shadow.camera.left=-30,ct.shadow.camera.right=30,ct.shadow.camera.top=30,ct.shadow.camera.bottom=-30,ct.shadow.bias=-25e-5,ct.shadow.normalBias=.025,ct.shadow.radius=1.5,ct.target.position.set(0,0,-8),i.add(ct,ct.target);const $=new Il(16769732,.7);$.position.set(-10,8,-6),$.castShadow=!1,i.add($);const Ct=[];function vt(j,rt,Et,pt=36,b=8){const M=new Tr(16757082,pt,b,2);return M.position.set(j,rt,Et),i.add(M),Ct.push(M),M}vt(0,3.2,-2.1,18,7),vt(-10,2.4,8.2,28,8),vt(9.2,2.6,8.4,26,7),vt(13.5,2.8,-5,34,8),vt(-6,3.4,-8,22,8),vt(4,3.4,-8,20,8),vt(0,5.2,2,30,14),vt(0,4.4,-21.5,34,16),vt(0,3.3,-26.4,16,7);const Lt=vt(13.4,2.6,1.2,24,6);let jt=0,Ot=0,Qt=!1,O=!1,$t=0,Bt=0;return i.background=new zt(11774879),i.fog=new go(11774879,12,40),{colliders:Hc(),gates:s,cache:Z,aid:Rt,textures:t,setDoor(j,rt=!1){Ot=j?1:0,rt&&(jt=Ot,a&&(a.position.y=o+jt*6.4))},setVeil(j,rt){if(!l||(l.visible=!!j,!j))return;const Et=rt==="DEAD_AIR";c.opacity=Et?.16:.94,c.depthWrite=!Et,c.emissiveIntensity=Et?.62:.3},setHijack({aimed:j,hot:rt}){Qt=!!j,O=!!rt},pulseHijack(){$t=.48},setChannel(j){const rt=i.fog;j==="STATIC"?(rt.color.setHex(10133668),rt.near=12,rt.far=38,i.background.setHex(9475738)):j==="DEAD_AIR"?(rt.color.setHex(2764856),rt.near=10,rt.far=36,i.background.setHex(2369584)):(rt.color.setHex(11774879),rt.near=12,rt.far=40,i.background.setHex(11774879));for(const Et of s)Et.material.opacity=j==="DEAD_AIR"?.14:.97,Et.material.depthWrite=j!=="DEAD_AIR",Et.material.emissiveIntensity=j==="DEAD_AIR"?.45:.18},setPickup(j,rt){j==="cache"&&(Z.visible=rt),j==="aid"&&(Rt.visible=rt)},update(j,rt){const Et=Math.min(.05,Math.max(0,j-Bt||0));if(Bt=j,jt+=(Ot-jt)*Math.min(1,Et*4.2),a&&(a.position.y=o+jt*6.4),$t>0&&($t=Math.max(0,$t-Et)),H.material.opacity=$t>0?$t/.48:0,H.scale.setScalar($t>0?1+(1-$t/.48)*2.4:1),I.emissive.setHex(O?16774877:13939034),I.emissiveIntensity=O?1.15:Qt?.85:.12,X.material.color.setHex(O?16773576:16757066),V.color.setHex(O?16769696:16757082),V.intensity=O?22:Qt?14:7,Lt.intensity=18+Math.sin(j*28)*10+(Math.random()<.04?-12:0),rt==="STATIC"){const pt=1+Math.sin(j*6)*.08;Z.scale.setScalar(pt)}else Z.scale.setScalar(1);g.material.color.setHSL(.09,.85,rt==="DEAD_AIR"?.18:.55)},practicals:Ct}}const Xl="channel-surfer-best",ug={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},hg={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function ql(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Yl(i,t,e,n){return i+(t-i)*(1-Math.exp(-12*n))}function da(i,t){const e=Math.cos(t),n=Math.sin(t),r=Math.sin(i),s=Math.cos(i),a={x:-r*e,y:n,z:-s*e},o={x:s,y:0,z:-r},l={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:l}}function fg(i,t){const e=new n0({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(960,780,!1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.outputColorSpace=Ce,e.toneMapping=nc,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=tc;const n=new Lc,r=new to(e);n.environment=r.fromScene(new h0,.06).texture,r.dispose();const s=new Ke(72,960/780,.08,90);n.add(s);const a=new Tr(16770756,14,4.5,2);a.position.set(.05,.02,-.25),s.add(a);const o=cg(n),l=Z0(n,o.textures),c=ag(s,o.textures),u=72,d=new Float32Array(u*3),p=new Float32Array(u*3),f=new ye;f.setAttribute("position",new Ne(d,3)),f.setAttribute("color",new Ne(p,3));const g=new o0(f,new Oc({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));n.add(g);const v=document.createElement("canvas");v.width=64,v.height=64;const m=v.getContext("2d"),h=m.createRadialGradient(32,32,1,32,32,30);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.35,"rgba(255,214,150,0.75)"),h.addColorStop(1,"rgba(255,160,60,0)"),m.fillStyle=h,m.fillRect(0,0,64,64);const T=new Pr(v);T.colorSpace=Ce;const w=[];for(let F=0;F<12;F++){const Y=new r0(new Uc({map:T,transparent:!0,depthWrite:!1,blending:_s}));Y.visible=!1,Y.frustumCulled=!1,n.add(Y),w.push(Y)}const E=28,N=new Float32Array(E*6),P=new Float32Array(E*6),I=new ye;I.setAttribute("position",new Ne(N,3)),I.setAttribute("color",new Ne(P,3)),n.add(new a0(I,new Fc({vertexColors:!0,transparent:!0,opacity:.95})));let D="title",S=null,y=[],A=null,X=[],H=[],V=!1,x=!1,R=!1,L=1.25,C=0,Z=0,nt=!1,ht="",Rt="",Gt="",J=[],st=[],ct=[],$={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},Ct=ql(1),vt=0,Lt=0,jt=0,Ot=0,Qt=0,O=0,$t=0,Bt="",j=0,rt=0,Et="",pt=0;const b=[],M=new Set;let G=0,et="",it=!1;try{G=Number(localStorage.getItem(Xl))||0}catch(F){G=0}function tt(F,Y,K,at,Mt){for(let ne=0;ne<Mt;ne++)J.push({x:F,y:Y,z:K,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:at});J.length>u&&J.splice(0,J.length-u),st.push({x:F,y:Y,z:K,life:.14,max:.14,color:at}),st.length>w.length&&st.shift()}function mt(F){Bt=F,j=.95,rt+=1}function ut(F,Y){M.has(F)||(M.add(F),b.push(Y))}function xt(F){et!==F&&(et=F,o.setChannel(F),c.setChannel(F),t.setChannel(F))}function Xt(){return Hc({doorOpen:V,veilUp:!!(A&&A.alive&&A.veilUp)})}function ot(F){return{x:F.x,y:F.y,z:F.z,yaw:F.yaw||0,pitch:0,vx:0,vz:0}}function yt(){S=Dl(),y=[...Vc(),...Es()],A=Gl(),X=M0(),V=!1,x=!1,R=!1,L=1.25,C=0,Z=0,nt=!1,ht="",Rt="",Gt="",H=[],J=[],st=[],ct=[],$=ot(d0),Ct=ql((Date.now()&65535)+3),vt=0,jt=0,Ot=.2,Qt=0,O=0,$t=0,it=!1,Bt="",j=0,Et="",pt=0,b.length=0,M.clear(),l.reset(y),l.resetPriest(A),o.setDoor(!1,!0),o.setVeil(!1,"LIVE"),xt("LIVE")}function It(){S={...Dl(),signal:80},y=[...y.filter(F=>F.room!=="chapel"),...Es().map(F=>({...F,dormant:!1}))],A={...Gl(),active:!0},V=!0,R=!1,L=1.25,C=0,Z=0,nt=!1,ht="",Rt="",Gt="",H=[],J=[],st=[],ct=[],$=ot(p0),Ot=.45,it=!1,x=!1,$t=0,O=0,Qt=0,l.reset(y),l.resetPriest(A),o.setDoor(!0,!0),o.setVeil(!1,"LIVE"),xt("LIVE"),mt("RADIO WING")}yt();function Dt(){if(vt>0&&!(G>0&&vt>=G)){G=vt;try{localStorage.setItem(Xl,String(G))}catch(F){}}}function St(F,Y){const K=T0(S,F);K.result==="ok"?(S=K.state,jt+=1,$t=.45,mt(ug[S.channel]),t.play(hg[S.channel]),xt(S.channel)):K.result==="denied"&&(mt("NO SIGNAL"),t.play("deny"))}function Kt(){const F=A0(S);if(S=F.state,!F.fired)return;const{forward:Y,right:K,up:at}=da($.yaw,$.pitch),Mt={x:$.x,y:$.y,z:$.z},ne=O0(Y,K,at,F.profile.pellets,F.profile.spread,Math.random),Yt={x:Mt.x+Y.x*.42+K.x*.14-at.x*.1,y:Mt.y+Y.y*.42+K.y*.14-at.y*.1,z:Mt.z+Y.z*.42+K.z*.14-at.z*.1},ge=vt<C,Fe=F.profile.kind==="hitscan"||ge?[.45,.97,1]:[.82,.82,.82],Jn=Xt();let Mn=!1,We=!1;Qt=Math.min(.07,Qt+(F.profile.kind==="spread"?.05:.014)),c.fire(F.profile.kind),t.play(F.profile.kind==="spread"?"static":"live");for(const Je of ne){const pe=U0(Mt,Je,F.profile.range,y,Jn),Oe=A.alive?ng(Mt,Je,F.profile.range,A,S.channel):null,pn=!!(Oe&&(!pe||Oe.t<pe.t)),Qe=pn?Oe:pe,we=Math.min(F.profile.range,22),Xe=Qe?{x:Qe.x,y:Qe.y,z:Qe.z}:{x:Mt.x+Je.x*we,y:Mt.y+Je.y*we,z:Mt.z+Je.z*we};if((!Qe||Qe.t>.45)&&ct.push({a:Yt,b:Xe,color:Fe,life:.16}),pn){const _=Ul(F.profile.damage,Oe.t,F.profile.range,F.profile.falloff)*(ge?Xn.retuneMult:1),U=eg(A,_);if(A=U.priest,U.dealt>0&&(Mn=!0),tt(Oe.x,Oe.y,Oe.z,ge?[.45,.97,1]:[.96,.94,.88],5),!U.killed){const W=Vl(A,{channel:S.channel,weak:Oe.weak,halo:Oe.halo,crossed:!1});W.broken?(Nt(W),We=!0):A=W.priest}continue}if(!pe)continue;if(pe.kind==="world"){tt(pe.x,pe.y,pe.z,[.75,.68,.55],6);continue}const an=y.findIndex(_=>_.id===pe.id);if(an<0||!y[an].alive)continue;const Qn=N0(y[an],vt),_i=Ul(F.profile.damage,pe.t,F.profile.range,F.profile.falloff)*(ge?Xn.retuneMult:1),yn=F0(Qn.enemy,{weak:pe.weak,damage:_i});if(yn.enemy.hurt=.1,y[an]=yn.enemy,Mn=yn.dealt>0,tt(pe.x,pe.y,pe.z,[.96,.94,.9],8),yn.killed){const _=C0(S,{distance:pe.t,channel:S.channel,burst:Qn.burst});S=_.state,tt(pe.x,pe.y,pe.z,[1,.68,.25],18),t.play("death"),mt(_.aggressive?"AGGRESSIVE +"+_.amount:"SIGNAL +"+_.amount)}}Mn&&!We&&t.play("hit"),ct.length>E&&ct.splice(0,ct.length-E)}function Nt(F){A=F.priest,F.broken&&(t.play("rite-break"),tt(A.x,2.15,A.z,[.96,.78,.32],20),$t=Math.max($t,.34),A.alive&&mt("RITE BROKEN"))}function se(){const F=A.x,Y=1.72,K=A.z,at=$.x-F+(Ct()-.5)*.22,Mt=1.15-Y+(Ct()-.5)*.12,ne=$.z-K+(Ct()-.5)*.22,Yt=Math.hypot(at,Mt,ne)||1,ge=je.boltSpeed;return{x:F,y:Y,z:K,vx:at/Yt*ge,vy:Mt/Yt*ge,vz:ne/Yt*ge,damage:je.boltDamage,life:2.6}}function B(F,Y){const K=b0(S,F);if(S=K.state,K.forced&&(mt("NO SIGNAL"),t.play("nosignal"),$t=.55,xt(S.channel)),Y.channel)St(Y.channel);else if(Y.cycle){const _=dn(Y.cycle,-3,3),U=_>0?1:-1;for(let W=0;W!==_;W+=U)St(S0(S.channel,U))}$.yaw-=Y.lookX*.00215,$.pitch=dn($.pitch-Y.lookY*.00215,-1.35,1.35);const at=y.some(_=>_.alive&&_.room!=="chapel");if(!V&&!at&&(V=!0,mt("RADIO WING"),t.play("door"),ut("wing","North door is open. The radio wing is still on the air.")),V&&$.z<-15.05){for(let _=0;_<y.length;_++)y[_].room==="chapel"&&y[_].dormant&&(y[_]={...y[_],dormant:!1});A.active||(A={...A,active:!0},ut("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}const Mt=zc[0],{forward:ne}=da($.yaw,$.pitch),Yt=!Yc($.x,$.y,$.z,Mt.x,Mt.y,Mt.z,Xt());nt=ig({origin:{x:$.x,y:$.y,z:$.z},dir:ne,point:Mt,maxDist:Xn.maxDist,cone:Xn.cone,blocked:Yt}).aimed;const Fe=vt<C,Jn=Z>vt;if(nt?ht=Fe?"PA RETUNED":Jn?"PA RECHARGING":"E  RETUNE PA":ht=Fe?"PA RETUNED":"",Rt=Fe?"hot":nt&&Jn?"cool":nt?"ready":"",Y.use&&nt){const _=rg({cooldownUntil:Z},vt);_.ok?(Z=_.cooldownUntil,C=vt+Xn.retune,y=sg(y,Mt,Xn.radius,Xn.stun),mt("PA RETUNE"),t.play("hijack"),tt(Mt.x,Mt.y,Mt.z,[.45,.97,1],28),$t=Math.max($t,.28),O=Math.max(O,.035),o.pulseHijack()):t.play("deny")}V&&Math.hypot($.x-Mt.x,$.z-Mt.z)<8&&ut("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const Mn=Q0(A,F,{player:{x:$.x,z:$.z}});A=Mn.priest;for(const _ of Mn.events)if(_.type==="announce")mt(Hl(_.rite)),t.play("rite");else if(_.type==="fail"){const U=Nl(S,_.damage);S=U.state,U.hit&&(t.play("rite-fail"),O=Math.max(O,.045)),mt("RITE HOLDS")}else _.type==="shot"&&H.length<16&&(H.push(se()),t.play("bolt"));Gt=A.alive&&A.phase==="rite"?Hl(A.rite):"";const We=Xt();for(let _=0;_<y.length;_++){if(!y[_].alive)continue;const U=H0(y[_],F,{channel:S.channel,player:{x:$.x,y:1.2,z:$.z},colliders:We,allies:y,rng:Ct});y[_]=U.enemy,U.shot&&H.length<16&&(H.push(U.shot),t.play("bolt"))}const Je=Wc(S.channel),pe=-Math.sin($.yaw),Oe=-Math.cos($.yaw),pn=Math.cos($.yaw),Qe=-Math.sin($.yaw);let we=0,Xe=0;Y.forward&&(we+=pe,Xe+=Oe),Y.back&&(we-=pe,Xe-=Oe),Y.right&&(we+=pn,Xe+=Qe),Y.left&&(we-=pn,Xe-=Qe);const an=Math.hypot(we,Xe);an>0&&(we=we/an*Je,Xe=Xe/an*Je),$.vx=Yl($.vx,we,12,F),$.vz=Yl($.vz,Xe,12,F);const Qn=Xc($.x,$.z,$.vx*F,$.vz*F,ee.playerRadius,We,S.channel,f0);if($.x=Qn.x,$.z=Qn.z,A.alive&&A.phase==="rite"&&A.rite==="veil"&&S.channel==="DEAD_AIR"&&$.z<m0){const _=Vl(A,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});_.broken&&Nt(_)}Ot>0?Ot-=F:Y.fireDown?S.channel==="DEAD_AIR"?it||(it=!0,t.play("deny"),c.fire("none")):(it=!1,Kt()):it=!1;const _i=[];for(const _ of H){const U=Math.hypot(_.vx,_.vy,_.vz)||1,W=U*F,q=xo(_.x,_.y,_.z,_.vx/U,_.vy/U,_.vz/U,W,Xt());if(q){tt(q.x,q.y,q.z,[1,.62,.22],3);continue}if(_.x+=_.vx*F,_.y+=_.vy*F,_.z+=_.vz*F,_.life-=F,_.life<=0||_.y<0||_.y>6)continue;const k=_.x-$.x,lt=_.z-$.z;if(k*k+lt*lt<.4*.4&&_.y>.25&&_.y<1.75){const _t=Nl(S,_.damage);S=_t.state,_t.hit&&(t.play("hurt"),O=.05,$t=Math.max($t,.2)),tt(_.x,_.y,_.z,[1,.5,.18],6);continue}_i.push(_)}H=_i;for(const _ of X){if(_.taken||!z0(_,S.channel)||Math.hypot($.x-_.x,$.z-_.z)>1.15)continue;const U=B0(S,_);U.took&&(S=U.state,_.taken=!0,t.play("pickup"),mt(_.kind==="signal"?"SIGNAL CACHE":"AID KIT"))}vt>.45&&ut("intro","LIVE — precise cyan bolt. Keys 1–3, wheel, or Q."),(Math.hypot($.x,$.z)<7.5||vt>11)&&ut("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot($.x-10.4,$.z)<6.2||vt>20)&&ut("gate","Striped shutter is DEAD AIR. You move faster and cannot fire."),$.x>12.1&&X.some(_=>_.cloaked&&!_.taken)&&ut("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const yn=y.filter(_=>_.alive&&_.room!=="chapel");if(yn.length===1&&yn[0].id==="alley"&&ut("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),pt>0?(pt-=F,pt<=0&&(Et="")):b.length&&(Et=b.shift(),pt=6.2),S.health<=0){x=V,D="dead",t.play("ui");return}!A.alive&&V?(R||(R=!0,y=y.map(_=>_.room==="chapel"&&_.alive?{..._,alive:!1,hittable:!1}:_),S=vo(S,40),mt("OFF THE AIR"),t.play("death"),tt(A.x,2.1,A.z,[.96,.8,.38],34),tt(A.x,2.75,A.z,[.9,.72,.28],16),L=1.25),L-=F,L<=0&&(D="clear",Dt(),t.play("pickup"))):L=1.25}function gt(F){for(let Y=J.length-1;Y>=0;Y--){const K=J[Y];K.life-=F,K.vy-=7*F,K.x+=K.vx*F,K.y+=K.vy*F,K.z+=K.vz*F,K.life<=0&&J.splice(Y,1)}for(let Y=0;Y<u;Y++){const K=J[Y],at=Y*3;if(!K){d[at+1]=-40,p[at]=p[at+1]=p[at+2]=0;continue}d[at]=K.x,d[at+1]=K.y,d[at+2]=K.z;const Mt=dn(K.life*3,0,1);p[at]=K.color[0]*Mt,p[at+1]=K.color[1]*Mt,p[at+2]=K.color[2]*Mt}f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0;for(let Y=st.length-1;Y>=0;Y--)st[Y].life-=F,st[Y].life<=0&&st.splice(Y,1);for(let Y=0;Y<w.length;Y++){const K=w[Y],at=st[Y];if(!at){K.visible=!1;continue}const Mt=at.life/at.max;K.visible=!0,K.position.set(at.x,at.y,at.z),K.scale.setScalar(.18+(1-Mt)*.55),K.material.opacity=Mt,K.material.color.setRGB(at.color[0],at.color[1],at.color[2])}for(let Y=ct.length-1;Y>=0;Y--)ct[Y].life-=F,ct[Y].life<=0&&ct.splice(Y,1);for(let Y=0;Y<E;Y++){const K=ct[Y],at=Y*6;if(!K){N[at+1]=-40,N[at+4]=-40;continue}N[at]=K.a.x,N[at+1]=K.a.y,N[at+2]=K.a.z,N[at+3]=K.b.x,N[at+4]=K.b.y,N[at+5]=K.b.z;for(let Mt=0;Mt<2;Mt++)P[at+Mt*3]=K.color[0],P[at+Mt*3+1]=K.color[1],P[at+Mt*3+2]=K.color[2]}I.attributes.position.needsUpdate=!0,I.attributes.color.needsUpdate=!0}function Q(F){if(D==="title"){s.position.set(Math.sin(Lt*.16)*.5,2.5,9.3),s.lookAt(0,1.2,-1.4),c.setVisible(!1);return}c.setVisible(!0),O*=Math.exp(-9*F),Qt*=Math.exp(-11*F),s.position.set($.x+(Math.random()-.5)*O,$.y,$.z+(Math.random()-.5)*O),s.rotation.order="YXZ",s.rotation.y=$.yaw,s.rotation.x=$.pitch-Qt,s.rotation.z=0;const{right:Y}=da($.yaw,0),K=D==="play"?$.vx*Y.x+$.vz*Y.z:0;c.update(F,D==="play"?Math.hypot($.vx,$.vz):0,{strafe:K})}return{get mode(){return D},start(){yt(),D="play",t.play("ui")},resume(){D==="pause"&&(D="play")},pause(){D==="play"&&(D="pause")},replay(){x?It():yt(),D="play",t.play("ui")},toTitle(){yt(),D="title"},update(F,Y){const K=Math.min(.05,Math.max(0,F)||0);Lt+=K,D==="play"&&(vt+=K,B(K,Y)),j>0&&(j-=K,j<=0&&(Bt="")),$t=Math.max(0,$t-K*3.2),xt(D==="title"?"LIVE":S.channel);const at=X.find(ne=>ne.cloaked),Mt=X.find(ne=>ne.kind==="health");o.setPickup("cache",!!(at&&!at.taken&&S.channel==="STATIC"&&D!=="title")),o.setPickup("aid",!!(Mt&&!Mt.taken)),o.setDoor(V),o.setVeil(!!(A.alive&&A.veilUp),D==="title"?"LIVE":S.channel),o.setHijack({aimed:D==="play"&&nt,hot:D==="play"&&vt<C}),o.update(Lt,S.channel),l.sync(y,K,Lt,S.channel),l.syncPriest(A,K,Lt,D==="title"?"LIVE":S.channel),l.syncBolts(H),gt(K),Q(K),e.render(n,s)},hud(){const F=$.z<-14.85,Y=y.filter(Mt=>Mt.alive&&Mt.room!=="chapel").length,K=y.filter(Mt=>Mt.alive&&Mt.room==="chapel").length+(A.alive?1:0),at=D==="play";return{mode:D,health:S.health,signal:S.signal,channel:S.channel,enemies:F?K:Y,roomLabel:F?"RADIO":"COURT",countLabel:F?"ON AIR":"TESSERA",tip:Et,banner:Bt,bannerSerial:rt,flash:$t,hurt:S.hurtTimer,time:vt,best:G,swaps:jt,muted:t.muted,prompt:at?ht:"",promptKind:at?Rt:"",rite:at?Gt:"",boss:F&&A.alive?A.hp/A.maxHp:null,checkpoint:x}}}}const dg=960,pg=780,tu=document.getElementById("stage"),Ts=document.getElementById("view"),br=nu();let Zt;try{Zt=fg(Ts,br)}catch(i){const t=document.getElementById("boot-error");throw t&&(t.textContent="The picture failed to come up. "+(i&&i.message?i.message:"")),i}const Gi=new Set,xe={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let Zl=-1;const mg=document.getElementById("health-fill"),gg=document.getElementById("health-num"),_g=document.getElementById("signal-fill"),vg=document.getElementById("signal-num"),xg=document.getElementById("ch-name"),Mg=document.getElementById("enemy-count"),yg=document.getElementById("room-label"),Sg=document.getElementById("count-label"),Eg=document.getElementById("rite"),Kl=document.getElementById("prompt"),$l=document.getElementById("boss-wrap"),Tg=document.getElementById("boss-fill"),bg=document.getElementById("tip"),as=document.getElementById("banner"),jl=document.getElementById("hurt"),wg=document.getElementById("flash"),Ag=document.getElementById("panel"),os=document.getElementById("panel-kicker"),ls=document.getElementById("panel-title"),cs=document.getElementById("panel-body"),us=document.getElementById("panel-meta"),xr=document.getElementById("panel-primary"),Mr=document.getElementById("panel-secondary");function yo(){const i=Math.min(window.innerWidth/dg,window.innerHeight/pg);tu.style.transform=`scale(${Math.max(.05,i)})`}yo();window.addEventListener("resize",yo);window.addEventListener("orientationchange",yo);function qi(){document.pointerLockElement!==Ts&&Ts.requestPointerLock()}function Cs(){br.ensure(),Zt.mode==="title"?(Zt.start(),qi()):Zt.mode==="pause"?(Zt.resume(),qi()):(Zt.mode==="clear"||Zt.mode==="dead")&&(Zt.replay(),qi())}document.getElementById("start").addEventListener("click",i=>{i.stopPropagation(),Cs()});xr.addEventListener("click",i=>{i.stopPropagation(),Cs()});Mr.addEventListener("click",i=>{i.stopPropagation(),br.ensure(),(Zt.mode==="pause"||Zt.mode==="clear"||Zt.mode==="dead")&&(Zt.mode==="pause"?Zt.replay():Zt.toTitle(),Zt.mode==="play"&&qi())});window.addEventListener("keydown",i=>{if(i.repeat)return;(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),Gi.add(i.code);const t=y0(i.code);t&&Zt.mode==="play"&&(xe.channel=t),i.code==="KeyQ"&&Zt.mode==="play"&&(xe.cycle+=1),i.code==="KeyE"&&Zt.mode==="play"&&(xe.use=!0),i.code==="KeyM"&&br.toggle(),i.code==="Escape"&&Zt.mode==="play"&&Zt.pause(),i.code==="Enter"&&Cs(),i.code==="KeyR"&&(Zt.mode==="pause"||Zt.mode==="clear"||Zt.mode==="dead")&&(br.ensure(),Zt.replay(),qi())});window.addEventListener("keyup",i=>Gi.delete(i.code));window.addEventListener("mousemove",i=>{Zt.mode==="play"&&(xe.lookX+=i.movementX||0,xe.lookY+=i.movementY||0)});window.addEventListener("mousedown",i=>{if(i.button===0&&!(i.target.closest&&i.target.closest("button"))){if(Zt.mode==="title"){Cs();return}Zt.mode==="play"&&(qi(),xe.fire=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(xe.fire=!1)});window.addEventListener("wheel",i=>{i.preventDefault(),!(Zt.mode!=="play"||Math.abs(i.deltaY)<4)&&(xe.cycle+=i.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==Ts&&Zt.mode==="play"&&Zt.pause()});window.addEventListener("blur",()=>{Zt.mode==="play"&&(Zt.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&Zt.mode==="play"&&(Zt.pause(),document.pointerLockElement&&document.exitPointerLock())});function mr(i){return i>0?i.toFixed(1)+"s":"—"}function Rg(i){const t=i.channel==="DEAD_AIR"?"ch-dead":i.channel==="STATIC"?"ch-static":"ch-live";tu.className=`mode-${i.mode} ${t}`,mg.style.width=Math.max(0,i.health)+"%",_g.style.width=Math.max(0,i.signal)+"%",gg.textContent=String(Math.ceil(i.health)),vg.textContent=String(Math.ceil(i.signal)),xg.textContent=i.channel==="DEAD_AIR"?"DEAD AIR":i.channel,Mg.textContent=String(i.enemies),yg.textContent=i.roomLabel||"COURT",Sg.textContent=i.countLabel||"TESSERA",Eg.textContent=i.rite||"",Kl.textContent=i.prompt||"",Kl.className=i.promptKind||"",i.boss==null?$l.classList.remove("on"):($l.classList.add("on"),Tg.style.width=Math.max(0,Math.min(100,i.boss*100))+"%"),bg.textContent=i.tip||"",jl.style.opacity=i.health<35?"0.28":"0",i.hurt>.2&&(jl.style.opacity="0.55"),wg.style.opacity=String(Math.max(0,Math.min(.7,i.flash))),i.bannerSerial!==Zl&&(Zl=i.bannerSerial,i.banner&&(as.textContent=i.banner,as.classList.remove("show"),as.offsetWidth,as.classList.add("show")));const e=i.mode==="pause"||i.mode==="clear"||i.mode==="dead";Ag.hidden=!e,e&&(i.mode==="pause"?(os.textContent="KRCD 7 · STILL ON AIR",ls.textContent="PAUSED",cs.textContent="Esc released the mouse. Click resume to lock it again.",us.textContent=i.muted?"MUTED":"",xr.textContent="Resume",Mr.textContent="Restart"):i.mode==="clear"?(os.textContent="KRCD 7 · RADIO",ls.textContent="WING CLEAR",cs.textContent="The Visor Priest is off the air. The mall is still broadcasting.",us.textContent=`TIME ${mr(i.time)} · BEST ${mr(i.best)} · ${i.swaps} CHANNEL CHANGES`,xr.textContent="Replay",Mr.textContent="Title"):i.checkpoint?(os.textContent="KRCD 7 · RADIO",ls.textContent="WING LOST",cs.textContent="The court stays clear. Retry from the radio door.",us.textContent=`TIME ${mr(i.time)} · BEST ${mr(i.best)}`,xr.textContent="Retry wing",Mr.textContent="Title"):(os.textContent="KRCD 7 · NO CARRIER",ls.textContent="SIGNAL LOST",cs.textContent="The court keeps the carrier. Retune and walk it again.",us.textContent=`BEST ${mr(i.best)}`,xr.textContent="Retry",Mr.textContent="Title"))}let Jl=performance.now();function eu(i){const t=Math.min(.05,(i-Jl)/1e3);Jl=i,document.hidden||(Zt.update(t,{forward:Gi.has("KeyW"),back:Gi.has("KeyS"),left:Gi.has("KeyA"),right:Gi.has("KeyD"),lookX:xe.lookX,lookY:xe.lookY,fireDown:xe.fire&&Zt.mode==="play",channel:xe.channel,cycle:xe.cycle,use:xe.use}),Rg(Zt.hud())),xe.lookX=0,xe.lookY=0,xe.channel=null,xe.cycle=0,xe.use=!1,requestAnimationFrame(eu)}requestAnimationFrame(eu);
