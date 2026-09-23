(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Fl="channel-surfer-mute";function Ah(){const n=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let e=null,t=null,i=null,r=null,s=null,a=!1,o=!1;try{o=localStorage.getItem(Fl)==="1"}catch(d){o=!1}function c(){if(!n)return null;if(!e){e=new n,t=e.createGain(),t.gain.value=o?0:.85,i=e.createBiquadFilter(),i.type="lowpass",i.frequency.value=16e3,i.connect(t),t.connect(e.destination);const d=e.createBuffer(1,e.sampleRate*2,e.sampleRate),f=d.getChannelData(0);for(let w=0;w<f.length;w++)f[w]=Math.random()*2-1;const m=e.createBufferSource();m.buffer=d,m.loop=!0;const _=e.createBiquadFilter();_.type="highpass",_.frequency.value=1200,r=e.createGain(),r.gain.value=0,m.connect(_),_.connect(r),r.connect(i),m.start(),s=e.createGain(),s.gain.value=.018;const g=e.createOscillator(),p=e.createOscillator();g.type="sine",p.type="triangle",g.frequency.value=55,p.frequency.value=82.4,g.connect(s),p.connect(s),s.connect(i),g.start(),p.start()}return e.state==="suspended"&&e.resume(),a=!0,e}function l(d,f){const m=e.createGain(),_=e.currentTime;return m.gain.setValueAtTime(1e-4,_),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),_+.012),m.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,d)),m.connect(i),m}function u(d,f,m,_,g){if(!a||!e||o)return;const p=e.createOscillator();p.type=m;const w=e.currentTime;p.frequency.setValueAtTime(d,w),g&&p.frequency.exponentialRampToValueAtTime(Math.max(30,g),w+f),p.connect(l(f,_)),p.start(),p.stop(w+f+.03)}function h(d,f,m){if(!a||!e||o)return;const _=Math.max(1,Math.floor(e.sampleRate*d)),g=e.createBuffer(1,_,e.sampleRate),p=g.getChannelData(0);for(let k=0;k<_;k++)p[k]=Math.random()*2-1;const w=e.createBufferSource();w.buffer=g;const b=e.createBiquadFilter();b.type="bandpass",b.frequency.value=m,b.Q.value=.7;const S=l(d,f);w.connect(b),b.connect(S),w.start()}return{ensure:c,get muted(){return o},toggle(){o=!o,t&&(t.gain.value=o?0:.85);try{localStorage.setItem(Fl,o?"1":"0")}catch(d){}return o},setChannel(d){if(!a||!e)return;const f=e.currentTime,m=d==="DEAD_AIR"?380:d==="STATIC"?3800:15e3;i.frequency.linearRampToValueAtTime(m,f+.07),r.gain.linearRampToValueAtTime(d==="STATIC"?.02:0,f+.08),s.gain.linearRampToValueAtTime(d==="DEAD_AIR"?.028:.016,f+.1)},play(d){if(!(!a||o))switch(d){case"live":h(.045,.14,2400),u(940,.08,"square",.045,360);break;case"static":h(.13,.22,640);break;case"phase":u(220,.12,"sine",.06,90),h(.07,.08,480);break;case"dry":h(.03,.08,1800),u(140,.04,"square",.03,90);break;case"deny":u(86,.09,"sine",.07,48);break;case"switch-live":u(523,.11,"square",.04),u(784,.13,"square",.03);break;case"switch-static":h(.08,.1,500),u(190,.12,"sawtooth",.03);break;case"switch-dead":u(74,.18,"sine",.07,42);break;case"hit":u(1500,.05,"square",.04,480);break;case"hurt":h(.11,.16,220),u(120,.16,"sawtooth",.05,60);break;case"death":h(.26,.18,280),u(210,.32,"triangle",.06,48);break;case"pickup":u(660,.08,"sine",.05),u(990,.12,"sine",.04);break;case"ui":u(480,.05,"square",.03);break;case"bolt":u(300,.09,"square",.03,130);break;case"nosignal":h(.16,.12,180);break;case"hijack":h(.18,.2,1800),u(680,.16,"sawtooth",.05,1400),u(220,.22,"square",.04,90);break;case"rite":u(196,.28,"sine",.05),u(247,.32,"sine",.035),u(392,.22,"triangle",.03);break;case"rite-break":h(.08,.16,1400),u(880,.12,"square",.05,420),u(1320,.16,"triangle",.04,700);break;case"rite-fail":u(98,.22,"sawtooth",.06,50),h(.14,.12,200);break;case"door":u(140,.18,"square",.04,70),u(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="170",Rh=0,Ol=1,Ch=2,yu=1,Su=2,Zn=3,Ei=0,on=1,qt=2,gn=0,Cr=1,aa=2,zl=3,Bl=4,Eu=5,Kn=100,Ph=101,Dh=102,Ih=103,Lh=104,mo=200,Uh=201,Nh=202,Fh=203,go=204,_o=205,wu=206,Oh=207,bu=208,zh=209,Bh=210,kh=211,Hh=212,Vh=213,Gh=214,vo=0,xo=1,Mo=2,Lr=3,yo=4,So=5,Eo=6,wo=7,Tu=0,Wh=1,Xh=2,Mi=0,Yh=1,qh=2,Zh=3,Au=4,Kh=5,jh=6,$h=7,Ru=300,Ur=301,Nr=302,bo=303,To=304,_a=306,kn=1e3,$n=1001,Ao=1002,dn=1003,Jh=1004,ps=1005,_n=1006,ba=1007,Nn=1008,ni=1009,Cu=1010,Pu=1011,ls=1012,ul=1013,Zi=1014,Bn=1015,Ki=1016,hl=1017,fl=1018,ji=1020,Du=35902,Iu=1021,Lu=1022,Fn=1023,Uu=1024,Nu=1025,Pr=1026,$i=1027,dl=1028,pl=1029,Fu=1030,ml=1031,gl=1033,$s=33776,Js=33777,Qs=33778,ea=33779,Ro=35840,Co=35841,Po=35842,Do=35843,Io=36196,Lo=37492,Uo=37496,No=37808,Fo=37809,Oo=37810,zo=37811,Bo=37812,ko=37813,Ho=37814,Vo=37815,Go=37816,Wo=37817,Xo=37818,Yo=37819,qo=37820,Zo=37821,ta=36492,Ko=36494,jo=36495,Ou=36283,$o=36284,Jo=36285,Qo=36286,Qh=3200,ef=3201,_l=0,tf=1,jn="",rn="srgb",wi="srgb-linear",va="linear",Ct="srgb",er=7680,kl=519,nf=512,rf=513,sf=514,zu=515,af=516,of=517,lf=518,cf=519,el=35044,Hl="300 es",Jn=2e3,oa=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vl=1234567;const rs=Math.PI/180,cs=180/Math.PI;function ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function vl(n,e){return(n%e+e)%e}function uf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function hf(n,e,t){return n!==e?(t-n)/(e-n):0}function ss(n,e,t){return(1-t)*n+t*e}function ff(n,e,t,i){return ss(n,e,1-Math.exp(-t*i))}function df(n,e=1){return e-Math.abs(vl(n,e*2)-e)}function pf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function mf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _f(n,e){return n+Math.random()*(e-n)}function vf(n){return n*(.5-Math.random())}function xf(n){n!==void 0&&(Vl=n);let e=Vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(n){return n*rs}function yf(n){return n*cs}function Sf(n){return(n&n-1)===0&&n!==0}function Ef(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*m,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*m,o*l);break;case"ZYZ":n.set(c*m,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tf={DEG2RAD:rs,RAD2DEG:cs,generateUUID:ei,clamp:an,euclideanModulo:vl,mapLinear:uf,inverseLerp:hf,lerp:ss,damp:ff,pingpong:df,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:_f,randFloatSpread:vf,seededRandom:xf,degToRad:Mf,radToDeg:yf,isPowerOfTwo:Sf,ceilPowerOfTwo:Ef,floorPowerOfTwo:wf,setQuaternionFromProperEuler:bf,normalize:At,denormalize:Un};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,i,r,s,a,o,c,l){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],_=r[0],g=r[3],p=r[6],w=r[1],b=r[4],S=r[7],k=r[2],D=r[5],P=r[8];return s[0]=a*_+o*w+c*k,s[3]=a*g+o*b+c*D,s[6]=a*p+o*S+c*P,s[1]=l*_+u*w+h*k,s[4]=l*g+u*b+h*D,s[7]=l*p+u*S+h*P,s[2]=d*_+f*w+m*k,s[5]=d*g+f*b+m*D,s[8]=d*p+f*S+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,m=t*h+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new ft;function Bu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){const n=la("canvas");return n.style.display="block",n}const Gl={};function ts(n){n in Gl||(Gl[n]=!0,console.warn(n))}function Rf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Cf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(n.r=ti(n.r),n.g=ti(n.g),n.b=ti(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(n.r=Dr(n.r),n.g=Dr(n.g),n.b=Dr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===jn?va:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Wl=[.64,.33,.3,.6,.15,.06],Xl=[.2126,.7152,.0722],Yl=[.3127,.329],ql=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[wi]:{primaries:Wl,whitePoint:Yl,transfer:va,toXYZ:ql,fromXYZ:Zl,luminanceCoefficients:Xl,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Wl,whitePoint:Yl,transfer:Ct,toXYZ:ql,fromXYZ:Zl,luminanceCoefficients:Xl,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let tr;class Df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=la("canvas")),tr.width=e.width,tr.height=e.height;const i=tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ti(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let If=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Aa(r[a].image)):s.push(Aa(r[a]))}else s=Aa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Df.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class un extends Br{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=$n,r=$n,s=_n,a=Nn,o=Fn,c=ni,l=un.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ei(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Ru;un.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(f+1)/2,k=(p+1)/2,D=(u+d)/4,P=(h+_)/4,F=(m+g)/4;return b>S&&b>k?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=D/i,s=P/i):S>k?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=D/r,s=F/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=P/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends Br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ku(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hu extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nf extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-o;const p=c*d+l*f+u*m+h*_,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const k=Math.sqrt(b),D=Math.atan2(k,p*w);g=Math.sin(g*D)/k,o=Math.sin(o*D)/k}const S=o*w;if(c=c*g+d*S,l=l*g+f*S,u=u*g+m*S,h=h*g+_*S,g===1-o){const k=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=k,l*=k,u*=k,h*=k}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-o*f,e[t+2]=l*m+u*f+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new X,Kl=new us;class hs{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),gs.subVectors(this.max,Vr),nr.subVectors(e.a,Vr),ir.subVectors(e.b,Vr),rr.subVectors(e.c,Vr),ui.subVectors(ir,nr),hi.subVectors(rr,ir),Di.subVectors(nr,rr);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!Ca(t,nr,ir,rr,gs)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,nr,ir,rr,gs))?!1:(_s.crossVectors(ui,hi),t=[_s.x,_s.y,_s.z],Ca(t,nr,ir,rr,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new X,new X,new X,new X,new X,new X,new X,new X],Dn=new X,ms=new hs,nr=new X,ir=new X,rr=new X,ui=new X,hi=new X,Di=new X,Vr=new X,gs=new X,_s=new X,Ii=new X;function Ca(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ii.fromArray(n,s);const o=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ff=new hs,Gr=new X,Pa=new X;class fs{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ff.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Pa)),this.expandByPoint(Gr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new X,Da=new X,vs=new X,fi=new X,Ia=new X,xs=new X,La=new X;class xl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Da.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Da);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vs),o=fi.dot(this.direction),c=-fi.dot(vs),l=fi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Da).addScaledVector(vs,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,r,s){Ia.subVectors(t,e),xs.subVectors(i,e),La.crossVectors(Ia,xs);let a=this.direction.dot(La),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(xs.crossVectors(fi,xs));if(c<0)return null;const l=o*this.direction.dot(Ia.cross(fi));if(l<0||c+l>a)return null;const u=-o*fi.dot(La);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,m,_,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,m,_,g)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,zf)}lookAt(e,t,i){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),di.crossVectors(i,yn),di.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),di.crossVectors(i,yn)),di.normalize(),Ms.crossVectors(yn,di),r[0]=di.x,r[4]=Ms.x,r[8]=yn.x,r[1]=di.y,r[5]=Ms.y,r[9]=yn.y,r[2]=di.z,r[6]=Ms.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],w=i[3],b=i[7],S=i[11],k=i[15],D=r[0],P=r[4],F=r[8],E=r[12],y=r[1],T=r[5],R=r[9],L=r[13],Y=r[2],G=r[6],Z=r[10],ie=r[14],x=r[3],I=r[7],O=r[11],H=r[15];return s[0]=a*D+o*y+c*Y+l*x,s[4]=a*P+o*T+c*G+l*I,s[8]=a*F+o*R+c*Z+l*O,s[12]=a*E+o*L+c*ie+l*H,s[1]=u*D+h*y+d*Y+f*x,s[5]=u*P+h*T+d*G+f*I,s[9]=u*F+h*R+d*Z+f*O,s[13]=u*E+h*L+d*ie+f*H,s[2]=m*D+_*y+g*Y+p*x,s[6]=m*P+_*T+g*G+p*I,s[10]=m*F+_*R+g*Z+p*O,s[14]=m*E+_*L+g*ie+p*H,s[3]=w*D+b*y+S*Y+k*x,s[7]=w*P+b*T+S*G+k*I,s[11]=w*F+b*R+S*Z+k*O,s[15]=w*E+b*L+S*ie+k*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+g*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],w=h*g*l-_*d*l+_*c*f-o*g*f-h*c*p+o*d*p,b=m*d*l-u*g*l-m*c*f+a*g*f+u*c*p-a*d*p,S=u*_*l-m*h*l+m*o*f-a*_*f-u*o*p+a*h*p,k=m*h*c-u*_*c-m*o*d+a*_*d+u*o*g-a*h*g,D=t*w+i*b+r*S+s*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=w*P,e[1]=(_*d*s-h*g*s-_*r*f+i*g*f+h*r*p-i*d*p)*P,e[2]=(o*g*s-_*c*s+_*r*l-i*g*l-o*r*p+i*c*p)*P,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*P,e[4]=b*P,e[5]=(u*g*s-m*d*s+m*r*f-t*g*f-u*r*p+t*d*p)*P,e[6]=(m*c*s-a*g*s-m*r*l+t*g*l+a*r*p-t*c*p)*P,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*P,e[8]=S*P,e[9]=(m*h*s-u*_*s-m*i*f+t*_*f+u*i*p-t*h*p)*P,e[10]=(a*_*s-m*o*s+m*i*l-t*_*l-a*i*p+t*o*p)*P,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*P,e[12]=k*P,e[13]=(u*_*r-m*h*r+m*i*d-t*_*d-u*i*g+t*h*g)*P,e[14]=(m*o*r-a*_*r-m*i*c+t*_*c+a*i*g-t*o*g)*P,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,m=s*h,_=a*u,g=a*h,p=o*h,w=c*l,b=c*u,S=c*h,k=i.x,D=i.y,P=i.z;return r[0]=(1-(_+p))*k,r[1]=(f+S)*k,r[2]=(m-b)*k,r[3]=0,r[4]=(f-S)*D,r[5]=(1-(d+p))*D,r[6]=(g+w)*D,r[7]=0,r[8]=(m+b)*P,r[9]=(g-w)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const a=sr.set(r[4],r[5],r[6]).length(),o=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const l=1/s,u=1/a,h=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Jn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,m;if(o===Jn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===oa)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Jn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*l,f=(i+r)*u;let m,_;if(o===Jn)m=(a+s)*h,_=-2*h;else if(o===oa)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sr=new X,In=new Dt,Of=new X(0,0,0),zf=new X(1,1,1),di=new X,Ms=new X,yn=new X,jl=new Dt,$l=new us;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bf=0;const Jl=new X,ar=new us,Wn=new Dt,ys=new X,Wr=new X,kf=new X,Hf=new us,Ql=new X(1,0,0),ec=new X(0,1,0),tc=new X(0,0,1),nc={type:"added"},Vf={type:"removed"},or={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Wt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new X,t=new Hn,i=new us,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ft}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Wr,ys,this.up):Wn.lookAt(ys,Wr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Wn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new X(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new X,Xn=new X,Na=new X,Yn=new X,lr=new X,cr=new X,ic=new X,Fa=new X,Oa=new X,za=new X,Ba=new Pt,ka=new Pt,Ha=new Pt;class Rn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ln.subVectors(e,t),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ln.subVectors(r,t),Xn.subVectors(i,t),Na.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(Xn),c=Ln.dot(Na),l=Xn.dot(Xn),u=Xn.dot(Na),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ba.setScalar(0),ka.setScalar(0),Ha.setScalar(0),Ba.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,i),Ha.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ba,s.x),a.addScaledVector(ka,s.y),a.addScaledVector(Ha,s.z),a}static isFrontFacing(e,t,i,r){return Ln.subVectors(i,t),Xn.subVectors(e,t),Ln.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Ln.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;lr.subVectors(r,i),cr.subVectors(s,i),Fa.subVectors(e,i);const c=lr.dot(Fa),l=cr.dot(Fa);if(c<=0&&l<=0)return t.copy(i);Oa.subVectors(e,r);const u=lr.dot(Oa),h=cr.dot(Oa);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(lr,a);za.subVectors(e,s);const f=lr.dot(za),m=cr.dot(za);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(cr,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return ic.subVectors(s,r),o=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(ic,o);const p=1/(g+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=vl(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Va(a,s,e+1/3),this.g=Va(a,s,e),this.b=Va(a,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return yt.fromWorkingColorSpace(cn.copy(this),e),Math.round(an(cn.r*255,0,255))*65536+Math.round(an(cn.g*255,0,255))*256+Math.round(an(cn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=rn){yt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Ss);const i=ss(pi.h,Ss.h,t),r=ss(pi.s,Ss.s,t),s=ss(pi.l,Ss.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new nt;nt.NAMES=Gu;let Gf=0;class si extends Br{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ei(),this.name="",this.blending=Cr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==go&&(i.blendSrc=this.blendSrc),this.blendDst!==_o&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class at extends si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new X,Es=new Re;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=el,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class Wu extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xu extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wf=0;const An=new Dt,Ga=new Wt,ur=new X,Sn=new hs,Xr=new hs,Jt=new X;class Ht extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)?Xu:Wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Sn.min,Xr.min),Sn.expandByPoint(Jt),Jt.addVectors(Sn.max,Xr.max),Sn.expandByPoint(Jt)):(Sn.expandByPoint(Xr.min),Sn.expandByPoint(Xr.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Jt.fromBufferAttribute(o,l),c&&(ur.fromBufferAttribute(e,l),Jt.add(ur)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new X,c[F]=new X;const l=new X,u=new X,h=new X,d=new Re,f=new Re,m=new Re,_=new X,g=new X;function p(F,E,y){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,F),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,y),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(T),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(T),o[F].add(_),o[E].add(_),o[y].add(_),c[F].add(g),c[E].add(g),c[y].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,E=w.length;F<E;++F){const y=w[F],T=y.start,R=y.count;for(let L=T,Y=T+R;L<Y;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new X,S=new X,k=new X,D=new X;function P(F){k.fromBufferAttribute(r,F),D.copy(k);const E=o[F];b.copy(E),b.sub(k.multiplyScalar(k.dot(E))).normalize(),S.crossVectors(D,E);const T=S.dot(c[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,T)}for(let F=0,E=w.length;F<E;++F){const y=w[F],T=y.start,R=y.count;for(let L=T,Y=T+R;L<Y;L+=3)P(e.getX(L+0)),P(e.getX(L+1)),P(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,l=new X,u=new X,h=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new en(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new Dt,Li=new xl,ws=new fs,sc=new X,bs=new X,Ts=new X,As=new X,Wa=new X,Rs=new X,ac=new X,Cs=new X;class ne extends Wt{constructor(e=new Ht,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Wa.fromBufferAttribute(h,e),a?Rs.addScaledVector(Wa,u):Rs.addScaledVector(Wa.sub(t),u))}t.add(Rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(ws.containsPoint(Li.origin)===!1&&(Li.intersectSphere(ws,sc)===null||Li.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(rc.copy(s).invert(),Li.copy(e.ray).applyMatrix4(rc),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=w,k=b;S<k;S+=3){const D=o.getX(S),P=o.getX(S+1),F=o.getX(S+2);r=Ps(this,p,e,i,l,u,h,D,P,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=o.getX(g),b=o.getX(g+1),S=o.getX(g+2);r=Ps(this,a,e,i,l,u,h,w,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=w,k=b;S<k;S+=3){const D=S,P=S+1,F=S+2;r=Ps(this,p,e,i,l,u,h,D,P,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=g,b=g+1,S=g+2;r=Ps(this,a,e,i,l,u,h,w,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Xf(n,e,t,i,r,s,a,o){let c;if(e.side===on?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ei,o),c===null)return null;Cs.copy(o),Cs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Cs);return l<t.near||l>t.far?null:{distance:l,point:Cs.clone(),object:n}}function Ps(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,bs),n.getVertexPosition(c,Ts),n.getVertexPosition(l,As);const u=Xf(n,e,t,i,bs,Ts,As,ac);if(u){const h=new X;Rn.getBarycoord(ac,bs,Ts,As,h),r&&(u.uv=Rn.getInterpolatedAttribute(r,o,c,l,h,new Re)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,o,c,l,h,new Re)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,c,l,h,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new X,materialIndex:0};Rn.getNormal(bs,Ts,As,d.normal),u.face=d,u.barycoord=h}return u}class Le extends Ht{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function m(_,g,p,w,b,S,k,D,P,F,E){const y=S/P,T=k/F,R=S/2,L=k/2,Y=D/2,G=P+1,Z=F+1;let ie=0,x=0;const I=new X;for(let O=0;O<Z;O++){const H=O*T-L;for(let j=0;j<G;j++){const Me=j*y-R;I[_]=Me*w,I[g]=H*b,I[p]=Y,l.push(I.x,I.y,I.z),I[_]=0,I[g]=0,I[p]=D>0?1:-1,u.push(I.x,I.y,I.z),h.push(j/P),h.push(1-O/F),ie+=1}}for(let O=0;O<F;O++)for(let H=0;H<P;H++){const j=d+H+G*O,Me=d+H+G*(O+1),Q=d+(H+1)+G*(O+1),he=d+(H+1)+G*O;c.push(j,Me,he),c.push(Me,Q,he),x+=6}o.addGroup(f,x,E),f+=x,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const r in i)e[r]=i[r]}return e}function Yf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const ns={clone:Fr,merge:fn};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qu extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new X,oc=new Re,lc=new Re;class En extends qu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,fr=1;class Kf extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(hr,fr,e,t);r.layers=this.layers,this.add(r);const s=new En(hr,fr,e,t);s.layers=this.layers,this.add(s);const a=new En(hr,fr,e,t);a.layers=this.layers,this.add(a);const o=new En(hr,fr,e,t);o.layers=this.layers,this.add(o);const c=new En(hr,fr,e,t);c.layers=this.layers,this.add(c);const l=new En(hr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Zu extends un{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jf extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Le(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:gn});s.uniforms.tEquirect.value=t;const a=new ne(r,s),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=_n),new Kf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Xa=new X,$f=new X,Jf=new ft;class ki{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xa.subVectors(i,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jf.getNormalMatrix(e),r=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new fs,Ds=new X;class Ml{constructor(e=new ki,t=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],m=r[9],_=r[10],g=r[11],p=r[12],w=r[13],b=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,g-f,S-p).normalize(),i[1].setComponents(c+s,d+l,g+f,S+p).normalize(),i[2].setComponents(c+a,d+u,g+m,S+w).normalize(),i[3].setComponents(c-a,d-u,g-m,S-w).normalize(),i[4].setComponents(c-o,d-h,g-_,S-b).normalize(),t===Jn)i[5].setComponents(c+o,d+h,g+_,S+b).normalize();else if(t===oa)i[5].setComponents(o,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ku(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qf(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Tt extends Ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const w=p*d-a;for(let b=0;b<l;b++){const S=b*h-s;m.push(S,-w,0),_.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const b=w+l*p,S=w+l*(p+1),k=w+1+l*(p+1),D=w+1+l*p;f.push(b,S,D),f.push(S,k,D)}this.setIndex(f),this.setAttribute("position",new Et(m,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.widthSegments,e.heightSegments)}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,pd=`#ifdef USE_BUMPMAP
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ed=`#define PI 3.141592653589793
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
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#endif`,Jd=`struct PhysicalMaterial {
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
}`,Qd=`
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,x0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,S0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,T0=`#define TOON
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
}`,A0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,P0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:ed,alphahash_pars_fragment:td,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:rd,alphatest_pars_fragment:sd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:ud,beginnormal_vertex:hd,bsdfs:fd,iridescence_fragment:dd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:vd,color_fragment:xd,color_pars_fragment:Md,color_pars_vertex:yd,color_vertex:Sd,common:Ed,cube_uv_reflection_fragment:wd,defaultnormal_vertex:bd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Pd,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Ud,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Yd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:zd,fog_fragment:Bd,fog_pars_fragment:kd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:qd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Kd,lights_phong_pars_fragment:jd,lights_physical_fragment:$d,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:ep,lights_fragment_end:tp,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:sp,map_fragment:ap,map_pars_fragment:op,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:up,metalnessmap_pars_fragment:hp,morphinstance_vertex:fp,morphcolor_vertex:dp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:Mp,normal_vertex:yp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Dp,dithering_pars_fragment:Ip,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Fp,shadowmap_vertex:Op,shadowmask_pars_fragment:zp,skinbase_vertex:Bp,skinning_pars_vertex:kp,skinning_vertex:Hp,skinnormal_vertex:Vp,specularmap_fragment:Gp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:Yp,transmission_fragment:qp,transmission_pars_fragment:Zp,uv_pars_fragment:Kp,uv_pars_vertex:jp,uv_vertex:$p,worldpos_vertex:Jp,background_vert:Qp,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:r0,depth_vert:s0,depth_frag:a0,distanceRGBA_vert:o0,distanceRGBA_frag:l0,equirect_vert:c0,equirect_frag:u0,linedashed_vert:h0,linedashed_frag:f0,meshbasic_vert:d0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:_0,meshmatcap_frag:v0,meshnormal_vert:x0,meshnormal_frag:M0,meshphong_vert:y0,meshphong_frag:S0,meshphysical_vert:E0,meshphysical_frag:w0,meshtoon_vert:b0,meshtoon_frag:T0,points_vert:A0,points_frag:R0,shadow_vert:C0,shadow_frag:P0,sprite_vert:D0,sprite_frag:I0},Ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zn={basic:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:fn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:fn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:fn([Ce.points,Ce.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:fn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:fn([Ce.common,Ce.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:fn([Ce.sprite,Ce.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:fn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:fn([Ce.lights,Ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};zn.physical={uniforms:fn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Is={r:0,b:0,g:0},Ni=new Hn,L0=new Dt;function U0(n,e,t,i,r,s,a){const o=new nt(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function m(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function _(w){let b=!1;const S=m(w);S===null?p(o,c):S&&S.isColor&&(p(S,1),b=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,b){const S=m(b);S&&(S.isCubeTexture||S.mapping===_a)?(u===void 0&&(u=new ne(new Le(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Fr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ni.copy(b.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(Ni)),u.material.toneMapped=yt.getTransfer(S.colorSpace)!==Ct,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ne(new Tt(2,2),new Cn({name:"BackgroundMaterial",uniforms:Fr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=yt.getTransfer(S.colorSpace)!==Ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,b){w.getRGB(Is,Yu(n)),i.buffers.color.setClear(Is.r,Is.g,Is.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:_,addToRenderList:g}}function N0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,T,R,L,Y){let G=!1;const Z=h(L,R,T);s!==Z&&(s=Z,l(s.object)),G=f(y,L,R,Y),G&&m(y,L,R,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(y,T,R,L),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,T,R){const L=R.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let G=Y[T.id];G===void 0&&(G={},Y[T.id]=G);let Z=G[L];return Z===void 0&&(Z=d(c()),G[L]=Z),Z}function d(y){const T=[],R=[],L=[];for(let Y=0;Y<t;Y++)T[Y]=0,R[Y]=0,L[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:R,attributeDivisors:L,object:y,attributes:{},index:null}}function f(y,T,R,L){const Y=s.attributes,G=T.attributes;let Z=0;const ie=R.getAttributes();for(const x in ie)if(ie[x].location>=0){const O=Y[x];let H=G[x];if(H===void 0&&(x==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),x==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),O===void 0||O.attribute!==H||H&&O.data!==H.data)return!0;Z++}return s.attributesNum!==Z||s.index!==L}function m(y,T,R,L){const Y={},G=T.attributes;let Z=0;const ie=R.getAttributes();for(const x in ie)if(ie[x].location>=0){let O=G[x];O===void 0&&(x==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),x==="instanceColor"&&y.instanceColor&&(O=y.instanceColor));const H={};H.attribute=O,O&&O.data&&(H.data=O.data),Y[x]=H,Z++}s.attributes=Y,s.attributesNum=Z,s.index=L}function _(){const y=s.newAttributes;for(let T=0,R=y.length;T<R;T++)y[T]=0}function g(y){p(y,0)}function p(y,T){const R=s.newAttributes,L=s.enabledAttributes,Y=s.attributeDivisors;R[y]=1,L[y]===0&&(n.enableVertexAttribArray(y),L[y]=1),Y[y]!==T&&(n.vertexAttribDivisor(y,T),Y[y]=T)}function w(){const y=s.newAttributes,T=s.enabledAttributes;for(let R=0,L=T.length;R<L;R++)T[R]!==y[R]&&(n.disableVertexAttribArray(R),T[R]=0)}function b(y,T,R,L,Y,G,Z){Z===!0?n.vertexAttribIPointer(y,T,R,Y,G):n.vertexAttribPointer(y,T,R,L,Y,G)}function S(y,T,R,L){_();const Y=L.attributes,G=R.getAttributes(),Z=T.defaultAttributeValues;for(const ie in G){const x=G[ie];if(x.location>=0){let I=Y[ie];if(I===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(I=y.instanceColor)),I!==void 0){const O=I.normalized,H=I.itemSize,j=e.get(I);if(j===void 0)continue;const Me=j.buffer,Q=j.type,he=j.bytesPerElement,re=Q===n.INT||Q===n.UNSIGNED_INT||I.gpuType===ul;if(I.isInterleavedBufferAttribute){const oe=I.data,ve=oe.stride,Pe=I.offset;if(oe.isInstancedInterleavedBuffer){for(let ke=0;ke<x.locationSize;ke++)p(x.location+ke,oe.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ke=0;ke<x.locationSize;ke++)g(x.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ke=0;ke<x.locationSize;ke++)b(x.location+ke,H/x.locationSize,Q,O,ve*he,(Pe+H/x.locationSize*ke)*he,re)}else{if(I.isInstancedBufferAttribute){for(let oe=0;oe<x.locationSize;oe++)p(x.location+oe,I.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let oe=0;oe<x.locationSize;oe++)g(x.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let oe=0;oe<x.locationSize;oe++)b(x.location+oe,H/x.locationSize,Q,O,H*he,H/x.locationSize*oe*he,re)}}else if(Z!==void 0){const O=Z[ie];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(x.location,O);break;case 3:n.vertexAttrib3fv(x.location,O);break;case 4:n.vertexAttrib4fv(x.location,O);break;default:n.vertexAttrib1fv(x.location,O)}}}}w()}function k(){F();for(const y in i){const T=i[y];for(const R in T){const L=T[R];for(const Y in L)u(L[Y].object),delete L[Y];delete T[R]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const R in T){const L=T[R];for(const Y in L)u(L[Y].object),delete L[Y];delete T[R]}delete i[y.id]}function P(y){for(const T in i){const R=i[T];if(R[y.id]===void 0)continue;const L=R[y.id];for(const Y in L)u(L[Y].object),delete L[Y];delete R[y.id]}}function F(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function F0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function O0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Fn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const F=P===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ni&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Bn&&!F)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=m>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:k,maxSamples:D}}function z0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ki,o=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const w=s?0:i,b=w*4;let S=p.clippingState||null;c.value=S,S=u(m,d,b,f);for(let k=0;k!==b;++k)S[k]=t[k];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,S=f;b!==_;++b,S+=4)a.copy(h[b]).applyMatrix4(w,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function B0(n){let e=new WeakMap;function t(a,o){return o===bo?a.mapping=Ur:o===To&&(a.mapping=Nr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bo||o===To)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new jf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class yl extends qu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ar=4,cc=[.125,.215,.35,.446,.526,.582],Xi=20,Ya=new yl,uc=new nt;let qa=null,Za=0,Ka=0,ja=!1;const Hi=(1+Math.sqrt(5))/2,dr=1/Hi,hc=[new X(-Hi,dr,0),new X(Hi,dr,0),new X(-dr,0,Hi),new X(dr,0,Hi),new X(0,Hi,-dr),new X(0,Hi,dr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){qa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Za,Ka),this._renderer.xr.enabled=ja,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ki,format:Fn,colorSpace:wi,depthBuffer:!1},r=fc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k0(s)),this._blurMaterial=H0(s,e,t)}return r}_compileMaterial(e){const t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,i,r){const o=new En(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(uc),u.toneMapping=Mi,u.autoClear=!1;const f=new at({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new ne(new Le,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(uc),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;Ls(r,w*b,p>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ur||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ls(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hc[(r-s-1)%hc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ne(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Xi;g>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const p=[];let w=0;for(let P=0;P<Xi;++P){const F=P/_,E=Math.exp(-F*F/2);p.push(E),P===0?w+=E:P<g&&(w+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-i;const S=this._sizeLods[r],k=3*S*(r>b-Ar?r-b+Ar:0),D=4*(this._cubeSize-S);Ls(t,k,D,3*S,2*S),c.setRenderTarget(t),c.render(h,Ya)}}function k0(n){const e=[],t=[],i=[];let r=n;const s=n-Ar+1+cc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Ar?c=cc[a-n+Ar-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,w=new Float32Array(_*m*f),b=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let D=0;D<f;D++){const P=D%3*2/3-1,F=D>2?0:-1,E=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];w.set(E,_*m*D),b.set(d,g*m*D);const y=[D,D,D,D,D,D];S.set(y,p*m*D)}const k=new Ht;k.setAttribute("position",new en(w,_)),k.setAttribute("uv",new en(b,g)),k.setAttribute("faceIndex",new en(S,p)),e.push(k),r>Ar&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fc(n,e,t){const i=new ii(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function H0(n,e,t){const i=new Float32Array(Xi),r=new X(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function dc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function pc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function V0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===bo||c===To,u=c===Ur||c===Nr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new tl(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new tl(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function G0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let b=0,S=w.length;b<S;b+=3){const k=w[b+0],D=w[b+1],P=w[b+2];d.push(k,D,D,P,P,k)}}else if(m!==void 0){const w=m.array;_=m.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const k=b+0,D=b+1,P=b+2;d.push(k,D,D,P,P,k)}}else return;const g=new(Bu(d)?Xu:Wu)(d,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function X0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,d*a,m),t.update(f,i,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function h(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Y0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q0(n,e,t){const i=new WeakMap,r=new Pt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let k=o.attributes.position.count*S,D=1;k>e.maxTextureSize&&(D=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const P=new Float32Array(k*D*4*h),F=new Hu(P,k,D,h);F.type=Bn,F.needsUpdate=!0;const E=S*4;for(let T=0;T<h;T++){const R=p[T],L=w[T],Y=b[T],G=k*D*4*T;for(let Z=0;Z<R.count;Z++){const ie=Z*E;m===!0&&(r.fromBufferAttribute(R,Z),P[G+ie+0]=r.x,P[G+ie+1]=r.y,P[G+ie+2]=r.z,P[G+ie+3]=0),_===!0&&(r.fromBufferAttribute(L,Z),P[G+ie+4]=r.x,P[G+ie+5]=r.y,P[G+ie+6]=r.z,P[G+ie+7]=0),g===!0&&(r.fromBufferAttribute(Y,Z),P[G+ie+8]=r.x,P[G+ie+9]=r.y,P[G+ie+10]=r.z,P[G+ie+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:F,size:new Re(k,D)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Z0(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class El extends un{constructor(e,t,i,r,s,a,o,c,l,u=Pr){if(u!==Pr&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=Zi),i===void 0&&u===$i&&(i=ji),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ju=new un,mc=new El(1,1),$u=new Hu,Ju=new Nf,Qu=new Zu,gc=[],_c=[],vc=new Float32Array(16),xc=new Float32Array(9),Mc=new Float32Array(4);function kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gc[r];if(s===void 0&&(s=new Float32Array(r),gc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xa(n,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function K0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function $0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;Mc.set(i),n.uniformMatrix2fv(this.addr,!1,Mc),Kt(t,i)}}function em(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;xc.set(i),n.uniformMatrix3fv(this.addr,!1,xc),Kt(t,i)}}function tm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;vc.set(i),n.uniformMatrix4fv(this.addr,!1,vc),Kt(t,i)}}function nm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function am(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function um(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mc.compareFunction=zu,s=mc):s=ju,t.setTexture2D(e||s,r)}function hm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ju,r)}function fm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qu,r)}function dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$u,r)}function pm(n){switch(n){case 5126:return K0;case 35664:return j0;case 35665:return $0;case 35666:return J0;case 35674:return Q0;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return dm}}function mm(n,e){n.uniform1fv(this.addr,e)}function gm(n,e){const t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function _m(n,e){const t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function vm(n,e){const t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function xm(n,e){const t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mm(n,e){const t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ym(n,e){const t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sm(n,e){n.uniform1iv(this.addr,e)}function Em(n,e){n.uniform2iv(this.addr,e)}function wm(n,e){n.uniform3iv(this.addr,e)}function bm(n,e){n.uniform4iv(this.addr,e)}function Tm(n,e){n.uniform1uiv(this.addr,e)}function Am(n,e){n.uniform2uiv(this.addr,e)}function Rm(n,e){n.uniform3uiv(this.addr,e)}function Cm(n,e){n.uniform4uiv(this.addr,e)}function Pm(n,e,t){const i=this.cache,r=e.length,s=xa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ju,s[a])}function Dm(n,e,t){const i=this.cache,r=e.length,s=xa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ju,s[a])}function Im(n,e,t){const i=this.cache,r=e.length,s=xa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qu,s[a])}function Lm(n,e,t){const i=this.cache,r=e.length,s=xa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$u,s[a])}function Um(n){switch(n){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return vm;case 35674:return xm;case 35675:return Mm;case 35676:return ym;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return wm;case 35669:case 35673:return bm;case 5125:return Tm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Lm}}class Nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pm(t.type)}}class Fm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Um(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function yc(n,e){n.seq.push(e),n.map[e.id]=e}function zm(n,e,t){const i=n.name,r=i.length;for($a.lastIndex=0;;){const s=$a.exec(i),a=$a.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){yc(t,l===void 0?new Nm(o,n,e):new Fm(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Om(o),yc(t,h)),t=h}}}class na{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);zm(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Sc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bm=37297;let km=0;function Hm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ec=new ft;function Vm(n){yt._getMatrix(Ec,yt.workingColorSpace,n);const e=`mat3( ${Ec.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case va:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hm(n.getShaderSource(e),a)}else return r}function Gm(n,e){const t=Vm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wm(n,e){let t;switch(e){case Yh:t="Linear";break;case qh:t="Reinhard";break;case Zh:t="Cineon";break;case Au:t="ACESFilmic";break;case jh:t="AgX";break;case $h:t="Neutral";break;case Kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new X;function Xm(){yt.getLuminanceCoefficients(Us);const n=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function qm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Zm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function is(n){return n!==""}function bc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(n){return n.replace(Km,$m)}const jm=new Map;function $m(n,e){let t=ht[e];if(t===void 0){const i=jm.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(n){return n.replace(Jm,Qm)}function Qm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function tg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Nr:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ng(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function ig(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Wh:e="ENVMAP_BLENDING_MIX";break;case Xh:e="ENVMAP_BLENDING_ADD";break}return e}function rg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=eg(t),l=tg(t),u=ng(t),h=ig(t),d=rg(t),f=Ym(t),m=qm(s),_=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(is).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(is).join(`
`),p.length>0&&(p+=`
`)):(g=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),p=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Gm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),a=nl(a),a=bc(a,t),a=Tc(a,t),o=nl(o),o=bc(o,t),o=Tc(o,t),a=Ac(a),o=Ac(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+g+a,S=w+p+o,k=Sc(r,r.VERTEX_SHADER,b),D=Sc(r,r.FRAGMENT_SHADER,S);r.attachShader(_,k),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(T){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(k).trim(),Y=r.getShaderInfoLog(D).trim();let G=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,k,D);else{const ie=wc(r,k,"vertex"),x=wc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+R+`
`+ie+`
`+x)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(L===""||Y==="")&&(Z=!1);Z&&(T.diagnostics={runnable:G,programLog:R,vertexShader:{log:L,prefix:g},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(k),r.deleteShader(D),F=new na(r,_),E=Zm(r,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Bm)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=km++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=D,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lg(e),t.set(e,i)),i}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function cg(n,e,t,i,r,s,a){const o=new Vu,c=new og,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,y,T,R,L){const Y=R.fog,G=L.geometry,Z=E.isMeshStandardMaterial?R.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),x=ie&&ie.mapping===_a?ie.image.height:null,I=m[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const O=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,H=O!==void 0?O.length:0;let j=0;G.morphAttributes.position!==void 0&&(j=1),G.morphAttributes.normal!==void 0&&(j=2),G.morphAttributes.color!==void 0&&(j=3);let Me,Q,he,re;if(I){const xt=zn[I];Me=xt.vertexShader,Q=xt.fragmentShader}else Me=E.vertexShader,Q=E.fragmentShader,c.update(E),he=c.getVertexShaderID(E),re=c.getFragmentShaderID(E);const oe=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,_t=!!E.map,qe=!!E.matcap,$e=!!ie,V=!!E.aoMap,pt=!!E.lightMap,We=!!E.bumpMap,He=!!E.normalMap,K=!!E.displacementMap,et=!!E.emissiveMap,we=!!E.metalnessMap,A=!!E.roughnessMap,M=E.anisotropy>0,q=E.clearcoat>0,ae=E.dispersion>0,le=E.iridescence>0,ee=E.sheen>0,ge=E.transmission>0,xe=M&&!!E.anisotropyMap,Te=q&&!!E.clearcoatMap,it=q&&!!E.clearcoatNormalMap,fe=q&&!!E.clearcoatRoughnessMap,De=le&&!!E.iridescenceMap,Xe=le&&!!E.iridescenceThicknessMap,Ze=ee&&!!E.sheenColorMap,be=ee&&!!E.sheenRoughnessMap,st=!!E.specularMap,Ve=!!E.specularColorMap,Ke=!!E.specularIntensityMap,N=ge&&!!E.transmissionMap,pe=ge&&!!E.thicknessMap,$=!!E.gradientMap,ce=!!E.alphaMap,Ae=E.alphaTest>0,ye=!!E.alphaHash,Ye=!!E.extensions;let mt=Mi;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Nt={shaderID:I,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:Q,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ke,batchingColor:ke&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:wi,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:qe,envMap:$e,envMapMode:$e&&ie.mapping,envMapCubeUVHeight:x,aoMap:V,lightMap:pt,bumpMap:We,normalMap:He,displacementMap:d&&K,emissiveMap:et,normalMapObjectSpace:He&&E.normalMapType===tf,normalMapTangentSpace:He&&E.normalMapType===_l,metalnessMap:we,roughnessMap:A,anisotropy:M,anisotropyMap:xe,clearcoat:q,clearcoatMap:Te,clearcoatNormalMap:it,clearcoatRoughnessMap:fe,dispersion:ae,iridescence:le,iridescenceMap:De,iridescenceThicknessMap:Xe,sheen:ee,sheenColorMap:Ze,sheenRoughnessMap:be,specularMap:st,specularColorMap:Ve,specularIntensityMap:Ke,transmission:ge,transmissionMap:N,thicknessMap:pe,gradientMap:$,opaque:E.transparent===!1&&E.blending===Cr&&E.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:ye,combine:E.combine,mapUv:_t&&_(E.map.channel),aoMapUv:V&&_(E.aoMap.channel),lightMapUv:pt&&_(E.lightMap.channel),bumpMapUv:We&&_(E.bumpMap.channel),normalMapUv:He&&_(E.normalMap.channel),displacementMapUv:K&&_(E.displacementMap.channel),emissiveMapUv:et&&_(E.emissiveMap.channel),metalnessMapUv:we&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:xe&&_(E.anisotropyMap.channel),clearcoatMapUv:Te&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(E.sheenRoughnessMap.channel),specularMapUv:st&&_(E.specularMap.channel),specularColorMapUv:Ve&&_(E.specularColorMap.channel),specularIntensityMapUv:Ke&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:pe&&_(E.thicknessMap.channel),alphaMapUv:ce&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(He||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(_t||ce),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ve,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Ct,decodeVideoTextureEmissive:et&&E.emissiveMap.isVideoTexture===!0&&yt.getTransfer(E.emissiveMap.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qt,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)y.push(T),y.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(w(y,E),b(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function w(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function b(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const y=m[E.type];let T;if(y){const R=zn[y];T=ns.clone(R.uniforms)}else T=E.uniforms;return T}function k(E,y){let T;for(let R=0,L=u.length;R<L;R++){const Y=u[R];if(Y.cacheKey===y){T=Y,++T.usedTimes;break}}return T===void 0&&(T=new sg(n,y,E,s),u.push(T)),T}function D(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:k,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:F}}function ug(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,m,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function o(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||hg),i.length>1&&i.sort(d||Cc),r.length>1&&r.sort(d||Cc)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function fg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Pc,n.set(i,[a])):r>=s.length?(a=new Pc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function dg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new nt};break;case"SpotLight":t={position:new X,direction:new X,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function pg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mg=0;function gg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _g(n){const e=new dg,t=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new Dt,a=new Dt;function o(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,w=0,b=0,S=0,k=0,D=0,P=0;l.sort(gg);for(let E=0,y=l.length;E<y;E++){const T=l[E],R=T.color,L=T.intensity,Y=T.distance,G=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=R.r*L,h+=R.g*L,d+=R.b*L;else if(T.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(T.sh.coefficients[Z],L);P++}else if(T.isDirectionalLight){const Z=e.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ie=T.shadow,x=t.get(T);x.shadowIntensity=ie.intensity,x.shadowBias=ie.bias,x.shadowNormalBias=ie.normalBias,x.shadowRadius=ie.radius,x.shadowMapSize=ie.mapSize,i.directionalShadow[f]=x,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=T.shadow.matrix,w++}i.directional[f]=Z,f++}else if(T.isSpotLight){const Z=e.get(T);Z.position.setFromMatrixPosition(T.matrixWorld),Z.color.copy(R).multiplyScalar(L),Z.distance=Y,Z.coneCos=Math.cos(T.angle),Z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Z.decay=T.decay,i.spot[_]=Z;const ie=T.shadow;if(T.map&&(i.spotLightMap[k]=T.map,k++,ie.updateMatrices(T),T.castShadow&&D++),i.spotLightMatrix[_]=ie.matrix,T.castShadow){const x=t.get(T);x.shadowIntensity=ie.intensity,x.shadowBias=ie.bias,x.shadowNormalBias=ie.normalBias,x.shadowRadius=ie.radius,x.shadowMapSize=ie.mapSize,i.spotShadow[_]=x,i.spotShadowMap[_]=G,S++}_++}else if(T.isRectAreaLight){const Z=e.get(T);Z.color.copy(R).multiplyScalar(L),Z.halfWidth.set(T.width*.5,0,0),Z.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=Z,g++}else if(T.isPointLight){const Z=e.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity),Z.distance=T.distance,Z.decay=T.decay,T.castShadow){const ie=T.shadow,x=t.get(T);x.shadowIntensity=ie.intensity,x.shadowBias=ie.bias,x.shadowNormalBias=ie.normalBias,x.shadowRadius=ie.radius,x.shadowMapSize=ie.mapSize,x.shadowCameraNear=ie.camera.near,x.shadowCameraFar=ie.camera.far,i.pointShadow[m]=x,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=T.shadow.matrix,b++}i.point[m]=Z,m++}else if(T.isHemisphereLight){const Z=e.get(T);Z.skyColor.copy(T.color).multiplyScalar(L),Z.groundColor.copy(T.groundColor).multiplyScalar(L),i.hemi[p]=Z,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==m||F.spotLength!==_||F.rectAreaLength!==g||F.hemiLength!==p||F.numDirectionalShadows!==w||F.numPointShadows!==b||F.numSpotShadows!==S||F.numSpotMaps!==k||F.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+k-D,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,F.directionalLength=f,F.pointLength=m,F.spotLength=_,F.rectAreaLength=g,F.hemiLength=p,F.numDirectionalShadows=w,F.numPointShadows=b,F.numSpotShadows=S,F.numSpotMaps=k,F.numLightProbes=P,i.version=mg++)}function c(l,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const b=l[p];if(b.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(b.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:i}}function Dc(n){const e=new _g(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function vg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Dc(n),e.set(r,[o])):s>=a.length?(o=new Dc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class xg extends si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mg extends si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function Eg(n,e,t){let i=new Ml;const r=new Re,s=new Re,a=new Pt,o=new xg({depthPacking:ef}),c=new Mg,l={},u=t.maxTextureSize,h={[Ei]:on,[on]:Ei,[qt]:qt},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:yg,fragmentShader:Sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ht;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let p=this.type;this.render=function(D,P,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),R=n.state;R.setBlending(gn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=p!==Zn&&this.type===Zn,Y=p===Zn&&this.type!==Zn;for(let G=0,Z=D.length;G<Z;G++){const ie=D[G],x=ie.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;r.copy(x.mapSize);const I=x.getFrameExtents();if(r.multiply(I),s.copy(x.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/I.x),r.x=s.x*I.x,x.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/I.y),r.y=s.y*I.y,x.mapSize.y=s.y)),x.map===null||L===!0||Y===!0){const H=this.type!==Zn?{minFilter:dn,magFilter:dn}:{};x.map!==null&&x.map.dispose(),x.map=new ii(r.x,r.y,H),x.map.texture.name=ie.name+".shadowMap",x.camera.updateProjectionMatrix()}n.setRenderTarget(x.map),n.clear();const O=x.getViewportCount();for(let H=0;H<O;H++){const j=x.getViewport(H);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),R.viewport(a),x.updateMatrices(ie,H),i=x.getFrustum(),S(P,F,x.camera,ie,this.type)}x.isPointLightShadow!==!0&&this.type===Zn&&w(x,F),x.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,y,T)};function w(D,P){const F=e.update(_);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ii(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,_,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,F,f,_,null)}function b(D,P,F,E){let y=null;const T=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(T!==void 0)y=T;else if(y=F.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const R=y.uuid,L=P.uuid;let Y=l[R];Y===void 0&&(Y={},l[R]=Y);let G=Y[L];G===void 0&&(G=y.clone(),Y[L]=G,P.addEventListener("dispose",k)),y=G}if(y.visible=P.visible,y.wireframe=P.wireframe,E===Zn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=n.properties.get(y);R.light=F}return y}function S(D,P,F,E,y){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===Zn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const L=e.update(D),Y=D.material;if(Array.isArray(Y)){const G=L.groups;for(let Z=0,ie=G.length;Z<ie;Z++){const x=G[Z],I=Y[x.materialIndex];if(I&&I.visible){const O=b(D,I,E,y);D.onBeforeShadow(n,D,P,F,L,O,x),n.renderBufferDirect(F,null,L,O,D,x),D.onAfterShadow(n,D,P,F,L,O,x)}}}else if(Y.visible){const G=b(D,Y,E,y);D.onBeforeShadow(n,D,P,F,L,G,null),n.renderBufferDirect(F,null,L,G,D,null),D.onAfterShadow(n,D,P,F,L,G,null)}}const R=D.children;for(let L=0,Y=R.length;L<Y;L++)S(R[L],P,F,E,y)}function k(D){D.target.removeEventListener("dispose",k);for(const F in l){const E=l[F],y=D.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const wg={[vo]:xo,[Mo]:Eo,[yo]:wo,[Lr]:So,[xo]:vo,[Eo]:Mo,[wo]:yo,[So]:Lr};function bg(n,e){function t(){let N=!1;const pe=new Pt;let $=null;const ce=new Pt(0,0,0,0);return{setMask:function(Ae){$!==Ae&&!N&&(n.colorMask(Ae,Ae,Ae,Ae),$=Ae)},setLocked:function(Ae){N=Ae},setClear:function(Ae,ye,Ye,mt,Nt){Nt===!0&&(Ae*=mt,ye*=mt,Ye*=mt),pe.set(Ae,ye,Ye,mt),ce.equals(pe)===!1&&(n.clearColor(Ae,ye,Ye,mt),ce.copy(pe))},reset:function(){N=!1,$=null,ce.set(-1,0,0,0)}}}function i(){let N=!1,pe=!1,$=null,ce=null,Ae=null;return{setReversed:function(ye){if(pe!==ye){const Ye=e.get("EXT_clip_control");pe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const mt=Ae;Ae=null,this.setClear(mt)}pe=ye},getReversed:function(){return pe},setTest:function(ye){ye?oe(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ye){$!==ye&&!N&&(n.depthMask(ye),$=ye)},setFunc:function(ye){if(pe&&(ye=wg[ye]),ce!==ye){switch(ye){case vo:n.depthFunc(n.NEVER);break;case xo:n.depthFunc(n.ALWAYS);break;case Mo:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case yo:n.depthFunc(n.EQUAL);break;case So:n.depthFunc(n.GEQUAL);break;case Eo:n.depthFunc(n.GREATER);break;case wo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=ye}},setLocked:function(ye){N=ye},setClear:function(ye){Ae!==ye&&(pe&&(ye=1-ye),n.clearDepth(ye),Ae=ye)},reset:function(){N=!1,$=null,ce=null,Ae=null,pe=!1}}}function r(){let N=!1,pe=null,$=null,ce=null,Ae=null,ye=null,Ye=null,mt=null,Nt=null;return{setTest:function(xt){N||(xt?oe(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(xt){pe!==xt&&!N&&(n.stencilMask(xt),pe=xt)},setFunc:function(xt,Ot,jt){($!==xt||ce!==Ot||Ae!==jt)&&(n.stencilFunc(xt,Ot,jt),$=xt,ce=Ot,Ae=jt)},setOp:function(xt,Ot,jt){(ye!==xt||Ye!==Ot||mt!==jt)&&(n.stencilOp(xt,Ot,jt),ye=xt,Ye=Ot,mt=jt)},setLocked:function(xt){N=xt},setClear:function(xt){Nt!==xt&&(n.clearStencil(xt),Nt=xt)},reset:function(){N=!1,pe=null,$=null,ce=null,Ae=null,ye=null,Ye=null,mt=null,Nt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,b=null,S=null,k=null,D=null,P=new nt(0,0,0),F=0,E=!1,y=null,T=null,R=null,L=null,Y=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ie=0;const x=n.getParameter(n.VERSION);x.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(x)[1]),Z=ie>=1):x.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),Z=ie>=2);let I=null,O={};const H=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),Me=new Pt().fromArray(H),Q=new Pt().fromArray(j);function he(N,pe,$,ce){const Ae=new Uint8Array(4),ye=n.createTexture();n.bindTexture(N,ye),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<$;Ye++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(pe+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return ye}const re={};re[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(Lr),We(!1),He(Ol),oe(n.CULL_FACE),V(gn);function oe(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ve(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Pe(N,pe){return h[N]!==pe?(n.bindFramebuffer(N,pe),h[N]=pe,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ke(N,pe){let $=f,ce=!1;if(N){$=d.get(pe),$===void 0&&($=[],d.set(pe,$));const Ae=N.textures;if($.length!==Ae.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Ye=Ae.length;ye<Ye;ye++)$[ye]=n.COLOR_ATTACHMENT0+ye;$.length=Ae.length,ce=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ce=!0);ce&&n.drawBuffers($)}function _t(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const qe={[Kn]:n.FUNC_ADD,[Ph]:n.FUNC_SUBTRACT,[Dh]:n.FUNC_REVERSE_SUBTRACT};qe[Ih]=n.MIN,qe[Lh]=n.MAX;const $e={[mo]:n.ZERO,[Uh]:n.ONE,[Nh]:n.SRC_COLOR,[go]:n.SRC_ALPHA,[Bh]:n.SRC_ALPHA_SATURATE,[bu]:n.DST_COLOR,[wu]:n.DST_ALPHA,[Fh]:n.ONE_MINUS_SRC_COLOR,[_o]:n.ONE_MINUS_SRC_ALPHA,[zh]:n.ONE_MINUS_DST_COLOR,[Oh]:n.ONE_MINUS_DST_ALPHA,[kh]:n.CONSTANT_COLOR,[Hh]:n.ONE_MINUS_CONSTANT_COLOR,[Vh]:n.CONSTANT_ALPHA,[Gh]:n.ONE_MINUS_CONSTANT_ALPHA};function V(N,pe,$,ce,Ae,ye,Ye,mt,Nt,xt){if(N===gn){_===!0&&(ve(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),N!==Eu){if(N!==g||xt!==E){if((p!==Kn||S!==Kn)&&(n.blendEquation(n.FUNC_ADD),p=Kn,S=Kn),xt)switch(N){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case aa:n.blendFunc(n.ONE,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case aa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,b=null,k=null,D=null,P.set(0,0,0),F=0,g=N,E=xt}return}Ae=Ae||pe,ye=ye||$,Ye=Ye||ce,(pe!==p||Ae!==S)&&(n.blendEquationSeparate(qe[pe],qe[Ae]),p=pe,S=Ae),($!==w||ce!==b||ye!==k||Ye!==D)&&(n.blendFuncSeparate($e[$],$e[ce],$e[ye],$e[Ye]),w=$,b=ce,k=ye,D=Ye),(mt.equals(P)===!1||Nt!==F)&&(n.blendColor(mt.r,mt.g,mt.b,Nt),P.copy(mt),F=Nt),g=N,E=!1}function pt(N,pe){N.side===qt?ve(n.CULL_FACE):oe(n.CULL_FACE);let $=N.side===on;pe&&($=!$),We($),N.blending===Cr&&N.transparent===!1?V(gn):V(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const ce=N.stencilWrite;o.setTest(ce),ce&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),et(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function He(N){N!==Rh?(oe(n.CULL_FACE),N!==T&&(N===Ol?n.cullFace(n.BACK):N===Ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),T=N}function K(N){N!==R&&(Z&&n.lineWidth(N),R=N)}function et(N,pe,$){N?(oe(n.POLYGON_OFFSET_FILL),(L!==pe||Y!==$)&&(n.polygonOffset(pe,$),L=pe,Y=$)):ve(n.POLYGON_OFFSET_FILL)}function we(N){N?oe(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+G-1),I!==N&&(n.activeTexture(N),I=N)}function M(N,pe,$){$===void 0&&(I===null?$=n.TEXTURE0+G-1:$=I);let ce=O[$];ce===void 0&&(ce={type:void 0,texture:void 0},O[$]=ce),(ce.type!==N||ce.texture!==pe)&&(I!==$&&(n.activeTexture($),I=$),n.bindTexture(N,pe||re[N]),ce.type=N,ce.texture=pe)}function q(){const N=O[I];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(N){Me.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function be(N){Q.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function st(N,pe){let $=l.get(pe);$===void 0&&($=new WeakMap,l.set(pe,$));let ce=$.get(N);ce===void 0&&(ce=n.getUniformBlockIndex(pe,N.name),$.set(N,ce))}function Ve(N,pe){const ce=l.get(pe).get(N);c.get(pe)!==ce&&(n.uniformBlockBinding(pe,ce,N.__bindingPointIndex),c.set(pe,ce))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,O={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,b=null,S=null,k=null,D=null,P=new nt(0,0,0),F=0,E=!1,y=null,T=null,R=null,L=null,Y=null,Me.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:ve,bindFramebuffer:Pe,drawBuffers:ke,useProgram:_t,setBlending:V,setMaterial:pt,setFlipSided:We,setCullFace:He,setLineWidth:K,setPolygonOffset:et,setScissorTest:we,activeTexture:A,bindTexture:M,unbindTexture:q,compressedTexImage2D:ae,compressedTexImage3D:le,texImage2D:De,texImage3D:Xe,updateUBOMapping:st,uniformBlockBinding:Ve,texStorage2D:it,texStorage3D:fe,texSubImage2D:ee,texSubImage3D:ge,compressedTexSubImage2D:xe,compressedTexSubImage3D:Te,scissor:Ze,viewport:be,reset:Ke}}function Ic(n,e,t,i){const r=Tg(i);switch(t){case Iu:return n*e;case Uu:return n*e;case Nu:return n*e*2;case dl:return n*e/r.components*r.byteLength;case pl:return n*e/r.components*r.byteLength;case Fu:return n*e*2/r.components*r.byteLength;case ml:return n*e*2/r.components*r.byteLength;case Lu:return n*e*3/r.components*r.byteLength;case Fn:return n*e*4/r.components*r.byteLength;case gl:return n*e*4/r.components*r.byteLength;case $s:case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qs:case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:case Do:return Math.max(n,16)*Math.max(e,8)/4;case Ro:case Po:return Math.max(n,8)*Math.max(e,8)/2;case Io:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ta:case Ko:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ou:case $o:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jo:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(n){switch(n){case ni:case Cu:return{byteLength:1,components:1};case ls:case Pu:case Ki:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case Zi:case ul:case Bn:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ag(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function m(A,M){return f?new OffscreenCanvas(A,M):la("canvas")}function _(A,M,q){let ae=1;const le=we(A);if((le.width>q||le.height>q)&&(ae=q/Math.max(le.width,le.height)),ae<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const ee=Math.floor(ae*le.width),ge=Math.floor(ae*le.height);h===void 0&&(h=m(ee,ge));const xe=M?m(ee,ge):h;return xe.width=ee,xe.height=ge,xe.getContext("2d").drawImage(A,0,0,ee,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+ge+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,M,q,ae,le=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=M;if(M===n.RED&&(q===n.FLOAT&&(ee=n.R32F),q===n.HALF_FLOAT&&(ee=n.R16F),q===n.UNSIGNED_BYTE&&(ee=n.R8)),M===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.R8UI),q===n.UNSIGNED_SHORT&&(ee=n.R16UI),q===n.UNSIGNED_INT&&(ee=n.R32UI),q===n.BYTE&&(ee=n.R8I),q===n.SHORT&&(ee=n.R16I),q===n.INT&&(ee=n.R32I)),M===n.RG&&(q===n.FLOAT&&(ee=n.RG32F),q===n.HALF_FLOAT&&(ee=n.RG16F),q===n.UNSIGNED_BYTE&&(ee=n.RG8)),M===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RG8UI),q===n.UNSIGNED_SHORT&&(ee=n.RG16UI),q===n.UNSIGNED_INT&&(ee=n.RG32UI),q===n.BYTE&&(ee=n.RG8I),q===n.SHORT&&(ee=n.RG16I),q===n.INT&&(ee=n.RG32I)),M===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),q===n.UNSIGNED_INT&&(ee=n.RGB32UI),q===n.BYTE&&(ee=n.RGB8I),q===n.SHORT&&(ee=n.RGB16I),q===n.INT&&(ee=n.RGB32I)),M===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),q===n.UNSIGNED_INT&&(ee=n.RGBA32UI),q===n.BYTE&&(ee=n.RGBA8I),q===n.SHORT&&(ee=n.RGBA16I),q===n.INT&&(ee=n.RGBA32I)),M===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),M===n.RGBA){const ge=le?va:yt.getTransfer(ae);q===n.FLOAT&&(ee=n.RGBA32F),q===n.HALF_FLOAT&&(ee=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ee=ge===Ct?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(A,M){let q;return A?M===null||M===Zi||M===ji?q=n.DEPTH24_STENCIL8:M===Bn?q=n.DEPTH32F_STENCIL8:M===ls&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===ji?q=n.DEPTH_COMPONENT24:M===Bn?q=n.DEPTH_COMPONENT32F:M===ls&&(q=n.DEPTH_COMPONENT16),q}function k(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){const M=A.target;M.removeEventListener("dispose",D),F(M),M.isVideoTexture&&u.delete(M)}function P(A){const M=A.target;M.removeEventListener("dispose",P),y(M)}function F(A){const M=i.get(A);if(M.__webglInit===void 0)return;const q=A.source,ae=d.get(q);if(ae){const le=ae[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&E(A),Object.keys(ae).length===0&&d.delete(q)}i.remove(A)}function E(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const q=A.source,ae=d.get(q);delete ae[M.__cacheKey],a.memory.textures--}function y(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(M.__webglFramebuffer[ae]))for(let le=0;le<M.__webglFramebuffer[ae].length;le++)n.deleteFramebuffer(M.__webglFramebuffer[ae][le]);else n.deleteFramebuffer(M.__webglFramebuffer[ae]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ae])}else{if(Array.isArray(M.__webglFramebuffer))for(let ae=0;ae<M.__webglFramebuffer.length;ae++)n.deleteFramebuffer(M.__webglFramebuffer[ae]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ae=0;ae<M.__webglColorRenderbuffer.length;ae++)M.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ae]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=A.textures;for(let ae=0,le=q.length;ae<le;ae++){const ee=i.get(q[ae]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(q[ae])}i.remove(A)}let T=0;function R(){T=0}function L(){const A=T;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),T+=1,A}function Y(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function G(A,M){const q=i.get(A);if(A.isVideoTexture&&K(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(q,A,M);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+M)}function Z(A,M){const q=i.get(A);if(A.version>0&&q.__version!==A.version){Q(q,A,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+M)}function ie(A,M){const q=i.get(A);if(A.version>0&&q.__version!==A.version){Q(q,A,M);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+M)}function x(A,M){const q=i.get(A);if(A.version>0&&q.__version!==A.version){he(q,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+M)}const I={[kn]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Ao]:n.MIRRORED_REPEAT},O={[dn]:n.NEAREST,[Jh]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[Nn]:n.LINEAR_MIPMAP_LINEAR},H={[nf]:n.NEVER,[cf]:n.ALWAYS,[rf]:n.LESS,[zu]:n.LEQUAL,[sf]:n.EQUAL,[lf]:n.GEQUAL,[af]:n.GREATER,[of]:n.NOTEQUAL};function j(A,M){if(M.type===Bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===ba||M.magFilter===ps||M.magFilter===Nn||M.minFilter===_n||M.minFilter===ba||M.minFilter===ps||M.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,I[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,I[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,I[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,O[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,O[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==ps&&M.minFilter!==Nn||M.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Me(A,M){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D));const ae=M.source;let le=d.get(ae);le===void 0&&(le={},d.set(ae,le));const ee=Y(M);if(ee!==A.__cacheKey){le[ee]===void 0&&(le[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),le[ee].usedTimes++;const ge=le[A.__cacheKey];ge!==void 0&&(le[A.__cacheKey].usedTimes--,ge.usedTimes===0&&E(M)),A.__cacheKey=ee,A.__webglTexture=le[ee].texture}return q}function Q(A,M,q){let ae=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=n.TEXTURE_3D);const le=Me(A,M),ee=M.source;t.bindTexture(ae,A.__webglTexture,n.TEXTURE0+q);const ge=i.get(ee);if(ee.version!==ge.__version||le===!0){t.activeTexture(n.TEXTURE0+q);const xe=yt.getPrimaries(yt.workingColorSpace),Te=M.colorSpace===jn?null:yt.getPrimaries(M.colorSpace),it=M.colorSpace===jn||xe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let fe=_(M.image,!1,r.maxTextureSize);fe=et(M,fe);const De=s.convert(M.format,M.colorSpace),Xe=s.convert(M.type);let Ze=b(M.internalFormat,De,Xe,M.colorSpace,M.isVideoTexture);j(ae,M);let be;const st=M.mipmaps,Ve=M.isVideoTexture!==!0,Ke=ge.__version===void 0||le===!0,N=ee.dataReady,pe=k(M,fe);if(M.isDepthTexture)Ze=S(M.format===$i,M.type),Ke&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ze,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ze,fe.width,fe.height,0,De,Xe,null));else if(M.isDataTexture)if(st.length>0){Ve&&Ke&&t.texStorage2D(n.TEXTURE_2D,pe,Ze,st[0].width,st[0].height);for(let $=0,ce=st.length;$<ce;$++)be=st[$],Ve?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,be.width,be.height,De,Xe,be.data):t.texImage2D(n.TEXTURE_2D,$,Ze,be.width,be.height,0,De,Xe,be.data);M.generateMipmaps=!1}else Ve?(Ke&&t.texStorage2D(n.TEXTURE_2D,pe,Ze,fe.width,fe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,De,Xe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ze,fe.width,fe.height,0,De,Xe,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ze,st[0].width,st[0].height,fe.depth);for(let $=0,ce=st.length;$<ce;$++)if(be=st[$],M.format!==Fn)if(De!==null)if(Ve){if(N)if(M.layerUpdates.size>0){const Ae=Ic(be.width,be.height,M.format,M.type);for(const ye of M.layerUpdates){const Ye=be.data.subarray(ye*Ae/be.data.BYTES_PER_ELEMENT,(ye+1)*Ae/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ye,be.width,be.height,1,De,Ye)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,be.width,be.height,fe.depth,De,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ze,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,be.width,be.height,fe.depth,De,Xe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Ze,be.width,be.height,fe.depth,0,De,Xe,be.data)}else{Ve&&Ke&&t.texStorage2D(n.TEXTURE_2D,pe,Ze,st[0].width,st[0].height);for(let $=0,ce=st.length;$<ce;$++)be=st[$],M.format!==Fn?De!==null?Ve?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,be.width,be.height,De,be.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,be.width,be.height,De,Xe,be.data):t.texImage2D(n.TEXTURE_2D,$,Ze,be.width,be.height,0,De,Xe,be.data)}else if(M.isDataArrayTexture)if(Ve){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ze,fe.width,fe.height,fe.depth),N)if(M.layerUpdates.size>0){const $=Ic(fe.width,fe.height,M.format,M.type);for(const ce of M.layerUpdates){const Ae=fe.data.subarray(ce*$/fe.data.BYTES_PER_ELEMENT,(ce+1)*$/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,De,Xe,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,De,Xe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ze,fe.width,fe.height,fe.depth,0,De,Xe,fe.data);else if(M.isData3DTexture)Ve?(Ke&&t.texStorage3D(n.TEXTURE_3D,pe,Ze,fe.width,fe.height,fe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,De,Xe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ze,fe.width,fe.height,fe.depth,0,De,Xe,fe.data);else if(M.isFramebufferTexture){if(Ke)if(Ve)t.texStorage2D(n.TEXTURE_2D,pe,Ze,fe.width,fe.height);else{let $=fe.width,ce=fe.height;for(let Ae=0;Ae<pe;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ze,$,ce,0,De,Xe,null),$>>=1,ce>>=1}}else if(st.length>0){if(Ve&&Ke){const $=we(st[0]);t.texStorage2D(n.TEXTURE_2D,pe,Ze,$.width,$.height)}for(let $=0,ce=st.length;$<ce;$++)be=st[$],Ve?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,De,Xe,be):t.texImage2D(n.TEXTURE_2D,$,Ze,De,Xe,be);M.generateMipmaps=!1}else if(Ve){if(Ke){const $=we(fe);t.texStorage2D(n.TEXTURE_2D,pe,Ze,$.width,$.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Xe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ze,De,Xe,fe);g(M)&&p(ae),ge.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function he(A,M,q){if(M.image.length!==6)return;const ae=Me(A,M),le=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+q);const ee=i.get(le);if(le.version!==ee.__version||ae===!0){t.activeTexture(n.TEXTURE0+q);const ge=yt.getPrimaries(yt.workingColorSpace),xe=M.colorSpace===jn?null:yt.getPrimaries(M.colorSpace),Te=M.colorSpace===jn||ge===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,De=[];for(let ce=0;ce<6;ce++)!it&&!fe?De[ce]=_(M.image[ce],!0,r.maxCubemapSize):De[ce]=fe?M.image[ce].image:M.image[ce],De[ce]=et(M,De[ce]);const Xe=De[0],Ze=s.convert(M.format,M.colorSpace),be=s.convert(M.type),st=b(M.internalFormat,Ze,be,M.colorSpace),Ve=M.isVideoTexture!==!0,Ke=ee.__version===void 0||ae===!0,N=le.dataReady;let pe=k(M,Xe);j(n.TEXTURE_CUBE_MAP,M);let $;if(it){Ve&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,st,Xe.width,Xe.height);for(let ce=0;ce<6;ce++){$=De[ce].mipmaps;for(let Ae=0;Ae<$.length;Ae++){const ye=$[Ae];M.format!==Fn?Ze!==null?Ve?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,ye.width,ye.height,Ze,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,st,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,ye.width,ye.height,Ze,be,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,st,ye.width,ye.height,0,Ze,be,ye.data)}}}else{if($=M.mipmaps,Ve&&Ke){$.length>0&&pe++;const ce=we(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,st,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){Ve?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De[ce].width,De[ce].height,Ze,be,De[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,st,De[ce].width,De[ce].height,0,Ze,be,De[ce].data);for(let Ae=0;Ae<$.length;Ae++){const Ye=$[Ae].image[ce].image;Ve?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Ye.width,Ye.height,Ze,be,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,st,Ye.width,Ye.height,0,Ze,be,Ye.data)}}else{Ve?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ze,be,De[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,st,Ze,be,De[ce]);for(let Ae=0;Ae<$.length;Ae++){const ye=$[Ae];Ve?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Ze,be,ye.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,st,Ze,be,ye.image[ce])}}}g(M)&&p(n.TEXTURE_CUBE_MAP),ee.__version=le.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function re(A,M,q,ae,le,ee){const ge=s.convert(q.format,q.colorSpace),xe=s.convert(q.type),Te=b(q.internalFormat,ge,xe,q.colorSpace),it=i.get(M),fe=i.get(q);if(fe.__renderTarget=M,!it.__hasExternalTextures){const De=Math.max(1,M.width>>ee),Xe=Math.max(1,M.height>>ee);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Te,De,Xe,M.depth,0,ge,xe,null):t.texImage2D(le,ee,Te,De,Xe,0,ge,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),He(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,le,fe.__webglTexture,0,We(M)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,le,fe.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(A,M,q){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const ae=M.depthTexture,le=ae&&ae.isDepthTexture?ae.type:null,ee=S(M.stencilBuffer,le),ge=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=We(M);He(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ee,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,A)}else{const ae=M.textures;for(let le=0;le<ae.length;le++){const ee=ae[le],ge=s.convert(ee.format,ee.colorSpace),xe=s.convert(ee.type),Te=b(ee.internalFormat,ge,xe,ee.colorSpace),it=We(M);q&&He(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Te,M.width,M.height):He(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,Te,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Te,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(M.depthTexture);ae.__renderTarget=M,(!ae.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const le=ae.__webglTexture,ee=We(M);if(M.depthTexture.format===Pr)He(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(M.depthTexture.format===$i)He(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const M=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const ae=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",le)};ae.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=ae}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,A)}else if(q){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=n.createRenderbuffer(),oe(M.__webglDepthbuffer[ae],A,!1);else{const le=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),oe(M.__webglDepthbuffer,A,!1);else{const ae=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(A,M,q){const ae=i.get(A);M!==void 0&&re(ae.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Pe(A)}function _t(A){const M=A.texture,q=i.get(A),ae=i.get(M);A.addEventListener("dispose",P);const le=A.textures,ee=A.isWebGLCubeRenderTarget===!0,ge=le.length>1;if(ge||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=M.version,a.memory.textures++),ee){q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[xe]=[];for(let Te=0;Te<M.mipmaps.length;Te++)q.__webglFramebuffer[xe][Te]=n.createFramebuffer()}else q.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)q.__webglFramebuffer[xe]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(ge)for(let xe=0,Te=le.length;xe<Te;xe++){const it=i.get(le[xe]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&He(A)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let xe=0;xe<le.length;xe++){const Te=le[xe];q.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[xe]);const it=s.convert(Te.format,Te.colorSpace),fe=s.convert(Te.type),De=b(Te.internalFormat,it,fe,Te.colorSpace,A.isXRRenderTarget===!0),Xe=We(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,De,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,q.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),j(n.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)re(q.__webglFramebuffer[xe][Te],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Te);else re(q.__webglFramebuffer[xe],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let xe=0,Te=le.length;xe<Te;xe++){const it=le[xe],fe=i.get(it);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),j(n.TEXTURE_2D,it),re(q.__webglFramebuffer,A,it,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),g(it)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ae.__webglTexture),j(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)re(q.__webglFramebuffer[Te],A,M,n.COLOR_ATTACHMENT0,xe,Te);else re(q.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,xe,0);g(M)&&p(xe),t.unbindTexture()}A.depthBuffer&&Pe(A)}function qe(A){const M=A.textures;for(let q=0,ae=M.length;q<ae;q++){const le=M[q];if(g(le)){const ee=w(A),ge=i.get(le).__webglTexture;t.bindTexture(ee,ge),p(ee),t.unbindTexture()}}}const $e=[],V=[];function pt(A){if(A.samples>0){if(He(A)===!1){const M=A.textures,q=A.width,ae=A.height;let le=n.COLOR_BUFFER_BIT;const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),xe=M.length>1;if(xe)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);const it=i.get(M[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,q,ae,0,0,q,ae,le,n.NEAREST),c===!0&&($e.length=0,V.length=0,$e.push(n.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&($e.push(ee),V.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);const it=i.get(M[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function We(A){return Math.min(r.maxSamples,A.samples)}function He(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function K(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function et(A,M){const q=A.colorSpace,ae=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==wi&&q!==jn&&(yt.getTransfer(q)===Ct?(ae!==Fn||le!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function we(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=ie,this.setTextureCube=x,this.rebindTextures=ke,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=He}function Rg(n,e){function t(i,r=jn){let s;const a=yt.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cu)return n.BYTE;if(i===Pu)return n.SHORT;if(i===ls)return n.UNSIGNED_SHORT;if(i===ul)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Ki)return n.HALF_FLOAT;if(i===Iu)return n.ALPHA;if(i===Lu)return n.RGB;if(i===Fn)return n.RGBA;if(i===Uu)return n.LUMINANCE;if(i===Nu)return n.LUMINANCE_ALPHA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===dl)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===Fu)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===$s||i===Js||i===Qs||i===ea)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ro||i===Co||i===Po||i===Do)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Po)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Io||i===Lo||i===Uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Io||i===Lo)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===No||i===Fo||i===Oo||i===zo||i===Bo||i===ko||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===Yo||i===qo||i===Zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===No)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ko)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ho)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Go)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ta||i===Ko||i===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ta)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ou||i===$o||i===Jo||i===Qo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ta)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Cg extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cn({vertexShader:Dg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Tt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ug extends Br{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=new Lg,g=t.getContextAttributes();let p=null,w=null;const b=[],S=[],k=new Re;let D=null;const P=new En;P.viewport=new Pt;const F=new En;F.viewport=new Pt;const E=[P,F],y=new Cg;let T=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=b[Q];return he===void 0&&(he=new Ja,b[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=b[Q];return he===void 0&&(he=new Ja,b[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=b[Q];return he===void 0&&(he=new Ja,b[Q]=he),he.getHandSpace()};function L(Q){const he=S.indexOf(Q.inputSource);if(he===-1)return;const re=b[he];re!==void 0&&(re.update(Q.inputSource,Q.frame,l||a),re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",G);for(let Q=0;Q<b.length;Q++){const he=S[Q];he!==null&&(S[Q]=null,b[Q].disconnect(he))}T=null,R=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),r.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ii(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,re=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?$i:Pr,re=g.stencil?ji:Zi);const ve={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new ii(d.textureWidth,d.textureHeight,{format:Fn,type:ni,depthTexture:new El(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(Q){for(let he=0;he<Q.removed.length;he++){const re=Q.removed[he],oe=S.indexOf(re);oe>=0&&(S[oe]=null,b[oe].disconnect(re))}for(let he=0;he<Q.added.length;he++){const re=Q.added[he];let oe=S.indexOf(re);if(oe===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=S.length){S.push(re),oe=Pe;break}else if(S[Pe]===null){S[Pe]=re,oe=Pe;break}if(oe===-1)break}const ve=b[oe];ve&&ve.connect(re)}}const Z=new X,ie=new X;function x(Q,he,re){Z.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(re.matrixWorld);const oe=Z.distanceTo(ie),ve=he.projectionMatrix.elements,Pe=re.projectionMatrix.elements,ke=ve[14]/(ve[10]-1),_t=ve[14]/(ve[10]+1),qe=(ve[9]+1)/ve[5],$e=(ve[9]-1)/ve[5],V=(ve[8]-1)/ve[0],pt=(Pe[8]+1)/Pe[0],We=ke*V,He=ke*pt,K=oe/(-V+pt),et=K*-V;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(et),Q.translateZ(K),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const we=ke+K,A=_t+K,M=We-et,q=He+(oe-et),ae=qe*_t/A*we,le=$e*_t/A*we;Q.projectionMatrix.makePerspective(M,q,ae,le,we,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function I(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let he=Q.near,re=Q.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(re=_.depthFar)),y.near=F.near=P.near=he,y.far=F.far=P.far=re,(T!==y.near||R!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,R=y.far),P.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,y.layers.mask=P.layers.mask|F.layers.mask;const oe=Q.parent,ve=y.cameras;I(y,oe);for(let Pe=0;Pe<ve.length;Pe++)I(ve[Pe],oe);ve.length===2?x(y,P,F):y.projectionMatrix.copy(P.projectionMatrix),O(Q,y,oe)};function O(Q,he,re){re===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let H=null;function j(Q,he){if(u=he.getViewerPose(l||a),m=he,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let oe=!1;re.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Pe=0;Pe<re.length;Pe++){const ke=re[Pe];let _t=null;if(f!==null)_t=f.getViewport(ke);else{const $e=h.getViewSubImage(d,ke);_t=$e.viewport,Pe===0&&(e.setRenderTargetTextures(w,$e.colorTexture,d.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(w))}let qe=E[Pe];qe===void 0&&(qe=new En,qe.layers.enable(Pe),qe.viewport=new Pt,E[Pe]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(_t.x,_t.y,_t.width,_t.height),Pe===0&&(y.matrix.copy(qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(qe)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Pe=h.getDepthInformation(re[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let re=0;re<b.length;re++){const oe=S[re],ve=b[re];oe!==null&&ve!==void 0&&ve.update(oe,he,l||a)}H&&H(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}const Me=new Ku;Me.setAnimationLoop(j),this.setAnimationLoop=function(Q){H=Q},this.dispose=function(){}}}const Fi=new Hn,Ng=new Dt;function Fg(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Yu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,w,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,S=w.envMapRotation;b&&(g.envMap.value=b,Fi.copy(S),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(Fi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Og(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const S=b.program;i.uniformBlockBinding(w,S)}function l(w,b){let S=r[w.id];S===void 0&&(m(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",g));const k=b.program;i.updateUBOMapping(w,k);const D=e.render.frame;s[w.id]!==D&&(d(w),s[w.id]=D)}function u(w){const b=h();w.__bindingPointIndex=b;const S=n.createBuffer(),k=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,k,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=r[w.id],S=w.uniforms,k=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,P=S.length;D<P;D++){const F=Array.isArray(S[D])?S[D]:[S[D]];for(let E=0,y=F.length;E<y;E++){const T=F[E];if(f(T,D,E,k)===!0){const R=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let G=0;G<L.length;G++){const Z=L[G],ie=_(Z);typeof Z=="number"||typeof Z=="boolean"?(T.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,R+Y,T.__data)):Z.isMatrix3?(T.__data[0]=Z.elements[0],T.__data[1]=Z.elements[1],T.__data[2]=Z.elements[2],T.__data[3]=0,T.__data[4]=Z.elements[3],T.__data[5]=Z.elements[4],T.__data[6]=Z.elements[5],T.__data[7]=0,T.__data[8]=Z.elements[6],T.__data[9]=Z.elements[7],T.__data[10]=Z.elements[8],T.__data[11]=0):(Z.toArray(T.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,b,S,k){const D=w.value,P=b+"_"+S;if(k[P]===void 0)return typeof D=="number"||typeof D=="boolean"?k[P]=D:k[P]=D.clone(),!0;{const F=k[P];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return k[P]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function m(w){const b=w.uniforms;let S=0;const k=16;for(let P=0,F=b.length;P<F;P++){const E=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,T=E.length;y<T;y++){const R=E[y],L=Array.isArray(R.value)?R.value:[R.value];for(let Y=0,G=L.length;Y<G;Y++){const Z=L[Y],ie=_(Z),x=S%k,I=x%ie.boundary,O=x+I;S+=I,O!==0&&k-O<ie.storage&&(S+=k-O),R.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=ie.storage}}}const D=S%k;return D>0&&(S+=k-D),w.__size=S,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function g(w){const b=w.target;b.removeEventListener("dispose",g);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class zg{constructor(e={}){const{canvas:t=Af(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Mi,this.toneMappingExposure=1;const S=this;let k=!1,D=0,P=0,F=null,E=-1,y=null;const T=new Pt,R=new Pt;let L=null;const Y=new nt(0);let G=0,Z=t.width,ie=t.height,x=1,I=null,O=null;const H=new Pt(0,0,Z,ie),j=new Pt(0,0,Z,ie);let Me=!1;const Q=new Ml;let he=!1,re=!1;const oe=new Dt,ve=new Dt,Pe=new X,ke=new Pt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function $e(){return F===null?x:1}let V=i;function pt(v,C){return t.getContext(v,C)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ye,!1),V===null){const C="webgl2";if(V=pt(C,v),V===null)throw pt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let We,He,K,et,we,A,M,q,ae,le,ee,ge,xe,Te,it,fe,De,Xe,Ze,be,st,Ve,Ke,N;function pe(){We=new G0(V),We.init(),Ve=new Rg(V,We),He=new O0(V,We,e,Ve),K=new bg(V,We),He.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),et=new Y0(V),we=new ug,A=new Ag(V,We,K,we,He,Ve,et),M=new B0(S),q=new V0(S),ae=new Qf(V),Ke=new N0(V,ae),le=new W0(V,ae,et,Ke),ee=new Z0(V,le,ae,et),Ze=new q0(V,He,A),fe=new z0(we),ge=new cg(S,M,q,We,He,Ke,fe),xe=new Fg(S,we),Te=new fg,it=new vg(We),Xe=new U0(S,M,q,K,ee,f,c),De=new Eg(S,ee,He),N=new Og(V,et,He,K),be=new F0(V,We,et),st=new X0(V,We,et),et.programs=ge.programs,S.capabilities=He,S.extensions=We,S.properties=we,S.renderLists=Te,S.shadowMap=De,S.state=K,S.info=et}pe();const $=new Ug(S,V);this.xr=$,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const v=We.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=We.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return x},this.setPixelRatio=function(v){v!==void 0&&(x=v,this.setSize(Z,ie,!1))},this.getSize=function(v){return v.set(Z,ie)},this.setSize=function(v,C,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,ie=C,t.width=Math.floor(v*x),t.height=Math.floor(C*x),z===!0&&(t.style.width=v+"px",t.style.height=C+"px"),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(Z*x,ie*x).floor()},this.setDrawingBufferSize=function(v,C,z){Z=v,ie=C,x=z,t.width=Math.floor(v*z),t.height=Math.floor(C*z),this.setViewport(0,0,v,C)},this.getCurrentViewport=function(v){return v.copy(T)},this.getViewport=function(v){return v.copy(H)},this.setViewport=function(v,C,z,W){v.isVector4?H.set(v.x,v.y,v.z,v.w):H.set(v,C,z,W),K.viewport(T.copy(H).multiplyScalar(x).round())},this.getScissor=function(v){return v.copy(j)},this.setScissor=function(v,C,z,W){v.isVector4?j.set(v.x,v.y,v.z,v.w):j.set(v,C,z,W),K.scissor(R.copy(j).multiplyScalar(x).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(v){K.setScissorTest(Me=v)},this.setOpaqueSort=function(v){I=v},this.setTransparentSort=function(v){O=v},this.getClearColor=function(v){return v.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(v=!0,C=!0,z=!0){let W=0;if(v){let B=!1;if(F!==null){const J=F.texture.format;B=J===gl||J===ml||J===pl}if(B){const J=F.texture.type,me=J===ni||J===Zi||J===ls||J===ji||J===hl||J===fl,Ie=Xe.getClearColor(),Se=Xe.getClearAlpha(),ze=Ie.r,Je=Ie.g,Ne=Ie.b;me?(m[0]=ze,m[1]=Je,m[2]=Ne,m[3]=Se,V.clearBufferuiv(V.COLOR,0,m)):(_[0]=ze,_[1]=Je,_[2]=Ne,_[3]=Se,V.clearBufferiv(V.COLOR,0,_))}else W|=V.COLOR_BUFFER_BIT}C&&(W|=V.DEPTH_BUFFER_BIT),z&&(W|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Te.dispose(),it.dispose(),we.dispose(),M.dispose(),q.dispose(),ee.dispose(),Ke.dispose(),N.dispose(),ge.dispose(),$.dispose(),$.removeEventListener("sessionstart",zt),$.removeEventListener("sessionend",Ti),Tn.stop()};function ce(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const v=et.autoReset,C=De.enabled,z=De.autoUpdate,W=De.needsUpdate,B=De.type;pe(),et.autoReset=v,De.enabled=C,De.autoUpdate=z,De.needsUpdate=W,De.type=B}function ye(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ye(v){const C=v.target;C.removeEventListener("dispose",Ye),mt(C)}function mt(v){Nt(v),we.remove(v)}function Nt(v){const C=we.get(v).programs;C!==void 0&&(C.forEach(function(z){ge.releaseProgram(z)}),v.isShaderMaterial&&ge.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,z,W,B,J){C===null&&(C=_t);const me=B.isMesh&&B.matrixWorld.determinant()<0,Ie=li(v,C,z,W,B);K.setMaterial(W,me);let Se=z.index,ze=1;if(W.wireframe===!0){if(Se=le.getWireframeAttribute(z),Se===void 0)return;ze=2}const Je=z.drawRange,Ne=z.attributes.position;let tt=Je.start*ze,Qe=(Je.start+Je.count)*ze;J!==null&&(tt=Math.max(tt,J.start*ze),Qe=Math.min(Qe,(J.start+J.count)*ze)),Se!==null?(tt=Math.max(tt,0),Qe=Math.min(Qe,Se.count)):Ne!=null&&(tt=Math.max(tt,0),Qe=Math.min(Qe,Ne.count));const Mt=Qe-tt;if(Mt<0||Mt===1/0)return;Ke.setup(B,W,Ie,z,Se);let Ft,Ge=be;if(Se!==null&&(Ft=ae.get(Se),Ge=st,Ge.setIndex(Ft)),B.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*$e()),Ge.setMode(V.LINES)):Ge.setMode(V.TRIANGLES);else if(B.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),K.setLineWidth(Ue*$e()),B.isLineSegments?Ge.setMode(V.LINES):B.isLineLoop?Ge.setMode(V.LINE_LOOP):Ge.setMode(V.LINE_STRIP)}else B.isPoints?Ge.setMode(V.POINTS):B.isSprite&&Ge.setMode(V.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ge.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Ge.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,It=B._multiDrawCounts,rt=B._multiDrawCount,Bt=Se?ae.get(Se).bytesPerElement:1,pn=we.get(W).currentProgram.getUniforms();for(let Vt=0;Vt<rt;Vt++)pn.setValue(V,"_gl_DrawID",Vt),Ge.render(Ue[Vt]/Bt,It[Vt])}else if(B.isInstancedMesh)Ge.renderInstances(tt,Mt,B.count);else if(z.isInstancedBufferGeometry){const Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,It=Math.min(z.instanceCount,Ue);Ge.renderInstances(tt,Mt,It)}else Ge.render(tt,Mt)};function xt(v,C,z){v.transparent===!0&&v.side===qt&&v.forceSinglePass===!1?(v.side=on,v.needsUpdate=!0,oi(v,C,z),v.side=Ei,v.needsUpdate=!0,oi(v,C,z),v.side=qt):oi(v,C,z)}this.compile=function(v,C,z=null){z===null&&(z=v),p=it.get(z),p.init(C),b.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),v!==z&&v.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const J=B.material;if(J)if(Array.isArray(J))for(let me=0;me<J.length;me++){const Ie=J[me];xt(Ie,z,B),W.add(Ie)}else xt(J,z,B),W.add(J)}),b.pop(),p=null,W},this.compileAsync=function(v,C,z=null){const W=this.compile(v,C,z);return new Promise(B=>{function J(){if(W.forEach(function(me){we.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){B(v);return}setTimeout(J,10)}We.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ot=null;function jt(v){Ot&&Ot(v)}function zt(){Tn.stop()}function Ti(){Tn.start()}const Tn=new Ku;Tn.setAnimationLoop(jt),typeof self!="undefined"&&Tn.setContext(self),this.setAnimationLoop=function(v){Ot=v,$.setAnimationLoop(v),v===null?Tn.stop():Tn.start()},$.addEventListener("sessionstart",zt),$.addEventListener("sessionend",Ti),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(C),C=$.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,C,F),p=it.get(v,b.length),p.init(C),b.push(p),ve.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Q.setFromProjectionMatrix(ve),re=this.localClippingEnabled,he=fe.init(this.clippingPlanes,re),g=Te.get(v,w.length),g.init(),w.push(g),$.enabled===!0&&$.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&ai(J,C,-1/0,S.sortObjects)}ai(v,C,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(I,O),qe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,qe&&Xe.addToRenderList(g,v),this.info.render.frame++,he===!0&&fe.beginShadows();const z=p.state.shadowsArray;De.render(z,v,C),he===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,B=g.transmissive;if(p.setupLights(),C.isArrayCamera){const J=C.cameras;if(B.length>0)for(let me=0,Ie=J.length;me<Ie;me++){const Se=J[me];xn(W,B,v,Se)}qe&&Xe.render(v);for(let me=0,Ie=J.length;me<Ie;me++){const Se=J[me];Ai(g,v,Se,Se.viewport)}}else B.length>0&&xn(W,B,v,C),qe&&Xe.render(v),Ai(g,v,C);F!==null&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(S,v,C),Ke.resetDefaultState(),E=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],he===!0&&fe.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function ai(v,C,z,W){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Q.intersectsSprite(v)){W&&ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ve);const me=ee.update(v),Ie=v.material;Ie.visible&&g.push(v,me,Ie,z,ke.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Q.intersectsObject(v))){const me=ee.update(v),Ie=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ke.copy(v.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ke.copy(me.boundingSphere.center)),ke.applyMatrix4(v.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){const Se=me.groups;for(let ze=0,Je=Se.length;ze<Je;ze++){const Ne=Se[ze],tt=Ie[Ne.materialIndex];tt&&tt.visible&&g.push(v,me,tt,z,ke.z,Ne)}}else Ie.visible&&g.push(v,me,Ie,z,ke.z,null)}}const J=v.children;for(let me=0,Ie=J.length;me<Ie;me++)ai(J[me],C,z,W)}function Ai(v,C,z,W){const B=v.opaque,J=v.transmissive,me=v.transparent;p.setupLightsView(z),he===!0&&fe.setGlobalState(S.clippingPlanes,z),W&&K.viewport(T.copy(W)),B.length>0&&Mn(B,C,z),J.length>0&&Mn(J,C,z),me.length>0&&Mn(me,C,z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function xn(v,C,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ii(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ki:ni,minFilter:Nn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const J=p.state.transmissionRenderTarget[W.id],me=W.viewport||T;J.setSize(me.z,me.w);const Ie=S.getRenderTarget();S.setRenderTarget(J),S.getClearColor(Y),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),qe&&Xe.render(z);const Se=S.toneMapping;S.toneMapping=Mi;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),he===!0&&fe.setGlobalState(S.clippingPlanes,W),Mn(v,z,W),A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J),We.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ne=0,tt=C.length;Ne<tt;Ne++){const Qe=C[Ne],Mt=Qe.object,Ft=Qe.geometry,Ge=Qe.material,Ue=Qe.group;if(Ge.side===qt&&Mt.layers.test(W.layers)){const It=Ge.side;Ge.side=on,Ge.needsUpdate=!0,Ri(Mt,z,W,Ft,Ge,Ue),Ge.side=It,Ge.needsUpdate=!0,Je=!0}}Je===!0&&(A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J))}S.setRenderTarget(Ie),S.setClearColor(Y,G),ze!==void 0&&(W.viewport=ze),S.toneMapping=Se}function Mn(v,C,z){const W=C.isScene===!0?C.overrideMaterial:null;for(let B=0,J=v.length;B<J;B++){const me=v[B],Ie=me.object,Se=me.geometry,ze=W===null?me.material:W,Je=me.group;Ie.layers.test(z.layers)&&Ri(Ie,C,z,Se,ze,Je)}}function Ri(v,C,z,W,B,J){v.onBeforeRender(S,C,z,W,B,J),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(S,C,z,W,v,J),B.transparent===!0&&B.side===qt&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,S.renderBufferDirect(z,C,W,B,v,J),B.side=Ei,B.needsUpdate=!0,S.renderBufferDirect(z,C,W,B,v,J),B.side=qt):S.renderBufferDirect(z,C,W,B,v,J),v.onAfterRender(S,C,z,W,B,J)}function oi(v,C,z){C.isScene!==!0&&(C=_t);const W=we.get(v),B=p.state.lights,J=p.state.shadowsArray,me=B.state.version,Ie=ge.getParameters(v,B.state,J,C,z),Se=ge.getProgramCacheKey(Ie);let ze=W.programs;W.environment=v.isMeshStandardMaterial?C.environment:null,W.fog=C.fog,W.envMap=(v.isMeshStandardMaterial?q:M).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,ze===void 0&&(v.addEventListener("dispose",Ye),ze=new Map,W.programs=ze);let Je=ze.get(Se);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===me)return Ci(v,Ie),Je}else Ie.uniforms=ge.getUniforms(v),v.onBeforeCompile(Ie,S),Je=ge.acquireProgram(Ie,Se),ze.set(Se,Je),W.uniforms=Ie.uniforms;const Ne=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ne.clippingPlanes=fe.uniform),Ci(v,Ie),W.needsLights=se(v),W.lightsStateVersion=me,W.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function Ji(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=na.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Ci(v,C){const z=we.get(v);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function li(v,C,z,W,B){C.isScene!==!0&&(C=_t),A.resetTextureUnits();const J=C.fog,me=W.isMeshStandardMaterial?C.environment:null,Ie=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:wi,Se=(W.isMeshStandardMaterial?q:M).get(W.envMap||me),ze=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Je=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!z.morphAttributes.position,tt=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let Mt=Mi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Mt=S.toneMapping);const Ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ge=Ft!==void 0?Ft.length:0,Ue=we.get(W),It=p.state.lights;if(he===!0&&(re===!0||v!==y)){const Lt=v===y&&W.id===E;fe.setState(W,v,Lt)}let rt=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==It.state.version||Ue.outputColorSpace!==Ie||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==Se||W.fog===!0&&Ue.fog!==J||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==fe.numPlanes||Ue.numIntersection!==fe.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==Je||Ue.morphTargets!==Ne||Ue.morphNormals!==tt||Ue.morphColors!==Qe||Ue.toneMapping!==Mt||Ue.morphTargetsCount!==Ge)&&(rt=!0):(rt=!0,Ue.__version=W.version);let Bt=Ue.currentProgram;rt===!0&&(Bt=oi(W,C,B));let pn=!1,Vt=!1,St=!1;const ot=Bt.getUniforms(),te=Ue.uniforms;if(K.useProgram(Bt.program)&&(pn=!0,Vt=!0,St=!0),W.id!==E&&(E=W.id,Vt=!0),pn||y!==v){K.buffers.depth.getReversed()?(oe.copy(v.projectionMatrix),Cf(oe),Pf(oe),ot.setValue(V,"projectionMatrix",oe)):ot.setValue(V,"projectionMatrix",v.projectionMatrix),ot.setValue(V,"viewMatrix",v.matrixWorldInverse);const tn=ot.map.cameraPosition;tn!==void 0&&tn.setValue(V,Pe.setFromMatrixPosition(v.matrixWorld)),He.logarithmicDepthBuffer&&ot.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ot.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Vt=!0,St=!0)}if(B.isSkinnedMesh){ot.setOptional(V,B,"bindMatrix"),ot.setOptional(V,B,"bindMatrixInverse");const Lt=B.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ot.setValue(V,"boneTexture",Lt.boneTexture,A))}B.isBatchedMesh&&(ot.setOptional(V,B,"batchingTexture"),ot.setValue(V,"batchingTexture",B._matricesTexture,A),ot.setOptional(V,B,"batchingIdTexture"),ot.setValue(V,"batchingIdTexture",B._indirectTexture,A),ot.setOptional(V,B,"batchingColorTexture"),B._colorsTexture!==null&&ot.setValue(V,"batchingColorTexture",B._colorsTexture,A));const Be=z.morphAttributes;if((Be.position!==void 0||Be.normal!==void 0||Be.color!==void 0)&&Ze.update(B,z,Bt),(Vt||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,ot.setValue(V,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(te.envMap.value=Se,te.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&C.environment!==null&&(te.envMapIntensity.value=C.environmentIntensity),Vt&&(ot.setValue(V,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&Pi(te,St),J&&W.fog===!0&&xe.refreshFogUniforms(te,J),xe.refreshMaterialUniforms(te,W,x,ie,p.state.transmissionRenderTarget[v.id]),na.upload(V,Ji(Ue),te,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(na.upload(V,Ji(Ue),te,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ot.setValue(V,"center",B.center),ot.setValue(V,"modelViewMatrix",B.modelViewMatrix),ot.setValue(V,"normalMatrix",B.normalMatrix),ot.setValue(V,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Lt=W.uniformsGroups;for(let tn=0,$t=Lt.length;tn<$t;tn++){const ci=Lt[tn];N.update(ci,Bt),N.bind(ci,Bt)}}return Bt}function Pi(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function se(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,C,z){we.get(v.texture).__webglTexture=C,we.get(v.depthTexture).__webglTexture=z;const W=we.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,C){const z=we.get(v);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,z=0){F=v,D=C,P=z;let W=!0,B=null,J=!1,me=!1;if(v){const Se=we.get(v);if(Se.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(V.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)A.setupRenderTarget(v);else if(Se.__hasExternalTextures)A.rebindTextures(v,we.get(v.texture).__webglTexture,we.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ne=v.depthTexture;if(Se.__boundDepthTexture!==Ne){if(Ne!==null&&we.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(v)}}const ze=v.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const Je=we.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Je[C])?B=Je[C][z]:B=Je[C],J=!0):v.samples>0&&A.useMultisampledRTT(v)===!1?B=we.get(v).__webglMultisampledFramebuffer:Array.isArray(Je)?B=Je[z]:B=Je,T.copy(v.viewport),R.copy(v.scissor),L=v.scissorTest}else T.copy(H).multiplyScalar(x).floor(),R.copy(j).multiplyScalar(x).floor(),L=Me;if(K.bindFramebuffer(V.FRAMEBUFFER,B)&&W&&K.drawBuffers(v,B),K.viewport(T),K.scissor(R),K.setScissorTest(L),J){const Se=we.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+C,Se.__webglTexture,z)}else if(me){const Se=we.get(v.texture),ze=C||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Se.__webglTexture,z||0,ze)}E=-1},this.readRenderTargetPixels=function(v,C,z,W,B,J,me){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(Ie=Ie[me]),Ie){K.bindFramebuffer(V.FRAMEBUFFER,Ie);try{const Se=v.texture,ze=Se.format,Je=Se.type;if(!He.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-W&&z>=0&&z<=v.height-B&&V.readPixels(C,z,W,B,Ve.convert(ze),Ve.convert(Je),J)}finally{const Se=F!==null?we.get(F).__webglFramebuffer:null;K.bindFramebuffer(V.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(v,C,z,W,B,J,me){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(Ie=Ie[me]),Ie){const Se=v.texture,ze=Se.format,Je=Se.type;if(!He.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=v.width-W&&z>=0&&z<=v.height-B){K.bindFramebuffer(V.FRAMEBUFFER,Ie);const Ne=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ne),V.bufferData(V.PIXEL_PACK_BUFFER,J.byteLength,V.STREAM_READ),V.readPixels(C,z,W,B,Ve.convert(ze),Ve.convert(Je),0);const tt=F!==null?we.get(F).__webglFramebuffer:null;K.bindFramebuffer(V.FRAMEBUFFER,tt);const Qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Rf(V,Qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ne),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,J),V.deleteBuffer(Ne),V.deleteSync(Qe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,C=null,z=0){v.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,v=arguments[1]);const W=Math.pow(2,-z),B=Math.floor(v.image.width*W),J=Math.floor(v.image.height*W),me=C!==null?C.x:0,Ie=C!==null?C.y:0;A.setTexture2D(v,0),V.copyTexSubImage2D(V.TEXTURE_2D,z,0,0,me,Ie,B,J),K.unbindTexture()},this.copyTextureToTexture=function(v,C,z=null,W=null,B=0){v.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],C=arguments[2],B=arguments[3]||0,z=null);let J,me,Ie,Se,ze,Je,Ne,tt,Qe;const Mt=v.isCompressedTexture?v.mipmaps[B]:v.image;z!==null?(J=z.max.x-z.min.x,me=z.max.y-z.min.y,Ie=z.isBox3?z.max.z-z.min.z:1,Se=z.min.x,ze=z.min.y,Je=z.isBox3?z.min.z:0):(J=Mt.width,me=Mt.height,Ie=Mt.depth||1,Se=0,ze=0,Je=0),W!==null?(Ne=W.x,tt=W.y,Qe=W.z):(Ne=0,tt=0,Qe=0);const Ft=Ve.convert(C.format),Ge=Ve.convert(C.type);let Ue;C.isData3DTexture?(A.setTexture3D(C,0),Ue=V.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(A.setTexture2DArray(C,0),Ue=V.TEXTURE_2D_ARRAY):(A.setTexture2D(C,0),Ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,C.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,C.unpackAlignment);const It=V.getParameter(V.UNPACK_ROW_LENGTH),rt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bt=V.getParameter(V.UNPACK_SKIP_PIXELS),pn=V.getParameter(V.UNPACK_SKIP_ROWS),Vt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Mt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Se),V.pixelStorei(V.UNPACK_SKIP_ROWS,ze),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Je);const St=v.isDataArrayTexture||v.isData3DTexture,ot=C.isDataArrayTexture||C.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const te=we.get(v),Be=we.get(C),Lt=we.get(te.__renderTarget),tn=we.get(Be.__renderTarget);K.bindFramebuffer(V.READ_FRAMEBUFFER,Lt.__webglFramebuffer),K.bindFramebuffer(V.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let $t=0;$t<Ie;$t++)St&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,we.get(v).__webglTexture,B,Je+$t),v.isDepthTexture?(ot&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,we.get(C).__webglTexture,B,Qe+$t),V.blitFramebuffer(Se,ze,J,me,Ne,tt,J,me,V.DEPTH_BUFFER_BIT,V.NEAREST)):ot?V.copyTexSubImage3D(Ue,B,Ne,tt,Qe+$t,Se,ze,J,me):V.copyTexSubImage2D(Ue,B,Ne,tt,Qe+$t,Se,ze,J,me);K.bindFramebuffer(V.READ_FRAMEBUFFER,null),K.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ot?v.isDataTexture||v.isData3DTexture?V.texSubImage3D(Ue,B,Ne,tt,Qe,J,me,Ie,Ft,Ge,Mt.data):C.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,B,Ne,tt,Qe,J,me,Ie,Ft,Mt.data):V.texSubImage3D(Ue,B,Ne,tt,Qe,J,me,Ie,Ft,Ge,Mt):v.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,B,Ne,tt,J,me,Ft,Ge,Mt.data):v.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,B,Ne,tt,Mt.width,Mt.height,Ft,Mt.data):V.texSubImage2D(V.TEXTURE_2D,B,Ne,tt,J,me,Ft,Ge,Mt);V.pixelStorei(V.UNPACK_ROW_LENGTH,It),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,rt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bt),V.pixelStorei(V.UNPACK_SKIP_ROWS,pn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Vt),B===0&&C.generateMipmaps&&V.generateMipmap(Ue),K.unbindTexture()},this.copyTextureToTexture3D=function(v,C,z=null,W=null,B=0){return v.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,W=arguments[1]||null,v=arguments[2],C=arguments[3],B=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,C,z,W,B)},this.initRenderTarget=function(v){we.get(v).__webglFramebuffer===void 0&&A.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?A.setTextureCube(v,0):v.isData3DTexture?A.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?A.setTexture2DArray(v,0):A.setTexture2D(v,0),K.unbindTexture()},this.resetState=function(){D=0,P=0,F=null,K.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class wl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ma extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new X;class ca{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ca(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class eh extends si{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pr;const Yr=new X,mr=new X,gr=new X,_r=new Re,qr=new Re,th=new Dt,Ns=new X,Zr=new X,Fs=new X,Lc=new Re,Qa=new Re,Uc=new Re;class kg extends Wt{constructor(e=new eh){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bg(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new ca(i,3,0,!1)),pr.setAttribute("uv",new ca(i,2,3,!1))}this.geometry=pr,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),th.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Os(Ns.set(-.5,-.5,0),gr,a,mr,r,s),Os(Zr.set(.5,-.5,0),gr,a,mr,r,s),Os(Fs.set(.5,.5,0),gr,a,mr,r,s),Lc.set(0,0),Qa.set(1,0),Uc.set(1,1);let o=e.ray.intersectTriangle(Ns,Zr,Fs,!1,Yr);if(o===null&&(Os(Zr.set(-.5,.5,0),gr,a,mr,r,s),Qa.set(0,1),o=e.ray.intersectTriangle(Ns,Fs,Zr,!1,Yr),o===null))return;const c=e.ray.origin.distanceTo(Yr);c<e.near||c>e.far||t.push({distance:c,point:Yr.clone(),uv:Rn.getInterpolation(Yr,Ns,Zr,Fs,Lc,Qa,Uc,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Os(n,e,t,i,r,s){_r.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(qr.x=s*_r.x-r*_r.y,qr.y=r*_r.x+s*_r.y):qr.copy(_r),n.copy(e),n.x+=qr.x,n.y+=qr.y,n.applyMatrix4(th)}class Hg extends un{constructor(e=null,t=1,i=1,r,s,a,o,c,l=dn,u=dn,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nh extends si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ua=new X,ha=new X,Nc=new Dt,Kr=new xl,zs=new fs,eo=new X,Fc=new X;class Vg extends Wt{constructor(e=new Ht,t=new nh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ua.fromBufferAttribute(t,r-1),ha.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ua.distanceTo(ha);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(r),zs.radius+=s,e.ray.intersectsSphere(zs)===!1)return;Nc.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=u.getX(_),w=u.getX(_+1),b=Bs(this,e,Kr,c,p,w);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=Bs(this,e,Kr,c,_,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=Bs(this,e,Kr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Bs(this,e,Kr,c,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bs(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(ua.fromBufferAttribute(a,r),ha.fromBufferAttribute(a,s),t.distanceSqToSegment(ua,ha,eo,Fc)>i)return;eo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(eo);if(!(c<e.near||c>e.far))return{distance:c,point:Fc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Oc=new X,zc=new X;class Gg extends Vg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Oc.fromBufferAttribute(t,r),zc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Oc.distanceTo(zc);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ih extends si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bc=new Dt,il=new xl,ks=new fs,Hs=new X;class Wg extends Wt{constructor(e=new Ht,t=new ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;Bc.copy(r).invert(),il.copy(e.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);Hs.fromBufferAttribute(h,g),kc(Hs,g,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Hs.fromBufferAttribute(h,m),kc(Hs,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kc(n,e,t,i,r,s,a){const o=il.distanceSqToPoint(n);if(o<t){const c=new X;il.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class bi extends un{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ri extends Ht{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=an(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/t,h=new X,d=new Re,f=new X,m=new X,_=new X;let g=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:g=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let w=0;w<=t;w++){const b=i+w*u*r,S=Math.sin(b),k=Math.cos(b);for(let D=0;D<=e.length-1;D++){h.x=e[D].x*S,h.y=e[D].y,h.z=e[D].x*k,a.push(h.x,h.y,h.z),d.x=w/t,d.y=D/(e.length-1),o.push(d.x,d.y);const P=c[3*D+0]*S,F=c[3*D+1],E=c[3*D+0]*k;l.push(P,F,E)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){const S=b+w*e.length,k=S,D=S+e.length,P=S+e.length+1,F=S+1;s.push(k,D,F),s.push(P,F,D)}this.setIndex(s),this.setAttribute("position",new Et(a,3)),this.setAttribute("uv",new Et(o,2)),this.setAttribute("normal",new Et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.points,e.segments,e.phiStart,e.phiLength)}}class xi extends Ht{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new X,u=new Re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lt extends Ht{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function w(){const S=new X,k=new X;let D=0;const P=(t-e)/i;for(let F=0;F<=s;F++){const E=[],y=F/s,T=y*(t-e)+e;for(let R=0;R<=r;R++){const L=R/r,Y=L*c+o,G=Math.sin(Y),Z=Math.cos(Y);k.x=T*G,k.y=-y*i+g,k.z=T*Z,h.push(k.x,k.y,k.z),S.set(G,P,Z).normalize(),d.push(S.x,S.y,S.z),f.push(L,1-y),E.push(m++)}_.push(E)}for(let F=0;F<r;F++)for(let E=0;E<s;E++){const y=_[E][F],T=_[E+1][F],R=_[E+1][F+1],L=_[E][F+1];(e>0||E!==0)&&(u.push(y,T,L),D+=3),(t>0||E!==s-1)&&(u.push(T,R,L),D+=3)}l.addGroup(p,D,0),p+=D}function b(S){const k=m,D=new Re,P=new X;let F=0;const E=S===!0?e:t,y=S===!0?1:-1;for(let R=1;R<=r;R++)h.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;const T=m;for(let R=0;R<=r;R++){const Y=R/r*c+o,G=Math.cos(Y),Z=Math.sin(Y);P.x=E*Z,P.y=g*y,P.z=E*G,h.push(P.x,P.y,P.z),d.push(0,y,0),D.x=G*.5+.5,D.y=Z*.5*y+.5,f.push(D.x,D.y),m++}for(let R=0;R<r;R++){const L=k+R,Y=T+R;S===!0?u.push(Y,Y+1,L):u.push(Y+1,Y,L),F+=3}l.addGroup(p,F,S===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fa extends lt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new fa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rt extends Ht{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new X,d=new X,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const w=[],b=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let k=0;k<=t;k++){const D=k/t;h.x=-e*Math.cos(r+D*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(r+D*s)*Math.sin(a+b*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(D+S,1-b),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const b=u[p][w+1],S=u[p][w],k=u[p+1][w],D=u[p+1][w+1];(p!==0||a>0)&&f.push(b,S,D),(p!==i-1||c<Math.PI)&&f.push(S,k,D)}this.setIndex(f),this.setAttribute("position",new Et(m,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sn extends Ht{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new X,h=new X,d=new X;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){const _=m/r*s,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){const _=(r+1)*f+m-1,g=(r+1)*(f-1)+m-1,p=(r+1)*(f-1)+m,w=(r+1)*f+m;a.push(_,g,w),a.push(g,p,w)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yt extends si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class to extends Yt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xg extends si{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bl extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yg extends bl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const no=new Dt,Hc=new X,Vc=new X;class rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),no.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gc=new Dt,jr=new X,io=new X;class qg extends rh{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(jr),io.copy(i.position),io.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(io),i.updateMatrixWorld(),r.makeTranslation(-jr.x,-jr.y,-jr.z),Gc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc)}}class Ir extends bl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new qg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zg extends rh{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wc extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Zg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);class Kg extends Ma{constructor(){super();const e=new Le;e.deleteAttribute("uv");const t=new Yt({side:on}),i=new Yt,r=new Ir(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ne(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new ne(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new ne(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new ne(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ne(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new ne(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new ne(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new ne(e,vr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new ne(e,vr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new ne(e,vr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new ne(e,vr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new ne(e,vr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new ne(e,vr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function vr(n){const e=new at;return e.color.setScalar(n),e}class jg{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $g=new yl(-1,1,1,-1,0,1);class Jg extends Ht{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const Qg=new Jg;class e_{constructor(e){this._mesh=new ne(Qg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$g)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class t_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}dot4(e,t,i,r,s){return e[0]*t+e[1]*i+e[2]*r+e[3]*s}noise(e,t){let i,r,s;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(c+l)*u,d=c-h,f=l-h,m=e-d,_=t-f;let g,p;m>_?(g=1,p=0):(g=0,p=1);const w=m-g+u,b=_-p+u,S=m-1+2*u,k=_-1+2*u,D=c&255,P=l&255,F=this.perm[D+this.perm[P]]%12,E=this.perm[D+g+this.perm[P+p]]%12,y=this.perm[D+1+this.perm[P+1]]%12;let T=.5-m*m-_*_;T<0?i=0:(T*=T,i=T*T*this.dot(this.grad3[F],m,_));let R=.5-w*w-b*b;R<0?r=0:(R*=R,r=R*R*this.dot(this.grad3[E],w,b));let L=.5-S*S-k*k;return L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[y],S,k)),70*(i+r+s)}noise3d(e,t,i){let r,s,a,o;const l=(e+t+i)*.3333333333333333,u=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(i+l),f=1/6,m=(u+h+d)*f,_=u-m,g=h-m,p=d-m,w=e-_,b=t-g,S=i-p;let k,D,P,F,E,y;w>=b?b>=S?(k=1,D=0,P=0,F=1,E=1,y=0):w>=S?(k=1,D=0,P=0,F=1,E=0,y=1):(k=0,D=0,P=1,F=1,E=0,y=1):b<S?(k=0,D=0,P=1,F=0,E=1,y=1):w<S?(k=0,D=1,P=0,F=0,E=1,y=1):(k=0,D=1,P=0,F=1,E=1,y=0);const T=w-k+f,R=b-D+f,L=S-P+f,Y=w-F+2*f,G=b-E+2*f,Z=S-y+2*f,ie=w-1+3*f,x=b-1+3*f,I=S-1+3*f,O=u&255,H=h&255,j=d&255,Me=this.perm[O+this.perm[H+this.perm[j]]]%12,Q=this.perm[O+k+this.perm[H+D+this.perm[j+P]]]%12,he=this.perm[O+F+this.perm[H+E+this.perm[j+y]]]%12,re=this.perm[O+1+this.perm[H+1+this.perm[j+1]]]%12;let oe=.6-w*w-b*b-S*S;oe<0?r=0:(oe*=oe,r=oe*oe*this.dot3(this.grad3[Me],w,b,S));let ve=.6-T*T-R*R-L*L;ve<0?s=0:(ve*=ve,s=ve*ve*this.dot3(this.grad3[Q],T,R,L));let Pe=.6-Y*Y-G*G-Z*Z;Pe<0?a=0:(Pe*=Pe,a=Pe*Pe*this.dot3(this.grad3[he],Y,G,Z));let ke=.6-ie*ie-x*x-I*I;return ke<0?o=0:(ke*=ke,o=ke*ke*this.dot3(this.grad3[re],ie,x,I)),32*(r+s+a+o)}noise4d(e,t,i,r){const s=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,h,d,f,m;const _=(e+t+i+r)*c,g=Math.floor(e+_),p=Math.floor(t+_),w=Math.floor(i+_),b=Math.floor(r+_),S=(g+p+w+b)*l,k=g-S,D=p-S,P=w-S,F=b-S,E=e-k,y=t-D,T=i-P,R=r-F,L=E>y?32:0,Y=E>T?16:0,G=y>T?8:0,Z=E>R?4:0,ie=y>R?2:0,x=T>R?1:0,I=L+Y+G+Z+ie+x,O=a[I][0]>=3?1:0,H=a[I][1]>=3?1:0,j=a[I][2]>=3?1:0,Me=a[I][3]>=3?1:0,Q=a[I][0]>=2?1:0,he=a[I][1]>=2?1:0,re=a[I][2]>=2?1:0,oe=a[I][3]>=2?1:0,ve=a[I][0]>=1?1:0,Pe=a[I][1]>=1?1:0,ke=a[I][2]>=1?1:0,_t=a[I][3]>=1?1:0,qe=E-O+l,$e=y-H+l,V=T-j+l,pt=R-Me+l,We=E-Q+2*l,He=y-he+2*l,K=T-re+2*l,et=R-oe+2*l,we=E-ve+3*l,A=y-Pe+3*l,M=T-ke+3*l,q=R-_t+3*l,ae=E-1+4*l,le=y-1+4*l,ee=T-1+4*l,ge=R-1+4*l,xe=g&255,Te=p&255,it=w&255,fe=b&255,De=o[xe+o[Te+o[it+o[fe]]]]%32,Xe=o[xe+O+o[Te+H+o[it+j+o[fe+Me]]]]%32,Ze=o[xe+Q+o[Te+he+o[it+re+o[fe+oe]]]]%32,be=o[xe+ve+o[Te+Pe+o[it+ke+o[fe+_t]]]]%32,st=o[xe+1+o[Te+1+o[it+1+o[fe+1]]]]%32;let Ve=.6-E*E-y*y-T*T-R*R;Ve<0?u=0:(Ve*=Ve,u=Ve*Ve*this.dot4(s[De],E,y,T,R));let Ke=.6-qe*qe-$e*$e-V*V-pt*pt;Ke<0?h=0:(Ke*=Ke,h=Ke*Ke*this.dot4(s[Xe],qe,$e,V,pt));let N=.6-We*We-He*He-K*K-et*et;N<0?d=0:(N*=N,d=N*N*this.dot4(s[Ze],We,He,K,et));let pe=.6-we*we-A*A-M*M-q*q;pe<0?f=0:(pe*=pe,f=pe*pe*this.dot4(s[be],we,A,M,q));let $=.6-ae*ae-le*le-ee*ee-ge*ge;return $<0?m=0:($*=$,m=$*$*this.dot4(s[st],ae,le,ee,ge)),27*(u+h+d+f+m)}}const Vs={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Re},cameraProjectionMatrix:{value:new Dt},cameraInverseProjectionMatrix:{value:new Dt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},Gs={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Ws={uniforms:{tDiffuse:{value:null},resolution:{value:new Re}},vertexShader:`varying vec2 vUv;

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

		}`},ro={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class vi extends jg{constructor(e,t,i,r,s=32){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const a=new El;a.format=$i,a.type=ji,this.normalRenderTarget=new ii(this.width,this.height,{minFilter:dn,magFilter:dn,type:Ki,depthTexture:a}),this.ssaoRenderTarget=new ii(this.width,this.height,{type:Ki}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Cn({defines:Object.assign({},Vs.defines),uniforms:ns.clone(Vs.uniforms),vertexShader:Vs.vertexShader,fragmentShader:Vs.fragmentShader,blending:gn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Xg,this.normalMaterial.blending=gn,this.blurMaterial=new Cn({defines:Object.assign({},Ws.defines),uniforms:ns.clone(Ws.uniforms),vertexShader:Ws.vertexShader,fragmentShader:Ws.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Cn({defines:Object.assign({},Gs.defines),uniforms:ns.clone(Gs.uniforms),vertexShader:Gs.vertexShader,fragmentShader:Gs.fragmentShader,blending:gn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Cn({uniforms:ns.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:bu,blendDst:mo,blendEquation:Kn,blendSrcAlpha:wu,blendDstAlpha:mo,blendEquationAlpha:Kn}),this.fsQuad=new e_(null),this.originalClearColor=new nt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,i){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case vi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=gn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case vi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=gn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case vi.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:i);break;case vi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=gn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case vi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Eu,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,i,r,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,i,r,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let i=0;i<e;i++){const r=new X;r.x=Math.random()*2-1,r.y=Math.random()*2-1,r.z=Math.random(),r.normalize();let s=i/e;s=Tf.lerp(.1,1,s*s),r.multiplyScalar(s),t.push(r)}}generateRandomKernelRotations(){const i=new t_,r=16,s=new Float32Array(r);for(let a=0;a<r;a++){const o=Math.random()*2-1,c=Math.random()*2-1,l=0;s[a]=i.noise3d(o,c,l)}this.noiseTexture=new Hg(s,4,4,dl,Bn),this.noiseTexture.wrapS=kn,this.noiseTexture.wrapT=kn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const r=t.get(i);i.visible=r}),t.clear()}}vi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const n_={minX:-15.55,maxX:15.55,minZ:-53.45,maxZ:13.55},i_={x:0,y:1.58,z:10.55,yaw:0},r_={x:0,y:1.58,z:-16.35,yaw:0},s_={x:0,y:1.58,z:-30.2,yaw:0},a_={x:0,y:1.58,z:-42.45,yaw:0},as=-24.2,o_=as-.35,ia=-47.55,l_=ia-.35,os={x:0,y:0,z:-26.55},qi={x:0,y:0,z:-50.15},Yi=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35},{id:"sprinkler",x:6.35,y:2.65,z:-32.55},{id:"security-shutter",x:-7.72,y:2.45,z:-33.05,room:"service"},{id:"security-camera",x:0,y:3.15,z:-9.45,room:"court"},{id:"security-camera",x:-7.55,y:3.35,z:-36.55,room:"service"}],c_=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],u_=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],h_=[{id:"service-l",x:-4.15,z:-33.55,cloak:!1,hp:70},{id:"service-r",x:4.85,z:-34.15,cloak:!1,hp:70},{id:"service-ghost",x:.55,z:-37.35,cloak:!0,hp:84}],rl=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1},{id:"pad-fountain",kind:"battery",pad:!0,x:3.72,z:.45,cloaked:!1},{id:"pad-food",kind:"battery",pad:!0,x:-10.2,z:7.5,cloaked:!1},{id:"pad-door",kind:"battery",pad:!0,x:0,z:-10.05,cloaked:!1},{id:"pad-aisle",kind:"battery",pad:!0,x:0,z:-17.15,cloaked:!1},{id:"pad-pew",kind:"battery",pad:!0,x:5.4,z:-22.7,cloaked:!1},{id:"pad-altar",kind:"battery",pad:!0,x:-4.2,z:-23.05,cloaked:!1},{id:"pad-service",kind:"battery",pad:!0,x:0,z:-31.15,cloaked:!1},{id:"pad-rack",kind:"battery",pad:!0,x:-2.55,z:-38.55,cloaked:!1},{id:"pad-listing",kind:"battery",pad:!0,x:-4.7,z:-43.7,cloaked:!1},{id:"pad-index",kind:"battery",pad:!0,x:4.55,z:-45.25,cloaked:!1}],so={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},ao={minX:-6.4,maxX:6.4,minZ:-39.7,maxZ:-30.5},sh={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":so,"choir-r":so,"choir-ghost":so,"service-l":ao,"service-r":ao,"service-ghost":ao};function Fe(n,e,t,i,r,s,a,o,c={}){return{id:n,mat:e,x:t,y:i,z:r,w:s,h:a,d:o,...c}}const gt=7.2,ah=[Fe("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),Fe("ceiling","ceiling",0,7.35,0,34,.3,30),Fe("wall-n-l","wall",-9.23,gt/2,-14.3,14.74,gt,.6),Fe("wall-n-r","wall",9.23,gt/2,-14.3,14.74,gt,.6),Fe("chapel-door","trim",0,gt/2,-14.3,3.76,gt,.66,{door:!0}),Fe("wall-s","wall",0,gt/2,14.3,33.2,gt,.6),Fe("wall-w","wall",-16.3,gt/2,0,.6,gt,29.2),Fe("wall-e","wall",16.3,gt/2,0,.6,gt,29.2),Fe("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),Fe("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),Fe("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),Fe("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),Fe("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),Fe("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),Fe("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),Fe("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),Fe("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),Fe("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),Fe("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),Fe("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),Fe("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),Fe("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),Fe("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),Fe("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),Fe("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),Fe("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),Fe("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),Fe("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),Fe("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),Fe("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),Fe("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),Fe("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),Fe("chapel-w","wall",-8.35,gt/2,-21.75,.5,gt,14.9),Fe("chapel-e","wall",8.35,gt/2,-21.75,.5,gt,14.9),Fe("chapel-n-l","wall",-5.55,gt/2,-29.05,6.1,gt,.5),Fe("chapel-n-r","wall",5.55,gt/2,-29.05,6.1,gt,.5),Fe("service-door","trim",0,gt/2,-29.05,5,gt,.66,{serviceDoor:!0}),Fe("service-floor","floor",0,-.2,-35.2,16.7,.4,11.7,{floor:!0}),Fe("service-ceiling","ceiling",0,7.35,-35.2,16.7,.3,11.7),Fe("service-w","wall",-8.35,gt/2,-35.15,.5,gt,12.3),Fe("service-e","wall",8.35,gt/2,-35.15,.5,gt,12.3),Fe("service-n-l","wall",-5.24,gt/2,-41.2,6.72,gt,.5),Fe("service-n-r","wall",5.24,gt/2,-41.2,6.72,gt,.5),Fe("directory-door","trim",0,gt/2,-41.2,3.76,gt,.66,{directoryDoor:!0}),Fe("service-rack-w","metal",-6.35,1.15,-35.7,1.45,2.3,2.5),Fe("service-rack-e","metal",6.35,1.15,-37.9,1.35,2.3,2.2),Fe("service-cart","trim",-6.15,.48,-31.45,1.45,.96,.85),Fe("service-locker","metal",6.45,.7,-31.05,1.5,1.4,.75),Fe("service-pipe","metal",0,6.55,-35.2,.22,.22,8.5),Fe("directory-floor","floor",0,-.2,-47,16.7,.4,11.2,{floor:!0}),Fe("directory-ceiling","ceiling",0,7.35,-47,16.7,.3,11.2),Fe("directory-w","wall",-8.35,gt/2,-47,.5,gt,11.8),Fe("directory-e","wall",8.35,gt/2,-47,.5,gt,11.8),Fe("directory-n","wall",0,gt/2,-52.7,17.2,gt,.5),Fe("dir-gate-l","trim",-4.7,1.8,ia,6.7,3.6,.46),Fe("dir-gate-r","trim",4.7,1.8,ia,6.7,3.6,.46),Fe("directory-gate","trim",0,1.8,ia,3.3,3.6,.4,{phaseGate:!0,directoryVeil:!0}),Fe("dir-pier-l","trim",-6.35,1.55,-50.35,.5,3.1,.5),Fe("dir-pier-r","trim",6.35,1.55,-50.35,.5,3.1,.5),Fe("directory-plinth","trim",0,.4,-50.15,1.55,.8,1.15),Fe("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),Fe("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),Fe("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),Fe("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),Fe("altar-l","trim",-4.85,1.8,as,6.5,3.6,.48),Fe("altar-r","trim",4.85,1.8,as,6.5,3.6,.48),Fe("rite-veil","trim",0,1.8,as,3.36,3.6,.42,{phaseGate:!0,veil:!0}),Fe("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function f_(n){return{id:n.id,minX:n.x-n.w/2,maxX:n.x+n.w/2,minY:n.y-n.h/2,maxY:n.y+n.h/2,minZ:n.z-n.d/2,maxZ:n.z+n.d/2,phaseGate:!!n.phaseGate,floor:!!n.floor}}function oh({doorOpen:n=!1,veilUp:e=!1,serviceOpen:t=!1,directoryOpen:i=!1,directoryVeilUp:r=!1}={}){return ah.filter(s=>!(s.door&&n||s.serviceDoor&&t||s.directoryDoor&&i||s.veil&&!e||s.directoryVeil&&!r)).map(f_)}function Tl(n,e,t){return{id:n.id,x:n.x,y:0,z:n.z,yaw:0,hp:n.hp,maxHp:n.hp,alive:!0,cloaked:!!n.cloak,reveal:0,visible:!n.cloak,exposed:!1,hittable:!n.cloak,hits:0,lastHitAt:null,aggro:t==="court"&&!n.cloak,cooldown:t==="court"?.95+e%4*.28:t==="chapel"?1.35+e%3*.25:1.2+e%3*.25,windup:0,strafeSign:e%2===0?1:-1,strafeT:.8+e%3*.25,hurt:0,stun:0,room:t,dormant:t!=="court"}}function lh(){return c_.map((n,e)=>Tl(n,e,"court"))}function da(){return u_.map((n,e)=>Tl(n,e,"chapel"))}function ra(){return h_.map((n,e)=>Tl(n,e,"service"))}function Xs(){return rl.map(n=>({...n,taken:!1,respawnAt:null}))}const Qn=["LIVE","STATIC","DEAD_AIR"],de={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6},clickerMag:20,scatterMag:8,phaserMag:6,phaserDamage:26,phaserRange:8,phaserFalloff:.4,phaserCooldown:.48,dropLive:5,dropStatic:2,dropDead:2,paRefund:2,paRefundFocus:2,padRespawn:16,padFocus:6,padSide:2,maxLevel:6,xpBase:40,xpStep:12,xpKill:16,xpRite:28,xpCourt:48,xpWing:48,xpHijack:18,paCooldown:16,upgradeStacks:2,magClicker:4,pelletStep:2,phaserStep:2,drainStep:3,batteryLive:3,batteryStatic:1,batteryDead:1,surfLive:.03,surfStatic:.08,surfPhaser:.08,paStep:4,regenStep:3},ch=[{id:"clicker-mag",name:"CLICKER MAG",detail:`+${de.magClicker} shots`,max:de.upgradeStacks},{id:"scatter-fan",name:"SCATTER FAN",detail:`+${de.pelletStep} pellets`,max:de.upgradeStacks},{id:"phaser-reach",name:"PHASER REACH",detail:`+${de.phaserStep} meters`,max:de.upgradeStacks},{id:"quiet-air",name:"QUIET AIR",detail:`Drain −${de.drainStep}`,max:de.upgradeStacks},{id:"battery-max",name:"BATTERY MAX",detail:`+${de.batteryLive} / +${de.batteryStatic} / +${de.batteryDead} magazines`,max:de.upgradeStacks},{id:"fast-surf",name:"FAST SURF",detail:"Shoot sooner",max:de.upgradeStacks},{id:"pa-cycle",name:"PA CYCLE",detail:`Horn −${de.paStep}s`,max:de.upgradeStacks},{id:"live-feed",name:"LIVE FEED",detail:`Regen +${de.regenStep}`,max:de.upgradeStacks}];function vn(n,e,t){return Math.max(e,Math.min(t,n))}function ya(n){const e=(n==null?void 0:n.mods)||{},t=e.surf||0;return{...de,clickerMag:de.clickerMag+(e.clickerMag||0)+(e.batteryLive||0),scatterMag:de.scatterMag+(e.batteryStatic||0),phaserMag:de.phaserMag+(e.batteryDead||0),staticPellets:de.staticPellets+(e.staticPellets||0),phaserRange:de.phaserRange+(e.phaserRange||0),deadDrain:Math.max(8,de.deadDrain-(e.deadDrain||0)),liveRegen:de.liveRegen+(e.liveRegen||0),liveCooldown:Math.max(.11,+(de.liveCooldown-t*de.surfLive).toFixed(2)),staticCooldown:Math.max(.32,+(de.staticCooldown-t*de.surfStatic).toFixed(2)),phaserCooldown:Math.max(.3,+(de.phaserCooldown-t*de.surfPhaser).toFixed(2)),paCooldown:Math.max(8,de.paCooldown-(e.paCut||0))}}function Or(n){const e=ya(n);return{LIVE:e.clickerMag,STATIC:e.scatterMag,DEAD_AIR:e.phaserMag}}function ds(){return Or()}function Ys(){return{channel:"LIVE",signal:de.signalMax,health:de.healthMax,fireCooldown:0,hurtTimer:0,batteries:ds(),level:1,xp:0,pending:0,mods:{}}}function Xc(n){return n==="Digit1"||n==="Numpad1"?"LIVE":n==="Digit2"||n==="Numpad2"?"STATIC":n==="Digit3"||n==="Numpad3"?"DEAD_AIR":null}function d_(n,e){const t=Math.max(0,Qn.indexOf(n)),i=e>=0?1:-1;return Qn[(t+i+Qn.length)%Qn.length]}function p_(n,e){return e==="LIVE"?!0:n.signal>=de.minDrainSignal}function m_(n,e){return Qn.includes(e)?n.channel===e?{state:n,result:"same"}:p_(n,e)?{state:{...n,channel:e},result:"ok"}:{state:n,result:"denied"}:{state:n,result:"invalid"}}function g_(n,e){let{channel:t,signal:i,fireCooldown:r,hurtTimer:s}=n,a=!1;r=Math.max(0,r-e),s=Math.max(0,s-e);const o=ya(n);if(t==="LIVE")i=Math.min(de.signalMax,i+o.liveRegen*e);else{const c=t==="STATIC"?de.staticDrain:o.deadDrain;i-=c*e,i<=0&&(i=0,t="LIVE",a=!0)}return{state:{...n,channel:t,signal:i,fireCooldown:r,hurtTimer:s},forced:a}}function uh(n){var e;return(e=de.speed[n])!=null?e:de.speed.LIVE}function __(n,e){var i;const t=(i=Or(n)[e])!=null?i:0;return!n.batteries||n.batteries[e]==null?t:n.batteries[e]}function pa(n,e){const t=ya(e);return n==="LIVE"?{kind:"hitscan",name:"CLICKER",pellets:1,spread:0,damage:de.liveDamage,range:de.liveRange,falloff:de.liveFalloff,cooldown:t.liveCooldown,cost:1,phases:!1}:n==="STATIC"?{kind:"spread",name:"SCATTER",pellets:t.staticPellets,spread:de.staticSpread,damage:de.staticPellet,range:de.staticRange,falloff:de.staticFalloff,cooldown:t.staticCooldown,cost:1,phases:!1}:n==="DEAD_AIR"?{kind:"phase",name:"PHASER",pellets:1,spread:0,damage:de.phaserDamage,range:t.phaserRange,falloff:de.phaserFalloff,cooldown:t.phaserCooldown,cost:1,phases:!0}:{kind:"none",name:"",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0,cost:0,phases:!1}}function Yc(n){const e=pa(n.channel,n);if(n.health<=0)return{state:n,profile:e,fired:!1,reason:"dead"};if(e.kind==="none")return{state:n,profile:e,fired:!1,reason:"none"};if(n.fireCooldown>0)return{state:n,profile:e,fired:!1,reason:"wait"};const t=__(n,n.channel);if(t<e.cost)return{state:n,profile:e,fired:!1,reason:"dry"};const i={...n.batteries||ds(),[n.channel]:t-e.cost};return{state:{...n,batteries:i,fireCooldown:e.cooldown},profile:e,fired:!0,reason:"ok"}}function hh(n,e={}){const t=Or(n),i={...n.batteries||ds()};let r=0;for(const s of Qn){const a=e[s]||0;if(a<=0)continue;const o=vn(i[s]+a,0,t[s]);r+=o-i[s],i[s]=o}return{state:{...n,batteries:i},gained:r}}function Oi(n){return{...n,batteries:ds()}}function v_(n){const e={LIVE:de.paRefund,STATIC:de.paRefund,DEAD_AIR:de.paRefund};return Qn.includes(n.channel)&&(e[n.channel]+=de.paRefundFocus),hh(n,e)}function fh(n){return n>=de.maxLevel?0:de.xpBase+(Math.max(1,n)-1)*de.xpStep}function x_(n){const e=fh((n==null?void 0:n.level)||1);return e?vn(((n==null?void 0:n.xp)||0)/e,0,1):1}function $r(n,e){const t=Math.max(0,e||0);if(t<=0)return{state:n,leveled:0};let i=n.level||1,r=n.xp||0,s=n.pending||0;if(i>=de.maxLevel)return{state:n,leveled:0};r+=t;let a=0;for(;i<de.maxLevel;){const o=fh(i);if(!(o>0)||r<o)break;r-=o,i+=1,s+=1,a+=1}return i>=de.maxLevel&&(r=0),{state:{...n,level:i,xp:r,pending:s},leveled:a}}function M_(n,e){const t={...n||{}};return e==="clicker-mag"?t.clickerMag=(t.clickerMag||0)+de.magClicker:e==="scatter-fan"?t.staticPellets=(t.staticPellets||0)+de.pelletStep:e==="phaser-reach"?t.phaserRange=(t.phaserRange||0)+de.phaserStep:e==="quiet-air"?t.deadDrain=(t.deadDrain||0)+de.drainStep:e==="battery-max"?(t.batteryLive=(t.batteryLive||0)+de.batteryLive,t.batteryStatic=(t.batteryStatic||0)+de.batteryStatic,t.batteryDead=(t.batteryDead||0)+de.batteryDead):e==="fast-surf"?t.surf=(t.surf||0)+1:e==="pa-cycle"?t.paCut=(t.paCut||0)+de.paStep:e==="live-feed"&&(t.liveRegen=(t.liveRegen||0)+de.regenStep),t[e]=((n==null?void 0:n[e])||0)+1,t}function oo(n){const e=ch.filter(s=>{var a;return(((a=n==null?void 0:n.mods)==null?void 0:a[s.id])||0)<s.max}),t=Math.min(3,e.length),i=e.length?((n==null?void 0:n.level)||1)%e.length:0,r=[];for(let s=0;s<t;s++)r.push(e[(i+s)%e.length]);return r}function y_(n,e){var c,l;const t=ch.find(u=>u.id===e);if(!t||(n.pending||0)<=0)return{state:n,applied:!1};if((((c=n.mods)==null?void 0:c[e])||0)>=t.max)return{state:n,applied:!1};const i=M_(n.mods,e),r={...n,mods:i,pending:n.pending-1},s=Or(n),a=Or(r),o={...n.batteries||ds()};for(const u of Qn){const h=(l=o[u])!=null?l:s[u];o[u]=Math.min(a[u],h+Math.max(0,a[u]-s[u]))}return{state:{...r,batteries:o},applied:!0,upgrade:t}}function S_(n){return{id:"drop-"+n.id,kind:"battery",x:n.x,z:n.z,amounts:{LIVE:de.dropLive,STATIC:de.dropStatic,DEAD_AIR:de.dropDead},cloaked:!1,taken:!1}}function dh(n){const e={LIVE:de.padSide,STATIC:de.padSide,DEAD_AIR:de.padSide};return Qn.includes(n)&&(e[n]=de.padFocus),e}function E_(n,e){return n!=null&&n.pad?{...n,taken:!0,respawnAt:(e||0)+de.padRespawn}:{...n,taken:!0}}function w_(n,e){let t=!1;const i=n.map(r=>!r.pad||!r.taken||r.respawnAt==null||e<r.respawnAt?r:(t=!0,{...r,taken:!1,respawnAt:null}));return t?i:n}function b_(n,e){var t;if(!n)return"";if(n.kind==="signal")return"SIGNAL CACHE";if(n.kind==="health")return"AID KIT";if(n.kind==="battery"&&n.pad){const i=(t=dh(e)[e])!=null?t:de.padFocus;return`${pa(e,null).name} +${i}`}return n.kind==="battery"?"BATTERY":""}function lo(n,e,t,i){if(!(e>=0)||e>t||t<=0)return 0;const r=e/t;return n*(1-i*r*r)}function ma(n,e){return{...n,signal:vn(n.signal+e,0,de.signalMax)}}function T_(n,e){return{...n,health:vn(n.health+e,0,de.healthMax)}}function A_(n,{distance:e,channel:t,burst:i}){const r=t==="STATIC"||e<=de.aggressiveRange||!!i,s=r?de.aggressiveKillSignal:de.cleanKillSignal;return{state:ma(n,s),amount:s,aggressive:r}}function co(n,e){if(n.hurtTimer>0||n.health<=0)return{state:n,hit:!1,dead:n.health<=0};const t=Math.max(0,n.health-e);return{state:{...n,health:t,hurtTimer:de.hurtIframes},hit:!0,dead:t<=0}}function R_(n,e){return!(!n||n.floor||n.maxY!=null&&n.maxY<.3||n.minY!=null&&n.minY>1.65||n.phaseGate&&e==="DEAD_AIR")}function sl(n,e,t,i,r){for(const s of i){if(!R_(s,r))continue;const a=vn(n,s.minX,s.maxX),o=vn(e,s.minZ,s.maxZ),c=n-a,l=e-o;if(c*c+l*l<t*t)return s}return null}function C_(n,e,t,i,r,s,a){let o=n+t;sl(o,e,r,s,a)&&(o=n);const c=e+i;return sl(o,c,r,s,a)?{x:o,z:e}:{x:o,z:c}}function P_(n,e,t,i,r){let s=n,a=e;for(let o=0;o<4;o++){const c=sl(s,a,t,i,r);if(!c)break;const l=vn(s,c.minX,c.maxX),u=vn(a,c.minZ,c.maxZ);let h=s-l,d=a-u;const f=Math.hypot(h,d);if(f<1e-5){const m=s-c.minX,_=c.maxX-s,g=a-c.minZ,p=c.maxZ-a,w=Math.min(m,_,g,p);w===m?s=c.minX-t-.01:w===_?s=c.maxX+t+.01:w===g?a=c.minZ-t-.01:a=c.maxZ+t+.01}else{const m=t-f+.01;s+=h/f*m,a+=d/f*m}}return{x:s,z:a}}function ph(n,e,t,i,r,s,a,o){const c=Math.hypot(t,i),l=Math.max(1,Math.ceil(c/.25));let u=n,h=e;for(let f=0;f<l;f++){const m=C_(u,h,t/l,i/l,r,s,a);u=m.x,h=m.z}const d=P_(u,h,r,s,a);return o?{x:vn(d.x,o.minX,o.maxX),z:vn(d.z,o.minZ,o.maxZ)}:d}function Al(n,e,t,i,r,s,a,o,c,l){const u=a-n,h=o-e,d=c-t,f=u*i+h*r+d*s,m=u*u+h*h+d*d-f*f,_=l*l;if(m>_)return null;const g=Math.sqrt(Math.max(0,_-m)),p=f-g,w=f+g;return p>=0?p:w>=0?w:null}function D_(n,e,t,i,r,s,a,o){let c=0,l=o;const u=[[n,i,a.minX,a.maxX],[e,r,a.minY,a.maxY],[t,s,a.minZ,a.maxZ]];for(const[d,f,m,_]of u){if(Math.abs(f)<1e-8){if(d<m||d>_)return null;continue}let g=(m-d)/f,p=(_-d)/f;if(g>p){const w=g;g=p,p=w}if(g>c&&(c=g),p<l&&(l=p),l<c)return null}const h=c>=0?c:l;return h<0||h>o?null:h}function Rl(n,e,t,i,r,s,a,o){let c=null,l=a;for(const u of o){if(u.noShoot)continue;const h=D_(n,e,t,i,r,s,u,l);h!=null&&h<l&&(l=h,c={t:h,collider:u,x:n+i*h,y:e+r*h,z:t+s*h})}return c}function qc(n,e){if(!n.alive)return{...n,visible:!0,exposed:!1,hittable:!1};if(!n.cloaked)return{...n,visible:!0,exposed:e==="STATIC",hittable:!0};const t=e==="STATIC"||n.reveal>0;return{...n,visible:t,exposed:t,hittable:t}}function Zc(n,e,t){if(!n.cloaked||!n.alive)return qc(n,t);let i=n.reveal||0;return t==="STATIC"?i=de.revealDuration:i=Math.max(0,i-e),qc({...n,reveal:i},t)}function I_(n,e,t,i,r,s={}){const a=s.phase?r.filter(u=>!u.phaseGate):r;let o=t,c=null;for(const u of i){if(!u.alive||!u.hittable)continue;const h=[{y:(u.y||0)+1.62,r:.26,weak:!0},{y:(u.y||0)+.98,r:.46,weak:!1}];for(const d of h){const f=Al(n.x,n.y,n.z,e.x,e.y,e.z,u.x,d.y,u.z,d.r);f!=null&&f>.02&&f<o&&(o=f,c={kind:"enemy",id:u.id,t:f,weak:d.weak,x:n.x+e.x*f,y:n.y+e.y*f,z:n.z+e.z*f})}}const l=Rl(n.x,n.y,n.z,e.x,e.y,e.z,o,a);return l&&l.t<o?{kind:"world",t:l.t,x:l.x,y:l.y,z:l.z,id:l.collider.id}:c}function L_(n,e){const t=n.lastHitAt!=null&&e-n.lastHitAt<=de.burstWindow;return{enemy:{...n,lastHitAt:e},burst:t}}function U_(n,{weak:e,damage:t}){if(!n.alive||!n.hittable||t<=0)return{enemy:n,dealt:0,killed:!1};let i=t;e&&n.exposed&&(i*=de.weakMult),(n.marked||0)>0&&(i*=1.25);const r=n.hp-i,s=r<=0;return{enemy:{...n,hp:s?0:r,hits:(n.hits||0)+1,alive:!s,hittable:!s&&n.hittable},dealt:i,killed:s}}function N_(n,e,t,i,r,s){const a=[],o=Math.max(0,i|0);for(let c=0;c<o;c++){const l=o===1&&r===0?0:(s()*2-1)*r,u=o===1&&r===0?0:(s()*2-1)*r,h=n.x+e.x*l+t.x*u,d=n.y+e.y*l+t.y*u,f=n.z+e.z*l+t.z*u,m=Math.hypot(h,d,f)||1;a.push({x:h/m,y:d/m,z:f/m})}return a}function mh(n,e,t,i,r,s,a){const o=i-n,c=r-e,l=s-t,u=Math.hypot(o,c,l);return u<.001?!0:Rl(n,e,t,o/u,c/u,l/u,Math.max(0,u-.25),a)==null}function F_(n,e){if(!e||e.taken)return{state:n,pickup:e,took:!1};if(e.kind==="signal")return{state:ma(n,e.amount),pickup:{...e,taken:!0},took:!0};if(e.kind==="health")return n.health>=de.healthMax?{state:n,pickup:e,took:!1}:{state:T_(n,e.amount),pickup:{...e,taken:!0},took:!0};if(e.kind==="battery"){const t=e.pad?dh(n.channel):e.amounts||{},i=hh(n,t);return i.gained<=0?{state:n,pickup:e,took:!1}:{state:i.state,pickup:{...e,taken:!0},took:!0}}return{state:n,pickup:e,took:!1}}function O_(n,e){return!n||n.taken?!1:n.cloaked?e==="STATIC":!0}function z_(n,e){const t=Math.hypot(n,e);return t<1e-6?{x:0,z:0}:{x:n/t,z:e/t}}function B_(n,e,t){var F;if(!n.alive)return{enemy:n,shot:null};if(n.dormant)return{enemy:{...n,hurt:Math.max(0,(n.hurt||0)-e),marked:Math.max(0,(n.marked||0)-e)},shot:null};let i=Zc(n,e,t.channel);if(!i.alive)return{enemy:i,shot:null};const r=t.player.x-i.x,s=t.player.z-i.z,a=Math.hypot(r,s);if((a<18||t.player.forceAggro)&&(i.aggro=!0),i.cloaked&&a<3.05&&(i.reveal=Math.max(i.reveal||0,1.25)),i=Zc(i,0,t.channel),(i.slow||0)>0&&(i.slow=Math.max(0,i.slow-e)),(i.marked||0)>0&&(i.marked=Math.max(0,i.marked-e)),(i.stun||0)>0)return i.stun-=e,i.windup=0,i.hurt=Math.max(0,(i.hurt||0)-e),a>.001&&i.aggro&&(i.yaw=Math.atan2(r,s)),{enemy:i,shot:null};const o=i.cloaked&&!i.visible;if(!i.aggro||o)return i.hurt=Math.max(0,(i.hurt||0)-e),{enemy:i,shot:null};const l=a<17&&mh(i.x,1.45,i.z,t.player.x,(F=t.player.y)!=null?F:1.2,t.player.z,t.colliders);i.hurt=Math.max(0,(i.hurt||0)-e),i.cooldown=(i.cooldown||0)-e;let u=null;if(i.windup>0?(i.windup-=e,i.windup<=0&&(i.windup=0,l&&(u=k_(i,t,a)))):l&&i.cooldown<=0&&(i.windup=.28,i.cooldown=1.28+t.rng()*.45),i.windup>0)return a>.001&&(i.yaw=Math.atan2(r,s)),{enemy:i,shot:u};const h=a>.001?{x:r/a,z:s/a}:{x:0,z:1},d={x:-h.z,z:h.x};i.strafeT=(i.strafeT||0)-e,i.strafeT<=0&&(i.strafeSign=(i.strafeSign||1)*-1,i.strafeT=.75+t.rng()*1.05);let f=d.x*i.strafeSign*.9,m=d.z*i.strafeSign*.9;if(a>10.2?(f+=h.x,m+=h.z):a<5.2&&(f-=h.x*.85,m-=h.z*.85),t.allies)for(const E of t.allies){if(!E.alive||E.id===i.id)continue;const y=i.x-E.x,T=i.z-E.z,R=Math.hypot(y,T);R<1.15&&R>.001&&(f+=y/R*1.4,m+=T/R*1.4)}const _=z_(f,m),g=(i.slow||0)>0?.35:1,p=uh("STATIC")*.62*(i.hurt>0?.25:1)*g;let w=_.x*p*e,b=_.z*p*e;const S=ph(i.x,i.z,w,b,.42,t.colliders,"LIVE",null);let k=S.x,D=S.z;const P=sh[i.id];return P&&(k<P.minX||k>P.maxX||D<P.minZ||D>P.maxZ)&&(k=i.x,D=i.z),i.x=k,i.z=D,a>.001&&(i.yaw=Math.atan2(r,s)),{enemy:i,shot:u}}function k_(n,e,t){var h;const i=n.x,r=1.32,s=n.z,a=e.player.x-i+(e.rng()-.5)*.35,o=((h=e.player.y)!=null?h:1.15)-r+(e.rng()-.5)*.12,c=e.player.z-s+(e.rng()-.5)*.35,l=Math.hypot(a,o,c)||1,u=14.5;return{x:i,y:r,z:s,vx:a/l*u,vy:o/l*u,vz:c/l*u,damage:de.boltDamage,life:2.1,dist:t}}function gh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Ht;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in s){const h=Kc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const m=Kc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function Kc(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new en(a,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){const _=u.getComponent(d,m);o.setComponent(d+h,m,_)}}else a.set(u.array,c);c+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function xr(n,e,t,i,r){const s=-r/2,a=r/2,o=[[-n/2,s,e/2],[n/2,s,e/2],[n/2,s,-e/2],[-n/2,s,-e/2],[-t/2,a,i/2],[t/2,a,i/2],[t/2,a,-i/2],[-t/2,a,-i/2]],c=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],l=[],u=[];for(const d of c){const[f,m,_,g]=d.map(p=>o[p]);l.push(...f,...m,..._,...f,..._,...g),u.push(0,0,1,0,1,1,0,0,1,1,0,1)}const h=new Ht;return h.setAttribute("position",new Et(l,3)),h.setAttribute("uv",new Et(u,2)),h.computeVertexNormals(),h}function uo(n,e=24){const t=n.map(([r,s])=>new Re(r,s)),i=new ri(t,e);return i.computeVertexNormals(),i}function je(n,e,t=0,i=0,r=0){const s=new ne(n,e);return s.position.set(t,i,r),s.castShadow=!0,s.receiveShadow=!0,s}function ho(n){return gh(n,!1)}const H_=[[.02,.2],[.1,.175],[.148,.11],[.164,.04],[.158,-.03],[.132,-.09],[.09,-.135],[.04,-.158]],V_=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],G_=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];let Jr=null;function Cl(){if(Jr)return Jr;const n=[],e=new Rt(.046,12,10);e.scale(1.5,.75,1.45),e.translate(0,-.575,.02),n.push(e);for(let u=0;u<4;u++){const h=-.042+u*.028,d=.05-Math.abs(u-1.5)*.006,f=.28+(u===0||u===3?.12:0),m=new lt(.011,.013,d,6);m.translate(0,-d*.5,0),m.rotateX(.16),m.translate(h,-.62,.05);const _=new lt(.008,.011,d*.82,6);_.translate(0,-d*.38,0),_.rotateX(f),_.translate(h,-.62-d*.7,.055),n.push(m,_)}const t=new lt(.009,.011,.04,6);t.translate(0,-.02,0),t.rotateZ(.85),t.translate(.048,-.59,.015);const i=new lt(.007,.009,.028,6);i.translate(0,-.014,0),i.rotateZ(1.15),i.rotateX(.25),i.translate(.062,-.6,.03),n.push(t,i);const r=new Le(.1,.025,.2);r.translate(0,-.012,.02);const s=new Le(.088,.038,.13);s.translate(0,.016,-.005);const a=[],o=new Le(.05,.055,.16);o.translate(0,-.56,.1),a.push(o);const c=new Le(.03,.03,.07);c.translate(0,-.545,.16),a.push(c);const l=new Le(.038,.07,.04);l.translate(0,-.61,.04),a.push(l),Jr={helmet:uo(H_,36),torso:uo(V_,32),robe:uo(G_,36),visor:new Rt(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:xr(.34,.2,.48,.26,.4),abdomen:xr(.3,.18,.34,.2,.18),pelvis:xr(.32,.2,.28,.18,.14),pec:xr(.15,.1,.17,.12,.2),shoulder:xr(.1,.1,.14,.12,.08),thigh:new lt(.055,.072,.34,12),shin:new lt(.04,.055,.32,12),foot:ho([r,s]),upper:new lt(.04,.05,.26,12),forearm:new lt(.03,.04,.22,12),hand:ho(n),gun:ho(a),collar:new lt(.07,.09,.08,8),joint:new Rt(1,16,12),skirt:xr(.34,.16,.5,.22,.62),tabard:new Le(.22,.58,.045),stole:new Le(.09,.5,.04),muzzle:new Le(.028,.028,.04),seam:new Le(.2,.028,.02)};for(const u of Object.values(Jr))if(!(!(u!=null&&u.index)||u.attributes.tangent||!u.attributes.uv||!u.attributes.normal))try{u.computeTangents()}catch(h){}return Jr}const al=[];let ol=1;const W_=ht.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );","vec4 envMapColor = sampleProbe( envMapRotation * worldNormal, 1.0 );").replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );","vec4 envMapColor = sampleProbe( envMapRotation * reflectVec, roughness );");function X_(n,e,t){n.envMap=e||null,n.envMapIntensity=e?1.15:.72,!(!e||!t)&&(n.customProgramCacheKey=()=>"visor-dual-probe",n.onBeforeCompile=i=>{i.uniforms.courtMap={value:t},i.uniforms.probeMix={value:ol},n.userData.probeShader=i,i.fragmentShader=i.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`#ifdef USE_ENVMAP
uniform sampler2D courtMap;
uniform float probeMix;
vec4 sampleProbe(vec3 dir, float roughness) {
  if (probeMix >= 0.999) return textureCubeUV(courtMap, dir, roughness);
  if (probeMix <= 0.001) return textureCubeUV(envMap, dir, roughness);
  return mix(textureCubeUV(envMap, dir, roughness), textureCubeUV(courtMap, dir, roughness), probeMix);
}
#endif
${W_}`)},al.push(n))}let fo=null;function _h(n){if(!fo){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d"),r=i.createRadialGradient(32,32,2,32,32,31);r.addColorStop(0,"rgba(0,0,0,0.48)"),r.addColorStop(.5,"rgba(0,0,0,0.2)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,64,64);const s=new bi(t);s.colorSpace=rn,fo=new at({map:s,transparent:!0,depthWrite:!1})}const e=new ne(new xi(n,24),fo);return e.rotation.x=-Math.PI/2,e.position.y=.025,e.castShadow=!1,e.receiveShadow=!1,e}function Vi(n,e=0,t=0){return n.userData.rest=e,n.userData.restI=t,n.emissive=new nt(e),n.emissiveIntensity=t,n}function jc(n,e){const t=n.shinGrime.clone();return t.wrapS=kn,t.offset.x=e,Vi(new Yt({map:t,roughness:.96,metalness:.02,envMapIntensity:.14}))}function vh(n,e){const t=(e==null?void 0:e.aisle)||null,i=(e==null?void 0:e.court)||null,r=Vi(new to({map:n.pearl,normalMap:n.pearlNormal,roughnessMap:n.pearlRough,roughness:.85,metalness:.02,clearcoat:.58,clearcoatRoughness:.24,envMapIntensity:.36}));r.normalScale.set(.45,.45);const s=Vi(new Yt({map:n.pearlWorn,normalMap:n.pearlNormal,roughnessMap:n.pearlRough,roughness:1,metalness:.02,envMapIntensity:.22}));s.normalScale.set(.65,.65);const a=Vi(new Yt({map:n.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),o=Vi(new to({color:461070,roughness:.035,metalness:.12,clearcoat:1,clearcoatRoughness:.03,iridescence:0,ior:1.55,reflectivity:1}));X_(o,t,i),o.polygonOffset=!0,o.polygonOffsetFactor=-2,o.polygonOffsetUnits=-2;const c=Vi(new to({map:n.cloth,normalMap:n.clothNormal,roughnessMap:n.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new nt(16183784),envMapIntensity:.32}));c.normalScale.set(.4,.4);const l=Vi(new Yt({map:n.gold,normalMap:n.goldNormal,roughnessMap:n.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);l.normalScale.set(.35,.35);const u=new at({color:16757066}),h=jc(n,0),d=jc(n,.17);return{pearl:r,worn:s,joint:a,visor:o,cloth:c,gold:l,amber:u,grime:h,grimeR:d}}function qs(n,e,t,i,r){const s=je(Cl().joint,n,t,i,r);return s.scale.setScalar(e),s}function gi(n,e,t=16774894){for(const i of n)e>.02?(i.emissive.setHex(t),i.emissiveIntensity=e):(i.emissive.setHex(i.userData.rest||0),i.emissiveIntensity=i.userData.restI||0)}function Y_(n,e={}){const t=new dt,i=Cl(),r=vh(n,e.probes),s=[],a=je(i.torso,r.pearl),o=je(new lt(.188,.188,.048,18),r.joint,0,1.02,0),c=je(i.collar,r.joint,0,1.5,0),l=new dt;l.position.set(0,1.66,0);const u=je(i.helmet,r.pearl);u.scale.set(1.06,.96,1.08);const h=je(new Rt(.172,40,24),r.visor,0,-.045,.168);h.scale.set(1.18,1.14,.36);const d=je(new Rt(.026,12,8),r.pearl,0,.148,.12);d.scale.set(1,.65,.5);const f=je(i.seam,r.amber,0,-.02,.185);f.visible=!1,f.castShadow=!1,l.add(u,h,d,f);const m=je(new Le(.32,.22,.028),r.pearl,0,1.3,.22);m.castShadow=!1;const _=je(new Rt(.14,14,10),r.pearl,0,.74,0);_.scale.set(1.65,.48,1.05),_.castShadow=!1,s.push(a,o,c,l,m,_);function g(E,y){const T=new dt;if(y){T.add(qs(r.joint,.055,0,0,0)),T.add(je(i.upper,r.pearl,0,-.16,0)),T.add(qs(r.joint,.042,0,-.3,0)),T.add(je(i.forearm,r.joint,0,-.42,0));const R=Z_(r.joint,E);T.add(R.rig),T.userData.digits=R.digits}else{T.add(qs(r.joint,.058,0,0,0)),T.add(je(i.thigh,r.pearl,0,-.2,0)),T.add(qs(r.joint,.048,0,-.38,0));const R=je(new Rt(.046,10,8),r.pearl,0,-.38,.042);R.scale.set(1.05,.8,.5),R.castShadow=!1,T.add(R);const L=je(i.shin,r.worn,0,-.56,0);L.rotation.y=Math.PI,L.scale.set(1.12,1,.86),T.add(L);const Y=je(new Le(.078,.24,.016),E<0?r.grime:r.grimeR,0,-.58,.058);Y.castShadow=!1,T.add(Y);const G=je(i.foot,r.worn,0,-.76,.03);T.add(G)}return T}const p=g(-1,!1);p.position.set(-.12,.8,0),p.rotation.z=.08;const w=g(1,!1);w.position.set(.12,.8,0),w.rotation.z=-.08;const b=g(-1,!0);b.position.set(-.32,1.4,0),b.rotation.z=.42;const S=g(1,!0);S.position.set(.32,1.4,0),S.rotation.z=-.36;const k=je(i.gun,r.joint,.045,.02,.02),D=je(i.muzzle,r.amber,.045,-.525,.22);D.castShadow=!1,S.add(k,D);const P=_h(.48);t.add(...s,p,w,b,S,P);let F=null;if(e.vestment){const E=je(i.tabard,r.cloth,0,.92,.16),y=je(new Le(.28,.42,.04),r.cloth,0,.95,-.14),T=je(i.stole,r.gold,0,1.16,.18),R=je(new ri([new Re(.18,0),new Re(.32,.04),new Re(.24,.1)],24),r.cloth,0,1.4,0),L=Tr(xh(new ri([new Re(.2,.02),new Re(.36,.2),new Re(.4,.46),new Re(.3,.74),new Re(.22,.96)],28),6,.016),r.cloth,0,.06,0);F=L,t.add(E,y,T,R,L)}return Mh(t),{group:t,weak:f,lLeg:p,rLeg:w,lArm:b,rArm:S,muzzle:D,shadow:P,cloth:F,lDigits:b.userData.digits,rDigits:S.userData.digits,flashMats:[r.pearl,r.worn,r.joint,r.visor,r.cloth,r.gold,r.grime,r.grimeR],flash:0}}function q_(n,e){const t=new dt,i=vh(n,e),r=Cl(),s=Tr(xh(r.robe,8,.04),i.cloth),a=Tr(new ri([new Re(.26,0),new Re(.64,.05),new Re(.5,.14),new Re(.22,.2)],28),i.cloth,0,1.46,0),o=i.cloth.clone();o.side=qt;const c=Tr(new lt(.3,.98,1.78,18,1,!0,Math.PI-1.25,2.5),o,0,.9,-.14);c.castShadow=!1;const l=je(new ri([new Re(.12,0),new Re(.22,.06),new Re(.16,.16)],24),i.cloth,0,1.68,0),u=je(new sn(.58,.05,8,28),i.cloth,0,.08,0);u.rotation.x=Math.PI/2,u.castShadow=!1;const h=je(new sn(.63,.018,8,32),i.gold,0,.05,0);h.rotation.x=Math.PI/2;const d=je(new sn(.38,.022,8,28),i.gold,0,1.1,0);d.rotation.x=Math.PI/2;const f=i.cloth.clone();f.side=qt;const m=[],_=[[0,.7,.06,1.2,.075],[.82,.36,.08,1.16,.068],[-.82,.36,.08,1.16,.068],[1.6,.4,.08,1.12,.06],[-1.6,.4,.08,1.12,.06],[Math.PI,.55,.1,1.08,.055]];for(const[x,I,O,H,j]of _){const Me=Tr(Qr(x,I,O,H,j),f);Me.castShadow=!1,m.push(Me),t.add(Me)}for(const x of[-.36,.36]){const I=je(Qr(x,.045,.08,1.18,.09),i.gold);I.castShadow=!1,t.add(I)}const g=Tr(Qr(0,.95,1.16,1.5,.055,6),f);g.castShadow=!1;const p=je(Qr(0,1.05,1.12,1.17,.07,3),i.gold);p.castShadow=!1;const w=je(Qr(0,.1,.42,1.14,.095,8),i.gold);w.castShadow=!1;const b=je(new Rt(.045,12,10),i.gold,0,.48,.58),S=new dt;S.position.set(0,2.05,0),S.scale.setScalar(1.18);const k=je(r.helmet,i.pearl),D=je(new Rt(.028,12,8),i.pearl,0,.15,.11);D.scale.set(1,.62,.48);const P=je(new Rt(.175,40,24),i.visor,0,-.04,.162);P.scale.set(1.22,1.2,.38);const F=je(new Le(.22,.03,.018),i.amber,0,-.02,.175);F.visible=!1,F.castShadow=!1,S.add(k,D,P,F);const E=new Yt({color:15123818,map:n.gold,normalMap:n.goldNormal,roughnessMap:n.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),y=new ne(new sn(.58,.04,12,48),E);y.position.set(0,2.22,-.16);const T=new ne(new sn(.4,.016,8,36),E);y.add(T);const R=je(new Rt(.032,10,8),i.gold,.58,0,0);y.add(R);const L=i.cloth.clone();L.side=qt;function Y(x){const I=new dt,O=je(new lt(.075,.13,.52,14),i.cloth,0,.26,0),H=je(new lt(.22,.08,.46,14,1,!0),L,0,.2,0);H.castShadow=!1;const j=je(new sn(.2,.016,8,16),i.gold,0,.44,0);j.rotation.x=Math.PI/2;const Me=$_(i.pearl,i.amber,x);return I.add(O,H,j,Me.rig),I.position.set(x*.42,1.48,.02),{pivot:I,hand:Me.amber,digits:Me.digits}}const G=Y(-1),Z=Y(1);for(const x of[1.42,1.28,1.14]){const I=je(new sn(.16,.01,8,22,Math.PI*.85),i.gold,0,x,.42);I.rotation.x=Math.PI/2,t.add(I)}const ie=_h(.9);return t.add(s,c,a,l,u,h,d,g,p,w,b,S,y,G.pivot,Z.pivot,ie),t.position.set(os.x,0,os.z),Mh(t),{group:t,halo:y,haloMat:E,seam:F,shadow:ie,lArm:G.pivot,rArm:Z.pivot,lHand:G.hand,rHand:Z.hand,lDigits:G.digits,rDigits:Z.digits,cloths:[s,c,a,g,...m],flashMats:[i.pearl,i.cloth,o,L,f,i.visor,i.gold],flash:0}}const $c=new Map;function Zs(n,e,t){const i=`${n}:${e}:${t}`;let r=$c.get(i);return r||(r=new lt(n,e,t,6),$c.set(i,r)),r}function Z_(n,e){const t=new dt,i=e<0;t.position.set(e*.012,-.5,i?.09:.045),t.rotation.x=i?-.62:-.22;const r=new Rt(.036,10,8);r.scale(2.35,.55,.72);const s=je(r,n);s.castShadow=!1,t.add(s);const a=[],o=[-.074,-.025,.025,.074],c=[.09,.118,.106,.08];for(let f=0;f<4;f++){const m=new dt;m.position.set(o[f],-.02,.02);const _=c[f],g=je(Zs(.009,.0125,_),n,0,-_*.48,0);g.castShadow=!1;const p=je(new Rt(.012,8,6),n,0,-_*.92,0);p.castShadow=!1;const w=new dt;w.position.y=-_*.96;const b=_*.72,S=je(Zs(.0065,.0095,b),n,0,-b*.46,0);S.castShadow=!1,w.add(S),m.add(g,p,w),t.add(m),a.push({knuckle:m,tip:w})}const l=new dt;l.position.set(e*.082,.004,.028),l.rotation.z=-e*1.15;const u=je(Zs(.0085,.011,.052),n,0,-.028,0);u.castShadow=!1;const h=new dt;h.position.y=-.05;const d=je(Zs(.006,.0085,.038),n,0,-.02,0);return d.castShadow=!1,h.add(d),l.add(u,h),t.add(l),a.push({knuckle:l,tip:h}),{rig:t,digits:a}}const K_=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];function j_(n){const e=K_;if(n<=e[0][1])return e[0][0];for(let t=1;t<e.length;t++)if(n<=e[t][1]){const i=(n-e[t-1][1])/(e[t][1]-e[t-1][1]);return e[t-1][0]+(e[t][0]-e[t-1][0])*i}return e[e.length-1][0]}function Qr(n,e,t,i,r,s=8){const a=new Ht,o=[],c=[],l=[],u=2;for(let d=0;d<=s;d++){const f=d/s,m=t+(i-t)*f,_=j_(m)+r;for(let g=0;g<=u;g++){const p=n-e/2+e*g/u;o.push(Math.sin(p)*_,m,Math.cos(p)*_),c.push(g/u,f)}}const h=u+1;for(let d=0;d<s;d++)for(let f=0;f<u;f++){const m=d*h+f;l.push(m,m+h,m+1,m+1,m+h,m+h+1)}return a.setAttribute("position",new Et(o,3)),a.setAttribute("uv",new Et(c,2)),a.setIndex(l),a.computeVertexNormals(),a}function $_(n,e,t){const i=new dt;i.position.set(0,.58,.1);const r=new Rt(.055,12,8);r.scale(1.7,1.15,.4);const s=je(r,n);s.castShadow=!1,i.add(s);const a=[],o=[-.058,-.02,.02,.058],c=[.09,.11,.1,.078];for(let m=0;m<4;m++){const _=new dt;_.position.set(o[m],.04,.02);const g=c[m],p=je(new lt(.012,.014,g,6),n,0,g*.48,0);p.castShadow=!1;const w=new dt;w.position.y=g*.9;const b=g*.7,S=je(new lt(.009,.012,b,6),n,0,b*.46,0);S.castShadow=!1,w.add(S),_.add(p,w),i.add(_),a.push({knuckle:_,tip:w})}const l=new dt;l.position.set(t*.078,-.006,.02),l.rotation.z=t*.85;const u=je(new lt(.01,.012,.05,6),n,0,.028,0);u.castShadow=!1;const h=new dt;h.position.y=.05;const d=je(new lt(.007,.01,.032,6),n,0,.016,0);d.castShadow=!1,h.add(d),l.add(u,h),i.add(l),a.push({knuckle:l,tip:h});const f=je(new Le(.09,.07,.014),e,0,.01,.04);return f.castShadow=!1,i.add(f),{rig:i,digits:a,amber:f}}function _i(n,e){for(let t=0;t<n.length;t++){const i=n[t],r=t===n.length-1?.55:1;i.knuckle.rotation.x=-e*r,i.tip.rotation.x=-e*.8*r}}function Jc(n,e,t=0,i=1){if(!n)return;const r=Array.isArray(n)?n:[n];for(const s of r)s!=null&&s.morphTargetInfluences&&(s.morphTargetInfluences[0]=Math.sin(e*.75+t)*.6*i,s.morphTargetInfluences[1]=Math.sin(e*.5+t+.8)*.4*i)}function J_(n){const e=n.attributes.position;let t=1/0,i=-1/0;for(let o=0;o<e.count;o++){const c=e.getY(o);c<t&&(t=c),c>i&&(i=c)}const r=Math.max(.001,i-t),s=new Float32Array(e.count*3),a=new Float32Array(e.count*3);for(let o=0;o<e.count;o++){const c=Math.pow(Math.max(0,(i-e.getY(o))/r),1.35);s[o*3]=c*.08,a[o*3+2]=c*.055}return n.morphAttributes.position=[new Et(s,3),new Et(a,3)],n}function Tr(n,e,t=0,i=0,r=0){J_(n);const s=je(n,e,t,i,r);return s.updateMorphTargets(),s}function xh(n,e=7,t=.02){const i=n.clone(),r=i.attributes.position;for(let s=0;s<r.count;s++){const a=r.getX(s),o=r.getY(s),c=r.getZ(s),l=Math.hypot(a,c)||1,u=Math.atan2(a,c),h=.4+.6*Math.max(0,c/l),d=.4+.6*Math.min(1,Math.max(0,(1.35-o)/1.35)),f=Math.sin(u*e)*t*h*d;r.setXYZ(s,a+a/l*f,o,c+c/l*f)}return r.needsUpdate=!0,i.computeVertexNormals(),i.getAttribute("tangent")&&i.deleteAttribute("tangent"),i}function Mh(n){n.traverse(e=>{var i;const t=e.geometry;if(!(!e.isMesh||!((i=e.material)!=null&&i.normalMap)||!(t!=null&&t.index)||t.attributes.tangent)&&!(!t.attributes.uv||!t.attributes.normal))try{t.computeTangents()}catch(r){}})}function Q_(n,e,t){al.length=0;const i=new Map,r=new Set(da().map(l=>l.id));for(const l of[...lh(),...da(),...ra()]){const u=Y_(e,{vestment:r.has(l.id),probes:t});u.group.position.set(l.x,0,l.z),u.group.visible=l.visible,u.death=0,u.died=!1,u.phase=Math.random()*Math.PI*2,u.prevX=l.x,u.prevZ=l.z,n.add(u.group),i.set(l.id,u)}const s=q_(e,t);s.died=!1,s.death=0,s.pose=0,n.add(s.group);const a=new Rt(.08,7,5),o=new at({color:16756768}),c=[];for(let l=0;l<16;l++){const u=new ne(a,o);u.visible=!1,u.frustumCulled=!1,n.add(u),c.push(u)}return{setProbeBlend(l){ol=Math.min(1,Math.max(0,(l- -17)/5));for(const u of al){const h=u.userData.probeShader;h&&(h.uniforms.probeMix.value=ol)}},reset(l){for(const u of l){const h=i.get(u.id);if(h){if(h.prevX=u.x,h.prevZ=u.z,h.group.position.set(u.x,0,u.z),h.group.rotation.set(0,0,0),h.group.scale.setScalar(1),h.flash=0,gi(h.flashMats,0),h.weak.visible=!1,!u.alive){h.died=!0,h.death=0,h.group.visible=!1;continue}h.death=0,h.died=!1,h.group.visible=u.visible}}},resetPriest(l){s.died=!1,s.death=0,s.pose=0,s.flash=0,s.group.visible=!0,s.group.rotation.set(0,0,0),s.group.position.set(l.x,0,l.z),s.halo.scale.setScalar(1),gi(s.flashMats,0),s.seam.visible=!1},syncPriest(l,u,h,d){if(!l.alive){s.died||(s.died=!0,s.death=1.05),s.death-=u;const P=1-Math.max(s.death,0)/1.05;s.group.visible=s.death>0,s.group.rotation.x=P*1.25,s.group.position.set(l.x,-P*.55,l.z),s.shadow.visible=!1,s.halo.scale.setScalar(Math.max(0,1-P)),s.seam.visible=!1,s.lArm.rotation.x=.9,s.rArm.rotation.x=.7,_i(s.lDigits,.85),_i(s.rDigits,.75),gi(s.flashMats,P<.45?(1-P/.45)*2.4:0);return}s.died=!1,s.death=0,s.group.visible=!0,s.group.rotation.set(0,l.yaw||0,Math.sin(h*.8)*.008);const f=Math.sin(h*1.15)*.015;s.group.position.set(l.x,f,l.z),s.shadow.visible=!0,s.shadow.position.y=.025-f,s.halo.rotation.z=h*.15;const m=l.phase==="rite",_=m?1.28:l.windup>0?.4:1.12,g=l.windup>0?-.85:m?-.25:-.12;s.lArm.rotation.set(g,0,_),s.rArm.rotation.set(g,0,-_),Jc(s.cloths,h,.2,1);const p=l.windup>0?.62:m?.1+Math.sin(h*2.2)*.04:.2+Math.sin(h*1.35)*.07;_i(s.lDigits,p),_i(s.rDigits,p);const w=!!l.haloVisible,b=w&&d==="STATIC";s.halo.visible=!0;const S=w?1+Math.sin(h*7)*.06:1;s.halo.scale.setScalar(S),s.haloMat.opacity=b?1:w?.96:.9,s.haloMat.emissiveIntensity=b?2.4:w?1.55:.85,s.seam.visible=!!l.exposed;const k=l.windup>0||l.phase==="rite";s.lHand.visible=k,s.rHand.visible=k;const D=k?1.45:1;s.lHand.scale.setScalar(D),s.rHand.scale.setScalar(D),l.hurt>0&&(s.flash=.2),s.flash=Math.max(0,s.flash-u),gi(s.flashMats,s.flash>0?s.flash/.2*2.6:0)},sync(l,u,h,d){for(const f of l){const m=i.get(f.id);if(!f.alive){m.died||(m.died=!0,m.death=.85),m.death-=u;const b=1-Math.max(m.death,0)/.85;m.group.visible=m.death>0,m.group.rotation.x=b*1.35,m.group.position.set(f.x,-b*.4,f.z),m.shadow.visible=!1,m.group.scale.setScalar(1),m.lArm.rotation.x=.5+b*.6,m.rArm.rotation.x=.3+b*.9,_i(m.lDigits,.8),_i(m.rDigits,.9),m.lLeg.rotation.x=-.25*b,m.rLeg.rotation.x=.4*b,m.weak.visible=!1,gi(m.flashMats,b<.4?(1-b/.4)*2.4:0);continue}m.died=!1,m.death=0,m.group.visible=!!f.visible;const _=Math.hypot(f.x-m.prevX,f.z-m.prevZ);m.prevX=f.x,m.prevZ=f.z;const g=Math.sin(h*1.4+m.phase)*(_>.004?.02:.012);m.group.rotation.set(0,f.yaw||0,Math.sin(h*1.1+m.phase)*.012),m.group.position.set(f.x,g,f.z),m.shadow.visible=!0,m.shadow.position.y=.025-g;const p=_>.004?Math.sin(h*8+m.phase):Math.sin(h*1.6+m.phase)*.15;if(m.lLeg.rotation.x=p*.7,m.rLeg.rotation.x=-p*.7,m.lArm.rotation.x=-p*.45,m.rArm.rotation.x=p*.25+(f.windup>0?-.95:-.06),m.weak.visible=!!f.exposed,f.hurt>0&&(m.flash=.16),m.flash=Math.max(0,m.flash-u),m.flash>0)gi(m.flashMats,m.flash/.16*2.8),m.group.scale.setScalar(1.035);else if(f.cloaked&&f.visible){const b=.22+Math.sin(h*9)*.1;gi(m.flashMats,b,16766888),m.group.scale.setScalar(1)}else gi(m.flashMats,0),m.group.scale.setScalar(1);m.muzzle.scale.setScalar(f.windup>0?1.8:1);const w=.16+Math.sin(h*1.35+m.phase)*.05;_i(m.lDigits,w),_i(m.rDigits,f.windup>0?.8:.4),m.cloth&&Jc(m.cloth,h,m.phase,.85),f.cloaked&&f.visible&&d!=="STATIC"&&f.reveal<.5&&(m.group.visible=Math.sin(h*46)>-.2)}},syncBolts(l){for(let u=0;u<c.length;u++){const h=c[u],d=l[u];if(!d){h.visible=!1;continue}h.visible=!0,h.position.set(d.x,d.y,d.z),h.scale.setScalar(d.echo?1.7:1)}}}}const Qc=["seam","choir","veil"],wn={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},ev=2.05,tv=1.2,nv=2.62;function eu(n){return n==="seam"?"LIVE · THE SEAM":n==="choir"?"STATIC · THE HALO":n==="veil"?"DEAD AIR · THE VEIL":""}function tu(){return{id:"visor-priest",boss:!0,x:os.x,y:os.y,z:os.z,yaw:0,hp:wn.hp,maxHp:wn.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:wn.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function iv(n,e){const t=Qc[n.riteIndex%Qc.length];n.phase="rite",n.rite=t,n.timer=wn.riteWindow,n.exposed=t==="seam",n.haloVisible=t==="choir",n.veilUp=t==="veil",n.windup=0,e.push({type:"announce",rite:t})}function yh(n){n.phase="recover",n.rite=null,n.exposed=!1,n.haloVisible=!1,n.veilUp=!1,n.windup=0,n.timer=wn.recover,n.riteIndex+=1}function rv(n,e,t){if(!n.alive||!n.active)return{priest:n,events:[]};const i=[],r={...n,hurt:Math.max(0,(n.hurt||0)-e),stun:Math.max(0,(n.stun||0)-e)};if(t&&t.player){const s=t.player.x-r.x,a=t.player.z-r.z;Math.hypot(s,a)>.05&&(r.yaw=Math.atan2(s,a))}return r.phase==="idle"?(r.timer-=e,r.timer<=0?iv(r,i):r.stun>0?r.windup=0:r.windup>0?(r.windup-=e,r.windup<=0&&(r.windup=0,r.shotCooldown=wn.shotGap,i.push({type:"shot"}))):(r.shotCooldown-=e,r.shotCooldown<=0&&(r.windup=wn.shotWindup))):r.phase==="rite"?(r.windup=0,r.timer-=e,r.timer<=0&&(i.push({type:"fail",rite:r.rite,damage:wn.failDamage}),yh(r))):r.phase==="recover"&&(r.windup=0,r.timer-=e,r.timer<=0&&(r.phase="idle",r.timer=wn.idle)),{priest:r,events:i}}function sv(n){return n>0?n*wn.armor:0}function av(n,e){const t=sv(e);if(!n||!n.alive||t<=0)return{priest:n,dealt:0,killed:!1};const i=n.hp-t,r=i<=0;return{priest:{...n,hp:r?0:i,alive:!r,hurt:.22,phase:r?"dead":n.phase,veilUp:r?!1:n.veilUp,haloVisible:r?!1:n.haloVisible,exposed:r?!1:n.exposed,rite:r?null:n.rite},dealt:t,killed:r}}function nu(n,e){if(!n.alive||n.phase!=="rite")return{priest:n,broken:!1,dealt:0,killed:!1};if(!(n.rite==="seam"&&e.channel==="LIVE"&&e.weak&&!e.halo||n.rite==="choir"&&e.channel==="STATIC"&&e.halo||n.rite==="veil"&&e.channel==="DEAD_AIR"&&e.crossed))return{priest:n,broken:!1,dealt:0,killed:!1};const i=wn.breakDamage,r=n.hp-i;if(r<=0)return{priest:{...n,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:i,killed:!0};const a={...n,hp:r,hurt:.28,broken:(n.broken||0)+1};return yh(a),{priest:a,broken:!0,dealt:i,killed:!1}}function ov(n,e,t,i,r){if(!i||!i.alive||!i.hittable)return null;const s=[{y:tv,r:.62,weak:!1,halo:!1},{y:ev,r:.3,weak:!0,halo:!1}];i.haloVisible&&r==="STATIC"&&s.push({y:nv,r:.42,weak:!1,halo:!0});let a=null,o=t;for(const c of s){const l=Al(n.x,n.y,n.z,e.x,e.y,e.z,i.x,(i.y||0)+c.y,i.z,c.r);l==null||l<=.02||l>=o||(o=l,a={kind:"priest",id:i.id,t:l,weak:c.weak,halo:c.halo,x:n.x+e.x*l,y:n.y+e.y*l,z:n.z+e.z*l})}return a}const yi={maxShots:12,recordWindow:10,boltDamage:8,identBeats:4,identGap:.85,identLead:.4};function sa(){return{recording:!1,t:0,shots:[],sealed:!1,playing:!1,playT:0,fired:0,schedule:[]}}function iu(n){return!n||n.sealed?n||sa():{...n,recording:!0}}function lv(n,e){return!n.recording||n.sealed||n.shots.length>=yi.maxShots||n.t>yi.recordWindow?n:{...n,shots:n.shots.concat({t:n.t,channel:e})}}function cv(n,e){if(!n.recording||n.sealed)return n;const t=n.t+Math.max(0,e);return t>=yi.recordWindow?{...n,t:yi.recordWindow,recording:!1,sealed:!0}:{...n,t}}function ll(n){return{...n,recording:!1,sealed:!0}}function uv(n){if(n.shots.length)return n.shots.map(t=>({t:t.t,channel:t.channel}));const e=[];for(let t=0;t<yi.identBeats;t++)e.push({t:yi.identLead+t*yi.identGap,channel:"LIVE",ident:!0});return e}function ru(n){const e=ll(n);return{...e,playing:!0,playT:0,fired:0,schedule:uv(e)}}function hv(n,e){if(!n.playing)return{echo:n,shots:[]};const t=n.playT+Math.max(0,e),i=n.schedule||[],r=[];let s=n.fired||0;for(;s<i.length&&i[s].t<=t;)r.push(i[s]),s+=1;return{echo:{...n,playT:t,fired:s,playing:s<i.length},shots:r}}const su=["listing","index","gate"],bn={hp:480,armor:.2,breakDamage:72,failDamage:16,riteWindow:3.4,recover:2.05,idle:2.15,idleFirst:1.8,shotWindup:.62,shotGap:1.5,boltDamage:11,boltSpeed:13.2},fv=1.35,dv=.72,pv=2.2,mv=.28,gv=2.95,_v=.48;function au(n){return n==="listing"?"LIVE · THE LISTING":n==="index"?"STATIC · THE INDEX":n==="gate"?"DEAD AIR · THE GATE":""}function Ks(){return{id:"directory-boss",boss:!0,x:qi.x,y:qi.y,z:qi.z,yaw:0,hp:bn.hp,maxHp:bn.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:bn.idleFirst,shotCooldown:.9,windup:0,stun:0,hurt:0,broken:0,active:!1}}function vv(n,e){const t=su[n.riteIndex%su.length];n.phase="rite",n.rite=t,n.timer=bn.riteWindow,n.exposed=t==="listing",n.haloVisible=t==="index",n.veilUp=t==="gate",n.windup=0,e.push({type:"announce",rite:t})}function Sh(n){n.phase="recover",n.rite=null,n.exposed=!1,n.haloVisible=!1,n.veilUp=!1,n.windup=0,n.timer=bn.recover,n.riteIndex+=1}function xv(n,e,t){if(!n.alive||!n.active)return{boss:n,events:[]};const i=[],r={...n,hurt:Math.max(0,(n.hurt||0)-e),stun:Math.max(0,(n.stun||0)-e)};if(t&&t.player){const s=t.player.x-r.x,a=t.player.z-r.z;Math.hypot(s,a)>.05&&(r.yaw=Math.atan2(s,a))}return r.phase==="idle"?(r.timer-=e,r.timer<=0?vv(r,i):r.stun>0?r.windup=0:r.windup>0?(r.windup-=e,r.windup<=0&&(r.windup=0,r.shotCooldown=bn.shotGap,i.push({type:"shot"}))):(r.shotCooldown-=e,r.shotCooldown<=0&&(r.windup=bn.shotWindup))):r.phase==="rite"?(r.windup=0,r.timer-=e,r.timer<=0&&(i.push({type:"fail",rite:r.rite,damage:bn.failDamage}),Sh(r))):r.phase==="recover"&&(r.windup=0,r.timer-=e,r.timer<=0&&(r.phase="idle",r.timer=bn.idle)),{boss:r,events:i}}function Mv(n){return n>0?n*bn.armor:0}function yv(n,e){const t=Mv(e);if(!n||!n.alive||t<=0)return{boss:n,dealt:0,killed:!1};const i=n.hp-t,r=i<=0;return{boss:{...n,hp:r?0:i,alive:!r,hurt:.22,phase:r?"dead":n.phase,veilUp:r?!1:n.veilUp,haloVisible:r?!1:n.haloVisible,exposed:r?!1:n.exposed,rite:r?null:n.rite},dealt:t,killed:r}}function ou(n,e){if(!n.alive||n.phase!=="rite")return{boss:n,broken:!1,dealt:0,killed:!1};if(!(n.rite==="listing"&&e.channel==="LIVE"&&e.weak&&!e.halo||n.rite==="index"&&e.channel==="STATIC"&&e.halo||n.rite==="gate"&&e.channel==="DEAD_AIR"&&e.crossed))return{boss:n,broken:!1,dealt:0,killed:!1};const i=bn.breakDamage,r=n.hp-i;if(r<=0)return{boss:{...n,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:i,killed:!0};const a={...n,hp:r,hurt:.28,broken:(n.broken||0)+1};return Sh(a),{boss:a,broken:!0,dealt:i,killed:!1}}function Sv(n,e,t,i,r){if(!i||!i.alive||!i.hittable)return null;const s=[{y:fv,r:dv,weak:!1,halo:!1},{y:pv,r:mv,weak:!0,halo:!1}];i.haloVisible&&r==="STATIC"&&s.push({y:gv,r:_v,weak:!1,halo:!0});let a=null,o=t;for(const c of s){const l=Al(n.x,n.y,n.z,e.x,e.y,e.z,i.x,(i.y||0)+c.y,i.z,c.r);l==null||l<=.02||l>=o||(o=l,a={kind:"directory",id:i.id,t:l,weak:c.weak,halo:c.halo,x:n.x+e.x*l,y:n.y+e.y*l,z:n.z+e.z*l})}return a}const nn={maxDist:16,cone:.3,stun:4.5,slow:4.2,cooldown:16,retune:4.5,retuneMult:1.45,radius:16,sprinklerRadius:12,slam:2.2,slamRadius:14,slamKnock:1.25,reveal:5.5,mark:5.5};function Ev({origin:n,dir:e,point:t,maxDist:i,cone:r,blocked:s}){const a=t.x-n.x,o=t.y-n.y,c=t.z-n.z,l=Math.hypot(a,o,c);if(!(l>.05)||l>i||s)return{aimed:!1,dist:l};const u=(a*e.x+o*e.y+c*e.z)/l;return{aimed:u>=Math.cos(r),dist:l,dot:u}}function wv(n,e,t=nn.cooldown){const i=n.cooldownUntil||0;if(i>e)return{ok:!1,reason:"cooldown",cooldownUntil:i};const r=t>0?t:nn.cooldown;return{ok:!0,cooldownUntil:e+r}}function bv(n,e,t,i){return n.map(r=>!r.alive||r.room!=="chapel"||Math.hypot(r.x-e.x,r.z-e.z)>t?r:{...r,stun:Math.max(r.stun||0,i),windup:0})}function Tv(n,e,t,i){return n.map(r=>!r.alive||r.room!=="service"||Math.hypot(r.x-e.x,r.z-e.z)>t?r:{...r,slow:Math.max(r.slow||0,i),windup:0})}function Av(n,e,t,i,r=nn.slamKnock){return n.map(s=>{if(!s.alive||s.room!=="service")return s;const a=s.x-e.x,o=s.z-e.z,c=Math.hypot(a,o);if(c>t)return s;const l=c>.05?a/c:1,u=c>.05?o/c:0;let h=s.x+l*r,d=s.z+u*r;const f=sh[s.id];return f&&(h=Math.min(f.maxX-.2,Math.max(f.minX+.2,h)),d=Math.min(f.maxZ-.2,Math.max(f.minZ+.2,d))),{...s,x:h,z:d,stun:Math.max(s.stun||0,i),windup:0}})}function Rv(n,e,t,i){return n.map(r=>!r.alive||r.room!==e?r:{...r,reveal:r.cloaked?Math.max(r.reveal||0,t):r.reveal||0,marked:Math.max(r.marked||0,i)})}function Cv(n,e){const t=new dt;t.position.set(.18,-.28,-.48),n.add(t);const i=new Yt({map:e.leather,normalMap:e.leatherNormal,roughnessMap:e.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});i.normalScale.set(.7,.7);const r=new Yt({map:e.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),s=new Yt({map:e.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new Yt({map:e.wood,normalMap:e.woodNormal,roughnessMap:e.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new Yt({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),c=new Yt({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),l=new at({color:6813439}),u=new ne(new Le(.16,.055,.38),a);u.position.set(.02,-.02,.02);const h=new ne(new Le(.11,.02,.3),o);h.position.set(.02,.012,.03);const d=new ne(new Le(.07,.03,.04),s);d.position.set(.02,-.005,-.16),t.add(u,h,d);for(let re=0;re<2;re++)for(let oe=0;oe<4;oe++){const ve=new ne(new Le(.028,.012,.03),c);ve.position.set(-.012+re*.064,.026,.1-oe*.055),t.add(ve)}const f=new ne(new Le(.055,.028,.02),l);f.position.set(.02,-.004,-.2),t.add(f);const m=new ne(new lt(.006,.006,.22,6),s);m.position.set(.07,.02,-.12),m.rotation.z=-.4,m.rotation.x=.5;const _=new ne(new Rt(.012,8,6),s);_.position.set(.11,.1,-.2);const g=new dt;for(const re of[-1,1]){const oe=new ne(new lt(.007,.005,.16,6),s);oe.position.set(re*.045,.03,-.16),oe.rotation.x=1.15,oe.rotation.z=re*-.55;const ve=new ne(new Rt(.012,8,6),s);ve.position.set(re*.09,.07,-.22),g.add(oe,ve)}g.visible=!1;const p=new Yt({color:12963542,roughness:.22,metalness:.7,envMapIntensity:.45}),w=new ne(new Le(.012,.028,.46),p);w.position.set(.02,-.01,-.38);const b=new ne(new Le(.004,.008,.2),new at({color:14015974}));b.position.set(.02,-.01,-.58);const S=new dt;S.add(w,b),S.visible=!1;const k=new Rt(.045,12,8);k.scale(1.2,.62,1.35);const D=new ne(k,a);D.position.set(.02,-.02,-.15);const P=new ne(k,a);P.position.set(.02,-.02,.19);const F=new ne(new Le(.018,.04,.2),o);F.position.set(-.068,-.03,.04);const E=F.clone();E.position.x=.108,t.add(m,_,g,S,D,P,F,E);for(let re=0;re<4;re++){const oe=new ne(new lt(.006,.006,.012,6),o);oe.rotation.x=Math.PI/2,oe.position.set(-.02+re%2*.028,-.01,-.08-Math.floor(re/2)*.02),t.add(oe)}const y=new at({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:aa,side:qt}),T=new dt;T.position.set(.02,-.004,-.24);const R=new ne(new Tt(.22,.05),y),L=new ne(new Tt(.22,.05),y);L.rotation.z=Math.PI/2;const Y=new ne(new Tt(.08,.08),y);T.add(R,L,Y),T.visible=!1,t.add(T);const G=new Ir(6813439,2.4,1.8,2);G.position.copy(f.position),t.add(G);const Z=[];function ie(re,oe,ve){const Pe=new dt,ke=new Rt(.046,14,10);ke.scale(1.05,.48,1.35);const _t=new ne(ke,i),qe=new ne(new Le(.11,.07,.16),r);qe.position.set(0,.01,.12);const $e=new ne(new Rt(.02,8,6),i);$e.scale.set(2.1,.7,.8),$e.position.set(0,.02,-.04),Pe.add(_t,qe,$e);const V=[.03,.038,.036,.028];for(let et=0;et<4;et++){const we=-.034+et*.022,A=V[et],M=new dt;M.position.set(we,.016,-.052);const q=new ne(new lt(.0075,.0095,A,8),i);q.rotation.x=Math.PI/2,q.position.set(0,0,-A*.42);const ae=new dt;ae.position.set(0,-.002,-A*.78),ae.rotation.x=.22;const le=new ne(new lt(.0055,.0075,A*.82,8),i);le.rotation.x=Math.PI/2,le.position.set(0,0,-A*.36),ae.add(le),M.add(q,ae),Pe.add(M),Z.push({knuckle:M,tip:ae,tipRest:.22})}const pt=new dt;pt.position.set(ve>0?.042:-.042,.018,-.02),pt.rotation.z=ve>0?-.7:.7;const We=new ne(new lt(.0085,.011,.034,8),i);We.rotation.x=.35,We.position.set(0,.01,-.012);const He=new dt;He.position.set(0,.006,-.028),He.rotation.x=.2;const K=new ne(new lt(.0065,.0085,.026,8),i);K.rotation.x=.45,K.position.set(0,0,-.014),He.add(K),pt.add(We,He),Pe.add(pt),Z.push({knuckle:pt,tip:He,tipRest:.2}),Pe.position.set(re,-.05,oe),Pe.rotation.y=ve,Pe.rotation.z=ve>0?.22:-.18,t.add(Pe)}ie(-.07,.06,.5),ie(.12,.08,-.62),t.traverse(re=>{var ve;re.castShadow=!1,re.receiveShadow=!1,re.frustumCulled=!1;const oe=re.geometry;!re.isMesh||!((ve=re.material)!=null&&ve.normalMap)||!(oe!=null&&oe.index)||oe.attributes.tangent||oe.attributes.uv&&oe.attributes.normal&&oe.computeTangents()});let x=0,I=0,O=0,H=0,j=0,Me="LIVE",Q=!1;const he={x:.18,y:-.28,z:-.48};return{setChannel(re){Q&&re!==Me&&(I=.09,O=Math.max(O,.45)),Q=!0,Me=re,m.visible=re==="LIVE",_.visible=re==="LIVE",g.visible=re==="STATIC",S.visible=re==="DEAD_AIR",re==="LIVE"?(l.color.setHex(6813439),G.color.setHex(6813439),G.intensity=2.6):re==="STATIC"?(l.color.setHex(15921906),G.color.setHex(16777215),G.intensity=.8):(l.color.setHex(2761758),G.intensity=0)},fire(re){if(re==="dry"||re==="none"){I=.14,x=.02,H=0;return}x=re==="spread"?.12:re==="phase"?.08:.055,O=re==="spread"?.85:re==="phase"?.5:.62,H=.045,y.color.set(re==="spread"?16053492:re==="phase"?14015974:13040639),T.scale.setScalar(re==="spread"?1.35:re==="phase"?.7:1),re==="phase"?T.position.z=-.62:T.position.z=-.24},setVisible(re){t.visible=re},update(re,oe,ve={}){const Pe=oe>.35;j+=re*(Pe?7.2+Math.min(oe,9)*.28:1.5);const ke=Pe?.004+Math.min(oe,9)*.00115:.0016,_t=ve.strafe||0;x+=(0-x)*(1-Math.exp(-12*re)),I+=(0-I)*(1-Math.exp(-14*re)),O+=(0-O)*(1-Math.exp(-7*re));const qe=Math.sin(j*1.3)*.05;for(let $e=0;$e<Z.length;$e++){const V=Z[$e],pt=qe+O*(.42+$e%5*.05);V.knuckle.rotation.x=pt,V.tip.rotation.x=V.tipRest+pt*1.15}if(H-=re,T.visible=H>0,T.visible&&(T.rotation.z=H*18),Me==="STATIC"){const $e=.45+Math.random()*.55;l.color.setRGB($e,$e,$e)}t.position.x=he.x+Math.cos(j)*ke*.7-_t*.01,t.position.y=he.y+Math.sin(j*2)*ke+(Pe?0:Math.sin(j)*.003),t.position.z=he.z+x*.62,t.rotation.x=x*1.7+I*1.5+Math.sin(j*2)*ke*2.2,t.rotation.y=.06-x*.25,t.rotation.z=-_t*.035+Math.sin(j)*ke*1.4}}}function Qt(n,e,t,i=1,r=1){const s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);const a=new bi(s);return a.colorSpace=rn,a.wrapS=kn,a.wrapT=kn,a.repeat.set(i,r),a.anisotropy=8,a.magFilter=_n,a.minFilter=Nn,a}function Mr(n,e,t,i,r,s){n.fillStyle=r;for(let a=0;a<i;a++){const o=a*97%e,c=a*53%t;n.fillRect(o,c,s,s)}}function Pv(n,e=1,t=1){const i=new bi(n);return i.colorSpace=jn,i.wrapS=kn,i.wrapT=kn,i.repeat.set(e,t),i.anisotropy=4,i.magFilter=_n,i.minFilter=Nn,i}function Eh(n,e,t,i=1,r=1){const s=document.createElement("canvas");s.width=n,s.height=e;const a=s.getContext("2d"),o=a.createImageData(n,e);for(let c=0;c<e;c++)for(let l=0;l<n;l++){const[u,h,d]=t(l,c,n,e),f=(c*n+l)*4;o.data[f]=u,o.data[f+1]=h,o.data[f+2]=d,o.data[f+3]=255}return a.putImageData(o,0,0),Pv(s,i,r)}function zi(n,e,t,i,r=1,s=1){const a=new Float32Array(n*e);for(let o=0;o<e;o++)for(let c=0;c<n;c++)a[o*n+c]=t(c,o,n,e);return Eh(n,e,(o,c)=>{const l=a[c*n+(o+n-1)%n],u=a[c*n+(o+1)%n],h=a[(c+e-1)%e*n+o],d=a[(c+1)%e*n+o];let f=(l-u)*i,m=(h-d)*i;const _=1,g=Math.hypot(f,m,_)||1;return[f/g*127.5+127.5,m/g*127.5+127.5,_/g*127.5+127.5]},r,s)}function Bi(n,e,t,i=1,r=1){return Eh(n,e,(s,a)=>{const o=Math.max(0,Math.min(1,t(s,a,n,e)))*255;return[o,o,o]},i,r)}function Dv(){const n=Qt(256,256,(x,I,O)=>{x.fillStyle="#5c564c",x.fillRect(0,0,I,O);const H=64;for(let j=0;j<O;j+=H)for(let Me=0;Me<I;Me+=H){const Q=(Me*3+j*7)%17/17,he=Q>.66?"#6a6358":Q>.33?"#574f46":"#4e4840";x.fillStyle=he,x.fillRect(Me+2,j+2,H-4,H-4),x.fillStyle="rgba(20,16,12,0.35)",x.fillRect(Me,j,H,2),x.fillRect(Me,j,2,H)}x.fillStyle="rgba(30,22,14,0.28)",x.beginPath(),x.ellipse(48,180,28,10,.4,0,Math.PI*2),x.fill(),x.beginPath(),x.ellipse(190,60,22,8,-.5,0,Math.PI*2),x.fill(),x.fillStyle="rgba(90,70,40,0.18)",x.fillRect(8,8,18,6)},8,6),e=Qt(256,256,(x,I,O)=>{x.fillStyle="#c8bfb2",x.fillRect(0,0,I,O),x.fillStyle="#b3a898";for(let H=0;H<I;H+=64)x.fillRect(H,0,3,O);x.fillStyle="#9c9184",x.fillRect(0,168,I,10),x.fillStyle="#6e655c",x.fillRect(0,214,I,42),x.fillStyle="#8a8176",x.fillRect(0,210,I,6),x.fillStyle="rgba(70,50,30,0.12)";for(let H=0;H<20;H++)x.fillRect(H*41%I,20+H*17%120,16,5);Mr(x,I,O,30,"rgba(255,255,255,0.04)",2)},3,2),t=Qt(128,128,(x,I,O)=>{x.fillStyle="#8d8478",x.fillRect(0,0,I,O),x.fillStyle="#756c62";for(let H=0;H<I;H+=16)x.fillRect(H,0,2,O);x.fillStyle="rgba(40,30,20,0.2)",x.fillRect(0,O-18,I,18),x.fillStyle="#a39888",x.fillRect(0,8,I,4)},2,2),i=Qt(128,128,(x,I,O)=>{x.fillStyle="#b7b1a6",x.fillRect(0,0,I,O),x.strokeStyle="#8e877c",x.lineWidth=3,x.strokeRect(1,1,I-2,O-2),x.fillStyle="#c9c3b6",x.fillRect(8,8,I-16,O-16),x.fillStyle="rgba(80,70,50,0.15)",x.fillRect(18,40,30,8),x.fillRect(70,80,22,6)},6,6),r=Qt(128,128,(x,I,O)=>{x.fillStyle="#5c3a22",x.fillRect(0,0,I,O);for(let H=0;H<O;H+=3){const j=70+H*17%50;x.strokeStyle=`rgb(${j+36}, ${j-4}, ${j-32})`,x.beginPath(),x.moveTo(0,H),x.quadraticCurveTo(I*.5,H+(H%9-4),I,H),x.stroke()}x.fillStyle="rgba(30,16,6,0.35)",x.fillRect(18,0,4,O),x.fillRect(78,0,3,O),x.beginPath(),x.ellipse(46,40,8,14,.2,0,Math.PI*2),x.fill(),x.beginPath(),x.ellipse(96,90,6,10,-.3,0,Math.PI*2),x.fill()}),s=Qt(128,128,(x,I,O)=>{x.fillStyle="#16130f",x.fillRect(0,0,I,O),x.fillStyle="#e2a23a";const H=18;for(let j=-8;j<16;j++)x.beginPath(),x.moveTo(j*H,0),x.lineTo(j*H+H*.55,0),x.lineTo(j*H+H*.55-O,O),x.lineTo(j*H-O,O),x.fill()}),a=Qt(128,64,(x,I,O)=>{for(let H=0;H<O;H++)for(let j=0;j<I;j++){const Q=140+(j*17+H*13)%40*2;x.fillStyle=`rgb(${Q},${Q},${Q-10})`,x.fillRect(j,H,1,1)}x.fillStyle="rgba(0,0,0,0.45)";for(let H=0;H<O;H+=3)x.fillRect(0,H,I,1)}),o=Qt(128,128,(x,I,O)=>{x.fillStyle="#efe8de",x.fillRect(0,0,I,O),x.fillStyle="#fbf7f1",x.fillRect(10,10,I-20,O-20),x.strokeStyle="rgba(40,34,28,0.45)",x.lineWidth=3,x.strokeRect(8,8,I-16,O-16),x.strokeStyle="rgba(40,34,28,0.28)",x.beginPath(),x.moveTo(18,O/2),x.lineTo(I-18,O/2),x.moveTo(I/2,18),x.lineTo(I/2,O-18),x.stroke(),Mr(x,I,O,24,"rgba(60,48,30,0.16)",2)}),c=Qt(128,128,(x,I,O)=>{x.fillStyle="#ddd6cb",x.fillRect(0,0,I,O),x.fillStyle="#cbbba6",x.fillRect(0,O*.48,I,O*.52);for(let H=0;H<10;H++){const j=I*(.34+H*13%32/100);x.fillStyle=H%2?"rgba(110,82,52,0.45)":"rgba(86,64,40,0.32)",x.fillRect(j,O*.4,2+H%3,O*.58)}x.fillStyle="rgba(72,52,32,0.5)",x.fillRect(0,O-14,I,14),Mr(x,I,O,36,"rgba(70,54,32,0.28)",2)}),l=Qt(128,128,(x,I,O)=>{x.fillStyle="#e7e0d6",x.fillRect(0,0,I,O),x.fillStyle="#c9b49a",x.fillRect(0,O*.28,I,O*.72);for(let H=0;H<16;H++){const j=18+H*29%92;x.fillStyle=H%2?"rgba(96,70,42,0.72)":"rgba(62,46,30,0.55)",x.fillRect(j,28+H%5*6,2+H%4,O-24)}x.fillStyle="rgba(48,34,20,0.55)",x.fillRect(0,O-20,I,20),x.fillStyle="rgba(120,96,70,0.35)",x.beginPath(),x.ellipse(I*.62,O*.72,16,8,.4,0,Math.PI*2),x.fill(),Mr(x,I,O,28,"rgba(40,28,16,0.4)",2)}),u=Qt(64,64,(x,I,O)=>{x.fillStyle="#141414",x.fillRect(0,0,I,O),x.fillStyle="#2a2a2a";for(let H=-8;H<16;H++)x.fillRect(H*8,0,2,O);x.fillStyle="#3a3a3a",x.fillRect(0,4,I,3),x.fillStyle="#0a0a0a",x.fillRect(0,O-8,I,8)}),h=Qt(64,64,(x,I,O)=>{x.fillStyle="#c6a15a",x.fillRect(0,0,I,O),x.fillStyle="#e6c97a",x.fillRect(0,2,I,6),x.fillStyle="#8a6a32",x.fillRect(0,O-8,I,8),x.strokeStyle="rgba(60,40,10,0.45)",x.beginPath(),x.moveTo(8,0),x.lineTo(18,O),x.moveTo(40,0),x.lineTo(30,O),x.stroke()}),d=Qt(128,128,(x,I,O)=>{x.fillStyle="#f3efe6",x.fillRect(0,0,I,O);for(let H=8;H<I;H+=14)x.strokeStyle=H%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",x.beginPath(),x.moveTo(H,0),x.quadraticCurveTo(H+4,O/2,H-2,O),x.stroke();x.fillStyle="rgba(90,70,40,0.08)",x.fillRect(0,O-20,I,20)}),f=Qt(128,128,(x,I,O)=>{x.fillStyle="#3a2418",x.fillRect(0,0,I,O),Mr(x,I,O,80,"rgba(20,10,6,0.45)",2),Mr(x,I,O,40,"rgba(120,80,50,0.2)",1),x.strokeStyle="rgba(10,6,4,0.7)",x.lineWidth=3,x.beginPath(),x.moveTo(0,20),x.lineTo(I,28),x.stroke()}),m=Qt(128,128,(x,I,O)=>{x.fillStyle="#241810",x.fillRect(0,0,I,O),x.fillStyle="#1a110c";for(let H=0;H<I;H+=10)x.fillRect(H,0,3,O);x.fillStyle="rgba(80,50,30,0.15)",x.fillRect(0,0,I,8)}),_=Qt(256,256,(x,I,O)=>{x.fillStyle="#3e3832",x.fillRect(0,0,I,O);const H=64;for(let j=0;j<O;j+=H)for(let Me=0;Me<I;Me+=H)x.fillStyle=(Me+j)%128===0?"#4a433b":"#35302b",x.fillRect(Me+3,j+3,H-6,H-6);x.strokeStyle="rgba(166,132,70,0.35)",x.lineWidth=2;for(let j=0;j<=I;j+=H)x.beginPath(),x.moveTo(j,0),x.lineTo(j,O),x.stroke(),x.beginPath(),x.moveTo(0,j),x.lineTo(I,j),x.stroke()},4,4),g=Qt(64,64,(x,I,O)=>{x.fillStyle="#8d9298",x.fillRect(0,0,I,O),x.fillStyle="rgba(255,255,255,0.18)";for(let H=0;H<O;H+=3)x.fillRect(0,H,I,1);x.fillStyle="#5e646a",x.fillRect(0,0,I,4)}),p=zi(128,128,(x,I,O,H)=>{const j=x/O,Me=I/H,Q=Math.min(j,1-j,Me,1-Me),he=Math.min(1,Q*10),re=Math.abs(j-.5)<.012||Math.abs(Me-.5)<.012?.2:1;return he*re},3.2),w=Bi(128,128,(x,I,O,H)=>{const j=x/O,Me=I/H,Q=Math.min(j,1-j,Me,1-Me);return .28+(1-Math.min(1,Q*7))*.42}),b=zi(64,64,(x,I,O,H)=>{const j=Math.sin(x*.85+I*.2)*.08,Me=I<5?.25:I>H-6?-.2:0;return .55+j+Me},2.4),S=Bi(64,64,(x,I)=>.22+(Math.sin(x*.7)*.5+.5)*.12+(I%9===0?.08:0)),k=zi(128,128,(x,I,O)=>{const H=Math.sin(x/O*Math.PI*5)*.2,j=Math.sin(x*.85)*.04+Math.sin(I*1.15)*.03,Me=x%8===0?-.05:0;return .55+H+j+Me},3.6),D=Bi(128,128,(x,I,O,H)=>.78+I/H*.1+(x%8===0?.06:0)),P=zi(256,256,(x,I)=>{const H=x%64,j=I%64;return Math.min(H,j,63-H,63-j)<3?.05:.72+Math.sin(x*.17)*Math.sin(I*.13)*.06},4.5,8,6),F=Bi(256,256,(x,I)=>Math.min(x%64,I%64,63-x%64,63-I%64)<3?.95:.78,8,6),E=zi(256,256,(x,I)=>Math.min(x%64,I%64,63-x%64,63-I%64)<4?0:.66,5,4,4),y=Bi(256,256,(x,I)=>Math.min(x%64,I%64)<4?.96:.84,4,4),T=zi(128,128,(x,I)=>{const O=Math.sin(I*.42+Math.sin(x*.07)*2.4)*.14,H=x%22===0?-.08:0;return .5+O+H},3.1),R=Bi(128,128,(x,I,O,H)=>.48+(Math.sin(I*.35)*.5+.5)*.22+I/H*.08),L=zi(128,128,(x,I,O,H)=>{const j=Math.sin(x*1.6)*Math.sin(I*1.25)*.05,Me=Math.abs(I/H-.22)<.018?-.22:0;return .55+j+Me},2.6),Y=Bi(128,128,(x,I,O,H)=>.62+(Math.sin(x*.4+I*.2)*.5+.5)*.2+I/H*.08),G=Qt(256,64,(x,I,O)=>{x.fillStyle="#3c362e",x.fillRect(0,0,I,O),x.fillStyle="#2e2924";for(let H=0;H<I;H+=32)x.fillRect(H,0,2,O);x.strokeStyle="#e6c56a",x.lineWidth=3,x.strokeRect(6,8,I-12,O-16),x.lineWidth=2,x.beginPath(),x.ellipse(I/2,O/2,30,18,0,0,Math.PI*2),x.stroke(),x.beginPath(),x.ellipse(I/2,O/2,16,9,0,0,Math.PI*2),x.stroke(),x.fillStyle="#f0d48a",x.beginPath(),x.arc(I/2,O/2,3.5,0,Math.PI*2),x.fill()}),Z=Iv(),ie=Lv();return{floor:n,wall:e,ceiling:i,wood:r,hazard:s,snow:a,pearl:o,pearlWorn:c,shinGrime:l,joint:u,gold:h,cloth:d,leather:f,trench:m,nave:_,naveLight:Z,courtLight:ie,trim:t,brushed:g,pearlNormal:p,pearlRough:w,goldNormal:b,goldRough:S,clothNormal:k,clothRough:D,floorNormal:P,floorRough:F,naveNormal:E,naveRough:y,woodNormal:T,woodRough:R,leatherNormal:L,leatherRough:Y,seal:G}}function Iv(){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d");i.fillStyle="rgb(32,27,22)",i.fillRect(0,0,256,256);const r=(l,u)=>{const h=(l+7.6)/15.2,d=(-21.55-u)/13.2+.5;return[h*256,(1-d)*256]};i.fillStyle="rgb(12,10,8)";for(const[l,u]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]]){const[h,d]=r(l,u);i.fillRect(h-26,d-8,52,16)}const[s,a]=r(0,-27.55);i.fillRect(s-28,a-10,56,18),i.globalCompositeOperation="lighter";const o=(l,u,h,d)=>{const[f,m]=r(l,u),_=h*256,g=i.createRadialGradient(f,m,2,f,m,_);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=g,i.beginPath(),i.arc(f,m,_,0,Math.PI*2),i.fill()};o(-4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(-4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(-1.35,-27.15,.2,"rgba(255,186,90,1)"),o(1.35,-27.15,.2,"rgba(255,186,90,1)"),o(0,-27.5,.28,"rgba(220,160,70,0.55)"),i.fillStyle="rgba(255,214,170,0.16)",i.fillRect(256*.4,0,256*.2,256),i.globalCompositeOperation="source-over";const c=new bi(t);return c.colorSpace=wi,c.magFilter=_n,c.minFilter=Nn,c.anisotropy=4,c}function wh(n,e){return[(n+16.05)/32.1,(-.25-e)/28.6+.5]}function Lv(){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d");i.fillStyle="rgb(18,16,14)",i.fillRect(0,0,256,256);const r=(c,l)=>{const[u,h]=wh(c,l);return[u*256,(1-h)*256]},s=(c,l,u,h)=>{const[d,f]=r(c-u/2,l-h/2),[m,_]=r(c+u/2,l+h/2),g=Math.min(d,m),p=Math.min(f,_);i.fillRect(g,p,Math.abs(m-d),Math.abs(_-f))};i.fillStyle="rgb(8,7,6)",s(0,-12.2,32,4.2),s(0,-2.2,4.6,.7),s(-1.75,2.05,1.8,.7),s(1.75,2.05,1.8,.7),s(-2.25,-.05,.7,3.6),s(2.25,-.05,.7,3.6);for(const[c,l]of[[-8,-6],[8,-6],[-8,6],[8,5.2]]){const[u,h]=r(c,l);i.beginPath(),i.arc(u,h,7,0,Math.PI*2),i.fill()}i.globalCompositeOperation="lighter";const a=(c,l,u,h)=>{const[d,f]=r(c,l),m=u*256,_=i.createRadialGradient(d,f,2,d,f,m);_.addColorStop(0,h),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.beginPath(),i.arc(d,f,m,0,Math.PI*2),i.fill()};a(0,1.2,.26,"rgba(255,244,220,0.62)"),a(0,1.2,.12,"rgba(255,250,240,0.45)"),a(0,-.05,.07,"rgba(198,214,216,0.4)"),a(-10,8.2,.09,"rgba(255,176,90,0.55)"),a(9.2,8.4,.08,"rgba(255,176,90,0.5)"),a(12.8,-5,.09,"rgba(255,168,70,0.6)"),a(-6,-9.2,.07,"rgba(255,196,130,0.28)"),a(4,-9.2,.07,"rgba(255,196,130,0.28)"),i.globalCompositeOperation="source-over";const o=new bi(t);return o.colorSpace=wi,o.magFilter=_n,o.minFilter=Nn,o.anisotropy=4,o.wrapS=$n,o.wrapT=$n,o}function lu(n,e,t="#16130f",i="#f4efe6"){const r=document.createElement("canvas");r.width=512,r.height=e?160:128;const s=r.getContext("2d");s.fillStyle=t,s.fillRect(0,0,r.width,r.height),s.strokeStyle="#e2a23a",s.lineWidth=8,s.strokeRect(8,8,r.width-16,r.height-16),s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.font="700 58px Trebuchet MS, sans-serif",s.fillText(n,r.width/2,e?68:r.height/2+2),e&&(s.font="600 28px Trebuchet MS, sans-serif",s.fillStyle="#e2a23a",s.fillText(e,r.width/2,118));const a=new bi(r);return a.colorSpace=rn,a.anisotropy=4,a}function bt(n){return new Yt({envMapIntensity:.32,...n})}function On(n){var e,t;return n!=null&&n.index&&((e=n.attributes)!=null&&e.uv)&&((t=n.attributes)!=null&&t.normal)&&!n.attributes.tangent&&n.computeTangents(),n}function yr(n,e,t){const i=n.clone();return i.repeat.set(e,t),i.needsUpdate=!0,i}function Uv(n){const e=Dv(),t={floor:bt({map:e.floor,normalMap:e.floorNormal,roughnessMap:e.floorRough,roughness:1,metalness:.03}),wall:bt({map:e.wall,roughness:.88,metalness:.03}),ceiling:bt({map:e.ceiling,roughness:.96,metalness:0}),trim:bt({map:e.trim,roughness:.74,metalness:.08}),metal:bt({color:7172984,roughness:.38,metalness:.62}),wood:bt({map:yr(e.wood,2,2),normalMap:yr(e.woodNormal,2,2),roughnessMap:yr(e.woodRough,2,2),roughness:1,metalness:.04}),runner:bt({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:bt({color:1315344,roughness:.9}),brass:bt({map:yr(e.gold,2,2),normalMap:yr(e.goldNormal,2,2),roughnessMap:yr(e.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:bt({color:5065016,roughness:.92}),glass:bt({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:bt({map:e.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};t.hazard.side=qt,t.floor.normalScale.set(.7,.7),t.wood.normalScale.set(.85,.85),t.wood.side=qt,t.brass.normalScale.set(.4,.4);const i=new Map;function r(U,ue,_e,Ee,Oe,ut,wt){const Ut=new Le(Oe,ut,wt);Ut.translate(ue,_e,Ee),i.has(U)||i.set(U,[]),i.get(U).push(Ut)}const s=[],a={radio:null,service:null,directory:null};let o=null,c=null;const l=bt({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});l.side=qt;const u=bt({color:1709068,roughness:.38,metalness:.22,transparent:!0,opacity:.94,emissive:12876322,emissiveIntensity:.45});u.side=qt;const h=new Set(["pew-1","pew-2","pew-3","pew-4","altar","fountain-n","fountain-s-l","fountain-s-r","fountain-w","fountain-e"]);function d(U,ue,_e){const Ee=new dt,Oe=new ne(new Le(U.w*.92,U.h*.98,U.d*.62),bt({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),ut=bt({color:14012098,roughness:.66,metalness:.05});for(const kt of[-U.h*.18,U.h*.16]){const mn=new ne(new Le(U.w*.62,U.h*.28,.045),ut);mn.position.set(0,kt,U.d*.36),mn.castShadow=!0,Ee.add(mn)}const wt=new ne(On(new Le(U.w,.16,U.d*.8)),t.brass);wt.position.y=U.h*.42;const Ut=new ne(On(new Le(.14,U.h*.72,U.d*.78)),t.brass),vt=new ne(new Tt(1.7,.5),new at({map:lu(ue,_e,"#1c140c","#f0d48a")}));return vt.position.set(0,.35,U.d*.42),Ee.add(Oe,wt,Ut,vt),Ee.position.set(U.x,U.y,U.z),n.add(Ee),{group:Ee,lift:0,goal:0,baseY:U.y}}for(const U of ah){if(U.veil){o=new ne(new Le(U.w,U.h,U.d),l),o.position.set(U.x,U.y,U.z),o.visible=!1,n.add(o);continue}if(U.directoryVeil){c=new ne(new Le(U.w,U.h,U.d),u),c.position.set(U.x,U.y,U.z),c.visible=!1,n.add(c);continue}if(U.door||U.serviceDoor||U.directoryDoor){const ue=U.directoryDoor?["DIRECTORY","WING"]:U.serviceDoor?["SERVICE","WING"]:["RADIO","WING"],_e=d(U,ue[0],ue[1]);U.door?a.radio=_e:U.serviceDoor?a.service=_e:a.directory=_e;continue}if(!h.has(U.id)){if(U.phaseGate){const ue=new ne(new Le(U.w,U.h,U.d),t.hazard);ue.position.set(U.x,U.y,U.z),ue.castShadow=!0,ue.receiveShadow=!0,n.add(ue),s.push(ue);continue}r(U.mat,U.x,U.y,U.z,U.w,U.h,U.d)}}r("runner",0,.02,-1.2,2.6,.02,18),r("runner",0,.025,-35.2,1.8,.02,10),r("runner",0,.03,-47.1,2.2,.02,8.6),r("dark",-7.4,1.3,-13.15,6.4,2.6,.4),r("dark",-5.2,1.3,-13.15,2.4,2.6,.4),r("dark",5.4,1.3,-13.15,2.4,2.6,.4),r("dark",8.6,1.3,-13.15,6.4,2.6,.4),r("runner",0,.025,-21.4,1.5,.02,12),r("brass",0,2.55,-2.15,.12,3.5,.12),r("brass",0,4.15,-2.15,1.35,.08,1.35),r("plant",-3.3,.28,-2.5,.7,.45,.7),r("plant",3.35,.28,1.4,.7,.45,.7),r("plant",-3.2,.55,2.4,.45,.7,.45),r("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const U of[-12,-4,4,12])for(const ue of[-8,0,8])r("metal",U,6.85,ue,1.6,.08,.28);for(let U=-14;U<=14;U+=2.2)r("metal",U,4.55,-10.45,.06,.7,.06);r("metal",0,4.55,-10.45,28,.05,.05);for(const[U,ue]of i){const _e=ue.length===1?ue[0]:gh(ue);t[U].normalMap&&On(_e);const Ee=new ne(_e,t[U]);Ee.castShadow=U!=="floor"&&U!=="ceiling"&&U!=="runner",Ee.receiveShadow=!0,n.add(Ee)}const f=bt({map:e.floor,normalMap:e.floorNormal,roughnessMap:e.floorRough,roughness:1,metalness:.05});f.normalScale.set(.55,.55);const m=f.clone();m.lightMap=e.courtLight,m.lightMapIntensity=.48;const _=t.trim.clone();_.lightMap=e.courtLight,_.lightMapIntensity=.42;const g=t.brass.clone();g.lightMap=e.courtLight,g.lightMapIntensity=.28;const p=t.wall.clone();p.lightMap=e.courtLight,p.lightMapIntensity=.55,p.polygonOffset=!0,p.polygonOffsetFactor=-1,p.polygonOffsetUnits=-1;const w=t.floor.clone();w.lightMap=e.courtLight,w.lightMapIntensity=.64,w.polygonOffset=!0,w.polygonOffsetFactor=-1,w.polygonOffsetUnits=-1;const b=new X;function S(U){U.updateMatrixWorld(!0);const ue=U.geometry.attributes.position,_e=new Float32Array(ue.count*2);for(let Ee=0;Ee<ue.count;Ee++){b.fromBufferAttribute(ue,Ee).applyMatrix4(U.matrixWorld);const Oe=wh(b.x,b.z);_e[Ee*2]=Oe[0],_e[Ee*2+1]=Oe[1]}return U.geometry.setAttribute("uv2",new en(_e,2)),U}function k(U,ue,_e,Ee,Oe){ue.normalMap&&On(U);const ut=new ne(U,ue);return ut.position.set(_e,Ee,Oe),ut.castShadow=!0,ut.receiveShadow=!0,n.add(ut),ut}function D(U,ue,_e,Ee,Oe,ut){S(k(new Le(Ee,Oe*.78,ut*.92),m,U,ue-Oe*.08,_e)),S(k(new Le(Ee*1.04,Oe*.18,ut*1.08),_,U,ue+Oe*.4,_e))}D(0,.4,-2.2,4.5,.8,.5),D(-1.75,.4,2.05,1.7,.8,.5),D(1.75,.4,2.05,1.7,.8,.5),D(-2.25,.4,-.05,.5,.8,3.55),D(2.25,.4,-.05,.5,.8,3.55);const P=bt({map:e.trim,roughness:.55,metalness:.18,envMapIntensity:.45,lightMap:e.courtLight,lightMapIntensity:.5}),F=k(new ri([new Re(.15,.04),new Re(.7,.06),new Re(1.15,.1),new Re(1.38,.28),new Re(1.22,.4),new Re(1.05,.34)],32),P,0,.02,-.05);F.castShadow=!0,S(F);const E=new ne(new sn(1.28,.045,8,28),g);E.rotation.x=Math.PI/2,E.position.set(0,.36,-.05),E.castShadow=!0,n.add(E),S(E),S(k(new lt(.06,.09,.34,12),g,0,.22,-.05));const y=bt({color:1977392,roughness:.08,metalness:.62,envMapIntensity:.9,lightMap:e.courtLight,lightMapIntensity:.4}),T=new ne(new xi(1.05,28),y);T.rotation.x=-Math.PI/2,T.position.set(0,.16,-.05),T.receiveShadow=!0,n.add(T),S(T);const R=new ne(new Tt(32.1,28.6),w);R.rotation.x=-Math.PI/2,R.position.set(0,.016,-.25),R.receiveShadow=!0,R.castShadow=!1,n.add(R),S(R),R.geometry.attributes.tangent==null&&w.normalMap&&On(R.geometry);function L(U,ue,_e,Ee,Oe,ut,wt){const Ut=new ne(U,p);Ut.position.set(ue,_e,Ee),Ut.rotation.y=Oe,Ut.castShadow=!1,Ut.receiveShadow=!0,n.add(Ut),S(Ut);const vt=Ut.geometry.attributes.uv;for(let kt=0;kt<vt.count;kt++)vt.setXY(kt,vt.getX(kt)*ut,vt.getY(kt)*wt);return vt.needsUpdate=!0,Ut}L(new Tt(28.4,6.3),-15.95,3.25,-.25,Math.PI/2,6,2),L(new Tt(28.4,6.3),15.95,3.25,-.25,-Math.PI/2,6,2),L(new Tt(31.6,6.3),0,3.25,13.95,Math.PI,8,2),L(new Tt(14,6.3),-8.9,3.25,-14.05,0,4,2),L(new Tt(14,6.3),8.9,3.25,-14.05,0,4,2);const Y=new ne(new Tt(6.4,8.2),new at({color:16774114}));Y.rotation.x=Math.PI/2,Y.position.set(0,7.12,1.2),Y.castShadow=!1,Y.receiveShadow=!1,n.add(Y);const G=new ne(new lt(.55,.7,.12,12),t.brass);G.position.set(0,4.28,-2.15),G.rotation.x=.55,G.castShadow=!0,n.add(G);const Z=new ne(new Tt(1.15,.7),new at({color:16757066}));Z.position.set(10.7,1.85,-5.1),Z.rotation.y=-Math.PI/2,n.add(Z);const ie=new ne(new Tt(1.7,1.7),bt({map:e.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));ie.rotation.x=-Math.PI/2,ie.position.set(9.45,.03,0),ie.receiveShadow=!0,n.add(ie);const x=new ne(new Le(5.4,2.2,.06),t.glass);x.position.set(9.4,1.8,8.7),n.add(x);const I=new ne(new Le(.7,.45,.06),new at({map:e.snow}));I.position.set(9.2,1.25,8.72),n.add(I);const O=I.clone();O.position.x=10.15,n.add(O);const H=new ne(new Le(.08,.08,.08),new at({color:16757066}));H.position.set(10.55,1.55,8.7),n.add(H);function j(U,ue,_e,Ee,Oe,ut,wt,Ut,vt,kt){const mn=new ne(new Tt(ut,wt),new at({map:lu(U,ue,vt,kt),transparent:!1}));return mn.position.set(_e,Ee,Oe),mn.rotation.y=Ut,n.add(mn),mn}j("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),j("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),j("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),j("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),j("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),j("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),j("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),j("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),j("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),j("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),j("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),j("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),j("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a"),j("SERVICE","WING",0,3.35,-27.35,2.2,.55,0,"#1c140c","#f0d48a"),j("SPRINKLERS","HOLD E",7.55,2.35,-32.55,1.7,.42,-Math.PI/2,"#1c140c","#f0d48a"),j("DIRECTORY","LAST CHANNEL",0,3.55,-43.15,2.8,.64,0,"#1c140c","#f0d48a");const Me=new ne(new Tt(3.15,.34),bt({map:e.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));Me.receiveShadow=!0,Me.rotation.x=-Math.PI/2,Me.position.set(0,.045,as),n.add(Me);const Q=Yi[0],he=bt({map:e.gold,normalMap:e.goldNormal,roughnessMap:e.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),re=new dt,oe=new ne(On(new ri([new Re(.05,-.28),new Re(.09,-.08),new Re(.16,.08),new Re(.28,.24),new Re(.34,.32),new Re(.3,.36)],20)),he);oe.rotation.z=-Math.PI/2,oe.castShadow=!0;const ve=new ne(new xi(.26,16),bt({color:2761752,roughness:.45,metalness:.4}));ve.rotation.y=Math.PI/2,ve.position.x=.34;const Pe=new ne(On(new lt(.055,.07,.36,12)),t.brass);Pe.rotation.z=Math.PI/2,Pe.position.x=-.42;const ke=new ne(On(new Le(.06,.36,.28)),t.brass);ke.position.set(-.62,0,0),ke.castShadow=!0;const _t=new ne(On(new Le(.1,.08,.16)),t.brass);_t.position.set(-.62,-.2,0);const qe=new ne(new Rt(.07,12,10),new at({color:16757066}));qe.position.x=.28;const $e=new ne(new sn(.55,.03,8,24),new at({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));$e.rotation.y=Math.PI/2,re.add(oe,ve,Pe,ke,_t,qe,$e);for(const[U,ue]of[[-.05,.1],[.08,.16],[.2,.26]]){const _e=new ne(new sn(ue,.012,6,16),t.brass);_e.rotation.y=Math.PI/2,_e.position.x=U,_e.castShadow=!0,re.add(_e)}re.position.set(Q.x,Q.y,Q.z),n.add(re);const V=new Ir(16757082,7,5.5,2);V.position.set(Q.x+.4,Q.y,Q.z),n.add(V);const pt=Yi.find(U=>U.id==="sprinkler")||Yi[0],We=new dt,He=new ne(new lt(.055,.055,1.35,8),t.brass);He.rotation.z=Math.PI/2,He.castShadow=!1;const K=new ne(new lt(.11,.16,.16,10),t.brass);K.position.y=-.18,K.castShadow=!1;const et=new ne(new Rt(.065,10,8),new at({color:16757066}));et.position.y=-.32;const we=new ne(new fa(.5,1.15,10,1,!0),new at({color:15783050,transparent:!0,opacity:0,depthWrite:!1,side:qt}));we.position.y=-.95,We.add(He,K,et,we),We.position.set(pt.x,pt.y,pt.z),n.add(We);const A=Yi.find(U=>U.id==="security-shutter")||{x:-7.72,y:2.45,z:-33.05},M=new dt,q=t.brass,ae=new ne(new Le(.1,.08,1.72),q);ae.position.y=.86,ae.castShadow=!1;const le=new ne(new Le(.1,1.72,.08),q);le.position.set(0,0,-.82),le.castShadow=!1;const ee=new ne(new Le(.1,1.72,.08),q);ee.position.set(0,0,.82),ee.castShadow=!1;const ge=new ne(new Le(.05,1.48,1.5),bt({color:2366484,roughness:.42,metalness:.48,emissive:5913104,emissiveIntensity:.28}));ge.position.set(.04,.55,0),ge.castShadow=!1;const xe=new ne(new Rt(.055,8,6),new at({color:16757066}));xe.position.set(.1,.95,0),M.add(ae,le,ee,ge,xe),M.position.set(A.x,A.y,A.z),n.add(M),j("SHUTTER","HOLD E",A.x+.16,A.y+1.15,A.z,1.35,.4,Math.PI/2,"#1c140c","#f0d48a");const Te=[];for(const U of Yi.filter(ue=>ue.id==="security-camera")){const ue=new dt,_e=new ne(new Le(.28,.16,.2),t.brass);_e.castShadow=!1;const Ee=new ne(new Le(.1,.1,.24),t.dark);Ee.position.set(.1,.08,0),Ee.castShadow=!1;const Oe=new ne(new lt(.05,.07,.1,10),new at({color:16757066}));Oe.rotation.z=Math.PI/2,Oe.position.x=.18;const ut=new ne(new fa(.32,1.35,8,1,!0),new at({color:16757066,transparent:!0,opacity:0,depthWrite:!1,side:qt}));ut.rotation.z=-Math.PI/2,ut.position.x=.85,ue.add(_e,Ee,Oe,ut),ue.position.set(U.x,U.y,U.z),U.room==="court"&&(ue.rotation.y=-Math.PI/2),n.add(ue),Te.push({lens:Oe,beam:ut,x:U.x,z:U.z});const wt=U.y+.42;U.room==="court"?j("CAMERA","HOLD E",U.x,wt,U.z+.2,1.35,.38,0,"#1c140c","#f0d48a"):j("CAMERA","HOLD E",U.x+.2,wt,U.z,1.35,.38,Math.PI/2,"#1c140c","#f0d48a")}const it=bt({color:16052198,roughness:.42,metalness:.08}),fe=bt({color:1052172,roughness:.16,metalness:.62,emissive:1708552,emissiveIntensity:.16}),De=bt({color:13939034,roughness:.32,metalness:.74,emissive:9071144,emissiveIntensity:.22}),Xe=new at({color:16757066}),Ze=new Yt({color:15783050,emissive:13939034,emissiveIntensity:.85,roughness:.28,metalness:.64}),be=new dt,st=new ne(new Le(1.55,.36,1.15),it);st.position.y=.2,st.castShadow=!1;const Ve=new ne(new Le(1.05,1.65,.68),fe);Ve.position.y=1.22,Ve.castShadow=!1;const Ke=new ne(new Le(1.2,.12,.82),De);Ke.position.y=2.08,Ke.castShadow=!1;const N=new ne(new Tt(.68,.92),new at({color:1314314}));N.position.set(0,1.38,.35);const pe=new dt;for(let U=0;U<4;U++){const ue=new ne(new Tt(.46,.03),new at({color:16757066}));ue.position.set(0,1.62-U*.16,.36),pe.add(ue)}const $=new ne(new Le(.07,.72,.04),Xe);$.position.set(.4,1.4,.36),$.visible=!1;const ce=new ne(new sn(.78,.04,8,28),Ze);ce.position.y=2.95,ce.rotation.x=Math.PI/2,ce.visible=!1,be.add(st,Ve,Ke,N,pe,$,ce),be.position.set(qi.x,0,qi.z),n.add(be);const Ae=new Ir(16757082,22,14,2);Ae.position.set(qi.x,3.5,qi.z+.8),n.add(Ae);function ye(U,ue){const _e=new ne(new lt(.035,.05,.46,6),t.brass);_e.position.set(U,.28,ue);const Ee=new ne(new Rt(.045,6,6),new at({color:16757066}));Ee.position.set(U,.54,ue),n.add(_e,Ee)}ye(-4.9,-18.2),ye(4.9,-18.2),ye(-4.9,-20.45),ye(4.9,-20.45),ye(-1.35,-27.15),ye(1.35,-27.15);const Ye=new ne(new Tt(15.2,13.2),bt({map:e.nave,normalMap:e.naveNormal,roughnessMap:e.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));Ye.material.normalScale.set(.8,.8),Ye.material.lightMap=e.naveLight,Ye.material.lightMapIntensity=.72,On(Ye.geometry),Ye.geometry.setAttribute("uv2",Ye.geometry.attributes.uv.clone()),Ye.rotation.x=-Math.PI/2,Ye.position.set(0,.018,-21.55),Ye.receiveShadow=!0,n.add(Ye);const mt=t.wood.clone();mt.lightMap=e.naveLight,mt.lightMapIntensity=.7;const Nt=f.clone();Nt.lightMap=e.naveLight,Nt.lightMapIntensity=.66;const xt=t.brass.clone();xt.lightMap=e.naveLight,xt.lightMapIntensity=.45;const Ot=t.wall.clone();Ot.lightMap=e.naveLight,Ot.lightMapIntensity=.85,Ot.polygonOffset=!0,Ot.polygonOffsetFactor=-1,Ot.polygonOffsetUnits=-1;const jt=new X;function zt(U,ue,_e,Ee,Oe){const ut=U.clone(),wt=k(ut,ue,_e,Ee,Oe);wt.updateMatrixWorld(!0);const Ut=ut.attributes.position,vt=new Float32Array(Ut.count*2);for(let kt=0;kt<Ut.count;kt++)jt.fromBufferAttribute(Ut,kt).applyMatrix4(wt.matrixWorld),vt[kt*2]=(jt.x+7.6)/15.2,vt[kt*2+1]=(-21.55-jt.z)/13.2+.5;return ut.setAttribute("uv2",new en(vt,2)),wt}const Ti=zt(new Tt(14.2,6.2),Ot,-8.08,3.15,-21.75);Ti.rotation.y=Math.PI/2;const Tn=zt(new Tt(14.2,6.2),Ot,8.08,3.15,-21.75);Tn.rotation.y=-Math.PI/2;const ai=zt(new Tt(5.15,6.2),Ot,-5.15,3.15,-28.72),Ai=zt(new Tt(5.15,6.2),Ot,5.15,3.15,-28.72);for(const U of[Ti,Tn,ai,Ai]){U.castShadow=!1,U.updateMatrixWorld(!0);const ue=U.geometry.attributes.position,_e=U.geometry.attributes.uv2.array,Ee=U.geometry.attributes.uv;for(let Oe=0;Oe<ue.count;Oe++)jt.fromBufferAttribute(ue,Oe).applyMatrix4(U.matrixWorld),_e[Oe*2]=(jt.x+7.6)/15.2,_e[Oe*2+1]=(-21.55-jt.z)/13.2+.5,Ee.setXY(Oe,Ee.getX(Oe)*4,Ee.getY(Oe)*2);U.geometry.attributes.uv2.needsUpdate=!0,Ee.needsUpdate=!0}const xn=new lt(.028,.028,2.28,10);xn.rotateZ(Math.PI/2);const Mn=new lt(.03,.03,2.32,12);Mn.rotateZ(Math.PI/2);const Ri=new lt(.62,.62,2.22,16,1,!0,-.42,.84);Ri.rotateZ(Math.PI/2);function oi(U,ue){zt(new Le(2.32,.05,.32),mt,U,.46,ue-.04),zt(Mn,mt,U,.45,ue-.2);for(const Ee of[-1.02,1.02])zt(new Le(.055,.4,.05),mt,U+Ee,.22,ue-.12),zt(new Le(.055,.4,.05),mt,U+Ee,.22,ue+.06);for(const Ee of[-1.2,1.2])zt(new Le(.07,.82,.4),mt,U+Ee,.44,ue+.02);const _e=zt(Ri,mt,U,.68,ue-.36);_e.castShadow=!0,zt(xn,mt,U,.9,ue+.2),zt(new Le(2.05,.028,.1),mt,U,.3,ue+.04),zt(new Le(1.9,.035,.07),mt,U,.16,ue-.02)}for(const[U,ue]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])oi(U,ue);zt(new Le(2.15,.16,.62),Nt,0,.1,-27.55),zt(new Le(1.82,.2,.5),Nt,0,.27,-27.55),zt(new Le(1.5,.18,.4),Nt,0,.45,-27.55),zt(new Le(2.2,.07,.66),xt,0,.62,-27.55);const Ji=k(new Le(1.35,.32,.035),t.brass,0,.36,-27.26);Ji.position.z=-27.26;const Ci=new ne(new sn(.15,.016,8,20),t.brass);Ci.position.set(0,.38,-27.22),n.add(Ci);for(const U of[-.72,.72]){k(new lt(.028,.04,.22,8),t.brass,U,.76,-27.52);const ue=new ne(new Rt(.035,8,6),new at({color:16757066}));ue.position.set(U,.9,-27.52),ue.castShadow=!1,n.add(ue)}const li=document.createElement("canvas");li.width=64,li.height=64;const Pi=li.getContext("2d"),se=Pi.createRadialGradient(32,32,4,32,32,32);se.addColorStop(0,"rgba(0,0,0,0.38)"),se.addColorStop(1,"rgba(0,0,0,0)"),Pi.fillStyle=se,Pi.fillRect(0,0,64,64);const v=new bi(li),C=new at({map:v,transparent:!0,depthWrite:!1});function z(U,ue,_e){const Ee=new ne(new xi(U,18),C);Ee.rotation.x=-Math.PI/2,Ee.position.set(ue,.028,_e),n.add(Ee)}z(1.7,0,-.05),z(1.3,0,-27.55);for(const[U,ue]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])z(1.2,U,ue);const W=rl.find(U=>U.kind==="signal"),B=rl.find(U=>U.kind==="health"),J=new dt,me=new ne(new Le(.38,.28,.38),t.brass),Ie=new ne(new Le(.16,.16,.16),new at({color:16757066}));Ie.position.y=.22,J.add(me,Ie),J.position.set(W.x,.35,W.z),n.add(J);const Se=new dt,ze=new ne(new Le(.36,.22,.26),bt({color:15196888,roughness:.6})),Je=new ne(new Le(.22,.04,.28),bt({color:9255466,roughness:.5}));Je.position.y=.08,Se.add(ze,Je),Se.position.set(B.x,.2,B.z),n.add(Se);const Ne=new lt(.055,.055,.2,8),tt=new lt(.03,.03,.04,8),Qe=new lt(.46,.5,.06,20),Mt=new sn(.5,.045,6,24),Ft=new xi(.58,24),Ge=new Yt({color:2761756,roughness:.45,metalness:.35}),Ue=new at({color:6813439}),It=new Map;function rt(U){U.traverse(ue=>{ue.castShadow=!1,ue.receiveShadow=!1})}function Bt(){const U=new dt,ue=new ne(Ne,Ge),_e=new ne(tt,Ue);return _e.position.y=.12,U.add(ue,_e),rt(U),n.add(U),U}function pn(){const U=new dt,ue=new Yt({color:15260872,roughness:.4,metalness:.14,emissive:16757082,emissiveIntensity:.42}),_e=new ne(Qe,ue);_e.position.y=.04;const Ee=new ne(Mt,new at({color:16769712}));Ee.rotation.x=Math.PI/2,Ee.position.y=.075;const Oe=new at({color:16762218,transparent:!0,opacity:.9,depthWrite:!1}),ut=new ne(Ft,Oe);ut.rotation.x=-Math.PI/2,ut.position.y=.025;const wt=new dt,Ut=new ne(Ne,Ge),vt=new ne(tt,Ue);return vt.position.y=.12,wt.add(Ut,vt),wt.position.y=.24,U.add(ut,_e,Ee,wt),rt(U),U.userData={disc:_e,glow:ut,cell:wt},n.add(U),U}const Vt=new Yg(15261908,3813928,.74);n.add(Vt);const St=new Wc(16773596,2.35);St.position.set(8,18,10),St.castShadow=!0,St.shadow.mapSize.set(1024,1024),St.shadow.camera.near=2,St.shadow.camera.far=48,St.shadow.camera.left=-16,St.shadow.camera.right=16,St.shadow.camera.top=16,St.shadow.camera.bottom=-16,St.shadow.bias=-4e-4,St.shadow.normalBias=.035,St.shadow.radius=2,St.target.position.set(0,0,-8),n.add(St,St.target);const ot=new Wc(16769732,.7);ot.position.set(-10,8,-6),ot.castShadow=!1,n.add(ot);const te=[];function Be(U,ue,_e,Ee=36,Oe=8){const ut=new Ir(16757082,Ee,Oe,2);return ut.position.set(U,ue,_e),n.add(ut),te.push(ut),ut}Be(0,3.2,-2.1,18,7),Be(-10,2.4,8.2,28,8),Be(9.2,2.6,8.4,26,7),Be(13.5,2.8,-5,34,8),Be(-6,3.4,-8,22,8),Be(4,3.4,-8,20,8),Be(0,5.2,2,30,14),Be(0,4.4,-21.5,34,16),Be(0,3.3,-26.4,16,7),Be(0,4.2,-35.1,22,12),Be(6.2,3.1,-32.5,12,6),Be(-6.1,2.8,-36.2,10,5),Be(0,4.8,-49.4,30,14);const Lt=Be(13.4,2.6,1.2,24,6);let tn=!1,$t=!1,ci=!1,Qi=!1,Dl=!1,Il=0,Ll=0,Pn=0,Hr="pa-horn",Ul=0,Nl=0,Ea=0;function wa(U){U&&(U.group.position.y=U.baseY+U.lift*6.4)}return n.background=new nt(11774879),n.fog=new wl(11774879,12,40),{colliders:oh(),gates:s,cache:J,aid:Se,textures:e,setDoor(U,ue=!1){const _e=a.radio;_e&&(_e.goal=U?1:0,ue&&(_e.lift=_e.goal,wa(_e)))},setDoors(U={},ue=!1){const _e={radio:!!U.radio,service:!!U.service,directory:!!U.directory};for(const Ee of Object.keys(_e)){const Oe=a[Ee];Oe&&(Oe.goal=_e[Ee]?1:0,ue&&(Oe.lift=Oe.goal,wa(Oe)))}},setVeil(U,ue){if(!o||(o.visible=!!U,!U))return;const _e=ue==="DEAD_AIR";l.opacity=_e?.16:.94,l.depthWrite=!_e,l.emissiveIntensity=_e?.62:.3},setDirectoryVeil(U,ue){if(!c||(c.visible=!!U,!U))return;const _e=ue==="DEAD_AIR";u.opacity=_e?.16:.94,u.depthWrite=!_e,u.emissive.setHex(12876322),u.emissiveIntensity=_e?.7:.4},setHijack({aimed:U,hot:ue,id:_e,x:Ee=0,z:Oe=0}){tn=!!U&&_e==="pa-horn",$t=!!ue,ci=!!U&&_e==="sprinkler",Qi=!!U&&_e==="security-shutter",Dl=!!U&&_e==="security-camera",Il=Ee,Ll=Oe},pulseHijack(U="pa-horn",ue=null){Pn=.48,Hr=U||"pa-horn",Ul=ue?ue.x:0,Nl=ue?ue.z:0},syncDirectory(U){if(!U)return;const ue=U.alive?0:-.4;be.visible=!0,be.position.set(U.x,ue,U.z),be.rotation.y=U.yaw||0,$.visible=!!(U.alive&&U.exposed),ce.visible=!!(U.alive&&U.haloVisible),pe.visible=!!U.alive,Ze.emissiveIntensity=U.haloVisible?1.9:.45;const _e=U.alive&&U.hurt>0;fe.emissive.setHex(_e?16769712:1708552),fe.emissiveIntensity=_e?.85:.16,Ae.intensity=U.alive?U.haloVisible||U.exposed?36:22:8},setChannel(U){const ue=n.fog;U==="STATIC"?(ue.color.setHex(10133668),ue.near=12,ue.far=38,n.background.setHex(9475738)):U==="DEAD_AIR"?(ue.color.setHex(2764856),ue.near=10,ue.far=36,n.background.setHex(2369584)):(ue.color.setHex(11774879),ue.near=12,ue.far=40,n.background.setHex(11774879));for(const _e of s)_e.material.opacity=U==="DEAD_AIR"?.14:.97,_e.material.depthWrite=U!=="DEAD_AIR",_e.material.emissiveIntensity=U==="DEAD_AIR"?.45:.18},setPickup(U,ue){U==="cache"&&(J.visible=ue),U==="aid"&&(Se.visible=ue)},syncCells(U,ue=Ea){const _e=new Set;for(const Ee of U){if(Ee.kind!=="battery")continue;_e.add(Ee.id);let Oe=It.get(Ee.id);Oe||(Oe=Ee.pad?pn():Bt(),It.set(Ee.id,Oe));const ut=Math.sin(ue*2.2+Ee.x)*.03;if(Ee.pad){Oe.visible=!0,Oe.position.set(Ee.x,0,Ee.z);const wt=!Ee.taken,Ut=Ee.respawnAt==null?0:Math.max(0,Ee.respawnAt-ue),vt=wt?1:vn(1-Ut/de.padRespawn,0,1);Oe.userData.cell.visible=wt,Oe.userData.cell.position.y=.24+ut,Oe.userData.disc.material.emissiveIntensity=wt?.85:.2+vt*.9,Oe.userData.glow.material.opacity=wt?.92:.28+vt*.6,Oe.userData.glow.scale.setScalar(wt?1:.7+vt*.3)}else Oe.visible=!Ee.taken,Oe.position.set(Ee.x,.28+ut,Ee.z)}for(const[Ee,Oe]of It)_e.has(Ee)||(Oe.visible=!1)},update(U,ue,_e){if(_e){const kt=Math.round(_e.x/4)*4,mn=Math.round(_e.z/4)*4;St.position.set(kt+8,18,mn+10),St.target.position.set(kt,0,mn)}const Ee=Math.min(.05,Math.max(0,U-Ea||0));Ea=U;for(const vt of Object.values(a))vt&&(vt.lift+=(vt.goal-vt.lift)*Math.min(1,Ee*4.2),wa(vt));Pn>0&&(Pn=Math.max(0,Pn-Ee));const Oe=Hr==="pa-horn"?Pn:0;$e.material.opacity=Oe>0?Oe/.48:0,$e.scale.setScalar(Oe>0?1+(1-Oe/.48)*2.4:1),he.emissive.setHex($t?16774877:13939034),he.emissiveIntensity=$t?1.15:tn?.85:.12,qe.material.color.setHex($t?16773576:16757066),V.color.setHex($t?16769696:16757082),V.intensity=$t?22:tn?14:7;const ut=Hr==="sprinkler"&&Pn>0;we.material.opacity=ut?.22+Pn*.4:0,et.material.color.setHex(ut||ci?16773576:16757066);const wt=Hr==="shutter"&&Pn>0,Ut=wt?1-Pn/.48:0;ge.position.y=.55-Ut*1.05,ge.material.emissiveIntensity=wt||Qi?.85:.28,xe.material.color.setHex(wt||Qi?16773576:16757066);for(const vt of Te){const kt=Dl&&Math.hypot(vt.x-Il,vt.z-Ll)<.35,mn=Hr==="camera"&&Pn>0&&Math.hypot(vt.x-Ul,vt.z-Nl)<.35;vt.lens.material.color.setHex(kt||mn?16773576:16757066),vt.beam.material.opacity=mn?.16+Pn*.4:kt?.07:0}if(Lt.intensity=18+Math.sin(U*28)*10+(Math.random()<.04?-12:0),ue==="STATIC"){const vt=1+Math.sin(U*6)*.08;J.scale.setScalar(vt)}else J.scale.setScalar(1);Z.material.color.setHSL(.09,.85,ue==="DEAD_AIR"?.18:.55)},practicals:te}}function Nv(n,e){const t=new Ma;t.background=new nt(2893343);const i=new ne(new Le(18,9,18),new at({color:2893343,side:on}));t.add(i);const r=new ne(new Tt(18,18),new at({color:3814188}));r.rotation.x=-Math.PI/2,r.position.y=-1.6,t.add(r);const s=new X(0,1.6,-20),a=[[-4.9,.55,-18.2],[4.9,.55,-18.2],[-4.9,.55,-20.45],[4.9,.55,-20.45],[-1.35,.95,-27.15],[1.35,.95,-27.15]],o=new at({color:16757066});for(const[u,h,d]of a){const f=new ne(new Rt(.22,10,8),o);f.position.set(u-s.x,h-s.y,d-s.z),t.add(f)}const c=new ne(new Le(2.3,1.1,.7),new at({color:13017434}));c.position.set(0,.55-s.y,-27.55-s.z),t.add(c);const l=new ne(new sn(.7,.06,8,24),new at({color:15123818}));return l.position.set(0,2.2-s.y,-26.55-s.z),t.add(l),e.fromScene(t,.04).texture}function Fv(n,e){const t=new Ma;t.background=new nt(13156274);const i=new ne(new Le(34,12,30),new at({color:13156274,side:on}));t.add(i);const r=new X(0,1.55,.2),s=new ne(new Tt(34,30),new at({color:6972248}));s.rotation.x=-Math.PI/2,s.position.y=-r.y,t.add(s);const a=new ne(new Tt(8,10),new at({color:16774888}));a.rotation.x=Math.PI/2,a.position.set(0,6.9-r.y,1.2-r.z),t.add(a);const o=new ne(new xi(1.15,20),new at({color:1977392}));o.rotation.x=-Math.PI/2,o.position.set(0,.2-r.y,-.05-r.z),t.add(o);const c=new ne(new sn(1.3,.08,8,24),new at({color:13017434}));c.rotation.x=Math.PI/2,c.position.set(0,.4-r.y,-.05-r.z),t.add(c);const l=new at({color:16757066});for(const[u,h,d]of[[-10,2.3,8.2],[9.2,2.3,8.4],[13.2,1.9,-5]]){const f=new ne(new Rt(.55,10,8),l);f.position.set(u-r.x,h-r.y,d-r.z),t.add(f)}return e.fromScene(t,.04).texture}const cu="channel-surfer-best",Ov={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},zv={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function uu(n){let e=n>>>0;return function(){e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function hu(n,e,t,i){return n+(e-n)*(1-Math.exp(-12*i))}function po(n,e){const t=Math.cos(e),i=Math.sin(e),r=Math.sin(n),s=Math.cos(n),a={x:-r*t,y:i,z:-s*t},o={x:s,y:0,z:-r},c={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:c}}function Bv(n,e){const t=new zg({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setSize(960,780,!1),t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.outputColorSpace=rn,t.toneMapping=Au,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Su;const i=new Ma,r=new tl(t);i.environment=r.fromScene(new Kg,.012).texture;const s=Nv(t,r),a=Fv(t,r);r.dispose();const o=new En(72,960/780,.08,90);i.add(o);const c=new Ir(16770756,14,4.5,2);c.position.set(.05,.02,-.25),o.add(c);const l=Uv(i),u=new vi(i,o,480,390,8);u.kernelRadius=.18,u.minDistance=.001,u.maxDistance=.06;const h=Q_(i,l.textures,{aisle:s,court:a}),d=Cv(o,l.textures),f=72,m=new Float32Array(f*3),_=new Float32Array(f*3),g=new Ht;g.setAttribute("position",new en(m,3)),g.setAttribute("color",new en(_,3));const p=new Wg(g,new ih({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));i.add(p);const w=document.createElement("canvas");w.width=64,w.height=64;const b=w.getContext("2d"),S=b.createRadialGradient(32,32,1,32,32,30);S.addColorStop(0,"rgba(255,255,255,1)"),S.addColorStop(.35,"rgba(255,214,150,0.75)"),S.addColorStop(1,"rgba(255,160,60,0)"),b.fillStyle=S,b.fillRect(0,0,64,64);const k=new bi(w);k.colorSpace=rn;const D=[];for(let se=0;se<12;se++){const v=new kg(new eh({map:k,transparent:!0,depthWrite:!1,blending:aa}));v.visible=!1,v.frustumCulled=!1,i.add(v),D.push(v)}const P=28,F=new Float32Array(P*6),E=new Float32Array(P*6),y=new Ht;y.setAttribute("position",new en(F,3)),y.setAttribute("color",new en(E,3)),i.add(new Gg(y,new nh({vertexColors:!0,transparent:!0,opacity:.95})));let T="title",R=null,L=[],Y=null,G=null,Z=[],ie=[],x=sa(),I="level",O=!1,H=!1,j=!1,Me="",Q=!1,he=!1,re=0,oe=0,ve=!1,Pe="",ke=0,_t=0,qe="",$e="",V="",pt=[],We=[],He=[],K={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},et=uu(1),we=0,A=0,M=0,q=0,ae=.55,le=0,ee=0,ge=0,xe="",Te=0,it=0,fe="",De=0;const Xe=[],Ze=new Set;let be=0,st="",Ve=!1;try{be=Number(localStorage.getItem(cu))||0}catch(se){be=0}function Ke(se,v,C,z,W){for(let B=0;B<W;B++)pt.push({x:se,y:v,z:C,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:z});pt.length>f&&pt.splice(0,pt.length-f),We.push({x:se,y:v,z:C,life:.14,max:.14,color:z}),We.length>D.length&&We.shift()}function N(se){xe=se,Te=.95,it+=1}function pe(se,v){Ze.has(se)||(Ze.add(se),Xe.push(v))}function $(se){st!==se&&(st=se,l.setChannel(se),d.setChannel(se),e.setChannel(se))}function ce(){return oh({doorOpen:O,veilUp:!!(Y&&Y.alive&&Y.veilUp),serviceOpen:H,directoryOpen:j,directoryVeilUp:!!(G&&G.alive&&G.veilUp)})}function Ae(){return{level:R.level,xp:R.xp,pending:R.pending,mods:{...R.mods||{}}}}function ye(se){return{x:se.x,y:se.y,z:se.z,yaw:se.yaw||0,pitch:0,vx:0,vz:0}}function Ye(){R=Ys(),L=[...lh(),...da(),...ra()],Y=tu(),G=Ks(),Z=Xs(),O=!1,H=!1,j=!1,Me="",Q=!1,he=!1,re=0,oe=0,ve=!1,qe="",$e="",V="",ie=[],pt=[],We=[],He=[],K=ye(i_),et=uu((Date.now()&65535)+3),we=0,M=0,q=.2,ae=.6,le=0,ee=0,ge=0,Ve=!1,xe="",Te=0,fe="",De=0,Xe.length=0,Ze.clear(),x=sa(),h.reset(L),h.resetPriest(Y),l.setDoors({radio:!1,service:!1,directory:!1},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(G),$("LIVE")}function mt(){re=0,oe=0,ve=!1,qe="",$e="",V="",ie=[],pt=[],We=[],He=[],q=.45,Ve=!1,Me="",ge=0,ee=0,le=0}function Nt(){R=Oi({...Ys(),signal:80,...Ae()}),L=[...L.filter(v=>v.room==="court"),...da().map(v=>({...v,dormant:!1})),...ra()],Y={...tu(),active:!0},G=Ks();const se=Xs();Z=[...Z.filter(v=>v.z>-14.5),...se.filter(v=>v.z<-14.5)],O=!0,H=!1,j=!1,Q=!1,he=!1,mt(),K=ye(r_),h.reset(L),h.resetPriest(Y),l.setDoors({radio:!0,service:!1,directory:!1},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(G),$("LIVE"),x=iu(sa()),N("RADIO WING")}function xt(){R=Oi({...Ys(),signal:80,...Ae()}),L=[...L.filter(v=>v.room==="court"||v.room==="chapel"),...ra().map(v=>({...v,dormant:!1}))],Y={...Y,alive:!1,phase:"dead",veilUp:!1,active:!1,rite:null},G=Ks();const se=Xs();Z=[...Z.filter(v=>v.z>-29.2),...se.filter(v=>v.z<-29.2)],O=!0,H=!0,j=!1,Q=!1,he=!1,mt(),K=ye(s_),h.reset(L),h.resetPriest(Y),l.setDoors({radio:!0,service:!0,directory:!1},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(G),$("LIVE"),x={...ll(x),playing:!1,playT:0,fired:0},N("SERVICE WING")}function Ot(){R=Oi({...Ys(),signal:80,...Ae()}),G={...Ks(),active:!0};const se=Xs();Z=[...Z.filter(v=>v.z>-41.4),...se.filter(v=>v.z<-41.4)],O=!0,H=!0,j=!0,Q=!0,he=!1,mt(),K=ye(a_),h.reset(L),l.setDoors({radio:!0,service:!0,directory:!0},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(G),$("LIVE"),x=ru(x),pe("echo","KRCD is rebroadcasting your radio-wing fire. Dodge the amber ghosts."),N("DIRECTORY")}Ye();function jt(){if(we>0&&!(be>0&&we>=be)){be=we;try{localStorage.setItem(cu,String(be))}catch(se){}}}function zt(se,v){const C=m_(R,se);C.result==="ok"?(R=C.state,M+=1,ge=.45,N(Ov[R.channel]+" · "+pa(R.channel,R).name),e.play(zv[R.channel]),$(R.channel)):C.result==="denied"&&(N("NO SIGNAL"),e.play("deny"))}function Ti(){const se=Yc(R);if(R=se.state,!se.fired)return;x.recording&&(x=lv(x,R.channel));const{forward:v,right:C,up:z}=po(K.yaw,K.pitch),W={x:K.x,y:K.y,z:K.z},B=N_(v,C,z,se.profile.pellets,se.profile.spread,Math.random),J={x:W.x+v.x*.42+C.x*.14-z.x*.1,y:W.y+v.y*.42+C.y*.14-z.y*.1,z:W.z+v.z*.42+C.z*.14-z.z*.1},me=we<re,Ie=se.profile.kind==="hitscan"?[.45,.97,1]:se.profile.kind==="phase"?[.74,.8,.84]:[.9,.9,.9],Se=me?[.45,.97,1]:Ie,ze=ce();let Je=!1,Ne=!1;le=Math.min(.07,le+(se.profile.kind==="spread"?.05:se.profile.kind==="phase"?.03:.014)),d.fire(se.profile.kind),e.play(se.profile.kind==="spread"?"static":se.profile.kind==="phase"?"phase":"live");for(const tt of B){const Qe=I_(W,tt,se.profile.range,L,ze,{phase:se.profile.phases}),Mt=Y.alive?ov(W,tt,se.profile.range,Y,R.channel):null,Ft=G&&G.alive&&G.active?Sv(W,tt,se.profile.range,G,R.channel):null;let Ge=null;Mt&&(!Qe||Mt.t<Qe.t)&&(Ge=Mt),Ft&&(!Qe||Ft.t<Qe.t)&&(!Ge||Ft.t<Ge.t)&&(Ge=Ft);const Ue=Ge||Qe,It=Math.min(se.profile.range,22),rt=Ue?{x:Ue.x,y:Ue.y,z:Ue.z}:{x:W.x+tt.x*It,y:W.y+tt.y*It,z:W.z+tt.z*It};if((!Ue||Ue.t>.45)&&He.push({a:J,b:rt,color:Se,life:.16}),Ge&&Ge.kind==="priest"){const ot=lo(se.profile.damage,Ge.t,se.profile.range,se.profile.falloff)*(me?nn.retuneMult:1),te=av(Y,ot);if(Y=te.priest,te.dealt>0&&(Je=!0),Ke(Ge.x,Ge.y,Ge.z,me?[.45,.97,1]:[.96,.94,.88],5),!te.killed){const Be=nu(Y,{channel:R.channel,weak:Ge.weak,halo:Ge.halo,crossed:!1});Be.broken?(ai(Be),Ne=!0):Y=Be.priest}continue}if(Ge&&Ge.kind==="directory"){const ot=lo(se.profile.damage,Ge.t,se.profile.range,se.profile.falloff),te=yv(G,ot);if(G=te.boss,te.dealt>0&&(Je=!0),Ke(Ge.x,Ge.y,Ge.z,[1,.62,.22],6),!te.killed){const Be=ou(G,{channel:R.channel,weak:Ge.weak,halo:Ge.halo,crossed:!1});Be.broken?(Ai(Be),Ne=!0):G=Be.boss}continue}if(!Qe)continue;if(Qe.kind==="world"){Ke(Qe.x,Qe.y,Qe.z,[.75,.68,.55],6);continue}const Bt=L.findIndex(ot=>ot.id===Qe.id);if(Bt<0||!L[Bt].alive)continue;const pn=L_(L[Bt],we),Vt=lo(se.profile.damage,Qe.t,se.profile.range,se.profile.falloff)*(me?nn.retuneMult:1),St=U_(pn.enemy,{weak:Qe.weak,damage:Vt});if(St.enemy.hurt=.1,L[Bt]=St.enemy,Je=St.dealt>0,Ke(Qe.x,Qe.y,Qe.z,[.96,.94,.9],8),St.killed){const ot=A_(R,{distance:Qe.t,channel:R.channel,burst:pn.burst});R=ot.state,xn(de.xpKill),Tn(St.enemy),Ke(Qe.x,Qe.y,Qe.z,[1,.68,.25],18),e.play("death"),N(ot.aggressive?"AGGRESSIVE +"+ot.amount:"SIGNAL +"+ot.amount)}}Je&&!Ne&&e.play("hit"),He.length>P&&He.splice(0,He.length-P)}function Tn(se){const v="drop-"+se.id;Z.some(C=>C.id===v)||Z.push(S_(se))}function ai(se){Y=se.priest,se.broken&&(e.play("rite-break"),Ke(Y.x,2.15,Y.z,[.96,.78,.32],20),ge=Math.max(ge,.34),Y.alive&&N("RITE BROKEN"),xn(de.xpRite))}function Ai(se){G=se.boss,se.broken&&(e.play("rite-break"),Ke(G.x,2.2,G.z,[1,.68,.22],22),ge=Math.max(ge,.34),G.alive&&N("RITE BROKEN"),xn(de.xpRite))}function xn(se){const v=$r(R,se);return R=v.state,v.leveled>0&&O?Mn("level"):v.leveled>0&&N("LEVEL "+R.level),v}function Mn(se){(R.pending||0)<=0||T!=="play"||(I=se,T="levelup")}function Ri(){const se=Y.x,v=1.72,C=Y.z,z=K.x-se+(et()-.5)*.22,W=1.15-v+(et()-.5)*.12,B=K.z-C+(et()-.5)*.22,J=Math.hypot(z,W,B)||1,me=wn.boltSpeed;return{x:se,y:v,z:C,vx:z/J*me,vy:W/J*me,vz:B/J*me,damage:wn.boltDamage,life:2.6}}function oi(){const se=G.x,v=1.85,C=G.z,z=K.x-se+(et()-.5)*.18,W=1.15-v+(et()-.5)*.1,B=K.z-C+(et()-.5)*.18,J=Math.hypot(z,W,B)||1,me=bn.boltSpeed;return{x:se,y:v,z:C,vx:z/J*me,vy:W/J*me,vz:B/J*me,damage:bn.boltDamage,life:2.6}}function Ji(se){const v=G.x,C=2.15,z=G.z+1.1,W=se==="STATIC"?.55:se==="DEAD_AIR"?.15:.28,B=se==="STATIC"?9:se==="DEAD_AIR"?15:13,J=K.x-v+(et()-.5)*W,me=1.15-C+(et()-.5)*W*.45,Ie=K.z-z+(et()-.5)*W,Se=Math.hypot(J,me,Ie)||1;return{x:v,y:C,z,vx:J/Se*B,vy:me/Se*B,vz:Ie/Se*B,damage:yi.boltDamage,life:2.8,echo:!0}}function Ci(se,v){const C=g_(R,se);if(R=C.state,C.forced&&(N("NO SIGNAL"),e.play("nosignal"),ge=.55,$(R.channel)),v.channel)zt(v.channel);else if(v.cycle){const te=vn(v.cycle,-3,3),Be=te>0?1:-1;for(let Lt=0;Lt!==te;Lt+=Be)zt(d_(R.channel,Be))}K.yaw-=v.lookX*.00215,K.pitch=vn(K.pitch-v.lookY*.00215,-1.35,1.35);const z=L.some(te=>te.alive&&te.room==="court");let W=!1;if(!O&&!z&&(O=!0,W=!0,R=Oi(R),R=$r(R,de.xpCourt).state,N("RADIO WING"),e.play("door"),pe("wing","North door is open. The radio wing is still on the air.")),O&&(R.pending||0)>0&&T==="play"){Mn(W?"break":"level");return}if(O&&K.z<-15.05){for(let te=0;te<L.length;te++)L[te].room==="chapel"&&L[te].dormant&&(L[te]={...L[te],dormant:!1});Y.active||(Y={...Y,active:!0},x.sealed||(x=iu(x)),pe("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}if(H&&K.z<-29.6){for(let te=0;te<L.length;te++)L[te].room==="service"&&L[te].dormant&&(L[te]={...L[te],dormant:!1});pe("service","Service wing. The east sprinkler slows them. The west shutter slams them.")}if(j&&G&&K.z<-42.2&&!G.active&&(G={...G,active:!0},x=ru(x),N("BROADCAST ECHO"),pe("echo","KRCD is rebroadcasting your radio-wing fire. Dodge the amber ghosts."),pe("directory","The Directory. LIVE the listing. STATIC the index. DEAD AIR through the gate.")),x.recording&&(x=cv(x,se)),x.playing){const te=hv(x,se);x=te.echo;for(const Be of te.shots){if(ie.length>=16)break;ie.push(Ji(Be.channel)),e.play("bolt")}}const{forward:B}=po(K.yaw,K.pitch);let J=null,me=1/0;for(const te of Yi){const Be=!mh(K.x,K.y,K.z,te.x,te.y,te.z,ce()),Lt=Ev({origin:{x:K.x,y:K.y,z:K.z},dir:B,point:te,maxDist:nn.maxDist,cone:nn.cone,blocked:Be});!Lt.aimed||Lt.dist>=me||(J=te,me=Lt.dist)}ve=!!J,Pe=J?J.id:"",ke=J?J.x:0,_t=J?J.z:0;const Ie=we<re,Se=oe>we;if(Pe==="sprinkler"&&ve?(qe=Se?"SPRINKLERS RECHARGING":"E  OPEN SPRINKLERS",$e=Se?"cool":"ready"):Pe==="security-shutter"&&ve?(qe=Se?"SHUTTER RECHARGING":"E  SLAM SHUTTER",$e=Se?"cool":"ready"):Pe==="security-camera"&&ve?(qe=Se?"CAMERA RECHARGING":"E  ROLL CAMERA",$e=Se?"cool":"ready"):ve&&Pe==="pa-horn"?(qe=Ie?"PA RETUNED":Se?"PA RECHARGING":"E  RETUNE PA",$e=Ie?"hot":Se?"cool":"ready"):(qe=Ie?"PA RETUNED":"",$e=Ie?"hot":""),v.use&&ve&&J){const te=wv({cooldownUntil:oe},we,ya(R).paCooldown);te.ok?J.id==="sprinkler"?(oe=te.cooldownUntil,L=Tv(L,J,nn.sprinklerRadius,nn.slow),xn(de.xpHijack),N("SPRINKLERS"),e.play("hijack"),Ke(J.x,J.y,J.z,[1,.72,.28],22),ge=Math.max(ge,.22),ee=Math.max(ee,.03),l.pulseHijack("sprinkler")):J.id==="security-shutter"?(oe=te.cooldownUntil,L=Av(L,J,nn.slamRadius,nn.slam,nn.slamKnock),xn(de.xpHijack),N("SHUTTER"),e.play("hijack"),Ke(J.x,J.y-.4,J.z,[1,.62,.22],26),ge=Math.max(ge,.24),ee=Math.max(ee,.05),l.pulseHijack("shutter")):J.id==="security-camera"?(oe=te.cooldownUntil,L=Rv(L,J.room,nn.reveal,nn.mark),xn(de.xpHijack),N("CAMERA"),e.play("hijack"),Ke(J.x,J.y,J.z,[1,.78,.32],18),ge=Math.max(ge,.16),ee=Math.max(ee,.02),l.pulseHijack("camera",J)):J.id==="pa-horn"&&(oe=te.cooldownUntil,re=we+nn.retune,L=bv(L,J,nn.radius,nn.stun),R=v_(R).state,xn(de.xpHijack),N("PA RETUNE"),e.play("hijack"),Ke(J.x,J.y,J.z,[.45,.97,1],28),ge=Math.max(ge,.28),ee=Math.max(ee,.035),l.pulseHijack("pa-horn")):e.play("deny")}const ze=Yi[0];O&&Math.hypot(K.x-ze.x,K.z-ze.z)<8&&pe("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const Je=rv(Y,se,{player:{x:K.x,z:K.z}});Y=Je.priest;for(const te of Je.events)if(te.type==="announce")N(eu(te.rite)),e.play("rite");else if(te.type==="fail"){const Be=co(R,te.damage);R=Be.state,Be.hit&&(e.play("rite-fail"),ee=Math.max(ee,.045)),N("RITE HOLDS")}else te.type==="shot"&&ie.length<16&&(ie.push(Ri()),e.play("bolt"));const Ne=xv(G,se,{player:{x:K.x,z:K.z}});G=Ne.boss;for(const te of Ne.events)if(te.type==="announce")N(au(te.rite)),e.play("rite");else if(te.type==="fail"){const Be=co(R,te.damage);R=Be.state,Be.hit&&(e.play("rite-fail"),ee=Math.max(ee,.05)),N("RITE HOLDS")}else te.type==="shot"&&ie.length<16&&(ie.push(oi()),e.play("bolt"));G.alive&&G.phase==="rite"?V=au(G.rite):V=Y.alive&&Y.phase==="rite"?eu(Y.rite):"";const tt=ce();for(let te=0;te<L.length;te++){if(!L[te].alive)continue;const Be=B_(L[te],se,{channel:R.channel,player:{x:K.x,y:1.2,z:K.z},colliders:tt,allies:L,rng:et});L[te]=Be.enemy,Be.shot&&ie.length<16&&(ie.push(Be.shot),e.play("bolt"))}const Qe=uh(R.channel),Mt=-Math.sin(K.yaw),Ft=-Math.cos(K.yaw),Ge=Math.cos(K.yaw),Ue=-Math.sin(K.yaw);let It=0,rt=0;v.forward&&(It+=Mt,rt+=Ft),v.back&&(It-=Mt,rt-=Ft),v.right&&(It+=Ge,rt+=Ue),v.left&&(It-=Ge,rt-=Ue);const Bt=Math.hypot(It,rt);Bt>0&&(It=It/Bt*Qe,rt=rt/Bt*Qe),K.vx=hu(K.vx,It,12,se),K.vz=hu(K.vz,rt,12,se);const pn=ph(K.x,K.z,K.vx*se,K.vz*se,de.playerRadius,tt,R.channel,n_);if(K.x=pn.x,K.z=pn.z,Y.alive&&Y.phase==="rite"&&Y.rite==="veil"&&R.channel==="DEAD_AIR"&&K.z<o_){const te=nu(Y,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});te.broken&&ai(te)}if(G&&G.alive&&G.phase==="rite"&&G.rite==="gate"&&R.channel==="DEAD_AIR"&&K.z<l_){const te=ou(G,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});te.broken&&Ai(te)}if(q>0)q-=se;else if(v.fireDown){const te=Yc(R);!te.fired&&te.reason==="dry"?Ve||(Ve=!0,e.play("dry"),d.fire("dry"),N("NO BATTERY")):te.fired?(Ve=!1,Ti()):Ve=!1}else Ve=!1;const Vt=[];for(const te of ie){const Be=Math.hypot(te.vx,te.vy,te.vz)||1,Lt=Be*se,tn=Rl(te.x,te.y,te.z,te.vx/Be,te.vy/Be,te.vz/Be,Lt,ce());if(tn){Ke(tn.x,tn.y,tn.z,[1,.62,.22],3);continue}if(te.x+=te.vx*se,te.y+=te.vy*se,te.z+=te.vz*se,te.life-=se,te.life<=0||te.y<0||te.y>6)continue;const $t=te.x-K.x,ci=te.z-K.z;if($t*$t+ci*ci<.4*.4&&te.y>.25&&te.y<1.75){const Qi=co(R,te.damage);R=Qi.state,Qi.hit&&(e.play("hurt"),ee=.05,ge=Math.max(ge,.2)),Ke(te.x,te.y,te.z,[1,.5,.18],6);continue}Vt.push(te)}ie=Vt,Z=w_(Z,we);for(let te=0;te<Z.length;te++){const Be=Z[te];if(Be.taken||!O_(Be,R.channel)||Math.hypot(K.x-Be.x,K.z-Be.z)>1.15)continue;const Lt=F_(R,Be);Lt.took&&(R=Lt.state,Z[te]=E_(Be,we),e.play("pickup"),N(b_(Be,R.channel)))}we>.45&&pe("intro","1 LIVE Clicker, 2 STATIC Scatter, 3 DEAD AIR Phaser. Each shot spends a battery."),(Math.hypot(K.x,K.z+9.45)<6.5||K.z<-32&&Math.hypot(K.x+7.55,K.z+36.55)<8)&&pe("camera","Aim a security camera and press E. It pulls cloaks onto the air and marks the room."),Z.some(te=>te.pad&&Math.hypot(K.x-te.x,K.z-te.z)<4.2)&&pe("pads","Amber pads recharge. They feed the remote you are holding, then a little to the others."),(Math.hypot(K.x,K.z)<7.5||we>11)&&pe("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot(K.x-10.4,K.z)<6.2||we>20)&&pe("gate","Striped shutter is DEAD AIR. The Phaser fires through it. Clicker and Scatter stop."),K.x>12.1&&Z.some(te=>te.cloaked&&!te.taken)&&pe("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const St=L.filter(te=>te.alive&&te.room==="court");if(St.length===1&&St[0].id==="alley"&&pe("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),De>0?(De-=se,De<=0&&(fe="")):Xe.length&&(fe=Xe.shift(),De=6.2),R.health<=0){Me=j?"directory":H?"service":O?"radio":"",T="dead",e.play("ui");return}!Y.alive&&O&&!H&&(L=L.map(Be=>Be.room==="chapel"&&Be.alive?{...Be,alive:!1,hittable:!1}:Be),R=Oi(ma(R,40)),R=$r(R,de.xpWing).state,H=!0,x=ll(x),N("OFF THE AIR"),e.play("death"),e.play("door"),Ke(Y.x,2.1,Y.z,[.96,.8,.38],34),Ke(Y.x,2.75,Y.z,[.9,.72,.28],16),pe("service-door","Service door is open. The mall keeps going north."),(R.pending||0)>0&&T==="play"&&Mn("break"));const ot=L.some(te=>te.alive&&te.room==="service");if(H&&!ot&&!j&&!Q&&(Q=!0,j=!0,R=Oi(R),R=$r(R,de.xpWing).state,N("DIRECTORY"),e.play("door"),pe("directory-door","Directory door is open. That kiosk is the last channel."),(R.pending||0)>0&&T==="play"&&Mn("break")),j&&G&&!G.alive){if(he||(he=!0,R=Oi(ma(R,40)),R=$r(R,de.xpWing).state,N("MALL CLEAR"),e.play("death"),Ke(G.x,2.2,G.z,[1,.68,.22],36),Ke(G.x,2.95,G.z,[.96,.78,.32],18),ae=1.2),(R.pending||0)>0&&T==="play"){Mn("level");return}ae-=se,ae<=0&&T==="play"&&(T="clear",jt(),e.play("pickup"))}}function li(se){for(let v=pt.length-1;v>=0;v--){const C=pt[v];C.life-=se,C.vy-=7*se,C.x+=C.vx*se,C.y+=C.vy*se,C.z+=C.vz*se,C.life<=0&&pt.splice(v,1)}for(let v=0;v<f;v++){const C=pt[v],z=v*3;if(!C){m[z+1]=-40,_[z]=_[z+1]=_[z+2]=0;continue}m[z]=C.x,m[z+1]=C.y,m[z+2]=C.z;const W=vn(C.life*3,0,1);_[z]=C.color[0]*W,_[z+1]=C.color[1]*W,_[z+2]=C.color[2]*W}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0;for(let v=We.length-1;v>=0;v--)We[v].life-=se,We[v].life<=0&&We.splice(v,1);for(let v=0;v<D.length;v++){const C=D[v],z=We[v];if(!z){C.visible=!1;continue}const W=z.life/z.max;C.visible=!0,C.position.set(z.x,z.y,z.z),C.scale.setScalar(.18+(1-W)*.55),C.material.opacity=W,C.material.color.setRGB(z.color[0],z.color[1],z.color[2])}for(let v=He.length-1;v>=0;v--)He[v].life-=se,He[v].life<=0&&He.splice(v,1);for(let v=0;v<P;v++){const C=He[v],z=v*6;if(!C){F[z+1]=-40,F[z+4]=-40;continue}F[z]=C.a.x,F[z+1]=C.a.y,F[z+2]=C.a.z,F[z+3]=C.b.x,F[z+4]=C.b.y,F[z+5]=C.b.z;for(let W=0;W<2;W++)E[z+W*3]=C.color[0],E[z+W*3+1]=C.color[1],E[z+W*3+2]=C.color[2]}y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0}function Pi(se){if(T==="title"){o.position.set(Math.sin(A*.16)*.5,2.5,9.3),o.lookAt(0,1.2,-1.4),d.setVisible(!1);return}d.setVisible(!0),ee*=Math.exp(-9*se),le*=Math.exp(-11*se),o.position.set(K.x+(Math.random()-.5)*ee,K.y,K.z+(Math.random()-.5)*ee),o.rotation.order="YXZ",o.rotation.y=K.yaw,o.rotation.x=K.pitch-le,o.rotation.z=0;const{right:v}=po(K.yaw,0),C=T==="play"?K.vx*v.x+K.vz*v.z:0;d.update(se,T==="play"?Math.hypot(K.vx,K.vz):0,{strafe:C})}return{get mode(){return T},start(){Ye(),T="play",e.play("ui")},resume(){T==="pause"&&(T="play")},pause(){T==="play"&&(T="pause")},replay(){Me==="directory"?Ot():Me==="service"?xt():Me==="radio"?Nt():Ye(),T="play",e.play("ui")},toTitle(){Ye(),T="title"},update(se,v){const C=Math.min(.05,Math.max(0,se)||0);A+=C,T==="play"&&(we+=C,Ci(C,v)),Te>0&&(Te-=C,Te<=0&&(xe="")),ge=Math.max(0,ge-C*3.2),$(T==="title"?"LIVE":R.channel);const z=Z.find(J=>J.cloaked),W=Z.find(J=>J.kind==="health");l.setPickup("cache",!!(z&&!z.taken&&R.channel==="STATIC"&&T!=="title")),l.setPickup("aid",!!(W&&!W.taken)),l.syncCells(Z,T==="play"?we:0),l.setDoors({radio:O,service:H,directory:j}),l.setVeil(!!(Y.alive&&Y.veilUp),T==="title"?"LIVE":R.channel),l.setDirectoryVeil(!!(G&&G.alive&&G.veilUp),T==="title"?"LIVE":R.channel),l.syncDirectory(G),l.setHijack({aimed:T==="play"&&ve,hot:T==="play"&&we<re,id:Pe,x:ke,z:_t}),l.update(A,R.channel,K),h.setProbeBlend(K.z),h.sync(L,C,A,R.channel),h.syncPriest(Y,C,A,T==="title"?"LIVE":R.channel),h.syncBolts(ie),li(C),Pi(C);const B=T==="title"?"LIVE":R.channel;u.kernelRadius=B==="DEAD_AIR"?.05:.18,u.maxDistance=B==="DEAD_AIR"?.02:.06,t.render(i,o),t.shadowMap.autoUpdate=!1,u.renderToScreen=!0,u.render(t),t.shadowMap.autoUpdate=!0,t.setRenderTarget(null)},chooseUpgrade(se){if(T!=="levelup")return!1;const C=oo(R)[se];if(!C)return!1;const z=y_(R,C.id);return z.applied?(R=z.state,N(C.name),e.play("pickup"),(R.pending||0)>0&&oo(R).length||(R={...R,pending:0},T="play"),!0):!1},hud(){const se=K.z<-41.55?"directory":K.z<-29.35?"service":K.z<-14.85?"radio":"court",v=L.filter(ze=>ze.alive&&ze.room==="court").length,C=L.filter(ze=>ze.alive&&ze.room==="chapel").length+(Y.alive?1:0),z=L.filter(ze=>ze.alive&&ze.room==="service").length,W=G&&G.alive?1:0,B={court:["COURT",v,"TESSERA"],radio:["RADIO",C,"ON AIR"],service:["SERVICE",z,"TESSERA"],directory:["DIRECTORY",W,"ON AIR"]}[se],J=T==="play",me=pa(R.channel,R),Ie=T==="levelup"?oo(R):[],Se=se==="directory"&&G&&G.alive?G.hp/G.maxHp:se==="radio"&&Y.alive?Y.hp/Y.maxHp:null;return{mode:T,health:R.health,signal:R.signal,channel:R.channel,remote:me.name,ammo:R.batteries[R.channel],ammoMax:Or(R)[R.channel],level:R.level||1,xp:x_(R),levelReason:I,offers:Ie.map(ze=>({id:ze.id,name:ze.name,detail:ze.detail})),enemies:B[1],roomLabel:B[0],countLabel:B[2],tip:fe,banner:xe,bannerSerial:it,flash:ge,hurt:R.hurtTimer,time:we,best:be,swaps:M,muted:e.muted,prompt:J?qe:"",promptKind:J?$e:"",rite:J?V:"",boss:Se,checkpoint:Me}}}}const kv=960,Hv=780,bh=document.getElementById("stage"),ga=document.getElementById("view"),zr=Ah();let ct;try{ct=Bv(ga,zr)}catch(n){const e=document.getElementById("boot-error");throw e&&(e.textContent="The picture failed to come up. "+(n&&n.message?n.message:"")),n}const Rr=new Set,Xt={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let fu=-1;const Vv=document.getElementById("health-fill"),Gv=document.getElementById("health-num"),Wv=document.getElementById("signal-fill"),Xv=document.getElementById("signal-num"),Yv=document.getElementById("ch-name"),du=document.getElementById("remote-readout"),pu=document.getElementById("level-chip"),mu=document.getElementById("xp-fill"),es=document.getElementById("levelup"),qv=document.getElementById("level-kicker"),Zv=document.getElementById("level-title"),Kv=document.getElementById("level-body"),gu=document.getElementById("level-picks"),jv=document.getElementById("level-keys"),$v=document.getElementById("enemy-count"),Jv=document.getElementById("room-label"),Qv=document.getElementById("count-label"),ex=document.getElementById("rite"),_u=document.getElementById("prompt"),vu=document.getElementById("boss-wrap"),tx=document.getElementById("boss-fill"),nx=document.getElementById("tip"),js=document.getElementById("banner"),xu=document.getElementById("hurt"),ix=document.getElementById("flash"),rx=document.getElementById("panel"),Sr=document.getElementById("panel-kicker"),Er=document.getElementById("panel-title"),wr=document.getElementById("panel-body"),br=document.getElementById("panel-meta"),Gi=document.getElementById("panel-primary"),Wi=document.getElementById("panel-secondary");function Pl(){const n=Math.min(window.innerWidth/kv,window.innerHeight/Hv);bh.style.transform=`scale(${Math.max(.05,n)})`}Pl();window.addEventListener("resize",Pl);window.addEventListener("orientationchange",Pl);function Si(){document.pointerLockElement!==ga&&ga.requestPointerLock()}function Sa(){zr.ensure(),ct.mode==="title"?(ct.start(),Si()):ct.mode==="pause"?(ct.resume(),Si()):(ct.mode==="clear"||ct.mode==="dead")&&(ct.replay(),Si())}document.getElementById("start").addEventListener("click",n=>{n.stopPropagation(),Sa()});Gi.addEventListener("click",n=>{n.stopPropagation(),Sa()});Wi.addEventListener("click",n=>{n.stopPropagation(),zr.ensure(),(ct.mode==="pause"||ct.mode==="clear"||ct.mode==="dead")&&(ct.mode==="pause"?ct.replay():ct.toTitle(),ct.mode==="play"&&Si())});window.addEventListener("keydown",n=>{if(n.repeat)return;if(ct.mode==="levelup"){const t=Xc(n.code);if(t){const i=t==="LIVE"?0:t==="STATIC"?1:2;ct.chooseUpgrade(i)&&ct.mode==="play"&&Si()}return}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),Rr.add(n.code);const e=Xc(n.code);e&&ct.mode==="play"&&(Xt.channel=e),n.code==="KeyQ"&&ct.mode==="play"&&(Xt.cycle+=1),n.code==="KeyE"&&ct.mode==="play"&&(Xt.use=!0),n.code==="KeyM"&&zr.toggle(),n.code==="Escape"&&ct.mode==="play"&&ct.pause(),n.code==="Enter"&&Sa(),n.code==="KeyR"&&(ct.mode==="pause"||ct.mode==="clear"||ct.mode==="dead")&&(zr.ensure(),ct.replay(),Si())});window.addEventListener("keyup",n=>Rr.delete(n.code));window.addEventListener("mousemove",n=>{ct.mode==="play"&&(Xt.lookX+=n.movementX||0,Xt.lookY+=n.movementY||0)});window.addEventListener("mousedown",n=>{if(n.button===0&&!(n.target.closest&&n.target.closest("button"))){if(ct.mode==="title"){Sa();return}ct.mode==="play"&&(Si(),Xt.fire=!0)}});window.addEventListener("mouseup",n=>{n.button===0&&(Xt.fire=!1)});window.addEventListener("wheel",n=>{n.preventDefault(),!(ct.mode!=="play"||Math.abs(n.deltaY)<4)&&(Xt.cycle+=n.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==ga&&ct.mode==="play"&&ct.pause()});window.addEventListener("blur",()=>{ct.mode==="play"&&(ct.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&ct.mode==="play"&&(ct.pause(),document.pointerLockElement&&document.exitPointerLock())});function sx(n){if(!es)return;const e=n.mode==="levelup";if(es.hidden=!e,!e){es.dataset.offers="";return}qv.textContent=n.levelReason==="break"?"KRCD 7 · STATION BREAK":"KRCD 7 · LEVEL UP",Zv.textContent="LEVEL "+(n.level||1),Kv.textContent=n.levelReason==="break"?"Court is clear. Pick a retune before the wing.":"Pick a retune. Channels stay the same.";const t=n.offers||[],i=t.map(r=>r.id).join("|");jv.textContent=t.map((r,s)=>s+1).join("  ·  "),es.dataset.offers!==i&&(es.dataset.offers=i,gu.replaceChildren(),t.forEach((r,s)=>{const a=document.createElement("button");a.type="button";const o=document.createElement("b");o.textContent=`${s+1}  ${r.name}`;const c=document.createElement("span");c.textContent=r.detail,a.append(o,c),a.addEventListener("click",l=>{l.stopPropagation(),zr.ensure(),ct.chooseUpgrade(s)&&ct.mode==="play"&&Si()}),gu.appendChild(a)}))}function qn(n){return n>0?n.toFixed(1)+"s":"—"}function ax(n){var i,r;const e=n.channel==="DEAD_AIR"?"ch-dead":n.channel==="STATIC"?"ch-static":"ch-live";bh.className=`mode-${n.mode} ${e}`,Vv.style.width=Math.max(0,n.health)+"%",Wv.style.width=Math.max(0,n.signal)+"%",Gv.textContent=String(Math.ceil(n.health)),Xv.textContent=String(Math.ceil(n.signal)),Yv.textContent=n.channel==="DEAD_AIR"?"DEAD AIR":n.channel,du&&(du.textContent=`${n.remote||""}  ${(i=n.ammo)!=null?i:0}/${(r=n.ammoMax)!=null?r:0}`),pu&&(pu.textContent=`LV ${n.level||1}`),mu&&(mu.style.width=Math.max(0,Math.min(100,Math.round((n.xp||0)*100)))+"%"),$v.textContent=String(n.enemies),Jv.textContent=n.roomLabel||"COURT",Qv.textContent=n.countLabel||"TESSERA",ex.textContent=n.rite||"",_u.textContent=n.prompt||"",_u.className=n.promptKind||"",n.boss==null?vu.classList.remove("on"):(vu.classList.add("on"),tx.style.width=Math.max(0,Math.min(100,n.boss*100))+"%"),nx.textContent=n.tip||"",xu.style.opacity=n.health<35?"0.28":"0",n.hurt>.2&&(xu.style.opacity="0.55"),ix.style.opacity=String(Math.max(0,Math.min(.7,n.flash))),n.bannerSerial!==fu&&(fu=n.bannerSerial,n.banner&&(js.textContent=n.banner,js.classList.remove("show"),js.offsetWidth,js.classList.add("show")));const t=n.mode==="pause"||n.mode==="clear"||n.mode==="dead";rx.hidden=!t,sx(n),n.mode==="levelup"&&document.pointerLockElement&&document.exitPointerLock(),t&&(n.mode==="pause"?(Sr.textContent="KRCD 7 · STILL ON AIR",Er.textContent="PAUSED",wr.textContent="Esc released the mouse. Click resume to lock it again.",br.textContent=n.muted?"MUTED":"",Gi.textContent="Resume",Wi.textContent="Restart"):n.mode==="clear"?(Sr.textContent="KRCD 7 · DIRECTORY",Er.textContent="MALL CLEAR",wr.textContent="The Directory is off the air. The mall run is clear.",br.textContent=`TIME ${qn(n.time)} · BEST ${qn(n.best)} · ${n.swaps} CHANNEL CHANGES`,Gi.textContent="Replay",Wi.textContent="Title"):n.checkpoint==="directory"?(Sr.textContent="KRCD 7 · DIRECTORY",Er.textContent="WING LOST",wr.textContent="The earlier wings stay clear. Retry from the directory door.",br.textContent=`TIME ${qn(n.time)} · BEST ${qn(n.best)}`,Gi.textContent="Retry wing",Wi.textContent="Title"):n.checkpoint==="service"?(Sr.textContent="KRCD 7 · SERVICE",Er.textContent="WING LOST",wr.textContent="The radio wing stays clear. Retry from the service door.",br.textContent=`TIME ${qn(n.time)} · BEST ${qn(n.best)}`,Gi.textContent="Retry wing",Wi.textContent="Title"):n.checkpoint==="radio"?(Sr.textContent="KRCD 7 · RADIO",Er.textContent="WING LOST",wr.textContent="The court stays clear. Retry from the radio door.",br.textContent=`TIME ${qn(n.time)} · BEST ${qn(n.best)}`,Gi.textContent="Retry wing",Wi.textContent="Title"):(Sr.textContent="KRCD 7 · NO CARRIER",Er.textContent="SIGNAL LOST",wr.textContent="The court keeps the carrier. Retune and walk it again.",br.textContent=`BEST ${qn(n.best)}`,Gi.textContent="Retry",Wi.textContent="Title"))}let Mu=performance.now();function Th(n){const e=Math.min(.05,(n-Mu)/1e3);Mu=n,document.hidden||(ct.update(e,{forward:Rr.has("KeyW"),back:Rr.has("KeyS"),left:Rr.has("KeyA"),right:Rr.has("KeyD"),lookX:Xt.lookX,lookY:Xt.lookY,fireDown:Xt.fire&&ct.mode==="play",channel:Xt.channel,cycle:Xt.cycle,use:Xt.use}),ax(ct.hud())),Xt.lookX=0,Xt.lookY=0,Xt.channel=null,Xt.cycle=0,Xt.use=!1,requestAnimationFrame(Th)}requestAnimationFrame(Th);
