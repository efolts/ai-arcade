(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Yo="channel-surfer-mute";function Ih(){const i=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let t=null,e=null,n=null,s=null,r=null,a=!1,o=!1;try{o=localStorage.getItem(Yo)==="1"}catch(d){o=!1}function c(){if(!i)return null;if(!t){t=new i,e=t.createGain(),e.gain.value=o?0:.85,n=t.createBiquadFilter(),n.type="lowpass",n.frequency.value=16e3,n.connect(e),e.connect(t.destination);const d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=d.getChannelData(0);for(let E=0;E<f.length;E++)f[E]=Math.random()*2-1;const m=t.createBufferSource();m.buffer=d,m.loop=!0;const _=t.createBiquadFilter();_.type="highpass",_.frequency.value=1200,s=t.createGain(),s.gain.value=0,m.connect(_),_.connect(s),s.connect(n),m.start(),r=t.createGain(),r.gain.value=.018;const g=t.createOscillator(),p=t.createOscillator();g.type="sine",p.type="triangle",g.frequency.value=55,p.frequency.value=82.4,g.connect(r),p.connect(r),r.connect(n),g.start(),p.start()}return t.state==="suspended"&&t.resume(),a=!0,t}function l(d,f){const m=t.createGain(),_=t.currentTime;return m.gain.setValueAtTime(1e-4,_),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),_+.012),m.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,d)),m.connect(n),m}function h(d,f,m,_,g){if(!a||!t||o)return;const p=t.createOscillator();p.type=m;const E=t.currentTime;p.frequency.setValueAtTime(d,E),g&&p.frequency.exponentialRampToValueAtTime(Math.max(30,g),E+f),p.connect(l(f,_)),p.start(),p.stop(E+f+.03)}function u(d,f,m){if(!a||!t||o)return;const _=Math.max(1,Math.floor(t.sampleRate*d)),g=t.createBuffer(1,_,t.sampleRate),p=g.getChannelData(0);for(let B=0;B<_;B++)p[B]=Math.random()*2-1;const E=t.createBufferSource();E.buffer=g;const b=t.createBiquadFilter();b.type="bandpass",b.frequency.value=m,b.Q.value=.7;const S=l(d,f);E.connect(b),b.connect(S),E.start()}return{ensure:c,get muted(){return o},toggle(){o=!o,e&&(e.gain.value=o?0:.85);try{localStorage.setItem(Yo,o?"1":"0")}catch(d){}return o},setChannel(d){if(!a||!t)return;const f=t.currentTime,m=d==="DEAD_AIR"?380:d==="STATIC"?3800:15e3;n.frequency.linearRampToValueAtTime(m,f+.07),s.gain.linearRampToValueAtTime(d==="STATIC"?.02:0,f+.08),r.gain.linearRampToValueAtTime(d==="DEAD_AIR"?.028:.016,f+.1)},play(d){if(!(!a||o))switch(d){case"live":u(.045,.14,2400),h(940,.08,"square",.045,360);break;case"static":u(.13,.22,640);break;case"phase":h(220,.12,"sine",.06,90),u(.07,.08,480);break;case"dry":u(.03,.08,1800),h(140,.04,"square",.03,90);break;case"deny":h(86,.09,"sine",.07,48);break;case"switch-live":h(523,.11,"square",.04),h(784,.13,"square",.03);break;case"switch-static":u(.08,.1,500),h(190,.12,"sawtooth",.03);break;case"switch-dead":h(74,.18,"sine",.07,42);break;case"hit":h(1500,.05,"square",.04,480);break;case"hurt":u(.11,.16,220),h(120,.16,"sawtooth",.05,60);break;case"death":u(.26,.18,280),h(210,.32,"triangle",.06,48);break;case"pickup":h(660,.08,"sine",.05),h(990,.12,"sine",.04);break;case"ui":h(480,.05,"square",.03);break;case"bolt":h(300,.09,"square",.03,130);break;case"nosignal":u(.16,.12,180);break;case"hijack":u(.18,.2,1800),h(680,.16,"sawtooth",.05,1400),h(220,.22,"square",.04,90);break;case"rite":h(196,.28,"sine",.05),h(247,.32,"sine",.035),h(392,.22,"triangle",.03);break;case"rite-break":u(.08,.16,1400),h(880,.12,"square",.05,420),h(1320,.16,"triangle",.04,700);break;case"rite-fail":h(98,.22,"sawtooth",.06,50),u(.14,.12,200);break;case"door":h(140,.18,"square",.04,70),h(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="170",Lh=0,Zo=1,Uh=2,Rc=1,Cc=2,On=3,oi=0,Xe=1,Ze=2,nn=0,ts=1,Pr=2,Ko=3,jo=4,Pc=5,zn=100,Nh=101,Fh=102,Oh=103,zh=104,Pa=200,Bh=201,kh=202,Hh=203,Da=204,Ia=205,Dc=206,Vh=207,Ic=208,Gh=209,Wh=210,Xh=211,qh=212,Yh=213,Zh=214,La=0,Ua=1,Na=2,ss=3,Fa=4,Oa=5,za=6,Ba=7,Lc=0,Kh=1,jh=2,ai=0,$h=1,Jh=2,Qh=3,Uc=4,tu=5,eu=6,nu=7,Nc=300,rs=301,as=302,ka=303,Ha=304,zr=306,Rn=1e3,kn=1001,Va=1002,tn=1003,iu=1004,ks=1005,sn=1006,Xr=1007,Sn=1008,Wn=1009,Fc=1010,Oc=1011,Ls=1012,To=1013,wi=1014,An=1015,bi=1016,Ao=1017,Ro=1018,Ti=1020,zc=35902,Bc=1021,kc=1022,En=1023,Hc=1024,Vc=1025,es=1026,Ai=1027,Co=1028,Po=1029,Gc=1030,Do=1031,Io=1033,wr=33776,br=33777,Tr=33778,Ar=33779,Ga=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,Ka=37496,ja=37808,$a=37809,Ja=37810,Qa=37811,to=37812,eo=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,Rr=36492,ho=36494,uo=36495,Wc=36283,fo=36284,po=36285,mo=36286,su=3200,ru=3201,Lo=0,au=1,Bn="",Ve="srgb",li="srgb-linear",Br="linear",ve="srgb",Ci=7680,$o=519,ou=512,lu=513,cu=514,Xc=515,hu=516,uu=517,fu=518,du=519,go=35044,Jo="300 es",Hn=2e3,Dr=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const Cs=Math.PI/180,Us=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Uo(i,t){return(i%t+t)%t}function pu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ps(i,t,e){return(1-e)*i+e*t}function gu(i,t,e,n){return Ps(i,t,1-Math.exp(-e*n))}function _u(i,t=1){return t-Math.abs(Uo(i,t*2)-t)}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yu(i,t){return i+Math.random()*(t-i)}function Su(i){return i*(.5-Math.random())}function Eu(i){i!==void 0&&(Qo=i);let t=Qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*Cs}function bu(i){return i*Us}function Tu(i){return(i&i-1)===0&&i!==0}function Au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pu={DEG2RAD:Cs,RAD2DEG:Us,generateUUID:Vn,clamp:We,euclideanModulo:Uo,mapLinear:pu,inverseLerp:mu,lerp:Ps,damp:gu,pingpong:_u,smoothstep:vu,smootherstep:xu,randInt:Mu,randFloat:yu,randFloatSpread:Su,seededRandom:Eu,degToRad:wu,radToDeg:bu,isPowerOfTwo:Tu,ceilPowerOfTwo:Au,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Cu,normalize:_e,denormalize:yn};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,s,r,a,o,c,l){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],E=s[1],b=s[4],S=s[7],B=s[2],P=s[5],C=s[8];return r[0]=a*_+o*E+c*B,r[3]=a*g+o*b+c*P,r[6]=a*p+o*S+c*C,r[1]=l*_+h*E+u*B,r[4]=l*g+h*b+u*P,r[7]=l*p+h*S+u*C,r[2]=d*_+f*E+m*B,r[5]=d*g+f*b+m*P,r[8]=d*p+f*S+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new re;function qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=Ir("canvas");return i.style.display="block",i}const tl={};function ws(i){i in tl||(tl[i]=!0,console.warn(i))}function Iu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fe={enabled:!0,workingColorSpace:li,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?Br:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const el=[.64,.33,.3,.6,.15,.06],nl=[.2126,.7152,.0722],il=[.3127,.329],sl=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[li]:{primaries:el,whitePoint:il,transfer:Br,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:nl,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:el,whitePoint:il,transfer:ve,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:nl,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let Pi;class Nu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Ir("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fu=0;class Yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yr(s[a].image)):r.push(Yr(s[a]))}else r=Yr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Yr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;class Ke extends ls{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=kn,s=kn,r=sn,a=Sn,o=En,c=Wn,l=Ke.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Vn(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rn:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rn:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Nc;Ke.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,S=(f+1)/2,B=(p+1)/2,P=(h+d)/4,C=(u+_)/4,U=(m+g)/4;return b>S&&b>B?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=P/n,r=C/n):S>B?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=P/s,r=U/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=C/r,s=U/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zu extends ls{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zc extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bu extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-o;const p=c*d+l*f+h*m+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const B=Math.sqrt(b),P=Math.atan2(B,p*E);g=Math.sin(g*P)/B,o=Math.sin(o*P)/B}const S=o*E;if(c=c*g+d*S,l=l*g+f*S,h=h*g+m*S,u=u*g+_*S,g===1-o){const B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new H,al=new Os;class zs{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Vs.subVectors(this.max,fs),Di.subVectors(t.a,fs),Ii.subVectors(t.b,fs),Li.subVectors(t.c,fs),jn.subVectors(Ii,Di),$n.subVectors(Li,Ii),hi.subVectors(Di,Li);let e=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,jn.z,0,-jn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!Kr(e,Di,Ii,Li,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,Di,Ii,Li,Vs))?!1:(Gs.crossVectors(jn,$n),e=[Gs.x,Gs.y,Gs.z],Kr(e,Di,Ii,Li,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new H,new H,new H,new H,new H,new H,new H,new H],vn=new H,Hs=new zs,Di=new H,Ii=new H,Li=new H,jn=new H,$n=new H,hi=new H,fs=new H,Vs=new H,Gs=new H,ui=new H;function Kr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ku=new zs,ds=new H,jr=new H;class Bs{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(jr)),this.expandByPoint(ds.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new H,$r=new H,Ws=new H,Jn=new H,Jr=new H,Xs=new H,Qr=new H;class No{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$r.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=Jn.dot(this.direction),c=-Jn.dot(Ws),l=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector(Ws,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Jr.subVectors(e,t),Xs.subVectors(n,t),Qr.crossVectors(Jr,Xs);let a=this.direction.dot(Qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const c=o*this.direction.dot(Xs.crossVectors(Jn,Xs));if(c<0)return null;const l=o*this.direction.dot(Jr.cross(Jn));if(l<0||c+l>a)return null;const h=-o*Jn.dot(Qr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,_,g){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,_,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Vu)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Qn.crossVectors(n,on),Qn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Qn.crossVectors(n,on)),Qn.normalize(),qs.crossVectors(on,Qn),s[0]=Qn.x,s[4]=qs.x,s[8]=on.x,s[1]=Qn.y,s[5]=qs.y,s[9]=on.y,s[2]=Qn.z,s[6]=qs.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],E=n[3],b=n[7],S=n[11],B=n[15],P=s[0],C=s[4],U=s[8],w=s[12],M=s[1],A=s[5],I=s[9],F=s[13],G=s[2],Z=s[6],Y=s[10],Q=s[14],v=s[3],D=s[7],N=s[11],z=s[15];return r[0]=a*P+o*M+c*G+l*v,r[4]=a*C+o*A+c*Z+l*D,r[8]=a*U+o*I+c*Y+l*N,r[12]=a*w+o*F+c*Q+l*z,r[1]=h*P+u*M+d*G+f*v,r[5]=h*C+u*A+d*Z+f*D,r[9]=h*U+u*I+d*Y+f*N,r[13]=h*w+u*F+d*Q+f*z,r[2]=m*P+_*M+g*G+p*v,r[6]=m*C+_*A+g*Z+p*D,r[10]=m*U+_*I+g*Y+p*N,r[14]=m*w+_*F+g*Q+p*z,r[3]=E*P+b*M+S*G+B*v,r[7]=E*C+b*A+S*Z+B*D,r[11]=E*U+b*I+S*Y+B*N,r[15]=E*w+b*F+S*Q+B*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],E=u*g*l-_*d*l+_*c*f-o*g*f-u*c*p+o*d*p,b=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,S=h*_*l-m*u*l+m*o*f-a*_*f-h*o*p+a*u*p,B=m*u*c-h*_*c-m*o*d+a*_*d+h*o*g-a*u*g,P=e*E+n*b+s*S+r*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=E*C,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*C,t[2]=(o*g*r-_*c*r+_*s*l-n*g*l-o*s*p+n*c*p)*C,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*C,t[4]=b*C,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*C,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*C,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*C,t[8]=S*C,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(a*_*r-m*o*r+m*n*l-e*_*l-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*C,t[12]=B*C,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(m*o*s-a*_*s-m*n*c+e*_*c+a*n*g-e*o*g)*C,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,E=c*l,b=c*h,S=c*u,B=n.x,P=n.y,C=n.z;return s[0]=(1-(_+p))*B,s[1]=(f+S)*B,s[2]=(m-b)*B,s[3]=0,s[4]=(f-S)*P,s[5]=(1-(d+p))*P,s[6]=(g+E)*P,s[7]=0,s[8]=(m+b)*C,s[9]=(g-E)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const a=Ui.set(s[4],s[5],s[6]).length(),o=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,h=1/a,u=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(o===Hn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Dr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let m,_;if(o===Hn)m=(a+r)*u,_=-2*u;else if(o===Dr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new H,xn=new Me,Hu=new H(0,0,0),Vu=new H(1,1,1),Qn=new H,qs=new H,on=new H,ol=new Me,ll=new Os;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gu=0;const cl=new H,Ni=new Os,Un=new Me,Ys=new H,ps=new H,Wu=new H,Xu=new Os,hl=new H(1,0,0),ul=new H(0,1,0),fl=new H(0,0,1),dl={type:"added"},qu={type:"removed"},Fi={type:"childadded",child:null},ta={type:"childremoved",child:null};class Ie extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new H,e=new Cn,n=new Os,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new re}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(fl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ps,Ys,this.up):Un.lookAt(Ys,ps,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Un),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qu),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new H(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new H,Nn=new H,ea=new H,Fn=new H,Oi=new H,zi=new H,pl=new H,na=new H,ia=new H,sa=new H,ra=new xe,aa=new xe,oa=new xe;class pn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Nn.subVectors(n,e),ea.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Nn),c=Mn.dot(ea),l=Nn.dot(Nn),h=Nn.dot(ea),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ra,r.x),a.addScaledVector(aa,r.y),a.addScaledVector(oa,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Nn.subVectors(t,e),Mn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),Mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,n),zi.subVectors(r,n),na.subVectors(t,n);const c=Oi.dot(na),l=zi.dot(na);if(c<=0&&l<=0)return e.copy(n);ia.subVectors(t,s);const h=Oi.dot(ia),u=zi.dot(ia);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Oi,a);sa.subVectors(t,r);const f=Oi.dot(sa),m=zi.dot(sa);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(zi,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return pl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(pl,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Oi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function la(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Uo(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=la(a,r,t+1/3),this.g=la(a,r,t),this.b=la(a,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return fe.fromWorkingColorSpace(Ye.copy(this),t),Math.round(We(Ye.r*255,0,255))*65536+Math.round(We(Ye.g*255,0,255))*256+Math.round(We(Ye.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ve){fe.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Zs);const n=Ps(ti.h,Zs.h,e),s=Ps(ti.s,Zs.s,e),r=Ps(ti.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new $t;$t.NAMES=jc;let Yu=0;class Yn extends ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Vn(),this.name="",this.blending=ts,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ia,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ue extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new H,Ks=new wt;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==go&&(t.usage=this.usage),t}}class $c extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jc extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zu=0;const dn=new Me,ca=new Ie,Bi=new H,ln=new zs,ms=new zs,ze=new H;class Ae extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qc(t)?Jc:$c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(ln.min,ms.min),ln.expandByPoint(ze),ze.addVectors(ln.max,ms.max),ln.expandByPoint(ze)):(ln.expandByPoint(ms.min),ln.expandByPoint(ms.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ze.fromBufferAttribute(o,l),c&&(Bi.fromBufferAttribute(t,l),ze.add(Bi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new H,c[U]=new H;const l=new H,h=new H,u=new H,d=new wt,f=new wt,m=new wt,_=new H,g=new H;function p(U,w,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const A=1/(f.x*m.y-m.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(A),o[U].add(_),o[w].add(_),o[M].add(_),c[U].add(g),c[w].add(g),c[M].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,w=E.length;U<w;++U){const M=E[U],A=M.start,I=M.count;for(let F=A,G=A+I;F<G;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new H,S=new H,B=new H,P=new H;function C(U){B.fromBufferAttribute(s,U),P.copy(B);const w=o[U];b.copy(w),b.sub(B.multiplyScalar(B.dot(w))).normalize(),S.crossVectors(P,w);const A=S.dot(c[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,A)}for(let U=0,w=E.length;U<w;++U){const M=E[U],A=M.start,I=M.count;for(let F=A,G=A+I;F<G;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new H,r=new H,a=new H,o=new H,c=new H,l=new H,h=new H,u=new H;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new Me,fi=new No,js=new Bs,gl=new H,$s=new H,Js=new H,Qs=new H,ha=new H,tr=new H,_l=new H,er=new H;class ct extends Ie{constructor(t=new Ae,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ha.fromBufferAttribute(u,t),a?tr.addScaledVector(ha,h):tr.addScaledVector(ha.sub(e),h))}e.add(tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(js.containsPoint(fi.origin)===!1&&(fi.intersectSphere(js,gl)===null||fi.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),fi.copy(t.ray).applyMatrix4(ml),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=E,B=b;S<B;S+=3){const P=o.getX(S),C=o.getX(S+1),U=o.getX(S+2);s=nr(this,p,t,n,l,h,u,P,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=o.getX(g),b=o.getX(g+1),S=o.getX(g+2);s=nr(this,a,t,n,l,h,u,E,b,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=E,B=b;S<B;S+=3){const P=S,C=S+1,U=S+2;s=nr(this,p,t,n,l,h,u,P,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=g,b=g+1,S=g+2;s=nr(this,a,t,n,l,h,u,E,b,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Ku(i,t,e,n,s,r,a,o){let c;if(t.side===Xe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===oi,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(er);return l<e.near||l>e.far?null:{distance:l,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,$s),i.getVertexPosition(c,Js),i.getVertexPosition(l,Qs);const h=Ku(i,t,e,n,$s,Js,Qs,_l);if(h){const u=new H;pn.getBarycoord(_l,$s,Js,Qs,u),s&&(h.uv=pn.getInterpolatedAttribute(s,o,c,l,u,new wt)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,c,l,u,new wt)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,c,l,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new H,materialIndex:0};pn.getNormal($s,Js,Qs,d.normal),h.face=d,h.barycoord=u}return h}class Nt extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function m(_,g,p,E,b,S,B,P,C,U,w){const M=S/C,A=B/U,I=S/2,F=B/2,G=P/2,Z=C+1,Y=U+1;let Q=0,v=0;const D=new H;for(let N=0;N<Y;N++){const z=N*A-F;for(let J=0;J<Z;J++){const _t=J*M-I;D[_]=_t*E,D[g]=z*b,D[p]=G,l.push(D.x,D.y,D.z),D[_]=0,D[g]=0,D[p]=P>0?1:-1,h.push(D.x,D.y,D.z),u.push(J/C),u.push(1-N/U),Q+=1}}for(let N=0;N<U;N++)for(let z=0;z<C;z++){const J=d+z+Z*N,_t=d+z+Z*(N+1),K=d+(z+1)+Z*(N+1),ht=d+(z+1)+Z*N;c.push(J,_t,ht),c.push(_t,K,ht),v+=6}o.addGroup(f,v,w),f+=v,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function ju(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const bs={clone:os,merge:Je};var $u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class th extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new H,vl=new wt,xl=new wt;class cn extends th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,vl,xl),e.subVectors(xl,vl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Hi=1;class Qu extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(ki,Hi,t,e);s.layers=this.layers,this.add(s);const r=new cn(ki,Hi,t,e);r.layers=this.layers,this.add(r);const a=new cn(ki,Hi,t,e);a.layers=this.layers,this.add(a);const o=new cn(ki,Hi,t,e);o.layers=this.layers,this.add(o);const c=new cn(ki,Hi,t,e);c.layers=this.layers,this.add(c);const l=new cn(ki,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class eh extends Ke{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tf extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nt(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:nn});r.uniforms.tEquirect.value=e;const a=new ct(s,r),o=e.minFilter;return e.minFilter===Sn&&(e.minFilter=sn),new Qu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ua=new H,ef=new H,nf=new re;class vi{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ua.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Bs,ir=new H;class Fo{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],E=s[13],b=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,g-f,S-p).normalize(),n[1].setComponents(c+r,d+l,g+f,S+p).normalize(),n[2].setComponents(c+a,d+h,g+m,S+E).normalize(),n[3].setComponents(c-a,d-h,g-m,S-E).normalize(),n[4].setComponents(c-o,d-u,g-_,S-b).normalize(),e===Hn)n[5].setComponents(c+o,d+u,g+_,S+b).normalize();else if(e===Dr)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sf(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ee extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const E=p*d-a;for(let b=0;b<l;b++){const S=b*u-r;m.push(S,-E,0),_.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const b=E+l*p,S=E+l*(p+1),B=E+1+l*(p+1),P=E+1+l*p;f.push(b,S,P),f.push(S,B,P)}this.setIndex(f),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
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
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,xf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rf=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
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
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
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
#endif`,id=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
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
#endif`,Rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gd=`float getShadowMask() {
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
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
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
#endif`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
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
}`,up=`#if DEPTH_PACKING == 3200
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
}`,fp=`#define DISTANCE
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
}`,dp=`#define DISTANCE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#define LAMBERT
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
}`,yp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,wp=`#define NORMAL
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
}`,bp=`#define NORMAL
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
}`,Tp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define TOON
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
}`,Dp=`#define TOON
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
}`,Ip=`uniform float size;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 color;
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
}`,Fp=`uniform float rotation;
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
}`,Op=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:ff,batching_pars_vertex:df,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:wf,color_pars_fragment:bf,color_pars_vertex:Tf,color_vertex:Af,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Df,displacementmap_vertex:If,emissivemap_fragment:Lf,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:zf,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:$f,envmap_vertex:Hf,fog_vertex:Vf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Kf,lights_pars_begin:jf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:ad,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:fd,map_particle_fragment:dd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphinstance_vertex:_d,morphcolor_vertex:vd,morphnormal_vertex:xd,morphtarget_pars_vertex:Md,morphtarget_vertex:yd,normal_fragment_begin:Sd,normal_fragment_maps:Ed,normal_pars_fragment:wd,normal_pars_vertex:bd,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Rd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Dd,opaque_fragment:Id,packing:Ld,premultiplied_alpha_fragment:Ud,project_vertex:Nd,dithering_fragment:Fd,dithering_pars_fragment:Od,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Gd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Kd,tonemapping_fragment:jd,tonemapping_pars_fragment:$d,transmission_fragment:Jd,transmission_pars_fragment:Qd,uv_pars_fragment:tp,uv_pars_vertex:ep,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:hp,depth_frag:up,distanceRGBA_vert:fp,distanceRGBA_frag:dp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:_p,meshbasic_vert:vp,meshbasic_frag:xp,meshlambert_vert:Mp,meshlambert_frag:yp,meshmatcap_vert:Sp,meshmatcap_frag:Ep,meshnormal_vert:wp,meshnormal_frag:bp,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Pp,meshtoon_frag:Dp,points_vert:Ip,points_frag:Lp,shadow_vert:Up,shadow_frag:Np,sprite_vert:Fp,sprite_frag:Op},Tt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Tn={basic:{uniforms:Je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Je([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Je([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Je([Tt.points,Tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Je([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Je([Tt.common,Tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Je([Tt.sprite,Tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Je([Tt.common,Tt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Je([Tt.lights,Tt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Tn.physical={uniforms:Je([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const sr={r:0,b:0,g:0},pi=new Cn,zp=new Me;function Bp(i,t,e,n,s,r,a){const o=new $t(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const S=m(E);S===null?p(o,c):S&&S.isColor&&(p(S,1),b=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,b){const S=m(b);S&&(S.isCubeTexture||S.mapping===zr)?(h===void 0&&(h=new ct(new Nt(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:os(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(b.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(pi)),h.material.toneMapped=fe.getTransfer(S.colorSpace)!==ve,(u!==S||d!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ct(new Ee(2,2),new mn({name:"BackgroundMaterial",uniforms:os(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=fe.getTransfer(S.colorSpace)!==ve,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,b){E.getRGB(sr,Qc(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:g}}function kp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,A,I,F,G){let Z=!1;const Y=u(F,I,A);r!==Y&&(r=Y,l(r.object)),Z=f(M,F,I,G),Z&&m(M,F,I,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(M,A,I,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,A,I){const F=I.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let Z=G[A.id];Z===void 0&&(Z={},G[A.id]=Z);let Y=Z[F];return Y===void 0&&(Y=d(c()),Z[F]=Y),Y}function d(M){const A=[],I=[],F=[];for(let G=0;G<e;G++)A[G]=0,I[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,A,I,F){const G=r.attributes,Z=A.attributes;let Y=0;const Q=I.getAttributes();for(const v in Q)if(Q[v].location>=0){const N=G[v];let z=Z[v];if(z===void 0&&(v==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),v==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),N===void 0||N.attribute!==z||z&&N.data!==z.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function m(M,A,I,F){const G={},Z=A.attributes;let Y=0;const Q=I.getAttributes();for(const v in Q)if(Q[v].location>=0){let N=Z[v];N===void 0&&(v==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),v==="instanceColor"&&M.instanceColor&&(N=M.instanceColor));const z={};z.attribute=N,N&&N.data&&(z.data=N.data),G[v]=z,Y++}r.attributes=G,r.attributesNum=Y,r.index=F}function _(){const M=r.newAttributes;for(let A=0,I=M.length;A<I;A++)M[A]=0}function g(M){p(M,0)}function p(M,A){const I=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;I[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),G[M]!==A&&(i.vertexAttribDivisor(M,A),G[M]=A)}function E(){const M=r.newAttributes,A=r.enabledAttributes;for(let I=0,F=A.length;I<F;I++)A[I]!==M[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function b(M,A,I,F,G,Z,Y){Y===!0?i.vertexAttribIPointer(M,A,I,G,Z):i.vertexAttribPointer(M,A,I,F,G,Z)}function S(M,A,I,F){_();const G=F.attributes,Z=I.getAttributes(),Y=A.defaultAttributeValues;for(const Q in Z){const v=Z[Q];if(v.location>=0){let D=G[Q];if(D===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),D!==void 0){const N=D.normalized,z=D.itemSize,J=t.get(D);if(J===void 0)continue;const _t=J.buffer,K=J.type,ht=J.bytesPerElement,et=K===i.INT||K===i.UNSIGNED_INT||D.gpuType===To;if(D.isInterleavedBufferAttribute){const st=D.data,mt=st.stride,Et=D.offset;if(st.isInstancedInterleavedBuffer){for(let it=0;it<v.locationSize;it++)p(v.location+it,st.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<v.locationSize;it++)g(v.location+it);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let it=0;it<v.locationSize;it++)b(v.location+it,z/v.locationSize,K,N,mt*ht,(Et+z/v.locationSize*it)*ht,et)}else{if(D.isInstancedBufferAttribute){for(let st=0;st<v.locationSize;st++)p(v.location+st,D.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let st=0;st<v.locationSize;st++)g(v.location+st);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let st=0;st<v.locationSize;st++)b(v.location+st,z/v.locationSize,K,N,z*ht,z/v.locationSize*st*ht,et)}}else if(Y!==void 0){const N=Y[Q];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(v.location,N);break;case 3:i.vertexAttrib3fv(v.location,N);break;case 4:i.vertexAttrib4fv(v.location,N);break;default:i.vertexAttrib1fv(v.location,N)}}}}E()}function B(){U();for(const M in n){const A=n[M];for(const I in A){const F=A[I];for(const G in F)h(F[G].object),delete F[G];delete A[I]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const I in A){const F=A[I];for(const G in F)h(F[G].object),delete F[G];delete A[I]}delete n[M.id]}function C(M){for(const A in n){const I=n[A];if(I[M.id]===void 0)continue;const F=I[M.id];for(const G in F)h(F[G].object),delete F[G];delete I[M.id]}}function U(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function Hp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==En&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==An&&!U)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=m>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:B,maxSamples:P}}function Gp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new vi,o=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const E=r?0:n,b=E*4;let S=p.clippingState||null;c.value=S,S=h(m,d,b,f);for(let B=0;B!==b;++B)S[B]=e[B];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,S=f;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Wp(i){let t=new WeakMap;function e(a,o){return o===ka?a.mapping=rs:o===Ha&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ka||o===Ha)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new tf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Oo extends th{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,Ml=[.125,.215,.35,.446,.526,.582],yi=20,fa=new Oo,yl=new $t;let da=null,pa=0,ma=0,ga=!1;const xi=(1+Math.sqrt(5))/2,Vi=1/xi,Sl=[new H(-xi,Vi,0),new H(xi,Vi,0),new H(-Vi,0,xi),new H(Vi,0,xi),new H(0,xi,-Vi),new H(0,xi,Vi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class _o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:bi,format:En,colorSpace:li,depthBuffer:!1},s=El(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(r)),this._blurMaterial=qp(r,t,e)}return s}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,s){const o=new cn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yl),h.toneMapping=ai,h.autoClear=!1;const f=new ue({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new ct(new Nt,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(yl),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;rr(s,E*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rs||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;rr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sl[(s-r-1)%Sl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ct(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):yi;g>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const p=[];let E=0;for(let C=0;C<yi;++C){const U=C/_,w=Math.exp(-U*U/2);p.push(w),C===0?E+=w:C<g&&(E+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const S=this._sizeLods[s],B=3*S*(s>b-Ji?s-b+Ji:0),P=4*(this._cubeSize-S);rr(e,B,P,3*S,2*S),c.setRenderTarget(e),c.render(u,fa)}}function Xp(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+Ml.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ji?c=Ml[a-i+Ji-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,E=new Float32Array(_*m*f),b=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,U=P>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];E.set(w,_*m*P),b.set(d,g*m*P);const M=[P,P,P,P,P,P];S.set(M,p*m*P)}const B=new Ae;B.setAttribute("position",new He(E,_)),B.setAttribute("uv",new He(b,g)),B.setAttribute("faceIndex",new He(S,p)),t.push(B),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function El(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qp(i,t,e){const n=new Float32Array(yi),s=new H(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zo(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function wl(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function bl(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function Yp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ka||c===Ha,h=c===rs||c===as;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new _o(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new _o(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let b=0,S=E.length;b<S;b+=3){const B=E[b+0],P=E[b+1],C=E[b+2];d.push(B,P,P,C,C,B)}}else if(m!==void 0){const E=m.array;_=m.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const B=b+0,P=b+1,C=b+2;d.push(B,P,P,C,C,B)}}else return;const g=new(qc(d)?Jc:$c)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function jp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $p(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let B=o.attributes.position.count*S,P=1;B>t.maxTextureSize&&(P=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const C=new Float32Array(B*P*4*u),U=new Zc(C,B,P,u);U.type=An,U.needsUpdate=!0;const w=S*4;for(let A=0;A<u;A++){const I=p[A],F=E[A],G=b[A],Z=B*P*4*A;for(let Y=0;Y<I.count;Y++){const Q=Y*w;m===!0&&(s.fromBufferAttribute(I,Y),C[Z+Q+0]=s.x,C[Z+Q+1]=s.y,C[Z+Q+2]=s.z,C[Z+Q+3]=0),_===!0&&(s.fromBufferAttribute(F,Y),C[Z+Q+4]=s.x,C[Z+Q+5]=s.y,C[Z+Q+6]=s.z,C[Z+Q+7]=0),g===!0&&(s.fromBufferAttribute(G,Y),C[Z+Q+8]=s.x,C[Z+Q+9]=s.y,C[Z+Q+10]=s.z,C[Z+Q+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new wt(B,P)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Bo extends Ke{constructor(t,e,n,s,r,a,o,c,l,h=es){if(h!==es&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=wi),n===void 0&&h===Ai&&(n=Ti),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ih=new Ke,Tl=new Bo(1,1),sh=new Zc,rh=new Bu,ah=new eh,Al=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Al[s];if(r===void 0&&(r=new Float32Array(s),Al[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),Fe(e,n)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Fe(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Cl.set(n),i.uniformMatrix4fv(this.addr,!1,Cl),Fe(e,n)}}function o0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function u0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=Xc,r=Tl):r=ih,e.setTexture2D(t||r,s)}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rh,s)}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ah,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sh,s)}function x0(i){switch(i){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return f0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}function M0(i,t){i.uniform1fv(this.addr,t)}function y0(i,t){const e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){const e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function E0(i,t){const e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function w0(i,t){const e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b0(i,t){const e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T0(i,t){const e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A0(i,t){i.uniform1iv(this.addr,t)}function R0(i,t){i.uniform2iv(this.addr,t)}function C0(i,t){i.uniform3iv(this.addr,t)}function P0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function U0(i,t){i.uniform4uiv(this.addr,t)}function N0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ih,r[a])}function F0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rh,r[a])}function O0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ah,r[a])}function z0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sh,r[a])}function B0(i){switch(i){case 5126:return M0;case 35664:return y0;case 35665:return S0;case 35666:return E0;case 35674:return w0;case 35675:return b0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return D0;case 36294:return I0;case 36295:return L0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return z0}}class k0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}}class V0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Il(i,t){i.seq.push(t),i.map[t.id]=t}function G0(i,t,e){const n=i.name,s=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),a=_a.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Il(e,l===void 0?new k0(o,i,t):new H0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new V0(o),Il(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);G0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const W0=37297;let X0=0;function q0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ul=new re;function Y0(i){fe._getMatrix(Ul,fe.workingColorSpace,i);const t=`mat3( ${Ul.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+q0(i.getShaderSource(t),a)}else return s}function Z0(i,t){const e=Y0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K0(i,t){let e;switch(t){case $h:e="Linear";break;case Jh:e="Reinhard";break;case Qh:e="Cineon";break;case Uc:e="ACESFilmic";break;case eu:e="AgX";break;case nu:e="Neutral";break;case tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new H;function j0(){fe.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function J0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function Fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(tm,nm)}const em=new Map;function nm(i,t){let e=se[t];if(e===void 0){const n=em.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}const im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(i){return i.replace(im,sm)}function sm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function rm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function am(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function om(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lc:t="ENVMAP_BLENDING_MULTIPLY";break;case Kh:t="ENVMAP_BLENDING_MIX";break;case jh:t="ENVMAP_BLENDING_ADD";break}return t}function cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=rm(e),l=am(e),h=om(e),u=lm(e),d=cm(e),f=$0(e),m=J0(r),_=s.createProgram();let g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(g=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?se.tonemapping_pars_fragment:"",e.toneMapping!==ai?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Z0("linearToOutputTexel",e.outputColorSpace),j0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=vo(a),a=Fl(a,e),a=Ol(a,e),o=vo(o),o=Fl(o,e),o=Ol(o,e),a=zl(a),o=zl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+g+a,S=E+p+o,B=Ll(s,s.VERTEX_SHADER,b),P=Ll(s,s.FRAGMENT_SHADER,S);s.attachShader(_,B),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(A){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(B).trim(),G=s.getShaderInfoLog(P).trim();let Z=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,P);else{const Q=Nl(s,B,"vertex"),v=Nl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+Q+`
`+v)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||G==="")&&(Y=!1);Y&&(A.diagnostics={runnable:Z,programLog:I,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(B),s.deleteShader(P),U=new Cr(s,_),w=Q0(s,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,W0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=P,this}let um=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dm(t),e.set(t,n)),n}}class dm{constructor(t){this.id=um++,this.code=t,this.usedTimes=0}}function pm(i,t,e,n,s,r,a){const o=new Kc,c=new fm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,M,A,I,F){const G=I.fog,Z=F.geometry,Y=w.isMeshStandardMaterial?I.environment:null,Q=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),v=Q&&Q.mapping===zr?Q.image.height:null,D=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const N=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,z=N!==void 0?N.length:0;let J=0;Z.morphAttributes.position!==void 0&&(J=1),Z.morphAttributes.normal!==void 0&&(J=2),Z.morphAttributes.color!==void 0&&(J=3);let _t,K,ht,et;if(D){const ft=Tn[D];_t=ft.vertexShader,K=ft.fragmentShader}else _t=w.vertexShader,K=w.fragmentShader,c.update(w),ht=c.getVertexShaderID(w),et=c.getFragmentShaderID(w);const st=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Et=F.isInstancedMesh===!0,it=F.isBatchedMesh===!0,ee=!!w.map,Lt=!!w.matcap,Xt=!!Q,O=!!w.aoMap,ne=!!w.lightMap,Ht=!!w.bumpMap,Ft=!!w.normalMap,Mt=!!w.displacementMap,Zt=!!w.emissiveMap,yt=!!w.metalnessMap,R=!!w.roughnessMap,y=w.anisotropy>0,W=w.clearcoat>0,nt=w.dispersion>0,at=w.iridescence>0,$=w.sheen>0,It=w.transmission>0,gt=y&&!!w.anisotropyMap,vt=W&&!!w.clearcoatMap,Ot=W&&!!w.clearcoatNormalMap,ut=W&&!!w.clearcoatRoughnessMap,bt=at&&!!w.iridescenceMap,Bt=at&&!!w.iridescenceThicknessMap,Wt=$&&!!w.sheenColorMap,At=$&&!!w.sheenRoughnessMap,ie=!!w.specularMap,qt=!!w.specularColorMap,Qt=!!w.specularIntensityMap,k=It&&!!w.transmissionMap,xt=It&&!!w.thicknessMap,j=!!w.gradientMap,ot=!!w.alphaMap,Rt=w.alphaTest>0,Ct=!!w.alphaHash,Kt=!!w.extensions;let rt=ai;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(rt=i.toneMapping);const dt={shaderID:D,shaderType:w.type,shaderName:w.name,vertexShader:_t,fragmentShader:K,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:it,batchingColor:it&&F._colorsTexture!==null,instancing:Et,instancingColor:Et&&F.instanceColor!==null,instancingMorph:Et&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:li,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:Lt,envMap:Xt,envMapMode:Xt&&Q.mapping,envMapCubeUVHeight:v,aoMap:O,lightMap:ne,bumpMap:Ht,normalMap:Ft,displacementMap:d&&Mt,emissiveMap:Zt,normalMapObjectSpace:Ft&&w.normalMapType===au,normalMapTangentSpace:Ft&&w.normalMapType===Lo,metalnessMap:yt,roughnessMap:R,anisotropy:y,anisotropyMap:gt,clearcoat:W,clearcoatMap:vt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:ut,dispersion:nt,iridescence:at,iridescenceMap:bt,iridescenceThicknessMap:Bt,sheen:$,sheenColorMap:Wt,sheenRoughnessMap:At,specularMap:ie,specularColorMap:qt,specularIntensityMap:Qt,transmission:It,transmissionMap:k,thicknessMap:xt,gradientMap:j,opaque:w.transparent===!1&&w.blending===ts&&w.alphaToCoverage===!1,alphaMap:ot,alphaTest:Rt,alphaHash:Ct,combine:w.combine,mapUv:ee&&_(w.map.channel),aoMapUv:O&&_(w.aoMap.channel),lightMapUv:ne&&_(w.lightMap.channel),bumpMapUv:Ht&&_(w.bumpMap.channel),normalMapUv:Ft&&_(w.normalMap.channel),displacementMapUv:Mt&&_(w.displacementMap.channel),emissiveMapUv:Zt&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:R&&_(w.roughnessMap.channel),anisotropyMapUv:gt&&_(w.anisotropyMap.channel),clearcoatMapUv:vt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(w.sheenRoughnessMap.channel),specularMapUv:ie&&_(w.specularMap.channel),specularColorMapUv:qt&&_(w.specularColorMap.channel),specularIntensityMapUv:Qt&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:xt&&_(w.thicknessMap.channel),alphaMapUv:ot&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ft||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(ee||ot),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&fe.getTransfer(w.map.colorSpace)===ve,decodeVideoTextureEmissive:Zt&&w.emissiveMap.isVideoTexture===!0&&fe.getTransfer(w.emissiveMap.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ze,flipSided:w.side===Xe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Kt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&w.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)M.push(A),M.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(E(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const M=m[w.type];let A;if(M){const I=Tn[M];A=bs.clone(I.uniforms)}else A=w.uniforms;return A}function B(w,M){let A;for(let I=0,F=h.length;I<F;I++){const G=h[I];if(G.cacheKey===M){A=G,++A.usedTimes;break}}return A===void 0&&(A=new hm(i,M,w,r),h.push(A)),A}function P(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:B,releaseProgram:P,releaseShaderCache:C,programs:h,dispose:U}}function mm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||gm),n.length>1&&n.sort(d||kl),s.length>1&&s.sort(d||kl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function _m(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Hl,i.set(n,[a])):s>=r.length?(a=new Hl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new $t};break;case"SpotLight":e={position:new H,direction:new H,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Mm=0;function ym(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sm(i){const t=new vm,e=xm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const s=new H,r=new Me,a=new Me;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,b=0,S=0,B=0,P=0,C=0;l.sort(ym);for(let w=0,M=l.length;w<M;w++){const A=l[w],I=A.color,F=A.intensity,G=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(A.sh.coefficients[Y],F);C++}else if(A.isDirectionalLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Q=A.shadow,v=e.get(A);v.shadowIntensity=Q.intensity,v.shadowBias=Q.bias,v.shadowNormalBias=Q.normalBias,v.shadowRadius=Q.radius,v.shadowMapSize=Q.mapSize,n.directionalShadow[f]=v,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=A.shadow.matrix,E++}n.directional[f]=Y,f++}else if(A.isSpotLight){const Y=t.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(I).multiplyScalar(F),Y.distance=G,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,n.spot[_]=Y;const Q=A.shadow;if(A.map&&(n.spotLightMap[B]=A.map,B++,Q.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[_]=Q.matrix,A.castShadow){const v=e.get(A);v.shadowIntensity=Q.intensity,v.shadowBias=Q.bias,v.shadowNormalBias=Q.normalBias,v.shadowRadius=Q.radius,v.shadowMapSize=Q.mapSize,n.spotShadow[_]=v,n.spotShadowMap[_]=Z,S++}_++}else if(A.isRectAreaLight){const Y=t.get(A);Y.color.copy(I).multiplyScalar(F),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=Y,g++}else if(A.isPointLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const Q=A.shadow,v=e.get(A);v.shadowIntensity=Q.intensity,v.shadowBias=Q.bias,v.shadowNormalBias=Q.normalBias,v.shadowRadius=Q.radius,v.shadowMapSize=Q.mapSize,v.shadowCameraNear=Q.camera.near,v.shadowCameraFar=Q.camera.far,n.pointShadow[m]=v,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=A.shadow.matrix,b++}n.point[m]=Y,m++}else if(A.isHemisphereLight){const Y=t.get(A);Y.skyColor.copy(A.color).multiplyScalar(F),Y.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==S||U.numSpotMaps!==B||U.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+B-P,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,U.directionalLength=f,U.pointLength=m,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=S,U.numSpotMaps=B,U.numLightProbes=C,n.version=Mm++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function Vl(i){const t=new Sm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Em(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Vl(i),t.set(s,[o])):r>=a.length?(o=new Vl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class wm extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bm extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
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
}`;function Rm(i,t,e){let n=new Fo;const s=new wt,r=new wt,a=new xe,o=new wm({depthPacking:ru}),c=new bm,l={},h=e.maxTextureSize,u={[oi]:Xe,[Xe]:oi,[Ze]:Ze},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Tm,fragmentShader:Am}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let p=this.type;this.render=function(P,C,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(nn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==On&&this.type===On,G=p===On&&this.type!==On;for(let Z=0,Y=P.length;Z<Y;Z++){const Q=P[Z],v=Q.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;s.copy(v.mapSize);const D=v.getFrameExtents();if(s.multiply(D),r.copy(v.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/D.x),s.x=r.x*D.x,v.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/D.y),s.y=r.y*D.y,v.mapSize.y=r.y)),v.map===null||F===!0||G===!0){const z=this.type!==On?{minFilter:tn,magFilter:tn}:{};v.map!==null&&v.map.dispose(),v.map=new Xn(s.x,s.y,z),v.map.texture.name=Q.name+".shadowMap",v.camera.updateProjectionMatrix()}i.setRenderTarget(v.map),i.clear();const N=v.getViewportCount();for(let z=0;z<N;z++){const J=v.getViewport(z);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),I.viewport(a),v.updateMatrices(Q,z),n=v.getFrustum(),S(C,U,v.camera,Q,this.type)}v.isPointLightShadow!==!0&&this.type===On&&E(v,U),v.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,M,A)};function E(P,C){const U=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xn(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,U,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,U,f,_,null)}function b(P,C,U,w){let M=null;const A=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)M=A;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=M.uuid,F=C.uuid;let G=l[I];G===void 0&&(G={},l[I]=G);let Z=G[F];Z===void 0&&(Z=M.clone(),G[F]=Z,C.addEventListener("dispose",B)),M=Z}if(M.visible=C.visible,M.wireframe=C.wireframe,w===On?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=U}return M}function S(P,C,U,w,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===On)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const F=t.update(P),G=P.material;if(Array.isArray(G)){const Z=F.groups;for(let Y=0,Q=Z.length;Y<Q;Y++){const v=Z[Y],D=G[v.materialIndex];if(D&&D.visible){const N=b(P,D,w,M);P.onBeforeShadow(i,P,C,U,F,N,v),i.renderBufferDirect(U,null,F,N,P,v),P.onAfterShadow(i,P,C,U,F,N,v)}}}else if(G.visible){const Z=b(P,G,w,M);P.onBeforeShadow(i,P,C,U,F,Z,null),i.renderBufferDirect(U,null,F,Z,P,null),P.onAfterShadow(i,P,C,U,F,Z,null)}}const I=P.children;for(let F=0,G=I.length;F<G;F++)S(I[F],C,U,w,M)}function B(P){P.target.removeEventListener("dispose",B);for(const U in l){const w=l[U],M=P.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Cm={[La]:Ua,[Na]:za,[Fa]:Ba,[ss]:Oa,[Ua]:La,[za]:Na,[Ba]:Fa,[Oa]:ss};function Pm(i,t){function e(){let k=!1;const xt=new xe;let j=null;const ot=new xe(0,0,0,0);return{setMask:function(Rt){j!==Rt&&!k&&(i.colorMask(Rt,Rt,Rt,Rt),j=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,Ct,Kt,rt,dt){dt===!0&&(Rt*=rt,Ct*=rt,Kt*=rt),xt.set(Rt,Ct,Kt,rt),ot.equals(xt)===!1&&(i.clearColor(Rt,Ct,Kt,rt),ot.copy(xt))},reset:function(){k=!1,j=null,ot.set(-1,0,0,0)}}}function n(){let k=!1,xt=!1,j=null,ot=null,Rt=null;return{setReversed:function(Ct){if(xt!==Ct){const Kt=t.get("EXT_clip_control");xt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const rt=Rt;Rt=null,this.setClear(rt)}xt=Ct},getReversed:function(){return xt},setTest:function(Ct){Ct?st(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(Ct){j!==Ct&&!k&&(i.depthMask(Ct),j=Ct)},setFunc:function(Ct){if(xt&&(Ct=Cm[Ct]),ot!==Ct){switch(Ct){case La:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Ct}},setLocked:function(Ct){k=Ct},setClear:function(Ct){Rt!==Ct&&(xt&&(Ct=1-Ct),i.clearDepth(Ct),Rt=Ct)},reset:function(){k=!1,j=null,ot=null,Rt=null,xt=!1}}}function s(){let k=!1,xt=null,j=null,ot=null,Rt=null,Ct=null,Kt=null,rt=null,dt=null;return{setTest:function(ft){k||(ft?st(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ft){xt!==ft&&!k&&(i.stencilMask(ft),xt=ft)},setFunc:function(ft,Dt,Vt){(j!==ft||ot!==Dt||Rt!==Vt)&&(i.stencilFunc(ft,Dt,Vt),j=ft,ot=Dt,Rt=Vt)},setOp:function(ft,Dt,Vt){(Ct!==ft||Kt!==Dt||rt!==Vt)&&(i.stencilOp(ft,Dt,Vt),Ct=ft,Kt=Dt,rt=Vt)},setLocked:function(ft){k=ft},setClear:function(ft){dt!==ft&&(i.clearStencil(ft),dt=ft)},reset:function(){k=!1,xt=null,j=null,ot=null,Rt=null,Ct=null,Kt=null,rt=null,dt=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,b=null,S=null,B=null,P=null,C=new $t(0,0,0),U=0,w=!1,M=null,A=null,I=null,F=null,G=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const v=i.getParameter(i.VERSION);v.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(v)[1]),Y=Q>=1):v.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),Y=Q>=2);let D=null,N={};const z=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),_t=new xe().fromArray(z),K=new xe().fromArray(J);function ht(k,xt,j,ot){const Rt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(k,Ct),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<j;Kt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(xt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Ct}const et={};et[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(ss),Ht(!1),Ft(Zo),st(i.CULL_FACE),O(nn);function st(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function mt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Et(k,xt){return u[k]!==xt?(i.bindFramebuffer(k,xt),u[k]=xt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function it(k,xt){let j=f,ot=!1;if(k){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));const Rt=k.textures;if(j.length!==Rt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Kt=Rt.length;Ct<Kt;Ct++)j[Ct]=i.COLOR_ATTACHMENT0+Ct;j.length=Rt.length,ot=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ot=!0);ot&&i.drawBuffers(j)}function ee(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const Lt={[zn]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};Lt[Oh]=i.MIN,Lt[zh]=i.MAX;const Xt={[Pa]:i.ZERO,[Bh]:i.ONE,[kh]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Wh]:i.SRC_ALPHA_SATURATE,[Ic]:i.DST_COLOR,[Dc]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[Xh]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Zh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(k,xt,j,ot,Rt,Ct,Kt,rt,dt,ft){if(k===nn){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),k!==Pc){if(k!==g||ft!==w){if((p!==zn||S!==zn)&&(i.blendEquation(i.FUNC_ADD),p=zn,S=zn),ft)switch(k){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,b=null,B=null,P=null,C.set(0,0,0),U=0,g=k,w=ft}return}Rt=Rt||xt,Ct=Ct||j,Kt=Kt||ot,(xt!==p||Rt!==S)&&(i.blendEquationSeparate(Lt[xt],Lt[Rt]),p=xt,S=Rt),(j!==E||ot!==b||Ct!==B||Kt!==P)&&(i.blendFuncSeparate(Xt[j],Xt[ot],Xt[Ct],Xt[Kt]),E=j,b=ot,B=Ct,P=Kt),(rt.equals(C)===!1||dt!==U)&&(i.blendColor(rt.r,rt.g,rt.b,dt),C.copy(rt),U=dt),g=k,w=!1}function ne(k,xt){k.side===Ze?mt(i.CULL_FACE):st(i.CULL_FACE);let j=k.side===Xe;xt&&(j=!j),Ht(j),k.blending===ts&&k.transparent===!1?O(nn):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const ot=k.stencilWrite;o.setTest(ot),ot&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Zt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function Ft(k){k!==Lh?(st(i.CULL_FACE),k!==A&&(k===Zo?i.cullFace(i.BACK):k===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),A=k}function Mt(k){k!==I&&(Y&&i.lineWidth(k),I=k)}function Zt(k,xt,j){k?(st(i.POLYGON_OFFSET_FILL),(F!==xt||G!==j)&&(i.polygonOffset(xt,j),F=xt,G=j)):mt(i.POLYGON_OFFSET_FILL)}function yt(k){k?st(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+Z-1),D!==k&&(i.activeTexture(k),D=k)}function y(k,xt,j){j===void 0&&(D===null?j=i.TEXTURE0+Z-1:j=D);let ot=N[j];ot===void 0&&(ot={type:void 0,texture:void 0},N[j]=ot),(ot.type!==k||ot.texture!==xt)&&(D!==j&&(i.activeTexture(j),D=j),i.bindTexture(k,xt||et[k]),ot.type=k,ot.texture=xt)}function W(){const k=N[D];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(k){_t.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),_t.copy(k))}function At(k){K.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function ie(k,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let ot=j.get(k);ot===void 0&&(ot=i.getUniformBlockIndex(xt,k.name),j.set(k,ot))}function qt(k,xt){const ot=l.get(xt).get(k);c.get(xt)!==ot&&(i.uniformBlockBinding(xt,ot,k.__bindingPointIndex),c.set(xt,ot))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},D=null,N={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,b=null,S=null,B=null,P=null,C=new $t(0,0,0),U=0,w=!1,M=null,A=null,I=null,F=null,G=null,_t.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:mt,bindFramebuffer:Et,drawBuffers:it,useProgram:ee,setBlending:O,setMaterial:ne,setFlipSided:Ht,setCullFace:Ft,setLineWidth:Mt,setPolygonOffset:Zt,setScissorTest:yt,activeTexture:R,bindTexture:y,unbindTexture:W,compressedTexImage2D:nt,compressedTexImage3D:at,texImage2D:bt,texImage3D:Bt,updateUBOMapping:ie,uniformBlockBinding:qt,texStorage2D:Ot,texStorage3D:ut,texSubImage2D:$,texSubImage3D:It,compressedTexSubImage2D:gt,compressedTexSubImage3D:vt,scissor:Wt,viewport:At,reset:Qt}}function Gl(i,t,e,n){const s=Dm(n);switch(e){case Bc:return i*t;case Hc:return i*t;case Vc:return i*t*2;case Co:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case Do:return i*t*2/s.components*s.byteLength;case kc:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Io:return i*t*4/s.components*s.byteLength;case wr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case qa:return Math.max(i,16)*Math.max(t,8)/4;case Ga:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rr:case ho:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wc:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dm(i){switch(i){case Wn:case Fc:return{byteLength:1,components:1};case Ls:case Oc:case bi:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case wi:case To:case An:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Im(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function m(R,y){return f?new OffscreenCanvas(R,y):Ir("canvas")}function _(R,y,W){let nt=1;const at=yt(R);if((at.width>W||at.height>W)&&(nt=W/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const $=Math.floor(nt*at.width),It=Math.floor(nt*at.height);u===void 0&&(u=m($,It));const gt=y?m($,It):u;return gt.width=$,gt.height=It,gt.getContext("2d").drawImage(R,0,0,$,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+$+"x"+It+")."),gt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,y,W,nt,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=y;if(y===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),y===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),y===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){const It=at?Br:fe.getTransfer(nt);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=It===ve?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(R,y){let W;return R?y===null||y===wi||y===Ti?W=i.DEPTH24_STENCIL8:y===An?W=i.DEPTH32F_STENCIL8:y===Ls&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===wi||y===Ti?W=i.DEPTH_COMPONENT24:y===An?W=i.DEPTH_COMPONENT32F:y===Ls&&(W=i.DEPTH_COMPONENT16),W}function B(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function P(R){const y=R.target;y.removeEventListener("dispose",P),U(y),y.isVideoTexture&&h.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),M(y)}function U(R){const y=n.get(R);if(y.__webglInit===void 0)return;const W=R.source,nt=d.get(W);if(nt){const at=nt[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(R),Object.keys(nt).length===0&&d.delete(W)}n.remove(R)}function w(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const W=R.source,nt=d.get(W);delete nt[y.__cacheKey],a.memory.textures--}function M(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let at=0;at<y.__webglFramebuffer[nt].length;at++)i.deleteFramebuffer(y.__webglFramebuffer[nt][at]);else i.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[nt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=R.textures;for(let nt=0,at=W.length;nt<at;nt++){const $=n.get(W[nt]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(W[nt])}n.remove(R)}let A=0;function I(){A=0}function F(){const R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function G(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Z(R,y){const W=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,R,y);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}function Y(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}function Q(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,y);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}function v(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ht(W,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}const D={[Rn]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},N={[tn]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},z={[ou]:i.NEVER,[du]:i.ALWAYS,[lu]:i.LESS,[Xc]:i.LEQUAL,[cu]:i.EQUAL,[fu]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function J(R,y){if(y.type===An&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===Xr||y.magFilter===ks||y.magFilter===Sn||y.minFilter===sn||y.minFilter===Xr||y.minFilter===ks||y.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,D[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,D[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,D[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,N[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,N[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,z[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==ks&&y.minFilter!==Sn||y.type===An&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function _t(R,y){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",P));const nt=y.source;let at=d.get(nt);at===void 0&&(at={},d.set(nt,at));const $=G(y);if($!==R.__cacheKey){at[$]===void 0&&(at[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),at[$].usedTimes++;const It=at[R.__cacheKey];It!==void 0&&(at[R.__cacheKey].usedTimes--,It.usedTimes===0&&w(y)),R.__cacheKey=$,R.__webglTexture=at[$].texture}return W}function K(R,y,W){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);const at=_t(R,y),$=y.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+W);const It=n.get($);if($.version!==It.__version||at===!0){e.activeTexture(i.TEXTURE0+W);const gt=fe.getPrimaries(fe.workingColorSpace),vt=y.colorSpace===Bn?null:fe.getPrimaries(y.colorSpace),Ot=y.colorSpace===Bn||gt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ut=_(y.image,!1,s.maxTextureSize);ut=Zt(y,ut);const bt=r.convert(y.format,y.colorSpace),Bt=r.convert(y.type);let Wt=b(y.internalFormat,bt,Bt,y.colorSpace,y.isVideoTexture);J(nt,y);let At;const ie=y.mipmaps,qt=y.isVideoTexture!==!0,Qt=It.__version===void 0||at===!0,k=$.dataReady,xt=B(y,ut);if(y.isDepthTexture)Wt=S(y.format===Ai,y.type),Qt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Wt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Wt,ut.width,ut.height,0,bt,Bt,null));else if(y.isDataTexture)if(ie.length>0){qt&&Qt&&e.texStorage2D(i.TEXTURE_2D,xt,Wt,ie[0].width,ie[0].height);for(let j=0,ot=ie.length;j<ot;j++)At=ie[j],qt?k&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,bt,Bt,At.data):e.texImage2D(i.TEXTURE_2D,j,Wt,At.width,At.height,0,bt,Bt,At.data);y.generateMipmaps=!1}else qt?(Qt&&e.texStorage2D(i.TEXTURE_2D,xt,Wt,ut.width,ut.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,bt,Bt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,ut.width,ut.height,0,bt,Bt,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Wt,ie[0].width,ie[0].height,ut.depth);for(let j=0,ot=ie.length;j<ot;j++)if(At=ie[j],y.format!==En)if(bt!==null)if(qt){if(k)if(y.layerUpdates.size>0){const Rt=Gl(At.width,At.height,y.format,y.type);for(const Ct of y.layerUpdates){const Kt=At.data.subarray(Ct*Rt/At.data.BYTES_PER_ELEMENT,(Ct+1)*Rt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ct,At.width,At.height,1,bt,Kt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,At.width,At.height,ut.depth,bt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Wt,At.width,At.height,ut.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,At.width,At.height,ut.depth,bt,Bt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Wt,At.width,At.height,ut.depth,0,bt,Bt,At.data)}else{qt&&Qt&&e.texStorage2D(i.TEXTURE_2D,xt,Wt,ie[0].width,ie[0].height);for(let j=0,ot=ie.length;j<ot;j++)At=ie[j],y.format!==En?bt!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,bt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Wt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,bt,Bt,At.data):e.texImage2D(i.TEXTURE_2D,j,Wt,At.width,At.height,0,bt,Bt,At.data)}else if(y.isDataArrayTexture)if(qt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Wt,ut.width,ut.height,ut.depth),k)if(y.layerUpdates.size>0){const j=Gl(ut.width,ut.height,y.format,y.type);for(const ot of y.layerUpdates){const Rt=ut.data.subarray(ot*j/ut.data.BYTES_PER_ELEMENT,(ot+1)*j/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ut.width,ut.height,1,bt,Bt,Rt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,Bt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,ut.width,ut.height,ut.depth,0,bt,Bt,ut.data);else if(y.isData3DTexture)qt?(Qt&&e.texStorage3D(i.TEXTURE_3D,xt,Wt,ut.width,ut.height,ut.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,Bt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,ut.width,ut.height,ut.depth,0,bt,Bt,ut.data);else if(y.isFramebufferTexture){if(Qt)if(qt)e.texStorage2D(i.TEXTURE_2D,xt,Wt,ut.width,ut.height);else{let j=ut.width,ot=ut.height;for(let Rt=0;Rt<xt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Wt,j,ot,0,bt,Bt,null),j>>=1,ot>>=1}}else if(ie.length>0){if(qt&&Qt){const j=yt(ie[0]);e.texStorage2D(i.TEXTURE_2D,xt,Wt,j.width,j.height)}for(let j=0,ot=ie.length;j<ot;j++)At=ie[j],qt?k&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,bt,Bt,At):e.texImage2D(i.TEXTURE_2D,j,Wt,bt,Bt,At);y.generateMipmaps=!1}else if(qt){if(Qt){const j=yt(ut);e.texStorage2D(i.TEXTURE_2D,xt,Wt,j.width,j.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Bt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Wt,bt,Bt,ut);g(y)&&p(nt),It.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ht(R,y,W){if(y.image.length!==6)return;const nt=_t(R,y),at=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const $=n.get(at);if(at.version!==$.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const It=fe.getPrimaries(fe.workingColorSpace),gt=y.colorSpace===Bn?null:fe.getPrimaries(y.colorSpace),vt=y.colorSpace===Bn||It===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ot=y.isCompressedTexture||y.image[0].isCompressedTexture,ut=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let ot=0;ot<6;ot++)!Ot&&!ut?bt[ot]=_(y.image[ot],!0,s.maxCubemapSize):bt[ot]=ut?y.image[ot].image:y.image[ot],bt[ot]=Zt(y,bt[ot]);const Bt=bt[0],Wt=r.convert(y.format,y.colorSpace),At=r.convert(y.type),ie=b(y.internalFormat,Wt,At,y.colorSpace),qt=y.isVideoTexture!==!0,Qt=$.__version===void 0||nt===!0,k=at.dataReady;let xt=B(y,Bt);J(i.TEXTURE_CUBE_MAP,y);let j;if(Ot){qt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ie,Bt.width,Bt.height);for(let ot=0;ot<6;ot++){j=bt[ot].mipmaps;for(let Rt=0;Rt<j.length;Rt++){const Ct=j[Rt];y.format!==En?Wt!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,Ct.width,Ct.height,Wt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,ie,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,Ct.width,Ct.height,Wt,At,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,ie,Ct.width,Ct.height,0,Wt,At,Ct.data)}}}else{if(j=y.mipmaps,qt&&Qt){j.length>0&&xt++;const ot=yt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ie,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ut){qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,bt[ot].width,bt[ot].height,Wt,At,bt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,bt[ot].width,bt[ot].height,0,Wt,At,bt[ot].data);for(let Rt=0;Rt<j.length;Rt++){const Kt=j[Rt].image[ot].image;qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,Kt.width,Kt.height,Wt,At,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,ie,Kt.width,Kt.height,0,Wt,At,Kt.data)}}else{qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Wt,At,bt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,Wt,At,bt[ot]);for(let Rt=0;Rt<j.length;Rt++){const Ct=j[Rt];qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,Wt,At,Ct.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,ie,Wt,At,Ct.image[ot])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),$.__version=at.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function et(R,y,W,nt,at,$){const It=r.convert(W.format,W.colorSpace),gt=r.convert(W.type),vt=b(W.internalFormat,It,gt,W.colorSpace),Ot=n.get(y),ut=n.get(W);if(ut.__renderTarget=y,!Ot.__hasExternalTextures){const bt=Math.max(1,y.width>>$),Bt=Math.max(1,y.height>>$);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,$,vt,bt,Bt,y.depth,0,It,gt,null):e.texImage2D(at,$,vt,bt,Bt,0,It,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,at,ut.__webglTexture,0,Ht(y)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,at,ut.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const nt=y.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,$=S(y.stencilBuffer,at),It=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=Ht(y);Ft(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,$,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,R)}else{const nt=y.textures;for(let at=0;at<nt.length;at++){const $=nt[at],It=r.convert($.format,$.colorSpace),gt=r.convert($.type),vt=b($.internalFormat,It,gt,$.colorSpace),Ot=Ht(y);W&&Ft(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,vt,y.width,y.height):Ft(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,vt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,vt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(y.depthTexture);nt.__renderTarget=y,(!nt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const at=nt.__webglTexture,$=Ht(y);if(y.depthTexture.format===es)Ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(y.depthTexture.format===Ai)Ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Et(R){const y=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const nt=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=nt}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,R)}else if(W){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=i.createRenderbuffer(),st(y.__webglDepthbuffer[nt],R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),st(y.__webglDepthbuffer,R,!1);else{const nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,y,W){const nt=n.get(R);y!==void 0&&et(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Et(R)}function ee(R){const y=R.texture,W=n.get(R),nt=n.get(y);R.addEventListener("dispose",C);const at=R.textures,$=R.isWebGLCubeRenderTarget===!0,It=at.length>1;if(It||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,a.memory.textures++),$){W.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[gt]=[];for(let vt=0;vt<y.mipmaps.length;vt++)W.__webglFramebuffer[gt][vt]=i.createFramebuffer()}else W.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)W.__webglFramebuffer[gt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(It)for(let gt=0,vt=at.length;gt<vt;gt++){const Ot=n.get(at[gt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ft(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let gt=0;gt<at.length;gt++){const vt=at[gt];W.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[gt]);const Ot=r.convert(vt.format,vt.colorSpace),ut=r.convert(vt.type),bt=b(vt.internalFormat,Ot,ut,vt.colorSpace,R.isXRRenderTarget===!0),Bt=Ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,bt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,W.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),st(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),J(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)et(W.__webglFramebuffer[gt][vt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt);else et(W.__webglFramebuffer[gt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let gt=0,vt=at.length;gt<vt;gt++){const Ot=at[gt],ut=n.get(Ot);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),J(i.TEXTURE_2D,Ot),et(W.__webglFramebuffer,R,Ot,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(Ot)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),J(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)et(W.__webglFramebuffer[vt],R,y,i.COLOR_ATTACHMENT0,gt,vt);else et(W.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,gt,0);g(y)&&p(gt),e.unbindTexture()}R.depthBuffer&&Et(R)}function Lt(R){const y=R.textures;for(let W=0,nt=y.length;W<nt;W++){const at=y[W];if(g(at)){const $=E(R),It=n.get(at).__webglTexture;e.bindTexture($,It),p($),e.unbindTexture()}}}const Xt=[],O=[];function ne(R){if(R.samples>0){if(Ft(R)===!1){const y=R.textures,W=R.width,nt=R.height;let at=i.COLOR_BUFFER_BIT;const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(R),gt=y.length>1;if(gt)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[vt]);const Ot=n.get(y[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,W,nt,0,0,W,nt,at,i.NEAREST),c===!0&&(Xt.length=0,O.length=0,Xt.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Xt.push($),O.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,It.__webglColorRenderbuffer[vt]);const Ot=n.get(y[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ht(R){return Math.min(s.maxSamples,R.samples)}function Ft(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Zt(R,y){const W=R.colorSpace,nt=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==li&&W!==Bn&&(fe.getTransfer(W)===ve?(nt!==En||at!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function yt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=v,this.rebindTextures=it,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ft}function Lm(i,t){function e(n,s=Bn){let r;const a=fe.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Bc)return i.ALPHA;if(n===kc)return i.RGB;if(n===En)return i.RGBA;if(n===Hc)return i.LUMINANCE;if(n===Vc)return i.LUMINANCE_ALPHA;if(n===es)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===wr||n===br||n===Tr||n===Ar)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===$a||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===to)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===ho||n===uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===fo||n===po||n===mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Um extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nm={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Om=`
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

}`;class zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mn({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bm extends ls{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new zm,g=e.getContextAttributes();let p=null,E=null;const b=[],S=[],B=new wt;let P=null;const C=new cn;C.viewport=new xe;const U=new cn;U.viewport=new xe;const w=[C,U],M=new Um;let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=b[K];return ht===void 0&&(ht=new va,b[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=b[K];return ht===void 0&&(ht=new va,b[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=b[K];return ht===void 0&&(ht=new va,b[K]=ht),ht.getHandSpace()};function F(K){const ht=S.indexOf(K.inputSource);if(ht===-1)return;const et=b[ht];et!==void 0&&(et.update(K.inputSource,K.frame,l||a),et.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<b.length;K++){const ht=S[K];ht!==null&&(S[K]=null,b[K].disconnect(ht))}A=null,I=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const ht={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Xn(f.framebufferWidth,f.framebufferHeight,{format:En,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ht=null,et=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=g.stencil?Ai:es,et=g.stencil?Ti:wi);const mt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Xn(d.textureWidth,d.textureHeight,{format:En,type:Wn,depthTexture:new Bo(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(K){for(let ht=0;ht<K.removed.length;ht++){const et=K.removed[ht],st=S.indexOf(et);st>=0&&(S[st]=null,b[st].disconnect(et))}for(let ht=0;ht<K.added.length;ht++){const et=K.added[ht];let st=S.indexOf(et);if(st===-1){for(let Et=0;Et<b.length;Et++)if(Et>=S.length){S.push(et),st=Et;break}else if(S[Et]===null){S[Et]=et,st=Et;break}if(st===-1)break}const mt=b[st];mt&&mt.connect(et)}}const Y=new H,Q=new H;function v(K,ht,et){Y.setFromMatrixPosition(ht.matrixWorld),Q.setFromMatrixPosition(et.matrixWorld);const st=Y.distanceTo(Q),mt=ht.projectionMatrix.elements,Et=et.projectionMatrix.elements,it=mt[14]/(mt[10]-1),ee=mt[14]/(mt[10]+1),Lt=(mt[9]+1)/mt[5],Xt=(mt[9]-1)/mt[5],O=(mt[8]-1)/mt[0],ne=(Et[8]+1)/Et[0],Ht=it*O,Ft=it*ne,Mt=st/(-O+ne),Zt=Mt*-O;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Zt),K.translateZ(Mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),mt[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const yt=it+Mt,R=ee+Mt,y=Ht-Zt,W=Ft+(st-Zt),nt=Lt*ee/R*yt,at=Xt*ee/R*yt;K.projectionMatrix.makePerspective(y,W,nt,at,yt,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function D(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ht=K.near,et=K.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(et=_.depthFar)),M.near=U.near=C.near=ht,M.far=U.far=C.far=et,(A!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,I=M.far),C.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,M.layers.mask=C.layers.mask|U.layers.mask;const st=K.parent,mt=M.cameras;D(M,st);for(let Et=0;Et<mt.length;Et++)D(mt[Et],st);mt.length===2?v(M,C,U):M.projectionMatrix.copy(C.projectionMatrix),N(K,M,st)};function N(K,ht,et){et===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(et.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Us*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let z=null;function J(K,ht){if(h=ht.getViewerPose(l||a),m=ht,h!==null){const et=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let st=!1;et.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Et=0;Et<et.length;Et++){const it=et[Et];let ee=null;if(f!==null)ee=f.getViewport(it);else{const Xt=u.getViewSubImage(d,it);ee=Xt.viewport,Et===0&&(t.setRenderTargetTextures(E,Xt.colorTexture,d.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(E))}let Lt=w[Et];Lt===void 0&&(Lt=new cn,Lt.layers.enable(Et),Lt.viewport=new xe,w[Et]=Lt),Lt.matrix.fromArray(it.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(it.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(ee.x,ee.y,ee.width,ee.height),Et===0&&(M.matrix.copy(Lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Lt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Et=u.getDepthInformation(et[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,s.renderState)}}for(let et=0;et<b.length;et++){const st=S[et],mt=b[et];st!==null&&mt!==void 0&&mt.update(st,ht,l||a)}z&&z(K,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),m=null}const _t=new nh;_t.setAnimationLoop(J),this.setAnimationLoop=function(K){z=K},this.dispose=function(){}}}const mi=new Cn,km=new Me;function Hm(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,E,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,S=E.envMapRotation;b&&(g.envMap.value=b,mi.copy(S),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(mi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const S=b.program;n.uniformBlockBinding(E,S)}function l(E,b){let S=s[E.id];S===void 0&&(m(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",g));const B=b.program;n.updateUBOMapping(E,B);const P=t.render.frame;r[E.id]!==P&&(d(E),r[E.id]=P)}function h(E){const b=u();E.__bindingPointIndex=b;const S=i.createBuffer(),B=E.__size,P=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,B,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],S=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let P=0,C=S.length;P<C;P++){const U=Array.isArray(S[P])?S[P]:[S[P]];for(let w=0,M=U.length;w<M;w++){const A=U[w];if(f(A,P,w,B)===!0){const I=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let Z=0;Z<F.length;Z++){const Y=F[Z],Q=_(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,I+G,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,b,S,B){const P=E.value,C=b+"_"+S;if(B[C]===void 0)return typeof P=="number"||typeof P=="boolean"?B[C]=P:B[C]=P.clone(),!0;{const U=B[C];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return B[C]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function m(E){const b=E.uniforms;let S=0;const B=16;for(let C=0,U=b.length;C<U;C++){const w=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,A=w.length;M<A;M++){const I=w[M],F=Array.isArray(I.value)?I.value:[I.value];for(let G=0,Z=F.length;G<Z;G++){const Y=F[G],Q=_(Y),v=S%B,D=v%Q.boundary,N=v+D;S+=D,N!==0&&B-N<Q.storage&&(S+=B-N),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Q.storage}}}const P=S%B;return P>0&&(S+=B-P),E.__size=S,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function g(E){const b=E.target;b.removeEventListener("dispose",g);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Gm{constructor(t={}){const{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=ai,this.toneMappingExposure=1;const S=this;let B=!1,P=0,C=0,U=null,w=-1,M=null;const A=new xe,I=new xe;let F=null;const G=new $t(0);let Z=0,Y=e.width,Q=e.height,v=1,D=null,N=null;const z=new xe(0,0,Y,Q),J=new xe(0,0,Y,Q);let _t=!1;const K=new Fo;let ht=!1,et=!1;const st=new Me,mt=new Me,Et=new H,it=new xe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Xt(){return U===null?v:1}let O=n;function ne(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bo}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),O===null){const L="webgl2";if(O=ne(L,x),O===null)throw ne(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ht,Ft,Mt,Zt,yt,R,y,W,nt,at,$,It,gt,vt,Ot,ut,bt,Bt,Wt,At,ie,qt,Qt,k;function xt(){Ht=new Zp(O),Ht.init(),qt=new Lm(O,Ht),Ft=new Vp(O,Ht,t,qt),Mt=new Pm(O,Ht),Ft.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Zt=new $p(O),yt=new mm,R=new Im(O,Ht,Mt,yt,Ft,qt,Zt),y=new Wp(S),W=new Yp(S),nt=new sf(O),Qt=new kp(O,nt),at=new Kp(O,nt,Zt,Qt),$=new Qp(O,at,nt,Zt),Wt=new Jp(O,Ft,R),ut=new Gp(yt),It=new pm(S,y,W,Ht,Ft,Qt,ut),gt=new Hm(S,yt),vt=new _m,Ot=new Em(Ht),Bt=new Bp(S,y,W,Mt,$,f,c),bt=new Rm(S,$,Ft),k=new Vm(O,Zt,Ft,Mt),At=new Hp(O,Ht,Zt),ie=new jp(O,Ht,Zt),Zt.programs=It.programs,S.capabilities=Ft,S.extensions=Ht,S.properties=yt,S.renderLists=vt,S.shadowMap=bt,S.state=Mt,S.info=Zt}xt();const j=new Bm(S,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const x=Ht.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ht.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(x){x!==void 0&&(v=x,this.setSize(Y,Q,!1))},this.getSize=function(x){return x.set(Y,Q)},this.setSize=function(x,L,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,Q=L,e.width=Math.floor(x*v),e.height=Math.floor(L*v),V===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Y*v,Q*v).floor()},this.setDrawingBufferSize=function(x,L,V){Y=x,Q=L,v=V,e.width=Math.floor(x*V),e.height=Math.floor(L*V),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(z)},this.setViewport=function(x,L,V,X){x.isVector4?z.set(x.x,x.y,x.z,x.w):z.set(x,L,V,X),Mt.viewport(A.copy(z).multiplyScalar(v).round())},this.getScissor=function(x){return x.copy(J)},this.setScissor=function(x,L,V,X){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,L,V,X),Mt.scissor(I.copy(J).multiplyScalar(v).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(x){Mt.setScissorTest(_t=x)},this.setOpaqueSort=function(x){D=x},this.setTransparentSort=function(x){N=x},this.getClearColor=function(x){return x.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(x=!0,L=!0,V=!0){let X=0;if(x){let T=!1;if(U!==null){const tt=U.texture.format;T=tt===Io||tt===Do||tt===Po}if(T){const tt=U.texture.type,pt=tt===Wn||tt===wi||tt===Ls||tt===Ti||tt===Ao||tt===Ro,Pt=Bt.getClearColor(),Ut=Bt.getClearAlpha(),Yt=Pt.r,Jt=Pt.g,zt=Pt.b;pt?(m[0]=Yt,m[1]=Jt,m[2]=zt,m[3]=Ut,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=Yt,_[1]=Jt,_[2]=zt,_[3]=Ut,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}L&&(X|=O.DEPTH_BUFFER_BIT),V&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),vt.dispose(),Ot.dispose(),yt.dispose(),y.dispose(),W.dispose(),$.dispose(),Qt.dispose(),k.dispose(),It.dispose(),j.dispose(),j.removeEventListener("sessionstart",ae),j.removeEventListener("sessionend",Oe),Re.stop()};function ot(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const x=Zt.autoReset,L=bt.enabled,V=bt.autoUpdate,X=bt.needsUpdate,T=bt.type;xt(),Zt.autoReset=x,bt.enabled=L,bt.autoUpdate=V,bt.needsUpdate=X,bt.type=T}function Ct(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Kt(x){const L=x.target;L.removeEventListener("dispose",Kt),rt(L)}function rt(x){dt(x),yt.remove(x)}function dt(x){const L=yt.get(x).programs;L!==void 0&&(L.forEach(function(V){It.releaseProgram(V)}),x.isShaderMaterial&&It.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,V,X,T,tt){L===null&&(L=ee);const pt=T.isMesh&&T.matrixWorld.determinant()<0,Pt=q(x,L,V,X,T);Mt.setMaterial(X,pt);let Ut=V.index,Yt=1;if(X.wireframe===!0){if(Ut=at.getWireframeAttribute(V),Ut===void 0)return;Yt=2}const Jt=V.drawRange,zt=V.attributes.position;let de=Jt.start*Yt,Se=(Jt.start+Jt.count)*Yt;tt!==null&&(de=Math.max(de,tt.start*Yt),Se=Math.min(Se,(tt.start+tt.count)*Yt)),Ut!==null?(de=Math.max(de,0),Se=Math.min(Se,Ut.count)):zt!=null&&(de=Math.max(de,0),Se=Math.min(Se,zt.count));const we=Se-de;if(we<0||we===1/0)return;Qt.setup(T,X,Pt,V,Ut);let en,me=At;if(Ut!==null&&(en=nt.get(Ut),me=ie,me.setIndex(en)),T.isMesh)X.wireframe===!0?(Mt.setLineWidth(X.wireframeLinewidth*Xt()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(T.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),Mt.setLineWidth(kt*Xt()),T.isLineSegments?me.setMode(O.LINES):T.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else T.isPoints?me.setMode(O.POINTS):T.isSprite&&me.setMode(O.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)me.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))me.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const kt=T._multiDrawStarts,Dn=T._multiDrawCounts,ge=T._multiDrawCount,_n=Ut?nt.get(Ut).bytesPerElement:1,Ri=yt.get(X).currentProgram.getUniforms();for(let an=0;an<ge;an++)Ri.setValue(O,"_gl_DrawID",an),me.render(kt[an]/_n,Dn[an])}else if(T.isInstancedMesh)me.renderInstances(de,we,T.count);else if(V.isInstancedBufferGeometry){const kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Dn=Math.min(V.instanceCount,kt);me.renderInstances(de,we,Dn)}else me.render(de,we)};function ft(x,L,V){x.transparent===!0&&x.side===Ze&&x.forceSinglePass===!1?(x.side=Xe,x.needsUpdate=!0,Pe(x,L,V),x.side=oi,x.needsUpdate=!0,Pe(x,L,V),x.side=Ze):Pe(x,L,V)}this.compile=function(x,L,V=null){V===null&&(V=x),p=Ot.get(V),p.init(L),b.push(p),V.traverseVisible(function(T){T.isLight&&T.layers.test(L.layers)&&(p.pushLight(T),T.castShadow&&p.pushShadow(T))}),x!==V&&x.traverseVisible(function(T){T.isLight&&T.layers.test(L.layers)&&(p.pushLight(T),T.castShadow&&p.pushShadow(T))}),p.setupLights();const X=new Set;return x.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const tt=T.material;if(tt)if(Array.isArray(tt))for(let pt=0;pt<tt.length;pt++){const Pt=tt[pt];ft(Pt,V,T),X.add(Pt)}else ft(tt,V,T),X.add(tt)}),b.pop(),p=null,X},this.compileAsync=function(x,L,V=null){const X=this.compile(x,L,V);return new Promise(T=>{function tt(){if(X.forEach(function(pt){yt.get(pt).currentProgram.isReady()&&X.delete(pt)}),X.size===0){T(x);return}setTimeout(tt,10)}Ht.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Dt=null;function Vt(x){Dt&&Dt(x)}function ae(){Re.stop()}function Oe(){Re.start()}const Re=new nh;Re.setAnimationLoop(Vt),typeof self!="undefined"&&Re.setContext(self),this.setAnimationLoop=function(x){Dt=x,j.setAnimationLoop(x),x===null?Re.stop():Re.start()},j.addEventListener("sessionstart",ae),j.addEventListener("sessionend",Oe),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(L),L=j.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,U),p=Ot.get(x,b.length),p.init(L),b.push(p),mt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(mt),et=this.localClippingEnabled,ht=ut.init(this.clippingPlanes,et),g=vt.get(x,E.length),g.init(),E.push(g),j.enabled===!0&&j.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&Ce(tt,L,-1/0,S.sortObjects)}Ce(x,L,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(D,N),Lt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Lt&&Bt.addToRenderList(g,x),this.info.render.frame++,ht===!0&&ut.beginShadows();const V=p.state.shadowsArray;bt.render(V,x,L),ht===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,T=g.transmissive;if(p.setupLights(),L.isArrayCamera){const tt=L.cameras;if(T.length>0)for(let pt=0,Pt=tt.length;pt<Pt;pt++){const Ut=tt[pt];rn(X,T,x,Ut)}Lt&&Bt.render(x);for(let pt=0,Pt=tt.length;pt<Pt;pt++){const Ut=tt[pt];Pn(g,x,Ut,Ut.viewport)}}else T.length>0&&rn(X,T,x,L),Lt&&Bt.render(x),Pn(g,x,L);U!==null&&(R.updateMultisampleRenderTarget(U),R.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,L),Qt.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ht===!0&&ut.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Ce(x,L,V,X){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||K.intersectsSprite(x)){X&&it.setFromMatrixPosition(x.matrixWorld).applyMatrix4(mt);const pt=$.update(x),Pt=x.material;Pt.visible&&g.push(x,pt,Pt,V,it.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||K.intersectsObject(x))){const pt=$.update(x),Pt=x.material;if(X&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),it.copy(x.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),it.copy(pt.boundingSphere.center)),it.applyMatrix4(x.matrixWorld).applyMatrix4(mt)),Array.isArray(Pt)){const Ut=pt.groups;for(let Yt=0,Jt=Ut.length;Yt<Jt;Yt++){const zt=Ut[Yt],de=Pt[zt.materialIndex];de&&de.visible&&g.push(x,pt,de,V,it.z,zt)}}else Pt.visible&&g.push(x,pt,Pt,V,it.z,null)}}const tt=x.children;for(let pt=0,Pt=tt.length;pt<Pt;pt++)Ce(tt[pt],L,V,X)}function Pn(x,L,V,X){const T=x.opaque,tt=x.transmissive,pt=x.transparent;p.setupLightsView(V),ht===!0&&ut.setGlobalState(S.clippingPlanes,V),X&&Mt.viewport(A.copy(X)),T.length>0&&je(T,L,V),tt.length>0&&je(tt,L,V),pt.length>0&&je(pt,L,V),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function rn(x,L,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Xn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?bi:Wn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const tt=p.state.transmissionRenderTarget[X.id],pt=X.viewport||A;tt.setSize(pt.z,pt.w);const Pt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(G),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),Lt&&Bt.render(V);const Ut=S.toneMapping;S.toneMapping=ai;const Yt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ht===!0&&ut.setGlobalState(S.clippingPlanes,X),je(x,V,X),R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let zt=0,de=L.length;zt<de;zt++){const Se=L[zt],we=Se.object,en=Se.geometry,me=Se.material,kt=Se.group;if(me.side===Ze&&we.layers.test(X.layers)){const Dn=me.side;me.side=Xe,me.needsUpdate=!0,un(we,V,X,en,me,kt),me.side=Dn,me.needsUpdate=!0,Jt=!0}}Jt===!0&&(R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt))}S.setRenderTarget(Pt),S.setClearColor(G,Z),Yt!==void 0&&(X.viewport=Yt),S.toneMapping=Ut}function je(x,L,V){const X=L.isScene===!0?L.overrideMaterial:null;for(let T=0,tt=x.length;T<tt;T++){const pt=x[T],Pt=pt.object,Ut=pt.geometry,Yt=X===null?pt.material:X,Jt=pt.group;Pt.layers.test(V.layers)&&un(Pt,L,V,Ut,Yt,Jt)}}function un(x,L,V,X,T,tt){x.onBeforeRender(S,L,V,X,T,tt),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),T.onBeforeRender(S,L,V,X,x,tt),T.transparent===!0&&T.side===Ze&&T.forceSinglePass===!1?(T.side=Xe,T.needsUpdate=!0,S.renderBufferDirect(V,L,X,T,x,tt),T.side=oi,T.needsUpdate=!0,S.renderBufferDirect(V,L,X,T,x,tt),T.side=Ze):S.renderBufferDirect(V,L,X,T,x,tt),x.onAfterRender(S,L,V,X,T,tt)}function Pe(x,L,V){L.isScene!==!0&&(L=ee);const X=yt.get(x),T=p.state.lights,tt=p.state.shadowsArray,pt=T.state.version,Pt=It.getParameters(x,T.state,tt,L,V),Ut=It.getProgramCacheKey(Pt);let Yt=X.programs;X.environment=x.isMeshStandardMaterial?L.environment:null,X.fog=L.fog,X.envMap=(x.isMeshStandardMaterial?W:y).get(x.envMap||X.environment),X.envMapRotation=X.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Yt===void 0&&(x.addEventListener("dispose",Kt),Yt=new Map,X.programs=Yt);let Jt=Yt.get(Ut);if(Jt!==void 0){if(X.currentProgram===Jt&&X.lightsStateVersion===pt)return Le(x,Pt),Jt}else Pt.uniforms=It.getUniforms(x),x.onBeforeCompile(Pt,S),Jt=It.acquireProgram(Pt,Ut),Yt.set(Ut,Jt),X.uniforms=Pt.uniforms;const zt=X.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(zt.clippingPlanes=ut.uniform),Le(x,Pt),X.needsLights=St(x),X.lightsStateVersion=pt,X.needsLights&&(zt.ambientLightColor.value=T.state.ambient,zt.lightProbe.value=T.state.probe,zt.directionalLights.value=T.state.directional,zt.directionalLightShadows.value=T.state.directionalShadow,zt.spotLights.value=T.state.spot,zt.spotLightShadows.value=T.state.spotShadow,zt.rectAreaLights.value=T.state.rectArea,zt.ltc_1.value=T.state.rectAreaLTC1,zt.ltc_2.value=T.state.rectAreaLTC2,zt.pointLights.value=T.state.point,zt.pointLightShadows.value=T.state.pointShadow,zt.hemisphereLights.value=T.state.hemi,zt.directionalShadowMap.value=T.state.directionalShadowMap,zt.directionalShadowMatrix.value=T.state.directionalShadowMatrix,zt.spotShadowMap.value=T.state.spotShadowMap,zt.spotLightMatrix.value=T.state.spotLightMatrix,zt.spotLightMap.value=T.state.spotLightMap,zt.pointShadowMap.value=T.state.pointShadowMap,zt.pointShadowMatrix.value=T.state.pointShadowMatrix),X.currentProgram=Jt,X.uniformsList=null,Jt}function he(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=Cr.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Le(x,L){const V=yt.get(x);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function q(x,L,V,X,T){L.isScene!==!0&&(L=ee),R.resetTextureUnits();const tt=L.fog,pt=X.isMeshStandardMaterial?L.environment:null,Pt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:li,Ut=(X.isMeshStandardMaterial?W:y).get(X.envMap||pt),Yt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Jt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),zt=!!V.morphAttributes.position,de=!!V.morphAttributes.normal,Se=!!V.morphAttributes.color;let we=ai;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(we=S.toneMapping);const en=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=en!==void 0?en.length:0,kt=yt.get(X),Dn=p.state.lights;if(ht===!0&&(et===!0||x!==M)){const fn=x===M&&X.id===w;ut.setState(X,x,fn)}let ge=!1;X.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Dn.state.version||kt.outputColorSpace!==Pt||T.isBatchedMesh&&kt.batching===!1||!T.isBatchedMesh&&kt.batching===!0||T.isBatchedMesh&&kt.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&kt.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&kt.instancing===!1||!T.isInstancedMesh&&kt.instancing===!0||T.isSkinnedMesh&&kt.skinning===!1||!T.isSkinnedMesh&&kt.skinning===!0||T.isInstancedMesh&&kt.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&kt.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&kt.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&kt.instancingMorph===!1&&T.morphTexture!==null||kt.envMap!==Ut||X.fog===!0&&kt.fog!==tt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ut.numPlanes||kt.numIntersection!==ut.numIntersection)||kt.vertexAlphas!==Yt||kt.vertexTangents!==Jt||kt.morphTargets!==zt||kt.morphNormals!==de||kt.morphColors!==Se||kt.toneMapping!==we||kt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,kt.__version=X.version);let _n=kt.currentProgram;ge===!0&&(_n=Pe(X,L,T));let Ri=!1,an=!1,hs=!1;const be=_n.getUniforms(),wn=kt.uniforms;if(Mt.useProgram(_n.program)&&(Ri=!0,an=!0,hs=!0),X.id!==w&&(w=X.id,an=!0),Ri||M!==x){Mt.buffers.depth.getReversed()?(st.copy(x.projectionMatrix),Lu(st),Uu(st),be.setValue(O,"projectionMatrix",st)):be.setValue(O,"projectionMatrix",x.projectionMatrix),be.setValue(O,"viewMatrix",x.matrixWorldInverse);const Zn=be.map.cameraPosition;Zn!==void 0&&Zn.setValue(O,Et.setFromMatrixPosition(x.matrixWorld)),Ft.logarithmicDepthBuffer&&be.setValue(O,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&be.setValue(O,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,an=!0,hs=!0)}if(T.isSkinnedMesh){be.setOptional(O,T,"bindMatrix"),be.setOptional(O,T,"bindMatrixInverse");const fn=T.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),be.setValue(O,"boneTexture",fn.boneTexture,R))}T.isBatchedMesh&&(be.setOptional(O,T,"batchingTexture"),be.setValue(O,"batchingTexture",T._matricesTexture,R),be.setOptional(O,T,"batchingIdTexture"),be.setValue(O,"batchingIdTexture",T._indirectTexture,R),be.setOptional(O,T,"batchingColorTexture"),T._colorsTexture!==null&&be.setValue(O,"batchingColorTexture",T._colorsTexture,R));const us=V.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&Wt.update(T,V,_n),(an||kt.receiveShadow!==T.receiveShadow)&&(kt.receiveShadow=T.receiveShadow,be.setValue(O,"receiveShadow",T.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(wn.envMap.value=Ut,wn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&L.environment!==null&&(wn.envMapIntensity.value=L.environmentIntensity),an&&(be.setValue(O,"toneMappingExposure",S.toneMappingExposure),kt.needsLights&&lt(wn,hs),tt&&X.fog===!0&&gt.refreshFogUniforms(wn,tt),gt.refreshMaterialUniforms(wn,X,v,Q,p.state.transmissionRenderTarget[x.id]),Cr.upload(O,he(kt),wn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Cr.upload(O,he(kt),wn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&be.setValue(O,"center",T.center),be.setValue(O,"modelViewMatrix",T.modelViewMatrix),be.setValue(O,"normalMatrix",T.normalMatrix),be.setValue(O,"modelMatrix",T.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const fn=X.uniformsGroups;for(let Zn=0,Kn=fn.length;Zn<Kn;Zn++){const qo=fn[Zn];k.update(qo,_n),k.bind(qo,_n)}}return _n}function lt(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function St(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,L,V){yt.get(x.texture).__webglTexture=L,yt.get(x.depthTexture).__webglTexture=V;const X=yt.get(x);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const V=yt.get(x);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,V=0){U=x,P=L,C=V;let X=!0,T=null,tt=!1,pt=!1;if(x){const Ut=yt.get(x);if(Ut.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(Ut.__webglFramebuffer===void 0)R.setupRenderTarget(x);else if(Ut.__hasExternalTextures)R.rebindTextures(x,yt.get(x.texture).__webglTexture,yt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const zt=x.depthTexture;if(Ut.__boundDepthTexture!==zt){if(zt!==null&&yt.has(zt)&&(x.width!==zt.image.width||x.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(x)}}const Yt=x.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(pt=!0);const Jt=yt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Jt[L])?T=Jt[L][V]:T=Jt[L],tt=!0):x.samples>0&&R.useMultisampledRTT(x)===!1?T=yt.get(x).__webglMultisampledFramebuffer:Array.isArray(Jt)?T=Jt[V]:T=Jt,A.copy(x.viewport),I.copy(x.scissor),F=x.scissorTest}else A.copy(z).multiplyScalar(v).floor(),I.copy(J).multiplyScalar(v).floor(),F=_t;if(Mt.bindFramebuffer(O.FRAMEBUFFER,T)&&X&&Mt.drawBuffers(x,T),Mt.viewport(A),Mt.scissor(I),Mt.setScissorTest(F),tt){const Ut=yt.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ut.__webglTexture,V)}else if(pt){const Ut=yt.get(x.texture),Yt=L||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,Yt)}w=-1},this.readRenderTargetPixels=function(x,L,V,X,T,tt,pt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pt!==void 0&&(Pt=Pt[pt]),Pt){Mt.bindFramebuffer(O.FRAMEBUFFER,Pt);try{const Ut=x.texture,Yt=Ut.format,Jt=Ut.type;if(!Ft.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-X&&V>=0&&V<=x.height-T&&O.readPixels(L,V,X,T,qt.convert(Yt),qt.convert(Jt),tt)}finally{const Ut=U!==null?yt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(x,L,V,X,T,tt,pt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pt!==void 0&&(Pt=Pt[pt]),Pt){const Ut=x.texture,Yt=Ut.format,Jt=Ut.type;if(!Ft.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-X&&V>=0&&V<=x.height-T){Mt.bindFramebuffer(O.FRAMEBUFFER,Pt);const zt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,zt),O.bufferData(O.PIXEL_PACK_BUFFER,tt.byteLength,O.STREAM_READ),O.readPixels(L,V,X,T,qt.convert(Yt),qt.convert(Jt),0);const de=U!==null?yt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(O.FRAMEBUFFER,de);const Se=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Iu(O,Se,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,zt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,tt),O.deleteBuffer(zt),O.deleteSync(Se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,V=0){x.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const X=Math.pow(2,-V),T=Math.floor(x.image.width*X),tt=Math.floor(x.image.height*X),pt=L!==null?L.x:0,Pt=L!==null?L.y:0;R.setTexture2D(x,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,pt,Pt,T,tt),Mt.unbindTexture()},this.copyTextureToTexture=function(x,L,V=null,X=null,T=0){x.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,x=arguments[1],L=arguments[2],T=arguments[3]||0,V=null);let tt,pt,Pt,Ut,Yt,Jt,zt,de,Se;const we=x.isCompressedTexture?x.mipmaps[T]:x.image;V!==null?(tt=V.max.x-V.min.x,pt=V.max.y-V.min.y,Pt=V.isBox3?V.max.z-V.min.z:1,Ut=V.min.x,Yt=V.min.y,Jt=V.isBox3?V.min.z:0):(tt=we.width,pt=we.height,Pt=we.depth||1,Ut=0,Yt=0,Jt=0),X!==null?(zt=X.x,de=X.y,Se=X.z):(zt=0,de=0,Se=0);const en=qt.convert(L.format),me=qt.convert(L.type);let kt;L.isData3DTexture?(R.setTexture3D(L,0),kt=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(R.setTexture2DArray(L,0),kt=O.TEXTURE_2D_ARRAY):(R.setTexture2D(L,0),kt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);const Dn=O.getParameter(O.UNPACK_ROW_LENGTH),ge=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=O.getParameter(O.UNPACK_SKIP_PIXELS),Ri=O.getParameter(O.UNPACK_SKIP_ROWS),an=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,we.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Jt);const hs=x.isDataArrayTexture||x.isData3DTexture,be=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const wn=yt.get(x),us=yt.get(L),fn=yt.get(wn.__renderTarget),Zn=yt.get(us.__renderTarget);Mt.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),Mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Kn=0;Kn<Pt;Kn++)hs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.get(x).__webglTexture,T,Jt+Kn),x.isDepthTexture?(be&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.get(L).__webglTexture,T,Se+Kn),O.blitFramebuffer(Ut,Yt,tt,pt,zt,de,tt,pt,O.DEPTH_BUFFER_BIT,O.NEAREST)):be?O.copyTexSubImage3D(kt,T,zt,de,Se+Kn,Ut,Yt,tt,pt):O.copyTexSubImage2D(kt,T,zt,de,Se+Kn,Ut,Yt,tt,pt);Mt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else be?x.isDataTexture||x.isData3DTexture?O.texSubImage3D(kt,T,zt,de,Se,tt,pt,Pt,en,me,we.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(kt,T,zt,de,Se,tt,pt,Pt,en,we.data):O.texSubImage3D(kt,T,zt,de,Se,tt,pt,Pt,en,me,we):x.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,T,zt,de,tt,pt,en,me,we.data):x.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,T,zt,de,we.width,we.height,en,we.data):O.texSubImage2D(O.TEXTURE_2D,T,zt,de,tt,pt,en,me,we);O.pixelStorei(O.UNPACK_ROW_LENGTH,Dn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ri),O.pixelStorei(O.UNPACK_SKIP_IMAGES,an),T===0&&L.generateMipmaps&&O.generateMipmap(kt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,V=null,X=null,T=0){return x.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,x=arguments[2],L=arguments[3],T=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,V,X,T)},this.initRenderTarget=function(x){yt.get(x).__webglFramebuffer===void 0&&R.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?R.setTextureCube(x,0):x.isData3DTexture?R.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?R.setTexture2DArray(x,0):R.setTexture2D(x,0),Mt.unbindTexture()},this.resetState=function(){P=0,C=0,U=null,Mt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}class ko{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new ko(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hr extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=go,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new H;class Lr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oh extends Yn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gi;const gs=new H,Wi=new H,Xi=new H,qi=new wt,_s=new wt,lh=new Me,or=new H,vs=new H,lr=new H,Wl=new wt,xa=new wt,Xl=new wt;class Xm extends Ie{constructor(t=new oh){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wm(e,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Lr(n,3,0,!1)),Gi.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Gi,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;cr(or.set(-.5,-.5,0),Xi,a,Wi,s,r),cr(vs.set(.5,-.5,0),Xi,a,Wi,s,r),cr(lr.set(.5,.5,0),Xi,a,Wi,s,r),Wl.set(0,0),xa.set(1,0),Xl.set(1,1);let o=t.ray.intersectTriangle(or,vs,lr,!1,gs);if(o===null&&(cr(vs.set(-.5,.5,0),Xi,a,Wi,s,r),xa.set(0,1),o=t.ray.intersectTriangle(or,lr,vs,!1,gs),o===null))return;const c=t.ray.origin.distanceTo(gs);c<t.near||c>t.far||e.push({distance:c,point:gs.clone(),uv:pn.getInterpolation(gs,or,vs,lr,Wl,xa,Xl,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function cr(i,t,e,n,s,r){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_s.x=r*qi.x-s*qi.y,_s.y=s*qi.x+r*qi.y):_s.copy(qi),i.copy(t),i.x+=_s.x,i.y+=_s.y,i.applyMatrix4(lh)}class qm extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,c,l=tn,h=tn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ch extends Yn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new H,Nr=new H,ql=new Me,xs=new No,hr=new Bs,Ma=new H,Yl=new H;class Ym extends Ie{constructor(t=new Ae,e=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;ql.copy(s).invert(),xs.copy(t.ray).applyMatrix4(ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),E=h.getX(_+1),b=ur(this,t,xs,c,p,E);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=ur(this,t,xs,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=ur(this,t,xs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ur(this,t,xs,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ur(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Nr.fromBufferAttribute(a,r),e.distanceSqToSegment(Ur,Nr,Ma,Yl)>n)return;Ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ma);if(!(c<t.near||c>t.far))return{distance:c,point:Yl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Zl=new H,Kl=new H;class Zm extends Ym{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zl.fromBufferAttribute(e,s),Kl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zl.distanceTo(Kl);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hh extends Yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jl=new Me,xo=new No,fr=new Bs,dr=new H;class Km extends Ie{constructor(t=new Ae,e=new hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;jl.copy(s).invert(),xo.copy(t.ray).applyMatrix4(jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);dr.fromBufferAttribute(u,g),$l(dr,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)dr.fromBufferAttribute(u,m),$l(dr,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $l(i,t,e,n,s,r,a){const o=xo.distanceSqToPoint(i);if(o<e){const c=new H;xo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ci extends Ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn extends Ae{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new H,d=new wt,f=new H,m=new H,_=new H;let g=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let E=0;E<=e;E++){const b=n+E*h*s,S=Math.sin(b),B=Math.cos(b);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*S,u.y=t[P].y,u.z=t[P].x*B,a.push(u.x,u.y,u.z),d.x=E/e,d.y=P/(t.length-1),o.push(d.x,d.y);const C=c[3*P+0]*S,U=c[3*P+1],w=c[3*P+0]*B;l.push(C,U,w)}}for(let E=0;E<e;E++)for(let b=0;b<t.length-1;b++){const S=b+E*t.length,B=S,P=S+t.length,C=S+t.length+1,U=S+1;r.push(B,P,U),r.push(C,U,P)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.points,t.segments,t.phiStart,t.phiLength)}}class Ei extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new H,h=new wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function E(){const S=new H,B=new H;let P=0;const C=(e-t)/n;for(let U=0;U<=r;U++){const w=[],M=U/r,A=M*(e-t)+t;for(let I=0;I<=s;I++){const F=I/s,G=F*c+o,Z=Math.sin(G),Y=Math.cos(G);B.x=A*Z,B.y=-M*n+g,B.z=A*Y,u.push(B.x,B.y,B.z),S.set(Z,C,Y).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-M),w.push(m++)}_.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){const M=_[w][U],A=_[w+1][U],I=_[w+1][U+1],F=_[w][U+1];(t>0||w!==0)&&(h.push(M,A,F),P+=3),(e>0||w!==r-1)&&(h.push(A,I,F),P+=3)}l.addGroup(p,P,0),p+=P}function b(S){const B=m,P=new wt,C=new H;let U=0;const w=S===!0?t:e,M=S===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const A=m;for(let I=0;I<=s;I++){const G=I/s*c+o,Z=Math.cos(G),Y=Math.sin(G);C.x=w*Y,C.y=g*M,C.z=w*Z,u.push(C.x,C.y,C.z),d.push(0,M,0),P.x=Z*.5+.5,P.y=Y*.5*M+.5,f.push(P.x,P.y),m++}for(let I=0;I<s;I++){const F=B+I,G=A+I;S===!0?h.push(G,G+1,F):h.push(G+1,G,F),U+=3}l.addGroup(p,U,S===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ye extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new H,d=new H,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let B=0;B<=e;B++){const P=B/e;u.x=-t*Math.cos(s+P*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+P*r)*Math.sin(a+b*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(P+S,1-b),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const b=h[p][E+1],S=h[p][E],B=h[p+1][E],P=h[p+1][E+1];(p!==0||a>0)&&f.push(b,S,P),(p!==n-1||c<Math.PI)&&f.push(S,B,P)}this.setIndex(f),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qe extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new H,u=new H,d=new H;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,E=(s+1)*f+m;a.push(_,g,E),a.push(g,p,E)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ge extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ya extends Ge{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jm extends Yn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ho extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $m extends Ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sa=new Me,Jl=new H,Ql=new H;class uh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tc=new Me,Ms=new H,Ea=new H;class Jm extends uh{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ms),Ea.copy(n.position),Ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ea),n.updateMatrixWorld(),s.makeTranslation(-Ms.x,-Ms.y,-Ms.z),tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc)}}class Ns extends Ho{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qm extends uh{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends Ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);class tg extends Hr{constructor(){super();const t=new Nt;t.deleteAttribute("uv");const e=new Ge({side:Xe}),n=new Ge,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new ct(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new ct(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new ct(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ct(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new ct(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new ct(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new ct(t,Yi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new ct(t,Yi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new ct(t,Yi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new ct(t,Yi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new ct(t,Yi(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new ct(t,Yi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Yi(i){const t=new ue;return t.color.setScalar(i),t}class eg{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ng=new Oo(-1,1,1,-1,0,1);class ig extends Ae{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const sg=new ig;class rg{constructor(t){this._mesh=new ct(sg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ng)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ag{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,m=t-d,_=e-f;let g,p;m>_?(g=1,p=0):(g=0,p=1);const E=m-g+h,b=_-p+h,S=m-1+2*h,B=_-1+2*h,P=c&255,C=l&255,U=this.perm[P+this.perm[C]]%12,w=this.perm[P+g+this.perm[C+p]]%12,M=this.perm[P+1+this.perm[C+1]]%12;let A=.5-m*m-_*_;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[U],m,_));let I=.5-E*E-b*b;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[w],E,b));let F=.5-S*S-B*B;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[M],S,B)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),u=Math.floor(e+l),d=Math.floor(n+l),f=1/6,m=(h+u+d)*f,_=h-m,g=u-m,p=d-m,E=t-_,b=e-g,S=n-p;let B,P,C,U,w,M;E>=b?b>=S?(B=1,P=0,C=0,U=1,w=1,M=0):E>=S?(B=1,P=0,C=0,U=1,w=0,M=1):(B=0,P=0,C=1,U=1,w=0,M=1):b<S?(B=0,P=0,C=1,U=0,w=1,M=1):E<S?(B=0,P=1,C=0,U=0,w=1,M=1):(B=0,P=1,C=0,U=1,w=1,M=0);const A=E-B+f,I=b-P+f,F=S-C+f,G=E-U+2*f,Z=b-w+2*f,Y=S-M+2*f,Q=E-1+3*f,v=b-1+3*f,D=S-1+3*f,N=h&255,z=u&255,J=d&255,_t=this.perm[N+this.perm[z+this.perm[J]]]%12,K=this.perm[N+B+this.perm[z+P+this.perm[J+C]]]%12,ht=this.perm[N+U+this.perm[z+w+this.perm[J+M]]]%12,et=this.perm[N+1+this.perm[z+1+this.perm[J+1]]]%12;let st=.6-E*E-b*b-S*S;st<0?s=0:(st*=st,s=st*st*this.dot3(this.grad3[_t],E,b,S));let mt=.6-A*A-I*I-F*F;mt<0?r=0:(mt*=mt,r=mt*mt*this.dot3(this.grad3[K],A,I,F));let Et=.6-G*G-Z*Z-Y*Y;Et<0?a=0:(Et*=Et,a=Et*Et*this.dot3(this.grad3[ht],G,Z,Y));let it=.6-Q*Q-v*v-D*D;return it<0?o=0:(it*=it,o=it*it*this.dot3(this.grad3[et],Q,v,D)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,m;const _=(t+e+n+s)*c,g=Math.floor(t+_),p=Math.floor(e+_),E=Math.floor(n+_),b=Math.floor(s+_),S=(g+p+E+b)*l,B=g-S,P=p-S,C=E-S,U=b-S,w=t-B,M=e-P,A=n-C,I=s-U,F=w>M?32:0,G=w>A?16:0,Z=M>A?8:0,Y=w>I?4:0,Q=M>I?2:0,v=A>I?1:0,D=F+G+Z+Y+Q+v,N=a[D][0]>=3?1:0,z=a[D][1]>=3?1:0,J=a[D][2]>=3?1:0,_t=a[D][3]>=3?1:0,K=a[D][0]>=2?1:0,ht=a[D][1]>=2?1:0,et=a[D][2]>=2?1:0,st=a[D][3]>=2?1:0,mt=a[D][0]>=1?1:0,Et=a[D][1]>=1?1:0,it=a[D][2]>=1?1:0,ee=a[D][3]>=1?1:0,Lt=w-N+l,Xt=M-z+l,O=A-J+l,ne=I-_t+l,Ht=w-K+2*l,Ft=M-ht+2*l,Mt=A-et+2*l,Zt=I-st+2*l,yt=w-mt+3*l,R=M-Et+3*l,y=A-it+3*l,W=I-ee+3*l,nt=w-1+4*l,at=M-1+4*l,$=A-1+4*l,It=I-1+4*l,gt=g&255,vt=p&255,Ot=E&255,ut=b&255,bt=o[gt+o[vt+o[Ot+o[ut]]]]%32,Bt=o[gt+N+o[vt+z+o[Ot+J+o[ut+_t]]]]%32,Wt=o[gt+K+o[vt+ht+o[Ot+et+o[ut+st]]]]%32,At=o[gt+mt+o[vt+Et+o[Ot+it+o[ut+ee]]]]%32,ie=o[gt+1+o[vt+1+o[Ot+1+o[ut+1]]]]%32;let qt=.6-w*w-M*M-A*A-I*I;qt<0?h=0:(qt*=qt,h=qt*qt*this.dot4(r[bt],w,M,A,I));let Qt=.6-Lt*Lt-Xt*Xt-O*O-ne*ne;Qt<0?u=0:(Qt*=Qt,u=Qt*Qt*this.dot4(r[Bt],Lt,Xt,O,ne));let k=.6-Ht*Ht-Ft*Ft-Mt*Mt-Zt*Zt;k<0?d=0:(k*=k,d=k*k*this.dot4(r[Wt],Ht,Ft,Mt,Zt));let xt=.6-yt*yt-R*R-y*y-W*W;xt<0?f=0:(xt*=xt,f=xt*xt*this.dot4(r[At],yt,R,y,W));let j=.6-nt*nt-at*at-$*$-It*It;return j<0?m=0:(j*=j,m=j*j*this.dot4(r[ie],nt,at,$,It)),27*(h+u+d+f+m)}}const pr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new wt},cameraProjectionMatrix:{value:new Me},cameraInverseProjectionMatrix:{value:new Me},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},gr={uniforms:{tDiffuse:{value:null},resolution:{value:new wt}},vertexShader:`varying vec2 vUv;

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

		}`},wa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ri extends eg{constructor(t,e,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new Bo;a.format=Ai,a.type=Ti,this.normalRenderTarget=new Xn(this.width,this.height,{minFilter:tn,magFilter:tn,type:bi,depthTexture:a}),this.ssaoRenderTarget=new Xn(this.width,this.height,{type:bi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new mn({defines:Object.assign({},pr.defines),uniforms:bs.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:nn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new jm,this.normalMaterial.blending=nn,this.blurMaterial=new mn({defines:Object.assign({},gr.defines),uniforms:bs.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new mn({defines:Object.assign({},mr.defines),uniforms:bs.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new mn({uniforms:bs.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ic,blendDst:Pa,blendEquation:zn,blendSrcAlpha:Dc,blendDstAlpha:Pa,blendEquationAlpha:zn}),this.fsQuad=new rg(null),this.originalClearColor=new $t}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case ri.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ri.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Pc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new H;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=Pu.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const n=new ag,s=16,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,c=Math.random()*2-1,l=0;r[a]=n.noise3d(o,c,l)}this.noiseTexture=new qm(r,4,4,Co,An),this.noiseTexture.wrapS=Rn,this.noiseTexture.wrapT=Rn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}}ri.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const og={minX:-15.55,maxX:15.55,minZ:-28.15,maxZ:13.55},lg={x:0,y:1.58,z:10.55,yaw:0},cg={x:0,y:1.58,z:-16.35,yaw:0},Ds=-24.2,hg=Ds-.35,Is={x:0,y:0,z:-26.55},fh=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35}],ug=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],fg=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],Mo=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1},{id:"cell-court",kind:"battery",x:-6.2,z:5.8,amounts:{LIVE:8,STATIC:4,DEAD_AIR:3},cloaked:!1},{id:"cell-nave",kind:"battery",x:2.4,z:-16.7,amounts:{LIVE:8,STATIC:4,DEAD_AIR:3},cloaked:!1}],ba={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},dg={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":ba,"choir-r":ba,"choir-ghost":ba};function te(i,t,e,n,s,r,a,o,c={}){return{id:i,mat:t,x:e,y:n,z:s,w:r,h:a,d:o,...c}}const Be=7.2,dh=[te("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),te("ceiling","ceiling",0,7.35,0,34,.3,30),te("wall-n-l","wall",-9.23,Be/2,-14.3,14.74,Be,.6),te("wall-n-r","wall",9.23,Be/2,-14.3,14.74,Be,.6),te("chapel-door","trim",0,Be/2,-14.3,3.76,Be,.66,{door:!0}),te("wall-s","wall",0,Be/2,14.3,33.2,Be,.6),te("wall-w","wall",-16.3,Be/2,0,.6,Be,29.2),te("wall-e","wall",16.3,Be/2,0,.6,Be,29.2),te("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),te("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),te("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),te("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),te("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),te("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),te("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),te("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),te("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),te("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),te("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),te("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),te("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),te("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),te("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),te("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),te("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),te("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),te("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),te("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),te("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),te("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),te("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),te("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),te("chapel-w","wall",-8.35,Be/2,-21.75,.5,Be,14.9),te("chapel-e","wall",8.35,Be/2,-21.75,.5,Be,14.9),te("chapel-n","wall",0,Be/2,-29.05,17.2,Be,.5),te("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),te("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),te("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),te("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),te("altar-l","trim",-4.85,1.8,Ds,6.5,3.6,.48),te("altar-r","trim",4.85,1.8,Ds,6.5,3.6,.48),te("rite-veil","trim",0,1.8,Ds,3.36,3.6,.42,{phaseGate:!0,veil:!0}),te("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function pg(i){return{id:i.id,minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2,phaseGate:!!i.phaseGate,floor:!!i.floor}}function ph({doorOpen:i=!1,veilUp:t=!1}={}){return dh.filter(e=>!(e.door&&i||e.veil&&!t)).map(pg)}function mh(i,t,e){return{id:i.id,x:i.x,y:0,z:i.z,yaw:0,hp:i.hp,maxHp:i.hp,alive:!0,cloaked:!!i.cloak,reveal:0,visible:!i.cloak,exposed:!1,hittable:!i.cloak,hits:0,lastHitAt:null,aggro:e==="court"&&!i.cloak,cooldown:e==="chapel"?1.35+t%3*.25:.95+t%4*.28,windup:0,strafeSign:t%2===0?1:-1,strafeT:.8+t%3*.25,hurt:0,stun:0,room:e,dormant:e!=="court"}}function gh(){return ug.map((i,t)=>mh(i,t,"court"))}function Fr(){return fg.map((i,t)=>mh(i,t,"chapel"))}function nc(){return Mo.map(i=>({...i,taken:!1}))}const Si=["LIVE","STATIC","DEAD_AIR"],jt={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6},clickerMag:20,scatterMag:8,phaserMag:6,phaserDamage:26,phaserRange:8,phaserFalloff:.4,phaserCooldown:.48,dropLive:5,dropStatic:2,dropDead:2,paRefund:2,paRefundFocus:2};function gn(i,t,e){return Math.max(t,Math.min(e,i))}function Vr(){return{LIVE:jt.clickerMag,STATIC:jt.scatterMag,DEAD_AIR:jt.phaserMag}}function Gr(){return Vr()}function ic(){return{channel:"LIVE",signal:jt.signalMax,health:jt.healthMax,fireCooldown:0,hurtTimer:0,batteries:Gr()}}function mg(i){return i==="Digit1"||i==="Numpad1"?"LIVE":i==="Digit2"||i==="Numpad2"?"STATIC":i==="Digit3"||i==="Numpad3"?"DEAD_AIR":null}function gg(i,t){const e=Math.max(0,Si.indexOf(i)),n=t>=0?1:-1;return Si[(e+n+Si.length)%Si.length]}function _g(i,t){return t==="LIVE"?!0:i.signal>=jt.minDrainSignal}function vg(i,t){return Si.includes(t)?i.channel===t?{state:i,result:"same"}:_g(i,t)?{state:{...i,channel:t},result:"ok"}:{state:i,result:"denied"}:{state:i,result:"invalid"}}function xg(i,t){let{channel:e,signal:n,fireCooldown:s,hurtTimer:r}=i,a=!1;if(s=Math.max(0,s-t),r=Math.max(0,r-t),e==="LIVE")n=Math.min(jt.signalMax,n+jt.liveRegen*t);else{const o=e==="STATIC"?jt.staticDrain:jt.deadDrain;n-=o*t,n<=0&&(n=0,e="LIVE",a=!0)}return{state:{...i,channel:e,signal:n,fireCooldown:s,hurtTimer:r},forced:a}}function _h(i){var t;return(t=jt.speed[i])!=null?t:jt.speed.LIVE}function Mg(i,t){var n;const e=(n=Vr()[t])!=null?n:0;return!i.batteries||i.batteries[t]==null?e:i.batteries[t]}function yo(i){return i==="LIVE"?{kind:"hitscan",name:"CLICKER",pellets:1,spread:0,damage:jt.liveDamage,range:jt.liveRange,falloff:jt.liveFalloff,cooldown:jt.liveCooldown,cost:1,phases:!1}:i==="STATIC"?{kind:"spread",name:"SCATTER",pellets:jt.staticPellets,spread:jt.staticSpread,damage:jt.staticPellet,range:jt.staticRange,falloff:jt.staticFalloff,cooldown:jt.staticCooldown,cost:1,phases:!1}:i==="DEAD_AIR"?{kind:"phase",name:"PHASER",pellets:1,spread:0,damage:jt.phaserDamage,range:jt.phaserRange,falloff:jt.phaserFalloff,cooldown:jt.phaserCooldown,cost:1,phases:!0}:{kind:"none",name:"",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0,cost:0,phases:!1}}function sc(i){const t=yo(i.channel);if(i.health<=0)return{state:i,profile:t,fired:!1,reason:"dead"};if(t.kind==="none")return{state:i,profile:t,fired:!1,reason:"none"};if(i.fireCooldown>0)return{state:i,profile:t,fired:!1,reason:"wait"};const e=Mg(i,i.channel);if(e<t.cost)return{state:i,profile:t,fired:!1,reason:"dry"};const n={...i.batteries||Gr(),[i.channel]:e-t.cost};return{state:{...i,batteries:n,fireCooldown:t.cooldown},profile:t,fired:!0,reason:"ok"}}function vh(i,t={}){const e=Vr(),n={...i.batteries||Gr()};let s=0;for(const r of Si){const a=t[r]||0;if(a<=0)continue;const o=gn(n[r]+a,0,e[r]);s+=o-n[r],n[r]=o}return{state:{...i,batteries:n},gained:s}}function rc(i){return{...i,batteries:Gr()}}function yg(i){const t={LIVE:jt.paRefund,STATIC:jt.paRefund,DEAD_AIR:jt.paRefund};return Si.includes(i.channel)&&(t[i.channel]+=jt.paRefundFocus),vh(i,t)}function Sg(i){return{id:"drop-"+i.id,kind:"battery",x:i.x,z:i.z,amounts:{LIVE:jt.dropLive,STATIC:jt.dropStatic,DEAD_AIR:jt.dropDead},cloaked:!1,taken:!1}}function ac(i,t,e,n){if(!(t>=0)||t>e||e<=0)return 0;const s=t/e;return i*(1-n*s*s)}function Vo(i,t){return{...i,signal:gn(i.signal+t,0,jt.signalMax)}}function Eg(i,t){return{...i,health:gn(i.health+t,0,jt.healthMax)}}function wg(i,{distance:t,channel:e,burst:n}){const s=e==="STATIC"||t<=jt.aggressiveRange||!!n,r=s?jt.aggressiveKillSignal:jt.cleanKillSignal;return{state:Vo(i,r),amount:r,aggressive:s}}function oc(i,t){if(i.hurtTimer>0||i.health<=0)return{state:i,hit:!1,dead:i.health<=0};const e=Math.max(0,i.health-t);return{state:{...i,health:e,hurtTimer:jt.hurtIframes},hit:!0,dead:e<=0}}function bg(i,t){return!(!i||i.floor||i.maxY!=null&&i.maxY<.3||i.minY!=null&&i.minY>1.65||i.phaseGate&&t==="DEAD_AIR")}function So(i,t,e,n,s){for(const r of n){if(!bg(r,s))continue;const a=gn(i,r.minX,r.maxX),o=gn(t,r.minZ,r.maxZ),c=i-a,l=t-o;if(c*c+l*l<e*e)return r}return null}function Tg(i,t,e,n,s,r,a){let o=i+e;So(o,t,s,r,a)&&(o=i);const c=t+n;return So(o,c,s,r,a)?{x:o,z:t}:{x:o,z:c}}function Ag(i,t,e,n,s){let r=i,a=t;for(let o=0;o<4;o++){const c=So(r,a,e,n,s);if(!c)break;const l=gn(r,c.minX,c.maxX),h=gn(a,c.minZ,c.maxZ);let u=r-l,d=a-h;const f=Math.hypot(u,d);if(f<1e-5){const m=r-c.minX,_=c.maxX-r,g=a-c.minZ,p=c.maxZ-a,E=Math.min(m,_,g,p);E===m?r=c.minX-e-.01:E===_?r=c.maxX+e+.01:E===g?a=c.minZ-e-.01:a=c.maxZ+e+.01}else{const m=e-f+.01;r+=u/f*m,a+=d/f*m}}return{x:r,z:a}}function xh(i,t,e,n,s,r,a,o){const c=Math.hypot(e,n),l=Math.max(1,Math.ceil(c/.25));let h=i,u=t;for(let f=0;f<l;f++){const m=Tg(h,u,e/l,n/l,s,r,a);h=m.x,u=m.z}const d=Ag(h,u,s,r,a);return o?{x:gn(d.x,o.minX,o.maxX),z:gn(d.z,o.minZ,o.maxZ)}:d}function Mh(i,t,e,n,s,r,a,o,c,l){const h=a-i,u=o-t,d=c-e,f=h*n+u*s+d*r,m=h*h+u*u+d*d-f*f,_=l*l;if(m>_)return null;const g=Math.sqrt(Math.max(0,_-m)),p=f-g,E=f+g;return p>=0?p:E>=0?E:null}function Rg(i,t,e,n,s,r,a,o){let c=0,l=o;const h=[[i,n,a.minX,a.maxX],[t,s,a.minY,a.maxY],[e,r,a.minZ,a.maxZ]];for(const[d,f,m,_]of h){if(Math.abs(f)<1e-8){if(d<m||d>_)return null;continue}let g=(m-d)/f,p=(_-d)/f;if(g>p){const E=g;g=p,p=E}if(g>c&&(c=g),p<l&&(l=p),l<c)return null}const u=c>=0?c:l;return u<0||u>o?null:u}function Go(i,t,e,n,s,r,a,o){let c=null,l=a;for(const h of o){if(h.noShoot)continue;const u=Rg(i,t,e,n,s,r,h,l);u!=null&&u<l&&(l=u,c={t:u,collider:h,x:i+n*u,y:t+s*u,z:e+r*u})}return c}function lc(i,t){if(!i.alive)return{...i,visible:!0,exposed:!1,hittable:!1};if(!i.cloaked)return{...i,visible:!0,exposed:t==="STATIC",hittable:!0};const e=t==="STATIC"||i.reveal>0;return{...i,visible:e,exposed:e,hittable:e}}function cc(i,t,e){if(!i.cloaked||!i.alive)return lc(i,e);let n=i.reveal||0;return e==="STATIC"?n=jt.revealDuration:n=Math.max(0,n-t),lc({...i,reveal:n},e)}function Cg(i,t,e,n,s,r={}){const a=r.phase?s.filter(h=>!h.phaseGate):s;let o=e,c=null;for(const h of n){if(!h.alive||!h.hittable)continue;const u=[{y:(h.y||0)+1.62,r:.26,weak:!0},{y:(h.y||0)+.98,r:.46,weak:!1}];for(const d of u){const f=Mh(i.x,i.y,i.z,t.x,t.y,t.z,h.x,d.y,h.z,d.r);f!=null&&f>.02&&f<o&&(o=f,c={kind:"enemy",id:h.id,t:f,weak:d.weak,x:i.x+t.x*f,y:i.y+t.y*f,z:i.z+t.z*f})}}const l=Go(i.x,i.y,i.z,t.x,t.y,t.z,o,a);return l&&l.t<o?{kind:"world",t:l.t,x:l.x,y:l.y,z:l.z,id:l.collider.id}:c}function Pg(i,t){const e=i.lastHitAt!=null&&t-i.lastHitAt<=jt.burstWindow;return{enemy:{...i,lastHitAt:t},burst:e}}function Dg(i,{weak:t,damage:e}){if(!i.alive||!i.hittable||e<=0)return{enemy:i,dealt:0,killed:!1};let n=e;t&&i.exposed&&(n*=jt.weakMult);const s=i.hp-n,r=s<=0;return{enemy:{...i,hp:r?0:s,hits:(i.hits||0)+1,alive:!r,hittable:!r&&i.hittable},dealt:n,killed:r}}function Ig(i,t,e,n,s,r){const a=[],o=Math.max(0,n|0);for(let c=0;c<o;c++){const l=o===1&&s===0?0:(r()*2-1)*s,h=o===1&&s===0?0:(r()*2-1)*s,u=i.x+t.x*l+e.x*h,d=i.y+t.y*l+e.y*h,f=i.z+t.z*l+e.z*h,m=Math.hypot(u,d,f)||1;a.push({x:u/m,y:d/m,z:f/m})}return a}function yh(i,t,e,n,s,r,a){const o=n-i,c=s-t,l=r-e,h=Math.hypot(o,c,l);return h<.001?!0:Go(i,t,e,o/h,c/h,l/h,Math.max(0,h-.25),a)==null}function Lg(i,t){if(!t||t.taken)return{state:i,pickup:t,took:!1};if(t.kind==="signal")return{state:Vo(i,t.amount),pickup:{...t,taken:!0},took:!0};if(t.kind==="health")return i.health>=jt.healthMax?{state:i,pickup:t,took:!1}:{state:Eg(i,t.amount),pickup:{...t,taken:!0},took:!0};if(t.kind==="battery"){const e=vh(i,t.amounts||{});return e.gained<=0?{state:i,pickup:t,took:!1}:{state:e.state,pickup:{...t,taken:!0},took:!0}}return{state:i,pickup:t,took:!1}}function Ug(i,t){return!i||i.taken?!1:i.cloaked?t==="STATIC":!0}function Ng(i,t){const e=Math.hypot(i,t);return e<1e-6?{x:0,z:0}:{x:i/e,z:t/e}}function Fg(i,t,e){var C;if(!i.alive)return{enemy:i,shot:null};if(i.dormant)return{enemy:{...i,hurt:Math.max(0,(i.hurt||0)-t)},shot:null};let n=cc(i,t,e.channel);if(!n.alive)return{enemy:n,shot:null};const s=e.player.x-n.x,r=e.player.z-n.z,a=Math.hypot(s,r);if((a<18||e.player.forceAggro)&&(n.aggro=!0),n.cloaked&&a<3.05&&(n.reveal=Math.max(n.reveal||0,1.25)),n=cc(n,0,e.channel),(n.stun||0)>0)return n.stun-=t,n.windup=0,n.hurt=Math.max(0,(n.hurt||0)-t),a>.001&&n.aggro&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:null};const o=n.cloaked&&!n.visible;if(!n.aggro||o)return n.hurt=Math.max(0,(n.hurt||0)-t),{enemy:n,shot:null};const l=a<17&&yh(n.x,1.45,n.z,e.player.x,(C=e.player.y)!=null?C:1.2,e.player.z,e.colliders);n.hurt=Math.max(0,(n.hurt||0)-t),n.cooldown=(n.cooldown||0)-t;let h=null;if(n.windup>0?(n.windup-=t,n.windup<=0&&(n.windup=0,l&&(h=Og(n,e,a)))):l&&n.cooldown<=0&&(n.windup=.28,n.cooldown=1.28+e.rng()*.45),n.windup>0)return a>.001&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:h};const u=a>.001?{x:s/a,z:r/a}:{x:0,z:1},d={x:-u.z,z:u.x};n.strafeT=(n.strafeT||0)-t,n.strafeT<=0&&(n.strafeSign=(n.strafeSign||1)*-1,n.strafeT=.75+e.rng()*1.05);let f=d.x*n.strafeSign*.9,m=d.z*n.strafeSign*.9;if(a>10.2?(f+=u.x,m+=u.z):a<5.2&&(f-=u.x*.85,m-=u.z*.85),e.allies)for(const U of e.allies){if(!U.alive||U.id===n.id)continue;const w=n.x-U.x,M=n.z-U.z,A=Math.hypot(w,M);A<1.15&&A>.001&&(f+=w/A*1.4,m+=M/A*1.4)}const _=Ng(f,m),g=_h("STATIC")*.62*(n.hurt>0?.25:1);let p=_.x*g*t,E=_.z*g*t;const b=xh(n.x,n.z,p,E,.42,e.colliders,"LIVE",null);let S=b.x,B=b.z;const P=dg[n.id];return P&&(S<P.minX||S>P.maxX||B<P.minZ||B>P.maxZ)&&(S=n.x,B=n.z),n.x=S,n.z=B,a>.001&&(n.yaw=Math.atan2(s,r)),{enemy:n,shot:h}}function Og(i,t,e){var u;const n=i.x,s=1.32,r=i.z,a=t.player.x-n+(t.rng()-.5)*.35,o=((u=t.player.y)!=null?u:1.15)-s+(t.rng()-.5)*.12,c=t.player.z-r+(t.rng()-.5)*.35,l=Math.hypot(a,o,c)||1,h=14.5;return{x:n,y:s,z:r,vx:a/l*h,vy:o/l*h,vz:c/l*h,damage:jt.boltDamage,life:2.1,dist:e}}function Sh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ae;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=hc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const m=hc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function hc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new He(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Zi(i,t,e,n,s){const r=-s/2,a=s/2,o=[[-i/2,r,t/2],[i/2,r,t/2],[i/2,r,-t/2],[-i/2,r,-t/2],[-e/2,a,n/2],[e/2,a,n/2],[e/2,a,-n/2],[-e/2,a,-n/2]],c=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],l=[],h=[];for(const d of c){const[f,m,_,g]=d.map(p=>o[p]);l.push(...f,...m,..._,...f,..._,...g),h.push(0,0,1,0,1,1,0,0,1,1,0,1)}const u=new Ae;return u.setAttribute("position",new pe(l,3)),u.setAttribute("uv",new pe(h,2)),u.computeVertexNormals(),u}function Ta(i,t=24){const e=i.map(([s,r])=>new wt(s,r)),n=new qn(e,t);return n.computeVertexNormals(),n}function Gt(i,t,e=0,n=0,s=0){const r=new ct(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function Aa(i){return Sh(i,!1)}const zg=[[.02,.2],[.1,.175],[.148,.11],[.164,.04],[.158,-.03],[.132,-.09],[.09,-.135],[.04,-.158]],Bg=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],kg=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];let ys=null;function Wo(){if(ys)return ys;const i=[],t=new ye(.046,12,10);t.scale(1.5,.75,1.45),t.translate(0,-.575,.02),i.push(t);for(let h=0;h<4;h++){const u=-.042+h*.028,d=.05-Math.abs(h-1.5)*.006,f=.28+(h===0||h===3?.12:0),m=new oe(.011,.013,d,6);m.translate(0,-d*.5,0),m.rotateX(.16),m.translate(u,-.62,.05);const _=new oe(.008,.011,d*.82,6);_.translate(0,-d*.38,0),_.rotateX(f),_.translate(u,-.62-d*.7,.055),i.push(m,_)}const e=new oe(.009,.011,.04,6);e.translate(0,-.02,0),e.rotateZ(.85),e.translate(.048,-.59,.015);const n=new oe(.007,.009,.028,6);n.translate(0,-.014,0),n.rotateZ(1.15),n.rotateX(.25),n.translate(.062,-.6,.03),i.push(e,n);const s=new Nt(.1,.025,.2);s.translate(0,-.012,.02);const r=new Nt(.088,.038,.13);r.translate(0,.016,-.005);const a=[],o=new Nt(.05,.055,.16);o.translate(0,-.56,.1),a.push(o);const c=new Nt(.03,.03,.07);c.translate(0,-.545,.16),a.push(c);const l=new Nt(.038,.07,.04);l.translate(0,-.61,.04),a.push(l),ys={helmet:Ta(zg,36),torso:Ta(Bg,32),robe:Ta(kg,36),visor:new ye(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:Zi(.34,.2,.48,.26,.4),abdomen:Zi(.3,.18,.34,.2,.18),pelvis:Zi(.32,.2,.28,.18,.14),pec:Zi(.15,.1,.17,.12,.2),shoulder:Zi(.1,.1,.14,.12,.08),thigh:new oe(.055,.072,.34,12),shin:new oe(.04,.055,.32,12),foot:Aa([s,r]),upper:new oe(.04,.05,.26,12),forearm:new oe(.03,.04,.22,12),hand:Aa(i),gun:Aa(a),collar:new oe(.07,.09,.08,8),joint:new ye(1,16,12),skirt:Zi(.34,.16,.5,.22,.62),tabard:new Nt(.22,.58,.045),stole:new Nt(.09,.5,.04),muzzle:new Nt(.028,.028,.04),seam:new Nt(.2,.028,.02)};for(const h of Object.values(ys))if(!(!(h!=null&&h.index)||h.attributes.tangent||!h.attributes.uv||!h.attributes.normal))try{h.computeTangents()}catch(u){}return ys}const Eo=[];let wo=1;const Hg=se.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );","vec4 envMapColor = sampleProbe( envMapRotation * worldNormal, 1.0 );").replace("vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );","vec4 envMapColor = sampleProbe( envMapRotation * reflectVec, roughness );");function Vg(i,t,e){i.envMap=t||null,i.envMapIntensity=t?1.15:.72,!(!t||!e)&&(i.customProgramCacheKey=()=>"visor-dual-probe",i.onBeforeCompile=n=>{n.uniforms.courtMap={value:e},n.uniforms.probeMix={value:wo},i.userData.probeShader=n,n.fragmentShader=n.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`#ifdef USE_ENVMAP
uniform sampler2D courtMap;
uniform float probeMix;
vec4 sampleProbe(vec3 dir, float roughness) {
  if (probeMix >= 0.999) return textureCubeUV(courtMap, dir, roughness);
  if (probeMix <= 0.001) return textureCubeUV(envMap, dir, roughness);
  return mix(textureCubeUV(envMap, dir, roughness), textureCubeUV(courtMap, dir, roughness), probeMix);
}
#endif
${Hg}`)},Eo.push(i))}let Ra=null;function Eh(i){if(!Ra){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),s=n.createRadialGradient(32,32,2,32,32,31);s.addColorStop(0,"rgba(0,0,0,0.48)"),s.addColorStop(.5,"rgba(0,0,0,0.2)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);const r=new ci(e);r.colorSpace=Ve,Ra=new ue({map:r,transparent:!0,depthWrite:!1})}const t=new ct(new Ei(i,24),Ra);return t.rotation.x=-Math.PI/2,t.position.y=.025,t.castShadow=!1,t.receiveShadow=!1,t}function Mi(i,t=0,e=0){return i.userData.rest=t,i.userData.restI=e,i.emissive=new $t(t),i.emissiveIntensity=e,i}function uc(i,t){const e=i.shinGrime.clone();return e.wrapS=Rn,e.offset.x=t,Mi(new Ge({map:e,roughness:.96,metalness:.02,envMapIntensity:.14}))}function wh(i,t){const e=(t==null?void 0:t.aisle)||null,n=(t==null?void 0:t.court)||null,s=Mi(new ya({map:i.pearl,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:.85,metalness:.02,clearcoat:.58,clearcoatRoughness:.24,envMapIntensity:.36}));s.normalScale.set(.45,.45);const r=Mi(new Ge({map:i.pearlWorn,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:1,metalness:.02,envMapIntensity:.22}));r.normalScale.set(.65,.65);const a=Mi(new Ge({map:i.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),o=Mi(new ya({color:461070,roughness:.035,metalness:.12,clearcoat:1,clearcoatRoughness:.03,iridescence:0,ior:1.55,reflectivity:1}));Vg(o,e,n),o.polygonOffset=!0,o.polygonOffsetFactor=-2,o.polygonOffsetUnits=-2;const c=Mi(new ya({map:i.cloth,normalMap:i.clothNormal,roughnessMap:i.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new $t(16183784),envMapIntensity:.32}));c.normalScale.set(.4,.4);const l=Mi(new Ge({map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);l.normalScale.set(.35,.35);const h=new ue({color:16757066}),u=uc(i,0),d=uc(i,.17);return{pearl:s,worn:r,joint:a,visor:o,cloth:c,gold:l,amber:h,grime:u,grimeR:d}}function _r(i,t,e,n,s){const r=Gt(Wo().joint,i,e,n,s);return r.scale.setScalar(t),r}function ni(i,t,e=16774894){for(const n of i)t>.02?(n.emissive.setHex(e),n.emissiveIntensity=t):(n.emissive.setHex(n.userData.rest||0),n.emissiveIntensity=n.userData.restI||0)}function Gg(i,t={}){const e=new ce,n=Wo(),s=wh(i,t.probes),r=[],a=Gt(n.torso,s.pearl),o=Gt(new oe(.188,.188,.048,18),s.joint,0,1.02,0),c=Gt(n.collar,s.joint,0,1.5,0),l=new ce;l.position.set(0,1.66,0);const h=Gt(n.helmet,s.pearl);h.scale.set(1.06,.96,1.08);const u=Gt(new ye(.172,40,24),s.visor,0,-.045,.168);u.scale.set(1.18,1.14,.36);const d=Gt(new ye(.026,12,8),s.pearl,0,.148,.12);d.scale.set(1,.65,.5);const f=Gt(n.seam,s.amber,0,-.02,.185);f.visible=!1,f.castShadow=!1,l.add(h,u,d,f);const m=Gt(new Nt(.32,.22,.028),s.pearl,0,1.3,.22);m.castShadow=!1;const _=Gt(new ye(.14,14,10),s.pearl,0,.74,0);_.scale.set(1.65,.48,1.05),_.castShadow=!1,r.push(a,o,c,l,m,_);function g(w,M){const A=new ce;if(M){A.add(_r(s.joint,.055,0,0,0)),A.add(Gt(n.upper,s.pearl,0,-.16,0)),A.add(_r(s.joint,.042,0,-.3,0)),A.add(Gt(n.forearm,s.joint,0,-.42,0));const I=Xg(s.joint,w);A.add(I.rig),A.userData.digits=I.digits}else{A.add(_r(s.joint,.058,0,0,0)),A.add(Gt(n.thigh,s.pearl,0,-.2,0)),A.add(_r(s.joint,.048,0,-.38,0));const I=Gt(new ye(.046,10,8),s.pearl,0,-.38,.042);I.scale.set(1.05,.8,.5),I.castShadow=!1,A.add(I);const F=Gt(n.shin,s.worn,0,-.56,0);F.rotation.y=Math.PI,F.scale.set(1.12,1,.86),A.add(F);const G=Gt(new Nt(.078,.24,.016),w<0?s.grime:s.grimeR,0,-.58,.058);G.castShadow=!1,A.add(G);const Z=Gt(n.foot,s.worn,0,-.76,.03);A.add(Z)}return A}const p=g(-1,!1);p.position.set(-.12,.8,0),p.rotation.z=.08;const E=g(1,!1);E.position.set(.12,.8,0),E.rotation.z=-.08;const b=g(-1,!0);b.position.set(-.32,1.4,0),b.rotation.z=.42;const S=g(1,!0);S.position.set(.32,1.4,0),S.rotation.z=-.36;const B=Gt(n.gun,s.joint,.045,.02,.02),P=Gt(n.muzzle,s.amber,.045,-.525,.22);P.castShadow=!1,S.add(B,P);const C=Eh(.48);e.add(...r,p,E,b,S,C);let U=null;if(t.vestment){const w=Gt(n.tabard,s.cloth,0,.92,.16),M=Gt(new Nt(.28,.42,.04),s.cloth,0,.95,-.14),A=Gt(n.stole,s.gold,0,1.16,.18),I=Gt(new qn([new wt(.18,0),new wt(.32,.04),new wt(.24,.1)],24),s.cloth,0,1.4,0),F=$i(bh(new qn([new wt(.2,.02),new wt(.36,.2),new wt(.4,.46),new wt(.3,.74),new wt(.22,.96)],28),6,.016),s.cloth,0,.06,0);U=F,e.add(w,M,A,I,F)}return Th(e),{group:e,weak:f,lLeg:p,rLeg:E,lArm:b,rArm:S,muzzle:P,shadow:C,cloth:U,lDigits:b.userData.digits,rDigits:S.userData.digits,flashMats:[s.pearl,s.worn,s.joint,s.visor,s.cloth,s.gold,s.grime,s.grimeR],flash:0}}function Wg(i,t){const e=new ce,n=wh(i,t),s=Wo(),r=$i(bh(s.robe,8,.04),n.cloth),a=$i(new qn([new wt(.26,0),new wt(.64,.05),new wt(.5,.14),new wt(.22,.2)],28),n.cloth,0,1.46,0),o=n.cloth.clone();o.side=Ze;const c=$i(new oe(.3,.98,1.78,18,1,!0,Math.PI-1.25,2.5),o,0,.9,-.14);c.castShadow=!1;const l=Gt(new qn([new wt(.12,0),new wt(.22,.06),new wt(.16,.16)],24),n.cloth,0,1.68,0),h=Gt(new Qe(.58,.05,8,28),n.cloth,0,.08,0);h.rotation.x=Math.PI/2,h.castShadow=!1;const u=Gt(new Qe(.63,.018,8,32),n.gold,0,.05,0);u.rotation.x=Math.PI/2;const d=Gt(new Qe(.38,.022,8,28),n.gold,0,1.1,0);d.rotation.x=Math.PI/2;const f=n.cloth.clone();f.side=Ze;const m=[],_=[[0,.7,.06,1.2,.075],[.82,.36,.08,1.16,.068],[-.82,.36,.08,1.16,.068],[1.6,.4,.08,1.12,.06],[-1.6,.4,.08,1.12,.06],[Math.PI,.55,.1,1.08,.055]];for(const[v,D,N,z,J]of _){const _t=$i(Ss(v,D,N,z,J),f);_t.castShadow=!1,m.push(_t),e.add(_t)}for(const v of[-.36,.36]){const D=Gt(Ss(v,.045,.08,1.18,.09),n.gold);D.castShadow=!1,e.add(D)}const g=$i(Ss(0,.95,1.16,1.5,.055,6),f);g.castShadow=!1;const p=Gt(Ss(0,1.05,1.12,1.17,.07,3),n.gold);p.castShadow=!1;const E=Gt(Ss(0,.1,.42,1.14,.095,8),n.gold);E.castShadow=!1;const b=Gt(new ye(.045,12,10),n.gold,0,.48,.58),S=new ce;S.position.set(0,2.05,0),S.scale.setScalar(1.18);const B=Gt(s.helmet,n.pearl),P=Gt(new ye(.028,12,8),n.pearl,0,.15,.11);P.scale.set(1,.62,.48);const C=Gt(new ye(.175,40,24),n.visor,0,-.04,.162);C.scale.set(1.22,1.2,.38);const U=Gt(new Nt(.22,.03,.018),n.amber,0,-.02,.175);U.visible=!1,U.castShadow=!1,S.add(B,P,C,U);const w=new Ge({color:15123818,map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),M=new ct(new Qe(.58,.04,12,48),w);M.position.set(0,2.22,-.16);const A=new ct(new Qe(.4,.016,8,36),w);M.add(A);const I=Gt(new ye(.032,10,8),n.gold,.58,0,0);M.add(I);const F=n.cloth.clone();F.side=Ze;function G(v){const D=new ce,N=Gt(new oe(.075,.13,.52,14),n.cloth,0,.26,0),z=Gt(new oe(.22,.08,.46,14,1,!0),F,0,.2,0);z.castShadow=!1;const J=Gt(new Qe(.2,.016,8,16),n.gold,0,.44,0);J.rotation.x=Math.PI/2;const _t=Zg(n.pearl,n.amber,v);return D.add(N,z,J,_t.rig),D.position.set(v*.42,1.48,.02),{pivot:D,hand:_t.amber,digits:_t.digits}}const Z=G(-1),Y=G(1);for(const v of[1.42,1.28,1.14]){const D=Gt(new Qe(.16,.01,8,22,Math.PI*.85),n.gold,0,v,.42);D.rotation.x=Math.PI/2,e.add(D)}const Q=Eh(.9);return e.add(r,c,a,l,h,u,d,g,p,E,b,S,M,Z.pivot,Y.pivot,Q),e.position.set(Is.x,0,Is.z),Th(e),{group:e,halo:M,haloMat:w,seam:U,shadow:Q,lArm:Z.pivot,rArm:Y.pivot,lHand:Z.hand,rHand:Y.hand,lDigits:Z.digits,rDigits:Y.digits,cloths:[r,c,a,g,...m],flashMats:[n.pearl,n.cloth,o,F,f,n.visor,n.gold],flash:0}}const fc=new Map;function vr(i,t,e){const n=`${i}:${t}:${e}`;let s=fc.get(n);return s||(s=new oe(i,t,e,6),fc.set(n,s)),s}function Xg(i,t){const e=new ce,n=t<0;e.position.set(t*.012,-.5,n?.09:.045),e.rotation.x=n?-.62:-.22;const s=new ye(.036,10,8);s.scale(2.35,.55,.72);const r=Gt(s,i);r.castShadow=!1,e.add(r);const a=[],o=[-.074,-.025,.025,.074],c=[.09,.118,.106,.08];for(let f=0;f<4;f++){const m=new ce;m.position.set(o[f],-.02,.02);const _=c[f],g=Gt(vr(.009,.0125,_),i,0,-_*.48,0);g.castShadow=!1;const p=Gt(new ye(.012,8,6),i,0,-_*.92,0);p.castShadow=!1;const E=new ce;E.position.y=-_*.96;const b=_*.72,S=Gt(vr(.0065,.0095,b),i,0,-b*.46,0);S.castShadow=!1,E.add(S),m.add(g,p,E),e.add(m),a.push({knuckle:m,tip:E})}const l=new ce;l.position.set(t*.082,.004,.028),l.rotation.z=-t*1.15;const h=Gt(vr(.0085,.011,.052),i,0,-.028,0);h.castShadow=!1;const u=new ce;u.position.y=-.05;const d=Gt(vr(.006,.0085,.038),i,0,-.02,0);return d.castShadow=!1,u.add(d),l.add(h,u),e.add(l),a.push({knuckle:l,tip:u}),{rig:e,digits:a}}const qg=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];function Yg(i){const t=qg;if(i<=t[0][1])return t[0][0];for(let e=1;e<t.length;e++)if(i<=t[e][1]){const n=(i-t[e-1][1])/(t[e][1]-t[e-1][1]);return t[e-1][0]+(t[e][0]-t[e-1][0])*n}return t[t.length-1][0]}function Ss(i,t,e,n,s,r=8){const a=new Ae,o=[],c=[],l=[],h=2;for(let d=0;d<=r;d++){const f=d/r,m=e+(n-e)*f,_=Yg(m)+s;for(let g=0;g<=h;g++){const p=i-t/2+t*g/h;o.push(Math.sin(p)*_,m,Math.cos(p)*_),c.push(g/h,f)}}const u=h+1;for(let d=0;d<r;d++)for(let f=0;f<h;f++){const m=d*u+f;l.push(m,m+u,m+1,m+1,m+u,m+u+1)}return a.setAttribute("position",new pe(o,3)),a.setAttribute("uv",new pe(c,2)),a.setIndex(l),a.computeVertexNormals(),a}function Zg(i,t,e){const n=new ce;n.position.set(0,.58,.1);const s=new ye(.055,12,8);s.scale(1.7,1.15,.4);const r=Gt(s,i);r.castShadow=!1,n.add(r);const a=[],o=[-.058,-.02,.02,.058],c=[.09,.11,.1,.078];for(let m=0;m<4;m++){const _=new ce;_.position.set(o[m],.04,.02);const g=c[m],p=Gt(new oe(.012,.014,g,6),i,0,g*.48,0);p.castShadow=!1;const E=new ce;E.position.y=g*.9;const b=g*.7,S=Gt(new oe(.009,.012,b,6),i,0,b*.46,0);S.castShadow=!1,E.add(S),_.add(p,E),n.add(_),a.push({knuckle:_,tip:E})}const l=new ce;l.position.set(e*.078,-.006,.02),l.rotation.z=e*.85;const h=Gt(new oe(.01,.012,.05,6),i,0,.028,0);h.castShadow=!1;const u=new ce;u.position.y=.05;const d=Gt(new oe(.007,.01,.032,6),i,0,.016,0);d.castShadow=!1,u.add(d),l.add(h,u),n.add(l),a.push({knuckle:l,tip:u});const f=Gt(new Nt(.09,.07,.014),t,0,.01,.04);return f.castShadow=!1,n.add(f),{rig:n,digits:a,amber:f}}function ii(i,t){for(let e=0;e<i.length;e++){const n=i[e],s=e===i.length-1?.55:1;n.knuckle.rotation.x=-t*s,n.tip.rotation.x=-t*.8*s}}function dc(i,t,e=0,n=1){if(!i)return;const s=Array.isArray(i)?i:[i];for(const r of s)r!=null&&r.morphTargetInfluences&&(r.morphTargetInfluences[0]=Math.sin(t*.75+e)*.6*n,r.morphTargetInfluences[1]=Math.sin(t*.5+e+.8)*.4*n)}function Kg(i){const t=i.attributes.position;let e=1/0,n=-1/0;for(let o=0;o<t.count;o++){const c=t.getY(o);c<e&&(e=c),c>n&&(n=c)}const s=Math.max(.001,n-e),r=new Float32Array(t.count*3),a=new Float32Array(t.count*3);for(let o=0;o<t.count;o++){const c=Math.pow(Math.max(0,(n-t.getY(o))/s),1.35);r[o*3]=c*.08,a[o*3+2]=c*.055}return i.morphAttributes.position=[new pe(r,3),new pe(a,3)],i}function $i(i,t,e=0,n=0,s=0){Kg(i);const r=Gt(i,t,e,n,s);return r.updateMorphTargets(),r}function bh(i,t=7,e=.02){const n=i.clone(),s=n.attributes.position;for(let r=0;r<s.count;r++){const a=s.getX(r),o=s.getY(r),c=s.getZ(r),l=Math.hypot(a,c)||1,h=Math.atan2(a,c),u=.4+.6*Math.max(0,c/l),d=.4+.6*Math.min(1,Math.max(0,(1.35-o)/1.35)),f=Math.sin(h*t)*e*u*d;s.setXYZ(r,a+a/l*f,o,c+c/l*f)}return s.needsUpdate=!0,n.computeVertexNormals(),n.getAttribute("tangent")&&n.deleteAttribute("tangent"),n}function Th(i){i.traverse(t=>{var n;const e=t.geometry;if(!(!t.isMesh||!((n=t.material)!=null&&n.normalMap)||!(e!=null&&e.index)||e.attributes.tangent)&&!(!e.attributes.uv||!e.attributes.normal))try{e.computeTangents()}catch(s){}})}function jg(i,t,e){Eo.length=0;const n=new Map,s=new Set(Fr().map(l=>l.id));for(const l of[...gh(),...Fr()]){const h=Gg(t,{vestment:s.has(l.id),probes:e});h.group.position.set(l.x,0,l.z),h.group.visible=l.visible,h.death=0,h.died=!1,h.phase=Math.random()*Math.PI*2,h.prevX=l.x,h.prevZ=l.z,i.add(h.group),n.set(l.id,h)}const r=Wg(t,e);r.died=!1,r.death=0,r.pose=0,i.add(r.group);const a=new ye(.08,7,5),o=new ue({color:16756768}),c=[];for(let l=0;l<16;l++){const h=new ct(a,o);h.visible=!1,h.frustumCulled=!1,i.add(h),c.push(h)}return{setProbeBlend(l){wo=Math.min(1,Math.max(0,(l- -17)/5));for(const h of Eo){const u=h.userData.probeShader;u&&(u.uniforms.probeMix.value=wo)}},reset(l){for(const h of l){const u=n.get(h.id);if(u){if(u.prevX=h.x,u.prevZ=h.z,u.group.position.set(h.x,0,h.z),u.group.rotation.set(0,0,0),u.group.scale.setScalar(1),u.flash=0,ni(u.flashMats,0),u.weak.visible=!1,!h.alive){u.died=!0,u.death=0,u.group.visible=!1;continue}u.death=0,u.died=!1,u.group.visible=h.visible}}},resetPriest(l){r.died=!1,r.death=0,r.pose=0,r.flash=0,r.group.visible=!0,r.group.rotation.set(0,0,0),r.group.position.set(l.x,0,l.z),r.halo.scale.setScalar(1),ni(r.flashMats,0),r.seam.visible=!1},syncPriest(l,h,u,d){if(!l.alive){r.died||(r.died=!0,r.death=1.05),r.death-=h;const C=1-Math.max(r.death,0)/1.05;r.group.visible=r.death>0,r.group.rotation.x=C*1.25,r.group.position.set(l.x,-C*.55,l.z),r.shadow.visible=!1,r.halo.scale.setScalar(Math.max(0,1-C)),r.seam.visible=!1,r.lArm.rotation.x=.9,r.rArm.rotation.x=.7,ii(r.lDigits,.85),ii(r.rDigits,.75),ni(r.flashMats,C<.45?(1-C/.45)*2.4:0);return}r.died=!1,r.death=0,r.group.visible=!0,r.group.rotation.set(0,l.yaw||0,Math.sin(u*.8)*.008);const f=Math.sin(u*1.15)*.015;r.group.position.set(l.x,f,l.z),r.shadow.visible=!0,r.shadow.position.y=.025-f,r.halo.rotation.z=u*.15;const m=l.phase==="rite",_=m?1.28:l.windup>0?.4:1.12,g=l.windup>0?-.85:m?-.25:-.12;r.lArm.rotation.set(g,0,_),r.rArm.rotation.set(g,0,-_),dc(r.cloths,u,.2,1);const p=l.windup>0?.62:m?.1+Math.sin(u*2.2)*.04:.2+Math.sin(u*1.35)*.07;ii(r.lDigits,p),ii(r.rDigits,p);const E=!!l.haloVisible,b=E&&d==="STATIC";r.halo.visible=!0;const S=E?1+Math.sin(u*7)*.06:1;r.halo.scale.setScalar(S),r.haloMat.opacity=b?1:E?.96:.9,r.haloMat.emissiveIntensity=b?2.4:E?1.55:.85,r.seam.visible=!!l.exposed;const B=l.windup>0||l.phase==="rite";r.lHand.visible=B,r.rHand.visible=B;const P=B?1.45:1;r.lHand.scale.setScalar(P),r.rHand.scale.setScalar(P),l.hurt>0&&(r.flash=.2),r.flash=Math.max(0,r.flash-h),ni(r.flashMats,r.flash>0?r.flash/.2*2.6:0)},sync(l,h,u,d){for(const f of l){const m=n.get(f.id);if(!f.alive){m.died||(m.died=!0,m.death=.85),m.death-=h;const b=1-Math.max(m.death,0)/.85;m.group.visible=m.death>0,m.group.rotation.x=b*1.35,m.group.position.set(f.x,-b*.4,f.z),m.shadow.visible=!1,m.group.scale.setScalar(1),m.lArm.rotation.x=.5+b*.6,m.rArm.rotation.x=.3+b*.9,ii(m.lDigits,.8),ii(m.rDigits,.9),m.lLeg.rotation.x=-.25*b,m.rLeg.rotation.x=.4*b,m.weak.visible=!1,ni(m.flashMats,b<.4?(1-b/.4)*2.4:0);continue}m.died=!1,m.death=0,m.group.visible=!!f.visible;const _=Math.hypot(f.x-m.prevX,f.z-m.prevZ);m.prevX=f.x,m.prevZ=f.z;const g=Math.sin(u*1.4+m.phase)*(_>.004?.02:.012);m.group.rotation.set(0,f.yaw||0,Math.sin(u*1.1+m.phase)*.012),m.group.position.set(f.x,g,f.z),m.shadow.visible=!0,m.shadow.position.y=.025-g;const p=_>.004?Math.sin(u*8+m.phase):Math.sin(u*1.6+m.phase)*.15;if(m.lLeg.rotation.x=p*.7,m.rLeg.rotation.x=-p*.7,m.lArm.rotation.x=-p*.45,m.rArm.rotation.x=p*.25+(f.windup>0?-.95:-.06),m.weak.visible=!!f.exposed,f.hurt>0&&(m.flash=.16),m.flash=Math.max(0,m.flash-h),m.flash>0)ni(m.flashMats,m.flash/.16*2.8),m.group.scale.setScalar(1.035);else if(f.cloaked&&f.visible){const b=.22+Math.sin(u*9)*.1;ni(m.flashMats,b,16766888),m.group.scale.setScalar(1)}else ni(m.flashMats,0),m.group.scale.setScalar(1);m.muzzle.scale.setScalar(f.windup>0?1.8:1);const E=.16+Math.sin(u*1.35+m.phase)*.05;ii(m.lDigits,E),ii(m.rDigits,f.windup>0?.8:.4),m.cloth&&dc(m.cloth,u,m.phase,.85),f.cloaked&&f.visible&&d!=="STATIC"&&f.reveal<.5&&(m.group.visible=Math.sin(u*46)>-.2)}},syncBolts(l){for(let h=0;h<c.length;h++){const u=c[h],d=l[h];if(!d){u.visible=!1;continue}u.visible=!0,u.position.set(d.x,d.y,d.z)}}}}const pc=["seam","choir","veil"],hn={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},$g=2.05,Jg=1.2,Qg=2.62;function mc(i){return i==="seam"?"LIVE · THE SEAM":i==="choir"?"STATIC · THE HALO":i==="veil"?"DEAD AIR · THE VEIL":""}function gc(){return{id:"visor-priest",boss:!0,x:Is.x,y:Is.y,z:Is.z,yaw:0,hp:hn.hp,maxHp:hn.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:hn.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function t_(i,t){const e=pc[i.riteIndex%pc.length];i.phase="rite",i.rite=e,i.timer=hn.riteWindow,i.exposed=e==="seam",i.haloVisible=e==="choir",i.veilUp=e==="veil",i.windup=0,t.push({type:"announce",rite:e})}function Ah(i){i.phase="recover",i.rite=null,i.exposed=!1,i.haloVisible=!1,i.veilUp=!1,i.windup=0,i.timer=hn.recover,i.riteIndex+=1}function e_(i,t,e){if(!i.alive||!i.active)return{priest:i,events:[]};const n=[],s={...i,hurt:Math.max(0,(i.hurt||0)-t),stun:Math.max(0,(i.stun||0)-t)};if(e&&e.player){const r=e.player.x-s.x,a=e.player.z-s.z;Math.hypot(r,a)>.05&&(s.yaw=Math.atan2(r,a))}return s.phase==="idle"?(s.timer-=t,s.timer<=0?t_(s,n):s.stun>0?s.windup=0:s.windup>0?(s.windup-=t,s.windup<=0&&(s.windup=0,s.shotCooldown=hn.shotGap,n.push({type:"shot"}))):(s.shotCooldown-=t,s.shotCooldown<=0&&(s.windup=hn.shotWindup))):s.phase==="rite"?(s.windup=0,s.timer-=t,s.timer<=0&&(n.push({type:"fail",rite:s.rite,damage:hn.failDamage}),Ah(s))):s.phase==="recover"&&(s.windup=0,s.timer-=t,s.timer<=0&&(s.phase="idle",s.timer=hn.idle)),{priest:s,events:n}}function n_(i){return i>0?i*hn.armor:0}function i_(i,t){const e=n_(t);if(!i||!i.alive||e<=0)return{priest:i,dealt:0,killed:!1};const n=i.hp-e,s=n<=0;return{priest:{...i,hp:s?0:n,alive:!s,hurt:.22,phase:s?"dead":i.phase,veilUp:s?!1:i.veilUp,haloVisible:s?!1:i.haloVisible,exposed:s?!1:i.exposed,rite:s?null:i.rite},dealt:e,killed:s}}function _c(i,t){if(!i.alive||i.phase!=="rite")return{priest:i,broken:!1,dealt:0,killed:!1};if(!(i.rite==="seam"&&t.channel==="LIVE"&&t.weak&&!t.halo||i.rite==="choir"&&t.channel==="STATIC"&&t.halo||i.rite==="veil"&&t.channel==="DEAD_AIR"&&t.crossed))return{priest:i,broken:!1,dealt:0,killed:!1};const n=hn.breakDamage,s=i.hp-n;if(s<=0)return{priest:{...i,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:n,killed:!0};const a={...i,hp:s,hurt:.28,broken:(i.broken||0)+1};return Ah(a),{priest:a,broken:!0,dealt:n,killed:!1}}function s_(i,t,e,n,s){if(!n||!n.alive||!n.hittable)return null;const r=[{y:Jg,r:.62,weak:!1,halo:!1},{y:$g,r:.3,weak:!0,halo:!1}];n.haloVisible&&s==="STATIC"&&r.push({y:Qg,r:.42,weak:!1,halo:!0});let a=null,o=e;for(const c of r){const l=Mh(i.x,i.y,i.z,t.x,t.y,t.z,n.x,(n.y||0)+c.y,n.z,c.r);l==null||l<=.02||l>=o||(o=l,a={kind:"priest",id:n.id,t:l,weak:c.weak,halo:c.halo,x:i.x+t.x*l,y:i.y+t.y*l,z:i.z+t.z*l})}return a}const si={maxDist:16,cone:.3,stun:4.5,cooldown:16,retune:4.5,retuneMult:1.45,radius:16};function r_({origin:i,dir:t,point:e,maxDist:n,cone:s,blocked:r}){const a=e.x-i.x,o=e.y-i.y,c=e.z-i.z,l=Math.hypot(a,o,c);if(!(l>.05)||l>n||r)return{aimed:!1,dist:l};const h=(a*t.x+o*t.y+c*t.z)/l;return{aimed:h>=Math.cos(s),dist:l,dot:h}}function a_(i,t){const e=i.cooldownUntil||0;return e>t?{ok:!1,reason:"cooldown",cooldownUntil:e}:{ok:!0,cooldownUntil:t+si.cooldown}}function o_(i,t,e,n){return i.map(s=>!s.alive||s.room!=="chapel"||Math.hypot(s.x-t.x,s.z-t.z)>e?s:{...s,stun:Math.max(s.stun||0,n),windup:0})}function l_(i,t){const e=new ce;e.position.set(.18,-.28,-.48),i.add(e);const n=new Ge({map:t.leather,normalMap:t.leatherNormal,roughnessMap:t.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});n.normalScale.set(.7,.7);const s=new Ge({map:t.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),r=new Ge({map:t.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new Ge({map:t.wood,normalMap:t.woodNormal,roughnessMap:t.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new Ge({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),c=new Ge({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),l=new ue({color:6813439}),h=new ct(new Nt(.16,.055,.38),a);h.position.set(.02,-.02,.02);const u=new ct(new Nt(.11,.02,.3),o);u.position.set(.02,.012,.03);const d=new ct(new Nt(.07,.03,.04),r);d.position.set(.02,-.005,-.16),e.add(h,u,d);for(let et=0;et<2;et++)for(let st=0;st<4;st++){const mt=new ct(new Nt(.028,.012,.03),c);mt.position.set(-.012+et*.064,.026,.1-st*.055),e.add(mt)}const f=new ct(new Nt(.055,.028,.02),l);f.position.set(.02,-.004,-.2),e.add(f);const m=new ct(new oe(.006,.006,.22,6),r);m.position.set(.07,.02,-.12),m.rotation.z=-.4,m.rotation.x=.5;const _=new ct(new ye(.012,8,6),r);_.position.set(.11,.1,-.2);const g=new ce;for(const et of[-1,1]){const st=new ct(new oe(.007,.005,.16,6),r);st.position.set(et*.045,.03,-.16),st.rotation.x=1.15,st.rotation.z=et*-.55;const mt=new ct(new ye(.012,8,6),r);mt.position.set(et*.09,.07,-.22),g.add(st,mt)}g.visible=!1;const p=new Ge({color:12963542,roughness:.22,metalness:.7,envMapIntensity:.45}),E=new ct(new Nt(.012,.028,.46),p);E.position.set(.02,-.01,-.38);const b=new ct(new Nt(.004,.008,.2),new ue({color:14015974}));b.position.set(.02,-.01,-.58);const S=new ce;S.add(E,b),S.visible=!1;const B=new ye(.045,12,8);B.scale(1.2,.62,1.35);const P=new ct(B,a);P.position.set(.02,-.02,-.15);const C=new ct(B,a);C.position.set(.02,-.02,.19);const U=new ct(new Nt(.018,.04,.2),o);U.position.set(-.068,-.03,.04);const w=U.clone();w.position.x=.108,e.add(m,_,g,S,P,C,U,w);for(let et=0;et<4;et++){const st=new ct(new oe(.006,.006,.012,6),o);st.rotation.x=Math.PI/2,st.position.set(-.02+et%2*.028,-.01,-.08-Math.floor(et/2)*.02),e.add(st)}const M=new ue({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:Pr,side:Ze}),A=new ce;A.position.set(.02,-.004,-.24);const I=new ct(new Ee(.22,.05),M),F=new ct(new Ee(.22,.05),M);F.rotation.z=Math.PI/2;const G=new ct(new Ee(.08,.08),M);A.add(I,F,G),A.visible=!1,e.add(A);const Z=new Ns(6813439,2.4,1.8,2);Z.position.copy(f.position),e.add(Z);const Y=[];function Q(et,st,mt){const Et=new ce,it=new ye(.046,14,10);it.scale(1.05,.48,1.35);const ee=new ct(it,n),Lt=new ct(new Nt(.11,.07,.16),s);Lt.position.set(0,.01,.12);const Xt=new ct(new ye(.02,8,6),n);Xt.scale.set(2.1,.7,.8),Xt.position.set(0,.02,-.04),Et.add(ee,Lt,Xt);const O=[.03,.038,.036,.028];for(let Zt=0;Zt<4;Zt++){const yt=-.034+Zt*.022,R=O[Zt],y=new ce;y.position.set(yt,.016,-.052);const W=new ct(new oe(.0075,.0095,R,8),n);W.rotation.x=Math.PI/2,W.position.set(0,0,-R*.42);const nt=new ce;nt.position.set(0,-.002,-R*.78),nt.rotation.x=.22;const at=new ct(new oe(.0055,.0075,R*.82,8),n);at.rotation.x=Math.PI/2,at.position.set(0,0,-R*.36),nt.add(at),y.add(W,nt),Et.add(y),Y.push({knuckle:y,tip:nt,tipRest:.22})}const ne=new ce;ne.position.set(mt>0?.042:-.042,.018,-.02),ne.rotation.z=mt>0?-.7:.7;const Ht=new ct(new oe(.0085,.011,.034,8),n);Ht.rotation.x=.35,Ht.position.set(0,.01,-.012);const Ft=new ce;Ft.position.set(0,.006,-.028),Ft.rotation.x=.2;const Mt=new ct(new oe(.0065,.0085,.026,8),n);Mt.rotation.x=.45,Mt.position.set(0,0,-.014),Ft.add(Mt),ne.add(Ht,Ft),Et.add(ne),Y.push({knuckle:ne,tip:Ft,tipRest:.2}),Et.position.set(et,-.05,st),Et.rotation.y=mt,Et.rotation.z=mt>0?.22:-.18,e.add(Et)}Q(-.07,.06,.5),Q(.12,.08,-.62),e.traverse(et=>{var mt;et.castShadow=!1,et.receiveShadow=!1,et.frustumCulled=!1;const st=et.geometry;!et.isMesh||!((mt=et.material)!=null&&mt.normalMap)||!(st!=null&&st.index)||st.attributes.tangent||st.attributes.uv&&st.attributes.normal&&st.computeTangents()});let v=0,D=0,N=0,z=0,J=0,_t="LIVE",K=!1;const ht={x:.18,y:-.28,z:-.48};return{setChannel(et){K&&et!==_t&&(D=.09,N=Math.max(N,.45)),K=!0,_t=et,m.visible=et==="LIVE",_.visible=et==="LIVE",g.visible=et==="STATIC",S.visible=et==="DEAD_AIR",et==="LIVE"?(l.color.setHex(6813439),Z.color.setHex(6813439),Z.intensity=2.6):et==="STATIC"?(l.color.setHex(15921906),Z.color.setHex(16777215),Z.intensity=.8):(l.color.setHex(2761758),Z.intensity=0)},fire(et){if(et==="dry"||et==="none"){D=.14,v=.02,z=0;return}v=et==="spread"?.12:et==="phase"?.08:.055,N=et==="spread"?.85:et==="phase"?.5:.62,z=.045,M.color.set(et==="spread"?16053492:et==="phase"?14015974:13040639),A.scale.setScalar(et==="spread"?1.35:et==="phase"?.7:1),et==="phase"?A.position.z=-.62:A.position.z=-.24},setVisible(et){e.visible=et},update(et,st,mt={}){const Et=st>.35;J+=et*(Et?7.2+Math.min(st,9)*.28:1.5);const it=Et?.004+Math.min(st,9)*.00115:.0016,ee=mt.strafe||0;v+=(0-v)*(1-Math.exp(-12*et)),D+=(0-D)*(1-Math.exp(-14*et)),N+=(0-N)*(1-Math.exp(-7*et));const Lt=Math.sin(J*1.3)*.05;for(let Xt=0;Xt<Y.length;Xt++){const O=Y[Xt],ne=Lt+N*(.42+Xt%5*.05);O.knuckle.rotation.x=ne,O.tip.rotation.x=O.tipRest+ne*1.15}if(z-=et,A.visible=z>0,A.visible&&(A.rotation.z=z*18),_t==="STATIC"){const Xt=.45+Math.random()*.55;l.color.setRGB(Xt,Xt,Xt)}e.position.x=ht.x+Math.cos(J)*it*.7-ee*.01,e.position.y=ht.y+Math.sin(J*2)*it+(Et?0:Math.sin(J)*.003),e.position.z=ht.z+v*.62,e.rotation.x=v*1.7+D*1.5+Math.sin(J*2)*it*2.2,e.rotation.y=.06-v*.25,e.rotation.z=-ee*.035+Math.sin(J)*it*1.4}}}function ke(i,t,e,n=1,s=1){const r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);const a=new ci(r);return a.colorSpace=Ve,a.wrapS=Rn,a.wrapT=Rn,a.repeat.set(n,s),a.anisotropy=8,a.magFilter=sn,a.minFilter=Sn,a}function Ki(i,t,e,n,s,r){i.fillStyle=s;for(let a=0;a<n;a++){const o=a*97%t,c=a*53%e;i.fillRect(o,c,r,r)}}function c_(i,t=1,e=1){const n=new ci(i);return n.colorSpace=Bn,n.wrapS=Rn,n.wrapT=Rn,n.repeat.set(t,e),n.anisotropy=4,n.magFilter=sn,n.minFilter=Sn,n}function Rh(i,t,e,n=1,s=1){const r=document.createElement("canvas");r.width=i,r.height=t;const a=r.getContext("2d"),o=a.createImageData(i,t);for(let c=0;c<t;c++)for(let l=0;l<i;l++){const[h,u,d]=e(l,c,i,t),f=(c*i+l)*4;o.data[f]=h,o.data[f+1]=u,o.data[f+2]=d,o.data[f+3]=255}return a.putImageData(o,0,0),c_(r,n,s)}function gi(i,t,e,n,s=1,r=1){const a=new Float32Array(i*t);for(let o=0;o<t;o++)for(let c=0;c<i;c++)a[o*i+c]=e(c,o,i,t);return Rh(i,t,(o,c)=>{const l=a[c*i+(o+i-1)%i],h=a[c*i+(o+1)%i],u=a[(c+t-1)%t*i+o],d=a[(c+1)%t*i+o];let f=(l-h)*n,m=(u-d)*n;const _=1,g=Math.hypot(f,m,_)||1;return[f/g*127.5+127.5,m/g*127.5+127.5,_/g*127.5+127.5]},s,r)}function _i(i,t,e,n=1,s=1){return Rh(i,t,(r,a)=>{const o=Math.max(0,Math.min(1,e(r,a,i,t)))*255;return[o,o,o]},n,s)}function h_(){const i=ke(256,256,(v,D,N)=>{v.fillStyle="#5c564c",v.fillRect(0,0,D,N);const z=64;for(let J=0;J<N;J+=z)for(let _t=0;_t<D;_t+=z){const K=(_t*3+J*7)%17/17,ht=K>.66?"#6a6358":K>.33?"#574f46":"#4e4840";v.fillStyle=ht,v.fillRect(_t+2,J+2,z-4,z-4),v.fillStyle="rgba(20,16,12,0.35)",v.fillRect(_t,J,z,2),v.fillRect(_t,J,2,z)}v.fillStyle="rgba(30,22,14,0.28)",v.beginPath(),v.ellipse(48,180,28,10,.4,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(190,60,22,8,-.5,0,Math.PI*2),v.fill(),v.fillStyle="rgba(90,70,40,0.18)",v.fillRect(8,8,18,6)},8,6),t=ke(256,256,(v,D,N)=>{v.fillStyle="#c8bfb2",v.fillRect(0,0,D,N),v.fillStyle="#b3a898";for(let z=0;z<D;z+=64)v.fillRect(z,0,3,N);v.fillStyle="#9c9184",v.fillRect(0,168,D,10),v.fillStyle="#6e655c",v.fillRect(0,214,D,42),v.fillStyle="#8a8176",v.fillRect(0,210,D,6),v.fillStyle="rgba(70,50,30,0.12)";for(let z=0;z<20;z++)v.fillRect(z*41%D,20+z*17%120,16,5);Ki(v,D,N,30,"rgba(255,255,255,0.04)",2)},3,2),e=ke(128,128,(v,D,N)=>{v.fillStyle="#8d8478",v.fillRect(0,0,D,N),v.fillStyle="#756c62";for(let z=0;z<D;z+=16)v.fillRect(z,0,2,N);v.fillStyle="rgba(40,30,20,0.2)",v.fillRect(0,N-18,D,18),v.fillStyle="#a39888",v.fillRect(0,8,D,4)},2,2),n=ke(128,128,(v,D,N)=>{v.fillStyle="#b7b1a6",v.fillRect(0,0,D,N),v.strokeStyle="#8e877c",v.lineWidth=3,v.strokeRect(1,1,D-2,N-2),v.fillStyle="#c9c3b6",v.fillRect(8,8,D-16,N-16),v.fillStyle="rgba(80,70,50,0.15)",v.fillRect(18,40,30,8),v.fillRect(70,80,22,6)},6,6),s=ke(128,128,(v,D,N)=>{v.fillStyle="#5c3a22",v.fillRect(0,0,D,N);for(let z=0;z<N;z+=3){const J=70+z*17%50;v.strokeStyle=`rgb(${J+36}, ${J-4}, ${J-32})`,v.beginPath(),v.moveTo(0,z),v.quadraticCurveTo(D*.5,z+(z%9-4),D,z),v.stroke()}v.fillStyle="rgba(30,16,6,0.35)",v.fillRect(18,0,4,N),v.fillRect(78,0,3,N),v.beginPath(),v.ellipse(46,40,8,14,.2,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(96,90,6,10,-.3,0,Math.PI*2),v.fill()}),r=ke(128,128,(v,D,N)=>{v.fillStyle="#16130f",v.fillRect(0,0,D,N),v.fillStyle="#e2a23a";const z=18;for(let J=-8;J<16;J++)v.beginPath(),v.moveTo(J*z,0),v.lineTo(J*z+z*.55,0),v.lineTo(J*z+z*.55-N,N),v.lineTo(J*z-N,N),v.fill()}),a=ke(128,64,(v,D,N)=>{for(let z=0;z<N;z++)for(let J=0;J<D;J++){const K=140+(J*17+z*13)%40*2;v.fillStyle=`rgb(${K},${K},${K-10})`,v.fillRect(J,z,1,1)}v.fillStyle="rgba(0,0,0,0.45)";for(let z=0;z<N;z+=3)v.fillRect(0,z,D,1)}),o=ke(128,128,(v,D,N)=>{v.fillStyle="#efe8de",v.fillRect(0,0,D,N),v.fillStyle="#fbf7f1",v.fillRect(10,10,D-20,N-20),v.strokeStyle="rgba(40,34,28,0.45)",v.lineWidth=3,v.strokeRect(8,8,D-16,N-16),v.strokeStyle="rgba(40,34,28,0.28)",v.beginPath(),v.moveTo(18,N/2),v.lineTo(D-18,N/2),v.moveTo(D/2,18),v.lineTo(D/2,N-18),v.stroke(),Ki(v,D,N,24,"rgba(60,48,30,0.16)",2)}),c=ke(128,128,(v,D,N)=>{v.fillStyle="#ddd6cb",v.fillRect(0,0,D,N),v.fillStyle="#cbbba6",v.fillRect(0,N*.48,D,N*.52);for(let z=0;z<10;z++){const J=D*(.34+z*13%32/100);v.fillStyle=z%2?"rgba(110,82,52,0.45)":"rgba(86,64,40,0.32)",v.fillRect(J,N*.4,2+z%3,N*.58)}v.fillStyle="rgba(72,52,32,0.5)",v.fillRect(0,N-14,D,14),Ki(v,D,N,36,"rgba(70,54,32,0.28)",2)}),l=ke(128,128,(v,D,N)=>{v.fillStyle="#e7e0d6",v.fillRect(0,0,D,N),v.fillStyle="#c9b49a",v.fillRect(0,N*.28,D,N*.72);for(let z=0;z<16;z++){const J=18+z*29%92;v.fillStyle=z%2?"rgba(96,70,42,0.72)":"rgba(62,46,30,0.55)",v.fillRect(J,28+z%5*6,2+z%4,N-24)}v.fillStyle="rgba(48,34,20,0.55)",v.fillRect(0,N-20,D,20),v.fillStyle="rgba(120,96,70,0.35)",v.beginPath(),v.ellipse(D*.62,N*.72,16,8,.4,0,Math.PI*2),v.fill(),Ki(v,D,N,28,"rgba(40,28,16,0.4)",2)}),h=ke(64,64,(v,D,N)=>{v.fillStyle="#141414",v.fillRect(0,0,D,N),v.fillStyle="#2a2a2a";for(let z=-8;z<16;z++)v.fillRect(z*8,0,2,N);v.fillStyle="#3a3a3a",v.fillRect(0,4,D,3),v.fillStyle="#0a0a0a",v.fillRect(0,N-8,D,8)}),u=ke(64,64,(v,D,N)=>{v.fillStyle="#c6a15a",v.fillRect(0,0,D,N),v.fillStyle="#e6c97a",v.fillRect(0,2,D,6),v.fillStyle="#8a6a32",v.fillRect(0,N-8,D,8),v.strokeStyle="rgba(60,40,10,0.45)",v.beginPath(),v.moveTo(8,0),v.lineTo(18,N),v.moveTo(40,0),v.lineTo(30,N),v.stroke()}),d=ke(128,128,(v,D,N)=>{v.fillStyle="#f3efe6",v.fillRect(0,0,D,N);for(let z=8;z<D;z+=14)v.strokeStyle=z%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",v.beginPath(),v.moveTo(z,0),v.quadraticCurveTo(z+4,N/2,z-2,N),v.stroke();v.fillStyle="rgba(90,70,40,0.08)",v.fillRect(0,N-20,D,20)}),f=ke(128,128,(v,D,N)=>{v.fillStyle="#3a2418",v.fillRect(0,0,D,N),Ki(v,D,N,80,"rgba(20,10,6,0.45)",2),Ki(v,D,N,40,"rgba(120,80,50,0.2)",1),v.strokeStyle="rgba(10,6,4,0.7)",v.lineWidth=3,v.beginPath(),v.moveTo(0,20),v.lineTo(D,28),v.stroke()}),m=ke(128,128,(v,D,N)=>{v.fillStyle="#241810",v.fillRect(0,0,D,N),v.fillStyle="#1a110c";for(let z=0;z<D;z+=10)v.fillRect(z,0,3,N);v.fillStyle="rgba(80,50,30,0.15)",v.fillRect(0,0,D,8)}),_=ke(256,256,(v,D,N)=>{v.fillStyle="#3e3832",v.fillRect(0,0,D,N);const z=64;for(let J=0;J<N;J+=z)for(let _t=0;_t<D;_t+=z)v.fillStyle=(_t+J)%128===0?"#4a433b":"#35302b",v.fillRect(_t+3,J+3,z-6,z-6);v.strokeStyle="rgba(166,132,70,0.35)",v.lineWidth=2;for(let J=0;J<=D;J+=z)v.beginPath(),v.moveTo(J,0),v.lineTo(J,N),v.stroke(),v.beginPath(),v.moveTo(0,J),v.lineTo(D,J),v.stroke()},4,4),g=ke(64,64,(v,D,N)=>{v.fillStyle="#8d9298",v.fillRect(0,0,D,N),v.fillStyle="rgba(255,255,255,0.18)";for(let z=0;z<N;z+=3)v.fillRect(0,z,D,1);v.fillStyle="#5e646a",v.fillRect(0,0,D,4)}),p=gi(128,128,(v,D,N,z)=>{const J=v/N,_t=D/z,K=Math.min(J,1-J,_t,1-_t),ht=Math.min(1,K*10),et=Math.abs(J-.5)<.012||Math.abs(_t-.5)<.012?.2:1;return ht*et},3.2),E=_i(128,128,(v,D,N,z)=>{const J=v/N,_t=D/z,K=Math.min(J,1-J,_t,1-_t);return .28+(1-Math.min(1,K*7))*.42}),b=gi(64,64,(v,D,N,z)=>{const J=Math.sin(v*.85+D*.2)*.08,_t=D<5?.25:D>z-6?-.2:0;return .55+J+_t},2.4),S=_i(64,64,(v,D)=>.22+(Math.sin(v*.7)*.5+.5)*.12+(D%9===0?.08:0)),B=gi(128,128,(v,D,N)=>{const z=Math.sin(v/N*Math.PI*5)*.2,J=Math.sin(v*.85)*.04+Math.sin(D*1.15)*.03,_t=v%8===0?-.05:0;return .55+z+J+_t},3.6),P=_i(128,128,(v,D,N,z)=>.78+D/z*.1+(v%8===0?.06:0)),C=gi(256,256,(v,D)=>{const z=v%64,J=D%64;return Math.min(z,J,63-z,63-J)<3?.05:.72+Math.sin(v*.17)*Math.sin(D*.13)*.06},4.5,8,6),U=_i(256,256,(v,D)=>Math.min(v%64,D%64,63-v%64,63-D%64)<3?.95:.78,8,6),w=gi(256,256,(v,D)=>Math.min(v%64,D%64,63-v%64,63-D%64)<4?0:.66,5,4,4),M=_i(256,256,(v,D)=>Math.min(v%64,D%64)<4?.96:.84,4,4),A=gi(128,128,(v,D)=>{const N=Math.sin(D*.42+Math.sin(v*.07)*2.4)*.14,z=v%22===0?-.08:0;return .5+N+z},3.1),I=_i(128,128,(v,D,N,z)=>.48+(Math.sin(D*.35)*.5+.5)*.22+D/z*.08),F=gi(128,128,(v,D,N,z)=>{const J=Math.sin(v*1.6)*Math.sin(D*1.25)*.05,_t=Math.abs(D/z-.22)<.018?-.22:0;return .55+J+_t},2.6),G=_i(128,128,(v,D,N,z)=>.62+(Math.sin(v*.4+D*.2)*.5+.5)*.2+D/z*.08),Z=ke(256,64,(v,D,N)=>{v.fillStyle="#3c362e",v.fillRect(0,0,D,N),v.fillStyle="#2e2924";for(let z=0;z<D;z+=32)v.fillRect(z,0,2,N);v.strokeStyle="#e6c56a",v.lineWidth=3,v.strokeRect(6,8,D-12,N-16),v.lineWidth=2,v.beginPath(),v.ellipse(D/2,N/2,30,18,0,0,Math.PI*2),v.stroke(),v.beginPath(),v.ellipse(D/2,N/2,16,9,0,0,Math.PI*2),v.stroke(),v.fillStyle="#f0d48a",v.beginPath(),v.arc(D/2,N/2,3.5,0,Math.PI*2),v.fill()}),Y=u_(),Q=f_();return{floor:i,wall:t,ceiling:n,wood:s,hazard:r,snow:a,pearl:o,pearlWorn:c,shinGrime:l,joint:h,gold:u,cloth:d,leather:f,trench:m,nave:_,naveLight:Y,courtLight:Q,trim:e,brushed:g,pearlNormal:p,pearlRough:E,goldNormal:b,goldRough:S,clothNormal:B,clothRough:P,floorNormal:C,floorRough:U,naveNormal:w,naveRough:M,woodNormal:A,woodRough:I,leatherNormal:F,leatherRough:G,seal:Z}}function u_(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="rgb(32,27,22)",n.fillRect(0,0,256,256);const s=(l,h)=>{const u=(l+7.6)/15.2,d=(-21.55-h)/13.2+.5;return[u*256,(1-d)*256]};n.fillStyle="rgb(12,10,8)";for(const[l,h]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]]){const[u,d]=s(l,h);n.fillRect(u-26,d-8,52,16)}const[r,a]=s(0,-27.55);n.fillRect(r-28,a-10,56,18),n.globalCompositeOperation="lighter";const o=(l,h,u,d)=>{const[f,m]=s(l,h),_=u*256,g=n.createRadialGradient(f,m,2,f,m,_);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=g,n.beginPath(),n.arc(f,m,_,0,Math.PI*2),n.fill()};o(-4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(4.9,-18.2,.18,"rgba(255,168,72,0.95)"),o(-4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(4.9,-20.45,.16,"rgba(255,150,60,0.8)"),o(-1.35,-27.15,.2,"rgba(255,186,90,1)"),o(1.35,-27.15,.2,"rgba(255,186,90,1)"),o(0,-27.5,.28,"rgba(220,160,70,0.55)"),n.fillStyle="rgba(255,214,170,0.16)",n.fillRect(256*.4,0,256*.2,256),n.globalCompositeOperation="source-over";const c=new ci(e);return c.colorSpace=li,c.magFilter=sn,c.minFilter=Sn,c.anisotropy=4,c}function Ch(i,t){return[(i+16.05)/32.1,(-.25-t)/28.6+.5]}function f_(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="rgb(18,16,14)",n.fillRect(0,0,256,256);const s=(c,l)=>{const[h,u]=Ch(c,l);return[h*256,(1-u)*256]},r=(c,l,h,u)=>{const[d,f]=s(c-h/2,l-u/2),[m,_]=s(c+h/2,l+u/2),g=Math.min(d,m),p=Math.min(f,_);n.fillRect(g,p,Math.abs(m-d),Math.abs(_-f))};n.fillStyle="rgb(8,7,6)",r(0,-12.2,32,4.2),r(0,-2.2,4.6,.7),r(-1.75,2.05,1.8,.7),r(1.75,2.05,1.8,.7),r(-2.25,-.05,.7,3.6),r(2.25,-.05,.7,3.6);for(const[c,l]of[[-8,-6],[8,-6],[-8,6],[8,5.2]]){const[h,u]=s(c,l);n.beginPath(),n.arc(h,u,7,0,Math.PI*2),n.fill()}n.globalCompositeOperation="lighter";const a=(c,l,h,u)=>{const[d,f]=s(c,l),m=h*256,_=n.createRadialGradient(d,f,2,d,f,m);_.addColorStop(0,u),_.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=_,n.beginPath(),n.arc(d,f,m,0,Math.PI*2),n.fill()};a(0,1.2,.26,"rgba(255,244,220,0.62)"),a(0,1.2,.12,"rgba(255,250,240,0.45)"),a(0,-.05,.07,"rgba(198,214,216,0.4)"),a(-10,8.2,.09,"rgba(255,176,90,0.55)"),a(9.2,8.4,.08,"rgba(255,176,90,0.5)"),a(12.8,-5,.09,"rgba(255,168,70,0.6)"),a(-6,-9.2,.07,"rgba(255,196,130,0.28)"),a(4,-9.2,.07,"rgba(255,196,130,0.28)"),n.globalCompositeOperation="source-over";const o=new ci(e);return o.colorSpace=li,o.magFilter=sn,o.minFilter=Sn,o.anisotropy=4,o.wrapS=kn,o.wrapT=kn,o}function vc(i,t,e="#16130f",n="#f4efe6"){const s=document.createElement("canvas");s.width=512,s.height=t?160:128;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,s.width,s.height),r.strokeStyle="#e2a23a",r.lineWidth=8,r.strokeRect(8,8,s.width-16,s.height-16),r.fillStyle=n,r.textAlign="center",r.textBaseline="middle",r.font="700 58px Trebuchet MS, sans-serif",r.fillText(i,s.width/2,t?68:s.height/2+2),t&&(r.font="600 28px Trebuchet MS, sans-serif",r.fillStyle="#e2a23a",r.fillText(t,s.width/2,118));const a=new ci(s);return a.colorSpace=Ve,a.anisotropy=4,a}function Te(i){return new Ge({envMapIntensity:.32,...i})}function bn(i){var t,e;return i!=null&&i.index&&((t=i.attributes)!=null&&t.uv)&&((e=i.attributes)!=null&&e.normal)&&!i.attributes.tangent&&i.computeTangents(),i}function ji(i,t,e){const n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n}function d_(i){const t=h_(),e={floor:Te({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.03}),wall:Te({map:t.wall,roughness:.88,metalness:.03}),ceiling:Te({map:t.ceiling,roughness:.96,metalness:0}),trim:Te({map:t.trim,roughness:.74,metalness:.08}),metal:Te({color:7172984,roughness:.38,metalness:.62}),wood:Te({map:ji(t.wood,2,2),normalMap:ji(t.woodNormal,2,2),roughnessMap:ji(t.woodRough,2,2),roughness:1,metalness:.04}),runner:Te({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:Te({color:1315344,roughness:.9}),brass:Te({map:ji(t.gold,2,2),normalMap:ji(t.goldNormal,2,2),roughnessMap:ji(t.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:Te({color:5065016,roughness:.92}),glass:Te({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:Te({map:t.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};e.hazard.side=Ze,e.floor.normalScale.set(.7,.7),e.wood.normalScale.set(.85,.85),e.wood.side=Ze,e.brass.normalScale.set(.4,.4);const n=new Map;function s(q,lt,St,x,L,V,X){const T=new Nt(L,V,X);T.translate(lt,St,x),n.has(q)||n.set(q,[]),n.get(q).push(T)}const r=[];let a=null;const o=3.6;let c=null;const l=Te({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});l.side=Ze;const h=new Set(["pew-1","pew-2","pew-3","pew-4","altar","fountain-n","fountain-s-l","fountain-s-r","fountain-w","fountain-e"]);for(const q of dh){if(q.veil){c=new ct(new Nt(q.w,q.h,q.d),l),c.position.set(q.x,q.y,q.z),c.visible=!1,i.add(c);continue}if(q.door){a=new ce;const lt=new ct(new Nt(q.w*.92,q.h*.98,q.d*.62),Te({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),St=Te({color:14012098,roughness:.66,metalness:.05});for(const X of[-q.h*.18,q.h*.16]){const T=new ct(new Nt(q.w*.62,q.h*.28,.045),St);T.position.set(0,X,q.d*.36),T.castShadow=!0,a.add(T)}const x=new ct(bn(new Nt(q.w,.16,q.d*.8)),e.brass);x.position.y=q.h*.42;const L=new ct(bn(new Nt(.14,q.h*.72,q.d*.78)),e.brass),V=new ct(new Ee(1.7,.5),new ue({map:vc("RADIO","WING","#1c140c","#f0d48a")}));V.position.set(0,.35,q.d*.42),a.add(lt,x,L,V),a.position.set(q.x,q.y,q.z),i.add(a);continue}if(!h.has(q.id)){if(q.phaseGate){const lt=new ct(new Nt(q.w,q.h,q.d),e.hazard);lt.position.set(q.x,q.y,q.z),lt.castShadow=!0,lt.receiveShadow=!0,i.add(lt),r.push(lt);continue}s(q.mat,q.x,q.y,q.z,q.w,q.h,q.d)}}s("runner",0,.02,-1.2,2.6,.02,18),s("dark",-7.4,1.3,-13.15,6.4,2.6,.4),s("dark",-5.2,1.3,-13.15,2.4,2.6,.4),s("dark",5.4,1.3,-13.15,2.4,2.6,.4),s("dark",8.6,1.3,-13.15,6.4,2.6,.4),s("runner",0,.025,-21.4,1.5,.02,12),s("brass",0,2.55,-2.15,.12,3.5,.12),s("brass",0,4.15,-2.15,1.35,.08,1.35),s("plant",-3.3,.28,-2.5,.7,.45,.7),s("plant",3.35,.28,1.4,.7,.45,.7),s("plant",-3.2,.55,2.4,.45,.7,.45),s("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const q of[-12,-4,4,12])for(const lt of[-8,0,8])s("metal",q,6.85,lt,1.6,.08,.28);for(let q=-14;q<=14;q+=2.2)s("metal",q,4.55,-10.45,.06,.7,.06);s("metal",0,4.55,-10.45,28,.05,.05);for(const[q,lt]of n){const St=lt.length===1?lt[0]:Sh(lt);e[q].normalMap&&bn(St);const x=new ct(St,e[q]);x.castShadow=q!=="floor"&&q!=="ceiling"&&q!=="runner",x.receiveShadow=!0,i.add(x)}const u=Te({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.05});u.normalScale.set(.55,.55);const d=u.clone();d.lightMap=t.courtLight,d.lightMapIntensity=.48;const f=e.trim.clone();f.lightMap=t.courtLight,f.lightMapIntensity=.42;const m=e.brass.clone();m.lightMap=t.courtLight,m.lightMapIntensity=.28;const _=e.wall.clone();_.lightMap=t.courtLight,_.lightMapIntensity=.55,_.polygonOffset=!0,_.polygonOffsetFactor=-1,_.polygonOffsetUnits=-1;const g=e.floor.clone();g.lightMap=t.courtLight,g.lightMapIntensity=.64,g.polygonOffset=!0,g.polygonOffsetFactor=-1,g.polygonOffsetUnits=-1;const p=new H;function E(q){q.updateMatrixWorld(!0);const lt=q.geometry.attributes.position,St=new Float32Array(lt.count*2);for(let x=0;x<lt.count;x++){p.fromBufferAttribute(lt,x).applyMatrix4(q.matrixWorld);const L=Ch(p.x,p.z);St[x*2]=L[0],St[x*2+1]=L[1]}return q.geometry.setAttribute("uv2",new He(St,2)),q}function b(q,lt,St,x,L){lt.normalMap&&bn(q);const V=new ct(q,lt);return V.position.set(St,x,L),V.castShadow=!0,V.receiveShadow=!0,i.add(V),V}function S(q,lt,St,x,L,V){E(b(new Nt(x,L*.78,V*.92),d,q,lt-L*.08,St)),E(b(new Nt(x*1.04,L*.18,V*1.08),f,q,lt+L*.4,St))}S(0,.4,-2.2,4.5,.8,.5),S(-1.75,.4,2.05,1.7,.8,.5),S(1.75,.4,2.05,1.7,.8,.5),S(-2.25,.4,-.05,.5,.8,3.55),S(2.25,.4,-.05,.5,.8,3.55);const B=Te({map:t.trim,roughness:.55,metalness:.18,envMapIntensity:.45,lightMap:t.courtLight,lightMapIntensity:.5}),P=b(new qn([new wt(.15,.04),new wt(.7,.06),new wt(1.15,.1),new wt(1.38,.28),new wt(1.22,.4),new wt(1.05,.34)],32),B,0,.02,-.05);P.castShadow=!0,E(P);const C=new ct(new Qe(1.28,.045,8,28),m);C.rotation.x=Math.PI/2,C.position.set(0,.36,-.05),C.castShadow=!0,i.add(C),E(C),E(b(new oe(.06,.09,.34,12),m,0,.22,-.05));const U=Te({color:1977392,roughness:.08,metalness:.62,envMapIntensity:.9,lightMap:t.courtLight,lightMapIntensity:.4}),w=new ct(new Ei(1.05,28),U);w.rotation.x=-Math.PI/2,w.position.set(0,.16,-.05),w.receiveShadow=!0,i.add(w),E(w);const M=new ct(new Ee(32.1,28.6),g);M.rotation.x=-Math.PI/2,M.position.set(0,.016,-.25),M.receiveShadow=!0,M.castShadow=!1,i.add(M),E(M),M.geometry.attributes.tangent==null&&g.normalMap&&bn(M.geometry);function A(q,lt,St,x,L,V,X){const T=new ct(q,_);T.position.set(lt,St,x),T.rotation.y=L,T.castShadow=!1,T.receiveShadow=!0,i.add(T),E(T);const tt=T.geometry.attributes.uv;for(let pt=0;pt<tt.count;pt++)tt.setXY(pt,tt.getX(pt)*V,tt.getY(pt)*X);return tt.needsUpdate=!0,T}A(new Ee(28.4,6.3),-15.95,3.25,-.25,Math.PI/2,6,2),A(new Ee(28.4,6.3),15.95,3.25,-.25,-Math.PI/2,6,2),A(new Ee(31.6,6.3),0,3.25,13.95,Math.PI,8,2),A(new Ee(14,6.3),-8.9,3.25,-14.05,0,4,2),A(new Ee(14,6.3),8.9,3.25,-14.05,0,4,2);const I=new ct(new Ee(6.4,8.2),new ue({color:16774114}));I.rotation.x=Math.PI/2,I.position.set(0,7.12,1.2),I.castShadow=!1,I.receiveShadow=!1,i.add(I);const F=new ct(new oe(.55,.7,.12,12),e.brass);F.position.set(0,4.28,-2.15),F.rotation.x=.55,F.castShadow=!0,i.add(F);const G=new ct(new Ee(1.15,.7),new ue({color:16757066}));G.position.set(10.7,1.85,-5.1),G.rotation.y=-Math.PI/2,i.add(G);const Z=new ct(new Ee(1.7,1.7),Te({map:t.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));Z.rotation.x=-Math.PI/2,Z.position.set(9.45,.03,0),Z.receiveShadow=!0,i.add(Z);const Y=new ct(new Nt(5.4,2.2,.06),e.glass);Y.position.set(9.4,1.8,8.7),i.add(Y);const Q=new ct(new Nt(.7,.45,.06),new ue({map:t.snow}));Q.position.set(9.2,1.25,8.72),i.add(Q);const v=Q.clone();v.position.x=10.15,i.add(v);const D=new ct(new Nt(.08,.08,.08),new ue({color:16757066}));D.position.set(10.55,1.55,8.7),i.add(D);function N(q,lt,St,x,L,V,X,T,tt,pt){const Pt=new ct(new Ee(V,X),new ue({map:vc(q,lt,tt,pt),transparent:!1}));return Pt.position.set(St,x,L),Pt.rotation.y=T,i.add(Pt),Pt}N("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),N("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),N("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),N("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),N("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),N("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),N("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),N("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),N("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),N("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),N("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),N("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),N("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a");const z=new ct(new Ee(3.15,.34),Te({map:t.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));z.receiveShadow=!0,z.rotation.x=-Math.PI/2,z.position.set(0,.045,Ds),i.add(z);const J=fh[0],_t=Te({map:t.gold,normalMap:t.goldNormal,roughnessMap:t.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),K=new ce,ht=new ct(bn(new qn([new wt(.05,-.28),new wt(.09,-.08),new wt(.16,.08),new wt(.28,.24),new wt(.34,.32),new wt(.3,.36)],20)),_t);ht.rotation.z=-Math.PI/2,ht.castShadow=!0;const et=new ct(new Ei(.26,16),Te({color:2761752,roughness:.45,metalness:.4}));et.rotation.y=Math.PI/2,et.position.x=.34;const st=new ct(bn(new oe(.055,.07,.36,12)),e.brass);st.rotation.z=Math.PI/2,st.position.x=-.42;const mt=new ct(bn(new Nt(.06,.36,.28)),e.brass);mt.position.set(-.62,0,0),mt.castShadow=!0;const Et=new ct(bn(new Nt(.1,.08,.16)),e.brass);Et.position.set(-.62,-.2,0);const it=new ct(new ye(.07,12,10),new ue({color:16757066}));it.position.x=.28;const ee=new ct(new Qe(.55,.03,8,24),new ue({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));ee.rotation.y=Math.PI/2,K.add(ht,et,st,mt,Et,it,ee);for(const[q,lt]of[[-.05,.1],[.08,.16],[.2,.26]]){const St=new ct(new Qe(lt,.012,6,16),e.brass);St.rotation.y=Math.PI/2,St.position.x=q,St.castShadow=!0,K.add(St)}K.position.set(J.x,J.y,J.z),i.add(K);const Lt=new Ns(16757082,7,5.5,2);Lt.position.set(J.x+.4,J.y,J.z),i.add(Lt);function Xt(q,lt){const St=new ct(new oe(.035,.05,.46,6),e.brass);St.position.set(q,.28,lt);const x=new ct(new ye(.045,6,6),new ue({color:16757066}));x.position.set(q,.54,lt),i.add(St,x)}Xt(-4.9,-18.2),Xt(4.9,-18.2),Xt(-4.9,-20.45),Xt(4.9,-20.45),Xt(-1.35,-27.15),Xt(1.35,-27.15);const O=new ct(new Ee(15.2,13.2),Te({map:t.nave,normalMap:t.naveNormal,roughnessMap:t.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));O.material.normalScale.set(.8,.8),O.material.lightMap=t.naveLight,O.material.lightMapIntensity=.72,bn(O.geometry),O.geometry.setAttribute("uv2",O.geometry.attributes.uv.clone()),O.rotation.x=-Math.PI/2,O.position.set(0,.018,-21.55),O.receiveShadow=!0,i.add(O);const ne=e.wood.clone();ne.lightMap=t.naveLight,ne.lightMapIntensity=.7;const Ht=u.clone();Ht.lightMap=t.naveLight,Ht.lightMapIntensity=.66;const Ft=e.brass.clone();Ft.lightMap=t.naveLight,Ft.lightMapIntensity=.45;const Mt=e.wall.clone();Mt.lightMap=t.naveLight,Mt.lightMapIntensity=.85,Mt.polygonOffset=!0,Mt.polygonOffsetFactor=-1,Mt.polygonOffsetUnits=-1;const Zt=new H;function yt(q,lt,St,x,L){const V=q.clone(),X=b(V,lt,St,x,L);X.updateMatrixWorld(!0);const T=V.attributes.position,tt=new Float32Array(T.count*2);for(let pt=0;pt<T.count;pt++)Zt.fromBufferAttribute(T,pt).applyMatrix4(X.matrixWorld),tt[pt*2]=(Zt.x+7.6)/15.2,tt[pt*2+1]=(-21.55-Zt.z)/13.2+.5;return V.setAttribute("uv2",new He(tt,2)),X}const R=yt(new Ee(14.2,6.2),Mt,-8.08,3.15,-21.75);R.rotation.y=Math.PI/2;const y=yt(new Ee(14.2,6.2),Mt,8.08,3.15,-21.75);y.rotation.y=-Math.PI/2;const W=yt(new Ee(15.4,6.2),Mt,0,3.15,-28.72);for(const q of[R,y,W]){q.castShadow=!1,q.updateMatrixWorld(!0);const lt=q.geometry.attributes.position,St=q.geometry.attributes.uv2.array,x=q.geometry.attributes.uv;for(let L=0;L<lt.count;L++)Zt.fromBufferAttribute(lt,L).applyMatrix4(q.matrixWorld),St[L*2]=(Zt.x+7.6)/15.2,St[L*2+1]=(-21.55-Zt.z)/13.2+.5,x.setXY(L,x.getX(L)*4,x.getY(L)*2);q.geometry.attributes.uv2.needsUpdate=!0,x.needsUpdate=!0}const nt=new oe(.028,.028,2.28,10);nt.rotateZ(Math.PI/2);const at=new oe(.03,.03,2.32,12);at.rotateZ(Math.PI/2);const $=new oe(.62,.62,2.22,16,1,!0,-.42,.84);$.rotateZ(Math.PI/2);function It(q,lt){yt(new Nt(2.32,.05,.32),ne,q,.46,lt-.04),yt(at,ne,q,.45,lt-.2);for(const x of[-1.02,1.02])yt(new Nt(.055,.4,.05),ne,q+x,.22,lt-.12),yt(new Nt(.055,.4,.05),ne,q+x,.22,lt+.06);for(const x of[-1.2,1.2])yt(new Nt(.07,.82,.4),ne,q+x,.44,lt+.02);const St=yt($,ne,q,.68,lt-.36);St.castShadow=!0,yt(nt,ne,q,.9,lt+.2),yt(new Nt(2.05,.028,.1),ne,q,.3,lt+.04),yt(new Nt(1.9,.035,.07),ne,q,.16,lt-.02)}for(const[q,lt]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])It(q,lt);yt(new Nt(2.15,.16,.62),Ht,0,.1,-27.55),yt(new Nt(1.82,.2,.5),Ht,0,.27,-27.55),yt(new Nt(1.5,.18,.4),Ht,0,.45,-27.55),yt(new Nt(2.2,.07,.66),Ft,0,.62,-27.55);const gt=b(new Nt(1.35,.32,.035),e.brass,0,.36,-27.26);gt.position.z=-27.26;const vt=new ct(new Qe(.15,.016,8,20),e.brass);vt.position.set(0,.38,-27.22),i.add(vt);for(const q of[-.72,.72]){b(new oe(.028,.04,.22,8),e.brass,q,.76,-27.52);const lt=new ct(new ye(.035,8,6),new ue({color:16757066}));lt.position.set(q,.9,-27.52),lt.castShadow=!1,i.add(lt)}const Ot=document.createElement("canvas");Ot.width=64,Ot.height=64;const ut=Ot.getContext("2d"),bt=ut.createRadialGradient(32,32,4,32,32,32);bt.addColorStop(0,"rgba(0,0,0,0.38)"),bt.addColorStop(1,"rgba(0,0,0,0)"),ut.fillStyle=bt,ut.fillRect(0,0,64,64);const Bt=new ci(Ot),Wt=new ue({map:Bt,transparent:!0,depthWrite:!1});function At(q,lt,St){const x=new ct(new Ei(q,18),Wt);x.rotation.x=-Math.PI/2,x.position.set(lt,.028,St),i.add(x)}At(1.7,0,-.05),At(1.3,0,-27.55);for(const[q,lt]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])At(1.2,q,lt);const ie=Mo.find(q=>q.kind==="signal"),qt=Mo.find(q=>q.kind==="health"),Qt=new ce,k=new ct(new Nt(.38,.28,.38),e.brass),xt=new ct(new Nt(.16,.16,.16),new ue({color:16757066}));xt.position.y=.22,Qt.add(k,xt),Qt.position.set(ie.x,.35,ie.z),i.add(Qt);const j=new ce,ot=new ct(new Nt(.36,.22,.26),Te({color:15196888,roughness:.6})),Rt=new ct(new Nt(.22,.04,.28),Te({color:9255466,roughness:.5}));Rt.position.y=.08,j.add(ot,Rt),j.position.set(qt.x,.2,qt.z),i.add(j);const Ct=new oe(.055,.055,.2,8),Kt=new oe(.03,.03,.04,8),rt=new Ge({color:2761756,roughness:.45,metalness:.35}),dt=new ue({color:6813439}),ft=new Map;function Dt(){const q=new ce,lt=new ct(Ct,rt),St=new ct(Kt,dt);return St.position.y=.12,q.add(lt,St),q.traverse(x=>{x.castShadow=!1,x.receiveShadow=!1}),i.add(q),q}const Vt=new $m(15261908,3813928,.74);i.add(Vt);const ae=new ec(16773596,2.35);ae.position.set(8,18,10),ae.castShadow=!0,ae.shadow.mapSize.set(1024,1024),ae.shadow.camera.near=2,ae.shadow.camera.far=48,ae.shadow.camera.left=-16,ae.shadow.camera.right=16,ae.shadow.camera.top=16,ae.shadow.camera.bottom=-16,ae.shadow.bias=-4e-4,ae.shadow.normalBias=.035,ae.shadow.radius=2,ae.target.position.set(0,0,-8),i.add(ae,ae.target);const Oe=new ec(16769732,.7);Oe.position.set(-10,8,-6),Oe.castShadow=!1,i.add(Oe);const Re=[];function Ce(q,lt,St,x=36,L=8){const V=new Ns(16757082,x,L,2);return V.position.set(q,lt,St),i.add(V),Re.push(V),V}Ce(0,3.2,-2.1,18,7),Ce(-10,2.4,8.2,28,8),Ce(9.2,2.6,8.4,26,7),Ce(13.5,2.8,-5,34,8),Ce(-6,3.4,-8,22,8),Ce(4,3.4,-8,20,8),Ce(0,5.2,2,30,14),Ce(0,4.4,-21.5,34,16),Ce(0,3.3,-26.4,16,7);const Pn=Ce(13.4,2.6,1.2,24,6);let rn=0,je=0,un=!1,Pe=!1,he=0,Le=0;return i.background=new $t(11774879),i.fog=new ko(11774879,12,40),{colliders:ph(),gates:r,cache:Qt,aid:j,textures:t,setDoor(q,lt=!1){je=q?1:0,lt&&(rn=je,a&&(a.position.y=o+rn*6.4))},setVeil(q,lt){if(!c||(c.visible=!!q,!q))return;const St=lt==="DEAD_AIR";l.opacity=St?.16:.94,l.depthWrite=!St,l.emissiveIntensity=St?.62:.3},setHijack({aimed:q,hot:lt}){un=!!q,Pe=!!lt},pulseHijack(){he=.48},setChannel(q){const lt=i.fog;q==="STATIC"?(lt.color.setHex(10133668),lt.near=12,lt.far=38,i.background.setHex(9475738)):q==="DEAD_AIR"?(lt.color.setHex(2764856),lt.near=10,lt.far=36,i.background.setHex(2369584)):(lt.color.setHex(11774879),lt.near=12,lt.far=40,i.background.setHex(11774879));for(const St of r)St.material.opacity=q==="DEAD_AIR"?.14:.97,St.material.depthWrite=q!=="DEAD_AIR",St.material.emissiveIntensity=q==="DEAD_AIR"?.45:.18},setPickup(q,lt){q==="cache"&&(Qt.visible=lt),q==="aid"&&(j.visible=lt)},syncCells(q){const lt=new Set;for(const St of q){if(St.kind!=="battery"||St.taken)continue;lt.add(St.id);let x=ft.get(St.id);x||(x=Dt(),ft.set(St.id,x)),x.visible=!0,x.position.set(St.x,.28+Math.sin(Le*2.2+St.x)*.03,St.z)}for(const[St,x]of ft)lt.has(St)||(x.visible=!1)},update(q,lt,St){if(St){const V=Math.round(St.x/4)*4,X=Math.round(St.z/4)*4;ae.position.set(V+8,18,X+10),ae.target.position.set(V,0,X)}const x=Math.min(.05,Math.max(0,q-Le||0));if(Le=q,rn+=(je-rn)*Math.min(1,x*4.2),a&&(a.position.y=o+rn*6.4),he>0&&(he=Math.max(0,he-x)),ee.material.opacity=he>0?he/.48:0,ee.scale.setScalar(he>0?1+(1-he/.48)*2.4:1),_t.emissive.setHex(Pe?16774877:13939034),_t.emissiveIntensity=Pe?1.15:un?.85:.12,it.material.color.setHex(Pe?16773576:16757066),Lt.color.setHex(Pe?16769696:16757082),Lt.intensity=Pe?22:un?14:7,Pn.intensity=18+Math.sin(q*28)*10+(Math.random()<.04?-12:0),lt==="STATIC"){const L=1+Math.sin(q*6)*.08;Qt.scale.setScalar(L)}else Qt.scale.setScalar(1);G.material.color.setHSL(.09,.85,lt==="DEAD_AIR"?.18:.55)},practicals:Re}}function p_(i,t){const e=new Hr;e.background=new $t(2893343);const n=new ct(new Nt(18,9,18),new ue({color:2893343,side:Xe}));e.add(n);const s=new ct(new Ee(18,18),new ue({color:3814188}));s.rotation.x=-Math.PI/2,s.position.y=-1.6,e.add(s);const r=new H(0,1.6,-20),a=[[-4.9,.55,-18.2],[4.9,.55,-18.2],[-4.9,.55,-20.45],[4.9,.55,-20.45],[-1.35,.95,-27.15],[1.35,.95,-27.15]],o=new ue({color:16757066});for(const[h,u,d]of a){const f=new ct(new ye(.22,10,8),o);f.position.set(h-r.x,u-r.y,d-r.z),e.add(f)}const c=new ct(new Nt(2.3,1.1,.7),new ue({color:13017434}));c.position.set(0,.55-r.y,-27.55-r.z),e.add(c);const l=new ct(new Qe(.7,.06,8,24),new ue({color:15123818}));return l.position.set(0,2.2-r.y,-26.55-r.z),e.add(l),t.fromScene(e,.04).texture}function m_(i,t){const e=new Hr;e.background=new $t(13156274);const n=new ct(new Nt(34,12,30),new ue({color:13156274,side:Xe}));e.add(n);const s=new H(0,1.55,.2),r=new ct(new Ee(34,30),new ue({color:6972248}));r.rotation.x=-Math.PI/2,r.position.y=-s.y,e.add(r);const a=new ct(new Ee(8,10),new ue({color:16774888}));a.rotation.x=Math.PI/2,a.position.set(0,6.9-s.y,1.2-s.z),e.add(a);const o=new ct(new Ei(1.15,20),new ue({color:1977392}));o.rotation.x=-Math.PI/2,o.position.set(0,.2-s.y,-.05-s.z),e.add(o);const c=new ct(new Qe(1.3,.08,8,24),new ue({color:13017434}));c.rotation.x=Math.PI/2,c.position.set(0,.4-s.y,-.05-s.z),e.add(c);const l=new ue({color:16757066});for(const[h,u,d]of[[-10,2.3,8.2],[9.2,2.3,8.4],[13.2,1.9,-5]]){const f=new ct(new ye(.55,10,8),l);f.position.set(h-s.x,u-s.y,d-s.z),e.add(f)}return t.fromScene(e,.04).texture}const xc="channel-surfer-best",g_={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},__={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function Mc(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function yc(i,t,e,n){return i+(t-i)*(1-Math.exp(-12*n))}function Ca(i,t){const e=Math.cos(t),n=Math.sin(t),s=Math.sin(i),r=Math.cos(i),a={x:-s*e,y:n,z:-r*e},o={x:r,y:0,z:-s},c={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:c}}function v_(i,t){const e=new Gm({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(960,780,!1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.outputColorSpace=Ve,e.toneMapping=Uc,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Cc;const n=new Hr,s=new _o(e);n.environment=s.fromScene(new tg,.012).texture;const r=p_(e,s),a=m_(e,s);s.dispose();const o=new cn(72,960/780,.08,90);n.add(o);const c=new Ns(16770756,14,4.5,2);c.position.set(.05,.02,-.25),o.add(c);const l=d_(n),h=new ri(n,o,480,390,8);h.kernelRadius=.18,h.minDistance=.001,h.maxDistance=.06;const u=jg(n,l.textures,{aisle:r,court:a}),d=l_(o,l.textures),f=72,m=new Float32Array(f*3),_=new Float32Array(f*3),g=new Ae;g.setAttribute("position",new He(m,3)),g.setAttribute("color",new He(_,3));const p=new Km(g,new hh({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));n.add(p);const E=document.createElement("canvas");E.width=64,E.height=64;const b=E.getContext("2d"),S=b.createRadialGradient(32,32,1,32,32,30);S.addColorStop(0,"rgba(255,255,255,1)"),S.addColorStop(.35,"rgba(255,214,150,0.75)"),S.addColorStop(1,"rgba(255,160,60,0)"),b.fillStyle=S,b.fillRect(0,0,64,64);const B=new ci(E);B.colorSpace=Ve;const P=[];for(let rt=0;rt<12;rt++){const dt=new Xm(new oh({map:B,transparent:!0,depthWrite:!1,blending:Pr}));dt.visible=!1,dt.frustumCulled=!1,n.add(dt),P.push(dt)}const C=28,U=new Float32Array(C*6),w=new Float32Array(C*6),M=new Ae;M.setAttribute("position",new He(U,3)),M.setAttribute("color",new He(w,3)),n.add(new Zm(M,new ch({vertexColors:!0,transparent:!0,opacity:.95})));let A="title",I=null,F=[],G=null,Z=[],Y=[],Q=!1,v=!1,D=!1,N=1.25,z=0,J=0,_t=!1,K="",ht="",et="",st=[],mt=[],Et=[],it={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},ee=Mc(1),Lt=0,Xt=0,O=0,ne=0,Ht=0,Ft=0,Mt=0,Zt="",yt=0,R=0,y="",W=0;const nt=[],at=new Set;let $=0,It="",gt=!1;try{$=Number(localStorage.getItem(xc))||0}catch(rt){$=0}function vt(rt,dt,ft,Dt,Vt){for(let ae=0;ae<Vt;ae++)st.push({x:rt,y:dt,z:ft,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:Dt});st.length>f&&st.splice(0,st.length-f),mt.push({x:rt,y:dt,z:ft,life:.14,max:.14,color:Dt}),mt.length>P.length&&mt.shift()}function Ot(rt){Zt=rt,yt=.95,R+=1}function ut(rt,dt){at.has(rt)||(at.add(rt),nt.push(dt))}function bt(rt){It!==rt&&(It=rt,l.setChannel(rt),d.setChannel(rt),t.setChannel(rt))}function Bt(){return ph({doorOpen:Q,veilUp:!!(G&&G.alive&&G.veilUp)})}function Wt(rt){return{x:rt.x,y:rt.y,z:rt.z,yaw:rt.yaw||0,pitch:0,vx:0,vz:0}}function At(){I=ic(),F=[...gh(),...Fr()],G=gc(),Z=nc(),Q=!1,v=!1,D=!1,N=1.25,z=0,J=0,_t=!1,K="",ht="",et="",Y=[],st=[],mt=[],Et=[],it=Wt(lg),ee=Mc((Date.now()&65535)+3),Lt=0,O=0,ne=.2,Ht=0,Ft=0,Mt=0,gt=!1,Zt="",yt=0,y="",W=0,nt.length=0,at.clear(),u.reset(F),u.resetPriest(G),l.setDoor(!1,!0),l.setVeil(!1,"LIVE"),bt("LIVE")}function ie(){I={...ic(),signal:80},F=[...F.filter(dt=>dt.room!=="chapel"),...Fr().map(dt=>({...dt,dormant:!1}))],G={...gc(),active:!0};const rt=nc();Z=[...Z.filter(dt=>dt.z>-14.5),...rt.filter(dt=>dt.z<-14.5)],Q=!0,D=!1,N=1.25,z=0,J=0,_t=!1,K="",ht="",et="",Y=[],st=[],mt=[],Et=[],it=Wt(cg),ne=.45,gt=!1,v=!1,Mt=0,Ft=0,Ht=0,u.reset(F),u.resetPriest(G),l.setDoor(!0,!0),l.setVeil(!1,"LIVE"),bt("LIVE"),Ot("RADIO WING")}At();function qt(){if(Lt>0&&!($>0&&Lt>=$)){$=Lt;try{localStorage.setItem(xc,String($))}catch(rt){}}}function Qt(rt,dt){const ft=vg(I,rt);ft.result==="ok"?(I=ft.state,O+=1,Mt=.45,Ot(g_[I.channel]+" · "+yo(I.channel).name),t.play(__[I.channel]),bt(I.channel)):ft.result==="denied"&&(Ot("NO SIGNAL"),t.play("deny"))}function k(){const rt=sc(I);if(I=rt.state,!rt.fired)return;const{forward:dt,right:ft,up:Dt}=Ca(it.yaw,it.pitch),Vt={x:it.x,y:it.y,z:it.z},ae=Ig(dt,ft,Dt,rt.profile.pellets,rt.profile.spread,Math.random),Oe={x:Vt.x+dt.x*.42+ft.x*.14-Dt.x*.1,y:Vt.y+dt.y*.42+ft.y*.14-Dt.y*.1,z:Vt.z+dt.z*.42+ft.z*.14-Dt.z*.1},Re=Lt<z,Ce=rt.profile.kind==="hitscan"?[.45,.97,1]:rt.profile.kind==="phase"?[.74,.8,.84]:[.9,.9,.9],Pn=Re?[.45,.97,1]:Ce,rn=Bt();let je=!1,un=!1;Ht=Math.min(.07,Ht+(rt.profile.kind==="spread"?.05:rt.profile.kind==="phase"?.03:.014)),d.fire(rt.profile.kind),t.play(rt.profile.kind==="spread"?"static":rt.profile.kind==="phase"?"phase":"live");for(const Pe of ae){const he=Cg(Vt,Pe,rt.profile.range,F,rn,{phase:rt.profile.phases}),Le=G.alive?s_(Vt,Pe,rt.profile.range,G,I.channel):null,q=!!(Le&&(!he||Le.t<he.t)),lt=q?Le:he,St=Math.min(rt.profile.range,22),x=lt?{x:lt.x,y:lt.y,z:lt.z}:{x:Vt.x+Pe.x*St,y:Vt.y+Pe.y*St,z:Vt.z+Pe.z*St};if((!lt||lt.t>.45)&&Et.push({a:Oe,b:x,color:Pn,life:.16}),q){const tt=ac(rt.profile.damage,Le.t,rt.profile.range,rt.profile.falloff)*(Re?si.retuneMult:1),pt=i_(G,tt);if(G=pt.priest,pt.dealt>0&&(je=!0),vt(Le.x,Le.y,Le.z,Re?[.45,.97,1]:[.96,.94,.88],5),!pt.killed){const Pt=_c(G,{channel:I.channel,weak:Le.weak,halo:Le.halo,crossed:!1});Pt.broken?(j(Pt),un=!0):G=Pt.priest}continue}if(!he)continue;if(he.kind==="world"){vt(he.x,he.y,he.z,[.75,.68,.55],6);continue}const L=F.findIndex(tt=>tt.id===he.id);if(L<0||!F[L].alive)continue;const V=Pg(F[L],Lt),X=ac(rt.profile.damage,he.t,rt.profile.range,rt.profile.falloff)*(Re?si.retuneMult:1),T=Dg(V.enemy,{weak:he.weak,damage:X});if(T.enemy.hurt=.1,F[L]=T.enemy,je=T.dealt>0,vt(he.x,he.y,he.z,[.96,.94,.9],8),T.killed){const tt=wg(I,{distance:he.t,channel:I.channel,burst:V.burst});I=tt.state,xt(T.enemy),vt(he.x,he.y,he.z,[1,.68,.25],18),t.play("death"),Ot(tt.aggressive?"AGGRESSIVE +"+tt.amount:"SIGNAL +"+tt.amount)}}je&&!un&&t.play("hit"),Et.length>C&&Et.splice(0,Et.length-C)}function xt(rt){const dt="drop-"+rt.id;Z.some(ft=>ft.id===dt)||Z.push(Sg(rt))}function j(rt){G=rt.priest,rt.broken&&(t.play("rite-break"),vt(G.x,2.15,G.z,[.96,.78,.32],20),Mt=Math.max(Mt,.34),G.alive&&Ot("RITE BROKEN"))}function ot(){const rt=G.x,dt=1.72,ft=G.z,Dt=it.x-rt+(ee()-.5)*.22,Vt=1.15-dt+(ee()-.5)*.12,ae=it.z-ft+(ee()-.5)*.22,Oe=Math.hypot(Dt,Vt,ae)||1,Re=hn.boltSpeed;return{x:rt,y:dt,z:ft,vx:Dt/Oe*Re,vy:Vt/Oe*Re,vz:ae/Oe*Re,damage:hn.boltDamage,life:2.6}}function Rt(rt,dt){const ft=xg(I,rt);if(I=ft.state,ft.forced&&(Ot("NO SIGNAL"),t.play("nosignal"),Mt=.55,bt(I.channel)),dt.channel)Qt(dt.channel);else if(dt.cycle){const T=gn(dt.cycle,-3,3),tt=T>0?1:-1;for(let pt=0;pt!==T;pt+=tt)Qt(gg(I.channel,tt))}it.yaw-=dt.lookX*.00215,it.pitch=gn(it.pitch-dt.lookY*.00215,-1.35,1.35);const Dt=F.some(T=>T.alive&&T.room!=="chapel");if(!Q&&!Dt&&(Q=!0,I=rc(I),Ot("RADIO WING"),t.play("door"),ut("wing","North door is open. The radio wing is still on the air.")),Q&&it.z<-15.05){for(let T=0;T<F.length;T++)F[T].room==="chapel"&&F[T].dormant&&(F[T]={...F[T],dormant:!1});G.active||(G={...G,active:!0},ut("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}const Vt=fh[0],{forward:ae}=Ca(it.yaw,it.pitch),Oe=!yh(it.x,it.y,it.z,Vt.x,Vt.y,Vt.z,Bt());_t=r_({origin:{x:it.x,y:it.y,z:it.z},dir:ae,point:Vt,maxDist:si.maxDist,cone:si.cone,blocked:Oe}).aimed;const Ce=Lt<z,Pn=J>Lt;if(_t?K=Ce?"PA RETUNED":Pn?"PA RECHARGING":"E  RETUNE PA":K=Ce?"PA RETUNED":"",ht=Ce?"hot":_t&&Pn?"cool":_t?"ready":"",dt.use&&_t){const T=a_({cooldownUntil:J},Lt);T.ok?(J=T.cooldownUntil,z=Lt+si.retune,F=o_(F,Vt,si.radius,si.stun),I=yg(I).state,Ot("PA RETUNE"),t.play("hijack"),vt(Vt.x,Vt.y,Vt.z,[.45,.97,1],28),Mt=Math.max(Mt,.28),Ft=Math.max(Ft,.035),l.pulseHijack()):t.play("deny")}Q&&Math.hypot(it.x-Vt.x,it.z-Vt.z)<8&&ut("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const rn=e_(G,rt,{player:{x:it.x,z:it.z}});G=rn.priest;for(const T of rn.events)if(T.type==="announce")Ot(mc(T.rite)),t.play("rite");else if(T.type==="fail"){const tt=oc(I,T.damage);I=tt.state,tt.hit&&(t.play("rite-fail"),Ft=Math.max(Ft,.045)),Ot("RITE HOLDS")}else T.type==="shot"&&Y.length<16&&(Y.push(ot()),t.play("bolt"));et=G.alive&&G.phase==="rite"?mc(G.rite):"";const je=Bt();for(let T=0;T<F.length;T++){if(!F[T].alive)continue;const tt=Fg(F[T],rt,{channel:I.channel,player:{x:it.x,y:1.2,z:it.z},colliders:je,allies:F,rng:ee});F[T]=tt.enemy,tt.shot&&Y.length<16&&(Y.push(tt.shot),t.play("bolt"))}const un=_h(I.channel),Pe=-Math.sin(it.yaw),he=-Math.cos(it.yaw),Le=Math.cos(it.yaw),q=-Math.sin(it.yaw);let lt=0,St=0;dt.forward&&(lt+=Pe,St+=he),dt.back&&(lt-=Pe,St-=he),dt.right&&(lt+=Le,St+=q),dt.left&&(lt-=Le,St-=q);const x=Math.hypot(lt,St);x>0&&(lt=lt/x*un,St=St/x*un),it.vx=yc(it.vx,lt,12,rt),it.vz=yc(it.vz,St,12,rt);const L=xh(it.x,it.z,it.vx*rt,it.vz*rt,jt.playerRadius,je,I.channel,og);if(it.x=L.x,it.z=L.z,G.alive&&G.phase==="rite"&&G.rite==="veil"&&I.channel==="DEAD_AIR"&&it.z<hg){const T=_c(G,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});T.broken&&j(T)}if(ne>0)ne-=rt;else if(dt.fireDown){const T=sc(I);!T.fired&&T.reason==="dry"?gt||(gt=!0,t.play("dry"),d.fire("dry"),Ot("NO BATTERY")):T.fired?(gt=!1,k()):gt=!1}else gt=!1;const V=[];for(const T of Y){const tt=Math.hypot(T.vx,T.vy,T.vz)||1,pt=tt*rt,Pt=Go(T.x,T.y,T.z,T.vx/tt,T.vy/tt,T.vz/tt,pt,Bt());if(Pt){vt(Pt.x,Pt.y,Pt.z,[1,.62,.22],3);continue}if(T.x+=T.vx*rt,T.y+=T.vy*rt,T.z+=T.vz*rt,T.life-=rt,T.life<=0||T.y<0||T.y>6)continue;const Ut=T.x-it.x,Yt=T.z-it.z;if(Ut*Ut+Yt*Yt<.4*.4&&T.y>.25&&T.y<1.75){const Jt=oc(I,T.damage);I=Jt.state,Jt.hit&&(t.play("hurt"),Ft=.05,Mt=Math.max(Mt,.2)),vt(T.x,T.y,T.z,[1,.5,.18],6);continue}V.push(T)}Y=V;for(const T of Z){if(T.taken||!Ug(T,I.channel)||Math.hypot(it.x-T.x,it.z-T.z)>1.15)continue;const tt=Lg(I,T);tt.took&&(I=tt.state,T.taken=!0,t.play("pickup"),Ot(T.kind==="signal"?"SIGNAL CACHE":"AID KIT"))}Lt>.45&&ut("intro","1 LIVE Clicker, 2 STATIC Scatter, 3 DEAD AIR Phaser. Each shot spends a battery."),(Math.hypot(it.x,it.z)<7.5||Lt>11)&&ut("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot(it.x-10.4,it.z)<6.2||Lt>20)&&ut("gate","Striped shutter is DEAD AIR. The Phaser fires through it. Clicker and Scatter stop."),it.x>12.1&&Z.some(T=>T.cloaked&&!T.taken)&&ut("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const X=F.filter(T=>T.alive&&T.room!=="chapel");if(X.length===1&&X[0].id==="alley"&&ut("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),W>0?(W-=rt,W<=0&&(y="")):nt.length&&(y=nt.shift(),W=6.2),I.health<=0){v=Q,A="dead",t.play("ui");return}!G.alive&&Q?(D||(D=!0,F=F.map(T=>T.room==="chapel"&&T.alive?{...T,alive:!1,hittable:!1}:T),I=rc(Vo(I,40)),Ot("OFF THE AIR"),t.play("death"),vt(G.x,2.1,G.z,[.96,.8,.38],34),vt(G.x,2.75,G.z,[.9,.72,.28],16),N=1.25),N-=rt,N<=0&&(A="clear",qt(),t.play("pickup"))):N=1.25}function Ct(rt){for(let dt=st.length-1;dt>=0;dt--){const ft=st[dt];ft.life-=rt,ft.vy-=7*rt,ft.x+=ft.vx*rt,ft.y+=ft.vy*rt,ft.z+=ft.vz*rt,ft.life<=0&&st.splice(dt,1)}for(let dt=0;dt<f;dt++){const ft=st[dt],Dt=dt*3;if(!ft){m[Dt+1]=-40,_[Dt]=_[Dt+1]=_[Dt+2]=0;continue}m[Dt]=ft.x,m[Dt+1]=ft.y,m[Dt+2]=ft.z;const Vt=gn(ft.life*3,0,1);_[Dt]=ft.color[0]*Vt,_[Dt+1]=ft.color[1]*Vt,_[Dt+2]=ft.color[2]*Vt}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0;for(let dt=mt.length-1;dt>=0;dt--)mt[dt].life-=rt,mt[dt].life<=0&&mt.splice(dt,1);for(let dt=0;dt<P.length;dt++){const ft=P[dt],Dt=mt[dt];if(!Dt){ft.visible=!1;continue}const Vt=Dt.life/Dt.max;ft.visible=!0,ft.position.set(Dt.x,Dt.y,Dt.z),ft.scale.setScalar(.18+(1-Vt)*.55),ft.material.opacity=Vt,ft.material.color.setRGB(Dt.color[0],Dt.color[1],Dt.color[2])}for(let dt=Et.length-1;dt>=0;dt--)Et[dt].life-=rt,Et[dt].life<=0&&Et.splice(dt,1);for(let dt=0;dt<C;dt++){const ft=Et[dt],Dt=dt*6;if(!ft){U[Dt+1]=-40,U[Dt+4]=-40;continue}U[Dt]=ft.a.x,U[Dt+1]=ft.a.y,U[Dt+2]=ft.a.z,U[Dt+3]=ft.b.x,U[Dt+4]=ft.b.y,U[Dt+5]=ft.b.z;for(let Vt=0;Vt<2;Vt++)w[Dt+Vt*3]=ft.color[0],w[Dt+Vt*3+1]=ft.color[1],w[Dt+Vt*3+2]=ft.color[2]}M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0}function Kt(rt){if(A==="title"){o.position.set(Math.sin(Xt*.16)*.5,2.5,9.3),o.lookAt(0,1.2,-1.4),d.setVisible(!1);return}d.setVisible(!0),Ft*=Math.exp(-9*rt),Ht*=Math.exp(-11*rt),o.position.set(it.x+(Math.random()-.5)*Ft,it.y,it.z+(Math.random()-.5)*Ft),o.rotation.order="YXZ",o.rotation.y=it.yaw,o.rotation.x=it.pitch-Ht,o.rotation.z=0;const{right:dt}=Ca(it.yaw,0),ft=A==="play"?it.vx*dt.x+it.vz*dt.z:0;d.update(rt,A==="play"?Math.hypot(it.vx,it.vz):0,{strafe:ft})}return{get mode(){return A},start(){At(),A="play",t.play("ui")},resume(){A==="pause"&&(A="play")},pause(){A==="play"&&(A="pause")},replay(){v?ie():At(),A="play",t.play("ui")},toTitle(){At(),A="title"},update(rt,dt){const ft=Math.min(.05,Math.max(0,rt)||0);Xt+=ft,A==="play"&&(Lt+=ft,Rt(ft,dt)),yt>0&&(yt-=ft,yt<=0&&(Zt="")),Mt=Math.max(0,Mt-ft*3.2),bt(A==="title"?"LIVE":I.channel);const Dt=Z.find(Oe=>Oe.cloaked),Vt=Z.find(Oe=>Oe.kind==="health");l.setPickup("cache",!!(Dt&&!Dt.taken&&I.channel==="STATIC"&&A!=="title")),l.setPickup("aid",!!(Vt&&!Vt.taken)),l.syncCells(Z),l.setDoor(Q),l.setVeil(!!(G.alive&&G.veilUp),A==="title"?"LIVE":I.channel),l.setHijack({aimed:A==="play"&&_t,hot:A==="play"&&Lt<z}),l.update(Xt,I.channel,it),u.setProbeBlend(it.z),u.sync(F,ft,Xt,I.channel),u.syncPriest(G,ft,Xt,A==="title"?"LIVE":I.channel),u.syncBolts(Y),Ct(ft),Kt(ft);const ae=A==="title"?"LIVE":I.channel;h.kernelRadius=ae==="DEAD_AIR"?.05:.18,h.maxDistance=ae==="DEAD_AIR"?.02:.06,e.render(n,o),e.shadowMap.autoUpdate=!1,h.renderToScreen=!0,h.render(e),e.shadowMap.autoUpdate=!0,e.setRenderTarget(null)},hud(){const rt=it.z<-14.85,dt=F.filter(ae=>ae.alive&&ae.room!=="chapel").length,ft=F.filter(ae=>ae.alive&&ae.room==="chapel").length+(G.alive?1:0),Dt=A==="play",Vt=yo(I.channel);return{mode:A,health:I.health,signal:I.signal,channel:I.channel,remote:Vt.name,ammo:I.batteries[I.channel],ammoMax:Vr()[I.channel],enemies:rt?ft:dt,roomLabel:rt?"RADIO":"COURT",countLabel:rt?"ON AIR":"TESSERA",tip:y,banner:Zt,bannerSerial:R,flash:Mt,hurt:I.hurtTimer,time:Lt,best:$,swaps:O,muted:t.muted,prompt:Dt?K:"",promptKind:Dt?ht:"",rite:Dt?et:"",boss:rt&&G.alive?G.hp/G.maxHp:null,checkpoint:v}}}}const x_=960,M_=780,Ph=document.getElementById("stage"),Or=document.getElementById("view"),Fs=Ih();let le;try{le=v_(Or,Fs)}catch(i){const t=document.getElementById("boot-error");throw t&&(t.textContent="The picture failed to come up. "+(i&&i.message?i.message:"")),i}const Qi=new Set,Ue={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let Sc=-1;const y_=document.getElementById("health-fill"),S_=document.getElementById("health-num"),E_=document.getElementById("signal-fill"),w_=document.getElementById("signal-num"),b_=document.getElementById("ch-name"),Ec=document.getElementById("remote-readout"),T_=document.getElementById("enemy-count"),A_=document.getElementById("room-label"),R_=document.getElementById("count-label"),C_=document.getElementById("rite"),wc=document.getElementById("prompt"),bc=document.getElementById("boss-wrap"),P_=document.getElementById("boss-fill"),D_=document.getElementById("tip"),xr=document.getElementById("banner"),Tc=document.getElementById("hurt"),I_=document.getElementById("flash"),L_=document.getElementById("panel"),Mr=document.getElementById("panel-kicker"),yr=document.getElementById("panel-title"),Sr=document.getElementById("panel-body"),Er=document.getElementById("panel-meta"),As=document.getElementById("panel-primary"),Rs=document.getElementById("panel-secondary");function Xo(){const i=Math.min(window.innerWidth/x_,window.innerHeight/M_);Ph.style.transform=`scale(${Math.max(.05,i)})`}Xo();window.addEventListener("resize",Xo);window.addEventListener("orientationchange",Xo);function is(){document.pointerLockElement!==Or&&Or.requestPointerLock()}function Wr(){Fs.ensure(),le.mode==="title"?(le.start(),is()):le.mode==="pause"?(le.resume(),is()):(le.mode==="clear"||le.mode==="dead")&&(le.replay(),is())}document.getElementById("start").addEventListener("click",i=>{i.stopPropagation(),Wr()});As.addEventListener("click",i=>{i.stopPropagation(),Wr()});Rs.addEventListener("click",i=>{i.stopPropagation(),Fs.ensure(),(le.mode==="pause"||le.mode==="clear"||le.mode==="dead")&&(le.mode==="pause"?le.replay():le.toTitle(),le.mode==="play"&&is())});window.addEventListener("keydown",i=>{if(i.repeat)return;(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),Qi.add(i.code);const t=mg(i.code);t&&le.mode==="play"&&(Ue.channel=t),i.code==="KeyQ"&&le.mode==="play"&&(Ue.cycle+=1),i.code==="KeyE"&&le.mode==="play"&&(Ue.use=!0),i.code==="KeyM"&&Fs.toggle(),i.code==="Escape"&&le.mode==="play"&&le.pause(),i.code==="Enter"&&Wr(),i.code==="KeyR"&&(le.mode==="pause"||le.mode==="clear"||le.mode==="dead")&&(Fs.ensure(),le.replay(),is())});window.addEventListener("keyup",i=>Qi.delete(i.code));window.addEventListener("mousemove",i=>{le.mode==="play"&&(Ue.lookX+=i.movementX||0,Ue.lookY+=i.movementY||0)});window.addEventListener("mousedown",i=>{if(i.button===0&&!(i.target.closest&&i.target.closest("button"))){if(le.mode==="title"){Wr();return}le.mode==="play"&&(is(),Ue.fire=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(Ue.fire=!1)});window.addEventListener("wheel",i=>{i.preventDefault(),!(le.mode!=="play"||Math.abs(i.deltaY)<4)&&(Ue.cycle+=i.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==Or&&le.mode==="play"&&le.pause()});window.addEventListener("blur",()=>{le.mode==="play"&&(le.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&le.mode==="play"&&(le.pause(),document.pointerLockElement&&document.exitPointerLock())});function Es(i){return i>0?i.toFixed(1)+"s":"—"}function U_(i){var n,s;const t=i.channel==="DEAD_AIR"?"ch-dead":i.channel==="STATIC"?"ch-static":"ch-live";Ph.className=`mode-${i.mode} ${t}`,y_.style.width=Math.max(0,i.health)+"%",E_.style.width=Math.max(0,i.signal)+"%",S_.textContent=String(Math.ceil(i.health)),w_.textContent=String(Math.ceil(i.signal)),b_.textContent=i.channel==="DEAD_AIR"?"DEAD AIR":i.channel,Ec&&(Ec.textContent=`${i.remote||""}  ${(n=i.ammo)!=null?n:0}/${(s=i.ammoMax)!=null?s:0}`),T_.textContent=String(i.enemies),A_.textContent=i.roomLabel||"COURT",R_.textContent=i.countLabel||"TESSERA",C_.textContent=i.rite||"",wc.textContent=i.prompt||"",wc.className=i.promptKind||"",i.boss==null?bc.classList.remove("on"):(bc.classList.add("on"),P_.style.width=Math.max(0,Math.min(100,i.boss*100))+"%"),D_.textContent=i.tip||"",Tc.style.opacity=i.health<35?"0.28":"0",i.hurt>.2&&(Tc.style.opacity="0.55"),I_.style.opacity=String(Math.max(0,Math.min(.7,i.flash))),i.bannerSerial!==Sc&&(Sc=i.bannerSerial,i.banner&&(xr.textContent=i.banner,xr.classList.remove("show"),xr.offsetWidth,xr.classList.add("show")));const e=i.mode==="pause"||i.mode==="clear"||i.mode==="dead";L_.hidden=!e,e&&(i.mode==="pause"?(Mr.textContent="KRCD 7 · STILL ON AIR",yr.textContent="PAUSED",Sr.textContent="Esc released the mouse. Click resume to lock it again.",Er.textContent=i.muted?"MUTED":"",As.textContent="Resume",Rs.textContent="Restart"):i.mode==="clear"?(Mr.textContent="KRCD 7 · RADIO",yr.textContent="WING CLEAR",Sr.textContent="The Visor Priest is off the air. The mall is still broadcasting.",Er.textContent=`TIME ${Es(i.time)} · BEST ${Es(i.best)} · ${i.swaps} CHANNEL CHANGES`,As.textContent="Replay",Rs.textContent="Title"):i.checkpoint?(Mr.textContent="KRCD 7 · RADIO",yr.textContent="WING LOST",Sr.textContent="The court stays clear. Retry from the radio door.",Er.textContent=`TIME ${Es(i.time)} · BEST ${Es(i.best)}`,As.textContent="Retry wing",Rs.textContent="Title"):(Mr.textContent="KRCD 7 · NO CARRIER",yr.textContent="SIGNAL LOST",Sr.textContent="The court keeps the carrier. Retune and walk it again.",Er.textContent=`BEST ${Es(i.best)}`,As.textContent="Retry",Rs.textContent="Title"))}let Ac=performance.now();function Dh(i){const t=Math.min(.05,(i-Ac)/1e3);Ac=i,document.hidden||(le.update(t,{forward:Qi.has("KeyW"),back:Qi.has("KeyS"),left:Qi.has("KeyA"),right:Qi.has("KeyD"),lookX:Ue.lookX,lookY:Ue.lookY,fireDown:Ue.fire&&le.mode==="play",channel:Ue.channel,cycle:Ue.cycle,use:Ue.use}),U_(le.hud())),Ue.lookX=0,Ue.lookY=0,Ue.channel=null,Ue.cycle=0,Ue.use=!1,requestAnimationFrame(Dh)}requestAnimationFrame(Dh);
