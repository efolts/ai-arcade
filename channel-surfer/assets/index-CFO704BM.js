(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Yo="channel-surfer-mute";function Lh(){const i=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let t=null,e=null,n=null,s=null,r=null,a=!1,o=!1;try{o=localStorage.getItem(Yo)==="1"}catch(d){o=!1}function c(){if(!i)return null;if(!t){t=new i,e=t.createGain(),e.gain.value=o?0:.85,n=t.createBiquadFilter(),n.type="lowpass",n.frequency.value=16e3,n.connect(e),e.connect(t.destination);const d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=d.getChannelData(0);for(let E=0;E<f.length;E++)f[E]=Math.random()*2-1;const m=t.createBufferSource();m.buffer=d,m.loop=!0;const _=t.createBiquadFilter();_.type="highpass",_.frequency.value=1200,s=t.createGain(),s.gain.value=0,m.connect(_),_.connect(s),s.connect(n),m.start(),r=t.createGain(),r.gain.value=.018;const g=t.createOscillator(),p=t.createOscillator();g.type="sine",p.type="triangle",g.frequency.value=55,p.frequency.value=82.4,g.connect(r),p.connect(r),r.connect(n),g.start(),p.start()}return t.state==="suspended"&&t.resume(),a=!0,t}function l(d,f){const m=t.createGain(),_=t.currentTime;return m.gain.setValueAtTime(1e-4,_),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),_+.012),m.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,d)),m.connect(n),m}function h(d,f,m,_,g){if(!a||!t||o)return;const p=t.createOscillator();p.type=m;const E=t.currentTime;p.frequency.setValueAtTime(d,E),g&&p.frequency.exponentialRampToValueAtTime(Math.max(30,g),E+f),p.connect(l(f,_)),p.start(),p.stop(E+f+.03)}function u(d,f,m){if(!a||!t||o)return;const _=Math.max(1,Math.floor(t.sampleRate*d)),g=t.createBuffer(1,_,t.sampleRate),p=g.getChannelData(0);for(let k=0;k<_;k++)p[k]=Math.random()*2-1;const E=t.createBufferSource();E.buffer=g;const T=t.createBiquadFilter();T.type="bandpass",T.frequency.value=m,T.Q.value=.7;const y=l(d,f);E.connect(T),T.connect(y),E.start()}return{ensure:c,get muted(){return o},toggle(){o=!o,e&&(e.gain.value=o?0:.85);try{localStorage.setItem(Yo,o?"1":"0")}catch(d){}return o},setChannel(d){if(!a||!t)return;const f=t.currentTime,m=d==="DEAD_AIR"?380:d==="STATIC"?3800:15e3;n.frequency.linearRampToValueAtTime(m,f+.07),s.gain.linearRampToValueAtTime(d==="STATIC"?.02:0,f+.08),r.gain.linearRampToValueAtTime(d==="DEAD_AIR"?.028:.016,f+.1)},play(d){if(!(!a||o))switch(d){case"live":u(.045,.14,2400),h(940,.08,"square",.045,360);break;case"static":u(.13,.22,640);break;case"phase":h(220,.12,"sine",.06,90),u(.07,.08,480);break;case"dry":u(.03,.08,1800),h(140,.04,"square",.03,90);break;case"deny":h(86,.09,"sine",.07,48);break;case"switch-live":h(523,.11,"square",.04),h(784,.13,"square",.03);break;case"switch-static":u(.08,.1,500),h(190,.12,"sawtooth",.03);break;case"switch-dead":h(74,.18,"sine",.07,42);break;case"hit":h(1500,.05,"square",.04,480);break;case"hurt":u(.11,.16,220),h(120,.16,"sawtooth",.05,60);break;case"death":u(.26,.18,280),h(210,.32,"triangle",.06,48);break;case"pickup":h(660,.08,"sine",.05),h(990,.12,"sine",.04);break;case"ui":h(480,.05,"square",.03);break;case"bolt":h(300,.09,"square",.03,130);break;case"nosignal":u(.16,.12,180);break;case"hijack":u(.18,.2,1800),h(680,.16,"sawtooth",.05,1400),h(220,.22,"square",.04,90);break;case"rite":h(196,.28,"sine",.05),h(247,.32,"sine",.035),h(392,.22,"triangle",.03);break;case"rite-break":u(.08,.16,1400),h(880,.12,"square",.05,420),h(1320,.16,"triangle",.04,700);break;case"rite-fail":h(98,.22,"sawtooth",.06,50),u(.14,.12,200);break;case"door":h(140,.18,"square",.04,70),h(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="170",Uh=0,Zo=1,Nh=2,Rc=1,Cc=2,On=3,ci=0,We=1,Ze=2,en=0,ts=1,Pr=2,Ko=3,jo=4,Pc=5,zn=100,Fh=101,Oh=102,zh=103,Bh=104,Da=200,kh=201,Hh=202,Vh=203,Ia=204,La=205,Dc=206,Gh=207,Ic=208,Wh=209,Xh=210,qh=211,Yh=212,Zh=213,Kh=214,Ua=0,Na=1,Fa=2,ss=3,Oa=4,za=5,Ba=6,ka=7,Lc=0,jh=1,$h=2,li=0,Jh=1,Qh=2,tu=3,Uc=4,eu=5,nu=6,iu=7,Nc=300,rs=301,as=302,Ha=303,Va=304,Br=306,Rn=1e3,kn=1001,Ga=1002,Qe=1003,su=1004,ks=1005,nn=1006,qr=1007,Sn=1008,Wn=1009,Fc=1010,Oc=1011,Ls=1012,To=1013,wi=1014,An=1015,bi=1016,Ao=1017,Ro=1018,Ti=1020,zc=35902,Bc=1021,kc=1022,En=1023,Hc=1024,Vc=1025,es=1026,Ai=1027,Co=1028,Po=1029,Gc=1030,Do=1031,Io=1033,wr=33776,br=33777,Tr=33778,Ar=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ka=37492,ja=37496,$a=37808,Ja=37809,Qa=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,Rr=36492,uo=36494,fo=36495,Wc=36283,po=36284,mo=36285,go=36286,ru=3200,au=3201,Lo=0,ou=1,Bn="",Ve="srgb",hi="srgb-linear",kr="linear",de="srgb",Ci=7680,$o=519,lu=512,cu=513,hu=514,Xc=515,uu=516,fu=517,du=518,pu=519,_o=35044,Jo="300 es",Hn=2e3,Dr=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const Cs=Math.PI/180,Us=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Uo(i,t){return(i%t+t)%t}function mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ps(i,t,e){return(1-e)*i+e*t}function _u(i,t,e,n){return Ps(i,t,1-Math.exp(-e*n))}function vu(i,t=1){return t-Math.abs(Uo(i,t*2)-t)}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Su(i,t){return i+Math.random()*(t-i)}function Eu(i){return i*(.5-Math.random())}function wu(i){i!==void 0&&(Qo=i);let t=Qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bu(i){return i*Cs}function Tu(i){return i*Us}function Au(i){return(i&i-1)===0&&i!==0}function Ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Du={DEG2RAD:Cs,RAD2DEG:Us,generateUUID:Vn,clamp:Ge,euclideanModulo:Uo,mapLinear:mu,inverseLerp:gu,lerp:Ps,damp:_u,pingpong:vu,smoothstep:xu,smootherstep:Mu,randInt:yu,randFloat:Su,randFloatSpread:Eu,seededRandom:wu,degToRad:bu,radToDeg:Tu,isPowerOfTwo:Au,ceilPowerOfTwo:Ru,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Pu,normalize:fe,denormalize:yn};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,s,r,a,o,c,l){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],E=s[1],T=s[4],y=s[7],k=s[2],D=s[5],P=s[8];return r[0]=a*_+o*E+c*k,r[3]=a*g+o*T+c*D,r[6]=a*p+o*y+c*P,r[1]=l*_+h*E+u*k,r[4]=l*g+h*T+u*D,r[7]=l*p+h*y+u*P,r[2]=d*_+f*E+m*k,r[5]=d*g+f*T+m*D,r[8]=d*p+f*y+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new ne;function qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Iu(){const i=Ir("canvas");return i.style.display="block",i}const tl={};function ws(i){i in tl||(tl[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Uu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?kr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const el=[.64,.33,.3,.6,.15,.06],nl=[.2126,.7152,.0722],il=[.3127,.329],sl=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[hi]:{primaries:el,whitePoint:il,transfer:kr,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:nl,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:el,whitePoint:il,transfer:de,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:nl,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let Pi;class Fu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Ir("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ou=0;class Yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zr(s[a].image)):r.push(Zr(s[a]))}else r=Zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class Ke extends ls{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=kn,s=kn,r=nn,a=Sn,o=En,c=Wn,l=Ke.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Vn(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rn:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rn:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Nc;Ke.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,y=(f+1)/2,k=(p+1)/2,D=(h+d)/4,P=(u+_)/4,N=(m+g)/4;return T>y&&T>k?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=D/n,r=P/n):y>k?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=D/s,r=N/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=P/r,s=N/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bu extends ls{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Bu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zc extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-o;const p=c*d+l*f+h*m+u*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const k=Math.sqrt(T),D=Math.atan2(k,p*E);g=Math.sin(g*D)/k,o=Math.sin(o*D)/k}const y=o*E;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-o){const k=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=k,l*=k,h*=k,u*=k}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new W,al=new Os;class zs{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Vs.subVectors(this.max,fs),Di.subVectors(t.a,fs),Ii.subVectors(t.b,fs),Li.subVectors(t.c,fs),jn.subVectors(Ii,Di),$n.subVectors(Li,Ii),fi.subVectors(Di,Li);let e=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,jn.z,0,-jn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!jr(e,Di,Ii,Li,Vs)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,Di,Ii,Li,Vs))?!1:(Gs.crossVectors(jn,$n),e=[Gs.x,Gs.y,Gs.z],jr(e,Di,Ii,Li,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new W,new W,new W,new W,new W,new W,new W,new W],vn=new W,Hs=new zs,Di=new W,Ii=new W,Li=new W,jn=new W,$n=new W,fi=new W,fs=new W,Vs=new W,Gs=new W,di=new W;function jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Hu=new zs,ds=new W,$r=new W;class Bs{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add($r)),this.expandByPoint(ds.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new W,Jr=new W,Ws=new W,Jn=new W,Qr=new W,Xs=new W,ta=new W;class No{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=Jn.dot(this.direction),c=-Jn.dot(Ws),l=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jr).addScaledVector(Ws,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Qr.subVectors(e,t),Xs.subVectors(n,t),ta.crossVectors(Qr,Xs);let a=this.direction.dot(ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const c=o*this.direction.dot(Xs.crossVectors(Jn,Xs));if(c<0)return null;const l=o*this.direction.dot(Qr.cross(Jn));if(l<0||c+l>a)return null;const h=-o*Jn.dot(ta);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,_,g){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,_,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Gu)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Qn.crossVectors(n,rn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Qn.crossVectors(n,rn)),Qn.normalize(),qs.crossVectors(rn,Qn),s[0]=Qn.x,s[4]=qs.x,s[8]=rn.x,s[1]=Qn.y,s[5]=qs.y,s[9]=rn.y,s[2]=Qn.z,s[6]=qs.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],E=n[3],T=n[7],y=n[11],k=n[15],D=s[0],P=s[4],N=s[8],w=s[12],x=s[1],R=s[5],U=s[9],O=s[13],X=s[2],Y=s[6],Z=s[10],tt=s[14],v=s[3],L=s[7],F=s[11],B=s[15];return r[0]=a*D+o*x+c*X+l*v,r[4]=a*P+o*R+c*Y+l*L,r[8]=a*N+o*U+c*Z+l*F,r[12]=a*w+o*O+c*tt+l*B,r[1]=h*D+u*x+d*X+f*v,r[5]=h*P+u*R+d*Y+f*L,r[9]=h*N+u*U+d*Z+f*F,r[13]=h*w+u*O+d*tt+f*B,r[2]=m*D+_*x+g*X+p*v,r[6]=m*P+_*R+g*Y+p*L,r[10]=m*N+_*U+g*Z+p*F,r[14]=m*w+_*O+g*tt+p*B,r[3]=E*D+T*x+y*X+k*v,r[7]=E*P+T*R+y*Y+k*L,r[11]=E*N+T*U+y*Z+k*F,r[15]=E*w+T*O+y*tt+k*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],E=u*g*l-_*d*l+_*c*f-o*g*f-u*c*p+o*d*p,T=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,y=h*_*l-m*u*l+m*o*f-a*_*f-h*o*p+a*u*p,k=m*u*c-h*_*c-m*o*d+a*_*d+h*o*g-a*u*g,D=e*E+n*T+s*y+r*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return t[0]=E*P,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*P,t[2]=(o*g*r-_*c*r+_*s*l-n*g*l-o*s*p+n*c*p)*P,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*P,t[4]=T*P,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*P,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*P,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*P,t[8]=y*P,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*P,t[10]=(a*_*r-m*o*r+m*n*l-e*_*l-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*P,t[12]=k*P,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*P,t[14]=(m*o*s-a*_*s-m*n*c+e*_*c+a*n*g-e*o*g)*P,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,E=c*l,T=c*h,y=c*u,k=n.x,D=n.y,P=n.z;return s[0]=(1-(_+p))*k,s[1]=(f+y)*k,s[2]=(m-T)*k,s[3]=0,s[4]=(f-y)*D,s[5]=(1-(d+p))*D,s[6]=(g+E)*D,s[7]=0,s[8]=(m+T)*P,s[9]=(g-E)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const a=Ui.set(s[4],s[5],s[6]).length(),o=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,h=1/a,u=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(o===Hn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Dr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let m,_;if(o===Hn)m=(a+r)*u,_=-2*u;else if(o===Dr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new W,xn=new me,Vu=new W(0,0,0),Gu=new W(1,1,1),Qn=new W,qs=new W,rn=new W,ol=new me,ll=new Os;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wu=0;const cl=new W,Ni=new Os,Un=new me,Ys=new W,ps=new W,Xu=new W,qu=new Os,hl=new W(1,0,0),ul=new W(0,1,0),fl=new W(0,0,1),dl={type:"added"},Yu={type:"removed"},Fi={type:"childadded",child:null},ea={type:"childremoved",child:null};class De extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new W,e=new Cn,n=new Os,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ne}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(fl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ps,Ys,this.up):Un.lookAt(Ys,ps,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Un),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new W(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new W,Nn=new W,na=new W,Fn=new W,Oi=new W,zi=new W,pl=new W,ia=new W,sa=new W,ra=new W,aa=new pe,oa=new pe,la=new pe;class fn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Nn.subVectors(n,e),na.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Nn),c=Mn.dot(na),l=Nn.dot(Nn),h=Nn.dot(na),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return aa.setScalar(0),oa.setScalar(0),la.setScalar(0),aa.fromBufferAttribute(t,e),oa.fromBufferAttribute(t,n),la.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(aa,r.x),a.addScaledVector(oa,r.y),a.addScaledVector(la,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Nn.subVectors(t,e),Mn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),Mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,n),zi.subVectors(r,n),ia.subVectors(t,n);const c=Oi.dot(ia),l=zi.dot(ia);if(c<=0&&l<=0)return e.copy(n);sa.subVectors(t,s);const h=Oi.dot(sa),u=zi.dot(sa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Oi,a);ra.subVectors(t,r);const f=Oi.dot(ra),m=zi.dot(ra);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(zi,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return pl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(pl,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Oi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Uo(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ca(a,r,t+1/3),this.g=ca(a,r,t),this.b=ca(a,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return le.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ge(qe.r*255,0,255))*65536+Math.round(Ge(qe.g*255,0,255))*256+Math.round(Ge(qe.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ve){le.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Zs);const n=Ps(ti.h,Zs.h,e),s=Ps(ti.s,Zs.s,e),r=Ps(ti.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=jc;let Zu=0;class Yn extends ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Vn(),this.name="",this.blending=ts,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=La,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oe extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new W,Ks=new Et;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_o&&(t.usage=this.usage),t}}class $c extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jc extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ku=0;const un=new me,ha=new De,Bi=new W,an=new zs,ms=new zs,Fe=new W;class Ce extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qc(t)?Jc:$c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(an.min,ms.min),an.expandByPoint(Fe),Fe.addVectors(an.max,ms.max),an.expandByPoint(Fe)):(an.expandByPoint(ms.min),an.expandByPoint(ms.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Fe.fromBufferAttribute(o,l),c&&(Bi.fromBufferAttribute(t,l),Fe.add(Bi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new W,c[N]=new W;const l=new W,h=new W,u=new W,d=new Et,f=new Et,m=new Et,_=new W,g=new W;function p(N,w,x){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),o[N].add(_),o[w].add(_),o[x].add(_),c[N].add(g),c[w].add(g),c[x].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,w=E.length;N<w;++N){const x=E[N],R=x.start,U=x.count;for(let O=R,X=R+U;O<X;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const T=new W,y=new W,k=new W,D=new W;function P(N){k.fromBufferAttribute(s,N),D.copy(k);const w=o[N];T.copy(w),T.sub(k.multiplyScalar(k.dot(w))).normalize(),y.crossVectors(D,w);const R=y.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,R)}for(let N=0,w=E.length;N<w;++N){const x=E[N],R=x.start,U=x.count;for(let O=R,X=R+U;O<X;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new W,r=new W,a=new W,o=new W,c=new W,l=new W,h=new W,u=new W;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new me,pi=new No,js=new Bs,gl=new W,$s=new W,Js=new W,Qs=new W,ua=new W,tr=new W,_l=new W,er=new W;class ot extends De{constructor(t=new Ce,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ua.fromBufferAttribute(u,t),a?tr.addScaledVector(ua,h):tr.addScaledVector(ua.sub(e),h))}e.add(tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(js.containsPoint(pi.origin)===!1&&(pi.intersectSphere(js,gl)===null||pi.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),pi.copy(t.ray).applyMatrix4(ml),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=E,k=T;y<k;y+=3){const D=o.getX(y),P=o.getX(y+1),N=o.getX(y+2);s=nr(this,p,t,n,l,h,u,D,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=o.getX(g),T=o.getX(g+1),y=o.getX(g+2);s=nr(this,a,t,n,l,h,u,E,T,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=E,k=T;y<k;y+=3){const D=y,P=y+1,N=y+2;s=nr(this,p,t,n,l,h,u,D,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=g,T=g+1,y=g+2;s=nr(this,a,t,n,l,h,u,E,T,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function ju(i,t,e,n,s,r,a,o){let c;if(t.side===We?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ci,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(er);return l<e.near||l>e.far?null:{distance:l,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,$s),i.getVertexPosition(c,Js),i.getVertexPosition(l,Qs);const h=ju(i,t,e,n,$s,Js,Qs,_l);if(h){const u=new W;fn.getBarycoord(_l,$s,Js,Qs,u),s&&(h.uv=fn.getInterpolatedAttribute(s,o,c,l,u,new Et)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,c,l,u,new Et)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,c,l,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new W,materialIndex:0};fn.getNormal($s,Js,Qs,d.normal),h.face=d,h.barycoord=u}return h}class Nt extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function m(_,g,p,E,T,y,k,D,P,N,w){const x=y/P,R=k/N,U=y/2,O=k/2,X=D/2,Y=P+1,Z=N+1;let tt=0,v=0;const L=new W;for(let F=0;F<Z;F++){const B=F*R-O;for(let Q=0;Q<Y;Q++){const _t=Q*x-U;L[_]=_t*E,L[g]=B*T,L[p]=X,l.push(L.x,L.y,L.z),L[_]=0,L[g]=0,L[p]=D>0?1:-1,h.push(L.x,L.y,L.z),u.push(Q/P),u.push(1-F/N),tt+=1}}for(let F=0;F<N;F++)for(let B=0;B<P;B++){const Q=d+B+Y*F,_t=d+B+Y*(F+1),K=d+(B+1)+Y*(F+1),ht=d+(B+1)+Y*F;c.push(Q,_t,ht),c.push(_t,K,ht),v+=6}o.addGroup(f,v,w),f+=v,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function $u(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const bs={clone:os,merge:Je};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=$u(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class th extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new W,vl=new Et,xl=new Et;class on extends th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,vl,xl),e.subVectors(xl,vl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Hi=1;class tf extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ki,Hi,t,e);s.layers=this.layers,this.add(s);const r=new on(ki,Hi,t,e);r.layers=this.layers,this.add(r);const a=new on(ki,Hi,t,e);a.layers=this.layers,this.add(a);const o=new on(ki,Hi,t,e);o.layers=this.layers,this.add(o);const c=new on(ki,Hi,t,e);c.layers=this.layers,this.add(c);const l=new on(ki,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class eh extends Ke{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ef extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nt(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:en});r.uniforms.tEquirect.value=e;const a=new ot(s,r),o=e.minFilter;return e.minFilter===Sn&&(e.minFilter=nn),new tf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const fa=new W,nf=new W,sf=new ne;class Mi{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sf.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Bs,ir=new W;class Fo{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],E=s[13],T=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,g-f,y-p).normalize(),n[1].setComponents(c+r,d+l,g+f,y+p).normalize(),n[2].setComponents(c+a,d+h,g+m,y+E).normalize(),n[3].setComponents(c-a,d-h,g-m,y-E).normalize(),n[4].setComponents(c-o,d-u,g-_,y-T).normalize(),e===Hn)n[5].setComponents(c+o,d+u,g+_,y+T).normalize();else if(e===Dr)n[5].setComponents(o,u,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rf(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class xe extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const E=p*d-a;for(let T=0;T<l;T++){const y=T*u-r;m.push(y,-E,0),_.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const T=E+l*p,y=E+l*(p+1),k=E+1+l*(p+1),D=E+1+l*p;f.push(T,y,D),f.push(y,k,D)}this.setIndex(f),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.widthSegments,t.heightSegments)}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Df=`vec3 transformedNormal = objectNormal;
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
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
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
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
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
#endif`,sd=`struct PhysicalMaterial {
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
}`,rd=`
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,md=`#if defined( USE_POINTS_UV )
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
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wd=`float getShadowMask() {
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
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,dp=`#define DISTANCE
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
}`,pp=`#define DISTANCE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,yp=`#define LAMBERT
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
}`,Sp=`#define LAMBERT
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
}`,Ep=`#define MATCAP
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
}`,wp=`#define MATCAP
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
}`,bp=`#define NORMAL
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
}`,Tp=`#define NORMAL
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define STANDARD
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
}`,Dp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Lp=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Fp=`uniform vec3 color;
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
}`,Op=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:ff,aomap_pars_fragment:df,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:vf,iridescence_fragment:xf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:Ef,clipping_planes_vertex:wf,color_fragment:bf,color_pars_fragment:Tf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Df,displacementmap_pars_vertex:If,displacementmap_vertex:Lf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Ff,colorspace_pars_fragment:Of,envmap_fragment:zf,envmap_common_pars_fragment:Bf,envmap_pars_fragment:kf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:Jf,envmap_vertex:Vf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:jf,lights_pars_begin:$f,lights_toon_fragment:Qf,lights_toon_pars_fragment:td,lights_phong_fragment:ed,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:sd,lights_fragment_begin:rd,lights_fragment_maps:ad,lights_fragment_end:od,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:ud,map_fragment:fd,map_pars_fragment:dd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:_d,morphinstance_vertex:vd,morphcolor_vertex:xd,morphnormal_vertex:Md,morphtarget_pars_vertex:yd,morphtarget_vertex:Sd,normal_fragment_begin:Ed,normal_fragment_maps:wd,normal_pars_fragment:bd,normal_pars_vertex:Td,normal_vertex:Ad,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Id,opaque_fragment:Ld,packing:Ud,premultiplied_alpha_fragment:Nd,project_vertex:Fd,dithering_fragment:Od,dithering_pars_fragment:zd,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Hd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:Zd,specularmap_fragment:Kd,specularmap_pars_fragment:jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Jd,transmission_fragment:Qd,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:sp,background_vert:rp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:lp,cube_vert:cp,cube_frag:hp,depth_vert:up,depth_frag:fp,distanceRGBA_vert:dp,distanceRGBA_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:_p,linedashed_frag:vp,meshbasic_vert:xp,meshbasic_frag:Mp,meshlambert_vert:yp,meshlambert_frag:Sp,meshmatcap_vert:Ep,meshmatcap_frag:wp,meshnormal_vert:bp,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:Rp,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Dp,meshtoon_frag:Ip,points_vert:Lp,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:Op,sprite_frag:zp},Tt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Tn={basic:{uniforms:Je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Je([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Je([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Je([Tt.points,Tt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Je([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Je([Tt.common,Tt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Je([Tt.sprite,Tt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Je([Tt.common,Tt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Je([Tt.lights,Tt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Tn.physical={uniforms:Je([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const sr={r:0,b:0,g:0},gi=new Cn,Bp=new me;function kp(i,t,e,n,s,r,a){const o=new Kt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?e:t).get(T)),T}function _(E){let T=!1;const y=m(E);y===null?p(o,c):y&&y.isColor&&(p(y,1),T=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,T){const y=m(T);y&&(y.isCubeTexture||y.mapping===Br)?(h===void 0&&(h=new ot(new Nt(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:os(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(T.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(gi)),h.material.toneMapped=le.getTransfer(y.colorSpace)!==de,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ot(new xe(2,2),new dn({name:"BackgroundMaterial",uniforms:os(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,T){E.getRGB(sr,Qc(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),c=T,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:g}}function Hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,R,U,O,X){let Y=!1;const Z=u(O,U,R);r!==Z&&(r=Z,l(r.object)),Y=f(x,O,U,X),Y&&m(x,O,U,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(x,R,U,O),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,U){const O=U.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let Y=X[R.id];Y===void 0&&(Y={},X[R.id]=Y);let Z=Y[O];return Z===void 0&&(Z=d(c()),Y[O]=Z),Z}function d(x){const R=[],U=[],O=[];for(let X=0;X<e;X++)R[X]=0,U[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,R,U,O){const X=r.attributes,Y=R.attributes;let Z=0;const tt=U.getAttributes();for(const v in tt)if(tt[v].location>=0){const F=X[v];let B=Y[v];if(B===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(B=x.instanceColor)),F===void 0||F.attribute!==B||B&&F.data!==B.data)return!0;Z++}return r.attributesNum!==Z||r.index!==O}function m(x,R,U,O){const X={},Y=R.attributes;let Z=0;const tt=U.getAttributes();for(const v in tt)if(tt[v].location>=0){let F=Y[v];F===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(F=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(F=x.instanceColor));const B={};B.attribute=F,F&&F.data&&(B.data=F.data),X[v]=B,Z++}r.attributes=X,r.attributesNum=Z,r.index=O}function _(){const x=r.newAttributes;for(let R=0,U=x.length;R<U;R++)x[R]=0}function g(x){p(x,0)}function p(x,R){const U=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;U[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),X[x]!==R&&(i.vertexAttribDivisor(x,R),X[x]=R)}function E(){const x=r.newAttributes,R=r.enabledAttributes;for(let U=0,O=R.length;U<O;U++)R[U]!==x[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function T(x,R,U,O,X,Y,Z){Z===!0?i.vertexAttribIPointer(x,R,U,X,Y):i.vertexAttribPointer(x,R,U,O,X,Y)}function y(x,R,U,O){_();const X=O.attributes,Y=U.getAttributes(),Z=R.defaultAttributeValues;for(const tt in Y){const v=Y[tt];if(v.location>=0){let L=X[tt];if(L===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(L=x.instanceColor)),L!==void 0){const F=L.normalized,B=L.itemSize,Q=t.get(L);if(Q===void 0)continue;const _t=Q.buffer,K=Q.type,ht=Q.bytesPerElement,nt=K===i.INT||K===i.UNSIGNED_INT||L.gpuType===To;if(L.isInterleavedBufferAttribute){const st=L.data,pt=st.stride,St=L.offset;if(st.isInstancedInterleavedBuffer){for(let et=0;et<v.locationSize;et++)p(v.location+et,st.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let et=0;et<v.locationSize;et++)g(v.location+et);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let et=0;et<v.locationSize;et++)T(v.location+et,B/v.locationSize,K,F,pt*ht,(St+B/v.locationSize*et)*ht,nt)}else{if(L.isInstancedBufferAttribute){for(let st=0;st<v.locationSize;st++)p(v.location+st,L.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let st=0;st<v.locationSize;st++)g(v.location+st);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let st=0;st<v.locationSize;st++)T(v.location+st,B/v.locationSize,K,F,B*ht,B/v.locationSize*st*ht,nt)}}else if(Z!==void 0){const F=Z[tt];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(v.location,F);break;case 3:i.vertexAttrib3fv(v.location,F);break;case 4:i.vertexAttrib4fv(v.location,F);break;default:i.vertexAttrib1fv(v.location,F)}}}}E()}function k(){N();for(const x in n){const R=n[x];for(const U in R){const O=R[U];for(const X in O)h(O[X].object),delete O[X];delete R[U]}delete n[x]}}function D(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const U in R){const O=R[U];for(const X in O)h(O[X].object),delete O[X];delete R[U]}delete n[x.id]}function P(x){for(const R in n){const U=n[R];if(U[x.id]===void 0)continue;const O=U[x.id];for(const X in O)h(O[X].object),delete O[X];delete U[x.id]}}function N(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function Vp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Gp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==En&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==An&&!N)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=m>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:k,maxSamples:D}}function Wp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Mi,o=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const E=r?0:n,T=E*4;let y=p.clippingState||null;c.value=y,y=h(m,d,T,f);for(let k=0;k!==T;++k)y[k]=e[k];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,y=f;T!==_;++T,y+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Xp(i){let t=new WeakMap;function e(a,o){return o===Ha?a.mapping=rs:o===Va&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ha||o===Va)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ef(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Oo extends th{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,Ml=[.125,.215,.35,.446,.526,.582],Ei=20,da=new Oo,yl=new Kt;let pa=null,ma=0,ga=0,_a=!1;const yi=(1+Math.sqrt(5))/2,Vi=1/yi,Sl=[new W(-yi,Vi,0),new W(yi,Vi,0),new W(-Vi,0,yi),new W(Vi,0,yi),new W(0,yi,-Vi),new W(0,yi,Vi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:bi,format:En,colorSpace:hi,depthBuffer:!1},s=El(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Yp(r,t,e)}return s}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,s){const o=new on(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yl),h.toneMapping=li,h.autoClear=!1;const f=new oe({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new ot(new Nt,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(yl),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const T=this._cubeSize;rr(s,E*T,p>2?T:0,T,T),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rs||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;rr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sl[(s-r-1)%Sl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ei;g>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ei}`);const p=[];let E=0;for(let P=0;P<Ei;++P){const N=P/_,w=Math.exp(-N*N/2);p.push(w),P===0?E+=w:P<g&&(E+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=m,d.mipInt.value=T-n;const y=this._sizeLods[s],k=3*y*(s>T-Ji?s-T+Ji:0),D=4*(this._cubeSize-y);rr(e,k,D,3*y,2*y),c.setRenderTarget(e),c.render(u,da)}}function qp(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+Ml.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ji?c=Ml[a-i+Ji-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,E=new Float32Array(_*m*f),T=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let D=0;D<f;D++){const P=D%3*2/3-1,N=D>2?0:-1,w=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(w,_*m*D),T.set(d,g*m*D);const x=[D,D,D,D,D,D];y.set(x,p*m*D)}const k=new Ce;k.setAttribute("position",new ke(E,_)),k.setAttribute("uv",new ke(T,g)),k.setAttribute("faceIndex",new ke(y,p)),t.push(k),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function El(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yp(i,t,e){const n=new Float32Array(Ei),s=new W(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zo(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function wl(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function bl(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function Zp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ha||c===Va,h=c===rs||c===as;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new vo(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new vo(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let T=0,y=E.length;T<y;T+=3){const k=E[T+0],D=E[T+1],P=E[T+2];d.push(k,D,D,P,P,k)}}else if(m!==void 0){const E=m.array;_=m.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const k=T+0,D=T+1,P=T+2;d.push(k,D,D,P,P,k)}}else return;const g=new(qc(d)?Jc:$c)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $p(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let k=o.attributes.position.count*y,D=1;k>t.maxTextureSize&&(D=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const P=new Float32Array(k*D*4*u),N=new Zc(P,k,D,u);N.type=An,N.needsUpdate=!0;const w=y*4;for(let R=0;R<u;R++){const U=p[R],O=E[R],X=T[R],Y=k*D*4*R;for(let Z=0;Z<U.count;Z++){const tt=Z*w;m===!0&&(s.fromBufferAttribute(U,Z),P[Y+tt+0]=s.x,P[Y+tt+1]=s.y,P[Y+tt+2]=s.z,P[Y+tt+3]=0),_===!0&&(s.fromBufferAttribute(O,Z),P[Y+tt+4]=s.x,P[Y+tt+5]=s.y,P[Y+tt+6]=s.z,P[Y+tt+7]=0),g===!0&&(s.fromBufferAttribute(X,Z),P[Y+tt+8]=s.x,P[Y+tt+9]=s.y,P[Y+tt+10]=s.z,P[Y+tt+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new Et(k,D)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function t0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Bo extends Ke{constructor(t,e,n,s,r,a,o,c,l,h=es){if(h!==es&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=wi),n===void 0&&h===Ai&&(n=Ti),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ih=new Ke,Tl=new Bo(1,1),sh=new Zc,rh=new ku,ah=new eh,Al=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Al[s];if(r===void 0&&(r=new Float32Array(s),Al[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),Ne(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Ne(e,n)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Cl.set(n),i.uniformMatrix4fv(this.addr,!1,Cl),Ne(e,n)}}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=Xc,r=Tl):r=ih,e.setTexture2D(t||r,s)}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rh,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ah,s)}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sh,s)}function M0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(i,t){i.uniform1fv(this.addr,t)}function S0(i,t){const e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function E0(i,t){const e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function w0(i,t){const e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){const e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function T0(i,t){const e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A0(i,t){const e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function P0(i,t){i.uniform3iv(this.addr,t)}function D0(i,t){i.uniform4iv(this.addr,t)}function I0(i,t){i.uniform1uiv(this.addr,t)}function L0(i,t){i.uniform2uiv(this.addr,t)}function U0(i,t){i.uniform3uiv(this.addr,t)}function N0(i,t){i.uniform4uiv(this.addr,t)}function F0(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ih,r[a])}function O0(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rh,r[a])}function z0(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ah,r[a])}function B0(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sh,r[a])}function k0(i){switch(i){case 5126:return y0;case 35664:return S0;case 35665:return E0;case 35666:return w0;case 35674:return b0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return D0;case 5125:return I0;case 36294:return L0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return B0}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}}class V0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}}class G0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Il(i,t){i.seq.push(t),i.map[t.id]=t}function W0(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),a=va.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Il(e,l===void 0?new H0(o,i,t):new V0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new G0(o),Il(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);W0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const X0=37297;let q0=0;function Y0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ul=new ne;function Z0(i){le._getMatrix(Ul,le.workingColorSpace,i);const t=`mat3( ${Ul.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case kr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Y0(i.getShaderSource(t),a)}else return s}function K0(i,t){const e=Z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,t){let e;switch(t){case Jh:e="Linear";break;case Qh:e="Reinhard";break;case tu:e="Cineon";break;case Uc:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new W;function $0(){le.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function Fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(i){return i.replace(em,im)}const nm=new Map;function im(i,t){let e=ee[t];if(e===void 0){const n=nm.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xo(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(i){return i.replace(sm,rm)}function rm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function am(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function om(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function cm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lc:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case $h:t="ENVMAP_BLENDING_ADD";break}return t}function hm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function um(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=am(e),l=om(e),h=lm(e),u=cm(e),d=hm(e),f=J0(e),m=Q0(r),_=s.createProgram();let g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(g=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?ee.tonemapping_pars_fragment:"",e.toneMapping!==li?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),$0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=xo(a),a=Fl(a,e),a=Ol(a,e),o=xo(o),o=Fl(o,e),o=Ol(o,e),a=zl(a),o=zl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+g+a,y=E+p+o,k=Ll(s,s.VERTEX_SHADER,T),D=Ll(s,s.FRAGMENT_SHADER,y);s.attachShader(_,k),s.attachShader(_,D),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(k).trim(),X=s.getShaderInfoLog(D).trim();let Y=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,k,D);else{const tt=Nl(s,k,"vertex"),v=Nl(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+tt+`
`+v)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||X==="")&&(Z=!1);Z&&(R.diagnostics={runnable:Y,programLog:U,vertexShader:{log:O,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(k),s.deleteShader(D),N=new Cr(s,_),w=tm(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,X0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=D,this}let fm=0;class dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pm(t),e.set(t,n)),n}}class pm{constructor(t){this.id=fm++,this.code=t,this.usedTimes=0}}function mm(i,t,e,n,s,r,a){const o=new Kc,c=new dm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,x,R,U,O){const X=U.fog,Y=O.geometry,Z=w.isMeshStandardMaterial?U.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),v=tt&&tt.mapping===Br?tt.image.height:null,L=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const F=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,B=F!==void 0?F.length:0;let Q=0;Y.morphAttributes.position!==void 0&&(Q=1),Y.morphAttributes.normal!==void 0&&(Q=2),Y.morphAttributes.color!==void 0&&(Q=3);let _t,K,ht,nt;if(L){const ft=Tn[L];_t=ft.vertexShader,K=ft.fragmentShader}else _t=w.vertexShader,K=w.fragmentShader,c.update(w),ht=c.getVertexShaderID(w),nt=c.getFragmentShaderID(w);const st=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),St=O.isInstancedMesh===!0,et=O.isBatchedMesh===!0,Jt=!!w.map,Dt=!!w.matcap,Xt=!!tt,z=!!w.aoMap,Qt=!!w.lightMap,kt=!!w.bumpMap,Ft=!!w.normalMap,Mt=!!w.displacementMap,Yt=!!w.emissiveMap,yt=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,q=w.clearcoat>0,it=w.dispersion>0,at=w.iridescence>0,J=w.sheen>0,Lt=w.transmission>0,mt=M&&!!w.anisotropyMap,vt=q&&!!w.clearcoatMap,Ot=q&&!!w.clearcoatNormalMap,ct=q&&!!w.clearcoatRoughnessMap,wt=at&&!!w.iridescenceMap,zt=at&&!!w.iridescenceThicknessMap,Gt=J&&!!w.sheenColorMap,At=J&&!!w.sheenRoughnessMap,te=!!w.specularMap,qt=!!w.specularColorMap,jt=!!w.specularIntensityMap,H=Lt&&!!w.transmissionMap,xt=Lt&&!!w.thicknessMap,j=!!w.gradientMap,lt=!!w.alphaMap,Rt=w.alphaTest>0,bt=!!w.alphaHash,Zt=!!w.extensions;let rt=li;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(rt=i.toneMapping);const dt={shaderID:L,shaderType:w.type,shaderName:w.name,vertexShader:_t,fragmentShader:K,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:et,batchingColor:et&&O._colorsTexture!==null,instancing:St,instancingColor:St&&O.instanceColor!==null,instancingMorph:St&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:hi,alphaToCoverage:!!w.alphaToCoverage,map:Jt,matcap:Dt,envMap:Xt,envMapMode:Xt&&tt.mapping,envMapCubeUVHeight:v,aoMap:z,lightMap:Qt,bumpMap:kt,normalMap:Ft,displacementMap:d&&Mt,emissiveMap:Yt,normalMapObjectSpace:Ft&&w.normalMapType===ou,normalMapTangentSpace:Ft&&w.normalMapType===Lo,metalnessMap:yt,roughnessMap:C,anisotropy:M,anisotropyMap:mt,clearcoat:q,clearcoatMap:vt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:ct,dispersion:it,iridescence:at,iridescenceMap:wt,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:te,specularColorMap:qt,specularIntensityMap:jt,transmission:Lt,transmissionMap:H,thicknessMap:xt,gradientMap:j,opaque:w.transparent===!1&&w.blending===ts&&w.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:bt,combine:w.combine,mapUv:Jt&&_(w.map.channel),aoMapUv:z&&_(w.aoMap.channel),lightMapUv:Qt&&_(w.lightMap.channel),bumpMapUv:kt&&_(w.bumpMap.channel),normalMapUv:Ft&&_(w.normalMap.channel),displacementMapUv:Mt&&_(w.displacementMap.channel),emissiveMapUv:Yt&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:mt&&_(w.anisotropyMap.channel),clearcoatMapUv:vt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(w.sheenRoughnessMap.channel),specularMapUv:te&&_(w.specularMap.channel),specularColorMapUv:qt&&_(w.specularColorMap.channel),specularIntensityMapUv:jt&&_(w.specularIntensityMap.channel),transmissionMapUv:H&&_(w.transmissionMap.channel),thicknessMapUv:xt&&_(w.thicknessMap.channel),alphaMapUv:lt&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ft||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Jt||lt),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Q,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Jt&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===de,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===de,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ze,flipSided:w.side===We,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)x.push(R),x.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(E(x,w),T(x,w),x.push(i.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function E(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function T(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const x=m[w.type];let R;if(x){const U=Tn[x];R=bs.clone(U.uniforms)}else R=w.uniforms;return R}function k(w,x){let R;for(let U=0,O=h.length;U<O;U++){const X=h[U];if(X.cacheKey===x){R=X,++R.usedTimes;break}}return R===void 0&&(R=new um(i,x,w,r),h.push(R)),R}function D(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function P(w){c.remove(w)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:k,releaseProgram:D,releaseShaderCache:P,programs:h,dispose:N}}function gm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _m(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||_m),n.length>1&&n.sort(d||kl),s.length>1&&s.sort(d||kl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function vm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Hl,i.set(n,[a])):s>=r.length?(a=new Hl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Kt};break;case"SpotLight":e={position:new W,direction:new W,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ym=0;function Sm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Em(i){const t=new xm,e=Mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const s=new W,r=new me,a=new me;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,T=0,y=0,k=0,D=0,P=0;l.sort(Sm);for(let w=0,x=l.length;w<x;w++){const R=l[w],U=R.color,O=R.intensity,X=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],O);P++}else if(R.isDirectionalLight){const Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,v=e.get(R);v.shadowIntensity=tt.intensity,v.shadowBias=tt.bias,v.shadowNormalBias=tt.normalBias,v.shadowRadius=tt.radius,v.shadowMapSize=tt.mapSize,n.directionalShadow[f]=v,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,E++}n.directional[f]=Z,f++}else if(R.isSpotLight){const Z=t.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(U).multiplyScalar(O),Z.distance=X,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[_]=Z;const tt=R.shadow;if(R.map&&(n.spotLightMap[k]=R.map,k++,tt.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[_]=tt.matrix,R.castShadow){const v=e.get(R);v.shadowIntensity=tt.intensity,v.shadowBias=tt.bias,v.shadowNormalBias=tt.normalBias,v.shadowRadius=tt.radius,v.shadowMapSize=tt.mapSize,n.spotShadow[_]=v,n.spotShadowMap[_]=Y,y++}_++}else if(R.isRectAreaLight){const Z=t.get(R);Z.color.copy(U).multiplyScalar(O),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=Z,g++}else if(R.isPointLight){const Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const tt=R.shadow,v=e.get(R);v.shadowIntensity=tt.intensity,v.shadowBias=tt.bias,v.shadowNormalBias=tt.normalBias,v.shadowRadius=tt.radius,v.shadowMapSize=tt.mapSize,v.shadowCameraNear=tt.camera.near,v.shadowCameraFar=tt.camera.far,n.pointShadow[m]=v,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=Z,m++}else if(R.isHemisphereLight){const Z=t.get(R);Z.skyColor.copy(R.color).multiplyScalar(O),Z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=Z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==y||N.numSpotMaps!==k||N.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+k-D,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,N.directionalLength=f,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=y,N.numSpotMaps=k,N.numLightProbes=P,n.version=ym++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const T=l[p];if(T.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(T.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(T.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function Vl(i){const t=new Em(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function wm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Vl(i),t.set(s,[o])):r>=a.length?(o=new Vl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class bm extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
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
}`;function Cm(i,t,e){let n=new Fo;const s=new Et,r=new Et,a=new pe,o=new bm({depthPacking:au}),c=new Tm,l={},h=e.maxTextureSize,u={[ci]:We,[We]:ci,[Ze]:Ze},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let p=this.type;this.render=function(D,P,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const w=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(en),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==On&&this.type===On,X=p===On&&this.type!==On;for(let Y=0,Z=D.length;Y<Z;Y++){const tt=D[Y],v=tt.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;s.copy(v.mapSize);const L=v.getFrameExtents();if(s.multiply(L),r.copy(v.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/L.x),s.x=r.x*L.x,v.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/L.y),s.y=r.y*L.y,v.mapSize.y=r.y)),v.map===null||O===!0||X===!0){const B=this.type!==On?{minFilter:Qe,magFilter:Qe}:{};v.map!==null&&v.map.dispose(),v.map=new Xn(s.x,s.y,B),v.map.texture.name=tt.name+".shadowMap",v.camera.updateProjectionMatrix()}i.setRenderTarget(v.map),i.clear();const F=v.getViewportCount();for(let B=0;B<F;B++){const Q=v.getViewport(B);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),U.viewport(a),v.updateMatrices(tt,B),n=v.getFrustum(),y(P,N,v.camera,tt,this.type)}v.isPointLightShadow!==!0&&this.type===On&&E(v,N),v.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,x,R)};function E(D,P){const N=t.update(_);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Xn(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(P,null,N,d,_,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(P,null,N,f,_,null)}function T(D,P,N,w){let x=null;const R=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)x=R;else if(x=N.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const U=x.uuid,O=P.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let Y=X[O];Y===void 0&&(Y=x.clone(),X[O]=Y,P.addEventListener("dispose",k)),x=Y}if(x.visible=P.visible,x.wireframe=P.wireframe,w===On?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=N}return x}function y(D,P,N,w,x){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===On)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const O=t.update(D),X=D.material;if(Array.isArray(X)){const Y=O.groups;for(let Z=0,tt=Y.length;Z<tt;Z++){const v=Y[Z],L=X[v.materialIndex];if(L&&L.visible){const F=T(D,L,w,x);D.onBeforeShadow(i,D,P,N,O,F,v),i.renderBufferDirect(N,null,O,F,D,v),D.onAfterShadow(i,D,P,N,O,F,v)}}}else if(X.visible){const Y=T(D,X,w,x);D.onBeforeShadow(i,D,P,N,O,Y,null),i.renderBufferDirect(N,null,O,Y,D,null),D.onAfterShadow(i,D,P,N,O,Y,null)}}const U=D.children;for(let O=0,X=U.length;O<X;O++)y(U[O],P,N,w,x)}function k(D){D.target.removeEventListener("dispose",k);for(const N in l){const w=l[N],x=D.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const Pm={[Ua]:Na,[Fa]:Ba,[Oa]:ka,[ss]:za,[Na]:Ua,[Ba]:Fa,[ka]:Oa,[za]:ss};function Dm(i,t){function e(){let H=!1;const xt=new pe;let j=null;const lt=new pe(0,0,0,0);return{setMask:function(Rt){j!==Rt&&!H&&(i.colorMask(Rt,Rt,Rt,Rt),j=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,bt,Zt,rt,dt){dt===!0&&(Rt*=rt,bt*=rt,Zt*=rt),xt.set(Rt,bt,Zt,rt),lt.equals(xt)===!1&&(i.clearColor(Rt,bt,Zt,rt),lt.copy(xt))},reset:function(){H=!1,j=null,lt.set(-1,0,0,0)}}}function n(){let H=!1,xt=!1,j=null,lt=null,Rt=null;return{setReversed:function(bt){if(xt!==bt){const Zt=t.get("EXT_clip_control");xt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const rt=Rt;Rt=null,this.setClear(rt)}xt=bt},getReversed:function(){return xt},setTest:function(bt){bt?st(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(bt){j!==bt&&!H&&(i.depthMask(bt),j=bt)},setFunc:function(bt){if(xt&&(bt=Pm[bt]),lt!==bt){switch(bt){case Ua:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=bt}},setLocked:function(bt){H=bt},setClear:function(bt){Rt!==bt&&(xt&&(bt=1-bt),i.clearDepth(bt),Rt=bt)},reset:function(){H=!1,j=null,lt=null,Rt=null,xt=!1}}}function s(){let H=!1,xt=null,j=null,lt=null,Rt=null,bt=null,Zt=null,rt=null,dt=null;return{setTest:function(ft){H||(ft?st(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ft){xt!==ft&&!H&&(i.stencilMask(ft),xt=ft)},setFunc:function(ft,It,Ht){(j!==ft||lt!==It||Rt!==Ht)&&(i.stencilFunc(ft,It,Ht),j=ft,lt=It,Rt=Ht)},setOp:function(ft,It,Ht){(bt!==ft||Zt!==It||rt!==Ht)&&(i.stencilOp(ft,It,Ht),bt=ft,Zt=It,rt=Ht)},setLocked:function(ft){H=ft},setClear:function(ft){dt!==ft&&(i.clearStencil(ft),dt=ft)},reset:function(){H=!1,xt=null,j=null,lt=null,Rt=null,bt=null,Zt=null,rt=null,dt=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,T=null,y=null,k=null,D=null,P=new Kt(0,0,0),N=0,w=!1,x=null,R=null,U=null,O=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,tt=0;const v=i.getParameter(i.VERSION);v.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(v)[1]),Z=tt>=1):v.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),Z=tt>=2);let L=null,F={};const B=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),_t=new pe().fromArray(B),K=new pe().fromArray(Q);function ht(H,xt,j,lt){const Rt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(H,bt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<j;Zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(xt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return bt}const nt={};nt[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(ss),kt(!1),Ft(Zo),st(i.CULL_FACE),z(en);function st(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function pt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function St(H,xt){return u[H]!==xt?(i.bindFramebuffer(H,xt),u[H]=xt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function et(H,xt){let j=f,lt=!1;if(H){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));const Rt=H.textures;if(j.length!==Rt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Zt=Rt.length;bt<Zt;bt++)j[bt]=i.COLOR_ATTACHMENT0+bt;j.length=Rt.length,lt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,lt=!0);lt&&i.drawBuffers(j)}function Jt(H){return m!==H?(i.useProgram(H),m=H,!0):!1}const Dt={[zn]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};Dt[zh]=i.MIN,Dt[Bh]=i.MAX;const Xt={[Da]:i.ZERO,[kh]:i.ONE,[Hh]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[Xh]:i.SRC_ALPHA_SATURATE,[Ic]:i.DST_COLOR,[Dc]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[Wh]:i.ONE_MINUS_DST_COLOR,[Gh]:i.ONE_MINUS_DST_ALPHA,[qh]:i.CONSTANT_COLOR,[Yh]:i.ONE_MINUS_CONSTANT_COLOR,[Zh]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function z(H,xt,j,lt,Rt,bt,Zt,rt,dt,ft){if(H===en){_===!0&&(pt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),H!==Pc){if(H!==g||ft!==w){if((p!==zn||y!==zn)&&(i.blendEquation(i.FUNC_ADD),p=zn,y=zn),ft)switch(H){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,T=null,k=null,D=null,P.set(0,0,0),N=0,g=H,w=ft}return}Rt=Rt||xt,bt=bt||j,Zt=Zt||lt,(xt!==p||Rt!==y)&&(i.blendEquationSeparate(Dt[xt],Dt[Rt]),p=xt,y=Rt),(j!==E||lt!==T||bt!==k||Zt!==D)&&(i.blendFuncSeparate(Xt[j],Xt[lt],Xt[bt],Xt[Zt]),E=j,T=lt,k=bt,D=Zt),(rt.equals(P)===!1||dt!==N)&&(i.blendColor(rt.r,rt.g,rt.b,dt),P.copy(rt),N=dt),g=H,w=!1}function Qt(H,xt){H.side===Ze?pt(i.CULL_FACE):st(i.CULL_FACE);let j=H.side===We;xt&&(j=!j),kt(j),H.blending===ts&&H.transparent===!1?z(en):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const lt=H.stencilWrite;o.setTest(lt),lt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Yt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(H){x!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),x=H)}function Ft(H){H!==Uh?(st(i.CULL_FACE),H!==R&&(H===Zo?i.cullFace(i.BACK):H===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),R=H}function Mt(H){H!==U&&(Z&&i.lineWidth(H),U=H)}function Yt(H,xt,j){H?(st(i.POLYGON_OFFSET_FILL),(O!==xt||X!==j)&&(i.polygonOffset(xt,j),O=xt,X=j)):pt(i.POLYGON_OFFSET_FILL)}function yt(H){H?st(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function C(H){H===void 0&&(H=i.TEXTURE0+Y-1),L!==H&&(i.activeTexture(H),L=H)}function M(H,xt,j){j===void 0&&(L===null?j=i.TEXTURE0+Y-1:j=L);let lt=F[j];lt===void 0&&(lt={type:void 0,texture:void 0},F[j]=lt),(lt.type!==H||lt.texture!==xt)&&(L!==j&&(i.activeTexture(j),L=j),i.bindTexture(H,xt||nt[H]),lt.type=H,lt.texture=xt)}function q(){const H=F[L];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(H){_t.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),_t.copy(H))}function At(H){K.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function te(H,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let lt=j.get(H);lt===void 0&&(lt=i.getUniformBlockIndex(xt,H.name),j.set(H,lt))}function qt(H,xt){const lt=l.get(xt).get(H);c.get(xt)!==lt&&(i.uniformBlockBinding(xt,lt,H.__bindingPointIndex),c.set(xt,lt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},L=null,F={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,T=null,y=null,k=null,D=null,P=new Kt(0,0,0),N=0,w=!1,x=null,R=null,U=null,O=null,X=null,_t.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:pt,bindFramebuffer:St,drawBuffers:et,useProgram:Jt,setBlending:z,setMaterial:Qt,setFlipSided:kt,setCullFace:Ft,setLineWidth:Mt,setPolygonOffset:Yt,setScissorTest:yt,activeTexture:C,bindTexture:M,unbindTexture:q,compressedTexImage2D:it,compressedTexImage3D:at,texImage2D:wt,texImage3D:zt,updateUBOMapping:te,uniformBlockBinding:qt,texStorage2D:Ot,texStorage3D:ct,texSubImage2D:J,texSubImage3D:Lt,compressedTexSubImage2D:mt,compressedTexSubImage3D:vt,scissor:Gt,viewport:At,reset:jt}}function Gl(i,t,e,n){const s=Im(n);switch(e){case Bc:return i*t;case Hc:return i*t;case Vc:return i*t*2;case Co:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case Do:return i*t*2/s.components*s.byteLength;case kc:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Io:return i*t*4/s.components*s.byteLength;case wr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rr:case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wc:case po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Im(i){switch(i){case Wn:case Fc:return{byteLength:1,components:1};case Ls:case Oc:case bi:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case wi:case To:case An:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function m(C,M){return f?new OffscreenCanvas(C,M):Ir("canvas")}function _(C,M,q){let it=1;const at=yt(C);if((at.width>q||at.height>q)&&(it=q/Math.max(at.width,at.height)),it<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const J=Math.floor(it*at.width),Lt=Math.floor(it*at.height);u===void 0&&(u=m(J,Lt));const mt=M?m(J,Lt):u;return mt.width=J,mt.height=Lt,mt.getContext("2d").drawImage(C,0,0,J,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+J+"x"+Lt+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(C,M,q,it,at=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=M;if(M===i.RED&&(q===i.FLOAT&&(J=i.R32F),q===i.HALF_FLOAT&&(J=i.R16F),q===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.R8UI),q===i.UNSIGNED_SHORT&&(J=i.R16UI),q===i.UNSIGNED_INT&&(J=i.R32UI),q===i.BYTE&&(J=i.R8I),q===i.SHORT&&(J=i.R16I),q===i.INT&&(J=i.R32I)),M===i.RG&&(q===i.FLOAT&&(J=i.RG32F),q===i.HALF_FLOAT&&(J=i.RG16F),q===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RG8UI),q===i.UNSIGNED_SHORT&&(J=i.RG16UI),q===i.UNSIGNED_INT&&(J=i.RG32UI),q===i.BYTE&&(J=i.RG8I),q===i.SHORT&&(J=i.RG16I),q===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RGB8UI),q===i.UNSIGNED_SHORT&&(J=i.RGB16UI),q===i.UNSIGNED_INT&&(J=i.RGB32UI),q===i.BYTE&&(J=i.RGB8I),q===i.SHORT&&(J=i.RGB16I),q===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),q===i.UNSIGNED_INT&&(J=i.RGBA32UI),q===i.BYTE&&(J=i.RGBA8I),q===i.SHORT&&(J=i.RGBA16I),q===i.INT&&(J=i.RGBA32I)),M===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),M===i.RGBA){const Lt=at?kr:le.getTransfer(it);q===i.FLOAT&&(J=i.RGBA32F),q===i.HALF_FLOAT&&(J=i.RGBA16F),q===i.UNSIGNED_BYTE&&(J=Lt===de?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(C,M){let q;return C?M===null||M===wi||M===Ti?q=i.DEPTH24_STENCIL8:M===An?q=i.DEPTH32F_STENCIL8:M===Ls&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wi||M===Ti?q=i.DEPTH_COMPONENT24:M===An?q=i.DEPTH_COMPONENT32F:M===Ls&&(q=i.DEPTH_COMPONENT16),q}function k(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function D(C){const M=C.target;M.removeEventListener("dispose",D),N(M),M.isVideoTexture&&h.delete(M)}function P(C){const M=C.target;M.removeEventListener("dispose",P),x(M)}function N(C){const M=n.get(C);if(M.__webglInit===void 0)return;const q=C.source,it=d.get(q);if(it){const at=it[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(C),Object.keys(it).length===0&&d.delete(q)}n.remove(C)}function w(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const q=C.source,it=d.get(q);delete it[M.__cacheKey],a.memory.textures--}function x(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let at=0;at<M.__webglFramebuffer[it].length;at++)i.deleteFramebuffer(M.__webglFramebuffer[it][at]);else i.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)i.deleteFramebuffer(M.__webglFramebuffer[it]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=C.textures;for(let it=0,at=q.length;it<at;it++){const J=n.get(q[it]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(q[it])}n.remove(C)}let R=0;function U(){R=0}function O(){const C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function X(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){const q=n.get(C);if(C.isVideoTexture&&Mt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,C,M);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function Z(C,M){const q=n.get(C);if(C.version>0&&q.__version!==C.version){K(q,C,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function tt(C,M){const q=n.get(C);if(C.version>0&&q.__version!==C.version){K(q,C,M);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function v(C,M){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ht(q,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}const L={[Rn]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},F={[Qe]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},B={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[Xc]:i.LEQUAL,[hu]:i.EQUAL,[du]:i.GEQUAL,[uu]:i.GREATER,[fu]:i.NOTEQUAL};function Q(C,M){if(M.type===An&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===nn||M.magFilter===qr||M.magFilter===ks||M.magFilter===Sn||M.minFilter===nn||M.minFilter===qr||M.minFilter===ks||M.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,L[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,L[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,L[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,F[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qe||M.minFilter!==ks&&M.minFilter!==Sn||M.type===An&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function _t(C,M){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",D));const it=M.source;let at=d.get(it);at===void 0&&(at={},d.set(it,at));const J=X(M);if(J!==C.__cacheKey){at[J]===void 0&&(at[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),at[J].usedTimes++;const Lt=at[C.__cacheKey];Lt!==void 0&&(at[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(M)),C.__cacheKey=J,C.__webglTexture=at[J].texture}return q}function K(C,M,q){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);const at=_t(C,M),J=M.source;e.bindTexture(it,C.__webglTexture,i.TEXTURE0+q);const Lt=n.get(J);if(J.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+q);const mt=le.getPrimaries(le.workingColorSpace),vt=M.colorSpace===Bn?null:le.getPrimaries(M.colorSpace),Ot=M.colorSpace===Bn||mt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ct=_(M.image,!1,s.maxTextureSize);ct=Yt(M,ct);const wt=r.convert(M.format,M.colorSpace),zt=r.convert(M.type);let Gt=T(M.internalFormat,wt,zt,M.colorSpace,M.isVideoTexture);Q(it,M);let At;const te=M.mipmaps,qt=M.isVideoTexture!==!0,jt=Lt.__version===void 0||at===!0,H=J.dataReady,xt=k(M,ct);if(M.isDepthTexture)Gt=y(M.format===Ai,M.type),jt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,wt,zt,null));else if(M.isDataTexture)if(te.length>0){qt&&jt&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,te[0].width,te[0].height);for(let j=0,lt=te.length;j<lt;j++)At=te[j],qt?H&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,wt,zt,At.data):e.texImage2D(i.TEXTURE_2D,j,Gt,At.width,At.height,0,wt,zt,At.data);M.generateMipmaps=!1}else qt?(jt&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,ct.width,ct.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,wt,zt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,wt,zt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Gt,te[0].width,te[0].height,ct.depth);for(let j=0,lt=te.length;j<lt;j++)if(At=te[j],M.format!==En)if(wt!==null)if(qt){if(H)if(M.layerUpdates.size>0){const Rt=Gl(At.width,At.height,M.format,M.type);for(const bt of M.layerUpdates){const Zt=At.data.subarray(bt*Rt/At.data.BYTES_PER_ELEMENT,(bt+1)*Rt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,bt,At.width,At.height,1,wt,Zt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,At.width,At.height,ct.depth,wt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Gt,At.width,At.height,ct.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,At.width,At.height,ct.depth,wt,zt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Gt,At.width,At.height,ct.depth,0,wt,zt,At.data)}else{qt&&jt&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,te[0].width,te[0].height);for(let j=0,lt=te.length;j<lt;j++)At=te[j],M.format!==En?wt!==null?qt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,wt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?H&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,wt,zt,At.data):e.texImage2D(i.TEXTURE_2D,j,Gt,At.width,At.height,0,wt,zt,At.data)}else if(M.isDataArrayTexture)if(qt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Gt,ct.width,ct.height,ct.depth),H)if(M.layerUpdates.size>0){const j=Gl(ct.width,ct.height,M.format,M.type);for(const lt of M.layerUpdates){const Rt=ct.data.subarray(lt*j/ct.data.BYTES_PER_ELEMENT,(lt+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ct.width,ct.height,1,wt,zt,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,zt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,wt,zt,ct.data);else if(M.isData3DTexture)qt?(jt&&e.texStorage3D(i.TEXTURE_3D,xt,Gt,ct.width,ct.height,ct.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,zt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,wt,zt,ct.data);else if(M.isFramebufferTexture){if(jt)if(qt)e.texStorage2D(i.TEXTURE_2D,xt,Gt,ct.width,ct.height);else{let j=ct.width,lt=ct.height;for(let Rt=0;Rt<xt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Gt,j,lt,0,wt,zt,null),j>>=1,lt>>=1}}else if(te.length>0){if(qt&&jt){const j=yt(te[0]);e.texStorage2D(i.TEXTURE_2D,xt,Gt,j.width,j.height)}for(let j=0,lt=te.length;j<lt;j++)At=te[j],qt?H&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,wt,zt,At):e.texImage2D(i.TEXTURE_2D,j,Gt,wt,zt,At);M.generateMipmaps=!1}else if(qt){if(jt){const j=yt(ct);e.texStorage2D(i.TEXTURE_2D,xt,Gt,j.width,j.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,zt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Gt,wt,zt,ct);g(M)&&p(it),Lt.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ht(C,M,q){if(M.image.length!==6)return;const it=_t(C,M),at=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);const J=n.get(at);if(at.version!==J.__version||it===!0){e.activeTexture(i.TEXTURE0+q);const Lt=le.getPrimaries(le.workingColorSpace),mt=M.colorSpace===Bn?null:le.getPrimaries(M.colorSpace),vt=M.colorSpace===Bn||Lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ot=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let lt=0;lt<6;lt++)!Ot&&!ct?wt[lt]=_(M.image[lt],!0,s.maxCubemapSize):wt[lt]=ct?M.image[lt].image:M.image[lt],wt[lt]=Yt(M,wt[lt]);const zt=wt[0],Gt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),te=T(M.internalFormat,Gt,At,M.colorSpace),qt=M.isVideoTexture!==!0,jt=J.__version===void 0||it===!0,H=at.dataReady;let xt=k(M,zt);Q(i.TEXTURE_CUBE_MAP,M);let j;if(Ot){qt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,te,zt.width,zt.height);for(let lt=0;lt<6;lt++){j=wt[lt].mipmaps;for(let Rt=0;Rt<j.length;Rt++){const bt=j[Rt];M.format!==En?Gt!==null?qt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,bt.width,bt.height,Gt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,te,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,bt.width,bt.height,Gt,At,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,te,bt.width,bt.height,0,Gt,At,bt.data)}}}else{if(j=M.mipmaps,qt&&jt){j.length>0&&xt++;const lt=yt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,te,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ct){qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,wt[lt].width,wt[lt].height,Gt,At,wt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,te,wt[lt].width,wt[lt].height,0,Gt,At,wt[lt].data);for(let Rt=0;Rt<j.length;Rt++){const Zt=j[Rt].image[lt].image;qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Zt.width,Zt.height,Gt,At,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,te,Zt.width,Zt.height,0,Gt,At,Zt.data)}}else{qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Gt,At,wt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,te,Gt,At,wt[lt]);for(let Rt=0;Rt<j.length;Rt++){const bt=j[Rt];qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Gt,At,bt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,te,Gt,At,bt.image[lt])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),J.__version=at.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function nt(C,M,q,it,at,J){const Lt=r.convert(q.format,q.colorSpace),mt=r.convert(q.type),vt=T(q.internalFormat,Lt,mt,q.colorSpace),Ot=n.get(M),ct=n.get(q);if(ct.__renderTarget=M,!Ot.__hasExternalTextures){const wt=Math.max(1,M.width>>J),zt=Math.max(1,M.height>>J);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,J,vt,wt,zt,M.depth,0,Lt,mt,null):e.texImage2D(at,J,vt,wt,zt,0,Lt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,at,ct.__webglTexture,0,kt(M)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,at,ct.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const it=M.depthTexture,at=it&&it.isDepthTexture?it.type:null,J=y(M.stencilBuffer,at),Lt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=kt(M);Ft(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,J,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,C)}else{const it=M.textures;for(let at=0;at<it.length;at++){const J=it[at],Lt=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),vt=T(J.internalFormat,Lt,mt,J.colorSpace),Ot=kt(M);q&&Ft(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,vt,M.width,M.height):Ft(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(M.depthTexture);it.__renderTarget=M,(!it.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const at=it.__webglTexture,J=kt(M);if(M.depthTexture.format===es)Ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(M.depthTexture.format===Ai)Ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function St(C){const M=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const it=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",at)};it.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=it}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,C)}else if(q){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=i.createRenderbuffer(),st(M.__webglDepthbuffer[it],C,!1);else{const at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,C,!1);else{const it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(C,M,q){const it=n.get(C);M!==void 0&&nt(it.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&St(C)}function Jt(C){const M=C.texture,q=n.get(C),it=n.get(M);C.addEventListener("dispose",P);const at=C.textures,J=C.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,a.memory.textures++),J){q.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[mt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)q.__webglFramebuffer[mt][vt]=i.createFramebuffer()}else q.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)q.__webglFramebuffer[mt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let mt=0,vt=at.length;mt<vt;mt++){const Ot=n.get(at[mt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Ft(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let mt=0;mt<at.length;mt++){const vt=at[mt];q.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[mt]);const Ot=r.convert(vt.format,vt.colorSpace),ct=r.convert(vt.type),wt=T(vt.internalFormat,Ot,ct,vt.colorSpace,C.isXRRenderTarget===!0),zt=kt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,q.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),st(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Q(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)nt(q.__webglFramebuffer[mt][vt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,vt);else nt(q.__webglFramebuffer[mt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let mt=0,vt=at.length;mt<vt;mt++){const Ot=at[mt],ct=n.get(Ot);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Q(i.TEXTURE_2D,Ot),nt(q.__webglFramebuffer,C,Ot,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),g(Ot)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,it.__webglTexture),Q(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)nt(q.__webglFramebuffer[vt],C,M,i.COLOR_ATTACHMENT0,mt,vt);else nt(q.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,mt,0);g(M)&&p(mt),e.unbindTexture()}C.depthBuffer&&St(C)}function Dt(C){const M=C.textures;for(let q=0,it=M.length;q<it;q++){const at=M[q];if(g(at)){const J=E(C),Lt=n.get(at).__webglTexture;e.bindTexture(J,Lt),p(J),e.unbindTexture()}}}const Xt=[],z=[];function Qt(C){if(C.samples>0){if(Ft(C)===!1){const M=C.textures,q=C.width,it=C.height;let at=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(C),mt=M.length>1;if(mt)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const Ot=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,q,it,0,0,q,it,at,i.NEAREST),c===!0&&(Xt.length=0,z.length=0,Xt.push(i.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xt.push(J),z.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const Ot=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function kt(C){return Math.min(s.maxSamples,C.samples)}function Ft(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Mt(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Yt(C,M){const q=C.colorSpace,it=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==hi&&q!==Bn&&(le.getTransfer(q)===de?(it!==En||at!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function yt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=v,this.rebindTextures=et,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ft}function Um(i,t){function e(n,s=Bn){let r;const a=le.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Bc)return i.ALPHA;if(n===kc)return i.RGB;if(n===En)return i.RGBA;if(n===Hc)return i.LUMINANCE;if(n===Vc)return i.LUMINANCE_ALPHA;if(n===es)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===wr||n===br||n===Tr||n===Ar)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ka)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$a||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===uo||n===fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Nm extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fm={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class Bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new dn({vertexShader:Om,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class km extends ls{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new Bm,g=e.getContextAttributes();let p=null,E=null;const T=[],y=[],k=new Et;let D=null;const P=new on;P.viewport=new pe;const N=new on;N.viewport=new pe;const w=[P,N],x=new Nm;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=T[K];return ht===void 0&&(ht=new xa,T[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=T[K];return ht===void 0&&(ht=new xa,T[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=T[K];return ht===void 0&&(ht=new xa,T[K]=ht),ht.getHandSpace()};function O(K){const ht=y.indexOf(K.inputSource);if(ht===-1)return;const nt=T[ht];nt!==void 0&&(nt.update(K.inputSource,K.frame,l||a),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<T.length;K++){const ht=y[K];ht!==null&&(y[K]=null,T[K].disconnect(ht))}R=null,U=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const ht={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Xn(f.framebufferWidth,f.framebufferHeight,{format:En,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ht=null,nt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=g.stencil?Ai:es,nt=g.stencil?Ti:wi);const pt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Xn(d.textureWidth,d.textureHeight,{format:En,type:Wn,depthTexture:new Bo(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let ht=0;ht<K.removed.length;ht++){const nt=K.removed[ht],st=y.indexOf(nt);st>=0&&(y[st]=null,T[st].disconnect(nt))}for(let ht=0;ht<K.added.length;ht++){const nt=K.added[ht];let st=y.indexOf(nt);if(st===-1){for(let St=0;St<T.length;St++)if(St>=y.length){y.push(nt),st=St;break}else if(y[St]===null){y[St]=nt,st=St;break}if(st===-1)break}const pt=T[st];pt&&pt.connect(nt)}}const Z=new W,tt=new W;function v(K,ht,nt){Z.setFromMatrixPosition(ht.matrixWorld),tt.setFromMatrixPosition(nt.matrixWorld);const st=Z.distanceTo(tt),pt=ht.projectionMatrix.elements,St=nt.projectionMatrix.elements,et=pt[14]/(pt[10]-1),Jt=pt[14]/(pt[10]+1),Dt=(pt[9]+1)/pt[5],Xt=(pt[9]-1)/pt[5],z=(pt[8]-1)/pt[0],Qt=(St[8]+1)/St[0],kt=et*z,Ft=et*Qt,Mt=st/(-z+Qt),Yt=Mt*-z;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Yt),K.translateZ(Mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),pt[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const yt=et+Mt,C=Jt+Mt,M=kt-Yt,q=Ft+(st-Yt),it=Dt*Jt/C*yt,at=Xt*Jt/C*yt;K.projectionMatrix.makePerspective(M,q,it,at,yt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function L(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ht=K.near,nt=K.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(nt=_.depthFar)),x.near=N.near=P.near=ht,x.far=N.far=P.far=nt,(R!==x.near||U!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,U=x.far),P.layers.mask=K.layers.mask|2,N.layers.mask=K.layers.mask|4,x.layers.mask=P.layers.mask|N.layers.mask;const st=K.parent,pt=x.cameras;L(x,st);for(let St=0;St<pt.length;St++)L(pt[St],st);pt.length===2?v(x,P,N):x.projectionMatrix.copy(P.projectionMatrix),F(K,x,st)};function F(K,ht,nt){nt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Us*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let B=null;function Q(K,ht){if(h=ht.getViewerPose(l||a),m=ht,h!==null){const nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let st=!1;nt.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let St=0;St<nt.length;St++){const et=nt[St];let Jt=null;if(f!==null)Jt=f.getViewport(et);else{const Xt=u.getViewSubImage(d,et);Jt=Xt.viewport,St===0&&(t.setRenderTargetTextures(E,Xt.colorTexture,d.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(E))}let Dt=w[St];Dt===void 0&&(Dt=new on,Dt.layers.enable(St),Dt.viewport=new pe,w[St]=Dt),Dt.matrix.fromArray(et.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(et.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),St===0&&(x.matrix.copy(Dt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(Dt)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const St=u.getDepthInformation(nt[0]);St&&St.isValid&&St.texture&&_.init(t,St,s.renderState)}}for(let nt=0;nt<T.length;nt++){const st=y[nt],pt=T[nt];st!==null&&pt!==void 0&&pt.update(st,ht,l||a)}B&&B(K,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),m=null}const _t=new nh;_t.setAnimationLoop(Q),this.setAnimationLoop=function(K){B=K},this.dispose=function(){}}}const _i=new Cn,Hm=new me;function Vm(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,E,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===We&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===We&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=t.get(p),T=E.envMap,y=E.envMapRotation;T&&(g.envMap.value=T,_i.copy(y),_i.x*=-1,_i.y*=-1,_i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),g.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(_i)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const y=T.program;n.uniformBlockBinding(E,y)}function l(E,T){let y=s[E.id];y===void 0&&(m(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",g));const k=T.program;n.updateUBOMapping(E,k);const D=t.render.frame;r[E.id]!==D&&(d(E),r[E.id]=D)}function h(E){const T=u();E.__bindingPointIndex=T;const y=i.createBuffer(),k=E.__size,D=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,k,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=s[E.id],y=E.uniforms,k=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,P=y.length;D<P;D++){const N=Array.isArray(y[D])?y[D]:[y[D]];for(let w=0,x=N.length;w<x;w++){const R=N[w];if(f(R,D,w,k)===!0){const U=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let Y=0;Y<O.length;Y++){const Z=O[Y],tt=_(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,U+X,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,T,y,k){const D=E.value,P=T+"_"+y;if(k[P]===void 0)return typeof D=="number"||typeof D=="boolean"?k[P]=D:k[P]=D.clone(),!0;{const N=k[P];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return k[P]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function m(E){const T=E.uniforms;let y=0;const k=16;for(let P=0,N=T.length;P<N;P++){const w=Array.isArray(T[P])?T[P]:[T[P]];for(let x=0,R=w.length;x<R;x++){const U=w[x],O=Array.isArray(U.value)?U.value:[U.value];for(let X=0,Y=O.length;X<Y;X++){const Z=O[X],tt=_(Z),v=y%k,L=v%tt.boundary,F=v+L;y+=L,F!==0&&k-F<tt.storage&&(y+=k-F),U.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=tt.storage}}}const D=y%k;return D>0&&(y+=k-D),E.__size=y,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function g(E){const T=E.target;T.removeEventListener("dispose",g);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Wm{constructor(t={}){const{canvas:e=Iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=li,this.toneMappingExposure=1;const y=this;let k=!1,D=0,P=0,N=null,w=-1,x=null;const R=new pe,U=new pe;let O=null;const X=new Kt(0);let Y=0,Z=e.width,tt=e.height,v=1,L=null,F=null;const B=new pe(0,0,Z,tt),Q=new pe(0,0,Z,tt);let _t=!1;const K=new Fo;let ht=!1,nt=!1;const st=new me,pt=new me,St=new W,et=new pe,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Xt(){return N===null?v:1}let z=n;function Qt(S,V){return e.getContext(S,V)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bo}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),z===null){const V="webgl2";if(z=Qt(V,S),z===null)throw Qt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let kt,Ft,Mt,Yt,yt,C,M,q,it,at,J,Lt,mt,vt,Ot,ct,wt,zt,Gt,At,te,qt,jt,H;function xt(){kt=new Kp(z),kt.init(),qt=new Um(z,kt),Ft=new Gp(z,kt,t,qt),Mt=new Dm(z,kt),Ft.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Yt=new Jp(z),yt=new gm,C=new Lm(z,kt,Mt,yt,Ft,qt,Yt),M=new Xp(y),q=new Zp(y),it=new rf(z),jt=new Hp(z,it),at=new jp(z,it,Yt,jt),J=new t0(z,at,it,Yt),Gt=new Qp(z,Ft,C),ct=new Wp(yt),Lt=new mm(y,M,q,kt,Ft,jt,ct),mt=new Vm(y,yt),vt=new vm,Ot=new wm(kt),zt=new kp(y,M,q,Mt,J,f,c),wt=new Cm(y,J,Ft),H=new Gm(z,Yt,Ft,Mt),At=new Vp(z,kt,Yt),te=new $p(z,kt,Yt),Yt.programs=Lt.programs,y.capabilities=Ft,y.extensions=kt,y.properties=yt,y.renderLists=vt,y.shadowMap=wt,y.state=Mt,y.info=Yt}xt();const j=new km(y,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(S){S!==void 0&&(v=S,this.setSize(Z,tt,!1))},this.getSize=function(S){return S.set(Z,tt)},this.setSize=function(S,V,A=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,tt=V,e.width=Math.floor(S*v),e.height=Math.floor(V*v),A===!0&&(e.style.width=S+"px",e.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(Z*v,tt*v).floor()},this.setDrawingBufferSize=function(S,V,A){Z=S,tt=V,v=A,e.width=Math.floor(S*A),e.height=Math.floor(V*A),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(B)},this.setViewport=function(S,V,A,I){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,V,A,I),Mt.viewport(R.copy(B).multiplyScalar(v).round())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,V,A,I){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,V,A,I),Mt.scissor(U.copy(Q).multiplyScalar(v).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(S){Mt.setScissorTest(_t=S)},this.setOpaqueSort=function(S){L=S},this.setTransparentSort=function(S){F=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(S=!0,V=!0,A=!0){let I=0;if(S){let b=!1;if(N!==null){const G=N.texture.format;b=G===Io||G===Do||G===Po}if(b){const G=N.texture.type,$=G===Wn||G===wi||G===Ls||G===Ti||G===Ao||G===Ro,ut=zt.getClearColor(),gt=zt.getClearAlpha(),Ct=ut.r,Ut=ut.g,Pt=ut.b;$?(m[0]=Ct,m[1]=Ut,m[2]=Pt,m[3]=gt,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=Ct,_[1]=Ut,_[2]=Pt,_[3]=gt,z.clearBufferiv(z.COLOR,0,_))}else I|=z.COLOR_BUFFER_BIT}V&&(I|=z.DEPTH_BUFFER_BIT),A&&(I|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),vt.dispose(),Ot.dispose(),yt.dispose(),M.dispose(),q.dispose(),J.dispose(),jt.dispose(),H.dispose(),Lt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Me),j.removeEventListener("sessionend",He),Ie.stop()};function lt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const S=Yt.autoReset,V=wt.enabled,A=wt.autoUpdate,I=wt.needsUpdate,b=wt.type;xt(),Yt.autoReset=S,wt.enabled=V,wt.autoUpdate=A,wt.needsUpdate=I,wt.type=b}function bt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Zt(S){const V=S.target;V.removeEventListener("dispose",Zt),rt(V)}function rt(S){dt(S),yt.remove(S)}function dt(S){const V=yt.get(S).programs;V!==void 0&&(V.forEach(function(A){Lt.releaseProgram(A)}),S.isShaderMaterial&&Lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,A,I,b,G){V===null&&(V=Jt);const $=b.isMesh&&b.matrixWorld.determinant()<0,ut=gn(S,V,A,I,b);Mt.setMaterial(I,$);let gt=A.index,Ct=1;if(I.wireframe===!0){if(gt=at.getWireframeAttribute(A),gt===void 0)return;Ct=2}const Ut=A.drawRange,Pt=A.attributes.position;let se=Ut.start*Ct,ve=(Ut.start+Ut.count)*Ct;G!==null&&(se=Math.max(se,G.start*Ct),ve=Math.min(ve,(G.start+G.count)*Ct)),gt!==null?(se=Math.max(se,0),ve=Math.min(ve,gt.count)):Pt!=null&&(se=Math.max(se,0),ve=Math.min(ve,Pt.count));const Se=ve-se;if(Se<0||Se===1/0)return;jt.setup(b,I,ut,A,gt);let tn,he=At;if(gt!==null&&(tn=it.get(gt),he=te,he.setIndex(tn)),b.isMesh)I.wireframe===!0?(Mt.setLineWidth(I.wireframeLinewidth*Xt()),he.setMode(z.LINES)):he.setMode(z.TRIANGLES);else if(b.isLine){let Bt=I.linewidth;Bt===void 0&&(Bt=1),Mt.setLineWidth(Bt*Xt()),b.isLineSegments?he.setMode(z.LINES):b.isLineLoop?he.setMode(z.LINE_LOOP):he.setMode(z.LINE_STRIP)}else b.isPoints?he.setMode(z.POINTS):b.isSprite&&he.setMode(z.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)he.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))he.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const Bt=b._multiDrawStarts,Dn=b._multiDrawCounts,ue=b._multiDrawCount,_n=gt?it.get(gt).bytesPerElement:1,Ri=yt.get(I).currentProgram.getUniforms();for(let sn=0;sn<ue;sn++)Ri.setValue(z,"_gl_DrawID",sn),he.render(Bt[sn]/_n,Dn[sn])}else if(b.isInstancedMesh)he.renderInstances(se,Se,b.count);else if(A.isInstancedBufferGeometry){const Bt=A._maxInstanceCount!==void 0?A._maxInstanceCount:1/0,Dn=Math.min(A.instanceCount,Bt);he.renderInstances(se,Se,Dn)}else he.render(se,Se)};function ft(S,V,A){S.transparent===!0&&S.side===Ze&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,be(S,V,A),S.side=ci,S.needsUpdate=!0,be(S,V,A),S.side=Ze):be(S,V,A)}this.compile=function(S,V,A=null){A===null&&(A=S),p=Ot.get(A),p.init(V),T.push(p),A.traverseVisible(function(b){b.isLight&&b.layers.test(V.layers)&&(p.pushLight(b),b.castShadow&&p.pushShadow(b))}),S!==A&&S.traverseVisible(function(b){b.isLight&&b.layers.test(V.layers)&&(p.pushLight(b),b.castShadow&&p.pushShadow(b))}),p.setupLights();const I=new Set;return S.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const G=b.material;if(G)if(Array.isArray(G))for(let $=0;$<G.length;$++){const ut=G[$];ft(ut,A,b),I.add(ut)}else ft(G,A,b),I.add(G)}),T.pop(),p=null,I},this.compileAsync=function(S,V,A=null){const I=this.compile(S,V,A);return new Promise(b=>{function G(){if(I.forEach(function($){yt.get($).currentProgram.isReady()&&I.delete($)}),I.size===0){b(S);return}setTimeout(G,10)}kt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let It=null;function Ht(S){It&&It(S)}function Me(){Ie.stop()}function He(){Ie.start()}const Ie=new nh;Ie.setAnimationLoop(Ht),typeof self!="undefined"&&Ie.setContext(self),this.setAnimationLoop=function(S){It=S,j.setAnimationLoop(S),S===null?Ie.stop():Ie.start()},j.addEventListener("sessionstart",Me),j.addEventListener("sessionend",He),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,V,N),p=Ot.get(S,T.length),p.init(V),T.push(p),pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(pt),nt=this.localClippingEnabled,ht=ct.init(this.clippingPlanes,nt),g=vt.get(S,E.length),g.init(),E.push(g),j.enabled===!0&&j.isPresenting===!0){const G=y.xr.getDepthSensingMesh();G!==null&&pn(G,V,-1/0,y.sortObjects)}pn(S,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(L,F),Dt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Dt&&zt.addToRenderList(g,S),this.info.render.frame++,ht===!0&&ct.beginShadows();const A=p.state.shadowsArray;wt.render(A,S,V),ht===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=g.opaque,b=g.transmissive;if(p.setupLights(),V.isArrayCamera){const G=V.cameras;if(b.length>0)for(let $=0,ut=G.length;$<ut;$++){const gt=G[$];ye(I,b,S,gt)}Dt&&zt.render(S);for(let $=0,ut=G.length;$<ut;$++){const gt=G[$];Pn(g,S,gt,gt.viewport)}}else b.length>0&&ye(I,b,S,V),Dt&&zt.render(S),Pn(g,S,V);N!==null&&(C.updateMultisampleRenderTarget(N),C.updateRenderTargetMipmap(N)),S.isScene===!0&&S.onAfterRender(y,S,V),jt.resetDefaultState(),w=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],ht===!0&&ct.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function pn(S,V,A,I){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)A=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){I&&et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);const $=J.update(S),ut=S.material;ut.visible&&g.push(S,$,ut,A,et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const $=J.update(S),ut=S.material;if(I&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),et.copy(S.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),et.copy($.boundingSphere.center)),et.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(ut)){const gt=$.groups;for(let Ct=0,Ut=gt.length;Ct<Ut;Ct++){const Pt=gt[Ct],se=ut[Pt.materialIndex];se&&se.visible&&g.push(S,$,se,A,et.z,Pt)}}else ut.visible&&g.push(S,$,ut,A,et.z,null)}}const G=S.children;for(let $=0,ut=G.length;$<ut;$++)pn(G[$],V,A,I)}function Pn(S,V,A,I){const b=S.opaque,G=S.transmissive,$=S.transparent;p.setupLightsView(A),ht===!0&&ct.setGlobalState(y.clippingPlanes,A),I&&Mt.viewport(R.copy(I)),b.length>0&&je(b,V,A),G.length>0&&je(G,V,A),$.length>0&&je($,V,A),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ye(S,V,A,I){if((A.isScene===!0?A.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[I.id]===void 0&&(p.state.transmissionRenderTarget[I.id]=new Xn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?bi:Wn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const G=p.state.transmissionRenderTarget[I.id],$=I.viewport||R;G.setSize($.z,$.w);const ut=y.getRenderTarget();y.setRenderTarget(G),y.getClearColor(X),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Dt&&zt.render(A);const gt=y.toneMapping;y.toneMapping=li;const Ct=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),p.setupLightsView(I),ht===!0&&ct.setGlobalState(y.clippingPlanes,I),je(S,A,I),C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Pt=0,se=V.length;Pt<se;Pt++){const ve=V[Pt],Se=ve.object,tn=ve.geometry,he=ve.material,Bt=ve.group;if(he.side===Ze&&Se.layers.test(I.layers)){const Dn=he.side;he.side=We,he.needsUpdate=!0,mn(Se,A,I,tn,he,Bt),he.side=Dn,he.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G))}y.setRenderTarget(ut),y.setClearColor(X,Y),Ct!==void 0&&(I.viewport=Ct),y.toneMapping=gt}function je(S,V,A){const I=V.isScene===!0?V.overrideMaterial:null;for(let b=0,G=S.length;b<G;b++){const $=S[b],ut=$.object,gt=$.geometry,Ct=I===null?$.material:I,Ut=$.group;ut.layers.test(A.layers)&&mn(ut,V,A,gt,Ct,Ut)}}function mn(S,V,A,I,b,G){S.onBeforeRender(y,V,A,I,b,G),S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),b.onBeforeRender(y,V,A,I,S,G),b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=We,b.needsUpdate=!0,y.renderBufferDirect(A,V,I,b,S,G),b.side=ci,b.needsUpdate=!0,y.renderBufferDirect(A,V,I,b,S,G),b.side=Ze):y.renderBufferDirect(A,V,I,b,S,G),S.onAfterRender(y,V,A,I,b,G)}function be(S,V,A){V.isScene!==!0&&(V=Jt);const I=yt.get(S),b=p.state.lights,G=p.state.shadowsArray,$=b.state.version,ut=Lt.getParameters(S,b.state,G,V,A),gt=Lt.getProgramCacheKey(ut);let Ct=I.programs;I.environment=S.isMeshStandardMaterial?V.environment:null,I.fog=V.fog,I.envMap=(S.isMeshStandardMaterial?q:M).get(S.envMap||I.environment),I.envMapRotation=I.environment!==null&&S.envMap===null?V.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",Zt),Ct=new Map,I.programs=Ct);let Ut=Ct.get(gt);if(Ut!==void 0){if(I.currentProgram===Ut&&I.lightsStateVersion===$)return Te(S,ut),Ut}else ut.uniforms=Lt.getUniforms(S),S.onBeforeCompile(ut,y),Ut=Lt.acquireProgram(ut,gt),Ct.set(gt,Ut),I.uniforms=ut.uniforms;const Pt=I.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=ct.uniform),Te(S,ut),I.needsLights=Re(S),I.lightsStateVersion=$,I.needsLights&&(Pt.ambientLightColor.value=b.state.ambient,Pt.lightProbe.value=b.state.probe,Pt.directionalLights.value=b.state.directional,Pt.directionalLightShadows.value=b.state.directionalShadow,Pt.spotLights.value=b.state.spot,Pt.spotLightShadows.value=b.state.spotShadow,Pt.rectAreaLights.value=b.state.rectArea,Pt.ltc_1.value=b.state.rectAreaLTC1,Pt.ltc_2.value=b.state.rectAreaLTC2,Pt.pointLights.value=b.state.point,Pt.pointLightShadows.value=b.state.pointShadow,Pt.hemisphereLights.value=b.state.hemi,Pt.directionalShadowMap.value=b.state.directionalShadowMap,Pt.directionalShadowMatrix.value=b.state.directionalShadowMatrix,Pt.spotShadowMap.value=b.state.spotShadowMap,Pt.spotLightMatrix.value=b.state.spotLightMatrix,Pt.spotLightMap.value=b.state.spotLightMap,Pt.pointShadowMap.value=b.state.pointShadowMap,Pt.pointShadowMatrix.value=b.state.pointShadowMatrix),I.currentProgram=Ut,I.uniformsList=null,Ut}function _e(S){if(S.uniformsList===null){const V=S.currentProgram.getUniforms();S.uniformsList=Cr.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function Te(S,V){const A=yt.get(S);A.outputColorSpace=V.outputColorSpace,A.batching=V.batching,A.batchingColor=V.batchingColor,A.instancing=V.instancing,A.instancingColor=V.instancingColor,A.instancingMorph=V.instancingMorph,A.skinning=V.skinning,A.morphTargets=V.morphTargets,A.morphNormals=V.morphNormals,A.morphColors=V.morphColors,A.morphTargetsCount=V.morphTargetsCount,A.numClippingPlanes=V.numClippingPlanes,A.numIntersection=V.numClipIntersection,A.vertexAlphas=V.vertexAlphas,A.vertexTangents=V.vertexTangents,A.toneMapping=V.toneMapping}function gn(S,V,A,I,b){V.isScene!==!0&&(V=Jt),C.resetTextureUnits();const G=V.fog,$=I.isMeshStandardMaterial?V.environment:null,ut=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:hi,gt=(I.isMeshStandardMaterial?q:M).get(I.envMap||$),Ct=I.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,Ut=!!A.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Pt=!!A.morphAttributes.position,se=!!A.morphAttributes.normal,ve=!!A.morphAttributes.color;let Se=li;I.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Se=y.toneMapping);const tn=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,he=tn!==void 0?tn.length:0,Bt=yt.get(I),Dn=p.state.lights;if(ht===!0&&(nt===!0||S!==x)){const hn=S===x&&I.id===w;ct.setState(I,S,hn)}let ue=!1;I.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Dn.state.version||Bt.outputColorSpace!==ut||b.isBatchedMesh&&Bt.batching===!1||!b.isBatchedMesh&&Bt.batching===!0||b.isBatchedMesh&&Bt.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&Bt.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&Bt.instancing===!1||!b.isInstancedMesh&&Bt.instancing===!0||b.isSkinnedMesh&&Bt.skinning===!1||!b.isSkinnedMesh&&Bt.skinning===!0||b.isInstancedMesh&&Bt.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&Bt.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&Bt.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&Bt.instancingMorph===!1&&b.morphTexture!==null||Bt.envMap!==gt||I.fog===!0&&Bt.fog!==G||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ct.numPlanes||Bt.numIntersection!==ct.numIntersection)||Bt.vertexAlphas!==Ct||Bt.vertexTangents!==Ut||Bt.morphTargets!==Pt||Bt.morphNormals!==se||Bt.morphColors!==ve||Bt.toneMapping!==Se||Bt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Bt.__version=I.version);let _n=Bt.currentProgram;ue===!0&&(_n=be(I,V,b));let Ri=!1,sn=!1,hs=!1;const Ee=_n.getUniforms(),wn=Bt.uniforms;if(Mt.useProgram(_n.program)&&(Ri=!0,sn=!0,hs=!0),I.id!==w&&(w=I.id,sn=!0),Ri||x!==S){Mt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),Uu(st),Nu(st),Ee.setValue(z,"projectionMatrix",st)):Ee.setValue(z,"projectionMatrix",S.projectionMatrix),Ee.setValue(z,"viewMatrix",S.matrixWorldInverse);const Zn=Ee.map.cameraPosition;Zn!==void 0&&Zn.setValue(z,St.setFromMatrixPosition(S.matrixWorld)),Ft.logarithmicDepthBuffer&&Ee.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ee.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,sn=!0,hs=!0)}if(b.isSkinnedMesh){Ee.setOptional(z,b,"bindMatrix"),Ee.setOptional(z,b,"bindMatrixInverse");const hn=b.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ee.setValue(z,"boneTexture",hn.boneTexture,C))}b.isBatchedMesh&&(Ee.setOptional(z,b,"batchingTexture"),Ee.setValue(z,"batchingTexture",b._matricesTexture,C),Ee.setOptional(z,b,"batchingIdTexture"),Ee.setValue(z,"batchingIdTexture",b._indirectTexture,C),Ee.setOptional(z,b,"batchingColorTexture"),b._colorsTexture!==null&&Ee.setValue(z,"batchingColorTexture",b._colorsTexture,C));const us=A.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&Gt.update(b,A,_n),(sn||Bt.receiveShadow!==b.receiveShadow)&&(Bt.receiveShadow=b.receiveShadow,Ee.setValue(z,"receiveShadow",b.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(wn.envMap.value=gt,wn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&V.environment!==null&&(wn.envMapIntensity.value=V.environmentIntensity),sn&&(Ee.setValue(z,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&Ae(wn,hs),G&&I.fog===!0&&mt.refreshFogUniforms(wn,G),mt.refreshMaterialUniforms(wn,I,v,tt,p.state.transmissionRenderTarget[S.id]),Cr.upload(z,_e(Bt),wn,C)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Cr.upload(z,_e(Bt),wn,C),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ee.setValue(z,"center",b.center),Ee.setValue(z,"modelViewMatrix",b.modelViewMatrix),Ee.setValue(z,"normalMatrix",b.normalMatrix),Ee.setValue(z,"modelMatrix",b.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const hn=I.uniformsGroups;for(let Zn=0,Kn=hn.length;Zn<Kn;Zn++){const qo=hn[Zn];H.update(qo,_n),H.bind(qo,_n)}}return _n}function Ae(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function Re(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,V,A){yt.get(S.texture).__webglTexture=V,yt.get(S.depthTexture).__webglTexture=A;const I=yt.get(S);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=A===void 0,I.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,V){const A=yt.get(S);A.__webglFramebuffer=V,A.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,A=0){N=S,D=V,P=A;let I=!0,b=null,G=!1,$=!1;if(S){const gt=yt.get(S);if(gt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(z.FRAMEBUFFER,null),I=!1;else if(gt.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(gt.__hasExternalTextures)C.rebindTextures(S,yt.get(S.texture).__webglTexture,yt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pt=S.depthTexture;if(gt.__boundDepthTexture!==Pt){if(Pt!==null&&yt.has(Pt)&&(S.width!==Pt.image.width||S.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&($=!0);const Ut=yt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[V])?b=Ut[V][A]:b=Ut[V],G=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?b=yt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?b=Ut[A]:b=Ut,R.copy(S.viewport),U.copy(S.scissor),O=S.scissorTest}else R.copy(B).multiplyScalar(v).floor(),U.copy(Q).multiplyScalar(v).floor(),O=_t;if(Mt.bindFramebuffer(z.FRAMEBUFFER,b)&&I&&Mt.drawBuffers(S,b),Mt.viewport(R),Mt.scissor(U),Mt.setScissorTest(O),G){const gt=yt.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,gt.__webglTexture,A)}else if($){const gt=yt.get(S.texture),Ct=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,gt.__webglTexture,A||0,Ct)}w=-1},this.readRenderTargetPixels=function(S,V,A,I,b,G,$){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&$!==void 0&&(ut=ut[$]),ut){Mt.bindFramebuffer(z.FRAMEBUFFER,ut);try{const gt=S.texture,Ct=gt.format,Ut=gt.type;if(!Ft.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-I&&A>=0&&A<=S.height-b&&z.readPixels(V,A,I,b,qt.convert(Ct),qt.convert(Ut),G)}finally{const gt=N!==null?yt.get(N).__webglFramebuffer:null;Mt.bindFramebuffer(z.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(S,V,A,I,b,G,$){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&$!==void 0&&(ut=ut[$]),ut){const gt=S.texture,Ct=gt.format,Ut=gt.type;if(!Ft.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=S.width-I&&A>=0&&A<=S.height-b){Mt.bindFramebuffer(z.FRAMEBUFFER,ut);const Pt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.bufferData(z.PIXEL_PACK_BUFFER,G.byteLength,z.STREAM_READ),z.readPixels(V,A,I,b,qt.convert(Ct),qt.convert(Ut),0);const se=N!==null?yt.get(N).__webglFramebuffer:null;Mt.bindFramebuffer(z.FRAMEBUFFER,se);const ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Lu(z,ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,G),z.deleteBuffer(Pt),z.deleteSync(ve),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,V=null,A=0){S.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1]);const I=Math.pow(2,-A),b=Math.floor(S.image.width*I),G=Math.floor(S.image.height*I),$=V!==null?V.x:0,ut=V!==null?V.y:0;C.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,A,0,0,$,ut,b,G),Mt.unbindTexture()},this.copyTextureToTexture=function(S,V,A=null,I=null,b=0){S.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1],V=arguments[2],b=arguments[3]||0,A=null);let G,$,ut,gt,Ct,Ut,Pt,se,ve;const Se=S.isCompressedTexture?S.mipmaps[b]:S.image;A!==null?(G=A.max.x-A.min.x,$=A.max.y-A.min.y,ut=A.isBox3?A.max.z-A.min.z:1,gt=A.min.x,Ct=A.min.y,Ut=A.isBox3?A.min.z:0):(G=Se.width,$=Se.height,ut=Se.depth||1,gt=0,Ct=0,Ut=0),I!==null?(Pt=I.x,se=I.y,ve=I.z):(Pt=0,se=0,ve=0);const tn=qt.convert(V.format),he=qt.convert(V.type);let Bt;V.isData3DTexture?(C.setTexture3D(V,0),Bt=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),Bt=z.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),Bt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const Dn=z.getParameter(z.UNPACK_ROW_LENGTH),ue=z.getParameter(z.UNPACK_IMAGE_HEIGHT),_n=z.getParameter(z.UNPACK_SKIP_PIXELS),Ri=z.getParameter(z.UNPACK_SKIP_ROWS),sn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Se.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,gt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ct),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ut);const hs=S.isDataArrayTexture||S.isData3DTexture,Ee=V.isDataArrayTexture||V.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const wn=yt.get(S),us=yt.get(V),hn=yt.get(wn.__renderTarget),Zn=yt.get(us.__renderTarget);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,hn.__webglFramebuffer),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Kn=0;Kn<ut;Kn++)hs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yt.get(S).__webglTexture,b,Ut+Kn),S.isDepthTexture?(Ee&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yt.get(V).__webglTexture,b,ve+Kn),z.blitFramebuffer(gt,Ct,G,$,Pt,se,G,$,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ee?z.copyTexSubImage3D(Bt,b,Pt,se,ve+Kn,gt,Ct,G,$):z.copyTexSubImage2D(Bt,b,Pt,se,ve+Kn,gt,Ct,G,$);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ee?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Bt,b,Pt,se,ve,G,$,ut,tn,he,Se.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Bt,b,Pt,se,ve,G,$,ut,tn,Se.data):z.texSubImage3D(Bt,b,Pt,se,ve,G,$,ut,tn,he,Se):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,b,Pt,se,G,$,tn,he,Se.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,b,Pt,se,Se.width,Se.height,tn,Se.data):z.texSubImage2D(z.TEXTURE_2D,b,Pt,se,G,$,tn,he,Se);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ue),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_n),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ri),z.pixelStorei(z.UNPACK_SKIP_IMAGES,sn),b===0&&V.generateMipmaps&&z.generateMipmap(Bt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(S,V,A=null,I=null,b=0){return S.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),A=arguments[0]||null,I=arguments[1]||null,S=arguments[2],V=arguments[3],b=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,V,A,I,b)},this.initRenderTarget=function(S){yt.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Mt.unbindTexture()},this.resetState=function(){D=0,P=0,N=null,Mt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class ko{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new ko(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vr extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_o,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new W;class Lr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oh extends Yn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gi;const gs=new W,Wi=new W,Xi=new W,qi=new Et,_s=new Et,lh=new me,or=new W,vs=new W,lr=new W,Wl=new Et,Ma=new Et,Xl=new Et;class qm extends De{constructor(t=new oh){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xm(e,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Lr(n,3,0,!1)),Gi.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Gi,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;cr(or.set(-.5,-.5,0),Xi,a,Wi,s,r),cr(vs.set(.5,-.5,0),Xi,a,Wi,s,r),cr(lr.set(.5,.5,0),Xi,a,Wi,s,r),Wl.set(0,0),Ma.set(1,0),Xl.set(1,1);let o=t.ray.intersectTriangle(or,vs,lr,!1,gs);if(o===null&&(cr(vs.set(-.5,.5,0),Xi,a,Wi,s,r),Ma.set(0,1),o=t.ray.intersectTriangle(or,lr,vs,!1,gs),o===null))return;const c=t.ray.origin.distanceTo(gs);c<t.near||c>t.far||e.push({distance:c,point:gs.clone(),uv:fn.getInterpolation(gs,or,vs,lr,Wl,Ma,Xl,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function cr(i,t,e,n,s,r){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_s.x=r*qi.x-s*qi.y,_s.y=s*qi.x+r*qi.y):_s.copy(qi),i.copy(t),i.x+=_s.x,i.y+=_s.y,i.applyMatrix4(lh)}class Ym extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Qe,h=Qe,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ch extends Yn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new W,Nr=new W,ql=new me,xs=new No,hr=new Bs,ya=new W,Yl=new W;class Zm extends De{constructor(t=new Ce,e=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;ql.copy(s).invert(),xs.copy(t.ray).applyMatrix4(ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),E=h.getX(_+1),T=ur(this,t,xs,c,p,E);T&&e.push(T)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=ur(this,t,xs,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=ur(this,t,xs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ur(this,t,xs,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ur(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Nr.fromBufferAttribute(a,r),e.distanceSqToSegment(Ur,Nr,ya,Yl)>n)return;ya.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ya);if(!(c<t.near||c>t.far))return{distance:c,point:Yl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Zl=new W,Kl=new W;class Km extends Zm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zl.fromBufferAttribute(e,s),Kl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zl.distanceTo(Kl);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hh extends Yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jl=new me,Mo=new No,fr=new Bs,dr=new W;class jm extends De{constructor(t=new Ce,e=new hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;jl.copy(s).invert(),Mo.copy(t.ray).applyMatrix4(jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);dr.fromBufferAttribute(u,g),$l(dr,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)dr.fromBufferAttribute(u,m),$l(dr,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $l(i,t,e,n,s,r,a){const o=Mo.distanceSqToPoint(i);if(o<e){const c=new W;Mo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ui extends Ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn extends Ce{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new W,d=new Et,f=new W,m=new W,_=new W;let g=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let E=0;E<=e;E++){const T=n+E*h*s,y=Math.sin(T),k=Math.cos(T);for(let D=0;D<=t.length-1;D++){u.x=t[D].x*y,u.y=t[D].y,u.z=t[D].x*k,a.push(u.x,u.y,u.z),d.x=E/e,d.y=D/(t.length-1),o.push(d.x,d.y);const P=c[3*D+0]*y,N=c[3*D+1],w=c[3*D+0]*k;l.push(P,N,w)}}for(let E=0;E<e;E++)for(let T=0;T<t.length-1;T++){const y=T+E*t.length,k=y,D=y+t.length,P=y+t.length+1,N=y+1;r.push(k,D,N),r.push(P,N,D)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.points,t.segments,t.phiStart,t.phiLength)}}class ai extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new W,h=new Et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;E(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function E(){const y=new W,k=new W;let D=0;const P=(e-t)/n;for(let N=0;N<=r;N++){const w=[],x=N/r,R=x*(e-t)+t;for(let U=0;U<=s;U++){const O=U/s,X=O*c+o,Y=Math.sin(X),Z=Math.cos(X);k.x=R*Y,k.y=-x*n+g,k.z=R*Z,u.push(k.x,k.y,k.z),y.set(Y,P,Z).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-x),w.push(m++)}_.push(w)}for(let N=0;N<s;N++)for(let w=0;w<r;w++){const x=_[w][N],R=_[w+1][N],U=_[w+1][N+1],O=_[w][N+1];(t>0||w!==0)&&(h.push(x,R,O),D+=3),(e>0||w!==r-1)&&(h.push(R,U,O),D+=3)}l.addGroup(p,D,0),p+=D}function T(y){const k=m,D=new Et,P=new W;let N=0;const w=y===!0?t:e,x=y===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;const R=m;for(let U=0;U<=s;U++){const X=U/s*c+o,Y=Math.cos(X),Z=Math.sin(X);P.x=w*Z,P.y=g*x,P.z=w*Y,u.push(P.x,P.y,P.z),d.push(0,x,0),D.x=Y*.5+.5,D.y=Z*.5*x+.5,f.push(D.x,D.y),m++}for(let U=0;U<s;U++){const O=k+U,X=R+U;y===!0?h.push(X,X+1,O):h.push(X+1,X,O),N+=3}l.addGroup(p,N,y===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ge extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new W,d=new W,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const E=[],T=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let k=0;k<=e;k++){const D=k/e;u.x=-t*Math.cos(s+D*r)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(s+D*r)*Math.sin(a+T*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(D+y,1-T),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const T=h[p][E+1],y=h[p][E],k=h[p+1][E],D=h[p+1][E+1];(p!==0||a>0)&&f.push(T,y,D),(p!==n-1||c<Math.PI)&&f.push(y,k,D)}this.setIndex(f),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ye extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new W,u=new W,d=new W;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,E=(s+1)*f+m;a.push(_,g,E),a.push(g,p,E)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Be extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sa extends Be{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $m extends Yn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ho extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jm extends Ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ea=new me,Jl=new W,Ql=new W;class uh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tc=new me,Ms=new W,wa=new W;class Qm extends uh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ms),wa.copy(n.position),wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wa),n.updateMatrixWorld(),s.makeTranslation(-Ms.x,-Ms.y,-Ms.z),tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc)}}class Ns extends Ho{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class tg extends uh{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends Ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new tg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);class eg extends Vr{constructor(){super();const t=new Nt;t.deleteAttribute("uv");const e=new Be({side:We}),n=new Be,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ot(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new ot(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new ot(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new ot(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ot(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new ot(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new ot(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new ot(t,Yi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new ot(t,Yi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new ot(t,Yi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new ot(t,Yi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new ot(t,Yi(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new ot(t,Yi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Yi(i){const t=new oe;return t.color.setScalar(i),t}class ng{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ig=new Oo(-1,1,1,-1,0,1);class sg extends Ce{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}}const rg=new sg;class ag{constructor(t){this._mesh=new ot(rg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ig)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class og{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,m=t-d,_=e-f;let g,p;m>_?(g=1,p=0):(g=0,p=1);const E=m-g+h,T=_-p+h,y=m-1+2*h,k=_-1+2*h,D=c&255,P=l&255,N=this.perm[D+this.perm[P]]%12,w=this.perm[D+g+this.perm[P+p]]%12,x=this.perm[D+1+this.perm[P+1]]%12;let R=.5-m*m-_*_;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[N],m,_));let U=.5-E*E-T*T;U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[w],E,T));let O=.5-y*y-k*k;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[x],y,k)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),u=Math.floor(e+l),d=Math.floor(n+l),f=1/6,m=(h+u+d)*f,_=h-m,g=u-m,p=d-m,E=t-_,T=e-g,y=n-p;let k,D,P,N,w,x;E>=T?T>=y?(k=1,D=0,P=0,N=1,w=1,x=0):E>=y?(k=1,D=0,P=0,N=1,w=0,x=1):(k=0,D=0,P=1,N=1,w=0,x=1):T<y?(k=0,D=0,P=1,N=0,w=1,x=1):E<y?(k=0,D=1,P=0,N=0,w=1,x=1):(k=0,D=1,P=0,N=1,w=1,x=0);const R=E-k+f,U=T-D+f,O=y-P+f,X=E-N+2*f,Y=T-w+2*f,Z=y-x+2*f,tt=E-1+3*f,v=T-1+3*f,L=y-1+3*f,F=h&255,B=u&255,Q=d&255,_t=this.perm[F+this.perm[B+this.perm[Q]]]%12,K=this.perm[F+k+this.perm[B+D+this.perm[Q+P]]]%12,ht=this.perm[F+N+this.perm[B+w+this.perm[Q+x]]]%12,nt=this.perm[F+1+this.perm[B+1+this.perm[Q+1]]]%12;let st=.6-E*E-T*T-y*y;st<0?s=0:(st*=st,s=st*st*this.dot3(this.grad3[_t],E,T,y));let pt=.6-R*R-U*U-O*O;pt<0?r=0:(pt*=pt,r=pt*pt*this.dot3(this.grad3[K],R,U,O));let St=.6-X*X-Y*Y-Z*Z;St<0?a=0:(St*=St,a=St*St*this.dot3(this.grad3[ht],X,Y,Z));let et=.6-tt*tt-v*v-L*L;return et<0?o=0:(et*=et,o=et*et*this.dot3(this.grad3[nt],tt,v,L)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,m;const _=(t+e+n+s)*c,g=Math.floor(t+_),p=Math.floor(e+_),E=Math.floor(n+_),T=Math.floor(s+_),y=(g+p+E+T)*l,k=g-y,D=p-y,P=E-y,N=T-y,w=t-k,x=e-D,R=n-P,U=s-N,O=w>x?32:0,X=w>R?16:0,Y=x>R?8:0,Z=w>U?4:0,tt=x>U?2:0,v=R>U?1:0,L=O+X+Y+Z+tt+v,F=a[L][0]>=3?1:0,B=a[L][1]>=3?1:0,Q=a[L][2]>=3?1:0,_t=a[L][3]>=3?1:0,K=a[L][0]>=2?1:0,ht=a[L][1]>=2?1:0,nt=a[L][2]>=2?1:0,st=a[L][3]>=2?1:0,pt=a[L][0]>=1?1:0,St=a[L][1]>=1?1:0,et=a[L][2]>=1?1:0,Jt=a[L][3]>=1?1:0,Dt=w-F+l,Xt=x-B+l,z=R-Q+l,Qt=U-_t+l,kt=w-K+2*l,Ft=x-ht+2*l,Mt=R-nt+2*l,Yt=U-st+2*l,yt=w-pt+3*l,C=x-St+3*l,M=R-et+3*l,q=U-Jt+3*l,it=w-1+4*l,at=x-1+4*l,J=R-1+4*l,Lt=U-1+4*l,mt=g&255,vt=p&255,Ot=E&255,ct=T&255,wt=o[mt+o[vt+o[Ot+o[ct]]]]%32,zt=o[mt+F+o[vt+B+o[Ot+Q+o[ct+_t]]]]%32,Gt=o[mt+K+o[vt+ht+o[Ot+nt+o[ct+st]]]]%32,At=o[mt+pt+o[vt+St+o[Ot+et+o[ct+Jt]]]]%32,te=o[mt+1+o[vt+1+o[Ot+1+o[ct+1]]]]%32;let qt=.6-w*w-x*x-R*R-U*U;qt<0?h=0:(qt*=qt,h=qt*qt*this.dot4(r[wt],w,x,R,U));let jt=.6-Dt*Dt-Xt*Xt-z*z-Qt*Qt;jt<0?u=0:(jt*=jt,u=jt*jt*this.dot4(r[zt],Dt,Xt,z,Qt));let H=.6-kt*kt-Ft*Ft-Mt*Mt-Yt*Yt;H<0?d=0:(H*=H,d=H*H*this.dot4(r[Gt],kt,Ft,Mt,Yt));let xt=.6-yt*yt-C*C-M*M-q*q;xt<0?f=0:(xt*=xt,f=xt*xt*this.dot4(r[At],yt,C,M,q));let j=.6-it*it-at*at-J*J-Lt*Lt;return j<0?m=0:(j*=j,m=j*j*this.dot4(r[te],it,at,J,Lt)),27*(h+u+d+f+m)}}const pr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Et},cameraProjectionMatrix:{value:new me},cameraInverseProjectionMatrix:{value:new me},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},gr={uniforms:{tDiffuse:{value:null},resolution:{value:new Et}},vertexShader:`varying vec2 vUv;

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

		}`},ba={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ri extends ng{constructor(t,e,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new Bo;a.format=Ai,a.type=Ti,this.normalRenderTarget=new Xn(this.width,this.height,{minFilter:Qe,magFilter:Qe,type:bi,depthTexture:a}),this.ssaoRenderTarget=new Xn(this.width,this.height,{type:bi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new dn({defines:Object.assign({},pr.defines),uniforms:bs.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:en}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new $m,this.normalMaterial.blending=en,this.blurMaterial=new dn({defines:Object.assign({},gr.defines),uniforms:bs.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new dn({defines:Object.assign({},mr.defines),uniforms:bs.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:en}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new dn({uniforms:bs.clone(ba.uniforms),vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ic,blendDst:Da,blendEquation:zn,blendSrcAlpha:Dc,blendDstAlpha:Da,blendEquationAlpha:zn}),this.fsQuad=new ag(null),this.originalClearColor=new Kt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case ri.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Pc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new W;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=Du.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const n=new og,s=16,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,c=Math.random()*2-1,l=0;r[a]=n.noise3d(o,c,l)}this.noiseTexture=new Ym(r,4,4,Co,An),this.noiseTexture.wrapS=Rn,this.noiseTexture.wrapT=Rn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}}ri.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const lg={minX:-15.55,maxX:15.55,minZ:-28.15,maxZ:13.55},cg={x:0,y:1.58,z:10.55,yaw:0},hg={x:0,y:1.58,z:-16.35,yaw:0},Ds=-24.2,ug=Ds-.35,Is={x:0,y:0,z:-26.55},fh=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35}],fg=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],dg=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],yo=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1},{id:"pad-fountain",kind:"battery",pad:!0,x:3.72,z:.45,cloaked:!1},{id:"pad-food",kind:"battery",pad:!0,x:-10.2,z:7.5,cloaked:!1},{id:"pad-door",kind:"battery",pad:!0,x:0,z:-10.05,cloaked:!1},{id:"pad-aisle",kind:"battery",pad:!0,x:0,z:-17.15,cloaked:!1},{id:"pad-pew",kind:"battery",pad:!0,x:5.4,z:-22.7,cloaked:!1},{id:"pad-altar",kind:"battery",pad:!0,x:-4.2,z:-23.05,cloaked:!1}],Ta={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},pg={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":Ta,"choir-r":Ta,"choir-ghost":Ta};function $t(i,t,e,n,s,r,a,o,c={}){return{id:i,mat:t,x:e,y:n,z:s,w:r,h:a,d:o,...c}}const Oe=7.2,dh=[$t("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),$t("ceiling","ceiling",0,7.35,0,34,.3,30),$t("wall-n-l","wall",-9.23,Oe/2,-14.3,14.74,Oe,.6),$t("wall-n-r","wall",9.23,Oe/2,-14.3,14.74,Oe,.6),$t("chapel-door","trim",0,Oe/2,-14.3,3.76,Oe,.66,{door:!0}),$t("wall-s","wall",0,Oe/2,14.3,33.2,Oe,.6),$t("wall-w","wall",-16.3,Oe/2,0,.6,Oe,29.2),$t("wall-e","wall",16.3,Oe/2,0,.6,Oe,29.2),$t("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),$t("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),$t("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),$t("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),$t("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),$t("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),$t("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),$t("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),$t("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),$t("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),$t("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),$t("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),$t("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),$t("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),$t("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),$t("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),$t("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),$t("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),$t("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),$t("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),$t("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),$t("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),$t("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),$t("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),$t("chapel-w","wall",-8.35,Oe/2,-21.75,.5,Oe,14.9),$t("chapel-e","wall",8.35,Oe/2,-21.75,.5,Oe,14.9),$t("chapel-n","wall",0,Oe/2,-29.05,17.2,Oe,.5),$t("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),$t("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),$t("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),$t("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),$t("altar-l","trim",-4.85,1.8,Ds,6.5,3.6,.48),$t("altar-r","trim",4.85,1.8,Ds,6.5,3.6,.48),$t("rite-veil","trim",0,1.8,Ds,3.36,3.6,.42,{phaseGate:!0,veil:!0}),$t("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function mg(i){return{id:i.id,minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2,phaseGate:!!i.phaseGate,floor:!!i.floor}}function ph({doorOpen:i=!1,veilUp:t=!1}={}){return dh.filter(e=>!(e.door&&i||e.veil&&!t)).map(mg)}function mh(i,t,e){return{id:i.id,x:i.x,y:0,z:i.z,yaw:0,hp:i.hp,maxHp:i.hp,alive:!0,cloaked:!!i.cloak,reveal:0,visible:!i.cloak,exposed:!1,hittable:!i.cloak,hits:0,lastHitAt:null,aggro:e==="court"&&!i.cloak,cooldown:e==="chapel"?1.35+t%3*.25:.95+t%4*.28,windup:0,strafeSign:t%2===0?1:-1,strafeT:.8+t%3*.25,hurt:0,stun:0,room:e,dormant:e!=="court"}}function gh(){return fg.map((i,t)=>mh(i,t,"court"))}function Fr(){return dg.map((i,t)=>mh(i,t,"chapel"))}function nc(){return yo.map(i=>({...i,taken:!1,respawnAt:null}))}const oi=["LIVE","STATIC","DEAD_AIR"],Wt={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6},clickerMag:20,scatterMag:8,phaserMag:6,phaserDamage:26,phaserRange:8,phaserFalloff:.4,phaserCooldown:.48,dropLive:5,dropStatic:2,dropDead:2,paRefund:2,paRefundFocus:2,padRespawn:16,padFocus:6,padSide:2};function cn(i,t,e){return Math.max(t,Math.min(e,i))}function Gr(){return{LIVE:Wt.clickerMag,STATIC:Wt.scatterMag,DEAD_AIR:Wt.phaserMag}}function Wr(){return Gr()}function ic(){return{channel:"LIVE",signal:Wt.signalMax,health:Wt.healthMax,fireCooldown:0,hurtTimer:0,batteries:Wr()}}function gg(i){return i==="Digit1"||i==="Numpad1"?"LIVE":i==="Digit2"||i==="Numpad2"?"STATIC":i==="Digit3"||i==="Numpad3"?"DEAD_AIR":null}function _g(i,t){const e=Math.max(0,oi.indexOf(i)),n=t>=0?1:-1;return oi[(e+n+oi.length)%oi.length]}function vg(i,t){return t==="LIVE"?!0:i.signal>=Wt.minDrainSignal}function xg(i,t){return oi.includes(t)?i.channel===t?{state:i,result:"same"}:vg(i,t)?{state:{...i,channel:t},result:"ok"}:{state:i,result:"denied"}:{state:i,result:"invalid"}}function Mg(i,t){let{channel:e,signal:n,fireCooldown:s,hurtTimer:r}=i,a=!1;if(s=Math.max(0,s-t),r=Math.max(0,r-t),e==="LIVE")n=Math.min(Wt.signalMax,n+Wt.liveRegen*t);else{const o=e==="STATIC"?Wt.staticDrain:Wt.deadDrain;n-=o*t,n<=0&&(n=0,e="LIVE",a=!0)}return{state:{...i,channel:e,signal:n,fireCooldown:s,hurtTimer:r},forced:a}}function _h(i){var t;return(t=Wt.speed[i])!=null?t:Wt.speed.LIVE}function yg(i,t){var n;const e=(n=Gr()[t])!=null?n:0;return!i.batteries||i.batteries[t]==null?e:i.batteries[t]}function Or(i){return i==="LIVE"?{kind:"hitscan",name:"CLICKER",pellets:1,spread:0,damage:Wt.liveDamage,range:Wt.liveRange,falloff:Wt.liveFalloff,cooldown:Wt.liveCooldown,cost:1,phases:!1}:i==="STATIC"?{kind:"spread",name:"SCATTER",pellets:Wt.staticPellets,spread:Wt.staticSpread,damage:Wt.staticPellet,range:Wt.staticRange,falloff:Wt.staticFalloff,cooldown:Wt.staticCooldown,cost:1,phases:!1}:i==="DEAD_AIR"?{kind:"phase",name:"PHASER",pellets:1,spread:0,damage:Wt.phaserDamage,range:Wt.phaserRange,falloff:Wt.phaserFalloff,cooldown:Wt.phaserCooldown,cost:1,phases:!0}:{kind:"none",name:"",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0,cost:0,phases:!1}}function sc(i){const t=Or(i.channel);if(i.health<=0)return{state:i,profile:t,fired:!1,reason:"dead"};if(t.kind==="none")return{state:i,profile:t,fired:!1,reason:"none"};if(i.fireCooldown>0)return{state:i,profile:t,fired:!1,reason:"wait"};const e=yg(i,i.channel);if(e<t.cost)return{state:i,profile:t,fired:!1,reason:"dry"};const n={...i.batteries||Wr(),[i.channel]:e-t.cost};return{state:{...i,batteries:n,fireCooldown:t.cooldown},profile:t,fired:!0,reason:"ok"}}function vh(i,t={}){const e=Gr(),n={...i.batteries||Wr()};let s=0;for(const r of oi){const a=t[r]||0;if(a<=0)continue;const o=cn(n[r]+a,0,e[r]);s+=o-n[r],n[r]=o}return{state:{...i,batteries:n},gained:s}}function rc(i){return{...i,batteries:Wr()}}function Sg(i){const t={LIVE:Wt.paRefund,STATIC:Wt.paRefund,DEAD_AIR:Wt.paRefund};return oi.includes(i.channel)&&(t[i.channel]+=Wt.paRefundFocus),vh(i,t)}function Eg(i){return{id:"drop-"+i.id,kind:"battery",x:i.x,z:i.z,amounts:{LIVE:Wt.dropLive,STATIC:Wt.dropStatic,DEAD_AIR:Wt.dropDead},cloaked:!1,taken:!1}}function xh(i){const t={LIVE:Wt.padSide,STATIC:Wt.padSide,DEAD_AIR:Wt.padSide};return oi.includes(i)&&(t[i]=Wt.padFocus),t}function wg(i,t){return i!=null&&i.pad?{...i,taken:!0,respawnAt:(t||0)+Wt.padRespawn}:{...i,taken:!0}}function bg(i,t){let e=!1;const n=i.map(s=>!s.pad||!s.taken||s.respawnAt==null||t<s.respawnAt?s:(e=!0,{...s,taken:!1,respawnAt:null}));return e?n:i}function Tg(i,t){var e;if(!i)return"";if(i.kind==="signal")return"SIGNAL CACHE";if(i.kind==="health")return"AID KIT";if(i.kind==="battery"&&i.pad){const n=(e=xh(t)[t])!=null?e:Wt.padFocus;return`${Or(t).name} +${n}`}return i.kind==="battery"?"BATTERY":""}function ac(i,t,e,n){if(!(t>=0)||t>e||e<=0)return 0;const s=t/e;return i*(1-n*s*s)}function Vo(i,t){return{...i,signal:cn(i.signal+t,0,Wt.signalMax)}}function Ag(i,t){return{...i,health:cn(i.health+t,0,Wt.healthMax)}}function Rg(i,{distance:t,channel:e,burst:n}){const s=e==="STATIC"||t<=Wt.aggressiveRange||!!n,r=s?Wt.aggressiveKillSignal:Wt.cleanKillSignal;return{state:Vo(i,r),amount:r,aggressive:s}}function oc(i,t){if(i.hurtTimer>0||i.health<=0)return{state:i,hit:!1,dead:i.health<=0};const e=Math.max(0,i.health-t);return{state:{...i,health:e,hurtTimer:Wt.hurtIframes},hit:!0,dead:e<=0}}function Cg(i,t){return!(!i||i.floor||i.maxY!=null&&i.maxY<.3||i.minY!=null&&i.minY>1.65||i.phaseGate&&t==="DEAD_AIR")}function So(i,t,e,n,s){for(const r of n){if(!Cg(r,s))continue;const a=cn(i,r.minX,r.maxX),o=cn(t,r.minZ,r.maxZ),c=i-a,l=t-o;if(c*c+l*l<e*e)return r}return null}function Pg(i,t,e,n,s,r,a){let o=i+e;So(o,t,s,r,a)&&(o=i);const c=t+n;return So(o,c,s,r,a)?{x:o,z:t}:{x:o,z:c}}function Dg(i,t,e,n,s){let r=i,a=t;for(let o=0;o<4;o++){const c=So(r,a,e,n,s);if(!c)break;const l=cn(r,c.minX,c.maxX),h=cn(a,c.minZ,c.maxZ);let u=r-l,d=a-h;const f=Math.hypot(u,d);if(f<1e-5){const m=r-c.minX,_=c.maxX-r,g=a-c.minZ,p=c.maxZ-a,E=Math.min(m,_,g,p);E===m?r=c.minX-e-.01:E===_?r=c.maxX+e+.01:E===g?a=c.minZ-e-.01:a=c.maxZ+e+.01}else{const m=e-f+.01;r+=u/f*m,a+=d/f*m}}return{x:r,z:a}}function Mh(i,t,e,n,s,r,a,o){const c=Math.hypot(e,n),l=Math.max(1,Math.ceil(c/.25));let h=i,u=t;for(let f=0;f<l;f++){const m=Pg(h,u,e/l,n/l,s,r,a);h=m.x,u=m.z}const d=Dg(h,u,s,r,a);return o?{x:cn(d.x,o.minX,o.maxX),z:cn(d.z,o.minZ,o.maxZ)}:d}function yh(i,t,e,n,s,r,a,o,c,l){const h=a-i,u=o-t,d=c-e,f=h*n+u*s+d*r,m=h*h+u*u+d*d-f*f,_=l*l;if(m>_)return null;const g=Math.sqrt(Math.max(0,_-m)),p=f-g,E=f+g;return p>=0?p:E>=0?E:null}function Ig(i,t,e,n,s,r,a,o){let c=0,l=o;const h=[[i,n,a.minX,a.maxX],[t,s,a.minY,a.maxY],[e,r,a.minZ,a.maxZ]];for(const[d,f,m,_]of h){if(Math.abs(f)<1e-8){if(d<m||d>_)return null;continue}let g=(m-d)/f,p=(_-d)/f;if(g>p){const E=g;g=p,p=E}if(g>c&&(c=g),p<l&&(l=p),l<c)return null}const u=c>=0?c:l;return u<0||u>o?null:u}function Go(i,t,e,n,s,r,a,o){let c=null,l=a;for(const h of o){if(h.noShoot)continue;const u=Ig(i,t,e,n,s,r,h,l);u!=null&&u<l&&(l=u,c={t:u,collider:h,x:i+n*u,y:t+s*u,z:e+r*u})}return c}function lc(i,t){if(!i.alive)return{...i,visible:!0,exposed:!1,hittable:!1};if(!i.cloaked)return{...i,visible:!0,exposed:t==="STATIC",hittable:!0};const e=t==="STATIC"||i.reveal>0;return{...i,visible:e,exposed:e,hittable:e}}function cc(i,t,e){if(!i.cloaked||!i.alive)return lc(i,e);let n=i.reveal||0;return e==="STATIC"?n=Wt.revealDuration:n=Math.max(0,n-t),lc({...i,reveal:n},e)}function Lg(i,t,e,n,s,r={}){const a=r.phase?s.filter(h=>!h.phaseGate):s;let o=e,c=null;for(const h of n){if(!h.alive||!h.hittable)continue;const u=[{y:(h.y||0)+1.62,r:.26,weak:!0},{y:(h.y||0)+.98,r:.46,weak:!1}];for(const d of u){const f=yh(i.x,i.y,i.z,t.x,t.y,t.z,h.x,d.y,h.z,d.r);f!=null&&f>.02&&f<o&&(o=f,c={kind:"enemy",id:h.id,t:f,weak:d.weak,x:i.x+t.x*f,y:i.y+t.y*f,z:i.z+t.z*f})}}const l=Go(i.x,i.y,i.z,t.x,t.y,t.z,o,a);return l&&l.t<o?{kind:"world",t:l.t,x:l.x,y:l.y,z:l.z,id:l.collider.id}:c}function Ug(i,t){const e=i.lastHitAt!=null&&t-i.lastHitAt<=Wt.burstWindow;return{enemy:{...i,lastHitAt:t},burst:e}}function Ng(i,{weak:t,damage:e}){if(!i.alive||!i.hittable||e<=0)return{enemy:i,dealt:0,killed:!1};let n=e;t&&i.exposed&&(n*=Wt.weakMult);const s=i.hp-n,r=s<=0;return{enemy:{...i,hp:r?0:s,hits:(i.hits||0)+1,alive:!r,hittable:!r&&i.hittable},dealt:n,killed:r}}function Fg(i,t,e,n,s,r){const a=[],o=Math.max(0,n|0);for(let c=0;c<o;c++){const l=o===1&&s===0?0:(r()*2-1)*s,h=o===1&&s===0?0:(r()*2-1)*s,u=i.x+t.x*l+e.x*h,d=i.y+t.y*l+e.y*h,f=i.z+t.z*l+e.z*h,m=Math.hypot(u,d,f)||1;a.push({x:u/m,y:d/m,z:f/m})}return a}function Sh(i,t,e,n,s,r,a){const o=n-i,c=s-t,l=r-e,h=Math.hypot(o,c,l);return h<.001?!0:Go(i,t,e,o/h,c/h,l/h,Math.max(0,h-.25),a)==null}function Og(i,t){if(!t||t.taken)return{state:i,pickup:t,took:!1};if(t.kind==="signal")return{state:Vo(i,t.amount),pickup:{...t,taken:!0},took:!0};if(t.kind==="health")return i.health>=Wt.healthMax?{state:i,pickup:t,took:!1}:{state:Ag(i,t.amount),pickup:{...t,taken:!0},took:!0};if(t.kind==="battery"){const e=t.pad?xh(i.channel):t.amounts||{},n=vh(i,e);return n.gained<=0?{state:i,pickup:t,took:!1}:{state:n.state,pickup:{...t,taken:!0},took:!0}}return{state:i,pickup:t,took:!1}}function zg(i,t){return!i||i.taken?!1:i.cloaked?t==="STATIC":!0}function Bg(i,t){const e=Math.hypot(i,t);return e<1e-6?{x:0,z:0}:{x:i/e,z:t/e}}function kg(i,t,e){var P;if(!i.alive)return{enemy:i,shot:null};if(i.dormant)return{enemy:{...i,hurt:Math.max(0,(i.hurt||0)-t)},shot:null};let n=cc(i,t,e.channel);if(!n.alive)return{enemy:n,shot:null};const s=e.player.x-n.x,r=e.player.z-n.z,a=Math.hypot(s,r);if((a<18||e.player.forceAggro)&&(n.aggro=!0),n.cloaked&&a<3.05&&(n.reveal=Math.max(n.reveal||0,1.25)),n=cc(n,0,e.channel),(n.stun||0)>0)return n.stun-=t,n.windup=0,n.hurt=Math.max(0,(n.hurt||0)-t),a>.001&&n.aggro&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:null};const o=n.cloaked&&!n.visible;if(!n.aggro||o)return n.hurt=Math.max(0,(n.hurt||0)-t),{enemy:n,shot:null};const l=a<17&&Sh(n.x,1.45,n.z,e.player.x,(P=e.player.y)!=null?P:1.2,e.player.z,e.colliders);n.hurt=Math.max(0,(n.hurt||0)-t),n.cooldown=(n.cooldown||0)-t;let h=null;if(n.windup>0?(n.windup-=t,n.windup<=0&&(n.windup=0,l&&(h=Hg(n,e,a)))):l&&n.cooldown<=0&&(n.windup=.28,n.cooldown=1.28+e.rng()*.45),n.windup>0)return a>.001&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:h};const u=a>.001?{x:s/a,z:r/a}:{x:0,z:1},d={x:-u.z,z:u.x};n.strafeT=(n.strafeT||0)-t,n.strafeT<=0&&(n.strafeSign=(n.strafeSign||1)*-1,n.strafeT=.75+e.rng()*1.05);let f=d.x*n.strafeSign*.9,m=d.z*n.strafeSign*.9;if(a>10.2?(f+=u.x,m+=u.z):a<5.2&&(f-=u.x*.85,m-=u.z*.85),e.allies)for(const N of e.allies){if(!N.alive||N.id===n.id)continue;const w=n.x-N.x,x=n.z-N.z,R=Math.hypot(w,x);R<1.15&&R>.001&&(f+=w/R*1.4,m+=x/R*1.4)}const _=Bg(f,m),g=_h("STATIC")*.62*(n.hurt>0?.25:1);let p=_.x*g*t,E=_.z*g*t;const T=Mh(n.x,n.z,p,E,.42,e.colliders,"LIVE",null);let y=T.x,k=T.z;const D=pg[n.id];return D&&(y<D.minX||y>D.maxX||k<D.minZ||k>D.maxZ)&&(y=n.x,k=n.z),n.x=y,n.z=k,a>.001&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:h}}function Hg(i,t,e){var u;const n=i.x,s=1.32,r=i.z,a=t.player.x-n+(t.rng()-.5)*.35,o=((u=t.player.y)!=null?u:1.15)-s+(t.rng()-.5)*.12,c=t.player.z-r+(t.rng()-.5)*.35,l=Math.hypot(a,o,c)||1,h=14.5;return{x:n,y:s,z:r,vx:a/l*h,vy:o/l*h,vz:c/l*h,damage:Wt.boltDamage,life:2.1,dist:e}}function Eh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ce;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=hc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const m=hc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function hc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new ke(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Zi(i,t,e,n,s){const r=-s/2,a=s/2,o=[[-i/2,r,t/2],[i/2,r,t/2],[i/2,r,-t/2],[-i/2,r,-t/2],[-e/2,a,n/2],[e/2,a,n/2],[e/2,a,-n/2],[-e/2,a,-n/2]],c=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],l=[],h=[];for(const d of c){const[f,m,_,g]=d.map(p=>o[p]);l.push(...f,...m,..._,...f,..._,...g),h.push(0,0,1,0,1,1,0,0,1,1,0,1)}const u=new Ce;return u.setAttribute("position",new ce(l,3)),u.setAttribute("uv",new ce(h,2)),u.computeVertexNormals(),u}function Aa(i,t=24){const e=i.map(([s,r])=>new Et(s,r)),n=new qn(e,t);return n.computeVertexNormals(),n}function Vt(i,t,e=0,n=0,s=0){const r=new ot(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function Ra(i){return Eh(i,!1)}const Vg=[[.02,.2],[.1,.175],[.148,.11],[.164,.04],[.158,-.03],[.132,-.09],[.09,-.135],[.04,-.158]],Gg=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],Wg=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];let ys=null;function Wo(){if(ys)return ys;const i=[],t=new ge(.046,12,10);t.scale(1.5,.75,1.45),t.translate(0,-.575,.02),i.push(t);for(let h=0;h<4;h++){const u=-.042+h*.028,d=.05-Math.abs(h-1.5)*.006,f=.28+(h===0||h===3?.12:0),m=new ie(.011,.013,d,6);m.translate(0,-d*.5,0),m.rotateX(.16),m.translate(u,-.62,.05);const _=new ie(.008,.011,d*.82,6);_.translate(0,-d*.38,0),_.rotateX(f),_.translate(u,-.62-d*.7,.055),i.push(m,_)}const e=new ie(.009,.011,.04,6);e.translate(0,-.02,0),e.rotateZ(.85),e.translate(.048,-.59,.015);const n=new ie(.007,.009,.028,6);n.translate(0,-.014,0),n.rotateZ(1.15),n.rotateX(.25),n.translate(.062,-.6,.03),i.push(e,n);const s=new Nt(.1,.025,.2);s.translate(0,-.012,.02);const r=new Nt(.088,.038,.13);r.translate(0,.016,-.005);const a=[],o=new Nt(.05,.055,.16);o.translate(0,-.56,.1),a.push(o);const c=new Nt(.03,.03,.07);c.translate(0,-.545,.16),a.push(c);const l=new Nt(.038,.07,.04);l.translate(0,-.61,.04),a.push(l),ys={helmet:Aa(Vg,36),torso:Aa(Gg,32),robe:Aa(Wg,36),visor:new ge(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:Zi(.34,.2,.48,.26,.4),abdomen:Zi(.3,.18,.34,.2,.18),pelvis:Zi(.32,.2,.28,.18,.14),pec:Zi(.15,.1,.17,.12,.2),shoulder:Zi(.1,.1,.14,.12,.08),thigh:new ie(.055,.072,.34,12),shin:new ie(.04,.055,.32,12),foot:Ra([s,r]),upper:new ie(.04,.05,.26,12),forearm:new ie(.03,.04,.22,12),hand:Ra(i),gun:Ra(a),collar:new ie(.07,.09,.08,8),joint:new ge(1,16,12),skirt:Zi(.34,.16,.5,.22,.62),tabard:new Nt(.22,.58,.045),stole:new Nt(.09,.5,.04),muzzle:new Nt(.028,.028,.04),seam:new Nt(.2,.028,.02)};for(const h of Object.values(ys))if(!(!(h!=null&&h.index)||h.attributes.tangent||!h.attributes.uv||!h.attributes.normal))try{h.computeTangents()}catch(u){}return ys}const Eo=[];let wo=1;const Xg=ee.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );","vec4 envMapColor = sampleProbe( envMapRotation * worldNormal, 1.0 );").replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );","vec4 envMapColor = sampleProbe( envMapRotation * reflectVec, roughness );");function qg(i,t,e){i.envMap=t||null,i.envMapIntensity=t?1.15:.72,!(!t||!e)&&(i.customProgramCacheKey=()=>"visor-dual-probe",i.onBeforeCompile=n=>{n.uniforms.courtMap={value:e},n.uniforms.probeMix={value:wo},i.userData.probeShader=n,n.fragmentShader=n.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`#ifdef USE_ENVMAP
uniform sampler2D courtMap;
uniform float probeMix;
vec4 sampleProbe(vec3 dir, float roughness) {
  if (probeMix >= 0.999) return textureCubeUV(courtMap, dir, roughness);
  if (probeMix <= 0.001) return textureCubeUV(envMap, dir, roughness);
  return mix(textureCubeUV(envMap, dir, roughness), textureCubeUV(courtMap, dir, roughness), probeMix);
}
#endif
${Xg}`)},Eo.push(i))}let Ca=null;function wh(i){if(!Ca){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),s=n.createRadialGradient(32,32,2,32,32,31);s.addColorStop(0,"rgba(0,0,0,0.48)"),s.addColorStop(.5,"rgba(0,0,0,0.2)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);const r=new ui(e);r.colorSpace=Ve,Ca=new oe({map:r,transparent:!0,depthWrite:!1})}const t=new ot(new ai(i,24),Ca);return t.rotation.x=-Math.PI/2,t.position.y=.025,t.castShadow=!1,t.receiveShadow=!1,t}function Si(i,t=0,e=0){return i.userData.rest=t,i.userData.restI=e,i.emissive=new Kt(t),i.emissiveIntensity=e,i}function uc(i,t){const e=i.shinGrime.clone();return e.wrapS=Rn,e.offset.x=t,Si(new Be({map:e,roughness:.96,metalness:.02,envMapIntensity:.14}))}function bh(i,t){const e=(t==null?void 0:t.aisle)||null,n=(t==null?void 0:t.court)||null,s=Si(new Sa({map:i.pearl,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:.85,metalness:.02,clearcoat:.58,clearcoatRoughness:.24,envMapIntensity:.36}));s.normalScale.set(.45,.45);const r=Si(new Be({map:i.pearlWorn,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:1,metalness:.02,envMapIntensity:.22}));r.normalScale.set(.65,.65);const a=Si(new Be({map:i.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),o=Si(new Sa({color:461070,roughness:.035,metalness:.12,clearcoat:1,clearcoatRoughness:.03,iridescence:0,ior:1.55,reflectivity:1}));qg(o,e,n),o.polygonOffset=!0,o.polygonOffsetFactor=-2,o.polygonOffsetUnits=-2;const c=Si(new Sa({map:i.cloth,normalMap:i.clothNormal,roughnessMap:i.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new Kt(16183784),envMapIntensity:.32}));c.normalScale.set(.4,.4);const l=Si(new Be({map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);l.normalScale.set(.35,.35);const h=new oe({color:16757066}),u=uc(i,0),d=uc(i,.17);return{pearl:s,worn:r,joint:a,visor:o,cloth:c,gold:l,amber:h,grime:u,grimeR:d}}function _r(i,t,e,n,s){const r=Vt(Wo().joint,i,e,n,s);return r.scale.setScalar(t),r}function ni(i,t,e=16774894){for(const n of i)t>.02?(n.emissive.setHex(e),n.emissiveIntensity=t):(n.emissive.setHex(n.userData.rest||0),n.emissiveIntensity=n.userData.restI||0)}function Yg(i,t={}){const e=new ae,n=Wo(),s=bh(i,t.probes),r=[],a=Vt(n.torso,s.pearl),o=Vt(new ie(.188,.188,.048,18),s.joint,0,1.02,0),c=Vt(n.collar,s.joint,0,1.5,0),l=new ae;l.position.set(0,1.66,0);const h=Vt(n.helmet,s.pearl);h.scale.set(1.06,.96,1.08);const u=Vt(new ge(.172,40,24),s.visor,0,-.045,.168);u.scale.set(1.18,1.14,.36);const d=Vt(new ge(.026,12,8),s.pearl,0,.148,.12);d.scale.set(1,.65,.5);const f=Vt(n.seam,s.amber,0,-.02,.185);f.visible=!1,f.castShadow=!1,l.add(h,u,d,f);const m=Vt(new Nt(.32,.22,.028),s.pearl,0,1.3,.22);m.castShadow=!1;const _=Vt(new ge(.14,14,10),s.pearl,0,.74,0);_.scale.set(1.65,.48,1.05),_.castShadow=!1,r.push(a,o,c,l,m,_);function g(w,x){const R=new ae;if(x){R.add(_r(s.joint,.055,0,0,0)),R.add(Vt(n.upper,s.pearl,0,-.16,0)),R.add(_r(s.joint,.042,0,-.3,0)),R.add(Vt(n.forearm,s.joint,0,-.42,0));const U=Kg(s.joint,w);R.add(U.rig),R.userData.digits=U.digits}else{R.add(_r(s.joint,.058,0,0,0)),R.add(Vt(n.thigh,s.pearl,0,-.2,0)),R.add(_r(s.joint,.048,0,-.38,0));const U=Vt(new ge(.046,10,8),s.pearl,0,-.38,.042);U.scale.set(1.05,.8,.5),U.castShadow=!1,R.add(U);const O=Vt(n.shin,s.worn,0,-.56,0);O.rotation.y=Math.PI,O.scale.set(1.12,1,.86),R.add(O);const X=Vt(new Nt(.078,.24,.016),w<0?s.grime:s.grimeR,0,-.58,.058);X.castShadow=!1,R.add(X);const Y=Vt(n.foot,s.worn,0,-.76,.03);R.add(Y)}return R}const p=g(-1,!1);p.position.set(-.12,.8,0),p.rotation.z=.08;const E=g(1,!1);E.position.set(.12,.8,0),E.rotation.z=-.08;const T=g(-1,!0);T.position.set(-.32,1.4,0),T.rotation.z=.42;const y=g(1,!0);y.position.set(.32,1.4,0),y.rotation.z=-.36;const k=Vt(n.gun,s.joint,.045,.02,.02),D=Vt(n.muzzle,s.amber,.045,-.525,.22);D.castShadow=!1,y.add(k,D);const P=wh(.48);e.add(...r,p,E,T,y,P);let N=null;if(t.vestment){const w=Vt(n.tabard,s.cloth,0,.92,.16),x=Vt(new Nt(.28,.42,.04),s.cloth,0,.95,-.14),R=Vt(n.stole,s.gold,0,1.16,.18),U=Vt(new qn([new Et(.18,0),new Et(.32,.04),new Et(.24,.1)],24),s.cloth,0,1.4,0),O=$i(Th(new qn([new Et(.2,.02),new Et(.36,.2),new Et(.4,.46),new Et(.3,.74),new Et(.22,.96)],28),6,.016),s.cloth,0,.06,0);N=O,e.add(w,x,R,U,O)}return Ah(e),{group:e,weak:f,lLeg:p,rLeg:E,lArm:T,rArm:y,muzzle:D,shadow:P,cloth:N,lDigits:T.userData.digits,rDigits:y.userData.digits,flashMats:[s.pearl,s.worn,s.joint,s.visor,s.cloth,s.gold,s.grime,s.grimeR],flash:0}}function Zg(i,t){const e=new ae,n=bh(i,t),s=Wo(),r=$i(Th(s.robe,8,.04),n.cloth),a=$i(new qn([new Et(.26,0),new Et(.64,.05),new Et(.5,.14),new Et(.22,.2)],28),n.cloth,0,1.46,0),o=n.cloth.clone();o.side=Ze;const c=$i(new ie(.3,.98,1.78,18,1,!0,Math.PI-1.25,2.5),o,0,.9,-.14);c.castShadow=!1;const l=Vt(new qn([new Et(.12,0),new Et(.22,.06),new Et(.16,.16)],24),n.cloth,0,1.68,0),h=Vt(new Ye(.58,.05,8,28),n.cloth,0,.08,0);h.rotation.x=Math.PI/2,h.castShadow=!1;const u=Vt(new Ye(.63,.018,8,32),n.gold,0,.05,0);u.rotation.x=Math.PI/2;const d=Vt(new Ye(.38,.022,8,28),n.gold,0,1.1,0);d.rotation.x=Math.PI/2;const f=n.cloth.clone();f.side=Ze;const m=[],_=[[0,.7,.06,1.2,.075],[.82,.36,.08,1.16,.068],[-.82,.36,.08,1.16,.068],[1.6,.4,.08,1.12,.06],[-1.6,.4,.08,1.12,.06],[Math.PI,.55,.1,1.08,.055]];for(const[v,L,F,B,Q]of _){const _t=$i(Ss(v,L,F,B,Q),f);_t.castShadow=!1,m.push(_t),e.add(_t)}for(const v of[-.36,.36]){const L=Vt(Ss(v,.045,.08,1.18,.09),n.gold);L.castShadow=!1,e.add(L)}const g=$i(Ss(0,.95,1.16,1.5,.055,6),f);g.castShadow=!1;const p=Vt(Ss(0,1.05,1.12,1.17,.07,3),n.gold);p.castShadow=!1;const E=Vt(Ss(0,.1,.42,1.14,.095,8),n.gold);E.castShadow=!1;const T=Vt(new ge(.045,12,10),n.gold,0,.48,.58),y=new ae;y.position.set(0,2.05,0),y.scale.setScalar(1.18);const k=Vt(s.helmet,n.pearl),D=Vt(new ge(.028,12,8),n.pearl,0,.15,.11);D.scale.set(1,.62,.48);const P=Vt(new ge(.175,40,24),n.visor,0,-.04,.162);P.scale.set(1.22,1.2,.38);const N=Vt(new Nt(.22,.03,.018),n.amber,0,-.02,.175);N.visible=!1,N.castShadow=!1,y.add(k,D,P,N);const w=new Be({color:15123818,map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),x=new ot(new Ye(.58,.04,12,48),w);x.position.set(0,2.22,-.16);const R=new ot(new Ye(.4,.016,8,36),w);x.add(R);const U=Vt(new ge(.032,10,8),n.gold,.58,0,0);x.add(U);const O=n.cloth.clone();O.side=Ze;function X(v){const L=new ae,F=Vt(new ie(.075,.13,.52,14),n.cloth,0,.26,0),B=Vt(new ie(.22,.08,.46,14,1,!0),O,0,.2,0);B.castShadow=!1;const Q=Vt(new Ye(.2,.016,8,16),n.gold,0,.44,0);Q.rotation.x=Math.PI/2;const _t=Jg(n.pearl,n.amber,v);return L.add(F,B,Q,_t.rig),L.position.set(v*.42,1.48,.02),{pivot:L,hand:_t.amber,digits:_t.digits}}const Y=X(-1),Z=X(1);for(const v of[1.42,1.28,1.14]){const L=Vt(new Ye(.16,.01,8,22,Math.PI*.85),n.gold,0,v,.42);L.rotation.x=Math.PI/2,e.add(L)}const tt=wh(.9);return e.add(r,c,a,l,h,u,d,g,p,E,T,y,x,Y.pivot,Z.pivot,tt),e.position.set(Is.x,0,Is.z),Ah(e),{group:e,halo:x,haloMat:w,seam:N,shadow:tt,lArm:Y.pivot,rArm:Z.pivot,lHand:Y.hand,rHand:Z.hand,lDigits:Y.digits,rDigits:Z.digits,cloths:[r,c,a,g,...m],flashMats:[n.pearl,n.cloth,o,O,f,n.visor,n.gold],flash:0}}const fc=new Map;function vr(i,t,e){const n=`${i}:${t}:${e}`;let s=fc.get(n);return s||(s=new ie(i,t,e,6),fc.set(n,s)),s}function Kg(i,t){const e=new ae,n=t<0;e.position.set(t*.012,-.5,n?.09:.045),e.rotation.x=n?-.62:-.22;const s=new ge(.036,10,8);s.scale(2.35,.55,.72);const r=Vt(s,i);r.castShadow=!1,e.add(r);const a=[],o=[-.074,-.025,.025,.074],c=[.09,.118,.106,.08];for(let f=0;f<4;f++){const m=new ae;m.position.set(o[f],-.02,.02);const _=c[f],g=Vt(vr(.009,.0125,_),i,0,-_*.48,0);g.castShadow=!1;const p=Vt(new ge(.012,8,6),i,0,-_*.92,0);p.castShadow=!1;const E=new ae;E.position.y=-_*.96;const T=_*.72,y=Vt(vr(.0065,.0095,T),i,0,-T*.46,0);y.castShadow=!1,E.add(y),m.add(g,p,E),e.add(m),a.push({knuckle:m,tip:E})}const l=new ae;l.position.set(t*.082,.004,.028),l.rotation.z=-t*1.15;const h=Vt(vr(.0085,.011,.052),i,0,-.028,0);h.castShadow=!1;const u=new ae;u.position.y=-.05;const d=Vt(vr(.006,.0085,.038),i,0,-.02,0);return d.castShadow=!1,u.add(d),l.add(h,u),e.add(l),a.push({knuckle:l,tip:u}),{rig:e,digits:a}}const jg=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];function $g(i){const t=jg;if(i<=t[0][1])return t[0][0];for(let e=1;e<t.length;e++)if(i<=t[e][1]){const n=(i-t[e-1][1])/(t[e][1]-t[e-1][1]);return t[e-1][0]+(t[e][0]-t[e-1][0])*n}return t[t.length-1][0]}function Ss(i,t,e,n,s,r=8){const a=new Ce,o=[],c=[],l=[],h=2;for(let d=0;d<=r;d++){const f=d/r,m=e+(n-e)*f,_=$g(m)+s;for(let g=0;g<=h;g++){const p=i-t/2+t*g/h;o.push(Math.sin(p)*_,m,Math.cos(p)*_),c.push(g/h,f)}}const u=h+1;for(let d=0;d<r;d++)for(let f=0;f<h;f++){const m=d*u+f;l.push(m,m+u,m+1,m+1,m+u,m+u+1)}return a.setAttribute("position",new ce(o,3)),a.setAttribute("uv",new ce(c,2)),a.setIndex(l),a.computeVertexNormals(),a}function Jg(i,t,e){const n=new ae;n.position.set(0,.58,.1);const s=new ge(.055,12,8);s.scale(1.7,1.15,.4);const r=Vt(s,i);r.castShadow=!1,n.add(r);const a=[],o=[-.058,-.02,.02,.058],c=[.09,.11,.1,.078];for(let m=0;m<4;m++){const _=new ae;_.position.set(o[m],.04,.02);const g=c[m],p=Vt(new ie(.012,.014,g,6),i,0,g*.48,0);p.castShadow=!1;const E=new ae;E.position.y=g*.9;const T=g*.7,y=Vt(new ie(.009,.012,T,6),i,0,T*.46,0);y.castShadow=!1,E.add(y),_.add(p,E),n.add(_),a.push({knuckle:_,tip:E})}const l=new ae;l.position.set(e*.078,-.006,.02),l.rotation.z=e*.85;const h=Vt(new ie(.01,.012,.05,6),i,0,.028,0);h.castShadow=!1;const u=new ae;u.position.y=.05;const d=Vt(new ie(.007,.01,.032,6),i,0,.016,0);d.castShadow=!1,u.add(d),l.add(h,u),n.add(l),a.push({knuckle:l,tip:u});const f=Vt(new Nt(.09,.07,.014),t,0,.01,.04);return f.castShadow=!1,n.add(f),{rig:n,digits:a,amber:f}}function ii(i,t){for(let e=0;e<i.length;e++){const n=i[e],s=e===i.length-1?.55:1;n.knuckle.rotation.x=-t*s,n.tip.rotation.x=-t*.8*s}}function dc(i,t,e=0,n=1){if(!i)return;const s=Array.isArray(i)?i:[i];for(const r of s)r!=null&&r.morphTargetInfluences&&(r.morphTargetInfluences[0]=Math.sin(t*.75+e)*.6*n,r.morphTargetInfluences[1]=Math.sin(t*.5+e+.8)*.4*n)}function Qg(i){const t=i.attributes.position;let e=1/0,n=-1/0;for(let o=0;o<t.count;o++){const c=t.getY(o);c<e&&(e=c),c>n&&(n=c)}const s=Math.max(.001,n-e),r=new Float32Array(t.count*3),a=new Float32Array(t.count*3);for(let o=0;o<t.count;o++){const c=Math.pow(Math.max(0,(n-t.getY(o))/s),1.35);r[o*3]=c*.08,a[o*3+2]=c*.055}return i.morphAttributes.position=[new ce(r,3),new ce(a,3)],i}function $i(i,t,e=0,n=0,s=0){Qg(i);const r=Vt(i,t,e,n,s);return r.updateMorphTargets(),r}function Th(i,t=7,e=.02){const n=i.clone(),s=n.attributes.position;for(let r=0;r<s.count;r++){const a=s.getX(r),o=s.getY(r),c=s.getZ(r),l=Math.hypot(a,c)||1,h=Math.atan2(a,c),u=.4+.6*Math.max(0,c/l),d=.4+.6*Math.min(1,Math.max(0,(1.35-o)/1.35)),f=Math.sin(h*t)*e*u*d;s.setXYZ(r,a+a/l*f,o,c+c/l*f)}return s.needsUpdate=!0,n.computeVertexNormals(),n.getAttribute("tangent")&&n.deleteAttribute("tangent"),n}function Ah(i){i.traverse(t=>{var n;const e=t.geometry;if(!(!t.isMesh||!((n=t.material)!=null&&n.normalMap)||!(e!=null&&e.index)||e.attributes.tangent)&&!(!e.attributes.uv||!e.attributes.normal))try{e.computeTangents()}catch(s){}})}function t_(i,t,e){Eo.length=0;const n=new Map,s=new Set(Fr().map(l=>l.id));for(const l of[...gh(),...Fr()]){const h=Yg(t,{vestment:s.has(l.id),probes:e});h.group.position.set(l.x,0,l.z),h.group.visible=l.visible,h.death=0,h.died=!1,h.phase=Math.random()*Math.PI*2,h.prevX=l.x,h.prevZ=l.z,i.add(h.group),n.set(l.id,h)}const r=Zg(t,e);r.died=!1,r.death=0,r.pose=0,i.add(r.group);const a=new ge(.08,7,5),o=new oe({color:16756768}),c=[];for(let l=0;l<16;l++){const h=new ot(a,o);h.visible=!1,h.frustumCulled=!1,i.add(h),c.push(h)}return{setProbeBlend(l){wo=Math.min(1,Math.max(0,(l- -17)/5));for(const h of Eo){const u=h.userData.probeShader;u&&(u.uniforms.probeMix.value=wo)}},reset(l){for(const h of l){const u=n.get(h.id);if(u){if(u.prevX=h.x,u.prevZ=h.z,u.group.position.set(h.x,0,h.z),u.group.rotation.set(0,0,0),u.group.scale.setScalar(1),u.flash=0,ni(u.flashMats,0),u.weak.visible=!1,!h.alive){u.died=!0,u.death=0,u.group.visible=!1;continue}u.death=0,u.died=!1,u.group.visible=h.visible}}},resetPriest(l){r.died=!1,r.death=0,r.pose=0,r.flash=0,r.group.visible=!0,r.group.rotation.set(0,0,0),r.group.position.set(l.x,0,l.z),r.halo.scale.setScalar(1),ni(r.flashMats,0),r.seam.visible=!1},syncPriest(l,h,u,d){if(!l.alive){r.died||(r.died=!0,r.death=1.05),r.death-=h;const P=1-Math.max(r.death,0)/1.05;r.group.visible=r.death>0,r.group.rotation.x=P*1.25,r.group.position.set(l.x,-P*.55,l.z),r.shadow.visible=!1,r.halo.scale.setScalar(Math.max(0,1-P)),r.seam.visible=!1,r.lArm.rotation.x=.9,r.rArm.rotation.x=.7,ii(r.lDigits,.85),ii(r.rDigits,.75),ni(r.flashMats,P<.45?(1-P/.45)*2.4:0);return}r.died=!1,r.death=0,r.group.visible=!0,r.group.rotation.set(0,l.yaw||0,Math.sin(u*.8)*.008);const f=Math.sin(u*1.15)*.015;r.group.position.set(l.x,f,l.z),r.shadow.visible=!0,r.shadow.position.y=.025-f,r.halo.rotation.z=u*.15;const m=l.phase==="rite",_=m?1.28:l.windup>0?.4:1.12,g=l.windup>0?-.85:m?-.25:-.12;r.lArm.rotation.set(g,0,_),r.rArm.rotation.set(g,0,-_),dc(r.cloths,u,.2,1);const p=l.windup>0?.62:m?.1+Math.sin(u*2.2)*.04:.2+Math.sin(u*1.35)*.07;ii(r.lDigits,p),ii(r.rDigits,p);const E=!!l.haloVisible,T=E&&d==="STATIC";r.halo.visible=!0;const y=E?1+Math.sin(u*7)*.06:1;r.halo.scale.setScalar(y),r.haloMat.opacity=T?1:E?.96:.9,r.haloMat.emissiveIntensity=T?2.4:E?1.55:.85,r.seam.visible=!!l.exposed;const k=l.windup>0||l.phase==="rite";r.lHand.visible=k,r.rHand.visible=k;const D=k?1.45:1;r.lHand.scale.setScalar(D),r.rHand.scale.setScalar(D),l.hurt>0&&(r.flash=.2),r.flash=Math.max(0,r.flash-h),ni(r.flashMats,r.flash>0?r.flash/.2*2.6:0)},sync(l,h,u,d){for(const f of l){const m=n.get(f.id);if(!f.alive){m.died||(m.died=!0,m.death=.85),m.death-=h;const T=1-Math.max(m.death,0)/.85;m.group.visible=m.death>0,m.group.rotation.x=T*1.35,m.group.position.set(f.x,-T*.4,f.z),m.shadow.visible=!1,m.group.scale.setScalar(1),m.lArm.rotation.x=.5+T*.6,m.rArm.rotation.x=.3+T*.9,ii(m.lDigits,.8),ii(m.rDigits,.9),m.lLeg.rotation.x=-.25*T,m.rLeg.rotation.x=.4*T,m.weak.visible=!1,ni(m.flashMats,T<.4?(1-T/.4)*2.4:0);continue}m.died=!1,m.death=0,m.group.visible=!!f.visible;const _=Math.hypot(f.x-m.prevX,f.z-m.prevZ);m.prevX=f.x,m.prevZ=f.z;const g=Math.sin(u*1.4+m.phase)*(_>.004?.02:.012);m.group.rotation.set(0,f.yaw||0,Math.sin(u*1.1+m.phase)*.012),m.group.position.set(f.x,g,f.z),m.shadow.visible=!0,m.shadow.position.y=.025-g;const p=_>.004?Math.sin(u*8+m.phase):Math.sin(u*1.6+m.phase)*.15;if(m.lLeg.rotation.x=p*.7,m.rLeg.rotation.x=-p*.7,m.lArm.rotation.x=-p*.45,m.rArm.rotation.x=p*.25+(f.windup>0?-.95:-.06),m.weak.visible=!!f.exposed,f.hurt>0&&(m.flash=.16),m.flash=Math.max(0,m.flash-h),m.flash>0)ni(m.flashMats,m.flash/.16*2.8),m.group.scale.setScalar(1.035);else if(f.cloaked&&f.visible){const T=.22+Math.sin(u*9)*.1;ni(m.flashMats,T,16766888),m.group.scale.setScalar(1)}else ni(m.flashMats,0),m.group.scale.setScalar(1);m.muzzle.scale.setScalar(f.windup>0?1.8:1);const E=.16+Math.sin(u*1.35+m.phase)*.05;ii(m.lDigits,E),ii(m.rDigits,f.windup>0?.8:.4),m.cloth&&dc(m.cloth,u,m.phase,.85),f.cloaked&&f.visible&&d!=="STATIC"&&f.reveal<.5&&(m.group.visible=Math.sin(u*46)>-.2)}},syncBolts(l){for(let h=0;h<c.length;h++){const u=c[h],d=l[h];if(!d){u.visible=!1;continue}u.visible=!0,u.position.set(d.x,d.y,d.z)}}}}const pc=["seam","choir","veil"],ln={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},e_=2.05,n_=1.2,i_=2.62;function mc(i){return i==="seam"?"LIVE · THE SEAM":i==="choir"?"STATIC · THE HALO":i==="veil"?"DEAD AIR · THE VEIL":""}function gc(){return{id:"visor-priest",boss:!0,x:Is.x,y:Is.y,z:Is.z,yaw:0,hp:ln.hp,maxHp:ln.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:ln.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function s_(i,t){const e=pc[i.riteIndex%pc.length];i.phase="rite",i.rite=e,i.timer=ln.riteWindow,i.exposed=e==="seam",i.haloVisible=e==="choir",i.veilUp=e==="veil",i.windup=0,t.push({type:"announce",rite:e})}function Rh(i){i.phase="recover",i.rite=null,i.exposed=!1,i.haloVisible=!1,i.veilUp=!1,i.windup=0,i.timer=ln.recover,i.riteIndex+=1}function r_(i,t,e){if(!i.alive||!i.active)return{priest:i,events:[]};const n=[],s={...i,hurt:Math.max(0,(i.hurt||0)-t),stun:Math.max(0,(i.stun||0)-t)};if(e&&e.player){const r=e.player.x-s.x,a=e.player.z-s.z;Math.hypot(r,a)>.05&&(s.yaw=Math.atan2(r,a))}return s.phase==="idle"?(s.timer-=t,s.timer<=0?s_(s,n):s.stun>0?s.windup=0:s.windup>0?(s.windup-=t,s.windup<=0&&(s.windup=0,s.shotCooldown=ln.shotGap,n.push({type:"shot"}))):(s.shotCooldown-=t,s.shotCooldown<=0&&(s.windup=ln.shotWindup))):s.phase==="rite"?(s.windup=0,s.timer-=t,s.timer<=0&&(n.push({type:"fail",rite:s.rite,damage:ln.failDamage}),Rh(s))):s.phase==="recover"&&(s.windup=0,s.timer-=t,s.timer<=0&&(s.phase="idle",s.timer=ln.idle)),{priest:s,events:n}}function a_(i){return i>0?i*ln.armor:0}function o_(i,t){const e=a_(t);if(!i||!i.alive||e<=0)return{priest:i,dealt:0,killed:!1};const n=i.hp-e,s=n<=0;return{priest:{...i,hp:s?0:n,alive:!s,hurt:.22,phase:s?"dead":i.phase,veilUp:s?!1:i.veilUp,haloVisible:s?!1:i.haloVisible,exposed:s?!1:i.exposed,rite:s?null:i.rite},dealt:e,killed:s}}function _c(i,t){if(!i.alive||i.phase!=="rite")return{priest:i,broken:!1,dealt:0,killed:!1};if(!(i.rite==="seam"&&t.channel==="LIVE"&&t.weak&&!t.halo||i.rite==="choir"&&t.channel==="STATIC"&&t.halo||i.rite==="veil"&&t.channel==="DEAD_AIR"&&t.crossed))return{priest:i,broken:!1,dealt:0,killed:!1};const n=ln.breakDamage,s=i.hp-n;if(s<=0)return{priest:{...i,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:n,killed:!0};const a={...i,hp:s,hurt:.28,broken:(i.broken||0)+1};return Rh(a),{priest:a,broken:!0,dealt:n,killed:!1}}function l_(i,t,e,n,s){if(!n||!n.alive||!n.hittable)return null;const r=[{y:n_,r:.62,weak:!1,halo:!1},{y:e_,r:.3,weak:!0,halo:!1}];n.haloVisible&&s==="STATIC"&&r.push({y:i_,r:.42,weak:!1,halo:!0});let a=null,o=e;for(const c of r){const l=yh(i.x,i.y,i.z,t.x,t.y,t.z,n.x,(n.y||0)+c.y,n.z,c.r);l==null||l<=.02||l>=o||(o=l,a={kind:"priest",id:n.id,t:l,weak:c.weak,halo:c.halo,x:i.x+t.x*l,y:i.y+t.y*l,z:i.z+t.z*l})}return a}const si={maxDist:16,cone:.3,stun:4.5,cooldown:16,retune:4.5,retuneMult:1.45,radius:16};function c_({origin:i,dir:t,point:e,maxDist:n,cone:s,blocked:r}){const a=e.x-i.x,o=e.y-i.y,c=e.z-i.z,l=Math.hypot(a,o,c);if(!(l>.05)||l>n||r)return{aimed:!1,dist:l};const h=(a*t.x+o*t.y+c*t.z)/l;return{aimed:h>=Math.cos(s),dist:l,dot:h}}function h_(i,t){const e=i.cooldownUntil||0;return e>t?{ok:!1,reason:"cooldown",cooldownUntil:e}:{ok:!0,cooldownUntil:t+si.cooldown}}function u_(i,t,e,n){return i.map(s=>!s.alive||s.room!=="chapel"||Math.hypot(s.x-t.x,s.z-t.z)>e?s:{...s,stun:Math.max(s.stun||0,n),windup:0})}function f_(i,t){const e=new ae;e.position.set(.18,-.28,-.48),i.add(e);const n=new Be({map:t.leather,normalMap:t.leatherNormal,roughnessMap:t.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});n.normalScale.set(.7,.7);const s=new Be({map:t.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),r=new Be({map:t.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new Be({map:t.wood,normalMap:t.woodNormal,roughnessMap:t.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new Be({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),c=new Be({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),l=new oe({color:6813439}),h=new ot(new Nt(.16,.055,.38),a);h.position.set(.02,-.02,.02);const u=new ot(new Nt(.11,.02,.3),o);u.position.set(.02,.012,.03);const d=new ot(new Nt(.07,.03,.04),r);d.position.set(.02,-.005,-.16),e.add(h,u,d);for(let nt=0;nt<2;nt++)for(let st=0;st<4;st++){const pt=new ot(new Nt(.028,.012,.03),c);pt.position.set(-.012+nt*.064,.026,.1-st*.055),e.add(pt)}const f=new ot(new Nt(.055,.028,.02),l);f.position.set(.02,-.004,-.2),e.add(f);const m=new ot(new ie(.006,.006,.22,6),r);m.position.set(.07,.02,-.12),m.rotation.z=-.4,m.rotation.x=.5;const _=new ot(new ge(.012,8,6),r);_.position.set(.11,.1,-.2);const g=new ae;for(const nt of[-1,1]){const st=new ot(new ie(.007,.005,.16,6),r);st.position.set(nt*.045,.03,-.16),st.rotation.x=1.15,st.rotation.z=nt*-.55;const pt=new ot(new ge(.012,8,6),r);pt.position.set(nt*.09,.07,-.22),g.add(st,pt)}g.visible=!1;const p=new Be({color:12963542,roughness:.22,metalness:.7,envMapIntensity:.45}),E=new ot(new Nt(.012,.028,.46),p);E.position.set(.02,-.01,-.38);const T=new ot(new Nt(.004,.008,.2),new oe({color:14015974}));T.position.set(.02,-.01,-.58);const y=new ae;y.add(E,T),y.visible=!1;const k=new ge(.045,12,8);k.scale(1.2,.62,1.35);const D=new ot(k,a);D.position.set(.02,-.02,-.15);const P=new ot(k,a);P.position.set(.02,-.02,.19);const N=new ot(new Nt(.018,.04,.2),o);N.position.set(-.068,-.03,.04);const w=N.clone();w.position.x=.108,e.add(m,_,g,y,D,P,N,w);for(let nt=0;nt<4;nt++){const st=new ot(new ie(.006,.006,.012,6),o);st.rotation.x=Math.PI/2,st.position.set(-.02+nt%2*.028,-.01,-.08-Math.floor(nt/2)*.02),e.add(st)}const x=new oe({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:Pr,side:Ze}),R=new ae;R.position.set(.02,-.004,-.24);const U=new ot(new xe(.22,.05),x),O=new ot(new xe(.22,.05),x);O.rotation.z=Math.PI/2;const X=new ot(new xe(.08,.08),x);R.add(U,O,X),R.visible=!1,e.add(R);const Y=new Ns(6813439,2.4,1.8,2);Y.position.copy(f.position),e.add(Y);const Z=[];function tt(nt,st,pt){const St=new ae,et=new ge(.046,14,10);et.scale(1.05,.48,1.35);const Jt=new ot(et,n),Dt=new ot(new Nt(.11,.07,.16),s);Dt.position.set(0,.01,.12);const Xt=new ot(new ge(.02,8,6),n);Xt.scale.set(2.1,.7,.8),Xt.position.set(0,.02,-.04),St.add(Jt,Dt,Xt);const z=[.03,.038,.036,.028];for(let Yt=0;Yt<4;Yt++){const yt=-.034+Yt*.022,C=z[Yt],M=new ae;M.position.set(yt,.016,-.052);const q=new ot(new ie(.0075,.0095,C,8),n);q.rotation.x=Math.PI/2,q.position.set(0,0,-C*.42);const it=new ae;it.position.set(0,-.002,-C*.78),it.rotation.x=.22;const at=new ot(new ie(.0055,.0075,C*.82,8),n);at.rotation.x=Math.PI/2,at.position.set(0,0,-C*.36),it.add(at),M.add(q,it),St.add(M),Z.push({knuckle:M,tip:it,tipRest:.22})}const Qt=new ae;Qt.position.set(pt>0?.042:-.042,.018,-.02),Qt.rotation.z=pt>0?-.7:.7;const kt=new ot(new ie(.0085,.011,.034,8),n);kt.rotation.x=.35,kt.position.set(0,.01,-.012);const Ft=new ae;Ft.position.set(0,.006,-.028),Ft.rotation.x=.2;const Mt=new ot(new ie(.0065,.0085,.026,8),n);Mt.rotation.x=.45,Mt.position.set(0,0,-.014),Ft.add(Mt),Qt.add(kt,Ft),St.add(Qt),Z.push({knuckle:Qt,tip:Ft,tipRest:.2}),St.position.set(nt,-.05,st),St.rotation.y=pt,St.rotation.z=pt>0?.22:-.18,e.add(St)}tt(-.07,.06,.5),tt(.12,.08,-.62),e.traverse(nt=>{var pt;nt.castShadow=!1,nt.receiveShadow=!1,nt.frustumCulled=!1;const st=nt.geometry;!nt.isMesh||!((pt=nt.material)!=null&&pt.normalMap)||!(st!=null&&st.index)||st.attributes.tangent||st.attributes.uv&&st.attributes.normal&&st.computeTangents()});let v=0,L=0,F=0,B=0,Q=0,_t="LIVE",K=!1;const ht={x:.18,y:-.28,z:-.48};return{setChannel(nt){K&&nt!==_t&&(L=.09,F=Math.max(F,.45)),K=!0,_t=nt,m.visible=nt==="LIVE",_.visible=nt==="LIVE",g.visible=nt==="STATIC",y.visible=nt==="DEAD_AIR",nt==="LIVE"?(l.color.setHex(6813439),Y.color.setHex(6813439),Y.intensity=2.6):nt==="STATIC"?(l.color.setHex(15921906),Y.color.setHex(16777215),Y.intensity=.8):(l.color.setHex(2761758),Y.intensity=0)},fire(nt){if(nt==="dry"||nt==="none"){L=.14,v=.02,B=0;return}v=nt==="spread"?.12:nt==="phase"?.08:.055,F=nt==="spread"?.85:nt==="phase"?.5:.62,B=.045,x.color.set(nt==="spread"?16053492:nt==="phase"?14015974:13040639),R.scale.setScalar(nt==="spread"?1.35:nt==="phase"?.7:1),nt==="phase"?R.position.z=-.62:R.position.z=-.24},setVisible(nt){e.visible=nt},update(nt,st,pt={}){const St=st>.35;Q+=nt*(St?7.2+Math.min(st,9)*.28:1.5);const et=St?.004+Math.min(st,9)*.00115:.0016,Jt=pt.strafe||0;v+=(0-v)*(1-Math.exp(-12*nt)),L+=(0-L)*(1-Math.exp(-14*nt)),F+=(0-F)*(1-Math.exp(-7*nt));const Dt=Math.sin(Q*1.3)*.05;for(let Xt=0;Xt<Z.length;Xt++){const z=Z[Xt],Qt=Dt+F*(.42+Xt%5*.05);z.knuckle.rotation.x=Qt,z.tip.rotation.x=z.tipRest+Qt*1.15}if(B-=nt,R.visible=B>0,R.visible&&(R.rotation.z=B*18),_t==="STATIC"){const Xt=.45+Math.random()*.55;l.color.setRGB(Xt,Xt,Xt)}e.position.x=ht.x+Math.cos(Q)*et*.7-Jt*.01,e.position.y=ht.y+Math.sin(Q*2)*et+(St?0:Math.sin(Q)*.003),e.position.z=ht.z+v*.62,e.rotation.x=v*1.7+L*1.5+Math.sin(Q*2)*et*2.2,e.rotation.y=.06-v*.25,e.rotation.z=-Jt*.035+Math.sin(Q)*et*1.4}}}function ze(i,t,e,n=1,s=1){const r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);const a=new ui(r);return a.colorSpace=Ve,a.wrapS=Rn,a.wrapT=Rn,a.repeat.set(n,s),a.anisotropy=8,a.magFilter=nn,a.minFilter=Sn,a}function Ki(i,t,e,n,s,r){i.fillStyle=s;for(let a=0;a<n;a++){const o=a*97%t,c=a*53%e;i.fillRect(o,c,r,r)}}function d_(i,t=1,e=1){const n=new ui(i);return n.colorSpace=Bn,n.wrapS=Rn,n.wrapT=Rn,n.repeat.set(t,e),n.anisotropy=4,n.magFilter=nn,n.minFilter=Sn,n}function Ch(i,t,e,n=1,s=1){const r=document.createElement("canvas");r.width=i,r.height=t;const a=r.getContext("2d"),o=a.createImageData(i,t);for(let c=0;c<t;c++)for(let l=0;l<i;l++){const[h,u,d]=e(l,c,i,t),f=(c*i+l)*4;o.data[f]=h,o.data[f+1]=u,o.data[f+2]=d,o.data[f+3]=255}return a.putImageData(o,0,0),d_(r,n,s)}function vi(i,t,e,n,s=1,r=1){const a=new Float32Array(i*t);for(let o=0;o<t;o++)for(let c=0;c<i;c++)a[o*i+c]=e(c,o,i,t);return Ch(i,t,(o,c)=>{const l=a[c*i+(o+i-1)%i],h=a[c*i+(o+1)%i],u=a[(c+t-1)%t*i+o],d=a[(c+1)%t*i+o];let f=(l-h)*n,m=(u-d)*n;const _=1,g=Math.hypot(f,m,_)||1;return[f/g*127.5+127.5,m/g*127.5+127.5,_/g*127.5+127.5]},s,r)}function xi(i,t,e,n=1,s=1){return Ch(i,t,(r,a)=>{const o=Math.max(0,Math.min(1,e(r,a,i,t)))*255;return[o,o,o]},n,s)}function p_(){const i=ze(256,256,(v,L,F)=>{v.fillStyle="#5c564c",v.fillRect(0,0,L,F);const B=64;for(let Q=0;Q<F;Q+=B)for(let _t=0;_t<L;_t+=B){const K=(_t*3+Q*7)%17/17,ht=K>.66?"#6a6358":K>.33?"#574f46":"#4e4840";v.fillStyle=ht,v.fillRect(_t+2,Q+2,B-4,B-4),v.fillStyle="rgba(20,16,12,0.35)",v.fillRect(_t,Q,B,2),v.fillRect(_t,Q,2,B)}v.fillStyle="rgba(30,22,14,0.28)",v.beginPath(),v.ellipse(48,180,28,10,.4,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(190,60,22,8,-.5,0,Math.PI*2),v.fill(),v.fillStyle="rgba(90,70,40,0.18)",v.fillRect(8,8,18,6)},8,6),t=ze(256,256,(v,L,F)=>{v.fillStyle="#c8bfb2",v.fillRect(0,0,L,F),v.fillStyle="#b3a898";for(let B=0;B<L;B+=64)v.fillRect(B,0,3,F);v.fillStyle="#9c9184",v.fillRect(0,168,L,10),v.fillStyle="#6e655c",v.fillRect(0,214,L,42),v.fillStyle="#8a8176",v.fillRect(0,210,L,6),v.fillStyle="rgba(70,50,30,0.12)";for(let B=0;B<20;B++)v.fillRect(B*41%L,20+B*17%120,16,5);Ki(v,L,F,30,"rgba(255,255,255,0.04)",2)},3,2),e=ze(128,128,(v,L,F)=>{v.fillStyle="#8d8478",v.fillRect(0,0,L,F),v.fillStyle="#756c62";for(let B=0;B<L;B+=16)v.fillRect(B,0,2,F);v.fillStyle="rgba(40,30,20,0.2)",v.fillRect(0,F-18,L,18),v.fillStyle="#a39888",v.fillRect(0,8,L,4)},2,2),n=ze(128,128,(v,L,F)=>{v.fillStyle="#b7b1a6",v.fillRect(0,0,L,F),v.strokeStyle="#8e877c",v.lineWidth=3,v.strokeRect(1,1,L-2,F-2),v.fillStyle="#c9c3b6",v.fillRect(8,8,L-16,F-16),v.fillStyle="rgba(80,70,50,0.15)",v.fillRect(18,40,30,8),v.fillRect(70,80,22,6)},6,6),s=ze(128,128,(v,L,F)=>{v.fillStyle="#5c3a22",v.fillRect(0,0,L,F);for(let B=0;B<F;B+=3){const Q=70+B*17%50;v.strokeStyle=`rgb(${Q+36}, ${Q-4}, ${Q-32})`,v.beginPath(),v.moveTo(0,B),v.quadraticCurveTo(L*.5,B+(B%9-4),L,B),v.stroke()}v.fillStyle="rgba(30,16,6,0.35)",v.fillRect(18,0,4,F),v.fillRect(78,0,3,F),v.beginPath(),v.ellipse(46,40,8,14,.2,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(96,90,6,10,-.3,0,Math.PI*2),v.fill()}),r=ze(128,128,(v,L,F)=>{v.fillStyle="#16130f",v.fillRect(0,0,L,F),v.fillStyle="#e2a23a";const B=18;for(let Q=-8;Q<16;Q++)v.beginPath(),v.moveTo(Q*B,0),v.lineTo(Q*B+B*.55,0),v.lineTo(Q*B+B*.55-F,F),v.lineTo(Q*B-F,F),v.fill()}),a=ze(128,64,(v,L,F)=>{for(let B=0;B<F;B++)for(let Q=0;Q<L;Q++){const K=140+(Q*17+B*13)%40*2;v.fillStyle=`rgb(${K},${K},${K-10})`,v.fillRect(Q,B,1,1)}v.fillStyle="rgba(0,0,0,0.45)";for(let B=0;B<F;B+=3)v.fillRect(0,B,L,1)}),o=ze(128,128,(v,L,F)=>{v.fillStyle="#efe8de",v.fillRect(0,0,L,F),v.fillStyle="#fbf7f1",v.fillRect(10,10,L-20,F-20),v.strokeStyle="rgba(40,34,28,0.45)",v.lineWidth=3,v.strokeRect(8,8,L-16,F-16),v.strokeStyle="rgba(40,34,28,0.28)",v.beginPath(),v.moveTo(18,F/2),v.lineTo(L-18,F/2),v.moveTo(L/2,18),v.lineTo(L/2,F-18),v.stroke(),Ki(v,L,F,24,"rgba(60,48,30,0.16)",2)}),c=ze(128,128,(v,L,F)=>{v.fillStyle="#ddd6cb",v.fillRect(0,0,L,F),v.fillStyle="#cbbba6",v.fillRect(0,F*.48,L,F*.52);for(let B=0;B<10;B++){const Q=L*(.34+B*13%32/100);v.fillStyle=B%2?"rgba(110,82,52,0.45)":"rgba(86,64,40,0.32)",v.fillRect(Q,F*.4,2+B%3,F*.58)}v.fillStyle="rgba(72,52,32,0.5)",v.fillRect(0,F-14,L,14),Ki(v,L,F,36,"rgba(70,54,32,0.28)",2)}),l=ze(128,128,(v,L,F)=>{v.fillStyle="#e7e0d6",v.fillRect(0,0,L,F),v.fillStyle="#c9b49a",v.fillRect(0,F*.28,L,F*.72);for(let B=0;B<16;B++){const Q=18+B*29%92;v.fillStyle=B%2?"rgba(96,70,42,0.72)":"rgba(62,46,30,0.55)",v.fillRect(Q,28+B%5*6,2+B%4,F-24)}v.fillStyle="rgba(48,34,20,0.55)",v.fillRect(0,F-20,L,20),v.fillStyle="rgba(120,96,70,0.35)",v.beginPath(),v.ellipse(L*.62,F*.72,16,8,.4,0,Math.PI*2),v.fill(),Ki(v,L,F,28,"rgba(40,28,16,0.4)",2)}),h=ze(64,64,(v,L,F)=>{v.fillStyle="#141414",v.fillRect(0,0,L,F),v.fillStyle="#2a2a2a";for(let B=-8;B<16;B++)v.fillRect(B*8,0,2,F);v.fillStyle="#3a3a3a",v.fillRect(0,4,L,3),v.fillStyle="#0a0a0a",v.fillRect(0,F-8,L,8)}),u=ze(64,64,(v,L,F)=>{v.fillStyle="#c6a15a",v.fillRect(0,0,L,F),v.fillStyle="#e6c97a",v.fillRect(0,2,L,6),v.fillStyle="#8a6a32",v.fillRect(0,F-8,L,8),v.strokeStyle="rgba(60,40,10,0.45)",v.beginPath(),v.moveTo(8,0),v.lineTo(18,F),v.moveTo(40,0),v.lineTo(30,F),v.stroke()}),d=ze(128,128,(v,L,F)=>{v.fillStyle="#f3efe6",v.fillRect(0,0,L,F);for(let B=8;B<L;B+=14)v.strokeStyle=B%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",v.beginPath(),v.moveTo(B,0),v.quadraticCurveTo(B+4,F/2,B-2,F),v.stroke();v.fillStyle="rgba(90,70,40,0.08)",v.fillRect(0,F-20,L,20)}),f=ze(128,128,(v,L,F)=>{v.fillStyle="#3a2418",v.fillRect(0,0,L,F),Ki(v,L,F,80,"rgba(20,10,6,0.45)",2),Ki(v,L,F,40,"rgba(120,80,50,0.2)",1),v.strokeStyle="rgba(10,6,4,0.7)",v.lineWidth=3,v.beginPath(),v.moveTo(0,20),v.lineTo(L,28),v.stroke()}),m=ze(128,128,(v,L,F)=>{v.fillStyle="#241810",v.fillRect(0,0,L,F),v.fillStyle="#1a110c";for(let B=0;B<L;B+=10)v.fillRect(B,0,3,F);v.fillStyle="rgba(80,50,30,0.15)",v.fillRect(0,0,L,8)}),_=ze(256,256,(v,L,F)=>{v.fillStyle="#3e3832",v.fillRect(0,0,L,F);const B=64;for(let Q=0;Q<F;Q+=B)for(let _t=0;_t<L;_t+=B)v.fillStyle=(_t+Q)%128===0?"#4a433b":"#35302b",v.fillRect(_t+3,Q+3,B-6,B-6);v.strokeStyle="rgba(166,132,70,0.35)",v.lineWidth=2;for(let Q=0;Q<=L;Q+=B)v.beginPath(),v.moveTo(Q,0),v.lineTo(Q,F),v.stroke(),v.beginPath(),v.moveTo(0,Q),v.lineTo(L,Q),v.stroke()},4,4),g=ze(64,64,(v,L,F)=>{v.fillStyle="#8d9298",v.fillRect(0,0,L,F),v.fillStyle="rgba(255,255,255,0.18)";for(let B=0;B<F;B+=3)v.fillRect(0,B,L,1);v.fillStyle="#5e646a",v.fillRect(0,0,L,4)}),p=vi(128,128,(v,L,F,B)=>{const Q=v/F,_t=L/B,K=Math.min(Q,1-Q,_t,1-_t),ht=Math.min(1,K*10),nt=Math.abs(Q-.5)<.012||Math.abs(_t-.5)<.012?.2:1;return ht*nt},3.2),E=xi(128,128,(v,L,F,B)=>{const Q=v/F,_t=L/B,K=Math.min(Q,1-Q,_t,1-_t);return .28+(1-Math.min(1,K*7))*.42}),T=vi(64,64,(v,L,F,B)=>{const Q=Math.sin(v*.85+L*.2)*.08,_t=L<5?.25:L>B-6?-.2:0;return .55+Q+_t},2.4),y=xi(64,64,(v,L)=>.22+(Math.sin(v*.7)*.5+.5)*.12+(L%9===0?.08:0)),k=vi(128,128,(v,L,F)=>{const B=Math.sin(v/F*Math.PI*5)*.2,Q=Math.sin(v*.85)*.04+Math.sin(L*1.15)*.03,_t=v%8===0?-.05:0;return .55+B+Q+_t},3.6),D=xi(128,128,(v,L,F,B)=>.78+L/B*.1+(v%8===0?.06:0)),P=vi(256,256,(v,L)=>{const B=v%64,Q=L%64;return Math.min(B,Q,63-B,63-Q)<3?.05:.72+Math.sin(v*.17)*Math.sin(L*.13)*.06},4.5,8,6),N=xi(256,256,(v,L)=>Math.min(v%64,L%64,63-v%64,63-L%64)<3?.95:.78,8,6),w=vi(256,256,(v,L)=>Math.min(v%64,L%64,63-v%64,63-L%64)<4?0:.66,5,4,4),x=xi(256,256,(v,L)=>Math.min(v%64,L%64)<4?.96:.84,4,4),R=vi(128,128,(v,L)=>{const F=Math.sin(L*.42+Math.sin(v*.07)*2.4)*.14,B=v%22===0?-.08:0;return .5+F+B},3.1),U=xi(128,128,(v,L,F,B)=>.48+(Math.sin(L*.35)*.5+.5)*.22+L/B*.08),O=vi(128,128,(v,L,F,B)=>{const Q=Math.sin(v*1.6)*Math.sin(L*1.25)*.05,_t=Math.abs(L/B-.22)<.018?-.22:0;return .55+Q+_t},2.6),X=xi(128,128,(v,L,F,B)=>.62+(Math.sin(v*.4+L*.2)*.5+.5)*.2+L/B*.08),Y=ze(256,64,(v,L,F)=>{v.fillStyle="#3c362e",v.fillRect(0,0,L,F),v.fillStyle="#2e2924";for(let B=0;B<L;B+=32)v.fillRect(B,0,2,F);v.strokeStyle="#e6c56a",v.lineWidth=3,v.strokeRect(6,8,L-12,F-16),v.lineWidth=2,v.beginPath(),v.ellipse(L/2,F/2,30,18,0,0,Math.PI*2),v.stroke(),v.beginPath(),v.ellipse(L/2,F/2,16,9,0,0,Math.PI*2),v.stroke(),v.fillStyle="#f0d48a",v.beginPath(),v.arc(L/2,F/2,3.5,0,Math.PI*2),v.fill()}),Z=m_(),tt=g_();return{floor:i,wall:t,ceiling:n,wood:s,hazard:r,snow:a,pearl:o,pearlWorn:c,shinGrime:l,joint:h,gold:u,cloth:d,leather:f,trench:m,nave:_,naveLight:Z,courtLight:tt,trim:e,brushed:g,pearlNormal:p,pearlRough:E,goldNormal:T,goldRough:y,clothNormal:k,clothRough:D,floorNormal:P,floorRough:N,naveNormal:w,naveRough:x,woodNormal:R,woodRough:U,leatherNormal:O,leatherRough:X,seal:Y}}function m_(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="rgb(32,27,22)",n.fillRect(0,0,256,256);const s=(l,h)=>{const u=(l+7.6)/15.2,d=(-21.55-h)/13.2+.5;return[u*256,(1-d)*256]};n.fillStyle="rgb(12,10,8)";for(const[l,h]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]]){const[u,d]=s(l,h);n.fillRect(u-26,d-8,52,16)}const[r,a]=s(0,-27.55);n.fillRect(r-28,a-10,56,18),n.globalCompositeOperation="lighter";const o=(l,h,u,d)=>{const[f,m]=s(l,h),_=u*256,g=n.createRadialGradient(f,m,2,f,m,_);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=g,n.beginPath(),n.arc(f,m,_,0,Math.PI*2),n.fill()};o(-4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(-4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(-1.35,-27.15,.2,"rgba(255,186,90,1)"),o(1.35,-27.15,.2,"rgba(255,186,90,1)"),o(0,-27.5,.28,"rgba(220,160,70,0.55)"),n.fillStyle="rgba(255,214,170,0.16)",n.fillRect(256*.4,0,256*.2,256),n.globalCompositeOperation="source-over";const c=new ui(e);return c.colorSpace=hi,c.magFilter=nn,c.minFilter=Sn,c.anisotropy=4,c}function Ph(i,t){return[(i+16.05)/32.1,(-.25-t)/28.6+.5]}function g_(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="rgb(18,16,14)",n.fillRect(0,0,256,256);const s=(c,l)=>{const[h,u]=Ph(c,l);return[h*256,(1-u)*256]},r=(c,l,h,u)=>{const[d,f]=s(c-h/2,l-u/2),[m,_]=s(c+h/2,l+u/2),g=Math.min(d,m),p=Math.min(f,_);n.fillRect(g,p,Math.abs(m-d),Math.abs(_-f))};n.fillStyle="rgb(8,7,6)",r(0,-12.2,32,4.2),r(0,-2.2,4.6,.7),r(-1.75,2.05,1.8,.7),r(1.75,2.05,1.8,.7),r(-2.25,-.05,.7,3.6),r(2.25,-.05,.7,3.6);for(const[c,l]of[[-8,-6],[8,-6],[-8,6],[8,5.2]]){const[h,u]=s(c,l);n.beginPath(),n.arc(h,u,7,0,Math.PI*2),n.fill()}n.globalCompositeOperation="lighter";const a=(c,l,h,u)=>{const[d,f]=s(c,l),m=h*256,_=n.createRadialGradient(d,f,2,d,f,m);_.addColorStop(0,u),_.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=_,n.beginPath(),n.arc(d,f,m,0,Math.PI*2),n.fill()};a(0,1.2,.26,"rgba(255,244,220,0.62)"),a(0,1.2,.12,"rgba(255,250,240,0.45)"),a(0,-.05,.07,"rgba(198,214,216,0.4)"),a(-10,8.2,.09,"rgba(255,176,90,0.55)"),a(9.2,8.4,.08,"rgba(255,176,90,0.5)"),a(12.8,-5,.09,"rgba(255,168,70,0.6)"),a(-6,-9.2,.07,"rgba(255,196,130,0.28)"),a(4,-9.2,.07,"rgba(255,196,130,0.28)"),n.globalCompositeOperation="source-over";const o=new ui(e);return o.colorSpace=hi,o.magFilter=nn,o.minFilter=Sn,o.anisotropy=4,o.wrapS=kn,o.wrapT=kn,o}function vc(i,t,e="#16130f",n="#f4efe6"){const s=document.createElement("canvas");s.width=512,s.height=t?160:128;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,s.width,s.height),r.strokeStyle="#e2a23a",r.lineWidth=8,r.strokeRect(8,8,s.width-16,s.height-16),r.fillStyle=n,r.textAlign="center",r.textBaseline="middle",r.font="700 58px Trebuchet MS, sans-serif",r.fillText(i,s.width/2,t?68:s.height/2+2),t&&(r.font="600 28px Trebuchet MS, sans-serif",r.fillStyle="#e2a23a",r.fillText(t,s.width/2,118));const a=new ui(s);return a.colorSpace=Ve,a.anisotropy=4,a}function we(i){return new Be({envMapIntensity:.32,...i})}function bn(i){var t,e;return i!=null&&i.index&&((t=i.attributes)!=null&&t.uv)&&((e=i.attributes)!=null&&e.normal)&&!i.attributes.tangent&&i.computeTangents(),i}function ji(i,t,e){const n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n}function __(i){const t=p_(),e={floor:we({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.03}),wall:we({map:t.wall,roughness:.88,metalness:.03}),ceiling:we({map:t.ceiling,roughness:.96,metalness:0}),trim:we({map:t.trim,roughness:.74,metalness:.08}),metal:we({color:7172984,roughness:.38,metalness:.62}),wood:we({map:ji(t.wood,2,2),normalMap:ji(t.woodNormal,2,2),roughnessMap:ji(t.woodRough,2,2),roughness:1,metalness:.04}),runner:we({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:we({color:1315344,roughness:.9}),brass:we({map:ji(t.gold,2,2),normalMap:ji(t.goldNormal,2,2),roughnessMap:ji(t.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:we({color:5065016,roughness:.92}),glass:we({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:we({map:t.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};e.hazard.side=Ze,e.floor.normalScale.set(.7,.7),e.wood.normalScale.set(.85,.85),e.wood.side=Ze,e.brass.normalScale.set(.4,.4);const n=new Map;function s(A,I,b,G,$,ut,gt){const Ct=new Nt($,ut,gt);Ct.translate(I,b,G),n.has(A)||n.set(A,[]),n.get(A).push(Ct)}const r=[];let a=null;const o=3.6;let c=null;const l=we({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});l.side=Ze;const h=new Set(["pew-1","pew-2","pew-3","pew-4","altar","fountain-n","fountain-s-l","fountain-s-r","fountain-w","fountain-e"]);for(const A of dh){if(A.veil){c=new ot(new Nt(A.w,A.h,A.d),l),c.position.set(A.x,A.y,A.z),c.visible=!1,i.add(c);continue}if(A.door){a=new ae;const I=new ot(new Nt(A.w*.92,A.h*.98,A.d*.62),we({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),b=we({color:14012098,roughness:.66,metalness:.05});for(const gt of[-A.h*.18,A.h*.16]){const Ct=new ot(new Nt(A.w*.62,A.h*.28,.045),b);Ct.position.set(0,gt,A.d*.36),Ct.castShadow=!0,a.add(Ct)}const G=new ot(bn(new Nt(A.w,.16,A.d*.8)),e.brass);G.position.y=A.h*.42;const $=new ot(bn(new Nt(.14,A.h*.72,A.d*.78)),e.brass),ut=new ot(new xe(1.7,.5),new oe({map:vc("RADIO","WING","#1c140c","#f0d48a")}));ut.position.set(0,.35,A.d*.42),a.add(I,G,$,ut),a.position.set(A.x,A.y,A.z),i.add(a);continue}if(!h.has(A.id)){if(A.phaseGate){const I=new ot(new Nt(A.w,A.h,A.d),e.hazard);I.position.set(A.x,A.y,A.z),I.castShadow=!0,I.receiveShadow=!0,i.add(I),r.push(I);continue}s(A.mat,A.x,A.y,A.z,A.w,A.h,A.d)}}s("runner",0,.02,-1.2,2.6,.02,18),s("dark",-7.4,1.3,-13.15,6.4,2.6,.4),s("dark",-5.2,1.3,-13.15,2.4,2.6,.4),s("dark",5.4,1.3,-13.15,2.4,2.6,.4),s("dark",8.6,1.3,-13.15,6.4,2.6,.4),s("runner",0,.025,-21.4,1.5,.02,12),s("brass",0,2.55,-2.15,.12,3.5,.12),s("brass",0,4.15,-2.15,1.35,.08,1.35),s("plant",-3.3,.28,-2.5,.7,.45,.7),s("plant",3.35,.28,1.4,.7,.45,.7),s("plant",-3.2,.55,2.4,.45,.7,.45),s("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const A of[-12,-4,4,12])for(const I of[-8,0,8])s("metal",A,6.85,I,1.6,.08,.28);for(let A=-14;A<=14;A+=2.2)s("metal",A,4.55,-10.45,.06,.7,.06);s("metal",0,4.55,-10.45,28,.05,.05);for(const[A,I]of n){const b=I.length===1?I[0]:Eh(I);e[A].normalMap&&bn(b);const G=new ot(b,e[A]);G.castShadow=A!=="floor"&&A!=="ceiling"&&A!=="runner",G.receiveShadow=!0,i.add(G)}const u=we({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.05});u.normalScale.set(.55,.55);const d=u.clone();d.lightMap=t.courtLight,d.lightMapIntensity=.48;const f=e.trim.clone();f.lightMap=t.courtLight,f.lightMapIntensity=.42;const m=e.brass.clone();m.lightMap=t.courtLight,m.lightMapIntensity=.28;const _=e.wall.clone();_.lightMap=t.courtLight,_.lightMapIntensity=.55,_.polygonOffset=!0,_.polygonOffsetFactor=-1,_.polygonOffsetUnits=-1;const g=e.floor.clone();g.lightMap=t.courtLight,g.lightMapIntensity=.64,g.polygonOffset=!0,g.polygonOffsetFactor=-1,g.polygonOffsetUnits=-1;const p=new W;function E(A){A.updateMatrixWorld(!0);const I=A.geometry.attributes.position,b=new Float32Array(I.count*2);for(let G=0;G<I.count;G++){p.fromBufferAttribute(I,G).applyMatrix4(A.matrixWorld);const $=Ph(p.x,p.z);b[G*2]=$[0],b[G*2+1]=$[1]}return A.geometry.setAttribute("uv2",new ke(b,2)),A}function T(A,I,b,G,$){I.normalMap&&bn(A);const ut=new ot(A,I);return ut.position.set(b,G,$),ut.castShadow=!0,ut.receiveShadow=!0,i.add(ut),ut}function y(A,I,b,G,$,ut){E(T(new Nt(G,$*.78,ut*.92),d,A,I-$*.08,b)),E(T(new Nt(G*1.04,$*.18,ut*1.08),f,A,I+$*.4,b))}y(0,.4,-2.2,4.5,.8,.5),y(-1.75,.4,2.05,1.7,.8,.5),y(1.75,.4,2.05,1.7,.8,.5),y(-2.25,.4,-.05,.5,.8,3.55),y(2.25,.4,-.05,.5,.8,3.55);const k=we({map:t.trim,roughness:.55,metalness:.18,envMapIntensity:.45,lightMap:t.courtLight,lightMapIntensity:.5}),D=T(new qn([new Et(.15,.04),new Et(.7,.06),new Et(1.15,.1),new Et(1.38,.28),new Et(1.22,.4),new Et(1.05,.34)],32),k,0,.02,-.05);D.castShadow=!0,E(D);const P=new ot(new Ye(1.28,.045,8,28),m);P.rotation.x=Math.PI/2,P.position.set(0,.36,-.05),P.castShadow=!0,i.add(P),E(P),E(T(new ie(.06,.09,.34,12),m,0,.22,-.05));const N=we({color:1977392,roughness:.08,metalness:.62,envMapIntensity:.9,lightMap:t.courtLight,lightMapIntensity:.4}),w=new ot(new ai(1.05,28),N);w.rotation.x=-Math.PI/2,w.position.set(0,.16,-.05),w.receiveShadow=!0,i.add(w),E(w);const x=new ot(new xe(32.1,28.6),g);x.rotation.x=-Math.PI/2,x.position.set(0,.016,-.25),x.receiveShadow=!0,x.castShadow=!1,i.add(x),E(x),x.geometry.attributes.tangent==null&&g.normalMap&&bn(x.geometry);function R(A,I,b,G,$,ut,gt){const Ct=new ot(A,_);Ct.position.set(I,b,G),Ct.rotation.y=$,Ct.castShadow=!1,Ct.receiveShadow=!0,i.add(Ct),E(Ct);const Ut=Ct.geometry.attributes.uv;for(let Pt=0;Pt<Ut.count;Pt++)Ut.setXY(Pt,Ut.getX(Pt)*ut,Ut.getY(Pt)*gt);return Ut.needsUpdate=!0,Ct}R(new xe(28.4,6.3),-15.95,3.25,-.25,Math.PI/2,6,2),R(new xe(28.4,6.3),15.95,3.25,-.25,-Math.PI/2,6,2),R(new xe(31.6,6.3),0,3.25,13.95,Math.PI,8,2),R(new xe(14,6.3),-8.9,3.25,-14.05,0,4,2),R(new xe(14,6.3),8.9,3.25,-14.05,0,4,2);const U=new ot(new xe(6.4,8.2),new oe({color:16774114}));U.rotation.x=Math.PI/2,U.position.set(0,7.12,1.2),U.castShadow=!1,U.receiveShadow=!1,i.add(U);const O=new ot(new ie(.55,.7,.12,12),e.brass);O.position.set(0,4.28,-2.15),O.rotation.x=.55,O.castShadow=!0,i.add(O);const X=new ot(new xe(1.15,.7),new oe({color:16757066}));X.position.set(10.7,1.85,-5.1),X.rotation.y=-Math.PI/2,i.add(X);const Y=new ot(new xe(1.7,1.7),we({map:t.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));Y.rotation.x=-Math.PI/2,Y.position.set(9.45,.03,0),Y.receiveShadow=!0,i.add(Y);const Z=new ot(new Nt(5.4,2.2,.06),e.glass);Z.position.set(9.4,1.8,8.7),i.add(Z);const tt=new ot(new Nt(.7,.45,.06),new oe({map:t.snow}));tt.position.set(9.2,1.25,8.72),i.add(tt);const v=tt.clone();v.position.x=10.15,i.add(v);const L=new ot(new Nt(.08,.08,.08),new oe({color:16757066}));L.position.set(10.55,1.55,8.7),i.add(L);function F(A,I,b,G,$,ut,gt,Ct,Ut,Pt){const se=new ot(new xe(ut,gt),new oe({map:vc(A,I,Ut,Pt),transparent:!1}));return se.position.set(b,G,$),se.rotation.y=Ct,i.add(se),se}F("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),F("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),F("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),F("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),F("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),F("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),F("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),F("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),F("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),F("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),F("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),F("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),F("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a");const B=new ot(new xe(3.15,.34),we({map:t.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));B.receiveShadow=!0,B.rotation.x=-Math.PI/2,B.position.set(0,.045,Ds),i.add(B);const Q=fh[0],_t=we({map:t.gold,normalMap:t.goldNormal,roughnessMap:t.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),K=new ae,ht=new ot(bn(new qn([new Et(.05,-.28),new Et(.09,-.08),new Et(.16,.08),new Et(.28,.24),new Et(.34,.32),new Et(.3,.36)],20)),_t);ht.rotation.z=-Math.PI/2,ht.castShadow=!0;const nt=new ot(new ai(.26,16),we({color:2761752,roughness:.45,metalness:.4}));nt.rotation.y=Math.PI/2,nt.position.x=.34;const st=new ot(bn(new ie(.055,.07,.36,12)),e.brass);st.rotation.z=Math.PI/2,st.position.x=-.42;const pt=new ot(bn(new Nt(.06,.36,.28)),e.brass);pt.position.set(-.62,0,0),pt.castShadow=!0;const St=new ot(bn(new Nt(.1,.08,.16)),e.brass);St.position.set(-.62,-.2,0);const et=new ot(new ge(.07,12,10),new oe({color:16757066}));et.position.x=.28;const Jt=new ot(new Ye(.55,.03,8,24),new oe({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));Jt.rotation.y=Math.PI/2,K.add(ht,nt,st,pt,St,et,Jt);for(const[A,I]of[[-.05,.1],[.08,.16],[.2,.26]]){const b=new ot(new Ye(I,.012,6,16),e.brass);b.rotation.y=Math.PI/2,b.position.x=A,b.castShadow=!0,K.add(b)}K.position.set(Q.x,Q.y,Q.z),i.add(K);const Dt=new Ns(16757082,7,5.5,2);Dt.position.set(Q.x+.4,Q.y,Q.z),i.add(Dt);function Xt(A,I){const b=new ot(new ie(.035,.05,.46,6),e.brass);b.position.set(A,.28,I);const G=new ot(new ge(.045,6,6),new oe({color:16757066}));G.position.set(A,.54,I),i.add(b,G)}Xt(-4.9,-18.2),Xt(4.9,-18.2),Xt(-4.9,-20.45),Xt(4.9,-20.45),Xt(-1.35,-27.15),Xt(1.35,-27.15);const z=new ot(new xe(15.2,13.2),we({map:t.nave,normalMap:t.naveNormal,roughnessMap:t.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));z.material.normalScale.set(.8,.8),z.material.lightMap=t.naveLight,z.material.lightMapIntensity=.72,bn(z.geometry),z.geometry.setAttribute("uv2",z.geometry.attributes.uv.clone()),z.rotation.x=-Math.PI/2,z.position.set(0,.018,-21.55),z.receiveShadow=!0,i.add(z);const Qt=e.wood.clone();Qt.lightMap=t.naveLight,Qt.lightMapIntensity=.7;const kt=u.clone();kt.lightMap=t.naveLight,kt.lightMapIntensity=.66;const Ft=e.brass.clone();Ft.lightMap=t.naveLight,Ft.lightMapIntensity=.45;const Mt=e.wall.clone();Mt.lightMap=t.naveLight,Mt.lightMapIntensity=.85,Mt.polygonOffset=!0,Mt.polygonOffsetFactor=-1,Mt.polygonOffsetUnits=-1;const Yt=new W;function yt(A,I,b,G,$){const ut=A.clone(),gt=T(ut,I,b,G,$);gt.updateMatrixWorld(!0);const Ct=ut.attributes.position,Ut=new Float32Array(Ct.count*2);for(let Pt=0;Pt<Ct.count;Pt++)Yt.fromBufferAttribute(Ct,Pt).applyMatrix4(gt.matrixWorld),Ut[Pt*2]=(Yt.x+7.6)/15.2,Ut[Pt*2+1]=(-21.55-Yt.z)/13.2+.5;return ut.setAttribute("uv2",new ke(Ut,2)),gt}const C=yt(new xe(14.2,6.2),Mt,-8.08,3.15,-21.75);C.rotation.y=Math.PI/2;const M=yt(new xe(14.2,6.2),Mt,8.08,3.15,-21.75);M.rotation.y=-Math.PI/2;const q=yt(new xe(15.4,6.2),Mt,0,3.15,-28.72);for(const A of[C,M,q]){A.castShadow=!1,A.updateMatrixWorld(!0);const I=A.geometry.attributes.position,b=A.geometry.attributes.uv2.array,G=A.geometry.attributes.uv;for(let $=0;$<I.count;$++)Yt.fromBufferAttribute(I,$).applyMatrix4(A.matrixWorld),b[$*2]=(Yt.x+7.6)/15.2,b[$*2+1]=(-21.55-Yt.z)/13.2+.5,G.setXY($,G.getX($)*4,G.getY($)*2);A.geometry.attributes.uv2.needsUpdate=!0,G.needsUpdate=!0}const it=new ie(.028,.028,2.28,10);it.rotateZ(Math.PI/2);const at=new ie(.03,.03,2.32,12);at.rotateZ(Math.PI/2);const J=new ie(.62,.62,2.22,16,1,!0,-.42,.84);J.rotateZ(Math.PI/2);function Lt(A,I){yt(new Nt(2.32,.05,.32),Qt,A,.46,I-.04),yt(at,Qt,A,.45,I-.2);for(const G of[-1.02,1.02])yt(new Nt(.055,.4,.05),Qt,A+G,.22,I-.12),yt(new Nt(.055,.4,.05),Qt,A+G,.22,I+.06);for(const G of[-1.2,1.2])yt(new Nt(.07,.82,.4),Qt,A+G,.44,I+.02);const b=yt(J,Qt,A,.68,I-.36);b.castShadow=!0,yt(it,Qt,A,.9,I+.2),yt(new Nt(2.05,.028,.1),Qt,A,.3,I+.04),yt(new Nt(1.9,.035,.07),Qt,A,.16,I-.02)}for(const[A,I]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])Lt(A,I);yt(new Nt(2.15,.16,.62),kt,0,.1,-27.55),yt(new Nt(1.82,.2,.5),kt,0,.27,-27.55),yt(new Nt(1.5,.18,.4),kt,0,.45,-27.55),yt(new Nt(2.2,.07,.66),Ft,0,.62,-27.55);const mt=T(new Nt(1.35,.32,.035),e.brass,0,.36,-27.26);mt.position.z=-27.26;const vt=new ot(new Ye(.15,.016,8,20),e.brass);vt.position.set(0,.38,-27.22),i.add(vt);for(const A of[-.72,.72]){T(new ie(.028,.04,.22,8),e.brass,A,.76,-27.52);const I=new ot(new ge(.035,8,6),new oe({color:16757066}));I.position.set(A,.9,-27.52),I.castShadow=!1,i.add(I)}const Ot=document.createElement("canvas");Ot.width=64,Ot.height=64;const ct=Ot.getContext("2d"),wt=ct.createRadialGradient(32,32,4,32,32,32);wt.addColorStop(0,"rgba(0,0,0,0.38)"),wt.addColorStop(1,"rgba(0,0,0,0)"),ct.fillStyle=wt,ct.fillRect(0,0,64,64);const zt=new ui(Ot),Gt=new oe({map:zt,transparent:!0,depthWrite:!1});function At(A,I,b){const G=new ot(new ai(A,18),Gt);G.rotation.x=-Math.PI/2,G.position.set(I,.028,b),i.add(G)}At(1.7,0,-.05),At(1.3,0,-27.55);for(const[A,I]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])At(1.2,A,I);const te=yo.find(A=>A.kind==="signal"),qt=yo.find(A=>A.kind==="health"),jt=new ae,H=new ot(new Nt(.38,.28,.38),e.brass),xt=new ot(new Nt(.16,.16,.16),new oe({color:16757066}));xt.position.y=.22,jt.add(H,xt),jt.position.set(te.x,.35,te.z),i.add(jt);const j=new ae,lt=new ot(new Nt(.36,.22,.26),we({color:15196888,roughness:.6})),Rt=new ot(new Nt(.22,.04,.28),we({color:9255466,roughness:.5}));Rt.position.y=.08,j.add(lt,Rt),j.position.set(qt.x,.2,qt.z),i.add(j);const bt=new ie(.055,.055,.2,8),Zt=new ie(.03,.03,.04,8),rt=new ie(.46,.5,.06,20),dt=new Ye(.5,.045,6,24),ft=new ai(.58,24),It=new Be({color:2761756,roughness:.45,metalness:.35}),Ht=new oe({color:6813439}),Me=new Map;function He(A){A.traverse(I=>{I.castShadow=!1,I.receiveShadow=!1})}function Ie(){const A=new ae,I=new ot(bt,It),b=new ot(Zt,Ht);return b.position.y=.12,A.add(I,b),He(A),i.add(A),A}function pn(){const A=new ae,I=new Be({color:15260872,roughness:.4,metalness:.14,emissive:16757082,emissiveIntensity:.42}),b=new ot(rt,I);b.position.y=.04;const G=new ot(dt,new oe({color:16769712}));G.rotation.x=Math.PI/2,G.position.y=.075;const $=new oe({color:16762218,transparent:!0,opacity:.9,depthWrite:!1}),ut=new ot(ft,$);ut.rotation.x=-Math.PI/2,ut.position.y=.025;const gt=new ae,Ct=new ot(bt,It),Ut=new ot(Zt,Ht);return Ut.position.y=.12,gt.add(Ct,Ut),gt.position.y=.24,A.add(ut,b,G,gt),He(A),A.userData={disc:b,glow:ut,cell:gt},i.add(A),A}const Pn=new Jm(15261908,3813928,.74);i.add(Pn);const ye=new ec(16773596,2.35);ye.position.set(8,18,10),ye.castShadow=!0,ye.shadow.mapSize.set(1024,1024),ye.shadow.camera.near=2,ye.shadow.camera.far=48,ye.shadow.camera.left=-16,ye.shadow.camera.right=16,ye.shadow.camera.top=16,ye.shadow.camera.bottom=-16,ye.shadow.bias=-4e-4,ye.shadow.normalBias=.035,ye.shadow.radius=2,ye.target.position.set(0,0,-8),i.add(ye,ye.target);const je=new ec(16769732,.7);je.position.set(-10,8,-6),je.castShadow=!1,i.add(je);const mn=[];function be(A,I,b,G=36,$=8){const ut=new Ns(16757082,G,$,2);return ut.position.set(A,I,b),i.add(ut),mn.push(ut),ut}be(0,3.2,-2.1,18,7),be(-10,2.4,8.2,28,8),be(9.2,2.6,8.4,26,7),be(13.5,2.8,-5,34,8),be(-6,3.4,-8,22,8),be(4,3.4,-8,20,8),be(0,5.2,2,30,14),be(0,4.4,-21.5,34,16),be(0,3.3,-26.4,16,7);const _e=be(13.4,2.6,1.2,24,6);let Te=0,gn=0,Ae=!1,Re=!1,S=0,V=0;return i.background=new Kt(11774879),i.fog=new ko(11774879,12,40),{colliders:ph(),gates:r,cache:jt,aid:j,textures:t,setDoor(A,I=!1){gn=A?1:0,I&&(Te=gn,a&&(a.position.y=o+Te*6.4))},setVeil(A,I){if(!c||(c.visible=!!A,!A))return;const b=I==="DEAD_AIR";l.opacity=b?.16:.94,l.depthWrite=!b,l.emissiveIntensity=b?.62:.3},setHijack({aimed:A,hot:I}){Ae=!!A,Re=!!I},pulseHijack(){S=.48},setChannel(A){const I=i.fog;A==="STATIC"?(I.color.setHex(10133668),I.near=12,I.far=38,i.background.setHex(9475738)):A==="DEAD_AIR"?(I.color.setHex(2764856),I.near=10,I.far=36,i.background.setHex(2369584)):(I.color.setHex(11774879),I.near=12,I.far=40,i.background.setHex(11774879));for(const b of r)b.material.opacity=A==="DEAD_AIR"?.14:.97,b.material.depthWrite=A!=="DEAD_AIR",b.material.emissiveIntensity=A==="DEAD_AIR"?.45:.18},setPickup(A,I){A==="cache"&&(jt.visible=I),A==="aid"&&(j.visible=I)},syncCells(A,I=V){const b=new Set;for(const G of A){if(G.kind!=="battery")continue;b.add(G.id);let $=Me.get(G.id);$||($=G.pad?pn():Ie(),Me.set(G.id,$));const ut=Math.sin(I*2.2+G.x)*.03;if(G.pad){$.visible=!0,$.position.set(G.x,0,G.z);const gt=!G.taken,Ct=G.respawnAt==null?0:Math.max(0,G.respawnAt-I),Ut=gt?1:cn(1-Ct/Wt.padRespawn,0,1);$.userData.cell.visible=gt,$.userData.cell.position.y=.24+ut,$.userData.disc.material.emissiveIntensity=gt?.85:.2+Ut*.9,$.userData.glow.material.opacity=gt?.92:.28+Ut*.6,$.userData.glow.scale.setScalar(gt?1:.7+Ut*.3)}else $.visible=!G.taken,$.position.set(G.x,.28+ut,G.z)}for(const[G,$]of Me)b.has(G)||($.visible=!1)},update(A,I,b){if(b){const ut=Math.round(b.x/4)*4,gt=Math.round(b.z/4)*4;ye.position.set(ut+8,18,gt+10),ye.target.position.set(ut,0,gt)}const G=Math.min(.05,Math.max(0,A-V||0));if(V=A,Te+=(gn-Te)*Math.min(1,G*4.2),a&&(a.position.y=o+Te*6.4),S>0&&(S=Math.max(0,S-G)),Jt.material.opacity=S>0?S/.48:0,Jt.scale.setScalar(S>0?1+(1-S/.48)*2.4:1),_t.emissive.setHex(Re?16774877:13939034),_t.emissiveIntensity=Re?1.15:Ae?.85:.12,et.material.color.setHex(Re?16773576:16757066),Dt.color.setHex(Re?16769696:16757082),Dt.intensity=Re?22:Ae?14:7,_e.intensity=18+Math.sin(A*28)*10+(Math.random()<.04?-12:0),I==="STATIC"){const $=1+Math.sin(A*6)*.08;jt.scale.setScalar($)}else jt.scale.setScalar(1);X.material.color.setHSL(.09,.85,I==="DEAD_AIR"?.18:.55)},practicals:mn}}function v_(i,t){const e=new Vr;e.background=new Kt(2893343);const n=new ot(new Nt(18,9,18),new oe({color:2893343,side:We}));e.add(n);const s=new ot(new xe(18,18),new oe({color:3814188}));s.rotation.x=-Math.PI/2,s.position.y=-1.6,e.add(s);const r=new W(0,1.6,-20),a=[[-4.9,.55,-18.2],[4.9,.55,-18.2],[-4.9,.55,-20.45],[4.9,.55,-20.45],[-1.35,.95,-27.15],[1.35,.95,-27.15]],o=new oe({color:16757066});for(const[h,u,d]of a){const f=new ot(new ge(.22,10,8),o);f.position.set(h-r.x,u-r.y,d-r.z),e.add(f)}const c=new ot(new Nt(2.3,1.1,.7),new oe({color:13017434}));c.position.set(0,.55-r.y,-27.55-r.z),e.add(c);const l=new ot(new Ye(.7,.06,8,24),new oe({color:15123818}));return l.position.set(0,2.2-r.y,-26.55-r.z),e.add(l),t.fromScene(e,.04).texture}function x_(i,t){const e=new Vr;e.background=new Kt(13156274);const n=new ot(new Nt(34,12,30),new oe({color:13156274,side:We}));e.add(n);const s=new W(0,1.55,.2),r=new ot(new xe(34,30),new oe({color:6972248}));r.rotation.x=-Math.PI/2,r.position.y=-s.y,e.add(r);const a=new ot(new xe(8,10),new oe({color:16774888}));a.rotation.x=Math.PI/2,a.position.set(0,6.9-s.y,1.2-s.z),e.add(a);const o=new ot(new ai(1.15,20),new oe({color:1977392}));o.rotation.x=-Math.PI/2,o.position.set(0,.2-s.y,-.05-s.z),e.add(o);const c=new ot(new Ye(1.3,.08,8,24),new oe({color:13017434}));c.rotation.x=Math.PI/2,c.position.set(0,.4-s.y,-.05-s.z),e.add(c);const l=new oe({color:16757066});for(const[h,u,d]of[[-10,2.3,8.2],[9.2,2.3,8.4],[13.2,1.9,-5]]){const f=new ot(new ge(.55,10,8),l);f.position.set(h-s.x,u-s.y,d-s.z),e.add(f)}return t.fromScene(e,.04).texture}const xc="channel-surfer-best",M_={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},y_={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function Mc(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function yc(i,t,e,n){return i+(t-i)*(1-Math.exp(-12*n))}function Pa(i,t){const e=Math.cos(t),n=Math.sin(t),s=Math.sin(i),r=Math.cos(i),a={x:-s*e,y:n,z:-r*e},o={x:r,y:0,z:-s},c={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:c}}function S_(i,t){const e=new Wm({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(960,780,!1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.outputColorSpace=Ve,e.toneMapping=Uc,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Cc;const n=new Vr,s=new vo(e);n.environment=s.fromScene(new eg,.012).texture;const r=v_(e,s),a=x_(e,s);s.dispose();const o=new on(72,960/780,.08,90);n.add(o);const c=new Ns(16770756,14,4.5,2);c.position.set(.05,.02,-.25),o.add(c);const l=__(n),h=new ri(n,o,480,390,8);h.kernelRadius=.18,h.minDistance=.001,h.maxDistance=.06;const u=t_(n,l.textures,{aisle:r,court:a}),d=f_(o,l.textures),f=72,m=new Float32Array(f*3),_=new Float32Array(f*3),g=new Ce;g.setAttribute("position",new ke(m,3)),g.setAttribute("color",new ke(_,3));const p=new jm(g,new hh({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));n.add(p);const E=document.createElement("canvas");E.width=64,E.height=64;const T=E.getContext("2d"),y=T.createRadialGradient(32,32,1,32,32,30);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.35,"rgba(255,214,150,0.75)"),y.addColorStop(1,"rgba(255,160,60,0)"),T.fillStyle=y,T.fillRect(0,0,64,64);const k=new ui(E);k.colorSpace=Ve;const D=[];for(let rt=0;rt<12;rt++){const dt=new qm(new oh({map:k,transparent:!0,depthWrite:!1,blending:Pr}));dt.visible=!1,dt.frustumCulled=!1,n.add(dt),D.push(dt)}const P=28,N=new Float32Array(P*6),w=new Float32Array(P*6),x=new Ce;x.setAttribute("position",new ke(N,3)),x.setAttribute("color",new ke(w,3)),n.add(new Km(x,new ch({vertexColors:!0,transparent:!0,opacity:.95})));let R="title",U=null,O=[],X=null,Y=[],Z=[],tt=!1,v=!1,L=!1,F=1.25,B=0,Q=0,_t=!1,K="",ht="",nt="",st=[],pt=[],St=[],et={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},Jt=Mc(1),Dt=0,Xt=0,z=0,Qt=0,kt=0,Ft=0,Mt=0,Yt="",yt=0,C=0,M="",q=0;const it=[],at=new Set;let J=0,Lt="",mt=!1;try{J=Number(localStorage.getItem(xc))||0}catch(rt){J=0}function vt(rt,dt,ft,It,Ht){for(let Me=0;Me<Ht;Me++)st.push({x:rt,y:dt,z:ft,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:It});st.length>f&&st.splice(0,st.length-f),pt.push({x:rt,y:dt,z:ft,life:.14,max:.14,color:It}),pt.length>D.length&&pt.shift()}function Ot(rt){Yt=rt,yt=.95,C+=1}function ct(rt,dt){at.has(rt)||(at.add(rt),it.push(dt))}function wt(rt){Lt!==rt&&(Lt=rt,l.setChannel(rt),d.setChannel(rt),t.setChannel(rt))}function zt(){return ph({doorOpen:tt,veilUp:!!(X&&X.alive&&X.veilUp)})}function Gt(rt){return{x:rt.x,y:rt.y,z:rt.z,yaw:rt.yaw||0,pitch:0,vx:0,vz:0}}function At(){U=ic(),O=[...gh(),...Fr()],X=gc(),Y=nc(),tt=!1,v=!1,L=!1,F=1.25,B=0,Q=0,_t=!1,K="",ht="",nt="",Z=[],st=[],pt=[],St=[],et=Gt(cg),Jt=Mc((Date.now()&65535)+3),Dt=0,z=0,Qt=.2,kt=0,Ft=0,Mt=0,mt=!1,Yt="",yt=0,M="",q=0,it.length=0,at.clear(),u.reset(O),u.resetPriest(X),l.setDoor(!1,!0),l.setVeil(!1,"LIVE"),wt("LIVE")}function te(){U={...ic(),signal:80},O=[...O.filter(dt=>dt.room!=="chapel"),...Fr().map(dt=>({...dt,dormant:!1}))],X={...gc(),active:!0};const rt=nc();Y=[...Y.filter(dt=>dt.z>-14.5),...rt.filter(dt=>dt.z<-14.5)],tt=!0,L=!1,F=1.25,B=0,Q=0,_t=!1,K="",ht="",nt="",Z=[],st=[],pt=[],St=[],et=Gt(hg),Qt=.45,mt=!1,v=!1,Mt=0,Ft=0,kt=0,u.reset(O),u.resetPriest(X),l.setDoor(!0,!0),l.setVeil(!1,"LIVE"),wt("LIVE"),Ot("RADIO WING")}At();function qt(){if(Dt>0&&!(J>0&&Dt>=J)){J=Dt;try{localStorage.setItem(xc,String(J))}catch(rt){}}}function jt(rt,dt){const ft=xg(U,rt);ft.result==="ok"?(U=ft.state,z+=1,Mt=.45,Ot(M_[U.channel]+" · "+Or(U.channel).name),t.play(y_[U.channel]),wt(U.channel)):ft.result==="denied"&&(Ot("NO SIGNAL"),t.play("deny"))}function H(){const rt=sc(U);if(U=rt.state,!rt.fired)return;const{forward:dt,right:ft,up:It}=Pa(et.yaw,et.pitch),Ht={x:et.x,y:et.y,z:et.z},Me=Fg(dt,ft,It,rt.profile.pellets,rt.profile.spread,Math.random),He={x:Ht.x+dt.x*.42+ft.x*.14-It.x*.1,y:Ht.y+dt.y*.42+ft.y*.14-It.y*.1,z:Ht.z+dt.z*.42+ft.z*.14-It.z*.1},Ie=Dt<B,pn=rt.profile.kind==="hitscan"?[.45,.97,1]:rt.profile.kind==="phase"?[.74,.8,.84]:[.9,.9,.9],Pn=Ie?[.45,.97,1]:pn,ye=zt();let je=!1,mn=!1;kt=Math.min(.07,kt+(rt.profile.kind==="spread"?.05:rt.profile.kind==="phase"?.03:.014)),d.fire(rt.profile.kind),t.play(rt.profile.kind==="spread"?"static":rt.profile.kind==="phase"?"phase":"live");for(const be of Me){const _e=Lg(Ht,be,rt.profile.range,O,ye,{phase:rt.profile.phases}),Te=X.alive?l_(Ht,be,rt.profile.range,X,U.channel):null,gn=!!(Te&&(!_e||Te.t<_e.t)),Ae=gn?Te:_e,Re=Math.min(rt.profile.range,22),S=Ae?{x:Ae.x,y:Ae.y,z:Ae.z}:{x:Ht.x+be.x*Re,y:Ht.y+be.y*Re,z:Ht.z+be.z*Re};if((!Ae||Ae.t>.45)&&St.push({a:He,b:S,color:Pn,life:.16}),gn){const G=ac(rt.profile.damage,Te.t,rt.profile.range,rt.profile.falloff)*(Ie?si.retuneMult:1),$=o_(X,G);if(X=$.priest,$.dealt>0&&(je=!0),vt(Te.x,Te.y,Te.z,Ie?[.45,.97,1]:[.96,.94,.88],5),!$.killed){const ut=_c(X,{channel:U.channel,weak:Te.weak,halo:Te.halo,crossed:!1});ut.broken?(j(ut),mn=!0):X=ut.priest}continue}if(!_e)continue;if(_e.kind==="world"){vt(_e.x,_e.y,_e.z,[.75,.68,.55],6);continue}const V=O.findIndex(G=>G.id===_e.id);if(V<0||!O[V].alive)continue;const A=Ug(O[V],Dt),I=ac(rt.profile.damage,_e.t,rt.profile.range,rt.profile.falloff)*(Ie?si.retuneMult:1),b=Ng(A.enemy,{weak:_e.weak,damage:I});if(b.enemy.hurt=.1,O[V]=b.enemy,je=b.dealt>0,vt(_e.x,_e.y,_e.z,[.96,.94,.9],8),b.killed){const G=Rg(U,{distance:_e.t,channel:U.channel,burst:A.burst});U=G.state,xt(b.enemy),vt(_e.x,_e.y,_e.z,[1,.68,.25],18),t.play("death"),Ot(G.aggressive?"AGGRESSIVE +"+G.amount:"SIGNAL +"+G.amount)}}je&&!mn&&t.play("hit"),St.length>P&&St.splice(0,St.length-P)}function xt(rt){const dt="drop-"+rt.id;Y.some(ft=>ft.id===dt)||Y.push(Eg(rt))}function j(rt){X=rt.priest,rt.broken&&(t.play("rite-break"),vt(X.x,2.15,X.z,[.96,.78,.32],20),Mt=Math.max(Mt,.34),X.alive&&Ot("RITE BROKEN"))}function lt(){const rt=X.x,dt=1.72,ft=X.z,It=et.x-rt+(Jt()-.5)*.22,Ht=1.15-dt+(Jt()-.5)*.12,Me=et.z-ft+(Jt()-.5)*.22,He=Math.hypot(It,Ht,Me)||1,Ie=ln.boltSpeed;return{x:rt,y:dt,z:ft,vx:It/He*Ie,vy:Ht/He*Ie,vz:Me/He*Ie,damage:ln.boltDamage,life:2.6}}function Rt(rt,dt){const ft=Mg(U,rt);if(U=ft.state,ft.forced&&(Ot("NO SIGNAL"),t.play("nosignal"),Mt=.55,wt(U.channel)),dt.channel)jt(dt.channel);else if(dt.cycle){const b=cn(dt.cycle,-3,3),G=b>0?1:-1;for(let $=0;$!==b;$+=G)jt(_g(U.channel,G))}et.yaw-=dt.lookX*.00215,et.pitch=cn(et.pitch-dt.lookY*.00215,-1.35,1.35);const It=O.some(b=>b.alive&&b.room!=="chapel");if(!tt&&!It&&(tt=!0,U=rc(U),Ot("RADIO WING"),t.play("door"),ct("wing","North door is open. The radio wing is still on the air.")),tt&&et.z<-15.05){for(let b=0;b<O.length;b++)O[b].room==="chapel"&&O[b].dormant&&(O[b]={...O[b],dormant:!1});X.active||(X={...X,active:!0},ct("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}const Ht=fh[0],{forward:Me}=Pa(et.yaw,et.pitch),He=!Sh(et.x,et.y,et.z,Ht.x,Ht.y,Ht.z,zt());_t=c_({origin:{x:et.x,y:et.y,z:et.z},dir:Me,point:Ht,maxDist:si.maxDist,cone:si.cone,blocked:He}).aimed;const pn=Dt<B,Pn=Q>Dt;if(_t?K=pn?"PA RETUNED":Pn?"PA RECHARGING":"E  RETUNE PA":K=pn?"PA RETUNED":"",ht=pn?"hot":_t&&Pn?"cool":_t?"ready":"",dt.use&&_t){const b=h_({cooldownUntil:Q},Dt);b.ok?(Q=b.cooldownUntil,B=Dt+si.retune,O=u_(O,Ht,si.radius,si.stun),U=Sg(U).state,Ot("PA RETUNE"),t.play("hijack"),vt(Ht.x,Ht.y,Ht.z,[.45,.97,1],28),Mt=Math.max(Mt,.28),Ft=Math.max(Ft,.035),l.pulseHijack()):t.play("deny")}tt&&Math.hypot(et.x-Ht.x,et.z-Ht.z)<8&&ct("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const ye=r_(X,rt,{player:{x:et.x,z:et.z}});X=ye.priest;for(const b of ye.events)if(b.type==="announce")Ot(mc(b.rite)),t.play("rite");else if(b.type==="fail"){const G=oc(U,b.damage);U=G.state,G.hit&&(t.play("rite-fail"),Ft=Math.max(Ft,.045)),Ot("RITE HOLDS")}else b.type==="shot"&&Z.length<16&&(Z.push(lt()),t.play("bolt"));nt=X.alive&&X.phase==="rite"?mc(X.rite):"";const je=zt();for(let b=0;b<O.length;b++){if(!O[b].alive)continue;const G=kg(O[b],rt,{channel:U.channel,player:{x:et.x,y:1.2,z:et.z},colliders:je,allies:O,rng:Jt});O[b]=G.enemy,G.shot&&Z.length<16&&(Z.push(G.shot),t.play("bolt"))}const mn=_h(U.channel),be=-Math.sin(et.yaw),_e=-Math.cos(et.yaw),Te=Math.cos(et.yaw),gn=-Math.sin(et.yaw);let Ae=0,Re=0;dt.forward&&(Ae+=be,Re+=_e),dt.back&&(Ae-=be,Re-=_e),dt.right&&(Ae+=Te,Re+=gn),dt.left&&(Ae-=Te,Re-=gn);const S=Math.hypot(Ae,Re);S>0&&(Ae=Ae/S*mn,Re=Re/S*mn),et.vx=yc(et.vx,Ae,12,rt),et.vz=yc(et.vz,Re,12,rt);const V=Mh(et.x,et.z,et.vx*rt,et.vz*rt,Wt.playerRadius,je,U.channel,lg);if(et.x=V.x,et.z=V.z,X.alive&&X.phase==="rite"&&X.rite==="veil"&&U.channel==="DEAD_AIR"&&et.z<ug){const b=_c(X,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});b.broken&&j(b)}if(Qt>0)Qt-=rt;else if(dt.fireDown){const b=sc(U);!b.fired&&b.reason==="dry"?mt||(mt=!0,t.play("dry"),d.fire("dry"),Ot("NO BATTERY")):b.fired?(mt=!1,H()):mt=!1}else mt=!1;const A=[];for(const b of Z){const G=Math.hypot(b.vx,b.vy,b.vz)||1,$=G*rt,ut=Go(b.x,b.y,b.z,b.vx/G,b.vy/G,b.vz/G,$,zt());if(ut){vt(ut.x,ut.y,ut.z,[1,.62,.22],3);continue}if(b.x+=b.vx*rt,b.y+=b.vy*rt,b.z+=b.vz*rt,b.life-=rt,b.life<=0||b.y<0||b.y>6)continue;const gt=b.x-et.x,Ct=b.z-et.z;if(gt*gt+Ct*Ct<.4*.4&&b.y>.25&&b.y<1.75){const Ut=oc(U,b.damage);U=Ut.state,Ut.hit&&(t.play("hurt"),Ft=.05,Mt=Math.max(Mt,.2)),vt(b.x,b.y,b.z,[1,.5,.18],6);continue}A.push(b)}Z=A,Y=bg(Y,Dt);for(let b=0;b<Y.length;b++){const G=Y[b];if(G.taken||!zg(G,U.channel)||Math.hypot(et.x-G.x,et.z-G.z)>1.15)continue;const $=Og(U,G);$.took&&(U=$.state,Y[b]=wg(G,Dt),t.play("pickup"),Ot(Tg(G,U.channel)))}Dt>.45&&ct("intro","1 LIVE Clicker, 2 STATIC Scatter, 3 DEAD AIR Phaser. Each shot spends a battery."),Y.some(b=>b.pad&&Math.hypot(et.x-b.x,et.z-b.z)<4.2)&&ct("pads","Amber pads recharge. They feed the remote you are holding, then a little to the others."),(Math.hypot(et.x,et.z)<7.5||Dt>11)&&ct("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot(et.x-10.4,et.z)<6.2||Dt>20)&&ct("gate","Striped shutter is DEAD AIR. The Phaser fires through it. Clicker and Scatter stop."),et.x>12.1&&Y.some(b=>b.cloaked&&!b.taken)&&ct("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const I=O.filter(b=>b.alive&&b.room!=="chapel");if(I.length===1&&I[0].id==="alley"&&ct("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),q>0?(q-=rt,q<=0&&(M="")):it.length&&(M=it.shift(),q=6.2),U.health<=0){v=tt,R="dead",t.play("ui");return}!X.alive&&tt?(L||(L=!0,O=O.map(b=>b.room==="chapel"&&b.alive?{...b,alive:!1,hittable:!1}:b),U=rc(Vo(U,40)),Ot("OFF THE AIR"),t.play("death"),vt(X.x,2.1,X.z,[.96,.8,.38],34),vt(X.x,2.75,X.z,[.9,.72,.28],16),F=1.25),F-=rt,F<=0&&(R="clear",qt(),t.play("pickup"))):F=1.25}function bt(rt){for(let dt=st.length-1;dt>=0;dt--){const ft=st[dt];ft.life-=rt,ft.vy-=7*rt,ft.x+=ft.vx*rt,ft.y+=ft.vy*rt,ft.z+=ft.vz*rt,ft.life<=0&&st.splice(dt,1)}for(let dt=0;dt<f;dt++){const ft=st[dt],It=dt*3;if(!ft){m[It+1]=-40,_[It]=_[It+1]=_[It+2]=0;continue}m[It]=ft.x,m[It+1]=ft.y,m[It+2]=ft.z;const Ht=cn(ft.life*3,0,1);_[It]=ft.color[0]*Ht,_[It+1]=ft.color[1]*Ht,_[It+2]=ft.color[2]*Ht}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0;for(let dt=pt.length-1;dt>=0;dt--)pt[dt].life-=rt,pt[dt].life<=0&&pt.splice(dt,1);for(let dt=0;dt<D.length;dt++){const ft=D[dt],It=pt[dt];if(!It){ft.visible=!1;continue}const Ht=It.life/It.max;ft.visible=!0,ft.position.set(It.x,It.y,It.z),ft.scale.setScalar(.18+(1-Ht)*.55),ft.material.opacity=Ht,ft.material.color.setRGB(It.color[0],It.color[1],It.color[2])}for(let dt=St.length-1;dt>=0;dt--)St[dt].life-=rt,St[dt].life<=0&&St.splice(dt,1);for(let dt=0;dt<P;dt++){const ft=St[dt],It=dt*6;if(!ft){N[It+1]=-40,N[It+4]=-40;continue}N[It]=ft.a.x,N[It+1]=ft.a.y,N[It+2]=ft.a.z,N[It+3]=ft.b.x,N[It+4]=ft.b.y,N[It+5]=ft.b.z;for(let Ht=0;Ht<2;Ht++)w[It+Ht*3]=ft.color[0],w[It+Ht*3+1]=ft.color[1],w[It+Ht*3+2]=ft.color[2]}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}function Zt(rt){if(R==="title"){o.position.set(Math.sin(Xt*.16)*.5,2.5,9.3),o.lookAt(0,1.2,-1.4),d.setVisible(!1);return}d.setVisible(!0),Ft*=Math.exp(-9*rt),kt*=Math.exp(-11*rt),o.position.set(et.x+(Math.random()-.5)*Ft,et.y,et.z+(Math.random()-.5)*Ft),o.rotation.order="YXZ",o.rotation.y=et.yaw,o.rotation.x=et.pitch-kt,o.rotation.z=0;const{right:dt}=Pa(et.yaw,0),ft=R==="play"?et.vx*dt.x+et.vz*dt.z:0;d.update(rt,R==="play"?Math.hypot(et.vx,et.vz):0,{strafe:ft})}return{get mode(){return R},start(){At(),R="play",t.play("ui")},resume(){R==="pause"&&(R="play")},pause(){R==="play"&&(R="pause")},replay(){v?te():At(),R="play",t.play("ui")},toTitle(){At(),R="title"},update(rt,dt){const ft=Math.min(.05,Math.max(0,rt)||0);Xt+=ft,R==="play"&&(Dt+=ft,Rt(ft,dt)),yt>0&&(yt-=ft,yt<=0&&(Yt="")),Mt=Math.max(0,Mt-ft*3.2),wt(R==="title"?"LIVE":U.channel);const It=Y.find(He=>He.cloaked),Ht=Y.find(He=>He.kind==="health");l.setPickup("cache",!!(It&&!It.taken&&U.channel==="STATIC"&&R!=="title")),l.setPickup("aid",!!(Ht&&!Ht.taken)),l.syncCells(Y,R==="play"?Dt:0),l.setDoor(tt),l.setVeil(!!(X.alive&&X.veilUp),R==="title"?"LIVE":U.channel),l.setHijack({aimed:R==="play"&&_t,hot:R==="play"&&Dt<B}),l.update(Xt,U.channel,et),u.setProbeBlend(et.z),u.sync(O,ft,Xt,U.channel),u.syncPriest(X,ft,Xt,R==="title"?"LIVE":U.channel),u.syncBolts(Z),bt(ft),Zt(ft);const Me=R==="title"?"LIVE":U.channel;h.kernelRadius=Me==="DEAD_AIR"?.05:.18,h.maxDistance=Me==="DEAD_AIR"?.02:.06,e.render(n,o),e.shadowMap.autoUpdate=!1,h.renderToScreen=!0,h.render(e),e.shadowMap.autoUpdate=!0,e.setRenderTarget(null)},hud(){const rt=et.z<-14.85,dt=O.filter(Me=>Me.alive&&Me.room!=="chapel").length,ft=O.filter(Me=>Me.alive&&Me.room==="chapel").length+(X.alive?1:0),It=R==="play",Ht=Or(U.channel);return{mode:R,health:U.health,signal:U.signal,channel:U.channel,remote:Ht.name,ammo:U.batteries[U.channel],ammoMax:Gr()[U.channel],enemies:rt?ft:dt,roomLabel:rt?"RADIO":"COURT",countLabel:rt?"ON AIR":"TESSERA",tip:M,banner:Yt,bannerSerial:C,flash:Mt,hurt:U.hurtTimer,time:Dt,best:J,swaps:z,muted:t.muted,prompt:It?K:"",promptKind:It?ht:"",rite:It?nt:"",boss:rt&&X.alive?X.hp/X.maxHp:null,checkpoint:v}}}}const E_=960,w_=780,Dh=document.getElementById("stage"),zr=document.getElementById("view"),Fs=Lh();let re;try{re=S_(zr,Fs)}catch(i){const t=document.getElementById("boot-error");throw t&&(t.textContent="The picture failed to come up. "+(i&&i.message?i.message:"")),i}const Qi=new Set,Le={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let Sc=-1;const b_=document.getElementById("health-fill"),T_=document.getElementById("health-num"),A_=document.getElementById("signal-fill"),R_=document.getElementById("signal-num"),C_=document.getElementById("ch-name"),Ec=document.getElementById("remote-readout"),P_=document.getElementById("enemy-count"),D_=document.getElementById("room-label"),I_=document.getElementById("count-label"),L_=document.getElementById("rite"),wc=document.getElementById("prompt"),bc=document.getElementById("boss-wrap"),U_=document.getElementById("boss-fill"),N_=document.getElementById("tip"),xr=document.getElementById("banner"),Tc=document.getElementById("hurt"),F_=document.getElementById("flash"),O_=document.getElementById("panel"),Mr=document.getElementById("panel-kicker"),yr=document.getElementById("panel-title"),Sr=document.getElementById("panel-body"),Er=document.getElementById("panel-meta"),As=document.getElementById("panel-primary"),Rs=document.getElementById("panel-secondary");function Xo(){const i=Math.min(window.innerWidth/E_,window.innerHeight/w_);Dh.style.transform=`scale(${Math.max(.05,i)})`}Xo();window.addEventListener("resize",Xo);window.addEventListener("orientationchange",Xo);function is(){document.pointerLockElement!==zr&&zr.requestPointerLock()}function Xr(){Fs.ensure(),re.mode==="title"?(re.start(),is()):re.mode==="pause"?(re.resume(),is()):(re.mode==="clear"||re.mode==="dead")&&(re.replay(),is())}document.getElementById("start").addEventListener("click",i=>{i.stopPropagation(),Xr()});As.addEventListener("click",i=>{i.stopPropagation(),Xr()});Rs.addEventListener("click",i=>{i.stopPropagation(),Fs.ensure(),(re.mode==="pause"||re.mode==="clear"||re.mode==="dead")&&(re.mode==="pause"?re.replay():re.toTitle(),re.mode==="play"&&is())});window.addEventListener("keydown",i=>{if(i.repeat)return;(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),Qi.add(i.code);const t=gg(i.code);t&&re.mode==="play"&&(Le.channel=t),i.code==="KeyQ"&&re.mode==="play"&&(Le.cycle+=1),i.code==="KeyE"&&re.mode==="play"&&(Le.use=!0),i.code==="KeyM"&&Fs.toggle(),i.code==="Escape"&&re.mode==="play"&&re.pause(),i.code==="Enter"&&Xr(),i.code==="KeyR"&&(re.mode==="pause"||re.mode==="clear"||re.mode==="dead")&&(Fs.ensure(),re.replay(),is())});window.addEventListener("keyup",i=>Qi.delete(i.code));window.addEventListener("mousemove",i=>{re.mode==="play"&&(Le.lookX+=i.movementX||0,Le.lookY+=i.movementY||0)});window.addEventListener("mousedown",i=>{if(i.button===0&&!(i.target.closest&&i.target.closest("button"))){if(re.mode==="title"){Xr();return}re.mode==="play"&&(is(),Le.fire=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(Le.fire=!1)});window.addEventListener("wheel",i=>{i.preventDefault(),!(re.mode!=="play"||Math.abs(i.deltaY)<4)&&(Le.cycle+=i.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==zr&&re.mode==="play"&&re.pause()});window.addEventListener("blur",()=>{re.mode==="play"&&(re.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&re.mode==="play"&&(re.pause(),document.pointerLockElement&&document.exitPointerLock())});function Es(i){return i>0?i.toFixed(1)+"s":"—"}function z_(i){var n,s;const t=i.channel==="DEAD_AIR"?"ch-dead":i.channel==="STATIC"?"ch-static":"ch-live";Dh.className=`mode-${i.mode} ${t}`,b_.style.width=Math.max(0,i.health)+"%",A_.style.width=Math.max(0,i.signal)+"%",T_.textContent=String(Math.ceil(i.health)),R_.textContent=String(Math.ceil(i.signal)),C_.textContent=i.channel==="DEAD_AIR"?"DEAD AIR":i.channel,Ec&&(Ec.textContent=`${i.remote||""}  ${(n=i.ammo)!=null?n:0}/${(s=i.ammoMax)!=null?s:0}`),P_.textContent=String(i.enemies),D_.textContent=i.roomLabel||"COURT",I_.textContent=i.countLabel||"TESSERA",L_.textContent=i.rite||"",wc.textContent=i.prompt||"",wc.className=i.promptKind||"",i.boss==null?bc.classList.remove("on"):(bc.classList.add("on"),U_.style.width=Math.max(0,Math.min(100,i.boss*100))+"%"),N_.textContent=i.tip||"",Tc.style.opacity=i.health<35?"0.28":"0",i.hurt>.2&&(Tc.style.opacity="0.55"),F_.style.opacity=String(Math.max(0,Math.min(.7,i.flash))),i.bannerSerial!==Sc&&(Sc=i.bannerSerial,i.banner&&(xr.textContent=i.banner,xr.classList.remove("show"),xr.offsetWidth,xr.classList.add("show")));const e=i.mode==="pause"||i.mode==="clear"||i.mode==="dead";O_.hidden=!e,e&&(i.mode==="pause"?(Mr.textContent="KRCD 7 · STILL ON AIR",yr.textContent="PAUSED",Sr.textContent="Esc released the mouse. Click resume to lock it again.",Er.textContent=i.muted?"MUTED":"",As.textContent="Resume",Rs.textContent="Restart"):i.mode==="clear"?(Mr.textContent="KRCD 7 · RADIO",yr.textContent="WING CLEAR",Sr.textContent="The Visor Priest is off the air. The mall is still broadcasting.",Er.textContent=`TIME ${Es(i.time)} · BEST ${Es(i.best)} · ${i.swaps} CHANNEL CHANGES`,As.textContent="Replay",Rs.textContent="Title"):i.checkpoint?(Mr.textContent="KRCD 7 · RADIO",yr.textContent="WING LOST",Sr.textContent="The court stays clear. Retry from the radio door.",Er.textContent=`TIME ${Es(i.time)} · BEST ${Es(i.best)}`,As.textContent="Retry wing",Rs.textContent="Title"):(Mr.textContent="KRCD 7 · NO CARRIER",yr.textContent="SIGNAL LOST",Sr.textContent="The court keeps the carrier. Retune and walk it again.",Er.textContent=`BEST ${Es(i.best)}`,As.textContent="Retry",Rs.textContent="Title"))}let Ac=performance.now();function Ih(i){const t=Math.min(.05,(i-Ac)/1e3);Ac=i,document.hidden||(re.update(t,{forward:Qi.has("KeyW"),back:Qi.has("KeyS"),left:Qi.has("KeyA"),right:Qi.has("KeyD"),lookX:Le.lookX,lookY:Le.lookY,fireDown:Le.fire&&re.mode==="play",channel:Le.channel,cycle:Le.cycle,use:Le.use}),z_(re.hud())),Le.lookX=0,Le.lookY=0,Le.channel=null,Le.cycle=0,Le.use=!1,requestAnimationFrame(Ih)}requestAnimationFrame(Ih);
