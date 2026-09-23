(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const vl="channel-surfer-mute";function ah(){const n=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let e=null,t=null,i=null,r=null,s=null,a=!1,o=!1;try{o=localStorage.getItem(vl)==="1"}catch(d){o=!1}function c(){if(!n)return null;if(!e){e=new n,t=e.createGain(),t.gain.value=o?0:.85,i=e.createBiquadFilter(),i.type="lowpass",i.frequency.value=16e3,i.connect(t),t.connect(e.destination);const d=e.createBuffer(1,e.sampleRate*2,e.sampleRate),f=d.getChannelData(0);for(let w=0;w<f.length;w++)f[w]=Math.random()*2-1;const m=e.createBufferSource();m.buffer=d,m.loop=!0;const _=e.createBiquadFilter();_.type="highpass",_.frequency.value=1200,r=e.createGain(),r.gain.value=0,m.connect(_),_.connect(r),r.connect(i),m.start(),s=e.createGain(),s.gain.value=.018;const g=e.createOscillator(),p=e.createOscillator();g.type="sine",p.type="triangle",g.frequency.value=55,p.frequency.value=82.4,g.connect(s),p.connect(s),s.connect(i),g.start(),p.start()}return e.state==="suspended"&&e.resume(),a=!0,e}function l(d,f){const m=e.createGain(),_=e.currentTime;return m.gain.setValueAtTime(1e-4,_),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),_+.012),m.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,d)),m.connect(i),m}function u(d,f,m,_,g){if(!a||!e||o)return;const p=e.createOscillator();p.type=m;const w=e.currentTime;p.frequency.setValueAtTime(d,w),g&&p.frequency.exponentialRampToValueAtTime(Math.max(30,g),w+f),p.connect(l(f,_)),p.start(),p.stop(w+f+.03)}function h(d,f,m){if(!a||!e||o)return;const _=Math.max(1,Math.floor(e.sampleRate*d)),g=e.createBuffer(1,_,e.sampleRate),p=g.getChannelData(0);for(let O=0;O<_;O++)p[O]=Math.random()*2-1;const w=e.createBufferSource();w.buffer=g;const b=e.createBiquadFilter();b.type="bandpass",b.frequency.value=m,b.Q.value=.7;const y=l(d,f);w.connect(b),b.connect(y),w.start()}return{ensure:c,get muted(){return o},toggle(){o=!o,t&&(t.gain.value=o?0:.85);try{localStorage.setItem(vl,o?"1":"0")}catch(d){}return o},setChannel(d){if(!a||!e)return;const f=e.currentTime,m=d==="DEAD_AIR"?380:d==="STATIC"?3800:15e3;i.frequency.linearRampToValueAtTime(m,f+.07),r.gain.linearRampToValueAtTime(d==="STATIC"?.02:0,f+.08),s.gain.linearRampToValueAtTime(d==="DEAD_AIR"?.028:.016,f+.1)},play(d){if(!(!a||o))switch(d){case"live":h(.045,.14,2400),u(940,.08,"square",.045,360);break;case"static":h(.13,.22,640);break;case"phase":u(220,.12,"sine",.06,90),h(.07,.08,480);break;case"dry":h(.03,.08,1800),u(140,.04,"square",.03,90);break;case"deny":u(86,.09,"sine",.07,48);break;case"switch-live":u(523,.11,"square",.04),u(784,.13,"square",.03);break;case"switch-static":h(.08,.1,500),u(190,.12,"sawtooth",.03);break;case"switch-dead":u(74,.18,"sine",.07,42);break;case"hit":u(1500,.05,"square",.04,480);break;case"hurt":h(.11,.16,220),u(120,.16,"sawtooth",.05,60);break;case"death":h(.26,.18,280),u(210,.32,"triangle",.06,48);break;case"pickup":u(660,.08,"sine",.05),u(990,.12,"sine",.04);break;case"ui":u(480,.05,"square",.03);break;case"bolt":u(300,.09,"square",.03,130);break;case"nosignal":h(.16,.12,180);break;case"hijack":h(.18,.2,1800),u(680,.16,"sawtooth",.05,1400),u(220,.22,"square",.04,90);break;case"rite":u(196,.28,"sine",.05),u(247,.32,"sine",.035),u(392,.22,"triangle",.03);break;case"rite-break":h(.08,.16,1400),u(880,.12,"square",.05,420),u(1320,.16,"triangle",.04,700);break;case"rite-fail":u(98,.22,"sawtooth",.06,50),h(.14,.12,200);break;case"door":u(140,.18,"square",.04,70),u(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="170",oh=0,xl=1,lh=2,tu=1,nu=2,Xn=3,Mi=0,nn=1,jt=2,dn=0,Mr=1,js=2,Ml=3,yl=4,iu=5,Yn=100,ch=101,uh=102,hh=103,fh=104,to=200,dh=201,ph=202,mh=203,no=204,io=205,ru=206,gh=207,su=208,_h=209,vh=210,xh=211,Mh=212,yh=213,Sh=214,ro=0,so=1,ao=2,wr=3,oo=4,lo=5,co=6,uo=7,au=0,Eh=1,wh=2,vi=0,bh=1,Th=2,Ah=3,ou=4,Rh=5,Ch=6,Ph=7,lu=300,br=301,Tr=302,ho=303,fo=304,aa=306,Fn=1e3,Zn=1001,po=1002,fn=1003,Dh=1004,ss=1005,pn=1006,fa=1007,Dn=1008,Qn=1009,cu=1010,uu=1011,Qr=1012,jo=1013,ki=1014,Nn=1015,Vi=1016,$o=1017,Jo=1018,Hi=1020,hu=35902,fu=1021,du=1022,In=1023,pu=1024,mu=1025,yr=1026,Gi=1027,Qo=1028,el=1029,gu=1030,tl=1031,nl=1033,Hs=33776,Gs=33777,Ws=33778,Xs=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,Mo=37492,yo=37496,So=37808,Eo=37809,wo=37810,bo=37811,To=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Do=37817,Io=37818,Lo=37819,Uo=37820,No=37821,Ys=36492,Fo=36494,Oo=36495,_u=36283,zo=36284,Bo=36285,ko=36286,Ih=3200,Lh=3201,il=0,Uh=1,qn="",Qt="srgb",yi="srgb-linear",oa="linear",Dt="srgb",Xi=7680,Sl=519,Nh=512,Fh=513,Oh=514,vu=515,zh=516,Bh=517,kh=518,Vh=519,Vo=35044,El="300 es",Kn=2e3,$s=2001;class Pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const Zr=Math.PI/180,es=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function rl(n,e){return(n%e+e)%e}function Hh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gh(n,e,t){return n!==e?(t-n)/(e-n):0}function Kr(n,e,t){return(1-t)*n+t*e}function Wh(n,e,t,i){return Kr(n,e,1-Math.exp(-t*i))}function Xh(n,e=1){return e-Math.abs(rl(n,e*2)-e)}function Yh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Zh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kh(n,e){return n+Math.random()*(e-n)}function jh(n){return n*(.5-Math.random())}function $h(n){n!==void 0&&(wl=n);let e=wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(n){return n*Zr}function Qh(n){return n*es}function ef(n){return(n&n-1)===0&&n!==0}function tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*m,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*m,o*l);break;case"ZYZ":n.set(c*m,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const sf={DEG2RAD:Zr,RAD2DEG:es,generateUUID:$n,clamp:tn,euclideanModulo:rl,mapLinear:Hh,inverseLerp:Gh,lerp:Kr,damp:Wh,pingpong:Xh,smoothstep:Yh,smootherstep:qh,randInt:Zh,randFloat:Kh,randFloatSpread:jh,seededRandom:$h,degToRad:Jh,radToDeg:Qh,isPowerOfTwo:ef,ceilPowerOfTwo:tf,floorPowerOfTwo:nf,setQuaternionFromProperEuler:rf,normalize:Pt,denormalize:Pn};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,i,r,s,a,o,c,l){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],_=r[0],g=r[3],p=r[6],w=r[1],b=r[4],y=r[7],O=r[2],P=r[5],C=r[8];return s[0]=a*_+o*w+c*O,s[3]=a*g+o*b+c*P,s[6]=a*p+o*y+c*C,s[1]=l*_+u*w+h*O,s[4]=l*g+u*b+h*P,s[7]=l*p+u*y+h*C,s[2]=d*_+f*w+m*O,s[5]=d*g+f*b+m*P,s[8]=d*p+f*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,m=t*h+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new dt;function xu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){const n=Js("canvas");return n.style.display="block",n}const bl={};function Xr(n){n in bl||(bl[n]=!0,console.warn(n))}function of(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function lf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(n.r=Jn(n.r),n.g=Jn(n.g),n.b=Jn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(n.r=Sr(n.r),n.g=Sr(n.g),n.b=Sr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qn?oa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Tl=[.64,.33,.3,.6,.15,.06],Al=[.2126,.7152,.0722],Rl=[.3127,.329],Cl=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[yi]:{primaries:Tl,whitePoint:Rl,transfer:oa,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:Al,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:Tl,whitePoint:Rl,transfer:Dt,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:Al,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let Yi;class uf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=Js("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hf=0;class Mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pa(r[a].image)):s.push(pa(r[a]))}else s=pa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function pa(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?uf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class ln extends Pr{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Zn,r=Zn,s=pn,a=Dn,o=In,c=Qn,l=ln.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=$n(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=lu;ln.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(f+1)/2,O=(p+1)/2,P=(u+d)/4,C=(h+_)/4,I=(m+g)/4;return b>y&&b>O?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=P/i,s=C/i):y>O?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=I/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=C/s,r=I/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends Pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends df{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yu extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-o;const p=c*d+l*f+u*m+h*_,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const O=Math.sqrt(b),P=Math.atan2(O,p*w);g=Math.sin(g*P)/O,o=Math.sin(o*P)/O}const y=o*w;if(c=c*g+d*y,l=l*g+f*y,u=u*g+m*y,h=h*g+_*y,g===1-o){const O=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=O,l*=O,u*=O,h*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-o*f,e[t+2]=l*m+u*f+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new G,Dl=new ts;class ns{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),as.copy(i.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),os.subVectors(this.max,Ir),qi.subVectors(e.a,Ir),Zi.subVectors(e.b,Ir),Ki.subVectors(e.c,Ir),li.subVectors(Zi,qi),ci.subVectors(Ki,Zi),wi.subVectors(qi,Ki);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-wi.z,wi.y,li.z,0,-li.x,ci.z,0,-ci.x,wi.z,0,-wi.x,-li.y,li.x,0,-ci.y,ci.x,0,-wi.y,wi.x,0];return!ga(t,qi,Zi,Ki,os)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,qi,Zi,Ki,os))?!1:(ls.crossVectors(li,ci),t=[ls.x,ls.y,ls.z],ga(t,qi,Zi,Ki,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new G,new G,new G,new G,new G,new G,new G,new G],Tn=new G,as=new ns,qi=new G,Zi=new G,Ki=new G,li=new G,ci=new G,wi=new G,Ir=new G,os=new G,ls=new G,bi=new G;function ga(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){bi.fromArray(n,s);const o=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),u=i.dot(bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const mf=new ns,Lr=new G,_a=new G;class is{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(_a)),this.expandByPoint(Lr.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new G,va=new G,cs=new G,ui=new G,xa=new G,us=new G,Ma=new G;class sl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){va.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(va);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=ui.dot(this.direction),c=-ui.dot(cs),l=ui.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(va).addScaledVector(cs,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){xa.subVectors(t,e),us.subVectors(i,e),Ma.crossVectors(xa,us);let a=this.direction.dot(Ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const c=o*this.direction.dot(us.crossVectors(ui,us));if(c<0)return null;const l=o*this.direction.dot(xa.cross(ui));if(l<0||c+l>a)return null;const u=-o*ui.dot(Ma);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,m,_,g){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,m,_,g)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,_f)}lookAt(e,t,i){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),hi.crossVectors(i,vn),hi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),hi.crossVectors(i,vn)),hi.normalize(),hs.crossVectors(vn,hi),r[0]=hi.x,r[4]=hs.x,r[8]=vn.x,r[1]=hi.y,r[5]=hs.y,r[9]=vn.y,r[2]=hi.z,r[6]=hs.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],w=i[3],b=i[7],y=i[11],O=i[15],P=r[0],C=r[4],I=r[8],E=r[12],M=r[1],T=r[5],A=r[9],L=r[13],W=r[2],V=r[6],q=r[10],te=r[14],v=r[3],D=r[7],F=r[11],B=r[15];return s[0]=a*P+o*M+c*W+l*v,s[4]=a*C+o*T+c*V+l*D,s[8]=a*I+o*A+c*q+l*F,s[12]=a*E+o*L+c*te+l*B,s[1]=u*P+h*M+d*W+f*v,s[5]=u*C+h*T+d*V+f*D,s[9]=u*I+h*A+d*q+f*F,s[13]=u*E+h*L+d*te+f*B,s[2]=m*P+_*M+g*W+p*v,s[6]=m*C+_*T+g*V+p*D,s[10]=m*I+_*A+g*q+p*F,s[14]=m*E+_*L+g*te+p*B,s[3]=w*P+b*M+y*W+O*v,s[7]=w*C+b*T+y*V+O*D,s[11]=w*I+b*A+y*q+O*F,s[15]=w*E+b*L+y*te+O*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+g*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],w=h*g*l-_*d*l+_*c*f-o*g*f-h*c*p+o*d*p,b=m*d*l-u*g*l-m*c*f+a*g*f+u*c*p-a*d*p,y=u*_*l-m*h*l+m*o*f-a*_*f-u*o*p+a*h*p,O=m*h*c-u*_*c-m*o*d+a*_*d+u*o*g-a*h*g,P=t*w+i*b+r*y+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=w*C,e[1]=(_*d*s-h*g*s-_*r*f+i*g*f+h*r*p-i*d*p)*C,e[2]=(o*g*s-_*c*s+_*r*l-i*g*l-o*r*p+i*c*p)*C,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*C,e[4]=b*C,e[5]=(u*g*s-m*d*s+m*r*f-t*g*f-u*r*p+t*d*p)*C,e[6]=(m*c*s-a*g*s-m*r*l+t*g*l+a*r*p-t*c*p)*C,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*C,e[8]=y*C,e[9]=(m*h*s-u*_*s-m*i*f+t*_*f+u*i*p-t*h*p)*C,e[10]=(a*_*s-m*o*s+m*i*l-t*_*l-a*i*p+t*o*p)*C,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*C,e[12]=O*C,e[13]=(u*_*r-m*h*r+m*i*d-t*_*d-u*i*g+t*h*g)*C,e[14]=(m*o*r-a*_*r-m*i*c+t*_*c+a*i*g-t*o*g)*C,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,m=s*h,_=a*u,g=a*h,p=o*h,w=c*l,b=c*u,y=c*h,O=i.x,P=i.y,C=i.z;return r[0]=(1-(_+p))*O,r[1]=(f+y)*O,r[2]=(m-b)*O,r[3]=0,r[4]=(f-y)*P,r[5]=(1-(d+p))*P,r[6]=(g+w)*P,r[7]=0,r[8]=(m+b)*C,r[9]=(g-w)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ji.set(r[0],r[1],r[2]).length();const a=ji.set(r[4],r[5],r[6]).length(),o=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const l=1/s,u=1/a,h=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Kn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,m;if(o===Kn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===$s)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Kn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*l,f=(i+r)*u;let m,_;if(o===Kn)m=(a+s)*h,_=-2*h;else if(o===$s)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ji=new G,An=new Ut,gf=new G(0,0,0),_f=new G(1,1,1),hi=new G,hs=new G,vn=new G,Il=new Ut,Ll=new ts;class On{constructor(e=0,t=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Il,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vf=0;const Ul=new G,$i=new ts,Vn=new Ut,fs=new G,Ur=new G,xf=new G,Mf=new ts,Nl=new G(1,0,0),Fl=new G(0,1,0),Ol=new G(0,0,1),zl={type:"added"},yf={type:"removed"},Ji={type:"childadded",child:null},ya={type:"childremoved",child:null};class Ht extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,t=new On,i=new ts,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new dt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fs.copy(e):fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ur,fs,this.up):Vn.lookAt(fs,Ur,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Vn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new G,Hn=new G,Sa=new G,Gn=new G,Qi=new G,er=new G,Bl=new G,Ea=new G,wa=new G,ba=new G,Ta=new It,Aa=new It,Ra=new It;class wn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Rn.subVectors(r,t),Hn.subVectors(i,t),Sa.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(Hn),c=Rn.dot(Sa),l=Hn.dot(Hn),u=Hn.dot(Sa),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ta.setScalar(0),Aa.setScalar(0),Ra.setScalar(0),Ta.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,i),Ra.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ta,s.x),a.addScaledVector(Aa,s.y),a.addScaledVector(Ra,s.z),a}static isFrontFacing(e,t,i,r){return Rn.subVectors(i,t),Hn.subVectors(e,t),Rn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Rn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Qi.subVectors(r,i),er.subVectors(s,i),Ea.subVectors(e,i);const c=Qi.dot(Ea),l=er.dot(Ea);if(c<=0&&l<=0)return t.copy(i);wa.subVectors(e,r);const u=Qi.dot(wa),h=er.dot(wa);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Qi,a);ba.subVectors(e,s);const f=Qi.dot(ba),m=er.dot(ba);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(er,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Bl.subVectors(s,r),o=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(Bl,o);const p=1/(g+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Qi,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=rl(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ca(a,s,e+1/3),this.g=Ca(a,s,e),this.b=Ca(a,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Et.fromWorkingColorSpace(on.copy(this),e),Math.round(tn(on.r*255,0,255))*65536+Math.round(tn(on.g*255,0,255))*256+Math.round(tn(on.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(on.copy(this),t);const i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Qt){Et.fromWorkingColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ds);const i=Kr(fi.h,ds.h,t),r=Kr(fi.s,ds.s,t),s=Kr(fi.l,ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new ot;ot.NAMES=Eu;let Sf=0;class ni extends Pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=$n(),this.name="",this.blending=Mr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==io&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gt extends ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new G,ps=new Re;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vo,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),e}}class wu extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bu extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ef=0;const En=new Ut,Pa=new Ht,tr=new G,xn=new ns,Nr=new ns,Zt=new G;class kt extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xu(e)?bu:wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(xn.min,Nr.min),xn.expandByPoint(Zt),Zt.addVectors(xn.max,Nr.max),xn.expandByPoint(Zt)):(xn.expandByPoint(Nr.min),xn.expandByPoint(Nr.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Zt.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(e,l),Zt.add(tr)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new G,c[I]=new G;const l=new G,u=new G,h=new G,d=new Re,f=new Re,m=new Re,_=new G,g=new G;function p(I,E,M){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,M),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(T),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(T),o[I].add(_),o[E].add(_),o[M].add(_),c[I].add(g),c[E].add(g),c[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,E=w.length;I<E;++I){const M=w[I],T=M.start,A=M.count;for(let L=T,W=T+A;L<W;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new G,y=new G,O=new G,P=new G;function C(I){O.fromBufferAttribute(r,I),P.copy(O);const E=o[I];b.copy(E),b.sub(O.multiplyScalar(O.dot(E))).normalize(),y.crossVectors(P,E);const T=y.dot(c[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,T)}for(let I=0,E=w.length;I<E;++I){const M=w[I],T=M.start,A=M.count;for(let L=T,W=T+A;L<W;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,u=new G,h=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new $t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new Ut,Ti=new sl,ms=new is,Vl=new G,gs=new G,_s=new G,vs=new G,Da=new G,xs=new G,Hl=new G,Ms=new G;class re extends Ht{constructor(e=new kt,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Da.fromBufferAttribute(h,e),a?xs.addScaledVector(Da,u):xs.addScaledVector(Da.sub(t),u))}t.add(xs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(ms.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(ms,Vl)===null||Ti.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(kl.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(kl),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,O=b;y<O;y+=3){const P=o.getX(y),C=o.getX(y+1),I=o.getX(y+2);r=ys(this,p,e,i,l,u,h,P,C,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);r=ys(this,a,e,i,l,u,h,w,b,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,O=b;y<O;y+=3){const P=y,C=y+1,I=y+2;r=ys(this,p,e,i,l,u,h,P,C,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=g,b=g+1,y=g+2;r=ys(this,a,e,i,l,u,h,w,b,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function wf(n,e,t,i,r,s,a,o){let c;if(e.side===nn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Mi,o),c===null)return null;Ms.copy(o),Ms.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ms);return l<t.near||l>t.far?null:{distance:l,point:Ms.clone(),object:n}}function ys(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,gs),n.getVertexPosition(c,_s),n.getVertexPosition(l,vs);const u=wf(n,e,t,i,gs,_s,vs,Hl);if(u){const h=new G;wn.getBarycoord(Hl,gs,_s,vs,h),r&&(u.uv=wn.getInterpolatedAttribute(r,o,c,l,h,new Re)),s&&(u.uv1=wn.getInterpolatedAttribute(s,o,c,l,h,new Re)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,c,l,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new G,materialIndex:0};wn.getNormal(gs,_s,vs,d.normal),u.face=d,u.barycoord=h}return u}class He extends kt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function m(_,g,p,w,b,y,O,P,C,I,E){const M=y/C,T=O/I,A=y/2,L=O/2,W=P/2,V=C+1,q=I+1;let te=0,v=0;const D=new G;for(let F=0;F<q;F++){const B=F*T-L;for(let $=0;$<V;$++){const Me=$*M-A;D[_]=Me*w,D[g]=B*b,D[p]=W,l.push(D.x,D.y,D.z),D[_]=0,D[g]=0,D[p]=P>0?1:-1,u.push(D.x,D.y,D.z),h.push($/C),h.push(1-F/I),te+=1}}for(let F=0;F<I;F++)for(let B=0;B<C;B++){const $=d+B+V*F,Me=d+B+V*(F+1),K=d+(B+1)+V*(F+1),ue=d+(B+1)+V*F;c.push($,Me,ue),c.push(Me,K,ue),v+=6}o.addGroup(f,v,E),f+=v,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new He(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function bf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Yr={clone:Ar,merge:hn};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Au extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new G,Gl=new Re,Wl=new Re;class Mn extends Au{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class Rf extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(nr,ir,e,t);r.layers=this.layers,this.add(r);const s=new Mn(nr,ir,e,t);s.layers=this.layers,this.add(s);const a=new Mn(nr,ir,e,t);a.layers=this.layers,this.add(a);const o=new Mn(nr,ir,e,t);o.layers=this.layers,this.add(o);const c=new Mn(nr,ir,e,t);c.layers=this.layers,this.add(c);const l=new Mn(nr,ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ru extends ln{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cf extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ru(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new He(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:dn});s.uniforms.tEquirect.value=t;const a=new re(r,s),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=pn),new Rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ia=new G,Pf=new G,Df=new dt;class Li{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ia.subVectors(i,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Df.getNormalMatrix(e),r=this.coplanarPoint(Ia).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new is,Ss=new G;class al{constructor(e=new Li,t=new Li,i=new Li,r=new Li,s=new Li,a=new Li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],m=r[9],_=r[10],g=r[11],p=r[12],w=r[13],b=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,g-f,y-p).normalize(),i[1].setComponents(c+s,d+l,g+f,y+p).normalize(),i[2].setComponents(c+a,d+u,g+m,y+w).normalize(),i[3].setComponents(c-a,d-u,g-m,y-w).normalize(),i[4].setComponents(c-o,d-h,g-_,y-b).normalize(),t===Kn)i[5].setComponents(c+o,d+h,g+_,y+b).normalize();else if(t===$s)i[5].setComponents(o,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function If(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Ct extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const w=p*d-a;for(let b=0;b<l;b++){const y=b*h-s;m.push(y,-w,0),_.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const b=w+l*p,y=w+l*(p+1),O=w+1+l*(p+1),P=w+1+l*p;f.push(b,y,P),f.push(y,O,P)}this.setIndex(f),this.setAttribute("position",new bt(m,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,qf=`#ifdef USE_BUMPMAP
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nd=`#define PI 3.141592653589793
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
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rd=`vec3 transformedNormal = objectNormal;
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
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
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
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
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
#endif`,Dd=`struct PhysicalMaterial {
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
}`,Id=`
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hd=`#if defined( USE_POINTS_UV )
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
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_p=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,Vp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Zp=`#define LAMBERT
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Jp=`#define NORMAL
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
}`,Qp=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,r0=`#define TOON
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
}`,s0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,u0=`uniform float rotation;
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
}`,h0=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Lf,alphahash_pars_fragment:Uf,alphamap_fragment:Nf,alphamap_pars_fragment:Ff,alphatest_fragment:Of,alphatest_pars_fragment:zf,aomap_fragment:Bf,aomap_pars_fragment:kf,batching_pars_vertex:Vf,batching_vertex:Hf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:Yf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Kf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:$f,color_fragment:Jf,color_pars_fragment:Qf,color_pars_vertex:ed,color_vertex:td,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:rd,displacementmap_pars_vertex:sd,displacementmap_vertex:ad,emissivemap_fragment:od,emissivemap_pars_fragment:ld,colorspace_fragment:cd,colorspace_pars_fragment:ud,envmap_fragment:hd,envmap_common_pars_fragment:fd,envmap_pars_fragment:dd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:bd,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:_d,fog_fragment:vd,fog_pars_fragment:xd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:yd,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:Ed,lights_pars_begin:wd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Dd,lights_fragment_begin:Id,lights_fragment_maps:Ld,lights_fragment_end:Ud,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:Od,logdepthbuf_vertex:zd,map_fragment:Bd,map_pars_fragment:kd,map_particle_fragment:Vd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:Xd,morphcolor_vertex:Yd,morphnormal_vertex:qd,morphtarget_pars_vertex:Zd,morphtarget_vertex:Kd,normal_fragment_begin:jd,normal_fragment_maps:$d,normal_pars_fragment:Jd,normal_pars_vertex:Qd,normal_vertex:ep,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:rp,iridescence_pars_fragment:sp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:up,dithering_pars_fragment:hp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:_p,skinbase_vertex:vp,skinning_pars_vertex:xp,skinning_vertex:Mp,skinnormal_vertex:yp,specularmap_fragment:Sp,specularmap_pars_fragment:Ep,tonemapping_fragment:wp,tonemapping_pars_fragment:bp,transmission_fragment:Tp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Lp,backgroundCube_vert:Up,backgroundCube_frag:Np,cube_vert:Fp,cube_frag:Op,depth_vert:zp,depth_frag:Bp,distanceRGBA_vert:kp,distanceRGBA_frag:Vp,equirect_vert:Hp,equirect_frag:Gp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:Yp,meshbasic_frag:qp,meshlambert_vert:Zp,meshlambert_frag:Kp,meshmatcap_vert:jp,meshmatcap_frag:$p,meshnormal_vert:Jp,meshnormal_frag:Qp,meshphong_vert:e0,meshphong_frag:t0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:r0,meshtoon_frag:s0,points_vert:a0,points_frag:o0,shadow_vert:l0,shadow_frag:c0,sprite_vert:u0,sprite_frag:h0},Pe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Un={basic:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:hn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:hn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:hn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:hn([Pe.lights,Pe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Un.physical={uniforms:hn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Es={r:0,b:0,g:0},Ri=new On,f0=new Ut;function d0(n,e,t,i,r,s,a){const o=new ot(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function m(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function _(w){let b=!1;const y=m(w);y===null?p(o,c):y&&y.isColor&&(p(y,1),b=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,b){const y=m(b);y&&(y.isCubeTexture||y.mapping===aa)?(u===void 0&&(u=new re(new He(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ar(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(b.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(Ri)),u.material.toneMapped=Et.getTransfer(y.colorSpace)!==Dt,(h!==y||d!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new re(new Ct(2,2),new bn({name:"BackgroundMaterial",uniforms:Ar(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Et.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,b){w.getRGB(Es,Tu(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:_,addToRenderList:g}}function p0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,T,A,L,W){let V=!1;const q=h(L,A,T);s!==q&&(s=q,l(s.object)),V=f(M,L,A,W),V&&m(M,L,A,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(M,T,A,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,T,A){const L=A.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let V=W[T.id];V===void 0&&(V={},W[T.id]=V);let q=V[L];return q===void 0&&(q=d(c()),V[L]=q),q}function d(M){const T=[],A=[],L=[];for(let W=0;W<t;W++)T[W]=0,A[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:A,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,T,A,L){const W=s.attributes,V=T.attributes;let q=0;const te=A.getAttributes();for(const v in te)if(te[v].location>=0){const F=W[v];let B=V[v];if(B===void 0&&(v==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),v==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),F===void 0||F.attribute!==B||B&&F.data!==B.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function m(M,T,A,L){const W={},V=T.attributes;let q=0;const te=A.getAttributes();for(const v in te)if(te[v].location>=0){let F=V[v];F===void 0&&(v==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),v==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));const B={};B.attribute=F,F&&F.data&&(B.data=F.data),W[v]=B,q++}s.attributes=W,s.attributesNum=q,s.index=L}function _(){const M=s.newAttributes;for(let T=0,A=M.length;T<A;T++)M[T]=0}function g(M){p(M,0)}function p(M,T){const A=s.newAttributes,L=s.enabledAttributes,W=s.attributeDivisors;A[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),W[M]!==T&&(n.vertexAttribDivisor(M,T),W[M]=T)}function w(){const M=s.newAttributes,T=s.enabledAttributes;for(let A=0,L=T.length;A<L;A++)T[A]!==M[A]&&(n.disableVertexAttribArray(A),T[A]=0)}function b(M,T,A,L,W,V,q){q===!0?n.vertexAttribIPointer(M,T,A,W,V):n.vertexAttribPointer(M,T,A,L,W,V)}function y(M,T,A,L){_();const W=L.attributes,V=A.getAttributes(),q=T.defaultAttributeValues;for(const te in V){const v=V[te];if(v.location>=0){let D=W[te];if(D===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),D!==void 0){const F=D.normalized,B=D.itemSize,$=e.get(D);if($===void 0)continue;const Me=$.buffer,K=$.type,ue=$.bytesPerElement,ne=K===n.INT||K===n.UNSIGNED_INT||D.gpuType===jo;if(D.isInterleavedBufferAttribute){const ae=D.data,Se=ae.stride,De=D.offset;if(ae.isInstancedInterleavedBuffer){for(let Ge=0;Ge<v.locationSize;Ge++)p(v.location+Ge,ae.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ge=0;Ge<v.locationSize;Ge++)g(v.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ge=0;Ge<v.locationSize;Ge++)b(v.location+Ge,B/v.locationSize,K,F,Se*ue,(De+B/v.locationSize*Ge)*ue,ne)}else{if(D.isInstancedBufferAttribute){for(let ae=0;ae<v.locationSize;ae++)p(v.location+ae,D.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ae=0;ae<v.locationSize;ae++)g(v.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ae=0;ae<v.locationSize;ae++)b(v.location+ae,B/v.locationSize,K,F,B*ue,B/v.locationSize*ae*ue,ne)}}else if(q!==void 0){const F=q[te];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(v.location,F);break;case 3:n.vertexAttrib3fv(v.location,F);break;case 4:n.vertexAttrib4fv(v.location,F);break;default:n.vertexAttrib1fv(v.location,F)}}}}w()}function O(){I();for(const M in i){const T=i[M];for(const A in T){const L=T[A];for(const W in L)u(L[W].object),delete L[W];delete T[A]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const T=i[M.id];for(const A in T){const L=T[A];for(const W in L)u(L[W].object),delete L[W];delete T[A]}delete i[M.id]}function C(M){for(const T in i){const A=i[T];if(A[M.id]===void 0)continue;const L=A[M.id];for(const W in L)u(L[W].object),delete L[W];delete A[M.id]}}function I(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function m0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function g0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!I)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:O,maxSamples:P}}function _0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Li,o=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const w=s?0:i,b=w*4;let y=p.clippingState||null;c.value=y,y=u(m,d,b,f);for(let O=0;O!==b;++O)y[O]=t[O];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(h[b]).applyMatrix4(w,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function v0(n){let e=new WeakMap;function t(a,o){return o===ho?a.mapping=br:o===fo&&(a.mapping=Tr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ho||o===fo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Cf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ol extends Au{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,Xl=[.125,.215,.35,.446,.526,.582],zi=20,La=new ol,Yl=new ot;let Ua=null,Na=0,Fa=0,Oa=!1;const Ui=(1+Math.sqrt(5))/2,rr=1/Ui,ql=[new G(-Ui,rr,0),new G(Ui,rr,0),new G(-rr,0,Ui),new G(rr,0,Ui),new G(0,Ui,-rr),new G(0,Ui,rr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Vi,format:In,colorSpace:yi,depthBuffer:!1},r=Zl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(s)),this._blurMaterial=M0(s,e,t)}return r}_compileMaterial(e){const t=new re(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,i,r){const o=new Mn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Yl),u.toneMapping=vi,u.autoClear=!1;const f=new gt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new re(new He,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Yl),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;ws(r,w*b,p>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ws(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,La)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ql[(r-s-1)%ql.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new re(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):zi;g>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let w=0;for(let C=0;C<zi;++C){const I=C/_,E=Math.exp(-I*I/2);p.push(E),C===0?w+=E:C<g&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-i;const y=this._sizeLods[r],O=3*y*(r>b-vr?r-b+vr:0),P=4*(this._cubeSize-y);ws(t,O,P,3*y,2*y),c.setRenderTarget(t),c.render(h,La)}}function x0(n){const e=[],t=[],i=[];let r=n;const s=n-vr+1+Xl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-vr?c=Xl[a-n+vr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,w=new Float32Array(_*m*f),b=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,I=P>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];w.set(E,_*m*P),b.set(d,g*m*P);const M=[P,P,P,P,P,P];y.set(M,p*m*P)}const O=new kt;O.setAttribute("position",new $t(w,_)),O.setAttribute("uv",new $t(b,g)),O.setAttribute("faceIndex",new $t(y,p)),e.push(O),r>vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zl(n,e,t){const i=new ei(n,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function M0(n,e,t){const i=new Float32Array(zi),r=new G(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ll(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Kl(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function jl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function y0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===ho||c===fo,u=c===br||c===Tr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ho(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Ho(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function S0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function E0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let b=0,y=w.length;b<y;b+=3){const O=w[b+0],P=w[b+1],C=w[b+2];d.push(O,P,P,C,C,O)}}else if(m!==void 0){const w=m.array;_=m.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const O=b+0,P=b+1,C=b+2;d.push(O,P,P,C,C,O)}}else return;const g=new(xu(d)?bu:wu)(d,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function w0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,d*a,m),t.update(f,i,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function h(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function b0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function T0(n,e,t){const i=new WeakMap,r=new It;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let O=o.attributes.position.count*y,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const C=new Float32Array(O*P*4*h),I=new yu(C,O,P,h);I.type=Nn,I.needsUpdate=!0;const E=y*4;for(let T=0;T<h;T++){const A=p[T],L=w[T],W=b[T],V=O*P*4*T;for(let q=0;q<A.count;q++){const te=q*E;m===!0&&(r.fromBufferAttribute(A,q),C[V+te+0]=r.x,C[V+te+1]=r.y,C[V+te+2]=r.z,C[V+te+3]=0),_===!0&&(r.fromBufferAttribute(L,q),C[V+te+4]=r.x,C[V+te+5]=r.y,C[V+te+6]=r.z,C[V+te+7]=0),g===!0&&(r.fromBufferAttribute(W,q),C[V+te+8]=r.x,C[V+te+9]=r.y,C[V+te+10]=r.z,C[V+te+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:I,size:new Re(O,P)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function A0(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class cl extends ln{constructor(e,t,i,r,s,a,o,c,l,u=yr){if(u!==yr&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yr&&(i=ki),i===void 0&&u===Gi&&(i=Hi),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pu=new ln,$l=new cl(1,1),Du=new yu,Iu=new pf,Lu=new Ru,Jl=[],Ql=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jl[r];if(s===void 0&&(s=new Float32Array(r),Jl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function la(n,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function P0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function I0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;nc.set(i),n.uniformMatrix2fv(this.addr,!1,nc),Yt(t,i)}}function L0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;tc.set(i),n.uniformMatrix3fv(this.addr,!1,tc),Yt(t,i)}}function U0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;ec.set(i),n.uniformMatrix4fv(this.addr,!1,ec),Yt(t,i)}}function N0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function B0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function V0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function H0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function G0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($l.compareFunction=vu,s=$l):s=Pu,t.setTexture2D(e||s,r)}function W0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Iu,r)}function X0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Lu,r)}function Y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Du,r)}function q0(n){switch(n){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return D0;case 35674:return I0;case 35675:return L0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return z0;case 5125:return B0;case 36294:return k0;case 36295:return V0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return Y0}}function Z0(n,e){n.uniform1fv(this.addr,e)}function K0(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function j0(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function $0(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function J0(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q0(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function em(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tm(n,e){n.uniform1iv(this.addr,e)}function nm(n,e){n.uniform2iv(this.addr,e)}function im(n,e){n.uniform3iv(this.addr,e)}function rm(n,e){n.uniform4iv(this.addr,e)}function sm(n,e){n.uniform1uiv(this.addr,e)}function am(n,e){n.uniform2uiv(this.addr,e)}function om(n,e){n.uniform3uiv(this.addr,e)}function lm(n,e){n.uniform4uiv(this.addr,e)}function cm(n,e,t){const i=this.cache,r=e.length,s=la(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Pu,s[a])}function um(n,e,t){const i=this.cache,r=e.length,s=la(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Iu,s[a])}function hm(n,e,t){const i=this.cache,r=e.length,s=la(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Lu,s[a])}function fm(n,e,t){const i=this.cache,r=e.length,s=la(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Du,s[a])}function dm(n){switch(n){case 5126:return Z0;case 35664:return K0;case 35665:return j0;case 35666:return $0;case 35674:return J0;case 35675:return Q0;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return fm}}class pm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q0(t.type)}}class mm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dm(t.type)}}class gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const za=/(\w+)(\])?(\[|\.)?/g;function ic(n,e){n.seq.push(e),n.map[e.id]=e}function _m(n,e,t){const i=n.name,r=i.length;for(za.lastIndex=0;;){const s=za.exec(i),a=za.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ic(t,l===void 0?new pm(o,n,e):new mm(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new gm(o),ic(t,h)),t=h}}}class qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_m(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vm=37297;let xm=0;function Mm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const sc=new dt;function ym(n){Et._getMatrix(sc,Et.workingColorSpace,n);const e=`mat3( ${sc.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ac(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Mm(n.getShaderSource(e),a)}else return r}function Sm(n,e){const t=ym(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Em(n,e){let t;switch(e){case bh:t="Linear";break;case Th:t="Reinhard";break;case Ah:t="Cineon";break;case ou:t="ACESFilmic";break;case Ch:t="AgX";break;case Ph:t="Neutral";break;case Rh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new G;function wm(){Et.getLuminanceCoefficients(bs);const n=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function Tm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Am(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qr(n){return n!==""}function oc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(n){return n.replace(Rm,Pm)}const Cm=new Map;function Pm(n,e){let t=ft[e];if(t===void 0){const i=Cm.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Go(t)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(n){return n.replace(Dm,Im)}function Im(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Lm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Um(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Tr:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case Eh:e="ENVMAP_BLENDING_MIX";break;case wh:e="ENVMAP_BLENDING_ADD";break}return e}function Om(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Lm(t),l=Um(t),u=Nm(t),h=Fm(t),d=Om(t),f=bm(t),m=Tm(s),_=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(g=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ft.tonemapping_pars_fragment:"",t.toneMapping!==vi?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Sm("linearToOutputTexel",t.outputColorSpace),wm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Go(a),a=oc(a,t),a=lc(a,t),o=Go(o),o=oc(o,t),o=lc(o,t),a=cc(a),o=cc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+g+a,y=w+p+o,O=rc(r,r.VERTEX_SHADER,b),P=rc(r,r.FRAGMENT_SHADER,y);r.attachShader(_,O),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(T){if(n.debug.checkShaderErrors){const A=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(O).trim(),W=r.getShaderInfoLog(P).trim();let V=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,P);else{const te=ac(r,O,"vertex"),v=ac(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+A+`
`+te+`
`+v)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||W==="")&&(q=!1);q&&(T.diagnostics={runnable:V,programLog:A,vertexShader:{log:L,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(O),r.deleteShader(P),I=new qs(r,_),E=Am(r,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,vm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=P,this}let Bm=0;class km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vm(e),t.set(e,i)),i}}class Vm{constructor(e){this.id=Bm++,this.code=e,this.usedTimes=0}}function Hm(n,e,t,i,r,s,a){const o=new Su,c=new km,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,M,T,A,L){const W=A.fog,V=L.geometry,q=E.isMeshStandardMaterial?A.environment:null,te=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),v=te&&te.mapping===aa?te.image.height:null,D=m[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const F=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,B=F!==void 0?F.length:0;let $=0;V.morphAttributes.position!==void 0&&($=1),V.morphAttributes.normal!==void 0&&($=2),V.morphAttributes.color!==void 0&&($=3);let Me,K,ue,ne;if(D){const yt=Un[D];Me=yt.vertexShader,K=yt.fragmentShader}else Me=E.vertexShader,K=E.fragmentShader,c.update(E),ue=c.getVertexShaderID(E),ne=c.getFragmentShaderID(E);const ae=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,Ge=L.isBatchedMesh===!0,mt=!!E.map,$e=!!E.matcap,et=!!te,z=!!E.aoMap,he=!!E.lightMap,Qe=!!E.bumpMap,Fe=!!E.normalMap,ke=!!E.displacementMap,ct=!!E.emissiveMap,We=!!E.metalnessMap,R=!!E.roughnessMap,x=E.anisotropy>0,X=E.clearcoat>0,J=E.dispersion>0,le=E.iridescence>0,Q=E.sheen>0,Ve=E.transmission>0,ve=x&&!!E.anisotropyMap,Ee=X&&!!E.clearcoatMap,it=X&&!!E.clearcoatNormalMap,de=X&&!!E.clearcoatRoughnessMap,be=le&&!!E.iridescenceMap,Ze=le&&!!E.iridescenceThicknessMap,Ke=Q&&!!E.sheenColorMap,_e=Q&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,Ie=!!E.specularColorMap,rt=!!E.specularIntensityMap,k=Ve&&!!E.transmissionMap,me=Ve&&!!E.thicknessMap,j=!!E.gradientMap,ee=!!E.alphaMap,Ae=E.alphaTest>0,Ce=!!E.alphaHash,at=!!E.extensions;let Nt=vi;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const zt={shaderID:D,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:K,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:ne,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:yi,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:$e,envMap:et,envMapMode:et&&te.mapping,envMapCubeUVHeight:v,aoMap:z,lightMap:he,bumpMap:Qe,normalMap:Fe,displacementMap:d&&ke,emissiveMap:ct,normalMapObjectSpace:Fe&&E.normalMapType===Uh,normalMapTangentSpace:Fe&&E.normalMapType===il,metalnessMap:We,roughnessMap:R,anisotropy:x,anisotropyMap:ve,clearcoat:X,clearcoatMap:Ee,clearcoatNormalMap:it,clearcoatRoughnessMap:de,dispersion:J,iridescence:le,iridescenceMap:be,iridescenceThicknessMap:Ze,sheen:Q,sheenColorMap:Ke,sheenRoughnessMap:_e,specularMap:Ue,specularColorMap:Ie,specularIntensityMap:rt,transmission:Ve,transmissionMap:k,thicknessMap:me,gradientMap:j,opaque:E.transparent===!1&&E.blending===Mr&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:Ae,alphaHash:Ce,combine:E.combine,mapUv:mt&&_(E.map.channel),aoMapUv:z&&_(E.aoMap.channel),lightMapUv:he&&_(E.lightMap.channel),bumpMapUv:Qe&&_(E.bumpMap.channel),normalMapUv:Fe&&_(E.normalMap.channel),displacementMapUv:ke&&_(E.displacementMap.channel),emissiveMapUv:ct&&_(E.emissiveMap.channel),metalnessMapUv:We&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:ve&&_(E.anisotropyMap.channel),clearcoatMapUv:Ee&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(E.sheenRoughnessMap.channel),specularMapUv:Ue&&_(E.specularMap.channel),specularColorMapUv:Ie&&_(E.specularColorMap.channel),specularIntensityMapUv:rt&&_(E.specularIntensityMap.channel),transmissionMapUv:k&&_(E.transmissionMap.channel),thicknessMapUv:me&&_(E.thicknessMap.channel),alphaMapUv:ee&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Fe||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(mt||ee),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Dt,decodeVideoTextureEmissive:ct&&E.emissiveMap.isVideoTexture===!0&&Et.getTransfer(E.emissiveMap.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jt,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:at&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&E.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)M.push(T),M.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(w(M,E),b(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const M=m[E.type];let T;if(M){const A=Un[M];T=Yr.clone(A.uniforms)}else T=E.uniforms;return T}function O(E,M){let T;for(let A=0,L=u.length;A<L;A++){const W=u[A];if(W.cacheKey===M){T=W,++T.usedTimes;break}}return T===void 0&&(T=new zm(n,M,E,s),u.push(T)),T}function P(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:O,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:I}}function Gm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Wm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,m,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function o(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Wm),i.length>1&&i.sort(d||hc),r.length>1&&r.sort(d||hc)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Xm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new fc,n.set(i,[a])):r>=s.length?(a=new fc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ym(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ot};break;case"SpotLight":t={position:new G,direction:new G,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function qm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zm=0;function Km(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jm(n){const e=new Ym,t=qm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const r=new G,s=new Ut,a=new Ut;function o(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,w=0,b=0,y=0,O=0,P=0,C=0;l.sort(Km);for(let E=0,M=l.length;E<M;E++){const T=l[E],A=T.color,L=T.intensity,W=T.distance,V=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=A.r*L,h+=A.g*L,d+=A.b*L;else if(T.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(T.sh.coefficients[q],L);C++}else if(T.isDirectionalLight){const q=e.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const te=T.shadow,v=t.get(T);v.shadowIntensity=te.intensity,v.shadowBias=te.bias,v.shadowNormalBias=te.normalBias,v.shadowRadius=te.radius,v.shadowMapSize=te.mapSize,i.directionalShadow[f]=v,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=T.shadow.matrix,w++}i.directional[f]=q,f++}else if(T.isSpotLight){const q=e.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(A).multiplyScalar(L),q.distance=W,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,i.spot[_]=q;const te=T.shadow;if(T.map&&(i.spotLightMap[O]=T.map,O++,te.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[_]=te.matrix,T.castShadow){const v=t.get(T);v.shadowIntensity=te.intensity,v.shadowBias=te.bias,v.shadowNormalBias=te.normalBias,v.shadowRadius=te.radius,v.shadowMapSize=te.mapSize,i.spotShadow[_]=v,i.spotShadowMap[_]=V,y++}_++}else if(T.isRectAreaLight){const q=e.get(T);q.color.copy(A).multiplyScalar(L),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=q,g++}else if(T.isPointLight){const q=e.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),q.distance=T.distance,q.decay=T.decay,T.castShadow){const te=T.shadow,v=t.get(T);v.shadowIntensity=te.intensity,v.shadowBias=te.bias,v.shadowNormalBias=te.normalBias,v.shadowRadius=te.radius,v.shadowMapSize=te.mapSize,v.shadowCameraNear=te.camera.near,v.shadowCameraFar=te.camera.far,i.pointShadow[m]=v,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=T.shadow.matrix,b++}i.point[m]=q,m++}else if(T.isHemisphereLight){const q=e.get(T);q.skyColor.copy(T.color).multiplyScalar(L),q.groundColor.copy(T.groundColor).multiplyScalar(L),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==y||I.numSpotMaps!==O||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=y,I.numSpotMaps=O,I.numLightProbes=C,i.version=Zm++)}function c(l,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const b=l[p];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(b.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:i}}function dc(n){const e=new jm(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function $m(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new dc(n),e.set(r,[o])):s>=a.length?(o=new dc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Jm extends ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qm extends ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
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
}`;function ng(n,e,t){let i=new al;const r=new Re,s=new Re,a=new It,o=new Jm({depthPacking:Lh}),c=new Qm,l={},u=t.maxTextureSize,h={[Mi]:nn,[nn]:Mi,[jt]:jt},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:eg,fragmentShader:tg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let p=this.type;this.render=function(P,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),A=n.state;A.setBlending(dn),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const L=p!==Xn&&this.type===Xn,W=p===Xn&&this.type!==Xn;for(let V=0,q=P.length;V<q;V++){const te=P[V],v=te.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;r.copy(v.mapSize);const D=v.getFrameExtents();if(r.multiply(D),s.copy(v.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/D.x),r.x=s.x*D.x,v.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/D.y),r.y=s.y*D.y,v.mapSize.y=s.y)),v.map===null||L===!0||W===!0){const B=this.type!==Xn?{minFilter:fn,magFilter:fn}:{};v.map!==null&&v.map.dispose(),v.map=new ei(r.x,r.y,B),v.map.texture.name=te.name+".shadowMap",v.camera.updateProjectionMatrix()}n.setRenderTarget(v.map),n.clear();const F=v.getViewportCount();for(let B=0;B<F;B++){const $=v.getViewport(B);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),A.viewport(a),v.updateMatrices(te,B),i=v.getFrustum(),y(C,I,v.camera,te,this.type)}v.isPointLightShadow!==!0&&this.type===Xn&&w(v,I),v.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,M,T)};function w(P,C){const I=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ei(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,I,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,I,f,_,null)}function b(P,C,I,E){let M=null;const T=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)M=T;else if(M=I.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const A=M.uuid,L=C.uuid;let W=l[A];W===void 0&&(W={},l[A]=W);let V=W[L];V===void 0&&(V=M.clone(),W[L]=V,C.addEventListener("dispose",O)),M=V}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Xn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const A=n.properties.get(M);A.light=I}return M}function y(P,C,I,E,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Xn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const L=e.update(P),W=P.material;if(Array.isArray(W)){const V=L.groups;for(let q=0,te=V.length;q<te;q++){const v=V[q],D=W[v.materialIndex];if(D&&D.visible){const F=b(P,D,E,M);P.onBeforeShadow(n,P,C,I,L,F,v),n.renderBufferDirect(I,null,L,F,P,v),P.onAfterShadow(n,P,C,I,L,F,v)}}}else if(W.visible){const V=b(P,W,E,M);P.onBeforeShadow(n,P,C,I,L,V,null),n.renderBufferDirect(I,null,L,V,P,null),P.onAfterShadow(n,P,C,I,L,V,null)}}const A=P.children;for(let L=0,W=A.length;L<W;L++)y(A[L],C,I,E,M)}function O(P){P.target.removeEventListener("dispose",O);for(const I in l){const E=l[I],M=P.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const ig={[ro]:so,[ao]:co,[oo]:uo,[wr]:lo,[so]:ro,[co]:ao,[uo]:oo,[lo]:wr};function rg(n,e){function t(){let k=!1;const me=new It;let j=null;const ee=new It(0,0,0,0);return{setMask:function(Ae){j!==Ae&&!k&&(n.colorMask(Ae,Ae,Ae,Ae),j=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,Ce,at,Nt,zt){zt===!0&&(Ae*=Nt,Ce*=Nt,at*=Nt),me.set(Ae,Ce,at,Nt),ee.equals(me)===!1&&(n.clearColor(Ae,Ce,at,Nt),ee.copy(me))},reset:function(){k=!1,j=null,ee.set(-1,0,0,0)}}}function i(){let k=!1,me=!1,j=null,ee=null,Ae=null;return{setReversed:function(Ce){if(me!==Ce){const at=e.get("EXT_clip_control");me?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Ae;Ae=null,this.setClear(Nt)}me=Ce},getReversed:function(){return me},setTest:function(Ce){Ce?ae(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Ce){j!==Ce&&!k&&(n.depthMask(Ce),j=Ce)},setFunc:function(Ce){if(me&&(Ce=ig[Ce]),ee!==Ce){switch(Ce){case ro:n.depthFunc(n.NEVER);break;case so:n.depthFunc(n.ALWAYS);break;case ao:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case oo:n.depthFunc(n.EQUAL);break;case lo:n.depthFunc(n.GEQUAL);break;case co:n.depthFunc(n.GREATER);break;case uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=Ce}},setLocked:function(Ce){k=Ce},setClear:function(Ce){Ae!==Ce&&(me&&(Ce=1-Ce),n.clearDepth(Ce),Ae=Ce)},reset:function(){k=!1,j=null,ee=null,Ae=null,me=!1}}}function r(){let k=!1,me=null,j=null,ee=null,Ae=null,Ce=null,at=null,Nt=null,zt=null;return{setTest:function(yt){k||(yt?ae(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(yt){me!==yt&&!k&&(n.stencilMask(yt),me=yt)},setFunc:function(yt,rn,gn){(j!==yt||ee!==rn||Ae!==gn)&&(n.stencilFunc(yt,rn,gn),j=yt,ee=rn,Ae=gn)},setOp:function(yt,rn,gn){(Ce!==yt||at!==rn||Nt!==gn)&&(n.stencilOp(yt,rn,gn),Ce=yt,at=rn,Nt=gn)},setLocked:function(yt){k=yt},setClear:function(yt){zt!==yt&&(n.clearStencil(yt),zt=yt)},reset:function(){k=!1,me=null,j=null,ee=null,Ae=null,Ce=null,at=null,Nt=null,zt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,b=null,y=null,O=null,P=null,C=new ot(0,0,0),I=0,E=!1,M=null,T=null,A=null,L=null,W=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const v=n.getParameter(n.VERSION);v.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(v)[1]),q=te>=1):v.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),q=te>=2);let D=null,F={};const B=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),Me=new It().fromArray(B),K=new It().fromArray($);function ue(k,me,j,ee){const Ae=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(k,Ce),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<j;at++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(me+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ce}const ne={};ne[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(wr),Qe(!1),Fe(xl),ae(n.CULL_FACE),z(dn);function ae(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Se(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function De(k,me){return h[k]!==me?(n.bindFramebuffer(k,me),h[k]=me,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=me),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ge(k,me){let j=f,ee=!1;if(k){j=d.get(me),j===void 0&&(j=[],d.set(me,j));const Ae=k.textures;if(j.length!==Ae.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,at=Ae.length;Ce<at;Ce++)j[Ce]=n.COLOR_ATTACHMENT0+Ce;j.length=Ae.length,ee=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ee=!0);ee&&n.drawBuffers(j)}function mt(k){return m!==k?(n.useProgram(k),m=k,!0):!1}const $e={[Yn]:n.FUNC_ADD,[ch]:n.FUNC_SUBTRACT,[uh]:n.FUNC_REVERSE_SUBTRACT};$e[hh]=n.MIN,$e[fh]=n.MAX;const et={[to]:n.ZERO,[dh]:n.ONE,[ph]:n.SRC_COLOR,[no]:n.SRC_ALPHA,[vh]:n.SRC_ALPHA_SATURATE,[su]:n.DST_COLOR,[ru]:n.DST_ALPHA,[mh]:n.ONE_MINUS_SRC_COLOR,[io]:n.ONE_MINUS_SRC_ALPHA,[_h]:n.ONE_MINUS_DST_COLOR,[gh]:n.ONE_MINUS_DST_ALPHA,[xh]:n.CONSTANT_COLOR,[Mh]:n.ONE_MINUS_CONSTANT_COLOR,[yh]:n.CONSTANT_ALPHA,[Sh]:n.ONE_MINUS_CONSTANT_ALPHA};function z(k,me,j,ee,Ae,Ce,at,Nt,zt,yt){if(k===dn){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(ae(n.BLEND),_=!0),k!==iu){if(k!==g||yt!==E){if((p!==Yn||y!==Yn)&&(n.blendEquation(n.FUNC_ADD),p=Yn,y=Yn),yt)switch(k){case Mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFunc(n.ONE,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,b=null,O=null,P=null,C.set(0,0,0),I=0,g=k,E=yt}return}Ae=Ae||me,Ce=Ce||j,at=at||ee,(me!==p||Ae!==y)&&(n.blendEquationSeparate($e[me],$e[Ae]),p=me,y=Ae),(j!==w||ee!==b||Ce!==O||at!==P)&&(n.blendFuncSeparate(et[j],et[ee],et[Ce],et[at]),w=j,b=ee,O=Ce,P=at),(Nt.equals(C)===!1||zt!==I)&&(n.blendColor(Nt.r,Nt.g,Nt.b,zt),C.copy(Nt),I=zt),g=k,E=!1}function he(k,me){k.side===jt?Se(n.CULL_FACE):ae(n.CULL_FACE);let j=k.side===nn;me&&(j=!j),Qe(j),k.blending===Mr&&k.transparent===!1?z(dn):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ee=k.stencilWrite;o.setTest(ee),ee&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ct(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function Fe(k){k!==oh?(ae(n.CULL_FACE),k!==T&&(k===xl?n.cullFace(n.BACK):k===lh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),T=k}function ke(k){k!==A&&(q&&n.lineWidth(k),A=k)}function ct(k,me,j){k?(ae(n.POLYGON_OFFSET_FILL),(L!==me||W!==j)&&(n.polygonOffset(me,j),L=me,W=j)):Se(n.POLYGON_OFFSET_FILL)}function We(k){k?ae(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function R(k){k===void 0&&(k=n.TEXTURE0+V-1),D!==k&&(n.activeTexture(k),D=k)}function x(k,me,j){j===void 0&&(D===null?j=n.TEXTURE0+V-1:j=D);let ee=F[j];ee===void 0&&(ee={type:void 0,texture:void 0},F[j]=ee),(ee.type!==k||ee.texture!==me)&&(D!==j&&(n.activeTexture(j),D=j),n.bindTexture(k,me||ne[k]),ee.type=k,ee.texture=me)}function X(){const k=F[D];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(k){Me.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function _e(k){K.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function Ue(k,me){let j=l.get(me);j===void 0&&(j=new WeakMap,l.set(me,j));let ee=j.get(k);ee===void 0&&(ee=n.getUniformBlockIndex(me,k.name),j.set(k,ee))}function Ie(k,me){const ee=l.get(me).get(k);c.get(me)!==ee&&(n.uniformBlockBinding(me,ee,k.__bindingPointIndex),c.set(me,ee))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,F={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,b=null,y=null,O=null,P=null,C=new ot(0,0,0),I=0,E=!1,M=null,T=null,A=null,L=null,W=null,Me.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Se,bindFramebuffer:De,drawBuffers:Ge,useProgram:mt,setBlending:z,setMaterial:he,setFlipSided:Qe,setCullFace:Fe,setLineWidth:ke,setPolygonOffset:ct,setScissorTest:We,activeTexture:R,bindTexture:x,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:le,texImage2D:be,texImage3D:Ze,updateUBOMapping:Ue,uniformBlockBinding:Ie,texStorage2D:it,texStorage3D:de,texSubImage2D:Q,texSubImage3D:Ve,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ee,scissor:Ke,viewport:_e,reset:rt}}function pc(n,e,t,i){const r=sg(i);switch(t){case fu:return n*e;case pu:return n*e;case mu:return n*e*2;case Qo:return n*e/r.components*r.byteLength;case el:return n*e/r.components*r.byteLength;case gu:return n*e*2/r.components*r.byteLength;case tl:return n*e*2/r.components*r.byteLength;case du:return n*e*3/r.components*r.byteLength;case In:return n*e*4/r.components*r.byteLength;case nl:return n*e*4/r.components*r.byteLength;case Hs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(n,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(n,8)*Math.max(e,8)/2;case xo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ys:case Fo:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _u:case zo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bo:case ko:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sg(n){switch(n){case Qn:case cu:return{byteLength:1,components:1};case Qr:case uu:case Vi:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case ki:case jo:case Nn:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ag(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function m(R,x){return f?new OffscreenCanvas(R,x):Js("canvas")}function _(R,x,X){let J=1;const le=We(R);if((le.width>X||le.height>X)&&(J=X/Math.max(le.width,le.height)),J<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const Q=Math.floor(J*le.width),Ve=Math.floor(J*le.height);h===void 0&&(h=m(Q,Ve));const ve=x?m(Q,Ve):h;return ve.width=Q,ve.height=Ve,ve.getContext("2d").drawImage(R,0,0,Q,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+Ve+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,X,J,le=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=x;if(x===n.RED&&(X===n.FLOAT&&(Q=n.R32F),X===n.HALF_FLOAT&&(Q=n.R16F),X===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.R8UI),X===n.UNSIGNED_SHORT&&(Q=n.R16UI),X===n.UNSIGNED_INT&&(Q=n.R32UI),X===n.BYTE&&(Q=n.R8I),X===n.SHORT&&(Q=n.R16I),X===n.INT&&(Q=n.R32I)),x===n.RG&&(X===n.FLOAT&&(Q=n.RG32F),X===n.HALF_FLOAT&&(Q=n.RG16F),X===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RG8UI),X===n.UNSIGNED_SHORT&&(Q=n.RG16UI),X===n.UNSIGNED_INT&&(Q=n.RG32UI),X===n.BYTE&&(Q=n.RG8I),X===n.SHORT&&(Q=n.RG16I),X===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),X===n.UNSIGNED_INT&&(Q=n.RGB32UI),X===n.BYTE&&(Q=n.RGB8I),X===n.SHORT&&(Q=n.RGB16I),X===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),X===n.UNSIGNED_INT&&(Q=n.RGBA32UI),X===n.BYTE&&(Q=n.RGBA8I),X===n.SHORT&&(Q=n.RGBA16I),X===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),x===n.RGBA){const Ve=le?oa:Et.getTransfer(J);X===n.FLOAT&&(Q=n.RGBA32F),X===n.HALF_FLOAT&&(Q=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Q=Ve===Dt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(R,x){let X;return R?x===null||x===ki||x===Hi?X=n.DEPTH24_STENCIL8:x===Nn?X=n.DEPTH32F_STENCIL8:x===Qr&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===Hi?X=n.DEPTH_COMPONENT24:x===Nn?X=n.DEPTH_COMPONENT32F:x===Qr&&(X=n.DEPTH_COMPONENT16),X}function O(R,x){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function P(R){const x=R.target;x.removeEventListener("dispose",P),I(x),x.isVideoTexture&&u.delete(x)}function C(R){const x=R.target;x.removeEventListener("dispose",C),M(x)}function I(R){const x=i.get(R);if(x.__webglInit===void 0)return;const X=R.source,J=d.get(X);if(J){const le=J[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&E(R),Object.keys(J).length===0&&d.delete(X)}i.remove(R)}function E(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const X=R.source,J=d.get(X);delete J[x.__cacheKey],a.memory.textures--}function M(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let le=0;le<x.__webglFramebuffer[J].length;le++)n.deleteFramebuffer(x.__webglFramebuffer[J][le]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const X=R.textures;for(let J=0,le=X.length;J<le;J++){const Q=i.get(X[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(X[J])}i.remove(R)}let T=0;function A(){T=0}function L(){const R=T;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),T+=1,R}function W(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function V(R,x){const X=i.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,R,x);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+x)}function q(R,x){const X=i.get(R);if(R.version>0&&X.__version!==R.version){K(X,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+x)}function te(R,x){const X=i.get(R);if(R.version>0&&X.__version!==R.version){K(X,R,x);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+x)}function v(R,x){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ue(X,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+x)}const D={[Fn]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},F={[fn]:n.NEAREST,[Dh]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[fa]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},B={[Nh]:n.NEVER,[Vh]:n.ALWAYS,[Fh]:n.LESS,[vu]:n.LEQUAL,[Oh]:n.EQUAL,[kh]:n.GEQUAL,[zh]:n.GREATER,[Bh]:n.NOTEQUAL};function $(R,x){if(x.type===Nn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===fa||x.magFilter===ss||x.magFilter===Dn||x.minFilter===pn||x.minFilter===fa||x.minFilter===ss||x.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,D[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,D[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,D[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,F[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,F[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,B[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==ss&&x.minFilter!==Dn||x.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Me(R,x){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",P));const J=x.source;let le=d.get(J);le===void 0&&(le={},d.set(J,le));const Q=W(x);if(Q!==R.__cacheKey){le[Q]===void 0&&(le[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[Q].usedTimes++;const Ve=le[R.__cacheKey];Ve!==void 0&&(le[R.__cacheKey].usedTimes--,Ve.usedTimes===0&&E(x)),R.__cacheKey=Q,R.__webglTexture=le[Q].texture}return X}function K(R,x,X){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);const le=Me(R,x),Q=x.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+X);const Ve=i.get(Q);if(Q.version!==Ve.__version||le===!0){t.activeTexture(n.TEXTURE0+X);const ve=Et.getPrimaries(Et.workingColorSpace),Ee=x.colorSpace===qn?null:Et.getPrimaries(x.colorSpace),it=x.colorSpace===qn||ve===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let de=_(x.image,!1,r.maxTextureSize);de=ct(x,de);const be=s.convert(x.format,x.colorSpace),Ze=s.convert(x.type);let Ke=b(x.internalFormat,be,Ze,x.colorSpace,x.isVideoTexture);$(J,x);let _e;const Ue=x.mipmaps,Ie=x.isVideoTexture!==!0,rt=Ve.__version===void 0||le===!0,k=Q.dataReady,me=O(x,de);if(x.isDepthTexture)Ke=y(x.format===Gi,x.type),rt&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Ke,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ke,de.width,de.height,0,be,Ze,null));else if(x.isDataTexture)if(Ue.length>0){Ie&&rt&&t.texStorage2D(n.TEXTURE_2D,me,Ke,Ue[0].width,Ue[0].height);for(let j=0,ee=Ue.length;j<ee;j++)_e=Ue[j],Ie?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,be,Ze,_e.data):t.texImage2D(n.TEXTURE_2D,j,Ke,_e.width,_e.height,0,be,Ze,_e.data);x.generateMipmaps=!1}else Ie?(rt&&t.texStorage2D(n.TEXTURE_2D,me,Ke,de.width,de.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,be,Ze,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ke,de.width,de.height,0,be,Ze,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ke,Ue[0].width,Ue[0].height,de.depth);for(let j=0,ee=Ue.length;j<ee;j++)if(_e=Ue[j],x.format!==In)if(be!==null)if(Ie){if(k)if(x.layerUpdates.size>0){const Ae=pc(_e.width,_e.height,x.format,x.type);for(const Ce of x.layerUpdates){const at=_e.data.subarray(Ce*Ae/_e.data.BYTES_PER_ELEMENT,(Ce+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Ce,_e.width,_e.height,1,be,at)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,de.depth,be,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ke,_e.width,_e.height,de.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,de.depth,be,Ze,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ke,_e.width,_e.height,de.depth,0,be,Ze,_e.data)}else{Ie&&rt&&t.texStorage2D(n.TEXTURE_2D,me,Ke,Ue[0].width,Ue[0].height);for(let j=0,ee=Ue.length;j<ee;j++)_e=Ue[j],x.format!==In?be!==null?Ie?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ke,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,be,Ze,_e.data):t.texImage2D(n.TEXTURE_2D,j,Ke,_e.width,_e.height,0,be,Ze,_e.data)}else if(x.isDataArrayTexture)if(Ie){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ke,de.width,de.height,de.depth),k)if(x.layerUpdates.size>0){const j=pc(de.width,de.height,x.format,x.type);for(const ee of x.layerUpdates){const Ae=de.data.subarray(ee*j/de.data.BYTES_PER_ELEMENT,(ee+1)*j/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,de.width,de.height,1,be,Ze,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,Ze,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,de.width,de.height,de.depth,0,be,Ze,de.data);else if(x.isData3DTexture)Ie?(rt&&t.texStorage3D(n.TEXTURE_3D,me,Ke,de.width,de.height,de.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,Ze,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,de.width,de.height,de.depth,0,be,Ze,de.data);else if(x.isFramebufferTexture){if(rt)if(Ie)t.texStorage2D(n.TEXTURE_2D,me,Ke,de.width,de.height);else{let j=de.width,ee=de.height;for(let Ae=0;Ae<me;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ke,j,ee,0,be,Ze,null),j>>=1,ee>>=1}}else if(Ue.length>0){if(Ie&&rt){const j=We(Ue[0]);t.texStorage2D(n.TEXTURE_2D,me,Ke,j.width,j.height)}for(let j=0,ee=Ue.length;j<ee;j++)_e=Ue[j],Ie?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,be,Ze,_e):t.texImage2D(n.TEXTURE_2D,j,Ke,be,Ze,_e);x.generateMipmaps=!1}else if(Ie){if(rt){const j=We(de);t.texStorage2D(n.TEXTURE_2D,me,Ke,j.width,j.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ze,de)}else t.texImage2D(n.TEXTURE_2D,0,Ke,be,Ze,de);g(x)&&p(J),Ve.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ue(R,x,X){if(x.image.length!==6)return;const J=Me(R,x),le=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);const Q=i.get(le);if(le.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+X);const Ve=Et.getPrimaries(Et.workingColorSpace),ve=x.colorSpace===qn?null:Et.getPrimaries(x.colorSpace),Ee=x.colorSpace===qn||Ve===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const it=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!it&&!de?be[ee]=_(x.image[ee],!0,r.maxCubemapSize):be[ee]=de?x.image[ee].image:x.image[ee],be[ee]=ct(x,be[ee]);const Ze=be[0],Ke=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),Ue=b(x.internalFormat,Ke,_e,x.colorSpace),Ie=x.isVideoTexture!==!0,rt=Q.__version===void 0||J===!0,k=le.dataReady;let me=O(x,Ze);$(n.TEXTURE_CUBE_MAP,x);let j;if(it){Ie&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ue,Ze.width,Ze.height);for(let ee=0;ee<6;ee++){j=be[ee].mipmaps;for(let Ae=0;Ae<j.length;Ae++){const Ce=j[Ae];x.format!==In?Ke!==null?Ie?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Ce.width,Ce.height,Ke,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ue,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Ce.width,Ce.height,Ke,_e,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ue,Ce.width,Ce.height,0,Ke,_e,Ce.data)}}}else{if(j=x.mipmaps,Ie&&rt){j.length>0&&me++;const ee=We(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ue,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(de){Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,Ke,_e,be[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,be[ee].width,be[ee].height,0,Ke,_e,be[ee].data);for(let Ae=0;Ae<j.length;Ae++){const at=j[Ae].image[ee].image;Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,at.width,at.height,Ke,_e,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ue,at.width,at.height,0,Ke,_e,at.data)}}else{Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ke,_e,be[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,Ke,_e,be[ee]);for(let Ae=0;Ae<j.length;Ae++){const Ce=j[Ae];Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Ke,_e,Ce.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ue,Ke,_e,Ce.image[ee])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),Q.__version=le.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ne(R,x,X,J,le,Q){const Ve=s.convert(X.format,X.colorSpace),ve=s.convert(X.type),Ee=b(X.internalFormat,Ve,ve,X.colorSpace),it=i.get(x),de=i.get(X);if(de.__renderTarget=x,!it.__hasExternalTextures){const be=Math.max(1,x.width>>Q),Ze=Math.max(1,x.height>>Q);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,Q,Ee,be,Ze,x.depth,0,Ve,ve,null):t.texImage2D(le,Q,Ee,be,Ze,0,Ve,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,le,de.__webglTexture,0,Qe(x)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,le,de.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(R,x,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const J=x.depthTexture,le=J&&J.isDepthTexture?J.type:null,Q=y(x.stencilBuffer,le),Ve=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=Qe(x);Fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,Q,x.width,x.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,R)}else{const J=x.textures;for(let le=0;le<J.length;le++){const Q=J[le],Ve=s.convert(Q.format,Q.colorSpace),ve=s.convert(Q.type),Ee=b(Q.internalFormat,Ve,ve,Q.colorSpace),it=Qe(x);X&&Fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Ee,x.width,x.height):Fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,Ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const le=J.__webglTexture,Q=Qe(x);if(x.depthTexture.format===yr)Fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(x.depthTexture.format===Gi)Fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function De(R){const x=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",le)};J.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=J}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Se(x.__webglFramebuffer,R)}else if(X){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[J],R,!1);else{const le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(R,x,X){const J=i.get(R);x!==void 0&&ne(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&De(R)}function mt(R){const x=R.texture,X=i.get(R),J=i.get(x);R.addEventListener("dispose",C);const le=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ve=le.length>1;if(Ve||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,a.memory.textures++),Q){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)X.__webglFramebuffer[ve][Ee]=n.createFramebuffer()}else X.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)X.__webglFramebuffer[ve]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let ve=0,Ee=le.length;ve<Ee;ve++){const it=i.get(le[ve]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Fe(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Ee=le[ve];X.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const it=s.convert(Ee.format,Ee.colorSpace),de=s.convert(Ee.type),be=b(Ee.internalFormat,it,de,Ee.colorSpace,R.isXRRenderTarget===!0),Ze=Qe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,be,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),$(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)ne(X.__webglFramebuffer[ve][Ee],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else ne(X.__webglFramebuffer[ve],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let ve=0,Ee=le.length;ve<Ee;ve++){const it=le[ve],de=i.get(it);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),$(n.TEXTURE_2D,it),ne(X.__webglFramebuffer,R,it,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),g(it)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,J.__webglTexture),$(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)ne(X.__webglFramebuffer[Ee],R,x,n.COLOR_ATTACHMENT0,ve,Ee);else ne(X.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,ve,0);g(x)&&p(ve),t.unbindTexture()}R.depthBuffer&&De(R)}function $e(R){const x=R.textures;for(let X=0,J=x.length;X<J;X++){const le=x[X];if(g(le)){const Q=w(R),Ve=i.get(le).__webglTexture;t.bindTexture(Q,Ve),p(Q),t.unbindTexture()}}}const et=[],z=[];function he(R){if(R.samples>0){if(Fe(R)===!1){const x=R.textures,X=R.width,J=R.height;let le=n.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(R),ve=x.length>1;if(ve)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ee]);const it=i.get(x[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,X,J,0,0,X,J,le,n.NEAREST),c===!0&&(et.length=0,z.length=0,et.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push(Q),z.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ee]);const it=i.get(x[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Qe(R){return Math.min(r.maxSamples,R.samples)}function Fe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ke(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function ct(R,x){const X=R.colorSpace,J=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==yi&&X!==qn&&(Et.getTransfer(X)===Dt?(J!==In||le!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function We(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=A,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=v,this.rebindTextures=Ge,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Fe}function og(n,e){function t(i,r=qn){let s;const a=Et.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===$o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cu)return n.BYTE;if(i===uu)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===jo)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Vi)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===du)return n.RGB;if(i===In)return n.RGBA;if(i===pu)return n.LUMINANCE;if(i===mu)return n.LUMINANCE_ALPHA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Gi)return n.DEPTH_STENCIL;if(i===Qo)return n.RED;if(i===el)return n.RED_INTEGER;if(i===gu)return n.RG;if(i===tl)return n.RG_INTEGER;if(i===nl)return n.RGBA_INTEGER;if(i===Hs||i===Gs||i===Ws||i===Xs)if(a===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===_o||i===vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xo||i===Mo||i===yo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xo||i===Mo)return a===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yo)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===So||i===Eo||i===wo||i===bo||i===To||i===Ao||i===Ro||i===Co||i===Po||i===Do||i===Io||i===Lo||i===Uo||i===No)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===So)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wo)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bo)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===To)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ao)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ro)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Co)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Po)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Do)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Io)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lo)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uo)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===No)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ys||i===Fo||i===Oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ys)return a===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_u||i===zo||i===Bo||i===ko)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ys)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class lg extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _t extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cg={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:ug,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new Ct(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dg extends Pr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=new fg,g=t.getContextAttributes();let p=null,w=null;const b=[],y=[],O=new Re;let P=null;const C=new Mn;C.viewport=new It;const I=new Mn;I.viewport=new It;const E=[C,I],M=new lg;let T=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=b[K];return ue===void 0&&(ue=new Ba,b[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=b[K];return ue===void 0&&(ue=new Ba,b[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=b[K];return ue===void 0&&(ue=new Ba,b[K]=ue),ue.getHandSpace()};function L(K){const ue=y.indexOf(K.inputSource);if(ue===-1)return;const ne=b[ue];ne!==void 0&&(ne.update(K.inputSource,K.frame,l||a),ne.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",V);for(let K=0;K<b.length;K++){const ue=y[K];ue!==null&&(y[K]=null,b[K].disconnect(ue))}T=null,A=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",W),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ei(f.framebufferWidth,f.framebufferHeight,{format:In,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,ne=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=g.stencil?Gi:yr,ne=g.stencil?Hi:ki);const Se={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new ei(d.textureWidth,d.textureHeight,{format:In,type:Qn,depthTexture:new cl(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(K){for(let ue=0;ue<K.removed.length;ue++){const ne=K.removed[ue],ae=y.indexOf(ne);ae>=0&&(y[ae]=null,b[ae].disconnect(ne))}for(let ue=0;ue<K.added.length;ue++){const ne=K.added[ue];let ae=y.indexOf(ne);if(ae===-1){for(let De=0;De<b.length;De++)if(De>=y.length){y.push(ne),ae=De;break}else if(y[De]===null){y[De]=ne,ae=De;break}if(ae===-1)break}const Se=b[ae];Se&&Se.connect(ne)}}const q=new G,te=new G;function v(K,ue,ne){q.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(ne.matrixWorld);const ae=q.distanceTo(te),Se=ue.projectionMatrix.elements,De=ne.projectionMatrix.elements,Ge=Se[14]/(Se[10]-1),mt=Se[14]/(Se[10]+1),$e=(Se[9]+1)/Se[5],et=(Se[9]-1)/Se[5],z=(Se[8]-1)/Se[0],he=(De[8]+1)/De[0],Qe=Ge*z,Fe=Ge*he,ke=ae/(-z+he),ct=ke*-z;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Ge+ke,R=mt+ke,x=Qe-ct,X=Fe+(ae-ct),J=$e*mt/R*We,le=et*mt/R*We;K.projectionMatrix.makePerspective(x,X,J,le,We,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function D(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ue=K.near,ne=K.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),M.near=I.near=C.near=ue,M.far=I.far=C.far=ne,(T!==M.near||A!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,A=M.far),C.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,M.layers.mask=C.layers.mask|I.layers.mask;const ae=K.parent,Se=M.cameras;D(M,ae);for(let De=0;De<Se.length;De++)D(Se[De],ae);Se.length===2?v(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),F(K,M,ae)};function F(K,ue,ne){ne===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=es*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let B=null;function $(K,ue){if(u=ue.getViewerPose(l||a),m=ue,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ae=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let De=0;De<ne.length;De++){const Ge=ne[De];let mt=null;if(f!==null)mt=f.getViewport(Ge);else{const et=h.getViewSubImage(d,Ge);mt=et.viewport,De===0&&(e.setRenderTargetTextures(w,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(w))}let $e=E[De];$e===void 0&&($e=new Mn,$e.layers.enable(De),$e.viewport=new It,E[De]=$e),$e.matrix.fromArray(Ge.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ge.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(mt.x,mt.y,mt.width,mt.height),De===0&&(M.matrix.copy($e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push($e)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const De=h.getDepthInformation(ne[0]);De&&De.isValid&&De.texture&&_.init(e,De,r.renderState)}}for(let ne=0;ne<b.length;ne++){const ae=y[ne],Se=b[ne];ae!==null&&Se!==void 0&&Se.update(ae,ue,l||a)}B&&B(K,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),m=null}const Me=new Cu;Me.setAnimationLoop($),this.setAnimationLoop=function(K){B=K},this.dispose=function(){}}}const Ci=new On,pg=new Ut;function mg(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Tu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,w,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,y=w.envMapRotation;b&&(g.envMap.value=b,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Ci)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const y=b.program;i.uniformBlockBinding(w,y)}function l(w,b){let y=r[w.id];y===void 0&&(m(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",g));const O=b.program;i.updateUBOMapping(w,O);const P=e.render.frame;s[w.id]!==P&&(d(w),s[w.id]=P)}function u(w){const b=h();w.__bindingPointIndex=b;const y=n.createBuffer(),O=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=r[w.id],y=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,C=y.length;P<C;P++){const I=Array.isArray(y[P])?y[P]:[y[P]];for(let E=0,M=I.length;E<M;E++){const T=I[E];if(f(T,P,E,O)===!0){const A=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let V=0;V<L.length;V++){const q=L[V],te=_(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,A+W,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,b,y,O){const P=w.value,C=b+"_"+y;if(O[C]===void 0)return typeof P=="number"||typeof P=="boolean"?O[C]=P:O[C]=P.clone(),!0;{const I=O[C];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return O[C]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function m(w){const b=w.uniforms;let y=0;const O=16;for(let C=0,I=b.length;C<I;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,T=E.length;M<T;M++){const A=E[M],L=Array.isArray(A.value)?A.value:[A.value];for(let W=0,V=L.length;W<V;W++){const q=L[W],te=_(q),v=y%O,D=v%te.boundary,F=v+D;y+=D,F!==0&&O-F<te.storage&&(y+=O-F),A.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,y+=te.storage}}}const P=y%O;return P>0&&(y+=O-P),w.__size=y,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function g(w){const b=w.target;b.removeEventListener("dispose",g);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class _g{constructor(e={}){const{canvas:t=af(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=vi,this.toneMappingExposure=1;const y=this;let O=!1,P=0,C=0,I=null,E=-1,M=null;const T=new It,A=new It;let L=null;const W=new ot(0);let V=0,q=t.width,te=t.height,v=1,D=null,F=null;const B=new It(0,0,q,te),$=new It(0,0,q,te);let Me=!1;const K=new al;let ue=!1,ne=!1;const ae=new Ut,Se=new Ut,De=new G,Ge=new It,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function et(){return I===null?v:1}let z=i;function he(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const U="webgl2";if(z=he(U,S),z===null)throw he(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Qe,Fe,ke,ct,We,R,x,X,J,le,Q,Ve,ve,Ee,it,de,be,Ze,Ke,_e,Ue,Ie,rt,k;function me(){Qe=new S0(z),Qe.init(),Ie=new og(z,Qe),Fe=new g0(z,Qe,e,Ie),ke=new rg(z,Qe),Fe.reverseDepthBuffer&&d&&ke.buffers.depth.setReversed(!0),ct=new b0(z),We=new Gm,R=new ag(z,Qe,ke,We,Fe,Ie,ct),x=new v0(y),X=new y0(y),J=new If(z),rt=new p0(z,J),le=new E0(z,J,ct,rt),Q=new A0(z,le,J,ct),Ke=new T0(z,Fe,R),de=new _0(We),Ve=new Hm(y,x,X,Qe,Fe,rt,de),ve=new mg(y,We),Ee=new Xm,it=new $m(Qe),Ze=new d0(y,x,X,ke,Q,f,c),be=new ng(y,Q,Fe),k=new gg(z,ct,Fe,ke),_e=new m0(z,Qe,ct),Ue=new w0(z,Qe,ct),ct.programs=Ve.programs,y.capabilities=Fe,y.extensions=Qe,y.properties=We,y.renderLists=Ee,y.shadowMap=be,y.state=ke,y.info=ct}me();const j=new dg(y,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=Qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(S){S!==void 0&&(v=S,this.setSize(q,te,!1))},this.getSize=function(S){return S.set(q,te)},this.setSize=function(S,U,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,te=U,t.width=Math.floor(S*v),t.height=Math.floor(U*v),Y===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(q*v,te*v).floor()},this.setDrawingBufferSize=function(S,U,Y){q=S,te=U,v=Y,t.width=Math.floor(S*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(B)},this.setViewport=function(S,U,Y,Z){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,U,Y,Z),ke.viewport(T.copy(B).multiplyScalar(v).round())},this.getScissor=function(S){return S.copy($)},this.setScissor=function(S,U,Y,Z){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,U,Y,Z),ke.scissor(A.copy($).multiplyScalar(v).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(S){ke.setScissorTest(Me=S)},this.setOpaqueSort=function(S){D=S},this.setTransparentSort=function(S){F=S},this.getClearColor=function(S){return S.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(S=!0,U=!0,Y=!0){let Z=0;if(S){let H=!1;if(I!==null){const fe=I.texture.format;H=fe===nl||fe===tl||fe===el}if(H){const fe=I.texture.type,we=fe===Qn||fe===ki||fe===Qr||fe===Hi||fe===$o||fe===Jo,Oe=Ze.getClearColor(),Ne=Ze.getClearAlpha(),Le=Oe.r,nt=Oe.g,ze=Oe.b;we?(m[0]=Le,m[1]=nt,m[2]=ze,m[3]=Ne,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=Le,_[1]=nt,_[2]=ze,_[3]=Ne,z.clearBufferiv(z.COLOR,0,_))}else Z|=z.COLOR_BUFFER_BIT}U&&(Z|=z.DEPTH_BUFFER_BIT),Y&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ee.dispose(),it.dispose(),We.dispose(),x.dispose(),X.dispose(),Q.dispose(),rt.dispose(),k.dispose(),Ve.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ei),j.removeEventListener("sessionend",ii),qt.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const S=ct.autoReset,U=be.enabled,Y=be.autoUpdate,Z=be.needsUpdate,H=be.type;me(),ct.autoReset=S,be.enabled=U,be.autoUpdate=Y,be.needsUpdate=Z,be.type=H}function Ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){const U=S.target;U.removeEventListener("dispose",at),Nt(U)}function Nt(S){zt(S),We.remove(S)}function zt(S){const U=We.get(S).programs;U!==void 0&&(U.forEach(function(Y){Ve.releaseProgram(Y)}),S.isShaderMaterial&&Ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,Y,Z,H,fe){U===null&&(U=mt);const we=H.isMesh&&H.matrixWorld.determinant()<0,Oe=ye(S,U,Y,Z,H);ke.setMaterial(Z,we);let Ne=Y.index,Le=1;if(Z.wireframe===!0){if(Ne=le.getWireframeAttribute(Y),Ne===void 0)return;Le=2}const nt=Y.drawRange,ze=Y.attributes.position;let je=nt.start*Le,vt=(nt.start+nt.count)*Le;fe!==null&&(je=Math.max(je,fe.start*Le),vt=Math.min(vt,(fe.start+fe.count)*Le)),Ne!==null?(je=Math.max(je,0),vt=Math.min(vt,Ne.count)):ze!=null&&(je=Math.max(je,0),vt=Math.min(vt,ze.count));const Je=vt-je;if(Je<0||Je===1/0)return;rt.setup(H,Z,Oe,Y,Ne);let At,ut=_e;if(Ne!==null&&(At=J.get(Ne),ut=Ue,ut.setIndex(At)),H.isMesh)Z.wireframe===!0?(ke.setLineWidth(Z.wireframeLinewidth*et()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(H.isLine){let Te=Z.linewidth;Te===void 0&&(Te=1),ke.setLineWidth(Te*et()),H.isLineSegments?ut.setMode(z.LINES):H.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else H.isPoints?ut.setMode(z.POINTS):H.isSprite&&ut.setMode(z.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ut.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Te=H._multiDrawStarts,sn=H._multiDrawCounts,lt=H._multiDrawCount,Tt=Ne?J.get(Ne).bytesPerElement:1,ie=We.get(Z).currentProgram.getUniforms();for(let Xe=0;Xe<lt;Xe++)ie.setValue(z,"_gl_DrawID",Xe),ut.render(Te[Xe]/Tt,sn[Xe])}else if(H.isInstancedMesh)ut.renderInstances(je,Je,H.count);else if(Y.isInstancedBufferGeometry){const Te=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,sn=Math.min(Y.instanceCount,Te);ut.renderInstances(je,Je,sn)}else ut.render(je,Je)};function yt(S,U,Y){S.transparent===!0&&S.side===jt&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,zn(S,U,Y),S.side=Mi,S.needsUpdate=!0,zn(S,U,Y),S.side=jt):zn(S,U,Y)}this.compile=function(S,U,Y=null){Y===null&&(Y=S),p=it.get(Y),p.init(U),b.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==Y&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){const Oe=fe[we];yt(Oe,Y,H),Z.add(Oe)}else yt(fe,Y,H),Z.add(fe)}),b.pop(),p=null,Z},this.compileAsync=function(S,U,Y=null){const Z=this.compile(S,U,Y);return new Promise(H=>{function fe(){if(Z.forEach(function(we){We.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){H(S);return}setTimeout(fe,10)}Qe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let rn=null;function gn(S){rn&&rn(S)}function Ei(){qt.stop()}function ii(){qt.start()}const qt=new Cu;qt.setAnimationLoop(gn),typeof self!="undefined"&&qt.setContext(self),this.setAnimationLoop=function(S){rn=S,j.setAnimationLoop(S),S===null?qt.stop():qt.start()},j.addEventListener("sessionstart",Ei),j.addEventListener("sessionend",ii),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,I),p=it.get(S,b.length),p.init(U),b.push(p),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Se),ne=this.localClippingEnabled,ue=de.init(this.clippingPlanes,ne),g=Ee.get(S,w.length),g.init(),w.push(g),j.enabled===!0&&j.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&_n(fe,U,-1/0,y.sortObjects)}_n(S,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(D,F),$e=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,$e&&Ze.addToRenderList(g,S),this.info.render.frame++,ue===!0&&de.beginShadows();const Y=p.state.shadowsArray;be.render(Y,S,U),ue===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,H=g.transmissive;if(p.setupLights(),U.isArrayCamera){const fe=U.cameras;if(H.length>0)for(let we=0,Oe=fe.length;we<Oe;we++){const Ne=fe[we];Wi(Z,H,S,Ne)}$e&&Ze.render(S);for(let we=0,Oe=fe.length;we<Oe;we++){const Ne=fe[we];ri(g,S,Ne,Ne.viewport)}}else H.length>0&&Wi(Z,H,S,U),$e&&Ze.render(S),ri(g,S,U);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(y,S,U),rt.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ue===!0&&de.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function _n(S,U,Y,Z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){Z&&Ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);const we=Q.update(S),Oe=S.material;Oe.visible&&g.push(S,we,Oe,Y,Ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const we=Q.update(S),Oe=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ge.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(Oe)){const Ne=we.groups;for(let Le=0,nt=Ne.length;Le<nt;Le++){const ze=Ne[Le],je=Oe[ze.materialIndex];je&&je.visible&&g.push(S,we,je,Y,Ge.z,ze)}}else Oe.visible&&g.push(S,we,Oe,Y,Ge.z,null)}}const fe=S.children;for(let we=0,Oe=fe.length;we<Oe;we++)_n(fe[we],U,Y,Z)}function ri(S,U,Y,Z){const H=S.opaque,fe=S.transmissive,we=S.transparent;p.setupLightsView(Y),ue===!0&&de.setGlobalState(y.clippingPlanes,Y),Z&&ke.viewport(T.copy(Z)),H.length>0&&si(H,U,Y),fe.length>0&&si(fe,U,Y),we.length>0&&si(we,U,Y),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Wi(S,U,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new ei(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Vi:Qn,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Z.id],we=Z.viewport||T;fe.setSize(we.z,we.w);const Oe=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(W),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),$e&&Ze.render(Y);const Ne=y.toneMapping;y.toneMapping=vi;const Le=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ue===!0&&de.setGlobalState(y.clippingPlanes,Z),si(S,Y,Z),R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ze=0,je=U.length;ze<je;ze++){const vt=U[ze],Je=vt.object,At=vt.geometry,ut=vt.material,Te=vt.group;if(ut.side===jt&&Je.layers.test(Z.layers)){const sn=ut.side;ut.side=nn,ut.needsUpdate=!0,ai(Je,Y,Z,At,ut,Te),ut.side=sn,ut.needsUpdate=!0,nt=!0}}nt===!0&&(R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe))}y.setRenderTarget(Oe),y.setClearColor(W,V),Le!==void 0&&(Z.viewport=Le),y.toneMapping=Ne}function si(S,U,Y){const Z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,fe=S.length;H<fe;H++){const we=S[H],Oe=we.object,Ne=we.geometry,Le=Z===null?we.material:Z,nt=we.group;Oe.layers.test(Y.layers)&&ai(Oe,U,Y,Ne,Le,nt)}}function ai(S,U,Y,Z,H,fe){S.onBeforeRender(y,U,Y,Z,H,fe),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(y,U,Y,Z,S,fe),H.transparent===!0&&H.side===jt&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,y.renderBufferDirect(Y,U,Z,H,S,fe),H.side=Mi,H.needsUpdate=!0,y.renderBufferDirect(Y,U,Z,H,S,fe),H.side=jt):y.renderBufferDirect(Y,U,Z,H,S,fe),S.onAfterRender(y,U,Y,Z,H,fe)}function zn(S,U,Y){U.isScene!==!0&&(U=mt);const Z=We.get(S),H=p.state.lights,fe=p.state.shadowsArray,we=H.state.version,Oe=Ve.getParameters(S,H.state,fe,U,Y),Ne=Ve.getProgramCacheKey(Oe);let Le=Z.programs;Z.environment=S.isMeshStandardMaterial?U.environment:null,Z.fog=U.fog,Z.envMap=(S.isMeshStandardMaterial?X:x).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",at),Le=new Map,Z.programs=Le);let nt=Le.get(Ne);if(nt!==void 0){if(Z.currentProgram===nt&&Z.lightsStateVersion===we)return ce(S,Oe),nt}else Oe.uniforms=Ve.getUniforms(S),S.onBeforeCompile(Oe,y),nt=Ve.acquireProgram(Oe,Ne),Le.set(Ne,nt),Z.uniforms=Oe.uniforms;const ze=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=de.uniform),ce(S,Oe),Z.needsLights=st(S),Z.lightsStateVersion=we,Z.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=nt,Z.uniformsList=null,nt}function oe(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=qs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ce(S,U){const Y=We.get(S);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function ye(S,U,Y,Z,H){U.isScene!==!0&&(U=mt),R.resetTextureUnits();const fe=U.fog,we=Z.isMeshStandardMaterial?U.environment:null,Oe=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:yi,Ne=(Z.isMeshStandardMaterial?X:x).get(Z.envMap||we),Le=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,nt=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!Y.morphAttributes.position,je=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color;let Je=vi;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Je=y.toneMapping);const At=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=At!==void 0?At.length:0,Te=We.get(Z),sn=p.state.lights;if(ue===!0&&(ne===!0||S!==M)){const se=S===M&&Z.id===E;de.setState(Z,S,se)}let lt=!1;Z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==sn.state.version||Te.outputColorSpace!==Oe||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==Ne||Z.fog===!0&&Te.fog!==fe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==de.numPlanes||Te.numIntersection!==de.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==nt||Te.morphTargets!==ze||Te.morphNormals!==je||Te.morphColors!==vt||Te.toneMapping!==Je||Te.morphTargetsCount!==ut)&&(lt=!0):(lt=!0,Te.__version=Z.version);let Tt=Te.currentProgram;lt===!0&&(Tt=zn(Z,U,H));let ie=!1,Xe=!1,Bt=!1;const St=Tt.getUniforms(),Jt=Te.uniforms;if(ke.useProgram(Tt.program)&&(ie=!0,Xe=!0,Bt=!0),Z.id!==E&&(E=Z.id,Xe=!0),ie||M!==S){ke.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),lf(ae),cf(ae),St.setValue(z,"projectionMatrix",ae)):St.setValue(z,"projectionMatrix",S.projectionMatrix),St.setValue(z,"viewMatrix",S.matrixWorldInverse);const ge=St.map.cameraPosition;ge!==void 0&&ge.setValue(z,De.setFromMatrixPosition(S.matrixWorld)),Fe.logarithmicDepthBuffer&&St.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Xe=!0,Bt=!0)}if(H.isSkinnedMesh){St.setOptional(z,H,"bindMatrix"),St.setOptional(z,H,"bindMatrixInverse");const se=H.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),St.setValue(z,"boneTexture",se.boneTexture,R))}H.isBatchedMesh&&(St.setOptional(z,H,"batchingTexture"),St.setValue(z,"batchingTexture",H._matricesTexture,R),St.setOptional(z,H,"batchingIdTexture"),St.setValue(z,"batchingIdTexture",H._indirectTexture,R),St.setOptional(z,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(z,"batchingColorTexture",H._colorsTexture,R));const N=Y.morphAttributes;if((N.position!==void 0||N.normal!==void 0||N.color!==void 0)&&Ke.update(H,Y,Tt),(Xe||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,St.setValue(z,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Jt.envMap.value=Ne,Jt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Xe&&(St.setValue(z,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Ye(Jt,Bt),fe&&Z.fog===!0&&ve.refreshFogUniforms(Jt,fe),ve.refreshMaterialUniforms(Jt,Z,v,te,p.state.transmissionRenderTarget[S.id]),qs.upload(z,oe(Te),Jt,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(qs.upload(z,oe(Te),Jt,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(z,"center",H.center),St.setValue(z,"modelViewMatrix",H.modelViewMatrix),St.setValue(z,"normalMatrix",H.normalMatrix),St.setValue(z,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const se=Z.uniformsGroups;for(let ge=0,xe=se.length;ge<xe;ge++){const qe=se[ge];k.update(qe,Tt),k.bind(qe,Tt)}}return Tt}function Ye(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function st(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,U,Y){We.get(S.texture).__webglTexture=U,We.get(S.depthTexture).__webglTexture=Y;const Z=We.get(S);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const Y=We.get(S);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,Y=0){I=S,P=U,C=Y;let Z=!0,H=null,fe=!1,we=!1;if(S){const Ne=We.get(S);if(Ne.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(z.FRAMEBUFFER,null),Z=!1;else if(Ne.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(Ne.__hasExternalTextures)R.rebindTextures(S,We.get(S.texture).__webglTexture,We.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ze=S.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&We.has(ze)&&(S.width!==ze.image.width||S.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(we=!0);const nt=We.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(nt[U])?H=nt[U][Y]:H=nt[U],fe=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?H=We.get(S).__webglMultisampledFramebuffer:Array.isArray(nt)?H=nt[Y]:H=nt,T.copy(S.viewport),A.copy(S.scissor),L=S.scissorTest}else T.copy(B).multiplyScalar(v).floor(),A.copy($).multiplyScalar(v).floor(),L=Me;if(ke.bindFramebuffer(z.FRAMEBUFFER,H)&&Z&&ke.drawBuffers(S,H),ke.viewport(T),ke.scissor(A),ke.setScissorTest(L),fe){const Ne=We.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ne.__webglTexture,Y)}else if(we){const Ne=We.get(S.texture),Le=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ne.__webglTexture,Y||0,Le)}E=-1},this.readRenderTargetPixels=function(S,U,Y,Z,H,fe,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){ke.bindFramebuffer(z.FRAMEBUFFER,Oe);try{const Ne=S.texture,Le=Ne.format,nt=Ne.type;if(!Fe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-Z&&Y>=0&&Y<=S.height-H&&z.readPixels(U,Y,Z,H,Ie.convert(Le),Ie.convert(nt),fe)}finally{const Ne=I!==null?We.get(I).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,U,Y,Z,H,fe,we){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){const Ne=S.texture,Le=Ne.format,nt=Ne.type;if(!Fe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-Z&&Y>=0&&Y<=S.height-H){ke.bindFramebuffer(z.FRAMEBUFFER,Oe);const ze=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.bufferData(z.PIXEL_PACK_BUFFER,fe.byteLength,z.STREAM_READ),z.readPixels(U,Y,Z,H,Ie.convert(Le),Ie.convert(nt),0);const je=I!==null?We.get(I).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,je);const vt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await of(z,vt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,fe),z.deleteBuffer(ze),z.deleteSync(vt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,Y=0){S.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const Z=Math.pow(2,-Y),H=Math.floor(S.image.width*Z),fe=Math.floor(S.image.height*Z),we=U!==null?U.x:0,Oe=U!==null?U.y:0;R.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,we,Oe,H,fe),ke.unbindTexture()},this.copyTextureToTexture=function(S,U,Y=null,Z=null,H=0){S.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,S=arguments[1],U=arguments[2],H=arguments[3]||0,Y=null);let fe,we,Oe,Ne,Le,nt,ze,je,vt;const Je=S.isCompressedTexture?S.mipmaps[H]:S.image;Y!==null?(fe=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,Oe=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Le=Y.min.y,nt=Y.isBox3?Y.min.z:0):(fe=Je.width,we=Je.height,Oe=Je.depth||1,Ne=0,Le=0,nt=0),Z!==null?(ze=Z.x,je=Z.y,vt=Z.z):(ze=0,je=0,vt=0);const At=Ie.convert(U.format),ut=Ie.convert(U.type);let Te;U.isData3DTexture?(R.setTexture3D(U,0),Te=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Te=z.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Te=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);const sn=z.getParameter(z.UNPACK_ROW_LENGTH),lt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Tt=z.getParameter(z.UNPACK_SKIP_PIXELS),ie=z.getParameter(z.UNPACK_SKIP_ROWS),Xe=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Je.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Je.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ne),z.pixelStorei(z.UNPACK_SKIP_ROWS,Le),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nt);const Bt=S.isDataArrayTexture||S.isData3DTexture,St=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Jt=We.get(S),N=We.get(U),se=We.get(Jt.__renderTarget),ge=We.get(N.__renderTarget);ke.bindFramebuffer(z.READ_FRAMEBUFFER,se.__webglFramebuffer),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let xe=0;xe<Oe;xe++)Bt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(S).__webglTexture,H,nt+xe),S.isDepthTexture?(St&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(U).__webglTexture,H,vt+xe),z.blitFramebuffer(Ne,Le,fe,we,ze,je,fe,we,z.DEPTH_BUFFER_BIT,z.NEAREST)):St?z.copyTexSubImage3D(Te,H,ze,je,vt+xe,Ne,Le,fe,we):z.copyTexSubImage2D(Te,H,ze,je,vt+xe,Ne,Le,fe,we);ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else St?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Te,H,ze,je,vt,fe,we,Oe,At,ut,Je.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Te,H,ze,je,vt,fe,we,Oe,At,Je.data):z.texSubImage3D(Te,H,ze,je,vt,fe,we,Oe,At,ut,Je):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,ze,je,fe,we,At,ut,Je.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,ze,je,Je.width,Je.height,At,Je.data):z.texSubImage2D(z.TEXTURE_2D,H,ze,je,fe,we,At,ut,Je);z.pixelStorei(z.UNPACK_ROW_LENGTH,sn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ie),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe),H===0&&U.generateMipmaps&&z.generateMipmap(Te),ke.unbindTexture()},this.copyTextureToTexture3D=function(S,U,Y=null,Z=null,H=0){return S.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,S=arguments[2],U=arguments[3],H=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,Y,Z,H)},this.initRenderTarget=function(S){We.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),ke.unbindTexture()},this.resetState=function(){P=0,C=0,I=null,ke.reset(),rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class ul{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=i}clone(){return new ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ca extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vo,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new G;class Qs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uu extends ni{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sr;const Fr=new G,ar=new G,or=new G,lr=new Re,Or=new Re,Nu=new Ut,Ts=new G,zr=new G,As=new G,mc=new Re,ka=new Re,gc=new Re;class xg extends Ht{constructor(e=new Uu){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vg(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new Qs(i,3,0,!1)),sr.setAttribute("uv",new Qs(i,2,3,!1))}this.geometry=sr,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Rs(Ts.set(-.5,-.5,0),or,a,ar,r,s),Rs(zr.set(.5,-.5,0),or,a,ar,r,s),Rs(As.set(.5,.5,0),or,a,ar,r,s),mc.set(0,0),ka.set(1,0),gc.set(1,1);let o=e.ray.intersectTriangle(Ts,zr,As,!1,Fr);if(o===null&&(Rs(zr.set(-.5,.5,0),or,a,ar,r,s),ka.set(0,1),o=e.ray.intersectTriangle(Ts,As,zr,!1,Fr),o===null))return;const c=e.ray.origin.distanceTo(Fr);c<e.near||c>e.far||t.push({distance:c,point:Fr.clone(),uv:wn.getInterpolation(Fr,Ts,zr,As,mc,ka,gc,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rs(n,e,t,i,r,s){lr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Or.x=s*lr.x-r*lr.y,Or.y=r*lr.x+s*lr.y):Or.copy(lr),n.copy(e),n.x+=Or.x,n.y+=Or.y,n.applyMatrix4(Nu)}class Mg extends ln{constructor(e=null,t=1,i=1,r,s,a,o,c,l=fn,u=fn,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu extends ni{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new G,ta=new G,_c=new Ut,Br=new sl,Cs=new is,Va=new G,vc=new G;class yg extends Ht{constructor(e=new kt,t=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ea.fromBufferAttribute(t,r-1),ta.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;_c.copy(r).invert(),Br.copy(e.ray).applyMatrix4(_c);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=u.getX(_),w=u.getX(_+1),b=Ps(this,e,Br,c,p,w);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=Ps(this,e,Br,c,_,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=Ps(this,e,Br,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ps(this,e,Br,c,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ps(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(ea.fromBufferAttribute(a,r),ta.fromBufferAttribute(a,s),t.distanceSqToSegment(ea,ta,Va,vc)>i)return;Va.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Va);if(!(c<e.near||c>e.far))return{distance:c,point:vc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const xc=new G,Mc=new G;class Sg extends yg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xc.fromBufferAttribute(t,r),Mc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xc.distanceTo(Mc);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ou extends ni{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yc=new Ut,Wo=new sl,Ds=new is,Is=new G;class Eg extends Ht{constructor(e=new kt,t=new Ou){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;yc.copy(r).invert(),Wo.copy(e.ray).applyMatrix4(yc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);Is.fromBufferAttribute(h,g),Sc(Is,g,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Is.fromBufferAttribute(h,m),Sc(Is,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sc(n,e,t,i,r,s,a){const o=Wo.distanceSqToPoint(n);if(o<t){const c=new G;Wo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Si extends ln{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ti extends kt{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=tn(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/t,h=new G,d=new Re,f=new G,m=new G,_=new G;let g=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:g=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let w=0;w<=t;w++){const b=i+w*u*r,y=Math.sin(b),O=Math.cos(b);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*y,h.y=e[P].y,h.z=e[P].x*O,a.push(h.x,h.y,h.z),d.x=w/t,d.y=P/(e.length-1),o.push(d.x,d.y);const C=c[3*P+0]*y,I=c[3*P+1],E=c[3*P+0]*O;l.push(C,I,E)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){const y=b+w*e.length,O=y,P=y+e.length,C=y+e.length+1,I=y+1;s.push(O,P,I),s.push(C,I,P)}this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("uv",new bt(o,2)),this.setAttribute("normal",new bt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.points,e.segments,e.phiStart,e.phiLength)}}class _i extends kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new G,u=new Re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pt extends kt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function w(){const y=new G,O=new G;let P=0;const C=(t-e)/i;for(let I=0;I<=s;I++){const E=[],M=I/s,T=M*(t-e)+e;for(let A=0;A<=r;A++){const L=A/r,W=L*c+o,V=Math.sin(W),q=Math.cos(W);O.x=T*V,O.y=-M*i+g,O.z=T*q,h.push(O.x,O.y,O.z),y.set(V,C,q).normalize(),d.push(y.x,y.y,y.z),f.push(L,1-M),E.push(m++)}_.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const M=_[E][I],T=_[E+1][I],A=_[E+1][I+1],L=_[E][I+1];(e>0||E!==0)&&(u.push(M,T,L),P+=3),(t>0||E!==s-1)&&(u.push(T,A,L),P+=3)}l.addGroup(p,P,0),p+=P}function b(y){const O=m,P=new Re,C=new G;let I=0;const E=y===!0?e:t,M=y===!0?1:-1;for(let A=1;A<=r;A++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const T=m;for(let A=0;A<=r;A++){const W=A/r*c+o,V=Math.cos(W),q=Math.sin(W);C.x=E*q,C.y=g*M,C.z=E*V,h.push(C.x,C.y,C.z),d.push(0,M,0),P.x=V*.5+.5,P.y=q*.5*M+.5,f.push(P.x,P.y),m++}for(let A=0;A<r;A++){const L=O+A,W=T+A;y===!0?u.push(W,W+1,L):u.push(W+1,W,L),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hl extends pt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new hl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lt extends kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new G,d=new G,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const w=[],b=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let O=0;O<=t;O++){const P=O/t;h.x=-e*Math.cos(r+P*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(r+P*s)*Math.sin(a+b*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(P+y,1-b),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const b=u[p][w+1],y=u[p][w],O=u[p+1][w],P=u[p+1][w+1];(p!==0||a>0)&&f.push(b,y,P),(p!==i-1||c<Math.PI)&&f.push(y,O,P)}this.setIndex(f),this.setAttribute("position",new bt(m,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class en extends kt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new G,h=new G,d=new G;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){const _=m/r*s,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){const _=(r+1)*f+m-1,g=(r+1)*(f-1)+m-1,p=(r+1)*(f-1)+m,w=(r+1)*f+m;a.push(_,g,w),a.push(g,p,w)}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wt extends ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ha extends Wt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wg extends ni{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class fl extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bg extends fl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new Ut,Ec=new G,wc=new G;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ec),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bc=new Ut,kr=new G,Wa=new G;class Tg extends zu{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(kr),Wa.copy(i.position),Wa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wa),i.updateMatrixWorld(),r.makeTranslation(-kr.x,-kr.y,-kr.z),bc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}}class Er extends fl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ag extends zu{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tc extends fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);class Rg extends ca{constructor(){super();const e=new He;e.deleteAttribute("uv");const t=new Wt({side:nn}),i=new Wt,r=new Er(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new re(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new re(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new re(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new re(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new re(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new re(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new re(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new re(e,cr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new re(e,cr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new re(e,cr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new re(e,cr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new re(e,cr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new re(e,cr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function cr(n){const e=new gt;return e.color.setScalar(n),e}class Cg{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pg=new ol(-1,1,1,-1,0,1);class Dg extends kt{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const Ig=new Dg;class Lg{constructor(e){this._mesh=new re(Ig,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ug{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}dot4(e,t,i,r,s){return e[0]*t+e[1]*i+e[2]*r+e[3]*s}noise(e,t){let i,r,s;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(c+l)*u,d=c-h,f=l-h,m=e-d,_=t-f;let g,p;m>_?(g=1,p=0):(g=0,p=1);const w=m-g+u,b=_-p+u,y=m-1+2*u,O=_-1+2*u,P=c&255,C=l&255,I=this.perm[P+this.perm[C]]%12,E=this.perm[P+g+this.perm[C+p]]%12,M=this.perm[P+1+this.perm[C+1]]%12;let T=.5-m*m-_*_;T<0?i=0:(T*=T,i=T*T*this.dot(this.grad3[I],m,_));let A=.5-w*w-b*b;A<0?r=0:(A*=A,r=A*A*this.dot(this.grad3[E],w,b));let L=.5-y*y-O*O;return L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[M],y,O)),70*(i+r+s)}noise3d(e,t,i){let r,s,a,o;const l=(e+t+i)*.3333333333333333,u=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(i+l),f=1/6,m=(u+h+d)*f,_=u-m,g=h-m,p=d-m,w=e-_,b=t-g,y=i-p;let O,P,C,I,E,M;w>=b?b>=y?(O=1,P=0,C=0,I=1,E=1,M=0):w>=y?(O=1,P=0,C=0,I=1,E=0,M=1):(O=0,P=0,C=1,I=1,E=0,M=1):b<y?(O=0,P=0,C=1,I=0,E=1,M=1):w<y?(O=0,P=1,C=0,I=0,E=1,M=1):(O=0,P=1,C=0,I=1,E=1,M=0);const T=w-O+f,A=b-P+f,L=y-C+f,W=w-I+2*f,V=b-E+2*f,q=y-M+2*f,te=w-1+3*f,v=b-1+3*f,D=y-1+3*f,F=u&255,B=h&255,$=d&255,Me=this.perm[F+this.perm[B+this.perm[$]]]%12,K=this.perm[F+O+this.perm[B+P+this.perm[$+C]]]%12,ue=this.perm[F+I+this.perm[B+E+this.perm[$+M]]]%12,ne=this.perm[F+1+this.perm[B+1+this.perm[$+1]]]%12;let ae=.6-w*w-b*b-y*y;ae<0?r=0:(ae*=ae,r=ae*ae*this.dot3(this.grad3[Me],w,b,y));let Se=.6-T*T-A*A-L*L;Se<0?s=0:(Se*=Se,s=Se*Se*this.dot3(this.grad3[K],T,A,L));let De=.6-W*W-V*V-q*q;De<0?a=0:(De*=De,a=De*De*this.dot3(this.grad3[ue],W,V,q));let Ge=.6-te*te-v*v-D*D;return Ge<0?o=0:(Ge*=Ge,o=Ge*Ge*this.dot3(this.grad3[ne],te,v,D)),32*(r+s+a+o)}noise4d(e,t,i,r){const s=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,h,d,f,m;const _=(e+t+i+r)*c,g=Math.floor(e+_),p=Math.floor(t+_),w=Math.floor(i+_),b=Math.floor(r+_),y=(g+p+w+b)*l,O=g-y,P=p-y,C=w-y,I=b-y,E=e-O,M=t-P,T=i-C,A=r-I,L=E>M?32:0,W=E>T?16:0,V=M>T?8:0,q=E>A?4:0,te=M>A?2:0,v=T>A?1:0,D=L+W+V+q+te+v,F=a[D][0]>=3?1:0,B=a[D][1]>=3?1:0,$=a[D][2]>=3?1:0,Me=a[D][3]>=3?1:0,K=a[D][0]>=2?1:0,ue=a[D][1]>=2?1:0,ne=a[D][2]>=2?1:0,ae=a[D][3]>=2?1:0,Se=a[D][0]>=1?1:0,De=a[D][1]>=1?1:0,Ge=a[D][2]>=1?1:0,mt=a[D][3]>=1?1:0,$e=E-F+l,et=M-B+l,z=T-$+l,he=A-Me+l,Qe=E-K+2*l,Fe=M-ue+2*l,ke=T-ne+2*l,ct=A-ae+2*l,We=E-Se+3*l,R=M-De+3*l,x=T-Ge+3*l,X=A-mt+3*l,J=E-1+4*l,le=M-1+4*l,Q=T-1+4*l,Ve=A-1+4*l,ve=g&255,Ee=p&255,it=w&255,de=b&255,be=o[ve+o[Ee+o[it+o[de]]]]%32,Ze=o[ve+F+o[Ee+B+o[it+$+o[de+Me]]]]%32,Ke=o[ve+K+o[Ee+ue+o[it+ne+o[de+ae]]]]%32,_e=o[ve+Se+o[Ee+De+o[it+Ge+o[de+mt]]]]%32,Ue=o[ve+1+o[Ee+1+o[it+1+o[de+1]]]]%32;let Ie=.6-E*E-M*M-T*T-A*A;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this.dot4(s[be],E,M,T,A));let rt=.6-$e*$e-et*et-z*z-he*he;rt<0?h=0:(rt*=rt,h=rt*rt*this.dot4(s[Ze],$e,et,z,he));let k=.6-Qe*Qe-Fe*Fe-ke*ke-ct*ct;k<0?d=0:(k*=k,d=k*k*this.dot4(s[Ke],Qe,Fe,ke,ct));let me=.6-We*We-R*R-x*x-X*X;me<0?f=0:(me*=me,f=me*me*this.dot4(s[_e],We,R,x,X));let j=.6-J*J-le*le-Q*Q-Ve*Ve;return j<0?m=0:(j*=j,m=j*j*this.dot4(s[Ue],J,le,Q,Ve)),27*(u+h+d+f+m)}}const Ls={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Re},cameraProjectionMatrix:{value:new Ut},cameraInverseProjectionMatrix:{value:new Ut},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},Us={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Ns={uniforms:{tDiffuse:{value:null},resolution:{value:new Re}},vertexShader:`varying vec2 vUv;

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

		}`},Xa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gi extends Cg{constructor(e,t,i,r,s=32){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const a=new cl;a.format=Gi,a.type=Hi,this.normalRenderTarget=new ei(this.width,this.height,{minFilter:fn,magFilter:fn,type:Vi,depthTexture:a}),this.ssaoRenderTarget=new ei(this.width,this.height,{type:Vi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new bn({defines:Object.assign({},Ls.defines),uniforms:Yr.clone(Ls.uniforms),vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader,blending:dn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new wg,this.normalMaterial.blending=dn,this.blurMaterial=new bn({defines:Object.assign({},Ns.defines),uniforms:Yr.clone(Ns.uniforms),vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new bn({defines:Object.assign({},Us.defines),uniforms:Yr.clone(Us.uniforms),vertexShader:Us.vertexShader,fragmentShader:Us.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bn({uniforms:Yr.clone(Xa.uniforms),vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:su,blendDst:to,blendEquation:Yn,blendSrcAlpha:ru,blendDstAlpha:to,blendEquationAlpha:Yn}),this.fsQuad=new Lg(null),this.originalClearColor=new ot}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,i){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case gi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case gi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case gi.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:i);break;case gi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case gi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=iu,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,i,r,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,i,r,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let i=0;i<e;i++){const r=new G;r.x=Math.random()*2-1,r.y=Math.random()*2-1,r.z=Math.random(),r.normalize();let s=i/e;s=sf.lerp(.1,1,s*s),r.multiplyScalar(s),t.push(r)}}generateRandomKernelRotations(){const i=new Ug,r=16,s=new Float32Array(r);for(let a=0;a<r;a++){const o=Math.random()*2-1,c=Math.random()*2-1,l=0;s[a]=i.noise3d(o,c,l)}this.noiseTexture=new Mg(s,4,4,Qo,Nn),this.noiseTexture.wrapS=Fn,this.noiseTexture.wrapT=Fn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const r=t.get(i);i.visible=r}),t.clear()}}gi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Ng={minX:-15.55,maxX:15.55,minZ:-53.45,maxZ:13.55},Fg={x:0,y:1.58,z:10.55,yaw:0},Og={x:0,y:1.58,z:-16.35,yaw:0},zg={x:0,y:1.58,z:-30.2,yaw:0},Bg={x:0,y:1.58,z:-42.45,yaw:0},jr=-24.2,kg=jr-.35,Zs=-47.55,Vg=Zs-.35,$r={x:0,y:0,z:-26.55},Bi={x:0,y:0,z:-50.15},Jr=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35},{id:"sprinkler",x:6.35,y:2.65,z:-32.55}],Hg=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],Gg=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],Wg=[{id:"service-l",x:-4.15,z:-33.55,cloak:!1,hp:70},{id:"service-r",x:4.85,z:-34.15,cloak:!1,hp:70},{id:"service-ghost",x:.55,z:-37.35,cloak:!0,hp:84}],Xo=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1},{id:"pad-fountain",kind:"battery",pad:!0,x:3.72,z:.45,cloaked:!1},{id:"pad-food",kind:"battery",pad:!0,x:-10.2,z:7.5,cloaked:!1},{id:"pad-door",kind:"battery",pad:!0,x:0,z:-10.05,cloaked:!1},{id:"pad-aisle",kind:"battery",pad:!0,x:0,z:-17.15,cloaked:!1},{id:"pad-pew",kind:"battery",pad:!0,x:5.4,z:-22.7,cloaked:!1},{id:"pad-altar",kind:"battery",pad:!0,x:-4.2,z:-23.05,cloaked:!1},{id:"pad-service",kind:"battery",pad:!0,x:0,z:-31.15,cloaked:!1},{id:"pad-rack",kind:"battery",pad:!0,x:-2.55,z:-38.55,cloaked:!1},{id:"pad-listing",kind:"battery",pad:!0,x:-4.7,z:-43.7,cloaked:!1},{id:"pad-index",kind:"battery",pad:!0,x:4.55,z:-45.25,cloaked:!1}],Ya={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},qa={minX:-6.4,maxX:6.4,minZ:-39.7,maxZ:-30.5},Xg={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":Ya,"choir-r":Ya,"choir-ghost":Ya,"service-l":qa,"service-r":qa,"service-ghost":qa};function Be(n,e,t,i,r,s,a,o,c={}){return{id:n,mat:e,x:t,y:i,z:r,w:s,h:a,d:o,...c}}const xt=7.2,Bu=[Be("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),Be("ceiling","ceiling",0,7.35,0,34,.3,30),Be("wall-n-l","wall",-9.23,xt/2,-14.3,14.74,xt,.6),Be("wall-n-r","wall",9.23,xt/2,-14.3,14.74,xt,.6),Be("chapel-door","trim",0,xt/2,-14.3,3.76,xt,.66,{door:!0}),Be("wall-s","wall",0,xt/2,14.3,33.2,xt,.6),Be("wall-w","wall",-16.3,xt/2,0,.6,xt,29.2),Be("wall-e","wall",16.3,xt/2,0,.6,xt,29.2),Be("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),Be("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),Be("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),Be("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),Be("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),Be("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),Be("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),Be("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),Be("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),Be("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),Be("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),Be("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),Be("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),Be("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),Be("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),Be("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),Be("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),Be("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),Be("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),Be("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),Be("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),Be("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),Be("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),Be("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),Be("chapel-w","wall",-8.35,xt/2,-21.75,.5,xt,14.9),Be("chapel-e","wall",8.35,xt/2,-21.75,.5,xt,14.9),Be("chapel-n-l","wall",-5.55,xt/2,-29.05,6.1,xt,.5),Be("chapel-n-r","wall",5.55,xt/2,-29.05,6.1,xt,.5),Be("service-door","trim",0,xt/2,-29.05,5,xt,.66,{serviceDoor:!0}),Be("service-floor","floor",0,-.2,-35.2,16.7,.4,11.7,{floor:!0}),Be("service-ceiling","ceiling",0,7.35,-35.2,16.7,.3,11.7),Be("service-w","wall",-8.35,xt/2,-35.15,.5,xt,12.3),Be("service-e","wall",8.35,xt/2,-35.15,.5,xt,12.3),Be("service-n-l","wall",-5.24,xt/2,-41.2,6.72,xt,.5),Be("service-n-r","wall",5.24,xt/2,-41.2,6.72,xt,.5),Be("directory-door","trim",0,xt/2,-41.2,3.76,xt,.66,{directoryDoor:!0}),Be("service-rack-w","metal",-6.35,1.15,-35.7,1.45,2.3,2.5),Be("service-rack-e","metal",6.35,1.15,-37.9,1.35,2.3,2.2),Be("service-cart","trim",-6.15,.48,-31.45,1.45,.96,.85),Be("service-locker","metal",6.45,.7,-31.05,1.5,1.4,.75),Be("service-pipe","metal",0,6.55,-35.2,.22,.22,8.5),Be("directory-floor","floor",0,-.2,-47,16.7,.4,11.2,{floor:!0}),Be("directory-ceiling","ceiling",0,7.35,-47,16.7,.3,11.2),Be("directory-w","wall",-8.35,xt/2,-47,.5,xt,11.8),Be("directory-e","wall",8.35,xt/2,-47,.5,xt,11.8),Be("directory-n","wall",0,xt/2,-52.7,17.2,xt,.5),Be("dir-gate-l","trim",-4.7,1.8,Zs,6.7,3.6,.46),Be("dir-gate-r","trim",4.7,1.8,Zs,6.7,3.6,.46),Be("directory-gate","trim",0,1.8,Zs,3.3,3.6,.4,{phaseGate:!0,directoryVeil:!0}),Be("dir-pier-l","trim",-6.35,1.55,-50.35,.5,3.1,.5),Be("dir-pier-r","trim",6.35,1.55,-50.35,.5,3.1,.5),Be("directory-plinth","trim",0,.4,-50.15,1.55,.8,1.15),Be("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),Be("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),Be("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),Be("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),Be("altar-l","trim",-4.85,1.8,jr,6.5,3.6,.48),Be("altar-r","trim",4.85,1.8,jr,6.5,3.6,.48),Be("rite-veil","trim",0,1.8,jr,3.36,3.6,.42,{phaseGate:!0,veil:!0}),Be("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function Yg(n){return{id:n.id,minX:n.x-n.w/2,maxX:n.x+n.w/2,minY:n.y-n.h/2,maxY:n.y+n.h/2,minZ:n.z-n.d/2,maxZ:n.z+n.d/2,phaseGate:!!n.phaseGate,floor:!!n.floor}}function ku({doorOpen:n=!1,veilUp:e=!1,serviceOpen:t=!1,directoryOpen:i=!1,directoryVeilUp:r=!1}={}){return Bu.filter(s=>!(s.door&&n||s.serviceDoor&&t||s.directoryDoor&&i||s.veil&&!e||s.directoryVeil&&!r)).map(Yg)}function dl(n,e,t){return{id:n.id,x:n.x,y:0,z:n.z,yaw:0,hp:n.hp,maxHp:n.hp,alive:!0,cloaked:!!n.cloak,reveal:0,visible:!n.cloak,exposed:!1,hittable:!n.cloak,hits:0,lastHitAt:null,aggro:t==="court"&&!n.cloak,cooldown:t==="court"?.95+e%4*.28:t==="chapel"?1.35+e%3*.25:1.2+e%3*.25,windup:0,strafeSign:e%2===0?1:-1,strafeT:.8+e%3*.25,hurt:0,stun:0,room:t,dormant:t!=="court"}}function Vu(){return Hg.map((n,e)=>dl(n,e,"court"))}function na(){return Gg.map((n,e)=>dl(n,e,"chapel"))}function Ks(){return Wg.map((n,e)=>dl(n,e,"service"))}function Fs(){return Xo.map(n=>({...n,taken:!1,respawnAt:null}))}const jn=["LIVE","STATIC","DEAD_AIR"],pe={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6},clickerMag:20,scatterMag:8,phaserMag:6,phaserDamage:26,phaserRange:8,phaserFalloff:.4,phaserCooldown:.48,dropLive:5,dropStatic:2,dropDead:2,paRefund:2,paRefundFocus:2,padRespawn:16,padFocus:6,padSide:2,maxLevel:6,xpBase:40,xpStep:12,xpKill:16,xpRite:28,xpCourt:48,xpWing:48,xpHijack:18,paCooldown:16,upgradeStacks:2,magClicker:4,pelletStep:2,phaserStep:2,drainStep:3,batteryLive:3,batteryStatic:1,batteryDead:1,surfLive:.03,surfStatic:.08,surfPhaser:.08,paStep:4,regenStep:3},Hu=[{id:"clicker-mag",name:"CLICKER MAG",detail:`+${pe.magClicker} shots`,max:pe.upgradeStacks},{id:"scatter-fan",name:"SCATTER FAN",detail:`+${pe.pelletStep} pellets`,max:pe.upgradeStacks},{id:"phaser-reach",name:"PHASER REACH",detail:`+${pe.phaserStep} meters`,max:pe.upgradeStacks},{id:"quiet-air",name:"QUIET AIR",detail:`Drain −${pe.drainStep}`,max:pe.upgradeStacks},{id:"battery-max",name:"BATTERY MAX",detail:`+${pe.batteryLive} / +${pe.batteryStatic} / +${pe.batteryDead} magazines`,max:pe.upgradeStacks},{id:"fast-surf",name:"FAST SURF",detail:"Shoot sooner",max:pe.upgradeStacks},{id:"pa-cycle",name:"PA CYCLE",detail:`Horn −${pe.paStep}s`,max:pe.upgradeStacks},{id:"live-feed",name:"LIVE FEED",detail:`Regen +${pe.regenStep}`,max:pe.upgradeStacks}];function mn(n,e,t){return Math.max(e,Math.min(t,n))}function ua(n){const e=(n==null?void 0:n.mods)||{},t=e.surf||0;return{...pe,clickerMag:pe.clickerMag+(e.clickerMag||0)+(e.batteryLive||0),scatterMag:pe.scatterMag+(e.batteryStatic||0),phaserMag:pe.phaserMag+(e.batteryDead||0),staticPellets:pe.staticPellets+(e.staticPellets||0),phaserRange:pe.phaserRange+(e.phaserRange||0),deadDrain:Math.max(8,pe.deadDrain-(e.deadDrain||0)),liveRegen:pe.liveRegen+(e.liveRegen||0),liveCooldown:Math.max(.11,+(pe.liveCooldown-t*pe.surfLive).toFixed(2)),staticCooldown:Math.max(.32,+(pe.staticCooldown-t*pe.surfStatic).toFixed(2)),phaserCooldown:Math.max(.3,+(pe.phaserCooldown-t*pe.surfPhaser).toFixed(2)),paCooldown:Math.max(8,pe.paCooldown-(e.paCut||0))}}function Rr(n){const e=ua(n);return{LIVE:e.clickerMag,STATIC:e.scatterMag,DEAD_AIR:e.phaserMag}}function rs(){return Rr()}function Os(){return{channel:"LIVE",signal:pe.signalMax,health:pe.healthMax,fireCooldown:0,hurtTimer:0,batteries:rs(),level:1,xp:0,pending:0,mods:{}}}function Ac(n){return n==="Digit1"||n==="Numpad1"?"LIVE":n==="Digit2"||n==="Numpad2"?"STATIC":n==="Digit3"||n==="Numpad3"?"DEAD_AIR":null}function qg(n,e){const t=Math.max(0,jn.indexOf(n)),i=e>=0?1:-1;return jn[(t+i+jn.length)%jn.length]}function Zg(n,e){return e==="LIVE"?!0:n.signal>=pe.minDrainSignal}function Kg(n,e){return jn.includes(e)?n.channel===e?{state:n,result:"same"}:Zg(n,e)?{state:{...n,channel:e},result:"ok"}:{state:n,result:"denied"}:{state:n,result:"invalid"}}function jg(n,e){let{channel:t,signal:i,fireCooldown:r,hurtTimer:s}=n,a=!1;r=Math.max(0,r-e),s=Math.max(0,s-e);const o=ua(n);if(t==="LIVE")i=Math.min(pe.signalMax,i+o.liveRegen*e);else{const c=t==="STATIC"?pe.staticDrain:o.deadDrain;i-=c*e,i<=0&&(i=0,t="LIVE",a=!0)}return{state:{...n,channel:t,signal:i,fireCooldown:r,hurtTimer:s},forced:a}}function Gu(n){var e;return(e=pe.speed[n])!=null?e:pe.speed.LIVE}function $g(n,e){var i;const t=(i=Rr(n)[e])!=null?i:0;return!n.batteries||n.batteries[e]==null?t:n.batteries[e]}function ia(n,e){const t=ua(e);return n==="LIVE"?{kind:"hitscan",name:"CLICKER",pellets:1,spread:0,damage:pe.liveDamage,range:pe.liveRange,falloff:pe.liveFalloff,cooldown:t.liveCooldown,cost:1,phases:!1}:n==="STATIC"?{kind:"spread",name:"SCATTER",pellets:t.staticPellets,spread:pe.staticSpread,damage:pe.staticPellet,range:pe.staticRange,falloff:pe.staticFalloff,cooldown:t.staticCooldown,cost:1,phases:!1}:n==="DEAD_AIR"?{kind:"phase",name:"PHASER",pellets:1,spread:0,damage:pe.phaserDamage,range:t.phaserRange,falloff:pe.phaserFalloff,cooldown:t.phaserCooldown,cost:1,phases:!0}:{kind:"none",name:"",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0,cost:0,phases:!1}}function Rc(n){const e=ia(n.channel,n);if(n.health<=0)return{state:n,profile:e,fired:!1,reason:"dead"};if(e.kind==="none")return{state:n,profile:e,fired:!1,reason:"none"};if(n.fireCooldown>0)return{state:n,profile:e,fired:!1,reason:"wait"};const t=$g(n,n.channel);if(t<e.cost)return{state:n,profile:e,fired:!1,reason:"dry"};const i={...n.batteries||rs(),[n.channel]:t-e.cost};return{state:{...n,batteries:i,fireCooldown:e.cooldown},profile:e,fired:!0,reason:"ok"}}function Wu(n,e={}){const t=Rr(n),i={...n.batteries||rs()};let r=0;for(const s of jn){const a=e[s]||0;if(a<=0)continue;const o=mn(i[s]+a,0,t[s]);r+=o-i[s],i[s]=o}return{state:{...n,batteries:i},gained:r}}function Pi(n){return{...n,batteries:rs()}}function Jg(n){const e={LIVE:pe.paRefund,STATIC:pe.paRefund,DEAD_AIR:pe.paRefund};return jn.includes(n.channel)&&(e[n.channel]+=pe.paRefundFocus),Wu(n,e)}function Xu(n){return n>=pe.maxLevel?0:pe.xpBase+(Math.max(1,n)-1)*pe.xpStep}function Qg(n){const e=Xu((n==null?void 0:n.level)||1);return e?mn(((n==null?void 0:n.xp)||0)/e,0,1):1}function Vr(n,e){const t=Math.max(0,e||0);if(t<=0)return{state:n,leveled:0};let i=n.level||1,r=n.xp||0,s=n.pending||0;if(i>=pe.maxLevel)return{state:n,leveled:0};r+=t;let a=0;for(;i<pe.maxLevel;){const o=Xu(i);if(!(o>0)||r<o)break;r-=o,i+=1,s+=1,a+=1}return i>=pe.maxLevel&&(r=0),{state:{...n,level:i,xp:r,pending:s},leveled:a}}function e_(n,e){const t={...n||{}};return e==="clicker-mag"?t.clickerMag=(t.clickerMag||0)+pe.magClicker:e==="scatter-fan"?t.staticPellets=(t.staticPellets||0)+pe.pelletStep:e==="phaser-reach"?t.phaserRange=(t.phaserRange||0)+pe.phaserStep:e==="quiet-air"?t.deadDrain=(t.deadDrain||0)+pe.drainStep:e==="battery-max"?(t.batteryLive=(t.batteryLive||0)+pe.batteryLive,t.batteryStatic=(t.batteryStatic||0)+pe.batteryStatic,t.batteryDead=(t.batteryDead||0)+pe.batteryDead):e==="fast-surf"?t.surf=(t.surf||0)+1:e==="pa-cycle"?t.paCut=(t.paCut||0)+pe.paStep:e==="live-feed"&&(t.liveRegen=(t.liveRegen||0)+pe.regenStep),t[e]=((n==null?void 0:n[e])||0)+1,t}function Za(n){const e=Hu.filter(s=>{var a;return(((a=n==null?void 0:n.mods)==null?void 0:a[s.id])||0)<s.max}),t=Math.min(3,e.length),i=e.length?((n==null?void 0:n.level)||1)%e.length:0,r=[];for(let s=0;s<t;s++)r.push(e[(i+s)%e.length]);return r}function t_(n,e){var c,l;const t=Hu.find(u=>u.id===e);if(!t||(n.pending||0)<=0)return{state:n,applied:!1};if((((c=n.mods)==null?void 0:c[e])||0)>=t.max)return{state:n,applied:!1};const i=e_(n.mods,e),r={...n,mods:i,pending:n.pending-1},s=Rr(n),a=Rr(r),o={...n.batteries||rs()};for(const u of jn){const h=(l=o[u])!=null?l:s[u];o[u]=Math.min(a[u],h+Math.max(0,a[u]-s[u]))}return{state:{...r,batteries:o},applied:!0,upgrade:t}}function n_(n){return{id:"drop-"+n.id,kind:"battery",x:n.x,z:n.z,amounts:{LIVE:pe.dropLive,STATIC:pe.dropStatic,DEAD_AIR:pe.dropDead},cloaked:!1,taken:!1}}function Yu(n){const e={LIVE:pe.padSide,STATIC:pe.padSide,DEAD_AIR:pe.padSide};return jn.includes(n)&&(e[n]=pe.padFocus),e}function i_(n,e){return n!=null&&n.pad?{...n,taken:!0,respawnAt:(e||0)+pe.padRespawn}:{...n,taken:!0}}function r_(n,e){let t=!1;const i=n.map(r=>!r.pad||!r.taken||r.respawnAt==null||e<r.respawnAt?r:(t=!0,{...r,taken:!1,respawnAt:null}));return t?i:n}function s_(n,e){var t;if(!n)return"";if(n.kind==="signal")return"SIGNAL CACHE";if(n.kind==="health")return"AID KIT";if(n.kind==="battery"&&n.pad){const i=(t=Yu(e)[e])!=null?t:pe.padFocus;return`${ia(e,null).name} +${i}`}return n.kind==="battery"?"BATTERY":""}function Ka(n,e,t,i){if(!(e>=0)||e>t||t<=0)return 0;const r=e/t;return n*(1-i*r*r)}function ra(n,e){return{...n,signal:mn(n.signal+e,0,pe.signalMax)}}function a_(n,e){return{...n,health:mn(n.health+e,0,pe.healthMax)}}function o_(n,{distance:e,channel:t,burst:i}){const r=t==="STATIC"||e<=pe.aggressiveRange||!!i,s=r?pe.aggressiveKillSignal:pe.cleanKillSignal;return{state:ra(n,s),amount:s,aggressive:r}}function ja(n,e){if(n.hurtTimer>0||n.health<=0)return{state:n,hit:!1,dead:n.health<=0};const t=Math.max(0,n.health-e);return{state:{...n,health:t,hurtTimer:pe.hurtIframes},hit:!0,dead:t<=0}}function l_(n,e){return!(!n||n.floor||n.maxY!=null&&n.maxY<.3||n.minY!=null&&n.minY>1.65||n.phaseGate&&e==="DEAD_AIR")}function Yo(n,e,t,i,r){for(const s of i){if(!l_(s,r))continue;const a=mn(n,s.minX,s.maxX),o=mn(e,s.minZ,s.maxZ),c=n-a,l=e-o;if(c*c+l*l<t*t)return s}return null}function c_(n,e,t,i,r,s,a){let o=n+t;Yo(o,e,r,s,a)&&(o=n);const c=e+i;return Yo(o,c,r,s,a)?{x:o,z:e}:{x:o,z:c}}function u_(n,e,t,i,r){let s=n,a=e;for(let o=0;o<4;o++){const c=Yo(s,a,t,i,r);if(!c)break;const l=mn(s,c.minX,c.maxX),u=mn(a,c.minZ,c.maxZ);let h=s-l,d=a-u;const f=Math.hypot(h,d);if(f<1e-5){const m=s-c.minX,_=c.maxX-s,g=a-c.minZ,p=c.maxZ-a,w=Math.min(m,_,g,p);w===m?s=c.minX-t-.01:w===_?s=c.maxX+t+.01:w===g?a=c.minZ-t-.01:a=c.maxZ+t+.01}else{const m=t-f+.01;s+=h/f*m,a+=d/f*m}}return{x:s,z:a}}function qu(n,e,t,i,r,s,a,o){const c=Math.hypot(t,i),l=Math.max(1,Math.ceil(c/.25));let u=n,h=e;for(let f=0;f<l;f++){const m=c_(u,h,t/l,i/l,r,s,a);u=m.x,h=m.z}const d=u_(u,h,r,s,a);return o?{x:mn(d.x,o.minX,o.maxX),z:mn(d.z,o.minZ,o.maxZ)}:d}function pl(n,e,t,i,r,s,a,o,c,l){const u=a-n,h=o-e,d=c-t,f=u*i+h*r+d*s,m=u*u+h*h+d*d-f*f,_=l*l;if(m>_)return null;const g=Math.sqrt(Math.max(0,_-m)),p=f-g,w=f+g;return p>=0?p:w>=0?w:null}function h_(n,e,t,i,r,s,a,o){let c=0,l=o;const u=[[n,i,a.minX,a.maxX],[e,r,a.minY,a.maxY],[t,s,a.minZ,a.maxZ]];for(const[d,f,m,_]of u){if(Math.abs(f)<1e-8){if(d<m||d>_)return null;continue}let g=(m-d)/f,p=(_-d)/f;if(g>p){const w=g;g=p,p=w}if(g>c&&(c=g),p<l&&(l=p),l<c)return null}const h=c>=0?c:l;return h<0||h>o?null:h}function ml(n,e,t,i,r,s,a,o){let c=null,l=a;for(const u of o){if(u.noShoot)continue;const h=h_(n,e,t,i,r,s,u,l);h!=null&&h<l&&(l=h,c={t:h,collider:u,x:n+i*h,y:e+r*h,z:t+s*h})}return c}function Cc(n,e){if(!n.alive)return{...n,visible:!0,exposed:!1,hittable:!1};if(!n.cloaked)return{...n,visible:!0,exposed:e==="STATIC",hittable:!0};const t=e==="STATIC"||n.reveal>0;return{...n,visible:t,exposed:t,hittable:t}}function Pc(n,e,t){if(!n.cloaked||!n.alive)return Cc(n,t);let i=n.reveal||0;return t==="STATIC"?i=pe.revealDuration:i=Math.max(0,i-e),Cc({...n,reveal:i},t)}function f_(n,e,t,i,r,s={}){const a=s.phase?r.filter(u=>!u.phaseGate):r;let o=t,c=null;for(const u of i){if(!u.alive||!u.hittable)continue;const h=[{y:(u.y||0)+1.62,r:.26,weak:!0},{y:(u.y||0)+.98,r:.46,weak:!1}];for(const d of h){const f=pl(n.x,n.y,n.z,e.x,e.y,e.z,u.x,d.y,u.z,d.r);f!=null&&f>.02&&f<o&&(o=f,c={kind:"enemy",id:u.id,t:f,weak:d.weak,x:n.x+e.x*f,y:n.y+e.y*f,z:n.z+e.z*f})}}const l=ml(n.x,n.y,n.z,e.x,e.y,e.z,o,a);return l&&l.t<o?{kind:"world",t:l.t,x:l.x,y:l.y,z:l.z,id:l.collider.id}:c}function d_(n,e){const t=n.lastHitAt!=null&&e-n.lastHitAt<=pe.burstWindow;return{enemy:{...n,lastHitAt:e},burst:t}}function p_(n,{weak:e,damage:t}){if(!n.alive||!n.hittable||t<=0)return{enemy:n,dealt:0,killed:!1};let i=t;e&&n.exposed&&(i*=pe.weakMult);const r=n.hp-i,s=r<=0;return{enemy:{...n,hp:s?0:r,hits:(n.hits||0)+1,alive:!s,hittable:!s&&n.hittable},dealt:i,killed:s}}function m_(n,e,t,i,r,s){const a=[],o=Math.max(0,i|0);for(let c=0;c<o;c++){const l=o===1&&r===0?0:(s()*2-1)*r,u=o===1&&r===0?0:(s()*2-1)*r,h=n.x+e.x*l+t.x*u,d=n.y+e.y*l+t.y*u,f=n.z+e.z*l+t.z*u,m=Math.hypot(h,d,f)||1;a.push({x:h/m,y:d/m,z:f/m})}return a}function Zu(n,e,t,i,r,s,a){const o=i-n,c=r-e,l=s-t,u=Math.hypot(o,c,l);return u<.001?!0:ml(n,e,t,o/u,c/u,l/u,Math.max(0,u-.25),a)==null}function g_(n,e){if(!e||e.taken)return{state:n,pickup:e,took:!1};if(e.kind==="signal")return{state:ra(n,e.amount),pickup:{...e,taken:!0},took:!0};if(e.kind==="health")return n.health>=pe.healthMax?{state:n,pickup:e,took:!1}:{state:a_(n,e.amount),pickup:{...e,taken:!0},took:!0};if(e.kind==="battery"){const t=e.pad?Yu(n.channel):e.amounts||{},i=Wu(n,t);return i.gained<=0?{state:n,pickup:e,took:!1}:{state:i.state,pickup:{...e,taken:!0},took:!0}}return{state:n,pickup:e,took:!1}}function __(n,e){return!n||n.taken?!1:n.cloaked?e==="STATIC":!0}function v_(n,e){const t=Math.hypot(n,e);return t<1e-6?{x:0,z:0}:{x:n/t,z:e/t}}function x_(n,e,t){var I;if(!n.alive)return{enemy:n,shot:null};if(n.dormant)return{enemy:{...n,hurt:Math.max(0,(n.hurt||0)-e)},shot:null};let i=Pc(n,e,t.channel);if(!i.alive)return{enemy:i,shot:null};const r=t.player.x-i.x,s=t.player.z-i.z,a=Math.hypot(r,s);if((a<18||t.player.forceAggro)&&(i.aggro=!0),i.cloaked&&a<3.05&&(i.reveal=Math.max(i.reveal||0,1.25)),i=Pc(i,0,t.channel),(i.slow||0)>0&&(i.slow=Math.max(0,i.slow-e)),(i.stun||0)>0)return i.stun-=e,i.windup=0,i.hurt=Math.max(0,(i.hurt||0)-e),a>.001&&i.aggro&&(i.yaw=Math.atan2(r,s)),{enemy:i,shot:null};const o=i.cloaked&&!i.visible;if(!i.aggro||o)return i.hurt=Math.max(0,(i.hurt||0)-e),{enemy:i,shot:null};const l=a<17&&Zu(i.x,1.45,i.z,t.player.x,(I=t.player.y)!=null?I:1.2,t.player.z,t.colliders);i.hurt=Math.max(0,(i.hurt||0)-e),i.cooldown=(i.cooldown||0)-e;let u=null;if(i.windup>0?(i.windup-=e,i.windup<=0&&(i.windup=0,l&&(u=M_(i,t,a)))):l&&i.cooldown<=0&&(i.windup=.28,i.cooldown=1.28+t.rng()*.45),i.windup>0)return a>.001&&(i.yaw=Math.atan2(r,s)),{enemy:i,shot:u};const h=a>.001?{x:r/a,z:s/a}:{x:0,z:1},d={x:-h.z,z:h.x};i.strafeT=(i.strafeT||0)-e,i.strafeT<=0&&(i.strafeSign=(i.strafeSign||1)*-1,i.strafeT=.75+t.rng()*1.05);let f=d.x*i.strafeSign*.9,m=d.z*i.strafeSign*.9;if(a>10.2?(f+=h.x,m+=h.z):a<5.2&&(f-=h.x*.85,m-=h.z*.85),t.allies)for(const E of t.allies){if(!E.alive||E.id===i.id)continue;const M=i.x-E.x,T=i.z-E.z,A=Math.hypot(M,T);A<1.15&&A>.001&&(f+=M/A*1.4,m+=T/A*1.4)}const _=v_(f,m),g=(i.slow||0)>0?.35:1,p=Gu("STATIC")*.62*(i.hurt>0?.25:1)*g;let w=_.x*p*e,b=_.z*p*e;const y=qu(i.x,i.z,w,b,.42,t.colliders,"LIVE",null);let O=y.x,P=y.z;const C=Xg[i.id];return C&&(O<C.minX||O>C.maxX||P<C.minZ||P>C.maxZ)&&(O=i.x,P=i.z),i.x=O,i.z=P,a>.001&&(i.yaw=Math.atan2(r,s)),{enemy:i,shot:u}}function M_(n,e,t){var h;const i=n.x,r=1.32,s=n.z,a=e.player.x-i+(e.rng()-.5)*.35,o=((h=e.player.y)!=null?h:1.15)-r+(e.rng()-.5)*.12,c=e.player.z-s+(e.rng()-.5)*.35,l=Math.hypot(a,o,c)||1,u=14.5;return{x:i,y:r,z:s,vx:a/l*u,vy:o/l*u,vz:c/l*u,damage:pe.boltDamage,life:2.1,dist:t}}function Ku(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new kt;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in s){const h=Dc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const m=Dc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function Dc(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new $t(a,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){const _=u.getComponent(d,m);o.setComponent(d+h,m,_)}}else a.set(u.array,c);c+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function ur(n,e,t,i,r){const s=-r/2,a=r/2,o=[[-n/2,s,e/2],[n/2,s,e/2],[n/2,s,-e/2],[-n/2,s,-e/2],[-t/2,a,i/2],[t/2,a,i/2],[t/2,a,-i/2],[-t/2,a,-i/2]],c=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],l=[],u=[];for(const d of c){const[f,m,_,g]=d.map(p=>o[p]);l.push(...f,...m,..._,...f,..._,...g),u.push(0,0,1,0,1,1,0,0,1,1,0,1)}const h=new kt;return h.setAttribute("position",new bt(l,3)),h.setAttribute("uv",new bt(u,2)),h.computeVertexNormals(),h}function $a(n,e=24){const t=n.map(([r,s])=>new Re(r,s)),i=new ti(t,e);return i.computeVertexNormals(),i}function tt(n,e,t=0,i=0,r=0){const s=new re(n,e);return s.position.set(t,i,r),s.castShadow=!0,s.receiveShadow=!0,s}function Ja(n){return Ku(n,!1)}const y_=[[.02,.2],[.1,.175],[.148,.11],[.164,.04],[.158,-.03],[.132,-.09],[.09,-.135],[.04,-.158]],S_=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],E_=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];let Hr=null;function gl(){if(Hr)return Hr;const n=[],e=new Lt(.046,12,10);e.scale(1.5,.75,1.45),e.translate(0,-.575,.02),n.push(e);for(let u=0;u<4;u++){const h=-.042+u*.028,d=.05-Math.abs(u-1.5)*.006,f=.28+(u===0||u===3?.12:0),m=new pt(.011,.013,d,6);m.translate(0,-d*.5,0),m.rotateX(.16),m.translate(h,-.62,.05);const _=new pt(.008,.011,d*.82,6);_.translate(0,-d*.38,0),_.rotateX(f),_.translate(h,-.62-d*.7,.055),n.push(m,_)}const t=new pt(.009,.011,.04,6);t.translate(0,-.02,0),t.rotateZ(.85),t.translate(.048,-.59,.015);const i=new pt(.007,.009,.028,6);i.translate(0,-.014,0),i.rotateZ(1.15),i.rotateX(.25),i.translate(.062,-.6,.03),n.push(t,i);const r=new He(.1,.025,.2);r.translate(0,-.012,.02);const s=new He(.088,.038,.13);s.translate(0,.016,-.005);const a=[],o=new He(.05,.055,.16);o.translate(0,-.56,.1),a.push(o);const c=new He(.03,.03,.07);c.translate(0,-.545,.16),a.push(c);const l=new He(.038,.07,.04);l.translate(0,-.61,.04),a.push(l),Hr={helmet:$a(y_,36),torso:$a(S_,32),robe:$a(E_,36),visor:new Lt(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:ur(.34,.2,.48,.26,.4),abdomen:ur(.3,.18,.34,.2,.18),pelvis:ur(.32,.2,.28,.18,.14),pec:ur(.15,.1,.17,.12,.2),shoulder:ur(.1,.1,.14,.12,.08),thigh:new pt(.055,.072,.34,12),shin:new pt(.04,.055,.32,12),foot:Ja([r,s]),upper:new pt(.04,.05,.26,12),forearm:new pt(.03,.04,.22,12),hand:Ja(n),gun:Ja(a),collar:new pt(.07,.09,.08,8),joint:new Lt(1,16,12),skirt:ur(.34,.16,.5,.22,.62),tabard:new He(.22,.58,.045),stole:new He(.09,.5,.04),muzzle:new He(.028,.028,.04),seam:new He(.2,.028,.02)};for(const u of Object.values(Hr))if(!(!(u!=null&&u.index)||u.attributes.tangent||!u.attributes.uv||!u.attributes.normal))try{u.computeTangents()}catch(h){}return Hr}const qo=[];let Zo=1;const w_=ft.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );","vec4 envMapColor = sampleProbe( envMapRotation * worldNormal, 1.0 );").replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );","vec4 envMapColor = sampleProbe( envMapRotation * reflectVec, roughness );");function b_(n,e,t){n.envMap=e||null,n.envMapIntensity=e?1.15:.72,!(!e||!t)&&(n.customProgramCacheKey=()=>"visor-dual-probe",n.onBeforeCompile=i=>{i.uniforms.courtMap={value:t},i.uniforms.probeMix={value:Zo},n.userData.probeShader=i,i.fragmentShader=i.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`#ifdef USE_ENVMAP
uniform sampler2D courtMap;
uniform float probeMix;
vec4 sampleProbe(vec3 dir, float roughness) {
  if (probeMix >= 0.999) return textureCubeUV(courtMap, dir, roughness);
  if (probeMix <= 0.001) return textureCubeUV(envMap, dir, roughness);
  return mix(textureCubeUV(envMap, dir, roughness), textureCubeUV(courtMap, dir, roughness), probeMix);
}
#endif
${w_}`)},qo.push(n))}let Qa=null;function ju(n){if(!Qa){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d"),r=i.createRadialGradient(32,32,2,32,32,31);r.addColorStop(0,"rgba(0,0,0,0.48)"),r.addColorStop(.5,"rgba(0,0,0,0.2)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,64,64);const s=new Si(t);s.colorSpace=Qt,Qa=new gt({map:s,transparent:!0,depthWrite:!1})}const e=new re(new _i(n,24),Qa);return e.rotation.x=-Math.PI/2,e.position.y=.025,e.castShadow=!1,e.receiveShadow=!1,e}function Ni(n,e=0,t=0){return n.userData.rest=e,n.userData.restI=t,n.emissive=new ot(e),n.emissiveIntensity=t,n}function Ic(n,e){const t=n.shinGrime.clone();return t.wrapS=Fn,t.offset.x=e,Ni(new Wt({map:t,roughness:.96,metalness:.02,envMapIntensity:.14}))}function $u(n,e){const t=(e==null?void 0:e.aisle)||null,i=(e==null?void 0:e.court)||null,r=Ni(new Ha({map:n.pearl,normalMap:n.pearlNormal,roughnessMap:n.pearlRough,roughness:.85,metalness:.02,clearcoat:.58,clearcoatRoughness:.24,envMapIntensity:.36}));r.normalScale.set(.45,.45);const s=Ni(new Wt({map:n.pearlWorn,normalMap:n.pearlNormal,roughnessMap:n.pearlRough,roughness:1,metalness:.02,envMapIntensity:.22}));s.normalScale.set(.65,.65);const a=Ni(new Wt({map:n.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),o=Ni(new Ha({color:461070,roughness:.035,metalness:.12,clearcoat:1,clearcoatRoughness:.03,iridescence:0,ior:1.55,reflectivity:1}));b_(o,t,i),o.polygonOffset=!0,o.polygonOffsetFactor=-2,o.polygonOffsetUnits=-2;const c=Ni(new Ha({map:n.cloth,normalMap:n.clothNormal,roughnessMap:n.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new ot(16183784),envMapIntensity:.32}));c.normalScale.set(.4,.4);const l=Ni(new Wt({map:n.gold,normalMap:n.goldNormal,roughnessMap:n.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);l.normalScale.set(.35,.35);const u=new gt({color:16757066}),h=Ic(n,0),d=Ic(n,.17);return{pearl:r,worn:s,joint:a,visor:o,cloth:c,gold:l,amber:u,grime:h,grimeR:d}}function zs(n,e,t,i,r){const s=tt(gl().joint,n,t,i,r);return s.scale.setScalar(e),s}function pi(n,e,t=16774894){for(const i of n)e>.02?(i.emissive.setHex(t),i.emissiveIntensity=e):(i.emissive.setHex(i.userData.rest||0),i.emissiveIntensity=i.userData.restI||0)}function T_(n,e={}){const t=new _t,i=gl(),r=$u(n,e.probes),s=[],a=tt(i.torso,r.pearl),o=tt(new pt(.188,.188,.048,18),r.joint,0,1.02,0),c=tt(i.collar,r.joint,0,1.5,0),l=new _t;l.position.set(0,1.66,0);const u=tt(i.helmet,r.pearl);u.scale.set(1.06,.96,1.08);const h=tt(new Lt(.172,40,24),r.visor,0,-.045,.168);h.scale.set(1.18,1.14,.36);const d=tt(new Lt(.026,12,8),r.pearl,0,.148,.12);d.scale.set(1,.65,.5);const f=tt(i.seam,r.amber,0,-.02,.185);f.visible=!1,f.castShadow=!1,l.add(u,h,d,f);const m=tt(new He(.32,.22,.028),r.pearl,0,1.3,.22);m.castShadow=!1;const _=tt(new Lt(.14,14,10),r.pearl,0,.74,0);_.scale.set(1.65,.48,1.05),_.castShadow=!1,s.push(a,o,c,l,m,_);function g(E,M){const T=new _t;if(M){T.add(zs(r.joint,.055,0,0,0)),T.add(tt(i.upper,r.pearl,0,-.16,0)),T.add(zs(r.joint,.042,0,-.3,0)),T.add(tt(i.forearm,r.joint,0,-.42,0));const A=R_(r.joint,E);T.add(A.rig),T.userData.digits=A.digits}else{T.add(zs(r.joint,.058,0,0,0)),T.add(tt(i.thigh,r.pearl,0,-.2,0)),T.add(zs(r.joint,.048,0,-.38,0));const A=tt(new Lt(.046,10,8),r.pearl,0,-.38,.042);A.scale.set(1.05,.8,.5),A.castShadow=!1,T.add(A);const L=tt(i.shin,r.worn,0,-.56,0);L.rotation.y=Math.PI,L.scale.set(1.12,1,.86),T.add(L);const W=tt(new He(.078,.24,.016),E<0?r.grime:r.grimeR,0,-.58,.058);W.castShadow=!1,T.add(W);const V=tt(i.foot,r.worn,0,-.76,.03);T.add(V)}return T}const p=g(-1,!1);p.position.set(-.12,.8,0),p.rotation.z=.08;const w=g(1,!1);w.position.set(.12,.8,0),w.rotation.z=-.08;const b=g(-1,!0);b.position.set(-.32,1.4,0),b.rotation.z=.42;const y=g(1,!0);y.position.set(.32,1.4,0),y.rotation.z=-.36;const O=tt(i.gun,r.joint,.045,.02,.02),P=tt(i.muzzle,r.amber,.045,-.525,.22);P.castShadow=!1,y.add(O,P);const C=ju(.48);t.add(...s,p,w,b,y,C);let I=null;if(e.vestment){const E=tt(i.tabard,r.cloth,0,.92,.16),M=tt(new He(.28,.42,.04),r.cloth,0,.95,-.14),T=tt(i.stole,r.gold,0,1.16,.18),A=tt(new ti([new Re(.18,0),new Re(.32,.04),new Re(.24,.1)],24),r.cloth,0,1.4,0),L=_r(Ju(new ti([new Re(.2,.02),new Re(.36,.2),new Re(.4,.46),new Re(.3,.74),new Re(.22,.96)],28),6,.016),r.cloth,0,.06,0);I=L,t.add(E,M,T,A,L)}return Qu(t),{group:t,weak:f,lLeg:p,rLeg:w,lArm:b,rArm:y,muzzle:P,shadow:C,cloth:I,lDigits:b.userData.digits,rDigits:y.userData.digits,flashMats:[r.pearl,r.worn,r.joint,r.visor,r.cloth,r.gold,r.grime,r.grimeR],flash:0}}function A_(n,e){const t=new _t,i=$u(n,e),r=gl(),s=_r(Ju(r.robe,8,.04),i.cloth),a=_r(new ti([new Re(.26,0),new Re(.64,.05),new Re(.5,.14),new Re(.22,.2)],28),i.cloth,0,1.46,0),o=i.cloth.clone();o.side=jt;const c=_r(new pt(.3,.98,1.78,18,1,!0,Math.PI-1.25,2.5),o,0,.9,-.14);c.castShadow=!1;const l=tt(new ti([new Re(.12,0),new Re(.22,.06),new Re(.16,.16)],24),i.cloth,0,1.68,0),u=tt(new en(.58,.05,8,28),i.cloth,0,.08,0);u.rotation.x=Math.PI/2,u.castShadow=!1;const h=tt(new en(.63,.018,8,32),i.gold,0,.05,0);h.rotation.x=Math.PI/2;const d=tt(new en(.38,.022,8,28),i.gold,0,1.1,0);d.rotation.x=Math.PI/2;const f=i.cloth.clone();f.side=jt;const m=[],_=[[0,.7,.06,1.2,.075],[.82,.36,.08,1.16,.068],[-.82,.36,.08,1.16,.068],[1.6,.4,.08,1.12,.06],[-1.6,.4,.08,1.12,.06],[Math.PI,.55,.1,1.08,.055]];for(const[v,D,F,B,$]of _){const Me=_r(Gr(v,D,F,B,$),f);Me.castShadow=!1,m.push(Me),t.add(Me)}for(const v of[-.36,.36]){const D=tt(Gr(v,.045,.08,1.18,.09),i.gold);D.castShadow=!1,t.add(D)}const g=_r(Gr(0,.95,1.16,1.5,.055,6),f);g.castShadow=!1;const p=tt(Gr(0,1.05,1.12,1.17,.07,3),i.gold);p.castShadow=!1;const w=tt(Gr(0,.1,.42,1.14,.095,8),i.gold);w.castShadow=!1;const b=tt(new Lt(.045,12,10),i.gold,0,.48,.58),y=new _t;y.position.set(0,2.05,0),y.scale.setScalar(1.18);const O=tt(r.helmet,i.pearl),P=tt(new Lt(.028,12,8),i.pearl,0,.15,.11);P.scale.set(1,.62,.48);const C=tt(new Lt(.175,40,24),i.visor,0,-.04,.162);C.scale.set(1.22,1.2,.38);const I=tt(new He(.22,.03,.018),i.amber,0,-.02,.175);I.visible=!1,I.castShadow=!1,y.add(O,P,C,I);const E=new Wt({color:15123818,map:n.gold,normalMap:n.goldNormal,roughnessMap:n.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),M=new re(new en(.58,.04,12,48),E);M.position.set(0,2.22,-.16);const T=new re(new en(.4,.016,8,36),E);M.add(T);const A=tt(new Lt(.032,10,8),i.gold,.58,0,0);M.add(A);const L=i.cloth.clone();L.side=jt;function W(v){const D=new _t,F=tt(new pt(.075,.13,.52,14),i.cloth,0,.26,0),B=tt(new pt(.22,.08,.46,14,1,!0),L,0,.2,0);B.castShadow=!1;const $=tt(new en(.2,.016,8,16),i.gold,0,.44,0);$.rotation.x=Math.PI/2;const Me=D_(i.pearl,i.amber,v);return D.add(F,B,$,Me.rig),D.position.set(v*.42,1.48,.02),{pivot:D,hand:Me.amber,digits:Me.digits}}const V=W(-1),q=W(1);for(const v of[1.42,1.28,1.14]){const D=tt(new en(.16,.01,8,22,Math.PI*.85),i.gold,0,v,.42);D.rotation.x=Math.PI/2,t.add(D)}const te=ju(.9);return t.add(s,c,a,l,u,h,d,g,p,w,b,y,M,V.pivot,q.pivot,te),t.position.set($r.x,0,$r.z),Qu(t),{group:t,halo:M,haloMat:E,seam:I,shadow:te,lArm:V.pivot,rArm:q.pivot,lHand:V.hand,rHand:q.hand,lDigits:V.digits,rDigits:q.digits,cloths:[s,c,a,g,...m],flashMats:[i.pearl,i.cloth,o,L,f,i.visor,i.gold],flash:0}}const Lc=new Map;function Bs(n,e,t){const i=`${n}:${e}:${t}`;let r=Lc.get(i);return r||(r=new pt(n,e,t,6),Lc.set(i,r)),r}function R_(n,e){const t=new _t,i=e<0;t.position.set(e*.012,-.5,i?.09:.045),t.rotation.x=i?-.62:-.22;const r=new Lt(.036,10,8);r.scale(2.35,.55,.72);const s=tt(r,n);s.castShadow=!1,t.add(s);const a=[],o=[-.074,-.025,.025,.074],c=[.09,.118,.106,.08];for(let f=0;f<4;f++){const m=new _t;m.position.set(o[f],-.02,.02);const _=c[f],g=tt(Bs(.009,.0125,_),n,0,-_*.48,0);g.castShadow=!1;const p=tt(new Lt(.012,8,6),n,0,-_*.92,0);p.castShadow=!1;const w=new _t;w.position.y=-_*.96;const b=_*.72,y=tt(Bs(.0065,.0095,b),n,0,-b*.46,0);y.castShadow=!1,w.add(y),m.add(g,p,w),t.add(m),a.push({knuckle:m,tip:w})}const l=new _t;l.position.set(e*.082,.004,.028),l.rotation.z=-e*1.15;const u=tt(Bs(.0085,.011,.052),n,0,-.028,0);u.castShadow=!1;const h=new _t;h.position.y=-.05;const d=tt(Bs(.006,.0085,.038),n,0,-.02,0);return d.castShadow=!1,h.add(d),l.add(u,h),t.add(l),a.push({knuckle:l,tip:h}),{rig:t,digits:a}}const C_=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];function P_(n){const e=C_;if(n<=e[0][1])return e[0][0];for(let t=1;t<e.length;t++)if(n<=e[t][1]){const i=(n-e[t-1][1])/(e[t][1]-e[t-1][1]);return e[t-1][0]+(e[t][0]-e[t-1][0])*i}return e[e.length-1][0]}function Gr(n,e,t,i,r,s=8){const a=new kt,o=[],c=[],l=[],u=2;for(let d=0;d<=s;d++){const f=d/s,m=t+(i-t)*f,_=P_(m)+r;for(let g=0;g<=u;g++){const p=n-e/2+e*g/u;o.push(Math.sin(p)*_,m,Math.cos(p)*_),c.push(g/u,f)}}const h=u+1;for(let d=0;d<s;d++)for(let f=0;f<u;f++){const m=d*h+f;l.push(m,m+h,m+1,m+1,m+h,m+h+1)}return a.setAttribute("position",new bt(o,3)),a.setAttribute("uv",new bt(c,2)),a.setIndex(l),a.computeVertexNormals(),a}function D_(n,e,t){const i=new _t;i.position.set(0,.58,.1);const r=new Lt(.055,12,8);r.scale(1.7,1.15,.4);const s=tt(r,n);s.castShadow=!1,i.add(s);const a=[],o=[-.058,-.02,.02,.058],c=[.09,.11,.1,.078];for(let m=0;m<4;m++){const _=new _t;_.position.set(o[m],.04,.02);const g=c[m],p=tt(new pt(.012,.014,g,6),n,0,g*.48,0);p.castShadow=!1;const w=new _t;w.position.y=g*.9;const b=g*.7,y=tt(new pt(.009,.012,b,6),n,0,b*.46,0);y.castShadow=!1,w.add(y),_.add(p,w),i.add(_),a.push({knuckle:_,tip:w})}const l=new _t;l.position.set(t*.078,-.006,.02),l.rotation.z=t*.85;const u=tt(new pt(.01,.012,.05,6),n,0,.028,0);u.castShadow=!1;const h=new _t;h.position.y=.05;const d=tt(new pt(.007,.01,.032,6),n,0,.016,0);d.castShadow=!1,h.add(d),l.add(u,h),i.add(l),a.push({knuckle:l,tip:h});const f=tt(new He(.09,.07,.014),e,0,.01,.04);return f.castShadow=!1,i.add(f),{rig:i,digits:a,amber:f}}function mi(n,e){for(let t=0;t<n.length;t++){const i=n[t],r=t===n.length-1?.55:1;i.knuckle.rotation.x=-e*r,i.tip.rotation.x=-e*.8*r}}function Uc(n,e,t=0,i=1){if(!n)return;const r=Array.isArray(n)?n:[n];for(const s of r)s!=null&&s.morphTargetInfluences&&(s.morphTargetInfluences[0]=Math.sin(e*.75+t)*.6*i,s.morphTargetInfluences[1]=Math.sin(e*.5+t+.8)*.4*i)}function I_(n){const e=n.attributes.position;let t=1/0,i=-1/0;for(let o=0;o<e.count;o++){const c=e.getY(o);c<t&&(t=c),c>i&&(i=c)}const r=Math.max(.001,i-t),s=new Float32Array(e.count*3),a=new Float32Array(e.count*3);for(let o=0;o<e.count;o++){const c=Math.pow(Math.max(0,(i-e.getY(o))/r),1.35);s[o*3]=c*.08,a[o*3+2]=c*.055}return n.morphAttributes.position=[new bt(s,3),new bt(a,3)],n}function _r(n,e,t=0,i=0,r=0){I_(n);const s=tt(n,e,t,i,r);return s.updateMorphTargets(),s}function Ju(n,e=7,t=.02){const i=n.clone(),r=i.attributes.position;for(let s=0;s<r.count;s++){const a=r.getX(s),o=r.getY(s),c=r.getZ(s),l=Math.hypot(a,c)||1,u=Math.atan2(a,c),h=.4+.6*Math.max(0,c/l),d=.4+.6*Math.min(1,Math.max(0,(1.35-o)/1.35)),f=Math.sin(u*e)*t*h*d;r.setXYZ(s,a+a/l*f,o,c+c/l*f)}return r.needsUpdate=!0,i.computeVertexNormals(),i.getAttribute("tangent")&&i.deleteAttribute("tangent"),i}function Qu(n){n.traverse(e=>{var i;const t=e.geometry;if(!(!e.isMesh||!((i=e.material)!=null&&i.normalMap)||!(t!=null&&t.index)||t.attributes.tangent)&&!(!t.attributes.uv||!t.attributes.normal))try{t.computeTangents()}catch(r){}})}function L_(n,e,t){qo.length=0;const i=new Map,r=new Set(na().map(l=>l.id));for(const l of[...Vu(),...na(),...Ks()]){const u=T_(e,{vestment:r.has(l.id),probes:t});u.group.position.set(l.x,0,l.z),u.group.visible=l.visible,u.death=0,u.died=!1,u.phase=Math.random()*Math.PI*2,u.prevX=l.x,u.prevZ=l.z,n.add(u.group),i.set(l.id,u)}const s=A_(e,t);s.died=!1,s.death=0,s.pose=0,n.add(s.group);const a=new Lt(.08,7,5),o=new gt({color:16756768}),c=[];for(let l=0;l<16;l++){const u=new re(a,o);u.visible=!1,u.frustumCulled=!1,n.add(u),c.push(u)}return{setProbeBlend(l){Zo=Math.min(1,Math.max(0,(l- -17)/5));for(const u of qo){const h=u.userData.probeShader;h&&(h.uniforms.probeMix.value=Zo)}},reset(l){for(const u of l){const h=i.get(u.id);if(h){if(h.prevX=u.x,h.prevZ=u.z,h.group.position.set(u.x,0,u.z),h.group.rotation.set(0,0,0),h.group.scale.setScalar(1),h.flash=0,pi(h.flashMats,0),h.weak.visible=!1,!u.alive){h.died=!0,h.death=0,h.group.visible=!1;continue}h.death=0,h.died=!1,h.group.visible=u.visible}}},resetPriest(l){s.died=!1,s.death=0,s.pose=0,s.flash=0,s.group.visible=!0,s.group.rotation.set(0,0,0),s.group.position.set(l.x,0,l.z),s.halo.scale.setScalar(1),pi(s.flashMats,0),s.seam.visible=!1},syncPriest(l,u,h,d){if(!l.alive){s.died||(s.died=!0,s.death=1.05),s.death-=u;const C=1-Math.max(s.death,0)/1.05;s.group.visible=s.death>0,s.group.rotation.x=C*1.25,s.group.position.set(l.x,-C*.55,l.z),s.shadow.visible=!1,s.halo.scale.setScalar(Math.max(0,1-C)),s.seam.visible=!1,s.lArm.rotation.x=.9,s.rArm.rotation.x=.7,mi(s.lDigits,.85),mi(s.rDigits,.75),pi(s.flashMats,C<.45?(1-C/.45)*2.4:0);return}s.died=!1,s.death=0,s.group.visible=!0,s.group.rotation.set(0,l.yaw||0,Math.sin(h*.8)*.008);const f=Math.sin(h*1.15)*.015;s.group.position.set(l.x,f,l.z),s.shadow.visible=!0,s.shadow.position.y=.025-f,s.halo.rotation.z=h*.15;const m=l.phase==="rite",_=m?1.28:l.windup>0?.4:1.12,g=l.windup>0?-.85:m?-.25:-.12;s.lArm.rotation.set(g,0,_),s.rArm.rotation.set(g,0,-_),Uc(s.cloths,h,.2,1);const p=l.windup>0?.62:m?.1+Math.sin(h*2.2)*.04:.2+Math.sin(h*1.35)*.07;mi(s.lDigits,p),mi(s.rDigits,p);const w=!!l.haloVisible,b=w&&d==="STATIC";s.halo.visible=!0;const y=w?1+Math.sin(h*7)*.06:1;s.halo.scale.setScalar(y),s.haloMat.opacity=b?1:w?.96:.9,s.haloMat.emissiveIntensity=b?2.4:w?1.55:.85,s.seam.visible=!!l.exposed;const O=l.windup>0||l.phase==="rite";s.lHand.visible=O,s.rHand.visible=O;const P=O?1.45:1;s.lHand.scale.setScalar(P),s.rHand.scale.setScalar(P),l.hurt>0&&(s.flash=.2),s.flash=Math.max(0,s.flash-u),pi(s.flashMats,s.flash>0?s.flash/.2*2.6:0)},sync(l,u,h,d){for(const f of l){const m=i.get(f.id);if(!f.alive){m.died||(m.died=!0,m.death=.85),m.death-=u;const b=1-Math.max(m.death,0)/.85;m.group.visible=m.death>0,m.group.rotation.x=b*1.35,m.group.position.set(f.x,-b*.4,f.z),m.shadow.visible=!1,m.group.scale.setScalar(1),m.lArm.rotation.x=.5+b*.6,m.rArm.rotation.x=.3+b*.9,mi(m.lDigits,.8),mi(m.rDigits,.9),m.lLeg.rotation.x=-.25*b,m.rLeg.rotation.x=.4*b,m.weak.visible=!1,pi(m.flashMats,b<.4?(1-b/.4)*2.4:0);continue}m.died=!1,m.death=0,m.group.visible=!!f.visible;const _=Math.hypot(f.x-m.prevX,f.z-m.prevZ);m.prevX=f.x,m.prevZ=f.z;const g=Math.sin(h*1.4+m.phase)*(_>.004?.02:.012);m.group.rotation.set(0,f.yaw||0,Math.sin(h*1.1+m.phase)*.012),m.group.position.set(f.x,g,f.z),m.shadow.visible=!0,m.shadow.position.y=.025-g;const p=_>.004?Math.sin(h*8+m.phase):Math.sin(h*1.6+m.phase)*.15;if(m.lLeg.rotation.x=p*.7,m.rLeg.rotation.x=-p*.7,m.lArm.rotation.x=-p*.45,m.rArm.rotation.x=p*.25+(f.windup>0?-.95:-.06),m.weak.visible=!!f.exposed,f.hurt>0&&(m.flash=.16),m.flash=Math.max(0,m.flash-u),m.flash>0)pi(m.flashMats,m.flash/.16*2.8),m.group.scale.setScalar(1.035);else if(f.cloaked&&f.visible){const b=.22+Math.sin(h*9)*.1;pi(m.flashMats,b,16766888),m.group.scale.setScalar(1)}else pi(m.flashMats,0),m.group.scale.setScalar(1);m.muzzle.scale.setScalar(f.windup>0?1.8:1);const w=.16+Math.sin(h*1.35+m.phase)*.05;mi(m.lDigits,w),mi(m.rDigits,f.windup>0?.8:.4),m.cloth&&Uc(m.cloth,h,m.phase,.85),f.cloaked&&f.visible&&d!=="STATIC"&&f.reveal<.5&&(m.group.visible=Math.sin(h*46)>-.2)}},syncBolts(l){for(let u=0;u<c.length;u++){const h=c[u],d=l[u];if(!d){h.visible=!1;continue}h.visible=!0,h.position.set(d.x,d.y,d.z)}}}}const Nc=["seam","choir","veil"],yn={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},U_=2.05,N_=1.2,F_=2.62;function Fc(n){return n==="seam"?"LIVE · THE SEAM":n==="choir"?"STATIC · THE HALO":n==="veil"?"DEAD AIR · THE VEIL":""}function Oc(){return{id:"visor-priest",boss:!0,x:$r.x,y:$r.y,z:$r.z,yaw:0,hp:yn.hp,maxHp:yn.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:yn.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function O_(n,e){const t=Nc[n.riteIndex%Nc.length];n.phase="rite",n.rite=t,n.timer=yn.riteWindow,n.exposed=t==="seam",n.haloVisible=t==="choir",n.veilUp=t==="veil",n.windup=0,e.push({type:"announce",rite:t})}function eh(n){n.phase="recover",n.rite=null,n.exposed=!1,n.haloVisible=!1,n.veilUp=!1,n.windup=0,n.timer=yn.recover,n.riteIndex+=1}function z_(n,e,t){if(!n.alive||!n.active)return{priest:n,events:[]};const i=[],r={...n,hurt:Math.max(0,(n.hurt||0)-e),stun:Math.max(0,(n.stun||0)-e)};if(t&&t.player){const s=t.player.x-r.x,a=t.player.z-r.z;Math.hypot(s,a)>.05&&(r.yaw=Math.atan2(s,a))}return r.phase==="idle"?(r.timer-=e,r.timer<=0?O_(r,i):r.stun>0?r.windup=0:r.windup>0?(r.windup-=e,r.windup<=0&&(r.windup=0,r.shotCooldown=yn.shotGap,i.push({type:"shot"}))):(r.shotCooldown-=e,r.shotCooldown<=0&&(r.windup=yn.shotWindup))):r.phase==="rite"?(r.windup=0,r.timer-=e,r.timer<=0&&(i.push({type:"fail",rite:r.rite,damage:yn.failDamage}),eh(r))):r.phase==="recover"&&(r.windup=0,r.timer-=e,r.timer<=0&&(r.phase="idle",r.timer=yn.idle)),{priest:r,events:i}}function B_(n){return n>0?n*yn.armor:0}function k_(n,e){const t=B_(e);if(!n||!n.alive||t<=0)return{priest:n,dealt:0,killed:!1};const i=n.hp-t,r=i<=0;return{priest:{...n,hp:r?0:i,alive:!r,hurt:.22,phase:r?"dead":n.phase,veilUp:r?!1:n.veilUp,haloVisible:r?!1:n.haloVisible,exposed:r?!1:n.exposed,rite:r?null:n.rite},dealt:t,killed:r}}function zc(n,e){if(!n.alive||n.phase!=="rite")return{priest:n,broken:!1,dealt:0,killed:!1};if(!(n.rite==="seam"&&e.channel==="LIVE"&&e.weak&&!e.halo||n.rite==="choir"&&e.channel==="STATIC"&&e.halo||n.rite==="veil"&&e.channel==="DEAD_AIR"&&e.crossed))return{priest:n,broken:!1,dealt:0,killed:!1};const i=yn.breakDamage,r=n.hp-i;if(r<=0)return{priest:{...n,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:i,killed:!0};const a={...n,hp:r,hurt:.28,broken:(n.broken||0)+1};return eh(a),{priest:a,broken:!0,dealt:i,killed:!1}}function V_(n,e,t,i,r){if(!i||!i.alive||!i.hittable)return null;const s=[{y:N_,r:.62,weak:!1,halo:!1},{y:U_,r:.3,weak:!0,halo:!1}];i.haloVisible&&r==="STATIC"&&s.push({y:F_,r:.42,weak:!1,halo:!0});let a=null,o=t;for(const c of s){const l=pl(n.x,n.y,n.z,e.x,e.y,e.z,i.x,(i.y||0)+c.y,i.z,c.r);l==null||l<=.02||l>=o||(o=l,a={kind:"priest",id:i.id,t:l,weak:c.weak,halo:c.halo,x:n.x+e.x*l,y:n.y+e.y*l,z:n.z+e.z*l})}return a}const Bc=["listing","index","gate"],Sn={hp:480,armor:.2,breakDamage:72,failDamage:16,riteWindow:3.4,recover:2.05,idle:2.15,idleFirst:1.8,shotWindup:.62,shotGap:1.5,boltDamage:11,boltSpeed:13.2},H_=1.35,G_=.72,W_=2.2,X_=.28,Y_=2.95,q_=.48;function kc(n){return n==="listing"?"LIVE · THE LISTING":n==="index"?"STATIC · THE INDEX":n==="gate"?"DEAD AIR · THE GATE":""}function ks(){return{id:"directory-boss",boss:!0,x:Bi.x,y:Bi.y,z:Bi.z,yaw:0,hp:Sn.hp,maxHp:Sn.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:Sn.idleFirst,shotCooldown:.9,windup:0,stun:0,hurt:0,broken:0,active:!1}}function Z_(n,e){const t=Bc[n.riteIndex%Bc.length];n.phase="rite",n.rite=t,n.timer=Sn.riteWindow,n.exposed=t==="listing",n.haloVisible=t==="index",n.veilUp=t==="gate",n.windup=0,e.push({type:"announce",rite:t})}function th(n){n.phase="recover",n.rite=null,n.exposed=!1,n.haloVisible=!1,n.veilUp=!1,n.windup=0,n.timer=Sn.recover,n.riteIndex+=1}function K_(n,e,t){if(!n.alive||!n.active)return{boss:n,events:[]};const i=[],r={...n,hurt:Math.max(0,(n.hurt||0)-e),stun:Math.max(0,(n.stun||0)-e)};if(t&&t.player){const s=t.player.x-r.x,a=t.player.z-r.z;Math.hypot(s,a)>.05&&(r.yaw=Math.atan2(s,a))}return r.phase==="idle"?(r.timer-=e,r.timer<=0?Z_(r,i):r.stun>0?r.windup=0:r.windup>0?(r.windup-=e,r.windup<=0&&(r.windup=0,r.shotCooldown=Sn.shotGap,i.push({type:"shot"}))):(r.shotCooldown-=e,r.shotCooldown<=0&&(r.windup=Sn.shotWindup))):r.phase==="rite"?(r.windup=0,r.timer-=e,r.timer<=0&&(i.push({type:"fail",rite:r.rite,damage:Sn.failDamage}),th(r))):r.phase==="recover"&&(r.windup=0,r.timer-=e,r.timer<=0&&(r.phase="idle",r.timer=Sn.idle)),{boss:r,events:i}}function j_(n){return n>0?n*Sn.armor:0}function $_(n,e){const t=j_(e);if(!n||!n.alive||t<=0)return{boss:n,dealt:0,killed:!1};const i=n.hp-t,r=i<=0;return{boss:{...n,hp:r?0:i,alive:!r,hurt:.22,phase:r?"dead":n.phase,veilUp:r?!1:n.veilUp,haloVisible:r?!1:n.haloVisible,exposed:r?!1:n.exposed,rite:r?null:n.rite},dealt:t,killed:r}}function Vc(n,e){if(!n.alive||n.phase!=="rite")return{boss:n,broken:!1,dealt:0,killed:!1};if(!(n.rite==="listing"&&e.channel==="LIVE"&&e.weak&&!e.halo||n.rite==="index"&&e.channel==="STATIC"&&e.halo||n.rite==="gate"&&e.channel==="DEAD_AIR"&&e.crossed))return{boss:n,broken:!1,dealt:0,killed:!1};const i=Sn.breakDamage,r=n.hp-i;if(r<=0)return{boss:{...n,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:i,killed:!0};const a={...n,hp:r,hurt:.28,broken:(n.broken||0)+1};return th(a),{boss:a,broken:!0,dealt:i,killed:!1}}function J_(n,e,t,i,r){if(!i||!i.alive||!i.hittable)return null;const s=[{y:H_,r:G_,weak:!1,halo:!1},{y:W_,r:X_,weak:!0,halo:!1}];i.haloVisible&&r==="STATIC"&&s.push({y:Y_,r:q_,weak:!1,halo:!0});let a=null,o=t;for(const c of s){const l=pl(n.x,n.y,n.z,e.x,e.y,e.z,i.x,(i.y||0)+c.y,i.z,c.r);l==null||l<=.02||l>=o||(o=l,a={kind:"directory",id:i.id,t:l,weak:c.weak,halo:c.halo,x:n.x+e.x*l,y:n.y+e.y*l,z:n.z+e.z*l})}return a}const Cn={maxDist:16,cone:.3,stun:4.5,slow:4.2,cooldown:16,retune:4.5,retuneMult:1.45,radius:16,sprinklerRadius:12};function Q_({origin:n,dir:e,point:t,maxDist:i,cone:r,blocked:s}){const a=t.x-n.x,o=t.y-n.y,c=t.z-n.z,l=Math.hypot(a,o,c);if(!(l>.05)||l>i||s)return{aimed:!1,dist:l};const u=(a*e.x+o*e.y+c*e.z)/l;return{aimed:u>=Math.cos(r),dist:l,dot:u}}function ev(n,e,t=Cn.cooldown){const i=n.cooldownUntil||0;if(i>e)return{ok:!1,reason:"cooldown",cooldownUntil:i};const r=t>0?t:Cn.cooldown;return{ok:!0,cooldownUntil:e+r}}function tv(n,e,t,i){return n.map(r=>!r.alive||r.room!=="chapel"||Math.hypot(r.x-e.x,r.z-e.z)>t?r:{...r,stun:Math.max(r.stun||0,i),windup:0})}function nv(n,e,t,i){return n.map(r=>!r.alive||r.room!=="service"||Math.hypot(r.x-e.x,r.z-e.z)>t?r:{...r,slow:Math.max(r.slow||0,i),windup:0})}function iv(n,e){const t=new _t;t.position.set(.18,-.28,-.48),n.add(t);const i=new Wt({map:e.leather,normalMap:e.leatherNormal,roughnessMap:e.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});i.normalScale.set(.7,.7);const r=new Wt({map:e.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),s=new Wt({map:e.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new Wt({map:e.wood,normalMap:e.woodNormal,roughnessMap:e.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new Wt({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),c=new Wt({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),l=new gt({color:6813439}),u=new re(new He(.16,.055,.38),a);u.position.set(.02,-.02,.02);const h=new re(new He(.11,.02,.3),o);h.position.set(.02,.012,.03);const d=new re(new He(.07,.03,.04),s);d.position.set(.02,-.005,-.16),t.add(u,h,d);for(let ne=0;ne<2;ne++)for(let ae=0;ae<4;ae++){const Se=new re(new He(.028,.012,.03),c);Se.position.set(-.012+ne*.064,.026,.1-ae*.055),t.add(Se)}const f=new re(new He(.055,.028,.02),l);f.position.set(.02,-.004,-.2),t.add(f);const m=new re(new pt(.006,.006,.22,6),s);m.position.set(.07,.02,-.12),m.rotation.z=-.4,m.rotation.x=.5;const _=new re(new Lt(.012,8,6),s);_.position.set(.11,.1,-.2);const g=new _t;for(const ne of[-1,1]){const ae=new re(new pt(.007,.005,.16,6),s);ae.position.set(ne*.045,.03,-.16),ae.rotation.x=1.15,ae.rotation.z=ne*-.55;const Se=new re(new Lt(.012,8,6),s);Se.position.set(ne*.09,.07,-.22),g.add(ae,Se)}g.visible=!1;const p=new Wt({color:12963542,roughness:.22,metalness:.7,envMapIntensity:.45}),w=new re(new He(.012,.028,.46),p);w.position.set(.02,-.01,-.38);const b=new re(new He(.004,.008,.2),new gt({color:14015974}));b.position.set(.02,-.01,-.58);const y=new _t;y.add(w,b),y.visible=!1;const O=new Lt(.045,12,8);O.scale(1.2,.62,1.35);const P=new re(O,a);P.position.set(.02,-.02,-.15);const C=new re(O,a);C.position.set(.02,-.02,.19);const I=new re(new He(.018,.04,.2),o);I.position.set(-.068,-.03,.04);const E=I.clone();E.position.x=.108,t.add(m,_,g,y,P,C,I,E);for(let ne=0;ne<4;ne++){const ae=new re(new pt(.006,.006,.012,6),o);ae.rotation.x=Math.PI/2,ae.position.set(-.02+ne%2*.028,-.01,-.08-Math.floor(ne/2)*.02),t.add(ae)}const M=new gt({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:js,side:jt}),T=new _t;T.position.set(.02,-.004,-.24);const A=new re(new Ct(.22,.05),M),L=new re(new Ct(.22,.05),M);L.rotation.z=Math.PI/2;const W=new re(new Ct(.08,.08),M);T.add(A,L,W),T.visible=!1,t.add(T);const V=new Er(6813439,2.4,1.8,2);V.position.copy(f.position),t.add(V);const q=[];function te(ne,ae,Se){const De=new _t,Ge=new Lt(.046,14,10);Ge.scale(1.05,.48,1.35);const mt=new re(Ge,i),$e=new re(new He(.11,.07,.16),r);$e.position.set(0,.01,.12);const et=new re(new Lt(.02,8,6),i);et.scale.set(2.1,.7,.8),et.position.set(0,.02,-.04),De.add(mt,$e,et);const z=[.03,.038,.036,.028];for(let ct=0;ct<4;ct++){const We=-.034+ct*.022,R=z[ct],x=new _t;x.position.set(We,.016,-.052);const X=new re(new pt(.0075,.0095,R,8),i);X.rotation.x=Math.PI/2,X.position.set(0,0,-R*.42);const J=new _t;J.position.set(0,-.002,-R*.78),J.rotation.x=.22;const le=new re(new pt(.0055,.0075,R*.82,8),i);le.rotation.x=Math.PI/2,le.position.set(0,0,-R*.36),J.add(le),x.add(X,J),De.add(x),q.push({knuckle:x,tip:J,tipRest:.22})}const he=new _t;he.position.set(Se>0?.042:-.042,.018,-.02),he.rotation.z=Se>0?-.7:.7;const Qe=new re(new pt(.0085,.011,.034,8),i);Qe.rotation.x=.35,Qe.position.set(0,.01,-.012);const Fe=new _t;Fe.position.set(0,.006,-.028),Fe.rotation.x=.2;const ke=new re(new pt(.0065,.0085,.026,8),i);ke.rotation.x=.45,ke.position.set(0,0,-.014),Fe.add(ke),he.add(Qe,Fe),De.add(he),q.push({knuckle:he,tip:Fe,tipRest:.2}),De.position.set(ne,-.05,ae),De.rotation.y=Se,De.rotation.z=Se>0?.22:-.18,t.add(De)}te(-.07,.06,.5),te(.12,.08,-.62),t.traverse(ne=>{var Se;ne.castShadow=!1,ne.receiveShadow=!1,ne.frustumCulled=!1;const ae=ne.geometry;!ne.isMesh||!((Se=ne.material)!=null&&Se.normalMap)||!(ae!=null&&ae.index)||ae.attributes.tangent||ae.attributes.uv&&ae.attributes.normal&&ae.computeTangents()});let v=0,D=0,F=0,B=0,$=0,Me="LIVE",K=!1;const ue={x:.18,y:-.28,z:-.48};return{setChannel(ne){K&&ne!==Me&&(D=.09,F=Math.max(F,.45)),K=!0,Me=ne,m.visible=ne==="LIVE",_.visible=ne==="LIVE",g.visible=ne==="STATIC",y.visible=ne==="DEAD_AIR",ne==="LIVE"?(l.color.setHex(6813439),V.color.setHex(6813439),V.intensity=2.6):ne==="STATIC"?(l.color.setHex(15921906),V.color.setHex(16777215),V.intensity=.8):(l.color.setHex(2761758),V.intensity=0)},fire(ne){if(ne==="dry"||ne==="none"){D=.14,v=.02,B=0;return}v=ne==="spread"?.12:ne==="phase"?.08:.055,F=ne==="spread"?.85:ne==="phase"?.5:.62,B=.045,M.color.set(ne==="spread"?16053492:ne==="phase"?14015974:13040639),T.scale.setScalar(ne==="spread"?1.35:ne==="phase"?.7:1),ne==="phase"?T.position.z=-.62:T.position.z=-.24},setVisible(ne){t.visible=ne},update(ne,ae,Se={}){const De=ae>.35;$+=ne*(De?7.2+Math.min(ae,9)*.28:1.5);const Ge=De?.004+Math.min(ae,9)*.00115:.0016,mt=Se.strafe||0;v+=(0-v)*(1-Math.exp(-12*ne)),D+=(0-D)*(1-Math.exp(-14*ne)),F+=(0-F)*(1-Math.exp(-7*ne));const $e=Math.sin($*1.3)*.05;for(let et=0;et<q.length;et++){const z=q[et],he=$e+F*(.42+et%5*.05);z.knuckle.rotation.x=he,z.tip.rotation.x=z.tipRest+he*1.15}if(B-=ne,T.visible=B>0,T.visible&&(T.rotation.z=B*18),Me==="STATIC"){const et=.45+Math.random()*.55;l.color.setRGB(et,et,et)}t.position.x=ue.x+Math.cos($)*Ge*.7-mt*.01,t.position.y=ue.y+Math.sin($*2)*Ge+(De?0:Math.sin($)*.003),t.position.z=ue.z+v*.62,t.rotation.x=v*1.7+D*1.5+Math.sin($*2)*Ge*2.2,t.rotation.y=.06-v*.25,t.rotation.z=-mt*.035+Math.sin($)*Ge*1.4}}}function Kt(n,e,t,i=1,r=1){const s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);const a=new Si(s);return a.colorSpace=Qt,a.wrapS=Fn,a.wrapT=Fn,a.repeat.set(i,r),a.anisotropy=8,a.magFilter=pn,a.minFilter=Dn,a}function hr(n,e,t,i,r,s){n.fillStyle=r;for(let a=0;a<i;a++){const o=a*97%e,c=a*53%t;n.fillRect(o,c,s,s)}}function rv(n,e=1,t=1){const i=new Si(n);return i.colorSpace=qn,i.wrapS=Fn,i.wrapT=Fn,i.repeat.set(e,t),i.anisotropy=4,i.magFilter=pn,i.minFilter=Dn,i}function nh(n,e,t,i=1,r=1){const s=document.createElement("canvas");s.width=n,s.height=e;const a=s.getContext("2d"),o=a.createImageData(n,e);for(let c=0;c<e;c++)for(let l=0;l<n;l++){const[u,h,d]=t(l,c,n,e),f=(c*n+l)*4;o.data[f]=u,o.data[f+1]=h,o.data[f+2]=d,o.data[f+3]=255}return a.putImageData(o,0,0),rv(s,i,r)}function Di(n,e,t,i,r=1,s=1){const a=new Float32Array(n*e);for(let o=0;o<e;o++)for(let c=0;c<n;c++)a[o*n+c]=t(c,o,n,e);return nh(n,e,(o,c)=>{const l=a[c*n+(o+n-1)%n],u=a[c*n+(o+1)%n],h=a[(c+e-1)%e*n+o],d=a[(c+1)%e*n+o];let f=(l-u)*i,m=(h-d)*i;const _=1,g=Math.hypot(f,m,_)||1;return[f/g*127.5+127.5,m/g*127.5+127.5,_/g*127.5+127.5]},r,s)}function Ii(n,e,t,i=1,r=1){return nh(n,e,(s,a)=>{const o=Math.max(0,Math.min(1,t(s,a,n,e)))*255;return[o,o,o]},i,r)}function sv(){const n=Kt(256,256,(v,D,F)=>{v.fillStyle="#5c564c",v.fillRect(0,0,D,F);const B=64;for(let $=0;$<F;$+=B)for(let Me=0;Me<D;Me+=B){const K=(Me*3+$*7)%17/17,ue=K>.66?"#6a6358":K>.33?"#574f46":"#4e4840";v.fillStyle=ue,v.fillRect(Me+2,$+2,B-4,B-4),v.fillStyle="rgba(20,16,12,0.35)",v.fillRect(Me,$,B,2),v.fillRect(Me,$,2,B)}v.fillStyle="rgba(30,22,14,0.28)",v.beginPath(),v.ellipse(48,180,28,10,.4,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(190,60,22,8,-.5,0,Math.PI*2),v.fill(),v.fillStyle="rgba(90,70,40,0.18)",v.fillRect(8,8,18,6)},8,6),e=Kt(256,256,(v,D,F)=>{v.fillStyle="#c8bfb2",v.fillRect(0,0,D,F),v.fillStyle="#b3a898";for(let B=0;B<D;B+=64)v.fillRect(B,0,3,F);v.fillStyle="#9c9184",v.fillRect(0,168,D,10),v.fillStyle="#6e655c",v.fillRect(0,214,D,42),v.fillStyle="#8a8176",v.fillRect(0,210,D,6),v.fillStyle="rgba(70,50,30,0.12)";for(let B=0;B<20;B++)v.fillRect(B*41%D,20+B*17%120,16,5);hr(v,D,F,30,"rgba(255,255,255,0.04)",2)},3,2),t=Kt(128,128,(v,D,F)=>{v.fillStyle="#8d8478",v.fillRect(0,0,D,F),v.fillStyle="#756c62";for(let B=0;B<D;B+=16)v.fillRect(B,0,2,F);v.fillStyle="rgba(40,30,20,0.2)",v.fillRect(0,F-18,D,18),v.fillStyle="#a39888",v.fillRect(0,8,D,4)},2,2),i=Kt(128,128,(v,D,F)=>{v.fillStyle="#b7b1a6",v.fillRect(0,0,D,F),v.strokeStyle="#8e877c",v.lineWidth=3,v.strokeRect(1,1,D-2,F-2),v.fillStyle="#c9c3b6",v.fillRect(8,8,D-16,F-16),v.fillStyle="rgba(80,70,50,0.15)",v.fillRect(18,40,30,8),v.fillRect(70,80,22,6)},6,6),r=Kt(128,128,(v,D,F)=>{v.fillStyle="#5c3a22",v.fillRect(0,0,D,F);for(let B=0;B<F;B+=3){const $=70+B*17%50;v.strokeStyle=`rgb(${$+36}, ${$-4}, ${$-32})`,v.beginPath(),v.moveTo(0,B),v.quadraticCurveTo(D*.5,B+(B%9-4),D,B),v.stroke()}v.fillStyle="rgba(30,16,6,0.35)",v.fillRect(18,0,4,F),v.fillRect(78,0,3,F),v.beginPath(),v.ellipse(46,40,8,14,.2,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(96,90,6,10,-.3,0,Math.PI*2),v.fill()}),s=Kt(128,128,(v,D,F)=>{v.fillStyle="#16130f",v.fillRect(0,0,D,F),v.fillStyle="#e2a23a";const B=18;for(let $=-8;$<16;$++)v.beginPath(),v.moveTo($*B,0),v.lineTo($*B+B*.55,0),v.lineTo($*B+B*.55-F,F),v.lineTo($*B-F,F),v.fill()}),a=Kt(128,64,(v,D,F)=>{for(let B=0;B<F;B++)for(let $=0;$<D;$++){const K=140+($*17+B*13)%40*2;v.fillStyle=`rgb(${K},${K},${K-10})`,v.fillRect($,B,1,1)}v.fillStyle="rgba(0,0,0,0.45)";for(let B=0;B<F;B+=3)v.fillRect(0,B,D,1)}),o=Kt(128,128,(v,D,F)=>{v.fillStyle="#efe8de",v.fillRect(0,0,D,F),v.fillStyle="#fbf7f1",v.fillRect(10,10,D-20,F-20),v.strokeStyle="rgba(40,34,28,0.45)",v.lineWidth=3,v.strokeRect(8,8,D-16,F-16),v.strokeStyle="rgba(40,34,28,0.28)",v.beginPath(),v.moveTo(18,F/2),v.lineTo(D-18,F/2),v.moveTo(D/2,18),v.lineTo(D/2,F-18),v.stroke(),hr(v,D,F,24,"rgba(60,48,30,0.16)",2)}),c=Kt(128,128,(v,D,F)=>{v.fillStyle="#ddd6cb",v.fillRect(0,0,D,F),v.fillStyle="#cbbba6",v.fillRect(0,F*.48,D,F*.52);for(let B=0;B<10;B++){const $=D*(.34+B*13%32/100);v.fillStyle=B%2?"rgba(110,82,52,0.45)":"rgba(86,64,40,0.32)",v.fillRect($,F*.4,2+B%3,F*.58)}v.fillStyle="rgba(72,52,32,0.5)",v.fillRect(0,F-14,D,14),hr(v,D,F,36,"rgba(70,54,32,0.28)",2)}),l=Kt(128,128,(v,D,F)=>{v.fillStyle="#e7e0d6",v.fillRect(0,0,D,F),v.fillStyle="#c9b49a",v.fillRect(0,F*.28,D,F*.72);for(let B=0;B<16;B++){const $=18+B*29%92;v.fillStyle=B%2?"rgba(96,70,42,0.72)":"rgba(62,46,30,0.55)",v.fillRect($,28+B%5*6,2+B%4,F-24)}v.fillStyle="rgba(48,34,20,0.55)",v.fillRect(0,F-20,D,20),v.fillStyle="rgba(120,96,70,0.35)",v.beginPath(),v.ellipse(D*.62,F*.72,16,8,.4,0,Math.PI*2),v.fill(),hr(v,D,F,28,"rgba(40,28,16,0.4)",2)}),u=Kt(64,64,(v,D,F)=>{v.fillStyle="#141414",v.fillRect(0,0,D,F),v.fillStyle="#2a2a2a";for(let B=-8;B<16;B++)v.fillRect(B*8,0,2,F);v.fillStyle="#3a3a3a",v.fillRect(0,4,D,3),v.fillStyle="#0a0a0a",v.fillRect(0,F-8,D,8)}),h=Kt(64,64,(v,D,F)=>{v.fillStyle="#c6a15a",v.fillRect(0,0,D,F),v.fillStyle="#e6c97a",v.fillRect(0,2,D,6),v.fillStyle="#8a6a32",v.fillRect(0,F-8,D,8),v.strokeStyle="rgba(60,40,10,0.45)",v.beginPath(),v.moveTo(8,0),v.lineTo(18,F),v.moveTo(40,0),v.lineTo(30,F),v.stroke()}),d=Kt(128,128,(v,D,F)=>{v.fillStyle="#f3efe6",v.fillRect(0,0,D,F);for(let B=8;B<D;B+=14)v.strokeStyle=B%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",v.beginPath(),v.moveTo(B,0),v.quadraticCurveTo(B+4,F/2,B-2,F),v.stroke();v.fillStyle="rgba(90,70,40,0.08)",v.fillRect(0,F-20,D,20)}),f=Kt(128,128,(v,D,F)=>{v.fillStyle="#3a2418",v.fillRect(0,0,D,F),hr(v,D,F,80,"rgba(20,10,6,0.45)",2),hr(v,D,F,40,"rgba(120,80,50,0.2)",1),v.strokeStyle="rgba(10,6,4,0.7)",v.lineWidth=3,v.beginPath(),v.moveTo(0,20),v.lineTo(D,28),v.stroke()}),m=Kt(128,128,(v,D,F)=>{v.fillStyle="#241810",v.fillRect(0,0,D,F),v.fillStyle="#1a110c";for(let B=0;B<D;B+=10)v.fillRect(B,0,3,F);v.fillStyle="rgba(80,50,30,0.15)",v.fillRect(0,0,D,8)}),_=Kt(256,256,(v,D,F)=>{v.fillStyle="#3e3832",v.fillRect(0,0,D,F);const B=64;for(let $=0;$<F;$+=B)for(let Me=0;Me<D;Me+=B)v.fillStyle=(Me+$)%128===0?"#4a433b":"#35302b",v.fillRect(Me+3,$+3,B-6,B-6);v.strokeStyle="rgba(166,132,70,0.35)",v.lineWidth=2;for(let $=0;$<=D;$+=B)v.beginPath(),v.moveTo($,0),v.lineTo($,F),v.stroke(),v.beginPath(),v.moveTo(0,$),v.lineTo(D,$),v.stroke()},4,4),g=Kt(64,64,(v,D,F)=>{v.fillStyle="#8d9298",v.fillRect(0,0,D,F),v.fillStyle="rgba(255,255,255,0.18)";for(let B=0;B<F;B+=3)v.fillRect(0,B,D,1);v.fillStyle="#5e646a",v.fillRect(0,0,D,4)}),p=Di(128,128,(v,D,F,B)=>{const $=v/F,Me=D/B,K=Math.min($,1-$,Me,1-Me),ue=Math.min(1,K*10),ne=Math.abs($-.5)<.012||Math.abs(Me-.5)<.012?.2:1;return ue*ne},3.2),w=Ii(128,128,(v,D,F,B)=>{const $=v/F,Me=D/B,K=Math.min($,1-$,Me,1-Me);return .28+(1-Math.min(1,K*7))*.42}),b=Di(64,64,(v,D,F,B)=>{const $=Math.sin(v*.85+D*.2)*.08,Me=D<5?.25:D>B-6?-.2:0;return .55+$+Me},2.4),y=Ii(64,64,(v,D)=>.22+(Math.sin(v*.7)*.5+.5)*.12+(D%9===0?.08:0)),O=Di(128,128,(v,D,F)=>{const B=Math.sin(v/F*Math.PI*5)*.2,$=Math.sin(v*.85)*.04+Math.sin(D*1.15)*.03,Me=v%8===0?-.05:0;return .55+B+$+Me},3.6),P=Ii(128,128,(v,D,F,B)=>.78+D/B*.1+(v%8===0?.06:0)),C=Di(256,256,(v,D)=>{const B=v%64,$=D%64;return Math.min(B,$,63-B,63-$)<3?.05:.72+Math.sin(v*.17)*Math.sin(D*.13)*.06},4.5,8,6),I=Ii(256,256,(v,D)=>Math.min(v%64,D%64,63-v%64,63-D%64)<3?.95:.78,8,6),E=Di(256,256,(v,D)=>Math.min(v%64,D%64,63-v%64,63-D%64)<4?0:.66,5,4,4),M=Ii(256,256,(v,D)=>Math.min(v%64,D%64)<4?.96:.84,4,4),T=Di(128,128,(v,D)=>{const F=Math.sin(D*.42+Math.sin(v*.07)*2.4)*.14,B=v%22===0?-.08:0;return .5+F+B},3.1),A=Ii(128,128,(v,D,F,B)=>.48+(Math.sin(D*.35)*.5+.5)*.22+D/B*.08),L=Di(128,128,(v,D,F,B)=>{const $=Math.sin(v*1.6)*Math.sin(D*1.25)*.05,Me=Math.abs(D/B-.22)<.018?-.22:0;return .55+$+Me},2.6),W=Ii(128,128,(v,D,F,B)=>.62+(Math.sin(v*.4+D*.2)*.5+.5)*.2+D/B*.08),V=Kt(256,64,(v,D,F)=>{v.fillStyle="#3c362e",v.fillRect(0,0,D,F),v.fillStyle="#2e2924";for(let B=0;B<D;B+=32)v.fillRect(B,0,2,F);v.strokeStyle="#e6c56a",v.lineWidth=3,v.strokeRect(6,8,D-12,F-16),v.lineWidth=2,v.beginPath(),v.ellipse(D/2,F/2,30,18,0,0,Math.PI*2),v.stroke(),v.beginPath(),v.ellipse(D/2,F/2,16,9,0,0,Math.PI*2),v.stroke(),v.fillStyle="#f0d48a",v.beginPath(),v.arc(D/2,F/2,3.5,0,Math.PI*2),v.fill()}),q=av(),te=ov();return{floor:n,wall:e,ceiling:i,wood:r,hazard:s,snow:a,pearl:o,pearlWorn:c,shinGrime:l,joint:u,gold:h,cloth:d,leather:f,trench:m,nave:_,naveLight:q,courtLight:te,trim:t,brushed:g,pearlNormal:p,pearlRough:w,goldNormal:b,goldRough:y,clothNormal:O,clothRough:P,floorNormal:C,floorRough:I,naveNormal:E,naveRough:M,woodNormal:T,woodRough:A,leatherNormal:L,leatherRough:W,seal:V}}function av(){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d");i.fillStyle="rgb(32,27,22)",i.fillRect(0,0,256,256);const r=(l,u)=>{const h=(l+7.6)/15.2,d=(-21.55-u)/13.2+.5;return[h*256,(1-d)*256]};i.fillStyle="rgb(12,10,8)";for(const[l,u]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]]){const[h,d]=r(l,u);i.fillRect(h-26,d-8,52,16)}const[s,a]=r(0,-27.55);i.fillRect(s-28,a-10,56,18),i.globalCompositeOperation="lighter";const o=(l,u,h,d)=>{const[f,m]=r(l,u),_=h*256,g=i.createRadialGradient(f,m,2,f,m,_);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=g,i.beginPath(),i.arc(f,m,_,0,Math.PI*2),i.fill()};o(-4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(-4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(-1.35,-27.15,.2,"rgba(255,186,90,1)"),o(1.35,-27.15,.2,"rgba(255,186,90,1)"),o(0,-27.5,.28,"rgba(220,160,70,0.55)"),i.fillStyle="rgba(255,214,170,0.16)",i.fillRect(256*.4,0,256*.2,256),i.globalCompositeOperation="source-over";const c=new Si(t);return c.colorSpace=yi,c.magFilter=pn,c.minFilter=Dn,c.anisotropy=4,c}function ih(n,e){return[(n+16.05)/32.1,(-.25-e)/28.6+.5]}function ov(){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d");i.fillStyle="rgb(18,16,14)",i.fillRect(0,0,256,256);const r=(c,l)=>{const[u,h]=ih(c,l);return[u*256,(1-h)*256]},s=(c,l,u,h)=>{const[d,f]=r(c-u/2,l-h/2),[m,_]=r(c+u/2,l+h/2),g=Math.min(d,m),p=Math.min(f,_);i.fillRect(g,p,Math.abs(m-d),Math.abs(_-f))};i.fillStyle="rgb(8,7,6)",s(0,-12.2,32,4.2),s(0,-2.2,4.6,.7),s(-1.75,2.05,1.8,.7),s(1.75,2.05,1.8,.7),s(-2.25,-.05,.7,3.6),s(2.25,-.05,.7,3.6);for(const[c,l]of[[-8,-6],[8,-6],[-8,6],[8,5.2]]){const[u,h]=r(c,l);i.beginPath(),i.arc(u,h,7,0,Math.PI*2),i.fill()}i.globalCompositeOperation="lighter";const a=(c,l,u,h)=>{const[d,f]=r(c,l),m=u*256,_=i.createRadialGradient(d,f,2,d,f,m);_.addColorStop(0,h),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.beginPath(),i.arc(d,f,m,0,Math.PI*2),i.fill()};a(0,1.2,.26,"rgba(255,244,220,0.62)"),a(0,1.2,.12,"rgba(255,250,240,0.45)"),a(0,-.05,.07,"rgba(198,214,216,0.4)"),a(-10,8.2,.09,"rgba(255,176,90,0.55)"),a(9.2,8.4,.08,"rgba(255,176,90,0.5)"),a(12.8,-5,.09,"rgba(255,168,70,0.6)"),a(-6,-9.2,.07,"rgba(255,196,130,0.28)"),a(4,-9.2,.07,"rgba(255,196,130,0.28)"),i.globalCompositeOperation="source-over";const o=new Si(t);return o.colorSpace=yi,o.magFilter=pn,o.minFilter=Dn,o.anisotropy=4,o.wrapS=Zn,o.wrapT=Zn,o}function Hc(n,e,t="#16130f",i="#f4efe6"){const r=document.createElement("canvas");r.width=512,r.height=e?160:128;const s=r.getContext("2d");s.fillStyle=t,s.fillRect(0,0,r.width,r.height),s.strokeStyle="#e2a23a",s.lineWidth=8,s.strokeRect(8,8,r.width-16,r.height-16),s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.font="700 58px Trebuchet MS, sans-serif",s.fillText(n,r.width/2,e?68:r.height/2+2),e&&(s.font="600 28px Trebuchet MS, sans-serif",s.fillStyle="#e2a23a",s.fillText(e,r.width/2,118));const a=new Si(r);return a.colorSpace=Qt,a.anisotropy=4,a}function Rt(n){return new Wt({envMapIntensity:.32,...n})}function Ln(n){var e,t;return n!=null&&n.index&&((e=n.attributes)!=null&&e.uv)&&((t=n.attributes)!=null&&t.normal)&&!n.attributes.tangent&&n.computeTangents(),n}function fr(n,e,t){const i=n.clone();return i.repeat.set(e,t),i.needsUpdate=!0,i}function lv(n){const e=sv(),t={floor:Rt({map:e.floor,normalMap:e.floorNormal,roughnessMap:e.floorRough,roughness:1,metalness:.03}),wall:Rt({map:e.wall,roughness:.88,metalness:.03}),ceiling:Rt({map:e.ceiling,roughness:.96,metalness:0}),trim:Rt({map:e.trim,roughness:.74,metalness:.08}),metal:Rt({color:7172984,roughness:.38,metalness:.62}),wood:Rt({map:fr(e.wood,2,2),normalMap:fr(e.woodNormal,2,2),roughnessMap:fr(e.woodRough,2,2),roughness:1,metalness:.04}),runner:Rt({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:Rt({color:1315344,roughness:.9}),brass:Rt({map:fr(e.gold,2,2),normalMap:fr(e.goldNormal,2,2),roughnessMap:fr(e.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:Rt({color:5065016,roughness:.92}),glass:Rt({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:Rt({map:e.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};t.hazard.side=jt,t.floor.normalScale.set(.7,.7),t.wood.normalScale.set(.85,.85),t.wood.side=jt,t.brass.normalScale.set(.4,.4);const i=new Map;function r(N,se,ge,xe,qe,Mt,wt){const Ft=new He(qe,Mt,wt);Ft.translate(se,ge,xe),i.has(N)||i.set(N,[]),i.get(N).push(Ft)}const s=[],a={radio:null,service:null,directory:null};let o=null,c=null;const l=Rt({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});l.side=jt;const u=Rt({color:1709068,roughness:.38,metalness:.22,transparent:!0,opacity:.94,emissive:12876322,emissiveIntensity:.45});u.side=jt;const h=new Set(["pew-1","pew-2","pew-3","pew-4","altar","fountain-n","fountain-s-l","fountain-s-r","fountain-w","fountain-e"]);function d(N,se,ge){const xe=new _t,qe=new re(new He(N.w*.92,N.h*.98,N.d*.62),Rt({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),Mt=Rt({color:14012098,roughness:.66,metalness:.05});for(const cn of[-N.h*.18,N.h*.16]){const oi=new re(new He(N.w*.62,N.h*.28,.045),Mt);oi.position.set(0,cn,N.d*.36),oi.castShadow=!0,xe.add(oi)}const wt=new re(Ln(new He(N.w,.16,N.d*.8)),t.brass);wt.position.y=N.h*.42;const Ft=new re(Ln(new He(.14,N.h*.72,N.d*.78)),t.brass),Ot=new re(new Ct(1.7,.5),new gt({map:Hc(se,ge,"#1c140c","#f0d48a")}));return Ot.position.set(0,.35,N.d*.42),xe.add(qe,wt,Ft,Ot),xe.position.set(N.x,N.y,N.z),n.add(xe),{group:xe,lift:0,goal:0,baseY:N.y}}for(const N of Bu){if(N.veil){o=new re(new He(N.w,N.h,N.d),l),o.position.set(N.x,N.y,N.z),o.visible=!1,n.add(o);continue}if(N.directoryVeil){c=new re(new He(N.w,N.h,N.d),u),c.position.set(N.x,N.y,N.z),c.visible=!1,n.add(c);continue}if(N.door||N.serviceDoor||N.directoryDoor){const se=N.directoryDoor?["DIRECTORY","WING"]:N.serviceDoor?["SERVICE","WING"]:["RADIO","WING"],ge=d(N,se[0],se[1]);N.door?a.radio=ge:N.serviceDoor?a.service=ge:a.directory=ge;continue}if(!h.has(N.id)){if(N.phaseGate){const se=new re(new He(N.w,N.h,N.d),t.hazard);se.position.set(N.x,N.y,N.z),se.castShadow=!0,se.receiveShadow=!0,n.add(se),s.push(se);continue}r(N.mat,N.x,N.y,N.z,N.w,N.h,N.d)}}r("runner",0,.02,-1.2,2.6,.02,18),r("runner",0,.025,-35.2,1.8,.02,10),r("runner",0,.03,-47.1,2.2,.02,8.6),r("dark",-7.4,1.3,-13.15,6.4,2.6,.4),r("dark",-5.2,1.3,-13.15,2.4,2.6,.4),r("dark",5.4,1.3,-13.15,2.4,2.6,.4),r("dark",8.6,1.3,-13.15,6.4,2.6,.4),r("runner",0,.025,-21.4,1.5,.02,12),r("brass",0,2.55,-2.15,.12,3.5,.12),r("brass",0,4.15,-2.15,1.35,.08,1.35),r("plant",-3.3,.28,-2.5,.7,.45,.7),r("plant",3.35,.28,1.4,.7,.45,.7),r("plant",-3.2,.55,2.4,.45,.7,.45),r("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const N of[-12,-4,4,12])for(const se of[-8,0,8])r("metal",N,6.85,se,1.6,.08,.28);for(let N=-14;N<=14;N+=2.2)r("metal",N,4.55,-10.45,.06,.7,.06);r("metal",0,4.55,-10.45,28,.05,.05);for(const[N,se]of i){const ge=se.length===1?se[0]:Ku(se);t[N].normalMap&&Ln(ge);const xe=new re(ge,t[N]);xe.castShadow=N!=="floor"&&N!=="ceiling"&&N!=="runner",xe.receiveShadow=!0,n.add(xe)}const f=Rt({map:e.floor,normalMap:e.floorNormal,roughnessMap:e.floorRough,roughness:1,metalness:.05});f.normalScale.set(.55,.55);const m=f.clone();m.lightMap=e.courtLight,m.lightMapIntensity=.48;const _=t.trim.clone();_.lightMap=e.courtLight,_.lightMapIntensity=.42;const g=t.brass.clone();g.lightMap=e.courtLight,g.lightMapIntensity=.28;const p=t.wall.clone();p.lightMap=e.courtLight,p.lightMapIntensity=.55,p.polygonOffset=!0,p.polygonOffsetFactor=-1,p.polygonOffsetUnits=-1;const w=t.floor.clone();w.lightMap=e.courtLight,w.lightMapIntensity=.64,w.polygonOffset=!0,w.polygonOffsetFactor=-1,w.polygonOffsetUnits=-1;const b=new G;function y(N){N.updateMatrixWorld(!0);const se=N.geometry.attributes.position,ge=new Float32Array(se.count*2);for(let xe=0;xe<se.count;xe++){b.fromBufferAttribute(se,xe).applyMatrix4(N.matrixWorld);const qe=ih(b.x,b.z);ge[xe*2]=qe[0],ge[xe*2+1]=qe[1]}return N.geometry.setAttribute("uv2",new $t(ge,2)),N}function O(N,se,ge,xe,qe){se.normalMap&&Ln(N);const Mt=new re(N,se);return Mt.position.set(ge,xe,qe),Mt.castShadow=!0,Mt.receiveShadow=!0,n.add(Mt),Mt}function P(N,se,ge,xe,qe,Mt){y(O(new He(xe,qe*.78,Mt*.92),m,N,se-qe*.08,ge)),y(O(new He(xe*1.04,qe*.18,Mt*1.08),_,N,se+qe*.4,ge))}P(0,.4,-2.2,4.5,.8,.5),P(-1.75,.4,2.05,1.7,.8,.5),P(1.75,.4,2.05,1.7,.8,.5),P(-2.25,.4,-.05,.5,.8,3.55),P(2.25,.4,-.05,.5,.8,3.55);const C=Rt({map:e.trim,roughness:.55,metalness:.18,envMapIntensity:.45,lightMap:e.courtLight,lightMapIntensity:.5}),I=O(new ti([new Re(.15,.04),new Re(.7,.06),new Re(1.15,.1),new Re(1.38,.28),new Re(1.22,.4),new Re(1.05,.34)],32),C,0,.02,-.05);I.castShadow=!0,y(I);const E=new re(new en(1.28,.045,8,28),g);E.rotation.x=Math.PI/2,E.position.set(0,.36,-.05),E.castShadow=!0,n.add(E),y(E),y(O(new pt(.06,.09,.34,12),g,0,.22,-.05));const M=Rt({color:1977392,roughness:.08,metalness:.62,envMapIntensity:.9,lightMap:e.courtLight,lightMapIntensity:.4}),T=new re(new _i(1.05,28),M);T.rotation.x=-Math.PI/2,T.position.set(0,.16,-.05),T.receiveShadow=!0,n.add(T),y(T);const A=new re(new Ct(32.1,28.6),w);A.rotation.x=-Math.PI/2,A.position.set(0,.016,-.25),A.receiveShadow=!0,A.castShadow=!1,n.add(A),y(A),A.geometry.attributes.tangent==null&&w.normalMap&&Ln(A.geometry);function L(N,se,ge,xe,qe,Mt,wt){const Ft=new re(N,p);Ft.position.set(se,ge,xe),Ft.rotation.y=qe,Ft.castShadow=!1,Ft.receiveShadow=!0,n.add(Ft),y(Ft);const Ot=Ft.geometry.attributes.uv;for(let cn=0;cn<Ot.count;cn++)Ot.setXY(cn,Ot.getX(cn)*Mt,Ot.getY(cn)*wt);return Ot.needsUpdate=!0,Ft}L(new Ct(28.4,6.3),-15.95,3.25,-.25,Math.PI/2,6,2),L(new Ct(28.4,6.3),15.95,3.25,-.25,-Math.PI/2,6,2),L(new Ct(31.6,6.3),0,3.25,13.95,Math.PI,8,2),L(new Ct(14,6.3),-8.9,3.25,-14.05,0,4,2),L(new Ct(14,6.3),8.9,3.25,-14.05,0,4,2);const W=new re(new Ct(6.4,8.2),new gt({color:16774114}));W.rotation.x=Math.PI/2,W.position.set(0,7.12,1.2),W.castShadow=!1,W.receiveShadow=!1,n.add(W);const V=new re(new pt(.55,.7,.12,12),t.brass);V.position.set(0,4.28,-2.15),V.rotation.x=.55,V.castShadow=!0,n.add(V);const q=new re(new Ct(1.15,.7),new gt({color:16757066}));q.position.set(10.7,1.85,-5.1),q.rotation.y=-Math.PI/2,n.add(q);const te=new re(new Ct(1.7,1.7),Rt({map:e.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));te.rotation.x=-Math.PI/2,te.position.set(9.45,.03,0),te.receiveShadow=!0,n.add(te);const v=new re(new He(5.4,2.2,.06),t.glass);v.position.set(9.4,1.8,8.7),n.add(v);const D=new re(new He(.7,.45,.06),new gt({map:e.snow}));D.position.set(9.2,1.25,8.72),n.add(D);const F=D.clone();F.position.x=10.15,n.add(F);const B=new re(new He(.08,.08,.08),new gt({color:16757066}));B.position.set(10.55,1.55,8.7),n.add(B);function $(N,se,ge,xe,qe,Mt,wt,Ft,Ot,cn){const oi=new re(new Ct(Mt,wt),new gt({map:Hc(N,se,Ot,cn),transparent:!1}));return oi.position.set(ge,xe,qe),oi.rotation.y=Ft,n.add(oi),oi}$("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),$("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),$("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),$("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),$("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),$("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),$("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),$("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),$("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),$("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),$("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),$("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),$("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a"),$("SERVICE","WING",0,3.35,-27.35,2.2,.55,0,"#1c140c","#f0d48a"),$("SPRINKLERS","HOLD E",7.55,2.35,-32.55,1.7,.42,-Math.PI/2,"#1c140c","#f0d48a"),$("DIRECTORY","LAST CHANNEL",0,3.55,-43.15,2.8,.64,0,"#1c140c","#f0d48a");const Me=new re(new Ct(3.15,.34),Rt({map:e.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));Me.receiveShadow=!0,Me.rotation.x=-Math.PI/2,Me.position.set(0,.045,jr),n.add(Me);const K=Jr[0],ue=Rt({map:e.gold,normalMap:e.goldNormal,roughnessMap:e.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),ne=new _t,ae=new re(Ln(new ti([new Re(.05,-.28),new Re(.09,-.08),new Re(.16,.08),new Re(.28,.24),new Re(.34,.32),new Re(.3,.36)],20)),ue);ae.rotation.z=-Math.PI/2,ae.castShadow=!0;const Se=new re(new _i(.26,16),Rt({color:2761752,roughness:.45,metalness:.4}));Se.rotation.y=Math.PI/2,Se.position.x=.34;const De=new re(Ln(new pt(.055,.07,.36,12)),t.brass);De.rotation.z=Math.PI/2,De.position.x=-.42;const Ge=new re(Ln(new He(.06,.36,.28)),t.brass);Ge.position.set(-.62,0,0),Ge.castShadow=!0;const mt=new re(Ln(new He(.1,.08,.16)),t.brass);mt.position.set(-.62,-.2,0);const $e=new re(new Lt(.07,12,10),new gt({color:16757066}));$e.position.x=.28;const et=new re(new en(.55,.03,8,24),new gt({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));et.rotation.y=Math.PI/2,ne.add(ae,Se,De,Ge,mt,$e,et);for(const[N,se]of[[-.05,.1],[.08,.16],[.2,.26]]){const ge=new re(new en(se,.012,6,16),t.brass);ge.rotation.y=Math.PI/2,ge.position.x=N,ge.castShadow=!0,ne.add(ge)}ne.position.set(K.x,K.y,K.z),n.add(ne);const z=new Er(16757082,7,5.5,2);z.position.set(K.x+.4,K.y,K.z),n.add(z);const he=Jr.find(N=>N.id==="sprinkler")||Jr[0],Qe=new _t,Fe=new re(new pt(.055,.055,1.35,8),t.brass);Fe.rotation.z=Math.PI/2,Fe.castShadow=!1;const ke=new re(new pt(.11,.16,.16,10),t.brass);ke.position.y=-.18,ke.castShadow=!1;const ct=new re(new Lt(.065,10,8),new gt({color:16757066}));ct.position.y=-.32;const We=new re(new hl(.5,1.15,10,1,!0),new gt({color:15783050,transparent:!0,opacity:0,depthWrite:!1,side:jt}));We.position.y=-.95,Qe.add(Fe,ke,ct,We),Qe.position.set(he.x,he.y,he.z),n.add(Qe);const R=Rt({color:16052198,roughness:.42,metalness:.08}),x=Rt({color:1052172,roughness:.16,metalness:.62,emissive:1708552,emissiveIntensity:.16}),X=Rt({color:13939034,roughness:.32,metalness:.74,emissive:9071144,emissiveIntensity:.22}),J=new gt({color:16757066}),le=new Wt({color:15783050,emissive:13939034,emissiveIntensity:.85,roughness:.28,metalness:.64}),Q=new _t,Ve=new re(new He(1.55,.36,1.15),R);Ve.position.y=.2,Ve.castShadow=!1;const ve=new re(new He(1.05,1.65,.68),x);ve.position.y=1.22,ve.castShadow=!1;const Ee=new re(new He(1.2,.12,.82),X);Ee.position.y=2.08,Ee.castShadow=!1;const it=new re(new Ct(.68,.92),new gt({color:1314314}));it.position.set(0,1.38,.35);const de=new _t;for(let N=0;N<4;N++){const se=new re(new Ct(.46,.03),new gt({color:16757066}));se.position.set(0,1.62-N*.16,.36),de.add(se)}const be=new re(new He(.07,.72,.04),J);be.position.set(.4,1.4,.36),be.visible=!1;const Ze=new re(new en(.78,.04,8,28),le);Ze.position.y=2.95,Ze.rotation.x=Math.PI/2,Ze.visible=!1,Q.add(Ve,ve,Ee,it,de,be,Ze),Q.position.set(Bi.x,0,Bi.z),n.add(Q);const Ke=new Er(16757082,22,14,2);Ke.position.set(Bi.x,3.5,Bi.z+.8),n.add(Ke);function _e(N,se){const ge=new re(new pt(.035,.05,.46,6),t.brass);ge.position.set(N,.28,se);const xe=new re(new Lt(.045,6,6),new gt({color:16757066}));xe.position.set(N,.54,se),n.add(ge,xe)}_e(-4.9,-18.2),_e(4.9,-18.2),_e(-4.9,-20.45),_e(4.9,-20.45),_e(-1.35,-27.15),_e(1.35,-27.15);const Ue=new re(new Ct(15.2,13.2),Rt({map:e.nave,normalMap:e.naveNormal,roughnessMap:e.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));Ue.material.normalScale.set(.8,.8),Ue.material.lightMap=e.naveLight,Ue.material.lightMapIntensity=.72,Ln(Ue.geometry),Ue.geometry.setAttribute("uv2",Ue.geometry.attributes.uv.clone()),Ue.rotation.x=-Math.PI/2,Ue.position.set(0,.018,-21.55),Ue.receiveShadow=!0,n.add(Ue);const Ie=t.wood.clone();Ie.lightMap=e.naveLight,Ie.lightMapIntensity=.7;const rt=f.clone();rt.lightMap=e.naveLight,rt.lightMapIntensity=.66;const k=t.brass.clone();k.lightMap=e.naveLight,k.lightMapIntensity=.45;const me=t.wall.clone();me.lightMap=e.naveLight,me.lightMapIntensity=.85,me.polygonOffset=!0,me.polygonOffsetFactor=-1,me.polygonOffsetUnits=-1;const j=new G;function ee(N,se,ge,xe,qe){const Mt=N.clone(),wt=O(Mt,se,ge,xe,qe);wt.updateMatrixWorld(!0);const Ft=Mt.attributes.position,Ot=new Float32Array(Ft.count*2);for(let cn=0;cn<Ft.count;cn++)j.fromBufferAttribute(Ft,cn).applyMatrix4(wt.matrixWorld),Ot[cn*2]=(j.x+7.6)/15.2,Ot[cn*2+1]=(-21.55-j.z)/13.2+.5;return Mt.setAttribute("uv2",new $t(Ot,2)),wt}const Ae=ee(new Ct(14.2,6.2),me,-8.08,3.15,-21.75);Ae.rotation.y=Math.PI/2;const Ce=ee(new Ct(14.2,6.2),me,8.08,3.15,-21.75);Ce.rotation.y=-Math.PI/2;const at=ee(new Ct(5.15,6.2),me,-5.15,3.15,-28.72),Nt=ee(new Ct(5.15,6.2),me,5.15,3.15,-28.72);for(const N of[Ae,Ce,at,Nt]){N.castShadow=!1,N.updateMatrixWorld(!0);const se=N.geometry.attributes.position,ge=N.geometry.attributes.uv2.array,xe=N.geometry.attributes.uv;for(let qe=0;qe<se.count;qe++)j.fromBufferAttribute(se,qe).applyMatrix4(N.matrixWorld),ge[qe*2]=(j.x+7.6)/15.2,ge[qe*2+1]=(-21.55-j.z)/13.2+.5,xe.setXY(qe,xe.getX(qe)*4,xe.getY(qe)*2);N.geometry.attributes.uv2.needsUpdate=!0,xe.needsUpdate=!0}const zt=new pt(.028,.028,2.28,10);zt.rotateZ(Math.PI/2);const yt=new pt(.03,.03,2.32,12);yt.rotateZ(Math.PI/2);const rn=new pt(.62,.62,2.22,16,1,!0,-.42,.84);rn.rotateZ(Math.PI/2);function gn(N,se){ee(new He(2.32,.05,.32),Ie,N,.46,se-.04),ee(yt,Ie,N,.45,se-.2);for(const xe of[-1.02,1.02])ee(new He(.055,.4,.05),Ie,N+xe,.22,se-.12),ee(new He(.055,.4,.05),Ie,N+xe,.22,se+.06);for(const xe of[-1.2,1.2])ee(new He(.07,.82,.4),Ie,N+xe,.44,se+.02);const ge=ee(rn,Ie,N,.68,se-.36);ge.castShadow=!0,ee(zt,Ie,N,.9,se+.2),ee(new He(2.05,.028,.1),Ie,N,.3,se+.04),ee(new He(1.9,.035,.07),Ie,N,.16,se-.02)}for(const[N,se]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])gn(N,se);ee(new He(2.15,.16,.62),rt,0,.1,-27.55),ee(new He(1.82,.2,.5),rt,0,.27,-27.55),ee(new He(1.5,.18,.4),rt,0,.45,-27.55),ee(new He(2.2,.07,.66),k,0,.62,-27.55);const Ei=O(new He(1.35,.32,.035),t.brass,0,.36,-27.26);Ei.position.z=-27.26;const ii=new re(new en(.15,.016,8,20),t.brass);ii.position.set(0,.38,-27.22),n.add(ii);for(const N of[-.72,.72]){O(new pt(.028,.04,.22,8),t.brass,N,.76,-27.52);const se=new re(new Lt(.035,8,6),new gt({color:16757066}));se.position.set(N,.9,-27.52),se.castShadow=!1,n.add(se)}const qt=document.createElement("canvas");qt.width=64,qt.height=64;const _n=qt.getContext("2d"),ri=_n.createRadialGradient(32,32,4,32,32,32);ri.addColorStop(0,"rgba(0,0,0,0.38)"),ri.addColorStop(1,"rgba(0,0,0,0)"),_n.fillStyle=ri,_n.fillRect(0,0,64,64);const Wi=new Si(qt),si=new gt({map:Wi,transparent:!0,depthWrite:!1});function ai(N,se,ge){const xe=new re(new _i(N,18),si);xe.rotation.x=-Math.PI/2,xe.position.set(se,.028,ge),n.add(xe)}ai(1.7,0,-.05),ai(1.3,0,-27.55);for(const[N,se]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])ai(1.2,N,se);const zn=Xo.find(N=>N.kind==="signal"),oe=Xo.find(N=>N.kind==="health"),ce=new _t,ye=new re(new He(.38,.28,.38),t.brass),Ye=new re(new He(.16,.16,.16),new gt({color:16757066}));Ye.position.y=.22,ce.add(ye,Ye),ce.position.set(zn.x,.35,zn.z),n.add(ce);const st=new _t,S=new re(new He(.36,.22,.26),Rt({color:15196888,roughness:.6})),U=new re(new He(.22,.04,.28),Rt({color:9255466,roughness:.5}));U.position.y=.08,st.add(S,U),st.position.set(oe.x,.2,oe.z),n.add(st);const Y=new pt(.055,.055,.2,8),Z=new pt(.03,.03,.04,8),H=new pt(.46,.5,.06,20),fe=new en(.5,.045,6,24),we=new _i(.58,24),Oe=new Wt({color:2761756,roughness:.45,metalness:.35}),Ne=new gt({color:6813439}),Le=new Map;function nt(N){N.traverse(se=>{se.castShadow=!1,se.receiveShadow=!1})}function ze(){const N=new _t,se=new re(Y,Oe),ge=new re(Z,Ne);return ge.position.y=.12,N.add(se,ge),nt(N),n.add(N),N}function je(){const N=new _t,se=new Wt({color:15260872,roughness:.4,metalness:.14,emissive:16757082,emissiveIntensity:.42}),ge=new re(H,se);ge.position.y=.04;const xe=new re(fe,new gt({color:16769712}));xe.rotation.x=Math.PI/2,xe.position.y=.075;const qe=new gt({color:16762218,transparent:!0,opacity:.9,depthWrite:!1}),Mt=new re(we,qe);Mt.rotation.x=-Math.PI/2,Mt.position.y=.025;const wt=new _t,Ft=new re(Y,Oe),Ot=new re(Z,Ne);return Ot.position.y=.12,wt.add(Ft,Ot),wt.position.y=.24,N.add(Mt,ge,xe,wt),nt(N),N.userData={disc:ge,glow:Mt,cell:wt},n.add(N),N}const vt=new bg(15261908,3813928,.74);n.add(vt);const Je=new Tc(16773596,2.35);Je.position.set(8,18,10),Je.castShadow=!0,Je.shadow.mapSize.set(1024,1024),Je.shadow.camera.near=2,Je.shadow.camera.far=48,Je.shadow.camera.left=-16,Je.shadow.camera.right=16,Je.shadow.camera.top=16,Je.shadow.camera.bottom=-16,Je.shadow.bias=-4e-4,Je.shadow.normalBias=.035,Je.shadow.radius=2,Je.target.position.set(0,0,-8),n.add(Je,Je.target);const At=new Tc(16769732,.7);At.position.set(-10,8,-6),At.castShadow=!1,n.add(At);const ut=[];function Te(N,se,ge,xe=36,qe=8){const Mt=new Er(16757082,xe,qe,2);return Mt.position.set(N,se,ge),n.add(Mt),ut.push(Mt),Mt}Te(0,3.2,-2.1,18,7),Te(-10,2.4,8.2,28,8),Te(9.2,2.6,8.4,26,7),Te(13.5,2.8,-5,34,8),Te(-6,3.4,-8,22,8),Te(4,3.4,-8,20,8),Te(0,5.2,2,30,14),Te(0,4.4,-21.5,34,16),Te(0,3.3,-26.4,16,7),Te(0,4.2,-35.1,22,12),Te(6.2,3.1,-32.5,12,6),Te(-6.1,2.8,-36.2,10,5),Te(0,4.8,-49.4,30,14);const sn=Te(13.4,2.6,1.2,24,6);let lt=!1,Tt=!1,ie=!1,Xe=0,Bt="pa-horn",St=0;function Jt(N){N&&(N.group.position.y=N.baseY+N.lift*6.4)}return n.background=new ot(11774879),n.fog=new ul(11774879,12,40),{colliders:ku(),gates:s,cache:ce,aid:st,textures:e,setDoor(N,se=!1){const ge=a.radio;ge&&(ge.goal=N?1:0,se&&(ge.lift=ge.goal,Jt(ge)))},setDoors(N={},se=!1){const ge={radio:!!N.radio,service:!!N.service,directory:!!N.directory};for(const xe of Object.keys(ge)){const qe=a[xe];qe&&(qe.goal=ge[xe]?1:0,se&&(qe.lift=qe.goal,Jt(qe)))}},setVeil(N,se){if(!o||(o.visible=!!N,!N))return;const ge=se==="DEAD_AIR";l.opacity=ge?.16:.94,l.depthWrite=!ge,l.emissiveIntensity=ge?.62:.3},setDirectoryVeil(N,se){if(!c||(c.visible=!!N,!N))return;const ge=se==="DEAD_AIR";u.opacity=ge?.16:.94,u.depthWrite=!ge,u.emissive.setHex(12876322),u.emissiveIntensity=ge?.7:.4},setHijack({aimed:N,hot:se,id:ge}){lt=!!N&&ge==="pa-horn",Tt=!!se,ie=!!N&&ge==="sprinkler"},pulseHijack(N="pa-horn"){Xe=.48,Bt=N||"pa-horn"},syncDirectory(N){if(!N)return;const se=N.alive?0:-.4;Q.visible=!0,Q.position.set(N.x,se,N.z),Q.rotation.y=N.yaw||0,be.visible=!!(N.alive&&N.exposed),Ze.visible=!!(N.alive&&N.haloVisible),de.visible=!!N.alive,le.emissiveIntensity=N.haloVisible?1.9:.45;const ge=N.alive&&N.hurt>0;x.emissive.setHex(ge?16769712:1708552),x.emissiveIntensity=ge?.85:.16,Ke.intensity=N.alive?N.haloVisible||N.exposed?36:22:8},setChannel(N){const se=n.fog;N==="STATIC"?(se.color.setHex(10133668),se.near=12,se.far=38,n.background.setHex(9475738)):N==="DEAD_AIR"?(se.color.setHex(2764856),se.near=10,se.far=36,n.background.setHex(2369584)):(se.color.setHex(11774879),se.near=12,se.far=40,n.background.setHex(11774879));for(const ge of s)ge.material.opacity=N==="DEAD_AIR"?.14:.97,ge.material.depthWrite=N!=="DEAD_AIR",ge.material.emissiveIntensity=N==="DEAD_AIR"?.45:.18},setPickup(N,se){N==="cache"&&(ce.visible=se),N==="aid"&&(st.visible=se)},syncCells(N,se=St){const ge=new Set;for(const xe of N){if(xe.kind!=="battery")continue;ge.add(xe.id);let qe=Le.get(xe.id);qe||(qe=xe.pad?je():ze(),Le.set(xe.id,qe));const Mt=Math.sin(se*2.2+xe.x)*.03;if(xe.pad){qe.visible=!0,qe.position.set(xe.x,0,xe.z);const wt=!xe.taken,Ft=xe.respawnAt==null?0:Math.max(0,xe.respawnAt-se),Ot=wt?1:mn(1-Ft/pe.padRespawn,0,1);qe.userData.cell.visible=wt,qe.userData.cell.position.y=.24+Mt,qe.userData.disc.material.emissiveIntensity=wt?.85:.2+Ot*.9,qe.userData.glow.material.opacity=wt?.92:.28+Ot*.6,qe.userData.glow.scale.setScalar(wt?1:.7+Ot*.3)}else qe.visible=!xe.taken,qe.position.set(xe.x,.28+Mt,xe.z)}for(const[xe,qe]of Le)ge.has(xe)||(qe.visible=!1)},update(N,se,ge){if(ge){const Ft=Math.round(ge.x/4)*4,Ot=Math.round(ge.z/4)*4;Je.position.set(Ft+8,18,Ot+10),Je.target.position.set(Ft,0,Ot)}const xe=Math.min(.05,Math.max(0,N-St||0));St=N;for(const wt of Object.values(a))wt&&(wt.lift+=(wt.goal-wt.lift)*Math.min(1,xe*4.2),Jt(wt));Xe>0&&(Xe=Math.max(0,Xe-xe));const qe=Bt==="pa-horn"?Xe:0;et.material.opacity=qe>0?qe/.48:0,et.scale.setScalar(qe>0?1+(1-qe/.48)*2.4:1),ue.emissive.setHex(Tt?16774877:13939034),ue.emissiveIntensity=Tt?1.15:lt?.85:.12,$e.material.color.setHex(Tt?16773576:16757066),z.color.setHex(Tt?16769696:16757082),z.intensity=Tt?22:lt?14:7;const Mt=Bt==="sprinkler"&&Xe>0;if(We.material.opacity=Mt?.22+Xe*.4:0,ct.material.color.setHex(Mt||ie?16773576:16757066),sn.intensity=18+Math.sin(N*28)*10+(Math.random()<.04?-12:0),se==="STATIC"){const wt=1+Math.sin(N*6)*.08;ce.scale.setScalar(wt)}else ce.scale.setScalar(1);q.material.color.setHSL(.09,.85,se==="DEAD_AIR"?.18:.55)},practicals:ut}}function cv(n,e){const t=new ca;t.background=new ot(2893343);const i=new re(new He(18,9,18),new gt({color:2893343,side:nn}));t.add(i);const r=new re(new Ct(18,18),new gt({color:3814188}));r.rotation.x=-Math.PI/2,r.position.y=-1.6,t.add(r);const s=new G(0,1.6,-20),a=[[-4.9,.55,-18.2],[4.9,.55,-18.2],[-4.9,.55,-20.45],[4.9,.55,-20.45],[-1.35,.95,-27.15],[1.35,.95,-27.15]],o=new gt({color:16757066});for(const[u,h,d]of a){const f=new re(new Lt(.22,10,8),o);f.position.set(u-s.x,h-s.y,d-s.z),t.add(f)}const c=new re(new He(2.3,1.1,.7),new gt({color:13017434}));c.position.set(0,.55-s.y,-27.55-s.z),t.add(c);const l=new re(new en(.7,.06,8,24),new gt({color:15123818}));return l.position.set(0,2.2-s.y,-26.55-s.z),t.add(l),e.fromScene(t,.04).texture}function uv(n,e){const t=new ca;t.background=new ot(13156274);const i=new re(new He(34,12,30),new gt({color:13156274,side:nn}));t.add(i);const r=new G(0,1.55,.2),s=new re(new Ct(34,30),new gt({color:6972248}));s.rotation.x=-Math.PI/2,s.position.y=-r.y,t.add(s);const a=new re(new Ct(8,10),new gt({color:16774888}));a.rotation.x=Math.PI/2,a.position.set(0,6.9-r.y,1.2-r.z),t.add(a);const o=new re(new _i(1.15,20),new gt({color:1977392}));o.rotation.x=-Math.PI/2,o.position.set(0,.2-r.y,-.05-r.z),t.add(o);const c=new re(new en(1.3,.08,8,24),new gt({color:13017434}));c.rotation.x=Math.PI/2,c.position.set(0,.4-r.y,-.05-r.z),t.add(c);const l=new gt({color:16757066});for(const[u,h,d]of[[-10,2.3,8.2],[9.2,2.3,8.4],[13.2,1.9,-5]]){const f=new re(new Lt(.55,10,8),l);f.position.set(u-r.x,h-r.y,d-r.z),t.add(f)}return e.fromScene(t,.04).texture}const Gc="channel-surfer-best",hv={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},fv={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function Wc(n){let e=n>>>0;return function(){e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Xc(n,e,t,i){return n+(e-n)*(1-Math.exp(-12*i))}function eo(n,e){const t=Math.cos(e),i=Math.sin(e),r=Math.sin(n),s=Math.cos(n),a={x:-r*t,y:i,z:-s*t},o={x:s,y:0,z:-r},c={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:c}}function dv(n,e){const t=new _g({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setSize(960,780,!1),t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.outputColorSpace=Qt,t.toneMapping=ou,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=nu;const i=new ca,r=new Ho(t);i.environment=r.fromScene(new Rg,.012).texture;const s=cv(t,r),a=uv(t,r);r.dispose();const o=new Mn(72,960/780,.08,90);i.add(o);const c=new Er(16770756,14,4.5,2);c.position.set(.05,.02,-.25),o.add(c);const l=lv(i),u=new gi(i,o,480,390,8);u.kernelRadius=.18,u.minDistance=.001,u.maxDistance=.06;const h=L_(i,l.textures,{aisle:s,court:a}),d=iv(o,l.textures),f=72,m=new Float32Array(f*3),_=new Float32Array(f*3),g=new kt;g.setAttribute("position",new $t(m,3)),g.setAttribute("color",new $t(_,3));const p=new Eg(g,new Ou({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));i.add(p);const w=document.createElement("canvas");w.width=64,w.height=64;const b=w.getContext("2d"),y=b.createRadialGradient(32,32,1,32,32,30);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.35,"rgba(255,214,150,0.75)"),y.addColorStop(1,"rgba(255,160,60,0)"),b.fillStyle=y,b.fillRect(0,0,64,64);const O=new Si(w);O.colorSpace=Qt;const P=[];for(let oe=0;oe<12;oe++){const ce=new xg(new Uu({map:O,transparent:!0,depthWrite:!1,blending:js}));ce.visible=!1,ce.frustumCulled=!1,i.add(ce),P.push(ce)}const C=28,I=new Float32Array(C*6),E=new Float32Array(C*6),M=new kt;M.setAttribute("position",new $t(I,3)),M.setAttribute("color",new $t(E,3)),i.add(new Sg(M,new Fu({vertexColors:!0,transparent:!0,opacity:.95})));let T="title",A=null,L=[],W=null,V=null,q=[],te=[],v="level",D=!1,F=!1,B=!1,$="",Me=!1,K=!1,ue=0,ne=0,ae=!1,Se="",De="",Ge="",mt="",$e=[],et=[],z=[],he={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},Qe=Wc(1),Fe=0,ke=0,ct=0,We=0,R=.55,x=0,X=0,J=0,le="",Q=0,Ve=0,ve="",Ee=0;const it=[],de=new Set;let be=0,Ze="",Ke=!1;try{be=Number(localStorage.getItem(Gc))||0}catch(oe){be=0}function _e(oe,ce,ye,Ye,st){for(let S=0;S<st;S++)$e.push({x:oe,y:ce,z:ye,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:Ye});$e.length>f&&$e.splice(0,$e.length-f),et.push({x:oe,y:ce,z:ye,life:.14,max:.14,color:Ye}),et.length>P.length&&et.shift()}function Ue(oe){le=oe,Q=.95,Ve+=1}function Ie(oe,ce){de.has(oe)||(de.add(oe),it.push(ce))}function rt(oe){Ze!==oe&&(Ze=oe,l.setChannel(oe),d.setChannel(oe),e.setChannel(oe))}function k(){return ku({doorOpen:D,veilUp:!!(W&&W.alive&&W.veilUp),serviceOpen:F,directoryOpen:B,directoryVeilUp:!!(V&&V.alive&&V.veilUp)})}function me(){return{level:A.level,xp:A.xp,pending:A.pending,mods:{...A.mods||{}}}}function j(oe){return{x:oe.x,y:oe.y,z:oe.z,yaw:oe.yaw||0,pitch:0,vx:0,vz:0}}function ee(){A=Os(),L=[...Vu(),...na(),...Ks()],W=Oc(),V=ks(),q=Fs(),D=!1,F=!1,B=!1,$="",Me=!1,K=!1,ue=0,ne=0,ae=!1,De="",Ge="",mt="",te=[],$e=[],et=[],z=[],he=j(Fg),Qe=Wc((Date.now()&65535)+3),Fe=0,ct=0,We=.2,R=.6,x=0,X=0,J=0,Ke=!1,le="",Q=0,ve="",Ee=0,it.length=0,de.clear(),h.reset(L),h.resetPriest(W),l.setDoors({radio:!1,service:!1,directory:!1},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(V),rt("LIVE")}function Ae(){ue=0,ne=0,ae=!1,De="",Ge="",mt="",te=[],$e=[],et=[],z=[],We=.45,Ke=!1,$="",J=0,X=0,x=0}function Ce(){A=Pi({...Os(),signal:80,...me()}),L=[...L.filter(ce=>ce.room==="court"),...na().map(ce=>({...ce,dormant:!1})),...Ks()],W={...Oc(),active:!0},V=ks();const oe=Fs();q=[...q.filter(ce=>ce.z>-14.5),...oe.filter(ce=>ce.z<-14.5)],D=!0,F=!1,B=!1,Me=!1,K=!1,Ae(),he=j(Og),h.reset(L),h.resetPriest(W),l.setDoors({radio:!0,service:!1,directory:!1},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(V),rt("LIVE"),Ue("RADIO WING")}function at(){A=Pi({...Os(),signal:80,...me()}),L=[...L.filter(ce=>ce.room==="court"||ce.room==="chapel"),...Ks().map(ce=>({...ce,dormant:!1}))],W={...W,alive:!1,phase:"dead",veilUp:!1,active:!1,rite:null},V=ks();const oe=Fs();q=[...q.filter(ce=>ce.z>-29.2),...oe.filter(ce=>ce.z<-29.2)],D=!0,F=!0,B=!1,Me=!1,K=!1,Ae(),he=j(zg),h.reset(L),h.resetPriest(W),l.setDoors({radio:!0,service:!0,directory:!1},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(V),rt("LIVE"),Ue("SERVICE WING")}function Nt(){A=Pi({...Os(),signal:80,...me()}),V={...ks(),active:!0};const oe=Fs();q=[...q.filter(ce=>ce.z>-41.4),...oe.filter(ce=>ce.z<-41.4)],D=!0,F=!0,B=!0,Me=!0,K=!1,Ae(),he=j(Bg),h.reset(L),l.setDoors({radio:!0,service:!0,directory:!0},!0),l.setVeil(!1,"LIVE"),l.setDirectoryVeil(!1,"LIVE"),l.syncDirectory(V),rt("LIVE"),Ue("DIRECTORY")}ee();function zt(){if(Fe>0&&!(be>0&&Fe>=be)){be=Fe;try{localStorage.setItem(Gc,String(be))}catch(oe){}}}function yt(oe,ce){const ye=Kg(A,oe);ye.result==="ok"?(A=ye.state,ct+=1,J=.45,Ue(hv[A.channel]+" · "+ia(A.channel,A).name),e.play(fv[A.channel]),rt(A.channel)):ye.result==="denied"&&(Ue("NO SIGNAL"),e.play("deny"))}function rn(){const oe=Rc(A);if(A=oe.state,!oe.fired)return;const{forward:ce,right:ye,up:Ye}=eo(he.yaw,he.pitch),st={x:he.x,y:he.y,z:he.z},S=m_(ce,ye,Ye,oe.profile.pellets,oe.profile.spread,Math.random),U={x:st.x+ce.x*.42+ye.x*.14-Ye.x*.1,y:st.y+ce.y*.42+ye.y*.14-Ye.y*.1,z:st.z+ce.z*.42+ye.z*.14-Ye.z*.1},Y=Fe<ue,Z=oe.profile.kind==="hitscan"?[.45,.97,1]:oe.profile.kind==="phase"?[.74,.8,.84]:[.9,.9,.9],H=Y?[.45,.97,1]:Z,fe=k();let we=!1,Oe=!1;x=Math.min(.07,x+(oe.profile.kind==="spread"?.05:oe.profile.kind==="phase"?.03:.014)),d.fire(oe.profile.kind),e.play(oe.profile.kind==="spread"?"static":oe.profile.kind==="phase"?"phase":"live");for(const Ne of S){const Le=f_(st,Ne,oe.profile.range,L,fe,{phase:oe.profile.phases}),nt=W.alive?V_(st,Ne,oe.profile.range,W,A.channel):null,ze=V&&V.alive&&V.active?J_(st,Ne,oe.profile.range,V,A.channel):null;let je=null;nt&&(!Le||nt.t<Le.t)&&(je=nt),ze&&(!Le||ze.t<Le.t)&&(!je||ze.t<je.t)&&(je=ze);const vt=je||Le,Je=Math.min(oe.profile.range,22),At=vt?{x:vt.x,y:vt.y,z:vt.z}:{x:st.x+Ne.x*Je,y:st.y+Ne.y*Je,z:st.z+Ne.z*Je};if((!vt||vt.t>.45)&&z.push({a:U,b:At,color:H,life:.16}),je&&je.kind==="priest"){const Tt=Ka(oe.profile.damage,je.t,oe.profile.range,oe.profile.falloff)*(Y?Cn.retuneMult:1),ie=k_(W,Tt);if(W=ie.priest,ie.dealt>0&&(we=!0),_e(je.x,je.y,je.z,Y?[.45,.97,1]:[.96,.94,.88],5),!ie.killed){const Xe=zc(W,{channel:A.channel,weak:je.weak,halo:je.halo,crossed:!1});Xe.broken?(Ei(Xe),Oe=!0):W=Xe.priest}continue}if(je&&je.kind==="directory"){const Tt=Ka(oe.profile.damage,je.t,oe.profile.range,oe.profile.falloff),ie=$_(V,Tt);if(V=ie.boss,ie.dealt>0&&(we=!0),_e(je.x,je.y,je.z,[1,.62,.22],6),!ie.killed){const Xe=Vc(V,{channel:A.channel,weak:je.weak,halo:je.halo,crossed:!1});Xe.broken?(ii(Xe),Oe=!0):V=Xe.boss}continue}if(!Le)continue;if(Le.kind==="world"){_e(Le.x,Le.y,Le.z,[.75,.68,.55],6);continue}const ut=L.findIndex(Tt=>Tt.id===Le.id);if(ut<0||!L[ut].alive)continue;const Te=d_(L[ut],Fe),sn=Ka(oe.profile.damage,Le.t,oe.profile.range,oe.profile.falloff)*(Y?Cn.retuneMult:1),lt=p_(Te.enemy,{weak:Le.weak,damage:sn});if(lt.enemy.hurt=.1,L[ut]=lt.enemy,we=lt.dealt>0,_e(Le.x,Le.y,Le.z,[.96,.94,.9],8),lt.killed){const Tt=o_(A,{distance:Le.t,channel:A.channel,burst:Te.burst});A=Tt.state,qt(pe.xpKill),gn(lt.enemy),_e(Le.x,Le.y,Le.z,[1,.68,.25],18),e.play("death"),Ue(Tt.aggressive?"AGGRESSIVE +"+Tt.amount:"SIGNAL +"+Tt.amount)}}we&&!Oe&&e.play("hit"),z.length>C&&z.splice(0,z.length-C)}function gn(oe){const ce="drop-"+oe.id;q.some(ye=>ye.id===ce)||q.push(n_(oe))}function Ei(oe){W=oe.priest,oe.broken&&(e.play("rite-break"),_e(W.x,2.15,W.z,[.96,.78,.32],20),J=Math.max(J,.34),W.alive&&Ue("RITE BROKEN"),qt(pe.xpRite))}function ii(oe){V=oe.boss,oe.broken&&(e.play("rite-break"),_e(V.x,2.2,V.z,[1,.68,.22],22),J=Math.max(J,.34),V.alive&&Ue("RITE BROKEN"),qt(pe.xpRite))}function qt(oe){const ce=Vr(A,oe);return A=ce.state,ce.leveled>0&&D?_n("level"):ce.leveled>0&&Ue("LEVEL "+A.level),ce}function _n(oe){(A.pending||0)<=0||T!=="play"||(v=oe,T="levelup")}function ri(){const oe=W.x,ce=1.72,ye=W.z,Ye=he.x-oe+(Qe()-.5)*.22,st=1.15-ce+(Qe()-.5)*.12,S=he.z-ye+(Qe()-.5)*.22,U=Math.hypot(Ye,st,S)||1,Y=yn.boltSpeed;return{x:oe,y:ce,z:ye,vx:Ye/U*Y,vy:st/U*Y,vz:S/U*Y,damage:yn.boltDamage,life:2.6}}function Wi(){const oe=V.x,ce=1.85,ye=V.z,Ye=he.x-oe+(Qe()-.5)*.18,st=1.15-ce+(Qe()-.5)*.1,S=he.z-ye+(Qe()-.5)*.18,U=Math.hypot(Ye,st,S)||1,Y=Sn.boltSpeed;return{x:oe,y:ce,z:ye,vx:Ye/U*Y,vy:st/U*Y,vz:S/U*Y,damage:Sn.boltDamage,life:2.6}}function si(oe,ce){const ye=jg(A,oe);if(A=ye.state,ye.forced&&(Ue("NO SIGNAL"),e.play("nosignal"),J=.55,rt(A.channel)),ce.channel)yt(ce.channel);else if(ce.cycle){const ie=mn(ce.cycle,-3,3),Xe=ie>0?1:-1;for(let Bt=0;Bt!==ie;Bt+=Xe)yt(qg(A.channel,Xe))}he.yaw-=ce.lookX*.00215,he.pitch=mn(he.pitch-ce.lookY*.00215,-1.35,1.35);const Ye=L.some(ie=>ie.alive&&ie.room==="court");let st=!1;if(!D&&!Ye&&(D=!0,st=!0,A=Pi(A),A=Vr(A,pe.xpCourt).state,Ue("RADIO WING"),e.play("door"),Ie("wing","North door is open. The radio wing is still on the air.")),D&&(A.pending||0)>0&&T==="play"){_n(st?"break":"level");return}if(D&&he.z<-15.05){for(let ie=0;ie<L.length;ie++)L[ie].room==="chapel"&&L[ie].dormant&&(L[ie]={...L[ie],dormant:!1});W.active||(W={...W,active:!0},Ie("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}if(F&&he.z<-29.6){for(let ie=0;ie<L.length;ie++)L[ie].room==="service"&&L[ie].dormant&&(L[ie]={...L[ie],dormant:!1});Ie("service","Service wing. Aim at the sprinkler and press E. It slows the Tessera in this room.")}B&&V&&he.z<-42.2&&!V.active&&(V={...V,active:!0},Ie("directory","The Directory. LIVE the listing. STATIC the index. DEAD AIR through the gate."));const{forward:S}=eo(he.yaw,he.pitch);let U=null,Y=1/0;for(const ie of Jr){const Xe=!Zu(he.x,he.y,he.z,ie.x,ie.y,ie.z,k()),Bt=Q_({origin:{x:he.x,y:he.y,z:he.z},dir:S,point:ie,maxDist:Cn.maxDist,cone:Cn.cone,blocked:Xe});!Bt.aimed||Bt.dist>=Y||(U=ie,Y=Bt.dist)}ae=!!U,Se=U?U.id:"";const Z=Fe<ue,H=ne>Fe;if(Se==="sprinkler"&&ae?(De=H?"SPRINKLERS RECHARGING":"E  OPEN SPRINKLERS",Ge=H?"cool":"ready"):ae?(De=Z?"PA RETUNED":H?"PA RECHARGING":"E  RETUNE PA",Ge=Z?"hot":H?"cool":"ready"):(De=Z?"PA RETUNED":"",Ge=Z?"hot":""),ce.use&&ae&&U){const ie=ev({cooldownUntil:ne},Fe,ua(A).paCooldown);ie.ok?U.id==="sprinkler"?(ne=ie.cooldownUntil,L=nv(L,U,Cn.sprinklerRadius,Cn.slow),qt(pe.xpHijack),Ue("SPRINKLERS"),e.play("hijack"),_e(U.x,U.y,U.z,[1,.72,.28],22),J=Math.max(J,.22),X=Math.max(X,.03),l.pulseHijack("sprinkler")):(ne=ie.cooldownUntil,ue=Fe+Cn.retune,L=tv(L,U,Cn.radius,Cn.stun),A=Jg(A).state,qt(pe.xpHijack),Ue("PA RETUNE"),e.play("hijack"),_e(U.x,U.y,U.z,[.45,.97,1],28),J=Math.max(J,.28),X=Math.max(X,.035),l.pulseHijack("pa-horn")):e.play("deny")}const fe=Jr[0];D&&Math.hypot(he.x-fe.x,he.z-fe.z)<8&&Ie("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const we=z_(W,oe,{player:{x:he.x,z:he.z}});W=we.priest;for(const ie of we.events)if(ie.type==="announce")Ue(Fc(ie.rite)),e.play("rite");else if(ie.type==="fail"){const Xe=ja(A,ie.damage);A=Xe.state,Xe.hit&&(e.play("rite-fail"),X=Math.max(X,.045)),Ue("RITE HOLDS")}else ie.type==="shot"&&te.length<16&&(te.push(ri()),e.play("bolt"));const Oe=K_(V,oe,{player:{x:he.x,z:he.z}});V=Oe.boss;for(const ie of Oe.events)if(ie.type==="announce")Ue(kc(ie.rite)),e.play("rite");else if(ie.type==="fail"){const Xe=ja(A,ie.damage);A=Xe.state,Xe.hit&&(e.play("rite-fail"),X=Math.max(X,.05)),Ue("RITE HOLDS")}else ie.type==="shot"&&te.length<16&&(te.push(Wi()),e.play("bolt"));V.alive&&V.phase==="rite"?mt=kc(V.rite):mt=W.alive&&W.phase==="rite"?Fc(W.rite):"";const Ne=k();for(let ie=0;ie<L.length;ie++){if(!L[ie].alive)continue;const Xe=x_(L[ie],oe,{channel:A.channel,player:{x:he.x,y:1.2,z:he.z},colliders:Ne,allies:L,rng:Qe});L[ie]=Xe.enemy,Xe.shot&&te.length<16&&(te.push(Xe.shot),e.play("bolt"))}const Le=Gu(A.channel),nt=-Math.sin(he.yaw),ze=-Math.cos(he.yaw),je=Math.cos(he.yaw),vt=-Math.sin(he.yaw);let Je=0,At=0;ce.forward&&(Je+=nt,At+=ze),ce.back&&(Je-=nt,At-=ze),ce.right&&(Je+=je,At+=vt),ce.left&&(Je-=je,At-=vt);const ut=Math.hypot(Je,At);ut>0&&(Je=Je/ut*Le,At=At/ut*Le),he.vx=Xc(he.vx,Je,12,oe),he.vz=Xc(he.vz,At,12,oe);const Te=qu(he.x,he.z,he.vx*oe,he.vz*oe,pe.playerRadius,Ne,A.channel,Ng);if(he.x=Te.x,he.z=Te.z,W.alive&&W.phase==="rite"&&W.rite==="veil"&&A.channel==="DEAD_AIR"&&he.z<kg){const ie=zc(W,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});ie.broken&&Ei(ie)}if(V&&V.alive&&V.phase==="rite"&&V.rite==="gate"&&A.channel==="DEAD_AIR"&&he.z<Vg){const ie=Vc(V,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});ie.broken&&ii(ie)}if(We>0)We-=oe;else if(ce.fireDown){const ie=Rc(A);!ie.fired&&ie.reason==="dry"?Ke||(Ke=!0,e.play("dry"),d.fire("dry"),Ue("NO BATTERY")):ie.fired?(Ke=!1,rn()):Ke=!1}else Ke=!1;const sn=[];for(const ie of te){const Xe=Math.hypot(ie.vx,ie.vy,ie.vz)||1,Bt=Xe*oe,St=ml(ie.x,ie.y,ie.z,ie.vx/Xe,ie.vy/Xe,ie.vz/Xe,Bt,k());if(St){_e(St.x,St.y,St.z,[1,.62,.22],3);continue}if(ie.x+=ie.vx*oe,ie.y+=ie.vy*oe,ie.z+=ie.vz*oe,ie.life-=oe,ie.life<=0||ie.y<0||ie.y>6)continue;const Jt=ie.x-he.x,N=ie.z-he.z;if(Jt*Jt+N*N<.4*.4&&ie.y>.25&&ie.y<1.75){const se=ja(A,ie.damage);A=se.state,se.hit&&(e.play("hurt"),X=.05,J=Math.max(J,.2)),_e(ie.x,ie.y,ie.z,[1,.5,.18],6);continue}sn.push(ie)}te=sn,q=r_(q,Fe);for(let ie=0;ie<q.length;ie++){const Xe=q[ie];if(Xe.taken||!__(Xe,A.channel)||Math.hypot(he.x-Xe.x,he.z-Xe.z)>1.15)continue;const Bt=g_(A,Xe);Bt.took&&(A=Bt.state,q[ie]=i_(Xe,Fe),e.play("pickup"),Ue(s_(Xe,A.channel)))}Fe>.45&&Ie("intro","1 LIVE Clicker, 2 STATIC Scatter, 3 DEAD AIR Phaser. Each shot spends a battery."),q.some(ie=>ie.pad&&Math.hypot(he.x-ie.x,he.z-ie.z)<4.2)&&Ie("pads","Amber pads recharge. They feed the remote you are holding, then a little to the others."),(Math.hypot(he.x,he.z)<7.5||Fe>11)&&Ie("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot(he.x-10.4,he.z)<6.2||Fe>20)&&Ie("gate","Striped shutter is DEAD AIR. The Phaser fires through it. Clicker and Scatter stop."),he.x>12.1&&q.some(ie=>ie.cloaked&&!ie.taken)&&Ie("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const lt=L.filter(ie=>ie.alive&&ie.room==="court");if(lt.length===1&&lt[0].id==="alley"&&Ie("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),Ee>0?(Ee-=oe,Ee<=0&&(ve="")):it.length&&(ve=it.shift(),Ee=6.2),A.health<=0){$=B?"directory":F?"service":D?"radio":"",T="dead",e.play("ui");return}!W.alive&&D&&!F&&(L=L.map(Xe=>Xe.room==="chapel"&&Xe.alive?{...Xe,alive:!1,hittable:!1}:Xe),A=Pi(ra(A,40)),A=Vr(A,pe.xpWing).state,F=!0,Ue("OFF THE AIR"),e.play("death"),e.play("door"),_e(W.x,2.1,W.z,[.96,.8,.38],34),_e(W.x,2.75,W.z,[.9,.72,.28],16),Ie("service-door","Service door is open. The mall keeps going north."),(A.pending||0)>0&&T==="play"&&_n("break"));const Tt=L.some(ie=>ie.alive&&ie.room==="service");if(F&&!Tt&&!B&&!Me&&(Me=!0,B=!0,A=Pi(A),A=Vr(A,pe.xpWing).state,Ue("DIRECTORY"),e.play("door"),Ie("directory-door","Directory door is open. That kiosk is the last channel."),(A.pending||0)>0&&T==="play"&&_n("break")),B&&V&&!V.alive){if(K||(K=!0,A=Pi(ra(A,40)),A=Vr(A,pe.xpWing).state,Ue("MALL CLEAR"),e.play("death"),_e(V.x,2.2,V.z,[1,.68,.22],36),_e(V.x,2.95,V.z,[.96,.78,.32],18),R=1.2),(A.pending||0)>0&&T==="play"){_n("level");return}R-=oe,R<=0&&T==="play"&&(T="clear",zt(),e.play("pickup"))}}function ai(oe){for(let ce=$e.length-1;ce>=0;ce--){const ye=$e[ce];ye.life-=oe,ye.vy-=7*oe,ye.x+=ye.vx*oe,ye.y+=ye.vy*oe,ye.z+=ye.vz*oe,ye.life<=0&&$e.splice(ce,1)}for(let ce=0;ce<f;ce++){const ye=$e[ce],Ye=ce*3;if(!ye){m[Ye+1]=-40,_[Ye]=_[Ye+1]=_[Ye+2]=0;continue}m[Ye]=ye.x,m[Ye+1]=ye.y,m[Ye+2]=ye.z;const st=mn(ye.life*3,0,1);_[Ye]=ye.color[0]*st,_[Ye+1]=ye.color[1]*st,_[Ye+2]=ye.color[2]*st}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0;for(let ce=et.length-1;ce>=0;ce--)et[ce].life-=oe,et[ce].life<=0&&et.splice(ce,1);for(let ce=0;ce<P.length;ce++){const ye=P[ce],Ye=et[ce];if(!Ye){ye.visible=!1;continue}const st=Ye.life/Ye.max;ye.visible=!0,ye.position.set(Ye.x,Ye.y,Ye.z),ye.scale.setScalar(.18+(1-st)*.55),ye.material.opacity=st,ye.material.color.setRGB(Ye.color[0],Ye.color[1],Ye.color[2])}for(let ce=z.length-1;ce>=0;ce--)z[ce].life-=oe,z[ce].life<=0&&z.splice(ce,1);for(let ce=0;ce<C;ce++){const ye=z[ce],Ye=ce*6;if(!ye){I[Ye+1]=-40,I[Ye+4]=-40;continue}I[Ye]=ye.a.x,I[Ye+1]=ye.a.y,I[Ye+2]=ye.a.z,I[Ye+3]=ye.b.x,I[Ye+4]=ye.b.y,I[Ye+5]=ye.b.z;for(let st=0;st<2;st++)E[Ye+st*3]=ye.color[0],E[Ye+st*3+1]=ye.color[1],E[Ye+st*3+2]=ye.color[2]}M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0}function zn(oe){if(T==="title"){o.position.set(Math.sin(ke*.16)*.5,2.5,9.3),o.lookAt(0,1.2,-1.4),d.setVisible(!1);return}d.setVisible(!0),X*=Math.exp(-9*oe),x*=Math.exp(-11*oe),o.position.set(he.x+(Math.random()-.5)*X,he.y,he.z+(Math.random()-.5)*X),o.rotation.order="YXZ",o.rotation.y=he.yaw,o.rotation.x=he.pitch-x,o.rotation.z=0;const{right:ce}=eo(he.yaw,0),ye=T==="play"?he.vx*ce.x+he.vz*ce.z:0;d.update(oe,T==="play"?Math.hypot(he.vx,he.vz):0,{strafe:ye})}return{get mode(){return T},start(){ee(),T="play",e.play("ui")},resume(){T==="pause"&&(T="play")},pause(){T==="play"&&(T="pause")},replay(){$==="directory"?Nt():$==="service"?at():$==="radio"?Ce():ee(),T="play",e.play("ui")},toTitle(){ee(),T="title"},update(oe,ce){const ye=Math.min(.05,Math.max(0,oe)||0);ke+=ye,T==="play"&&(Fe+=ye,si(ye,ce)),Q>0&&(Q-=ye,Q<=0&&(le="")),J=Math.max(0,J-ye*3.2),rt(T==="title"?"LIVE":A.channel);const Ye=q.find(U=>U.cloaked),st=q.find(U=>U.kind==="health");l.setPickup("cache",!!(Ye&&!Ye.taken&&A.channel==="STATIC"&&T!=="title")),l.setPickup("aid",!!(st&&!st.taken)),l.syncCells(q,T==="play"?Fe:0),l.setDoors({radio:D,service:F,directory:B}),l.setVeil(!!(W.alive&&W.veilUp),T==="title"?"LIVE":A.channel),l.setDirectoryVeil(!!(V&&V.alive&&V.veilUp),T==="title"?"LIVE":A.channel),l.syncDirectory(V),l.setHijack({aimed:T==="play"&&ae,hot:T==="play"&&Fe<ue,id:Se}),l.update(ke,A.channel,he),h.setProbeBlend(he.z),h.sync(L,ye,ke,A.channel),h.syncPriest(W,ye,ke,T==="title"?"LIVE":A.channel),h.syncBolts(te),ai(ye),zn(ye);const S=T==="title"?"LIVE":A.channel;u.kernelRadius=S==="DEAD_AIR"?.05:.18,u.maxDistance=S==="DEAD_AIR"?.02:.06,t.render(i,o),t.shadowMap.autoUpdate=!1,u.renderToScreen=!0,u.render(t),t.shadowMap.autoUpdate=!0,t.setRenderTarget(null)},chooseUpgrade(oe){if(T!=="levelup")return!1;const ye=Za(A)[oe];if(!ye)return!1;const Ye=t_(A,ye.id);return Ye.applied?(A=Ye.state,Ue(ye.name),e.play("pickup"),(A.pending||0)>0&&Za(A).length||(A={...A,pending:0},T="play"),!0):!1},hud(){const oe=he.z<-41.55?"directory":he.z<-29.35?"service":he.z<-14.85?"radio":"court",ce=L.filter(fe=>fe.alive&&fe.room==="court").length,ye=L.filter(fe=>fe.alive&&fe.room==="chapel").length+(W.alive?1:0),Ye=L.filter(fe=>fe.alive&&fe.room==="service").length,st=V&&V.alive?1:0,S={court:["COURT",ce,"TESSERA"],radio:["RADIO",ye,"ON AIR"],service:["SERVICE",Ye,"TESSERA"],directory:["DIRECTORY",st,"ON AIR"]}[oe],U=T==="play",Y=ia(A.channel,A),Z=T==="levelup"?Za(A):[],H=oe==="directory"&&V&&V.alive?V.hp/V.maxHp:oe==="radio"&&W.alive?W.hp/W.maxHp:null;return{mode:T,health:A.health,signal:A.signal,channel:A.channel,remote:Y.name,ammo:A.batteries[A.channel],ammoMax:Rr(A)[A.channel],level:A.level||1,xp:Qg(A),levelReason:v,offers:Z.map(fe=>({id:fe.id,name:fe.name,detail:fe.detail})),enemies:S[1],roomLabel:S[0],countLabel:S[2],tip:ve,banner:le,bannerSerial:Ve,flash:J,hurt:A.hurtTimer,time:Fe,best:be,swaps:ct,muted:e.muted,prompt:U?De:"",promptKind:U?Ge:"",rite:U?mt:"",boss:H,checkpoint:$}}}}const pv=960,mv=780,rh=document.getElementById("stage"),sa=document.getElementById("view"),Cr=ah();let ht;try{ht=dv(sa,Cr)}catch(n){const e=document.getElementById("boot-error");throw e&&(e.textContent="The picture failed to come up. "+(n&&n.message?n.message:"")),n}const xr=new Set,Gt={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let Yc=-1;const gv=document.getElementById("health-fill"),_v=document.getElementById("health-num"),vv=document.getElementById("signal-fill"),xv=document.getElementById("signal-num"),Mv=document.getElementById("ch-name"),qc=document.getElementById("remote-readout"),Zc=document.getElementById("level-chip"),Kc=document.getElementById("xp-fill"),Wr=document.getElementById("levelup"),yv=document.getElementById("level-kicker"),Sv=document.getElementById("level-title"),Ev=document.getElementById("level-body"),jc=document.getElementById("level-picks"),wv=document.getElementById("level-keys"),bv=document.getElementById("enemy-count"),Tv=document.getElementById("room-label"),Av=document.getElementById("count-label"),Rv=document.getElementById("rite"),$c=document.getElementById("prompt"),Jc=document.getElementById("boss-wrap"),Cv=document.getElementById("boss-fill"),Pv=document.getElementById("tip"),Vs=document.getElementById("banner"),Qc=document.getElementById("hurt"),Dv=document.getElementById("flash"),Iv=document.getElementById("panel"),dr=document.getElementById("panel-kicker"),pr=document.getElementById("panel-title"),mr=document.getElementById("panel-body"),gr=document.getElementById("panel-meta"),Fi=document.getElementById("panel-primary"),Oi=document.getElementById("panel-secondary");function _l(){const n=Math.min(window.innerWidth/pv,window.innerHeight/mv);rh.style.transform=`scale(${Math.max(.05,n)})`}_l();window.addEventListener("resize",_l);window.addEventListener("orientationchange",_l);function xi(){document.pointerLockElement!==sa&&sa.requestPointerLock()}function ha(){Cr.ensure(),ht.mode==="title"?(ht.start(),xi()):ht.mode==="pause"?(ht.resume(),xi()):(ht.mode==="clear"||ht.mode==="dead")&&(ht.replay(),xi())}document.getElementById("start").addEventListener("click",n=>{n.stopPropagation(),ha()});Fi.addEventListener("click",n=>{n.stopPropagation(),ha()});Oi.addEventListener("click",n=>{n.stopPropagation(),Cr.ensure(),(ht.mode==="pause"||ht.mode==="clear"||ht.mode==="dead")&&(ht.mode==="pause"?ht.replay():ht.toTitle(),ht.mode==="play"&&xi())});window.addEventListener("keydown",n=>{if(n.repeat)return;if(ht.mode==="levelup"){const t=Ac(n.code);if(t){const i=t==="LIVE"?0:t==="STATIC"?1:2;ht.chooseUpgrade(i)&&ht.mode==="play"&&xi()}return}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),xr.add(n.code);const e=Ac(n.code);e&&ht.mode==="play"&&(Gt.channel=e),n.code==="KeyQ"&&ht.mode==="play"&&(Gt.cycle+=1),n.code==="KeyE"&&ht.mode==="play"&&(Gt.use=!0),n.code==="KeyM"&&Cr.toggle(),n.code==="Escape"&&ht.mode==="play"&&ht.pause(),n.code==="Enter"&&ha(),n.code==="KeyR"&&(ht.mode==="pause"||ht.mode==="clear"||ht.mode==="dead")&&(Cr.ensure(),ht.replay(),xi())});window.addEventListener("keyup",n=>xr.delete(n.code));window.addEventListener("mousemove",n=>{ht.mode==="play"&&(Gt.lookX+=n.movementX||0,Gt.lookY+=n.movementY||0)});window.addEventListener("mousedown",n=>{if(n.button===0&&!(n.target.closest&&n.target.closest("button"))){if(ht.mode==="title"){ha();return}ht.mode==="play"&&(xi(),Gt.fire=!0)}});window.addEventListener("mouseup",n=>{n.button===0&&(Gt.fire=!1)});window.addEventListener("wheel",n=>{n.preventDefault(),!(ht.mode!=="play"||Math.abs(n.deltaY)<4)&&(Gt.cycle+=n.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==sa&&ht.mode==="play"&&ht.pause()});window.addEventListener("blur",()=>{ht.mode==="play"&&(ht.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&ht.mode==="play"&&(ht.pause(),document.pointerLockElement&&document.exitPointerLock())});function Lv(n){if(!Wr)return;const e=n.mode==="levelup";if(Wr.hidden=!e,!e){Wr.dataset.offers="";return}yv.textContent=n.levelReason==="break"?"KRCD 7 · STATION BREAK":"KRCD 7 · LEVEL UP",Sv.textContent="LEVEL "+(n.level||1),Ev.textContent=n.levelReason==="break"?"Court is clear. Pick a retune before the wing.":"Pick a retune. Channels stay the same.";const t=n.offers||[],i=t.map(r=>r.id).join("|");wv.textContent=t.map((r,s)=>s+1).join("  ·  "),Wr.dataset.offers!==i&&(Wr.dataset.offers=i,jc.replaceChildren(),t.forEach((r,s)=>{const a=document.createElement("button");a.type="button";const o=document.createElement("b");o.textContent=`${s+1}  ${r.name}`;const c=document.createElement("span");c.textContent=r.detail,a.append(o,c),a.addEventListener("click",l=>{l.stopPropagation(),Cr.ensure(),ht.chooseUpgrade(s)&&ht.mode==="play"&&xi()}),jc.appendChild(a)}))}function Wn(n){return n>0?n.toFixed(1)+"s":"—"}function Uv(n){var i,r;const e=n.channel==="DEAD_AIR"?"ch-dead":n.channel==="STATIC"?"ch-static":"ch-live";rh.className=`mode-${n.mode} ${e}`,gv.style.width=Math.max(0,n.health)+"%",vv.style.width=Math.max(0,n.signal)+"%",_v.textContent=String(Math.ceil(n.health)),xv.textContent=String(Math.ceil(n.signal)),Mv.textContent=n.channel==="DEAD_AIR"?"DEAD AIR":n.channel,qc&&(qc.textContent=`${n.remote||""}  ${(i=n.ammo)!=null?i:0}/${(r=n.ammoMax)!=null?r:0}`),Zc&&(Zc.textContent=`LV ${n.level||1}`),Kc&&(Kc.style.width=Math.max(0,Math.min(100,Math.round((n.xp||0)*100)))+"%"),bv.textContent=String(n.enemies),Tv.textContent=n.roomLabel||"COURT",Av.textContent=n.countLabel||"TESSERA",Rv.textContent=n.rite||"",$c.textContent=n.prompt||"",$c.className=n.promptKind||"",n.boss==null?Jc.classList.remove("on"):(Jc.classList.add("on"),Cv.style.width=Math.max(0,Math.min(100,n.boss*100))+"%"),Pv.textContent=n.tip||"",Qc.style.opacity=n.health<35?"0.28":"0",n.hurt>.2&&(Qc.style.opacity="0.55"),Dv.style.opacity=String(Math.max(0,Math.min(.7,n.flash))),n.bannerSerial!==Yc&&(Yc=n.bannerSerial,n.banner&&(Vs.textContent=n.banner,Vs.classList.remove("show"),Vs.offsetWidth,Vs.classList.add("show")));const t=n.mode==="pause"||n.mode==="clear"||n.mode==="dead";Iv.hidden=!t,Lv(n),n.mode==="levelup"&&document.pointerLockElement&&document.exitPointerLock(),t&&(n.mode==="pause"?(dr.textContent="KRCD 7 · STILL ON AIR",pr.textContent="PAUSED",mr.textContent="Esc released the mouse. Click resume to lock it again.",gr.textContent=n.muted?"MUTED":"",Fi.textContent="Resume",Oi.textContent="Restart"):n.mode==="clear"?(dr.textContent="KRCD 7 · DIRECTORY",pr.textContent="MALL CLEAR",mr.textContent="The Directory is off the air. The mall run is clear.",gr.textContent=`TIME ${Wn(n.time)} · BEST ${Wn(n.best)} · ${n.swaps} CHANNEL CHANGES`,Fi.textContent="Replay",Oi.textContent="Title"):n.checkpoint==="directory"?(dr.textContent="KRCD 7 · DIRECTORY",pr.textContent="WING LOST",mr.textContent="The earlier wings stay clear. Retry from the directory door.",gr.textContent=`TIME ${Wn(n.time)} · BEST ${Wn(n.best)}`,Fi.textContent="Retry wing",Oi.textContent="Title"):n.checkpoint==="service"?(dr.textContent="KRCD 7 · SERVICE",pr.textContent="WING LOST",mr.textContent="The radio wing stays clear. Retry from the service door.",gr.textContent=`TIME ${Wn(n.time)} · BEST ${Wn(n.best)}`,Fi.textContent="Retry wing",Oi.textContent="Title"):n.checkpoint==="radio"?(dr.textContent="KRCD 7 · RADIO",pr.textContent="WING LOST",mr.textContent="The court stays clear. Retry from the radio door.",gr.textContent=`TIME ${Wn(n.time)} · BEST ${Wn(n.best)}`,Fi.textContent="Retry wing",Oi.textContent="Title"):(dr.textContent="KRCD 7 · NO CARRIER",pr.textContent="SIGNAL LOST",mr.textContent="The court keeps the carrier. Retune and walk it again.",gr.textContent=`BEST ${Wn(n.best)}`,Fi.textContent="Retry",Oi.textContent="Title"))}let eu=performance.now();function sh(n){const e=Math.min(.05,(n-eu)/1e3);eu=n,document.hidden||(ht.update(e,{forward:xr.has("KeyW"),back:xr.has("KeyS"),left:xr.has("KeyA"),right:xr.has("KeyD"),lookX:Gt.lookX,lookY:Gt.lookY,fireDown:Gt.fire&&ht.mode==="play",channel:Gt.channel,cycle:Gt.cycle,use:Gt.use}),Uv(ht.hud())),Gt.lookX=0,Gt.lookY=0,Gt.channel=null,Gt.cycle=0,Gt.use=!1,requestAnimationFrame(sh)}requestAnimationFrame(sh);
