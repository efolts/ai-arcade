(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jo="channel-surfer-mute";function Gu(){const n=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let t=null,e=null,i=null,s=null,r=null,a=!1,o=!1;try{o=localStorage.getItem(Jo)==="1"}catch(d){o=!1}function c(){if(!n)return null;if(!t){t=new n,e=t.createGain(),e.gain.value=o?0:.85,i=t.createBiquadFilter(),i.type="lowpass",i.frequency.value=16e3,i.connect(e),e.connect(t.destination);const d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=d.getChannelData(0);for(let E=0;E<f.length;E++)f[E]=Math.random()*2-1;const m=t.createBufferSource();m.buffer=d,m.loop=!0;const _=t.createBiquadFilter();_.type="highpass",_.frequency.value=1200,s=t.createGain(),s.gain.value=0,m.connect(_),_.connect(s),s.connect(i),m.start(),r=t.createGain(),r.gain.value=.018;const g=t.createOscillator(),p=t.createOscillator();g.type="sine",p.type="triangle",g.frequency.value=55,p.frequency.value=82.4,g.connect(r),p.connect(r),r.connect(i),g.start(),p.start()}return t.state==="suspended"&&t.resume(),a=!0,t}function l(d,f){const m=t.createGain(),_=t.currentTime;return m.gain.setValueAtTime(1e-4,_),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),_+.012),m.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,d)),m.connect(i),m}function u(d,f,m,_,g){if(!a||!t||o)return;const p=t.createOscillator();p.type=m;const E=t.currentTime;p.frequency.setValueAtTime(d,E),g&&p.frequency.exponentialRampToValueAtTime(Math.max(30,g),E+f),p.connect(l(f,_)),p.start(),p.stop(E+f+.03)}function h(d,f,m){if(!a||!t||o)return;const _=Math.max(1,Math.floor(t.sampleRate*d)),g=t.createBuffer(1,_,t.sampleRate),p=g.getChannelData(0);for(let k=0;k<_;k++)p[k]=Math.random()*2-1;const E=t.createBufferSource();E.buffer=g;const b=t.createBiquadFilter();b.type="bandpass",b.frequency.value=m,b.Q.value=.7;const y=l(d,f);E.connect(b),b.connect(y),E.start()}return{ensure:c,get muted(){return o},toggle(){o=!o,e&&(e.gain.value=o?0:.85);try{localStorage.setItem(Jo,o?"1":"0")}catch(d){}return o},setChannel(d){if(!a||!t)return;const f=t.currentTime,m=d==="DEAD_AIR"?380:d==="STATIC"?3800:15e3;i.frequency.linearRampToValueAtTime(m,f+.07),s.gain.linearRampToValueAtTime(d==="STATIC"?.02:0,f+.08),r.gain.linearRampToValueAtTime(d==="DEAD_AIR"?.028:.016,f+.1)},play(d){if(!(!a||o))switch(d){case"live":h(.045,.14,2400),u(940,.08,"square",.045,360);break;case"static":h(.13,.22,640);break;case"phase":u(220,.12,"sine",.06,90),h(.07,.08,480);break;case"dry":h(.03,.08,1800),u(140,.04,"square",.03,90);break;case"deny":u(86,.09,"sine",.07,48);break;case"switch-live":u(523,.11,"square",.04),u(784,.13,"square",.03);break;case"switch-static":h(.08,.1,500),u(190,.12,"sawtooth",.03);break;case"switch-dead":u(74,.18,"sine",.07,42);break;case"hit":u(1500,.05,"square",.04,480);break;case"hurt":h(.11,.16,220),u(120,.16,"sawtooth",.05,60);break;case"death":h(.26,.18,280),u(210,.32,"triangle",.06,48);break;case"pickup":u(660,.08,"sine",.05),u(990,.12,"sine",.04);break;case"ui":u(480,.05,"square",.03);break;case"bolt":u(300,.09,"square",.03,130);break;case"nosignal":h(.16,.12,180);break;case"hijack":h(.18,.2,1800),u(680,.16,"sawtooth",.05,1400),u(220,.22,"square",.04,90);break;case"rite":u(196,.28,"sine",.05),u(247,.32,"sine",.035),u(392,.22,"triangle",.03);break;case"rite-break":h(.08,.16,1400),u(880,.12,"square",.05,420),u(1320,.16,"triangle",.04,700);break;case"rite-fail":u(98,.22,"sawtooth",.06,50),h(.14,.12,200);break;case"door":u(140,.18,"square",.04,70),u(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="170",Wu=0,Qo=1,Xu=2,Fc=1,Oc=2,On=3,ui=0,We=1,Ze=2,nn=0,es=1,Lr=2,tl=3,el=4,zc=5,Bn=100,qu=101,Yu=102,Zu=103,Ku=104,Fa=200,ju=201,$u=202,Ju=203,Oa=204,za=205,Bc=206,Qu=207,kc=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,Ba=0,ka=1,Ha=2,ss=3,Va=4,Ga=5,Wa=6,Xa=7,Hc=0,ah=1,oh=2,li=0,lh=1,ch=2,uh=3,Vc=4,hh=5,fh=6,dh=7,Gc=300,rs=301,as=302,qa=303,Ya=304,Vr=306,Cn=1e3,Hn=1001,Za=1002,Je=1003,ph=1004,Gs=1005,sn=1006,Zr=1007,En=1008,qn=1009,Wc=1010,Xc=1011,Fs=1012,Do=1013,bi=1014,Rn=1015,Ti=1016,Io=1017,Lo=1018,Ai=1020,qc=35902,Yc=1021,Zc=1022,wn=1023,Kc=1024,jc=1025,ns=1026,Ri=1027,Uo=1028,No=1029,$c=1030,Fo=1031,Oo=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,Ka=35840,ja=35841,$a=35842,Ja=35843,Qa=36196,to=37492,eo=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,Dr=36492,_o=36494,vo=36495,Jc=36283,xo=36284,Mo=36285,yo=36286,mh=3200,gh=3201,zo=0,_h=1,kn="",Ve="srgb",hi="srgb-linear",Gr="linear",ve="srgb",Pi=7680,nl=519,vh=512,xh=513,Mh=514,Qc=515,yh=516,Sh=517,Eh=518,wh=519,So=35044,il="300 es",Vn=2e3,Ur=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const Is=Math.PI/180,Os=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function Bo(n,t){return(n%t+t)%t}function bh(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Th(n,t,e){return n!==t?(e-n)/(t-n):0}function Ls(n,t,e){return(1-e)*n+e*t}function Ah(n,t,e,i){return Ls(n,t,1-Math.exp(-e*i))}function Rh(n,t=1){return t-Math.abs(Bo(n,t*2)-t)}function Ch(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ph(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Dh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ih(n,t){return n+Math.random()*(t-n)}function Lh(n){return n*(.5-Math.random())}function Uh(n){n!==void 0&&(sl=n);let t=sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nh(n){return n*Is}function Fh(n){return n*Os}function Oh(n){return(n&n-1)===0&&n!==0}function zh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kh(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*m,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*m,o*l);break;case"ZYZ":n.set(c*m,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hh={DEG2RAD:Is,RAD2DEG:Os,generateUUID:Wn,clamp:Ge,euclideanModulo:Bo,mapLinear:bh,inverseLerp:Th,lerp:Ls,damp:Ah,pingpong:Rh,smoothstep:Ch,smootherstep:Ph,randInt:Dh,randFloat:Ih,randFloatSpread:Lh,seededRandom:Uh,degToRad:Nh,radToDeg:Fh,isPowerOfTwo:Oh,ceilPowerOfTwo:zh,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:kh,normalize:ge,denormalize:Sn};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,i,s,r,a,o,c,l){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],E=s[1],b=s[4],y=s[7],k=s[2],D=s[5],P=s[8];return r[0]=a*_+o*E+c*k,r[3]=a*g+o*b+c*D,r[6]=a*p+o*y+c*P,r[1]=l*_+u*E+h*k,r[4]=l*g+u*b+h*D,r[7]=l*p+u*y+h*P,r[2]=d*_+f*E+m*k,r[5]=d*g+f*b+m*D,r[8]=d*p+f*y+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,m=e*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new ie;function tu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vh(){const n=Nr("canvas");return n.style.display="block",n}const rl={};function As(n){n in rl||(rl[n]=!0,console.warn(n))}function Gh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Wh(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(n.r=is(n.r),n.g=is(n.g),n.b=is(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===kn?Gr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const al=[.64,.33,.3,.6,.15,.06],ol=[.2126,.7152,.0722],ll=[.3127,.329],cl=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[hi]:{primaries:al,whitePoint:ll,transfer:Gr,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:ol,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:al,whitePoint:ll,transfer:ve,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:ol,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let Di;class qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Nr("canvas")),Di.width=t.width,Di.height=t.height;const i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yh=0;class eu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function jr(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?qh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class Ke extends us{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=Hn,s=Hn,r=sn,a=En,o=wn,c=qn,l=Ke.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Wn(),this.name="",this.source=new eu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cn:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cn:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Gc;Ke.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(f+1)/2,k=(p+1)/2,D=(u+d)/4,P=(h+_)/4,N=(m+g)/4;return b>y&&b>k?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=D/i,r=P/i):y>k?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=D/s,r=N/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=P/r,s=N/r),this.set(i,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends us{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ke(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Kh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class nu extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jh extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-o;const p=c*d+l*f+u*m+h*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const k=Math.sqrt(b),D=Math.atan2(k,p*E);g=Math.sin(g*D)/k,o=Math.sin(o*D)/k}const y=o*E;if(c=c*g+d*y,l=l*g+f*y,u=u*g+m*y,h=h*g+_*y,g===1-o){const k=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=k,l*=k,u*=k,h*=k}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*h+c*f-l*d,t[e+1]=c*m+u*d+l*h-o*f,t[e+2]=l*m+u*f+o*d-c*h,t[e+3]=u*m-o*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new G,hl=new Bs;class ks{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Xs.subVectors(this.max,ps),Ii.subVectors(t.a,ps),Li.subVectors(t.b,ps),Ui.subVectors(t.c,ps),Jn.subVectors(Li,Ii),Qn.subVectors(Ui,Li),di.subVectors(Ii,Ui);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-di.z,di.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,di.z,0,-di.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-di.y,di.x,0];return!Jr(e,Ii,Li,Ui,Xs)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Ii,Li,Ui,Xs))?!1:(qs.crossVectors(Jn,Qn),e=[qs.x,qs.y,qs.z],Jr(e,Ii,Li,Ui,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new G,new G,new G,new G,new G,new G,new G,new G],xn=new G,Ws=new ks,Ii=new G,Li=new G,Ui=new G,Jn=new G,Qn=new G,di=new G,ps=new G,Xs=new G,qs=new G,pi=new G;function Jr(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){pi.fromArray(n,r);const o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const $h=new ks,ms=new G,Qr=new G;class Hs{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$h.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ms,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Qr)),this.expandByPoint(ms.copy(t.center).sub(Qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new G,ta=new G,Ys=new G,ti=new G,ea=new G,Zs=new G,na=new G;class ko{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ta.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(ta);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=ti.dot(this.direction),c=-ti.dot(Ys),l=ti.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ta).addScaledVector(Ys,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,s,r){ea.subVectors(e,t),Zs.subVectors(i,t),na.crossVectors(ea,Zs);let a=this.direction.dot(na),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const c=o*this.direction.dot(Zs.crossVectors(ti,Zs));if(c<0)return null;const l=o*this.direction.dot(ea.cross(ti));if(l<0||c+l>a)return null;const u=-o*ti.dot(na);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,i,s,r,a,o,c,l,u,h,d,f,m,_,g){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,h,d,f,m,_,g)}set(t,e,i,s,r,a,o,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,m=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;e[0]=d-_*o,e[4]=-a*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,f=a*h,m=o*u,_=o*h;e[0]=c*u,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Qh)}lookAt(t,e,i){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ei.crossVectors(i,on),ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ei.crossVectors(i,on)),ei.normalize(),Ks.crossVectors(on,ei),s[0]=ei.x,s[4]=Ks.x,s[8]=on.x,s[1]=ei.y,s[5]=Ks.y,s[9]=on.y,s[2]=ei.z,s[6]=Ks.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],E=i[3],b=i[7],y=i[11],k=i[15],D=s[0],P=s[4],N=s[8],w=s[12],x=s[1],A=s[5],C=s[9],O=s[13],W=s[2],Z=s[6],K=s[10],it=s[14],v=s[3],U=s[7],F=s[11],B=s[15];return r[0]=a*D+o*x+c*W+l*v,r[4]=a*P+o*A+c*Z+l*U,r[8]=a*N+o*C+c*K+l*F,r[12]=a*w+o*O+c*it+l*B,r[1]=u*D+h*x+d*W+f*v,r[5]=u*P+h*A+d*Z+f*U,r[9]=u*N+h*C+d*K+f*F,r[13]=u*w+h*O+d*it+f*B,r[2]=m*D+_*x+g*W+p*v,r[6]=m*P+_*A+g*Z+p*U,r[10]=m*N+_*C+g*K+p*F,r[14]=m*w+_*O+g*it+p*B,r[3]=E*D+b*x+y*W+k*v,r[7]=E*P+b*A+y*Z+k*U,r[11]=E*N+b*C+y*K+k*F,r[15]=E*w+b*O+y*it+k*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*h-s*l*h-r*o*d+i*l*d+s*o*f-i*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+g*(+e*l*h-e*o*f-r*a*h+i*a*f+r*o*u-i*l*u)+p*(-s*o*u-e*c*h+e*o*d+s*a*h-i*a*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],E=h*g*l-_*d*l+_*c*f-o*g*f-h*c*p+o*d*p,b=m*d*l-u*g*l-m*c*f+a*g*f+u*c*p-a*d*p,y=u*_*l-m*h*l+m*o*f-a*_*f-u*o*p+a*h*p,k=m*h*c-u*_*c-m*o*d+a*_*d+u*o*g-a*h*g,D=e*E+i*b+s*y+r*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return t[0]=E*P,t[1]=(_*d*r-h*g*r-_*s*f+i*g*f+h*s*p-i*d*p)*P,t[2]=(o*g*r-_*c*r+_*s*l-i*g*l-o*s*p+i*c*p)*P,t[3]=(h*c*r-o*d*r-h*s*l+i*d*l+o*s*f-i*c*f)*P,t[4]=b*P,t[5]=(u*g*r-m*d*r+m*s*f-e*g*f-u*s*p+e*d*p)*P,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*P,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*f+e*c*f)*P,t[8]=y*P,t[9]=(m*h*r-u*_*r-m*i*f+e*_*f+u*i*p-e*h*p)*P,t[10]=(a*_*r-m*o*r+m*i*l-e*_*l-a*i*p+e*o*p)*P,t[11]=(u*o*r-a*h*r-u*i*l+e*h*l+a*i*f-e*o*f)*P,t[12]=k*P,t[13]=(u*_*s-m*h*s+m*i*d-e*_*d-u*i*g+e*h*g)*P,t[14]=(m*o*s-a*_*s-m*i*c+e*_*c+a*i*g-e*o*g)*P,t[15]=(a*h*s-u*o*s+u*i*c-e*h*c-a*i*d+e*o*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,m=r*h,_=a*u,g=a*h,p=o*h,E=c*l,b=c*u,y=c*h,k=i.x,D=i.y,P=i.z;return s[0]=(1-(_+p))*k,s[1]=(f+y)*k,s[2]=(m-b)*k,s[3]=0,s[4]=(f-y)*D,s[5]=(1-(d+p))*D,s[6]=(g+E)*D,s[7]=0,s[8]=(m+b)*P,s[9]=(g-E)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const a=Ni.set(s[4],s[5],s[6]).length(),o=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const l=1/r,u=1/a,h=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,e.setFromRotationMatrix(Mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Vn){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let f,m;if(o===Vn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ur)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Vn){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(a-r),d=(e+t)*l,f=(i+s)*u;let m,_;if(o===Vn)m=(a+r)*h,_=-2*h;else if(o===Ur)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new G,Mn=new Me,Jh=new G(0,0,0),Qh=new G(1,1,1),ei=new G,Ks=new G,on=new G,fl=new Me,dl=new Bs;class Pn{constructor(t=0,e=0,i=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tf=0;const pl=new G,Fi=new Bs,Un=new Me,js=new G,gs=new G,ef=new G,nf=new Bs,ml=new G(1,0,0),gl=new G(0,1,0),_l=new G(0,0,1),vl={type:"added"},sf={type:"removed"},Oi={type:"childadded",child:null},ia={type:"childremoved",child:null};class Le extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new G,e=new Pn,i=new Bs,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ie}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?js.copy(t):js.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(gs,js,this.up):Un.lookAt(js,gs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Un),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sf),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new G(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new G,Nn=new G,sa=new G,Fn=new G,zi=new G,Bi=new G,xl=new G,ra=new G,aa=new G,oa=new G,la=new xe,ca=new xe,ua=new xe;class dn{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yn.subVectors(s,e),Nn.subVectors(i,e),sa.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Nn),c=yn.dot(sa),l=Nn.dot(Nn),u=Nn.dot(sa),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return la.setScalar(0),ca.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,i),ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(la,r.x),a.addScaledVector(ca,r.y),a.addScaledVector(ua,r.z),a}static isFrontFacing(t,e,i,s){return yn.subVectors(i,e),Nn.subVectors(t,e),yn.cross(Nn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),yn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,i),Bi.subVectors(r,i),ra.subVectors(t,i);const c=zi.dot(ra),l=Bi.dot(ra);if(c<=0&&l<=0)return e.copy(i);aa.subVectors(t,s);const u=zi.dot(aa),h=Bi.dot(aa);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(zi,a);oa.subVectors(t,r);const f=zi.dot(oa),m=Bi.dot(oa);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(i).addScaledVector(Bi,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return xl.subVectors(r,s),o=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(xl,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ha(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=Bo(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const i=su[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ce.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ge(qe.r*255,0,255))*65536+Math.round(Ge(qe.g*255,0,255))*256+Math.round(Ge(qe.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,r=qe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ve){ce.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL($s);const i=Ls(ni.h,$s.h,e),s=Ls(ni.s,$s.s,e),r=Ls(ni.l,$s.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=su;let rf=0;class Kn extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Wn(),this.name="",this.blending=es,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=za,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==Bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oe extends Kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new G,Js=new Ct;class He{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=So,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==So&&(t.usage=this.usage),t}}class ru extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class au extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ue extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}}let af=0;const fn=new Me,fa=new Le,ki=new G,ln=new ks,_s=new ks,Oe=new G;class Ce extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?au:ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(ln.min,_s.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,_s.max),ln.expandByPoint(Oe)):(ln.expandByPoint(_s.min),ln.expandByPoint(_s.max))}ln.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Oe.fromBufferAttribute(o,l),c&&(ki.fromBufferAttribute(t,l),Oe.add(ki)),s=Math.max(s,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new G,c[N]=new G;const l=new G,u=new G,h=new G,d=new Ct,f=new Ct,m=new Ct,_=new G,g=new G;function p(N,w,x){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,x),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const A=1/(f.x*m.y-m.x*f.y);isFinite(A)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(A),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(A),o[N].add(_),o[w].add(_),o[x].add(_),c[N].add(g),c[w].add(g),c[x].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,w=E.length;N<w;++N){const x=E[N],A=x.start,C=x.count;for(let O=A,W=A+C;O<W;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new G,y=new G,k=new G,D=new G;function P(N){k.fromBufferAttribute(s,N),D.copy(k);const w=o[N];b.copy(w),b.sub(k.multiplyScalar(k.dot(w))).normalize(),y.crossVectors(D,w);const A=y.dot(c[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,A)}for(let N=0,w=E.length;N<w;++N){const x=E[N],A=x.start,C=x.count;for(let O=A,W=A+C;O<W;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,u=new G,h=new G;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new He(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new Me,mi=new ko,Qs=new Hs,yl=new G,tr=new G,er=new G,nr=new G,da=new G,ir=new G,Sl=new G,sr=new G;class ct extends Le{constructor(t=new Ce,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(da.fromBufferAttribute(h,t),a?ir.addScaledVector(da,u):ir.addScaledVector(da.sub(e),u))}e.add(ir)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Qs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Qs,yl)===null||mi.origin.distanceToSquared(yl)>(t.far-t.near)**2))&&(Ml.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Ml),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=E,k=b;y<k;y+=3){const D=o.getX(y),P=o.getX(y+1),N=o.getX(y+2);s=rr(this,p,t,i,l,u,h,D,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=rr(this,a,t,i,l,u,h,E,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=E,k=b;y<k;y+=3){const D=y,P=y+1,N=y+2;s=rr(this,p,t,i,l,u,h,D,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=g,b=g+1,y=g+2;s=rr(this,a,t,i,l,u,h,E,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function of(n,t,e,i,s,r,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===ui,o),c===null)return null;sr.copy(o),sr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(sr);return l<e.near||l>e.far?null:{distance:l,point:sr.clone(),object:n}}function rr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,tr),n.getVertexPosition(c,er),n.getVertexPosition(l,nr);const u=of(n,t,e,i,tr,er,nr,Sl);if(u){const h=new G;dn.getBarycoord(Sl,tr,er,nr,h),s&&(u.uv=dn.getInterpolatedAttribute(s,o,c,l,h,new Ct)),r&&(u.uv1=dn.getInterpolatedAttribute(r,o,c,l,h,new Ct)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,c,l,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new G,materialIndex:0};dn.getNormal(tr,er,nr,d.normal),u.face=d,u.barycoord=h}return u}class Ot extends Ce{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function m(_,g,p,E,b,y,k,D,P,N,w){const x=y/P,A=k/N,C=y/2,O=k/2,W=D/2,Z=P+1,K=N+1;let it=0,v=0;const U=new G;for(let F=0;F<K;F++){const B=F*A-O;for(let J=0;J<Z;J++){const Mt=J*x-C;U[_]=Mt*E,U[g]=B*b,U[p]=W,l.push(U.x,U.y,U.z),U[_]=0,U[g]=0,U[p]=D>0?1:-1,u.push(U.x,U.y,U.z),h.push(J/P),h.push(1-F/N),it+=1}}for(let F=0;F<N;F++)for(let B=0;B<P;B++){const J=d+B+Z*F,Mt=d+B+Z*(F+1),j=d+(B+1)+Z*(F+1),ut=d+(B+1)+Z*F;c.push(J,Mt,ut),c.push(Mt,j,ut),v+=6}o.addGroup(f,v,w),f+=v,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=os(n[e]);for(const s in i)t[s]=i[s]}return t}function lf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ou(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Rs={clone:os,merge:$e};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class lu extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new G,El=new Ct,wl=new Ct;class cn extends lu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,El,wl),e.subVectors(wl,El)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class hf extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const r=new cn(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const a=new cn(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const o=new cn(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const c=new cn(Hi,Vi,t,e);c.layers=this.layers,this.add(c);const l=new cn(Hi,Vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class cu extends Ke{constructor(t,e,i,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ff extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new cu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ot(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:nn});r.uniforms.tEquirect.value=e;const a=new ct(s,r),o=e.minFilter;return e.minFilter===En&&(e.minFilter=sn),new hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const pa=new G,df=new G,pf=new ie;class yi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=pa.subVectors(i,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(pa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pf.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Hs,ar=new G;class Ho{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,a=new yi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],E=s[13],b=s[14],y=s[15];if(i[0].setComponents(c-r,d-l,g-f,y-p).normalize(),i[1].setComponents(c+r,d+l,g+f,y+p).normalize(),i[2].setComponents(c+a,d+u,g+m,y+E).normalize(),i[3].setComponents(c-a,d-u,g-m,y-E).normalize(),i[4].setComponents(c-o,d-h,g-_,y-b).normalize(),e===Vn)i[5].setComponents(c+o,d+h,g+_,y+b).normalize();else if(e===Ur)i[5].setComponents(o,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function mf(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class be extends Ce{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const E=p*d-a;for(let b=0;b<l;b++){const y=b*h-r;m.push(y,-E,0),_.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const b=E+l*p,y=E+l*(p+1),k=E+1+l*(p+1),D=E+1+l*p;f.push(b,y,D),f.push(y,k,D)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
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
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,wp=`#define DISTANCE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#define LAMBERT
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
}`,Ip=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,Op=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:xf,alphatest_fragment:Mf,alphatest_pars_fragment:yf,aomap_fragment:Sf,aomap_pars_fragment:Ef,batching_pars_vertex:wf,batching_vertex:bf,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Uf,color_fragment:Nf,color_pars_fragment:Ff,color_pars_vertex:Of,color_vertex:zf,common:Bf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:ld,envmap_vertex:Jf,fog_vertex:Qf,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:ud,lights_phong_fragment:hd,lights_phong_pars_fragment:fd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:yd,map_fragment:Sd,map_pars_fragment:Ed,map_particle_fragment:wd,map_particle_pars_fragment:bd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Dd,morphtarget_vertex:Id,normal_fragment_begin:Ld,normal_fragment_maps:Ud,normal_pars_fragment:Nd,normal_pars_vertex:Fd,normal_vertex:Od,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:Zd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tp,skinbase_vertex:ep,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:sp,specularmap_fragment:rp,specularmap_pars_fragment:ap,tonemapping_fragment:op,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:up,uv_pars_fragment:hp,uv_pars_vertex:fp,uv_vertex:dp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:_p,backgroundCube_frag:vp,cube_vert:xp,cube_frag:Mp,depth_vert:yp,depth_frag:Sp,distanceRGBA_vert:Ep,distanceRGBA_frag:wp,equirect_vert:bp,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:Cp,meshbasic_frag:Pp,meshlambert_vert:Dp,meshlambert_frag:Ip,meshmatcap_vert:Lp,meshmatcap_frag:Up,meshnormal_vert:Np,meshnormal_frag:Fp,meshphong_vert:Op,meshphong_frag:zp,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Wp,shadow_vert:Xp,shadow_frag:qp,sprite_vert:Yp,sprite_frag:Zp},Pt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},An={basic:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:$e([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:$e([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:$e([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:$e([Pt.points,Pt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:$e([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:$e([Pt.common,Pt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:$e([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:$e([Pt.sprite,Pt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:$e([Pt.common,Pt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:$e([Pt.lights,Pt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};An.physical={uniforms:$e([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const or={r:0,b:0,g:0},_i=new Pn,Kp=new Me;function jp(n,t,e,i,s,r,a){const o=new Kt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const y=m(E);y===null?p(o,c):y&&y.isColor&&(p(y,1),b=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,b){const y=m(b);y&&(y.isCubeTexture||y.mapping===Vr)?(u===void 0&&(u=new ct(new Ot(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:os(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(b.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(_i)),u.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ct(new be(2,2),new pn({name:"BackgroundMaterial",uniforms:os(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,b){E.getRGB(or,ou(n)),i.buffers.color.setClear(or.r,or.g,or.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:g}}function $p(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(x,A,C,O,W){let Z=!1;const K=h(O,C,A);r!==K&&(r=K,l(r.object)),Z=f(x,O,C,W),Z&&m(x,O,C,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(x,A,C,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,A,C){const O=C.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let Z=W[A.id];Z===void 0&&(Z={},W[A.id]=Z);let K=Z[O];return K===void 0&&(K=d(c()),Z[O]=K),K}function d(x){const A=[],C=[],O=[];for(let W=0;W<e;W++)A[W]=0,C[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:C,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,A,C,O){const W=r.attributes,Z=A.attributes;let K=0;const it=C.getAttributes();for(const v in it)if(it[v].location>=0){const F=W[v];let B=Z[v];if(B===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(B=x.instanceColor)),F===void 0||F.attribute!==B||B&&F.data!==B.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function m(x,A,C,O){const W={},Z=A.attributes;let K=0;const it=C.getAttributes();for(const v in it)if(it[v].location>=0){let F=Z[v];F===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(F=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(F=x.instanceColor));const B={};B.attribute=F,F&&F.data&&(B.data=F.data),W[v]=B,K++}r.attributes=W,r.attributesNum=K,r.index=O}function _(){const x=r.newAttributes;for(let A=0,C=x.length;A<C;A++)x[A]=0}function g(x){p(x,0)}function p(x,A){const C=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;C[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),W[x]!==A&&(n.vertexAttribDivisor(x,A),W[x]=A)}function E(){const x=r.newAttributes,A=r.enabledAttributes;for(let C=0,O=A.length;C<O;C++)A[C]!==x[C]&&(n.disableVertexAttribArray(C),A[C]=0)}function b(x,A,C,O,W,Z,K){K===!0?n.vertexAttribIPointer(x,A,C,W,Z):n.vertexAttribPointer(x,A,C,O,W,Z)}function y(x,A,C,O){_();const W=O.attributes,Z=C.getAttributes(),K=A.defaultAttributeValues;for(const it in Z){const v=Z[it];if(v.location>=0){let U=W[it];if(U===void 0&&(it==="instanceMatrix"&&x.instanceMatrix&&(U=x.instanceMatrix),it==="instanceColor"&&x.instanceColor&&(U=x.instanceColor)),U!==void 0){const F=U.normalized,B=U.itemSize,J=t.get(U);if(J===void 0)continue;const Mt=J.buffer,j=J.type,ut=J.bytesPerElement,et=j===n.INT||j===n.UNSIGNED_INT||U.gpuType===Do;if(U.isInterleavedBufferAttribute){const st=U.data,_t=st.stride,wt=U.offset;if(st.isInstancedInterleavedBuffer){for(let Lt=0;Lt<v.locationSize;Lt++)p(v.location+Lt,st.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Lt=0;Lt<v.locationSize;Lt++)g(v.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Lt=0;Lt<v.locationSize;Lt++)b(v.location+Lt,B/v.locationSize,j,F,_t*ut,(wt+B/v.locationSize*Lt)*ut,et)}else{if(U.isInstancedBufferAttribute){for(let st=0;st<v.locationSize;st++)p(v.location+st,U.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let st=0;st<v.locationSize;st++)g(v.location+st);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let st=0;st<v.locationSize;st++)b(v.location+st,B/v.locationSize,j,F,B*ut,B/v.locationSize*st*ut,et)}}else if(K!==void 0){const F=K[it];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(v.location,F);break;case 3:n.vertexAttrib3fv(v.location,F);break;case 4:n.vertexAttrib4fv(v.location,F);break;default:n.vertexAttrib1fv(v.location,F)}}}}E()}function k(){N();for(const x in i){const A=i[x];for(const C in A){const O=A[C];for(const W in O)u(O[W].object),delete O[W];delete A[C]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;const A=i[x.id];for(const C in A){const O=A[C];for(const W in O)u(O[W].object),delete O[W];delete A[C]}delete i[x.id]}function P(x){for(const A in i){const C=i[A];if(C[x.id]===void 0)continue;const O=C[x.id];for(const W in O)u(O[W].object),delete O[W];delete C[x.id]}}function N(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function Jp(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Qp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Rn&&!N)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=m>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:k,maxSamples:D}}function t0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new yi,o=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const E=r?0:i,b=E*4;let y=p.clippingState||null;c.value=y,y=u(m,d,b,f);for(let k=0;k!==b;++k)y[k]=e[k];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function e0(n){let t=new WeakMap;function e(a,o){return o===qa?a.mapping=rs:o===Ya&&(a.mapping=as),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===qa||o===Ya)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ff(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vo extends lu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,bl=[.125,.215,.35,.446,.526,.582],wi=20,ma=new Vo,Tl=new Kt;let ga=null,_a=0,va=0,xa=!1;const Si=(1+Math.sqrt(5))/2,Gi=1/Si,Al=[new G(-Si,Gi,0),new G(Si,Gi,0),new G(-Gi,0,Si),new G(Gi,0,Si),new G(0,Si,-Gi),new G(0,Si,Gi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=xa,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ti,format:wn,colorSpace:hi,depthBuffer:!1},s=Rl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(r)),this._blurMaterial=i0(r,t,e)}return s}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,i,s){const o=new cn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Tl),u.toneMapping=li,u.autoClear=!1;const f=new oe({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new ct(new Ot,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Tl),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;lr(s,E*b,p>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rs||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;lr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ma)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Al[(s-r-1)%Al.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ct(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):wi;g>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);const p=[];let E=0;for(let P=0;P<wi;++P){const N=P/_,w=Math.exp(-N*N/2);p.push(w),P===0?E+=w:P<g&&(E+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-i;const y=this._sizeLods[s],k=3*y*(s>b-Qi?s-b+Qi:0),D=4*(this._cubeSize-y);lr(e,k,D,3*y,2*y),c.setRenderTarget(e),c.render(h,ma)}}function n0(n){const t=[],e=[],i=[];let s=n;const r=n-Qi+1+bl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Qi?c=bl[a-n+Qi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,E=new Float32Array(_*m*f),b=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let D=0;D<f;D++){const P=D%3*2/3-1,N=D>2?0:-1,w=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(w,_*m*D),b.set(d,g*m*D);const x=[D,D,D,D,D,D];y.set(x,p*m*D)}const k=new Ce;k.setAttribute("position",new He(E,_)),k.setAttribute("uv",new He(b,g)),k.setAttribute("faceIndex",new He(y,p)),t.push(k),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Rl(n,t,e){const i=new Yn(n,t,e);return i.texture.mapping=Vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function i0(n,t,e){const i=new Float32Array(wi),s=new G(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Go(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Cl(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Pl(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function s0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===qa||c===Ya,u=c===rs||c===as;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Eo(n)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Eo(n)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function r0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function a0(n,t,e,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)t.update(d[m],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let b=0,y=E.length;b<y;b+=3){const k=E[b+0],D=E[b+1],P=E[b+2];d.push(k,D,D,P,P,k)}}else if(m!==void 0){const E=m.array;_=m.version;for(let b=0,y=E.length/3-1;b<y;b+=3){const k=b+0,D=b+1,P=b+2;d.push(k,D,D,P,P,k)}}else return;const g=new(tu(d)?au:ru)(d,1);g.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function o0(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*a),e.update(f,i,1)}function l(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*a,m),e.update(f,i,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function h(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*_[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function l0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function c0(n,t,e){const i=new WeakMap,s=new xe;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let x=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let k=o.attributes.position.count*y,D=1;k>t.maxTextureSize&&(D=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const P=new Float32Array(k*D*4*h),N=new nu(P,k,D,h);N.type=Rn,N.needsUpdate=!0;const w=y*4;for(let A=0;A<h;A++){const C=p[A],O=E[A],W=b[A],Z=k*D*4*A;for(let K=0;K<C.count;K++){const it=K*w;m===!0&&(s.fromBufferAttribute(C,K),P[Z+it+0]=s.x,P[Z+it+1]=s.y,P[Z+it+2]=s.z,P[Z+it+3]=0),_===!0&&(s.fromBufferAttribute(O,K),P[Z+it+4]=s.x,P[Z+it+5]=s.y,P[Z+it+6]=s.z,P[Z+it+7]=0),g===!0&&(s.fromBufferAttribute(W,K),P[Z+it+8]=s.x,P[Z+it+9]=s.y,P[Z+it+10]=s.z,P[Z+it+11]=W.itemSize===4?s.w:1)}}d={count:h,texture:N,size:new Ct(k,D)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function u0(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Wo extends Ke{constructor(t,e,i,s,r,a,o,c,l,u=ns){if(u!==ns&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ns&&(i=bi),i===void 0&&u===Ri&&(i=Ai),super(null,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hu=new Ke,Dl=new Wo(1,1),fu=new nu,du=new jh,pu=new cu,Il=[],Ll=[],Ul=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function hs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wr(n,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function h0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function f0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function d0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function p0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function m0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;Fl.set(i),n.uniformMatrix2fv(this.addr,!1,Fl),Fe(e,i)}}function g0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;Nl.set(i),n.uniformMatrix3fv(this.addr,!1,Nl),Fe(e,i)}}function _0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;Ul.set(i),n.uniformMatrix4fv(this.addr,!1,Ul),Fe(e,i)}}function v0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function x0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function M0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function S0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function E0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function w0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function b0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function T0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dl.compareFunction=Qc,r=Dl):r=hu,e.setTexture2D(t||r,s)}function A0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||du,s)}function R0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||pu,s)}function C0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||fu,s)}function P0(n){switch(n){case 5126:return h0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return M0;case 35669:case 35673:return y0;case 5125:return S0;case 36294:return E0;case 36295:return w0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function D0(n,t){n.uniform1fv(this.addr,t)}function I0(n,t){const e=hs(t,this.size,2);n.uniform2fv(this.addr,e)}function L0(n,t){const e=hs(t,this.size,3);n.uniform3fv(this.addr,e)}function U0(n,t){const e=hs(t,this.size,4);n.uniform4fv(this.addr,e)}function N0(n,t){const e=hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function F0(n,t){const e=hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function O0(n,t){const e=hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function z0(n,t){n.uniform1iv(this.addr,t)}function B0(n,t){n.uniform2iv(this.addr,t)}function k0(n,t){n.uniform3iv(this.addr,t)}function H0(n,t){n.uniform4iv(this.addr,t)}function V0(n,t){n.uniform1uiv(this.addr,t)}function G0(n,t){n.uniform2uiv(this.addr,t)}function W0(n,t){n.uniform3uiv(this.addr,t)}function X0(n,t){n.uniform4uiv(this.addr,t)}function q0(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||hu,r[a])}function Y0(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||du,r[a])}function Z0(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||pu,r[a])}function K0(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fu,r[a])}function j0(n){switch(n){case 5126:return D0;case 35664:return I0;case 35665:return L0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return z0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return G0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return K0}}class $0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}}class J0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j0(e.type)}}class Q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Ol(n,t){n.seq.push(t),n.map[t.id]=t}function tm(n,t,e){const i=n.name,s=i.length;for(Ma.lastIndex=0;;){const r=Ma.exec(i),a=Ma.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ol(e,l===void 0?new $0(o,n,t):new J0(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new Q0(o),Ol(e,h)),e=h}}}class Ir{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tm(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function zl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const em=37297;let nm=0;function im(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Bl=new ie;function sm(n){ce._getMatrix(Bl,ce.workingColorSpace,n);const t=`mat3( ${Bl.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case Gr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+im(n.getShaderSource(t),a)}else return s}function rm(n,t){const e=sm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function am(n,t){let e;switch(t){case lh:e="Linear";break;case ch:e="Reinhard";break;case uh:e="Cineon";break;case Vc:e="ACESFilmic";break;case fh:e="AgX";break;case dh:e="Neutral";break;case hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new G;function om(){ce.getLuminanceCoefficients(cr);const n=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function cm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function um(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Cs(n){return n!==""}function Hl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(n){return n.replace(hm,dm)}const fm=new Map;function dm(n,t){let e=ne[t];if(e===void 0){const i=fm.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wo(e)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(n){return n.replace(pm,mm)}function mm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function _m(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function xm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case ah:t="ENVMAP_BLENDING_MIX";break;case oh:t="ENVMAP_BLENDING_ADD";break}return t}function Mm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ym(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=gm(e),l=_m(e),u=vm(e),h=xm(e),d=Mm(e),f=lm(e),m=cm(r),_=s.createProgram();let g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(g=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?ne.tonemapping_pars_fragment:"",e.toneMapping!==li?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),om(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),a=wo(a),a=Hl(a,e),a=Vl(a,e),o=wo(o),o=Hl(o,e),o=Vl(o,e),a=Gl(a),o=Gl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+g+a,y=E+p+o,k=zl(s,s.VERTEX_SHADER,b),D=zl(s,s.FRAGMENT_SHADER,y);s.attachShader(_,k),s.attachShader(_,D),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(A){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(k).trim(),W=s.getShaderInfoLog(D).trim();let Z=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,k,D);else{const it=kl(s,k,"vertex"),v=kl(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+it+`
`+v)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||W==="")&&(K=!1);K&&(A.diagnostics={runnable:Z,programLog:C,vertexShader:{log:O,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(k),s.deleteShader(D),N=new Ir(s,_),w=um(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,em)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=D,this}let Sm=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new wm(t),e.set(t,i)),i}}class wm{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function bm(n,t,e,i,s,r,a){const o=new iu,c=new Em,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,x,A,C,O){const W=C.fog,Z=O.geometry,K=w.isMeshStandardMaterial?C.environment:null,it=(w.isMeshStandardMaterial?e:t).get(w.envMap||K),v=it&&it.mapping===Vr?it.image.height:null,U=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const F=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,B=F!==void 0?F.length:0;let J=0;Z.morphAttributes.position!==void 0&&(J=1),Z.morphAttributes.normal!==void 0&&(J=2),Z.morphAttributes.color!==void 0&&(J=3);let Mt,j,ut,et;if(U){const le=An[U];Mt=le.vertexShader,j=le.fragmentShader}else Mt=w.vertexShader,j=w.fragmentShader,c.update(w),ut=c.getVertexShaderID(w),et=c.getFragmentShaderID(w);const st=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),wt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,ft=!!w.map,Wt=!!w.matcap,Nt=!!it,z=!!w.aoMap,ee=!!w.lightMap,Xt=!!w.bumpMap,kt=!!w.normalMap,bt=!!w.displacementMap,Ht=!!w.emissiveMap,Et=!!w.metalnessMap,R=!!w.roughnessMap,M=w.anisotropy>0,q=w.clearcoat>0,tt=w.dispersion>0,rt=w.iridescence>0,nt=w.sheen>0,Ut=w.transmission>0,xt=M&&!!w.anisotropyMap,yt=q&&!!w.clearcoatMap,Vt=q&&!!w.clearcoatNormalMap,ot=q&&!!w.clearcoatRoughnessMap,St=rt&&!!w.iridescenceMap,zt=rt&&!!w.iridescenceThicknessMap,Gt=nt&&!!w.sheenColorMap,Dt=nt&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Yt=!!w.specularColorMap,Qt=!!w.specularIntensityMap,H=Ut&&!!w.transmissionMap,vt=Ut&&!!w.thicknessMap,$=!!w.gradientMap,lt=!!w.alphaMap,Rt=w.alphaTest>0,Tt=!!w.alphaHash,Zt=!!w.extensions;let Ee=li;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ee=n.toneMapping);const Pe={shaderID:U,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:j,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:wt,instancingColor:wt&&O.instanceColor!==null,instancingMorph:wt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:hi,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:Wt,envMap:Nt,envMapMode:Nt&&it.mapping,envMapCubeUVHeight:v,aoMap:z,lightMap:ee,bumpMap:Xt,normalMap:kt,displacementMap:d&&bt,emissiveMap:Ht,normalMapObjectSpace:kt&&w.normalMapType===_h,normalMapTangentSpace:kt&&w.normalMapType===zo,metalnessMap:Et,roughnessMap:R,anisotropy:M,anisotropyMap:xt,clearcoat:q,clearcoatMap:yt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:rt,iridescenceMap:St,iridescenceThicknessMap:zt,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:Dt,specularMap:jt,specularColorMap:Yt,specularIntensityMap:Qt,transmission:Ut,transmissionMap:H,thicknessMap:vt,gradientMap:$,opaque:w.transparent===!1&&w.blending===es&&w.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:Tt,combine:w.combine,mapUv:ft&&_(w.map.channel),aoMapUv:z&&_(w.aoMap.channel),lightMapUv:ee&&_(w.lightMap.channel),bumpMapUv:Xt&&_(w.bumpMap.channel),normalMapUv:kt&&_(w.normalMap.channel),displacementMapUv:bt&&_(w.displacementMap.channel),emissiveMapUv:Ht&&_(w.emissiveMap.channel),metalnessMapUv:Et&&_(w.metalnessMap.channel),roughnessMapUv:R&&_(w.roughnessMap.channel),anisotropyMapUv:xt&&_(w.anisotropyMap.channel),clearcoatMapUv:yt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(w.sheenRoughnessMap.channel),specularMapUv:jt&&_(w.specularMap.channel),specularColorMapUv:Yt&&_(w.specularColorMap.channel),specularIntensityMapUv:Qt&&_(w.specularIntensityMap.channel),transmissionMapUv:H&&_(w.transmissionMap.channel),thicknessMapUv:vt&&_(w.thicknessMap.channel),alphaMapUv:lt&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(kt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(ft||lt),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_t,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&ce.getTransfer(w.map.colorSpace)===ve,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&ce.getTransfer(w.emissiveMap.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ze,flipSided:w.side===We,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)x.push(A),x.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(E(x,w),b(x,w),x.push(n.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function E(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function b(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const x=m[w.type];let A;if(x){const C=An[x];A=Rs.clone(C.uniforms)}else A=w.uniforms;return A}function k(w,x){let A;for(let C=0,O=u.length;C<O;C++){const W=u[C];if(W.cacheKey===x){A=W,++A.usedTimes;break}}return A===void 0&&(A=new ym(n,x,w,r),u.push(A)),A}function D(w){if(--w.usedTimes===0){const x=u.indexOf(w);u[x]=u[u.length-1],u.pop(),w.destroy()}}function P(w){c.remove(w)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:k,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:N}}function Tm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Am(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ql(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,d,f,m,_,g){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function o(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||Am),i.length>1&&i.sort(d||Xl),s.length>1&&s.sort(d||Xl)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Rm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new ql,n.set(i,[a])):s>=r.length?(a=new ql,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Cm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Kt};break;case"SpotLight":e={position:new G,direction:new G,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function Pm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Dm=0;function Im(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lm(n){const t=new Cm,e=Pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const s=new G,r=new Me,a=new Me;function o(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,b=0,y=0,k=0,D=0,P=0;l.sort(Im);for(let w=0,x=l.length;w<x;w++){const A=l[w],C=A.color,O=A.intensity,W=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=C.r*O,h+=C.g*O,d+=C.b*O;else if(A.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(A.sh.coefficients[K],O);P++}else if(A.isDirectionalLight){const K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const it=A.shadow,v=e.get(A);v.shadowIntensity=it.intensity,v.shadowBias=it.bias,v.shadowNormalBias=it.normalBias,v.shadowRadius=it.radius,v.shadowMapSize=it.mapSize,i.directionalShadow[f]=v,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=A.shadow.matrix,E++}i.directional[f]=K,f++}else if(A.isSpotLight){const K=t.get(A);K.position.setFromMatrixPosition(A.matrixWorld),K.color.copy(C).multiplyScalar(O),K.distance=W,K.coneCos=Math.cos(A.angle),K.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),K.decay=A.decay,i.spot[_]=K;const it=A.shadow;if(A.map&&(i.spotLightMap[k]=A.map,k++,it.updateMatrices(A),A.castShadow&&D++),i.spotLightMatrix[_]=it.matrix,A.castShadow){const v=e.get(A);v.shadowIntensity=it.intensity,v.shadowBias=it.bias,v.shadowNormalBias=it.normalBias,v.shadowRadius=it.radius,v.shadowMapSize=it.mapSize,i.spotShadow[_]=v,i.spotShadowMap[_]=Z,y++}_++}else if(A.isRectAreaLight){const K=t.get(A);K.color.copy(C).multiplyScalar(O),K.halfWidth.set(A.width*.5,0,0),K.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=K,g++}else if(A.isPointLight){const K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),K.distance=A.distance,K.decay=A.decay,A.castShadow){const it=A.shadow,v=e.get(A);v.shadowIntensity=it.intensity,v.shadowBias=it.bias,v.shadowNormalBias=it.normalBias,v.shadowRadius=it.radius,v.shadowMapSize=it.mapSize,v.shadowCameraNear=it.camera.near,v.shadowCameraFar=it.camera.far,i.pointShadow[m]=v,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=A.shadow.matrix,b++}i.point[m]=K,m++}else if(A.isHemisphereLight){const K=t.get(A);K.skyColor.copy(A.color).multiplyScalar(O),K.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[p]=K,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==y||N.numSpotMaps!==k||N.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+k-D,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,N.directionalLength=f,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=y,N.numSpotMaps=k,N.numLightProbes=P,i.version=Dm++)}function c(l,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(b.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:i}}function Yl(n){const t=new Lm(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Um(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Yl(n),t.set(s,[o])):r>=a.length?(o=new Yl(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Nm extends Kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fm extends Kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
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
}`;function Bm(n,t,e){let i=new Ho;const s=new Ct,r=new Ct,a=new xe,o=new Nm({depthPacking:gh}),c=new Fm,l={},u=e.maxTextureSize,h={[ui]:We,[We]:ui,[Ze]:Ze},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Om,fragmentShader:zm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let p=this.type;this.render=function(D,P,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const w=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),C=n.state;C.setBlending(nn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const O=p!==On&&this.type===On,W=p===On&&this.type!==On;for(let Z=0,K=D.length;Z<K;Z++){const it=D[Z],v=it.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;s.copy(v.mapSize);const U=v.getFrameExtents();if(s.multiply(U),r.copy(v.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/U.x),s.x=r.x*U.x,v.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/U.y),s.y=r.y*U.y,v.mapSize.y=r.y)),v.map===null||O===!0||W===!0){const B=this.type!==On?{minFilter:Je,magFilter:Je}:{};v.map!==null&&v.map.dispose(),v.map=new Yn(s.x,s.y,B),v.map.texture.name=it.name+".shadowMap",v.camera.updateProjectionMatrix()}n.setRenderTarget(v.map),n.clear();const F=v.getViewportCount();for(let B=0;B<F;B++){const J=v.getViewport(B);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),C.viewport(a),v.updateMatrices(it,B),i=v.getFrustum(),y(P,N,v.camera,it,this.type)}v.isPointLightShadow!==!0&&this.type===On&&E(v,N),v.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,x,A)};function E(D,P){const N=t.update(_);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,N,d,_,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,N,f,_,null)}function b(D,P,N,w){let x=null;const A=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)x=A;else if(x=N.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const C=x.uuid,O=P.uuid;let W=l[C];W===void 0&&(W={},l[C]=W);let Z=W[O];Z===void 0&&(Z=x.clone(),W[O]=Z,P.addEventListener("dispose",k)),x=Z}if(x.visible=P.visible,x.wireframe=P.wireframe,w===On?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:h[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const C=n.properties.get(x);C.light=N}return x}function y(D,P,N,w,x){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===On)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const O=t.update(D),W=D.material;if(Array.isArray(W)){const Z=O.groups;for(let K=0,it=Z.length;K<it;K++){const v=Z[K],U=W[v.materialIndex];if(U&&U.visible){const F=b(D,U,w,x);D.onBeforeShadow(n,D,P,N,O,F,v),n.renderBufferDirect(N,null,O,F,D,v),D.onAfterShadow(n,D,P,N,O,F,v)}}}else if(W.visible){const Z=b(D,W,w,x);D.onBeforeShadow(n,D,P,N,O,Z,null),n.renderBufferDirect(N,null,O,Z,D,null),D.onAfterShadow(n,D,P,N,O,Z,null)}}const C=D.children;for(let O=0,W=C.length;O<W;O++)y(C[O],P,N,w,x)}function k(D){D.target.removeEventListener("dispose",k);for(const N in l){const w=l[N],x=D.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const km={[Ba]:ka,[Ha]:Wa,[Va]:Xa,[ss]:Ga,[ka]:Ba,[Wa]:Ha,[Xa]:Va,[Ga]:ss};function Hm(n,t){function e(){let H=!1;const vt=new xe;let $=null;const lt=new xe(0,0,0,0);return{setMask:function(Rt){$!==Rt&&!H&&(n.colorMask(Rt,Rt,Rt,Rt),$=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,Tt,Zt,Ee,Pe){Pe===!0&&(Rt*=Ee,Tt*=Ee,Zt*=Ee),vt.set(Rt,Tt,Zt,Ee),lt.equals(vt)===!1&&(n.clearColor(Rt,Tt,Zt,Ee),lt.copy(vt))},reset:function(){H=!1,$=null,lt.set(-1,0,0,0)}}}function i(){let H=!1,vt=!1,$=null,lt=null,Rt=null;return{setReversed:function(Tt){if(vt!==Tt){const Zt=t.get("EXT_clip_control");vt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=Rt;Rt=null,this.setClear(Ee)}vt=Tt},getReversed:function(){return vt},setTest:function(Tt){Tt?st(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Tt){$!==Tt&&!H&&(n.depthMask(Tt),$=Tt)},setFunc:function(Tt){if(vt&&(Tt=km[Tt]),lt!==Tt){switch(Tt){case Ba:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Ga:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=Tt}},setLocked:function(Tt){H=Tt},setClear:function(Tt){Rt!==Tt&&(vt&&(Tt=1-Tt),n.clearDepth(Tt),Rt=Tt)},reset:function(){H=!1,$=null,lt=null,Rt=null,vt=!1}}}function s(){let H=!1,vt=null,$=null,lt=null,Rt=null,Tt=null,Zt=null,Ee=null,Pe=null;return{setTest:function(le){H||(le?st(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(le){vt!==le&&!H&&(n.stencilMask(le),vt=le)},setFunc:function(le,at,mt){($!==le||lt!==at||Rt!==mt)&&(n.stencilFunc(le,at,mt),$=le,lt=at,Rt=mt)},setOp:function(le,at,mt){(Tt!==le||Zt!==at||Ee!==mt)&&(n.stencilOp(le,at,mt),Tt=le,Zt=at,Ee=mt)},setLocked:function(le){H=le},setClear:function(le){Pe!==le&&(n.clearStencil(le),Pe=le)},reset:function(){H=!1,vt=null,$=null,lt=null,Rt=null,Tt=null,Zt=null,Ee=null,Pe=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,b=null,y=null,k=null,D=null,P=new Kt(0,0,0),N=0,w=!1,x=null,A=null,C=null,O=null,W=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,it=0;const v=n.getParameter(n.VERSION);v.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(v)[1]),K=it>=1):v.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),K=it>=2);let U=null,F={};const B=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Mt=new xe().fromArray(B),j=new xe().fromArray(J);function ut(H,vt,$,lt){const Rt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(H,Tt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<$;Zt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(vt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Tt}const et={};et[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(ss),Xt(!1),kt(Qo),st(n.CULL_FACE),z(nn);function st(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function _t(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function wt(H,vt){return h[H]!==vt?(n.bindFramebuffer(H,vt),h[H]=vt,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function Lt(H,vt){let $=f,lt=!1;if(H){$=d.get(vt),$===void 0&&($=[],d.set(vt,$));const Rt=H.textures;if($.length!==Rt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Zt=Rt.length;Tt<Zt;Tt++)$[Tt]=n.COLOR_ATTACHMENT0+Tt;$.length=Rt.length,lt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,lt=!0);lt&&n.drawBuffers($)}function ft(H){return m!==H?(n.useProgram(H),m=H,!0):!1}const Wt={[Bn]:n.FUNC_ADD,[qu]:n.FUNC_SUBTRACT,[Yu]:n.FUNC_REVERSE_SUBTRACT};Wt[Zu]=n.MIN,Wt[Ku]=n.MAX;const Nt={[Fa]:n.ZERO,[ju]:n.ONE,[$u]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[eh]:n.SRC_ALPHA_SATURATE,[kc]:n.DST_COLOR,[Bc]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[th]:n.ONE_MINUS_DST_COLOR,[Qu]:n.ONE_MINUS_DST_ALPHA,[nh]:n.CONSTANT_COLOR,[ih]:n.ONE_MINUS_CONSTANT_COLOR,[sh]:n.CONSTANT_ALPHA,[rh]:n.ONE_MINUS_CONSTANT_ALPHA};function z(H,vt,$,lt,Rt,Tt,Zt,Ee,Pe,le){if(H===nn){_===!0&&(_t(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),H!==zc){if(H!==g||le!==w){if((p!==Bn||y!==Bn)&&(n.blendEquation(n.FUNC_ADD),p=Bn,y=Bn),le)switch(H){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lr:n.blendFunc(n.ONE,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case el:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case el:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,b=null,k=null,D=null,P.set(0,0,0),N=0,g=H,w=le}return}Rt=Rt||vt,Tt=Tt||$,Zt=Zt||lt,(vt!==p||Rt!==y)&&(n.blendEquationSeparate(Wt[vt],Wt[Rt]),p=vt,y=Rt),($!==E||lt!==b||Tt!==k||Zt!==D)&&(n.blendFuncSeparate(Nt[$],Nt[lt],Nt[Tt],Nt[Zt]),E=$,b=lt,k=Tt,D=Zt),(Ee.equals(P)===!1||Pe!==N)&&(n.blendColor(Ee.r,Ee.g,Ee.b,Pe),P.copy(Ee),N=Pe),g=H,w=!1}function ee(H,vt){H.side===Ze?_t(n.CULL_FACE):st(n.CULL_FACE);let $=H.side===We;vt&&($=!$),Xt($),H.blending===es&&H.transparent===!1?z(nn):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const lt=H.stencilWrite;o.setTest(lt),lt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(H){x!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),x=H)}function kt(H){H!==Wu?(st(n.CULL_FACE),H!==A&&(H===Qo?n.cullFace(n.BACK):H===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),A=H}function bt(H){H!==C&&(K&&n.lineWidth(H),C=H)}function Ht(H,vt,$){H?(st(n.POLYGON_OFFSET_FILL),(O!==vt||W!==$)&&(n.polygonOffset(vt,$),O=vt,W=$)):_t(n.POLYGON_OFFSET_FILL)}function Et(H){H?st(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function R(H){H===void 0&&(H=n.TEXTURE0+Z-1),U!==H&&(n.activeTexture(H),U=H)}function M(H,vt,$){$===void 0&&(U===null?$=n.TEXTURE0+Z-1:$=U);let lt=F[$];lt===void 0&&(lt={type:void 0,texture:void 0},F[$]=lt),(lt.type!==H||lt.texture!==vt)&&(U!==$&&(n.activeTexture($),U=$),n.bindTexture(H,vt||et[H]),lt.type=H,lt.texture=vt)}function q(){const H=F[U];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(H){Mt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Mt.copy(H))}function Dt(H){j.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function jt(H,vt){let $=l.get(vt);$===void 0&&($=new WeakMap,l.set(vt,$));let lt=$.get(H);lt===void 0&&(lt=n.getUniformBlockIndex(vt,H.name),$.set(H,lt))}function Yt(H,vt){const lt=l.get(vt).get(H);c.get(vt)!==lt&&(n.uniformBlockBinding(vt,lt,H.__bindingPointIndex),c.set(vt,lt))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},U=null,F={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,b=null,y=null,k=null,D=null,P=new Kt(0,0,0),N=0,w=!1,x=null,A=null,C=null,O=null,W=null,Mt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:_t,bindFramebuffer:wt,drawBuffers:Lt,useProgram:ft,setBlending:z,setMaterial:ee,setFlipSided:Xt,setCullFace:kt,setLineWidth:bt,setPolygonOffset:Ht,setScissorTest:Et,activeTexture:R,bindTexture:M,unbindTexture:q,compressedTexImage2D:tt,compressedTexImage3D:rt,texImage2D:St,texImage3D:zt,updateUBOMapping:jt,uniformBlockBinding:Yt,texStorage2D:Vt,texStorage3D:ot,texSubImage2D:nt,texSubImage3D:Ut,compressedTexSubImage2D:xt,compressedTexSubImage3D:yt,scissor:Gt,viewport:Dt,reset:Qt}}function Zl(n,t,e,i){const s=Vm(i);switch(e){case Yc:return n*t;case Kc:return n*t;case jc:return n*t*2;case Uo:return n*t/s.components*s.byteLength;case No:return n*t/s.components*s.byteLength;case $c:return n*t*2/s.components*s.byteLength;case Fo:return n*t*2/s.components*s.byteLength;case Zc:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case Oo:return n*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ja:case Ja:return Math.max(n,16)*Math.max(t,8)/4;case Ka:case $a:return Math.max(n,8)*Math.max(t,8)/2;case Qa:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Dr:case _o:case vo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jc:case xo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Mo:case yo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vm(n){switch(n){case qn:case Wc:return{byteLength:1,components:1};case Fs:case Xc:case Ti:return{byteLength:2,components:1};case Io:case Lo:return{byteLength:2,components:4};case bi:case Do:case Rn:return{byteLength:4,components:1};case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Gm(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function m(R,M){return f?new OffscreenCanvas(R,M):Nr("canvas")}function _(R,M,q){let tt=1;const rt=Et(R);if((rt.width>q||rt.height>q)&&(tt=q/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const nt=Math.floor(tt*rt.width),Ut=Math.floor(tt*rt.height);h===void 0&&(h=m(nt,Ut));const xt=M?m(nt,Ut):h;return xt.width=nt,xt.height=Ut,xt.getContext("2d").drawImage(R,0,0,nt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Ut+")."),xt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,M,q,tt,rt=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=M;if(M===n.RED&&(q===n.FLOAT&&(nt=n.R32F),q===n.HALF_FLOAT&&(nt=n.R16F),q===n.UNSIGNED_BYTE&&(nt=n.R8)),M===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(nt=n.R8UI),q===n.UNSIGNED_SHORT&&(nt=n.R16UI),q===n.UNSIGNED_INT&&(nt=n.R32UI),q===n.BYTE&&(nt=n.R8I),q===n.SHORT&&(nt=n.R16I),q===n.INT&&(nt=n.R32I)),M===n.RG&&(q===n.FLOAT&&(nt=n.RG32F),q===n.HALF_FLOAT&&(nt=n.RG16F),q===n.UNSIGNED_BYTE&&(nt=n.RG8)),M===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(nt=n.RG8UI),q===n.UNSIGNED_SHORT&&(nt=n.RG16UI),q===n.UNSIGNED_INT&&(nt=n.RG32UI),q===n.BYTE&&(nt=n.RG8I),q===n.SHORT&&(nt=n.RG16I),q===n.INT&&(nt=n.RG32I)),M===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),q===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),q===n.UNSIGNED_INT&&(nt=n.RGB32UI),q===n.BYTE&&(nt=n.RGB8I),q===n.SHORT&&(nt=n.RGB16I),q===n.INT&&(nt=n.RGB32I)),M===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),q===n.UNSIGNED_INT&&(nt=n.RGBA32UI),q===n.BYTE&&(nt=n.RGBA8I),q===n.SHORT&&(nt=n.RGBA16I),q===n.INT&&(nt=n.RGBA32I)),M===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),M===n.RGBA){const Ut=rt?Gr:ce.getTransfer(tt);q===n.FLOAT&&(nt=n.RGBA32F),q===n.HALF_FLOAT&&(nt=n.RGBA16F),q===n.UNSIGNED_BYTE&&(nt=Ut===ve?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(R,M){let q;return R?M===null||M===bi||M===Ai?q=n.DEPTH24_STENCIL8:M===Rn?q=n.DEPTH32F_STENCIL8:M===Fs&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===Ai?q=n.DEPTH_COMPONENT24:M===Rn?q=n.DEPTH_COMPONENT32F:M===Fs&&(q=n.DEPTH_COMPONENT16),q}function k(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Je&&R.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function D(R){const M=R.target;M.removeEventListener("dispose",D),N(M),M.isVideoTexture&&u.delete(M)}function P(R){const M=R.target;M.removeEventListener("dispose",P),x(M)}function N(R){const M=i.get(R);if(M.__webglInit===void 0)return;const q=R.source,tt=d.get(q);if(tt){const rt=tt[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(R),Object.keys(tt).length===0&&d.delete(q)}i.remove(R)}function w(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const q=R.source,tt=d.get(q);delete tt[M.__cacheKey],a.memory.textures--}function x(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let rt=0;rt<M.__webglFramebuffer[tt].length;rt++)n.deleteFramebuffer(M.__webglFramebuffer[tt][rt]);else n.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)n.deleteFramebuffer(M.__webglFramebuffer[tt]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=R.textures;for(let tt=0,rt=q.length;tt<rt;tt++){const nt=i.get(q[tt]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),a.memory.textures--),i.remove(q[tt])}i.remove(R)}let A=0;function C(){A=0}function O(){const R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Z(R,M){const q=i.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(q,R,M);return}}e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+M)}function K(R,M){const q=i.get(R);if(R.version>0&&q.__version!==R.version){j(q,R,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+M)}function it(R,M){const q=i.get(R);if(R.version>0&&q.__version!==R.version){j(q,R,M);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+M)}function v(R,M){const q=i.get(R);if(R.version>0&&q.__version!==R.version){ut(q,R,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+M)}const U={[Cn]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},F={[Je]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[Gs]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Zr]:n.LINEAR_MIPMAP_NEAREST,[En]:n.LINEAR_MIPMAP_LINEAR},B={[vh]:n.NEVER,[wh]:n.ALWAYS,[xh]:n.LESS,[Qc]:n.LEQUAL,[Mh]:n.EQUAL,[Eh]:n.GEQUAL,[yh]:n.GREATER,[Sh]:n.NOTEQUAL};function J(R,M){if(M.type===Rn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Zr||M.magFilter===Gs||M.magFilter===En||M.minFilter===sn||M.minFilter===Zr||M.minFilter===Gs||M.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,U[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,U[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,U[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,F[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==Gs&&M.minFilter!==En||M.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Mt(R,M){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",D));const tt=M.source;let rt=d.get(tt);rt===void 0&&(rt={},d.set(tt,rt));const nt=W(M);if(nt!==R.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),rt[nt].usedTimes++;const Ut=rt[R.__cacheKey];Ut!==void 0&&(rt[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&w(M)),R.__cacheKey=nt,R.__webglTexture=rt[nt].texture}return q}function j(R,M,q){let tt=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=n.TEXTURE_3D);const rt=Mt(R,M),nt=M.source;e.bindTexture(tt,R.__webglTexture,n.TEXTURE0+q);const Ut=i.get(nt);if(nt.version!==Ut.__version||rt===!0){e.activeTexture(n.TEXTURE0+q);const xt=ce.getPrimaries(ce.workingColorSpace),yt=M.colorSpace===kn?null:ce.getPrimaries(M.colorSpace),Vt=M.colorSpace===kn||xt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let ot=_(M.image,!1,s.maxTextureSize);ot=Ht(M,ot);const St=r.convert(M.format,M.colorSpace),zt=r.convert(M.type);let Gt=b(M.internalFormat,St,zt,M.colorSpace,M.isVideoTexture);J(tt,M);let Dt;const jt=M.mipmaps,Yt=M.isVideoTexture!==!0,Qt=Ut.__version===void 0||rt===!0,H=nt.dataReady,vt=k(M,ot);if(M.isDepthTexture)Gt=y(M.format===Ri,M.type),Qt&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Gt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Gt,ot.width,ot.height,0,St,zt,null));else if(M.isDataTexture)if(jt.length>0){Yt&&Qt&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,jt[0].width,jt[0].height);for(let $=0,lt=jt.length;$<lt;$++)Dt=jt[$],Yt?H&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Dt.width,Dt.height,St,zt,Dt.data):e.texImage2D(n.TEXTURE_2D,$,Gt,Dt.width,Dt.height,0,St,zt,Dt.data);M.generateMipmaps=!1}else Yt?(Qt&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,ot.width,ot.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,St,zt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,ot.width,ot.height,0,St,zt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,jt[0].width,jt[0].height,ot.depth);for(let $=0,lt=jt.length;$<lt;$++)if(Dt=jt[$],M.format!==wn)if(St!==null)if(Yt){if(H)if(M.layerUpdates.size>0){const Rt=Zl(Dt.width,Dt.height,M.format,M.type);for(const Tt of M.layerUpdates){const Zt=Dt.data.subarray(Tt*Rt/Dt.data.BYTES_PER_ELEMENT,(Tt+1)*Rt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Tt,Dt.width,Dt.height,1,St,Zt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Dt.width,Dt.height,ot.depth,St,Dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Gt,Dt.width,Dt.height,ot.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Dt.width,Dt.height,ot.depth,St,zt,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Gt,Dt.width,Dt.height,ot.depth,0,St,zt,Dt.data)}else{Yt&&Qt&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,jt[0].width,jt[0].height);for(let $=0,lt=jt.length;$<lt;$++)Dt=jt[$],M.format!==wn?St!==null?Yt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Dt.width,Dt.height,St,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Gt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?H&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Dt.width,Dt.height,St,zt,Dt.data):e.texImage2D(n.TEXTURE_2D,$,Gt,Dt.width,Dt.height,0,St,zt,Dt.data)}else if(M.isDataArrayTexture)if(Yt){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,ot.width,ot.height,ot.depth),H)if(M.layerUpdates.size>0){const $=Zl(ot.width,ot.height,M.format,M.type);for(const lt of M.layerUpdates){const Rt=ot.data.subarray(lt*$/ot.data.BYTES_PER_ELEMENT,(lt+1)*$/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,ot.width,ot.height,1,St,zt,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,zt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,ot.width,ot.height,ot.depth,0,St,zt,ot.data);else if(M.isData3DTexture)Yt?(Qt&&e.texStorage3D(n.TEXTURE_3D,vt,Gt,ot.width,ot.height,ot.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,zt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,ot.width,ot.height,ot.depth,0,St,zt,ot.data);else if(M.isFramebufferTexture){if(Qt)if(Yt)e.texStorage2D(n.TEXTURE_2D,vt,Gt,ot.width,ot.height);else{let $=ot.width,lt=ot.height;for(let Rt=0;Rt<vt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Gt,$,lt,0,St,zt,null),$>>=1,lt>>=1}}else if(jt.length>0){if(Yt&&Qt){const $=Et(jt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Gt,$.width,$.height)}for(let $=0,lt=jt.length;$<lt;$++)Dt=jt[$],Yt?H&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,St,zt,Dt):e.texImage2D(n.TEXTURE_2D,$,Gt,St,zt,Dt);M.generateMipmaps=!1}else if(Yt){if(Qt){const $=Et(ot);e.texStorage2D(n.TEXTURE_2D,vt,Gt,$.width,$.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,zt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Gt,St,zt,ot);g(M)&&p(tt),Ut.__version=nt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ut(R,M,q){if(M.image.length!==6)return;const tt=Mt(R,M),rt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);const nt=i.get(rt);if(rt.version!==nt.__version||tt===!0){e.activeTexture(n.TEXTURE0+q);const Ut=ce.getPrimaries(ce.workingColorSpace),xt=M.colorSpace===kn?null:ce.getPrimaries(M.colorSpace),yt=M.colorSpace===kn||Ut===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,St=[];for(let lt=0;lt<6;lt++)!Vt&&!ot?St[lt]=_(M.image[lt],!0,s.maxCubemapSize):St[lt]=ot?M.image[lt].image:M.image[lt],St[lt]=Ht(M,St[lt]);const zt=St[0],Gt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type),jt=b(M.internalFormat,Gt,Dt,M.colorSpace),Yt=M.isVideoTexture!==!0,Qt=nt.__version===void 0||tt===!0,H=rt.dataReady;let vt=k(M,zt);J(n.TEXTURE_CUBE_MAP,M);let $;if(Vt){Yt&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,jt,zt.width,zt.height);for(let lt=0;lt<6;lt++){$=St[lt].mipmaps;for(let Rt=0;Rt<$.length;Rt++){const Tt=$[Rt];M.format!==wn?Gt!==null?Yt?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,Tt.width,Tt.height,Gt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,jt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,Tt.width,Tt.height,Gt,Dt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,jt,Tt.width,Tt.height,0,Gt,Dt,Tt.data)}}}else{if($=M.mipmaps,Yt&&Qt){$.length>0&&vt++;const lt=Et(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ot){Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,St[lt].width,St[lt].height,Gt,Dt,St[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,St[lt].width,St[lt].height,0,Gt,Dt,St[lt].data);for(let Rt=0;Rt<$.length;Rt++){const Zt=$[Rt].image[lt].image;Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Zt.width,Zt.height,Gt,Dt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,jt,Zt.width,Zt.height,0,Gt,Dt,Zt.data)}}else{Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Gt,Dt,St[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,Gt,Dt,St[lt]);for(let Rt=0;Rt<$.length;Rt++){const Tt=$[Rt];Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Gt,Dt,Tt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,jt,Gt,Dt,Tt.image[lt])}}}g(M)&&p(n.TEXTURE_CUBE_MAP),nt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function et(R,M,q,tt,rt,nt){const Ut=r.convert(q.format,q.colorSpace),xt=r.convert(q.type),yt=b(q.internalFormat,Ut,xt,q.colorSpace),Vt=i.get(M),ot=i.get(q);if(ot.__renderTarget=M,!Vt.__hasExternalTextures){const St=Math.max(1,M.width>>nt),zt=Math.max(1,M.height>>nt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,yt,St,zt,M.depth,0,Ut,xt,null):e.texImage2D(rt,nt,yt,St,zt,0,Ut,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),kt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,rt,ot.__webglTexture,0,Xt(M)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,rt,ot.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(R,M,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const tt=M.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,nt=y(M.stencilBuffer,rt),Ut=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=Xt(M);kt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,nt,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,nt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,nt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,R)}else{const tt=M.textures;for(let rt=0;rt<tt.length;rt++){const nt=tt[rt],Ut=r.convert(nt.format,nt.colorSpace),xt=r.convert(nt.type),yt=b(nt.internalFormat,Ut,xt,nt.colorSpace),Vt=Xt(M);q&&kt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,yt,M.width,M.height):kt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,yt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,yt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(M.depthTexture);tt.__renderTarget=M,(!tt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const rt=tt.__webglTexture,nt=Xt(M);if(M.depthTexture.format===ns)kt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(M.depthTexture.format===Ri)kt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function wt(R){const M=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){const rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=tt}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");_t(M.__webglFramebuffer,R)}else if(q){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=n.createRenderbuffer(),st(M.__webglDepthbuffer[tt],R,!1);else{const rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),st(M.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(R,M,q){const tt=i.get(R);M!==void 0&&et(tt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&wt(R)}function ft(R){const M=R.texture,q=i.get(R),tt=i.get(M);R.addEventListener("dispose",P);const rt=R.textures,nt=R.isWebGLCubeRenderTarget===!0,Ut=rt.length>1;if(Ut||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=M.version,a.memory.textures++),nt){q.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[xt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)q.__webglFramebuffer[xt][yt]=n.createFramebuffer()}else q.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let xt=0;xt<M.mipmaps.length;xt++)q.__webglFramebuffer[xt]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let xt=0,yt=rt.length;xt<yt;xt++){const Vt=i.get(rt[xt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&kt(R)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let xt=0;xt<rt.length;xt++){const yt=rt[xt];q.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[xt]);const Vt=r.convert(yt.format,yt.colorSpace),ot=r.convert(yt.type),St=b(yt.internalFormat,Vt,ot,yt.colorSpace,R.isXRRenderTarget===!0),zt=Xt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,St,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,q.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),st(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),J(n.TEXTURE_CUBE_MAP,M);for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)et(q.__webglFramebuffer[xt][yt],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,yt);else et(q.__webglFramebuffer[xt],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let xt=0,yt=rt.length;xt<yt;xt++){const Vt=rt[xt],ot=i.get(Vt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),J(n.TEXTURE_2D,Vt),et(q.__webglFramebuffer,R,Vt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),g(Vt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,tt.__webglTexture),J(xt,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)et(q.__webglFramebuffer[yt],R,M,n.COLOR_ATTACHMENT0,xt,yt);else et(q.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,xt,0);g(M)&&p(xt),e.unbindTexture()}R.depthBuffer&&wt(R)}function Wt(R){const M=R.textures;for(let q=0,tt=M.length;q<tt;q++){const rt=M[q];if(g(rt)){const nt=E(R),Ut=i.get(rt).__webglTexture;e.bindTexture(nt,Ut),p(nt),e.unbindTexture()}}}const Nt=[],z=[];function ee(R){if(R.samples>0){if(kt(R)===!1){const M=R.textures,q=R.width,tt=R.height;let rt=n.COLOR_BUFFER_BIT;const nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(R),xt=M.length>1;if(xt)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[yt]);const Vt=i.get(M[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,q,tt,0,0,q,tt,rt,n.NEAREST),c===!0&&(Nt.length=0,z.length=0,Nt.push(n.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(nt),z.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[yt]);const Vt=i.get(M[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Xt(R){return Math.min(s.maxSamples,R.samples)}function kt(R){const M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ht(R,M){const q=R.colorSpace,tt=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==hi&&q!==kn&&(ce.getTransfer(q)===ve?(tt!==wn||rt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function Et(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=C,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=it,this.setTextureCube=v,this.rebindTextures=Lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=kt}function Wm(n,t){function e(i,s=kn){let r;const a=ce.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wc)return n.BYTE;if(i===Xc)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Ti)return n.HALF_FLOAT;if(i===Yc)return n.ALPHA;if(i===Zc)return n.RGB;if(i===wn)return n.RGBA;if(i===Kc)return n.LUMINANCE;if(i===jc)return n.LUMINANCE_ALPHA;if(i===ns)return n.DEPTH_COMPONENT;if(i===Ri)return n.DEPTH_STENCIL;if(i===Uo)return n.RED;if(i===No)return n.RED_INTEGER;if(i===$c)return n.RG;if(i===Fo)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===Ar||i===Rr||i===Cr||i===Pr)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ka||i===ja||i===$a||i===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===to||i===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===to)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===uo||i===ho||i===fo||i===po||i===mo||i===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===no)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===io)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===so)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ro)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ao)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===co)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ho)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===po)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===go)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dr||i===_o||i===vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Dr)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jc||i===xo||i===Mo||i===yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ai?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Xm extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zm=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pn({vertexShader:Ym,fragmentShader:Zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends us{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=new Km,g=e.getContextAttributes();let p=null,E=null;const b=[],y=[],k=new Ct;let D=null;const P=new cn;P.viewport=new xe;const N=new cn;N.viewport=new xe;const w=[P,N],x=new Xm;let A=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=b[j];return ut===void 0&&(ut=new ya,b[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=b[j];return ut===void 0&&(ut=new ya,b[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=b[j];return ut===void 0&&(ut=new ya,b[j]=ut),ut.getHandSpace()};function O(j){const ut=y.indexOf(j.inputSource);if(ut===-1)return;const et=b[ut];et!==void 0&&(et.update(j.inputSource,j.frame,l||a),et.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<b.length;j++){const ut=y[j];ut!==null&&(y[j]=null,b[j].disconnect(ut))}A=null,C=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,E=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const ut={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Yn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ut=null,et=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=g.stencil?Ri:ns,et=g.stencil?Ai:bi);const _t={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Yn(d.textureWidth,d.textureHeight,{format:wn,type:qn,depthTexture:new Wo(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(j){for(let ut=0;ut<j.removed.length;ut++){const et=j.removed[ut],st=y.indexOf(et);st>=0&&(y[st]=null,b[st].disconnect(et))}for(let ut=0;ut<j.added.length;ut++){const et=j.added[ut];let st=y.indexOf(et);if(st===-1){for(let wt=0;wt<b.length;wt++)if(wt>=y.length){y.push(et),st=wt;break}else if(y[wt]===null){y[wt]=et,st=wt;break}if(st===-1)break}const _t=b[st];_t&&_t.connect(et)}}const K=new G,it=new G;function v(j,ut,et){K.setFromMatrixPosition(ut.matrixWorld),it.setFromMatrixPosition(et.matrixWorld);const st=K.distanceTo(it),_t=ut.projectionMatrix.elements,wt=et.projectionMatrix.elements,Lt=_t[14]/(_t[10]-1),ft=_t[14]/(_t[10]+1),Wt=(_t[9]+1)/_t[5],Nt=(_t[9]-1)/_t[5],z=(_t[8]-1)/_t[0],ee=(wt[8]+1)/wt[0],Xt=Lt*z,kt=Lt*ee,bt=st/(-z+ee),Ht=bt*-z;if(ut.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ht),j.translateZ(bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),_t[10]===-1)j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Et=Lt+bt,R=ft+bt,M=Xt-Ht,q=kt+(st-Ht),tt=Wt*ft/R*Et,rt=Nt*ft/R*Et;j.projectionMatrix.makePerspective(M,q,tt,rt,Et,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function U(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ut=j.near,et=j.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(et=_.depthFar)),x.near=N.near=P.near=ut,x.far=N.far=P.far=et,(A!==x.near||C!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,C=x.far),P.layers.mask=j.layers.mask|2,N.layers.mask=j.layers.mask|4,x.layers.mask=P.layers.mask|N.layers.mask;const st=j.parent,_t=x.cameras;U(x,st);for(let wt=0;wt<_t.length;wt++)U(_t[wt],st);_t.length===2?v(x,P,N):x.projectionMatrix.copy(P.projectionMatrix),F(j,x,st)};function F(j,ut,et){et===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy(et.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Os*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let B=null;function J(j,ut){if(u=ut.getViewerPose(l||a),m=ut,u!==null){const et=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let st=!1;et.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let wt=0;wt<et.length;wt++){const Lt=et[wt];let ft=null;if(f!==null)ft=f.getViewport(Lt);else{const Nt=h.getViewSubImage(d,Lt);ft=Nt.viewport,wt===0&&(t.setRenderTargetTextures(E,Nt.colorTexture,d.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(E))}let Wt=w[wt];Wt===void 0&&(Wt=new cn,Wt.layers.enable(wt),Wt.viewport=new xe,w[wt]=Wt),Wt.matrix.fromArray(Lt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Lt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ft.x,ft.y,ft.width,ft.height),wt===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(Wt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const wt=h.getDepthInformation(et[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let et=0;et<b.length;et++){const st=y[et],_t=b[et];st!==null&&_t!==void 0&&_t.update(st,ut,l||a)}B&&B(j,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),m=null}const Mt=new uu;Mt.setAnimationLoop(J),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}const vi=new Pn,$m=new Me;function Jm(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ou(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,E,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===We&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===We&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,y=E.envMapRotation;b&&(g.envMap.value=b,vi.copy(y),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(vi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Qm(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const y=b.program;i.uniformBlockBinding(E,y)}function l(E,b){let y=s[E.id];y===void 0&&(m(E),y=u(E),s[E.id]=y,E.addEventListener("dispose",g));const k=b.program;i.updateUBOMapping(E,k);const D=t.render.frame;r[E.id]!==D&&(d(E),r[E.id]=D)}function u(E){const b=h();E.__bindingPointIndex=b;const y=n.createBuffer(),k=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,k,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],y=E.uniforms,k=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,P=y.length;D<P;D++){const N=Array.isArray(y[D])?y[D]:[y[D]];for(let w=0,x=N.length;w<x;w++){const A=N[w];if(f(A,D,w,k)===!0){const C=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let W=0;for(let Z=0;Z<O.length;Z++){const K=O[Z],it=_(K);typeof K=="number"||typeof K=="boolean"?(A.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,C+W,A.__data)):K.isMatrix3?(A.__data[0]=K.elements[0],A.__data[1]=K.elements[1],A.__data[2]=K.elements[2],A.__data[3]=0,A.__data[4]=K.elements[3],A.__data[5]=K.elements[4],A.__data[6]=K.elements[5],A.__data[7]=0,A.__data[8]=K.elements[6],A.__data[9]=K.elements[7],A.__data[10]=K.elements[8],A.__data[11]=0):(K.toArray(A.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,b,y,k){const D=E.value,P=b+"_"+y;if(k[P]===void 0)return typeof D=="number"||typeof D=="boolean"?k[P]=D:k[P]=D.clone(),!0;{const N=k[P];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return k[P]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function m(E){const b=E.uniforms;let y=0;const k=16;for(let P=0,N=b.length;P<N;P++){const w=Array.isArray(b[P])?b[P]:[b[P]];for(let x=0,A=w.length;x<A;x++){const C=w[x],O=Array.isArray(C.value)?C.value:[C.value];for(let W=0,Z=O.length;W<Z;W++){const K=O[W],it=_(K),v=y%k,U=v%it.boundary,F=v+U;y+=U,F!==0&&k-F<it.storage&&(y+=k-F),C.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=it.storage}}}const D=y%k;return D>0&&(y+=k-D),E.__size=y,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function g(E){const b=E.target;b.removeEventListener("dispose",g);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class tg{constructor(t={}){const{canvas:e=Vh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=li,this.toneMappingExposure=1;const y=this;let k=!1,D=0,P=0,N=null,w=-1,x=null;const A=new xe,C=new xe;let O=null;const W=new Kt(0);let Z=0,K=e.width,it=e.height,v=1,U=null,F=null;const B=new xe(0,0,K,it),J=new xe(0,0,K,it);let Mt=!1;const j=new Ho;let ut=!1,et=!1;const st=new Me,_t=new Me,wt=new G,Lt=new xe,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Nt(){return N===null?v:1}let z=i;function ee(S,V){return e.getContext(S,V)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),z===null){const V="webgl2";if(z=ee(V,S),z===null)throw ee(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Xt,kt,bt,Ht,Et,R,M,q,tt,rt,nt,Ut,xt,yt,Vt,ot,St,zt,Gt,Dt,jt,Yt,Qt,H;function vt(){Xt=new r0(z),Xt.init(),Yt=new Wm(z,Xt),kt=new Qp(z,Xt,t,Yt),bt=new Hm(z,Xt),kt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),Ht=new l0(z),Et=new Tm,R=new Gm(z,Xt,bt,Et,kt,Yt,Ht),M=new e0(y),q=new s0(y),tt=new mf(z),Qt=new $p(z,tt),rt=new a0(z,tt,Ht,Qt),nt=new u0(z,rt,tt,Ht),Gt=new c0(z,kt,R),ot=new t0(Et),Ut=new bm(y,M,q,Xt,kt,Qt,ot),xt=new Jm(y,Et),yt=new Rm,Vt=new Um(Xt),zt=new jp(y,M,q,bt,nt,f,c),St=new Bm(y,nt,kt),H=new Qm(z,Ht,kt,bt),Dt=new Jp(z,Xt,Ht),jt=new o0(z,Xt,Ht),Ht.programs=Ut.programs,y.capabilities=kt,y.extensions=Xt,y.properties=Et,y.renderLists=yt,y.shadowMap=St,y.state=bt,y.info=Ht}vt();const $=new jm(y,z);this.xr=$,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=Xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(S){S!==void 0&&(v=S,this.setSize(K,it,!1))},this.getSize=function(S){return S.set(K,it)},this.setSize=function(S,V,T=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,it=V,e.width=Math.floor(S*v),e.height=Math.floor(V*v),T===!0&&(e.style.width=S+"px",e.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(K*v,it*v).floor()},this.setDrawingBufferSize=function(S,V,T){K=S,it=V,v=T,e.width=Math.floor(S*T),e.height=Math.floor(V*T),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(B)},this.setViewport=function(S,V,T,I){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,V,T,I),bt.viewport(A.copy(B).multiplyScalar(v).round())},this.getScissor=function(S){return S.copy(J)},this.setScissor=function(S,V,T,I){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,V,T,I),bt.scissor(C.copy(J).multiplyScalar(v).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(S){bt.setScissorTest(Mt=S)},this.setOpaqueSort=function(S){U=S},this.setTransparentSort=function(S){F=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(S=!0,V=!0,T=!0){let I=0;if(S){let L=!1;if(N!==null){const Y=N.texture.format;L=Y===Oo||Y===Fo||Y===No}if(L){const Y=N.texture.type,Q=Y===qn||Y===bi||Y===Fs||Y===Ai||Y===Io||Y===Lo,ht=zt.getClearColor(),X=zt.getClearAlpha(),dt=ht.r,It=ht.g,At=ht.b;Q?(m[0]=dt,m[1]=It,m[2]=At,m[3]=X,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=dt,_[1]=It,_[2]=At,_[3]=X,z.clearBufferiv(z.COLOR,0,_))}else I|=z.COLOR_BUFFER_BIT}V&&(I|=z.DEPTH_BUFFER_BIT),T&&(I|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),yt.dispose(),Vt.dispose(),Et.dispose(),M.dispose(),q.dispose(),nt.dispose(),Qt.dispose(),H.dispose(),Ut.dispose(),$.dispose(),$.removeEventListener("sessionstart",gt),$.removeEventListener("sessionend",Ft),$t.stop()};function lt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const S=Ht.autoReset,V=St.enabled,T=St.autoUpdate,I=St.needsUpdate,L=St.type;vt(),Ht.autoReset=S,St.enabled=V,St.autoUpdate=T,St.needsUpdate=I,St.type=L}function Tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Zt(S){const V=S.target;V.removeEventListener("dispose",Zt),Ee(V)}function Ee(S){Pe(S),Et.remove(S)}function Pe(S){const V=Et.get(S).programs;V!==void 0&&(V.forEach(function(T){Ut.releaseProgram(T)}),S.isShaderMaterial&&Ut.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,T,I,L,Y){V===null&&(V=ft);const Q=L.isMesh&&L.matrixWorld.determinant()<0,ht=tn(S,V,T,I,L);bt.setMaterial(I,Q);let X=T.index,dt=1;if(I.wireframe===!0){if(X=rt.getWireframeAttribute(T),X===void 0)return;dt=2}const It=T.drawRange,At=T.attributes.position;let se=It.start*dt,me=(It.start+It.count)*dt;Y!==null&&(se=Math.max(se,Y.start*dt),me=Math.min(me,(Y.start+Y.count)*dt)),X!==null?(se=Math.max(se,0),me=Math.min(me,X.count)):At!=null&&(se=Math.max(se,0),me=Math.min(me,At.count));const _e=me-se;if(_e<0||_e===1/0)return;Qt.setup(L,I,ht,T,X);let en,fe=Dt;if(X!==null&&(en=tt.get(X),fe=jt,fe.setIndex(en)),L.isMesh)I.wireframe===!0?(bt.setLineWidth(I.wireframeLinewidth*Nt()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(L.isLine){let Bt=I.linewidth;Bt===void 0&&(Bt=1),bt.setLineWidth(Bt*Nt()),L.isLineSegments?fe.setMode(z.LINES):L.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else L.isPoints?fe.setMode(z.POINTS):L.isSprite&&fe.setMode(z.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)fe.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))fe.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Bt=L._multiDrawStarts,Dn=L._multiDrawCounts,de=L._multiDrawCount,vn=X?tt.get(X).bytesPerElement:1,Ci=Et.get(I).currentProgram.getUniforms();for(let an=0;an<de;an++)Ci.setValue(z,"_gl_DrawID",an),fe.render(Bt[an]/vn,Dn[an])}else if(L.isInstancedMesh)fe.renderInstances(se,_e,L.count);else if(T.isInstancedBufferGeometry){const Bt=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,Dn=Math.min(T.instanceCount,Bt);fe.renderInstances(se,_e,Dn)}else fe.render(se,_e)};function le(S,V,T){S.transparent===!0&&S.side===Ze&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,De(S,V,T),S.side=ui,S.needsUpdate=!0,De(S,V,T),S.side=Ze):De(S,V,T)}this.compile=function(S,V,T=null){T===null&&(T=S),p=Vt.get(T),p.init(V),b.push(p),T.traverseVisible(function(L){L.isLight&&L.layers.test(V.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),S!==T&&S.traverseVisible(function(L){L.isLight&&L.layers.test(V.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const I=new Set;return S.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Y=L.material;if(Y)if(Array.isArray(Y))for(let Q=0;Q<Y.length;Q++){const ht=Y[Q];le(ht,T,L),I.add(ht)}else le(Y,T,L),I.add(Y)}),b.pop(),p=null,I},this.compileAsync=function(S,V,T=null){const I=this.compile(S,V,T);return new Promise(L=>{function Y(){if(I.forEach(function(Q){Et.get(Q).currentProgram.isReady()&&I.delete(Q)}),I.size===0){L(S);return}setTimeout(Y,10)}Xt.get("KHR_parallel_shader_compile")!==null?Y():setTimeout(Y,10)})};let at=null;function mt(S){at&&at(S)}function gt(){$t.stop()}function Ft(){$t.start()}const $t=new uu;$t.setAnimationLoop(mt),typeof self!="undefined"&&$t.setContext(self),this.setAnimationLoop=function(S){at=S,$.setAnimationLoop(S),S===null?$t.stop():$t.start()},$.addEventListener("sessionstart",gt),$.addEventListener("sessionend",Ft),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(V),V=$.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,V,N),p=Vt.get(S,b.length),p.init(V),b.push(p),_t.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(_t),et=this.localClippingEnabled,ut=ot.init(this.clippingPlanes,et),g=yt.get(S,E.length),g.init(),E.push(g),$.enabled===!0&&$.isPresenting===!0){const Y=y.xr.getDepthSensingMesh();Y!==null&&pe(Y,V,-1/0,y.sortObjects)}pe(S,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(U,F),Wt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Wt&&zt.addToRenderList(g,S),this.info.render.frame++,ut===!0&&ot.beginShadows();const T=p.state.shadowsArray;St.render(T,S,V),ut===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=g.opaque,L=g.transmissive;if(p.setupLights(),V.isArrayCamera){const Y=V.cameras;if(L.length>0)for(let Q=0,ht=Y.length;Q<ht;Q++){const X=Y[Q];he(I,L,S,X)}Wt&&zt.render(S);for(let Q=0,ht=Y.length;Q<ht;Q++){const X=Y[Q];we(g,S,X,X.viewport)}}else L.length>0&&he(I,L,S,V),Wt&&zt.render(S),we(g,S,V);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),S.isScene===!0&&S.onAfterRender(y,S,V),Qt.resetDefaultState(),w=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],ut===!0&&ot.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function pe(S,V,T,I){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)T=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){I&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const Q=nt.update(S),ht=S.material;ht.visible&&g.push(S,Q,ht,T,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const Q=nt.update(S),ht=S.material;if(I&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),Lt.copy(Q.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(ht)){const X=Q.groups;for(let dt=0,It=X.length;dt<It;dt++){const At=X[dt],se=ht[At.materialIndex];se&&se.visible&&g.push(S,Q,se,T,Lt.z,At)}}else ht.visible&&g.push(S,Q,ht,T,Lt.z,null)}}const Y=S.children;for(let Q=0,ht=Y.length;Q<ht;Q++)pe(Y[Q],V,T,I)}function we(S,V,T,I){const L=S.opaque,Y=S.transmissive,Q=S.transparent;p.setupLightsView(T),ut===!0&&ot.setGlobalState(y.clippingPlanes,T),I&&bt.viewport(A.copy(I)),L.length>0&&mn(L,V,T),Y.length>0&&mn(Y,V,T),Q.length>0&&mn(Q,V,T),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function he(S,V,T,I){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[I.id]===void 0&&(p.state.transmissionRenderTarget[I.id]=new Yn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Ti:qn,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const Y=p.state.transmissionRenderTarget[I.id],Q=I.viewport||A;Y.setSize(Q.z,Q.w);const ht=y.getRenderTarget();y.setRenderTarget(Y),y.getClearColor(W),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Wt&&zt.render(T);const X=y.toneMapping;y.toneMapping=li;const dt=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),p.setupLightsView(I),ut===!0&&ot.setGlobalState(y.clippingPlanes,I),mn(S,T,I),R.updateMultisampleRenderTarget(Y),R.updateRenderTargetMipmap(Y),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let At=0,se=V.length;At<se;At++){const me=V[At],_e=me.object,en=me.geometry,fe=me.material,Bt=me.group;if(fe.side===Ze&&_e.layers.test(I.layers)){const Dn=fe.side;fe.side=We,fe.needsUpdate=!0,gn(_e,T,I,en,fe,Bt),fe.side=Dn,fe.needsUpdate=!0,It=!0}}It===!0&&(R.updateMultisampleRenderTarget(Y),R.updateRenderTargetMipmap(Y))}y.setRenderTarget(ht),y.setClearColor(W,Z),dt!==void 0&&(I.viewport=dt),y.toneMapping=X}function mn(S,V,T){const I=V.isScene===!0?V.overrideMaterial:null;for(let L=0,Y=S.length;L<Y;L++){const Q=S[L],ht=Q.object,X=Q.geometry,dt=I===null?Q.material:I,It=Q.group;ht.layers.test(T.layers)&&gn(ht,V,T,X,dt,It)}}function gn(S,V,T,I,L,Y){S.onBeforeRender(y,V,T,I,L,Y),S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),L.onBeforeRender(y,V,T,I,S,Y),L.transparent===!0&&L.side===Ze&&L.forceSinglePass===!1?(L.side=We,L.needsUpdate=!0,y.renderBufferDirect(T,V,I,L,S,Y),L.side=ui,L.needsUpdate=!0,y.renderBufferDirect(T,V,I,L,S,Y),L.side=Ze):y.renderBufferDirect(T,V,I,L,S,Y),S.onAfterRender(y,V,T,I,L,Y)}function De(S,V,T){V.isScene!==!0&&(V=ft);const I=Et.get(S),L=p.state.lights,Y=p.state.shadowsArray,Q=L.state.version,ht=Ut.getParameters(S,L.state,Y,V,T),X=Ut.getProgramCacheKey(ht);let dt=I.programs;I.environment=S.isMeshStandardMaterial?V.environment:null,I.fog=V.fog,I.envMap=(S.isMeshStandardMaterial?q:M).get(S.envMap||I.environment),I.envMapRotation=I.environment!==null&&S.envMap===null?V.environmentRotation:S.envMapRotation,dt===void 0&&(S.addEventListener("dispose",Zt),dt=new Map,I.programs=dt);let It=dt.get(X);if(It!==void 0){if(I.currentProgram===It&&I.lightsStateVersion===Q)return Qe(S,ht),It}else ht.uniforms=Ut.getUniforms(S),S.onBeforeCompile(ht,y),It=Ut.acquireProgram(ht,X),dt.set(X,It),I.uniforms=ht.uniforms;const At=I.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=ot.uniform),Qe(S,ht),I.needsLights=Re(S),I.lightsStateVersion=Q,I.needsLights&&(At.ambientLightColor.value=L.state.ambient,At.lightProbe.value=L.state.probe,At.directionalLights.value=L.state.directional,At.directionalLightShadows.value=L.state.directionalShadow,At.spotLights.value=L.state.spot,At.spotLightShadows.value=L.state.spotShadow,At.rectAreaLights.value=L.state.rectArea,At.ltc_1.value=L.state.rectAreaLTC1,At.ltc_2.value=L.state.rectAreaLTC2,At.pointLights.value=L.state.point,At.pointLightShadows.value=L.state.pointShadow,At.hemisphereLights.value=L.state.hemi,At.directionalShadowMap.value=L.state.directionalShadowMap,At.directionalShadowMatrix.value=L.state.directionalShadowMatrix,At.spotShadowMap.value=L.state.spotShadowMap,At.spotLightMatrix.value=L.state.spotLightMatrix,At.spotLightMap.value=L.state.spotLightMap,At.pointShadowMap.value=L.state.pointShadowMap,At.pointShadowMatrix.value=L.state.pointShadowMatrix),I.currentProgram=It,I.uniformsList=null,It}function _n(S){if(S.uniformsList===null){const V=S.currentProgram.getUniforms();S.uniformsList=Ir.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function Qe(S,V){const T=Et.get(S);T.outputColorSpace=V.outputColorSpace,T.batching=V.batching,T.batchingColor=V.batchingColor,T.instancing=V.instancing,T.instancingColor=V.instancingColor,T.instancingMorph=V.instancingMorph,T.skinning=V.skinning,T.morphTargets=V.morphTargets,T.morphNormals=V.morphNormals,T.morphColors=V.morphColors,T.morphTargetsCount=V.morphTargetsCount,T.numClippingPlanes=V.numClippingPlanes,T.numIntersection=V.numClipIntersection,T.vertexAlphas=V.vertexAlphas,T.vertexTangents=V.vertexTangents,T.toneMapping=V.toneMapping}function tn(S,V,T,I,L){V.isScene!==!0&&(V=ft),R.resetTextureUnits();const Y=V.fog,Q=I.isMeshStandardMaterial?V.environment:null,ht=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:hi,X=(I.isMeshStandardMaterial?q:M).get(I.envMap||Q),dt=I.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,It=!!T.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),At=!!T.morphAttributes.position,se=!!T.morphAttributes.normal,me=!!T.morphAttributes.color;let _e=li;I.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(_e=y.toneMapping);const en=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,fe=en!==void 0?en.length:0,Bt=Et.get(I),Dn=p.state.lights;if(ut===!0&&(et===!0||S!==x)){const hn=S===x&&I.id===w;ot.setState(I,S,hn)}let de=!1;I.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Dn.state.version||Bt.outputColorSpace!==ht||L.isBatchedMesh&&Bt.batching===!1||!L.isBatchedMesh&&Bt.batching===!0||L.isBatchedMesh&&Bt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Bt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Bt.instancing===!1||!L.isInstancedMesh&&Bt.instancing===!0||L.isSkinnedMesh&&Bt.skinning===!1||!L.isSkinnedMesh&&Bt.skinning===!0||L.isInstancedMesh&&Bt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Bt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Bt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Bt.instancingMorph===!1&&L.morphTexture!==null||Bt.envMap!==X||I.fog===!0&&Bt.fog!==Y||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ot.numPlanes||Bt.numIntersection!==ot.numIntersection)||Bt.vertexAlphas!==dt||Bt.vertexTangents!==It||Bt.morphTargets!==At||Bt.morphNormals!==se||Bt.morphColors!==me||Bt.toneMapping!==_e||Bt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Bt.__version=I.version);let vn=Bt.currentProgram;de===!0&&(vn=De(I,V,L));let Ci=!1,an=!1,fs=!1;const Te=vn.getUniforms(),bn=Bt.uniforms;if(bt.useProgram(vn.program)&&(Ci=!0,an=!0,fs=!0),I.id!==w&&(w=I.id,an=!0),Ci||x!==S){bt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),Wh(st),Xh(st),Te.setValue(z,"projectionMatrix",st)):Te.setValue(z,"projectionMatrix",S.projectionMatrix),Te.setValue(z,"viewMatrix",S.matrixWorldInverse);const jn=Te.map.cameraPosition;jn!==void 0&&jn.setValue(z,wt.setFromMatrixPosition(S.matrixWorld)),kt.logarithmicDepthBuffer&&Te.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Te.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,an=!0,fs=!0)}if(L.isSkinnedMesh){Te.setOptional(z,L,"bindMatrix"),Te.setOptional(z,L,"bindMatrixInverse");const hn=L.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Te.setValue(z,"boneTexture",hn.boneTexture,R))}L.isBatchedMesh&&(Te.setOptional(z,L,"batchingTexture"),Te.setValue(z,"batchingTexture",L._matricesTexture,R),Te.setOptional(z,L,"batchingIdTexture"),Te.setValue(z,"batchingIdTexture",L._indirectTexture,R),Te.setOptional(z,L,"batchingColorTexture"),L._colorsTexture!==null&&Te.setValue(z,"batchingColorTexture",L._colorsTexture,R));const ds=T.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Gt.update(L,T,vn),(an||Bt.receiveShadow!==L.receiveShadow)&&(Bt.receiveShadow=L.receiveShadow,Te.setValue(z,"receiveShadow",L.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(bn.envMap.value=X,bn.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&V.environment!==null&&(bn.envMapIntensity.value=V.environmentIntensity),an&&(Te.setValue(z,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&ye(bn,fs),Y&&I.fog===!0&&xt.refreshFogUniforms(bn,Y),xt.refreshMaterialUniforms(bn,I,v,it,p.state.transmissionRenderTarget[S.id]),Ir.upload(z,_n(Bt),bn,R)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ir.upload(z,_n(Bt),bn,R),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Te.setValue(z,"center",L.center),Te.setValue(z,"modelViewMatrix",L.modelViewMatrix),Te.setValue(z,"normalMatrix",L.normalMatrix),Te.setValue(z,"modelMatrix",L.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const hn=I.uniformsGroups;for(let jn=0,$n=hn.length;jn<$n;jn++){const $o=hn[jn];H.update($o,vn),H.bind($o,vn)}}return vn}function ye(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function Re(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,V,T){Et.get(S.texture).__webglTexture=V,Et.get(S.depthTexture).__webglTexture=T;const I=Et.get(S);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=T===void 0,I.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,V){const T=Et.get(S);T.__webglFramebuffer=V,T.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,T=0){N=S,D=V,P=T;let I=!0,L=null,Y=!1,Q=!1;if(S){const X=Et.get(S);if(X.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(z.FRAMEBUFFER,null),I=!1;else if(X.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(X.__hasExternalTextures)R.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const At=S.depthTexture;if(X.__boundDepthTexture!==At){if(At!==null&&Et.has(At)&&(S.width!==At.image.width||S.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}const dt=S.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Q=!0);const It=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[V])?L=It[V][T]:L=It[V],Y=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?L=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?L=It[T]:L=It,A.copy(S.viewport),C.copy(S.scissor),O=S.scissorTest}else A.copy(B).multiplyScalar(v).floor(),C.copy(J).multiplyScalar(v).floor(),O=Mt;if(bt.bindFramebuffer(z.FRAMEBUFFER,L)&&I&&bt.drawBuffers(S,L),bt.viewport(A),bt.scissor(C),bt.setScissorTest(O),Y){const X=Et.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,X.__webglTexture,T)}else if(Q){const X=Et.get(S.texture),dt=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.__webglTexture,T||0,dt)}w=-1},this.readRenderTargetPixels=function(S,V,T,I,L,Y,Q){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Q!==void 0&&(ht=ht[Q]),ht){bt.bindFramebuffer(z.FRAMEBUFFER,ht);try{const X=S.texture,dt=X.format,It=X.type;if(!kt.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-I&&T>=0&&T<=S.height-L&&z.readPixels(V,T,I,L,Yt.convert(dt),Yt.convert(It),Y)}finally{const X=N!==null?Et.get(N).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,X)}}},this.readRenderTargetPixelsAsync=async function(S,V,T,I,L,Y,Q){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Q!==void 0&&(ht=ht[Q]),ht){const X=S.texture,dt=X.format,It=X.type;if(!kt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=S.width-I&&T>=0&&T<=S.height-L){bt.bindFramebuffer(z.FRAMEBUFFER,ht);const At=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.bufferData(z.PIXEL_PACK_BUFFER,Y.byteLength,z.STREAM_READ),z.readPixels(V,T,I,L,Yt.convert(dt),Yt.convert(It),0);const se=N!==null?Et.get(N).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,se);const me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Gh(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Y),z.deleteBuffer(At),z.deleteSync(me),Y}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,V=null,T=0){S.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1]);const I=Math.pow(2,-T),L=Math.floor(S.image.width*I),Y=Math.floor(S.image.height*I),Q=V!==null?V.x:0,ht=V!==null?V.y:0;R.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,T,0,0,Q,ht,L,Y),bt.unbindTexture()},this.copyTextureToTexture=function(S,V,T=null,I=null,L=0){S.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1],V=arguments[2],L=arguments[3]||0,T=null);let Y,Q,ht,X,dt,It,At,se,me;const _e=S.isCompressedTexture?S.mipmaps[L]:S.image;T!==null?(Y=T.max.x-T.min.x,Q=T.max.y-T.min.y,ht=T.isBox3?T.max.z-T.min.z:1,X=T.min.x,dt=T.min.y,It=T.isBox3?T.min.z:0):(Y=_e.width,Q=_e.height,ht=_e.depth||1,X=0,dt=0,It=0),I!==null?(At=I.x,se=I.y,me=I.z):(At=0,se=0,me=0);const en=Yt.convert(V.format),fe=Yt.convert(V.type);let Bt;V.isData3DTexture?(R.setTexture3D(V,0),Bt=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(R.setTexture2DArray(V,0),Bt=z.TEXTURE_2D_ARRAY):(R.setTexture2D(V,0),Bt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const Dn=z.getParameter(z.UNPACK_ROW_LENGTH),de=z.getParameter(z.UNPACK_IMAGE_HEIGHT),vn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ci=z.getParameter(z.UNPACK_SKIP_ROWS),an=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_e.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,X),z.pixelStorei(z.UNPACK_SKIP_ROWS,dt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,It);const fs=S.isDataArrayTexture||S.isData3DTexture,Te=V.isDataArrayTexture||V.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const bn=Et.get(S),ds=Et.get(V),hn=Et.get(bn.__renderTarget),jn=Et.get(ds.__renderTarget);bt.bindFramebuffer(z.READ_FRAMEBUFFER,hn.__webglFramebuffer),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let $n=0;$n<ht;$n++)fs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Et.get(S).__webglTexture,L,It+$n),S.isDepthTexture?(Te&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Et.get(V).__webglTexture,L,me+$n),z.blitFramebuffer(X,dt,Y,Q,At,se,Y,Q,z.DEPTH_BUFFER_BIT,z.NEAREST)):Te?z.copyTexSubImage3D(Bt,L,At,se,me+$n,X,dt,Y,Q):z.copyTexSubImage2D(Bt,L,At,se,me+$n,X,dt,Y,Q);bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Te?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Bt,L,At,se,me,Y,Q,ht,en,fe,_e.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Bt,L,At,se,me,Y,Q,ht,en,_e.data):z.texSubImage3D(Bt,L,At,se,me,Y,Q,ht,en,fe,_e):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,L,At,se,Y,Q,en,fe,_e.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,L,At,se,_e.width,_e.height,en,_e.data):z.texSubImage2D(z.TEXTURE_2D,L,At,se,Y,Q,en,fe,_e);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,de),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ci),z.pixelStorei(z.UNPACK_SKIP_IMAGES,an),L===0&&V.generateMipmaps&&z.generateMipmap(Bt),bt.unbindTexture()},this.copyTextureToTexture3D=function(S,V,T=null,I=null,L=0){return S.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,I=arguments[1]||null,S=arguments[2],V=arguments[3],L=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,V,T,I,L)},this.initRenderTarget=function(S){Et.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){D=0,P=0,N=null,bt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class Xo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new Xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xr extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=So,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new G;class Fr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mu extends Kn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const vs=new G,Xi=new G,qi=new G,Yi=new Ct,xs=new Ct,gu=new Me,ur=new G,Ms=new G,hr=new G,Kl=new Ct,Sa=new Ct,jl=new Ct;class ng extends Le{constructor(t=new mu){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new eg(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Fr(i,3,0,!1)),Wi.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;fr(ur.set(-.5,-.5,0),qi,a,Xi,s,r),fr(Ms.set(.5,-.5,0),qi,a,Xi,s,r),fr(hr.set(.5,.5,0),qi,a,Xi,s,r),Kl.set(0,0),Sa.set(1,0),jl.set(1,1);let o=t.ray.intersectTriangle(ur,Ms,hr,!1,vs);if(o===null&&(fr(Ms.set(-.5,.5,0),qi,a,Xi,s,r),Sa.set(0,1),o=t.ray.intersectTriangle(ur,hr,Ms,!1,vs),o===null))return;const c=t.ray.origin.distanceTo(vs);c<t.near||c>t.far||e.push({distance:c,point:vs.clone(),uv:dn.getInterpolation(vs,ur,Ms,hr,Kl,Sa,jl,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fr(n,t,e,i,s,r){Yi.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(xs.x=r*Yi.x-s*Yi.y,xs.y=s*Yi.x+r*Yi.y):xs.copy(Yi),n.copy(t),n.x+=xs.x,n.y+=xs.y,n.applyMatrix4(gu)}class ig extends Ke{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Je,u=Je,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _u extends Kn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Or=new G,zr=new G,$l=new Me,ys=new ko,dr=new Hs,Ea=new G,Jl=new G;class sg extends Le{constructor(t=new Ce,e=new _u){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Or.fromBufferAttribute(e,s-1),zr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Or.distanceTo(zr);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;$l.copy(s).invert(),ys.copy(t.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=u.getX(_),E=u.getX(_+1),b=pr(this,t,ys,c,p,E);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=pr(this,t,ys,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=pr(this,t,ys,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=pr(this,t,ys,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pr(n,t,e,i,s,r){const a=n.geometry.attributes.position;if(Or.fromBufferAttribute(a,s),zr.fromBufferAttribute(a,r),e.distanceSqToSegment(Or,zr,Ea,Jl)>i)return;Ea.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ea);if(!(c<t.near||c>t.far))return{distance:c,point:Jl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Ql=new G,tc=new G;class rg extends sg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ql.fromBufferAttribute(e,s),tc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ql.distanceTo(tc);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vu extends Kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ec=new Me,bo=new ko,mr=new Hs,gr=new G;class ag extends Le{constructor(t=new Ce,e=new vu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;ec.copy(s).invert(),bo.copy(t.ray).applyMatrix4(ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);gr.fromBufferAttribute(h,g),nc(gr,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)gr.fromBufferAttribute(h,m),nc(gr,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nc(n,t,e,i,s,r,a){const o=bo.distanceSqToPoint(n);if(o<e){const c=new G;bo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class fi extends Ke{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn extends Ce{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new G,d=new Ct,f=new G,m=new G,_=new G;let g=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let E=0;E<=e;E++){const b=i+E*u*s,y=Math.sin(b),k=Math.cos(b);for(let D=0;D<=t.length-1;D++){h.x=t[D].x*y,h.y=t[D].y,h.z=t[D].x*k,a.push(h.x,h.y,h.z),d.x=E/e,d.y=D/(t.length-1),o.push(d.x,d.y);const P=c[3*D+0]*y,N=c[3*D+1],w=c[3*D+0]*k;l.push(P,N,w)}}for(let E=0;E<e;E++)for(let b=0;b<t.length-1;b++){const y=b+E*t.length,k=y,D=y+t.length,P=y+t.length+1,N=y+1;r.push(k,D,N),r.push(P,N,D)}this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("uv",new ue(o,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.points,t.segments,t.phiStart,t.phiLength)}}class oi extends Ce{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new G,u=new Ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=i+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class re extends Ce{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function E(){const y=new G,k=new G;let D=0;const P=(e-t)/i;for(let N=0;N<=r;N++){const w=[],x=N/r,A=x*(e-t)+t;for(let C=0;C<=s;C++){const O=C/s,W=O*c+o,Z=Math.sin(W),K=Math.cos(W);k.x=A*Z,k.y=-x*i+g,k.z=A*K,h.push(k.x,k.y,k.z),y.set(Z,P,K).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-x),w.push(m++)}_.push(w)}for(let N=0;N<s;N++)for(let w=0;w<r;w++){const x=_[w][N],A=_[w+1][N],C=_[w+1][N+1],O=_[w][N+1];(t>0||w!==0)&&(u.push(x,A,O),D+=3),(e>0||w!==r-1)&&(u.push(A,C,O),D+=3)}l.addGroup(p,D,0),p+=D}function b(y){const k=m,D=new Ct,P=new G;let N=0;const w=y===!0?t:e,x=y===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;const A=m;for(let C=0;C<=s;C++){const W=C/s*c+o,Z=Math.cos(W),K=Math.sin(W);P.x=w*K,P.y=g*x,P.z=w*Z,h.push(P.x,P.y,P.z),d.push(0,x,0),D.x=Z*.5+.5,D.y=K*.5*x+.5,f.push(D.x,D.y),m++}for(let C=0;C<s;C++){const O=k+C,W=A+C;y===!0?u.push(W,W+1,O):u.push(W+1,W,O),N+=3}l.addGroup(p,N,y===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Se extends Ce{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new G,d=new G,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const E=[],b=p/i;let y=0;p===0&&a===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let k=0;k<=e;k++){const D=k/e;h.x=-t*Math.cos(s+D*r)*Math.sin(a+b*o),h.y=t*Math.cos(a+b*o),h.z=t*Math.sin(s+D*r)*Math.sin(a+b*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(D+y,1-b),E.push(l++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const b=u[p][E+1],y=u[p][E],k=u[p+1][E],D=u[p+1][E+1];(p!==0||a>0)&&f.push(b,y,D),(p!==i-1||c<Math.PI)&&f.push(y,k,D)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ye extends Ce{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new G,h=new G,d=new G;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/i*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,E=(s+1)*f+m;a.push(_,g,E),a.push(g,p,E)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ke extends Kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wa extends ke{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class og extends Kn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class qo extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lg extends qo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ba=new Me,ic=new G,sc=new G;class xu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rc=new Me,Ss=new G,Ta=new G;class cg extends xu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ss),Ta.copy(i.position),Ta.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ta),i.updateMatrixWorld(),s.makeTranslation(-Ss.x,-Ss.y,-Ss.z),rc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc)}}class zs extends qo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ug extends xu{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ac extends qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new ug}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);class hg extends Xr{constructor(){super();const t=new Ot;t.deleteAttribute("uv");const e=new ke({side:We}),i=new ke,s=new zs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new ct(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new ct(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new ct(t,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ct(t,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new ct(t,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new ct(t,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new ct(t,Zi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new ct(t,Zi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new ct(t,Zi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new ct(t,Zi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new ct(t,Zi(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new ct(t,Zi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Zi(n){const t=new oe;return t.color.setScalar(n),t}class fg{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dg=new Vo(-1,1,1,-1,0,1);class pg extends Ce{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}}const mg=new pg;class gg{constructor(t){this._mesh=new ct(mg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class _g{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}dot4(t,e,i,s,r){return t[0]*e+t[1]*i+t[2]*s+t[3]*r}noise(t,e){let i,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(c+l)*u,d=c-h,f=l-h,m=t-d,_=e-f;let g,p;m>_?(g=1,p=0):(g=0,p=1);const E=m-g+u,b=_-p+u,y=m-1+2*u,k=_-1+2*u,D=c&255,P=l&255,N=this.perm[D+this.perm[P]]%12,w=this.perm[D+g+this.perm[P+p]]%12,x=this.perm[D+1+this.perm[P+1]]%12;let A=.5-m*m-_*_;A<0?i=0:(A*=A,i=A*A*this.dot(this.grad3[N],m,_));let C=.5-E*E-b*b;C<0?s=0:(C*=C,s=C*C*this.dot(this.grad3[w],E,b));let O=.5-y*y-k*k;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[x],y,k)),70*(i+s+r)}noise3d(t,e,i){let s,r,a,o;const l=(t+e+i)*.3333333333333333,u=Math.floor(t+l),h=Math.floor(e+l),d=Math.floor(i+l),f=1/6,m=(u+h+d)*f,_=u-m,g=h-m,p=d-m,E=t-_,b=e-g,y=i-p;let k,D,P,N,w,x;E>=b?b>=y?(k=1,D=0,P=0,N=1,w=1,x=0):E>=y?(k=1,D=0,P=0,N=1,w=0,x=1):(k=0,D=0,P=1,N=1,w=0,x=1):b<y?(k=0,D=0,P=1,N=0,w=1,x=1):E<y?(k=0,D=1,P=0,N=0,w=1,x=1):(k=0,D=1,P=0,N=1,w=1,x=0);const A=E-k+f,C=b-D+f,O=y-P+f,W=E-N+2*f,Z=b-w+2*f,K=y-x+2*f,it=E-1+3*f,v=b-1+3*f,U=y-1+3*f,F=u&255,B=h&255,J=d&255,Mt=this.perm[F+this.perm[B+this.perm[J]]]%12,j=this.perm[F+k+this.perm[B+D+this.perm[J+P]]]%12,ut=this.perm[F+N+this.perm[B+w+this.perm[J+x]]]%12,et=this.perm[F+1+this.perm[B+1+this.perm[J+1]]]%12;let st=.6-E*E-b*b-y*y;st<0?s=0:(st*=st,s=st*st*this.dot3(this.grad3[Mt],E,b,y));let _t=.6-A*A-C*C-O*O;_t<0?r=0:(_t*=_t,r=_t*_t*this.dot3(this.grad3[j],A,C,O));let wt=.6-W*W-Z*Z-K*K;wt<0?a=0:(wt*=wt,a=wt*wt*this.dot3(this.grad3[ut],W,Z,K));let Lt=.6-it*it-v*v-U*U;return Lt<0?o=0:(Lt*=Lt,o=Lt*Lt*this.dot3(this.grad3[et],it,v,U)),32*(s+r+a+o)}noise4d(t,e,i,s){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,h,d,f,m;const _=(t+e+i+s)*c,g=Math.floor(t+_),p=Math.floor(e+_),E=Math.floor(i+_),b=Math.floor(s+_),y=(g+p+E+b)*l,k=g-y,D=p-y,P=E-y,N=b-y,w=t-k,x=e-D,A=i-P,C=s-N,O=w>x?32:0,W=w>A?16:0,Z=x>A?8:0,K=w>C?4:0,it=x>C?2:0,v=A>C?1:0,U=O+W+Z+K+it+v,F=a[U][0]>=3?1:0,B=a[U][1]>=3?1:0,J=a[U][2]>=3?1:0,Mt=a[U][3]>=3?1:0,j=a[U][0]>=2?1:0,ut=a[U][1]>=2?1:0,et=a[U][2]>=2?1:0,st=a[U][3]>=2?1:0,_t=a[U][0]>=1?1:0,wt=a[U][1]>=1?1:0,Lt=a[U][2]>=1?1:0,ft=a[U][3]>=1?1:0,Wt=w-F+l,Nt=x-B+l,z=A-J+l,ee=C-Mt+l,Xt=w-j+2*l,kt=x-ut+2*l,bt=A-et+2*l,Ht=C-st+2*l,Et=w-_t+3*l,R=x-wt+3*l,M=A-Lt+3*l,q=C-ft+3*l,tt=w-1+4*l,rt=x-1+4*l,nt=A-1+4*l,Ut=C-1+4*l,xt=g&255,yt=p&255,Vt=E&255,ot=b&255,St=o[xt+o[yt+o[Vt+o[ot]]]]%32,zt=o[xt+F+o[yt+B+o[Vt+J+o[ot+Mt]]]]%32,Gt=o[xt+j+o[yt+ut+o[Vt+et+o[ot+st]]]]%32,Dt=o[xt+_t+o[yt+wt+o[Vt+Lt+o[ot+ft]]]]%32,jt=o[xt+1+o[yt+1+o[Vt+1+o[ot+1]]]]%32;let Yt=.6-w*w-x*x-A*A-C*C;Yt<0?u=0:(Yt*=Yt,u=Yt*Yt*this.dot4(r[St],w,x,A,C));let Qt=.6-Wt*Wt-Nt*Nt-z*z-ee*ee;Qt<0?h=0:(Qt*=Qt,h=Qt*Qt*this.dot4(r[zt],Wt,Nt,z,ee));let H=.6-Xt*Xt-kt*kt-bt*bt-Ht*Ht;H<0?d=0:(H*=H,d=H*H*this.dot4(r[Gt],Xt,kt,bt,Ht));let vt=.6-Et*Et-R*R-M*M-q*q;vt<0?f=0:(vt*=vt,f=vt*vt*this.dot4(r[Dt],Et,R,M,q));let $=.6-tt*tt-rt*rt-nt*nt-Ut*Ut;return $<0?m=0:($*=$,m=$*$*this.dot4(r[jt],tt,rt,nt,Ut)),27*(u+h+d+f+m)}}const _r={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Ct},cameraProjectionMatrix:{value:new Me},cameraInverseProjectionMatrix:{value:new Me},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},vr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},xr={uniforms:{tDiffuse:{value:null},resolution:{value:new Ct}},vertexShader:`varying vec2 vUv;

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

		}`},Aa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ai extends fg{constructor(t,e,i,s,r=32){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new Wo;a.format=Ri,a.type=Ai,this.normalRenderTarget=new Yn(this.width,this.height,{minFilter:Je,magFilter:Je,type:Ti,depthTexture:a}),this.ssaoRenderTarget=new Yn(this.width,this.height,{type:Ti}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new pn({defines:Object.assign({},_r.defines),uniforms:Rs.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,blending:nn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new og,this.normalMaterial.blending=nn,this.blurMaterial=new pn({defines:Object.assign({},xr.defines),uniforms:Rs.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new pn({defines:Object.assign({},vr.defines),uniforms:Rs.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pn({uniforms:Rs.clone(Aa.uniforms),vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:kc,blendDst:Fa,blendEquation:Bn,blendSrcAlpha:Bc,blendDstAlpha:Fa,blendEquationAlpha:Bn}),this.fsQuad=new gg(null),this.originalClearColor=new Kt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,i){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case ai.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case ai.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case ai.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case ai.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case ai.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=zc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,i,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const s=new G;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=i/t;r=Hh.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const i=new _g,s=16,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,c=Math.random()*2-1,l=0;r[a]=i.noise3d(o,c,l)}this.noiseTexture=new ig(r,4,4,Uo,Rn),this.noiseTexture.wrapS=Cn,this.noiseTexture.wrapT=Cn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const s=e.get(i);i.visible=s}),e.clear()}}ai.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const vg={minX:-15.55,maxX:15.55,minZ:-28.15,maxZ:13.55},xg={x:0,y:1.58,z:10.55,yaw:0},Mg={x:0,y:1.58,z:-16.35,yaw:0},Us=-24.2,yg=Us-.35,Ns={x:0,y:0,z:-26.55},Mu=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35}],Sg=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],Eg=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],To=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1},{id:"pad-fountain",kind:"battery",pad:!0,x:3.72,z:.45,cloaked:!1},{id:"pad-food",kind:"battery",pad:!0,x:-10.2,z:7.5,cloaked:!1},{id:"pad-door",kind:"battery",pad:!0,x:0,z:-10.05,cloaked:!1},{id:"pad-aisle",kind:"battery",pad:!0,x:0,z:-17.15,cloaked:!1},{id:"pad-pew",kind:"battery",pad:!0,x:5.4,z:-22.7,cloaked:!1},{id:"pad-altar",kind:"battery",pad:!0,x:-4.2,z:-23.05,cloaked:!1}],Ra={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},wg={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":Ra,"choir-r":Ra,"choir-ghost":Ra};function Jt(n,t,e,i,s,r,a,o,c={}){return{id:n,mat:t,x:e,y:i,z:s,w:r,h:a,d:o,...c}}const ze=7.2,yu=[Jt("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),Jt("ceiling","ceiling",0,7.35,0,34,.3,30),Jt("wall-n-l","wall",-9.23,ze/2,-14.3,14.74,ze,.6),Jt("wall-n-r","wall",9.23,ze/2,-14.3,14.74,ze,.6),Jt("chapel-door","trim",0,ze/2,-14.3,3.76,ze,.66,{door:!0}),Jt("wall-s","wall",0,ze/2,14.3,33.2,ze,.6),Jt("wall-w","wall",-16.3,ze/2,0,.6,ze,29.2),Jt("wall-e","wall",16.3,ze/2,0,.6,ze,29.2),Jt("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),Jt("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),Jt("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),Jt("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),Jt("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),Jt("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),Jt("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),Jt("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),Jt("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),Jt("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),Jt("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),Jt("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),Jt("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),Jt("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),Jt("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),Jt("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),Jt("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),Jt("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),Jt("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),Jt("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),Jt("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),Jt("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),Jt("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),Jt("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),Jt("chapel-w","wall",-8.35,ze/2,-21.75,.5,ze,14.9),Jt("chapel-e","wall",8.35,ze/2,-21.75,.5,ze,14.9),Jt("chapel-n","wall",0,ze/2,-29.05,17.2,ze,.5),Jt("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),Jt("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),Jt("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),Jt("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),Jt("altar-l","trim",-4.85,1.8,Us,6.5,3.6,.48),Jt("altar-r","trim",4.85,1.8,Us,6.5,3.6,.48),Jt("rite-veil","trim",0,1.8,Us,3.36,3.6,.42,{phaseGate:!0,veil:!0}),Jt("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function bg(n){return{id:n.id,minX:n.x-n.w/2,maxX:n.x+n.w/2,minY:n.y-n.h/2,maxY:n.y+n.h/2,minZ:n.z-n.d/2,maxZ:n.z+n.d/2,phaseGate:!!n.phaseGate,floor:!!n.floor}}function Su({doorOpen:n=!1,veilUp:t=!1}={}){return yu.filter(e=>!(e.door&&n||e.veil&&!t)).map(bg)}function Eu(n,t,e){return{id:n.id,x:n.x,y:0,z:n.z,yaw:0,hp:n.hp,maxHp:n.hp,alive:!0,cloaked:!!n.cloak,reveal:0,visible:!n.cloak,exposed:!1,hittable:!n.cloak,hits:0,lastHitAt:null,aggro:e==="court"&&!n.cloak,cooldown:e==="chapel"?1.35+t%3*.25:.95+t%4*.28,windup:0,strafeSign:t%2===0?1:-1,strafeT:.8+t%3*.25,hurt:0,stun:0,room:e,dormant:e!=="court"}}function wu(){return Sg.map((n,t)=>Eu(n,t,"court"))}function Br(){return Eg.map((n,t)=>Eu(n,t,"chapel"))}function oc(){return To.map(n=>({...n,taken:!1,respawnAt:null}))}const Gn=["LIVE","STATIC","DEAD_AIR"],pt={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6},clickerMag:20,scatterMag:8,phaserMag:6,phaserDamage:26,phaserRange:8,phaserFalloff:.4,phaserCooldown:.48,dropLive:5,dropStatic:2,dropDead:2,paRefund:2,paRefundFocus:2,padRespawn:16,padFocus:6,padSide:2,maxLevel:6,xpBase:40,xpStep:12,xpKill:16,xpRite:28,xpCourt:48,xpWing:48,xpHijack:18,paCooldown:16,upgradeStacks:2,magClicker:4,pelletStep:2,phaserStep:2,drainStep:3,batteryLive:3,batteryStatic:1,batteryDead:1,surfLive:.03,surfStatic:.08,surfPhaser:.08,paStep:4,regenStep:3},bu=[{id:"clicker-mag",name:"CLICKER MAG",detail:`+${pt.magClicker} shots`,max:pt.upgradeStacks},{id:"scatter-fan",name:"SCATTER FAN",detail:`+${pt.pelletStep} pellets`,max:pt.upgradeStacks},{id:"phaser-reach",name:"PHASER REACH",detail:`+${pt.phaserStep} meters`,max:pt.upgradeStacks},{id:"quiet-air",name:"QUIET AIR",detail:`Drain −${pt.drainStep}`,max:pt.upgradeStacks},{id:"battery-max",name:"BATTERY MAX",detail:`+${pt.batteryLive} / +${pt.batteryStatic} / +${pt.batteryDead} magazines`,max:pt.upgradeStacks},{id:"fast-surf",name:"FAST SURF",detail:"Shoot sooner",max:pt.upgradeStacks},{id:"pa-cycle",name:"PA CYCLE",detail:`Horn −${pt.paStep}s`,max:pt.upgradeStacks},{id:"live-feed",name:"LIVE FEED",detail:`Regen +${pt.regenStep}`,max:pt.upgradeStacks}];function rn(n,t,e){return Math.max(t,Math.min(e,n))}function qr(n){const t=(n==null?void 0:n.mods)||{},e=t.surf||0;return{...pt,clickerMag:pt.clickerMag+(t.clickerMag||0)+(t.batteryLive||0),scatterMag:pt.scatterMag+(t.batteryStatic||0),phaserMag:pt.phaserMag+(t.batteryDead||0),staticPellets:pt.staticPellets+(t.staticPellets||0),phaserRange:pt.phaserRange+(t.phaserRange||0),deadDrain:Math.max(8,pt.deadDrain-(t.deadDrain||0)),liveRegen:pt.liveRegen+(t.liveRegen||0),liveCooldown:Math.max(.11,+(pt.liveCooldown-e*pt.surfLive).toFixed(2)),staticCooldown:Math.max(.32,+(pt.staticCooldown-e*pt.surfStatic).toFixed(2)),phaserCooldown:Math.max(.3,+(pt.phaserCooldown-e*pt.surfPhaser).toFixed(2)),paCooldown:Math.max(8,pt.paCooldown-(t.paCut||0))}}function ls(n){const t=qr(n);return{LIVE:t.clickerMag,STATIC:t.scatterMag,DEAD_AIR:t.phaserMag}}function Vs(){return ls()}function lc(){return{channel:"LIVE",signal:pt.signalMax,health:pt.healthMax,fireCooldown:0,hurtTimer:0,batteries:Vs(),level:1,xp:0,pending:0,mods:{}}}function cc(n){return n==="Digit1"||n==="Numpad1"?"LIVE":n==="Digit2"||n==="Numpad2"?"STATIC":n==="Digit3"||n==="Numpad3"?"DEAD_AIR":null}function Tg(n,t){const e=Math.max(0,Gn.indexOf(n)),i=t>=0?1:-1;return Gn[(e+i+Gn.length)%Gn.length]}function Ag(n,t){return t==="LIVE"?!0:n.signal>=pt.minDrainSignal}function Rg(n,t){return Gn.includes(t)?n.channel===t?{state:n,result:"same"}:Ag(n,t)?{state:{...n,channel:t},result:"ok"}:{state:n,result:"denied"}:{state:n,result:"invalid"}}function Cg(n,t){let{channel:e,signal:i,fireCooldown:s,hurtTimer:r}=n,a=!1;s=Math.max(0,s-t),r=Math.max(0,r-t);const o=qr(n);if(e==="LIVE")i=Math.min(pt.signalMax,i+o.liveRegen*t);else{const c=e==="STATIC"?pt.staticDrain:o.deadDrain;i-=c*t,i<=0&&(i=0,e="LIVE",a=!0)}return{state:{...n,channel:e,signal:i,fireCooldown:s,hurtTimer:r},forced:a}}function Tu(n){var t;return(t=pt.speed[n])!=null?t:pt.speed.LIVE}function Pg(n,t){var i;const e=(i=ls(n)[t])!=null?i:0;return!n.batteries||n.batteries[t]==null?e:n.batteries[t]}function kr(n,t){const e=qr(t);return n==="LIVE"?{kind:"hitscan",name:"CLICKER",pellets:1,spread:0,damage:pt.liveDamage,range:pt.liveRange,falloff:pt.liveFalloff,cooldown:e.liveCooldown,cost:1,phases:!1}:n==="STATIC"?{kind:"spread",name:"SCATTER",pellets:e.staticPellets,spread:pt.staticSpread,damage:pt.staticPellet,range:pt.staticRange,falloff:pt.staticFalloff,cooldown:e.staticCooldown,cost:1,phases:!1}:n==="DEAD_AIR"?{kind:"phase",name:"PHASER",pellets:1,spread:0,damage:pt.phaserDamage,range:e.phaserRange,falloff:pt.phaserFalloff,cooldown:e.phaserCooldown,cost:1,phases:!0}:{kind:"none",name:"",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0,cost:0,phases:!1}}function uc(n){const t=kr(n.channel,n);if(n.health<=0)return{state:n,profile:t,fired:!1,reason:"dead"};if(t.kind==="none")return{state:n,profile:t,fired:!1,reason:"none"};if(n.fireCooldown>0)return{state:n,profile:t,fired:!1,reason:"wait"};const e=Pg(n,n.channel);if(e<t.cost)return{state:n,profile:t,fired:!1,reason:"dry"};const i={...n.batteries||Vs(),[n.channel]:e-t.cost};return{state:{...n,batteries:i,fireCooldown:t.cooldown},profile:t,fired:!0,reason:"ok"}}function Au(n,t={}){const e=ls(n),i={...n.batteries||Vs()};let s=0;for(const r of Gn){const a=t[r]||0;if(a<=0)continue;const o=rn(i[r]+a,0,e[r]);s+=o-i[r],i[r]=o}return{state:{...n,batteries:i},gained:s}}function Ca(n){return{...n,batteries:Vs()}}function Dg(n){const t={LIVE:pt.paRefund,STATIC:pt.paRefund,DEAD_AIR:pt.paRefund};return Gn.includes(n.channel)&&(t[n.channel]+=pt.paRefundFocus),Au(n,t)}function Ru(n){return n>=pt.maxLevel?0:pt.xpBase+(Math.max(1,n)-1)*pt.xpStep}function Ig(n){const t=Ru((n==null?void 0:n.level)||1);return t?rn(((n==null?void 0:n.xp)||0)/t,0,1):1}function Pa(n,t){const e=Math.max(0,t||0);if(e<=0)return{state:n,leveled:0};let i=n.level||1,s=n.xp||0,r=n.pending||0;if(i>=pt.maxLevel)return{state:n,leveled:0};s+=e;let a=0;for(;i<pt.maxLevel;){const o=Ru(i);if(!(o>0)||s<o)break;s-=o,i+=1,r+=1,a+=1}return i>=pt.maxLevel&&(s=0),{state:{...n,level:i,xp:s,pending:r},leveled:a}}function Lg(n,t){const e={...n||{}};return t==="clicker-mag"?e.clickerMag=(e.clickerMag||0)+pt.magClicker:t==="scatter-fan"?e.staticPellets=(e.staticPellets||0)+pt.pelletStep:t==="phaser-reach"?e.phaserRange=(e.phaserRange||0)+pt.phaserStep:t==="quiet-air"?e.deadDrain=(e.deadDrain||0)+pt.drainStep:t==="battery-max"?(e.batteryLive=(e.batteryLive||0)+pt.batteryLive,e.batteryStatic=(e.batteryStatic||0)+pt.batteryStatic,e.batteryDead=(e.batteryDead||0)+pt.batteryDead):t==="fast-surf"?e.surf=(e.surf||0)+1:t==="pa-cycle"?e.paCut=(e.paCut||0)+pt.paStep:t==="live-feed"&&(e.liveRegen=(e.liveRegen||0)+pt.regenStep),e[t]=((n==null?void 0:n[t])||0)+1,e}function Da(n){const t=bu.filter(r=>{var a;return(((a=n==null?void 0:n.mods)==null?void 0:a[r.id])||0)<r.max}),e=Math.min(3,t.length),i=t.length?((n==null?void 0:n.level)||1)%t.length:0,s=[];for(let r=0;r<e;r++)s.push(t[(i+r)%t.length]);return s}function Ug(n,t){var c,l;const e=bu.find(u=>u.id===t);if(!e||(n.pending||0)<=0)return{state:n,applied:!1};if((((c=n.mods)==null?void 0:c[t])||0)>=e.max)return{state:n,applied:!1};const i=Lg(n.mods,t),s={...n,mods:i,pending:n.pending-1},r=ls(n),a=ls(s),o={...n.batteries||Vs()};for(const u of Gn){const h=(l=o[u])!=null?l:r[u];o[u]=Math.min(a[u],h+Math.max(0,a[u]-r[u]))}return{state:{...s,batteries:o},applied:!0,upgrade:e}}function Ng(n){return{id:"drop-"+n.id,kind:"battery",x:n.x,z:n.z,amounts:{LIVE:pt.dropLive,STATIC:pt.dropStatic,DEAD_AIR:pt.dropDead},cloaked:!1,taken:!1}}function Cu(n){const t={LIVE:pt.padSide,STATIC:pt.padSide,DEAD_AIR:pt.padSide};return Gn.includes(n)&&(t[n]=pt.padFocus),t}function Fg(n,t){return n!=null&&n.pad?{...n,taken:!0,respawnAt:(t||0)+pt.padRespawn}:{...n,taken:!0}}function Og(n,t){let e=!1;const i=n.map(s=>!s.pad||!s.taken||s.respawnAt==null||t<s.respawnAt?s:(e=!0,{...s,taken:!1,respawnAt:null}));return e?i:n}function zg(n,t){var e;if(!n)return"";if(n.kind==="signal")return"SIGNAL CACHE";if(n.kind==="health")return"AID KIT";if(n.kind==="battery"&&n.pad){const i=(e=Cu(t)[t])!=null?e:pt.padFocus;return`${kr(t,null).name} +${i}`}return n.kind==="battery"?"BATTERY":""}function hc(n,t,e,i){if(!(t>=0)||t>e||e<=0)return 0;const s=t/e;return n*(1-i*s*s)}function Yo(n,t){return{...n,signal:rn(n.signal+t,0,pt.signalMax)}}function Bg(n,t){return{...n,health:rn(n.health+t,0,pt.healthMax)}}function kg(n,{distance:t,channel:e,burst:i}){const s=e==="STATIC"||t<=pt.aggressiveRange||!!i,r=s?pt.aggressiveKillSignal:pt.cleanKillSignal;return{state:Yo(n,r),amount:r,aggressive:s}}function fc(n,t){if(n.hurtTimer>0||n.health<=0)return{state:n,hit:!1,dead:n.health<=0};const e=Math.max(0,n.health-t);return{state:{...n,health:e,hurtTimer:pt.hurtIframes},hit:!0,dead:e<=0}}function Hg(n,t){return!(!n||n.floor||n.maxY!=null&&n.maxY<.3||n.minY!=null&&n.minY>1.65||n.phaseGate&&t==="DEAD_AIR")}function Ao(n,t,e,i,s){for(const r of i){if(!Hg(r,s))continue;const a=rn(n,r.minX,r.maxX),o=rn(t,r.minZ,r.maxZ),c=n-a,l=t-o;if(c*c+l*l<e*e)return r}return null}function Vg(n,t,e,i,s,r,a){let o=n+e;Ao(o,t,s,r,a)&&(o=n);const c=t+i;return Ao(o,c,s,r,a)?{x:o,z:t}:{x:o,z:c}}function Gg(n,t,e,i,s){let r=n,a=t;for(let o=0;o<4;o++){const c=Ao(r,a,e,i,s);if(!c)break;const l=rn(r,c.minX,c.maxX),u=rn(a,c.minZ,c.maxZ);let h=r-l,d=a-u;const f=Math.hypot(h,d);if(f<1e-5){const m=r-c.minX,_=c.maxX-r,g=a-c.minZ,p=c.maxZ-a,E=Math.min(m,_,g,p);E===m?r=c.minX-e-.01:E===_?r=c.maxX+e+.01:E===g?a=c.minZ-e-.01:a=c.maxZ+e+.01}else{const m=e-f+.01;r+=h/f*m,a+=d/f*m}}return{x:r,z:a}}function Pu(n,t,e,i,s,r,a,o){const c=Math.hypot(e,i),l=Math.max(1,Math.ceil(c/.25));let u=n,h=t;for(let f=0;f<l;f++){const m=Vg(u,h,e/l,i/l,s,r,a);u=m.x,h=m.z}const d=Gg(u,h,s,r,a);return o?{x:rn(d.x,o.minX,o.maxX),z:rn(d.z,o.minZ,o.maxZ)}:d}function Du(n,t,e,i,s,r,a,o,c,l){const u=a-n,h=o-t,d=c-e,f=u*i+h*s+d*r,m=u*u+h*h+d*d-f*f,_=l*l;if(m>_)return null;const g=Math.sqrt(Math.max(0,_-m)),p=f-g,E=f+g;return p>=0?p:E>=0?E:null}function Wg(n,t,e,i,s,r,a,o){let c=0,l=o;const u=[[n,i,a.minX,a.maxX],[t,s,a.minY,a.maxY],[e,r,a.minZ,a.maxZ]];for(const[d,f,m,_]of u){if(Math.abs(f)<1e-8){if(d<m||d>_)return null;continue}let g=(m-d)/f,p=(_-d)/f;if(g>p){const E=g;g=p,p=E}if(g>c&&(c=g),p<l&&(l=p),l<c)return null}const h=c>=0?c:l;return h<0||h>o?null:h}function Zo(n,t,e,i,s,r,a,o){let c=null,l=a;for(const u of o){if(u.noShoot)continue;const h=Wg(n,t,e,i,s,r,u,l);h!=null&&h<l&&(l=h,c={t:h,collider:u,x:n+i*h,y:t+s*h,z:e+r*h})}return c}function dc(n,t){if(!n.alive)return{...n,visible:!0,exposed:!1,hittable:!1};if(!n.cloaked)return{...n,visible:!0,exposed:t==="STATIC",hittable:!0};const e=t==="STATIC"||n.reveal>0;return{...n,visible:e,exposed:e,hittable:e}}function pc(n,t,e){if(!n.cloaked||!n.alive)return dc(n,e);let i=n.reveal||0;return e==="STATIC"?i=pt.revealDuration:i=Math.max(0,i-t),dc({...n,reveal:i},e)}function Xg(n,t,e,i,s,r={}){const a=r.phase?s.filter(u=>!u.phaseGate):s;let o=e,c=null;for(const u of i){if(!u.alive||!u.hittable)continue;const h=[{y:(u.y||0)+1.62,r:.26,weak:!0},{y:(u.y||0)+.98,r:.46,weak:!1}];for(const d of h){const f=Du(n.x,n.y,n.z,t.x,t.y,t.z,u.x,d.y,u.z,d.r);f!=null&&f>.02&&f<o&&(o=f,c={kind:"enemy",id:u.id,t:f,weak:d.weak,x:n.x+t.x*f,y:n.y+t.y*f,z:n.z+t.z*f})}}const l=Zo(n.x,n.y,n.z,t.x,t.y,t.z,o,a);return l&&l.t<o?{kind:"world",t:l.t,x:l.x,y:l.y,z:l.z,id:l.collider.id}:c}function qg(n,t){const e=n.lastHitAt!=null&&t-n.lastHitAt<=pt.burstWindow;return{enemy:{...n,lastHitAt:t},burst:e}}function Yg(n,{weak:t,damage:e}){if(!n.alive||!n.hittable||e<=0)return{enemy:n,dealt:0,killed:!1};let i=e;t&&n.exposed&&(i*=pt.weakMult);const s=n.hp-i,r=s<=0;return{enemy:{...n,hp:r?0:s,hits:(n.hits||0)+1,alive:!r,hittable:!r&&n.hittable},dealt:i,killed:r}}function Zg(n,t,e,i,s,r){const a=[],o=Math.max(0,i|0);for(let c=0;c<o;c++){const l=o===1&&s===0?0:(r()*2-1)*s,u=o===1&&s===0?0:(r()*2-1)*s,h=n.x+t.x*l+e.x*u,d=n.y+t.y*l+e.y*u,f=n.z+t.z*l+e.z*u,m=Math.hypot(h,d,f)||1;a.push({x:h/m,y:d/m,z:f/m})}return a}function Iu(n,t,e,i,s,r,a){const o=i-n,c=s-t,l=r-e,u=Math.hypot(o,c,l);return u<.001?!0:Zo(n,t,e,o/u,c/u,l/u,Math.max(0,u-.25),a)==null}function Kg(n,t){if(!t||t.taken)return{state:n,pickup:t,took:!1};if(t.kind==="signal")return{state:Yo(n,t.amount),pickup:{...t,taken:!0},took:!0};if(t.kind==="health")return n.health>=pt.healthMax?{state:n,pickup:t,took:!1}:{state:Bg(n,t.amount),pickup:{...t,taken:!0},took:!0};if(t.kind==="battery"){const e=t.pad?Cu(n.channel):t.amounts||{},i=Au(n,e);return i.gained<=0?{state:n,pickup:t,took:!1}:{state:i.state,pickup:{...t,taken:!0},took:!0}}return{state:n,pickup:t,took:!1}}function jg(n,t){return!n||n.taken?!1:n.cloaked?t==="STATIC":!0}function $g(n,t){const e=Math.hypot(n,t);return e<1e-6?{x:0,z:0}:{x:n/e,z:t/e}}function Jg(n,t,e){var P;if(!n.alive)return{enemy:n,shot:null};if(n.dormant)return{enemy:{...n,hurt:Math.max(0,(n.hurt||0)-t)},shot:null};let i=pc(n,t,e.channel);if(!i.alive)return{enemy:i,shot:null};const s=e.player.x-i.x,r=e.player.z-i.z,a=Math.hypot(s,r);if((a<18||e.player.forceAggro)&&(i.aggro=!0),i.cloaked&&a<3.05&&(i.reveal=Math.max(i.reveal||0,1.25)),i=pc(i,0,e.channel),(i.stun||0)>0)return i.stun-=t,i.windup=0,i.hurt=Math.max(0,(i.hurt||0)-t),a>.001&&i.aggro&&(i.yaw=Math.atan2(s,r)),{enemy:i,shot:null};const o=i.cloaked&&!i.visible;if(!i.aggro||o)return i.hurt=Math.max(0,(i.hurt||0)-t),{enemy:i,shot:null};const l=a<17&&Iu(i.x,1.45,i.z,e.player.x,(P=e.player.y)!=null?P:1.2,e.player.z,e.colliders);i.hurt=Math.max(0,(i.hurt||0)-t),i.cooldown=(i.cooldown||0)-t;let u=null;if(i.windup>0?(i.windup-=t,i.windup<=0&&(i.windup=0,l&&(u=Qg(i,e,a)))):l&&i.cooldown<=0&&(i.windup=.28,i.cooldown=1.28+e.rng()*.45),i.windup>0)return a>.001&&(i.yaw=Math.atan2(s,r)),{enemy:i,shot:u};const h=a>.001?{x:s/a,z:r/a}:{x:0,z:1},d={x:-h.z,z:h.x};i.strafeT=(i.strafeT||0)-t,i.strafeT<=0&&(i.strafeSign=(i.strafeSign||1)*-1,i.strafeT=.75+e.rng()*1.05);let f=d.x*i.strafeSign*.9,m=d.z*i.strafeSign*.9;if(a>10.2?(f+=h.x,m+=h.z):a<5.2&&(f-=h.x*.85,m-=h.z*.85),e.allies)for(const N of e.allies){if(!N.alive||N.id===i.id)continue;const w=i.x-N.x,x=i.z-N.z,A=Math.hypot(w,x);A<1.15&&A>.001&&(f+=w/A*1.4,m+=x/A*1.4)}const _=$g(f,m),g=Tu("STATIC")*.62*(i.hurt>0?.25:1);let p=_.x*g*t,E=_.z*g*t;const b=Pu(i.x,i.z,p,E,.42,e.colliders,"LIVE",null);let y=b.x,k=b.z;const D=wg[i.id];return D&&(y<D.minX||y>D.maxX||k<D.minZ||k>D.maxZ)&&(y=i.x,k=i.z),i.x=y,i.z=k,a>.001&&(i.yaw=Math.atan2(s,r)),{enemy:i,shot:u}}function Qg(n,t,e){var h;const i=n.x,s=1.32,r=n.z,a=t.player.x-i+(t.rng()-.5)*.35,o=((h=t.player.y)!=null?h:1.15)-s+(t.rng()-.5)*.12,c=t.player.z-r+(t.rng()-.5)*.35,l=Math.hypot(a,o,c)||1,u=14.5;return{x:i,y:s,z:r,vx:a/l*u,vy:o/l*u,vz:c/l*u,damage:pt.boltDamage,life:2.1,dist:e}}function Lu(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Ce;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=mc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const m=mc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function mc(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new He(a,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<e;m++){const _=u.getComponent(d,m);o.setComponent(d+h,m,_)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function Ki(n,t,e,i,s){const r=-s/2,a=s/2,o=[[-n/2,r,t/2],[n/2,r,t/2],[n/2,r,-t/2],[-n/2,r,-t/2],[-e/2,a,i/2],[e/2,a,i/2],[e/2,a,-i/2],[-e/2,a,-i/2]],c=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],l=[],u=[];for(const d of c){const[f,m,_,g]=d.map(p=>o[p]);l.push(...f,...m,..._,...f,..._,...g),u.push(0,0,1,0,1,1,0,0,1,1,0,1)}const h=new Ce;return h.setAttribute("position",new ue(l,3)),h.setAttribute("uv",new ue(u,2)),h.computeVertexNormals(),h}function Ia(n,t=24){const e=n.map(([s,r])=>new Ct(s,r)),i=new Zn(e,t);return i.computeVertexNormals(),i}function qt(n,t,e=0,i=0,s=0){const r=new ct(n,t);return r.position.set(e,i,s),r.castShadow=!0,r.receiveShadow=!0,r}function La(n){return Lu(n,!1)}const t_=[[.02,.2],[.1,.175],[.148,.11],[.164,.04],[.158,-.03],[.132,-.09],[.09,-.135],[.04,-.158]],e_=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],n_=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];let Es=null;function Ko(){if(Es)return Es;const n=[],t=new Se(.046,12,10);t.scale(1.5,.75,1.45),t.translate(0,-.575,.02),n.push(t);for(let u=0;u<4;u++){const h=-.042+u*.028,d=.05-Math.abs(u-1.5)*.006,f=.28+(u===0||u===3?.12:0),m=new re(.011,.013,d,6);m.translate(0,-d*.5,0),m.rotateX(.16),m.translate(h,-.62,.05);const _=new re(.008,.011,d*.82,6);_.translate(0,-d*.38,0),_.rotateX(f),_.translate(h,-.62-d*.7,.055),n.push(m,_)}const e=new re(.009,.011,.04,6);e.translate(0,-.02,0),e.rotateZ(.85),e.translate(.048,-.59,.015);const i=new re(.007,.009,.028,6);i.translate(0,-.014,0),i.rotateZ(1.15),i.rotateX(.25),i.translate(.062,-.6,.03),n.push(e,i);const s=new Ot(.1,.025,.2);s.translate(0,-.012,.02);const r=new Ot(.088,.038,.13);r.translate(0,.016,-.005);const a=[],o=new Ot(.05,.055,.16);o.translate(0,-.56,.1),a.push(o);const c=new Ot(.03,.03,.07);c.translate(0,-.545,.16),a.push(c);const l=new Ot(.038,.07,.04);l.translate(0,-.61,.04),a.push(l),Es={helmet:Ia(t_,36),torso:Ia(e_,32),robe:Ia(n_,36),visor:new Se(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:Ki(.34,.2,.48,.26,.4),abdomen:Ki(.3,.18,.34,.2,.18),pelvis:Ki(.32,.2,.28,.18,.14),pec:Ki(.15,.1,.17,.12,.2),shoulder:Ki(.1,.1,.14,.12,.08),thigh:new re(.055,.072,.34,12),shin:new re(.04,.055,.32,12),foot:La([s,r]),upper:new re(.04,.05,.26,12),forearm:new re(.03,.04,.22,12),hand:La(n),gun:La(a),collar:new re(.07,.09,.08,8),joint:new Se(1,16,12),skirt:Ki(.34,.16,.5,.22,.62),tabard:new Ot(.22,.58,.045),stole:new Ot(.09,.5,.04),muzzle:new Ot(.028,.028,.04),seam:new Ot(.2,.028,.02)};for(const u of Object.values(Es))if(!(!(u!=null&&u.index)||u.attributes.tangent||!u.attributes.uv||!u.attributes.normal))try{u.computeTangents()}catch(h){}return Es}const Ro=[];let Co=1;const i_=ne.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );","vec4 envMapColor = sampleProbe( envMapRotation * worldNormal, 1.0 );").replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );","vec4 envMapColor = sampleProbe( envMapRotation * reflectVec, roughness );");function s_(n,t,e){n.envMap=t||null,n.envMapIntensity=t?1.15:.72,!(!t||!e)&&(n.customProgramCacheKey=()=>"visor-dual-probe",n.onBeforeCompile=i=>{i.uniforms.courtMap={value:e},i.uniforms.probeMix={value:Co},n.userData.probeShader=i,i.fragmentShader=i.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`#ifdef USE_ENVMAP
uniform sampler2D courtMap;
uniform float probeMix;
vec4 sampleProbe(vec3 dir, float roughness) {
  if (probeMix >= 0.999) return textureCubeUV(courtMap, dir, roughness);
  if (probeMix <= 0.001) return textureCubeUV(envMap, dir, roughness);
  return mix(textureCubeUV(envMap, dir, roughness), textureCubeUV(courtMap, dir, roughness), probeMix);
}
#endif
${i_}`)},Ro.push(n))}let Ua=null;function Uu(n){if(!Ua){const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d"),s=i.createRadialGradient(32,32,2,32,32,31);s.addColorStop(0,"rgba(0,0,0,0.48)"),s.addColorStop(.5,"rgba(0,0,0,0.2)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,64,64);const r=new fi(e);r.colorSpace=Ve,Ua=new oe({map:r,transparent:!0,depthWrite:!1})}const t=new ct(new oi(n,24),Ua);return t.rotation.x=-Math.PI/2,t.position.y=.025,t.castShadow=!1,t.receiveShadow=!1,t}function Ei(n,t=0,e=0){return n.userData.rest=t,n.userData.restI=e,n.emissive=new Kt(t),n.emissiveIntensity=e,n}function gc(n,t){const e=n.shinGrime.clone();return e.wrapS=Cn,e.offset.x=t,Ei(new ke({map:e,roughness:.96,metalness:.02,envMapIntensity:.14}))}function Nu(n,t){const e=(t==null?void 0:t.aisle)||null,i=(t==null?void 0:t.court)||null,s=Ei(new wa({map:n.pearl,normalMap:n.pearlNormal,roughnessMap:n.pearlRough,roughness:.85,metalness:.02,clearcoat:.58,clearcoatRoughness:.24,envMapIntensity:.36}));s.normalScale.set(.45,.45);const r=Ei(new ke({map:n.pearlWorn,normalMap:n.pearlNormal,roughnessMap:n.pearlRough,roughness:1,metalness:.02,envMapIntensity:.22}));r.normalScale.set(.65,.65);const a=Ei(new ke({map:n.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),o=Ei(new wa({color:461070,roughness:.035,metalness:.12,clearcoat:1,clearcoatRoughness:.03,iridescence:0,ior:1.55,reflectivity:1}));s_(o,e,i),o.polygonOffset=!0,o.polygonOffsetFactor=-2,o.polygonOffsetUnits=-2;const c=Ei(new wa({map:n.cloth,normalMap:n.clothNormal,roughnessMap:n.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new Kt(16183784),envMapIntensity:.32}));c.normalScale.set(.4,.4);const l=Ei(new ke({map:n.gold,normalMap:n.goldNormal,roughnessMap:n.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);l.normalScale.set(.35,.35);const u=new oe({color:16757066}),h=gc(n,0),d=gc(n,.17);return{pearl:s,worn:r,joint:a,visor:o,cloth:c,gold:l,amber:u,grime:h,grimeR:d}}function Mr(n,t,e,i,s){const r=qt(Ko().joint,n,e,i,s);return r.scale.setScalar(t),r}function si(n,t,e=16774894){for(const i of n)t>.02?(i.emissive.setHex(e),i.emissiveIntensity=t):(i.emissive.setHex(i.userData.rest||0),i.emissiveIntensity=i.userData.restI||0)}function r_(n,t={}){const e=new ae,i=Ko(),s=Nu(n,t.probes),r=[],a=qt(i.torso,s.pearl),o=qt(new re(.188,.188,.048,18),s.joint,0,1.02,0),c=qt(i.collar,s.joint,0,1.5,0),l=new ae;l.position.set(0,1.66,0);const u=qt(i.helmet,s.pearl);u.scale.set(1.06,.96,1.08);const h=qt(new Se(.172,40,24),s.visor,0,-.045,.168);h.scale.set(1.18,1.14,.36);const d=qt(new Se(.026,12,8),s.pearl,0,.148,.12);d.scale.set(1,.65,.5);const f=qt(i.seam,s.amber,0,-.02,.185);f.visible=!1,f.castShadow=!1,l.add(u,h,d,f);const m=qt(new Ot(.32,.22,.028),s.pearl,0,1.3,.22);m.castShadow=!1;const _=qt(new Se(.14,14,10),s.pearl,0,.74,0);_.scale.set(1.65,.48,1.05),_.castShadow=!1,r.push(a,o,c,l,m,_);function g(w,x){const A=new ae;if(x){A.add(Mr(s.joint,.055,0,0,0)),A.add(qt(i.upper,s.pearl,0,-.16,0)),A.add(Mr(s.joint,.042,0,-.3,0)),A.add(qt(i.forearm,s.joint,0,-.42,0));const C=o_(s.joint,w);A.add(C.rig),A.userData.digits=C.digits}else{A.add(Mr(s.joint,.058,0,0,0)),A.add(qt(i.thigh,s.pearl,0,-.2,0)),A.add(Mr(s.joint,.048,0,-.38,0));const C=qt(new Se(.046,10,8),s.pearl,0,-.38,.042);C.scale.set(1.05,.8,.5),C.castShadow=!1,A.add(C);const O=qt(i.shin,s.worn,0,-.56,0);O.rotation.y=Math.PI,O.scale.set(1.12,1,.86),A.add(O);const W=qt(new Ot(.078,.24,.016),w<0?s.grime:s.grimeR,0,-.58,.058);W.castShadow=!1,A.add(W);const Z=qt(i.foot,s.worn,0,-.76,.03);A.add(Z)}return A}const p=g(-1,!1);p.position.set(-.12,.8,0),p.rotation.z=.08;const E=g(1,!1);E.position.set(.12,.8,0),E.rotation.z=-.08;const b=g(-1,!0);b.position.set(-.32,1.4,0),b.rotation.z=.42;const y=g(1,!0);y.position.set(.32,1.4,0),y.rotation.z=-.36;const k=qt(i.gun,s.joint,.045,.02,.02),D=qt(i.muzzle,s.amber,.045,-.525,.22);D.castShadow=!1,y.add(k,D);const P=Uu(.48);e.add(...r,p,E,b,y,P);let N=null;if(t.vestment){const w=qt(i.tabard,s.cloth,0,.92,.16),x=qt(new Ot(.28,.42,.04),s.cloth,0,.95,-.14),A=qt(i.stole,s.gold,0,1.16,.18),C=qt(new Zn([new Ct(.18,0),new Ct(.32,.04),new Ct(.24,.1)],24),s.cloth,0,1.4,0),O=Ji(Fu(new Zn([new Ct(.2,.02),new Ct(.36,.2),new Ct(.4,.46),new Ct(.3,.74),new Ct(.22,.96)],28),6,.016),s.cloth,0,.06,0);N=O,e.add(w,x,A,C,O)}return Ou(e),{group:e,weak:f,lLeg:p,rLeg:E,lArm:b,rArm:y,muzzle:D,shadow:P,cloth:N,lDigits:b.userData.digits,rDigits:y.userData.digits,flashMats:[s.pearl,s.worn,s.joint,s.visor,s.cloth,s.gold,s.grime,s.grimeR],flash:0}}function a_(n,t){const e=new ae,i=Nu(n,t),s=Ko(),r=Ji(Fu(s.robe,8,.04),i.cloth),a=Ji(new Zn([new Ct(.26,0),new Ct(.64,.05),new Ct(.5,.14),new Ct(.22,.2)],28),i.cloth,0,1.46,0),o=i.cloth.clone();o.side=Ze;const c=Ji(new re(.3,.98,1.78,18,1,!0,Math.PI-1.25,2.5),o,0,.9,-.14);c.castShadow=!1;const l=qt(new Zn([new Ct(.12,0),new Ct(.22,.06),new Ct(.16,.16)],24),i.cloth,0,1.68,0),u=qt(new Ye(.58,.05,8,28),i.cloth,0,.08,0);u.rotation.x=Math.PI/2,u.castShadow=!1;const h=qt(new Ye(.63,.018,8,32),i.gold,0,.05,0);h.rotation.x=Math.PI/2;const d=qt(new Ye(.38,.022,8,28),i.gold,0,1.1,0);d.rotation.x=Math.PI/2;const f=i.cloth.clone();f.side=Ze;const m=[],_=[[0,.7,.06,1.2,.075],[.82,.36,.08,1.16,.068],[-.82,.36,.08,1.16,.068],[1.6,.4,.08,1.12,.06],[-1.6,.4,.08,1.12,.06],[Math.PI,.55,.1,1.08,.055]];for(const[v,U,F,B,J]of _){const Mt=Ji(ws(v,U,F,B,J),f);Mt.castShadow=!1,m.push(Mt),e.add(Mt)}for(const v of[-.36,.36]){const U=qt(ws(v,.045,.08,1.18,.09),i.gold);U.castShadow=!1,e.add(U)}const g=Ji(ws(0,.95,1.16,1.5,.055,6),f);g.castShadow=!1;const p=qt(ws(0,1.05,1.12,1.17,.07,3),i.gold);p.castShadow=!1;const E=qt(ws(0,.1,.42,1.14,.095,8),i.gold);E.castShadow=!1;const b=qt(new Se(.045,12,10),i.gold,0,.48,.58),y=new ae;y.position.set(0,2.05,0),y.scale.setScalar(1.18);const k=qt(s.helmet,i.pearl),D=qt(new Se(.028,12,8),i.pearl,0,.15,.11);D.scale.set(1,.62,.48);const P=qt(new Se(.175,40,24),i.visor,0,-.04,.162);P.scale.set(1.22,1.2,.38);const N=qt(new Ot(.22,.03,.018),i.amber,0,-.02,.175);N.visible=!1,N.castShadow=!1,y.add(k,D,P,N);const w=new ke({color:15123818,map:n.gold,normalMap:n.goldNormal,roughnessMap:n.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),x=new ct(new Ye(.58,.04,12,48),w);x.position.set(0,2.22,-.16);const A=new ct(new Ye(.4,.016,8,36),w);x.add(A);const C=qt(new Se(.032,10,8),i.gold,.58,0,0);x.add(C);const O=i.cloth.clone();O.side=Ze;function W(v){const U=new ae,F=qt(new re(.075,.13,.52,14),i.cloth,0,.26,0),B=qt(new re(.22,.08,.46,14,1,!0),O,0,.2,0);B.castShadow=!1;const J=qt(new Ye(.2,.016,8,16),i.gold,0,.44,0);J.rotation.x=Math.PI/2;const Mt=u_(i.pearl,i.amber,v);return U.add(F,B,J,Mt.rig),U.position.set(v*.42,1.48,.02),{pivot:U,hand:Mt.amber,digits:Mt.digits}}const Z=W(-1),K=W(1);for(const v of[1.42,1.28,1.14]){const U=qt(new Ye(.16,.01,8,22,Math.PI*.85),i.gold,0,v,.42);U.rotation.x=Math.PI/2,e.add(U)}const it=Uu(.9);return e.add(r,c,a,l,u,h,d,g,p,E,b,y,x,Z.pivot,K.pivot,it),e.position.set(Ns.x,0,Ns.z),Ou(e),{group:e,halo:x,haloMat:w,seam:N,shadow:it,lArm:Z.pivot,rArm:K.pivot,lHand:Z.hand,rHand:K.hand,lDigits:Z.digits,rDigits:K.digits,cloths:[r,c,a,g,...m],flashMats:[i.pearl,i.cloth,o,O,f,i.visor,i.gold],flash:0}}const _c=new Map;function yr(n,t,e){const i=`${n}:${t}:${e}`;let s=_c.get(i);return s||(s=new re(n,t,e,6),_c.set(i,s)),s}function o_(n,t){const e=new ae,i=t<0;e.position.set(t*.012,-.5,i?.09:.045),e.rotation.x=i?-.62:-.22;const s=new Se(.036,10,8);s.scale(2.35,.55,.72);const r=qt(s,n);r.castShadow=!1,e.add(r);const a=[],o=[-.074,-.025,.025,.074],c=[.09,.118,.106,.08];for(let f=0;f<4;f++){const m=new ae;m.position.set(o[f],-.02,.02);const _=c[f],g=qt(yr(.009,.0125,_),n,0,-_*.48,0);g.castShadow=!1;const p=qt(new Se(.012,8,6),n,0,-_*.92,0);p.castShadow=!1;const E=new ae;E.position.y=-_*.96;const b=_*.72,y=qt(yr(.0065,.0095,b),n,0,-b*.46,0);y.castShadow=!1,E.add(y),m.add(g,p,E),e.add(m),a.push({knuckle:m,tip:E})}const l=new ae;l.position.set(t*.082,.004,.028),l.rotation.z=-t*1.15;const u=qt(yr(.0085,.011,.052),n,0,-.028,0);u.castShadow=!1;const h=new ae;h.position.y=-.05;const d=qt(yr(.006,.0085,.038),n,0,-.02,0);return d.castShadow=!1,h.add(d),l.add(u,h),e.add(l),a.push({knuckle:l,tip:h}),{rig:e,digits:a}}const l_=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];function c_(n){const t=l_;if(n<=t[0][1])return t[0][0];for(let e=1;e<t.length;e++)if(n<=t[e][1]){const i=(n-t[e-1][1])/(t[e][1]-t[e-1][1]);return t[e-1][0]+(t[e][0]-t[e-1][0])*i}return t[t.length-1][0]}function ws(n,t,e,i,s,r=8){const a=new Ce,o=[],c=[],l=[],u=2;for(let d=0;d<=r;d++){const f=d/r,m=e+(i-e)*f,_=c_(m)+s;for(let g=0;g<=u;g++){const p=n-t/2+t*g/u;o.push(Math.sin(p)*_,m,Math.cos(p)*_),c.push(g/u,f)}}const h=u+1;for(let d=0;d<r;d++)for(let f=0;f<u;f++){const m=d*h+f;l.push(m,m+h,m+1,m+1,m+h,m+h+1)}return a.setAttribute("position",new ue(o,3)),a.setAttribute("uv",new ue(c,2)),a.setIndex(l),a.computeVertexNormals(),a}function u_(n,t,e){const i=new ae;i.position.set(0,.58,.1);const s=new Se(.055,12,8);s.scale(1.7,1.15,.4);const r=qt(s,n);r.castShadow=!1,i.add(r);const a=[],o=[-.058,-.02,.02,.058],c=[.09,.11,.1,.078];for(let m=0;m<4;m++){const _=new ae;_.position.set(o[m],.04,.02);const g=c[m],p=qt(new re(.012,.014,g,6),n,0,g*.48,0);p.castShadow=!1;const E=new ae;E.position.y=g*.9;const b=g*.7,y=qt(new re(.009,.012,b,6),n,0,b*.46,0);y.castShadow=!1,E.add(y),_.add(p,E),i.add(_),a.push({knuckle:_,tip:E})}const l=new ae;l.position.set(e*.078,-.006,.02),l.rotation.z=e*.85;const u=qt(new re(.01,.012,.05,6),n,0,.028,0);u.castShadow=!1;const h=new ae;h.position.y=.05;const d=qt(new re(.007,.01,.032,6),n,0,.016,0);d.castShadow=!1,h.add(d),l.add(u,h),i.add(l),a.push({knuckle:l,tip:h});const f=qt(new Ot(.09,.07,.014),t,0,.01,.04);return f.castShadow=!1,i.add(f),{rig:i,digits:a,amber:f}}function ri(n,t){for(let e=0;e<n.length;e++){const i=n[e],s=e===n.length-1?.55:1;i.knuckle.rotation.x=-t*s,i.tip.rotation.x=-t*.8*s}}function vc(n,t,e=0,i=1){if(!n)return;const s=Array.isArray(n)?n:[n];for(const r of s)r!=null&&r.morphTargetInfluences&&(r.morphTargetInfluences[0]=Math.sin(t*.75+e)*.6*i,r.morphTargetInfluences[1]=Math.sin(t*.5+e+.8)*.4*i)}function h_(n){const t=n.attributes.position;let e=1/0,i=-1/0;for(let o=0;o<t.count;o++){const c=t.getY(o);c<e&&(e=c),c>i&&(i=c)}const s=Math.max(.001,i-e),r=new Float32Array(t.count*3),a=new Float32Array(t.count*3);for(let o=0;o<t.count;o++){const c=Math.pow(Math.max(0,(i-t.getY(o))/s),1.35);r[o*3]=c*.08,a[o*3+2]=c*.055}return n.morphAttributes.position=[new ue(r,3),new ue(a,3)],n}function Ji(n,t,e=0,i=0,s=0){h_(n);const r=qt(n,t,e,i,s);return r.updateMorphTargets(),r}function Fu(n,t=7,e=.02){const i=n.clone(),s=i.attributes.position;for(let r=0;r<s.count;r++){const a=s.getX(r),o=s.getY(r),c=s.getZ(r),l=Math.hypot(a,c)||1,u=Math.atan2(a,c),h=.4+.6*Math.max(0,c/l),d=.4+.6*Math.min(1,Math.max(0,(1.35-o)/1.35)),f=Math.sin(u*t)*e*h*d;s.setXYZ(r,a+a/l*f,o,c+c/l*f)}return s.needsUpdate=!0,i.computeVertexNormals(),i.getAttribute("tangent")&&i.deleteAttribute("tangent"),i}function Ou(n){n.traverse(t=>{var i;const e=t.geometry;if(!(!t.isMesh||!((i=t.material)!=null&&i.normalMap)||!(e!=null&&e.index)||e.attributes.tangent)&&!(!e.attributes.uv||!e.attributes.normal))try{e.computeTangents()}catch(s){}})}function f_(n,t,e){Ro.length=0;const i=new Map,s=new Set(Br().map(l=>l.id));for(const l of[...wu(),...Br()]){const u=r_(t,{vestment:s.has(l.id),probes:e});u.group.position.set(l.x,0,l.z),u.group.visible=l.visible,u.death=0,u.died=!1,u.phase=Math.random()*Math.PI*2,u.prevX=l.x,u.prevZ=l.z,n.add(u.group),i.set(l.id,u)}const r=a_(t,e);r.died=!1,r.death=0,r.pose=0,n.add(r.group);const a=new Se(.08,7,5),o=new oe({color:16756768}),c=[];for(let l=0;l<16;l++){const u=new ct(a,o);u.visible=!1,u.frustumCulled=!1,n.add(u),c.push(u)}return{setProbeBlend(l){Co=Math.min(1,Math.max(0,(l- -17)/5));for(const u of Ro){const h=u.userData.probeShader;h&&(h.uniforms.probeMix.value=Co)}},reset(l){for(const u of l){const h=i.get(u.id);if(h){if(h.prevX=u.x,h.prevZ=u.z,h.group.position.set(u.x,0,u.z),h.group.rotation.set(0,0,0),h.group.scale.setScalar(1),h.flash=0,si(h.flashMats,0),h.weak.visible=!1,!u.alive){h.died=!0,h.death=0,h.group.visible=!1;continue}h.death=0,h.died=!1,h.group.visible=u.visible}}},resetPriest(l){r.died=!1,r.death=0,r.pose=0,r.flash=0,r.group.visible=!0,r.group.rotation.set(0,0,0),r.group.position.set(l.x,0,l.z),r.halo.scale.setScalar(1),si(r.flashMats,0),r.seam.visible=!1},syncPriest(l,u,h,d){if(!l.alive){r.died||(r.died=!0,r.death=1.05),r.death-=u;const P=1-Math.max(r.death,0)/1.05;r.group.visible=r.death>0,r.group.rotation.x=P*1.25,r.group.position.set(l.x,-P*.55,l.z),r.shadow.visible=!1,r.halo.scale.setScalar(Math.max(0,1-P)),r.seam.visible=!1,r.lArm.rotation.x=.9,r.rArm.rotation.x=.7,ri(r.lDigits,.85),ri(r.rDigits,.75),si(r.flashMats,P<.45?(1-P/.45)*2.4:0);return}r.died=!1,r.death=0,r.group.visible=!0,r.group.rotation.set(0,l.yaw||0,Math.sin(h*.8)*.008);const f=Math.sin(h*1.15)*.015;r.group.position.set(l.x,f,l.z),r.shadow.visible=!0,r.shadow.position.y=.025-f,r.halo.rotation.z=h*.15;const m=l.phase==="rite",_=m?1.28:l.windup>0?.4:1.12,g=l.windup>0?-.85:m?-.25:-.12;r.lArm.rotation.set(g,0,_),r.rArm.rotation.set(g,0,-_),vc(r.cloths,h,.2,1);const p=l.windup>0?.62:m?.1+Math.sin(h*2.2)*.04:.2+Math.sin(h*1.35)*.07;ri(r.lDigits,p),ri(r.rDigits,p);const E=!!l.haloVisible,b=E&&d==="STATIC";r.halo.visible=!0;const y=E?1+Math.sin(h*7)*.06:1;r.halo.scale.setScalar(y),r.haloMat.opacity=b?1:E?.96:.9,r.haloMat.emissiveIntensity=b?2.4:E?1.55:.85,r.seam.visible=!!l.exposed;const k=l.windup>0||l.phase==="rite";r.lHand.visible=k,r.rHand.visible=k;const D=k?1.45:1;r.lHand.scale.setScalar(D),r.rHand.scale.setScalar(D),l.hurt>0&&(r.flash=.2),r.flash=Math.max(0,r.flash-u),si(r.flashMats,r.flash>0?r.flash/.2*2.6:0)},sync(l,u,h,d){for(const f of l){const m=i.get(f.id);if(!f.alive){m.died||(m.died=!0,m.death=.85),m.death-=u;const b=1-Math.max(m.death,0)/.85;m.group.visible=m.death>0,m.group.rotation.x=b*1.35,m.group.position.set(f.x,-b*.4,f.z),m.shadow.visible=!1,m.group.scale.setScalar(1),m.lArm.rotation.x=.5+b*.6,m.rArm.rotation.x=.3+b*.9,ri(m.lDigits,.8),ri(m.rDigits,.9),m.lLeg.rotation.x=-.25*b,m.rLeg.rotation.x=.4*b,m.weak.visible=!1,si(m.flashMats,b<.4?(1-b/.4)*2.4:0);continue}m.died=!1,m.death=0,m.group.visible=!!f.visible;const _=Math.hypot(f.x-m.prevX,f.z-m.prevZ);m.prevX=f.x,m.prevZ=f.z;const g=Math.sin(h*1.4+m.phase)*(_>.004?.02:.012);m.group.rotation.set(0,f.yaw||0,Math.sin(h*1.1+m.phase)*.012),m.group.position.set(f.x,g,f.z),m.shadow.visible=!0,m.shadow.position.y=.025-g;const p=_>.004?Math.sin(h*8+m.phase):Math.sin(h*1.6+m.phase)*.15;if(m.lLeg.rotation.x=p*.7,m.rLeg.rotation.x=-p*.7,m.lArm.rotation.x=-p*.45,m.rArm.rotation.x=p*.25+(f.windup>0?-.95:-.06),m.weak.visible=!!f.exposed,f.hurt>0&&(m.flash=.16),m.flash=Math.max(0,m.flash-u),m.flash>0)si(m.flashMats,m.flash/.16*2.8),m.group.scale.setScalar(1.035);else if(f.cloaked&&f.visible){const b=.22+Math.sin(h*9)*.1;si(m.flashMats,b,16766888),m.group.scale.setScalar(1)}else si(m.flashMats,0),m.group.scale.setScalar(1);m.muzzle.scale.setScalar(f.windup>0?1.8:1);const E=.16+Math.sin(h*1.35+m.phase)*.05;ri(m.lDigits,E),ri(m.rDigits,f.windup>0?.8:.4),m.cloth&&vc(m.cloth,h,m.phase,.85),f.cloaked&&f.visible&&d!=="STATIC"&&f.reveal<.5&&(m.group.visible=Math.sin(h*46)>-.2)}},syncBolts(l){for(let u=0;u<c.length;u++){const h=c[u],d=l[u];if(!d){h.visible=!1;continue}h.visible=!0,h.position.set(d.x,d.y,d.z)}}}}const xc=["seam","choir","veil"],un={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},d_=2.05,p_=1.2,m_=2.62;function Mc(n){return n==="seam"?"LIVE · THE SEAM":n==="choir"?"STATIC · THE HALO":n==="veil"?"DEAD AIR · THE VEIL":""}function yc(){return{id:"visor-priest",boss:!0,x:Ns.x,y:Ns.y,z:Ns.z,yaw:0,hp:un.hp,maxHp:un.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:un.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function g_(n,t){const e=xc[n.riteIndex%xc.length];n.phase="rite",n.rite=e,n.timer=un.riteWindow,n.exposed=e==="seam",n.haloVisible=e==="choir",n.veilUp=e==="veil",n.windup=0,t.push({type:"announce",rite:e})}function zu(n){n.phase="recover",n.rite=null,n.exposed=!1,n.haloVisible=!1,n.veilUp=!1,n.windup=0,n.timer=un.recover,n.riteIndex+=1}function __(n,t,e){if(!n.alive||!n.active)return{priest:n,events:[]};const i=[],s={...n,hurt:Math.max(0,(n.hurt||0)-t),stun:Math.max(0,(n.stun||0)-t)};if(e&&e.player){const r=e.player.x-s.x,a=e.player.z-s.z;Math.hypot(r,a)>.05&&(s.yaw=Math.atan2(r,a))}return s.phase==="idle"?(s.timer-=t,s.timer<=0?g_(s,i):s.stun>0?s.windup=0:s.windup>0?(s.windup-=t,s.windup<=0&&(s.windup=0,s.shotCooldown=un.shotGap,i.push({type:"shot"}))):(s.shotCooldown-=t,s.shotCooldown<=0&&(s.windup=un.shotWindup))):s.phase==="rite"?(s.windup=0,s.timer-=t,s.timer<=0&&(i.push({type:"fail",rite:s.rite,damage:un.failDamage}),zu(s))):s.phase==="recover"&&(s.windup=0,s.timer-=t,s.timer<=0&&(s.phase="idle",s.timer=un.idle)),{priest:s,events:i}}function v_(n){return n>0?n*un.armor:0}function x_(n,t){const e=v_(t);if(!n||!n.alive||e<=0)return{priest:n,dealt:0,killed:!1};const i=n.hp-e,s=i<=0;return{priest:{...n,hp:s?0:i,alive:!s,hurt:.22,phase:s?"dead":n.phase,veilUp:s?!1:n.veilUp,haloVisible:s?!1:n.haloVisible,exposed:s?!1:n.exposed,rite:s?null:n.rite},dealt:e,killed:s}}function Sc(n,t){if(!n.alive||n.phase!=="rite")return{priest:n,broken:!1,dealt:0,killed:!1};if(!(n.rite==="seam"&&t.channel==="LIVE"&&t.weak&&!t.halo||n.rite==="choir"&&t.channel==="STATIC"&&t.halo||n.rite==="veil"&&t.channel==="DEAD_AIR"&&t.crossed))return{priest:n,broken:!1,dealt:0,killed:!1};const i=un.breakDamage,s=n.hp-i;if(s<=0)return{priest:{...n,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:i,killed:!0};const a={...n,hp:s,hurt:.28,broken:(n.broken||0)+1};return zu(a),{priest:a,broken:!0,dealt:i,killed:!1}}function M_(n,t,e,i,s){if(!i||!i.alive||!i.hittable)return null;const r=[{y:p_,r:.62,weak:!1,halo:!1},{y:d_,r:.3,weak:!0,halo:!1}];i.haloVisible&&s==="STATIC"&&r.push({y:m_,r:.42,weak:!1,halo:!0});let a=null,o=e;for(const c of r){const l=Du(n.x,n.y,n.z,t.x,t.y,t.z,i.x,(i.y||0)+c.y,i.z,c.r);l==null||l<=.02||l>=o||(o=l,a={kind:"priest",id:i.id,t:l,weak:c.weak,halo:c.halo,x:n.x+t.x*l,y:n.y+t.y*l,z:n.z+t.z*l})}return a}const zn={maxDist:16,cone:.3,stun:4.5,cooldown:16,retune:4.5,retuneMult:1.45,radius:16};function y_({origin:n,dir:t,point:e,maxDist:i,cone:s,blocked:r}){const a=e.x-n.x,o=e.y-n.y,c=e.z-n.z,l=Math.hypot(a,o,c);if(!(l>.05)||l>i||r)return{aimed:!1,dist:l};const u=(a*t.x+o*t.y+c*t.z)/l;return{aimed:u>=Math.cos(s),dist:l,dot:u}}function S_(n,t,e=zn.cooldown){const i=n.cooldownUntil||0;if(i>t)return{ok:!1,reason:"cooldown",cooldownUntil:i};const s=e>0?e:zn.cooldown;return{ok:!0,cooldownUntil:t+s}}function E_(n,t,e,i){return n.map(s=>!s.alive||s.room!=="chapel"||Math.hypot(s.x-t.x,s.z-t.z)>e?s:{...s,stun:Math.max(s.stun||0,i),windup:0})}function w_(n,t){const e=new ae;e.position.set(.18,-.28,-.48),n.add(e);const i=new ke({map:t.leather,normalMap:t.leatherNormal,roughnessMap:t.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});i.normalScale.set(.7,.7);const s=new ke({map:t.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),r=new ke({map:t.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new ke({map:t.wood,normalMap:t.woodNormal,roughnessMap:t.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new ke({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),c=new ke({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),l=new oe({color:6813439}),u=new ct(new Ot(.16,.055,.38),a);u.position.set(.02,-.02,.02);const h=new ct(new Ot(.11,.02,.3),o);h.position.set(.02,.012,.03);const d=new ct(new Ot(.07,.03,.04),r);d.position.set(.02,-.005,-.16),e.add(u,h,d);for(let et=0;et<2;et++)for(let st=0;st<4;st++){const _t=new ct(new Ot(.028,.012,.03),c);_t.position.set(-.012+et*.064,.026,.1-st*.055),e.add(_t)}const f=new ct(new Ot(.055,.028,.02),l);f.position.set(.02,-.004,-.2),e.add(f);const m=new ct(new re(.006,.006,.22,6),r);m.position.set(.07,.02,-.12),m.rotation.z=-.4,m.rotation.x=.5;const _=new ct(new Se(.012,8,6),r);_.position.set(.11,.1,-.2);const g=new ae;for(const et of[-1,1]){const st=new ct(new re(.007,.005,.16,6),r);st.position.set(et*.045,.03,-.16),st.rotation.x=1.15,st.rotation.z=et*-.55;const _t=new ct(new Se(.012,8,6),r);_t.position.set(et*.09,.07,-.22),g.add(st,_t)}g.visible=!1;const p=new ke({color:12963542,roughness:.22,metalness:.7,envMapIntensity:.45}),E=new ct(new Ot(.012,.028,.46),p);E.position.set(.02,-.01,-.38);const b=new ct(new Ot(.004,.008,.2),new oe({color:14015974}));b.position.set(.02,-.01,-.58);const y=new ae;y.add(E,b),y.visible=!1;const k=new Se(.045,12,8);k.scale(1.2,.62,1.35);const D=new ct(k,a);D.position.set(.02,-.02,-.15);const P=new ct(k,a);P.position.set(.02,-.02,.19);const N=new ct(new Ot(.018,.04,.2),o);N.position.set(-.068,-.03,.04);const w=N.clone();w.position.x=.108,e.add(m,_,g,y,D,P,N,w);for(let et=0;et<4;et++){const st=new ct(new re(.006,.006,.012,6),o);st.rotation.x=Math.PI/2,st.position.set(-.02+et%2*.028,-.01,-.08-Math.floor(et/2)*.02),e.add(st)}const x=new oe({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:Lr,side:Ze}),A=new ae;A.position.set(.02,-.004,-.24);const C=new ct(new be(.22,.05),x),O=new ct(new be(.22,.05),x);O.rotation.z=Math.PI/2;const W=new ct(new be(.08,.08),x);A.add(C,O,W),A.visible=!1,e.add(A);const Z=new zs(6813439,2.4,1.8,2);Z.position.copy(f.position),e.add(Z);const K=[];function it(et,st,_t){const wt=new ae,Lt=new Se(.046,14,10);Lt.scale(1.05,.48,1.35);const ft=new ct(Lt,i),Wt=new ct(new Ot(.11,.07,.16),s);Wt.position.set(0,.01,.12);const Nt=new ct(new Se(.02,8,6),i);Nt.scale.set(2.1,.7,.8),Nt.position.set(0,.02,-.04),wt.add(ft,Wt,Nt);const z=[.03,.038,.036,.028];for(let Ht=0;Ht<4;Ht++){const Et=-.034+Ht*.022,R=z[Ht],M=new ae;M.position.set(Et,.016,-.052);const q=new ct(new re(.0075,.0095,R,8),i);q.rotation.x=Math.PI/2,q.position.set(0,0,-R*.42);const tt=new ae;tt.position.set(0,-.002,-R*.78),tt.rotation.x=.22;const rt=new ct(new re(.0055,.0075,R*.82,8),i);rt.rotation.x=Math.PI/2,rt.position.set(0,0,-R*.36),tt.add(rt),M.add(q,tt),wt.add(M),K.push({knuckle:M,tip:tt,tipRest:.22})}const ee=new ae;ee.position.set(_t>0?.042:-.042,.018,-.02),ee.rotation.z=_t>0?-.7:.7;const Xt=new ct(new re(.0085,.011,.034,8),i);Xt.rotation.x=.35,Xt.position.set(0,.01,-.012);const kt=new ae;kt.position.set(0,.006,-.028),kt.rotation.x=.2;const bt=new ct(new re(.0065,.0085,.026,8),i);bt.rotation.x=.45,bt.position.set(0,0,-.014),kt.add(bt),ee.add(Xt,kt),wt.add(ee),K.push({knuckle:ee,tip:kt,tipRest:.2}),wt.position.set(et,-.05,st),wt.rotation.y=_t,wt.rotation.z=_t>0?.22:-.18,e.add(wt)}it(-.07,.06,.5),it(.12,.08,-.62),e.traverse(et=>{var _t;et.castShadow=!1,et.receiveShadow=!1,et.frustumCulled=!1;const st=et.geometry;!et.isMesh||!((_t=et.material)!=null&&_t.normalMap)||!(st!=null&&st.index)||st.attributes.tangent||st.attributes.uv&&st.attributes.normal&&st.computeTangents()});let v=0,U=0,F=0,B=0,J=0,Mt="LIVE",j=!1;const ut={x:.18,y:-.28,z:-.48};return{setChannel(et){j&&et!==Mt&&(U=.09,F=Math.max(F,.45)),j=!0,Mt=et,m.visible=et==="LIVE",_.visible=et==="LIVE",g.visible=et==="STATIC",y.visible=et==="DEAD_AIR",et==="LIVE"?(l.color.setHex(6813439),Z.color.setHex(6813439),Z.intensity=2.6):et==="STATIC"?(l.color.setHex(15921906),Z.color.setHex(16777215),Z.intensity=.8):(l.color.setHex(2761758),Z.intensity=0)},fire(et){if(et==="dry"||et==="none"){U=.14,v=.02,B=0;return}v=et==="spread"?.12:et==="phase"?.08:.055,F=et==="spread"?.85:et==="phase"?.5:.62,B=.045,x.color.set(et==="spread"?16053492:et==="phase"?14015974:13040639),A.scale.setScalar(et==="spread"?1.35:et==="phase"?.7:1),et==="phase"?A.position.z=-.62:A.position.z=-.24},setVisible(et){e.visible=et},update(et,st,_t={}){const wt=st>.35;J+=et*(wt?7.2+Math.min(st,9)*.28:1.5);const Lt=wt?.004+Math.min(st,9)*.00115:.0016,ft=_t.strafe||0;v+=(0-v)*(1-Math.exp(-12*et)),U+=(0-U)*(1-Math.exp(-14*et)),F+=(0-F)*(1-Math.exp(-7*et));const Wt=Math.sin(J*1.3)*.05;for(let Nt=0;Nt<K.length;Nt++){const z=K[Nt],ee=Wt+F*(.42+Nt%5*.05);z.knuckle.rotation.x=ee,z.tip.rotation.x=z.tipRest+ee*1.15}if(B-=et,A.visible=B>0,A.visible&&(A.rotation.z=B*18),Mt==="STATIC"){const Nt=.45+Math.random()*.55;l.color.setRGB(Nt,Nt,Nt)}e.position.x=ut.x+Math.cos(J)*Lt*.7-ft*.01,e.position.y=ut.y+Math.sin(J*2)*Lt+(wt?0:Math.sin(J)*.003),e.position.z=ut.z+v*.62,e.rotation.x=v*1.7+U*1.5+Math.sin(J*2)*Lt*2.2,e.rotation.y=.06-v*.25,e.rotation.z=-ft*.035+Math.sin(J)*Lt*1.4}}}function Be(n,t,e,i=1,s=1){const r=document.createElement("canvas");r.width=n,r.height=t,e(r.getContext("2d"),n,t);const a=new fi(r);return a.colorSpace=Ve,a.wrapS=Cn,a.wrapT=Cn,a.repeat.set(i,s),a.anisotropy=8,a.magFilter=sn,a.minFilter=En,a}function ji(n,t,e,i,s,r){n.fillStyle=s;for(let a=0;a<i;a++){const o=a*97%t,c=a*53%e;n.fillRect(o,c,r,r)}}function b_(n,t=1,e=1){const i=new fi(n);return i.colorSpace=kn,i.wrapS=Cn,i.wrapT=Cn,i.repeat.set(t,e),i.anisotropy=4,i.magFilter=sn,i.minFilter=En,i}function Bu(n,t,e,i=1,s=1){const r=document.createElement("canvas");r.width=n,r.height=t;const a=r.getContext("2d"),o=a.createImageData(n,t);for(let c=0;c<t;c++)for(let l=0;l<n;l++){const[u,h,d]=e(l,c,n,t),f=(c*n+l)*4;o.data[f]=u,o.data[f+1]=h,o.data[f+2]=d,o.data[f+3]=255}return a.putImageData(o,0,0),b_(r,i,s)}function xi(n,t,e,i,s=1,r=1){const a=new Float32Array(n*t);for(let o=0;o<t;o++)for(let c=0;c<n;c++)a[o*n+c]=e(c,o,n,t);return Bu(n,t,(o,c)=>{const l=a[c*n+(o+n-1)%n],u=a[c*n+(o+1)%n],h=a[(c+t-1)%t*n+o],d=a[(c+1)%t*n+o];let f=(l-u)*i,m=(h-d)*i;const _=1,g=Math.hypot(f,m,_)||1;return[f/g*127.5+127.5,m/g*127.5+127.5,_/g*127.5+127.5]},s,r)}function Mi(n,t,e,i=1,s=1){return Bu(n,t,(r,a)=>{const o=Math.max(0,Math.min(1,e(r,a,n,t)))*255;return[o,o,o]},i,s)}function T_(){const n=Be(256,256,(v,U,F)=>{v.fillStyle="#5c564c",v.fillRect(0,0,U,F);const B=64;for(let J=0;J<F;J+=B)for(let Mt=0;Mt<U;Mt+=B){const j=(Mt*3+J*7)%17/17,ut=j>.66?"#6a6358":j>.33?"#574f46":"#4e4840";v.fillStyle=ut,v.fillRect(Mt+2,J+2,B-4,B-4),v.fillStyle="rgba(20,16,12,0.35)",v.fillRect(Mt,J,B,2),v.fillRect(Mt,J,2,B)}v.fillStyle="rgba(30,22,14,0.28)",v.beginPath(),v.ellipse(48,180,28,10,.4,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(190,60,22,8,-.5,0,Math.PI*2),v.fill(),v.fillStyle="rgba(90,70,40,0.18)",v.fillRect(8,8,18,6)},8,6),t=Be(256,256,(v,U,F)=>{v.fillStyle="#c8bfb2",v.fillRect(0,0,U,F),v.fillStyle="#b3a898";for(let B=0;B<U;B+=64)v.fillRect(B,0,3,F);v.fillStyle="#9c9184",v.fillRect(0,168,U,10),v.fillStyle="#6e655c",v.fillRect(0,214,U,42),v.fillStyle="#8a8176",v.fillRect(0,210,U,6),v.fillStyle="rgba(70,50,30,0.12)";for(let B=0;B<20;B++)v.fillRect(B*41%U,20+B*17%120,16,5);ji(v,U,F,30,"rgba(255,255,255,0.04)",2)},3,2),e=Be(128,128,(v,U,F)=>{v.fillStyle="#8d8478",v.fillRect(0,0,U,F),v.fillStyle="#756c62";for(let B=0;B<U;B+=16)v.fillRect(B,0,2,F);v.fillStyle="rgba(40,30,20,0.2)",v.fillRect(0,F-18,U,18),v.fillStyle="#a39888",v.fillRect(0,8,U,4)},2,2),i=Be(128,128,(v,U,F)=>{v.fillStyle="#b7b1a6",v.fillRect(0,0,U,F),v.strokeStyle="#8e877c",v.lineWidth=3,v.strokeRect(1,1,U-2,F-2),v.fillStyle="#c9c3b6",v.fillRect(8,8,U-16,F-16),v.fillStyle="rgba(80,70,50,0.15)",v.fillRect(18,40,30,8),v.fillRect(70,80,22,6)},6,6),s=Be(128,128,(v,U,F)=>{v.fillStyle="#5c3a22",v.fillRect(0,0,U,F);for(let B=0;B<F;B+=3){const J=70+B*17%50;v.strokeStyle=`rgb(${J+36}, ${J-4}, ${J-32})`,v.beginPath(),v.moveTo(0,B),v.quadraticCurveTo(U*.5,B+(B%9-4),U,B),v.stroke()}v.fillStyle="rgba(30,16,6,0.35)",v.fillRect(18,0,4,F),v.fillRect(78,0,3,F),v.beginPath(),v.ellipse(46,40,8,14,.2,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(96,90,6,10,-.3,0,Math.PI*2),v.fill()}),r=Be(128,128,(v,U,F)=>{v.fillStyle="#16130f",v.fillRect(0,0,U,F),v.fillStyle="#e2a23a";const B=18;for(let J=-8;J<16;J++)v.beginPath(),v.moveTo(J*B,0),v.lineTo(J*B+B*.55,0),v.lineTo(J*B+B*.55-F,F),v.lineTo(J*B-F,F),v.fill()}),a=Be(128,64,(v,U,F)=>{for(let B=0;B<F;B++)for(let J=0;J<U;J++){const j=140+(J*17+B*13)%40*2;v.fillStyle=`rgb(${j},${j},${j-10})`,v.fillRect(J,B,1,1)}v.fillStyle="rgba(0,0,0,0.45)";for(let B=0;B<F;B+=3)v.fillRect(0,B,U,1)}),o=Be(128,128,(v,U,F)=>{v.fillStyle="#efe8de",v.fillRect(0,0,U,F),v.fillStyle="#fbf7f1",v.fillRect(10,10,U-20,F-20),v.strokeStyle="rgba(40,34,28,0.45)",v.lineWidth=3,v.strokeRect(8,8,U-16,F-16),v.strokeStyle="rgba(40,34,28,0.28)",v.beginPath(),v.moveTo(18,F/2),v.lineTo(U-18,F/2),v.moveTo(U/2,18),v.lineTo(U/2,F-18),v.stroke(),ji(v,U,F,24,"rgba(60,48,30,0.16)",2)}),c=Be(128,128,(v,U,F)=>{v.fillStyle="#ddd6cb",v.fillRect(0,0,U,F),v.fillStyle="#cbbba6",v.fillRect(0,F*.48,U,F*.52);for(let B=0;B<10;B++){const J=U*(.34+B*13%32/100);v.fillStyle=B%2?"rgba(110,82,52,0.45)":"rgba(86,64,40,0.32)",v.fillRect(J,F*.4,2+B%3,F*.58)}v.fillStyle="rgba(72,52,32,0.5)",v.fillRect(0,F-14,U,14),ji(v,U,F,36,"rgba(70,54,32,0.28)",2)}),l=Be(128,128,(v,U,F)=>{v.fillStyle="#e7e0d6",v.fillRect(0,0,U,F),v.fillStyle="#c9b49a",v.fillRect(0,F*.28,U,F*.72);for(let B=0;B<16;B++){const J=18+B*29%92;v.fillStyle=B%2?"rgba(96,70,42,0.72)":"rgba(62,46,30,0.55)",v.fillRect(J,28+B%5*6,2+B%4,F-24)}v.fillStyle="rgba(48,34,20,0.55)",v.fillRect(0,F-20,U,20),v.fillStyle="rgba(120,96,70,0.35)",v.beginPath(),v.ellipse(U*.62,F*.72,16,8,.4,0,Math.PI*2),v.fill(),ji(v,U,F,28,"rgba(40,28,16,0.4)",2)}),u=Be(64,64,(v,U,F)=>{v.fillStyle="#141414",v.fillRect(0,0,U,F),v.fillStyle="#2a2a2a";for(let B=-8;B<16;B++)v.fillRect(B*8,0,2,F);v.fillStyle="#3a3a3a",v.fillRect(0,4,U,3),v.fillStyle="#0a0a0a",v.fillRect(0,F-8,U,8)}),h=Be(64,64,(v,U,F)=>{v.fillStyle="#c6a15a",v.fillRect(0,0,U,F),v.fillStyle="#e6c97a",v.fillRect(0,2,U,6),v.fillStyle="#8a6a32",v.fillRect(0,F-8,U,8),v.strokeStyle="rgba(60,40,10,0.45)",v.beginPath(),v.moveTo(8,0),v.lineTo(18,F),v.moveTo(40,0),v.lineTo(30,F),v.stroke()}),d=Be(128,128,(v,U,F)=>{v.fillStyle="#f3efe6",v.fillRect(0,0,U,F);for(let B=8;B<U;B+=14)v.strokeStyle=B%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",v.beginPath(),v.moveTo(B,0),v.quadraticCurveTo(B+4,F/2,B-2,F),v.stroke();v.fillStyle="rgba(90,70,40,0.08)",v.fillRect(0,F-20,U,20)}),f=Be(128,128,(v,U,F)=>{v.fillStyle="#3a2418",v.fillRect(0,0,U,F),ji(v,U,F,80,"rgba(20,10,6,0.45)",2),ji(v,U,F,40,"rgba(120,80,50,0.2)",1),v.strokeStyle="rgba(10,6,4,0.7)",v.lineWidth=3,v.beginPath(),v.moveTo(0,20),v.lineTo(U,28),v.stroke()}),m=Be(128,128,(v,U,F)=>{v.fillStyle="#241810",v.fillRect(0,0,U,F),v.fillStyle="#1a110c";for(let B=0;B<U;B+=10)v.fillRect(B,0,3,F);v.fillStyle="rgba(80,50,30,0.15)",v.fillRect(0,0,U,8)}),_=Be(256,256,(v,U,F)=>{v.fillStyle="#3e3832",v.fillRect(0,0,U,F);const B=64;for(let J=0;J<F;J+=B)for(let Mt=0;Mt<U;Mt+=B)v.fillStyle=(Mt+J)%128===0?"#4a433b":"#35302b",v.fillRect(Mt+3,J+3,B-6,B-6);v.strokeStyle="rgba(166,132,70,0.35)",v.lineWidth=2;for(let J=0;J<=U;J+=B)v.beginPath(),v.moveTo(J,0),v.lineTo(J,F),v.stroke(),v.beginPath(),v.moveTo(0,J),v.lineTo(U,J),v.stroke()},4,4),g=Be(64,64,(v,U,F)=>{v.fillStyle="#8d9298",v.fillRect(0,0,U,F),v.fillStyle="rgba(255,255,255,0.18)";for(let B=0;B<F;B+=3)v.fillRect(0,B,U,1);v.fillStyle="#5e646a",v.fillRect(0,0,U,4)}),p=xi(128,128,(v,U,F,B)=>{const J=v/F,Mt=U/B,j=Math.min(J,1-J,Mt,1-Mt),ut=Math.min(1,j*10),et=Math.abs(J-.5)<.012||Math.abs(Mt-.5)<.012?.2:1;return ut*et},3.2),E=Mi(128,128,(v,U,F,B)=>{const J=v/F,Mt=U/B,j=Math.min(J,1-J,Mt,1-Mt);return .28+(1-Math.min(1,j*7))*.42}),b=xi(64,64,(v,U,F,B)=>{const J=Math.sin(v*.85+U*.2)*.08,Mt=U<5?.25:U>B-6?-.2:0;return .55+J+Mt},2.4),y=Mi(64,64,(v,U)=>.22+(Math.sin(v*.7)*.5+.5)*.12+(U%9===0?.08:0)),k=xi(128,128,(v,U,F)=>{const B=Math.sin(v/F*Math.PI*5)*.2,J=Math.sin(v*.85)*.04+Math.sin(U*1.15)*.03,Mt=v%8===0?-.05:0;return .55+B+J+Mt},3.6),D=Mi(128,128,(v,U,F,B)=>.78+U/B*.1+(v%8===0?.06:0)),P=xi(256,256,(v,U)=>{const B=v%64,J=U%64;return Math.min(B,J,63-B,63-J)<3?.05:.72+Math.sin(v*.17)*Math.sin(U*.13)*.06},4.5,8,6),N=Mi(256,256,(v,U)=>Math.min(v%64,U%64,63-v%64,63-U%64)<3?.95:.78,8,6),w=xi(256,256,(v,U)=>Math.min(v%64,U%64,63-v%64,63-U%64)<4?0:.66,5,4,4),x=Mi(256,256,(v,U)=>Math.min(v%64,U%64)<4?.96:.84,4,4),A=xi(128,128,(v,U)=>{const F=Math.sin(U*.42+Math.sin(v*.07)*2.4)*.14,B=v%22===0?-.08:0;return .5+F+B},3.1),C=Mi(128,128,(v,U,F,B)=>.48+(Math.sin(U*.35)*.5+.5)*.22+U/B*.08),O=xi(128,128,(v,U,F,B)=>{const J=Math.sin(v*1.6)*Math.sin(U*1.25)*.05,Mt=Math.abs(U/B-.22)<.018?-.22:0;return .55+J+Mt},2.6),W=Mi(128,128,(v,U,F,B)=>.62+(Math.sin(v*.4+U*.2)*.5+.5)*.2+U/B*.08),Z=Be(256,64,(v,U,F)=>{v.fillStyle="#3c362e",v.fillRect(0,0,U,F),v.fillStyle="#2e2924";for(let B=0;B<U;B+=32)v.fillRect(B,0,2,F);v.strokeStyle="#e6c56a",v.lineWidth=3,v.strokeRect(6,8,U-12,F-16),v.lineWidth=2,v.beginPath(),v.ellipse(U/2,F/2,30,18,0,0,Math.PI*2),v.stroke(),v.beginPath(),v.ellipse(U/2,F/2,16,9,0,0,Math.PI*2),v.stroke(),v.fillStyle="#f0d48a",v.beginPath(),v.arc(U/2,F/2,3.5,0,Math.PI*2),v.fill()}),K=A_(),it=R_();return{floor:n,wall:t,ceiling:i,wood:s,hazard:r,snow:a,pearl:o,pearlWorn:c,shinGrime:l,joint:u,gold:h,cloth:d,leather:f,trench:m,nave:_,naveLight:K,courtLight:it,trim:e,brushed:g,pearlNormal:p,pearlRough:E,goldNormal:b,goldRough:y,clothNormal:k,clothRough:D,floorNormal:P,floorRough:N,naveNormal:w,naveRough:x,woodNormal:A,woodRough:C,leatherNormal:O,leatherRough:W,seal:Z}}function A_(){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d");i.fillStyle="rgb(32,27,22)",i.fillRect(0,0,256,256);const s=(l,u)=>{const h=(l+7.6)/15.2,d=(-21.55-u)/13.2+.5;return[h*256,(1-d)*256]};i.fillStyle="rgb(12,10,8)";for(const[l,u]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]]){const[h,d]=s(l,u);i.fillRect(h-26,d-8,52,16)}const[r,a]=s(0,-27.55);i.fillRect(r-28,a-10,56,18),i.globalCompositeOperation="lighter";const o=(l,u,h,d)=>{const[f,m]=s(l,u),_=h*256,g=i.createRadialGradient(f,m,2,f,m,_);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=g,i.beginPath(),i.arc(f,m,_,0,Math.PI*2),i.fill()};o(-4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(-4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(-1.35,-27.15,.2,"rgba(255,186,90,1)"),o(1.35,-27.15,.2,"rgba(255,186,90,1)"),o(0,-27.5,.28,"rgba(220,160,70,0.55)"),i.fillStyle="rgba(255,214,170,0.16)",i.fillRect(256*.4,0,256*.2,256),i.globalCompositeOperation="source-over";const c=new fi(e);return c.colorSpace=hi,c.magFilter=sn,c.minFilter=En,c.anisotropy=4,c}function ku(n,t){return[(n+16.05)/32.1,(-.25-t)/28.6+.5]}function R_(){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d");i.fillStyle="rgb(18,16,14)",i.fillRect(0,0,256,256);const s=(c,l)=>{const[u,h]=ku(c,l);return[u*256,(1-h)*256]},r=(c,l,u,h)=>{const[d,f]=s(c-u/2,l-h/2),[m,_]=s(c+u/2,l+h/2),g=Math.min(d,m),p=Math.min(f,_);i.fillRect(g,p,Math.abs(m-d),Math.abs(_-f))};i.fillStyle="rgb(8,7,6)",r(0,-12.2,32,4.2),r(0,-2.2,4.6,.7),r(-1.75,2.05,1.8,.7),r(1.75,2.05,1.8,.7),r(-2.25,-.05,.7,3.6),r(2.25,-.05,.7,3.6);for(const[c,l]of[[-8,-6],[8,-6],[-8,6],[8,5.2]]){const[u,h]=s(c,l);i.beginPath(),i.arc(u,h,7,0,Math.PI*2),i.fill()}i.globalCompositeOperation="lighter";const a=(c,l,u,h)=>{const[d,f]=s(c,l),m=u*256,_=i.createRadialGradient(d,f,2,d,f,m);_.addColorStop(0,h),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.beginPath(),i.arc(d,f,m,0,Math.PI*2),i.fill()};a(0,1.2,.26,"rgba(255,244,220,0.62)"),a(0,1.2,.12,"rgba(255,250,240,0.45)"),a(0,-.05,.07,"rgba(198,214,216,0.4)"),a(-10,8.2,.09,"rgba(255,176,90,0.55)"),a(9.2,8.4,.08,"rgba(255,176,90,0.5)"),a(12.8,-5,.09,"rgba(255,168,70,0.6)"),a(-6,-9.2,.07,"rgba(255,196,130,0.28)"),a(4,-9.2,.07,"rgba(255,196,130,0.28)"),i.globalCompositeOperation="source-over";const o=new fi(e);return o.colorSpace=hi,o.magFilter=sn,o.minFilter=En,o.anisotropy=4,o.wrapS=Hn,o.wrapT=Hn,o}function Ec(n,t,e="#16130f",i="#f4efe6"){const s=document.createElement("canvas");s.width=512,s.height=t?160:128;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,s.width,s.height),r.strokeStyle="#e2a23a",r.lineWidth=8,r.strokeRect(8,8,s.width-16,s.height-16),r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.font="700 58px Trebuchet MS, sans-serif",r.fillText(n,s.width/2,t?68:s.height/2+2),t&&(r.font="600 28px Trebuchet MS, sans-serif",r.fillStyle="#e2a23a",r.fillText(t,s.width/2,118));const a=new fi(s);return a.colorSpace=Ve,a.anisotropy=4,a}function Ae(n){return new ke({envMapIntensity:.32,...n})}function Tn(n){var t,e;return n!=null&&n.index&&((t=n.attributes)!=null&&t.uv)&&((e=n.attributes)!=null&&e.normal)&&!n.attributes.tangent&&n.computeTangents(),n}function $i(n,t,e){const i=n.clone();return i.repeat.set(t,e),i.needsUpdate=!0,i}function C_(n){const t=T_(),e={floor:Ae({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.03}),wall:Ae({map:t.wall,roughness:.88,metalness:.03}),ceiling:Ae({map:t.ceiling,roughness:.96,metalness:0}),trim:Ae({map:t.trim,roughness:.74,metalness:.08}),metal:Ae({color:7172984,roughness:.38,metalness:.62}),wood:Ae({map:$i(t.wood,2,2),normalMap:$i(t.woodNormal,2,2),roughnessMap:$i(t.woodRough,2,2),roughness:1,metalness:.04}),runner:Ae({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:Ae({color:1315344,roughness:.9}),brass:Ae({map:$i(t.gold,2,2),normalMap:$i(t.goldNormal,2,2),roughnessMap:$i(t.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:Ae({color:5065016,roughness:.92}),glass:Ae({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:Ae({map:t.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};e.hazard.side=Ze,e.floor.normalScale.set(.7,.7),e.wood.normalScale.set(.85,.85),e.wood.side=Ze,e.brass.normalScale.set(.4,.4);const i=new Map;function s(T,I,L,Y,Q,ht,X){const dt=new Ot(Q,ht,X);dt.translate(I,L,Y),i.has(T)||i.set(T,[]),i.get(T).push(dt)}const r=[];let a=null;const o=3.6;let c=null;const l=Ae({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});l.side=Ze;const u=new Set(["pew-1","pew-2","pew-3","pew-4","altar","fountain-n","fountain-s-l","fountain-s-r","fountain-w","fountain-e"]);for(const T of yu){if(T.veil){c=new ct(new Ot(T.w,T.h,T.d),l),c.position.set(T.x,T.y,T.z),c.visible=!1,n.add(c);continue}if(T.door){a=new ae;const I=new ct(new Ot(T.w*.92,T.h*.98,T.d*.62),Ae({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),L=Ae({color:14012098,roughness:.66,metalness:.05});for(const X of[-T.h*.18,T.h*.16]){const dt=new ct(new Ot(T.w*.62,T.h*.28,.045),L);dt.position.set(0,X,T.d*.36),dt.castShadow=!0,a.add(dt)}const Y=new ct(Tn(new Ot(T.w,.16,T.d*.8)),e.brass);Y.position.y=T.h*.42;const Q=new ct(Tn(new Ot(.14,T.h*.72,T.d*.78)),e.brass),ht=new ct(new be(1.7,.5),new oe({map:Ec("RADIO","WING","#1c140c","#f0d48a")}));ht.position.set(0,.35,T.d*.42),a.add(I,Y,Q,ht),a.position.set(T.x,T.y,T.z),n.add(a);continue}if(!u.has(T.id)){if(T.phaseGate){const I=new ct(new Ot(T.w,T.h,T.d),e.hazard);I.position.set(T.x,T.y,T.z),I.castShadow=!0,I.receiveShadow=!0,n.add(I),r.push(I);continue}s(T.mat,T.x,T.y,T.z,T.w,T.h,T.d)}}s("runner",0,.02,-1.2,2.6,.02,18),s("dark",-7.4,1.3,-13.15,6.4,2.6,.4),s("dark",-5.2,1.3,-13.15,2.4,2.6,.4),s("dark",5.4,1.3,-13.15,2.4,2.6,.4),s("dark",8.6,1.3,-13.15,6.4,2.6,.4),s("runner",0,.025,-21.4,1.5,.02,12),s("brass",0,2.55,-2.15,.12,3.5,.12),s("brass",0,4.15,-2.15,1.35,.08,1.35),s("plant",-3.3,.28,-2.5,.7,.45,.7),s("plant",3.35,.28,1.4,.7,.45,.7),s("plant",-3.2,.55,2.4,.45,.7,.45),s("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const T of[-12,-4,4,12])for(const I of[-8,0,8])s("metal",T,6.85,I,1.6,.08,.28);for(let T=-14;T<=14;T+=2.2)s("metal",T,4.55,-10.45,.06,.7,.06);s("metal",0,4.55,-10.45,28,.05,.05);for(const[T,I]of i){const L=I.length===1?I[0]:Lu(I);e[T].normalMap&&Tn(L);const Y=new ct(L,e[T]);Y.castShadow=T!=="floor"&&T!=="ceiling"&&T!=="runner",Y.receiveShadow=!0,n.add(Y)}const h=Ae({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.05});h.normalScale.set(.55,.55);const d=h.clone();d.lightMap=t.courtLight,d.lightMapIntensity=.48;const f=e.trim.clone();f.lightMap=t.courtLight,f.lightMapIntensity=.42;const m=e.brass.clone();m.lightMap=t.courtLight,m.lightMapIntensity=.28;const _=e.wall.clone();_.lightMap=t.courtLight,_.lightMapIntensity=.55,_.polygonOffset=!0,_.polygonOffsetFactor=-1,_.polygonOffsetUnits=-1;const g=e.floor.clone();g.lightMap=t.courtLight,g.lightMapIntensity=.64,g.polygonOffset=!0,g.polygonOffsetFactor=-1,g.polygonOffsetUnits=-1;const p=new G;function E(T){T.updateMatrixWorld(!0);const I=T.geometry.attributes.position,L=new Float32Array(I.count*2);for(let Y=0;Y<I.count;Y++){p.fromBufferAttribute(I,Y).applyMatrix4(T.matrixWorld);const Q=ku(p.x,p.z);L[Y*2]=Q[0],L[Y*2+1]=Q[1]}return T.geometry.setAttribute("uv2",new He(L,2)),T}function b(T,I,L,Y,Q){I.normalMap&&Tn(T);const ht=new ct(T,I);return ht.position.set(L,Y,Q),ht.castShadow=!0,ht.receiveShadow=!0,n.add(ht),ht}function y(T,I,L,Y,Q,ht){E(b(new Ot(Y,Q*.78,ht*.92),d,T,I-Q*.08,L)),E(b(new Ot(Y*1.04,Q*.18,ht*1.08),f,T,I+Q*.4,L))}y(0,.4,-2.2,4.5,.8,.5),y(-1.75,.4,2.05,1.7,.8,.5),y(1.75,.4,2.05,1.7,.8,.5),y(-2.25,.4,-.05,.5,.8,3.55),y(2.25,.4,-.05,.5,.8,3.55);const k=Ae({map:t.trim,roughness:.55,metalness:.18,envMapIntensity:.45,lightMap:t.courtLight,lightMapIntensity:.5}),D=b(new Zn([new Ct(.15,.04),new Ct(.7,.06),new Ct(1.15,.1),new Ct(1.38,.28),new Ct(1.22,.4),new Ct(1.05,.34)],32),k,0,.02,-.05);D.castShadow=!0,E(D);const P=new ct(new Ye(1.28,.045,8,28),m);P.rotation.x=Math.PI/2,P.position.set(0,.36,-.05),P.castShadow=!0,n.add(P),E(P),E(b(new re(.06,.09,.34,12),m,0,.22,-.05));const N=Ae({color:1977392,roughness:.08,metalness:.62,envMapIntensity:.9,lightMap:t.courtLight,lightMapIntensity:.4}),w=new ct(new oi(1.05,28),N);w.rotation.x=-Math.PI/2,w.position.set(0,.16,-.05),w.receiveShadow=!0,n.add(w),E(w);const x=new ct(new be(32.1,28.6),g);x.rotation.x=-Math.PI/2,x.position.set(0,.016,-.25),x.receiveShadow=!0,x.castShadow=!1,n.add(x),E(x),x.geometry.attributes.tangent==null&&g.normalMap&&Tn(x.geometry);function A(T,I,L,Y,Q,ht,X){const dt=new ct(T,_);dt.position.set(I,L,Y),dt.rotation.y=Q,dt.castShadow=!1,dt.receiveShadow=!0,n.add(dt),E(dt);const It=dt.geometry.attributes.uv;for(let At=0;At<It.count;At++)It.setXY(At,It.getX(At)*ht,It.getY(At)*X);return It.needsUpdate=!0,dt}A(new be(28.4,6.3),-15.95,3.25,-.25,Math.PI/2,6,2),A(new be(28.4,6.3),15.95,3.25,-.25,-Math.PI/2,6,2),A(new be(31.6,6.3),0,3.25,13.95,Math.PI,8,2),A(new be(14,6.3),-8.9,3.25,-14.05,0,4,2),A(new be(14,6.3),8.9,3.25,-14.05,0,4,2);const C=new ct(new be(6.4,8.2),new oe({color:16774114}));C.rotation.x=Math.PI/2,C.position.set(0,7.12,1.2),C.castShadow=!1,C.receiveShadow=!1,n.add(C);const O=new ct(new re(.55,.7,.12,12),e.brass);O.position.set(0,4.28,-2.15),O.rotation.x=.55,O.castShadow=!0,n.add(O);const W=new ct(new be(1.15,.7),new oe({color:16757066}));W.position.set(10.7,1.85,-5.1),W.rotation.y=-Math.PI/2,n.add(W);const Z=new ct(new be(1.7,1.7),Ae({map:t.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));Z.rotation.x=-Math.PI/2,Z.position.set(9.45,.03,0),Z.receiveShadow=!0,n.add(Z);const K=new ct(new Ot(5.4,2.2,.06),e.glass);K.position.set(9.4,1.8,8.7),n.add(K);const it=new ct(new Ot(.7,.45,.06),new oe({map:t.snow}));it.position.set(9.2,1.25,8.72),n.add(it);const v=it.clone();v.position.x=10.15,n.add(v);const U=new ct(new Ot(.08,.08,.08),new oe({color:16757066}));U.position.set(10.55,1.55,8.7),n.add(U);function F(T,I,L,Y,Q,ht,X,dt,It,At){const se=new ct(new be(ht,X),new oe({map:Ec(T,I,It,At),transparent:!1}));return se.position.set(L,Y,Q),se.rotation.y=dt,n.add(se),se}F("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),F("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),F("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),F("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),F("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),F("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),F("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),F("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),F("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),F("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),F("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),F("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),F("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a");const B=new ct(new be(3.15,.34),Ae({map:t.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));B.receiveShadow=!0,B.rotation.x=-Math.PI/2,B.position.set(0,.045,Us),n.add(B);const J=Mu[0],Mt=Ae({map:t.gold,normalMap:t.goldNormal,roughnessMap:t.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),j=new ae,ut=new ct(Tn(new Zn([new Ct(.05,-.28),new Ct(.09,-.08),new Ct(.16,.08),new Ct(.28,.24),new Ct(.34,.32),new Ct(.3,.36)],20)),Mt);ut.rotation.z=-Math.PI/2,ut.castShadow=!0;const et=new ct(new oi(.26,16),Ae({color:2761752,roughness:.45,metalness:.4}));et.rotation.y=Math.PI/2,et.position.x=.34;const st=new ct(Tn(new re(.055,.07,.36,12)),e.brass);st.rotation.z=Math.PI/2,st.position.x=-.42;const _t=new ct(Tn(new Ot(.06,.36,.28)),e.brass);_t.position.set(-.62,0,0),_t.castShadow=!0;const wt=new ct(Tn(new Ot(.1,.08,.16)),e.brass);wt.position.set(-.62,-.2,0);const Lt=new ct(new Se(.07,12,10),new oe({color:16757066}));Lt.position.x=.28;const ft=new ct(new Ye(.55,.03,8,24),new oe({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));ft.rotation.y=Math.PI/2,j.add(ut,et,st,_t,wt,Lt,ft);for(const[T,I]of[[-.05,.1],[.08,.16],[.2,.26]]){const L=new ct(new Ye(I,.012,6,16),e.brass);L.rotation.y=Math.PI/2,L.position.x=T,L.castShadow=!0,j.add(L)}j.position.set(J.x,J.y,J.z),n.add(j);const Wt=new zs(16757082,7,5.5,2);Wt.position.set(J.x+.4,J.y,J.z),n.add(Wt);function Nt(T,I){const L=new ct(new re(.035,.05,.46,6),e.brass);L.position.set(T,.28,I);const Y=new ct(new Se(.045,6,6),new oe({color:16757066}));Y.position.set(T,.54,I),n.add(L,Y)}Nt(-4.9,-18.2),Nt(4.9,-18.2),Nt(-4.9,-20.45),Nt(4.9,-20.45),Nt(-1.35,-27.15),Nt(1.35,-27.15);const z=new ct(new be(15.2,13.2),Ae({map:t.nave,normalMap:t.naveNormal,roughnessMap:t.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));z.material.normalScale.set(.8,.8),z.material.lightMap=t.naveLight,z.material.lightMapIntensity=.72,Tn(z.geometry),z.geometry.setAttribute("uv2",z.geometry.attributes.uv.clone()),z.rotation.x=-Math.PI/2,z.position.set(0,.018,-21.55),z.receiveShadow=!0,n.add(z);const ee=e.wood.clone();ee.lightMap=t.naveLight,ee.lightMapIntensity=.7;const Xt=h.clone();Xt.lightMap=t.naveLight,Xt.lightMapIntensity=.66;const kt=e.brass.clone();kt.lightMap=t.naveLight,kt.lightMapIntensity=.45;const bt=e.wall.clone();bt.lightMap=t.naveLight,bt.lightMapIntensity=.85,bt.polygonOffset=!0,bt.polygonOffsetFactor=-1,bt.polygonOffsetUnits=-1;const Ht=new G;function Et(T,I,L,Y,Q){const ht=T.clone(),X=b(ht,I,L,Y,Q);X.updateMatrixWorld(!0);const dt=ht.attributes.position,It=new Float32Array(dt.count*2);for(let At=0;At<dt.count;At++)Ht.fromBufferAttribute(dt,At).applyMatrix4(X.matrixWorld),It[At*2]=(Ht.x+7.6)/15.2,It[At*2+1]=(-21.55-Ht.z)/13.2+.5;return ht.setAttribute("uv2",new He(It,2)),X}const R=Et(new be(14.2,6.2),bt,-8.08,3.15,-21.75);R.rotation.y=Math.PI/2;const M=Et(new be(14.2,6.2),bt,8.08,3.15,-21.75);M.rotation.y=-Math.PI/2;const q=Et(new be(15.4,6.2),bt,0,3.15,-28.72);for(const T of[R,M,q]){T.castShadow=!1,T.updateMatrixWorld(!0);const I=T.geometry.attributes.position,L=T.geometry.attributes.uv2.array,Y=T.geometry.attributes.uv;for(let Q=0;Q<I.count;Q++)Ht.fromBufferAttribute(I,Q).applyMatrix4(T.matrixWorld),L[Q*2]=(Ht.x+7.6)/15.2,L[Q*2+1]=(-21.55-Ht.z)/13.2+.5,Y.setXY(Q,Y.getX(Q)*4,Y.getY(Q)*2);T.geometry.attributes.uv2.needsUpdate=!0,Y.needsUpdate=!0}const tt=new re(.028,.028,2.28,10);tt.rotateZ(Math.PI/2);const rt=new re(.03,.03,2.32,12);rt.rotateZ(Math.PI/2);const nt=new re(.62,.62,2.22,16,1,!0,-.42,.84);nt.rotateZ(Math.PI/2);function Ut(T,I){Et(new Ot(2.32,.05,.32),ee,T,.46,I-.04),Et(rt,ee,T,.45,I-.2);for(const Y of[-1.02,1.02])Et(new Ot(.055,.4,.05),ee,T+Y,.22,I-.12),Et(new Ot(.055,.4,.05),ee,T+Y,.22,I+.06);for(const Y of[-1.2,1.2])Et(new Ot(.07,.82,.4),ee,T+Y,.44,I+.02);const L=Et(nt,ee,T,.68,I-.36);L.castShadow=!0,Et(tt,ee,T,.9,I+.2),Et(new Ot(2.05,.028,.1),ee,T,.3,I+.04),Et(new Ot(1.9,.035,.07),ee,T,.16,I-.02)}for(const[T,I]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])Ut(T,I);Et(new Ot(2.15,.16,.62),Xt,0,.1,-27.55),Et(new Ot(1.82,.2,.5),Xt,0,.27,-27.55),Et(new Ot(1.5,.18,.4),Xt,0,.45,-27.55),Et(new Ot(2.2,.07,.66),kt,0,.62,-27.55);const xt=b(new Ot(1.35,.32,.035),e.brass,0,.36,-27.26);xt.position.z=-27.26;const yt=new ct(new Ye(.15,.016,8,20),e.brass);yt.position.set(0,.38,-27.22),n.add(yt);for(const T of[-.72,.72]){b(new re(.028,.04,.22,8),e.brass,T,.76,-27.52);const I=new ct(new Se(.035,8,6),new oe({color:16757066}));I.position.set(T,.9,-27.52),I.castShadow=!1,n.add(I)}const Vt=document.createElement("canvas");Vt.width=64,Vt.height=64;const ot=Vt.getContext("2d"),St=ot.createRadialGradient(32,32,4,32,32,32);St.addColorStop(0,"rgba(0,0,0,0.38)"),St.addColorStop(1,"rgba(0,0,0,0)"),ot.fillStyle=St,ot.fillRect(0,0,64,64);const zt=new fi(Vt),Gt=new oe({map:zt,transparent:!0,depthWrite:!1});function Dt(T,I,L){const Y=new ct(new oi(T,18),Gt);Y.rotation.x=-Math.PI/2,Y.position.set(I,.028,L),n.add(Y)}Dt(1.7,0,-.05),Dt(1.3,0,-27.55);for(const[T,I]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])Dt(1.2,T,I);const jt=To.find(T=>T.kind==="signal"),Yt=To.find(T=>T.kind==="health"),Qt=new ae,H=new ct(new Ot(.38,.28,.38),e.brass),vt=new ct(new Ot(.16,.16,.16),new oe({color:16757066}));vt.position.y=.22,Qt.add(H,vt),Qt.position.set(jt.x,.35,jt.z),n.add(Qt);const $=new ae,lt=new ct(new Ot(.36,.22,.26),Ae({color:15196888,roughness:.6})),Rt=new ct(new Ot(.22,.04,.28),Ae({color:9255466,roughness:.5}));Rt.position.y=.08,$.add(lt,Rt),$.position.set(Yt.x,.2,Yt.z),n.add($);const Tt=new re(.055,.055,.2,8),Zt=new re(.03,.03,.04,8),Ee=new re(.46,.5,.06,20),Pe=new Ye(.5,.045,6,24),le=new oi(.58,24),at=new ke({color:2761756,roughness:.45,metalness:.35}),mt=new oe({color:6813439}),gt=new Map;function Ft(T){T.traverse(I=>{I.castShadow=!1,I.receiveShadow=!1})}function $t(){const T=new ae,I=new ct(Tt,at),L=new ct(Zt,mt);return L.position.y=.12,T.add(I,L),Ft(T),n.add(T),T}function pe(){const T=new ae,I=new ke({color:15260872,roughness:.4,metalness:.14,emissive:16757082,emissiveIntensity:.42}),L=new ct(Ee,I);L.position.y=.04;const Y=new ct(Pe,new oe({color:16769712}));Y.rotation.x=Math.PI/2,Y.position.y=.075;const Q=new oe({color:16762218,transparent:!0,opacity:.9,depthWrite:!1}),ht=new ct(le,Q);ht.rotation.x=-Math.PI/2,ht.position.y=.025;const X=new ae,dt=new ct(Tt,at),It=new ct(Zt,mt);return It.position.y=.12,X.add(dt,It),X.position.y=.24,T.add(ht,L,Y,X),Ft(T),T.userData={disc:L,glow:ht,cell:X},n.add(T),T}const we=new lg(15261908,3813928,.74);n.add(we);const he=new ac(16773596,2.35);he.position.set(8,18,10),he.castShadow=!0,he.shadow.mapSize.set(1024,1024),he.shadow.camera.near=2,he.shadow.camera.far=48,he.shadow.camera.left=-16,he.shadow.camera.right=16,he.shadow.camera.top=16,he.shadow.camera.bottom=-16,he.shadow.bias=-4e-4,he.shadow.normalBias=.035,he.shadow.radius=2,he.target.position.set(0,0,-8),n.add(he,he.target);const mn=new ac(16769732,.7);mn.position.set(-10,8,-6),mn.castShadow=!1,n.add(mn);const gn=[];function De(T,I,L,Y=36,Q=8){const ht=new zs(16757082,Y,Q,2);return ht.position.set(T,I,L),n.add(ht),gn.push(ht),ht}De(0,3.2,-2.1,18,7),De(-10,2.4,8.2,28,8),De(9.2,2.6,8.4,26,7),De(13.5,2.8,-5,34,8),De(-6,3.4,-8,22,8),De(4,3.4,-8,20,8),De(0,5.2,2,30,14),De(0,4.4,-21.5,34,16),De(0,3.3,-26.4,16,7);const _n=De(13.4,2.6,1.2,24,6);let Qe=0,tn=0,ye=!1,Re=!1,S=0,V=0;return n.background=new Kt(11774879),n.fog=new Xo(11774879,12,40),{colliders:Su(),gates:r,cache:Qt,aid:$,textures:t,setDoor(T,I=!1){tn=T?1:0,I&&(Qe=tn,a&&(a.position.y=o+Qe*6.4))},setVeil(T,I){if(!c||(c.visible=!!T,!T))return;const L=I==="DEAD_AIR";l.opacity=L?.16:.94,l.depthWrite=!L,l.emissiveIntensity=L?.62:.3},setHijack({aimed:T,hot:I}){ye=!!T,Re=!!I},pulseHijack(){S=.48},setChannel(T){const I=n.fog;T==="STATIC"?(I.color.setHex(10133668),I.near=12,I.far=38,n.background.setHex(9475738)):T==="DEAD_AIR"?(I.color.setHex(2764856),I.near=10,I.far=36,n.background.setHex(2369584)):(I.color.setHex(11774879),I.near=12,I.far=40,n.background.setHex(11774879));for(const L of r)L.material.opacity=T==="DEAD_AIR"?.14:.97,L.material.depthWrite=T!=="DEAD_AIR",L.material.emissiveIntensity=T==="DEAD_AIR"?.45:.18},setPickup(T,I){T==="cache"&&(Qt.visible=I),T==="aid"&&($.visible=I)},syncCells(T,I=V){const L=new Set;for(const Y of T){if(Y.kind!=="battery")continue;L.add(Y.id);let Q=gt.get(Y.id);Q||(Q=Y.pad?pe():$t(),gt.set(Y.id,Q));const ht=Math.sin(I*2.2+Y.x)*.03;if(Y.pad){Q.visible=!0,Q.position.set(Y.x,0,Y.z);const X=!Y.taken,dt=Y.respawnAt==null?0:Math.max(0,Y.respawnAt-I),It=X?1:rn(1-dt/pt.padRespawn,0,1);Q.userData.cell.visible=X,Q.userData.cell.position.y=.24+ht,Q.userData.disc.material.emissiveIntensity=X?.85:.2+It*.9,Q.userData.glow.material.opacity=X?.92:.28+It*.6,Q.userData.glow.scale.setScalar(X?1:.7+It*.3)}else Q.visible=!Y.taken,Q.position.set(Y.x,.28+ht,Y.z)}for(const[Y,Q]of gt)L.has(Y)||(Q.visible=!1)},update(T,I,L){if(L){const ht=Math.round(L.x/4)*4,X=Math.round(L.z/4)*4;he.position.set(ht+8,18,X+10),he.target.position.set(ht,0,X)}const Y=Math.min(.05,Math.max(0,T-V||0));if(V=T,Qe+=(tn-Qe)*Math.min(1,Y*4.2),a&&(a.position.y=o+Qe*6.4),S>0&&(S=Math.max(0,S-Y)),ft.material.opacity=S>0?S/.48:0,ft.scale.setScalar(S>0?1+(1-S/.48)*2.4:1),Mt.emissive.setHex(Re?16774877:13939034),Mt.emissiveIntensity=Re?1.15:ye?.85:.12,Lt.material.color.setHex(Re?16773576:16757066),Wt.color.setHex(Re?16769696:16757082),Wt.intensity=Re?22:ye?14:7,_n.intensity=18+Math.sin(T*28)*10+(Math.random()<.04?-12:0),I==="STATIC"){const Q=1+Math.sin(T*6)*.08;Qt.scale.setScalar(Q)}else Qt.scale.setScalar(1);W.material.color.setHSL(.09,.85,I==="DEAD_AIR"?.18:.55)},practicals:gn}}function P_(n,t){const e=new Xr;e.background=new Kt(2893343);const i=new ct(new Ot(18,9,18),new oe({color:2893343,side:We}));e.add(i);const s=new ct(new be(18,18),new oe({color:3814188}));s.rotation.x=-Math.PI/2,s.position.y=-1.6,e.add(s);const r=new G(0,1.6,-20),a=[[-4.9,.55,-18.2],[4.9,.55,-18.2],[-4.9,.55,-20.45],[4.9,.55,-20.45],[-1.35,.95,-27.15],[1.35,.95,-27.15]],o=new oe({color:16757066});for(const[u,h,d]of a){const f=new ct(new Se(.22,10,8),o);f.position.set(u-r.x,h-r.y,d-r.z),e.add(f)}const c=new ct(new Ot(2.3,1.1,.7),new oe({color:13017434}));c.position.set(0,.55-r.y,-27.55-r.z),e.add(c);const l=new ct(new Ye(.7,.06,8,24),new oe({color:15123818}));return l.position.set(0,2.2-r.y,-26.55-r.z),e.add(l),t.fromScene(e,.04).texture}function D_(n,t){const e=new Xr;e.background=new Kt(13156274);const i=new ct(new Ot(34,12,30),new oe({color:13156274,side:We}));e.add(i);const s=new G(0,1.55,.2),r=new ct(new be(34,30),new oe({color:6972248}));r.rotation.x=-Math.PI/2,r.position.y=-s.y,e.add(r);const a=new ct(new be(8,10),new oe({color:16774888}));a.rotation.x=Math.PI/2,a.position.set(0,6.9-s.y,1.2-s.z),e.add(a);const o=new ct(new oi(1.15,20),new oe({color:1977392}));o.rotation.x=-Math.PI/2,o.position.set(0,.2-s.y,-.05-s.z),e.add(o);const c=new ct(new Ye(1.3,.08,8,24),new oe({color:13017434}));c.rotation.x=Math.PI/2,c.position.set(0,.4-s.y,-.05-s.z),e.add(c);const l=new oe({color:16757066});for(const[u,h,d]of[[-10,2.3,8.2],[9.2,2.3,8.4],[13.2,1.9,-5]]){const f=new ct(new Se(.55,10,8),l);f.position.set(u-s.x,h-s.y,d-s.z),e.add(f)}return t.fromScene(e,.04).texture}const wc="channel-surfer-best",I_={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},L_={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function bc(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Tc(n,t,e,i){return n+(t-n)*(1-Math.exp(-12*i))}function Na(n,t){const e=Math.cos(t),i=Math.sin(t),s=Math.sin(n),r=Math.cos(n),a={x:-s*e,y:i,z:-r*e},o={x:r,y:0,z:-s},c={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:c}}function U_(n,t){const e=new tg({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(960,780,!1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.outputColorSpace=Ve,e.toneMapping=Vc,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Oc;const i=new Xr,s=new Eo(e);i.environment=s.fromScene(new hg,.012).texture;const r=P_(e,s),a=D_(e,s);s.dispose();const o=new cn(72,960/780,.08,90);i.add(o);const c=new zs(16770756,14,4.5,2);c.position.set(.05,.02,-.25),o.add(c);const l=C_(i),u=new ai(i,o,480,390,8);u.kernelRadius=.18,u.minDistance=.001,u.maxDistance=.06;const h=f_(i,l.textures,{aisle:r,court:a}),d=w_(o,l.textures),f=72,m=new Float32Array(f*3),_=new Float32Array(f*3),g=new Ce;g.setAttribute("position",new He(m,3)),g.setAttribute("color",new He(_,3));const p=new ag(g,new vu({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));i.add(p);const E=document.createElement("canvas");E.width=64,E.height=64;const b=E.getContext("2d"),y=b.createRadialGradient(32,32,1,32,32,30);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.35,"rgba(255,214,150,0.75)"),y.addColorStop(1,"rgba(255,160,60,0)"),b.fillStyle=y,b.fillRect(0,0,64,64);const k=new fi(E);k.colorSpace=Ve;const D=[];for(let at=0;at<12;at++){const mt=new ng(new mu({map:k,transparent:!0,depthWrite:!1,blending:Lr}));mt.visible=!1,mt.frustumCulled=!1,i.add(mt),D.push(mt)}const P=28,N=new Float32Array(P*6),w=new Float32Array(P*6),x=new Ce;x.setAttribute("position",new He(N,3)),x.setAttribute("color",new He(w,3)),i.add(new rg(x,new _u({vertexColors:!0,transparent:!0,opacity:.95})));let A="title",C=null,O=[],W=null,Z=[],K=[],it="level",v=!1,U=!1,F=!1,B=1.25,J=0,Mt=0,j=!1,ut="",et="",st="",_t=[],wt=[],Lt=[],ft={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},Wt=bc(1),Nt=0,z=0,ee=0,Xt=0,kt=0,bt=0,Ht=0,Et="",R=0,M=0,q="",tt=0;const rt=[],nt=new Set;let Ut=0,xt="",yt=!1;try{Ut=Number(localStorage.getItem(wc))||0}catch(at){Ut=0}function Vt(at,mt,gt,Ft,$t){for(let pe=0;pe<$t;pe++)_t.push({x:at,y:mt,z:gt,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:Ft});_t.length>f&&_t.splice(0,_t.length-f),wt.push({x:at,y:mt,z:gt,life:.14,max:.14,color:Ft}),wt.length>D.length&&wt.shift()}function ot(at){Et=at,R=.95,M+=1}function St(at,mt){nt.has(at)||(nt.add(at),rt.push(mt))}function zt(at){xt!==at&&(xt=at,l.setChannel(at),d.setChannel(at),t.setChannel(at))}function Gt(){return Su({doorOpen:v,veilUp:!!(W&&W.alive&&W.veilUp)})}function Dt(at){return{x:at.x,y:at.y,z:at.z,yaw:at.yaw||0,pitch:0,vx:0,vz:0}}function jt(){C=lc(),O=[...wu(),...Br()],W=yc(),Z=oc(),v=!1,U=!1,F=!1,B=1.25,J=0,Mt=0,j=!1,ut="",et="",st="",K=[],_t=[],wt=[],Lt=[],ft=Dt(xg),Wt=bc((Date.now()&65535)+3),Nt=0,ee=0,Xt=.2,kt=0,bt=0,Ht=0,yt=!1,Et="",R=0,q="",tt=0,rt.length=0,nt.clear(),h.reset(O),h.resetPriest(W),l.setDoor(!1,!0),l.setVeil(!1,"LIVE"),zt("LIVE")}function Yt(){const at={level:C.level,xp:C.xp,pending:C.pending,mods:{...C.mods||{}}};C=Ca({...lc(),signal:80,...at}),O=[...O.filter(gt=>gt.room!=="chapel"),...Br().map(gt=>({...gt,dormant:!1}))],W={...yc(),active:!0};const mt=oc();Z=[...Z.filter(gt=>gt.z>-14.5),...mt.filter(gt=>gt.z<-14.5)],v=!0,F=!1,B=1.25,J=0,Mt=0,j=!1,ut="",et="",st="",K=[],_t=[],wt=[],Lt=[],ft=Dt(Mg),Xt=.45,yt=!1,U=!1,Ht=0,bt=0,kt=0,h.reset(O),h.resetPriest(W),l.setDoor(!0,!0),l.setVeil(!1,"LIVE"),zt("LIVE"),ot("RADIO WING")}jt();function Qt(){if(Nt>0&&!(Ut>0&&Nt>=Ut)){Ut=Nt;try{localStorage.setItem(wc,String(Ut))}catch(at){}}}function H(at,mt){const gt=Rg(C,at);gt.result==="ok"?(C=gt.state,ee+=1,Ht=.45,ot(I_[C.channel]+" · "+kr(C.channel,C).name),t.play(L_[C.channel]),zt(C.channel)):gt.result==="denied"&&(ot("NO SIGNAL"),t.play("deny"))}function vt(){const at=uc(C);if(C=at.state,!at.fired)return;const{forward:mt,right:gt,up:Ft}=Na(ft.yaw,ft.pitch),$t={x:ft.x,y:ft.y,z:ft.z},pe=Zg(mt,gt,Ft,at.profile.pellets,at.profile.spread,Math.random),we={x:$t.x+mt.x*.42+gt.x*.14-Ft.x*.1,y:$t.y+mt.y*.42+gt.y*.14-Ft.y*.1,z:$t.z+mt.z*.42+gt.z*.14-Ft.z*.1},he=Nt<J,mn=at.profile.kind==="hitscan"?[.45,.97,1]:at.profile.kind==="phase"?[.74,.8,.84]:[.9,.9,.9],gn=he?[.45,.97,1]:mn,De=Gt();let _n=!1,Qe=!1;kt=Math.min(.07,kt+(at.profile.kind==="spread"?.05:at.profile.kind==="phase"?.03:.014)),d.fire(at.profile.kind),t.play(at.profile.kind==="spread"?"static":at.profile.kind==="phase"?"phase":"live");for(const tn of pe){const ye=Xg($t,tn,at.profile.range,O,De,{phase:at.profile.phases}),Re=W.alive?M_($t,tn,at.profile.range,W,C.channel):null,S=!!(Re&&(!ye||Re.t<ye.t)),V=S?Re:ye,T=Math.min(at.profile.range,22),I=V?{x:V.x,y:V.y,z:V.z}:{x:$t.x+tn.x*T,y:$t.y+tn.y*T,z:$t.z+tn.z*T};if((!V||V.t>.45)&&Lt.push({a:we,b:I,color:gn,life:.16}),S){const X=hc(at.profile.damage,Re.t,at.profile.range,at.profile.falloff)*(he?zn.retuneMult:1),dt=x_(W,X);if(W=dt.priest,dt.dealt>0&&(_n=!0),Vt(Re.x,Re.y,Re.z,he?[.45,.97,1]:[.96,.94,.88],5),!dt.killed){const It=Sc(W,{channel:C.channel,weak:Re.weak,halo:Re.halo,crossed:!1});It.broken?(lt(It),Qe=!0):W=It.priest}continue}if(!ye)continue;if(ye.kind==="world"){Vt(ye.x,ye.y,ye.z,[.75,.68,.55],6);continue}const L=O.findIndex(X=>X.id===ye.id);if(L<0||!O[L].alive)continue;const Y=qg(O[L],Nt),Q=hc(at.profile.damage,ye.t,at.profile.range,at.profile.falloff)*(he?zn.retuneMult:1),ht=Yg(Y.enemy,{weak:ye.weak,damage:Q});if(ht.enemy.hurt=.1,O[L]=ht.enemy,_n=ht.dealt>0,Vt(ye.x,ye.y,ye.z,[.96,.94,.9],8),ht.killed){const X=kg(C,{distance:ye.t,channel:C.channel,burst:Y.burst});C=X.state,Rt(pt.xpKill),$(ht.enemy),Vt(ye.x,ye.y,ye.z,[1,.68,.25],18),t.play("death"),ot(X.aggressive?"AGGRESSIVE +"+X.amount:"SIGNAL +"+X.amount)}}_n&&!Qe&&t.play("hit"),Lt.length>P&&Lt.splice(0,Lt.length-P)}function $(at){const mt="drop-"+at.id;Z.some(gt=>gt.id===mt)||Z.push(Ng(at))}function lt(at){W=at.priest,at.broken&&(t.play("rite-break"),Vt(W.x,2.15,W.z,[.96,.78,.32],20),Ht=Math.max(Ht,.34),W.alive&&ot("RITE BROKEN"),Rt(pt.xpRite))}function Rt(at){const mt=Pa(C,at);return C=mt.state,mt.leveled>0&&v?Tt("level"):mt.leveled>0&&ot("LEVEL "+C.level),mt}function Tt(at){(C.pending||0)<=0||A!=="play"||(it=at,A="levelup")}function Zt(){const at=W.x,mt=1.72,gt=W.z,Ft=ft.x-at+(Wt()-.5)*.22,$t=1.15-mt+(Wt()-.5)*.12,pe=ft.z-gt+(Wt()-.5)*.22,we=Math.hypot(Ft,$t,pe)||1,he=un.boltSpeed;return{x:at,y:mt,z:gt,vx:Ft/we*he,vy:$t/we*he,vz:pe/we*he,damage:un.boltDamage,life:2.6}}function Ee(at,mt){const gt=Cg(C,at);if(C=gt.state,gt.forced&&(ot("NO SIGNAL"),t.play("nosignal"),Ht=.55,zt(C.channel)),mt.channel)H(mt.channel);else if(mt.cycle){const X=rn(mt.cycle,-3,3),dt=X>0?1:-1;for(let It=0;It!==X;It+=dt)H(Tg(C.channel,dt))}ft.yaw-=mt.lookX*.00215,ft.pitch=rn(ft.pitch-mt.lookY*.00215,-1.35,1.35);const Ft=O.some(X=>X.alive&&X.room!=="chapel");let $t=!1;if(!v&&!Ft&&(v=!0,$t=!0,C=Ca(C),C=Pa(C,pt.xpCourt).state,ot("RADIO WING"),t.play("door"),St("wing","North door is open. The radio wing is still on the air.")),v&&(C.pending||0)>0&&A==="play"){Tt($t?"break":"level");return}if(v&&ft.z<-15.05){for(let X=0;X<O.length;X++)O[X].room==="chapel"&&O[X].dormant&&(O[X]={...O[X],dormant:!1});W.active||(W={...W,active:!0},St("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}const pe=Mu[0],{forward:we}=Na(ft.yaw,ft.pitch),he=!Iu(ft.x,ft.y,ft.z,pe.x,pe.y,pe.z,Gt());j=y_({origin:{x:ft.x,y:ft.y,z:ft.z},dir:we,point:pe,maxDist:zn.maxDist,cone:zn.cone,blocked:he}).aimed;const gn=Nt<J,De=Mt>Nt;if(j?ut=gn?"PA RETUNED":De?"PA RECHARGING":"E  RETUNE PA":ut=gn?"PA RETUNED":"",et=gn?"hot":j&&De?"cool":j?"ready":"",mt.use&&j){const X=S_({cooldownUntil:Mt},Nt,qr(C).paCooldown);X.ok?(Mt=X.cooldownUntil,J=Nt+zn.retune,O=E_(O,pe,zn.radius,zn.stun),C=Dg(C).state,Rt(pt.xpHijack),ot("PA RETUNE"),t.play("hijack"),Vt(pe.x,pe.y,pe.z,[.45,.97,1],28),Ht=Math.max(Ht,.28),bt=Math.max(bt,.035),l.pulseHijack()):t.play("deny")}v&&Math.hypot(ft.x-pe.x,ft.z-pe.z)<8&&St("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const _n=__(W,at,{player:{x:ft.x,z:ft.z}});W=_n.priest;for(const X of _n.events)if(X.type==="announce")ot(Mc(X.rite)),t.play("rite");else if(X.type==="fail"){const dt=fc(C,X.damage);C=dt.state,dt.hit&&(t.play("rite-fail"),bt=Math.max(bt,.045)),ot("RITE HOLDS")}else X.type==="shot"&&K.length<16&&(K.push(Zt()),t.play("bolt"));st=W.alive&&W.phase==="rite"?Mc(W.rite):"";const Qe=Gt();for(let X=0;X<O.length;X++){if(!O[X].alive)continue;const dt=Jg(O[X],at,{channel:C.channel,player:{x:ft.x,y:1.2,z:ft.z},colliders:Qe,allies:O,rng:Wt});O[X]=dt.enemy,dt.shot&&K.length<16&&(K.push(dt.shot),t.play("bolt"))}const tn=Tu(C.channel),ye=-Math.sin(ft.yaw),Re=-Math.cos(ft.yaw),S=Math.cos(ft.yaw),V=-Math.sin(ft.yaw);let T=0,I=0;mt.forward&&(T+=ye,I+=Re),mt.back&&(T-=ye,I-=Re),mt.right&&(T+=S,I+=V),mt.left&&(T-=S,I-=V);const L=Math.hypot(T,I);L>0&&(T=T/L*tn,I=I/L*tn),ft.vx=Tc(ft.vx,T,12,at),ft.vz=Tc(ft.vz,I,12,at);const Y=Pu(ft.x,ft.z,ft.vx*at,ft.vz*at,pt.playerRadius,Qe,C.channel,vg);if(ft.x=Y.x,ft.z=Y.z,W.alive&&W.phase==="rite"&&W.rite==="veil"&&C.channel==="DEAD_AIR"&&ft.z<yg){const X=Sc(W,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});X.broken&&lt(X)}if(Xt>0)Xt-=at;else if(mt.fireDown){const X=uc(C);!X.fired&&X.reason==="dry"?yt||(yt=!0,t.play("dry"),d.fire("dry"),ot("NO BATTERY")):X.fired?(yt=!1,vt()):yt=!1}else yt=!1;const Q=[];for(const X of K){const dt=Math.hypot(X.vx,X.vy,X.vz)||1,It=dt*at,At=Zo(X.x,X.y,X.z,X.vx/dt,X.vy/dt,X.vz/dt,It,Gt());if(At){Vt(At.x,At.y,At.z,[1,.62,.22],3);continue}if(X.x+=X.vx*at,X.y+=X.vy*at,X.z+=X.vz*at,X.life-=at,X.life<=0||X.y<0||X.y>6)continue;const se=X.x-ft.x,me=X.z-ft.z;if(se*se+me*me<.4*.4&&X.y>.25&&X.y<1.75){const _e=fc(C,X.damage);C=_e.state,_e.hit&&(t.play("hurt"),bt=.05,Ht=Math.max(Ht,.2)),Vt(X.x,X.y,X.z,[1,.5,.18],6);continue}Q.push(X)}K=Q,Z=Og(Z,Nt);for(let X=0;X<Z.length;X++){const dt=Z[X];if(dt.taken||!jg(dt,C.channel)||Math.hypot(ft.x-dt.x,ft.z-dt.z)>1.15)continue;const It=Kg(C,dt);It.took&&(C=It.state,Z[X]=Fg(dt,Nt),t.play("pickup"),ot(zg(dt,C.channel)))}Nt>.45&&St("intro","1 LIVE Clicker, 2 STATIC Scatter, 3 DEAD AIR Phaser. Each shot spends a battery."),Z.some(X=>X.pad&&Math.hypot(ft.x-X.x,ft.z-X.z)<4.2)&&St("pads","Amber pads recharge. They feed the remote you are holding, then a little to the others."),(Math.hypot(ft.x,ft.z)<7.5||Nt>11)&&St("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot(ft.x-10.4,ft.z)<6.2||Nt>20)&&St("gate","Striped shutter is DEAD AIR. The Phaser fires through it. Clicker and Scatter stop."),ft.x>12.1&&Z.some(X=>X.cloaked&&!X.taken)&&St("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const ht=O.filter(X=>X.alive&&X.room!=="chapel");if(ht.length===1&&ht[0].id==="alley"&&St("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),tt>0?(tt-=at,tt<=0&&(q="")):rt.length&&(q=rt.shift(),tt=6.2),C.health<=0){U=v,A="dead",t.play("ui");return}if(!W.alive&&v){if(F||(F=!0,O=O.map(dt=>dt.room==="chapel"&&dt.alive?{...dt,alive:!1,hittable:!1}:dt),C=Ca(Yo(C,40)),C=Pa(C,pt.xpWing).state,ot("OFF THE AIR"),t.play("death"),Vt(W.x,2.1,W.z,[.96,.8,.38],34),Vt(W.x,2.75,W.z,[.9,.72,.28],16),B=1.25),(C.pending||0)>0&&A==="play"){Tt("level");return}B-=at,B<=0&&(A="clear",Qt(),t.play("pickup"))}else B=1.25}function Pe(at){for(let mt=_t.length-1;mt>=0;mt--){const gt=_t[mt];gt.life-=at,gt.vy-=7*at,gt.x+=gt.vx*at,gt.y+=gt.vy*at,gt.z+=gt.vz*at,gt.life<=0&&_t.splice(mt,1)}for(let mt=0;mt<f;mt++){const gt=_t[mt],Ft=mt*3;if(!gt){m[Ft+1]=-40,_[Ft]=_[Ft+1]=_[Ft+2]=0;continue}m[Ft]=gt.x,m[Ft+1]=gt.y,m[Ft+2]=gt.z;const $t=rn(gt.life*3,0,1);_[Ft]=gt.color[0]*$t,_[Ft+1]=gt.color[1]*$t,_[Ft+2]=gt.color[2]*$t}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0;for(let mt=wt.length-1;mt>=0;mt--)wt[mt].life-=at,wt[mt].life<=0&&wt.splice(mt,1);for(let mt=0;mt<D.length;mt++){const gt=D[mt],Ft=wt[mt];if(!Ft){gt.visible=!1;continue}const $t=Ft.life/Ft.max;gt.visible=!0,gt.position.set(Ft.x,Ft.y,Ft.z),gt.scale.setScalar(.18+(1-$t)*.55),gt.material.opacity=$t,gt.material.color.setRGB(Ft.color[0],Ft.color[1],Ft.color[2])}for(let mt=Lt.length-1;mt>=0;mt--)Lt[mt].life-=at,Lt[mt].life<=0&&Lt.splice(mt,1);for(let mt=0;mt<P;mt++){const gt=Lt[mt],Ft=mt*6;if(!gt){N[Ft+1]=-40,N[Ft+4]=-40;continue}N[Ft]=gt.a.x,N[Ft+1]=gt.a.y,N[Ft+2]=gt.a.z,N[Ft+3]=gt.b.x,N[Ft+4]=gt.b.y,N[Ft+5]=gt.b.z;for(let $t=0;$t<2;$t++)w[Ft+$t*3]=gt.color[0],w[Ft+$t*3+1]=gt.color[1],w[Ft+$t*3+2]=gt.color[2]}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}function le(at){if(A==="title"){o.position.set(Math.sin(z*.16)*.5,2.5,9.3),o.lookAt(0,1.2,-1.4),d.setVisible(!1);return}d.setVisible(!0),bt*=Math.exp(-9*at),kt*=Math.exp(-11*at),o.position.set(ft.x+(Math.random()-.5)*bt,ft.y,ft.z+(Math.random()-.5)*bt),o.rotation.order="YXZ",o.rotation.y=ft.yaw,o.rotation.x=ft.pitch-kt,o.rotation.z=0;const{right:mt}=Na(ft.yaw,0),gt=A==="play"?ft.vx*mt.x+ft.vz*mt.z:0;d.update(at,A==="play"?Math.hypot(ft.vx,ft.vz):0,{strafe:gt})}return{get mode(){return A},start(){jt(),A="play",t.play("ui")},resume(){A==="pause"&&(A="play")},pause(){A==="play"&&(A="pause")},replay(){U?Yt():jt(),A="play",t.play("ui")},toTitle(){jt(),A="title"},update(at,mt){const gt=Math.min(.05,Math.max(0,at)||0);z+=gt,A==="play"&&(Nt+=gt,Ee(gt,mt)),R>0&&(R-=gt,R<=0&&(Et="")),Ht=Math.max(0,Ht-gt*3.2),zt(A==="title"?"LIVE":C.channel);const Ft=Z.find(we=>we.cloaked),$t=Z.find(we=>we.kind==="health");l.setPickup("cache",!!(Ft&&!Ft.taken&&C.channel==="STATIC"&&A!=="title")),l.setPickup("aid",!!($t&&!$t.taken)),l.syncCells(Z,A==="play"?Nt:0),l.setDoor(v),l.setVeil(!!(W.alive&&W.veilUp),A==="title"?"LIVE":C.channel),l.setHijack({aimed:A==="play"&&j,hot:A==="play"&&Nt<J}),l.update(z,C.channel,ft),h.setProbeBlend(ft.z),h.sync(O,gt,z,C.channel),h.syncPriest(W,gt,z,A==="title"?"LIVE":C.channel),h.syncBolts(K),Pe(gt),le(gt);const pe=A==="title"?"LIVE":C.channel;u.kernelRadius=pe==="DEAD_AIR"?.05:.18,u.maxDistance=pe==="DEAD_AIR"?.02:.06,e.render(i,o),e.shadowMap.autoUpdate=!1,u.renderToScreen=!0,u.render(e),e.shadowMap.autoUpdate=!0,e.setRenderTarget(null)},chooseUpgrade(at){if(A!=="levelup")return!1;const gt=Da(C)[at];if(!gt)return!1;const Ft=Ug(C,gt.id);return Ft.applied?(C=Ft.state,ot(gt.name),t.play("pickup"),(C.pending||0)>0&&Da(C).length||(C={...C,pending:0},A="play"),!0):!1},hud(){const at=ft.z<-14.85,mt=O.filter(we=>we.alive&&we.room!=="chapel").length,gt=O.filter(we=>we.alive&&we.room==="chapel").length+(W.alive?1:0),Ft=A==="play",$t=kr(C.channel,C),pe=A==="levelup"?Da(C):[];return{mode:A,health:C.health,signal:C.signal,channel:C.channel,remote:$t.name,ammo:C.batteries[C.channel],ammoMax:ls(C)[C.channel],level:C.level||1,xp:Ig(C),levelReason:it,offers:pe.map(we=>({id:we.id,name:we.name,detail:we.detail})),enemies:at?gt:mt,roomLabel:at?"RADIO":"COURT",countLabel:at?"ON AIR":"TESSERA",tip:q,banner:Et,bannerSerial:M,flash:Ht,hurt:C.hurtTimer,time:Nt,best:Ut,swaps:ee,muted:t.muted,prompt:Ft?ut:"",promptKind:Ft?et:"",rite:Ft?st:"",boss:at&&W.alive?W.hp/W.maxHp:null,checkpoint:U}}}}const N_=960,F_=780,Hu=document.getElementById("stage"),Hr=document.getElementById("view"),cs=Gu();let te;try{te=U_(Hr,cs)}catch(n){const t=document.getElementById("boot-error");throw t&&(t.textContent="The picture failed to come up. "+(n&&n.message?n.message:"")),n}const ts=new Set,Ue={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let Ac=-1;const O_=document.getElementById("health-fill"),z_=document.getElementById("health-num"),B_=document.getElementById("signal-fill"),k_=document.getElementById("signal-num"),H_=document.getElementById("ch-name"),Rc=document.getElementById("remote-readout"),Cc=document.getElementById("level-chip"),Pc=document.getElementById("xp-fill"),bs=document.getElementById("levelup"),V_=document.getElementById("level-kicker"),G_=document.getElementById("level-title"),W_=document.getElementById("level-body"),Dc=document.getElementById("level-picks"),X_=document.getElementById("level-keys"),q_=document.getElementById("enemy-count"),Y_=document.getElementById("room-label"),Z_=document.getElementById("count-label"),K_=document.getElementById("rite"),Ic=document.getElementById("prompt"),Lc=document.getElementById("boss-wrap"),j_=document.getElementById("boss-fill"),$_=document.getElementById("tip"),Sr=document.getElementById("banner"),Uc=document.getElementById("hurt"),J_=document.getElementById("flash"),Q_=document.getElementById("panel"),Er=document.getElementById("panel-kicker"),wr=document.getElementById("panel-title"),br=document.getElementById("panel-body"),Tr=document.getElementById("panel-meta"),Ps=document.getElementById("panel-primary"),Ds=document.getElementById("panel-secondary");function jo(){const n=Math.min(window.innerWidth/N_,window.innerHeight/F_);Hu.style.transform=`scale(${Math.max(.05,n)})`}jo();window.addEventListener("resize",jo);window.addEventListener("orientationchange",jo);function ci(){document.pointerLockElement!==Hr&&Hr.requestPointerLock()}function Yr(){cs.ensure(),te.mode==="title"?(te.start(),ci()):te.mode==="pause"?(te.resume(),ci()):(te.mode==="clear"||te.mode==="dead")&&(te.replay(),ci())}document.getElementById("start").addEventListener("click",n=>{n.stopPropagation(),Yr()});Ps.addEventListener("click",n=>{n.stopPropagation(),Yr()});Ds.addEventListener("click",n=>{n.stopPropagation(),cs.ensure(),(te.mode==="pause"||te.mode==="clear"||te.mode==="dead")&&(te.mode==="pause"?te.replay():te.toTitle(),te.mode==="play"&&ci())});window.addEventListener("keydown",n=>{if(n.repeat)return;if(te.mode==="levelup"){const e=cc(n.code);if(e){const i=e==="LIVE"?0:e==="STATIC"?1:2;te.chooseUpgrade(i)&&te.mode==="play"&&ci()}return}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),ts.add(n.code);const t=cc(n.code);t&&te.mode==="play"&&(Ue.channel=t),n.code==="KeyQ"&&te.mode==="play"&&(Ue.cycle+=1),n.code==="KeyE"&&te.mode==="play"&&(Ue.use=!0),n.code==="KeyM"&&cs.toggle(),n.code==="Escape"&&te.mode==="play"&&te.pause(),n.code==="Enter"&&Yr(),n.code==="KeyR"&&(te.mode==="pause"||te.mode==="clear"||te.mode==="dead")&&(cs.ensure(),te.replay(),ci())});window.addEventListener("keyup",n=>ts.delete(n.code));window.addEventListener("mousemove",n=>{te.mode==="play"&&(Ue.lookX+=n.movementX||0,Ue.lookY+=n.movementY||0)});window.addEventListener("mousedown",n=>{if(n.button===0&&!(n.target.closest&&n.target.closest("button"))){if(te.mode==="title"){Yr();return}te.mode==="play"&&(ci(),Ue.fire=!0)}});window.addEventListener("mouseup",n=>{n.button===0&&(Ue.fire=!1)});window.addEventListener("wheel",n=>{n.preventDefault(),!(te.mode!=="play"||Math.abs(n.deltaY)<4)&&(Ue.cycle+=n.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==Hr&&te.mode==="play"&&te.pause()});window.addEventListener("blur",()=>{te.mode==="play"&&(te.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&te.mode==="play"&&(te.pause(),document.pointerLockElement&&document.exitPointerLock())});function tv(n){if(!bs)return;const t=n.mode==="levelup";if(bs.hidden=!t,!t){bs.dataset.offers="";return}V_.textContent=n.levelReason==="break"?"KRCD 7 · STATION BREAK":"KRCD 7 · LEVEL UP",G_.textContent="LEVEL "+(n.level||1),W_.textContent=n.levelReason==="break"?"Court is clear. Pick a retune before the wing.":"Pick a retune. Channels stay the same.";const e=n.offers||[],i=e.map(s=>s.id).join("|");X_.textContent=e.map((s,r)=>r+1).join("  ·  "),bs.dataset.offers!==i&&(bs.dataset.offers=i,Dc.replaceChildren(),e.forEach((s,r)=>{const a=document.createElement("button");a.type="button";const o=document.createElement("b");o.textContent=`${r+1}  ${s.name}`;const c=document.createElement("span");c.textContent=s.detail,a.append(o,c),a.addEventListener("click",l=>{l.stopPropagation(),cs.ensure(),te.chooseUpgrade(r)&&te.mode==="play"&&ci()}),Dc.appendChild(a)}))}function Ts(n){return n>0?n.toFixed(1)+"s":"—"}function ev(n){var i,s;const t=n.channel==="DEAD_AIR"?"ch-dead":n.channel==="STATIC"?"ch-static":"ch-live";Hu.className=`mode-${n.mode} ${t}`,O_.style.width=Math.max(0,n.health)+"%",B_.style.width=Math.max(0,n.signal)+"%",z_.textContent=String(Math.ceil(n.health)),k_.textContent=String(Math.ceil(n.signal)),H_.textContent=n.channel==="DEAD_AIR"?"DEAD AIR":n.channel,Rc&&(Rc.textContent=`${n.remote||""}  ${(i=n.ammo)!=null?i:0}/${(s=n.ammoMax)!=null?s:0}`),Cc&&(Cc.textContent=`LV ${n.level||1}`),Pc&&(Pc.style.width=Math.max(0,Math.min(100,Math.round((n.xp||0)*100)))+"%"),q_.textContent=String(n.enemies),Y_.textContent=n.roomLabel||"COURT",Z_.textContent=n.countLabel||"TESSERA",K_.textContent=n.rite||"",Ic.textContent=n.prompt||"",Ic.className=n.promptKind||"",n.boss==null?Lc.classList.remove("on"):(Lc.classList.add("on"),j_.style.width=Math.max(0,Math.min(100,n.boss*100))+"%"),$_.textContent=n.tip||"",Uc.style.opacity=n.health<35?"0.28":"0",n.hurt>.2&&(Uc.style.opacity="0.55"),J_.style.opacity=String(Math.max(0,Math.min(.7,n.flash))),n.bannerSerial!==Ac&&(Ac=n.bannerSerial,n.banner&&(Sr.textContent=n.banner,Sr.classList.remove("show"),Sr.offsetWidth,Sr.classList.add("show")));const e=n.mode==="pause"||n.mode==="clear"||n.mode==="dead";Q_.hidden=!e,tv(n),n.mode==="levelup"&&document.pointerLockElement&&document.exitPointerLock(),e&&(n.mode==="pause"?(Er.textContent="KRCD 7 · STILL ON AIR",wr.textContent="PAUSED",br.textContent="Esc released the mouse. Click resume to lock it again.",Tr.textContent=n.muted?"MUTED":"",Ps.textContent="Resume",Ds.textContent="Restart"):n.mode==="clear"?(Er.textContent="KRCD 7 · RADIO",wr.textContent="WING CLEAR",br.textContent="The Visor Priest is off the air. The mall is still broadcasting.",Tr.textContent=`TIME ${Ts(n.time)} · BEST ${Ts(n.best)} · ${n.swaps} CHANNEL CHANGES`,Ps.textContent="Replay",Ds.textContent="Title"):n.checkpoint?(Er.textContent="KRCD 7 · RADIO",wr.textContent="WING LOST",br.textContent="The court stays clear. Retry from the radio door.",Tr.textContent=`TIME ${Ts(n.time)} · BEST ${Ts(n.best)}`,Ps.textContent="Retry wing",Ds.textContent="Title"):(Er.textContent="KRCD 7 · NO CARRIER",wr.textContent="SIGNAL LOST",br.textContent="The court keeps the carrier. Retune and walk it again.",Tr.textContent=`BEST ${Ts(n.best)}`,Ps.textContent="Retry",Ds.textContent="Title"))}let Nc=performance.now();function Vu(n){const t=Math.min(.05,(n-Nc)/1e3);Nc=n,document.hidden||(te.update(t,{forward:ts.has("KeyW"),back:ts.has("KeyS"),left:ts.has("KeyA"),right:ts.has("KeyD"),lookX:Ue.lookX,lookY:Ue.lookY,fireDown:Ue.fire&&te.mode==="play",channel:Ue.channel,cycle:Ue.cycle,use:Ue.use}),ev(te.hud())),Ue.lookX=0,Ue.lookY=0,Ue.channel=null,Ue.cycle=0,Ue.use=!1,requestAnimationFrame(Vu)}requestAnimationFrame(Vu);
