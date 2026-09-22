(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const mo="channel-surfer-mute";function Vc(){const i=typeof window!="undefined"?window.AudioContext||window.webkitAudioContext:null;let t=null,e=null,n=null,r=null,s=null,a=!1,o=!1;try{o=localStorage.getItem(mo)==="1"}catch(m){o=!1}function l(){if(!i)return null;if(!t){t=new i,e=t.createGain(),e.gain.value=o?0:.85,n=t.createBiquadFilter(),n.type="lowpass",n.frequency.value=16e3,n.connect(e),e.connect(t.destination);const m=t.createBuffer(1,t.sampleRate*2,t.sampleRate),p=m.getChannelData(0);for(let x=0;x<p.length;x++)p[x]=Math.random()*2-1;const g=t.createBufferSource();g.buffer=m,g.loop=!0;const _=t.createBiquadFilter();_.type="highpass",_.frequency.value=1200,r=t.createGain(),r.gain.value=0,g.connect(_),_.connect(r),r.connect(n),g.start(),s=t.createGain(),s.gain.value=.018;const c=t.createOscillator(),h=t.createOscillator();c.type="sine",h.type="triangle",c.frequency.value=55,h.frequency.value=82.4,c.connect(s),h.connect(s),s.connect(n),c.start(),h.start()}return t.state==="suspended"&&t.resume(),a=!0,t}function u(m,p){const g=t.createGain(),_=t.currentTime;return g.gain.setValueAtTime(1e-4,_),g.gain.exponentialRampToValueAtTime(Math.max(2e-4,p),_+.012),g.gain.exponentialRampToValueAtTime(1e-4,_+Math.max(.03,m)),g.connect(n),g}function f(m,p,g,_,c){if(!a||!t||o)return;const h=t.createOscillator();h.type=g;const x=t.currentTime;h.frequency.setValueAtTime(m,x),c&&h.frequency.exponentialRampToValueAtTime(Math.max(30,c),x+p),h.connect(u(p,_)),h.start(),h.stop(x+p+.03)}function d(m,p,g){if(!a||!t||o)return;const _=Math.max(1,Math.floor(t.sampleRate*m)),c=t.createBuffer(1,_,t.sampleRate),h=c.getChannelData(0);for(let D=0;D<_;D++)h[D]=Math.random()*2-1;const x=t.createBufferSource();x.buffer=c;const E=t.createBiquadFilter();E.type="bandpass",E.frequency.value=g,E.Q.value=.7;const M=u(m,p);x.connect(E),E.connect(M),x.start()}return{ensure:l,get muted(){return o},toggle(){o=!o,e&&(e.gain.value=o?0:.85);try{localStorage.setItem(mo,o?"1":"0")}catch(m){}return o},setChannel(m){if(!a||!t)return;const p=t.currentTime,g=m==="DEAD_AIR"?380:m==="STATIC"?3800:15e3;n.frequency.linearRampToValueAtTime(g,p+.07),r.gain.linearRampToValueAtTime(m==="STATIC"?.02:0,p+.08),s.gain.linearRampToValueAtTime(m==="DEAD_AIR"?.028:.016,p+.1)},play(m){if(!(!a||o))switch(m){case"live":d(.045,.14,2400),f(940,.08,"square",.045,360);break;case"static":d(.13,.22,640);break;case"deny":f(86,.09,"sine",.07,48);break;case"switch-live":f(523,.11,"square",.04),f(784,.13,"square",.03);break;case"switch-static":d(.08,.1,500),f(190,.12,"sawtooth",.03);break;case"switch-dead":f(74,.18,"sine",.07,42);break;case"hit":f(1500,.05,"square",.04,480);break;case"hurt":d(.11,.16,220),f(120,.16,"sawtooth",.05,60);break;case"death":d(.26,.18,280),f(210,.32,"triangle",.06,48);break;case"pickup":f(660,.08,"sine",.05),f(990,.12,"sine",.04);break;case"ui":f(480,.05,"square",.03);break;case"bolt":f(300,.09,"square",.03,130);break;case"nosignal":d(.16,.12,180);break;case"hijack":d(.18,.2,1800),f(680,.16,"sawtooth",.05,1400),f(220,.22,"square",.04,90);break;case"rite":f(196,.28,"sine",.05),f(247,.32,"sine",.035),f(392,.22,"triangle",.03);break;case"rite-break":d(.08,.16,1400),f(880,.12,"square",.05,420),f(1320,.16,"triangle",.04,700);break;case"rite-fail":f(98,.22,"sawtooth",.06,50),d(.14,.12,200);break;case"door":f(140,.18,"square",.04,70),f(420,.14,"sine",.04);break}}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="170",Wc=0,go=1,Xc=2,Wl=1,Xl=2,bn=3,Kn=0,Xe=1,en=2,qn=0,Ni=1,cs=2,_o=3,xo=4,qc=5,oi=100,Yc=101,Zc=102,Kc=103,$c=104,jc=200,Jc=201,Qc=202,tu=203,sa=204,aa=205,eu=206,nu=207,iu=208,ru=209,su=210,au=211,ou=212,lu=213,cu=214,oa=0,la=1,ca=2,zi=3,ua=4,ha=5,fa=6,da=7,ql=0,uu=1,hu=2,Yn=0,fu=1,du=2,pu=3,Yl=4,mu=5,gu=6,_u=7,Zl=300,ki=301,Hi=302,pa=303,ma=304,xs=306,pr=1e3,ci=1001,ga=1002,hn=1003,xu=1004,yr=1005,cn=1006,Es=1007,Xn=1008,Pn=1009,Kl=1010,$l=1011,mr=1012,$a=1013,ui=1014,wn=1015,xr=1016,ja=1017,Ja=1018,Gi=1020,jl=35902,Jl=1021,Ql=1022,un=1023,tc=1024,ec=1025,Fi=1026,Vi=1027,nc=1028,Qa=1029,ic=1030,to=1031,eo=1033,is=33776,rs=33777,ss=33778,as=33779,_a=35840,xa=35841,va=35842,Ma=35843,Sa=36196,ya=37492,Ea=37496,Ta=37808,ba=37809,Aa=37810,wa=37811,Ra=37812,Ca=37813,Pa=37814,La=37815,Da=37816,Ia=37817,Ua=37818,Na=37819,Fa=37820,Oa=37821,os=36492,Ba=36494,za=36495,rc=36283,ka=36284,Ha=36285,Ga=36286,vu=3200,Mu=3201,sc=0,Su=1,Wn="",Le="srgb",Xi="srgb-linear",vs="linear",ae="srgb",pi=7680,vo=519,yu=512,Eu=513,Tu=514,ac=515,bu=516,Au=517,wu=518,Ru=519,Va=35044,Mo="300 es",Rn=2e3,us=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ts=Math.PI/180,Wa=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Cu(i,t){return(i%t+t)%t}function bs(i,t,e){return(1-e)*i+e*t}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,r,s,a,o,l,u){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u)}set(t,e,n,r,s,a,o,l,u){const f=this.elements;return f[0]=t,f[1]=r,f[2]=o,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],f=n[4],d=n[7],m=n[2],p=n[5],g=n[8],_=r[0],c=r[3],h=r[6],x=r[1],E=r[4],M=r[7],D=r[2],w=r[5],A=r[8];return s[0]=a*_+o*x+l*D,s[3]=a*c+o*E+l*w,s[6]=a*h+o*M+l*A,s[1]=u*_+f*x+d*D,s[4]=u*c+f*E+d*w,s[7]=u*h+f*M+d*A,s[2]=m*_+p*x+g*D,s[5]=m*c+p*E+g*w,s[8]=m*h+p*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],f=t[8];return e*a*f-e*o*u-n*s*f+n*o*l+r*s*u-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],f=t[8],d=f*a-o*u,m=o*l-f*s,p=u*s-a*l,g=e*d+n*m+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*u-f*n)*_,t[2]=(o*n-r*a)*_,t[3]=m*_,t[4]=(f*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*l-u*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(As.makeScale(t,e)),this}rotate(t){return this.premultiply(As.makeRotation(-t)),this}translate(t,e){return this.premultiply(As.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Wt;function oc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){const i=hs("canvas");return i.style.display="block",i}const So={};function or(i){i in So||(So[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Du(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Iu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?vs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yo=[.64,.33,.3,.6,.15,.06],Eo=[.2126,.7152,.0722],To=[.3127,.329],bo=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Xi]:{primaries:yo,whitePoint:To,transfer:vs,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:Eo,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:yo,whitePoint:To,transfer:ae,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:Eo,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});let mi;class Uu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=hs("canvas")),mi.width=t.width,mi.height=t.height;const n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nu=0;class lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ws(r[a].image)):s.push(ws(r[a]))}else s=ws(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ws(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fu=0;class He extends qi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=ci,r=ci,s=cn,a=Xn,o=un,l=Pn,u=He.DEFAULT_ANISOTROPY,f=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Zn(),this.name="",this.source=new lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Zl;He.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],c=l[6],h=l[10];if(Math.abs(f-m)<.01&&Math.abs(d-_)<.01&&Math.abs(g-c)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+_)<.1&&Math.abs(g+c)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(u+1)/2,M=(p+1)/2,D=(h+1)/2,w=(f+m)/4,A=(d+_)/4,C=(g+c)/4;return E>M&&E>D?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=w/n,s=A/n):M>D?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=w/r,s=C/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=A/s,r=C/s),this.set(n,r,s,e),this}let x=Math.sqrt((c-g)*(c-g)+(d-_)*(d-_)+(m-f)*(m-f));return Math.abs(x)<.001&&(x=1),this.x=(c-g)/x,this.y=(d-_)/x,this.z=(m-f)/x,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ou extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new He(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cc extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bu extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],u=n[r+1],f=n[r+2],d=n[r+3];const m=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=f,t[e+3]=d;return}if(o===1){t[e+0]=m,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==m||u!==p||f!==g){let c=1-o;const h=l*m+u*p+f*g+d*_,x=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const D=Math.sqrt(E),w=Math.atan2(D,h*x);c=Math.sin(c*w)/D,o=Math.sin(o*w)/D}const M=o*x;if(l=l*c+m*M,u=u*c+p*M,f=f*c+g*M,d=d*c+_*M,c===1-o){const D=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=D,u*=D,f*=D,d*=D}}t[e]=l,t[e+1]=u,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],f=n[r+3],d=s[a],m=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+f*d+l*p-u*m,t[e+1]=l*g+f*m+u*d-o*p,t[e+2]=u*g+f*p+o*m-l*d,t[e+3]=f*g-o*d-l*m-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),f=o(r/2),d=o(s/2),m=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=m*f*d+u*p*g,this._y=u*p*d-m*f*g,this._z=u*f*g+m*p*d,this._w=u*f*d-m*p*g;break;case"YXZ":this._x=m*f*d+u*p*g,this._y=u*p*d-m*f*g,this._z=u*f*g-m*p*d,this._w=u*f*d+m*p*g;break;case"ZXY":this._x=m*f*d-u*p*g,this._y=u*p*d+m*f*g,this._z=u*f*g+m*p*d,this._w=u*f*d-m*p*g;break;case"ZYX":this._x=m*f*d-u*p*g,this._y=u*p*d+m*f*g,this._z=u*f*g-m*p*d,this._w=u*f*d+m*p*g;break;case"YZX":this._x=m*f*d+u*p*g,this._y=u*p*d+m*f*g,this._z=u*f*g-m*p*d,this._w=u*f*d-m*p*g;break;case"XZY":this._x=m*f*d-u*p*g,this._y=u*p*d-m*f*g,this._z=u*f*g+m*p*d,this._w=u*f*d+m*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],u=e[2],f=e[6],d=e[10],m=n+o+d;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,u=e._z,f=e._w;return this._x=n*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-n*u,this._z=s*f+a*u+n*l-r*o,this._w=a*f-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),d=Math.sin((1-e)*f)/u,m=Math.sin(e*f)/u;return this._w=a*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*n),f=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*u+a*d-o*f,this.y=n+l*f+o*u-s*d,this.z=r+l*d+s*f-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rs.copy(this).projectOnVector(t),this.sub(Rs)}reflect(t){return this.sub(Rs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rs=new F,wo=new vr;class Mr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),Tr.subVectors(this.max,$i),gi.subVectors(t.a,$i),_i.subVectors(t.b,$i),xi.subVectors(t.c,$i),Fn.subVectors(_i,gi),On.subVectors(xi,_i),Qn.subVectors(gi,xi);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!Cs(e,gi,_i,xi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Cs(e,gi,_i,xi,Tr))?!1:(br.crossVectors(Fn,On),e=[br.x,br.y,br.z],Cs(e,gi,_i,xi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new F,new F,new F,new F,new F,new F,new F,new F],an=new F,Er=new Mr,gi=new F,_i=new F,xi=new F,Fn=new F,On=new F,Qn=new F,$i=new F,Tr=new F,br=new F,ti=new F;function Cs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ti.fromArray(i,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),l=t.dot(ti),u=e.dot(ti),f=n.dot(ti);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const zu=new Mr,ji=new F,Ps=new F;class Sr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ji,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Ps)),this.expandByPoint(ji.copy(t.center).sub(Ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new F,Ls=new F,Ar=new F,Bn=new F,Ds=new F,wr=new F,Is=new F;class no{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ls.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Ls);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ar),o=Bn.dot(this.direction),l=-Bn.dot(Ar),u=Bn.lengthSq(),f=Math.abs(1-a*a);let d,m,p,g;if(f>0)if(d=a*l-o,m=a*o-l,g=s*f,d>=0)if(m>=-g)if(m<=g){const _=1/f;d*=_,m*=_,p=d*(d+a*m+2*o)+m*(a*d+m+2*l)+u}else m=s,d=Math.max(0,-(a*m+o)),p=-d*d+m*(m+2*l)+u;else m=-s,d=Math.max(0,-(a*m+o)),p=-d*d+m*(m+2*l)+u;else m<=-g?(d=Math.max(0,-(-a*s+o)),m=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+m*(m+2*l)+u):m<=g?(d=0,m=Math.min(Math.max(-s,-l),s),p=m*(m+2*l)+u):(d=Math.max(0,-(a*s+o)),m=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+m*(m+2*l)+u);else m=a>0?-s:s,d=Math.max(0,-(a*m+o)),p=-d*d+m*(m+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ls).addScaledVector(Ar,m),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(n=(t.min.x-m.x)*u,r=(t.max.x-m.x)*u):(n=(t.max.x-m.x)*u,r=(t.min.x-m.x)*u),f>=0?(s=(t.min.y-m.y)*f,a=(t.max.y-m.y)*f):(s=(t.max.y-m.y)*f,a=(t.min.y-m.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(o=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,r,s){Ds.subVectors(e,t),wr.subVectors(n,t),Is.crossVectors(Ds,wr);let a=this.direction.dot(Is),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);const l=o*this.direction.dot(wr.crossVectors(Bn,wr));if(l<0)return null;const u=o*this.direction.dot(Ds.cross(Bn));if(u<0||l+u>a)return null;const f=-o*Bn.dot(Is);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,r,s,a,o,l,u,f,d,m,p,g,_,c){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u,f,d,m,p,g,_,c)}set(t,e,n,r,s,a,o,l,u,f,d,m,p,g,_,c){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=f,h[10]=d,h[14]=m,h[3]=p,h[7]=g,h[11]=_,h[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/vi.setFromMatrixColumn(t,0).length(),s=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const m=a*f,p=a*d,g=o*f,_=o*d;e[0]=l*f,e[4]=-l*d,e[8]=u,e[1]=p+g*u,e[5]=m-_*u,e[9]=-o*l,e[2]=_-m*u,e[6]=g+p*u,e[10]=a*l}else if(t.order==="YXZ"){const m=l*f,p=l*d,g=u*f,_=u*d;e[0]=m+_*o,e[4]=g*o-p,e[8]=a*u,e[1]=a*d,e[5]=a*f,e[9]=-o,e[2]=p*o-g,e[6]=_+m*o,e[10]=a*l}else if(t.order==="ZXY"){const m=l*f,p=l*d,g=u*f,_=u*d;e[0]=m-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*f,e[9]=_-m*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const m=a*f,p=a*d,g=o*f,_=o*d;e[0]=l*f,e[4]=g*u-p,e[8]=m*u+_,e[1]=l*d,e[5]=_*u+m,e[9]=p*u-g,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const m=a*l,p=a*u,g=o*l,_=o*u;e[0]=l*f,e[4]=_-m*d,e[8]=g*d+p,e[1]=d,e[5]=a*f,e[9]=-o*f,e[2]=-u*f,e[6]=p*d+g,e[10]=m-_*d}else if(t.order==="XZY"){const m=a*l,p=a*u,g=o*l,_=o*u;e[0]=l*f,e[4]=-d,e[8]=u*f,e[1]=m*d+_,e[5]=a*f,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*f,e[10]=_*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Hu)}lookAt(t,e,n){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),zn.crossVectors(n,Ye),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),zn.crossVectors(n,Ye)),zn.normalize(),Rr.crossVectors(Ye,zn),r[0]=zn.x,r[4]=Rr.x,r[8]=Ye.x,r[1]=zn.y,r[5]=Rr.y,r[9]=Ye.y,r[2]=zn.z,r[6]=Rr.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],f=n[1],d=n[5],m=n[9],p=n[13],g=n[2],_=n[6],c=n[10],h=n[14],x=n[3],E=n[7],M=n[11],D=n[15],w=r[0],A=r[4],C=r[8],T=r[12],v=r[1],R=r[5],z=r[9],U=r[13],V=r[2],j=r[6],q=r[10],tt=r[14],X=r[3],rt=r[7],ut=r[11],Mt=r[15];return s[0]=a*w+o*v+l*V+u*X,s[4]=a*A+o*R+l*j+u*rt,s[8]=a*C+o*z+l*q+u*ut,s[12]=a*T+o*U+l*tt+u*Mt,s[1]=f*w+d*v+m*V+p*X,s[5]=f*A+d*R+m*j+p*rt,s[9]=f*C+d*z+m*q+p*ut,s[13]=f*T+d*U+m*tt+p*Mt,s[2]=g*w+_*v+c*V+h*X,s[6]=g*A+_*R+c*j+h*rt,s[10]=g*C+_*z+c*q+h*ut,s[14]=g*T+_*U+c*tt+h*Mt,s[3]=x*w+E*v+M*V+D*X,s[7]=x*A+E*R+M*j+D*rt,s[11]=x*C+E*z+M*q+D*ut,s[15]=x*T+E*U+M*tt+D*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],f=t[2],d=t[6],m=t[10],p=t[14],g=t[3],_=t[7],c=t[11],h=t[15];return g*(+s*l*d-r*u*d-s*o*m+n*u*m+r*o*p-n*l*p)+_*(+e*l*p-e*u*m+s*a*m-r*a*p+r*u*f-s*l*f)+c*(+e*u*d-e*o*p-s*a*d+n*a*p+s*o*f-n*u*f)+h*(-r*o*f-e*l*d+e*o*m+r*a*d-n*a*m+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],f=t[8],d=t[9],m=t[10],p=t[11],g=t[12],_=t[13],c=t[14],h=t[15],x=d*c*u-_*m*u+_*l*p-o*c*p-d*l*h+o*m*h,E=g*m*u-f*c*u-g*l*p+a*c*p+f*l*h-a*m*h,M=f*_*u-g*d*u+g*o*p-a*_*p-f*o*h+a*d*h,D=g*d*l-f*_*l-g*o*m+a*_*m+f*o*c-a*d*c,w=e*x+n*E+r*M+s*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=x*A,t[1]=(_*m*s-d*c*s-_*r*p+n*c*p+d*r*h-n*m*h)*A,t[2]=(o*c*s-_*l*s+_*r*u-n*c*u-o*r*h+n*l*h)*A,t[3]=(d*l*s-o*m*s-d*r*u+n*m*u+o*r*p-n*l*p)*A,t[4]=E*A,t[5]=(f*c*s-g*m*s+g*r*p-e*c*p-f*r*h+e*m*h)*A,t[6]=(g*l*s-a*c*s-g*r*u+e*c*u+a*r*h-e*l*h)*A,t[7]=(a*m*s-f*l*s+f*r*u-e*m*u-a*r*p+e*l*p)*A,t[8]=M*A,t[9]=(g*d*s-f*_*s-g*n*p+e*_*p+f*n*h-e*d*h)*A,t[10]=(a*_*s-g*o*s+g*n*u-e*_*u-a*n*h+e*o*h)*A,t[11]=(f*o*s-a*d*s-f*n*u+e*d*u+a*n*p-e*o*p)*A,t[12]=D*A,t[13]=(f*_*r-g*d*r+g*n*m-e*_*m-f*n*c+e*d*c)*A,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*c-e*o*c)*A,t[15]=(a*d*r-f*o*r+f*n*l-e*d*l-a*n*m+e*o*m)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,u=s*a,f=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+n,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,u=s+s,f=a+a,d=o+o,m=s*u,p=s*f,g=s*d,_=a*f,c=a*d,h=o*d,x=l*u,E=l*f,M=l*d,D=n.x,w=n.y,A=n.z;return r[0]=(1-(_+h))*D,r[1]=(p+M)*D,r[2]=(g-E)*D,r[3]=0,r[4]=(p-M)*w,r[5]=(1-(m+h))*w,r[6]=(c+x)*w,r[7]=0,r[8]=(g+E)*A,r[9]=(c-x)*A,r[10]=(1-(m+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=vi.set(r[0],r[1],r[2]).length();const a=vi.set(r[4],r[5],r[6]).length(),o=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const u=1/s,f=1/a,d=1/o;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Rn){const l=this.elements,u=2*s/(e-t),f=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let p,g;if(o===Rn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===us)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Rn){const l=this.elements,u=1/(e-t),f=1/(n-r),d=1/(a-s),m=(e+t)*u,p=(n+r)*f;let g,_;if(o===Rn)g=(a+s)*d,_=-2*d;else if(o===us)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new F,on=new ue,ku=new F(0,0,0),Hu=new F(1,1,1),zn=new F,Rr=new F,Ye=new F,Ro=new ue,Co=new vr;class gn{constructor(t=0,e=0,n=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],d=r[2],m=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ro,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Co.setFromEuler(this),this.setFromQuaternion(Co,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gu=0;const Po=new F,Mi=new vr,yn=new ue,Cr=new F,Ji=new F,Vu=new F,Wu=new vr,Lo=new F(1,0,0),Do=new F(0,1,0),Io=new F(0,0,1),Uo={type:"added"},Xu={type:"removed"},Si={type:"childadded",child:null},Us={type:"childremoved",child:null};class xe extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new F,e=new gn,n=new vr,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Wt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(Lo,t)}rotateY(t){return this.rotateOnAxis(Do,t)}rotateZ(t){return this.rotateOnAxis(Io,t)}translateOnAxis(t,e){return Po.copy(t).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lo,t)}translateY(t){return this.translateOnAxis(Do,t)}translateZ(t){return this.translateOnAxis(Io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Ji,Cr,this.up):yn.lookAt(Cr,Ji,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(yn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uo),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xu),Us.child=t,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uo),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),f=a(t.images),d=a(t.shapes),m=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xe.DEFAULT_UP=new F(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new F,En=new F,Ns=new F,Tn=new F,yi=new F,Ei=new F,No=new F,Fs=new F,Os=new F,Bs=new F,zs=new le,ks=new le,Hs=new le;class nn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ln.subVectors(r,e),En.subVectors(n,e),Ns.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(En),l=ln.dot(Ns),u=En.dot(En),f=En.dot(Ns),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const m=1/d,p=(u*l-o*f)*m,g=(a*f-o*l)*m;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return zs.setScalar(0),ks.setScalar(0),Hs.setScalar(0),zs.fromBufferAttribute(t,e),ks.fromBufferAttribute(t,n),Hs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(zs,s.x),a.addScaledVector(ks,s.y),a.addScaledVector(Hs,s.z),a}static isFrontFacing(t,e,n,r){return ln.subVectors(n,e),En.subVectors(t,e),ln.cross(En).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),En.subVectors(this.a,this.b),ln.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;yi.subVectors(r,n),Ei.subVectors(s,n),Fs.subVectors(t,n);const l=yi.dot(Fs),u=Ei.dot(Fs);if(l<=0&&u<=0)return e.copy(n);Os.subVectors(t,r);const f=yi.dot(Os),d=Ei.dot(Os);if(f>=0&&d<=f)return e.copy(r);const m=l*d-f*u;if(m<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(yi,a);Bs.subVectors(t,s);const p=yi.dot(Bs),g=Ei.dot(Bs);if(g>=0&&p<=g)return e.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector(Ei,o);const c=f*g-p*d;if(c<=0&&d-f>=0&&p-g>=0)return No.subVectors(s,r),o=(d-f)/(d-f+(p-g)),e.copy(r).addScaledVector(No,o);const h=1/(c+_+m);return a=_*h,o=m*h,e.copy(n).addScaledVector(yi,a).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Gs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=Cu(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Gs(a,s,t+1/3),this.g=Gs(a,s,t),this.b=Gs(a,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=Le){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return te.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ze(Ce.r*255,0,255))*65536+Math.round(ze(Ce.g*255,0,255))*256+Math.round(ze(Ce.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,r=Ce.g,s=Ce.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=f,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Le){te.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,r=Ce.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Pr);const n=bs(kn.h,Pr.h,e),r=bs(kn.s,Pr.s,e),s=bs(kn.l,Pr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Yt;Yt.NAMES=hc;let qu=0;class Jn extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Zn(),this.name="",this.blending=Ni,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=aa,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new F,Lr=new Ft;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class fc extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dc extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yu=0;const tn=new ue,Vs=new xe,Ti=new F,Ze=new Mr,Qi=new Mr,Ee=new F;class Me extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oc(t)?dc:fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Vs.lookAt(t),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ze.min,Qi.min),Ze.expandByPoint(Ee),Ee.addVectors(Ze.max,Qi.max),Ze.expandByPoint(Ee)):(Ze.expandByPoint(Qi.min),Ze.expandByPoint(Qi.max))}Ze.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Ee.fromBufferAttribute(o,u),l&&(Ti.fromBufferAttribute(t,u),Ee.add(Ti)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;const u=new F,f=new F,d=new F,m=new Ft,p=new Ft,g=new Ft,_=new F,c=new F;function h(C,T,v){u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,T),d.fromBufferAttribute(n,v),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,v),f.sub(u),d.sub(u),p.sub(m),g.sub(m);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),c.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(R),o[C].add(_),o[T].add(_),o[v].add(_),l[C].add(c),l[T].add(c),l[v].add(c))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,T=x.length;C<T;++C){const v=x[C],R=v.start,z=v.count;for(let U=R,V=R+z;U<V;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new F,M=new F,D=new F,w=new F;function A(C){D.fromBufferAttribute(r,C),w.copy(D);const T=o[C];E.copy(T),E.sub(D.multiplyScalar(D.dot(T))).normalize(),M.crossVectors(w,T);const R=M.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,R)}for(let C=0,T=x.length;C<T;++C){const v=x[C],R=v.start,z=v.count;for(let U=R,V=R+z;U<V;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,u=new F,f=new F,d=new F;if(t)for(let m=0,p=t.count;m<p;m+=3){const g=t.getX(m+0),_=t.getX(m+1),c=t.getX(m+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,c),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,c),o.add(f),l.add(f),u.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,p=e.count;m<p;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const u=o.array,f=o.itemSize,d=o.normalized,m=new u.constructor(l.length*f);let p=0,g=0;for(let _=0,c=l.length;_<c;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*f;for(let h=0;h<f;h++)m[g++]=u[p++]}return new De(m,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=t(l,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,d=u.length;f<d;f++){const m=u[f],p=t(m,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,m=u.length;d<m;d++){const p=u[d];f.push(p.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(e))}const s=t.morphAttributes;for(const u in s){const f=[],d=s[u];for(let m=0,p=d.length;m<p;m++)f.push(d[m].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,f=a.length;u<f;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new ue,ei=new no,Dr=new Sr,Oo=new F,Ir=new F,Ur=new F,Nr=new F,Ws=new F,Fr=new F,Bo=new F,Or=new F;class At extends xe{constructor(t=new Me,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Fr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],d=s[l];f!==0&&(Ws.fromBufferAttribute(d,t),a?Fr.addScaledVector(Ws,f):Fr.addScaledVector(Ws.sub(e),f))}e.add(Fr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),ei.copy(t.ray).recast(t.near),!(Dr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Dr,Oo)===null||ei.origin.distanceToSquared(Oo)>(t.far-t.near)**2))&&(Fo.copy(s).invert(),ei.copy(t.ray).applyMatrix4(Fo),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,m=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=m.length;g<_;g++){const c=m[g],h=a[c.materialIndex],x=Math.max(c.start,p.start),E=Math.min(o.count,Math.min(c.start+c.count,p.start+p.count));for(let M=x,D=E;M<D;M+=3){const w=o.getX(M),A=o.getX(M+1),C=o.getX(M+2);r=Br(this,h,t,n,u,f,d,w,A,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=c.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let c=g,h=_;c<h;c+=3){const x=o.getX(c),E=o.getX(c+1),M=o.getX(c+2);r=Br(this,a,t,n,u,f,d,x,E,M),r&&(r.faceIndex=Math.floor(c/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=m.length;g<_;g++){const c=m[g],h=a[c.materialIndex],x=Math.max(c.start,p.start),E=Math.min(l.count,Math.min(c.start+c.count,p.start+p.count));for(let M=x,D=E;M<D;M+=3){const w=M,A=M+1,C=M+2;r=Br(this,h,t,n,u,f,d,w,A,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=c.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let c=g,h=_;c<h;c+=3){const x=c,E=c+1,M=c+2;r=Br(this,a,t,n,u,f,d,x,E,M),r&&(r.faceIndex=Math.floor(c/3),e.push(r))}}}}function Zu(i,t,e,n,r,s,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Kn,o),l===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Or);return u<e.near||u>e.far?null:{distance:u,point:Or.clone(),object:i}}function Br(i,t,e,n,r,s,a,o,l,u){i.getVertexPosition(o,Ir),i.getVertexPosition(l,Ur),i.getVertexPosition(u,Nr);const f=Zu(i,t,e,n,Ir,Ur,Nr,Bo);if(f){const d=new F;nn.getBarycoord(Bo,Ir,Ur,Nr,d),r&&(f.uv=nn.getInterpolatedAttribute(r,o,l,u,d,new Ft)),s&&(f.uv1=nn.getInterpolatedAttribute(s,o,l,u,d,new Ft)),a&&(f.normal=nn.getInterpolatedAttribute(a,o,l,u,d,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:o,b:l,c:u,normal:new F,materialIndex:0};nn.getNormal(Ir,Ur,Nr,m.normal),f.face=m,f.barycoord=d}return f}class wt extends Me{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],d=[];let m=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(d,2));function g(_,c,h,x,E,M,D,w,A,C,T){const v=M/A,R=D/C,z=M/2,U=D/2,V=w/2,j=A+1,q=C+1;let tt=0,X=0;const rt=new F;for(let ut=0;ut<q;ut++){const Mt=ut*R-U;for(let Ot=0;Ot<j;Ot++){const Ct=Ot*v-z;rt[_]=Ct*x,rt[c]=Mt*E,rt[h]=V,u.push(rt.x,rt.y,rt.z),rt[_]=0,rt[c]=0,rt[h]=w>0?1:-1,f.push(rt.x,rt.y,rt.z),d.push(Ot/A),d.push(1-ut/C),tt+=1}}for(let ut=0;ut<C;ut++)for(let Mt=0;Mt<A;Mt++){const Ot=m+Mt+j*ut,Ct=m+Mt+j*(ut+1),Y=m+(Mt+1)+j*(ut+1),nt=m+(Mt+1)+j*ut;l.push(Ot,Ct,nt),l.push(Ct,Y,nt),X+=6}o.addGroup(p,X,T),p+=X,m+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Wi(i[e]);for(const r in n)t[r]=n[r]}return t}function Ku(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const $u={clone:Wi,merge:Oe};var ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new F,zo=new Ft,ko=new Ft;class Ke extends mc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,zo,ko),e.subVectors(ko,zo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,Ai=1;class Qu extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(bi,Ai,t,e);r.layers=this.layers,this.add(r);const s=new Ke(bi,Ai,t,e);s.layers=this.layers,this.add(s);const a=new Ke(bi,Ai,t,e);a.layers=this.layers,this.add(a);const o=new Ke(bi,Ai,t,e);o.layers=this.layers,this.add(o);const l=new Ke(bi,Ai,t,e);l.layers=this.layers,this.add(l);const u=new Ke(bi,Ai,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const u of e)this.remove(u);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(d,m,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gc extends He{constructor(t,e,n,r,s,a,o,l,u,f){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class th extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new gc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wt(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:qn});s.uniforms.tEquirect.value=e;const a=new At(r,s),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=cn),new Qu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Xs=new F,eh=new F,nh=new Wt;class si{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Xs.subVectors(n,e).cross(eh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nh.getNormalMatrix(t),r=this.coplanarPoint(Xs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Sr,zr=new F;class io{constructor(t=new si,e=new si,n=new si,r=new si,s=new si,a=new si){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],d=r[6],m=r[7],p=r[8],g=r[9],_=r[10],c=r[11],h=r[12],x=r[13],E=r[14],M=r[15];if(n[0].setComponents(l-s,m-u,c-p,M-h).normalize(),n[1].setComponents(l+s,m+u,c+p,M+h).normalize(),n[2].setComponents(l+a,m+f,c+g,M+x).normalize(),n[3].setComponents(l-a,m-f,c-g,M-x).normalize(),n[4].setComponents(l-o,m-d,c-_,M-E).normalize(),e===Rn)n[5].setComponents(l+o,m+d,c+_,M+E).normalize();else if(e===us)n[5].setComponents(o,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(zr.x=r.normal.x>0?t.max.x:t.min.x,zr.y=r.normal.y>0?t.max.y:t.min.y,zr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _c(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ih(i){const t=new WeakMap;function e(o,l){const u=o.array,f=o.usage,d=u.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,u,f),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,u){const f=l.array,d=l.updateRanges;if(i.bindBuffer(u,o),d.length===0)i.bufferSubData(u,0,f);else{d.sort((p,g)=>p.start-g.start);let m=0;for(let p=1;p<d.length;p++){const g=d[m],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,d[m]=_)}d.length=m+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(u,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class $e extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),u=o+1,f=l+1,d=t/o,m=e/l,p=[],g=[],_=[],c=[];for(let h=0;h<f;h++){const x=h*m-a;for(let E=0;E<u;E++){const M=E*d-s;g.push(M,-x,0),_.push(0,0,1),c.push(E/o),c.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const E=x+u*h,M=x+u*(h+1),D=x+1+u*(h+1),w=x+1+u*h;p.push(E,M,w),p.push(M,D,w)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}var rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
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
#endif`,ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uh=`#ifdef USE_AOMAP
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
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fh=`#ifdef USE_BATCHING
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
#endif`,dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_h=`#ifdef USE_IRIDESCENCE
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
#endif`,xh=`#ifdef USE_BUMPMAP
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
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wh=`#define PI 3.141592653589793
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
} // validated`,Rh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ch=`vec3 transformedNormal = objectNormal;
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
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xh=`#ifdef USE_GRADIENTMAP
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
}`,qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
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
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
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
#endif`,nf=`struct PhysicalMaterial {
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
}`,rf=`
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pf=`#if defined( USE_POINTS_UV )
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
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
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
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wf=`#ifdef USE_NORMALMAP
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
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vf=`float getShadowMask() {
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
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Qf=`#ifdef USE_TRANSMISSION
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
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sd=`uniform sampler2D t2D;
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
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`#include <common>
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
}`,hd=`#if DEPTH_PACKING == 3200
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
}`,fd=`#define DISTANCE
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
}`,dd=`#define DISTANCE
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`uniform float scale;
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
}`,_d=`uniform vec3 diffuse;
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
}`,xd=`#include <common>
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
}`,vd=`uniform vec3 diffuse;
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
}`,Md=`#define LAMBERT
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
}`,Sd=`#define LAMBERT
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
}`,yd=`#define MATCAP
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
}`,Ed=`#define MATCAP
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
}`,Td=`#define NORMAL
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
}`,bd=`#define NORMAL
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
}`,Ad=`#define PHONG
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
}`,wd=`#define PHONG
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
}`,Rd=`#define STANDARD
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
}`,Cd=`#define STANDARD
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
}`,Pd=`#define TOON
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
}`,Ld=`#define TOON
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
}`,Dd=`uniform float size;
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
}`,Id=`uniform vec3 diffuse;
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
}`,Ud=`#include <common>
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
}`,Nd=`uniform vec3 color;
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
}`,Fd=`uniform float rotation;
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
}`,Od=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:rh,alphahash_pars_fragment:sh,alphamap_fragment:ah,alphamap_pars_fragment:oh,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:uh,aomap_pars_fragment:hh,batching_pars_vertex:fh,batching_vertex:dh,begin_vertex:ph,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:_h,bumpmap_pars_fragment:xh,clipping_planes_fragment:vh,clipping_planes_pars_fragment:Mh,clipping_planes_pars_vertex:Sh,clipping_planes_vertex:yh,color_fragment:Eh,color_pars_fragment:Th,color_pars_vertex:bh,color_vertex:Ah,common:wh,cube_uv_reflection_fragment:Rh,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Ph,displacementmap_vertex:Lh,emissivemap_fragment:Dh,emissivemap_pars_fragment:Ih,colorspace_fragment:Uh,colorspace_pars_fragment:Nh,envmap_fragment:Fh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:Bh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:$h,envmap_vertex:kh,fog_vertex:Hh,fog_pars_vertex:Gh,fog_fragment:Vh,fog_pars_fragment:Wh,gradientmap_pars_fragment:Xh,lightmap_pars_fragment:qh,lights_lambert_fragment:Yh,lights_lambert_pars_fragment:Zh,lights_pars_begin:Kh,lights_toon_fragment:jh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Qh,lights_phong_pars_fragment:tf,lights_physical_fragment:ef,lights_physical_pars_fragment:nf,lights_fragment_begin:rf,lights_fragment_maps:sf,lights_fragment_end:af,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:uf,map_fragment:hf,map_pars_fragment:ff,map_particle_fragment:df,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:_f,morphcolor_vertex:xf,morphnormal_vertex:vf,morphtarget_pars_vertex:Mf,morphtarget_vertex:Sf,normal_fragment_begin:yf,normal_fragment_maps:Ef,normal_pars_fragment:Tf,normal_pars_vertex:bf,normal_vertex:Af,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Pf,iridescence_pars_fragment:Lf,opaque_fragment:Df,packing:If,premultiplied_alpha_fragment:Uf,project_vertex:Nf,dithering_fragment:Ff,dithering_pars_fragment:Of,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:kf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Gf,shadowmask_pars_fragment:Vf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:Zf,specularmap_pars_fragment:Kf,tonemapping_fragment:$f,tonemapping_pars_fragment:jf,transmission_fragment:Jf,transmission_pars_fragment:Qf,uv_pars_fragment:td,uv_pars_vertex:ed,uv_vertex:nd,worldpos_vertex:id,background_vert:rd,background_frag:sd,backgroundCube_vert:ad,backgroundCube_frag:od,cube_vert:ld,cube_frag:cd,depth_vert:ud,depth_frag:hd,distanceRGBA_vert:fd,distanceRGBA_frag:dd,equirect_vert:pd,equirect_frag:md,linedashed_vert:gd,linedashed_frag:_d,meshbasic_vert:xd,meshbasic_frag:vd,meshlambert_vert:Md,meshlambert_frag:Sd,meshmatcap_vert:yd,meshmatcap_frag:Ed,meshnormal_vert:Td,meshnormal_frag:bd,meshphong_vert:Ad,meshphong_frag:wd,meshphysical_vert:Rd,meshphysical_frag:Cd,meshtoon_vert:Pd,meshtoon_frag:Ld,points_vert:Dd,points_frag:Id,shadow_vert:Ud,shadow_frag:Nd,sprite_vert:Fd,sprite_frag:Od},ht={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},pn={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};pn.physical={uniforms:Oe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const kr={r:0,b:0,g:0},ii=new gn,Bd=new ue;function zd(i,t,e,n,r,s,a){const o=new Yt(0);let l=s===!0?0:1,u,f,d=null,m=0,p=null;function g(x){let E=x.isScene===!0?x.background:null;return E&&E.isTexture&&(E=(x.backgroundBlurriness>0?e:t).get(E)),E}function _(x){let E=!1;const M=g(x);M===null?h(o,l):M&&M.isColor&&(h(M,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function c(x,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===xs)?(f===void 0&&(f=new At(new wt(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Wi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ii.copy(E.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Bd.makeRotationFromEuler(ii)),f.material.toneMapped=te.getTransfer(M.colorSpace)!==ae,(d!==M||m!==M.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,d=M,m=M.version,p=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new At(new $e(2,2),new $n({name:"BackgroundMaterial",uniforms:Wi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=te.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||m!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,m=M.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,E){x.getRGB(kr,pc(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(o,l)},render:_,addToRenderList:c}}function kd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function o(v,R,z,U,V){let j=!1;const q=d(U,z,R);s!==q&&(s=q,u(s.object)),j=p(v,U,z,V),j&&g(v,U,z,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(v,R,z,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function u(v){return i.bindVertexArray(v)}function f(v){return i.deleteVertexArray(v)}function d(v,R,z){const U=z.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let j=V[R.id];j===void 0&&(j={},V[R.id]=j);let q=j[U];return q===void 0&&(q=m(l()),j[U]=q),q}function m(v){const R=[],z=[],U=[];for(let V=0;V<e;V++)R[V]=0,z[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:U,object:v,attributes:{},index:null}}function p(v,R,z,U){const V=s.attributes,j=R.attributes;let q=0;const tt=z.getAttributes();for(const X in tt)if(tt[X].location>=0){const ut=V[X];let Mt=j[X];if(Mt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),ut===void 0||ut.attribute!==Mt||Mt&&ut.data!==Mt.data)return!0;q++}return s.attributesNum!==q||s.index!==U}function g(v,R,z,U){const V={},j=R.attributes;let q=0;const tt=z.getAttributes();for(const X in tt)if(tt[X].location>=0){let ut=j[X];ut===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const Mt={};Mt.attribute=ut,ut&&ut.data&&(Mt.data=ut.data),V[X]=Mt,q++}s.attributes=V,s.attributesNum=q,s.index=U}function _(){const v=s.newAttributes;for(let R=0,z=v.length;R<z;R++)v[R]=0}function c(v){h(v,0)}function h(v,R){const z=s.newAttributes,U=s.enabledAttributes,V=s.attributeDivisors;z[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),V[v]!==R&&(i.vertexAttribDivisor(v,R),V[v]=R)}function x(){const v=s.newAttributes,R=s.enabledAttributes;for(let z=0,U=R.length;z<U;z++)R[z]!==v[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function E(v,R,z,U,V,j,q){q===!0?i.vertexAttribIPointer(v,R,z,V,j):i.vertexAttribPointer(v,R,z,U,V,j)}function M(v,R,z,U){_();const V=U.attributes,j=z.getAttributes(),q=R.defaultAttributeValues;for(const tt in j){const X=j[tt];if(X.location>=0){let rt=V[tt];if(rt===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const ut=rt.normalized,Mt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const Ct=Ot.buffer,Y=Ot.type,nt=Ot.bytesPerElement,$=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===$a;if(rt.isInterleavedBufferAttribute){const lt=rt.data,mt=lt.stride,Pt=rt.offset;if(lt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)h(X.location+Dt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)c(X.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Dt=0;Dt<X.locationSize;Dt++)E(X.location+Dt,Mt/X.locationSize,Y,ut,mt*nt,(Pt+Mt/X.locationSize*Dt)*nt,$)}else{if(rt.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)h(X.location+lt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let lt=0;lt<X.locationSize;lt++)c(X.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let lt=0;lt<X.locationSize;lt++)E(X.location+lt,Mt/X.locationSize,Y,ut,Mt*nt,Mt/X.locationSize*lt*nt,$)}}else if(q!==void 0){const ut=q[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(X.location,ut);break;case 3:i.vertexAttrib3fv(X.location,ut);break;case 4:i.vertexAttrib4fv(X.location,ut);break;default:i.vertexAttrib1fv(X.location,ut)}}}}x()}function D(){C();for(const v in n){const R=n[v];for(const z in R){const U=R[z];for(const V in U)f(U[V].object),delete U[V];delete R[z]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const z in R){const U=R[z];for(const V in U)f(U[V].object),delete U[V];delete R[z]}delete n[v.id]}function A(v){for(const R in n){const z=n[R];if(z[v.id]===void 0)continue;const U=z[v.id];for(const V in U)f(U[V].object),delete U[V];delete z[v.id]}}function C(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:c,disableUnusedAttributes:x}}function Hd(i,t,e){let n;function r(u){n=u}function s(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,d){d!==0&&(i.drawArraysInstanced(n,u,f,d),e.update(f,n,d))}function o(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];e.update(p,n,1)}function l(u,f,d,m){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],f[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,f,0,m,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_]*m[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:c,maxAttributes:h,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:D,maxSamples:w}}function Vd(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new si,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const p=d.length!==0||m||n!==0||r;return r=m,n=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=f(d,m,0)},this.setState=function(d,m,p){const g=d.clippingPlanes,_=d.clipIntersection,c=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!c)s?f(null):u();else{const x=s?0:n,E=x*4;let M=h.clippingState||null;l.value=M,M=f(g,m,E,p);for(let D=0;D!==E;++D)M[D]=e[D];h.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,m,p,g){const _=d!==null?d.length:0;let c=null;if(_!==0){if(c=l.value,g!==!0||c===null){const h=p+_*4,x=m.matrixWorldInverse;o.getNormalMatrix(x),(c===null||c.length<h)&&(c=new Float32Array(h));for(let E=0,M=p;E!==_;++E,M+=4)a.copy(d[E]).applyMatrix4(x,o),a.normal.toArray(c,M),c[M+3]=a.constant}l.value=c,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,c}}function Wd(i){let t=new WeakMap;function e(a,o){return o===pa?a.mapping=ki:o===ma&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pa||o===ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new th(l.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xc extends mc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,Ho=[.125,.215,.35,.446,.526,.582],li=20,qs=new xc,Go=new Yt;let Ys=null,Zs=0,Ks=0,$s=!1;const ai=(1+Math.sqrt(5))/2,wi=1/ai,Vo=[new F(-ai,wi,0),new F(ai,wi,0),new F(-wi,0,ai),new F(wi,0,ai),new F(0,ai,-wi),new F(0,ai,wi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Wo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ys=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ys,Zs,Ks),this._renderer.xr.enabled=$s,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ys=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:xr,format:un,colorSpace:Xi,depthBuffer:!1},r=Xo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xd(s)),this._blurMaterial=qd(s,t,e)}return r}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,n,r){const o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Go),f.toneMapping=Yn,f.autoClear=!1;const p=new be({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new At(new wt,p);let _=!1;const c=t.background;c?c.isColor&&(p.color.copy(c),t.background=null,_=!0):(p.color.copy(Go),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):x===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const E=this._cubeSize;Hr(r,x*E,h>2?E:0,E,E),f.setRenderTarget(r),_&&f.render(g,o),f.render(t,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=d,t.background=c}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ki||t.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vo[(r-s-1)%Vo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new At(this._lodPlanes[r],u),m=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=s/g,c=isFinite(s)?1+Math.floor(f*_):li;c>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${li}`);const h=[];let x=0;for(let A=0;A<li;++A){const C=A/_,T=Math.exp(-C*C/2);h.push(T),A===0?x+=T:A<c&&(x+=2*T)}for(let A=0;A<h.length;A++)h[A]=h[A]/x;m.envMap.value=t.texture,m.samples.value=c,m.weights.value=h,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:E}=this;m.dTheta.value=g,m.mipInt.value=E-n;const M=this._sizeLods[r],D=3*M*(r>E-Ii?r-E+Ii:0),w=4*(this._cubeSize-M);Hr(e,D,w,3*M,2*M),l.setRenderTarget(e),l.render(d,qs)}}function Xd(i){const t=[],e=[],n=[];let r=i;const s=i-Ii+1+Ho.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Ii?l=Ho[a-i+Ii-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),f=-u,d=1+u,m=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,_=3,c=2,h=1,x=new Float32Array(_*g*p),E=new Float32Array(c*g*p),M=new Float32Array(h*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,C=w>2?0:-1,T=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(T,_*g*w),E.set(m,c*g*w);const v=[w,w,w,w,w,w];M.set(v,h*g*w)}const D=new Me;D.setAttribute("position",new De(x,_)),D.setAttribute("uv",new De(E,c)),D.setAttribute("faceIndex",new De(M,h)),t.push(D),r>Ii&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xo(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function qd(i,t,e){const n=new Float32Array(li),r=new F(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ro(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function qo(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Yo(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ro(){return`

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
	`}function Yd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===pa||l===ma,f=l===ki||l===Hi;if(u||f){let d=t.get(o);const m=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return e===null&&(e=new Wo(i)),d=u?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return u&&p&&p.height>0||f&&p&&r(p)?(e===null&&(e=new Wo(i)),d=u?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Kd(i,t,e,n){const r={},s=new WeakMap;function a(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const _=m.morphAttributes[g];for(let c=0,h=_.length;c<h;c++)t.remove(_[c])}m.removeEventListener("dispose",a),delete r[m.id];const p=s.get(m);p&&(t.remove(p),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(d,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,e.memory.geometries++),m}function l(d){const m=d.attributes;for(const g in m)t.update(m[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let c=0,h=_.length;c<h;c++)t.update(_[c],i.ARRAY_BUFFER)}}function u(d){const m=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let E=0,M=x.length;E<M;E+=3){const D=x[E+0],w=x[E+1],A=x[E+2];m.push(D,w,w,A,A,D)}}else if(g!==void 0){const x=g.array;_=g.version;for(let E=0,M=x.length/3-1;E<M;E+=3){const D=E+0,w=E+1,A=E+2;m.push(D,w,w,A,A,D)}}else return;const c=new(oc(m)?dc:fc)(m,1);c.version=_;const h=s.get(d);h&&t.remove(h),s.set(d,c)}function f(d){const m=s.get(d);if(m){const p=d.index;p!==null&&m.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function $d(i,t,e){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,p){i.drawElements(n,p,s,m*a),e.update(p,n,1)}function u(m,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,m*a,g),e.update(p,n,g))}function f(m,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,m,0,g);let c=0;for(let h=0;h<g;h++)c+=p[h];e.update(c,n,1)}function d(m,p,g,_){if(g===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<m.length;h++)u(m[h]/a,p[h],_[h]);else{c.multiDrawElementsInstancedWEBGL(n,p,0,s,m,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x]*_[x];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function jd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Jd(i,t,e){const n=new WeakMap,r=new le;function s(a,o,l){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let m=n.get(o);if(m===void 0||m.count!==d){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;m!==void 0&&m.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,c=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),c===!0&&(M=3);let D=o.attributes.position.count*M,w=1;D>t.maxTextureSize&&(w=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*w*4*d),C=new cc(A,D,w,d);C.type=wn,C.needsUpdate=!0;const T=M*4;for(let R=0;R<d;R++){const z=h[R],U=x[R],V=E[R],j=D*w*4*R;for(let q=0;q<z.count;q++){const tt=q*T;g===!0&&(r.fromBufferAttribute(z,q),A[j+tt+0]=r.x,A[j+tt+1]=r.y,A[j+tt+2]=r.z,A[j+tt+3]=0),_===!0&&(r.fromBufferAttribute(U,q),A[j+tt+4]=r.x,A[j+tt+5]=r.y,A[j+tt+6]=r.z,A[j+tt+7]=0),c===!0&&(r.fromBufferAttribute(V,q),A[j+tt+8]=r.x,A[j+tt+9]=r.y,A[j+tt+10]=r.z,A[j+tt+11]=V.itemSize===4?r.w:1)}}m={count:d,texture:C,size:new Ft(D,w)},n.set(o,m),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let c=0;c<u.length;c++)g+=u[c];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function Qd(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}class vc extends He{constructor(t,e,n,r,s,a,o,l,u,f=Fi){if(f!==Fi&&f!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Fi&&(n=ui),n===void 0&&f===Vi&&(n=Gi),super(null,r,s,a,o,l,f,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mc=new He,Zo=new vc(1,1),Sc=new cc,yc=new Bu,Ec=new gc,Ko=[],$o=[],jo=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ko[r];if(s===void 0&&(s=new Float32Array(r),Ko[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ms(i,t){let e=$o[t];e===void 0&&(e=new Int32Array(t),$o[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function rp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Qo.set(n),i.uniformMatrix2fv(this.addr,!1,Qo),ye(e,n)}}function sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Jo.set(n),i.uniformMatrix3fv(this.addr,!1,Jo),ye(e,n)}}function ap(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;jo.set(n),i.uniformMatrix4fv(this.addr,!1,jo),ye(e,n)}}function op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function mp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zo.compareFunction=ac,s=Zo):s=Mc,e.setTexture2D(t||s,r)}function gp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||yc,r)}function _p(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ec,r)}function xp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Sc,r)}function vp(i){switch(i){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return rp;case 35675:return sp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return up;case 5125:return hp;case 36294:return fp;case 36295:return dp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}function Mp(i,t){i.uniform1fv(this.addr,t)}function Sp(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function yp(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ep(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Tp(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bp(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ap(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wp(i,t){i.uniform1iv(this.addr,t)}function Rp(i,t){i.uniform2iv(this.addr,t)}function Cp(i,t){i.uniform3iv(this.addr,t)}function Pp(i,t){i.uniform4iv(this.addr,t)}function Lp(i,t){i.uniform1uiv(this.addr,t)}function Dp(i,t){i.uniform2uiv(this.addr,t)}function Ip(i,t){i.uniform3uiv(this.addr,t)}function Up(i,t){i.uniform4uiv(this.addr,t)}function Np(i,t,e){const n=this.cache,r=t.length,s=Ms(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Mc,s[a])}function Fp(i,t,e){const n=this.cache,r=t.length,s=Ms(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||yc,s[a])}function Op(i,t,e){const n=this.cache,r=t.length,s=Ms(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ec,s[a])}function Bp(i,t,e){const n=this.cache,r=t.length,s=Ms(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Sc,s[a])}function zp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return yp;case 35666:return Ep;case 35674:return Tp;case 35675:return bp;case 35676:return Ap;case 5124:case 35670:return wp;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}class kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vp(e.type)}}class Hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zp(e.type)}}class Gp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const js=/(\w+)(\])?(\[|\.)?/g;function tl(i,t){i.seq.push(t),i.map[t.id]=t}function Vp(i,t,e){const n=i.name,r=n.length;for(js.lastIndex=0;;){const s=js.exec(n),a=js.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){tl(e,u===void 0?new kp(o,i,t):new Hp(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Gp(o),tl(e,d)),e=d}}}class ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Vp(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function el(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wp=37297;let Xp=0;function qp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const nl=new Wt;function Yp(i){te._getMatrix(nl,te.workingColorSpace,i);const t=`mat3( ${nl.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case vs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function il(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+qp(i.getShaderSource(t),a)}else return r}function Zp(i,t){const e=Yp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kp(i,t){let e;switch(t){case fu:e="Linear";break;case du:e="Reinhard";break;case pu:e="Cineon";break;case Yl:e="ACESFilmic";break;case gu:e="AgX";break;case _u:e="Neutral";break;case mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gr=new F;function $p(){te.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Jp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function lr(i){return i!==""}function rl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(tm,nm)}const em=new Map;function nm(i,t){let e=Xt[t];if(e===void 0){const n=em.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xa(e)}const im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(im,rm)}function rm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ol(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function sm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function am(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function om(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ql:t="ENVMAP_BLENDING_MULTIPLY";break;case uu:t="ENVMAP_BLENDING_MIX";break;case hu:t="ENVMAP_BLENDING_ADD";break}return t}function cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function um(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=sm(e),u=am(e),f=om(e),d=lm(e),m=cm(e),p=jp(e),g=Jp(s),_=r.createProgram();let c,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),c.length>0&&(c+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),h.length>0&&(h+=`
`)):(c=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),h=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Zp("linearToOutputTexel",e.outputColorSpace),$p(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=Xa(a),a=rl(a,e),a=sl(a,e),o=Xa(o),o=rl(o,e),o=sl(o,e),a=al(a),o=al(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,c=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,h=["#define varying in",e.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=x+c+a,M=x+h+o,D=el(r,r.VERTEX_SHADER,E),w=el(r,r.FRAGMENT_SHADER,M);r.attachShader(_,D),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(D).trim(),V=r.getShaderInfoLog(w).trim();let j=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,D,w);else{const tt=il(r,D,"vertex"),X=il(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+tt+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||V==="")&&(q=!1);q&&(R.diagnostics={runnable:j,programLog:z,vertexShader:{log:U,prefix:c},fragmentShader:{log:V,prefix:h}})}r.deleteShader(D),r.deleteShader(w),C=new ls(r,_),T=Qp(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Wp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}let hm=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dm(t),e.set(t,n)),n}}class dm{constructor(t){this.id=hm++,this.code=t,this.usedTimes=0}}function pm(i,t,e,n,r,s,a){const o=new uc,l=new fm,u=new Set,f=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return u.add(T),T===0?"uv":`uv${T}`}function c(T,v,R,z,U){const V=z.fog,j=U.geometry,q=T.isMeshStandardMaterial?z.environment:null,tt=(T.isMeshStandardMaterial?e:t).get(T.envMap||q),X=tt&&tt.mapping===xs?tt.image.height:null,rt=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mt=ut!==void 0?ut.length:0;let Ot=0;j.morphAttributes.position!==void 0&&(Ot=1),j.morphAttributes.normal!==void 0&&(Ot=2),j.morphAttributes.color!==void 0&&(Ot=3);let Ct,Y,nt,$;if(rt){const qt=pn[rt];Ct=qt.vertexShader,Y=qt.fragmentShader}else Ct=T.vertexShader,Y=T.fragmentShader,l.update(T),nt=l.getVertexShaderID(T),$=l.getFragmentShaderID(T);const lt=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Pt=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,Zt=!!T.map,zt=!!T.matcap,J=!!tt,P=!!T.aoMap,Ht=!!T.lightMap,bt=!!T.bumpMap,Ut=!!T.normalMap,vt=!!T.displacementMap,Qt=!!T.emissiveMap,St=!!T.metalnessMap,b=!!T.roughnessMap,S=T.anisotropy>0,k=T.clearcoat>0,Q=T.dispersion>0,et=T.iridescence>0,Z=T.sheen>0,gt=T.transmission>0,ct=S&&!!T.anisotropyMap,pt=k&&!!T.clearcoatMap,jt=k&&!!T.clearcoatNormalMap,it=k&&!!T.clearcoatRoughnessMap,_t=et&&!!T.iridescenceMap,Lt=et&&!!T.iridescenceThicknessMap,It=Z&&!!T.sheenColorMap,xt=Z&&!!T.sheenRoughnessMap,Kt=!!T.specularMap,Gt=!!T.specularColorMap,se=!!T.specularIntensityMap,N=gt&&!!T.transmissionMap,ft=gt&&!!T.thicknessMap,L=!!T.gradientMap,B=!!T.alphaMap,W=T.alphaTest>0,K=!!T.alphaHash,at=!!T.extensions;let Jt=Yn;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const me={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:Ct,fragmentShader:Y,defines:T.defines,customVertexShaderID:nt,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&U.instanceColor!==null,instancingMorph:Pt&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Xi,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:zt,envMap:J,envMapMode:J&&tt.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:Ht,bumpMap:bt,normalMap:Ut,displacementMap:m&&vt,emissiveMap:Qt,normalMapObjectSpace:Ut&&T.normalMapType===Su,normalMapTangentSpace:Ut&&T.normalMapType===sc,metalnessMap:St,roughnessMap:b,anisotropy:S,anisotropyMap:ct,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:Lt,sheen:Z,sheenColorMap:It,sheenRoughnessMap:xt,specularMap:Kt,specularColorMap:Gt,specularIntensityMap:se,transmission:gt,transmissionMap:N,thicknessMap:ft,gradientMap:L,opaque:T.transparent===!1&&T.blending===Ni&&T.alphaToCoverage===!1,alphaMap:B,alphaTest:W,alphaHash:K,combine:T.combine,mapUv:Zt&&_(T.map.channel),aoMapUv:P&&_(T.aoMap.channel),lightMapUv:Ht&&_(T.lightMap.channel),bumpMapUv:bt&&_(T.bumpMap.channel),normalMapUv:Ut&&_(T.normalMap.channel),displacementMapUv:vt&&_(T.displacementMap.channel),emissiveMapUv:Qt&&_(T.emissiveMap.channel),metalnessMapUv:St&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:ct&&_(T.anisotropyMap.channel),clearcoatMapUv:pt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(T.sheenRoughnessMap.channel),specularMapUv:Kt&&_(T.specularMap.channel),specularColorMapUv:Gt&&_(T.specularColorMap.channel),specularIntensityMapUv:se&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:ft&&_(T.thicknessMap.channel),alphaMapUv:B&&_(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ut||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!j.attributes.uv&&(Zt||B),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ot,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&te.getTransfer(T.map.colorSpace)===ae,decodeVideoTextureEmissive:Qt&&T.emissiveMap.isVideoTexture===!0&&te.getTransfer(T.emissiveMap.colorSpace)===ae,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===en,flipSided:T.side===Xe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:at&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&T.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return me.vertexUv1s=u.has(1),me.vertexUv2s=u.has(2),me.vertexUv3s=u.has(3),u.clear(),me}function h(T){const v=[];if(T.shaderID?v.push(T.shaderID):(v.push(T.customVertexShaderID),v.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)v.push(R),v.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(x(v,T),E(v,T),v.push(i.outputColorSpace)),v.push(T.customProgramCacheKey),v.join()}function x(T,v){T.push(v.precision),T.push(v.outputColorSpace),T.push(v.envMapMode),T.push(v.envMapCubeUVHeight),T.push(v.mapUv),T.push(v.alphaMapUv),T.push(v.lightMapUv),T.push(v.aoMapUv),T.push(v.bumpMapUv),T.push(v.normalMapUv),T.push(v.displacementMapUv),T.push(v.emissiveMapUv),T.push(v.metalnessMapUv),T.push(v.roughnessMapUv),T.push(v.anisotropyMapUv),T.push(v.clearcoatMapUv),T.push(v.clearcoatNormalMapUv),T.push(v.clearcoatRoughnessMapUv),T.push(v.iridescenceMapUv),T.push(v.iridescenceThicknessMapUv),T.push(v.sheenColorMapUv),T.push(v.sheenRoughnessMapUv),T.push(v.specularMapUv),T.push(v.specularColorMapUv),T.push(v.specularIntensityMapUv),T.push(v.transmissionMapUv),T.push(v.thicknessMapUv),T.push(v.combine),T.push(v.fogExp2),T.push(v.sizeAttenuation),T.push(v.morphTargetsCount),T.push(v.morphAttributeCount),T.push(v.numDirLights),T.push(v.numPointLights),T.push(v.numSpotLights),T.push(v.numSpotLightMaps),T.push(v.numHemiLights),T.push(v.numRectAreaLights),T.push(v.numDirLightShadows),T.push(v.numPointLightShadows),T.push(v.numSpotLightShadows),T.push(v.numSpotLightShadowsWithMaps),T.push(v.numLightProbes),T.push(v.shadowMapType),T.push(v.toneMapping),T.push(v.numClippingPlanes),T.push(v.numClipIntersection),T.push(v.depthPacking)}function E(T,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),T.push(o.mask)}function M(T){const v=g[T.type];let R;if(v){const z=pn[v];R=$u.clone(z.uniforms)}else R=T.uniforms;return R}function D(T,v){let R;for(let z=0,U=f.length;z<U;z++){const V=f[z];if(V.cacheKey===v){R=V,++R.usedTimes;break}}return R===void 0&&(R=new um(i,v,T,s),f.push(R)),R}function w(T){if(--T.usedTimes===0){const v=f.indexOf(T);f[v]=f[f.length-1],f.pop(),T.destroy()}}function A(T){l.remove(T)}function C(){l.dispose()}return{getParameters:c,getProgramCacheKey:h,getUniforms:M,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:f,dispose:C}}function mm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function gm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,m,p,g,_,c){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:m,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:c},i[t]=h):(h.id=d.id,h.object=d,h.geometry=m,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=c),t++,h}function o(d,m,p,g,_,c){const h=a(d,m,p,g,_,c);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function l(d,m,p,g,_,c){const h=a(d,m,p,g,_,c);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function u(d,m){e.length>1&&e.sort(d||gm),n.length>1&&n.sort(m||ll),r.length>1&&r.sort(m||ll)}function f(){for(let d=t,m=i.length;d<m;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function _m(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new cl,i.set(n,[a])):r>=s.length?(a=new cl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Yt};break;case"SpotLight":e={position:new F,direction:new F,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Mm=0;function Sm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ym(i){const t=new xm,e=vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new F);const r=new F,s=new ue,a=new ue;function o(u){let f=0,d=0,m=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,c=0,h=0,x=0,E=0,M=0,D=0,w=0,A=0;u.sort(Sm);for(let T=0,v=u.length;T<v;T++){const R=u[T],z=R.color,U=R.intensity,V=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=z.r*U,d+=z.g*U,m+=z.b*U;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],U);A++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,X=e.get(R);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=R.shadow.matrix,x++}n.directional[p]=q,p++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(z).multiplyScalar(U),q.distance=V,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[_]=q;const tt=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,tt.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=tt.matrix,R.castShadow){const X=e.get(R);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=j,M++}_++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(z).multiplyScalar(U),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[c]=q,c++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const tt=R.shadow,X=e.get(R);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(U),q.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[h]=q,h++}}c>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=m;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==c||C.hemiLength!==h||C.numDirectionalShadows!==x||C.numPointShadows!==E||C.numSpotShadows!==M||C.numSpotMaps!==D||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=c,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=c,C.hemiLength=h,C.numDirectionalShadows=x,C.numPointShadows=E,C.numSpotShadows=M,C.numSpotMaps=D,C.numLightProbes=A,n.version=Mm++)}function l(u,f){let d=0,m=0,p=0,g=0,_=0;const c=f.matrixWorldInverse;for(let h=0,x=u.length;h<x;h++){const E=u[h];if(E.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(c),d++}else if(E.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(c),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(c),p++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(c),a.identity(),s.copy(E.matrixWorld),s.premultiply(c),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(c),m++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(c),_++}}}return{setup:o,setupView:l,state:n}}function ul(i){const t=new ym(i),e=[],n=[];function r(f){u.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Em(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ul(i),t.set(r,[o])):s>=a.length?(o=new ul(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Tm extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bm extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wm=`uniform sampler2D shadow_pass;
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
}`;function Rm(i,t,e){let n=new io;const r=new Ft,s=new Ft,a=new le,o=new Tm({depthPacking:Mu}),l=new bm,u={},f=e.maxTextureSize,d={[Kn]:Xe,[Xe]:Kn,[en]:en},m=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Am,fragmentShader:wm}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let h=this.type;this.render=function(w,A,C){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||w.length===0)return;const T=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(qn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=h!==bn&&this.type===bn,V=h===bn&&this.type!==bn;for(let j=0,q=w.length;j<q;j++){const tt=w[j],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const rt=X.getFrameExtents();if(r.multiply(rt),s.copy(X.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/rt.x),r.x=s.x*rt.x,X.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/rt.y),r.y=s.y*rt.y,X.mapSize.y=s.y)),X.map===null||U===!0||V===!0){const Mt=this.type!==bn?{minFilter:hn,magFilter:hn}:{};X.map!==null&&X.map.dispose(),X.map=new hi(r.x,r.y,Mt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ut=X.getViewportCount();for(let Mt=0;Mt<ut;Mt++){const Ot=X.getViewport(Mt);a.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),z.viewport(a),X.updateMatrices(tt,Mt),n=X.getFrustum(),M(A,C,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===bn&&x(X,C),X.needsUpdate=!1}h=this.type,c.needsUpdate=!1,i.setRenderTarget(T,v,R)};function x(w,A){const C=t.update(_);m.defines.VSM_SAMPLES!==w.blurSamples&&(m.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hi(r.x,r.y)),m.uniforms.shadow_pass.value=w.map.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,m,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,p,_,null)}function E(w,A,C,T){let v=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=v.uuid,U=A.uuid;let V=u[z];V===void 0&&(V={},u[z]=V);let j=V[U];j===void 0&&(j=v.clone(),V[U]=j,A.addEventListener("dispose",D)),v=j}if(v.visible=A.visible,v.wireframe=A.wireframe,T===bn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=i.properties.get(v);z.light=C}return v}function M(w,A,C,T,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===bn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const U=t.update(w),V=w.material;if(Array.isArray(V)){const j=U.groups;for(let q=0,tt=j.length;q<tt;q++){const X=j[q],rt=V[X.materialIndex];if(rt&&rt.visible){const ut=E(w,rt,T,v);w.onBeforeShadow(i,w,A,C,U,ut,X),i.renderBufferDirect(C,null,U,ut,w,X),w.onAfterShadow(i,w,A,C,U,ut,X)}}}else if(V.visible){const j=E(w,V,T,v);w.onBeforeShadow(i,w,A,C,U,j,null),i.renderBufferDirect(C,null,U,j,w,null),w.onAfterShadow(i,w,A,C,U,j,null)}}const z=w.children;for(let U=0,V=z.length;U<V;U++)M(z[U],A,C,T,v)}function D(w){w.target.removeEventListener("dispose",D);for(const C in u){const T=u[C],v=w.target.uuid;v in T&&(T[v].dispose(),delete T[v])}}}const Cm={[oa]:la,[ca]:fa,[ua]:da,[zi]:ha,[la]:oa,[fa]:ca,[da]:ua,[ha]:zi};function Pm(i,t){function e(){let N=!1;const ft=new le;let L=null;const B=new le(0,0,0,0);return{setMask:function(W){L!==W&&!N&&(i.colorMask(W,W,W,W),L=W)},setLocked:function(W){N=W},setClear:function(W,K,at,Jt,me){me===!0&&(W*=Jt,K*=Jt,at*=Jt),ft.set(W,K,at,Jt),B.equals(ft)===!1&&(i.clearColor(W,K,at,Jt),B.copy(ft))},reset:function(){N=!1,L=null,B.set(-1,0,0,0)}}}function n(){let N=!1,ft=!1,L=null,B=null,W=null;return{setReversed:function(K){if(ft!==K){const at=t.get("EXT_clip_control");ft?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Jt=W;W=null,this.setClear(Jt)}ft=K},getReversed:function(){return ft},setTest:function(K){K?lt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(K){L!==K&&!N&&(i.depthMask(K),L=K)},setFunc:function(K){if(ft&&(K=Cm[K]),B!==K){switch(K){case oa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=K}},setLocked:function(K){N=K},setClear:function(K){W!==K&&(ft&&(K=1-K),i.clearDepth(K),W=K)},reset:function(){N=!1,L=null,B=null,W=null,ft=!1}}}function r(){let N=!1,ft=null,L=null,B=null,W=null,K=null,at=null,Jt=null,me=null;return{setTest:function(qt){N||(qt?lt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(qt){ft!==qt&&!N&&(i.stencilMask(qt),ft=qt)},setFunc:function(qt,Ae,Ge){(L!==qt||B!==Ae||W!==Ge)&&(i.stencilFunc(qt,Ae,Ge),L=qt,B=Ae,W=Ge)},setOp:function(qt,Ae,Ge){(K!==qt||at!==Ae||Jt!==Ge)&&(i.stencilOp(qt,Ae,Ge),K=qt,at=Ae,Jt=Ge)},setLocked:function(qt){N=qt},setClear:function(qt){me!==qt&&(i.clearStencil(qt),me=qt)},reset:function(){N=!1,ft=null,L=null,B=null,W=null,K=null,at=null,Jt=null,me=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,u=new WeakMap;let f={},d={},m=new WeakMap,p=[],g=null,_=!1,c=null,h=null,x=null,E=null,M=null,D=null,w=null,A=new Yt(0,0,0),C=0,T=!1,v=null,R=null,z=null,U=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,tt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=tt>=2);let rt=null,ut={};const Mt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Ct=new le().fromArray(Mt),Y=new le().fromArray(Ot);function nt(N,ft,L,B){const W=new Uint8Array(4),K=i.createTexture();i.bindTexture(N,K),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<L;at++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,B,0,i.RGBA,i.UNSIGNED_BYTE,W):i.texImage2D(ft+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,W);return K}const $={};$[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(zi),bt(!1),Ut(go),lt(i.CULL_FACE),P(qn);function lt(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function mt(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function Pt(N,ft){return d[N]!==ft?(i.bindFramebuffer(N,ft),d[N]=ft,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Dt(N,ft){let L=p,B=!1;if(N){L=m.get(ft),L===void 0&&(L=[],m.set(ft,L));const W=N.textures;if(L.length!==W.length||L[0]!==i.COLOR_ATTACHMENT0){for(let K=0,at=W.length;K<at;K++)L[K]=i.COLOR_ATTACHMENT0+K;L.length=W.length,B=!0}}else L[0]!==i.BACK&&(L[0]=i.BACK,B=!0);B&&i.drawBuffers(L)}function Zt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const zt={[oi]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[Zc]:i.FUNC_REVERSE_SUBTRACT};zt[Kc]=i.MIN,zt[$c]=i.MAX;const J={[jc]:i.ZERO,[Jc]:i.ONE,[Qc]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[eu]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[aa]:i.ONE_MINUS_SRC_ALPHA,[ru]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(N,ft,L,B,W,K,at,Jt,me,qt){if(N===qn){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),N!==qc){if(N!==c||qt!==T){if((h!==oi||M!==oi)&&(i.blendEquation(i.FUNC_ADD),h=oi,M=oi),qt)switch(N){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.ONE,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,E=null,D=null,w=null,A.set(0,0,0),C=0,c=N,T=qt}return}W=W||ft,K=K||L,at=at||B,(ft!==h||W!==M)&&(i.blendEquationSeparate(zt[ft],zt[W]),h=ft,M=W),(L!==x||B!==E||K!==D||at!==w)&&(i.blendFuncSeparate(J[L],J[B],J[K],J[at]),x=L,E=B,D=K,w=at),(Jt.equals(A)===!1||me!==C)&&(i.blendColor(Jt.r,Jt.g,Jt.b,me),A.copy(Jt),C=me),c=N,T=!1}function Ht(N,ft){N.side===en?mt(i.CULL_FACE):lt(i.CULL_FACE);let L=N.side===Xe;ft&&(L=!L),bt(L),N.blending===Ni&&N.transparent===!1?P(qn):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const B=N.stencilWrite;o.setTest(B),B&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Qt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(N){v!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),v=N)}function Ut(N){N!==Wc?(lt(i.CULL_FACE),N!==R&&(N===go?i.cullFace(i.BACK):N===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),R=N}function vt(N){N!==z&&(q&&i.lineWidth(N),z=N)}function Qt(N,ft,L){N?(lt(i.POLYGON_OFFSET_FILL),(U!==ft||V!==L)&&(i.polygonOffset(ft,L),U=ft,V=L)):mt(i.POLYGON_OFFSET_FILL)}function St(N){N?lt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function b(N){N===void 0&&(N=i.TEXTURE0+j-1),rt!==N&&(i.activeTexture(N),rt=N)}function S(N,ft,L){L===void 0&&(rt===null?L=i.TEXTURE0+j-1:L=rt);let B=ut[L];B===void 0&&(B={type:void 0,texture:void 0},ut[L]=B),(B.type!==N||B.texture!==ft)&&(rt!==L&&(i.activeTexture(L),rt=L),i.bindTexture(N,ft||$[N]),B.type=N,B.texture=ft)}function k(){const N=ut[rt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(N){Ct.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ct.copy(N))}function xt(N){Y.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function Kt(N,ft){let L=u.get(ft);L===void 0&&(L=new WeakMap,u.set(ft,L));let B=L.get(N);B===void 0&&(B=i.getUniformBlockIndex(ft,N.name),L.set(N,B))}function Gt(N,ft){const B=u.get(ft).get(N);l.get(ft)!==B&&(i.uniformBlockBinding(ft,B,N.__bindingPointIndex),l.set(ft,B))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},rt=null,ut={},d={},m=new WeakMap,p=[],g=null,_=!1,c=null,h=null,x=null,E=null,M=null,D=null,w=null,A=new Yt(0,0,0),C=0,T=!1,v=null,R=null,z=null,U=null,V=null,Ct.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:mt,bindFramebuffer:Pt,drawBuffers:Dt,useProgram:Zt,setBlending:P,setMaterial:Ht,setFlipSided:bt,setCullFace:Ut,setLineWidth:vt,setPolygonOffset:Qt,setScissorTest:St,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:_t,texImage3D:Lt,updateUBOMapping:Kt,uniformBlockBinding:Gt,texStorage2D:jt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:It,viewport:xt,reset:se}}function hl(i,t,e,n){const r=Lm(n);switch(e){case Jl:return i*t;case tc:return i*t;case ec:return i*t*2;case nc:return i*t/r.components*r.byteLength;case Qa:return i*t/r.components*r.byteLength;case ic:return i*t*2/r.components*r.byteLength;case to:return i*t*2/r.components*r.byteLength;case Ql:return i*t*3/r.components*r.byteLength;case un:return i*t*4/r.components*r.byteLength;case eo:return i*t*4/r.components*r.byteLength;case is:case rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ss:case as:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case _a:case va:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case os:case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rc:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(i){switch(i){case Pn:case Kl:return{byteLength:1,components:1};case mr:case $l:case xr:return{byteLength:2,components:1};case ja:case Ja:return{byteLength:2,components:4};case ui:case $a:case wn:return{byteLength:4,components:1};case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ft,f=new WeakMap;let d;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,S){return p?new OffscreenCanvas(b,S):hs("canvas")}function _(b,S,k){let Q=1;const et=St(b);if((et.width>k||et.height>k)&&(Q=k/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){const Z=Math.floor(Q*et.width),gt=Math.floor(Q*et.height);d===void 0&&(d=g(Z,gt));const ct=S?g(Z,gt):d;return ct.width=Z,ct.height=gt,ct.getContext("2d").drawImage(b,0,0,Z,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+gt+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function c(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,S,k,Q,et=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=S;if(S===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),S===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){const gt=et?vs:te.getTransfer(Q);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=gt===ae?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(b,S){let k;return b?S===null||S===ui||S===Gi?k=i.DEPTH24_STENCIL8:S===wn?k=i.DEPTH32F_STENCIL8:S===mr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ui||S===Gi?k=i.DEPTH_COMPONENT24:S===wn?k=i.DEPTH_COMPONENT32F:S===mr&&(k=i.DEPTH_COMPONENT16),k}function D(b,S){return c(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function w(b){const S=b.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&f.delete(S)}function A(b){const S=b.target;S.removeEventListener("dispose",A),v(S)}function C(b){const S=n.get(b);if(S.__webglInit===void 0)return;const k=b.source,Q=m.get(k);if(Q){const et=Q[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(b),Object.keys(Q).length===0&&m.delete(k)}n.remove(b)}function T(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const k=b.source,Q=m.get(k);delete Q[S.__cacheKey],a.memory.textures--}function v(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let et=0;et<S.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let Q=0,et=k.length;Q<et;Q++){const Z=n.get(k[Q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[Q])}n.remove(b)}let R=0;function z(){R=0}function U(){const b=R;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),R+=1,b}function V(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function j(b,S){const k=n.get(b);if(b.isVideoTexture&&vt(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,b,S);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function q(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Y(k,b,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function tt(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Y(k,b,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function X(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){nt(k,b,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const rt={[pr]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},ut={[hn]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Es]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Mt={[yu]:i.NEVER,[Ru]:i.ALWAYS,[Eu]:i.LESS,[ac]:i.LEQUAL,[Tu]:i.EQUAL,[wu]:i.GEQUAL,[bu]:i.GREATER,[Au]:i.NOTEQUAL};function Ot(b,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Es||S.magFilter===yr||S.magFilter===Xn||S.minFilter===cn||S.minFilter===Es||S.minFilter===yr||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,rt[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,rt[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,rt[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==yr&&S.minFilter!==Xn||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",w));const Q=S.source;let et=m.get(Q);et===void 0&&(et={},m.set(Q,et));const Z=V(S);if(Z!==b.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),et[Z].usedTimes++;const gt=et[b.__cacheKey];gt!==void 0&&(et[b.__cacheKey].usedTimes--,gt.usedTimes===0&&T(S)),b.__cacheKey=Z,b.__webglTexture=et[Z].texture}return k}function Y(b,S,k){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);const et=Ct(b,S),Z=S.source;e.bindTexture(Q,b.__webglTexture,i.TEXTURE0+k);const gt=n.get(Z);if(Z.version!==gt.__version||et===!0){e.activeTexture(i.TEXTURE0+k);const ct=te.getPrimaries(te.workingColorSpace),pt=S.colorSpace===Wn?null:te.getPrimaries(S.colorSpace),jt=S.colorSpace===Wn||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(S.image,!1,r.maxTextureSize);it=Qt(S,it);const _t=s.convert(S.format,S.colorSpace),Lt=s.convert(S.type);let It=E(S.internalFormat,_t,Lt,S.colorSpace,S.isVideoTexture);Ot(Q,S);let xt;const Kt=S.mipmaps,Gt=S.isVideoTexture!==!0,se=gt.__version===void 0||et===!0,N=Z.dataReady,ft=D(S,it);if(S.isDepthTexture)It=M(S.format===Vi,S.type),se&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,_t,Lt,null));else if(S.isDataTexture)if(Kt.length>0){Gt&&se&&e.texStorage2D(i.TEXTURE_2D,ft,It,Kt[0].width,Kt[0].height);for(let L=0,B=Kt.length;L<B;L++)xt=Kt[L],Gt?N&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,xt.width,xt.height,_t,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,L,It,xt.width,xt.height,0,_t,Lt,xt.data);S.generateMipmaps=!1}else Gt?(se&&e.texStorage2D(i.TEXTURE_2D,ft,It,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,_t,Lt,it.data)):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,_t,Lt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,It,Kt[0].width,Kt[0].height,it.depth);for(let L=0,B=Kt.length;L<B;L++)if(xt=Kt[L],S.format!==un)if(_t!==null)if(Gt){if(N)if(S.layerUpdates.size>0){const W=hl(xt.width,xt.height,S.format,S.type);for(const K of S.layerUpdates){const at=xt.data.subarray(K*W/xt.data.BYTES_PER_ELEMENT,(K+1)*W/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,K,xt.width,xt.height,1,_t,at)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,xt.width,xt.height,it.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,L,It,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,xt.width,xt.height,it.depth,_t,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,L,It,xt.width,xt.height,it.depth,0,_t,Lt,xt.data)}else{Gt&&se&&e.texStorage2D(i.TEXTURE_2D,ft,It,Kt[0].width,Kt[0].height);for(let L=0,B=Kt.length;L<B;L++)xt=Kt[L],S.format!==un?_t!==null?Gt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,L,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,L,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?N&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,xt.width,xt.height,_t,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,L,It,xt.width,xt.height,0,_t,Lt,xt.data)}else if(S.isDataArrayTexture)if(Gt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,It,it.width,it.height,it.depth),N)if(S.layerUpdates.size>0){const L=hl(it.width,it.height,S.format,S.type);for(const B of S.layerUpdates){const W=it.data.subarray(B*L/it.data.BYTES_PER_ELEMENT,(B+1)*L/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,B,it.width,it.height,1,_t,Lt,W)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Lt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,_t,Lt,it.data);else if(S.isData3DTexture)Gt?(se&&e.texStorage3D(i.TEXTURE_3D,ft,It,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Lt,it.data)):e.texImage3D(i.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,_t,Lt,it.data);else if(S.isFramebufferTexture){if(se)if(Gt)e.texStorage2D(i.TEXTURE_2D,ft,It,it.width,it.height);else{let L=it.width,B=it.height;for(let W=0;W<ft;W++)e.texImage2D(i.TEXTURE_2D,W,It,L,B,0,_t,Lt,null),L>>=1,B>>=1}}else if(Kt.length>0){if(Gt&&se){const L=St(Kt[0]);e.texStorage2D(i.TEXTURE_2D,ft,It,L.width,L.height)}for(let L=0,B=Kt.length;L<B;L++)xt=Kt[L],Gt?N&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,_t,Lt,xt):e.texImage2D(i.TEXTURE_2D,L,It,_t,Lt,xt);S.generateMipmaps=!1}else if(Gt){if(se){const L=St(it);e.texStorage2D(i.TEXTURE_2D,ft,It,L.width,L.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Lt,it)}else e.texImage2D(i.TEXTURE_2D,0,It,_t,Lt,it);c(S)&&h(Q),gt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function nt(b,S,k){if(S.image.length!==6)return;const Q=Ct(b,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const Z=n.get(et);if(et.version!==Z.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const gt=te.getPrimaries(te.workingColorSpace),ct=S.colorSpace===Wn?null:te.getPrimaries(S.colorSpace),pt=S.colorSpace===Wn||gt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let B=0;B<6;B++)!jt&&!it?_t[B]=_(S.image[B],!0,r.maxCubemapSize):_t[B]=it?S.image[B].image:S.image[B],_t[B]=Qt(S,_t[B]);const Lt=_t[0],It=s.convert(S.format,S.colorSpace),xt=s.convert(S.type),Kt=E(S.internalFormat,It,xt,S.colorSpace),Gt=S.isVideoTexture!==!0,se=Z.__version===void 0||Q===!0,N=et.dataReady;let ft=D(S,Lt);Ot(i.TEXTURE_CUBE_MAP,S);let L;if(jt){Gt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Kt,Lt.width,Lt.height);for(let B=0;B<6;B++){L=_t[B].mipmaps;for(let W=0;W<L.length;W++){const K=L[W];S.format!==un?It!==null?Gt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W,0,0,K.width,K.height,It,K.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W,Kt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W,0,0,K.width,K.height,It,xt,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W,Kt,K.width,K.height,0,It,xt,K.data)}}}else{if(L=S.mipmaps,Gt&&se){L.length>0&&ft++;const B=St(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Kt,B.width,B.height)}for(let B=0;B<6;B++)if(it){Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,_t[B].width,_t[B].height,It,xt,_t[B].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Kt,_t[B].width,_t[B].height,0,It,xt,_t[B].data);for(let W=0;W<L.length;W++){const at=L[W].image[B].image;Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W+1,0,0,at.width,at.height,It,xt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W+1,Kt,at.width,at.height,0,It,xt,at.data)}}else{Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,It,xt,_t[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Kt,It,xt,_t[B]);for(let W=0;W<L.length;W++){const K=L[W];Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W+1,0,0,It,xt,K.image[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W+1,Kt,It,xt,K.image[B])}}}c(S)&&h(i.TEXTURE_CUBE_MAP),Z.__version=et.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function $(b,S,k,Q,et,Z){const gt=s.convert(k.format,k.colorSpace),ct=s.convert(k.type),pt=E(k.internalFormat,gt,ct,k.colorSpace),jt=n.get(S),it=n.get(k);if(it.__renderTarget=S,!jt.__hasExternalTextures){const _t=Math.max(1,S.width>>Z),Lt=Math.max(1,S.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,pt,_t,Lt,S.depth,0,gt,ct,null):e.texImage2D(et,Z,pt,_t,Lt,0,gt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,it.__webglTexture,0,bt(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(b,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer){const Q=S.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,Z=M(S.stencilBuffer,et),gt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=bt(S);Ut(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Z,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,b)}else{const Q=S.textures;for(let et=0;et<Q.length;et++){const Z=Q[et],gt=s.convert(Z.format,Z.colorSpace),ct=s.convert(Z.type),pt=E(Z.internalFormat,gt,ct,Z.colorSpace),jt=bt(S);k&&Ut(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,pt,S.width,S.height):Ut(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const et=Q.__webglTexture,Z=bt(S);if(S.depthTexture.format===Fi)Ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(S.depthTexture.format===Vi)Ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const S=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const Q=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Q}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");mt(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),lt(S.__webglDepthbuffer[Q],b,!1);else{const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),lt(S.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(b,S,k){const Q=n.get(b);S!==void 0&&$(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Pt(b)}function Zt(b){const S=b.texture,k=n.get(b),Q=n.get(S);b.addEventListener("dispose",A);const et=b.textures,Z=b.isWebGLCubeRenderTarget===!0,gt=et.length>1;if(gt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let pt=0;pt<S.mipmaps.length;pt++)k.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else k.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)k.__webglFramebuffer[ct]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(gt)for(let ct=0,pt=et.length;ct<pt;ct++){const jt=n.get(et[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Ut(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const pt=et[ct];k.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const jt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),_t=E(pt.internalFormat,jt,it,pt.colorSpace,b.isXRRenderTarget===!0),Lt=bt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,_t,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)$(k.__webglFramebuffer[ct][pt],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else $(k.__webglFramebuffer[ct],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);c(S)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,pt=et.length;ct<pt;ct++){const jt=et[ct],it=n.get(jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Ot(i.TEXTURE_2D,jt),$(k.__webglFramebuffer,b,jt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),c(jt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),Ot(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)$(k.__webglFramebuffer[pt],b,S,i.COLOR_ATTACHMENT0,ct,pt);else $(k.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,ct,0);c(S)&&h(ct),e.unbindTexture()}b.depthBuffer&&Pt(b)}function zt(b){const S=b.textures;for(let k=0,Q=S.length;k<Q;k++){const et=S[k];if(c(et)){const Z=x(b),gt=n.get(et).__webglTexture;e.bindTexture(Z,gt),h(Z),e.unbindTexture()}}}const J=[],P=[];function Ht(b){if(b.samples>0){if(Ut(b)===!1){const S=b.textures,k=b.width,Q=b.height;let et=i.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(b),ct=S.length>1;if(ct)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[pt]);const jt=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,k,Q,0,0,k,Q,et,i.NEAREST),l===!0&&(J.length=0,P.length=0,J.push(i.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(J.push(Z),P.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[pt]);const jt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function bt(b){return Math.min(r.maxSamples,b.samples)}function Ut(b){const S=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function vt(b){const S=a.render.frame;f.get(b)!==S&&(f.set(b,S),b.update())}function Qt(b,S){const k=b.colorSpace,Q=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Xi&&k!==Wn&&(te.getTransfer(k)===ae?(Q!==un||et!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function St(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=Dt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ut}function Im(i,t){function e(n,r=Wn){let s;const a=te.getTransfer(r);if(n===Pn)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return i.BYTE;if(n===$l)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===un)return i.RGBA;if(n===tc)return i.LUMINANCE;if(n===ec)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===ic)return i.RG;if(n===to)return i.RG_INTEGER;if(n===eo)return i.RGBA_INTEGER;if(n===is||n===rs||n===ss||n===as)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===is)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===is)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===xa||n===va||n===Ma)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ya||n===Ea)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sa||n===ya)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ta||n===ba||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ta)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===os||n===Ba||n===za)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===os)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===ka||n===Ha||n===Ga)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===os)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Um extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ke extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nm={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const c=e.getJointPose(_,n),h=this._getHandJoint(u,_);c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=c.radius),h.visible=c!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=f.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&m>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&m<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fm=`
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

}`;class Bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new He,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zm extends qi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,d=null,m=null,p=null,g=null;const _=new Bm,c=e.getContextAttributes();let h=null,x=null;const E=[],M=[],D=new Ft;let w=null;const A=new Ke;A.viewport=new le;const C=new Ke;C.viewport=new le;const T=[A,C],v=new Um;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=E[Y];return nt===void 0&&(nt=new Js,E[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=E[Y];return nt===void 0&&(nt=new Js,E[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=E[Y];return nt===void 0&&(nt=new Js,E[Y]=nt),nt.getHandSpace()};function U(Y){const nt=M.indexOf(Y.inputSource);if(nt===-1)return;const $=E[nt];$!==void 0&&($.update(Y.inputSource,Y.frame,u||a),$.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<E.length;Y++){const nt=M[Y];nt!==null&&(M[Y]=null,E[Y].disconnect(nt))}R=null,z=null,_.reset(),t.setRenderTarget(h),p=null,m=null,d=null,r=null,x=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),c.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const nt={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new hi(p.framebufferWidth,p.framebufferHeight,{format:un,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:c.stencil})}else{let nt=null,$=null,lt=null;c.depth&&(lt=c.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=c.stencil?Vi:Fi,$=c.stencil?Gi:ui);const mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};d=new XRWebGLBinding(r,e),m=d.createProjectionLayer(mt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),x=new hi(m.textureWidth,m.textureHeight,{format:un,type:Pn,depthTexture:new vc(m.textureWidth,m.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:c.stencil,colorSpace:t.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ct.setContext(r),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Y){for(let nt=0;nt<Y.removed.length;nt++){const $=Y.removed[nt],lt=M.indexOf($);lt>=0&&(M[lt]=null,E[lt].disconnect($))}for(let nt=0;nt<Y.added.length;nt++){const $=Y.added[nt];let lt=M.indexOf($);if(lt===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=M.length){M.push($),lt=Pt;break}else if(M[Pt]===null){M[Pt]=$,lt=Pt;break}if(lt===-1)break}const mt=E[lt];mt&&mt.connect($)}}const q=new F,tt=new F;function X(Y,nt,$){q.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition($.matrixWorld);const lt=q.distanceTo(tt),mt=nt.projectionMatrix.elements,Pt=$.projectionMatrix.elements,Dt=mt[14]/(mt[10]-1),Zt=mt[14]/(mt[10]+1),zt=(mt[9]+1)/mt[5],J=(mt[9]-1)/mt[5],P=(mt[8]-1)/mt[0],Ht=(Pt[8]+1)/Pt[0],bt=Dt*P,Ut=Dt*Ht,vt=lt/(-P+Ht),Qt=vt*-P;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Qt),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const St=Dt+vt,b=Zt+vt,S=bt-Qt,k=Ut+(lt-Qt),Q=zt*Zt/b*St,et=J*Zt/b*St;Y.projectionMatrix.makePerspective(S,k,Q,et,St,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let nt=Y.near,$=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&($=_.depthFar)),v.near=C.near=A.near=nt,v.far=C.far=A.far=$,(R!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,z=v.far),A.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;const lt=Y.parent,mt=v.cameras;rt(v,lt);for(let Pt=0;Pt<mt.length;Pt++)rt(mt[Pt],lt);mt.length===2?X(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),ut(Y,v,lt)};function ut(Y,nt,$){$===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy($.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(Y){l=Y,m!==null&&(m.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Mt=null;function Ot(Y,nt){if(f=nt.getViewerPose(u||a),g=nt,f!==null){const $=f.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let lt=!1;$.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let Pt=0;Pt<$.length;Pt++){const Dt=$[Pt];let Zt=null;if(p!==null)Zt=p.getViewport(Dt);else{const J=d.getViewSubImage(m,Dt);Zt=J.viewport,Pt===0&&(t.setRenderTargetTextures(x,J.colorTexture,m.ignoreDepthValues?void 0:J.depthStencilTexture),t.setRenderTarget(x))}let zt=T[Pt];zt===void 0&&(zt=new Ke,zt.layers.enable(Pt),zt.viewport=new le,T[Pt]=zt),zt.matrix.fromArray(Dt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Dt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Pt===0&&(v.matrix.copy(zt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(zt)}const mt=r.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Pt=d.getDepthInformation($[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,r.renderState)}}for(let $=0;$<E.length;$++){const lt=M[$],mt=E[$];lt!==null&&mt!==void 0&&mt.update(lt,nt,u||a)}Mt&&Mt(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Ct=new _c;Ct.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}}const ri=new gn,km=new ue;function Hm(i,t){function e(c,h){c.matrixAutoUpdate===!0&&c.updateMatrix(),h.value.copy(c.matrix)}function n(c,h){h.color.getRGB(c.fogColor.value,pc(i)),h.isFog?(c.fogNear.value=h.near,c.fogFar.value=h.far):h.isFogExp2&&(c.fogDensity.value=h.density)}function r(c,h,x,E,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(c,h):h.isMeshToonMaterial?(s(c,h),d(c,h)):h.isMeshPhongMaterial?(s(c,h),f(c,h)):h.isMeshStandardMaterial?(s(c,h),m(c,h),h.isMeshPhysicalMaterial&&p(c,h,M)):h.isMeshMatcapMaterial?(s(c,h),g(c,h)):h.isMeshDepthMaterial?s(c,h):h.isMeshDistanceMaterial?(s(c,h),_(c,h)):h.isMeshNormalMaterial?s(c,h):h.isLineBasicMaterial?(a(c,h),h.isLineDashedMaterial&&o(c,h)):h.isPointsMaterial?l(c,h,x,E):h.isSpriteMaterial?u(c,h):h.isShadowMaterial?(c.color.value.copy(h.color),c.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(c,h){c.opacity.value=h.opacity,h.color&&c.diffuse.value.copy(h.color),h.emissive&&c.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(c.map.value=h.map,e(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.bumpMap&&(c.bumpMap.value=h.bumpMap,e(h.bumpMap,c.bumpMapTransform),c.bumpScale.value=h.bumpScale,h.side===Xe&&(c.bumpScale.value*=-1)),h.normalMap&&(c.normalMap.value=h.normalMap,e(h.normalMap,c.normalMapTransform),c.normalScale.value.copy(h.normalScale),h.side===Xe&&c.normalScale.value.negate()),h.displacementMap&&(c.displacementMap.value=h.displacementMap,e(h.displacementMap,c.displacementMapTransform),c.displacementScale.value=h.displacementScale,c.displacementBias.value=h.displacementBias),h.emissiveMap&&(c.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,c.emissiveMapTransform)),h.specularMap&&(c.specularMap.value=h.specularMap,e(h.specularMap,c.specularMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest);const x=t.get(h),E=x.envMap,M=x.envMapRotation;E&&(c.envMap.value=E,ri.copy(M),ri.x*=-1,ri.y*=-1,ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),c.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(ri)),c.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=h.reflectivity,c.ior.value=h.ior,c.refractionRatio.value=h.refractionRatio),h.lightMap&&(c.lightMap.value=h.lightMap,c.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,c.lightMapTransform)),h.aoMap&&(c.aoMap.value=h.aoMap,c.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,c.aoMapTransform))}function a(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform))}function o(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}function l(c,h,x,E){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*x,c.scale.value=E*.5,h.map&&(c.map.value=h.map,e(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}function u(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}function f(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}function d(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}function m(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}function p(c,h,x){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xe&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=x.texture,c.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,c.specularIntensityMapTransform))}function g(c,h){h.matcap&&(c.matcap.value=h.matcap)}function _(c,h){const x=t.get(h).light;c.referencePosition.value.setFromMatrixPosition(x.matrixWorld),c.nearDistance.value=x.shadow.camera.near,c.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gm(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const M=E.program;n.uniformBlockBinding(x,M)}function u(x,E){let M=r[x.id];M===void 0&&(g(x),M=f(x),r[x.id]=M,x.addEventListener("dispose",c));const D=E.program;n.updateUBOMapping(x,D);const w=t.render.frame;s[x.id]!==w&&(m(x),s[x.id]=w)}function f(x){const E=d();x.__bindingPointIndex=E;const M=i.createBuffer(),D=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){const E=r[x.id],M=x.uniforms,D=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,A=M.length;w<A;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,v=C.length;T<v;T++){const R=C[T];if(p(R,w,T,D)===!0){const z=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let j=0;j<U.length;j++){const q=U[j],tt=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+V,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,E,M,D){const w=x.value,A=E+"_"+M;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const C=D[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return D[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const E=x.uniforms;let M=0;const D=16;for(let A=0,C=E.length;A<C;A++){const T=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,R=T.length;v<R;v++){const z=T[v],U=Array.isArray(z.value)?z.value:[z.value];for(let V=0,j=U.length;V<j;V++){const q=U[V],tt=_(q),X=M%D,rt=X%tt.boundary,ut=X+rt;M+=rt,ut!==0&&D-ut<tt.storage&&(M+=D-ut),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=tt.storage}}}const w=M%D;return w>0&&(M+=D-w),x.__size=M,x.__cache={},this}function _(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function c(x){const E=x.target;E.removeEventListener("dispose",c);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class Vm{constructor(t={}){const{canvas:e=Pu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let c=null,h=null;const x=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Yn,this.toneMappingExposure=1;const M=this;let D=!1,w=0,A=0,C=null,T=-1,v=null;const R=new le,z=new le;let U=null;const V=new Yt(0);let j=0,q=e.width,tt=e.height,X=1,rt=null,ut=null;const Mt=new le(0,0,q,tt),Ot=new le(0,0,q,tt);let Ct=!1;const Y=new io;let nt=!1,$=!1;const lt=new ue,mt=new ue,Pt=new F,Dt=new le,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function J(){return C===null?X:1}let P=n;function Ht(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",B,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",K,!1),P===null){const I="webgl2";if(P=Ht(I,y),P===null)throw Ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let bt,Ut,vt,Qt,St,b,S,k,Q,et,Z,gt,ct,pt,jt,it,_t,Lt,It,xt,Kt,Gt,se,N;function ft(){bt=new Zd(P),bt.init(),Gt=new Im(P,bt),Ut=new Gd(P,bt,t,Gt),vt=new Pm(P,bt),Ut.reverseDepthBuffer&&m&&vt.buffers.depth.setReversed(!0),Qt=new jd(P),St=new mm,b=new Dm(P,bt,vt,St,Ut,Gt,Qt),S=new Wd(M),k=new Yd(M),Q=new ih(P),se=new kd(P,Q),et=new Kd(P,Q,Qt,se),Z=new Qd(P,et,Q,Qt),It=new Jd(P,Ut,b),it=new Vd(St),gt=new pm(M,S,k,bt,Ut,se,it),ct=new Hm(M,St),pt=new _m,jt=new Em(bt),Lt=new zd(M,S,k,vt,Z,p,l),_t=new Rm(M,Z,Ut),N=new Gm(P,Qt,Ut,vt),xt=new Hd(P,bt,Qt),Kt=new $d(P,bt,Qt),Qt.programs=gt.programs,M.capabilities=Ut,M.extensions=bt,M.properties=St,M.renderLists=pt,M.shadowMap=_t,M.state=vt,M.info=Qt}ft();const L=new zm(M,P);this.xr=L,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(q,tt,!1))},this.getSize=function(y){return y.set(q,tt)},this.setSize=function(y,I,H=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,tt=I,e.width=Math.floor(y*X),e.height=Math.floor(I*X),H===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(q*X,tt*X).floor()},this.setDrawingBufferSize=function(y,I,H){q=y,tt=I,X=H,e.width=Math.floor(y*H),e.height=Math.floor(I*H),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,I,H,G){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,H,G),vt.viewport(R.copy(Mt).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Ot)},this.setScissor=function(y,I,H,G){y.isVector4?Ot.set(y.x,y.y,y.z,y.w):Ot.set(y,I,H,G),vt.scissor(z.copy(Ot).multiplyScalar(X).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(y){vt.setScissorTest(Ct=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(y=!0,I=!0,H=!0){let G=0;if(y){let O=!1;if(C!==null){const ot=C.texture.format;O=ot===eo||ot===to||ot===Qa}if(O){const ot=C.texture.type,dt=ot===Pn||ot===ui||ot===mr||ot===Gi||ot===ja||ot===Ja,yt=Lt.getClearColor(),Et=Lt.getClearAlpha(),Bt=yt.r,Vt=yt.g,Tt=yt.b;dt?(g[0]=Bt,g[1]=Vt,g[2]=Tt,g[3]=Et,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Bt,_[1]=Vt,_[2]=Tt,_[3]=Et,P.clearBufferiv(P.COLOR,0,_))}else G|=P.COLOR_BUFFER_BIT}I&&(G|=P.DEPTH_BUFFER_BIT),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",B,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",K,!1),pt.dispose(),jt.dispose(),St.dispose(),S.dispose(),k.dispose(),Z.dispose(),se.dispose(),N.dispose(),gt.dispose(),L.dispose(),L.removeEventListener("sessionstart",_n),L.removeEventListener("sessionend",Ln),we.stop()};function B(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=Qt.autoReset,I=_t.enabled,H=_t.autoUpdate,G=_t.needsUpdate,O=_t.type;ft(),Qt.autoReset=y,_t.enabled=I,_t.autoUpdate=H,_t.needsUpdate=G,_t.type=O}function K(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function at(y){const I=y.target;I.removeEventListener("dispose",at),Jt(I)}function Jt(y){me(y),St.remove(y)}function me(y){const I=St.get(y).programs;I!==void 0&&(I.forEach(function(H){gt.releaseProgram(H)}),y.isShaderMaterial&&gt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,H,G,O,ot){I===null&&(I=Zt);const dt=O.isMesh&&O.matrixWorld.determinant()<0,yt=fi(y,I,H,G,O);vt.setMaterial(G,dt);let Et=H.index,Bt=1;if(G.wireframe===!0){if(Et=et.getWireframeAttribute(H),Et===void 0)return;Bt=2}const Vt=H.drawRange,Tt=H.attributes.position;let ee=Vt.start*Bt,ce=(Vt.start+Vt.count)*Bt;ot!==null&&(ee=Math.max(ee,ot.start*Bt),ce=Math.min(ce,(ot.start+ot.count)*Bt)),Et!==null?(ee=Math.max(ee,0),ce=Math.min(ce,Et.count)):Tt!=null&&(ee=Math.max(ee,0),ce=Math.min(ce,Tt.count));const de=ce-ee;if(de<0||de===1/0)return;se.setup(O,G,yt,H,Et);let We,ie=xt;if(Et!==null&&(We=Q.get(Et),ie=Kt,ie.setIndex(We)),O.isMesh)G.wireframe===!0?(vt.setLineWidth(G.wireframeLinewidth*J()),ie.setMode(P.LINES)):ie.setMode(P.TRIANGLES);else if(O.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),vt.setLineWidth(Rt*J()),O.isLineSegments?ie.setMode(P.LINES):O.isLineLoop?ie.setMode(P.LINE_LOOP):ie.setMode(P.LINE_STRIP)}else O.isPoints?ie.setMode(P.POINTS):O.isSprite&&ie.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ie.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))ie.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Rt=O._multiDrawStarts,vn=O._multiDrawCounts,re=O._multiDrawCount,sn=Et?Q.get(Et).bytesPerElement:1,di=St.get(G).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)di.setValue(P,"_gl_DrawID",qe),ie.render(Rt[qe]/sn,vn[qe])}else if(O.isInstancedMesh)ie.renderInstances(ee,de,O.count);else if(H.isInstancedBufferGeometry){const Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vn=Math.min(H.instanceCount,Rt);ie.renderInstances(ee,de,vn)}else ie.render(ee,de)};function qt(y,I,H){y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=Xe,y.needsUpdate=!0,Ne(y,I,H),y.side=Kn,y.needsUpdate=!0,Ne(y,I,H),y.side=en):Ne(y,I,H)}this.compile=function(y,I,H=null){H===null&&(H=y),h=jt.get(H),h.init(I),E.push(h),H.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),y!==H&&y.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const G=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const yt=ot[dt];qt(yt,H,O),G.add(yt)}else qt(ot,H,O),G.add(ot)}),E.pop(),h=null,G},this.compileAsync=function(y,I,H=null){const G=this.compile(y,I,H);return new Promise(O=>{function ot(){if(G.forEach(function(dt){St.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){O(y);return}setTimeout(ot,10)}bt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ae=null;function Ge(y){Ae&&Ae(y)}function _n(){we.stop()}function Ln(){we.start()}const we=new _c;we.setAnimationLoop(Ge),typeof self!="undefined"&&we.setContext(self),this.setAnimationLoop=function(y){Ae=y,L.setAnimationLoop(y),y===null?we.stop():we.start()},L.addEventListener("sessionstart",_n),L.addEventListener("sessionend",Ln),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(I),I=L.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,C),h=jt.get(y,E.length),h.init(I),E.push(h),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(mt),$=this.localClippingEnabled,nt=it.init(this.clippingPlanes,$),c=pt.get(y,x.length),c.init(),x.push(c),L.enabled===!0&&L.isPresenting===!0){const ot=M.xr.getDepthSensingMesh();ot!==null&&fe(ot,I,-1/0,M.sortObjects)}fe(y,I,0,M.sortObjects),c.finish(),M.sortObjects===!0&&c.sort(rt,ut),zt=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,zt&&Lt.addToRenderList(c,y),this.info.render.frame++,nt===!0&&it.beginShadows();const H=h.state.shadowsArray;_t.render(H,y,I),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=c.opaque,O=c.transmissive;if(h.setupLights(),I.isArrayCamera){const ot=I.cameras;if(O.length>0)for(let dt=0,yt=ot.length;dt<yt;dt++){const Et=ot[dt];Dn(G,O,y,Et)}zt&&Lt.render(y);for(let dt=0,yt=ot.length;dt<yt;dt++){const Et=ot[dt];Ie(c,y,Et,Et.viewport)}}else O.length>0&&Dn(G,O,y,I),zt&&Lt.render(y),Ie(c,y,I);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(M,y,I),se.resetDefaultState(),T=-1,v=null,E.pop(),E.length>0?(h=E[E.length-1],nt===!0&&it.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?c=x[x.length-1]:c=null};function fe(y,I,H,G){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){G&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(mt);const dt=Z.update(y),yt=y.material;yt.visible&&c.push(y,dt,yt,H,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const dt=Z.update(y),yt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Dt.copy(dt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(mt)),Array.isArray(yt)){const Et=dt.groups;for(let Bt=0,Vt=Et.length;Bt<Vt;Bt++){const Tt=Et[Bt],ee=yt[Tt.materialIndex];ee&&ee.visible&&c.push(y,dt,ee,H,Dt.z,Tt)}}else yt.visible&&c.push(y,dt,yt,H,Dt.z,null)}}const ot=y.children;for(let dt=0,yt=ot.length;dt<yt;dt++)fe(ot[dt],I,H,G)}function Ie(y,I,H,G){const O=y.opaque,ot=y.transmissive,dt=y.transparent;h.setupLightsView(H),nt===!0&&it.setGlobalState(M.clippingPlanes,H),G&&vt.viewport(R.copy(G)),O.length>0&&Ve(O,I,H),ot.length>0&&Ve(ot,I,H),dt.length>0&&Ve(dt,I,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Dn(y,I,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?xr:Pn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=h.state.transmissionRenderTarget[G.id],dt=G.viewport||R;ot.setSize(dt.z,dt.w);const yt=M.getRenderTarget();M.setRenderTarget(ot),M.getClearColor(V),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),zt&&Lt.render(H);const Et=M.toneMapping;M.toneMapping=Yn;const Bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),nt===!0&&it.setGlobalState(M.clippingPlanes,G),Ve(y,H,G),b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Tt=0,ee=I.length;Tt<ee;Tt++){const ce=I[Tt],de=ce.object,We=ce.geometry,ie=ce.material,Rt=ce.group;if(ie.side===en&&de.layers.test(G.layers)){const vn=ie.side;ie.side=Xe,ie.needsUpdate=!0,Ue(de,H,G,We,ie,Rt),ie.side=vn,ie.needsUpdate=!0,Vt=!0}}Vt===!0&&(b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot))}M.setRenderTarget(yt),M.setClearColor(V,j),Bt!==void 0&&(G.viewport=Bt),M.toneMapping=Et}function Ve(y,I,H){const G=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ot=y.length;O<ot;O++){const dt=y[O],yt=dt.object,Et=dt.geometry,Bt=G===null?dt.material:G,Vt=dt.group;yt.layers.test(H.layers)&&Ue(yt,I,H,Et,Bt,Vt)}}function Ue(y,I,H,G,O,ot){y.onBeforeRender(M,I,H,G,O,ot),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(M,I,H,G,y,ot),O.transparent===!0&&O.side===en&&O.forceSinglePass===!1?(O.side=Xe,O.needsUpdate=!0,M.renderBufferDirect(H,I,G,O,y,ot),O.side=Kn,O.needsUpdate=!0,M.renderBufferDirect(H,I,G,O,y,ot),O.side=en):M.renderBufferDirect(H,I,G,O,y,ot),y.onAfterRender(M,I,H,G,O,ot)}function Ne(y,I,H){I.isScene!==!0&&(I=Zt);const G=St.get(y),O=h.state.lights,ot=h.state.shadowsArray,dt=O.state.version,yt=gt.getParameters(y,O.state,ot,I,H),Et=gt.getProgramCacheKey(yt);let Bt=G.programs;G.environment=y.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(y.isMeshStandardMaterial?k:S).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Bt===void 0&&(y.addEventListener("dispose",at),Bt=new Map,G.programs=Bt);let Vt=Bt.get(Et);if(Vt!==void 0){if(G.currentProgram===Vt&&G.lightsStateVersion===dt)return In(y,yt),Vt}else yt.uniforms=gt.getUniforms(y),y.onBeforeCompile(yt,M),Vt=gt.acquireProgram(yt,Et),Bt.set(Et,Vt),G.uniforms=yt.uniforms;const Tt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=it.uniform),In(y,yt),G.needsLights=st(y),G.lightsStateVersion=dt,G.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMap.value=O.state.directionalShadowMap,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotShadowMap.value=O.state.spotShadowMap,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMap.value=O.state.pointShadowMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Vt,G.uniformsList=null,Vt}function rn(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=ls.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function In(y,I){const H=St.get(y);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function fi(y,I,H,G,O){I.isScene!==!0&&(I=Zt),b.resetTextureUnits();const ot=I.fog,dt=G.isMeshStandardMaterial?I.environment:null,yt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xi,Et=(G.isMeshStandardMaterial?k:S).get(G.envMap||dt),Bt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color;let de=Yn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=M.toneMapping);const We=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=We!==void 0?We.length:0,Rt=St.get(G),vn=h.state.lights;if(nt===!0&&($===!0||y!==v)){const Qe=y===v&&G.id===T;it.setState(G,y,Qe)}let re=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==vn.state.version||Rt.outputColorSpace!==yt||O.isBatchedMesh&&Rt.batching===!1||!O.isBatchedMesh&&Rt.batching===!0||O.isBatchedMesh&&Rt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Rt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Rt.instancing===!1||!O.isInstancedMesh&&Rt.instancing===!0||O.isSkinnedMesh&&Rt.skinning===!1||!O.isSkinnedMesh&&Rt.skinning===!0||O.isInstancedMesh&&Rt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Rt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Rt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Rt.instancingMorph===!1&&O.morphTexture!==null||Rt.envMap!==Et||G.fog===!0&&Rt.fog!==ot||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==Vt||Rt.morphTargets!==Tt||Rt.morphNormals!==ee||Rt.morphColors!==ce||Rt.toneMapping!==de||Rt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Rt.__version=G.version);let sn=Rt.currentProgram;re===!0&&(sn=Ne(G,I,O));let di=!1,qe=!1,Zi=!1;const pe=sn.getUniforms(),dn=Rt.uniforms;if(vt.useProgram(sn.program)&&(di=!0,qe=!0,Zi=!0),G.id!==T&&(T=G.id,qe=!0),di||v!==y){vt.buffers.depth.getReversed()?(lt.copy(y.projectionMatrix),Du(lt),Iu(lt),pe.setValue(P,"projectionMatrix",lt)):pe.setValue(P,"projectionMatrix",y.projectionMatrix),pe.setValue(P,"viewMatrix",y.matrixWorldInverse);const Un=pe.map.cameraPosition;Un!==void 0&&Un.setValue(P,Pt.setFromMatrixPosition(y.matrixWorld)),Ut.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,qe=!0,Zi=!0)}if(O.isSkinnedMesh){pe.setOptional(P,O,"bindMatrix"),pe.setOptional(P,O,"bindMatrixInverse");const Qe=O.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),pe.setValue(P,"boneTexture",Qe.boneTexture,b))}O.isBatchedMesh&&(pe.setOptional(P,O,"batchingTexture"),pe.setValue(P,"batchingTexture",O._matricesTexture,b),pe.setOptional(P,O,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",O._indirectTexture,b),pe.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",O._colorsTexture,b));const Ki=H.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&It.update(O,H,sn),(qe||Rt.receiveShadow!==O.receiveShadow)&&(Rt.receiveShadow=O.receiveShadow,pe.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dn.envMap.value=Et,dn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(dn.envMapIntensity.value=I.environmentIntensity),qe&&(pe.setValue(P,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&xn(dn,Zi),ot&&G.fog===!0&&ct.refreshFogUniforms(dn,ot),ct.refreshMaterialUniforms(dn,G,X,tt,h.state.transmissionRenderTarget[y.id]),ls.upload(P,rn(Rt),dn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ls.upload(P,rn(Rt),dn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(P,"center",O.center),pe.setValue(P,"modelViewMatrix",O.modelViewMatrix),pe.setValue(P,"normalMatrix",O.normalMatrix),pe.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qe=G.uniformsGroups;for(let Un=0,Nn=Qe.length;Un<Nn;Un++){const po=Qe[Un];N.update(po,sn),N.bind(po,sn)}}return sn}function xn(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function st(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,I,H){St.get(y.texture).__webglTexture=I,St.get(y.depthTexture).__webglTexture=H;const G=St.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const H=St.get(y);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,H=0){C=y,w=I,A=H;let G=!0,O=null,ot=!1,dt=!1;if(y){const Et=St.get(y);if(Et.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Et.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Et.__hasExternalTextures)b.rebindTextures(y,St.get(y.texture).__webglTexture,St.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Tt=y.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&St.has(Tt)&&(y.width!==Tt.image.width||y.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(dt=!0);const Vt=St.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[I])?O=Vt[I][H]:O=Vt[I],ot=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?O=St.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?O=Vt[H]:O=Vt,R.copy(y.viewport),z.copy(y.scissor),U=y.scissorTest}else R.copy(Mt).multiplyScalar(X).floor(),z.copy(Ot).multiplyScalar(X).floor(),U=Ct;if(vt.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&vt.drawBuffers(y,O),vt.viewport(R),vt.scissor(z),vt.setScissorTest(U),ot){const Et=St.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,Et.__webglTexture,H)}else if(dt){const Et=St.get(y.texture),Bt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.__webglTexture,H||0,Bt)}T=-1},this.readRenderTargetPixels=function(y,I,H,G,O,ot,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){vt.bindFramebuffer(P.FRAMEBUFFER,yt);try{const Et=y.texture,Bt=Et.format,Vt=Et.type;if(!Ut.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-G&&H>=0&&H<=y.height-O&&P.readPixels(I,H,G,O,Gt.convert(Bt),Gt.convert(Vt),ot)}finally{const Et=C!==null?St.get(C).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(y,I,H,G,O,ot,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){const Et=y.texture,Bt=Et.format,Vt=Et.type;if(!Ut.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-G&&H>=0&&H<=y.height-O){vt.bindFramebuffer(P.FRAMEBUFFER,yt);const Tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(I,H,G,O,Gt.convert(Bt),Gt.convert(Vt),0);const ee=C!==null?St.get(C).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,ee);const ce=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Lu(P,ce,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(Tt),P.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,H=0){y.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(y.image.width*G),ot=Math.floor(y.image.height*G),dt=I!==null?I.x:0,yt=I!==null?I.y:0;b.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,dt,yt,O,ot),vt.unbindTexture()},this.copyTextureToTexture=function(y,I,H=null,G=null,O=0){y.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],I=arguments[2],O=arguments[3]||0,H=null);let ot,dt,yt,Et,Bt,Vt,Tt,ee,ce;const de=y.isCompressedTexture?y.mipmaps[O]:y.image;H!==null?(ot=H.max.x-H.min.x,dt=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,Et=H.min.x,Bt=H.min.y,Vt=H.isBox3?H.min.z:0):(ot=de.width,dt=de.height,yt=de.depth||1,Et=0,Bt=0,Vt=0),G!==null?(Tt=G.x,ee=G.y,ce=G.z):(Tt=0,ee=0,ce=0);const We=Gt.convert(I.format),ie=Gt.convert(I.type);let Rt;I.isData3DTexture?(b.setTexture3D(I,0),Rt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Rt=P.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Rt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const vn=P.getParameter(P.UNPACK_ROW_LENGTH),re=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),di=P.getParameter(P.UNPACK_SKIP_ROWS),qe=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Et),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt);const Zi=y.isDataArrayTexture||y.isData3DTexture,pe=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const dn=St.get(y),Ki=St.get(I),Qe=St.get(dn.__renderTarget),Un=St.get(Ki.__renderTarget);vt.bindFramebuffer(P.READ_FRAMEBUFFER,Qe.__webglFramebuffer),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Nn=0;Nn<yt;Nn++)Zi&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(y).__webglTexture,O,Vt+Nn),y.isDepthTexture?(pe&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(I).__webglTexture,O,ce+Nn),P.blitFramebuffer(Et,Bt,ot,dt,Tt,ee,ot,dt,P.DEPTH_BUFFER_BIT,P.NEAREST)):pe?P.copyTexSubImage3D(Rt,O,Tt,ee,ce+Nn,Et,Bt,ot,dt):P.copyTexSubImage2D(Rt,O,Tt,ee,ce+Nn,Et,Bt,ot,dt);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pe?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Rt,O,Tt,ee,ce,ot,dt,yt,We,ie,de.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,O,Tt,ee,ce,ot,dt,yt,We,de.data):P.texSubImage3D(Rt,O,Tt,ee,ce,ot,dt,yt,We,ie,de):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Tt,ee,ot,dt,We,ie,de.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Tt,ee,de.width,de.height,We,de.data):P.texSubImage2D(P.TEXTURE_2D,O,Tt,ee,ot,dt,We,ie,de);P.pixelStorei(P.UNPACK_ROW_LENGTH,vn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,di),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qe),O===0&&I.generateMipmaps&&P.generateMipmap(Rt),vt.unbindTexture()},this.copyTextureToTexture3D=function(y,I,H=null,G=null,O=0){return y.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,y=arguments[2],I=arguments[3],O=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,H,G,O)},this.initRenderTarget=function(y){St.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),vt.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,vt.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class so{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new so(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wm extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new F;class fs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tc extends Jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ri;const tr=new F,Ci=new F,Pi=new F,Li=new Ft,er=new Ft,bc=new ue,Vr=new F,nr=new F,Wr=new F,fl=new Ft,Qs=new Ft,dl=new Ft;class qm extends xe{constructor(t=new Tc){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xm(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new fs(n,3,0,!1)),Ri.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),bc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Xr(Vr.set(-.5,-.5,0),Pi,a,Ci,r,s),Xr(nr.set(.5,-.5,0),Pi,a,Ci,r,s),Xr(Wr.set(.5,.5,0),Pi,a,Ci,r,s),fl.set(0,0),Qs.set(1,0),dl.set(1,1);let o=t.ray.intersectTriangle(Vr,nr,Wr,!1,tr);if(o===null&&(Xr(nr.set(-.5,.5,0),Pi,a,Ci,r,s),Qs.set(0,1),o=t.ray.intersectTriangle(Vr,Wr,nr,!1,tr),o===null))return;const l=t.ray.origin.distanceTo(tr);l<t.near||l>t.far||e.push({distance:l,point:tr.clone(),uv:nn.getInterpolation(tr,Vr,nr,Wr,fl,Qs,dl,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,r,s){Li.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(er.x=s*Li.x-r*Li.y,er.y=r*Li.x+s*Li.y):er.copy(Li),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4(bc)}class Ac extends Jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ds=new F,ps=new F,pl=new ue,ir=new no,qr=new Sr,ta=new F,ml=new F;class Ym extends xe{constructor(t=new Me,e=new Ac){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ds.fromBufferAttribute(e,r-1),ps.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ds.distanceTo(ps);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),qr.radius+=s,t.ray.intersectsSphere(qr)===!1)return;pl.copy(r).invert(),ir.copy(t.ray).applyMatrix4(pl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,c=g-1;_<c;_+=u){const h=f.getX(_),x=f.getX(_+1),E=Yr(this,t,ir,l,h,x);E&&e.push(E)}if(this.isLineLoop){const _=f.getX(g-1),c=f.getX(p),h=Yr(this,t,ir,l,_,c);h&&e.push(h)}}else{const p=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let _=p,c=g-1;_<c;_+=u){const h=Yr(this,t,ir,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=Yr(this,t,ir,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Yr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(ds.fromBufferAttribute(a,r),ps.fromBufferAttribute(a,s),e.distanceSqToSegment(ds,ps,ta,ml)>n)return;ta.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:ml.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const gl=new F,_l=new F;class Zm extends Ym{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)gl.fromBufferAttribute(e,r),_l.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gl.distanceTo(_l);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wc extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xl=new ue,qa=new no,Zr=new Sr,Kr=new F;class Km extends xe{constructor(t=new Me,e=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,t.ray.intersectsSphere(Zr)===!1)return;xl.copy(r).invert(),qa.copy(t.ray).applyMatrix4(xl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=m,_=p;g<_;g++){const c=u.getX(g);Kr.fromBufferAttribute(d,c),vl(Kr,c,l,r,t,e,this)}}else{const m=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=m,_=p;g<_;g++)Kr.fromBufferAttribute(d,g),vl(Kr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vl(i,t,e,n,r,s,a){const o=qa.distanceSqToPoint(i);if(o<e){const l=new F;qa.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ao extends He{constructor(t,e,n,r,s,a,o,l,u){super(t,e,n,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends Me{constructor(t=[new Ft(0,-.5),new Ft(.5,0),new Ft(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=ze(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],u=[],f=1/e,d=new F,m=new Ft,p=new F,g=new F,_=new F;let c=0,h=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:c=t[x+1].x-t[x].x,h=t[x+1].y-t[x].y,p.x=h*1,p.y=-c,p.z=h*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:c=t[x+1].x-t[x].x,h=t[x+1].y-t[x].y,p.x=h*1,p.y=-c,p.z=h*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=e;x++){const E=n+x*f*r,M=Math.sin(E),D=Math.cos(E);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*M,d.y=t[w].y,d.z=t[w].x*D,a.push(d.x,d.y,d.z),m.x=x/e,m.y=w/(t.length-1),o.push(m.x,m.y);const A=l[3*w+0]*M,C=l[3*w+1],T=l[3*w+0]*D;u.push(A,C,T)}}for(let x=0;x<e;x++)for(let E=0;E<t.length-1;E++){const M=E+x*t.length,D=M,w=M+t.length,A=M+t.length+1,C=M+1;s.push(D,w,C),s.push(A,C,w)}this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.points,t.segments,t.phiStart,t.phiLength)}}class Ss extends Me{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],u=new F,f=new Ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,m=3;d<=e;d++,m+=3){const p=n+d/e*r;u.x=t*Math.cos(p),u.y=t*Math.sin(p),a.push(u.x,u.y,u.z),o.push(0,0,1),f.x=(a[m]/t+1)/2,f.y=(a[m+1]/t+1)/2,l.push(f.x,f.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class An extends Me{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],m=[],p=[];let g=0;const _=[],c=n/2;let h=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(m,3)),this.setAttribute("uv",new he(p,2));function x(){const M=new F,D=new F;let w=0;const A=(e-t)/n;for(let C=0;C<=s;C++){const T=[],v=C/s,R=v*(e-t)+t;for(let z=0;z<=r;z++){const U=z/r,V=U*l+o,j=Math.sin(V),q=Math.cos(V);D.x=R*j,D.y=-v*n+c,D.z=R*q,d.push(D.x,D.y,D.z),M.set(j,A,q).normalize(),m.push(M.x,M.y,M.z),p.push(U,1-v),T.push(g++)}_.push(T)}for(let C=0;C<r;C++)for(let T=0;T<s;T++){const v=_[T][C],R=_[T+1][C],z=_[T+1][C+1],U=_[T][C+1];(t>0||T!==0)&&(f.push(v,R,U),w+=3),(e>0||T!==s-1)&&(f.push(R,z,U),w+=3)}u.addGroup(h,w,0),h+=w}function E(M){const D=g,w=new Ft,A=new F;let C=0;const T=M===!0?t:e,v=M===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,c*v,0),m.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let z=0;z<=r;z++){const V=z/r*l+o,j=Math.cos(V),q=Math.sin(V);A.x=T*q,A.y=c*v,A.z=T*j,d.push(A.x,A.y,A.z),m.push(0,v,0),w.x=j*.5+.5,w.y=q*.5*v+.5,p.push(w.x,w.y),g++}for(let z=0;z<r;z++){const U=D+z,V=R+z;M===!0?f.push(V,V+1,U):f.push(V+1,V,U),C+=3}u.addGroup(h,C,M===!0?1:2),h+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jn extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let u=0;const f=[],d=new F,m=new F,p=[],g=[],_=[],c=[];for(let h=0;h<=n;h++){const x=[],E=h/n;let M=0;h===0&&a===0?M=.5/e:h===n&&l===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){const w=D/e;d.x=-t*Math.cos(r+w*s)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(r+w*s)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),m.copy(d).normalize(),_.push(m.x,m.y,m.z),c.push(w+M,1-E),x.push(u++)}f.push(x)}for(let h=0;h<n;h++)for(let x=0;x<e;x++){const E=f[h][x+1],M=f[h][x],D=f[h+1][x],w=f[h+1][x+1];(h!==0||a>0)&&p.push(E,M,w),(h!==n-1||l<Math.PI)&&p.push(M,D,w)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gr extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],u=[],f=new F,d=new F,m=new F;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,c=p/n*Math.PI*2;d.x=(t+e*Math.cos(c))*Math.cos(_),d.y=(t+e*Math.cos(c))*Math.sin(_),d.z=e*Math.sin(c),o.push(d.x,d.y,d.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),m.subVectors(d,f).normalize(),l.push(m.x,m.y,m.z),u.push(g/r),u.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,c=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,x=(r+1)*p+g;a.push(_,c,x),a.push(c,h,x)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class je extends Jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lo extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $m extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ea=new ue,Ml=new F,Sl=new F;class Rc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ml),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yl=new ue,rr=new F,na=new F;class jm extends Rc{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),na.copy(n.position),na.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(na),n.updateMatrixWorld(),r.makeTranslation(-rr.x,-rr.y,-rr.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class ms extends lo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jm extends Rc{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qm extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Jm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const t0={minX:-15.55,maxX:15.55,minZ:-28.15,maxZ:13.55},e0={x:0,y:1.58,z:10.55,yaw:0},n0={x:0,y:1.58,z:-16.35,yaw:0},fr=-24.2,i0=fr-.35,dr={x:0,y:0,z:-26.55},Cc=[{id:"pa-horn",x:-7.05,y:2.42,z:-17.35}],r0=[{id:"north-l",x:-10.6,z:-8.2,cloak:!1,hp:72},{id:"north-r",x:6.4,z:-8.6,cloak:!1,hp:72},{id:"west",x:-11.2,z:2.4,cloak:!1,hp:78},{id:"east-court",x:6.2,z:4.6,cloak:!1,hp:66},{id:"fountain",x:0,z:-.15,cloak:!0,hp:90},{id:"alley",x:13.65,z:-2.4,cloak:!1,hp:78}],s0=[{id:"choir-l",x:-6.2,z:-19.15,cloak:!1,hp:56},{id:"choir-r",x:6.2,z:-19.35,cloak:!1,hp:56},{id:"choir-ghost",x:.15,z:-22.25,cloak:!0,hp:68}],Ya=[{id:"signal-cache",kind:"signal",x:13.7,z:1.6,amount:48,cloaked:!0},{id:"aid-kit",kind:"health",x:13.7,z:-6.4,amount:36,cloaked:!1}],ia={minX:-7.2,maxX:7.2,minZ:-23.35,maxZ:-15.9},a0={alley:{minX:12.15,maxX:15.35,minZ:-11.6,maxZ:3.5},"choir-l":ia,"choir-r":ia,"choir-ghost":ia};function kt(i,t,e,n,r,s,a,o,l={}){return{id:i,mat:t,x:e,y:n,z:r,w:s,h:a,d:o,...l}}const Te=7.2,Pc=[kt("floor","floor",0,-.2,0,34,.4,30,{floor:!0}),kt("ceiling","ceiling",0,7.35,0,34,.3,30),kt("wall-n-l","wall",-9.23,Te/2,-14.3,14.74,Te,.6),kt("wall-n-r","wall",9.23,Te/2,-14.3,14.74,Te,.6),kt("chapel-door","trim",0,Te/2,-14.3,3.76,Te,.66,{door:!0}),kt("wall-s","wall",0,Te/2,14.3,33.2,Te,.6),kt("wall-w","wall",-16.3,Te/2,0,.6,Te,29.2),kt("wall-e","wall",16.3,Te/2,0,.6,Te,29.2),kt("pillar-nw","trim",-8,3.6,-6,.75,7.2,.75),kt("pillar-ne","trim",8,3.6,-6,.75,7.2,.75),kt("pillar-sw","trim",-8,3.6,6,.75,7.2,.75),kt("pillar-se","trim",8,3.6,5.2,.75,7.2,.75),kt("mezz","trim",0,4.2,-12.15,32.2,.28,3.5),kt("fountain-n","trim",0,.4,-2.2,4.5,.8,.5),kt("fountain-s-l","trim",-1.75,.4,2.05,1.7,.8,.5),kt("fountain-s-r","trim",1.75,.4,2.05,1.7,.8,.5),kt("fountain-w","trim",-2.25,.4,-.05,.5,.8,3.55),kt("fountain-e","trim",2.25,.4,-.05,.5,.8,3.55),kt("partition-n","wall",11.3,1.8,-4.7,1.15,3.6,7),kt("partition-s","wall",11.3,1.8,2.7,1.15,3.6,2.9),kt("phase-gate","hazard",11.35,1.8,.025,.9,3.6,2.46,{phaseGate:!0}),kt("alley-cap","wall",13.95,1.8,4.35,4.7,3.6,.55),kt("pier-a","trim",-11.2,1.7,-12.15,.4,3.4,.7),kt("pier-b","trim",-3.4,1.7,-12.15,.4,3.4,.7),kt("pier-c","trim",4.2,1.7,-12.15,.4,3.4,.7),kt("food-counter","trim",-10.2,.55,9.15,6.2,1.1,1.25),kt("booth-desk","trim",9.4,.55,9.35,5.2,1.1,1.15),kt("kiosk","metal",-3.35,.75,7.35,.85,1.5,.7),kt("bench-w","wood",-4.4,.32,3.35,1.7,.5,.48),kt("bench-e","wood",4.15,.32,-3.15,1.7,.5,.48),kt("chapel-floor","floor",0,-.2,-21.75,16.7,.4,14.7,{floor:!0}),kt("chapel-ceiling","ceiling",0,7.35,-21.75,16.7,.3,14.7),kt("chapel-w","wall",-8.35,Te/2,-21.75,.5,Te,14.9),kt("chapel-e","wall",8.35,Te/2,-21.75,.5,Te,14.9),kt("chapel-n","wall",0,Te/2,-29.05,17.2,Te,.5),kt("pew-1","wood",-3.15,.48,-18.2,3.05,.96,.58),kt("pew-2","wood",-3.15,.48,-20.45,3.05,.96,.58),kt("pew-3","wood",3.15,.48,-18.2,3.05,.96,.58),kt("pew-4","wood",3.15,.48,-20.45,3.05,.96,.58),kt("altar-l","trim",-4.85,1.8,fr,6.5,3.6,.48),kt("altar-r","trim",4.85,1.8,fr,6.5,3.6,.48),kt("rite-veil","trim",0,1.8,fr,3.36,3.6,.42,{phaseGate:!0,veil:!0}),kt("altar","brass",0,.55,-27.55,2.4,1.1,.7)];function o0(i){return{id:i.id,minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2,phaseGate:!!i.phaseGate,floor:!!i.floor}}function Lc({doorOpen:i=!1,veilUp:t=!1}={}){return Pc.filter(e=>!(e.door&&i||e.veil&&!t)).map(o0)}function Dc(i,t,e){return{id:i.id,x:i.x,y:0,z:i.z,yaw:0,hp:i.hp,maxHp:i.hp,alive:!0,cloaked:!!i.cloak,reveal:0,visible:!i.cloak,exposed:!1,hittable:!i.cloak,hits:0,lastHitAt:null,aggro:e==="court"&&!i.cloak,cooldown:e==="chapel"?1.35+t%3*.25:.95+t%4*.28,windup:0,strafeSign:t%2===0?1:-1,strafeT:.8+t%3*.25,hurt:0,stun:0,room:e,dormant:e!=="court"}}function Ic(){return r0.map((i,t)=>Dc(i,t,"court"))}function gs(){return s0.map((i,t)=>Dc(i,t,"chapel"))}function l0(){return Ya.map(i=>({...i,taken:!1}))}const cr=["LIVE","STATIC","DEAD_AIR"],ne={signalMax:100,healthMax:100,liveRegen:7,staticDrain:11,deadDrain:15,minDrainSignal:8,liveDamage:23,liveRange:60,liveFalloff:.12,liveCooldown:.2,staticPellets:7,staticPellet:8,staticSpread:.11,staticRange:13,staticFalloff:.85,staticCooldown:.52,weakMult:2.35,revealDuration:4.2,aggressiveRange:5.5,aggressiveKillSignal:26,cleanKillSignal:10,burstWindow:.48,hurtIframes:.38,playerRadius:.36,boltDamage:8,speed:{LIVE:6.3,STATIC:5.4,DEAD_AIR:9.6}};function fn(i,t,e){return Math.max(t,Math.min(e,i))}function El(){return{channel:"LIVE",signal:ne.signalMax,health:ne.healthMax,fireCooldown:0,hurtTimer:0}}function c0(i){return i==="Digit1"||i==="Numpad1"?"LIVE":i==="Digit2"||i==="Numpad2"?"STATIC":i==="Digit3"||i==="Numpad3"?"DEAD_AIR":null}function u0(i,t){const e=Math.max(0,cr.indexOf(i)),n=t>=0?1:-1;return cr[(e+n+cr.length)%cr.length]}function h0(i,t){return t==="LIVE"?!0:i.signal>=ne.minDrainSignal}function f0(i,t){return cr.includes(t)?i.channel===t?{state:i,result:"same"}:h0(i,t)?{state:{...i,channel:t},result:"ok"}:{state:i,result:"denied"}:{state:i,result:"invalid"}}function d0(i,t){let{channel:e,signal:n,fireCooldown:r,hurtTimer:s}=i,a=!1;if(r=Math.max(0,r-t),s=Math.max(0,s-t),e==="LIVE")n=Math.min(ne.signalMax,n+ne.liveRegen*t);else{const o=e==="STATIC"?ne.staticDrain:ne.deadDrain;n-=o*t,n<=0&&(n=0,e="LIVE",a=!0)}return{state:{...i,channel:e,signal:n,fireCooldown:r,hurtTimer:s},forced:a}}function Uc(i){var t;return(t=ne.speed[i])!=null?t:ne.speed.LIVE}function p0(i){return i.channel!=="DEAD_AIR"&&i.fireCooldown<=0&&i.health>0}function Tl(i){return i==="LIVE"?{kind:"hitscan",pellets:1,spread:0,damage:ne.liveDamage,range:ne.liveRange,falloff:ne.liveFalloff,cooldown:ne.liveCooldown}:i==="STATIC"?{kind:"spread",pellets:ne.staticPellets,spread:ne.staticSpread,damage:ne.staticPellet,range:ne.staticRange,falloff:ne.staticFalloff,cooldown:ne.staticCooldown}:{kind:"none",pellets:0,spread:0,damage:0,range:0,falloff:1,cooldown:0}}function m0(i){const t=Tl(i.channel);return!p0(i)||t.kind==="none"?{state:i,profile:Tl("DEAD_AIR"),fired:!1}:{state:{...i,fireCooldown:t.cooldown},profile:t,fired:!0}}function bl(i,t,e,n){if(!(t>=0)||t>e||e<=0)return 0;const r=t/e;return i*(1-n*r*r)}function co(i,t){return{...i,signal:fn(i.signal+t,0,ne.signalMax)}}function g0(i,t){return{...i,health:fn(i.health+t,0,ne.healthMax)}}function _0(i,{distance:t,channel:e,burst:n}){const r=e==="STATIC"||t<=ne.aggressiveRange||!!n,s=r?ne.aggressiveKillSignal:ne.cleanKillSignal;return{state:co(i,s),amount:s,aggressive:r}}function Al(i,t){if(i.hurtTimer>0||i.health<=0)return{state:i,hit:!1,dead:i.health<=0};const e=Math.max(0,i.health-t);return{state:{...i,health:e,hurtTimer:ne.hurtIframes},hit:!0,dead:e<=0}}function x0(i,t){return!(!i||i.floor||i.maxY!=null&&i.maxY<.3||i.minY!=null&&i.minY>1.65||i.phaseGate&&t==="DEAD_AIR")}function Za(i,t,e,n,r){for(const s of n){if(!x0(s,r))continue;const a=fn(i,s.minX,s.maxX),o=fn(t,s.minZ,s.maxZ),l=i-a,u=t-o;if(l*l+u*u<e*e)return s}return null}function v0(i,t,e,n,r,s,a){let o=i+e;Za(o,t,r,s,a)&&(o=i);const l=t+n;return Za(o,l,r,s,a)?{x:o,z:t}:{x:o,z:l}}function M0(i,t,e,n,r){let s=i,a=t;for(let o=0;o<4;o++){const l=Za(s,a,e,n,r);if(!l)break;const u=fn(s,l.minX,l.maxX),f=fn(a,l.minZ,l.maxZ);let d=s-u,m=a-f;const p=Math.hypot(d,m);if(p<1e-5){const g=s-l.minX,_=l.maxX-s,c=a-l.minZ,h=l.maxZ-a,x=Math.min(g,_,c,h);x===g?s=l.minX-e-.01:x===_?s=l.maxX+e+.01:x===c?a=l.minZ-e-.01:a=l.maxZ+e+.01}else{const g=e-p+.01;s+=d/p*g,a+=m/p*g}}return{x:s,z:a}}function Nc(i,t,e,n,r,s,a,o){const l=Math.hypot(e,n),u=Math.max(1,Math.ceil(l/.25));let f=i,d=t;for(let p=0;p<u;p++){const g=v0(f,d,e/u,n/u,r,s,a);f=g.x,d=g.z}const m=M0(f,d,r,s,a);return o?{x:fn(m.x,o.minX,o.maxX),z:fn(m.z,o.minZ,o.maxZ)}:m}function Fc(i,t,e,n,r,s,a,o,l,u){const f=a-i,d=o-t,m=l-e,p=f*n+d*r+m*s,g=f*f+d*d+m*m-p*p,_=u*u;if(g>_)return null;const c=Math.sqrt(Math.max(0,_-g)),h=p-c,x=p+c;return h>=0?h:x>=0?x:null}function S0(i,t,e,n,r,s,a,o){let l=0,u=o;const f=[[i,n,a.minX,a.maxX],[t,r,a.minY,a.maxY],[e,s,a.minZ,a.maxZ]];for(const[m,p,g,_]of f){if(Math.abs(p)<1e-8){if(m<g||m>_)return null;continue}let c=(g-m)/p,h=(_-m)/p;if(c>h){const x=c;c=h,h=x}if(c>l&&(l=c),h<u&&(u=h),u<l)return null}const d=l>=0?l:u;return d<0||d>o?null:d}function uo(i,t,e,n,r,s,a,o){let l=null,u=a;for(const f of o){if(f.noShoot)continue;const d=S0(i,t,e,n,r,s,f,u);d!=null&&d<u&&(u=d,l={t:d,collider:f,x:i+n*d,y:t+r*d,z:e+s*d})}return l}function wl(i,t){if(!i.alive)return{...i,visible:!0,exposed:!1,hittable:!1};if(!i.cloaked)return{...i,visible:!0,exposed:t==="STATIC",hittable:!0};const e=t==="STATIC"||i.reveal>0;return{...i,visible:e,exposed:e,hittable:e}}function Rl(i,t,e){if(!i.cloaked||!i.alive)return wl(i,e);let n=i.reveal||0;return e==="STATIC"?n=ne.revealDuration:n=Math.max(0,n-t),wl({...i,reveal:n},e)}function y0(i,t,e,n,r){let s=e,a=null;for(const l of n){if(!l.alive||!l.hittable)continue;const u=[{y:(l.y||0)+1.62,r:.26,weak:!0},{y:(l.y||0)+.98,r:.46,weak:!1}];for(const f of u){const d=Fc(i.x,i.y,i.z,t.x,t.y,t.z,l.x,f.y,l.z,f.r);d!=null&&d>.02&&d<s&&(s=d,a={kind:"enemy",id:l.id,t:d,weak:f.weak,x:i.x+t.x*d,y:i.y+t.y*d,z:i.z+t.z*d})}}const o=uo(i.x,i.y,i.z,t.x,t.y,t.z,s,r);return o&&o.t<s?{kind:"world",t:o.t,x:o.x,y:o.y,z:o.z,id:o.collider.id}:a}function E0(i,t){const e=i.lastHitAt!=null&&t-i.lastHitAt<=ne.burstWindow;return{enemy:{...i,lastHitAt:t},burst:e}}function T0(i,{weak:t,damage:e}){if(!i.alive||!i.hittable||e<=0)return{enemy:i,dealt:0,killed:!1};let n=e;t&&i.exposed&&(n*=ne.weakMult);const r=i.hp-n,s=r<=0;return{enemy:{...i,hp:s?0:r,hits:(i.hits||0)+1,alive:!s,hittable:!s&&i.hittable},dealt:n,killed:s}}function b0(i,t,e,n,r,s){const a=[],o=Math.max(0,n|0);for(let l=0;l<o;l++){const u=o===1&&r===0?0:(s()*2-1)*r,f=o===1&&r===0?0:(s()*2-1)*r,d=i.x+t.x*u+e.x*f,m=i.y+t.y*u+e.y*f,p=i.z+t.z*u+e.z*f,g=Math.hypot(d,m,p)||1;a.push({x:d/g,y:m/g,z:p/g})}return a}function Oc(i,t,e,n,r,s,a){const o=n-i,l=r-t,u=s-e,f=Math.hypot(o,l,u);return f<.001?!0:uo(i,t,e,o/f,l/f,u/f,Math.max(0,f-.25),a)==null}function A0(i,t){return!t||t.taken?{state:i,pickup:t,took:!1}:t.kind==="signal"?{state:co(i,t.amount),pickup:{...t,taken:!0},took:!0}:t.kind==="health"?i.health>=ne.healthMax?{state:i,pickup:t,took:!1}:{state:g0(i,t.amount),pickup:{...t,taken:!0},took:!0}:{state:i,pickup:t,took:!1}}function w0(i,t){return!i||i.taken?!1:i.cloaked?t==="STATIC":!0}function R0(i,t){const e=Math.hypot(i,t);return e<1e-6?{x:0,z:0}:{x:i/e,z:t/e}}function C0(i,t,e){var A;if(!i.alive)return{enemy:i,shot:null};if(i.dormant)return{enemy:{...i,hurt:Math.max(0,(i.hurt||0)-t)},shot:null};let n=Rl(i,t,e.channel);if(!n.alive)return{enemy:n,shot:null};const r=e.player.x-n.x,s=e.player.z-n.z,a=Math.hypot(r,s);if((a<18||e.player.forceAggro)&&(n.aggro=!0),n.cloaked&&a<3.05&&(n.reveal=Math.max(n.reveal||0,1.25)),n=Rl(n,0,e.channel),(n.stun||0)>0)return n.stun-=t,n.windup=0,n.hurt=Math.max(0,(n.hurt||0)-t),a>.001&&n.aggro&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:null};const o=n.cloaked&&!n.visible;if(!n.aggro||o)return n.hurt=Math.max(0,(n.hurt||0)-t),{enemy:n,shot:null};const u=a<17&&Oc(n.x,1.45,n.z,e.player.x,(A=e.player.y)!=null?A:1.2,e.player.z,e.colliders);n.hurt=Math.max(0,(n.hurt||0)-t),n.cooldown=(n.cooldown||0)-t;let f=null;if(n.windup>0?(n.windup-=t,n.windup<=0&&(n.windup=0,u&&(f=P0(n,e,a)))):u&&n.cooldown<=0&&(n.windup=.28,n.cooldown=1.28+e.rng()*.45),n.windup>0)return a>.001&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:f};const d=a>.001?{x:r/a,z:s/a}:{x:0,z:1},m={x:-d.z,z:d.x};n.strafeT=(n.strafeT||0)-t,n.strafeT<=0&&(n.strafeSign=(n.strafeSign||1)*-1,n.strafeT=.75+e.rng()*1.05);let p=m.x*n.strafeSign*.9,g=m.z*n.strafeSign*.9;if(a>10.2?(p+=d.x,g+=d.z):a<5.2&&(p-=d.x*.85,g-=d.z*.85),e.allies)for(const C of e.allies){if(!C.alive||C.id===n.id)continue;const T=n.x-C.x,v=n.z-C.z,R=Math.hypot(T,v);R<1.15&&R>.001&&(p+=T/R*1.4,g+=v/R*1.4)}const _=R0(p,g),c=Uc("STATIC")*.62*(n.hurt>0?.25:1);let h=_.x*c*t,x=_.z*c*t;const E=Nc(n.x,n.z,h,x,.42,e.colliders,"LIVE",null);let M=E.x,D=E.z;const w=a0[n.id];return w&&(M<w.minX||M>w.maxX||D<w.minZ||D>w.maxZ)&&(M=n.x,D=n.z),n.x=M,n.z=D,a>.001&&(n.yaw=Math.atan2(r,s)),{enemy:n,shot:f}}function P0(i,t,e){var d;const n=i.x,r=1.32,s=i.z,a=t.player.x-n+(t.rng()-.5)*.35,o=((d=t.player.y)!=null?d:1.15)-r+(t.rng()-.5)*.12,l=t.player.z-s+(t.rng()-.5)*.35,u=Math.hypot(a,o,l)||1,f=14.5;return{x:n,y:r,z:s,vx:a/u*f,vy:o/u*f,vz:l/u*f,damage:ne.boltDamage,life:2.1,dist:e}}function Bc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Me;let u=0;for(let f=0;f<i.length;++f){const d=i[f];let m=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,f),u+=p}}if(e){let f=0;const d=[];for(let m=0;m<i.length;++m){const p=i[m].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+f);f+=i[m].attributes.position.count}l.setIndex(d)}for(const f in s){const d=Cl(s[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,d)}for(const f in a){const d=a[f][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let m=0;m<d;++m){const p=[];for(let _=0;_<a[f].length;++_)p.push(a[f][_][m]);const g=Cl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function Cl(i){let t,e,n,r=-1,s=0;for(let u=0;u<i.length;++u){const f=i[u];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*e}const a=new t(s),o=new De(a,e,n);let l=0;for(let u=0;u<i.length;++u){const f=i[u];if(f.isInterleavedBufferAttribute){const d=l/e;for(let m=0,p=f.count;m<p;m++)for(let g=0;g<e;g++){const _=f.getComponent(m,g);o.setComponent(m+d,g,_)}}else a.set(f.array,l);l+=f.count*e}return r!==void 0&&(o.gpuType=r),o}function Be(i,t,e,n,r){const s=-r/2,a=r/2,o=[[-i/2,s,t/2],[i/2,s,t/2],[i/2,s,-t/2],[-i/2,s,-t/2],[-e/2,a,n/2],[e/2,a,n/2],[e/2,a,-n/2],[-e/2,a,-n/2]],l=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],u=[],f=[];for(const m of l){const[p,g,_,c]=m.map(h=>o[h]);u.push(...p,...g,..._,...p,..._,...c),f.push(0,0,1,0,1,1,0,0,1,1,0,1)}const d=new Me;return d.setAttribute("position",new he(u,3)),d.setAttribute("uv",new he(f,2)),d.computeVertexNormals(),d}function L0(i,t=10){const e=i.map(([r,s])=>new Ft(r,s)),n=new oo(e,t).toNonIndexed();return n.computeVertexNormals(),n}function Nt(i,t,e=0,n=0,r=0){const s=new At(i,t);return s.position.set(e,n,r),s.castShadow=!0,s.receiveShadow=!0,s}function Pl(i){return Bc(i,!1)}const D0=[[.02,.18],[.09,.16],[.145,.1],[.158,.02],[.15,-.05],[.12,-.11],[.075,-.15]];let $r=null;function ho(){if($r)return $r;const i=[],t=new wt(.074,.05,.09);t.translate(0,-.62,.02),i.push(t);for(let o=0;o<4;o++){const l=new wt(.014,.05,.016);l.translate(-.024+o*.016,-.67,.045),i.push(l)}const e=new wt(.016,.04,.016);e.translate(.046,-.62,.03),e.rotateZ(.7),i.push(e);const n=[],r=new wt(.05,.055,.16);r.translate(0,-.56,.1),n.push(r);const s=new wt(.03,.03,.07);s.translate(0,-.545,.16),n.push(s);const a=new wt(.038,.07,.04);return a.translate(0,-.61,.04),n.push(a),$r={helmet:L0(D0,10),chest:Be(.34,.2,.48,.26,.4),abdomen:Be(.3,.18,.34,.2,.18),pelvis:Be(.32,.2,.28,.18,.14),pec:Be(.15,.1,.17,.12,.2),shoulder:Be(.1,.1,.14,.12,.08),thigh:Be(.11,.11,.085,.085,.32),shin:Be(.08,.09,.065,.065,.3),foot:new wt(.1,.055,.18),upper:Be(.085,.085,.07,.07,.24),forearm:Be(.064,.064,.05,.052,.2),hand:Pl(i),gun:Pl(n),collar:new An(.07,.09,.08,8),joint:new jn(1,6,5),skirt:Be(.34,.16,.5,.22,.62),tabard:new wt(.22,.58,.045),stole:new wt(.09,.5,.04),muzzle:new wt(.028,.028,.04),seam:new wt(.2,.028,.02)},$r}function Di(i,t=0,e=0){return i.userData.rest=t,i.userData.restI=e,i.emissive=new Yt(t),i.emissiveIntensity=e,i}function zc(i){const t=Di(new je({map:i.pearl,roughness:.52,metalness:.1,flatShading:!0})),e=Di(new je({map:i.pearlWorn,roughness:.68,metalness:.06,flatShading:!0})),n=Di(new je({map:i.joint,color:2236962,roughness:.4,metalness:.55,flatShading:!0})),r=Di(new je({color:460551,roughness:.16,metalness:.78,flatShading:!0})),s=Di(new je({map:i.cloth,roughness:.78,metalness:.02,flatShading:!0})),a=Di(new je({map:i.gold,roughness:.36,metalness:.68,flatShading:!0}),6967320,.16),o=new be({color:16757066});return{pearl:t,worn:e,joint:n,visor:r,cloth:s,gold:a,amber:o}}function jr(i,t,e,n,r){const s=Nt(ho().joint,i,e,n,r);return s.scale.setScalar(t),s}function Gn(i,t,e=16774894){for(const n of i)t>.02?(n.emissive.setHex(e),n.emissiveIntensity=t):(n.emissive.setHex(n.userData.rest||0),n.emissiveIntensity=n.userData.restI||0)}function I0(i,t={}){const e=new ke,n=ho(),r=zc(i),s=[],a=Nt(n.helmet,r.pearl,0,1.66,0);a.scale.set(1.06,.94,1.08);const o=Nt(n.collar,r.joint,0,1.46,0),l=Nt(n.chest,r.pearl,0,1.24,0),u=Nt(n.abdomen,r.pearl,0,.96,0),f=Nt(n.pelvis,r.pearl,0,.82,0),d=Nt(new wt(.38,.06,.24),r.joint,0,1.04,0),m=Nt(n.pec,r.pearl,-.1,1.28,.15);m.rotation.y=.22;const p=Nt(n.pec,r.pearl,.1,1.28,.15);p.rotation.y=-.22;const g=Nt(new wt(.04,.055,.02),r.pearl,0,1.8,.155);g.rotation.z=Math.PI/4;const _=Nt(new wt(.32,.17,.055),r.visor,0,1.63,.155),c=Nt(new wt(.055,.15,.12),r.visor,-.15,1.63,.07);c.rotation.y=.65;const h=Nt(new wt(.055,.15,.12),r.visor,.15,1.63,.07);h.rotation.y=-.65;const x=Nt(n.seam,r.amber,0,1.645,.175);x.visible=!1,x.castShadow=!1,s.push(a,o,l,u,f,d,m,p,g,_,c,h,x);function E(R,z){const U=new ke;if(z){U.add(jr(r.joint,.055,0,0,0)),U.add(Nt(n.upper,r.pearl,0,-.16,0)),U.add(jr(r.joint,.042,0,-.3,0)),U.add(Nt(n.forearm,r.joint,0,-.42,0)),U.add(Nt(n.hand,r.joint,0,.08,0));const V=Nt(n.shoulder,r.pearl,R*.02,.02,0);U.add(V)}else{U.add(jr(r.joint,.058,0,0,0)),U.add(Nt(n.thigh,r.pearl,0,-.2,0)),U.add(jr(r.joint,.048,0,-.38,0)),U.add(Nt(n.shin,r.worn,0,-.56,0));const V=Nt(n.foot,r.worn,0,-.76,.03);U.add(V)}return U}const M=E(-1,!1);M.position.set(-.12,.8,0),M.rotation.z=.08;const D=E(1,!1);D.position.set(.12,.8,0),D.rotation.z=-.08;const w=E(-1,!0);w.position.set(-.32,1.4,0),w.rotation.z=.42;const A=E(1,!0);A.position.set(.32,1.4,0),A.rotation.z=-.36;const C=Nt(n.gun,r.joint,.045,.02,.02),T=Nt(n.muzzle,r.amber,.045,-.525,.22);T.castShadow=!1,A.add(C,T);const v=new At(new Ss(.42,12),new be({color:0,transparent:!0,opacity:.32,depthWrite:!1}));if(v.rotation.x=-Math.PI/2,v.position.y=.02,e.add(...s,M,D,w,A,v),t.vestment){const R=Nt(n.tabard,r.cloth,0,.78,.16),z=Nt(new wt(.28,.42,.04),r.cloth,0,.95,-.14),U=Nt(n.stole,r.gold,0,1.16,.18),V=Nt(Be(.52,.2,.34,.14,.12),r.cloth,0,1.4,0);e.add(R,z,U,V)}return{group:e,weak:x,lLeg:M,rLeg:D,lArm:w,rArm:A,muzzle:T,flashMats:[r.pearl,r.worn,r.joint,r.visor,r.cloth,r.gold],flash:0}}function U0(i){const t=new ke,e=zc(i),n=ho(),r=Nt(Be(.95,.42,.62,.32,1.42),e.cloth,0,.84,0),s=Nt(Be(1.15,.4,.55,.26,.22),e.cloth,0,1.52,0),a=Nt(Be(.46,.3,.28,.2,.22),e.cloth,0,1.7,0),o=Nt(new wt(1,.06,.46),e.gold,0,.16,0),l=Nt(new wt(.7,.08,.38),e.gold,0,1.12,.02),u=Nt(new wt(.16,1.15,.05),e.gold,0,1.05,.2),f=Nt(new jn(.045,8,6),e.gold,0,.72,.24),d=Nt(n.helmet,e.pearl,0,2.05,0);d.scale.setScalar(1.18);const m=Nt(new wt(.05,.07,.025),e.pearl,0,2.24,.16);m.rotation.z=Math.PI/4;const p=Nt(new wt(.42,.18,.06),e.visor,0,2.02,.22),g=Nt(new wt(.05,.12,.12),e.visor,-.18,2.02,.07);g.rotation.y=.5;const _=Nt(new wt(.05,.12,.12),e.visor,.18,2.02,.07);_.rotation.y=-.5;const c=Nt(new wt(.26,.035,.02),e.amber,0,2.02,.21);c.visible=!1,c.castShadow=!1;const h=new je({color:15123818,map:i.gold,roughness:.28,metalness:.64,emissive:15123818,emissiveIntensity:.85,transparent:!0,opacity:.94,depthWrite:!1}),x=new At(new gr(.58,.045,8,28),h);x.position.set(0,2.22,-.16);const E=new At(new gr(.4,.018,6,24),h);x.add(E);function M(C){const T=new ke,v=Nt(Be(.2,.16,.11,.1,.56),e.cloth,0,.3,0),R=Nt(new wt(.14,.05,.12),e.gold,0,.58,0),z=Nt(new wt(.12,.09,.045),e.pearl,0,.68,.02),U=Nt(new wt(.07,.05,.02),e.amber,0,.68,.05);return U.castShadow=!1,T.add(v,R,z,U),T.position.set(C*.42,1.5,.02),{pivot:T,hand:U}}const D=M(-1),w=M(1);for(const C of[1.38,1.2,1]){const T=Nt(new wt(.42,.028,.028),e.gold,0,C,.22);t.add(T)}const A=new At(new Ss(.78,14),new be({color:0,transparent:!0,opacity:.34,depthWrite:!1}));return A.rotation.x=-Math.PI/2,A.position.y=.02,t.add(r,s,a,o,l,u,f,d,m,p,g,_,c,x,D.pivot,w.pivot,A),t.position.set(dr.x,0,dr.z),{group:t,halo:x,haloMat:h,seam:c,lArm:D.pivot,rArm:w.pivot,lHand:D.hand,rHand:w.hand,flashMats:[e.pearl,e.cloth,e.visor,e.gold],flash:0}}function N0(i,t){const e=new Map,n=new Set(gs().map(l=>l.id));for(const l of[...Ic(),...gs()]){const u=I0(t,{vestment:n.has(l.id)});u.group.position.set(l.x,0,l.z),u.group.visible=l.visible,u.death=0,u.died=!1,u.phase=Math.random()*Math.PI*2,u.prevX=l.x,u.prevZ=l.z,i.add(u.group),e.set(l.id,u)}const r=U0(t);r.died=!1,r.death=0,r.pose=0,i.add(r.group);const s=new jn(.08,7,5),a=new be({color:16756768}),o=[];for(let l=0;l<16;l++){const u=new At(s,a);u.visible=!1,u.frustumCulled=!1,i.add(u),o.push(u)}return{reset(l){for(const u of l){const f=e.get(u.id);if(f){if(f.prevX=u.x,f.prevZ=u.z,f.group.position.set(u.x,0,u.z),f.group.rotation.set(0,0,0),f.group.scale.setScalar(1),f.flash=0,Gn(f.flashMats,0),f.weak.visible=!1,!u.alive){f.died=!0,f.death=0,f.group.visible=!1;continue}f.death=0,f.died=!1,f.group.visible=u.visible}}},resetPriest(l){r.died=!1,r.death=0,r.pose=0,r.flash=0,r.group.visible=!0,r.group.rotation.set(0,0,0),r.group.position.set(l.x,0,l.z),r.halo.scale.setScalar(1),Gn(r.flashMats,0),r.seam.visible=!1},syncPriest(l,u,f,d){if(!l.alive){r.died||(r.died=!0,r.death=1.05),r.death-=u;const M=1-Math.max(r.death,0)/1.05;r.group.visible=r.death>0,r.group.rotation.x=M*1.25,r.group.position.set(l.x,-M*.55,l.z),r.halo.scale.setScalar(Math.max(0,1-M)),r.seam.visible=!1,r.lArm.rotation.x=.9,r.rArm.rotation.x=.7,Gn(r.flashMats,M<.45?(1-M/.45)*2.4:0);return}r.died=!1,r.death=0,r.group.visible=!0,r.group.rotation.set(0,l.yaw||0,0),r.group.position.set(l.x,0,l.z);const m=l.phase==="rite",p=m?1.05:l.windup>0?.35:.72,g=l.windup>0?-.85:m?-.2:-.05;r.lArm.rotation.set(g,0,p),r.rArm.rotation.set(g,0,-p);const _=!!l.haloVisible,c=_&&d==="STATIC";r.halo.visible=!0;const h=_?1+Math.sin(f*7)*.06:1;r.halo.scale.setScalar(h),r.haloMat.opacity=c?1:_?.96:.9,r.haloMat.emissiveIntensity=c?2.4:_?1.55:.85,r.seam.visible=!!l.exposed;const x=l.windup>0||l.phase==="rite";r.lHand.visible=x,r.rHand.visible=x;const E=x?1.45:1;r.lHand.scale.setScalar(E),r.rHand.scale.setScalar(E),l.hurt>0&&(r.flash=.2),r.flash=Math.max(0,r.flash-u),Gn(r.flashMats,r.flash>0?r.flash/.2*2.6:0)},sync(l,u,f,d){for(const m of l){const p=e.get(m.id);if(!m.alive){p.died||(p.died=!0,p.death=.85),p.death-=u;const c=1-Math.max(p.death,0)/.85;p.group.visible=p.death>0,p.group.rotation.x=c*1.35,p.group.position.set(m.x,-c*.4,m.z),p.group.scale.setScalar(1),p.lArm.rotation.x=.5+c*.6,p.rArm.rotation.x=.3+c*.9,p.lLeg.rotation.x=-.25*c,p.rLeg.rotation.x=.4*c,p.weak.visible=!1,Gn(p.flashMats,c<.4?(1-c/.4)*2.4:0);continue}p.died=!1,p.death=0,p.group.visible=!!m.visible,p.group.rotation.set(0,m.yaw||0,0),p.group.position.set(m.x,0,m.z);const g=Math.hypot(m.x-p.prevX,m.z-p.prevZ);p.prevX=m.x,p.prevZ=m.z;const _=g>.004?Math.sin(f*8+p.phase):Math.sin(f*1.6+p.phase)*.15;if(p.lLeg.rotation.x=_*.7,p.rLeg.rotation.x=-_*.7,p.lArm.rotation.x=-_*.45,p.rArm.rotation.x=_*.25+(m.windup>0?-.95:-.06),p.weak.visible=!!m.exposed,m.hurt>0&&(p.flash=.16),p.flash=Math.max(0,p.flash-u),p.flash>0)Gn(p.flashMats,p.flash/.16*2.8),p.group.scale.setScalar(1.035);else if(m.cloaked&&m.visible){const c=.22+Math.sin(f*9)*.1;Gn(p.flashMats,c,16766888),p.group.scale.setScalar(1)}else Gn(p.flashMats,0),p.group.scale.setScalar(1);p.muzzle.scale.setScalar(m.windup>0?1.8:1),m.cloaked&&m.visible&&d!=="STATIC"&&m.reveal<.5&&(p.group.visible=Math.sin(f*46)>-.2)}},syncBolts(l){for(let u=0;u<o.length;u++){const f=o[u],d=l[u];if(!d){f.visible=!1;continue}f.visible=!0,f.position.set(d.x,d.y,d.z)}}}}const Ll=["seam","choir","veil"],Je={hp:360,armor:.2,breakDamage:64,failDamage:16,riteWindow:3.2,recover:2.2,idle:2.45,idleFirst:2.7,shotWindup:.58,shotGap:1.75,boltDamage:9,boltSpeed:12.5},F0=2.05,O0=1.2,B0=2.62;function Dl(i){return i==="seam"?"LIVE · THE SEAM":i==="choir"?"STATIC · THE HALO":i==="veil"?"DEAD AIR · THE VEIL":""}function Il(){return{id:"visor-priest",boss:!0,x:dr.x,y:dr.y,z:dr.z,yaw:0,hp:Je.hp,maxHp:Je.hp,alive:!0,hittable:!0,visible:!0,exposed:!1,haloVisible:!1,veilUp:!1,phase:"idle",rite:null,riteIndex:0,timer:Je.idleFirst,shotCooldown:1.15,windup:0,stun:0,hurt:0,broken:0,active:!1}}function z0(i,t){const e=Ll[i.riteIndex%Ll.length];i.phase="rite",i.rite=e,i.timer=Je.riteWindow,i.exposed=e==="seam",i.haloVisible=e==="choir",i.veilUp=e==="veil",i.windup=0,t.push({type:"announce",rite:e})}function kc(i){i.phase="recover",i.rite=null,i.exposed=!1,i.haloVisible=!1,i.veilUp=!1,i.windup=0,i.timer=Je.recover,i.riteIndex+=1}function k0(i,t,e){if(!i.alive||!i.active)return{priest:i,events:[]};const n=[],r={...i,hurt:Math.max(0,(i.hurt||0)-t),stun:Math.max(0,(i.stun||0)-t)};if(e&&e.player){const s=e.player.x-r.x,a=e.player.z-r.z;Math.hypot(s,a)>.05&&(r.yaw=Math.atan2(s,a))}return r.phase==="idle"?(r.timer-=t,r.timer<=0?z0(r,n):r.stun>0?r.windup=0:r.windup>0?(r.windup-=t,r.windup<=0&&(r.windup=0,r.shotCooldown=Je.shotGap,n.push({type:"shot"}))):(r.shotCooldown-=t,r.shotCooldown<=0&&(r.windup=Je.shotWindup))):r.phase==="rite"?(r.windup=0,r.timer-=t,r.timer<=0&&(n.push({type:"fail",rite:r.rite,damage:Je.failDamage}),kc(r))):r.phase==="recover"&&(r.windup=0,r.timer-=t,r.timer<=0&&(r.phase="idle",r.timer=Je.idle)),{priest:r,events:n}}function H0(i){return i>0?i*Je.armor:0}function G0(i,t){const e=H0(t);if(!i||!i.alive||e<=0)return{priest:i,dealt:0,killed:!1};const n=i.hp-e,r=n<=0;return{priest:{...i,hp:r?0:n,alive:!r,hurt:.22,phase:r?"dead":i.phase,veilUp:r?!1:i.veilUp,haloVisible:r?!1:i.haloVisible,exposed:r?!1:i.exposed,rite:r?null:i.rite},dealt:e,killed:r}}function Ul(i,t){if(!i.alive||i.phase!=="rite")return{priest:i,broken:!1,dealt:0,killed:!1};if(!(i.rite==="seam"&&t.channel==="LIVE"&&t.weak&&!t.halo||i.rite==="choir"&&t.channel==="STATIC"&&t.halo||i.rite==="veil"&&t.channel==="DEAD_AIR"&&t.crossed))return{priest:i,broken:!1,dealt:0,killed:!1};const n=Je.breakDamage,r=i.hp-n;if(r<=0)return{priest:{...i,hp:0,alive:!1,phase:"dead",rite:null,exposed:!1,haloVisible:!1,veilUp:!1,windup:0,hurt:.28},broken:!0,dealt:n,killed:!0};const a={...i,hp:r,hurt:.28,broken:(i.broken||0)+1};return kc(a),{priest:a,broken:!0,dealt:n,killed:!1}}function V0(i,t,e,n,r){if(!n||!n.alive||!n.hittable)return null;const s=[{y:O0,r:.62,weak:!1,halo:!1},{y:F0,r:.3,weak:!0,halo:!1}];n.haloVisible&&r==="STATIC"&&s.push({y:B0,r:.42,weak:!1,halo:!0});let a=null,o=e;for(const l of s){const u=Fc(i.x,i.y,i.z,t.x,t.y,t.z,n.x,(n.y||0)+l.y,n.z,l.r);u==null||u<=.02||u>=o||(o=u,a={kind:"priest",id:n.id,t:u,weak:l.weak,halo:l.halo,x:i.x+t.x*u,y:i.y+t.y*u,z:i.z+t.z*u})}return a}const Vn={maxDist:16,cone:.3,stun:4.5,cooldown:16,retune:4.5,retuneMult:1.45,radius:16};function W0({origin:i,dir:t,point:e,maxDist:n,cone:r,blocked:s}){const a=e.x-i.x,o=e.y-i.y,l=e.z-i.z,u=Math.hypot(a,o,l);if(!(u>.05)||u>n||s)return{aimed:!1,dist:u};const f=(a*t.x+o*t.y+l*t.z)/u;return{aimed:f>=Math.cos(r),dist:u,dot:f}}function X0(i,t){const e=i.cooldownUntil||0;return e>t?{ok:!1,reason:"cooldown",cooldownUntil:e}:{ok:!0,cooldownUntil:t+Vn.cooldown}}function q0(i,t,e,n){return i.map(r=>!r.alive||r.room!=="chapel"||Math.hypot(r.x-t.x,r.z-t.z)>e?r:{...r,stun:Math.max(r.stun||0,n),windup:0})}function Y0(i,t){const e=new ke;e.position.set(.18,-.28,-.48),i.add(e);const n=new je({map:t.leather,roughness:.78,metalness:.04}),r=new je({map:t.trench,roughness:.86,metalness:.02}),s=new je({map:t.brushed,roughness:.34,metalness:.74}),a=new je({map:t.wood,roughness:.62,metalness:.05}),o=new je({color:1315860,roughness:.5,metalness:.2}),l=new be({color:6813439}),u=new At(new wt(.16,.055,.38),a);u.position.set(.02,-.02,.02);const f=new At(new wt(.11,.02,.3),o);f.position.set(.02,.012,.03);const d=new At(new wt(.07,.03,.04),s);d.position.set(.02,-.005,-.16),e.add(u,f,d);for(let R=0;R<2;R++)for(let z=0;z<4;z++){const U=new At(new wt(.028,.012,.03),o);U.position.set(-.012+R*.064,.026,.1-z*.055),e.add(U)}const m=new At(new wt(.055,.028,.02),l);m.position.set(.02,-.004,-.2),e.add(m);const p=new At(new An(.006,.006,.22,5),s);p.position.set(.07,.02,-.12),p.rotation.z=-.4,p.rotation.x=.5;const g=new At(new jn(.012,6,4),s);g.position.set(.11,.1,-.2),e.add(p,g);const _=new be({color:14220287,transparent:!0,opacity:.95,depthWrite:!1,blending:cs,side:en}),c=new ke;c.position.set(.02,-.004,-.24);const h=new At(new $e(.22,.05),_),x=new At(new $e(.22,.05),_);x.rotation.z=Math.PI/2;const E=new At(new $e(.08,.08),_);c.add(h,x,E),c.visible=!1,e.add(c);const M=new ms(6813439,2.4,1.8,2);M.position.copy(m.position),e.add(M);function D(R,z,U){const V=new ke,j=new At(new wt(.09,.04,.12),n),q=new At(new wt(.11,.07,.16),r);q.position.set(0,.01,.12);const tt=new At(new wt(.086,.028,.03),n);tt.position.set(0,.02,-.04),V.add(j,q,tt);for(let rt=0;rt<4;rt++){const ut=new At(new wt(.018,.02,.055),n);ut.position.set(-.03+rt*.02,.012,-.07),V.add(ut)}const X=new At(new wt(.02,.02,.045),n);X.position.set(U>0?.05:-.05,.02,-.01),X.rotation.z=U>0?-.5:.5,V.add(X),V.position.set(R,-.05,z),V.rotation.y=U,V.rotation.z=U>0?.22:-.18,e.add(V)}D(-.07,.06,.5),D(.12,.08,-.62),e.traverse(R=>{R.castShadow=!1,R.receiveShadow=!1,R.frustumCulled=!1});let w=0,A=0,C=0,T="LIVE";const v={x:.18,y:-.28,z:-.48};return{setChannel(R){T=R,R==="LIVE"?(l.color.setHex(6813439),M.color.setHex(6813439),M.intensity=2.6):R==="STATIC"?(l.color.setHex(15921906),M.color.setHex(16777215),M.intensity=.8):(l.color.setHex(2761758),M.intensity=0)},fire(R){w=R==="spread"?.12:.055,A=R==="none"?0:.045,_.color.set(R==="spread"?16053492:13040639),c.scale.setScalar(R==="spread"?1.35:1)},setVisible(R){e.visible=R},update(R,z,U={}){const V=z>.35;C+=R*(V?7.2+Math.min(z,9)*.28:1.5);const j=V?.004+Math.min(z,9)*.00115:.0016,q=U.strafe||0;if(w+=(0-w)*(1-Math.exp(-12*R)),A-=R,c.visible=A>0,c.visible&&(c.rotation.z=A*18),T==="STATIC"){const tt=.45+Math.random()*.55;l.color.setRGB(tt,tt,tt)}e.position.x=v.x+Math.cos(C)*j*.7-q*.01,e.position.y=v.y+Math.sin(C*2)*j+(V?0:Math.sin(C)*.003),e.position.z=v.z+w*.62,e.rotation.x=w*1.7+Math.sin(C*2)*j*2.2,e.rotation.y=.06-w*.25,e.rotation.z=-q*.035+Math.sin(C)*j*1.4}}}function Pe(i,t,e,n=1,r=1){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const a=new ao(s);return a.colorSpace=Le,a.wrapS=pr,a.wrapT=pr,a.repeat.set(n,r),a.anisotropy=8,a.magFilter=cn,a.minFilter=Xn,a}function sr(i,t,e,n,r,s){i.fillStyle=r;for(let a=0;a<n;a++){const o=a*97%t,l=a*53%e;i.fillRect(o,l,s,s)}}function Z0(){const i=Pe(256,256,(c,h,x)=>{c.fillStyle="#5c564c",c.fillRect(0,0,h,x);const E=64;for(let M=0;M<x;M+=E)for(let D=0;D<h;D+=E){const w=(D*3+M*7)%17/17,A=w>.66?"#6a6358":w>.33?"#574f46":"#4e4840";c.fillStyle=A,c.fillRect(D+2,M+2,E-4,E-4),c.fillStyle="rgba(20,16,12,0.35)",c.fillRect(D,M,E,2),c.fillRect(D,M,2,E)}c.fillStyle="rgba(30,22,14,0.28)",c.beginPath(),c.ellipse(48,180,28,10,.4,0,Math.PI*2),c.fill(),c.beginPath(),c.ellipse(190,60,22,8,-.5,0,Math.PI*2),c.fill(),c.fillStyle="rgba(90,70,40,0.18)",c.fillRect(8,8,18,6)},8,6),t=Pe(256,256,(c,h,x)=>{c.fillStyle="#c8bfb2",c.fillRect(0,0,h,x),c.fillStyle="#b3a898";for(let E=0;E<h;E+=64)c.fillRect(E,0,3,x);c.fillStyle="#9c9184",c.fillRect(0,168,h,10),c.fillStyle="#6e655c",c.fillRect(0,214,h,42),c.fillStyle="#8a8176",c.fillRect(0,210,h,6),c.fillStyle="rgba(70,50,30,0.12)";for(let E=0;E<20;E++)c.fillRect(E*41%h,20+E*17%120,16,5);sr(c,h,x,30,"rgba(255,255,255,0.04)",2)},3,2),e=Pe(128,128,(c,h,x)=>{c.fillStyle="#8d8478",c.fillRect(0,0,h,x),c.fillStyle="#756c62";for(let E=0;E<h;E+=16)c.fillRect(E,0,2,x);c.fillStyle="rgba(40,30,20,0.2)",c.fillRect(0,x-18,h,18),c.fillStyle="#a39888",c.fillRect(0,8,h,4)},2,2),n=Pe(128,128,(c,h,x)=>{c.fillStyle="#b7b1a6",c.fillRect(0,0,h,x),c.strokeStyle="#8e877c",c.lineWidth=3,c.strokeRect(1,1,h-2,x-2),c.fillStyle="#c9c3b6",c.fillRect(8,8,h-16,x-16),c.fillStyle="rgba(80,70,50,0.15)",c.fillRect(18,40,30,8),c.fillRect(70,80,22,6)},6,6),r=Pe(128,128,(c,h,x)=>{c.fillStyle="#5c3a22",c.fillRect(0,0,h,x);for(let E=0;E<x;E+=3){const M=70+E*17%50;c.strokeStyle=`rgb(${M+36}, ${M-4}, ${M-32})`,c.beginPath(),c.moveTo(0,E),c.quadraticCurveTo(h*.5,E+(E%9-4),h,E),c.stroke()}c.fillStyle="rgba(30,16,6,0.35)",c.fillRect(18,0,4,x),c.fillRect(78,0,3,x),c.beginPath(),c.ellipse(46,40,8,14,.2,0,Math.PI*2),c.fill(),c.beginPath(),c.ellipse(96,90,6,10,-.3,0,Math.PI*2),c.fill()}),s=Pe(128,128,(c,h,x)=>{c.fillStyle="#16130f",c.fillRect(0,0,h,x),c.fillStyle="#e2a23a";const E=18;for(let M=-8;M<16;M++)c.beginPath(),c.moveTo(M*E,0),c.lineTo(M*E+E*.55,0),c.lineTo(M*E+E*.55-x,x),c.lineTo(M*E-x,x),c.fill()}),a=Pe(128,64,(c,h,x)=>{for(let E=0;E<x;E++)for(let M=0;M<h;M++){const w=140+(M*17+E*13)%40*2;c.fillStyle=`rgb(${w},${w},${w-10})`,c.fillRect(M,E,1,1)}c.fillStyle="rgba(0,0,0,0.45)";for(let E=0;E<x;E+=3)c.fillRect(0,E,h,1)}),o=Pe(128,128,(c,h,x)=>{c.fillStyle="#efe8de",c.fillRect(0,0,h,x),c.fillStyle="#fbf7f1",c.fillRect(10,10,h-20,x-20),c.strokeStyle="rgba(40,34,28,0.45)",c.lineWidth=3,c.strokeRect(8,8,h-16,x-16),c.strokeStyle="rgba(40,34,28,0.28)",c.beginPath(),c.moveTo(18,x/2),c.lineTo(h-18,x/2),c.moveTo(h/2,18),c.lineTo(h/2,x-18),c.stroke(),sr(c,h,x,24,"rgba(60,48,30,0.16)",2)}),l=Pe(128,128,(c,h,x)=>{c.fillStyle="#d5cec3",c.fillRect(0,0,h,x),c.fillStyle="#c4b6a2",c.fillRect(0,x*.55,h,x*.45),c.fillStyle="rgba(90,70,46,0.35)",c.fillRect(0,x-16,h,16),sr(c,h,x,40,"rgba(70,54,32,0.28)",2),c.strokeStyle="rgba(40,34,28,0.4)",c.strokeRect(6,6,h-12,x-12)}),u=Pe(64,64,(c,h,x)=>{c.fillStyle="#141414",c.fillRect(0,0,h,x),c.fillStyle="#2a2a2a";for(let E=-8;E<16;E++)c.fillRect(E*8,0,2,x);c.fillStyle="#3a3a3a",c.fillRect(0,4,h,3),c.fillStyle="#0a0a0a",c.fillRect(0,x-8,h,8)}),f=Pe(64,64,(c,h,x)=>{c.fillStyle="#c6a15a",c.fillRect(0,0,h,x),c.fillStyle="#e6c97a",c.fillRect(0,2,h,6),c.fillStyle="#8a6a32",c.fillRect(0,x-8,h,8),c.strokeStyle="rgba(60,40,10,0.45)",c.beginPath(),c.moveTo(8,0),c.lineTo(18,x),c.moveTo(40,0),c.lineTo(30,x),c.stroke()}),d=Pe(128,128,(c,h,x)=>{c.fillStyle="#f3efe6",c.fillRect(0,0,h,x);for(let E=8;E<h;E+=14)c.strokeStyle=E%28===8?"rgba(170,150,110,0.35)":"rgba(120,100,70,0.18)",c.beginPath(),c.moveTo(E,0),c.quadraticCurveTo(E+4,x/2,E-2,x),c.stroke();c.fillStyle="rgba(90,70,40,0.08)",c.fillRect(0,x-20,h,20)}),m=Pe(128,128,(c,h,x)=>{c.fillStyle="#3a2418",c.fillRect(0,0,h,x),sr(c,h,x,80,"rgba(20,10,6,0.45)",2),sr(c,h,x,40,"rgba(120,80,50,0.2)",1),c.strokeStyle="rgba(10,6,4,0.7)",c.lineWidth=3,c.beginPath(),c.moveTo(0,20),c.lineTo(h,28),c.stroke()}),p=Pe(128,128,(c,h,x)=>{c.fillStyle="#241810",c.fillRect(0,0,h,x),c.fillStyle="#1a110c";for(let E=0;E<h;E+=10)c.fillRect(E,0,3,x);c.fillStyle="rgba(80,50,30,0.15)",c.fillRect(0,0,h,8)}),g=Pe(256,256,(c,h,x)=>{c.fillStyle="#3e3832",c.fillRect(0,0,h,x);const E=64;for(let M=0;M<x;M+=E)for(let D=0;D<h;D+=E)c.fillStyle=(D+M)%128===0?"#4a433b":"#35302b",c.fillRect(D+3,M+3,E-6,E-6);c.strokeStyle="rgba(166,132,70,0.35)",c.lineWidth=2;for(let M=0;M<=h;M+=E)c.beginPath(),c.moveTo(M,0),c.lineTo(M,x),c.stroke(),c.beginPath(),c.moveTo(0,M),c.lineTo(h,M),c.stroke()},4,4),_=Pe(64,64,(c,h,x)=>{c.fillStyle="#8d9298",c.fillRect(0,0,h,x),c.fillStyle="rgba(255,255,255,0.18)";for(let E=0;E<x;E+=3)c.fillRect(0,E,h,1);c.fillStyle="#5e646a",c.fillRect(0,0,h,4)});return{floor:i,wall:t,ceiling:n,wood:r,hazard:s,snow:a,pearl:o,pearlWorn:l,joint:u,gold:f,cloth:d,leather:m,trench:p,nave:g,trim:e,brushed:_}}function Nl(i,t,e="#16130f",n="#f4efe6"){const r=document.createElement("canvas");r.width=512,r.height=t?160:128;const s=r.getContext("2d");s.fillStyle=e,s.fillRect(0,0,r.width,r.height),s.strokeStyle="#e2a23a",s.lineWidth=8,s.strokeRect(8,8,r.width-16,r.height-16),s.fillStyle=n,s.textAlign="center",s.textBaseline="middle",s.font="700 58px Trebuchet MS, sans-serif",s.fillText(i,r.width/2,t?68:r.height/2+2),t&&(s.font="600 28px Trebuchet MS, sans-serif",s.fillStyle="#e2a23a",s.fillText(t,r.width/2,118));const a=new ao(r);return a.colorSpace=Le,a.anisotropy=4,a}function _e(i){return new je(i)}function K0(i){const t=Z0(),e={floor:_e({map:t.floor,roughness:.94,metalness:.02}),wall:_e({map:t.wall,roughness:.88,metalness:.03}),ceiling:_e({map:t.ceiling,roughness:.96,metalness:0}),trim:_e({map:t.trim,roughness:.74,metalness:.08}),metal:_e({color:7172984,roughness:.38,metalness:.62}),wood:_e({map:t.wood,roughness:.66,metalness:.04}),runner:_e({color:4866104,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),dark:_e({color:1315344,roughness:.9}),brass:_e({color:11570510,roughness:.36,metalness:.64}),plant:_e({color:5065016,roughness:.92}),glass:_e({color:12964050,roughness:.08,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),hazard:_e({map:t.hazard,roughness:.55,metalness:.12,transparent:!0,opacity:.96,emissive:5913104,emissiveIntensity:.18})};e.hazard.side=en;const n=new Map;function r(J,P,Ht,bt,Ut,vt,Qt){const St=new wt(Ut,vt,Qt);St.translate(P,Ht,bt),n.has(J)||n.set(J,[]),n.get(J).push(St)}const s=[];let a=null;const o=3.6;let l=null;const u=_e({color:16052196,roughness:.42,metalness:.18,transparent:!0,opacity:.94,emissive:13939034,emissiveIntensity:.32});u.side=en;for(const J of Pc){if(J.veil){l=new At(new wt(J.w,J.h,J.d),u),l.position.set(J.x,J.y,J.z),l.visible=!1,i.add(l);continue}if(J.door){a=new ke;const P=new At(new wt(J.w*.92,J.h*.98,J.d*.62),_e({color:15196370,roughness:.62,metalness:.06})),Ht=new At(new wt(J.w,.16,J.d*.8),e.brass);Ht.position.y=J.h*.42;const bt=new At(new wt(.14,J.h*.72,J.d*.78),e.brass),Ut=new At(new $e(1.7,.5),new be({map:Nl("RADIO","WING","#1c140c","#f0d48a")}));Ut.position.set(0,.35,J.d*.42),a.add(P,Ht,bt,Ut),a.position.set(J.x,J.y,J.z),i.add(a);continue}if(J.phaseGate){const P=new At(new wt(J.w,J.h,J.d),e.hazard);P.position.set(J.x,J.y,J.z),P.castShadow=!0,P.receiveShadow=!0,i.add(P),s.push(P);continue}r(J.mat,J.x,J.y,J.z,J.w,J.h,J.d)}r("runner",0,.02,-1.2,2.6,.02,18),r("dark",-7.4,1.3,-13.15,6.4,2.6,.4),r("dark",-5.2,1.3,-13.15,2.4,2.6,.4),r("dark",5.4,1.3,-13.15,2.4,2.6,.4),r("dark",8.6,1.3,-13.15,6.4,2.6,.4),r("runner",0,.025,-21.4,1.5,.02,12),r("brass",0,2.55,-2.15,.12,3.5,.12),r("brass",0,4.15,-2.15,1.35,.08,1.35),r("plant",-3.3,.28,-2.5,.7,.45,.7),r("plant",3.35,.28,1.4,.7,.45,.7),r("plant",-3.2,.55,2.4,.45,.7,.45),r("metal",-14.2,.9,-8.4,1.1,.12,3.2);for(const J of[-12,-4,4,12])for(const P of[-8,0,8])r("metal",J,6.85,P,1.6,.08,.28);for(let J=-14;J<=14;J+=2.2)r("metal",J,4.55,-10.45,.06,.7,.06);r("metal",0,4.55,-10.45,28,.05,.05);for(const[J,P]of n){const Ht=P.length===1?P[0]:Bc(P),bt=new At(Ht,e[J]);bt.castShadow=J!=="floor"&&J!=="ceiling"&&J!=="runner",bt.receiveShadow=!0,i.add(bt)}const f=new At(new An(1.55,1.55,.08,16),_e({color:4078132,roughness:.95}));f.position.set(0,.05,-.05),f.receiveShadow=!0,i.add(f);const d=new At(new An(.55,.7,.12,12),e.brass);d.position.set(0,4.28,-2.15),d.rotation.x=.55,d.castShadow=!0,i.add(d);const m=new At(new $e(1.15,.7),new be({color:16757066}));m.position.set(10.7,1.85,-5.1),m.rotation.y=-Math.PI/2,i.add(m);const p=new At(new $e(1.7,1.7),_e({map:t.hazard,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));p.rotation.x=-Math.PI/2,p.position.set(9.45,.03,0),p.receiveShadow=!0,i.add(p);const g=new At(new wt(5.4,2.2,.06),e.glass);g.position.set(9.4,1.8,8.7),i.add(g);const _=new At(new wt(.7,.45,.06),new be({map:t.snow}));_.position.set(9.2,1.25,8.72),i.add(_);const c=_.clone();c.position.x=10.15,i.add(c);const h=new At(new wt(.08,.08,.08),new be({color:16757066}));h.position.set(10.55,1.55,8.7),i.add(h);function x(J,P,Ht,bt,Ut,vt,Qt,St,b,S){const k=new At(new $e(vt,Qt),new be({map:Nl(J,P,b,S),transparent:!1}));return k.position.set(Ht,bt,Ut),k.rotation.y=St,i.add(k),k}x("KRCD 7","MALL COURT",0,5.55,-6.4,3.6,1.05,0),x("RECORDS","CLOSED",-7.4,2.85,-12.55,2.3,.62,0),x("OPTICAL","DARK",-5.2,2.85,-12.55,2.1,.62,0),x("RADIO WING","NORTH DOOR",0,3.42,-10.7,2.5,.64,0,"#1c140c","#f0d48a"),x("WE'LL BE RIGHT BACK","",8.4,2.8,-12.55,3.3,.55,0),x("FOOD HALL","",-10.2,1.85,8.48,2.6,.48,Math.PI),x("KRCD BOOTH","OFF AIR",9.4,2.55,8.62,2.5,.7,Math.PI),x("DIRECTORY","OFFLINE",-3.35,1.15,6.95,.72,.48,0),x("DEAD AIR","SHUTTER",9.15,2.05,.02,1.8,.78,-Math.PI/2),x("ANCHOR DARK","",-15.85,3.1,.2,2.4,.55,Math.PI/2),x("SERVICE","NORTH END OPEN",13.6,2.6,-9.2,2.2,.6,Math.PI),x("RADIO","SERVICE",7.95,2.7,-18.2,1.8,.55,-Math.PI/2,"#1c140c","#f0d48a"),x("PA","HORN",-7.35,3.2,-17.35,.95,.42,Math.PI/2,"#1c140c","#f0d48a");const E=new At(new $e(3.15,.34),new be({color:15123818}));E.rotation.x=-Math.PI/2,E.position.set(0,.045,fr),i.add(E);const M=Cc[0],D=_e({color:13017434,roughness:.32,metalness:.7,emissive:13939034,emissiveIntensity:.12}),w=new ke,A=new At(new An(.08,.34,.62,10),D);A.rotation.z=Math.PI/2,A.castShadow=!0;const C=new At(new An(.06,.06,.45,8),e.brass);C.rotation.z=Math.PI/2,C.position.x=-.42;const T=new At(new jn(.07,8,8),new be({color:16757066}));T.position.x=.28;const v=new At(new gr(.55,.03,6,18),new be({color:6813439,transparent:!0,opacity:0,depthWrite:!1}));v.rotation.y=Math.PI/2,w.add(A,C,T,v),w.position.set(M.x,M.y,M.z),i.add(w);const R=new ms(16757082,7,5.5,2);R.position.set(M.x+.4,M.y,M.z),i.add(R);function z(J,P){const Ht=new At(new An(.035,.05,.46,6),e.brass);Ht.position.set(J,.28,P);const bt=new At(new jn(.045,6,6),new be({color:16757066}));bt.position.set(J,.54,P),i.add(Ht,bt)}z(-4.9,-18.2),z(4.9,-18.2),z(-4.9,-20.45),z(4.9,-20.45),z(-1.35,-27.15),z(1.35,-27.15);const U=new At(new $e(15.2,13.2),_e({map:t.nave,roughness:.92,metalness:.04,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));U.rotation.x=-Math.PI/2,U.position.set(0,.018,-21.55),U.receiveShadow=!0,i.add(U);const V=Ya.find(J=>J.kind==="signal"),j=Ya.find(J=>J.kind==="health"),q=new ke,tt=new At(new wt(.38,.28,.38),e.brass),X=new At(new wt(.16,.16,.16),new be({color:16757066}));X.position.y=.22,q.add(tt,X),q.position.set(V.x,.35,V.z),i.add(q);const rt=new ke,ut=new At(new wt(.36,.22,.26),_e({color:15196888,roughness:.6})),Mt=new At(new wt(.22,.04,.28),_e({color:9255466,roughness:.5}));Mt.position.y=.08,rt.add(ut,Mt),rt.position.set(j.x,.2,j.z),i.add(rt);const Ot=new $m(15788252,3813930,.98);i.add(Ot);const Ct=new Qm(16774114,2.65);Ct.position.set(7,16,8),Ct.castShadow=!0,Ct.shadow.mapSize.set(2048,2048),Ct.shadow.camera.near=1,Ct.shadow.camera.far=70,Ct.shadow.camera.left=-30,Ct.shadow.camera.right=30,Ct.shadow.camera.top=30,Ct.shadow.camera.bottom=-30,Ct.shadow.bias=-35e-5,Ct.shadow.normalBias=.04,Ct.target.position.set(0,0,-8),i.add(Ct,Ct.target);const Y=[];function nt(J,P,Ht,bt=36,Ut=8){const vt=new ms(16757082,bt,Ut,2);return vt.position.set(J,P,Ht),i.add(vt),Y.push(vt),vt}nt(0,3.2,-2.1,18,7),nt(-10,2.4,8.2,28,8),nt(9.2,2.6,8.4,26,7),nt(13.5,2.8,-5,34,8),nt(-6,3.4,-8,22,8),nt(4,3.4,-8,20,8),nt(0,5.2,2,30,14),nt(0,4.4,-21.5,34,16),nt(0,3.3,-26.4,16,7);const $=nt(13.4,2.6,1.2,24,6);let lt=0,mt=0,Pt=!1,Dt=!1,Zt=0,zt=0;return i.background=new Yt(12893618),i.fog=new so(12893618,18,48),{colliders:Lc(),gates:s,cache:q,aid:rt,textures:t,setDoor(J,P=!1){mt=J?1:0,P&&(lt=mt,a&&(a.position.y=o+lt*6.4))},setVeil(J,P){if(!l||(l.visible=!!J,!J))return;const Ht=P==="DEAD_AIR";u.opacity=Ht?.16:.94,u.depthWrite=!Ht,u.emissiveIntensity=Ht?.62:.3},setHijack({aimed:J,hot:P}){Pt=!!J,Dt=!!P},pulseHijack(){Zt=.48},setChannel(J){const P=i.fog;J==="STATIC"?(P.color.setHex(10133668),P.near=12,P.far=38,i.background.setHex(9475738)):J==="DEAD_AIR"?(P.color.setHex(2764856),P.near=10,P.far=36,i.background.setHex(2369584)):(P.color.setHex(12893618),P.near=18,P.far=48,i.background.setHex(12893618));for(const Ht of s)Ht.material.opacity=J==="DEAD_AIR"?.14:.97,Ht.material.depthWrite=J!=="DEAD_AIR",Ht.material.emissiveIntensity=J==="DEAD_AIR"?.45:.18},setPickup(J,P){J==="cache"&&(q.visible=P),J==="aid"&&(rt.visible=P)},update(J,P){const Ht=Math.min(.05,Math.max(0,J-zt||0));if(zt=J,lt+=(mt-lt)*Math.min(1,Ht*4.2),a&&(a.position.y=o+lt*6.4),Zt>0&&(Zt=Math.max(0,Zt-Ht)),v.material.opacity=Zt>0?Zt/.48:0,v.scale.setScalar(Zt>0?1+(1-Zt/.48)*2.4:1),D.emissive.setHex(Dt?6813439:13939034),D.emissiveIntensity=Dt?1.15:Pt?.85:.12,T.material.color.setHex(Dt?6813439:16757066),R.color.setHex(Dt?6813439:16757082),R.intensity=Dt?22:Pt?14:7,$.intensity=18+Math.sin(J*28)*10+(Math.random()<.04?-12:0),P==="STATIC"){const bt=1+Math.sin(J*6)*.08;q.scale.setScalar(bt)}else q.scale.setScalar(1);m.material.color.setHSL(.09,.85,P==="DEAD_AIR"?.18:.55)},practicals:Y}}const Fl="channel-surfer-best",$0={LIVE:"LIVE",STATIC:"STATIC",DEAD_AIR:"DEAD AIR"},j0={LIVE:"switch-live",STATIC:"switch-static",DEAD_AIR:"switch-dead"};function Ol(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Bl(i,t,e,n){return i+(t-i)*(1-Math.exp(-12*n))}function ra(i,t){const e=Math.cos(t),n=Math.sin(t),r=Math.sin(i),s=Math.cos(i),a={x:-r*e,y:n,z:-s*e},o={x:s,y:0,z:-r},l={x:o.y*a.z-o.z*a.y,y:o.z*a.x-o.x*a.z,z:o.x*a.y-o.y*a.x};return{forward:a,right:o,up:l}}function J0(i,t){const e=new Vm({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(960,780,!1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.outputColorSpace=Le,e.toneMapping=Yl,e.toneMappingExposure=1.14,e.shadowMap.enabled=!0,e.shadowMap.type=Xl;const n=new Wm,r=new Ke(72,960/780,.08,90);n.add(r);const s=new ms(16770756,14,4.5,2);s.position.set(.05,.02,-.25),r.add(s);const a=K0(n),o=N0(n,a.textures),l=Y0(r,a.textures),u=72,f=new Float32Array(u*3),d=new Float32Array(u*3),m=new Me;m.setAttribute("position",new De(f,3)),m.setAttribute("color",new De(d,3));const p=new Km(m,new wc({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}));n.add(p);const g=document.createElement("canvas");g.width=64,g.height=64;const _=g.getContext("2d"),c=_.createRadialGradient(32,32,1,32,32,30);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.35,"rgba(255,214,150,0.75)"),c.addColorStop(1,"rgba(255,160,60,0)"),_.fillStyle=c,_.fillRect(0,0,64,64);const h=new ao(g);h.colorSpace=Le;const x=[];for(let L=0;L<12;L++){const B=new qm(new Tc({map:h,transparent:!0,depthWrite:!1,blending:cs}));B.visible=!1,B.frustumCulled=!1,n.add(B),x.push(B)}const E=28,M=new Float32Array(E*6),D=new Float32Array(E*6),w=new Me;w.setAttribute("position",new De(M,3)),w.setAttribute("color",new De(D,3)),n.add(new Zm(w,new Ac({vertexColors:!0,transparent:!0,opacity:.95})));let A="title",C=null,T=[],v=null,R=[],z=[],U=!1,V=!1,j=!1,q=1.25,tt=0,X=0,rt=!1,ut="",Mt="",Ot="",Ct=[],Y=[],nt=[],$={x:0,y:1.58,z:8,yaw:0,pitch:0,vx:0,vz:0},lt=Ol(1),mt=0,Pt=0,Dt=0,Zt=0,zt=0,J=0,P=0,Ht="",bt=0,Ut=0,vt="",Qt=0;const St=[],b=new Set;let S=0,k="",Q=!1;try{S=Number(localStorage.getItem(Fl))||0}catch(L){S=0}function et(L,B,W,K,at){for(let Jt=0;Jt<at;Jt++)Ct.push({x:L,y:B,z:W,vx:(Math.random()-.5)*4,vy:.6+Math.random()*2.4,vz:(Math.random()-.5)*4,life:.22+Math.random()*.22,color:K});Ct.length>u&&Ct.splice(0,Ct.length-u),Y.push({x:L,y:B,z:W,life:.14,max:.14,color:K}),Y.length>x.length&&Y.shift()}function Z(L){Ht=L,bt=.95,Ut+=1}function gt(L,B){b.has(L)||(b.add(L),St.push(B))}function ct(L){k!==L&&(k=L,a.setChannel(L),l.setChannel(L),t.setChannel(L))}function pt(){return Lc({doorOpen:U,veilUp:!!(v&&v.alive&&v.veilUp)})}function jt(L){return{x:L.x,y:L.y,z:L.z,yaw:L.yaw||0,pitch:0,vx:0,vz:0}}function it(){C=El(),T=[...Ic(),...gs()],v=Il(),R=l0(),U=!1,V=!1,j=!1,q=1.25,tt=0,X=0,rt=!1,ut="",Mt="",Ot="",z=[],Ct=[],Y=[],nt=[],$=jt(e0),lt=Ol((Date.now()&65535)+3),mt=0,Dt=0,Zt=.2,zt=0,J=0,P=0,Q=!1,Ht="",bt=0,vt="",Qt=0,St.length=0,b.clear(),o.reset(T),o.resetPriest(v),a.setDoor(!1,!0),a.setVeil(!1,"LIVE"),ct("LIVE")}function _t(){C={...El(),signal:80},T=[...T.filter(L=>L.room!=="chapel"),...gs().map(L=>({...L,dormant:!1}))],v={...Il(),active:!0},U=!0,j=!1,q=1.25,tt=0,X=0,rt=!1,ut="",Mt="",Ot="",z=[],Ct=[],Y=[],nt=[],$=jt(n0),Zt=.45,Q=!1,V=!1,P=0,J=0,zt=0,o.reset(T),o.resetPriest(v),a.setDoor(!0,!0),a.setVeil(!1,"LIVE"),ct("LIVE"),Z("RADIO WING")}it();function Lt(){if(mt>0&&!(S>0&&mt>=S)){S=mt;try{localStorage.setItem(Fl,String(S))}catch(L){}}}function It(L,B){const W=f0(C,L);W.result==="ok"?(C=W.state,Dt+=1,P=.45,Z($0[C.channel]),t.play(j0[C.channel]),ct(C.channel)):W.result==="denied"&&(Z("NO SIGNAL"),t.play("deny"))}function xt(){const L=m0(C);if(C=L.state,!L.fired)return;const{forward:B,right:W,up:K}=ra($.yaw,$.pitch),at={x:$.x,y:$.y,z:$.z},Jt=b0(B,W,K,L.profile.pellets,L.profile.spread,Math.random),me={x:at.x+B.x*.42+W.x*.14-K.x*.1,y:at.y+B.y*.42+W.y*.14-K.y*.1,z:at.z+B.z*.42+W.z*.14-K.z*.1},qt=mt<tt,Ae=L.profile.kind==="hitscan"||qt?[.45,.97,1]:[.82,.82,.82],Ge=pt();let _n=!1,Ln=!1;zt=Math.min(.07,zt+(L.profile.kind==="spread"?.05:.014)),l.fire(L.profile.kind),t.play(L.profile.kind==="spread"?"static":"live");for(const we of Jt){const fe=y0(at,we,L.profile.range,T,Ge),Ie=v.alive?V0(at,we,L.profile.range,v,C.channel):null,Dn=!!(Ie&&(!fe||Ie.t<fe.t)),Ve=Dn?Ie:fe,Ue=Math.min(L.profile.range,22),Ne=Ve?{x:Ve.x,y:Ve.y,z:Ve.z}:{x:at.x+we.x*Ue,y:at.y+we.y*Ue,z:at.z+we.z*Ue};if((!Ve||Ve.t>.45)&&nt.push({a:me,b:Ne,color:Ae,life:.16}),Dn){const st=bl(L.profile.damage,Ie.t,L.profile.range,L.profile.falloff)*(qt?Vn.retuneMult:1),y=G0(v,st);if(v=y.priest,y.dealt>0&&(_n=!0),et(Ie.x,Ie.y,Ie.z,qt?[.45,.97,1]:[.96,.94,.88],5),!y.killed){const I=Ul(v,{channel:C.channel,weak:Ie.weak,halo:Ie.halo,crossed:!1});I.broken?(Kt(I),Ln=!0):v=I.priest}continue}if(!fe)continue;if(fe.kind==="world"){et(fe.x,fe.y,fe.z,[.75,.68,.55],6);continue}const rn=T.findIndex(st=>st.id===fe.id);if(rn<0||!T[rn].alive)continue;const In=E0(T[rn],mt),fi=bl(L.profile.damage,fe.t,L.profile.range,L.profile.falloff)*(qt?Vn.retuneMult:1),xn=T0(In.enemy,{weak:fe.weak,damage:fi});if(xn.enemy.hurt=.1,T[rn]=xn.enemy,_n=xn.dealt>0,et(fe.x,fe.y,fe.z,[.96,.94,.9],8),xn.killed){const st=_0(C,{distance:fe.t,channel:C.channel,burst:In.burst});C=st.state,et(fe.x,fe.y,fe.z,[1,.68,.25],18),t.play("death"),Z(st.aggressive?"AGGRESSIVE +"+st.amount:"SIGNAL +"+st.amount)}}_n&&!Ln&&t.play("hit"),nt.length>E&&nt.splice(0,nt.length-E)}function Kt(L){v=L.priest,L.broken&&(t.play("rite-break"),et(v.x,2.15,v.z,[.96,.78,.32],20),P=Math.max(P,.34),v.alive&&Z("RITE BROKEN"))}function Gt(){const L=v.x,B=1.72,W=v.z,K=$.x-L+(lt()-.5)*.22,at=1.15-B+(lt()-.5)*.12,Jt=$.z-W+(lt()-.5)*.22,me=Math.hypot(K,at,Jt)||1,qt=Je.boltSpeed;return{x:L,y:B,z:W,vx:K/me*qt,vy:at/me*qt,vz:Jt/me*qt,damage:Je.boltDamage,life:2.6}}function se(L,B){const W=d0(C,L);if(C=W.state,W.forced&&(Z("NO SIGNAL"),t.play("nosignal"),P=.55,ct(C.channel)),B.channel)It(B.channel);else if(B.cycle){const st=fn(B.cycle,-3,3),y=st>0?1:-1;for(let I=0;I!==st;I+=y)It(u0(C.channel,y))}$.yaw-=B.lookX*.00215,$.pitch=fn($.pitch-B.lookY*.00215,-1.35,1.35);const K=T.some(st=>st.alive&&st.room!=="chapel");if(!U&&!K&&(U=!0,Z("RADIO WING"),t.play("door"),gt("wing","North door is open. The radio wing is still on the air.")),U&&$.z<-15.05){for(let st=0;st<T.length;st++)T[st].room==="chapel"&&T[st].dormant&&(T[st]={...T[st],dormant:!1});v.active||(v={...v,active:!0},gt("priest","Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil."))}const at=Cc[0],{forward:Jt}=ra($.yaw,$.pitch),me=!Oc($.x,$.y,$.z,at.x,at.y,at.z,pt());rt=W0({origin:{x:$.x,y:$.y,z:$.z},dir:Jt,point:at,maxDist:Vn.maxDist,cone:Vn.cone,blocked:me}).aimed;const Ae=mt<tt,Ge=X>mt;if(rt?ut=Ae?"PA RETUNED":Ge?"PA RECHARGING":"E  RETUNE PA":ut=Ae?"PA RETUNED":"",Mt=Ae?"hot":rt&&Ge?"cool":rt?"ready":"",B.use&&rt){const st=X0({cooldownUntil:X},mt);st.ok?(X=st.cooldownUntil,tt=mt+Vn.retune,T=q0(T,at,Vn.radius,Vn.stun),Z("PA RETUNE"),t.play("hijack"),et(at.x,at.y,at.z,[.45,.97,1],28),P=Math.max(P,.28),J=Math.max(J,.035),a.pulseHijack()):t.play("deny")}U&&Math.hypot($.x-at.x,$.z-at.z)<8&&gt("pa","Aim at the wall horn and press E. It retunes Tessera nearby.");const _n=k0(v,L,{player:{x:$.x,z:$.z}});v=_n.priest;for(const st of _n.events)if(st.type==="announce")Z(Dl(st.rite)),t.play("rite");else if(st.type==="fail"){const y=Al(C,st.damage);C=y.state,y.hit&&(t.play("rite-fail"),J=Math.max(J,.045)),Z("RITE HOLDS")}else st.type==="shot"&&z.length<16&&(z.push(Gt()),t.play("bolt"));Ot=v.alive&&v.phase==="rite"?Dl(v.rite):"";const Ln=pt();for(let st=0;st<T.length;st++){if(!T[st].alive)continue;const y=C0(T[st],L,{channel:C.channel,player:{x:$.x,y:1.2,z:$.z},colliders:Ln,allies:T,rng:lt});T[st]=y.enemy,y.shot&&z.length<16&&(z.push(y.shot),t.play("bolt"))}const we=Uc(C.channel),fe=-Math.sin($.yaw),Ie=-Math.cos($.yaw),Dn=Math.cos($.yaw),Ve=-Math.sin($.yaw);let Ue=0,Ne=0;B.forward&&(Ue+=fe,Ne+=Ie),B.back&&(Ue-=fe,Ne-=Ie),B.right&&(Ue+=Dn,Ne+=Ve),B.left&&(Ue-=Dn,Ne-=Ve);const rn=Math.hypot(Ue,Ne);rn>0&&(Ue=Ue/rn*we,Ne=Ne/rn*we),$.vx=Bl($.vx,Ue,12,L),$.vz=Bl($.vz,Ne,12,L);const In=Nc($.x,$.z,$.vx*L,$.vz*L,ne.playerRadius,Ln,C.channel,t0);if($.x=In.x,$.z=In.z,v.alive&&v.phase==="rite"&&v.rite==="veil"&&C.channel==="DEAD_AIR"&&$.z<i0){const st=Ul(v,{channel:"DEAD_AIR",weak:!1,halo:!1,crossed:!0});st.broken&&Kt(st)}Zt>0?Zt-=L:B.fireDown?C.channel==="DEAD_AIR"?Q||(Q=!0,t.play("deny"),l.fire("none")):(Q=!1,xt()):Q=!1;const fi=[];for(const st of z){const y=Math.hypot(st.vx,st.vy,st.vz)||1,I=y*L,H=uo(st.x,st.y,st.z,st.vx/y,st.vy/y,st.vz/y,I,pt());if(H){et(H.x,H.y,H.z,[1,.62,.22],3);continue}if(st.x+=st.vx*L,st.y+=st.vy*L,st.z+=st.vz*L,st.life-=L,st.life<=0||st.y<0||st.y>6)continue;const G=st.x-$.x,O=st.z-$.z;if(G*G+O*O<.4*.4&&st.y>.25&&st.y<1.75){const ot=Al(C,st.damage);C=ot.state,ot.hit&&(t.play("hurt"),J=.05,P=Math.max(P,.2)),et(st.x,st.y,st.z,[1,.5,.18],6);continue}fi.push(st)}z=fi;for(const st of R){if(st.taken||!w0(st,C.channel)||Math.hypot($.x-st.x,$.z-st.z)>1.15)continue;const y=A0(C,st);y.took&&(C=y.state,st.taken=!0,t.play("pickup"),Z(st.kind==="signal"?"SIGNAL CACHE":"AID KIT"))}mt>.45&&gt("intro","LIVE — precise cyan bolt. Keys 1–3, wheel, or Q."),(Math.hypot($.x,$.z)<7.5||mt>11)&&gt("cloak","A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam."),(Math.hypot($.x-10.4,$.z)<6.2||mt>20)&&gt("gate","Striped shutter is DEAD AIR. You move faster and cannot fire."),$.x>12.1&&R.some(st=>st.cloaked&&!st.taken)&&gt("cache","Something in the alley is off-channel. STATIC reveals a signal cache.");const xn=T.filter(st=>st.alive&&st.room!=="chapel");if(xn.length===1&&xn[0].id==="alley"&&gt("last","Last Tessera is in the east service alley. Phase the shutter or walk the north end."),Qt>0?(Qt-=L,Qt<=0&&(vt="")):St.length&&(vt=St.shift(),Qt=6.2),C.health<=0){V=U,A="dead",t.play("ui");return}!v.alive&&U?(j||(j=!0,T=T.map(st=>st.room==="chapel"&&st.alive?{...st,alive:!1,hittable:!1}:st),C=co(C,40),Z("OFF THE AIR"),t.play("death"),et(v.x,2.1,v.z,[.96,.8,.38],34),et(v.x,2.75,v.z,[.9,.72,.28],16),q=1.25),q-=L,q<=0&&(A="clear",Lt(),t.play("pickup"))):q=1.25}function N(L){for(let B=Ct.length-1;B>=0;B--){const W=Ct[B];W.life-=L,W.vy-=7*L,W.x+=W.vx*L,W.y+=W.vy*L,W.z+=W.vz*L,W.life<=0&&Ct.splice(B,1)}for(let B=0;B<u;B++){const W=Ct[B],K=B*3;if(!W){f[K+1]=-40,d[K]=d[K+1]=d[K+2]=0;continue}f[K]=W.x,f[K+1]=W.y,f[K+2]=W.z;const at=fn(W.life*3,0,1);d[K]=W.color[0]*at,d[K+1]=W.color[1]*at,d[K+2]=W.color[2]*at}m.attributes.position.needsUpdate=!0,m.attributes.color.needsUpdate=!0;for(let B=Y.length-1;B>=0;B--)Y[B].life-=L,Y[B].life<=0&&Y.splice(B,1);for(let B=0;B<x.length;B++){const W=x[B],K=Y[B];if(!K){W.visible=!1;continue}const at=K.life/K.max;W.visible=!0,W.position.set(K.x,K.y,K.z),W.scale.setScalar(.18+(1-at)*.55),W.material.opacity=at,W.material.color.setRGB(K.color[0],K.color[1],K.color[2])}for(let B=nt.length-1;B>=0;B--)nt[B].life-=L,nt[B].life<=0&&nt.splice(B,1);for(let B=0;B<E;B++){const W=nt[B],K=B*6;if(!W){M[K+1]=-40,M[K+4]=-40;continue}M[K]=W.a.x,M[K+1]=W.a.y,M[K+2]=W.a.z,M[K+3]=W.b.x,M[K+4]=W.b.y,M[K+5]=W.b.z;for(let at=0;at<2;at++)D[K+at*3]=W.color[0],D[K+at*3+1]=W.color[1],D[K+at*3+2]=W.color[2]}w.attributes.position.needsUpdate=!0,w.attributes.color.needsUpdate=!0}function ft(L){if(A==="title"){r.position.set(Math.sin(Pt*.16)*.5,2.5,9.3),r.lookAt(0,1.2,-1.4),l.setVisible(!1);return}l.setVisible(!0),J*=Math.exp(-9*L),zt*=Math.exp(-11*L),r.position.set($.x+(Math.random()-.5)*J,$.y,$.z+(Math.random()-.5)*J),r.rotation.order="YXZ",r.rotation.y=$.yaw,r.rotation.x=$.pitch-zt,r.rotation.z=0;const{right:B}=ra($.yaw,0),W=A==="play"?$.vx*B.x+$.vz*B.z:0;l.update(L,A==="play"?Math.hypot($.vx,$.vz):0,{strafe:W})}return{get mode(){return A},start(){it(),A="play",t.play("ui")},resume(){A==="pause"&&(A="play")},pause(){A==="play"&&(A="pause")},replay(){V?_t():it(),A="play",t.play("ui")},toTitle(){it(),A="title"},update(L,B){const W=Math.min(.05,Math.max(0,L)||0);Pt+=W,A==="play"&&(mt+=W,se(W,B)),bt>0&&(bt-=W,bt<=0&&(Ht="")),P=Math.max(0,P-W*3.2),ct(A==="title"?"LIVE":C.channel);const K=R.find(Jt=>Jt.cloaked),at=R.find(Jt=>Jt.kind==="health");a.setPickup("cache",!!(K&&!K.taken&&C.channel==="STATIC"&&A!=="title")),a.setPickup("aid",!!(at&&!at.taken)),a.setDoor(U),a.setVeil(!!(v.alive&&v.veilUp),A==="title"?"LIVE":C.channel),a.setHijack({aimed:A==="play"&&rt,hot:A==="play"&&mt<tt}),a.update(Pt,C.channel),o.sync(T,W,Pt,C.channel),o.syncPriest(v,W,Pt,A==="title"?"LIVE":C.channel),o.syncBolts(z),N(W),ft(W),e.render(n,r)},hud(){const L=$.z<-14.85,B=T.filter(at=>at.alive&&at.room!=="chapel").length,W=T.filter(at=>at.alive&&at.room==="chapel").length+(v.alive?1:0),K=A==="play";return{mode:A,health:C.health,signal:C.signal,channel:C.channel,enemies:L?W:B,roomLabel:L?"RADIO":"COURT",countLabel:L?"ON AIR":"TESSERA",tip:vt,banner:Ht,bannerSerial:Ut,flash:P,hurt:C.hurtTimer,time:mt,best:S,swaps:Dt,muted:t.muted,prompt:K?ut:"",promptKind:K?Mt:"",rite:K?Ot:"",boss:L&&v.alive?v.hp/v.maxHp:null,checkpoint:V}}}}const Q0=960,tg=780,Hc=document.getElementById("stage"),_s=document.getElementById("view"),_r=Vc();let $t;try{$t=J0(_s,_r)}catch(i){const t=document.getElementById("boot-error");throw t&&(t.textContent="The picture failed to come up. "+(i&&i.message?i.message:"")),i}const Ui=new Set,ve={lookX:0,lookY:0,fire:!1,channel:null,cycle:0,use:!1};let zl=-1;const eg=document.getElementById("health-fill"),ng=document.getElementById("health-num"),ig=document.getElementById("signal-fill"),rg=document.getElementById("signal-num"),sg=document.getElementById("ch-name"),ag=document.getElementById("enemy-count"),og=document.getElementById("room-label"),lg=document.getElementById("count-label"),cg=document.getElementById("rite"),kl=document.getElementById("prompt"),Hl=document.getElementById("boss-wrap"),ug=document.getElementById("boss-fill"),hg=document.getElementById("tip"),Jr=document.getElementById("banner"),Gl=document.getElementById("hurt"),fg=document.getElementById("flash"),dg=document.getElementById("panel"),Qr=document.getElementById("panel-kicker"),ts=document.getElementById("panel-title"),es=document.getElementById("panel-body"),ns=document.getElementById("panel-meta"),ur=document.getElementById("panel-primary"),hr=document.getElementById("panel-secondary");function fo(){const i=Math.min(window.innerWidth/Q0,window.innerHeight/tg);Hc.style.transform=`scale(${Math.max(.05,i)})`}fo();window.addEventListener("resize",fo);window.addEventListener("orientationchange",fo);function Bi(){document.pointerLockElement!==_s&&_s.requestPointerLock()}function ys(){_r.ensure(),$t.mode==="title"?($t.start(),Bi()):$t.mode==="pause"?($t.resume(),Bi()):($t.mode==="clear"||$t.mode==="dead")&&($t.replay(),Bi())}document.getElementById("start").addEventListener("click",i=>{i.stopPropagation(),ys()});ur.addEventListener("click",i=>{i.stopPropagation(),ys()});hr.addEventListener("click",i=>{i.stopPropagation(),_r.ensure(),($t.mode==="pause"||$t.mode==="clear"||$t.mode==="dead")&&($t.mode==="pause"?$t.replay():$t.toTitle(),$t.mode==="play"&&Bi())});window.addEventListener("keydown",i=>{if(i.repeat)return;(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),Ui.add(i.code);const t=c0(i.code);t&&$t.mode==="play"&&(ve.channel=t),i.code==="KeyQ"&&$t.mode==="play"&&(ve.cycle+=1),i.code==="KeyE"&&$t.mode==="play"&&(ve.use=!0),i.code==="KeyM"&&_r.toggle(),i.code==="Escape"&&$t.mode==="play"&&$t.pause(),i.code==="Enter"&&ys(),i.code==="KeyR"&&($t.mode==="pause"||$t.mode==="clear"||$t.mode==="dead")&&(_r.ensure(),$t.replay(),Bi())});window.addEventListener("keyup",i=>Ui.delete(i.code));window.addEventListener("mousemove",i=>{$t.mode==="play"&&(ve.lookX+=i.movementX||0,ve.lookY+=i.movementY||0)});window.addEventListener("mousedown",i=>{if(i.button===0&&!(i.target.closest&&i.target.closest("button"))){if($t.mode==="title"){ys();return}$t.mode==="play"&&(Bi(),ve.fire=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(ve.fire=!1)});window.addEventListener("wheel",i=>{i.preventDefault(),!($t.mode!=="play"||Math.abs(i.deltaY)<4)&&(ve.cycle+=i.deltaY>0?1:-1)},{passive:!1});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==_s&&$t.mode==="play"&&$t.pause()});window.addEventListener("blur",()=>{$t.mode==="play"&&($t.pause(),document.pointerLockElement&&document.exitPointerLock())});document.addEventListener("visibilitychange",()=>{document.hidden&&$t.mode==="play"&&($t.pause(),document.pointerLockElement&&document.exitPointerLock())});function ar(i){return i>0?i.toFixed(1)+"s":"—"}function pg(i){const t=i.channel==="DEAD_AIR"?"ch-dead":i.channel==="STATIC"?"ch-static":"ch-live";Hc.className=`mode-${i.mode} ${t}`,eg.style.width=Math.max(0,i.health)+"%",ig.style.width=Math.max(0,i.signal)+"%",ng.textContent=String(Math.ceil(i.health)),rg.textContent=String(Math.ceil(i.signal)),sg.textContent=i.channel==="DEAD_AIR"?"DEAD AIR":i.channel,ag.textContent=String(i.enemies),og.textContent=i.roomLabel||"COURT",lg.textContent=i.countLabel||"TESSERA",cg.textContent=i.rite||"",kl.textContent=i.prompt||"",kl.className=i.promptKind||"",i.boss==null?Hl.classList.remove("on"):(Hl.classList.add("on"),ug.style.width=Math.max(0,Math.min(100,i.boss*100))+"%"),hg.textContent=i.tip||"",Gl.style.opacity=i.health<35?"0.28":"0",i.hurt>.2&&(Gl.style.opacity="0.55"),fg.style.opacity=String(Math.max(0,Math.min(.7,i.flash))),i.bannerSerial!==zl&&(zl=i.bannerSerial,i.banner&&(Jr.textContent=i.banner,Jr.classList.remove("show"),Jr.offsetWidth,Jr.classList.add("show")));const e=i.mode==="pause"||i.mode==="clear"||i.mode==="dead";dg.hidden=!e,e&&(i.mode==="pause"?(Qr.textContent="KRCD 7 · STILL ON AIR",ts.textContent="PAUSED",es.textContent="Esc released the mouse. Click resume to lock it again.",ns.textContent=i.muted?"MUTED":"",ur.textContent="Resume",hr.textContent="Restart"):i.mode==="clear"?(Qr.textContent="KRCD 7 · RADIO",ts.textContent="WING CLEAR",es.textContent="The Visor Priest is off the air. The mall is still broadcasting.",ns.textContent=`TIME ${ar(i.time)} · BEST ${ar(i.best)} · ${i.swaps} CHANNEL CHANGES`,ur.textContent="Replay",hr.textContent="Title"):i.checkpoint?(Qr.textContent="KRCD 7 · RADIO",ts.textContent="WING LOST",es.textContent="The court stays clear. Retry from the radio door.",ns.textContent=`TIME ${ar(i.time)} · BEST ${ar(i.best)}`,ur.textContent="Retry wing",hr.textContent="Title"):(Qr.textContent="KRCD 7 · NO CARRIER",ts.textContent="SIGNAL LOST",es.textContent="The court keeps the carrier. Retune and walk it again.",ns.textContent=`BEST ${ar(i.best)}`,ur.textContent="Retry",hr.textContent="Title"))}let Vl=performance.now();function Gc(i){const t=Math.min(.05,(i-Vl)/1e3);Vl=i,document.hidden||($t.update(t,{forward:Ui.has("KeyW"),back:Ui.has("KeyS"),left:Ui.has("KeyA"),right:Ui.has("KeyD"),lookX:ve.lookX,lookY:ve.lookY,fireDown:ve.fire&&$t.mode==="play",channel:ve.channel,cycle:ve.cycle,use:ve.use}),pg($t.hud())),ve.lookX=0,ve.lookY=0,ve.channel=null,ve.cycle=0,ve.use=!1,requestAnimationFrame(Gc)}requestAnimationFrame(Gc);
