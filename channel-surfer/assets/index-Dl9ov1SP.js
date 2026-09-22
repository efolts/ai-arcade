(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Oo="channel-surfer-mute";function mh(){const i=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let t=null,e=null,n=null,r=null,s=null,a=!1,o=!1;try{o=localStorage.getItem(Oo)==="1"}catch(d){o=!1}function l(){if(!i)return null;if(!t){t=new i,e=t.createGain(),e.gain.value=o?0:.85,n=t.createBiquadFilter(),n.type="lowpass",n.frequency.value=16e3,n.connect(e),e.connect(t.destination);const d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),u=d.getChannelData(0);for(let T=0;T<u.length;T++)u[T]=Math.random()*2-1;const g=t.createBufferSource();g.buffer=d,g.loop=!0;const _=t.createBiquadFilter();_.type="highpass",_.frequency.value=1200,r=t.createGain(),r.gain.value=0,g.connect(_),_.connect(r),r.connect(n),g.start(),s=t.createGain(),s.gain.value=.018;const m=t.createOscillator(),p=t.createOscillator();m.type="sine",p.type="triangle",m.frequency.value=55,p.frequency.value=82.4,m.connect(s),p.connect(s),s.connect(n),m.start(),p.start()}return t.state==="suspended"&&t.resume(),a=!0,t}function c(d,u){const g=t.createGain(),_=t.currentTime;return g.gain.setValueAtTime(1e-4,_),g.gain.exponentialRampToValueAtTime(Math.max(2e-4,u),_+.012),g.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,d)),g.connect(n),g}function h(d,u,g,_,m){if(!a||!t||o)return;const p=t.createOscillator();p.type=g;const T=t.currentTime;p.frequency.setValueAtTime(d,T),m&&p.frequency.exponentialRampToValueAtTime(Math.max(30,m),T+u),p.connect(c(u,_)),p.start(),p.stop(T+u+.03)}function f(d,u,g){if(!a||!t||o)return;const _=Math.max(1,Math.floor(t.sampleRate*d)),m=t.createBuffer(1,_,t.sampleRate),p=m.getChannelData(0);for(let O=0;O<_;O++)p[O]=Math.random()*2-1;const T=t.createBufferSource();T.buffer=m;const w=t.createBiquadFilter();w.type="bandpass",w.frequency.value=g,w.Q.value=.7;const y=c(d,u);T.connect(w),w.connect(y),T.start()}return{ensure:l,get muted(){return o},toggle(){o=!o,e&&(e.gain.value=o?0:.85);try{localStorage.setItem(Oo,o?"1":"0")}catch(d){}return o},setChannel(d){if(!a||!t)return;const u=t.currentTime,g=d==="DEAD_AIR"?380:d==="STATIC"?3800:15e3;n.frequency.linearRampToValueAtTime(g,u+.07),r.gain.linearRampToValueAtTime(d==="STATIC"?.02:0,u+.08),s.gain.linearRampToValueAtTime(d==="DEAD_AIR"?.028:.016,u+.1)},play(d){if(!(!a||o))switch(d){case"live":f(.045,.14,2400),h(940,.08,"square",.045,360);break;case"static":f(.13,.22,640);break;case"deny":h(86,.09,"sine",.07,48);break;case"switch-live":h(523,.11,"square",.04),h(784,.13,"square",.03);break;case"switch-static":f(.08,.1,500),h(190,.12,"sawtooth",.03);break;case"switch-dead":h(74,.18,"sine",.07,42);break;case"hit":h(1500,.05,"square",.04,480);break;case"hurt":f(.11,.16,220),h(120,.16,"sawtooth",.05,60);break;case"death":f(.26,.18,280),h(210,.32,"triangle",.06,48);break;case"pickup":h(660,.08,"sine",.05),h(990,.12,"sine",.04);break;case"ui":h(480,.05,"square",.03);break;case"bolt":h(300,.09,"square",.03,130);break;case"nosignal":f(.16,.12,180);break;case"hijack":f(.18,.2,1800),h(680,.16,"sawtooth",.05,1400),h(220,.22,"square",.04,90);break;case"rite":h(196,.28,"sine",.05),h(247,.32,"sine",.035),h(392,.22,"triangle",.03);break;case"rite-break":f(.08,.16,1400),h(880,.12,"square",.05,420),h(1320,.16,"triangle",.04,700);break;case"rite-fail":h(98,.22,"sawtooth",.06,50),f(.14,.12,200);break;case"door":h(140,.18,"square",.04,70),h(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="170",gh=0,zo=1,_h=2,fc=1,dc=2,Pn=3,ni=0,He=1,tn=2,qe=0,Yi=1,bs=2,Bo=3,ko=4,pc=5,Dn=100,vh=101,xh=102,Mh=103,Sh=104,Ea=200,yh=201,Eh=202,Th=203,Ta=204,wa=205,mc=206,wh=207,gc=208,bh=209,Ah=210,Rh=211,Ch=212,Ph=213,Dh=214,ba=0,Aa=1,Ra=2,Ji=3,Ca=4,Pa=5,Da=6,Ia=7,_c=0,Ih=1,Lh=2,ei=0,Uh=1,Nh=2,Fh=3,vc=4,Oh=5,zh=6,Bh=7,xc=300,Qi=301,tr=302,La=303,Ua=304,Us=306,On=1e3,gi=1001,Na=1002,Ve=1003,kh=1004,Or=1005,on=1006,zs=1007,Ln=1008,zn=1009,Mc=1010,Sc=1011,Pr=1012,go=1013,_i=1014,Mn=1015,vi=1016,_o=1017,vo=1018,xi=1020,yc=35902,Ec=1021,Tc=1022,mn=1023,wc=1024,bc=1025,Zi=1026,Mi=1027,xo=1028,Mo=1029,Ac=1030,So=1031,yo=1033,Ms=33776,Ss=33777,ys=33778,Es=33779,Fa=35840,Oa=35841,za=35842,Ba=35843,ka=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,ja=37814,Ka=37815,$a=37816,Ja=37817,Qa=37818,to=37819,eo=37820,no=37821,Ts=36492,io=36494,ro=36495,Rc=36283,so=36284,ao=36285,oo=36286,Hh=3200,Vh=3201,Eo=0,Gh=1,In="",De="srgb",nr="srgb-linear",Ns="linear",oe="srgb",Ei=7680,Ho=519,Wh=512,Xh=513,qh=514,Cc=515,Yh=516,Zh=517,jh=518,Kh=519,lo=35044,Vo="300 es",Un=2e3,As=2001;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Go=1234567;const br=Math.PI/180,Dr=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function To(i,t){return(i%t+t)%t}function $h(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Jh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ar(i,t,e){return(1-e)*i+e*t}function Qh(i,t,e,n){return Ar(i,t,1-Math.exp(-e*n))}function tu(i,t=1){return t-Math.abs(To(i,t*2)-t)}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function iu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ru(i,t){return i+Math.random()*(t-i)}function su(i){return i*(.5-Math.random())}function au(i){i!==void 0&&(Go=i);let t=Go+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ou(i){return i*br}function lu(i){return i*Dr}function cu(i){return(i&i-1)===0&&i!==0}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fu(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),f=s((t-n)/2),d=a((t-n)/2),u=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*u,o*c);break;case"YXY":i.set(l*u,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*u,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const du={DEG2RAD:br,RAD2DEG:Dr,generateUUID:Nn,clamp:Ie,euclideanModulo:To,mapLinear:$h,inverseLerp:Jh,lerp:Ar,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:nu,randInt:iu,randFloat:ru,randFloatSpread:su,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:fu,normalize:ae,denormalize:pn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=r[0],m=r[3],p=r[6],T=r[1],w=r[4],y=r[7],O=r[2],P=r[5],I=r[8];return s[0]=a*_+o*T+l*O,s[3]=a*m+o*w+l*P,s[6]=a*p+o*y+l*I,s[1]=c*_+h*T+f*O,s[4]=c*m+h*w+f*P,s[7]=c*p+h*y+f*I,s[2]=d*_+u*T+g*O,s[5]=d*m+u*w+g*P,s[8]=d*p+u*y+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*s,u=c*s-a*l,g=e*f+n*d+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-h*n)*_,t[2]=(o*n-r*a)*_,t[3]=d*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Yt;function Pc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pu(){const i=Rs("canvas");return i.style.display="block",i}const Wo={};function Mr(i){i in Wo||(Wo[i]=!0,console.warn(i))}function mu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function gu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _u(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?Ns:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xo=[.64,.33,.3,.6,.15,.06],qo=[.2126,.7152,.0722],Yo=[.3127,.329],Zo=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[nr]:{primaries:Xo,whitePoint:Yo,transfer:Ns,toXYZ:Zo,fromXYZ:jo,luminanceCoefficients:qo,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Xo,whitePoint:Yo,transfer:oe,toXYZ:Zo,fromXYZ:jo,luminanceCoefficients:qo,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let Ti;class vu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Rs("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class Dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ks(r[a].image)):s.push(ks(r[a]))}else s=ks(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ks(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mu=0;class Oe extends ir{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=gi,r=gi,s=on,a=Ln,o=mn,l=zn,c=Oe.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Nn(),this.name="",this.source=new Dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case On:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case On:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=xc;Oe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(u+1)/2,O=(p+1)/2,P=(h+d)/4,I=(f+_)/4,L=(g+m)/4;return w>y&&w>O?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=P/n,s=I/n):y>O?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=P/r,s=L/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=I/s,r=L/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends ir{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Oe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Su{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ic extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yu extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],u=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let m=1-o;const p=l*d+c*u+h*g+f*_,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const O=Math.sqrt(w),P=Math.atan2(O,p*T);m=Math.sin(m*P)/O,o=Math.sin(o*P)/O}const y=o*T;if(l=l*m+d*y,c=c*m+u*y,h=h*m+g*y,f=f*m+_*y,m===1-o){const O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],d=s[a+1],u=s[a+2],g=s[a+3];return t[e]=o*g+h*f+l*u-c*d,t[e+1]=l*g+h*d+c*f-o*u,t[e+2]=c*g+h*u+o*d-l*f,t[e+3]=h*g-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),d=l(n/2),u=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-r)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+c)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(s-c)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-r)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ko.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new k,Ko=new Ur;class Nr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),Br.subVectors(this.max,lr),wi.subVectors(t.a,lr),bi.subVectors(t.b,lr),Ai.subVectors(t.c,lr),qn.subVectors(bi,wi),Yn.subVectors(Ai,bi),si.subVectors(wi,Ai);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-si.z,si.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,si.z,0,-si.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-si.y,si.x,0];return!Vs(e,wi,bi,Ai,Br)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,wi,bi,Ai,Br))?!1:(kr.crossVectors(qn,Yn),e=[kr.x,kr.y,kr.z],Vs(e,wi,bi,Ai,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new k,new k,new k,new k,new k,new k,new k,new k],un=new k,zr=new Nr,wi=new k,bi=new k,Ai=new k,qn=new k,Yn=new k,si=new k,lr=new k,Br=new k,kr=new k,ai=new k;function Vs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ai.fromArray(i,s);const o=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Eu=new Nr,cr=new k,Gs=new k;class Fr{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Gs)),this.expandByPoint(cr.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new k,Ws=new k,Hr=new k,Zn=new k,Xs=new k,Vr=new k,qs=new k;class wo{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ws.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Ws);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Hr),o=Zn.dot(this.direction),l=-Zn.dot(Hr),c=Zn.lengthSq(),h=Math.abs(1-a*a);let f,d,u,g;if(h>0)if(f=a*l-o,d=a*o-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ws).addScaledVector(Hr,d),u}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),r=wn.dot(wn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,r,s){Xs.subVectors(e,t),Vr.subVectors(n,t),qs.crossVectors(Xs,Vr);let a=this.direction.dot(qs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);const l=o*this.direction.dot(Vr.crossVectors(Zn,Vr));if(l<0)return null;const c=o*this.direction.dot(Xs.cross(Zn));if(c<0||l+c>a)return null;const h=-o*Zn.dot(qs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,r,s,a,o,l,c,h,f,d,u,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,f,d,u,g,_,m)}set(t,e,n,r,s,a,o,l,c,h,f,d,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ri.setFromMatrixColumn(t,0).length(),s=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*h,u=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d+_*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,u=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tu,t,wu)}lookAt(t,e,n){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),jn.crossVectors(n,Ke),jn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),jn.crossVectors(n,Ke)),jn.normalize(),Gr.crossVectors(Ke,jn),r[0]=jn.x,r[4]=Gr.x,r[8]=Ke.x,r[1]=jn.y,r[5]=Gr.y,r[9]=Ke.y,r[2]=jn.z,r[6]=Gr.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],w=n[7],y=n[11],O=n[15],P=r[0],I=r[4],L=r[8],M=r[12],v=r[1],R=r[5],N=r[9],V=r[13],G=r[2],x=r[6],C=r[10],U=r[14],D=r[3],Y=r[7],et=r[11],ht=r[15];return s[0]=a*P+o*v+l*G+c*D,s[4]=a*I+o*R+l*x+c*Y,s[8]=a*L+o*N+l*C+c*et,s[12]=a*M+o*V+l*U+c*ht,s[1]=h*P+f*v+d*G+u*D,s[5]=h*I+f*R+d*x+u*Y,s[9]=h*L+f*N+d*C+u*et,s[13]=h*M+f*V+d*U+u*ht,s[2]=g*P+_*v+m*G+p*D,s[6]=g*I+_*R+m*x+p*Y,s[10]=g*L+_*N+m*C+p*et,s[14]=g*M+_*V+m*U+p*ht,s[3]=T*P+w*v+y*G+O*D,s[7]=T*I+w*R+y*x+O*Y,s[11]=T*L+w*N+y*C+O*et,s[15]=T*M+w*V+y*U+O*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*u-n*l*u)+_*(+e*l*u-e*c*d+s*a*d-r*a*u+r*c*h-s*l*h)+m*(+e*c*f-e*o*u-s*a*f+n*a*u+s*o*h-n*c*h)+p*(-r*o*h-e*l*f+e*o*d+r*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=f*m*c-_*d*c+_*l*u-o*m*u-f*l*p+o*d*p,w=g*d*c-h*m*c-g*l*u+a*m*u+h*l*p-a*d*p,y=h*_*c-g*f*c+g*o*u-a*_*u-h*o*p+a*f*p,O=g*f*l-h*_*l-g*o*d+a*_*d+h*o*m-a*f*m,P=e*T+n*w+r*y+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=T*I,t[1]=(_*d*s-f*m*s-_*r*u+n*m*u+f*r*p-n*d*p)*I,t[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*I,t[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*u-n*l*u)*I,t[4]=w*I,t[5]=(h*m*s-g*d*s+g*r*u-e*m*u-h*r*p+e*d*p)*I,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*p-e*l*p)*I,t[7]=(a*d*s-h*l*s+h*r*c-e*d*c-a*r*u+e*l*u)*I,t[8]=y*I,t[9]=(g*f*s-h*_*s-g*n*u+e*_*u+h*n*p-e*f*p)*I,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*I,t[11]=(h*o*s-a*f*s-h*n*c+e*f*c+a*n*u-e*o*u)*I,t[12]=O*I,t[13]=(h*_*r-g*f*r+g*n*d-e*_*d-h*n*m+e*f*m)*I,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*m-e*o*m)*I,t[15]=(a*f*r-h*o*r+h*n*l-e*f*l-a*n*d+e*o*d)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,f=o+o,d=s*c,u=s*h,g=s*f,_=a*h,m=a*f,p=o*f,T=l*c,w=l*h,y=l*f,O=n.x,P=n.y,I=n.z;return r[0]=(1-(_+p))*O,r[1]=(u+y)*O,r[2]=(g-w)*O,r[3]=0,r[4]=(u-y)*P,r[5]=(1-(d+p))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(g+w)*I,r[9]=(m-T)*I,r[10]=(1-(d+_))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const a=Ri.set(r[4],r[5],r[6]).length(),o=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],fn.copy(this);const c=1/s,h=1/a,f=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,e.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Un){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let u,g;if(o===Un)u=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===As)u=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Un){const l=this.elements,c=1/(e-t),h=1/(n-r),f=1/(a-s),d=(e+t)*c,u=(n+r)*h;let g,_;if(o===Un)g=(a+s)*f,_=-2*f;else if(o===As)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new k,fn=new ce,Tu=new k(0,0,0),wu=new k(1,1,1),jn=new k,Gr=new k,Ke=new k,$o=new ce,Jo=new Ur;class Sn{constructor(t=0,e=0,n=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $o.makeRotationFromQuaternion(t),this.setFromRotationMatrix($o,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jo.setFromEuler(this),this.setFromQuaternion(Jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bu=0;const Qo=new k,Ci=new Ur,bn=new ce,Wr=new k,hr=new k,Au=new k,Ru=new Ur,tl=new k(1,0,0),el=new k(0,1,0),nl=new k(0,0,1),il={type:"added"},Cu={type:"removed"},Pi={type:"childadded",child:null},Ys={type:"childremoved",child:null};class xe extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new k,e=new Sn,n=new Ur,r=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new Yt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(tl,t)}rotateY(t){return this.rotateOnAxis(el,t)}rotateZ(t){return this.rotateOnAxis(nl,t)}translateOnAxis(t,e){return Qo.copy(t).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tl,t)}translateY(t){return this.translateOnAxis(el,t)}translateZ(t){return this.translateOnAxis(nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(hr,Wr,this.up):bn.lookAt(Wr,hr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(bn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(il),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cu),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(il),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xe.DEFAULT_UP=new k(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new k,An=new k,Zs=new k,Rn=new k,Di=new k,Ii=new k,rl=new k,js=new k,Ks=new k,$s=new k,Js=new le,Qs=new le,ta=new le;class an{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){dn.subVectors(r,e),An.subVectors(n,e),Zs.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(An),l=dn.dot(Zs),c=An.dot(An),h=An.dot(Zs),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,u=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-u-g,g,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Js.setScalar(0),Qs.setScalar(0),ta.setScalar(0),Js.fromBufferAttribute(t,e),Qs.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Js,s.x),a.addScaledVector(Qs,s.y),a.addScaledVector(ta,s.z),a}static isFrontFacing(t,e,n,r){return dn.subVectors(n,e),An.subVectors(t,e),dn.cross(An).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),dn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,n),Ii.subVectors(s,n),js.subVectors(t,n);const l=Di.dot(js),c=Ii.dot(js);if(l<=0&&c<=0)return e.copy(n);Ks.subVectors(t,r);const h=Di.dot(Ks),f=Ii.dot(Ks);if(h>=0&&f<=h)return e.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Di,a);$s.subVectors(t,s);const u=Di.dot($s),g=Ii.dot($s);if(g>=0&&u<=g)return e.copy(s);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ii,o);const m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return rl.subVectors(s,r),o=(f-h)/(f-h+(u-g)),e.copy(r).addScaledVector(rl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=To(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ea(a,s,t+1/3),this.g=ea(a,s,t),this.b=ea(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Qt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ie(Ne.r*255,0,255))*65536+Math.round(Ie(Ne.g*255,0,255))*256+Math.round(Ie(Ne.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,r=Ne.g,s=Ne.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=De){Qt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,r=Ne.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Xr);const n=Ar(Kn.h,Xr.h,e),r=Ar(Kn.s,Xr.s,e),s=Ar(Kn.l,Xr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Wt;Wt.NAMES=Uc;let Pu=0;class Hn extends ir{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Nn(),this.name="",this.blending=Yi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=wa,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ye extends Hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new k,qr=new vt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lo&&(t.usage=this.usage),t}}class Nc extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fc extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Du=0;const rn=new ce,na=new xe,Li=new k,$e=new Nr,ur=new Nr,be=new k;class Me extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pc(t)?Fc:Nc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors($e.min,ur.min),$e.expandByPoint(be),be.addVectors($e.max,ur.max),$e.expandByPoint(be)):($e.expandByPoint(ur.min),$e.expandByPoint(ur.max))}$e.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),be.add(Li)),r=Math.max(r,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new k,l[L]=new k;const c=new k,h=new k,f=new k,d=new vt,u=new vt,g=new vt,_=new k,m=new k;function p(L,M,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,v),d.fromBufferAttribute(s,L),u.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const R=1/(u.x*g.y-g.x*u.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(R),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(R),o[L].add(_),o[M].add(_),o[v].add(_),l[L].add(m),l[M].add(m),l[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,M=T.length;L<M;++L){const v=T[L],R=v.start,N=v.count;for(let V=R,G=R+N;V<G;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const w=new k,y=new k,O=new k,P=new k;function I(L){O.fromBufferAttribute(r,L),P.copy(O);const M=o[L];w.copy(M),w.sub(O.multiplyScalar(O.dot(M))).normalize(),y.crossVectors(P,M);const R=y.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,R)}for(let L=0,M=T.length;L<M;++L){const v=T[L],R=v.start,N=v.count;for(let V=R,G=R+N;V<G;V+=3)I(t.getX(V+0)),I(t.getX(V+1)),I(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(t)for(let d=0,u=t.count;d<u;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new Fe(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sl=new ce,oi=new wo,Yr=new Fr,al=new k,Zr=new k,jr=new k,Kr=new k,ia=new k,$r=new k,ol=new k,Jr=new k;class gt extends xe{constructor(t=new Me,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(ia.fromBufferAttribute(f,t),a?$r.addScaledVector(ia,h):$r.addScaledVector(ia.sub(e),h))}e.add($r)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(Yr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Yr,al)===null||oi.origin.distanceToSquared(al)>(t.far-t.near)**2))&&(sl.copy(s).invert(),oi.copy(t.ray).applyMatrix4(sl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,u.start),w=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=T,O=w;y<O;y+=3){const P=o.getX(y),I=o.getX(y+1),L=o.getX(y+2);r=Qr(this,p,t,n,c,h,f,P,I,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=Qr(this,a,t,n,c,h,f,T,w,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=T,O=w;y<O;y+=3){const P=y,I=y+1,L=y+2;r=Qr(this,p,t,n,c,h,f,P,I,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const T=m,w=m+1,y=m+2;r=Qr(this,a,t,n,c,h,f,T,w,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Iu(i,t,e,n,r,s,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ni,o),l===null)return null;Jr.copy(o),Jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:i}}function Qr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Zr),i.getVertexPosition(l,jr),i.getVertexPosition(c,Kr);const h=Iu(i,t,e,n,Zr,jr,Kr,ol);if(h){const f=new k;an.getBarycoord(ol,Zr,jr,Kr,f),r&&(h.uv=an.getInterpolatedAttribute(r,o,l,c,f,new vt)),s&&(h.uv1=an.getInterpolatedAttribute(s,o,l,c,f,new vt)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,c,f,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};an.getNormal(Zr,jr,Kr,d.normal),h.face=d,h.barycoord=f}return h}class Ft extends Me{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function g(_,m,p,T,w,y,O,P,I,L,M){const v=y/I,R=O/L,N=y/2,V=O/2,G=P/2,x=I+1,C=L+1;let U=0,D=0;const Y=new k;for(let et=0;et<C;et++){const ht=et*R-V;for(let At=0;At<x;At++){const kt=At*v-N;Y[_]=kt*T,Y[m]=ht*w,Y[p]=G,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=P>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(At/I),f.push(1-et/L),U+=1}}for(let et=0;et<L;et++)for(let ht=0;ht<I;ht++){const At=d+ht+x*et,kt=d+ht+x*(et+1),J=d+(ht+1)+x*(et+1),at=d+(ht+1)+x*et;l.push(At,kt,at),l.push(kt,J,at),D+=6}o.addGroup(u,D,M),u+=D,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const r in n)t[r]=n[r]}return t}function Lu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Sr={clone:er,merge:ke};var Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new k,ll=new vt,cl=new vt;class Je extends zc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,ll,cl),e.subVectors(cl,ll)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class Fu extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Je(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const s=new Je(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const a=new Je(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const o=new Je(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const l=new Je(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new Je(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bc extends Oe{constructor(t,e,n,r,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ou extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Bc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ft(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:qe});s.uniforms.tEquirect.value=e;const a=new gt(r,s),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=on),new Fu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ra=new k,zu=new k,Bu=new Yt;class di{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ra.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ra),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bu.getNormalMatrix(t),r=this.coplanarPoint(ra).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Fr,ts=new k;class bo{constructor(t=new di,e=new di,n=new di,r=new di,s=new di,a=new di){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],u=r[8],g=r[9],_=r[10],m=r[11],p=r[12],T=r[13],w=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,m-u,y-p).normalize(),n[1].setComponents(l+s,d+c,m+u,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+T).normalize(),n[3].setComponents(l-a,d-h,m-g,y-T).normalize(),n[4].setComponents(l-o,d-f,m-_,y-w).normalize(),e===Un)n[5].setComponents(l+o,d+f,m+_,y+w).normalize();else if(e===As)n[5].setComponents(o,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ts.x=r.normal.x>0?t.max.x:t.min.x,ts.y=r.normal.y>0?t.max.y:t.min.y,ts.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ku(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){const g=f[d],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){const _=f[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Qe extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=t/o,d=e/l,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*d-a;for(let w=0;w<c;w++){const y=w*f-s;g.push(y,-T,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const w=T+c*p,y=T+c*(p+1),O=T+1+c*(p+1),P=T+1+c*p;u.push(w,y,P),u.push(y,O,P)}this.setIndex(u),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
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
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju=`#ifdef USE_BATCHING
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
#endif`,Ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uf=`#define PI 3.141592653589793
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,kf=`struct PhysicalMaterial {
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
}`,Hf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
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
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bd=`float getShadowMask() {
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
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,jd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#define LAMBERT
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
}`,rp=`#define LAMBERT
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
}`,sp=`#define MATCAP
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
}`,ap=`#define MATCAP
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
}`,op=`#define NORMAL
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
}`,lp=`#define NORMAL
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
}`,cp=`#define PHONG
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
}`,hp=`#define PHONG
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
}`,up=`#define STANDARD
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
}`,fp=`#define STANDARD
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
}`,dp=`#define TOON
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
}`,pp=`#define TOON
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
}`,mp=`uniform float size;
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,vp=`uniform vec3 color;
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
}`,xp=`uniform float rotation;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Hu,alphahash_pars_fragment:Vu,alphamap_fragment:Gu,alphamap_pars_fragment:Wu,alphatest_fragment:Xu,alphatest_pars_fragment:qu,aomap_fragment:Yu,aomap_pars_fragment:Zu,batching_pars_vertex:ju,batching_vertex:Ku,begin_vertex:$u,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:af,color_fragment:of,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:hf,common:uf,cube_uv_reflection_fragment:ff,defaultnormal_vertex:df,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:vf,colorspace_pars_fragment:xf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:yf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Uf,envmap_vertex:Tf,fog_vertex:wf,fog_pars_vertex:bf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:If,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Of,lights_phong_pars_fragment:zf,lights_physical_fragment:Bf,lights_physical_pars_fragment:kf,lights_fragment_begin:Hf,lights_fragment_maps:Vf,lights_fragment_end:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Zf,map_pars_fragment:jf,map_particle_fragment:Kf,map_particle_pars_fragment:$f,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:td,morphcolor_vertex:ed,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:rd,normal_fragment_begin:sd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:ld,normal_vertex:cd,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:dd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:vd,dithering_fragment:xd,dithering_pars_fragment:Md,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:Td,shadowmap_vertex:wd,shadowmask_pars_fragment:bd,skinbase_vertex:Ad,skinning_pars_vertex:Rd,skinning_vertex:Cd,skinnormal_vertex:Pd,specularmap_fragment:Dd,specularmap_pars_fragment:Id,tonemapping_fragment:Ld,tonemapping_pars_fragment:Ud,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:zd,uv_vertex:Bd,worldpos_vertex:kd,background_vert:Hd,background_frag:Vd,backgroundCube_vert:Gd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:Yd,depth_frag:Zd,distanceRGBA_vert:jd,distanceRGBA_frag:Kd,equirect_vert:$d,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:rp,meshmatcap_vert:sp,meshmatcap_frag:ap,meshnormal_vert:op,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:fp,meshtoon_vert:dp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:_p,shadow_frag:vp,sprite_vert:xp,sprite_frag:Mp},St={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},xn={basic:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ke([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ke([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ke([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ke([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ke([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ke([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ke([St.common,St.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ke([St.lights,St.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};xn.physical={uniforms:ke([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const es={r:0,b:0,g:0},ci=new Sn,Sp=new ce;function yp(i,t,e,n,r,s,a){const o=new Wt(0);let l=s===!0?0:1,c,h,f=null,d=0,u=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function _(T){let w=!1;const y=g(T);y===null?p(o,l):y&&y.isColor&&(p(y,1),w=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===Us)?(h===void 0&&(h=new gt(new Ft(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:er(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ci.copy(w.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sp.makeRotationFromEuler(ci)),h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==oe,(f!==y||d!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gt(new Qe(2,2),new ln({name:"BackgroundMaterial",uniforms:er(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,w){T.getRGB(es,Oc(i)),n.buffers.color.setClear(es.r,es.g,es.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:_,addToRenderList:m}}function Ep(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(v,R,N,V,G){let x=!1;const C=f(V,N,R);s!==C&&(s=C,c(s.object)),x=u(v,V,N,G),x&&g(v,V,N,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(x||a)&&(a=!1,y(v,R,N,V),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,R,N){const V=N.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let x=G[R.id];x===void 0&&(x={},G[R.id]=x);let C=x[V];return C===void 0&&(C=d(l()),x[V]=C),C}function d(v){const R=[],N=[],V=[];for(let G=0;G<e;G++)R[G]=0,N[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:V,object:v,attributes:{},index:null}}function u(v,R,N,V){const G=s.attributes,x=R.attributes;let C=0;const U=N.getAttributes();for(const D in U)if(U[D].location>=0){const et=G[D];let ht=x[D];if(ht===void 0&&(D==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),D==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;C++}return s.attributesNum!==C||s.index!==V}function g(v,R,N,V){const G={},x=R.attributes;let C=0;const U=N.getAttributes();for(const D in U)if(U[D].location>=0){let et=x[D];et===void 0&&(D==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),D==="instanceColor"&&v.instanceColor&&(et=v.instanceColor));const ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),G[D]=ht,C++}s.attributes=G,s.attributesNum=C,s.index=V}function _(){const v=s.newAttributes;for(let R=0,N=v.length;R<N;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const N=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;N[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),G[v]!==R&&(i.vertexAttribDivisor(v,R),G[v]=R)}function T(){const v=s.newAttributes,R=s.enabledAttributes;for(let N=0,V=R.length;N<V;N++)R[N]!==v[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function w(v,R,N,V,G,x,C){C===!0?i.vertexAttribIPointer(v,R,N,G,x):i.vertexAttribPointer(v,R,N,V,G,x)}function y(v,R,N,V){_();const G=V.attributes,x=N.getAttributes(),C=R.defaultAttributeValues;for(const U in x){const D=x[U];if(D.location>=0){let Y=G[U];if(Y===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const et=Y.normalized,ht=Y.itemSize,At=t.get(Y);if(At===void 0)continue;const kt=At.buffer,J=At.type,at=At.bytesPerElement,_t=J===i.INT||J===i.UNSIGNED_INT||Y.gpuType===go;if(Y.isInterleavedBufferAttribute){const ct=Y.data,Q=ct.stride,wt=Y.offset;if(ct.isInstancedInterleavedBuffer){for(let Tt=0;Tt<D.locationSize;Tt++)p(D.location+Tt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Tt=0;Tt<D.locationSize;Tt++)m(D.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Tt=0;Tt<D.locationSize;Tt++)w(D.location+Tt,ht/D.locationSize,J,et,Q*at,(wt+ht/D.locationSize*Tt)*at,_t)}else{if(Y.isInstancedBufferAttribute){for(let ct=0;ct<D.locationSize;ct++)p(D.location+ct,Y.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ct=0;ct<D.locationSize;ct++)m(D.location+ct);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let ct=0;ct<D.locationSize;ct++)w(D.location+ct,ht/D.locationSize,J,et,ht*at,ht/D.locationSize*ct*at,_t)}}else if(C!==void 0){const et=C[U];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(D.location,et);break;case 3:i.vertexAttrib3fv(D.location,et);break;case 4:i.vertexAttrib4fv(D.location,et);break;default:i.vertexAttrib1fv(D.location,et)}}}}T()}function O(){L();for(const v in n){const R=n[v];for(const N in R){const V=R[N];for(const G in V)h(V[G].object),delete V[G];delete R[N]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const N in R){const V=R[N];for(const G in V)h(V[G].object),delete V[G];delete R[N]}delete n[v.id]}function I(v){for(const R in n){const N=n[R];if(N[v.id]===void 0)continue;const V=N[v.id];for(const G in V)h(V[G].object),delete V[G];delete N[v.id]}}function L(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Tp(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==mn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const L=I===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==zn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Mn&&!L)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:O,maxSamples:P}}function bp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new di,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||r;return r=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const T=s?0:n,w=T*4;let y=p.clippingState||null;l.value=y,y=h(g,d,w,u);for(let O=0;O!==w;++O)y[O]=e[O];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=u;w!==_;++w,y+=4)a.copy(f[w]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ap(i){let t=new WeakMap;function e(a,o){return o===La?a.mapping=Qi:o===Ua&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===La||o===Ua)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ou(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ao extends zc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,hl=[.125,.215,.35,.446,.526,.582],mi=20,sa=new Ao,ul=new Wt;let aa=null,oa=0,la=0,ca=!1;const pi=(1+Math.sqrt(5))/2,Fi=1/pi,fl=[new k(-pi,Fi,0),new k(pi,Fi,0),new k(-Fi,0,pi),new k(Fi,0,pi),new k(0,pi,-Fi),new k(0,pi,Fi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class co{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:vi,format:mn,colorSpace:nr,depthBuffer:!1},r=dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(s)),this._blurMaterial=Cp(s,t,e)}return r}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,n,r){const o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ul),h.toneMapping=ei,h.autoClear=!1;const u=new ye({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new gt(new Ft,u);let _=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(ul),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const w=this._cubeSize;ns(r,T*w,p>2?w:0,w,w),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Qi||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fl[(r-s-1)%fl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new gt(this._lodPlanes[r],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*mi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let T=0;for(let I=0;I<mi;++I){const L=I/_,M=Math.exp(-L*L/2);p.push(M),I===0?T+=M:I<m&&(T+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const y=this._sizeLods[r],O=3*y*(r>w-Xi?r-w+Xi:0),P=4*(this._cubeSize-y);ns(e,O,P,3*y,2*y),l.setRenderTarget(e),l.render(f,sa)}}function Rp(i){const t=[],e=[],n=[];let r=i;const s=i-Xi+1+hl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Xi?l=hl[a-i+Xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*u),w=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let P=0;P<u;P++){const I=P%3*2/3-1,L=P>2?0:-1,M=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];T.set(M,_*g*P),w.set(d,m*g*P);const v=[P,P,P,P,P,P];y.set(v,p*g*P)}const O=new Me;O.setAttribute("position",new Fe(T,_)),O.setAttribute("uv",new Fe(w,m)),O.setAttribute("faceIndex",new Fe(y,p)),t.push(O),r>Xi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dl(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Cp(i,t,e){const n=new Float32Array(mi),r=new k(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:qe,depthTest:!1,depthWrite:!1})}function pl(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:qe,depthTest:!1,depthWrite:!1})}function ml(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Pp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===La||l===Ua,h=l===Qi||l===tr;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new co(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return c&&u&&u.height>0||h&&u&&r(u)?(e===null&&(e=new co(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Dp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ip(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const u=s.get(d);u&&(t.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const _=u[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const T=u.array;_=u.version;for(let w=0,y=T.length;w<y;w+=3){const O=T[w+0],P=T[w+1],I=T[w+2];d.push(O,P,P,I,I,O)}}else if(g!==void 0){const T=g.array;_=g.version;for(let w=0,y=T.length/3-1;w<y;w+=3){const O=w+0,P=w+1,I=w+2;d.push(O,P,P,I,I,O)}}else return;const m=new(Pc(d)?Fc:Nc)(d,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){const d=s.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Lp(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*a),e.update(u,n,1)}function c(d,u,g){g!==0&&(i.drawElementsInstanced(n,u,s,d*a,g),e.update(u,n,g))}function h(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=u[T]*_[T];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Up(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Np(i,t,e){const n=new WeakMap,r=new le;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var u=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let O=o.attributes.position.count*y,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const I=new Float32Array(O*P*4*f),L=new Ic(I,O,P,f);L.type=Mn,L.needsUpdate=!0;const M=y*4;for(let R=0;R<f;R++){const N=p[R],V=T[R],G=w[R],x=O*P*4*R;for(let C=0;C<N.count;C++){const U=C*M;g===!0&&(r.fromBufferAttribute(N,C),I[x+U+0]=r.x,I[x+U+1]=r.y,I[x+U+2]=r.z,I[x+U+3]=0),_===!0&&(r.fromBufferAttribute(V,C),I[x+U+4]=r.x,I[x+U+5]=r.y,I[x+U+6]=r.z,I[x+U+7]=0),m===!0&&(r.fromBufferAttribute(G,C),I[x+U+8]=r.x,I[x+U+9]=r.y,I[x+U+10]=r.z,I[x+U+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new vt(O,P)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Fp(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Co extends Oe{constructor(t,e,n,r,s,a,o,l,c,h=Zi){if(h!==Zi&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=_i),n===void 0&&h===Mi&&(n=xi),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hc=new Oe,gl=new Co(1,1),Vc=new Ic,Gc=new yu,Wc=new Bc,_l=[],vl=[],xl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function rr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=_l[r];if(s===void 0&&(s=new Float32Array(r),_l[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fs(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),we(e,n)}}function Vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),we(e,n)}}function Gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;xl.set(n),i.uniformMatrix4fv(this.addr,!1,xl),we(e,n)}}function Wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Jp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=Cc,s=gl):s=Hc,e.setTexture2D(t||s,r)}function Qp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gc,r)}function tm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Wc,r)}function em(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Vc,r)}function nm(i){switch(i){case 5126:return Op;case 35664:return zp;case 35665:return Bp;case 35666:return kp;case 35674:return Hp;case 35675:return Vp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return jp;case 36295:return Kp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function rm(i,t){const e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function sm(i,t){const e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function am(i,t){const e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function om(i,t){const e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lm(i,t){const e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cm(i,t){const e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function fm(i,t){i.uniform3iv(this.addr,t)}function dm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function vm(i,t,e){const n=this.cache,r=t.length,s=Fs(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Hc,s[a])}function xm(i,t,e){const n=this.cache,r=t.length,s=Fs(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Gc,s[a])}function Mm(i,t,e){const n=this.cache,r=t.length,s=Fs(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Wc,s[a])}function Sm(i,t,e){const n=this.cache,r=t.length,s=Fs(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Vc,s[a])}function ym(i){switch(i){case 5126:return im;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}class Em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}}class Tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ym(e.type)}}class wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function yl(i,t){i.seq.push(t),i.map[t.id]=t}function bm(i,t,e){const n=i.name,r=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),a=ha.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yl(e,c===void 0?new Em(o,i,t):new Tm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new wm(o),yl(e,f)),e=f}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);bm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function El(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Am=37297;let Rm=0;function Cm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Tl=new Yt;function Pm(i){Qt._getMatrix(Tl,Qt.workingColorSpace,i);const t=`mat3( ${Tl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Ns:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Cm(i.getShaderSource(t),a)}else return r}function Dm(i,t){const e=Pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Im(i,t){let e;switch(t){case Uh:e="Linear";break;case Nh:e="Reinhard";break;case Fh:e="Cineon";break;case vc:e="ACESFilmic";break;case zh:e="AgX";break;case Bh:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const is=new k;function Lm(){Qt.getLuminanceCoefficients(is);const i=is.x.toFixed(4),t=is.y.toFixed(4),e=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Nm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function yr(i){return i!==""}function bl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(Om,Bm)}const zm=new Map;function Bm(i,t){let e=Zt[t];if(e===void 0){const n=zm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ho(e)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(i){return i.replace(km,Hm)}function Hm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ym(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Vm(e),c=Gm(e),h=Wm(e),f=Xm(e),d=qm(e),u=Um(e),g=Nm(s),_=r.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Dm("linearToOutputTexel",e.outputColorSpace),Lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=ho(a),a=bl(a,e),a=Al(a,e),o=ho(o),o=bl(o,e),o=Al(o,e),a=Rl(a),o=Rl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+a,y=T+p+o,O=El(r,r.VERTEX_SHADER,w),P=El(r,r.FRAGMENT_SHADER,y);r.attachShader(_,O),r.attachShader(_,P),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function I(R){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(O).trim(),G=r.getShaderInfoLog(P).trim();let x=!0,C=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(x=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,O,P);else{const U=wl(r,O,"vertex"),D=wl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+U+`
`+D)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(V===""||G==="")&&(C=!1);C&&(R.diagnostics={runnable:x,programLog:N,vertexShader:{log:V,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(O),r.deleteShader(P),L=new ws(r,_),M=Fm(r,_)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Am)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=P,this}let Zm=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}}function $m(i,t,e,n,r,s,a){const o=new Lc,l=new jm,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let u=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,N,V){const G=N.fog,x=V.geometry,C=M.isMeshStandardMaterial?N.environment:null,U=(M.isMeshStandardMaterial?e:t).get(M.envMap||C),D=U&&U.mapping===Us?U.image.height:null,Y=g[M.type];M.precision!==null&&(u=r.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const et=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,ht=et!==void 0?et.length:0;let At=0;x.morphAttributes.position!==void 0&&(At=1),x.morphAttributes.normal!==void 0&&(At=2),x.morphAttributes.color!==void 0&&(At=3);let kt,J,at,_t;if(Y){const Xt=xn[Y];kt=Xt.vertexShader,J=Xt.fragmentShader}else kt=M.vertexShader,J=M.fragmentShader,l.update(M),at=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);const ct=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),wt=V.isInstancedMesh===!0,Tt=V.isBatchedMesh===!0,$t=!!M.map,Vt=!!M.matcap,te=!!U,z=!!M.aoMap,ie=!!M.lightMap,Nt=!!M.bumpMap,zt=!!M.normalMap,Pt=!!M.displacementMap,Jt=!!M.emissiveMap,bt=!!M.metalnessMap,b=!!M.roughnessMap,S=M.anisotropy>0,q=M.clearcoat>0,$=M.dispersion>0,st=M.iridescence>0,tt=M.sheen>0,mt=M.transmission>0,ut=S&&!!M.anisotropyMap,pt=q&&!!M.clearcoatMap,Bt=q&&!!M.clearcoatNormalMap,lt=q&&!!M.clearcoatRoughnessMap,xt=st&&!!M.iridescenceMap,Rt=st&&!!M.iridescenceThicknessMap,Ot=tt&&!!M.sheenColorMap,B=tt&&!!M.sheenRoughnessMap,rt=!!M.specularMap,ft=!!M.specularColorMap,Et=!!M.specularIntensityMap,F=mt&&!!M.transmissionMap,ot=mt&&!!M.thicknessMap,j=!!M.gradientMap,nt=!!M.alphaMap,X=M.alphaTest>0,K=!!M.alphaHash,it=!!M.extensions;let Mt=ei;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Ct={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:J,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&V._colorsTexture!==null,instancing:wt,instancingColor:wt&&V.instanceColor!==null,instancingMorph:wt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:nr,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:Vt,envMap:te,envMapMode:te&&U.mapping,envMapCubeUVHeight:D,aoMap:z,lightMap:ie,bumpMap:Nt,normalMap:zt,displacementMap:d&&Pt,emissiveMap:Jt,normalMapObjectSpace:zt&&M.normalMapType===Gh,normalMapTangentSpace:zt&&M.normalMapType===Eo,metalnessMap:bt,roughnessMap:b,anisotropy:S,anisotropyMap:ut,clearcoat:q,clearcoatMap:pt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:lt,dispersion:$,iridescence:st,iridescenceMap:xt,iridescenceThicknessMap:Rt,sheen:tt,sheenColorMap:Ot,sheenRoughnessMap:B,specularMap:rt,specularColorMap:ft,specularIntensityMap:Et,transmission:mt,transmissionMap:F,thicknessMap:ot,gradientMap:j,opaque:M.transparent===!1&&M.blending===Yi&&M.alphaToCoverage===!1,alphaMap:nt,alphaTest:X,alphaHash:K,combine:M.combine,mapUv:$t&&_(M.map.channel),aoMapUv:z&&_(M.aoMap.channel),lightMapUv:ie&&_(M.lightMap.channel),bumpMapUv:Nt&&_(M.bumpMap.channel),normalMapUv:zt&&_(M.normalMap.channel),displacementMapUv:Pt&&_(M.displacementMap.channel),emissiveMapUv:Jt&&_(M.emissiveMap.channel),metalnessMapUv:bt&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:B&&_(M.sheenRoughnessMap.channel),specularMapUv:rt&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:Et&&_(M.specularIntensityMap.channel),transmissionMapUv:F&&_(M.transmissionMap.channel),thicknessMapUv:ot&&_(M.thicknessMap.channel),alphaMapUv:nt&&_(M.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(zt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!x.attributes.uv&&($t||nt),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Q,skinning:V.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:At,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:Jt&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&M.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(T(v,M),w(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function T(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function w(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const v=g[M.type];let R;if(v){const N=xn[v];R=Sr.clone(N.uniforms)}else R=M.uniforms;return R}function O(M,v){let R;for(let N=0,V=h.length;N<V;N++){const G=h[N];if(G.cacheKey===v){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Ym(i,v,M,s),h.push(R)),R}function P(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function I(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:O,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:L}}function Jm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,u,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function o(f,d,u,g,_,m){const p=a(f,d,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?r.push(p):e.push(p)}function l(f,d,u,g,_,m){const p=a(f,d,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||Qm),n.length>1&&n.sort(d||Pl),r.length>1&&r.sort(d||Pl)}function h(){for(let f=t,d=i.length;f<d;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function t0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Dl,i.set(n,[a])):r>=s.length?(a=new Dl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Wt};break;case"SpotLight":e={position:new k,direction:new k,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function n0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i0=0;function r0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s0(i){const t=new e0,e=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const r=new k,s=new ce,a=new ce;function o(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,T=0,w=0,y=0,O=0,P=0,I=0;c.sort(r0);for(let M=0,v=c.length;M<v;M++){const R=c[M],N=R.color,V=R.intensity,G=R.distance,x=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*V,f+=N.g*V,d+=N.b*V;else if(R.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(R.sh.coefficients[C],V);I++}else if(R.isDirectionalLight){const C=t.get(R);if(C.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,D=e.get(R);D.shadowIntensity=U.intensity,D.shadowBias=U.bias,D.shadowNormalBias=U.normalBias,D.shadowRadius=U.radius,D.shadowMapSize=U.mapSize,n.directionalShadow[u]=D,n.directionalShadowMap[u]=x,n.directionalShadowMatrix[u]=R.shadow.matrix,T++}n.directional[u]=C,u++}else if(R.isSpotLight){const C=t.get(R);C.position.setFromMatrixPosition(R.matrixWorld),C.color.copy(N).multiplyScalar(V),C.distance=G,C.coneCos=Math.cos(R.angle),C.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),C.decay=R.decay,n.spot[_]=C;const U=R.shadow;if(R.map&&(n.spotLightMap[O]=R.map,O++,U.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[_]=U.matrix,R.castShadow){const D=e.get(R);D.shadowIntensity=U.intensity,D.shadowBias=U.bias,D.shadowNormalBias=U.normalBias,D.shadowRadius=U.radius,D.shadowMapSize=U.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=x,y++}_++}else if(R.isRectAreaLight){const C=t.get(R);C.color.copy(N).multiplyScalar(V),C.halfWidth.set(R.width*.5,0,0),C.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=C,m++}else if(R.isPointLight){const C=t.get(R);if(C.color.copy(R.color).multiplyScalar(R.intensity),C.distance=R.distance,C.decay=R.decay,R.castShadow){const U=R.shadow,D=e.get(R);D.shadowIntensity=U.intensity,D.shadowBias=U.bias,D.shadowNormalBias=U.normalBias,D.shadowRadius=U.radius,D.shadowMapSize=U.mapSize,D.shadowCameraNear=U.camera.near,D.shadowCameraFar=U.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=x,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=C,g++}else if(R.isHemisphereLight){const C=t.get(R);C.skyColor.copy(R.color).multiplyScalar(V),C.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[p]=C,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==u||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==y||L.numSpotMaps!==O||L.numLightProbes!==I)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,L.directionalLength=u,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=y,L.numSpotMaps=O,L.numLightProbes=I,n.version=i0++)}function l(c,h){let f=0,d=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const w=c[p];if(w.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(w.isSpotLight){const y=n.spot[u];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),u++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Il(i){const t=new s0(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function a0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Il(i),t.set(r,[o])):s>=a.length?(o=new Il(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class o0 extends Hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l0 extends Hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`;function u0(i,t,e){let n=new bo;const r=new vt,s=new vt,a=new le,o=new o0({depthPacking:Vh}),l=new l0,c={},h=e.maxTextureSize,f={[ni]:He,[He]:ni,[tn]:tn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:c0,fragmentShader:h0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let p=this.type;this.render=function(P,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(qe),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=p!==Pn&&this.type===Pn,G=p===Pn&&this.type!==Pn;for(let x=0,C=P.length;x<C;x++){const U=P[x],D=U.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||V===!0||G===!0){const ht=this.type!==Pn?{minFilter:Ve,magFilter:Ve}:{};D.map!==null&&D.map.dispose(),D.map=new Bn(r.x,r.y,ht),D.map.texture.name=U.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const et=D.getViewportCount();for(let ht=0;ht<et;ht++){const At=D.getViewport(ht);a.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),N.viewport(a),D.updateMatrices(U,ht),n=D.getFrustum(),y(I,L,D.camera,U,this.type)}D.isPointLightShadow!==!0&&this.type===Pn&&T(D,L),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,R)};function T(P,I){const L=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bn(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,L,d,_,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,L,u,_,null)}function w(P,I,L,M){let v=null;const R=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)v=R;else if(v=L.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const N=v.uuid,V=I.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let x=G[V];x===void 0&&(x=v.clone(),G[V]=x,I.addEventListener("dispose",O)),v=x}if(v.visible=I.visible,v.wireframe=I.wireframe,M===Pn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:f[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=L}return v}function y(P,I,L,M,v){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Pn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const V=t.update(P),G=P.material;if(Array.isArray(G)){const x=V.groups;for(let C=0,U=x.length;C<U;C++){const D=x[C],Y=G[D.materialIndex];if(Y&&Y.visible){const et=w(P,Y,M,v);P.onBeforeShadow(i,P,I,L,V,et,D),i.renderBufferDirect(L,null,V,et,P,D),P.onAfterShadow(i,P,I,L,V,et,D)}}}else if(G.visible){const x=w(P,G,M,v);P.onBeforeShadow(i,P,I,L,V,x,null),i.renderBufferDirect(L,null,V,x,P,null),P.onAfterShadow(i,P,I,L,V,x,null)}}const N=P.children;for(let V=0,G=N.length;V<G;V++)y(N[V],I,L,M,v)}function O(P){P.target.removeEventListener("dispose",O);for(const L in c){const M=c[L],v=P.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const f0={[ba]:Aa,[Ra]:Da,[Ca]:Ia,[Ji]:Pa,[Aa]:ba,[Da]:Ra,[Ia]:Ca,[Pa]:Ji};function d0(i,t){function e(){let F=!1;const ot=new le;let j=null;const nt=new le(0,0,0,0);return{setMask:function(X){j!==X&&!F&&(i.colorMask(X,X,X,X),j=X)},setLocked:function(X){F=X},setClear:function(X,K,it,Mt,Ct){Ct===!0&&(X*=Mt,K*=Mt,it*=Mt),ot.set(X,K,it,Mt),nt.equals(ot)===!1&&(i.clearColor(X,K,it,Mt),nt.copy(ot))},reset:function(){F=!1,j=null,nt.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,j=null,nt=null,X=null;return{setReversed:function(K){if(ot!==K){const it=t.get("EXT_clip_control");ot?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Mt=X;X=null,this.setClear(Mt)}ot=K},getReversed:function(){return ot},setTest:function(K){K?ct(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(K){j!==K&&!F&&(i.depthMask(K),j=K)},setFunc:function(K){if(ot&&(K=f0[K]),nt!==K){switch(K){case ba:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=K}},setLocked:function(K){F=K},setClear:function(K){X!==K&&(ot&&(K=1-K),i.clearDepth(K),X=K)},reset:function(){F=!1,j=null,nt=null,X=null,ot=!1}}}function r(){let F=!1,ot=null,j=null,nt=null,X=null,K=null,it=null,Mt=null,Ct=null;return{setTest:function(Xt){F||(Xt?ct(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(Xt){ot!==Xt&&!F&&(i.stencilMask(Xt),ot=Xt)},setFunc:function(Xt,_e,Se){(j!==Xt||nt!==_e||X!==Se)&&(i.stencilFunc(Xt,_e,Se),j=Xt,nt=_e,X=Se)},setOp:function(Xt,_e,Se){(K!==Xt||it!==_e||Mt!==Se)&&(i.stencilOp(Xt,_e,Se),K=Xt,it=_e,Mt=Se)},setLocked:function(Xt){F=Xt},setClear:function(Xt){Ct!==Xt&&(i.clearStencil(Xt),Ct=Xt)},reset:function(){F=!1,ot=null,j=null,nt=null,X=null,K=null,it=null,Mt=null,Ct=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,w=null,y=null,O=null,P=null,I=new Wt(0,0,0),L=0,M=!1,v=null,R=null,N=null,V=null,G=null;const x=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,U=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(D)[1]),C=U>=1):D.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),C=U>=2);let Y=null,et={};const ht=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),kt=new le().fromArray(ht),J=new le().fromArray(At);function at(F,ot,j,nt){const X=new Uint8Array(4),K=i.createTexture();i.bindTexture(F,K),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<j;it++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(ot+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return K}const _t={};_t[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(Ji),Nt(!1),zt(zo),ct(i.CULL_FACE),z(qe);function ct(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Q(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function wt(F,ot){return f[F]!==ot?(i.bindFramebuffer(F,ot),f[F]=ot,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ot),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Tt(F,ot){let j=u,nt=!1;if(F){j=d.get(ot),j===void 0&&(j=[],d.set(ot,j));const X=F.textures;if(j.length!==X.length||j[0]!==i.COLOR_ATTACHMENT0){for(let K=0,it=X.length;K<it;K++)j[K]=i.COLOR_ATTACHMENT0+K;j.length=X.length,nt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,nt=!0);nt&&i.drawBuffers(j)}function $t(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const Vt={[Dn]:i.FUNC_ADD,[vh]:i.FUNC_SUBTRACT,[xh]:i.FUNC_REVERSE_SUBTRACT};Vt[Mh]=i.MIN,Vt[Sh]=i.MAX;const te={[Ea]:i.ZERO,[yh]:i.ONE,[Eh]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Ah]:i.SRC_ALPHA_SATURATE,[gc]:i.DST_COLOR,[mc]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[wh]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Dh]:i.ONE_MINUS_CONSTANT_ALPHA};function z(F,ot,j,nt,X,K,it,Mt,Ct,Xt){if(F===qe){_===!0&&(Q(i.BLEND),_=!1);return}if(_===!1&&(ct(i.BLEND),_=!0),F!==pc){if(F!==m||Xt!==M){if((p!==Dn||y!==Dn)&&(i.blendEquation(i.FUNC_ADD),p=Dn,y=Dn),Xt)switch(F){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,w=null,O=null,P=null,I.set(0,0,0),L=0,m=F,M=Xt}return}X=X||ot,K=K||j,it=it||nt,(ot!==p||X!==y)&&(i.blendEquationSeparate(Vt[ot],Vt[X]),p=ot,y=X),(j!==T||nt!==w||K!==O||it!==P)&&(i.blendFuncSeparate(te[j],te[nt],te[K],te[it]),T=j,w=nt,O=K,P=it),(Mt.equals(I)===!1||Ct!==L)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ct),I.copy(Mt),L=Ct),m=F,M=!1}function ie(F,ot){F.side===tn?Q(i.CULL_FACE):ct(i.CULL_FACE);let j=F.side===He;ot&&(j=!j),Nt(j),F.blending===Yi&&F.transparent===!1?z(qe):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const nt=F.stencilWrite;o.setTest(nt),nt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Jt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function zt(F){F!==gh?(ct(i.CULL_FACE),F!==R&&(F===zo?i.cullFace(i.BACK):F===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),R=F}function Pt(F){F!==N&&(C&&i.lineWidth(F),N=F)}function Jt(F,ot,j){F?(ct(i.POLYGON_OFFSET_FILL),(V!==ot||G!==j)&&(i.polygonOffset(ot,j),V=ot,G=j)):Q(i.POLYGON_OFFSET_FILL)}function bt(F){F?ct(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function b(F){F===void 0&&(F=i.TEXTURE0+x-1),Y!==F&&(i.activeTexture(F),Y=F)}function S(F,ot,j){j===void 0&&(Y===null?j=i.TEXTURE0+x-1:j=Y);let nt=et[j];nt===void 0&&(nt={type:void 0,texture:void 0},et[j]=nt),(nt.type!==F||nt.texture!==ot)&&(Y!==j&&(i.activeTexture(j),Y=j),i.bindTexture(F,ot||_t[F]),nt.type=F,nt.texture=ot)}function q(){const F=et[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){kt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),kt.copy(F))}function B(F){J.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function rt(F,ot){let j=c.get(ot);j===void 0&&(j=new WeakMap,c.set(ot,j));let nt=j.get(F);nt===void 0&&(nt=i.getUniformBlockIndex(ot,F.name),j.set(F,nt))}function ft(F,ot){const nt=c.get(ot).get(F);l.get(ot)!==nt&&(i.uniformBlockBinding(ot,nt,F.__bindingPointIndex),l.set(ot,nt))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,et={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,w=null,y=null,O=null,P=null,I=new Wt(0,0,0),L=0,M=!1,v=null,R=null,N=null,V=null,G=null,kt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ct,disable:Q,bindFramebuffer:wt,drawBuffers:Tt,useProgram:$t,setBlending:z,setMaterial:ie,setFlipSided:Nt,setCullFace:zt,setLineWidth:Pt,setPolygonOffset:Jt,setScissorTest:bt,activeTexture:b,bindTexture:S,unbindTexture:q,compressedTexImage2D:$,compressedTexImage3D:st,texImage2D:xt,texImage3D:Rt,updateUBOMapping:rt,uniformBlockBinding:ft,texStorage2D:Bt,texStorage3D:lt,texSubImage2D:tt,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:Ot,viewport:B,reset:Et}}function Ll(i,t,e,n){const r=p0(n);switch(e){case Ec:return i*t;case wc:return i*t;case bc:return i*t*2;case xo:return i*t/r.components*r.byteLength;case Mo:return i*t/r.components*r.byteLength;case Ac:return i*t*2/r.components*r.byteLength;case So:return i*t*2/r.components*r.byteLength;case Tc:return i*t*3/r.components*r.byteLength;case mn:return i*t*4/r.components*r.byteLength;case yo:return i*t*4/r.components*r.byteLength;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ys:case Es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case za:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ts:case io:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rc:case so:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ao:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(i){switch(i){case zn:case Mc:return{byteLength:1,components:1};case Pr:case Sc:case vi:return{byteLength:2,components:1};case _o:case vo:return{byteLength:2,components:4};case _i:case go:case Mn:return{byteLength:4,components:1};case yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function m0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,S){return u?new OffscreenCanvas(b,S):Rs("canvas")}function _(b,S,q){let $=1;const st=bt(b);if((st.width>q||st.height>q)&&($=q/Math.max(st.width,st.height)),$<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){const tt=Math.floor($*st.width),mt=Math.floor($*st.height);f===void 0&&(f=g(tt,mt));const ut=S?g(tt,mt):f;return ut.width=tt,ut.height=mt,ut.getContext("2d").drawImage(b,0,0,tt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+mt+")."),ut}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,S,q,$,st=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=S;if(S===i.RED&&(q===i.FLOAT&&(tt=i.R32F),q===i.HALF_FLOAT&&(tt=i.R16F),q===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.R8UI),q===i.UNSIGNED_SHORT&&(tt=i.R16UI),q===i.UNSIGNED_INT&&(tt=i.R32UI),q===i.BYTE&&(tt=i.R8I),q===i.SHORT&&(tt=i.R16I),q===i.INT&&(tt=i.R32I)),S===i.RG&&(q===i.FLOAT&&(tt=i.RG32F),q===i.HALF_FLOAT&&(tt=i.RG16F),q===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RG8UI),q===i.UNSIGNED_SHORT&&(tt=i.RG16UI),q===i.UNSIGNED_INT&&(tt=i.RG32UI),q===i.BYTE&&(tt=i.RG8I),q===i.SHORT&&(tt=i.RG16I),q===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),q===i.UNSIGNED_INT&&(tt=i.RGB32UI),q===i.BYTE&&(tt=i.RGB8I),q===i.SHORT&&(tt=i.RGB16I),q===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),q===i.UNSIGNED_INT&&(tt=i.RGBA32UI),q===i.BYTE&&(tt=i.RGBA8I),q===i.SHORT&&(tt=i.RGBA16I),q===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){const mt=st?Ns:Qt.getTransfer($);q===i.FLOAT&&(tt=i.RGBA32F),q===i.HALF_FLOAT&&(tt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(tt=mt===oe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(b,S){let q;return b?S===null||S===_i||S===xi?q=i.DEPTH24_STENCIL8:S===Mn?q=i.DEPTH32F_STENCIL8:S===Pr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===xi?q=i.DEPTH_COMPONENT24:S===Mn?q=i.DEPTH_COMPONENT32F:S===Pr&&(q=i.DEPTH_COMPONENT16),q}function O(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ve&&b.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function P(b){const S=b.target;S.removeEventListener("dispose",P),L(S),S.isVideoTexture&&h.delete(S)}function I(b){const S=b.target;S.removeEventListener("dispose",I),v(S)}function L(b){const S=n.get(b);if(S.__webglInit===void 0)return;const q=b.source,$=d.get(q);if($){const st=$[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(b),Object.keys($).length===0&&d.delete(q)}n.remove(b)}function M(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const q=b.source,$=d.get(q);delete $[S.__cacheKey],a.memory.textures--}function v(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let st=0;st<S.__webglFramebuffer[$].length;st++)i.deleteFramebuffer(S.__webglFramebuffer[$][st]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=b.textures;for(let $=0,st=q.length;$<st;$++){const tt=n.get(q[$]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(q[$])}n.remove(b)}let R=0;function N(){R=0}function V(){const b=R;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),R+=1,b}function G(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function x(b,S){const q=n.get(b);if(b.isVideoTexture&&Pt(b),b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,b,S);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function C(b,S){const q=n.get(b);if(b.version>0&&q.__version!==b.version){J(q,b,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function U(b,S){const q=n.get(b);if(b.version>0&&q.__version!==b.version){J(q,b,S);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function D(b,S){const q=n.get(b);if(b.version>0&&q.__version!==b.version){at(q,b,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const Y={[On]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},et={[Ve]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},ht={[Wh]:i.NEVER,[Kh]:i.ALWAYS,[Xh]:i.LESS,[Cc]:i.LEQUAL,[qh]:i.EQUAL,[jh]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function At(b,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===zs||S.magFilter===Or||S.magFilter===Ln||S.minFilter===on||S.minFilter===zs||S.minFilter===Or||S.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Y[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,et[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ve||S.minFilter!==Or&&S.minFilter!==Ln||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(b,S){let q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",P));const $=S.source;let st=d.get($);st===void 0&&(st={},d.set($,st));const tt=G(S);if(tt!==b.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),st[tt].usedTimes++;const mt=st[b.__cacheKey];mt!==void 0&&(st[b.__cacheKey].usedTimes--,mt.usedTimes===0&&M(S)),b.__cacheKey=tt,b.__webglTexture=st[tt].texture}return q}function J(b,S,q){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const st=kt(b,S),tt=S.source;e.bindTexture($,b.__webglTexture,i.TEXTURE0+q);const mt=n.get(tt);if(tt.version!==mt.__version||st===!0){e.activeTexture(i.TEXTURE0+q);const ut=Qt.getPrimaries(Qt.workingColorSpace),pt=S.colorSpace===In?null:Qt.getPrimaries(S.colorSpace),Bt=S.colorSpace===In||ut===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let lt=_(S.image,!1,r.maxTextureSize);lt=Jt(S,lt);const xt=s.convert(S.format,S.colorSpace),Rt=s.convert(S.type);let Ot=w(S.internalFormat,xt,Rt,S.colorSpace,S.isVideoTexture);At($,S);let B;const rt=S.mipmaps,ft=S.isVideoTexture!==!0,Et=mt.__version===void 0||st===!0,F=tt.dataReady,ot=O(S,lt);if(S.isDepthTexture)Ot=y(S.format===Mi,S.type),Et&&(ft?e.texStorage2D(i.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,lt.width,lt.height,0,xt,Rt,null));else if(S.isDataTexture)if(rt.length>0){ft&&Et&&e.texStorage2D(i.TEXTURE_2D,ot,Ot,rt[0].width,rt[0].height);for(let j=0,nt=rt.length;j<nt;j++)B=rt[j],ft?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,B.width,B.height,xt,Rt,B.data):e.texImage2D(i.TEXTURE_2D,j,Ot,B.width,B.height,0,xt,Rt,B.data);S.generateMipmaps=!1}else ft?(Et&&e.texStorage2D(i.TEXTURE_2D,ot,Ot,lt.width,lt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,xt,Rt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,lt.width,lt.height,0,xt,Rt,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ft&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ot,rt[0].width,rt[0].height,lt.depth);for(let j=0,nt=rt.length;j<nt;j++)if(B=rt[j],S.format!==mn)if(xt!==null)if(ft){if(F)if(S.layerUpdates.size>0){const X=Ll(B.width,B.height,S.format,S.type);for(const K of S.layerUpdates){const it=B.data.subarray(K*X/B.data.BYTES_PER_ELEMENT,(K+1)*X/B.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,K,B.width,B.height,1,xt,it)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,B.width,B.height,lt.depth,xt,B.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ot,B.width,B.height,lt.depth,0,B.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,B.width,B.height,lt.depth,xt,Rt,B.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Ot,B.width,B.height,lt.depth,0,xt,Rt,B.data)}else{ft&&Et&&e.texStorage2D(i.TEXTURE_2D,ot,Ot,rt[0].width,rt[0].height);for(let j=0,nt=rt.length;j<nt;j++)B=rt[j],S.format!==mn?xt!==null?ft?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,B.width,B.height,xt,B.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Ot,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,B.width,B.height,xt,Rt,B.data):e.texImage2D(i.TEXTURE_2D,j,Ot,B.width,B.height,0,xt,Rt,B.data)}else if(S.isDataArrayTexture)if(ft){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ot,lt.width,lt.height,lt.depth),F)if(S.layerUpdates.size>0){const j=Ll(lt.width,lt.height,S.format,S.type);for(const nt of S.layerUpdates){const X=lt.data.subarray(nt*j/lt.data.BYTES_PER_ELEMENT,(nt+1)*j/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,lt.width,lt.height,1,xt,Rt,X)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,xt,Rt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,xt,Rt,lt.data);else if(S.isData3DTexture)ft?(Et&&e.texStorage3D(i.TEXTURE_3D,ot,Ot,lt.width,lt.height,lt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,xt,Rt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,xt,Rt,lt.data);else if(S.isFramebufferTexture){if(Et)if(ft)e.texStorage2D(i.TEXTURE_2D,ot,Ot,lt.width,lt.height);else{let j=lt.width,nt=lt.height;for(let X=0;X<ot;X++)e.texImage2D(i.TEXTURE_2D,X,Ot,j,nt,0,xt,Rt,null),j>>=1,nt>>=1}}else if(rt.length>0){if(ft&&Et){const j=bt(rt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Ot,j.width,j.height)}for(let j=0,nt=rt.length;j<nt;j++)B=rt[j],ft?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,xt,Rt,B):e.texImage2D(i.TEXTURE_2D,j,Ot,xt,Rt,B);S.generateMipmaps=!1}else if(ft){if(Et){const j=bt(lt);e.texStorage2D(i.TEXTURE_2D,ot,Ot,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Rt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,xt,Rt,lt);m(S)&&p($),mt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function at(b,S,q){if(S.image.length!==6)return;const $=kt(b,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+q);const tt=n.get(st);if(st.version!==tt.__version||$===!0){e.activeTexture(i.TEXTURE0+q);const mt=Qt.getPrimaries(Qt.workingColorSpace),ut=S.colorSpace===In?null:Qt.getPrimaries(S.colorSpace),pt=S.colorSpace===In||mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Bt=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let nt=0;nt<6;nt++)!Bt&&!lt?xt[nt]=_(S.image[nt],!0,r.maxCubemapSize):xt[nt]=lt?S.image[nt].image:S.image[nt],xt[nt]=Jt(S,xt[nt]);const Rt=xt[0],Ot=s.convert(S.format,S.colorSpace),B=s.convert(S.type),rt=w(S.internalFormat,Ot,B,S.colorSpace),ft=S.isVideoTexture!==!0,Et=tt.__version===void 0||$===!0,F=st.dataReady;let ot=O(S,Rt);At(i.TEXTURE_CUBE_MAP,S);let j;if(Bt){ft&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,rt,Rt.width,Rt.height);for(let nt=0;nt<6;nt++){j=xt[nt].mipmaps;for(let X=0;X<j.length;X++){const K=j[X];S.format!==mn?Ot!==null?ft?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X,0,0,K.width,K.height,Ot,K.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X,rt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X,0,0,K.width,K.height,Ot,B,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X,rt,K.width,K.height,0,Ot,B,K.data)}}}else{if(j=S.mipmaps,ft&&Et){j.length>0&&ot++;const nt=bt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,rt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,xt[nt].width,xt[nt].height,Ot,B,xt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,rt,xt[nt].width,xt[nt].height,0,Ot,B,xt[nt].data);for(let X=0;X<j.length;X++){const it=j[X].image[nt].image;ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X+1,0,0,it.width,it.height,Ot,B,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X+1,rt,it.width,it.height,0,Ot,B,it.data)}}else{ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ot,B,xt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,rt,Ot,B,xt[nt]);for(let X=0;X<j.length;X++){const K=j[X];ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X+1,0,0,Ot,B,K.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X+1,rt,Ot,B,K.image[nt])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),tt.__version=st.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function _t(b,S,q,$,st,tt){const mt=s.convert(q.format,q.colorSpace),ut=s.convert(q.type),pt=w(q.internalFormat,mt,ut,q.colorSpace),Bt=n.get(S),lt=n.get(q);if(lt.__renderTarget=S,!Bt.__hasExternalTextures){const xt=Math.max(1,S.width>>tt),Rt=Math.max(1,S.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,pt,xt,Rt,S.depth,0,mt,ut,null):e.texImage2D(st,tt,pt,xt,Rt,0,mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),zt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,st,lt.__webglTexture,0,Nt(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,st,lt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(b,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer){const $=S.depthTexture,st=$&&$.isDepthTexture?$.type:null,tt=y(S.stencilBuffer,st),mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Nt(S);zt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,tt,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,b)}else{const $=S.textures;for(let st=0;st<$.length;st++){const tt=$[st],mt=s.convert(tt.format,tt.colorSpace),ut=s.convert(tt.type),pt=w(tt.internalFormat,mt,ut,tt.colorSpace),Bt=Nt(S);q&&zt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,pt,S.width,S.height):zt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),x(S.depthTexture,0);const st=$.__webglTexture,tt=Nt(S);if(S.depthTexture.format===Zi)zt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===Mi)zt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function wt(b){const S=n.get(b),q=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",st)};$.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=$}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Q(S.__webglFramebuffer,b)}else if(q){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[$],b,!1);else{const st=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(b,S,q){const $=n.get(b);S!==void 0&&_t($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wt(b)}function $t(b){const S=b.texture,q=n.get(b),$=n.get(S);b.addEventListener("dispose",I);const st=b.textures,tt=b.isWebGLCubeRenderTarget===!0,mt=st.length>1;if(mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,a.memory.textures++),tt){q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[ut]=[];for(let pt=0;pt<S.mipmaps.length;pt++)q.__webglFramebuffer[ut][pt]=i.createFramebuffer()}else q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)q.__webglFramebuffer[ut]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(mt)for(let ut=0,pt=st.length;ut<pt;ut++){const Bt=n.get(st[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&zt(b)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ut=0;ut<st.length;ut++){const pt=st[ut];q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ut]);const Bt=s.convert(pt.format,pt.colorSpace),lt=s.convert(pt.type),xt=w(pt.internalFormat,Bt,lt,pt.colorSpace,b.isXRRenderTarget===!0),Rt=Nt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,xt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(q.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),At(i.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)_t(q.__webglFramebuffer[ut][pt],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else _t(q.__webglFramebuffer[ut],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ut=0,pt=st.length;ut<pt;ut++){const Bt=st[ut],lt=n.get(Bt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),At(i.TEXTURE_2D,Bt),_t(q.__webglFramebuffer,b,Bt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Bt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ut=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,$.__webglTexture),At(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)_t(q.__webglFramebuffer[pt],b,S,i.COLOR_ATTACHMENT0,ut,pt);else _t(q.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}b.depthBuffer&&wt(b)}function Vt(b){const S=b.textures;for(let q=0,$=S.length;q<$;q++){const st=S[q];if(m(st)){const tt=T(b),mt=n.get(st).__webglTexture;e.bindTexture(tt,mt),p(tt),e.unbindTexture()}}}const te=[],z=[];function ie(b){if(b.samples>0){if(zt(b)===!1){const S=b.textures,q=b.width,$=b.height;let st=i.COLOR_BUFFER_BIT;const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(b),ut=S.length>1;if(ut)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[pt]);const Bt=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,q,$,0,0,q,$,st,i.NEAREST),l===!0&&(te.length=0,z.length=0,te.push(i.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(te.push(tt),z.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[pt]);const Bt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Nt(b){return Math.min(r.maxSamples,b.samples)}function zt(b){const S=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(b){const S=a.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function Jt(b,S){const q=b.colorSpace,$=b.format,st=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||q!==nr&&q!==In&&(Qt.getTransfer(q)===oe?($!==mn||st!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function bt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=x,this.setTexture2DArray=C,this.setTexture3D=U,this.setTextureCube=D,this.rebindTextures=Tt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=zt}function g0(i,t){function e(n,r=In){let s;const a=Qt.getTransfer(r);if(n===zn)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===Tc)return i.RGB;if(n===mn)return i.RGBA;if(n===wc)return i.LUMINANCE;if(n===bc)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===Ac)return i.RG;if(n===So)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Ms||n===Ss||n===ys||n===Es)if(a===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===za||n===Ba)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Va)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ka||n===Ha)return a===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Va)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===ja||n===Ka||n===$a||n===Ja||n===Qa||n===to||n===eo||n===no)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===io||n===ro)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ts)return a===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===so||n===ao||n===oo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ts)return s.COMPRESSED_RED_RGTC1_EXT;if(n===so)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class _0 extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Le extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v0={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`;class S0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Oe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:x0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y0 extends ir{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const _=new S0,m=e.getContextAttributes();let p=null,T=null;const w=[],y=[],O=new vt;let P=null;const I=new Je;I.viewport=new le;const L=new Je;L.viewport=new le;const M=[I,L],v=new _0;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=w[J];return at===void 0&&(at=new ua,w[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=w[J];return at===void 0&&(at=new ua,w[J]=at),at.getGripSpace()},this.getHand=function(J){let at=w[J];return at===void 0&&(at=new ua,w[J]=at),at.getHandSpace()};function V(J){const at=y.indexOf(J.inputSource);if(at===-1)return;const _t=w[at];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",x);for(let J=0;J<w.length;J++){const at=y[J];at!==null&&(y[J]=null,w[J].disconnect(at))}R=null,N=null,_.reset(),t.setRenderTarget(p),u=null,d=null,f=null,r=null,T=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",x),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new Bn(u.framebufferWidth,u.framebufferHeight,{format:mn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,_t=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Mi:Zi,_t=m.stencil?xi:_i);const Q={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Q),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Bn(d.textureWidth,d.textureHeight,{format:mn,type:zn,depthTexture:new Co(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),kt.setContext(r),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function x(J){for(let at=0;at<J.removed.length;at++){const _t=J.removed[at],ct=y.indexOf(_t);ct>=0&&(y[ct]=null,w[ct].disconnect(_t))}for(let at=0;at<J.added.length;at++){const _t=J.added[at];let ct=y.indexOf(_t);if(ct===-1){for(let wt=0;wt<w.length;wt++)if(wt>=y.length){y.push(_t),ct=wt;break}else if(y[wt]===null){y[wt]=_t,ct=wt;break}if(ct===-1)break}const Q=w[ct];Q&&Q.connect(_t)}}const C=new k,U=new k;function D(J,at,_t){C.setFromMatrixPosition(at.matrixWorld),U.setFromMatrixPosition(_t.matrixWorld);const ct=C.distanceTo(U),Q=at.projectionMatrix.elements,wt=_t.projectionMatrix.elements,Tt=Q[14]/(Q[10]-1),$t=Q[14]/(Q[10]+1),Vt=(Q[9]+1)/Q[5],te=(Q[9]-1)/Q[5],z=(Q[8]-1)/Q[0],ie=(wt[8]+1)/wt[0],Nt=Tt*z,zt=Tt*ie,Pt=ct/(-z+ie),Jt=Pt*-z;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Jt),J.translateZ(Pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Q[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const bt=Tt+Pt,b=$t+Pt,S=Nt-Jt,q=zt+(ct-Jt),$=Vt*$t/b*bt,st=te*$t/b*bt;J.projectionMatrix.makePerspective(S,q,$,st,bt,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Y(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let at=J.near,_t=J.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=L.near=I.near=at,v.far=L.far=I.far=_t,(R!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,N=v.far),I.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,v.layers.mask=I.layers.mask|L.layers.mask;const ct=J.parent,Q=v.cameras;Y(v,ct);for(let wt=0;wt<Q.length;wt++)Y(Q[wt],ct);Q.length===2?D(v,I,L):v.projectionMatrix.copy(I.projectionMatrix),et(J,v,ct)};function et(J,at,_t){_t===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Dr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ht=null;function At(J,at){if(h=at.getViewerPose(c||a),g=at,h!==null){const _t=h.views;u!==null&&(t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T));let ct=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let wt=0;wt<_t.length;wt++){const Tt=_t[wt];let $t=null;if(u!==null)$t=u.getViewport(Tt);else{const te=f.getViewSubImage(d,Tt);$t=te.viewport,wt===0&&(t.setRenderTargetTextures(T,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(T))}let Vt=M[wt];Vt===void 0&&(Vt=new Je,Vt.layers.enable(wt),Vt.viewport=new le,M[wt]=Vt),Vt.matrix.fromArray(Tt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Tt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set($t.x,$t.y,$t.width,$t.height),wt===0&&(v.matrix.copy(Vt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(Vt)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const wt=f.getDepthInformation(_t[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,r.renderState)}}for(let _t=0;_t<w.length;_t++){const ct=y[_t],Q=w[_t];ct!==null&&Q!==void 0&&Q.update(ct,at,c||a)}ht&&ht(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const kt=new kc;kt.setAnimationLoop(At),this.setAnimationLoop=function(J){ht=J},this.dispose=function(){}}}const hi=new Sn,E0=new ce;function T0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),w=T.envMap,y=T.envMapRotation;w&&(m.envMap.value=w,hi.copy(y),hi.x*=-1,hi.y*=-1,hi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(hi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function w0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const y=w.program;n.uniformBlockBinding(T,y)}function c(T,w){let y=r[T.id];y===void 0&&(g(T),y=h(T),r[T.id]=y,T.addEventListener("dispose",m));const O=w.program;n.updateUBOMapping(T,O);const P=t.render.frame;s[T.id]!==P&&(d(T),s[T.id]=P)}function h(T){const w=f();T.__bindingPointIndex=w;const y=i.createBuffer(),O=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=r[T.id],y=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,I=y.length;P<I;P++){const L=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,v=L.length;M<v;M++){const R=L[M];if(u(R,P,M,O)===!0){const N=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let x=0;x<V.length;x++){const C=V[x],U=_(C);typeof C=="number"||typeof C=="boolean"?(R.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,N+G,R.__data)):C.isMatrix3?(R.__data[0]=C.elements[0],R.__data[1]=C.elements[1],R.__data[2]=C.elements[2],R.__data[3]=0,R.__data[4]=C.elements[3],R.__data[5]=C.elements[4],R.__data[6]=C.elements[5],R.__data[7]=0,R.__data[8]=C.elements[6],R.__data[9]=C.elements[7],R.__data[10]=C.elements[8],R.__data[11]=0):(C.toArray(R.__data,G),G+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(T,w,y,O){const P=T.value,I=w+"_"+y;if(O[I]===void 0)return typeof P=="number"||typeof P=="boolean"?O[I]=P:O[I]=P.clone(),!0;{const L=O[I];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return O[I]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(T){const w=T.uniforms;let y=0;const O=16;for(let I=0,L=w.length;I<L;I++){const M=Array.isArray(w[I])?w[I]:[w[I]];for(let v=0,R=M.length;v<R;v++){const N=M[v],V=Array.isArray(N.value)?N.value:[N.value];for(let G=0,x=V.length;G<x;G++){const C=V[G],U=_(C),D=y%O,Y=D%U.boundary,et=D+Y;y+=Y,et!==0&&O-et<U.storage&&(y+=O-et),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=U.storage}}}const P=y%O;return P>0&&(y+=O-P),T.__size=y,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class b0{constructor(t={}){const{canvas:e=pu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=ei,this.toneMappingExposure=1;const y=this;let O=!1,P=0,I=0,L=null,M=-1,v=null;const R=new le,N=new le;let V=null;const G=new Wt(0);let x=0,C=e.width,U=e.height,D=1,Y=null,et=null;const ht=new le(0,0,C,U),At=new le(0,0,C,U);let kt=!1;const J=new bo;let at=!1,_t=!1;const ct=new ce,Q=new ce,wt=new k,Tt=new le,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function te(){return L===null?D:1}let z=n;function ie(E,A){return e.getContext(E,A)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",K,!1),z===null){const A="webgl2";if(z=ie(A,E),z===null)throw ie(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Nt,zt,Pt,Jt,bt,b,S,q,$,st,tt,mt,ut,pt,Bt,lt,xt,Rt,Ot,B,rt,ft,Et,F;function ot(){Nt=new Dp(z),Nt.init(),ft=new g0(z,Nt),zt=new wp(z,Nt,t,ft),Pt=new d0(z,Nt),zt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),Jt=new Up(z),bt=new Jm,b=new m0(z,Nt,Pt,bt,zt,ft,Jt),S=new Ap(y),q=new Pp(y),$=new ku(z),Et=new Ep(z,$),st=new Ip(z,$,Jt,Et),tt=new Fp(z,st,$,Jt),Ot=new Np(z,zt,b),lt=new bp(bt),mt=new $m(y,S,q,Nt,zt,Et,lt),ut=new T0(y,bt),pt=new t0,Bt=new a0(Nt),Rt=new yp(y,S,q,Pt,tt,u,l),xt=new u0(y,tt,zt),F=new w0(z,Jt,zt,Pt),B=new Tp(z,Nt,Jt),rt=new Lp(z,Nt,Jt),Jt.programs=mt.programs,y.capabilities=zt,y.extensions=Nt,y.properties=bt,y.renderLists=pt,y.shadowMap=xt,y.state=Pt,y.info=Jt}ot();const j=new y0(y,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(C,U,!1))},this.getSize=function(E){return E.set(C,U)},this.setSize=function(E,A,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,U=A,e.width=Math.floor(E*D),e.height=Math.floor(A*D),W===!0&&(e.style.width=E+"px",e.style.height=A+"px"),this.setViewport(0,0,E,A)},this.getDrawingBufferSize=function(E){return E.set(C*D,U*D).floor()},this.setDrawingBufferSize=function(E,A,W){C=E,U=A,D=W,e.width=Math.floor(E*W),e.height=Math.floor(A*W),this.setViewport(0,0,E,A)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,A,W,Z){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,A,W,Z),Pt.viewport(R.copy(ht).multiplyScalar(D).round())},this.getScissor=function(E){return E.copy(At)},this.setScissor=function(E,A,W,Z){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,A,W,Z),Pt.scissor(N.copy(At).multiplyScalar(D).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(E){Pt.setScissorTest(kt=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(E=!0,A=!0,W=!0){let Z=0;if(E){let H=!1;if(L!==null){const dt=L.texture.format;H=dt===yo||dt===So||dt===Mo}if(H){const dt=L.texture.type,yt=dt===zn||dt===_i||dt===Pr||dt===xi||dt===_o||dt===vo,Dt=Rt.getClearColor(),It=Rt.getClearAlpha(),Ht=Dt.r,qt=Dt.g,Lt=Dt.b;yt?(g[0]=Ht,g[1]=qt,g[2]=Lt,g[3]=It,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Ht,_[1]=qt,_[2]=Lt,_[3]=It,z.clearBufferiv(z.COLOR,0,_))}else Z|=z.COLOR_BUFFER_BIT}A&&(Z|=z.DEPTH_BUFFER_BIT),W&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",K,!1),pt.dispose(),Bt.dispose(),bt.dispose(),S.dispose(),q.dispose(),tt.dispose(),Et.dispose(),F.dispose(),mt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Vn),j.removeEventListener("sessionend",ii),Ge.stop()};function nt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=Jt.autoReset,A=xt.enabled,W=xt.autoUpdate,Z=xt.needsUpdate,H=xt.type;ot(),Jt.autoReset=E,xt.enabled=A,xt.autoUpdate=W,xt.needsUpdate=Z,xt.type=H}function K(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const A=E.target;A.removeEventListener("dispose",it),Mt(A)}function Mt(E){Ct(E),bt.remove(E)}function Ct(E){const A=bt.get(E).programs;A!==void 0&&(A.forEach(function(W){mt.releaseProgram(W)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,A,W,Z,H,dt){A===null&&(A=$t);const yt=H.isMesh&&H.matrixWorld.determinant()<0,Dt=_n(E,A,W,Z,H);Pt.setMaterial(Z,yt);let It=W.index,Ht=1;if(Z.wireframe===!0){if(It=st.getWireframeAttribute(W),It===void 0)return;Ht=2}const qt=W.drawRange,Lt=W.attributes.position;let ee=qt.start*Ht,ue=(qt.start+qt.count)*Ht;dt!==null&&(ee=Math.max(ee,dt.start*Ht),ue=Math.min(ue,(dt.start+dt.count)*Ht)),It!==null?(ee=Math.max(ee,0),ue=Math.min(ue,It.count)):Lt!=null&&(ee=Math.max(ee,0),ue=Math.min(ue,Lt.count));const de=ue-ee;if(de<0||de===1/0)return;Et.setup(H,Z,Dt,W,It);let Xe,re=B;if(It!==null&&(Xe=$.get(It),re=rt,re.setIndex(Xe)),H.isMesh)Z.wireframe===!0?(Pt.setLineWidth(Z.wireframeLinewidth*te()),re.setMode(z.LINES)):re.setMode(z.TRIANGLES);else if(H.isLine){let Ut=Z.linewidth;Ut===void 0&&(Ut=1),Pt.setLineWidth(Ut*te()),H.isLineSegments?re.setMode(z.LINES):H.isLineLoop?re.setMode(z.LINE_LOOP):re.setMode(z.LINE_STRIP)}else H.isPoints?re.setMode(z.POINTS):H.isSprite&&re.setMode(z.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)re.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))re.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,En=H._multiDrawCounts,se=H._multiDrawCount,hn=It?$.get(It).bytesPerElement:1,yi=bt.get(Z).currentProgram.getUniforms();for(let je=0;je<se;je++)yi.setValue(z,"_gl_DrawID",je),re.render(Ut[je]/hn,En[je])}else if(H.isInstancedMesh)re.renderInstances(ee,de,H.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,En=Math.min(W.instanceCount,Ut);re.renderInstances(ee,de,En)}else re.render(ee,de)};function Xt(E,A,W){E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,We(E,A,W),E.side=ni,E.needsUpdate=!0,We(E,A,W),E.side=tn):We(E,A,W)}this.compile=function(E,A,W=null){W===null&&(W=E),p=Bt.get(W),p.init(A),w.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(A.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(A.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const dt=H.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const Dt=dt[yt];Xt(Dt,W,H),Z.add(Dt)}else Xt(dt,W,H),Z.add(dt)}),w.pop(),p=null,Z},this.compileAsync=function(E,A,W=null){const Z=this.compile(E,A,W);return new Promise(H=>{function dt(){if(Z.forEach(function(yt){bt.get(yt).currentProgram.isReady()&&Z.delete(yt)}),Z.size===0){H(E);return}setTimeout(dt,10)}Nt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let _e=null;function Se(E){_e&&_e(E)}function Vn(){Ge.stop()}function ii(){Ge.start()}const Ge=new kc;Ge.setAnimationLoop(Se),typeof self!="undefined"&&Ge.setContext(self),this.setAnimationLoop=function(E){_e=E,j.setAnimationLoop(E),E===null?Ge.stop():Ge.start()},j.addEventListener("sessionstart",Vn),j.addEventListener("sessionend",ii),this.render=function(E,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(A),A=j.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,A,L),p=Bt.get(E,w.length),p.init(A),w.push(p),Q.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),J.setFromProjectionMatrix(Q),_t=this.localClippingEnabled,at=lt.init(this.clippingPlanes,_t),m=pt.get(E,T.length),m.init(),T.push(m),j.enabled===!0&&j.isPresenting===!0){const dt=y.xr.getDepthSensingMesh();dt!==null&&yn(dt,A,-1/0,y.sortObjects)}yn(E,A,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Y,et),Vt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Vt&&Rt.addToRenderList(m,E),this.info.render.frame++,at===!0&&lt.beginShadows();const W=p.state.shadowsArray;xt.render(W,E,A),at===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(p.setupLights(),A.isArrayCamera){const dt=A.cameras;if(H.length>0)for(let yt=0,Dt=dt.length;yt<Dt;yt++){const It=dt[yt];ge(Z,H,E,It)}Vt&&Rt.render(E);for(let yt=0,Dt=dt.length;yt<Dt;yt++){const It=dt[yt];cn(m,E,It,It.viewport)}}else H.length>0&&ge(Z,H,E,A),Vt&&Rt.render(E),cn(m,E,A);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,A),Et.resetDefaultState(),M=-1,v=null,w.pop(),w.length>0?(p=w[w.length-1],at===!0&&lt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function yn(E,A,W,Z){if(E.visible===!1)return;if(E.layers.test(A.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(A);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){Z&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const yt=tt.update(E),Dt=E.material;Dt.visible&&m.push(E,yt,Dt,W,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){const yt=tt.update(E),Dt=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Tt.copy(yt.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(Dt)){const It=yt.groups;for(let Ht=0,qt=It.length;Ht<qt;Ht++){const Lt=It[Ht],ee=Dt[Lt.materialIndex];ee&&ee.visible&&m.push(E,yt,ee,W,Tt.z,Lt)}}else Dt.visible&&m.push(E,yt,Dt,W,Tt.z,null)}}const dt=E.children;for(let yt=0,Dt=dt.length;yt<Dt;yt++)yn(dt[yt],A,W,Z)}function cn(E,A,W,Z){const H=E.opaque,dt=E.transmissive,yt=E.transparent;p.setupLightsView(W),at===!0&&lt.setGlobalState(y.clippingPlanes,W),Z&&Pt.viewport(R.copy(Z)),H.length>0&&Ce(H,A,W),dt.length>0&&Ce(dt,A,W),yt.length>0&&Ce(yt,A,W),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ge(E,A,W,Z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Bn(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?vi:zn,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const dt=p.state.transmissionRenderTarget[Z.id],yt=Z.viewport||R;dt.setSize(yt.z,yt.w);const Dt=y.getRenderTarget();y.setRenderTarget(dt),y.getClearColor(G),x=y.getClearAlpha(),x<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&Rt.render(W);const It=y.toneMapping;y.toneMapping=ei;const Ht=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),at===!0&&lt.setGlobalState(y.clippingPlanes,Z),Ce(E,W,Z),b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Lt=0,ee=A.length;Lt<ee;Lt++){const ue=A[Lt],de=ue.object,Xe=ue.geometry,re=ue.material,Ut=ue.group;if(re.side===tn&&de.layers.test(Z.layers)){const En=re.side;re.side=He,re.needsUpdate=!0,Gn(de,W,Z,Xe,re,Ut),re.side=En,re.needsUpdate=!0,qt=!0}}qt===!0&&(b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt))}y.setRenderTarget(Dt),y.setClearColor(G,x),Ht!==void 0&&(Z.viewport=Ht),y.toneMapping=It}function Ce(E,A,W){const Z=A.isScene===!0?A.overrideMaterial:null;for(let H=0,dt=E.length;H<dt;H++){const yt=E[H],Dt=yt.object,It=yt.geometry,Ht=Z===null?yt.material:Z,qt=yt.group;Dt.layers.test(W.layers)&&Gn(Dt,A,W,It,Ht,qt)}}function Gn(E,A,W,Z,H,dt){E.onBeforeRender(y,A,W,Z,H,dt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(y,A,W,Z,E,dt),H.transparent===!0&&H.side===tn&&H.forceSinglePass===!1?(H.side=He,H.needsUpdate=!0,y.renderBufferDirect(W,A,Z,H,E,dt),H.side=ni,H.needsUpdate=!0,y.renderBufferDirect(W,A,Z,H,E,dt),H.side=tn):y.renderBufferDirect(W,A,Z,H,E,dt),E.onAfterRender(y,A,W,Z,H,dt)}function We(E,A,W){A.isScene!==!0&&(A=$t);const Z=bt.get(E),H=p.state.lights,dt=p.state.shadowsArray,yt=H.state.version,Dt=mt.getParameters(E,H.state,dt,A,W),It=mt.getProgramCacheKey(Dt);let Ht=Z.programs;Z.environment=E.isMeshStandardMaterial?A.environment:null,Z.fog=A.fog,Z.envMap=(E.isMeshStandardMaterial?q:S).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?A.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",it),Ht=new Map,Z.programs=Ht);let qt=Ht.get(It);if(qt!==void 0){if(Z.currentProgram===qt&&Z.lightsStateVersion===yt)return Ze(E,Dt),qt}else Dt.uniforms=mt.getUniforms(E),E.onBeforeCompile(Dt,y),qt=mt.acquireProgram(Dt,It),Ht.set(It,qt),Z.uniforms=Dt.uniforms;const Lt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Ze(E,Dt),Z.needsLights=Si(E),Z.lightsStateVersion=yt,Z.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=qt,Z.uniformsList=null,qt}function ze(E){if(E.uniformsList===null){const A=E.currentProgram.getUniforms();E.uniformsList=ws.seqWithValue(A.seq,E.uniforms)}return E.uniformsList}function Ze(E,A){const W=bt.get(E);W.outputColorSpace=A.outputColorSpace,W.batching=A.batching,W.batchingColor=A.batchingColor,W.instancing=A.instancing,W.instancingColor=A.instancingColor,W.instancingMorph=A.instancingMorph,W.skinning=A.skinning,W.morphTargets=A.morphTargets,W.morphNormals=A.morphNormals,W.morphColors=A.morphColors,W.morphTargetsCount=A.morphTargetsCount,W.numClippingPlanes=A.numClippingPlanes,W.numIntersection=A.numClipIntersection,W.vertexAlphas=A.vertexAlphas,W.vertexTangents=A.vertexTangents,W.toneMapping=A.toneMapping}function _n(E,A,W,Z,H){A.isScene!==!0&&(A=$t),b.resetTextureUnits();const dt=A.fog,yt=Z.isMeshStandardMaterial?A.environment:null,Dt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:nr,It=(Z.isMeshStandardMaterial?q:S).get(Z.envMap||yt),Ht=Z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Lt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,ue=!!W.morphAttributes.color;let de=ei;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(de=y.toneMapping);const Xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=Xe!==void 0?Xe.length:0,Ut=bt.get(Z),En=p.state.lights;if(at===!0&&(_t===!0||E!==v)){const nn=E===v&&Z.id===M;lt.setState(Z,E,nn)}let se=!1;Z.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==En.state.version||Ut.outputColorSpace!==Dt||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==It||Z.fog===!0&&Ut.fog!==dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==qt||Ut.morphTargets!==Lt||Ut.morphNormals!==ee||Ut.morphColors!==ue||Ut.toneMapping!==de||Ut.morphTargetsCount!==re)&&(se=!0):(se=!0,Ut.__version=Z.version);let hn=Ut.currentProgram;se===!0&&(hn=We(Z,A,H));let yi=!1,je=!1,ar=!1;const pe=hn.getUniforms(),vn=Ut.uniforms;if(Pt.useProgram(hn.program)&&(yi=!0,je=!0,ar=!0),Z.id!==M&&(M=Z.id,je=!0),yi||v!==E){Pt.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),gu(ct),_u(ct),pe.setValue(z,"projectionMatrix",ct)):pe.setValue(z,"projectionMatrix",E.projectionMatrix),pe.setValue(z,"viewMatrix",E.matrixWorldInverse);const Wn=pe.map.cameraPosition;Wn!==void 0&&Wn.setValue(z,wt.setFromMatrixPosition(E.matrixWorld)),zt.logarithmicDepthBuffer&&pe.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&pe.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,je=!0,ar=!0)}if(H.isSkinnedMesh){pe.setOptional(z,H,"bindMatrix"),pe.setOptional(z,H,"bindMatrixInverse");const nn=H.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),pe.setValue(z,"boneTexture",nn.boneTexture,b))}H.isBatchedMesh&&(pe.setOptional(z,H,"batchingTexture"),pe.setValue(z,"batchingTexture",H._matricesTexture,b),pe.setOptional(z,H,"batchingIdTexture"),pe.setValue(z,"batchingIdTexture",H._indirectTexture,b),pe.setOptional(z,H,"batchingColorTexture"),H._colorsTexture!==null&&pe.setValue(z,"batchingColorTexture",H._colorsTexture,b));const or=W.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ot.update(H,W,hn),(je||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,pe.setValue(z,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(vn.envMap.value=It,vn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&A.environment!==null&&(vn.envMapIntensity.value=A.environmentIntensity),je&&(pe.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&ri(vn,ar),dt&&Z.fog===!0&&ut.refreshFogUniforms(vn,dt),ut.refreshMaterialUniforms(vn,Z,D,U,p.state.transmissionRenderTarget[E.id]),ws.upload(z,ze(Ut),vn,b)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ws.upload(z,ze(Ut),vn,b),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&pe.setValue(z,"center",H.center),pe.setValue(z,"modelViewMatrix",H.modelViewMatrix),pe.setValue(z,"normalMatrix",H.normalMatrix),pe.setValue(z,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const nn=Z.uniformsGroups;for(let Wn=0,Xn=nn.length;Wn<Xn;Wn++){const Fo=nn[Wn];F.update(Fo,hn),F.bind(Fo,hn)}}return hn}function ri(E,A){E.ambientLightColor.needsUpdate=A,E.lightProbe.needsUpdate=A,E.directionalLights.needsUpdate=A,E.directionalLightShadows.needsUpdate=A,E.pointLights.needsUpdate=A,E.pointLightShadows.needsUpdate=A,E.spotLights.needsUpdate=A,E.spotLightShadows.needsUpdate=A,E.rectAreaLights.needsUpdate=A,E.hemisphereLights.needsUpdate=A}function Si(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,A,W){bt.get(E.texture).__webglTexture=A,bt.get(E.depthTexture).__webglTexture=W;const Z=bt.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=W===void 0,Z.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,A){const W=bt.get(E);W.__webglFramebuffer=A,W.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(E,A=0,W=0){L=E,P=A,I=W;let Z=!0,H=null,dt=!1,yt=!1;if(E){const It=bt.get(E);if(It.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(z.FRAMEBUFFER,null),Z=!1;else if(It.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(It.__hasExternalTextures)b.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Lt=E.depthTexture;if(It.__boundDepthTexture!==Lt){if(Lt!==null&&bt.has(Lt)&&(E.width!==Lt.image.width||E.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(yt=!0);const qt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[A])?H=qt[A][W]:H=qt[A],dt=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?H=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?H=qt[W]:H=qt,R.copy(E.viewport),N.copy(E.scissor),V=E.scissorTest}else R.copy(ht).multiplyScalar(D).floor(),N.copy(At).multiplyScalar(D).floor(),V=kt;if(Pt.bindFramebuffer(z.FRAMEBUFFER,H)&&Z&&Pt.drawBuffers(E,H),Pt.viewport(R),Pt.scissor(N),Pt.setScissorTest(V),dt){const It=bt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+A,It.__webglTexture,W)}else if(yt){const It=bt.get(E.texture),Ht=A||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.__webglTexture,W||0,Ht)}M=-1},this.readRenderTargetPixels=function(E,A,W,Z,H,dt,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Dt=Dt[yt]),Dt){Pt.bindFramebuffer(z.FRAMEBUFFER,Dt);try{const It=E.texture,Ht=It.format,qt=It.type;if(!zt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=E.width-Z&&W>=0&&W<=E.height-H&&z.readPixels(A,W,Z,H,ft.convert(Ht),ft.convert(qt),dt)}finally{const It=L!==null?bt.get(L).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,A,W,Z,H,dt,yt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Dt=Dt[yt]),Dt){const It=E.texture,Ht=It.format,qt=It.type;if(!zt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=E.width-Z&&W>=0&&W<=E.height-H){Pt.bindFramebuffer(z.FRAMEBUFFER,Dt);const Lt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Lt),z.bufferData(z.PIXEL_PACK_BUFFER,dt.byteLength,z.STREAM_READ),z.readPixels(A,W,Z,H,ft.convert(Ht),ft.convert(qt),0);const ee=L!==null?bt.get(L).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,ee);const ue=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await mu(z,ue,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Lt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,dt),z.deleteBuffer(Lt),z.deleteSync(ue),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,A=null,W=0){E.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,E=arguments[1]);const Z=Math.pow(2,-W),H=Math.floor(E.image.width*Z),dt=Math.floor(E.image.height*Z),yt=A!==null?A.x:0,Dt=A!==null?A.y:0;b.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,yt,Dt,H,dt),Pt.unbindTexture()},this.copyTextureToTexture=function(E,A,W=null,Z=null,H=0){E.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],A=arguments[2],H=arguments[3]||0,W=null);let dt,yt,Dt,It,Ht,qt,Lt,ee,ue;const de=E.isCompressedTexture?E.mipmaps[H]:E.image;W!==null?(dt=W.max.x-W.min.x,yt=W.max.y-W.min.y,Dt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Ht=W.min.y,qt=W.isBox3?W.min.z:0):(dt=de.width,yt=de.height,Dt=de.depth||1,It=0,Ht=0,qt=0),Z!==null?(Lt=Z.x,ee=Z.y,ue=Z.z):(Lt=0,ee=0,ue=0);const Xe=ft.convert(A.format),re=ft.convert(A.type);let Ut;A.isData3DTexture?(b.setTexture3D(A,0),Ut=z.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(b.setTexture2DArray(A,0),Ut=z.TEXTURE_2D_ARRAY):(b.setTexture2D(A,0),Ut=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,A.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,A.unpackAlignment);const En=z.getParameter(z.UNPACK_ROW_LENGTH),se=z.getParameter(z.UNPACK_IMAGE_HEIGHT),hn=z.getParameter(z.UNPACK_SKIP_PIXELS),yi=z.getParameter(z.UNPACK_SKIP_ROWS),je=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,de.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,de.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,It),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qt);const ar=E.isDataArrayTexture||E.isData3DTexture,pe=A.isDataArrayTexture||A.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const vn=bt.get(E),or=bt.get(A),nn=bt.get(vn.__renderTarget),Wn=bt.get(or.__renderTarget);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<Dt;Xn++)ar&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bt.get(E).__webglTexture,H,qt+Xn),E.isDepthTexture?(pe&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bt.get(A).__webglTexture,H,ue+Xn),z.blitFramebuffer(It,Ht,dt,yt,Lt,ee,dt,yt,z.DEPTH_BUFFER_BIT,z.NEAREST)):pe?z.copyTexSubImage3D(Ut,H,Lt,ee,ue+Xn,It,Ht,dt,yt):z.copyTexSubImage2D(Ut,H,Lt,ee,ue+Xn,It,Ht,dt,yt);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else pe?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ut,H,Lt,ee,ue,dt,yt,Dt,Xe,re,de.data):A.isCompressedArrayTexture?z.compressedTexSubImage3D(Ut,H,Lt,ee,ue,dt,yt,Dt,Xe,de.data):z.texSubImage3D(Ut,H,Lt,ee,ue,dt,yt,Dt,Xe,re,de):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,Lt,ee,dt,yt,Xe,re,de.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,Lt,ee,de.width,de.height,Xe,de.data):z.texSubImage2D(z.TEXTURE_2D,H,Lt,ee,dt,yt,Xe,re,de);z.pixelStorei(z.UNPACK_ROW_LENGTH,En),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,se),z.pixelStorei(z.UNPACK_SKIP_PIXELS,hn),z.pixelStorei(z.UNPACK_SKIP_ROWS,yi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,je),H===0&&A.generateMipmaps&&z.generateMipmap(Ut),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,A,W=null,Z=null,H=0){return E.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],A=arguments[3],H=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,A,W,Z,H)},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){P=0,I=0,L=null,Pt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Po{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new Po(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xc extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class A0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new k;class Cs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qc extends Hn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Oi;const fr=new k,zi=new k,Bi=new k,ki=new vt,dr=new vt,Yc=new ce,rs=new k,pr=new k,ss=new k,Ul=new vt,fa=new vt,Nl=new vt;class R0 extends xe{constructor(t=new qc){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new A0(e,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Cs(n,3,0,!1)),Oi.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=Oi,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Yc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Bi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;as(rs.set(-.5,-.5,0),Bi,a,zi,r,s),as(pr.set(.5,-.5,0),Bi,a,zi,r,s),as(ss.set(.5,.5,0),Bi,a,zi,r,s),Ul.set(0,0),fa.set(1,0),Nl.set(1,1);let o=t.ray.intersectTriangle(rs,pr,ss,!1,fr);if(o===null&&(as(pr.set(-.5,.5,0),Bi,a,zi,r,s),fa.set(0,1),o=t.ray.intersectTriangle(rs,ss,pr,!1,fr),o===null))return;const l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:an.getInterpolation(fr,rs,pr,ss,Ul,fa,Nl,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function as(i,t,e,n,r,s){ki.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(dr.x=s*ki.x-r*ki.y,dr.y=r*ki.x+s*ki.y):dr.copy(ki),i.copy(t),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(Yc)}class C0 extends Oe{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Ve,h=Ve,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zc extends Hn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ps=new k,Ds=new k,Fl=new ce,mr=new wo,os=new Fr,da=new k,Ol=new k;class P0 extends xe{constructor(t=new Me,e=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ps.fromBufferAttribute(e,r-1),Ds.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ps.distanceTo(Ds);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),os.radius+=s,t.ray.intersectsSphere(os)===!1)return;Fl.copy(r).invert(),mr.copy(t.ray).applyMatrix4(Fl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=c){const p=h.getX(_),T=h.getX(_+1),w=ls(this,t,mr,l,p,T);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(u),p=ls(this,t,mr,l,_,m);p&&e.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=c){const p=ls(this,t,mr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ls(this,t,mr,l,g-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ls(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Ps.fromBufferAttribute(a,r),Ds.fromBufferAttribute(a,s),e.distanceSqToSegment(Ps,Ds,da,Ol)>n)return;da.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(da);if(!(l<t.near||l>t.far))return{distance:l,point:Ol.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const zl=new k,Bl=new k;class D0 extends P0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)zl.fromBufferAttribute(e,r),Bl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zl.distanceTo(Bl);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jc extends Hn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kl=new ce,uo=new wo,cs=new Fr,hs=new k;class I0 extends xe{constructor(t=new Me,e=new jc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,t.ray.intersectsSphere(cs)===!1)return;kl.copy(r).invert(),uo.copy(t.ray).applyMatrix4(kl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=d,_=u;g<_;g++){const m=c.getX(g);hs.fromBufferAttribute(f,m),Hl(hs,m,l,r,t,e,this)}}else{const d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,_=u;g<_;g++)hs.fromBufferAttribute(f,g),Hl(hs,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hl(i,t,e,n,r,s,a){const o=uo.distanceSqToPoint(i);if(o<e){const l=new k;uo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sr extends Oe{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn extends Me{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Ie(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,f=new k,d=new vt,u=new k,g=new k,_=new k;let m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,u.x=p*1,u.y=-m,u.z=p*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(g)}for(let T=0;T<=e;T++){const w=n+T*h*r,y=Math.sin(w),O=Math.cos(w);for(let P=0;P<=t.length-1;P++){f.x=t[P].x*y,f.y=t[P].y,f.z=t[P].x*O,a.push(f.x,f.y,f.z),d.x=T/e,d.y=P/(t.length-1),o.push(d.x,d.y);const I=l[3*P+0]*y,L=l[3*P+1],M=l[3*P+0]*O;c.push(I,L,M)}}for(let T=0;T<e;T++)for(let w=0;w<t.length-1;w++){const y=w+T*t.length,O=y,P=y+t.length,I=y+t.length+1,L=y+1;s.push(O,P,L),s.push(I,L,P)}this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.points,t.segments,t.phiStart,t.phiLength)}}class Ki extends Me{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new k,h=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const u=n+f/e*r;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fe extends Me{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],u=[];let g=0;const _=[],m=n/2;let p=0;T(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(u,2));function T(){const y=new k,O=new k;let P=0;const I=(e-t)/n;for(let L=0;L<=s;L++){const M=[],v=L/s,R=v*(e-t)+t;for(let N=0;N<=r;N++){const V=N/r,G=V*l+o,x=Math.sin(G),C=Math.cos(G);O.x=R*x,O.y=-v*n+m,O.z=R*C,f.push(O.x,O.y,O.z),y.set(x,I,C).normalize(),d.push(y.x,y.y,y.z),u.push(V,1-v),M.push(g++)}_.push(M)}for(let L=0;L<r;L++)for(let M=0;M<s;M++){const v=_[M][L],R=_[M+1][L],N=_[M+1][L+1],V=_[M][L+1];(t>0||M!==0)&&(h.push(v,R,V),P+=3),(e>0||M!==s-1)&&(h.push(R,N,V),P+=3)}c.addGroup(p,P,0),p+=P}function w(y){const O=g,P=new vt,I=new k;let L=0;const M=y===!0?t:e,v=y===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,m*v,0),d.push(0,v,0),u.push(.5,.5),g++;const R=g;for(let N=0;N<=r;N++){const G=N/r*l+o,x=Math.cos(G),C=Math.sin(G);I.x=M*C,I.y=m*v,I.z=M*x,f.push(I.x,I.y,I.z),d.push(0,v,0),P.x=x*.5+.5,P.y=C*.5*v+.5,u.push(P.x,P.y),g++}for(let N=0;N<r;N++){const V=O+N,G=R+N;y===!0?h.push(G,G+1,V):h.push(G+1,G,V),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new k,d=new k,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],w=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let O=0;O<=e;O++){const P=O/e;f.x=-t*Math.cos(r+P*s)*Math.sin(a+w*o),f.y=t*Math.cos(a+w*o),f.z=t*Math.sin(r+P*s)*Math.sin(a+w*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(P+y,1-w),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const w=h[p][T+1],y=h[p][T],O=h[p+1][T],P=h[p+1][T+1];(p!==0||a>0)&&u.push(w,y,P),(p!==n-1||l<Math.PI)&&u.push(y,O,P)}this.setIndex(u),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sn extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new k,f=new k,d=new k;for(let u=0;u<=n;u++)for(let g=0;g<=r;g++){const _=g/r*s,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=r;g++){const _=(r+1)*u+g-1,m=(r+1)*(u-1)+g-1,p=(r+1)*(u-1)+g,T=(r+1)*u+g;a.push(_,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ye extends Hn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pa extends Ye{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class L0 extends Hn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Do extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class U0 extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ma=new ce,Vl=new k,Gl=new k;class Kc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wl=new ce,gr=new k,ga=new k;class N0 extends Kc{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),r.makeTranslation(-gr.x,-gr.y,-gr.z),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl)}}class Ir extends Do{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new N0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class F0 extends Kc{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xl extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new F0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);class O0 extends Xc{constructor(){super();const t=new Ft;t.deleteAttribute("uv");const e=new Ye({side:He}),n=new Ye,r=new Ir(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new gt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new gt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new gt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new gt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new gt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new gt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const f=new gt(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const d=new gt(t,Hi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const u=new gt(t,Hi(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const g=new gt(t,Hi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new gt(t,Hi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new gt(t,Hi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new gt(t,Hi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Hi(i){const t=new ye;return t.color.setScalar(i),t}class z0{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B0=new Ao(-1,1,1,-1,0,1);class k0 extends Me{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}}const H0=new k0;class V0{constructor(t){this._mesh=new gt(H0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,B0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class G0{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,r){return t[0]*e+t[1]*n+t[2]*r}dot4(t,e,n,r,s){return t[0]*e+t[1]*n+t[2]*r+t[3]*s}noise(t,e){let n,r,s;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,f=(l+c)*h,d=l-f,u=c-f,g=t-d,_=e-u;let m,p;g>_?(m=1,p=0):(m=0,p=1);const T=g-m+h,w=_-p+h,y=g-1+2*h,O=_-1+2*h,P=l&255,I=c&255,L=this.perm[P+this.perm[I]]%12,M=this.perm[P+m+this.perm[I+p]]%12,v=this.perm[P+1+this.perm[I+1]]%12;let R=.5-g*g-_*_;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[L],g,_));let N=.5-T*T-w*w;N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[M],T,w));let V=.5-y*y-O*O;return V<0?s=0:(V*=V,s=V*V*this.dot(this.grad3[v],y,O)),70*(n+r+s)}noise3d(t,e,n){let r,s,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),f=Math.floor(e+c),d=Math.floor(n+c),u=1/6,g=(h+f+d)*u,_=h-g,m=f-g,p=d-g,T=t-_,w=e-m,y=n-p;let O,P,I,L,M,v;T>=w?w>=y?(O=1,P=0,I=0,L=1,M=1,v=0):T>=y?(O=1,P=0,I=0,L=1,M=0,v=1):(O=0,P=0,I=1,L=1,M=0,v=1):w<y?(O=0,P=0,I=1,L=0,M=1,v=1):T<y?(O=0,P=1,I=0,L=0,M=1,v=1):(O=0,P=1,I=0,L=1,M=1,v=0);const R=T-O+u,N=w-P+u,V=y-I+u,G=T-L+2*u,x=w-M+2*u,C=y-v+2*u,U=T-1+3*u,D=w-1+3*u,Y=y-1+3*u,et=h&255,ht=f&255,At=d&255,kt=this.perm[et+this.perm[ht+this.perm[At]]]%12,J=this.perm[et+O+this.perm[ht+P+this.perm[At+I]]]%12,at=this.perm[et+L+this.perm[ht+M+this.perm[At+v]]]%12,_t=this.perm[et+1+this.perm[ht+1+this.perm[At+1]]]%12;let ct=.6-T*T-w*w-y*y;ct<0?r=0:(ct*=ct,r=ct*ct*this.dot3(this.grad3[kt],T,w,y));let Q=.6-R*R-N*N-V*V;Q<0?s=0:(Q*=Q,s=Q*Q*this.dot3(this.grad3[J],R,N,V));let wt=.6-G*G-x*x-C*C;wt<0?a=0:(wt*=wt,a=wt*wt*this.dot3(this.grad3[at],G,x,C));let Tt=.6-U*U-D*D-Y*Y;return Tt<0?o=0:(Tt*=Tt,o=Tt*Tt*this.dot3(this.grad3[_t],U,D,Y)),32*(r+s+a+o)}noise4d(t,e,n,r){const s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,f,d,u,g;const _=(t+e+n+r)*l,m=Math.floor(t+_),p=Math.floor(e+_),T=Math.floor(n+_),w=Math.floor(r+_),y=(m+p+T+w)*c,O=m-y,P=p-y,I=T-y,L=w-y,M=t-O,v=e-P,R=n-I,N=r-L,V=M>v?32:0,G=M>R?16:0,x=v>R?8:0,C=M>N?4:0,U=v>N?2:0,D=R>N?1:0,Y=V+G+x+C+U+D,et=a[Y][0]>=3?1:0,ht=a[Y][1]>=3?1:0,At=a[Y][2]>=3?1:0,kt=a[Y][3]>=3?1:0,J=a[Y][0]>=2?1:0,at=a[Y][1]>=2?1:0,_t=a[Y][2]>=2?1:0,ct=a[Y][3]>=2?1:0,Q=a[Y][0]>=1?1:0,wt=a[Y][1]>=1?1:0,Tt=a[Y][2]>=1?1:0,$t=a[Y][3]>=1?1:0,Vt=M-et+c,te=v-ht+c,z=R-At+c,ie=N-kt+c,Nt=M-J+2*c,zt=v-at+2*c,Pt=R-_t+2*c,Jt=N-ct+2*c,bt=M-Q+3*c,b=v-wt+3*c,S=R-Tt+3*c,q=N-$t+3*c,$=M-1+4*c,st=v-1+4*c,tt=R-1+4*c,mt=N-1+4*c,ut=m&255,pt=p&255,Bt=T&255,lt=w&255,xt=o[ut+o[pt+o[Bt+o[lt]]]]%32,Rt=o[ut+et+o[pt+ht+o[Bt+At+o[lt+kt]]]]%32,Ot=o[ut+J+o[pt+at+o[Bt+_t+o[lt+ct]]]]%32,B=o[ut+Q+o[pt+wt+o[Bt+Tt+o[lt+$t]]]]%32,rt=o[ut+1+o[pt+1+o[Bt+1+o[lt+1]]]]%32;let ft=.6-M*M-v*v-R*R-N*N;ft<0?h=0:(ft*=ft,h=ft*ft*this.dot4(s[xt],M,v,R,N));let Et=.6-Vt*Vt-te*te-z*z-ie*ie;Et<0?f=0:(Et*=Et,f=Et*Et*this.dot4(s[Rt],Vt,te,z,ie));let F=.6-Nt*Nt-zt*zt-Pt*Pt-Jt*Jt;F<0?d=0:(F*=F,d=F*F*this.dot4(s[Ot],Nt,zt,Pt,Jt));let ot=.6-bt*bt-b*b-S*S-q*q;ot<0?u=0:(ot*=ot,u=ot*ot*this.dot4(s[B],bt,b,S,q));let j=.6-$*$-st*st-tt*tt-mt*mt;return j<0?g=0:(j*=j,g=j*j*this.dot4(s[rt],$,st,tt,mt)),27*(h+f+d+u+g)}}const us={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new vt},cameraProjectionMatrix:{value:new ce},cameraInverseProjectionMatrix:{value:new ce},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},fs={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},ds={uniforms:{tDiffuse:{value:null},resolution:{value:new vt}},vertexShader:`varying vec2 vUv;

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

		}`},_a={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ti extends z0{constructor(t,e,n,r,s=32){super(),this.width=n!==void 0?n:512,this.height=r!==void 0?r:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const a=new Co;a.format=Mi,a.type=xi,this.normalRenderTarget=new Bn(this.width,this.height,{minFilter:Ve,magFilter:Ve,type:vi,depthTexture:a}),this.ssaoRenderTarget=new Bn(this.width,this.height,{type:vi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ln({defines:Object.assign({},us.defines),uniforms:Sr.clone(us.uniforms),vertexShader:us.vertexShader,fragmentShader:us.fragmentShader,blending:qe}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new L0,this.normalMaterial.blending=qe,this.blurMaterial=new ln({defines:Object.assign({},ds.defines),uniforms:Sr.clone(ds.uniforms),vertexShader:ds.vertexShader,fragmentShader:ds.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ln({defines:Object.assign({},fs.defines),uniforms:Sr.clone(fs.uniforms),vertexShader:fs.vertexShader,fragmentShader:fs.fragmentShader,blending:qe}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ln({uniforms:Sr.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:gc,blendDst:Ea,blendEquation:Dn,blendSrcAlpha:mc,blendDstAlpha:Ea,blendEquationAlpha:Dn}),this.fsQuad=new V0(null),this.originalClearColor=new Wt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case ti.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=qe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ti.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=qe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ti.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ti.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ti.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=pc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,r,s){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,r,s){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r=e.clearColor||r,s=e.clearAlpha||s,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const r=new k;r.x=Math.random()*2-1,r.y=Math.random()*2-1,r.z=Math.random(),r.normalize();let s=n/t;s=du.lerp(.1,1,s*s),r.multiplyScalar(s),e.push(r)}}generateRandomKernelRotations(){const n=new G0,r=16,s=new Float32Array(r);for(let a=0;a<r;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;s[a]=n.noise3d(o,l,c)}this.noiseTexture=new C0(s,4,4,xo,Mn),this.noiseTexture.wrapS=On,this.noiseTexture.wrapT=On,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const r=e.get(n);n.visible=r}),e.clear()}}ti.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const W0={minX:-15.55,maxX:15.55,minZ:-28.15,maxZ:13.55},X0={x:0,y:1.58,z:10.55,yaw:0},q0={x:0,y:1.58,z:-16.35,yaw:0},Rr=-24.2,Y0=Rr-.35,Cr={x:0,y:0,z:-26.55},$c=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35}],Z0=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],j0=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],fo=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1}],va={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},K0={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":va,"choir-r":va,"choir-ghost":va};function Gt(i,t,e,n,r,s,a,o,l={}){return{id:i,mat:t,x:e,y:n,z:r,w:s,h:a,d:o,...l}}const Ae=7.2,Jc=[Gt("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),Gt("ceiling","ceiling",0,7.35,0,34,.3,30),Gt("wall-n-l","wall",-9.23,Ae/2,-14.3,14.74,Ae,.6),Gt("wall-n-r","wall",9.23,Ae/2,-14.3,14.74,Ae,.6),Gt("chapel-door","trim",0,Ae/2,-14.3,3.76,Ae,.66,{door:!0}),Gt("wall-s","wall",0,Ae/2,14.3,33.2,Ae,.6),Gt("wall-w","wall",-16.3,Ae/2,0,.6,Ae,29.2),Gt("wall-e","wall",16.3,Ae/2,0,.6,Ae,29.2),Gt("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),Gt("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),Gt("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),Gt("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),Gt("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),Gt("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),Gt("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),Gt("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),Gt("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),Gt("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),Gt("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),Gt("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),Gt("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),Gt("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),Gt("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),Gt("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),Gt("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),Gt("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),Gt("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),Gt("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),Gt("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),Gt("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),Gt("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),Gt("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),Gt("chapel-w","wall",-8.35,Ae/2,-21.75,.5,Ae,14.9),Gt("chapel-e","wall",8.35,Ae/2,-21.75,.5,Ae,14.9),Gt("chapel-n","wall",0,Ae/2,-29.05,17.2,Ae,.5),Gt("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),Gt("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),Gt("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),Gt("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),Gt("altar-l","trim",-4.85,1.8,Rr,6.5,3.6,.48),Gt("altar-r","trim",4.85,1.8,Rr,6.5,3.6,.48),Gt("rite-veil","trim",0,1.8,Rr,3.36,3.6,.42,{phaseGate:!0,veil:!0}),Gt("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function $0(i){return{id:i.id,minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2,phaseGate:!!i.phaseGate,floor:!!i.floor}}function Qc({doorOpen:i=!1,veilUp:t=!1}={}){return Jc.filter(e=>!(e.door&&i||e.veil&&!t)).map($0)}function th(i,t,e){return{id:i.id,x:i.x,y:0,z:i.z,yaw:0,hp:i.hp,maxHp:i.hp,alive:!0,cloaked:!!i.cloak,reveal:0,visible:!i.cloak,exposed:!1,hittable:!i.cloak,hits:0,lastHitAt:null,aggro:e==="court"&&!i.cloak,cooldown:e==="chapel"?1.35+t%3*.25:.95+t%4*.28,windup:0,strafeSign:t%2===0?1:-1,strafeT:.8+t%3*.25,hurt:0,stun:0,room:e,dormant:e!=="court"}}function eh(){return Z0.map((i,t)=>th(i,t,"court"))}function Is(){return j0.map((i,t)=>th(i,t,"chapel"))}function J0(){return fo.map(i=>({...i,taken:!1}))}const Er=["LIVE","STATIC","DEAD_AIR"],ne={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6}};function gn(i,t,e){return Math.max(t,Math.min(e,i))}function ql(){return{channel:"LIVE",signal:ne.signalMax,health:ne.healthMax,fireCooldown:0,hurtTimer:0}}function Q0(i){return i==="Digit1"||i==="Numpad1"?"LIVE":i==="Digit2"||i==="Numpad2"?"STATIC":i==="Digit3"||i==="Numpad3"?"DEAD_AIR":null}function tg(i,t){const e=Math.max(0,Er.indexOf(i)),n=t>=0?1:-1;return Er[(e+n+Er.length)%Er.length]}function eg(i,t){return t==="LIVE"?!0:i.signal>=ne.minDrainSignal}function ng(i,t){return Er.includes(t)?i.channel===t?{state:i,result:"same"}:eg(i,t)?{state:{...i,channel:t},result:"ok"}:{state:i,result:"denied"}:{state:i,result:"invalid"}}function ig(i,t){let{channel:e,signal:n,fireCooldown:r,hurtTimer:s}=i,a=!1;if(r=Math.max(0,r-t),s=Math.max(0,s-t),e==="LIVE")n=Math.min(ne.signalMax,n+ne.liveRegen*t);else{const o=e==="STATIC"?ne.staticDrain:ne.deadDrain;n-=o*t,n<=0&&(n=0,e="LIVE",a=!0)}return{state:{...i,channel:e,signal:n,fireCooldown:r,hurtTimer:s},forced:a}}function nh(i){var t;return(t=ne.speed[i])!=null?t:ne.speed.LIVE}function rg(i){return i.channel!=="DEAD_AIR"&&i.fireCooldown<=0&&i.health>0}function Yl(i){return i==="LIVE"?{kind:"hitscan",pellets:1,spread:0,damage:ne.liveDamage,range:ne.liveRange,falloff:ne.liveFalloff,cooldown:ne.liveCooldown}:i==="STATIC"?{kind:"spread",pellets:ne.staticPellets,spread:ne.staticSpread,damage:ne.staticPellet,range:ne.staticRange,falloff:ne.staticFalloff,cooldown:ne.staticCooldown}:{kind:"none",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0}}function sg(i){const t=Yl(i.channel);return!rg(i)||t.kind==="none"?{state:i,profile:Yl("DEAD_AIR"),fired:!1}:{state:{...i,fireCooldown:t.cooldown},profile:t,fired:!0}}function Zl(i,t,e,n){if(!(t>=0)||t>e||e<=0)return 0;const r=t/e;return i*(1-n*r*r)}function Io(i,t){return{...i,signal:gn(i.signal+t,0,ne.signalMax)}}function ag(i,t){return{...i,health:gn(i.health+t,0,ne.healthMax)}}function og(i,{distance:t,channel:e,burst:n}){const r=e==="STATIC"||t<=ne.aggressiveRange||!!n,s=r?ne.aggressiveKillSignal:ne.cleanKillSignal;return{state:Io(i,s),amount:s,aggressive:r}}function jl(i,t){if(i.hurtTimer>0||i.health<=0)return{state:i,hit:!1,dead:i.health<=0};const e=Math.max(0,i.health-t);return{state:{...i,health:e,hurtTimer:ne.hurtIframes},hit:!0,dead:e<=0}}function lg(i,t){return!(!i||i.floor||i.maxY!=null&&i.maxY<.3||i.minY!=null&&i.minY>1.65||i.phaseGate&&t==="DEAD_AIR")}function po(i,t,e,n,r){for(const s of n){if(!lg(s,r))continue;const a=gn(i,s.minX,s.maxX),o=gn(t,s.minZ,s.maxZ),l=i-a,c=t-o;if(l*l+c*c<e*e)return s}return null}function cg(i,t,e,n,r,s,a){let o=i+e;po(o,t,r,s,a)&&(o=i);const l=t+n;return po(o,l,r,s,a)?{x:o,z:t}:{x:o,z:l}}function hg(i,t,e,n,r){let s=i,a=t;for(let o=0;o<4;o++){const l=po(s,a,e,n,r);if(!l)break;const c=gn(s,l.minX,l.maxX),h=gn(a,l.minZ,l.maxZ);let f=s-c,d=a-h;const u=Math.hypot(f,d);if(u<1e-5){const g=s-l.minX,_=l.maxX-s,m=a-l.minZ,p=l.maxZ-a,T=Math.min(g,_,m,p);T===g?s=l.minX-e-.01:T===_?s=l.maxX+e+.01:T===m?a=l.minZ-e-.01:a=l.maxZ+e+.01}else{const g=e-u+.01;s+=f/u*g,a+=d/u*g}}return{x:s,z:a}}function ih(i,t,e,n,r,s,a,o){const l=Math.hypot(e,n),c=Math.max(1,Math.ceil(l/.25));let h=i,f=t;for(let u=0;u<c;u++){const g=cg(h,f,e/c,n/c,r,s,a);h=g.x,f=g.z}const d=hg(h,f,r,s,a);return o?{x:gn(d.x,o.minX,o.maxX),z:gn(d.z,o.minZ,o.maxZ)}:d}function rh(i,t,e,n,r,s,a,o,l,c){const h=a-i,f=o-t,d=l-e,u=h*n+f*r+d*s,g=h*h+f*f+d*d-u*u,_=c*c;if(g>_)return null;const m=Math.sqrt(Math.max(0,_-g)),p=u-m,T=u+m;return p>=0?p:T>=0?T:null}function ug(i,t,e,n,r,s,a,o){let l=0,c=o;const h=[[i,n,a.minX,a.maxX],[t,r,a.minY,a.maxY],[e,s,a.minZ,a.maxZ]];for(const[d,u,g,_]of h){if(Math.abs(u)<1e-8){if(d<g||d>_)return null;continue}let m=(g-d)/u,p=(_-d)/u;if(m>p){const T=m;m=p,p=T}if(m>l&&(l=m),p<c&&(c=p),c<l)return null}const f=l>=0?l:c;return f<0||f>o?null:f}function Lo(i,t,e,n,r,s,a,o){let l=null,c=a;for(const h of o){if(h.noShoot)continue;const f=ug(i,t,e,n,r,s,h,c);f!=null&&f<c&&(c=f,l={t:f,collider:h,x:i+n*f,y:t+r*f,z:e+s*f})}return l}function Kl(i,t){if(!i.alive)return{...i,visible:!0,exposed:!1,hittable:!1};if(!i.cloaked)return{...i,visible:!0,exposed:t==="STATIC",hittable:!0};const e=t==="STATIC"||i.reveal>0;return{...i,visible:e,exposed:e,hittable:e}}function $l(i,t,e){if(!i.cloaked||!i.alive)return Kl(i,e);let n=i.reveal||0;return e==="STATIC"?n=ne.revealDuration:n=Math.max(0,n-t),Kl({...i,reveal:n},e)}function fg(i,t,e,n,r){let s=e,a=null;for(const l of n){if(!l.alive||!l.hittable)continue;const c=[{y:(l.y||0)+1.62,r:.26,weak:!0},{y:(l.y||0)+.98,r:.46,weak:!1}];for(const h of c){const f=rh(i.x,i.y,i.z,t.x,t.y,t.z,l.x,h.y,l.z,h.r);f!=null&&f>.02&&f<s&&(s=f,a={kind:"enemy",id:l.id,t:f,weak:h.weak,x:i.x+t.x*f,y:i.y+t.y*f,z:i.z+t.z*f})}}const o=Lo(i.x,i.y,i.z,t.x,t.y,t.z,s,r);return o&&o.t<s?{kind:"world",t:o.t,x:o.x,y:o.y,z:o.z,id:o.collider.id}:a}function dg(i,t){const e=i.lastHitAt!=null&&t-i.lastHitAt<=ne.burstWindow;return{enemy:{...i,lastHitAt:t},burst:e}}function pg(i,{weak:t,damage:e}){if(!i.alive||!i.hittable||e<=0)return{enemy:i,dealt:0,killed:!1};let n=e;t&&i.exposed&&(n*=ne.weakMult);const r=i.hp-n,s=r<=0;return{enemy:{...i,hp:s?0:r,hits:(i.hits||0)+1,alive:!s,hittable:!s&&i.hittable},dealt:n,killed:s}}function mg(i,t,e,n,r,s){const a=[],o=Math.max(0,n|0);for(let l=0;l<o;l++){const c=o===1&&r===0?0:(s()*2-1)*r,h=o===1&&r===0?0:(s()*2-1)*r,f=i.x+t.x*c+e.x*h,d=i.y+t.y*c+e.y*h,u=i.z+t.z*c+e.z*h,g=Math.hypot(f,d,u)||1;a.push({x:f/g,y:d/g,z:u/g})}return a}function sh(i,t,e,n,r,s,a){const o=n-i,l=r-t,c=s-e,h=Math.hypot(o,l,c);return h<.001?!0:Lo(i,t,e,o/h,l/h,c/h,Math.max(0,h-.25),a)==null}function gg(i,t){return!t||t.taken?{state:i,pickup:t,took:!1}:t.kind==="signal"?{state:Io(i,t.amount),pickup:{...t,taken:!0},took:!0}:t.kind==="health"?i.health>=ne.healthMax?{state:i,pickup:t,took:!1}:{state:ag(i,t.amount),pickup:{...t,taken:!0},took:!0}:{state:i,pickup:t,took:!1}}function _g(i,t){return!i||i.taken?!1:i.cloaked?t==="STATIC":!0}function vg(i,t){const e=Math.hypot(i,t);return e<1e-6?{x:0,z:0}:{x:i/e,z:t/e}}function xg(i,t,e){var I;if(!i.alive)return{enemy:i,shot:null};if(i.dormant)return{enemy:{...i,hurt:Math.max(0,(i.hurt||0)-t)},shot:null};let n=$l(i,t,e.channel);if(!n.alive)return{enemy:n,shot:null};const r=e.player.x-n.x,s=e.player.z-n.z,a=Math.hypot(r,s);if((a<18||e.player.forceAggro)&&(n.aggro=!0),n.cloaked&&a<3.05&&(n.reveal=Math.max(n.reveal||0,1.25)),n=$l(n,0,e.channel),(n.stun||0)>0)return n.stun-=t,n.windup=0,n.hurt=Math.max(0,(n.hurt||0)-t),a>.001&&n.aggro&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:null};const o=n.cloaked&&!n.visible;if(!n.aggro||o)return n.hurt=Math.max(0,(n.hurt||0)-t),{enemy:n,shot:null};const c=a<17&&sh(n.x,1.45,n.z,e.player.x,(I=e.player.y)!=null?I:1.2,e.player.z,e.colliders);n.hurt=Math.max(0,(n.hurt||0)-t),n.cooldown=(n.cooldown||0)-t;let h=null;if(n.windup>0?(n.windup-=t,n.windup<=0&&(n.windup=0,c&&(h=Mg(n,e,a)))):c&&n.cooldown<=0&&(n.windup=.28,n.cooldown=1.28+e.rng()*.45),n.windup>0)return a>.001&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:h};const f=a>.001?{x:r/a,z:s/a}:{x:0,z:1},d={x:-f.z,z:f.x};n.strafeT=(n.strafeT||0)-t,n.strafeT<=0&&(n.strafeSign=(n.strafeSign||1)*-1,n.strafeT=.75+e.rng()*1.05);let u=d.x*n.strafeSign*.9,g=d.z*n.strafeSign*.9;if(a>10.2?(u+=f.x,g+=f.z):a<5.2&&(u-=f.x*.85,g-=f.z*.85),e.allies)for(const L of e.allies){if(!L.alive||L.id===n.id)continue;const M=n.x-L.x,v=n.z-L.z,R=Math.hypot(M,v);R<1.15&&R>.001&&(u+=M/R*1.4,g+=v/R*1.4)}const _=vg(u,g),m=nh("STATIC")*.62*(n.hurt>0?.25:1);let p=_.x*m*t,T=_.z*m*t;const w=ih(n.x,n.z,p,T,.42,e.colliders,"LIVE",null);let y=w.x,O=w.z;const P=K0[n.id];return P&&(y<P.minX||y>P.maxX||O<P.minZ||O>P.maxZ)&&(y=n.x,O=n.z),n.x=y,n.z=O,a>.001&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:h}}function Mg(i,t,e){var f;const n=i.x,r=1.32,s=i.z,a=t.player.x-n+(t.rng()-.5)*.35,o=((f=t.player.y)!=null?f:1.15)-r+(t.rng()-.5)*.12,l=t.player.z-s+(t.rng()-.5)*.35,c=Math.hypot(a,o,l)||1,h=14.5;return{x:n,y:r,z:s,vx:a/c*h,vy:o/c*h,vz:l/c*h,damage:ne.boltDamage,life:2.1,dist:e}}function ah(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Me;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!r.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const f=[];for(let d=0;d<i.length;++d){const u=i[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(const h in s){const f=Jl(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const u=[];for(let _=0;_<a[h].length;++_)u.push(a[h][_][d]);const g=Jl(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Jl(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new Fe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let d=0,u=h.count;d<u;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+f,g,_)}}else a.set(h.array,l);l+=h.count*e}return r!==void 0&&(o.gpuType=r),o}function Vi(i,t,e,n,r){const s=-r/2,a=r/2,o=[[-i/2,s,t/2],[i/2,s,t/2],[i/2,s,-t/2],[-i/2,s,-t/2],[-e/2,a,n/2],[e/2,a,n/2],[e/2,a,-n/2],[-e/2,a,-n/2]],l=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],c=[],h=[];for(const d of l){const[u,g,_,m]=d.map(p=>o[p]);c.push(...u,...g,..._,...u,..._,...m),h.push(0,0,1,0,1,1,0,0,1,1,0,1)}const f=new Me;return f.setAttribute("position",new he(c,3)),f.setAttribute("uv",new he(h,2)),f.computeVertexNormals(),f}function xa(i,t=24){const e=i.map(([r,s])=>new vt(r,s)),n=new kn(e,t);return n.computeVertexNormals(),n}function jt(i,t,e=0,n=0,r=0){const s=new gt(i,t);return s.position.set(e,n,r),s.castShadow=!0,s.receiveShadow=!0,s}function Ma(i){return ah(i,!1)}const Sg=[[.02,.2],[.1,.175],[.148,.11],[.164,.04],[.158,-.03],[.132,-.09],[.09,-.135],[.04,-.158]],yg=[[.1,.7],[.155,.8],[.15,.96],[.175,1.16],[.22,1.34],[.2,1.46],[.11,1.52]],Eg=[[.42,.02],[.52,.16],[.5,.36],[.42,.62],[.36,.9],[.39,1.12],[.3,1.38],[.22,1.56],[.15,1.68]];let _r=null;function Uo(){if(_r)return _r;const i=[],t=new Re(.046,12,10);t.scale(1.28,.7,1.35),t.translate(0,-.575,.02),i.push(t);for(let h=0;h<4;h++){const f=-.032+h*.021,d=.036-Math.abs(h-1.4)*.004,u=.22+(h===0||h===3?.1:0),g=new fe(.008,.01,d,6);g.translate(0,-d*.5,0),g.rotateX(.12),g.translate(f,-.615,.042);const _=new fe(.006,.008,d*.85,6);_.translate(0,-d*.4,0),_.rotateX(u),_.translate(f,-.615-d*.72,.05),i.push(g,_)}const e=new fe(.009,.011,.04,6);e.translate(0,-.02,0),e.rotateZ(.85),e.translate(.048,-.59,.015);const n=new fe(.007,.009,.028,6);n.translate(0,-.014,0),n.rotateZ(1.15),n.rotateX(.25),n.translate(.062,-.6,.03),i.push(e,n);const r=new Ft(.1,.025,.2);r.translate(0,-.012,.02);const s=new Ft(.088,.038,.13);s.translate(0,.016,-.005);const a=[],o=new Ft(.05,.055,.16);o.translate(0,-.56,.1),a.push(o);const l=new Ft(.03,.03,.07);l.translate(0,-.545,.16),a.push(l);const c=new Ft(.038,.07,.04);c.translate(0,-.61,.04),a.push(c),_r={helmet:xa(Sg,36),torso:xa(yg,32),robe:xa(Eg,36),visor:new Re(.164,48,32,Math.PI/2-1.05,2.1,Math.PI*.36,Math.PI*.46),chest:Vi(.34,.2,.48,.26,.4),abdomen:Vi(.3,.18,.34,.2,.18),pelvis:Vi(.32,.2,.28,.18,.14),pec:Vi(.15,.1,.17,.12,.2),shoulder:Vi(.1,.1,.14,.12,.08),thigh:new fe(.055,.072,.34,12),shin:new fe(.04,.055,.32,12),foot:Ma([r,s]),upper:new fe(.04,.05,.26,12),forearm:new fe(.03,.04,.22,12),hand:Ma(i),gun:Ma(a),collar:new fe(.07,.09,.08,8),joint:new Re(1,16,12),skirt:Vi(.34,.16,.5,.22,.62),tabard:new Ft(.22,.58,.045),stole:new Ft(.09,.5,.04),muzzle:new Ft(.028,.028,.04),seam:new Ft(.2,.028,.02)};for(const h of Object.values(_r))if(!(!(h!=null&&h.index)||h.attributes.tangent||!h.attributes.uv||!h.attributes.normal))try{h.computeTangents()}catch(f){}return _r}let Sa=null;function oh(i){if(!Sa){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),r=n.createRadialGradient(32,32,2,32,32,31);r.addColorStop(0,"rgba(0,0,0,0.48)"),r.addColorStop(.5,"rgba(0,0,0,0.2)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,64,64);const s=new sr(e);s.colorSpace=De,Sa=new ye({map:s,transparent:!0,depthWrite:!1})}const t=new gt(new Ki(i,24),Sa);return t.rotation.x=-Math.PI/2,t.position.y=.025,t.castShadow=!1,t.receiveShadow=!1,t}function Gi(i,t=0,e=0){return i.userData.rest=t,i.userData.restI=e,i.emissive=new Wt(t),i.emissiveIntensity=e,i}function lh(i){const t=Gi(new pa({map:i.pearl,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:.85,metalness:.02,clearcoat:.58,clearcoatRoughness:.24,envMapIntensity:.36}));t.normalScale.set(.45,.45);const e=Gi(new Ye({map:i.pearlWorn,normalMap:i.pearlNormal,roughnessMap:i.pearlRough,roughness:1,metalness:.02,envMapIntensity:.22}));e.normalScale.set(.65,.65);const n=Gi(new Ye({map:i.joint,color:1710618,roughness:.38,metalness:.62,envMapIntensity:.45})),r=Gi(new pa({color:461070,roughness:.035,metalness:.12,clearcoat:1,clearcoatRoughness:.03,iridescence:0,ior:1.55,envMapIntensity:.72,reflectivity:1}));r.polygonOffset=!0,r.polygonOffsetFactor=-2,r.polygonOffsetUnits=-2;const s=Gi(new pa({map:i.cloth,normalMap:i.clothNormal,roughnessMap:i.clothRough,roughness:1,metalness:0,sheen:.42,sheenRoughness:.55,sheenColor:new Wt(16183784),envMapIntensity:.32}));s.normalScale.set(.4,.4);const a=Gi(new Ye({map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.86,envMapIntensity:.9}),6967320,.16);a.normalScale.set(.35,.35);const o=new ye({color:16757066});return{pearl:t,worn:e,joint:n,visor:r,cloth:s,gold:a,amber:o}}function ps(i,t,e,n,r){const s=jt(Uo().joint,i,e,n,r);return s.scale.setScalar(t),s}function Jn(i,t,e=16774894){for(const n of i)t>.02?(n.emissive.setHex(e),n.emissiveIntensity=t):(n.emissive.setHex(n.userData.rest||0),n.emissiveIntensity=n.userData.restI||0)}function Tg(i,t={}){const e=new Le,n=Uo(),r=lh(i),s=[],a=jt(n.torso,r.pearl),o=jt(new fe(.188,.188,.048,18),r.joint,0,1.02,0),l=jt(n.collar,r.joint,0,1.5,0),c=new Le;c.position.set(0,1.66,0);const h=jt(n.helmet,r.pearl);h.scale.set(1.06,.96,1.08);const f=jt(new Re(.172,40,24),r.visor,0,-.045,.168);f.scale.set(1.18,1.14,.36);const d=jt(new Re(.026,12,8),r.pearl,0,.148,.12);d.scale.set(1,.65,.5);const u=jt(n.seam,r.amber,0,-.02,.185);u.visible=!1,u.castShadow=!1,c.add(h,f,d,u),s.push(a,o,l,c);function g(P,I){const L=new Le;if(I){L.add(ps(r.joint,.055,0,0,0)),L.add(jt(n.upper,r.pearl,0,-.16,0)),L.add(ps(r.joint,.042,0,-.3,0)),L.add(jt(n.forearm,r.joint,0,-.42,0)),L.add(jt(n.hand,r.joint,0,.08,0));const M=jt(n.joint,r.pearl,P*.02,.02,.01);M.scale.set(.09,.055,.078),L.add(M)}else{L.add(ps(r.joint,.058,0,0,0)),L.add(jt(n.thigh,r.pearl,0,-.2,0)),L.add(ps(r.joint,.048,0,-.38,0)),L.add(jt(n.shin,r.worn,0,-.56,0));const M=jt(n.foot,r.worn,0,-.76,.03);L.add(M)}return L}const _=g(-1,!1);_.position.set(-.12,.8,0),_.rotation.z=.08;const m=g(1,!1);m.position.set(.12,.8,0),m.rotation.z=-.08;const p=g(-1,!0);p.position.set(-.32,1.4,0),p.rotation.z=.42;const T=g(1,!0);T.position.set(.32,1.4,0),T.rotation.z=-.36;const w=jt(n.gun,r.joint,.045,.02,.02),y=jt(n.muzzle,r.amber,.045,-.525,.22);y.castShadow=!1,T.add(w,y);const O=oh(.48);if(e.add(...s,_,m,p,T,O),t.vestment){const P=jt(n.tabard,r.cloth,0,.92,.16),I=jt(new Ft(.28,.42,.04),r.cloth,0,.95,-.14),L=jt(n.stole,r.gold,0,1.16,.18),M=jt(new kn([new vt(.18,0),new vt(.32,.04),new vt(.24,.1)],24),r.cloth,0,1.4,0),v=jt(ch(new kn([new vt(.2,.02),new vt(.36,.2),new vt(.4,.46),new vt(.3,.74),new vt(.22,.96)],28),6,.016),r.cloth,0,.06,0);e.add(P,I,L,M,v)}return hh(e),{group:e,weak:u,lLeg:_,rLeg:m,lArm:p,rArm:T,muzzle:y,shadow:O,flashMats:[r.pearl,r.worn,r.joint,r.visor,r.cloth,r.gold],flash:0}}function wg(i){const t=new Le,e=lh(i),n=Uo(),r=jt(ch(n.robe,8,.04),e.cloth),s=jt(new kn([new vt(.22,0),new vt(.5,.06),new vt(.42,.16),new vt(.2,.22)],28),e.cloth,0,1.46,0),a=jt(new kn([new vt(.12,0),new vt(.22,.06),new vt(.16,.16)],24),e.cloth,0,1.68,0),o=jt(new sn(.48,.018,8,32),e.gold,0,.12,0);o.rotation.x=Math.PI/2;const l=jt(new sn(.35,.02,8,28),e.gold,0,1.12,0);l.rotation.x=Math.PI/2;const c=jt(new Ft(.14,1.05,.04),e.gold,0,1.02,.22),h=jt(new Re(.045,12,10),e.gold,0,.7,.26),f=new Le;f.position.set(0,2.05,0),f.scale.setScalar(1.18);const d=jt(n.helmet,e.pearl),u=jt(new Re(.028,12,8),e.pearl,0,.15,.11);u.scale.set(1,.62,.48);const g=jt(new Re(.175,40,24),e.visor,0,-.04,.162);g.scale.set(1.22,1.2,.38);const _=jt(new Ft(.22,.03,.018),e.amber,0,-.02,.175);_.visible=!1,_.castShadow=!1,f.add(d,u,g,_);const m=new Ye({color:15123818,map:i.gold,normalMap:i.goldNormal,roughnessMap:i.goldRough,roughness:1,metalness:.82,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1,envMapIntensity:.7}),p=new gt(new sn(.58,.04,12,48),m);p.position.set(0,2.22,-.16);const T=new gt(new sn(.4,.016,8,36),m);p.add(T);const w=jt(new Re(.032,10,8),e.gold,.58,0,0);p.add(w);function y(L){const M=new Le,v=jt(new fe(.075,.13,.52,14),e.cloth,0,.26,0),R=jt(new sn(.078,.016,8,16),e.gold,0,.5,0);R.rotation.x=Math.PI/2;const N=jt(n.hand,e.pearl,0,-.04,.02);N.rotation.z=Math.PI,N.scale.setScalar(1.45);const V=jt(new Ft(.06,.045,.018),e.amber,0,.62,.08);return V.castShadow=!1,M.add(v,R,N,V),M.position.set(L*.42,1.48,.02),{pivot:M,hand:V}}const O=y(-1),P=y(1);for(const L of[1.4,1.2,1]){const M=jt(new sn(.2,.01,8,22,Math.PI*.9),e.gold,0,L,.08);M.rotation.x=Math.PI/2,t.add(M)}const I=oh(.9);return t.add(r,s,a,o,l,c,h,f,p,O.pivot,P.pivot,I),t.position.set(Cr.x,0,Cr.z),hh(t),{group:t,halo:p,haloMat:m,seam:_,shadow:I,lArm:O.pivot,rArm:P.pivot,lHand:O.hand,rHand:P.hand,flashMats:[e.pearl,e.cloth,e.visor,e.gold],flash:0}}function ch(i,t=7,e=.02){const n=i.clone(),r=n.attributes.position;for(let s=0;s<r.count;s++){const a=r.getX(s),o=r.getY(s),l=r.getZ(s),c=Math.hypot(a,l)||1,h=Math.atan2(a,l),f=.4+.6*Math.max(0,l/c),d=.4+.6*Math.min(1,Math.max(0,(1.35-o)/1.35)),u=Math.sin(h*t)*e*f*d;r.setXYZ(s,a+a/c*u,o,l+l/c*u)}return r.needsUpdate=!0,n.computeVertexNormals(),n.getAttribute("tangent")&&n.deleteAttribute("tangent"),n}function hh(i){i.traverse(t=>{var n;const e=t.geometry;if(!(!t.isMesh||!((n=t.material)!=null&&n.normalMap)||!(e!=null&&e.index)||e.attributes.tangent)&&!(!e.attributes.uv||!e.attributes.normal))try{e.computeTangents()}catch(r){}})}function bg(i,t){const e=new Map,n=new Set(Is().map(l=>l.id));for(const l of[...eh(),...Is()]){const c=Tg(t,{vestment:n.has(l.id)});c.group.position.set(l.x,0,l.z),c.group.visible=l.visible,c.death=0,c.died=!1,c.phase=Math.random()*Math.PI*2,c.prevX=l.x,c.prevZ=l.z,i.add(c.group),e.set(l.id,c)}const r=wg(t);r.died=!1,r.death=0,r.pose=0,i.add(r.group);const s=new Re(.08,7,5),a=new ye({color:16756768}),o=[];for(let l=0;l<16;l++){const c=new gt(s,a);c.visible=!1,c.frustumCulled=!1,i.add(c),o.push(c)}return{reset(l){for(const c of l){const h=e.get(c.id);if(h){if(h.prevX=c.x,h.prevZ=c.z,h.group.position.set(c.x,0,c.z),h.group.rotation.set(0,0,0),h.group.scale.setScalar(1),h.flash=0,Jn(h.flashMats,0),h.weak.visible=!1,!c.alive){h.died=!0,h.death=0,h.group.visible=!1;continue}h.death=0,h.died=!1,h.group.visible=c.visible}}},resetPriest(l){r.died=!1,r.death=0,r.pose=0,r.flash=0,r.group.visible=!0,r.group.rotation.set(0,0,0),r.group.position.set(l.x,0,l.z),r.halo.scale.setScalar(1),Jn(r.flashMats,0),r.seam.visible=!1},syncPriest(l,c,h,f){if(!l.alive){r.died||(r.died=!0,r.death=1.05),r.death-=c;const O=1-Math.max(r.death,0)/1.05;r.group.visible=r.death>0,r.group.rotation.x=O*1.25,r.group.position.set(l.x,-O*.55,l.z),r.shadow.visible=!1,r.halo.scale.setScalar(Math.max(0,1-O)),r.seam.visible=!1,r.lArm.rotation.x=.9,r.rArm.rotation.x=.7,Jn(r.flashMats,O<.45?(1-O/.45)*2.4:0);return}r.died=!1,r.death=0,r.group.visible=!0,r.group.rotation.set(0,l.yaw||0,Math.sin(h*.8)*.008);const d=Math.sin(h*1.15)*.015;r.group.position.set(l.x,d,l.z),r.shadow.visible=!0,r.shadow.position.y=.025-d,r.halo.rotation.z=h*.15;const u=l.phase==="rite",g=u?1.28:l.windup>0?.4:1.12,_=l.windup>0?-.85:u?-.25:-.12;r.lArm.rotation.set(_,0,g),r.rArm.rotation.set(_,0,-g);const m=!!l.haloVisible,p=m&&f==="STATIC";r.halo.visible=!0;const T=m?1+Math.sin(h*7)*.06:1;r.halo.scale.setScalar(T),r.haloMat.opacity=p?1:m?.96:.9,r.haloMat.emissiveIntensity=p?2.4:m?1.55:.85,r.seam.visible=!!l.exposed;const w=l.windup>0||l.phase==="rite";r.lHand.visible=w,r.rHand.visible=w;const y=w?1.45:1;r.lHand.scale.setScalar(y),r.rHand.scale.setScalar(y),l.hurt>0&&(r.flash=.2),r.flash=Math.max(0,r.flash-c),Jn(r.flashMats,r.flash>0?r.flash/.2*2.6:0)},sync(l,c,h,f){for(const d of l){const u=e.get(d.id);if(!d.alive){u.died||(u.died=!0,u.death=.85),u.death-=c;const p=1-Math.max(u.death,0)/.85;u.group.visible=u.death>0,u.group.rotation.x=p*1.35,u.group.position.set(d.x,-p*.4,d.z),u.shadow.visible=!1,u.group.scale.setScalar(1),u.lArm.rotation.x=.5+p*.6,u.rArm.rotation.x=.3+p*.9,u.lLeg.rotation.x=-.25*p,u.rLeg.rotation.x=.4*p,u.weak.visible=!1,Jn(u.flashMats,p<.4?(1-p/.4)*2.4:0);continue}u.died=!1,u.death=0,u.group.visible=!!d.visible;const g=Math.hypot(d.x-u.prevX,d.z-u.prevZ);u.prevX=d.x,u.prevZ=d.z;const _=Math.sin(h*1.4+u.phase)*(g>.004?.02:.012);u.group.rotation.set(0,d.yaw||0,Math.sin(h*1.1+u.phase)*.012),u.group.position.set(d.x,_,d.z),u.shadow.visible=!0,u.shadow.position.y=.025-_;const m=g>.004?Math.sin(h*8+u.phase):Math.sin(h*1.6+u.phase)*.15;if(u.lLeg.rotation.x=m*.7,u.rLeg.rotation.x=-m*.7,u.lArm.rotation.x=-m*.45,u.rArm.rotation.x=m*.25+(d.windup>0?-.95:-.06),u.weak.visible=!!d.exposed,d.hurt>0&&(u.flash=.16),u.flash=Math.max(0,u.flash-c),u.flash>0)Jn(u.flashMats,u.flash/.16*2.8),u.group.scale.setScalar(1.035);else if(d.cloaked&&d.visible){const p=.22+Math.sin(h*9)*.1;Jn(u.flashMats,p,16766888),u.group.scale.setScalar(1)}else Jn(u.flashMats,0),u.group.scale.setScalar(1);u.muzzle.scale.setScalar(d.windup>0?1.8:1),d.cloaked&&d.visible&&f!=="STATIC"&&d.reveal<.5&&(u.group.visible=Math.sin(h*46)>-.2)}},syncBolts(l){for(let c=0;c<o.length;c++){const h=o[c],f=l[c];if(!f){h.visible=!1;continue}h.visible=!0,h.position.set(f.x,f.y,f.z)}}}}const Ql=["seam","choir","veil"],en={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},Ag=2.05,Rg=1.2,Cg=2.62;function tc(i){return i==="seam"?"LIVE · THE SEAM":i==="choir"?"STATIC · THE HALO":i==="veil"?"DEAD AIR · THE VEIL":""}function ec(){return{id:"visor-priest",boss:!0,x:Cr.x,y:Cr.y,z:Cr.z,yaw:0,hp:en.hp,maxHp:en.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:en.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function Pg(i,t){const e=Ql[i.riteIndex%Ql.length];i.phase="rite",i.rite=e,i.timer=en.riteWindow,i.exposed=e==="seam",i.haloVisible=e==="choir",i.veilUp=e==="veil",i.windup=0,t.push({type:"announce",rite:e})}function uh(i){i.phase="recover",i.rite=null,i.exposed=!1,i.haloVisible=!1,i.veilUp=!1,i.windup=0,i.timer=en.recover,i.riteIndex+=1}function Dg(i,t,e){if(!i.alive||!i.active)return{priest:i,events:[]};const n=[],r={...i,hurt:Math.max(0,(i.hurt||0)-t),stun:Math.max(0,(i.stun||0)-t)};if(e&&e.player){const s=e.player.x-r.x,a=e.player.z-r.z;Math.hypot(s,a)>.05&&(r.yaw=Math.atan2(s,a))}return r.phase==="idle"?(r.timer-=t,r.timer<=0?Pg(r,n):r.stun>0?r.windup=0:r.windup>0?(r.windup-=t,r.windup<=0&&(r.windup=0,r.shotCooldown=en.shotGap,n.push({type:"shot"}))):(r.shotCooldown-=t,r.shotCooldown<=0&&(r.windup=en.shotWindup))):r.phase==="rite"?(r.windup=0,r.timer-=t,r.timer<=0&&(n.push({type:"fail",rite:r.rite,damage:en.failDamage}),uh(r))):r.phase==="recover"&&(r.windup=0,r.timer-=t,r.timer<=0&&(r.phase="idle",r.timer=en.idle)),{priest:r,events:n}}function Ig(i){return i>0?i*en.armor:0}function Lg(i,t){const e=Ig(t);if(!i||!i.alive||e<=0)return{priest:i,dealt:0,killed:!1};const n=i.hp-e,r=n<=0;return{priest:{...i,hp:r?0:n,alive:!r,hurt:.22,phase:r?"dead":i.phase,veilUp:r?!1:i.veilUp,haloVisible:r?!1:i.haloVisible,exposed:r?!1:i.exposed,rite:r?null:i.rite},dealt:e,killed:r}}function nc(i,t){if(!i.alive||i.phase!=="rite")return{priest:i,broken:!1,dealt:0,killed:!1};if(!(i.rite==="seam"&&t.channel==="LIVE"&&t.weak&&!t.halo||i.rite==="choir"&&t.channel==="STATIC"&&t.halo||i.rite==="veil"&&t.channel==="DEAD_AIR"&&t.crossed))return{priest:i,broken:!1,dealt:0,killed:!1};const n=en.breakDamage,r=i.hp-n;if(r<=0)return{priest:{...i,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:n,killed:!0};const a={...i,hp:r,hurt:.28,broken:(i.broken||0)+1};return uh(a),{priest:a,broken:!0,dealt:n,killed:!1}}function Ug(i,t,e,n,r){if(!n||!n.alive||!n.hittable)return null;const s=[{y:Rg,r:.62,weak:!1,halo:!1},{y:Ag,r:.3,weak:!0,halo:!1}];n.haloVisible&&r==="STATIC"&&s.push({y:Cg,r:.42,weak:!1,halo:!0});let a=null,o=e;for(const l of s){const c=rh(i.x,i.y,i.z,t.x,t.y,t.z,n.x,(n.y||0)+l.y,n.z,l.r);c==null||c<=.02||c>=o||(o=c,a={kind:"priest",id:n.id,t:c,weak:l.weak,halo:l.halo,x:i.x+t.x*c,y:i.y+t.y*c,z:i.z+t.z*c})}return a}const Qn={maxDist:16,cone:.3,stun:4.5,cooldown:16,retune:4.5,retuneMult:1.45,radius:16};function Ng({origin:i,dir:t,point:e,maxDist:n,cone:r,blocked:s}){const a=e.x-i.x,o=e.y-i.y,l=e.z-i.z,c=Math.hypot(a,o,l);if(!(c>.05)||c>n||s)return{aimed:!1,dist:c};const h=(a*t.x+o*t.y+l*t.z)/c;return{aimed:h>=Math.cos(r),dist:c,dot:h}}function Fg(i,t){const e=i.cooldownUntil||0;return e>t?{ok:!1,reason:"cooldown",cooldownUntil:e}:{ok:!0,cooldownUntil:t+Qn.cooldown}}function Og(i,t,e,n){return i.map(r=>!r.alive||r.room!=="chapel"||Math.hypot(r.x-t.x,r.z-t.z)>e?r:{...r,stun:Math.max(r.stun||0,n),windup:0})}function zg(i,t){const e=new Le;e.position.set(.18,-.28,-.48),i.add(e);const n=new Ye({map:t.leather,normalMap:t.leatherNormal,roughnessMap:t.leatherRough,roughness:1,metalness:.06,envMapIntensity:.35});n.normalScale.set(.7,.7);const r=new Ye({map:t.trench,roughness:.86,metalness:.02,envMapIntensity:.2}),s=new Ye({map:t.brushed,roughness:.32,metalness:.78,envMapIntensity:.7}),a=new Ye({map:t.wood,normalMap:t.woodNormal,roughnessMap:t.woodRough,roughness:1,metalness:.04,envMapIntensity:.3});a.normalScale.set(.85,.85);const o=new Ye({color:1184274,roughness:.45,metalness:.18,envMapIntensity:.25}),l=new Ye({color:1710618,roughness:.35,metalness:.05,envMapIntensity:.3}),c=new ye({color:6813439}),h=new gt(new Ft(.16,.055,.38),a);h.position.set(.02,-.02,.02);const f=new gt(new Ft(.11,.02,.3),o);f.position.set(.02,.012,.03);const d=new gt(new Ft(.07,.03,.04),s);d.position.set(.02,-.005,-.16),e.add(h,f,d);for(let G=0;G<2;G++)for(let x=0;x<4;x++){const C=new gt(new Ft(.028,.012,.03),l);C.position.set(-.012+G*.064,.026,.1-x*.055),e.add(C)}const u=new gt(new Ft(.055,.028,.02),c);u.position.set(.02,-.004,-.2),e.add(u);const g=new gt(new fe(.006,.006,.22,5),s);g.position.set(.07,.02,-.12),g.rotation.z=-.4,g.rotation.x=.5;const _=new gt(new Re(.012,6,4),s);_.position.set(.11,.1,-.2),e.add(g,_);const m=new ye({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:bs,side:tn}),p=new Le;p.position.set(.02,-.004,-.24);const T=new gt(new Qe(.22,.05),m),w=new gt(new Qe(.22,.05),m);w.rotation.z=Math.PI/2;const y=new gt(new Qe(.08,.08),m);p.add(T,w,y),p.visible=!1,e.add(p);const O=new Ir(6813439,2.4,1.8,2);O.position.copy(u.position),e.add(O);function P(G,x,C){const U=new Le,D=new Re(.046,14,10);D.scale(1.05,.48,1.35);const Y=new gt(D,n),et=new gt(new Ft(.11,.07,.16),r);et.position.set(0,.01,.12);const ht=new gt(new Re(.02,8,6),n);ht.scale.set(2.1,.7,.8),ht.position.set(0,.02,-.04),U.add(Y,et,ht);const At=[.03,.038,.036,.028];for(let at=0;at<4;at++){const _t=-.034+at*.022,ct=At[at],Q=new gt(new fe(.0075,.0095,ct,8),n);Q.rotation.x=Math.PI/2,Q.position.set(_t,.016,-.05-ct*.45);const wt=new gt(new fe(.0055,.0075,ct*.82,8),n);wt.rotation.x=Math.PI/2+.28,wt.position.set(_t,.006,-.05-ct*1.15),U.add(Q,wt)}const kt=new gt(new fe(.0085,.011,.034,8),n);kt.rotation.z=C>0?-.7:.7,kt.rotation.x=.35,kt.position.set(C>0?.046:-.046,.02,-.012);const J=new gt(new fe(.0065,.0085,.026,8),n);J.rotation.z=C>0?-1.15:1.15,J.rotation.x=.2,J.position.set(C>0?.068:-.068,.012,-.028),U.add(kt,J),U.position.set(G,-.05,x),U.rotation.y=C,U.rotation.z=C>0?.22:-.18,e.add(U)}P(-.07,.06,.5),P(.12,.08,-.62),e.traverse(G=>{var C;G.castShadow=!1,G.receiveShadow=!1,G.frustumCulled=!1;const x=G.geometry;!G.isMesh||!((C=G.material)!=null&&C.normalMap)||!(x!=null&&x.index)||x.attributes.tangent||x.attributes.uv&&x.attributes.normal&&x.computeTangents()});let I=0,L=0,M=0,v=0,R="LIVE",N=!1;const V={x:.18,y:-.28,z:-.48};return{setChannel(G){N&&G!==R&&(L=.09),N=!0,R=G,G==="LIVE"?(c.color.setHex(6813439),O.color.setHex(6813439),O.intensity=2.6):G==="STATIC"?(c.color.setHex(15921906),O.color.setHex(16777215),O.intensity=.8):(c.color.setHex(2761758),O.intensity=0)},fire(G){I=G==="spread"?.12:.055,M=G==="none"?0:.045,m.color.set(G==="spread"?16053492:13040639),p.scale.setScalar(G==="spread"?1.35:1)},setVisible(G){e.visible=G},update(G,x,C={}){const U=x>.35;v+=G*(U?7.2+Math.min(x,9)*.28:1.5);const D=U?.004+Math.min(x,9)*.00115:.0016,Y=C.strafe||0;if(I+=(0-I)*(1-Math.exp(-12*G)),L+=(0-L)*(1-Math.exp(-14*G)),M-=G,p.visible=M>0,p.visible&&(p.rotation.z=M*18),R==="STATIC"){const et=.45+Math.random()*.55;c.color.setRGB(et,et,et)}e.position.x=V.x+Math.cos(v)*D*.7-Y*.01,e.position.y=V.y+Math.sin(v*2)*D+(U?0:Math.sin(v)*.003),e.position.z=V.z+I*.62,e.rotation.x=I*1.7+L*1.5+Math.sin(v*2)*D*2.2,e.rotation.y=.06-I*.25,e.rotation.z=-Y*.035+Math.sin(v)*D*1.4}}}function Pe(i,t,e,n=1,r=1){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const a=new sr(s);return a.colorSpace=De,a.wrapS=On,a.wrapT=On,a.repeat.set(n,r),a.anisotropy=8,a.magFilter=on,a.minFilter=Ln,a}function vr(i,t,e,n,r,s){i.fillStyle=r;for(let a=0;a<n;a++){const o=a*97%t,l=a*53%e;i.fillRect(o,l,s,s)}}function Bg(i,t=1,e=1){const n=new sr(i);return n.colorSpace=In,n.wrapS=On,n.wrapT=On,n.repeat.set(t,e),n.anisotropy=4,n.magFilter=on,n.minFilter=Ln,n}function fh(i,t,e,n=1,r=1){const s=document.createElement("canvas");s.width=i,s.height=t;const a=s.getContext("2d"),o=a.createImageData(i,t);for(let l=0;l<t;l++)for(let c=0;c<i;c++){const[h,f,d]=e(c,l,i,t),u=(l*i+c)*4;o.data[u]=h,o.data[u+1]=f,o.data[u+2]=d,o.data[u+3]=255}return a.putImageData(o,0,0),Bg(s,n,r)}function ui(i,t,e,n,r=1,s=1){const a=new Float32Array(i*t);for(let o=0;o<t;o++)for(let l=0;l<i;l++)a[o*i+l]=e(l,o,i,t);return fh(i,t,(o,l)=>{const c=a[l*i+(o+i-1)%i],h=a[l*i+(o+1)%i],f=a[(l+t-1)%t*i+o],d=a[(l+1)%t*i+o];let u=(c-h)*n,g=(f-d)*n;const _=1,m=Math.hypot(u,g,_)||1;return[u/m*127.5+127.5,g/m*127.5+127.5,_/m*127.5+127.5]},r,s)}function fi(i,t,e,n=1,r=1){return fh(i,t,(s,a)=>{const o=Math.max(0,Math.min(1,e(s,a,i,t)))*255;return[o,o,o]},n,r)}function kg(){const i=Pe(256,256,(x,C,U)=>{x.fillStyle="#5c564c",x.fillRect(0,0,C,U);const D=64;for(let Y=0;Y<U;Y+=D)for(let et=0;et<C;et+=D){const ht=(et*3+Y*7)%17/17,At=ht>.66?"#6a6358":ht>.33?"#574f46":"#4e4840";x.fillStyle=At,x.fillRect(et+2,Y+2,D-4,D-4),x.fillStyle="rgba(20,16,12,0.35)",x.fillRect(et,Y,D,2),x.fillRect(et,Y,2,D)}x.fillStyle="rgba(30,22,14,0.28)",x.beginPath(),x.ellipse(48,180,28,10,.4,0,Math.PI*2),x.fill(),x.beginPath(),x.ellipse(190,60,22,8,-.5,0,Math.PI*2),x.fill(),x.fillStyle="rgba(90,70,40,0.18)",x.fillRect(8,8,18,6)},8,6),t=Pe(256,256,(x,C,U)=>{x.fillStyle="#c8bfb2",x.fillRect(0,0,C,U),x.fillStyle="#b3a898";for(let D=0;D<C;D+=64)x.fillRect(D,0,3,U);x.fillStyle="#9c9184",x.fillRect(0,168,C,10),x.fillStyle="#6e655c",x.fillRect(0,214,C,42),x.fillStyle="#8a8176",x.fillRect(0,210,C,6),x.fillStyle="rgba(70,50,30,0.12)";for(let D=0;D<20;D++)x.fillRect(D*41%C,20+D*17%120,16,5);vr(x,C,U,30,"rgba(255,255,255,0.04)",2)},3,2),e=Pe(128,128,(x,C,U)=>{x.fillStyle="#8d8478",x.fillRect(0,0,C,U),x.fillStyle="#756c62";for(let D=0;D<C;D+=16)x.fillRect(D,0,2,U);x.fillStyle="rgba(40,30,20,0.2)",x.fillRect(0,U-18,C,18),x.fillStyle="#a39888",x.fillRect(0,8,C,4)},2,2),n=Pe(128,128,(x,C,U)=>{x.fillStyle="#b7b1a6",x.fillRect(0,0,C,U),x.strokeStyle="#8e877c",x.lineWidth=3,x.strokeRect(1,1,C-2,U-2),x.fillStyle="#c9c3b6",x.fillRect(8,8,C-16,U-16),x.fillStyle="rgba(80,70,50,0.15)",x.fillRect(18,40,30,8),x.fillRect(70,80,22,6)},6,6),r=Pe(128,128,(x,C,U)=>{x.fillStyle="#5c3a22",x.fillRect(0,0,C,U);for(let D=0;D<U;D+=3){const Y=70+D*17%50;x.strokeStyle=`rgb(${Y+36}, ${Y-4}, ${Y-32})`,x.beginPath(),x.moveTo(0,D),x.quadraticCurveTo(C*.5,D+(D%9-4),C,D),x.stroke()}x.fillStyle="rgba(30,16,6,0.35)",x.fillRect(18,0,4,U),x.fillRect(78,0,3,U),x.beginPath(),x.ellipse(46,40,8,14,.2,0,Math.PI*2),x.fill(),x.beginPath(),x.ellipse(96,90,6,10,-.3,0,Math.PI*2),x.fill()}),s=Pe(128,128,(x,C,U)=>{x.fillStyle="#16130f",x.fillRect(0,0,C,U),x.fillStyle="#e2a23a";const D=18;for(let Y=-8;Y<16;Y++)x.beginPath(),x.moveTo(Y*D,0),x.lineTo(Y*D+D*.55,0),x.lineTo(Y*D+D*.55-U,U),x.lineTo(Y*D-U,U),x.fill()}),a=Pe(128,64,(x,C,U)=>{for(let D=0;D<U;D++)for(let Y=0;Y<C;Y++){const ht=140+(Y*17+D*13)%40*2;x.fillStyle=`rgb(${ht},${ht},${ht-10})`,x.fillRect(Y,D,1,1)}x.fillStyle="rgba(0,0,0,0.45)";for(let D=0;D<U;D+=3)x.fillRect(0,D,C,1)}),o=Pe(128,128,(x,C,U)=>{x.fillStyle="#efe8de",x.fillRect(0,0,C,U),x.fillStyle="#fbf7f1",x.fillRect(10,10,C-20,U-20),x.strokeStyle="rgba(40,34,28,0.45)",x.lineWidth=3,x.strokeRect(8,8,C-16,U-16),x.strokeStyle="rgba(40,34,28,0.28)",x.beginPath(),x.moveTo(18,U/2),x.lineTo(C-18,U/2),x.moveTo(C/2,18),x.lineTo(C/2,U-18),x.stroke(),vr(x,C,U,24,"rgba(60,48,30,0.16)",2)}),l=Pe(128,128,(x,C,U)=>{x.fillStyle="#d5cec3",x.fillRect(0,0,C,U),x.fillStyle="#c4b6a2",x.fillRect(0,U*.55,C,U*.45),x.fillStyle="rgba(90,70,46,0.35)",x.fillRect(0,U-16,C,16),vr(x,C,U,40,"rgba(70,54,32,0.28)",2),x.strokeStyle="rgba(40,34,28,0.4)",x.strokeRect(6,6,C-12,U-12)}),c=Pe(64,64,(x,C,U)=>{x.fillStyle="#141414",x.fillRect(0,0,C,U),x.fillStyle="#2a2a2a";for(let D=-8;D<16;D++)x.fillRect(D*8,0,2,U);x.fillStyle="#3a3a3a",x.fillRect(0,4,C,3),x.fillStyle="#0a0a0a",x.fillRect(0,U-8,C,8)}),h=Pe(64,64,(x,C,U)=>{x.fillStyle="#c6a15a",x.fillRect(0,0,C,U),x.fillStyle="#e6c97a",x.fillRect(0,2,C,6),x.fillStyle="#8a6a32",x.fillRect(0,U-8,C,8),x.strokeStyle="rgba(60,40,10,0.45)",x.beginPath(),x.moveTo(8,0),x.lineTo(18,U),x.moveTo(40,0),x.lineTo(30,U),x.stroke()}),f=Pe(128,128,(x,C,U)=>{x.fillStyle="#f3efe6",x.fillRect(0,0,C,U);for(let D=8;D<C;D+=14)x.strokeStyle=D%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",x.beginPath(),x.moveTo(D,0),x.quadraticCurveTo(D+4,U/2,D-2,U),x.stroke();x.fillStyle="rgba(90,70,40,0.08)",x.fillRect(0,U-20,C,20)}),d=Pe(128,128,(x,C,U)=>{x.fillStyle="#3a2418",x.fillRect(0,0,C,U),vr(x,C,U,80,"rgba(20,10,6,0.45)",2),vr(x,C,U,40,"rgba(120,80,50,0.2)",1),x.strokeStyle="rgba(10,6,4,0.7)",x.lineWidth=3,x.beginPath(),x.moveTo(0,20),x.lineTo(C,28),x.stroke()}),u=Pe(128,128,(x,C,U)=>{x.fillStyle="#241810",x.fillRect(0,0,C,U),x.fillStyle="#1a110c";for(let D=0;D<C;D+=10)x.fillRect(D,0,3,U);x.fillStyle="rgba(80,50,30,0.15)",x.fillRect(0,0,C,8)}),g=Pe(256,256,(x,C,U)=>{x.fillStyle="#3e3832",x.fillRect(0,0,C,U);const D=64;for(let Y=0;Y<U;Y+=D)for(let et=0;et<C;et+=D)x.fillStyle=(et+Y)%128===0?"#4a433b":"#35302b",x.fillRect(et+3,Y+3,D-6,D-6);x.strokeStyle="rgba(166,132,70,0.35)",x.lineWidth=2;for(let Y=0;Y<=C;Y+=D)x.beginPath(),x.moveTo(Y,0),x.lineTo(Y,U),x.stroke(),x.beginPath(),x.moveTo(0,Y),x.lineTo(C,Y),x.stroke()},4,4),_=Pe(64,64,(x,C,U)=>{x.fillStyle="#8d9298",x.fillRect(0,0,C,U),x.fillStyle="rgba(255,255,255,0.18)";for(let D=0;D<U;D+=3)x.fillRect(0,D,C,1);x.fillStyle="#5e646a",x.fillRect(0,0,C,4)}),m=ui(128,128,(x,C,U,D)=>{const Y=x/U,et=C/D,ht=Math.min(Y,1-Y,et,1-et),At=Math.min(1,ht*10),kt=Math.abs(Y-.5)<.012||Math.abs(et-.5)<.012?.2:1;return At*kt},3.2),p=fi(128,128,(x,C,U,D)=>{const Y=x/U,et=C/D,ht=Math.min(Y,1-Y,et,1-et);return .28+(1-Math.min(1,ht*7))*.42}),T=ui(64,64,(x,C,U,D)=>{const Y=Math.sin(x*.85+C*.2)*.08,et=C<5?.25:C>D-6?-.2:0;return .55+Y+et},2.4),w=fi(64,64,(x,C)=>.22+(Math.sin(x*.7)*.5+.5)*.12+(C%9===0?.08:0)),y=ui(128,128,(x,C,U)=>{const D=Math.sin(x/U*Math.PI*5)*.2,Y=Math.sin(x*.85)*.04+Math.sin(C*1.15)*.03,et=x%8===0?-.05:0;return .55+D+Y+et},3.6),O=fi(128,128,(x,C,U,D)=>.78+C/D*.1+(x%8===0?.06:0)),P=ui(256,256,(x,C)=>{const D=x%64,Y=C%64;return Math.min(D,Y,63-D,63-Y)<3?.05:.72+Math.sin(x*.17)*Math.sin(C*.13)*.06},4.5,8,6),I=fi(256,256,(x,C)=>Math.min(x%64,C%64,63-x%64,63-C%64)<3?.95:.78,8,6),L=ui(256,256,(x,C)=>Math.min(x%64,C%64,63-x%64,63-C%64)<4?0:.66,5,4,4),M=fi(256,256,(x,C)=>Math.min(x%64,C%64)<4?.96:.84,4,4),v=ui(128,128,(x,C)=>{const U=Math.sin(C*.42+Math.sin(x*.07)*2.4)*.14,D=x%22===0?-.08:0;return .5+U+D},3.1),R=fi(128,128,(x,C,U,D)=>.48+(Math.sin(C*.35)*.5+.5)*.22+C/D*.08),N=ui(128,128,(x,C,U,D)=>{const Y=Math.sin(x*1.6)*Math.sin(C*1.25)*.05,et=Math.abs(C/D-.22)<.018?-.22:0;return .55+Y+et},2.6),V=fi(128,128,(x,C,U,D)=>.62+(Math.sin(x*.4+C*.2)*.5+.5)*.2+C/D*.08),G=Pe(256,64,(x,C,U)=>{x.fillStyle="#3c362e",x.fillRect(0,0,C,U),x.fillStyle="#2e2924";for(let D=0;D<C;D+=32)x.fillRect(D,0,2,U);x.strokeStyle="#e6c56a",x.lineWidth=3,x.strokeRect(6,8,C-12,U-16),x.lineWidth=2,x.beginPath(),x.ellipse(C/2,U/2,30,18,0,0,Math.PI*2),x.stroke(),x.beginPath(),x.ellipse(C/2,U/2,16,9,0,0,Math.PI*2),x.stroke(),x.fillStyle="#f0d48a",x.beginPath(),x.arc(C/2,U/2,3.5,0,Math.PI*2),x.fill()});return{floor:i,wall:t,ceiling:n,wood:r,hazard:s,snow:a,pearl:o,pearlWorn:l,joint:c,gold:h,cloth:f,leather:d,trench:u,nave:g,trim:e,brushed:_,pearlNormal:m,pearlRough:p,goldNormal:T,goldRough:w,clothNormal:y,clothRough:O,floorNormal:P,floorRough:I,naveNormal:L,naveRough:M,woodNormal:v,woodRough:R,leatherNormal:N,leatherRough:V,seal:G}}function ic(i,t,e="#16130f",n="#f4efe6"){const r=document.createElement("canvas");r.width=512,r.height=t?160:128;const s=r.getContext("2d");s.fillStyle=e,s.fillRect(0,0,r.width,r.height),s.strokeStyle="#e2a23a",s.lineWidth=8,s.strokeRect(8,8,r.width-16,r.height-16),s.fillStyle=n,s.textAlign="center",s.textBaseline="middle",s.font="700 58px Trebuchet MS, sans-serif",s.fillText(i,r.width/2,t?68:r.height/2+2),t&&(s.font="600 28px Trebuchet MS, sans-serif",s.fillStyle="#e2a23a",s.fillText(t,r.width/2,118));const a=new sr(r);return a.colorSpace=De,a.anisotropy=4,a}function me(i){return new Ye({envMapIntensity:.32,...i})}function Cn(i){var t,e;return i!=null&&i.index&&((t=i.attributes)!=null&&t.uv)&&((e=i.attributes)!=null&&e.normal)&&!i.attributes.tangent&&i.computeTangents(),i}function Wi(i,t,e){const n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n}function Hg(i){const t=kg(),e={floor:me({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.03}),wall:me({map:t.wall,roughness:.88,metalness:.03}),ceiling:me({map:t.ceiling,roughness:.96,metalness:0}),trim:me({map:t.trim,roughness:.74,metalness:.08}),metal:me({color:7172984,roughness:.38,metalness:.62}),wood:me({map:Wi(t.wood,2,2),normalMap:Wi(t.woodNormal,2,2),roughnessMap:Wi(t.woodRough,2,2),roughness:1,metalness:.04}),runner:me({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:me({color:1315344,roughness:.9}),brass:me({map:Wi(t.gold,2,2),normalMap:Wi(t.goldNormal,2,2),roughnessMap:Wi(t.goldRough,2,2),roughness:1,metalness:.84,envMapIntensity:.75}),plant:me({color:5065016,roughness:.92}),glass:me({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:me({map:t.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};e.hazard.side=tn,e.floor.normalScale.set(.7,.7),e.wood.normalScale.set(.85,.85),e.wood.side=tn,e.brass.normalScale.set(.4,.4);const n=new Map;function r(B,rt,ft,Et,F,ot,j){const nt=new Ft(F,ot,j);nt.translate(rt,ft,Et),n.has(B)||n.set(B,[]),n.get(B).push(nt)}const s=[];let a=null;const o=3.6;let l=null;const c=me({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});c.side=tn;const h=new Set(["pew-1","pew-2","pew-3","pew-4","altar","fountain-n","fountain-s-l","fountain-s-r","fountain-w","fountain-e"]);for(const B of Jc){if(B.veil){l=new gt(new Ft(B.w,B.h,B.d),c),l.position.set(B.x,B.y,B.z),l.visible=!1,i.add(l);continue}if(B.door){a=new Le;const rt=new gt(new Ft(B.w*.92,B.h*.98,B.d*.62),me({color:15196370,roughness:.58,metalness:.08,envMapIntensity:.35})),ft=me({color:14012098,roughness:.66,metalness:.05});for(const j of[-B.h*.18,B.h*.16]){const nt=new gt(new Ft(B.w*.62,B.h*.28,.045),ft);nt.position.set(0,j,B.d*.36),nt.castShadow=!0,a.add(nt)}const Et=new gt(Cn(new Ft(B.w,.16,B.d*.8)),e.brass);Et.position.y=B.h*.42;const F=new gt(Cn(new Ft(.14,B.h*.72,B.d*.78)),e.brass),ot=new gt(new Qe(1.7,.5),new ye({map:ic("RADIO","WING","#1c140c","#f0d48a")}));ot.position.set(0,.35,B.d*.42),a.add(rt,Et,F,ot),a.position.set(B.x,B.y,B.z),i.add(a);continue}if(!h.has(B.id)){if(B.phaseGate){const rt=new gt(new Ft(B.w,B.h,B.d),e.hazard);rt.position.set(B.x,B.y,B.z),rt.castShadow=!0,rt.receiveShadow=!0,i.add(rt),s.push(rt);continue}r(B.mat,B.x,B.y,B.z,B.w,B.h,B.d)}}r("runner",0,.02,-1.2,2.6,.02,18),r("dark",-7.4,1.3,-13.15,6.4,2.6,.4),r("dark",-5.2,1.3,-13.15,2.4,2.6,.4),r("dark",5.4,1.3,-13.15,2.4,2.6,.4),r("dark",8.6,1.3,-13.15,6.4,2.6,.4),r("runner",0,.025,-21.4,1.5,.02,12),r("brass",0,2.55,-2.15,.12,3.5,.12),r("brass",0,4.15,-2.15,1.35,.08,1.35),r("plant",-3.3,.28,-2.5,.7,.45,.7),r("plant",3.35,.28,1.4,.7,.45,.7),r("plant",-3.2,.55,2.4,.45,.7,.45),r("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const B of[-12,-4,4,12])for(const rt of[-8,0,8])r("metal",B,6.85,rt,1.6,.08,.28);for(let B=-14;B<=14;B+=2.2)r("metal",B,4.55,-10.45,.06,.7,.06);r("metal",0,4.55,-10.45,28,.05,.05);for(const[B,rt]of n){const ft=rt.length===1?rt[0]:ah(rt);e[B].normalMap&&Cn(ft);const Et=new gt(ft,e[B]);Et.castShadow=B!=="floor"&&B!=="ceiling"&&B!=="runner",Et.receiveShadow=!0,i.add(Et)}const f=me({map:t.floor,normalMap:t.floorNormal,roughnessMap:t.floorRough,roughness:1,metalness:.05});f.normalScale.set(.55,.55);function d(B,rt,ft,Et,F){rt.normalMap&&Cn(B);const ot=new gt(B,rt);return ot.position.set(ft,Et,F),ot.castShadow=!0,ot.receiveShadow=!0,i.add(ot),ot}function u(B,rt,ft,Et,F,ot){d(new Ft(Et,F*.78,ot*.92),f,B,rt-F*.08,ft),d(new Ft(Et*1.04,F*.18,ot*1.08),e.trim,B,rt+F*.4,ft)}u(0,.4,-2.2,4.5,.8,.5),u(-1.75,.4,2.05,1.7,.8,.5),u(1.75,.4,2.05,1.7,.8,.5),u(-2.25,.4,-.05,.5,.8,3.55),u(2.25,.4,-.05,.5,.8,3.55);const g=d(new kn([new vt(.15,.04),new vt(.7,.06),new vt(1.15,.1),new vt(1.38,.28),new vt(1.22,.4),new vt(1.05,.34)],32),me({map:t.trim,roughness:.55,metalness:.18,envMapIntensity:.45}),0,.02,-.05);g.castShadow=!0;const _=new gt(new sn(1.28,.045,8,28),e.brass);_.rotation.x=Math.PI/2,_.position.set(0,.36,-.05),_.castShadow=!0,i.add(_),d(new fe(.06,.09,.34,12),e.brass,0,.22,-.05);const m=new gt(new Ki(1.05,28),me({color:1977392,roughness:.08,metalness:.62,envMapIntensity:.9}));m.rotation.x=-Math.PI/2,m.position.set(0,.16,-.05),m.receiveShadow=!0,i.add(m);const p=new gt(new fe(.55,.7,.12,12),e.brass);p.position.set(0,4.28,-2.15),p.rotation.x=.55,p.castShadow=!0,i.add(p);const T=new gt(new Qe(1.15,.7),new ye({color:16757066}));T.position.set(10.7,1.85,-5.1),T.rotation.y=-Math.PI/2,i.add(T);const w=new gt(new Qe(1.7,1.7),me({map:t.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));w.rotation.x=-Math.PI/2,w.position.set(9.45,.03,0),w.receiveShadow=!0,i.add(w);const y=new gt(new Ft(5.4,2.2,.06),e.glass);y.position.set(9.4,1.8,8.7),i.add(y);const O=new gt(new Ft(.7,.45,.06),new ye({map:t.snow}));O.position.set(9.2,1.25,8.72),i.add(O);const P=O.clone();P.position.x=10.15,i.add(P);const I=new gt(new Ft(.08,.08,.08),new ye({color:16757066}));I.position.set(10.55,1.55,8.7),i.add(I);function L(B,rt,ft,Et,F,ot,j,nt,X,K){const it=new gt(new Qe(ot,j),new ye({map:ic(B,rt,X,K),transparent:!1}));return it.position.set(ft,Et,F),it.rotation.y=nt,i.add(it),it}L("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),L("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),L("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),L("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),L("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),L("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),L("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),L("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),L("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),L("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),L("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),L("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),L("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a");const M=new gt(new Qe(3.15,.34),me({map:t.seal,roughness:.38,metalness:.62,envMapIntensity:.55}));M.receiveShadow=!0,M.rotation.x=-Math.PI/2,M.position.set(0,.045,Rr),i.add(M);const v=$c[0],R=me({map:t.gold,normalMap:t.goldNormal,roughnessMap:t.goldRough,roughness:1,metalness:.8,emissive:13939034,emissiveIntensity:.12,envMapIntensity:.7}),N=new Le,V=new gt(Cn(new kn([new vt(.05,-.28),new vt(.09,-.08),new vt(.16,.08),new vt(.28,.24),new vt(.34,.32),new vt(.3,.36)],20)),R);V.rotation.z=-Math.PI/2,V.castShadow=!0;const G=new gt(new Ki(.26,16),me({color:2761752,roughness:.45,metalness:.4}));G.rotation.y=Math.PI/2,G.position.x=.34;const x=new gt(Cn(new fe(.055,.07,.36,12)),e.brass);x.rotation.z=Math.PI/2,x.position.x=-.42;const C=new gt(Cn(new Ft(.06,.36,.28)),e.brass);C.position.set(-.62,0,0),C.castShadow=!0;const U=new gt(Cn(new Ft(.1,.08,.16)),e.brass);U.position.set(-.62,-.2,0);const D=new gt(new Re(.07,12,10),new ye({color:16757066}));D.position.x=.28;const Y=new gt(new sn(.55,.03,8,24),new ye({color:16773576,transparent:!0,opacity:0,depthWrite:!1}));Y.rotation.y=Math.PI/2,N.add(V,G,x,C,U,D,Y);for(const[B,rt]of[[-.05,.1],[.08,.16],[.2,.26]]){const ft=new gt(new sn(rt,.012,6,16),e.brass);ft.rotation.y=Math.PI/2,ft.position.x=B,ft.castShadow=!0,N.add(ft)}N.position.set(v.x,v.y,v.z),i.add(N);const et=new Ir(16757082,7,5.5,2);et.position.set(v.x+.4,v.y,v.z),i.add(et);function ht(B,rt){const ft=new gt(new fe(.035,.05,.46,6),e.brass);ft.position.set(B,.28,rt);const Et=new gt(new Re(.045,6,6),new ye({color:16757066}));Et.position.set(B,.54,rt),i.add(ft,Et)}ht(-4.9,-18.2),ht(4.9,-18.2),ht(-4.9,-20.45),ht(4.9,-20.45),ht(-1.35,-27.15),ht(1.35,-27.15);const At=new gt(new Qe(15.2,13.2),me({map:t.nave,normalMap:t.naveNormal,roughnessMap:t.naveRough,roughness:1,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));At.material.normalScale.set(.8,.8),Cn(At.geometry),At.rotation.x=-Math.PI/2,At.position.set(0,.018,-21.55),At.receiveShadow=!0,i.add(At);const kt=new fe(.028,.028,2.28,10);kt.rotateZ(Math.PI/2);const J=new fe(.03,.03,2.32,12);J.rotateZ(Math.PI/2);const at=new fe(.62,.62,2.22,16,1,!0,-.42,.84);at.rotateZ(Math.PI/2);function _t(B,rt){d(new Ft(2.32,.05,.32),e.wood,B,.46,rt-.04),d(J,e.wood,B,.45,rt-.2);for(const Et of[-1.02,1.02])d(new Ft(.055,.4,.05),e.wood,B+Et,.22,rt-.12),d(new Ft(.055,.4,.05),e.wood,B+Et,.22,rt+.06);for(const Et of[-1.2,1.2])d(new Ft(.07,.82,.4),e.wood,B+Et,.44,rt+.02);const ft=d(at,e.wood,B,.68,rt-.36);ft.castShadow=!0,d(kt,e.wood,B,.9,rt+.2),d(new Ft(2.05,.028,.1),e.wood,B,.3,rt+.04),d(new Ft(1.9,.035,.07),e.wood,B,.16,rt-.02)}for(const[B,rt]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])_t(B,rt);d(new Ft(2.15,.16,.62),f,0,.1,-27.55),d(new Ft(1.82,.2,.5),f,0,.27,-27.55),d(new Ft(1.5,.18,.4),f,0,.45,-27.55),d(new Ft(2.2,.07,.66),e.brass,0,.62,-27.55);const ct=d(new Ft(1.35,.32,.035),e.brass,0,.36,-27.26);ct.position.z=-27.26;const Q=new gt(new sn(.15,.016,8,20),e.brass);Q.position.set(0,.38,-27.22),i.add(Q);for(const B of[-.72,.72]){d(new fe(.028,.04,.22,8),e.brass,B,.76,-27.52);const rt=new gt(new Re(.035,8,6),new ye({color:16757066}));rt.position.set(B,.9,-27.52),rt.castShadow=!1,i.add(rt)}const wt=document.createElement("canvas");wt.width=64,wt.height=64;const Tt=wt.getContext("2d"),$t=Tt.createRadialGradient(32,32,4,32,32,32);$t.addColorStop(0,"rgba(0,0,0,0.38)"),$t.addColorStop(1,"rgba(0,0,0,0)"),Tt.fillStyle=$t,Tt.fillRect(0,0,64,64);const Vt=new sr(wt),te=new ye({map:Vt,transparent:!0,depthWrite:!1});function z(B,rt,ft){const Et=new gt(new Ki(B,18),te);Et.rotation.x=-Math.PI/2,Et.position.set(rt,.028,ft),i.add(Et)}z(1.7,0,-.05),z(1.3,0,-27.55);for(const[B,rt]of[[-3.15,-18.2],[-3.15,-20.45],[3.15,-18.2],[3.15,-20.45]])z(1.2,B,rt);const ie=fo.find(B=>B.kind==="signal"),Nt=fo.find(B=>B.kind==="health"),zt=new Le,Pt=new gt(new Ft(.38,.28,.38),e.brass),Jt=new gt(new Ft(.16,.16,.16),new ye({color:16757066}));Jt.position.y=.22,zt.add(Pt,Jt),zt.position.set(ie.x,.35,ie.z),i.add(zt);const bt=new Le,b=new gt(new Ft(.36,.22,.26),me({color:15196888,roughness:.6})),S=new gt(new Ft(.22,.04,.28),me({color:9255466,roughness:.5}));S.position.y=.08,bt.add(b,S),bt.position.set(Nt.x,.2,Nt.z),i.add(bt);const q=new U0(15261908,3813928,.74);i.add(q);const $=new Xl(16773596,2.35);$.position.set(8,18,10),$.castShadow=!0,$.shadow.mapSize.set(1024,1024),$.shadow.camera.near=2,$.shadow.camera.far=48,$.shadow.camera.left=-16,$.shadow.camera.right=16,$.shadow.camera.top=16,$.shadow.camera.bottom=-16,$.shadow.bias=-4e-4,$.shadow.normalBias=.035,$.shadow.radius=2,$.target.position.set(0,0,-8),i.add($,$.target);const st=new Xl(16769732,.7);st.position.set(-10,8,-6),st.castShadow=!1,i.add(st);const tt=[];function mt(B,rt,ft,Et=36,F=8){const ot=new Ir(16757082,Et,F,2);return ot.position.set(B,rt,ft),i.add(ot),tt.push(ot),ot}mt(0,3.2,-2.1,18,7),mt(-10,2.4,8.2,28,8),mt(9.2,2.6,8.4,26,7),mt(13.5,2.8,-5,34,8),mt(-6,3.4,-8,22,8),mt(4,3.4,-8,20,8),mt(0,5.2,2,30,14),mt(0,4.4,-21.5,34,16),mt(0,3.3,-26.4,16,7);const ut=mt(13.4,2.6,1.2,24,6);let pt=0,Bt=0,lt=!1,xt=!1,Rt=0,Ot=0;return i.background=new Wt(11774879),i.fog=new Po(11774879,12,40),{colliders:Qc(),gates:s,cache:zt,aid:bt,textures:t,setDoor(B,rt=!1){Bt=B?1:0,rt&&(pt=Bt,a&&(a.position.y=o+pt*6.4))},setVeil(B,rt){if(!l||(l.visible=!!B,!B))return;const ft=rt==="DEAD_AIR";c.opacity=ft?.16:.94,c.depthWrite=!ft,c.emissiveIntensity=ft?.62:.3},setHijack({aimed:B,hot:rt}){lt=!!B,xt=!!rt},pulseHijack(){Rt=.48},setChannel(B){const rt=i.fog;B==="STATIC"?(rt.color.setHex(10133668),rt.near=12,rt.far=38,i.background.setHex(9475738)):B==="DEAD_AIR"?(rt.color.setHex(2764856),rt.near=10,rt.far=36,i.background.setHex(2369584)):(rt.color.setHex(11774879),rt.near=12,rt.far=40,i.background.setHex(11774879));for(const ft of s)ft.material.opacity=B==="DEAD_AIR"?.14:.97,ft.material.depthWrite=B!=="DEAD_AIR",ft.material.emissiveIntensity=B==="DEAD_AIR"?.45:.18},setPickup(B,rt){B==="cache"&&(zt.visible=rt),B==="aid"&&(bt.visible=rt)},update(B,rt,ft){if(ft){const ot=Math.round(ft.x/4)*4,j=Math.round(ft.z/4)*4;$.position.set(ot+8,18,j+10),$.target.position.set(ot,0,j)}const Et=Math.min(.05,Math.max(0,B-Ot||0));if(Ot=B,pt+=(Bt-pt)*Math.min(1,Et*4.2),a&&(a.position.y=o+pt*6.4),Rt>0&&(Rt=Math.max(0,Rt-Et)),Y.material.opacity=Rt>0?Rt/.48:0,Y.scale.setScalar(Rt>0?1+(1-Rt/.48)*2.4:1),R.emissive.setHex(xt?16774877:13939034),R.emissiveIntensity=xt?1.15:lt?.85:.12,D.material.color.setHex(xt?16773576:16757066),et.color.setHex(xt?16769696:16757082),et.intensity=xt?22:lt?14:7,ut.intensity=18+Math.sin(B*28)*10+(Math.random()<.04?-12:0),rt==="STATIC"){const F=1+Math.sin(B*6)*.08;zt.scale.setScalar(F)}else zt.scale.setScalar(1);T.material.color.setHSL(.09,.85,rt==="DEAD_AIR"?.18:.55)},practicals:tt}}const rc="channel-surfer-best",Vg={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},Gg={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function sc(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ac(i,t,e,n){return i+(t-i)*(1-Math.exp(-12*n))}function ya(i,t){const e=Math.cos(t),n=Math.sin(t),r=Math.sin(i),s=Math.cos(i),a={x:-r*e,y:n,z:-s*e},o={x:s,y:0,z:-r},l={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:l}}function Wg(i,t){const e=new b0({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(960,780,!1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.outputColorSpace=De,e.toneMapping=vc,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=dc;const n=new Xc,r=new co(e);n.environment=r.fromScene(new O0,.012).texture,r.dispose();const s=new Je(72,960/780,.08,90);n.add(s);const a=new Ir(16770756,14,4.5,2);a.position.set(.05,.02,-.25),s.add(a);const o=Hg(n),l=new ti(n,s,480,390,8);l.kernelRadius=.18,l.minDistance=.001,l.maxDistance=.06;const c=bg(n,o.textures),h=zg(s,o.textures),f=72,d=new Float32Array(f*3),u=new Float32Array(f*3),g=new Me;g.setAttribute("position",new Fe(d,3)),g.setAttribute("color",new Fe(u,3));const _=new I0(g,new jc({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));n.add(_);const m=document.createElement("canvas");m.width=64,m.height=64;const p=m.getContext("2d"),T=p.createRadialGradient(32,32,1,32,32,30);T.addColorStop(0,"rgba(255,255,255,1)"),T.addColorStop(.35,"rgba(255,214,150,0.75)"),T.addColorStop(1,"rgba(255,160,60,0)"),p.fillStyle=T,p.fillRect(0,0,64,64);const w=new sr(m);w.colorSpace=De;const y=[];for(let X=0;X<12;X++){const K=new R0(new qc({map:w,transparent:!0,depthWrite:!1,blending:bs}));K.visible=!1,K.frustumCulled=!1,n.add(K),y.push(K)}const O=28,P=new Float32Array(O*6),I=new Float32Array(O*6),L=new Me;L.setAttribute("position",new Fe(P,3)),L.setAttribute("color",new Fe(I,3)),n.add(new D0(L,new Zc({vertexColors:!0,transparent:!0,opacity:.95})));let M="title",v=null,R=[],N=null,V=[],G=[],x=!1,C=!1,U=!1,D=1.25,Y=0,et=0,ht=!1,At="",kt="",J="",at=[],_t=[],ct=[],Q={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},wt=sc(1),Tt=0,$t=0,Vt=0,te=0,z=0,ie=0,Nt=0,zt="",Pt=0,Jt=0,bt="",b=0;const S=[],q=new Set;let $=0,st="",tt=!1;try{$=Number(localStorage.getItem(rc))||0}catch(X){$=0}function mt(X,K,it,Mt,Ct){for(let Xt=0;Xt<Ct;Xt++)at.push({x:X,y:K,z:it,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:Mt});at.length>f&&at.splice(0,at.length-f),_t.push({x:X,y:K,z:it,life:.14,max:.14,color:Mt}),_t.length>y.length&&_t.shift()}function ut(X){zt=X,Pt=.95,Jt+=1}function pt(X,K){q.has(X)||(q.add(X),S.push(K))}function Bt(X){st!==X&&(st=X,o.setChannel(X),h.setChannel(X),t.setChannel(X))}function lt(){return Qc({doorOpen:x,veilUp:!!(N&&N.alive&&N.veilUp)})}function xt(X){return{x:X.x,y:X.y,z:X.z,yaw:X.yaw||0,pitch:0,vx:0,vz:0}}function Rt(){v=ql(),R=[...eh(),...Is()],N=ec(),V=J0(),x=!1,C=!1,U=!1,D=1.25,Y=0,et=0,ht=!1,At="",kt="",J="",G=[],at=[],_t=[],ct=[],Q=xt(X0),wt=sc((Date.now()&65535)+3),Tt=0,Vt=0,te=.2,z=0,ie=0,Nt=0,tt=!1,zt="",Pt=0,bt="",b=0,S.length=0,q.clear(),c.reset(R),c.resetPriest(N),o.setDoor(!1,!0),o.setVeil(!1,"LIVE"),Bt("LIVE")}function Ot(){v={...ql(),signal:80},R=[...R.filter(X=>X.room!=="chapel"),...Is().map(X=>({...X,dormant:!1}))],N={...ec(),active:!0},x=!0,U=!1,D=1.25,Y=0,et=0,ht=!1,At="",kt="",J="",G=[],at=[],_t=[],ct=[],Q=xt(q0),te=.45,tt=!1,C=!1,Nt=0,ie=0,z=0,c.reset(R),c.resetPriest(N),o.setDoor(!0,!0),o.setVeil(!1,"LIVE"),Bt("LIVE"),ut("RADIO WING")}Rt();function B(){if(Tt>0&&!($>0&&Tt>=$)){$=Tt;try{localStorage.setItem(rc,String($))}catch(X){}}}function rt(X,K){const it=ng(v,X);it.result==="ok"?(v=it.state,Vt+=1,Nt=.45,ut(Vg[v.channel]),t.play(Gg[v.channel]),Bt(v.channel)):it.result==="denied"&&(ut("NO SIGNAL"),t.play("deny"))}function ft(){const X=sg(v);if(v=X.state,!X.fired)return;const{forward:K,right:it,up:Mt}=ya(Q.yaw,Q.pitch),Ct={x:Q.x,y:Q.y,z:Q.z},Xt=mg(K,it,Mt,X.profile.pellets,X.profile.spread,Math.random),_e={x:Ct.x+K.x*.42+it.x*.14-Mt.x*.1,y:Ct.y+K.y*.42+it.y*.14-Mt.y*.1,z:Ct.z+K.z*.42+it.z*.14-Mt.z*.1},Se=Tt<Y,Vn=X.profile.kind==="hitscan"||Se?[.45,.97,1]:[.82,.82,.82],ii=lt();let Ge=!1,yn=!1;z=Math.min(.07,z+(X.profile.kind==="spread"?.05:.014)),h.fire(X.profile.kind),t.play(X.profile.kind==="spread"?"static":"live");for(const cn of Xt){const ge=fg(Ct,cn,X.profile.range,R,ii),Ce=N.alive?Ug(Ct,cn,X.profile.range,N,v.channel):null,Gn=!!(Ce&&(!ge||Ce.t<ge.t)),We=Gn?Ce:ge,ze=Math.min(X.profile.range,22),Ze=We?{x:We.x,y:We.y,z:We.z}:{x:Ct.x+cn.x*ze,y:Ct.y+cn.y*ze,z:Ct.z+cn.z*ze};if((!We||We.t>.45)&&ct.push({a:_e,b:Ze,color:Vn,life:.16}),Gn){const A=Zl(X.profile.damage,Ce.t,X.profile.range,X.profile.falloff)*(Se?Qn.retuneMult:1),W=Lg(N,A);if(N=W.priest,W.dealt>0&&(Ge=!0),mt(Ce.x,Ce.y,Ce.z,Se?[.45,.97,1]:[.96,.94,.88],5),!W.killed){const Z=nc(N,{channel:v.channel,weak:Ce.weak,halo:Ce.halo,crossed:!1});Z.broken?(Et(Z),yn=!0):N=Z.priest}continue}if(!ge)continue;if(ge.kind==="world"){mt(ge.x,ge.y,ge.z,[.75,.68,.55],6);continue}const _n=R.findIndex(A=>A.id===ge.id);if(_n<0||!R[_n].alive)continue;const ri=dg(R[_n],Tt),Si=Zl(X.profile.damage,ge.t,X.profile.range,X.profile.falloff)*(Se?Qn.retuneMult:1),E=pg(ri.enemy,{weak:ge.weak,damage:Si});if(E.enemy.hurt=.1,R[_n]=E.enemy,Ge=E.dealt>0,mt(ge.x,ge.y,ge.z,[.96,.94,.9],8),E.killed){const A=og(v,{distance:ge.t,channel:v.channel,burst:ri.burst});v=A.state,mt(ge.x,ge.y,ge.z,[1,.68,.25],18),t.play("death"),ut(A.aggressive?"AGGRESSIVE +"+A.amount:"SIGNAL +"+A.amount)}}Ge&&!yn&&t.play("hit"),ct.length>O&&ct.splice(0,ct.length-O)}function Et(X){N=X.priest,X.broken&&(t.play("rite-break"),mt(N.x,2.15,N.z,[.96,.78,.32],20),Nt=Math.max(Nt,.34),N.alive&&ut("RITE BROKEN"))}function F(){const X=N.x,K=1.72,it=N.z,Mt=Q.x-X+(wt()-.5)*.22,Ct=1.15-K+(wt()-.5)*.12,Xt=Q.z-it+(wt()-.5)*.22,_e=Math.hypot(Mt,Ct,Xt)||1,Se=en.boltSpeed;return{x:X,y:K,z:it,vx:Mt/_e*Se,vy:Ct/_e*Se,vz:Xt/_e*Se,damage:en.boltDamage,life:2.6}}function ot(X,K){const it=ig(v,X);if(v=it.state,it.forced&&(ut("NO SIGNAL"),t.play("nosignal"),Nt=.55,Bt(v.channel)),K.channel)rt(K.channel);else if(K.cycle){const A=gn(K.cycle,-3,3),W=A>0?1:-1;for(let Z=0;Z!==A;Z+=W)rt(tg(v.channel,W))}Q.yaw-=K.lookX*.00215,Q.pitch=gn(Q.pitch-K.lookY*.00215,-1.35,1.35);const Mt=R.some(A=>A.alive&&A.room!=="chapel");if(!x&&!Mt&&(x=!0,ut("RADIO WING"),t.play("door"),pt("wing","North door is open. The radio wing is still on the air.")),x&&Q.z<-15.05){for(let A=0;A<R.length;A++)R[A].room==="chapel"&&R[A].dormant&&(R[A]={...R[A],dormant:!1});N.active||(N={...N,active:!0},pt("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}const Ct=$c[0],{forward:Xt}=ya(Q.yaw,Q.pitch),_e=!sh(Q.x,Q.y,Q.z,Ct.x,Ct.y,Ct.z,lt());ht=Ng({origin:{x:Q.x,y:Q.y,z:Q.z},dir:Xt,point:Ct,maxDist:Qn.maxDist,cone:Qn.cone,blocked:_e}).aimed;const Vn=Tt<Y,ii=et>Tt;if(ht?At=Vn?"PA RETUNED":ii?"PA RECHARGING":"E  RETUNE PA":At=Vn?"PA RETUNED":"",kt=Vn?"hot":ht&&ii?"cool":ht?"ready":"",K.use&&ht){const A=Fg({cooldownUntil:et},Tt);A.ok?(et=A.cooldownUntil,Y=Tt+Qn.retune,R=Og(R,Ct,Qn.radius,Qn.stun),ut("PA RETUNE"),t.play("hijack"),mt(Ct.x,Ct.y,Ct.z,[.45,.97,1],28),Nt=Math.max(Nt,.28),ie=Math.max(ie,.035),o.pulseHijack()):t.play("deny")}x&&Math.hypot(Q.x-Ct.x,Q.z-Ct.z)<8&&pt("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const Ge=Dg(N,X,{player:{x:Q.x,z:Q.z}});N=Ge.priest;for(const A of Ge.events)if(A.type==="announce")ut(tc(A.rite)),t.play("rite");else if(A.type==="fail"){const W=jl(v,A.damage);v=W.state,W.hit&&(t.play("rite-fail"),ie=Math.max(ie,.045)),ut("RITE HOLDS")}else A.type==="shot"&&G.length<16&&(G.push(F()),t.play("bolt"));J=N.alive&&N.phase==="rite"?tc(N.rite):"";const yn=lt();for(let A=0;A<R.length;A++){if(!R[A].alive)continue;const W=xg(R[A],X,{channel:v.channel,player:{x:Q.x,y:1.2,z:Q.z},colliders:yn,allies:R,rng:wt});R[A]=W.enemy,W.shot&&G.length<16&&(G.push(W.shot),t.play("bolt"))}const cn=nh(v.channel),ge=-Math.sin(Q.yaw),Ce=-Math.cos(Q.yaw),Gn=Math.cos(Q.yaw),We=-Math.sin(Q.yaw);let ze=0,Ze=0;K.forward&&(ze+=ge,Ze+=Ce),K.back&&(ze-=ge,Ze-=Ce),K.right&&(ze+=Gn,Ze+=We),K.left&&(ze-=Gn,Ze-=We);const _n=Math.hypot(ze,Ze);_n>0&&(ze=ze/_n*cn,Ze=Ze/_n*cn),Q.vx=ac(Q.vx,ze,12,X),Q.vz=ac(Q.vz,Ze,12,X);const ri=ih(Q.x,Q.z,Q.vx*X,Q.vz*X,ne.playerRadius,yn,v.channel,W0);if(Q.x=ri.x,Q.z=ri.z,N.alive&&N.phase==="rite"&&N.rite==="veil"&&v.channel==="DEAD_AIR"&&Q.z<Y0){const A=nc(N,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});A.broken&&Et(A)}te>0?te-=X:K.fireDown?v.channel==="DEAD_AIR"?tt||(tt=!0,t.play("deny"),h.fire("none")):(tt=!1,ft()):tt=!1;const Si=[];for(const A of G){const W=Math.hypot(A.vx,A.vy,A.vz)||1,Z=W*X,H=Lo(A.x,A.y,A.z,A.vx/W,A.vy/W,A.vz/W,Z,lt());if(H){mt(H.x,H.y,H.z,[1,.62,.22],3);continue}if(A.x+=A.vx*X,A.y+=A.vy*X,A.z+=A.vz*X,A.life-=X,A.life<=0||A.y<0||A.y>6)continue;const dt=A.x-Q.x,yt=A.z-Q.z;if(dt*dt+yt*yt<.4*.4&&A.y>.25&&A.y<1.75){const Dt=jl(v,A.damage);v=Dt.state,Dt.hit&&(t.play("hurt"),ie=.05,Nt=Math.max(Nt,.2)),mt(A.x,A.y,A.z,[1,.5,.18],6);continue}Si.push(A)}G=Si;for(const A of V){if(A.taken||!_g(A,v.channel)||Math.hypot(Q.x-A.x,Q.z-A.z)>1.15)continue;const W=gg(v,A);W.took&&(v=W.state,A.taken=!0,t.play("pickup"),ut(A.kind==="signal"?"SIGNAL CACHE":"AID KIT"))}Tt>.45&&pt("intro","LIVE — precise cyan bolt. Keys 1–3, wheel, or Q."),(Math.hypot(Q.x,Q.z)<7.5||Tt>11)&&pt("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot(Q.x-10.4,Q.z)<6.2||Tt>20)&&pt("gate","Striped shutter is DEAD AIR. You move faster and cannot fire."),Q.x>12.1&&V.some(A=>A.cloaked&&!A.taken)&&pt("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const E=R.filter(A=>A.alive&&A.room!=="chapel");if(E.length===1&&E[0].id==="alley"&&pt("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),b>0?(b-=X,b<=0&&(bt="")):S.length&&(bt=S.shift(),b=6.2),v.health<=0){C=x,M="dead",t.play("ui");return}!N.alive&&x?(U||(U=!0,R=R.map(A=>A.room==="chapel"&&A.alive?{...A,alive:!1,hittable:!1}:A),v=Io(v,40),ut("OFF THE AIR"),t.play("death"),mt(N.x,2.1,N.z,[.96,.8,.38],34),mt(N.x,2.75,N.z,[.9,.72,.28],16),D=1.25),D-=X,D<=0&&(M="clear",B(),t.play("pickup"))):D=1.25}function j(X){for(let K=at.length-1;K>=0;K--){const it=at[K];it.life-=X,it.vy-=7*X,it.x+=it.vx*X,it.y+=it.vy*X,it.z+=it.vz*X,it.life<=0&&at.splice(K,1)}for(let K=0;K<f;K++){const it=at[K],Mt=K*3;if(!it){d[Mt+1]=-40,u[Mt]=u[Mt+1]=u[Mt+2]=0;continue}d[Mt]=it.x,d[Mt+1]=it.y,d[Mt+2]=it.z;const Ct=gn(it.life*3,0,1);u[Mt]=it.color[0]*Ct,u[Mt+1]=it.color[1]*Ct,u[Mt+2]=it.color[2]*Ct}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0;for(let K=_t.length-1;K>=0;K--)_t[K].life-=X,_t[K].life<=0&&_t.splice(K,1);for(let K=0;K<y.length;K++){const it=y[K],Mt=_t[K];if(!Mt){it.visible=!1;continue}const Ct=Mt.life/Mt.max;it.visible=!0,it.position.set(Mt.x,Mt.y,Mt.z),it.scale.setScalar(.18+(1-Ct)*.55),it.material.opacity=Ct,it.material.color.setRGB(Mt.color[0],Mt.color[1],Mt.color[2])}for(let K=ct.length-1;K>=0;K--)ct[K].life-=X,ct[K].life<=0&&ct.splice(K,1);for(let K=0;K<O;K++){const it=ct[K],Mt=K*6;if(!it){P[Mt+1]=-40,P[Mt+4]=-40;continue}P[Mt]=it.a.x,P[Mt+1]=it.a.y,P[Mt+2]=it.a.z,P[Mt+3]=it.b.x,P[Mt+4]=it.b.y,P[Mt+5]=it.b.z;for(let Ct=0;Ct<2;Ct++)I[Mt+Ct*3]=it.color[0],I[Mt+Ct*3+1]=it.color[1],I[Mt+Ct*3+2]=it.color[2]}L.attributes.position.needsUpdate=!0,L.attributes.color.needsUpdate=!0}function nt(X){if(M==="title"){s.position.set(Math.sin($t*.16)*.5,2.5,9.3),s.lookAt(0,1.2,-1.4),h.setVisible(!1);return}h.setVisible(!0),ie*=Math.exp(-9*X),z*=Math.exp(-11*X),s.position.set(Q.x+(Math.random()-.5)*ie,Q.y,Q.z+(Math.random()-.5)*ie),s.rotation.order="YXZ",s.rotation.y=Q.yaw,s.rotation.x=Q.pitch-z,s.rotation.z=0;const{right:K}=ya(Q.yaw,0),it=M==="play"?Q.vx*K.x+Q.vz*K.z:0;h.update(X,M==="play"?Math.hypot(Q.vx,Q.vz):0,{strafe:it})}return{get mode(){return M},start(){Rt(),M="play",t.play("ui")},resume(){M==="pause"&&(M="play")},pause(){M==="play"&&(M="pause")},replay(){C?Ot():Rt(),M="play",t.play("ui")},toTitle(){Rt(),M="title"},update(X,K){const it=Math.min(.05,Math.max(0,X)||0);$t+=it,M==="play"&&(Tt+=it,ot(it,K)),Pt>0&&(Pt-=it,Pt<=0&&(zt="")),Nt=Math.max(0,Nt-it*3.2),Bt(M==="title"?"LIVE":v.channel);const Mt=V.find(_e=>_e.cloaked),Ct=V.find(_e=>_e.kind==="health");o.setPickup("cache",!!(Mt&&!Mt.taken&&v.channel==="STATIC"&&M!=="title")),o.setPickup("aid",!!(Ct&&!Ct.taken)),o.setDoor(x),o.setVeil(!!(N.alive&&N.veilUp),M==="title"?"LIVE":v.channel),o.setHijack({aimed:M==="play"&&ht,hot:M==="play"&&Tt<Y}),o.update($t,v.channel,Q),c.sync(R,it,$t,v.channel),c.syncPriest(N,it,$t,M==="title"?"LIVE":v.channel),c.syncBolts(G),j(it),nt(it);const Xt=M==="title"?"LIVE":v.channel;l.kernelRadius=Xt==="DEAD_AIR"?.05:.18,l.maxDistance=Xt==="DEAD_AIR"?.02:.06,e.render(n,s),e.shadowMap.autoUpdate=!1,l.renderToScreen=!0,l.render(e),e.shadowMap.autoUpdate=!0,e.setRenderTarget(null)},hud(){const X=Q.z<-14.85,K=R.filter(Ct=>Ct.alive&&Ct.room!=="chapel").length,it=R.filter(Ct=>Ct.alive&&Ct.room==="chapel").length+(N.alive?1:0),Mt=M==="play";return{mode:M,health:v.health,signal:v.signal,channel:v.channel,enemies:X?it:K,roomLabel:X?"RADIO":"COURT",countLabel:X?"ON AIR":"TESSERA",tip:bt,banner:zt,bannerSerial:Jt,flash:Nt,hurt:v.hurtTimer,time:Tt,best:$,swaps:Vt,muted:t.muted,prompt:Mt?At:"",promptKind:Mt?kt:"",rite:Mt?J:"",boss:X&&N.alive?N.hp/N.maxHp:null,checkpoint:C}}}}const Xg=960,qg=780,dh=document.getElementById("stage"),Ls=document.getElementById("view"),Lr=mh();let Kt;try{Kt=Wg(Ls,Lr)}catch(i){const t=document.getElementById("boot-error");throw t&&(t.textContent="The picture failed to come up. "+(i&&i.message?i.message:"")),i}const qi=new Set,Ee={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let oc=-1;const Yg=document.getElementById("health-fill"),Zg=document.getElementById("health-num"),jg=document.getElementById("signal-fill"),Kg=document.getElementById("signal-num"),$g=document.getElementById("ch-name"),Jg=document.getElementById("enemy-count"),Qg=document.getElementById("room-label"),t_=document.getElementById("count-label"),e_=document.getElementById("rite"),lc=document.getElementById("prompt"),cc=document.getElementById("boss-wrap"),n_=document.getElementById("boss-fill"),i_=document.getElementById("tip"),ms=document.getElementById("banner"),hc=document.getElementById("hurt"),r_=document.getElementById("flash"),s_=document.getElementById("panel"),gs=document.getElementById("panel-kicker"),_s=document.getElementById("panel-title"),vs=document.getElementById("panel-body"),xs=document.getElementById("panel-meta"),Tr=document.getElementById("panel-primary"),wr=document.getElementById("panel-secondary");function No(){const i=Math.min(window.innerWidth/Xg,window.innerHeight/qg);dh.style.transform=`scale(${Math.max(.05,i)})`}No();window.addEventListener("resize",No);window.addEventListener("orientationchange",No);function $i(){document.pointerLockElement!==Ls&&Ls.requestPointerLock()}function Os(){Lr.ensure(),Kt.mode==="title"?(Kt.start(),$i()):Kt.mode==="pause"?(Kt.resume(),$i()):(Kt.mode==="clear"||Kt.mode==="dead")&&(Kt.replay(),$i())}document.getElementById("start").addEventListener("click",i=>{i.stopPropagation(),Os()});Tr.addEventListener("click",i=>{i.stopPropagation(),Os()});wr.addEventListener("click",i=>{i.stopPropagation(),Lr.ensure(),(Kt.mode==="pause"||Kt.mode==="clear"||Kt.mode==="dead")&&(Kt.mode==="pause"?Kt.replay():Kt.toTitle(),Kt.mode==="play"&&$i())});window.addEventListener("keydown",i=>{if(i.repeat)return;(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),qi.add(i.code);const t=Q0(i.code);t&&Kt.mode==="play"&&(Ee.channel=t),i.code==="KeyQ"&&Kt.mode==="play"&&(Ee.cycle+=1),i.code==="KeyE"&&Kt.mode==="play"&&(Ee.use=!0),i.code==="KeyM"&&Lr.toggle(),i.code==="Escape"&&Kt.mode==="play"&&Kt.pause(),i.code==="Enter"&&Os(),i.code==="KeyR"&&(Kt.mode==="pause"||Kt.mode==="clear"||Kt.mode==="dead")&&(Lr.ensure(),Kt.replay(),$i())});window.addEventListener("keyup",i=>qi.delete(i.code));window.addEventListener("mousemove",i=>{Kt.mode==="play"&&(Ee.lookX+=i.movementX||0,Ee.lookY+=i.movementY||0)});window.addEventListener("mousedown",i=>{if(i.button===0&&!(i.target.closest&&i.target.closest("button"))){if(Kt.mode==="title"){Os();return}Kt.mode==="play"&&($i(),Ee.fire=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(Ee.fire=!1)});window.addEventListener("wheel",i=>{i.preventDefault(),!(Kt.mode!=="play"||Math.abs(i.deltaY)<4)&&(Ee.cycle+=i.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==Ls&&Kt.mode==="play"&&Kt.pause()});window.addEventListener("blur",()=>{Kt.mode==="play"&&(Kt.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&Kt.mode==="play"&&(Kt.pause(),document.pointerLockElement&&document.exitPointerLock())});function xr(i){return i>0?i.toFixed(1)+"s":"—"}function a_(i){const t=i.channel==="DEAD_AIR"?"ch-dead":i.channel==="STATIC"?"ch-static":"ch-live";dh.className=`mode-${i.mode} ${t}`,Yg.style.width=Math.max(0,i.health)+"%",jg.style.width=Math.max(0,i.signal)+"%",Zg.textContent=String(Math.ceil(i.health)),Kg.textContent=String(Math.ceil(i.signal)),$g.textContent=i.channel==="DEAD_AIR"?"DEAD AIR":i.channel,Jg.textContent=String(i.enemies),Qg.textContent=i.roomLabel||"COURT",t_.textContent=i.countLabel||"TESSERA",e_.textContent=i.rite||"",lc.textContent=i.prompt||"",lc.className=i.promptKind||"",i.boss==null?cc.classList.remove("on"):(cc.classList.add("on"),n_.style.width=Math.max(0,Math.min(100,i.boss*100))+"%"),i_.textContent=i.tip||"",hc.style.opacity=i.health<35?"0.28":"0",i.hurt>.2&&(hc.style.opacity="0.55"),r_.style.opacity=String(Math.max(0,Math.min(.7,i.flash))),i.bannerSerial!==oc&&(oc=i.bannerSerial,i.banner&&(ms.textContent=i.banner,ms.classList.remove("show"),ms.offsetWidth,ms.classList.add("show")));const e=i.mode==="pause"||i.mode==="clear"||i.mode==="dead";s_.hidden=!e,e&&(i.mode==="pause"?(gs.textContent="KRCD 7 · STILL ON AIR",_s.textContent="PAUSED",vs.textContent="Esc released the mouse. Click resume to lock it again.",xs.textContent=i.muted?"MUTED":"",Tr.textContent="Resume",wr.textContent="Restart"):i.mode==="clear"?(gs.textContent="KRCD 7 · RADIO",_s.textContent="WING CLEAR",vs.textContent="The Visor Priest is off the air. The mall is still broadcasting.",xs.textContent=`TIME ${xr(i.time)} · BEST ${xr(i.best)} · ${i.swaps} CHANNEL CHANGES`,Tr.textContent="Replay",wr.textContent="Title"):i.checkpoint?(gs.textContent="KRCD 7 · RADIO",_s.textContent="WING LOST",vs.textContent="The court stays clear. Retry from the radio door.",xs.textContent=`TIME ${xr(i.time)} · BEST ${xr(i.best)}`,Tr.textContent="Retry wing",wr.textContent="Title"):(gs.textContent="KRCD 7 · NO CARRIER",_s.textContent="SIGNAL LOST",vs.textContent="The court keeps the carrier. Retune and walk it again.",xs.textContent=`BEST ${xr(i.best)}`,Tr.textContent="Retry",wr.textContent="Title"))}let uc=performance.now();function ph(i){const t=Math.min(.05,(i-uc)/1e3);uc=i,document.hidden||(Kt.update(t,{forward:qi.has("KeyW"),back:qi.has("KeyS"),left:qi.has("KeyA"),right:qi.has("KeyD"),lookX:Ee.lookX,lookY:Ee.lookY,fireDown:Ee.fire&&Kt.mode==="play",channel:Ee.channel,cycle:Ee.cycle,use:Ee.use}),a_(Kt.hud())),Ee.lookX=0,Ee.lookY=0,Ee.channel=null,Ee.cycle=0,Ee.use=!1,requestAnimationFrame(ph)}requestAnimationFrame(ph);
