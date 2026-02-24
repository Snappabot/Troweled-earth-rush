var Bd=Object.defineProperty;var Fd=(o,e,t)=>e in o?Bd(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var b=(o,e,t)=>Fd(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="170",kd=0,Ya=1,Ud=2,Tc=1,Ec=2,yi=3,Gi=0,Rt=1,Ut=2,Si=0,Ln=1,_r=2,$a=3,Ja=4,Nd=5,en=100,Od=101,zd=102,Gd=103,Hd=104,Vd=200,Wd=201,Xd=202,qd=203,br=204,wr=205,jd=206,Yd=207,$d=208,Jd=209,Kd=210,Zd=211,Qd=212,eh=213,th=214,Mr=0,Sr=1,Tr=2,kn=3,Er=4,Ar=5,Cr=6,Rr=7,xa=0,ih=1,nh=2,Oi=0,Ac=1,Cc=2,Rc=3,va=4,sh=5,Pc=6,Ic=7,Dc=300,Un=301,Nn=302,Pr=303,Ir=304,Eo=306,Dr=1e3,on=1001,Lr=1002,ni=1003,oh=1004,Ls=1005,di=1006,Bo=1007,rn=1008,Ai=1009,Lc=1010,Bc=1011,ys=1012,ya=1013,cn=1014,wi=1015,Ti=1016,_a=1017,ba=1018,On=1020,Fc=35902,kc=1021,Uc=1022,ii=1023,Nc=1024,Oc=1025,Bn=1026,zn=1027,zc=1028,wa=1029,Gc=1030,Ma=1031,Sa=1033,ro=33776,ao=33777,lo=33778,co=33779,Br=35840,Fr=35841,kr=35842,Ur=35843,Nr=36196,Or=37492,zr=37496,Gr=37808,Hr=37809,Vr=37810,Wr=37811,Xr=37812,qr=37813,jr=37814,Yr=37815,$r=37816,Jr=37817,Kr=37818,Zr=37819,Qr=37820,ea=37821,ho=36492,ta=36494,ia=36495,Hc=36283,na=36284,sa=36285,oa=36286,rh=2200,ah=2201,lh=2202,mo=2300,ra=2301,Fo=2302,Rn=2400,Pn=2401,go=2402,Ta=2500,ch=2501,dh=3200,hh=3201,Vc=0,uh=1,Ui="",Xt="srgb",Wn="srgb-linear",Ao="linear",it="srgb",fn=7680,Ka=519,fh=512,ph=513,mh=514,Wc=515,gh=516,xh=517,vh=518,yh=519,Za=35044,Qa="300 es",Mi=2e3,xo=2001;class dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=Math.PI/180,aa=180/Math.PI;function Xn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[o&255]+Et[o>>8&255]+Et[o>>16&255]+Et[o>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function kt(o,e,t){return Math.max(e,Math.min(t,o))}function _h(o,e){return(o%e+e)%e}function Uo(o,e,t){return(1-t)*o+t*e}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ft(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,n,s,r,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,a,l,c)}set(e,t,i,n,s,r,a,l,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],w=n[1],T=n[4],v=n[7],R=n[2],A=n[5],C=n[8];return s[0]=r*x+a*w+l*R,s[3]=r*m+a*T+l*A,s[6]=r*p+a*v+l*C,s[1]=c*x+d*w+u*R,s[4]=c*m+d*T+u*A,s[7]=c*p+d*v+u*C,s[2]=h*x+f*w+g*R,s[5]=h*m+f*T+g*A,s[8]=h*p+f*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*a*c-i*s*d+i*a*l+n*s*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*r-a*c,h=a*l-d*s,f=c*s-r*l,g=t*u+i*h+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(n*c-d*i)*x,e[2]=(a*i-n*r)*x,e[3]=h*x,e[4]=(d*t-n*l)*x,e[5]=(n*s-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+e,-n*c,n*l,-n*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new He;function Xc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function vo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bh(){const o=vo("canvas");return o.style.display="block",o}const el={};function hs(o){o in el||(el[o]=!0,console.warn(o))}function wh(o,e,t){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Mh(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sh(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(o.r=Ei(o.r),o.g=Ei(o.g),o.b=Ei(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(o.r=Fn(o.r),o.g=Fn(o.g),o.b=Fn(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ui?Ao:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ei(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fn(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const tl=[.64,.33,.3,.6,.15,.06],il=[.2126,.7152,.0722],nl=[.3127,.329],sl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Wn]:{primaries:tl,whitePoint:nl,transfer:Ao,toXYZ:sl,fromXYZ:ol,luminanceCoefficients:il,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:tl,whitePoint:nl,transfer:it,toXYZ:sl,fromXYZ:ol,luminanceCoefficients:il,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let pn;class Th{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pn===void 0&&(pn=vo("canvas")),pn.width=e.width,pn.height=e.height;const i=pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Ei(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eh=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(Oo(n[r].image)):s.push(Oo(n[r]))}else s=Oo(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Th.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;class Lt extends dn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=on,n=on,s=di,r=rn,a=ii,l=Ai,c=Lt.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Xn(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Dc;Lt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(f+1)/2,R=(p+1)/2,A=(d+h)/4,C=(u+x)/4,I=(g+m)/4;return T>v&&T>R?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=A/i,s=C/i):v>R?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=A/n,s=I/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=C/s,n=I/s),this.set(i,n,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(h-d)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ch extends dn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Lt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Ch{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jc extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rh extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,a){let l=i[n+0],c=i[n+1],d=i[n+2],u=i[n+3];const h=s[r+0],f=s[r+1],g=s[r+2],x=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==h||c!==f||d!==g){let m=1-a;const p=l*h+c*f+d*g+u*x,w=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const R=Math.sqrt(T),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const v=a*w;if(l=l*m+h*v,c=c*m+f*v,d=d*m+g*v,u=u*m+x*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,r){const a=i[n],l=i[n+1],c=i[n+2],d=i[n+3],u=s[r],h=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(n/2),u=a(s/2),h=l(i/2),f=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+r*a+n*c-s*l,this._y=n*d+r*l+s*a-i*c,this._z=s*d+r*c+i*l-n*a,this._w=r*d-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,r=this._w;let a=r*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=r*u+this._w*h,this._x=i*u+this._x*h,this._y=n*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*n-a*i),d=2*(a*t-s*n),u=2*(s*i-r*t);return this.x=t+l*c+r*u-a*d,this.y=i+l*d+a*c-s*u,this.z=n+l*u+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*r-i*l,this.z=i*a-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new D,rl=new qt;class Ts{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,$t):$t.fromBufferAttribute(s,r),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bs.copy(i.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Fs.subVectors(this.max,es),mn.subVectors(e.a,es),gn.subVectors(e.b,es),xn.subVectors(e.c,es),Ii.subVectors(gn,mn),Di.subVectors(xn,gn),Vi.subVectors(mn,xn);let t=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-Vi.z,Vi.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,Vi.z,0,-Vi.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-Vi.y,Vi.x,0];return!Go(t,mn,gn,xn,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,mn,gn,xn,Fs))?!1:(ks.crossVectors(Ii,Di),t=[ks.x,ks.y,ks.z],Go(t,mn,gn,xn,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],$t=new D,Bs=new Ts,mn=new D,gn=new D,xn=new D,Ii=new D,Di=new D,Vi=new D,es=new D,Fs=new D,ks=new D,Wi=new D;function Go(o,e,t,i,n){for(let s=0,r=o.length-3;s<=r;s+=3){Wi.fromArray(o,s);const a=n.x*Math.abs(Wi.x)+n.y*Math.abs(Wi.y)+n.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),d=i.dot(Wi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ph=new Ts,ts=new D,Ho=new D;class Co{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ph.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ts,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Ho)),this.expandByPoint(ts.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new D,Vo=new D,Us=new D,Li=new D,Wo=new D,Ns=new D,Xo=new D;class Yc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Vo.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Vo);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Us),a=Li.dot(this.direction),l=-Li.dot(Us),c=Li.lengthSq(),d=Math.abs(1-r*r);let u,h,f,g;if(d>0)if(u=r*l-a,h=r*a-l,g=s*d,u>=0)if(h>=-g)if(h<=g){const x=1/d;u*=x,h*=x,f=u*(u+r*h+2*a)+h*(r*u+h+2*l)+c}else h=s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-r*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(r*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=r>0?-s:s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Vo).addScaledVector(Us,h),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),n=mi.dot(mi)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,r=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,r=(e.min.y-h.y)*d),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,n,s){Wo.subVectors(t,e),Ns.subVectors(i,e),Xo.crossVectors(Wo,Ns);let r=this.direction.dot(Xo),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Ns.crossVectors(Li,Ns));if(l<0)return null;const c=a*this.direction.dot(Wo.cross(Li));if(c<0||l+c>r)return null;const d=-a*Li.dot(Xo);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,n,s,r,a,l,c,d,u,h,f,g,x,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,a,l,c,d,u,h,f,g,x,m)}set(e,t,i,n,s,r,a,l,c,d,u,h,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/vn.setFromMatrixColumn(e,0).length(),s=1/vn.setFromMatrixColumn(e,1).length(),r=1/vn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=r*d,f=r*u,g=a*d,x=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,x=c*u;t[0]=h+x*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*d,t[9]=-a,t[2]=f*a-g,t[6]=x+h*a,t[10]=r*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,x=c*u;t[0]=h-x*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*d,t[9]=x-h*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const h=r*d,f=r*u,g=a*d,x=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*d,t[4]=x-h*u,t[8]=g*u+f,t[1]=u,t[5]=r*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-x*u}else if(e.order==="XZY"){const h=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+x,t[5]=r*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ih,e,Dh)}lookAt(e,t,i){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Bi.crossVectors(i,zt),Bi.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Bi.crossVectors(i,zt)),Bi.normalize(),Os.crossVectors(zt,Bi),n[0]=Bi.x,n[4]=Os.x,n[8]=zt.x,n[1]=Bi.y,n[5]=Os.y,n[9]=zt.y,n[2]=Bi.z,n[6]=Os.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],w=i[3],T=i[7],v=i[11],R=i[15],A=n[0],C=n[4],I=n[8],S=n[12],_=n[1],P=n[5],N=n[9],z=n[13],X=n[2],J=n[6],j=n[10],te=n[14],V=n[3],re=n[7],le=n[11],he=n[15];return s[0]=r*A+a*_+l*X+c*V,s[4]=r*C+a*P+l*J+c*re,s[8]=r*I+a*N+l*j+c*le,s[12]=r*S+a*z+l*te+c*he,s[1]=d*A+u*_+h*X+f*V,s[5]=d*C+u*P+h*J+f*re,s[9]=d*I+u*N+h*j+f*le,s[13]=d*S+u*z+h*te+f*he,s[2]=g*A+x*_+m*X+p*V,s[6]=g*C+x*P+m*J+p*re,s[10]=g*I+x*N+m*j+p*le,s[14]=g*S+x*z+m*te+p*he,s[3]=w*A+T*_+v*X+R*V,s[7]=w*C+T*P+v*J+R*re,s[11]=w*I+T*N+v*j+R*le,s[15]=w*S+T*z+v*te+R*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*u-n*c*u-s*a*h+i*c*h+n*a*f-i*l*f)+x*(+t*l*f-t*c*h+s*r*h-n*r*f+n*c*d-s*l*d)+m*(+t*c*u-t*a*f-s*r*u+i*r*f+s*a*d-i*c*d)+p*(-n*a*d-t*l*u+t*a*h+n*r*u-i*r*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=u*m*c-x*h*c+x*l*f-a*m*f-u*l*p+a*h*p,T=g*h*c-d*m*c-g*l*f+r*m*f+d*l*p-r*h*p,v=d*x*c-g*u*c+g*a*f-r*x*f-d*a*p+r*u*p,R=g*u*l-d*x*l-g*a*h+r*x*h+d*a*m-r*u*m,A=t*w+i*T+n*v+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(x*h*s-u*m*s-x*n*f+i*m*f+u*n*p-i*h*p)*C,e[2]=(a*m*s-x*l*s+x*n*c-i*m*c-a*n*p+i*l*p)*C,e[3]=(u*l*s-a*h*s-u*n*c+i*h*c+a*n*f-i*l*f)*C,e[4]=T*C,e[5]=(d*m*s-g*h*s+g*n*f-t*m*f-d*n*p+t*h*p)*C,e[6]=(g*l*s-r*m*s-g*n*c+t*m*c+r*n*p-t*l*p)*C,e[7]=(r*h*s-d*l*s+d*n*c-t*h*c-r*n*f+t*l*f)*C,e[8]=v*C,e[9]=(g*u*s-d*x*s-g*i*f+t*x*f+d*i*p-t*u*p)*C,e[10]=(r*x*s-g*a*s+g*i*c-t*x*c-r*i*p+t*a*p)*C,e[11]=(d*a*s-r*u*s-d*i*c+t*u*c+r*i*f-t*a*f)*C,e[12]=R*C,e[13]=(d*x*n-g*u*n+g*i*h-t*x*h-d*i*m+t*u*m)*C,e[14]=(g*a*n-r*x*n-g*i*l+t*x*l+r*i*m-t*a*m)*C,e[15]=(r*u*n-d*a*n+d*i*l-t*u*l-r*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,a=e.y,l=e.z,c=s*r,d=s*a;return this.set(c*r+i,c*a-n*l,c*l+n*a,0,c*a+n*l,d*a+i,d*l-n*r,0,c*l-n*a,d*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,d=r+r,u=a+a,h=s*c,f=s*d,g=s*u,x=r*d,m=r*u,p=a*u,w=l*c,T=l*d,v=l*u,R=i.x,A=i.y,C=i.z;return n[0]=(1-(x+p))*R,n[1]=(f+v)*R,n[2]=(g-T)*R,n[3]=0,n[4]=(f-v)*A,n[5]=(1-(h+p))*A,n[6]=(m+w)*A,n[7]=0,n[8]=(g+T)*C,n[9]=(m-w)*C,n[10]=(1-(h+x))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=vn.set(n[0],n[1],n[2]).length();const r=vn.set(n[4],n[5],n[6]).length(),a=vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);const c=1/s,d=1/r,u=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=d,Jt.elements[5]*=d,Jt.elements[6]*=d,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),i.x=s,i.y=r,i.z=a,this}makePerspective(e,t,i,n,s,r,a=Mi){const l=this.elements,c=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),h=(i+n)/(i-n);let f,g;if(a===Mi)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===xo)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,r,a=Mi){const l=this.elements,c=1/(t-e),d=1/(i-n),u=1/(r-s),h=(t+e)*c,f=(i+n)*d;let g,x;if(a===Mi)g=(r+s)*u,x=-2*u;else if(a===xo)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vn=new D,Jt=new ft,Ih=new D(0,0,0),Dh=new D(1,1,1),Bi=new D,Os=new D,zt=new D,al=new ft,ll=new qt;class Ht{constructor(e=0,t=0,i=0,n=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],a=n[8],l=n[1],c=n[5],d=n[9],u=n[2],h=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lh=0;const cl=new D,yn=new qt,gi=new ft,zs=new D,is=new D,Bh=new D,Fh=new qt,dl=new D(1,0,0),hl=new D(0,1,0),ul=new D(0,0,1),fl={type:"added"},kh={type:"removed"},_n={type:"childadded",child:null},qo={type:"childremoved",child:null};class yt extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new D,t=new Ht,i=new qt,n=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(dl,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dl,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zs.copy(e):zs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(is,zs,this.up):gi.lookAt(zs,is,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),yn.setFromRotationMatrix(gi),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),_n.child=e,this.dispatchEvent(_n),_n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kh),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),u=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new D,xi=new D,jo=new D,vi=new D,bn=new D,wn=new D,pl=new D,Yo=new D,$o=new D,Jo=new D,Ko=new st,Zo=new st,Qo=new st;class ti{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Kt.subVectors(e,t),n.cross(Kt);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Kt.subVectors(n,t),xi.subVectors(i,t),jo.subVectors(e,t);const r=Kt.dot(Kt),a=Kt.dot(xi),l=Kt.dot(jo),c=xi.dot(xi),d=xi.dot(jo),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,g=(r*d-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,n,s,r,a,l){return this.getBarycoord(e,t,i,n,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(r,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return Ko.setScalar(0),Zo.setScalar(0),Qo.setScalar(0),Ko.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,i),Qo.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(Ko,s.x),r.addScaledVector(Zo,s.y),r.addScaledVector(Qo,s.z),r}static isFrontFacing(e,t,i,n){return Kt.subVectors(i,t),xi.subVectors(e,t),Kt.cross(xi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Kt.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,a;bn.subVectors(n,i),wn.subVectors(s,i),Yo.subVectors(e,i);const l=bn.dot(Yo),c=wn.dot(Yo);if(l<=0&&c<=0)return t.copy(i);$o.subVectors(e,n);const d=bn.dot($o),u=wn.dot($o);if(d>=0&&u<=d)return t.copy(n);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(i).addScaledVector(bn,r);Jo.subVectors(e,s);const f=bn.dot(Jo),g=wn.dot(Jo);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(wn,a);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return pl.subVectors(s,n),a=(u-d)/(u-d+(f-g)),t.copy(n).addScaledVector(pl,a);const p=1/(m+x+h);return r=x*p,a=h*p,t.copy(i).addScaledVector(bn,r).addScaledVector(wn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function er(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ye.workingColorSpace){if(e=_h(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=er(r,s,e+1/3),this.g=er(r,s,e),this.b=er(r,s,e-1/3)}return Ye.toWorkingColorSpace(this,n),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Jc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ye.fromWorkingColorSpace(At.copy(this),e),Math.round(kt(At.r*255,0,255))*65536+Math.round(kt(At.g*255,0,255))*256+Math.round(kt(At.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(At.copy(this),t);const i=At.r,n=At.g,s=At.b,r=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const d=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=d<=.5?u/(r+a):u/(2-r-a),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Xt){Ye.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,n=At.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Gs);const i=Uo(Fi.h,Gs.h,t),n=Uo(Fi.s,Gs.s,t),s=Uo(Fi.l,Gs.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Me;Me.NAMES=Jc;let Uh=0;class qn extends dn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Xn(),this.name="",this.blending=Ln,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=br,this.blendDst=wr,this.blendEquation=en,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fn,this.stencilZFail=fn,this.stencilZPass=fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ln&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==br&&(i.blendSrc=this.blendSrc),this.blendDst!==wr&&(i.blendDst=this.blendDst),this.blendEquation!==en&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nt extends qn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new D,Hs=new Fe;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Za,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class Kc extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zc extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ot extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nh=0;const Wt=new ft,tr=new yt,Mn=new D,Gt=new Ts,ns=new Ts,Mt=new D;class Pt extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Zc:Kc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return tr.lookAt(e),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mn).negate(),this.translate(Mn.x,Mn.y,Mn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ot(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Gt.min,ns.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,ns.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(ns.min),Gt.expandByPoint(ns.max))}Gt.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)Mt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Mt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Mt.fromBufferAttribute(a,c),l&&(Mn.fromBufferAttribute(e,c),Mt.add(Mn)),n=Math.max(n,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new D,l[I]=new D;const c=new D,d=new D,u=new D,h=new Fe,f=new Fe,g=new Fe,x=new D,m=new D;function p(I,S,_){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,_),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,_),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),a[I].add(x),a[S].add(x),a[_].add(x),l[I].add(m),l[S].add(m),l[_].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,S=w.length;I<S;++I){const _=w[I],P=_.start,N=_.count;for(let z=P,X=P+N;z<X;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new D,v=new D,R=new D,A=new D;function C(I){R.fromBufferAttribute(n,I),A.copy(R);const S=a[I];T.copy(S),T.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(A,S);const P=v.dot(l[I])<0?-1:1;r.setXYZW(I,T.x,T.y,T.z,P)}for(let I=0,S=w.length;I<S;++I){const _=w[I],P=_.start,N=_.count;for(let z=P,X=P+N;z<X;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const n=new D,s=new D,r=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),d.subVectors(r,s),u.subVectors(n,s),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)n.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),d.subVectors(r,s),u.subVectors(n,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new oi(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(n[l]=d,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new ft,Xi=new Yc,Vs=new Co,gl=new D,Ws=new D,Xs=new D,qs=new D,ir=new D,js=new D,xl=new D,Ys=new D;class B extends yt{constructor(e=new Pt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],u=s[l];d!==0&&(ir.fromBufferAttribute(u,e),r?js.addScaledVector(ir,d):js.addScaledVector(ir.sub(t),d))}t.add(js)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(Vs.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Vs,gl)===null||Xi.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(ml),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let n;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=r[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,R=T;v<R;v+=3){const A=a.getX(v),C=a.getX(v+1),I=a.getX(v+2);n=$s(this,p,e,i,c,d,u,A,C,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);n=$s(this,r,e,i,c,d,u,w,T,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=r[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,R=T;v<R;v+=3){const A=v,C=v+1,I=v+2;n=$s(this,p,e,i,c,d,u,A,C,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=m,T=m+1,v=m+2;n=$s(this,r,e,i,c,d,u,w,T,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Oh(o,e,t,i,n,s,r,a){let l;if(e.side===Rt?l=i.intersectTriangle(r,s,n,!0,a):l=i.intersectTriangle(n,s,r,e.side===Gi,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:o}}function $s(o,e,t,i,n,s,r,a,l,c){o.getVertexPosition(a,Ws),o.getVertexPosition(l,Xs),o.getVertexPosition(c,qs);const d=Oh(o,e,t,i,Ws,Xs,qs,xl);if(d){const u=new D;ti.getBarycoord(xl,Ws,Xs,qs,u),n&&(d.uv=ti.getInterpolatedAttribute(n,a,l,c,u,new Fe)),s&&(d.uv1=ti.getInterpolatedAttribute(s,a,l,c,u,new Fe)),r&&(d.normal=ti.getInterpolatedAttribute(r,a,l,c,u,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};ti.getNormal(Ws,Xs,qs,h.normal),d.face=h,d.barycoord=u}return d}class Q extends Pt{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const a=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(u,2));function g(x,m,p,w,T,v,R,A,C,I,S){const _=v/C,P=R/I,N=v/2,z=R/2,X=A/2,J=C+1,j=I+1;let te=0,V=0;const re=new D;for(let le=0;le<j;le++){const he=le*P-z;for(let Le=0;Le<J;Le++){const de=Le*_-N;re[x]=de*w,re[m]=he*T,re[p]=X,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=A>0?1:-1,d.push(re.x,re.y,re.z),u.push(Le/C),u.push(1-le/I),te+=1}}for(let le=0;le<I;le++)for(let he=0;he<C;he++){const Le=h+he+J*le,de=h+he+J*(le+1),W=h+(he+1)+J*(le+1),Z=h+(he+1)+J*le;l.push(Le,de,Z),l.push(de,W,Z),V+=6}a.addGroup(f,V,S),f+=V,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Q(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gn(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function It(o){const e={};for(let t=0;t<o.length;t++){const i=Gn(o[t]);for(const n in i)e[n]=i[n]}return e}function zh(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Qc(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const _s={clone:Gn,merge:It};var Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends qn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gn(e.uniforms),this.uniformsGroups=zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ed extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new D,vl=new Fe,yl=new Fe;class Dt extends ed{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,vl,yl),t.subVectors(yl,vl)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sn=-90,Tn=1;class Vh extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Dt(Sn,Tn,e,t);n.layers=this.layers,this.add(n);const s=new Dt(Sn,Tn,e,t);s.layers=this.layers,this.add(s);const r=new Dt(Sn,Tn,e,t);r.layers=this.layers,this.add(r);const a=new Dt(Sn,Tn,e,t);a.layers=this.layers,this.add(a);const l=new Dt(Sn,Tn,e,t);l.layers=this.layers,this.add(l);const c=new Dt(Sn,Tn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,r),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class td extends Lt{constructor(e,t,i,n,s,r,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Un,super(e,t,i,n,s,r,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wh extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new td(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Q(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Si});s.uniforms.tEquirect.value=t;const r=new B(n,s),a=t.minFilter;return t.minFilter===rn&&(t.minFilter=di),new Vh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}const nr=new D,Xh=new D,qh=new He;class Zi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=nr.subVectors(i,t).cross(Xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qh.getNormalMatrix(e),n=this.coplanarPoint(nr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Co,Js=new D;class Ea{constructor(e=new Zi,t=new Zi,i=new Zi,n=new Zi,s=new Zi,r=new Zi){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){const i=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],l=n[3],c=n[4],d=n[5],u=n[6],h=n[7],f=n[8],g=n[9],x=n[10],m=n[11],p=n[12],w=n[13],T=n[14],v=n[15];if(i[0].setComponents(l-s,h-c,m-f,v-p).normalize(),i[1].setComponents(l+s,h+c,m+f,v+p).normalize(),i[2].setComponents(l+r,h+d,m+g,v+w).normalize(),i[3].setComponents(l-r,h-d,m-g,v-w).normalize(),i[4].setComponents(l-a,h-u,m-x,v-T).normalize(),t===Mi)i[5].setComponents(l+a,h+u,m+x,v+T).normalize();else if(t===xo)i[5].setComponents(a,u,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Js.x=n.normal.x>0?e.max.x:e.min.x,Js.y=n.normal.y>0?e.max.y:e.min.y,Js.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function id(){let o=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function jh(o){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=o.createBuffer();o.bindBuffer(l,h),o.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];o.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:r}}class ht extends Pt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const w=p*h-r;for(let T=0;T<c;T++){const v=T*u-s;g.push(v,-w,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const T=w+c*p,v=w+c*(p+1),R=w+1+c*(p+1),A=w+1+c*p;f.push(T,v,A),f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eu=`#ifdef USE_AOMAP
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
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iu=`#ifdef USE_BATCHING
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
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,au=`#ifdef USE_IRIDESCENCE
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xu=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yu=`vec3 transformedNormal = objectNormal;
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
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
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
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
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
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,qu=`struct PhysicalMaterial {
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
}`,ju=`
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sf=`#if defined( USE_POINTS_UV )
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
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
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
#endif`,hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
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
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lf=`float getShadowMask() {
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
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,tp=`#if DEPTH_PACKING == 3200
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
}`,ip=`#define DISTANCE
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
}`,np=`#define DISTANCE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`uniform float scale;
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
}`,ap=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,up=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,mp=`#define NORMAL
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
}`,gp=`#define PHONG
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
}`,xp=`#define PHONG
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
}`,vp=`#define STANDARD
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
}`,yp=`#define STANDARD
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
}`,_p=`#define TOON
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
}`,bp=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,Ep=`uniform float rotation;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Yh,alphahash_pars_fragment:$h,alphamap_fragment:Jh,alphamap_pars_fragment:Kh,alphatest_fragment:Zh,alphatest_pars_fragment:Qh,aomap_fragment:eu,aomap_pars_fragment:tu,batching_pars_vertex:iu,batching_vertex:nu,begin_vertex:su,beginnormal_vertex:ou,bsdfs:ru,iridescence_fragment:au,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:du,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:fu,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:gu,common:xu,cube_uv_reflection_fragment:vu,defaultnormal_vertex:yu,displacementmap_pars_vertex:_u,displacementmap_vertex:bu,emissivemap_fragment:wu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:Tu,envmap_fragment:Eu,envmap_common_pars_fragment:Au,envmap_pars_fragment:Cu,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:zu,envmap_vertex:Pu,fog_vertex:Iu,fog_pars_vertex:Du,fog_fragment:Lu,fog_pars_fragment:Bu,gradientmap_pars_fragment:Fu,lightmap_pars_fragment:ku,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Ou,lights_toon_fragment:Gu,lights_toon_pars_fragment:Hu,lights_phong_fragment:Vu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:qu,lights_fragment_begin:ju,lights_fragment_maps:Yu,lights_fragment_end:$u,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:Qu,map_fragment:ef,map_pars_fragment:tf,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:of,metalnessmap_pars_fragment:rf,morphinstance_vertex:af,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:df,morphtarget_vertex:hf,normal_fragment_begin:uf,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:bf,opaque_fragment:wf,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:Tf,dithering_fragment:Ef,dithering_pars_fragment:Af,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:If,shadowmap_vertex:Df,shadowmask_pars_fragment:Lf,skinbase_vertex:Bf,skinning_pars_vertex:Ff,skinning_vertex:kf,skinnormal_vertex:Uf,specularmap_fragment:Nf,specularmap_pars_fragment:Of,tonemapping_fragment:zf,tonemapping_pars_fragment:Gf,transmission_fragment:Hf,transmission_pars_fragment:Vf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:jf,background_vert:Yf,background_frag:$f,backgroundCube_vert:Jf,backgroundCube_frag:Kf,cube_vert:Zf,cube_frag:Qf,depth_vert:ep,depth_frag:tp,distanceRGBA_vert:ip,distanceRGBA_frag:np,equirect_vert:sp,equirect_frag:op,linedashed_vert:rp,linedashed_frag:ap,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:dp,meshlambert_frag:hp,meshmatcap_vert:up,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:xp,meshphysical_vert:vp,meshphysical_frag:yp,meshtoon_vert:_p,meshtoon_frag:bp,points_vert:wp,points_frag:Mp,shadow_vert:Sp,shadow_frag:Tp,sprite_vert:Ep,sprite_frag:Ap},ce={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ci={basic:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Me(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Me(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:It([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:It([ce.lights,ce.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ci.physical={uniforms:It([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ks={r:0,b:0,g:0},ji=new Ht,Cp=new ft;function Rp(o,e,t,i,n,s,r){const a=new Me(0);let l=s===!0?0:1,c,d,u=null,h=0,f=null;function g(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function x(w){let T=!1;const v=g(w);v===null?p(a,l):v&&v.isColor&&(p(v,1),T=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(o.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(w,T){const v=g(T);v&&(v.isCubeTexture||v.mapping===Eo)?(d===void 0&&(d=new B(new Q(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Gn(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),ji.copy(T.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(ji)),d.material.toneMapped=Ye.getTransfer(v.colorSpace)!==it,(u!==v||h!==v.version||f!==o.toneMapping)&&(d.material.needsUpdate=!0,u=v,h=v.version,f=o.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new B(new ht(2,2),new Ct({name:"BackgroundMaterial",uniforms:Gn(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=o.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,T){w.getRGB(Ks,Qc(o)),i.buffers.color.setClear(Ks.r,Ks.g,Ks.b,T,r)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:x,addToRenderList:m}}function Pp(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=h(null);let s=n,r=!1;function a(_,P,N,z,X){let J=!1;const j=u(z,N,P);s!==j&&(s=j,c(s.object)),J=f(_,z,N,X),J&&g(_,z,N,X),X!==null&&e.update(X,o.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,v(_,P,N,z),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return o.createVertexArray()}function c(_){return o.bindVertexArray(_)}function d(_){return o.deleteVertexArray(_)}function u(_,P,N){const z=N.wireframe===!0;let X=i[_.id];X===void 0&&(X={},i[_.id]=X);let J=X[P.id];J===void 0&&(J={},X[P.id]=J);let j=J[z];return j===void 0&&(j=h(l()),J[z]=j),j}function h(_){const P=[],N=[],z=[];for(let X=0;X<t;X++)P[X]=0,N[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,P,N,z){const X=s.attributes,J=P.attributes;let j=0;const te=N.getAttributes();for(const V in te)if(te[V].location>=0){const le=X[V];let he=J[V];if(he===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(he=_.instanceColor)),le===void 0||le.attribute!==he||he&&le.data!==he.data)return!0;j++}return s.attributesNum!==j||s.index!==z}function g(_,P,N,z){const X={},J=P.attributes;let j=0;const te=N.getAttributes();for(const V in te)if(te[V].location>=0){let le=J[V];le===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));const he={};he.attribute=le,le&&le.data&&(he.data=le.data),X[V]=he,j++}s.attributes=X,s.attributesNum=j,s.index=z}function x(){const _=s.newAttributes;for(let P=0,N=_.length;P<N;P++)_[P]=0}function m(_){p(_,0)}function p(_,P){const N=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;N[_]=1,z[_]===0&&(o.enableVertexAttribArray(_),z[_]=1),X[_]!==P&&(o.vertexAttribDivisor(_,P),X[_]=P)}function w(){const _=s.newAttributes,P=s.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==_[N]&&(o.disableVertexAttribArray(N),P[N]=0)}function T(_,P,N,z,X,J,j){j===!0?o.vertexAttribIPointer(_,P,N,X,J):o.vertexAttribPointer(_,P,N,z,X,J)}function v(_,P,N,z){x();const X=z.attributes,J=N.getAttributes(),j=P.defaultAttributeValues;for(const te in J){const V=J[te];if(V.location>=0){let re=X[te];if(re===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),re!==void 0){const le=re.normalized,he=re.itemSize,Le=e.get(re);if(Le===void 0)continue;const de=Le.buffer,W=Le.type,Z=Le.bytesPerElement,ye=W===o.INT||W===o.UNSIGNED_INT||re.gpuType===ya;if(re.isInterleavedBufferAttribute){const ae=re.data,ne=ae.stride,pe=re.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<V.locationSize;De++)p(V.location+De,ae.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<V.locationSize;De++)m(V.location+De);o.bindBuffer(o.ARRAY_BUFFER,de);for(let De=0;De<V.locationSize;De++)T(V.location+De,he/V.locationSize,W,le,ne*Z,(pe+he/V.locationSize*De)*Z,ye)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,re.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);o.bindBuffer(o.ARRAY_BUFFER,de);for(let ae=0;ae<V.locationSize;ae++)T(V.location+ae,he/V.locationSize,W,le,he*Z,he/V.locationSize*ae*Z,ye)}}else if(j!==void 0){const le=j[te];if(le!==void 0)switch(le.length){case 2:o.vertexAttrib2fv(V.location,le);break;case 3:o.vertexAttrib3fv(V.location,le);break;case 4:o.vertexAttrib4fv(V.location,le);break;default:o.vertexAttrib1fv(V.location,le)}}}}w()}function R(){I();for(const _ in i){const P=i[_];for(const N in P){const z=P[N];for(const X in z)d(z[X].object),delete z[X];delete P[N]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const P=i[_.id];for(const N in P){const z=P[N];for(const X in z)d(z[X].object),delete z[X];delete P[N]}delete i[_.id]}function C(_){for(const P in i){const N=i[P];if(N[_.id]===void 0)continue;const z=N[_.id];for(const X in z)d(z[X].object),delete z[X];delete N[_.id]}}function I(){S(),r=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Ip(o,e,t){let i;function n(c){i=c}function s(c,d){o.drawArrays(i,c,d),t.update(d,i,1)}function r(c,d,u){u!==0&&(o.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,i,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x]*h[x];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dp(o,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){return!(C!==ii&&i.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ai&&i.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wi&&!I)}function l(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),T=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:R,maxSamples:A}}function Lp(o){const e=this;let t=null,i=0,n=!1,s=!1;const r=new Zi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||n;return n=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!n||g===null||g.length===0||s&&!m)s?d(null):c();else{const w=s?0:i,T=w*4;let v=p.clippingState||null;l.value=v,v=d(g,h,T,f);for(let R=0;R!==T;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==x;++T,v+=4)r.copy(u[T]).applyMatrix4(w,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Bp(o){let e=new WeakMap;function t(r,a){return a===Pr?r.mapping=Un:a===Ir&&(r.mapping=Nn),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pr||a===Ir)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Wh(l.height);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",n),t(c.texture,r.mapping)}else return null}}return r}function n(r){const a=r.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Aa extends ed{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const In=4,_l=[.125,.215,.35,.446,.526,.582],tn=20,sr=new Aa,bl=new Me;let or=null,rr=0,ar=0,lr=!1;const Qi=(1+Math.sqrt(5))/2,En=1/Qi,wl=[new D(-Qi,En,0),new D(Qi,En,0),new D(-En,0,Qi),new D(En,0,Qi),new D(0,Qi,-En),new D(0,Qi,En),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){or=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(or,rr,ar),this._renderer.xr.enabled=lr,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Un||e.mapping===Nn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),or=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ti,format:ii,colorSpace:Wn,depthBuffer:!1},n=Sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(s)),this._blurMaterial=kp(s,e,t)}return n}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,i,n){const a=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(bl),d.toneMapping=Oi,d.autoClear=!1;const f=new Nt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new B(new Q,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(bl),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const T=this._cubeSize;Zs(n,w*T,p>2?T:0,T,T),d.setRenderTarget(n),x&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Un||e.mapping===Nn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const s=n?this._cubemapMaterial:this._equirectMaterial,r=new B(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,sr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wl[(n-s-1)%wl.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new B(this._lodPlanes[n],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*tn-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):tn;m>tn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tn}`);const p=[];let w=0;for(let C=0;C<tn;++C){const I=C/x,S=Math.exp(-I*I/2);p.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const v=this._sizeLods[n],R=3*v*(n>T-In?n-T+In:0),A=4*(this._cubeSize-v);Zs(t,R,A,3*v,2*v),l.setRenderTarget(t),l.render(u,sr)}}function Fp(o){const e=[],t=[],i=[];let n=o;const s=o-In+1+_l.length;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);let l=1/a;r>o-In?l=_l[r-o+In-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),T=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,I=A>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];w.set(S,x*g*A),T.set(h,m*g*A);const _=[A,A,A,A,A,A];v.set(_,p*g*A)}const R=new Pt;R.setAttribute("position",new oi(w,x)),R.setAttribute("uv",new oi(T,m)),R.setAttribute("faceIndex",new oi(v,p)),e.push(R),n>In&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sl(o,e,t){const i=new si(o,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function kp(o,e,t){const i=new Float32Array(tn),n=new D(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Tl(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function El(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function Up(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pr||l===Ir,d=l===Un||l===Nn;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ml(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&n(f)?(t===null&&(t=new Ml(o)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Np(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&hs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Op(o,e,t,i){const n={},s=new WeakMap;function r(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}h.removeEventListener("dispose",r),delete n[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return n[h.id]===!0||(h.addEventListener("dispose",r),n[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)e.update(h[g],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],o.ARRAY_BUFFER)}}function c(u){const h=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let T=0,v=w.length;T<v;T+=3){const R=w[T+0],A=w[T+1],C=w[T+2];h.push(R,A,A,C,C,R)}}else if(g!==void 0){const w=g.array;x=g.version;for(let T=0,v=w.length/3-1;T<v;T+=3){const R=T+0,A=T+1,C=T+2;h.push(R,A,A,C,C,R)}}else return;const m=new(Xc(h)?Zc:Kc)(h,1);m.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function zp(o,e,t){let i;function n(h){i=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function l(h,f){o.drawElements(i,f,s,h*r),t.update(f,i,1)}function c(h,f,g){g!==0&&(o.drawElementsInstanced(i,f,s,h*r,g),t.update(f,i,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(h,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Gp(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Hp(o,e,t){const i=new WeakMap,n=new st;function s(r,a,l){const c=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let _=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var f=_;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*u),I=new jc(C,R,A,u);I.type=wi,I.needsUpdate=!0;const S=v*4;for(let P=0;P<u;P++){const N=p[P],z=w[P],X=T[P],J=R*A*4*P;for(let j=0;j<N.count;j++){const te=j*S;g===!0&&(n.fromBufferAttribute(N,j),C[J+te+0]=n.x,C[J+te+1]=n.y,C[J+te+2]=n.z,C[J+te+3]=0),x===!0&&(n.fromBufferAttribute(z,j),C[J+te+4]=n.x,C[J+te+5]=n.y,C[J+te+6]=n.z,C[J+te+7]=0),m===!0&&(n.fromBufferAttribute(X,j),C[J+te+8]=n.x,C[J+te+9]=n.y,C[J+te+10]=n.z,C[J+te+11]=X.itemSize===4?n.w:1)}}h={count:u,texture:I,size:new Fe(R,A)},i.set(a,h),a.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",x),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:s}}function Vp(o,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return u}function r(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class nd extends Lt{constructor(e,t,i,n,s,r,a,l,c,d=Bn){if(d!==Bn&&d!==zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Bn&&(i=cn),i===void 0&&d===zn&&(i=On),super(null,n,s,r,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sd=new Lt,Al=new nd(1,1),od=new jc,rd=new Rh,ad=new td,Cl=[],Rl=[],Pl=new Float32Array(16),Il=new Float32Array(9),Dl=new Float32Array(4);function jn(o,e,t){const i=o[0];if(i<=0||i>0)return o;const n=e*t;let s=Cl[n];if(s===void 0&&(s=new Float32Array(n),Cl[n]=s),e!==0){i.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function _t(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function bt(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Ro(o,e){let t=Rl[e];t===void 0&&(t=new Int32Array(e),Rl[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function Wp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Xp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2fv(this.addr,e),bt(t,e)}}function qp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;o.uniform3fv(this.addr,e),bt(t,e)}}function jp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4fv(this.addr,e),bt(t,e)}}function Yp(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(_t(t,i))return;Dl.set(i),o.uniformMatrix2fv(this.addr,!1,Dl),bt(t,i)}}function $p(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(_t(t,i))return;Il.set(i),o.uniformMatrix3fv(this.addr,!1,Il),bt(t,i)}}function Jp(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(_t(t,i))return;Pl.set(i),o.uniformMatrix4fv(this.addr,!1,Pl),bt(t,i)}}function Kp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Zp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2iv(this.addr,e),bt(t,e)}}function Qp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;o.uniform3iv(this.addr,e),bt(t,e)}}function e0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4iv(this.addr,e),bt(t,e)}}function t0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function i0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2uiv(this.addr,e),bt(t,e)}}function n0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;o.uniform3uiv(this.addr,e),bt(t,e)}}function s0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4uiv(this.addr,e),bt(t,e)}}function o0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(Al.compareFunction=Wc,s=Al):s=sd,t.setTexture2D(e||s,n)}function r0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||rd,n)}function a0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ad,n)}function l0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||od,n)}function c0(o){switch(o){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return jp;case 35674:return Yp;case 35675:return $p;case 35676:return Jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Qp;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return i0;case 36295:return n0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}function d0(o,e){o.uniform1fv(this.addr,e)}function h0(o,e){const t=jn(e,this.size,2);o.uniform2fv(this.addr,t)}function u0(o,e){const t=jn(e,this.size,3);o.uniform3fv(this.addr,t)}function f0(o,e){const t=jn(e,this.size,4);o.uniform4fv(this.addr,t)}function p0(o,e){const t=jn(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function m0(o,e){const t=jn(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function g0(o,e){const t=jn(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function x0(o,e){o.uniform1iv(this.addr,e)}function v0(o,e){o.uniform2iv(this.addr,e)}function y0(o,e){o.uniform3iv(this.addr,e)}function _0(o,e){o.uniform4iv(this.addr,e)}function b0(o,e){o.uniform1uiv(this.addr,e)}function w0(o,e){o.uniform2uiv(this.addr,e)}function M0(o,e){o.uniform3uiv(this.addr,e)}function S0(o,e){o.uniform4uiv(this.addr,e)}function T0(o,e,t){const i=this.cache,n=e.length,s=Ro(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),bt(i,s));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||sd,s[r])}function E0(o,e,t){const i=this.cache,n=e.length,s=Ro(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),bt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||rd,s[r])}function A0(o,e,t){const i=this.cache,n=e.length,s=Ro(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),bt(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||ad,s[r])}function C0(o,e,t){const i=this.cache,n=e.length,s=Ro(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),bt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||od,s[r])}function R0(o){switch(o){case 5126:return d0;case 35664:return h0;case 35665:return u0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return _0;case 5125:return b0;case 36294:return w0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return C0}}class P0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=c0(t.type)}}class I0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function Ll(o,e){o.seq.push(e),o.map[e.id]=e}function L0(o,e,t){const i=o.name,n=i.length;for(cr.lastIndex=0;;){const s=cr.exec(i),r=cr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===n){Ll(t,c===void 0?new P0(a,o,e):new I0(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new D0(a),Ll(t,u)),t=u}}}class uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);L0(s,r,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Bl(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const B0=37297;let F0=0;function k0(o,e){const t=o.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const Fl=new He;function U0(o){Ye._getMatrix(Fl,Ye.workingColorSpace,o);const e=`mat3( ${Fl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(o)){case Ao:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function kl(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),n=o.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+k0(o.getShaderSource(e),r)}else return n}function N0(o,e){const t=U0(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function O0(o,e){let t;switch(e){case Ac:t="Linear";break;case Cc:t="Reinhard";break;case Rc:t="Cineon";break;case va:t="ACESFilmic";break;case Pc:t="AgX";break;case Ic:t="Neutral";break;case sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new D;function z0(){Ye.getLuminanceCoefficients(Qs);const o=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function H0(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V0(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=o.getActiveAttrib(e,n),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function us(o){return o!==""}function Ul(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(o){return o.replace(W0,q0)}const X0=new Map;function q0(o,e){let t=We[e];if(t===void 0){const i=X0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(o){return o.replace(j0,Y0)}function Y0(o,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function zl(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function J0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Un:case Nn:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Nn:e="ENVMAP_MODE_REFRACTION";break}return e}function Z0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xa:e="ENVMAP_BLENDING_MULTIPLY";break;case ih:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function Q0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function em(o,e,t,i){const n=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=$0(t),c=J0(t),d=K0(t),u=Z0(t),h=Q0(t),f=G0(t),g=H0(s),x=n.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?We.tonemapping_pars_fragment:"",t.toneMapping!==Oi?O0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),r=la(r),r=Ul(r,t),r=Nl(r,t),a=la(a),a=Ul(a,t),a=Nl(a,t),r=Ol(r),a=Ol(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=w+m+r,v=w+p+a,R=Bl(n,n.VERTEX_SHADER,T),A=Bl(n,n.FRAGMENT_SHADER,v);n.attachShader(x,R),n.attachShader(x,A),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(P){if(o.debug.checkShaderErrors){const N=n.getProgramInfoLog(x).trim(),z=n.getShaderInfoLog(R).trim(),X=n.getShaderInfoLog(A).trim();let J=!0,j=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,x,R,A);else{const te=kl(n,R,"vertex"),V=kl(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+te+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||X==="")&&(j=!1);j&&(P.diagnostics={runnable:J,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}n.deleteShader(R),n.deleteShader(A),I=new uo(n,x),S=V0(n,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(x,B0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let tm=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nm(e),t.set(e,i)),i}}class nm{constructor(e){this.id=tm++,this.code=e,this.usedTimes=0}}function sm(o,e,t,i,n,s,r){const a=new $c,l=new im,c=new Set,d=[],u=n.logarithmicDepthBuffer,h=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,P,N,z){const X=N.fog,J=z.geometry,j=S.isMeshStandardMaterial?N.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),V=te&&te.mapping===Eo?te.image.height:null,re=g[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,he=le!==void 0?le.length:0;let Le=0;J.morphAttributes.position!==void 0&&(Le=1),J.morphAttributes.normal!==void 0&&(Le=2),J.morphAttributes.color!==void 0&&(Le=3);let de,W,Z,ye;if(re){const tt=ci[re];de=tt.vertexShader,W=tt.fragmentShader}else de=S.vertexShader,W=S.fragmentShader,l.update(S),Z=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const ae=o.getRenderTarget(),ne=o.state.buffers.depth.getReversed(),pe=z.isInstancedMesh===!0,De=z.isBatchedMesh===!0,qe=!!S.map,Oe=!!S.matcap,rt=!!te,F=!!S.aoMap,mt=!!S.lightMap,Ce=!!S.bumpMap,me=!!S.normalMap,Ae=!!S.displacementMap,Je=!!S.emissiveMap,Re=!!S.metalnessMap,E=!!S.roughnessMap,y=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,ie=S.iridescence>0,Y=S.sheen>0,Pe=S.transmission>0,fe=y&&!!S.anisotropyMap,_e=O&&!!S.clearcoatMap,$e=O&&!!S.clearcoatNormalMap,se=O&&!!S.clearcoatRoughnessMap,be=ie&&!!S.iridescenceMap,Be=ie&&!!S.iridescenceThicknessMap,ke=Y&&!!S.sheenColorMap,we=Y&&!!S.sheenRoughnessMap,je=!!S.specularMap,Ve=!!S.specularColorMap,at=!!S.specularIntensityMap,L=Pe&&!!S.transmissionMap,ue=Pe&&!!S.thicknessMap,q=!!S.gradientMap,ee=!!S.alphaMap,ve=S.alphaTest>0,ge=!!S.alphaHash,ze=!!S.extensions;let pt=Oi;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=o.toneMapping);const Tt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:de,fragmentShader:W,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:De,batchingColor:De&&z._colorsTexture!==null,instancing:pe,instancingColor:pe&&z.instanceColor!==null,instancingMorph:pe&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?o.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Wn,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:Oe,envMap:rt,envMapMode:rt&&te.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:mt,bumpMap:Ce,normalMap:me,displacementMap:h&&Ae,emissiveMap:Je,normalMapObjectSpace:me&&S.normalMapType===uh,normalMapTangentSpace:me&&S.normalMapType===Vc,metalnessMap:Re,roughnessMap:E,anisotropy:y,anisotropyMap:fe,clearcoat:O,clearcoatMap:_e,clearcoatNormalMap:$e,clearcoatRoughnessMap:se,dispersion:K,iridescence:ie,iridescenceMap:be,iridescenceThicknessMap:Be,sheen:Y,sheenColorMap:ke,sheenRoughnessMap:we,specularMap:je,specularColorMap:Ve,specularIntensityMap:at,transmission:Pe,transmissionMap:L,thicknessMap:ue,gradientMap:q,opaque:S.transparent===!1&&S.blending===Ln&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:ge,combine:S.combine,mapUv:qe&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:mt&&x(S.lightMap.channel),bumpMapUv:Ce&&x(S.bumpMap.channel),normalMapUv:me&&x(S.normalMap.channel),displacementMapUv:Ae&&x(S.displacementMap.channel),emissiveMapUv:Je&&x(S.emissiveMap.channel),metalnessMapUv:Re&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:fe&&x(S.anisotropyMap.channel),clearcoatMapUv:_e&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(S.sheenRoughnessMap.channel),specularMapUv:je&&x(S.specularMap.channel),specularColorMapUv:Ve&&x(S.specularColorMap.channel),specularIntensityMapUv:at&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:ue&&x(S.thicknessMap.channel),alphaMapUv:ee&&x(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(me||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(qe||ee),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ne,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Le,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:pt,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:Je&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)_.push(P),_.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(_,S),T(_,S),_.push(o.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function w(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function T(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const _=g[S.type];let P;if(_){const N=ci[_];P=_s.clone(N.uniforms)}else P=S.uniforms;return P}function R(S,_){let P;for(let N=0,z=d.length;N<z;N++){const X=d[N];if(X.cacheKey===_){P=X,++P.usedTimes;break}}return P===void 0&&(P=new em(o,_,S,s),d.push(P)),P}function A(S){if(--S.usedTimes===0){const _=d.indexOf(S);d[_]=d[d.length-1],d.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:I}}function om(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function i(r){o.delete(r)}function n(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function rm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Gl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Hl(){const o=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(u,h,f,g,x,m){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},o[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,h,f,g,x,m){const p=r(u,h,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,h,f,g,x,m){const p=r(u,h,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||rm),i.length>1&&i.sort(h||Gl),n.length>1&&n.sort(h||Gl)}function d(){for(let u=e,h=o.length;u<h;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:d,sort:c}}function am(){let o=new WeakMap;function e(i,n){const s=o.get(i);let r;return s===void 0?(r=new Hl,o.set(i,[r])):n>=s.length?(r=new Hl,s.push(r)):r=s[n],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function lm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Me};break;case"SpotLight":t={position:new D,direction:new D,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new D,halfWidth:new D,halfHeight:new D};break}return o[e.id]=t,t}}}function cm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let dm=0;function hm(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function um(o){const e=new lm,t=cm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,s=new ft,r=new ft;function a(c){let d=0,u=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,T=0,v=0,R=0,A=0,C=0;c.sort(hm);for(let S=0,_=c.length;S<_;S++){const P=c[S],N=P.color,z=P.intensity,X=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*z,u+=N.g*z,h+=N.b*z;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],z);C++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,V=t.get(P);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=j,f++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(N).multiplyScalar(z),j.distance=X,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[x]=j;const te=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,te.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=te.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=J,v++}x++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(N).multiplyScalar(z),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=j,m++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const te=P.shadow,V=t.get(P);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=j,g++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(z),j.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[p]=j,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=v+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=C,i.version=dm++)}function l(c,d){let u=0,h=0,f=0,g=0,x=0;const m=d.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const T=c[p];if(T.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),u++}else if(T.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),r.identity(),s.copy(T.matrixWorld),s.premultiply(m),r.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(T.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Vl(o){const e=new um(o),t=[],i=[];function n(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function r(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function fm(o){let e=new WeakMap;function t(n,s=0){const r=e.get(n);let a;return r===void 0?(a=new Vl(o),e.set(n,[a])):s>=r.length?(a=new Vl(o),r.push(a)):a=r[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class pm extends qn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mm extends qn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
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
}`;function vm(o,e,t){let i=new Ea;const n=new Fe,s=new Fe,r=new st,a=new pm({depthPacking:hh}),l=new mm,c={},d=t.maxTextureSize,u={[Gi]:Rt,[Rt]:Gi,[Ut]:Ut},h=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:gm,fragmentShader:xm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new B(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=o.getRenderTarget(),_=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),N=o.state;N.setBlending(Si),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==yi&&this.type===yi,X=p===yi&&this.type!==yi;for(let J=0,j=A.length;J<j;J++){const te=A[J],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const re=V.getFrameExtents();if(n.multiply(re),s.copy(V.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(s.x=Math.floor(d/re.x),n.x=s.x*re.x,V.mapSize.x=s.x),n.y>d&&(s.y=Math.floor(d/re.y),n.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||z===!0||X===!0){const he=this.type!==yi?{minFilter:ni,magFilter:ni}:{};V.map!==null&&V.map.dispose(),V.map=new si(n.x,n.y,he),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const le=V.getViewportCount();for(let he=0;he<le;he++){const Le=V.getViewport(he);r.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),N.viewport(r),V.updateMatrices(te,he),i=V.getFrustum(),v(C,I,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===yi&&w(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(S,_,P)};function w(A,C){const I=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(n.x,n.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(C,null,I,h,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(C,null,I,f,x,null)}function T(A,C,I,S){let _=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)_=P;else if(_=I.isPointLight===!0?l:a,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const N=_.uuid,z=C.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let J=X[z];J===void 0&&(J=_.clone(),X[z]=J,C.addEventListener("dispose",R)),_=J}if(_.visible=C.visible,_.wireframe=C.wireframe,S===yi?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=o.properties.get(_);N.light=I}return _}function v(A,C,I,S,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===yi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const z=e.update(A),X=A.material;if(Array.isArray(X)){const J=z.groups;for(let j=0,te=J.length;j<te;j++){const V=J[j],re=X[V.materialIndex];if(re&&re.visible){const le=T(A,re,S,_);A.onBeforeShadow(o,A,C,I,z,le,V),o.renderBufferDirect(I,null,z,le,A,V),A.onAfterShadow(o,A,C,I,z,le,V)}}}else if(X.visible){const J=T(A,X,S,_);A.onBeforeShadow(o,A,C,I,z,J,null),o.renderBufferDirect(I,null,z,J,A,null),A.onAfterShadow(o,A,C,I,z,J,null)}}const N=A.children;for(let z=0,X=N.length;z<X;z++)v(N[z],C,I,S,_)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const S=c[I],_=A.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const ym={[Mr]:Sr,[Tr]:Cr,[Er]:Rr,[kn]:Ar,[Sr]:Mr,[Cr]:Tr,[Rr]:Er,[Ar]:kn};function _m(o,e){function t(){let L=!1;const ue=new st;let q=null;const ee=new st(0,0,0,0);return{setMask:function(ve){q!==ve&&!L&&(o.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){L=ve},setClear:function(ve,ge,ze,pt,Tt){Tt===!0&&(ve*=pt,ge*=pt,ze*=pt),ue.set(ve,ge,ze,pt),ee.equals(ue)===!1&&(o.clearColor(ve,ge,ze,pt),ee.copy(ue))},reset:function(){L=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,q=null,ee=null,ve=null;return{setReversed:function(ge){if(ue!==ge){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const pt=ve;ve=null,this.setClear(pt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?ae(o.DEPTH_TEST):ne(o.DEPTH_TEST)},setMask:function(ge){q!==ge&&!L&&(o.depthMask(ge),q=ge)},setFunc:function(ge){if(ue&&(ge=ym[ge]),ee!==ge){switch(ge){case Mr:o.depthFunc(o.NEVER);break;case Sr:o.depthFunc(o.ALWAYS);break;case Tr:o.depthFunc(o.LESS);break;case kn:o.depthFunc(o.LEQUAL);break;case Er:o.depthFunc(o.EQUAL);break;case Ar:o.depthFunc(o.GEQUAL);break;case Cr:o.depthFunc(o.GREATER);break;case Rr:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ee=ge}},setLocked:function(ge){L=ge},setClear:function(ge){ve!==ge&&(ue&&(ge=1-ge),o.clearDepth(ge),ve=ge)},reset:function(){L=!1,q=null,ee=null,ve=null,ue=!1}}}function n(){let L=!1,ue=null,q=null,ee=null,ve=null,ge=null,ze=null,pt=null,Tt=null;return{setTest:function(tt){L||(tt?ae(o.STENCIL_TEST):ne(o.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!L&&(o.stencilMask(tt),ue=tt)},setFunc:function(tt,jt,ui){(q!==tt||ee!==jt||ve!==ui)&&(o.stencilFunc(tt,jt,ui),q=tt,ee=jt,ve=ui)},setOp:function(tt,jt,ui){(ge!==tt||ze!==jt||pt!==ui)&&(o.stencilOp(tt,jt,ui),ge=tt,ze=jt,pt=ui)},setLocked:function(tt){L=tt},setClear:function(tt){Tt!==tt&&(o.clearStencil(tt),Tt=tt)},reset:function(){L=!1,ue=null,q=null,ee=null,ve=null,ge=null,ze=null,pt=null,Tt=null}}}const s=new t,r=new i,a=new n,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,T=null,v=null,R=null,A=null,C=new Me(0,0,0),I=0,S=!1,_=null,P=null,N=null,z=null,X=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,te=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=te>=2);let re=null,le={};const he=o.getParameter(o.SCISSOR_BOX),Le=o.getParameter(o.VIEWPORT),de=new st().fromArray(he),W=new st().fromArray(Le);function Z(L,ue,q,ee){const ve=new Uint8Array(4),ge=o.createTexture();o.bindTexture(L,ge),o.texParameteri(L,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(L,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ze=0;ze<q;ze++)L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY?o.texImage3D(ue,0,o.RGBA,1,1,ee,0,o.RGBA,o.UNSIGNED_BYTE,ve):o.texImage2D(ue+ze,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ve);return ge}const ye={};ye[o.TEXTURE_2D]=Z(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=Z(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=Z(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=Z(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ae(o.DEPTH_TEST),r.setFunc(kn),Ce(!1),me(Ya),ae(o.CULL_FACE),F(Si);function ae(L){d[L]!==!0&&(o.enable(L),d[L]=!0)}function ne(L){d[L]!==!1&&(o.disable(L),d[L]=!1)}function pe(L,ue){return u[L]!==ue?(o.bindFramebuffer(L,ue),u[L]=ue,L===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=ue),L===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(L,ue){let q=f,ee=!1;if(L){q=h.get(ue),q===void 0&&(q=[],h.set(ue,q));const ve=L.textures;if(q.length!==ve.length||q[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,ze=ve.length;ge<ze;ge++)q[ge]=o.COLOR_ATTACHMENT0+ge;q.length=ve.length,ee=!0}}else q[0]!==o.BACK&&(q[0]=o.BACK,ee=!0);ee&&o.drawBuffers(q)}function qe(L){return g!==L?(o.useProgram(L),g=L,!0):!1}const Oe={[en]:o.FUNC_ADD,[Od]:o.FUNC_SUBTRACT,[zd]:o.FUNC_REVERSE_SUBTRACT};Oe[Gd]=o.MIN,Oe[Hd]=o.MAX;const rt={[Vd]:o.ZERO,[Wd]:o.ONE,[Xd]:o.SRC_COLOR,[br]:o.SRC_ALPHA,[Kd]:o.SRC_ALPHA_SATURATE,[$d]:o.DST_COLOR,[jd]:o.DST_ALPHA,[qd]:o.ONE_MINUS_SRC_COLOR,[wr]:o.ONE_MINUS_SRC_ALPHA,[Jd]:o.ONE_MINUS_DST_COLOR,[Yd]:o.ONE_MINUS_DST_ALPHA,[Zd]:o.CONSTANT_COLOR,[Qd]:o.ONE_MINUS_CONSTANT_COLOR,[eh]:o.CONSTANT_ALPHA,[th]:o.ONE_MINUS_CONSTANT_ALPHA};function F(L,ue,q,ee,ve,ge,ze,pt,Tt,tt){if(L===Si){x===!0&&(ne(o.BLEND),x=!1);return}if(x===!1&&(ae(o.BLEND),x=!0),L!==Nd){if(L!==m||tt!==S){if((p!==en||v!==en)&&(o.blendEquation(o.FUNC_ADD),p=en,v=en),tt)switch(L){case Ln:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _r:o.blendFunc(o.ONE,o.ONE);break;case $a:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ja:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ln:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _r:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case $a:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ja:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,T=null,R=null,A=null,C.set(0,0,0),I=0,m=L,S=tt}return}ve=ve||ue,ge=ge||q,ze=ze||ee,(ue!==p||ve!==v)&&(o.blendEquationSeparate(Oe[ue],Oe[ve]),p=ue,v=ve),(q!==w||ee!==T||ge!==R||ze!==A)&&(o.blendFuncSeparate(rt[q],rt[ee],rt[ge],rt[ze]),w=q,T=ee,R=ge,A=ze),(pt.equals(C)===!1||Tt!==I)&&(o.blendColor(pt.r,pt.g,pt.b,Tt),C.copy(pt),I=Tt),m=L,S=!1}function mt(L,ue){L.side===Ut?ne(o.CULL_FACE):ae(o.CULL_FACE);let q=L.side===Rt;ue&&(q=!q),Ce(q),L.blending===Ln&&L.transparent===!1?F(Si):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const ee=L.stencilWrite;a.setTest(ee),ee&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(o.SAMPLE_ALPHA_TO_COVERAGE):ne(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){_!==L&&(L?o.frontFace(o.CW):o.frontFace(o.CCW),_=L)}function me(L){L!==kd?(ae(o.CULL_FACE),L!==P&&(L===Ya?o.cullFace(o.BACK):L===Ud?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ne(o.CULL_FACE),P=L}function Ae(L){L!==N&&(j&&o.lineWidth(L),N=L)}function Je(L,ue,q){L?(ae(o.POLYGON_OFFSET_FILL),(z!==ue||X!==q)&&(o.polygonOffset(ue,q),z=ue,X=q)):ne(o.POLYGON_OFFSET_FILL)}function Re(L){L?ae(o.SCISSOR_TEST):ne(o.SCISSOR_TEST)}function E(L){L===void 0&&(L=o.TEXTURE0+J-1),re!==L&&(o.activeTexture(L),re=L)}function y(L,ue,q){q===void 0&&(re===null?q=o.TEXTURE0+J-1:q=re);let ee=le[q];ee===void 0&&(ee={type:void 0,texture:void 0},le[q]=ee),(ee.type!==L||ee.texture!==ue)&&(re!==q&&(o.activeTexture(q),re=q),o.bindTexture(L,ue||ye[L]),ee.type=L,ee.texture=ue)}function O(){const L=le[re];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(L){de.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function we(L){W.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function je(L,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let ee=q.get(L);ee===void 0&&(ee=o.getUniformBlockIndex(ue,L.name),q.set(L,ee))}function Ve(L,ue){const ee=c.get(ue).get(L);l.get(ue)!==ee&&(o.uniformBlockBinding(ue,ee,L.__bindingPointIndex),l.set(ue,ee))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},re=null,le={},u={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,T=null,v=null,R=null,A=null,C=new Me(0,0,0),I=0,S=!1,_=null,P=null,N=null,z=null,X=null,de.set(0,0,o.canvas.width,o.canvas.height),W.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ae,disable:ne,bindFramebuffer:pe,drawBuffers:De,useProgram:qe,setBlending:F,setMaterial:mt,setFlipSided:Ce,setCullFace:me,setLineWidth:Ae,setPolygonOffset:Je,setScissorTest:Re,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:be,texImage3D:Be,updateUBOMapping:je,uniformBlockBinding:Ve,texStorage2D:$e,texStorage3D:se,texSubImage2D:Y,texSubImage3D:Pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:ke,viewport:we,reset:at}}function Wl(o,e,t,i){const n=bm(i);switch(t){case kc:return o*e;case Nc:return o*e;case Oc:return o*e*2;case zc:return o*e/n.components*n.byteLength;case wa:return o*e/n.components*n.byteLength;case Gc:return o*e*2/n.components*n.byteLength;case Ma:return o*e*2/n.components*n.byteLength;case Uc:return o*e*3/n.components*n.byteLength;case ii:return o*e*4/n.components*n.byteLength;case Sa:return o*e*4/n.components*n.byteLength;case ro:case ao:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fr:case Ur:return Math.max(o,16)*Math.max(e,8)/4;case Br:case kr:return Math.max(o,8)*Math.max(e,8)/2;case Nr:case Or:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case qr:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case jr:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ea:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ho:case ta:case ia:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hc:case na:return Math.ceil(o/4)*Math.ceil(e/4)*8;case sa:case oa:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bm(o){switch(o){case Ai:case Lc:return{byteLength:1,components:1};case ys:case Bc:case Ti:return{byteLength:2,components:1};case _a:case ba:return{byteLength:2,components:4};case cn:case ya:case wi:return{byteLength:4,components:1};case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function wm(o,e,t,i,n,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):vo("canvas")}function x(E,y,O){let K=1;const ie=Re(E);if((ie.width>O||ie.height>O)&&(K=O/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(K*ie.width),Pe=Math.floor(K*ie.height);u===void 0&&(u=g(Y,Pe));const fe=y?g(Y,Pe):u;return fe.width=Y,fe.height=Pe,fe.getContext("2d").drawImage(E,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Pe+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){o.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?o.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function T(E,y,O,K,ie=!1){if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===o.RED&&(O===o.FLOAT&&(Y=o.R32F),O===o.HALF_FLOAT&&(Y=o.R16F),O===o.UNSIGNED_BYTE&&(Y=o.R8)),y===o.RED_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.R8UI),O===o.UNSIGNED_SHORT&&(Y=o.R16UI),O===o.UNSIGNED_INT&&(Y=o.R32UI),O===o.BYTE&&(Y=o.R8I),O===o.SHORT&&(Y=o.R16I),O===o.INT&&(Y=o.R32I)),y===o.RG&&(O===o.FLOAT&&(Y=o.RG32F),O===o.HALF_FLOAT&&(Y=o.RG16F),O===o.UNSIGNED_BYTE&&(Y=o.RG8)),y===o.RG_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.RG8UI),O===o.UNSIGNED_SHORT&&(Y=o.RG16UI),O===o.UNSIGNED_INT&&(Y=o.RG32UI),O===o.BYTE&&(Y=o.RG8I),O===o.SHORT&&(Y=o.RG16I),O===o.INT&&(Y=o.RG32I)),y===o.RGB_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.RGB8UI),O===o.UNSIGNED_SHORT&&(Y=o.RGB16UI),O===o.UNSIGNED_INT&&(Y=o.RGB32UI),O===o.BYTE&&(Y=o.RGB8I),O===o.SHORT&&(Y=o.RGB16I),O===o.INT&&(Y=o.RGB32I)),y===o.RGBA_INTEGER&&(O===o.UNSIGNED_BYTE&&(Y=o.RGBA8UI),O===o.UNSIGNED_SHORT&&(Y=o.RGBA16UI),O===o.UNSIGNED_INT&&(Y=o.RGBA32UI),O===o.BYTE&&(Y=o.RGBA8I),O===o.SHORT&&(Y=o.RGBA16I),O===o.INT&&(Y=o.RGBA32I)),y===o.RGB&&O===o.UNSIGNED_INT_5_9_9_9_REV&&(Y=o.RGB9_E5),y===o.RGBA){const Pe=ie?Ao:Ye.getTransfer(K);O===o.FLOAT&&(Y=o.RGBA32F),O===o.HALF_FLOAT&&(Y=o.RGBA16F),O===o.UNSIGNED_BYTE&&(Y=Pe===it?o.SRGB8_ALPHA8:o.RGBA8),O===o.UNSIGNED_SHORT_4_4_4_4&&(Y=o.RGBA4),O===o.UNSIGNED_SHORT_5_5_5_1&&(Y=o.RGB5_A1)}return(Y===o.R16F||Y===o.R32F||Y===o.RG16F||Y===o.RG32F||Y===o.RGBA16F||Y===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(E,y){let O;return E?y===null||y===cn||y===On?O=o.DEPTH24_STENCIL8:y===wi?O=o.DEPTH32F_STENCIL8:y===ys&&(O=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===cn||y===On?O=o.DEPTH_COMPONENT24:y===wi?O=o.DEPTH_COMPONENT32F:y===ys&&(O=o.DEPTH_COMPONENT16),O}function R(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ni&&E.minFilter!==di?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){const y=E.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&d.delete(y)}function C(E){const y=E.target;y.removeEventListener("dispose",C),_(y)}function I(E){const y=i.get(E);if(y.__webglInit===void 0)return;const O=E.source,K=h.get(O);if(K){const ie=K[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(E),Object.keys(K).length===0&&h.delete(O)}i.remove(E)}function S(E){const y=i.get(E);o.deleteTexture(y.__webglTexture);const O=E.source,K=h.get(O);delete K[y.__cacheKey],r.memory.textures--}function _(E){const y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let ie=0;ie<y.__webglFramebuffer[K].length;ie++)o.deleteFramebuffer(y.__webglFramebuffer[K][ie]);else o.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)o.deleteFramebuffer(y.__webglFramebuffer[K]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=E.textures;for(let K=0,ie=O.length;K<ie;K++){const Y=i.get(O[K]);Y.__webglTexture&&(o.deleteTexture(Y.__webglTexture),r.memory.textures--),i.remove(O[K])}i.remove(E)}let P=0;function N(){P=0}function z(){const E=P;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),P+=1,E}function X(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function J(E,y){const O=i.get(E);if(E.isVideoTexture&&Ae(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,E,y);return}}t.bindTexture(o.TEXTURE_2D,O.__webglTexture,o.TEXTURE0+y)}function j(E,y){const O=i.get(E);if(E.version>0&&O.__version!==E.version){W(O,E,y);return}t.bindTexture(o.TEXTURE_2D_ARRAY,O.__webglTexture,o.TEXTURE0+y)}function te(E,y){const O=i.get(E);if(E.version>0&&O.__version!==E.version){W(O,E,y);return}t.bindTexture(o.TEXTURE_3D,O.__webglTexture,o.TEXTURE0+y)}function V(E,y){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,y);return}t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+y)}const re={[Dr]:o.REPEAT,[on]:o.CLAMP_TO_EDGE,[Lr]:o.MIRRORED_REPEAT},le={[ni]:o.NEAREST,[oh]:o.NEAREST_MIPMAP_NEAREST,[Ls]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Bo]:o.LINEAR_MIPMAP_NEAREST,[rn]:o.LINEAR_MIPMAP_LINEAR},he={[fh]:o.NEVER,[yh]:o.ALWAYS,[ph]:o.LESS,[Wc]:o.LEQUAL,[mh]:o.EQUAL,[vh]:o.GEQUAL,[gh]:o.GREATER,[xh]:o.NOTEQUAL};function Le(E,y){if(y.type===wi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===di||y.magFilter===Bo||y.magFilter===Ls||y.magFilter===rn||y.minFilter===di||y.minFilter===Bo||y.minFilter===Ls||y.minFilter===rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(E,o.TEXTURE_WRAP_S,re[y.wrapS]),o.texParameteri(E,o.TEXTURE_WRAP_T,re[y.wrapT]),(E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY)&&o.texParameteri(E,o.TEXTURE_WRAP_R,re[y.wrapR]),o.texParameteri(E,o.TEXTURE_MAG_FILTER,le[y.magFilter]),o.texParameteri(E,o.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(o.texParameteri(E,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(E,o.TEXTURE_COMPARE_FUNC,he[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ni||y.minFilter!==Ls&&y.minFilter!==rn||y.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");o.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function de(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));const K=y.source;let ie=h.get(K);ie===void 0&&(ie={},h.set(K,ie));const Y=X(y);if(Y!==E.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,O=!0),ie[Y].usedTimes++;const Pe=ie[E.__cacheKey];Pe!==void 0&&(ie[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(y)),E.__cacheKey=Y,E.__webglTexture=ie[Y].texture}return O}function W(E,y,O){let K=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=o.TEXTURE_3D);const ie=de(E,y),Y=y.source;t.bindTexture(K,E.__webglTexture,o.TEXTURE0+O);const Pe=i.get(Y);if(Y.version!==Pe.__version||ie===!0){t.activeTexture(o.TEXTURE0+O);const fe=Ye.getPrimaries(Ye.workingColorSpace),_e=y.colorSpace===Ui?null:Ye.getPrimaries(y.colorSpace),$e=y.colorSpace===Ui||fe===_e?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let se=x(y.image,!1,n.maxTextureSize);se=Je(y,se);const be=s.convert(y.format,y.colorSpace),Be=s.convert(y.type);let ke=T(y.internalFormat,be,Be,y.colorSpace,y.isVideoTexture);Le(K,y);let we;const je=y.mipmaps,Ve=y.isVideoTexture!==!0,at=Pe.__version===void 0||ie===!0,L=Y.dataReady,ue=R(y,se);if(y.isDepthTexture)ke=v(y.format===zn,y.type),at&&(Ve?t.texStorage2D(o.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(o.TEXTURE_2D,0,ke,se.width,se.height,0,be,Be,null));else if(y.isDataTexture)if(je.length>0){Ve&&at&&t.texStorage2D(o.TEXTURE_2D,ue,ke,je[0].width,je[0].height);for(let q=0,ee=je.length;q<ee;q++)we=je[q],Ve?L&&t.texSubImage2D(o.TEXTURE_2D,q,0,0,we.width,we.height,be,Be,we.data):t.texImage2D(o.TEXTURE_2D,q,ke,we.width,we.height,0,be,Be,we.data);y.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(o.TEXTURE_2D,ue,ke,se.width,se.height),L&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,se.width,se.height,be,Be,se.data)):t.texImage2D(o.TEXTURE_2D,0,ke,se.width,se.height,0,be,Be,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&at&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ue,ke,je[0].width,je[0].height,se.depth);for(let q=0,ee=je.length;q<ee;q++)if(we=je[q],y.format!==ii)if(be!==null)if(Ve){if(L)if(y.layerUpdates.size>0){const ve=Wl(we.width,we.height,y.format,y.type);for(const ge of y.layerUpdates){const ze=we.data.subarray(ge*ve/we.data.BYTES_PER_ELEMENT,(ge+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,ge,we.width,we.height,1,be,ze)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,se.depth,be,we.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,q,ke,we.width,we.height,se.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,se.depth,be,Be,we.data):t.texImage3D(o.TEXTURE_2D_ARRAY,q,ke,we.width,we.height,se.depth,0,be,Be,we.data)}else{Ve&&at&&t.texStorage2D(o.TEXTURE_2D,ue,ke,je[0].width,je[0].height);for(let q=0,ee=je.length;q<ee;q++)we=je[q],y.format!==ii?be!==null?Ve?L&&t.compressedTexSubImage2D(o.TEXTURE_2D,q,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(o.TEXTURE_2D,q,ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&t.texSubImage2D(o.TEXTURE_2D,q,0,0,we.width,we.height,be,Be,we.data):t.texImage2D(o.TEXTURE_2D,q,ke,we.width,we.height,0,be,Be,we.data)}else if(y.isDataArrayTexture)if(Ve){if(at&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ue,ke,se.width,se.height,se.depth),L)if(y.layerUpdates.size>0){const q=Wl(se.width,se.height,y.format,y.type);for(const ee of y.layerUpdates){const ve=se.data.subarray(ee*q/se.data.BYTES_PER_ELEMENT,(ee+1)*q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,be,Be,ve)}y.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Be,se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,be,Be,se.data);else if(y.isData3DTexture)Ve?(at&&t.texStorage3D(o.TEXTURE_3D,ue,ke,se.width,se.height,se.depth),L&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Be,se.data)):t.texImage3D(o.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,be,Be,se.data);else if(y.isFramebufferTexture){if(at)if(Ve)t.texStorage2D(o.TEXTURE_2D,ue,ke,se.width,se.height);else{let q=se.width,ee=se.height;for(let ve=0;ve<ue;ve++)t.texImage2D(o.TEXTURE_2D,ve,ke,q,ee,0,be,Be,null),q>>=1,ee>>=1}}else if(je.length>0){if(Ve&&at){const q=Re(je[0]);t.texStorage2D(o.TEXTURE_2D,ue,ke,q.width,q.height)}for(let q=0,ee=je.length;q<ee;q++)we=je[q],Ve?L&&t.texSubImage2D(o.TEXTURE_2D,q,0,0,be,Be,we):t.texImage2D(o.TEXTURE_2D,q,ke,be,Be,we);y.generateMipmaps=!1}else if(Ve){if(at){const q=Re(se);t.texStorage2D(o.TEXTURE_2D,ue,ke,q.width,q.height)}L&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,be,Be,se)}else t.texImage2D(o.TEXTURE_2D,0,ke,be,Be,se);m(y)&&p(K),Pe.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Z(E,y,O){if(y.image.length!==6)return;const K=de(E,y),ie=y.source;t.bindTexture(o.TEXTURE_CUBE_MAP,E.__webglTexture,o.TEXTURE0+O);const Y=i.get(ie);if(ie.version!==Y.__version||K===!0){t.activeTexture(o.TEXTURE0+O);const Pe=Ye.getPrimaries(Ye.workingColorSpace),fe=y.colorSpace===Ui?null:Ye.getPrimaries(y.colorSpace),_e=y.colorSpace===Ui||Pe===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!$e&&!se?be[ee]=x(y.image[ee],!0,n.maxCubemapSize):be[ee]=se?y.image[ee].image:y.image[ee],be[ee]=Je(y,be[ee]);const Be=be[0],ke=s.convert(y.format,y.colorSpace),we=s.convert(y.type),je=T(y.internalFormat,ke,we,y.colorSpace),Ve=y.isVideoTexture!==!0,at=Y.__version===void 0||K===!0,L=ie.dataReady;let ue=R(y,Be);Le(o.TEXTURE_CUBE_MAP,y);let q;if($e){Ve&&at&&t.texStorage2D(o.TEXTURE_CUBE_MAP,ue,je,Be.width,Be.height);for(let ee=0;ee<6;ee++){q=be[ee].mipmaps;for(let ve=0;ve<q.length;ve++){const ge=q[ve];y.format!==ii?ke!==null?Ve?L&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,ge.width,ge.height,ke,ge.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,je,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?L&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,ge.width,ge.height,ke,we,ge.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,je,ge.width,ge.height,0,ke,we,ge.data)}}}else{if(q=y.mipmaps,Ve&&at){q.length>0&&ue++;const ee=Re(be[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,ue,je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ve?L&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,ke,we,be[ee].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,be[ee].width,be[ee].height,0,ke,we,be[ee].data);for(let ve=0;ve<q.length;ve++){const ze=q[ve].image[ee].image;Ve?L&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,ze.width,ze.height,ke,we,ze.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,je,ze.width,ze.height,0,ke,we,ze.data)}}else{Ve?L&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ke,we,be[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,ke,we,be[ee]);for(let ve=0;ve<q.length;ve++){const ge=q[ve];Ve?L&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,ke,we,ge.image[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,je,ke,we,ge.image[ee])}}}m(y)&&p(o.TEXTURE_CUBE_MAP),Y.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ye(E,y,O,K,ie,Y){const Pe=s.convert(O.format,O.colorSpace),fe=s.convert(O.type),_e=T(O.internalFormat,Pe,fe,O.colorSpace),$e=i.get(y),se=i.get(O);if(se.__renderTarget=y,!$e.__hasExternalTextures){const be=Math.max(1,y.width>>Y),Be=Math.max(1,y.height>>Y);ie===o.TEXTURE_3D||ie===o.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,_e,be,Be,y.depth,0,Pe,fe,null):t.texImage2D(ie,Y,_e,be,Be,0,Pe,fe,null)}t.bindFramebuffer(o.FRAMEBUFFER,E),me(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,K,ie,se.__webglTexture,0,Ce(y)):(ie===o.TEXTURE_2D||ie>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,K,ie,se.__webglTexture,Y),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(E,y,O){if(o.bindRenderbuffer(o.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,ie=K&&K.isDepthTexture?K.type:null,Y=v(y.stencilBuffer,ie),Pe=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=Ce(y);me(y)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,fe,Y,y.width,y.height):O?o.renderbufferStorageMultisample(o.RENDERBUFFER,fe,Y,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Y,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,E)}else{const K=y.textures;for(let ie=0;ie<K.length;ie++){const Y=K[ie],Pe=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),_e=T(Y.internalFormat,Pe,fe,Y.colorSpace),$e=Ce(y);O&&me(y)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e,_e,y.width,y.height):me(y)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e,_e,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,_e,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ne(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const ie=K.__webglTexture,Y=Ce(y);if(y.depthTexture.format===Bn)me(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0,Y):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0);else if(y.depthTexture.format===zn)me(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0,Y):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function pe(E){const y=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ne(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=o.createRenderbuffer(),ae(y.__webglDepthbuffer[K],E,!1);else{const ie=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];o.bindRenderbuffer(o.RENDERBUFFER,Y),o.framebufferRenderbuffer(o.FRAMEBUFFER,ie,o.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),ae(y.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ie),o.framebufferRenderbuffer(o.FRAMEBUFFER,K,o.RENDERBUFFER,ie)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function De(E,y,O){const K=i.get(E);y!==void 0&&ye(K.__webglFramebuffer,E,E.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),O!==void 0&&pe(E)}function qe(E){const y=E.texture,O=i.get(E),K=i.get(y);E.addEventListener("dispose",C);const ie=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=o.createTexture()),K.__version=y.version,r.memory.textures++),Y){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)O.__webglFramebuffer[fe][_e]=o.createFramebuffer()}else O.__webglFramebuffer[fe]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)O.__webglFramebuffer[fe]=o.createFramebuffer()}else O.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let fe=0,_e=ie.length;fe<_e;fe++){const $e=i.get(ie[fe]);$e.__webglTexture===void 0&&($e.__webglTexture=o.createTexture(),r.memory.textures++)}if(E.samples>0&&me(E)===!1){O.__webglMultisampledFramebuffer=o.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];O.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const $e=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),be=T(_e.internalFormat,$e,se,_e.colorSpace,E.isXRRenderTarget===!0),Be=Ce(E);o.renderbufferStorageMultisample(o.RENDERBUFFER,Be,be,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(o.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=o.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Y){t.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture),Le(o.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ye(O.__webglFramebuffer[fe][_e],E,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else ye(O.__webglFramebuffer[fe],E,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(y)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,_e=ie.length;fe<_e;fe++){const $e=ie[fe],se=i.get($e);t.bindTexture(o.TEXTURE_2D,se.__webglTexture),Le(o.TEXTURE_2D,$e),ye(O.__webglFramebuffer,E,$e,o.COLOR_ATTACHMENT0+fe,o.TEXTURE_2D,0),m($e)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let fe=o.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(fe,K.__webglTexture),Le(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ye(O.__webglFramebuffer[_e],E,y,o.COLOR_ATTACHMENT0,fe,_e);else ye(O.__webglFramebuffer,E,y,o.COLOR_ATTACHMENT0,fe,0);m(y)&&p(fe),t.unbindTexture()}E.depthBuffer&&pe(E)}function Oe(E){const y=E.textures;for(let O=0,K=y.length;O<K;O++){const ie=y[O];if(m(ie)){const Y=w(E),Pe=i.get(ie).__webglTexture;t.bindTexture(Y,Pe),p(Y),t.unbindTexture()}}}const rt=[],F=[];function mt(E){if(E.samples>0){if(me(E)===!1){const y=E.textures,O=E.width,K=E.height;let ie=o.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=i.get(E),fe=y.length>1;if(fe)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=o.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=o.STENCIL_BUFFER_BIT)),fe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const $e=i.get(y[_e]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$e,0)}o.blitFramebuffer(0,0,O,K,0,0,O,K,ie,o.NEAREST),l===!0&&(rt.length=0,F.length=0,rt.push(o.COLOR_ATTACHMENT0+_e),E.depthBuffer&&E.resolveDepthBuffer===!1&&(rt.push(Y),F.push(Y),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const $e=i.get(y[_e]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.TEXTURE_2D,$e,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Ce(E){return Math.min(n.maxSamples,E.samples)}function me(E){const y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(E){const y=r.render.frame;d.get(E)!==y&&(d.set(E,y),E.update())}function Je(E,y){const O=E.colorSpace,K=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Wn&&O!==Ui&&(Ye.getTransfer(O)===it?(K!==ii||ie!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=me}function Mm(o,e){function t(i,n=Ui){let s;const r=Ye.getTransfer(n);if(i===Ai)return o.UNSIGNED_BYTE;if(i===_a)return o.UNSIGNED_SHORT_4_4_4_4;if(i===ba)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Fc)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Lc)return o.BYTE;if(i===Bc)return o.SHORT;if(i===ys)return o.UNSIGNED_SHORT;if(i===ya)return o.INT;if(i===cn)return o.UNSIGNED_INT;if(i===wi)return o.FLOAT;if(i===Ti)return o.HALF_FLOAT;if(i===kc)return o.ALPHA;if(i===Uc)return o.RGB;if(i===ii)return o.RGBA;if(i===Nc)return o.LUMINANCE;if(i===Oc)return o.LUMINANCE_ALPHA;if(i===Bn)return o.DEPTH_COMPONENT;if(i===zn)return o.DEPTH_STENCIL;if(i===zc)return o.RED;if(i===wa)return o.RED_INTEGER;if(i===Gc)return o.RG;if(i===Ma)return o.RG_INTEGER;if(i===Sa)return o.RGBA_INTEGER;if(i===ro||i===ao||i===lo||i===co)if(r===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Br||i===Fr||i===kr||i===Ur)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Br)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ur)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nr||i===Or||i===zr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nr||i===Or)return r===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gr||i===Hr||i===Vr||i===Wr||i===Xr||i===qr||i===jr||i===Yr||i===$r||i===Jr||i===Kr||i===Zr||i===Qr||i===ea)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$r)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qr)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ea)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===ta||i===ia)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ho)return r===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ia)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===na||i===sa||i===oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===On?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class Sm extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ne extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
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

}`;class Cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Lt,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ct({vertexShader:Em,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rm extends dn{constructor(e,t){super();const i=this;let n=null,s=1,r=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const x=new Cm,m=t.getContextAttributes();let p=null,w=null;const T=[],v=[],R=new Fe;let A=null;const C=new Dt;C.viewport=new st;const I=new Dt;I.viewport=new st;const S=[C,I],_=new Sm;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=T[W];return Z===void 0&&(Z=new dr,T[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=T[W];return Z===void 0&&(Z=new dr,T[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=T[W];return Z===void 0&&(Z=new dr,T[W]=Z),Z.getHandSpace()};function z(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const ye=T[Z];ye!==void 0&&(ye.update(W.inputSource,W.frame,c||r),ye.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",J);for(let W=0;W<T.length;W++){const Z=v[W];Z!==null&&(v[W]=null,T[W].disconnect(Z))}P=null,N=null,x.reset(),e.setRenderTarget(p),f=null,h=null,u=null,n=null,w=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",X),n.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),n.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new si(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ye=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?zn:Bn,ye=m.stencil?On:cn);const ne={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(n,t),h=u.createProjectionLayer(ne),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new si(h.textureWidth,h.textureHeight,{format:ii,type:Ai,depthTexture:new nd(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(a),de.setContext(n),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(W){for(let Z=0;Z<W.removed.length;Z++){const ye=W.removed[Z],ae=v.indexOf(ye);ae>=0&&(v[ae]=null,T[ae].disconnect(ye))}for(let Z=0;Z<W.added.length;Z++){const ye=W.added[Z];let ae=v.indexOf(ye);if(ae===-1){for(let pe=0;pe<T.length;pe++)if(pe>=v.length){v.push(ye),ae=pe;break}else if(v[pe]===null){v[pe]=ye,ae=pe;break}if(ae===-1)break}const ne=T[ae];ne&&ne.connect(ye)}}const j=new D,te=new D;function V(W,Z,ye){j.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(ye.matrixWorld);const ae=j.distanceTo(te),ne=Z.projectionMatrix.elements,pe=ye.projectionMatrix.elements,De=ne[14]/(ne[10]-1),qe=ne[14]/(ne[10]+1),Oe=(ne[9]+1)/ne[5],rt=(ne[9]-1)/ne[5],F=(ne[8]-1)/ne[0],mt=(pe[8]+1)/pe[0],Ce=De*F,me=De*mt,Ae=ae/(-F+mt),Je=Ae*-F;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Je),W.translateZ(Ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ne[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Re=De+Ae,E=qe+Ae,y=Ce-Je,O=me+(ae-Je),K=Oe*qe/E*Re,ie=rt*qe/E*Re;W.projectionMatrix.makePerspective(y,O,K,ie,Re,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let Z=W.near,ye=W.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),_.near=I.near=C.near=Z,_.far=I.far=C.far=ye,(P!==_.near||N!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,N=_.far),C.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,_.layers.mask=C.layers.mask|I.layers.mask;const ae=W.parent,ne=_.cameras;re(_,ae);for(let pe=0;pe<ne.length;pe++)re(ne[pe],ae);ne.length===2?V(_,C,I):_.projectionMatrix.copy(C.projectionMatrix),le(W,_,ae)};function le(W,Z,ye){ye===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ye.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=aa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let he=null;function Le(W,Z){if(d=Z.getViewerPose(c||r),g=Z,d!==null){const ye=d.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ae=!1;ye.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let pe=0;pe<ye.length;pe++){const De=ye[pe];let qe=null;if(f!==null)qe=f.getViewport(De);else{const rt=u.getViewSubImage(h,De);qe=rt.viewport,pe===0&&(e.setRenderTargetTextures(w,rt.colorTexture,h.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(w))}let Oe=S[pe];Oe===void 0&&(Oe=new Dt,Oe.layers.enable(pe),Oe.viewport=new st,S[pe]=Oe),Oe.matrix.fromArray(De.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(De.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(qe.x,qe.y,qe.width,qe.height),pe===0&&(_.matrix.copy(Oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(Oe)}const ne=n.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const pe=u.getDepthInformation(ye[0]);pe&&pe.isValid&&pe.texture&&x.init(e,pe,n.renderState)}}for(let ye=0;ye<T.length;ye++){const ae=v[ye],ne=T[ye];ae!==null&&ne!==void 0&&ne.update(ae,Z,c||r)}he&&he(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const de=new id;de.setAnimationLoop(Le),this.setAnimationLoop=function(W){he=W},this.dispose=function(){}}}const Yi=new Ht,Pm=new ft;function Im(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qc(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,w,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),T=w.envMap,v=w.envMapRotation;T&&(m.envMap.value=T,Yi.copy(v),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Yi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Dm(o,e,t,i){let n={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const v=T.program;i.uniformBlockBinding(w,v)}function c(w,T){let v=n[w.id];v===void 0&&(g(w),v=d(w),n[w.id]=v,w.addEventListener("dispose",m));const R=T.program;i.updateUBOMapping(w,R);const A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function d(w){const T=u();w.__bindingPointIndex=T;const v=o.createBuffer(),R=w.__size,A=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,v),o.bufferData(o.UNIFORM_BUFFER,R,A),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,T,v),v}function u(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const T=n[w.id],v=w.uniforms,R=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,T);for(let A=0,C=v.length;A<C;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,_=I.length;S<_;S++){const P=I[S];if(f(P,A,S,R)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let J=0;J<z.length;J++){const j=z[J],te=x(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,N+X,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,N,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(w,T,v,R){const A=w.value,C=T+"_"+v;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const I=R[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(w){const T=w.uniforms;let v=0;const R=16;for(let C=0,I=T.length;C<I;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let _=0,P=S.length;_<P;_++){const N=S[_],z=Array.isArray(N.value)?N.value:[N.value];for(let X=0,J=z.length;X<J;X++){const j=z[X],te=x(j),V=v%R,re=V%te.boundary,le=V+re;v+=re,le!==0&&R-le<te.storage&&(v+=R-le),N.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=te.storage}}}const A=v%R;return A>0&&(v+=R-A),w.__size=v,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const v=r.indexOf(T.__bindingPointIndex);r.splice(v,1),o.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function p(){for(const w in n)o.deleteBuffer(n[w]);r=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Ra{constructor(e={}){const{canvas:t=bh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Oi,this.toneMappingExposure=1;const v=this;let R=!1,A=0,C=0,I=null,S=-1,_=null;const P=new st,N=new st;let z=null;const X=new Me(0);let J=0,j=t.width,te=t.height,V=1,re=null,le=null;const he=new st(0,0,j,te),Le=new st(0,0,j,te);let de=!1;const W=new Ea;let Z=!1,ye=!1;const ae=new ft,ne=new ft,pe=new D,De=new st,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function rt(){return I===null?V:1}let F=i;function mt(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),F===null){const k="webgl2";if(F=mt(k,M),F===null)throw mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ce,me,Ae,Je,Re,E,y,O,K,ie,Y,Pe,fe,_e,$e,se,be,Be,ke,we,je,Ve,at,L;function ue(){Ce=new Np(F),Ce.init(),Ve=new Mm(F,Ce),me=new Dp(F,Ce,e,Ve),Ae=new _m(F,Ce),me.reverseDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),Je=new Gp(F),Re=new om,E=new wm(F,Ce,Ae,Re,me,Ve,Je),y=new Bp(v),O=new Up(v),K=new jh(F),at=new Pp(F,K),ie=new Op(F,K,Je,at),Y=new Vp(F,ie,K,Je),ke=new Hp(F,me,E),se=new Lp(Re),Pe=new sm(v,y,O,Ce,me,at,se),fe=new Im(v,Re),_e=new am,$e=new fm(Ce),Be=new Rp(v,y,O,Ae,Y,f,l),be=new vm(v,Y,me),L=new Dm(F,Je,me,Ae),we=new Ip(F,Ce,Je),je=new zp(F,Ce,Je),Je.programs=Pe.programs,v.capabilities=me,v.extensions=Ce,v.properties=Re,v.renderLists=_e,v.shadowMap=be,v.state=Ae,v.info=Je}ue();const q=new Rm(v,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(j,te,!1))},this.getSize=function(M){return M.set(j,te)},this.setSize=function(M,k,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,te=k,t.width=Math.floor(M*V),t.height=Math.floor(k*V),G===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(j*V,te*V).floor()},this.setDrawingBufferSize=function(M,k,G){j=M,te=k,V=G,t.width=Math.floor(M*G),t.height=Math.floor(k*G),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(he)},this.setViewport=function(M,k,G,H){M.isVector4?he.set(M.x,M.y,M.z,M.w):he.set(M,k,G,H),Ae.viewport(P.copy(he).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Le)},this.setScissor=function(M,k,G,H){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,k,G,H),Ae.scissor(N.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){Ae.setScissorTest(de=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(M=!0,k=!0,G=!0){let H=0;if(M){let U=!1;if(I!==null){const oe=I.texture.format;U=oe===Sa||oe===Ma||oe===wa}if(U){const oe=I.texture.type,xe=oe===Ai||oe===cn||oe===ys||oe===On||oe===_a||oe===ba,Se=Be.getClearColor(),Te=Be.getClearAlpha(),Ue=Se.r,Ge=Se.g,Ee=Se.b;xe?(g[0]=Ue,g[1]=Ge,g[2]=Ee,g[3]=Te,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ue,x[1]=Ge,x[2]=Ee,x[3]=Te,F.clearBufferiv(F.COLOR,0,x))}else H|=F.COLOR_BUFFER_BIT}k&&(H|=F.DEPTH_BUFFER_BIT),G&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),$e.dispose(),Re.dispose(),y.dispose(),O.dispose(),Y.dispose(),at.dispose(),L.dispose(),Pe.dispose(),q.dispose(),q.removeEventListener("sessionstart",za),q.removeEventListener("sessionend",Ga),Hi.stop()};function ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=Je.autoReset,k=be.enabled,G=be.autoUpdate,H=be.needsUpdate,U=be.type;ue(),Je.autoReset=M,be.enabled=k,be.autoUpdate=G,be.needsUpdate=H,be.type=U}function ge(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ze(M){const k=M.target;k.removeEventListener("dispose",ze),pt(k)}function pt(M){Tt(M),Re.remove(M)}function Tt(M){const k=Re.get(M).programs;k!==void 0&&(k.forEach(function(G){Pe.releaseProgram(G)}),M.isShaderMaterial&&Pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,G,H,U,oe){k===null&&(k=qe);const xe=U.isMesh&&U.matrixWorld.determinant()<0,Se=Id(M,k,G,H,U);Ae.setMaterial(H,xe);let Te=G.index,Ue=1;if(H.wireframe===!0){if(Te=ie.getWireframeAttribute(G),Te===void 0)return;Ue=2}const Ge=G.drawRange,Ee=G.attributes.position;let Ke=Ge.start*Ue,lt=(Ge.start+Ge.count)*Ue;oe!==null&&(Ke=Math.max(Ke,oe.start*Ue),lt=Math.min(lt,(oe.start+oe.count)*Ue)),Te!==null?(Ke=Math.max(Ke,0),lt=Math.min(lt,Te.count)):Ee!=null&&(Ke=Math.max(Ke,0),lt=Math.min(lt,Ee.count));const ct=lt-Ke;if(ct<0||ct===1/0)return;at.setup(U,H,Se,G,Te);let Bt,Ze=we;if(Te!==null&&(Bt=K.get(Te),Ze=je,Ze.setIndex(Bt)),U.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*rt()),Ze.setMode(F.LINES)):Ze.setMode(F.TRIANGLES);else if(U.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),Ae.setLineWidth(Ie*rt()),U.isLineSegments?Ze.setMode(F.LINES):U.isLineLoop?Ze.setMode(F.LINE_LOOP):Ze.setMode(F.LINE_STRIP)}else U.isPoints?Ze.setMode(F.POINTS):U.isSprite&&Ze.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ie=U._multiDrawStarts,fi=U._multiDrawCounts,Qe=U._multiDrawCount,Yt=Te?K.get(Te).bytesPerElement:1,un=Re.get(H).currentProgram.getUniforms();for(let Ot=0;Ot<Qe;Ot++)un.setValue(F,"_gl_DrawID",Ot),Ze.render(Ie[Ot]/Yt,fi[Ot])}else if(U.isInstancedMesh)Ze.renderInstances(Ke,ct,U.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fi=Math.min(G.instanceCount,Ie);Ze.renderInstances(Ke,ct,fi)}else Ze.render(Ke,ct)};function tt(M,k,G){M.transparent===!0&&M.side===Ut&&M.forceSinglePass===!1?(M.side=Rt,M.needsUpdate=!0,Ds(M,k,G),M.side=Gi,M.needsUpdate=!0,Ds(M,k,G),M.side=Ut):Ds(M,k,G)}this.compile=function(M,k,G=null){G===null&&(G=M),p=$e.get(G),p.init(k),T.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==G&&M.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const Se=oe[xe];tt(Se,G,U),H.add(Se)}else tt(oe,G,U),H.add(oe)}),T.pop(),p=null,H},this.compileAsync=function(M,k,G=null){const H=this.compile(M,k,G);return new Promise(U=>{function oe(){if(H.forEach(function(xe){Re.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){U(M);return}setTimeout(oe,10)}Ce.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let jt=null;function ui(M){jt&&jt(M)}function za(){Hi.stop()}function Ga(){Hi.start()}const Hi=new id;Hi.setAnimationLoop(ui),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(M){jt=M,q.setAnimationLoop(M),M===null?Hi.stop():Hi.start()},q.addEventListener("sessionstart",za),q.addEventListener("sessionend",Ga),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,k,I),p=$e.get(M,T.length),p.init(k),T.push(p),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(ne),ye=this.localClippingEnabled,Z=se.init(this.clippingPlanes,ye),m=_e.get(M,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&Lo(oe,k,-1/0,v.sortObjects)}Lo(M,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,le),Oe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Oe&&Be.addToRenderList(m,M),this.info.render.frame++,Z===!0&&se.beginShadows();const G=p.state.shadowsArray;be.render(G,M,k),Z===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),k.isArrayCamera){const oe=k.cameras;if(U.length>0)for(let xe=0,Se=oe.length;xe<Se;xe++){const Te=oe[xe];Va(H,U,M,Te)}Oe&&Be.render(M);for(let xe=0,Se=oe.length;xe<Se;xe++){const Te=oe[xe];Ha(m,M,Te,Te.viewport)}}else U.length>0&&Va(H,U,M,k),Oe&&Be.render(M),Ha(m,M,k);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(v,M,k),at.resetDefaultState(),S=-1,_=null,T.pop(),T.length>0?(p=T[T.length-1],Z===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Lo(M,k,G,H){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||W.intersectsSprite(M)){H&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const xe=Y.update(M),Se=M.material;Se.visible&&m.push(M,xe,Se,G,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||W.intersectsObject(M))){const xe=Y.update(M),Se=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(ne)),Array.isArray(Se)){const Te=xe.groups;for(let Ue=0,Ge=Te.length;Ue<Ge;Ue++){const Ee=Te[Ue],Ke=Se[Ee.materialIndex];Ke&&Ke.visible&&m.push(M,xe,Ke,G,De.z,Ee)}}else Se.visible&&m.push(M,xe,Se,G,De.z,null)}}const oe=M.children;for(let xe=0,Se=oe.length;xe<Se;xe++)Lo(oe[xe],k,G,H)}function Ha(M,k,G,H){const U=M.opaque,oe=M.transmissive,xe=M.transparent;p.setupLightsView(G),Z===!0&&se.setGlobalState(v.clippingPlanes,G),H&&Ae.viewport(P.copy(H)),U.length>0&&Is(U,k,G),oe.length>0&&Is(oe,k,G),xe.length>0&&Is(xe,k,G),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Va(M,k,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new si(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Ti:Ai,minFilter:rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const oe=p.state.transmissionRenderTarget[H.id],xe=H.viewport||P;oe.setSize(xe.z,xe.w);const Se=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(X),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&Be.render(G);const Te=v.toneMapping;v.toneMapping=Oi;const Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Z===!0&&se.setGlobalState(v.clippingPlanes,H),Is(M,G,H),E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ee=0,Ke=k.length;Ee<Ke;Ee++){const lt=k[Ee],ct=lt.object,Bt=lt.geometry,Ze=lt.material,Ie=lt.group;if(Ze.side===Ut&&ct.layers.test(H.layers)){const fi=Ze.side;Ze.side=Rt,Ze.needsUpdate=!0,Wa(ct,G,H,Bt,Ze,Ie),Ze.side=fi,Ze.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe))}v.setRenderTarget(Se),v.setClearColor(X,J),Ue!==void 0&&(H.viewport=Ue),v.toneMapping=Te}function Is(M,k,G){const H=k.isScene===!0?k.overrideMaterial:null;for(let U=0,oe=M.length;U<oe;U++){const xe=M[U],Se=xe.object,Te=xe.geometry,Ue=H===null?xe.material:H,Ge=xe.group;Se.layers.test(G.layers)&&Wa(Se,k,G,Te,Ue,Ge)}}function Wa(M,k,G,H,U,oe){M.onBeforeRender(v,k,G,H,U,oe),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,k,G,H,M,oe),U.transparent===!0&&U.side===Ut&&U.forceSinglePass===!1?(U.side=Rt,U.needsUpdate=!0,v.renderBufferDirect(G,k,H,U,M,oe),U.side=Gi,U.needsUpdate=!0,v.renderBufferDirect(G,k,H,U,M,oe),U.side=Ut):v.renderBufferDirect(G,k,H,U,M,oe),M.onAfterRender(v,k,G,H,U,oe)}function Ds(M,k,G){k.isScene!==!0&&(k=qe);const H=Re.get(M),U=p.state.lights,oe=p.state.shadowsArray,xe=U.state.version,Se=Pe.getParameters(M,U.state,oe,k,G),Te=Pe.getProgramCacheKey(Se);let Ue=H.programs;H.environment=M.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(M.isMeshStandardMaterial?O:y).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",ze),Ue=new Map,H.programs=Ue);let Ge=Ue.get(Te);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===xe)return qa(M,Se),Ge}else Se.uniforms=Pe.getUniforms(M),M.onBeforeCompile(Se,v),Ge=Pe.acquireProgram(Se,Te),Ue.set(Te,Ge),H.uniforms=Se.uniforms;const Ee=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=se.uniform),qa(M,Se),H.needsLights=Ld(M),H.lightsStateVersion=xe,H.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Xa(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=uo.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function qa(M,k){const G=Re.get(M);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Id(M,k,G,H,U){k.isScene!==!0&&(k=qe),E.resetTextureUnits();const oe=k.fog,xe=H.isMeshStandardMaterial?k.environment:null,Se=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Wn,Te=(H.isMeshStandardMaterial?O:y).get(H.envMap||xe),Ue=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let ct=Oi;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ct=v.toneMapping);const Bt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=Bt!==void 0?Bt.length:0,Ie=Re.get(H),fi=p.state.lights;if(Z===!0&&(ye===!0||M!==_)){const Vt=M===_&&H.id===S;se.setState(H,M,Vt)}let Qe=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==fi.state.version||Ie.outputColorSpace!==Se||U.isBatchedMesh&&Ie.batching===!1||!U.isBatchedMesh&&Ie.batching===!0||U.isBatchedMesh&&Ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ie.instancing===!1||!U.isInstancedMesh&&Ie.instancing===!0||U.isSkinnedMesh&&Ie.skinning===!1||!U.isSkinnedMesh&&Ie.skinning===!0||U.isInstancedMesh&&Ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ie.instancingMorph===!1&&U.morphTexture!==null||Ie.envMap!==Te||H.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Ge||Ie.morphTargets!==Ee||Ie.morphNormals!==Ke||Ie.morphColors!==lt||Ie.toneMapping!==ct||Ie.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ie.__version=H.version);let Yt=Ie.currentProgram;Qe===!0&&(Yt=Ds(H,k,U));let un=!1,Ot=!1,Kn=!1;const dt=Yt.getUniforms(),ri=Ie.uniforms;if(Ae.useProgram(Yt.program)&&(un=!0,Ot=!0,Kn=!0),H.id!==S&&(S=H.id,Ot=!0),un||_!==M){Ae.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),Mh(ae),Sh(ae),dt.setValue(F,"projectionMatrix",ae)):dt.setValue(F,"projectionMatrix",M.projectionMatrix),dt.setValue(F,"viewMatrix",M.matrixWorldInverse);const Ri=dt.map.cameraPosition;Ri!==void 0&&Ri.setValue(F,pe.setFromMatrixPosition(M.matrixWorld)),me.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Ot=!0,Kn=!0)}if(U.isSkinnedMesh){dt.setOptional(F,U,"bindMatrix"),dt.setOptional(F,U,"bindMatrixInverse");const Vt=U.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),dt.setValue(F,"boneTexture",Vt.boneTexture,E))}U.isBatchedMesh&&(dt.setOptional(F,U,"batchingTexture"),dt.setValue(F,"batchingTexture",U._matricesTexture,E),dt.setOptional(F,U,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",U._indirectTexture,E),dt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",U._colorsTexture,E));const Zn=G.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ke.update(U,G,Yt),(Ot||Ie.receiveShadow!==U.receiveShadow)&&(Ie.receiveShadow=U.receiveShadow,dt.setValue(F,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ri.envMap.value=Te,ri.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&k.environment!==null&&(ri.envMapIntensity.value=k.environmentIntensity),Ot&&(dt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&Dd(ri,Kn),oe&&H.fog===!0&&fe.refreshFogUniforms(ri,oe),fe.refreshMaterialUniforms(ri,H,V,te,p.state.transmissionRenderTarget[M.id]),uo.upload(F,Xa(Ie),ri,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(uo.upload(F,Xa(Ie),ri,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(F,"center",U.center),dt.setValue(F,"modelViewMatrix",U.modelViewMatrix),dt.setValue(F,"normalMatrix",U.normalMatrix),dt.setValue(F,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Vt=H.uniformsGroups;for(let Ri=0,Pi=Vt.length;Ri<Pi;Ri++){const ja=Vt[Ri];L.update(ja,Yt),L.bind(ja,Yt)}}return Yt}function Dd(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Ld(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,k,G){Re.get(M.texture).__webglTexture=k,Re.get(M.depthTexture).__webglTexture=G;const H=Re.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,k){const G=Re.get(M);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,G=0){I=M,A=k,C=G;let H=!0,U=null,oe=!1,xe=!1;if(M){const Te=Re.get(M);if(Te.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(Te.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Te.__hasExternalTextures)E.rebindTextures(M,Re.get(M.texture).__webglTexture,Re.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ee=M.depthTexture;if(Te.__boundDepthTexture!==Ee){if(Ee!==null&&Re.has(Ee)&&(M.width!==Ee.image.width||M.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(xe=!0);const Ge=Re.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?U=Ge[k][G]:U=Ge[k],oe=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?U=Re.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?U=Ge[G]:U=Ge,P.copy(M.viewport),N.copy(M.scissor),z=M.scissorTest}else P.copy(he).multiplyScalar(V).floor(),N.copy(Le).multiplyScalar(V).floor(),z=de;if(Ae.bindFramebuffer(F.FRAMEBUFFER,U)&&H&&Ae.drawBuffers(M,U),Ae.viewport(P),Ae.scissor(N),Ae.setScissorTest(z),oe){const Te=Re.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,G)}else if(xe){const Te=Re.get(M.texture),Ue=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,Ue)}S=-1},this.readRenderTargetPixels=function(M,k,G,H,U,oe,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){Ae.bindFramebuffer(F.FRAMEBUFFER,Se);try{const Te=M.texture,Ue=Te.format,Ge=Te.type;if(!me.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-H&&G>=0&&G<=M.height-U&&F.readPixels(k,G,H,U,Ve.convert(Ue),Ve.convert(Ge),oe)}finally{const Te=I!==null?Re.get(I).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,k,G,H,U,oe,xe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){const Te=M.texture,Ue=Te.format,Ge=Te.type;if(!me.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=M.width-H&&G>=0&&G<=M.height-U){Ae.bindFramebuffer(F.FRAMEBUFFER,Se);const Ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(k,G,H,U,Ve.convert(Ue),Ve.convert(Ge),0);const Ke=I!==null?Re.get(I).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Ke);const lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wh(F,lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(Ee),F.deleteSync(lt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,k=null,G=0){M.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-G),U=Math.floor(M.image.width*H),oe=Math.floor(M.image.height*H),xe=k!==null?k.x:0,Se=k!==null?k.y:0;E.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,xe,Se,U,oe),Ae.unbindTexture()},this.copyTextureToTexture=function(M,k,G=null,H=null,U=0){M.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],k=arguments[2],U=arguments[3]||0,G=null);let oe,xe,Se,Te,Ue,Ge,Ee,Ke,lt;const ct=M.isCompressedTexture?M.mipmaps[U]:M.image;G!==null?(oe=G.max.x-G.min.x,xe=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,Te=G.min.x,Ue=G.min.y,Ge=G.isBox3?G.min.z:0):(oe=ct.width,xe=ct.height,Se=ct.depth||1,Te=0,Ue=0,Ge=0),H!==null?(Ee=H.x,Ke=H.y,lt=H.z):(Ee=0,Ke=0,lt=0);const Bt=Ve.convert(k.format),Ze=Ve.convert(k.type);let Ie;k.isData3DTexture?(E.setTexture3D(k,0),Ie=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(E.setTexture2DArray(k,0),Ie=F.TEXTURE_2D_ARRAY):(E.setTexture2D(k,0),Ie=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const fi=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Yt=F.getParameter(F.UNPACK_SKIP_PIXELS),un=F.getParameter(F.UNPACK_SKIP_ROWS),Ot=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge);const Kn=M.isDataArrayTexture||M.isData3DTexture,dt=k.isDataArrayTexture||k.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const ri=Re.get(M),Zn=Re.get(k),Vt=Re.get(ri.__renderTarget),Ri=Re.get(Zn.__renderTarget);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Pi=0;Pi<Se;Pi++)Kn&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(M).__webglTexture,U,Ge+Pi),M.isDepthTexture?(dt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,U,lt+Pi),F.blitFramebuffer(Te,Ue,oe,xe,Ee,Ke,oe,xe,F.DEPTH_BUFFER_BIT,F.NEAREST)):dt?F.copyTexSubImage3D(Ie,U,Ee,Ke,lt+Pi,Te,Ue,oe,xe):F.copyTexSubImage2D(Ie,U,Ee,Ke,lt+Pi,Te,Ue,oe,xe);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Ie,U,Ee,Ke,lt,oe,xe,Se,Bt,Ze,ct.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,U,Ee,Ke,lt,oe,xe,Se,Bt,ct.data):F.texSubImage3D(Ie,U,Ee,Ke,lt,oe,xe,Se,Bt,Ze,ct):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Ee,Ke,oe,xe,Bt,Ze,ct.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Ee,Ke,ct.width,ct.height,Bt,ct.data):F.texSubImage2D(F.TEXTURE_2D,U,Ee,Ke,oe,xe,Bt,Ze,ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,fi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot),U===0&&k.generateMipmaps&&F.generateMipmap(Ie),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,k,G=null,H=null,U=0){return M.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,M=arguments[2],k=arguments[3],U=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,G,H,U)},this.initRenderTarget=function(M){Re.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,Ae.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Po{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new Po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Pa extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zt extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ld extends qn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new D,_o=new D,Xl=new ft,ss=new Yc,eo=new Co,hr=new D,ql=new D;class Lm extends yt{constructor(e=new Pt,t=new ld){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)yo.fromBufferAttribute(t,n-1),_o.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=yo.distanceTo(_o);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(n),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;Xl.copy(n).invert(),ss.copy(e.ray).applyMatrix4(Xl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=d.getX(x),w=d.getX(x+1),T=to(this,e,ss,l,p,w);T&&t.push(T)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(f),p=to(this,e,ss,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=to(this,e,ss,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=to(this,e,ss,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function to(o,e,t,i,n,s){const r=o.geometry.attributes.position;if(yo.fromBufferAttribute(r,n),_o.fromBufferAttribute(r,s),t.distanceSqToSegment(yo,_o,hr,ql)>i)return;hr.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(hr);if(!(l<e.near||l>e.far))return{distance:l,point:ql.clone().applyMatrix4(o.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:o}}class Es extends Lt{constructor(e,t,i,n,s,r,a,l,c){super(e,t,i,n,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ia extends Pt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new D,d=new Fe;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(r[h]/e+1)/2,d.y=(r[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xe extends Pt{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const d=[],u=[],h=[],f=[];let g=0;const x=[],m=i/2;let p=0;w(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function w(){const v=new D,R=new D;let A=0;const C=(t-e)/i;for(let I=0;I<=s;I++){const S=[],_=I/s,P=_*(t-e)+e;for(let N=0;N<=n;N++){const z=N/n,X=z*l+a,J=Math.sin(X),j=Math.cos(X);R.x=P*J,R.y=-_*i+m,R.z=P*j,u.push(R.x,R.y,R.z),v.set(J,C,j).normalize(),h.push(v.x,v.y,v.z),f.push(z,1-_),S.push(g++)}x.push(S)}for(let I=0;I<n;I++)for(let S=0;S<s;S++){const _=x[S][I],P=x[S+1][I],N=x[S+1][I+1],z=x[S][I+1];(e>0||S!==0)&&(d.push(_,P,z),A+=3),(t>0||S!==s-1)&&(d.push(P,N,z),A+=3)}c.addGroup(p,A,0),p+=A}function T(v){const R=g,A=new Fe,C=new D;let I=0;const S=v===!0?e:t,_=v===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*_,0),h.push(0,_,0),f.push(.5,.5),g++;const P=g;for(let N=0;N<=n;N++){const X=N/n*l+a,J=Math.cos(X),j=Math.sin(X);C.x=S*j,C.y=m*_,C.z=S*J,u.push(C.x,C.y,C.z),h.push(0,_,0),A.x=J*.5+.5,A.y=j*.5*_+.5,f.push(A.x,A.y),g++}for(let N=0;N<n;N++){const z=R+N,X=P+N;v===!0?d.push(X,X+1,z):d.push(X+1,X,z),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ni extends Xe{constructor(e=1,t=1,i=32,n=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,i,n,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Ni(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends Pt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],r=[];a(n),c(i),d(),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(s.slice(),3)),this.setAttribute("uv",new ot(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const T=new D,v=new D,R=new D;for(let A=0;A<t.length;A+=3)f(t[A+0],T),f(t[A+1],v),f(t[A+2],R),l(T,v,R,w)}function l(w,T,v,R){const A=R+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const S=w.clone().lerp(v,I/A),_=T.clone().lerp(v,I/A),P=A-I;for(let N=0;N<=P;N++)N===0&&I===A?C[I][N]=S:C[I][N]=S.clone().lerp(_,N/P)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){const _=Math.floor(S/2);S%2===0?(h(C[I][_+1]),h(C[I+1][_]),h(C[I][_])):(h(C[I][_+1]),h(C[I+1][_+1]),h(C[I+1][_]))}}function c(w){const T=new D;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(w),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function d(){const w=new D;for(let T=0;T<s.length;T+=3){w.x=s[T+0],w.y=s[T+1],w.z=s[T+2];const v=m(w)/2/Math.PI+.5,R=p(w)/Math.PI+.5;r.push(v,1-R)}g(),u()}function u(){for(let w=0;w<r.length;w+=6){const T=r[w+0],v=r[w+2],R=r[w+4],A=Math.max(T,v,R),C=Math.min(T,v,R);A>.9&&C<.1&&(T<.2&&(r[w+0]+=1),v<.2&&(r[w+2]+=1),R<.2&&(r[w+4]+=1))}}function h(w){s.push(w.x,w.y,w.z)}function f(w,T){const v=w*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function g(){const w=new D,T=new D,v=new D,R=new D,A=new Fe,C=new Fe,I=new Fe;for(let S=0,_=0;S<s.length;S+=9,_+=6){w.set(s[S+0],s[S+1],s[S+2]),T.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),A.set(r[_+0],r[_+1]),C.set(r[_+2],r[_+3]),I.set(r[_+4],r[_+5]),R.copy(w).add(T).add(v).divideScalar(3);const P=m(R);x(A,_+0,w,P),x(C,_+2,T,P),x(I,_+4,v,P)}}function x(w,T,v,R){R<0&&w.x===1&&(r[T]=w.x-1),v.x===0&&v.z===0&&(r[T]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.vertices,e.indices,e.radius,e.details)}}class La extends Da{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new La(e.radius,e.detail)}}class hn extends Pt{constructor(e=.5,t=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],d=[];let u=e;const h=(t-e)/n,f=new D,g=new Fe;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const p=s+m/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let x=0;x<n;x++){const m=x*(i+1);for(let p=0;p<i;p++){const w=p+m,T=w,v=w+i+1,R=w+i+2,A=w+1;a.push(T,v,A),a.push(v,R,A)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ut extends Pt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const d=[],u=new D,h=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const w=[],T=p/i;let v=0;p===0&&r===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(n+A*s)*Math.sin(r+T*a),u.y=e*Math.cos(r+T*a),u.z=e*Math.sin(n+A*s)*Math.sin(r+T*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),m.push(A+v,1-T),w.push(c++)}d.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const T=d[p][w+1],v=d[p][w],R=d[p+1][w],A=d[p+1][w+1];(p!==0||r>0)&&f.push(T,v,A),(p!==i-1||l<Math.PI)&&f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Io extends Pt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const r=[],a=[],l=[],c=[],d=new D,u=new D,h=new D;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const x=g/n*s,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const x=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,w=(n+1)*f+g;r.push(x,m,w),r.push(m,p,w)}this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bm extends Ct{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class $ extends qn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function io(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Fm(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function km(o){function e(n,s){return o[n]-o[s]}const t=o.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function jl(o,e,t){const i=o.length,n=new o.constructor(i);for(let s=0,r=0;r!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[r++]=o[a+l]}return n}function cd(o,e,t,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=o[n++];while(s!==void 0)}class Do{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){const a=i+r>>>1;e<t[a]?r=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Um extends Do{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rn,endingEnd:Rn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,a=n[s],l=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case Pn:s=e,a=2*t-i;break;case go:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pn:r=e,l=2*i-t;break;case go:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}const c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,w=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,T=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let R=0;R!==a;++R)s[R]=p*r[d+R]+w*r[c+R]+T*r[l+R]+v*r[u+R];return s}}class dd extends Do{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(n-t),u=1-d;for(let h=0;h!==a;++h)s[h]=r[c+h]*u+r[l+h]*d;return s}}class Nm extends Do{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Um(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(n!==void 0&&Fm(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Fo,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,h=u-i,f=u+i;for(let g=0;g!==i;++g){const x=t[u+g];if(x!==t[h+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*i,h=r*i;for(let f=0;f!==i;++f)t[h+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=ra;class Yn extends hi{constructor(e,t,i){super(e,t,i)}}Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=mo;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;class hd extends hi{}hd.prototype.ValueTypeName="color";class bo extends hi{}bo.prototype.ValueTypeName="number";class Om extends Do{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let d=c+a;c!==d;c+=4)qt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class gt extends hi{InterpolantFactoryMethodLinear(e){return new Om(this.times,this.values,this.getValueSize(),e)}}gt.prototype.ValueTypeName="quaternion";gt.prototype.InterpolantFactoryMethodSmooth=void 0;class $n extends hi{constructor(e,t,i){super(e,t,i)}}$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=mo;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;class an extends hi{}an.prototype.ValueTypeName="vector";class ps{constructor(e="",t=-1,i=[],n=Ta){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,a=i.length;r!==a;++r)t.push(Gm(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=i.length;s!==r;++s)t.push(hi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=km(l);l=jl(l,1,d),c=jl(c,1,d),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new bo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const u=d[1];let h=n[u];h||(n[u]=h=[]),h.push(c)}}const r=[];for(const a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,h,f,g,x){if(f.length!==0){const m=[],p=[];cd(f,m,p,g),m.length!==0&&x.push(new u(h,m,p))}},n=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let x=0;x<h[g].morphTargets.length;x++)f[h[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let w=0;w!==h[g].morphTargets.length;++w){const T=h[g];m.push(T.time),p.push(T.morphTarget===x?1:0)}n.push(new bo(".morphTargetInfluence["+x+"]",m,p))}l=f.length*r}else{const f=".bones["+t[u].name+"]";i(an,f+".position",h,"pos",n),i(gt,f+".quaternion",h,"rot",n),i(an,f+".scale",h,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zm(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bo;case"vector":case"vector2":case"vector3":case"vector4":return an;case"color":return hd;case"quaternion":return gt;case"bool":case"boolean":return Yn;case"string":return $n}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Gm(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zm(o.type);if(o.times===void 0){const t=[],i=[];cd(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}class As extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hm extends As{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ur=new ft,Yl=new D,$l=new D;class ud{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yl),$l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($l),t.updateMatrixWorld(),ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jl=new ft,os=new D,fr=new D;class Vm extends ud{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),i.position.copy(os),fr.copy(i.position),fr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fr),i.updateMatrixWorld(),n.makeTranslation(-os.x,-os.y,-os.z),Jl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}}class Wm extends As{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xm extends ud{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hn extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Xm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ba extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kl(){return performance.now()}class jm{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==n;++a)i[s+a]=i[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){qt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const r=this._workIndex*s;qt.multiplyQuaternionsFlat(e,r,e,t,e,i),qt.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){const r=1-n;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[i+r]*n}}}const Fa="\\[\\]\\.:\\/",Ym=new RegExp("["+Fa+"]","g"),ka="[^"+Fa+"]",$m="[^"+Fa.replace("\\.","")+"]",Jm=/((?:WC+[\/:])*)/.source.replace("WC",ka),Km=/(WCOD+)?/.source.replace("WCOD",$m),Zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ka),Qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ka),eg=new RegExp("^"+Jm+Km+Zm+Qm+"$"),tg=["material","materials","bones","map"];class ig{constructor(e,t,i){const n=i||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class nt{constructor(e,t,i){this.path=t,this.parsedPath=i||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,i):new nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ym,"")}static parseTrackName(e){const t=eg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);tg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[n];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=ig;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ng{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:Rn,endingEnd:Rn};for(let c=0;c!==r;++c){const d=s[c].createInterpolant(null);a[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ah,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,r=s/n,a=n/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ch:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(r),c[d].accumulateAdditive(a);break;case Ta:default:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(r),c[d].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const r=i===lh;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===rh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Pn,n.endingEnd=Pn):(e?n.endingStart=this.zeroSlopeAtStart?Pn:Rn:n.endingStart=go,t?n.endingEnd=this.zeroSlopeAtEnd?Pn:Rn:n.endingEnd=go)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const sg=new Float32Array(1);class og extends dn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let u=0;u!==s;++u){const h=n[u],f=h.name;let g=d[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;g=new jm(nt.create(i,f,x),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,a=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new dd(new Float32Array(2),new Float32Array(2),1,sg),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let r=typeof e=="string"?ps.findByName(n,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=Ta),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const d=new ng(this,r,t,i);return this._bindAction(d,c),this._addInactiveAction(d,a,s),d}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?ps.findByName(i,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const d=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=d,t[d]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const a=i[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const fd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Jn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rg=new Aa(-1,1,1,-1,0,1);class ag extends Pt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const lg=new ag;class Ua{constructor(e){this._mesh=new B(lg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cg extends Jn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ua(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zl extends Jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class dg extends Jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Fe);this._width=i.width,this._height=i.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ti}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cg(fd),this.copyPass.material.blending=Si,this.clock=new qm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zl!==void 0&&(r instanceof Zl?i=!0:r instanceof dg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ug extends Jn{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}}const fg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vn extends Jn{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,r,{type:Ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new si(s,r,{type:Ti});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new si(s,r,{type:Ti});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=fg;this.highPassUniforms=_s.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Fe(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=fd;this.copyUniforms=_s.clone(d.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:_r,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new Nt,this.fsQuad=new Ua(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Fe(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Vn.BlurDirectionX=new Fe(1,0);Vn.BlurDirectionY=new Fe(0,1);const pg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mg extends Jn{constructor(){super();const e=pg;this.uniforms=_s.clone(e.uniforms),this.material=new Bm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ua(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===va?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ic&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const rs={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class gg{constructor(){b(this,"camera");b(this,"targetPos",new D);b(this,"cameraAngle",0);this.camera=new Dt(rs.fov,window.innerWidth/window.innerHeight,5,800)}follow(e,t,i){let n=i-this.cameraAngle;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.cameraAngle+=n*rs.rotationSmoothing;const s=Math.sin(this.cameraAngle)*-28,r=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(e.x+s,e.y+rs.height,e.z+r),this.camera.position.lerp(this.targetPos,rs.positionSmoothing);const l=t.length()>.5?t.clone().normalize().multiplyScalar(rs.lookAheadDistance):new D(0,0,0),c=e.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class xg{constructor(){b(this,"boxes",[])}addBox(e,t,i,n){this.boxes.push({cx:e,cz:t,hw:i,hd:n})}resolveCircle(e,t,i){let n=e,s=t;for(const r of this.boxes){const a=r.hw+i,l=r.hd+i,c=n-r.cx,d=s-r.cz;if(Math.abs(c)<a&&Math.abs(d)<l){const u=a-Math.abs(c),h=l-Math.abs(d);u<h?n+=c<0?-u:u:s+=d<0?-h:h}}return{x:n,z:s}}}let ca=null,bs=null;async function vg(){async function e(t){const i=new Image;return new Promise(n=>{i.onload=()=>n(i.naturalWidth>0?i:null),i.onerror=()=>{console.warn("[LogoLoader] failed:",t),n(null)},i.src=t})}[ca,bs]=await Promise.all([e("./tem-logo.jpg"),e("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!ca,"| white-on-black:",!!bs)}function pd(o){const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d"),n=o>>16&255,s=o>>8&255,r=o&255,l=.299*n+.587*s+.114*r<128,c=l?bs:ca;if(c){i.drawImage(c,0,0,256,256);const d=i.getImageData(0,0,256,256),u=d.data;for(let h=0;h<u.length;h+=4){const f=.299*u[h]+.587*u[h+1]+.114*u[h+2];l?u[h+3]=Math.round(Math.min(255,f*1.4)):u[h+3]=Math.round(Math.min(255,(255-f)*1.4))}i.putImageData(d,0,0)}else yg(i,256,l);return new Es(t)}function md(o=512){const e=document.createElement("canvas");e.width=e.height=o;const t=e.getContext("2d");if(bs){t.drawImage(bs,0,0,o,o);const i=t.getImageData(0,0,o,o),n=i.data;for(let s=0;s<n.length;s+=4){const r=.299*n[s]+.587*n[s+1]+.114*n[s+2];n[s+3]=Math.round(Math.min(255,r*1.5))}t.putImageData(i,0,0)}else t.strokeStyle="#FFFFFF",t.fillStyle="#FFFFFF",gd(t,o);return new Es(e)}function yg(o,e,t){o.strokeStyle=t?"#FFFFFF":"#111111",o.fillStyle=t?"#FFFFFF":"#111111",gd(o,e)}function gd(o,e){const t=e/256;o.save(),o.scale(t,t),o.lineCap="round",o.lineWidth=6,o.beginPath(),o.arc(128,128,118,0,Math.PI*2),o.stroke(),o.lineWidth=11,o.beginPath(),o.moveTo(128,225),o.lineTo(128,148),o.stroke(),o.lineWidth=7,o.beginPath(),o.moveTo(128,148),o.lineTo(128,96),o.stroke();const i=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];o.lineWidth=4;for(const[n,s,r,a]of i)o.beginPath(),o.moveTo(n,s),o.lineTo(r,a),o.stroke(),o.beginPath(),o.arc(r,a,5,0,Math.PI*2),o.fill();o.restore()}class _g{constructor(){b(this,"renderer");b(this,"scene");b(this,"camera");b(this,"collisionWorld",new xg);b(this,"composer");b(this,"clouds",[]);b(this,"updateCallbacks",[]);b(this,"lastTime",0);b(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new Ra({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ec,this.renderer.toneMapping=va,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new Pa,this.scene.fog=new Po(8900331,.0025),this.camera=new gg,this.scene.add(this.camera.camera),this.composer=new hg(this.renderer),this.composer.addPass(new ug(this.scene,this.camera.camera));const e=new Vn(new Fe(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(e),this.composer.addPass(new mg);const t=new Ba(16777215,.5);this.scene.add(t);const i=new Hn(16774368,1.4);i.position.set(80,120,40),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=600,i.shadow.camera.left=-300,i.shadow.camera.right=300,i.shadow.camera.top=300,i.shadow.camera.bottom=-300,i.shadow.bias=-.001,this.scene.add(i);const n=new Hn(16771280,.5);n.position.set(-60,40,-80),this.scene.add(n);const s=new Hm(8900331,8943462,.3);this.scene.add(s),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(e,t,i=0){const n=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453123;return n-Math.floor(n)}getZone(e,t){return Math.abs(e)<80&&Math.abs(t)<80?"cbd":e<-80?"footscray":e>80?"richmond":t<-80?"stkilda":"brunswick"}pickBuildingType(e,t){const i={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},n=i[e]??i.brunswick,s=["A","B","C","D","E"];for(let r=0;r<n.length;r++)if(t<n[r])return s[r];return"D"}createCityGround(){const s=new $({color:8947840}),r=new B(new ht(2048,2048),s);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,this.scene.add(r);const a={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const d=l+20,u=c+40/2,h=this.getZone(d,u),g=this.seed(l,c,0)<.15?5929546:a[h],x=new $({color:g}),m=new B(new ht(30,30),x);m.rotation.x=-Math.PI/2,m.position.set(d,.005,u),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const n=new $({color:2763306}),s=new $({color:16777215}),r=new $({color:15777856}),a=new $({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const u=new B(new ht(480,8),n);u.rotation.x=-Math.PI/2,u.position.set(0,.01,c),u.receiveShadow=!0,this.scene.add(u);for(let h=-240;h<240;h+=40){const f=h+20;for(const g of[-1,1]){const x=new B(new ht(l,2),a);x.rotation.x=-Math.PI/2,x.position.set(f,.02,c+g*(8/2+1)),x.receiveShadow=!0,this.scene.add(x)}}for(const h of[-1,1]){const f=new B(new ht(480,.2),r);f.rotation.x=-Math.PI/2,f.position.set(0,.03,c+h*(8/2-.3)),this.scene.add(f)}for(let h=-240;h<=240;h+=8){const f=new B(new ht(4,.15),s);f.rotation.x=-Math.PI/2,f.position.set(h,.03,c),this.scene.add(f)}for(let h=-240;h<=240;h+=20)for(const f of[-1,1]){const g=h+(this.seed(h,c,50+f)-.5)*2,x=c+f*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,h*10+f,c*10+1)}for(let h=-232;h<240;h+=17){const f=this.seed(h,c,60);if(f>.45){const g=f>.72?1:-1,x=h+(this.seed(h,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(x,m,h+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const u=new B(new ht(8,480),n);u.rotation.x=-Math.PI/2,u.position.set(c,.01,0),u.receiveShadow=!0,this.scene.add(u);for(let h=-240;h<240;h+=40){const f=h+20;for(const g of[-1,1]){const x=new B(new ht(2,l),a);x.rotation.x=-Math.PI/2,x.position.set(c+g*(8/2+1),.02,f),x.receiveShadow=!0,this.scene.add(x)}}for(const h of[-1,1]){const f=new B(new ht(.2,480),r);f.rotation.x=-Math.PI/2,f.position.set(c+h*(8/2-.3),.03,0),this.scene.add(f)}for(let h=-240;h<=240;h+=8){const f=new B(new ht(.15,4),s);f.rotation.x=-Math.PI/2,f.position.set(c,.03,h),this.scene.add(f)}for(let h=-240;h<=240;h+=20)for(const f of[-1,1]){const g=c+f*5.5,x=h+(this.seed(c,h,52+f)-.5)*2,m=(x%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,c*10+2,h*10+f)}for(let h=-232;h<240;h+=17){const f=this.seed(c,h,62);if(f>.45){const g=f>.72?1:-1,x=c+g*(8/2+2),m=h+(this.seed(c,h,63)-.5)*4;this.addParkedCar(x,m,c+9,h+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let d=-240;d<240;d+=40)this.populateBlock(c,d,40,8)}addTree(e,t,i,n){const s=this.seed(i,n,99),r=s<.15?"palm":s<.5?"round":"layered",a=2+s*1.5,l=new $({color:6045747}),c=new B(new Xe(.25,.35,a,7),l);if(c.position.set(e,a/2,t),c.castShadow=!0,this.scene.add(c),r==="palm"){const d=new B(new Xe(.15,.22,6,6),new $({color:9139029}));d.position.set(e,3,t),this.scene.add(d);for(let u=0;u<6;u++){const h=u/6*Math.PI*2,f=new B(new Q(.15,.08,2.5),new $({color:2775578}));f.position.set(e+Math.cos(h)*1.2,6.5,t+Math.sin(h)*1.2),f.rotation.y=h,f.rotation.z=.4,this.scene.add(f)}}else if(r==="layered"){const d=[2973229,3829306,4881994];for(let u=0;u<3;u++){const h=2.2-u*.5,f=new B(new Ni(h,2,8),new $({color:d[u]}));f.position.set(e,a+1+u*1.5,t),f.castShadow=!0,this.scene.add(f)}}else{const d=s>.7?4025917:2973229,u=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let h=0;h<u.length;h++){const[f,g,x]=u[h],m=1.8+this.seed(i+h*17,n+h*13,103)*.8,p=new B(new ut(m,7,6),new $({color:d}));p.position.set(e+f,a+2.5+g,t+x),p.castShadow=!0,this.scene.add(p)}}}addParkedCar(e,t,i,n,s=0){const r=[13382451,3364300,11184810,14540253,2236962],a=Math.floor(this.seed(i,n,20)*r.length),l=new $({color:r[a]}),c=new B(new Q(1.5,1.2,3),l);c.position.set(e,.6,t),c.rotation.y=s,this.scene.add(c);const d=new $({color:2241348}),u=new B(new Q(1.4,.5,.1),d),h=-.9*Math.sin(s),f=-.9*Math.cos(s);u.position.set(e+h,1.3,t+f),u.rotation.y=s,this.scene.add(u)}populateBlock(e,t,i,n){const s=i-n-4,r=e+i/2,a=t+i/2,l=this.getZone(r,a),c=1+Math.floor(this.seed(e,t,1)*2);for(let d=0;d<c;d++){const u=this.seed(e+d*3,t+d*7,3),h=this.pickBuildingType(l,u);if(h==="E"){d===0&&this.buildTypeE(r,a,e,t);break}const f=s*.18,g=c>1?d===0?-f:f:0,x=g+(this.seed(e+d*5,t,4)-.5)*f*.3,m=g+(this.seed(e,t+d*5,5)-.5)*f*.3,p=e+d*11,w=t+d*13;switch(h){case"A":this.buildTypeA(r+x,a+m,p,w);break;case"B":this.buildTypeB(r+x,a+m,p,w);break;case"C":this.buildTypeC(r+x,a+m,p,w);break;case"D":this.buildTypeD(r+x,a+m,p,w);break}}}addBox(e,t,i,n,s,r,a,l,c=0,d=0,u=0){const h=new B(new Q(i,n,s),new $({color:t}));h.position.set(r,a,l),c!==0&&(h.rotation.x=c),d!==0&&(h.rotation.y=d),u!==0&&(h.rotation.z=u),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}addCyl(e,t,i,n,s,r,a,l,c){const d=new B(new Xe(i,n,s,r),new $({color:t}));d.position.set(a,l,c),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}registerBuildingCollider(e,t,i,n,s,r){const a=Math.floor(this.seed(s,r,101)*4)%4,l=a===1||a===3;this.collisionWorld.addBox(e,t,l?n:i,l?i:n)}buildTypeA(e,t,i,n){const s=this.C,r=new Ne;this.addBox(r,s.modernGrey,16,10,14,0,5,0),this.addBox(r,s.softWhite,16.4,.6,14.4,0,10.3,0);for(const u of[-5,0,5])this.addCyl(r,s.charcoal,.3,.3,3,6,u,1.5,-7);this.addBox(r,s.charcoal,14,.4,.4,0,3,-7);for(const u of[-4.5,0,4.5])this.addGlassBox(r,2241348,2.5,1.8,.15,u,7,-6.93);this.addBox(r,s.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(r,s.oliveGreen,13,.4,1,0,.7,-7.6);const a=this.seed(i,n,400),l=new $({color:a>.5?12876352:4876938}),c=new B(new Q(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,r.add(c);const d=new B(new Q(14,.3,.08),l);d.position.set(0,3.45,-8.45),r.add(d),this.addBox(r,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(r,16,14,10,i,n),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,8.5,7.5,i,n)}buildTypeB(e,t,i,n){const s=this.C,r=new Ne;this.addBox(r,s.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(r,s.terracotta,14,8,12,0,4,0),this.addBox(r,s.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(r,s.softWhite,15,.3,13,0,9.35,0);for(const a of[-3,3]){this.addBox(r,s.softWhite,1.6,2.6,.1,a,5,-5.99),this.addGlassBox(r,2241348,1.2,2.2,.2,a,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(r,s.charcoal,1,.08,.12,a,l,-5.68)}this.addBox(r,s.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(r,s.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(r,s.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(r,s.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(r,s.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(r,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(r,14,12,8,i,n),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,7.5,6.5,i,n)}buildTypeC(e,t,i,n){const s=this.C,r=new Ne,a=30+Math.floor(this.seed(i,n,31)*20);this.addBox(r,s.modernGrey,8,4,8,0,2,0),this.addBox(r,4478310,7.5,3.5,7.5,0,2,0),this.addBox(r,3359829,7,a,7,0,a/2,0);for(let l=4;l<=a;l+=4)this.addBox(r,s.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(r,s.charcoal,4,3,4,0,a+1.5,0),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,4.5,4.5,i,n)}buildTypeD(e,t,i,n){const s=this.C,r=new Ne;this.addBox(r,s.warmCream,13,7,11,0,3.5,0),this.addBox(r,s.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(r,s.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(r,s.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const a of[-.8,0,.8])this.addGlassBox(r,3359829,.7,2.5,.2,a,4,-7);this.addBox(r,s.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(r,s.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(r,s.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const a of[-3.5,3.5])this.addBox(r,s.softWhite,1.8,1.5,.1,a,5.5,-5.5),this.addGlassBox(r,3359829,1.5,1.2,.15,a,5.5,-5.55);this.addBox(r,s.deepClay,11,1,.3,0,.5,-6.65),this.addBox(r,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(r,13,11,7,i,n),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,7,6,i,n)}buildTypeE(e,t,i,n){this.C;const s=new Ne,r=12*Math.PI/180;this.addBox(s,6974050,22,4,18,0,2,0),this.addBox(s,1710614,22.1,.3,18.1,0,.15,0);const a=new B(new Q(22.5,.3,10),new $({color:1973786}));a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=r,a.position.set(0,4.5,-4.5),s.add(a);const l=new B(new Q(22.5,.3,10),new $({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-r,l.position.set(0,4.5,4.5),s.add(l),this.addBox(s,1118480,22.5,.5,.6,0,5.2,0);for(const f of[-2,.5,3])this.addBox(s,1118480,22.2,.08,.1,0,3.5,f);this.addBox(s,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(s,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(s,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(i,n,401),d=new $({color:c>.5?12876352:4876938}),u=new B(new Q(8,.1,1.5),d);u.position.set(0,4.2,-9.85),u.rotation.x=.15,s.add(u);const h=new B(new Q(8,.3,.08),d);h.position.set(0,3.85,-10.6),s.add(h);for(const f of[-3.5,3.5]){const g=new B(new Xe(.06,.06,4,5),new $({color:5592400}));g.position.set(f,2,-10.55),s.add(g)}this.addRooftopDetails(s,22,18,5.2,i,n),s.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),s.position.set(e,0,t),this.scene.add(s),this.registerBuildingCollider(e,t,11.5,9.5,i,n)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(e,t){const i=new Ne;this.addBox(i,13945786,18,4,14,0,2,0),this.addBox(i,2763306,20,4,15,0,7,0);for(const n of[-8,-5,-2,1,4,7])this.addBox(i,1710618,.15,4,15,n,7,0);this.addBox(i,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(i,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(i,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const n of[-4,0,4]){const s=new B(new Q(1.5,2.5,.15),new $({color:4478310,emissive:new Me(2241348),emissiveIntensity:.3}));s.position.set(n,7.5,-7.6),i.add(s)}this.addBox(i,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(i,13157564,2,.3,1,4,.15,-7.5),this.addBox(i,9072736,14,.4,1,0,.2,-8),this.addBox(i,5929546,12,.6,.8,0,.6,-8),i.position.set(e,0,t),this.scene.add(i)}buildHousePorthole(e,t){const i=new Ne;this.addBox(i,12104876,16,5.5,13,0,2.75,0),this.addBox(i,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let n=0;n<5;n++){const s=(n-2)*1.2;this.addBox(i,6965280,7,.2,.4,3.5,2.75+s,-6.55,0,0,Math.PI/7.2)}this.addBox(i,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(i,2763306,17,.5,14,0,5.95,0);{const n=new B(new Xe(1.4,1.4,.15,16),new $({color:8947848}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.7),i.add(n)}{const n=new B(new Xe(1.1,1.1,.1,16),new $({color:2241348,emissive:new Me(1122867),emissiveIntensity:.5}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.65),i.add(n)}this.addBox(i,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(i,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(i,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(i,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(i,3828282,10,.7,.8,0,.35,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracotta(e,t){const i=new Ne;this.addBox(i,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(i,12884602,17,7,14,0,3.5,0),this.addBox(i,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(i,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(i,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(i,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(i,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(i,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,-4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,-4,n,-7.1);this.addBox(i,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,4,n,-7.1);for(const n of[-2,2])this.addBox(i,3359829,.15,1.5,1,8.58,4,n),this.addBox(i,3359829,.15,1.5,1,-8.58,4,n);this.addBox(i,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(i,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(i,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(i,5933642,2,.5,.6,4,.65,-7.5);for(const n of[-6,-2,2,6])this.addBox(i,15262940,.8,.8,.2,n,8.4,-7.4);i.position.set(e,0,t),this.scene.add(i)}buildHouseLoggia(e,t){const i=new Ne;this.addBox(i,11578532,20,6,15,0,3,0),this.addBox(i,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(i,10131088,20,.4,3,0,3.2,-10);for(const n of[-7,-3,3,7])this.addCyl(i,8947840,.2,.2,3.2,8,n,1.6,-11);this.addBox(i,3359829,14,2,.2,0,4,-7.5),this.addBox(i,13157564,14.4,2.2,.15,0,4,-7.4);for(const n of[-5,0,5])this.addBox(i,8947840,.15,2,.2,n,4,-7.5);{const n=new B(new Q(2.4,2.8,.2),new $({color:3359829,emissive:new Me(1120290),emissiveIntensity:.2}));n.position.set(5,1.4,-7.5),i.add(n)}this.addBox(i,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(i,9074784,18,.5,2.5,0,.25,-9),this.addBox(i,4880970,16,.7,2,0,.65,-9),this.addBox(i,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(i,8947840,20,.3,.3,0,3.1,-11.8),i.position.set(e,0,t),this.scene.add(i)}buildHouseRokka(e,t){const i=new Ne;this.addBox(i,12892314,22,4.5,16,0,2.25,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(i,6969928,22.5,.6,.8,0,5.1,0),this.addBox(i,10127472,22.5,1,16.5,0,.5,0);{const n=new B(new Q(6,3.2,.2),new $({color:3359829,emissive:new Me(1120290),emissiveIntensity:.3}));n.position.set(0,1.6,-8.1),i.add(n)}this.addBox(i,8022618,6.4,3.5,.15,0,1.75,-8);for(const n of[-2,0,2])this.addBox(i,8947824,.1,3.2,.2,n,1.6,-8.1);this.addBox(i,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(i,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(i,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(i,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(i,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(i,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(i,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(i,11575432,20,.8,.3,0,.4,-10),i.position.set(e,0,t),this.scene.add(i)}buildHouseTimberStone(e,t){const i=new Ne;this.addBox(i,8947840,22,4,14,0,2,0),this.addBox(i,6710880,22.2,.4,14.2,0,.2,0),this.addBox(i,12088362,22,4.5,13,0,6.25,0);for(let n=0;n<8;n++)this.addBox(i,10116634,22.1,.12,13.1,0,4.3+n*.57,0);this.addBox(i,4870229,5,8.5,14.2,8.5,4.25,0);for(let n=0;n<12;n++){const s=n%2===0?3817541:5593696;this.addBox(i,s,5.1,.3,14.3,8.5,.5+n*.65,0)}this.addBox(i,2763306,22.5,.5,14.5,0,8.75,0);for(const n of[-6,-2,2]){this.addBox(i,1710618,2.8,3.2,.2,n,6,-6.6);const s=new B(new Q(2.4,2.9,.15),new $({color:9087675,emissive:new Me(2770005),emissiveIntensity:.2}));s.position.set(n,6,-6.6),i.add(s)}this.addBox(i,1710618,13,.15,.5,-3,8,-6.8),this.addBox(i,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const n of[-7,-4.5])this.addBox(i,1710618,2.2,1.8,.2,n,2,-7.1),this.addBox(i,3359829,1.8,1.5,.15,n,2,-7);this.addBox(i,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(i,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(i,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(i,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(i,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(i,1710618,8,.18,6,-9,4.1,-5),this.addCyl(i,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(i,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(i,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(i,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let n=5;n<=13;n+=.7)this.addBox(i,1710618,.12,1.6,.12,n,.8,-8.5);this.addBox(i,6710880,20,.8,.3,0,.4,-9.5),this.addBox(i,4870229,20,.35,.4,0,.18,-9.5);for(let n=0;n<5;n++)this.addBox(i,14540236,1.4,.08,.7,5,.05,-10.2+n*.9);this.addBox(i,4880954,8,.1,3,5,0,-9.8);for(const[n,s]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(i,5912608,.12,.15,2.5,6,n,1.25,s);const r=new B(new Ni(1,2.2,7),new $({color:3828266}));r.position.set(n,2.8,s),i.add(r)}this.addBox(i,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(i,3359829,3,1.5,.15,7.5,6.5,-6.55),i.position.set(e,0,t),this.scene.add(i)}buildHouseSculpturalPlaster(e,t){const i=new Ne,n=8686698,s=6976085,r=11842732,a=1118481;this.addBox(i,n,14,5.5,12,-3,2.75,0),this.addBox(i,n,7,3.5,12,9,1.75,0),this.addBox(i,s,.3,5.6,12,2.85,2.75,0);const l=new B(new Q(11,.35,12.4),new $({color:n}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),i.add(l);const c=new B(new Q(7.5,.35,12.4),new $({color:r}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),i.add(c),this.addBox(i,s,.6,.6,12.4,-3.2,10,0),this.addBox(i,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(i,a,2.6,4.3,.2,-3,2.1,-6.05);const d=new B(new Q(2,3.6,.12),new $({color:2767428,emissive:new Me(661538),emissiveIntensity:.3}));d.position.set(-3,2.1,-6.1),i.add(d),this.addBox(i,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(i,a,1.8,1.8,.18,8.5,2,-6.05),this.addBox(i,a,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(i,a,.4,.4,.4,6.5,3.4,-6.05);for(const f of[-6.5,6.5]){const g=new B(new Q(.5,.08,.3),new $({color:16772812,emissive:new Me(16764040),emissiveIntensity:.6}));g.position.set(f,f===-6.5?3.95:3.15,-6.07),i.add(g)}const u=8.5,h=-11;for(let f=-4;f<=4;f++){const g=f/4*40*Math.PI/180,x=u*Math.sin(g),m=h+u*(Math.cos(g)-1),p=new B(new Q(2,1.2,.35),new $({color:n}));p.rotation.y=g,p.position.set(x,.6,m),i.add(p);const w=new B(new Q(2,.12,.45),new $({color:12631720}));w.rotation.y=g,w.position.set(x,1.26,m),i.add(w)}this.addBox(i,s,2.5,.2,1,-3,.1,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseHaussmann(e,t){const i=new Ne,n=15261384,s=15788244,r=13154972,a=1118481;this.addBox(i,n,22,9.5,14,0,4.75,0);for(let d=0;d<5;d++)this.addBox(i,r,22.3,.14,14.3,0,.5+d*.88,0);for(let d=0;d<4;d++)this.addBox(i,r,22.3,.12,14.3,0,5.4+d*.85,0);this.addBox(i,s,22.6,.5,14.6,0,4.75,0),this.addBox(i,r,22.8,.2,14.8,0,5.05,0),this.addBox(i,n,22.5,.3,14.5,0,5.25,0),this.addBox(i,n,23.2,.5,15.2,0,9.75,0),this.addBox(i,s,22.8,.8,14.8,0,10.15,0),this.addBox(i,r,23.4,.25,15.4,0,10.55,0),this.addBox(i,s,4,11.5,4,-10,5.75,-6);for(let d=0;d<6;d++)this.addBox(i,r,4.2,.12,4.2,-10,.5+d*1.75,-6);this.addBox(i,n,4.4,.4,4.4,-10,5,-6),this.addBox(i,n,4.6,.4,4.6,-10,11.3,-6),this.addBox(i,s,4.4,.6,4.4,-10,11.75,-6),this.addBox(i,r,4.8,.25,4.8,-10,12.12,-6),this.addBox(i,n,2.5,1,2.5,-10,12.75,-6);for(const d of[-6.5,-1,4.5]){this.addBox(i,r,2,4.2,.5,d,2.1,-7.25),this.addBox(i,s,1.7,4,.2,d,2.1,-7.05);const u=new B(new Q(1.35,3.5,.12),new $({color:9087931,emissive:new Me(1714739),emissiveIntensity:.15}));u.position.set(d,2.1,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,d,3.2,-7.05)}for(const d of[-6.5,4.5]){this.addBox(i,r,2,3.8,.5,d,7.5,-7.25),this.addBox(i,s,1.7,3.5,.2,d,7.5,-7.05);const u=new B(new Q(1.35,3,.12),new $({color:9087931,emissive:new Me(1714739),emissiveIntensity:.15}));u.position.set(d,7.5,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,d,8.5,-7.05),this.addBox(i,n,3.4,.28,1.4,d,5.66,-7.9),this.addBox(i,r,3.5,.45,1.5,d,5.38,-7.95);for(let h=0;h<5;h++){const f=d-1.3+h*.65;this.addBox(i,a,.07,1,.07,f,6.2,-8.4)}this.addBox(i,a,3.2,.09,.09,d,6.72,-8.4),this.addBox(i,a,3.2,.09,.09,d,5.82,-8.4),this.addBox(i,a,.07,1,.07,d-1.3,6.2,-8.4,0,0,.35),this.addBox(i,a,.07,1,.07,d+1.3,6.2,-8.4,0,0,-.35)}this.addBox(i,s,5,6.5,.22,9.5,3.75,-7.05);const l=new B(new Q(4.5,6,.12),new $({color:9087931,emissive:new Me(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),i.add(l);for(let d=0;d<3;d++)this.addBox(i,s,5,.1,.15,9.5,1+d*2,-7);for(const d of[7.5,9.5,11.5])this.addBox(i,s,.1,6,.15,d,3.75,-7);this.addBox(i,r,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(i,s,2.8,4.8,.2,1.5,2.4,-7.1);const c=new B(new Q(2.2,4.2,.12),new $({color:9087931,emissive:new Me(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),i.add(c),this.addBox(i,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(i,r,22.5,.3,14.5,0,.15,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseAngularBay(e,t){const i=new Ne,n=15789022,s=12876378,r=3809296,a=1118481;this.addBox(i,n,18,4,13,0,2,0),this.addBox(i,n,18,4,12,0,6,0),this.addBox(i,n,8,4,2.5,5,6,-7.25),this.addBox(i,n,3,10,2.5,6.5,5,-7.5),this.addBox(i,s,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(i,s,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(i,r,1.5,.5,14.5,0,10.5,0),this.addBox(i,r,19,.3,13.5,0,8.05,0),this.addBox(i,r,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(i,a,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(i,a,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(i,a,2.4,.08,.08,-7.02,5,-6.7),i.position.set(e,0,t),this.scene.add(i)}buildHouseBrutalistCompound(e,t){const i=new Ne,n=10524792,s=8947840;this.addBox(i,n,7,7,11,-8.5,3.5,0),this.addBox(i,n,6,5,10,-1,2.5,.5),this.addBox(i,n,6,6,11,5.5,3,-.5),this.addBox(i,n,5,4,9,11,2,0),this.addBox(i,n,24,1.5,9,0,.75,.5),this.addBox(i,s,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(i,s,4,.25,2.5,5.5,6.25,-6.2),this.addBox(i,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(i,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(i,n,8,5,.4,2,2.5,-6.5,0,.26,0);const r=14,a=9,l=-Math.PI*.35,c=Math.PI*.35;for(let d=0;d<a;d++){const u=d/(a-1),h=l+(c-l)*u,f=Math.sin(h)*r,g=Math.cos(h)*r-r+4;this.addBox(i,n,3.5,1.5,.4,f,.75,g,0,-h,0)}for(const d of[-3,2.5]){this.addCyl(i,5913114,.15,.2,3,5,d,1.5,-4);const u=new B(new ut(1.2,6,5),new $({color:3828266}));u.position.set(d,4,-4),i.add(u)}i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracottaMonolith(e,t){const i=new Ne,n=12284e3,s=2759194,r=4880954;this.addBox(i,n,20,3,.5,0,1.5,-9.5),this.addBox(i,s,20.2,.1,.55,0,1,-9.5),this.addBox(i,s,20.2,.1,.55,0,2,-9.5),this.addBox(i,n,20,6,10,0,3,-2),this.addBox(i,s,20.2,.1,10.1,0,2,-2),this.addBox(i,s,20.2,.1,10.1,0,4,-2),this.addBox(i,n,20.3,.4,10.3,0,6.2,-2),this.addBox(i,r,18,.3,1.8,0,.15,-7.5);for(let a=-8;a<=8;a+=2.5){const l=new B(new Ni(.2,.8,5),new $({color:5933642}));l.position.set(a,.55,-7.5),i.add(l)}this.addBox(i,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(i,2241348,.8,3,.15,0,3.5,-7),i.position.set(e,0,t),this.scene.add(i)}buildHouseCurvedBalcony(e,t){const i=new Ne,n=15261900,s=15789544,r=11053216,a=1118481;this.addBox(i,n,16,4,12,0,2,0),this.addBox(i,s,16,4,12,0,6,0),this.addBox(i,s,16.5,.3,12.5,0,8.15,0),this.addBox(i,a,16.6,.2,12.6,0,8.3,0);const l=5,c=14,d=-Math.PI*.5,u=Math.PI*.5;for(let h=0;h<c;h++){const f=h/(c-1),g=d+(u-d)*f,x=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(i,r,1.3,2,.5,x,5.5,m,0,-g,0)}for(const h of[-5,0,5])this.addBox(i,4473924,2.5,2,.15,h,1.8,-6.1),this.addBox(i,2241348,2,1.6,.12,h,1.8,-6);this.addCyl(i,a,.1,.1,8,5,-8,4,-6.1),this.addCyl(i,a,.1,.1,8,5,8,4,-6.1),this.addBox(i,a,.3,.3,.3,-2,2.5,-6.15),this.addBox(i,s,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(i,a,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseCortenPlaster(e,t){const i=new Ne,n=4868682,s=12081696,r=3684408,a=9060368;this.addBox(i,n,12,8,11,-7,4,0),this.addBox(i,n,12.3,.4,11.3,-7,8.2,0),this.addBox(i,s,8,8.5,11,5,4.25,0),this.addBox(i,s,8.3,.4,11.3,5,8.7,0),this.addBox(i,r,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(i,a,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(i,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(i,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(i,9132587,.2,.3,8,6,-15,4,-3);const l=new B(new Ni(2.5,1.5,8),new $({color:2775578}));l.position.set(-15,8.75,-3),i.add(l),i.position.set(e,0,t),this.scene.add(i)}buildCoffeeShop(e,t){const i=new Ne;this.addBox(i,15788248,14,4,10,0,2,0),this.addBox(i,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(i,1118481,14.6,.38,10.6,0,4.19,0);for(const s of[-3.8,3.8]){this.addBox(i,1118481,4,3.8,.14,s,2.1,-5.08);const r=new B(new Q(3.5,3.4,.1),new $({color:13140032,emissive:new Me(10115616),emissiveIntensity:.7}));r.position.set(s,2.1,-5.06),i.add(r)}this.addBox(i,1118481,2,3,.14,0,1.5,-5.08),this.addBox(i,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(i,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(i,12876352,13.5,.28,4,0,3.22,-7),this.addBox(i,10770984,13.5,.6,.18,0,2.95,-9.05);for(const s of[-4.5,0,4.5])this.addCyl(i,8947832,.07,.07,3,5,s,1.5,-9.1);this.addBox(i,16777215,5,.36,.12,0,3.06,-8.96);for(const[s,r]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(i,9068608,.75,.75,.1,12,s,1.12,r),this.addCyl(i,6963232,.07,.07,1.12,6,s,.56,r);for(const a of[-1,1])this.addCyl(i,9068608,.32,.32,.09,8,s+a*.85,.82,r),this.addCyl(i,6963232,.05,.05,.82,5,s+a*.85,.41,r)}for(let s=0;s<5;s++)this.addCyl(i,16777215,.22-s*.008,.24-s*.008,.3,8,7.1,.22+s*.28,-3.5);this.addBox(i,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(i,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(i,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(i,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(i,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const s of[-4,0,4]){const r=new B(new Q(.25,.25,.25),new $({color:16764040,emissive:new Me(16755268),emissiveIntensity:.8}));r.position.set(s,3.7,-2),i.add(r)}this.addCyl(i,3355443,.3,.3,12,8,0,6,-8);const n=new B(new Q(10,3,.4),new $({color:13918762,emissive:new Me(9121808),emissiveIntensity:.6}));n.position.set(0,13,-8),n.castShadow=!0,i.add(n),this.addBox(i,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(i,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(i,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(i,7027242,.4,.4,.3,8,0,16.4,-8),i.position.set(e,0,t),this.scene.add(i)}buildWorkshop(e,t){const i=new Ne,n=4868676,s=2236960,r=15657176,a=3355440,l=1118480;this.addBox(i,n,30,8,20,0,4,0),this.addBox(i,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,d=new $({color:s}),u=new B(new Q(30.5,.35,11),d);u.castShadow=!0,u.rotation.x=c,u.position.set(0,8.6,-4.5),i.add(u);const h=new B(new Q(30.5,.35,11),d);h.castShadow=!0,h.rotation.x=-c,h.position.set(0,8.6,4.5),i.add(h),this.addBox(i,1118480,30.5,.55,.8,0,9.3,0),this.addBox(i,r,24,3.2,.45,0,7.4,-10.23),this.addBox(i,a,22,2.5,.28,0,7.4,-10.25),this.addBox(i,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(i,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(i,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(i,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(i,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(i,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(i,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(i,l,12,5,.25,0,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,6.2,2.5,-10.15);for(let v=1;v<=4;v++)this.addBox(i,1710616,11.8,.08,.28,0,v,-10.14);this.addBox(i,2236960,12.6,.4,.28,0,5.2,-10.14);const f=3359829;for(let v=-6;v<=6;v+=4)this.addBox(i,f,.16,1.2,2.8,15.09,7.2,v),this.addBox(i,f,.16,1.2,2.8,-15.09,7.2,v);this.addBox(i,2236960,.2,.18,20,15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,15.1,6.6,0),this.addBox(i,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(i,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,-15,4,10),this.addCyl(i,2236960,.12,.12,8,5,15,4,10),this.addCyl(i,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(i,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(i,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(i,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(i,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(i,9074776,6,1,2.2,0,.5,-9.2),this.addBox(i,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(i,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(i,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(i,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new B(new Xe(.75,.75,2.2,10),new $({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,i.add(g),this.addCyl(i,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(i,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(i,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(i,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const x=new $({color:10131600}),m=new B(new ht(20,8),x);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,i.add(m),this.addBox(i,r,.3,2.5,6,15.16,4,0),this.addBox(i,a,.32,2,5.5,15.17,4,0);const p=md(1024),w=new Nt({map:p,transparent:!0,depthWrite:!1,side:Ut}),T=new B(new ht(7,4.5),w);T.position.set(0,2.5,-10.29),i.add(T),i.position.set(e,0,t),this.scene.add(i),this.collisionWorld.addBox(e,t,15.5,10.5)}createZebraCrossings(){const e=new $({color:15658734}),t=new $({color:1118481});for(let i=-200;i<=200;i+=40)for(let n=-200;n<=200;n+=40){if(Math.abs(i)>200||Math.abs(n)>200)continue;const s=[-3.2,-1.6,0,1.6,3.2],r=[-2.4,-.8,.8,2.4],a=2;for(const l of s){const c=new B(new Q(.8,.03,a),e);c.position.set(i+l,.05,n-5),this.scene.add(c)}for(const l of r){const c=new B(new Q(.8,.03,a),t);c.position.set(i+l,.04,n-5),this.scene.add(c)}for(const l of s){const c=new B(new Q(.8,.03,a),e);c.position.set(i+l,.05,n+5),this.scene.add(c)}for(const l of r){const c=new B(new Q(.8,.03,a),t);c.position.set(i+l,.04,n+5),this.scene.add(c)}for(const l of s){const c=new B(new Q(a,.03,.8),e);c.position.set(i-5,.05,n+l),this.scene.add(c)}for(const l of r){const c=new B(new Q(a,.03,.8),t);c.position.set(i-5,.04,n+l),this.scene.add(c)}for(const l of s){const c=new B(new Q(a,.03,.8),e);c.position.set(i+5,.05,n+l),this.scene.add(c)}for(const l of r){const c=new B(new Q(a,.03,.8),t);c.position.set(i+5,.04,n+l),this.scene.add(c)}}}createRoadCorners(){const e=new $({color:13156528}),t=new $({color:11051160}),i=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let n=-200;n<=200;n+=40)for(let s=-200;s<=200;s+=40)for(const{dx:r,dz:a,theta:l}of i){const c=n+r,d=s+a,u=new B(new Ia(2,24,l,Math.PI/2),e);u.rotation.x=-Math.PI/2,u.position.set(c,.021,d),u.receiveShadow=!0,this.scene.add(u);const h=new B(new hn(1.8,2,24,1,l,Math.PI/2),t);h.rotation.x=-Math.PI/2,h.position.set(c,.08,d),h.receiveShadow=!0,this.scene.add(h)}}onUpdate(e){this.updateCallbacks.push(e)}createSkyDome(){const e=new ut(800,32,16);e.scale(-1,1,1);const t=new Ct({uniforms:{topColor:{value:new Me(4491468)},bottomColor:{value:new Me(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,side:Rt,depthWrite:!1}),i=new B(e,t);this.scene.add(i)}createClouds(){const e=new $({color:16777215,transparent:!0,opacity:.85});for(let t=0;t<10;t++){const i=new Ne,n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const r=8+Math.random()*12,a=new B(new ut(r,7,5),e);a.position.set(s*15-n*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),i.add(a)}i.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(i),this.clouds.push({mesh:i,speed:.3+Math.random()*.7})}}createPuddles(){const e=new $({color:8952234,transparent:!0,opacity:.35});for(let t=0;t<20;t++){const i=2+Math.random()*4,n=1+Math.random()*2,s=new B(new ht(i,n),e);s.rotation.x=-Math.PI/2,s.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(s)}}addRooftopDetails(e,t,i,n,s,r){const a=this.seed(s,r,200);if(a>.3){const l=new Ne;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(t/2-2,n+.3,i/2-2),e.add(l)}if(a>.7&&n>8){const l=new B(new Xe(1,1,1.8,10),new $({color:9139029}));l.position.set(-t/2+2,n+.9,0),e.add(l);for(const[c,d]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const u=new B(new Xe(.06,.06,1.5,4),new $({color:5592400}));u.position.set(-t/2+2+c,n+.1,d),e.add(u)}}if(a>.5&&a<.8){const l=new B(new ut(.4,8,4,0,Math.PI*2,0,Math.PI/2),new $({color:13421772}));l.position.set(t/2-1,n+.2,-i/2+1),l.rotation.x=-Math.PI/4,e.add(l)}if(a<.4){const l=new B(new Xe(.04,.04,3,4),new $({color:4473924}));l.position.set(0,n+1.5,0),e.add(l),this.addBox(e,4473924,2,.05,.05,0,n+2.5,0)}a>.4&&a<.6&&this.addBox(e,7829360,2,.4,.4,t/4,n+.2,-i/4)}addHydrant(e,t){const i=new Ne,n=new $({color:13378082}),s=new $({color:11145489}),r=new B(new Xe(.25,.28,.6,8),n);r.position.set(0,.3,0),i.add(r);const a=new B(new Xe(.18,.18,.12,8),s);a.position.set(0,.66,0),i.add(a);for(const l of[-1,1]){const c=new B(new Xe(.06,.06,.2,6),n);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),i.add(c)}i.position.set(e,0,t),this.scene.add(i)}addBin(e,t){const i=new Ne,n=new $({color:4473924}),s=new $({color:5592405}),r=new B(new Xe(.2,.22,.7,8),n);r.position.set(0,.35,0),i.add(r);const a=new B(new Xe(.22,.22,.08,8),s);a.position.set(0,.74,0),i.add(a),i.position.set(e,0,t),this.scene.add(i)}addBollard(e,t){const i=new Ne,n=new $({color:10066329}),s=new $({color:7829367}),r=new B(new Xe(.1,.1,.6,8),n);r.position.set(0,.3,0),i.add(r);const a=new B(new Xe(.14,.14,.08,8),s);a.position.set(0,.04,0),i.add(a),i.position.set(e,0,t),this.scene.add(i)}addBench(e,t,i=0){const n=new Ne,s=new $({color:9134144}),r=new $({color:5592405}),a=new B(new Q(1.2,.1,.4),s);a.position.set(0,.45,0),n.add(a);for(const c of[-.5,.5]){const d=new B(new Q(.05,.4,.4),r);d.position.set(c,.2,0),n.add(d)}const l=new B(new Q(1.2,.3,.08),s);l.position.set(0,.75,-.16),n.add(l),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addBusStop(e,t,i=0){const n=new Ne,s=new $({color:13421772}),r=new $({color:4482730,transparent:!0,opacity:.7}),a=new B(new Xe(.05,.05,3.5,6),s);a.position.set(0,1.75,0),n.add(a);const l=new B(new Q(2,.05,.8),r);l.position.set(0,3.3,.4),n.add(l);const c=new B(new Q(.05,2.5,.8),r);c.position.set(0,2,0),n.add(c),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addStreetLight(e,t,i=0,n=!1){const s=new Ne,r=new $({color:1118481}),a=new $({color:16771232,transparent:!0,opacity:.06}),l=new B(new Xe(.08,.1,6,6),r);l.position.set(0,3,0),s.add(l);const c=new B(new Q(.08,.08,1.5),r);c.position.set(0,6,-.75),c.rotation.x=-.2,s.add(c);const d=new B(new Q(.4,.15,.3),r);d.position.set(0,5.9,-1.4),s.add(d);const u=new B(new Ni(1.5,3,8,1,!0),a);if(u.rotation.x=Math.PI,u.position.set(0,4.4,-1.4),s.add(u),s.rotation.y=i,s.position.set(e,0,t),this.scene.add(s),n){const h=new Wm(16771232,.8,15);h.position.set(e+Math.sin(i+Math.PI)*1.4,5.9,t+Math.cos(i+Math.PI)*1.4),this.scene.add(h)}}addTrafficLight(e,t,i=0){const n=new Ne,s=new $({color:1118481}),r=new B(new Xe(.07,.09,4.5,6),s);r.position.set(0,2.25,0),n.add(r);const a=new B(new Q(.5,1.4,.4),s);a.position.set(0,4.7,0),n.add(a);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const d=new B(new Xe(.15,.15,.08,8),new $({color:l[c]}));d.rotation.x=Math.PI/2,d.position.set(0,5.25-c*.45,-.21),n.add(d)}n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}createStreetLights(){let i=0;const n=20;for(let s=-160;s<=160;s+=40)for(let r=-160;r<=160;r+=20){const c=Math.sqrt(s*s+r*r)<80&&i<n,d=(r%40+40)%40;Math.min(d,40-d)>6&&(this.addStreetLight(r,s-5.2,0,c),this.addStreetLight(r,s+5.2,Math.PI,c),c&&(i+=2));const u=(r%40+40)%40;if(Math.min(u,40-u)>6&&(this.addStreetLight(s+5.2,r,Math.PI/2,c),this.addStreetLight(s-5.2,r,-Math.PI/2,c),c&&(i+=2)),i>=n)return}}createTrafficLights(){for(let n=-160;n<=160;n+=40)for(let s=-160;s<=160;s+=40)this.addTrafficLight(n-5.2,s-5.2,Math.PI/4),this.addTrafficLight(n+5.2,s-5.2,-Math.PI/4),this.addTrafficLight(n-5.2,s+5.2,3*Math.PI/4),this.addTrafficLight(n+5.2,s+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=20){const s=this.seed(i,n,300),r=this.seed(i,n,301);if(s>.4){const c=s>.7?1:-1,d=(this.seed(n,i,302)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(r<.3?this.addHydrant(n+d,i+c*5.2):r<.5?this.addBin(n+d,i+c*5.2):r<.65?this.addBollard(n+d,i+c*5.2):r<.75&&this.addBench(n+d,i+c*5.2))}const a=this.seed(n,i,303),l=this.seed(n,i,304);if(a>.4){const c=a>.7?1:-1,d=(this.seed(i,n,305)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(l<.3?this.addHydrant(i+c*5.2,n+d):l<.5?this.addBin(i+c*5.2,n+d):l<.65?this.addBollard(i+c*5.2,n+d):l<.75&&this.addBench(i+c*5.2,n+d,Math.PI/2))}}for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=160){const s=(n%40+40)%40;Math.min(s,40-s)>8&&this.addBusStop(n,i+5.5,0);const r=(n%40+40)%40;Math.min(r,40-r)>8&&this.addBusStop(i+5.5,n,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(e,t,i,n,s,r,a,l){const c=Math.random()>.6?new Me(2241348):new Me(1122867),d=new B(new Q(i,n,s),new $({color:t,emissive:c,emissiveIntensity:Math.random()*.4}));d.position.set(r,a,l),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}buildToiletBlock(e,t){const i=new Ne;this.addBox(i,11577496,10,3.5,8,0,1.75,0),this.addBox(i,10064008,11,.3,9,0,3.65,0),this.addBox(i,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(i,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(i,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(i,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(i,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(i,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(i,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(i,16777215,3,.25,.1,0,9,-5.38),this.addBox(i,16777215,3,.25,.1,0,8.5,-5.38);const n=new $({color:6600182,emissive:new Me(1402304),emissiveIntensity:.4}),s=new B(new ut(.7,8,6),n);s.position.set(0,10.5,-5.5),i.add(s),i.position.set(e,0,t),this.scene.add(i)}start(){const e=t=>{const i=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;for(const n of this.updateCallbacks)n(i);for(const n of this.clouds)n.mesh.position.x-=n.speed*i,n.mesh.position.x<-350&&(n.mesh.position.x=350);this.composer.render(),requestAnimationFrame(e)};requestAnimationFrame(e)}}const xd=.9,zi={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"topknot",glassesColor:2236962,hasPhone:!0},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class Cs{constructor(e){b(this,"group");b(this,"mixer");b(this,"walkAction");b(this,"idleAction");b(this,"currentAction");b(this,"logoMesh");this.group=new Ne,this._build(e),this.mixer=new og(this.group);const t=this._buildWalkClip(),i=this._buildIdleClip();this.walkAction=this.mixer.clipAction(t),this.idleAction=this.mixer.clipAction(i),this.idleAction.play(),this.currentAction=this.idleAction}_build(e){const t=new Zt;t.name="Hip",t.position.set(0,1,0);const i=new Zt;i.name="Spine",i.position.set(0,.55,0);const n=new Zt;n.name="Head",n.position.set(0,.65,0);const s=new Zt;s.name="LShoulder",s.position.set(-.4,.38,0);const r=new Zt;r.name="LForeArm",r.position.set(0,-.36,0);const a=new Zt;a.name="RShoulder",a.position.set(.4,.38,0);const l=new Zt;l.name="RForeArm",l.position.set(0,-.36,0);const c=new Zt;c.name="LHip",c.position.set(-.16,-.05,0);const d=new Zt;d.name="LKnee",d.position.set(0,-.5,0);const u=new Zt;u.name="RHip",u.position.set(.16,-.05,0);const h=new Zt;h.name="RKnee",h.position.set(0,-.5,0),t.add(i),i.add(n),i.add(s),s.add(r),i.add(a),a.add(l),t.add(c),c.add(d),t.add(u),u.add(h),this.group.add(t);const f=T=>new $({color:T}),g=(T,v,R,A,C,I=0,S=0,_=0)=>{const P=new B(new Q(R,A,C),f(v));P.position.set(I,S,_),P.castShadow=!0,T.add(P)},x=(T,v,R,A,C=0,I=0,S=0)=>{const _=new B(new Xe(R,R,A,8),f(v));_.position.set(C,I,S),_.castShadow=!0,T.add(_)},m=(T,v,R,A=0,C=0,I=0)=>{const S=new B(new ut(R,10,8),f(v));S.position.set(A,C,I),S.castShadow=!0,T.add(S)};g(i,e.shirtColor,.5,.56,.28,0,.02,0),e.hiVisBands&&(g(i,16777215,.52,.06,.3,0,.18,0),g(i,16777215,.52,.06,.3,0,-.1,0));const p=this._makeLogo(e),w=new B(new ht(.44,.5),new Nt({map:p,transparent:!0,depthWrite:!1}));if(w.position.set(0,.02,.145),i.add(w),this.logoMesh=w,g(t,e.pantsColor,.44,.2,.26,0,0,0),x(s,e.shirtColor,.08,.34,0,-.17,0),x(a,e.shirtColor,.08,.34,0,-.17,0),e.hiVisBands&&(g(s,16777215,.18,.06,.18,0,-.1,0),g(a,16777215,.18,.06,.18,0,-.1,0)),x(r,e.skinColor,.07,.3,0,-.15,0),x(l,e.skinColor,.07,.3,0,-.15,0),g(r,e.skinColor,.13,.11,.09,0,-.32,0),g(l,e.skinColor,.13,.11,.09,0,-.32,0),e.hasPhone){const T=new $({color:1118484}),v=new B(new Q(.11,.19,.013),T);v.position.set(.01,-.38,.05),l.add(v);const R=new $({color:2767445,emissive:1714756}),A=new B(new ht(.085,.15),R);A.position.set(0,0,.008),v.add(A)}x(c,e.pantsColor,.11,.46,0,-.23,0),x(u,e.pantsColor,.11,.46,0,-.23,0),x(d,e.pantsColor,.09,.42,0,-.21,0),x(h,e.pantsColor,.09,.42,0,-.21,0),g(d,1710616,.19,.12,.24,0,-.46,.03),g(h,1710616,.19,.12,.24,0,-.46,.03),x(n,e.skinColor,.09,.16,0,-.08,0),m(n,e.skinColor,.21,0,.1,0),g(n,2236962,.055,.035,.02,-.07,.12,.2),g(n,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(n,e,f),e.glassesColor!==void 0&&g(n,e.glassesColor,.24,.055,.015,0,.12,.21),e.helmetColor!==void 0&&(g(n,e.helmetColor,.5,.07,.5,0,.25,-.01),g(n,e.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(e,t,i){const n=i(t.hairColor),s=(r,a,l,c)=>{const d=new B(r,n);d.position.set(a,l,c),e.add(d)};switch(t.hairStyle){case"short":case"silver":s(new ut(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),t.hairStyle==="silver"&&(s(new Q(.11,.18,.13),-.19,.06,0),s(new Q(.11,.18,.13),.19,.06,0));break;case"dreadlocks":s(new ut(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[r,a]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])s(new Xe(.035,.022,.38,6),r,-.07,a);break;case"mohawk":s(new Q(.09,.26,.4),0,.28,0);break;case"bun":s(new ut(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),s(new ut(.09,7,6),0,.05,-.19);break;case"topknot":{s(new ut(.215,8,5,0,Math.PI*2,0,Math.PI*.45),0,.08,0);const r=new B(new Xe(.06,.08,.18,7),n);r.position.set(0,.3,0),e.add(r),s(new ut(.085,7,6),0,.41,0);const a=new $({color:1118481}),l=new B(new Io(.075,.018,6,10),a);l.rotation.x=Math.PI/2,l.position.set(0,.29,0),e.add(l);break}case"wildblonde":{s(new ut(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const r=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[a,l,c,d,u]of r){const h=new B(new Xe(.045,.02,.5,5),n);h.position.set(a,l,c),h.rotation.z=d,h.rotation.x=u,e.add(h)}break}}}setLogoTexture(e){const t=this.logoMesh.material;t.map=e,t.needsUpdate=!0}_makeLogo(e){return pd(e.shirtColor)}_buildWalkClip(){const e=Math.PI/180,t=.8,i=[0,.2,.4,.6,.8],n=(s,r=0,a=0)=>Array.from(new qt().setFromEuler(new Ht(s*e,r*e,a*e)).toArray());return new ps("walk",t,[new gt("LHip.quaternion",i,[...n(-35),...n(0),...n(35),...n(0),...n(-35)]),new gt("RHip.quaternion",i,[...n(35),...n(0),...n(-35),...n(0),...n(35)]),new gt("LKnee.quaternion",i,[...n(-5),...n(-18),...n(-28),...n(-12),...n(-5)]),new gt("RKnee.quaternion",i,[...n(-28),...n(-12),...n(-5),...n(-18),...n(-28)]),new gt("LShoulder.quaternion",i,[...n(28,0,8),...n(0,0,8),...n(-28,0,8),...n(0,0,8),...n(28,0,8)]),new gt("RShoulder.quaternion",i,[...n(-28,0,-8),...n(0,0,-8),...n(28,0,-8),...n(0,0,-8),...n(-28,0,-8)]),new gt("Hip.quaternion",i,[...n(0,0,4),...n(0,0,0),...n(0,0,-4),...n(0,0,0),...n(0,0,4)]),new an("Hip.position",i,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const e=Math.PI/180,t=2.4,i=[0,.6,1.2,1.8,2.4],n=(s,r=0,a=0)=>Array.from(new qt().setFromEuler(new Ht(s*e,r*e,a*e)).toArray());return new ps("idle",t,[new gt("Spine.quaternion",i,[...n(0,0,1),...n(0,0,0),...n(0,0,-1),...n(0,0,0),...n(0,0,1)]),new an("Hip.position",i,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new gt("LShoulder.quaternion",[0,2.4],[...n(0,0,8),...n(0,0,8)]),new gt("RShoulder.quaternion",[0,2.4],[...n(0,0,-8),...n(0,0,-8)])])}buildJumpRopeClip(){const e=Math.PI/180,t=xd,i=[0,.225,.45,.675,.9],n=(s,r=0,a=0)=>Array.from(new qt().setFromEuler(new Ht(s*e,r*e,a*e)).toArray());return new ps("jumprope",t,[new an("Hip.position",i,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new gt("LShoulder.quaternion",[0,.5],[...n(0,0,52),...n(0,0,52)]),new gt("RShoulder.quaternion",[0,.5],[...n(0,0,-52),...n(0,0,-52)]),new gt("LForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new gt("RForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new gt("LKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new gt("RKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new gt("Spine.quaternion",i,[...n(8),...n(2),...n(8),...n(2),...n(8)])])}setWalking(e){const t=e?this.walkAction:this.idleAction;t!==this.currentAction&&(t.reset().play(),this.currentAction.crossFadeTo(t,.2,!1),this.currentAction=t)}update(e){this.mixer.update(e)}}const bg={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},wg={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Been waiting fifteen minutes. Did you read the TDS? Because I did. Twice.","Hang on — just finishing something.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray. I looked it up.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done. Look, I've already typed up a plan.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one either.","This is interesting. Have you heard of this Epstein list thing?","Who designed this waypoint system? Actually — don't answer that. I'll figure it out."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["Ehhhh — in Italy, we do not rush the plaster. She knows when she is ready.","I am Fabio. You have heard of me, yes? Ehhhh — of course you have.","Last night I find a pizza place — thin base, wood fire, proper San Marzano. Ehhhh. I almost cry.","I have plastered villas in Tuscany. This job is also... acceptable. Ehhhh.","The colour must be chosen with the soul, not the brain. Ehhhh — the brain is for pizza toppings.","I put my heart into every wall. Same as I put my heart into a good margherita. Ehhhh.","Madonna mia, this surface has potential. Not as much potential as a good pizza, but still.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking. Ehhhh.","You want to know the secret of perfect render? Patience. Same as perfect pizza dough. Ehhhh — same thing.","I carry my trowel like a man carries his last slice. With respect. With both hands."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},Mg=15,Sg=12e3;class Tg{constructor(e){b(this,"scene");b(this,"crewMap",new Map);b(this,"lastDialogue",new Map);b(this,"dialogueIndex",new Map);this.scene=e}spawnCrewAtCityPositions(){for(const[e,t]of Object.entries(bg)){const i=zi[e];if(!i)continue;const n=new Cs(i);n.group.scale.set(2,2,2);const s=new Ne;s.add(n.group);const r=new B(new hn(1.2,1.6,32),new Nt({color:16763904,side:Ut}));r.rotation.x=-Math.PI/2,r.position.y=.05,s.add(r);const a=document.createElement("canvas");a.width=256,a.height=64;const l=a.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(e.toUpperCase(),128,32);const c=new B(new ht(2.2,.55),new Nt({map:new Es(a),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,s.add(c),s.position.set(t.x,0,t.z),this.scene.add(s),this.crewMap.set(e,{character:n,wrapper:s,pos:t}),this.lastDialogue.set(e,0),this.dialogueIndex.set(e,Math.floor(Math.random()*8))}}updateAll(e){for(const{character:t}of this.crewMap.values())t.update(e)}checkProximityDialogue(e,t){const i=Date.now();for(const[n,{wrapper:s,pos:r}]of this.crewMap.entries()){if(!s.visible)continue;const a=e-r.x,l=t-r.z;if(Math.sqrt(a*a+l*l)>Mg)continue;const c=this.lastDialogue.get(n)??0;if(i-c<Sg)continue;const d=wg[n];if(!d)continue;const u=this.dialogueIndex.get(n)??0,h=d[u%d.length];return this.dialogueIndex.set(n,u+1),this.lastDialogue.set(n,i),{name:n,line:h,pos:r}}return null}hideCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:e}of this.crewMap.values())e.visible=!0}showCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!0)}getCrewPosition(e){var t;return((t=this.crewMap.get(e))==null?void 0:t.pos)??{x:0,z:0}}dispose(){for(const{wrapper:e}of this.crewMap.values())this.scene.remove(e);this.crewMap.clear()}}class Eg{constructor(e){b(this,"mesh");b(this,"velocity",new D);b(this,"heading",0);b(this,"bodyGroup");b(this,"suspensionY",0);b(this,"suspensionVel",0);this.mesh=new Ne,this.bodyGroup=new Ne,this.mesh.add(this.bodyGroup);const t=new $({color:1118481}),i=new B(new Q(2.4,1.6,3.2),t);i.position.set(0,.8,.8),i.castShadow=!0,i.receiveShadow=!0,this.bodyGroup.add(i);const n=new $({color:1579032}),s=new B(new Q(2.4,1.4,1.6),n);s.position.set(0,.7,-1.6),s.castShadow=!0,s.receiveShadow=!0,this.bodyGroup.add(s);const r=new $({color:2241348}),a=new B(new Q(2,1,.1),r);a.rotation.x=-.18,a.position.set(0,1.15,-2.36),a.castShadow=!0,a.receiveShadow=!0,this.bodyGroup.add(a);const l=new $({color:1381653}),c=new B(new Q(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const d=new $({color:12674667}),u=new B(new Q(.05,.35,3),d);u.position.set(-1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const h=new B(new Q(.05,.35,3),d);h.position.set(1.23,.85,.5),h.castShadow=!0,h.receiveShadow=!0,this.bodyGroup.add(h);const f=new $({color:3359829}),g=new B(new Q(.05,.4,.5),f);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const x=new B(new Q(.05,.4,.5),f);x.position.set(1.22,1.1,-1.7),x.castShadow=!0,x.receiveShadow=!0,this.bodyGroup.add(x);const m=new $({color:3355443});for(const Ce of[-.3,.3]){const me=new B(new Q(.05,1.4,.1),m);me.position.set(Ce,.8,2.46),me.castShadow=!0,me.receiveShadow=!0,this.bodyGroup.add(me)}const p=new $({color:526344}),w=new B(new Q(.04,1.6,.05),p);w.position.set(-1.22,.8,-.8),this.bodyGroup.add(w);const T=new B(new Q(.04,1.6,.05),p);T.position.set(1.22,.8,-.8),this.bodyGroup.add(T);const v=new B(new Q(2.4,.04,.05),p);v.position.set(0,1.58,-.8),this.bodyGroup.add(v);const R=new $({color:1118481}),A=new $({color:3359829});for(const Ce of[-1,1]){const me=Ce*1.3,Ae=new B(new Q(.18,.12,.22),R);Ae.position.set(me,1.1,-1.7),this.bodyGroup.add(Ae);const Je=new B(new Q(.08,.1,.18),A);Je.position.set(me+Ce*.05,1.1,-1.7),this.bodyGroup.add(Je)}const C=new $({color:3355443});for(const Ce of[-.15,-.85]){const me=new B(new Q(2.1,.07,.07),C);me.position.set(0,1.78,Ce),this.bodyGroup.add(me)}for(const Ce of[-.95,.95]){const me=new B(new Q(.05,.05,.7),C);me.position.set(Ce,1.78,-.5),this.bodyGroup.add(me)}const I=md(512),S=new $({map:I,transparent:!0,depthWrite:!1}),_=new B(new ht(2,3.8),S);_.rotation.x=-Math.PI/2,_.position.set(0,1.8,.9),this.bodyGroup.add(_);const P=new $({color:8947848});for(const Ce of[-.6,.6]){const me=new B(new Q(.06,.06,.14),P);me.position.set(Ce,.85,2.52),this.bodyGroup.add(me)}const N=new B(new Q(2.4,.04,.06),p);N.position.set(0,1.2,2.47),this.bodyGroup.add(N);const z=new $({color:16733440}),X=new $({color:1118481}),J=new B(new Q(.05,.22,.82),z);J.position.set(-1.255,.86,.36),this.bodyGroup.add(J);const j=new B(new Q(.06,.05,.16),X);j.position.set(-1.262,.96,.12),this.bodyGroup.add(j);const te=new B(new Q(.06,.15,.05),X);te.position.set(-1.262,.86,.12),this.bodyGroup.add(te);const V=new B(new Q(.06,.18,.05),X);V.position.set(-1.262,.86,.38),this.bodyGroup.add(V);const re=new B(new Q(.06,.04,.13),X);re.position.set(-1.262,.95,.445),this.bodyGroup.add(re);const le=new B(new Q(.06,.04,.1),X);le.position.set(-1.262,.86,.43),this.bodyGroup.add(le);const he=new B(new Q(.06,.04,.13),X);he.position.set(-1.262,.77,.445),this.bodyGroup.add(he);const Le=new B(new Q(.06,.18,.05),X);Le.position.set(-1.262,.86,.61),this.bodyGroup.add(Le);const de=new B(new Q(.06,.18,.05),X);de.position.set(-1.262,.86,.73),this.bodyGroup.add(de);const W=new B(new Q(.06,.08,.13),X);W.position.set(-1.262,.92,.67),this.bodyGroup.add(W);const Z=new B(new Q(.05,.22,.82),z);Z.position.set(1.255,.86,.36),this.bodyGroup.add(Z);const ye=new Xe(.38,.38,.28,10),ae=new $({color:1118481}),ne=new $({color:8947848}),pe=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[Ce,me,Ae,Je]of pe){const Re=new B(ye,ae);Re.rotation.z=Math.PI/2,Re.position.set(Ce,me,Ae),Re.castShadow=!0,Re.receiveShadow=!0,this.mesh.add(Re);const E=new Xe(.2,.2,.06,10),y=new B(E,ne);y.rotation.z=Math.PI/2,y.position.set(Ce+Je*.15,me,Ae),y.castShadow=!0,y.receiveShadow=!0,this.mesh.add(y);const O=new $({color:3355443}),K=new B(new Xe(.36,.38,.06,10),O);K.rotation.z=Math.PI/2,K.position.set(Ce+Je*.2,me,Ae),this.mesh.add(K);const ie=new $({color:1118481}),Y=new B(new Q(.14,.1,.82),ie);Y.position.set(Ce+Je*.07,me+.3,Ae),this.bodyGroup.add(Y)}const De=new $({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const Ce of[-.8,.8]){const me=new B(new Q(.35,.2,.08),De);me.position.set(Ce,.75,-2.41),me.castShadow=!0,me.receiveShadow=!0,this.bodyGroup.add(me)}const qe=new Nt({color:16777164,transparent:!0,opacity:.08,side:Rt}),Oe=new Ni(1.5,8,8,1,!0);for(const Ce of[-.6,.6]){const me=new B(Oe,qe);me.rotation.x=Math.PI/2,me.position.set(Ce,.7,-3),this.bodyGroup.add(me)}const rt=new $({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const Ce of[-.8,.8]){const me=new B(new Q(.3,.18,.06),rt);me.position.set(Ce,.75,2.47),me.castShadow=!0,me.receiveShadow=!0,this.bodyGroup.add(me)}const F=new $({color:3355443}),mt=new B(new Q(2,.08,.8),F);mt.position.set(0,1.77,-.5),mt.castShadow=!0,mt.receiveShadow=!0,this.bodyGroup.add(mt),this.mesh.position.set(0,0,0),e.add(this.mesh)}triggerBump(e){this.suspensionVel=-e*6}updateSuspension(e){const t=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=t*e,this.suspensionY+=this.suspensionVel*e,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const ai={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},Ql=40,Ag=4,Cg=30,Rg=.8;function Pg(o){for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return o}function Ig(o){return Math.round(o/Ql)*Ql}function ec(o,e){let t=0;const i=Ig((o+e)*.5);for(const n of[-1,1]){const s=i+n*Ag;(o-s)*(e-s)<0&&t++}return t}class Dg{constructor(e,t,i,n,s){b(this,"van");b(this,"input");b(this,"_speed",0);b(this,"velocityAngle",0);b(this,"prevPos",new D);b(this,"onBump");b(this,"onBuildingHit");b(this,"collisionWorld");b(this,"COLL_GRID",40);b(this,"COLL_ROAD_HALF",6.5);this.van=e,this.input=t,this.onBump=i,this.collisionWorld=n,this.onBuildingHit=s,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(e){var l;this.prevPos.copy(this.van.mesh.position);const t=Math.abs(this._speed);if(this.input.forward&&(this._speed+=ai.acceleration*e),this.input.brake&&(this._speed-=ai.reverseForce*e),this._speed*=Math.pow(ai.friction,e*60),this._speed=Math.max(-80*.5,Math.min(ai.maxSpeed,this._speed)),t>ai.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,d=Math.min(1,t/15);this.van.heading+=c*ai.steerRate*d*Math.sign(this._speed)*e}const i=Math.min(t/ai.maxSpeed,1),n=ai.gripAtLowSpeed+(ai.gripAtHighSpeed-ai.gripAtLowSpeed)*i,s=Pg(this.van.heading-this.velocityAngle);this.velocityAngle+=s*n*e;const r=new D(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(r).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(e)),this.van.mesh.rotation.y=-this.van.heading;const a=245;if(this.van.mesh.position.x=Math.max(-a,Math.min(a,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-a,Math.min(a,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(e){const t=(e%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(t,this.COLL_GRID-t)}isOnRoad(e,t){const i=this.distToNearestRoad(e),n=this.distToNearestRoad(t);return i<this.COLL_ROAD_HALF||n<this.COLL_ROAD_HALF}resolveCollision(e,t,i,n){return this.isOnRoad(i,n)?{x:i,z:n}:this.isOnRoad(e,n)?{x:e,z:n}:this.isOnRoad(i,t)?{x:i,z:t}:{x:e,z:t}}applyImpulse(e,t){this._speed*=.5,this.van.mesh.position.x+=e*.1,this.van.mesh.position.z+=t*.1}_checkCurbCrossings(){const e=this.van.mesh.position,t=this.prevPos,i=ec(t.x,e.x),n=ec(t.z,e.z);if(i+n===0)return;const a=Math.abs(this._speed)/Cg,l=Math.max(Rg,Math.min(1,a));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const fo=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return Math.sqrt(t*t+i*i)},Lg=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return Fg(Math.atan2(i,t))},Bg=(o,e,t)=>{const i={x:0,y:0};return t=da(t),i.x=o.x-e*Math.cos(t),i.y=o.y-e*Math.sin(t),i},da=o=>o*(Math.PI/180),Fg=o=>o*(180/Math.PI),kg=o=>isNaN(o.buttons)?o.pressure!==0:o.buttons!==0,pr=new Map,tc=o=>{pr.has(o)&&clearTimeout(pr.get(o)),pr.set(o,setTimeout(o,100))},wo=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.addEventListener?o.addEventListener(n,t,!1):o.attachEvent&&o.attachEvent(n,t)},ic=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.removeEventListener?o.removeEventListener(n,t):o.detachEvent&&o.detachEvent(n,t)},vd=o=>(o.preventDefault(),o.type.match(/^touch/)?o.changedTouches:o),nc=()=>{const o=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:o,y:e}},sc=(o,e)=>{e.top||e.right||e.bottom||e.left?(o.style.top=e.top,o.style.right=e.right,o.style.bottom=e.bottom,o.style.left=e.left):(o.style.left=e.x+"px",o.style.top=e.y+"px")},Na=(o,e,t)=>{const i=yd(o);for(let n in i)if(i.hasOwnProperty(n))if(typeof e=="string")i[n]=e+" "+t;else{let s="";for(let r=0,a=e.length;r<a;r+=1)s+=e[r]+" "+t+", ";i[n]=s.slice(0,-2)}return i},Ug=(o,e)=>{const t=yd(o);for(let i in t)t.hasOwnProperty(i)&&(t[i]=e);return t},yd=o=>{const e={};return e[o]="",["webkit","Moz","o"].forEach(function(i){e[i+o.charAt(0).toUpperCase()+o.slice(1)]=""}),e},mr=(o,e)=>{for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o},Ng=(o,e)=>{const t={};for(let i in o)o.hasOwnProperty(i)&&e.hasOwnProperty(i)?t[i]=e[i]:o.hasOwnProperty(i)&&(t[i]=o[i]);return t},ha=(o,e)=>{if(o.length)for(let t=0,i=o.length;t<i;t+=1)e(o[t]);else e(o)},Og=(o,e,t)=>({x:Math.min(Math.max(o.x,e.x-t),e.x+t),y:Math.min(Math.max(o.y,e.y-t),e.y+t)});var zg="ontouchstart"in window,Gg=!!window.PointerEvent,Hg=!!window.MSPointerEvent,as={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Dn,ws={};Gg?Dn=as.pointer:Hg?Dn=as.MSPointer:zg?(Dn=as.touch,ws=as.mouse):Dn=as.mouse;function Ci(){}Ci.prototype.on=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]=t._handlers_[n]||[],t._handlers_[n].push(e);return t};Ci.prototype.off=function(o,e){var t=this;return t._handlers_=t._handlers_||{},o===void 0?t._handlers_={}:e===void 0?t._handlers_[o]=null:t._handlers_[o]&&t._handlers_[o].indexOf(e)>=0&&t._handlers_[o].splice(t._handlers_[o].indexOf(e),1),t};Ci.prototype.trigger=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]&&t._handlers_[n].length&&t._handlers_[n].forEach(function(r){r.call(t,{type:n,target:t},e)})};Ci.prototype.config=function(o){var e=this;e.options=e.defaults||{},o&&(e.options=Ng(e.options,o))};Ci.prototype.bindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},wo(o,Dn[e],t._domHandlers_[e]),ws[e]&&wo(o,ws[e],t._domHandlers_[e]),t};Ci.prototype.unbindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},ic(o,Dn[e],t._domHandlers_[e]),ws[e]&&ic(o,ws[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function wt(o,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=o,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=wt.id,wt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}wt.prototype=new Ci;wt.constructor=wt;wt.id=0;wt.prototype.buildEl=function(o){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};wt.prototype.stylize=function(){if(this.options.dataOnly)return this;var o=this.options.fadeTime+"ms",e=Ug("borderRadius","50%"),t=Na("transition","opacity",o),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},mr(i.el,t),this.options.shape==="circle"&&mr(i.back,e),mr(i.front,e),this.applyStyles(i),this};wt.prototype.applyStyles=function(o){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in o[e])this.ui[e].style[t]=o[e][t];return this};wt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};wt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};wt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};wt.prototype.show=function(o){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof o=="function"&&o.call(this)},e.options.fadeTime)),e};wt.prototype.hide=function(o){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof o=="function"&&o.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,i={};i.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,i.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(o,i)}return e};wt.prototype.setPosition=function(o,e){var t=this;t.frontPosition={x:e.x,y:e.y};var i=t.options.fadeTime+"ms",n={};n.front=Na("transition",["transform"],i);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(n),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof o=="function"&&o.call(t),t.restCallback()},t.options.fadeTime)};wt.prototype.restCallback=function(){var o=this,e={};e.front=Na("transition","none",""),o.applyStyles(e),o.trigger("rested",o.instance)};wt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};wt.prototype.computeDirection=function(o){var e=o.angle.radian,t=Math.PI/4,i=Math.PI/2,n,s,r;if(e>t&&e<t*3&&!o.lockX?n="up":e>-t&&e<=t&&!o.lockY?n="left":e>-t*3&&e<=-t&&!o.lockX?n="down":o.lockY||(n="right"),o.lockY||(e>-i&&e<i?s="left":s="right"),o.lockX||(e>0?r="up":r="down"),o.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:s,y:r,angle:n},o.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return o;(!c.x||!c.y)&&this.trigger("plain",o),c.x||this.trigger("plain:"+s,o),c.y||this.trigger("plain:"+r,o),c.angle||this.trigger("dir dir:"+n,o)}else this.resetDirection();return o};function xt(o,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=o,t.id=xt.id,xt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const i=getComputedStyle(t.options.zone.parentElement);return i&&i.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}xt.prototype=new Ci;xt.constructor=xt;xt.id=0;xt.prototype.prepareNipples=function(){var o=this,e=o.nipples;e.on=o.on.bind(o),e.off=o.off.bind(o),e.options=o.options,e.destroy=o.destroy.bind(o),e.ids=o.ids,e.id=o.id,e.processOnMove=o.processOnMove.bind(o),e.processOnEnd=o.processOnEnd.bind(o),e.get=function(t){if(t===void 0)return e[0];for(var i=0,n=e.length;i<n;i+=1)if(e[i].identifier===t)return e[i];return!1}};xt.prototype.bindings=function(){var o=this;o.bindEvt(o.options.zone,"start"),o.options.zone.style.touchAction="none",o.options.zone.style.msTouchAction="none"};xt.prototype.begin=function(){var o=this,e=o.options;if(e.mode==="static"){var t=o.createNipple(e.position,o.manager.getIdentifier());t.add(),o.idles.push(t)}};xt.prototype.createNipple=function(o,e){var t=this,i=t.manager.scroll,n={},s=t.options,r={x:t.parentIsFlex?i.x:i.x+t.box.left,y:t.parentIsFlex?i.y:i.y+t.box.top};if(o.x&&o.y)n={x:o.x-r.x,y:o.y-r.y};else if(o.top||o.right||o.bottom||o.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=o.top,a.style.right=o.right,a.style.bottom=o.bottom,a.style.left=o.left,a.style.position="absolute",s.zone.appendChild(a);var l=a.getBoundingClientRect();s.zone.removeChild(a),n=o,o={x:l.left+i.x,y:l.top+i.y}}var c=new wt(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:o,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(sc(c.ui.el,n),sc(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};xt.prototype.updateBox=function(){var o=this;o.box=o.options.zone.getBoundingClientRect()};xt.prototype.bindNipple=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};xt.prototype.pressureFn=function(o,e,t){var i=this,n=0;clearInterval(i.pressureIntervals[t]),i.pressureIntervals[t]=setInterval((function(){var s=o.force||o.pressure||o.webkitForce||0;s!==n&&(e.trigger("pressure",s),i.trigger("pressure "+e.identifier+":pressure",s),n=s)}).bind(i),100)};xt.prototype.onstart=function(o){var e=this,t=e.options,i=o;o=vd(o),e.updateBox();var n=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(r){if(Object.values(i.touches).findIndex(function(l){return l.identifier===r})<0){var a=[o[0]];a.identifier=r,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return ha(o,n),e.manager.bindDocument(),!1};xt.prototype.processOnStart=function(o){var e=this,t=e.options,i,n=e.manager.getIdentifier(o),s=o.force||o.pressure||o.webkitForce||0,r={x:o.pageX,y:o.pageY},a=e.getOrCreate(n,r);a.identifier!==n&&e.manager.removeIdentifier(a.identifier),a.identifier=n;var l=function(d){d.trigger("start",d),e.trigger("start "+d.id+":start",d),d.show(),s>0&&e.pressureFn(o,d,d.identifier),e.processOnMove(o)};if((i=e.idles.indexOf(a))>=0&&e.idles.splice(i,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var c=fo(r,a.position);if(c<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(o);return}}return a};xt.prototype.getOrCreate=function(o,e){var t=this,i=t.options,n;return/(semi|static)/.test(i.mode)?(n=t.idles[0],n?(t.idles.splice(0,1),n):i.mode==="semi"?t.createNipple(e,o):(console.warn("Coudln't find the needed nipple."),!1)):(n=t.createNipple(e,o),n)};xt.prototype.processOnMove=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.scroll;if(!kg(o)){this.processOnEnd(o);return}if(!n){console.error("Found zombie joystick with ID "+i),e.manager.removeIdentifier(i);return}if(t.dynamicPage){var r=n.el.getBoundingClientRect();n.position={x:s.x+r.left,y:s.y+r.top}}n.identifier=i;var a=n.options.size/2,l={x:o.pageX,y:o.pageY};t.lockX&&(l.y=n.position.y),t.lockY&&(l.x=n.position.x);var c=fo(l,n.position),d=Lg(l,n.position),u=da(d),h=c/a,f={distance:c,position:l},g,x;if(n.options.shape==="circle"?(g=Math.min(c,a),x=Bg(n.position,g,d)):(x=Og(l,n.position,a),g=fo(x,n.position)),t.follow){if(c>a){let T=l.x-x.x,v=l.y-x.y;n.position.x+=T,n.position.y+=v,n.el.style.top=n.position.y-(e.box.top+s.y)+"px",n.el.style.left=n.position.x-(e.box.left+s.x)+"px",c=fo(l,n.position)}}else l=x,c=g;var m=l.x-n.position.x,p=l.y-n.position.y;n.frontPosition={x:m,y:p},t.dataOnly||(n.ui.front.style.transform="translate("+m+"px,"+p+"px)");var w={identifier:n.identifier,position:l,force:h,pressure:o.force||o.pressure||o.webkitForce||0,distance:c,angle:{radian:u,degree:d},vector:{x:m/a,y:-p/a},raw:f,instance:n,lockX:t.lockX,lockY:t.lockY};w=n.computeDirection(w),w.angle={radian:da(180-d),degree:180-d},n.trigger("move",w),e.trigger("move "+n.id+":move",w)};xt.prototype.processOnEnd=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.removeIdentifier(n.identifier);n&&(t.dataOnly||n.hide(function(){t.mode==="dynamic"&&(n.trigger("removed",n),e.trigger("removed "+n.id+":removed",n),e.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(e.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),e.trigger("end "+n.id+":end",n),e.ids.indexOf(n.identifier)>=0&&e.ids.splice(e.ids.indexOf(n.identifier),1),e.actives.indexOf(n)>=0&&e.actives.splice(e.actives.indexOf(n),1),/(semi|static)/.test(t.mode)?e.idles.push(n):e.nipples.indexOf(n)>=0&&e.nipples.splice(e.nipples.indexOf(n),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};xt.prototype.onDestroyed=function(o,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};xt.prototype.destroy=function(){var o=this;o.unbindEvt(o.options.zone,"start"),o.nipples.forEach(function(t){t.destroy()});for(var e in o.pressureIntervals)o.pressureIntervals.hasOwnProperty(e)&&clearInterval(o.pressureIntervals[e]);o.trigger("destroyed",o.nipples),o.manager.unbindDocument(),o.off()};function St(o){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=nc(),e.config(o),e.prepareCollections();var t=function(){var n;e.collections.forEach(function(s){s.forEach(function(r){n=r.el.getBoundingClientRect(),r.position={x:e.scroll.x+n.left,y:e.scroll.y+n.top}})})};wo(window,"resize",function(){tc(t)});var i=function(){e.scroll=nc()};return wo(window,"scroll",function(){tc(i)}),e.collections}St.prototype=new Ci;St.constructor=St;St.prototype.prepareCollections=function(){var o=this;o.collections.create=o.create.bind(o),o.collections.on=o.on.bind(o),o.collections.off=o.off.bind(o),o.collections.destroy=o.destroy.bind(o),o.collections.get=function(e){var t;return o.collections.every(function(i){return t=i.get(e),!t}),t}};St.prototype.create=function(o){return this.createCollection(o)};St.prototype.createCollection=function(o){var e=this,t=new xt(e,o);return e.bindCollection(t),e.collections.push(t),t};St.prototype.bindCollection=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};St.prototype.bindDocument=function(){var o=this;o.binded||(o.bindEvt(document,"move").bindEvt(document,"end"),o.binded=!0)};St.prototype.unbindDocument=function(o){var e=this;(!Object.keys(e.ids).length||o===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};St.prototype.getIdentifier=function(o){var e;return o?(e=o.identifier===void 0?o.pointerId:o.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};St.prototype.removeIdentifier=function(o){var e={};for(var t in this.ids)if(this.ids[t]===o){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};St.prototype.onmove=function(o){var e=this;return e.onAny("move",o),!1};St.prototype.onend=function(o){var e=this;return e.onAny("end",o),!1};St.prototype.oncancel=function(o){var e=this;return e.onAny("end",o),!1};St.prototype.onAny=function(o,e){var t=this,i,n="processOn"+o.charAt(0).toUpperCase()+o.slice(1);e=vd(e);var s=function(a,l,c){c.ids.indexOf(l)>=0&&(c[n](a),a._found_=!0)},r=function(a){i=t.getIdentifier(a),ha(t.collections,s.bind(null,a,i)),a._found_||t.removeIdentifier(i)};return ha(e,r),!1};St.prototype.destroy=function(){var o=this;o.unbindDocument(!0),o.ids={},o.index=0,o.collections.forEach(function(e){e.destroy()}),o.off()};St.prototype.onDestroyed=function(o,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const oc=new St,Vg={create:function(o){return oc.create(o)},factory:oc};class Wg{constructor(){b(this,"keys",{});b(this,"steerAxis",0);b(this,"accelerating",!1);b(this,"braking",!1);b(this,"horn",!1);b(this,"joystickManager",null);b(this,"hornTimeout",null);window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(e),this.joystickManager=Vg.create({zone:e,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(s,r)=>{r.vector&&(this.steerAxis=r.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: rgba(220, 50, 50, 0.6);
      border: 3px solid rgba(255, 100, 100, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: monospace;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;
      z-index: 100;
      touch-action: none;
      user-select: none;
    `,t.textContent="REV",document.body.appendChild(t),t.addEventListener("touchstart",s=>{s.preventDefault(),this.braking=!0,t.style.background="rgba(220, 50, 50, 0.9)"},{passive:!1}),t.addEventListener("touchend",s=>{s.preventDefault(),this.braking=!1,t.style.background="rgba(220, 50, 50, 0.6)"},{passive:!1});const i=document.createElement("div");i.style.cssText=`
      position: fixed;
      bottom: 140px;
      right: 30px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: rgba(50, 200, 50, 0.6);
      border: 3px solid rgba(100, 255, 100, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: monospace;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;
      z-index: 100;
      touch-action: none;
      user-select: none;
    `,i.textContent="GAS",document.body.appendChild(i),i.addEventListener("touchstart",s=>{s.preventDefault(),this.accelerating=!0,i.style.background="rgba(50, 200, 50, 0.9)"},{passive:!1}),i.addEventListener("touchend",s=>{s.preventDefault(),this.accelerating=!1,i.style.background="rgba(50, 200, 50, 0.6)"},{passive:!1});const n=document.createElement("div");n.style.cssText=`
      position: fixed;
      bottom: 250px;
      right: 30px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: rgba(255, 200, 50, 0.6);
      border: 3px solid rgba(255, 230, 100, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: monospace;
      font-weight: bold;
      font-size: 20px;
      z-index: 100;
      touch-action: none;
      user-select: none;
    `,n.textContent="📯",document.body.appendChild(n),n.addEventListener("touchstart",s=>{s.preventDefault(),this.triggerHorn(),n.style.background="rgba(255, 200, 50, 0.95)",n.style.transform="scale(1.1)"},{passive:!1}),n.addEventListener("touchend",s=>{s.preventDefault(),n.style.background="rgba(255, 200, 50, 0.6)",n.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class Xg{constructor(){b(this,"level",0);b(this,"spillRateMultiplier",1);b(this,"onSpill");b(this,"container");b(this,"fill");b(this,"bucketEl");b(this,"_warningIcon");b(this,"isShaking",!1);b(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
        @keyframes bucketShake {
          0%   { transform: rotate(0deg);   }
          20%  { transform: rotate(-12deg); }
          40%  { transform: rotate(12deg);  }
          60%  { transform: rotate(-8deg);  }
          80%  { transform: rotate(8deg);   }
          100% { transform: rotate(0deg);   }
        }
        @keyframes spillFlash {
          0%   { background: rgba(255,0,0,0.6); }
          50%  { background: rgba(255,0,0,0.0); }
          100% { background: rgba(255,0,0,0.6); }
        }
        .bucket-shake {
          animation: bucketShake 0.4s ease-in-out infinite;
          display: inline-block;
        }
        .spill-flash {
          animation: spillFlash 0.3s ease-in-out 2;
        }
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",left:"10px",top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",zIndex:"999",userSelect:"none",pointerEvents:"none"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"26px",lineHeight:"1"}),this.container.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{position:"relative",width:"16px",height:"130px",background:"rgba(40,40,40,0.85)",borderRadius:"8px",overflow:"hidden",border:"1.5px solid rgba(255,255,255,0.2)",boxShadow:"0 2px 8px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{position:"absolute",bottom:"0",left:"0",width:"100%",height:"0%",borderRadius:"8px",transition:"height 0.05s linear",background:"#4caf50"}),e.appendChild(this.fill),this.container.appendChild(e);const t=document.createElement("div");t.textContent="🚨",Object.assign(t.style,{fontSize:"16px",lineHeight:"1",opacity:"0",transition:"opacity 0.3s"}),t._isWarning=!0,this.container.appendChild(t),this._warningIcon=t,document.body.appendChild(this.container),this.container.style.display="none"}setVisible(e){this.container.style.display=e?"flex":"none"}addSpill(e){this.level=Math.min(1,this.level+e)}update(e){var i;const t=this.level*100;if(this.fill.style.height=`${t}%`,this.level<.5){const n=this.level*2,s=Math.round(76+n*179),r=Math.round(175+n*60);this.fill.style.background=`linear-gradient(to right, rgb(${s},${r},50), rgb(${s},${r},50))`}else{const n=(this.level-.5)*2,s=255,r=Math.round(235-n*235);this.fill.style.background=`linear-gradient(to right, rgb(${s},${r},50), rgb(${s},${Math.round(r*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this._warningIcon.style.opacity="1",this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this._warningIcon.style.opacity="0",this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(i=this.onSpill)==null||i.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(e){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const gr=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],rc=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],sn=class sn{constructor(){b(this,"jobs",gr.map(e=>({...e})));b(this,"activeJob",null);b(this,"activePhase",1);b(this,"completedJobIds",new Set);b(this,"money",5e5);b(this,"travelTimer",0);b(this,"travelFailed",!1);b(this,"crewToPickup",[]);b(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(e=>!this.completedJobIds.has(e.id)&&e!==this.activeJob)}acceptJob(e){this.activeJob=e,this.activePhase=1,this.crewToPickup=this._pickCrew(e.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(e){return[...rc].sort(()=>Math.random()-.5).slice(0,Math.min(e,rc.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(e,t){const i=e-sn.WORKSHOP_POS.x,n=t-sn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(e){return!this.crewPickedUp.includes(e)&&this.crewToPickup.includes(e)&&this.crewPickedUp.push(e),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(e=>this.crewPickedUp.includes(e))}nextCrewNeeded(){for(const e of this.crewToPickup)if(!this.crewPickedUp.includes(e))return e;return null}tickTravel(e){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=e,this.travelTimer<=0){this.travelFailed=!0;const t=15e4;return this.money=Math.max(0,this.money-t),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:t}}return null}checkArrival(e,t){if(!this.activeJob||this.activePhase!==3)return null;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(e,t=1){const i=Math.round(e.pay*t);return this.money=Math.max(0,this.money+i),this.completedJobIds.add(e.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],i}distanceTo(e,t){if(!this.activeJob)return 0;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)}distanceToWorkshop(e,t){const i=e-sn.WORKSHOP_POS.x,n=t-sn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)}distanceToPoint(e,t,i,n){const s=e-i,r=t-n;return Math.sqrt(s*s+r*r)}generateContestedJob(){const e=this.getAvailableJobs(),t=e.length>0?e[Math.floor(Math.random()*e.length)]:gr[Math.floor(Math.random()*gr.length)];return{...t,id:`contested_${Date.now()}_${Math.floor(Math.random()*9999)}`,title:`⚔️ ${t.title}`,pay:Math.round(t.pay*1.5),isContested:!0,completed:!1}}getContestedJobs(){const e=[];return Math.random()<.2&&e.push(this.generateContestedJob()),e}};b(sn,"WORKSHOP_POS",{x:10,z:15});let Mo=sn;const ei=class ei{constructor(e){b(this,"marker");b(this,"diamond");b(this,"ring");b(this,"routeLine",null);b(this,"routeGeom",null);b(this,"scene");b(this,"time",0);b(this,"targetPos",null);this.scene=e,this.marker=new Ne;const t=new La(1,0),i=new $({color:ei.MARKER_COLOR,emissive:new Me(ei.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new B(t,i),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const n=new hn(.5,2,32),s=new Nt({color:ei.MARKER_COLOR,transparent:!0,opacity:.6,side:Ut,depthWrite:!1});this.ring=new B(n,s),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(e){if(this.targetPos=e,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),e===null){this.marker.visible=!1;return}this.marker.position.set(e.x,ei.BASE_HEIGHT,e.z),this.marker.visible=!0,this.routeGeom=new Pt;const t=new Float32Array(6);t[0]=e.x,t[1]=.05,t[2]=e.z,t[3]=e.x,t[4]=.05,t[5]=e.z,this.routeGeom.setAttribute("position",new oi(t,3));const i=new ld({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new Lm(this.routeGeom,i),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(e){this.setTarget((e==null?void 0:e.position)??null)}get currentTarget(){return this.targetPos?{...this.targetPos}:null}update(e,t,i){if(this.time+=e,!this.targetPos||!this.marker.visible)return;const n=Math.sin(this.time*2.2)*ei.BOB_AMP;this.marker.position.y=ei.BASE_HEIGHT+n,this.diamond.rotation.y=this.time*1.2;const s=this.time*.8%1,r=.5+s*2;this.ring.scale.set(r,r,1);const a=this.ring.material;if(a.opacity=(1-s)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,t,.05,i),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};b(ei,"MARKER_COLOR",12674667),b(ei,"BASE_HEIGHT",8),b(ei,"BOB_AMP",.5);let ua=ei;function qg(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}const jg={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},Yg={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class $g{constructor(e){b(this,"onAccept");b(this,"overlay");b(this,"visible",!1);b(this,"jobs",[]);if(this.onAccept=e,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(10, 10, 20, 0.88);
      z-index: 2000;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      overflow-y: auto;
      padding: 16px 12px 32px;
      font-family: system-ui, -apple-system, sans-serif;
      box-sizing: border-box;
    `,!document.getElementById("job-board-styles")){const t=document.createElement("style");t.id="job-board-styles",t.textContent=`
        .jb-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 16px;
          width: 100%;
          max-width: 480px;
          margin-bottom: 12px;
          box-sizing: border-box;
          transition: background 0.15s;
        }
        .jb-card:hover {
          background: rgba(255,255,255,0.10);
        }
        .jb-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 4px;
        }
        .jb-title {
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.2;
        }
        .jb-pay {
          color: #5EDB7D;
          font-size: 18px;
          font-weight: 800;
          white-space: nowrap;
        }
        .jb-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }
        .jb-badge {
          color: #aaa;
          font-size: 12px;
          font-weight: 600;
          background: rgba(255,255,255,0.08);
          border-radius: 6px;
          padding: 2px 8px;
        }
        .jb-emergency-badge {
          color: #ff6b6b;
          background: rgba(255,80,80,0.14);
        }
        .jb-client {
          color: #b0c4e8;
          font-size: 13px;
          font-style: italic;
          margin-bottom: 6px;
        }
        .jb-desc {
          color: #ccc;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .jb-accept-btn {
          background: #C1666B;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          letter-spacing: 0.5px;
          transition: background 0.15s, transform 0.1s;
          min-height: 48px;
        }
        .jb-accept-btn:hover {
          background: #d4787d;
          transform: translateY(-1px);
        }
        .jb-accept-btn:active {
          transform: translateY(0);
          background: #a54f54;
        }
        .jb-close-btn {
          position: sticky;
          top: 0;
          align-self: flex-end;
          background: rgba(255,255,255,0.12);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 10;
          transition: background 0.15s;
        }
        .jb-close-btn:hover {
          background: rgba(255,255,255,0.22);
        }
        .jb-no-jobs {
          color: #888;
          font-size: 18px;
          text-align: center;
          margin-top: 40px;
        }
      `,document.head.appendChild(t)}document.body.appendChild(this.overlay)}show(e){this.jobs=e.slice(0,5),this.visible=!0,this._render(),this.overlay.style.display="flex"}hide(){this.visible=!1,this.overlay.style.display="none"}isVisible(){return this.visible}_render(){this.overlay.innerHTML="";const e=document.createElement("div");e.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 480px;
      margin-bottom: 16px;
      position: sticky;
      top: 0;
      padding: 8px 0;
      background: rgba(10,10,20,0.92);
      z-index: 5;
    `;const t=document.createElement("div");t.textContent="📋 JOBS AVAILABLE",t.style.cssText=`
      color: #fff;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 1px;
    `,e.appendChild(t);const i=document.createElement("button");if(i.className="jb-close-btn",i.textContent="✕",i.setAttribute("aria-label","Close"),i.addEventListener("click",()=>this.hide()),e.appendChild(i),this.overlay.appendChild(e),this.jobs.length===0){const n=document.createElement("div");n.className="jb-no-jobs",n.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(n);return}for(const n of this.jobs){const s=document.createElement("div");s.className="jb-card";const r=document.createElement("div");r.className="jb-card-header";const a=document.createElement("div");a.className="jb-title",a.textContent=n.title,r.appendChild(a);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${qg(n.pay)}`,r.appendChild(l),s.appendChild(r);const c=document.createElement("div");c.className="jb-meta";const d=document.createElement("span");d.className="jb-badge",d.textContent=jg[n.zone]??n.zone,c.appendChild(d);const u=document.createElement("span");if(u.className=`jb-badge${n.type==="emergency"?" jb-emergency-badge":""}`,u.textContent=Yg[n.type]??n.type,c.appendChild(u),n.timeLimit>0){const x=document.createElement("span");x.className="jb-badge jb-emergency-badge",x.textContent=`⏱️ ${Math.round(n.timeLimit/60)} min limit`,c.appendChild(x)}s.appendChild(c);const h=document.createElement("div");h.className="jb-client",h.textContent=`Client: ${n.client}`,s.appendChild(h);const f=document.createElement("div");f.className="jb-desc",f.textContent=n.description,s.appendChild(f);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(n)}),s.appendChild(g),this.overlay.appendChild(s)}}}const ac=1e8;function $i(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}function Jg(o){const e=Math.max(0,Math.ceil(o)),t=Math.floor(e/60),i=e%60;return`${t}:${i.toString().padStart(2,"0")}`}function Kg(o){return o.charAt(0).toUpperCase()}class Zg{constructor(){b(this,"btcAchieved",!1);b(this,"speedText");b(this,"moneyEl");b(this,"btcBarFill");b(this,"btcLabelEl");b(this,"jobStripEl");b(this,"travelTimerEl");b(this,"flashOverlay");b(this,"timerFailOverlay");b(this,"crewPanelEl");b(this,"moneyPanel");b(this,"activeJob",null);b(this,"activePhase",1);b(this,"flashTimeout",null);b(this,"spillPenaltyTimeout",null);b(this,"currentMoney",5e5);b(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const a=document.createElement("style");a.id="hud-styles",a.textContent=`
        @keyframes timerPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        .hud-timer-pulse {
          animation: timerPulse 0.6s ease-in-out infinite;
        }
        @keyframes hudRedFlash {
          0%   { background: rgba(220, 38, 38, 0.85); }
          70%  { background: rgba(220, 38, 38, 0.85); }
          100% { background: rgba(220, 38, 38, 0.0);  }
        }
      `,document.head.appendChild(a)}const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      pointer-events: none;
      font-family: system-ui, monospace;
      z-index: 1000;
    `,this.speedText=document.createElement("div"),this.speedText.style.cssText=`
      font-size: 22px;
      font-weight: 900;
      color: #fff;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      letter-spacing: 1px;
    `,this.speedText.textContent="0 km/h",e.appendChild(this.speedText),document.body.appendChild(e),this.moneyPanel=document.createElement("div"),this.moneyPanel.style.cssText=`
      display: flex; flex-direction: column; align-items: flex-start;
      gap: 6px; font-family: system-ui, sans-serif; width: 100%;
    `,this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText=`
      color: #5EDB7D; font-size: 22px; font-weight: 900;
      text-shadow: 0 1px 6px rgba(0,0,0,0.8);
      letter-spacing: 1px; transition: color 0.2s;
    `,this.moneyEl.textContent="500K sats",this.moneyPanel.appendChild(this.moneyEl);const t=document.createElement("div");t.style.cssText="width:100%; display:flex; flex-direction:column; gap:3px;",this.btcLabelEl=document.createElement("div"),this.btcLabelEl.style.cssText=`
      color: rgba(247,147,26,0.85); font-size: 11px; font-weight: 700;
      letter-spacing: 0.5px; font-family: monospace;
    `,this.btcLabelEl.textContent="₿ GOAL: 0%";const i=document.createElement("div");i.style.cssText=`
      width: 100%; height: 5px; background: rgba(247,147,26,0.18);
      border-radius: 3px; overflow: hidden;
    `,this.btcBarFill=document.createElement("div"),this.btcBarFill.style.cssText=`
      height: 100%; background: #F7931A; width: 0%;
      border-radius: 3px; transition: width 0.6s ease;
    `,i.appendChild(this.btcBarFill),t.appendChild(this.btcLabelEl),t.appendChild(i),this.moneyPanel.appendChild(t);const n=document.createElement("div");n.style.cssText=`
      position: fixed; top: 16px; right: 64px;
      display: flex; flex-direction: column; align-items: flex-end;
      gap: 6px; pointer-events: none;
      font-family: system-ui, sans-serif; z-index: 1000; max-width: 240px;
    `,this.jobStripEl=document.createElement("div"),this.jobStripEl.style.cssText=`
      display: none; flex-direction: column; align-items: flex-end;
      gap: 2px; background: rgba(0,0,0,0.55);
      border-radius: 10px; padding: 8px 12px;
      border-left: 3px solid #C1666B;
    `,n.appendChild(this.jobStripEl),this.travelTimerEl=document.createElement("div"),this.travelTimerEl.style.cssText=`
      display: none; text-align: right;
      font-size: 20px; font-weight: 900;
      font-family: system-ui, monospace;
      text-shadow: 0 1px 6px rgba(0,0,0,0.9); letter-spacing: 1px;
      background: rgba(0,0,0,0.5); border-radius: 8px; padding: 4px 10px;
    `,n.appendChild(this.travelTimerEl),document.body.appendChild(n),this.crewPanelEl=document.createElement("div"),this.crewPanelEl.style.cssText=`
      position: fixed;
      top: 200px;
      left: 10px;
      display: none;
      flex-direction: column;
      gap: 6px;
      pointer-events: none;
      font-family: system-ui, sans-serif;
      z-index: 1000;
    `,document.body.appendChild(this.crewPanelEl),this.flashOverlay=document.createElement("div"),this.flashOverlay.style.cssText=`
      position: fixed;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1500;
      pointer-events: none;
      background: rgba(94, 219, 125, 0.15);
    `;const s=document.createElement("div");s.id="hud-flash-msg",s.style.cssText=`
      color: #5EDB7D;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.3;
    `,this.flashOverlay.appendChild(s),document.body.appendChild(this.flashOverlay),this.timerFailOverlay=document.createElement("div"),this.timerFailOverlay.style.cssText=`
      position: fixed;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1600;
      pointer-events: none;
      background: rgba(220, 38, 38, 0.18);
    `;const r=document.createElement("div");r.id="hud-timer-fail-msg",r.style.cssText=`
      color: #ff4444;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.4;
    `,r.textContent="⏰ TOO SLOW! -150K sats",this.timerFailOverlay.appendChild(r),document.body.appendChild(this.timerFailOverlay)}getMoneyPanel(){return this.moneyPanel}update(e,t){const i=Math.abs(Math.round(e*3.6));this.speedText.textContent=`${i} km/h`}setActiveJob(e,t=2){if(this.activeJob=e,this.activePhase=t,!e){this.jobStripEl.style.display="none",this.crewPanelEl.style.display="none";return}this.jobStripEl.style.display="flex",this._refreshJobStrip(e,null)}updateJobDistance(e){this.activeJob&&this._refreshJobStrip(this.activeJob,e)}updateCrewStatus(e,t,i){if(!i||e.length===0){this.crewPanelEl.style.display="none";return}this.crewPanelEl.style.display="flex",this.crewPanelEl.innerHTML="";const n=document.createElement("div");n.style.cssText=`
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      letter-spacing: 0.5px;
      text-transform: uppercase;
    `,n.textContent="Crew",this.crewPanelEl.appendChild(n);const s=document.createElement("div");s.style.cssText=`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
    `;for(const r of e){const a=t.includes(r),l=document.createElement("div");l.style.cssText=`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${a?"#5EDB7D":"#555"};
        border: 2px solid ${a?"#3AC060":"#888"};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 900;
        color: ${a?"#003318":"#bbb"};
        text-shadow: none;
        box-shadow: 0 1px 4px rgba(0,0,0,0.6);
        transition: background 0.2s, border-color 0.2s;
      `,l.textContent=Kg(r),l.title=r,s.appendChild(l)}this.crewPanelEl.appendChild(s)}_refreshJobStrip(e,t){this.jobStripEl.innerHTML="";const i=document.createElement("div");if(i.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,t!==null){const n=t<1e3?`${Math.round(t)}m`:`${(t/1e3).toFixed(1)}km`;this.activePhase===1?(i.textContent=`📦 To workshop: ${n} — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up crew: ${n} — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 To job site: ${n} — ${e.title}`,i.style.color="#C1666B")}else this.activePhase===1?(i.textContent=`📦 Workshop pickup — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up the crew — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 ${e.title}`,i.style.color="#fff");this.jobStripEl.appendChild(i)}updateTravelTimer(e){if(e===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${Jg(e)}`,e>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):e>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(e){const t=document.getElementById("hud-timer-fail-msg");t&&(t.textContent=`⏰ TOO SLOW! -${$i(e)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const e=document.getElementById("hud-flash-msg");e&&(e.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',e.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(e,t){const i=document.getElementById("hud-flash-msg");i&&(t?i.innerHTML=`👤 ${e} on board!<br><span style="font-size:0.65em">Pick up ${t}!</span>`:(i.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',i.style.color="#5EDB7D"),t&&(i.style.color="#60AAFF")),this.flashOverlay.style.background=t?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(e){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const t=`-${$i(e)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${$i(this.currentMoney)} ${t}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=$i(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(e,t){const i=document.getElementById("hud-flash-msg");i&&(i.style.color="#5EDB7D",i.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${$i(t)} — ${e}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(e){this.currentMoney=e,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=$i(e));const t=Math.min(1,e/ac);this.btcBarFill.style.width=`${(t*100).toFixed(1)}%`,t>=1?(this.btcLabelEl.textContent="₿ GOAL: ACHIEVED! 🚀",this.btcBarFill.style.background="#FFD700"):this.btcLabelEl.textContent=`₿ GOAL: ${(t*100).toFixed(1)}%`,!this.btcAchieved&&e>=ac&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showPenalty(e,t){this.flashTimeout&&clearTimeout(this.flashTimeout),this.flashOverlay.style.display="block";const i=this.flashOverlay.querySelector("div");i&&(i.innerHTML=`⚠️ SCAFFOLD FAIL<br><span style="font-size:0.7em">−${$i(t)} penalty — ${e}</span>`),this.flashOverlay.style.animation="none",this.flashOverlay.offsetWidth,this.flashOverlay.style.animation="hudRedFlash 2.5s ease forwards",this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none"},2600)}showToast(e,t=16777215){const i="#"+t.toString(16).padStart(6,"0"),n=document.createElement("div");n.textContent=e,Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:i,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0"},2e3),setTimeout(()=>n.remove(),2600)}_showBitcoinAchievement(){if(localStorage.setItem("tem-rush-btc-achieved","1"),!document.getElementById("btc-anim-styles")){const c=document.createElement("style");c.id="btc-anim-styles",c.textContent=`
        @keyframes btcFadeIn { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes btcSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes btcGlow   { 0%,100%{text-shadow:0 0 20px #F7931A} 50%{text-shadow:0 0 60px #FFD700,0 0 80px #F7931A} }
      `,document.head.appendChild(c)}const e=document.createElement("div");e.style.cssText=`
      position:fixed; inset:0; z-index:29999;
      background:rgba(5,3,0,0.96);
      display:flex; flex-direction:column; align-items:center;
      overflow-y:auto; font-family:system-ui,sans-serif;
      animation:btcFadeIn 0.5s ease;
      padding:32px 20px 60px; box-sizing:border-box;
    `;const t=document.createElement("div");t.style.cssText="width:100%; max-width:480px; display:flex; flex-direction:column; align-items:center; gap:18px;";const i=document.createElement("div");i.style.cssText="width:100%; display:flex; justify-content:flex-end;";const n=document.createElement("button");n.textContent="✕",n.style.cssText=`background:rgba(255,255,255,0.1);border:none;color:#fff;
      font-size:18px;width:38px;height:38px;border-radius:50%;cursor:pointer;`,n.onclick=()=>e.remove(),i.appendChild(n),t.appendChild(i),t.innerHTML+=`
      <div style="font-size:72px;animation:btcSpin 4s linear infinite;display:inline-block;">₿</div>
      <div style="color:#F7931A;font-size:clamp(28px,8vw,52px);font-weight:900;
                  animation:btcGlow 2s ease-in-out infinite;text-align:center;">1 BITCOIN</div>
      <div style="color:#FFD700;font-size:clamp(15px,4vw,22px);font-weight:800;letter-spacing:2px;">ACHIEVED</div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px;text-align:center;line-height:1.6;max-width:360px;">
        100,000,000 sats earned plastering Melbourne.<br>
        <em>Jarrad wants his cut. You pretend not to hear him.</em>
      </div>
    `;const s=lc("🎽  REWARD — MERCH STORE","rgba(247,147,26,0.18)","rgba(247,147,26,0.55)","10% off all TEM merch.<br>Show this at checkout or use the code online.","BTCPLASTER10");t.appendChild(s);const r=lc("🪣  REWARD — MATERIAL SALES","rgba(94,219,125,0.14)","rgba(94,219,125,0.45)","5% off TEM materials at participating retail stores.<br>Present your in-app certificate.","BTCMAT5");t.appendChild(r);const a=document.createElement("div");a.style.cssText=`
      width:100%; background:rgba(200,168,106,0.1);
      border:1px solid rgba(200,168,106,0.35); border-radius:14px;
      padding:16px 18px; color:rgba(240,232,216,0.75);
      font-size:13px; line-height:1.6; text-align:center;
    `,a.innerHTML=`
      📜 Both rewards have been added to your<br>
      <strong style="color:#C8A86A;">TEM Rush Certificate</strong> —
      open the 📸 gallery to view &amp; save it.
    `,t.appendChild(a);const l=document.createElement("button");l.textContent="HODL 🚀",l.style.cssText=`
      padding:14px 48px; background:#F7931A; color:#000;
      border:none; border-radius:50px; font-size:18px; font-weight:900;
      cursor:pointer; letter-spacing:1px; margin-top:8px;
    `,l.onclick=()=>e.remove(),t.appendChild(l),e.appendChild(t),document.body.appendChild(e)}}function lc(o,e,t,i,n){const s=document.createElement("div");s.style.cssText=`
    width:100%; background:${e}; border:1.5px solid ${t};
    border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:10px;
  `,s.innerHTML=`
    <div style="color:#F7931A;font-size:11px;font-weight:700;letter-spacing:2px;">${o}</div>
    <div style="color:#F0E8D8;font-size:14px;line-height:1.6;">${i}</div>
    <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(247,147,26,0.3);
                border-radius:10px;padding:12px;text-align:center;">
      <div style="color:rgba(247,147,26,0.7);font-size:10px;letter-spacing:2px;
                  font-family:monospace;margin-bottom:4px;">PROMO CODE</div>
      <div style="color:#FFD97A;font-size:clamp(18px,5vw,26px);font-weight:900;
                  letter-spacing:3px;font-family:monospace;">${n}</div>
    </div>
    <button data-code="${n}" style="
      background:rgba(247,147,26,0.15);border:1px solid rgba(247,147,26,0.4);
      color:#F7931A;font-size:13px;font-weight:700;border-radius:8px;
      padding:10px;cursor:pointer;touch-action:manipulation;width:100%;
    ">📋 Copy Code</button>
  `;const r=s.querySelector("button");return r.addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(n).then(()=>{r.textContent="✓ Copied!",setTimeout(()=>{r.textContent="📋 Copy Code"},2e3)})}),s}const ln=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],_d="tem-rush-achievements";function Rs(){try{return JSON.parse(localStorage.getItem(_d)||"[]")}catch{return[]}}function Qg(o){const e=Rs();return e.includes(o)?!1:(e.push(o),localStorage.setItem(_d,JSON.stringify(e)),!0)}function bd(){return Rs().length>=ln.length}function ex(){const o=Rs(),e=ln.filter(t=>!o.includes(t.id));return e.length>0?e[Math.floor(Math.random()*e.length)]:ln[Math.floor(Math.random()*ln.length)]}function tx(o,e,t){o.fillStyle="#C8B89A",o.fillRect(0,0,e,t);for(let i=0;i<800;i++){const n=Math.random()*e,s=Math.random()*t,r=20+Math.random()*60,a=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);o.strokeStyle=`rgb(${l},${l-10},${l-20})`,o.lineWidth=1+Math.random()*3,o.globalAlpha=.3+Math.random()*.4,o.beginPath(),o.moveTo(n,s),o.lineTo(n+Math.cos(a)*r,s+Math.sin(a)*r),o.stroke()}o.globalAlpha=1,o.font="bold 48px system-ui",o.textAlign="center",o.fillStyle="rgba(180,160,130,0.4)",o.fillText("TROWELED EARTH",e/2,t/2-20),o.font="22px system-ui",o.fillStyle="rgba(180,160,130,0.3)",o.fillText("Scratch to reveal",e/2,t/2+20)}function ix(o,e,t,i,n,s=45){o.globalCompositeOperation="destination-out",o.strokeStyle="rgba(0,0,0,1)",o.lineCap="round",o.lineJoin="round",o.lineWidth=s*2,o.beginPath(),o.moveTo(e,t),o.lineTo(i,n),o.stroke(),o.globalCompositeOperation="source-over"}function cc(o,e,t){const i=o.getImageData(0,0,e,t).data;let n=0;const s=e*t;for(let r=3;r<i.length;r+=4)i[r]<128&&n++;return n/s}function nx(o,e,t){o.save(),o.translate(e,t),o.rotate(Math.PI/4),o.strokeStyle="#8B6914",o.lineWidth=5,o.lineCap="round",o.beginPath(),o.moveTo(0,0),o.lineTo(0,36),o.stroke(),o.fillStyle="#C0C0C0",o.strokeStyle="#888",o.lineWidth=1.5,o.beginPath(),o.moveTo(-14,0),o.lineTo(14,0),o.lineTo(10,-28),o.lineTo(-10,-28),o.closePath(),o.fill(),o.stroke(),o.fillStyle="rgba(255,255,255,0.35)",o.beginPath(),o.moveTo(-8,-4),o.lineTo(4,-4),o.lineTo(2,-22),o.lineTo(-6,-22),o.closePath(),o.fill(),o.restore()}function dc(o,e,t,i){const n=Math.max(t/e.naturalWidth,i/e.naturalHeight),s=e.naturalWidth*n,r=e.naturalHeight*n,a=(t-s)/2,l=(i-r)/2;o.drawImage(e,a,l,s,r)}class sx{constructor(){b(this,"container",null);b(this,"canvas",null);b(this,"ctx",null);b(this,"scratch",null);b(this,"sctx",null);b(this,"onComplete",null);b(this,"photo",null);b(this,"img",null);b(this,"imgLoaded",!1);b(this,"lastX",0);b(this,"lastY",0);b(this,"pointerDown",!1);b(this,"cursorX",-999);b(this,"cursorY",-999);b(this,"DURATION",30);b(this,"timeLeft",30);b(this,"timerInterval",null);b(this,"rafId",0);b(this,"done",!1);b(this,"revealed",0);b(this,"lastSampleTime",0);b(this,"SAMPLE_INTERVAL",250);b(this,"toastMsg","");b(this,"toastAlpha",0);b(this,"_onMouseMove");b(this,"_onMouseDown");b(this,"_onMouseUp");b(this,"_onTouchStart");b(this,"_onTouchMove");b(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(e,t){if(this.container=e,this.onComplete=t,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=ex(),this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth||window.innerWidth,this.canvas.height=e.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(e.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");tx(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(e){this.pointerDown=!0;const t=this.canvas.getBoundingClientRect();this.lastX=e.clientX-t.left,this.lastY=e.clientY-t.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,n=e.clientY-t.top;this.cursorX=i,this.cursorY=n,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,i,n),this.lastX=i,this.lastY=n)}handleTouchStart(e){e.preventDefault(),this.pointerDown=!0;const t=e.touches[0],i=this.canvas.getBoundingClientRect();this.lastX=t.clientX-i.left,this.lastY=t.clientY-i.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(e){if(e.preventDefault(),!this.pointerDown||this.done)return;const t=e.touches[0],i=this.canvas.getBoundingClientRect(),n=t.clientX-i.left,s=t.clientY-i.top;this.cursorX=n,this.cursorY=s,this.scrape(this.lastX,this.lastY,n,s),this.lastX=n,this.lastY=s}scrape(e,t,i,n){if(!this.sctx||!this.scratch||this.done)return;ix(this.sctx,e,t,i,n,45);const s=performance.now();s-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=s,this.revealed=cc(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const e=this.ctx,t=this.canvas;if(!e||!t)return;const i=t.width,n=t.height;e.clearRect(0,0,i,n),this.imgLoaded&&this.img&&this.img.naturalWidth>0?dc(e,this.img,i,n):(e.fillStyle="#2a2a20",e.fillRect(0,0,i,n)),this.scratch&&e.drawImage(this.scratch,0,0),this.done||this.drawHUD(e,i,n),this.cursorX>0&&!this.done&&nx(e,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(e,i,n),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(e,t,i){const n=this.timeLeft/this.DURATION,s=t*.8,r=t*.1,a=16,l=14,c=7;e.fillStyle="rgba(0,0,0,0.4)",this.roundRect(e,r,a,s,l,c),e.fill();const d=n<.33?"#F07070":n<.6?"#F7C948":"#5EDB7D";e.fillStyle=d,this.roundRect(e,r,a,s*n,l,c),e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.round(i*.03)}px system-ui`,e.textAlign="center",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${Math.ceil(this.timeLeft)}s`,t/2,a+l+22);const u=Math.round(this.revealed*100);e.font=`900 ${Math.round(i*.09)}px system-ui`,e.textAlign="center",e.fillStyle="rgba(255,255,255,0.9)",e.shadowColor="rgba(0,0,0,0.9)",e.shadowBlur=12,e.fillText(`${u}%`,t/2,i-32),e.shadowBlur=0,this.timeLeft>25&&(e.font=`bold ${Math.round(i*.03)}px system-ui`,e.fillStyle="rgba(255,255,255,0.85)",e.textAlign="center",e.fillText("🪣  Scrape away the plaster!",t/2,i/2))}roundRect(e,t,i,n,s,r){n<0||(e.beginPath(),e.moveTo(t+r,i),e.lineTo(t+n-r,i),e.quadraticCurveTo(t+n,i,t+n,i+r),e.lineTo(t+n,i+s-r),e.quadraticCurveTo(t+n,i+s,t+n-r,i+s),e.lineTo(t+r,i+s),e.quadraticCurveTo(t,i+s,t,i+s-r),e.lineTo(t,i+r),e.quadraticCurveTo(t,i,t+r,i),e.closePath())}drawToast(e,t,i){const n=Math.min(1,this.toastAlpha);e.save(),e.globalAlpha=n,e.fillStyle="rgba(0,0,0,0.7)",e.font=`bold ${Math.round(i*.035)}px system-ui`,e.textAlign="center";const s=this.toastMsg.split(`
`),r=Math.round(i*.045),a=s.length*r+24,l=i*.45-a/2,c=t*.85,d=(t-c)/2;this.roundRect(e,d,l,c,a,16),e.fill(),e.fillStyle="#fff",e.shadowColor="rgba(0,0,0,0.6)",e.shadowBlur=8,s.forEach((u,h)=>{e.fillText(u,t/2,l+22+h*r)}),e.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=cc(this.sctx,this.scratch.width,this.scratch.height));const e=Math.round(this.revealed*100),t=Math.max(20,e),i=t/100,n=this.photo,s=Qg(n.id),r=Rs().length,a=bd();this.showResultScreen(t,n,s,r,a,i)}showResultScreen(e,t,i,n,s,r){const a=this.ctx,l=this.canvas;if(!a||!l)return;const c=l.width,d=l.height;a.clearRect(0,0,c,d),this.imgLoaded&&this.img&&this.img.naturalWidth>0?dc(a,this.img,c,d):(a.fillStyle="#2a2a20",a.fillRect(0,0,c,d)),this.scratch&&a.drawImage(this.scratch,0,0),a.fillStyle="rgba(0,0,0,0.65)",a.fillRect(0,0,c,d);const u=e>=85?"#5EDB7D":e>=60?"#F7C948":"#F07070";a.font=`900 ${Math.round(d*.15)}px system-ui`,a.textAlign="center",a.fillStyle=u,a.shadowColor="rgba(0,0,0,0.8)",a.shadowBlur=20,a.fillText(`${e}%`,c/2,d*.35),a.font=`bold ${Math.round(d*.04)}px system-ui`,a.fillStyle="#fff",a.shadowBlur=10,a.fillText(`📸 ${t.name}`,c/2,d*.47);let h;s?h="🏆 FULL TEM COLLECTION!":i?h="✨ NEW PHOTO UNLOCKED!":h="Already in your collection",a.font=`bold ${Math.round(d*.032)}px system-ui`,a.fillStyle=s?"#FFD700":i?"#5EDB7D":"#aaa",a.shadowBlur=8,a.fillText(h,c/2,d*.56),a.font=`${Math.round(d*.026)}px system-ui`,a.fillStyle="rgba(255,255,255,0.75)",a.shadowBlur=4,a.fillText(`Collection: ${n} / ${ln.length}`,c/2,d*.64),a.shadowBlur=0;const f=s?"🏆 Full TEM Collection complete!":i?`📸 New photo unlocked: ${t.name}`:`${t.name} — already in collection`,g={score:e,qualityPct:r,message:f};setTimeout(()=>{var x;return(x=this.onComplete)==null?void 0:x.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const et=5,po=8,Qt=po*et,ox=[-8,8],rx=20,no=5.5,hc=14,uc=11,fc=4,ax=-30,An=.4;class lx{constructor(){b(this,"overlay");b(this,"renderer");b(this,"scene");b(this,"camera");b(this,"rafId",0);b(this,"lastTs",0);b(this,"px",0);b(this,"py",0);b(this,"vx",0);b(this,"vy",0);b(this,"onGround",!1);b(this,"jumpsLeft",2);b(this,"climbPole",null);b(this,"swingBar",null);b(this,"swingAngle",0);b(this,"swingOmega",0);b(this,"char");b(this,"charGroup");b(this,"facingRight",!0);b(this,"platforms",[]);b(this,"poles",[]);b(this,"swingBars",[]);b(this,"heartsEl");b(this,"timerEl");b(this,"lives",3);b(this,"timer",120);b(this,"gameOver",!1);b(this,"delivered",!1);b(this,"keys",{left:!1,right:!1,up:!1,down:!1});b(this,"jumpTap",!1);b(this,"onCompleteFn")}start(e){this.onCompleteFn=e,this._createOverlay(),this._createScene(),this._buildBackground(),this._buildLevel(),this._buildHUD(),this._buildControls(),this.px=0,this.py=.5,this.lastTs=performance.now(),this.rafId=requestAnimationFrame(t=>this._loop(t))}_createOverlay(){this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `,document.body.appendChild(this.overlay)}_createScene(){const e=window.innerWidth,t=window.innerHeight,i=document.createElement("canvas");i.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this.overlay.appendChild(i),this.renderer=new Ra({canvas:i,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.scene=new Pa,this.scene.background=new Me(8900331),this.scene.fog=new Po(8900331,.018),this.camera=new Dt(44,e/t,.1,200),this.camera.position.set(0,12,26),this.camera.lookAt(0,10,0);const n=new Ba(16777215,.6);this.scene.add(n);const s=new Hn(16775400,1.1);s.position.set(8,30,15),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.near=.5,s.shadow.camera.far=120,s.shadow.camera.left=-20,s.shadow.camera.right=20,s.shadow.camera.top=55,s.shadow.camera.bottom=-5,this.scene.add(s);const r=new Hn(12638463,.4);r.position.set(-5,10,5),this.scene.add(r),this.char=new Cs(zi.Jarrad),this.charGroup=this.char.group,this.charGroup.scale.setScalar(1),this.scene.add(this.charGroup)}_buildBackground(){const e=(n,s,r,a,l)=>{const c=new B(n,new $({color:s}));return c.position.set(r,a,l),c.receiveShadow=!0,this.scene.add(c),c};e(new ht(80,60),11589872,0,22,-12);const t=[[-14,10],[-10,14],[-6,8],[8,16],[12,11],[16,9]];for(const[n,s]of t)e(new Q(4,s,1),6975632,n,s/2-1,-9);const i=Qt+5;e(new Q(16,i,.6),15260864,0,i/2-1,-1.5),e(new Q(16.6,.5,.9),13945e3,0,i-1,-1.4),e(new Q(16,.4,.7),13681824,0,0,-1.4);for(let n=0;n<po;n++){const s=n*et+2;for(const r of[-5.5,-1.8,1.8,5.5])e(new Q(2,2.8,.2),3359846,r,s,-1.1),e(new Q(1.8,.15,.25),12300432,r,s+1.5,-1.05)}e(new Q(24,.5,5),3815474,0,-.25,.5),e(new Q(14,.5,1.2),13154440,0,.25,1),e(new Q(14,1.2,.15),12101752,0,.6,1.57),e(new Q(.15,1.2,1.2),12101752,-7,.6,1),e(new Q(.15,1.2,1.2),12101752,7,.6,1)}_buildLevel(){for(const t of ox)this._addScaffoldPole(t,0,Qt+3),this.poles.push({x:t,y1:0,y2:Qt+3});for(const t of[-3.5,3.5])this._addScaffoldPole(t,0,Qt+3),this.poles.push({x:t,y1:0,y2:Qt+3});this._addScaffoldPole(-1,0,Qt+3),this._addScaffoldPole(1,0,Qt+3);for(let t=0;t<=po;t++){const i=t*et;this._addTube(-8,8,i,10066346,.07)}for(let t=0;t<po;t++){const i=t*et,n=(t+1)*et;this._addDiag(-8,i,8,n),this._addDiag(8,i,-8,n)}this._addPlat(-7.5,7.5,0,"normal"),this._addPlat(-7.5,-1.2,et*1,"normal"),this._addPlat(1.2,7.5,et*1,"normal"),this._addPlat(-7.5,-1,et*2,"normal"),this._addPlat(2,7.5,et*2,"crumble"),this._addPlat(-7.5,-3,et*3,"normal"),this._addPlat(3,7.5,et*3,"normal"),this._addPlat(-2,2,et*3,"moving"),this._addPlat(-7.5,1.5,et*4,"normal"),this._addPlat(4,7.5,et*4,"crumble"),this._addPlat(-7.5,-4,et*5,"normal"),this._addPlat(-1.5,1.5,et*5+.8,"normal"),this._addPlat(4,7.5,et*5,"normal"),this._addPlat(-7.5,-4.5,et*6,"normal"),this._addPlat(4.5,7.5,et*6,"normal"),this._addPlat(-3,3,et*6,"moving"),this._addPlat(-7.5,-4.5,et*7,"crumble"),this._addPlat(-1.5,1.5,et*7,"normal"),this._addPlat(4.5,7.5,et*7,"crumble"),this._addSwingBar(0,et*1+2.5,2.8),this._addSwingBar(0,et*3+2.5,2.8),this._addSwingBar(-4,et*5+2.5,2.2),this._addSwingBar(4,et*6+2.5,2.2),this._addPlat(-7.5,7.5,Qt,"win"),this._addSign(0,Qt+1.8,"⭐ DELIVER HERE ⭐",16746496),this._addBucket(-5,.8),this._addBucket(5,.8)}_addScaffoldPole(e,t,i){const n=i-t,s=new Xe(.07,.07,n,8),r=new $({color:10526896}),a=new B(s,r);a.position.set(e,t+n/2,.3),a.castShadow=!0,this.scene.add(a);for(let l=t;l<=i;l+=et){const c=new ut(.12,6,5),d=new B(c,r);d.position.set(e,l,.3),this.scene.add(d)}}_addTube(e,t,i,n,s){const r=t-e,a=new Xe(s,s,r,7),l=new $({color:n}),c=new B(a,l);c.rotation.z=Math.PI/2,c.position.set((e+t)/2,i,.3),this.scene.add(c)}_addDiag(e,t,i,n){const s=i-e,r=n-t,a=Math.sqrt(s*s+r*r),l=new Xe(.04,.04,a,6),c=new $({color:8947872}),d=new B(l,c);d.rotation.z=Math.atan2(r,s)-Math.PI/2,d.position.set((e+i)/2,(t+n)/2,.3),this.scene.add(d)}_addPlat(e,t,i,n){const s=t-e,r={normal:9134608,moving:13918224,crumble:8939042,win:16763904}[n],a=new Q(s,.28,.8),l=new $({color:r}),c=new B(a,l);c.position.set((e+t)/2,i+.14,.3),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);for(let d=e+.6;d<t;d+=.9){const u=new Q(.06,.3,.82),h=new $({color:r-1118464}),f=new B(u,h);f.position.set(d-(e+t)/2,0,0),c.add(f)}this.platforms.push({x1:e,x2:t,y:i,mesh:c,type:n,moveDir:1,crumbleTimer:0,crumbled:!1})}_addSwingBar(e,t,i){const n=new Xe(.09,.09,3,8),s=new $({color:16755200,emissive:8930304,emissiveIntensity:.5}),r=new B(n,s);r.rotation.z=Math.PI/2,r.position.set(e,t,.5),this.scene.add(r);const a=new ut(.22,8,8),l=new Nt({color:16772608,transparent:!0,opacity:.7}),c=new B(a,l);c.position.set(e,t,.6),this.scene.add(c),this.swingBars.push({anchorX:e,anchorY:t,radius:i,mesh:r})}_addSign(e,t,i,n){const s=new Q(6,.8,.15),r=new $({color:n,emissive:n,emissiveIntensity:.3}),a=new B(s,r);a.position.set(e,t,.5),this.scene.add(a)}_addBucket(e,t){const i=new Xe(.25,.2,.5,8),n=new $({color:12674667,emissive:6684689,emissiveIntensity:.3}),s=new B(i,n);s.position.set(e,t,.5),this.scene.add(s)}_buildHUD(){const e=document.createElement("div");e.style.cssText=`
      position:absolute; top:0; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:center;
      padding:14px 18px; font-family:system-ui,sans-serif; pointer-events:none;
    `,this.heartsEl=document.createElement("div"),this.heartsEl.style.fontSize="22px",this._updateHearts();const t=document.createElement("div");t.style.cssText=`
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:13px; font-weight:800; letter-spacing:1px;
    `,t.textContent="🏗️ SCAFFOLD CLIMB",this.timerEl=document.createElement("div"),this.timerEl.style.cssText=`
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:14px; font-weight:800; min-width:52px; text-align:center;
    `,e.appendChild(this.heartsEl),e.appendChild(t),e.appendChild(this.timerEl),this.overlay.appendChild(e)}_updateHearts(){this.heartsEl.textContent="❤️".repeat(this.lives)+"🖤".repeat(Math.max(0,3-this.lives))}_buildControls(){const e=document.createElement("div");e.style.cssText=`
      position:absolute; bottom:12px; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:flex-end;
      padding:0 20px 8px;
    `;const t=document.createElement("div");t.style.cssText="display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;";const i=(g,x,m,p)=>{const w=document.createElement("div");return w.style.cssText=`
        grid-row:${m}; grid-column:${p};
        background:${x}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `,w.textContent=g,w},n=i("▲","rgba(60,60,160,0.88)",1,2),s=i("◀","rgba(70,70,70,0.88)",2,1),r=i("▼","rgba(60,60,160,0.88)",2,2),a=i("▶","rgba(70,70,70,0.88)",2,3);t.appendChild(n),t.appendChild(s),t.appendChild(r),t.appendChild(a);const l=document.createElement("div");l.style.cssText=`
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `,l.textContent="JUMP";const c=(g,x,m)=>{g.addEventListener("touchstart",p=>{p.preventDefault(),x()},{passive:!1}),g.addEventListener("touchend",p=>{p.preventDefault(),m()},{passive:!1}),g.addEventListener("mousedown",x),g.addEventListener("mouseup",m)};c(s,()=>this.keys.left=!0,()=>this.keys.left=!1),c(a,()=>this.keys.right=!0,()=>this.keys.right=!1),c(n,()=>this.keys.up=!0,()=>this.keys.up=!1),c(r,()=>this.keys.down=!0,()=>this.keys.down=!1);const d=()=>{this.jumpTap=!0};l.addEventListener("touchstart",g=>{g.preventDefault(),d()},{passive:!1}),l.addEventListener("mousedown",d);const u={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"},h=g=>{if(u[g.code]){const x=u[g.code];x==="jump"?this.jumpTap=!0:this.keys[x]=!0}(g.code==="Space"||g.code==="KeyZ")&&(this.jumpTap=!0)},f=g=>{const x=u[g.code];x&&x!=="jump"&&(this.keys[x]=!1)};window.addEventListener("keydown",h),window.addEventListener("keyup",f),this.overlay.addEventListener("remove",()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",f)}),e.appendChild(t),e.appendChild(l),this.overlay.appendChild(e)}_loop(e){if(this.gameOver)return;this.rafId=requestAnimationFrame(i=>this._loop(i));const t=Math.min((e-this.lastTs)/1e3,.05);this.lastTs=e,this._update(t),this.renderer.render(this.scene,this.camera),this.jumpTap=!1}_update(e){if(this.timer=Math.max(0,this.timer-e),this.timerEl.textContent=`⏱ ${Math.ceil(this.timer)}s`,this.timer<=0&&!this.delivered){this._end(!1);return}this.char.update(e);for(const i of this.platforms)if(i.type==="moving"&&(i.x1+=2.5*(i.moveDir??1)*e,i.x2+=2.5*(i.moveDir??1)*e,i.mesh.position.x=(i.x1+i.x2)/2,(i.x2>5.2||i.x1<-1.8)&&(i.moveDir=-(i.moveDir??1))),i.type==="crumble"&&!i.crumbled)if(this.onGround&&this.px>=i.x1-An&&this.px<=i.x2+An&&Math.abs(this.py-i.y)<.3){i.crumbleTimer=(i.crumbleTimer??0)+e;const s=Math.sin(i.crumbleTimer*40)*.06*Math.min(1,i.crumbleTimer);i.mesh.position.z=.3+s,i.crumbleTimer>1.2&&(i.crumbled=!0,i.mesh.visible=!1)}else(i.crumbleTimer??0)>0&&!i.crumbled&&(i.crumbleTimer=0);this.swingBar?this._physicsSwing(e):this.climbPole?this._physicsClimb(e):this._physicsPlatform(e),this.charGroup.position.set(this.px,this.py,.3),this.charGroup.rotation.y=this.facingRight?-.15:Math.PI+.15;const t=Math.max(8,Math.min(this.py+6,Qt+2));if(this.camera.position.y+=(t-this.camera.position.y)*.07,this.camera.lookAt(0,this.camera.position.y-4,0),this.py<-3.5){this._loseLife();return}!this.delivered&&this.py>=Qt-.5&&Math.abs(this.px)<5&&(this.delivered=!0,this._end(!0))}_physicsPlatform(e){for(const t of this.poles)if(Math.abs(this.px-t.x)<.6&&this.py>=t.y1-.5&&this.py<=t.y2&&this.keys.up){this.climbPole=t,this.px=t.x,this.vx=0,this.vy=0,this.onGround=!1;return}if(this.onGround||(this.vy=Math.max(this.vy-rx*e,ax)),this.keys.left?(this.vx=-no,this.facingRight=!1):this.keys.right?(this.vx=no,this.facingRight=!0):this.vx*=.6,this.jumpTap)if(this.onGround)this.vy=hc,this.onGround=!1,this.jumpsLeft=1;else if(this.jumpsLeft>0)this.vy=uc,this.jumpsLeft--;else for(const t of this.swingBars){const i=this.px-t.anchorX,n=this.py-t.anchorY,s=Math.sqrt(i*i+n*n);if(s<t.radius+1.5&&this.py<t.anchorY+.5){this.swingBar=t;const r=Math.max(s,t.radius);this.swingAngle=Math.atan2(i,-n),this.swingOmega=this.vx/r,this.vx=0,this.vy=0;return}}if(!this.onGround)for(const t of this.swingBars){const i=Math.abs(this.py-t.anchorY),n=Math.abs(this.px-t.anchorX);if(i<.6&&n<t.radius&&this.vy<0){this.swingBar=t,this.swingAngle=Math.atan2(this.px-t.anchorX,-(this.py-t.anchorY)),this.swingOmega=this.vx/t.radius,this.vx=0,this.vy=0;return}}this.px+=this.vx*e,this.py+=this.vy*e,this.px=Math.max(-8.2,Math.min(8.2,this.px)),this.onGround=!1;for(const t of this.platforms)if(!t.crumbled&&this.px+An>t.x1&&this.px-An<t.x2&&this.py>t.y-.5&&this.py<t.y+1&&this.vy<=0){this.py=t.y,this.vy=0,this.onGround=!0,this.jumpsLeft=2;break}}_physicsClimb(e){const t=this.climbPole;this.keys.up&&(this.py+=fc*e),this.keys.down&&(this.py-=fc*e);for(const i of this.platforms)if(!i.crumbled&&Math.abs(this.py-i.y)<.4&&this.px>=i.x1&&this.px<=i.x2){this.climbPole=null,this.py=i.y,this.onGround=!0,this.jumpsLeft=2;return}(this.py<t.y1||this.py>t.y2)&&(this.climbPole=null),this.jumpTap&&(this.climbPole=null,this.vy=hc*.85,this.jumpsLeft=1,this.keys.left?(this.vx=-no*1.3,this.facingRight=!1):this.keys.right&&(this.vx=no*1.3,this.facingRight=!0))}_physicsSwing(e){const t=this.swingBar,i=t.radius;if(this.swingOmega+=-(9.8/i)*Math.sin(this.swingAngle)*e,this.keys.left&&(this.swingOmega-=4*e),this.keys.right&&(this.swingOmega+=4*e),this.swingOmega*=.993,this.swingAngle+=this.swingOmega*e,this.px=t.anchorX+i*Math.sin(this.swingAngle),this.py=t.anchorY-i*Math.cos(this.swingAngle),this.facingRight=this.swingOmega>0,this.jumpTap){this.swingBar=null;const n=this.swingOmega*i;this.vx=n*Math.cos(this.swingAngle)*1.4,this.vy=Math.max(uc*.75,Math.abs(n)*.8+4),this.jumpsLeft=1,this.onGround=!1}for(const n of this.platforms)!n.crumbled&&this.px+An>n.x1&&this.px-An<n.x2&&Math.abs(this.py-n.y)<.4&&this.swingOmega<1.5&&(this.swingBar=null,this.py=n.y,this.vx=0,this.vy=0,this.onGround=!0,this.jumpsLeft=2)}_loseLife(){if(this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}const e=Math.max(0,Math.floor(this.py/et)-1);this.px=0,this.py=e*et,this.vx=0,this.vy=0,this.onGround=!1,this.jumpsLeft=2,this.climbPole=null,this.swingBar=null}_end(e){if(this.gameOver)return;this.gameOver=!0,cancelAnimationFrame(this.rafId);const t=e?1:-.3,i=document.createElement("div");i.style.cssText=`
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.88); padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      border:2px solid ${e?"#FFD700":"#C1666B"};
      color: ${e?"#FFD97A":"#FF6B6B"};
    `,i.innerHTML=e?'🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500;color:#ccc;">Full pay — nice work, Jarrad.</small>':`💀 SCAFFOLD FAIL<br><small style="font-size:15px;font-weight:500;color:#ccc;">−30% penalty. Jarrad's blaming his phone.</small>`,this.overlay.appendChild(i),setTimeout(()=>{this._cleanup(),this.onCompleteFn({score:e?100:0,qualityPct:t,message:e?"Scaffold conquered!":"Scaffold failed — 30% deducted."})},e?1800:2200)}_cleanup(){cancelAnimationFrame(this.rafId),this.renderer.dispose(),this.overlay.dispatchEvent(new Event("remove")),this.overlay.remove()}mount(e,t){this.start(t)}unmount(){this.gameOver||(this.gameOver=!0,this._cleanup())}}class cx{constructor(){b(this,"overlay");b(this,"active",!1);b(this,"trowelingGame",null);b(this,"scaffoldGame",null);b(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: #1a1a14;
      display: none;
      overflow: hidden;
    `,document.body.appendChild(this.overlay)}isActive(){return this.active}startTroweling(e){this.stop(),this.active=!0,this.overlay.style.display="block",this.overlay.innerHTML="";const t=document.createElement("button");t.textContent="✓ DONE",t.style.cssText=`
      position: absolute; top: 16px; right: 16px;
      z-index: 10001;
      background: rgba(193,102,107,0.95);
      color: #fff; border: none; border-radius: 10px;
      padding: 12px 22px; font-size: 16px; font-weight: 800;
      cursor: pointer; font-family: system-ui, sans-serif;
      touch-action: manipulation;
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new sx,this.trowelingGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(i)})}catch(i){console.error("TrowelingGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,n.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">PLASTER APPLIED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(n)}},120)}startScaffold(e){this.stop(),this.active=!0,this.overlay.style.display="block",this.overlay.innerHTML="";const t=document.createElement("button");t.textContent="✓ DONE",t.style.cssText=`
      position: absolute; top: 16px; right: 16px;
      z-index: 10001;
      background: rgba(193,102,107,0.95);
      color: #fff; border: none; border-radius: 10px;
      padding: 12px 22px; font-size: 16px; font-weight: 800;
      cursor: pointer; font-family: system-ui, sans-serif;
      touch-action: manipulation;
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new lx,this.scaffoldGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(i)})}catch(i){console.error("ScaffoldGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,n.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(n)}},120)}startRandom(e){Math.random()<.5?this.startTroweling(e):this.startScaffold(e)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}function wd(){return localStorage.getItem("tem-rush-btc-achieved")==="1"}function dx(o={}){const e=o.recipientName??"Apprentice Plasterer",t=o.dateStr??new Date().toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}),i=o.btcAchieved??wd(),n=900,s=i?820:640,r=document.createElement("canvas");r.width=n,r.height=s;const a=r.getContext("2d");a.fillStyle="#0D0B08",a.fillRect(0,0,n,s);const l=a.createLinearGradient(0,0,n,s);l.addColorStop(0,"rgba(40,32,20,0.95)"),l.addColorStop(.5,"rgba(28,22,14,0.98)"),l.addColorStop(1,"rgba(40,32,20,0.95)"),a.fillStyle=l,a.fillRect(0,0,n,s),a.strokeStyle="#C8A86A",a.lineWidth=3,a.strokeRect(18,18,n-36,s-36),a.strokeStyle="rgba(200,168,106,0.35)",a.lineWidth=1,a.strokeRect(26,26,n-52,s-52);const c=[[36,36],[n-36,36],[36,s-36],[n-36,s-36]];for(const[R,A]of c)a.strokeStyle="#C8A86A",a.lineWidth=1.5,a.beginPath(),a.arc(R,A,10,0,Math.PI*2),a.stroke(),a.beginPath(),a.arc(R,A,5,0,Math.PI*2),a.fillStyle="#C8A86A",a.fill();const d=n/2,u=74;a.fillStyle="#C8A86A",a.fillRect(d-3,u,6,22);for(let R=0;R<3;R++){const A=20-R*4,C=u-R*14;a.beginPath(),a.arc(d,C,A,0,Math.PI*2),a.fill()}a.textAlign="center",a.fillStyle="#C8A86A",a.font="700 11px 'Courier New', monospace",a.letterSpacing="4px",a.fillText("TROWELED EARTH MELBOURNE",n/2,148),a.fillStyle="rgba(200,168,106,0.45)",a.fillRect(n/2-180,158,360,1),a.fillStyle="#F0E8D8",a.font="900 34px system-ui, sans-serif",a.letterSpacing="0px",a.fillText("Certificate of Completion",n/2,200),a.fillStyle="rgba(200,168,106,0.45)",a.fillRect(n/2-220,214,440,1),a.fillStyle="rgba(240,232,216,0.55)",a.font="400 15px system-ui, sans-serif",a.fillText("This certifies that",n/2,258),a.fillStyle="#FFD97A",a.font="700 28px system-ui, sans-serif",a.fillText(e,n/2,300),a.fillStyle="rgba(200,168,106,0.45)",a.fillRect(n/2-200,312,400,1),a.fillStyle="rgba(240,232,216,0.55)",a.font="400 15px system-ui, sans-serif",a.fillText("has completed all TEM Rush training missions",n/2,348),a.fillText("and achieved full collection of Troweled Earth works.",n/2,372);const h=n/2-200,f=394,g=400,x=58;a.fillStyle="rgba(200,168,106,0.08)",a.strokeStyle="rgba(200,168,106,0.3)",a.lineWidth=1,a.beginPath(),a.roundRect(h,f,g,x,8),a.fill(),a.stroke(),a.fillStyle="#C8A86A",a.font="700 11px 'Courier New', monospace",a.letterSpacing="2px",a.fillText("QUALIFICATION",n/2,f+20),a.fillStyle="#F0E8D8",a.font="700 17px system-ui, sans-serif",a.letterSpacing="0px",a.fillText("TEM Rush — Plasterer's Apprentice",n/2,f+44);const m=n/2-160,p=466,w=320,T=52;a.fillStyle="rgba(193,102,107,0.15)",a.strokeStyle="rgba(193,102,107,0.5)",a.lineWidth=1.5,a.beginPath(),a.roundRect(m,p,w,T,8),a.fill(),a.stroke(),a.fillStyle="#C1666B",a.font="700 11px 'Courier New', monospace",a.letterSpacing="2px",a.fillText("5% OFF TEM STORE — USE CODE:",n/2,p+20),a.fillStyle="#FFD97A",a.font="900 20px system-ui, sans-serif",a.letterSpacing="3px",a.fillText("TEMRUSH5",n/2,p+41),a.letterSpacing="0px";const v=556;if(a.strokeStyle="rgba(200,168,106,0.4)",a.lineWidth=1,a.beginPath(),a.moveTo(n/2-260,v),a.lineTo(n/2-80,v),a.stroke(),a.beginPath(),a.moveTo(n/2+80,v),a.lineTo(n/2+260,v),a.stroke(),a.fillStyle="rgba(240,232,216,0.5)",a.font="400 12px system-ui, sans-serif",a.fillText("Matt Maloy",n/2-170,v+16),a.fillText(t,n/2+170,v+16),a.fillStyle="rgba(200,168,106,0.45)",a.font="400 10px 'Courier New', monospace",a.fillText("Director, Troweled Earth Melbourne",n/2-170,v+32),a.fillText("Date of Completion",n/2+170,v+32),a.fillStyle="rgba(200,168,106,0.06)",a.font="900 90px system-ui, sans-serif",a.save(),a.translate(n/2,s/2+20),a.rotate(-.18),a.fillText("CERTIFIED",0,0),a.restore(),i){a.strokeStyle="rgba(247,147,26,0.35)",a.lineWidth=1,a.beginPath(),a.moveTo(36,602),a.lineTo(n-36,602),a.stroke(),a.fillStyle="#F7931A",a.font="900 14px monospace",a.letterSpacing="2px",a.textAlign="center",a.fillText("₿  1 BITCOIN ACHIEVEMENT — BONUS REWARDS",n/2,624);const A=360,C=90,I=20,S=n/2-A-I/2,_=n/2+I/2,P=638,N=(z,X,J,j,te)=>{a.fillStyle="rgba(247,147,26,0.10)",a.strokeStyle="rgba(247,147,26,0.40)",a.lineWidth=1,a.beginPath(),a.roundRect(z,X,A,C,8),a.fill(),a.stroke(),a.textAlign="center",a.fillStyle="#F7931A",a.font="700 11px monospace",a.letterSpacing="1px",a.fillText(`${J}  ${j}`,z+A/2,X+22),a.fillStyle="rgba(240,232,216,0.5)",a.font="400 11px system-ui",a.letterSpacing="0px",a.fillText("USE CODE AT CHECKOUT:",z+A/2,X+46),a.fillStyle="#FFD97A",a.font="900 18px monospace",a.letterSpacing="2px",a.fillText(te,z+A/2,X+72)};N(S,P,"🎽","10% OFF TEM MERCH STORE","BTCPLASTER10"),N(_,P,"🪣","5% OFF MATERIAL SALES","BTCMAT5"),a.letterSpacing="0px",a.textAlign="center",a.fillStyle="rgba(200,168,106,0.4)",a.font="400 10px monospace",a.fillText("Present this certificate at participating TEM retail stores",n/2,746)}return r.toDataURL("image/png")}const hx="https://troweledearthmelbourne.com.au",pc="TEMRUSH5",mc="tem-rush-cert-unlocked";class Ms{constructor(){b(this,"overlay",null);b(this,"certDataUrl",null)}static isUnlocked(){return localStorage.getItem(mc)==="1"}trigger(){localStorage.setItem(mc,"1"),this._show(!0)}open(){Ms.isUnlocked()&&this._show(!1)}_show(e){this.overlay&&(this.overlay.remove(),this.overlay=null),this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed; inset: 0; z-index: 30000;
      background: rgba(5,4,2,0.97);
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      overflow-y: auto;
      font-family: system-ui, -apple-system, sans-serif;
      touch-action: pan-y;
    `,document.body.appendChild(this.overlay);const t=document.createElement("div");t.style.cssText=`
      width: 100%; max-width: 560px;
      padding: 32px 20px 60px;
      box-sizing: border-box;
      display: flex; flex-direction: column; gap: 20px;
    `,this.overlay.appendChild(t);const i=document.createElement("div");i.style.cssText="display:flex; justify-content:flex-end;";const n=document.createElement("button");if(n.textContent="✕",n.style.cssText=`
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 18px; width: 38px; height: 38px;
      border-radius: 50%; cursor: pointer; touch-action: manipulation;
    `,n.addEventListener("click",()=>this._close()),i.appendChild(n),t.appendChild(i),e){const l=document.createElement("div");l.style.cssText=`
        text-align: center;
        animation: rewardPop 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
      `,l.innerHTML=`
        <div style="font-size: clamp(48px,14vw,80px); line-height:1;">🏆</div>
        <div style="color:#FFD97A; font-size: clamp(20px,6vw,32px); font-weight:900; margin-top:12px; letter-spacing:0.5px;">
          Full Collection Unlocked!
        </div>
        <div style="color:rgba(240,232,216,0.6); font-size:clamp(13px,3.5vw,16px); margin-top:8px; line-height:1.6;">
          All 8 TEM works collected.<br>Connie is impressed. Matt said "nice". That's basically a medal.
        </div>
      `,t.appendChild(l)}else{const l=document.createElement("div");l.style.cssText="text-align:center;",l.innerHTML=`
        <div style="font-size:clamp(36px,10vw,56px);">🏆</div>
        <div style="color:#FFD97A; font-size:clamp(18px,5vw,26px); font-weight:900; margin-top:8px;">Your Rewards</div>
      `,t.appendChild(l)}const s=document.createElement("div");s.style.cssText=`
      background: linear-gradient(135deg, rgba(193,102,107,0.18) 0%, rgba(193,102,107,0.08) 100%);
      border: 1.5px solid rgba(193,102,107,0.5);
      border-radius: 16px; padding: 20px;
      display: flex; flex-direction: column; gap: 10px;
    `,s.innerHTML=`
      <div style="color:#C1666B; font-size:12px; font-weight:700; letter-spacing:2px;">🎁  REWARD #1 — TEM STORE</div>
      <div style="color:#F0E8D8; font-size:clamp(14px,4vw,17px); line-height:1.6;">
        5% off everything at<br>
        <a href="${hx}" target="_blank"
           style="color:#C8A86A; font-weight:700; text-decoration:none;">troweledearthmelbourne.com.au</a>
      </div>
      <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(200,168,106,0.4); border-radius:10px;
                  padding:14px; text-align:center;">
        <div style="color:rgba(200,168,106,0.7); font-size:11px; letter-spacing:2px; margin-bottom:6px; font-family:monospace;">
          USE PROMO CODE AT CHECKOUT
        </div>
        <div style="color:#FFD97A; font-size:clamp(22px,7vw,32px); font-weight:900; letter-spacing:4px; font-family:monospace;">
          ${pc}
        </div>
      </div>
      <button id="copy-code-btn" style="
        background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation; width:100%;
      ">📋 Copy Code</button>
    `,t.appendChild(s),setTimeout(()=>{const l=document.getElementById("copy-code-btn");l&&l.addEventListener("click",()=>{var c;(c=navigator.clipboard)==null||c.writeText(pc).then(()=>{l.textContent="✓ Copied!",setTimeout(()=>{l.textContent="📋 Copy Code"},2e3)})})},0);const r=document.createElement("div");r.style.cssText=`
      background: linear-gradient(135deg, rgba(200,168,106,0.12) 0%, rgba(200,168,106,0.05) 100%);
      border: 1.5px solid rgba(200,168,106,0.4);
      border-radius: 16px; padding: 20px;
      display: flex; flex-direction: column; gap: 12px;
    `,r.innerHTML=`
      <div style="color:#C8A86A; font-size:12px; font-weight:700; letter-spacing:2px;">📜  REWARD #2 — CERTIFICATE</div>
      <div style="color:#F0E8D8; font-size:clamp(14px,4vw,17px); line-height:1.6;">
        TEM Rush — Plasterer's Apprentice<br>
        <span style="color:rgba(240,232,216,0.55); font-size:13px;">Added to your TEM licence profile in-app.</span>
      </div>
    `;try{this.certDataUrl=dx({btcAchieved:wd()});const l=document.createElement("img");l.src=this.certDataUrl,l.style.cssText=`
        width:100%; border-radius:10px;
        border:1px solid rgba(200,168,106,0.3);
        cursor:pointer; touch-action:manipulation;
        box-shadow: 0 4px 20px rgba(0,0,0,0.6);
      `,l.title="Tap to view full certificate",l.addEventListener("click",()=>this._openCertFull()),r.appendChild(l)}catch(l){console.warn("Certificate render failed:",l)}const a=document.createElement("div");if(a.style.cssText="display:flex; gap:10px;",a.innerHTML=`
      <button id="view-cert-btn" style="
        flex:1; background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation;
      ">📜 View Full</button>
      <button id="save-cert-btn" style="
        flex:1; background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation;
      ">💾 Save Image</button>
    `,r.appendChild(a),t.appendChild(r),setTimeout(()=>{var l,c;(l=document.getElementById("view-cert-btn"))==null||l.addEventListener("click",()=>this._openCertFull()),(c=document.getElementById("save-cert-btn"))==null||c.addEventListener("click",()=>this._downloadCert())},0),!document.getElementById("reward-styles")){const l=document.createElement("style");l.id="reward-styles",l.textContent=`
        @keyframes rewardPop {
          from { transform: scale(0.7) translateY(30px); opacity: 0; }
          to   { transform: scale(1) translateY(0);      opacity: 1; }
        }
      `,document.head.appendChild(l)}}_openCertFull(){if(!this.certDataUrl)return;const e=document.createElement("div");e.style.cssText=`
      position: fixed; inset: 0; z-index: 40000;
      background: rgba(0,0,0,0.95);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 20px; box-sizing: border-box;
      touch-action: manipulation;
    `;const t=document.createElement("img");t.src=this.certDataUrl,t.style.cssText=`
      max-width: 100%; max-height: 85vh;
      border-radius: 12px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.8);
    `;const i=document.createElement("button");i.textContent="✕ Close",i.style.cssText=`
      margin-top: 16px; background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 15px; font-weight: 700;
      border-radius: 8px; padding: 10px 24px; cursor: pointer;
      touch-action: manipulation;
    `,i.addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.appendChild(t),e.appendChild(i),document.body.appendChild(e)}_downloadCert(){if(!this.certDataUrl)return;const e=document.createElement("a");e.href=this.certDataUrl,e.download="TEM-Rush-Certificate.png",e.click()}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null)}}class ux{constructor(){b(this,"overlay",null);b(this,"rewardScreen",new Ms)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed; inset: 0; z-index: 20000;
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      background: rgba(10,10,8,0.96);
      backdrop-filter: blur(8px);
      overflow-y: auto;
      font-family: system-ui, sans-serif;
      touch-action: pan-y;
    `;const e=document.createElement("div");e.style.cssText=`
      width: 100%; max-width: 600px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 20px 0;
      box-sizing: border-box;
    `;const t=document.createElement("h2");t.style.cssText=`
      margin: 0; color: #C8B89A;
      font-size: clamp(18px, 5vw, 26px); font-weight: 900;
      letter-spacing: 1px;
    `,t.textContent="📸 TEM PHOTO COLLECTION";const i=document.createElement("button");i.textContent="✕",i.style.cssText=`
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 20px; font-weight: 700;
      width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; flex-shrink: 0;
      touch-action: manipulation;
    `,i.addEventListener("click",()=>this.hide()),e.appendChild(t),e.appendChild(i),this.overlay.appendChild(e);const n=document.createElement("div");n.id="gallery-progress-wrap",n.style.cssText=`
      width: 100%; max-width: 600px;
      padding: 16px 20px 8px; box-sizing: border-box;
    `,this.overlay.appendChild(n);const s=document.createElement("div");s.id="gallery-grid",s.style.cssText=`
      width: 100%; max-width: 600px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      padding: 8px 20px 32px;
      box-sizing: border-box;
    `,this.overlay.appendChild(s);const r=document.createElement("div");r.id="gallery-encourage",r.style.cssText=`
      width: 100%; max-width: 600px;
      text-align: center;
      color: rgba(200,184,154,0.7);
      font-size: clamp(13px, 3vw, 16px);
      padding: 0 20px 40px;
      box-sizing: border-box;
    `,this.overlay.appendChild(r),this.overlay.addEventListener("click",a=>{a.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const e=Rs(),t=e.length,i=ln.length,n=this.overlay.querySelector("#gallery-progress-wrap");if(n){n.innerHTML="";const a=document.createElement("div");a.style.cssText=`
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `,a.textContent=t>=i?`🏆 FULL COLLECTION — ${t}/${i}`:`Collection: ${t} / ${i}`,n.appendChild(a);const l=document.createElement("div");l.style.cssText=`
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;const c=document.createElement("div");c.style.cssText=`
        height: 100%; border-radius: 6px;
        background: ${t>=i?"#FFD700":"#C8B89A"};
        width: ${Math.round(t/i*100)}%;
        transition: width 0.5s ease;
      `,l.appendChild(c),n.appendChild(l)}const s=this.overlay.querySelector("#gallery-grid");s&&(s.innerHTML="",ln.forEach(a=>{const l=e.includes(a.id),c=document.createElement("div");if(c.style.cssText=`
          border-radius: 12px; overflow: hidden;
          position: relative; aspect-ratio: 4/3;
          background: ${l?"#1a1a14":"rgba(255,255,255,0.04)"};
          border: 1.5px solid ${l?"rgba(200,184,154,0.4)":"rgba(255,255,255,0.08)"};
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        `,l){const d=document.createElement("img");d.src=a.file,d.alt=a.name,d.style.cssText=`
            width: 100%; height: 100%;
            object-fit: cover;
            filter: blur(1px) brightness(0.75);
            display: block; transition: filter 0.2s;
          `,c.appendChild(d);const u=document.createElement("div");u.style.cssText=`
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 8px 10px 10px;
            background: linear-gradient(transparent, rgba(0,0,0,0.85));
            color: #fff; font-size: clamp(11px,2.5vw,14px);
            font-weight: 700; text-align: center;
          `,u.textContent=a.name,c.appendChild(u);const h=document.createElement("div");h.style.cssText=`
            position: absolute; top: 8px; right: 8px;
            font-size: 16px; opacity: 0.6; pointer-events: none;
          `,h.textContent="🔍",c.appendChild(h),c.style.cursor="pointer",c.addEventListener("click",()=>this._openLightbox(a.file,a.name)),c.addEventListener("mouseenter",()=>{d.style.filter="blur(0px) brightness(0.9)"}),c.addEventListener("mouseleave",()=>{d.style.filter="blur(1px) brightness(0.75)"})}else{const d=document.createElement("div");d.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,d.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(d)}s.appendChild(c)}));const r=this.overlay.querySelector("#gallery-encourage");r&&(t>=i?(r.innerHTML=`
          <div style="margin-bottom:12px;">🏆 You've scraped them all. Matt's proud. Sort of.</div>
          <button id="gallery-rewards-btn" style="
            background: linear-gradient(135deg,#C8A86A,#A07840);
            color:#0D0B08; border:none; border-radius:12px;
            padding:14px 28px; font-size:15px; font-weight:900;
            cursor:pointer; touch-action:manipulation;
            letter-spacing:0.5px; box-shadow:0 4px 16px rgba(200,168,106,0.35);
          ">🎁 View Rewards &amp; Certificate</button>
        `,setTimeout(()=>{var a;(a=document.getElementById("gallery-rewards-btn"))==null||a.addEventListener("click",()=>{this.hide(),this.rewardScreen.open()})},0)):t>=6?r.textContent="🔥 Almost there — keep scraping!":t>=3?r.textContent="💪 Nice collection forming. More plastering to do!":t===0?r.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":r.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}_openLightbox(e,t){const i=document.createElement("div");if(i.style.cssText=`
      position: fixed; inset: 0; z-index: 30000;
      background: rgba(0,0,0,0.97);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      cursor: pointer; touch-action: manipulation;
      animation: lbFadeIn 0.2s ease;
    `,!document.getElementById("lb-styles")){const a=document.createElement("style");a.id="lb-styles",a.textContent=`
        @keyframes lbFadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes lbImgIn  { from { transform:scale(0.92); opacity:0; } to { transform:scale(1); opacity:1; } }
      `,document.head.appendChild(a)}const n=document.createElement("img");n.src=e,n.alt=t,n.style.cssText=`
      max-width: 100vw; max-height: 85vh;
      object-fit: contain; display: block;
      animation: lbImgIn 0.25s ease;
      border-radius: 4px;
    `,i.appendChild(n);const s=document.createElement("div");s.style.cssText=`
      color: rgba(200,184,154,0.85); font-size: 14px; font-weight: 700;
      margin-top: 16px; letter-spacing: 0.5px;
      font-family: system-ui, sans-serif;
    `,s.textContent=t,i.appendChild(s);const r=document.createElement("div");r.style.cssText=`
      color: rgba(255,255,255,0.3); font-size: 12px;
      margin-top: 10px; font-family: system-ui, sans-serif;
    `,r.textContent="Tap anywhere to close",i.appendChild(r),i.addEventListener("click",()=>i.remove()),document.body.appendChild(i)}hide(){this.overlay&&(this.overlay.style.display="none")}}const gc=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],fx=16767916,px=40,xc=8;function mx(o){const e=new Ne,t=new $({color:o}),i=new $({color:fx}),n=new $({color:o}),s=new B(new Xe(.3,.35,1.1,7),t);s.position.set(0,.55,0),e.add(s);const r=new B(new ut(.28,6,5),i);r.position.set(0,1.28,0),e.add(r);const a=new B(new Q(.15,.65,.15),t);a.position.set(-.45,.75,0),a.rotation.z=.15,e.add(a);const l=new B(new Q(.15,.65,.15),t);l.position.set(.45,.75,0),l.rotation.z=-.15,e.add(l);const c=new B(new Q(.18,.55,.18),n);c.position.set(-.18,0,.05),e.add(c);const d=new B(new Q(.18,.55,.18),n);return d.position.set(.18,0,-.05),e.add(d),{group:e,leftArm:a,rightArm:l,leftLeg:c,rightLeg:d}}class gx{constructor(e){b(this,"pedestrians",[]);b(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[];for(let i=-200;i<=200;i+=40)e.push(i);const t=i=>{const n=gc[Math.floor(Math.random()*gc.length)],{group:s,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c}=mx(n),d=e[Math.floor(Math.random()*e.length)],u=Math.random()>.5?5:-5,h=d+u,f=[];for(let R=-240;R<240;R+=40)f.push(R);const g=f[Math.floor(Math.random()*f.length)],x=g+xc/2,m=g+px-xc/2,p=x+Math.random()*(m-x),w=Math.random()>.5?1:-1,T=2+Math.random()*1.5,v={group:s,axis:i,roadPos:h,segStart:x,segEnd:m,pos:p,dir:w,speed:T,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c};this.pedestrians.push(v),this.scene.add(s),this._applyPosition(v),this._applyFacing(v)};for(let i=0;i<20;i++)t("x");for(let i=0;i<20;i++)t("z")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos):e.group.position.set(e.roadPos,0,e.pos)}_applyFacing(e){if(e.scattering){e.group.rotation.y=Math.atan2(e.scatterDirX,e.scatterDirZ);return}e.axis==="x"?e.group.rotation.y=e.dir===1?-Math.PI/2:Math.PI/2:e.group.rotation.y=e.dir===1?Math.PI:0}update(e,t,i){for(const n of this.pedestrians){const s=n.group.position.x,r=n.group.position.z,a=s-t,l=r-i,c=Math.sqrt(a*a+l*l);if(!n.scattering&&c<7){n.scattering=!0,n.scatterTimer=2.5;const h=Math.max(c,.01);n.scatterDirX=a/h,n.scatterDirZ=l/h}n.scattering?(n.group.position.x+=n.scatterDirX*12*e,n.group.position.z+=n.scatterDirZ*12*e,n.scatterTimer-=e,n.scatterTimer<=0&&(n.scattering=!1,n.axis==="x"?n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.x)):n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.z)),this._applyPosition(n))):(n.pos+=n.dir*n.speed*e,n.pos>=n.segEnd?(n.pos=n.segEnd,n.dir=-1):n.pos<=n.segStart&&(n.pos=n.segStart,n.dir=1),this._applyPosition(n)),this._applyFacing(n);const d=n.scattering?12:n.speed;n.walkCycle+=d*e*2;const u=Math.sin(n.walkCycle);n.leftArm.rotation.z=u*.4+.15,n.rightArm.rotation.z=-u*.4-.15,n.leftLeg.rotation.x=u*.5,n.rightLeg.rotation.x=-u*.5}}}const _i=class _i{constructor(e){b(this,"indicator");b(this,"scene");b(this,"lastVisit",-30);this.scene=e,this.indicator=new B(new ut(1.5,10,8),new $({color:13918762,emissive:new Me(10498064),emissiveIntensity:.8})),this.indicator.position.set(_i.POS.x,10,_i.POS.z),this.scene.add(this.indicator)}update(e){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=e*1.5}isNearby(e,t){const i=e-_i.POS.x,n=t-_i.POS.z;return Math.sqrt(i*i+n*n)<_i.TRIGGER_RADIUS}tryVisit(e,t){if(!this.isNearby(e,t))return!1;const i=Date.now()/1e3;return i-this.lastVisit<20?!1:(this.lastVisit=i,!0)}};b(_i,"POS",{x:-60,z:-100}),b(_i,"TRIGGER_RADIUS",12);let fa=_i;class xx{constructor(){b(this,"level",0);b(this,"isUrgent",!1);b(this,"lastUrgentToast",0);b(this,"caffeinated",!1);b(this,"caffeineTimer",0)}update(e,t){this.caffeinated&&(this.caffeineTimer-=e,this.caffeineTimer<=0&&(this.caffeinated=!1));const i=this.caffeinated?.018:.012;Math.abs(t)>2?this.level=Math.min(1,this.level+e*i):this.level=Math.max(0,this.level-e*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(e,t){const i=e-100,n=t-60;return Math.sqrt(i*i+n*n)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const ls={x:30,z:28},vc=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],gs=class gs{constructor(e){b(this,"wrapper");b(this,"character");b(this,"ropeRing");b(this,"ropePivot");b(this,"lastDialogue",0);b(this,"cooldown",9e3);this.character=new Cs(zi.Mikayla),this.character.group.scale.set(2,2,2);const t=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(t).play(),this.ropePivot=new Ne,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new B(new Io(1.35,.05,7,28),new $({color:8079902})),this.ropePivot.add(this.ropeRing);const i=this._makeNameBoard();i.position.set(0,8.8,0);const n=new B(new hn(1.2,1.7,32),new Nt({color:14501e3,side:Ut}));n.rotation.x=-Math.PI/2,n.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(i),this.wrapper.add(n),this.wrapper.position.set(ls.x,0,ls.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(190, 40, 90, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("MIKAYLA",128,32);const i=new Es(e);return new B(new ht(2.4,.6),new Nt({map:i,transparent:!0,depthWrite:!1}))}update(e,t,i,n){this.character.update(e),this.ropeRing.rotation.z+=e*(2*Math.PI/xd);const s=t-ls.x,r=i-ls.z;this.character.group.rotation.y=Math.atan2(s,r);const a=Math.sqrt(s*s+r*r),l=Date.now();if(a<gs.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=vc[Math.floor(Math.random()*vc.length)];return n.show(zi.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(e){e.remove(this.wrapper)}};b(gs,"POS",ls),b(gs,"TRIGGER_RADIUS",15);let nn=gs;const cs={x:-4,z:-6},yc=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],xs=class xs{constructor(e){b(this,"wrapper");b(this,"character");b(this,"lastDialogue",0);b(this,"cooldown",1e4);b(this,"audioCtx",null);this.character=new Cs(zi.Connie),this.character.group.scale.set(2,2.35,2);const t=new $({color:15789544}),i=new B(new ut(.16,8,6),t);i.position.set(-.12,1.55,.19);const n=new B(new ut(.16,8,6),t);n.position.set(.12,1.55,.19),this.character.group.add(i),this.character.group.add(n),this.character.setLogoTexture(pd(zi.Connie.shirtColor));const s=this._makeNameBoard();s.position.set(0,8.8,0);const r=new B(new hn(1.2,1.7,32),new Nt({color:16109664,side:Ut}));r.rotation.x=-Math.PI/2,r.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(s),this.wrapper.add(r),this.wrapper.position.set(cs.x,0,cs.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");return t.fillStyle="rgba(200, 150, 20, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("CONNIE",128,32),new B(new ht(2.4,.6),new Nt({map:new Es(e),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const e=this.audioCtx,t=7;for(let i=0;i<t;i++){const n=e.currentTime+i*.16,s=e.createOscillator(),r=e.createGain(),a=480+i*18+Math.random()*60;s.frequency.setValueAtTime(a,n),s.frequency.exponentialRampToValueAtTime(a*.48,n+.13),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.35,n+.03),r.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(r),r.connect(e.destination),s.start(n),s.stop(n+.17)}}catch{}}update(e,t,i,n){this.character.update(e);const s=t-cs.x,r=i-cs.z;this.character.group.rotation.y=Math.atan2(s,r);const a=Math.sqrt(s*s+r*r),l=Date.now();if(a<xs.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=yc[Math.floor(Math.random()*yc.length)];return n.show(zi.Connie,c),this.lastDialogue=l,!0}return!1}dispose(e){var t;e.remove(this.wrapper),(t=this.audioCtx)==null||t.close()}};b(xs,"POS",cs),b(xs,"TRIGGER_RADIUS",16);let ms=xs;const vx={Connie:{scale:[2,2.35,2],addGeometry:o=>{const e=new $({color:15789544}),t=new B(new ut(.16,8,6),e);t.position.set(-.12,1.55,.19);const i=new B(new ut(.16,8,6),e);i.position.set(.12,1.55,.19),o.add(t),o.add(i)}},Mikayla:{scale:[1.9,1.9,1.9]}};class yx{constructor(){b(this,"renderer");b(this,"scene");b(this,"camera");b(this,"canvas");b(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new Ra({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new Pa;const e=new Ba(16777215,.7);this.scene.add(e);const t=new Hn(16774624,1);t.position.set(2,4,5),this.scene.add(t);const i=new Hn(14741759,.4);i.position.set(-3,2,3),this.scene.add(i),this.camera=new Dt(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(e){var c;if(this.cache.has(e.name))return this.cache.get(e.name);this.scene.children.filter(d=>!(d instanceof As)).forEach(d=>this.scene.remove(d));const i=vx[e.name],n=new Cs(e),[s,r,a]=(i==null?void 0:i.scale)??[2,2,2];n.group.scale.set(s,r,a),n.group.rotation.y=-Math.PI*.18,(c=i==null?void 0:i.addGeometry)==null||c.call(i,n.group),this.scene.add(n.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(e.name,l),this.scene.remove(n.group),l}dispose(){this.renderer.dispose()}}class _x{constructor(){b(this,"container");b(this,"portrait");b(this,"nameEl");b(this,"textEl");b(this,"portraitRenderer");b(this,"hideTimeout",null);b(this,"visible",!1);this.portraitRenderer=new yx,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const e=document.createElement("style");e.id="speech-bubble-styles",e.textContent=`
      #tem-speech-bubble {
        position: fixed;
        left: 0;
        top: 0;
        /* transform is set dynamically to position above character */
        transform: translate(-50%, -115%) scale(0.85);
        display: none;
        align-items: flex-end;
        gap: 14px;
        background: #ffffff;
        border-radius: 22px;
        padding: 12px 18px 12px 12px;
        box-shadow: 0 6px 28px rgba(0,0,0,0.28), 0 1px 4px rgba(0,0,0,0.12);
        border: 2.5px solid #e8e8e8;
        width: 290px;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.18s ease, transform 0.18s ease;
        pointer-events: none;
      }
      #tem-speech-bubble.sb-visible {
        opacity: 1;
        transform: translate(-50%, -115%) scale(1);
      }
      /* Tail pointing downward */
      #tem-speech-bubble::after {
        content: '';
        position: absolute;
        bottom: -16px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 16px solid #ffffff;
        filter: drop-shadow(0 3px 2px rgba(0,0,0,0.08));
      }
      /* Border tail (slightly larger, sits behind) */
      #tem-speech-bubble::before {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; height: 0;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-top: 19px solid #e8e8e8;
      }
      .sb-portrait-wrap {
        position: relative;
        flex-shrink: 0;
      }
      .sb-portrait-img {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        border: 3px solid #f0f0f0;
        background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
        object-fit: cover;
        display: block;
      }
      .sb-text-area {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        flex: 1;
        min-width: 0;
      }
      .sb-name {
        font-family: system-ui, -apple-system, sans-serif;
        font-weight: 800;
        font-size: 13px;
        color: #222;
        text-transform: uppercase;
        letter-spacing: 0.6px;
      }
      .sb-text {
        font-family: system-ui, -apple-system, sans-serif;
        font-size: 14px;
        color: #111;
        line-height: 1.45;
        word-wrap: break-word;
      }
    `,document.head.appendChild(e)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const e=document.createElement("div");e.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",e.appendChild(this.portrait);const t=document.createElement("div");t.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",t.appendChild(this.nameEl),t.appendChild(this.textEl),this.container.appendChild(e),this.container.appendChild(t),document.body.appendChild(this.container)}show(e,t){this.nameEl.textContent=e.name,this.textEl.textContent=t,this.portrait.src=this.portraitRenderer.renderPortrait(e),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(e,t){this.container.style.left=`${e}px`,this.container.style.top=`${t}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const ds=15;class bx{constructor(){b(this,"overlay");b(this,"titleEl");b(this,"bodyEl");b(this,"sloganEl");b(this,"hintEl");b(this,"progressBar");b(this,"_active",!1);b(this,"_readyToResume",!1);b(this,"_resumeCallback",null);b(this,"_lockTimer",null);b(this,"_countdownInterval",null);b(this,"_autoTimer",null);b(this,"_secondsLeft",ds);if(!document.getElementById("dp-styles")){const a=document.createElement("style");a.id="dp-styles",a.textContent=`
        @keyframes dpBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes dpSlideUp { from{transform:translateY(36px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes dpDrain { from{width:100%} to{width:0%} }
      `,document.head.appendChild(a)}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed; inset: 0; z-index: 8000;
      background: rgba(0,0,0,0.74);
      display: none; flex-direction: column;
      align-items: center; justify-content: flex-end;
      padding: 0 0 88px 0;
      touch-action: manipulation;
    `;const e=document.createElement("div");e.style.cssText=`
      width: min(480px, 92vw);
      background: #1A1208;
      border: 2.5px solid #C1666B;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 12px 48px rgba(0,0,0,0.85);
      font-family: system-ui, -apple-system, sans-serif;
      animation: dpSlideUp 0.22s ease-out both;
    `;const t=document.createElement("div");t.style.cssText=`
      background: linear-gradient(135deg, #C1666B 0%, #9E4A50 100%);
      padding: 14px 20px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,this.titleEl=document.createElement("div"),this.titleEl.style.cssText=`
      color: #fff;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 0.4px;
      text-shadow: 0 1px 4px rgba(0,0,0,0.35);
      flex: 1;
    `;const i=document.createElement("div");i.style.cssText=`
      background: rgba(0,0,0,0.28);
      color: #fff;
      font-size: 15px;
      font-weight: 900;
      border-radius: 50%;
      width: 34px; height: 34px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; margin-left: 12px;
      font-variant-numeric: tabular-nums;
    `,this.hintEl=i;const n=document.createElement("div");n.style.cssText=`
      height: 4px;
      background: rgba(193,102,107,0.25);
    `,this.progressBar=document.createElement("div"),this.progressBar.style.cssText=`
      height: 100%;
      background: #C1666B;
      width: 100%;
      transform-origin: left;
      transition: none;
    `,n.appendChild(this.progressBar);const s=document.createElement("div");s.style.cssText="padding: 16px 20px 4px;",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText=`
      color: #EEE8E0;
      font-size: 14.5px;
      line-height: 1.65;
      white-space: pre-wrap;
      max-height: 36vh;
      overflow-y: auto;
    `,this.sloganEl=document.createElement("div"),this.sloganEl.style.cssText=`
      color: rgba(255,255,255,0.28);
      font-size: 11.5px;
      font-style: italic;
      text-align: center;
      padding: 6px 20px 2px;
      letter-spacing: 0.2px;
      line-height: 1.5;
      white-space: pre-line;
    `;const r=document.createElement("div");r.style.cssText=`
      color: rgba(193,102,107,0.75);
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      padding: 10px 0 16px;
      letter-spacing: 0.6px;
      animation: dpBlink 1.2s ease-in-out infinite;
    `,r.textContent="▶  TAP GAS or REV to skip",t.appendChild(this.titleEl),t.appendChild(i),s.appendChild(this.bodyEl),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(this.sloganEl),e.appendChild(r),this.overlay.appendChild(e),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",a=>{a.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(e,t,i,n,s){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=i,this._secondsLeft=ds,this.titleEl.textContent=e,this.bodyEl.textContent=t,this.sloganEl.textContent=n??"",this.sloganEl.style.display=n?"block":"none",this.hintEl.textContent=String(ds),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${ds}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},ds*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const e=this._resumeCallback;this._resumeCallback=null,e==null||e()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const xr=[`Our finishes don't copy the earth.
They breathe it.`,`Our surfaces don't mimic stone.
They become it.`,`Our renders don't imitate time.
They carry it.`,`Our finishes don't fake patina.
They earn it.`,`Our textures don't pretend wilderness.
They invite it in.`,`Our coatings don't replicate nature.
They speak its language.`,`Our renders don't echo the land.
They belong to it.`,`Our surfaces don't borrow beauty.
They grow it.`,`Our finishes don't chase authenticity.
They live it.`,`Our textures don't follow nature.
They walk beside it.`,`Our plaster doesn't cover walls.
It tells their story.`,`The trowel doesn't rush.
Neither do we.`,`One wall. One coat. One very long explanation to the client.
We do this every day.`,`From blank concrete to the red glow of Kimberley stone.
Through craft. Through patience. Through Connie.`,`A city of walls waiting to become something.
We're on our way.`],vr=["DRIVING TIP: The spill meter doesn't care about your excuses. Neither does the road.","DRIVING TIP: Traffic in Melbourne has never once moved for a plastering van. You are not the exception.","DRIVING TIP: Hitting a car at speed is, technically, texture development. We do not recommend it.","DRIVING TIP: The crew will comment on your driving. They are not wrong.","DRIVING TIP: Every bump is just the plaster finding its character. That's what you're telling yourself.","CREW TIP: Tsuyoshi once vaulted into a moving van. He's done it again. You weren't watching.","CREW TIP: Phil will finish his tea before he gets in. Always. Plan for this.","CREW TIP: Jose was ready before you left the workshop. He's been ready since Tuesday.","CREW TIP: Jarrad has been standing there fifteen minutes. He will mention it.","CREW TIP: Fabio is smiling. He's also judging your gearwork. Smile back.","CLIENT TIP: Brad has never been to Europe. The wall will be 'very European' regardless.","CLIENT TIP: Darren is stressed. Darren is always stressed. The wall is fine. Darren is not.","CLIENT TIP: Patricia has read the full TDS. She's highlighted it. She will quiz you.","CLIENT TIP: Zephyr tried to do it himself. You're not here to judge. You are here to fix it.","CLIENT TIP: Mustafa's health inspector doesn't ask questions. You shouldn't either.","HEALTH TIP: Coffee steadies the trowel. What it does to the bladder is your problem.","HEALTH TIP: The toilet block is 100 metres east of the intersection. You know this now.","HEALTH TIP: Hydration is important. Timing is more important.","HEALTH TIP: The barista knows your order. So does your bladder.","BUSINESS TIP: TEM has been in business since before your GPS was a thing. Follow the waypoint anyway.","BUSINESS TIP: Quality render takes time. So does finding parking. Plan accordingly.","BUSINESS TIP: A finish that breathes with the wall is worth more than one that cracks by Thursday. Ask Zephyr.","BUSINESS TIP: Authenticity cannot be rushed. Darren is rushing you. Do your best.","The road to perfection runs through three crew pickups, a coffee stop, and a very urgent toilet.","Connie has seen everything. She is still laughing.","The van has been in worse situations. The plaster has not.","This city has 240 square units of roads and exactly one decent flat white. Find it.",`The walls remember every hand that shaped them.
The van remembers nothing. Drive carefully.`],wx=["One wall. One chance. The render decides everything.","A surface waiting to become something real.","From bare substrate to finished art — this is the job.",`The craft doesn't care about the deadline.
You do. Get there.`,"Clients don't buy plaster. They buy the moment the wall changes everything.",`Not every wall gets a second coat.
This one does. Make it count.`,"The difference between ordinary and extraordinary is one hand-applied layer.","Somewhere between the bucket and the wall, something real happens.",`They called TEM because they want it done right.
Don't prove them wrong.`,"This isn't a wall. It's a surface waiting to breathe."];function Ji(o){return o[Math.floor(Math.random()*o.length)]}const Cn="./",bi={theme:`${Cn}audio/theme.aac`,theme2:`${Cn}audio/theme2.aac`,credits:`${Cn}audio/credits.m4a`,radio1:`${Cn}audio/radio1.m4a`,radio2:`${Cn}audio/radio2.m4a`,radio3:`${Cn}audio/radio3.m4a`},Ki=[{id:"tem-fm",name:"TEM FM",freq:"88.3",tagline:"Melbourne's Most Refined",songs:["★ Troweled Earth (The Anthem) [LIVE]","Fresh Plaster Dreams","Tadelakt Sunrise","Ochre & Ochre","Marbellino Midnight","Render Slowly (feat. Phil)"],dj:["TEM FM — opening tonight with the anthem. Turn it up.","That was Troweled Earth — The Anthem. Written on site, finished in the van.","You're listening to TEM FM. Don't spill.","Smooth surfaces. Smoother sounds. TEM FM 88.3.","That was a certified classic. Like a three-coat stucco system.","Blood red clay to concrete's cold embrace... TEM FM."],bpm:68,rootHz:220,vibe:"ambient",color:"#C8A86A",audioFile:bi.theme},{id:"connie-gold",name:"CONNIE'S GOLD",freq:"103.7",tagline:"For the Craft, Darling",songs:["Quando Quando Quando (In the Van)","Bella Ciao Bella Render","Volare Trowel","Arrivederci Deadline","O Sole Mio Stucco"],dj:["Ehhhh — welcome to Connie's Gold! Ha ha ha ha!","You're listening to the best station. Connie said so. She's right.","Connie's Gold 103.7 — music to plaster by, darling.","Next up: another classic. Just like our Antique Stucco. Ha!"],bpm:92,rootHz:261.63,vibe:"italian",color:"#E8A050",audioFile:bi.radio1},{id:"brunswick-beats",name:"BRUNSWICK BEATS",freq:"99.9",tagline:"Lo-Fi for Lo-Fi People",songs:["study playlist #47","plaster & chill","waiting for jarrad (again)","lost my trowel","bladder full, waypoint far"],dj:["Brunswick Beats. For people who get it.","That was a vibe. This is also a vibe. 99.9.","We don't talk. We just play the music. Brunswick Beats.","Jarrad submitted this playlist. He says it slaps. It does."],bpm:80,rootHz:196,vibe:"lofi",color:"#8B9EC8",audioFile:bi.radio2},{id:"the-scaffold",name:"THE SCAFFOLD",freq:"107.1",tagline:"Tune In, Fall Off",songs:["30% Penalty (Acoustic)","Epstein Was Right (Radio Edit)","Topknot Thunder","Hard Hat? Never Heard of Her","Five Floors No Fear"],dj:["THE SCAFFOLD. 107.1. You WILL survive the jump.","That riff goes harder than Tsuyoshi vaulting the van door.","Tune in. Fall off. THE SCAFFOLD.","Jarrad called in. Said he's been waiting fifteen minutes. Legend."],bpm:140,rootHz:164.81,vibe:"rock",color:"#C1666B"},{id:"fabio-pizza",name:"FABIO'S PIZZA RADIO",freq:"92.5",tagline:"Music for Real Men",songs:['Ehhhh (12" Extended Mix)',"San Marzano Morning","La Dolce Trowel","One Slice, Two Slice","Thin Base, Wood Fire (feat. Fabio)"],dj:["Fabio's Pizza Radio — ehhhh. That is all.","You're listening to 92.5. The pizza is coming. Be patient. Ehhhh.","That song — like a perfect margherita. Simple. Honest. Ehhhh.","Fabio's Pizza Radio. For men with trowels and good taste."],bpm:108,rootHz:246.94,vibe:"italian",color:"#D4602A",audioFile:bi.radio3},{id:"tem-talk",name:"TEM TALK",freq:"91.1",tagline:"Conversations From the Site",songs:["★ The Troweled Earth Podcast [LIVE]","Deep Dive: Blood Red Clay vs Venetian","Interview: Matt on the Warlord Method","Ask Connie — Running a Crew in Melbourne","Five Years of Tadelakt with Tsuyoshi"],dj:["TEM Talk 91.1 — real conversations from the trade.","You're listening to Melbourne's only plastering podcast. TEM Talk.","That was a conversation worth replaying. 91.1 FM.","Next up: more from the TEM crew. Stick around."],bpm:70,rootHz:180,vibe:"ambient",color:"#90B0C0",audioFile:bi.theme2}];class Mx{constructor(){b(this,"ctx",null);b(this,"masterGain");b(this,"scheduleAhead",.1);b(this,"scheduleInterval",.05);b(this,"nextBeatTime",0);b(this,"beatCount",0);b(this,"currentStation",null);b(this,"nodes",[]);b(this,"schedulerTimer",0);b(this,"compressor");b(this,"realAudioEl",null);b(this,"realAudioActive",!1)}init(){try{return this.ctx=new(window.AudioContext||window.webkitAudioContext),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.ratio.value=4,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.18,this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),!0}catch{return!1}}setVolume(e){this.masterGain&&(this.masterGain.gain.value=e),this.realAudioEl&&(this.realAudioEl.volume=Math.min(1,e*4))}play(e){var t;if(this.stop(),this.currentStation=e,this.beatCount=0,e.audioFile){const i=Math.min(1,(((t=this.masterGain)==null?void 0:t.gain.value)??.18)*4.5),n=new Audio;n.src=e.audioFile,n.loop=!0,n.volume=i;const s=n.play();s!==void 0?s.then(()=>{this.realAudioEl=n,this.realAudioActive=!0}).catch(()=>{this.realAudioActive=!1,this._startGenerative()}):(this.realAudioEl=n,this.realAudioActive=!0)}else this._startGenerative()}_startGenerative(){!this.ctx||!this.currentStation||(this.ctx.state==="suspended"&&this.ctx.resume(),this.nextBeatTime=this.ctx.currentTime+.05,this.schedulerTimer=window.setInterval(()=>this._schedule(),this.scheduleInterval*1e3))}stop(){clearInterval(this.schedulerTimer),this.nodes.forEach(e=>{var t;try{(t=e.stop)==null||t.call(e),e.disconnect()}catch{}}),this.nodes=[],this.currentStation=null,this.realAudioEl&&(this.realAudioEl.pause(),this.realAudioEl.src="",this.realAudioEl=null),this.realAudioActive=!1}_schedule(){if(!this.ctx||!this.currentStation)return;const e=this.ctx.currentTime+this.scheduleAhead;for(;this.nextBeatTime<e;){this._scheduleBeat(this.nextBeatTime,this.beatCount,this.currentStation);const t=this.currentStation.bpm/60;this.nextBeatTime+=1/t,this.beatCount++}}_scheduleBeat(e,t,i){const n=Math.floor(t/4),s=t%4,r=i.rootHz;switch(i.vibe){case"ambient":this._ambientBeat(e,t,r);break;case"lofi":this._lofiBeat(e,s,r);break;case"rock":this._rockBeat(e,s,n,r);break;case"italian":this._italianBeat(e,s,n,r);break;case"electronic":this._electronicBeat(e,s,r);break}}_ambientBeat(e,t,i){if(this.ctx&&(t%4===0&&[i,i*1.25,i*1.5,i*2].forEach((s,r)=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();a.type="sine",a.frequency.value=s*.5,c.type="lowpass",c.frequency.value=800,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.06-r*.01,e+.4),l.gain.linearRampToValueAtTime(0,e+3.5),a.connect(c),c.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+4),this.nodes.push(a,l)}),t%8===5)){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.value=i*4,s.gain.setValueAtTime(.04,e),s.gain.exponentialRampToValueAtTime(.001,e+.8),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.9),this.nodes.push(n,s)}}_lofiBeat(e,t,i){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.04),this._hihat(e,.025);const n=[i*.5,i*.5,i*.5*.75,i*.5*.9];this._bass(e,n[t],.25)}_rockBeat(e,t,i,n){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,n*.4),(t===1||t===3)&&this._snare(e,.07),this._hihat(e,.05);const s=[n*.5,n*.5,n*.5*.8,n*.5];this._distBass(e,s[t%4]),t===0&&i%2===0&&[n,n*1.5,n*2].forEach(r=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sawtooth",a.frequency.value=r,l.gain.setValueAtTime(.035,e),l.gain.linearRampToValueAtTime(0,e+.5),a.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.55),this.nodes.push(a,l)})}_italianBeat(e,t,i,n){if(this.ctx&&(t===0&&this._bass(e,n*.5,.3),(t===1||t===2||t===3)&&this._bass(e,n*.75,.12),t===0&&this._kick(e,n*.5),t===0||t===2)){const s=[n,n*1.122,n*1.26,n*1.498,n*1.682],r=s[i%s.length],a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="triangle",a.frequency.value=r;const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.frequency.value=5.5,d.gain.value=3,c.connect(d),d.connect(a.frequency),l.gain.setValueAtTime(.04,e),l.gain.linearRampToValueAtTime(0,e+.8),a.connect(l),l.connect(this.masterGain),c.start(e),a.start(e),c.stop(e+.9),a.stop(e+.9),this.nodes.push(a,c,l,d)}}_electronicBeat(e,t,i){this.ctx&&((t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.05),this._hihat(e,.03),t===0&&this._bass(e,i*.5,.25),t===2&&this._bass(e,i*.375,.2))}_kick(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.12),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.3),this.nodes.push(i,n)}_snare(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.18),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=1800,a.Q.value=.8;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.18),r.connect(a),a.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+.2),this.nodes.push(r,l)}_hihat(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.06),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.06),r.connect(a),a.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+.08),this.nodes.push(r,l)}_bass(e,t,i){if(!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="sawtooth",n.frequency.value=t,s.type="lowpass",s.frequency.value=350,r.gain.setValueAtTime(i,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),n.connect(s),s.connect(r),r.connect(this.masterGain),n.start(e),n.stop(e+.4),this.nodes.push(n,r)}_distBass(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createWaveShaper(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t;const r=new Float32Array(256);for(let a=0;a<256;a++){const l=a*2/256-1;r[a]=Math.max(-.6,Math.min(.6,l*3))}n.curve=r,s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(.001,e+.3),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.35),this.nodes.push(i,s)}}class Sx{constructor(){b(this,"container");b(this,"stationIdx",0);b(this,"on",!1);b(this,"songIdx",0);b(this,"djIdx",0);b(this,"songTimer",0);b(this,"djTimer",0);b(this,"nameEl");b(this,"songEl");b(this,"djEl");b(this,"iconEl");b(this,"freqEl");b(this,"engine",new Mx);b(this,"engineReady",!1);b(this,"volumeSlider");b(this,"rafId",0);b(this,"lastUpdateTs",0);b(this,"_volOpen",!1);this._buildUI(),this.lastUpdateTs=performance.now(),this._tick()}_buildUI(){this.container=document.createElement("div"),this.container.style.cssText=`
      z-index: 1; font-family: system-ui, sans-serif;
      display: flex; flex-direction: column; align-items: stretch; gap: 4px;
      user-select: none; transition: opacity 0.4s; width: 100%;
    `;const e=document.createElement("div");e.style.cssText=`
      display: flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(200,168,106,0.2); border-radius: 12px;
      padding: 8px 12px;
      pointer-events: auto; touch-action: manipulation;
    `,this.iconEl=document.createElement("span"),this.iconEl.textContent="📻",this.iconEl.style.cssText="font-size:16px; opacity:0.85; line-height:1;";const t=document.createElement("span");t.textContent="◀",t.style.cssText="color:rgba(200,168,106,0.8); font-size:12px; cursor:pointer; padding:0 2px; line-height:1;",t.addEventListener("click",()=>this._changeStation(-1));const i=document.createElement("div");i.style.cssText="display:flex; flex-direction:column; align-items:center; min-width:120px;",this.nameEl=document.createElement("span"),this.nameEl.style.cssText=`
      color: #C8A86A; font-size: 11px; font-weight: 900;
      letter-spacing: 1.5px; text-transform: uppercase; line-height:1.2;
    `,this.freqEl=document.createElement("span"),this.freqEl.style.cssText="color: rgba(200,168,106,0.5); font-size: 9px; letter-spacing: 0.5px;",i.appendChild(this.nameEl),i.appendChild(this.freqEl);const n=document.createElement("span");n.textContent="▶",n.style.cssText="color:rgba(200,168,106,0.8); font-size:12px; cursor:pointer; padding:0 2px; line-height:1;",n.addEventListener("click",()=>this._changeStation(1));const s=document.createElement("span");s.textContent="🔊",s.title="Volume",s.style.cssText="font-size:14px; cursor:pointer; opacity:0.8; line-height:1; padding:0 1px;",s.addEventListener("click",d=>{d.stopPropagation(),this._volOpen=!this._volOpen,a.style.display=this._volOpen?"flex":"none"});const r=document.createElement("span");r.textContent="⏻",r.title=this.on?"Turn Off":"Turn On",r.style.cssText=`
      font-size:14px; cursor:pointer; line-height:1; padding:0 1px;
      color: rgba(200,168,106,0.8); font-weight:bold;
    `,r.addEventListener("click",()=>{this._togglePower(),r.title=this.on?"Turn Off":"Turn On",r.style.color=this.on?"#ff6b6b":"rgba(200,168,106,0.8)"}),e.appendChild(this.iconEl),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(s),e.appendChild(r);const a=document.createElement("div");a.style.cssText=`
      display: none; align-items: center; gap: 6px;
      background: rgba(8,6,4,0.88); backdrop-filter: blur(12px);
      border: 1px solid rgba(200,168,106,0.25); border-radius: 20px;
      padding: 5px 12px;
      pointer-events: auto; touch-action: manipulation;
    `;const l=document.createElement("span");l.textContent="🔈",l.style.cssText="font-size:12px; opacity:0.7;",this.volumeSlider=document.createElement("input"),this.volumeSlider.type="range",this.volumeSlider.min="0",this.volumeSlider.max="100",this.volumeSlider.value="55",this.volumeSlider.style.cssText=`
      width: 80px; height: 3px; accent-color: #C8A86A; cursor: pointer;
    `,this.volumeSlider.addEventListener("input",()=>{const d=Number(this.volumeSlider.value)/100;this.engine.setVolume(d*.18),l.textContent=d===0?"🔇":d<.4?"🔈":"🔊"});const c=document.createElement("span");c.style.cssText="color:rgba(200,168,106,0.6); font-size:9px; min-width:22px; text-align:right;",this.volumeSlider.addEventListener("input",()=>{c.textContent=this.volumeSlider.value+"%"}),c.textContent="55%",a.appendChild(l),a.appendChild(this.volumeSlider),a.appendChild(c),this.songEl=document.createElement("div"),this.songEl.style.cssText=`
      color: rgba(255,255,255,0.55); font-size: 10px;
      background: rgba(0,0,0,0.5); border-radius: 20px;
      padding: 3px 12px; max-width: 280px;
      text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
      transition: opacity 0.4s; pointer-events: none;
    `,this.djEl=document.createElement("div"),this.djEl.style.cssText=`
      color: rgba(200,168,106,0.65); font-size: 10px; font-style: italic;
      text-align: center; max-width: 300px;
      opacity: 0; transition: opacity 0.6s;
      pointer-events: none;
    `,this.container.appendChild(e),this.container.appendChild(a),this.container.appendChild(this.songEl),this.container.appendChild(this.djEl),this._renderStation()}getEl(){return this.container}_renderStation(){const e=Ki[this.stationIdx];this.nameEl.textContent=e.name,this.nameEl.style.color=e.color,this.freqEl.textContent=`${e.freq} FM`,this.songEl.textContent=this.on?`♫  ${e.songs[this.songIdx%e.songs.length]}`:"— OFF —",this.iconEl.style.opacity=this.on?"1":"0.55"}_togglePower(){this.engineReady||(this.engineReady=this.engine.init()),this.on=!this.on,this.on?(this.engine.play(Ki[this.stationIdx]),this._showDJ()):this.engine.stop(),this._renderStation()}_changeStation(e){this.stationIdx=(this.stationIdx+e+Ki.length)%Ki.length,this.songIdx=0,this.songTimer=0,this.on&&(this.engineReady||(this.engineReady=this.engine.init()),this.engine.play(Ki[this.stationIdx]),this._showDJ()),this._renderStation()}_showDJ(){const e=Ki[this.stationIdx],t=e.dj[this.djIdx%e.dj.length];this.djEl.textContent=`"${t}"`,this.djEl.style.opacity="1",setTimeout(()=>{this.djEl.style.opacity="0"},4500),this.djIdx++}_tick(){const e=performance.now(),t=(e-this.lastUpdateTs)/1e3;if(this.lastUpdateTs=e,this.on){Ki[this.stationIdx];const i=45+this.songIdx%3*10;this.songTimer+=t,this.songTimer>=i&&(this.songTimer=0,this.songIdx++,this._renderStation()),this.djTimer+=t,this.djTimer>=30&&(this.djTimer=0,this._showDJ())}this.rafId=requestAnimationFrame(()=>this._tick())}setVisible(e){this.container.style.opacity=e?"1":"0",this.container.style.pointerEvents=e?"auto":"none"}destroy(){cancelAnimationFrame(this.rafId),this.engine.stop(),this.container.remove()}}const Tx="./",so=`${Tx}tem-logo-white.jpg`,oo=[{id:"melbourne",name:"TROWELED EARTH MELBOURNE",role:"presents",line:"",accentColor:"#C8A86A",skyTop:"#040810",skyBot:"#102040",particleColor:"#C8A86A",particleKind:"dust",buildingTint:"#182840",spotColor:"#C8A86A33",voiceChar:"Narrator"},{id:"matt",name:"MATT",role:"The Warlord · Lead Plasterer",line:"I can be any type of Matt, but I prefer the Diplomatt!",accentColor:"#FF3355",skyTop:"#8A0010",skyBot:"#CC0030",particleColor:"#FF5070",particleKind:"sparks",buildingTint:"#440010",spotColor:"#FF335555",voiceChar:"Matt"},{id:"tsuyoshi",name:"TSUYOSHI",role:"The Samurai · Tadelakt Specialist",line:"I no like bug. Where is... da respect!",accentColor:"#00DD88",skyTop:"#005530",skyBot:"#009958",particleColor:"#60FFB0",particleKind:"dust",buildingTint:"#003322",spotColor:"#00DD8855",voiceChar:"Tsuyoshi"},{id:"connie",name:"CONNIE",role:"Operations Queen · Born in Germany",line:"I'll crush all of you!!! Hahahahahaha!",accentColor:"#FFB030",skyTop:"#884400",skyBot:"#CC7700",particleColor:"#FFD060",particleKind:"smoke",buildingTint:"#442200",spotColor:"#FFB03055",voiceChar:"Connie"},{id:"jarrad",name:"JARRAD",role:"Scaffold Specialist · Topknot Philosopher",line:"My plan is convince everyone I have a plan, tho I do not.... Did you get any of that?",accentColor:"#8866FF",skyTop:"#220066",skyBot:"#4400AA",particleColor:"#AA88FF",particleKind:"dust",buildingTint:"#110033",spotColor:"#8866FF55",voiceChar:"Jarrad"},{id:"fabio",name:"FABIO",role:"Plasterer · Pizza Consultant",line:"Come, we can have pizza. Andiamo, fa presto!",accentColor:"#FF7722",skyTop:"#883300",skyBot:"#CC5500",particleColor:"#FFAa40",particleKind:"smoke",buildingTint:"#441A00",spotColor:"#FF772255",voiceChar:"Fabio"},{id:"joe",name:"JOE",role:"The Wildcard · Knows Too Much",line:"Y'all seen that Epstein list? So many chosen people! And Trump!",accentColor:"#F0C000",skyTop:"#3A3000",skyBot:"#887700",particleColor:"#FFE040",particleKind:"sparks",buildingTint:"#1A1600",spotColor:"#F0C00055",voiceChar:"Joe"},{id:"phil",name:"PHIL",role:"The Quiet Legend · Renders",line:"I get asked to 'fill me crack in?' I don't get it...",accentColor:"#44CCCC",skyTop:"#004444",skyBot:"#007777",particleColor:"#88FFFF",particleKind:"dust",buildingTint:"#002222",spotColor:"#44CCCC55",voiceChar:"Phil"},{id:"jose",name:"JOSE GARCIA",role:"THE HEART OF TROWELED EARTH · El Maestro",line:"Some people call me Wall Jesus... They're not wrong.",accentColor:"#FFD700",skyTop:"#1A0040",skyBot:"#FF8C00",particleColor:"#FFD700",particleKind:"sparks",buildingTint:"#1A0020",spotColor:"#FFD70066",voiceChar:"Jose",durationMs:14e3,heroReveal:!0}],Ex=8e3,Ax=8e3,Cx=5e3,_c=350;class Rx{constructor(){b(this,"overlay");b(this,"canvas");b(this,"ctx2d");b(this,"textLayer");b(this,"themeAudio",null);b(this,"logoImg",null);b(this,"done",!1);b(this,"rafId",0);b(this,"timers",[]);b(this,"particles",[]);b(this,"panX",0);b(this,"camShake",0);b(this,"currentScene",null);b(this,"sceneT",0);b(this,"buildings",[])}play(){return new Promise(e=>this._tapThenBuild(e))}_tapThenBuild(e){this._injectStyles();const t=new Image;t.src=so,t.onload=()=>{this.logoImg=t};const i=document.createElement("div");i.style.cssText=`
      position:fixed; inset:0; z-index:50001; background:#000;
      display:flex; flex-direction:column; align-items:center; justify-content:space-between;
      padding: clamp(40px,8vh,80px) 0;
      font-family:system-ui,sans-serif; cursor:pointer; touch-action:manipulation;
    `,i.innerHTML=`
      <div></div>

      <div style="text-align:center;">
        <div style="color:#C8A86A; font-size:clamp(18px,5vw,28px); font-weight:900;
                    letter-spacing:4px; text-shadow:0 0 40px rgba(200,168,106,0.5);">
          TROWELED EARTH RUSH
        </div>
        <div style="color:rgba(200,168,106,0.55); font-size:clamp(12px,3vw,16px);
                    margin-top:36px; letter-spacing:3px; animation:tapPulse 1.4s ease-in-out infinite;">
          TAP TO BEGIN
        </div>
      </div>

      <img src="${so}" alt="TEM"
        style="height:clamp(80px,18vw,130px); width:auto; object-fit:contain;
               filter:brightness(0.9) drop-shadow(0 0 20px rgba(200,168,106,0.4));
               animation:tapPulse 3s ease-in-out infinite;"
        onerror="this.style.display='none'">
    `;const n=new Audio;n.src=bi.theme,n.volume=.75,n.loop=!0,n.preload="auto",this.themeAudio=n,document.body.appendChild(i);let s=!1;const r=()=>{s||(s=!0,n.play().catch(()=>{this.themeAudio=null}),i.remove(),this._build(e))};i.addEventListener("pointerup",r,{once:!0})}_build(e){this.overlay=document.createElement("div"),this.overlay.id="intro-overlay",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:50000; background:#000; overflow:hidden;
      font-family: system-ui, -apple-system, sans-serif;
    `,this.canvas=document.createElement("canvas"),this.canvas.style.cssText=`
      position:absolute; inset:0; width:100%; height:100%;
      image-rendering:crisp-edges;
    `,this._resizeCanvas(),window.addEventListener("resize",()=>this._resizeCanvas()),this.ctx2d=this.canvas.getContext("2d");const t=document.createElement("div");t.className="intro-bar intro-bar-top";const i=document.createElement("div");i.className="intro-bar intro-bar-bot",this.textLayer=document.createElement("div"),this.textLayer.style.cssText=`
      position:absolute; inset:0; z-index:10;
      display:flex; flex-direction:column;
      justify-content:flex-end;
      padding: 0 clamp(20px,6vw,60px) clamp(60px,12vh,110px);
      pointer-events:none;
    `;const n=document.createElement("div");n.id="intro-grain",n.style.cssText=`
      position:absolute; inset:0; z-index:8; pointer-events:none;
      opacity:0.06;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      animation: grainAnim 0.15s steps(1) infinite;
    `;const s=document.createElement("button");s.textContent="SKIP ▶",s.style.cssText=`
      position:absolute; bottom:20px; right:20px; z-index:20;
      background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2);
      color:rgba(255,255,255,0.5); font-size:11px; font-weight:700;
      padding:7px 14px; border-radius:20px; cursor:pointer;
      letter-spacing:1px; touch-action:manipulation;
    `,s.addEventListener("click",()=>this._finish(e)),this.overlay.appendChild(this.canvas),this.overlay.appendChild(n),this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(this.textLayer),this.overlay.appendChild(s),document.body.appendChild(this.overlay),this._genBuildings(),this._startScene(oo[0]);let r=Ax;for(let c=1;c<oo.length;c++){const d=oo[c];this._after(r,()=>this._startScene(d)),r+=d.durationMs??Ex}this._after(r,()=>this._showTitle(e));let a=performance.now();const l=c=>{if(this.done)return;const d=Math.min((c-a)/1e3,.05);a=c,this.sceneT+=d,this._update(d),this._draw(),this.rafId=requestAnimationFrame(l)};this.rafId=requestAnimationFrame(l)}_startScene(e){this.done||(this.currentScene=e,this.sceneT=0,this.panX=0,this.particles=[],this.camShake=e.id==="matt"||e.id==="jose"?.5:0,this._updateText(e))}_updateText(e){if(!this.textLayer)return;const t=e.id==="melbourne";this.textLayer.innerHTML=`
      <div style="animation: introSlideUp 0.5s ease both;">
        ${t?`
          <div style="color:rgba(200,168,106,0.6); font-size:clamp(9px,2.5vw,12px);
                      font-weight:700; letter-spacing:4px; margin-bottom:12px;">
            TROWELED EARTH MELBOURNE PRESENTS
          </div>
          <img src="${so}" alt="TEM"
            style="height:clamp(50px,10vw,80px); width:auto; object-fit:contain;
                   filter:brightness(0.85); display:block; margin-bottom:16px;"
            onerror="this.style.display='none'">
        `:e.heroReveal?`
          <!-- ── JOSE HERO REVEAL ── -->
          <div style="animation:introSlideUp 0.8s ease both;">
            <div style="color:#FFD700; font-size:clamp(8px,2vw,10px);
                        font-weight:900; letter-spacing:6px; margin-bottom:10px;
                        text-shadow:0 0 20px #FFD700;">
              ★ &nbsp; THE HEART OF TROWELED EARTH &nbsp; ★
            </div>
            <div style="display:inline-block; background:linear-gradient(135deg,#E8A830,#FFD700);
                        color:#000; font-size:clamp(8px,1.8vw,10px); font-weight:900;
                        letter-spacing:4px; padding:3px 12px; border-radius:4px;
                        margin-bottom:14px; text-transform:uppercase;">
              EL MAESTRO · WALL JESUS
            </div>
            <div style="color:#FFD700; font-size:clamp(48px,15vw,88px); font-weight:900;
                        letter-spacing:3px; line-height:0.95; margin-bottom:16px;
                        text-shadow:0 0 60px #FFD700, 0 0 120px #FF8C00,
                                    0 4px 40px rgba(0,0,0,0.95);
                        font-style:italic;">
              JOSE
            </div>
            <div style="color:#fff; font-size:clamp(12px,3vw,16px);
                        font-style:italic; opacity:0.9; letter-spacing:1px;
                        text-shadow:0 2px 20px #000, 0 0 40px #FFD70066;
                        max-width:340px; margin:0 auto; line-height:1.4;">
              "${e.line}"
            </div>
          </div>
        `:`
          <div style="color:${e.accentColor}; font-size:clamp(9px,2.5vw,11px);
                      font-weight:800; letter-spacing:5px; text-transform:uppercase;
                      margin-bottom:8px; opacity:0.85;">
            ${e.role}
          </div>
          <div style="color:#fff; font-size:clamp(30px,9vw,58px); font-weight:900;
                      letter-spacing:2px; line-height:1; margin-bottom:12px;
                      text-shadow: 0 2px 30px rgba(0,0,0,0.9), 0 0 60px ${e.accentColor}44;">
            ${e.name}
          </div>
          <div style="color:${e.accentColor}; font-size:clamp(13px,3.5vw,18px);
                      font-style:italic; opacity:0.8; letter-spacing:0.5px;">
            "${e.line}"
          </div>
        `}
      </div>
    `}_update(e){const t=this.currentScene;if(t){this.panX+=e*18,this.camShake>0&&(this.camShake=Math.max(0,this.camShake-e*.8)),t.particleKind!=="none"&&this._spawnParticles(t,e);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];n.x+=n.vx*e,n.y+=n.vy*e,n.life-=e,n.alpha=Math.max(0,n.life/n.maxLife),n.life<=0&&this.particles.splice(i,1)}}}_spawnParticles(e,t){const i=this.canvas.width,n=this.canvas.height,s=e.particleKind==="sparks"?12:4;for(let r=0;r<s*t;r++){const a=Math.random()*i,l=n*.62;let c;e.particleKind==="sparks"?c={x:a,y:l-Math.random()*n*.15,vx:(Math.random()-.5)*80,vy:-Math.random()*120-40,life:.4+Math.random()*.4,maxLife:.8,size:1.5+Math.random()*2,alpha:1}:e.particleKind==="smoke"?c={x:a,y:l,vx:(Math.random()-.5)*20,vy:-Math.random()*30-10,life:1.5+Math.random(),maxLife:2.5,size:20+Math.random()*40,alpha:.3}:c={x:a,y:l+Math.random()*n*.1,vx:(Math.random()-.5)*15,vy:-Math.random()*15,life:1+Math.random()*1.5,maxLife:2.5,size:2+Math.random()*5,alpha:.5},this.particles.push(c)}}_draw(){const e=this.canvas.width,t=this.canvas.height,i=this.currentScene;if(!i)return;const n=this.ctx2d,s=this.camShake>0?(Math.random()-.5)*this.camShake*4:0;n.save(),n.translate(s,s*.5);const r=n.createLinearGradient(0,0,0,t*.65);r.addColorStop(0,i.skyTop),r.addColorStop(1,i.skyBot),n.fillStyle=r,n.fillRect(0,0,e,t),this._drawStars(n,e,t,i),this._drawCity(n,e,t,i);const a=n.createLinearGradient(0,t*.62,0,t);a.addColorStop(0,i.spotColor),a.addColorStop(.3,"#000000CC"),a.addColorStop(1,"#000000"),n.fillStyle=a,n.fillRect(0,t*.62,e,t*.38),this._drawRoad(n,e,t,i),this._drawParticles(n,i),this._drawBuckets(n,e,t,i),i.id!=="melbourne"&&this._drawCharSilhouette(n,e,t,i),i.id!=="melbourne"&&i.line&&this.sceneT>2&&this._drawSpeechBubble(n,e,t,i);const l=n.createRadialGradient(e/2,t/2,t*.1,e/2,t/2,t*.8);if(l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.72)"),n.fillStyle=l,n.fillRect(0,0,e,t),i.id!=="melbourne"&&this.sceneT<.6){const c=Math.max(0,.6-this.sceneT)*.4;n.fillStyle=i.accentColor+Math.round(c*255).toString(16).padStart(2,"0"),n.fillRect(0,0,e,t)}n.restore()}_drawStars(e,t,i,n){const s=n.id.charCodeAt(0)*31;e.fillStyle="rgba(255,255,255,0.7)";for(let r=0;r<60;r++){const a=(s*(r+1)*1234567%t+t)%t,l=(s*(r+7)*765432%(i*.5)+i*.01)%(i*.5),c=.5+s*r*11%10/10,d=(this.sceneT*.8+r*.3)%(Math.PI*2);e.globalAlpha=.3+Math.sin(d)*.3,e.beginPath(),e.arc(a,l,c,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawCity(e,t,i,n){const s=i*.62,r=this.panX*.3%t;for(let a=-1;a<=1;a++){const l=a*t-r;for(const c of this.buildings){const d=c.x+l;if(d+c.w<-50||d>t+50)continue;e.fillStyle=n.buildingTint,e.fillRect(d,s-c.h,c.w,c.h),e.fillStyle=n.accentColor+"55";const u=Math.floor(c.w/10),h=Math.floor(c.h/14);for(let f=0;f<u;f++)for(let g=0;g<h;g++){if(!(Math.sin((c.x+f*17+g*13)*.618)>.1))continue;const m=d+f*10+2,p=s-c.h+g*14+3,w=Math.sin(this.sceneT*2+f+g)>.95;e.fillStyle=w?"#fff4":n.accentColor+"66",e.fillRect(m,p,5,7)}e.strokeStyle=n.accentColor+"22",e.lineWidth=1,e.strokeRect(d,s-c.h,c.w,c.h)}}}_drawRoad(e,t,i,n){const s=i*.72,r=this.panX*1.5;if(e.fillStyle="#0a0a0a",e.fillRect(0,s,t,i-s),e.strokeStyle=n.accentColor+"30",e.lineWidth=2,e.setLineDash([30,40]),e.lineDashOffset=-r%70,e.beginPath(),e.moveTo(0,s+20),e.lineTo(t,s+20),e.stroke(),e.setLineDash([]),n.id==="melbourne"){const a=this.panX*60%(t+200)-100;this._drawVan(e,a,s+5)}}_drawVan(e,t,i){e.save(),e.translate(t,i),e.fillStyle="#C1660A",e.beginPath(),e.roundRect(0,0,90*.8,42*.8,4*.8),e.fill(),e.fillStyle="#A04A00",e.beginPath(),e.roundRect(60*.8,4*.8,30*.8,32*.8,3*.8),e.fill(),e.fillStyle="#6090D080",e.fillRect(64*.8,7*.8,22*.8,16*.8),e.fillStyle="#111",e.beginPath(),e.arc(18*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(72*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.fillStyle="#FFFF8088",e.fillRect(88*.8,16*.8,3*.8,8*.8),e.restore()}_drawCharSilhouette(e,t,i,n){if(n.id==="connie"){this._drawConnieBond(e,t,i,n);return}const s=i*.62,r=t*.68,a=Math.min(1,this.sceneT*2);e.save(),e.globalAlpha=a;const l=e.createRadialGradient(r,s-80,10,r,s-80,160);l.addColorStop(0,n.accentColor+"50"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(r,s-80,160,220,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.45)",e.beginPath(),e.ellipse(r,s+6,40,9,0,0,Math.PI*2),e.fill();const c=Math.min(i*.52,240),u={jose:"#C8856A",matt:"#E8C0A0",tsuyoshi:"#F0D4B0",connie:"#F0C8A0",jarrad:"#E0B090",fabio:"#D4A070",joe:"#EED8C0",phil:"#D8A888"}[n.id]??"#D0A080",h="#111111",f="#1a1a2a";e.fillStyle="#0a0a0a",e.fillRect(r-19,s-22,16,22),e.fillRect(r+3,s-22,16,22),e.fillStyle=f,e.fillRect(r-18,s-c*.44,16,c*.44-20),e.fillRect(r+2,s-c*.44,16,c*.44-20),e.fillStyle=h,e.fillRect(r-20,s-c*.8,40,c*.37),this._drawTEMLogoOnShirt(e,r,s-c*.7),e.fillStyle=u,e.fillRect(r-5,s-c*.84,10,c*.06),e.fillStyle=h,e.fillRect(r-32,s-c*.78,13,c*.32),e.fillRect(r+19,s-c*.78,13,c*.28),e.fillStyle=u,e.beginPath(),e.ellipse(r-26,s-c*.46,7,9,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(r+26,s-c*.5,7,9,-.2,0,Math.PI*2),e.fill(),e.fillStyle=u,e.beginPath(),e.ellipse(r,s-c*.87,c*.075,c*.09,0,0,Math.PI*2),e.fill(),this._drawHairAndProp(e,n,r,s,c,u),e.strokeStyle=n.accentColor,e.lineWidth=3,e.globalAlpha=a*.8,e.beginPath(),e.moveTo(r-20,s-c*.44),e.lineTo(r-20,s-c*.8),e.lineTo(r-10,s-c*.84),e.stroke(),e.restore()}_drawTEMLogoOnShirt(e,t,i){if(!this.logoImg)return;const n=20,s=n*(1504/688);e.save(),e.globalAlpha=.85,e.drawImage(this.logoImg,t-n/2,i-s/2,n,s),e.restore()}_drawConnieBond(e,t,i,n){const s=i*.62,r=t*.6,a=Math.min(1,this.sceneT*2),l=Math.min(i*.52,240),c="#F0C8A0",d=n.accentColor;e.save(),e.globalAlpha=a;const u=e.createRadialGradient(r,s-90,10,r,s-90,180);u.addColorStop(0,d+"55"),u.addColorStop(1,"transparent"),e.fillStyle=u,e.beginPath(),e.ellipse(r,s-90,180,230,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.4)",e.beginPath(),e.ellipse(r,s+5,30,7,0,0,Math.PI*2),e.fill();const h=s,f=h-l,g=h-l*.5;e.fillStyle="#D4B840",e.beginPath(),e.moveTo(r-8,f+l*.06),e.bezierCurveTo(r-40,f+l*.18,r-55,g-l*.06,r-35,h-l*.2),e.bezierCurveTo(r-28,h-l*.18,r-14,f+l*.3,r-2,f+l*.12),e.closePath(),e.fill(),e.strokeStyle="#FFE878",e.lineWidth=3,e.beginPath(),e.moveTo(r-4,f+l*.08),e.bezierCurveTo(r-30,f+l*.22,r-45,g,r-28,h-l*.22),e.stroke(),e.fillStyle="#111122",e.beginPath(),e.moveTo(r-8,h-l*.43),e.lineTo(r-14,h),e.lineTo(r-6,h),e.lineTo(r+4,h-l*.43),e.closePath(),e.fill(),e.beginPath(),e.moveTo(r-2,h-l*.43),e.lineTo(r+6,h),e.lineTo(r+16,h),e.lineTo(r+10,h-l*.43),e.closePath(),e.fill(),e.fillStyle="#111",e.fillRect(r-16,h-4,12,4),e.fillRect(r-13,h-10,2,10),e.fillRect(r+4,h-4,14,4),e.fillRect(r+15,h-10,2,10),e.fillStyle="#111111",e.beginPath(),e.moveTo(r+16,h-l*.8),e.bezierCurveTo(r+44,h-l*.79,r+58,h-l*.7,r+26,h-l*.58),e.bezierCurveTo(r+12,h-l*.51,r+8,h-l*.46,r+15,h-l*.42),e.bezierCurveTo(r+20,h-l*.39,r+15,h-l*.33,r+6,h-l*.27),e.lineTo(r-2,h-l*.42),e.bezierCurveTo(r-6,h-l*.5,r-4,h-l*.56,r+2,h-l*.66),e.bezierCurveTo(r+4,h-l*.73,r+0,h-l*.78,r+6,h-l*.82),e.closePath(),e.fill(),e.fillStyle=c,e.beginPath(),e.moveTo(r+10,h-l*.84),e.bezierCurveTo(r+30,h-l*.82,r+50,h-l*.79,r+44,h-l*.79),e.lineTo(r+16,h-l*.8),e.closePath(),e.fill(),e.fillStyle=c,e.fillRect(r+8,f+l*.12,8,l*.05);const x=l*.09;e.beginPath(),e.arc(r+12,f+l*.07,x,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(r+12+x*.85,f+l*.08,x*.22,-.4,.9),e.fill(),e.beginPath(),e.arc(r+12+x*.5,f+l*.1+x*.7,x*.3,0,Math.PI),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(r+12,f+l*.04,x*1.05,Math.PI*.9,Math.PI*1.9),e.fill(),e.beginPath(),e.arc(r+12+x*.3,f+l*.02,x*.6,Math.PI,Math.PI*1.7),e.fill(),e.fillStyle="#CC2244",e.beginPath(),e.ellipse(r+12+x*.8,f+l*.09,4,2.5,.2,0,Math.PI*2),e.fill();const m=r+22,p=h-l*.76,w=-.38,T=l*.36,v=m+Math.cos(w)*T,R=p+Math.sin(w)*T;e.strokeStyle=c,e.lineWidth=l*.045,e.lineCap="round",e.beginPath(),e.moveTo(m,p),e.lineTo(v,R),e.stroke();const A=w-.08,C=l*.14,I=v+Math.cos(A)*C,S=R+Math.sin(A)*C;if(e.fillStyle="#1a1a1a",e.save(),e.translate(v,R),e.rotate(A),e.fillRect(-4,-4,10,18),e.restore(),e.strokeStyle="#2a2a2a",e.lineWidth=5,e.lineCap="square",e.beginPath(),e.moveTo(v,R),e.lineTo(I,S),e.stroke(),e.strokeStyle="#666",e.lineWidth=1.5,e.beginPath(),e.moveTo(v,R-1),e.lineTo(I,S-1),e.stroke(),this.sceneT>2.5){e.save(),e.globalAlpha=a*.6*(.5+Math.sin(this.sceneT*8)*.5);const _=e.createRadialGradient(I,S,0,I,S,14);_.addColorStop(0,"#FFFF88CC"),_.addColorStop(1,"transparent"),e.fillStyle=_,e.beginPath(),e.arc(I,S,14,0,Math.PI*2),e.fill(),e.restore()}e.strokeStyle="#FFD700",e.lineWidth=2.5,e.beginPath(),e.arc(v+6,R,4,0,Math.PI*2),e.stroke(),e.strokeStyle=d,e.lineWidth=3,e.globalAlpha=a*.7,e.beginPath(),e.moveTo(r-2,h-l*.43),e.bezierCurveTo(r-6,h-l*.5,r-4,h-l*.78,r+6,h-l*.83),e.stroke(),e.restore()}_drawHairAndProp(e,t,i,n,s,r){const a=n-s*.87,l=s*.075;switch(e.save(),e.lineCap="round",t.id){case"jose":{const c="#1e0d00",d="#3a1e00",u="#5a3500";[{dx:-14,swing:-7,len:s*.3,w:6,color:c},{dx:-9,swing:-4,len:s*.35,w:7,color:d},{dx:-4,swing:-1,len:s*.38,w:6,color:c},{dx:1,swing:2,len:s*.36,w:7,color:d},{dx:6,swing:4,len:s*.33,w:6,color:u},{dx:11,swing:5,len:s*.28,w:5,color:u},{dx:-12,swing:-5,len:s*.22,w:4,color:d},{dx:8,swing:3,len:s*.2,w:4,color:c}].forEach(m=>{e.strokeStyle=m.color,e.lineWidth=m.w,e.beginPath(),e.moveTo(i+m.dx,a-l*.05),e.bezierCurveTo(i+m.dx+m.swing*.35,a+m.len*.32,i+m.dx+m.swing*.85,a+m.len*.65,i+m.dx+m.swing*.65,a+m.len),e.stroke(),e.beginPath(),e.arc(i+m.dx+m.swing*.65,a+m.len,m.w*.6,0,Math.PI*2),e.fillStyle=m.color,e.fill()}),e.fillStyle=c,e.beginPath(),e.arc(i,a-l*.55,l*1.08,Math.PI,0),e.fill(),e.strokeStyle="#7B4A10",e.lineWidth=3.5,e.beginPath(),e.arc(i,a-l*.15,l*1.14,Math.PI*.75,Math.PI*1.95),e.stroke(),e.fillStyle="#2a1000",e.beginPath(),e.ellipse(i,a+l*.6,l*.65,l*.35,0,0,Math.PI),e.fill(),e.strokeStyle="rgba(210,210,210,0.85)",e.lineWidth=2.2,e.fillStyle="rgba(180,220,255,0.12)";const f=l*.95,g=l*.5,x=a-l*.12;e.beginPath(),e.roundRect(i-f-1,x-g/2,f,g,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,x-g/2,f,g,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,x),e.lineTo(i+1,x),e.stroke();break}case"matt":{const c="#5a3010";e.fillStyle=c,e.beginPath(),e.arc(i,a-l*.7,l*1.15,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.3,a-l*1.5,l*.9,l*.55,-.3,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i+l*.4,a-l*1.4,l*.75,l*.5,.2,0,Math.PI*2),e.fill(),e.strokeStyle=c,e.lineWidth=4,e.beginPath(),e.moveTo(i-l*1.05,a-l*.3),e.quadraticCurveTo(i-l*1.3,a+l*.3,i-l*1,a+l*.5),e.stroke(),e.beginPath(),e.moveTo(i+l*1.05,a-l*.3),e.quadraticCurveTo(i+l*1.3,a+l*.3,i+l*1,a+l*.5),e.stroke(),e.fillStyle="#3a1a08",e.beginPath(),e.ellipse(i,a+l*.55,l*.75,l*.42,0,0,Math.PI),e.fill(),e.fillStyle="#3a1a08",e.beginPath(),e.ellipse(i,a+l*.18,l*.52,l*.18,0,0,Math.PI),e.fill();break}case"tsuyoshi":{const c="#080808",d=l*.52,u=a-l*.2;e.fillStyle=r,e.beginPath(),e.arc(i-l*.85,a-l*.5,l*.55,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(i+l*.85,a-l*.5,l*.55,0,Math.PI*2),e.fill(),e.fillStyle=c,e.fillRect(i-d/2,u-l*.3,d,l*.55);const h=[{ox:-.28,h:l*1.55,tw:.22,tilt:-.18},{ox:-.1,h:l*2.1,tw:.2,tilt:-.06},{ox:.06,h:l*2.4,tw:.22,tilt:.04},{ox:.2,h:l*1.9,tw:.19,tilt:.12},{ox:.32,h:l*1.4,tw:.18,tilt:.2}];e.fillStyle=c,h.forEach(f=>{const g=i+f.ox*d*3,x=f.tw*d*2.5;e.beginPath(),e.moveTo(g-x/2,u),e.lineTo(g+x/2,u),e.lineTo(g+Math.sin(f.tilt)*f.h*.5,u-f.h),e.closePath(),e.fill()}),e.fillStyle="rgba(80,80,160,0.18)",e.beginPath(),e.moveTo(i-1,u),e.lineTo(i+3,u),e.lineTo(i+2,u-l*2),e.closePath(),e.fill();break}case"jarrad":{const c="#1a1208";e.fillStyle=c,e.beginPath(),e.arc(i,a-l*.65,l*1.08,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.2,a-l*1.45,l*.7,l*.38,-.15,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i+l*.3,a-l*1.35,l*.55,l*.32,.15,0,Math.PI*2),e.fill(),e.fillStyle="#2a1e08",e.beginPath(),e.ellipse(i,a+l*.52,l*.65,l*.3,0,0,Math.PI),e.fill(),e.strokeStyle="#111",e.lineWidth=2.5,e.fillStyle="rgba(160,200,240,0.18)";const d=l*1,u=l*.52,h=a-l*.15;e.beginPath(),e.roundRect(i-d-1,h-u/2,d,u,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,h-u/2,d,u,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,h),e.lineTo(i+1,h),e.stroke(),e.beginPath(),e.moveTo(i-d-1,h),e.lineTo(i-d-l*.4,h-1),e.stroke(),e.beginPath(),e.moveTo(i+d+1,h),e.lineTo(i+d+l*.4,h-1),e.stroke();break}case"fabio":{e.fillStyle="#1a0e00",e.beginPath(),e.arc(i,a-l*.68,l*1.1,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.1,a-l*1.42,l*.8,l*.38,.1,0,Math.PI*2),e.fill(),e.fillStyle="#2e1800",e.beginPath(),e.ellipse(i,a+l*.5,l*.6,l*.26,0,0,Math.PI),e.fill();break}case"joe":{e.fillStyle="#3a2510",e.beginPath(),e.arc(i,a-l*.68,l*1.08,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.15,a-l*1.35,l*.6,l*.3,-.1,0,Math.PI*2),e.fill(),e.fillStyle="#D4E800",e.fillRect(i-22,n-s*.58,44,s*.06),e.fillStyle="#B8CC00",e.fillRect(i-22,n-s*.52,44,s*.03);break}case"phil":{const c="#C8C8C4",d="#A8A8A2";e.fillStyle=c,e.beginPath(),e.arc(i,a-l*.72,l*1.12,Math.PI,0),e.fill(),e.fillStyle=d,e.beginPath(),e.arc(i,a-l*.5,l*1.08,Math.PI*.85,Math.PI*1.15),e.fill(),e.fillStyle="#DDDDD8",e.beginPath(),e.ellipse(i,a-l*1.1,l*.7,l*.35,0,0,Math.PI*2),e.fill(),e.strokeStyle="#111",e.lineWidth=2.2,e.fillStyle="rgba(160,200,240,0.15)";const u=l*.95,h=l*.48,f=a-l*.12;e.beginPath(),e.roundRect(i-u-1,f-h/2,u,h,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,f-h/2,u,h,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,f),e.lineTo(i+1,f),e.stroke(),e.beginPath(),e.moveTo(i-u-1,f),e.lineTo(i-u-l*.4,f-1),e.stroke(),e.beginPath(),e.moveTo(i+u+1,f),e.lineTo(i+u+l*.4,f-1),e.stroke();break}case"connie":{e.fillStyle="#E8D080",e.beginPath(),e.arc(i,a-l*.5,l*1.1,Math.PI,0),e.fill(),e.fillRect(i-l*1.2,a,l*2.4,s*.18);break}}switch(e.lineCap="butt",e.restore(),t.id){case"jose":case"matt":{e.fillStyle=r,e.fillRect(i+19,n-s*.62,28,8),e.fillStyle="#A0B8CC",e.save(),e.translate(i+52,n-s*.63),e.rotate(-.3),e.fillRect(0,-4,28,10),e.fillStyle="#6A7A88",e.fillRect(24,-5,6,12),e.restore();break}case"tsuyoshi":{e.fillStyle=r,e.fillRect(i-33,n-s*.44,8,s*.22),e.fillStyle="#446688",e.beginPath(),e.moveTo(i-44,n-s*.22),e.lineTo(i-28,n-s*.22),e.lineTo(i-30,n-s*.04),e.lineTo(i-42,n-s*.04),e.fill(),e.strokeStyle="#88AACC",e.lineWidth=2,e.strokeRect(i-44,n-s*.22,16,2);break}case"connie":{e.fillStyle=r,e.fillRect(i+19,n-s*.68,10,s*.2),e.fillStyle="#E8E0C0",e.fillRect(i+28,n-s*.72,26,34),e.fillStyle="#C8A86A",e.fillRect(i+34,n-s*.74,14,6),e.fillStyle="#88778866";for(let c=0;c<4;c++)e.fillRect(i+30,n-s*.66+c*6,20,3);break}case"jarrad":{e.fillStyle=r,e.fillRect(i+19,n-s*.7,10,s*.22),e.fillStyle="#1a1a2a",e.fillRect(i+28,n-s*.73,18,28),e.fillStyle="#4488FF",e.shadowColor="#4488FF",e.shadowBlur=18,e.fillRect(i+30,n-s*.71,14,24),e.shadowBlur=0,e.fillStyle="#4488FF18",e.beginPath(),e.ellipse(i+20,n-s*.87,30,40,0,0,Math.PI*2),e.fill();break}case"fabio":{e.fillStyle=r,e.fillRect(i-32,n-s*.78,10,s*.1),e.fillStyle="#B8904A",e.fillRect(i-46,n-s*.86,38,6),e.fillRect(i-46,n-s*.84,38,20),e.fillStyle="#FF5533",e.fillRect(i-43,n-s*.82,32,14),e.fillStyle="#FFDD44";for(let c=0;c<5;c++)e.beginPath(),e.arc(i-38+c*6,n-s*.78+c%2*4,3,0,Math.PI*2),e.fill();break}case"phil":{e.fillStyle=r,e.fillRect(i-33,n-s*.52,8,s*.1),e.fillStyle="#8899AA",e.fillRect(i-40,n-s*.44,14,20),e.fillStyle="#AAC0CC",e.fillRect(i-39,n-s*.46,12,8),e.strokeStyle="#AAAAAA60",e.lineWidth=2;for(let c=0;c<3;c++)e.beginPath(),e.moveTo(i-36+c*4,n-s*.46),e.quadraticCurveTo(i-34+c*4,n-s*.5,i-36+c*4,n-s*.54),e.stroke();break}}}_drawParticles(e,t){for(const i of this.particles)if(e.globalAlpha=i.alpha*.85,t.particleKind==="sparks")e.fillStyle=t.particleColor,e.shadowColor=t.particleColor,e.shadowBlur=4,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill(),e.shadowBlur=0;else{const n=e.createRadialGradient(i.x,i.y,0,i.x,i.y,i.size);n.addColorStop(0,t.particleColor+"60"),n.addColorStop(1,"transparent"),e.fillStyle=n,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawBuckets(e,t,i,n){const s=i*.62,r=(a,l,c,d=1)=>{const u=c*1.2,h=c,f=c*.72,g=a-h/2,x=a-f/2;e.save(),e.globalAlpha=d,e.fillStyle="rgba(0,0,0,0.3)",e.beginPath(),e.ellipse(a,l+u+3,c*.42,5,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(g,l),e.lineTo(g+h,l),e.lineTo(x+f,l+u),e.lineTo(x,l+u),e.closePath(),e.fillStyle="#F8F6F0",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.04),e.stroke(),e.beginPath(),e.ellipse(a,l,h/2,h*.1,0,0,Math.PI*2),e.fillStyle="#E8E4DC",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.03),e.stroke(),e.beginPath(),e.arc(a,l-h*.06,h*.3,Math.PI,0),e.strokeStyle="#B0966A",e.lineWidth=Math.max(1.5,c*.05),e.stroke();const m=c*.55,p=a-m/2,w=l+u*.18;this.logoImg?(e.globalCompositeOperation="multiply",e.globalAlpha=d*.6,e.drawImage(this.logoImg,p,w,m,m*(1504/688)),e.globalCompositeOperation="source-over",e.globalAlpha=d):(e.fillStyle="#C8A86A",e.font=`bold ${Math.max(7,c*.18)}px system-ui`,e.textAlign="center",e.fillText("TEM",a,l+u*.55),e.textAlign="start"),e.restore()};if(n.id==="melbourne")r(t*.1,s-48,46,.92),r(t*.165,s-38,36,.78),r(t*.8,s-44,42,.88),r(t*.87,s-32,30,.68);else{const a=Math.min(1,this.sceneT*1.5);r(t*.16,s-52,48,a*.95),r(t*.25,s-40,36,a*.82)}}_drawSpeechBubble(e,t,i,n){const s=Math.min(1,(this.sceneT-2)*1.5);if(s<=0)return;const r=Math.sin(this.sceneT*1.8)*5,a=Math.min(t*.42,280),l=72,c=t*.04,d=i*.38+r,u=14,h=c+a;e.save(),e.globalAlpha=s,e.shadowColor="rgba(0,0,0,0.45)",e.shadowBlur=12,e.shadowOffsetY=4,e.fillStyle="rgba(255,255,255,0.94)",e.beginPath(),e.moveTo(c+u,d),e.lineTo(c+a-u,d),e.quadraticCurveTo(c+a,d,c+a,d+u),e.lineTo(c+a,d+l-u),e.quadraticCurveTo(c+a,d+l,c+a-u,d+l),e.lineTo(c+u,d+l),e.quadraticCurveTo(c,d+l,c,d+l-u),e.lineTo(c,d+u),e.quadraticCurveTo(c,d,c+u,d),e.closePath(),e.fill(),e.shadowBlur=0,e.shadowOffsetY=0,e.beginPath(),e.moveTo(h,d+l*.42),e.lineTo(h+20,d+l*.55),e.lineTo(h,d+l*.68),e.closePath(),e.fill(),e.fillStyle=n.accentColor,e.fillRect(c+u,d,a-u*2,4),e.shadowBlur=0;const f=Math.max(12,Math.min(16,a/16));e.font=`italic ${f}px system-ui, sans-serif`,e.fillStyle="#111",e.textBaseline="middle";const g=a-24,x=`"${n.line}"`.split(" "),m=[];let p="";for(const R of x){const A=p?`${p} ${R}`:R;e.measureText(A).width>g&&p?(m.push(p),p=R):p=A}p&&m.push(p);const w=f+5,T=m.length*w,v=d+(l-T)/2+w/2+2;m.forEach((R,A)=>{e.fillText(R,c+12,v+A*w,g)}),e.restore()}_showTitle(e){this.done||(this.particles=[],this.currentScene={...oo[0],id:"title",name:"",role:"",line:""},this.textLayer.innerHTML=`
      <div style="animation:introSlideUp 0.7s ease both; text-align:center; width:100%;">
        <img src="${so}" alt="TEM"
          style="height:clamp(70px,16vw,110px); width:auto; object-fit:contain;
                 filter:drop-shadow(0 0 40px rgba(200,168,106,0.5)) brightness(0.9);
                 display:block; margin:0 auto 20px; animation:logoPulse 2s ease-in-out infinite;"
          onerror="this.style.display='none'">
        <div style="color:#C8A86A; font-size:clamp(24px,8vw,52px); font-weight:900;
                    letter-spacing:5px; text-shadow:0 0 80px rgba(200,168,106,0.5);">
          TROWELED EARTH RUSH
        </div>
        <div style="color:rgba(200,168,106,0.45); font-size:clamp(10px,2.5vw,13px);
                    letter-spacing:4px; margin-top:10px;">
          MELBOURNE
        </div>
      </div>
    `,this.textLayer.style.justifyContent="center",this.textLayer.style.alignItems="center",this._after(Cx,()=>{this.overlay.style.transition=`opacity ${_c}ms ease`,this.overlay.style.opacity="0",this._after(_c+50,()=>this._finish(e))}))}_startAudio(){try{const e=new Audio;e.src=bi.theme,e.volume=.75,this.themeAudio=e,e.play().catch(()=>{this.themeAudio=null})}catch{}}_finish(e){var i;if(this.done)return;this.done=!0,this.timers.forEach(clearTimeout),cancelAnimationFrame(this.rafId);const t=this.themeAudio;this.themeAudio=null,(i=this.overlay)==null||i.remove(),e(t)}_after(e,t){this.timers.push(setTimeout(t,e))}_genBuildings(){let t=0;this.buildings=[];for(let i=0;i<28;i++){const n=30+Math.floor(Math.sin(i*2.1)*15+Math.cos(i*1.3)*12+40),s=60+Math.abs(Math.sin(i*1.7)*140+Math.cos(i*2.3)*80);this.buildings.push({x:t,w:n,h:s}),t+=n+4+Math.floor(Math.sin(i*3.7)*6)}}_resizeCanvas(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}_injectStyles(){if(document.getElementById("intro-styles"))return;const e=document.createElement("style");e.id="intro-styles",e.textContent=`
      .intro-bar {
        position:absolute; left:0; right:0; z-index:9;
        background:#000; pointer-events:none;
        height: clamp(40px, 8vh, 68px);
      }
      .intro-bar-top { top:0; }
      .intro-bar-bot { bottom:0; }

      @keyframes grainAnim {
        0%   { transform: translate(0,0) }
        25%  { transform: translate(-2%,-1%) }
        50%  { transform: translate(1%, 2%) }
        75%  { transform: translate(-1%, 1%) }
        100% { transform: translate(2%,-2%) }
      }
      @keyframes introSlideUp {
        from { opacity:0; transform:translateY(28px) }
        to   { opacity:1; transform:translateY(0) }
      }
      @keyframes logoPulse {
        0%,100% { transform:scale(1); filter:drop-shadow(0 0 30px rgba(200,168,106,0.4)) brightness(0.9) }
        50%     { transform:scale(1.04); filter:drop-shadow(0 0 50px rgba(200,168,106,0.6)) brightness(1.0) }
      }
      @keyframes tapPulse {
        0%,100% { opacity:0.4; transform:scale(1) }
        50%     { opacity:1.0; transform:scale(1.06) }
      }
    `,document.head.appendChild(e)}}const Px=[{character:"Jose",label:"JOSE GARCIA",color:"#8B6A3A",lines:["Jose Garcia — the Spaniard cloaked in shadows, grim veil","An artist of chaos where darkness and dreams prevail","With brutal hands he sculpts the earth's unyielding core","His trowel, a weapon — top class, none can ignore","From blood red clay to concrete's cold, unfeeling embrace","He molds the void to find foundations of time"]},{character:null,label:"CHORUS",color:"#C8A86A",lines:["Troweled Earth — where shadows fall","Unyielding — it calls to all","This spirit's rise beneath the skies","The spark of architects' darkest dreams"]},{character:"Matt",label:"MATT",color:"#C1666B",lines:["Matt, the warlord — fire raging deep in his veins","Charismatic, don't matter, wielding hearts in unyielding chains","From Marbellino's wrath to metallic's cold, cruel, clean","His energy — tempest, relentless, untamed and wild","Unyielding strokes cut deep and true","His trowel carved dark — Troweled Earth's anchor bold"]},{character:"Tsuyoshi",label:"TSUYOSHI",color:"#4A8A6A",lines:["A samurai — perfect engineer","Crafts Tadelakt with a blade's cold glare","Positions master, slicing through despair","The future's written in shadows he's claimed as his own"]},{character:"Connie",label:"CONNIE",color:"#E8A050",lines:["Connie — tight on wheels, a trowel school might","Turning more queen, driving through the night"]},{character:"Jarrad",label:"JARRAD",color:"#8080C0",lines:["Jarrad — iron-forged, a time built in flame","His strength runs deep, no force can break or tame","He etches the earth with hands of steel","His honour worn in fire"]},{character:"Fabio",label:"FABIO",color:"#D4602A",lines:['Like fire among the wise — "you have no power here, Gandalf the Grey"',"Conjuring dark nights, his lore makes the unwilling pay"]},{character:null,label:"BRIDGE — MELBOURNE",color:"#8B9EC8",lines:["St Kilda confined — Fitzroy, raw forms rise","No facade — let the heavy stone speak","Trowel the fruit of beauty, cold and true","Polish scars are steel in all grids and grooves","Good dreams forged in the fire of steel","Tadelakt stone lit sheen — custom strokes, no polish","Just the fight in every scene"]},{character:null,label:"FINAL CHORUS",color:"#C8A86A",lines:["Melbourne's concrete sonnet — unyielding, profound","Trowel dust builds the goal on hallowed ground","Troweled Earth — we shatter the stone","Crafting brutal spaces — this is home"]}],bc=Px.flatMap(o=>o.lines),Ix=[{text:"🌳",size:64,color:"#C8A86A",gap:12},{text:"TROWELED EARTH RUSH",size:32,color:"#C8A86A",weight:900,spacing:4,gap:8},{text:"A TROWELED EARTH MELBOURNE PRODUCTION",size:11,color:"rgba(200,168,106,0.5)",spacing:2,gap:48},{text:"CREW",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MATT",size:16,color:"#C1666B",weight:800,gap:4},{text:"LEAD PLASTERER · THE WARLORD",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOSE GARCIA",size:16,color:"#8B6A3A",weight:800,gap:4},{text:"THE SPANIARD · MASTER OF CLAY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"TSUYOSHI",size:16,color:"#4A8A6A",weight:800,gap:4},{text:"SAMURAI ENGINEER · TADELAKT SPECIALIST",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"CONNIE",size:16,color:"#E8A050",weight:800,gap:4},{text:"OPERATIONS QUEEN · BORN IN GERMANY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JARRAD",size:16,color:"#8080C0",weight:800,gap:4},{text:"SCAFFOLD SPECIALIST · TOPKNOT PHILOSOPHER",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"FABIO",size:16,color:"#D4602A",weight:800,gap:4},{text:'PLASTERER · PIZZA CONSULTANT · "EHHHH"',size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"PHIL",size:16,color:"#A0B8A0",weight:800,gap:4},{text:"RENDERS · QUIET LEGEND",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"SUPPORTING CAST",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MIKAYLA",size:16,color:"#FF9DC4",weight:800,gap:4},{text:"WORKSHOP MANAGER · JUMP ROPE CHAMPION",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOE",size:16,color:"#C8A86A",weight:800,gap:4},{text:"SUPPLIES · MAN OF FEW WORDS",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"PRODUCTS FEATURED",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Blood Red Clay · Marbellino · Tadelakt",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Antique Stucco · Metallic · Sgraffito",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Concrete Polish · Venetian Plaster · Limewash",size:14,color:"rgba(240,232,216,0.7)",gap:40},{text:"RADIO STATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"TEM FM 88.3 · Brunswick Beats 99.9",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Connie's Gold 103.7 · The Scaffold 107.1",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Fabio's Pizza Radio 92.5",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"CITY LOCATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Melbourne CBD · Fitzroy · Brunswick",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Richmond · St Kilda · Footscray",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"GAME DESIGN & DEVELOPMENT",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Snappabot",size:18,color:"rgba(240,232,216,0.9)",weight:800,gap:4},{text:"Three.js · TypeScript · Vite",size:11,color:"rgba(200,168,106,0.4)",gap:40},{text:"MADE WITH 🌳 IN MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:40},{text:'"The walls remember every hand that shaped them."',size:14,color:"rgba(200,168,106,0.6)",italic:!0,gap:60},{text:"TROWELED EARTH MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:8},{text:"troweledearthmelbourne.com.au",size:12,color:"rgba(200,168,106,0.4)",gap:80}];class Dx{constructor(){b(this,"overlay");b(this,"creditsAudio",null);b(this,"rafId",0)}show(){return new Promise(e=>this._build(e))}_build(e){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="credits-overlay",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:60000;
      background:#050402;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;const t=document.createElement("button");t.textContent="SKIP ▶",t.style.cssText=`
      position:absolute; top:20px; right:20px; z-index:10;
      background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2);
      color:rgba(255,255,255,0.5); font-size:12px; font-weight:700;
      padding:8px 16px; border-radius:20px; cursor:pointer;
      letter-spacing:1px; touch-action:manipulation;
    `,t.addEventListener("click",()=>this._finish(e));const i=document.createElement("div");i.id="credits-scroller",i.style.cssText=`
      position:absolute; left:50%; transform:translateX(-50%);
      width:100%; max-width:600px;
      top:100vh;
      text-align:center;
      padding:0 32px;
      box-sizing:border-box;
    `;let n=0;Ix.forEach(u=>{const h=document.createElement("div"),f=u.size||14;h.textContent=u.text,h.style.cssText=`
        color: ${u.color||"rgba(240,232,216,0.8)"};
        font-size: ${f}px;
        font-weight: ${u.weight||400};
        letter-spacing: ${u.spacing||0}px;
        font-style: ${u.italic?"italic":"normal"};
        margin-bottom: ${u.gap||16}px;
        line-height: 1.4;
      `,i.appendChild(h),n+=f*1.4+(u.gap||16)});const s=document.createElement("div");s.style.height="100vh",i.appendChild(s);const r=document.createElement("div");r.style.cssText=`
      position:absolute; inset:0; z-index:5; pointer-events:none;
      background: linear-gradient(
        180deg,
        rgba(5,4,2,1) 0%,
        rgba(5,4,2,0) 8%,
        rgba(5,4,2,0) 92%,
        rgba(5,4,2,1) 100%
      );
    `,this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(r),document.body.appendChild(this.overlay),this._startAudio();const a=.6;let l=-window.innerHeight;const c=n+window.innerHeight,d=()=>{if(this.overlay.isConnected){if(l+=a,i.style.transform=`translateX(-50%) translateY(-${l}px)`,l>c){this._finish(e);return}this.rafId=requestAnimationFrame(d)}};this.rafId=requestAnimationFrame(d)}_startAudio(){try{const e=new Audio;e.src=bi.credits,e.volume=0,e.play().then(()=>{this.creditsAudio=e;let t=0;const i=setInterval(()=>{t=Math.min(t+.02,.65),e.volume=t,t>=.65&&clearInterval(i)},80)}).catch(()=>{})}catch{}}_finish(e){if(cancelAnimationFrame(this.rafId),this.creditsAudio){const t=this.creditsAudio;let i=t.volume;const n=setInterval(()=>{i=Math.max(0,i-.04),t.volume=i,i<=0&&(clearInterval(n),t.pause(),t.src="")},60)}this.overlay.style.transition="opacity 0.8s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},850)}_injectStyles(){if(document.getElementById("credits-styles"))return;const e=document.createElement("style");e.id="credits-styles",e.textContent=`
      #credits-overlay {
        background: linear-gradient(180deg, #050402 0%, #080604 50%, #050402 100%);
      }
    `,document.head.appendChild(e)}}const Lx="./",Bx=`${Lx}tem-logo-white.jpg`;class Fx{constructor(){b(this,"overlay");b(this,"scrollTimer",0);b(this,"ctx",null);b(this,"masterGain",null);b(this,"themeAudio",null)}show(e){return new Promise(t=>{this._build(t,e)})}_build(e,t){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="start-menu",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:40000;
      background:#07050302;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;const i=document.createElement("div");i.className="sm-lyrics-back";const n=document.createElement("div");n.id="sm-lyrics-inner";const s=[...bc,...bc];s.forEach(h=>{const f=document.createElement("div");f.className="sm-lyric-line",f.textContent=h,n.appendChild(f)}),i.appendChild(n),this.overlay.appendChild(i);const r=document.createElement("div");r.className="sm-gradient",this.overlay.appendChild(r);const a=document.createElement("div");a.className="sm-content",a.innerHTML=`
      <img src="${Bx}" alt="Troweled Earth" class="sm-logo-img"
        onerror="this.outerHTML='<div class=sm-logo>🌳</div>'">
      <div class="sm-title">TROWELED EARTH RUSH</div>
      <div class="sm-tagline">"The walls remember every hand that shaped them."</div>
    `;const l=document.createElement("div");l.className="sm-btn-row";const c=this._btn("▶  PLAY","#C1666B","#9E4A50");c.style.fontSize="18px",c.style.padding="18px 48px",c.addEventListener("click",h=>{h.stopPropagation(),this._stopAudio(),this.overlay.style.transition="opacity 0.5s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},520)});const d=this._btn("📋  HOW TO PLAY","rgba(200,168,106,0.18)","rgba(200,168,106,0.28)");d.style.border="1.5px solid rgba(200,168,106,0.4)",d.addEventListener("click",h=>{h.stopPropagation(),this._showHowToPlay()});const u=this._btn("🎬  CREDITS","rgba(255,255,255,0.06)","rgba(255,255,255,0.12)");u.style.border="1.5px solid rgba(255,255,255,0.15)",u.style.color="rgba(255,255,255,0.55)",u.addEventListener("click",h=>{h.stopPropagation(),this._killAudio(),this.overlay.style.opacity="0",this.overlay.style.transition="opacity 0.3s",setTimeout(async()=>{await new Dx().show(),this.overlay.style.opacity="1",this._startAudio()},320)}),l.appendChild(c),l.appendChild(d),l.appendChild(u),a.appendChild(l),this.overlay.appendChild(a),document.body.appendChild(this.overlay),this._startScroll(n,s.length),t?(this.themeAudio=t,t.loop=!0,t.volume=.6):this.overlay.addEventListener("click",()=>this._startAudio(),{once:!0})}_btn(e,t,i){const n=document.createElement("button");return n.innerHTML=e,n.style.cssText=`
      background:${t}; border:none; color:#fff;
      font-size:14px; font-weight:800; letter-spacing:1px;
      padding:14px 32px; border-radius:50px; cursor:pointer;
      touch-action:manipulation; transition:background 0.15s, transform 0.1s;
      font-family:system-ui,sans-serif;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);
    `,n.addEventListener("mouseenter",()=>{n.style.background=i,n.style.transform="translateY(-2px)"}),n.addEventListener("mouseleave",()=>{n.style.background=t,n.style.transform=""}),n}_startScroll(e,t){let i=0;const r=t*38/2,a=()=>{i+=.35,i>=r&&(i=0),e.style.transform=`translateY(-${i}px)`,this.scrollTimer=requestAnimationFrame(a)};this.scrollTimer=requestAnimationFrame(a)}_startAudio(){try{const e=new Audio;e.src=bi.theme,e.volume=0,e.loop=!0,this.themeAudio=e,e.play().then(()=>{let t=0;const i=setInterval(()=>{if(!this.themeAudio){clearInterval(i);return}t=Math.min(t+.02,.6),e.volume=t,t>=.6&&clearInterval(i)},100)}).catch(()=>{this.themeAudio=null,this._startSynthAudio()});return}catch{}this._startSynthAudio()}_startSynthAudio(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.ctx.destination),this.masterGain.gain.linearRampToValueAtTime(.1,this.ctx.currentTime+2);const e=76,t=e/60;let i=this.ctx.currentTime+.5;const n=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="sine",n.frequency.value=55,r.type="lowpass",r.frequency.value=180,s.gain.value=.5,n.connect(r),r.connect(s),s.connect(this.masterGain),n.start(i);for(let a=0;a<180;a++){const l=i+a/t,c=a%4;c===0&&this._kick(l,55),(c===1||c===3)&&this._snare(l),this._hihat(l),c===0&&this._bass(l,55),a%8===0&&this._pad(l,220*(a%16<8?1:1.5))}}catch{}}_killAudio(){this.themeAudio&&(this.themeAudio.pause(),this.themeAudio.src="",this.themeAudio=null);try{this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}catch{}}_stopAudio(){if(this.themeAudio){const e=this.themeAudio;let t=e.volume;const i=setInterval(()=>{t=Math.max(0,t-.05),e.volume=t,t<=0&&(clearInterval(i),e.pause(),e.src="")},50)}try{this.masterGain&&this.ctx&&(this.masterGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5),setTimeout(()=>{var e;try{(e=this.ctx)==null||e.close()}catch{}},600))}catch{}}_kick(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.15),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.32)}catch{}}_snare(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.18),this.ctx.sampleRate),i=t.getChannelData(0);for(let a=0;a<i.length;a++)i[a]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=t,s.type="bandpass",s.frequency.value=1800,r.gain.setValueAtTime(.055,e),r.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(s),s.connect(r),r.connect(this.masterGain),n.start(e),n.stop(e+.2)}catch{}}_hihat(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.04),this.ctx.sampleRate),i=t.getChannelData(0);for(let a=0;a<i.length;a++)i[a]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=t,s.type="highpass",s.frequency.value=9e3,r.gain.setValueAtTime(.016,e),r.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(s),s.connect(r),r.connect(this.masterGain),n.start(e),n.stop(e+.05)}catch{}}_bass(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t,n.type="lowpass",n.frequency.value=280,s.gain.setValueAtTime(.3,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.5)}catch{}}_pad(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();i.type="triangle",i.frequency.value=t,s.type="lowpass",s.frequency.value=1e3,n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.07,e+.6),n.gain.linearRampToValueAtTime(0,e+4),i.connect(s),s.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+4.5)}catch{}}_showHowToPlay(){const e=document.createElement("div");e.style.cssText=`
      position:fixed; inset:0; z-index:50001;
      background:rgba(5,4,2,0.96); display:flex; align-items:center; justify-content:center;
      font-family:system-ui,sans-serif; padding:20px; box-sizing:border-box;
    `,e.innerHTML=`
      <div style="width:100%;max-width:500px;background:#111008;border:1.5px solid rgba(200,168,106,0.35);
                  border-radius:20px;padding:28px;box-sizing:border-box;max-height:90vh;overflow-y:auto;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <div style="color:#C8A86A;font-size:18px;font-weight:900;letter-spacing:1px;">📋 HOW TO PLAY</div>
          <button id="htp-close" style="background:rgba(255,255,255,0.1);border:none;color:#fff;
            font-size:16px;width:32px;height:32px;border-radius:50%;cursor:pointer;">✕</button>
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">🎮 CONTROLS</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:1.8;margin-bottom:18px;">
          <b>Joystick</b> — Steer the van<br>
          <b>GAS</b> — Accelerate<br>
          <b>REV</b> — Brake / Reverse
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">🔄 THE JOB LOOP</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:2;margin-bottom:18px;">
          1. Accept a job from the 📋 board<br>
          2. Collect supplies at the TEM workshop<br>
          3. Pick up your crew around the city<br>
          4. Reach the job site before time runs out<br>
          5. Complete the plastering mini-game
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">⚠️ RULES</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:2;margin-bottom:18px;">
          • Spill meter fills when you drive rough — spills cost money<br>
          • Bladder fills as you drive — find a toilet 🚽<br>
          • Coffee ☕ steadies plaster but loads the bladder<br>
          • Random breaks can hit at any job phase<br>
          • Scaffold game: win = full pay, fail = −30% penalty
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">🏆 GOALS</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:2;margin-bottom:18px;">
          • Collect all 8 TEM photo achievements → 5% store discount + certificate<br>
          • Earn 1 Bitcoin (100M sats) → 10% merch + 5% materials on certificate
        </div>

        <div style="color:rgba(200,168,106,0.4);font-size:11px;font-style:italic;text-align:center;">
          "The trowel doesn't rush. Neither do we."
        </div>
      </div>
    `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),setTimeout(()=>{var t;(t=document.getElementById("htp-close"))==null||t.addEventListener("click",()=>e.remove())},0)}_injectStyles(){if(document.getElementById("sm-styles"))return;const e=document.createElement("style");e.id="sm-styles",e.textContent=`
      #start-menu { background: #07050300; }
      .sm-lyrics-back {
        position:absolute; inset:0; z-index:1;
        overflow:hidden;
        background: linear-gradient(180deg, #080604 0%, #0f0a05 50%, #080604 100%);
      }
      #sm-lyrics-inner {
        display:flex; flex-direction:column;
        padding-top:100vh; will-change:transform;
      }
      .sm-lyric-line {
        color:rgba(200,168,106,0.08); font-size:clamp(14px,4vw,22px);
        font-style:italic; padding:10px 32px; line-height:1.4;
        text-align:center;
      }
      .sm-gradient {
        position:absolute; inset:0; z-index:2;
        background: radial-gradient(ellipse at center,
          rgba(8,6,3,0.6) 0%, rgba(8,6,3,0.92) 70%, rgba(5,4,2,0.98) 100%);
      }
      .sm-content {
        position:relative; z-index:3; text-align:center;
        display:flex; flex-direction:column; align-items:center; gap:12px;
        padding:0 24px;
      }
      .sm-logo { font-size:clamp(48px,14vw,80px); animation:smPulse 3s ease-in-out infinite; }
      .sm-logo-img {
        height:clamp(80px,18vw,130px); width:auto; object-fit:contain;
        filter:brightness(0.9) drop-shadow(0 0 20px rgba(200,168,106,0.35));
        animation:smPulse 3s ease-in-out infinite;
      }
      .sm-title {
        color:#C8A86A; font-size:clamp(22px,7vw,48px); font-weight:900;
        letter-spacing:4px; text-shadow:0 0 40px rgba(200,168,106,0.4);
        margin-bottom:4px;
      }
      .sm-tagline {
        color:rgba(200,168,106,0.45); font-size:clamp(11px,3vw,14px);
        font-style:italic; margin-bottom:24px;
      }
      .sm-btn-row {
        display:flex; flex-direction:column; align-items:center; gap:12px;
        width:100%; max-width:300px;
      }
      .sm-btn-row button { width:100%; }

      @keyframes smPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
    `,document.head.appendChild(e)}}class kx{constructor(e,t,i){b(this,"btn");b(this,"panel");b(this,"radioSlot");b(this,"moneySlot");b(this,"_open",!1);this._build(e,t,i)}_build(e,t,i){this.btn=document.createElement("button"),this.btn.textContent="☰",this.btn.style.cssText=`
      position: fixed; top: 10px; right: 12px; z-index: 3100;
      background: rgba(8,6,4,0.88); backdrop-filter: blur(10px);
      border: 1px solid rgba(200,168,106,0.4); border-radius: 12px;
      color: #C8A86A; font-size: 20px; font-weight: 900;
      width: 44px; height: 44px; line-height: 1;
      cursor: pointer; touch-action: manipulation;
      box-shadow: 0 2px 12px rgba(0,0,0,0.55);
      transition: background 0.15s, color 0.15s;
    `,this.btn.addEventListener("click",a=>{a.stopPropagation(),this._toggle()}),document.body.appendChild(this.btn),this.panel=document.createElement("div"),this.panel.style.cssText=`
      position: fixed; top: 62px; right: 10px; z-index: 3099;
      background: rgba(8,6,4,0.95); backdrop-filter: blur(18px);
      border: 1px solid rgba(200,168,106,0.22); border-radius: 18px;
      padding: 16px 14px; width: min(300px, calc(100vw - 24px));
      display: none; flex-direction: column; gap: 12px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.75);
      font-family: system-ui, sans-serif;
      max-height: calc(100vh - 80px); overflow-y: auto;
    `,this.moneySlot=document.createElement("div"),this.panel.appendChild(this.moneySlot),this.panel.appendChild(this._divider()),this.radioSlot=document.createElement("div"),this.panel.appendChild(this.radioSlot),this.panel.appendChild(this._divider());const n=document.createElement("div");n.style.cssText="display: flex; gap: 10px;";const s=this._actionBtn("🪣  Collection","rgba(70,60,30,0.9)",()=>{this._close(),e()}),r=this._actionBtn("📋  JOBS","rgba(193,102,107,0.9)",()=>{this._close(),t()});if(n.appendChild(s),n.appendChild(r),this.panel.appendChild(n),i){const a=this._actionBtn("🎨  MARBELLINO MIXER","rgba(30,50,40,0.9)",()=>{this._close(),i()});a.style.cssText+=`
        width:100%; margin-top:2px;
        background:linear-gradient(135deg, rgba(40,70,50,0.95), rgba(20,40,30,0.95));
        border:1px solid rgba(68,221,136,0.2);
        color:#88FFBB; font-size:13px;
      `,this.panel.appendChild(a)}document.body.appendChild(this.panel),document.addEventListener("pointerdown",a=>{this._open&&!this.panel.contains(a.target)&&a.target!==this.btn&&this._close()},{passive:!0})}_toggle(){this._open?this._close():this._openPanel()}_openPanel(){this._open=!0,this.panel.style.display="flex",this.btn.textContent="✕",this.btn.style.color="#ff9999"}_close(){this._open=!1,this.panel.style.display="none",this.btn.textContent="☰",this.btn.style.color="#C8A86A"}mountMoneyPanel(e){e.style.cssText+="position:relative; top:auto; right:auto; align-items:flex-start;",this.moneySlot.appendChild(e)}mountRadio(e){e.style.cssText+="position:relative; top:auto; left:auto; transform:none; width:100%;",this.radioSlot.appendChild(e)}_actionBtn(e,t,i){const n=document.createElement("button");return n.innerHTML=e,n.style.cssText=`
      flex: 1; background: ${t}; border: none; color: #fff;
      font-size: 14px; font-weight: 800; letter-spacing: 0.5px;
      padding: 13px 14px; border-radius: 12px; cursor: pointer;
      touch-action: manipulation; box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      font-family: system-ui, sans-serif;
    `,n.addEventListener("click",s=>{s.stopPropagation(),i()}),n}_divider(){const e=document.createElement("div");return e.style.cssText="height: 1px; background: rgba(200,168,106,0.12); margin: 0 -4px;",e}}const So=[{id:"jose",name:"Jose",title:"Wall Jesus 🙏",color:"#E8A830",skinTone:"#C8856A",hairColor:"#1e0d00",locked:!0,passive:{name:"Touch of God",desc:"Wall jobs pay +15%. Spill meter drains 20% slower."},active:{name:"Wall Jesus Mode",desc:"Instant wall prep — skip the prep phase on any job."},perkTag:"Always in. He IS the mission.",payMult:1.15,speedMult:1,spillGuard:.2,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"matt",name:"Matt",title:"Diplomatt 💼",color:"#4A90D9",skinTone:"#E8C0A0",hairColor:"#5a3010",locked:!1,passive:{name:"The Pitch",desc:"Unlocks premium jobs. +10% base pay on all work."},active:{name:"Renegotiate",desc:"Push for up to 30% bonus payout mid-job."},perkTag:"+10% pay. He talks money.",payMult:1.1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"tsuyoshi",name:"Tsuyoshi",title:"Mohawk Rush ⚡",color:"#FF4444",skinTone:"#F0D4B0",hairColor:"#080808",locked:!1,passive:{name:"Defect Detect",desc:"Spots hidden defects — prevents penalty deductions."},active:{name:"RUSH MODE",desc:"Van speed +30% for 20 seconds. ANYTIME."},perkTag:"+30% van speed. Does not stop.",payMult:1,speedMult:1.3,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:5},{id:"jarrad",name:"Jarrad",title:"Plan/No Plan 🎲",color:"#9B59B6",skinTone:"#E0B090",hairColor:"#1a1208",locked:!1,passive:{name:"Coin Flip",desc:"50/50: reveals best job OR chaos job with 2× payout."},active:{name:"Blueprint",desc:"Pause mid-job. Get +15 seconds back on the clock."},perkTag:"High risk. High reward.",payMult:1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:15},{id:"fabio",name:"Fabio",title:"Andiamo! 🍕",color:"#27AE60",skinTone:"#D4A070",hairColor:"#1a0e00",locked:!1,passive:{name:"Pressure Play",desc:"Speed +20% when job timer drops below 30 seconds."},active:{name:"Pizza Break",desc:"Full bladder reset + +10 seconds added to timer."},perkTag:"Clutch. Best under pressure.",payMult:1,speedMult:1.2,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:10},{id:"phil",name:"Phil",title:"The Veteran 🧱",color:"#7F8C8D",skinTone:"#D8B89A",hairColor:"#C8C8C4",locked:!1,passive:{name:"Seen It All",desc:"Immune to random break interrupts. No forced stops."},active:{name:"Fill Me Crack",desc:"Auto-completes prep stage on any job. Instant."},perkTag:"No interruptions. Pure focus.",payMult:1,speedMult:1,spillGuard:.15,breakImmune:!0,btcBoost:1,timerBonus:0},{id:"joe",name:"Joe",title:"Knows Too Much 👁️",color:"#E67E22",skinTone:"#EED8C0",hairColor:"#3a2510",locked:!1,passive:{name:"Intel Drop",desc:"Random secret high-pay jobs appear only with Joe."},active:{name:"Off the Books",desc:"Next job's full payout goes direct to BTC. No cut."},perkTag:"Off the books. Sats to stack.",payMult:1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1.25,timerBonus:0},{id:"connie",name:"Connie",title:"German Efficiency 🔩",color:"#E74C3C",skinTone:"#F0C8A0",hairColor:"#E8D080",locked:!1,passive:{name:"Zero Tolerance",desc:"Failed job penalties cut by 50%. She handles it."},active:{name:"Drill Sergeant",desc:"Whole crew works 40% faster for one full job."},perkTag:"Penalty shield. She will not let you fail.",payMult:1,speedMult:1,spillGuard:.1,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"mikayla",name:"Mikayla",title:"Books Full 📞",color:"#1ABC9C",skinTone:"#FDDBB4",hairColor:"#8B4513",locked:!1,passive:{name:"Full Board",desc:"Always 3+ jobs on the board. She keeps it stacked."},active:{name:"Priority Book",desc:"Summons a premium job to your nearest location."},perkTag:"More jobs. More sats. Always.",payMult:1.05,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:0}];let Ps=["jose"];function Ux(o){Ps=["jose",...o.filter(e=>e!=="jose")]}function wc(){return Ps}function Oa(o){return So.find(e=>e.id===o)}function Nx(){return Ps.reduce((o,e)=>{const t=Oa(e);return t?o*t.payMult:o},1)}function Ox(){return Ps.some(o=>{var e;return(e=Oa(o))==null?void 0:e.breakImmune})}function zx(){return Ps.reduce((o,e)=>{const t=Oa(e);return t?o+t.timerBonus:o},0)}const vs=class vs{constructor(){b(this,"_el",null);b(this,"_selected",new Set(["jose"]));b(this,"_synergy","")}show(e,t,i){this.hide(),this._selected=new Set(["jose"]);const n=document.createElement("div");n.id="crew-sel-ov",n.style.cssText=`
      position:fixed; inset:0; z-index:12000;
      background:rgba(0,0,0,0.92);
      display:flex; flex-direction:column; align-items:center;
      font-family:'Arial Black',Arial,sans-serif;
      overflow-y:auto; padding-bottom:80px;
    `;const s=document.createElement("div");s.style.cssText=`
      width:100%; max-width:420px;
      background:linear-gradient(135deg,#1a3a1a,#0d200d);
      border-bottom:2px solid #2ECC40;
      padding:14px 18px 10px; box-sizing:border-box;
      position:sticky; top:0; z-index:2;
    `,s.innerHTML=`
      <div style="color:#2ECC40;font-size:11px;letter-spacing:2px;font-weight:900;">TROWELED EARTH RUSH</div>
      <div style="color:#fff;font-size:17px;font-weight:900;margin:3px 0;">📋 ${e}</div>
      <div style="color:#F0C030;font-size:13px;font-weight:700;">💰 ${t.toLocaleString()} sats</div>
      <div style="color:#aaa;font-size:11px;margin-top:4px;">Jose is always in. Pick <strong style="color:#fff;">2 crew</strong> to roll with.</div>
    `,n.appendChild(s);const r=document.createElement("div");r.style.cssText=`
      width:100%; max-width:420px;
      background:linear-gradient(90deg,#1a0800,#2a1200);
      border:2px solid #E8A830;
      border-radius:10px; margin:14px 0 4px;
      padding:12px 16px; box-sizing:border-box;
      display:flex; align-items:center; gap:14px;
    `;const a=this._makeAvatar(So[0],56);r.appendChild(a);const l=document.createElement("div");l.innerHTML=`
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="color:#E8A830;font-size:16px;font-weight:900;">Jose</span>
        <span style="background:#E8A830;color:#000;font-size:9px;font-weight:900;padding:2px 6px;border-radius:10px;">MASCOT</span>
        <span style="background:#333;color:#E8A830;font-size:9px;padding:2px 6px;border-radius:10px;">LOCKED IN</span>
      </div>
      <div style="color:#aaa;font-size:11px;margin-top:2px;">Wall Jesus 🙏 — Always the driver. Always on mission.</div>
      <div style="color:#E8A830;font-size:10px;margin-top:3px;">✦ Wall jobs +15%  ✦ Spill drain -20%</div>
    `,r.appendChild(l),n.appendChild(r);const c=document.createElement("div");c.id="crew-synergy",c.style.cssText=`
      color:#2ECC40; font-size:11px; min-height:18px;
      text-align:center; padding:2px 16px; transition:opacity 0.3s;
      width:100%; max-width:420px; box-sizing:border-box;
    `,n.appendChild(c);const d=document.createElement("div");d.style.cssText=`
      display:grid; grid-template-columns:repeat(3,1fr);
      gap:10px; padding:8px 12px; width:100%;
      max-width:420px; box-sizing:border-box;
    `,So.filter(x=>!x.locked).forEach(x=>{const m=this._makeCard(x,c,()=>this._updateConfirm(g));d.appendChild(m)}),n.appendChild(d);const h=document.createElement("div");h.style.cssText=`
      position:fixed; bottom:0; left:0; right:0;
      background:linear-gradient(0deg,#0a0a0a,rgba(0,0,0,0.9));
      padding:12px 16px; display:flex; align-items:center;
      justify-content:space-between; z-index:13000; gap:10px;
    `;const f=document.createElement("div");f.id="crew-count",f.style.cssText="color:#aaa;font-size:12px;font-weight:700;min-width:100px;",f.textContent="0 / 2 picked";const g=document.createElement("button");g.id="crew-confirm",g.style.cssText=`
      background:#555; color:#888; border:none;
      padding:14px 28px; font-size:15px; font-weight:900;
      border-radius:8px; cursor:not-allowed; flex:1;
      font-family:'Arial Black',Arial,sans-serif;
      letter-spacing:1px; transition:all 0.2s;
    `,g.textContent="🚐 ROLL OUT",g.disabled=!0,h.appendChild(f),h.appendChild(g),n.appendChild(h),g.addEventListener("click",()=>{const x=[...this._selected].filter(m=>m!=="jose");Ux(x),this.hide(),i([...this._selected])}),document.body.appendChild(n),this._el=n}hide(){var e;(e=this._el)==null||e.remove(),this._el=null}_makeCard(e,t,i){const n=document.createElement("div");n.dataset.id=e.id,n.style.cssText=`
      background:#111; border:2px solid #333;
      border-radius:10px; padding:10px 8px;
      display:flex; flex-direction:column; align-items:center;
      gap:5px; cursor:pointer; transition:all 0.18s;
      user-select:none; -webkit-tap-highlight-color:transparent;
      position:relative;
    `;const s=this._makeAvatar(e,52);n.appendChild(s);const r=document.createElement("div");r.style.cssText="color:#fff;font-size:12px;font-weight:900;text-align:center;",r.textContent=e.name,n.appendChild(r);const a=document.createElement("div");a.style.cssText=`color:${e.color};font-size:9px;font-weight:700;text-align:center;`,a.textContent=e.title,n.appendChild(a);const l=document.createElement("div");l.style.cssText=`
      color:#aaa;font-size:8.5px;text-align:center;
      line-height:1.3; margin-top:2px;
    `,l.textContent=e.passive.desc,n.appendChild(l);const c=document.createElement("div");return c.style.cssText=`
      background:${e.color}22; border:1px solid ${e.color}66;
      color:${e.color}; font-size:8px; font-weight:700;
      padding:2px 6px; border-radius:8px; text-align:center;
      margin-top:2px;
    `,c.textContent=e.passive.name.toUpperCase(),n.appendChild(c),n.addEventListener("click",()=>{const d=e.id;if(this._selected.has(d))this._selected.delete(d),n.style.border="2px solid #333",n.style.background="#111",n.style.boxShadow="",n.style.transform="";else{if(this._selected.size-1>=vs.MAX_PICKS)return;this._selected.add(d),n.style.border=`2px solid ${e.color}`,n.style.background=`${e.color}18`,n.style.boxShadow=`0 0 14px ${e.color}60`,n.style.transform="scale(1.04)"}this._updateSynergy(t),i()}),n}_updateConfirm(e){const t=this._selected.size-1,i=document.getElementById("crew-count");i&&(i.textContent=`${t} / 2 picked`),t===vs.MAX_PICKS?(e.style.background="#2ECC40",e.style.color="#000",e.style.cursor="pointer",e.style.boxShadow="0 0 18px #2ECC4080",e.disabled=!1):(e.style.background="#555",e.style.color="#888",e.style.cursor="not-allowed",e.style.boxShadow="",e.disabled=!0)}_updateSynergy(e){const t=n=>this._selected.has(n);let i="";t("jose")&&t("phil")&&(i="⚡ Synergy: Zero interruptions — pure flow run"),t("fabio")&&t("tsuyoshi")&&(i="🔥 Synergy: Full speed team — clock-out crunch kings"),t("joe")&&t("matt")&&(i="💰 Synergy: Off-books premium — BTC rockets this run"),t("connie")&&t("jarrad")&&(i="🎲 Synergy: Penalty shield + chaos — high risk, protected"),t("jose")&&t("connie")&&(i="💼 Synergy: Wall Jesus + German Efficiency — unstoppable"),t("mikayla")&&t("matt")&&(i="📈 Synergy: Full board + pay boost — maximum earning run"),e.textContent=i,e.style.opacity=i?"1":"0"}_makeAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%; display:block;";const n=i.getContext("2d"),s=t/2,r=e.locked?"#1a0800":"#1a1a1a";n.fillStyle=r,n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill();const a=t*.14,l=t*.62;n.fillStyle=e.skinTone,n.fillRect(s-a/2,l,a,t*.22);const c=t*.44,d=t*.22;switch(n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,c,d*.88,d,0,0,Math.PI*2),n.fill(),n.fillStyle=e.hairColor,n.strokeStyle=e.hairColor,e.id){case"jose":{n.lineCap="round",[{dx:-10,len:t*.34,w:2.5},{dx:-5,len:t*.38,w:3},{dx:1,len:t*.36,w:2.5},{dx:6,len:t*.3,w:2},{dx:10,len:t*.26,w:2}].forEach(x=>{n.lineWidth=x.w,n.beginPath(),n.moveTo(s+x.dx,c-d*.1),n.bezierCurveTo(s+x.dx-2,c+x.len*.5,s+x.dx+2,c+x.len*.8,s+x.dx,c+x.len),n.stroke()}),n.fillStyle=e.hairColor,n.beginPath(),n.arc(s,c-d*.55,d*1.02,Math.PI,0),n.fill(),n.strokeStyle="rgba(200,200,200,0.7)",n.lineWidth=1.2;const h=d*.85,f=d*.44,g=c-d*.1;n.beginPath(),n.roundRect(s-h-.5,g-f/2,h,f,1.5),n.stroke(),n.beginPath(),n.roundRect(s+.5,g-f/2,h,f,1.5),n.stroke();break}case"matt":{n.beginPath(),n.arc(s,c-d*.55,d*1.08,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-d*.3,c-d*1.2,d*.65,d*.38,-.2,0,Math.PI*2),n.fill(),n.fillStyle="#3a1a08",n.beginPath(),n.ellipse(s,c+d*.45,d*.65,d*.32,0,0,Math.PI),n.fill();break}case"tsuyoshi":{const u=t*.12,h=c-d*.05;n.fillStyle=e.hairColor,n.fillRect(s-u/2,h-d*.2,u,d*.35),[{ox:-.3,h:t*.28,t:-.15},{ox:0,h:t*.36,t:0},{ox:.3,h:t*.26,t:.15}].forEach(g=>{const x=s+g.ox*u*2;n.beginPath(),n.moveTo(x-2.5,h),n.lineTo(x+2.5,h),n.lineTo(x+Math.sin(g.t)*g.h*.4,h-g.h),n.closePath(),n.fill()});break}case"jarrad":{n.beginPath(),n.arc(s,c-d*.6,d*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-d*.1,c-d*1.3,d*.6,d*.28,-.1,0,Math.PI*2),n.fill(),n.fillStyle="#2a1e08",n.beginPath(),n.ellipse(s,c+d*.42,d*.6,d*.26,0,0,Math.PI),n.fill(),n.strokeStyle="#111",n.lineWidth=1.2,n.fillStyle="rgba(160,200,240,0.15)";const u=d*.82,h=c-d*.1;n.beginPath(),n.roundRect(s-u-.5,h-d*.22,u,d*.44,1.5),n.fill(),n.stroke(),n.beginPath(),n.roundRect(s+.5,h-d*.22,u,d*.44,1.5),n.fill(),n.stroke();break}case"fabio":{n.beginPath(),n.arc(s,c-d*.6,d*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s,c-d*1.28,d*.65,d*.28,.1,0,Math.PI*2),n.fill(),n.fillStyle="#2e1800",n.beginPath(),n.ellipse(s,c+d*.4,d*.55,d*.22,0,0,Math.PI),n.fill();break}case"phil":{n.fillStyle="#C8C8C4",n.beginPath(),n.arc(s,c-d*.6,d*1.08,Math.PI,0),n.fill(),n.fillStyle="#DDDDD8",n.beginPath(),n.ellipse(s,c-d*1.1,d*.55,d*.28,0,0,Math.PI*2),n.fill(),n.strokeStyle="#111",n.lineWidth=1.2,n.fillStyle="rgba(160,200,240,0.15)";const u=d*.82,h=c-d*.1;n.beginPath(),n.roundRect(s-u-.5,h-d*.22,u,d*.44,1.5),n.fill(),n.stroke(),n.beginPath(),n.roundRect(s+.5,h-d*.22,u,d*.44,1.5),n.fill(),n.stroke();break}case"joe":{n.beginPath(),n.arc(s,c-d*.6,d*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-d*.1,c-d*1.3,d*.55,d*.26,-.1,0,Math.PI*2),n.fill(),n.fillStyle="#D4E800",n.fillRect(s-t*.25,t*.82,t*.5,t*.06);break}case"connie":{n.fillStyle="#E8D080",n.beginPath(),n.arc(s,c-d*.45,d*1.08,Math.PI,0),n.fill(),n.fillRect(s-d*1,c+d*.1,d*2,t*.16);break}case"mikayla":{n.fillStyle="#8B4513",n.beginPath(),n.arc(s,c-d*.45,d*1.05,Math.PI,0),n.fill(),n.fillRect(s-d*.9,c+d*.1,d*1.8,t*.14);break}}return e.locked&&(n.fillStyle="#E8A830",n.font=`bold ${t*.22}px Arial`,n.textAlign="center",n.fillText("★",s,t*.96)),n.strokeStyle=e.locked?"#E8A830":e.color+"99",n.lineWidth=e.locked?2.5:1.5,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}};b(vs,"MAX_PICKS",2);let pa=vs;const Md="https://djtxbohjjpkhzhwlnrtu.supabase.co",To="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdHhib2hqanBraHpod2xucnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwNDgzMjEsImV4cCI6MjA4NjYyNDMyMX0.UWgOz-9ZAy0xxVH-VTTysFzvrbD1CX0a459rNC391Hw",Sd="tem_scores",Td="tem-leaderboard-v1",Mc=100;async function Gx(o){Wx(o);try{await fetch(`${Md}/rest/v1/${Sd}`,{method:"POST",headers:{apikey:To,Authorization:`Bearer ${To}`,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(o)})}catch(e){console.warn("[Leaderboard] submit failed (offline?)",e)}}async function Hx(o,e=5){try{const t=encodeURIComponent(o.replace(/^⚔️\s*/,"").trim()),i=await fetch(`${Md}/rest/v1/${Sd}?job_title=ilike.*${t}*&order=completion_time_s.asc&limit=${e}`,{headers:{apikey:To,Authorization:`Bearer ${To}`}});if(i.ok){const n=await i.json();if(n.length>0)return n}}catch(t){console.warn("[Leaderboard] fetch failed (offline?)",t)}return Cd().filter(t=>t.job_title.toLowerCase().includes(o.replace(/^⚔️\s*/,"").trim().toLowerCase())).sort((t,i)=>t.completion_time_s-i.completion_time_s).slice(0,e)}const Ed="tem-player-name";function Ad(){return localStorage.getItem(Ed)}function Vx(o){localStorage.setItem(Ed,o.trim().slice(0,20))}function Cd(){try{return JSON.parse(localStorage.getItem(Td)??"[]")}catch{return[]}}function Wx(o){const e=Cd();e.unshift({...o,id:crypto.randomUUID(),created_at:new Date().toISOString()}),e.length>Mc&&(e.length=Mc),localStorage.setItem(Td,JSON.stringify(e))}class Xx{show(e){const t=Ad();if(t){e(t);return}const i=document.createElement("div");i.style.cssText=`
      position:fixed; inset:0; z-index:20000;
      background:rgba(0,0,0,0.92);
      display:flex; align-items:center; justify-content:center;
      font-family:'Arial Black',Arial,sans-serif;
    `,i.innerHTML=`
      <div style="
        background:linear-gradient(135deg,#0d1a0d,#1a2a1a);
        border:2px solid #2ECC40;
        border-radius:14px; padding:30px 28px;
        max-width:320px; width:90%; text-align:center;
        box-shadow:0 0 40px #2ECC4040;
      ">
        <div style="color:#2ECC40;font-size:11px;letter-spacing:3px;font-weight:900;margin-bottom:10px;">
          TROWELED EARTH RUSH
        </div>
        <div style="font-size:13px;color:#E8A830;font-weight:900;letter-spacing:1px;margin-bottom:6px;">
          ⚔️ CONTRACT WARS
        </div>
        <div style="color:#fff;font-size:20px;font-weight:900;margin-bottom:8px;line-height:1.2;">
          What's your<br>crew called?
        </div>
        <div style="color:#aaa;font-size:12px;margin-bottom:20px;line-height:1.4;">
          Your name appears on the leaderboard when you beat other crews' times.
        </div>
        <input id="pn-input" type="text" maxlength="20" placeholder="Enter crew name..."
          style="
            width:100%; box-sizing:border-box;
            background:#111; border:2px solid #2ECC40;
            color:#fff; font-size:16px; font-weight:700;
            padding:12px 14px; border-radius:8px;
            font-family:'Arial Black',Arial,sans-serif;
            outline:none; margin-bottom:16px;
            text-align:center; letter-spacing:1px;
          "/>
        <button id="pn-btn" style="
          width:100%; background:#2ECC40; color:#000;
          border:none; padding:14px; font-size:15px;
          font-weight:900; border-radius:8px; cursor:pointer;
          font-family:'Arial Black',Arial,sans-serif;
          letter-spacing:1px;
        ">LET'S GO 🚐</button>
      </div>
    `,document.body.appendChild(i);const n=i.querySelector("#pn-input"),s=i.querySelector("#pn-btn");setTimeout(()=>n.focus(),100);const r=()=>{const a=n.value.trim()||"TEM Crew";Vx(a),i.remove(),e(a)};s.addEventListener("click",r),n.addEventListener("keydown",a=>{a.key==="Enter"&&r()})}}const fs=[{name:"Spanish White",shots:{B:1,Y:1,L:0,R:0,G:0},hex:"#F8F4EC",difficulty:1,hint:"Minimal — barely any pigment"},{name:"Papercut",shots:{B:1,Y:2,L:1,R:0,G:0},hex:"#F0E8D0",difficulty:1,hint:"Double the Yellow, everything else even"},{name:"Tranquil",shots:{B:2,Y:2,L:2,R:0,G:0},hex:"#E4DAC0",difficulty:1,hint:"All three equal — balanced warm white"},{name:"Ivory",shots:{B:3,Y:3,L:3,R:0,G:0},hex:"#EDE0BC",difficulty:2,hint:"Classic — three equal shots each"},{name:"Bones",shots:{B:3,Y:1,L:3,R:0,G:0},hex:"#E8DFC8",difficulty:2,hint:"Like Ivory but drop Yellow to 1"},{name:"Bohemian",shots:{B:3,Y:2,L:3,R:0,G:0},hex:"#DDD0B0",difficulty:2,hint:"Between Ivory and Bones — Y at 2"},{name:"Sawtooth",shots:{B:6,Y:2,L:6,R:0,G:0},hex:"#D4C8A8",difficulty:3,hint:"Double the Black and Umber from Bones"},{name:"Atlas",shots:{B:5,Y:10,L:5,R:0,G:0},hex:"#D4B87A",difficulty:3,hint:"Heavy on Yellow — most of anything"}],li=[{key:"B",label:"Black",color:"#2a2a2a",dot:"#666666",max:8},{key:"Y",label:"Dirty Yellow",color:"#C8A020",dot:"#E8C040",max:12},{key:"L",label:"Raw Umber",color:"#8B5E30",dot:"#AA7848",max:8},{key:"R",label:"Dirty Red",color:"#A04030",dot:"#CC5542",max:6},{key:"G",label:"Green",color:"#3A6030",dot:"#5A8850",max:8}];function Ss(o){const e=parseInt(o.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function Rd(o,e,t){return"#"+[o,e,t].map(i=>Math.max(0,Math.min(255,Math.round(i))).toString(16).padStart(2,"0")).join("")}function qx(o,e){const[t,i,n]=Ss(o),[s,r,a]=Ss(e);return Math.sqrt((t-s)**2+(i-r)**2+(n-a)**2)}function jx(o,e){return Math.max(0,Math.round(100-qx(o,e)*.45))}function yr(o){const e={B:o.B??0,Y:o.Y??0,L:o.L??0,R:(o.R??0)*.1,G:o.G??0},t={B:e.B/8,Y:e.Y/12,L:e.L/8,R:e.R/.6,G:e.G/8};let i=0,n=0,s=0,r=0;for(const a of fs){const l={B:a.shots.B/8,Y:a.shots.Y/12,L:a.shots.L/8,R:a.shots.R*.1/.6,G:a.shots.G/8},d=1/(Math.sqrt((t.B-l.B)**2+(t.Y-l.Y)**2+(t.L-l.L)**2+(t.R-l.R)**2+(t.G-l.G)**2)+.003),[u,h,f]=Ss(a.hex);i+=u*d,n+=h*d,s+=f*d,r+=d}return Rd(i/r,n/r,s/r)}const Pd="tem-mixer-v3";function ma(){try{return new Set(JSON.parse(localStorage.getItem(Pd)||"[]"))}catch{return new Set}}function Yx(o){try{const e=ma();e.add(o),localStorage.setItem(Pd,JSON.stringify([...e]))}catch{}}class $x{constructor(){b(this,"overlay",null);b(this,"canvas",null);b(this,"ctx",null);b(this,"rafId",0);b(this,"shots",{B:0,Y:0,L:0,R:0,G:0});b(this,"sel","B");b(this,"target",null);b(this,"timer",180);b(this,"timerInt",null);b(this,"solved",!1);b(this,"onDone",null);b(this,"W",400);b(this,"H",240);b(this,"jX",58);b(this,"jY",218);b(this,"bkX",258);b(this,"bkTopY",105);b(this,"bkBotY",168);b(this,"cnX",322);b(this,"cnY",218);b(this,"GRAVITY",520);b(this,"cannonTipX",0);b(this,"cannonTipY",0);b(this,"aimAngle",-.78);b(this,"aimPower",360);b(this,"isAiming",!1);b(this,"hasFired",!1);b(this,"ball",null);b(this,"splats",[]);b(this,"connieHitT",0);b(this,"bucketFlashT",0);b(this,"currentMix","#F8F6F0");b(this,"displayMix","#F8F6F0");b(this,"mixedResult","");b(this,"matchValue",0);b(this,"mixState","idle");b(this,"mixT",0);b(this,"dotEls",{B:[],Y:[],L:[],R:[],G:[]});b(this,"timerEl",null);b(this,"fireBtn",null);b(this,"mixBtn",null);b(this,"pigBtns",{})}show(e){this._cleanup(),this.solved=!1,this.timer=180,this.shots={B:0,Y:0,L:0,R:0,G:0},this.sel="B",this.ball=null,this.splats=[],this.connieHitT=0,this.bucketFlashT=0,this.currentMix="#F8F6F0",this.displayMix="#F8F6F0",this.mixState="idle",this.mixT=0,this.matchValue=0,this.mixedResult="",this.isAiming=!1,this.hasFired=!1,this.onDone=e??null;const t=ma(),i=fs.filter(n=>!t.has(n.name));this.target=(i.length>0?i:fs)[Math.floor(Math.random()*(i.length||fs.length))],this._injectStyles(),this._buildUI(),this._selectPig("B"),this._startTimer(),this._startLoop()}hide(){this._cleanup()}_buildUI(){const e=document.createElement("div");e.id="mmv3-ov",e.style.cssText="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,0.9);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;animation:mm3Fade 0.2s ease both;",document.body.appendChild(e),this.overlay=e;const t=document.createElement("div");t.style.cssText="background:linear-gradient(170deg,#1c1814,#0e0c0a);border:1px solid rgba(200,168,106,0.22);border-radius:22px;width:min(440px,97vw);max-height:97vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.95);animation:mm3Slide 0.28s cubic-bezier(.4,0,.2,1) both;",e.appendChild(t);const i=document.createElement("div");i.style.cssText="display:flex;align-items:flex-start;justify-content:space-between;padding:14px 16px 0;",i.innerHTML='<div><div style="color:#C8A86A;font-size:10px;font-weight:800;letter-spacing:4px;opacity:0.7;">TEM WORKSHOP</div><div style="color:#fff;font-size:18px;font-weight:900;">🎨 MARBELLINO MIXER</div><div style="color:rgba(200,168,106,0.5);font-size:11px;margin-top:2px;">Aim the cannon — get the right shots in the bucket</div></div>';const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:16px;width:34px;height:34px;border-radius:50%;cursor:pointer;flex-shrink:0;",n.addEventListener("click",()=>this._cleanup()),i.appendChild(n),t.appendChild(i);const s=document.createElement("div");s.style.cssText="display:flex;align-items:center;gap:12px;padding:10px 16px 0;";const r=document.createElement("div");r.style.cssText=`width:50px;height:50px;border-radius:10px;border:2px solid rgba(200,168,106,0.4);flex-shrink:0;background:${this.target.hex};`;const a=document.createElement("div"),l="★".repeat(this.target.difficulty)+"☆".repeat(3-this.target.difficulty);a.innerHTML=`<div style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:3px;">TARGET</div><div id="mmv3-name" style="color:#fff;font-size:17px;font-weight:900;">???</div><div style="color:#C8A86A;font-size:11px;">${l}</div>`,s.appendChild(r),s.appendChild(a),t.appendChild(s);const c=document.createElement("div");c.style.cssText="padding:10px 16px 0;position:relative;",this.canvas=document.createElement("canvas"),this.canvas.style.cssText="width:100%;border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:#0a0806;box-shadow:inset 0 2px 20px rgba(0,0,0,0.8);touch-action:none;cursor:crosshair;display:block;",this._resizeCanvas(),c.appendChild(this.canvas),t.appendChild(c),this.ctx=this.canvas.getContext("2d"),this.canvas.addEventListener("pointerdown",x=>{x.preventDefault(),!(this.ball||this.mixState==="mixing"||this.solved)&&(this.isAiming=!0,this._updateAim(x))},{passive:!1}),this.canvas.addEventListener("pointermove",x=>{this.isAiming&&this._updateAim(x)},{passive:!0}),this.canvas.addEventListener("pointerup",()=>{this.isAiming=!1});const d=document.createElement("div");d.style.cssText="display:flex;flex-direction:column;gap:7px;padding:10px 16px 0;";for(const x of li){const m=x.key,p=document.createElement("div");p.id=`mmv3-pig-${m}`,p.style.cssText="display:flex;align-items:center;gap:9px;cursor:pointer;padding:5px 8px;border-radius:10px;border:1.5px solid transparent;transition:all 0.12s;";const w=document.createElement("div");w.style.cssText=`width:18px;height:18px;border-radius:4px;background:${x.color};border:1.5px solid rgba(255,255,255,0.15);flex-shrink:0;`;const T=document.createElement("div");T.style.cssText="color:rgba(255,255,255,0.7);font-size:12px;font-weight:700;width:82px;flex-shrink:0;",T.textContent=x.label;const v=document.createElement("div");v.style.cssText="display:flex;gap:3px;flex:1;align-items:center;flex-wrap:wrap;",this.dotEls[m]=[];for(let A=0;A<Math.min(x.max,12);A++){const C=document.createElement("div");C.style.cssText="width:11px;height:11px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.1);background:transparent;transition:background 0.1s;flex-shrink:0;",v.appendChild(C),this.dotEls[m].push(C)}const R=document.createElement("div");R.id=`mmv3-cnt-${m}`,R.style.cssText=`color:${x.dot};font-size:13px;font-weight:900;min-width:28px;text-align:right;font-variant-numeric:tabular-nums;`,R.textContent="0",p.appendChild(w),p.appendChild(T),p.appendChild(v),p.appendChild(R),p.addEventListener("click",()=>this._selectPig(m)),d.appendChild(p),this.pigBtns[m]=p}t.appendChild(d);const u=document.createElement("div");u.style.cssText="padding:8px 16px 0;",u.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
        <span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:2px;">MATCH</span>
        <span id="mmv3-pct" style="color:#C8A86A;font-size:15px;font-weight:900;">—</span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:7px;overflow:hidden;">
        <div id="mmv3-bar" style="height:100%;width:0%;border-radius:99px;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s,background 0.3s;"></div>
      </div>
      <div id="mmv3-hint" style="color:rgba(200,168,106,0.4);font-size:11px;text-align:center;margin-top:4px;min-height:15px;"></div>
    `,t.appendChild(u);const h=document.createElement("div");h.style.cssText="display:flex;gap:9px;padding:10px 16px 16px;align-items:center;";const f=document.createElement("button");f.textContent="⌫",f.title="Remove last shot",f.style.cssText="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.4);font-size:17px;width:46px;height:50px;border-radius:12px;cursor:pointer;flex-shrink:0;touch-action:manipulation;",f.addEventListener("click",()=>this._undoShot()),this.fireBtn=document.createElement("button"),this.fireBtn.style.cssText="flex:1;height:50px;border:none;border-radius:12px;font-size:14px;font-weight:900;letter-spacing:0.5px;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B2020,#5a1010);color:#FFaaaa;box-shadow:0 4px 16px rgba(200,30,30,0.25);transition:transform 0.1s;",this.fireBtn.textContent="🔴 AIM FIRST",this.fireBtn.addEventListener("pointerdown",()=>{this.fireBtn.style.transform="scale(0.97)"}),this.fireBtn.addEventListener("pointerup",()=>{this.fireBtn.style.transform="",this._fire()}),this.mixBtn=document.createElement("button"),this.mixBtn.style.cssText="width:72px;height:50px;border:none;border-radius:12px;font-size:12px;font-weight:900;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B4A00,#5A3000);color:#FFD080;flex-shrink:0;box-shadow:0 4px 12px rgba(200,100,0,0.2);transition:transform 0.1s;",this.mixBtn.textContent="🔩 MIX",this.mixBtn.addEventListener("pointerdown",()=>{this.mixBtn.style.transform="scale(0.97)"}),this.mixBtn.addEventListener("pointerup",()=>{this.mixBtn.style.transform="",this._triggerMix()});const g=document.createElement("div");g.style.cssText="display:flex;flex-direction:column;align-items:center;gap:1px;flex-shrink:0;",g.innerHTML='<span style="color:rgba(255,255,255,0.3);font-size:9px;letter-spacing:1px;">TIME</span>',this.timerEl=document.createElement("span"),this.timerEl.style.cssText="color:#fff;font-size:16px;font-weight:900;font-variant-numeric:tabular-nums;",this.timerEl.textContent="3:00",g.appendChild(this.timerEl),h.appendChild(f),h.appendChild(this.fireBtn),h.appendChild(this.mixBtn),h.appendChild(g),t.appendChild(h)}_updateAim(e){if(!this.canvas)return;const t=this.canvas.getBoundingClientRect(),i=this.canvas.width/t.width,n=this.canvas.height/t.height,s=(e.clientX-t.left)*i,r=(e.clientY-t.top)*n,a=s-this.jX,l=r-this.jY,c=Math.atan2(l,a);this.aimAngle=Math.max(-1.25,Math.min(-.1,c));const d=Math.sqrt(a*a+l*l);if(this.aimPower=Math.max(220,Math.min(500,d*2.2)),this.fireBtn&&!this.hasFired){const u=li.find(h=>h.key===this.sel);this.fireBtn.textContent=`💥 FIRE ${u.label.slice(0,3).toUpperCase()}`,this.fireBtn.style.background="linear-gradient(135deg,#CC2222,#882020)",this.fireBtn.style.color="#fff"}}_fire(){if(this.ball||this.mixState==="mixing"||this.solved)return;if(!this.hasFired&&Math.abs(this.aimAngle+.78)<.05&&this.aimPower===360){this.fireBtn&&(this.fireBtn.textContent="← Drag canvas to aim!");return}const e=li.find(l=>l.key===this.sel);if(this.shots[this.sel]>=e.max){if(this.fireBtn){const l=this.fireBtn.textContent;this.fireBtn.textContent=`MAX ${e.max} shots!`,setTimeout(()=>{this.fireBtn&&(this.fireBtn.textContent=l||"💥 FIRE")},1200)}return}const t=34,i=this.jX+t*Math.cos(this.aimAngle),n=this.jY-52+t*Math.sin(this.aimAngle);this.cannonTipX=i,this.cannonTipY=n;const s=this.aimPower*Math.cos(this.aimAngle),r=this.aimPower*Math.sin(this.aimAngle),a=e.dot;this.ball={x:i,y:n,vx:s,vy:r,r:7,color:a,pigKey:this.sel},this.hasFired=!0,this.fireBtn&&(this.fireBtn.textContent="🔴 IN FLIGHT…")}_selectPig(e){this.sel=e;const t=li.find(i=>i.key===e);for(const i of li){const n=this.pigBtns[i.key];n&&(i.key===e?(n.style.borderColor=t.dot,n.style.background=t.color+"22"):(n.style.borderColor="transparent",n.style.background="transparent"))}this.fireBtn&&!this.ball&&(this.fireBtn.textContent=`💥 FIRE ${t.label.slice(0,3).toUpperCase()}`,this.fireBtn.style.background="linear-gradient(135deg,#CC2222,#882020)",this.fireBtn.style.color="#fff")}_undoShot(){this.ball||this.mixState==="mixing"||this.shots[this.sel]>0&&(this.shots[this.sel]--,this._refreshDots(),this.currentMix=yr(this.shots))}_refreshDots(){for(const e of li){const t=e.key,i=this.shots[t];this.dotEls[t].forEach((s,r)=>{s.style.background=r<i?e.dot:"transparent",s.style.borderColor=r<i?e.dot+"88":"rgba(255,255,255,0.1)"});const n=document.getElementById(`mmv3-cnt-${t}`);n&&(n.textContent=String(i))}}_update(e){const[t,i,n]=Ss(this.currentMix),[s,r,a]=Ss(this.displayMix),l=this.mixState==="mixing"?5:1.8;this.displayMix=Rd(s+(t-s)*l*e,r+(i-r)*l*e,a+(n-a)*l*e);for(let g=this.splats.length-1;g>=0;g--)this.splats[g].t+=e,this.splats[g].t>this.splats[g].maxT&&this.splats.splice(g,1);if(this.connieHitT>0&&(this.connieHitT-=e),this.bucketFlashT>0&&(this.bucketFlashT-=e),this.mixState==="mixing"&&(this.mixT+=e,this.mixT>2.2&&this._onMixDone()),(this.mixState==="success"||this.mixState==="fail")&&(this.mixT+=e),!this.ball)return;this.ball.x+=this.ball.vx*e,this.ball.y+=this.ball.vy*e,this.ball.vy+=this.GRAVITY*e;const c=this.ball,d=Math.abs(c.x-this.bkX)<26,u=c.y>this.bkTopY&&c.y<this.bkBotY;if(d&&u){this._hitBucket();return}const h=Math.abs(c.x-this.cnX)<20,f=c.y>this.cnY-95&&c.y<this.cnY;if(h&&f){this._hitConnie();return}(c.y>this.H+10||c.x>this.W+10||c.y<-20)&&(this.ball=null,this._resetFireBtn())}_hitBucket(){if(!this.ball)return;const e=this.ball.pigKey,t=li.find(i=>i.key===e);this.shots[e]<t.max&&(this.shots[e]++,this._refreshDots(),this.currentMix=yr(this.shots),this.bucketFlashT=.6);for(let i=0;i<12;i++)this.splats.push({x:this.bkX+(Math.random()-.5)*30,y:this.bkTopY+10+Math.random()*20,color:this.ball.color,t:0,maxT:.8+Math.random()*.5});this.ball=null,this._resetFireBtn()}_hitConnie(){if(!this.ball)return;this.connieHitT=1.8;for(let t=0;t<18;t++)this.splats.push({x:this.ball.x+(Math.random()-.5)*25,y:this.ball.y+(Math.random()-.5)*25,color:this.ball.color,t:0,maxT:1+Math.random()*.6});const e=document.getElementById("mmv3-hint");if(e){const t=["JOSE!!! 😤","WATCH IT!!! 😡","OMG!!! 🤬","JOSE YOU IDIOT! 😤","HEY! THAT'S MY UNIFORM!","YOU GOT IT ON MY TITS!!! 😤"];e.textContent=t[Math.floor(Math.random()*t.length)],e.style.color="#FF6644",setTimeout(()=>{e&&(e.textContent="",e.style.color="rgba(200,168,106,0.4)")},2e3)}this.ball=null,this._resetFireBtn()}_resetFireBtn(){if(this.fireBtn){const e=li.find(t=>t.key===this.sel);this.fireBtn.textContent=`💥 FIRE ${e.label.slice(0,3).toUpperCase()}`}}_triggerMix(){if(this.mixState==="mixing"||this.mixState==="success"||this.solved)return;if(Object.values(this.shots).reduce((t,i)=>t+i,0)===0){const t=document.getElementById("mmv3-hint");t&&(t.textContent="Get some shots in the bucket first!",setTimeout(()=>{t&&(t.textContent="")},1800));return}this.ball&&(this.ball=null),this.mixState="mixing",this.mixT=0,this.mixedResult=yr(this.shots),this.matchValue=jx(this.mixedResult,this.target.hex),this.mixBtn&&(this.mixBtn.style.background="linear-gradient(135deg,#226622,#144414)",this.mixBtn.style.color="#88FFcc",this.mixBtn.textContent="⚙️ …"),this.fireBtn&&(this.fireBtn.disabled=!0)}_onMixDone(){const e=this.matchValue,t=document.getElementById("mmv3-bar"),i=document.getElementById("mmv3-pct"),n=document.getElementById("mmv3-hint");t&&(t.style.width=`${e}%`,t.style.background=e>=82?"linear-gradient(90deg,#44DD88,#88FFCC)":e>=55?"linear-gradient(90deg,#C8A86A,#FFD080)":"linear-gradient(90deg,#882222,#CC4433)"),i&&(i.textContent=`${e}%`,i.style.color=e>=82?"#44DD88":e>=55?"#C8A86A":"#FF6644"),e>=82?this._triggerSuccess(e):(this.mixState="idle",n&&(n.textContent=e>=65?"Getting close — try adjusting the shots":"Not quite — clear and try again"),this.mixBtn&&(this.mixBtn.style.background="linear-gradient(135deg,#8B4A00,#5A3000)",this.mixBtn.style.color="#FFD080",this.mixBtn.textContent="🔩 MIX"),this.fireBtn&&(this.fireBtn.disabled=!1))}_triggerSuccess(e){if(this.solved)return;this.solved=!0,this._stopTimer(),Yx(this.target.name),this.mixState="success",this.mixT=0;const t=document.getElementById("mmv3-name");t&&(t.textContent=this.target.name,t.style.color="#44DD88");const i=document.getElementById("mmv3-hint");if(i){const s=li.filter(r=>this.target.shots[r.key]>0).map(r=>`${r.key}=${this.target.shots[r.key]}`).join(" · ");i.textContent=`✓ ${s}   (${ma().size}/${fs.length} cracked)`,i.style.color="#44DD8888"}this.mixBtn&&(this.mixBtn.textContent="🏆 CRACKED!",this.mixBtn.style.background="linear-gradient(135deg,#2a8a44,#1a6030)",this.mixBtn.style.color="#88FFcc",this.mixBtn.disabled=!0),this.fireBtn&&(this.fireBtn.disabled=!0);const n=Math.round((e-82)/18*40);setTimeout(()=>{var s;this._cleanup(),(s=this.onDone)==null||s.call(this,n)},4500)}_triggerTimeout(){if(this.solved)return;this._stopTimer(),this.mixState="fail",this.mixT=0,this.timerEl&&(this.timerEl.textContent="0:00",this.timerEl.style.color="#FF4444");const e=document.getElementById("mmv3-name");e&&(e.textContent=`${this.target.name} (answer)`,e.style.color="#FF8866"),this.mixBtn&&(this.mixBtn.disabled=!1,this.mixBtn.style.background="rgba(100,30,20,0.9)",this.mixBtn.style.color="#FF9988",this.mixBtn.textContent="Close",this.mixBtn.addEventListener("click",()=>{var t;this._cleanup(),(t=this.onDone)==null||t.call(this,0)},{once:!0}))}_startLoop(){let e=performance.now();const t=i=>{if(!this.canvas)return;const n=Math.min((i-e)/1e3,.05);e=i,this._update(n),this._drawScene(),this.rafId=requestAnimationFrame(t)};this.rafId=requestAnimationFrame(t)}_drawScene(){if(!this.canvas||!this.ctx)return;const e=this.ctx,t=this.W,i=this.H;e.clearRect(0,0,t,i);const n=e.createLinearGradient(0,0,0,i);n.addColorStop(0,"#1e1610"),n.addColorStop(1,"#090704"),e.fillStyle=n,e.fillRect(0,0,t,i),e.strokeStyle="rgba(255,255,255,0.03)",e.lineWidth=1;for(let s=20;s<i;s+=22)e.beginPath(),e.moveTo(0,s),e.lineTo(t,s),e.stroke();e.fillStyle="rgba(200,168,106,0.08)",e.fillRect(0,i-18,t,18),e.strokeStyle="rgba(200,168,106,0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(0,i-18),e.lineTo(t,i-18),e.stroke(),this._drawBucket(e,t,i),this._drawConnie(e,t,i),this._drawJose(e,t,i),this.isAiming&&!this.ball&&this._drawArcPreview(e),this.ball&&this._drawBall(e),this._drawSplats(e)}_drawBucket(e,t,i){const n=this.bkX,s=this.bkTopY,r=this.bkBotY,a=r-s,l=54,c=38;e.save(),e.beginPath(),e.moveTo(n-l/2,s),e.lineTo(n+l/2,s),e.lineTo(n+c/2,r),e.lineTo(n-c/2,r),e.closePath(),e.clip(),e.fillStyle="#F5F0E8",e.fill();const d=Object.values(this.shots).reduce((f,g)=>f+g,0),u=Math.min(1,d/22);if(u>0){const f=r-a*u,g=c+(l-c)*u;e.beginPath(),e.moveTo(n-g/2,f),e.lineTo(n+g/2,f),e.lineTo(n+c/2,r),e.lineTo(n-c/2,r),e.closePath(),e.fillStyle=this.displayMix,e.fill(),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=2,e.beginPath();const x=performance.now()/1e3;e.moveTo(n-g/2+4,f+2),e.bezierCurveTo(n-g/4,f-2+Math.sin(x*2)*2,n+g/4,f+3+Math.sin(x*2+1)*2,n+g/2-4,f+2),e.stroke()}if(this.mixState==="mixing"){const f=this.mixT;for(let g=0;g<4;g++){const x=f*8+g*(Math.PI*2/4),m=12+Math.sin(f*4+g)*5;e.beginPath(),e.arc(n+Math.cos(x)*m,r-a*.35+Math.sin(x)*m*.35,4,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.12+Math.sin(x)*.06})`,e.fill()}}e.restore();const h=this.bucketFlashT>0?.7+Math.sin(this.bucketFlashT*30)*.3:.5;e.save(),e.beginPath(),e.moveTo(n-l/2,s),e.lineTo(n+l/2,s),e.lineTo(n+c/2,r),e.lineTo(n-c/2,r),e.closePath(),e.strokeStyle=this.mixState==="success"?`rgba(68,221,136,${h})`:`rgba(200,168,106,${h})`,e.lineWidth=2.5,e.stroke(),e.beginPath(),e.ellipse(n,s,l/2,5.5,0,0,Math.PI*2),e.strokeStyle="rgba(200,168,106,0.65)",e.lineWidth=2,e.stroke(),e.fillStyle="rgba(220,190,140,0.12)",e.fill(),e.beginPath(),e.arc(n,s-3,l/2-5,Math.PI,0),e.strokeStyle="#A08050",e.lineWidth=3,e.stroke(),e.font="bold 10px system-ui",e.fillStyle="rgba(200,168,106,0.5)",e.textAlign="center",e.fillText("TEM",n,r-a*.4),e.textAlign="start",e.restore()}_drawConnie(e,t,i){const n=this.cnX,s=this.cnY,r="#F0C8A0",a="#111",l=88,c=this.connieHitT>0,d=c?Math.sin(this.connieHitT*20)*4:0,u=this.mixState==="mixing",h=this.mixState==="success";e.save(),e.translate(d,0),e.fillStyle="#111",e.fillRect(n-10,s-12,10,12),e.fillRect(n+2,s-12,10,12),e.fillStyle="#1a1a2a",e.fillRect(n-9,s-l*.44,9,l*.44-10),e.fillRect(n+2,s-l*.44,9,l*.44-10),e.fillStyle=a,e.fillRect(n-12,s-l*.8,24,l*.37),e.fillStyle=r,e.fillRect(n-4,s-l*.84,8,l*.055),e.beginPath(),e.arc(n,s-l*.87,l*.08,0,Math.PI*2),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(n,s-l*.87-l*.04,l*.1,Math.PI,0),e.fill(),e.fillRect(n-l*.1,s-l*.87,l*.2,l*.13),e.strokeStyle="#FFE070",e.lineWidth=2.5,e.lineCap="round",e.beginPath(),e.moveTo(n-8,s-l*.87),e.quadraticCurveTo(n-18,s-l*.92,n-14,s-l*.98),e.stroke(),e.beginPath(),e.moveTo(n+6,s-l*.87),e.quadraticCurveTo(n+16,s-l*.91,n+12,s-l*.96),e.stroke(),e.lineCap="butt";const f=this.bkX+30,g=this.bkTopY-10,x=Math.atan2(g-(s-l*.7),f-n),m=u||h,p=m?performance.now()/80:0;if(e.strokeStyle=a,e.lineWidth=8,e.lineCap="round",m){e.beginPath(),e.moveTo(n-10,s-l*.72),e.quadraticCurveTo(n-20,s-l*.6,f-20,g+5),e.stroke(),e.save(),e.translate(f-22,g+4),e.rotate(x),e.fillStyle="#333",e.strokeStyle="#666",e.lineWidth=1,e.beginPath(),e.roundRect(-26,-6,34,12,3),e.fill(),e.stroke(),e.fillStyle="#555",e.fillRect(-30,-4,6,8),e.strokeStyle="#aaa",e.lineWidth=2,e.lineCap="round",e.beginPath(),e.moveTo(-30,0),e.lineTo(-42,0),e.stroke(),e.lineCap="butt",e.save(),e.translate(-42,0),e.rotate(p);const w=e.createRadialGradient(0,0,0,0,0,11);w.addColorStop(0,"rgba(200,168,106,0.7)"),w.addColorStop(1,"transparent"),e.fillStyle=w,e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.strokeStyle="#FFD080",e.lineWidth=2;for(let T=0;T<Math.PI*2;T+=Math.PI/2)e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(T)*8,Math.sin(T)*8),e.stroke();e.restore(),e.restore()}else e.beginPath(),e.moveTo(n-10,s-l*.72),e.lineTo(n-16,s-l*.48),e.stroke(),e.beginPath(),e.arc(n-16,s-l*.47,4.5,0,Math.PI*2),e.fillStyle=r,e.fill();e.strokeStyle=a,e.lineWidth=8,e.beginPath(),e.moveTo(n+10,s-l*.72),e.lineTo(n+16,s-l*.48),e.stroke(),e.beginPath(),e.arc(n+16,s-l*.47,4.5,0,Math.PI*2),e.fillStyle=r,e.fill(),e.lineCap="butt",c&&(e.font="bold 11px system-ui",e.fillStyle="#FF4422",e.textAlign="center",e.fillText("JOSE!!! 😤",n,s-l-6),e.textAlign="start"),e.font="bold 8px system-ui",e.fillStyle="rgba(255,200,80,0.65)",e.textAlign="center",e.fillText("CONNIE",n,s+10),e.textAlign="start",e.restore()}_drawJose(e,t,i){const n=this.jX,s=this.jY,r="#C88060",a="#111",l=90,c=34,d=n+c*Math.cos(this.aimAngle),u=s-52+c*Math.sin(this.aimAngle);this.cannonTipX=d,this.cannonTipY=u,e.save(),e.translate(n,s-52),e.rotate(this.aimAngle);const h=e.createLinearGradient(0,-9,0,9);h.addColorStop(0,"#444"),h.addColorStop(.5,"#777"),h.addColorStop(1,"#333"),e.fillStyle=h,e.beginPath(),e.roundRect(0,-9,c,18,4),e.fill(),e.strokeStyle="#222",e.lineWidth=1.5,e.beginPath(),e.roundRect(0,-9,c,18,4),e.stroke(),e.fillStyle="#888",e.beginPath(),e.ellipse(c,0,5,9,0,0,Math.PI*2),e.fill(),e.strokeStyle="#555",e.lineWidth=3,[10,20].forEach(m=>{e.beginPath(),e.moveTo(m,-9),e.lineTo(m,9),e.stroke()}),e.restore(),e.fillStyle="#3a2a1a",e.beginPath(),e.roundRect(n-6,s-62,16,18,3),e.fill(),e.beginPath(),e.arc(n+4,s-50,8,0,Math.PI*2),e.fillStyle="#555",e.fill(),e.strokeStyle="#888",e.lineWidth=1.5,e.stroke(),e.strokeStyle="#333",e.lineWidth=1.5;for(let m=0;m<Math.PI*2;m+=Math.PI/3)e.beginPath(),e.moveTo(n+4,s-50),e.lineTo(n+4+Math.cos(m)*7,s-50+Math.sin(m)*7),e.stroke();if(this.ball&&Math.sqrt((this.ball.x-d)**2+(this.ball.y-u)**2)<40){e.save(),e.globalAlpha=.8;const m=e.createRadialGradient(d,u,0,d,u,18);m.addColorStop(0,"rgba(255,200,50,0.9)"),m.addColorStop(1,"transparent"),e.fillStyle=m,e.beginPath(),e.arc(d,u,18,0,Math.PI*2),e.fill(),e.restore()}e.fillStyle="#0a0a0a",e.fillRect(n-10,s-12,10,12),e.fillRect(n+2,s-12,10,12),e.fillStyle="#1a1a2a",e.fillRect(n-9,s-l*.44,9,l*.44-10),e.fillRect(n+2,s-l*.44,9,l*.44-10),e.fillStyle=a,e.fillRect(n-12,s-l*.8,24,l*.37),e.fillStyle=r,e.fillRect(n-4,s-l*.84,8,l*.055);const f=s-l*.88,g=l*.08,x=[{dx:-9,swing:-4,len:32},{dx:-5,swing:-2,len:38},{dx:-1,swing:2,len:35},{dx:3,swing:3,len:28},{dx:7,swing:1,len:24},{dx:-12,swing:-6,len:22}];e.lineCap="round",x.forEach((m,p)=>{e.strokeStyle=p%2===0?"#2a1000":"#3a1a00",e.lineWidth=5,e.beginPath(),e.moveTo(n+m.dx,f-g*.3),e.bezierCurveTo(n+m.dx+m.swing*.5,f+m.len*.35,n+m.dx+m.swing,f+m.len*.7,n+m.dx+m.swing*.8+Math.sin(p)*2,f+m.len),e.stroke()}),e.lineCap="butt",e.fillStyle=r,e.beginPath(),e.arc(n,f,g,0,Math.PI*2),e.fill(),e.fillStyle="#3a1a00",e.beginPath(),e.arc(n-3,f-2,2,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(n+3,f-2,2,0,Math.PI*2),e.fill(),e.strokeStyle="#8a4820",e.lineWidth=1.5,e.beginPath(),e.arc(n,f+2,4,.2,Math.PI-.2),e.stroke(),e.strokeStyle="#8B4A00",e.lineWidth=3.5,e.beginPath(),e.arc(n,f,g*1.05,Math.PI*.75,Math.PI*1.85),e.stroke(),e.strokeStyle=a,e.lineWidth=8,e.lineCap="round",e.beginPath(),e.moveTo(n+10,s-l*.72),e.quadraticCurveTo(n+16,s-l*.58,n+10,s-52+4),e.stroke(),e.beginPath(),e.arc(n+10,s-49,4.5,0,Math.PI*2),e.fillStyle=r,e.fill(),e.strokeStyle=a,e.lineWidth=8,e.beginPath(),e.moveTo(n-10,s-l*.72),e.lineTo(n-16,s-l*.48),e.stroke(),e.beginPath(),e.arc(n-16,s-l*.47,4.5,0,Math.PI*2),e.fillStyle=r,e.fill(),e.lineCap="butt",e.font="bold 8px system-ui",e.fillStyle="rgba(255,220,100,0.65)",e.textAlign="center",e.fillText("JOSE",n,s+10),e.textAlign="start"}_drawArcPreview(e){const t=li.find(a=>a.key===this.sel),i=this.aimPower*Math.cos(this.aimAngle),n=this.aimPower*Math.sin(this.aimAngle),s=this.cannonTipX,r=this.cannonTipY;e.save();for(let a=0;a<28;a++){const l=a*.055,c=s+i*l,d=r+n*l+.5*this.GRAVITY*l*l;if(d>this.H||c>this.W)break;const u=.7-a*.022;e.globalAlpha=Math.max(0,u),e.fillStyle=t.dot,e.shadowColor=t.dot,e.shadowBlur=6,e.beginPath(),e.arc(c,d,3-a*.06,0,Math.PI*2),e.fill()}e.shadowBlur=0,e.globalAlpha=1,e.restore()}_drawBall(e){if(!this.ball)return;const t=this.ball;e.save(),e.shadowColor=t.color,e.shadowBlur=12,e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill(),e.globalAlpha=.5,e.fillStyle="rgba(255,255,255,0.7)",e.beginPath(),e.arc(t.x-2,t.y-2,t.r*.4,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.globalAlpha=1,e.restore()}_drawSplats(e){for(const t of this.splats){const i=(1-t.t/t.maxT)*.8;e.save(),e.globalAlpha=Math.max(0,i),e.fillStyle=t.color;const n=4+t.t*8;e.beginPath(),e.arc(t.x,t.y,n,0,Math.PI*2),e.fill(),e.restore()}}_startTimer(){this.timerInt=setInterval(()=>{if(!this.solved){if(this.timer--,this.timerEl){const e=Math.floor(this.timer/60),t=this.timer%60;this.timerEl.textContent=`${e}:${t.toString().padStart(2,"0")}`,this.timer<=30&&(this.timerEl.style.color="#FF6644"),this.timer<=10&&(this.timerEl.style.animation="mm3TimerPulse 0.5s ease infinite alternate")}this.timer<=0&&this._triggerTimeout()}},1e3)}_stopTimer(){this.timerInt&&(clearInterval(this.timerInt),this.timerInt=null)}_resizeCanvas(){if(!this.canvas)return;const e=Math.min(440,window.innerWidth*.97)-32,t=e/400;this.W=Math.round(e),this.H=Math.round(240*t),this.canvas.width=this.W,this.canvas.height=this.H,this.jX=Math.round(58*t),this.jY=Math.round(218*t),this.bkX=Math.round(258*t),this.bkTopY=Math.round(105*t),this.bkBotY=Math.round(168*t),this.cnX=Math.round(322*t),this.cnY=Math.round(218*t)}_cleanup(){var e;this._stopTimer(),cancelAnimationFrame(this.rafId),(e=document.getElementById("mmv3-ov"))==null||e.remove(),this.overlay=null,this.canvas=null,this.ctx=null}_injectStyles(){if(document.getElementById("mmv3-styles"))return;const e=document.createElement("style");e.id="mmv3-styles",e.textContent=`
      @keyframes mm3Fade  { from{opacity:0}to{opacity:1} }
      @keyframes mm3Slide { from{opacity:0;transform:translateY(28px)scale(0.96)}to{opacity:1;transform:translateY(0)scale(1)} }
      @keyframes mm3TimerPulse { from{opacity:1}to{opacity:0.3} }
    `,document.head.appendChild(e)}}class Jx{constructor(){b(this,"_el",null);b(this,"_timer",null)}show(e,t,i){this.hide();const n=document.createElement("div");n.id="battle-screen-ov",n.style.cssText=`
      position:fixed; inset:0; z-index:15000;
      background:rgba(0,0,0,0.95);
      display:flex; flex-direction:column; align-items:center;
      justify-content:space-between;
      font-family:'Arial Black',Arial,sans-serif;
      overflow:hidden;
      padding: 0;
    `;const s=document.createElement("canvas");s.style.cssText=`
      position:absolute; inset:0; width:100%; height:100%; pointer-events:none;
    `,n.appendChild(s),this._animateSparks(s);const r=document.createElement("div");r.style.cssText=`
      width:100%; text-align:center; padding:20px 0 8px;
      position:relative; z-index:2;
    `,r.innerHTML=`
      <div style="font-size:clamp(28px,8vw,52px);font-weight:900;
        background:linear-gradient(180deg,#FFD700,#FF4400);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        background-clip:text;letter-spacing:3px;text-shadow:none;
        line-height:1.1;">⚔️ CONTRACT WAR</div>
      <div style="color:#aaa;font-size:clamp(11px,3vw,15px);letter-spacing:1px;
        margin-top:6px;font-weight:700;">FIRST CREW TO FINISH WINS THE CONTRACT</div>
    `,n.appendChild(r);const a=document.createElement("div");a.style.cssText=`
      display:flex; flex-direction:row; align-items:center;
      justify-content:center; gap:clamp(10px,4vw,32px);
      width:100%; padding:0 12px; box-sizing:border-box;
      flex:1; position:relative; z-index:2;
    `;const l=this._makeCrewPanel("YOUR CREW",e,"#2ECC40",!1);a.appendChild(l);const c=document.createElement("div");if(c.style.cssText=`
      display:flex; flex-direction:column; align-items:center;
      gap:6px; flex-shrink:0;
    `,c.innerHTML=`
      <div id="battle-vs-text" style="
        font-size:clamp(32px,10vw,64px); font-weight:900;
        color:#FF4444; text-shadow:0 0 30px #FF4444,0 0 60px #FF000066;
        animation:battle-vs-pulse 0.8s ease-in-out infinite alternate;
        line-height:1;
      ">VS</div>
      <div style="color:#666;font-size:10px;letter-spacing:2px;">WINNER TAKES ALL</div>
    `,!document.getElementById("battle-vs-style")){const f=document.createElement("style");f.id="battle-vs-style",f.textContent=`
        @keyframes battle-vs-pulse {
          from { text-shadow: 0 0 20px #FF4444, 0 0 40px #FF000066; transform:scale(1.0); }
          to   { text-shadow: 0 0 40px #FF6666, 0 0 80px #FF0000aa; transform:scale(1.08); }
        }
        @keyframes battle-glow-green {
          from { box-shadow: 0 0 12px #2ECC4060, inset 0 0 8px #2ECC4020; }
          to   { box-shadow: 0 0 28px #2ECC40bb, inset 0 0 16px #2ECC4040; }
        }
        @keyframes battle-glow-red {
          from { box-shadow: 0 0 12px #FF444460, inset 0 0 8px #FF444420; }
          to   { box-shadow: 0 0 28px #FF4444bb, inset 0 0 16px #FF444440; }
        }
        @keyframes battle-countdown-pulse {
          0%   { transform:scale(1.0); color:#FFD700; }
          50%  { transform:scale(1.3); color:#FF4444; }
          100% { transform:scale(1.0); color:#FFD700; }
        }
      `,document.head.appendChild(f)}a.appendChild(c);const d=this._makeRivalPanel(t);a.appendChild(d),n.appendChild(a);const u=document.createElement("div");u.style.cssText=`
      width:100%; text-align:center;
      padding:16px 0 24px; position:relative; z-index:2;
    `;const h=document.createElement("div");h.id="battle-countdown",h.style.cssText=`
      font-size:clamp(18px,5vw,28px); font-weight:900; color:#FFD700;
      letter-spacing:2px;
    `,h.textContent="⚔️ BATTLE STARTS IN 3...",u.appendChild(h),n.appendChild(u),document.body.appendChild(n),this._el=n,this._timer=setTimeout(()=>{h.style.animation="battle-countdown-pulse 0.6s ease",h.textContent="⚔️ BATTLE STARTS IN 2...",this._timer=setTimeout(()=>{h.style.animation="battle-countdown-pulse 0.6s ease",h.textContent="⚔️ BATTLE STARTS IN 1...",this._timer=setTimeout(()=>{h.style.animation="",h.style.color="#FF4444",h.style.fontSize="clamp(22px,6vw,36px)",h.textContent="🚨 GO GO GO!",this._timer=setTimeout(()=>{this.hide(),i()},600)},1e3)},1e3)},1e3)}hide(){var e;this._timer&&(clearTimeout(this._timer),this._timer=null),(e=this._el)==null||e.remove(),this._el=null}_makeCrewPanel(e,t,i,n){const s=document.createElement("div");s.style.cssText=`
      background:linear-gradient(135deg,#0a1a0a,#0d200d);
      border:2px solid ${i};
      border-radius:14px; padding:14px 10px;
      display:flex; flex-direction:column; align-items:center; gap:10px;
      min-width:clamp(110px,28vw,200px); max-width:200px;
      flex:1;
      animation: battle-glow-green 1.2s ease-in-out infinite alternate;
    `;const r=document.createElement("div");r.style.cssText=`
      color:${i}; font-size:clamp(9px,2.5vw,13px); font-weight:900;
      letter-spacing:2px; text-align:center;
    `,r.textContent=e,s.appendChild(r);const a=So,l=[],c=a.find(d=>d.id==="jose");return c&&l.push(c),t.filter(d=>d!=="jose").forEach(d=>{const u=a.find(h=>h.id===d);u&&l.push(u)}),l.slice(0,3).forEach((d,u)=>{const h=document.createElement("div");h.style.cssText="display:flex;flex-direction:column;align-items:center;gap:3px;";const f=this._makePlayerAvatar(d,60);h.appendChild(f);const g=document.createElement("div");if(g.style.cssText="color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;",g.textContent=d.name,h.appendChild(g),u===0){const x=document.createElement("div");x.style.cssText=`
          background:#E8A830;color:#000;font-size:7px;font-weight:900;
          padding:1px 5px;border-radius:8px;
        `,x.textContent="MASCOT",h.appendChild(x)}s.appendChild(h)}),s}_makeRivalPanel(e){const t=document.createElement("div");t.style.cssText=`
      background:linear-gradient(135deg,#1a0a0a,#200d0d);
      border:2px solid ${e.color};
      border-radius:14px; padding:14px 10px;
      display:flex; flex-direction:column; align-items:center; gap:8px;
      min-width:clamp(110px,28vw,200px); max-width:200px;
      flex:1;
      animation: battle-glow-red 1.2s ease-in-out infinite alternate;
    `;const i=document.createElement("div");i.style.cssText=`
      color:${e.color}; font-size:clamp(9px,2.5vw,13px); font-weight:900;
      letter-spacing:2px; text-align:center;
    `,i.textContent=e.name.toUpperCase(),t.appendChild(i);const n=document.createElement("div");return n.style.cssText=`
      color:#aaa; font-size:clamp(7px,1.8vw,10px); text-align:center;
      font-style:italic; line-height:1.3; max-width:150px;
    `,n.textContent=`"${e.tagline}"`,t.appendChild(n),e.members.forEach(s=>{const r=document.createElement("div");r.style.cssText="display:flex;flex-direction:column;align-items:center;gap:3px;";const a=this._makeRivalAvatar(s,60);r.appendChild(a);const l=document.createElement("div");l.style.cssText="color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;",l.textContent=s.name,r.appendChild(l),t.appendChild(r)}),t}_makePlayerAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%;display:block;";const n=i.getContext("2d"),s=t/2;n.fillStyle=e.locked?"#1a0800":"#1a1a2a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill();const r=t*.44,a=t*.22;switch(n.fillStyle=e.skinTone,n.fillRect(s-t*.07,t*.62,t*.14,t*.22),n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,r,a*.88,a,0,0,Math.PI*2),n.fill(),n.fillStyle=e.hairColor,n.strokeStyle=e.hairColor,e.id){case"jose":{n.lineCap="round",[{dx:-10,len:t*.3,w:2.5},{dx:-4,len:t*.34,w:3},{dx:2,len:t*.32,w:2.5},{dx:7,len:t*.28,w:2}].forEach(c=>{n.lineWidth=c.w,n.beginPath(),n.moveTo(s+c.dx,r-a*.1),n.bezierCurveTo(s+c.dx-2,r+c.len*.5,s+c.dx+2,r+c.len*.8,s+c.dx,r+c.len),n.stroke()}),n.fillStyle=e.hairColor,n.beginPath(),n.arc(s,r-a*.55,a*1.02,Math.PI,0),n.fill();break}default:{n.beginPath(),n.arc(s,r-a*.55,a*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s,r-a*1.2,a*.6,a*.28,0,0,Math.PI*2),n.fill();break}}return n.strokeStyle="#2ECC4099",n.lineWidth=2,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}_makeRivalAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%;display:block;";const n=i.getContext("2d"),s=t/2,r=t*.44,a=t*.22;return n.fillStyle="#1a0a0a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill(),n.fillStyle=e.skinTone,n.fillRect(s-t*.07,t*.62,t*.14,t*.22),n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,r,a*.88,a,0,0,Math.PI*2),n.fill(),this._drawRivalHair(n,e.hairStyle,e.hairColor,s,r,a,t),n.strokeStyle=e.accentColor+"99",n.lineWidth=2,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}_drawRivalHair(e,t,i,n,s,r,a){switch(e.fillStyle=i,e.strokeStyle=i,t){case"buzz":{e.beginPath(),e.arc(n,s-r*.45,r*1.04,Math.PI,0),e.fill(),e.fillStyle=i+"aa";for(let l=-3;l<=3;l++)e.fillRect(n+l*4-1,s-r*1.25,2,r*.32);break}case"afro":{e.beginPath(),e.arc(n,s-r*.5,r*1.6,0,Math.PI*2),e.fill(),e.fillStyle=i+"44",e.beginPath(),e.arc(n-r*.3,s-r*1.2,r*.5,0,Math.PI*2),e.fill();break}case"bald":{e.fillStyle="rgba(255,255,255,0.12)",e.beginPath(),e.ellipse(n-r*.15,s-r*.85,r*.35,r*.18,-.3,0,Math.PI*2),e.fill();break}case"long":{e.beginPath(),e.arc(n,s-r*.5,r*1.05,Math.PI,0),e.fill(),e.beginPath(),e.moveTo(n-r*.9,s-r*.1),e.bezierCurveTo(n-r*1.1,s+r*.5,n-r*1,s+r*1.2,n-r*.7,s+r*1.5),e.lineTo(n-r*.3,s+r*1.5),e.bezierCurveTo(n-r*.6,s+r*1,n-r*.5,s+r*.4,n-r*.7,s),e.fill(),e.beginPath(),e.moveTo(n+r*.9,s-r*.1),e.bezierCurveTo(n+r*1.1,s+r*.5,n+r*1,s+r*1.2,n+r*.7,s+r*1.5),e.lineTo(n+r*.3,s+r*1.5),e.bezierCurveTo(n+r*.6,s+r*1,n+r*.5,s+r*.4,n+r*.7,s),e.fill();break}case"short":{e.beginPath(),e.arc(n,s-r*.55,r*1.05,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(n-r*.1,s-r*1.3,r*.58,r*.26,-.1,0,Math.PI*2),e.fill();break}case"slicked":case"slick":{e.beginPath(),e.arc(n,s-r*.55,r*1.05,Math.PI,0),e.fill(),e.strokeStyle="#00000044",e.lineWidth=1.5,e.beginPath(),e.moveTo(n-r*.2,s-r*1.4),e.lineTo(n-r*.2,s-r*.6),e.stroke(),e.fillStyle=i+"55",e.beginPath(),e.ellipse(n+r*.2,s-r*1.1,r*.35,r*.12,.2,0,Math.PI*2),e.fill();break}case"bun":{e.beginPath(),e.arc(n,s-r*.55,r*1.02,Math.PI,0),e.fill(),e.beginPath(),e.arc(n,s-r*1.55,r*.55,0,Math.PI*2),e.fill(),e.fillStyle=i+"66",e.beginPath(),e.arc(n-r*.15,s-r*1.7,r*.18,0,Math.PI*2),e.fill();break}case"ponytail":{e.fillStyle=i,e.beginPath(),e.arc(n,s-r*.55,r*1.02,Math.PI,0),e.fill(),e.beginPath(),e.moveTo(n+r*.5,s-r*.8),e.bezierCurveTo(n+r*1.4,s-r*.4,n+r*1.5,s+r*.6,n+r*.8,s+r*1.4),e.lineTo(n+r*.5,s+r*1.4),e.bezierCurveTo(n+r*1,s+r*.5,n+r*.9,s-r*.2,n+r*.2,s-r*.7),e.fill();break}}}_animateSparks(e){const t=e.getContext("2d");let i;const n=[],s=["#FFD700","#FF4444","#FF8800","#FFFFFF","#FF6600"];(()=>{e.width=window.innerWidth,e.height=window.innerHeight})();const a=()=>{const c=window.innerWidth/2,d=window.innerHeight/2,u=Math.random()*Math.PI*2,h=1+Math.random()*4;n.push({x:c+(Math.random()-.5)*60,y:d+(Math.random()-.5)*60,vx:Math.cos(u)*h,vy:Math.sin(u)*h-1,life:0,maxLife:30+Math.random()*40,color:s[Math.floor(Math.random()*s.length)],size:1+Math.random()*3})},l=()=>{if(!document.getElementById("battle-screen-ov")){cancelAnimationFrame(i);return}t.clearRect(0,0,e.width,e.height),Math.random()<.4&&a();for(let c=n.length-1;c>=0;c--){const d=n[c];d.x+=d.vx,d.y+=d.vy,d.vy+=.05,d.life++;const u=1-d.life/d.maxLife;if(u<=0){n.splice(c,1);continue}t.globalAlpha=u,t.fillStyle=d.color,t.beginPath(),t.arc(d.x,d.y,d.size,0,Math.PI*2),t.fill()}t.globalAlpha=1,i=requestAnimationFrame(l)};i=requestAnimationFrame(l)}async injectLeaderboard(e){const t=document.getElementById("battle-screen-ov");if(!t)return;const i=e.replace(/^⚔️\s*/,"").trim(),n=await Hx(i,5),s=document.createElement("div");if(s.style.cssText=`
      position:absolute; bottom:80px; left:50%; transform:translateX(-50%);
      width:90%; max-width:340px; z-index:3;
      background:rgba(0,0,0,0.75); border:1px solid #FFD70040;
      border-radius:10px; padding:10px 14px;
    `,n.length===0)s.innerHTML=`
        <div style="color:#FFD700;font-size:10px;font-weight:900;letter-spacing:2px;
                    text-align:center;margin-bottom:6px;">⚡ FASTEST CREWS</div>
        <div style="color:#666;font-size:11px;text-align:center;font-style:italic;">
          No records yet — be the first to set one!
        </div>
      `;else{const r=n.map((a,l)=>{const c=l===0?"🥇":l===1?"🥈":l===2?"🥉":`${l+1}.`,d=Math.floor(a.completion_time_s/60),u=String(Math.round(a.completion_time_s%60)).padStart(2,"0");return`
          <div style="display:flex;justify-content:space-between;align-items:center;
                      padding:3px 0;border-bottom:1px solid #ffffff10;">
            <span style="color:#FFD700;font-size:10px;">${c}</span>
            <span style="color:#fff;font-size:10px;font-weight:700;flex:1;margin:0 8px;
                         white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              ${a.player_name}
            </span>
            <span style="color:#2ECC40;font-size:10px;font-weight:700;">
              ${d}:${u}
            </span>
          </div>
        `}).join("");s.innerHTML=`
        <div style="color:#FFD700;font-size:10px;font-weight:900;letter-spacing:2px;
                    text-align:center;margin-bottom:6px;">⚡ FASTEST CREWS — BEAT THEM</div>
        ${r}
      `}t.appendChild(s)}}class Kx{constructor(){b(this,"_active",!1);b(this,"_rival",null);b(this,"_rivalProgress",0);b(this,"_playerProgress",0);b(this,"_el",null)}start(e){this.end(),this._active=!0,this._rival=e,this._rivalProgress=0,this._playerProgress=0,this._buildUI(e)}setPlayerProgress(e){this._playerProgress=Math.min(1,Math.max(0,e))}update(e){!this._active||!this._rival||(this._rivalProgress=Math.min(1,this._rivalProgress+this._rival.speed*.4*e),this._updateUI(),this._rivalProgress>=1&&this.checkResult()==="rival-wins"&&this._showRivalWin())}isActive(){return this._active}getRivalProgress(){return this._rivalProgress}checkResult(){return this._playerProgress>=1?"player-wins":this._rivalProgress>=1?"rival-wins":"ongoing"}end(){var e;this._active=!1,this._rival=null,this._rivalProgress=0,this._playerProgress=0,(e=this._el)==null||e.remove(),this._el=null}_buildUI(e){const t=document.createElement("div");t.id="contract-war-hud",t.style.cssText=`
      position:fixed; top:0; left:0; right:0; z-index:5000;
      pointer-events:none;
    `;const i=document.createElement("div");i.id="cw-label",i.style.cssText=`
      background:rgba(0,0,0,0.7);
      color:${e.color};
      font-family:'Arial Black',Arial,sans-serif;
      font-size:10px; font-weight:900;
      letter-spacing:1px;
      padding:2px 8px;
      display:inline-block;
    `,i.textContent=`⚔️ ${e.name.toUpperCase()} PROGRESS`,t.appendChild(i);const n=document.createElement("div");n.style.cssText=`
      position:relative;
      width:100%; height:8px;
      background:rgba(0,0,0,0.5);
      overflow:hidden;
    `;const s=document.createElement("div");s.id="cw-fill",s.style.cssText=`
      height:100%;
      width:0%;
      background:linear-gradient(90deg,${e.color},#FF0000);
      transition:width 0.3s linear;
      box-shadow:0 0 8px ${e.color}88;
    `,n.appendChild(s),t.appendChild(n),document.body.appendChild(t),this._el=t}_updateUI(){const e=document.getElementById("cw-fill");e&&(e.style.width=`${this._rivalProgress*100}%`)}_showRivalWin(){if(document.getElementById("cw-rival-win"))return;const e=document.createElement("div");if(e.id="cw-rival-win",e.style.cssText=`
      position:fixed; inset:0; z-index:14999;
      background:rgba(180,0,0,0.82);
      display:flex; align-items:center; justify-content:center;
      font-family:'Arial Black',Arial,sans-serif;
      font-size:clamp(20px,6vw,40px); font-weight:900;
      color:#fff; text-align:center; letter-spacing:2px;
      text-shadow:0 0 20px #FF0000;
      animation:cw-flash-in 0.3s ease;
      padding:20px;
    `,e.innerHTML=`THEY WON THE CONTRACT 😤<br>
      <span style="font-size:0.5em;color:#ffaaaa;letter-spacing:1px;">Better luck next time, mate.</span>`,!document.getElementById("cw-flash-style")){const t=document.createElement("style");t.id="cw-flash-style",t.textContent="@keyframes cw-flash-in{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}",document.head.appendChild(t)}document.body.appendChild(e),setTimeout(()=>{e.remove(),this.end()},2e3)}}const Sc=[{id:"perth_plasterers",name:"Perth Plasterers",tagline:"They drove 3000km just to lose.",color:"#FF4444",difficulty:.45,speed:.55,members:[{name:"Barry",skinTone:"#D4B090",hairColor:"#444444",hairStyle:"buzz",accentColor:"#FF4444"},{name:"Dazza",skinTone:"#E8C8A0",hairColor:"#8B4513",hairStyle:"short",accentColor:"#FF4444"},{name:"Shazza",skinTone:"#FDDBB4",hairColor:"#C4832A",hairStyle:"long",accentColor:"#FF4444"}]},{id:"sydney_stucco",name:"Sydney Stucco",tagline:"Fancy tools, slow hands.",color:"#4488FF",difficulty:.6,speed:.65,members:[{name:"Blake",skinTone:"#E0B090",hairColor:"#1a0e00",hairStyle:"slicked",accentColor:"#4488FF"},{name:"Jaxon",skinTone:"#D4A070",hairColor:"#2a1800",hairStyle:"bun",accentColor:"#4488FF"},{name:"Tiffany",skinTone:"#F5DEB3",hairColor:"#C8A060",hairStyle:"ponytail",accentColor:"#4488FF"}]},{id:"brisbane_brushmen",name:"Brisbane Brushmen",tagline:"Rough as guts, twice as slow.",color:"#FF8C00",difficulty:.35,speed:.42,members:[{name:"Cobber",skinTone:"#D4A060",hairColor:"#888888",hairStyle:"bald",accentColor:"#FF8C00"},{name:"Mozzie",skinTone:"#C89050",hairColor:"#2a1000",hairStyle:"afro",accentColor:"#FF8C00"},{name:"Bazza",skinTone:"#E0C090",hairColor:"#5a3010",hairStyle:"short",accentColor:"#FF8C00"}]},{id:"melbourne_mafia",name:"Melbourne Mafia",tagline:"They know this city. So does Jose.",color:"#9B59B6",difficulty:.8,speed:.82,members:[{name:"Dante",skinTone:"#B07040",hairColor:"#1a0e00",hairStyle:"slick",accentColor:"#9B59B6"},{name:"Viktor",skinTone:"#C08060",hairColor:"#333333",hairStyle:"buzz",accentColor:"#9B59B6"},{name:"Rosa",skinTone:"#E8C0A0",hairColor:"#4a2010",hairStyle:"long",accentColor:"#9B59B6"}]}];function Zx(){return Sc[Math.floor(Math.random()*Sc.length)]}const Qx={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late. Ehhhh —" he waves it off. "I found a pizza place nearby. Very acceptable."`};async function ev(){await vg();const o=await new Rx().play();await new Fx().show(o);const e=new _g;await e.init();const t=new Tg(e.scene);t.spawnCrewAtCityPositions();const i=new Wg,n=new Eg(e.scene),s=new Xg,r=new Zg,a=new bx,l=new Mo,c=new Dg(n,i,de=>{l.activePhase>=2&&s.triggerBump(de)},e.collisionWorld,()=>{l.activePhase>=2&&s.triggerCrash()}),d=new ua(e.scene),u=new pa,h=new Jx,f=new Kx,g=new $g(de=>{g.hide(),u.show(de.title,de.pay,W=>{const Z=Math.round(de.pay*Nx()),ye=zx(),ae=()=>{a.show(`📋 ${de.title}`,`Client: ${de.client}

${de.description}

💰 Pay: ${Z.toLocaleString()} sats${Z!==de.pay?" ✦ crew bonus!":""}

🏭 Head to the TEM workshop to collect supplies.`,()=>{if(de.pay=Z,l.acceptJob(de),d.setTarget(Mo.WORKSHOP_POS),r.setActiveJob(de,1),r.updateCrewStatus([],[],!1),V=0,Ox())re=1/0,le=1/0;else{const ne=20+Math.random()*60+ye,pe=ne+20+Math.random()*50;Math.random()>.5?(re=ne,le=pe):(le=ne,re=pe)}he=null,Le=null},Ji(wx))};de.isContested?J.show(ne=>{const pe=Zx();z=de.title,h.show(wc(),pe,()=>{f.start(pe),ae()}),setTimeout(()=>h.injectLeaderboard(de.title),50)}):ae()})});s.onSpill=de=>{l.money=Math.max(0,l.money-de),r.updateMoney(l.money),r.showSpillPenalty(de)};const x=new gx(e.scene),m=new fa(e.scene),p=new xx,w=new nn(e.scene),T=new ms(e.scene),v=new _x,R=new D(nn.POS.x,6,nn.POS.z),A=new cx,C=new ux,I=new Ms,S=new $x,_=new Sx,P=new kx(()=>C.show(),()=>{if(g.isVisible())g.hide();else{const de=[...l.getAvailableJobs(),...l.getContestedJobs()];g.show(de)}},()=>S.show(de=>{de>0&&(l.money+=de*1e3,r.updateMoney(l.money),r.showToast(`🎨 Formula cracked! +${(de*1e3).toLocaleString()} sats`,4513160))}));P.mountMoneyPanel(r.getMoneyPanel()),P.mountRadio(_.getEl());let N=!1,z="",X=0;const J=new Xx,j={x:-60,z:-100},te={x:100,z:60};let V=0,re=-1,le=-1,he=null,Le=null;e.onUpdate(de=>{const W=n.mesh.position.x,Z=n.mesh.position.z;if(a.isActive){(i.forward||i.brake)&&a.tryResume(),t.updateAll(de),w.update(de,W,Z,v),T.update(de,W,Z,v),e.camera.follow(n.mesh.position,n.velocity,n.heading);{const ne=R.clone().project(e.camera.camera),pe=(ne.x*.5+.5)*window.innerWidth,De=(-ne.y*.5+.5)*window.innerHeight;v.setScreenPosition(pe,De)}return}c.update(de),n.updateSuspension(de),f.isActive()&&f.update(de);const ye=l.activeJob!==null&&l.activePhase>=2;if(s.setVisible(ye),ye?s.update(de):s.level=0,t.updateAll(de),m.update(de),m.tryVisit(W,Z)&&he!=="coffee"&&(s.level=Math.max(0,s.level-.6),p.drinkCoffee(),p.isUrgent?r.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):r.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),p.update(de,l.activeJob?c.speed:0),p.tryRelief(W,Z)&&he!=="toilet"&&r.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),p.isUrgent&&l.activeJob){const ne=Date.now();ne-p.lastUrgentToast>15e3&&(p.lastUrgentToast=ne,r.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}s.spillRateMultiplier=p.spillMultiplier,w.update(de,W,Z,v)&&R.set(nn.POS.x,6,nn.POS.z),T.update(de,W,Z,v)&&R.set(ms.POS.x,6,ms.POS.z);const ae=t.checkProximityDialogue(W,Z);ae&&(R.set(ae.pos.x,6,ae.pos.z),v.show(zi[ae.name],ae.line));{const ne=R.clone().project(e.camera.camera),pe=(ne.x*.5+.5)*window.innerWidth,De=(-ne.y*.5+.5)*window.innerHeight;v.setScreenPosition(pe,De)}if(x.update(de,W,Z),d.update(de,W,Z),l.activeJob){const ne=l.tickTravel(de);r.updateTravelTimer(l.travelTimer),ne!=null&&ne.failed&&(s.level=0,he=null,Le=null,re=-1,le=-1,d.setTarget(null),r.updateTravelTimer(null),r.showTimerFail(15e4),r.setActiveJob(null,1),r.updateMoney(l.money),r.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>{f.end();const pe=[...l.getAvailableJobs(),...l.getContestedJobs()];g.show(pe)},3500))}else r.updateTravelTimer(null);if(l.activeJob!==null)if(l.activePhase===1)r.updateJobDistance(l.distanceToWorkshop(W,Z));else if(l.activePhase===2){const ne=l.nextCrewNeeded();if(ne){const pe=t.getCrewPosition(ne);r.updateJobDistance(l.distanceToPoint(W,Z,pe.x,pe.z))}}else r.updateJobDistance(l.distanceTo(W,Z));if(l.activeJob&&!he&&!N&&(V+=de,re>0&&V>=re?(re=-1,he="coffee",Le=d.currentTarget,d.setTarget(j),r.showToast("☕ Gagging for a coffee — hit the cafe NOW!",13918762)):le>0&&V>=le&&(le=-1,he="toilet",p.level=.88,p.isUrgent=!0,Le=d.currentTarget,d.setTarget(te),r.showToast("🚽 Bursting! Find the toilet before you ruin the plastering!",16733986))),l.activeJob&&he&&!N){const ne=he==="coffee"?j:te,pe=W-ne.x,De=Z-ne.z;if(Math.sqrt(pe*pe+De*De)<14){N=!0;const qe=he;he=null;const Oe=Le;Le=null,qe==="coffee"?(p.drinkCoffee(),a.show("☕ Coffee Break!",`You grab a flat white. The barista nods — they know the order.

Bladder's loading... don't take too long.

Back on the road.`,()=>{d.setTarget(Oe),N=!1},Ji(vr))):(p.level=0,p.isUrgent=!1,p.caffeinated=!1,a.show("🚽 Phew — Crisis Averted!",`Barely made it. Not a word to the crew.

Back on the road.`,()=>{d.setTarget(Oe),N=!1},Ji(vr)))}}if(l.activeJob&&l.activePhase===1&&!he&&!N&&l.checkPhase1Arrival(W,Z)){N=!0,s.level=0,T.playLaugh();const ne=l.crewToPickup.join(" + ");a.show("📦 Supplies Loaded!",`Connie's cackle echoes through the factory as the buckets go in.

Now go pick up the crew:
👷 ${ne}

They're scattered around the city. Your waypoint will guide you.`,()=>{l.advanceToPhase2();const pe=l.nextCrewNeeded();if(pe){const De=t.getCrewPosition(pe);d.setTarget(De)}r.showPhase1Complete(),r.setActiveJob(l.activeJob,2),r.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),N=!1},Ji(xr))}if(l.activeJob&&l.activePhase===2&&!he&&!N)for(const ne of l.crewToPickup){if(l.crewPickedUp.includes(ne))continue;const pe=t.getCrewPosition(ne);if(l.distanceToPoint(W,Z,pe.x,pe.z)<10){N=!0,t.hideCrew(ne);const qe=l.pickupCrew(ne);r.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0);const Oe=Qx[ne]??`${ne} hops in.`;if(qe)a.show(`🚐 ${ne} aboard — Full crew!`,`${Oe}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{l.advanceToPhase3(),d.setTarget(l.activeJob.position),r.showCrewPickup(ne,null),r.setActiveJob(l.activeJob,3),N=!1},Ji(xr));else{const rt=l.nextCrewNeeded(),F=l.crewToPickup.filter(mt=>!l.crewPickedUp.includes(mt)).join(", ");a.show(`🧑‍🔧 ${ne} aboard!`,`${Oe}

Still need to collect:
👷 ${F}`,()=>{if(rt){const mt=t.getCrewPosition(rt);d.setTarget(mt),r.showCrewPickup(ne,rt)}r.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),N=!1},Ji(vr))}break}}if(l.activeJob&&l.activePhase===3&&!he&&!N&&!A.isActive()){const ne=l.checkArrival(W,Z);ne!==null&&(N=!0,d.setTarget(null),a.show(`🏗️ ${ne.title}`,`${ne.client} is waiting.

${ne.description}

Time to get to work. Show them what TEM does.`,()=>{r.setActiveJob(null,3),r.updateCrewStatus([],[],!1),_.setVisible(!1),X=Date.now(),A.startRandom(pe=>{if(_.setVisible(!0),f.isActive()){f.setPlayerProgress(1),f.end();const qe=(Date.now()-X)/1e3;Gx({player_name:Ad()??"TEM Crew",job_title:z.replace(/^⚔️\s*/,"").trim(),crew_ids:wc(),completion_time_s:Math.round(qe),payout:Math.max(0,ne.pay)})}const De=l.completeJob(ne,pe.qualityPct);De<0?r.showPenalty(ne.title,Math.abs(De)):r.showJobComplete(ne.title,De),r.updateMoney(l.money),t.showAllCrew(),he=null,Le=null,re=-1,le=-1,N=!1,bd()&&!Ms.isUnlocked()?setTimeout(()=>I.trigger(),2e3):setTimeout(()=>{const qe=[...l.getAvailableJobs(),...l.getContestedJobs()];qe.length>0&&g.show(qe)},3500)})},Ji(xr)))}e.camera.follow(n.mesh.position,n.velocity,n.heading),r.update(c.speed,s.level)}),setTimeout(()=>{const de=[...l.getAvailableJobs(),...l.getContestedJobs()];g.show(de)},1e3),e.start()}ev().catch(o=>{console.error("Game init failed:",o),document.body.style.background="#000";const e=document.createElement("div");e.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,e.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(o==null?void 0:o.message)||String(o)}`,document.body.appendChild(e)});
//# sourceMappingURL=index-CQpL0GbT.js.map
