(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Wo="channel-surfer-mute";function bh(){const i=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let t=null,e=null,n=null,s=null,r=null,a=!1,o=!1;try{o=localStorage.getItem(Wo)==="1"}catch(d){o=!1}function l(){if(!i)return null;if(!t){t=new i,e=t.createGain(),e.gain.value=o?0:.85,n=t.createBiquadFilter(),n.type="lowpass",n.frequency.value=16e3,n.connect(e),e.connect(t.destination);const d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=d.getChannelData(0);for(let E=0;E<f.length;E++)f[E]=Math.random()*2-1;const m=t.createBufferSource();m.buffer=d,m.loop=!0;const _=t.createBiquadFilter();_.type="highpass",_.frequency.value=1200,s=t.createGain(),s.gain.value=0,m.connect(_),_.connect(s),s.connect(n),m.start(),r=t.createGain(),r.gain.value=.018;const g=t.createOscillator(),p=t.createOscillator();g.type="sine",p.type="triangle",g.frequency.value=55,p.frequency.value=82.4,g.connect(r),p.connect(r),r.connect(n),g.start(),p.start()}return t.state==="suspended"&&t.resume(),a=!0,t}function c(d,f){const m=t.createGain(),_=t.currentTime;return m.gain.setValueAtTime(1e-4,_),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),_+.012),m.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,d)),m.connect(n),m}function h(d,f,m,_,g){if(!a||!t||o)return;const p=t.createOscillator();p.type=m;const E=t.currentTime;p.frequency.setValueAtTime(d,E),g&&p.frequency.exponentialRampToValueAtTime(Math.max(30,g),E+f),p.connect(c(f,_)),p.start(),p.stop(E+f+.03)}function u(d,f,m){if(!a||!t||o)return;const _=Math.max(1,Math.floor(t.sampleRate*d)),g=t.createBuffer(1,_,t.sampleRate),p=g.getChannelData(0);for(let B=0;B<_;B++)p[B]=Math.random()*2-1;const E=t.createBufferSource();E.buffer=g;const b=t.createBiquadFilter();b.type="bandpass",b.frequency.value=m,b.Q.value=.7;const y=c(d,f);E.connect(b),b.connect(y),E.start()}return{ensure:l,get muted(){return o},toggle(){o=!o,e&&(e.gain.value=o?0:.85);try{localStorage.setItem(Wo,o?"1":"0")}catch(d){}return o},setChannel(d){if(!a||!t)return;const f=t.currentTime,m=d==="DEAD_AIR"?380:d==="STATIC"?3800:15e3;n.frequency.linearRampToValueAtTime(m,f+.07),s.gain.linearRampToValueAtTime(d==="STATIC"?.02:0,f+.08),r.gain.linearRampToValueAtTime(d==="DEAD_AIR"?.028:.016,f+.1)},play(d){if(!(!a||o))switch(d){case"live":u(.045,.14,2400),h(940,.08,"square",.045,360);break;case"static":u(.13,.22,640);break;case"deny":h(86,.09,"sine",.07,48);break;case"switch-live":h(523,.11,"square",.04),h(784,.13,"square",.03);break;case"switch-static":u(.08,.1,500),h(190,.12,"sawtooth",.03);break;case"switch-dead":h(74,.18,"sine",.07,42);break;case"hit":h(1500,.05,"square",.04,480);break;case"hurt":u(.11,.16,220),h(120,.16,"sawtooth",.05,60);break;case"death":u(.26,.18,280),h(210,.32,"triangle",.06,48);break;case"pickup":h(660,.08,"sine",.05),h(990,.12,"sine",.04);break;case"ui":h(480,.05,"square",.03);break;case"bolt":h(300,.09,"square",.03,130);break;case"nosignal":u(.16,.12,180);break;case"hijack":u(.18,.2,1800),h(680,.16,"sawtooth",.05,1400),h(220,.22,"square",.04,90);break;case"rite":h(196,.28,"sine",.05),h(247,.32,"sine",.035),h(392,.22,"triangle",.03);break;case"rite-break":u(.08,.16,1400),h(880,.12,"square",.05,420),h(1320,.16,"triangle",.04,700);break;case"rite-fail":h(98,.22,"sawtooth",.06,50),u(.14,.12,200);break;case"door":h(140,.18,"square",.04,70),h(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="170",Th=0,Xo=1,Ah=2,Sc=1,Ec=2,On=3,oi=0,qe=1,Ke=2,rn=0,Qi=1,Pr=2,qo=3,Yo=4,wc=5,zn=100,Rh=101,Ch=102,Ph=103,Dh=104,Ra=200,Ih=201,Lh=202,Uh=203,Ca=204,Pa=205,bc=206,Nh=207,Tc=208,Fh=209,Oh=210,zh=211,Bh=212,kh=213,Hh=214,Da=0,Ia=1,La=2,is=3,Ua=4,Na=5,Fa=6,Oa=7,Ac=0,Vh=1,Gh=2,ai=0,Wh=1,Xh=2,qh=3,Rc=4,Yh=5,Zh=6,jh=7,Cc=300,ss=301,rs=302,za=303,Ba=304,zr=306,Cn=1e3,kn=1001,ka=1002,nn=1003,Kh=1004,ks=1005,an=1006,Gr=1007,Sn=1008,Wn=1009,Pc=1010,Dc=1011,Ls=1012,Eo=1013,Ei=1014,Rn=1015,wi=1016,wo=1017,bo=1018,bi=1020,Ic=35902,Lc=1021,Uc=1022,En=1023,Nc=1024,Fc=1025,ts=1026,Ti=1027,To=1028,Ao=1029,Oc=1030,Ro=1031,Co=1033,wr=33776,br=33777,Tr=33778,Ar=33779,Ha=35840,Va=35841,Ga=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,Za=37808,ja=37809,Ka=37810,$a=37811,Ja=37812,Qa=37813,to=37814,eo=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,Rr=36492,lo=36494,co=36495,zc=36283,ho=36284,uo=36285,fo=36286,$h=3200,Jh=3201,Po=0,Qh=1,Bn="",We="srgb",li="srgb-linear",Br="linear",ye="srgb",Ri=7680,Zo=519,tu=512,eu=513,nu=514,Bc=515,iu=516,su=517,ru=518,au=519,po=35044,jo="300 es",Hn=2e3,Dr=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ko=1234567;const Cs=Math.PI/180,Us=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function Do(i,t){return(i%t+t)%t}function ou(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ps(i,t,e){return(1-e)*i+e*t}function cu(i,t,e,n){return Ps(i,t,1-Math.exp(-e*n))}function hu(i,t=1){return t-Math.abs(Do(i,t*2)-t)}function uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function du(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pu(i,t){return i+Math.random()*(t-i)}function mu(i){return i*(.5-Math.random())}function gu(i){i!==void 0&&(Ko=i);let t=Ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _u(i){return i*Cs}function vu(i){return i*Us}function xu(i){return(i&i-1)===0&&i!==0}function Mu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Su(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Eu={DEG2RAD:Cs,RAD2DEG:Us,generateUUID:Vn,clamp:Xe,euclideanModulo:Do,mapLinear:ou,inverseLerp:lu,lerp:Ps,damp:cu,pingpong:hu,smoothstep:uu,smootherstep:fu,randInt:du,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:_u,radToDeg:vu,isPowerOfTwo:xu,ceilPowerOfTwo:Mu,floorPowerOfTwo:yu,setQuaternionFromProperEuler:Su,normalize:xe,denormalize:yn};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,s,r,a,o,l,c){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],E=s[1],b=s[4],y=s[7],B=s[2],R=s[5],C=s[8];return r[0]=a*_+o*E+l*B,r[3]=a*g+o*b+l*R,r[6]=a*p+o*y+l*C,r[1]=c*_+h*E+u*B,r[4]=c*g+h*b+u*R,r[7]=c*p+h*y+u*C,r[2]=d*_+f*E+m*B,r[5]=d*g+f*b+m*R,r[8]=d*p+f*y+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wr.makeScale(t,e)),this}rotate(t){return this.premultiply(Wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new re;function kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){const i=Ir("canvas");return i.style.display="block",i}const $o={};function Es(i){i in $o||($o[i]=!0,console.warn(i))}function bu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Au(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:li,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?Br:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jo=[.64,.33,.3,.6,.15,.06],Qo=[.2126,.7152,.0722],tl=[.3127,.329],el=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[li]:{primaries:Jo,whitePoint:tl,transfer:Br,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qo,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:Jo,whitePoint:tl,transfer:ye,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qo,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});let Ci;class Ru{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Ir("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cu=0;class Hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xr(s[a].image)):r.push(Xr(s[a]))}else r=Xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pu=0;class $e extends os{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=kn,s=kn,r=an,a=Sn,o=En,l=Wn,c=$e.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Vn(),this.name="",this.source=new Hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cn:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cn:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Cc;$e.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(f+1)/2,B=(p+1)/2,R=(h+d)/4,C=(u+_)/4,U=(m+g)/4;return b>y&&b>B?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=C/n):y>B?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=U/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=C/r,s=U/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Du extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iu extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const B=Math.sqrt(b),R=Math.atan2(B,p*E);g=Math.sin(g*R)/B,o=Math.sin(o*R)/B}const y=o*E;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-o){const B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new V,il=new Os;class zs{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),Vs.subVectors(this.max,us),Pi.subVectors(t.a,us),Di.subVectors(t.b,us),Ii.subVectors(t.c,us),Kn.subVectors(Di,Pi),$n.subVectors(Ii,Di),hi.subVectors(Pi,Ii);let e=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!Yr(e,Pi,Di,Ii,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,Pi,Di,Ii,Vs))?!1:(Gs.crossVectors(Kn,$n),e=[Gs.x,Gs.y,Gs.z],Yr(e,Pi,Di,Ii,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new V,new V,new V,new V,new V,new V,new V,new V],vn=new V,Hs=new zs,Pi=new V,Di=new V,Ii=new V,Kn=new V,$n=new V,hi=new V,us=new V,Vs=new V,Gs=new V,ui=new V;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lu=new zs,fs=new V,Zr=new V;class Bs{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Zr)),this.expandByPoint(fs.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new V,jr=new V,Ws=new V,Jn=new V,Kr=new V,Xs=new V,$r=new V;class Io{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jr.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=Jn.dot(this.direction),l=-Jn.dot(Ws),c=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jr).addScaledVector(Ws,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),Xs.subVectors(n,t),$r.crossVectors(Kr,Xs);let a=this.direction.dot($r),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const l=o*this.direction.dot(Xs.crossVectors(Jn,Xs));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot($r);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,g){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Nu)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Qn.crossVectors(n,ln),Qn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Qn.crossVectors(n,ln)),Qn.normalize(),qs.crossVectors(ln,Qn),s[0]=Qn.x,s[4]=qs.x,s[8]=ln.x,s[1]=Qn.y,s[5]=qs.y,s[9]=ln.y,s[2]=Qn.z,s[6]=qs.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],E=n[3],b=n[7],y=n[11],B=n[15],R=s[0],C=s[4],U=s[8],w=s[12],x=s[1],T=s[5],L=s[9],N=s[13],G=s[2],J=s[6],Z=s[10],Q=s[14],v=s[3],P=s[7],F=s[11],I=s[15];return r[0]=a*R+o*x+l*G+c*v,r[4]=a*C+o*T+l*J+c*P,r[8]=a*U+o*L+l*Z+c*F,r[12]=a*w+o*N+l*Q+c*I,r[1]=h*R+u*x+d*G+f*v,r[5]=h*C+u*T+d*J+f*P,r[9]=h*U+u*L+d*Z+f*F,r[13]=h*w+u*N+d*Q+f*I,r[2]=m*R+_*x+g*G+p*v,r[6]=m*C+_*T+g*J+p*P,r[10]=m*U+_*L+g*Z+p*F,r[14]=m*w+_*N+g*Q+p*I,r[3]=E*R+b*x+y*G+B*v,r[7]=E*C+b*T+y*J+B*P,r[11]=E*U+b*L+y*Z+B*F,r[15]=E*w+b*N+y*Q+B*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],E=u*g*c-_*d*c+_*l*f-o*g*f-u*l*p+o*d*p,b=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,y=h*_*c-m*u*c+m*o*f-a*_*f-h*o*p+a*u*p,B=m*u*l-h*_*l-m*o*d+a*_*d+h*o*g-a*u*g,R=e*E+n*b+s*y+r*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=E*C,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*C,t[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*p+n*l*p)*C,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,t[4]=b*C,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*C,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=y*C,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(a*_*r-m*o*r+m*n*c-e*_*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=B*C,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(m*o*s-a*_*s-m*n*l+e*_*l+a*n*g-e*o*g)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,E=l*c,b=l*h,y=l*u,B=n.x,R=n.y,C=n.z;return s[0]=(1-(_+p))*B,s[1]=(f+y)*B,s[2]=(m-b)*B,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+p))*R,s[6]=(g+E)*R,s[7]=0,s[8]=(m+b)*C,s[9]=(g-E)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const c=1/r,h=1/a,u=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(o===Hn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Dr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let m,_;if(o===Hn)m=(a+r)*u,_=-2*u;else if(o===Dr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new V,xn=new Ee,Uu=new V(0,0,0),Nu=new V(1,1,1),Qn=new V,qs=new V,ln=new V,sl=new Ee,rl=new Os;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fu=0;const al=new V,Ui=new Os,Un=new Ee,Ys=new V,ds=new V,Ou=new V,zu=new Os,ol=new V(1,0,0),ll=new V(0,1,0),cl=new V(0,0,1),hl={type:"added"},Bu={type:"removed"},Ni={type:"childadded",child:null},Jr={type:"childremoved",child:null};class Ue extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new V,e=new Pn,n=new Os,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new re}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ds,Ys,this.up):Un.lookAt(Ys,ds,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Un),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,Ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new V(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new V,Nn=new V,Qr=new V,Fn=new V,Fi=new V,Oi=new V,ul=new V,ta=new V,ea=new V,na=new V,ia=new Se,sa=new Se,ra=new Se;class mn{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Nn.subVectors(n,e),Qr.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Nn),l=Mn.dot(Qr),c=Nn.dot(Nn),h=Nn.dot(Qr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Nn.subVectors(t,e),Mn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),Mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Fi.subVectors(s,n),Oi.subVectors(r,n),ta.subVectors(t,n);const l=Fi.dot(ta),c=Oi.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);const h=Fi.dot(ea),u=Oi.dot(ea);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Fi,a);na.subVectors(t,r);const f=Fi.dot(na),m=Oi.dot(na);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Oi,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ul.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(ul,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Do(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return he.fromWorkingColorSpace(je.copy(this),t),Math.round(Xe(je.r*255,0,255))*65536+Math.round(Xe(je.g*255,0,255))*256+Math.round(Xe(je.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=We){he.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Zs);const n=Ps(ti.h,Zs.h,e),s=Ps(ti.s,Zs.s,e),r=Ps(ti.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new jt;jt.NAMES=Wc;let ku=0;class Yn extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Vn(),this.name="",this.blending=Qi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new V,js=new St;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}}class Xc extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qc extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hu=0;const pn=new Ee,oa=new Ue,zi=new V,cn=new zs,ps=new zs,Be=new V;class De extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?qc:Xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(cn.min,ps.min),cn.expandByPoint(Be),Be.addVectors(cn.max,ps.max),cn.expandByPoint(Be)):(cn.expandByPoint(ps.min),cn.expandByPoint(ps.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Be.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(t,c),Be.add(zi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new V,l[U]=new V;const c=new V,h=new V,u=new V,d=new St,f=new St,m=new St,_=new V,g=new V;function p(U,w,x){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(T),o[U].add(_),o[w].add(_),o[x].add(_),l[U].add(g),l[w].add(g),l[x].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,w=E.length;U<w;++U){const x=E[U],T=x.start,L=x.count;for(let N=T,G=T+L;N<G;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new V,y=new V,B=new V,R=new V;function C(U){B.fromBufferAttribute(s,U),R.copy(B);const w=o[U];b.copy(w),b.sub(B.multiplyScalar(B.dot(w))).normalize(),y.crossVectors(R,w);const T=y.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,T)}for(let U=0,w=E.length;U<w;++U){const x=E[U],T=x.start,L=x.count;for(let N=T,G=T+L;N<G;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new Ee,fi=new Io,Ks=new Bs,dl=new V,$s=new V,Js=new V,Qs=new V,la=new V,tr=new V,pl=new V,er=new V;class lt extends Ue{constructor(t=new De,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),a?tr.addScaledVector(la,h):tr.addScaledVector(la.sub(e),h))}e.add(tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(Ks.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ks,dl)===null||fi.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(fl.copy(r).invert(),fi.copy(t.ray).applyMatrix4(fl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=E,B=b;y<B;y+=3){const R=o.getX(y),C=o.getX(y+1),U=o.getX(y+2);s=nr(this,p,t,n,c,h,u,R,C,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=nr(this,a,t,n,c,h,u,E,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=E,B=b;y<B;y+=3){const R=y,C=y+1,U=y+2;s=nr(this,p,t,n,c,h,u,R,C,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=g,b=g+1,y=g+2;s=nr(this,a,t,n,c,h,u,E,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Vu(i,t,e,n,s,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(er);return c<e.near||c>e.far?null:{distance:c,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$s),i.getVertexPosition(l,Js),i.getVertexPosition(c,Qs);const h=Vu(i,t,e,n,$s,Js,Qs,pl);if(h){const u=new V;mn.getBarycoord(pl,$s,Js,Qs,u),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,u,new St)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,l,c,u,new St)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};mn.getNormal($s,Js,Qs,d.normal),h.face=d,h.barycoord=u}return h}class Ot extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function m(_,g,p,E,b,y,B,R,C,U,w){const x=y/C,T=B/U,L=y/2,N=B/2,G=R/2,J=C+1,Z=U+1;let Q=0,v=0;const P=new V;for(let F=0;F<Z;F++){const I=F*T-N;for(let K=0;K<J;K++){const ft=K*x-L;P[_]=ft*E,P[g]=I*b,P[p]=G,c.push(P.x,P.y,P.z),P[_]=0,P[g]=0,P[p]=R>0?1:-1,h.push(P.x,P.y,P.z),u.push(K/C),u.push(1-F/U),Q+=1}}for(let F=0;F<U;F++)for(let I=0;I<C;I++){const K=d+I+J*F,ft=d+I+J*(F+1),X=d+(I+1)+J*(F+1),st=d+(I+1)+J*F;l.push(K,ft,st),l.push(ft,X,st),v+=6}o.addGroup(f,v,w),f+=v,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function Gu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const ws={clone:as,merge:Qe};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new V,ml=new St,gl=new St;class hn extends Zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,ki=1;class qu extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Bi,ki,t,e);s.layers=this.layers,this.add(s);const r=new hn(Bi,ki,t,e);r.layers=this.layers,this.add(r);const a=new hn(Bi,ki,t,e);a.layers=this.layers,this.add(a);const o=new hn(Bi,ki,t,e);o.layers=this.layers,this.add(o);const l=new hn(Bi,ki,t,e);l.layers=this.layers,this.add(l);const c=new hn(Bi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class jc extends $e{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yu extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ot(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:rn});r.uniforms.tEquirect.value=e;const a=new lt(s,r),o=e.minFilter;return e.minFilter===Sn&&(e.minFilter=an),new qu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ca=new V,Zu=new V,ju=new re;class vi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ca.subVectors(n,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ju.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Bs,ir=new V;class Lo{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],E=s[13],b=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-p).normalize(),n[1].setComponents(l+r,d+c,g+f,y+p).normalize(),n[2].setComponents(l+a,d+h,g+m,y+E).normalize(),n[3].setComponents(l-a,d-h,g-m,y-E).normalize(),n[4].setComponents(l-o,d-u,g-_,y-b).normalize(),e===Hn)n[5].setComponents(l+o,d+u,g+_,y+b).normalize();else if(e===Dr)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ku(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class be extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const E=p*d-a;for(let b=0;b<c;b++){const y=b*u-r;m.push(y,-E,0),_.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const b=E+c*p,y=E+c*(p+1),B=E+1+c*(p+1),R=E+1+c*p;f.push(b,y,R),f.push(y,B,R)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
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
#endif`,Qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yf=`#define PI 3.141592653589793
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ef=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
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
#endif`,Kf=`struct PhysicalMaterial {
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
}`,$f=`
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
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
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fd=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,_p=`#define NORMAL
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
}`,vp=`#define NORMAL
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
}`,xp=`#define PHONG
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
}`,Mp=`#define PHONG
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
}`,yp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,wp=`#define TOON
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
}`,bp=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Rp=`uniform vec3 color;
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
}`,Cp=`uniform float rotation;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:$u,alphahash_pars_fragment:Ju,alphamap_fragment:Qu,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:af,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:ff,clipping_planes_fragment:df,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:vf,color_pars_vertex:xf,color_vertex:Mf,common:yf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:wf,displacementmap_vertex:bf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:Df,envmap_pars_fragment:If,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Wf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:kf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:Zf,lights_physical_fragment:jf,lights_physical_pars_fragment:Kf,lights_fragment_begin:$f,lights_fragment_maps:Jf,lights_fragment_end:Qf,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphinstance_vertex:hd,morphcolor_vertex:ud,morphnormal_vertex:fd,morphtarget_pars_vertex:dd,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:gd,normal_pars_fragment:_d,normal_pars_vertex:vd,normal_vertex:xd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:wd,opaque_fragment:bd,packing:Td,premultiplied_alpha_fragment:Ad,project_vertex:Rd,dithering_fragment:Cd,dithering_pars_fragment:Pd,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Id,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Ud,shadowmap_vertex:Nd,shadowmask_pars_fragment:Fd,skinbase_vertex:Od,skinning_pars_vertex:zd,skinning_vertex:Bd,skinnormal_vertex:kd,specularmap_fragment:Hd,specularmap_pars_fragment:Vd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Wd,transmission_fragment:Xd,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:Zd,uv_vertex:jd,worldpos_vertex:Kd,background_vert:$d,background_frag:Jd,backgroundCube_vert:Qd,backgroundCube_frag:tp,cube_vert:ep,cube_frag:np,depth_vert:ip,depth_frag:sp,distanceRGBA_vert:rp,distanceRGBA_frag:ap,equirect_vert:op,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:fp,meshlambert_vert:dp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:_p,meshnormal_frag:vp,meshphong_vert:xp,meshphong_frag:Mp,meshphysical_vert:yp,meshphysical_frag:Sp,meshtoon_vert:Ep,meshtoon_frag:wp,points_vert:bp,points_frag:Tp,shadow_vert:Ap,shadow_frag:Rp,sprite_vert:Cp,sprite_frag:Pp},Tt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},An={basic:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Qe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Qe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Qe([Tt.points,Tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Qe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Qe([Tt.common,Tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Qe([Tt.sprite,Tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Qe([Tt.common,Tt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Qe([Tt.lights,Tt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};An.physical={uniforms:Qe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const sr={r:0,b:0,g:0},pi=new Pn,Dp=new Ee;function Ip(i,t,e,n,s,r,a){const o=new jt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const y=m(E);y===null?p(o,l):y&&y.isColor&&(p(y,1),b=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,b){const y=m(b);y&&(y.isCubeTexture||y.mapping===zr)?(h===void 0&&(h=new lt(new Ot(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:as(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(b.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dp.makeRotationFromEuler(pi)),h.material.toneMapped=he.getTransfer(y.colorSpace)!==ye,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new be(2,2),new gn({name:"BackgroundMaterial",uniforms:as(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=he.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(sr,Yc(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:g}}function Lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,T,L,N,G){let J=!1;const Z=u(N,L,T);r!==Z&&(r=Z,c(r.object)),J=f(x,N,L,G),J&&m(x,N,L,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(x,T,L,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,T,L){const N=L.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let J=G[T.id];J===void 0&&(J={},G[T.id]=J);let Z=J[N];return Z===void 0&&(Z=d(l()),J[N]=Z),Z}function d(x){const T=[],L=[],N=[];for(let G=0;G<e;G++)T[G]=0,L[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,T,L,N){const G=r.attributes,J=T.attributes;let Z=0;const Q=L.getAttributes();for(const v in Q)if(Q[v].location>=0){const F=G[v];let I=J[v];if(I===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(I=x.instanceColor)),F===void 0||F.attribute!==I||I&&F.data!==I.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function m(x,T,L,N){const G={},J=T.attributes;let Z=0;const Q=L.getAttributes();for(const v in Q)if(Q[v].location>=0){let F=J[v];F===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(F=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(F=x.instanceColor));const I={};I.attribute=F,F&&F.data&&(I.data=F.data),G[v]=I,Z++}r.attributes=G,r.attributesNum=Z,r.index=N}function _(){const x=r.newAttributes;for(let T=0,L=x.length;T<L;T++)x[T]=0}function g(x){p(x,0)}function p(x,T){const L=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;L[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),G[x]!==T&&(i.vertexAttribDivisor(x,T),G[x]=T)}function E(){const x=r.newAttributes,T=r.enabledAttributes;for(let L=0,N=T.length;L<N;L++)T[L]!==x[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function b(x,T,L,N,G,J,Z){Z===!0?i.vertexAttribIPointer(x,T,L,G,J):i.vertexAttribPointer(x,T,L,N,G,J)}function y(x,T,L,N){_();const G=N.attributes,J=L.getAttributes(),Z=T.defaultAttributeValues;for(const Q in J){const v=J[Q];if(v.location>=0){let P=G[Q];if(P===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(P=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(P=x.instanceColor)),P!==void 0){const F=P.normalized,I=P.itemSize,K=t.get(P);if(K===void 0)continue;const ft=K.buffer,X=K.type,st=K.bytesPerElement,yt=X===i.INT||X===i.UNSIGNED_INT||P.gpuType===Eo;if(P.isInterleavedBufferAttribute){const ot=P.data,gt=ot.stride,Pt=P.offset;if(ot.isInstancedInterleavedBuffer){for(let et=0;et<v.locationSize;et++)p(v.location+et,ot.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let et=0;et<v.locationSize;et++)g(v.location+et);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let et=0;et<v.locationSize;et++)b(v.location+et,I/v.locationSize,X,F,gt*st,(Pt+I/v.locationSize*et)*st,yt)}else{if(P.isInstancedBufferAttribute){for(let ot=0;ot<v.locationSize;ot++)p(v.location+ot,P.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ot=0;ot<v.locationSize;ot++)g(v.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let ot=0;ot<v.locationSize;ot++)b(v.location+ot,I/v.locationSize,X,F,I*st,I/v.locationSize*ot*st,yt)}}else if(Z!==void 0){const F=Z[Q];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(v.location,F);break;case 3:i.vertexAttrib3fv(v.location,F);break;case 4:i.vertexAttrib4fv(v.location,F);break;default:i.vertexAttrib1fv(v.location,F)}}}}E()}function B(){U();for(const x in n){const T=n[x];for(const L in T){const N=T[L];for(const G in N)h(N[G].object),delete N[G];delete T[L]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const L in T){const N=T[L];for(const G in N)h(N[G].object),delete N[G];delete T[L]}delete n[x.id]}function C(x){for(const T in n){const L=n[T];if(L[x.id]===void 0)continue;const N=L[x.id];for(const G in N)h(N[G].object),delete N[G];delete L[x.id]}}function U(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function Up(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==En&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!U)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:B,maxSamples:R}}function Fp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new vi,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const E=r?0:n,b=E*4;let y=p.clippingState||null;l.value=y,y=h(m,d,b,f);for(let B=0;B!==b;++B)y[B]=e[B];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Op(i){let t=new WeakMap;function e(a,o){return o===za?a.mapping=ss:o===Ba&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===Ba)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uo extends Zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,_l=[.125,.215,.35,.446,.526,.582],yi=20,ha=new Uo,vl=new jt;let ua=null,fa=0,da=0,pa=!1;const xi=(1+Math.sqrt(5))/2,Hi=1/xi,xl=[new V(-xi,Hi,0),new V(xi,Hi,0),new V(-Hi,0,xi),new V(Hi,0,xi),new V(0,xi,-Hi),new V(0,xi,Hi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class mo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,fa,da),this._renderer.xr.enabled=pa,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:wi,format:En,colorSpace:li,depthBuffer:!1},s=Ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zp(r)),this._blurMaterial=Bp(r,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){const o=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vl),h.toneMapping=ai,h.autoClear=!1;const f=new de({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new lt(new Ot,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(vl),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;rr(s,E*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xl[(s-r-1)%xl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):yi;g>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const p=[];let E=0;for(let C=0;C<yi;++C){const U=C/_,w=Math.exp(-U*U/2);p.push(w),C===0?E+=w:C<g&&(E+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const y=this._sizeLods[s],B=3*y*(s>b-$i?s-b+$i:0),R=4*(this._cubeSize-y);rr(e,B,R,3*y,2*y),l.setRenderTarget(e),l.render(u,ha)}}function zp(i){const t=[],e=[],n=[];let s=i;const r=i-$i+1+_l.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$i?l=_l[a-i+$i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,E=new Float32Array(_*m*f),b=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,U=R>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];E.set(w,_*m*R),b.set(d,g*m*R);const x=[R,R,R,R,R,R];y.set(x,p*m*R)}const B=new De;B.setAttribute("position",new Ve(E,_)),B.setAttribute("uv",new Ve(b,g)),B.setAttribute("faceIndex",new Ve(y,p)),t.push(B),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ml(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bp(i,t,e){const n=new Float32Array(yi),s=new V(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:No(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function yl(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Sl(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}function kp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===za||l===Ba,h=l===ss||l===rs;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new mo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new mo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let b=0,y=E.length;b<y;b+=3){const B=E[b+0],R=E[b+1],C=E[b+2];d.push(B,R,R,C,C,B)}}else if(m!==void 0){const E=m.array;_=m.version;for(let b=0,y=E.length/3-1;b<y;b+=3){const B=b+0,R=b+1,C=b+2;d.push(B,R,R,C,C,B)}}else return;const g=new(kc(d)?qc:Xc)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xp(i,t,e){const n=new WeakMap,s=new Se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let B=o.attributes.position.count*y,R=1;B>t.maxTextureSize&&(R=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const C=new Float32Array(B*R*4*u),U=new Vc(C,B,R,u);U.type=Rn,U.needsUpdate=!0;const w=y*4;for(let T=0;T<u;T++){const L=p[T],N=E[T],G=b[T],J=B*R*4*T;for(let Z=0;Z<L.count;Z++){const Q=Z*w;m===!0&&(s.fromBufferAttribute(L,Z),C[J+Q+0]=s.x,C[J+Q+1]=s.y,C[J+Q+2]=s.z,C[J+Q+3]=0),_===!0&&(s.fromBufferAttribute(N,Z),C[J+Q+4]=s.x,C[J+Q+5]=s.y,C[J+Q+6]=s.z,C[J+Q+7]=0),g===!0&&(s.fromBufferAttribute(G,Z),C[J+Q+8]=s.x,C[J+Q+9]=s.y,C[J+Q+10]=s.z,C[J+Q+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new St(B,R)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Fo extends $e{constructor(t,e,n,s,r,a,o,l,c,h=ts){if(h!==ts&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Ei),n===void 0&&h===Ti&&(n=bi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $c=new $e,El=new Fo(1,1),Jc=new Vc,Qc=new Iu,th=new jc,wl=[],bl=[],Tl=new Float32Array(16),Al=new Float32Array(9),Rl=new Float32Array(4);function ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wl[s];if(r===void 0&&(r=new Float32Array(s),wl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),Oe(e,n)}}function Jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),Oe(e,n)}}function Qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Tl.set(n),i.uniformMatrix4fv(this.addr,!1,Tl),Oe(e,n)}}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(El.compareFunction=Bc,r=El):r=$c,e.setTexture2D(t||r,s)}function c0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qc,s)}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||th,s)}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jc,s)}function f0(i){switch(i){case 5126:return Yp;case 35664:return Zp;case 35665:return jp;case 35666:return Kp;case 35674:return $p;case 35675:return Jp;case 35676:return Qp;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(i,t){i.uniform1fv(this.addr,t)}function p0(i,t){const e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function m0(i,t){const e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function g0(i,t){const e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function _0(i,t){const e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v0(i,t){const e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x0(i,t){const e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function y0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function E0(i,t){i.uniform4iv(this.addr,t)}function w0(i,t){i.uniform1uiv(this.addr,t)}function b0(i,t){i.uniform2uiv(this.addr,t)}function T0(i,t){i.uniform3uiv(this.addr,t)}function A0(i,t){i.uniform4uiv(this.addr,t)}function R0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$c,r[a])}function C0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qc,r[a])}function P0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||th,r[a])}function D0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jc,r[a])}function I0(i){switch(i){case 5126:return d0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return M0;case 35667:case 35671:return y0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return b0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return D0}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f0(e.type)}}class U0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}}class N0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Cl(i,t){i.seq.push(t),i.map[t.id]=t}function F0(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cl(e,c===void 0?new L0(o,i,t):new U0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new N0(o),Cl(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);F0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Pl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const O0=37297;let z0=0;function B0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Dl=new re;function k0(i){he._getMatrix(Dl,he.workingColorSpace,i);const t=`mat3( ${Dl.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Il(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+B0(i.getShaderSource(t),a)}else return s}function H0(i,t){const e=k0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,t){let e;switch(t){case Wh:e="Linear";break;case Xh:e="Reinhard";break;case qh:e="Cineon";break;case Rc:e="ACESFilmic";break;case Zh:e="AgX";break;case jh:e="Neutral";break;case Yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new V;function G0(){he.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function X0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function q0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function bs(i){return i!==""}function Ll(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Y0,j0)}const Z0=new Map;function j0(i,t){let e=se[t];if(e===void 0){const n=Z0.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(i){return i.replace(K0,$0)}function $0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function em(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Gh:t="ENVMAP_BLENDING_ADD";break}return t}function nm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function im(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=J0(e),c=Q0(e),h=tm(e),u=em(e),d=nm(e),f=W0(e),m=X0(r),_=s.createProgram();let g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(g=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?se.tonemapping_pars_fragment:"",e.toneMapping!==ai?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),a=go(a),a=Ll(a,e),a=Ul(a,e),o=go(o),o=Ll(o,e),o=Ul(o,e),a=Nl(a),o=Nl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+g+a,y=E+p+o,B=Pl(s,s.VERTEX_SHADER,b),R=Pl(s,s.FRAGMENT_SHADER,y);s.attachShader(_,B),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(T){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(B).trim(),G=s.getShaderInfoLog(R).trim();let J=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,R);else{const Q=Il(s,B,"vertex"),v=Il(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+Q+`
`+v)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||G==="")&&(Z=!1);Z&&(T.diagnostics={runnable:J,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(B),s.deleteShader(R),U=new Cr(s,_),w=q0(s,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,O0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=R,this}let sm=0;class rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new am(t),e.set(t,n)),n}}class am{constructor(t){this.id=sm++,this.code=t,this.usedTimes=0}}function om(i,t,e,n,s,r,a){const o=new Gc,l=new rm,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,x,T,L,N){const G=L.fog,J=N.geometry,Z=w.isMeshStandardMaterial?L.environment:null,Q=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),v=Q&&Q.mapping===zr?Q.image.height:null,P=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const F=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,I=F!==void 0?F.length:0;let K=0;J.morphAttributes.position!==void 0&&(K=1),J.morphAttributes.normal!==void 0&&(K=2),J.morphAttributes.color!==void 0&&(K=3);let ft,X,st,yt;if(P){const dt=An[P];ft=dt.vertexShader,X=dt.fragmentShader}else ft=w.vertexShader,X=w.fragmentShader,l.update(w),st=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);const ot=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,et=N.isBatchedMesh===!0,ee=!!w.map,Dt=!!w.matcap,Jt=!!Q,z=!!w.aoMap,oe=!!w.lightMap,kt=!!w.bumpMap,zt=!!w.normalMap,Mt=!!w.displacementMap,Yt=!!w.emissiveMap,xt=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,W=w.clearcoat>0,nt=w.dispersion>0,rt=w.iridescence>0,tt=w.sheen>0,It=w.transmission>0,mt=M&&!!w.anisotropyMap,_t=W&&!!w.clearcoatMap,Ht=W&&!!w.clearcoatNormalMap,at=W&&!!w.clearcoatRoughnessMap,Et=rt&&!!w.iridescenceMap,Vt=rt&&!!w.iridescenceThicknessMap,Xt=tt&&!!w.sheenColorMap,At=tt&&!!w.sheenRoughnessMap,ne=!!w.specularMap,qt=!!w.specularColorMap,Kt=!!w.specularIntensityMap,k=It&&!!w.transmissionMap,vt=It&&!!w.thicknessMap,$=!!w.gradientMap,it=!!w.alphaMap,Rt=w.alphaTest>0,Ct=!!w.alphaHash,Y=!!w.extensions;let ct=ai;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ct=i.toneMapping);const pt={shaderID:P,shaderType:w.type,shaderName:w.name,vertexShader:ft,fragmentShader:X,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:et,batchingColor:et&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:li,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:Dt,envMap:Jt,envMapMode:Jt&&Q.mapping,envMapCubeUVHeight:v,aoMap:z,lightMap:oe,bumpMap:kt,normalMap:zt,displacementMap:d&&Mt,emissiveMap:Yt,normalMapObjectSpace:zt&&w.normalMapType===Qh,normalMapTangentSpace:zt&&w.normalMapType===Po,metalnessMap:xt,roughnessMap:A,anisotropy:M,anisotropyMap:mt,clearcoat:W,clearcoatMap:_t,clearcoatNormalMap:Ht,clearcoatRoughnessMap:at,dispersion:nt,iridescence:rt,iridescenceMap:Et,iridescenceThicknessMap:Vt,sheen:tt,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:ne,specularColorMap:qt,specularIntensityMap:Kt,transmission:It,transmissionMap:k,thicknessMap:vt,gradientMap:$,opaque:w.transparent===!1&&w.blending===Qi&&w.alphaToCoverage===!1,alphaMap:it,alphaTest:Rt,alphaHash:Ct,combine:w.combine,mapUv:ee&&_(w.map.channel),aoMapUv:z&&_(w.aoMap.channel),lightMapUv:oe&&_(w.lightMap.channel),bumpMapUv:kt&&_(w.bumpMap.channel),normalMapUv:zt&&_(w.normalMap.channel),displacementMapUv:Mt&&_(w.displacementMap.channel),emissiveMapUv:Yt&&_(w.emissiveMap.channel),metalnessMapUv:xt&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:mt&&_(w.anisotropyMap.channel),clearcoatMapUv:_t&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(w.sheenRoughnessMap.channel),specularMapUv:ne&&_(w.specularMap.channel),specularColorMapUv:qt&&_(w.specularColorMap.channel),specularIntensityMapUv:Kt&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:vt&&_(w.thicknessMap.channel),alphaMapUv:it&&_(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(zt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(ee||it),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:K,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&he.getTransfer(w.map.colorSpace)===ye,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&he.getTransfer(w.emissiveMap.colorSpace)===ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ke,flipSided:w.side===qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Y&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y&&w.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const T in w.defines)x.push(T),x.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(E(x,w),b(x,w),x.push(i.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function E(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function b(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const x=m[w.type];let T;if(x){const L=An[x];T=ws.clone(L.uniforms)}else T=w.uniforms;return T}function B(w,x){let T;for(let L=0,N=h.length;L<N;L++){const G=h[L];if(G.cacheKey===x){T=G,++T.usedTimes;break}}return T===void 0&&(T=new im(i,x,w,r),h.push(T)),T}function R(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:B,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:U}}function lm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||cm),n.length>1&&n.sort(d||Ol),s.length>1&&s.sort(d||Ol)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function hm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new zl,i.set(n,[a])):s>=r.length?(a=new zl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function um(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new jt};break;case"SpotLight":e={position:new V,direction:new V,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dm=0;function pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mm(i){const t=new um,e=fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new Ee,a=new Ee;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,b=0,y=0,B=0,R=0,C=0;c.sort(pm);for(let w=0,x=c.length;w<x;w++){const T=c[w],L=T.color,N=T.intensity,G=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*N,u+=L.g*N,d+=L.b*N;else if(T.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(T.sh.coefficients[Z],N);C++}else if(T.isDirectionalLight){const Z=t.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,v=e.get(T);v.shadowIntensity=Q.intensity,v.shadowBias=Q.bias,v.shadowNormalBias=Q.normalBias,v.shadowRadius=Q.radius,v.shadowMapSize=Q.mapSize,n.directionalShadow[f]=v,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=T.shadow.matrix,E++}n.directional[f]=Z,f++}else if(T.isSpotLight){const Z=t.get(T);Z.position.setFromMatrixPosition(T.matrixWorld),Z.color.copy(L).multiplyScalar(N),Z.distance=G,Z.coneCos=Math.cos(T.angle),Z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Z.decay=T.decay,n.spot[_]=Z;const Q=T.shadow;if(T.map&&(n.spotLightMap[B]=T.map,B++,Q.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[_]=Q.matrix,T.castShadow){const v=e.get(T);v.shadowIntensity=Q.intensity,v.shadowBias=Q.bias,v.shadowNormalBias=Q.normalBias,v.shadowRadius=Q.radius,v.shadowMapSize=Q.mapSize,n.spotShadow[_]=v,n.spotShadowMap[_]=J,y++}_++}else if(T.isRectAreaLight){const Z=t.get(T);Z.color.copy(L).multiplyScalar(N),Z.halfWidth.set(T.width*.5,0,0),Z.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=Z,g++}else if(T.isPointLight){const Z=t.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity),Z.distance=T.distance,Z.decay=T.decay,T.castShadow){const Q=T.shadow,v=e.get(T);v.shadowIntensity=Q.intensity,v.shadowBias=Q.bias,v.shadowNormalBias=Q.normalBias,v.shadowRadius=Q.radius,v.shadowMapSize=Q.mapSize,v.shadowCameraNear=Q.camera.near,v.shadowCameraFar=Q.camera.far,n.pointShadow[m]=v,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=T.shadow.matrix,b++}n.point[m]=Z,m++}else if(T.isHemisphereLight){const Z=t.get(T);Z.skyColor.copy(T.color).multiplyScalar(N),Z.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[p]=Z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==B||U.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+B-R,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,U.directionalLength=f,U.pointLength=m,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=B,U.numLightProbes=C,n.version=dm++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Bl(i){const t=new mm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Bl(i),t.set(s,[o])):r>=a.length?(o=new Bl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class _m extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vm extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mm=`uniform sampler2D shadow_pass;
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
}`;function ym(i,t,e){let n=new Lo;const s=new St,r=new St,a=new Se,o=new _m({depthPacking:Jh}),l=new vm,c={},h=e.maxTextureSize,u={[oi]:qe,[qe]:oi,[Ke]:Ke},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:xm,fragmentShader:Mm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new De;m.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let p=this.type;this.render=function(R,C,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(rn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==On&&this.type===On,G=p===On&&this.type!==On;for(let J=0,Z=R.length;J<Z;J++){const Q=R[J],v=Q.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;s.copy(v.mapSize);const P=v.getFrameExtents();if(s.multiply(P),r.copy(v.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/P.x),s.x=r.x*P.x,v.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/P.y),s.y=r.y*P.y,v.mapSize.y=r.y)),v.map===null||N===!0||G===!0){const I=this.type!==On?{minFilter:nn,magFilter:nn}:{};v.map!==null&&v.map.dispose(),v.map=new Xn(s.x,s.y,I),v.map.texture.name=Q.name+".shadowMap",v.camera.updateProjectionMatrix()}i.setRenderTarget(v.map),i.clear();const F=v.getViewportCount();for(let I=0;I<F;I++){const K=v.getViewport(I);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),L.viewport(a),v.updateMatrices(Q,I),n=v.getFrustum(),y(C,U,v.camera,Q,this.type)}v.isPointLightShadow!==!0&&this.type===On&&E(v,U),v.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,x,T)};function E(R,C){const U=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,U,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,U,f,_,null)}function b(R,C,U,w){let x=null;const T=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=U.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const L=x.uuid,N=C.uuid;let G=c[L];G===void 0&&(G={},c[L]=G);let J=G[N];J===void 0&&(J=x.clone(),G[N]=J,C.addEventListener("dispose",B)),x=J}if(x.visible=C.visible,x.wireframe=C.wireframe,w===On?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=i.properties.get(x);L.light=U}return x}function y(R,C,U,w,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const N=t.update(R),G=R.material;if(Array.isArray(G)){const J=N.groups;for(let Z=0,Q=J.length;Z<Q;Z++){const v=J[Z],P=G[v.materialIndex];if(P&&P.visible){const F=b(R,P,w,x);R.onBeforeShadow(i,R,C,U,N,F,v),i.renderBufferDirect(U,null,N,F,R,v),R.onAfterShadow(i,R,C,U,N,F,v)}}}else if(G.visible){const J=b(R,G,w,x);R.onBeforeShadow(i,R,C,U,N,J,null),i.renderBufferDirect(U,null,N,J,R,null),R.onAfterShadow(i,R,C,U,N,J,null)}}const L=R.children;for(let N=0,G=L.length;N<G;N++)y(L[N],C,U,w,x)}function B(R){R.target.removeEventListener("dispose",B);for(const U in c){const w=c[U],x=R.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const Sm={[Da]:Ia,[La]:Fa,[Ua]:Oa,[is]:Na,[Ia]:Da,[Fa]:La,[Oa]:Ua,[Na]:is};function Em(i,t){function e(){let k=!1;const vt=new Se;let $=null;const it=new Se(0,0,0,0);return{setMask:function(Rt){$!==Rt&&!k&&(i.colorMask(Rt,Rt,Rt,Rt),$=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,Ct,Y,ct,pt){pt===!0&&(Rt*=ct,Ct*=ct,Y*=ct),vt.set(Rt,Ct,Y,ct),it.equals(vt)===!1&&(i.clearColor(Rt,Ct,Y,ct),it.copy(vt))},reset:function(){k=!1,$=null,it.set(-1,0,0,0)}}}function n(){let k=!1,vt=!1,$=null,it=null,Rt=null;return{setReversed:function(Ct){if(vt!==Ct){const Y=t.get("EXT_clip_control");vt?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT);const ct=Rt;Rt=null,this.setClear(ct)}vt=Ct},getReversed:function(){return vt},setTest:function(Ct){Ct?ot(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Ct){$!==Ct&&!k&&(i.depthMask(Ct),$=Ct)},setFunc:function(Ct){if(vt&&(Ct=Sm[Ct]),it!==Ct){switch(Ct){case Da:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Ct}},setLocked:function(Ct){k=Ct},setClear:function(Ct){Rt!==Ct&&(vt&&(Ct=1-Ct),i.clearDepth(Ct),Rt=Ct)},reset:function(){k=!1,$=null,it=null,Rt=null,vt=!1}}}function s(){let k=!1,vt=null,$=null,it=null,Rt=null,Ct=null,Y=null,ct=null,pt=null;return{setTest:function(dt){k||(dt?ot(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(dt){vt!==dt&&!k&&(i.stencilMask(dt),vt=dt)},setFunc:function(dt,Ft,Me){($!==dt||it!==Ft||Rt!==Me)&&(i.stencilFunc(dt,Ft,Me),$=dt,it=Ft,Rt=Me)},setOp:function(dt,Ft,Me){(Ct!==dt||Y!==Ft||ct!==Me)&&(i.stencilOp(dt,Ft,Me),Ct=dt,Y=Ft,ct=Me)},setLocked:function(dt){k=dt},setClear:function(dt){pt!==dt&&(i.clearStencil(dt),pt=dt)},reset:function(){k=!1,vt=null,$=null,it=null,Rt=null,Ct=null,Y=null,ct=null,pt=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,b=null,y=null,B=null,R=null,C=new jt(0,0,0),U=0,w=!1,x=null,T=null,L=null,N=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Q=0;const v=i.getParameter(i.VERSION);v.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(v)[1]),Z=Q>=1):v.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),Z=Q>=2);let P=null,F={};const I=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ft=new Se().fromArray(I),X=new Se().fromArray(K);function st(k,vt,$,it){const Rt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(k,Ct),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Y=0;Y<$;Y++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(vt+Y,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Ct}const yt={};yt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(is),kt(!1),zt(Xo),ot(i.CULL_FACE),z(rn);function ot(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function gt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Pt(k,vt){return u[k]!==vt?(i.bindFramebuffer(k,vt),u[k]=vt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function et(k,vt){let $=f,it=!1;if(k){$=d.get(vt),$===void 0&&($=[],d.set(vt,$));const Rt=k.textures;if($.length!==Rt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Y=Rt.length;Ct<Y;Ct++)$[Ct]=i.COLOR_ATTACHMENT0+Ct;$.length=Rt.length,it=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,it=!0);it&&i.drawBuffers($)}function ee(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const Dt={[zn]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ch]:i.FUNC_REVERSE_SUBTRACT};Dt[Ph]=i.MIN,Dt[Dh]=i.MAX;const Jt={[Ra]:i.ZERO,[Ih]:i.ONE,[Lh]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Tc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Nh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Hh]:i.ONE_MINUS_CONSTANT_ALPHA};function z(k,vt,$,it,Rt,Ct,Y,ct,pt,dt){if(k===rn){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),k!==wc){if(k!==g||dt!==w){if((p!==zn||y!==zn)&&(i.blendEquation(i.FUNC_ADD),p=zn,y=zn),dt)switch(k){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,b=null,B=null,R=null,C.set(0,0,0),U=0,g=k,w=dt}return}Rt=Rt||vt,Ct=Ct||$,Y=Y||it,(vt!==p||Rt!==y)&&(i.blendEquationSeparate(Dt[vt],Dt[Rt]),p=vt,y=Rt),($!==E||it!==b||Ct!==B||Y!==R)&&(i.blendFuncSeparate(Jt[$],Jt[it],Jt[Ct],Jt[Y]),E=$,b=it,B=Ct,R=Y),(ct.equals(C)===!1||pt!==U)&&(i.blendColor(ct.r,ct.g,ct.b,pt),C.copy(ct),U=pt),g=k,w=!1}function oe(k,vt){k.side===Ke?gt(i.CULL_FACE):ot(i.CULL_FACE);let $=k.side===qe;vt&&($=!$),kt($),k.blending===Qi&&k.transparent===!1?z(rn):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const it=k.stencilWrite;o.setTest(it),it&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(k){x!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),x=k)}function zt(k){k!==Th?(ot(i.CULL_FACE),k!==T&&(k===Xo?i.cullFace(i.BACK):k===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),T=k}function Mt(k){k!==L&&(Z&&i.lineWidth(k),L=k)}function Yt(k,vt,$){k?(ot(i.POLYGON_OFFSET_FILL),(N!==vt||G!==$)&&(i.polygonOffset(vt,$),N=vt,G=$)):gt(i.POLYGON_OFFSET_FILL)}function xt(k){k?ot(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function A(k){k===void 0&&(k=i.TEXTURE0+J-1),P!==k&&(i.activeTexture(k),P=k)}function M(k,vt,$){$===void 0&&(P===null?$=i.TEXTURE0+J-1:$=P);let it=F[$];it===void 0&&(it={type:void 0,texture:void 0},F[$]=it),(it.type!==k||it.texture!==vt)&&(P!==$&&(i.activeTexture($),P=$),i.bindTexture(k,vt||yt[k]),it.type=k,it.texture=vt)}function W(){const k=F[P];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(k){ft.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ft.copy(k))}function At(k){X.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),X.copy(k))}function ne(k,vt){let $=c.get(vt);$===void 0&&($=new WeakMap,c.set(vt,$));let it=$.get(k);it===void 0&&(it=i.getUniformBlockIndex(vt,k.name),$.set(k,it))}function qt(k,vt){const it=c.get(vt).get(k);l.get(vt)!==it&&(i.uniformBlockBinding(vt,it,k.__bindingPointIndex),l.set(vt,it))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},P=null,F={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,b=null,y=null,B=null,R=null,C=new jt(0,0,0),U=0,w=!1,x=null,T=null,L=null,N=null,G=null,ft.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:gt,bindFramebuffer:Pt,drawBuffers:et,useProgram:ee,setBlending:z,setMaterial:oe,setFlipSided:kt,setCullFace:zt,setLineWidth:Mt,setPolygonOffset:Yt,setScissorTest:xt,activeTexture:A,bindTexture:M,unbindTexture:W,compressedTexImage2D:nt,compressedTexImage3D:rt,texImage2D:Et,texImage3D:Vt,updateUBOMapping:ne,uniformBlockBinding:qt,texStorage2D:Ht,texStorage3D:at,texSubImage2D:tt,texSubImage3D:It,compressedTexSubImage2D:mt,compressedTexSubImage3D:_t,scissor:Xt,viewport:At,reset:Kt}}function kl(i,t,e,n){const s=wm(n);switch(e){case Lc:return i*t;case Nc:return i*t;case Fc:return i*t*2;case To:return i*t/s.components*s.byteLength;case Ao:return i*t/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case Ro:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Co:return i*t*4/s.components*s.byteLength;case wr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rr:case lo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zc:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(i){switch(i){case Wn:case Pc:return{byteLength:1,components:1};case Ls:case Dc:case wi:return{byteLength:2,components:1};case wo:case bo:return{byteLength:2,components:4};case Ei:case Eo:case Rn:return{byteLength:4,components:1};case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function bm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function m(A,M){return f?new OffscreenCanvas(A,M):Ir("canvas")}function _(A,M,W){let nt=1;const rt=xt(A);if((rt.width>W||rt.height>W)&&(nt=W/Math.max(rt.width,rt.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const tt=Math.floor(nt*rt.width),It=Math.floor(nt*rt.height);u===void 0&&(u=m(tt,It));const mt=M?m(tt,It):u;return mt.width=tt,mt.height=It,mt.getContext("2d").drawImage(A,0,0,tt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+It+")."),mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,M,W,nt,rt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=M;if(M===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),M===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),M===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),M===i.RGBA){const It=rt?Br:he.getTransfer(nt);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=It===ye?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(A,M){let W;return A?M===null||M===Ei||M===bi?W=i.DEPTH24_STENCIL8:M===Rn?W=i.DEPTH32F_STENCIL8:M===Ls&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===bi?W=i.DEPTH_COMPONENT24:M===Rn?W=i.DEPTH_COMPONENT32F:M===Ls&&(W=i.DEPTH_COMPONENT16),W}function B(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),U(M),M.isVideoTexture&&h.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),x(M)}function U(A){const M=n.get(A);if(M.__webglInit===void 0)return;const W=A.source,nt=d.get(W);if(nt){const rt=nt[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(A),Object.keys(nt).length===0&&d.delete(W)}n.remove(A)}function w(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const W=A.source,nt=d.get(W);delete nt[M.__cacheKey],a.memory.textures--}function x(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let rt=0;rt<M.__webglFramebuffer[nt].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[nt][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[nt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=A.textures;for(let nt=0,rt=W.length;nt<rt;nt++){const tt=n.get(W[nt]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(W[nt])}n.remove(A)}let T=0;function L(){T=0}function N(){const A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function G(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function J(A,M){const W=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(W,A,M);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function Z(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){X(W,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function Q(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){X(W,A,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function v(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){st(W,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const P={[Cn]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},F={[nn]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},I={[tu]:i.NEVER,[au]:i.ALWAYS,[eu]:i.LESS,[Bc]:i.LEQUAL,[nu]:i.EQUAL,[ru]:i.GEQUAL,[iu]:i.GREATER,[su]:i.NOTEQUAL};function K(A,M){if(M.type===Rn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Gr||M.magFilter===ks||M.magFilter===Sn||M.minFilter===an||M.minFilter===Gr||M.minFilter===ks||M.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,P[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,P[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,P[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,F[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,I[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==ks&&M.minFilter!==Sn||M.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ft(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const nt=M.source;let rt=d.get(nt);rt===void 0&&(rt={},d.set(nt,rt));const tt=G(M);if(tt!==A.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),rt[tt].usedTimes++;const It=rt[A.__cacheKey];It!==void 0&&(rt[A.__cacheKey].usedTimes--,It.usedTimes===0&&w(M)),A.__cacheKey=tt,A.__webglTexture=rt[tt].texture}return W}function X(A,M,W){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);const rt=ft(A,M),tt=M.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+W);const It=n.get(tt);if(tt.version!==It.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);const mt=he.getPrimaries(he.workingColorSpace),_t=M.colorSpace===Bn?null:he.getPrimaries(M.colorSpace),Ht=M.colorSpace===Bn||mt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let at=_(M.image,!1,s.maxTextureSize);at=Yt(M,at);const Et=r.convert(M.format,M.colorSpace),Vt=r.convert(M.type);let Xt=b(M.internalFormat,Et,Vt,M.colorSpace,M.isVideoTexture);K(nt,M);let At;const ne=M.mipmaps,qt=M.isVideoTexture!==!0,Kt=It.__version===void 0||rt===!0,k=tt.dataReady,vt=B(M,at);if(M.isDepthTexture)Xt=y(M.format===Ti,M.type),Kt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Xt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Xt,at.width,at.height,0,Et,Vt,null));else if(M.isDataTexture)if(ne.length>0){qt&&Kt&&e.texStorage2D(i.TEXTURE_2D,vt,Xt,ne[0].width,ne[0].height);for(let $=0,it=ne.length;$<it;$++)At=ne[$],qt?k&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,At.width,At.height,Et,Vt,At.data):e.texImage2D(i.TEXTURE_2D,$,Xt,At.width,At.height,0,Et,Vt,At.data);M.generateMipmaps=!1}else qt?(Kt&&e.texStorage2D(i.TEXTURE_2D,vt,Xt,at.width,at.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Et,Vt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,at.width,at.height,0,Et,Vt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Xt,ne[0].width,ne[0].height,at.depth);for(let $=0,it=ne.length;$<it;$++)if(At=ne[$],M.format!==En)if(Et!==null)if(qt){if(k)if(M.layerUpdates.size>0){const Rt=kl(At.width,At.height,M.format,M.type);for(const Ct of M.layerUpdates){const Y=At.data.subarray(Ct*Rt/At.data.BYTES_PER_ELEMENT,(Ct+1)*Rt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Ct,At.width,At.height,1,Et,Y)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,at.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Xt,At.width,At.height,at.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,at.depth,Et,Vt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Xt,At.width,At.height,at.depth,0,Et,Vt,At.data)}else{qt&&Kt&&e.texStorage2D(i.TEXTURE_2D,vt,Xt,ne[0].width,ne[0].height);for(let $=0,it=ne.length;$<it;$++)At=ne[$],M.format!==En?Et!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Xt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,At.width,At.height,Et,Vt,At.data):e.texImage2D(i.TEXTURE_2D,$,Xt,At.width,At.height,0,Et,Vt,At.data)}else if(M.isDataArrayTexture)if(qt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Xt,at.width,at.height,at.depth),k)if(M.layerUpdates.size>0){const $=kl(at.width,at.height,M.format,M.type);for(const it of M.layerUpdates){const Rt=at.data.subarray(it*$/at.data.BYTES_PER_ELEMENT,(it+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,at.width,at.height,1,Et,Vt,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Vt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,at.width,at.height,at.depth,0,Et,Vt,at.data);else if(M.isData3DTexture)qt?(Kt&&e.texStorage3D(i.TEXTURE_3D,vt,Xt,at.width,at.height,at.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Vt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,at.width,at.height,at.depth,0,Et,Vt,at.data);else if(M.isFramebufferTexture){if(Kt)if(qt)e.texStorage2D(i.TEXTURE_2D,vt,Xt,at.width,at.height);else{let $=at.width,it=at.height;for(let Rt=0;Rt<vt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Xt,$,it,0,Et,Vt,null),$>>=1,it>>=1}}else if(ne.length>0){if(qt&&Kt){const $=xt(ne[0]);e.texStorage2D(i.TEXTURE_2D,vt,Xt,$.width,$.height)}for(let $=0,it=ne.length;$<it;$++)At=ne[$],qt?k&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et,Vt,At):e.texImage2D(i.TEXTURE_2D,$,Xt,Et,Vt,At);M.generateMipmaps=!1}else if(qt){if(Kt){const $=xt(at);e.texStorage2D(i.TEXTURE_2D,vt,Xt,$.width,$.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Vt,at)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Et,Vt,at);g(M)&&p(nt),It.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function st(A,M,W){if(M.image.length!==6)return;const nt=ft(A,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);const tt=n.get(rt);if(rt.version!==tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const It=he.getPrimaries(he.workingColorSpace),mt=M.colorSpace===Bn?null:he.getPrimaries(M.colorSpace),_t=M.colorSpace===Bn||It===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ht=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let it=0;it<6;it++)!Ht&&!at?Et[it]=_(M.image[it],!0,s.maxCubemapSize):Et[it]=at?M.image[it].image:M.image[it],Et[it]=Yt(M,Et[it]);const Vt=Et[0],Xt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),ne=b(M.internalFormat,Xt,At,M.colorSpace),qt=M.isVideoTexture!==!0,Kt=tt.__version===void 0||nt===!0,k=rt.dataReady;let vt=B(M,Vt);K(i.TEXTURE_CUBE_MAP,M);let $;if(Ht){qt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ne,Vt.width,Vt.height);for(let it=0;it<6;it++){$=Et[it].mipmaps;for(let Rt=0;Rt<$.length;Rt++){const Ct=$[Rt];M.format!==En?Xt!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Ct.width,Ct.height,Xt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,ne,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Ct.width,Ct.height,Xt,At,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,ne,Ct.width,Ct.height,0,Xt,At,Ct.data)}}}else{if($=M.mipmaps,qt&&Kt){$.length>0&&vt++;const it=xt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ne,it.width,it.height)}for(let it=0;it<6;it++)if(at){qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Et[it].width,Et[it].height,Xt,At,Et[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ne,Et[it].width,Et[it].height,0,Xt,At,Et[it].data);for(let Rt=0;Rt<$.length;Rt++){const Y=$[Rt].image[it].image;qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,Y.width,Y.height,Xt,At,Y.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,ne,Y.width,Y.height,0,Xt,At,Y.data)}}else{qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Xt,At,Et[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ne,Xt,At,Et[it]);for(let Rt=0;Rt<$.length;Rt++){const Ct=$[Rt];qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,Xt,At,Ct.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,ne,Xt,At,Ct.image[it])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function yt(A,M,W,nt,rt,tt){const It=r.convert(W.format,W.colorSpace),mt=r.convert(W.type),_t=b(W.internalFormat,It,mt,W.colorSpace),Ht=n.get(M),at=n.get(W);if(at.__renderTarget=M,!Ht.__hasExternalTextures){const Et=Math.max(1,M.width>>tt),Vt=Math.max(1,M.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,_t,Et,Vt,M.depth,0,It,mt,null):e.texImage2D(rt,tt,_t,Et,Vt,0,It,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,rt,at.__webglTexture,0,kt(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,rt,at.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const nt=M.depthTexture,rt=nt&&nt.isDepthTexture?nt.type:null,tt=y(M.stencilBuffer,rt),It=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=kt(M);zt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,tt,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,tt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,tt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{const nt=M.textures;for(let rt=0;rt<nt.length;rt++){const tt=nt[rt],It=r.convert(tt.format,tt.colorSpace),mt=r.convert(tt.type),_t=b(tt.internalFormat,It,mt,tt.colorSpace),Ht=kt(M);W&&zt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,_t,M.width,M.height):zt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(M.depthTexture);nt.__renderTarget=M,(!nt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const rt=nt.__webglTexture,tt=kt(M);if(M.depthTexture.format===ts)zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(M.depthTexture.format===Ti)zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Pt(A){const M=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){const rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",rt)};nt.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=nt}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");gt(M.__webglFramebuffer,A)}else if(W){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=i.createRenderbuffer(),ot(M.__webglDepthbuffer[nt],A,!1);else{const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ot(M.__webglDepthbuffer,A,!1);else{const nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(A,M,W){const nt=n.get(A);M!==void 0&&yt(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Pt(A)}function ee(A){const M=A.texture,W=n.get(A),nt=n.get(M);A.addEventListener("dispose",C);const rt=A.textures,tt=A.isWebGLCubeRenderTarget===!0,It=rt.length>1;if(It||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,a.memory.textures++),tt){W.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[mt]=[];for(let _t=0;_t<M.mipmaps.length;_t++)W.__webglFramebuffer[mt][_t]=i.createFramebuffer()}else W.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)W.__webglFramebuffer[mt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(It)for(let mt=0,_t=rt.length;mt<_t;mt++){const Ht=n.get(rt[mt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&zt(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<rt.length;mt++){const _t=rt[mt];W.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const Ht=r.convert(_t.format,_t.colorSpace),at=r.convert(_t.type),Et=b(_t.internalFormat,Ht,at,_t.colorSpace,A.isXRRenderTarget===!0),Vt=kt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),K(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)yt(W.__webglFramebuffer[mt][_t],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,_t);else yt(W.__webglFramebuffer[mt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let mt=0,_t=rt.length;mt<_t;mt++){const Ht=rt[mt],at=n.get(Ht);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),K(i.TEXTURE_2D,Ht),yt(W.__webglFramebuffer,A,Ht,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),g(Ht)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,nt.__webglTexture),K(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)yt(W.__webglFramebuffer[_t],A,M,i.COLOR_ATTACHMENT0,mt,_t);else yt(W.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,mt,0);g(M)&&p(mt),e.unbindTexture()}A.depthBuffer&&Pt(A)}function Dt(A){const M=A.textures;for(let W=0,nt=M.length;W<nt;W++){const rt=M[W];if(g(rt)){const tt=E(A),It=n.get(rt).__webglTexture;e.bindTexture(tt,It),p(tt),e.unbindTexture()}}}const Jt=[],z=[];function oe(A){if(A.samples>0){if(zt(A)===!1){const M=A.textures,W=A.width,nt=A.height;let rt=i.COLOR_BUFFER_BIT;const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),mt=M.length>1;if(mt)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);const Ht=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,W,nt,0,0,W,nt,rt,i.NEAREST),l===!0&&(Jt.length=0,z.length=0,Jt.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Jt.push(tt),z.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);const Ht=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function kt(A){return Math.min(s.maxSamples,A.samples)}function zt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Mt(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Yt(A,M){const W=A.colorSpace,nt=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==li&&W!==Bn&&(he.getTransfer(W)===ye?(nt!==En||rt!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function xt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=Q,this.setTextureCube=v,this.rebindTextures=et,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=zt}function Tm(i,t){function e(n,s=Bn){let r;const a=he.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Dc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===Eo)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Uc)return i.RGB;if(n===En)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Fc)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===To)return i.RED;if(n===Ao)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===Ro)return i.RG_INTEGER;if(n===Co)return i.RGBA_INTEGER;if(n===wr||n===br||n===Tr||n===Ar)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xa||n===qa)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===ja||n===Ka||n===$a||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ro)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===lo||n===co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===ho||n===uo||n===fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Am extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pm=`
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

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:Cm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends os{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=new Dm,g=e.getContextAttributes();let p=null,E=null;const b=[],y=[],B=new St;let R=null;const C=new hn;C.viewport=new Se;const U=new hn;U.viewport=new Se;const w=[C,U],x=new Am;let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let st=b[X];return st===void 0&&(st=new ga,b[X]=st),st.getTargetRaySpace()},this.getControllerGrip=function(X){let st=b[X];return st===void 0&&(st=new ga,b[X]=st),st.getGripSpace()},this.getHand=function(X){let st=b[X];return st===void 0&&(st=new ga,b[X]=st),st.getHandSpace()};function N(X){const st=y.indexOf(X.inputSource);if(st===-1)return;const yt=b[st];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||a),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let X=0;X<b.length;X++){const st=y[X];st!==null&&(y[X]=null,b[X].disconnect(st))}T=null,L=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Xn(f.framebufferWidth,f.framebufferHeight,{format:En,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,yt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Ti:ts,yt=g.stencil?bi:Ei);const gt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Xn(d.textureWidth,d.textureHeight,{format:En,type:Wn,depthTexture:new Fo(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(X){for(let st=0;st<X.removed.length;st++){const yt=X.removed[st],ot=y.indexOf(yt);ot>=0&&(y[ot]=null,b[ot].disconnect(yt))}for(let st=0;st<X.added.length;st++){const yt=X.added[st];let ot=y.indexOf(yt);if(ot===-1){for(let Pt=0;Pt<b.length;Pt++)if(Pt>=y.length){y.push(yt),ot=Pt;break}else if(y[Pt]===null){y[Pt]=yt,ot=Pt;break}if(ot===-1)break}const gt=b[ot];gt&&gt.connect(yt)}}const Z=new V,Q=new V;function v(X,st,yt){Z.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(yt.matrixWorld);const ot=Z.distanceTo(Q),gt=st.projectionMatrix.elements,Pt=yt.projectionMatrix.elements,et=gt[14]/(gt[10]-1),ee=gt[14]/(gt[10]+1),Dt=(gt[9]+1)/gt[5],Jt=(gt[9]-1)/gt[5],z=(gt[8]-1)/gt[0],oe=(Pt[8]+1)/Pt[0],kt=et*z,zt=et*oe,Mt=ot/(-z+oe),Yt=Mt*-z;if(st.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Yt),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),gt[10]===-1)X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const xt=et+Mt,A=ee+Mt,M=kt-Yt,W=zt+(ot-Yt),nt=Dt*ee/A*xt,rt=Jt*ee/A*xt;X.projectionMatrix.makePerspective(M,W,nt,rt,xt,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function P(X,st){st===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(st.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let st=X.near,yt=X.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),x.near=U.near=C.near=st,x.far=U.far=C.far=yt,(T!==x.near||L!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,L=x.far),C.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,x.layers.mask=C.layers.mask|U.layers.mask;const ot=X.parent,gt=x.cameras;P(x,ot);for(let Pt=0;Pt<gt.length;Pt++)P(gt[Pt],ot);gt.length===2?v(x,C,U):x.projectionMatrix.copy(C.projectionMatrix),F(X,x,ot)};function F(X,st,yt){yt===null?X.matrix.copy(st.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(st.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Us*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let I=null;function K(X,st){if(h=st.getViewerPose(c||a),m=st,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ot=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let Pt=0;Pt<yt.length;Pt++){const et=yt[Pt];let ee=null;if(f!==null)ee=f.getViewport(et);else{const Jt=u.getViewSubImage(d,et);ee=Jt.viewport,Pt===0&&(t.setRenderTargetTextures(E,Jt.colorTexture,d.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(E))}let Dt=w[Pt];Dt===void 0&&(Dt=new hn,Dt.layers.enable(Pt),Dt.viewport=new Se,w[Pt]=Dt),Dt.matrix.fromArray(et.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(et.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(ee.x,ee.y,ee.width,ee.height),Pt===0&&(x.matrix.copy(Dt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(Dt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const Pt=u.getDepthInformation(yt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let yt=0;yt<b.length;yt++){const ot=y[yt],gt=b[yt];ot!==null&&gt!==void 0&&gt.update(ot,st,c||a)}I&&I(X,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const ft=new Kc;ft.setAnimationLoop(K),this.setAnimationLoop=function(X){I=X},this.dispose=function(){}}}const mi=new Pn,Lm=new Ee;function Um(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Yc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,E,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,y=E.envMapRotation;b&&(g.envMap.value=b,mi.copy(y),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(mi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const y=b.program;n.uniformBlockBinding(E,y)}function c(E,b){let y=s[E.id];y===void 0&&(m(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",g));const B=b.program;n.updateUBOMapping(E,B);const R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){const b=u();E.__bindingPointIndex=b;const y=i.createBuffer(),B=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],y=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,C=y.length;R<C;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,x=U.length;w<x;w++){const T=U[w];if(f(T,R,w,B)===!0){const L=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let G=0;for(let J=0;J<N.length;J++){const Z=N[J],Q=_(Z);typeof Z=="number"||typeof Z=="boolean"?(T.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,L+G,T.__data)):Z.isMatrix3?(T.__data[0]=Z.elements[0],T.__data[1]=Z.elements[1],T.__data[2]=Z.elements[2],T.__data[3]=0,T.__data[4]=Z.elements[3],T.__data[5]=Z.elements[4],T.__data[6]=Z.elements[5],T.__data[7]=0,T.__data[8]=Z.elements[6],T.__data[9]=Z.elements[7],T.__data[10]=Z.elements[8],T.__data[11]=0):(Z.toArray(T.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,b,y,B){const R=E.value,C=b+"_"+y;if(B[C]===void 0)return typeof R=="number"||typeof R=="boolean"?B[C]=R:B[C]=R.clone(),!0;{const U=B[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return B[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function m(E){const b=E.uniforms;let y=0;const B=16;for(let C=0,U=b.length;C<U;C++){const w=Array.isArray(b[C])?b[C]:[b[C]];for(let x=0,T=w.length;x<T;x++){const L=w[x],N=Array.isArray(L.value)?L.value:[L.value];for(let G=0,J=N.length;G<J;G++){const Z=N[G],Q=_(Z),v=y%B,P=v%Q.boundary,F=v+P;y+=P,F!==0&&B-F<Q.storage&&(y+=B-F),L.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Q.storage}}}const R=y%B;return R>0&&(y+=B-R),E.__size=y,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function g(E){const b=E.target;b.removeEventListener("dispose",g);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Fm{constructor(t={}){const{canvas:e=wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=ai,this.toneMappingExposure=1;const y=this;let B=!1,R=0,C=0,U=null,w=-1,x=null;const T=new Se,L=new Se;let N=null;const G=new jt(0);let J=0,Z=e.width,Q=e.height,v=1,P=null,F=null;const I=new Se(0,0,Z,Q),K=new Se(0,0,Z,Q);let ft=!1;const X=new Lo;let st=!1,yt=!1;const ot=new Ee,gt=new Ee,Pt=new V,et=new Se,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Jt(){return U===null?v:1}let z=n;function oe(S,H){return e.getContext(S,H)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${So}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),z===null){const H="webgl2";if(z=oe(H,S),z===null)throw oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let kt,zt,Mt,Yt,xt,A,M,W,nt,rt,tt,It,mt,_t,Ht,at,Et,Vt,Xt,At,ne,qt,Kt,k;function vt(){kt=new Hp(z),kt.init(),qt=new Tm(z,kt),zt=new Np(z,kt,t,qt),Mt=new Em(z,kt),zt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Yt=new Wp(z),xt=new lm,A=new bm(z,kt,Mt,xt,zt,qt,Yt),M=new Op(y),W=new kp(y),nt=new Ku(z),Kt=new Lp(z,nt),rt=new Vp(z,nt,Yt,Kt),tt=new qp(z,rt,nt,Yt),Xt=new Xp(z,zt,A),at=new Fp(xt),It=new om(y,M,W,kt,zt,Kt,at),mt=new Um(y,xt),_t=new hm,Ht=new gm(kt),Vt=new Ip(y,M,W,Mt,tt,f,l),Et=new ym(y,tt,zt),k=new Nm(z,Yt,zt,Mt),At=new Up(z,kt,Yt),ne=new Gp(z,kt,Yt),Yt.programs=It.programs,y.capabilities=zt,y.extensions=kt,y.properties=xt,y.renderLists=_t,y.shadowMap=Et,y.state=Mt,y.info=Yt}vt();const $=new Im(y,z);this.xr=$,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(S){S!==void 0&&(v=S,this.setSize(Z,Q,!1))},this.getSize=function(S){return S.set(Z,Q)},this.setSize=function(S,H,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,Q=H,e.width=Math.floor(S*v),e.height=Math.floor(H*v),q===!0&&(e.style.width=S+"px",e.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(Z*v,Q*v).floor()},this.setDrawingBufferSize=function(S,H,q){Z=S,Q=H,v=q,e.width=Math.floor(S*q),e.height=Math.floor(H*q),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,H,q,D){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,H,q,D),Mt.viewport(T.copy(I).multiplyScalar(v).round())},this.getScissor=function(S){return S.copy(K)},this.setScissor=function(S,H,q,D){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,H,q,D),Mt.scissor(L.copy(K).multiplyScalar(v).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(S){Mt.setScissorTest(ft=S)},this.setOpaqueSort=function(S){P=S},this.setTransparentSort=function(S){F=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(S=!0,H=!0,q=!0){let D=0;if(S){let O=!1;if(U!==null){const ut=U.texture.format;O=ut===Co||ut===Ro||ut===Ao}if(O){const ut=U.texture.type,bt=ut===Wn||ut===Ei||ut===Ls||ut===bi||ut===wo||ut===bo,Ut=Vt.getClearColor(),Nt=Vt.getClearAlpha(),Zt=Ut.r,ie=Ut.g,Bt=Ut.b;bt?(m[0]=Zt,m[1]=ie,m[2]=Bt,m[3]=Nt,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=Zt,_[1]=ie,_[2]=Bt,_[3]=Nt,z.clearBufferiv(z.COLOR,0,_))}else D|=z.COLOR_BUFFER_BIT}H&&(D|=z.DEPTH_BUFFER_BIT),q&&(D|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),_t.dispose(),Ht.dispose(),xt.dispose(),M.dispose(),W.dispose(),tt.dispose(),Kt.dispose(),k.dispose(),It.dispose(),$.dispose(),$.removeEventListener("sessionstart",ze),$.removeEventListener("sessionend",Ye),Ie.stop()};function it(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const S=Yt.autoReset,H=Et.enabled,q=Et.autoUpdate,D=Et.needsUpdate,O=Et.type;vt(),Yt.autoReset=S,Et.enabled=H,Et.autoUpdate=q,Et.needsUpdate=D,Et.type=O}function Ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Y(S){const H=S.target;H.removeEventListener("dispose",Y),ct(H)}function ct(S){pt(S),xt.remove(S)}function pt(S){const H=xt.get(S).programs;H!==void 0&&(H.forEach(function(q){It.releaseProgram(q)}),S.isShaderMaterial&&It.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,q,D,O,ut){H===null&&(H=ee);const bt=O.isMesh&&O.matrixWorld.determinant()<0,Ut=ve(S,H,q,D,O);Mt.setMaterial(D,bt);let Nt=q.index,Zt=1;if(D.wireframe===!0){if(Nt=rt.getWireframeAttribute(q),Nt===void 0)return;Zt=2}const ie=q.drawRange,Bt=q.attributes.position;let ue=ie.start*Zt,we=(ie.start+ie.count)*Zt;ut!==null&&(ue=Math.max(ue,ut.start*Zt),we=Math.min(we,(ut.start+ut.count)*Zt)),Nt!==null?(ue=Math.max(ue,0),we=Math.min(we,Nt.count)):Bt!=null&&(ue=Math.max(ue,0),we=Math.min(we,Bt.count));const Ae=we-ue;if(Ae<0||Ae===1/0)return;Kt.setup(O,D,Ut,q,Nt);let sn,ge=At;if(Nt!==null&&(sn=nt.get(Nt),ge=ne,ge.setIndex(sn)),O.isMesh)D.wireframe===!0?(Mt.setLineWidth(D.wireframeLinewidth*Jt()),ge.setMode(z.LINES)):ge.setMode(z.TRIANGLES);else if(O.isLine){let Gt=D.linewidth;Gt===void 0&&(Gt=1),Mt.setLineWidth(Gt*Jt()),O.isLineSegments?ge.setMode(z.LINES):O.isLineLoop?ge.setMode(z.LINE_LOOP):ge.setMode(z.LINE_STRIP)}else O.isPoints?ge.setMode(z.POINTS):O.isSprite&&ge.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ge.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))ge.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Gt=O._multiDrawStarts,Dn=O._multiDrawCounts,_e=O._multiDrawCount,_n=Nt?nt.get(Nt).bytesPerElement:1,Ai=xt.get(D).currentProgram.getUniforms();for(let on=0;on<_e;on++)Ai.setValue(z,"_gl_DrawID",on),ge.render(Gt[on]/_n,Dn[on])}else if(O.isInstancedMesh)ge.renderInstances(ue,Ae,O.count);else if(q.isInstancedBufferGeometry){const Gt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Dn=Math.min(q.instanceCount,Gt);ge.renderInstances(ue,Ae,Dn)}else ge.render(ue,Ae)};function dt(S,H,q){S.transparent===!0&&S.side===Ke&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,Lt(S,H,q),S.side=oi,S.needsUpdate=!0,Lt(S,H,q),S.side=Ke):Lt(S,H,q)}this.compile=function(S,H,q=null){q===null&&(q=S),p=Ht.get(q),p.init(H),b.push(p),q.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==q&&S.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const D=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ut=O.material;if(ut)if(Array.isArray(ut))for(let bt=0;bt<ut.length;bt++){const Ut=ut[bt];dt(Ut,q,O),D.add(Ut)}else dt(ut,q,O),D.add(ut)}),b.pop(),p=null,D},this.compileAsync=function(S,H,q=null){const D=this.compile(S,H,q);return new Promise(O=>{function ut(){if(D.forEach(function(bt){xt.get(bt).currentProgram.isReady()&&D.delete(bt)}),D.size===0){O(S);return}setTimeout(ut,10)}kt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Ft=null;function Me(S){Ft&&Ft(S)}function ze(){Ie.stop()}function Ye(){Ie.start()}const Ie=new Kc;Ie.setAnimationLoop(Me),typeof self!="undefined"&&Ie.setContext(self),this.setAnimationLoop=function(S){Ft=S,$.setAnimationLoop(S),S===null?Ie.stop():Ie.start()},$.addEventListener("sessionstart",ze),$.addEventListener("sessionend",Ye),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(H),H=$.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,H,U),p=Ht.get(S,b.length),p.init(H),b.push(p),gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(gt),yt=this.localClippingEnabled,st=at.init(this.clippingPlanes,yt),g=_t.get(S,E.length),g.init(),E.push(g),$.enabled===!0&&$.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&Ge(ut,H,-1/0,y.sortObjects)}Ge(S,H,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(P,F),Dt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Dt&&Vt.addToRenderList(g,S),this.info.render.frame++,st===!0&&at.beginShadows();const q=p.state.shadowsArray;Et.render(q,S,H),st===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=g.opaque,O=g.transmissive;if(p.setupLights(),H.isArrayCamera){const ut=H.cameras;if(O.length>0)for(let bt=0,Ut=ut.length;bt<Ut;bt++){const Nt=ut[bt];j(D,O,S,Nt)}Dt&&Vt.render(S);for(let bt=0,Ut=ut.length;bt<Ut;bt++){const Nt=ut[bt];fn(g,S,Nt,Nt.viewport)}}else O.length>0&&j(D,O,S,H),Dt&&Vt.render(S),fn(g,S,H);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(y,S,H),Kt.resetDefaultState(),w=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],st===!0&&at.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Ge(S,H,q,D){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){D&&et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);const bt=tt.update(S),Ut=S.material;Ut.visible&&g.push(S,bt,Ut,q,et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const bt=tt.update(S),Ut=S.material;if(D&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),et.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),et.copy(bt.boundingSphere.center)),et.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(Ut)){const Nt=bt.groups;for(let Zt=0,ie=Nt.length;Zt<ie;Zt++){const Bt=Nt[Zt],ue=Ut[Bt.materialIndex];ue&&ue.visible&&g.push(S,bt,ue,q,et.z,Bt)}}else Ut.visible&&g.push(S,bt,Ut,q,et.z,null)}}const ut=S.children;for(let bt=0,Ut=ut.length;bt<Ut;bt++)Ge(ut[bt],H,q,D)}function fn(S,H,q,D){const O=S.opaque,ut=S.transmissive,bt=S.transparent;p.setupLightsView(q),st===!0&&at.setGlobalState(y.clippingPlanes,q),D&&Mt.viewport(T.copy(D)),O.length>0&&ht(O,H,q),ut.length>0&&ht(ut,H,q),bt.length>0&&ht(bt,H,q),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function j(S,H,q,D){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new Xn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?wi:Wn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ut=p.state.transmissionRenderTarget[D.id],bt=D.viewport||T;ut.setSize(bt.z,bt.w);const Ut=y.getRenderTarget();y.setRenderTarget(ut),y.getClearColor(G),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Dt&&Vt.render(q);const Nt=y.toneMapping;y.toneMapping=ai;const Zt=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),st===!0&&at.setGlobalState(y.clippingPlanes,D),ht(S,q,D),A.updateMultisampleRenderTarget(ut),A.updateRenderTargetMipmap(ut),kt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Bt=0,ue=H.length;Bt<ue;Bt++){const we=H[Bt],Ae=we.object,sn=we.geometry,ge=we.material,Gt=we.group;if(ge.side===Ke&&Ae.layers.test(D.layers)){const Dn=ge.side;ge.side=qe,ge.needsUpdate=!0,wt(Ae,q,D,sn,ge,Gt),ge.side=Dn,ge.needsUpdate=!0,ie=!0}}ie===!0&&(A.updateMultisampleRenderTarget(ut),A.updateRenderTargetMipmap(ut))}y.setRenderTarget(Ut),y.setClearColor(G,J),Zt!==void 0&&(D.viewport=Zt),y.toneMapping=Nt}function ht(S,H,q){const D=H.isScene===!0?H.overrideMaterial:null;for(let O=0,ut=S.length;O<ut;O++){const bt=S[O],Ut=bt.object,Nt=bt.geometry,Zt=D===null?bt.material:D,ie=bt.group;Ut.layers.test(q.layers)&&wt(Ut,H,q,Nt,Zt,ie)}}function wt(S,H,q,D,O,ut){S.onBeforeRender(y,H,q,D,O,ut),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,H,q,D,S,ut),O.transparent===!0&&O.side===Ke&&O.forceSinglePass===!1?(O.side=qe,O.needsUpdate=!0,y.renderBufferDirect(q,H,D,O,S,ut),O.side=oi,O.needsUpdate=!0,y.renderBufferDirect(q,H,D,O,S,ut),O.side=Ke):y.renderBufferDirect(q,H,D,O,S,ut),S.onAfterRender(y,H,q,D,O,ut)}function Lt(S,H,q){H.isScene!==!0&&(H=ee);const D=xt.get(S),O=p.state.lights,ut=p.state.shadowsArray,bt=O.state.version,Ut=It.getParameters(S,O.state,ut,H,q),Nt=It.getProgramCacheKey(Ut);let Zt=D.programs;D.environment=S.isMeshStandardMaterial?H.environment:null,D.fog=H.fog,D.envMap=(S.isMeshStandardMaterial?W:M).get(S.envMap||D.environment),D.envMapRotation=D.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Zt===void 0&&(S.addEventListener("dispose",Y),Zt=new Map,D.programs=Zt);let ie=Zt.get(Nt);if(ie!==void 0){if(D.currentProgram===ie&&D.lightsStateVersion===bt)return te(S,Ut),ie}else Ut.uniforms=It.getUniforms(S),S.onBeforeCompile(Ut,y),ie=It.acquireProgram(Ut,Nt),Zt.set(Nt,ie),D.uniforms=Ut.uniforms;const Bt=D.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=at.uniform),te(S,Ut),D.needsLights=Pe(S),D.lightsStateVersion=bt,D.needsLights&&(Bt.ambientLightColor.value=O.state.ambient,Bt.lightProbe.value=O.state.probe,Bt.directionalLights.value=O.state.directional,Bt.directionalLightShadows.value=O.state.directionalShadow,Bt.spotLights.value=O.state.spot,Bt.spotLightShadows.value=O.state.spotShadow,Bt.rectAreaLights.value=O.state.rectArea,Bt.ltc_1.value=O.state.rectAreaLTC1,Bt.ltc_2.value=O.state.rectAreaLTC2,Bt.pointLights.value=O.state.point,Bt.pointLightShadows.value=O.state.pointShadow,Bt.hemisphereLights.value=O.state.hemi,Bt.directionalShadowMap.value=O.state.directionalShadowMap,Bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Bt.spotShadowMap.value=O.state.spotShadowMap,Bt.spotLightMatrix.value=O.state.spotLightMatrix,Bt.spotLightMap.value=O.state.spotLightMap,Bt.pointShadowMap.value=O.state.pointShadowMap,Bt.pointShadowMatrix.value=O.state.pointShadowMatrix),D.currentProgram=ie,D.uniformsList=null,ie}function Qt(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=Cr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function te(S,H){const q=xt.get(S);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function ve(S,H,q,D,O){H.isScene!==!0&&(H=ee),A.resetTextureUnits();const ut=H.fog,bt=D.isMeshStandardMaterial?H.environment:null,Ut=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:li,Nt=(D.isMeshStandardMaterial?W:M).get(D.envMap||bt),Zt=D.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ie=!!q.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Bt=!!q.morphAttributes.position,ue=!!q.morphAttributes.normal,we=!!q.morphAttributes.color;let Ae=ai;D.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ae=y.toneMapping);const sn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=sn!==void 0?sn.length:0,Gt=xt.get(D),Dn=p.state.lights;if(st===!0&&(yt===!0||S!==x)){const dn=S===x&&D.id===w;at.setState(D,S,dn)}let _e=!1;D.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Dn.state.version||Gt.outputColorSpace!==Ut||O.isBatchedMesh&&Gt.batching===!1||!O.isBatchedMesh&&Gt.batching===!0||O.isBatchedMesh&&Gt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Gt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Gt.instancing===!1||!O.isInstancedMesh&&Gt.instancing===!0||O.isSkinnedMesh&&Gt.skinning===!1||!O.isSkinnedMesh&&Gt.skinning===!0||O.isInstancedMesh&&Gt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Gt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Gt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Gt.instancingMorph===!1&&O.morphTexture!==null||Gt.envMap!==Nt||D.fog===!0&&Gt.fog!==ut||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==at.numPlanes||Gt.numIntersection!==at.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==ie||Gt.morphTargets!==Bt||Gt.morphNormals!==ue||Gt.morphColors!==we||Gt.toneMapping!==Ae||Gt.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,Gt.__version=D.version);let _n=Gt.currentProgram;_e===!0&&(_n=Lt(D,H,O));let Ai=!1,on=!1,cs=!1;const Re=_n.getUniforms(),bn=Gt.uniforms;if(Mt.useProgram(_n.program)&&(Ai=!0,on=!0,cs=!0),D.id!==w&&(w=D.id,on=!0),Ai||x!==S){Mt.buffers.depth.getReversed()?(ot.copy(S.projectionMatrix),Tu(ot),Au(ot),Re.setValue(z,"projectionMatrix",ot)):Re.setValue(z,"projectionMatrix",S.projectionMatrix),Re.setValue(z,"viewMatrix",S.matrixWorldInverse);const Zn=Re.map.cameraPosition;Zn!==void 0&&Zn.setValue(z,Pt.setFromMatrixPosition(S.matrixWorld)),zt.logarithmicDepthBuffer&&Re.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Re.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,on=!0,cs=!0)}if(O.isSkinnedMesh){Re.setOptional(z,O,"bindMatrix"),Re.setOptional(z,O,"bindMatrixInverse");const dn=O.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Re.setValue(z,"boneTexture",dn.boneTexture,A))}O.isBatchedMesh&&(Re.setOptional(z,O,"batchingTexture"),Re.setValue(z,"batchingTexture",O._matricesTexture,A),Re.setOptional(z,O,"batchingIdTexture"),Re.setValue(z,"batchingIdTexture",O._indirectTexture,A),Re.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&Re.setValue(z,"batchingColorTexture",O._colorsTexture,A));const hs=q.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Xt.update(O,q,_n),(on||Gt.receiveShadow!==O.receiveShadow)&&(Gt.receiveShadow=O.receiveShadow,Re.setValue(z,"receiveShadow",O.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(bn.envMap.value=Nt,bn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&H.environment!==null&&(bn.envMapIntensity.value=H.environmentIntensity),on&&(Re.setValue(z,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&le(bn,cs),ut&&D.fog===!0&&mt.refreshFogUniforms(bn,ut),mt.refreshMaterialUniforms(bn,D,v,Q,p.state.transmissionRenderTarget[S.id]),Cr.upload(z,Qt(Gt),bn,A)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Cr.upload(z,Qt(Gt),bn,A),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Re.setValue(z,"center",O.center),Re.setValue(z,"modelViewMatrix",O.modelViewMatrix),Re.setValue(z,"normalMatrix",O.normalMatrix),Re.setValue(z,"modelMatrix",O.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const dn=D.uniformsGroups;for(let Zn=0,jn=dn.length;Zn<jn;Zn++){const Go=dn[Zn];k.update(Go,_n),k.bind(Go,_n)}}return _n}function le(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Pe(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,H,q){xt.get(S.texture).__webglTexture=H,xt.get(S.depthTexture).__webglTexture=q;const D=xt.get(S);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=q===void 0,D.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,H){const q=xt.get(S);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,q=0){U=S,R=H,C=q;let D=!0,O=null,ut=!1,bt=!1;if(S){const Nt=xt.get(S);if(Nt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(z.FRAMEBUFFER,null),D=!1;else if(Nt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Nt.__hasExternalTextures)A.rebindTextures(S,xt.get(S.texture).__webglTexture,xt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(Nt.__boundDepthTexture!==Bt){if(Bt!==null&&xt.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Zt=S.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(bt=!0);const ie=xt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ie[H])?O=ie[H][q]:O=ie[H],ut=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?O=xt.get(S).__webglMultisampledFramebuffer:Array.isArray(ie)?O=ie[q]:O=ie,T.copy(S.viewport),L.copy(S.scissor),N=S.scissorTest}else T.copy(I).multiplyScalar(v).floor(),L.copy(K).multiplyScalar(v).floor(),N=ft;if(Mt.bindFramebuffer(z.FRAMEBUFFER,O)&&D&&Mt.drawBuffers(S,O),Mt.viewport(T),Mt.scissor(L),Mt.setScissorTest(N),ut){const Nt=xt.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Nt.__webglTexture,q)}else if(bt){const Nt=xt.get(S.texture),Zt=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,q||0,Zt)}w=-1},this.readRenderTargetPixels=function(S,H,q,D,O,ut,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Ut=Ut[bt]),Ut){Mt.bindFramebuffer(z.FRAMEBUFFER,Ut);try{const Nt=S.texture,Zt=Nt.format,ie=Nt.type;if(!zt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-D&&q>=0&&q<=S.height-O&&z.readPixels(H,q,D,O,qt.convert(Zt),qt.convert(ie),ut)}finally{const Nt=U!==null?xt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(S,H,q,D,O,ut,bt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Ut=Ut[bt]),Ut){const Nt=S.texture,Zt=Nt.format,ie=Nt.type;if(!zt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=S.width-D&&q>=0&&q<=S.height-O){Mt.bindFramebuffer(z.FRAMEBUFFER,Ut);const Bt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Bt),z.bufferData(z.PIXEL_PACK_BUFFER,ut.byteLength,z.STREAM_READ),z.readPixels(H,q,D,O,qt.convert(Zt),qt.convert(ie),0);const ue=U!==null?xt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(z.FRAMEBUFFER,ue);const we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await bu(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Bt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ut),z.deleteBuffer(Bt),z.deleteSync(we),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,H=null,q=0){S.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1]);const D=Math.pow(2,-q),O=Math.floor(S.image.width*D),ut=Math.floor(S.image.height*D),bt=H!==null?H.x:0,Ut=H!==null?H.y:0;A.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,bt,Ut,O,ut),Mt.unbindTexture()},this.copyTextureToTexture=function(S,H,q=null,D=null,O=0){S.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1],H=arguments[2],O=arguments[3]||0,q=null);let ut,bt,Ut,Nt,Zt,ie,Bt,ue,we;const Ae=S.isCompressedTexture?S.mipmaps[O]:S.image;q!==null?(ut=q.max.x-q.min.x,bt=q.max.y-q.min.y,Ut=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,Zt=q.min.y,ie=q.isBox3?q.min.z:0):(ut=Ae.width,bt=Ae.height,Ut=Ae.depth||1,Nt=0,Zt=0,ie=0),D!==null?(Bt=D.x,ue=D.y,we=D.z):(Bt=0,ue=0,we=0);const sn=qt.convert(H.format),ge=qt.convert(H.type);let Gt;H.isData3DTexture?(A.setTexture3D(H,0),Gt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(A.setTexture2DArray(H,0),Gt=z.TEXTURE_2D_ARRAY):(A.setTexture2D(H,0),Gt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const Dn=z.getParameter(z.UNPACK_ROW_LENGTH),_e=z.getParameter(z.UNPACK_IMAGE_HEIGHT),_n=z.getParameter(z.UNPACK_SKIP_PIXELS),Ai=z.getParameter(z.UNPACK_SKIP_ROWS),on=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ie);const cs=S.isDataArrayTexture||S.isData3DTexture,Re=H.isDataArrayTexture||H.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const bn=xt.get(S),hs=xt.get(H),dn=xt.get(bn.__renderTarget),Zn=xt.get(hs.__renderTarget);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,dn.__webglFramebuffer),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let jn=0;jn<Ut;jn++)cs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xt.get(S).__webglTexture,O,ie+jn),S.isDepthTexture?(Re&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xt.get(H).__webglTexture,O,we+jn),z.blitFramebuffer(Nt,Zt,ut,bt,Bt,ue,ut,bt,z.DEPTH_BUFFER_BIT,z.NEAREST)):Re?z.copyTexSubImage3D(Gt,O,Bt,ue,we+jn,Nt,Zt,ut,bt):z.copyTexSubImage2D(Gt,O,Bt,ue,we+jn,Nt,Zt,ut,bt);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Re?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Gt,O,Bt,ue,we,ut,bt,Ut,sn,ge,Ae.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Gt,O,Bt,ue,we,ut,bt,Ut,sn,Ae.data):z.texSubImage3D(Gt,O,Bt,ue,we,ut,bt,Ut,sn,ge,Ae):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,Bt,ue,ut,bt,sn,ge,Ae.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,Bt,ue,Ae.width,Ae.height,sn,Ae.data):z.texSubImage2D(z.TEXTURE_2D,O,Bt,ue,ut,bt,sn,ge,Ae);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_e),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_n),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ai),z.pixelStorei(z.UNPACK_SKIP_IMAGES,on),O===0&&H.generateMipmaps&&z.generateMipmap(Gt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(S,H,q=null,D=null,O=0){return S.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,D=arguments[1]||null,S=arguments[2],H=arguments[3],O=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,H,q,D,O)},this.initRenderTarget=function(S){xt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Mt.unbindTexture()},this.resetState=function(){R=0,C=0,U=null,Mt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class Oo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new Oo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hr extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Om{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=po,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new V;class Lr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class eh extends Yn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const ms=new V,Gi=new V,Wi=new V,Xi=new St,gs=new St,nh=new Ee,or=new V,_s=new V,lr=new V,Hl=new St,_a=new St,Vl=new St;class zm extends Ue{constructor(t=new eh){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Om(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Lr(n,3,0,!1)),Vi.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;cr(or.set(-.5,-.5,0),Wi,a,Gi,s,r),cr(_s.set(.5,-.5,0),Wi,a,Gi,s,r),cr(lr.set(.5,.5,0),Wi,a,Gi,s,r),Hl.set(0,0),_a.set(1,0),Vl.set(1,1);let o=t.ray.intersectTriangle(or,_s,lr,!1,ms);if(o===null&&(cr(_s.set(-.5,.5,0),Wi,a,Gi,s,r),_a.set(0,1),o=t.ray.intersectTriangle(or,lr,_s,!1,ms),o===null))return;const l=t.ray.origin.distanceTo(ms);l<t.near||l>t.far||e.push({distance:l,point:ms.clone(),uv:mn.getInterpolation(ms,or,_s,lr,Hl,_a,Vl,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function cr(i,t,e,n,s,r){Xi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gs.x=r*Xi.x-s*Xi.y,gs.y=s*Xi.x+r*Xi.y):gs.copy(Xi),i.copy(t),i.x+=gs.x,i.y+=gs.y,i.applyMatrix4(nh)}class Bm extends $e{constructor(t=null,e=1,n=1,s,r,a,o,l,c=nn,h=nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends Yn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new V,Nr=new V,Gl=new Ee,vs=new Io,hr=new Bs,va=new V,Wl=new V;class km extends Ue{constructor(t=new De,e=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;Gl.copy(s).invert(),vs.copy(t.ray).applyMatrix4(Gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),E=h.getX(_+1),b=ur(this,t,vs,l,p,E);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=ur(this,t,vs,l,_,g);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=ur(this,t,vs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ur(this,t,vs,l,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ur(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Nr.fromBufferAttribute(a,r),e.distanceSqToSegment(Ur,Nr,va,Wl)>n)return;va.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(va);if(!(l<t.near||l>t.far))return{distance:l,point:Wl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xl=new V,ql=new V;class Hm extends km{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xl.fromBufferAttribute(e,s),ql.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xl.distanceTo(ql);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sh extends Yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yl=new Ee,_o=new Io,fr=new Bs,dr=new V;class Vm extends Ue{constructor(t=new De,e=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;Yl.copy(s).invert(),_o.copy(t.ray).applyMatrix4(Yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);dr.fromBufferAttribute(u,g),Zl(dr,g,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)dr.fromBufferAttribute(u,m),Zl(dr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zl(i,t,e,n,s,r,a){const o=_o.distanceSqToPoint(i);if(o<e){const l=new V;_o.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ci extends $e{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn extends De{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new V,d=new St,f=new V,m=new V,_=new V;let g=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let E=0;E<=e;E++){const b=n+E*h*s,y=Math.sin(b),B=Math.cos(b);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*y,u.y=t[R].y,u.z=t[R].x*B,a.push(u.x,u.y,u.z),d.x=E/e,d.y=R/(t.length-1),o.push(d.x,d.y);const C=l[3*R+0]*y,U=l[3*R+1],w=l[3*R+0]*B;c.push(C,U,w)}}for(let E=0;E<e;E++)for(let b=0;b<t.length-1;b++){const y=b+E*t.length,B=y,R=y+t.length,C=y+t.length+1,U=y+1;r.push(B,R,U),r.push(C,U,R)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.points,t.segments,t.phiStart,t.phiLength)}}class Si extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new V,h=new St;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ce extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function E(){const y=new V,B=new V;let R=0;const C=(e-t)/n;for(let U=0;U<=r;U++){const w=[],x=U/r,T=x*(e-t)+t;for(let L=0;L<=s;L++){const N=L/s,G=N*l+o,J=Math.sin(G),Z=Math.cos(G);B.x=T*J,B.y=-x*n+g,B.z=T*Z,u.push(B.x,B.y,B.z),y.set(J,C,Z).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-x),w.push(m++)}_.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){const x=_[w][U],T=_[w+1][U],L=_[w+1][U+1],N=_[w][U+1];(t>0||w!==0)&&(h.push(x,T,N),R+=3),(e>0||w!==r-1)&&(h.push(T,L,N),R+=3)}c.addGroup(p,R,0),p+=R}function b(y){const B=m,R=new St,C=new V;let U=0;const w=y===!0?t:e,x=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;const T=m;for(let L=0;L<=s;L++){const G=L/s*l+o,J=Math.cos(G),Z=Math.sin(G);C.x=w*Z,C.y=g*x,C.z=w*J,u.push(C.x,C.y,C.z),d.push(0,x,0),R.x=J*.5+.5,R.y=Z*.5*x+.5,f.push(R.x,R.y),m++}for(let L=0;L<s;L++){const N=B+L,G=T+L;y===!0?h.push(G,G+1,N):h.push(G+1,G,N),U+=3}c.addGroup(p,U,y===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Te extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new V,d=new V,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){const R=B/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+b*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(R+y,1-b),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const b=h[p][E+1],y=h[p][E],B=h[p+1][E],R=h[p+1][E+1];(p!==0||a>0)&&f.push(b,y,R),(p!==n-1||l<Math.PI)&&f.push(y,B,R)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tn extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new V,u=new V,d=new V;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,E=(s+1)*f+m;a.push(_,g,E),a.push(g,p,E)}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class en extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xa extends en{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Gm extends Yn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class zo extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Wm extends zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new Ee,jl=new V,Kl=new V;class rh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(jl),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $l=new Ee,xs=new V,ya=new V;class Xm extends rh{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(xs),ya.copy(n.position),ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ya),n.updateMatrixWorld(),s.makeTranslation(-xs.x,-xs.y,-xs.z),$l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l)}}class Ns extends zo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qm extends rh{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jl extends zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);class Ym extends Hr{constructor(){super();const t=new Ot;t.deleteAttribute("uv");const e=new en({side:qe}),n=new en,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new lt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new lt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new lt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new lt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new lt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new lt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new lt(t,qi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new lt(t,qi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new lt(t,qi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new lt(t,qi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new lt(t,qi(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new lt(t,qi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function qi(i){const t=new de;return t.color.setScalar(i),t}class Zm{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const jm=new Uo(-1,1,1,-1,0,1);class Km extends De{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}}const $m=new Km;class Jm{constructor(t){this._mesh=new lt($m,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,jm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Qm{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,m=t-d,_=e-f;let g,p;m>_?(g=1,p=0):(g=0,p=1);const E=m-g+h,b=_-p+h,y=m-1+2*h,B=_-1+2*h,R=l&255,C=c&255,U=this.perm[R+this.perm[C]]%12,w=this.perm[R+g+this.perm[C+p]]%12,x=this.perm[R+1+this.perm[C+1]]%12;let T=.5-m*m-_*_;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[U],m,_));let L=.5-E*E-b*b;L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[w],E,b));let N=.5-y*y-B*B;return N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[x],y,B)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,m=(h+u+d)*f,_=h-m,g=u-m,p=d-m,E=t-_,b=e-g,y=n-p;let B,R,C,U,w,x;E>=b?b>=y?(B=1,R=0,C=0,U=1,w=1,x=0):E>=y?(B=1,R=0,C=0,U=1,w=0,x=1):(B=0,R=0,C=1,U=1,w=0,x=1):b<y?(B=0,R=0,C=1,U=0,w=1,x=1):E<y?(B=0,R=1,C=0,U=0,w=1,x=1):(B=0,R=1,C=0,U=1,w=1,x=0);const T=E-B+f,L=b-R+f,N=y-C+f,G=E-U+2*f,J=b-w+2*f,Z=y-x+2*f,Q=E-1+3*f,v=b-1+3*f,P=y-1+3*f,F=h&255,I=u&255,K=d&255,ft=this.perm[F+this.perm[I+this.perm[K]]]%12,X=this.perm[F+B+this.perm[I+R+this.perm[K+C]]]%12,st=this.perm[F+U+this.perm[I+w+this.perm[K+x]]]%12,yt=this.perm[F+1+this.perm[I+1+this.perm[K+1]]]%12;let ot=.6-E*E-b*b-y*y;ot<0?s=0:(ot*=ot,s=ot*ot*this.dot3(this.grad3[ft],E,b,y));let gt=.6-T*T-L*L-N*N;gt<0?r=0:(gt*=gt,r=gt*gt*this.dot3(this.grad3[X],T,L,N));let Pt=.6-G*G-J*J-Z*Z;Pt<0?a=0:(Pt*=Pt,a=Pt*Pt*this.dot3(this.grad3[st],G,J,Z));let et=.6-Q*Q-v*v-P*P;return et<0?o=0:(et*=et,o=et*et*this.dot3(this.grad3[yt],Q,v,P)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,m;const _=(t+e+n+s)*l,g=Math.floor(t+_),p=Math.floor(e+_),E=Math.floor(n+_),b=Math.floor(s+_),y=(g+p+E+b)*c,B=g-y,R=p-y,C=E-y,U=b-y,w=t-B,x=e-R,T=n-C,L=s-U,N=w>x?32:0,G=w>T?16:0,J=x>T?8:0,Z=w>L?4:0,Q=x>L?2:0,v=T>L?1:0,P=N+G+J+Z+Q+v,F=a[P][0]>=3?1:0,I=a[P][1]>=3?1:0,K=a[P][2]>=3?1:0,ft=a[P][3]>=3?1:0,X=a[P][0]>=2?1:0,st=a[P][1]>=2?1:0,yt=a[P][2]>=2?1:0,ot=a[P][3]>=2?1:0,gt=a[P][0]>=1?1:0,Pt=a[P][1]>=1?1:0,et=a[P][2]>=1?1:0,ee=a[P][3]>=1?1:0,Dt=w-F+c,Jt=x-I+c,z=T-K+c,oe=L-ft+c,kt=w-X+2*c,zt=x-st+2*c,Mt=T-yt+2*c,Yt=L-ot+2*c,xt=w-gt+3*c,A=x-Pt+3*c,M=T-et+3*c,W=L-ee+3*c,nt=w-1+4*c,rt=x-1+4*c,tt=T-1+4*c,It=L-1+4*c,mt=g&255,_t=p&255,Ht=E&255,at=b&255,Et=o[mt+o[_t+o[Ht+o[at]]]]%32,Vt=o[mt+F+o[_t+I+o[Ht+K+o[at+ft]]]]%32,Xt=o[mt+X+o[_t+st+o[Ht+yt+o[at+ot]]]]%32,At=o[mt+gt+o[_t+Pt+o[Ht+et+o[at+ee]]]]%32,ne=o[mt+1+o[_t+1+o[Ht+1+o[at+1]]]]%32;let qt=.6-w*w-x*x-T*T-L*L;qt<0?h=0:(qt*=qt,h=qt*qt*this.dot4(r[Et],w,x,T,L));let Kt=.6-Dt*Dt-Jt*Jt-z*z-oe*oe;Kt<0?u=0:(Kt*=Kt,u=Kt*Kt*this.dot4(r[Vt],Dt,Jt,z,oe));let k=.6-kt*kt-zt*zt-Mt*Mt-Yt*Yt;k<0?d=0:(k*=k,d=k*k*this.dot4(r[Xt],kt,zt,Mt,Yt));let vt=.6-xt*xt-A*A-M*M-W*W;vt<0?f=0:(vt*=vt,f=vt*vt*this.dot4(r[At],xt,A,M,W));let $=.6-nt*nt-rt*rt-tt*tt-It*It;return $<0?m=0:($*=$,m=$*$*this.dot4(r[ne],nt,rt,tt,It)),27*(h+u+d+f+m)}}const pr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new St},cameraProjectionMatrix:{value:new Ee},cameraInverseProjectionMatrix:{value:new Ee},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},mr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},gr={uniforms:{tDiffuse:{value:null},resolution:{value:new St}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`},Sa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ri extends Zm{constructor(t,e,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new Fo;a.format=Ti,a.type=bi,this.normalRenderTarget=new Xn(this.width,this.height,{minFilter:nn,magFilter:nn,type:wi,depthTexture:a}),this.ssaoRenderTarget=new Xn(this.width,this.height,{type:wi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new gn({defines:Object.assign({},pr.defines),uniforms:ws.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:rn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Gm,this.normalMaterial.blending=rn,this.blurMaterial=new gn({defines:Object.assign({},gr.defines),uniforms:ws.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new gn({defines:Object.assign({},mr.defines),uniforms:ws.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:rn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new gn({uniforms:ws.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Tc,blendDst:Ra,blendEquation:zn,blendSrcAlpha:bc,blendDstAlpha:Ra,blendEquationAlpha:zn}),this.fsQuad=new Jm(null),this.originalClearColor=new jt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case ri.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=rn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=rn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=rn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=wc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new V;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=Eu.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const n=new Qm,s=16,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=n.noise3d(o,l,c)}this.noiseTexture=new Bm(r,4,4,To,Rn),this.noiseTexture.wrapS=Cn,this.noiseTexture.wrapT=Cn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}}ri.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const tg={minX:-15.55,maxX:15.55,minZ:-28.15,maxZ:13.55},eg={x:0,y:1.58,z:10.55,yaw:0},ng={x:0,y:1.58,z:-16.35,yaw:0},Ds=-24.2,ig=Ds-.35,Is={x:0,y:0,z:-26.55},ah=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35}],sg=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],rg=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],vo=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1}],Ea={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},ag={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":Ea,"choir-r":Ea,"choir-ghost":Ea};function $t(i,t,e,n,s,r,a,o,l={}){return{id:i,mat:t,x:e,y:n,z:s,w:r,h:a,d:o,...l}}const ke=7.2,oh=[$t("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),$t("ceiling","ceiling",0,7.35,0,34,.3,30),$t("wall-n-l","wall",-9.23,ke/2,-14.3,14.74,ke,.6),$t("wall-n-r","wall",9.23,ke/2,-14.3,14.74,ke,.6),$t("chapel-door","trim",0,ke/2,-14.3,3.76,ke,.66,{door:!0}),$t("wall-s","wall",0,ke/2,14.3,33.2,ke,.6),$t("wall-w","wall",-16.3,ke/2,0,.6,ke,29.2),$t("wall-e","wall",16.3,ke/2,0,.6,ke,29.2),$t("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),$t("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),$t("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),$t("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),$t("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),$t("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),$t("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),$t("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),$t("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),$t("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),$t("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),$t("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),$t("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),$t("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),$t("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),$t("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),$t("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),$t("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),$t("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),$t("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),$t("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),$t("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),$t("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),$t("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),$t("chapel-w","wall",-8.35,ke/2,-21.75,.5,ke,14.9),$t("chapel-e","wall",8.35,ke/2,-21.75,.5,ke,14.9),$t("chapel-n","wall",0,ke/2,-29.05,17.2,ke,.5),$t("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),$t("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),$t("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),$t("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),$t("altar-l","trim",-4.85,1.8,Ds,6.5,3.6,.48),$t("altar-r","trim",4.85,1.8,Ds,6.5,3.6,.48),$t("rite-veil","trim",0,1.8,Ds,3.36,3.6,.42,{phaseGate:!0,veil:!0}),$t("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function og(i){return{id:i.id,minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2,phaseGate:!!i.phaseGate,floor:!!i.floor}}function lh({doorOpen:i=!1,veilUp:t=!1}={}){return oh.filter(e=>!(e.door&&i||e.veil&&!t)).map(og)}function ch(i,t,e){return{id:i.id,x:i.x,y:0,z:i.z,yaw:0,hp:i.hp,maxHp:i.hp,alive:!0,cloaked:!!i.cloak,reveal:0,visible:!i.cloak,exposed:!1,hittable:!i.cloak,hits:0,lastHitAt:null,aggro:e==="court"&&!i.cloak,cooldown:e==="chapel"?1.35+t%3*.25:.95+t%4*.28,windup:0,strafeSign:t%2===0?1:-1,strafeT:.8+t%3*.25,hurt:0,stun:0,room:e,dormant:e!=="court"}}function hh(){return sg.map((i,t)=>ch(i,t,"court"))}function Fr(){return rg.map((i,t)=>ch(i,t,"chapel"))}function lg(){return vo.map(i=>({...i,taken:!1}))}const Ts=["LIVE","STATIC","DEAD_AIR"],pe={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6}};function wn(i,t,e){return Math.max(t,Math.min(e,i))}function Ql(){return{channel:"LIVE",signal:pe.signalMax,health:pe.healthMax,fireCooldown:0,hurtTimer:0}}function cg(i){return i==="Digit1"||i==="Numpad1"?"LIVE":i==="Digit2"||i==="Numpad2"?"STATIC":i==="Digit3"||i==="Numpad3"?"DEAD_AIR":null}function hg(i,t){const e=Math.max(0,Ts.indexOf(i)),n=t>=0?1:-1;return Ts[(e+n+Ts.length)%Ts.length]}function ug(i,t){return t==="LIVE"?!0:i.signal>=pe.minDrainSignal}function fg(i,t){return Ts.includes(t)?i.channel===t?{state:i,result:"same"}:ug(i,t)?{state:{...i,channel:t},result:"ok"}:{state:i,result:"denied"}:{state:i,result:"invalid"}}function dg(i,t){let{channel:e,signal:n,fireCooldown:s,hurtTimer:r}=i,a=!1;if(s=Math.max(0,s-t),r=Math.max(0,r-t),e==="LIVE")n=Math.min(pe.signalMax,n+pe.liveRegen*t);else{const o=e==="STATIC"?pe.staticDrain:pe.deadDrain;n-=o*t,n<=0&&(n=0,e="LIVE",a=!0)}return{state:{...i,channel:e,signal:n,fireCooldown:s,hurtTimer:r},forced:a}}function uh(i){var t;return(t=pe.speed[i])!=null?t:pe.speed.LIVE}function pg(i){return i.channel!=="DEAD_AIR"&&i.fireCooldown<=0&&i.health>0}function tc(i){return i==="LIVE"?{kind:"hitscan",pellets:1,spread:0,damage:pe.liveDamage,range:pe.liveRange,falloff:pe.liveFalloff,cooldown:pe.liveCooldown}:i==="STATIC"?{kind:"spread",pellets:pe.staticPellets,spread:pe.staticSpread,damage:pe.staticPellet,range:pe.staticRange,falloff:pe.staticFalloff,cooldown:pe.staticCooldown}:{kind:"none",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0}}function mg(i){const t=tc(i.channel);return!pg(i)||t.kind==="none"?{state:i,profile:tc("DEAD_AIR"),fired:!1}:{state:{...i,fireCooldown:t.cooldown},profile:t,fired:!0}}function ec(i,t,e,n){if(!(t>=0)||t>e||e<=0)return 0;const s=t/e;return i*(1-n*s*s)}function Bo(i,t){return{...i,signal:wn(i.signal+t,0,pe.signalMax)}}function gg(i,t){return{...i,health:wn(i.health+t,0,pe.healthMax)}}function _g(i,{distance:t,channel:e,burst:n}){const s=e==="STATIC"||t<=pe.aggressiveRange||!!n,r=s?pe.aggressiveKillSignal:pe.cleanKillSignal;return{state:Bo(i,r),amount:r,aggressive:s}}function nc(i,t){if(i.hurtTimer>0||i.health<=0)return{state:i,hit:!1,dead:i.health<=0};const e=Math.max(0,i.health-t);return{state:{...i,health:e,hurtTimer:pe.hurtIframes},hit:!0,dead:e<=0}}function vg(i,t){return!(!i||i.floor||i.maxY!=null&&i.maxY<.3||i.minY!=null&&i.minY>1.65||i.phaseGate&&t==="DEAD_AIR")}function xo(i,t,e,n,s){for(const r of n){if(!vg(r,s))continue;const a=wn(i,r.minX,r.maxX),o=wn(t,r.minZ,r.maxZ),l=i-a,c=t-o;if(l*l+c*c<e*e)return r}return null}function xg(i,t,e,n,s,r,a){let o=i+e;xo(o,t,s,r,a)&&(o=i);const l=t+n;return xo(o,l,s,r,a)?{x:o,z:t}:{x:o,z:l}}function Mg(i,t,e,n,s){let r=i,a=t;for(let o=0;o<4;o++){const l=xo(r,a,e,n,s);if(!l)break;const c=wn(r,l.minX,l.maxX),h=wn(a,l.minZ,l.maxZ);let u=r-c,d=a-h;const f=Math.hypot(u,d);if(f<1e-5){const m=r-l.minX,_=l.maxX-r,g=a-l.minZ,p=l.maxZ-a,E=Math.min(m,_,g,p);E===m?r=l.minX-e-.01:E===_?r=l.maxX+e+.01:E===g?a=l.minZ-e-.01:a=l.maxZ+e+.01}else{const m=e-f+.01;r+=u/f*m,a+=d/f*m}}return{x:r,z:a}}function fh(i,t,e,n,s,r,a,o){const l=Math.hypot(e,n),c=Math.max(1,Math.ceil(l/.25));let h=i,u=t;for(let f=0;f<c;f++){const m=xg(h,u,e/c,n/c,s,r,a);h=m.x,u=m.z}const d=Mg(h,u,s,r,a);return o?{x:wn(d.x,o.minX,o.maxX),z:wn(d.z,o.minZ,o.maxZ)}:d}function dh(i,t,e,n,s,r,a,o,l,c){const h=a-i,u=o-t,d=l-e,f=h*n+u*s+d*r,m=h*h+u*u+d*d-f*f,_=c*c;if(m>_)return null;const g=Math.sqrt(Math.max(0,_-m)),p=f-g,E=f+g;return p>=0?p:E>=0?E:null}function yg(i,t,e,n,s,r,a,o){let l=0,c=o;const h=[[i,n,a.minX,a.maxX],[t,s,a.minY,a.maxY],[e,r,a.minZ,a.maxZ]];for(const[d,f,m,_]of h){if(Math.abs(f)<1e-8){if(d<m||d>_)return null;continue}let g=(m-d)/f,p=(_-d)/f;if(g>p){const E=g;g=p,p=E}if(g>l&&(l=g),p<c&&(c=p),c<l)return null}const u=l>=0?l:c;return u<0||u>o?null:u}function ko(i,t,e,n,s,r,a,o){let l=null,c=a;for(const h of o){if(h.noShoot)continue;const u=yg(i,t,e,n,s,r,h,c);u!=null&&u<c&&(c=u,l={t:u,collider:h,x:i+n*u,y:t+s*u,z:e+r*u})}return l}function ic(i,t){if(!i.alive)return{...i,visible:!0,exposed:!1,hittable:!1};if(!i.cloaked)return{...i,visible:!0,exposed:t==="STATIC",hittable:!0};const e=t==="STATIC"||i.reveal>0;return{...i,visible:e,exposed:e,hittable:e}}function sc(i,t,e){if(!i.cloaked||!i.alive)return ic(i,e);let n=i.reveal||0;return e==="STATIC"?n=pe.revealDuration:n=Math.max(0,n-t),ic({...i,reveal:n},e)}function Sg(i,t,e,n,s){let r=e,a=null;for(const l of n){if(!l.alive||!l.hittable)continue;const c=[{y:(l.y||0)+1.62,r:.26,weak:!0},{y:(l.y||0)+.98,r:.46,weak:!1}];for(const h of c){const u=dh(i.x,i.y,i.z,t.x,t.y,t.z,l.x,h.y,l.z,h.r);u!=null&&u>.02&&u<r&&(r=u,a={kind:"enemy",id:l.id,t:u,weak:h.weak,x:i.x+t.x*u,y:i.y+t.y*u,z:i.z+t.z*u})}}const o=ko(i.x,i.y,i.z,t.x,t.y,t.z,r,s);return o&&o.t<r?{kind:"world",t:o.t,x:o.x,y:o.y,z:o.z,id:o.collider.id}:a}function Eg(i,t){const e=i.lastHitAt!=null&&t-i.lastHitAt<=pe.burstWindow;return{enemy:{...i,lastHitAt:t},burst:e}}function wg(i,{weak:t,damage:e}){if(!i.alive||!i.hittable||e<=0)return{enemy:i,dealt:0,killed:!1};let n=e;t&&i.exposed&&(n*=pe.weakMult);const s=i.hp-n,r=s<=0;return{enemy:{...i,hp:r?0:s,hits:(i.hits||0)+1,alive:!r,hittable:!r&&i.hittable},dealt:n,killed:r}}function bg(i,t,e,n,s,r){const a=[],o=Math.max(0,n|0);for(let l=0;l<o;l++){const c=o===1&&s===0?0:(r()*2-1)*s,h=o===1&&s===0?0:(r()*2-1)*s,u=i.x+t.x*c+e.x*h,d=i.y+t.y*c+e.y*h,f=i.z+t.z*c+e.z*h,m=Math.hypot(u,d,f)||1;a.push({x:u/m,y:d/m,z:f/m})}return a}function ph(i,t,e,n,s,r,a){const o=n-i,l=s-t,c=r-e,h=Math.hypot(o,l,c);return h<.001?!0:ko(i,t,e,o/h,l/h,c/h,Math.max(0,h-.25),a)==null}function Tg(i,t){return!t||t.taken?{state:i,pickup:t,took:!1}:t.kind==="signal"?{state:Bo(i,t.amount),pickup:{...t,taken:!0},took:!0}:t.kind==="health"?i.health>=pe.healthMax?{state:i,pickup:t,took:!1}:{state:gg(i,t.amount),pickup:{...t,taken:!0},took:!0}:{state:i,pickup:t,took:!1}}function Ag(i,t){return!i||i.taken?!1:i.cloaked?t==="STATIC":!0}function Rg(i,t){const e=Math.hypot(i,t);return e<1e-6?{x:0,z:0}:{x:i/e,z:t/e}}function Cg(i,t,e){var C;if(!i.alive)return{enemy:i,shot:null};if(i.dormant)return{enemy:{...i,hurt:Math.max(0,(i.hurt||0)-t)},shot:null};let n=sc(i,t,e.channel);if(!n.alive)return{enemy:n,shot:null};const s=e.player.x-n.x,r=e.player.z-n.z,a=Math.hypot(s,r);if((a<18||e.player.forceAggro)&&(n.aggro=!0),n.cloaked&&a<3.05&&(n.reveal=Math.max(n.reveal||0,1.25)),n=sc(n,0,e.channel),(n.stun||0)>0)return n.stun-=t,n.windup=0,n.hurt=Math.max(0,(n.hurt||0)-t),a>.001&&n.aggro&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:null};const o=n.cloaked&&!n.visible;if(!n.aggro||o)return n.hurt=Math.max(0,(n.hurt||0)-t),{enemy:n,shot:null};const c=a<17&&ph(n.x,1.45,n.z,e.player.x,(C=e.player.y)!=null?C:1.2,e.player.z,e.colliders);n.hurt=Math.max(0,(n.hurt||0)-t),n.cooldown=(n.cooldown||0)-t;let h=null;if(n.windup>0?(n.windup-=t,n.windup<=0&&(n.windup=0,c&&(h=Pg(n,e,a)))):c&&n.cooldown<=0&&(n.windup=.28,n.cooldown=1.28+e.rng()*.45),n.windup>0)return a>.001&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:h};const u=a>.001?{x:s/a,z:r/a}:{x:0,z:1},d={x:-u.z,z:u.x};n.strafeT=(n.strafeT||0)-t,n.strafeT<=0&&(n.strafeSign=(n.strafeSign||1)*-1,n.strafeT=.75+e.rng()*1.05);let f=d.x*n.strafeSign*.9,m=d.z*n.strafeSign*.9;if(a>10.2?(f+=u.x,m+=u.z):a<5.2&&(f-=u.x*.85,m-=u.z*.85),e.allies)for(const U of e.allies){if(!U.alive||U.id===n.id)continue;const w=n.x-U.x,x=n.z-U.z,T=Math.hypot(w,x);T<1.15&&T>.001&&(f+=w/T*1.4,m+=x/T*1.4)}const _=Rg(f,m),g=uh("STATIC")*.62*(n.hurt>0?.25:1);let p=_.x*g*t,E=_.z*g*t;const b=fh(n.x,n.z,p,E,.42,e.colliders,"LIVE",null);let y=b.x,B=b.z;const R=ag[n.id];return R&&(y<R.minX||y>R.maxX||B<R.minZ||B>R.maxZ)&&(y=n.x,B=n.z),n.x=y,n.z=B,a>.001&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:h}}function Pg(i,t,e){var u;const n=i.x,s=1.32,r=i.z,a=t.player.x-n+(t.rng()-.5)*.35,o=((u=t.player.y)!=null?u:1.15)-s+(t.rng()-.5)*.12,l=t.player.z-r+(t.rng()-.5)*.35,c=Math.hypot(a,o,l)||1,h=14.5;return{x:n,y:s,z:r,vx:a/c*h,vy:o/c*h,vz:l/c*h,damage:pe.boltDamage,life:2.1,dist:e}}function mh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new De;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=rc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const m=rc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function rc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ve(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Yi(i,t,e,n,s){const r=-s/2,a=s/2,o=[[-i/2,r,t/2],[i/2,r,t/2],[i/2,r,-t/2],[-i/2,r,-t/2],[-e/2,a,n/2],[e/2,a,n/2],[e/2,a,-n/2],[-e/2,a,-n/2]],l=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],c=[],h=[];for(const d of l){const[f,m,_,g]=d.map(p=>o[p]);c.push(...f,...m,..._,...f,..._,...g),h.push(0,0,1,0,1,1,0,0,1,1,0,1)}const u=new De;return u.setAttribute("position",new fe(c,3)),u.setAttribute("uv",new fe(h,2)),u.computeVertexNormals(),u}function wa(i,t=24){const e=i.map(([s,r])=>new St(s,r)),n=new qn(e,t);return n.computeVertexNormals(),n}function Wt(i,t,e=0,n=0,s=0){const r=new lt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function ba(i){return mh(i,!1)}const Dg=[[.02,.2],[.1,.175],[.148,.11],[.164,.04],[.158,-.03],[.132,-.09],[.09,-.135],[.04,-.158]],Ig=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],Lg=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];let Ms=null;function Ho(){if(Ms)return Ms;const i=[],t=new Te(.046,12,10);t.scale(1.5,.75,1.45),t.translate(0,-.575,.02),i.push(t);for(let h=0;h<4;h++){const u=-.042+h*.028,d=.05-Math.abs(h-1.5)*.006,f=.28+(h===0||h===3?.12:0),m=new ce(.011,.013,d,6);m.translate(0,-d*.5,0),m.rotateX(.16),m.translate(u,-.62,.05);const _=new ce(.008,.011,d*.82,6);_.translate(0,-d*.38,0),_.rotateX(f),_.translate(u,-.62-d*.7,.055),i.push(m,_)}const e=new ce(.009,.011,.04,6);e.translate(0,-.02,0),e.rotateZ(.85),e.translate(.048,-.59,.015);const n=new ce(.007,.009,.028,6);n.translate(0,-.014,0),n.rotateZ(1.15),n.rotateX(.25),n.translate(.062,-.6,.03),i.push(e,n);const s=new Ot(.1,.025,.2);s.translate(0,-.012,.02);const r=new Ot(.088,.038,.13);r.translate(0,.016,-.005);const a=[],o=new Ot(.05,.055,.16);o.translate(0,-.56,.1),a.push(o);const l=new Ot(.03,.03,.07);l.translate(0,-.545,.16),a.push(l);const c=new Ot(.038,.07,.04);c.translate(0,-.61,.04),a.push(c),Ms={helmet:wa(Dg,36),torso:wa(Ig,32),robe:wa(Lg,36),visor:new Te(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:Yi(.34,.2,.48,.26,.4),abdomen:Yi(.3,.18,.34,.2,.18),pelvis:Yi(.32,.2,.28,.18,.14),pec:Yi(.15,.1,.17,.12,.2),shoulder:Yi(.1,.1,.14,.12,.08),thigh:new ce(.055,.072,.34,12),shin:new ce(.04,.055,.32,12),foot:ba([s,r]),upper:new ce(.04,.05,.26,12),forearm:new ce(.03,.04,.22,12),hand:ba(i),gun:ba(a),collar:new ce(.07,.09,.08,8),joint:new Te(1,16,12),skirt:Yi(.34,.16,.5,.22,.62),tabard:new Ot(.22,.58,.045),stole:new Ot(.09,.5,.04),muzzle:new Ot(.028,.028,.04),seam:new Ot(.2,.028,.02)};for(const h of Object.values(Ms))if(!(!(h!=null&&h.index)||h.attributes.tangent||!h.attributes.uv||!h.attributes.normal))try{h.computeTangents()}catch(u){}return Ms}const Mo=[];let yo=1;const Ug=se.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );","vec4 envMapColor = sampleProbe( envMapRotation * worldNormal, 1.0 );").replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );","vec4 envMapColor = sampleProbe( envMapRotation * reflectVec, roughness );");function Ng(i,t,e){i.envMap=t||null,i.envMapIntensity=t?1.15:.72,!(!t||!e)&&(i.customProgramCacheKey=()=>"visor-dual-probe",i.onBeforeCompile=n=>{n.uniforms.courtMap={value:e},n.uniforms.probeMix={value:yo},i.userData.probeShader=n,n.fragmentShader=n.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`#ifdef USE_ENVMAP
uniform sampler2D courtMap;
uniform float probeMix;
vec4 sampleProbe(vec3 dir, float roughness) {
  if (probeMix >= 0.999) return textureCubeUV(courtMap, dir, roughness);
  if (probeMix <= 0.001) return textureCubeUV(envMap, dir, roughness);
  return mix(textureCubeUV(envMap, dir, roughness), textureCubeUV(courtMap, dir, roughness), probeMix);
}
#endif
${Ug}`)},Mo.push(i))}let Ta=null;function gh(i){if(!Ta){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),s=n.createRadialGradient(32,32,2,32,32,31);s.addColorStop(0,"rgba(0,0,0,0.48)"),s.addColorStop(.5,"rgba(0,0,0,0.2)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);const r=new ci(e);r.colorSpace=We,Ta=new de({map:r,transparent:!0,depthWrite:!1})}const t=new lt(new Si(i,24),Ta);return t.rotation.x=-Math.PI/2,t.position.y=.025,t.castShadow=!1,t.receiveShadow=!1,t}function Mi(i,t=0,e=0){return i.userData.rest=t,i.userData.restI=e,i.emissive=new jt(t),i.emissiveIntensity=e,i}function ac(i,t){const e=i.shinGrime.clone();return e.wrapS=Cn,e.offset.x=t,Mi(new en({map:e,roughness:.96,metalness:.02,envMapIntensity:.14}))}function _h(i,t){const e=(t==null?void 0:t.aisle)||null,n=(t==null?void 0:t.court)||null,s=Mi(new xa({map:i.pearl,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:.85,metalness:.02,clearcoat:.58,clearcoatRoughness:.24,envMapIntensity:.36}));s.normalScale.set(.45,.45);const r=Mi(new en({map:i.pearlWorn,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:1,metalness:.02,envMapIntensity:.22}));r.normalScale.set(.65,.65);const a=Mi(new en({map:i.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),o=Mi(new xa({color:461070,roughness:.035,metalness:.12,clearcoat:1,clearcoatRoughness:.03,iridescence:0,ior:1.55,reflectivity:1}));Ng(o,e,n),o.polygonOffset=!0,o.polygonOffsetFactor=-2,o.polygonOffsetUnits=-2;const l=Mi(new xa({map:i.cloth,normalMap:i.clothNormal,roughnessMap:i.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new jt(16183784),envMapIntensity:.32}));l.normalScale.set(.4,.4);const c=Mi(new en({map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);c.normalScale.set(.35,.35);const h=new de({color:16757066}),u=ac(i,0),d=ac(i,.17);return{pearl:s,worn:r,joint:a,visor:o,cloth:l,gold:c,amber:h,grime:u,grimeR:d}}function _r(i,t,e,n,s){const r=Wt(Ho().joint,i,e,n,s);return r.scale.setScalar(t),r}function ni(i,t,e=16774894){for(const n of i)t>.02?(n.emissive.setHex(e),n.emissiveIntensity=t):(n.emissive.setHex(n.userData.rest||0),n.emissiveIntensity=n.userData.restI||0)}function Fg(i,t={}){const e=new me,n=Ho(),s=_h(i,t.probes),r=[],a=Wt(n.torso,s.pearl),o=Wt(new ce(.188,.188,.048,18),s.joint,0,1.02,0),l=Wt(n.collar,s.joint,0,1.5,0),c=new me;c.position.set(0,1.66,0);const h=Wt(n.helmet,s.pearl);h.scale.set(1.06,.96,1.08);const u=Wt(new Te(.172,40,24),s.visor,0,-.045,.168);u.scale.set(1.18,1.14,.36);const d=Wt(new Te(.026,12,8),s.pearl,0,.148,.12);d.scale.set(1,.65,.5);const f=Wt(n.seam,s.amber,0,-.02,.185);f.visible=!1,f.castShadow=!1,c.add(h,u,d,f);const m=Wt(new Ot(.32,.22,.028),s.pearl,0,1.3,.22);m.castShadow=!1;const _=Wt(new Te(.14,14,10),s.pearl,0,.74,0);_.scale.set(1.65,.48,1.05),_.castShadow=!1,r.push(a,o,l,c,m,_);function g(w,x){const T=new me;if(x){T.add(_r(s.joint,.055,0,0,0)),T.add(Wt(n.upper,s.pearl,0,-.16,0)),T.add(_r(s.joint,.042,0,-.3,0)),T.add(Wt(n.forearm,s.joint,0,-.42,0));const L=zg(s.joint,w);T.add(L.rig),T.userData.digits=L.digits}else{T.add(_r(s.joint,.058,0,0,0)),T.add(Wt(n.thigh,s.pearl,0,-.2,0)),T.add(_r(s.joint,.048,0,-.38,0));const L=Wt(new Te(.046,10,8),s.pearl,0,-.38,.042);L.scale.set(1.05,.8,.5),L.castShadow=!1,T.add(L);const N=Wt(n.shin,s.worn,0,-.56,0);N.rotation.y=Math.PI,N.scale.set(1.12,1,.86),T.add(N);const G=Wt(new Ot(.078,.24,.016),w<0?s.grime:s.grimeR,0,-.58,.058);G.castShadow=!1,T.add(G);const J=Wt(n.foot,s.worn,0,-.76,.03);T.add(J)}return T}const p=g(-1,!1);p.position.set(-.12,.8,0),p.rotation.z=.08;const E=g(1,!1);E.position.set(.12,.8,0),E.rotation.z=-.08;const b=g(-1,!0);b.position.set(-.32,1.4,0),b.rotation.z=.42;const y=g(1,!0);y.position.set(.32,1.4,0),y.rotation.z=-.36;const B=Wt(n.gun,s.joint,.045,.02,.02),R=Wt(n.muzzle,s.amber,.045,-.525,.22);R.castShadow=!1,y.add(B,R);const C=gh(.48);e.add(...r,p,E,b,y,C);let U=null;if(t.vestment){const w=Wt(n.tabard,s.cloth,0,.92,.16),x=Wt(new Ot(.28,.42,.04),s.cloth,0,.95,-.14),T=Wt(n.stole,s.gold,0,1.16,.18),L=Wt(new qn([new St(.18,0),new St(.32,.04),new St(.24,.1)],24),s.cloth,0,1.4,0),N=Ki(vh(new qn([new St(.2,.02),new St(.36,.2),new St(.4,.46),new St(.3,.74),new St(.22,.96)],28),6,.016),s.cloth,0,.06,0);U=N,e.add(w,x,T,L,N)}return xh(e),{group:e,weak:f,lLeg:p,rLeg:E,lArm:b,rArm:y,muzzle:R,shadow:C,cloth:U,lDigits:b.userData.digits,rDigits:y.userData.digits,flashMats:[s.pearl,s.worn,s.joint,s.visor,s.cloth,s.gold,s.grime,s.grimeR],flash:0}}function Og(i,t){const e=new me,n=_h(i,t),s=Ho(),r=Ki(vh(s.robe,8,.04),n.cloth),a=Ki(new qn([new St(.26,0),new St(.64,.05),new St(.5,.14),new St(.22,.2)],28),n.cloth,0,1.46,0),o=n.cloth.clone();o.side=Ke;const l=Ki(new ce(.3,.98,1.78,18,1,!0,Math.PI-1.25,2.5),o,0,.9,-.14);l.castShadow=!1;const c=Wt(new qn([new St(.12,0),new St(.22,.06),new St(.16,.16)],24),n.cloth,0,1.68,0),h=Wt(new tn(.58,.05,8,28),n.cloth,0,.08,0);h.rotation.x=Math.PI/2,h.castShadow=!1;const u=Wt(new tn(.63,.018,8,32),n.gold,0,.05,0);u.rotation.x=Math.PI/2;const d=Wt(new tn(.38,.022,8,28),n.gold,0,1.1,0);d.rotation.x=Math.PI/2;const f=n.cloth.clone();f.side=Ke;const m=[],_=[[0,.7,.06,1.2,.075],[.82,.36,.08,1.16,.068],[-.82,.36,.08,1.16,.068],[1.6,.4,.08,1.12,.06],[-1.6,.4,.08,1.12,.06],[Math.PI,.55,.1,1.08,.055]];for(const[v,P,F,I,K]of _){const ft=Ki(ys(v,P,F,I,K),f);ft.castShadow=!1,m.push(ft),e.add(ft)}for(const v of[-.36,.36]){const P=Wt(ys(v,.045,.08,1.18,.09),n.gold);P.castShadow=!1,e.add(P)}const g=Ki(ys(0,.95,1.16,1.5,.055,6),f);g.castShadow=!1;const p=Wt(ys(0,1.05,1.12,1.17,.07,3),n.gold);p.castShadow=!1;const E=Wt(ys(0,.1,.42,1.14,.095,8),n.gold);E.castShadow=!1;const b=Wt(new Te(.045,12,10),n.gold,0,.48,.58),y=new me;y.position.set(0,2.05,0),y.scale.setScalar(1.18);const B=Wt(s.helmet,n.pearl),R=Wt(new Te(.028,12,8),n.pearl,0,.15,.11);R.scale.set(1,.62,.48);const C=Wt(new Te(.175,40,24),n.visor,0,-.04,.162);C.scale.set(1.22,1.2,.38);const U=Wt(new Ot(.22,.03,.018),n.amber,0,-.02,.175);U.visible=!1,U.castShadow=!1,y.add(B,R,C,U);const w=new en({color:15123818,map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),x=new lt(new tn(.58,.04,12,48),w);x.position.set(0,2.22,-.16);const T=new lt(new tn(.4,.016,8,36),w);x.add(T);const L=Wt(new Te(.032,10,8),n.gold,.58,0,0);x.add(L);const N=n.cloth.clone();N.side=Ke;function G(v){const P=new me,F=Wt(new ce(.075,.13,.52,14),n.cloth,0,.26,0),I=Wt(new ce(.22,.08,.46,14,1,!0),N,0,.2,0);I.castShadow=!1;const K=Wt(new tn(.2,.016,8,16),n.gold,0,.44,0);K.rotation.x=Math.PI/2;const ft=Hg(n.pearl,n.amber,v);return P.add(F,I,K,ft.rig),P.position.set(v*.42,1.48,.02),{pivot:P,hand:ft.amber,digits:ft.digits}}const J=G(-1),Z=G(1);for(const v of[1.42,1.28,1.14]){const P=Wt(new tn(.16,.01,8,22,Math.PI*.85),n.gold,0,v,.42);P.rotation.x=Math.PI/2,e.add(P)}const Q=gh(.9);return e.add(r,l,a,c,h,u,d,g,p,E,b,y,x,J.pivot,Z.pivot,Q),e.position.set(Is.x,0,Is.z),xh(e),{group:e,halo:x,haloMat:w,seam:U,shadow:Q,lArm:J.pivot,rArm:Z.pivot,lHand:J.hand,rHand:Z.hand,lDigits:J.digits,rDigits:Z.digits,cloths:[r,l,a,g,...m],flashMats:[n.pearl,n.cloth,o,N,f,n.visor,n.gold],flash:0}}const oc=new Map;function vr(i,t,e){const n=`${i}:${t}:${e}`;let s=oc.get(n);return s||(s=new ce(i,t,e,6),oc.set(n,s)),s}function zg(i,t){const e=new me,n=t<0;e.position.set(t*.012,-.5,n?.09:.045),e.rotation.x=n?-.62:-.22;const s=new Te(.036,10,8);s.scale(2.35,.55,.72);const r=Wt(s,i);r.castShadow=!1,e.add(r);const a=[],o=[-.074,-.025,.025,.074],l=[.09,.118,.106,.08];for(let f=0;f<4;f++){const m=new me;m.position.set(o[f],-.02,.02);const _=l[f],g=Wt(vr(.009,.0125,_),i,0,-_*.48,0);g.castShadow=!1;const p=Wt(new Te(.012,8,6),i,0,-_*.92,0);p.castShadow=!1;const E=new me;E.position.y=-_*.96;const b=_*.72,y=Wt(vr(.0065,.0095,b),i,0,-b*.46,0);y.castShadow=!1,E.add(y),m.add(g,p,E),e.add(m),a.push({knuckle:m,tip:E})}const c=new me;c.position.set(t*.082,.004,.028),c.rotation.z=-t*1.15;const h=Wt(vr(.0085,.011,.052),i,0,-.028,0);h.castShadow=!1;const u=new me;u.position.y=-.05;const d=Wt(vr(.006,.0085,.038),i,0,-.02,0);return d.castShadow=!1,u.add(d),c.add(h,u),e.add(c),a.push({knuckle:c,tip:u}),{rig:e,digits:a}}const Bg=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];function kg(i){const t=Bg;if(i<=t[0][1])return t[0][0];for(let e=1;e<t.length;e++)if(i<=t[e][1]){const n=(i-t[e-1][1])/(t[e][1]-t[e-1][1]);return t[e-1][0]+(t[e][0]-t[e-1][0])*n}return t[t.length-1][0]}function ys(i,t,e,n,s,r=8){const a=new De,o=[],l=[],c=[],h=2;for(let d=0;d<=r;d++){const f=d/r,m=e+(n-e)*f,_=kg(m)+s;for(let g=0;g<=h;g++){const p=i-t/2+t*g/h;o.push(Math.sin(p)*_,m,Math.cos(p)*_),l.push(g/h,f)}}const u=h+1;for(let d=0;d<r;d++)for(let f=0;f<h;f++){const m=d*u+f;c.push(m,m+u,m+1,m+1,m+u,m+u+1)}return a.setAttribute("position",new fe(o,3)),a.setAttribute("uv",new fe(l,2)),a.setIndex(c),a.computeVertexNormals(),a}function Hg(i,t,e){const n=new me;n.position.set(0,.58,.1);const s=new Te(.055,12,8);s.scale(1.7,1.15,.4);const r=Wt(s,i);r.castShadow=!1,n.add(r);const a=[],o=[-.058,-.02,.02,.058],l=[.09,.11,.1,.078];for(let m=0;m<4;m++){const _=new me;_.position.set(o[m],.04,.02);const g=l[m],p=Wt(new ce(.012,.014,g,6),i,0,g*.48,0);p.castShadow=!1;const E=new me;E.position.y=g*.9;const b=g*.7,y=Wt(new ce(.009,.012,b,6),i,0,b*.46,0);y.castShadow=!1,E.add(y),_.add(p,E),n.add(_),a.push({knuckle:_,tip:E})}const c=new me;c.position.set(e*.078,-.006,.02),c.rotation.z=e*.85;const h=Wt(new ce(.01,.012,.05,6),i,0,.028,0);h.castShadow=!1;const u=new me;u.position.y=.05;const d=Wt(new ce(.007,.01,.032,6),i,0,.016,0);d.castShadow=!1,u.add(d),c.add(h,u),n.add(c),a.push({knuckle:c,tip:u});const f=Wt(new Ot(.09,.07,.014),t,0,.01,.04);return f.castShadow=!1,n.add(f),{rig:n,digits:a,amber:f}}function ii(i,t){for(let e=0;e<i.length;e++){const n=i[e],s=e===i.length-1?.55:1;n.knuckle.rotation.x=-t*s,n.tip.rotation.x=-t*.8*s}}function lc(i,t,e=0,n=1){if(!i)return;const s=Array.isArray(i)?i:[i];for(const r of s)r!=null&&r.morphTargetInfluences&&(r.morphTargetInfluences[0]=Math.sin(t*.75+e)*.6*n,r.morphTargetInfluences[1]=Math.sin(t*.5+e+.8)*.4*n)}function Vg(i){const t=i.attributes.position;let e=1/0,n=-1/0;for(let o=0;o<t.count;o++){const l=t.getY(o);l<e&&(e=l),l>n&&(n=l)}const s=Math.max(.001,n-e),r=new Float32Array(t.count*3),a=new Float32Array(t.count*3);for(let o=0;o<t.count;o++){const l=Math.pow(Math.max(0,(n-t.getY(o))/s),1.35);r[o*3]=l*.08,a[o*3+2]=l*.055}return i.morphAttributes.position=[new fe(r,3),new fe(a,3)],i}function Ki(i,t,e=0,n=0,s=0){Vg(i);const r=Wt(i,t,e,n,s);return r.updateMorphTargets(),r}function vh(i,t=7,e=.02){const n=i.clone(),s=n.attributes.position;for(let r=0;r<s.count;r++){const a=s.getX(r),o=s.getY(r),l=s.getZ(r),c=Math.hypot(a,l)||1,h=Math.atan2(a,l),u=.4+.6*Math.max(0,l/c),d=.4+.6*Math.min(1,Math.max(0,(1.35-o)/1.35)),f=Math.sin(h*t)*e*u*d;s.setXYZ(r,a+a/c*f,o,l+l/c*f)}return s.needsUpdate=!0,n.computeVertexNormals(),n.getAttribute("tangent")&&n.deleteAttribute("tangent"),n}function xh(i){i.traverse(t=>{var n;const e=t.geometry;if(!(!t.isMesh||!((n=t.material)!=null&&n.normalMap)||!(e!=null&&e.index)||e.attributes.tangent)&&!(!e.attributes.uv||!e.attributes.normal))try{e.computeTangents()}catch(s){}})}function Gg(i,t,e){Mo.length=0;const n=new Map,s=new Set(Fr().map(c=>c.id));for(const c of[...hh(),...Fr()]){const h=Fg(t,{vestment:s.has(c.id),probes:e});h.group.position.set(c.x,0,c.z),h.group.visible=c.visible,h.death=0,h.died=!1,h.phase=Math.random()*Math.PI*2,h.prevX=c.x,h.prevZ=c.z,i.add(h.group),n.set(c.id,h)}const r=Og(t,e);r.died=!1,r.death=0,r.pose=0,i.add(r.group);const a=new Te(.08,7,5),o=new de({color:16756768}),l=[];for(let c=0;c<16;c++){const h=new lt(a,o);h.visible=!1,h.frustumCulled=!1,i.add(h),l.push(h)}return{setProbeBlend(c){yo=Math.min(1,Math.max(0,(c- -17)/5));for(const h of Mo){const u=h.userData.probeShader;u&&(u.uniforms.probeMix.value=yo)}},reset(c){for(const h of c){const u=n.get(h.id);if(u){if(u.prevX=h.x,u.prevZ=h.z,u.group.position.set(h.x,0,h.z),u.group.rotation.set(0,0,0),u.group.scale.setScalar(1),u.flash=0,ni(u.flashMats,0),u.weak.visible=!1,!h.alive){u.died=!0,u.death=0,u.group.visible=!1;continue}u.death=0,u.died=!1,u.group.visible=h.visible}}},resetPriest(c){r.died=!1,r.death=0,r.pose=0,r.flash=0,r.group.visible=!0,r.group.rotation.set(0,0,0),r.group.position.set(c.x,0,c.z),r.halo.scale.setScalar(1),ni(r.flashMats,0),r.seam.visible=!1},syncPriest(c,h,u,d){if(!c.alive){r.died||(r.died=!0,r.death=1.05),r.death-=h;const C=1-Math.max(r.death,0)/1.05;r.group.visible=r.death>0,r.group.rotation.x=C*1.25,r.group.position.set(c.x,-C*.55,c.z),r.shadow.visible=!1,r.halo.scale.setScalar(Math.max(0,1-C)),r.seam.visible=!1,r.lArm.rotation.x=.9,r.rArm.rotation.x=.7,ii(r.lDigits,.85),ii(r.rDigits,.75),ni(r.flashMats,C<.45?(1-C/.45)*2.4:0);return}r.died=!1,r.death=0,r.group.visible=!0,r.group.rotation.set(0,c.yaw||0,Math.sin(u*.8)*.008);const f=Math.sin(u*1.15)*.015;r.group.position.set(c.x,f,c.z),r.shadow.visible=!0,r.shadow.position.y=.025-f,r.halo.rotation.z=u*.15;const m=c.phase==="rite",_=m?1.28:c.windup>0?.4:1.12,g=c.windup>0?-.85:m?-.25:-.12;r.lArm.rotation.set(g,0,_),r.rArm.rotation.set(g,0,-_),lc(r.cloths,u,.2,1);const p=c.windup>0?.62:m?.1+Math.sin(u*2.2)*.04:.2+Math.sin(u*1.35)*.07;ii(r.lDigits,p),ii(r.rDigits,p);const E=!!c.haloVisible,b=E&&d==="STATIC";r.halo.visible=!0;const y=E?1+Math.sin(u*7)*.06:1;r.halo.scale.setScalar(y),r.haloMat.opacity=b?1:E?.96:.9,r.haloMat.emissiveIntensity=b?2.4:E?1.55:.85,r.seam.visible=!!c.exposed;const B=c.windup>0||c.phase==="rite";r.lHand.visible=B,r.rHand.visible=B;const R=B?1.45:1;r.lHand.scale.setScalar(R),r.rHand.scale.setScalar(R),c.hurt>0&&(r.flash=.2),r.flash=Math.max(0,r.flash-h),ni(r.flashMats,r.flash>0?r.flash/.2*2.6:0)},sync(c,h,u,d){for(const f of c){const m=n.get(f.id);if(!f.alive){m.died||(m.died=!0,m.death=.85),m.death-=h;const b=1-Math.max(m.death,0)/.85;m.group.visible=m.death>0,m.group.rotation.x=b*1.35,m.group.position.set(f.x,-b*.4,f.z),m.shadow.visible=!1,m.group.scale.setScalar(1),m.lArm.rotation.x=.5+b*.6,m.rArm.rotation.x=.3+b*.9,ii(m.lDigits,.8),ii(m.rDigits,.9),m.lLeg.rotation.x=-.25*b,m.rLeg.rotation.x=.4*b,m.weak.visible=!1,ni(m.flashMats,b<.4?(1-b/.4)*2.4:0);continue}m.died=!1,m.death=0,m.group.visible=!!f.visible;const _=Math.hypot(f.x-m.prevX,f.z-m.prevZ);m.prevX=f.x,m.prevZ=f.z;const g=Math.sin(u*1.4+m.phase)*(_>.004?.02:.012);m.group.rotation.set(0,f.yaw||0,Math.sin(u*1.1+m.phase)*.012),m.group.position.set(f.x,g,f.z),m.shadow.visible=!0,m.shadow.position.y=.025-g;const p=_>.004?Math.sin(u*8+m.phase):Math.sin(u*1.6+m.phase)*.15;if(m.lLeg.rotation.x=p*.7,m.rLeg.rotation.x=-p*.7,m.lArm.rotation.x=-p*.45,m.rArm.rotation.x=p*.25+(f.windup>0?-.95:-.06),m.weak.visible=!!f.exposed,f.hurt>0&&(m.flash=.16),m.flash=Math.max(0,m.flash-h),m.flash>0)ni(m.flashMats,m.flash/.16*2.8),m.group.scale.setScalar(1.035);else if(f.cloaked&&f.visible){const b=.22+Math.sin(u*9)*.1;ni(m.flashMats,b,16766888),m.group.scale.setScalar(1)}else ni(m.flashMats,0),m.group.scale.setScalar(1);m.muzzle.scale.setScalar(f.windup>0?1.8:1);const E=.16+Math.sin(u*1.35+m.phase)*.05;ii(m.lDigits,E),ii(m.rDigits,f.windup>0?.8:.4),m.cloth&&lc(m.cloth,u,m.phase,.85),f.cloaked&&f.visible&&d!=="STATIC"&&f.reveal<.5&&(m.group.visible=Math.sin(u*46)>-.2)}},syncBolts(c){for(let h=0;h<l.length;h++){const u=l[h],d=c[h];if(!d){u.visible=!1;continue}u.visible=!0,u.position.set(d.x,d.y,d.z)}}}}const cc=["seam","choir","veil"],un={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},Wg=2.05,Xg=1.2,qg=2.62;function hc(i){return i==="seam"?"LIVE · THE SEAM":i==="choir"?"STATIC · THE HALO":i==="veil"?"DEAD AIR · THE VEIL":""}function uc(){return{id:"visor-priest",boss:!0,x:Is.x,y:Is.y,z:Is.z,yaw:0,hp:un.hp,maxHp:un.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:un.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function Yg(i,t){const e=cc[i.riteIndex%cc.length];i.phase="rite",i.rite=e,i.timer=un.riteWindow,i.exposed=e==="seam",i.haloVisible=e==="choir",i.veilUp=e==="veil",i.windup=0,t.push({type:"announce",rite:e})}function Mh(i){i.phase="recover",i.rite=null,i.exposed=!1,i.haloVisible=!1,i.veilUp=!1,i.windup=0,i.timer=un.recover,i.riteIndex+=1}function Zg(i,t,e){if(!i.alive||!i.active)return{priest:i,events:[]};const n=[],s={...i,hurt:Math.max(0,(i.hurt||0)-t),stun:Math.max(0,(i.stun||0)-t)};if(e&&e.player){const r=e.player.x-s.x,a=e.player.z-s.z;Math.hypot(r,a)>.05&&(s.yaw=Math.atan2(r,a))}return s.phase==="idle"?(s.timer-=t,s.timer<=0?Yg(s,n):s.stun>0?s.windup=0:s.windup>0?(s.windup-=t,s.windup<=0&&(s.windup=0,s.shotCooldown=un.shotGap,n.push({type:"shot"}))):(s.shotCooldown-=t,s.shotCooldown<=0&&(s.windup=un.shotWindup))):s.phase==="rite"?(s.windup=0,s.timer-=t,s.timer<=0&&(n.push({type:"fail",rite:s.rite,damage:un.failDamage}),Mh(s))):s.phase==="recover"&&(s.windup=0,s.timer-=t,s.timer<=0&&(s.phase="idle",s.timer=un.idle)),{priest:s,events:n}}function jg(i){return i>0?i*un.armor:0}function Kg(i,t){const e=jg(t);if(!i||!i.alive||e<=0)return{priest:i,dealt:0,killed:!1};const n=i.hp-e,s=n<=0;return{priest:{...i,hp:s?0:n,alive:!s,hurt:.22,phase:s?"dead":i.phase,veilUp:s?!1:i.veilUp,haloVisible:s?!1:i.haloVisible,exposed:s?!1:i.exposed,rite:s?null:i.rite},dealt:e,killed:s}}function fc(i,t){if(!i.alive||i.phase!=="rite")return{priest:i,broken:!1,dealt:0,killed:!1};if(!(i.rite==="seam"&&t.channel==="LIVE"&&t.weak&&!t.halo||i.rite==="choir"&&t.channel==="STATIC"&&t.halo||i.rite==="veil"&&t.channel==="DEAD_AIR"&&t.crossed))return{priest:i,broken:!1,dealt:0,killed:!1};const n=un.breakDamage,s=i.hp-n;if(s<=0)return{priest:{...i,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:n,killed:!0};const a={...i,hp:s,hurt:.28,broken:(i.broken||0)+1};return Mh(a),{priest:a,broken:!0,dealt:n,killed:!1}}function $g(i,t,e,n,s){if(!n||!n.alive||!n.hittable)return null;const r=[{y:Xg,r:.62,weak:!1,halo:!1},{y:Wg,r:.3,weak:!0,halo:!1}];n.haloVisible&&s==="STATIC"&&r.push({y:qg,r:.42,weak:!1,halo:!0});let a=null,o=e;for(const l of r){const c=dh(i.x,i.y,i.z,t.x,t.y,t.z,n.x,(n.y||0)+l.y,n.z,l.r);c==null||c<=.02||c>=o||(o=c,a={kind:"priest",id:n.id,t:c,weak:l.weak,halo:l.halo,x:i.x+t.x*c,y:i.y+t.y*c,z:i.z+t.z*c})}return a}const si={maxDist:16,cone:.3,stun:4.5,cooldown:16,retune:4.5,retuneMult:1.45,radius:16};function Jg({origin:i,dir:t,point:e,maxDist:n,cone:s,blocked:r}){const a=e.x-i.x,o=e.y-i.y,l=e.z-i.z,c=Math.hypot(a,o,l);if(!(c>.05)||c>n||r)return{aimed:!1,dist:c};const h=(a*t.x+o*t.y+l*t.z)/c;return{aimed:h>=Math.cos(s),dist:c,dot:h}}function Qg(i,t){const e=i.cooldownUntil||0;return e>t?{ok:!1,reason:"cooldown",cooldownUntil:e}:{ok:!0,cooldownUntil:t+si.cooldown}}function t_(i,t,e,n){return i.map(s=>!s.alive||s.room!=="chapel"||Math.hypot(s.x-t.x,s.z-t.z)>e?s:{...s,stun:Math.max(s.stun||0,n),windup:0})}function e_(i,t){const e=new me;e.position.set(.18,-.28,-.48),i.add(e);const n=new en({map:t.leather,normalMap:t.leatherNormal,roughnessMap:t.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});n.normalScale.set(.7,.7);const s=new en({map:t.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),r=new en({map:t.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new en({map:t.wood,normalMap:t.woodNormal,roughnessMap:t.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new en({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),l=new en({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),c=new de({color:6813439}),h=new lt(new Ot(.16,.055,.38),a);h.position.set(.02,-.02,.02);const u=new lt(new Ot(.11,.02,.3),o);u.position.set(.02,.012,.03);const d=new lt(new Ot(.07,.03,.04),r);d.position.set(.02,-.005,-.16),e.add(h,u,d);for(let I=0;I<2;I++)for(let K=0;K<4;K++){const ft=new lt(new Ot(.028,.012,.03),l);ft.position.set(-.012+I*.064,.026,.1-K*.055),e.add(ft)}const f=new lt(new Ot(.055,.028,.02),c);f.position.set(.02,-.004,-.2),e.add(f);const m=new lt(new ce(.006,.006,.22,6),r);m.position.set(.07,.02,-.12),m.rotation.z=-.4,m.rotation.x=.5;const _=new lt(new Te(.012,8,6),r);_.position.set(.11,.1,-.2);const g=new Te(.045,12,8);g.scale(1.2,.62,1.35);const p=new lt(g,a);p.position.set(.02,-.02,-.15);const E=new lt(g,a);E.position.set(.02,-.02,.19);const b=new lt(new Ot(.018,.04,.2),o);b.position.set(-.068,-.03,.04);const y=b.clone();y.position.x=.108,e.add(m,_,p,E,b,y);for(let I=0;I<4;I++){const K=new lt(new ce(.006,.006,.012,6),o);K.rotation.x=Math.PI/2,K.position.set(-.02+I%2*.028,-.01,-.08-Math.floor(I/2)*.02),e.add(K)}const B=new de({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:Pr,side:Ke}),R=new me;R.position.set(.02,-.004,-.24);const C=new lt(new be(.22,.05),B),U=new lt(new be(.22,.05),B);U.rotation.z=Math.PI/2;const w=new lt(new be(.08,.08),B);R.add(C,U,w),R.visible=!1,e.add(R);const x=new Ns(6813439,2.4,1.8,2);x.position.copy(f.position),e.add(x);const T=[];function L(I,K,ft){const X=new me,st=new Te(.046,14,10);st.scale(1.05,.48,1.35);const yt=new lt(st,n),ot=new lt(new Ot(.11,.07,.16),s);ot.position.set(0,.01,.12);const gt=new lt(new Te(.02,8,6),n);gt.scale.set(2.1,.7,.8),gt.position.set(0,.02,-.04),X.add(yt,ot,gt);const Pt=[.03,.038,.036,.028];for(let z=0;z<4;z++){const oe=-.034+z*.022,kt=Pt[z],zt=new me;zt.position.set(oe,.016,-.052);const Mt=new lt(new ce(.0075,.0095,kt,8),n);Mt.rotation.x=Math.PI/2,Mt.position.set(0,0,-kt*.42);const Yt=new me;Yt.position.set(0,-.002,-kt*.78),Yt.rotation.x=.22;const xt=new lt(new ce(.0055,.0075,kt*.82,8),n);xt.rotation.x=Math.PI/2,xt.position.set(0,0,-kt*.36),Yt.add(xt),zt.add(Mt,Yt),X.add(zt),T.push({knuckle:zt,tip:Yt,tipRest:.22})}const et=new me;et.position.set(ft>0?.042:-.042,.018,-.02),et.rotation.z=ft>0?-.7:.7;const ee=new lt(new ce(.0085,.011,.034,8),n);ee.rotation.x=.35,ee.position.set(0,.01,-.012);const Dt=new me;Dt.position.set(0,.006,-.028),Dt.rotation.x=.2;const Jt=new lt(new ce(.0065,.0085,.026,8),n);Jt.rotation.x=.45,Jt.position.set(0,0,-.014),Dt.add(Jt),et.add(ee,Dt),X.add(et),T.push({knuckle:et,tip:Dt,tipRest:.2}),X.position.set(I,-.05,K),X.rotation.y=ft,X.rotation.z=ft>0?.22:-.18,e.add(X)}L(-.07,.06,.5),L(.12,.08,-.62),e.traverse(I=>{var ft;I.castShadow=!1,I.receiveShadow=!1,I.frustumCulled=!1;const K=I.geometry;!I.isMesh||!((ft=I.material)!=null&&ft.normalMap)||!(K!=null&&K.index)||K.attributes.tangent||K.attributes.uv&&K.attributes.normal&&K.computeTangents()});let N=0,G=0,J=0,Z=0,Q=0,v="LIVE",P=!1;const F={x:.18,y:-.28,z:-.48};return{setChannel(I){P&&I!==v&&(G=.09,J=Math.max(J,.45)),P=!0,v=I,I==="LIVE"?(c.color.setHex(6813439),x.color.setHex(6813439),x.intensity=2.6):I==="STATIC"?(c.color.setHex(15921906),x.color.setHex(16777215),x.intensity=.8):(c.color.setHex(2761758),x.intensity=0)},fire(I){N=I==="spread"?.12:.055,I!=="none"&&(J=I==="spread"?.85:.62),Z=I==="none"?0:.045,B.color.set(I==="spread"?16053492:13040639),R.scale.setScalar(I==="spread"?1.35:1)},setVisible(I){e.visible=I},update(I,K,ft={}){const X=K>.35;Q+=I*(X?7.2+Math.min(K,9)*.28:1.5);const st=X?.004+Math.min(K,9)*.00115:.0016,yt=ft.strafe||0;N+=(0-N)*(1-Math.exp(-12*I)),G+=(0-G)*(1-Math.exp(-14*I)),J+=(0-J)*(1-Math.exp(-7*I));const ot=Math.sin(Q*1.3)*.05;for(let gt=0;gt<T.length;gt++){const Pt=T[gt],et=ot+J*(.42+gt%5*.05);Pt.knuckle.rotation.x=et,Pt.tip.rotation.x=Pt.tipRest+et*1.15}if(Z-=I,R.visible=Z>0,R.visible&&(R.rotation.z=Z*18),v==="STATIC"){const gt=.45+Math.random()*.55;c.color.setRGB(gt,gt,gt)}e.position.x=F.x+Math.cos(Q)*st*.7-yt*.01,e.position.y=F.y+Math.sin(Q*2)*st+(X?0:Math.sin(Q)*.003),e.position.z=F.z+N*.62,e.rotation.x=N*1.7+G*1.5+Math.sin(Q*2)*st*2.2,e.rotation.y=.06-N*.25,e.rotation.z=-yt*.035+Math.sin(Q)*st*1.4}}}function He(i,t,e,n=1,s=1){const r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);const a=new ci(r);return a.colorSpace=We,a.wrapS=Cn,a.wrapT=Cn,a.repeat.set(n,s),a.anisotropy=8,a.magFilter=an,a.minFilter=Sn,a}function Zi(i,t,e,n,s,r){i.fillStyle=s;for(let a=0;a<n;a++){const o=a*97%t,l=a*53%e;i.fillRect(o,l,r,r)}}function n_(i,t=1,e=1){const n=new ci(i);return n.colorSpace=Bn,n.wrapS=Cn,n.wrapT=Cn,n.repeat.set(t,e),n.anisotropy=4,n.magFilter=an,n.minFilter=Sn,n}function yh(i,t,e,n=1,s=1){const r=document.createElement("canvas");r.width=i,r.height=t;const a=r.getContext("2d"),o=a.createImageData(i,t);for(let l=0;l<t;l++)for(let c=0;c<i;c++){const[h,u,d]=e(c,l,i,t),f=(l*i+c)*4;o.data[f]=h,o.data[f+1]=u,o.data[f+2]=d,o.data[f+3]=255}return a.putImageData(o,0,0),n_(r,n,s)}function gi(i,t,e,n,s=1,r=1){const a=new Float32Array(i*t);for(let o=0;o<t;o++)for(let l=0;l<i;l++)a[o*i+l]=e(l,o,i,t);return yh(i,t,(o,l)=>{const c=a[l*i+(o+i-1)%i],h=a[l*i+(o+1)%i],u=a[(l+t-1)%t*i+o],d=a[(l+1)%t*i+o];let f=(c-h)*n,m=(u-d)*n;const _=1,g=Math.hypot(f,m,_)||1;return[f/g*127.5+127.5,m/g*127.5+127.5,_/g*127.5+127.5]},s,r)}function _i(i,t,e,n=1,s=1){return yh(i,t,(r,a)=>{const o=Math.max(0,Math.min(1,e(r,a,i,t)))*255;return[o,o,o]},n,s)}function i_(){const i=He(256,256,(v,P,F)=>{v.fillStyle="#5c564c",v.fillRect(0,0,P,F);const I=64;for(let K=0;K<F;K+=I)for(let ft=0;ft<P;ft+=I){const X=(ft*3+K*7)%17/17,st=X>.66?"#6a6358":X>.33?"#574f46":"#4e4840";v.fillStyle=st,v.fillRect(ft+2,K+2,I-4,I-4),v.fillStyle="rgba(20,16,12,0.35)",v.fillRect(ft,K,I,2),v.fillRect(ft,K,2,I)}v.fillStyle="rgba(30,22,14,0.28)",v.beginPath(),v.ellipse(48,180,28,10,.4,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(190,60,22,8,-.5,0,Math.PI*2),v.fill(),v.fillStyle="rgba(90,70,40,0.18)",v.fillRect(8,8,18,6)},8,6),t=He(256,256,(v,P,F)=>{v.fillStyle="#c8bfb2",v.fillRect(0,0,P,F),v.fillStyle="#b3a898";for(let I=0;I<P;I+=64)v.fillRect(I,0,3,F);v.fillStyle="#9c9184",v.fillRect(0,168,P,10),v.fillStyle="#6e655c",v.fillRect(0,214,P,42),v.fillStyle="#8a8176",v.fillRect(0,210,P,6),v.fillStyle="rgba(70,50,30,0.12)";for(let I=0;I<20;I++)v.fillRect(I*41%P,20+I*17%120,16,5);Zi(v,P,F,30,"rgba(255,255,255,0.04)",2)},3,2),e=He(128,128,(v,P,F)=>{v.fillStyle="#8d8478",v.fillRect(0,0,P,F),v.fillStyle="#756c62";for(let I=0;I<P;I+=16)v.fillRect(I,0,2,F);v.fillStyle="rgba(40,30,20,0.2)",v.fillRect(0,F-18,P,18),v.fillStyle="#a39888",v.fillRect(0,8,P,4)},2,2),n=He(128,128,(v,P,F)=>{v.fillStyle="#b7b1a6",v.fillRect(0,0,P,F),v.strokeStyle="#8e877c",v.lineWidth=3,v.strokeRect(1,1,P-2,F-2),v.fillStyle="#c9c3b6",v.fillRect(8,8,P-16,F-16),v.fillStyle="rgba(80,70,50,0.15)",v.fillRect(18,40,30,8),v.fillRect(70,80,22,6)},6,6),s=He(128,128,(v,P,F)=>{v.fillStyle="#5c3a22",v.fillRect(0,0,P,F);for(let I=0;I<F;I+=3){const K=70+I*17%50;v.strokeStyle=`rgb(${K+36}, ${K-4}, ${K-32})`,v.beginPath(),v.moveTo(0,I),v.quadraticCurveTo(P*.5,I+(I%9-4),P,I),v.stroke()}v.fillStyle="rgba(30,16,6,0.35)",v.fillRect(18,0,4,F),v.fillRect(78,0,3,F),v.beginPath(),v.ellipse(46,40,8,14,.2,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(96,90,6,10,-.3,0,Math.PI*2),v.fill()}),r=He(128,128,(v,P,F)=>{v.fillStyle="#16130f",v.fillRect(0,0,P,F),v.fillStyle="#e2a23a";const I=18;for(let K=-8;K<16;K++)v.beginPath(),v.moveTo(K*I,0),v.lineTo(K*I+I*.55,0),v.lineTo(K*I+I*.55-F,F),v.lineTo(K*I-F,F),v.fill()}),a=He(128,64,(v,P,F)=>{for(let I=0;I<F;I++)for(let K=0;K<P;K++){const X=140+(K*17+I*13)%40*2;v.fillStyle=`rgb(${X},${X},${X-10})`,v.fillRect(K,I,1,1)}v.fillStyle="rgba(0,0,0,0.45)";for(let I=0;I<F;I+=3)v.fillRect(0,I,P,1)}),o=He(128,128,(v,P,F)=>{v.fillStyle="#efe8de",v.fillRect(0,0,P,F),v.fillStyle="#fbf7f1",v.fillRect(10,10,P-20,F-20),v.strokeStyle="rgba(40,34,28,0.45)",v.lineWidth=3,v.strokeRect(8,8,P-16,F-16),v.strokeStyle="rgba(40,34,28,0.28)",v.beginPath(),v.moveTo(18,F/2),v.lineTo(P-18,F/2),v.moveTo(P/2,18),v.lineTo(P/2,F-18),v.stroke(),Zi(v,P,F,24,"rgba(60,48,30,0.16)",2)}),l=He(128,128,(v,P,F)=>{v.fillStyle="#ddd6cb",v.fillRect(0,0,P,F),v.fillStyle="#cbbba6",v.fillRect(0,F*.48,P,F*.52);for(let I=0;I<10;I++){const K=P*(.34+I*13%32/100);v.fillStyle=I%2?"rgba(110,82,52,0.45)":"rgba(86,64,40,0.32)",v.fillRect(K,F*.4,2+I%3,F*.58)}v.fillStyle="rgba(72,52,32,0.5)",v.fillRect(0,F-14,P,14),Zi(v,P,F,36,"rgba(70,54,32,0.28)",2)}),c=He(128,128,(v,P,F)=>{v.fillStyle="#e7e0d6",v.fillRect(0,0,P,F),v.fillStyle="#c9b49a",v.fillRect(0,F*.28,P,F*.72);for(let I=0;I<16;I++){const K=18+I*29%92;v.fillStyle=I%2?"rgba(96,70,42,0.72)":"rgba(62,46,30,0.55)",v.fillRect(K,28+I%5*6,2+I%4,F-24)}v.fillStyle="rgba(48,34,20,0.55)",v.fillRect(0,F-20,P,20),v.fillStyle="rgba(120,96,70,0.35)",v.beginPath(),v.ellipse(P*.62,F*.72,16,8,.4,0,Math.PI*2),v.fill(),Zi(v,P,F,28,"rgba(40,28,16,0.4)",2)}),h=He(64,64,(v,P,F)=>{v.fillStyle="#141414",v.fillRect(0,0,P,F),v.fillStyle="#2a2a2a";for(let I=-8;I<16;I++)v.fillRect(I*8,0,2,F);v.fillStyle="#3a3a3a",v.fillRect(0,4,P,3),v.fillStyle="#0a0a0a",v.fillRect(0,F-8,P,8)}),u=He(64,64,(v,P,F)=>{v.fillStyle="#c6a15a",v.fillRect(0,0,P,F),v.fillStyle="#e6c97a",v.fillRect(0,2,P,6),v.fillStyle="#8a6a32",v.fillRect(0,F-8,P,8),v.strokeStyle="rgba(60,40,10,0.45)",v.beginPath(),v.moveTo(8,0),v.lineTo(18,F),v.moveTo(40,0),v.lineTo(30,F),v.stroke()}),d=He(128,128,(v,P,F)=>{v.fillStyle="#f3efe6",v.fillRect(0,0,P,F);for(let I=8;I<P;I+=14)v.strokeStyle=I%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",v.beginPath(),v.moveTo(I,0),v.quadraticCurveTo(I+4,F/2,I-2,F),v.stroke();v.fillStyle="rgba(90,70,40,0.08)",v.fillRect(0,F-20,P,20)}),f=He(128,128,(v,P,F)=>{v.fillStyle="#3a2418",v.fillRect(0,0,P,F),Zi(v,P,F,80,"rgba(20,10,6,0.45)",2),Zi(v,P,F,40,"rgba(120,80,50,0.2)",1),v.strokeStyle="rgba(10,6,4,0.7)",v.lineWidth=3,v.beginPath(),v.moveTo(0,20),v.lineTo(P,28),v.stroke()}),m=He(128,128,(v,P,F)=>{v.fillStyle="#241810",v.fillRect(0,0,P,F),v.fillStyle="#1a110c";for(let I=0;I<P;I+=10)v.fillRect(I,0,3,F);v.fillStyle="rgba(80,50,30,0.15)",v.fillRect(0,0,P,8)}),_=He(256,256,(v,P,F)=>{v.fillStyle="#3e3832",v.fillRect(0,0,P,F);const I=64;for(let K=0;K<F;K+=I)for(let ft=0;ft<P;ft+=I)v.fillStyle=(ft+K)%128===0?"#4a433b":"#35302b",v.fillRect(ft+3,K+3,I-6,I-6);v.strokeStyle="rgba(166,132,70,0.35)",v.lineWidth=2;for(let K=0;K<=P;K+=I)v.beginPath(),v.moveTo(K,0),v.lineTo(K,F),v.stroke(),v.beginPath(),v.moveTo(0,K),v.lineTo(P,K),v.stroke()},4,4),g=He(64,64,(v,P,F)=>{v.fillStyle="#8d9298",v.fillRect(0,0,P,F),v.fillStyle="rgba(255,255,255,0.18)";for(let I=0;I<F;I+=3)v.fillRect(0,I,P,1);v.fillStyle="#5e646a",v.fillRect(0,0,P,4)}),p=gi(128,128,(v,P,F,I)=>{const K=v/F,ft=P/I,X=Math.min(K,1-K,ft,1-ft),st=Math.min(1,X*10),yt=Math.abs(K-.5)<.012||Math.abs(ft-.5)<.012?.2:1;return st*yt},3.2),E=_i(128,128,(v,P,F,I)=>{const K=v/F,ft=P/I,X=Math.min(K,1-K,ft,1-ft);return .28+(1-Math.min(1,X*7))*.42}),b=gi(64,64,(v,P,F,I)=>{const K=Math.sin(v*.85+P*.2)*.08,ft=P<5?.25:P>I-6?-.2:0;return .55+K+ft},2.4),y=_i(64,64,(v,P)=>.22+(Math.sin(v*.7)*.5+.5)*.12+(P%9===0?.08:0)),B=gi(128,128,(v,P,F)=>{const I=Math.sin(v/F*Math.PI*5)*.2,K=Math.sin(v*.85)*.04+Math.sin(P*1.15)*.03,ft=v%8===0?-.05:0;return .55+I+K+ft},3.6),R=_i(128,128,(v,P,F,I)=>.78+P/I*.1+(v%8===0?.06:0)),C=gi(256,256,(v,P)=>{const I=v%64,K=P%64;return Math.min(I,K,63-I,63-K)<3?.05:.72+Math.sin(v*.17)*Math.sin(P*.13)*.06},4.5,8,6),U=_i(256,256,(v,P)=>Math.min(v%64,P%64,63-v%64,63-P%64)<3?.95:.78,8,6),w=gi(256,256,(v,P)=>Math.min(v%64,P%64,63-v%64,63-P%64)<4?0:.66,5,4,4),x=_i(256,256,(v,P)=>Math.min(v%64,P%64)<4?.96:.84,4,4),T=gi(128,128,(v,P)=>{const F=Math.sin(P*.42+Math.sin(v*.07)*2.4)*.14,I=v%22===0?-.08:0;return .5+F+I},3.1),L=_i(128,128,(v,P,F,I)=>.48+(Math.sin(P*.35)*.5+.5)*.22+P/I*.08),N=gi(128,128,(v,P,F,I)=>{const K=Math.sin(v*1.6)*Math.sin(P*1.25)*.05,ft=Math.abs(P/I-.22)<.018?-.22:0;return .55+K+ft},2.6),G=_i(128,128,(v,P,F,I)=>.62+(Math.sin(v*.4+P*.2)*.5+.5)*.2+P/I*.08),J=He(256,64,(v,P,F)=>{v.fillStyle="#3c362e",v.fillRect(0,0,P,F),v.fillStyle="#2e2924";for(let I=0;I<P;I+=32)v.fillRect(I,0,2,F);v.strokeStyle="#e6c56a",v.lineWidth=3,v.strokeRect(6,8,P-12,F-16),v.lineWidth=2,v.beginPath(),v.ellipse(P/2,F/2,30,18,0,0,Math.PI*2),v.stroke(),v.beginPath(),v.ellipse(P/2,F/2,16,9,0,0,Math.PI*2),v.stroke(),v.fillStyle="#f0d48a",v.beginPath(),v.arc(P/2,F/2,3.5,0,Math.PI*2),v.fill()}),Z=s_(),Q=r_();return{floor:i,wall:t,ceiling:n,wood:s,hazard:r,snow:a,pearl:o,pearlWorn:l,shinGrime:c,joint:h,gold:u,cloth:d,leather:f,trench:m,nave:_,naveLight:Z,courtLight:Q,trim:e,brushed:g,pearlNormal:p,pearlRough:E,goldNormal:b,goldRough:y,clothNormal:B,clothRough:R,floorNormal:C,floorRough:U,naveNormal:w,naveRough:x,woodNormal:T,woodRough:L,leatherNormal:N,leatherRough:G,seal:J}}function s_(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="rgb(32,27,22)",n.fillRect(0,0,256,256);const s=(c,h)=>{const u=(c+7.6)/15.2,d=(-21.55-h)/13.2+.5;return[u*256,(1-d)*256]};n.fillStyle="rgb(12,10,8)";for(const[c,h]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]]){const[u,d]=s(c,h);n.fillRect(u-26,d-8,52,16)}const[r,a]=s(0,-27.55);n.fillRect(r-28,a-10,56,18),n.globalCompositeOperation="lighter";const o=(c,h,u,d)=>{const[f,m]=s(c,h),_=u*256,g=n.createRadialGradient(f,m,2,f,m,_);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=g,n.beginPath(),n.arc(f,m,_,0,Math.PI*2),n.fill()};o(-4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(-4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(-1.35,-27.15,.2,"rgba(255,186,90,1)"),o(1.35,-27.15,.2,"rgba(255,186,90,1)"),o(0,-27.5,.28,"rgba(220,160,70,0.55)"),n.fillStyle="rgba(255,214,170,0.16)",n.fillRect(256*.4,0,256*.2,256),n.globalCompositeOperation="source-over";const l=new ci(e);return l.colorSpace=li,l.magFilter=an,l.minFilter=Sn,l.anisotropy=4,l}function Sh(i,t){return[(i+16.05)/32.1,(-.25-t)/28.6+.5]}function r_(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="rgb(18,16,14)",n.fillRect(0,0,256,256);const s=(l,c)=>{const[h,u]=Sh(l,c);return[h*256,(1-u)*256]},r=(l,c,h,u)=>{const[d,f]=s(l-h/2,c-u/2),[m,_]=s(l+h/2,c+u/2),g=Math.min(d,m),p=Math.min(f,_);n.fillRect(g,p,Math.abs(m-d),Math.abs(_-f))};n.fillStyle="rgb(8,7,6)",r(0,-12.2,32,4.2),r(0,-2.2,4.6,.7),r(-1.75,2.05,1.8,.7),r(1.75,2.05,1.8,.7),r(-2.25,-.05,.7,3.6),r(2.25,-.05,.7,3.6);for(const[l,c]of[[-8,-6],[8,-6],[-8,6],[8,5.2]]){const[h,u]=s(l,c);n.beginPath(),n.arc(h,u,7,0,Math.PI*2),n.fill()}n.globalCompositeOperation="lighter";const a=(l,c,h,u)=>{const[d,f]=s(l,c),m=h*256,_=n.createRadialGradient(d,f,2,d,f,m);_.addColorStop(0,u),_.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=_,n.beginPath(),n.arc(d,f,m,0,Math.PI*2),n.fill()};a(0,1.2,.26,"rgba(255,244,220,0.62)"),a(0,1.2,.12,"rgba(255,250,240,0.45)"),a(0,-.05,.07,"rgba(198,214,216,0.4)"),a(-10,8.2,.09,"rgba(255,176,90,0.55)"),a(9.2,8.4,.08,"rgba(255,176,90,0.5)"),a(12.8,-5,.09,"rgba(255,168,70,0.6)"),a(-6,-9.2,.07,"rgba(255,196,130,0.28)"),a(4,-9.2,.07,"rgba(255,196,130,0.28)"),n.globalCompositeOperation="source-over";const o=new ci(e);return o.colorSpace=li,o.magFilter=an,o.minFilter=Sn,o.anisotropy=4,o.wrapS=kn,o.wrapT=kn,o}function dc(i,t,e="#16130f",n="#f4efe6"){const s=document.createElement("canvas");s.width=512,s.height=t?160:128;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,s.width,s.height),r.strokeStyle="#e2a23a",r.lineWidth=8,r.strokeRect(8,8,s.width-16,s.height-16),r.fillStyle=n,r.textAlign="center",r.textBaseline="middle",r.font="700 58px Trebuchet MS, sans-serif",r.fillText(i,s.width/2,t?68:s.height/2+2),t&&(r.font="600 28px Trebuchet MS, sans-serif",r.fillStyle="#e2a23a",r.fillText(t,s.width/2,118));const a=new ci(s);return a.colorSpace=We,a.anisotropy=4,a}function Ce(i){return new en({envMapIntensity:.32,...i})}function Tn(i){var t,e;return i!=null&&i.index&&((t=i.attributes)!=null&&t.uv)&&((e=i.attributes)!=null&&e.normal)&&!i.attributes.tangent&&i.computeTangents(),i}function ji(i,t,e){const n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n}function a_(i){const t=i_(),e={floor:Ce({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.03}),wall:Ce({map:t.wall,roughness:.88,metalness:.03}),ceiling:Ce({map:t.ceiling,roughness:.96,metalness:0}),trim:Ce({map:t.trim,roughness:.74,metalness:.08}),metal:Ce({color:7172984,roughness:.38,metalness:.62}),wood:Ce({map:ji(t.wood,2,2),normalMap:ji(t.woodNormal,2,2),roughnessMap:ji(t.woodRough,2,2),roughness:1,metalness:.04}),runner:Ce({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:Ce({color:1315344,roughness:.9}),brass:Ce({map:ji(t.gold,2,2),normalMap:ji(t.goldNormal,2,2),roughnessMap:ji(t.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:Ce({color:5065016,roughness:.92}),glass:Ce({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:Ce({map:t.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};e.hazard.side=Ke,e.floor.normalScale.set(.7,.7),e.wood.normalScale.set(.85,.85),e.wood.side=Ke,e.brass.normalScale.set(.4,.4);const n=new Map;function s(j,ht,wt,Lt,Qt,te,ve){const le=new Ot(Qt,te,ve);le.translate(ht,wt,Lt),n.has(j)||n.set(j,[]),n.get(j).push(le)}const r=[];let a=null;const o=3.6;let l=null;const c=Ce({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});c.side=Ke;const h=new Set(["pew-1","pew-2","pew-3","pew-4","altar","fountain-n","fountain-s-l","fountain-s-r","fountain-w","fountain-e"]);for(const j of oh){if(j.veil){l=new lt(new Ot(j.w,j.h,j.d),c),l.position.set(j.x,j.y,j.z),l.visible=!1,i.add(l);continue}if(j.door){a=new me;const ht=new lt(new Ot(j.w*.92,j.h*.98,j.d*.62),Ce({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),wt=Ce({color:14012098,roughness:.66,metalness:.05});for(const ve of[-j.h*.18,j.h*.16]){const le=new lt(new Ot(j.w*.62,j.h*.28,.045),wt);le.position.set(0,ve,j.d*.36),le.castShadow=!0,a.add(le)}const Lt=new lt(Tn(new Ot(j.w,.16,j.d*.8)),e.brass);Lt.position.y=j.h*.42;const Qt=new lt(Tn(new Ot(.14,j.h*.72,j.d*.78)),e.brass),te=new lt(new be(1.7,.5),new de({map:dc("RADIO","WING","#1c140c","#f0d48a")}));te.position.set(0,.35,j.d*.42),a.add(ht,Lt,Qt,te),a.position.set(j.x,j.y,j.z),i.add(a);continue}if(!h.has(j.id)){if(j.phaseGate){const ht=new lt(new Ot(j.w,j.h,j.d),e.hazard);ht.position.set(j.x,j.y,j.z),ht.castShadow=!0,ht.receiveShadow=!0,i.add(ht),r.push(ht);continue}s(j.mat,j.x,j.y,j.z,j.w,j.h,j.d)}}s("runner",0,.02,-1.2,2.6,.02,18),s("dark",-7.4,1.3,-13.15,6.4,2.6,.4),s("dark",-5.2,1.3,-13.15,2.4,2.6,.4),s("dark",5.4,1.3,-13.15,2.4,2.6,.4),s("dark",8.6,1.3,-13.15,6.4,2.6,.4),s("runner",0,.025,-21.4,1.5,.02,12),s("brass",0,2.55,-2.15,.12,3.5,.12),s("brass",0,4.15,-2.15,1.35,.08,1.35),s("plant",-3.3,.28,-2.5,.7,.45,.7),s("plant",3.35,.28,1.4,.7,.45,.7),s("plant",-3.2,.55,2.4,.45,.7,.45),s("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const j of[-12,-4,4,12])for(const ht of[-8,0,8])s("metal",j,6.85,ht,1.6,.08,.28);for(let j=-14;j<=14;j+=2.2)s("metal",j,4.55,-10.45,.06,.7,.06);s("metal",0,4.55,-10.45,28,.05,.05);for(const[j,ht]of n){const wt=ht.length===1?ht[0]:mh(ht);e[j].normalMap&&Tn(wt);const Lt=new lt(wt,e[j]);Lt.castShadow=j!=="floor"&&j!=="ceiling"&&j!=="runner",Lt.receiveShadow=!0,i.add(Lt)}const u=Ce({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.05});u.normalScale.set(.55,.55);const d=u.clone();d.lightMap=t.courtLight,d.lightMapIntensity=.48;const f=e.trim.clone();f.lightMap=t.courtLight,f.lightMapIntensity=.42;const m=e.brass.clone();m.lightMap=t.courtLight,m.lightMapIntensity=.28;const _=e.wall.clone();_.lightMap=t.courtLight,_.lightMapIntensity=.55,_.polygonOffset=!0,_.polygonOffsetFactor=-1,_.polygonOffsetUnits=-1;const g=e.floor.clone();g.lightMap=t.courtLight,g.lightMapIntensity=.64,g.polygonOffset=!0,g.polygonOffsetFactor=-1,g.polygonOffsetUnits=-1;const p=new V;function E(j){j.updateMatrixWorld(!0);const ht=j.geometry.attributes.position,wt=new Float32Array(ht.count*2);for(let Lt=0;Lt<ht.count;Lt++){p.fromBufferAttribute(ht,Lt).applyMatrix4(j.matrixWorld);const Qt=Sh(p.x,p.z);wt[Lt*2]=Qt[0],wt[Lt*2+1]=Qt[1]}return j.geometry.setAttribute("uv2",new Ve(wt,2)),j}function b(j,ht,wt,Lt,Qt){ht.normalMap&&Tn(j);const te=new lt(j,ht);return te.position.set(wt,Lt,Qt),te.castShadow=!0,te.receiveShadow=!0,i.add(te),te}function y(j,ht,wt,Lt,Qt,te){E(b(new Ot(Lt,Qt*.78,te*.92),d,j,ht-Qt*.08,wt)),E(b(new Ot(Lt*1.04,Qt*.18,te*1.08),f,j,ht+Qt*.4,wt))}y(0,.4,-2.2,4.5,.8,.5),y(-1.75,.4,2.05,1.7,.8,.5),y(1.75,.4,2.05,1.7,.8,.5),y(-2.25,.4,-.05,.5,.8,3.55),y(2.25,.4,-.05,.5,.8,3.55);const B=Ce({map:t.trim,roughness:.55,metalness:.18,envMapIntensity:.45,lightMap:t.courtLight,lightMapIntensity:.5}),R=b(new qn([new St(.15,.04),new St(.7,.06),new St(1.15,.1),new St(1.38,.28),new St(1.22,.4),new St(1.05,.34)],32),B,0,.02,-.05);R.castShadow=!0,E(R);const C=new lt(new tn(1.28,.045,8,28),m);C.rotation.x=Math.PI/2,C.position.set(0,.36,-.05),C.castShadow=!0,i.add(C),E(C),E(b(new ce(.06,.09,.34,12),m,0,.22,-.05));const U=Ce({color:1977392,roughness:.08,metalness:.62,envMapIntensity:.9,lightMap:t.courtLight,lightMapIntensity:.4}),w=new lt(new Si(1.05,28),U);w.rotation.x=-Math.PI/2,w.position.set(0,.16,-.05),w.receiveShadow=!0,i.add(w),E(w);const x=new lt(new be(32.1,28.6),g);x.rotation.x=-Math.PI/2,x.position.set(0,.016,-.25),x.receiveShadow=!0,x.castShadow=!1,i.add(x),E(x),x.geometry.attributes.tangent==null&&g.normalMap&&Tn(x.geometry);function T(j,ht,wt,Lt,Qt,te,ve){const le=new lt(j,_);le.position.set(ht,wt,Lt),le.rotation.y=Qt,le.castShadow=!1,le.receiveShadow=!0,i.add(le),E(le);const Pe=le.geometry.attributes.uv;for(let S=0;S<Pe.count;S++)Pe.setXY(S,Pe.getX(S)*te,Pe.getY(S)*ve);return Pe.needsUpdate=!0,le}T(new be(28.4,6.3),-15.95,3.25,-.25,Math.PI/2,6,2),T(new be(28.4,6.3),15.95,3.25,-.25,-Math.PI/2,6,2),T(new be(31.6,6.3),0,3.25,13.95,Math.PI,8,2),T(new be(14,6.3),-8.9,3.25,-14.05,0,4,2),T(new be(14,6.3),8.9,3.25,-14.05,0,4,2);const L=new lt(new be(6.4,8.2),new de({color:16774114}));L.rotation.x=Math.PI/2,L.position.set(0,7.12,1.2),L.castShadow=!1,L.receiveShadow=!1,i.add(L);const N=new lt(new ce(.55,.7,.12,12),e.brass);N.position.set(0,4.28,-2.15),N.rotation.x=.55,N.castShadow=!0,i.add(N);const G=new lt(new be(1.15,.7),new de({color:16757066}));G.position.set(10.7,1.85,-5.1),G.rotation.y=-Math.PI/2,i.add(G);const J=new lt(new be(1.7,1.7),Ce({map:t.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));J.rotation.x=-Math.PI/2,J.position.set(9.45,.03,0),J.receiveShadow=!0,i.add(J);const Z=new lt(new Ot(5.4,2.2,.06),e.glass);Z.position.set(9.4,1.8,8.7),i.add(Z);const Q=new lt(new Ot(.7,.45,.06),new de({map:t.snow}));Q.position.set(9.2,1.25,8.72),i.add(Q);const v=Q.clone();v.position.x=10.15,i.add(v);const P=new lt(new Ot(.08,.08,.08),new de({color:16757066}));P.position.set(10.55,1.55,8.7),i.add(P);function F(j,ht,wt,Lt,Qt,te,ve,le,Pe,S){const H=new lt(new be(te,ve),new de({map:dc(j,ht,Pe,S),transparent:!1}));return H.position.set(wt,Lt,Qt),H.rotation.y=le,i.add(H),H}F("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),F("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),F("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),F("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),F("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),F("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),F("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),F("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),F("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),F("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),F("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),F("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),F("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a");const I=new lt(new be(3.15,.34),Ce({map:t.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));I.receiveShadow=!0,I.rotation.x=-Math.PI/2,I.position.set(0,.045,Ds),i.add(I);const K=ah[0],ft=Ce({map:t.gold,normalMap:t.goldNormal,roughnessMap:t.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),X=new me,st=new lt(Tn(new qn([new St(.05,-.28),new St(.09,-.08),new St(.16,.08),new St(.28,.24),new St(.34,.32),new St(.3,.36)],20)),ft);st.rotation.z=-Math.PI/2,st.castShadow=!0;const yt=new lt(new Si(.26,16),Ce({color:2761752,roughness:.45,metalness:.4}));yt.rotation.y=Math.PI/2,yt.position.x=.34;const ot=new lt(Tn(new ce(.055,.07,.36,12)),e.brass);ot.rotation.z=Math.PI/2,ot.position.x=-.42;const gt=new lt(Tn(new Ot(.06,.36,.28)),e.brass);gt.position.set(-.62,0,0),gt.castShadow=!0;const Pt=new lt(Tn(new Ot(.1,.08,.16)),e.brass);Pt.position.set(-.62,-.2,0);const et=new lt(new Te(.07,12,10),new de({color:16757066}));et.position.x=.28;const ee=new lt(new tn(.55,.03,8,24),new de({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));ee.rotation.y=Math.PI/2,X.add(st,yt,ot,gt,Pt,et,ee);for(const[j,ht]of[[-.05,.1],[.08,.16],[.2,.26]]){const wt=new lt(new tn(ht,.012,6,16),e.brass);wt.rotation.y=Math.PI/2,wt.position.x=j,wt.castShadow=!0,X.add(wt)}X.position.set(K.x,K.y,K.z),i.add(X);const Dt=new Ns(16757082,7,5.5,2);Dt.position.set(K.x+.4,K.y,K.z),i.add(Dt);function Jt(j,ht){const wt=new lt(new ce(.035,.05,.46,6),e.brass);wt.position.set(j,.28,ht);const Lt=new lt(new Te(.045,6,6),new de({color:16757066}));Lt.position.set(j,.54,ht),i.add(wt,Lt)}Jt(-4.9,-18.2),Jt(4.9,-18.2),Jt(-4.9,-20.45),Jt(4.9,-20.45),Jt(-1.35,-27.15),Jt(1.35,-27.15);const z=new lt(new be(15.2,13.2),Ce({map:t.nave,normalMap:t.naveNormal,roughnessMap:t.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));z.material.normalScale.set(.8,.8),z.material.lightMap=t.naveLight,z.material.lightMapIntensity=.72,Tn(z.geometry),z.geometry.setAttribute("uv2",z.geometry.attributes.uv.clone()),z.rotation.x=-Math.PI/2,z.position.set(0,.018,-21.55),z.receiveShadow=!0,i.add(z);const oe=e.wood.clone();oe.lightMap=t.naveLight,oe.lightMapIntensity=.7;const kt=u.clone();kt.lightMap=t.naveLight,kt.lightMapIntensity=.66;const zt=e.brass.clone();zt.lightMap=t.naveLight,zt.lightMapIntensity=.45;const Mt=e.wall.clone();Mt.lightMap=t.naveLight,Mt.lightMapIntensity=.85,Mt.polygonOffset=!0,Mt.polygonOffsetFactor=-1,Mt.polygonOffsetUnits=-1;const Yt=new V;function xt(j,ht,wt,Lt,Qt){const te=j.clone(),ve=b(te,ht,wt,Lt,Qt);ve.updateMatrixWorld(!0);const le=te.attributes.position,Pe=new Float32Array(le.count*2);for(let S=0;S<le.count;S++)Yt.fromBufferAttribute(le,S).applyMatrix4(ve.matrixWorld),Pe[S*2]=(Yt.x+7.6)/15.2,Pe[S*2+1]=(-21.55-Yt.z)/13.2+.5;return te.setAttribute("uv2",new Ve(Pe,2)),ve}const A=xt(new be(14.2,6.2),Mt,-8.08,3.15,-21.75);A.rotation.y=Math.PI/2;const M=xt(new be(14.2,6.2),Mt,8.08,3.15,-21.75);M.rotation.y=-Math.PI/2;const W=xt(new be(15.4,6.2),Mt,0,3.15,-28.72);for(const j of[A,M,W]){j.castShadow=!1,j.updateMatrixWorld(!0);const ht=j.geometry.attributes.position,wt=j.geometry.attributes.uv2.array,Lt=j.geometry.attributes.uv;for(let Qt=0;Qt<ht.count;Qt++)Yt.fromBufferAttribute(ht,Qt).applyMatrix4(j.matrixWorld),wt[Qt*2]=(Yt.x+7.6)/15.2,wt[Qt*2+1]=(-21.55-Yt.z)/13.2+.5,Lt.setXY(Qt,Lt.getX(Qt)*4,Lt.getY(Qt)*2);j.geometry.attributes.uv2.needsUpdate=!0,Lt.needsUpdate=!0}const nt=new ce(.028,.028,2.28,10);nt.rotateZ(Math.PI/2);const rt=new ce(.03,.03,2.32,12);rt.rotateZ(Math.PI/2);const tt=new ce(.62,.62,2.22,16,1,!0,-.42,.84);tt.rotateZ(Math.PI/2);function It(j,ht){xt(new Ot(2.32,.05,.32),oe,j,.46,ht-.04),xt(rt,oe,j,.45,ht-.2);for(const Lt of[-1.02,1.02])xt(new Ot(.055,.4,.05),oe,j+Lt,.22,ht-.12),xt(new Ot(.055,.4,.05),oe,j+Lt,.22,ht+.06);for(const Lt of[-1.2,1.2])xt(new Ot(.07,.82,.4),oe,j+Lt,.44,ht+.02);const wt=xt(tt,oe,j,.68,ht-.36);wt.castShadow=!0,xt(nt,oe,j,.9,ht+.2),xt(new Ot(2.05,.028,.1),oe,j,.3,ht+.04),xt(new Ot(1.9,.035,.07),oe,j,.16,ht-.02)}for(const[j,ht]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])It(j,ht);xt(new Ot(2.15,.16,.62),kt,0,.1,-27.55),xt(new Ot(1.82,.2,.5),kt,0,.27,-27.55),xt(new Ot(1.5,.18,.4),kt,0,.45,-27.55),xt(new Ot(2.2,.07,.66),zt,0,.62,-27.55);const mt=b(new Ot(1.35,.32,.035),e.brass,0,.36,-27.26);mt.position.z=-27.26;const _t=new lt(new tn(.15,.016,8,20),e.brass);_t.position.set(0,.38,-27.22),i.add(_t);for(const j of[-.72,.72]){b(new ce(.028,.04,.22,8),e.brass,j,.76,-27.52);const ht=new lt(new Te(.035,8,6),new de({color:16757066}));ht.position.set(j,.9,-27.52),ht.castShadow=!1,i.add(ht)}const Ht=document.createElement("canvas");Ht.width=64,Ht.height=64;const at=Ht.getContext("2d"),Et=at.createRadialGradient(32,32,4,32,32,32);Et.addColorStop(0,"rgba(0,0,0,0.38)"),Et.addColorStop(1,"rgba(0,0,0,0)"),at.fillStyle=Et,at.fillRect(0,0,64,64);const Vt=new ci(Ht),Xt=new de({map:Vt,transparent:!0,depthWrite:!1});function At(j,ht,wt){const Lt=new lt(new Si(j,18),Xt);Lt.rotation.x=-Math.PI/2,Lt.position.set(ht,.028,wt),i.add(Lt)}At(1.7,0,-.05),At(1.3,0,-27.55);for(const[j,ht]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])At(1.2,j,ht);const ne=vo.find(j=>j.kind==="signal"),qt=vo.find(j=>j.kind==="health"),Kt=new me,k=new lt(new Ot(.38,.28,.38),e.brass),vt=new lt(new Ot(.16,.16,.16),new de({color:16757066}));vt.position.y=.22,Kt.add(k,vt),Kt.position.set(ne.x,.35,ne.z),i.add(Kt);const $=new me,it=new lt(new Ot(.36,.22,.26),Ce({color:15196888,roughness:.6})),Rt=new lt(new Ot(.22,.04,.28),Ce({color:9255466,roughness:.5}));Rt.position.y=.08,$.add(it,Rt),$.position.set(qt.x,.2,qt.z),i.add($);const Ct=new Wm(15261908,3813928,.74);i.add(Ct);const Y=new Jl(16773596,2.35);Y.position.set(8,18,10),Y.castShadow=!0,Y.shadow.mapSize.set(1024,1024),Y.shadow.camera.near=2,Y.shadow.camera.far=48,Y.shadow.camera.left=-16,Y.shadow.camera.right=16,Y.shadow.camera.top=16,Y.shadow.camera.bottom=-16,Y.shadow.bias=-4e-4,Y.shadow.normalBias=.035,Y.shadow.radius=2,Y.target.position.set(0,0,-8),i.add(Y,Y.target);const ct=new Jl(16769732,.7);ct.position.set(-10,8,-6),ct.castShadow=!1,i.add(ct);const pt=[];function dt(j,ht,wt,Lt=36,Qt=8){const te=new Ns(16757082,Lt,Qt,2);return te.position.set(j,ht,wt),i.add(te),pt.push(te),te}dt(0,3.2,-2.1,18,7),dt(-10,2.4,8.2,28,8),dt(9.2,2.6,8.4,26,7),dt(13.5,2.8,-5,34,8),dt(-6,3.4,-8,22,8),dt(4,3.4,-8,20,8),dt(0,5.2,2,30,14),dt(0,4.4,-21.5,34,16),dt(0,3.3,-26.4,16,7);const Ft=dt(13.4,2.6,1.2,24,6);let Me=0,ze=0,Ye=!1,Ie=!1,Ge=0,fn=0;return i.background=new jt(11774879),i.fog=new Oo(11774879,12,40),{colliders:lh(),gates:r,cache:Kt,aid:$,textures:t,setDoor(j,ht=!1){ze=j?1:0,ht&&(Me=ze,a&&(a.position.y=o+Me*6.4))},setVeil(j,ht){if(!l||(l.visible=!!j,!j))return;const wt=ht==="DEAD_AIR";c.opacity=wt?.16:.94,c.depthWrite=!wt,c.emissiveIntensity=wt?.62:.3},setHijack({aimed:j,hot:ht}){Ye=!!j,Ie=!!ht},pulseHijack(){Ge=.48},setChannel(j){const ht=i.fog;j==="STATIC"?(ht.color.setHex(10133668),ht.near=12,ht.far=38,i.background.setHex(9475738)):j==="DEAD_AIR"?(ht.color.setHex(2764856),ht.near=10,ht.far=36,i.background.setHex(2369584)):(ht.color.setHex(11774879),ht.near=12,ht.far=40,i.background.setHex(11774879));for(const wt of r)wt.material.opacity=j==="DEAD_AIR"?.14:.97,wt.material.depthWrite=j!=="DEAD_AIR",wt.material.emissiveIntensity=j==="DEAD_AIR"?.45:.18},setPickup(j,ht){j==="cache"&&(Kt.visible=ht),j==="aid"&&($.visible=ht)},update(j,ht,wt){if(wt){const te=Math.round(wt.x/4)*4,ve=Math.round(wt.z/4)*4;Y.position.set(te+8,18,ve+10),Y.target.position.set(te,0,ve)}const Lt=Math.min(.05,Math.max(0,j-fn||0));if(fn=j,Me+=(ze-Me)*Math.min(1,Lt*4.2),a&&(a.position.y=o+Me*6.4),Ge>0&&(Ge=Math.max(0,Ge-Lt)),ee.material.opacity=Ge>0?Ge/.48:0,ee.scale.setScalar(Ge>0?1+(1-Ge/.48)*2.4:1),ft.emissive.setHex(Ie?16774877:13939034),ft.emissiveIntensity=Ie?1.15:Ye?.85:.12,et.material.color.setHex(Ie?16773576:16757066),Dt.color.setHex(Ie?16769696:16757082),Dt.intensity=Ie?22:Ye?14:7,Ft.intensity=18+Math.sin(j*28)*10+(Math.random()<.04?-12:0),ht==="STATIC"){const Qt=1+Math.sin(j*6)*.08;Kt.scale.setScalar(Qt)}else Kt.scale.setScalar(1);G.material.color.setHSL(.09,.85,ht==="DEAD_AIR"?.18:.55)},practicals:pt}}function o_(i,t){const e=new Hr;e.background=new jt(2893343);const n=new lt(new Ot(18,9,18),new de({color:2893343,side:qe}));e.add(n);const s=new lt(new be(18,18),new de({color:3814188}));s.rotation.x=-Math.PI/2,s.position.y=-1.6,e.add(s);const r=new V(0,1.6,-20),a=[[-4.9,.55,-18.2],[4.9,.55,-18.2],[-4.9,.55,-20.45],[4.9,.55,-20.45],[-1.35,.95,-27.15],[1.35,.95,-27.15]],o=new de({color:16757066});for(const[h,u,d]of a){const f=new lt(new Te(.22,10,8),o);f.position.set(h-r.x,u-r.y,d-r.z),e.add(f)}const l=new lt(new Ot(2.3,1.1,.7),new de({color:13017434}));l.position.set(0,.55-r.y,-27.55-r.z),e.add(l);const c=new lt(new tn(.7,.06,8,24),new de({color:15123818}));return c.position.set(0,2.2-r.y,-26.55-r.z),e.add(c),t.fromScene(e,.04).texture}function l_(i,t){const e=new Hr;e.background=new jt(13156274);const n=new lt(new Ot(34,12,30),new de({color:13156274,side:qe}));e.add(n);const s=new V(0,1.55,.2),r=new lt(new be(34,30),new de({color:6972248}));r.rotation.x=-Math.PI/2,r.position.y=-s.y,e.add(r);const a=new lt(new be(8,10),new de({color:16774888}));a.rotation.x=Math.PI/2,a.position.set(0,6.9-s.y,1.2-s.z),e.add(a);const o=new lt(new Si(1.15,20),new de({color:1977392}));o.rotation.x=-Math.PI/2,o.position.set(0,.2-s.y,-.05-s.z),e.add(o);const l=new lt(new tn(1.3,.08,8,24),new de({color:13017434}));l.rotation.x=Math.PI/2,l.position.set(0,.4-s.y,-.05-s.z),e.add(l);const c=new de({color:16757066});for(const[h,u,d]of[[-10,2.3,8.2],[9.2,2.3,8.4],[13.2,1.9,-5]]){const f=new lt(new Te(.55,10,8),c);f.position.set(h-s.x,u-s.y,d-s.z),e.add(f)}return t.fromScene(e,.04).texture}const pc="channel-surfer-best",c_={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},h_={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function mc(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function gc(i,t,e,n){return i+(t-i)*(1-Math.exp(-12*n))}function Aa(i,t){const e=Math.cos(t),n=Math.sin(t),s=Math.sin(i),r=Math.cos(i),a={x:-s*e,y:n,z:-r*e},o={x:r,y:0,z:-s},l={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:l}}function u_(i,t){const e=new Fm({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(960,780,!1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.outputColorSpace=We,e.toneMapping=Rc,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Ec;const n=new Hr,s=new mo(e);n.environment=s.fromScene(new Ym,.012).texture;const r=o_(e,s),a=l_(e,s);s.dispose();const o=new hn(72,960/780,.08,90);n.add(o);const l=new Ns(16770756,14,4.5,2);l.position.set(.05,.02,-.25),o.add(l);const c=a_(n),h=new ri(n,o,480,390,8);h.kernelRadius=.18,h.minDistance=.001,h.maxDistance=.06;const u=Gg(n,c.textures,{aisle:r,court:a}),d=e_(o,c.textures),f=72,m=new Float32Array(f*3),_=new Float32Array(f*3),g=new De;g.setAttribute("position",new Ve(m,3)),g.setAttribute("color",new Ve(_,3));const p=new Vm(g,new sh({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));n.add(p);const E=document.createElement("canvas");E.width=64,E.height=64;const b=E.getContext("2d"),y=b.createRadialGradient(32,32,1,32,32,30);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.35,"rgba(255,214,150,0.75)"),y.addColorStop(1,"rgba(255,160,60,0)"),b.fillStyle=y,b.fillRect(0,0,64,64);const B=new ci(E);B.colorSpace=We;const R=[];for(let Y=0;Y<12;Y++){const ct=new zm(new eh({map:B,transparent:!0,depthWrite:!1,blending:Pr}));ct.visible=!1,ct.frustumCulled=!1,n.add(ct),R.push(ct)}const C=28,U=new Float32Array(C*6),w=new Float32Array(C*6),x=new De;x.setAttribute("position",new Ve(U,3)),x.setAttribute("color",new Ve(w,3)),n.add(new Hm(x,new ih({vertexColors:!0,transparent:!0,opacity:.95})));let T="title",L=null,N=[],G=null,J=[],Z=[],Q=!1,v=!1,P=!1,F=1.25,I=0,K=0,ft=!1,X="",st="",yt="",ot=[],gt=[],Pt=[],et={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},ee=mc(1),Dt=0,Jt=0,z=0,oe=0,kt=0,zt=0,Mt=0,Yt="",xt=0,A=0,M="",W=0;const nt=[],rt=new Set;let tt=0,It="",mt=!1;try{tt=Number(localStorage.getItem(pc))||0}catch(Y){tt=0}function _t(Y,ct,pt,dt,Ft){for(let Me=0;Me<Ft;Me++)ot.push({x:Y,y:ct,z:pt,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:dt});ot.length>f&&ot.splice(0,ot.length-f),gt.push({x:Y,y:ct,z:pt,life:.14,max:.14,color:dt}),gt.length>R.length&&gt.shift()}function Ht(Y){Yt=Y,xt=.95,A+=1}function at(Y,ct){rt.has(Y)||(rt.add(Y),nt.push(ct))}function Et(Y){It!==Y&&(It=Y,c.setChannel(Y),d.setChannel(Y),t.setChannel(Y))}function Vt(){return lh({doorOpen:Q,veilUp:!!(G&&G.alive&&G.veilUp)})}function Xt(Y){return{x:Y.x,y:Y.y,z:Y.z,yaw:Y.yaw||0,pitch:0,vx:0,vz:0}}function At(){L=Ql(),N=[...hh(),...Fr()],G=uc(),J=lg(),Q=!1,v=!1,P=!1,F=1.25,I=0,K=0,ft=!1,X="",st="",yt="",Z=[],ot=[],gt=[],Pt=[],et=Xt(eg),ee=mc((Date.now()&65535)+3),Dt=0,z=0,oe=.2,kt=0,zt=0,Mt=0,mt=!1,Yt="",xt=0,M="",W=0,nt.length=0,rt.clear(),u.reset(N),u.resetPriest(G),c.setDoor(!1,!0),c.setVeil(!1,"LIVE"),Et("LIVE")}function ne(){L={...Ql(),signal:80},N=[...N.filter(Y=>Y.room!=="chapel"),...Fr().map(Y=>({...Y,dormant:!1}))],G={...uc(),active:!0},Q=!0,P=!1,F=1.25,I=0,K=0,ft=!1,X="",st="",yt="",Z=[],ot=[],gt=[],Pt=[],et=Xt(ng),oe=.45,mt=!1,v=!1,Mt=0,zt=0,kt=0,u.reset(N),u.resetPriest(G),c.setDoor(!0,!0),c.setVeil(!1,"LIVE"),Et("LIVE"),Ht("RADIO WING")}At();function qt(){if(Dt>0&&!(tt>0&&Dt>=tt)){tt=Dt;try{localStorage.setItem(pc,String(tt))}catch(Y){}}}function Kt(Y,ct){const pt=fg(L,Y);pt.result==="ok"?(L=pt.state,z+=1,Mt=.45,Ht(c_[L.channel]),t.play(h_[L.channel]),Et(L.channel)):pt.result==="denied"&&(Ht("NO SIGNAL"),t.play("deny"))}function k(){const Y=mg(L);if(L=Y.state,!Y.fired)return;const{forward:ct,right:pt,up:dt}=Aa(et.yaw,et.pitch),Ft={x:et.x,y:et.y,z:et.z},Me=bg(ct,pt,dt,Y.profile.pellets,Y.profile.spread,Math.random),ze={x:Ft.x+ct.x*.42+pt.x*.14-dt.x*.1,y:Ft.y+ct.y*.42+pt.y*.14-dt.y*.1,z:Ft.z+ct.z*.42+pt.z*.14-dt.z*.1},Ye=Dt<I,Ie=Y.profile.kind==="hitscan"||Ye?[.45,.97,1]:[.82,.82,.82],Ge=Vt();let fn=!1,j=!1;kt=Math.min(.07,kt+(Y.profile.kind==="spread"?.05:.014)),d.fire(Y.profile.kind),t.play(Y.profile.kind==="spread"?"static":"live");for(const ht of Me){const wt=Sg(Ft,ht,Y.profile.range,N,Ge),Lt=G.alive?$g(Ft,ht,Y.profile.range,G,L.channel):null,Qt=!!(Lt&&(!wt||Lt.t<wt.t)),te=Qt?Lt:wt,ve=Math.min(Y.profile.range,22),le=te?{x:te.x,y:te.y,z:te.z}:{x:Ft.x+ht.x*ve,y:Ft.y+ht.y*ve,z:Ft.z+ht.z*ve};if((!te||te.t>.45)&&Pt.push({a:ze,b:le,color:Ie,life:.16}),Qt){const D=ec(Y.profile.damage,Lt.t,Y.profile.range,Y.profile.falloff)*(Ye?si.retuneMult:1),O=Kg(G,D);if(G=O.priest,O.dealt>0&&(fn=!0),_t(Lt.x,Lt.y,Lt.z,Ye?[.45,.97,1]:[.96,.94,.88],5),!O.killed){const ut=fc(G,{channel:L.channel,weak:Lt.weak,halo:Lt.halo,crossed:!1});ut.broken?(vt(ut),j=!0):G=ut.priest}continue}if(!wt)continue;if(wt.kind==="world"){_t(wt.x,wt.y,wt.z,[.75,.68,.55],6);continue}const Pe=N.findIndex(D=>D.id===wt.id);if(Pe<0||!N[Pe].alive)continue;const S=Eg(N[Pe],Dt),H=ec(Y.profile.damage,wt.t,Y.profile.range,Y.profile.falloff)*(Ye?si.retuneMult:1),q=wg(S.enemy,{weak:wt.weak,damage:H});if(q.enemy.hurt=.1,N[Pe]=q.enemy,fn=q.dealt>0,_t(wt.x,wt.y,wt.z,[.96,.94,.9],8),q.killed){const D=_g(L,{distance:wt.t,channel:L.channel,burst:S.burst});L=D.state,_t(wt.x,wt.y,wt.z,[1,.68,.25],18),t.play("death"),Ht(D.aggressive?"AGGRESSIVE +"+D.amount:"SIGNAL +"+D.amount)}}fn&&!j&&t.play("hit"),Pt.length>C&&Pt.splice(0,Pt.length-C)}function vt(Y){G=Y.priest,Y.broken&&(t.play("rite-break"),_t(G.x,2.15,G.z,[.96,.78,.32],20),Mt=Math.max(Mt,.34),G.alive&&Ht("RITE BROKEN"))}function $(){const Y=G.x,ct=1.72,pt=G.z,dt=et.x-Y+(ee()-.5)*.22,Ft=1.15-ct+(ee()-.5)*.12,Me=et.z-pt+(ee()-.5)*.22,ze=Math.hypot(dt,Ft,Me)||1,Ye=un.boltSpeed;return{x:Y,y:ct,z:pt,vx:dt/ze*Ye,vy:Ft/ze*Ye,vz:Me/ze*Ye,damage:un.boltDamage,life:2.6}}function it(Y,ct){const pt=dg(L,Y);if(L=pt.state,pt.forced&&(Ht("NO SIGNAL"),t.play("nosignal"),Mt=.55,Et(L.channel)),ct.channel)Kt(ct.channel);else if(ct.cycle){const D=wn(ct.cycle,-3,3),O=D>0?1:-1;for(let ut=0;ut!==D;ut+=O)Kt(hg(L.channel,O))}et.yaw-=ct.lookX*.00215,et.pitch=wn(et.pitch-ct.lookY*.00215,-1.35,1.35);const dt=N.some(D=>D.alive&&D.room!=="chapel");if(!Q&&!dt&&(Q=!0,Ht("RADIO WING"),t.play("door"),at("wing","North door is open. The radio wing is still on the air.")),Q&&et.z<-15.05){for(let D=0;D<N.length;D++)N[D].room==="chapel"&&N[D].dormant&&(N[D]={...N[D],dormant:!1});G.active||(G={...G,active:!0},at("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}const Ft=ah[0],{forward:Me}=Aa(et.yaw,et.pitch),ze=!ph(et.x,et.y,et.z,Ft.x,Ft.y,Ft.z,Vt());ft=Jg({origin:{x:et.x,y:et.y,z:et.z},dir:Me,point:Ft,maxDist:si.maxDist,cone:si.cone,blocked:ze}).aimed;const Ie=Dt<I,Ge=K>Dt;if(ft?X=Ie?"PA RETUNED":Ge?"PA RECHARGING":"E  RETUNE PA":X=Ie?"PA RETUNED":"",st=Ie?"hot":ft&&Ge?"cool":ft?"ready":"",ct.use&&ft){const D=Qg({cooldownUntil:K},Dt);D.ok?(K=D.cooldownUntil,I=Dt+si.retune,N=t_(N,Ft,si.radius,si.stun),Ht("PA RETUNE"),t.play("hijack"),_t(Ft.x,Ft.y,Ft.z,[.45,.97,1],28),Mt=Math.max(Mt,.28),zt=Math.max(zt,.035),c.pulseHijack()):t.play("deny")}Q&&Math.hypot(et.x-Ft.x,et.z-Ft.z)<8&&at("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const fn=Zg(G,Y,{player:{x:et.x,z:et.z}});G=fn.priest;for(const D of fn.events)if(D.type==="announce")Ht(hc(D.rite)),t.play("rite");else if(D.type==="fail"){const O=nc(L,D.damage);L=O.state,O.hit&&(t.play("rite-fail"),zt=Math.max(zt,.045)),Ht("RITE HOLDS")}else D.type==="shot"&&Z.length<16&&(Z.push($()),t.play("bolt"));yt=G.alive&&G.phase==="rite"?hc(G.rite):"";const j=Vt();for(let D=0;D<N.length;D++){if(!N[D].alive)continue;const O=Cg(N[D],Y,{channel:L.channel,player:{x:et.x,y:1.2,z:et.z},colliders:j,allies:N,rng:ee});N[D]=O.enemy,O.shot&&Z.length<16&&(Z.push(O.shot),t.play("bolt"))}const ht=uh(L.channel),wt=-Math.sin(et.yaw),Lt=-Math.cos(et.yaw),Qt=Math.cos(et.yaw),te=-Math.sin(et.yaw);let ve=0,le=0;ct.forward&&(ve+=wt,le+=Lt),ct.back&&(ve-=wt,le-=Lt),ct.right&&(ve+=Qt,le+=te),ct.left&&(ve-=Qt,le-=te);const Pe=Math.hypot(ve,le);Pe>0&&(ve=ve/Pe*ht,le=le/Pe*ht),et.vx=gc(et.vx,ve,12,Y),et.vz=gc(et.vz,le,12,Y);const S=fh(et.x,et.z,et.vx*Y,et.vz*Y,pe.playerRadius,j,L.channel,tg);if(et.x=S.x,et.z=S.z,G.alive&&G.phase==="rite"&&G.rite==="veil"&&L.channel==="DEAD_AIR"&&et.z<ig){const D=fc(G,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});D.broken&&vt(D)}oe>0?oe-=Y:ct.fireDown?L.channel==="DEAD_AIR"?mt||(mt=!0,t.play("deny"),d.fire("none")):(mt=!1,k()):mt=!1;const H=[];for(const D of Z){const O=Math.hypot(D.vx,D.vy,D.vz)||1,ut=O*Y,bt=ko(D.x,D.y,D.z,D.vx/O,D.vy/O,D.vz/O,ut,Vt());if(bt){_t(bt.x,bt.y,bt.z,[1,.62,.22],3);continue}if(D.x+=D.vx*Y,D.y+=D.vy*Y,D.z+=D.vz*Y,D.life-=Y,D.life<=0||D.y<0||D.y>6)continue;const Ut=D.x-et.x,Nt=D.z-et.z;if(Ut*Ut+Nt*Nt<.4*.4&&D.y>.25&&D.y<1.75){const Zt=nc(L,D.damage);L=Zt.state,Zt.hit&&(t.play("hurt"),zt=.05,Mt=Math.max(Mt,.2)),_t(D.x,D.y,D.z,[1,.5,.18],6);continue}H.push(D)}Z=H;for(const D of J){if(D.taken||!Ag(D,L.channel)||Math.hypot(et.x-D.x,et.z-D.z)>1.15)continue;const O=Tg(L,D);O.took&&(L=O.state,D.taken=!0,t.play("pickup"),Ht(D.kind==="signal"?"SIGNAL CACHE":"AID KIT"))}Dt>.45&&at("intro","LIVE — precise cyan bolt. Keys 1–3, wheel, or Q."),(Math.hypot(et.x,et.z)<7.5||Dt>11)&&at("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot(et.x-10.4,et.z)<6.2||Dt>20)&&at("gate","Striped shutter is DEAD AIR. You move faster and cannot fire."),et.x>12.1&&J.some(D=>D.cloaked&&!D.taken)&&at("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const q=N.filter(D=>D.alive&&D.room!=="chapel");if(q.length===1&&q[0].id==="alley"&&at("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),W>0?(W-=Y,W<=0&&(M="")):nt.length&&(M=nt.shift(),W=6.2),L.health<=0){v=Q,T="dead",t.play("ui");return}!G.alive&&Q?(P||(P=!0,N=N.map(D=>D.room==="chapel"&&D.alive?{...D,alive:!1,hittable:!1}:D),L=Bo(L,40),Ht("OFF THE AIR"),t.play("death"),_t(G.x,2.1,G.z,[.96,.8,.38],34),_t(G.x,2.75,G.z,[.9,.72,.28],16),F=1.25),F-=Y,F<=0&&(T="clear",qt(),t.play("pickup"))):F=1.25}function Rt(Y){for(let ct=ot.length-1;ct>=0;ct--){const pt=ot[ct];pt.life-=Y,pt.vy-=7*Y,pt.x+=pt.vx*Y,pt.y+=pt.vy*Y,pt.z+=pt.vz*Y,pt.life<=0&&ot.splice(ct,1)}for(let ct=0;ct<f;ct++){const pt=ot[ct],dt=ct*3;if(!pt){m[dt+1]=-40,_[dt]=_[dt+1]=_[dt+2]=0;continue}m[dt]=pt.x,m[dt+1]=pt.y,m[dt+2]=pt.z;const Ft=wn(pt.life*3,0,1);_[dt]=pt.color[0]*Ft,_[dt+1]=pt.color[1]*Ft,_[dt+2]=pt.color[2]*Ft}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0;for(let ct=gt.length-1;ct>=0;ct--)gt[ct].life-=Y,gt[ct].life<=0&&gt.splice(ct,1);for(let ct=0;ct<R.length;ct++){const pt=R[ct],dt=gt[ct];if(!dt){pt.visible=!1;continue}const Ft=dt.life/dt.max;pt.visible=!0,pt.position.set(dt.x,dt.y,dt.z),pt.scale.setScalar(.18+(1-Ft)*.55),pt.material.opacity=Ft,pt.material.color.setRGB(dt.color[0],dt.color[1],dt.color[2])}for(let ct=Pt.length-1;ct>=0;ct--)Pt[ct].life-=Y,Pt[ct].life<=0&&Pt.splice(ct,1);for(let ct=0;ct<C;ct++){const pt=Pt[ct],dt=ct*6;if(!pt){U[dt+1]=-40,U[dt+4]=-40;continue}U[dt]=pt.a.x,U[dt+1]=pt.a.y,U[dt+2]=pt.a.z,U[dt+3]=pt.b.x,U[dt+4]=pt.b.y,U[dt+5]=pt.b.z;for(let Ft=0;Ft<2;Ft++)w[dt+Ft*3]=pt.color[0],w[dt+Ft*3+1]=pt.color[1],w[dt+Ft*3+2]=pt.color[2]}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}function Ct(Y){if(T==="title"){o.position.set(Math.sin(Jt*.16)*.5,2.5,9.3),o.lookAt(0,1.2,-1.4),d.setVisible(!1);return}d.setVisible(!0),zt*=Math.exp(-9*Y),kt*=Math.exp(-11*Y),o.position.set(et.x+(Math.random()-.5)*zt,et.y,et.z+(Math.random()-.5)*zt),o.rotation.order="YXZ",o.rotation.y=et.yaw,o.rotation.x=et.pitch-kt,o.rotation.z=0;const{right:ct}=Aa(et.yaw,0),pt=T==="play"?et.vx*ct.x+et.vz*ct.z:0;d.update(Y,T==="play"?Math.hypot(et.vx,et.vz):0,{strafe:pt})}return{get mode(){return T},start(){At(),T="play",t.play("ui")},resume(){T==="pause"&&(T="play")},pause(){T==="play"&&(T="pause")},replay(){v?ne():At(),T="play",t.play("ui")},toTitle(){At(),T="title"},update(Y,ct){const pt=Math.min(.05,Math.max(0,Y)||0);Jt+=pt,T==="play"&&(Dt+=pt,it(pt,ct)),xt>0&&(xt-=pt,xt<=0&&(Yt="")),Mt=Math.max(0,Mt-pt*3.2),Et(T==="title"?"LIVE":L.channel);const dt=J.find(ze=>ze.cloaked),Ft=J.find(ze=>ze.kind==="health");c.setPickup("cache",!!(dt&&!dt.taken&&L.channel==="STATIC"&&T!=="title")),c.setPickup("aid",!!(Ft&&!Ft.taken)),c.setDoor(Q),c.setVeil(!!(G.alive&&G.veilUp),T==="title"?"LIVE":L.channel),c.setHijack({aimed:T==="play"&&ft,hot:T==="play"&&Dt<I}),c.update(Jt,L.channel,et),u.setProbeBlend(et.z),u.sync(N,pt,Jt,L.channel),u.syncPriest(G,pt,Jt,T==="title"?"LIVE":L.channel),u.syncBolts(Z),Rt(pt),Ct(pt);const Me=T==="title"?"LIVE":L.channel;h.kernelRadius=Me==="DEAD_AIR"?.05:.18,h.maxDistance=Me==="DEAD_AIR"?.02:.06,e.render(n,o),e.shadowMap.autoUpdate=!1,h.renderToScreen=!0,h.render(e),e.shadowMap.autoUpdate=!0,e.setRenderTarget(null)},hud(){const Y=et.z<-14.85,ct=N.filter(Ft=>Ft.alive&&Ft.room!=="chapel").length,pt=N.filter(Ft=>Ft.alive&&Ft.room==="chapel").length+(G.alive?1:0),dt=T==="play";return{mode:T,health:L.health,signal:L.signal,channel:L.channel,enemies:Y?pt:ct,roomLabel:Y?"RADIO":"COURT",countLabel:Y?"ON AIR":"TESSERA",tip:M,banner:Yt,bannerSerial:A,flash:Mt,hurt:L.hurtTimer,time:Dt,best:tt,swaps:z,muted:t.muted,prompt:dt?X:"",promptKind:dt?st:"",rite:dt?yt:"",boss:Y&&G.alive?G.hp/G.maxHp:null,checkpoint:v}}}}const f_=960,d_=780,Eh=document.getElementById("stage"),Or=document.getElementById("view"),Fs=bh();let ae;try{ae=u_(Or,Fs)}catch(i){const t=document.getElementById("boot-error");throw t&&(t.textContent="The picture failed to come up. "+(i&&i.message?i.message:"")),i}const Ji=new Set,Ne={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let _c=-1;const p_=document.getElementById("health-fill"),m_=document.getElementById("health-num"),g_=document.getElementById("signal-fill"),__=document.getElementById("signal-num"),v_=document.getElementById("ch-name"),x_=document.getElementById("enemy-count"),M_=document.getElementById("room-label"),y_=document.getElementById("count-label"),S_=document.getElementById("rite"),vc=document.getElementById("prompt"),xc=document.getElementById("boss-wrap"),E_=document.getElementById("boss-fill"),w_=document.getElementById("tip"),xr=document.getElementById("banner"),Mc=document.getElementById("hurt"),b_=document.getElementById("flash"),T_=document.getElementById("panel"),Mr=document.getElementById("panel-kicker"),yr=document.getElementById("panel-title"),Sr=document.getElementById("panel-body"),Er=document.getElementById("panel-meta"),As=document.getElementById("panel-primary"),Rs=document.getElementById("panel-secondary");function Vo(){const i=Math.min(window.innerWidth/f_,window.innerHeight/d_);Eh.style.transform=`scale(${Math.max(.05,i)})`}Vo();window.addEventListener("resize",Vo);window.addEventListener("orientationchange",Vo);function ns(){document.pointerLockElement!==Or&&Or.requestPointerLock()}function Vr(){Fs.ensure(),ae.mode==="title"?(ae.start(),ns()):ae.mode==="pause"?(ae.resume(),ns()):(ae.mode==="clear"||ae.mode==="dead")&&(ae.replay(),ns())}document.getElementById("start").addEventListener("click",i=>{i.stopPropagation(),Vr()});As.addEventListener("click",i=>{i.stopPropagation(),Vr()});Rs.addEventListener("click",i=>{i.stopPropagation(),Fs.ensure(),(ae.mode==="pause"||ae.mode==="clear"||ae.mode==="dead")&&(ae.mode==="pause"?ae.replay():ae.toTitle(),ae.mode==="play"&&ns())});window.addEventListener("keydown",i=>{if(i.repeat)return;(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),Ji.add(i.code);const t=cg(i.code);t&&ae.mode==="play"&&(Ne.channel=t),i.code==="KeyQ"&&ae.mode==="play"&&(Ne.cycle+=1),i.code==="KeyE"&&ae.mode==="play"&&(Ne.use=!0),i.code==="KeyM"&&Fs.toggle(),i.code==="Escape"&&ae.mode==="play"&&ae.pause(),i.code==="Enter"&&Vr(),i.code==="KeyR"&&(ae.mode==="pause"||ae.mode==="clear"||ae.mode==="dead")&&(Fs.ensure(),ae.replay(),ns())});window.addEventListener("keyup",i=>Ji.delete(i.code));window.addEventListener("mousemove",i=>{ae.mode==="play"&&(Ne.lookX+=i.movementX||0,Ne.lookY+=i.movementY||0)});window.addEventListener("mousedown",i=>{if(i.button===0&&!(i.target.closest&&i.target.closest("button"))){if(ae.mode==="title"){Vr();return}ae.mode==="play"&&(ns(),Ne.fire=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(Ne.fire=!1)});window.addEventListener("wheel",i=>{i.preventDefault(),!(ae.mode!=="play"||Math.abs(i.deltaY)<4)&&(Ne.cycle+=i.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==Or&&ae.mode==="play"&&ae.pause()});window.addEventListener("blur",()=>{ae.mode==="play"&&(ae.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&ae.mode==="play"&&(ae.pause(),document.pointerLockElement&&document.exitPointerLock())});function Ss(i){return i>0?i.toFixed(1)+"s":"—"}function A_(i){const t=i.channel==="DEAD_AIR"?"ch-dead":i.channel==="STATIC"?"ch-static":"ch-live";Eh.className=`mode-${i.mode} ${t}`,p_.style.width=Math.max(0,i.health)+"%",g_.style.width=Math.max(0,i.signal)+"%",m_.textContent=String(Math.ceil(i.health)),__.textContent=String(Math.ceil(i.signal)),v_.textContent=i.channel==="DEAD_AIR"?"DEAD AIR":i.channel,x_.textContent=String(i.enemies),M_.textContent=i.roomLabel||"COURT",y_.textContent=i.countLabel||"TESSERA",S_.textContent=i.rite||"",vc.textContent=i.prompt||"",vc.className=i.promptKind||"",i.boss==null?xc.classList.remove("on"):(xc.classList.add("on"),E_.style.width=Math.max(0,Math.min(100,i.boss*100))+"%"),w_.textContent=i.tip||"",Mc.style.opacity=i.health<35?"0.28":"0",i.hurt>.2&&(Mc.style.opacity="0.55"),b_.style.opacity=String(Math.max(0,Math.min(.7,i.flash))),i.bannerSerial!==_c&&(_c=i.bannerSerial,i.banner&&(xr.textContent=i.banner,xr.classList.remove("show"),xr.offsetWidth,xr.classList.add("show")));const e=i.mode==="pause"||i.mode==="clear"||i.mode==="dead";T_.hidden=!e,e&&(i.mode==="pause"?(Mr.textContent="KRCD 7 · STILL ON AIR",yr.textContent="PAUSED",Sr.textContent="Esc released the mouse. Click resume to lock it again.",Er.textContent=i.muted?"MUTED":"",As.textContent="Resume",Rs.textContent="Restart"):i.mode==="clear"?(Mr.textContent="KRCD 7 · RADIO",yr.textContent="WING CLEAR",Sr.textContent="The Visor Priest is off the air. The mall is still broadcasting.",Er.textContent=`TIME ${Ss(i.time)} · BEST ${Ss(i.best)} · ${i.swaps} CHANNEL CHANGES`,As.textContent="Replay",Rs.textContent="Title"):i.checkpoint?(Mr.textContent="KRCD 7 · RADIO",yr.textContent="WING LOST",Sr.textContent="The court stays clear. Retry from the radio door.",Er.textContent=`TIME ${Ss(i.time)} · BEST ${Ss(i.best)}`,As.textContent="Retry wing",Rs.textContent="Title"):(Mr.textContent="KRCD 7 · NO CARRIER",yr.textContent="SIGNAL LOST",Sr.textContent="The court keeps the carrier. Retune and walk it again.",Er.textContent=`BEST ${Ss(i.best)}`,As.textContent="Retry",Rs.textContent="Title"))}let yc=performance.now();function wh(i){const t=Math.min(.05,(i-yc)/1e3);yc=i,document.hidden||(ae.update(t,{forward:Ji.has("KeyW"),back:Ji.has("KeyS"),left:Ji.has("KeyA"),right:Ji.has("KeyD"),lookX:Ne.lookX,lookY:Ne.lookY,fireDown:Ne.fire&&ae.mode==="play",channel:Ne.channel,cycle:Ne.cycle,use:Ne.use}),A_(ae.hud())),Ne.lookX=0,Ne.lookY=0,Ne.channel=null,Ne.cycle=0,Ne.use=!1,requestAnimationFrame(wh)}requestAnimationFrame(wh);
